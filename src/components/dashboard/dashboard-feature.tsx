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
    "3JGRSyXmAiwpAMzG4QefempVSwjzXVU8mzgHcKvewmMA3SqDaCHyvEyc6MVzadmZteXN7EUBVHdbwoqxT6r9DMcw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jwAdFs4WXZJFm3Bn62t8gJm6xQVdD4qznLiaudRPTBJq65AqkCTkSEookttSEBYig7uVUzjzi3mWmQUwdzDKn3x",
  "key1": "3cQzA6zKS2s8NQLM8M8KLE2mzeiwp8sW5qCe2KyhKwQAwoKkkPhoqG7TK1eWJVG7pRtWvnSnqw9wFZHhhWHVJNGf",
  "key2": "4tMsod729xehZzwcKBtJfg8iQc6DbBEXj77mJBeUREk8LNzGBUHN94RrcnYXD1VQ7qJADPuS7Dxp7Wu5dsWxsoYK",
  "key3": "PG3wuHH85Q2p72LvpQtX4gBQKRHWR1L6gQ5CTWuodTQLVqPqcSE57LT6d7evgwEawgKXN2AyTiqx4wVMoTzJEXh",
  "key4": "uLp9xjouYTPtv88wRchXjMQgW9tt88JeQuwAeY9GtcsitVxAVhDnSVqbBzQ3xx7QxevdSAMKKCHxAWzkwtWAAvf",
  "key5": "2Ycp3qJBQw24B3SyHVXJbVFwsAVFaj5Cs5s72RfdR8DL1QR65Zamop7Kg9okvir6zCh5HCbSdJZHBMKKPJtVxMnK",
  "key6": "3WxeUhDTNkPJKiDSgz3nwozN7X5tXqokeTXSxwSXfWthjBMuAZif34sUhJb36b9ZfymuF8kNzGMae4QD1Ef2mh8F",
  "key7": "XisVrxQsbJEHyhHoKibZMdyo6JNt1kXEVbTEzwYEJqQcxPMfiP7g8pNBRh3udUWESyViVbQMYW5N2iF75RWS6F9",
  "key8": "3K1gZpg1N3qmiaEau4CAbMzxgECzQCh2gbGqN6QcpEqz9VYpCiXpukLi9sZNxY7GYukGymAocNJqGn2XWNpX45nh",
  "key9": "2mSRkDojMS2GLphhFKWyze7qfe9TKkBapRmjorCPdwh9CEhFKkGpPgXZz21M6KbQZCnSQt4UcP3MVT4P9MF6G88o",
  "key10": "4CDQGPiDtTBVPZTAuE8CMhZAHxtSLbx5hW4cxAg9uLn6b4VtiwoV5nCEBrFW5Kw4bu3p44MFPYKGWaEqTgcenJce",
  "key11": "3RzndrGosGaTkRw29XvGdXknjBtSrYDYEuSfUsd4NoGfb8WHp6tKUhJPSz1vTiKQSm2gS5HJLK6s95fceGWhBfmk",
  "key12": "4h9iWCAbgHss7XP4fTmsexSwxyPiidkVzuNcuwUQ8tWrr7VEmRV2irSzqEssZxKMfGJyaTPqk7c57nJjiGWEUnZP",
  "key13": "63b7WCV2FRQVu2HMC8mBWrMaSJA59xhuWMgumVtUwDqWZQLe7CCt66QCPXTuzTiwxEmf2ev1AAqiwAKVo8YRsrGK",
  "key14": "35giL7ngV78AtFHSpbH25n15z5mYD6N4t68MESwKn6WqACqqxJiHD5MPFVYceATMGippAB9Xqfofiin6oCaAffYL",
  "key15": "ALbFZywdm75fYjQnvqVjY6KczXLX1axHjgrypdn5KMgR4MYJw31ceY3MThagrYRyKGoZN1pPkQTkucQAMhktbYt",
  "key16": "4PmpEPxCmB5taiJrDsK1HVft6QWs6LQWNREyf1iKERod8atCpsoXwbw5WNNKx3MrYyPpTdqcZbHJ3VbM6CryF21X",
  "key17": "yras97BrBUanNgBag9RobDxKJpoQ4pb5v2jJUBu3rnM1Bc3vh2sdBZrimPNz2tusfvTgFenFUdEfPQmF26BTfDd",
  "key18": "4SLQZJi9mVhQ9ygiCY2A28ZvgETtqEiuFhQTWULtT1v2XpVqutdZeVtqT2zpxtF65MxStUnU85uipqipGqET7653",
  "key19": "3btLkg2zjSa5VMc7ahkv29PQHWzqUz385ubc5L5Wp4TGgP9zjgipMEXDi2jR6ArF8t46kxhq28Bc9t4GzDZinVmd",
  "key20": "31dXybPo8Z2oN4koaygz5rFzWfayt3oh5k9k5DJiiW5C1P3hNfCz5mYEuKqAz3kjY2CHJEURzNGNtDKXUEw4Adie",
  "key21": "Tvwzsp4yHui7mKTqz9PyjwkvxR7dYFKe5dHQuWCtM43yQEWwEZdtTvJeXNoVenSmzbmz1kUWqix2idfBc6oKJSn",
  "key22": "4czUMJJthbTm7MQR82AxuwZfYDmiqkbxi2o5AvFHjm1rj5pbqyiywcTfVqfrhzSAGB2iZuw1iSN3mZqyvXmTE7tX",
  "key23": "49bKtTSB41ghwWmfVr7cm8Rdch3MxQGm5MB486oixcR2cDQSJZ6Wvk3Qrc4asxgMQS6SFceWP2vQTR7nZWCBmX4V",
  "key24": "5KJwDeRkdYQBmFPUVMortpwsgmtnPiG5u3Y3Au7MWijGcuXtw8589yeFZqTaSmjj3xF6Asjc7L9iUQNJNXN8SbWv",
  "key25": "aNY8An2mDf1BtCdvEXEWkfJ78qCDjV3vHsBabBZdCtu7uV2yXtzTGS9aX6gpZWJpDwozgLJ5S1732UZ2tLyBAwy",
  "key26": "2SXNZADRzqRWK7bgRHpNrZ6q2RmHTX93QEmnMAmeSfDCW1xiziyHQ5N29hBUDEeXXaLuNFkiuPZk3r6nWAGp3C8L",
  "key27": "tTba7N1xvw7a552rjVa5b8Z8pnbhV6GLqPAY96hqfU8MWLSM7p8dVQNTrv3k7zKQHcufYQxSVENsQzavrcJhZpP",
  "key28": "47CfCrdbVUVa2U4Pyqt7cqDeD7ZFZw5LAzkajbHv3aSsi5v6A34atZnNCtu7ZsvPVNwQWpB5kyP8axGfY61tsN9m",
  "key29": "3L9pAWFM95vGKeFYrqV5Y6TAXR2gQyH1wvEjr4kGSjJ4EjK9TKdcajMSfB9Gm9c3jR7jPVwQch4HHDPZonD3cyjU",
  "key30": "4GSj28khxTEDe1psvrKKwvJC1umj6Ts6q9myLBV7KHxLWWuk6sYn58zZnSMSt9QovirksEGHyUkv7Eg9cbaYjrWo",
  "key31": "43rTaPXh7GZMGeZUWqDhQ3z14BeFsTx5yedY6UKRVz9H9Bhhe6S118npDvwyjSTdVSVCHb2vc5rXgE2Whdfx1YzD",
  "key32": "2FSMoyDSBtfwJrFEeWfzbZnTCsLTxD5rZwkEwmX9T3Bw17gRvjm6rL98JSXbSLhGGesCLwgq3MviaGvdGU3MPGLz",
  "key33": "2PreisitsNyK1ShMpmhrZmKSTABaxG9x1LcKZ3voXgazoHufzKHMQ7mYT9RHZ4GfKhLGnNSCYpbaUdD2yp1YKanK",
  "key34": "5F7cFERbc98MJYv7qDDZmSH9yH53GdUeVcmptccheVV9jNFDEGWTcnTvqXWX9xfKeWbo8a3EvW2UBpC6MDxdU8cZ",
  "key35": "y3xz2moGq3xH1ErSGMr8nXayzVD3ZnYziKxE7yFo5rhksyDZCTEPocBx5E9awxE99Bv72rrstsUoYJWYuRKZymp",
  "key36": "5wQoLGzK9Up84QB9zUqEtGNToWrZ7hnrajEbS6iLaievvknXAKt4SssgLquPPq1F6A8nEtZ1h2BdGZELCx7N4ySH",
  "key37": "217SUB7jfi659edZgZBP4ZuzVFJVkM48DcJsib94vnoRJ6uA819t5mCitAGr2TzkkgVc6CuwZpFiPAYjVqfBNTfk",
  "key38": "2J61jmWw9cvnT6Mo2AKYCTfTdNFCAByTb44kokh7veoDgUU8duurgPbHV8B7EYXbJYQTTkJCTbtQKzw9VSHknLZa",
  "key39": "5feS15s82WmFUbuMvVEGG1ssK19J7mDVJK3LgAJtNx4uTy4WL3JEc946xSkyoWYzfvhs4rTCTng4qhDo9zjaHbV7",
  "key40": "3BoZNhWmUNJZsEkEXcAQPnkd2qMvXSs1p2n6fd2DvCBvhiJ2XibMqZSvDXcS5LeW2YqYdFbXzskFGfHfHQcxpRK4",
  "key41": "5mtBp6zkXx16tfTmEZYWdXeZ2SPznKseBCoPMRHKwEJnp8GT7wNoF9epDwHBEooxqX4qzwZ4RbjH4EicH9CB9UwF"
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
