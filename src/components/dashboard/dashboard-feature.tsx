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
    "57HCH7c3ZreN4H88B2ortjjDVT7EqXDGJgea1RVe413Lx5sxf8ke1bR6FKYJvtkUwoov9KyZkYj1p1JgGYozHrAX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62G2zuwrwnLAZSVdnikSdrwGoTcGivS2Amkhkq5ogYBvb32V2dzHNE2i9do6A5czPfe695SFefrmTWrtExNabanf",
  "key1": "5AJ6CNxCEpmdFW98TjDxSjn6h7X7imQd5v4SZWDYYAJUi3VtohE3VQURtCeSZDLQhoDUXx3E9EzSLDXs95mHtTWj",
  "key2": "29GbEsvmgRRYp8xruqqwV72R2VW54f1uscuC3sxrteM1i1rgauzy2CACXe6GRYktWAZfp84hfqnoE7xEAXr3VnH1",
  "key3": "2oonqPN3CzDLsHp4k9JjV58RGm8G5MKQFFn9j9HNBx1LcrRvKrirPTZXmyJQgqGqPncowfLcDrvD6cmwAVgLxtrG",
  "key4": "2jqjQmdk3VDx5FfkXt2M92gENmZXW9J737zbNkVJR9W2FxsK2MVuFYnE9Q2PiSAJ2g2BJWHuxHyKxQEdeCRc4YWg",
  "key5": "5YZZ6byoo82gcPV5Yhk2CZEnp8UVgdLZtN9rPFyF86b4jqdsx5qnm1sCFSjufKUcDgwmWyixW6gKiKDa28b1c9QV",
  "key6": "5SgRs2gZgeFz8DCaKGyDAQvr1eXF3z7dR9nF5L7v8qKs9v5HdoveSsr3kQ8FFoaFYVtSfSXP32g1th8A6k9pYnYe",
  "key7": "MvnA1nfSCDtm5oNoWxa5jPTkMwK3H3E92PfPhHL9YY1SmpfRtbvYpFT352x8NCcJh3cfNcpLMskzMW9Nw4kM2R1",
  "key8": "itXUxxEBnorUoXreiviorgDNQARYSK4xVf5tAhxD5VNE93zwkJatKexJ9S8Td13sWUUFP6rXpeXD6WtxBxFgwJi",
  "key9": "buTXZvixTFwwRtri1EZq9EVFNCjKHEZZY9Q1owrWVhXzzA7BYw9iTi3fJYfiADYeu5df6mVNZCFknvykowDEirc",
  "key10": "E5Fy9jiiaUeSeArjQaaLtYDbvj6M55kYyAPyy3nujKefJThLZcaZBgJHG47Kr7oc6w271cgyDYQmfbQqDjCbchU",
  "key11": "5f9sJZq9A4i72KiqdZ6o5xvfVAkXJPfjaXfqJboJUJd82mPgbNQ7U2f5vbgPFDLLGvF2eJyj8EMvb2nckjaWfF1Y",
  "key12": "5LK1QXNmTX3xvsbwhmQ6cyydNwoEGL7PcQdskyX4Q5ZnByrX76BPR9knqACFopB4KxLDbiCFwfGQSAHL884t1dzt",
  "key13": "4aUmvfVYuCYZcPNvd2oom9ePu4jqK9LENM6JG5DSc2mw7xjiax7PT9LUYMk7qZfEfAAvpg1d1SBjqjRiPpWAKbj1",
  "key14": "48vfPPFyFyrPiqnP7cmwrk2B7p5AxiADsLpNBePLL9wbciJXJcxkH93XLHGq8Z9KaaoDGndqtVbs6gXyf1Nq7xkk",
  "key15": "4J6PtjA3Dd7uzNXaSLFi7X1AjmWbjevzQJnuuu8SLgsLCMpsp8N2dS9WyqVLo6XK1Ef8GZ1JKxLMAPBjpxTDZ9Rs",
  "key16": "2mvfrSJzLV5dviU3PUq5zwhUPKoBYoaKUqJs9QgxAs65DFhGNJJJGEn88PLh73unBB1cN1Pg7dSZUBxF9dqhTcdZ",
  "key17": "4zev5dF8mZDrgxGLZ7KZmj2ZeEwZ7rSk16H55Xz3aSQ6pKq333Wtv9Y8sy3LkWtKEjFBCFTmAmoxbwEAmD5iKQS2",
  "key18": "xhbC8ZMfHMM6vDG8C8hDshFamFhTGXRFNfbvsHo5QGpHSZtvjy1gYnDJYkAizbo21tixhc9w8pXZC3z981YT6dG",
  "key19": "4CEB3Chyjtk4SFjJQydda9jBSZEjgLQTKzS3XYQBrfjRDnqZq4SrnwEzzMq4aMitiBUbxmyRmQvSwsUrKwUyyPFi",
  "key20": "4mgvnc3oH3uH1RdNzsxAPcKHPT4hXn8AMjS8hPPxg8pPKmZfa4dsWnNp5HFZbBgBDS3DidM8buvY5yh4X8krTS9g",
  "key21": "5TgoQToJ5oteQdFyc8sX8YNW4p7y8kUA9UXnrqbCrLmgrd5djug5Bf7q9ktBDLjsqzPgXGErLk4gs5QVpLFenzTM",
  "key22": "5b2ePYonmYG1iGDLNcem9FwT5hyQEuo1MQ1r55ocevmmZyDTNcQgpZfpgxSJqqwng2dxXVTpQg78ZJhwKyWVRepm",
  "key23": "5Cina5WTeG3Z7KYhX9W8Hm7PBwJ5woN7rNp6XEegchkEQMzTDuE3pkBn94szuZ8GdJ4VJkzLXsLSUdqcJNrvLssj",
  "key24": "4HWZnZbCEKKc41W54BbPY4w8jacnuiM4vAVJeweCDze7x89ftpHDmmHz9mC6TPjdbVQZnZW5eAdrwwz91KvbSWAc",
  "key25": "5tcBHFvezpkXCjQxbtuYrvNWz79FgCjLUXerHUEW8fTybiAhbQ8f6B1pHzVFE6trpLyLPK8kH6j9k9qwtbMkX8Me",
  "key26": "3Fu9NT2ugHN2oU89UQ5bsQAj4CE62679u7XgEZnaoMfBj9bLqA5YXwNM4hTBk7htsfuZyFRqzUpGAF9WHMmFfYYA",
  "key27": "2jXC6nKmSAwgXHxDPy72UJkjKnMzTJGTRcs9sDhPQTPxyHzLfQ7Jp42idheE59CtV1ycoHfJRvtehKeqxFtgKLFt",
  "key28": "3Ma4GFrXcRhsDsDr3UGzjHBkX3qCHD9wXbR3sdCWxLJQqP18gGocPBuRcen9hEF5oMEeHRf1zM4rhNoTxyopcfSD"
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
