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
    "5o21VzxbXTjEnj9T1FiuJtkmTGodrRZF4472vPczWkWCFb4mhePFRH7NW2999tJekGN1y4zRmt13hEDFmVGtNrh5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZadRtUcM9LaChbuEhaoHLk1VPTgAvLYyDWZatWoWhkX6HkgLcftW6qsDWS3xvzyKCxYpKbiQu5s4s6Kzup4Qa8Q",
  "key1": "4PqGfhxhP1jVHkoR4Wm6x4KPCp43rYQVvGKye8uLJmGDGPnCZjhZoHFv78A9XGULtJ4XRqLSeE8n4AELcuXe3MEq",
  "key2": "2mTnMWNQbkEBYB3wiKWvqVw6FAE6PcDT9DRimo5YYmu2JNLXh6bu7qP3VxUMc6bsMNcj7mRKH6bmFhT2Q8H18n7i",
  "key3": "5nC47RP1rxbDvhh413VEfsxUT7n6Xs67RhBf5daKGn2WdDiDzMVn79rrHApgK7Kzc5aWS19VKyYHmVGRS3TDcxyy",
  "key4": "oAmRc5in4skJe8gmSsffzvD7s9RaqzinCfi5GuLHojXLTkFdzqmXrz3wos6MyKn39ZnK8PPxfqL5dEWAQhMjJBi",
  "key5": "Hxv1R5U21FPE2EwcoUybbASV7SEafrn8zyeYFh2PVaro5VvpWBmpSZJZtBdTUsLUuJosBX6KdBpCXwhutnnzjHP",
  "key6": "2j1WMqU7129TbjqR3BJNdHbHct4hNMciKcKkFvEWqQUPKYQJKtm8XavagJbrhYe7WHVYEnRrEKAdhh49Q7dQGXit",
  "key7": "5MwgBwCxpnhmKBv4Upx5P3WtcKyqzojZJDxcUkQdweUqECxSu9SPUMsems7vCgU3mK22b7CmLFYjkvVRoc8W4bEA",
  "key8": "2dLvVHEFa8wLStyCVPAyttL5UAXZ18kW6CPKGrATjqWDnGP8D2sBxM3WMQKjEoii2xcdk57LAHmcGGQb3uGCGvHM",
  "key9": "4UB6UNBqaMq89GZ2kPH8ujdwzVyPqtCSGs91pGpMUCbxFY6CFEGCDERXdJSpfrB3VivUTMDYvRvXPxM6Tv7VGdbS",
  "key10": "pHr9h7en1DeW8WjRMYYSDwAxZkvZSs8XmoUMLjaXk1m9Bn4RR5aBFFW3CzYh6piv2r7H3aW41NEvqNCoxpfxvwD",
  "key11": "2ZKxkm1YeeM5czHK5vnQjRzYAijzy7xTvir2HfQMiMwEEpoGxYmWZ67hsYTLtvvAMHV2gVuwMeGsSsKEpoe7Ft7k",
  "key12": "5bKm87BaisC6euxHP1G2q4UW4yudqgh7W1VPFKwHp7QARdkTAJxvJKhGDZrK4PMXnGycpMhx7Pd72YXW61KtCAXw",
  "key13": "67M3nhSZsJ8GJPkSVdgMJXUmMNaJm2iGZEzymf6Gno8wD6wez4supCcfUdoHHr5vEDyBtniJu7WynBLTsraZ7nL1",
  "key14": "3aeHrhvKmcVYUqAnRJfv6XG4tTkop7Tt2ZST5ztyAspAQKm8EfNKZnwoHyVcoUCVnuxnfjPyrV5o93SxfxFAUJds",
  "key15": "5vT395TRk3oFecL6aRWkhAoBPv3YnSajFiN1u2evSt6SCrRjiDFyxzSLUZJFr7FNwAvvjAwTmjtx23J1cePxep5t",
  "key16": "2ApJgv2aw3jFqDav1xhizWHn9JUmPHaFN9zJnf4JaN91upKFMtAe1K6tKRrr3bGs25GAHrvWvvMykPgUpbjM7GYa",
  "key17": "4zAtGfx3TrgCYr9yRpatKoF85cqpNPLzHA88TagAoSJKzw34UjisY3BkrqagKPzGoZQWs2y1ZbDvJie5ujSZtWrR",
  "key18": "5Hv5Zaqg7Cgit11GxPdq8Kt1dh1XGRWgraMUKzQZpXDWYC91b9UL6NQiJsq7X8JM5WPejavMJkKh53YXbyJsCsqp",
  "key19": "5ZChbT4ky1vq6yXagrGDPAUARrfc3LRCLhiPLqpEL17gFFAiX1DgkxViUrcZ16dZENQ1SjFMvZy5mkD2h8UqSSRq",
  "key20": "2smvFtRZt2otGrFZZ8bR7b8XSM1RQEePZxp8zAYaiqBfJdqJuVxqgFqd2G6Xm6fbagBP555S3rPfsuV76Y3jbzLn",
  "key21": "21yCm1ksPmtXDc8m6FknaYdPHVtez4pTE1NyZabDz86w4NLsxfQFLKBhADx8FLhnQ5gYP3y7CoQd7aiJYAun6xPU",
  "key22": "3EkoBRk1NKtuDqtMF5tdJaYkLK2ZbDPi5z4yCcoQRQpsshzhx3KpuS19LuN3T8HZ5skx1bLBnV2jCaYFMJ7Yw33h",
  "key23": "4pcqWjn9B4M3BbkbdCpAb6nRBx7MNMJhMB24ueG72QLmS5jD9y3Btw8ks9zpCdQk3r9ZEpfZF62Du2CMJBMvn5Lw",
  "key24": "KPrnYwesK9eWnTbhSHzHg2pJwWrmog8sKWRkSiu11qVCuK7YZgBcYhvULKhH57K73E83evUmarTwjrWkvzZ1PhT",
  "key25": "3wHr6YadJY8naP5nTHnmedcxMikgYARBQ44ErcNLHMW6caDNXm31knso6WQF3ZmYhRe1BfJicFGXoCZwA3kBGyEe"
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
