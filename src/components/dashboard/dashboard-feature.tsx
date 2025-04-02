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
    "5boarrYvhtNZ16iXfdPdtcyDTvpsJioJ7GBsQKzGQSw2KDArnLS7y7jmtKbwMUQ19n9og4U9xenPiHshQVTAqqgu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A3UPPimGBrTr8h3vs3bhJkV1RJEWNDcTyUTUDXiotAmKGHXYHtpodsqFe6DrZxwEhhcj7DBg1Kyc52GRdqfTuLR",
  "key1": "4ZaD9bHBApfeAwaYi9eW5iUzxZJi1eckVaWd1b7NKbWkiZTZyfq3u3mH4wWhihbB6R9sK1HK2KEEu4gutb4hanJu",
  "key2": "2YHuyzY1hH9BuE5JS2HwSsFKw2mQoCJrA8ATMpAZ2hWt2T6mFgeA3cFVs4dBp3pkrfM6sAZX1v7JkeVAPDKF8mvx",
  "key3": "63R7uydJNbNdbKoodnpYDcMBrGassyNmDeA8NXSbh8UBSxFjVTJi3qjJncRySRco5wonu5H4tAf55MLkmr1fHwsi",
  "key4": "5EBB2XnXCDhoETbRL7GgF35cR2acybWPd5wnrUXYqYqk1kx1uLvae57hejt2pBbLtnwnkXx8yd2T3A6WqVNEPn6e",
  "key5": "3f9JNdiaZYNbxSLrFxnutRmnCqXcrvw6L4i9nmYUjutCr5hmHzTcdE9vixjRwMYLNYC49ba9whwk1qXfQJTdUcrY",
  "key6": "3UUNseCTfeza2QQNpCvaZc622JFhJfs6UQWpmbz4s6k2tLhAqp6UNCYLqqWuLFSiHcjYtQyYJkV6VRBzTvNvsuM5",
  "key7": "3ThLaxKGAXUjgYoQWJTTUKwfSjcydherh6RKd1t3DWYLS2FChy2zJdGqMsyvpSTPsjqXAgmpyzMEevpUY6c2KgF1",
  "key8": "26NF5TVbq9f9DAxth1JgKY4tVDXA1HcjudxDS2FaZUiKCWFu3nuU51ioL7GfXYazWnwnUBmRpkKdjk5ByDbvP2AB",
  "key9": "4kL77qknGCJqN71Eidka8HZAvHYHGsFfMCiSTyw6EWxvHjF16XJ72wAvFDyrori4soc32mu5pGGt48KA4gpZ2Mw8",
  "key10": "4ggjnWt18xnnpPwB6j5NizdWehrMhyb4BDifiUT5wwmyD2QQxqTwtR76BGb4A5nocaL1hPzXSaUesZDhfSsQgfCt",
  "key11": "5SJDYbtwpqbUNFTpGGENUSbYocJJp5s8GdDHutbmRTBhnodopYTt3bTCUfavH4pwfMX5FnEt9wub1uUWq3uEgcKD",
  "key12": "2m12tuTDUDYpkWHJWRvaTXZCjLSj8fgz9w7kqSPhxQYNHXEiQEDDdcy7iRreFXdqnTDZ6hqcQue2XdVUxBtbdn1T",
  "key13": "MnwnUvPbFziEFex2366rpZN8qBUnX5j9Ezykyir51AuE5B3sGZ2SqHYvWGnkrznmTNa4YoLzx4sT4F3tmxm4SBp",
  "key14": "HLJG2ikaojfPj5qFE1QMNQUU6pSidNXk52ShNE8P34qccsdv2xoUZ2XGzTNNBixbnHih6wZSSmHB3D135EcZFJh",
  "key15": "Je3khBkMTWPFkApvtqteAxxBbLtdLNAEPdAbRxPStDW5JGsUoNa6gpPD67hbyHsgL8K35GcvytRn352tPvAYqvU",
  "key16": "2pNWZmPgaCHxzoVbxvBNZhx1iL6Gt7eWrYMBjymHReFddDzWZKyhAs1cR5maJsqwGtkE3oAkhpqFD1ZgqSJY1yqa",
  "key17": "2sTpjbePzCJH1ULxKU7RBsaWXcAjyKhVLEKX8V4U4ZV1iVnSEwj571qU7GsfLc4L929JjuufviFXKoZsjcCtSkDx",
  "key18": "23jCQAqC3PCQyNrPrwyLsRPBQppBKPD3ygbqZWHE8TipWiqyX9kZPKMMhFc7s4K7swYAySrcLPrxBcq8CvNCXm3z",
  "key19": "dJWipNQe9qryd3aWsQzFFTGALDmnBEd1ouEnCGXe1yPMZSrtZnqy9dwz49awTgZu9BhHdoWuPJRp2PfJvE94B2z",
  "key20": "35LBC3TCp4aNW9M9t1ubNSs4Wq9NPv737JGmZQZApQknVCq1QZ6JxG9mQTZYyKMsboPQ8oDCUXaPZR6zs4VwpN7b",
  "key21": "xVekkx9Gj28HfQyUMS3Qfcs4UFAXDT3hbqxZPCuKuvBtf8M1ddi6SZ6AS5HiAVbcbXJGcFNhHHc4TH3JVDRSNi3",
  "key22": "2GcD3cfPiB6xZtgPvxywn8ptzcuBncuYLeqZ29diUbYByFgbtdXzneqnFNLZiB5vpknHnTHs6xHNEgjAYKSG42MN",
  "key23": "5vCXHQm2hQkRm63My3ZrXNMfCehranxoxgn35ysSXgWvkXm4shKKkU6xsZu4i6ocLnii4v8ufNKJghgG8RvzaM2o",
  "key24": "5BFG19tVpzVq9K7R9kNrhbyRM1VUScmbqoKmeLHcNxX22Hobgmdrmb66Etz6mXbGEQcaAWgkWqCCDq3NA6Vct9Vt",
  "key25": "aDcCsXKCHKHQ1Ae2SQPPJ31sTcKH3St1ZpusjdeeTUFW3XxYkS47vqKPKDhPPta5nRvm1zCJFLtAUWB5GJNYrz5",
  "key26": "5jzrciYXYCXQ5tmTA7F1ndbeZmGAiq9GdTJomE2YmJeYB4GNxRrQ8igcTzQG1fYDUEuyCYQeN7pNCnJ2474qmR4G",
  "key27": "4owYU2e1pEnYRBvAtxpkwFP9oGSrciQJza4oc38XyTxE6Tja5jCPXBzT9mCcv17YgJaBb5onbG5YtfpHWr5cGdXg",
  "key28": "4KXCdVgUaAZsujwE5ScFHH9msgMt7Ja5e2PK6SNTS2YjaJsgqPZkJyxfeXqb8cWDAXeozNCZixdKwiA6zf8pggvn",
  "key29": "38LgZr9rJwtHRB4DRNLN5Bf6bNENMoS2g2GL4FYu9b5z9UHSrtGqfX88hKyRM9PwiWJw7Mx7wzB9yvkdYwtef25k",
  "key30": "7FUoveDKVpsywJEDXK5UnsL9gMnjoCG31dSeFV7ebVxc6tLjxtnXa6VoEAZAHz7BtFJA3AePV3VeEGSEEeS2kHx",
  "key31": "3npsx6JoDTrH5tHwbDbFGueRnXaswaFQmGBkTqrfaMEvQk4KyFKZCBG7Lit5yCswQdznZAtyv6EMBKLHb8cRKUd",
  "key32": "YYKN95Wk33Df63ijnX5Tbj5jdj9CEU537waHHD7CrwcGxiq2x9y3SHsFTUUggCvFRQ5Kqs4HZmGktgQixGHtBZv",
  "key33": "V5zeLnWJKUtZ9eGyBQjVHBBpivdFDGkhXfGcbifWcecK4cuLUfhPwXRH5q3yRxXuCNB9Gqp1woR1BVWzMrhi8gB",
  "key34": "3MJxcue4gLMQ4F4PCAA6sYu3SzWdkaiQiX529g8HNCemDCGPvqFvgWqZY1rNVWVZAWB9NQLsXJj3WKPwmWAhhkSW",
  "key35": "3iahd7QqS2J1sASk2acDDG8xXTTJojqJ5iVyqM3rfk8bGkVEhb57aPsXvVdvk7NgZFpEwDHeCpiJRjq1pWdtoVmZ",
  "key36": "5eCUsN7WyD4aDQ2i7nP6WnYrj5ELphUpmn2XPikwNXi4pANf4D3VuwqSJX98jQuhT4cPPunfcXmEmV9bscu9khsv",
  "key37": "2yzSDfi3VYZrLAaAe9xLLaKGV2QPmjurWNrtEDZNcpzam8ULjZugSuuYXAPMvP5CFu97vCwGtRSUYkdk3y3qjyic",
  "key38": "5iGJFmezFSASD1puAYjFVayxa8uwFSoNUqqdjgSTh4km3qnNpJrjhLWzDQA3frPZqjUGbJbfoyyN2thh1o1W3eR6",
  "key39": "3fZwSgvbUnBisPmLPGZoUYd4gYB4dKZrkySvXhNoNGk5HvehC7Rzf8asp6YSPcHEpqY3fUpfDKbrqFXFPcm1M2p8",
  "key40": "3D9LFSWAREi7LFy4q9mTtGttpYp2EgBzSK2PZ4R92CdLp1E34oxrajwWHuufzBSx7QghUGEGZCwAW2APfNrvydkn",
  "key41": "EsjdALmUFJg4aspWLH5PLnAHCFwP2fSrxxRRE6tRfG9V8TtFQEG2qiFcPBobKZqRK1EYnVD7vEnYdK68ePhXutE"
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
