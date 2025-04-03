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
    "5hRQaonsCDSU9bba4vi3VxEWBzGbv7WU9dxFni2x7pA1H5r7MqKuUkVYWvQxorcuAdMhNMjyge6NpK4AnC7NoLfR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m7tVWeNntaT5wP1MXhCb3D38nZtasEL9xLHDxSQG7u8XaYVQCrCbKZsGKpmf3g8xMhjgvAab8VbxnnhEDpoUwCW",
  "key1": "shSRUEPtnTsKXZ2aRz6NKC4sqdRSgXcp4gCmCn1TS979NHv289szzYDgj915eeB8eKRWMCvjmv1AdpQJhuCCsTy",
  "key2": "35H3rjL4q7eRyidKdw39APyposWLHYgu5tzYGeiaRf4tu2b9B7PRMKck3M59ou6nGuGsXFYjCvdn1uw2Che1Gn1L",
  "key3": "7wdk3q5wXwtdESUtMFbSfRXGp3d8zfNvuxnryQyy5YKcgki1gbZag6waAgYtudDQaDbU8v5Gj9VcftgHxt1wTvo",
  "key4": "1cTKsdrwvHLbNxvjmcgy94HciC4hB2PNRQU1JcPgRGcCoM99GxnceV7WFWabB7GEgcwhLj4feUAQqsMQZbAn5Qi",
  "key5": "5rRXG3NeE71c1ariEYB51R3ipnFtDxkTeuMGoaJRUeFbwrp6jZYpvBK82PpnryTnAu8WymkNeE4bqJCyA55jzWEp",
  "key6": "369fYrJBLaUFSPYi1ScCR4k6oUTQXMn62ukRmn2NACAJsapnnWoZKcf2hXwzA4cUa3DC8nc1P5iXAeh11Tbt3JjY",
  "key7": "5af3f2qfiiacmWiMCaCQNCXAtLRGxgPXMdM2wPfVdu97ZniZPxMa2DXLDER4xy5J7BiZ1CZgVSSQcKDZWMroEHVU",
  "key8": "49quf9rA86gc78FG3okVRGFJEry4TYnv1sPb7r8MnmUpf8AGmHVpENQmy8LaMYpb6wWrj93mHzY97J7t6YSreFwj",
  "key9": "54pNdP6heWRNSZqj1MWn7VybkhQLw77K7mL7KoTbU7oi9921LLVRTZUJAW1JKV9Hv8gnGbZqZ3HBHJ2dPWFQiwvx",
  "key10": "4bvCE5hjqH9dznhjFyn3vzB2NYYNGtUeb4SSqcN6MMinAJvDbufgjEtK3xYeGtBh26n7W5xqFcZ8JVUWoH9kJg2v",
  "key11": "z5ir1r7aTqNCXvjXwhG7EM6ogCmACbwR9fJkY5TyzdKLn6TyW1L6vNftUNEBbK9c6dp4bDw9hESoqA9ZzKpfAKV",
  "key12": "4gKMfu4PxXzVgMgZ97CvmZNvYUuyGUDVKAUFgqYPihEDrGykCbFX1Q8NPEWeX9N7y3CkBqi1gBCWrTtqqf5duC15",
  "key13": "wk8yC1eRscanNLq1wSmaGG5qyvveHvjFx9mTyThX3cA9nYGsxbvp6ddmQntKaYuUnRhWpeoHyjL8do8EY4i26Jr",
  "key14": "479RhyKthKuBCKh31SatMnwU9b1hszHHEBT3tKgx1wzrojdvG76KX8ViQeyrwsU1NWwa3XpXv68PoJjr3YqatUvb",
  "key15": "4UFkj8k8vGgLWgqEt4dqhfhAhX5ZsuqCT8RJYeCbCTkqnN1uifiDUZY5P6X8eNQkknowD4sS2YqXrgNu2GT2hU8i",
  "key16": "sHw1v4j7xdDwJkuZzFnfNCPxRwJXWu1SmK4wvmTadZYiZyH44duVuqJT5Arf2NiqQKhFKxsCRhRJNaJzFovNUHM",
  "key17": "4fC3rEhubPRpeNcmKmGYBFxEArcmEGUKFXmABZHc2aADRAS3CQeeCr1CxDfAGmaWaqxZ2aCeUiEHGU9qKtLsHFUg",
  "key18": "63V2qqcWYrAMQM68k8QtyUEzhzjXNdFm4umcuqsVdBbnYCTKXPrXkmwyYzVdx7zaZZsEEHcebzP1UpVGJUDUfyXb",
  "key19": "5ocQTayvTgbvpCYVt1Vyh7AzSsVAzWRS1E6VFmFn1PuAzsWaCZDAMhS9at47FDqb8DT1HxYsP8jycUfGJyb8q5Qz",
  "key20": "31Dr9Vcb7sJKvMeVNNM6uh1uMADUFtWRgL8Aq1LexSQKCN6K7stqUbDz4HaXJaF7mxiGPd3DkfQg6Arj682aRcnV",
  "key21": "3dw2kvL31ZTAJZRqzyz4MwZnqNiqiW8DG2w4T8D2amBQypKLSmSxm4NPVtwVUeMJ3YNqjddY1FquSNG6gbPGUDyz",
  "key22": "2ZzFaUhdPP9Wn4D7JvumLgYanWcjWzuHK2MeN6YEckkghpyX4ZGnKDSDTGbcUPopt8W6A6eWGF6eUi9sSE1tKSyR",
  "key23": "2XaTYqXGD4tB3f3KFgFuFbeauCj3o6zgNGKffvM4XuKmeXUzJN9vRbKZFaCqKDb6dq5uFyXfy5ff7a6hbzDVJjJe",
  "key24": "4WqFdZdyX3ybramDiyASHTLXkAE42t2eVcDoM6Ti1DkNJDhzYR52rJSn2xK4iLUnBZ7QgWnkmyYgP7AyfhiwbLMb",
  "key25": "fAmS7n85PCU82TYmxzSJVNwdMnxeGFqHo13PM3uqDPHFMzM4hX3vkiMbMYLCptPt9fAaZaVQZUyXsdpLL9tVUGP",
  "key26": "3zdC5Dh1B3JXyzRDFYUheykZyR6nZATntJH2ZJj3JEtvex82DBtPuGzSYgSh15RLbWLsEMva5Z4ZhBEGteX2vmfh",
  "key27": "5W2YaXVzCKUCgTjTZihRV3j5NEzBBxAXPAqD9ohqw31rHxeuxHd83aenjk2S934oG15u6TaeXczVygLveAk7CERp",
  "key28": "5kV4LxGGmDG9RwHdkJ1z4AJ8qMMdzNJwwDpgr9J93pCPArCNVb7zx2VvJd6mnRRMGrgGpSQYVj7CXG4szoiFRRob",
  "key29": "2WnzYnPGpj7PXaBmgNTaGSKLsPuC5nuKzCZBSLMSB8tn8VDmRrzKesKCwRLUqfJWGBDQ52uafhn3Gs17QbK49C2N",
  "key30": "3MdRFv4C6SGyhbbQ7uHBZyzCFNpQwpkWtyVgezQ6DwBkSoTKfr8AkDRrgvAhHBpL2rQxDHjEaLCucQ2HYpwo7hT5",
  "key31": "2Z2Qs8wXieMDSqH8PqE83NiAH19FZtGEYahXuhkPSj52YcomsmJThXsAZnaeUamm6hKbS77EZh5vXkCHFFharimF",
  "key32": "4SZdBUqkyv2B3MeguD31VzwZUPibifFHcaKs6E6bzDporq4a4JSTBeo5Qwg8epUSZrt4GHmgNcJXTpNdKQLEJqHf",
  "key33": "4gS7qqLbqe7PoymWrcmw9xU9FkFYH5uTzfBkurYcYcqcbRi2EzwnJ6aTYYWUA7JUDc1n7vyhWvvR9SYp1S8g9hZ4",
  "key34": "C9i1hqsz6Jm9RtpwJS2882cRKCQtTeZTHFMNCttf28vaNRR4cLGb9LSKSngEpoczSptuKVi9AMPgojVVQiNNPhM",
  "key35": "4k38XWNNCUe5z47PQj26Ybvw3hgJLJBx8buGtj4N3TyFysrJSVgk9BJv5AgbRjed2wBHnTVAL5uKHbVkih3CXcna"
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
