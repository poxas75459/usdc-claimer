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
    "Rb1Cxah85jeFVC88R8hWGjDC3NWcdBdUieroUM7idK3jdh4yW5myeMzW4dgX5nwEq3f9Sv9iaGkJDpSALJazMYM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WPZ9Ng2GLrU4DxNKrA84jJh2grRX1DwvD9DWfPERACUhDvhzjXTJyBcrhb9Z3F7wqxkNtodUj3ZqyMYJuTizBbL",
  "key1": "3xSDcjzWm27Csr6Z8ES2mt3jKk5ZSayQXF1nP1cZDM5rbLNeq1devyDK4CTVmeGF8EDQFqd5gDpkrHQEwLnA7puT",
  "key2": "tECQiRWv3cmMH1Hwi72twQEX8q24kknZ8VLUioj18eTqWkfmG97WEqupMAC37pmcweKyGAC6VdqdLYyiVVJ5JGz",
  "key3": "2X7me9uZEKyB9KR1svKtgGmdto63bNiTkgsk8SY4aAxKRmuyBom1iD7NQijKDEcoHKBXEs6Ls8JYdyTgHzQsZPHE",
  "key4": "pZwqvRESxAq1MQ8SsTPAJGA4WjuyW5Pv4vQh5N2Zwqqqwfb5bpEXzrBvzaFgFabYNxswgXqqgMf8iBmecgtw88i",
  "key5": "2XVrpM6SLMmS8Acj8ZhPwr7P4PHByrxwpnhUgtvgDZZ9kPLizxmsoSfRNsMyzs2H9AZQsjhUpr1xx8r1zpoyF4Yb",
  "key6": "2FcLz7dveUVmEf1Bh2pYz5ubGBfJRoBv7zBq6D6LhjFheHr8HcvxFmTg22eSEPQnkixZzfbLqGBbLDHJBTczfiyY",
  "key7": "31otwsiK98LS9bF9EGJc2BWmg57icn2mCrN7Uityyzt9rHoqFfK6zAY5V5HeaSmMihejMU8S1UCvTYu1m9sEvQqJ",
  "key8": "2NxjbwVTA3kp2CRUae68ZYSkxdAckz6J4oHcJnuQKMtT3aLb4bYwmwqa1SiF7Uxg5UN1YqzyBwXHhCKFV3rJ717f",
  "key9": "2vnGeMd79cLw14RKnnAuExsEDWYpxV2YHjWRX3C6QxDxsD6Hnvn5NwCJzJmJZEKr2gXcfhjccYJXwvdRb3UaR6j7",
  "key10": "5azcCgnhRh6gfdCE2GNvWTPHe8zfkh6bTX2zpw5169ctf5R5tYQbcRyncusEADyZsKndhp5QyaeWu7TzGo33zbYG",
  "key11": "gu3NDEAsjgsSXm4Ei12EcNedzkKT1cbJuuBU3tEzh3t11ecQuVMMd1nSNB7m2eT3RbfTHyRHLJpesDrHchuspMo",
  "key12": "33puBubva2bL91Xn3z1HEYvH8J1DcXL2BaEtc3oDbuxrLJAHMehcbYUFmJrvLR8rpbNpawvQuKdaEqYn8h2gYaJX",
  "key13": "2rutU4Aptd23PS5XCA7EoHtJw58TLhxG4TCmqvKUsX2uzFnvTJLAAdpyrLHVpMoCKTtqtyciA4y3FMSzqZz48wbK",
  "key14": "4cdYiW2Y7RMzQwmoVYrgAZEi3XmDA4o2QxBr1ZyRmiqzvhqcDhDJhbYwpRyLYXKPC3dGj5sNandgqXZRFEFePPHa",
  "key15": "4X6mJ8Py2NCLzFJDxXy36dUFcLv7vUWAZTZGsxNmdaqQZZ6UqkN5hR5svpSUvSrrAyBiyfHXt7ry3sb1UWQ3Y6h2",
  "key16": "4FXZetrZVfd6fD3LMz9tjS7k2P8gHd49XiBLsVg2bzz27AiYtgp2eMAgD7ZWXyds6cawayySU4ZzzH33LCw7VyQi",
  "key17": "3haxakan7TmPW4yDxh15ivy1DFFgPEwSKBR7HEDE1n3U4Cpj7heRG3p3cAkELbbr85R7CJHytBFYd4R4NYwBPpBj",
  "key18": "2GUGkGaakwf9LexZj49yX51QmBKHsFpqJwa8zRjTw2zswbnA42CHP8RUFSqLWVJqThEgPyPj7W3WooAmUunSwk6q",
  "key19": "23B9cs5QT1x814S2dy3E4zyuZMXYEi4mpGywdfLKmp7zgScDiJTjegcejjTanZNsEK8vfR5rN3p6rLisHeNAeZTK",
  "key20": "DPqAR7LLNrfF2Gc4cbPheJfUWJ5mPDvCrFjgmGwaZW49t97p9kV9vojioWKgDbGoVeVgSkQGk6A6ABpdEEQ8344",
  "key21": "RzEwLaVqALBaPefKxU4QuK2Mke2zW32KsBrmguxRnkjg4VufN9nW8ptf5cAMwzcrMAePpefBpKhgvMWjTa5kz6J",
  "key22": "sPxKKbiNdjZQLYvtniEXr9YjvoHpTdyeyuAeCrfyFPpQRKjvvMJs2o6ufeMVF777RAsL5DtbNN9LWp9qyes1xrb",
  "key23": "2r24iHjta8ppY4CTfEp83rZgmeM9TqCzBiqj1zHnpd8HTqXvFikgCyPWfFDcVngm8ewp6bXTHBnwdQCdmxNyRFn5",
  "key24": "4Da7hjLG7ZK5qJ9MRf6gCBhA5UsLiW4LhzWucsjMXFP3w7jwShXkaXGoZ4fPuaHSpEiLkvLMjQWz35uK8pmRD2a3",
  "key25": "3hTUZZeBDpxBbX6u81Ftfo5wMLikZnx6fsJE46b9VQg9jbQHKyX5kMLyo3FLurxoPjVaca8HZim6U9vUUwNKyoiv",
  "key26": "2f43e27dpFAwGfpS8AmyEtzR2ZsJ5ArV9YVWEfu8MxdZ6qvgqdYh3qwX1jqxpY7QH3RPVEE1zNACRqeZeF2oytMw",
  "key27": "46GyWwFgcQZ1J6A7KHhgYDFiNd49KoquxW8NSmJVfSUVyzJJZaAwXdw5uQduXtRczAhyAn62rGHWzAuSJfEb3gwM",
  "key28": "ucURpCn2efhQ25y6qKjyxiurCpJA51wwA7e5ojBceJcBeoQ78w7o1NvSMKLReqCFPUy5tEJCxmiGA63zzhxsona",
  "key29": "5tnCnWv7Xp5KUpYuZL8Kk8KwZZKjk1eDJHHck4BV3wTSmHU9MMUVNejqpgqeUKweTbV2o69QjeW33wL2tJHCnKr",
  "key30": "592sLxA6kJ5dG7Cb3e26sJssW4tuyxUtRBgrkinca3V5b2mmXVUCyV6qvuFtNMrXSxzoe88vUef2CdW7nxf94Ghu",
  "key31": "rAPKCGNB2v4mKTxVMSrC1EgEUfX2UaxKkUcZa8UG39DqodhphMFVqzgK1hMtbVjeYTVqMVGn3sVvMEWK9QURKnD",
  "key32": "4q7x8e9xNAuXShebkWevxxTUMeHtpU932RhC3SuZfwi76wji7GJxvjWQLUPiJoGfMLXsJ4hzkC36HUSMbL69xJx4",
  "key33": "4mdWAYvNbpVaVkdQuhaPPwcpxJ6Uz1H1dvrXLuWge3E4P78S9k4wxr3kSYoqnyq2avBqUs7JtfDgBYrUTG7T1mNp",
  "key34": "3mzHy9axPzUNgUfGcy8219GJ2ybaKDSGKkA2aCKv9wRDmMpVhKbiRWA4YotoJyqhUQiez6dZGRBwxBdiGqsFeMy1",
  "key35": "3PyFEULRpVSvkSneFBJNM6K1YWR2utQSTRWFAJ2QtvLbTHHHTNBBTNWa5MsYaAchwJ1QNG5Hixjt8oyDVhFRdvLA",
  "key36": "4mXAnBZryEE349yJ52mUmq8jGZkEgrKmZVHbJJ3CHLJ2g9zWMAZm5C3ZKoDQHU9KfG1gPv1fDnA5uMs1Ukibdwyg",
  "key37": "TV5EouXg1zoJSoa7qSJNDMkc4ADcBPuBqfPZwSeT5F6CsDuvmePY8CT3i75d8XBVFqwqQ3ZYbKR9CeFKPNMJhyB",
  "key38": "3Dn6s75sV7PuRTfDUMHNgB7H8BEaCZvjSmvPiwQsC8UizZeZxB41Rkrj87MKeVsofoPLFaTbtkuUZ8qtUhftJTdA",
  "key39": "3QWUn9EVfewg91wLd4MuBYPtoMTCHy6oQznzuGDubkDvmSZYNXXwkaCuWMw16QxNjiXzooQh4xQb2zB28QfZuPKw",
  "key40": "4MU8f3q23ZLQHXfczMiCeTtvDHdJfrqWR5NHYWoKLfdNQ8VvpMMXQccekZj5iyCxHFf66tmSkR47xRY1Wd7NGaVJ",
  "key41": "3rddmaGbv1RUyXscPNzBKctJ242XYcd3dbRo62PLdG8UeRdubRKoKZcSzv3f9dt6UXYFUXCnUjBkbKMm4w4UsFyY",
  "key42": "2EzoC31ezz2nmQjFKKEvkQupuzxettVmmy5rWCesaeN76qHY2vmApn9sqTXFeRZcTiVZ6HaALEhiFspPAUjP8zMx",
  "key43": "4vwkuSyzdxr2DtERHt3QXEYVvmSRvnBdymJr8xTQXqBRTc2vmmdyjG1v5LXAtpusWap2C2LubsBLYYDrEhCmb1X5",
  "key44": "2PPcB6ysJdVfwnnNzSyhvv1Ds56rVc9apqAEKKK6Q8qT3x1pPbLS6QGcjfcxiuTwM57ihZ6VL2tMNb6S7YFweLa6"
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
