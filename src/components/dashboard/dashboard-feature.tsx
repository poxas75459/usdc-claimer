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
    "ERFhKWPV1vbMBYgqmTjNjM6d6GJYzCq9rBFwbdyB53RqjdoXuCWYWG4fcGDEcCRt7Rc42PhtTqRJmavXMtVer9f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "L5N4NUbSDbkT5Cx2eWzmcsBGVq88CKDtae5AkSzaS7oLoSXkrbvjPhaFF3QHSuFyTioPG5BYdaCa75novBf1u4f",
  "key1": "s2zMshMD75iN4CSn6YzfvELBRWprceAMFrRwR5tAGPhx8NvDsmEYVSmnq87AzcjKqErbZUtQRPsHsPUY9CuaBXA",
  "key2": "3KnEon5BqUbuG1Tun4DNqaYfL7WZbZ2sCn7MWc9cRr4XgviLcaWVuuabycYEuUKN6be6jKQc3NumUKQRQ8m4sJ8w",
  "key3": "319TumG7VQv54DeTrXsCuqcFuSSaYo9yJrtVuG7kBkoTWTuqvrwxg3YzoRBwwMbpDLUB81du6aJYRQzW9oZ8XmxK",
  "key4": "5VJQAitMkvNvRYodfoFfGisMBHCnoQXwBPKEKHNNa2NhwUzVEXDnWswDkwJWGB3KwyPfVigtHnuYTocRUxDtLVg",
  "key5": "5CZfo6TEvH8gtRrkRuK2SuDf12z1s5qnHjXPYBrjLiV2nuzoKgxUSwxvWNWq4F3Hep2jfAxaPYh6o1rUzSXpHFph",
  "key6": "46DixQt9FfScUyPxrwrNLp2db8yFhoV8Yb1JBHsYdnvpEumaCJdisjinSbMo5zb5MFxPue2PFaAtZMywR5Zxip4A",
  "key7": "G1aNN3N1u694A4hYkMMhTirdbP7Fjf5kdsv5PS75uVTedBHLQ5kvLJX6BjfYSvuXKY5FAmEcdkMm1sscaJ6KgaH",
  "key8": "5fmTso4JWve24Ru2rSGJ37GrGrMF8Rr5Ss4fuic4a9a4qcT2ym434BTLw3EDqmowhNSiiQjpEy4LG99ZiK3DqE6k",
  "key9": "3cVxaEvxNVgBj3DsKHruLesXsqBTFGrwMwAS7RYePGJx8ypy1sLXm247vmhZGoXK4fRvwqzAsufUkNHdcRHMFXNu",
  "key10": "oWopVcyJNcpirnneNjNQZUGb3CnGzeHYQiJmiWA3kRKMAcBMVj3zomUFbkzqXvaZtGxrHGiLwJH6SowZ7sC8QF7",
  "key11": "492QHMzWoQqfh4u4gj3oE5gPFfzgYoimHG51tgNtvTRn72KpieyNkgjRb1763kCa8k1KkZCQQPwYZzNjxagb74sm",
  "key12": "5TMThTqED4ELGi6mLTL7kHdh49tkzKh4WJcthq5vCFVFa9MumZMb6fikxwCwVM2kg92opEYV5xpZUxg6Hj2mC2NU",
  "key13": "7ctho1rLo5Daaq3AxgEidfT4c7zXaM47VJQRKc6o2CxexSy86qgVXbjReCf5851S4uhfo2xD3FJnqWTt27fM6Mv",
  "key14": "3E5BXrZQzuXo7y41Tu9iXEAVAJHxKoS2xyM9z2WrtY9eh8sv4xnSr7Bwx7wWL7oN2unitK8988fioY7GCN8RoVLG",
  "key15": "5ax3xNoXtdwvZ8qDF3YCLeS3P9gYd6h3MrdXmqNT9rrUzDK8hsnA6FE4jUKRwc9c6Ek5baCtRANixa89RWngFKy6",
  "key16": "5dANv11BzS9P3FFviLuackj7W93dt3LEiVd2kBXqNiMeuNJj7qYcjri8H4B1J8QPPNdueKuuMF438Yat9sDiRqBe",
  "key17": "5atnUVDxLvkL5zgJywE4NhJ1Ms9bCQ1frJZWQA5enfNqxguXYLncJLzxS9WpvZsxYKkdrMiq5C9jDLRcFkKc1zgP",
  "key18": "PSTKkkbvJwscs7Vcz2BBkfpmT6yMCLC48EmboXkDjCUZCbqVYcdopPSYiFU9Ykctkfadz7r5z3LQUQidzqgMGfs",
  "key19": "4W8LCQxKP8VZau9vLWpFDqVs8ckN1tL9dxLTyY6g4jHTw7GdjK2YvsxaP4oa3GqYzkWFadCLtaVMB8jbs51V1qHf",
  "key20": "4p1hxVxFzbj1QYzAbXXARAfMKBuLksLUpd3AwufT167tnBw4vstyK6nBGQcDhWxQS7ZZzctzg5JEk49abfwx5E6i",
  "key21": "3QFMjDJPNgGDx6Vw5gV2fkYGfHsNC6QFfQUK6uirnMH9HNVehyonpH2mSZK11xjnKWyZGMzHrtoSvQaezvbe9amW",
  "key22": "537vYbYGaYPLcJjp35PxpR4tbWvDBrEvwhDT6BQypyHz4ZYCDabsPJrmaxhMpmfmhAt9nDokEabywv4q2hGvVMBx",
  "key23": "Ea9rFv9DviYDP5umfgoxwRumLRna5dQX1kDhBqqrAm9y8fCtoiH6n34GZWywsYt1FBDo79NaYWHeMfzKGFvsysv",
  "key24": "34HLCTY4duZLMEktGADakgyoRR36qcd4UumTvJWDWNFG4VfJr7j7q9C7QhYyqnVJzTTC9MMqMJNmeMHKEc4x5Xy8"
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
