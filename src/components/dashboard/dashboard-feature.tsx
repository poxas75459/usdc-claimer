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
    "4An7M1mivtpD1dHxRHP8nJ2NFeTnMZJuszNSgZUyRRderE3bQtir6bvkjCrnpdxHt1abLNBa2HxYHxvvrKt1nSHX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2E6nfSbYxgUfFoK188YTzqQpbnu5fzbTCX2dixbvNgFYoktLyk1JbWp4VEiscKJTq5JEDierrvyZBW5W7Yh5aBA8",
  "key1": "5ZdFXqFFJ5vQiryL9Mj55RQw9k2ntASQ8tyEUtzefbSSX7hFSw2y7d85midgH5UhG626De2KhAN8QWER76p6oVkx",
  "key2": "2LrN5onvcpxqtPzZoKJ7tL2PZqfGU3XkvQLb9AoPHTsubAYnESZ9gA4cucp5zEEivDTTtL3Tv2nH5Aar5mMNSVW",
  "key3": "ZC9uhCMDGHbcevAhZeEbHxaCtYTyeZNKAdZQFKwEiJcH1zVHMJgYpNTeDJiqw5E2vSedZjoZgidZZsxYUxkQgQT",
  "key4": "5hePF5Hac7QQ3MyvWQ6bE1Pm5ibwQBFrihedhi934Xe2uYNz7MD62D3haJ72B37ux25AnckHdVyA4TWUQYaAVEX6",
  "key5": "2sJNTMZtPrr5ZWUG6Jz3hfwLRMatNoQ7Jty1zoD5tWyM3DLTJuzk9RwgBEBGpssXD7dFvXuSnguV1CVH7ZAPgs3J",
  "key6": "58HL8ZbprSC6LEzYrswMHzf5EwetJs9kGKDo6zF4tcumaTMv8CPQyQLe664WA3hFbFEM2kf3hq8TutA5R4LHrw7h",
  "key7": "31LH4KpjaejNYJr7ULEc84wY2q9X2S2mZVRudGaQKCPBFuejmBCKmsS7hKvWrkTwtBUwyHY8F7Jnf5HkPKaxvm55",
  "key8": "2DMuiV7JVd2ZREZM1566gQLy9gsAwRSouwrzJ2rFfbyzMR8bCHMsa6XacSftfWLEvUUZ2ze4Do3jkU5pxmB6t3hB",
  "key9": "uqPojQVuo41WH5L8aQkjbKcHabBagfWuy6S5rkRAGGPR4jmjDcWAfSzbSTGWCMbo8XVToPvmH7TP3J7V62mXrYX",
  "key10": "51ncGjoyZ8nwxHPty6e2naR9RidJStRma3kHZ5tqj8nAHEGyiacYRpfjaEmpS5bvKkeJQo8HL2W81GGougSQWvju",
  "key11": "5nwuB2ET3WfrqE3TSMwiTwx5k2NyePNGi5hr6HxGzkRWGEE3K2YfxSGcxoJGPgiNNv1RcNdTix5Aes7kjrxwKmPg",
  "key12": "374dPUPjnLmXtyEyuHqjELuYKuwVtTRwrkC9PTaHJGoAR5FsFwCKRz6wZ79Uxe4F1LHmAryXLqywdE1kyDB7tceV",
  "key13": "3sTx4rFaUAuCN68YM25AUjFRBiG5MRxVk3tvzjpjtqNVhpMDTDaPvCh1Pwqx75DSyqtkySJSw1qjkxMiGJDshv43",
  "key14": "3SWGoF3hCKKu2V3biJX7NPZPkM5Sf5aaCbWKBSPjVJ91KcvnBYvUyKaD5sGjPJra5BkgeUosfatdZGG6SjixP9nA",
  "key15": "NM1BqCU8CUzf3TJLGTk8kGEFM33ikNVYZfuw9LHvPTWB3qL3gmCoSa8b32QVQGFTQhjcDnBQUBkYdoF6jfydvuf",
  "key16": "4M4ZfySWmmgs1S7p2qnTApc3cpV5QCSer6Si9mUnqJESfuJ1c3fXypE3svyxQGoGs1RjAJpiUm6aP1ArxhRAWzzp",
  "key17": "3fDBBmwFLRzR48wcV6W4hbmcCcahNePYBU8HDCQnoWnSW4AvSZo5GqnikF6QVLFF55sF8AXri1Fjghm8LMGH5LCd",
  "key18": "3HLBQnNKt6RFu1TZHc5VRR24JqZuJ3avnGPKsXps3dx4nSUGspTovoPEyR3RzgiUbMnSxneuyahX7bcyc8Fok7tX",
  "key19": "3X4rFaXj8Kdi1b71fD4tKwDXsHUrhcT3oFnXBQ3gJx6VBg7wJQmXRiUBojwToo45yirh9JRsiRMN2NufKhKnTPYJ",
  "key20": "5WQoNmRBosB6JDV9vaHmQSDEsxfUvxpawZ98T5pyCzK59c8mn6VzkfvcBfKxDAUiuwvxnWZQeAGE1eZMgihrefYd",
  "key21": "vFmjnEXH91JtWrDVyzPYzm5yCmg8KTi4xmH6KqhCsX5Bnz91Q1LfDVYbaEsTczLNTqLHpHn7BszQdwPoG6pmNNE",
  "key22": "5N3zosmA6xcvVJNWNG75n2jeqt6QEJKBJfMRM7pWg1pGFRuRn6rkBptP6pf6mhEjXBhHjzwJLgRsvyPScLuNiVXy",
  "key23": "GP3gc55SXWmZEe4QTsmQebUVVagGjsNtH831Fp1wxyqLsup7BKhmv7tm1o12LcLfgMukt9nW2Ju8df1V4tkA7jK",
  "key24": "3Y9wNm1hSwsoFUZLRc9D8HJz7fNf34JWkc2giVeQJjGkYdg3Y4VCU2Vm8rSFKDCuNVStq9tjgmZh8zBgdLeDGq3N",
  "key25": "3ZjCwxSWMRQq5if62gjqQSWcqZA3LvwuSSzSztt9BR3Sz3Yj91yAQz2PSpy4YQTMZXyLTR9R1pvCfuexpAah97NK",
  "key26": "3TT1rYYd4dVFaaVERLSijHBBkq5gLTxraJhWLUM2V7zBswZzotVAAZKkvxYzw7j81pQt9WrVVNZUwENnDkw4iQNM",
  "key27": "5M6DjZrgK6aUkQPFJsoCavWg7HhFnknTm6egnTUQhyJY3Dub3t4i8HjbFN5Ly4BM2vaFZx1yRMJFMTFSvrGN5bGF",
  "key28": "2Y1qLrXCjgvU8Jzuchh2CY9cAZZ9TXE9AoWPCk4DFkLde4syhVNUosoo72c4VWb93PpwGRcWVyPJSEoLrkWDiWUG",
  "key29": "2ZyNV9CdfnCMZGX6wkXcXW6CFmpUmMcDfBeH2PEWUNC55KhTsiCmVPYVgb495cVvSQHSiYSdhysiYNNFJzTGyHPr",
  "key30": "2rvsYPiZwZ8P5wwH1y3dhq6o3N2WMrAXm4SPBnt5qAM1KPWqJBwphjR67mhrn9gCzBKMvUcwsT6gtRCiVbkjeLT",
  "key31": "4Cui3qZuacL8W5tEH28NcYiV6p2udyo1ipLLWeSoD3LWZqkayjuqASBmTKBzMcixpGHsPNzf5NozuLbR1TnMVivm",
  "key32": "5Hn9nNeGNiNAhVK68Y6AvrGib8kRTBB117fSrbicLSSwR5hP84UA9XW3RfdeuY63tCDN3UQQ9xfZWFveTWy7JRUm",
  "key33": "4MPjWvn8NLQEkjQiS8QNnQ7JtpDebtcgWBXUcc6qv3rDjmcEtM7wrp9Kf9Pk74J2ie9n4Zb7zkwuM4oZDraC93i2",
  "key34": "2vKtKTg9r5A54imTGYSmUFwC886nRJ2qPJrGXQeS9kcSLsSKXdEmEGoQ8wgdCkZtnjhwhCo4hoTx8oSTRcXN51m2",
  "key35": "53tJFtvfh78wRe3PmVqaTPiPq6eCzU5HNZaT7BPUkCcFBRBVEFxAMvn2dvNLZ9smJDJDo1niL5UTxaqF6Pq6Fon9",
  "key36": "2kyFeX1VAHD1sNDeau4bxxvezdSwWBHPhukXPS4eiepy1g4wpsi9Kru3Nh9nU5mqbSA4PnPS4UrkHCxMRuX7xZsq"
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
