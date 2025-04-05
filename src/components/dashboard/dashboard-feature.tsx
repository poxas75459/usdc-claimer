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
    "2LwHdsyz1x4B6FAYjj7XajneqwMUGYNiMqYKDGfcBWAyAeHJUkSgNbZpnp6aKGSDwB7VvyXJVzxtebmpwK3Ywe25"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DbLMehQUWdcLpdBRdzoqxHHAf4dbvGT2yN3stPvnGG17aujp7kLrajS2HqG4umf6L9Z6nDonEeLZfc27VxHLpyL",
  "key1": "W5jtMTpYNzc6xUaLFfR43CPAp73SZbkCebapuLEeLz12CCr4DPrKsFhf94LarHmTNjL5oJdp1LrhJw8uLZyXcTQ",
  "key2": "39o8nPXz179PZCjmKCbfUbVNMwymhratBypLFWfChZEccw1wMmRUbcpEF2LkRz4JViBJ7AyovXzfVgXwZVRiyKbw",
  "key3": "27B8sU6MwGLCbFmyTjEzhy4UgrDMsjQmtiSe4Ty7ddSwiRDS9tiDYra7SPkE6y5sABnhYkSyUszVcBWfJafYXDka",
  "key4": "39GdBHpDmqFWXLsm8GB6nJDGakfMiSjfUzxH4LocjYZ8hmjnJm89dVgDDKKwCF3RLseczuk3VgH5ztEqdC6RdYFh",
  "key5": "dp1DAqK24jcBFkhgCNWaMoa2uwWLf4jaSgULynH4eavRX8Z6WfwpgjHXssZEQvqCJprFQRZRAwXPFT6SQurBrCW",
  "key6": "3m44okgafaKXyTnwjWMUQhJjLdJ7fNuQ1MtqfKSgVTaBZnqDGQV9AtmeFvuu7bQWfxo8VfEjF2akUgj9ZJHTpADt",
  "key7": "2DCoP6kGSAxbqAV7nbpVC2SCqhyiHN2qCAeQbgf5EcH3sJD82UFTRN1fUzwpjpCQZUV2wxRXP6we4R6sT58LmzUY",
  "key8": "rgDx41AZQDv3S8JNi57kwcXp6SqE1wiLu2rC1b8DyniBCczdBEW9XemppmsY4Hu9yCAESV8NC6f7yLBbUgpV63d",
  "key9": "tVY6UrsfEZZdreMnbv33HymG24Hdm8hxEG9DejW3zqCfRTGQdwUuGLm6hVe4MWDLpHyuQiAxb1UVAezKXd1EwKS",
  "key10": "4dzFntNxrgXqSQB4p9HWVmFSpeRYxwUXf3c4HrvQPCqHcXVNEAnD3jSNAqZK2Jzih5Uwrs3S3Deh6Xw7wPEyAA1P",
  "key11": "2grsZH98TcfqqudNX2X7GLhvJWbqoi2eP6r7baqy5dRaNGMCPhMr1QBDkKjtBdsb31yM9cQ1GeFrqXbU9TBMw9MC",
  "key12": "2LfzvMg6XvVi89wUBR7vgMFjQemwdtP7qKVaa8w5DWNeUdgTrU7WrDbxHZLyv46XCH6FEDRQkUKCzHWyRjfvXtet",
  "key13": "2UCwhCmxWmmtFg2CG9VNen8K1meiuaKg7dkXQVyXSJSERxtcq79rH13q4vtcZUM8gyhDNcpHWBEHG91t2bWx5wUf",
  "key14": "22SGK5N5RPTKYPARFLpL3hUDoP9Lvp6tciFAr7mwVthwUpbk19zRXCjgv13vTcabaQMDVZDXtponwXAvRmU28MTX",
  "key15": "51N7Q4GQg9QA8ycuxPi1JAi3EmaCqqezZEmDDryX6BJdousuSWeXpYQ1V1g4UvmpQHHhbo79zMrqBkXij1NYVW2e",
  "key16": "4jKzxtaPPmfN2Tzam6X57MCEvyUy2RzUMbPmcTtSzxtCYdRw3hs6mpLsfqgeLhcdhoMGSDjwREyHiQecMoZigTPX",
  "key17": "2nR2LpP8HbK2t1cFLBRGFWS4uyYn9b3EJghbiWWPwyzQFzSHnErqATKfgbdT8m946rJ5wCtu2WTXwWf75ghJgaS8",
  "key18": "5FPxVeWsvCG3HuAy5gaYoUDB3oiMdR4gqCWz5KGWgxCcxcNZLtk2rde7guRb9ftm2WAWb11vnx7hw6WK3B6Td1tG",
  "key19": "zLoq2echQXqGTyC9Y7KQbanZNXyAxkgnxrPLPVRCeZ3xUffPtRjK551TH2WcQ1fuV6u4k5V5kXyuGA8LtQS5L8L",
  "key20": "qvDkf4D2moMUStDPdzNE43w3tsrMfMMf5375FEL2TAMK5AacXVnajRcF2LfZB63Mckr2U7ejgiVEaK3Y7bh65Ck",
  "key21": "5Z1EjLM9oZRnqHDHndKJW9mHMLYiGD5vdTGhaBpHhxteKqAZQCKX3iabekibMirjBAConCXXdJetBPg61qXVZ42Q",
  "key22": "38bXz7mmG9MKbShLYpaKF8fc9cWWz1s2jJnMuChk1kfeN7XP99NtW1ovSxDpf1YGBSAFvszU23Zi3ZM8JAVWmC8e",
  "key23": "37fG3gi29MHRBMvMXxMsATya3y2jrtsuXS6aDU6kLkVxCM53hx9BFnpL4eiEc9Sty32DVmgfABGd95GNMPUZn3H1",
  "key24": "5sp1kSofuNzXirQAvbHYNofiHtw8Lgm4embTkULegNzD1GrSV3GhK3wun3WstfnATnyobpUrKaJPkJbCLGuxx8MY",
  "key25": "3rndma6sNnAUszAUFWH5NRxMqijqL4TZ9PnwJbs3rZbjgMF7pvTimqbwE9SfKJT3rRawQKUPzsUDbDT8XufmYb2R",
  "key26": "VeseFdA4xt2D111UmigGLCGKxdTjjLSXoXbjCJRxfKpM8Fs3ihoWutiEJDv2dA4Vk9ePtD4V4dKgvgndkakDLAN",
  "key27": "4eUCsudCEFDL6P89g5D3Yfp3srahqUHwkDyTVQSDjqfsDHzjJ2GQynVcg451Ha2ozqa5bnRhVD8mJwCVHYDLHVrM",
  "key28": "67c7occLQGNjJNaKh1uLxNULvY6BTYUP3hQJkmSwBF6zC6cz3wTP6Rjp2WhFAfDnNjCSkh7wqLPtZUA5GBXbXB1z",
  "key29": "5Gbs4YjHbbf9DXtGpsL4v4zuf5Q9W79cQjfc9xukzyTNbpCGEiFWzxYHS4HfDEQtdFMHwo48EyYxRkJ8nMgh9hSc"
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
