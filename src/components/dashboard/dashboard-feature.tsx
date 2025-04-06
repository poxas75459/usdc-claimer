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
    "2SQs3myfMeEnE33ysXuvLAtiFeBvLPZEEy95YrozK42rHdhCq2RPEWhxvgmmR5MHerKTDZmTTVHcMGkQLXeXAAxa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RMBrwSPvWmu4FQoiN1uATpa1FN5TRc74SS4JpjrZU34J5eeBB6HJXDmsxPjGNXrjB1BVSnihaQFCu3MiWqar4aq",
  "key1": "4iWCRRb6BGwQDgxNoGUvpamED2otywVvj6GuXntpCqu8tD9WhLctSW1FC8APbM87NPQjhgJLBYMfYkP6cXFw6PGd",
  "key2": "5TrWvSTDAuxCYSytQNUNku3gWHB2xRmNec4SBYRZW6K3GpJ8ZwqSuKmbmU8nJF5mhWRD2BWVgSMMZZWkAKF6zWwN",
  "key3": "3BKEgN5wegNwiPVLHcJspdGJz4mSnvvmWJxaQLumtHqi3EPQ7SnMuSfJXgbF32e2aQtdN7eSHzVfo2PF3j3RTbzg",
  "key4": "2yBh5fLJH8UhY8ripDX7Cp3qqmPdnCQucFsaHpevePZc6cv66LGL2BrQTwNR5f99RdQzmZvAPW5qPcBauXCGSWtg",
  "key5": "4K6rvJiidZxDu5fp2bZfSLKnqvo6rg7rcQy8uYkP3CXQVtdkBoK9cyjreFynntCC17KKMBypWiCqZgzxQ3kF1bks",
  "key6": "65ttFw6Y5dCVBNYePNyUvnxJuFuCRwEc11CLyYrN3UJ1DL96ezr2pXrg87WowDAiC4qBuBirbeH9B3vebnpBZvGc",
  "key7": "3DTLvHoSywn8a2DbeGy1CeftaVfjxZXdX92rgCTtF11pP88R3RWgTjeFFrfWCty4Dwj3FXpmVTdUJZs1sjyAzSUk",
  "key8": "MiYmpXQ5kYxBuMB8afn3mgzKFCu7tmp1yR11ZSMqKYnP4xACQuFYBBVexComoScwA8VnNycrofVCVtr7XqRToXx",
  "key9": "2zWXVnmLBtBhBjSn2V69wrgbSsHbyaE7aKfAZSDBXHVRo8kdUbjkPGr2d1m2253dgYA8ZcPsGa4TkoLLAjKgqAEc",
  "key10": "5zWcYvbJ5bHrKknMvsPxoC4AUKxtFSnDrdSgwJ8xX64opeX7NNJAuvPv7N36g4Jt7aMcWP73nvF7qU8G7We2QfZx",
  "key11": "gPfMwYSnQAZn81p2FF3JV41SwGs8qkzhfUfyToJTWF8DzuAuQcisEHGvwy7ozFMijkSCQ6ZmPeoTZ2j1JD6xUxG",
  "key12": "33hsD54VPRpEQQnEFxFQ4TNFxtLCEp7uoKHNJJ9vxKuykaKHt7388Nb8HUf5Lp8kNN1Scd7F3APdQwBeuijR6PEk",
  "key13": "5yyBEh6iisLP4q41EUKtSMhHNLxMuPanpRY7RvJ9wzw6qE8URC9nQQPpZBmh9DvKjFNTsRDELhfnCMmQB4wksorc",
  "key14": "42c1Le5QTwqHWgEVwLryb2escqCtMDq4uRzjEMzkSL8zwgsYTGyQeGDFpGJkBGBRbRaetoM9hmgWhTuaDvTbHHmW",
  "key15": "5cfymLHfCMKDL62Kcw65CBeSzXZUjhkZaXfcWxYX7G8P1uT8xiNMcnCy7ZaUwVpEwsb3HtoAe4XQnPMS9t7zmm8m",
  "key16": "2kypHXHQ5wp1D54MtBjRoXHkacAs7hTwebVFBNDkir8z76oNdMd8fDc8YksSzqG9GZWFH6HkfJAA73SrmD2zu4Jq",
  "key17": "5mg3KTTVBM8fPpXHNntcRqeBJQZnTDBB52FYSjxtVT3Eq55nbn5pFZVHxGvoXU3XWFMwnQjc1c59iP6MxhZwgs2i",
  "key18": "4PZhTkakw1DhSLLmh283GFC5jGNM7EbvTEHNXXJJzEkvAiPxaijfV9b8XqToqh4GAD6YFfVtckbm59NK6NEJ3aa4",
  "key19": "mXonr3xBpT3sArCXUpRjnc8Gn7e7YY6b5zPpFqiSM11snr4L1csoeu6vRtBTkZ7fe8XAWHm8E4GQmgv4GS9jpim",
  "key20": "51psgSY7A2BBxTi4Ey9Pj6cSGM4zRrb1rmwh3YzuorNYTpwwYbPPig7NbqD2kBZEBAfrAALx1xN7BNEr9tqk2qJq",
  "key21": "e2c7ecvchrioVdehcvwK7YvZT8kLoBsJxJ5fQqBxKYudtgewDpRsdWbNK9EjU9x4R1DaMVVpiGrKG17n5CseTaN",
  "key22": "4KpwmdCjZVReYhxKegBcjPamuhvUp1N4SiwZoqzwAT3qHMk2MHBAJsRhr3AnbAep8oAoGHb4jhX3ATrimYHk3DS8",
  "key23": "4Kicsp7KJo3r5f4rFaBsfH1PAmdowTTVPhAACZGReC3dhNU9X4KNdbkPKB9RV27JuYD9jRqWmybgD3SNBerAJUap",
  "key24": "4QomiovbigwCrN5R4pPLPp4xaYCNMMgrE3qK8mbU3xxE28wszxRnUm44xcmgUgDb1GHWZJXT1FdJGWhLzTyKNFsk",
  "key25": "55GZqGd2QrGBxDQmDptaAUhUan9PQ4A6bzu5FGq3zKNcWnXuafQQn3ZTF1ReQgTmrUMzheir3Fv8Zdus7cCkYW4i",
  "key26": "SDRP5evkDPg2SjnDDv7avYFZwmrtxtAiHvue2AkGTtxFPHFGgB4KWihqa8FutvuE97esGhSTk7Fe2J2DCjYqqQm",
  "key27": "48M1om449KrpQad7UBSjvJwrk7hrL5tFQQL6i3VKc5RZEuoChbxQ4jneoSfT8uycaDLcVxGGTBSSgSEzLPAL9jtS",
  "key28": "4djCYxY82nRZNb78n539KzqxvS66z5Xkdma9sCWWSq4VW2LWG5bM7nwwnbVQ8Byr7mpg7YnMfx1SNwG1EeUTKiGK",
  "key29": "MJGmnh4fDnPVzUYjJ98b7PUuYCucyQt89BmbZbXC11GcqBrRYRjEf3WENSjMriYKcKtqkXSk2XwLaAiUD1yQSF4",
  "key30": "7hGUJy5LePqLC6cvDtevqGv8wiApuk8c7NEVQXzVQ1sYXrH1eTYWEVcgLpbacENSvQCmGzFehfj45dfZu6zigLo",
  "key31": "2ZHgzs7wdRu99qVnz8baPKeU4jipoay1AbYLkPPD1XTDP6gJD8LSt1WpHLf7r94XjoP2B8Cry7PVnFsXSfQXpm7p",
  "key32": "5He8CJC2NKCX8L3QUhVbse84P9GAmBDRM44GD6oCDMD1szfxHMcgc5CvrKGbS4pQfDWdE93orVbMJmLaz6N6KfY1",
  "key33": "2hkfAEyH47NnzcjKdbAFBajUca1Ko9XV4Zgjk4dENXAWk216k1aebspcQVk8S2QU4FjGbFVRUTW8ypyDk5YwDFdM",
  "key34": "49NUPvZcdmgivRy2eeG2fvh2R3djPBZw9XmhckWN9KYnHGx5ZHtdJdhxpSyvZwXnp9EsVnUNQtngoaWGmo4f5F3J",
  "key35": "52D8oNDK2b33D78SmEqUg6dVMyqK9pmSRqSsHDoCdVcrVr4R5ooGbBx1qiPz5rySEjABzMqzTZRPCjRoXjY7htfJ",
  "key36": "42y3FbARoqJW1vCLqGLEhd4nR8Kx9ir2serf5WYrQmcLQ6pQjWMaTEdHLzqMHcvZiq7TCeZnqFRcGbKJkTyeyz6Q",
  "key37": "ajFr8QZ92GGFghNQE7WwyRLdhfPKFrjfFP5VRZF5336fM4CTQyPBGQZywzrdEU5M7p13NZhxmKoP5GZW86X6kfL",
  "key38": "5NHPmLcnLMT4LUzQzc5ZWbn4fdHtbPq6ygHzY55w79cbRjC69ESzZA81z8rtKQ2ptEhYHPwAR3UAGwf37spW3Y1q",
  "key39": "492apoLjAb6wNwM6tNLBwqKnQ12BCwAm4CDuCx1JtWRu1o1AWswFd7oBPeoLvxsMggPcz6eMNYFCv9txsJzpbyiZ"
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
