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
    "2Y262gE4E3XdAW8o57vQaa9xBz2JdEWWvak6ytNVrAxpX7waTJN2UfBnabzzrcdxHesTu29fYjGAGJHUvrJ4EMJh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "phzZEZH8vXJruAPQZoGrjGG69erGWbS3dtvs3qE6Juwb1QPd6UGXp6HXzPBojXRhFZePGNmVQtamLwAG2XNNHk8",
  "key1": "2tvXreQJxqVFpobFQViBbtFXzU9QfEDWVq4up8scF5wev5YzzYMc177ayjro1rHkLCKRRsA8jKbmT9i6m7DjGNkT",
  "key2": "F9GhCHEzD1wf8uQPS2UFGyh2TnQEnQSSwKWsuxEgfj5PKj74kwyjkV57ZrEcKr3vt6aJqbL7qbzREGUmcf7BSJL",
  "key3": "24GDTknZDYn9F3oxf3S6xaR9heX2NP1yn75pMWzJ7Xv5wnMkXyYsCbqJxCPBLfbqHrDw7dTvHeV7zXXCqzZSWZ1u",
  "key4": "2HzFizumfYPBnDTuXMYZ3gqPUYKBQeMKfD4FhawaxfyCcVYZckoxkzSAMAU2wmxouhr4mZbZftDNvVk9VQi1MR5f",
  "key5": "2ZxsL2kudvaZYHuTcVtXhRXb5UHpcMgrrMtWmtzbfvjc9ZVfW9AFcjbstJ8Wn9XzGyXnedkRAgiXPKz6AX6geLgw",
  "key6": "5WJEDgrzRbyq9DL7g4aJt9svBPFRHzCtKsG6aEL6zQjSpgmerjs3s2r6WR35SK4u8CadqpmkAFQW3n9ppPRXkTct",
  "key7": "LxYhj3PcVE9NpKBmMNsFB7co8QJBZtCwv9sqQk5zp4YkU1e5yNeb4oD2SUSw6DoZERhKjCnuMdvuY763RpVCqkj",
  "key8": "3iwwTStuqnF6Q5kWydtiMDXCjRPp6AegrJ8jNkM8vHzkweeh8j6NjaMAXP7DXjAS7Sb2jSBzuskmzd6iLSJdwbsT",
  "key9": "VB37ZKr5xR3NAQCw6ygYk9phzpx7AhuLgJEu2RtWVZsR97Nkqs21ZdR3bUwHGKivXpNxexfoHDZ2W7xktUcv1VG",
  "key10": "47dqj6PgdDuQd6yJppPKoupmRmqA46XdaYgKDniTSKrF11qscGjnzJ9yhrJokGWjW5dPjfuw6gNTTxoXZCwMmhL3",
  "key11": "3CLAmxNt8CxLRoTeZPMQP86g57ao6dmAPXJAd8SgBnE7pYAB7TmK5aSZHsrrN5B8Hxnp1gRrzw8pAAVib4JUwtyd",
  "key12": "4Wki8tHq1tv3okVF9EX243amfCKsxR1Wa4DX8UjnkSiwcmpEURBTdxn6KW7JKQQ7XzZp2VRQResEKG8Xqap88fT8",
  "key13": "4w5L9E48ZHuNZAVyeRndpwLZgDeg4KcCkBYwSA6ZoZwWrKGd5HbeY5vFHHoxuFjtwJ32p8L9o4Qasf8pbXxrB1ga",
  "key14": "65rRZ6XBvTTSTEhFeQq7XR4uqURdkGeNqTyeVrekKKpxi99o3hZgHGSeKXrNRJ8Nh7yo9kpKfTmkNf41RwX2BwiS",
  "key15": "3qPb29pqdA6nRNtmGyjSf2ESMk35qF7a1iuLZm76pagCSvwU531Li35h4dVWM26Qo8xk5NpZS33paxSETfKqSAwx",
  "key16": "iQUz5naMZXWPoTzXpwSCc2bvDuUaBP6GDehg4oVJQeEbQLhBfgLzsjQxBKW7brm1eCrJ2X2TnCWWmZkQ3xAPbkL",
  "key17": "2JvFn3ER5AN5x1Zrqn76Uitgm4pNSkoApGg5uVbvM9rZLhaQpmFzc7xvZCKi7qZtE9Hj8MGPFunvYkhA8eKaRra9",
  "key18": "5A7HLoYKoysV5BwXbZ6WRQmxzfVSKh9BGwNmqUaKxZQcGAh48YrXgJyVpzuSYfNJ7H5DbY9gPk4hjhD4TZ1vcjps",
  "key19": "4xZbUmV51SbJ1Q7XQk9UsoJAaNcRVcipE14cUwMHqDsmNVSfCf5Zg5suEqt3k3hkjFmoHEAXSCX6wSNeqM5R9EkK",
  "key20": "3nVMvVHsD3bLWrRhZqDJmChp8M2cBj1DKue16LDCQVPtWpyBjmwtDLwnomdPkyQrgSg7oRMeVhwuRBss9tCD5QAd",
  "key21": "3e3tArpNsZJPGNZBytj2A26FexoWn1vekHxiY9Ls1tnYbADLL4wC4KB3QjZsP9VkizaM82BbFMnWYLyhWny4cQ8M",
  "key22": "2RbVkdZUH5qSHmmS2HVTKki21NrHKcBrtMQXKRF11AzoN4qcMq7CsqmSpHUCHQQsaoRhF1ivvTtF4q1jnfetUefi",
  "key23": "36pumb7iZRepcdSEWEG9on5YhEk3JL9JuAb6NZx25XQmYYCrGGAkpqwYxLb79ArUmreUGJgsBPU92ajdT4VNVfst",
  "key24": "h8f9iceTfz9Vgo9uoRDAq9n83Vdcqg4QVApf3jxC1TeWvNByLpW1r86tHTEuPpi2uW665YQfA64eD6F4z2TQefm",
  "key25": "5tnbST9kn42MhqYmaKCJriHTBfdNHVVEv9zQQRi1Du4kMTYe2c4fhQpYKf1pTxVvBmGhphpb9jq21vWExFS7M9bQ",
  "key26": "5JEuKBE7wk7NgrmMZDJJiaEKSpS2e51X2nE7ooNM4bjCLN76seAQbHWjXvetKPFPSjjTDJKiASKBLQTq6mfvdxb4",
  "key27": "2MpXwmxuDnF8hsNMNFUZFX7yBc8fPG83JFMhG2swUvQLtqChBRjB9PzQE4f5urhzzKekLZvck4973aR1MFD2MiMY",
  "key28": "3gUj8JhD7fiqAoe3YsaYXUnAz7ZZaKbbAnnYWW7hQWmgBMgno53N2aT579Yo5GS21ucnNqh4t8bVJ3RiXqhkJ7p2",
  "key29": "5k9hv9zaLikuDR55BziRkVaHxd5YLLV1RCWy6fZQSKCk2YVXLT3LGJ3CrmJvA2hwJcnuzYQcjHK1vMUwXbqmpDmt",
  "key30": "5eGHQL7FNMVLLHs5NMoyp8mmCPKbJxRq5isreNgKx1aWvdyoxJVFBevsRgbuPXjw6Lr7cGz4VuutNfrBE1ibHFN9",
  "key31": "5xDSJBjtaNiRh2y2G9aqRov5Bm5r8VTkczXMRKVKR8kVSQ7Gf8GaWf2xvBN3uYtwUnJa2EdUaiczovh2eaEkG3pK",
  "key32": "5KkGcq9vsXcnBgBXbABLDqbGgarYEG5BxRgQ5dVQf2cUGNQYV17CdrVXJGMvteCWiJLYGLee7VjPs8pRKU5VjrSa",
  "key33": "2tEWrNPAKEz2q3Gqi9TgDsSpaEFjKskA4h2pLZLawuJhoZa6sZBxp17kUebGKjtU2EP2isDdT3acrsJhArqER4wN",
  "key34": "3vdHxxckacLTLrQAtConZj8QapgnmKhA8meGNw6mGq9sHai27msgM38s8zDbjbBo7WTBjVwTHrsn93nFkYZKysxB",
  "key35": "4gCQGnBzUYdEr6ppMztJz3KWEFLNDfYU8S1jAj5Axf4HtPSQEjcGkRQ4NPjQ4n1JqS6tycKMTdb8tEBF2sSmRYmE",
  "key36": "28qqjDFbXKbYjqetAr74ieox46ShfHRKd26Fnrgq78mVR7BHSkBuXBnntQnuLx88gsXnfpFeaX8g2y7rEanJj17r",
  "key37": "3KFYp4boHybN7ukZey5DiTFxJPnZQ9rhSq8pX7Ve6jaM1kEjTvkXVcQCqfyXYYfgwtpMoXZ1yXZ5u768zEn5QzG8",
  "key38": "2GymnZH1r3hsGzGoahpB7CCbaEZ49oSsy1X2Vk8rRVnvSXr9WoRPPYf5nqYoCKUoqu7bvVH3HMwUdkHUoNCQsx1W",
  "key39": "gwDBaC7qPmjpe3dyvEdrdGywSpVjW5aXKTHnWh21kXnk4e4xCApDaP6cpE9vUNTE8c1GTpJ4JUdpTT3sj6zjkAd",
  "key40": "4sToPA2eqqfcM6QrKrotH6s8UPBPDHveV9288UmLESfT3t5yDsCqDgre5DuvTeE78xJWQb9WY1RRiD7b3bH8e3zw",
  "key41": "3QqJNmbuaPLimznfSCVyBzGBhYnVmuBXRT46m9kdCfejBSdJrityoDCXsugrvK72xiRjU6kssx1D3NASK68jkrAU"
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
