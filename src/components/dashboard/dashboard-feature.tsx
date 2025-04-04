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
    "4voJLEnE5UuMVCHptUBJhzLvfbdKQSDq2gELTwCMsHw1y3D3HXUgCfPdCZAe4p8rV5Q3NZegUuwdKgDXja9vRL1T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ndqwNoYi8UK4hEgMKQZjkvQaBYqDPyaoyQo1HqjAnVmHpmxxGFAtbSfAQwXmtJftZCuAM8o7jEjsKoxFXcYCKWY",
  "key1": "54vEsPJ7HLdtzSayiEGFVKiLeeZgLmPveut6b6Ev118FqSKrCKHdfqWDMk5Z7jRr5enwxyKX7SrGzLEx5QEQe4wY",
  "key2": "3CVuUTSKoHafBUWRh5Z3jZTLGHRySKq1JANG9Ex2o1hwU1fnP2S6Jen4RG4TQLKw3fK55HUxfNuhpAR8CNdMNYx2",
  "key3": "WgxPkcwDW8ZWEmTvYpNXDpP6rC82jqTe9C7BupRkCeLByA68oDRMQPWbKndaNR23Z6FAzUVzcJLpJdusPqHaXsL",
  "key4": "8XudCcR6B8627X7WL6NDVnfYbUxqiNbmWLgqqDdV35C5K7VnBt9V9rUWK1cM5Zmt7Ja9peuBxfkSezwqNyyrtQT",
  "key5": "3vhtrpLmd5xSKAux4JjSaUm9i2BtHG7FJL5RFqm2ubdZY96UKvRLD7k1dBEWA8NcUcuZfxSz59iGqr41riVJr3uf",
  "key6": "3Wcy3ELjzyUamLhqmHehRe1Czjt8Kh3id3ioASHTPKE8D369bthWbbufAP8MxpgL8MdVZHgQSJFn8RBzRHpsULcC",
  "key7": "2wbtuG2tJrN8rfNmwgC2Pp42ejzmnJFzJF74n6n2Q2CseD1CXZjMiTucgwezReYougJGLn78MQovW9hetYyaujQJ",
  "key8": "2AmhRtALmBx611ESNHig1S8d9ZAjZPr7PCQZLJsFQEnLgFu7M3smSgPWAPSyHjic7x2wN3XksBXqrEtgnRAxhRA1",
  "key9": "4WcMdjPo8zfbpnfWYtY4yydMAeS28ZUeyQrPzmiT6gx8kTyyh8xKbsizYPkgXVT6rAyMJv2QSrxCXbkj7ob7JoCR",
  "key10": "5cGYbVtLV4hxiAYiSfjH5aDgnrUjh51t6CXqvZdY43NYdYrmvtpxm92oKdaZiYJMLup1N8rZGnu8cdGVA6Mq9cBr",
  "key11": "vWxhrSa8G4ja7Km5MjN7Sb83zuSyjTZNa2Uq6W7mCpeyNbnojQS2jzD7gkwegVCVdRyaw7hpL2dBf7hH5inxJF5",
  "key12": "4WQyUeKHcAZVQqubjr2WAL2RLxHzubN12K58eDHW7ycjbWWYDtPM32HwDeg7CewEnLvEyx3mf9nU3XpzeeFZoXGz",
  "key13": "5dMxsTdAuKMVVT2VtKuT5zD2UkkTwBP4vjezkZv1Dn3Sk6kDi7LD2La8oBve1i1gR2C7jwo9xdPjA4GppuCgucLv",
  "key14": "3pvab6nvMFrAyujoFhCmoRGz5ac8grgL586JtHBcXUbzLDje4gVevTcQnyiEDkGFmPgpbo5AxpyrXDwrv1njoVYn",
  "key15": "2VLHPDQPN6C4GcsfB6TwTPMZ2bn8p78ayehywH1UaGn7vxjVR5dYwBE9sTREoff51BmzSiJhyK1BU19gTLGXLWFN",
  "key16": "3vxgt666FjKtcvhECr7pMbrKfG7y9WywiB3CQfjDMfaaFCBaraNtTYZgCyq2hN5uaC8NKEBWPC7AUz2TRdUh4UUo",
  "key17": "5TkZoru1yZFpc3qfTB85q4ZEzPYJ47W3M455xmqVttLY2CGjc8vQwsN8BtsFeAPdC7BrwnvJQFqevg2Zd9Q1uDRA",
  "key18": "bL7oMcZ3hJyG1NsYkHfovtPZu5oHHxAsnjYz8vVTaCYq1akzVoEQa2MALajptQLDfn1tVBAT2ZRxpWmhKjpmPL5",
  "key19": "4Ws4L3Aiuh64xuxxsD5sUj4DC7yDopMKe4G1Lc8kRNPtj4Tud1y25punu1qgtQkMMjbrMbNjJ1XsKCRF7u34GwR5",
  "key20": "4LkKMmtAhmcZvN4qws7WdkEj3j3ybg1aLA2tsV5z72AjdoE2eQzEEtLX54iWxArjiGKzLQX4T3fmNEtaefiFtmy2",
  "key21": "Jox3vtUXz7zVhG6BmdiRYPff1wMsvfaBhNsbjMqqE9jiqSMFDzzUgANiLcxhXw8QyKumgVK5EGzPbaJmkd449Hn",
  "key22": "5yUrjhrVs59orfrM3LaFwbC9HmTNjNKbU3XRU2Sw9inqncv2vQrvYB4LTmgSn8tHdsp4XTsAzJvYnBmCKPfAPTe7",
  "key23": "32fohkgEzbuL8kt6mESC1wtHhL7uyX7UJ9ScFi9fCNf6mowymeQAXDs4JqTbzeNrfjkMd3USoqDG3DtWhF4DVZDC",
  "key24": "2DhgrdNpcgrHwvkUL9RyYpuJjVPk8d58vjXAtAEpTR1AuhfQXP1gsUMUq5dWBuVHSkQCz29aMrd4P3KRqxU3azsn",
  "key25": "65FeUvt9nYusnNtZqXG6KgBmuqa2PiDDKRZWTi3HZ17G4BHpuZAJMLTPErpVo7Yw3V3zWj7zd8Rj8jWBMgzRAGii",
  "key26": "2ksHEtJSpN6UaryMpCGABHBWhCAoHEjTYVasHq8CMerSyssbhPVdwGXxbBfZoNDH4uoGq3uf272PaxmZKLo22aVt",
  "key27": "5ejJnSfHsta1eKMKHcEsqMNpcZDs9iYxwyA6NgLLQu4RiKhd718Zn6YwyvbqT57Ft6nMdPUNtM6iKpyWLdsaK1PG",
  "key28": "4bdudxf6aEjp6QwLFj8kiTBTPctQRUEUHGjuVZN6hmNGtPAx4pa7iNjMPpLZFS9CqsRAe7JV1BgwcizruSLdB41",
  "key29": "4A6g9UmqC9xd9kXqpDapFLY1ZQZRZaeCfMwxGe8H5rBD5HZacauu9XNsdVdHqL9yfDURu1VXsQMHe8dWwi4NXMr6",
  "key30": "3WxDST9xbtqR6hYxtiUHPMzZWk5bT5HTp97xyWvrCA7qeeip9tEgjb1pYvjxwS75Ac3PT6uQFw9qxaV3Z7bRfEB5",
  "key31": "23rDMjKhj6usCrxMsCThSf9ZGeygK9xitGhxdEw4Lu5vkyQ1QkwzvPSX72rrNR3uNaAbsq6ampnG3aPipYLnGUuQ",
  "key32": "UJwPSfaX6DJb5avBVovjc8pZSC1h1VQLbYUCt6vuSUHQRmSjmSNStPphYrsT8nA9Yb5YJ7C6yDe4hvjdNMZrDfp",
  "key33": "7Nh5ZDySbAp9mxSDQ1Mnw7i3EfscmWADuhKtkGdFBZAa3DeFHGipzJ73n3G2mMXBHuoSWR9PnCdWhu6c84hzZSB",
  "key34": "24EGQCbKUVqjDogQhGLXggoDRtpEMbfTLw4CKFxqgoGaJ1eMherWMs8XzEKwt3wYymq8MPLzhcTX7DiCyLUt5buK",
  "key35": "5HGeuvU4qDNFxzCtR7fcJqGMzPobTr5Ue9zZs2UcB5aZ8gg9ERcDKEfuo5uJ2LVLJct57JwSGjRmWfbKQPnCTzDq",
  "key36": "39KoQm6pRqRGLGhX4QgqxosuPYr9NcyV9i2tnB1b2BoeLatKYLNkc3JyKnbe43813x6qQi7seUX5E2tpxyGE4zzB",
  "key37": "AKGT2SzGMm9FkSxP2a7p1zJRj7u9DntU4adjPm2mZ9LvZhgT8CFsmLWFGCC6kMQPAjV28wCQ8RCSdVa5Ji9jGtZ",
  "key38": "3wdjQve4z8Unh4XoXLi9JEfnPNLFgcCamTRMkr5PpwQLKD6By4jburo3YAuM43MQkNWiFeQzYXerYA9ZgH8Vk5fy",
  "key39": "4SA4vsGj9mWNKo1yJr3rb2XPJNzbGw5JPW12J6zTkemt15PEYQzM1C2ihiYCegJx1vrP9QfQRgxXmFvt4pZNg2oc",
  "key40": "3CZBWt3Mimwgrjkspa9ALPXrdFmEGGoC5yR3i3TPHGLv3ZEojbrpsMQVNn4Dp127iP2cjAvRJQeTeCXcHTKC9nza",
  "key41": "WpUfGYKHqp8E6bDppf8P2V9JyfQ6myoN4H1izoYCjDfuEsvjBrSDAynxauY8Xni7zFwNexUin479t4Kr26NY5Mr"
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
