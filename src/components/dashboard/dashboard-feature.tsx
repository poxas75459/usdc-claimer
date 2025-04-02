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
    "jzH9jbKHCzCCo5qwRdBMMg6U65Ba829diVPworbK26Jr61TJMyGdLGvaKFtRvbnugccrDshStW7kvW4VDvkWxoq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QS78h1Byt6r124s9hFs2pbXQvVDLXdyziB9KJzzqU69qQ9FVyne5zbr6QkSY8HoyXkkcgQzK56jkd456bsYM1wq",
  "key1": "j4Z9YB5McndfLdemumeuWB9JszgyKdvgh8vPnmgW5cLHv7mfVViPqYxkZDdpP9BxShQJhCU8vL5SnDcZVqcdCbQ",
  "key2": "4cV6KwJ2quCyyM1PWhHMYtSdtEs8sLXCCSFTAhm261pwBqCTMinjDCMkv9wC4CyMcEJbfJZV1HkTCTrDL1EzYXqH",
  "key3": "28CCo9Btqk72kW1bgHxiyFcuhfDZ2HAE1nBRjpzhTCrVYk82px9aws9LSF6sLKH5BFzvmNQTwKSLj1qn3e8ngNvx",
  "key4": "3F5MAfDBHi8t7kPgLCYncMeRJga5qRDvj6K6b6SfcSTbutF8z8PmXn8rNNskMcPhUZVpUq18SZGKNTpQyL49MZ5K",
  "key5": "4iFAGLhgDJt779zJVg5CycLdFxy4sHUJoW5yeX2GzbntJa6dcEan824hX5cYoYJhf3VNJsq7uqcyMZz22jwM7Utn",
  "key6": "2VqFtsU3V4SJypz3z8dHX5zTaD9jB5dK8FrsHG6e9PtnW2W9qGRCaHrab3jzWdP746qKHRByT3gCYbL4KfAAJRnj",
  "key7": "5StanS4WXLnv2SCAYbEfv68vdY8UPoFoBDZRmrALcCk4FW8fCu7uANRgXV5fWGVGhi4mXNzUv9N44hy4EspVLX8V",
  "key8": "Guw4YQtivuraLf87w23Wyhbk9Z5cQWFKc3xwQxXGstPVTTQQTXJiuKrYkHZz8sQtQj6VqrU3oW2dofWXcqWhD3i",
  "key9": "5pqHXFcbfhsZGRsNC8Dm1Jks4FMfaFXiLcCj4BdXATRVgEveq9wrPpDR7vrZo1SpMnGhTo46anTPNwRXwX7CYXpx",
  "key10": "5mD6aJnwzM3UsawaKhN6SNHehELZk27Wbk1upHwKpXCxLXyvf6Zw8jEhYYJwCAqiXpt767ZA1HtA9M3mTRf9YXZT",
  "key11": "avPF4fnqttn8pn7KqNbWFtFkKj8jKRTRL542GFayGZW5BJ3pPe6CDJ2bddhMTqDJ9x5W7iXuKSyeXqNUFwMHy73",
  "key12": "5Tgi6gQtVxCynT3rRzgHZPtXHwX3XEfg3qjvT83a4wkko6kDm9tzDssR6HuoeowWxPXKsXUkDRVmmXEQj1uByqbs",
  "key13": "3pQ657VbQNeA8yBHakERLSdNJnM1vR99XK46WVQnw9uJX7ACWisKdGehnZzWLfqp87zSMVVSs6SQhRKF86HXMTEY",
  "key14": "XSvW7adbDDdT5arWCZsHv59YZAL4cbAXxCzuk9wAc3HjGV2sTNNouidHM1AATkhMnUgiqqWW39UdGq1MmFeQE3Z",
  "key15": "5xVTtXyaDnFEAsQHya9NVH9TwS1zTnYDBWfyTCC76YD2b6niXBrxCSLmXgWD6F3icA2yN6eG9P779smNM5HmZjf",
  "key16": "3dcE8q6dATQp4XM1ZtBn8qQXxtaxWquKKLRpZy2f3Wdkxwgv8kiXmuQdtN92VpjDg25gxjtjBuMUXvTiYU6L8Heu",
  "key17": "3zChDq3HtcsPWgudc3Jupi96oF5GguwYz8p4xnfKnXioWghpUd6ekYEBzDwb4auJ3NhirZPd7GvJYdM1K96mAfRa",
  "key18": "2Uv97nHkXEaicgs7akRzYLdS1RaPCMMxWCZ6HKzaGWSzHgxcVYviTkbjJauipS39mL5QGpKeXfZb3947GXHQGA8x",
  "key19": "26o1NF8rtaFCkQkuDUfmgJjbJi7J3SGMeV3nRYC1VWSxx8dP9GhtLtJyzfKekNtDWEko3qBx3Wmgf4snsxHAUUuT",
  "key20": "swR2YcoucjAQVY8JQY86j67iNbAXgZoiNEu15cyjjxbKDCe7d1njdWeRYceaY4kXSvfCcfkTtxt17Qqkq5jeFMg",
  "key21": "KfwCcdM5FLuR5YmZyQ4igRhE4x2dC1XTMbGHHeFNgX1Gv4UCVcCNHAYZMKuQddj4vUU4ZjY8fFWoZT5v3VzaPwE",
  "key22": "hH4VTZYD4GCkx9wq62yb21WX1CDGJqRcpXLRR4odz5PX1hUgHFDpwt42ZNm1SbxvCYR4QoKHCc7Z1TBSCuxGhAd",
  "key23": "UzQtYirokgAmXpFYVpUgYjSdZGj2VyaKjQRLyEpoGHXy2Vt7SXGZ3xrZxYWSKqnumTuFaj6EHNh2bvzzo3ptxbt",
  "key24": "2g4tmicco2C4G3qRFmiBwADUXWKy7Ru3ogCviota22mKboR4CLNaJmxKLjG1Cp1YYvP7WNxSpncyk8HKS7WTLeod",
  "key25": "3ZM6wjwWBdGCRH91uKH6kekVoByDMdgdxhZ748BgLwoo85YbAxawcuSVE2PjBKNWhwTjR2vEnFagWfAqWBPWTfrP",
  "key26": "C45ckHsmWP7m4pZ7h1VvDstznRmec2CzFsPi3CZ6euqJcopsYhMDzG7bhD5d7T4fxarGwUHgBuT6jHGG6qEpCyd",
  "key27": "2717BnehEYovn6tUzrJF1GGTMm9fYdza2moZ9wQdcBSz4mHf1FkJ3LaLPP1ccCRS3TyLN58DmJEDV7Cx57Uhr3Aj"
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
