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
    "4vxiNQCVJ6PA6CrdCNHU4XctU8ypyj4ZhNrJaskXAff6tygaZXgSo4VyaLSXqaGbvueBFoEFSuxaUkvmKYqrPAA8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U8cHxKjGHjKLqyJ5uBo4W7MgArT3cd7cMFJUTkekwSJvgDZKYVz7kdJrjRKYUSqHqwd1rSWMcEdMmZndcP7awXe",
  "key1": "2wnJAfGxKwmYRydJ36ng5KZFppyS2eQUdyDNPKY4rdsd6es2fceQCFixwRypQWKSdL9CvRSFhshAbYLQwjsAa7YS",
  "key2": "27c86pPC7Y5Pdc3HtBzyqpNorwBXNxAoM6TPFseHvBmci9wytR2uqKAsp41xTNG6kZKtfRLdPpsTQhFUZ2Ntmg7x",
  "key3": "37nojdsBDxh9JNv4daK2HZdr88V8oX18AMZNuXXv2cJAKRMygGAqRcsCaKwNj5pJzZ6yd7DKrMK8zFdXJdMKwkpT",
  "key4": "WVFrKoYXfeS5GGCcNFSjGAnSPTTk6bXKXypQuamDtBy5Q97X7tjAgpveBHs3fmJwz9mACFNWBp4itqtPs8yvgvC",
  "key5": "24U1CwhmfwsBeEAPArXG2oAs48GrFfF2hZbN9UNtiVBsTuYiJWxyyaGDFrAkgoULVUNpW7G1z2YCFN2uhHsYi2da",
  "key6": "9DMrdJ2z2bGjpAa6QbGepKX3WMR9fuuEF2x499LQgeLPoZ7o7yrD8QZBCcuh5Bg6FBjSAzuvwAdxSnyzVxmKaAo",
  "key7": "3s8RYdBpUAhs9K4ZPFJeZQxzrngGJeUPJZu3S9pJ9KFLKF8nt79ubRXfVNjM9gBgWVMn2hMzP16zj6qLsvfX8nTK",
  "key8": "aNhBYXk7VeJ9sY1t1XzQRzpuSKJyc2uTN9mtwGxTJ8HJZNJS71XepQ48CrrR2BEQ4WRHnTXXcQ8N3cLBPXqMcso",
  "key9": "54qqnHhaEVEQWaaiVJbUrQQRUGuFkE52DT2WaHDPqt5oWhQhjExzcxFYeHjYnUcvzsBGUY9fQWWvtrnRhvBaNmST",
  "key10": "54gxSbDAj62trpXuMwRVFerKZFDPviG6wwyCPiuLvVavAq1YpG4ht6KWEq38BKeeDxih6EqvHBAgsjJNeng8Gyos",
  "key11": "4pXftmPt4ony7cjCGyDqJNNHNkhXWHhmdzS88ecsgdeCr8oVa8vKxHdQ7dTjo7AC8wbhkcpF1Vireqa4PV6rUsKJ",
  "key12": "4BhwdE9b2YnA7XhcfsnChuZSsFLVHwTFDQk4LFa1yfSDwWLo42DtmSzsvEqy2dBoKomYwYSt63caRbMiYzn4wzbN",
  "key13": "5Csi42ic9QnW49R5DJ2JgDq9mtESohUdR3cHiUSS94KqPZNSzaor4YzkMT56vfd2Y5hFwKDS4QkQ16DA3frt9jDL",
  "key14": "54XdQAGsJfApea4xWHCraSc2hf98YpekpZ6oaxCERV2PyKRXDRysp111S6W6YA5dtyJ5kk81Z7ijeZjNMfWNLreq",
  "key15": "5oSmA5fDUh6FAGaALLuK6jjibCs2n2MTdsFM5vLfDQoLt8PcUgrdy1HQXQyRReVJPv36YdqtJ9nwmpSKAGJmREyk",
  "key16": "4tVsuKqGnvvkaS8konfw9hQspYb9GFjLeX9YoF1AMqYnMt8WntbRU5D3SUrFM4XQ6cEpDkf5oDHXgW51emJPPbEt",
  "key17": "X5c9KAsWmPMMPiACwDHWuNFmmYoctcgqEcNBFgQE87eb7L1tpaYrFm3H7doVHL2HTgK6URGpfeVC88oiEovAxZF",
  "key18": "3FuRT38GfHnWjKs2MoU5hAqoqsKSpEEgSoeAqnGo78p8iEkztapsFk8jK68WaYSXLTZ7tZ8jVEvTTSr4PTbeYb3E",
  "key19": "4xcEeSM1upnwiyDiEwDjcmvZt3hj4ybQjb31CYDW4y5Q66qCxXHWDJs2piu677DiKEfWSZQpXUohxfSFmeUioH7i",
  "key20": "y12i9aSALtPYWqWmvzJN71gBDRhUWGFrwt35TbeJEsKF4EeV7pYAm9kMZvd9bcQijduTN1zLaA6XCb118svB6A9",
  "key21": "3AeYkWRS3C8kVupaz397nJT2Q7e9CmSnXCSKWe9rrN1Tn9VLs6sCnrgLxR4op7g1zqyE8E9YSTDGvX1zqWT9Ti1A",
  "key22": "HTJzMCzSQ9vLs7ZoDSwN4U8i7p17wddBdKViGzNyLkCjbZ7H8xkdeVJ64gp3EJCRqxQvtFrwVPGQqpJBQdroiDZ",
  "key23": "2R6qVPBeKwgJnkdYZbzpMKD76KtHB9fEwEkKFrYRPCUMhe1k8BLGuvGs5kGMtQe21JUjuWLnx5cvAhCfarPdVhch",
  "key24": "2wzx8qidJa1VsbHC2yk8g6xyEo63PwtbjZY9Ex2sW2pn8vz67ZiHBDfz9RQNmWgHZA9sPjozbKjpoQ7twjPfGr1g",
  "key25": "4KjWs2hFTF59MDKEmz5eZy3sfF2gk1GGhA1XbSsckEoC6UEPJjoAh5KSbmu9KV4f1QtEzotNWLXrGrPyGLW3T84k",
  "key26": "fZvZEHAX8nWi5QcmzFSQwBdLtJfjdwnpaD4FcEnZKKDVatdm8S6oHWAR4XnPohu6XMRbVk8R6fQFsdKEkg5Ydki",
  "key27": "44FPz3WHX9CbADrhgSuUt75PXezk6tHnivyWFKkMrU6En1WZupc5B8x35oNxQHq4PZPwmoAJ3SMN56WigtE1TJ8C",
  "key28": "53NGHf9tC7Q7YU7y42GZc9RmvuJdhX5QrJZzp41aDshPdmah2ksydASfLKzutdQjv71tUGkx5ebYw5ioLcAuCHjZ",
  "key29": "5GZFU8VQN9ZDHABVjYifBD3ru64FCa49WhUBNDUxRYDqGYsaX3HeHDJiMmjKKvjQFjGDgLrgSM7n3WWeSmG1Rp7K",
  "key30": "4ZLvCN4bpRWARqTYh6q1z7VUGPZreDZARvLanXfGH3KLE54wK6Yghdm1FY8X5woYtYtKE8H9XkyDUpX1LgvkzCd4",
  "key31": "4sZkSrifLL6HmaD9uaejqCzGTMKg5cto82L9ygt39ETpJAfrqqWUthH4ZuTVej8qYA6mBSXX27BcB2yFniPrZCBq",
  "key32": "BrpD65MGsdCwwfSfPvwUtMeyYZSYgW3DDB6E2VGUPwB9zvHn5e9NuDHnJZLPmDuPmc71dQegyeTSmk1Wwz2QP6E",
  "key33": "42ivcsGsBMeY1xLVjnpiQSUpQgiyBPdwuX6qWY4jfNScvw3UnXS1wSYm5sYfc6TFjJMJoaexm5sGA7NE9JMdt8W4",
  "key34": "3KV9mFiAinov1PkhJvDb7d8RgJRVWhvkDzyvbWiimUN9oz2y6PdMoyadjWZYEEbyrm9DcBCeQAP3qrhihyCz41t1",
  "key35": "2PMeJxHXKG48C5ZA22zTouUDyBZVBcdhAipsiCNR52VVvZ5JvhqjN8sUum4Ziq5SCBN4rxw8PyeG9PLUrYx8rPfK",
  "key36": "UAdGNCTizcXbUpkZucw6Ln5B1hz3AEZUU6LtfmrWCF7XpxA5hFP5t6NbCLx9twiRhcrTd6cvWAXKUkqhAiLpNEf",
  "key37": "4sk71tTtexoktn7AFAogcG9ZhgyQCPYoMbC7WtajZzvnnPiUBkmsMAMvZbCbCAqDj5DfQ1kByFPccmUfsJ5GFz8a",
  "key38": "43qubqcqJV9JWWy6FFNehfnooJi9ijoNTJjP8vSXApSw1tQN6CVixrNRQkcxK83etFaEbE51EUMXygEeysxW1bgn",
  "key39": "3UR7j5kQMz62xfUQRzdWMehYAAXeU6SSqpSCBEfNJrZgaN5RxtkRXGyySLgSRBfEui6NxNcaTCmYn6RH46AngVgz",
  "key40": "PbTdaRpqFjeEnFWKFVG1CSh9E4F1Yyb8UoyTYo3iXYeE5e2yTbAqbBHdu9iXPDzzC6saDjkdY4mRPVk7nvHxpah",
  "key41": "34whbzYpxCeuJfq1oSyhdJjEPiVquiBDmjyC6GEMFN9inMro9oEW6sPc1a6t1LirZZYMivEaHtHHoHMVMQgnDFg6",
  "key42": "67iwYU3ay2QefDuRfE2xNQ6CB6BMYjoTJBuFhUkbeFpytN6oJg7u1fDwuXN34GEagTqMBwFSgdoCav4GRj9x8psq",
  "key43": "48xme1dDgtZ3j7qVsHAZuZNVdw6y73ksZGoEVv8aMBDzLQMR7mtPxxnH1MTXSSxsnQ5ZQEC4gmxj5jMu9K77rgS5",
  "key44": "2W3NgVNWLwKctMR2DZ9iePqaQHUJU3PLWSwEipQ5zQZLZsbLHf5cgS48apurF7CmdV4eH74zVjX1uLnzGB6zbn6G",
  "key45": "3G3RWKReYjEVWgvBXkQrTDxZH4fvmRu8jmjKawEqrh7mVK98ZHGGdqNLR7aBTpsxi3PN8MMv398GHV6T7xn5JdPn",
  "key46": "3xVs34y1DRMxw44jg9d2g7fFSoX4dqZGkDc2Y7T8S7zUgodukm5J2C4oLJLB5V2as54XxaHLiZWF6iFACyvqstAw",
  "key47": "Dy9q44T65P5NyFdKyPRH48yYGY2oy8rRYTxhR5jYnVuVzfHkTYbp5dGWpKuy46bWrs8vn4hULhTX1PXwc1cBkuS",
  "key48": "wfBjCPjAuJgXdr5R9WwUGVuHompM2oNp7tX17KQP3ouPYfddrrjzC2aEFG5ba38hAAiq4ixuSCsKFF2UchTQ1Mw",
  "key49": "4yZmKkrZLKSBju9LMi9KEPrfSocBh9DJedLFVQuWNEuDzWTy9Tj4UYZr1KVhYa7UBQkUwT6hWKB2Gy36FSG2CiiH"
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
