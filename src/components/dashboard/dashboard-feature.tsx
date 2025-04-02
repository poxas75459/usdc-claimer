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
    "cdWmfD7z4irUeHuY2sMnA1ZCY38dHrXa3wwPe59AwxcbwnyFnU7fuxA8p3iwPifouXF85w2gGsNo3XtmSF7rpoG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jJks4pqNNNPGUhkRM4ftavoQW4fV2XgEVambb4C8M6Zx9ze93PJTSydDThPeVWZPZDsTFzda12jGY9hEvoxRkiW",
  "key1": "EbumD1WBYRv3uZ4cfR5Jp9jE4Zdy7xDiemvPZ7BNjaPm84N1xFDkju9DsUcXbQuFK7KTuSm3NZgYGezfpzDzVjx",
  "key2": "4U19rJfaYTUZVZjV25MiNKPyPNMRukffzJ3Up2NT2G9ELxNr8aLKaHVHVm24a3xSkB3eBKdQ3dkXJFufpgSJWbeK",
  "key3": "2xfz2vSuZSaxt7uAPx7iFQgqD2iRXEHgS6ETF9sCwwZXnRA7ubXnz3ZsxCbZndQyqRbWpKiB6kSFCXRk9v6ubXxD",
  "key4": "41tniewdYTCYdYKwWPLYEDpid2KGhfUVFx8AKQUAHAT7PWUfztDbk4cWg66tzkjTTN7eDn1wr2KWjW3icuhVzVxQ",
  "key5": "4KeTJe1g4GrCWZjejbW9hyEmRA1Wd68kApefJxLZAkh33SZC9U89ES5LUwUB4k5eu1dg453hASApGqP3hGt8dsUM",
  "key6": "3XNP35PsjNYTPAeEPcWkvatMRXcVSoqe2M1EGxcC9EA2RAoyNjhX7hM3LAwp85sC6BSEJ7jRyJ3Carf4nLXDthUx",
  "key7": "DcjY8hR5LckLazq239F8g7t1uTJoqbNkqGU1qQwARmq9SCnDkAc5Vim5Xxfnc4NQkYQ9og1KgjuDnHpJqLTRZHW",
  "key8": "5dGmRHvN9npf5hbnxQt96FBnzGiB7mGFsYijjXN5QpSHYY5puZhRTUfWuhgq4Sm92afs7LyPFFgrRnNRRBrE3Zdh",
  "key9": "3sDquBYH7ftvZNqBNgr2zKs4SrWsuSWpUi2Lrf6kDJwa6j1Xx4y1ZWh4rn6Z5vMmFrj9fMAzgKSQYduNWDFDN4V6",
  "key10": "4SFwY4BYaipbebmdCr4e9vU4YneK8RBKBYhe3vVVNSFV9F9oGRUWkjw4qsS6XLZMNPgMCFjWMZyCK1DProTTRkCP",
  "key11": "5xoqNt1itBc1QRiSVYqvidWAoAxor1V4HqMhM8M5QuiXeRGDmoAR3sP3CBpSgFXqJyUhwFcuzqSCjAYbM5FC39aN",
  "key12": "49Mw7vew6dAYCpnzcMmGevTMqh6fMP5tf9no8xT65QeFpKrLrecjevLyCmhYEgFmJE7bBbeprqSCJC6ijj9E992u",
  "key13": "2AzMNQqS1NoUKn5FwiXMG2wDR8PXkra3M4FDepoyvPfcXy3x6W883uqzvBwxhkqDkbAqiuMwEZDPuZrGZ2h26Myg",
  "key14": "2Bnb21iD79rJTpNo81M7KdX8UsuKF6N7Sje6uC6JXSjfEKDMXDyGkpJrb2ia2xosm1AXBEXwXuq6RPX82Doyyqic",
  "key15": "LX4jdVKhhKuo3VS3VbiUGrwEoTxicAhUXGkZrAc5pMJyKXG8wEaixso7hGdUUaUHVLbfLaZipED5NJVfHq6ftQo",
  "key16": "3fzeMv9BHPMYnwoLBn2P2jCDEfBMX23Pev6kNeVyF1H3zf1tb1j57K5ukMhtMxsXVP92yV8yoyhbCeagzktLJQTd",
  "key17": "gJfXBy8Yy7MXfzWHtKRd2U4XV43NgAjxduBW1mk9u1Es7SSSfZLGDbubymge1gGdH8y7UVKCgAehNrCTn4pHMEV",
  "key18": "596ztGBRazC9bDQomuPhsLRh1TgdTQ5d6nfeZXgQEeJUgg8YruvxmtSFMjqpoCgmBXbp6k8JrKGZFq9YB1HbjUFp",
  "key19": "5bD71mKiVs6sJU2416gLkcfTXqZGr3buJ1HNaPVWmNeUL9LU1t4tb1PSuKoNi5cZXeeqtzepr84QJJ2PMdoBso94",
  "key20": "5MtrboEDViWHLrzfbdVaJfmdyBhbeBhgQYnYXWbSqbUXC6G8NuNqHSmWFEtF4tx3RrXnG2RYEjEPirvuFtf3px6x",
  "key21": "48kxp9SLgyJvY8FU8czDPmD32CAdmgwKc3pQyQ1muG2q2KiChdzfwZtgWgQWPWVheYrUNqzcMzoG3oABf3nTm49w",
  "key22": "5XmBmCXgGCjnpUmkfoQEGFBki7nfqcLd6PC4NS9Sb99VFFxbrcX56TnWSQfRp9qXuWNz6q4GftriNXpyekNjpy7f",
  "key23": "58zbBeWCP4ZxZWWN8PYBhqm3LLBeNpqfDby6h5MH9RumwzDdaFpmXcUrkzZo2iTHTe3Rghc4KLcE3aZ7rC1ppe2S",
  "key24": "2xGSgVyDArQA9r54yRJU6KUMN9sMGCZN6ztKjEUB87aSb9Tvrh2pmw8NXXAtQSna7LY7cxn2J8pUy1kqWathnL1Q",
  "key25": "4nNfck2Upizdu7fnVhUGTFbap5mRDRtNEvKGdHNSaeLgvwkyaCzn1iqMANuBCnMH72SBZQ1YRwNn58Wj6m8c6kuV",
  "key26": "3ZKbvawb4kfpwVYnPkoDr6UNTvMFd8pGqqr4VGeAUHT38EPUhVWSvfoWi9Qg3dWKszSyUgX6tj8wht25wpVyeZdM",
  "key27": "2Yjr2zyhci8AcnkZuQJQSv9RWSfbZ881qMuwXKM1gja8Dnjh6aZc768YvKHdCWrP2trd6igp6xoMddDo2XMFRGKw",
  "key28": "2hqpuV9Z2c8ezACpcP3XpwCpaBTipi28dUdUijDMMfgPzWsXFzRnCWjsyLepk8VHk1tcKGxRmAdPBPh9PYQs7cND",
  "key29": "4deYeHK59X4HchheccKkXhJeRVZ3Nd23wZAr9xoF85bk4N5EbryCXRUrbDTJGhF3pxUqPRiVH2xL7AicZPPnHtmh",
  "key30": "5SHfEBc9nYaq9wkmx9eWHom3DBWFowdQsz5ftEFUayLet3YRpmbvQknKJDgfMwuRyWYVk114ezmEWabSNj2k5sSg",
  "key31": "2HMkvcrTSSg7Q92i9e4cacfagtt3gHM5KBQfhyJqScYmxRHBLQTjpRiWHQ8FQ8wLNNhhzrVYCTKKJXsg6zrVcgvy",
  "key32": "4e4f5k5tKdUrFKyr9VLjLBnPxuAKHwdi3dwBuimWNbX9CL5rJMGqEZquBUHxDEivuBrgzUXRoANURG6jLrkEoTz2",
  "key33": "y1BRkNbcmNzGzDdbwBgUNxfyMc3PHpYk111SEqaoZ6JFe6HZyviSbw7PMWcQEcP1dRuh5DhjsEVz79S9NmWVcHA",
  "key34": "4ToVtuYdPVcWKzZqz9f1gMkd72FyeNx2aDiV5JM7oC2gWisqsTyqtyJF6QbnbnkvwCxvnMxKGphmirQuzqpmhYrm",
  "key35": "5Qtrowu6YoET8EGRwiTCtvEChJRgrLqs8hmPqDwiYuJAXk5Qmtdz1GF3JJzsijg9rRgnB6R7fRWyoTWG5ThxK4oo",
  "key36": "5RZuRssVfAjEmF53CmLT7GLYtizZ7GAhuD6ha6Dey23d67CCAnPqTadmi9oWRW5r94YfcZTkFDk7KJzuxeu7dMCF",
  "key37": "5ry3nxYoXngdum9Kmbg6t48m1BFEAToK3fEwsMn3wP5jGbhtCGFPGDTeYae9F2SU47Lqn93MoF6oD3PxWXmTB5ja",
  "key38": "5wuzsAPkv1Gz5Q8ZHzLEPZa3MJV8C7c2qDF1BxtCRW6iJPm8JaBLN1FVx6TaeRGMECPYaNyLozXiTapFtMUova2f",
  "key39": "45mjZgdvkvwZEn1NNJfacq3BJs8BQ2gq8esUR551k8nQHqDTVoiazpAKBhEEjjHYNZJuvAFupfZKU3MxYWToRqae",
  "key40": "43MjV3THLr6bjcn7a4J3E2MPBqQdA16CQkwJkjt8GFk1N8v8xHqFdYMHwCDzEUUqiBxxM8DJfdf1Qiq3XvCsL16n",
  "key41": "5Hx9ky8GbGA3axgDpiDRti61pstfhacufdVGtwEpPZRJ6P8EztEWtocKgoBudTNbXRPhErQo2ktXi766dL9jkgba",
  "key42": "25DkxwSaR6jUDJcMnpMGy5hYbTKauk4RTwkXXuWteMXqUAo9cHapGZSjy41pmKYgGfT2zBuAJxFyLQXTTsVa8eZS"
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
