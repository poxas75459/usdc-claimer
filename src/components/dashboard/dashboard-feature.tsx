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
    "312FrbJHECf5NvFmibqUMPAjJZcsnoQKu2rX7PakjwaQXkXcwGquvH4zV1VzvjA6eWqKfymKej8j4tsq4wr79wH8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "673iiyRTzoE8ciWgwnnu1boTMPEL9kAuB4AJiQGkAmCVa7DuzViyeSEsXL4GB6RkPojP3cW2mYyXCShJowDPqkJK",
  "key1": "2VCTbPAFdqVYDhZdQPtY6XddDnTSyRzcgB5KeErXtFh2p6KE9ePBvX6J23ktyYVprGmNkt3cmwzPzJDTRoPstRUk",
  "key2": "4suowauFQDfGTwDgma2F8VCJz7DeRdHd9VMRgwVqsLSyGRMEVvotvd33wpghzjSwwZdA3oDqgTXjgMsknaxztWL6",
  "key3": "BdAQMXRgDJ6aPppxKxvrmccFJ6rpr2ApEMb95YGyVToN5hxUPu7xe2zmSFvWKPaE1NNUUaY5y6rYBKqAK4hnTu7",
  "key4": "3xtCMiZR8abstzoCxJPDd7MhMM3tB6MXuB56jMxGxAHxUseCyfA8xDbGMHhuY3RkttGq6nsZWcEnSA6Um7dgqCNt",
  "key5": "3mNYF4mvD8ZjJcJV7nf1AzH7HcZTJCxwzFPUGNnn7R3tcr91auiNNatTpHjXKzn13vrAdQcngAR7CZfEUQuv7So5",
  "key6": "5EzEVKoW15Vb6iPD547YK2CsBgU2NpVGBk82C64bFiJyrpXhxsvNagmNTctfXBcVDjnLdJ9woopwGkn4YYNBXYhy",
  "key7": "3zDnUvvDqqgNi69UrSDmXAPdhvzULEMBkCTEDbHcBbty3Puomt2r4uonpxb9t1FArhCcwdCaZNntD14MT18iQEbs",
  "key8": "5GLZSDseDRG95ZfgwUMSEYEyZcf6Ujxf2iBSa2EcZBpGoK8ti78C4fgoyhdhvKEXAWgqTNNQzr4U2Aft96XGSJXQ",
  "key9": "41u4f5cPKRKf6dFdDj4PKWoUCoX3qooaNDUCkUcoh3X7ebZgDwu6CC9aEXahA3GLDjcuRGLYAbxSrumYPsATyFFA",
  "key10": "4baEJwUtgyry4w413GbJouaBbvDT2QLdFyPE3GUnMJS9pViChg6zsWHFDb3uPGF1dHvQHc1syKm2DGkmUeAVMmZ9",
  "key11": "ptL7u8CFS1NznnZrsrewoVxvuZKV5Z96pk2s5zDnMbcTQbsjri13m7tNAkm6GnUfGd6mquASYYcuEGtd9xMuXEL",
  "key12": "4kQL8pqbiCAarc4BL5Hj3ZhmabVzYVmuyV4GSJ2psY3uAKN3MNa7TxH4DTccHKrckgpWVcKxL6j94LVJA1mpUf8A",
  "key13": "2CGu6fDbdJQf3G75afZpoTnUt5v5MHa4Q88uPehQZMnKw39nSGPDt7TAthG2gHHBPS7oNYDMbG52r9QJiRkF3dyA",
  "key14": "5KJa3PJFtS1kQinWv7xjbM5mw2TbG8zzuqzyibG9TFi6DANEaSis3LjPT1Ba3UAfgdy49tzLuPkjCLS2RXCY44xa",
  "key15": "38b1QkWL9ByoqU2iTb1KVSs7f2Fr9duAapnWYV2xqtxxPaCSSkv7AJ8SpPY5qYxzfuAQDksj7Yx6cGhaJFZUx27J",
  "key16": "31pFc5QB4E6kq9pBaEvGKSQ7aJPB2w7YzTVfu1jHiyAHBa9xirgFaLZM8iBXjJvv7sCEQxQEfKHzGxPPFmWUdSsw",
  "key17": "oFCi6XoX72em6aG5diAiB5uG5mSgdutEeLjeMCnzjtJ4fXo66yxwtuFGB1a44mA3aADY8bfb68gmJNy3jbN3Cme",
  "key18": "49KSPHJAiQ7aPZoi8UEjsYLkCdJiE95TtpTRxmWizCgzQkAKAMxLshSHJh8JoZ5hzJJ4JxYLWGpznaCHzECSRJvX",
  "key19": "5oh14MiBQjqzEFnmDnMAxPzEC1RWNwsrVG17yZ2mL3LTzkaq1xubJAxXdtY4URPPSGHWYDKZKPAKwXr94NY3eXE7",
  "key20": "3g9aECpatdMcgP2EXJm7h3BQPeb4pmx98tPDjruYdTg5rczBozV8pzEVhDDFDDxqdywSZiYUf7zGYvLcZg7mk7c7",
  "key21": "Wkz6MMCdSLAS4pT3ksaNSwgHCsog1hi55gm8GfnJps6p8AqCimfvAy3EZCSAP8thFMHYGt3XRn9gjJx9wrX674T",
  "key22": "JTk78A4Xq3gs1pAmQ4R8oqvaWaaWHQX2MAY2mQNujMLkxryuKPsA1xjK3CRu7gvypHq134n23FqXqCUp3bspswj",
  "key23": "2XwsPHqBY2hSaMvJwSaKmEsokcNaXy9fRBtExkRQ2GnVF36Pt4bjnc3YSBnpnFFKM67nbCZSwyzXZkW951VcLJao",
  "key24": "4VJTHoDsVhmFnC8msqVRUnyBuhXR8DUkVcDr9fJXRe7waaxzBzTRvrgdhntZVCmATuAzncp57WkPCyvVraFUtA1Q",
  "key25": "Lbn3tftULwMYkej9fTGgujEEFXUbV6sWVeAu3XdgG2fHHut515X5RdJ3TAZeMYk24CTSkDNQVygk4wLWCSX4mUc",
  "key26": "58UqKLAVZwCr9DzGoaY2QvnqecuiYRmLuTN73wx17Fz4JMKuYTFvgqdVCrbsPuZYJpsEiaYD7CtDxA1h63CeuUaH",
  "key27": "3ug1JhiDg6CbWbEjTQcJNjrbV2pbVXezNBb7H3Mcf7WJ9jK2VPov1L6Q6zjRFabHxJUP7wkdKXCDRrcgzvXJdKnH",
  "key28": "28UE1pDzWrpFDZ9GJ2canP1XZsWmByVy8ZQSrfjabKoaacmjV9PvnL1Z9Ji8unBEBLVAsxyaSCxJSEsQgoA62LX1",
  "key29": "5Znyxw3payhVuhepErraW5SiehmxQgJnixUhQbqUfYA4PHr65kXkro6R79F74VLaZ93xVYb1kDxuxfvtzJpVxEmQ",
  "key30": "2PEA5xB6x8xs3JksCGeZuiNwfeetq6iBKFV8nrRX2Rch2RUyP5Ft4sq4PDimAWwogwqfSeUBunYXou1K2qv4mmhu",
  "key31": "5GHxKB1tTHy7ddRT2GhDGt4eg2QuWvpaCcV6yLZ82FSBYJVbDgbJ8Xofeqn9XX7m8pTzeTAXdeYYCBaqes4uk7t4",
  "key32": "5iUCC9YsyYorks1xV29zMs1jtVXkM3Uz3sr3onUR7keBPh9LwgxuVUPMoqsH63CgeJeCVMaAuLfcnAxNzxuQNUB7",
  "key33": "2diGyebeLsbFCQKn4jx9jNw8rjDgJfCV3Pj15dGZC6mUbDnipSbDj1dbZ1GuNi8ssp3A35nNrNojtWCwoTzBUhi9"
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
