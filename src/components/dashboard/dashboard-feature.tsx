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
    "yb6eA8hfXX8E74d4fp5ezCQLFdQv7tj614zSbmUR8V8KKdaNgahGgiNnLTuhSPHQbkcxDMhA34hTe1LyxhqyDkW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YcUn2YT5dmxqYg5zK1u7rJN74i1ANrBm4njJNHLyHcLVveaTJj9cybKwaxHvaD7jindFGc6GmFwmgEXoa6dbQTf",
  "key1": "3y2FRMNJjVvNxhY9ZGwRW68Xd7USFtsqNPfkjCcR8rVe1NqoqrWkpju57HES22sNhTMnVBWKYFnWSuccHjMMFmZw",
  "key2": "e9LVNUiDmfkCteevdKpR1Tuhuv6wp9vPnLNrN17H7psfx5bfP9boPHGZbJ56LsVtwyFEbyLJu1BBNsWbtAtXEwY",
  "key3": "5vvgpXqTRoBjWyg9Diom8tJcA3L8tM9ewr4xHP7pzFkDX3cyE4smYFAf516HoLEKhkVXBW7hLrQ2JY552rxLDgkk",
  "key4": "5wNjPu72QDTQMpMT67UsAxmD4NCBYSaqr7J5N3DEPU9Hvkx5X1wax2BsGK3hD8jHv5q2b1A1GHVfyTZpKDaA1BMR",
  "key5": "4xDLmni2cE5PF6zaCStxxj5obMEi7mb4LLW3o927v2DA5b7ppkijN6NFvMDvjoMcybDH31yqKBTZwLw9sYkjGH2f",
  "key6": "4QZVntZDY8xJ1TQarn54TSJyvYxv4nNEkJQrtybBk6RJyNNLXhTdi28KmkyW18qtDR1UmAfWKt5bq6SvTKAnT7pc",
  "key7": "3835dCpRfJoXnSH9tPrtCvTqVENGSyEEpvaZaFxwLfJy78CCVCdHmLW2tTCJ3KjoKywfhaxHdXDwNvoCqTjwSUbD",
  "key8": "58hKfXdUiQqHGUG43AyyoDh5pTyMXT7Vf1BoL2J3ybHgXYJ5TUE5eZDEj4mkcqbELaQTDL4sbbN1BtB8GFUd6psA",
  "key9": "3z2ro9SZ7MkHFoU14BZijMMAaEoL1rQfo17ovDnExperD6HDoTsfDURxoCrKcVuBoVKrBxzUH7XPqyLtFx325AZF",
  "key10": "5QfRKsJyzFx6YGjZ2FbJNwSMx3sV9EHxwJUbPwQTjhwDgc1KbebTmLWcvBDRXH3zGAZZSB46jTenHGoVyeuAGTfF",
  "key11": "2kdgBBGMLWWyQcwxciiDbfRx3eLRmXPs8dUHXh8ZSwqm57tJDT9UkKdZjpC47E4qEYqGNEz1SXBQJ5Ync5aCk5g1",
  "key12": "3G4NWc6jBRChABc6FHg7zmTVQvDdyo8yeKeeNmqeYsW6483hz3PNuiKFXXYNmDmigP9xw9smi8SyRBVwiFLTxLHU",
  "key13": "5KQSteXYJHfzB5MdFogQyWjyk8sLT89xPDKr6YgwtotKHsVp9nMAb9msBsougCaU3rfpnx2f1rapvrUkvVbJyBHv",
  "key14": "66VjhWV7HMRgsHqUQvrBY1HKUsLuotCf8APfkggJbYswooE6cD19YGnySzubiMUi3XuiUUWDaa7tVAAv8kNxTLEq",
  "key15": "2eR5w9XsferkzXV6Ge5zXFBy5NUUrb1oUYQvXH9f9HMJvBSaKkQdzEamyAxtv9K3kMaMUkPs9VixwgPd25Bm2jv7",
  "key16": "2r4WRbvgpFcMS66tJAB6q2D63GSu8CKupzeb9UuA9HfmiYn5wqJRhX1rvdNzu4dMPv5gxNh4dGgV9aY7PNkaW4XR",
  "key17": "221Yp9bc2qjN6QU51yEjkyVDk6mDo7RmJniA1sNsGVkHisnGWXegRKUsT5fjtE6nT59iGxnAszEMHHb2DdkH2PFt",
  "key18": "4zXraBi4hnD1qLrBq6k2Ya1rUF2jUW4v4dnHPE9xqUNLrPo9X7h6fGytdzHNom8fNsJWqgmGD8f2tnvGNZXpZRq4",
  "key19": "4scMtBzX9SH5V1cDyb4SV92VMgfegWy9RPLBpQTNf4umLMCtE7ZyTFeApXbrmFA4vZkPpe8hhfnkRqzfR3wXciW9",
  "key20": "5dHxQqdVkHw1GRHqrubpMbL4hWR7goDDUAa4PHJGReQVYV1KqxKA4FMXyefikGrX9X9dZwv7cVv2ZrkqZvHXZg9j",
  "key21": "GrUAuemN6PPNhiT8aQG7CujSanoXjaMuAYzL6JyAhBFpwdofmVP57Pg7yFy6jpiRKtgftDLruR48hZjqTTmhK69",
  "key22": "51CRx4Z7w6Pu4jdCkWw7NXVdtjHidgxULTE87G18GQHBiXhFM6VNZt9f24So7miqyXzdkcXNyy8Zz6wo566YHMSV",
  "key23": "2Dnd66u7yw4zkDgt6fsf3pHAr9u97m4NvNMXAGkGqBzJ96be14kDu872451og7JWrjV4Y6hTSeg7N5hZGSAMifNW",
  "key24": "3USgn8pWnQj1qjqz9xpGGhQRnvQ7VLn1coBvwbLWRU3MdWADR7HB3AgcZGLpUNtb2QDRBctgtySZMEkG5dayXe3g",
  "key25": "2HyjxaeK3XRhXhQzweLP7AmHxjHg7dmvRFMG4upJKfwndRg2v2erPvank3Rz5LV7k5U9ExThq8jVmWFhW7dzfQP9",
  "key26": "3LVdS96XNHj3QtpAYr6wwXVWenNz3o2d19gwc7YJgpn1bREPwyRZy5GamxFtBtE5e1cxGbAmmEHnQbvD2P2K2Yvx",
  "key27": "s7GhmQQpW9pZQeSPaskbCCc2TzwKc3YZ4R7WBfNaoTxSA973fLn7RKwozBD2WJcJ1CRFyuxjL34PX9iiMepd57U",
  "key28": "y7kFqE1mmK5Fv8CSUJiZJTp2LVMUgf8HWFqXM13nnxpBLWMHqGqTq9JniDC7r8PgidfrxQc54DHfwFbaMt84FyT",
  "key29": "2nCfsKcSZxuKbZSBC1hFMT8dH7urBtFoGEYRP1SdcAZvfSpVXhGftvsME9xJtjhcVJwg3LWnrkVhFtn51RfDE6i4",
  "key30": "dYvGUe3Uq7gjjJvQ3C9ospXPH3nR9AWnxULgH9W3Xz3ga46Jnz1BnW198z8dD1F5MrZVEDNkBg6vyVuwBk3KZae",
  "key31": "5N4BGJocTvZDVdpTj6q1pyFZBg2E196WGR7hgN6AQWysZKdrgY4Ha1znm6aKcjwapukVtUF4aDgrqKwVU7kbopVj",
  "key32": "4dR1tERVvhW11dixBSFgStcAXsz7GuBhrVHTsXMFWEofyachPS8bGdBTGcUEPgSWQ7H4zUJ9X8qgY5WjWNoJ8jLn",
  "key33": "5TpYXgdWNDPg4fMsvjamw1Y6zdZ7NqzbVRc8xQC7FUMovdkDwkWkKtM1zukzqhsxcQWhvv2PN8qi7pu4yGzkNZRh",
  "key34": "5BJ9pvLpVr1dpbkmsVoLTmC5qLXo2sqZpGydfyAxhTCjXUEbgPAFSYKRnUnWbDLqHDMt55bSPrvqmUCGt184VPfx",
  "key35": "4hx16zH6CKJDP9hr67Uxpz8WiFBhWHWedwD5taWL691mTUxtoRNNhF28zuYBPzcJoGfSTqGKukS4h7K1mk2ZArfE",
  "key36": "4MdSM9shWfsQBnYnBWH1DYyHYH6RFVAgxAtbeHGVi7yB33yYJbUdu2KazP54DhnuFvBFkUEVy9nj4oU2v1yuVhWn",
  "key37": "2yHgqAFzaygJmGGzkRPN2wp4knuNJ2WPnfzk4fmibEjxSEV73m3UhdZnsr71b6F4LeofNwBVxm8ibRiuCbfXfT4u",
  "key38": "mrejXJXthzXdrmyHo7ReWoyJMwNZJiyFkZzU9hNKnftDUXWdP7hnU6GzXwD4YLMELRG5HqojVLTzsz6ZEj73xP9",
  "key39": "mwyrJFuV2D8g9aHgqbAd7V87sjhv5x3jNjPUBTKKqCxj9yN6xRdhT38Rx5EBozTweiFakLEwxoSmLZ8JSbTcbiT",
  "key40": "3tK4xqui8CTCBWoXDVVEqsHeVEb7VyT32aRGsqcjdzQ6pbizuevrRqSWwBdv2fV8kRHggWvxjCvyyKuZwA8FR84z"
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
