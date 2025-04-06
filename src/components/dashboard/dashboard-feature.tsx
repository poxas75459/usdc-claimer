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
    "43egMuPed5aPsfmHk2uNuY6kncmFHVVMPRubkU2gfLjrmy3YdEK7pg6E8hoRVhpipRyrL8Ki6NjwQpaC4CTGRmUR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "411ATCR48oSAfo3mmE1NfrHmkbudQtt3JaQnCyBL4HfQKmoa6aK7HCtkkwmovNRznYXNydD4xpjhSyj7A4dy5owX",
  "key1": "4arD7aMvinVDqfHxeYpqg2ZgurjAHjRu5ToHonbhCyRyp6rhxfaySLo2SHDHdUsPmLfjZHoDk9t31Q9ZVmfLrMKc",
  "key2": "5j7Ary9N41aMUukVmu6HcANZRE7wyUi61k4B6CuobEP2cPmULFvJmKPqV3ixFi7anuNPBmHD7Y7w8TVRNg45PhPy",
  "key3": "3Ct9Xx6vhrT1DdQyvs8HEZcDRcRr7f6u9mq5fTYYJLQVMuZZmBqHfvSW3j5Zodx5hqbeUumKJqKg9sTcWQhmXgaX",
  "key4": "325QoLg2NA7SxgtobkJW3TzSQXp948apTfTbbrDYCuDBwQ7NTFgi7EWAXsDA3Je5CYVxd1QdVCqBCihVvDkhSDwh",
  "key5": "MPapLMyK5m5c27CYKRbjAktCa9521kUPtULZ36CGmv5VQPcoGDY677ArjGwDyiNsUoM5CAfciDUX9iuDfcynq5C",
  "key6": "t8WHec66xjbpP9yAvqxVQxB4mZf8XEQ2Z1eNxiwFq4vuYmcShMMxuVzJnMqgdjh2mHgP1415z4M7CFegBsbCFSM",
  "key7": "3iwEQCumgrxfzDPaD7LrkFesFN4FRQDXJcuxSGrUvQCY1hfRJjyAVg22WYme1kKMKpShjKK2oURKnVUaF4Wn3AzQ",
  "key8": "2AbLptX8xPaxqSjUWWgkpbgcQGQy5MW717KgXT75o7bBewJvTscqbg51rYpd1JZGPZW8UE7NysVFucsRKMFdanYn",
  "key9": "3L1cKYcjx7j6sq2T3tVxigCZVzXGcXiG5Mcdb2CFWxPBQXCnnj5VoWe8okQRWxmkrC1PQUBeN2DQYsShxZbUQP8a",
  "key10": "5MjbHnYVSDJgYu9G3ttShz6T7QPza2x9QkqHiFyxfhaD3P85j853CowgULaKAg9N38a5zA1Dee9XZiU59fz33nEP",
  "key11": "49FiyMXbrkFF5KxZFk8VmZPd2Y8eP6wqog3vV9o3CnUAdYZDeWCXJR8jne6UfWK9hf8CeKoA2TJv8q5LivUNcH4D",
  "key12": "2AtHa2GA3UVzgHCyZP2rBBphVBLGo6ziC8H7AivnT8KaciGNUSjdKZPx6boHiwgVqwgPcwdWgcryGYrR1vxG5zde",
  "key13": "65iXTJ72gtTv3Z9quBPuPLK3huJQqFqp67xNuSNJzQHZed9ctr7b1nJVGKfxndhbeAEPNpnTbhsNw7JpqrhMKejm",
  "key14": "LeSMCSPafJ8cDBd8oUkHFF4wmdBjakdpYnt9u2Goz7mpeoiP6icfK1Gwa2Aafu8DAyZ8Brmx6HunK6RARyhoK8t",
  "key15": "4xVL1jV3JpgfSbSDRAsMDcagSiZz6ahpRHMDNkEabxJAPZwYMpkmxZFjmP9rWkVvfb2pE721NRgRw3UPYEWvNkjx",
  "key16": "2p1FLbEgxQ16MtxifQkU94pJBYNPFxgocFe2Dun4ZYqAcYqS5dJeLhHLyDARUPeMZ9x3DsLErGKUL61wTTfj6q6j",
  "key17": "4oJGKFebKvQJo2Cq2Lp25GPEwQpt6vXz3gqP4uRgHEdjs5m7vWQERHo6P5FnaKGWYTHTKy9oZ4zR9Yc1X7yaK2Gf",
  "key18": "2zXQwGvu2rkGbMetop2Z2SSaTN7ZaxnZDhzYX2qq8wVYXeiB19iXbXqFpVa1wvMeKkEiUKwoTRdpjjnqchPXwJJV",
  "key19": "V1ZjQUJYoFxcr1XderpTApGvLzKQ8cTTATrrqcRjZfGd5cHUUSqPgnuo21YPUkKfxWNM76YLHErK7UDA8fNrkfb",
  "key20": "2ykPZK8hMzDjNm4V7317SE9tiiQHgkUY1fGeFJvPdaLC6Z1yEJgwK3nJEZ46aYySgLoPFELjnLMHmiHqCtUkdEFg",
  "key21": "n9pm1QfbHWBLDcNuSaCt2L1eaVYNLMUdVrAHibFLVTwpEzjQsTkpysmWEJjrCe1gux7FTcjDCiEYfHRSs3ULiYT",
  "key22": "5HseuhY23Ka6QezN7dLnUopxTAo9wt4ChijEkTP29nAPYMFdGPoNBKV3yoq8DvQv2WngzB1DytPq3agmJ7CKYWBh",
  "key23": "8BGvKaJWgdyPRgKEJ6CFg29L7NM43kYZ8CznQvu4BkTQAoci6nTHCQKLJT3F1RSvtUGzmPV2NfGSwttugGkicw1",
  "key24": "MDQzd2xZHwe8hNzUpL7ntBKNLRZM1eTKgxP6Y6eDsNEf7f4632xgpBN1VtRngMxobUP6TRiBoJ75C8LiHamMzSE"
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
