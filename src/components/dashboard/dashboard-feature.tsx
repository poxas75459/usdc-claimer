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
    "JcWnH1zs4ikFtpNPwYaetrhU54i2aznwCqmDANm7K6p1upmsYcpCPK3MboB5yEjJHpFTr4SA9MuPrjoTd54HDrd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GMRGC12WnaLNxreN4jHDjk2Hx32H7QaR1AydqvnQPeLc7FRzCAPYGVJ5m7Ha4kWzRtr5tGMPBQYDWix9Y9EycoA",
  "key1": "Lg3P7rmmq67i6MUxKuj5Eum8nZ83EXgtrN8PHYPNRVARTCNvxqBb1jDncdghrK2LN8dgv64jvssuRmRxdmrWDYD",
  "key2": "4oyGna7VhfjGqD5VWijn39MXGA2pw7AkmkNhU5BrJQ2s3LyFY7dd2XHP3K51N5ZUa6X1Mb3Pbky1w4iD7Eu7sqk5",
  "key3": "4PLTwjnW4npZ2mEG3vipFJZm1QmvC7nE1MwrGg1yR18v1wtMfVmaXHRG6Gnq2x7W2cDSHY6F2QYzFx1UQmqBUPim",
  "key4": "3bM3w569aaS3jevgwdAUUJcxs5WYmfrn4aqZkY1HH2mcLdTpMK7jXgmpVSW3WpteRDRc3azkRavZ798TosVoaAGQ",
  "key5": "3mygThkTrzN9onVVyqJpuFH7kU1EtWDpRLTUD736xNNQ8h6u7CERvdG7LVHnSdcvsENyxyiYqWDzhb2g8EtSWihf",
  "key6": "4hGF5TNdfLrCbuRfAZKKsw4NDGtSm3gi1nUuMU4aySZcyPmjAXLhsURDcJFowqNZpw22zMXVfjXoAd4x5HTj82Dn",
  "key7": "jo9J8ue1Bf5j2XaUbwYsdXWgZStA7xhw7gfmaVHMjVteayw8cRKj3XdgE2KK663KYzdatXWieehFtRfLgDnS3eH",
  "key8": "2jhpTjG7Ly5cnuVdy2XtYCXJiF7HDMYgj92GkcNbqfaWHDt8CDx7EiY8HXwjrtPFCJTVGxoJ8Tnq6DEEQ9DSWoKB",
  "key9": "44Yyc16UQUjfJHrygC7GQaDve4rG7vW7qfdWcoNyvHrCWVJZq9EWGJW1gcPzu97rqK7M6uGb1yzPGz6SZTEYYPNM",
  "key10": "2KmAixtV8YBkpaS7fKfUK9LoucHbmTRpukQtzf5NM5VQZUpjdNcGD1frrxpdiyJDVrmeQsDyDMvywVDhs6nDPuhE",
  "key11": "auhZGwHr2mjx9L6yrvU33WXoxzBCfeVdMKnGxzjHQXEetbnj3ruD5fwnD57VLFpVpyRp6VWXpHoqGHeToAp86uU",
  "key12": "2wc1RmHZDgVmavGhy36aboPGpmz2isF5M9eKB8Y2BZYeMfcAXg5CiQaestLKSseaL6fTKBs57NFVYyUgaeWrSbay",
  "key13": "HuwP15XUjfdGW8vXq6EjRB8wyjjoUE8PoEZnPmzTrQmZ7ZFhAbwc4EQCkGHeNMMp3UupUCykm4xNAwpaVD66Hrn",
  "key14": "4EzJcm63x7N5EvHFaDis6iuz6KiN928xEd13TXatqJH4c7MyC1Mi13xNMmv8WrGjmJi1XPSEjiBVaHfE7nnGxTY4",
  "key15": "VSCvwjso3c23DBrCCg8T7RERKTDDES1xByg2ByDWatqGCTd2bTdDGg4ecuUbvjBvgRtvUniZzBhF3WigHeoqGvW",
  "key16": "owhW99hQmczCNekdP3tQNKTBX2VtiZTB9yvry1NEfwuGnVr1y5bwwsbrAb8xMHhUvkWedEevNd1j5HAMLZKs2XZ",
  "key17": "4pFv4r3Fco8cTRb1xQwuWUVKMRTjmWy66cmq34bGURHw37wGzV3TocvMa7gJXJiSATsiVuK3QgjwkstAjBVWhrPA",
  "key18": "66Mye3GPWsJAuEj1kHatKGzJgkJAb7wksdN68TCAvkQMtnEg8p8XoU3omnDauWXAmxvCd9igpHFwaPsiXsExnDAn",
  "key19": "35mzRbrjupxLrUCx682ZkBZ1iWHKTd8niknJgqDSV4vn8Q78a1VjpJzsxxjrGdktpNx627VQ82awFN92rKQazD2A",
  "key20": "4VKE7vb6ouHytA7YW9tXgvB1qVHe3dPRkL3mPjbxPpGRhJKgaFabMs4QrpYAfwjpg8vmZwNnxoN6Wf2pAezy6wie",
  "key21": "4meZ9uEkjJAezyqcFUC1ma7kAsuJFGgkCTRZq72kqvgjbkbeZYeCeTag5TcnB6p2XNeGd6DVSA36d8TwXiopW9XJ",
  "key22": "3duBrFJKwNKEyLdGigBHQpYSyZNga437DouJDP5fqRc9aix6nD3oP5ts15NdzUjDDhnhCchJmhHTmxkQN6JcV2ms",
  "key23": "EJAJHmnwTuH9ZRSnAvs2pMw9BBmZmQ1PZJSuxG1wTsqX8Nzs4BtkrmoKvBdSnx29HQRwWQ6he81otXvFri9grcH",
  "key24": "2EdB3yWiUywjkXxDBB8bBVXnzyuF8f86UJzd2wWHDkoGrk3iUbDJfRKyS2yQ5Tc3CR7uYCseJCC7fAAMkp598m6R",
  "key25": "EJkSpUgrEWmxJ4TAUaG1BNNEKvnk5B514Gwd8689ku6D8YXwMQK4VaGKe2KFKtqA9wHyHzt5CJ3vEBnppMZng3U",
  "key26": "5rb37YmeJ6DZbrHjoFYHotBDUT6FNNwiAC7hqdcC9MLj6aKL98HPA8BVjgqBA1ffHDcVN6M5NPVU8QZG8AJMm35E",
  "key27": "1Xt2BnihE2A2ZDVm4dE4iM2BMb9fmfrPNeARnFGtgdW9MdADEsRPkjbWDaayZTyeJgLaT8R3iJ8jNz6GwmbmPfd",
  "key28": "3NCdS2doo7H7xK2dFAn7k6pGWK5wUVPLmUWyvpkDcjmvq7vQ6963ufMWpj9B8VesJhFyphQvE4tdFeA2cSiwXjgv",
  "key29": "3U1vKnXgeTwKYXwquJSBtBnYfGpv3QfB4FnQDRssAEiZsKD6KJRLmmCfuGSTX34g8PC9Vpa4bZ9cV9vib6o9kqgE",
  "key30": "62nr32vyZibQxDWXgGsb2hCX9YhZMyFrj4yaBQyrgwAdZfeJiyN9dn7aQ2jiKtnJQc3iBcvmnJ7qUjtMUQAsA9dw",
  "key31": "2GQ3G4o6tpYHZcKtorvNS6NGGsKudwrdfbVaHYjxfvQfmGhLmVcGn6G5c6YSJ24Uo8aByvcFNsMfjhqyGShFbTHq",
  "key32": "rBMbCshPHYv24WwiqwAW6WoZpmXs56RJeV8eZwjPn4NNxaujXieVT2dbBBaCe7gC52jEmEZRaZDtHAVV5HxrXvy",
  "key33": "aoD25UUed4zafh7bYpDv13rFA1owCRS8Jhm1XYCPmgqLr4E1UWnhX6wZ557QzoqH31z58FYCYWQwTyEkDahTuBi",
  "key34": "3t85xVGi1YBAyqNbxMzVujXycsBaXtudfo8V6BGQKUKGTn9xDUjA2Vr23BgWnv6TV7sVz6UD42Gjy3Q9sprwMRsm",
  "key35": "2SR99njFjqGpW3rNjzbuvMXsy3h6YQXAJyaoHhyzED9ShuuRkpZUqYi792eb3K55wzSioip7SjFW6HtzH9NJfYjF",
  "key36": "2HKQ42PbmkF7LW75MMDUBpbZqSnV5m4RSQ1AmNMeurQmhVGsnPdmuVTRSjDS8vNDR9wrQcMiMtgPeqrALobh7M2W",
  "key37": "3dFziV7vyLA9byp1fYKLLdwYvLdtGr7aXz2hjnbNzqzxxu8EoDQ4foP6So8sLdC3RGD4sX2r7k22G4tsQBcYeawn",
  "key38": "3D8RS8EV1KtJpgEj4W2tj8tu1sjHkn4vsoM43T8EAtFFoBYPa2qANm7hxgL7Zn3TPtqcDSXhddZb5M2nh7EfT6D3",
  "key39": "3tQ8diivcHPv8h9dBNLsZULmTcJSYdoYvXSM2G2Erdpc6vJ6vSHt4Fdo9ydk8RcGnyPqmW4bCfjjqoYo7uaNkCGU"
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
