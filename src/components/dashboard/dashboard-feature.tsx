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
    "4vmeWfCjjD2BbdwAnfSYMSwzDfKnfDgQvfojs33SwnTPmBwHeE9CcFnzmoXcnG93Q1233SQ4GVkBxGRZ7chqr2nF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oB8U7HF3x5tUdY4AMe4nKN67fw2hY472rcEBBJ2Pdrn2bX8tq1NS3pfDmcJFgFa3aAsQdhovFngRKw4aeb8CAk9",
  "key1": "4k8qUWkRb46mi6brXEg4hCi3JwWMmGc1TDmCYeEyuvXvQQt9DFqU6mpxMVKsxy6etyssGXjkiqPfabW3ESzrLL3S",
  "key2": "3CnMWBPqkpG5GXAmER4CGX8kZaPRRga9WiCxsJAZit5iJFG8eTA2oFCT4CruJZs2EJAh4miDbKGkLV9Zjzyg4ePc",
  "key3": "QdXQZgY66iE7PRUzF4wtcDjNHcT4Df9W6nC97z419GrXg2mX3qmRsDnZZTT1zc44LFaKnrFDm1Qactuf3YVbDFP",
  "key4": "4A9JNFiooL6DKsLzCEJrbjNChXkcSjBN9BmTM6K6fEjqyse4uyCDT7MWj8kkx1G5V7s9eN8B23vPzCqpAx6UxuSj",
  "key5": "3sxNf5q8xz3fqsZjY8NTiXuBKiejFTUX8RqrLCzjMDXbZN7hwPeg4EJCLXgskmVrMRYcZYnmhjZQ4BoGWT6xGfJt",
  "key6": "3aKzxiRRpNtyc9h85qwqUxn1NNuPKayt67219JP3B57tMACHTtQWiXAhxS6KCvVcznaPFBfgDspawBnCMt3z2n9u",
  "key7": "4X3z2AgUHhvFQuRUsng7B9nt314Fec5bhb8iDX1CX8o69SFSpht57ijieB3xe5GyHBEdvFsd43hMiyd9LUbJeAbh",
  "key8": "5Qp4DLmfqP8fJQ49Etq5VHwNj2KjHuzhaj828f6PwG3zErkDh96CmNUNX6DhuD3cQ59uo2pkuuXR9g6mGadwkPjg",
  "key9": "5iASUuFhU64cvRTazvYF5Mi6FH8u72bLAg49sMz9s1ZDA4PAyF2qS9y9aKbPSrw16xmHbpZfnTzxEHGnWWLNuDNP",
  "key10": "2q1nWsVLuEfX8VPQWjoKtPJkxpz5gea4KrzUBnNKpfxnHwK48Bj896vWZ6ui3xJWr3qphCy9u3s18vnDAGo8u8pN",
  "key11": "3wnu5b6Y2TN86bL31wS1cKUUnt4sG2dHgiMRXtfUQJpoJD55HP3KRJnJK1LxaWUFd6H4KmvUo9h5rxpj7AKmxExM",
  "key12": "442dcwnJyTWv73RuJjF7R8bHWrUc1HET4ig9g4CW9nVhecLKYigg55XPXk5qC2fjTVcq8FMHzZorA9uQRPMvRF2S",
  "key13": "5KuB2NvL2cfVRZ28bBn3AiboL2T9rokGwUPj1gfGLrCWxfL33MqP2oMuiLvM2d4R2Ez6Tn5Lnosq2vMcLGdiKNUo",
  "key14": "4ixHfyCvvFJSe1RanvoeYLxvFhuiVLe9n7XoHKVRNBBda6r8dCboF9oMQ8KZnQoyxVciEdNmXBseqG6vXUyQzDFU",
  "key15": "njSVUTBEZSPGsZchibypWM2KkNCQ4UUChs7TiCWXhtfHCcYRkGE9kekCS7skB9uPgZNaoLU2X99sYM7KiRcZHxr",
  "key16": "3xs25zKeyrSGYDUTeFP7KCMTzawgGGLd9PSJs4WrgTY5rSPDLeb5M8xJn3QCVSCgB7Roey2k8qRwmkPRjKa4vDQC",
  "key17": "4pi1dE3aVxuNufxd8K6DDrUFjrxRWtYExxX7GEGYaQoLv2RWZT3z6PQBLvMud7BrmFBg3cBDoNYezk7rtqo8jxze",
  "key18": "4MbUMgzc7VLxjZnrxNsFqPSaH7UbXbw3pJyLR6cRmNJCK92BbiHNNg2fPWu67Cbvx83QemrztSaSoEAFTSoEWoXi",
  "key19": "4UYJ8LFEbbFjvzaq47KE91MCPNzjKoQax5D7vErYUi7TkoqnBFpgDvPSwQ4yaFzUq8xgeFU7veJrp9ngTxUZpQGH",
  "key20": "6NdnfoUjp6kPQgZqJo2gQ5AxBH2KhSci5m5w4r3vK8ymXPzxMYvZNx2vbpZPNoBoTh57dqB5uAEWAiP1uAPBD4s",
  "key21": "2Vxr1NQSJKkwu8mJnUUDyNpQcmvJSfco4U5Y9tJufNkgSsuJzkT8X8TQYcDb2Y8LrQrNC3vnpDDLeCPXvQjVPrkX",
  "key22": "3vmPy9Xgq4J9wAvrwqgZcexgb8LuJAr99kdpM4SYSeK9Fe3MExZHeZeJvTP5i9u7ekhHoyZyrzj5dwTXXbwtEyV5",
  "key23": "XAcripidLKrryUGK4ojuZEqQxvrqSr81NJE6CU1pgKSUZkmdUM3Vrb56rYiqXwEi1hKAK8rDB5PZx8pTBaJ8Kfg",
  "key24": "4KB42J5g3SburDYa6Q1R1cb1DHEK257hoyCRYijTt3cA6XEk46bp9QqDnmkXfNxhz9E2jSx8Ppp733GiD3nKBsmf",
  "key25": "3LLdtrHv53Rsx7vNTLLf8HXhvQiHLShGeKoAjdwH8MhbWrLymTew8gedp5eSM3T7LbHcfEMAyxRokYM2q6zcHX7v",
  "key26": "3UJJLR2oxreH9ZnVN9ZQkVMbWUwDTi3eHquX5GBwAkQbTEiw77MjQTzUcjRebKJcDq5nvmsZwYf3Pnm6nEvgX7Mw",
  "key27": "2vaYcLt78xHSaSEUSR4Xo9s7kqZHnY6TSPGFEWUH2amDGbs8qv8PkvcdvRitEQ6Zy3gVLbCNeEryTxghurUsDakD",
  "key28": "35vi9BjFUVi5ESZStdpuGzJy5xjwyWJyEdCm1ZBjdL1nnKqHnr16H6te3qN8iJijCvK4GjsfT38nT91NAdZ7tvA3",
  "key29": "4KF55wFzx7kwgn6QPv5XDYH4KRhGbsR4D1vaVbzyGbJVhMuXEM8WhJE5f9zECtzK7vwdTfNoLeeGQNkDsaaaLr7g",
  "key30": "2QesBGofZTqfwotnAsrrU33uMhoz1DXpXSp1aNYnpWFYXmf9MApupq4ZXHD7mwQ1PLZqu2mf22zZnGdDST8Qm8U1",
  "key31": "5W8PXFV6fi2SpXzX5Zzdk2mRBLJ8rgnqhJcYq2bYo3xdcKkH6EsQ8AyonYG2y1Td58vDrpRWeycnreFHQkPWe9Eg",
  "key32": "4pnjyzDWW9dhxyqdsG7q58PpHMgyBhzGBDwqQ9HNxNtygm9wamcEDsKsVhuaXUnfJQAd1Lh4CfC2TyA3vvSMoRTp",
  "key33": "4SG1CjSHwDhoai723cRdkL4AnxrRvYo92393cGfzLJYDS6xchupF2nFs9ziNEUfzpzmKRfpCX6vEsYRbriLt7YXN",
  "key34": "5jhdem4cP8PrdPRxFV1iX6MFZpgwmQVa7NMgDE2kWG8Ns8Csd5DJ6mFKCqw6UGWVSM1cwmUf9taW87s6pqGu6u77",
  "key35": "63rzrotpiqRNqq4qpAN3yob2UEH92fvykyfThs9aYtX8dAFYuPeSyRF7rYJuCWgdmJurvfQ9L6mCn8GJF98okfRp"
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
