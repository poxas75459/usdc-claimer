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
    "3tpYwbctg5Pw1i2KMtRhpppwjuey9grDFtmZgyqTMzX1iQmjeuH5xJV1EJtNbUfeQ8cW4YiLtCpnZUdYYNQVAKf6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TkKwmfHEBLfwZ16EiNTU4vH3fED1tmJWQgbHTGCe8tByDP8o5jRUc7hJAXPkwV6nyukNuccYVG6svanBghLAwY1",
  "key1": "3tGrRUmrxUf1MWqSLSJHmZUCjbnmDYpp8Y8keYLD5venu6L6daotkMxSuwoNpG3sx9NDdzLL3G2LJBdYsagXZZ5L",
  "key2": "47fNdTFCn3M8s5yARUqXT3YEhsdXNjdYH1NZA7sSQ9pEre2HXWh4o65JZYDticV2JgCQUpsHzWup9PkdYuugjuyV",
  "key3": "4EXVKdojvcYbTxr3v7LKTY9sP3RAGTPkr172DFKyE5oAXZ1XTv15p5kLwtM84kAwMUKuFmMfbCXSWuTwsX3nsm5P",
  "key4": "4Zk8wUiyTGevr7vxsd42G82uAfvtgwxNMbUMLULsWgz5bXJq33st1ubhj1sT2A6QouTxuHmZkGhTkQpW5sEYg1mo",
  "key5": "2orM5VmtHcEjpTscJgkYXNns9P3Q97m6WdY2snYW7WoxdWqxWk71Ejb9vJWF47VtzjR8JnrojhHQ9zYbppYYMERz",
  "key6": "3ucYYUg2zAgny28g1sutyKZyJ7nCsRokTLsMBfrQhtPdm2Yb6QCDobdXFzm6bzmQ7JTZzLPz8CEJTyR1Yfexeub",
  "key7": "3YyW5bCJfJ256LHRtCt2osB8xYBndSAMGfx9xYZx5CvtmAYtH4B1hcmZTjFWxZTiYNxHGdx1LqhVoa9taMK15DWB",
  "key8": "ysMLxKkdDaLNabJM11Bk1tWWHy1FUGobAqm7V63BSZ3g7B1v3EQMVZGu59uiVGFTEqUbKvt9GDk5YJbuwokukHS",
  "key9": "4YrBKpi9WQXzJ56kcwqDsAmUbYafKHU4RjwVDSJgh8JZzy2L7c7tE572eJLaFTZ83eDyiH83oemxV5UZjLFg7cKC",
  "key10": "4bUPdyz6EsrcBHJZXZHdnbAZnvdMBVvLA5bQRXSTkn5xeSTzoFf1Ddejz8X5t4129btWo3HvpvTw2H3xAdzj3XT",
  "key11": "8GvhWQpvcdT8L41Bxs3r4EtSRguV53eHnkY3ZPpoYJ1VXZiUx72euwiSyNTaAHmWPDPeJy3Umg3476dngf5aA8b",
  "key12": "5NJm87rqkcvsGMVD3Sd6mmXkDsXD5DZdVewgwJxpCAQSUqrvGoKxPGfKjqmzAbM2NRxtgQhJ9cDwB1LpgWYZy7wj",
  "key13": "orsHGD5Jhk9795LKBMBJ68XvnR8tHS5g4kaDp124skhFNbB4MCN2enEXiEbBU23eEWc5JRMGEcENRjB7H8b5zkp",
  "key14": "5v8NgxWxpeCJpr8c8kUfzSbUXo6gJ2MdzJ462MW2WhLf79PiaNpvFGRpaEriK6zjQ2orfkxDixLS5kDtgjYfihrd",
  "key15": "28FF99cU1kYuDB7cXvFZR7qfgg4zZ98HrG8o6eEt9dqC5vrUMZBEy2uZv2mJ8pic6nu2vE7cufYAc8UsL4YEw6sy",
  "key16": "Sg7HM8ZLCCtQTs8HkL4vBGVHQo9uXv6MSWUBZ6ijpahKDMZ2ZGQZ9TQN6xNxebC2AYGZZSwLSgsAs68QcxD4AdG",
  "key17": "5R1gTRufssGah8gEQ6NGD8Kf4Czh745DBrGNxsM3Vwe5tc7kvPfAaNCpZCb29iYs4HerDuoBVUSPAw376DzhBGWh",
  "key18": "4fjBZGfZEWNaqzRNXL6gFZDHZH7EsWwwYCBCoA6GmKbj8KQpy6hECaGm6XkpaCsMbYYcMgQt5euo2wzEhkaoj2tc",
  "key19": "5xVC412ededBVTWmagPPY5bGxp9K9SGGDbdGqfkvS1okxymZhFy7LuvtDP85Bwyf2nCtWHdr7w3BZbgQwL5CrG7F",
  "key20": "2AFCrvCLqLoD8ho5bbrgvGmZi9aCRcw7UzYAHSi2urhvgpYdEkXcHV2DdRvd1UggfXmaPqmJqEUycZGwGHQTGWXU",
  "key21": "4xtha4J7T8WBMSpia3EYghkTQUwYiHoPEja8XDXDW9WcVqKtqE2H7yYfBaqZfk4sz5z8uurTZ3vXCtXmkcnkFtXA",
  "key22": "3Vw1tiTi487b9gv521Z5vkU1kXAtCJf4Xwxsujzpeun9dyR18P2VHkGGpbpTUvGuVgTpN8akqEJ286j9dSsBs5ui",
  "key23": "4bcMmyfsS9CK5x3pF7nwwfaAjiJ4Nhw8FoyxCAG5KXuvRWZLkC4rdqHVfgJvzFSK3ZmHHSss9WczhuGkYZk2FrXq",
  "key24": "2zoR8eL1cvQcY3JNTWBqB4wUwh1JQFToGhApiZMgerhgJLckKc4NUFFiSUA52wqzWZnnVv529ngtkEcno2cRp17Y",
  "key25": "3ExSi3uhsvR4DEPwKTgsjJarAcZ6mCKpdSuYprGVzJceWULjCsUu8bRqBd8JuiE3WSXMaYnVQLT59mFR9Nj8hcmA",
  "key26": "4hERksyfftxe5AUdcK7xAdfFvEH1m8ST8cMbp7ekB5RxSDUKHpjQTx826512MZEZbyJgNHove7JrDcuJhCSxMwnA",
  "key27": "3kY2zdbfig9YrxESHSxw1XbwmkjeN4FUjZ1NiLDTabptHS79jKerMnAH5NvRf2s5BeYk2XJquBjXz7WoJKg5UEkq",
  "key28": "4aDYkP4XisxzZoKrDDTHgQG3PJb46qUwNhF3m8jsi6RmX1qB3EqFMMSN1K5xrBjUfi9V2BTCabp89u19fvh4nScQ",
  "key29": "129XpTVjwPaqat1VTdv3wc58JLR3Kj6G99uDkyFNE9QD67AHyNVGVyjrY9SrfhyzSRJupp779VyQjFKNQGz85pYo",
  "key30": "3eXzTBGmkt19ddeTQ2c1ZujzxAbTtLecjZBtFvgSwFeuSPk3C8b9zWx5PwrGRUfN9diLxu31F7WubzsZJECj5D73",
  "key31": "8KzgnmR3TWc86SjJVKaLfnTgQBg9jUGoUU5ppZbbFKJnRJQbPfp6br3x4SdDBdJ1SkkpqEY7cEqBmF6bWtCyPMh",
  "key32": "w3mozRs2LTQF5Dh332ZDir71bBoHVcsGNiTaM8YCeWMaHsspjJJaUmD8KESoXUCVUJo7kCgSko1uakPLWu7HJ1W",
  "key33": "3KZBX6q1SfapdRepc4yYNagaLu8tNc33YqcwhgGj4N17wnxrBCUS912Kn8PNfDehFMaNVYzUEGmGrXPZC4fYdQDJ",
  "key34": "eJ7taLYGUPiKBg3xNTMU5Q5PgnhQPh81EcYoT53gCjr5dNXPek7gM9E3B3QLPW6oQRAndsSDm8Cc4tJf1S3wzKF",
  "key35": "2VT1CH6SFPfD4XmjyZMZdvSVJpLsKKRbESFoFfU5PgNSB4jjv2Nuv7Zan7wD4jFrPtjrCgxLCo1jeF1DkJpRAgy9",
  "key36": "4EHCUniHGUyjfwGZiymMPfwthVxR2EBnNF1mZN9bjsH5H7rbhNqQbg4fWydZYmh3HYGQB6oHjEnXNcJS3jL4vAwH",
  "key37": "KHpW68MBh4dqMckNMNW6HaKyX8mQTbkgBwLDDWznijW7Zt8FnTbPZoaJVzuGegLTh6xkk2b6q3vVMsyiq4bYmBP",
  "key38": "BbHwo5XV3c2ajKszJoiQvaVANKvDH37nD2w8yfrHH3f2i5VkWhwJjCFJTy83yi43fxkfZofJSPK6X1kYMcpU9ch",
  "key39": "2DfeKC75kshzW9zuTguKNZvhxVbY2P8ytgAWhJu8RinC8e9DL8UGbG6novUjm2HJF57jAck1V9wx4Txj8969aTbx",
  "key40": "513tJcmfqNegbwPkaLUZuZsJY9Tus5M1cHiVvdEqnVMo3e34wYQgXjFM96w8boaXtwseewG21RGX1GY2TS2dKxdf",
  "key41": "2uK8Rw5gwYTatpgkEaXoZGG7AViHWJd85c5o2hmamBjLk8drsVJqn7gWpGUcSNoDX97ydUGUZcuq8hGkvX7GZHGb",
  "key42": "y61NHxAMuVDwdo2fcgmvinmtDU44eznonykcpaFpaW6dwXVcjtsPs79DcaSzs8JYwZRtp7cPqcsR5picXdxzAh4",
  "key43": "5XH5rgHeq7zkrzdExByBfdghy8mzb5kf1w6s8VLgNuzoukkZ4jvRJ9bZb99KfbgXGL1VLYaVzfkHVXuzRzAePrAE",
  "key44": "4eUWt1KcmFXbYXfkDHfjL2Yw4cV8qN4rK333xikb2FmGM3rRMTE2XD7gatxw2JaJBamkN7ztdGErFk5r8yh1PJZw",
  "key45": "4Ww243x4ErkSu72jn6EHzZUm242Wpefsvab6LPCcG4MqFMCdXZ83241Ntn8X1M9T7iLMTncZ1UV8c5D85NWe9MdB",
  "key46": "4YcGkmTwS3xphpdZV7BnwmDcSettJQyG8TmXfUW8wB9AjwMW3AQeY3bAFBV8nmnXz32NRJjuurfkycR4PAywi6S5",
  "key47": "bEyrBoeiwWyo3SVpgU6JPGJeScxLgh7a2WMm2CzjtEFsgr88ddjNUpTGSa9aMGgAhR6JRxGCNhS8QiBQ25938PZ"
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
