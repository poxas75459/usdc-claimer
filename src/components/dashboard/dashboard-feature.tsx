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
    "jThJu7ADchBRbznv437YFXeVi3nqZC8swEkrbhJKizP9YdSCp1ufLd2bQ7An8iewfAz6LixMeEG6WPuVTCT9dh1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vD1DkHFQ7cuG7cbrgj1wVwzeZ34zd8hoibAq9VXs36SWLU8TAh4VCotNKz28sQGvuAuY6Y5bnwogvUrw43WD2Kb",
  "key1": "4KLVoo2GjVRdcsfzCJDSHzfk5jCgrsnihQzDv8oxodJww7C7GTeEGj8GtbHF3Dt2aK3cHtDPymWYLqW3Up4Q18ck",
  "key2": "2C6cvznADiZWhURnfQPZsWLWfrLFwyNBnGnQTRUiv1ytKwYEumZaCSSAykMbsR2XB35eKhw1Rs4Sd3xNvKdCA22S",
  "key3": "q8fwKKdSd446CGL4rP7CZh7Sa3vu8s9BkQa2TusB6yNzmfG1LD7152odLRAZpRto3kLpGmwZrWi2tsMtwfJqSZm",
  "key4": "52SKrTQzQZwiotgkZop1JZp5dYLH2UsMXbaAeG1MWNkswg9UyV9EhGcWVJGdXXdo83WQ4Ujj16DEuZxXe5yPaG9T",
  "key5": "5ZrNRqjYF3yJeV2BtoduweeA1q1KTWnrmHZR245Qi78qoWCNJ448EphNbdhre1GZdcqQfD3PLN4h4gxjmJQxV5S5",
  "key6": "4h4WpQ6HN6fpAMes9rLJNLWyNnT987PFMaSfKcR52QCQxyXvjsLkj6tAf7XE4UbqhcFDqvLWkzBGfHC6V2y1z6PS",
  "key7": "28tgYWVGbLyhHQxTVYYaQme93A6dJMSAwgHkA8oRqemYBLkJ28Yc3wQ5RquwpAhmsb2DC6iDtfixmv3VRe6dUkwb",
  "key8": "cbn9c3K5KnmV7K4WbiitDrAwfGd1hYtNwJieymyXios3AVGXuK9MJu2zVcGMhJjJYxZC5QRQA9PYwmPH6wvgVKk",
  "key9": "53QxoJ84hVPXPcSm83Uo8DSPi9zCVebCuhB5Vt8ynHph8MqnibXpdRTCdsog85rDVywcWkBPQHtepmFE4d5PQYNa",
  "key10": "3CgrLuW2BSbnBtnmAjLusDxR29PVJPPEVwKmwbjWog4BvcbfaP4Ky8ewruY9S8igNrccuaVDAXR4K4n8TsWRaQoF",
  "key11": "5n6a3WUVYtAf4hgb1YvXfgEpWshxHKFdCTNf87sKkWVvUSSd3DeeGdj7aveuxKoPNiCYn5YnsBUDnyMoEu2TQNj3",
  "key12": "5b2NSULsAb7qSxchdvfzJGnk3h1dYB1YMFCYK3ihq3L4HnmHVxxf6zVgWV6qEdqGtCLKtS5NR4CegVEgYdzBr63c",
  "key13": "WFpuHLzeXnkWttaPQtzpeiUrxmzLG5Lhf4hyaJHM3Cbc78i5RN4GunQnqrm6L5UxtP1TgiMQYgJnbB58oTf7ua2",
  "key14": "3PYm4dBjCCjx59BbiGdkb485gfHT3PeT5hgPepHWq9QFETAQoBwxQfeuDSejdfKi7JEKkNZTRuchBQ8zhbtgTn5o",
  "key15": "2GhnzdmaMGFmDrnxLqzeuEdM5X7tb3npnNFYeB9Mn5uz2uvgxNX2PfbXxehXTTHJgMCwTMeNATBj51QZhfDuRP5J",
  "key16": "4689BnkUbovZW6o6nQpDdKs5Pt8C3NM6bcrRxB6kDkRNLnyTq3Tbqif6iHsA389Js5KxRReM8KcWFjYh6iVD2s9m",
  "key17": "5wpGFgvEVL7PDmTiV2utUAuhuqZZCJZGhKPSPofz3yrLDarztpFbQ6Whi2bE1YWm3B17ZaXkJmHxowmGU6nKdV65",
  "key18": "3A3XMdMxtZkbMt3JDo1275cSqmdtCDy2Eg9S4TVVombZkMqtoSv2jHosE4KguY4LE3TBgYGeyP5iLPf8wdbGPpqs",
  "key19": "4iER5HJpqszKkP4Fz3H1rWRdjbAcvRU27isDa1EkCKC7K3nBND8tfYrcbpRos4CtLED239tzYyMwk2ATGdUc3TPu",
  "key20": "54UGRarniFjcbCx5nyFLsobAnfDgvXLbXZDNUUeLg8kc4abH5C2WbojD4qiEp1JiwLuieEJomJ51fNPf7LePSHGB",
  "key21": "3vH8aTreMvy3mSomvWa9SE15SXH3buh7upgRAB3SEVDfRCxP18bqdAbgX7gigKFdWsfKktuJSVWZk5Cwvm8WS27N",
  "key22": "2TfWXRcMMw7GLBrhcuhbBfQGQxQ4Vkkg4nYDV4U4WPRkJhue18tUFKbCtajiKW99Qq8Uao4AZkv543WyYrqzYcr1",
  "key23": "yvb8XyiCQuoQW8ncAsAioAhwLZUXAXWKsi7Uni27EuDFgqNw6ecTykafkNGu1sWnqa1fELauhhW4mx3PGjPxhzh",
  "key24": "3vuoUBNqqUV9kgeV6QaJKEdZTDP5E3GRuQ282xRu8tLNpqRgZGZMJfTuG9anhnZbwwNufPSFezRELVwbL27ES4NY",
  "key25": "3oLtc8CiCRjuxDHghRHnuTTVt3CGFtughd9tkz4f8ieAVvuwYMHUDeAT3kUj4ZEwVLxXu5rbpuBCFhwVRJvuZgu2",
  "key26": "vK2VoQ9xMZjsJ56MeZoXFw4GKyErrtRyNsj5ZyPqLAegtBSmbTiTtZv5VD7quNucf4ZZFVXEAqY3ku2mVTN6kxk",
  "key27": "5QxW2xGrQcoYoWpB1asN3mUc7fdsefiG5b122Bk67fLPq3VyA3nsSekDkMpdqNEcgBUzrEE8HP71uHJHbXojLjGQ",
  "key28": "54FpufbqCkfFuGQRo4nRXrwhNTotg6YDTM46sgqHdfVwVB1AniLNpUs5Mm1R3tuEqoArkuFhXRHV6h67iA2d3Z2F",
  "key29": "2Gfd2TFasRhrbgDWcvUaNcUytbojHxypPJbi8nauuXHFQS4LdVr6XzwuFefxE2qq5yWVRv32dRurXTAteH8BhMnc",
  "key30": "3odWBPXaTTD83NYPEAqn1f4GTLkTnU2nUT383t2g9ZZqYxYA5ZZvtCq1i8qP7guHdETCCsoEHmhDTHR7n4sgFNiJ",
  "key31": "3vJHVpQ6Ek3BMZqTVTmMW8rpKsDWtD8yu39RXsZfgcDTHmBWs5Yvhj2p19JygFU8Qda2jQoTZHPsVrbSpzhHqzT4",
  "key32": "316GtNGL1Ed72YWZhcka2UiVCvW5nAjQMPvQQWV7DT4hJbS4FtWMB4sSLECnrEFb2dsHQSBTdALpSGg9cP2jAYsk",
  "key33": "wrQzDtuaw4HZUZ6mEQC3ebbKoH8oRLj443uj8DQCrzcBxfasxcx4YzveKktpco5Kz6zu7cuxiAzhxThD6u4F5ej",
  "key34": "3c1Uf7WyQjYXPLCS9HGjmCGkQicfiTaZFaWSVHtG5ZAUt7yhdRQQgLnoJYs4EmVMjoX5tEvgx647NqLnTUy465wr",
  "key35": "53M5ADKuvq5ZXrtXStV2rbz1XS1J4VgfNftQVakjAcGJPJwAc5tZMcaD9xnG5beYCFes5fzgDEQH2RRMtqjrAtCZ",
  "key36": "5LJGbu1TTnsma1G4tyYbWXPZjT3X8U1gHff8xwh6P77XmpaXSwJ4PttkRnSxTS74hq7sLhTVaU5c9mVCWvTfJpR3",
  "key37": "23DBUzHaJ2piynvLrbRiGd9gZSjosiEWRE26yMMW2rTSVX4iyiuoGGqmo73YYmo6p14jmEzPw4fGQSCWhHnFL6M5",
  "key38": "5YhCNW6gRZ2LqPEgcqJS21HexqHYrhVohD9veFxGhzDz2eib8Ndj4zpFHeBvZhPq83xVPyaLCJshGjPgwrHyhx5r"
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
