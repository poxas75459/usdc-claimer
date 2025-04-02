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
    "3dtf5N7EYtD54yDm3w4Y8zvpgQdVisyqfb8YMs8saa3AyKXji3BDWaqSfUEC1WL1n4m53SwNRzbtwYiDRbuYAo82"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uPZ4u7jS4BcQfJ2TN7T8dy3yyUUqtoivNtxRBBkpZWQ15AZ1JHPj2fHVTVxFbYtyeaaNL66uKyVi3tLCnuKKdRc",
  "key1": "27y6qQ8KAt7PUXVWa5P2quyo2vr8hzkBwpwQDCc9naJffaQDEH8FbMbCDsNgmHXtpveW2ihDLFKnyev3NM6mfoWj",
  "key2": "5HnRoAKmYY9RtTSrSG8GZTGn4hNZWTrVwSaNxewKsfwsgbVLRbDQA8nYbFRLud7cwnEE3pwEczpKycrGfSaFeQqx",
  "key3": "52pAATXUAN8s3h7LjDUfLUQtGkUhp3D5iiXxCh78dRhQN5V8LHyvhNLiuP6Rq9jNLWMB5iZMxaGEvWDMWBfiSKLq",
  "key4": "2TDQ7bLEhsYWikLgoiwKUMk7U1WfNVq4PC17iuucZwh36VY1M1Jc5WVeHNH2qPeFDWusTiEmUzf5rW4PMvhNb3ot",
  "key5": "2XYaH4WkdCKHqdEWzzFAdiP428z8R3bKWwnRVuu2Z3XdFFia7GRXGqtbra6cnosEC6GH8aHKr1TeXTSPuLaTz1Tj",
  "key6": "3XCuSJeTz452pybXrvUE6ACAD3H2rF2X8tJwuvLtf6qEYs3f6jd7X7YCXZFek97noncR2LQ5G35v2neMq1TPH4u1",
  "key7": "3UdpgRQFQkkTfzXfB2fqP5A1fzscDNtTgsjXgDRw2tkP7BgikNrbbQL9XYm4aQYuP9653jhJw3MFTyjo28HtAxDe",
  "key8": "4EmPTG6VWBouvQxpLRVbfoYd6EsuaUBe5AdPPVEq9rYXXFdVEBfRuDrcHQjDxpXVgun6833JLDjB22z1fUA863JX",
  "key9": "5k1MzkAFj3vGWRxiQuvsArkKGi15Cps5HPDjcCHY5jyPw3y5UbK8ikhp3AQ8ujMX6FW1sNYBqbXeTVtWJEK2VQLi",
  "key10": "3hmVULBpKkuzVHUGCcNmxjzLPgRjVMxCqZVrRsVD7akKALSD7CaS5j4j2dJqj5FqqrrrQqTpzJrFq466cNM7udKj",
  "key11": "3DeNXexTzAjh2kSL5Sf7nrr5KW62p9i6sceqRyGHBy7rRrKa47A8iYnZeHvffgaprHT1CRjXrJTDhmSr7nc4NBaA",
  "key12": "54U5JmYtJbkbZUM1gUaGUwKhQ36QDG9Jt22r2ybQ2ErAmgpwN5ftbn4UMRbU3bgHhj1i7Hc5reNf1KMSKnmJXQaq",
  "key13": "62q7J2ZyWswhaBxdqHVZkYv6CU3a8siu7yvvCsWasUpqsiMrpQi8hp2DNQRRBLmzNhYut9gkKBneNtWpqKuL2Whc",
  "key14": "3wKeeqg3b1LQQmsYWBrTHwshAhQEECd7pTyaSL9hw72k5neVTTEA2dji8SJBHYMXoee98n1ZCmqBudWEAvVhiv7Z",
  "key15": "3udvBBiF9rvWFG4iBBCqMrdd6vg28NRTP54oyByigpQXpXiT8nYJPn4bPtei8cXr1QmzAfce6QY65raR1uARR8u",
  "key16": "4GjRw2FBJRv4fCqxF78GxtPuRRR5482mcwji11h3E2SjgbpwXmQEPudU5XCV8EfqRH7nh7r64c4WG2nE8S9rrTJJ",
  "key17": "4TED5SkjzRmhYUfiwzeZpm3J5y3UQaNBBCHMEEv4gwtcxdd8MNUTv7ECVu1o17FzPV2i6n5kvSRrqGQabTPNCh3o",
  "key18": "48NoWHpLuS9hK6JqQ2nT3L2xkxokkmWp9jR2AXYCVb42ureNXh9wcZSnvExNcjr9MNQCJ9Q2WTRTHg7Fk984BMPX",
  "key19": "3s2Eeb3Y4mpViESbPX3QMxxbni1eqUmozetKMppKkCsrfVSkPHWGoRr5cAgLXruAwu5beWJHFicKaQpkbf7x4oN5",
  "key20": "3hwY8BsP1a3fjFHATrokTf4LmNE8mnaA6PbSQfiqst3jDcM2gkL5TDcPJVjmjqmBLQp5nCCpzDAyrnPqPDCxHs18",
  "key21": "5i2PNVqUin41gRfp8BsJdYzE2DoZLwbViDhoDzX7o4LXksycRwxQ87QzN2Bst91yZN9hN8LdHMWoHfrj6uEqjeym",
  "key22": "5CxzvUtwZu5RjCADgM818nCj3PvYSAJfu7iuLRGfgZqFPrYxWEzrCURCg3DMYxa6f2LwCu9DcekshdtwAnZbDyMM",
  "key23": "5msJgddpYdJWmwxaZgCu1ix97kvdJpyaDe9cTBGHTYGgjHdd8p9NfeYXhPRc2CPPJGx8XDwN3CPEZSSrvMqFhg9v",
  "key24": "48uMAMmSc1AXqsZ1pJNEoUbuidTAQRD89Y8SwJfXT3F5RNfKMYANtgRpW23Fcd9BouSMdbQh4gHD1Hc77F9c7zrK",
  "key25": "2hVeCfzktxoXe4vKr6HBG5ZyaxVXnphDZMTmCVHiK3cp6ZXpkWEj5kJZdpspT4E8oPCNUWepSqG6r3Btk5qR2JfT",
  "key26": "3vnKpRFiiCnghvYrrz7JJtRy8XUWp5fmYQofXPWfkU4HdNtjSECjY91hmrx3QzDvFkceK4Cf8QVyRJFygeRcxWUy",
  "key27": "3URAgeHANRjHiak7ciknHDhQw16mTPr3fBKqB5GEZce86Lt2GJvhU72CPciTYhoFBF95bucAov7QPW6dxJdoevsC",
  "key28": "2TcvWmQRygjHSep9pjCUP7647VjUv83oomjYVCnqet2HiggKeeh9nsKYMxs7NSvZrnSvyR3AjdZMp1vN2emjuF86",
  "key29": "3gyrbGHS2vXAGtQa1apVBjCY35x2XnuNP7RqwbArk16LB8BKgLhks8bmvi88ERMwFyNQLFhkQ2d2crPB4gQofb3E",
  "key30": "5fwpsCU4TZBuBJtZtAcnUhvNnhmsqki4p6JUcya2X3edvRXQ7c6ELgi4ZWn3KWpZHEMTWPEBn5cuZxoA7Ypye5wJ"
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
