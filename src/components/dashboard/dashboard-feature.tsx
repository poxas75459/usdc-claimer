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
    "4KmRu8YVkdsXss2n3eJowS3rZNE8V432Bhd4ZhYZqvFJCPYGSJvLRW4ESvhdhCgE6DZ8e6Z4Kv3wkW1kyQqBejtg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UAGT2oSRT5KP2FeBqSpVvxAUHDZ38G69Cwrfnf667J6Te7SeueUCpSBkU5jHRv2MD7F6aFagVVXxcc5PK4sphfg",
  "key1": "382puPdmV7QSfw5aafceWgWD6o9rx9dbrQw2WvkNj6zykoVXZF7Nr5KNy3KaUDvKgzfozjiKF83Wg261D2S92Yua",
  "key2": "29VdYRj7MATN3uHAEQ4jgsSKDoQnY672g25sXFWt5PoMfV1h7yCx5FHHh8sPthvRpNFq9wa7Hy49fsaZS2M4ayGL",
  "key3": "5e4q1mYG3sXgf3szUPm4KXqAWcjHt1p7mfJh7xodqo54bbEUwQfDDkRiDFtbEFKJ4UJYjNWvXcr7hEanFM2CsZii",
  "key4": "5NNd6aeaAFbqh9Ljy3c2wT54GkfDVuX1gjmJoHFcjbUpEVTJ5QDmN2GTsfUFYsjq3Yi4KVqZNsrgqe5iEAuh1XJ7",
  "key5": "RJLdgjhpFCYsZ5p2QBGA6rCmKSwMpeTnJkfewSnE3pQ4TWQJzAodh55MZ1xszayiZqaAc9CcspjYu7TMwPh1LX1",
  "key6": "3DrpMy3r4XtS6AtDJJWg9xgSDwkiztevqwAG9ac74TyDpE7VXqjkx2RUiee8Duuuk9u5ttA3pUBP1EpMcAgrxZ9w",
  "key7": "5xHd5K1bz2YUEm3cVmbeBxzg59iLfmS7QgyYr7E3X3A5TxdXe6nkz4DD4xR1maBBDbLb5wRpdYcBiin922swDnih",
  "key8": "qpu8AESTq3LoYdg7tFMQZ1QxCFSbpuMhn2Jfd4eYbkLg4Nc2sFb2dWEfUQJqyT1VeoVExa6tS3TWQziDehybxKs",
  "key9": "2rQaMTtWpdg4vjk57THdeqREB8UVpt92HQNk6zc7phEqe4t6jSDmpLbSEaMYM8oNNydtSfjLitRFwBnJr8uAsRj1",
  "key10": "3LHStrz6ZNBMnFUt3Gqn7g3q4bnKNRg1HfNY2ikgN6EF5caJEgWbQaPXJQxnUHvxRYfE1dweqgRTvHTQ5wRVBGri",
  "key11": "2m7BTUUhpTKaE5mQBnAKm5U2jMNFVxWAyMTRJyT6VukBuEYjuYJeyauuASDYy9oAohBXyU2TNw6j7R9YeFCEbbey",
  "key12": "3ozYDNCG4SRn5qiBaups38prnr5y3Rpa6MGcfi4Tanc4vW2Y5hTbkLGFA96Pb463ETToD9UaCE6rabow2APHsDmb",
  "key13": "4LPwEZj7VEmfH3xueCqBZsEWDFhb9dYSgPTUqCrMfBgWzttpDzxD6T7S3qH6YJ27WMksu16VLMVFavEBznCcBcDx",
  "key14": "2aRBGMLzHaSWA4a41EyTposVGUCy8e2jb5Hdkeks7P65S7qppJjrqcVjnVbfbKPTm17SZcXj2hkdHiM9KQ5W9VWT",
  "key15": "22EQ3RBWqHZ2WHGtnwmr5MCAtscQ8UcaKtAB2nrYp3eDT5G9xDpnFYidPKJjymEbeWBjLdunkvehoEXFKBAYQdbc",
  "key16": "5e8rC3zsyrT8ZJVqBVxKA8RCqrW6R4DWbUKnpSBXThHdxcLoVta5AjYSmjEe7XeKs4qSyXwEWHqfUb2nZkXamKLn",
  "key17": "NDvWUE3Lrgi1LrU4a2NsrXyJe8J5DVejx6UgFViPn2eFQtP52jSGj9VqwVGThMWSeG4V7gToZzf2Xgc9ag6q7fQ",
  "key18": "F91Yqz4bvBysob43kBBFQrzxF6NVKvhxzZh3ERnquRYWy483J4aHmMQDNocq8MgGDhNY7b37EaAzAj8bsgmUZ9z",
  "key19": "i41SUjCQk9qWExD9D9GiHJd69VVSDvKHSPYNgxbfY634zAr3mn3bVHwBRf7fL8JJHtPmCN3TCVXBcTvT8PaAKKf",
  "key20": "58y8y1Ve4XqL3b1d9hS698zHCJwHnNVNqVPZbwbuuh6Jio3aFxp8iKRWA4A5kazUppmrsqJAv9V9R2XcrHMuuiVu",
  "key21": "31oKxJbWvety4qjGK4SaB5KHPJg2PaJM6pTwG5RGyb5pjq4XGGhDqivwfxuRqTfoJdhQBzvx5UKAueGGeEeYMo1U",
  "key22": "3DGnKSmBbMJyUzKBNXyuJGoLgyxheCysR1JwXBMaDGYdYWBLX9NjCqAuYY8SgtS5t9p7JeVKfjNcZEhtMDAbqz7r",
  "key23": "5MgyStTPEraM5Yv8KWygJuYitgBnZbkd2s5HhgHiAKPfUsNLUHRZY5af7hZuuJZSTYjNcNvsusMSUf8akBvLxzYB",
  "key24": "4XMP6hmtVuuApKbJxCrewwPMZFCbBWxhG6VSHSr8YFRvwPYtV6je1Sum8seFfcM816XmtRXeDkKvtLMZH5rkDm9T",
  "key25": "3ZZfR9dLzVtpqnzoepDy1EkRww42aRqKUiNKhVixTFmCdC4CF75ExGUd3A43sKa7fTPifhoPkwd5XmeXPn593ESj",
  "key26": "2BmNBEYZksaQujMR6VkvQbJKTPWitfaeTzmWhicWFkCg6S6nqszgJBwwT1XnoKRYfTRFXUu2UetrDCf6eqXWasg1",
  "key27": "3NNx3X4grUh7wnxMJZega7inBWUyDduGRv3LLG6VLkGN4PqyrTfnf4b1QHZ5kLPLUJR8tD51FUSVB4vX9dVTc8iG",
  "key28": "64CX9CKWQBexWnZjTXDmLRcdjaqFoE3RmQqpmnUVg61HVazLjLqiqXx7jqp7a6AZpeXfkftDchAumqXLUNTqwVWZ",
  "key29": "53Mx4nDvaFPdhXxSXDf3Zuxvyz43VicddDZ2LzqBk1mLkLZJxN42hjGPSVp48SNzuUpGynBRaswqMh1oHJMT7Lru",
  "key30": "2bZpz63nKYYBRi5b43Xgcc5q9dumxrdDByUiBFne6xfMmtug2XE1X6EV9m6fY2w47XUy25GvBLTFevwfd4ciMxYN",
  "key31": "3m2XfaTy5tfCYqAr8MmcNr2U4Toe31sV17kjWXozs5tMo2XQTodDUppVpNPLkaHsg7vv53cnL6ngeZ8AAo4zKxCR",
  "key32": "5bcnDG1Q7W1bZAy6397HFR3U2D22z9BkTAtGe73eNUrBijrZnanuQfJm9GnNJZkBDaceSEGcYa4CwwWTmLRrqakR",
  "key33": "4ix9yo2amcrDdP6U8pLewEkXyTrSrL13RVX3mSungnCeT75aPsw6ePLL61Zca8Tsup1WsGppzHHbak94UrsfJi7G",
  "key34": "5FvZWPJFjpKrzfC3sqSSF2a5xdTVw5iGqRuzVHuCBsiJcezMymtKBQKvD21zsS8LtfETzoN4ghfZhKxxE3rzkHc4",
  "key35": "ma9EMupdvTCpWafjmxE6QQrumkoYpDsEgo7hFTwAHwtEfL5Vk22k7RzzC3o4KFG1Vue5nYWouLaYbPEMKYQGTjh",
  "key36": "2v1ExTb7ZT8cVorh64CstZVwLEmcDCfAG4D7PSgVnbmjzkqvW1psKzbfyi9sCmrgpkRnetcdifrchTjm6rZtpcgP",
  "key37": "5faZcQ9LEdLb1beHodDaRxwQbYpsk1gYEFYkwXR8dRRo89zg4dCrpuF2PRx5xFNZUazUpe5re27STqXdCafcqenh",
  "key38": "4HcVmnA17E1AHaAEHTiEMjDn2pTALyL3SFiQn62kFNB89eEoSjnWzgyJk9QffT9MP4398H4koMrECzJWU1mp3BZm",
  "key39": "4DJ958fg4h1rdGw6iJ5eBMfdQkjSyjHd83wXi2F6zHZUGTSbqhZvoQucSCVZWYsgD6FWfEuSinyKKL2Pu19zFgKn",
  "key40": "2x7wUZPpCr2KA4AuuFQsVxUZUbykhKNAZPBNx5pV5GZjvuRAgcAY1AK8ZZ4rfU1iKJ1arzzV8ornNUqyDeMcESxN",
  "key41": "4MX2bTEdsdzzcc5dJ5GapDLPSG2jL1DpCVZnUqj7keH8T1tvBLxQqvEKRDDraUYgW7N5saEMQVHiB8WNgzTVDuPa",
  "key42": "3c7Zdg7T4TwzgpbxpWM8DNnx84uLbnCihmPjsHaypzZWWMK2KwWuMcmG2kZY7Ycc92mFSQdcwGEJDeAHdNZ24XNy",
  "key43": "3Hm4vVsBvhRSKgZVKANHX8oGwVRjfeMTAiKKz7KpLRzWAzfmgBhVKQo1q4xmbQ4sLuYuYZGH6Wc24S5yQLnRuBzk",
  "key44": "5qUJkNL8fPGkQfWftEPaZfbC3TcJEr7eK4ZHURQVJuK5BvKBi7Cn5MXJJ8VT85nubXLhLP9mcckfv7A6XKEwi6kW",
  "key45": "atqti7SKEN85XD2QxiBm4wsyz42RQa4RKQN6Q7wFevjCjg263WScThsfpThLzb3RfFddfL2utWUfGezvcnLH2Cc",
  "key46": "4HypzfBynG23npMiZsbo96ukorh6onfMEtGjWdpkWxc72ZmQ7rZvGENRMo5cc6aoeuzf7rXxaff426f1xByZsxVc",
  "key47": "2HjWT3WxED1EHJhWncHtgLkQWWACeFqgB7HfrxDoFLGWUwTr2vZEiASkCxBcRcsJxUKwioVPRvNgLc2BK17vLAdv"
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
