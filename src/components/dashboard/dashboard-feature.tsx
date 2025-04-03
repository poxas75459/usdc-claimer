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
    "4McHh5RaqsRDpVpmbrEVm8Bb7bMLHLtup3b4jfkBS4ouDywqrVgnzYkxrctyPf24jyzzy9DiXy9HA6NQ1CithN1F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rvwofuV1pMUkumcE5wSbtLakaLyDmy7Gt6xdBRrwkpD8fjmkDWu4zJRDz8GdTMHxJyGQZ9NwayLFi8BwPvEDtx",
  "key1": "5UQzen1NMwFS5KGqYhBVxJk6M2VfHxE5bunx82HGUFoqNruE1MPPzPeoH2CVqm3EYde7xGBT8mrkcpcbZCuv1sb9",
  "key2": "4YmHajJZPQAicg1VtmhQ3KGAoDAgTx5XQM7LknsCJ6qPStKtAKvaM898JfEBTYPve2daxCDbWvc7UFoekaTR6DQJ",
  "key3": "5Y4R2ywe98GRdsGL5RxRwSyopwVxL1P6dCUTJEYYMn3aKUVuxjRZumeiLusC9QshSRgeT2d9LX9vZmp4e9TvwGa6",
  "key4": "3Emf6zd2V7zs4HbYEF9MykkSWYAWkoihrpQhYhbBbPB2hJowxVHNr39tLvHv2YfxwKNH9yLnS9NxszmR9cBNS6Hi",
  "key5": "4XRf53jYDsbXk55T2MHJoDEN6qjs67AZadrwMm2FM7VLyVfJcUhPdYYDHwArNPurJCPn96GdSFZKTF3q2ysFqbsg",
  "key6": "4yrqXqjUCmGAR7uVXnQ7i8MpcgRbRxt9R87rhS7DVzHTbznovktZMyVkK3DsLVEvs8vKsmWFXJMJQAzSychhMLPh",
  "key7": "388e4jRjUXBae4EVkm5M4hZP42hTNHYKUXB9g7niawK16kCniMrYXiAKYYykLgbMQWghyYqhMcFAiAjNxjGuUxK6",
  "key8": "4u7QhaqqhDY7ojWS45MFRfGCNKbikF1XCLrBaQ2ooZcsQL557vmnaXaPsn6cudF1CH15ouQV11YNbgXLGifEj5bU",
  "key9": "4krCkXUbrhLhcZBLgBRLfGWiiB7DStghN8oNgbBnUPZKboTrPc1yChg7a8QYTdaKm47CDVAVwmZLgYxNqAmyBF3H",
  "key10": "5gzQbrsnv2U6kCp2wBvdpw8KJkk8Fj122a18nQVEYo6Nus7ZTrW43GJkxiShAdHsmv5uzzXuLpUpBVzn9KWJzkSj",
  "key11": "3itHfhTzX9idAaTjg8JXiwzyidT2bs1SRUmZcGZYE7ewejrAPWsrRzZ4YFr8a1fpjU5qvPkCgau3y9UYrRP3nct1",
  "key12": "5dTMUo7nm5P1hbgg56nafqorGBYyRLcMV7aoke3b22axHpA4WxkdcBC5mDSPDsC1GcTCPa6JZGHoHrkcNmyhkhHn",
  "key13": "3nAUfk6RX9bErj77yJkmRh94VyUEAXmCbR3Dic4zS2e5MMPWbFQbHKjHrP6x7d3ZWNN4aGoiwRGS7FxyR4oQRcFF",
  "key14": "AHCutLMXMvkUPT9Szwe3VCzLQvURhBZ47f8ap4KrAPVHMy3psgaLzZksqDmSUfZBXNEEY2EBNo6SpjpNeiWnk8A",
  "key15": "3mVQiGgEWVFnNM81u5i4U3XLwjBHcDoxGE8bXeDZ7e6tL5DHyPWnkAoGiqkvUh76yz667RYa6u7Qxu5ZSWkd23Rn",
  "key16": "2XhwXnJnBKahdcTzb24E7asHu2xRd89jaWEXBvj4jZDL4QnC7yAaQzKdeBcxeM8PKuZiwP7DECB7cLvJoZy9cUwG",
  "key17": "5hCDenDxfzPwo39jfToqg6QyMMfrShUhV88XGfccin1L2KBYHeoYQLz9WyyoWSvWZUa32TJkDkDsy1d5na7EuNi2",
  "key18": "5WwMywJioZJRWxBcHnwQL3RktHtDcVcrp4hzKRUZSayY7iJWwmtTRELgwLV7tRydxu5uZRd5tKC8P7jNkqUDK5s3",
  "key19": "3HBmof9AH9fatGZertL2KWQRVQttxsZPoBvb1W2FnFyc8X7UnFN4mUdExucM3pfcAbKLE46fGTjuQBUk9rPSiMby",
  "key20": "4M7G5kDAtwBLZy7hR2CKjWH5Ko55NAsgSK1DLUg5ggF3VRvFNPsFiP9FkUuCBC74DPzLeMYZstS3EWo3Sh9PzuC9",
  "key21": "2MVrv7eBGqE44ncLNPVKgKLGkdNqChQriE7DJFauHzJh7fBhEjpkbnkYC9wVQ9gMJzBF5synTAgcRiznLM2V71P9",
  "key22": "4g9AHju6ttY8hr5ggnVV5d6wAa8iDe47qG4GDPyNgPS5CQmhhzh41246s8nngbjri5bad6X8egwUFBAPZPpq7eEp",
  "key23": "5a3hJJGr3vNRQQUDf7hr3sABn68Sgvas3MwkufLPJR1MuFVQSmYRNbXnznuK2NzsbYFaSWg6zj3fhofRdF5wd7Ak",
  "key24": "n8x315zi4qW1GAzRHYj94qEqgm8DHBJdXS9Ksxc2e9g88xFVaJ1sbMSDtvTgDbvicWGYSCnaPFijZET1TUjU582",
  "key25": "56gVjb3KE6kjKino5ZF7mpuDgrHCeKWJezs1ZRaDZzdGBBpviVTaex4nqT7TC6oUXQfnzuPCaEDtjtDUumLpmgHR",
  "key26": "54oug1BEV9o3fALBrLb6ej5VbefcvD3TMsfAZisE5cNqHS2vQeSQKR7Boj7G3ja9B2uGh5dWAXqZo8BjAKoenu1Y",
  "key27": "P8fnw4Eje9vRCL7e58xaLUscZxGDeJfTbzY4XGRAdErhs2PDsyVn22u85rhZXRGT2mRkcJBKBNrYVs8s5wrHTxH",
  "key28": "2hXPmaBf17csYJTwazWjgC1KeKHMCYuPRsUJ9TmVnKHAse3PcbgWmh1Ju2AjRYdQVAJHBGJnZXBrAoGNLBoSomyv",
  "key29": "5viSTFLKWz8URUH3R7Ki3tSLcEDoEjwofrrLSi5aAhmhiDtoGzZeBqRb8WtYu8MqtTiEz26i4MDZbSchNXL6KbXS",
  "key30": "58NNaw2undzo1TF7LKrMuxgvXhhVGDHXkBxQoMrk9Nrm8VRtCCT8eJuQFYwjsbmFyZkiDxCx1cqVpQJNEV5xZTJk",
  "key31": "2owVFNnExvZZDvMbqBSsqmX6DM9ApxREjWVSDEfE7Ugm3GvvtvhSzcVCLKUEQY1qb2L4EF8g833wmAveWsi94jAH",
  "key32": "2TDVoFVjFcL6suo1uTXHGZs8S79SaonmzQBaUSdoEwMzDmiBuqpqcVGX7YjBq8kN4wziyqH8xg9eHxkqXwm52ZV",
  "key33": "3T721Eb2yk88iS6NY4x2KF6krmayHfhE85vFrfsJtCGc5iTfKr1iQ7NUUqnmboZ5Ayhrk3nUsbstgUbzSLN9HnNE"
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
