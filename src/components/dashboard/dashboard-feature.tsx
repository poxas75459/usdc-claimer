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
    "44fEoznF5ySUvP7SvVnjGHxpHS9MD7KmNRF6uvadqDWEsQhisY4WFLuhNMcDmZuvyU1bSqMGjwqNgyHJnieYRoJY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E4Bhfd7fTvQHDjLHraGfmiQp9uLuDpwRtDAE1t2RKUfaCruHESU9Vnw3d3Easp6GQzdjFLfHR9nUnUyU8kEuXKN",
  "key1": "4R4fQYXfxGpBQ8Xoyn84zcRa9kA7FqqnZS1EGzg5wiE1EsTR4wuAMCgFNvhS17T2vupwW4dnw3TKQHsRKYoKJeEH",
  "key2": "2NikW88B55WeeM295vaBLBeczm75WJ6h2L7afhFk6mRVXCNCjv7ouVjJhe82J2mmeVAcWkR4pkTWhSvM7pUcNWfH",
  "key3": "62afjyjHA1zmoFCY2t3xAikMHhJe4V3Frd9NtpDDMohQMmieM7BZ11RKSNL9yV8gMhZmd1jHHJua5SVsdahpmUQD",
  "key4": "5yYeFrzP39JJJpVZ37dfG2jSGgFGDQXuYoaffsXmToVC5fSVnRkbCjy2i7iNXn3AZYawJ85Mw87v95DCDjbzmz41",
  "key5": "Dx8bPsveEd46Vzm4cXt2g5vTUwc9k9a1mih6Mvh2BwqvKHMX99RBBtnbkvhjwL5Pjxapo6kQycwmGuj1ybbaR5X",
  "key6": "4kR6MtNnxy6vLfnq2cgrHReeqTvMfRYxVVTf4QJuiphfLvdfvdT5yNtZzG3QeojxczVqesb4LuaNihHsLh9m56Tm",
  "key7": "5Lofmg3oJ6kdo6SDf5BYKRoimdXQPQbGZdaDfJcb2chxK5Trr2sfsor8GEYR7G3ScNBGxHJ8DmwavduNCTbjgC75",
  "key8": "3c2T4Kkds1TPNof5yebeKsSuHYkKq9W4Aa22XEiU1ejwKs1DA5sr3hcR2SCgfdqHhwkPi1axNAybCG8TkpP3jwE2",
  "key9": "62yUfb17DM4SuLJBbh3VVjcmXG5gxjxKmjYyehLA1i9ZsxyPumuyMGN9Dx7EEkucsE2BpqRBPrZCjw9E8jLg7Lvi",
  "key10": "4gUVbJ2VKxwq9y6565AzX5CtmjcoSM8mFXEg3VQecSEG1DyoLAzQyumSNP2izmjGroe4me7NSz3uDdFJLPSEka9e",
  "key11": "56srFnM4wLcprcnQqYt1WP1HDzhk5URGK9H7KFtXmTmXKfiRj3wzSGubGovtcuMNgqDS9uwtGurZiap7Xm3pzr6W",
  "key12": "53Lr1fa37xpGE79Zh2cbxSxQpZm7pZZgWKz8CCBXLtocUGV3sEoo3gmZ3ZXw4M6fweys7ZLE4Z9c9r3LyH28sSmn",
  "key13": "2iAHoo9LQUsZKL6xmtit489xC1xFNVW4jkKswNQBwP6RbcFR3h1QPQC32uRD8WG9jqgK1Df51muZEeNA2vjYwp6J",
  "key14": "4u8JBVuXZj4ityhzA7UqyXFEczzQWGZe5Uazmzkp65T3sx6uAqNNAjCKLkmkB1sFFoYQpoPwGriKPQGSKbTD5N6D",
  "key15": "2LeCCi6PUa8mrA7oumZMgimhixhpv8yq4X6JKhtsR7muNwAZ9cUfNsaXMubQcor5XFxdkQxjXHNdGUjt6S4Ruy5f",
  "key16": "66oAwJfx2ueezW8rusyaPwxakdJ4A8QB1MX6aQRTzm5kLrreSVsfBLQ9LHzdynXH8fez5ERufR2ANx6HYQHhoCo9",
  "key17": "5SwLMDC26WsXw43yo4QJ2q5FKJzurEeR4J4MrnRpWHZrU94CAwG1ys1RkEnfNBZgJvKiG1xffXmpt9kURCAYBK8m",
  "key18": "2bBnN3DLEMq1Xiga4fcNKzuawN3db5JfdMEgDi8xK24obK4fSrL8CWCTNjqwLBU8YB9TjLj5RCbJvx8f7qRgpLjG",
  "key19": "43PGXzuqnQxu41Z4poSsnf4ws8GS1yhY44b56Ud2wJwG6ufMUJYJANva6PN47fBop2ZBm3rL7ciwyJmGdaLkJ1tz",
  "key20": "5uUwep71KNLtcLbWY8mgy1povaUtqner9HoYSQt4eoV9dNSTiMMEB8AbdhAMVUx89WZQnmX1PV5fTUvRNJQqv5hi",
  "key21": "4KrD4sryS1FEYP9T8moRnxQWSCDkj1ab6PmHcanoPiE3H9ow3dcujFSTcE13gv5HPSo1yjqkKktPiCge4nvTQgh",
  "key22": "3uNEMqmZA5sT9CfrdzXBUC5if7QWKenmxtuxv7Qicuf7RUsPvi5kFBZ6pYTgD2pTiPRdyjNqYeophJpdRD6iHwHv",
  "key23": "61ZtCYeAvRoLhALtj1tfcNZygdGaNuFM79aZaAs7oWqhpYtjjim1CJvTqM7jonrzGttvRbSe923cNhp2wNm33hz1",
  "key24": "TrXHiC4bcpWDJGoBHnqw7XRNxZJkZscLztTKueJT5GJybyJbgJm3mJwWgo97cJYunYQALivmLpnJRkN4ULtVVNQ",
  "key25": "5VE9LrhzFVK86RxVtyQCQE4mdfzpBA6SW3mCQUaAanTYMgZtcGUC4Tson6pyZ7oEuc13wuGxXtkrJyUHemDibgCt",
  "key26": "3ntnbi7iLdzjbN6Zo9Sy1oYE3sKfgeWBnAF8MKkqAVZXSTyUMv5t1u4cfnbSMiSETRzpZHAs9qjXPfkiRavY3AEP",
  "key27": "4ZDFLHH8sWMnDUBWAeTqBkGRxKJAPdaxDTy34ZTWKoBPJK3QkMLtZ3vxD8tqEMCTpfURua5PRWTnVW1XJ8C4XSLF",
  "key28": "i2H1S4gZXg37hCgcjb3rroA1GwNAb2nrcPmF9KBF93niF3kssKzRJsdzUJA9JBQ6UfppEdSi5GGkd6L5U83bT11",
  "key29": "5KkJV9Amzeemb6fDxF8bywh3F5rPTTkjDswVhPyjhGLEZPEwRHcAURB5dKWKL4YnVEx4TJmrubFrcB3T5p8Xdtvz",
  "key30": "5GmQiWxWn7RDBZeH7Z4Qbc8R3Ey8J81tG8bZXU431gCdKpJMPKfGqjER8uPVuxCj4qPRHzVsDDMzg6cTSBP7T3eB",
  "key31": "256GPaQVNGTkAnfb2GtohhSBwsx8RMoRLUPpC6TRNojhNxCiXfZPsUckixvTTWsByqNSUoKP2pg8mKVEL4krihxK",
  "key32": "3oRTsNYtMxNpqXJfmx5T98vfcjRiiuMzrEA8PGpoBpxCLbNHA8TiCLSJiCACSwCyYtd44yJSZwgSyYAeBFEqm7aK",
  "key33": "Kryxg4CP2xiCZeXzMbjJSpaoNtusJ2JTAZGw2fQYhrb91oyyo2wHPusiQpYNEGt7C9be6LWSSw6EhBkFtVjaMJT",
  "key34": "2HCYDrN7eepQcTzcaEvYZ1ztT6swsqxDQ1Xy8p2yaUKMyrc1aWLE5BTnVe7egxGGtJVa4XfLC15h2ZxFWH2d8KQx",
  "key35": "fe8PZzNCYK3WQqCKNB6ZoS4aWBaeiXfgW8HQFShPfp7btBso4G15VkefsPuY3ZforsHHJdA4ZAXRRw17vCA5RJK"
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
