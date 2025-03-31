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
    "4Qp3yq7P4FyE52tTJ4RB8yaTFjcwXUU9HdF4cmyKyRbVHL5xZe3Lob4bG12DsifX4b3Vnm3cnnHremWGCWAcwkXf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bv78FJJWsQ9zgTMdvVs5UAgPmagAxGJ7LQwwcN8NsVFPKzy1eXBNYPMjSLWEdk9BKTG7apShH6TZVUunm4L6vz6",
  "key1": "3uEDQZdgZ7dNMM3t3wUKktVqMNEbkezdvGqnY7bugE98Gk7kKMWbJpuMVm4XtqehKS5paCVmYBz1QHRKKwn7JnqX",
  "key2": "545g1QA2vTGJQvthv3CGDBVy1azkP2EqHiPA2MrqzGujhBgnn1UDNxwdyqGBZd1HnqbXVaYCubF3BKx6qwJqHkbb",
  "key3": "3mviGZUE1VgnCTP5cYH5AYv4WWyFf4X24DyaBtme9GMovTmZEJtu8bTHV7Je4cGZ2QrB844inTwH526AYAZ6Ywp6",
  "key4": "4n2WB5bWKiLypsGaZpCEYu6CmuNAZP6DLNgxpY32WtsR2X2LodfJAYH3BP3whXc6kiA3TtwhK7JD8LqPP2wVYfn6",
  "key5": "45xrMwcdLmCVLd4rtGAeVV8Ez9DEGiUzXznAngYBSZzehB632Nc5xq7eJjFf1cntJcu98VfCejoHyGjNgAMjyrsV",
  "key6": "5zH7gd6CdBihK6NA6p5ECrznUdDRAsEjQcFg9Lk5FDarcFSX3CGBqXuUvUGuNGhxYneTuwkDW2uBYLuTmPYH3KDC",
  "key7": "Z9hEA97TqA62YX8mhL4fRJujpe3RyWjesfftUu59wmmxLi5giMhDbiLRJkC37F37VWJQiLJ6BHfsycYH94LSFk9",
  "key8": "5MEyXVjymQKMuht6TjDvV6SsC6vcDeF2V33L2LPTzbzTQSQAsFdxGYHn8PYe3oJPeHavSpumLaceZQLnpRZyqEgi",
  "key9": "sxurotJM5Dqa3UPST4BV6wRLVnbsDM4Ez9tt9sACyuMTEpw7ohQk3MDLbEj5YcmtnQ44khWtVLhx5eitwA4Lx1p",
  "key10": "3BEv4MdshCiRa6D8ANVGqHK99By6KDSxrPN3K8UMshLL6TmJHbxAEZFYDk6sDL9gUe5hEoYidF8toQGheYmGJgWS",
  "key11": "5s7Bp1Eqib7cB6uJ69eYrj58XhjvrEoN5FNh8fpiLkCWF3LKbypka2yAnjSGdG4DiadK3bxWL8TAwE6dGy3axew2",
  "key12": "5PJJHucW66Cmpr79XvLzoGs7wz1z8QXxWh99ms6MidSPNUkgUpgMnFTZ6THLofJJgDSXLfgnyii5fPtzva5fxhgf",
  "key13": "24p6GyawZ4Xy9mRMA1nYZ28FLyUM3mArvAZH9UqYhVyHMhmw3h8iAH7Nd7BWpuuSsA3ypNmCERUNB5UNQcuQGCQr",
  "key14": "5CTJBJtkrWZissHY39xXPMFtsFkhHioR6krvLZtSXokK7vD84fFnd5msy8ELTLsj3FQQNxBwZzctx82VdcyZHTHo",
  "key15": "47mLBQCbiPJ6MFuyzpv11dcq3i3bQ4bBFCRHv7nxHFYeeSuWNXg3wkJi8m4hxaj5Yco61PECaGdsHmByJ6qhLm6P",
  "key16": "2bM9HNFTFg7b6WB96Haob441ixXqYDT7cQZabC6kDvYzbDKmm41hX1azA2MMA2Vdesy6TeLzf5776UBvHnHTrLPu",
  "key17": "2hZtUp1d1xrCR63RjMdbqWBrcKeka2tFincowNadKsg5njmopiiBkKoWLAYsiHvMwvzsifQwBgNPvPZYiDaFhKgF",
  "key18": "4U29CEwVbqWjLSzKrEtw3wGZFF3fW8s8qToFdC8AZzGAFCfwZRiaVvDQTKBnemRMkmKexF5rAGo6xTDTbbGyYBi6",
  "key19": "5UBWFqQovPRgwpDva6xG5j3vTqSfXfeXUQXX32W6wmLz8nxRHGTgZRtA6yiJ8Xd6kub3wGy5fCZwvSLcn9saHUCi",
  "key20": "hZSgsZxjTX3YVCw5D2e1sqMWDNw2JAKjCzyXPBDC9hC1phK57oyxkmbArg1neeymo4xGu6z5rNxYzGeRrKsjeTu",
  "key21": "5hAMgZLsd6cW92nbVx2u5p7mamQoo4DLAr34jCCZAGj9t1eM4DhtAPWnpYt8w67E2Ms2KYA6ud5KzwY3HZXhfgQ8",
  "key22": "36vR5mmNrG3m1V8oxgjDjkso8fCP4MA4Gemjb5D6Th2ywjvWEKGV1YXVWEzVcEob4WXBrmsnwhtnHikNMGdLhQ9V",
  "key23": "5edeu143Lynq4jJ5aJXzHx6Q3ep5Nutgw49xFA344qGtZeDzzfEq1a3ncsiYCxdx3vsL6DHoqACvN5nsff6QnfeC",
  "key24": "3Y9mPUDyUYikB9GoHZiKbipTS1x3EYj1jmxJ2uKNGdS1fFKCV84LN6uPDHUiJ4XeyfnyVLQwvzMJgr9tYtBB1q8y",
  "key25": "3WGR7XujGXyzbKPhDBaXg5PFu6dAnDzvbu9qNRhAEZWMckgRExdjZtaAUebz2eSh5kXzAPguSN2od9aNLYcNTAtM",
  "key26": "VKFyDWbtGKvDYHV7NPitrusLUJRuPbmkjWz5iWYPWVQmP1cbd95MTWvLXeSh1AofQSFKrwknG7LFTcFAeSMXZyb",
  "key27": "2XgC33XxtMZdg5cvKkgrXEZ3QxvyGc8phunNxKwAuVXgA6Xm2TKGDyXtKqjZjnzKFYAwBkL1DJ3Enaedq26h7Z3c",
  "key28": "3JnNvtPXCe4mH6VGCH6uLwpgbRNpmyhvRufrdKTzCeBS9J5j5QQvBxdkWiFiG7BAmMnr7uGqtT1sGz3uXKPASedu",
  "key29": "nh5TScs878aNj63U9Rt845JF2Qp8V4BQgVwuX4nbDhy6LNEMJrWE1VaN5YXQVBd64EyV9cJWcYJ9WjQJ6gSWwEn",
  "key30": "5P9NZBEGSZF3joHmdm4LreGXyN6eoLKWEprHm8PDq75qZSh5DV8A9wBgRcjRpnoBMWhTbD6N7n7M5ZhX1v18qBvt",
  "key31": "4gnW9dgwZkwp4YYGMM6LiFHmy6qJtJVrrQ2eBzWczpR7trDCM67in7srawemeS5gi7rwY5eUcXLvijERtQYJ41Y7",
  "key32": "5CPxTA5WNnTogC17K6dCtfCm1EfoM3HW3UEnC8Btct3CEJnmc9d8XVm9LgsSq4Uurvz57jrMhd4GpV8H96FYiVcL",
  "key33": "39HszXQvpRv4UThLEeZXo8WZHafbCCSQYmUPWhSTPnWbjkS1pT1LHxjw8LsZQWUHoxyenjHb3xvZhB7kkxzGRq3s"
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
