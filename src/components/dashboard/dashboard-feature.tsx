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
    "3rVsfioZTgfSmQzxjA5cYCps3YXiazgGLr1Y3Zzu16sNTchM7gAqddjbGsZWJwg1quD9nFtXWPJ8RAxH1W4yyk9A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fXNEeMhypm8UtKkDa16ogGRb881oX7kvgw8GybAjpMkLEGkTsAbGXkUVwBbmzDfuQVMcQukjB412jYbWWCAQyXK",
  "key1": "66ir5TMVxnem7QNx2WDthmm7EQsAZiWS1Cy6oUbxTbsNMYah3kG6N35Eqq1aHnFKqh2G9C3XUvpn4WGktL6twG9Z",
  "key2": "uU2pKf2Loq5CY8XuDrbe1Nd4ebjqW1Hj9FwFjNbdhLmcoM9JzSoTM8MZyu1uqnNYYyfbLafZdSVDqf56FHmVi8H",
  "key3": "5E3eFQRx2kLLT9DXaEGq5NkhfhMEUdUUh8KBG3YpwHb1EKgASzbwmGDFpmwLJVqzvh3zdDZBCQy6bw6N91J5kA2Q",
  "key4": "4bDF4oFPAkvZq1qmDLqSKPVoVqkZxHHc7JRc9cUynXc1NttpMprs5QRPtH6AT8SREgDPrnupGF3kXDnuSNC7pi8T",
  "key5": "2mtX23NJxiNZ4KriuzX5pFaGiceB4ThrbATC38apMomLhoc21JvBAT92SLC43jCaDJ1uwRExDMUgxCjA6yxRX27J",
  "key6": "2UWQdfSJd8b3WkTef4sPXPLLSjbKVH5dSAif1ait4PG5Qc6vv8jwTvKLX2tu3GrVTLo2ug1prGcvx2RPKSczWPwg",
  "key7": "3oWqmMfX9kdRjSMie2qdsG2gmKna3SPwdnqtpRoQDy3JBJZc9o3cQcXHTBS8SvEMDpwWXqiutc5gQn1UAvENtCSQ",
  "key8": "5FoRujJPNHV3q9cR99i8zhm4KrVU6ooVTG4VGoDB3H1GTfYwLqV7vewM85vgdz5D27xxWcdVz6rSnmPFmDLGAevV",
  "key9": "5GBHGT3tMrKaHLj363nCQi2P5TVzQPH1B2jY2kkMDZY14TonKLoejt9S8UR4wxMead1peh4UnpvZV18ceXQkiKTv",
  "key10": "5gfEfZ6yYiSs4A7q5ZNi6qjWCEpVwhnNzkyw22vwuuAiaqXFy9uVszTUJ6WJRNr57r8ZjsscNAk1tDhL1FWovAxV",
  "key11": "4f9k44PS9r1b9e5Qh395FFFgmitxuSGBxkuc7VQiqJfHGHo3n2fEYNX4re7pwMPrCVJ51MXz2Eeio9axWUVKCihH",
  "key12": "43ciNomYLFkL2o2JZBWNLkPVQFCSt4rYnEv4oFtNQik4pds3HjQQkgih83sEE5jDieh6AVw2YCygSpGRyj8gWWfX",
  "key13": "58rT44AsLuvkdVGgg6Bg67ivoaZHm4X7oczP9YCXqYym23V5F5pniBWDjQwfMzZ4CyBGkibQqHEsr5bx7299pGau",
  "key14": "4DjEkjSDGFeAFWerwTLcNF4qDFtDsspmmAd1zbmRQSYrs6dV92D8Zi99v8kH1sukmEK5bYqkG2CjTABTahnG2LeX",
  "key15": "2oqmbPMyd93rEYtjX2QUWWmkWtH6RoQqdMqpq7SAhMLbufdQWLeZqsmJyFotvdHFCwnSBAiBc8oKdqADWLSRDRar",
  "key16": "5VzX3oHLwoJDjUYbTLcqjMRg9eaopNHpZsk98hi5xMhAQP6G28aur5MmkHEuqxVGw6Ns1pdDnRmV1ZFodoxqVhtW",
  "key17": "2iX6igzSSDdzzdvejRXsdc2avEH5aA1JWf7ZPxHU9LnonWsNY6F3V9dSYZBLtqqh31Wn5sQKQfrun3h3gcSiX3jN",
  "key18": "4SCQzfUb1zRkjB5cYxEfod4UJ2qzYqBhp9UruQDNX5tu6JpgUefB6cdBSQLTDX7C8ZXeW6yuT73jFn9oiHVW8LK",
  "key19": "4e5LVtc9zY9ZnfhRv5D1JjcTZrDgkxRtYn38WMbN5KQZDGm8Ti5DNcy7YkFh8qF1o416zUKk4wo7T3LSKXAbxhut",
  "key20": "3RPCtBMo67uD6RiJjpsk3jyfPh7zQrSKq4SebCBwbjYLNW4MZpWgEVFgsvnLm7w3d5KLDCSqYkTz51ChEC7HKVcH",
  "key21": "3smSJiaJ7ZV9qtBAV7XHQ6c7bke2Wqsu33oQZeh7pXuuBPMHQzoEqiSY3CnyqCM9ok4cXhfEfaxKz5KETjC8zkz5",
  "key22": "2k4fFutzanZugMMCmDnRHFCnesqeYnKkSxkqwXsHLri6wwoA8akq6RFRdgQHyFqUD97cFURZZz6RH2XDriwSLhRJ",
  "key23": "2XQpU1Tcwv37TnhQoQQgFUnQR4iZCm5wVXDcSNmRy1qqMWPJhk9pBwKLeKCDMDGieZiQiq5rLQAT4La6McMpE5BG",
  "key24": "2SRYdd8oep4eY51mw1GWz1hWrNaZXBqBcitmuak92Zwm6PjcSnHXhy79LghfDSDDaWFBC5sg4v8MA6qmWa4am2Rv",
  "key25": "448R9jtP2PFr6MPxREN9uMddivvHk3ZKTWCxKakLY5W8ZMbQZZbNyGbCn9dMJy3ah8SvXqvvpxSZbM5yYHHon8PC",
  "key26": "2kTteCFMsBfBKnNEnzRFZ8eoUumAcgTtWK7APxviYx4P5nR783cdYWXZYwNUZUQPjMgAKnT99vnUNnwyXkUdZ63T",
  "key27": "4dQvSqCNWVW1ciPnHUkQBR6WKxAqFobRd25jetFrikAMsqpYVFWRDHDWSQmUxCxAfRPy5cFWA9UKsqNybpFirE3z",
  "key28": "21PQRfp4PmTqNxC9QJQrazi8AGSdK9ZveJ3xsPuseEYx13rc9vPT12PKe3pk9n3MSGVp4DNJL3hWmw77muv5mreM",
  "key29": "58hxfqicn26SzDpFeTMzpc4qKbRj2do68gTuTX6RNb8jkudcDt9CEop3W6qfjwo8WbSQq6bz93CMdY1j497VkD9z",
  "key30": "3sXb2oFaLnmDNs5k6DhcRxU4TvuJ1EGQKasoFv1cAWJNmc6x6wLj2PzPCoDLqnyjG32jrAUnGKBu4KRuV5Ye7SPh",
  "key31": "3hyAmVaoRNRBpS6mmoZbJU1ZRj2qVFQU74gktqJL4CdP8xiN4sigtRme14qw6oo5tvoby8nYdhWR3jb6LYuB3xv7",
  "key32": "5zKpATZFwhdd6CiBqh41MjC9dNakFRxSdzZk78i2ncQg2DQd8dVjAupMhKdyC6HowuaFFCCCG6mTcewmTiTruEPP",
  "key33": "5SLVxwnM6hUTwZnshRa61r12GT8uiTjZbzLVwHo2i7ArzfhLuQ9PNbDeFj9MXoBbRzxDXmEojxem7x6auVS2TpYo",
  "key34": "SBGdT9MmtRFtG1yqRCjXAbBnAa2T7HMEwMLTLmCRfCxVHEHeCtijokWkHL8wnYd1cRFrxGf6AGbU8VPBBgZfnfG",
  "key35": "2iSLuN8V1n6LBVaahXKboDoyiggj4kDhMwvn5N5DUVMuEG8trr8is5jpZcAokTnjDtPMyssKXJcstriYbWbsKqpq",
  "key36": "XS819CdfQyDKyQPLJWeS6Kyuj5RosiwMnvR8zBLvVZbNnYZtJeaKL9Hym4i6Vrfc8tuHGPXEAeYaTgFVVYrkQnP",
  "key37": "67VtHigdTcFUZ8kvEjwxn3iyUMH5tjYPzsq5Hjcn3GfF2tv6RVNLETQU4Aj14S5oCXM4yyNBG5drtEBXJNyYorV9",
  "key38": "5VAgMS25dkGy76dKyT9mDh8Hc52yMwuoN5Ho6fa1wJcpaNH65Nq7gDA947pXvKj1cv7R6wSb68DmTpvL8koVdCeD",
  "key39": "2moiN1W3si1KbKq4KFtHkoW7Z451Xpscj7rrKyEGR3YKAx6ViSN1mYvupEKHRbaoeqaXFpXx6RNP4VDBHnqejePd",
  "key40": "2T7jYCch72xF1JM26tGVMYZVCD8xSWNscqMUzNwX9SfdjUdiAKMcbbyBpmaKtSAqBYskQb9yfZoMeYP4dZ8nuEEN"
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
