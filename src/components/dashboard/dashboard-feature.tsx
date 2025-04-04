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
    "MgBCXSv27KwHAFn4puJ1FYS4BvrfPbDGq4MsDCFXBKgEs1W792dDukjK15pqehWrntVjzU1nd9vbbG4V7VyQrbV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RSnCK55QWPuTt1b2DjhET4DFDqyxCg1HRuioSsrWnYc378Wioq88JAWG3tzQbMFpVvnaAjAANRgg1tYKuuxnsKF",
  "key1": "UP8M4T5PWisoprtaMzSHfrJkn4obyhyZr4gYMG1ear8r2LVEM2G86bf1wFc65eaaXK3S4JQcMnhrHaEAB2HaFCJ",
  "key2": "3EYfZtMfLVMUf7qiwE6mARskydMBJa1uRnxWRjDwDSmCKUoETxBFUU5e5ixKaxthUjcER4sv84eNq6inEhoU9KUp",
  "key3": "4SukvBRKA6Hdbo4JrgArdp27C3HzzcGutFpQ9JYGYjup2nrcSNiwFcPT9bm8ieFshQiHJQm4X1W5iKwoTKst6ATb",
  "key4": "5VxpNngc6fWh6fVbvc5rUkRzXdwkajH4gNYycT4KKtYRQDK3wNpHW1YazWbK2kGgrKqTzuHENNNE1HP8mtzfZK9x",
  "key5": "5vM28fHX9z5nBSXZGJy566DYz3MizzqBuqhCJ19ntXgidLneojDhZNABW6G6TcD5vUsNuQ7r1An84yDVbR2gpF43",
  "key6": "zAsvXMQ5gFR2BLE8GrjHE3CZq7DodmujPoRmwvosgL1NDtRMzUSGkkTB1JfhE6xvUANSuN2ZQjVJVVrnZ6CAQuS",
  "key7": "37hnYeJVGP2R3UZMpoXWY8fVTQJyh7vxZoMgcdvyoGf3ceYbBTBsfXMRSFgAMFbeA5emZQqKSw4LBhjrTdfjHq52",
  "key8": "26BJuyopJbbYV4DQ5amVP73q52EAKZZqgJNEgTrq6zYAEry2bthxXTLcMcLZF5kyjf3kqsVKyYcVUjnJbXGrta6L",
  "key9": "DFqDQTPWpr9vzJu7y5Yg1C8JuX3a7DZpGSWv9F85SG2VJYkatKxD99VPayzy86tfnB5PvnZCwvyPCixNRxahYGv",
  "key10": "5vkVMaguczioEoJVcajTn3g5qvAyS4rsnFz67Yjf8uApy4ouQq8XBe7K9sMsK7HyDTnSpYYDXrudAiA82NSQieiQ",
  "key11": "2GcCFygEotmUfhqKqaoKG1fhitqyvLSfCvQoLEDkMh6zNMMuJUK3b1to8Qc49efAmXuWh2GVJxwK42N4TSUdtGya",
  "key12": "4WoFPf4U8WGaNA8QcHULMQEb4R8ykQoxRagszWUevUetmuqUB342mQcuD6oGCHbJVKHaf7TQbkSzMX3HzUWjhwPY",
  "key13": "XQU9DXW4T7eh42gvnAK3mxWWUefpSMFDnAYie2QsdzFYu6wHkRP39wzqAaaahk41h8YsSYqaQapArYMC3qxstTy",
  "key14": "6kax7yrpccoBvzym1GyEQCbx5BGaeo1eX8wvYkaGcY5BXRKxbyK84ayLppWMoUpPWM1KimUbCoB8aTbzZzS4AYT",
  "key15": "2brcMPi3ySiK4dbZxM2T4UDHU8ujCVRyPe7Qu67bY38hoC6Sn7N2KfhvQo1yuxjHaiEod2tqhKHn8EC3nYkwsU7x",
  "key16": "juwfMcqKcQmXYrusYNDPWkwPERBNXYvgyvwGzLqi57d8QaNRJorMibtN6b7siDZsH6njYVxKEFzu4gbFnW13jTx",
  "key17": "2eA4DvaW1cHm73U7jq53dG5ix18NxSLPum7p4HSq2qTHm1Vg6BzUDZrMVU1r8LqmQz9vjfUhCYWqeZigzn8qD1Hu",
  "key18": "4X59QZ1wWQ2RyR39HKYNaFYkyurmH6RhwpA8PnLP61WGwcwr86SEoCz2qyYJLHvEykdvEY3MK1wT5zRJYEZJnE59",
  "key19": "AAy4i3MZX3pSV79vxomF9sazDApSh1vJLB9HGzNrWiVou4C8U6YaheG5A9Hiw4tZy5ZMUsDaUsTwmPg8UF1s1Hw",
  "key20": "siFd1iLPSbxm7aLjm1kQMRpt1khiBbZYsU5BsBEEKmVyk4x5fgUF1Rc8ofk5kYWrM4pxhmREWY8fcHRH6rzTy8y",
  "key21": "5QTEPR4V7YLno9xHMTvgBxZR3XYG5QmwU1iESvzfg24zSVCznpKCPawMNmz1yX1DUaqixqTh27qEGyYdbEnHggQN",
  "key22": "2xg4cWYPohNrXugM89P8vYMNqVaMvyYTvrjb94VoaKVhXXQEa7jZ4bCyTYPjjeEerEkAMC7gFDfjWxziJoAf9uuL",
  "key23": "32hAeiux5MNsTMXcV64BFc2pPYghFjmN8AFkscgNMrpRYWJkzCcuaJta8g8vfvR57G2hu8vHJ79wfQyYWiH2jYKN",
  "key24": "JqDLDEDHCJ62juuFNbjrXThMLbayHWChir9hR1byL5Yfcvipx8nr3y4JGLVKMkrPaxzdyTKJvDEDJ3uTBg8kyFg",
  "key25": "43evSbAMn8xxcuBnUr9xMckNi9BLdATmLPJsn5j9yzXpvTdt6tucV8rX7HSm6Tr5zJv1V6P9GFm4A2LL8gyUVWkm"
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
