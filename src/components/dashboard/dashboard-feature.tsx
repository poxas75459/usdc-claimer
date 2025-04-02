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
    "4ncghsWK1Ds9jUSHTVjCRhHK5L8FVNoYkfHaL3AdjmGmify1vVWcz1eviwTgs3bEqQinCrdgWWo3jsHWgMyRwNhY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sEMiTPyobyuSAs9i4rRjd6PSCEyr1Ap3bZqeQWU7jktJiBU3VYVBVTfDkUyX3XjrcZixC3CqCXekBUAgvt1TPL1",
  "key1": "3dMosYhkEpGrPEo12xiYShUZG82AeoSQzjaXXB1ofiyzfBQxLhteNschWV26J85tUg51isFHy5TzG7GUGYWHGEKw",
  "key2": "3sQXwxCJvoCiACVmnZjMYeZ393GWXjMehFXyDVsg1ZG874A91anKCifC4xkPKPnh79MXnk8uUgGiW8v4f4tY7vDP",
  "key3": "3pQbfALFKFfUGM6kLKrwGvEfXD5t14xvkxGHx1fyv35i6eZoJRGDceeS2MYdjixU5AAy8VWV13mJWWLe5VayeoDe",
  "key4": "2yrf8BASjWWahu87gqV6GANQTK6HEW5fRgcAcHZjSVPh5eSdy6VJJxhcT2DKPnxVpjijewxLXRid8UZTnirGy9cQ",
  "key5": "5WT6XGtSygvn8xc7qsG1RSizUg4aDoDzx3am1kbg7n1gvhfHzJyPKro3HFwRSKVFiH3DMccypgWBwf9rPT9rQzEj",
  "key6": "24rasSJCZxPopLQ8vE3rVsFxSjgreEoipWPZBGuMiaLc9NgFh7iuAgQvUXofU8b8PD5mDZVGpVcLVPdXXTRorrVV",
  "key7": "3YL6sh2DpHVrAcpcbd6cdWKoj4c4JaEsRefadZPUAUvBheguwxWV6riW2au3wF7ei65guVjAKy5Ve3zrpqxKuZRL",
  "key8": "2WDcaKaG5jMpoUomWQPi8nigNJBYPAKyNrignuBECf1bEpeSpVw2HDoF56yAJKfaJr4AmGa9bvBissV9yAeEQVcz",
  "key9": "VnX2jzrcDi3xVwdiZmjnc3tTtDMdR6ong5YTjrjN3gGyhBNrdRkh5BmLNjSV44KUCu8KQP6dBCeyFiFUZQTt3b3",
  "key10": "nDZTsP9nWKwE1MdPDoozRT6Vwjiw8i9TyLKZQq2QsN7kJd7C163h19pj4i9hCm64H3msjrbcyEV4P8ZjxyLzSr9",
  "key11": "5LMDaiYNEotgtwdUF6GV8R6njyhLcyS4rub4c1S8gXwK6e5Uqpg1gwzM5ZjkA3M1V3TT4p9p8M5CQViiR3YMMr8P",
  "key12": "44u8xTkUEE6Wb5uQtRFersYZJ9ZTpgBwEWaezeBKHTNoyaPPw3T4GBUneTeXNL8UCpn6sM6EVZ1hCuZCWucRymaS",
  "key13": "392AayAHPYQ8ExgURG9LQwr8HBD7iXPGggcnM5rmotoaXRhJxNtDG3RGiJNZA5JwbeStwqeYE6KEWYspoNZbTbNC",
  "key14": "5RPjs5LHjPJBRK5y3mjAskvLhf9EEMucbiDEAMxydRdZ3a9vuQHTgF9QZ7ZokAtiQNavGv5oBtvsanoPS5NNWDkG",
  "key15": "2JJxa3tZum6qBmvj4qJ6BSd3QxKj726eWRGdDSaC5uiLDokTkX8uiDnH47VKkbtqdHQuLRP2dDR3Hvu6b9TPNuSZ",
  "key16": "3s9Gcc2hu51Ag9e4c9GoeFdCxokd1VoKREypPmKXpQJsPXZFiobLKLuC3ohbKwz2EEgDgEtS4HAV4trZyzHAzPGN",
  "key17": "5VLgfcjX3h1Qw3qBxDB8edigGJPrQZBeKQyxeqTageJQCAy8gunLa2pJgVygbgtUhxFzHS1SVyaiErZSADK5TjP9",
  "key18": "4LeQx65mRpyziA4FBBYBE7FHxWa3HSpk2dXuB8V2TAJianFfPfiZuDU8jMS9AjziipWjP7hGEGpCxBSbLpLKVbLC",
  "key19": "3YwziQFM2VH8mZrvs9cjTyYncQciuk3FfmQMZ4xafiwdGMBCpMBXpgEsAo4gnJNKyKGBxUEJordKdPpmSjAnpbFX",
  "key20": "4iLb2b7bWg3jFaNQd4yVG6cZhUrb8vrKhEmY2YzSxHbjE1ML2V2c7zbUzr9Z8cpweNFS2bK6JNDjkgN4MhrJhU78",
  "key21": "4LAjpMhKmTy99vfvRuphEtgbEZ4j66UDdHiCYpphYR831zQd63qL1RopAxptCuFPZyVu7P8psLPakUY6wtCkShsn",
  "key22": "2J9oCbS7iTUfcsHmRFVwCdntYQ4kRWgwoN6sCr8ATidRFu3vdRsKr1TYMxR5QCqB7HXKuTGEf8zCjmXUy8APBcbu",
  "key23": "2ejvoEK3Qd5uBdb3xYNpSf5Ka1RJBRVh9kbNmYGGARUk1yASYUAtEWgyacMWQ6zdCBtsRd6xYtGwKt3sHo5u1hii",
  "key24": "z8jzNjJarMnzbkUDGRRmk7fKvR2SZePH4AAP6YxmMXSSiT62c2sDLYi7kVuCqnKKi82exTwBkaPQpNsuhf7E7rq",
  "key25": "4ELxdt41JbTDtV3LUxtCNVQBDkaoqcyQTDMYkmgsW2F9vsehZ76DLEMtvjbKydy66XwtwEn5WfXs6KtVyfmNBoVD",
  "key26": "2VXaAtAWV5BSoLo8pN4Hp1ii2ptLxt52fqskPdaBvSxgzBzzgrYc6NPwEmrrzYVgXr3MQKuP16M75rEjaddaHzVA",
  "key27": "Lbuhf4nGFKSyTpHb9f6cTHz9SYWRrALFPpPq5YcFBpwCzYsyGsFv9oqjyg93BfcdmTCXmigxS6yH5pffCXDHRkf",
  "key28": "5ZJB3CyDFVp8aXyjLPXm7LkRmFx2MLfrJgPovsZfvwe3KbkUFjg5eWhHRrHq5jkagy9rVexYCthphYSbFeospj73",
  "key29": "4KJq56uFmzhgafiUJtgUZSN4MN1KhZ2VtWUU7c8vaSsiEDiEfHcfMRE8okzZK3pMzxei2kd3ESyxyuNpiB8xu7SY",
  "key30": "5xvZ4fY2AY3BqG1rtwq4iEMn9QGRGi5s6wnXp89n23v2y9hFmWpoDR21wQGGdGv2X5dC6fkSdzvS5obGPX7oGSC3",
  "key31": "4s7LfhR1FEbUJyFggKDbNr4L4MQUoV8nT6swbZcq4CJjAXqhc2VpaV2DKyG1JSNaCriNWSV11SnwLnsGYnY9JAyv",
  "key32": "3z2QHLUWHEE9tygcsQzUz7DdNvFAuYhoa2KE1ZKj5GFZdFL76HkGwoSWLDKLqfF1NDPd6w9ceho6MDmaMMAEJFZa",
  "key33": "328sVd8UsY22cL68cbHeBQadYznPDyJpq8c1P9sMBzaHjdUkMRknUJ9FsrtSmztUPPHdvQuyF1yF2wQBMotuiSwi",
  "key34": "63eR2d9smxSgfkkT4aepCGnb5GuDQiBzsXwtcWum6Syt4uMecfbbM7D13iAdpvcqWFZKSb1cjRko78tGC6WhZHak",
  "key35": "3do7NQSWCT6vT5mwDqsNMkSM8zA1UVcjiNiYvLr8Xez5XWyyTB2NfYJArscBpkgQS7JqnzYkDTkNYkQikQ6TxDUD",
  "key36": "4vV6NMWvNyJ3NRdMgTiYvjGyQDL8b5r2eb2YvLFnCoVcazXQM7XDiEJeoBoXWdeJVYDC9F9M9ntzx9XASMTaQNC8",
  "key37": "imdxwa9nCPbSkHvF5zbr3Vs1TjSRyUgnGGeCsbkUJnjUp3Wq5cTpQyj3wWFAHqw9skBrCQZPrmN67ZbvAgPuSPz",
  "key38": "wBnc7qKauEfcj7h78yq2UmuJhCSjzAfnKKshZGH9d8aifMm8TAHJkNDrwmvhsNQpyu6BdHALBjiFwjduoieww3L",
  "key39": "5cnuCoRfoyQBJTeZcUmH8TBHvZ2vn6Gp4wPzatm7Jt5RW75NaNRuWRnteRsZ7ruoj5LVk2X6skFpzgGnp4QnBf2u",
  "key40": "3nYWSPynvoXCHGY7Svf2mLd6FXYcY6GYuM41XEZD8tDw2nLgKxhyBqsL7n5pr6LxC9krCSzJCXjvcJq3LTUaUen9",
  "key41": "2KC7PfU6jDaYyPfrn7E1pLE6smYu1WnugsrR9Zvf5j5b8CvBbiEqkyQyzJuZ6E3t7oErhN2C96PF86yYigfuLdiT",
  "key42": "2vJW32Vvz3xCsen6Bhg9G68ZrmZsdBoRgHXEFkNJ1QyCMBT7JJtNv3ubo8QgAuNoMLnaM3D1gWQ7sawGJAcqPWo8"
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
