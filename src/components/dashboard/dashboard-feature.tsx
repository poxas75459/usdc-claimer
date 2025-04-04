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
    "392WdGr1HBCveTnCxT9DBY8R8Pf53FQ9jurYtBc2t5tSJA9ZMJJ7bGXyUeaGKy766Qa4Bq3u2SMaBE8EL4EjBwEM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XrbYWw4xjjoF9n2CqXGHTGaixbtejcmLkhPNy4VsRqrEupwNFeKaMX4siJexTBGG1CexXvFiAMZ9P7q7y951tRS",
  "key1": "CNHAsnzsw1mdANBjVmQx4Rdc5EhqECZBcjGYnDJfgUkoEj48ZAVVPxDm8RTHDkoUjvchW6bCnct6vnN6qW8jo3v",
  "key2": "2CmMhHzv6McgnRmUDJZyVeriKpzjX7U2Pn4GMEpMSkZDBC1bNAK8rdkBF6dPiwG98xqM1Wi8Du1Lp6d8A5LkiteL",
  "key3": "3qzPxwWEKX5GFa37UJxGcAUqPdg3wETNcaKrPsSMVPWnQGkBJmMZ8mTTVTj7g9M7Zqb2XwhUnq83zsyjBUNKaYrm",
  "key4": "5rqhCUGHxTKWGErm2jueddhfpLnbJ4U1c26AzFiXJENTKmJtznZksLPm3HNebKwaus6o7hCHZZpSa5GncttBwpde",
  "key5": "3UxnNHVWxZUZCetemWYnsZ83rhMJLQSrwQfxjbf7hGhExTSBexhQmFTe3Tf4nxuRLZ8wMgtUjszVFZf2MH7fCuJk",
  "key6": "3p4ah2S4WEBZ2f3ETMbU4JFjzdRWTuVDFRN2ecmAXLQPHkzoDUHrYrPkaCF3sC4WHyMULGFXPJsNNk4Khdy5ty4a",
  "key7": "5Yaume6fkC6jqHhMyBYt1atWP3BY8cVk3VewkvkonBf6VLmqcZc3hHNpKnceUwLczbT8djHEDPVkYFZnjWMbSv2v",
  "key8": "4qJUj4WsnDmGTTwYggNPhKE9ftuVVsx62iMVsncWxYyyXKV1bSxRHEgaiUXSUc2nSXsqggUJ3Vbhuv8YCkXeSieN",
  "key9": "56tDgsh3jCL56z3tgczyPvmFgehDQMQ8oZKgxwJ3JqFh9iknjC9YnRRt33hXQ9FerimNCn3o5zRAj7PCYscFaf4S",
  "key10": "2jg2cHPC7GCgHzH9LV5syLuHnWZ1vD1sHvu6Uy2ZyYnvsQFG9YTfQZ24V3QzQS8BHecudiBtb3w8Ux627wrNsDpQ",
  "key11": "3xUeWc41kiKwAbtsXNGTprnxgnfoneNSHd3QWR6A6xiadwFZqp55dqMGuS5aWLsiEmdcqmzLxfPu8EyQeay665Gg",
  "key12": "2Jy3vGj5CMyoe2DXKhJoooKj4WHxq6sBeqjtyD2ViTRriogWMraJywSjX83Pihu7XsPPpEF7zeee9WuyJNapCobt",
  "key13": "3nZDzY6TVvvXoJphnXTF6B1SRvttcAS3Lfi5LTucT9BmPXtABsLVUL1QH8v31f5R6rBU8ArmyQ2rJnVmBqrUG24U",
  "key14": "xsuP6iyJQ3CM8QcQH3FVp9UWSkAQw4JeTpgs6oZ1Hups8p2rw9ZFLbdnmpsMN31zectbpyvmR2ZNgnDjjchZncT",
  "key15": "3GqUmNKAGy2VtajgRiKDB6uPyRiTYPToWukYYUiueuzF538xBqC94Zo8sKjWdmH1RAJhFJxpcHT35fv97qYUGiVt",
  "key16": "4MNFkHdkq5YWXahxLGHKWCX5xzkrr56qwzxhW225X9kXL7E7Ps7mG69Mrf3n8E4nAnKNnbCeqeoeH62rNqHTsaJs",
  "key17": "G1BV4YZkjLPwcufUdLGFAXMqk5T6tGmLTTEwh6a4wmAwTMePUyMN617bH3sy9hpYtZ3kktwV667RELkeuP1gbXn",
  "key18": "5pZ9pcTAMzk3ujmVzKzMSbWcsMSERWg24qP5p5wxfwFPmaF95phpYpqyq5MVH89Pz224WvHywDxBcVLMuXWn5kCx",
  "key19": "3GKrkqWiHvt4if4nv9LxexLHCLuvYNcdbGZhuuQ9PdimRFkGEEvyegyEofLNjpSpVCw2RbtYpxyVJkRozTnSn8Uh",
  "key20": "5HSWCgr14xvcB2ZrD3d6rwdMnsYT222ka6GNHqQizHffPfcQw8jr1rsf7S7K25TtLjJNbqbDn9HBrWYRW2wyiPuB",
  "key21": "ApkW5M8YmHxUbHYXpSwfis1w6f61yNQ6QyNAU6Am2KG6DV96GStMQqdgUoBbWcuw361S9tAkGZ9VikhFPpfeUm4",
  "key22": "2GR2XT4Mq9EuM7LvkJ99Dbsgde21g2u7qU5dGHyvhfn17d2zGokKXRpHew14oosAV6EDma1tudsahk72742rhnH2",
  "key23": "4dfjmj53xWKcFoQuVhbHxvVQGnShVrz2VnrYEsfbGtGXPwYZKjcySdgKLPsg2E4CwXEUMkAQ3WCNbaLpjaHuU2em",
  "key24": "eFbTGUnge4iUzV4mhtxUXCrsmrH3XMcVGaiTLHwjrXCF1YhXSxoZXdRFgrgUdKUKEVHrSWsYn4RaKE2rtS4g4RM",
  "key25": "3mZcEqYA1Qnj697XkR4rdueTtsWmoeDCTeXJ4h6Vr71pc2Vb72GTJRJTyTZdrqfpCjDiDKb1zaMxiLfEgNJhh7KZ",
  "key26": "2dCMGvhwVfqkdumkzjcVAWUsGb4JxwAnAqhooFV3bSJ8fm3dzFTPeA5HF7ggeQZH5B6rdZRRqrmbVFXs4hvyhohF",
  "key27": "4v5yLvN4jCzEKjg4Fhqf1yndxngiojLnQVoUMm942cQ7hQpyDqN6MjXWa396J7pfg25deFaYcEc1kiR648SN8BG6",
  "key28": "4VzDjERuodMmCigzWZg79taBNfP8R1fAsejAfcApXoenukX2ck6eV2WBjNascv5ga5dKTg7aWgsmvDTYwo6m4CEm",
  "key29": "3Gb1gpTNVxZPWzPadTWmX7mXPpvzidkLsntKPk7xw9nAFaahRNonBcz8C9MBYjPtydstBrBe9P4WhT8DsovTDHKG",
  "key30": "4FzkRkFG9R53gMfyFHhTeqPbm3GmijitRGzkzsi2pmk7TvjRR3ZNMHt1GPPZJnzSpDzvqKedSuEVNBkF8LYcQZVx",
  "key31": "4XYaDKHnoWAjT7FPGY3PeP9ejt6T5xhMWyqDnPH8975VDLJ6YBktBrexarFdytYEjyeZ1vMZGVL31wL8GvNXLY9N",
  "key32": "5bKBp5fT8QfXf39NcJz6iceyQu2aZXHj2zNp52aBAjiWT2T2LBEXerRMvVGXYyPtaWAXpLN7TssVVZozbgW9TpZr",
  "key33": "2EEQ1Mhrz2kw2ZoBdkC8ZrVoBae4GSbJKV9WU8ktSn9wuXcvNC3BbRyRjdFBdVchHmi34WELxZKMwoB4pWkm6wuR",
  "key34": "5jsa8Fp8ESEfmigTYYDwxQc4m273g796RWJTq6Pyy3ebU4i7KsVfu38yE5yaEkWgw4qYcJngTD62t9mjjQRYNywi",
  "key35": "5pkx4GF8LnykpUK9RbnU9XWiRFowC6fMDpfKixevs8nQHR2tdbD8Tw8V9qh54PvDiq3E7hNyheo1UAtAGvnzigH6",
  "key36": "KD7XFDWq7Cs2Q7Phxs2dZThu86trWaX7eWQm59k44kLjfYPxMNXg34whkgpwT7485iGX4pCNCsrb8nvfVaqZMzU",
  "key37": "5c6h1qVHnKPWzyNPfPPbpUDXmyw5ZPwzQNhKZaTRVpw3rd35FtcDoaoPnv9WFDy6U26dsisvkXjYfo7Twoxakfac",
  "key38": "2VPpr1u3RMNVQAhXYoc5bUcp8wE9j3NY426cPoy77Hj35xwzv5do2Rsa7HE5yEbbtKfg2q2nbaXjh9Fg1kPm3UeN",
  "key39": "4QHxxZkc9URhQippB9DNmUKRr1YmsAkThtgHCxAQi3jBDX6tvvPCS7UdBF4oWqc8KZQBi2rMej5mqZP713mNoNYr"
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
