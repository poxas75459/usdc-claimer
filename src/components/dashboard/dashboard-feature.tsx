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
    "3eK4wjxh5eyC8gLqx9imKcyp1PfYkcjgJAkNjMikA4A1byCnS1ah4tDuayorwsH7GkxhdTf97ahLi4ZXCKxGeb8H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CY9qGv9mzCVjJRfbA31moFc3YMBH3F6K9bNwCy1YrdTtG2LiCrojsCbMKTjDoq89XgmvMZ6Y1Utn3VMPKMJKD6Q",
  "key1": "SRJws5kuiVoWsexbg4BnkdKiEENHZPpt9njNVK3B9fpzdQh8WPJBb5ZxadN5v4zo8xRT39DcyS2MWbQZCwaPbxd",
  "key2": "66JXxn21QpmKkTmsrsBcG4RJp6zbrfgEY11uwMHGonxNJPQmZR7aCBRT6D3d9RMdPXzYe3zmzzqgupHPCikMNY3c",
  "key3": "5o2x8jk3phXAsUH3hNr53EyAEj35S5DKt4qn14uMsD4yU2tf6jyPYLryJ4VSaNbB5CEkn7kU1ZPkmHPntZGsa79U",
  "key4": "5fRhyzJ5NneiB8bRCcvFvCr6YakjbTBGRnPC7zBCtQ1gvvjvWWokc7BtUxjpVnPAWS2LLLuAMVDHwt3YTsNyL9NM",
  "key5": "4gPadLvCqHfizEojYzvdfvEwxMRjX3UceCoBhe95dhAQdKcLfXp78aWu7YDfWM5yReSViA2YntLhRhBw11xrfqme",
  "key6": "yyzxCCqrC5oaquZN73m2d8uMNmbLaJq5zdmzHY4CANLsdgN2mneeM162X4nLFNP2m2tNfVX8nsvazSs27xPBGTQ",
  "key7": "4zuy9d4yVuJUduJZn4QuhxhJEvghQYvaNqUUStxAtE2xh3gbgSzoJfT7DTcqz2fPKfsmJETpCas3U2DauGP5M4WU",
  "key8": "zngMRiLcMEygNaXJT1ekk73AV3GhxfsTprrLe6YBvG2S6SsZGxVXhguzjuxaiRYEe8tdjkgPdfzt5cXQVa4Gjmf",
  "key9": "5Nzu6Lr8bzZVcKjPXFx4dWCLGJb8Kuh1zfiAokmd3YtVp8ujFkp7wapNTMejE6q4WTHk5DSfbNEXtLmNDu9idkYn",
  "key10": "3LjpYZDZU1PFiGm7BfySY8BuhUdbZomnYiBwTZwpaRnYaLSwzLSkS17mjYE3nm4TZRG77HSDBxzj6WPKnTdzUjGo",
  "key11": "4AJf4bBiRQdv2rmCTgJFmJvJaNXj7ypuG77r1GEjQyh6By2iJuiiqZpxW4o2yNi9Nydjy1VoXPJ4GkpCUKvaTFzE",
  "key12": "3mKpWJ3Jvgb1s5vw31cqPi1ijzenqyhr2dESrEVEDk46uTrWaLSAd4XrL1zu7DKXkTVRoAd3HjQ9Z4oVAGrwocd6",
  "key13": "4SWDceiMrRkM3PoqQ4oim5MwWDFj1ELnEKB381zdkVhcdFpMCPyR2Hsae1cLFEyBki8hgCJGXTqFwyeEiswPx8ay",
  "key14": "4iwgWpB8ZWGGQNveXYQAUVKYQLZ6tr2acTMDrRVs92dfVjgcTmKADUTEpN5ivu4h2oyM3fGGTE3j4Z2fJYX15CSP",
  "key15": "2fWiFZ3cv7mNpae8JjJ9MGBCq5vFhEp6ZTZyLEpaxovDe9eS8hZXxGHwqj5oc13icrnw7bP8Ju4x44sedtckxVHS",
  "key16": "25jn7hry2nXXpXCyJHSsDPDYYoQiqfV52J32FHe38tD9EuvnZATka4sErGcogejKyM8SuQzhEnPxfB5oV9JwvjKJ",
  "key17": "3SWNX5XxXSdUnXND4x98yQjwXCJAeHHyeXqJTNFgy1DgSrz29yjypxBiJ8HSCEYGiwgn4ae5QnNEf42FUX92QHy1",
  "key18": "48qYvgJD9YRhCQh38Jh8gjQ8KafZy1VfnvP9MpH7oAeexBuXLVZLYdw5gdJHnL17GfYpC4HMZ6pqP4naYDEXU179",
  "key19": "2MLdAfZCXAWSUuijiRFJNvwa2RUNJpTzbP15Q5vyMJ4TrjWjrNqfT4pWusZ8n1eidtL5AjxT8kRSkNvYxtF3Dw2R",
  "key20": "5TdAteRA9MQNxtWPGNV8SuUJf9CmwJDh4Uwjqb7M4rRkdDF3eMmDGQa9Z8Sm52ZM9CNX6qpByjE26Y2vXEKyUMyT",
  "key21": "5Udfdjjgu99GgWFkpjBPf6KQEEspR7uwHx8QtXSvNnXrfn4Avt4tq4CDf4B6yH9awCvV264dVTMPjh8HvPQtmvoa",
  "key22": "28WpsuVRawd7CQyjKG8HuvtV5s3gj4oEAbVFHeUf1iMib5YDxCZbW6E3SjKtPt4Yx1RErg1hBRSeMtwY75F8kuYm",
  "key23": "pZmRKYYzNvZRUvu1cTpatp9QMsGoZ5x8LE1S3J9YPVSvoHpF1LHQvN7CSbJSNjVc3pJdqej8FfuLTTyr3f71UcZ",
  "key24": "26uMyuv71frkmUa8crWNJAdgdKcKbbjVhyRWQadcmfodTGXJUXk7W2sDcmjwz8oKW3fpUnT3NhTV1woMsB23Bn2d",
  "key25": "2g8qtH6scjunumMddyY5eTMnnvQxri32LLCDUMVbGnc3RuYL2iJtfy9wixSVSgXQW9XCR4B85Zjiy4YWuYjGetcn",
  "key26": "JDAWDRtz1JEhD4uQ2P8rAsZqQTjTvR6e6x6Q5GSqGXRkSgz7vSzNfRnfCTVR9KTh6GNG6rHkySRL7dF5QyT4PVE",
  "key27": "3FmTZ5Pfoc4n7SFuXdkMQfucWi7GoGANQ5eCJPBaLqB6NYcmye2wR983AhhmNn3Jz2ssE5fXg3iUt5KqHkwdKnhH",
  "key28": "3egupa2mkrjvZcWbgtZxuZNMKW4avDJZBE5xLdNFcCg3XVYurdVuLGxghkR6GDTBY5Pr1uKckPxTPJ5UVe5ZRtQs",
  "key29": "5MBYTsPvGBZ8UyuwrNaFox1A6KhWJ8YoCkGPQpd1DwP84p8dm3M3c6GgtL8DN76dG3NkBFndzQFE3gfuVBRmEhwB",
  "key30": "35sr4GVEZRm9ZmbGrna13c6w9riPjgCkAK3bVGJuDxUQFRqyfzjYrjt9igqnoffkmKLWyy7tFpR3MENDRZXvWo7g",
  "key31": "2fJ1cmrjFmBV17ZTHG9KFymjWrMkzPkYBBthwEFpcyvmHNZNwjgtgqUhGD6Nf5vPtTm85uoq8U7jGt6X6GmGoY85",
  "key32": "34DpBTZqiGfLe62MpJtJT7tWWgK3DdDhpFYx6GUESr1F9Uy2PZRcd8rMtKJvWGktTjjyj7QN57FR1FXSHsMzjxRQ",
  "key33": "21mn5hDg22VBVZrNXkJXcR7AATH3GjqZgR1tS1Wp53P9BJuKRXCW2tE2oJuncNVM8Mb8CLjZxy4nj6BrmwonGPcf",
  "key34": "51uWAp1SwC1eJb94kLfvp4jpg6K5mjHU4LkPMttzQMTV9u7oxUBpT1Hww12jVSKg1PHRf6tziePvFNrUMLwasqnc",
  "key35": "41F5ZJWs7ZtzVPRvYML33gg5ifhqh1ztqxBusWmAvkhaa8WJQiY93BnjtQECuwzwcRxuGWg5R2hysW9Tu38Amc42",
  "key36": "21Tf8ajJxDhiKFehRcJStTRjYbvsUczJG6FFNQpxsvfHSPsDxVHejZdYgMd1eb8JvtRLRCoaug8UvYLFx4avBApa",
  "key37": "RyJxfME1ytgLLCVNmALZHAjSJZwyB66e5zTRPwZtDwxw73fW9M3GDwKc3j4NKfnkaC1YWbSyupq8YMqCZ6dMtX1",
  "key38": "2KN68NbQBQSkdUQmtWakDnDZxDqp5cuP7NzGy6QrkrZF6RvMHFYcRKGXwxFhKJvwkKyKPpWGegjs4jb2z58MkYhm",
  "key39": "25xABTxKyfTXcbpMVEq14B9wrEQ6UzTrn5gZVotDr8cHwbxgqoqz7d5hwytnbiBuo7HG9vsajU2NYFtvCYZLWZv4",
  "key40": "51RZrjvZr6YFqcKgKAAeuon5TDGmr64XRhdn1eDCv4QqcQVgesDHzQm6GeGwFHNGMMU7ZyTH2djK2yfqCFB6a96f",
  "key41": "2iFLmu7VTwfx576zFAVUoTVqM37QKGn2f11ow7RHGDm5mJ6s7nGQ16ZTudYXFNF7LVRbkZwFCk8yNWsJzxvrv88j",
  "key42": "5XAzas4HpMozhmfrQRSWFbf3zpzBzdk2g3Fk38yp8g2Q98DRdXaXGWQq9rnft1HfvGsy2JUkQthw1pCwAtXUvtYa",
  "key43": "5K9eLYsf4e89PXJF8E7kp4AypJcMQ5h18XT8YDbVJsBxCyNW2euEzgyg1T4LaQQWJKC2t8dFm9mDcKt71QbGLPcx",
  "key44": "3EUvXbRgmeXu7oe7VBoQW1rPwQbgTFHhMzdiLenBNw59oSe5cVtjNJGohQnK8sKcwNvjg3CgBb6SuiGnJfzhn9fd",
  "key45": "4rZZR2TBHVB3Y2W79zxa4qgxEAygcyUxFemchz6mBWFVyJTDJjTvq1KeDV78c14RXXPZxiSRGdZyTjMMxz5BiYTy",
  "key46": "3VLANPMBeqBmJv8G2GsYGiEUQSVPi8PKecWhpgsw9aNJwmEXWK7rUsKd1GCFB4P6EVtazGYJFkCfFeyF7TXf5gqe",
  "key47": "3i1KirCf6KysUXVXHKzUU93FoktmEALd59jx2ZHBAMnK7TWUFWFryoZyUVb9s6HuRtNfT4syW7xwNcC5XtFsMcJN",
  "key48": "2rtSc2L3qFhGpNecSip8NamWDxLvfKAaaddeeDPgsSZFgfRDN4BXw56GC7wrrmHQfbPkNSPaB1E8syohdZ6xtHii",
  "key49": "4PQxRiT5gRsaf899px1NF3gV9UVzDESZdPuWsTwnZJMWEXfkpYdwdzSQnnNzfusW1pra2RxDi3r9k6dL7V64SWQu"
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
