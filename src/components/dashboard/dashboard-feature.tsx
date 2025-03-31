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
    "zTdJv1umXWseECF3X5MRZhZ21K9CNEFUuboYGxvaA3VJh6TN59ZucDBub3cFtN4krHXw9M2Uw8c4guYcH82nmXg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QyUUez4S4DZ3jmrqL9LffUeJNKrVMZVQyke8gSr5hjjTQ3Z6WnymHnNid3LkaGYwsfqhNjjds6CuFobc5YpkJA9",
  "key1": "2vT2oKbBsGrYAEzMieJ1nDMcdT9aZKpKdJC8jzE7ALaVebKDcMYuifGjT1JbykQx8LoexC7uToErVkpif49JSbwZ",
  "key2": "C1QTn6XaLsi3zZuZQy2aGfTfDYrhkEh91zCnXaM7LRBuXRFLVpAG7wtV6mFMaB15PAxzGkKiU3URJB6srMSvLmA",
  "key3": "2dQg1SFmERaD5UKXW6GksSYccXYD1pZjZctvc53mzwqVAFWgAmLTkdoxSMBdoEe8fdLyfT825RyZuHmxiM2H9W4R",
  "key4": "23Kfj3756x4dYgsAE7zjP7mqzzcAXXKP7eGSmRDPnHKJ8PjV94eUVD3Gu2zhw8kfBcpsRUzsdgkUmZQaXGCLtsk6",
  "key5": "5CByvuck1rn88RyHhrrTPhmdvZbo4oVPZ24JtEoAVsC2xTrxWa5SkSokFSaTDUgXxzdYigSVaZS9zjYeZFeDzdJV",
  "key6": "62re9kLQvHV2zYuo5GGBZLZU15Q9hnnBCtWU14epWmrnSTWZdkBwisyLMsXs82omYN2EY5s58Y6G9vHixpkQAWNs",
  "key7": "3KUxBXtJhXJYHhZQnwaXcSC4QEWcbKRoK9cMiKZkRXEwo4Pes5WAJL1q6GFjQBU47AdF7fUBVtJnYrSrQg22CmiX",
  "key8": "2isLXXQG8g54HvpxjTbGotkE69VyWwYb37PfQcC5bvSGVUCVWJr6RwCE4GzjbKgmNiv51GC2ndGPX5e6E3jsvREx",
  "key9": "2jB5LyCeTAgCRPqPn5L2PWvGDxgSFRR61vjkgBVzLKBxFWb9DR6X9rpZ56MkAcsAm3qCBNgkZ1q5iidZPuSX8S8e",
  "key10": "5x3p3wo7UuAZzKLM6g3doqUBLV4fznGGJr1kEixasqhm15EQMs6j9oxnQsRARK41AQ86nS1ocuZKki7EV5qZBFCo",
  "key11": "32DswBCLfArQkoLdUbS5Cg3Xk2nSPMiVohrC1gM8whFBRuqvXKqp53mNpbcmP3jVsKoDDYJNSkDsS44nAfUPBYab",
  "key12": "4HJKS5rwERQ7unzy97vtT8bYretiJ9xGTzBhEHXUj9LyzroY9cr5FarSbXhvfTGDrZDKqVaBuFQiNaTHen4eMnPB",
  "key13": "LnjUWDFqevBtC8HoFHtJf1uM5bcmFiHyEWjSs9pxgLXfHZGxXaAoexx6oExz8pSpWs3i7BusRPYdxQLsfDMcesD",
  "key14": "4shPdGYKsnxQUB3NLeJJEjrrTkw5G8wZ2DrtxzwobKThKfNvL19H15DTGAL4WqV16ymx3Mmyro1NTdjC7F8f6MKK",
  "key15": "3LrAUCZbHXCUS27UrWWypfKZ5K4AM6tT4s1fNngiyAX2geWa7GmbMfvNYyTJ7ptKQYTAZeddARFUfYPHj1NGZjKq",
  "key16": "3fAXMcj2ie56aazKoTGJHf3PbqoM6dzwhrV8FH29f1cy7rx2Z4vHyBj4M4m8X8NuWnba6ZDswSthXzL3cBtbh7Uv",
  "key17": "2BGzAQnBimTjw3WUETNA65yBBzsdNoQbf7CJSw7QVFg2zneCqMs3zrTmH8GpJksnU8BTTX7ZNfzXjtmYnjEQArNi",
  "key18": "3aAxniHDxugzZCNEcsrxFH42jd1xuFD811K3nozuF3ANgGvvXkN3h1z2Q4UN3qsLqTenYZQuPaQqjaoHtwztVzeF",
  "key19": "2dMUoGZTChGnHA5XSxqaftXeCxZJ4B4bzHnVV7EcH8cFX43RN8FyiAwLMmwhYC6y2Zmp84nTAADnf6YEPNTwDDqK",
  "key20": "67cAc2A6TWpwpP7bRxjoW5ZdBjxSCBRMsNoTVraG4LuK9bbQ2T9um4aH4VELZC3YaVzMdxSBM9bLHJXiZKovA8tY",
  "key21": "5YebTgxXyqsz8YFm99rmXgsaeaCcPMpjvHnZy5ED5MpgKHGqQd1xUEv3Whyq3ucF9EPPiHzGLnLsyVAufBRWBqMb",
  "key22": "SjyK96A8Ev26C133cw4bBCmyV77DDtiDFjStz29KVEWpsoKJdhNLa3V7NKP9RECVtDQAwBXJNkGbsp7faqxVStW",
  "key23": "2CAK1yEUz5ECwsL9qvn2jRyqt5mwDWupCnkU6vN7NTB1n9j2atzsBJq1EsZuB7ff89nYzfF2upS9XErphdbD2ULe",
  "key24": "49zWxgcbKzeFfaZeng9YgWWYtFw7utLRoNRgECgivfT3govRjXGKNZFbBiE5tdtx4vHrmnT4cXm3EfNptai5Dz7a",
  "key25": "4Fqr8DgYWJqthtm6wbKZj5Cd28SWJws9LXDDS8X3Rg9JtKe6ShMnfMdz1zuKYmXnbmK7zujJe9pRteCy1cpcV41f",
  "key26": "46HdbzL7PBwsbEeSxSfERcTUjyhcnrZR6CGbb7BmLfq8TS5bRXSFheojuQK68qiAwm7DSGUctZ42iwPBwZpCi6LC",
  "key27": "5pCXM1RrmgvrgcUdMCsvtupnijxjGpsf4mfCW6gn8RYRyy5biDxVRFR8UzD5fHYrgfHZ4iCoMorNZU3yif8Haotu",
  "key28": "3KQCuxJ5t93uE2ABGXxGCbq6Qq8NwuMHYEZvYjuVUhYfcXz7AK35D2CZ4Ft3kUJjrg4Na8CvCpG2LSobHb8CLN4x",
  "key29": "fwmgK1cqWVXqxP7bci4Bv8KiNp7HD6vG2Ddu9yEThuSn4VNfUmmG1YTL7S6KuEUmWrbutMkKYW8mXeJGTsWdx1D",
  "key30": "3GWgXu7guBHPrfWewrre8p1Kc7rXPpwhfYjmkqEsN8oJmVsuz9W5WUVmi4nCBBfZM4vYmFCSwWJriP8a2GYErn66"
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
