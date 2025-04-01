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
    "PoSTpRXhKPy5DEaDVraqSg6RpGXoNEUMaXwkQwmctEBptnB2Dh2AGiuoGHuEyr4CfrfDU6ACaZqyvoAJKREgCNX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21DewoCNg9bmyZ9dYvHf775TWq9C2K7xmxBy55AEemLyRe84QVfgPwgN38nbj3tSTwVerBdZPQKPeMaR4rhon7nx",
  "key1": "617CtoUSfbbViEJmumr6hnd3qtqY5z1nJdF2eGEf9Wzv5RM1iN4FWcMVFg5hpyP9YQhjJFjdLann5TPhkjda7rQ7",
  "key2": "5pTbwmkm4C8J2x4yrwzLn94n9Gk7ZTYJusZfDUG6yxMWz2v1cN89XDsmnTR3UvWf8cQQLJUvSdDWVJuuhMivQtbX",
  "key3": "29mwdgZpHVdmFcWLspfFCA6QiyLFD5BGPKBXwuZ2LnMFByXgTXA4aQ8hxDxk1Nh5kTbDcqcd7wxRb6iKWdj8wL6d",
  "key4": "4b3dVLQmR1B34Qq4gLyqwJJ6QJsnHf4esmdeBBSaGG3nTEQTxtwAhYnd5bvyDxH7ZX2c6TrWGU13JgzkMCiohvz",
  "key5": "2tRRnreafokiALZTuy7Mn7uFjEYTxQGDQCwcEzzBCA6ixpN2aMQayhyqwRduh1Y3Dr4uMstRe8Y5UstcWYGyeLjG",
  "key6": "4BD8rzqZsTkpWuwpQWF6sQrvkbz4VCFFHQ1ttxHWgqTgiBeYKitFVjQyAcJNmE4z44V8mM3DeiEV8nsSbraHZysE",
  "key7": "64hdgB9ToEwpGncuJcSE4GvdqsS48psaPNWBBNk8GjYWpgBKLpPphp8NnLubq18WBuK2fZHL5Hgzgqp9RZE7TJpT",
  "key8": "5nYdBjhUEBCyzzsFL4jNtvniV5gy9dghcL2aNaXBNtPtrUFEULX1w8JKtD24JSNPmghoN7zuiPiuUdNS898GA8qV",
  "key9": "251gPBExounT9rsqs4Td3wSVcdWy1XkZWyj8vbsgvJajHMuKVKmF5QE27nB5CeEJyG3tqZERwXXNk9xRi38rMrtM",
  "key10": "5aXwvvvC1QsLegDos9thwVQvTqCRYsY8etky3SmBmx6E3J6z1CcdYiiVKDxhssKCckwM2ANRmoBHAns6qM92qjiQ",
  "key11": "48kEstK69qngHhURyngdvveCP3aKW4CqGLJaSBSuN1H7nPthveRbm6FKCXNPvYh8HE3j1nZdT7hzncL7G3fPonsC",
  "key12": "5ksppmb6b4DBkHReVa79LcsGSC7cEbzYqprtLbfdLQZKVh6Y17nZ4aHfWjAYTKer88QDL9W7SoapV57ebpnJyvTn",
  "key13": "5ehp3e7uVcxR67djMEvqSQxDw8X3nDuvkAwn3qgsVNYos2Vfa19MjBzE3xtGmvwCfWX6UcsB1i5vrwHBUFurT8nR",
  "key14": "KKRJoqLcqWvGYKiFnXRm9nBCx9us6gTJ7bYRxMJwFhz3GFUPEsyMaXf1LmmWgcFC9TJaZTCXdkLGtcfWkJKzoJw",
  "key15": "4tmS6ZbztRZhq3C8qc3cjxDKFwgaLR6kB35kPce8GMZGhGnD49MSESdLP3kuzxmsxRbBZBQYrBnEp2dr8ZQn3EKG",
  "key16": "3UGkPd94hPkVZtrBNwSoseY72Gia1V1tsxDnEwW5NujK8QDv9Wg2oF62DnDJMdstzfeGU5eiT9SFcARrMfhJzy1m",
  "key17": "5UyiKMZN4HZC8UUreARASy6kukyCqznSdtdpXtDPo39dtJ5Yvs82g6gwAJEidV558zLqP19iBg4V19x4kHFv9Y98",
  "key18": "4crjLjXEREBsPc7GbHPPnjKZmrc7ZYBU9Fwr1rqtoTeony3sJcQqxC2aL1EfLLyStv3mLQSXxDEwDiWGv9esHUkg",
  "key19": "v68uDi3bRPn1Vms2kCTqysCs9SsGX8oxExqUtcjexBfNqV5Bhssr3qejeArsbvErKdwBkWcoaWfArqgK6zmumiL",
  "key20": "4ec49iqf5n38oQrFZ5966MDyoVyQ5qihoZJJe7JvvzK9y9G4ZfYxmXLAVqZsaHCoEpfvuZz2Df8wxhSWc9u2P3QJ",
  "key21": "5FLYSqacHbUKfY3YTruVhWP4oMi43caASbUvwprGuwbeEcRMRijjth5ucFD8cbjczDbif1NoLdyrWdwD1HRyFByB",
  "key22": "kfBZmzumFUKdQUjsgV7MrGY4VVxb1vWvYpUHaWqSn4sj3bJRJBi3mAHzcT4b7GkDXiYhA4Af2wH5shv9ekCZ3z8",
  "key23": "2B3Wpd3BzVejkP63E9bCqR8YziaEiLPC7kn8J1rP7VN1CakiDzuczhenQuvsxJt2d2TUuKy97k54PBBXirFCQwB3",
  "key24": "tEDbGLDGY6TLqUcEkathutdEJn6UG3cWfgiYkGAiU5wZt78x3DEvVosjbCysetimNLGYUSU4bMb5PeMAdRwQEvo"
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
