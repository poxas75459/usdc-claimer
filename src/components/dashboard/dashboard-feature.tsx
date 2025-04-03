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
    "2SWoXxAtg1EcGpwe3JdBVRHbEPGbmmHiEWbwNgEoCH1rWGKFKDN5vUGyyQ86fRJkaGHSQ2Cx9wtv9ZmDiVhrmw7h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6kYC8AjXNZLH4NtSSoPweYV2CyH22EA6erDRVE3Xgy45FynGqVbeSzn2cDFuzCtdhhdg6mrj4cLNX76mtAiYtto",
  "key1": "3KfUR3VSH5iHAhneRMeumUoZmYciwNWkRkW36cFiP2X5FA8zwMJ5uJar2Swgnodjz875Q32yzySUTrd5qzvu4eHu",
  "key2": "22cuaHpykJr4yJoo32i6ZxsAg8QRwWanWqJaTAdFQ2A7hNXNX6nLc8PDQxXzdfRRLnXTL5niaE7c1Z6gx86bTnaL",
  "key3": "5HUENKrzTjVVENXEKgoj8sgk3KaEMBDDHBwmzdvcUDdaMsgCPxmgZXr9m2z69UHfBveA4Cdje7EnZdGQhDscZDeZ",
  "key4": "27gj8cJiD3S2KVpTuDZuC7atyk1Xfy8RRQR7pc1iPWxNZr4SDbFAbRc325Z8PpTRmqbqbpoEk7WJmPdT6poRiLaJ",
  "key5": "3Uo29ZUDCBw2p127GUahA4zfo6FAcBJcoSdbP99em6d4g2NAt2Ph2ybzooZpzA42PP6SNtV7mGQ3jwSk9WcoXXTR",
  "key6": "2aUVWpttpuJymLWiiuUeM4otCARwZbSVJGN6gd7YFKuvnpTGLgJ4H9vsauw7sEGWhz9Zdebrekieydda3aqcPnc9",
  "key7": "4TNE9gGYKX1egPQsMHJwBjaHMBKafCnR7Sw19jyMRbwrCqmHEJhuZWjy9B7EQWt4S6eF7NA7QWCXxCGk9iXVLoCR",
  "key8": "dQaE25LKnLsUko7fqyFghjhW1mVxc9CWBfd7F3P4zRcjCn6KB6CK5GAJwHZAY7uc3AbpFatBP5QsiMPiURdHTWC",
  "key9": "5VxoZs4sQw2XXzBjZmrsSmA6ooJrEgGeNZ4owTmJXNxVC3GAeqrwKHRDVU8CEWHYmFojtmJLBNogwo8hmT8mH9Kf",
  "key10": "KtRJrXAzcMPHNjRLYZgqdxdNM2tAeUGG3LYMxU5r6uCaCE98c3yUzoq3RmCjveRvriN7fVxTgahM4N3esXaQnjN",
  "key11": "2eZk9chMeXczTk6Mj8ssB8QrkyU2udf1tcFLHKj6k1eRx97z5BbCqKoxUnxRdrRyVjWDpottddTnbtdQ8WqqmLjn",
  "key12": "2VAw7VwjQeeYUAzHKreTBN7LHNwDTF4jPeWyeDDLtQkstf2nTKgRzbQTXhbmF11oeJeD1gXSfjAyAFnuSfN2fpQY",
  "key13": "2aD4TZiCYTFFQB3LWZB7s2WRpteCbUuZEwvUCMZ4XSCYGs88PkEWtDVkFSgVdAcEE3fT3XN38CPGsGvfMKbh96hx",
  "key14": "4P6oSUxYDSTriuUWska99YGkxNv3TvnuX5dxPLJhAGaE24skaHnFFCkSNkeCnQxqWQsC5ypc1uDVSMhBmQrz3F2f",
  "key15": "PHWFyabCGei7sfgyNb9wq4jsHkS2XN3GjsKfxSe15W79BFhKKt39G1kcixJSofhAoTND2WmMYA513QVTaPTAcTo",
  "key16": "5Rkrio2bi5R2njTDci72D4186Br61ErEyhqGnMz7CBBjLNwEf34vBzofDMfZmYBSu7Hbq3nGV4PVYCUtQL9XLwY1",
  "key17": "yzkuLng6hdH48WiXHQmK3s4oaJCjsDmk1zLHvyo3a5Uc1Q2PUfqT3baSbcMiFR6M56UiPWQddQUeu2sSEdGvvN1",
  "key18": "5D3aLfP53WMJAiaX6iVVrU2jKbnXDLN9maRZWb57P2p4AWc95GYpPDxtFGzEgAavqrEsDzfL86fTp9PJXofo5zbw",
  "key19": "3ffpdoPwnbQfHfLixsdSe7akkFJ9Y6JwJu1aFumYDySiGkjS6sb4BND48Ji67NSVoHMCnXrBfa1C3dBx3TYSEKf1",
  "key20": "37PZxDgZtBmPA2UJpkvGdG8fz4aeAmjjRtnGYeQBhyzcmF9GhgtWAPTmgBZZP5FRF61EPiWyaDBFJG7xvpxUHs2e",
  "key21": "4vBqU1qMrc8LizzTDAc5FGJSQjFABMHWb6LGHqAMWYvYKqhz9VReZyEtk8AgdfeS5nhHXhG8t4VQR6mKCDfdHPJF",
  "key22": "2MND6HorRFSb6P5WyU7ZVFBJrDif4HGgjSF55ka1jW7eZJdZ86txfn9i2Xkg5rZbPYUMYKre6rCMV1B3qvotZrLC",
  "key23": "2U94ymcDfBw1mduk1Zy9XobeYZSXyPaF2zk5ESK4ZNpmAKFgyydtHUUvFQvxCGh6wLNWRPaNAJC29vtQAUcK9GeX",
  "key24": "7q8hs5zzDMsQcR8MYQqiY2xS2nupyx5mWQ2qiTc63hH3jJCFwWM4PYRy65Go9GvdPV9JAibATv2t4knpD661mqW",
  "key25": "3xFZdiVWDZe7yi2s2hwD6zDUWiAkEK3nU7bM6ty9nJV7e7oN2qJXzz3Tp8rNxppfen9Rq8fW1cxG1RdELDam3jKq",
  "key26": "46kHj1gH9VbcVbuSskQ59iy1od9U5Kb3RpWBSEgAjs7K9DVsvPr3LMbRzSyoTXnCRw2cyuVsXNGDH6RYxwC3H8yn",
  "key27": "2ejq3kMepQadFrMaUQH2M9Z6mP2zSepxUw3nxWLjsxGVZD6zxpA2JrAi14wASeUVEh3vJjqy1YuojUpVfmunjjq7",
  "key28": "2ES18EpzC18U635YvzGN9PdLh6ptotBB2JcnLfrNcjX8JASgNpx2BonweUxH85yLE8b8RyPHs4LT3pJsYorUc1G7",
  "key29": "owihSK6a4sYoCgeinGhfLg1pUdzmyCR1hHZ9dtVCfhuwQ5Xue2JpqnAyv5WVoBN2vKLQEnCthWK2Xd1QHpMJcSn",
  "key30": "KMKZDbDaGSBhctsTmaNg8iYeBC63qEhX9vfKNesN4u15v84KesSCZFZZif2uEhAYfBozw2qrkgj3eCn3PNZ3NJw",
  "key31": "57YuWTJzfGdRh3xhWaXuFsv3o9mSeeeEJAEvqz2SXANwev3xFwQH6uSTLvw4V3A5fm7JHK53XzPmcFZGxAwcjd28",
  "key32": "3CD9De7o1JoUKazf9aMieNHVZAFTQ8EKcrLPMT1H5Kvvco877VPvTwj6WbmQ2Y8nN6HpHpQdRAavdGdCgUyud8tq",
  "key33": "3wBB1bVTDYoLPzJWw8s4A1ECKaWMoA8tuHfsVCV39MFG7MGfCcKHr5YnRCMUK3cy1xMqXGLiaxiJC3C9G15w9aUF",
  "key34": "4BE6bjtc4bQYgb1Qi6oRRmvmbtTCvXfaLwseX9hMyiHzab1hJgPVwyQhYWPnwnyMi3wo2XpLQneZXVXN5mYqtWE7",
  "key35": "4sNnNdAFjow48pup4m3u4ZzuoWcgRBmba5nN8fXEJU3QLFuzZrfNXe9zzFiHZGfGSLh3s6naGi9PHTvNzhoSHoMX",
  "key36": "2f6vy7Kwc55HDra8eLUHAPCgY8e8p7CeDZNbBneBeysTGQU9HTgsevSDpTijkmnZ99sinxzudPTVFbqMdf4jqjAG",
  "key37": "5RAhLhG4xzheMnNsEXgh4d7y2awJEeT51KxPcu1s3B9KyEN5RNmy8KdXVDtjqtRnsM7QBKdoyCpPJ5uehTadftUU",
  "key38": "34B4JKEejr1VyGVoQ3ZZsf9ozZSVFtUhhBXj4biR3GS91Lv21FDUBe16wrQhZWC5ApJM5ViSoMp5bWZpEER4WyV1",
  "key39": "5QnQavtyDgq2d4m3YVnUGmfrkjsD6nkKyw6Ku2tFmokrMoiAnAMZY65QaP1JcQhBkXjacdDdVUMpzSWwv3F4Bpe1",
  "key40": "3JVVuVhY6Q6yi6K5cRvuG5QRe5CUjLV2XvLUa28S41PJPFA2N1TtdNtd9a82YEhAq9YSQawyt9FLM8FeYVX9BSTa",
  "key41": "5LxjTnZoRrVEmVua6SoucdM7q2a9SjniTabR8RRQWrVpaAQKZfX8MC1ZLhQsoB74JmTZSEs6WKiY8vXatDCDabu4",
  "key42": "qV1FuMfV7uYHXEtYQW6PJ12LLs3Dps627x9hjebZGb7XzmbbP8DzagozdELzu5x3a6mKwLUUT2XaMweY3dBUbZT"
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
