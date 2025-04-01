/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "5RkF9xYRBsguERyVuTWG1mForM4fiqAmhSdYg6yTH4KUehU5ivUZrSag9TuKxQBVQoMMvkwetX6VNsdYg6widuF1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hsyLjkSB8GSediuV9ahScRK31K8UBaoZZvgQryFmbp5VYKdRBBiPs8Q71etLLAUU15M2fsKVZb239z7RpFGY5yY",
  "key1": "2SXmpNjvmsKzES1KF2KDGpQW7Lzr5SF4Gaz4RWnAGbfrzYb5zNxRsmT9V2D6V7rVnQ9PgFKRVUhMyHvp86JDJynv",
  "key2": "4HK5HRyq1cZX3eHEhoizjxYtdeo63u9smGsUKxUMhPxsStKYAyMExZqgXQrWqcbZVpMfAaTFJQRe9a2Muwdd9W3q",
  "key3": "QY36Fnh6fY3GqHVmkgy6fLFFwSCfHdp9Z2VDrVRdSHzmRMZM1L9Ucyocm4M5cRUS8GxiiMq664vr7Jer6WzNuKF",
  "key4": "Vb2gcC4QQNUdMVLBxQrr12wJe6c3Csz4stQvSCLxi1g9KmojTLJgQGfxtVk7cXMbL3tF57F67NQg6bNRWmufv34",
  "key5": "4EE3fvwPtRNVzUSuMQ2ZrQxicAcJcT6EKuSDhjePUHRXqdX8qXjkoNpxKeHQopfW58vLWXct7kbXadJPG4SS7UKs",
  "key6": "2sNd1o8YPtMvQruUwpKM6yVZBXT4B9H3VHPoY7raQz7gbbkNpL34C2ADZxd1DdyA3v81bUms61hV2mPEnRjzcgyt",
  "key7": "3ztXoW2F9GBHw1QZ9ESzfiV4vdFb6nTmSfyBeBwif4ciSEJgbZt4fqEgoGDcy2fKquQzpEPjTAoa2ViCJFZgEBqW",
  "key8": "nUji9pjcWtb3DKy1mMwqWPFkvqKyB3MAkgVRznnp3sBy1QmRhyZT3qGMh6WxAiz9A6GmkMkagGxRWLxTXMPrHkQ",
  "key9": "5aWLT2L1dEjqkhkLvh6xNT9QubFmtbtBGcnhXmm56spMBEW8Z4XsfkKtkdmGfpeCC7o2Mfv4sB8u7tNejP7a6wSJ",
  "key10": "LKwXYh2KnbV6NPcA7jjRU4PZZqxmoEw6yUtRKNtFs5ZGvoS897FtiWhq7uqos3UL6WWMRCEkbKGHmpejs1VGSD8",
  "key11": "3Kt3Q1inHk7JG6aCnUgr5CXChq7VWkQeqKqMQiViLFnHBkcjfu41vcXsm1K8yNmbWYoQbeaQUCRn6iqteDWh9jH",
  "key12": "5AT3cZDFBCawRHGWmFHRadShqWg6b4t8UokBm1tt9Tw1Z86APRmDLXXrjpQW7YrB311C6FaEpU9DfFXWYq2mbaCd",
  "key13": "wV2NyoxKTrCzgvJzecp9EDveZKvojJxcehrYuh9b6aD56kWVXiWcd2DSFzmmcfZK3onMJsLLGkzZrEzLPHiH14c",
  "key14": "2NNp6unfL92PoTvNgFbYYYxWocU7eRvDeQEMsKsMGB1z8dzN41v5uKUaHiPDuZ9wnnfC82sv5kLNnRF1aAmVHHXs",
  "key15": "3LdPu4aT3WqdLfNTCGNDuPy5og6RQ5fqgYmWQLVUCzMQ4Bb8JmxiHnApgGbSizjGBFXZMwRRuVtrvPt5CsMpvsi6",
  "key16": "2kCZN1z9iiKSwiEooUeYcjrfn2EGpiVnmes8yBPtHGw8MfBQicXT4JDF4JWB5rdiBKocEi3rfMH4Xqr17ggnAN14",
  "key17": "3pQRFkmDgoNfYGuNcg19J3MGFWhKYDi5mq9Njtp2bnCghViCKUyw8xM7Ev5uxhWhH3k234SHZSPaToeah3h82kWL",
  "key18": "2vLozEo6CwsMzzRFui6M7FozygiGuirC1Rh7kW3wvrDsRy4P9XHqXYLA3X6N21EFuE2zDQfNiiLkAkV7cvgr4BK5",
  "key19": "3Zrxfo3RZvwASgojGivMWWiKGTjP6iQvDJQfeDAyH9rcxgz3vzt9FjDfKNmGvmvaa6Z5LLirUYeAK9XmQaZxgurk",
  "key20": "4xFKBvreFifCqfbkwBigp38jxFEYc9E6hJNif7uhWGJKNPjjmpFd5QG3Xe7tSKKHxFhNwRXnqrE3j9g4RGxeeEGt",
  "key21": "49cHbatprWMLhcX7wxEC61pwgUycM3EN9aV7kPgZMWGSH5EAycUM1pSDadyxMtC3B8dWRBdkhUqWASu62PFbYnht",
  "key22": "4sMxXsLCjPeCT6DYJWFwzrdm78wKcUpdcejyKeYkjfXb1dDGouumgtYPRs3uCfuE2WcycwzVLqPgx1hGxso6hmHd",
  "key23": "5fFVVmsbn9mW5jqa1HZivMs7NdvtWz7go5nJfihpBqZzgYa7W8orYHyRRoWAFMkC2go7wPfRfASfEMwLJB8h33Xr",
  "key24": "5N3YhCM5R8mN3BaVKYjzQe6ZxPCC72frLtqXoSJevL1Fsh3fJHc3zERpPneqrkM2cU1YqQY9P2tscG9jsSei9p9s",
  "key25": "286UDfX1rVCkDy7rJfF2WKmS7uY5iCXJqRcC2W2g3xN4U7RXcXjdjsD6wM8Ukaei8KSxKaVgcLJ3pUypsnApqTqx",
  "key26": "5ShoNZ64VKUk965xS9kVQeA9NECgs1AoAtfsmGvo6rpcCciMwkgeT83PsDEQ2aHvjVoH18ndp1CbrkMZ4PRAnnG9",
  "key27": "ZisCswCpm8pgDfF2nnhfhu93ksGYwYioniGfswqM4fAaCTgm9LAcFkQBWdWzYcRLzoMgHSnCyrSfahCHyoUip5K",
  "key28": "QMEuNVB6PJXQWxVs1s5A4sSUvmRACKpcgazj33rHguRrmWvrTsR8UNY5WHZzgrfpDW7EikuTKHSkdhRmRNamtV7",
  "key29": "3JjVyNaUtqRj9XwmEWVfQBCz7KiAA8CDQfDHDE2ZuZi2AH6eyQSfGnWJh3GKYNF5io4mXiBWWHA3Cu4VVcWWAkCW",
  "key30": "2HXAxrEWYwMWW38naMVXWUMC2pReU4ho2oh9MgK9WX4DXDyHmQhmMACTW4TgCgrcbaoTJucD5fsTSCzz2ULt5Kg7",
  "key31": "5N9RQT8X9AY1ShgkizAcp1juEhAZrWUU9Jb8w1zDqb1diisUApzves48SevpEnihDo4V1QKAWa4AGSuPUZonjdGy",
  "key32": "2MZepkw9uybWsqvz52xa6UVeWC4kXRKwLUJiQmFUicxn9cT1ZkcbLwp5S8UQXkQvtS8inBfkSXkmT5jPZStroDDb",
  "key33": "4DnZbLeN7CEVnPu31EkRLpiUPSqdJsuUUE9Kg83Cn6KVhJzYtHxy8bPsVNzidKAUgPjaZpYeASmazNTE1jedRqq6",
  "key34": "4gnrir73etVohXHJp4gXkxEtNjFNXEZFweHM6sfpAuxVCzx1m2uiJinnGAHwi4dWdiZZ7gXjXg53UwhqFsL5Brmy",
  "key35": "2jZtHZ14H711pNPBzzxrhnNbihydVU6jf9pr5RXk5yLDuf7g1bokEtP7MtGbhqLVKoYaGoKu4Az3sVHT7qk6moFs",
  "key36": "VyHeRcZvnGFBeMVhCn6qAVPvUcNogjAKwYjPb33jyiTLLDtfHHraBhtnakHPUxEb4s8RaHnSKwmK54tv1bEW9CR"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
