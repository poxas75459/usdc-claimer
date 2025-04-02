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
    "3bquAmgGoexAR4gE5g5hjMrHKKtEN9u2oXm1FXpzLzEAdzspcjcR3yitZKq62Bz9Y5V39Ak68jXMLkvcL6JFrCNV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43zxhTojQXNJRpFhy7pC8PBjUmdjrB6vU5cyL87oBkjNkfTg7dqDCViR5F131a6DoF3mbzP1W6d9uc9by527yUgh",
  "key1": "5LTL796PSxo8keciJPceivuuC1hCT8nSiSoGWpt6EFwnqwLxVn4U1DuomXwSpZMM58JF26oxzuZ6ZfC7h7MBZheA",
  "key2": "272DyaWyN5kGDVdBTuKr62vovSzkLUkmYeZ1dvVthxRdi1qPK4qzUKqfS5CqGw96ZbRqFxdCgpUoxScwfW2shJ57",
  "key3": "3RoZvDmYZFVLQGgtL7Z6auRNBQhk9YJ1wvYDyWz3zusKmvrywTAtxx62vNrZSNtMtzK4NF1HXRw5B5dx7dtkatTQ",
  "key4": "2Na3BNxW8q5AtPdsc6aS63qskE8k1CkrXoEQGrWQSK5UMtpDkCWb4a2oSuZDYCndQ2ppML4hAnSEUZaL2HAahPok",
  "key5": "2vStqmM3X1MjSyXGSQZGFhfks7nSpK4fsby15d4fLTXe94MJhwPqPBrtRKfQeBQVc6NaQQTBTXhwkM3HHEpa42WV",
  "key6": "2gmr4s3TSnv5g8iejhUebksnDJu7C6zq1zuoVmYZcrzayqdjgWqzRdAP9dzkLkw21H4xZ9cGQvQrbQTuHmoqPuhk",
  "key7": "eKUvRBXxEerk7mrXCzDHCjQzDeY627cHSgfEThXLcZuNbYc4nVXyGwJQ7KLf1VEdVNdnuRnwE53RksFk1BvQVhV",
  "key8": "53kxHxGyiyyJNnnx4zQX41PWPFETy3kYQawjXQj5b9pYCYQpuPvbfTDZnwrk9CpLfAVBvTyRom5JNGRrYbVGUTLB",
  "key9": "4CAqEJaagw63erPvxHGTQTdEBBS1HH2eLNxo4dp71UHEvahv8FVsYSQk1AnhcFdBzKtLM1wrW8qwgAHrgkfPvY6a",
  "key10": "3sVWpyAb9RKJGMYy4EaQ53depb4szJJWQFz274oMwnf7oC9Cy8PuvZPnysHGfsheGCnaZmB6Hu8jngUwBFgs3o7o",
  "key11": "4vCjcepPB7DH7wSnCBb1ouDcVHVGQ9GKRGEpgxrZdc1qXgJRM6XqRMBUY1VwemfBW8miqy8n4iNVGDGLyVBNaVF2",
  "key12": "5GAgVNBqxFR7scoBz8TccKV81Y6Ek7UGrcKKUvuztkEug5URvfipbbCeKCJvvdBZ51TpY2QGikn4wYzCW68qSmZE",
  "key13": "5pQccCtc7hdSXokpgxn8zJwzVaRojQmbFdy49EZwzKGHfS6weJf2rEjjGrV1DPDiHjifgpwJ7q9Heb3Dko29fybz",
  "key14": "22STd1dzfzQKff3AhzWnCPUZ16iC3FSNC2neByFPCqSZHdNAbDGuez26yTbrG2cxhcVLMBmTAwMwE3AnQ9ErCdo6",
  "key15": "5wvfw61x7LWtoQpKjWdjt3Svw6nM1turs7sxMarAvzJqJBT6uenw5cJGKUfoHgWAJrGinUHZGpNxgcfmeTweUugn",
  "key16": "4jiyLKPs9iAauCb2sW648HJY7inhJrRBurggsvbF8bC7jh5gS51xSX9NEJcvLyEMCSuwtYUGjk7CrEnwiEh9hNJL",
  "key17": "4CaSjvgsfVoYUwcJrVQvDQ9amNkBdVgPhuWF4ZtSQYF6vi1XzVCrZBWyiHwUioKWxTmi6ms8PfvHUWFivS16fGYk",
  "key18": "zixNd5X7j94rQVatWejrTVMenNp9qpnmJFhfjcF9oCZkiwsBF9AJ918iM8hWadsoFGQcKcZt8Q5R4JnjMdPmSih",
  "key19": "mGCRLxp4Mcvg9UsqwucniNGuwyJpjMQFEzY8ZkcVJDKbpiGqexLPQjUYDHMrY1XS45e7iG4ddoaSXmsk7uXxr6C",
  "key20": "G9WqUajc8gpfZu7igtDW7Yspv5ELfXCyxsmBkBMiXpW4Pg7q9TbE4FXLbs9UqB4qnyp3FhXTNMBKUyGxrd9xB3V",
  "key21": "2DWXPwBvn1qb2hnywfL7zC58fn78WDip5mRZYmyXXB2u3MafxRRD8z256m947n2N8QP3ck193atr7uZ9nDe3BXM5",
  "key22": "5wby5LAeyaxPUoxuu48qDUfRn1j8Dzhpbk8Q3UqjJ1aZ2VpGZv8aAJ1UmGpCuV5mqm32MRQ1Yr6UiNqBgBnnjcGG",
  "key23": "3T2FhMAaFqrvGyecmSQCyd2nU9ULgxoFyaKfjMQfNBN9auG3JJthsq9Fk7vqzUJ17fDSg6kgEh4ARet5LzYVT1wW",
  "key24": "2viJaWS39UqYGT2JaV4EVxB3UnnUM4X8V9PWSteZ7rmbeHfQe3KAZvuJFLHy5qBR5eLhvguukNNVtbfhYR7PSGcf",
  "key25": "2bCstzq3jitbRzP4P4tCgJoVx6EhVHnVQkLjZ54ycEGkXg2upma6WNKwu5PqYHQVk73kHhzHaZ3hqCFFGYto9Fay",
  "key26": "5RjFXLXGdsUtCppYFpo9fMVT64X299EiZCwLK7TWkUjqYABQuK64ZyQ6nAyFC369Ww88xAo4v5G1hGJLX1PWbh5B",
  "key27": "7hbaHayP3mPT1i1a3ydeYNYSq7Gj2MMoin6i2Bngrb3M8QTq6sdcskEdNZeNfZsy9jXN1tTapuvcKrDd6rJEqV4",
  "key28": "3qJiux71TTaMALr2sViP5R2REjp6jY9i2N1uoAaJaYuDUxGKJHcMwHHmmfuboz4swvXRe8MKq6WYiWSfDFdYimWn"
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
