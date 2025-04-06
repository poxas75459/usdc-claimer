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
    "3bZRApcPp3sqmCJpZgsACFmBE1mTPTNPPkQoa8JDoP2TiCRWcR2CTq6qmYG1Yp6N1wMd6nZme95GdiFQU3Mz2NGz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4u5rGVBNRzs4L4xBoJAxnsDdHHe1UmEJbYJ15gbiUiK5BkQWooXpsdLGJijkwH7W1BUxioHqw258A76C2P3oiFkx",
  "key1": "3wya9j8bu95FqhpzAG2po8atYd5XY4J8oR43Pb3yXMwLezgRQ5vSWR5cVBZ3gjfRwUWiUgoyKicF4xrg1u1pSqev",
  "key2": "cvNcchUeq6MqHtstaSF4uSQXMHDCTEo2WCToTJj39N7YrHCziZmitBLJhrNQZpX7foXs7umL9t6662eZpFpShPt",
  "key3": "55UzLnuSQZwE39PiS2ByTXnZxAz4GHyEgc7oWvuTDn5rZEKATmYWh2ixaojUEi4KGneqqQc3RcDKGKXb78cHkjLg",
  "key4": "SuBYbntw3871PwFYk4zX7Zm9EKD5JeU5Tjd1h74reBKwuuBj76P9JHB1bVgM3HzTTHbSZ9rLKphwkqKt8US39Ns",
  "key5": "38K3yorR2Ln5NbDMiQQfVvehyLD33QVr8HWB7LJ21i68EC3YEWwo38YGv4mB7318o1FvtCH1HNzh3QnUnTtaM4vj",
  "key6": "5exfhQqrG9DyPHwgodFGW1SiDDXUnjvUdh5y4ekQ1VppmHD4tcnVsooAkwJR9d8wfxHm8Vd3iFfSn42B1fkdFwBH",
  "key7": "2QvNM2XVAHucPRnyjbzNtgstVa4qmLEQBAitFn6m2S57jjeVFmhB3egDHJcGV2E3U7cnj941sK4ahnyLrQ1C9pom",
  "key8": "5MM74HAoJU3w7sWamAxq1JUTPZz8vJZN4KkNZt3SuHsGJ7xXEo8HTcubGqvQPDd4u3y6BKuAPrtf5FZ7A8kjatw",
  "key9": "F9xYjwG2ZqCsfGLSqQENQ8Qo7sVqSGdPY6QKkchcAoLdZEnPSGKwEefPcBCgAvbadQWE3ZvW6a1PWyHEoiKKqj7",
  "key10": "4daTVVMPZDYgmSBp2TAp3NBBw3LtyvXbPeRQsDDoddKgv9bkBfKevh8mgTgw7LyxvTaXmv6DbbyXppD59UfSUthw",
  "key11": "i376pYskDKLJJQ5PPrJi38QaPpmcSdUBwcEZNBwt3HnpbSYnUqJiD1G9zvGZBUJM545idN3UCPdzVkXAUTUcPqE",
  "key12": "2sj6AcEQoFmCbqauVuX7q3Nc6aUepZ4CKP3HyGWCW5s7z1GCBChngUzC5AhU64sEtVzVaXvtPUjjLRiGX8Sw9Z9E",
  "key13": "4c9VtiERHWUUaJFHebsEgkg8nEFSUSedw8xPvpEtpSZ9zzKXm9SvyVn3zF61q6J5vzGsfh3SE4QworASsYZh9gZF",
  "key14": "2H1QEUQDdLESKbuctKzx7ZHH5gmZ5q5Vsi2oGAiCw3VvwXR8kdXdpa9E4Tfcd4MsfBsEzq7Er7bVJq2m1EiqbNY4",
  "key15": "3XxnsDeZ3HVZ2PTU5ayhu6RH1UuTKMrdKd4GKP36hReQec4kbA2pk8VEjeSUhCQGKKGAn4xMv88bjN4AM23iobNH",
  "key16": "4MiSLgZGgn2m2zKj1cAyJ4MwYU5bML7XZ9dS4uHZWC3JEUMkWZD2LJ2MQp51zqHkiqE5dZUfHdon8rttkveRsDGn",
  "key17": "28YUpLSavb2heviPadfW9pvsoVjPNzg8dq3x6rtzijjDvboN1HbfEutVw3VfPMTCgjE2Uf6cszh9DXVSkfWZVWbu",
  "key18": "39v8GsWv1iMeeKsiDy3CCcWuP2BX7JnudcvKywAE3BvpFBJCZhu8hAtz3t5bnbMXMNrHeb73piGnKJmay4xe4r6M",
  "key19": "2fTs7PGxJfBcsDMfPoaYu8RoB2uDLznMdoXRKNjULuZ8bycFd7dxf2q2Nifpng9rhHuSL2zCViVUCSQ6ZmJh7Zdt",
  "key20": "3KQyiDEFeqroAu8uhD1WyBWsX2fRiNyM3sZhamsdsLSt55Eva6rmZHSeK7UReFSQL4E96mqGSXTq1KKia4okRCUf",
  "key21": "2ev1tEFzyP87NcRfgTaMhySmmSaNoNEet4Gp9uKexZKPM88g7TimzhTQo58wQCv2KRVCXcnPF8ZPxvJAhwgsyuzG",
  "key22": "5NVP9aF2YhkbEk47YbRd2sr8C87WJVNBmhXny3MLsrQ4bumbELLYXnzKbeuYeRg6TV8DDevTgcUN8ibrhEbGDZP1",
  "key23": "cMYAF9ME9WXuXTCrWdChVZxBNgea5xE9WBxmuSqw4hSaW8qUqo3hBVJCMd4xKnU64oNceMRvbkgKcAJ7uWwJj2m",
  "key24": "2qFirCmYEuRo2TeFdJQCectK5z9grjBkgeT6smHJSnT2yCqaizBNV46jMsssYGLLjj7kJJYqBhhbzMkP2KF4Quak",
  "key25": "2xEefzj4n33v16HQQApU4VVKbUDHjQEc6kwd6gkmTgAU4vwdajLtTwz7dHo1ixj28bQaph3YHQvw5BNcNHzPi1B2",
  "key26": "3bMT8eKt7M8CYvJ95mkH1bT2MnDB5F47QV4mJSAu6ssifgkKvxkKkeatL67oUSkWB2dsRK3ry2SJ7yooTmBJ65Lv",
  "key27": "5L2PPBWHwVEEjXBXqoqdGYJp8aoctjH9poAj7mLiWngatnxxAxMFJ5mZJ21GbvyMrrGU2bcRGktWbBXvWVpjjdms"
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
