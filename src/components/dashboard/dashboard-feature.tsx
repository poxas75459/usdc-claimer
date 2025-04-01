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
    "sdaDkdkgAtCSFAmBxWzdSbKvscZF8XfNYTjQ2iJ5a9KGJhhQt6yPbU1JbWoKrayuDiaBmPTSAMCStH9K4PFvxts"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uwY89TswJD1zKjb2Hw2zSiUeeG25oR1PStETrvVMVP2G3LU9Q7fX5vHgSUXuYpTJYjnM3n9mdktG2397EGk34FY",
  "key1": "z5KNKNiX3AKYy686UtSC2Uh52msMYnxXqD9jf9Lx2rCmGSZ7G7CCByREwWDWZ6LdVRdAXkTvRtWYAHkPtueR2ia",
  "key2": "4TjpM2vFa3Jf6LMDMcLpjsg7zAKMBGKzyv5Q1ki3PYHXQfmpj3gGoG4iDzegkUp7KXNQrF6Rw5jiSxAYYf3mk8P3",
  "key3": "4uAS4BdnH7LtE3zrA8aytmmJH7UftDrWyUzEwD5XXAcdjpzAFAYBFk9nQDBr8GRsSbZDSoiaKySgHi4V4KaxrYV",
  "key4": "5vjD5duN6nodHFDXLeMpceXJRoBt7yRGxfaS8TBdXDJU2YZS3VfXFyZsqtDFtvpaxdtGL6CrjCaCgDUYHqe13h2A",
  "key5": "2xb97h6sEogYY2GZWi2nMRS5bTLvpQqYkCE8msPgDxoVMuUAeg6Qf8fAobiyM3h8YMjhhrHVFarQ9Q66Npt3L4b",
  "key6": "4aZmxZ3NrbxWC2xD3235A7SVf2tJ1JJR5XfMT1gGgYLVqayBBmwLVRH6CZA9jU4F67M8qh4SUmzb7TtThyyNs3j8",
  "key7": "4PNQFzgU9YdzbPyVSPTEkwCbcbDEJHN1gZdBwSrrQnKMmkTaTpqPtNrERLXJpwVnWt1f18QetUSdVqRN3pHLS8Ck",
  "key8": "8YKoat3XW79qQxtEi1He6nruUR4YnZdwDwEgPSzntnFZioJhmB9imTokcwR1UvCzVwnFQbEn4Ki2SLeuM3owNwY",
  "key9": "49dpPevgSDBBdDsioWhsetf743JCvBZUMtUeddtNVAMVXSabJBL7psTBFxMqC4nTKvSVhA1z3v2uCRkwkaft6qcC",
  "key10": "5YFWDsnyQ5kvc51cLHCrFxfQitwfanv7E3EoyrStWhQUsAaXfXoJK41EpiNv8veDg6f4pGjLMoUw9Y9BJRXuVu8s",
  "key11": "2k3sDKLwinvuYD8bvbDe6LMp6p74ifWMF75VwUorH8DA8CTAsiARM2Z8BDZnfymXeP8r484ZnWEec5vj2noFQP5o",
  "key12": "5QNtWKNsDqVuEgzNuf76x7JvJr2rudppKiL7nso6EXxPGvNTN8xnSGqvjxFWFY4SiBdX4NGL3Cro1CfrUaroXzon",
  "key13": "4NFAPhmTYkvkWLz4M6verKDHmjihiWjEkLmVgBRuRQiG4M59vuoWwgVPsHcoNxur8E6foGRcaygMyndWN4zMk8P8",
  "key14": "2gaXkLodtZ8usJQVxuHq4jWmA24x5xHfqpHPBaxVu6m6skHhytjJxboZiwauEBRDc4zSkKfFxakyPKZTjaKSkcvo",
  "key15": "asuyWD7FMJqhbfcYWaqSuUbRjBWR82pcKx2cvE1iafDm4GruBBBV3BmP3ykkJ2LnpypoDQaoVfZygtWhLudQQN2",
  "key16": "3RADRJZDJUyUNzkfbf92JRdyYXdv2BzUwnZrSJDD4BY2gMK9pvYxK632zFVNvBwrPdFyoMy3A16FipwqYiJTp6Bh",
  "key17": "3fAvknCKPq8DeDVwuHvh1x3Tndw98YgQ6oLoEhhnv9jvfXUsf3JBkkkKYeqv2ZVaHgSQfTiUjn3d6XFtkxiW5yPf",
  "key18": "2ukoBV6227MmsaT98VQ4QTvGmfp5xqGaw8swarCZk9D127RzoGiiYrFwk9Zso9GizeDbA65w6AhGSuZZW7u9RiQq",
  "key19": "5dj28mFZKwNdGVyv8HJyDPKVEKE5AKDD8YGSpqp4fZBEvJ8oXR6W5C2f1qx9KSHbijizmBmqUEu1ZUWCUvnx9svS",
  "key20": "kXFpsqrFQ3Mv3gmtydfoTaYgZUtnNkpiYWZQSPPydoCwiVC4eDezg2GFsiGx8muhAUHaSkx71Tw3iWuymaK7roW",
  "key21": "59HjVTdVkkNmHpKmk2aRbCAMKwYq8UkMrS18E4wCew55S5d34RyiHzdG2ohngbrY5pgDgv5nqAD8JrUP2xReYNm5",
  "key22": "3zxGJZWK1dDZArMjtUBdHBnyAMWCBe426t7EEWF4HQbQCpv2iSPn7hqzJwpFMDra4BT2Mo5o6rkooLu8dp6KcXRi",
  "key23": "3kgMbJaJC38N3CC5vXLSZpShCHaSGX8ugzU73VwggNTuYMvudQjvYSGpKPJ6g7E9KXYaEBtmrUoPugV3pgRHgAZb",
  "key24": "4o4YsuEazYLV3iuFsdaZNjbDks3gVKwK9va9QLuaaUTe4BQvmMazmko6M8BpiJ8uLWebjofSThLuh76xerJ2izpm",
  "key25": "3oHm6WB7gkMvK4BrNqamQ9C7XxyD5gGqYfxrUjK26bJG7LUKaejCYrcMVfiCLgSbLq9WouVvXQGkweXUcbuLnqEq"
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
