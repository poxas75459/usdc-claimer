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
    "2ZZ6anyF9GM7P8yAs7qcmMpzCMLyYwfBHvunyEyFbLfjGbswXuMcLfBjvT4NL24nwhqYdLbXmCyU8tMjcqpXxg4D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26ozio9UTXhJG394CdtHidydTN9G5Vnf1bpydA47Kf3imxMSmNFrjkSeYyxkS5aGPM7Jn7a1dPNJShKzFUvGPBHp",
  "key1": "5UoCr9yo5VkfLjU1ro3hTJAyUD9r1iiSaETtT8KqiEPUBEpe2hvdGLhAQ2bWQX2tvSuLYy6236SEKbaDCjiFwXcv",
  "key2": "EVzW1jMqrKsi8rjqZ8ztqTC1ccyRPCoVC83uGfZGcEJ6FNNPA9FoEuKMpmeAxjBzSxEonDsaHD9z6xtNsAsREtY",
  "key3": "4taQ285sx1NbWPcby8LsS5oq7VvJ4AhosZsksDiaTDSf3Jk9yK1AASWZTvgfbbm94wdrijEPmc3uxk6sL66cGXMD",
  "key4": "4GpPA2Y4BvgyQ1X37JiGYt37REnShjbXqqeNLei7dygDaWaF1SBWDDJ6eigQkCBqpQkLVzCGb7a7ZnWuRMy6a3DR",
  "key5": "3ufanmLmdkuKRQ9kEJKg5nMsYyQwUGMPS2A6Lfr9tJUfZrhecffZqxHmyWQZgfBaGUgtY2boaQ8navWwvqZCcZ2W",
  "key6": "3xeod4fQZSoeuzXswUCG3FrkZzFccQX6BiDqFPPqndRKs8WctY6YydKmCyhPcFjK3GFtcviGC1p1ZcxmokTH6YVp",
  "key7": "46z7VCYPdm6Y8BZuW6VCr8g1pghRe4Z4mjVXDnNsDvG4N2jVR2NkXzmUMYrJnvUSf6QwP66cXKDpQMMsjwze9Tjc",
  "key8": "5MZwxiKqVWMKKMJZqD8Pa3EmbQSY3FK4XGsEYJ7p3zYuE5vFHdfBkKEj4pVMbEPkVUWbPhpRe3Skzqj3sFyHzk6A",
  "key9": "53cW4HqHCUmG8LdzN5GuQepUVztbdb5S2e1h9HBDJi6pboEzQuSgUjQ4TUsDBmf4CFHNWtFKQ9iohGyp7XeV325V",
  "key10": "2HFzaDBQzvZnUdDhBvxMjnNMmsshYhtKFiERL5Dv9tkPpjFCGJER252bT5QPf7CdWes4GQ6f3WFCKSccM4Y18Bfx",
  "key11": "5K5wHLF2FQNRKYMTKDpzADHpvPJrchtVgBY1qCP5s7pUpMmoDVJVwVpqN3x1Tk2c8AEwZKStkqehcWi3q7aWtpBB",
  "key12": "5dXVnYW9VomSnLoDiEb5Mqe3DhUyTEPaY47Dybdd16kqhUE8AapK4rbA2twQXwKQTBmSvoWEG1NuWmhzn1tsbpSu",
  "key13": "2Qx8WaR3TRnG565NATegQTfXzEWFbupMfTgZbtpa4UEsv1P3QpWwfwC2ew4zv52Qcd5kj5eAA6W75rgCVWnMnL2x",
  "key14": "3VDE2LN3qpFhFBM61GSMDkuctaknoMwczrA1iGXhiy4BV38vSG299zXHv5u2MNPpyVJj1Wp3dg8wYLP84G9kWa6Z",
  "key15": "5ZVrXt6ELxR46hWHcnSqN5Rtiud4jySyWBaMuUKH3w4WjZBmpMXDQiiaJLd9DB5rLDHMNQhtEzkXBVGX4osiRdVA",
  "key16": "41P9j6Fzvbtjw2QiQ2jdKK6Ywh4CNDNihwUCshjqwo8GWyjotyLjzM9AqSjg48JSS8HcXQd5Th6dwFRaUaBs2hv8",
  "key17": "3Xu5HNZkPrdL1QSivwGF8RvHSVSMJQzTocnxgQHqERhPnfHN3sw4Zk2aHBrvVysJTqiYwGcqPFyVKBUJt8SGgRwN",
  "key18": "4zwef4pf2q3QEFou7pHLV9fow7osq3Wz45FGCcT1FQp8zai5sUx9U5x6AekK1Wq5zP91L44PPH78kULEk2ucAAdn",
  "key19": "3oS4yMQyPTP8P6v6W6DLCU75TwoQXpYBpmsPuxr5XqYJDrcvWYLRCx9aTLmL19iVV2CTYz9sE8P1L262qNJ2FGTM",
  "key20": "4wAoKz7zQ6fzAkdotEfpmr8jVr15XPn6EuzF1L5z19KUo8sygzJ99Htr13hMmzxy2Dq6BN11jBUEcQtz1iV4x2Yu",
  "key21": "129LcK3Q7FvcZoZFhLmL5ThWX9vdpLWP2CQWDA7XogTC9FJMqWmfJknHNWsh8wc19sEnsUygB5jh3g2Lb5mtzGhX",
  "key22": "5vVgX2rkMQxRgsqfgaSC88kX8UnUhQ5nqhio1j1C1y5FsR53bXMckBjxu9sHKE55eurTfWiQpZAR6Ryg1WGmNnox",
  "key23": "2dYe9jkaPRnPn777Lp1aqtvPn6T2mE7xWKieGnEP2tHECGZbDvU2qqVens49XR5W3CfirDHvKbQkqvwz3U8L3hbx",
  "key24": "5F7MHm5Xdhn82uWuj1Uu5BkkfmXDSk6rQ9xuf3e61WBGPH4BPKxXVm3yjbDVuDWGeHrYLThFiA6PvEyawfERTYk5",
  "key25": "LYcCn32ikgCMqTzsyC3fjpmYZeDXhBFJAUHNrvX7A7KQsxurY1kdTC4nUu4N8UzEpaGjev7A3AG5Pkb2Xjw4ybm",
  "key26": "5GBU8GtVMoq64ioUsW7ZDAJLTwVUS1RfTKCnfJXmfwuAJxg9PHuXvVE38ztogdGUPNZqhhwRRtGfBuJfLQbaHRz8",
  "key27": "3XQx9h7WAtVgeXc4Y5h7oes3cpaGHw3EXoQyhHrt9hFpwm87bYDhCjvnqGqy7jgJdVBUKPR1osjU4cv5wQ19s5DP",
  "key28": "2KwEgkqh5y2Yz53A4iD7tVeHp9h3cVtG5P1KqR9ciuCojpA1BWDGJfvqn375vMqYYuEV2pUrDwD6oQejTu7T3j93",
  "key29": "2PBCYcZs4Mr4WsfomFuNYWeSoeYv55GayyBj78qzEDXBPq4NgtkfsKWX5U81QDWDA1dbR2NoJ7gY4PcxipHcfwMC",
  "key30": "5E29PtA9rkchxsCJ2AN8HNJxwLyfJN8W5vF63yYdcuKNVTVJVJKHdYtr9UvWy7y9cWVGxJUq7ZVXbJp6HPa4RFfM",
  "key31": "3P8f8g7hM62C44T63HyaPuA3cQYeqAcdyYcLVHhVKwDDuHJBShercoXA24inzAmFycmLMDFEB7BTQrdpyow17jR8",
  "key32": "uRnMTtMoBHgQcR5nVgHBW3v4q42cFTuWNzNcXapq79GVfF8zTt2JLhU3GowWBTMy3hJ3DvAAiBarTJ9FXd91Rwu",
  "key33": "1SSYHipD3XC696WUUbkCe63kGMQ6BCbueEgP3PA6oxsPh3obKZyaNoaGS3WbPLdEf8HahnN22MCWJSeg4MJX4F7",
  "key34": "5GfNNXSQC6gtMaYKZa2u217Dr3mSKURsF385strQafmtVKgjKKhccpk7mrRmgiqKZ92WojDJ7VfkVwRPTRdMGpdT",
  "key35": "nnnzzerNGrGZwvnRtBbqSqRdoV1Xh8ZP3JYWAHHzxjjU7DBSUzFXm9KmJgbqSff9JoTAaD4R7aXkHJGJhbAg3D7",
  "key36": "2tJosajujQu58uLBfsTqMaF5dyz6TSqaVzUoSUA1vUac9N9tr3fitJFmSkANLoQeHnFRZpmMEdBv4WfwtFmUe8U1",
  "key37": "GqZ7N6QwPUKLZJakrtwpqjChW5NY454fGSbtrjPJ1mtjgFXw4V9xjvTwfX4Yp1Faxxszdkdie1RLUg99WiKFzNn",
  "key38": "4g3JbHQEYaViXwMUbzuzXUNVQHYWb5d1ReYcv5eoYs3LPtFdrcMxAganZyZoQutCX89ygcG2Eifp3S1PZ6XpkuLH",
  "key39": "4j6gfZyR94R6hvw18gemzzLHGoQAyrLe5dAfk1G2t5Mjq9rX614RnWdJS3pxYWhZMZSUBhLj17gCYAHBJntVyuk",
  "key40": "64SjHweN9K2tM9HX7m1F4HyuGPzB4xMUhfm8QkdwXMLgGd9xJK88yrhuFA3TUVA4TQ7Wg9dmdkNJP9LGazMWeCxn",
  "key41": "7N2gag55gqiA57p1geXXzwHnewfnR5BNz6tLnLArTkua3TDBJNJ1ZWrSLaQpMELCbpuueqcVx814tLueCdT5JnU"
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
