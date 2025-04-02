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
    "3y7A9b2E7oKVrKnEpE18LTwLQ3NGrBZbhtNrAHxMbQWjF5yrjT3ZkHrfn5vCazWTsrYR6JKJ64JvrfxdvJJKkfoA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hUB87kywJgqJtpMUrNmTdvDcL1FA5995WyhkRGgPpy1LiQGJLw5xCGJKDv3twCKiPtetLm8z4hZNCbmpNFd3oZk",
  "key1": "5a8oSak2y6d5BDCE195ddJV6mY1F6rAsw6kv8ahWwDvedLUVUiKdnNiUvkh3gKSPoZumfYdGyGNBsoSCRwqTjnQ4",
  "key2": "2tDSw3DKzFS5BnRQVNfdFCdZfXjJkoVDVPfpSYhXCNzhPvCQY75UhH933MXumHjpYETFUw9cpEmoUddqFHK92ccv",
  "key3": "3WKC2ZrTeNYMyWo2oKCsQsrtN5PzHbA6xV7AAX2KbgTVaoHudaR4JKWUfHtrFaPVywU4zcs8mMsYGsZBnk6KJzvS",
  "key4": "2qB2dekTjjTaSufPPdU7KPmfw8nkbfokDiEvBRxPcqLzSzoavEX2evFoHhBc8GJvgBPBxnggzUJJ1Nb7JZYrMfX2",
  "key5": "5joBvhEkEJbQwYoeNXZbKV1WtzssNPhaE5qDrqhsFiaMLd6TmWjAF7wVHxwoEpxdv2Ks4QnYuky81rsA52SA8KpJ",
  "key6": "5NWdbX7svSiwDe4KrGtgHWm372kjFbG1GmDas66wQa8PcZ6FCQvYgexgYcnDGDGH9WhUjLTjQ11xVkyVkbSSrDp3",
  "key7": "2fXjwfyPbSr2zontMbu5EkNpUFCjd14V32CNm5T5fAyKMrYyMm2crai2T1vFwSGRfFXfyiLycT8SZgYMAoSW7yvJ",
  "key8": "2ZuAruNboPzBGew9D3YzDPPsTsdgDSPFjK9JstRx6cSFAgWDcCLPsMc6Yc9ZiuFr641P5fwbmQa9rJma997wRHbh",
  "key9": "5aY1DyW3Nq5cKNFTzWA9ucjmQMU66f4k2mJvRWNeLT8sycAV9uz2DJmARWGnw1sFtTUkzXeB3JhdigDstxoZisYQ",
  "key10": "5HzWFAEjmTRJAqFwuPLwkALd5raRAmPTDgXxiVPCxtTaHNE7cSfeG43C9hEBAC3TyVRjZDBBSfZJ37VGsc5JXjKD",
  "key11": "51dbohj2vkKbyF6fdJpYtLeGdkE8RF7TtthSunCpaJP1PHzzN2Htm3EbTyFSuVN4Wbmt96rP46WhSZXDBVeTJcnr",
  "key12": "HK7QD6MgNHdXdzk19i9nMDwFF1pgQZwie4p7HvbkTTYfNcMHfsZwyD1wrXHobHsfAVtdDutuhegH3Rk1xpug6RX",
  "key13": "2v6izsGsbH44vkhPBz2UNxFJnGZNLBesYSNd9o6c8YRqt7RSGiA7U8VnwnURdumeeC95ou7mUrtMB2WZHXEKDJ6C",
  "key14": "zF7CY6nuKzDQmGDNHAaPppYPMCiULo3EnWgVwJYUjjnYTNkenE2acfctomkMyiBpPAqEWXBBiF61sU7dbfsTwCH",
  "key15": "41k6vs4HHJPF6HtGDrZgRzQaw2GqL9zAFDbBHcyGLeAtDXSh6uJHGUF42PYJQj4jVtzn8RbxBfroPZQGQqmJMh5B",
  "key16": "zYbbQQXytwK9WP6sHpDpFwDaW9WPWxU9ohFG4EozH8SjnSEBRD8p9hh4ULEs1h3oB2GpGzcHsRKKV2qEtAnQPSy",
  "key17": "PqUvsgY7STt8hS18E9iWsvAPZ4RAZChxniFqhHBn8txdWehCuLBBi9YhqDHp4vMDaxsgoXRrCpptKa5Qfr212L5",
  "key18": "Hjbhb4aHD58ndpqvpDfZQ9myxsVCq4oRzH9XKTVB4xfnASh3kvEgn55vMPRfp5MjNeykb7yvHx1Pb3WKdkRHs5J",
  "key19": "4RZMz8iAJw1spBBs76up285gNyjV2wo56hkXLCguT6FqBr3u2DEXyEj5XsNQ9418rhAYHqwGDMzMrq2qgTFFoyDa",
  "key20": "5EtTvT3BZKpRdh5x6TpC7vi8thDtq5AK134ZtDgCx8hLXQbUNATASqqrsoHmadCyZpT2pHPNuZVXeB5rzmmCv9AA",
  "key21": "eHnQromXd1o8LysuctXjAKKAFwv6FEAJ61vu9o2J39XxQpAcBokJomuRGjS5bKJ4EjYMHe8U3iPYPGzAf1iVDT5",
  "key22": "azp4V7nKUF6BdYqguPVkr6qpwAzUCsW4UuWBLVQEsZWquXY9scoDQHYL5NAoDkAKajX96hZ2CjMXtbzmLkn3eQD",
  "key23": "3AKBUQdXBVrHffxS2vFT7nAsxtDVZSGRXU4tDKwZe8NZ6a5w1JMFoXMWZK7JsZ6j1MTCGHyjfiftnxBHBw6efQNQ",
  "key24": "3SjBaJP9ghJTUKmaMxSP2nuPnC3dJbDZAxBvRyqgYWZFCDttE9H9ieh85oWatXWRRuPktwSKKBFf8pcMaNXCAcCn",
  "key25": "mJnVFfymcvk4qAet6bDiGUhrgupFun5m36zsf4s3wnXQGHAoBFTEtYR5vz2btc6X1KGMd2fMNSkoj26CJd4cGy8",
  "key26": "CEcf4f6NnetVxZQ9jrcRW9ra82kTnJkuby59VP1tJxsWaGgY8ioVaYz6c3Gf7nGQa4EWSMdEBbyuDR4RFMwzDUM"
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
