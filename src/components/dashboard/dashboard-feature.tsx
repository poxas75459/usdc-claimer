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
    "pih2BULRNqtLPuuX4ffFGw8e5erBGx2jP2hScgyyEry9UonKZRcahreL4n1MAWxjZeTY1TGpU8bCLWR6ync3cK3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Tt94nbJpaGz3YGtWnEh4kEqE4NZZtFqXW4sQ1vj9qWfqQmbqpUCAE5v5uLZhBgGDeqCq2CmmcCBudharFfazD1R",
  "key1": "2jRoMn3xVM8AXzmAvDVQSqvu8QQov8Gn48E3xUF5z3X2nuFYvvx3v2otPyxEwca2n1snTnsYaAiwrA3uYv9ABRd8",
  "key2": "QxYEm5reA9agbwWcwD4RPcoTwWGctATJM2ehmRKEn4wJu8tjVNs1ggDVVdkimeid1rpgnHuF3Jk8MwyafSt8Gjs",
  "key3": "2scoBNpbya8HhTmCqyjz6KAYckvDTUQghTCvND7nUjPzVwgqvzFuJ2puLYmDFbcUtFjVjDvAxgEw3e74g75LXUVa",
  "key4": "617wYjEMvmPPnMDTFxj63VXqoYUSQ9V1NqhULnKnTWg1tEEqyFnu26PfHmYfh7wW1Z3mA7RAoKaNp7Kpwq4c3aSG",
  "key5": "4uU1BSv34bSduru5FX7P8FscnPupT4dMMqet3xS356127cMMVYA93KCgA4NHJJZFyef2fbwd5LkcDFxsas6Uo9Sx",
  "key6": "Z1cAw5MgZFjR7BUbpxC7xEvWvRZxcJj5LioqYweXwXrkf5AqQCmB9kcEHPk8bdm2G9x6RsH24SojLsUN2JgjvCi",
  "key7": "23jfxwH533qj9znueMdLvsv3We14SBWksixtdkRdtz6gVvoAAynBdwb9MvN939km7ieaco65w67jdjDiVdxQRoze",
  "key8": "N5LBrLkKnbMqkdKY7BTP3dS2URYkMK7bccySpqDatcJLBhXVb7mqRMLxXXXbJjEgDWkjXma9EgzBE2i233Fgbps",
  "key9": "3ZwBjXhLdiSGvZ6uwka1eX5ewEh98vK5vxY9q9S7dCjKCvBpmqZvt5dS8wvR91xbKUBBNEN8ZMuKW5hrBsh5mi8q",
  "key10": "4gv3dp8qQESJRcp8ewbNH4z83aPc7NiDygvuhibtWEM3DTKqQGUxjEuh5Yr1amtdN36gT6K14ev2Sj6C5sXBYCzg",
  "key11": "26RuA5jGQvk7NVc37fWTkc9ULGALHbU4yP7MtUXUQ51xbuikXXMoPFQxhpH8icdV8kCmE1cTsbU7djbGGGmYjwGi",
  "key12": "2QC5PZk7pNohnv5EPbC2fJH6KFYd1rJ9VWYWC4A4AXJpXXDxon2jzVuNPcH4s5t6wYGDdJd6x5aCbPGp8JndKDha",
  "key13": "kNXTprLitiZFXQfJpBVZuhELzfeiuwGi7RhYvnawWS3UTWGuQuqR5UpDUhQexBrDRwuN9e8RZL7XMGgJr9u1BT9",
  "key14": "3QqhYQB3dxhQ2ypCN1EdNSScDj3oMS4rUDpZS9CGZWpu23LPUuKFzTTSaUFYy41H7tP83hyYZKZV3nJD9GDijBeu",
  "key15": "2K8FUAuxTmzBuCRxaCKeSekiQFyRyQcRYxtAv9iMCC7rbt3jX1Er2YqPTpnFZVvZbBydHxJgbcMohcHZpfW8t29F",
  "key16": "27Z3ZgegKiGVkKtSFZbcgaA2HaSqxyR1ayNuAykq5L3ySubyjLtd44uci1xNLswJ7u42QMV3nxLSkhPb6ZqQKk3D",
  "key17": "5SC1vVAVdtVFNji8Eucgr19PMURaA8ChgvzmNe1qU4fH5MAGJwFCDsjZPjybfkH1nfSL6S8pjdRE2ZHB6foBi9YZ",
  "key18": "RsHKN5WJVJ25qDjYXroDSCmu1hRQ7h14J8o2ESUWPcd6vYXMAevE2EH2ZunB1UU54Wu1LprG7X7kyTHR2otj1yT",
  "key19": "567SUrPGKq1UnqDWT51swRCkxiyXDGXtRG6aRMmhGHZz21tBHVK25oUDXfjQNNAALKvRsBtPJ7k3tN2mt9FvvRAB",
  "key20": "5SHbYwQDTTP81mS5shAY3B1jgq4LUBcwvDG2ezN4ybZ2eCR96LyBHi2sTsPTKrcaeGXpxcHuUUhjvBvynVUELBrm",
  "key21": "3GoQUuhB5AVpcMA5ghi2HjZFvmPEcZdpS1tPPZarrrGJBsucpojKvNQqMLZGJo16sm4kpcDCNgUf4AoiW8kTZ7Yc",
  "key22": "5s3yikSqbJMN9cZcmSXn6yKxaQVXWM6fo7adUNqngzExK7TEn4wZFCCnta3RRFjTUEsCPSwk2WGTa929tpQZ7H88",
  "key23": "4yhKADJEw7ym76dmtehFSQTsjoE2TmiWQjz2iKiY4fkRd8kaL9DZmwj5MWgJJLCX5nKJe2LpK8jC2oTvihpvdgQW",
  "key24": "4bQpH1WGj19KCJtrTSFwWQWpVfkv9XETxVVR7fMiKofdJDgq3f1ibS1WSoRpykYJPTRkDV5cKzhE1X5Jj4jFEo9R",
  "key25": "47yrEUS21ZeF6AmH5KSrBvqg7G3Evk6t2xQ1qxdyhzpRcFKX457pk5fzQikeeLPoYN1fmX4qHzJK2G6zRexZcjv6",
  "key26": "4iJj7C99REjNYpPhSHH5B1hbw1rBCQFN3wrKEvfBCW6iLh6aew9VD34xGp1WTimbeGtYtqJCwS96TEdWRYHg1wV9",
  "key27": "4tVucYDkYvj3Pc4hXLdNP2jdSu9NEmRLUhUL1bX6NL4d9sTHSEdD92AUnqGm5VsU6kmHpyi2kT4Xg4jhCD194R7C",
  "key28": "64ViL6SjXNQcbqmnXXAzGZorQRjvY46biJPhrwgJN4ScjaSTDoeRPEgyRzbv1mTnFE7Gto8nJTdkfmyVBbnBY1HN",
  "key29": "2DaQuPo9hKzA6sCtjJQuroumQTPCaWjTdNbK8nVVtaxEpXJgtPFxpPq2usuo73DESRBYbsd2n2tumc72eS8KMSsn",
  "key30": "g3L3pBTy7N9PSS1HPUs3N6T9eAusMwiYKofSJJgdCTBwN12v2nksEM41WSTmeg6dFCgHGhgLg4EQJeW9sfrkkoC",
  "key31": "3zSdcZcYeeUoGUGAkVKmHWQqHsFRQTrF2e3FSDYVYcpw65jtZ4W1hFRngEPGUeKAA22TnXKAkHvByKxUoLhChK6E",
  "key32": "3KHC4RdtMH71G1M6JbVSMmRnM38voau7cic8CdbF9bdQpxLixNQmjYnLN2zLA6A4cizB1cGKbYzXQ8tpRgHkVtZn",
  "key33": "381VGgFVDuHACidYc4VgrUk2cjUH49ixj63YKpqhWdug1J9Mgg2pDk7EZeSUHNmYWFS6gZCVGE5PSwZfwa4q1Xrr",
  "key34": "Q5WKBn4iq4g1JfrY5Dk19UbBbX6zC1RbRk6ySPKuyQT2b78vWWaDS25X3tAdfbv2MxVbGTj4zD5EnqZjXfeUzp8",
  "key35": "4Dk33Z5XHrgSWo8gcNAdk1STzVe5mcQz7BvXRYYXjM4D3Ae9AgCC7dw1nGoQG85JEgjTWMtN2ELzmivu5Wvxqhww",
  "key36": "2q4ZhfjjN7hTWdHhaQkjnS3AW6R9W588Q3g9GcyAKDNpCo5C6MaL2eft8uAT1h9az9VXJAeA5EymZQKaqrwL5NLw",
  "key37": "38rLZkmGb8rQQCb86AzmUcQXn9LoZ4AawqSezQFWxZ5VYyTb8JXwyGyddug9qX7pJWTdEG6D6ApnSocoRLMFMpYg",
  "key38": "3YaMjkB1YUGfgwyYJg4gG1ZDo2KmSstKXiKu8DFuF7bmgTHhRVC6sL2K6osGRnY8uDYQkM29L5G9foW9zKN9sFeu",
  "key39": "41sVgMX9dzDeHanzXrnyEeEyAfVG9vCLRJnEEHuDBMJt8ThaBpdmcHfzurs22sWKZF9bxnPDnS8C9CNp3K9LXweD",
  "key40": "2rFQyTR9Y2qTzGrbkaYHvZ9sQmL1KQwvoU7agg4sSwQvf9GF3PmkdWaYNJVEJRaQJqhGc3x5hgcjs5dhk2xH3tuD",
  "key41": "3hcYKmGar3Ch2JfBhF715m6Gh4SqQcyu5ZkaZqnzqzqzzpcbYHpLZ1UHNuDXDZYDPbsAvcGtjQXSdCCDWk64NQN7",
  "key42": "5rHgsfM65CgmLuCQiNunaNM3NSs9DtJfKWTCtpjQoQe2i7bGumpxi4CQD2b11qLpo4ZKgxfEpxo7HUmdkjJjVG2x",
  "key43": "5tB1wPuvt9gwxKk4bZ2p2NRuDFmBuobkBFvS1jz23PJ3P7RDKdfEasfsFXXaYhhDk6NKjganipFt3W9FyEoGthae",
  "key44": "3y9KPJLrgmBjYAZS9pDLoq4BjLLJzzQzDo9XacUxDPYEuYi796tBF7EDhXDGXuhzmvKVGN6e6wwUDBJTqTT8XXCV",
  "key45": "25XgL6jwwHiEPspVADBDv7bpNCJhfny1881aLJBo8xtxoP7XCHxKfrRiqLyvfqhrCJykPA5yafCYzZxuMfAb4iqi",
  "key46": "5GRcTQj7PdYVNHdmti2uALFin3Ph95uCKF2R8VTfnoVn9RRSKydranSJmUa5tjpA3FxERmzVLez33sHcVQRJEtgv",
  "key47": "xVjxfRKSpU3yDLRrBYBaFMDRekBbRhrkwdsD5pPtmjqp9CUHUHUZx7PuwQB3jHVMDYSHeNFg1RP5ugDGaDDpBeL"
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
