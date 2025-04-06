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
    "5QRdvTd6nskvnZ3GyccMn5cbMF5mLX8zGeaTMBg4jamTPov5mfXmSMDBTpMGJ7ian8TRL9ALRbqcqRWfNnyPofw1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "U1NiMzw14a85g7SbJCGVgnY1ZqrrxpYw8V9GLmUjp3gD8WGcFxovK61JaK9xioVrHJPjmK4yhDa4thQL5KKwj8q",
  "key1": "D6CXxzbsh92VSRwsyRqYGzBWwwrkiZ2w8ZT9d3asbfn7uXZySDEDYeHCZUhcPQzVTAof8pzcueJVSn15thTYpMD",
  "key2": "42Y9sWCPbb3b1D8nRrv39TUGP747Mn8cGezRZaGjhLaNjjNR7CnXGGCCdqAMJoviBbK1j2oBJ8iVp6uWQLoyWghY",
  "key3": "5Hqt6xSDcp1RwHV2jocGWGiBMZVZ81cvRGm6aZWXg9cfE6npusPJJWwWFcecKrJPdcf2EHJhxvrSkRhvYppai4Qy",
  "key4": "6MUkgHqqvXhCQwbG68nYL8bAUsksDj8tzYkQ163w4Ga9bT5CecrrPW9xiqqUCSPz49iXKi9YEz1ekLvkF3KR4J8",
  "key5": "4DTyLkdqPaeiQnNQgpWf1mvuWA6NwTfjfDNqhucPkf8VcBy4s1zWqdFuNbwEcYHURhRZstB4YfLUcNqzJxU9CiFD",
  "key6": "46kQta8XDrtZSj9FBimWekmGXxxnVS4XusUVfAFJkKxcApkmn12RibLkATZffAWP1eb3KQKJGEszRZDjPkoiaxwG",
  "key7": "4rT29JJ9mpSZXouowsGWHoZjZNtcA7niNMRFnD6s6Q3CgJ2pg49rfPkNSGTk5XZKardBa9xfL5uVmYCRyvXixAyZ",
  "key8": "f7jENxnDikyHhnZWZNYdLPnp3shKNwivSdwmZ5wzHPAwg6HgiCDV3jJjs263dehdHs74Se5BPVjhU8KDyyfQmfs",
  "key9": "3fKByV8ZMNVkHdr3iFupE9qEHk33FAucotm7h8qUwM3SPqDUZDxybmNLPod9pp4ZUYCgN5Tjja99vdbh2o4FGBXZ",
  "key10": "5BJHTyuxjoCTA7QQgyWk4voWH61sviR9aTXDLofucVAjihSz2rC8dRjVuEpRtBySRXx3HWts1RL6A4GurXFdFPEe",
  "key11": "4DBHTSLQdtrwaqKjJSbFPiPdmL1CSXd5qzqEeqxDyuWLBBafNcn1cJNdq6QnMb5Ce2t4hnV5msehAu43x9veDg4R",
  "key12": "2CMgSUnc97H2c4Re8evva6hnp1afPdFoFBaC3CZcoJqrjyZQciqSYAC3PWNe2LAWtRFv7vwL6iWVgWL6ovGBy9dU",
  "key13": "5A93fycarJ2D6eAUXe63ypKMaTUYRn95obJzSzJjqqSUBq3GjJhFCcnBsb3YK9cxSxbHoknHpzEbZEgY4D2LfoV9",
  "key14": "4XFLaSh39z9YAkW43mEeJcRFPo8K14mSqnVJDwSU6EEmeMhaPE8Ue8HVdvBvnmQbhYngQztbMoQoKsreEKw592bw",
  "key15": "25tKP1rPS4ZSnhnPRrNTtxby2Rv3kzT4FpJZ48SiBmYpFH4zguU45brXbk84qGVWnMicwMUXFr6XuXsVt1kqxv5L",
  "key16": "2vzB729zcMDsbykcYqEjJM2dTCFwfVokymYsMMPm74P3smqMdigSivyLw3wR2FJhEPdaVRxmhveDxaXnVQqirjMs",
  "key17": "5KrxkhgcYaroq8cnsYxveR4VU847AzTyQCPpcGUMbw55e5tqNHCektrkRATpSDQjmowrgHmnV9VQg61rA7FPN9D3",
  "key18": "2aao83vpFq52zUiv5o4m1pJcTiiHAfDWUxpFAeTTdbDh9DEcxwURZmni4yM1ywPPbKQ2EEdEohXenSeLyMHUQVdo",
  "key19": "3pdMzZxTfaQWetnPo3srHsPfS3CwjRh5QDQ2QGiX2f4fMr2mF6PbamtBcEJPcSjpF5j3EK1DZR6AL62CFqJE5rXE",
  "key20": "31FPX3yADroduogomBRTaRHT2eo2f8Cuo6m9t2E3xAF5iufkfbBML1HG7UJWhbnMFDBY2rRgbrYYgywVjDsiKm9k",
  "key21": "3Y954inhYWSfxhpJQW5tYM1mqupT3Um5hRQHYoKuW7joBoirSo2Vp7TKPdnN6UogEFcTxftoGYuJuuPt9k9g1Lha",
  "key22": "3mYo4mtE6GSSXQE57rS7s17ydfzq9rFHEVS6X4xgZzb4d4t4nx8HWbE9AnCnrfRF8gfcCAu8EUidbvgjZiRqsvXX",
  "key23": "5p7jGdUf7pL57kM2GdcQqrbWSqpChZX4PBMjRPUpYVoxwX8b1XTm9bJaNGGqsGJHEtK1Ah4cMapSd6voSYSzRjV5",
  "key24": "xctNAXgSNagSQ9uUsoTZyA7QcZSJN9FEJbHZP5wBXqtgjJwjXaPrL3B3WZ1qNc5RWaMQsdd5ywA6VDBPy4omQt9",
  "key25": "2VeAHJN9qLUbjvWizLeqU4jGhhZ2SXgBxBtyxaKBtmNVYGnGCG3KFcLTDzCGMJG8rwBazZVVfp9m2rkvMcm3zBxN",
  "key26": "2Kuw6x54KcEqKYyob5haX3g3TYd8KBfcpVGBuBQM6Ta9whEKvuxHRBHsibTmGs1GcojoEifo8cHs21kBnaByrs25",
  "key27": "2rP1eG7Vy89fJVSwzj9RMYMZ1azwN2GgJj7dAGHSaYrd52oGZZ7FADi5BDo6iktNEY3dUdnqnh3g58MXA7yTD8Np",
  "key28": "2mXeYwo5rTwd9ozQPVdrKWXUox5aPTGLT8J94wsGSCxkbhMK2mETUDnAzGASSG2tqdiSBrVDq5ShyPLjwDqogs8",
  "key29": "4M1ZtXXENTsQkJH5UD4DD59WwGbfhogBhgeMbvw1wS919V3rZCTEQNWbkoroZAzjyu5Mkbach6nUqXG33SbGqmPV",
  "key30": "4rbcrd8sdrrBEN3jZAoiwc2uhZEQ3qfAR9Arxw88DdARpbUBV9cLhapddJ9ZK48KWjj6sAkoYv5Ht9bsMXqGqaQD",
  "key31": "4J7QtEQnA45LSpBSUUGFkyw25Q2c8XCt6TC1BRR748vS8MEYtrB4aj7HjBg1oWHGQq1NYhEUtnABwMYFBhYRmWFQ",
  "key32": "bBy1TKHTNAEbfSf5v6Cw6fhnAVBYpniDaiNmBuyDFcep5csWcNVdV3HNXrJinet67anqXtZ1jivLz1DGL46iaYp",
  "key33": "4JbjKQsR8nxmouno8yQaDZKAApWTXT3H7KXprkiqUSL8piP3futgQbXteu116eNKqLMzQhz2yovUUAvSVEQWU3zz",
  "key34": "2QZxNLJv45RPH3LQ2LWHyHaza3Z8ngRFsMYbC2USR1s7TR2dtgXKnxnAbHds8MmWXTNMStVCVMqCQqUkFw3ErLsW",
  "key35": "5bmJq8ePBSUN9cRHe6fftCuJLG68BxhW93fguH8pHQEVSTcztdQQ5NHNUhgMbKHUm13kyo2RVwyzDz6ZUvFo292W",
  "key36": "3iNcPmiyLAQcYLu6ixnPjEeRFpfnaUK9ydpH8XjxhM7mUqecLn5kFj8zpfgnQsXgPXCiuQk4fYg7tSPFQv4qTj42",
  "key37": "SGpBXMMQ9muiwxfcKhrFGd9wWQ7cnUrV4iPpt4MeBeE3YqqxzWNx7ZpEAk2wDh4WnW8CBNTNWDT2ci2rDT8bjJS",
  "key38": "2ViiMdURyWPsr2tCi2S7mjFXXPvyNH3Mrc8bgDN8eqn8hd1hNjqkfvXZy8nmJ2viRMmbzsV2iCSmoeqYEcjQrxnW",
  "key39": "2MxogCLh4hBHGWSPPgDkHbHNCRgnHqpu5AjjLQ6rWyXEBQoAVZxzdJjEXFqgEP3JdSjNNPBM1x6YGquBNg4cbX2N",
  "key40": "2u6FBuPtNKzFfF1MQC7Zkw8kCtR7K9Wo611Aivhx2fxk9srb4aLWAmojRu7oRppQScF583LkwsN4pz36umQPrJhW",
  "key41": "VM4DbdbV1HmErZcWi3P5zMk9sjnH7Ni2Pc9NjoNMxvwVjo58eBPRVa4fDNJKfsdY9hycC75Hy2VGRGH5rGWKeye",
  "key42": "44gsckF7TyMUEPxyQqmjZGzEKE6mKs2XQmWcA1mb8vFFmWSAU7FwBsZGZEgvw6QpCP1FGfZftn9stRLKxcuaoFzM"
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
