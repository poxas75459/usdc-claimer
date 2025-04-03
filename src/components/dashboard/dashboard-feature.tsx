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
    "bAQB72sRhEdFoKKe4TpoByuowPVxQv1MU8ESEauaHzYURChpuT4Y4bG9b9pXG1J3oUbUs2QN65Jq7eLaGubbwpd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h5UdZySQecQoj1NZungqEvrrkEVkbftCGx95VqN6wHdy8suePdKByRY8kBuzRDaMi3VNrgMrJtmpj7uXCufohDt",
  "key1": "82kkVbL11qKcAPoULGdRLq7AzZLrLAX7jWSSzz8bm2H3PrqZxPsFDrxxy59JEous9XKiFB6WtbHnjEpo1JHXxiR",
  "key2": "3qhosfgZ8wre1rNK4gEX1Pa5gmrsFk3MXMeSwn321R3wVBv9HyzZ4suKaMzz8iZsbmnG5Ly4PwhWAYTTPSzcVkRv",
  "key3": "4hPzaAnmrhGeCn5dNt7fXsPAUETQJ4e3NzoMDzwo7FyREij3o8FNnqGxvir1J4t1q2kAYtqpja3qE2pLT1sdsaa2",
  "key4": "67ijtsVx5o2KWLxw9p3B2UYawfd3uhs2NMVn7cdS8c8kVrVEEbEoHFnQDTY9sRYhb7HCo1Ter83dPkd6v6FXazs8",
  "key5": "5QzRfzhv9a4oCTtNE9ea8XZ99ojXMrWiSMVNZpJax3o3n4z7Fin2nc8DFwJokj2dMut7ctRvNxCNZvWj6ckHMzKR",
  "key6": "4pvM5c9mXL1SqNjBAd3JpSBib6SL1GnzEX1zZSzApPJJLbMAAarkWgXKy1G2zU7ohayevELjVUqkggW4Vh73nt7a",
  "key7": "4n61HYA3WGhyxnz3rjHm9xEnjHrkU4qwBTVuSyGJyKwe2hw3za29YMY1y61KsEbeGuYGCpfR2HM8yWf4aLMfiNGM",
  "key8": "p6LxqNeE64kgUgXjpRZitzm6VnQw4qdWa9jJ4WcDgYLxagicmyjKSdDPWZPkmu5vBQ1TWSS5w9xCmCSFCPpGqih",
  "key9": "299oqutYx26Btb5TFBLS6sTae67gQZoEV3kgv43DA8gizDGKYx5xjMnZnMmgDwUCyxh8amH8733v4XzTiKFPHWw2",
  "key10": "2iKGKoX2kKYk1xjtaVcLmBwtvf2mhnWLuhNTTAKvfM3WkMDd7CB81dyKTBRbMSN3g2SWib147veXYEPpgf8iton7",
  "key11": "WvcGwRwp4gmwgkCH5LDTDd5dDudwBMbYY2zsWMCuhe23bFV7b7ok8SdS8Pp2wPGuuqEwXcCkjKmvX4qWS5kBwkD",
  "key12": "5eSc1QQnPUHbt677YarX33pxVdAi5sEb4Jf6L9JgT67ivZxdPi7R1eQ79CeGvZwExeQR345XbRXSy6mGHgPwozoP",
  "key13": "2U7MneL9QALPDprcGf9Zm8vk3bvZv3Bv7pPMgVvGe8WHqaMjWmaqZxjvxVPwsDymmvmyV4Exh8MGTnVarrsQEyjf",
  "key14": "2ohm6Z2i11fuugqMtCd36TcPDJzx4KG6rVy3cL6SyDqsqsAAcn4atGGzUyAL1XqLpwuFhRbSev3M4fuKM3vjttt",
  "key15": "41qogK7JUFaiQhSBgRoWJx3Hfdw67UP2aD8iWF2pJo5FvNhGFu7ER5DqgCZ55vnvAMrxiGxYkxTawE4cXgjqV6AR",
  "key16": "ASr2GDY7xhf91dvHJHHUAZDGjkjauHYuPiRp4VcMBCR1LUemxEPqa3NfnURsbJUzNBL37sS1aq8qhHiV9WxRgef",
  "key17": "23NTbQMbtT1xSNy6hbDRawDP2jZXFAhNeSu3xFknqyuKDUqG18xZRZREfsiPdqzd84tq16TaobYCv5mgDBvdKhj1",
  "key18": "3YQ3JA9ZDwRpzWuGzGiavBqziqT15PfUWR9eoHkbYs7ZmpB6vjbnfKSnCCrDHHKZjYCL1oKU1Vnrs4XQJdok5cHc",
  "key19": "56qyeHQSK8gvNZoSmxTk9yJm1LgVdyhTsoQCVQrKTyvW6fvxe5Jara6mNGMtAjNnSLpTJjaRUyRsU1Ti7ttJtJ55",
  "key20": "4ztiRZiuAnengaLdFcUoMZoEihnWCtevEexHJHHYqXzjypTLd8oB3V1wjZ8pJuuKRfB1aEugB5eYnYiVqgUnzvnW",
  "key21": "4U9kJUHDZRt5eZwLvTEDEPDTimoReM36bUu8E1v13Sfg7dDX4UaEfMXvXLDpU2j4icz1R8VppZ6ps1hjoGbKfAYw",
  "key22": "3DbZLkDFJMG4bCb4CDAQUCraQE7qxVngEnrfAdMBxAWjEyBpAw3iXuzMZY5FAQyqSCvLphSc7rrrNzrNMxCojdq7",
  "key23": "gt8BgMxank8WZzSukf71TAr5KhHsP7wfnK7BHA4EDHMBTY65d4zJKcXmekg26QLT3LiHywTtBpZVxdsMt7SAE3u",
  "key24": "56fLUxAFd22GdL9JgwdGenJZmq5ytush7r6iLv1azmeCA9xdgThLc1bSpxYLJx56kaSyJtiTDEoWDWVrjBjJJ1yD",
  "key25": "3w2mpRNNS6oGuJ4emVhBo1r9Hz9mY4kNUTjZGkxSXMUsNsxwKvG3vcxsFMjod9w8xWaRQZPt9yyNFTFLnuf28pqn",
  "key26": "y19FcBKrSuYfQVGXTooDjFmXMdqrBwmQsaFyYECyHxvM33MCg1JrBLjwpXQYceTjEVfx1y8sXDmqg6VyTwUTQcX",
  "key27": "3adngbmpRa8mUDoCaxMoQqnAuD1CWSNvhBCH2Zbpp5woe9pEYwsZw11TRvu8B1p181T5vfG3R9MvdchUwtkjPRMs",
  "key28": "4TixBYK8AyZ2Pcmd32uhkqg5g1vCSaGbJHaY25a1Rvp83v7KPFef8jq9A3z2Ss5etFABPskDCFakf33n53CYFSvJ",
  "key29": "5VFwWUDuxScCSUR11ZPyDqYacwM9ZyGfmUKm4c83dt3k1L9hr6A1pYMJLbEfn84NAJhGJvqBJWF823qmnAp1PFqZ",
  "key30": "NGutfiMfbCksK4zogtP6MDZY6UJetYF4L2VdnVwipknMHg4bjfG4AtY9eZ4bbtheELdpLB7aVrY7jwyRA1M5pJG",
  "key31": "6LT5UogsenNP2k8umSxHf8s5GFtu1cE5X6LrigKW8rgWXmJokLiVjJVHo2UbTyAMxDGoHwyF5eVgTKYQLfnJ4XL",
  "key32": "3reNNX6KkDYebLBpDHMH13u26q4yRqBmGzsvhKTzo8dhvWs7726h42a3ueCm2jk6XSq5GAc4Pw7y7ms3jiqrmDbf",
  "key33": "583TYDSryv38LBud5F5d92TvZGV72BtapCu7g9jMev84skEY2zR2cgZgWVgKFsRhbbyMjh2eJRFgj4fKteQ5GF72",
  "key34": "3VcoqTpbi63i6YJycJpB3vhwHbAKzJtZDjv69MeScE9uNFpTM7xZboMFfoPqR9etJ7tvrmPsLS62GE2daDLFdEJn"
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
