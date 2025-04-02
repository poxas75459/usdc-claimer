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
    "5JTDL45E7eDLLGEYbCguveVYbwXpHXJxu1KQqCjUAeTKEqjhSJpFW5ojAhMefJXUhY3bE6LXPBoVrVDgDTQTNuYU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WrdYSUo457wA1tefsTwfQBMv29HfZbvM42UCL1vdo3DHbcqvqzBnNG58vH4pr68iZRN9PYMLsmU16Ex19LWBiNN",
  "key1": "4VoEjfEdZar5UMzEWyDScFtFVwHQ5oyG2RZkkYX7HL2jgh838YUS3ByvWAouChGKE1NNos4rJzsLAbEXM2fGV8QW",
  "key2": "5hDV5qZm6hC4b44F1MjCCSSjUFDxdy2f3ceN9mQJbG2GKoLPxdecpgS7fRSzRpXxwFbswEQD2unug2yQ5HAcercS",
  "key3": "4T6BRMK9yy8PnU5vmWfz4V9kPAP72wyZFdkbTVpSyrhixSwivfUSXgriup7GBreuhieMMD1F8vszz7Hf6YsH7qkD",
  "key4": "5ympUGSwKKew3VGeE3Ef4KerGKg5f6sTVJheZqr4Wc27JSqcLDSdU3KUgEC5SnKectZGfF4PbfJ2EEgCfwye8M4m",
  "key5": "5RXRan19jqh2vJgRpmx4PFQg9DbEed7mtimEbazpMAYq3JtfjD4DmnfXDNZKHyY82MBuewZT8FjDdSfEarCWp7iD",
  "key6": "2VbKEW6UVNwzNMkoPxSmyjuQ5BvbMR2bT52R8ECL3qy4jWx1a1qPTYitJCLuWhkyF7pxZhih1qs56v2b6ogsaaD2",
  "key7": "2BZwym2QNKUCRGigFDMxJ38rmc62tUm35XX64qAzW9yBZRze429BW9qskKG69CuiUcG87pHBYvnFMBuaUxvmuFc9",
  "key8": "4fjE5PdeKRzpRAjxH7wftGRQUQ2cSwP2VGwwotRQo9rNbZYkuvuhGjyuWjvhJ343nHRP4kCNYH8ZvVBPU9HySZJY",
  "key9": "358M7e6NgZyWwzryy2EnL2BHyKjtRLgjshSAGwnpe8vTjT8NBUmHwRnG6Trmg2FwEucQ4MeBc8igVVmVrWqZwZBV",
  "key10": "2Sk8jzFkKhr7CFNsnQAYLHJejfftGd359kQWdWeKGpxkbBHexoWMrjXmzhZHV2xKwc8inPyieVnjbGN7AiD6MuNE",
  "key11": "57ykZsjutMogXTvQcjvGotfxnhc3noznewhaMEqnABsYzGUTbduKAxpxVpEnvk2pLbyhxqUiCh1iXjv9rgS5zA6t",
  "key12": "4B9Za7zbuHnShcJqnZgYbfSZGboM3MbCWDhWX7MadyiWXoDGLi2bjeWCZE4uTPej4Uvj6etQ6q1MUnzh74r3bQNy",
  "key13": "5qxyscQ9xxovoCyM9T3Qiy1qh7nMGx1zPfCdmVU2WMgvwArhAdPNH9mKbFLJtXHtyGeRmm86MuEiNthCRNQqBveg",
  "key14": "2rZ9iqibYiuxG2MgYBWeHE9WyQXhKwXbT4LPbZu95SVu6untVCN1jRdHT4QHPqCH7TQorbXQ4QiSM9naBHUL2LPC",
  "key15": "5UcHJN8pgQAvLMNzNRKvEc8G9BTXenj5v9jxmPQmrhbbx4QeSFwbhcTx5LYgXYKW2gt3FLWDpJWakiuQUEixtjmn",
  "key16": "5z3kPEmbWmGR5yvQdz2v3VdXy9HmSPegqN5YGKxMfJRi68pUp1NhVqJWkktxSvr2iY8iBHPhizKMS4qypD63xDJd",
  "key17": "2RgxNwxMyoqTS2AqC8R369TLSDKguphQ28AjDyVLuctQA585UefpP894TUeNt7jmrgK85Zs5sDG558qhNc3Mc8xZ",
  "key18": "4uddpgSYxCzKhNKZ4AaH9mW9rvqa2LTTLR6ivyhWFZt7aPzjMQMxLoHx5tDT89k5qm3iVYtKCXHXF5DpKUkWtEJM",
  "key19": "2dzYSG5eBkd9dLgGgH9hrKV4dEy2ij9auqXzXhkdcTrUhzSUJrnw7DqkshqohKbEk451oLUFu3gQB9YLoosBpyun",
  "key20": "34k5ZutmZdAinFUVbbZpzYAr2pwioL8UEZadRuhePLw1wB4M5gnG3D3SnfyRREptJwpmCtH4ZedZVThLmqGRuuTz",
  "key21": "4nDLBe4Xgt6dh6vucM5hv2XnSLrzySw4CQv6x78Knc88ci59iJQieiP7Ej8rhc3ugFzunuVSue3hKAV7s8Amje9J",
  "key22": "66HoUaWanH8bCuny9j3vdC1STCxxg9BSBcqoku8qf8AdE22AcbzFtFZNhVPXTrjVet5G9hoUceVTa6q2HfQrFQcU",
  "key23": "3kHFW6qeQci3jxzXznENt7gYh7mGY2YwfkdbRPabugPaYVLsPNSnHyWeuL43X8kus6YefAnX8fp9Vhu12TsLF6kX",
  "key24": "2FdLFic1LK9iB6Cg5dnwFys8Abt4R9eYKgNFSVDDcfw25urTHtN6vSnVzavjsYmh2somkuMnJhrmxLwc83fKATFB",
  "key25": "4mvZq5xzfxpdPPan4vAuDG4srzX698Y5btt92neswHhPYM5PHzQix1H1Gh4Btxr4uL2kL8FQbeoTRXpLZdCzYLgD"
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
