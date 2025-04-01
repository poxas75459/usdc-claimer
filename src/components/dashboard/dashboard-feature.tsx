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
    "2R1pfRpFnUZzwXoVyWJTWNCFy6y2nfBpHJUuU3ztz1TTAe8L4Z4zSNRsb3i6bBehTJaK38ebeNDTCpctbumV4m3D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3evfPCgbB2L4pjQJRkgDfsYrdRiWqACKdSAnY3RnY2k2g16t6EjtpoEkHtoQ4tTsEJVLnFSvBE7AE3cmHzsJnQ3q",
  "key1": "53NHrBcAMMYJMx4wv9h6ZAKPQb2MJJdLzcgeo7Hpxvxhzvg8HvPUgcfqpQLuFeNSR3Wd9SeZoYMkTkT1bP4LnD6A",
  "key2": "5hVs99hhx4TEaizv3dS93iJELbCJ3rsx55DTBnKLPdUHbeGafyAthyn8xaAC6Gb1MFaDbAHf7JcuazWktG4K1iqR",
  "key3": "5R5UPksabgZmptvGeVoaoDiDeguGbd4jtAHbrJkk4ADWsaRUqtdfCUFRdUv68ehcKbgZGadFkTG53VnoNMKHsX2S",
  "key4": "4aooAVHXaHFm8K5WK56b3o9mJYCpeBgSNbVRF9vy9QLRhzLAzLYkvRjFPSWDCZsGDoH4kacfyaBL9NFmiXiHgocr",
  "key5": "2PxnYfppBon3FiawMs3hi972be6Fh86Ub7ykjJUzCaCUT8yNjNg21oeMuZf9Ps6ABbe4KsD9m4DA3RiVeJbmPjj1",
  "key6": "5ncWFgeg1WFScLJ5hprq2atDAMkzNcKkYuGQNAkmyG81S6U9Czk3hu2ZjNCGRUPyMXcxFKrXwzCP7z2SHqzULEd",
  "key7": "2BifRoBw2T3mgqAZcU129Tr5QSkcWahNUAsLWmUTv3FYFi1aT6XSJXgHTfmT6RLtbhuDEHDychwaxq9a8R7Tuvjy",
  "key8": "4TitpW8HoXcF4jo6gL8X8eSfdQnXjrdmVuj8tLGERtf3mTJdaBHeCr3yYP3s9qR5pnExiwzkc2oLWt5tfnKXeA5c",
  "key9": "4tjvrAQiPsyvEWsZydb98rPCE6BnwNeyzz2AvtvaeuuUVaDswaqprbz4aJ8QdQWuUFT2iU2qctR2eNFWAZbhRY3e",
  "key10": "5CmxqazewyQhUkK4QLrrDLrNKFJSWA3dnh4bj27EdcoAjCa2LRxWmJZ6NnRERH2usTVKWK2TZaChrbDMya93x32p",
  "key11": "WAaajxFQoTju1x5WdfmRFoFmBafg1btkgrWQNhHQjY1oqib1aZJqhyHWfMkMyxTDLny8YtJJrvkaXgsaZSiJMXp",
  "key12": "5T82H4GE1VNrpGJZ4uvZyDG3zeEi8ozoFEVNwuCS3HwgysndiwiZLnoFEKf1cGcY6U6U6cpLTx436aPK8ivekeVx",
  "key13": "2w4e6t5c3oSrX9Na2J3BWRmGhGtynvzQgSba1fWNQnxAUFx2Zb3ukLrTX2QktMF9UucHyGMzaFwJUTre7EcoXM91",
  "key14": "2dMb4GetmaDionwSa6VbUYsqTaqttYh3gr5WRP3MQkZtEFZLVgqvKCwUAVZdeqovff59en99ZrHAP8WfBp8kMKAP",
  "key15": "5SVEMJNdAUg4PTSKB6uWxPefuhMSbuonRWPiJKYEPTYycqt7mh7yTxuJxEUYow7Jo9XG9nw3V9r6GRKPrVKebqSQ",
  "key16": "4DqKsYamTDNgL8sTYv92BvFhwnnAkP7FqYQfNyruBKqxA2M2p73XqE8tFa6WpdA51dE8Hx5CduUy85p8MepJHidE",
  "key17": "2CD8qukdQk6DndAqD7RN4jHrvh6UPXDmhkpmGZsdanNSe35Hbde4MYu1UmEjLkJvH348k2uR9ymZRxRmiFUM2sju",
  "key18": "5eM8Z8CRKx2FgvTT8guyqqDYB5erjSxkmMEevTfXgzjMamVgj6Z4eCvSqtysnvzgJXWYsDuv1goxpCr9yfM1jGKj",
  "key19": "5bs34oLbHnVCyK4RaYcWfveQ4BpnYyZYFK4XzXBbJupzwCJxikD7HXqtgVusAjhG6MjBTVrkiNzQ7PGRu6jEPWi8",
  "key20": "3PZvuiDQgGoudCCFQmDTaZ6vu5Dr92TVEfaC9p8U5PJN8b4GrjqRnE6v4Tq56AP1q49TewPkD95LQuZWRjcMHHKU",
  "key21": "bKHCHhfCGQtNfQGJNEqBtLdXbELSawek44p9iRscMi7ockvqWyriCEzTcjEPLkJwKdsSSbGDfxmMbj3ybVizrxE",
  "key22": "3fxuT29xZecFsEn2Tbx7sYtBVfvthYym6SerqoZg1WZFHsi3y4yd9JMDsyjAZsET8QADySGNTjDbA9VWjhMyW1mC",
  "key23": "5AXi58vvQUMZfoKw4FJwCPuNX9XGSWbouZJywFqvVy1qUEkYBAxCUtuMbPFSo9HebiJunVwr2C4cDGdncUPADghw",
  "key24": "4eoiZespQeHd5nY4NeCdYcQTMKpjp7y4Ce4yVJEtX5aFamc598hCzLPf5CBCqTkodhna1xaJXAe2XARzSXH2Qubx",
  "key25": "3MyiAvNe5im7dvoD2JeE8ZC4RaYWTotuuNYcJ4yAiyxHX5qqDqDWFvh6y1fNscvaooSuFC4SLRwpjdbgMUUwcxse",
  "key26": "5BTt6BqsFGDpKysAz1MQECj7UeLZybfYEW7pdhorYDbitih8yzVpi7RvAUwNiPnMDUjrD9Fqzcp3mcmdcgv67TEP",
  "key27": "64wom44hXCT9XqsQXAxRbH2v6HZ1sftdmbMoGBQdeBonUhDFySW4pqhZUz9MWSvDuVkqfd2asJk4WPbhnxaAQbHv",
  "key28": "28cyS6qv7gNKEXcAe724g3uGPf4KS6puWj8VjRdvM9oNMZ13EocLqgY5AQ5gp58dqvbFQazRZ3YwqyZMZM6kAZ8B",
  "key29": "4QLjWJcqxUZZrS1AjrcexnVheLCtEBCrRYXQpnc5PKDt239G22MeUHxFbUGBHZQdWcQUTLhXMutEWuZYXk8Gvsq9",
  "key30": "2XpEar6XrRW1XWAqjofJz52JskUJG3zNQqUhNLiweD5hamC8qS8AL6B7YX1x7TSRRqp9gwuiMSVKFmi9AoF3Srka",
  "key31": "56nYeWPZxmz56Jz98k7gVaCjKat7QhCZ2BuVZ86pfDh4ytVNCdVjdayA3tbe9RimyCmxcTc4V5kULG1RLhZG3G2m",
  "key32": "57YcXH6ENmimWanZ9Y6YejsZVeLaarNA8f1mXBN2X6do3FW3a2d8dqihBBj6rdvYHREyfe2WDc5NidXE7fj4MmBs",
  "key33": "3Jb2h9Ubu6P8JEXeJ5Yi4sBvbVhvLbTvaLnetHrvHLw3fVHNmZVySzQDRYZTkaNjxuGUFXFB1Y5Nme7HvCFWDFeC",
  "key34": "3G9A4dk6NydHmS49xPALLMxEF8LmE5oF2GvrDVG3t5ydXXvZyPNE5oj9nsYhUSknNqfyKjWi8YEsG6qZ78M1fUkq",
  "key35": "5gdnk5XX2HoMw6vz8uJfGiP7bdLBU6SezmbP47i2rLg5qGyzEeWaTuW3NTUGbGV4SAe6tesWFGQJN3WeaFgxhHDv",
  "key36": "5TAAz8mZyh11mq9E25BcYTwtwTnZLHFJdsjTwWCYZt623npJnhf8VQdVfw1Ay7PWeUbRu4iiE8tCJEgfk9JfxFeo",
  "key37": "51dq19wqa4QzwYLSP5LthN8A3MZD4UkBx8HezKmRZp2bWRYEd268rcPL8aDmf5Afh7SUXu7gcQcbTBXcFGoX4Xrw",
  "key38": "3xFdmDfNN5W2nwSWQvB2R1FgAodvJ5iV12pBGsMwLujfDbHip4GHcQ9mjzsZFfHrXRj6ox9k2W4awcCrSqbzb4ky",
  "key39": "4y9Em39j1Z9itvkJyjCeWfaQxUxJyiDz6QS1obwS3qLR3ssBsjjgdameWgL3imNHcTSRu7K5Bh3jyT4wpzCJQwyx",
  "key40": "4ZUB4G5dW7wQGJB8XmgHe92xAm61YxfvjXmcjnA6Y5M4nqnyzpzKkjkGnnkjLCvpVCL5WutchSMXZnPyPjWz9Bjz",
  "key41": "4MttwbjdbHt7S5riZerPTg9VyPaLvejrUfWomtW1WEJYj8v2sScn2CX9J49kwGQyRgjmqHqiUfDXy6pdxWmwM3z2",
  "key42": "qAgHFu6QCa8BXAXpZT6id69cpbireQjjveUA67pewTwNAkrgdn4JeKFU2yiSwaZHy6oMPNpksaJ8iCd9v82LmV8",
  "key43": "2bgUoLvuG7KSVJNcRw6sPCeqF1uxx2UGdZvT9KtBXbMTDXexmp8o6MGBZraxPXjmiACw45346Gd14VKdGLLGKexu",
  "key44": "ZAiy7fFerd7RQHzpjLxFN6toePNQhtEKftJaxHcmKZA6egKKWMipQPp94tSDnPPgrYNgb4XW7dNstS7K5F9CS3y",
  "key45": "3CzKJy1gJdUmNhL3FWoYKkWGTBvyt1YYuSNw5YcR8n8x68sYvqBhAA95jeYz5k5yHgH3y7z7Hwzdh71A7bmEDdwM",
  "key46": "4AM91sSGTdbTARAMyiXmNifoL4UVpjfsAXBTPYxSi2bUMwK9xtK8GQoaJqJoFbx9iqUEsQ9rD9M7VeWVMFjfRpDi",
  "key47": "4m78E7KzeicmTs7gZ4DaATfG3DrQs49vqZaKRw1AKpssePs7TMETZL4KdoGWn6qPc3bweF3cyD1emD9TuY58PxXi",
  "key48": "4JQX9HzFEC4jaMiWT93kFLQW7fKXGXVjQxGbCWeUSqxdqsCiqi5w85oG2KgngoeGrw7ZF5CKneAg39oF2f5gaWTn"
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
