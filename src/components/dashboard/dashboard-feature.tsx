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
    "5Q1dGwe6R7r57f3LoeKTXhMZdrVFvwXcBdRuL5vdSKyVWDYwQhGAxaX4FHJgEYoscsLqpJgerzX7cJqZc4RqSB1o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GGajn52xWkRxnCWYVB6yCspVPCmSCkHHvyTekk8gA9YQRsG5MeK3MqeH15YqW9LXMDF6WnGzuAvcoJL8Y74ebHS",
  "key1": "5D8DeCZrgDAH9agkMnAkbMNwEBdGWXNui3wSLpC9RjYYadgc8NNhZoYz6s5xuFSwiDXWkvgKb51fHdSs13QNCFyw",
  "key2": "37CUAgn1oqQGBNrQ9VP9c8Gw8N6ooB7v8j7LmT1PtAHcv5iynwbmbZu1GMzgKJ6pw55rzoZXnDko3iif5CxKDqhu",
  "key3": "5cusK6274KWobANfVZFenJpGrvPrUxBkvQyrgpaogfy7P4G49CUix11ViyRnZiNpiQMFUqpZwyDbA6LdpbUp5nsF",
  "key4": "2jxQX9fhapqAvCdboW1VvKw5J21CHGJi36xsXfaTjWkPXrWeJU1fBxpGkVWy49D5oPiZAxhdnT1p8s1F6SBRg8Vd",
  "key5": "3dHrh4vMXZTqc4xQoK2BdPg6eGpRfNHvmvrEPCJSKda2eq9Hp7va1PftGQZuUXvBPF4Z3Qr6ZwZd3rjwNhSmeFu6",
  "key6": "4yDzcKunSCuyxv5bdZxvoRyyYX8uD6D21p99xUrwAu9WZynFHpeu2gqoHMQHJmpadcgwESjuJytagDa4Ee2Pfuh5",
  "key7": "3aQU1ykp3HpC3yjFPgNnzesNM1XxSqZ8exVkjxBBFdgwEueTbGZbhJ3LyWzyZDbzdBzCxuHq3oesMBPGyrMs5Cjy",
  "key8": "5axG1BXxcQA6eVZN7A7wVejoQsoQqVS8XtnCMjyGprzYZcMp6f1B4S7EsPwnGTS35APB4nVxW3faQVK8CsxZNJgs",
  "key9": "TgGg2kfDoCkjn57J8tefpYDuCjsJStcqxkaMiXSF4Gd886N6Gfu5QwJ5L2qaY8V1met6y56i1q8YZgL16ogTaNg",
  "key10": "uS1XpUHP22nHsa9EVVQ9NUBTXJyCzxuZyQnPYyEFo9PSYhAG9G5eFXgtT4ph3FT7uNfpcgyzBSuLhdgfoHH4dkH",
  "key11": "4KFMPhMTL2oLcoCzUANfswR74FuMRff1wZPvmf2dcPg127wsyPXqGxuTF66hBzDKJtEhR2GgFW9DNoyU3mkzo1AM",
  "key12": "BPrXAUiYCX77EtGCxHsqVe45thiGpT5Q48tM6zuFPosBc4GaFjJ8srgd5oESxoYYuK1jH43z5kPmkZVqw7pik26",
  "key13": "2N9Q8BTki38tPr9dFP1oqmGVytJ87gNCc392m1aK8VbFmW9mTuJR3e7JXxG7N9rwsSwnbFnMz8WanrEtToLbjSbx",
  "key14": "5YHPn3ECHcJweNtMPrQFRTV8kXtTdqKcMsqtyhY1L3yKUQv497NorbbHafJY28w3Ei8J3xmrpgBuKm4JfjJ2hftZ",
  "key15": "4wegPku1Eg8KuTFiNnnBVhLW8MW8wpgfKyPa9EzWmFRmkVjMR7gmdggEgDNXYsibS8bWYcQYCZquob95WqoKjYK6",
  "key16": "424SB6BH6hij54WLTtquUUePuoyAr486vVaqUEweYzc9Zy4w7U7Gt1uTbPSyLJoz7LCBXDyZaoAvYXYKgyg2o1Pv",
  "key17": "4KamwQS9yo9PodSAJbw9ZcQNnNRpTHR864NwefirXJ72p6B2yUaPHDrbnnHhQ1pmJ6AwknkSPrZ9D5NkheEhTx2S",
  "key18": "5q8WUApzTDJqJgJb6Q7KMH3LwpjR7oN4GFszNEA9315trLccj43Cfh3SenUXFMMe7vQpRuyK17ix5h6mpZoZFtXK",
  "key19": "4YJgtxhkG3ZYH71vznoQezam71mmxJPTYaPAa8QB7z3q7YB9mc7oXVvdAa1RMmTrufpTbCJ3bFcGoEZPFm3c4HCu",
  "key20": "3xGC5AyAHWTkjMdnWq66g2s9X1P8ibwQXFPzLBq7T7dGWmAavbp4mRz5StKmFW1bNJmFeKNfuKwX4QwgDg5EfVvC",
  "key21": "gkgU15jhfdWWWDnC6La5j6dikQfvkmHTdEeqec7JyWh5WWJKweNDgK22f5HgmYttv4njjgMURjaHSoWQvSfypBj",
  "key22": "3AMYyDCgVyrfbadfVQfJQPGzbejBZP5hmJ3YxSHyEJWtn4n9SFKd4BATmoKbkGGQHPXCvZyV8AKXX7boTvXA1MaM",
  "key23": "3wWVnULufLu8PcfDwqvMEb6LHpvkvXJ2V4GpPymzQajWyUqnYp3CbCrvwuAZ31P9UwzJVrBcsSt8amYgYrCYFKgA",
  "key24": "3EUnHd5oMRheoDBkf54e5WKoBaPHJrmyE7uo2R6WLndgEVGEocuyE68adRbvZG8GMLd4qb6trwbPsxmv7dRQnyD2",
  "key25": "3ssFUsvFiAvsQCSdVVWxjvH96YyHCUwL5BEuetSeDkyMq3ew4eAA4h2U8z7jNb267gccL1WfbA38d6b3Dwa4VNnT",
  "key26": "7hTaohDxkY7mm3WrSvSx2cvd2uysUMEEJAsdM4RzhyDaoKocERDvR4bMLw7AhCJu3opmA1j2yRpHjrCLYgADxKF"
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
