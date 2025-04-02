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
    "5xm1n3A7rYvbZJ6mHXfnh86xEYkYybnqmY1Z3YYNAtHZx7VTaM923wMWeZZv6Lsya7zMJVXeUinBjsohRjpUn4FW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UNvfs7g9UKSQ8ZFNi48GJM4eiECMfGqrcAZeeMSLN7tkhNXaM2DWzkGxPoTLax4eWSwsgewNeaimGGUzeMs3WTv",
  "key1": "paUrwmn1dRFfu36BXvzaZBPvtV56yb1HoRGzuSWHKNZoVeJMdCVrg3pVxbek7ythLTkhw6sk9siqXktTZM47WYA",
  "key2": "5ppMnhxtm53wn28CJkwQnMEBYm6QCdoGBtQdxjVUoT3QBiTpPayXHiEtfhUxjfU98s9d8g8V9UotsdXhAP2cpEFc",
  "key3": "4VuMpznKTJqWnq9VtNec5bXQy5au2g6sU9KaUGUPBj8d5LpHNFJex3EksZUXtJ9EbZLPQKzPLhhdzPocP69PSdZo",
  "key4": "2b8wgZou3iAPy35P23h6TSVRk2jMcAL7ZMh91no6NPxQy4cUbNFcWZR1eQcABQyPRAcgKmeiqPZBkP9R2SgCpcKe",
  "key5": "jGhGzRhuEkeguL5wFoxqFhDLG4wiYm4WcJQV99Yzs98P8wrrV7MREk7W8nUHEsrtA5jp5DGMevUnt4mCYxuYfP2",
  "key6": "37wD6SHNfjEciJ9m2rRSp6vzGevZYA2jrqutjZkcaVASdyB5EmWhr9wZ6qrybfH2GDCRtGAFG3rFkHmJ9EQxuURA",
  "key7": "28xuxrvVXRuhczKXud9Pkg32cYS9hqa3MZMDMCPycQuzF1U6cpgfyNNJhsDun6TL68ipjTgjF6fhyhyr1kp2kB78",
  "key8": "QdwJo3zeHjt2aJkLKaWmpaiat7DEKPQT9VnLh4sLdQVdc6gcnUg47i7StVTsioqPohkzFTwQXTtrVRZjehhY2iW",
  "key9": "67meJkhQmKMaf8h7i5bSoVwTmbNNaC3vKRcF5Y4AqpatXaHyMqR84asUQ9YQty5ztFoC7dzQfCe6vLHFGXUMbmCn",
  "key10": "2j7dDwWciRR7YMchjc69UozdcjAoD19yHhwiEpUWFQCGx6R9o4DDX6Z1dm6w4nurgDAZK9XCgYPUeH8YxPMT4hhf",
  "key11": "3UU8XFnsEDCD7q2hC2vsnYxq7WUnECEGZMw4cobndJVHSXT1unuXriR7EwUSkxAjbtQ516wPJbNvd3PdpXuxiFeW",
  "key12": "612PZzRuXx8r12rXyz3CHsiBcsyzrvjLBMrAPHHbc9jDWUgCwDxP2NYKkAEL7KY2Z6aQKuecG1UXKGPSQfRyCCxe",
  "key13": "3pPo4EvwD7Ld82pL7Z32xTYsWtCiJygcwLf3d1eqqBXwiQdwxMQRUbuweR4NKD1QLzgxVFfKMrDKFttvaAqSeCur",
  "key14": "2S8MYwCDshPHCpvRY1x5Ea4PmAEEaLdzfYyEA5NJaHWvXedaZPgZgBTGebUEJy8VybKgHJyjSvuFxGUpCAu1754K",
  "key15": "32N8i7tR1nEZ5CMcCXBrLcud73MByfHZEMrZib4723Srku3H6w5LV25HmoKvxqZvMU8TPhXr7uggVdgK4zUvGbGY",
  "key16": "is45u4RWfrbkDTa965AX5jkMA6sFpJUkvQBGuE6D6qMeGJ8bbRAVQFAiHBQhLnKc2bUKqkPoxm1Jn6RDV4vM3LM",
  "key17": "2kbYypxkteVUscn5Tf83o3qLhMkMPNEmyXPUMezdDkETAwbH9SCvkLUzGLeGYxPP4tvArWngwqNoQavtSf8DgaDi",
  "key18": "4j4ykyzSQMfTuHEiMjZ5wgkvYnQ5jBeqGDJE4vAJE2X3ZwHtNL3MopAphUVxPuk5bUjLqqDZsNe9uz1hmviTEuJw",
  "key19": "4ZWNWeaJi5KPi2mdXf6bh7LLPSxoD6EENdynCURX3wJCk91p5D37go1ipdW67nB12ydyeG27VQGtc7c8eiNM8MpD",
  "key20": "2wxWejMBBVgzKdGx5tRZ7N3o6nmSZDAr5sC56NVSJgF27nHvn7JMCQfTMLPnirDyzL5ooD9EPpQd8xQWPNErnPyq",
  "key21": "2HSzJscru5zLgostvmYUexFkkrBwZtQ6oGZYzctWr3SET7ensJ7u59Q7q2fDEsTSN8u9YDN5Q2zr8VYLaZp2t5SD",
  "key22": "iYSSU4gSPtTbb8XfPxvor88mPNzzuZdirftXZDALTqo69C2835VKitpgDEgTorwuiKXL5eVtY7w6DP9TjUZ1Zeq",
  "key23": "2tadGxsVsVjgkjs6CeXLLKKzT8aopRDKqUyGkS4ywSLqzTE1Vb3wGgG9ohtsYvW6EzMqPuuz52TZCyETjspWEkBv",
  "key24": "4FKkfUh5MZ9sp472f638gESfbVN7wmQG8pHTMiuHuJzTtnRY1CcdQAw1hu738dP8UAzY6PpHtbs3bABZCx3FFfJZ",
  "key25": "XGdDvihJhKgxXE2E8wyTtFMy9ad9KuCiMUTURZHFKSZXfQk98v2PDBBdv6K2JKKZXddwYutjSVPyPPJECb7KDR2",
  "key26": "21g2jWfVkChv3DUuePDEYFwYCUPhh2cUXEUSQugcDNMuXFPtaUAsrAr5aL3pypxcH1qrA6m93QtWa6pWVizq5hwW",
  "key27": "2y6rzscUjb5PbbSTqPXU3xRKSSB4r4k4Bg6GfnMC8d7oRcg9vTkqpRtRypiAjgwypkYKBqiehMtckKXRDmB6BR2V"
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
