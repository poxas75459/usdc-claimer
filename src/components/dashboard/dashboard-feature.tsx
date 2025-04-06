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
    "5bQ4VtBVvyce59BvN86asLptMLTuv9JrTCgoqPS9XH7EttHdto45WNwSxpgs4MVFoxqS4XRv8in6goeFVSRAw31s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q8rLSaQSJaPi1PJgChKeDsYfaqoEUuboSBk8mUaBibkQZB3jBJQbHYAwEUMawfw16BBrkz2LbrcTMF7ByYkkoVS",
  "key1": "qgZqMUejuS65Lfw6j7icwkk9DENVuPhUPoyhduoWNrGQhEsripWKBV5gB7A1GLqLdLtPcvFAA4nMBufp3E6JK4R",
  "key2": "65KZcfP1v2mk6BQGMPpJLXQnjsM2svYbSGEW9SURum64uteA9Nq8pdSj7Dm5SQu6B6UyuMBbBSdF3GEAA6QfwsuJ",
  "key3": "Xhp64Qexn8EA7L8pVyXzTEgp7wzYviYaoLujvptw5GTeHSkrSZrVixzFyZHWRacQRYs3aWxF1pWSRVSPzgSuoV1",
  "key4": "43GjQPoSiTVnRAqMkoVabpDYRrWrmkSRcCjqFRMM1XvUj7GCVxFaZ95CUJxE62tar2nxLSV4zQbYpUYFcz5UxK9G",
  "key5": "4UH1uzjtaNQtM3BxPbHwbT4vBjk6ZkBtJ7X5kMdQScYHF4hibeFjbKKQZhebqTrMvaaHpRXeBC1sPQyvzu7eYr56",
  "key6": "3Uq1Gp318f5tQvCSHUoUQkGyxTZLibk44eVtFw6EfF6nySeUHVhHewEgskUb3AvTPXL2iMp61YXr5jsTyCNVBrnj",
  "key7": "3X8GWVN7gCU9qLkpz88Z9Fz4yTkqtMpLYQf32siqPpuuUXXaNG7PQXiF6tKLsyR36wkZE2wTcfh9HxUSHq1bKN7X",
  "key8": "492iHvSsxEUANax9Ab7njfCnP1JbbT7BdReQZSiTKAQaPV3Q2etAHPZuVosTQMZyAuR7QoMdmx5YKnCzqZPvPBgX",
  "key9": "57v6KCo7U2NhQWSANLHM8DNMcqJFfaoQbKYjXhahh6BYfg2oLNRa7dYag7F2Yurw2Jbz4vw5UFTZZSw8U9oZe5yp",
  "key10": "5V2eq2aXEeR22Ha7wU5gA7VDuk8wVohb7aER5r51rFnnhkRgwP8QQkWyzViMXcLJueMCrPAqWdDDCaVasmjSQJWF",
  "key11": "2DVvCqM3mPvSBqdw4tMFyTaK2S8uXFbvuHiYEkGJXr9DTmKHZH9TSXMydpxr13ciu9HRzf2EN1D3sMG8CZ2isJPc",
  "key12": "niQVbqssq7oqjruCFDmM7Wxm6TV62tz1yRUdkUNAeE1SMhMNBs6K3QX9M3JD2m8xwuFLhfsLi1NMgHgaNWJsZS6",
  "key13": "57oDBZnBQuq3HRecf49UKuDa6GYGcydTgbB5eWWB31aUvdjrMBvwFjdztT6Q54oY1zqzbK6hQZFQwJCxgnAQJ6M3",
  "key14": "5E7QyQzbVw16bLMDQi7vEY2YuHsvDd61RREjC2rHkDt21cnQjP1LViC3vCY4Wco3FXY7coLSiCzha3CuicGsaWCG",
  "key15": "2uEPbCwyZ6v3bdC7NpJcasXT2p8nHqrexELnhdNQxg3c4kvWMkyPgey8zXNjN2iP4Ety28mWZ9zuEWHRpJ8uA6vR",
  "key16": "vVhmhg82JaW9NtyvBMwsxmYuF5jcVyGw6jWu44rg17W7KYRJfgVRmWnqp2uj17h2nsMo2YfcCEPrPh1S4fpiLnV",
  "key17": "2ic3dcLu2ny9RV7wnaUbrw4PKDraxU1FpmpBRKn7oC6niVLSYzLVANAu2BATbe92qBbU7pYrmTGChRGtbjMGY3sq",
  "key18": "42FCWV6wwVFmF9bKKtJehE7SZhx12uDJLowHj4biqkgk9PhZwLKMnuQPXZAzmLyv7anZMANXySmkgHJCvQUQRjSw",
  "key19": "3Sj4K85s2ym9vTW6Es9kSyFq2Ry5k6ZCRkpwqJ7WSwuFrPDRgxuRzK9aHA5wU8iDTjHTu6yuhqiiFaC5uwQEapaD",
  "key20": "2j5jzz9oMaxaRrZXqjbCEavuX8xTeDTUjDTxmN2FUELfVcy41nmpQnuuKcUuvZeJhDbpq4ykKb49TCDyjeaEy4S9",
  "key21": "5Mrw7FYcA8nneN2v5QaRhpKmbBaCJGtupVTwQAUycQQXTLLwDuFxSSyTJ74FFQJdw4Dp3Vbx2p5Sz4T6Rcpe4UST",
  "key22": "5rPYe9m8r1JWVn5ZU7VjFXU9PCCTbNNYgHd2aBQeZQ1riYJYUtymiNpx1PSi8xDxTyFV24AGsazK4K8tCrCSxT3w",
  "key23": "55H3LRmh8QTo73HZkHb1nbGpm9RfA4qf3myrd5u71ATHf4i8QnVixzLRivwi6rTtM3wdyCvGp3dtrwoSzAjrEsBc",
  "key24": "3RmgTPzWtwq1zziqbFDQ3yLRjkjGU3bCurZCy5fowuwCFumRTzHLmVVfuvKHru6yVhXV2FLxiyni5pgYsy53dazS",
  "key25": "3av9MKUKaMYg5g5dA9dKpgTNtwXmDzPdx2hMfj2aMDR6hg9gSbZ8WeoYre7b8Mf3G1q5gUNYPmJSEQEE1uH6m43X",
  "key26": "4QTFJmJqoJSRhaxv8yfPHLQHqB5DjyNE83EX49korL8BcJLdz2m9J7Np29o7fYLYHbBRdmDiMdVdP5iHXVJqgXdh",
  "key27": "gwgFzJ9h79WDePnGvnMWenkQ2JebXF5846ryBvJbNziTUr1NCaunq6x4ff9URDbAidFubr1Ed8iMPRcEuqooaiL",
  "key28": "4QzRezfN7yeti24ztdssDqXiTKGrCSUo5iZrqmoenQPYJaUD4HH9kdZmFi6nFa3aUYJfyKjZTxW8yEUPDvadG9V7",
  "key29": "5iq9y5Yd3L4TA9qKh7qrXxDSUGFAemcj61bm9r7CEzJAzccaARDmEaBQocDe7QCCepYzWWtrvyAk1kcvRTeuWNH3",
  "key30": "32tcba7t42eztJbAwaQpLivrAMR8pyoCEWiKK1zsGEiFDHamzdht4MMqrRBDYmYGMc4PPzMmmQ9DTcZ3wetTrW7c"
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
