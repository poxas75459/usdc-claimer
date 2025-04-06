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
    "jyWzDeRrDqvNqH2xPYDVP9rjRRy4b4voAQyYFyjqURKdAE3jnYuXVt5cmLUSf4ZAc1HmsF5o4M9BEwxa2ikh7qr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uZRr66Py8bJZzvfvzwCHRt83WLCE4SqpH4iAqjAMMzmWQK4kPpQk1sa6FMXbU7VxS6YYGcA2gU8byNJYseyLEw7",
  "key1": "4XYRYT8LFpDmGTcgzEvVo1HR9cB6wT1m5wBuYS7tja1Qxbh1g5GrEabAW18r4uuCokNyHSAfq2JBK1T9G7uKtiKD",
  "key2": "4vPj2vQAxNbr3wZWui3UeFejHArsQe1i4h4D81fXJNgZi8Wnf6tjzvauPNpPNBRmBJaCHXXv2Jx6VVvJ3xNDUG4M",
  "key3": "qUcm9womD7xAKmaw928QV35aNysem31dBLGgcrQFy7xtgAmDM9RpQxmizY9zNV9Gomhzc9sSdGoV1bhiFyjmRLy",
  "key4": "67JWswwXTryvqU1PPtcrnhT8mLTWaN8b2ExGL72pNs2LRCBFK8uRpE6grcW7uTGC7PQn6jHaeEtWYFmUJDFYpdfc",
  "key5": "57p68gXgQAPCsVeM6k1fTyU75ZAJZaem7k6ACPKFtS58pGZhTSAer4uS6CikYsTF65eiuoB76wzHBzBgdrHyAF8",
  "key6": "3sA7CWWbz3xveT6AJFcNjehny4xvW5nvvcpabn7iudmY5J9xToXTYzGPgJ34cgqYnKP9d6JZYTt6bjiK9Mtj7tf4",
  "key7": "2FZPfPReKyVKYXJchCS9cfa8ttzaUH4Qha7Htf2VXA689SqTDyDd2KRjkQTCHPZZpjXMsQ9aGWeLvtFNKF3wkTQR",
  "key8": "3TXa2wKr2TDz3SKA6tyK2Boii7okP1q4xDxKqxmP75Mp3kWGnrosyh33fkBN2PJzxpyGNQzpyht56WuC96car4JG",
  "key9": "5v1pC8rTLeCFAcxvvkitRgvUxk8n2qb5AjLXnx6E7qXU5Sa348Ug9SARVkEnivFMTdppE81ucY7wbCa7oDYjTkb2",
  "key10": "678wB2w68RguoBsUZrMBcVEVpoDoPe9AK3HbbQrvz57PgLxAmT9b1LU9vU1PH7wfae9DEmAMUnrbmTrWDSztQd6S",
  "key11": "4tyKrxNVEHP8PCHcumXCp5DzicyR6uBtTrPUG7ebdmNzgsUjuesjJaFf62dvJVuLCGzx1zJVYW55w3dxkLE7UpRQ",
  "key12": "65rVLL9dARbrkrM44FY1u6hi9qn5QeYTfXxirpxsQJbWDg9Ty7Jv9P4Q5SHXVRJfHsaJR7M5mmPi5vzoNqTn8vUP",
  "key13": "w5p4TTGyG8ihYJugJwhHQafGBzGbHs3FkUU6fuAh9BZGg1TgVkiFbdb5hTTn6XHgNfhHGBdoyxjPGGwkSTbhHnf",
  "key14": "B6JGTrUe2S1o55Z4tgEfyPo1822NnnJJx8zLvzZAKRpA3xes2yp8M29xaSFdzQom9oahq8U4Tq7RioZv64UKVQt",
  "key15": "37TGeKntS6syTj7Viae7d7gq5AUNZWr2TY2CNAoL4fRYR3Mq16EqQn8ALvzv13DaroypZ5gjFKnogaN8WBvxRghm",
  "key16": "2TqAwpRE6r7k4WSXTTjNXUBysDzvKnGPV4RbtUhZdLUvEfSJkSrWB7bgpcWRyxsfFYd35dqHANQcXGRMjBAgc7LJ",
  "key17": "5Cz7d8WXBgVshuWujjijdKb3GvvGNWYu2kyz6cNcBg2oNTiPVN9wcRbfurYbytAy2Bx7vSULVTKaDicM6XeApiyb",
  "key18": "2GJtUMoLe4f1zLBjJqCVNqf7dSb36qEsB7m8km5qgSuwLruqGRjucpiZDzLD5d25szTgMQc8gwEdRExJcq8Hf3Nd",
  "key19": "4m41RrG8VXJ99mRYSVNxcMWH7s5F87djY81iLaaBVjZEsEdqA7TaqvyBzPWzSQ3oXypFh7AGnd3EKDnHr9hU5y2",
  "key20": "4LGTZcWRRjtTc1eKVWT93YKskSh6X6bmEoNuH4tLfjiefLYyEUicdMPmpXPkU4mGuXhk447zpZJNNg4BAkcV1FwA",
  "key21": "aU69WzS2TUPhv3KU9QEJ6Uv5UYAP8gKCNkj9SMtG5uZQzfyiJZuKf4fiRh8XnRKpBeaNgwiwcArBDyzv1K2UMW8",
  "key22": "2WWdPp74u6MwL17mdJcyx92FvLAt4He9qb4AV5wm4nBeyBECKq6n5bhNUC5mySKSSWBZih9f5wN1aZyU4jwFczzK",
  "key23": "3JP8kkZdRQZMWWjk65xYbKLcAdzAB5FhRQRreAydByxh5qRmS7Z5XqpQ97sU3ZNHH32HKKJFmmRHxXzsF3Ws1csk",
  "key24": "2fV3DeuN7tMtv3jtQmgwLiZtAH6R4xcnyTMcK6fxJJPEuHekPR42Frv4Ui1REgUYYj1Ue4KsoMZomzu9i1b6JkcM",
  "key25": "2smwJneGPEfi5vK1HNHEZecuJtJWidppKsxhDMVo4JuodGEfebPLiugVfCrCyw5nTbGUUe2RRFuDtd5fsygaDt8V",
  "key26": "4vefiRNMpRBt1v9ZjR3CcJcMJZzNcp2Loa8ekL31wUcm8QrkAb8At2hYyd71xLTh4uWbUxZzabMFX4h2mQAErbqT",
  "key27": "2GgrRS4XstsTTqXbAwgimNpweuNJ6pmL8Giw17J5fR6nZRLRVQhWGmWsD4pNW3CmKU5dmPP5nvgqcVB161qLPv4z",
  "key28": "rUivDavMZX8WcZuuQyyKegBHadDeZDhs6nASW9uuDxhJjP2ByMjr3eGyVkvUWhrsyhT4FJAf3yC15dTpzvGFFa4",
  "key29": "8WsYaLxKn75hynLwy2Kb6VS6rKsyKs53n1TXu3Gs2LeWEyEG1yQEMcoPrPrG3eRGcuErz9dyqTVpWsutJSZKkJn",
  "key30": "5DD7J9RJVV4FBAPFPAu5qXKitaDx2zvpNprY6pzRz8DfYNgyCua6urw6tzgRUCgEtb94h253cvqjKZxFFhHUWuk8",
  "key31": "5JBTweREnwH6HQMMD29bFPu6JBdTXJ3aC5rz6gUQN792toL6xtFDhMKjhudm7ZLjpXAKaKWTDUdAPDp1cyATb6YP",
  "key32": "3VQYWMenasDpTVGDL6CK6rgGmFnwAnWnnhXAUh74NdSEbw6ZprNSZfBv2k9WaZx9wPdeSWdQQ22Fcr4NM1tDvoBX",
  "key33": "jgwwZJ5gbRWM6rCj6VueAjLoKCpJnN9hPUQmwTmNGC5B38caDuUyJMAAjcWT7UwYpq3N5JZ4MApktB4HRUS888e",
  "key34": "44UYJJxPUG2RqqxJZzhGS8ewHxkcQUTwEzNiNKz9UcoCSeH6WEPW5gAFJVLxcj5J5vqyxaGDXpNFwVpWgh3y6rgC",
  "key35": "5tnWj4oqS8zgjmFQASuEGe1BLj7QD4sGzZurgSkFwzvJwZbAziesNkh13Jbam4JMGLMEMCAopHVkiTg2D9sht7rX",
  "key36": "25Zs6mMMS299Ca3AsbQqX8sNTT2e3MkULJhAUUNtWKRevwstZnbmnYqPNf1LtM6YzQam7jZPKZJouARsbA5hETQL",
  "key37": "5mDw6zpXKYZv5Wm1FNUrDQEVumLaniHr2fr7Za8WLYZSezkWwxCD2iwkhxww2md2yuygphwcbEqd7XcqVxNdz8XK",
  "key38": "5gLgmL3eftebbJHuSBMN2VkizkToisYK4gjc4GAEfKUoy4rUeieSiSLnds9BwXGYKmLxbnrygdkRpR3F8B1gvKu8",
  "key39": "45DTXUAp2BwNuVdTt9Z5ftCVVx9VzwMJhMTaSUp8EnoJTpmZwYx8CtG6AxXGb7dEeCreDTgPttVKiJfEGvcB3UmQ",
  "key40": "zt2ZatZEn9iKZGon6aHz4Jwbhwfwn8uWPQy93wFnPfeUFUgBdTsXDLRGxXpRQF77jwqgbgWzT7qVUWcBwdgVzNG",
  "key41": "59Vz7Sqmk9tiPJJxSqaTuFv7bcNKTHaxsTPHEUp7i3iKJ7sizCCtqwTiwyRoxzjeygxzhnSMokP7gBok8fkCXt3B",
  "key42": "qGgRDiPsrBKWv8ekVc79wnh9BRbsN3pttBBSJmdg2N4duHoXCEeLkDHr7qDS737B8tdE8XxUYXqrwfbyfMoTvrB"
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
