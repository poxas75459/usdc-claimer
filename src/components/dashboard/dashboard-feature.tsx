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
    "ufeQzr31tZv6sioAZ6mb8uaxaMpy68x7xC46vjavP5DGGZsSLMWNwHdZtjtVvcUzYjgEZDHUj4V4rQKwX1GopXK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FoFvZ67qTQ63ThZ3rctHokTYvMhem1TdQj8D3dTto38Cz9LJ4aLD1FXCeUBsPdsbBiuHEbcFVm3VFgdnrwUJWqL",
  "key1": "2zVmhn3DHeJPep58qrtJGbbaceVE72LpT7cXiMKBvKUcVdrfZKgFy8Xwqac398XiC4XUQ2fe8nnQoWDoy4pGWxbV",
  "key2": "4NpFN36k943B4Nz4pXDgitCCqb8CLRUZ1e7eEaFKEoFeHgbUmocEnu2yKjsFKx1btxP8hFCo89BP6KKkL7JoNNYM",
  "key3": "UC5kjxPs4B9snnUn6i6az5CxRt5LgQHgD91YAt82fjiFVxraEBT7TttHGWhgxkFekxexaqkQ9PboGPAcfQY5Ts9",
  "key4": "5j7fYqABXbGipvDieZTERdL5dN5i9B5hCZe2egveNeExLZXYnGwXnn3aJK2zqVUZhJjqYquNQc1HYj1x6NHAFvdk",
  "key5": "3cjoR8u8axBZqJQCJvUFH15D99q5yVzb2CejFYgdRLKTsRZ9UihHUio7kRHLCeRKSQx9MiCGJ4aLDnDpxDToD31h",
  "key6": "qVJNNfFsmBw7sRtcpuxxhpQbgwuXEFpjzz1D86A58M5sx9HqR2rQBodchxPdtymTy8o2hTvD8SKDbjCmRr2vfR3",
  "key7": "3HRSYabWwHhhz5NquhvYafaGCghnZMgMHpgc3Dfvmvk1ESSkknWSgfiPwKqBBRCswExd7Wr3hDTZtdnaevZBAF5C",
  "key8": "2iVK18KCCbPPpvTUDFU8X3o1qhJTXHjR5MQBCb8mGKekh6CDXALNZGemjK2thDwLz3y5SioiswFivZWmM6E1MFRY",
  "key9": "4gPxESSwSpd5gcs6anWQR8KbTa7jGnVnR7BGjf3xsK6iufbw4uhpwwryJ7CjP2pfftxVX8jQijGt6cEoRsRwWjBc",
  "key10": "2aYGQzC3VF1o2m6qqzgz8UVg2wLz69cwDKwSSNCuqjeeyBrTvEgeoP1TYoRC5ALTLAtHXVpJQTKmBY2VCoE1gCqX",
  "key11": "4ziCDG4NZT6WwWKFjcKYjZDPAdvFhnQNm6ceYdTahrMj58Svfz7jUZ2UscG2cpYTe2e2jX3PAkTjvs5TxoWvcNoc",
  "key12": "5amea5EcHd4Tu62fpRjJK7GkiLWJTq1FgbGa79ThAzzZ9k1y2NoxTaAD9An31KprWTb5gNoL6yGRSxdNXpUyvmG2",
  "key13": "4QLx6zrJutZaR8KPFqxsjbbG3WCt8hjsfJxtF7ZXaMJHCvAdtDHxWDubwyRBXUaJ1KyGsbshb8BhSsGwHSdKcQa5",
  "key14": "o4B4SGPN92RWSTGZMJ9JGVz9y65jXSZk6MuPvi75dL5ZsqqZmQGZPngNsT7nEkYfFB5HAQxFqNavC4BCbPvLPrC",
  "key15": "3uJWU25EMerAR5AXRcW4hbVVQhWq4YCkjSXp2q9TtjyHszmpoeJQoJNnDzYBX7XJ4xjCjQWyAuQzrCoyRJcNLLZ9",
  "key16": "93o5EBE3vhScrxR6M6imsDuK3jKJ4VRPt7A3BvKk4AjnWKaQucTb5B53ttWKvJnTj2hdwwGrnTKmfbwFBKTqtzb",
  "key17": "4Nvzq6P39JGFuMZoFfMGhddRZXpQZpj2E7uNEuj3Pp5knknpcG86mwu7o7N75jdFY3oEaRtXzgYm498qgm8SKsjj",
  "key18": "38TQJxsErvGrKrfb18RnHqXuL6t2KMiPdnJ96f2Lppv3hsT76gZsBcvQav1Lq9D83QRW99HAUFBjV9RBbcT8ja6n",
  "key19": "RF4GWVfuE3D6cPd2mh1nKZG2Sa4vU6KniWJgniUHBokMaEWPMHennXvngvabwMTFyQURTUNd8DNa9c32y1pjbHk",
  "key20": "5dFZvYHMKp3EqGGcyRuCdcCXhTtuL9mQg11QXpEdFxDZL4KK5zH9ewcGv5dW61RDxWZnCAABo4VT3PJn9dLUoE1N",
  "key21": "516t22dLstwTZd7pfV3K5kPtbgfeG82XaHeUSdR3ycBFnHsNKbjGsPT4zu7E3RPxJVcWvHyTn3XeQyoHjhb8c1cb",
  "key22": "TQi7LoYfpBEE8tubW1BKvkvyiZUKRkbm6YqzyH3jiySV98ixFZKt8nFETfZdDzL1mrsjJGXPM2FRdhEjb91r7tE",
  "key23": "2FYoDq1gggsN9zJMjqvGPGdpm1sRassQnNJc6qX9F11jJRMWiRsr1tkLwzTyqbX46zL2mziqtMvTzWD4E41yCSHy",
  "key24": "2n3vp3jEtVTSwzpNNqTLMC2JQUewhi1v59XH9msWuNsh76neKnTogbE9jTHhzTdbwniWbK5d5myoyryrduKRMcUn",
  "key25": "4DNc3rbWgp7VWyxr3NdR8e6Chn1gDtAwuuhABamZztbvAkrEY5YyPyMzysvBUFMoCFFFmxnuNGhuexsgcYexpXpd",
  "key26": "z9kDMVNntxaT1bst34VE4UBo4xjxUPQVJMqHBHDnyotqJ3KbHPksvN2GPE3ad8yHxvWV2LGyR3HwmgzYKEG9Ynr",
  "key27": "3Noh1gMtNeAKgjkzSBVTcc8TaoCLCmg5Xe8mxPiFcvUSg3JLYzX7YNQHX7S9qgtvx1zmqb9djZ9wZGF4LC1S13o7",
  "key28": "28hmCWYyqJsJTM5NNhFynpaheiZXgYu9WENvPrU1FWsy4YCycFQN2oMTVAQtmv2MYo9Hh8XUwZpULeogF6mNKkqt"
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
