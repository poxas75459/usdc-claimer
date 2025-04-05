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
    "42Epo9C95e6fLWNEy7QdY9oeEW9w9g8FohR6j4CArshEobmspuuv2eDYvTxAeScEssAvLykdS4b1GtKR6W4UAHxJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xkTJnwsxzjAAKd7a9LrDLEkQZMJ7V9JdSQPhJsSxok5AFujzWGb8SWjDQj4yaWffWr2jt6mzfrMFgQqYhPuGmnx",
  "key1": "3LJQwvvPVk7J4DF37v2jcUoqwFHECeiyE9mDH4njDXthkBP5ADr1LMsYrosUgfYsiYrLgJ6P2gjxbNYKXsnS4DSb",
  "key2": "2uTiAZ4X42Ra6pXs4Dungbo2BgFcj57jkvNp6TUJK7BVW77yLCSUjd2LttezDRqJjNXF6J5ciCTCpxZgnh9gQ5tz",
  "key3": "5p3CuLijWoSjiYusUbcLmTGdJJG2deXC8YCBLnnnMZdQcFGPXbsDFE9aKHmUwqF2ioSepnLhxH2THuBL1v9vGoJ8",
  "key4": "5UVUk7zpdXDzvEcu9k1Daqm2reSsTWmVFNKcGnjdXTFDUKBMe5E8jhp8Aik1wZic5U34XPt7pEEhGQPJGaMh2W4i",
  "key5": "47fpk3zCXo2jvCyVxQ4Q14xvG4D3QFJjHjMG4LPPRK8H3yrUqB6ycbSPpdGqXzsyKo9D9ooBnwCkVzaP7qdSWwtn",
  "key6": "3VT3t3GgfpuyUR9Up3oaeKTRN5ff6LxKkkqPqDoVCZPKwMLeBRTDFSttBLUQaKGkpGSrHN1KBG5RUxHky3UU7ng",
  "key7": "5H1vquvnfVALkWnguEhYqdvtqySdpXuR5ULW3Pbjg8khX4gg6QwSBU1Dyynknwc5hCTB9WroHa95JXupAH4mjtGK",
  "key8": "4of4nC3vW2ph3EnBKo2MMv38jmpszG8s6ucCveRg41oqaXq1r8SnnyR1oriSDwyj1JAUDDn7LQGheVVRLvcNcCHc",
  "key9": "2oMu9S21VafpmDmUHYC9MMcExpzv36qvokcrmjZsNAxLsqYmc1t6PBKdQXmeGuNhhAPfkUaXXaxK6ZPv9xybHfS8",
  "key10": "2pxue8HQrn5Qyy93pSjpNGumcC9jn9eWdR9vnEYAGXMEt5KCJkR3UQekc7BbbsdRM17wWy4sZg7KUB4kDVgKAZop",
  "key11": "3AudapnREhtWVRmNvW3D8Quq7MaAJnQbWfGeAecKZuDzMVW2B5MB8PhZxA6gjHUe4N9fAcKuPnjzxbPyxxviqETG",
  "key12": "35WKn5Q9dYFYtyjY7PdrvyBGS7iH9FjBgpn2uRbQmmwj96HmbZkgjERi4yT2XN9RM4rh9AyEmB8WD2LMHNrfVYSR",
  "key13": "5WDt6muYZkaV2rk3YGLHAKcZ99YMvAtrtgGT56PiEtNB2bzx3vqmCmv1VzvXufb8nBNtZWDYsfHCyDeSUHdT9w5X",
  "key14": "5jTeZ66dAukBZ7toX31RK99EKPR5A9b2ijYmGp9dWXn91mhtC6da9pBa61MgUsapJXaAsyUVk2RH2ZuHzpBxArsF",
  "key15": "4mkmtR5MGhPgf1bmLHxm24sid4E6WsTrvYb2KvW6UEe6ukN5Mdv9HfJbcCAkgpZCSSgTDot2U4Em3ME9rNF4mbA4",
  "key16": "JhgMudfNUrwaKJNKKnS3iA8LQM8p982dWiKNwKaT5yecoPACvakzGTmHPGmGvEKjaTbH7q1x1tNLJnbUGRNiF1z",
  "key17": "2dQoWhxsDNFFxx3gPyhYqhL8HsjEENoP5u32zHaYfv7rMgyVV48UPtVtBWDHCi2JogcaYEEtKCQQw19abg5YTwqz",
  "key18": "28mjgSznqZM9bi94btQM7xgt7yypszHzXn3vvvUWqUSnbMoNU59WQgzHL5Xg572FbxE98p5XgP3cRka19XXHqjhK",
  "key19": "6355oFQunwnZTk21Xg5uKuEmjZuuLUQQK7gkDUmdN8EpLJ4eLcVxX9hqqMraHLRETfXL4BAczsTrGoJK6FX97oHq",
  "key20": "6HwT8z4SHHEnCgwqyUj6KBQzryWziy12QHD1YCTFvCbhFuFV2JTUqT9b6CDcKrL7Zp1LAU8P61MX43oTzbbvwWE",
  "key21": "2Y9xMwVFcX7hsYGoxrB59iVrJsoLYSFkTzZ1U5LrBXE9M9DiJhYeZnuSgNLk2JYt7diACd58WTVUbg4sp1WX9MP7",
  "key22": "3vd6WBzFdnP4NySbtCqZTRNzAnWdYspPYkzvZHD7EjWCSnhu4jKoqU4f3G1nvY8Qt7iAthJSC64JmAXQzQyxgpyB",
  "key23": "3cF35bAkkvKgwqpnpH6jU1BEkEv9ZoXx9qgt9gwvGD9LsPjZvKdFTgAsuvYVsUW8CWJQ5GE1dx5xeASU3ribJ65z",
  "key24": "624Bi3CMhmsfGnSP3RUJ5Uvbuu3psjxV2KYscgrJ4aRncrmkvZTvYvrQtFdEpP5qzkAdzGXhan61XTk7NSc3BBKM",
  "key25": "5wbknic8pyXFBvTxDy1qgk68WpVXv1C3v6EqQDt2Q7F2mjXjCVrrk5nRbmq8GD2MwHseMJLftM3rbTbZ1oJJWw6C",
  "key26": "4wwjgPuGRUGru8K93VeqrMkTdCDeCDWBrZJUUGHiNj4S1Ku4Bjca28vbX3ZFauhLxJ7dzVycKU4UpSmam68Eo4WX",
  "key27": "5nCJnUu4t52yfNEnyXt9RZ6fpa9EUhSA7StTizc7CxnjL4sUBFeaeP3jx4DQp1i772uoNg9Q8kDsf9NSJnhC9dCv",
  "key28": "5SQk69UMNwEjbRK9iUkCGqjLasJ59Tgk1JZXSzodrZWGfomXeDEUh9EWjvG7GULZgN3qJB3X6tYraJDmVFddjd2s",
  "key29": "5Nd1yecSvCKAeqY44wvQTb5pBj5ziBkeoFKaGnxPkPuehUYphDAyhuirGxSU8PstVNe9ZkV2bw3vAwRCwhaSHZfd",
  "key30": "Tzf144Zb1xTvQUVBuj9WacDrz8jfR7iLJqQR5fNXrJv4S9c9avu6SULBrWiGWjscRZvevZec9DQry6sqtoUPqnX",
  "key31": "5bdgGbfXyCNcbkiBdT3ncRA3T7x4RsYnvcsvqXbLP6xnRWCT7Seru6nYoVpkLSdZTdrSrKE7cmce2AbA1n9312Tn",
  "key32": "2ES5ms5uHcmjJnrNYqTfdqGikXeFpLb8CP9rUwJfVYMouKQQh9hBn676jUzYUBQ2HgvQSWEPB2JsZrhJPAn3c9nk",
  "key33": "2QHyjSCRg3X24qxEBn5FFqwTHtDqR2bkYqVK4MkJvgfp6BTC7WnuMqZjNhYcCXvafoS1eagTSFdJTDpYAPv8wZZ1",
  "key34": "5Kwr3VW785KgtK5UMX82Qezq6kPUmUfgDpayP2ntCpjp4pSwitrUhtvB5h35jUTX8CeVXhKd4nMCubdKP1dRjL9Z",
  "key35": "4g6FyXy228ZyttqUvLn3jWmEQqRuLUoHEewT5QqRcBnwJDR7cm5rScUdAr6GUYxfTxksrGZvg1rawTr2Zo8QhDGk",
  "key36": "RfdZKrnJkJdkEKxHHMYaLYYTz722qs23i6SoRa35kq4V5CR2r43kpUMazbRQcM95AURhfqSdJntVKGd998QHWvv",
  "key37": "3JSvWvF6FhPW5pUSCz7a5GW2XvQvnzL2uznAyrBJT3vHZ7ocom4KAY1a6WLfFfRfo5GAPMEZEspdMEHWEXSJKt4o",
  "key38": "zMa49f7rQqXSW21d1pwMePjtgoS2MWMKzFkvJtUUsq5XnVRepYyu4o747Nf4Ud7wk8w12bGeyhb4JqTnhWqssGo"
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
