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
    "a8bNfnX5eLS7tWHaYcj5m4hYWXb1W9dkDySKEkxgvWHEsPS95XTMcb2uXwYEySaSVGTP83gbtVbKFWZoKt1ozPZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s6kAbZrQ989qVtPgh2dbLspZg48XTx5odoLcmKJYR32X7QuKVFUDqocwmE2bwAJZrVoicSXiiFadUVpip1Swgj",
  "key1": "zndKqw6QsLuP6oXuEahiN4PewDbhbtLFz7xBBePdwtDtbff7ZDeEMBisKDraEvCHUKsPQqNDbRBtDi7AUYfyWQG",
  "key2": "3YnyBWYnGJZCJFXbj6JvBwnVwCYoRJk7XjrWDkwZqHfe1SYzUov2ipxsb2mR3MRTGJBTsbBPLSxwdZmisyxEdctQ",
  "key3": "5VLrtpLmjWSwcs9JPXJcauQcXYBAU1D5tKG9whwdBadqCr8mjiytT75Km4GRG3sfqxv7ZwMgt8qJv1m9HUmGQDPA",
  "key4": "4BXUm7qPhwCg6M1JhhY2xho9KjyTLziazqzTdh9Eh7G96JxHUgQ7FQf89ejyfjyZB4uZLKHqZguReLP6F8nRdvQs",
  "key5": "nmw1sEiWb5hyWAVnghudjdJMk57uV6H9ih3JvR1ZfK3QzgR7qx8BbgTeUcHvbEHXeTMjDazKYSdQizAkwGoWWNZ",
  "key6": "2CYaoddYrYECYKYTJCVYRJpmEAg5wAMjjvJjmcJa36ibzpWbFvg9J52pFxJZUh1ATU3FfL59Lowdm1ogn83xpBL6",
  "key7": "3h6ij6fqUhX82cJivbhWttugA91HiZY5CRM2RLHGUVn5Y6ydNoSskM7yPqT7kLzQYmmX2ZjkNvCHqCSoWd2BkSCL",
  "key8": "2RVuFxCB93XhXtHmbAhR75ZfiVjLPr3ZgPLfLo1FCL4cD2GMRM482Zf3cyPELKhnKFdu4frbHXT1awGuVu1JYNYy",
  "key9": "5pdrfRM4xrfNZr51MUTjmMmbYfXSjCWZT3Q2P4L1KT4mXvRkDTzFR9vsRM5DHDNTRbZjDs7gd8aR1sM77YZ9XyCz",
  "key10": "27F5Q41SWuwrZHFcgZmAP82DUPuzc6H9L7u3vGybZoW8unBKoQznm6nEv7zjyksXGfDV6U83E3E5bhzqo1XdvK1j",
  "key11": "uxrYjFFBCyDrqTgQ5WAhg1QHZwGsdVpvigQivUEiRURC5zZWg7xbHuqvd7iZa1LSSjePuzyyWrMw88AA9348j3u",
  "key12": "5xhdnhduM9wFbkWYHrmXidgUKt58wYP1Ti7U5tktd4wUm6qomSj7G7TC4na4VXNKoP4bHxYfuw6dmNb6nqFF1Sd4",
  "key13": "3uWciyoyaWLgufYiuGunioTsrU5zHW2TG65wKwhesiJPU3tF79Ut2ANHHUBMQM7pUz2HCFGnRu8SWChEuVjxz2tt",
  "key14": "68U3bYSKGE5htecaRwAD7i5JvP2j9mUq739wSrhMiyboiCpYigyYzcjSMKiMr1jSZLQiexZSapwWT81izF8HQ7s",
  "key15": "4JMRF3RG7dWGYLnqGYfJyLY1s43rYR7mUcivMeipgEAEWzrKesx54zNPC8VjwcZ2H22ddxtFy7BNcpwHJwwGvb2S",
  "key16": "4x2oSSt7ymgpEsetWvjY5iRewJPoRLhfiBzmx2RKJd1Giwi7aqG6yMb5muX5BmqKvUC9DanGsKd65AAqdxwfg5Ue",
  "key17": "2QHNEamnxLN2Ef9kUVqeqnzXEmZLQA4Rmd9sgc9nC5GjAyLFMf5enRxGJRJvjrvkwCb8ndJW5S3hQVoSeY6AMrw5",
  "key18": "Jzxr79nRuScM6vYJ6MctjjQi9GFswMVZ9eSGFRhSDBzK3gLihEvXApSAJgxH1Rf4W5BFoWYXs81RfsPxp8Tp1D9",
  "key19": "49FioHrPy8pYANPcFnCDH8WTDEoNucGNg632ofZg3TJeEvRtRiLj3aBJaYygp4XnL3W5oEsN82ZJNnPgr5BqWrqU",
  "key20": "3QCcLi8h9bbDNGGxQFb2EYLYPYMLptSDWQ6ebVk2Kw8vVWUKy3Fuy8GHZgiN3CfW6uRiveRTRTmq4MSpxvgpnZXP",
  "key21": "4ZzZb7b5njteGwHJpjy4Yas2jgtE2EtK9eAQVkEmm9AXqpAKRZ9Su7zqwiCiBiTicT5tVXtK81ZRcSTjDDPR8Wpr",
  "key22": "671H3b2StzV3dCfetEBW1vb4L6zxVap4qrJpWCKGu1PSnC4aqua6EqViRWCUH473buevMdyXX1Y6GUNZwjPQsTJ2",
  "key23": "46qiwqFMo7T2pvGYu1gKctr72t9ygi5YKYMRbRT1Z8AqUGvGad34Nvhfvm3HQmkZxhvBNHbXpKeLJn5DFqkGtykv",
  "key24": "KpWuRLgYZz3iS9utQQsTp2TcjstRRMMD5wefYtKznganT1RKWpw3tfLcVKoRc9iEyfQVoHJFazcaA1oJ57vfxx6",
  "key25": "4DTfEUKfUv7QzDggaUDw7MkSLw5WeMQMKYWQa1Mr86UjJixf5r9j3nuf4QCRqYvRcZobLyfPxsduPHXuku9aD7cA",
  "key26": "5Z53SfPog4S4ofM6zcMy6y5Wf3vLy8eqJoAZDA3SXHM27z8Nw9UKeuQ9sJ2EG236PnnDF2gFM57WCzg7XRzbjhqB",
  "key27": "2jxiCQPjq6hgHtrUzE53VhoHKiGQghwWeXA3XH8btw7M5nxfF26xRAtWrJYZSzw8jprC5XeQBjo31hn3R2RPF2r9",
  "key28": "5emdjztJLu3tRTBMqW9mKEVehALTCFqKzBT1No8xBjCjeoD4oAGe6nhvdNwyhKncJ6HGfuTYqAmJYeVgumFR7YLU",
  "key29": "3mo8pniBjnz9JAuSjejBRdYLKbLopePRxpGWfQEAmCvbHZXt4NXjJQJ5KsigAC9HKC1RP5WDXEBhRaDcmufBZPKb",
  "key30": "5BmN19yNKxZN9pfxGFdrFY9qVGKGZ18KZ3vih6vAuiaiA9c6xBiAaPhbr2hTKcRVtkKHFcwTLtjvxRV8Ki9racnN",
  "key31": "RH79UYdcj6KoN9Av1f4wYTRWgwwKU6YbFrZPffqsnRKBWokCu4BWMrRgZgCXFSkWNS9nGDCFLb8mvwLJ3kiQ9FB",
  "key32": "4VmDjLYbeyjrcgVsFVB2KkeqqkPeBVmaSACyRoYX3AkBtnCsyLUk8RFxhsxhkGm21DUJ3gtR6JmoGhaNuJemiLiw",
  "key33": "d8E5vSbZsR2ykK4DBk5CkEHU9Wn4BLPfZuo6uy8tK6RATy6bxpbSfmbqeyuJ4CRwz9QMJkebCtMRNB8HL78q1Yu",
  "key34": "5ubZ8ED7DvSfbF9h2MkLnjjibyzaTccmMeEfDhZgkPjrLt5kMNKsph6YxpWUpFPH3XEALZc8VZk8NExE1Qv9SFSX",
  "key35": "53uhTmfEHNd695cTscFBqUzAvDeGMgJ5aBfCRp6UZR3Eu2bW8ayS6yypoiUmu7kWFjikBh5UXRFgwKwZnu1sHPMK",
  "key36": "2LbEPiUhZqA9sQCMjJ7T9bGumeTbxgV5ehis94BRecVk7gqEvHYAwi1KiVZiQmY1ZpdRUQKd533kE9n5DyfZUhhT"
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
