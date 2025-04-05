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
    "47rvhVBvqWaCrt5kaAtSgYzqWSGJLCZ4ymScjCShPooZtxTqPaDFfVpDb4agRTQ81XFPponTCHXhMmTAEB1ucEya"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rkRgCQn2Q9vJYR6wPKXE9X4ckPBCTp45Ug8PfgCQyWJEr75Pig7nBEGhbMEVp5xYGEym1L5ZUrcTVsvoiKwitTw",
  "key1": "4CJurVHN5USRNyuLdhgBrmaVmFRdyTFJ5mUZQJGJVVQrPZJqThTnqXTxCKyhMjieJhDrQQR6UBMvmLPe9nb7CuBV",
  "key2": "5nWUktTSS614daWz1FJSJp5VGcfcQgGqrQNL9TjK8rvFH6J33nwZ3HCqxi6AQSifuzBs1PQcFkr9CMczMCmKwB8c",
  "key3": "eUtycFwxEB4FEi41LXPebGG4U5kesuYjuAtbwnKgRoEF1pUj8rUYTydJa6Cwsu6QUgWrVquwvLjh5KeT7TgEKi9",
  "key4": "31vWoEVu2aFCy9T93oourCw45pvtAwLVJkedAym7jodDtzoQuK84DK3wsXyUYyhGmjTHFkt6nCZdMTMpMXTi7KS8",
  "key5": "dLaAxjRqmibqcWdggfKYbKsB5p9mQ4oaAgJYQz815cLNUnNUW93FeJr4gKxdVWSXCJMxANqHJ2So6vQSz7ShTXZ",
  "key6": "2a5RogpFUVfqwR6YwApX2QFD9oH6XxhRLZRru1wT5djis8FJfNunwJc8KdVBL7WoJKDSQ6QxTFfZm3atDs2R5MT6",
  "key7": "2U51HqwstgwAH9jGXkWJGNyi28iog295LQufqS5gW1t65yoAaAG1NRaFtNZBWJShUNqCWNmw6sC4rVHzjd8cvVqG",
  "key8": "48GWXAqLtT8Wn5kofHDpyFbu1Qde1upopUSqZTrHE39DpVQXrQ5QzRnE5oaNTRhAfLiCmp8SxdHw14Y651F1ChUe",
  "key9": "2CxjT3k5Bqnhec7ZbW7hyZ8336ycuzt8PSeJFTe7iFwVeqdDq62gQZiG8N3BbUUNSfydx313Gm5Ujcahf41K9bTY",
  "key10": "4n8KxqBBgVc6hVEEUNquxWtuTdxZ83XjD9Sb2ug7Ko1ZmJx1WTY6pavWXxt3uknjaAtKXJCZit6dj1cz9NR9Gs7c",
  "key11": "DZXaFs5gS2GpPFWSDizFSp5LubgKwQsKZpKg1jxbLRJDthShboBf7Z6BdVgMuNGfM6egcRzveJkhUdJ67C7vZ4y",
  "key12": "3k9fpphzaCz5Ggr31arZBGAznNtDWEfH9SHiAHvkzB3QrRnqLD2EUN1yEWdmWh3MXkMguNkWhXvY8kpLqRTmWHcB",
  "key13": "2S14GQ8XJpQ3mAztugrrm78UcYq7BPoCwnadK3q4r5hgS7TkNL7subF8CWeq1iwYdHMp3CpwbUJWSZyq47vKANDH",
  "key14": "2aCN3TMpRKZPhRfewmbctAKqVNWtdwkk49DyXNPfzRtMHJbvztkL8VagZLRE19jUGYrCtbjc8zaRirxdUWXAioQa",
  "key15": "322ZAqRJwBBbxLEe6tGMtGGoo77sS5Rp5Y22yMb1xGLdcEM62hFbYFQkXCRnFsPrJTfWmLc3ffu5AULyf6FM4cpK",
  "key16": "5sVXtydRBFmUidQ6xuj6o9mnHq5nkuc75chYxCgHWRBqnLHvsBAkJ1mTjGG5zPEZXMzLb5Xb8xepP1s6PFYhfSnm",
  "key17": "53h3zHTYmgTQVQ6MjK1RxNUQkEnSi9wPSrQWGm5Vppuk2hmCaJk6kmQczXDRim4UwxwgxgqatHw6N7ZtVrV1j6bp",
  "key18": "5uF2Z3izQVUo2AAjrBjUjEPX43tJzDDk1cLEFszfws2bptAdEnxetxFdqC8dEHCxi4HwGApYrvAcwUC5XVxavubT",
  "key19": "4yce9sPQNnK9B6JeMX7agcvtU9C6cpaqj1iGKUpr6wVTeRJKDvhG7smGbwbS2p5VdctTDANQKoNt3Uc7RArSyLKi",
  "key20": "32nhjz9hXASS7dAHzkcNTWiPzC68igaza6cajw8iQ935jBmXYbDChSHZtKWu2MRAdw8hYPcFuCrHREZrq8NCzpdj",
  "key21": "4EMDECKF5wV7myfz8aCwg94ffrSnLsBSCUxZwhHuCXKXxdQL9JyC6g9kyQHFnfDvF9oTuQHTwu8Y6dwgwZ2k3TRq",
  "key22": "4QdpjAvqdvkhiNWWNpRrawpQX3fbyctqRanCvCjVo3Reajs4Z8xmC7YMtStF26n9eWSygBFZprH9XrmCJ3z7W2tM",
  "key23": "3iVJwpoubV5TY8nwNM6p685AQXCLmRTJLdt6MJoD5p5GET2QTWtS7f4LrMtUzSgPeGs7xmffSP52kXUdHhtS7xVG",
  "key24": "4RgCrRLyMLNEo7YpcWKC3swavbzpMr9EZgdETbdDJRYbwUmhVAtZJzpKTghgbEuTJFQsxjbc7e5eXSdFsTRrYpkC",
  "key25": "28VDA2Qajtb4iipfTyhweUn8tMs6NCkTmMhVxNjCvMFRu9HJTwoLVu2Qi5aN6kNicgkewpxF1DnduoUpfXBTNz9K",
  "key26": "62TuzfLoWR7s2kNGWLiswX2JPfBs9kWuWgUcXssgfrKpvaWNBiKGkzSLptBBUyEu27AhC6fEbRd78D9gzTeLhxA7",
  "key27": "3W6YoZbcFYZ49skVn66bAy11CwRutbvBFcHEMyWMjoWXL1j7Ppmk3xzGc8dqYy4ajkTS12UTD4TWoKhuGAAELgEn",
  "key28": "3ASmMhEarG7DFDLi8N7J8aH8SRmUEpD4kv5HQqwF65bQ34ETYURGknfBqYGGLn9UreNZ2cLZC15WESD71hLeCyX5"
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
