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
    "4k1x7nZ8oADo9e9Fz56Sm9UYh3H3UFxGxqWqHruEQAJTGkD3EahTzfvPm68PQd4KNmvPi28aTeeNocCARM8V7mvH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47sEwph1AMPFn75pHVfJeb8pAXqUHy6C59hBZUtbrf9FyLSWoc3ipFZztri1SRgNxkmZs2enNFS3sLNDiDrvdn4K",
  "key1": "4Xy9hKHqSNTKV7oBnmkKbNZVbeikT6it6DDk6imossMY5WoS942YjVDspSQ9iKKdGVkerndKs5iAXMkMR7X4MXkJ",
  "key2": "4u9sTeYaQuYT9o4Ph99VD4baPxgkkfAnehqGH3Zojo12Tt2q4uV6c9mXTUy9VdJ2XexToZLBAAxyNwYJ1Rgxqb3c",
  "key3": "7zX4o6Mn6EmNEBdMRkdwXVKHATLWQN1d7kTMMAjH9RfHVEQ6jspjMMfUQqqhvkKCa6AuN7JQMsFqXUwZcuZdV1f",
  "key4": "vvRWJnkqKtTfJmkpxQMdrPSHPpYAYvK3MzZaQkVBJEVGoQHSi2XwJbDKXr2a3L5GJ4HPGu9b3HhV54hYTybk83K",
  "key5": "5xM7QUTA21erHstQLhyvzkoaipKUSNg7UvpiFBWBs5U3k5BwCHYMGkV3EkJGXJ3DAXMeaVVrcyH3oa6QieU1pt2p",
  "key6": "3wNpztVX6oUvz6GfMLXdAGHTgKK3XfJ4UYR7VS8QDcfSTmYCXA966hixgVQuXzMwbwGDNayqzrr6CpDkvcToVC31",
  "key7": "3sHKfPnGVffCjDUWLRKm3GtKkUajjzH9aMgRyFqNgQBbEdamMygi3SWjEt5bewVsJj9AnNZi1v8Buc9QBFb29WM4",
  "key8": "CLPSREQARpJA18mkeY52s59RLGfGfa7fciPYHNPxv6NB2MZowaVPLH6LCjkaDmr2TLnQJiDRuS5tdNHaLoGtwWT",
  "key9": "2XtyMBEFSMT6yTrjwD6aFB4ehz3x6ZU8zy8TY3QQbN8zsipsEBrbPkHYnWn9sGANrjYoK9gNS92o9KXv5tM8b8hx",
  "key10": "47xAxvi1HZ15WPQpvC61NVfMFCfK44CZtkSKfnqKxhjpPBFRT65CY9hpSGZZQH8HwQvcPDtCE8bo7viVCQ8KzFEm",
  "key11": "3qQRdXBLso9uwzuqYMjUp8SwdGHD2VQorfUC1HP6DLhLviuKgrC4Vqnvt3Ck5ywYtYahAMjGoXimCWCbKBPGC57M",
  "key12": "2PZQos213Z9DyaBfvwBvSz5ChwuTLDwTSvebQXjH1mneKqwDe9fabM4bYxTQKR7SSBg25xW4yDoVz2Pz57WmJ1kh",
  "key13": "5CTCv5QMUUruXYWkiPQ3q1V3VXHNDwyDZ9CjJJpfBipCpm1GjTEa1b21uTGdDRuwzNzT2y5prV1XdoQNzXKuQjUb",
  "key14": "3swcVitu3i8kKKcyjwyXah7BSDYHFRG4qhbddNLSpAanFiPMG7rAFpQoax3NWQMhLsujP9mqzgrGAFdzP6FpQZcS",
  "key15": "53KEzGupygq9rNtbmf199rnfD2VPq3m9yXtTmrAp65wdSkz3yKm8RcX3XrLgFW4fLhyhQPehwteZYH2N6Ecnmh7h",
  "key16": "2e5rbZhdQBZqciM4BRdoAFQpnxCUt6YsxMzy5CgELYmvthDuuaHK6wmqNbjiymququTcBwMtpBqVGhMFVtF1RALA",
  "key17": "VA9xSQ2dqouVoRAN3m7VnXajtSCZcPeq1noq7tAp4XjzoKp9BVRrGTBm5qmVn7Pngym7iHKDoSjb1CfH4j6QUwX",
  "key18": "92E8TBrCMiJ5rd16MKQRuQJN2mnAv32rr3KKNUZ96G9U3VBUMPT6tRJhnqpY5x4YQ5EXQD98U5YhuL61rkgaAjB",
  "key19": "2hs87taNQrv4UctS7MYYfb3LQ1wqdpL9AkqCCbxoo6uQqS5GW4rkQMqotTehL5tUJP475CDv3JCxtA1GoJUui9CQ",
  "key20": "2zeCkSySEBniKHUtypcjcKUnVAW21UMzmss9SrEsMLTAnTN6tk7RigkMueiXivAhwnkY3LKTJ3iaGvisYPnWvxVt",
  "key21": "qt5n7TSGpW8BHzY8jAbS98QSEutrMfZTtUih3Kj8Lqevr2HXrZQmhabyhYnrQZegit1wN321ckzJsx9idVEG9DQ",
  "key22": "4vToUM4t5ufxLXqrCYNVqqtWZpKtpRphJLyn9av7xqUCVrdPYcPnHfcfpeUrbEZeMLWfYSNmwAJbNEQ5jMmn8imR",
  "key23": "32WuPwB8pFWsnUymL7s2wGiVPz9uZDRwGo2VzymWxa4RYoQHjiQu8Bqu1Giw1z4yqKT3PP7FaQN8EL6P6kC4but",
  "key24": "3Ri7D1CE554NfxjbG7vL713B2CrZNqeCqfKBWVoDtpF9QydvRgMD5t68T6BgDXxrxK97mdBHPeJ8Pv5MB12Zygpp",
  "key25": "4Etn88xPFW1iboMamzpb45ucjmk8w9ySGTDciRpfhUvm6n7iqPnUGDqzRcjsqfAz7kmuKFXPe4voT42HxqNoJcNV",
  "key26": "5MPpA7CNZjbvT7V6hnAZ9pvVdZ4CiU6QmTiQJqUEg9AVQaeWJhS6XK1PTRR4vCF5oZ1wuZzr7RTPm8nw5YdommFY",
  "key27": "5yCGgEKKTbKKMGv6KjrHATQGMNgziRVSkJAjYFdsD9GTDpszpAdm3rgFWvBF9vBYvMv93WD8UcaYLC4D9DN1hfKA",
  "key28": "2Tg4KPo5NP7GKPfsGyZg85Sq4FArXEq2TxAxpncSD24jWvX9Ep67KcAcH9EFeyJtxggW48XrTzreG1P2DqznAbkK",
  "key29": "4VGyBvLAruGsTqZ6j8pGsjyXN1rMWT1DMVqWHqNmPUTkJKrY4yzbjBLcyjVuaFMkjydT1sTEjJajCdg4fACmfR9b",
  "key30": "YUBpMSZxqphAwFKrTAxudLy8FppuZhBbgJEc4Zv3gH3sakCLxxdu4dUfXVLZ5gxgVtdSsRUmzVkTTZsk2ukGrqg",
  "key31": "2sVpDkyS9fJzaKz5euffdsyoiHN5B8vRC8WxoSaHyegNxfSvhMT6EMZSCsuhnfs7F1iQMcEVpXQjsnkEeSbWjFzm"
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
