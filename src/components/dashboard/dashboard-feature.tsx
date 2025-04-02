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
    "28H18oJZuErWiKCH7etxJNxocw7werq2eesQm9wYSfVDYw1z8cDyVjX9isc34toQj4SS9iagic3NynVNS9KJPXJT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zwxrCUbgzQSH58hKnYyv6tbRpbo7n8G8jjYZeEDTTb1tYCz6e46mMUm1RrkbAntwYv9dpgUhyHKPpNytkGvUGLk",
  "key1": "36XKtaHfsUWwcPXmyo3nQ1UcHqtED8ZUPdXsrFBwL6eiHeC9RfGzHaw5n21Q7aHu4kQU8o2iKQChJcmW95yB7PKG",
  "key2": "5nt92dGsMTUgQCaebUqoLGTWWx5yMS2EPd7WpWkc9vhAxmbKoKAKs8Y3qhBCrDc6ruP1zKeatnn9qLutS3tGMtMy",
  "key3": "KxjmpyenWRUh5a4CrQefmDE5NBhHkjv2iH7Kyz63daX2gbrZrMBWHw6R8Ra7pb346aTBWjCYxcT5hFKDEvKySTP",
  "key4": "5JQ2iCsC4gt9fmjydeAwzBbkL23LY2AbHGGTYKrGaecoEUdYeMjtTVEvQcBBA5PfQ8Ghc4xpJ1TM4hbhVp6jsZ1b",
  "key5": "3oKS39W4NkNtA993s5tN6YiuHmCrzraf8mKezt2jDK1UXcEMKHi811sLhhCnBjnbXnLB9UAyCxo7nyRBhYyS8Qzy",
  "key6": "5KUKH6R18KKH8GjLRMrjkgWRVmNXCZ9zqybE2KLHr7tjdcBZpx4zJDF9LeptATch3dyRZVdVNXwhTPdt1JHCgcQv",
  "key7": "32rpCYqFKwvzVQe8XMdvCgJBsNk5suWhhvoMHfHk5tdqG33tBPp3VYHLrJew1QLosRSxoGpNyqR2yj5KxDDupieZ",
  "key8": "4BTymHAPpR4KeW6jkKekpZxrVyG9fGuPaEunrsW6PtKrAFDsu9czSBUXrV5mV1X5BXekESVVhy9xhY43LivKMoef",
  "key9": "3ju1gbM5KJR23aP6DkLfczpnnm6uSNZjsVXEwREFpS41u1bWYWnnEg77GcpsrPTE9XRFLNNAKjjHgu2rFkabJ6Tt",
  "key10": "Y2nbRfUge7c4kmdKUJ73UtgYJGonsWVDUq3GhXPxAZaSsNmMVVFAbxqdnydscH4rWY3hZPExC7PeLSNFNJGWftm",
  "key11": "6in7X1sD9RTZbmL2TyPyd3wNgHgfUHhgwimpBXkehbiZ6aDC3mQiKsakABo4jy7LVLiWKbwgCB4Udy3AqCFX4mc",
  "key12": "2FeGnotZd9hrtCda1zTnbNsKwFRtn9bcZ47Ps3UxHY98zXeDuu3ziPvERH74UiYDteQtBMKwxN9XtsqEDJUEMMPS",
  "key13": "4REG6qL49vAuowiojpEr3kVkVhpD2yWR8WepSpt6xXjam8o4JccjEXU5YN3ntVr5yjBHUKuZL6i1nDLXaTLtpq2e",
  "key14": "dBBkhSyfbZCZWu7YHyqhwD6inQBVgSupSPzjci6AUxvXDhNFH4yCA8rKZcof9dZ9Sbpd52mfo4WeCM4pg6uhv88",
  "key15": "59vFhgdbfkB1TE6jCc2m8owJznd4qoGoM8z4Dn3LuiYbEKSe23a87reXxcwv4DQXDfNTVST31SZAq9Rm1sD8dZdH",
  "key16": "23RMd2BPX9uDbGjnKMhZmzThFPdMVGymJMr9Ei4Jj23p9wSdouQum5EW84Np5hRucafRqmCQNmLRUVdsudpZUZgQ",
  "key17": "4N6KRAqcqA2qdy8Kv7r7hhuBmcMdKGX3TvZoWj3hqShw7xApeBVS9aqK3eYEAu6bLgYWWwuxnbNmpAHhC2oabRmz",
  "key18": "5juypvzJsrCby4VJmQji7ffpKcPnaKy5HdBBE42umTCrpGWYZo8ttBFS7nBngFe777k2E4evwi8Zx2p9xYia1xix",
  "key19": "burX5HLWt8wK7CCG2cRVtcmWS4LSQHFCKmrLfK4EfuyD6aysVG9BmPnPru5guiuG42PqiT44CofXXAL8iR5Z9HU",
  "key20": "2A14jybAbNA6RERzSdJvgAYBbER6ZayRvYTpjX3AvioH4PWZQvHcoz6qsgtXLYA4m8mRad5EQfo241Sa2ekSVoUE",
  "key21": "4gsMNjdgtQSaUAFvVsyh6akoZ9qAe93xAQnqCX6r2VjtDk51mRybTu8MPHESXuYscYEw2RXXhxZtcD66BqbHytpK",
  "key22": "EmwfFas5YTNjaYsYedRDenF73CVV2aNzcKJMJt2ENPLLrhWcboJELjEvZUoaw3xoJV5BkP1sbwwSFUn3PZ6fpbH",
  "key23": "3TpsgbayKzK9dab1RCNLSraqSGh5AjmWXLaicghMZf9Q3aFepaGv5ZvG8VmmYK6k6QmXGA9JKb63J7ym9KDQLB5Z",
  "key24": "z2HNwFpVZ4cgvSxb25t6a6GyrGyHuYBhe937zR1RRPhPWzfzrqfUxQt39b4i5Uw64mzRVSj5aM498sd91gaMUWc",
  "key25": "3y71Jnv1jA78YPYgMGaCP7TUNhdWKXMQpvbNW5WmRXxkuZQ8hYAEJou5ane12HZK1em1NBtmXeHZ8Ea3tMySVvww",
  "key26": "2FPCDToRtNsDeA5uaeqBqukq4AMinarXbMZWRoYCEnPLDaSd7hixf5mUrJnn4hktD35DVNtF89sR23NUnL86ovJL",
  "key27": "38wKqzAFfsKu5q2oYCnyyRAgLyqh5yZKSahxpkX6WHHLMoAuyW3HyBfzpaUSQUf3AZnuc7ivMWZyQGMGfdFDQNuz",
  "key28": "ug4zQeRNBMWSACiPjyGzLUYZ5rQSQDngdmECqxa6AouYR9g9LExHibSmdsEyWwQJzzNmoq44abobWqDavsGMP23",
  "key29": "5BNBogqTGCFK9AKnELBkCsqcNExvSW3h45k9Ly3VjvztZNJNRHUQ6fDiU75Tdfp6quxh4xAbHwAxSv2YNP11eJm7",
  "key30": "3g2zTp9CP4FA4e71Jdy18BZW3hWKE8pkwE369DfAxgfJMpPjRUQP3sHEHy1vdyKVc1mA6pd25mAoLaU8t6gbrKpD",
  "key31": "2kD9eDwmTF4cVqPiqMJ9s8wpayXxm7QqDtZAoBTjR2kT2ag3UpJjMEttVKMvkrTwuvJmJuVj6FkG2WE3xRW6DPxn",
  "key32": "3uhtBj5Kj5k2gc3Qte82ecGy7ZqPegKAARUKhiqq5APEzgLx3tKQSQw6yDeoF3ZtRfASz43GoZ767cEUbZ6zbPVK",
  "key33": "2DmL52TxQbNsFyKqPTi1DBtQqeaMGq1psFZa6yeHounFrvgaQU1nTFqUiGfRH64BVT9AQvMA8CDRwE58HXYDRNdK",
  "key34": "NVg5WrvnkuqxzELRwjhaXGiA1DjcL4JsZsDjRWjYcrooFSqftj2JsfgHbSYnhq9QPFdQsbNBPjxatZS8zKKZQRj",
  "key35": "i9tSQStTBv2ftArHncnHYYWta9pkKv2URKvrRnaKrQft68K4fAgM6uupRfdnFSLwPAP2sZHfnaNFeNBcRfivXDv",
  "key36": "2bPdyTZH8AZQyi1yV1GPEfrGeDBxdfjVqQgRGQcsV4FoPUbU4QfFFde3egbCX33vpymKteHAtzfKfn12bHgjtnWp",
  "key37": "2CWZZKMHYeKzfWatpaC2g8r4Gv6Fk3EqRVvxn6CsX1pAevvHPFqSNZJCSDPnnM5qp9e3SwfW5d68YVFVPTES7fuL",
  "key38": "5htf3uBEPgCwgJumgm15nsnvE5iT3w4fA7Bbqj1FPJHLCbgDtDDWFPB2Vf3Dti4t3sYPcNgsN7fJe9WNCtNRQVn1",
  "key39": "5LYRWk7To6T7qRjajTvYvSkwXS8BhrkrdRuFR8FQzTJZHLaSkcgyKXPpRCGpkucbHSXKiUQG94YyUqBo5yHVDnYp",
  "key40": "66ptJB2YPhMzZdbceDHJauP1DT4ayBJH5x6WENqnds8VnmvNuNEf9zTR4wN3qNjsBEDW2ezUYXhZWaq882qQop6N",
  "key41": "38Z3xs2RmobjFmpftEh64SrHbpJLSB8m2WXqQi5zxkHPeCN53Scc91eUZEsC1RNGPp6oUVwfKTTUAeu7paLNGuXS"
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
