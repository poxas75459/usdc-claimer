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
    "oyuxveJ5HjEgAT1JmvYPq5tpRVc9k5ahDcn2PYZSsr7yHmuc91BGhMrVTVAKuqGoSpCu9Sm7XeaSSonx4QZidhS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LM3kF1VPGVgUU6KVUT1qXEWE2jqJweJBReZup6icCrSWWTtJcmS7py1siwFL6qz2rmRYDzuqxfbfrgsgWuXzPKM",
  "key1": "5R7EoY5aowTMykCkyZEcrTgmPLynsjEM2ntUwT56EWiMQVifjqTPQLgBPB7bmbBs3F2avJ8wX1fVwFG6wcSWS4LX",
  "key2": "9GHeNNUTaRwQVhuUcnEZE1KGpsu7HXBnA8n8xH1qZBNetLxFmnowoV8oBq4VmwoH2j6so7m5FQcVJDxhm8jWocb",
  "key3": "5fSsPKJHTz17PtF5WicVg9jyQW3EdMWnnjsb16tT98REKjvNGSa4zVbQ8B8uAiLsrZjNP649yFURMnG932WT8Qca",
  "key4": "3JVtimkeovexXymNjmfuYnANrzSu19FumFeH6g8yCA7FBaGiZppBp1astXeTdqXjcnBurH9NMR7hQCXkqc7crCeV",
  "key5": "4u3boG8Xxm8891ouWHYuV99jaawoCo14vKXGJ8nGaE9DMVMhxynFtPbtEXGdexrnFZGYgmokwyKCoMoR8492rH7k",
  "key6": "3PhbCLSWRkqga9Up2iY7zwYZkfkTVxjPx2i6ptfT3puMgcFTMcJKe5udSMBJuaS5me5LXQkE6WhVLfrNn23uRaE4",
  "key7": "3yT2zg7UM26n61UF4dGS24hmAf73DsCp2RU91pjig9ToCyN1WGMfiKmDeMLmNgQDSHr31riV9Z3HGbQnoPuZgqa4",
  "key8": "4ZXy9LGf2GBPR9tPLVSt3gsnACvEVYnoZ5LXGS6db8NbmyV2SLXY32149JTmsXBLsL8A6TfESQghyAxBySTL5KU1",
  "key9": "588pbRf7JqDtXo7TwLaJFUvUYJEt1oh5P3S1E9peYmLkKFGTDhn7bLo9YEUsVybdPiQGbed4ha7pjEtDe6qLyRd9",
  "key10": "7BhpXXZzQHdC2DMc2wNigUN83nUk6LaJYnEVGo9mEE8XuKD4ow8Ztd3msQqGaVBDTrGDiuaMupjFh6BnVsk6WDG",
  "key11": "4V6XM2m1Nbd1YowwvBjYv8PHheqM1DSSskjU4tJpa9aanFEZKSPbBb1jHWFnSrk6B38EZFuCwTaM6s89MK9v3d3f",
  "key12": "5ZyDy8TGsPTRDLwpFe1DbSuYsLd9PRej5y2yVqJ9qLdoh6WEP1WUGuQL9YA2Y3tzTYEDidpVvfCRB67Dee1RzpGX",
  "key13": "2SxwFKmtLyuSsZ1B1YgEZrZo1v5L6pXrSa22ejZDiueJNkLqHUM6zZmodjKVq3RygDpuou58CmXWcHtL7CJS7MhZ",
  "key14": "2sQhttY45bgTxEniBpacM1zEyxvEKWoCgiDekK8RLnsfHrnZCok7PUNFw83Nf1FnvzVicNivNkYj4dGkcUcBta5e",
  "key15": "3kfuF8LUnGhqtW3ymbLBU8R9D6uZPMjGvjaHYzvLCKJWRVMeSui5XgzVnqxaa4k199Epd4yMgSXLfgKXMyZSTQiA",
  "key16": "3vocwsxymJkBiZBMWMudhUm17LxGoDfV9qLCVD4hodKq9nojST1MURq8h5UWWyoMmDgHRz2KrjRgx2siAZkDLS9N",
  "key17": "4Wtfp9ofKDFmCJnf9a4XzrCxjqxG5WrP6nbsKiyadSdtYPonv3uacSiaDGvRG85DjZptQsB3LRuuqxr95hjGkcTs",
  "key18": "MsUkJnt3dAURSWZa8ZG5TkGfHNGXUaAthPH4Uv6JqUb4W1NBAi71NmZ2KhDDpCFmTjLpzDZVUsr5AUeGv43Y33N",
  "key19": "21soimqhzutYemT3PecvnouXGAZM4k8juex9BQJsjMkVJ84gqZmwEHoKvDy2SHUrH3xq9ka4ZcoaguLUz53aWUnb",
  "key20": "4HMGto4hyhyirqJr179XdmoN7MPDpUDkEJH3au485y6ir8uLMn4GihQFB74zoXd3wS666uaEpKWermmqfXZRk3tu",
  "key21": "2efnXFKuv6iVx454yJ7Hqrogd96EmfbmPPzYe2i95kgSGAvJ4dgXaZ3kwrAV9ctyGHmdF1AdnUXSkUzHPhHf3ekT",
  "key22": "3i1ZzJoQF7X1NkE9vDjvMZLA2eEh34StLCneUbV9CnE9uXfUp3qP4rj4MDinCWTXzGqjbuDzLiHayJvwVsXPMwSE",
  "key23": "43XZgbmQdF4iw54xbodkGbBFcQXt9kngLsStW17iifVz1QZAniq8Fg24xY9JRcYE9qqMz6LWtzmr6RH1vR1ExSL",
  "key24": "3ocoZgVkQZwSKqeqHDJxW168MrVc8e4iofQoF6Kc7ya8ZfnmKUatqHc2yJY8e1pWQGGRe6CAPjrURGfiiNDq9EaQ",
  "key25": "3vzj8nm9RqoWWtivYB42yQXPCsoWFAApKP4cDQ13WbzPFdgB3tCUMTYT6WDoZTnmqG7bwSmM8jr3eSkULyeGciSr",
  "key26": "q8A6W9K6U4G127zhWLcxyrdR7S9FK9H7QSe9QjvwsDdMGgAqMdLyHPRwzJSXddhc5nYxLARyUxS8eTxV1hDBHSG",
  "key27": "5EMiG8toHJkq71jMDQr9kgBMEXYcmt95wBkNgfEGkMjquvFYhdNWye4x1bRVMAotB8BwsS4gsPRFa8DriZJkoYQQ",
  "key28": "4jU8DBBPt5eKtCjEM5C5SygWNYTBsXS7pnctZJhkyax8oLV3hvtEoyZfBFMTz43jvSWSngD8wbfzopwXggsu8k2u",
  "key29": "2iMhfjLcGJoRh3Jzs3Uo5bxJPtBBZhJgvbhPZLdH64kPFYYFuDifs1Tjbh1b2XhdgWCN78i2qDN6vuTPY1L5fnye",
  "key30": "4nwjUhpF9g3r9e5yQP2DaeDMfXSfkY8cSK2gTnQdBt1ci99AYWMVr3YEZC6AYWLJ5Jo1rU9B5uEAdTfgx8tN4cWz",
  "key31": "2DKdCdoifBrpXsnhgQqAtYyfPmHKJvPFTW327MrvoDzKMkAgtXxWTHyzubvajjrFuzfRKE1B6Ku3R6VmtGtew8HH",
  "key32": "2VRgHi159MEHLi9BFB1EShjzyGib8ndDvJKrfzWKwhBxZmJTXZR9ukqSWGm7jgDzfu8uLNiHj2jbTJQD3NuTo5wD",
  "key33": "3qVGXbC5VQPkXUXFqZQBiVgfaYpxQFywANBRjfT5jQ2YeXhDMhQbtY5KAYuqCcZ6zJtSWE2MiTqdXaYK3h8auSQ9"
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
