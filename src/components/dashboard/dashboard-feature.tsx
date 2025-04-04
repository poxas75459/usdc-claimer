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
    "zbjpAuPjJkN6fHFuuPrA1AH62ckJKTE7h5RCVuHwJe6BXFv6YwYwGva5NUnMthtrYcmBLWgEYTHFTnosDVF3nav"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VaZg9UcsprURHAkQ75fXanM1DU348BXEzV68ov2zR4CnS1hyuUg46UAfk2BUTvXn9Lk4yjHCYNYiabMncPHDhj9",
  "key1": "4bheULK1uwgPfczNzMoL4ztkas8pXRtDKofyV51ESy2mXCiTTCwppxAqGRMHGKQjcKAwHgsNDFXjLrUZdNAMKey2",
  "key2": "38d7f74LhsfXfyN92ustHrM9rzFGijyYMhbog9TJtowKEWh1vh8XFQPjzVF62S7gjA6KmmM1XMWuuEmmwcqt7H3c",
  "key3": "2iyZW8syq455rZ1Vt9zDx4q8n6aPbV7yChhn1ixCGtsU6AGfwMTr6K4ZPrnokXE64nyj8jH9DsrXKqa1KHKWWgGQ",
  "key4": "fzU5mkdbPHWCn7CAGmcLnH19nc3BesEqD8wqmFXsgan6G22sPg9CjsLqsR33RRseWuTAfyZ6Sxt3gNp3gVfZZNL",
  "key5": "45uKxgXXcScRzhem88oh3TY52w1xC63nxgYGomYxoxmXLtjbFG88uckpsqmQtwHmT91m85CgH74h22G6htjkSAzc",
  "key6": "DBUtgkdvWGnHZbtJcuvttt9CbvjYgwaAxQEGhVQZ1UvvhHAtkgzoGeGyLyeAxshCv4GX5arDDHEMjdvT2aMkqJw",
  "key7": "314pTiqNUkmb3sBobd1FdJyiJ4bLhFVWF4wuTMnUUxrfpSofPSbYBPMeTjnmJcd4dLYxu2fLTx6m9zdvgMif8i7Q",
  "key8": "2LYQeK7K6e7diE52YF3wP85RyFkWQs1AdDmuA6saHah1v3ZBvJ9EZKttZRHJkMkxvjq4f29dtCuvhZkiqLrvRzj1",
  "key9": "HwYP7TNJPbh6mbTXDbGKCsmLuDs8LhGpzHgWxhLK1nDCsqnmaUvppLuYvgtigwwPb21eKUKqc3LrTqB8GVijqSv",
  "key10": "dvXMfTuYgRdf7ui31HXVsnheRqByonhPzruC311UJgrftt45ShtpeQN9FWXBErMUqkRfh5vcjngPc6WUkswUuwu",
  "key11": "5TihDA7WfvFqBKLnTfegQbE3cuTdS9ywih5YmAuQJiRsj8NDqPY7Ueb73iGDbg1jTHgQiZNaaWxZ5vdQqKu4x7NC",
  "key12": "pUuJLRLQhJXyq5uSV84YtHvj6qfXg3pwWRuXq7ezyfAFvMPq3SRT6c9cmbRTQRtaU1gz76xaeJujgzpMxD3FfYS",
  "key13": "2oR6UQHzkY8gvvRsrb4iN8VUEdJxEQhGvaSr2rrJsz1PKDMrZMaxACmYTzD32vQWwqzfUY2dXVC3atcnhsqmgK8u",
  "key14": "2DDZL9aWkZDihPNWxX2h4pc1YRgZXG6PKuRcZdb6r5jjSnfwEGxa74KKCvZsqDgEBZNM9vU9Smq3pumx3K9WzQ4i",
  "key15": "3v972fJPFuux5LgcvTVBer7VNoa6hTgjBAcpuGshE1fwcw9LMxmfiLH9Z7P73kexmPVPLj5PoV7jxiKCsBYmbLoJ",
  "key16": "2qihokBBjm22mfam6sThKVyE8NqxZjDZpTjpMkjm4x1Qw9mgjYAQHMWRCpwbR8bCMnvZufzv52Uecw8BfoRf8VFA",
  "key17": "5jRoUntSYtEkGLbkh8G4DERa8Szta3i1KnGmqdSCiBUWw9eHQ6W25snvbP1cQ9pbCWPYmK4B9dyfFUe1Mnh5jncd",
  "key18": "5XRZg6NUitUA2gXL9LvEKHkApp8yeZBxMSbq7114RvU5JeQ92jcc2rc475qd6kkfDK3KJZCi3AnH4WwjEXpVD7b",
  "key19": "4VdXXBk1jHpAEwqkKye32C2vdy2izS6yLeGTANXUbkXDfNbqz69VSMQ9RA4cpMBPBYd2UKZbEJSA81Zj3WGG15tq",
  "key20": "21mjt4f1vuX5urjmYLRWYhEyGi3hEgCwaojUXzX55nmFy5ummvFamNpFn82CZmkHHsxoWthDiJo7Ypv9RXSJpCjA",
  "key21": "5uzx6jmTFn1RTqgL6VsiKDGzSUPnFM5RgNEARFhV6FpC5KccTbhTRpPX3eygRCh7f7KrTFPGcK6zULFiKsuK4hi8",
  "key22": "5CAcDijiFa3o3RuyYtV5AjX4wchBbShzEXM8bV8EKbwLsVuc6zUxzdnxFrsCr1qo8ARLR3Nk9uLrb3JzoDHBa9m9",
  "key23": "5VWBDN64NgWYsZvjfnh7nnPXb65xSa7P8QwaqK7c7kdLbJRqScojJoDyazYJTEtssqJdx5ig6jLMMiBCNQ63QpnE",
  "key24": "31ywvrS1DnQcGnT1VYuzwpD9sVUEPGk7gK3MCcS3JeSZKZukd545yBVsCxxzbaavgBxtSHRneWqWqYH9mAFDxcUp",
  "key25": "aYi1sGjZG3Kd37Uds7tiS2HcztMB2vD3Pa8gmDnV4AhhCs1CVtwfjN8bMinbYWUkuCBmZRCuBc2QGmF6AuiNGRj",
  "key26": "2AXip9igsZHuz72UVZwyiLyiFVD78FoykFb1MgDwS1Q2e9tzU6GjzQvYYrsuqF3KV1jWtT7jxyxJcWU627uvDyNH",
  "key27": "56FfcjPVEcBPGfFpeMg2LRy6gLHtNuLHMZ7Bt6eoie71UoBYX6F6Vg9tugQTsh9CWicZkN9D8LohijdeaBNAf2iN"
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
