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
    "47t1goKf5UJwwAw5CDBQphy12SojMfBnnUWD6RaUwVCJRrpLJPCrU9zaV2HixxCTVDC3Vkjkiw1xzaYU2xVeFFCK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Af7sbKoNpi9kxECPHU9yXaBjFRBswJeu2LbqsfXRBXopxcEinJeVeYdMbWXYjLVw3x6x6nBCFGp72hrkphLQHAu",
  "key1": "2koBrtzTXBqnYoTnq8GF9fPwCemy9iMHMZ9Y3d3ndNzFX5cf39rKK3zpzzPxtjGQsJPd193SCwzHtFYCZbUZqjhv",
  "key2": "FkzR9DuHkWuTnNL8W1U2LKioak42keb2scPkcNphofKoRaNnXXHUKwbhHpES3Uu8soA6Pq2votMGu9REa6Ah2fE",
  "key3": "2KpNBTSDUG9zmgomAJxjUCej7Yp4QYTszCFBCf5kcVnbq38VKDeqwUsAPtYe6VqoYKWNtmCptNAMYJZ4oCSmnh9H",
  "key4": "357cUXrD9kSq4KP7Ci9EXJuSq41PwXNHPDxEQ2BwPxhivJJabww5mRnUoWyHKpQfU1QKsNVim3hH59MQWzWeo2FB",
  "key5": "Q8q36KHPk95qaq26uB5BmyBvxgGDW3mDhDqhxLjCkUJfmcWUkGpJLR75nFLagPG9cpS4eEFFBWPcuYumCj6tjpw",
  "key6": "3wFA42VjBA6aQMm2fspErmbzLuqZwGacCJm2kxFuy5LrshY15GzgyYcbQ4mjhVWyxMQJTUh58hY8QHpyTRXbu3sV",
  "key7": "33EqDzFABf5R3nnU779kth1HMbef81z8zpiaegCaxYMbVYhBJQeM7hD4g6vmK8A5umPknPECFEWn7sAvHU5nZRng",
  "key8": "3SXzpBd35zakoJVvbETfBXd2WD4kLFtt6MPauUo2Avn7MpEX7EpiDRiDqtA7DxBc1wiPkp3hC7Fav75ikXTdUCBB",
  "key9": "4BqiQvG9diuCMvkdV1n9AomSLYKiEBFoxNvCdhspk1Mv72mNSBXy4sdq2Ju2tsMP4VsidrBsXdPUQLrnMrMKeSCw",
  "key10": "TTvVBw5d2vGzZaeaBgsKYyf83TQ64yLyXD7qJctranXNxmLx7xSNVy6o41Bq866gb93HpJKTqkXDkPmkk2MKwGH",
  "key11": "mRBnFMTkKfzzueHGxtw71QcV3RuXJx4WsiobnXN2HqrnY5gHfYiTMMCZB4b273qhuaiDf4WK3GZw8UjkekNWkAt",
  "key12": "3EBrinBxhT4THKVZH6awn4uX1PHUs8XkZaaCUdqVkv6hfMZUMohe9RTAPLH2RCdjxN2fqDixHg9NEvG8v15Pmf5d",
  "key13": "4okf83jwbBGphoQdunPs5macAWnQnMK4WCFgSBWk4JsWGBZnGKiPcjnTbEqmyqUy3NUPhWR316ffow5dSM1e7pju",
  "key14": "3UDEi7YeBYGpFeHva5ntYeexgtmCQhk9WtCupXK5Bb3cJEAjubfunGjo5NLX6kKaqAbXeWgyBw1pyDDi8epi5kHi",
  "key15": "5vW21wKB9vuNnKCBy32NGucZ3PsnRtgBoFy1sr8s3mMeuikGneUiACdGCbtqu2rno958sWmiUz5qdSATVkhgkL87",
  "key16": "X2n8Gg8pMwfugSCYZM6eCjRBtdLnxKKWVMQewXcoeyAWr6PtBXTyepnESihWN6ubVTqFfWHsPCuvJJWXZKp1mUj",
  "key17": "8yj1XqskCVSJWLwKPUG4sPMHxjBdjssSoygmsYoeapxrjWL4p47fhtQHFFXmzgBvCQYtR6Tkfog7UzDHGezWX47",
  "key18": "2Cp5Xd34e7qtvh2X68ayBeupEtGJ8D9UVnzFP9i6pnMRA9wvKH9v4y2bnwEEyJNQ2ttTNotb6zZCkuyiGcqmvTsd",
  "key19": "2nzg5mF5tKYNAgUHR3Eb1yRZMsQMjSCPhkZhjFfRPzL96ttmWKjxUkotsV1LTu5UWpzHzH3mnFRhi9hxEPEKMGHB",
  "key20": "gvCQR39e7nhP9BGmsKZEZjKeAXginmR5PNVWYB1P5DGDy4VCR1m5NmgfDS1c8c2gKwR5Ft2XhNf4XHUAeKnJsRV",
  "key21": "4eCCU5Z2JDFjBgB4WqKQmfJkDh74sNyC1kd5Zh8XuWS2hSpEtFX11wjwYo9jUf9rXJy8mCBqW79LaatVfQhdxvta",
  "key22": "3NozfXUCJ67XjFruGsphoTQnod1EHCBBUoaCsQNztE1CoEzFKNcRZbxdJcNSaqHsp9fyNiVF1K5zAmhVCmyvqTmy",
  "key23": "m17eXLBbk1srJp2XnPUjdES3U63eB3E72uCAVdPuMq6RfPeYQx7xFoo73ZvB8MGDVJ8pCjxAeJvvCf5ovRUin2r",
  "key24": "EwtpDHRqqvvkvREe1PGZ6TZFtx6qxqkMdGp3XejGQBMzapdDubc25nkFXFw5BMoSQMPyiQyN2QjMA4XBbf33kZN",
  "key25": "4QXrMgwXwbB3hWAXPdfXeq4a1MZZgZeQcwyfK9AmRdEoCnMD8JWNRTzq4wfGfjvipj8Ab2uyq1r4JwChYDwP2e5e",
  "key26": "48f7zTAVYccj1PZyuAzwPrUgf5ngg7cmL9ViHvLbB9sQTqPRNN3BqGZNdyhWrb1EQQBdPrK4FubnX4czyZU8DP2n",
  "key27": "33DdGGo9yEdscGnWkZY2EwHMZNyuS1iRbmdZautYYFcHHFL3KwRmDh8Epo4QyJgMF4B6TfwVqPRo5jSc6NRto721",
  "key28": "35auE6xjnAEu1erPCaCRQkVbTNrHRQMKuLqLQixpaGpNL8nzi3LQJdAyxjpicGvhFMdrGQhtQXWfvtdyoxS2T6VH",
  "key29": "3f7v3eFugD5ESveiR28XLMu7hbF2EkLQTH8xReCKrkcspCUhH3Z2pLCxxoqqEz5VNMts5yUuVAtfSm4k2oPw9BxH",
  "key30": "4ZX9iUFHrXSWNzy3mMKtbAuyRa3PeiSUGLA5A2FKYNJMGy31yPRXqMGm6CKHxhyxvc9U2VoG18TZzLennXbrgsyo",
  "key31": "4TuZQUMfZEfN6rsoCy3qByEM3VUb2dp7ojVroLh8472yzRvjkumVZuftAtkxGjGSJXkMYFjmJ269hQNKTmHWJoZ",
  "key32": "4aMsyviP9jMFigG26CEUjqQCe6Hh8JAVBuaWWY3kqJC1CGtBzqZAqdDphdhZVjk8vNuqAGFHJWbgsfNuUBKWSvj",
  "key33": "43UvTsRGur5pgUieQ2CekdAbw6SpWZu5XdhrKBpY8BgTaZuPnRqUKiDCXZ5BV9WHYszurjp9SChsG62CS9TQyYur",
  "key34": "3W7yk1YRi3YkomvB2dXNLdMKhjooiCRJ9uXqKaxrYTZhkMAdyzSDR7kcVG5qhqt7WESonDNDss62zXpcjhEACtxP",
  "key35": "4issxhdMueAdgyQH2Vx2AN8PUn4NKAkGdhDD8bSpSKHsaARcxsJNfQdQV4x9SAKQJ7C1Gov7j3fbqG6xzz9Dp1sq",
  "key36": "2ih3A8PbbP6SBBQJDvr4gytrQusas9KrxtM2oF2ypS9C8shjwYGRQRyRMz4EjZYHZs7MQgC4NcPoadvhSfKt6dRV",
  "key37": "5KAhPPvBZxRowNiXXZC4WV2tciqk4HG5n4m3j4TQPd9YnoiWc6sKsietNYYnn9HWRjUbNFEW8Ecf6kAYg4HBfqu3",
  "key38": "4JqxAz1wuBNow5HUe57kiJWzgSaCGZ4jotu2egK4KR76bxxWK6WrXfFdasSPVKHSKjjCU2ZeXsR9Hg5wtiDds2bS",
  "key39": "56Ej22SVvAF5AXWeUEPL9M4JefRZt9Ai6mdZGDrALTFoE5VtRPpz75qVD9WFPuUS7ZDZjhqBSmeiPtw1vTQ5CXko"
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
