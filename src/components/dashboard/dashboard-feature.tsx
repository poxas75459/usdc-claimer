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
    "3pvJ23nqLHmhp1LP37VBGpb2nJTePmeWtLGLJHGjeHjm32FUBDBBccRxd34bP44JSzuxViVTbxxkPHpsi4vUCZR9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YcJB7bt4i9sCAe2WLC31feF6tC4fSHxgfg9TZfs1r6i5PHGuimyw5GWFcZWQeFuarzGG3AGua8Kd5cxnPEB2WZd",
  "key1": "44M4H71zmEPWzxsQ5fNVjgf62HZvLC5D1hjUptFF56jRbeYS6vCVoLMnBAoa8H1KzjmWvVBqCvPuQk4wQDQhy1uX",
  "key2": "5qxpDVi6MbuWmuS7Z1pxZqV4ub4FYF3QcG1vtwFBJgxVFxhGYbyNiEy25PeBuLi15NFntPn52u48Yg6peeF4ACHV",
  "key3": "oTWBUwndFxBhaC943Tb2vNQbD7QWg7A2UGCCjJ8uQpXmk6KJo4beVkQziMRvScsxwRA1PNY47FxARnhExnbrvig",
  "key4": "2toY6jTFXPMS8Wv2e8eZCA8Xsdnzik9SNLzYWuJgtjACYh7HtFsuFiZsmHQhQaAxtKxRaxwysbWFTzDDwu3deWhi",
  "key5": "vmrXPtD8STas8Q8a93QRxr5H4CqigStLb4dKxydWQC7SXVN61Hj9AXdTd4AEGeaJN4M7diNeLCNxEbTUjKzZToM",
  "key6": "5MvNJD5YWHAHC2uzq28esz7Uq9khXhMwej7NGcpRwQ3Knw3xAaPCApxfoadPj61Da7jLd1w1NEWCC5vpNoX6JV1i",
  "key7": "49NrVBH62Uzj55Lkc68s7z3ncXFgdSafA3ch8PQk8DVC25VxDbaL3GAfAy7iNkBU7J4vCCYNVNQ4j33Ngus6cNig",
  "key8": "XQN8CyeHZH63fRka33VSLfCFvo4Q9bJHXTDkWa7JmGQhyzMNzKExxeRTcLv58ciRu6F7a7qar3JB1Hk5ZvvwhJJ",
  "key9": "5eKN5tGy9BqnnLDB2pT4rEgsWKoDssfirRRoakGhGB3Hqs1SVEdaxTx7PcUGhRcFNXqvMPrdStT1hquWajSN8zHg",
  "key10": "5m4CkURFjWkgYTF4P9DrP8rVHAyQq3nUpowYQ6SZnoFxc5u4oaUPhzw6hT7yreFk16X8F5VX9ab3VuamyTbX2gVg",
  "key11": "2bzvizy3GzaaBefpgvkp3i4XhhzFpuxtRqyotAANF2zeahWMRKbeoPhRkD2WMb3MMqiwu9mwG5urJXG7Rauibeuc",
  "key12": "5zNAsvYg5M93E8p4BKiE14Hyd5EHM8StMsjPiqKQb5mjAUkNCThsf9sxEHGNarq13MXuGSXQJSYv4uLv7p97zbVZ",
  "key13": "3YkTn1vCT6zHa3x4sttTg2QhsZzUdTtmPqvS7q6ZZSino1TJ14ipWdgPWXqP82iN4gWdb9GDQsef2NKhzHpNGMBv",
  "key14": "3ESGzZtii2HuBFvofK9pmxybM3RDHq2EuJ6NeRCMLKcevaKjfCjKP5C7woiGmQxYeu7GdTzBr9n7S1erfG9wKuXD",
  "key15": "yhovCqQ69WNLvdTihDzebsd3XfJRMYYEK5iyVXxz2souvba1S1pmxiHs7QvqurnWSRycH38twHPy7TYgEVYnhep",
  "key16": "4E1bayzYkd2aJgjXdwPV6gKhjeCbpRp9FrmGyPATaKf2ehnEK5MKA811Xk2tW7qHGweJ5WUx2DUpBW4mBvJz6KHR",
  "key17": "5XLNGeK5zqm6egu8UtCZfXMcaVnYEmcJKWUbtzCJtLF91ZLn3VBwZ9ZLrzK1gPn7FE88G3RcXsJvQZz6SnbQddjw",
  "key18": "2Zrk6qmrp7Bpr7H6bu7XgzBn6farmZJsm1dCNErFffxoQEMnGPmohBA7gLhz3Qq9KuWUquKyuTnt952UcDNZg4TX",
  "key19": "U8rYTH74fR4iwerVCF16PUrTvorZmZDxiTGnqsQqERPy1MzK5PHVKwEJsP4sCeke2Y45zsZSczrUSpBzQ3qPAnq",
  "key20": "4vtmiAgyRZKfbdiZRTMHhSrpwBGuQywvXbDidabrE2aBwM1zpfpjRqRvkA2RHmvPUAsByZ1achnvpJyJ7HcrL62H",
  "key21": "2gezEFEQRVBDXUNR57wxCfRFDX7wTBpjihv7nY9TXJYsrcjanNPEHnfiTf96U8oeAcUittYL2X3q2KbbP1hrnYd9",
  "key22": "JLhLAMVaAJF5Fzc4ZVeBXLLf5VzzsUqnwddC7CcAxPc7wsQ7AtFUhpAi3Nr3jxwEiYDoVARxBwQFSMTys73QApL",
  "key23": "2wDN1maGStEX3zXNGpXzNxEvtfdnUKbixbJq7NEbVvxm22rujmyvzfQaj3NFTYC8UfSemVMAj5zT5tUtYnWjbqMS",
  "key24": "3YjJqxpZLeMbp8x4rRoJqDYrqhLXjtTd7GVJxuvh8tRQhaRRUUarcPNPP88iBdUe23LnshcWgM9n2zNQkryEbBcr",
  "key25": "3mPvaJknfXKgBbg4zVX2NUzZkXsQzfwvEJ5tDxGmP4a9taQuhgJuyTJtmJNxvjuCdjCJPR74F4DVjNJP4z7sFAsm",
  "key26": "63WjY5vnm9oKXno92gAdeSRQEnvT4KkqPMUC7ckYWfVcjhfecbn2PYxo7T3zcD8TbkGQy99uyDjRvzAbtxnBf7Cy",
  "key27": "2yfjR8RE6s7sd3fnW16gu6GEZkwb15HTgxWZVaLUMm3k6wVxk41gw8y4nwRhae2psing1NSbsoTUhD61CwiyQFwx"
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
