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
    "2E4fEcexayWSAoN8Fwubfy6AZ4BHJFtTEZZLyo8paeXkrhNS7Mz977dMt7wyqoL831TAVQZxPai34doxeXQRhcGx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EfCPRVyGPe1EZ7fKHvax81FYHvvEAZugDGNRTQAXwgCjYRSW3jBnwL8rkdLjPgytzF1CNGuhfeCJMMy6Fw9hXsu",
  "key1": "2u7y9FaR45r9x5dgBa4KAoCgqACmQWeyBMuWTiXbu9CwrbyTBkmFZr2WghumDUdvL9XvxogJFABn1JZ2nAjsqevb",
  "key2": "5yW1xMcMB7aaVLUKZ1nETQ1Hn8A5mBN3HGWx3yRcB3kt4WmeqiFM3zS7jmm2JfnzkKpb7xG7PVhgsmnpgHN6ULeC",
  "key3": "yDhFbqaHxwPK75R7M1TJ6JAEcDSB7tuPhUdVBsbvuJbrUtskDGS3QrzMHEY7ioJRSSXUKkTZGLUv9iKE1Cx6Fb8",
  "key4": "5yASymvsKkV9QP3L3BWwJur3izYCXcszyXTVwMnkuNMgw6wxxzn4A4garNcRdrSbyQqPUv9Ta4RDHr7ggpS21gT8",
  "key5": "49rAg9z2JYTt4nwagCQoWU2Xyo91xHMX3c4kAoxfZSRGvrwo3nUpo2WaEa45VpHM6MZxyZiUUjLqfv1udcnS98d6",
  "key6": "23RXoY2nY9riuii1jneXNSGfwsPk9QJNLCbax6RgrbwszaoWiW9XHry9fByVnqushvRGH13645PHUYFhRbFti6we",
  "key7": "4LYR3zCyUCQAEzU2e2AxwwkQ9TtfP4ddnAZQwyXTvmV8ds2CRYvhLs4kUsoF2wj1s4GHfUtyTNtSM2F7qmfcWr6J",
  "key8": "4546hGpmnXocAgKUgUZJSL6vXNiuoYq277iJdyDLPzXvxKnGyM7wZ5uNdUghvLjqkyKcNAz8hSehdTY8nCGXaPSi",
  "key9": "4hsC3HkTpKYkEmgeShaaa8zYasA5MKq1A8oURDVVSqYsuwooFp7UyfheD1VNe3kZkYBtXjPfKWiUk1WpfjySDBVe",
  "key10": "5dGfH6YNZYXx5jnrYboZwDy9enDzoZKRdE4NtNLMHHgKXL887ZUSBrGR4STxVRq2TyMfczzaoLM2gpzT8ySsvFUv",
  "key11": "N6kHpukD2FqKFy2JYrw1YBQsVGpxgxczUVd7PZjm9ELYrgcsTmvN4xeW9J2ZEwmSxyhnevxNcrRLZN9TT3aDoqK",
  "key12": "5ULRDHxU1ayRCnPFQSXHA6nKqh64daZUv4xuoB9vxA5wPcBNPmfqdUHXUW1G3kL9dWmq5vnVPXKPGujs8wgaDpQf",
  "key13": "2kuKquhrKYWqXcDeKYUPjMrCjPDeBVseq96Zgh5y8672PPgSWFarYzCBVy55v94agQLj5T7fkrBv7XDPn6s4aX17",
  "key14": "uMWJb6Agn8vFQP9bhsAjGkeP9d7n5pJPu6aEr14LWLMcxHfJ1yLCaokYPsJa9aowrTxMJndJBHKpwTCaUUDdZFg",
  "key15": "daeYAjwbtAyrdAijzFizhkKNixv8aJ1pRSeLsgd1YAUdt7XcSoGtJSJZeYpCmJTwiQqGvNw1pBGaMm8EBvp5XKG",
  "key16": "4dnVjDFQrZe8FFXfXZXDsZyzE8CVWHpthE5xGANtXFEagV1aPboPFincB3fTkAy2sQUQdpP8sC75n84nGtHHLqLK",
  "key17": "4gP4VxybKe2mdJhpva3Ngy4AtYauhTBN8mnh4GVQ4UgmLkEGpfNp7MPEtfdTqiE9CznVkazPkmy8xjfggnVrEJU",
  "key18": "3jGD1RK6zw44hESiJ3poTwGyK99FU5WB3dFwDuFVvQjDC9qiaA5HuiuUFaCRWuoUQdkEhSPLLyK1FbcD7cLXnMxm",
  "key19": "4uKR715aKMqyEaz1rnhekCL79TF2zTxd8Lu3vRLryFqQfJANViiJFu7cRVwfmtEbroUc5EjyEfhiFDzQMYrd8gfE",
  "key20": "4oagjyDqpxLxSdtGtAZvyGT9ZyBxDtdgn4jUr6EUZVxib2AYoyfcUm2TJw4ctamFWV8sXRdyZ48a5RLBnm7gvEmV",
  "key21": "5Xu98ct9Z8qKTwnpw3LgPK85WztQsXbeoBtmy7j1a3gxrtNxWTWnQh4jJjCYP7dhifHvpeYCPxBaUZGetviFnK4",
  "key22": "2PV2eBAacfSxymnP14MGiF4WaF3xiaedmFH9DRKTzh6K4ZWfzvAXcdHefLu7NNLujnoGGduqPwWLeDNVQmpa2TE8",
  "key23": "5X5fzztn8s1hiU8UZwz7YTrgz6m9bEXwHL4v7WZ5EJMs2gcsRhoYf4UE7TZjBNptUQ4HpmvssMUp35DPU6CEKDeq",
  "key24": "NCSQST5wDJ7C8ybPY21HsMPYdjvrc9fDAKDYfomm4ohhXR5hvFn9bmnM8fxZwduJ5cxh4Qu4kfppEm7NyYycYV2",
  "key25": "FBJ8RuUKkyYoyJ5pxXTcHMS4mn6D5C4a32iZFzyT4ACh4Wu7VeYt38LVQnzMMqLf7yEiMViJRfYjH4Q3vgir9ux",
  "key26": "2VapqZhoCmcyP31g8w1e6PEkZVPHnZ6hBiXzougVLM7JFPVqxRkxR2PyZP37e1jaggyxQ4hw6T2r4LUTFF8WXD5W",
  "key27": "3j9uMwX3TpQJwjbvTjjtaPg49cVKVwet2rifg8R5spRLMMsEkeEKxvaNXwmctqexLfkGCCQgVT48dRbJdmv8wnT2",
  "key28": "3XCmtSSrsug9peaY59oe9wGShsfYy2LwPWVczRE67xJQdcpBQShQoC4RBYUdDCmHAGMqV8gXcFA6eBNex6Pa982L",
  "key29": "47pdT3xG8yMoRvsRgDmmcnParadMDjFqQVrqFgC6mnrrGgFdoFSRhSt6PLuWXvQpPx8UqNruutUEhyvQ6PwYdonk",
  "key30": "gBXQswTCWmXLdq8PDAy4SPVmzUsjhBhGqQZ1XY4QnQVv6gzuopnJi1sxHRJea7zet89Y7kent2ExA6WuwiU9QCS",
  "key31": "5tHG9nE78Gmee5nZbaYwibSmfXY4AGEp1hQUuGXAYjpJz7jzM3Q1hGWtQC8eHdX2JoiisU1dhszcfhT62zqUvsec",
  "key32": "5nkqgwauEoqQRcqcEyYNq8JLaUzcPkNCpAyHm87re5J6WtdrTng4XwLyTgpcG3vZBgGByeCJsfkdY6VZQ2rtRAkD",
  "key33": "34Ab9PHDAnkJaa8QfgLmvGni97jmjmVh69Q6zMUVPGdUBjiE9gHW3ANvVc6zKgkfQbBwaSs7DCbtgAeH79M3xZQk",
  "key34": "2H2dAAPcXXJyTi9PyFAgTkZBvPhmcU1FNjZrYx2ewEvY7N79ksny8dp3uhY6VpjDuMtDaXuZJtmp44YoHUiWb5Nc",
  "key35": "5j3HusWe5paZ28p34k7PN7bibv4saYPcfo4EUAsr5zrsWLcUuRtm2iJrNYqYaRtuMzKYunpu1iYkgFSTWJKjhyyC",
  "key36": "5ztkxrtXr9vuJf118QeV9G7tozJUGn8tWtTonRdZxMhmiYMGpfpRnJ1Whb97AAGWqiznrWzc6FqBieMV1beyzPfX",
  "key37": "5ZWtDxzie3CkZgJMAooUo35cphU6WfHry86vQ59hhBxqusFcYkFnaDhZHmCBKeSD5LvP2Rr7odYV1r5bNGorgU5s",
  "key38": "3wJrVssd5rrN7MBUA1fBaSAxHXB5zqmEWjAWJZAJB2Z9B3Lgk5YD8sySqQ635kdqbFWVD58hSkv9tHNgk7MpgmLA"
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
