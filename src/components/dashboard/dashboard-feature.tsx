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
    "2i9oW4MemUyegTrYy5Ha9qWcbiYC7Bt88H28mMKQZJoNZ2S9VVLNsM8iTiXQQ21q8GAnuQfpZTnXaM2MAMXAbPmw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dWfZmPB4r74LviDmwFAHm9tSayikpqzQ36yyWr6cBdW9kUDNHAmYaKAHme49G9qRrkXAGDZw3RZwGAWAM7vqAjX",
  "key1": "2ZFNCyUiBZtF298Am31JJBV8EnJsnW4dKKZfFwzx4o7BKfbZe7m7on7pZmFwCdDDerHTMJQ2qxHYnm53uXBG1S8P",
  "key2": "4ogL7TpfVdX8GsSGeY8m72XbAgimDy4URtV4nCP42a49ATj5hB61ojYR4G1uZJZM1B3XEd7uvHxZRjpvsNyCWqiY",
  "key3": "2jyGwhdNnkBCrN1KEzt74Qqa9bzxowD1FVUhgv4tYf4diGvvXNtEmT39qejQnSgR7R8Wi836rwkCQ4LGUSFTkDVD",
  "key4": "Ni9LUTkXZTSUJkkqcQgJEWVxakMN7thvPnjBRhcdhjseM4x9Kbk7VieXkphZvWaoTGqyEvCWEq63Wx9d87sHJb1",
  "key5": "3BqegVdZJFghPXNSu1Sd3yQQginrzLHz99jS5hPtZ5Mkg9EXoFYsDxidvCteoHDemqV4i4Uwx8bqxa5nmJnYvS43",
  "key6": "5NXy6Q5dPPpqpMJ9ps7DPWir3WsrDSuvrSz7Veoy2L9gvGax8LtRUPfaVvmTuS8TTiXHZca7xZN29GbPRSeWRiVs",
  "key7": "4UGLedtQD6tCVZEnznGBETHaju1wtNZn7aqcnehqbarmdkPPAZvh1bdQvfsbJC4pbKWQD5Vo49zsnCPCMBKc75qt",
  "key8": "3WTKw4Bw9hrU8FVEoT2azGDPwJLQWc5etPurLKWgQncUrb6mQS42hf92G9tTsh9Bjx7HT3oCWaGNWh2KKrNMSbb6",
  "key9": "SrKXKvXb2TPY4eaV3dte9C2C7KUbvuf1UGr9o1nMbQpuhnvqkJrfmtSkFpDiULgNsZqUz66Ks3aD5Hw63QAgj8M",
  "key10": "424MyfUswuGxTYjjrbGHXQh58yVJfRZaeAeUmZnx4CpJffb5PRGdiucjqCzi6stVgMEBGpkBtFRge3UNzDXn43Rw",
  "key11": "3GW5vWJ6tTEcUypBmLjLWrNxEzc75vAJR677TA2nguXZ69CrGuAj7geDkrCBmDjr76UZz1VMHJuUCRrriYeCTSfd",
  "key12": "5GTjWExcRKbeL4eqDNY4iRA5dcSLn93QHKfp8inUxY8PQn3ZaNZKADfmR3kFzVHH23rZ6Nmvw7eRgjhVEPVqwHZv",
  "key13": "4H5NALPcggTfyTtQL1bYiTKc2Y9M5cn9f1BzLsPhAZ6FMmUsvhE8t3Sz1XfrAyVC8vtGr1Dahycz6Zogxu24Dh6c",
  "key14": "2y7mD1snhCU3Nv82yMqy277mvoz87mMUi6KxHX9B41pJ9LWpHNufUXbN857VGbPtKsssdUDUGJqGKeSCzRoxKYNF",
  "key15": "deHSb2YLLYQc428tLDFNwaHep1kjBk5qFU917M8QRqMG3bjkVxv8aG8LLMNAjFRz33RS1F5PXGRJX1Q6qMbGkb8",
  "key16": "5TejuVBWRmDXYCd7ei6FLwwo3X11V1qHWixfaCA4eJ6Yd4pYAuVypZNMkv9tS4AfGDoc7JzhT21aCy7iUVugLGk6",
  "key17": "62vNsLvnU8G1zJmAxL5k9zoyzRDCtnS8hWUwZDAAJMxRbxywuYfBoSK811xMPJNP26EJZG32iWfdgtSVtXhxqbyX",
  "key18": "51wVC2PTBNE2xnJu1nHfWyh5zjGZZXYAAdfcN7p5z12Ww8BQVDiCcbN2jZ1c7WQbREAK5hqARvQ9KTjzkquLzft8",
  "key19": "3AcT1pSQ6HKdT51rhHSp5PCd8D6K4GCgykQivz8o7zMzaFnPjLnxz5k8BUBMfq8N7MxscCPoPQGS3bN47vwRiWNa",
  "key20": "4XtzaRDyZX6DE7Y9q7K867caQCartGWAMPcqNCdPp5hMSGewXDj5BFg3wDyGBYXZFZXwYTLiQbCYme1nptg9v1if",
  "key21": "218bYH96jbpz5DxfHGobggjksV6DtBYAUoh2yKWX9CuH5UPwBKfRhpcTHv85nkZKaBmQudq1cehHdUyQDb9cYazw",
  "key22": "4sx5vUK4mM7tH3J9vWmbnipohRzvajDNRoTmqvyYVrEaJ6vcpcQv29WFxjJDqVESGLjY8T1eeYohwyVDZNfGdSGa",
  "key23": "SNZu4Q4VtprtRphZcDAmStmDQuRqFKBeJnuk6ERC4XkqRr4WXvUWvB6KH1z9Vnp1GMbhXE3DHSWxrvYPPnpJvDk",
  "key24": "2yPkae6VjixwZ4kvyVuY1ScCgemZXkMVXEr4pomjyDBwLLKduft11Xy9VhHQSgqQXaSAaCLZ4Jm1gMkAZJLt663F",
  "key25": "3nZmH2Ezb3fiyR5aYedqQWHUZJLN6VJocjH5A9wMz3VFj4qWDYeEL45M57DVtxuHmBiV64qv47dL2U2sVyCrxkid",
  "key26": "3m2vv6q3L8jTdV7yWedSh6FAwUccgxdMEZSyeLXyo7dmKosNFxgzMtj7bL8AN4cJrozRTFgLy8gimkMmj6XomAW4",
  "key27": "3j7zvmHU9BSRwkEbkjZLWhomSUvB1m1oomR6kLzpTx1CAZoYkTckt6qsvSdbiab3Wp3TSmExF1se4iFrcqULeHaG",
  "key28": "3pTMu5uM216C72EWj2Wdzr1G9EYohkrkE6HRNDb589i9URbW2YqdzSWEKLKfGUvv66DbmNPfBbG5BMAUSCNKfBEg",
  "key29": "5cbcCoMjEtrAFQBHQ22SPFvkhYZqzJs77R4WDYe2nnKWuzXhiUMJrQ7rupsC8c5MgAgHvsBmEukLfKVCeHceoJ13",
  "key30": "xCy2HF4thLuJLi4eBiDc5Djyitv3NX9zg2ntzBEfuGJ5xUGBjKqsH5iuVvALcF5ni2PQowBuevE2ehvtVqgVysr",
  "key31": "3ds97JS255XGcHhwFQWed74M16ykXkbqRYdn1BwfN2NNVUsCUV6xs1C2B9uAZKM6mJLHvsjnbSRriRbQKT5kCH4c",
  "key32": "4Zb9wPxCUQW1DCEm8AB19eyHhuGvFTk8r3Gm7g8YFZuUzLFrdaoVQUfrnA1Jk24w85UDePcoGzELckF324gghQqg",
  "key33": "41yZZ79xPPBjFGenwMXMB6rBHqnkUCeEBqEDcDHSFRcKYkqWqW85FYXxjs8ebT7unQkVZhmnqzd8Lq6ZKzdRubM2",
  "key34": "2i8zDS9YMLLGBaVR9UQ9gFYgpg6wpp4CvWwD8xV8bhMJZMQV3a8nWQSao33VrEgb4VAhiKtPtiC5krxbLMAfiP2y",
  "key35": "4Z2FihvopnB99h2eQcW6nBDR3z6aiyxoxrKV6Yf4dnZRWM2xx85AgL6HeKXsCNMDKLqBAjBMkaEZWc7kD6vdNXCe",
  "key36": "4tbVRsZ1T2onAnpiwhsTq3EccX1cfn3G2dFaPNH5YBU9w1syrj4KorcRm5ujJBJnXpV13YW7wj61jD5qm3rmx5Xg",
  "key37": "5jnciTtWhHwUbs5RRWsPesj1oaegdaFY12TBCXvRaSdaZ9iAN5P1UKnMuunfgVp6CATzNU99WsWnnxB9aaA5ANnU"
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
