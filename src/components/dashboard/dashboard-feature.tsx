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
    "3AKFHjucq8AxSS4wWht5HfQBVavvGCYFbb33SQzLNmnK7MxjPLykUNSgXa7pJqaCuvkcs1xDD4orgM2ESAnGg5dh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ULuYDZjHcaAaBxTaUeJDMjM6bRuJqdfhBAMzUrw3v6dZS8MnRYQRCtSWdaZAWEHoAjRkCXEYKy1z3zY8bFd5FbY",
  "key1": "5HNd8JJyLk2DfxCMK3QXNaw6zzsvuqrGoEepyiqyQriajYsq8dsmbzx82Cfxpq8Z356FmmoSZBDfzETAKXCX7DBe",
  "key2": "53QSwEujEUjUf1GkagNRGfTBKEb7eXLzkpqWMVRTVVD7bj6paKkWLBXvCGTKmiEgGL3CLWSFbtBMTLWjYF337t6R",
  "key3": "31aziNQvTvcA1zHU68HvRQkR82yM6ZVkUawmoAoXJPG21Y91xHSwpZT6ZbenZtMEv5aRB4ibwXH5qQJFw3gjbw9D",
  "key4": "21y8cxXnEk6XaE9s87kRv77DZbxvtZZcTpFs12sMb6hBMFfYxh6Hnntv8fsitrthubHFfSXczWGMrevnfCLdfQH1",
  "key5": "4PZTu8Ya5z2vEhBWaqkYLfBTk1fZTz7eYQu3Xh5urS6wG8zQzGXpnmRTV5rsLa8Jm8wqXv9ADGvir1Bxv4z66ovu",
  "key6": "2SYdcbDUhawDbxoAZAkVNJc2iT88M6s93RPzitu1LqU9qXuwxWyscbsJt4Lxu6xnamnS91u6aMUy4a9MSWsyt6vD",
  "key7": "39VfpCmqGGS3Cf56bmGL1psnjanEBiSCiDgTzAr3FyFXarkAaXxpKpvkqr6hj7BwLYeCCqjX9aW8vDDdSgfu2CMe",
  "key8": "3VTGEq15BtXqHnuQxMF64QQBUB2MfoeAWCs2MhP4dCovwdkaiLjZ1ydfHgEPDY8a5dPDKEPxbHbqLeNWbwG1MPw3",
  "key9": "5CuLjd7qrgnSdguLvooSW92AgKfv927eG8yKAUUAuofioH8pvSzPBHUE3JwNZJq3D4kbbJLoXHcmxPcbzcn8Y1x3",
  "key10": "43KmrkoNMzzpD9qham6zxPEM3evaeTaabbD9u3oQLCsDy5pLq3jkmDLzC2SHKojL8CbMX2LB1JippTmGqR6rRn6s",
  "key11": "2yRhe4ikRMfr9jCeDCEhSvvLQtJAjZ8JzSQ3CXLxCDX2PMGi4BxALsG5dFpdrkexNPLtYWLj4QhzqujK8ZVtVX2L",
  "key12": "5hgGMqf47JDKqiG13xu6WAuLqibFqZEWBa1JQodF6PkCjqtJHXX1WrX89GvPR4oqzsfFW2vk19Yz8rvCrJ9N6NQu",
  "key13": "4haMZLHrC86eo12AS23PuR5qdFBSJLbqqwXaCZZtndWmhZweFXqpZKS36HHbNRxtHj8vbtic5ndMZfuXkq6L1HAe",
  "key14": "5taiuCpMeaXaXcBiTowztNUnLyhfSWaWEFw5PjcNRovcVqCknspUMSgqSEnSTjRDJY6dSuBcNB5yWTmS7edcvB4W",
  "key15": "83K3CyNx3YCwetqnYQQym1w7AyUhDriXvb3PgEwQqDAQuZbsH4Xmkrv41keerYWiJmQbWXpdZfgVqx2NPPfU1MY",
  "key16": "65HHf7dTpXrkZRphrCVPhYj4bekuckEhBkdyRTJBqpAn2oEALrMWXPpBLQVFsh21mm3JDePmR8oSzJT4oVWGeQzr",
  "key17": "2HxGzyZkP6bh6AUc5ob11YzYy1YNFpfm31gzM1Dwv2KXjSicyMwhyyjrsKdwoQoPLeg9pkXv78yDhEsgbh6ZCLJ",
  "key18": "59dkgR4NHDCT2UcAYXN5XQWgokiFwV1yJtwmRTYu1KHx45zjNVLiVvYub2dQHGwE3iJUwcnbSTm9Psd6RL838yRP",
  "key19": "5apgghxHHtg4XNFGXwPri6Q9cE9LhKAU2BEaXYF8Ew6mKjon7Rb8rbFTgk3X39E6zpQxa1WtdZZzK3NtTLR1t681",
  "key20": "4TXoouLTMHNQbe4KgkgAvqZx8ZRPFezxC8qhwaW8oZLvLhkRbcBPGyRKw87nkNSiNt6CgjHAntiutk3mQicaqU4d",
  "key21": "47wam9XQTGXT4HSnFEsHPjhD8c6ng8u1sLYAaMmj8vVu9yxjbg4foU9KiJcUpRrifK4riHen16xgWo4ZtRBAoBDX",
  "key22": "43ToKfRRqNAv5gcCnyGHhc7t7sg3EhctRiDSLxNUmGeyDtUTDjxKxZLPmENh3rkBRw6TTFC8n43vNZ8hB43mBex2",
  "key23": "Hckb3wwbSoBfYzAPn6JwjRtWp1vBsDD9cai1XrTSkQwTG6JnSyeHAcARi73faSkBiAF8MxTfLMAua9HmTUMH8Lm",
  "key24": "5WeB8jSHUF7St3XLeRR9FZVYeDhvWYGTLRu4xaGPsh92hTSeB2xUqcuy2kW1keUaHLks1odcrWwSH2R9QWc8EMep",
  "key25": "4UQ836GBJvabtvCrP5gJGnAiDD4ewFgFKScPSEHXNZjR3b8hwqswHFPCEmfk2gXrzxLQfK1G4WMqArWHKKmkeyf1",
  "key26": "447GXPDDRvRPmVGQMrvpftGjCyv4bGeLuj1CdecSM4gbSKEQRYiUimDeD2SK4rPoGDCg5HujQgKbe6eEotcukmfu"
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
