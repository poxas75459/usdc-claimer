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
    "3VTykGEK7dsJ9NVbt97uGWVXmYFMZT1G5ZatcE8qLtdRbnuuxMeHVFMpGcKEMv6uiuG8r6KnihEB5MXPdF7rxahX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T1AxNDbwGWGLbWMttTYezGbddKifjcUjVV8ifP22UqwTYMtMJZTmG1fJTt4E4YdfXN4QBH6dWb2rheWURj4Xw8U",
  "key1": "5XTre9EYvH4dtMs3JhqptM1JDDNqzehxaTeeQB3aKiGpyYLymAjoHh6Yv6jEnxgBjvnedVxavwdesc6h3NFWhy7K",
  "key2": "22VbcARfSgr1kkUgM7ZCNzYbHaDvw43BKLGyPWKzbR8xEUcyBGT4gKZCtt8idn1GWMHUswyLt4gcHPJcRoTWtEyT",
  "key3": "5NfXcGBiNJygiWG6W12VhRFqHhoUXShjCJfRFyBzcqL3rFWRS2tN43xypYJG4BQJ4vaEcSABmNc2hxZtXN7hbPxL",
  "key4": "5J4xGDVhUvNDZGwHc4TYdq4Cu8oRt127d1h5GC6PCQaGGiPpa7di9DWprNpPGTGf3Eg9NvhSviBGk7vyhP22FRUD",
  "key5": "8bw9pDZYwofPFsbnVsZuBcnhCPtTjdHVr5f5fFKj5VJY4Tww7bt8k2upVJNVgQ5KLJx53NsiDa4EK7jkjwzWR5V",
  "key6": "671q7JwNwe8ErnKv18FyC2mZgCbZP1JdYkYibxk5arBci6XN5qz7j73CyB8cjcGQmeykYbFLpKiXdYeVc3iY9oET",
  "key7": "5sybwedY5jVX93Dv9xWHcehrFx4FPMz5HDSJqKa4gTZVcBN3MMSdqjKLxYQbPn8PmNibKkhoxp3uENQCoE93gEuw",
  "key8": "5sYk9Sv6bcrbBL6rbTSVs6i8YzTwiN2wgytmSdTpERQCdDZT48eLZt9bakMSxpNJthLNp4jMzQtAJQHAFCs9zRUf",
  "key9": "3b4b5mDNGtLV2GqEC3moJHWCRWjB7JxeRLM8Wq8wbrKBjJiGBxdKjnPpvq5ugCwg3Ham8xwSG1LwpbhimBWkPfx4",
  "key10": "4kPUAALTgvxzETezYr2TZ5gfqFNby7BWrMxccB7DinhvRHG1pVNQLNbEvohqnStY4myLoSavbhzwpPY12y7eGPXb",
  "key11": "2Hc29hepMdqbmh5xCyGPp6M4fwDUU3R8Sh6YvDsCsvQ1m9Cy5vMTXoEmJv8tng883UAus2kttDy129748hoBhTRP",
  "key12": "2kfq4fV5TNd4YpJCHJr3dc69AHyVDXXwKnWVrMkiEP3bs9xEmwVmMK4fKBFQfkQBYAzvZTohd9ueNN3KtKnXG79j",
  "key13": "2C4RXoFrQY6KzfHtHRwvPGnPAfbEVCgsaGPofmuTMGLNiuhCqZRZ4MVNn2LAXL7QvUffghCY4NQ1yaE7hXFB9d26",
  "key14": "5HiQTFmxXhUMhFqgLdCszLFP2T3NgMpWAFM23ac2SBUs4wEbTigzgU9HvMTyKeo42qcsp8QqQDJ1KepbPuVUrdmu",
  "key15": "5gmGDvRBZS88EJy8aUqWEBoqFTFDC47v7cz6XNMDx4XCJqoZusm2XDshnh4U5eVw8oHvu1yQNYcmojuRevVCdw8B",
  "key16": "5Z4d956JSjQGkh4TnqeV8mvetjybsdghdz1NwzQPdrbjhVz8KixHrNnhfcGkegeMBrXp7BVYn8ajhCsVSoBvysd9",
  "key17": "2KVKtwCg91aBpK9oZ82WNGL7G1wgZx2yCm3uAu5Fnny5rtyyysN66ZBNtLv4FaQwkDdhFe5f2H8ozokLADeLvPDa",
  "key18": "4wC96eeZGzw1mFhoPGcftf33MTScGAmELMZr64meb3TUVC7BC4PAiJAXTBeeTBbRi7eZDeKfM848jDyD26FajPuh",
  "key19": "5yUiNVpaWz4v1aPrcfQfUQwBLA6rptoTbrACqGYoyYTKsyGSAANW8oHSo3VRbsJgznwCkFVrDm3NAJMtujM65PYW",
  "key20": "4LeXbeJHz2uNvfraU4w6XTkc8zN59NRwtDSVyMpL8zAvK7zbV3z1P3vsnCqc1LFX24rBkPcgZbJfSXCsB4A2cpui",
  "key21": "3j6vvojbHHZciJkNXiyDcaGz1r6Lwwo8XRDnzLZfpXd452dy6fWcXWyGLfxYejrLzYBW5neVZEsRGNcw8ngqjzd4",
  "key22": "5pLNnRTfwk1pGygFmUm4biT8foo3dnpoq7d6myoUh3nJ8PPN6xSNb576cZ8MaRmq8ZyNXRfR3jnAfXMzYk7ksaa7",
  "key23": "d1FzBcosSwHtx5HzPft4oeZtGE34m6jXBgcaeWA317uosWzEP3JWbFwQzC5eGesmgCN5K7X24FnHwg9RkCNiEC3",
  "key24": "4RjtYoQNuQc9sUH9TMECbkRUQM35t4LCqx8TdTRHpsaCDpd83Xzt8d2etMZEUJBUTyv4skoRvu358jzNViK8J3Vq",
  "key25": "5Wk8G67uXkchRoAeZh2PHD4223FT4kjEBpUzxexMhfCsJGaQcQnjLZuhjNmtrt3bUXfDs3w9jczJDB8MxUQ8ENqm",
  "key26": "5Jg9gDDs5Gzaz7KLh9w6nixkzeYXkJjcpH2Lb4h76QvXRiAJXap8FTJuDGo88A77DLz4f1fAxnVDpZtWTScboCmS",
  "key27": "2khvDPVBjRw5LnGDaawKiEMf2CYi1xShM3w1guLYAbvc9WapQ26PHEAvBqDc4iQQDpCkTkCxvMNig69x9ovbQknu",
  "key28": "jS6iEh9f8DuvDGjRgKZoy24njSUFJxfV4eRwzQj3WiiYNQHYwFzT9bQb7FFkmQmMTSt2srCQ48nJcSddE3VRV7v",
  "key29": "3RebjUqDowm2263Hnz1qY1F6qKUnF3Df3MHVjjwoxydbdr725PGuATMvJdTfa4VypqqwzXtMCHgA2AXDzuWZQBR4",
  "key30": "VZ3GreoECtF57uKZdN9faE2awQqBSZLw7ebWwREFTHnUn7vVMpPnsCR1bVQfnfcWDmt54nsGoBJjCuKs9a9Gys7",
  "key31": "4gK54NrVTNXVkjxVjVV9Nwgc3Hcp5yMjM6Qt4H1Tw4ND8BH8V2c2o2QqLHDhcCkKiREjmGUxr8qfPFDc88rtgRJS",
  "key32": "2Bz3Z6rc2MS8bJRNpVVhtQ6D79d7ThGQ9b1AJbxefnmECEa1hNa6GAnt7rVPJLnGHURNgMNjeCnTgqvZQmRSDkqY",
  "key33": "3mXGRtdvQ1R26SGjuCcWBSTytgAP1jxdibDjDZ5BArXakZf5o7FRhWUVky6UiARMxxN51JHEyMia83JHGoJMQnaT",
  "key34": "4oprGN2wtR9CvXJfD4uGaW5RvFynpF6MJUJxZ2yu69vkiu1HMBxnTqeaT1tBzru7wpEAjpCkcywRVsUm49JypTfE",
  "key35": "2dCDYHL1hffWZT79zJif6dM4R6djzef2u4crEpfv6ZqNzj2WefQzfB19FoYmEQAnsegrCy8qYs3zgTyUUgwFTTEq",
  "key36": "2uk2TPA4GntP3L5kXtkFRsP5JFR9urgR7hRTsRN4if6QgignTwY21cXGwg7jaiDxzrfgjFmcJWJJf9y8G8ydNz7C",
  "key37": "4Z4Gotb4AGRRZgKc3YhzUVF3wn6DL8PUFBHEsEVKEof6vEVujoWnBZvuvTmXRoqf69sX1HFK9nGo28GUuq8r7ExJ"
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
