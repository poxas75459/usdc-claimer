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
    "3NX42fAVvN8jXJpjdf45JxeubDyqieULwDP4FJtsyZJoTZK82VQRLFS8yZnwkoYARjEArMSAvxNPwX4us855hCq1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pZyKtTQZFVvXyuiipAzZqTBPRba3kPk4EsqUCv7rLJxgCX34MQZ8Nori1Tkcxkaaywd4z65GrCgPfBFMjzXt2EH",
  "key1": "4tSVWVou3EGqKeSshupbYMpmJJwQL5kZGjLVaxK5ToktPzqU1CgXGApm4zz8DQPnZ8tvehWVMEz5AsDTEC9CxbDi",
  "key2": "4jE42buNo5jXkcFPVLrCYd3Axym9qfgARqvgLnTmteeoh1FycxTE8WiACoUbuXyPJmF1G8E28bsD9bAiRdAttSqF",
  "key3": "Xw32iHQUmRCzm65finYodeDuovrVWtaXLjitamBWAMkcTvkTEPwiQiqoSAf94uf21UTfFkcDbZKk9UVv9RZkJj5",
  "key4": "3h2Ecj1vwZt8wsvQ4nzAvQu3Td8aBRSfPfEY3AKHdVQ6z3tERCRVLf56o6WGMvbBo3yH29Kzpr7uNxHXUAqTxpUG",
  "key5": "5KTrrZXhoAazUxtbJGJcqZ2ont8V2EarQFPMMFyGLobPqanadTigtEzvcz3hnabHcuakVzLNaa9QwLBJaXCnsFH1",
  "key6": "3gbTUPiRTZYLpVfnyX4VJ248qHUrBSeXF5Q3r1UK8TuA2A8XkjQNwxHMf1v51JzYU8gtfAFabvZJ9foimzzn2kn7",
  "key7": "3HMsERSdUqhyUstEQwbN9mQhewhnjhad9aKHVEu5FPzG4nLimiF2eix7fWvVyoUyTZErfkLbiK7eiL2RqgkbHr5f",
  "key8": "22Xh25NYikKKTjuT68Uenvjb6PoYJZwdEXthfsFvY6BvJoZtgGDidnno2Mhth1Ayhvn62NDzvpmPiR35mUn6km34",
  "key9": "2dhckoCQ1RtfVwqG6eE13GVyyS9JLqMg3M6X1MWWZuYWXA9Ma1cSnhCmfi8vBgRitK4jVxBE2T5KAAxnHfd7okms",
  "key10": "3VLVq8VbH4nwdxFYKu4oLAVykg6RyQcNPLP1FxCFT1784GEzEG1yW69zyq8E1UyvJjj3K6bdvnTBMVidzAbu71fV",
  "key11": "41cyYPbWHpqPzvrCJm2DqRqMzrVmKkEaymsSzRfc4CBucwEHG3opNQxz71J8v7n7Hf5fZvKf5ejDws1PhQe2EEuN",
  "key12": "4DCS2pFHQCeDmSy4RmRjoMpzyY4hJJYfSVGiSCqNX2LJ9YSk2Wr771P3GqBF858QJ3tDEjU2BqSs64ZoUpjE3MCF",
  "key13": "4F9bSyEBDbuTYQBNMH2dPS2vpXcTGL6oAPmk9urEBA7iwKnCef18gVYoyeq1CPXgRLyZx46xHNim22ySTnB3pTXN",
  "key14": "3QKAgfSLbvyZ8QZhHcSMMRXJFTBPE5ocyMTxUPiH3dzwnxJjLZcZukopyeuA3m27JkLDoPnrYVcAeNuxMqAbJ8vM",
  "key15": "4L3tf9MWFotBxjyb42mLhvL8aQNUnXwcKPCUVN7aA6DUHMWbAiwQK4owpmVAWiAN2Dt568gtsXNGdP1DMLqfC92R",
  "key16": "5EdGEmkqKCnp9vQFgbGk8GTrNMicxvwsa1jdGmAePAKXKQsrscM3oEsaz68n5xMAMb3P1SCvi3ASD7xrVUgNFmPp",
  "key17": "2cQGEZ49FHgAN6VASVRvd9RV5qhscDh3jdKt5uf6NLYwY8hZQPhZLn6PwcJGkuXvqZoBLzpdme9rYwisFh5oVXcW",
  "key18": "w1LHmGawF8bwDjdm7vBrxkFEUfUEF7RnRhdxpGVBobhmXWMoNHTCHyzdTYooJagWa6mofwE3gHf6MbNLw3DiR2d",
  "key19": "7ssuDba4ge8DaJEP2kCrQCDXLp98EYpQemebd8395n6h9y2Jm2122anqYxpzUiwGmUnUQCZSzhmnTmY42tCgZQ4",
  "key20": "2jV2oZk9gGNE4NLW8WgPEDPiJWNR6w8nh2Fdp7YuTmcsNwoVf2rLgNTjTTgjKvAd1Qw7eVwkAnKA1rNw4yb2dVSm",
  "key21": "28dsd2BsHGsZk9ne3PtMrGQe7CAhen5B2RXGhk2SXTrtXnyCg86aRg6JMmV17UWey8BNuq8jWkBnwGMYPpxQW5iZ",
  "key22": "3TAZTc9DJSgoM152gPHXErtgnUTHKnwvznLmfUKgUkz42yd73hfS3onHExaoGnxrVEBMriwYefbg2qYDYC9pzkUC",
  "key23": "WbuHs8tiFh5Sw3o9odpwAnsJi5bMfWzKsLvoQyUe3v8aFtTBBw7CfyS1qQWDJXoFgGjUJA1fMpf2TqmRxskRLZ2",
  "key24": "4h2BX1NWozdRkEoisQHWnfBd382CsB6FEwroaa6yYKTG8hqfyh1F5P1S7Y1EFFvcVQuNypEWTEi7tgpVQffo6mQD",
  "key25": "3fwpKxxbVeNmcZjFU958r9skbkZNfzrCXSJKk15ZmDm6dWfx3ijaFKyJQvUJbqCNoQ3n8UJRdM67nQRUAUYQFFaL",
  "key26": "5hJw9Qdwn36HM2usp8SEjnkwhE1V4Yb7izhjHr3q7vzrYhxzwtnPtwEa3LPEYu9ohNwwVj1BF2KSm1p9RG8eH4Uh",
  "key27": "39fgVmFuiGHXtGwDmPJ3SkR6cUbBJaKRGiy5FMgQDoPjskT8mMmugrS15BeqL4ZZeFmojbSC1PntJtf6mX6fZak5",
  "key28": "hLHhAfaDw5LFRy9eL3UeYWiDvffyadGTx5399JzsbhCAGuxybSkQnyX5Qc9JoK78XQUTzkqjnhmN4XueJ2A5irk",
  "key29": "2p5Ececx1ke6TovWyxjtW719gmMRe1KxEkys5KfASGzxtmvutuKMZJkWhUZ3Uw1rx6TLeftjSi2krXYQvaJocDU",
  "key30": "5QvPjf8YB9Lkih5LTNgmnLtDKKKcg3cEV2MeXBnhW64Vefqvzsg5w4fnfsQut5bUvGgVfUxpbvdUo8NXVUeXNrUL",
  "key31": "38JAQ8SMJN8njLmTqgMnL1g8ApJ4ppKpNtSWQpoVnX3TqvfyWwqkeRED2TBk9mNSNxgRoWYdyCw1jUkg94XXLg4R",
  "key32": "3BLNU3C44z29QhNvZiZXSvffiKmm37MHHj39LLLdBQuHhAEgc9adJPBc2rVQfNouAGjyq4HKft94zqg4RP2XEzMJ",
  "key33": "36v1djBqV2jAAHGVSR4TxKuaAqN1haCzyWFsRQKrGfcrJgt8RD4Z8hzSyYqj5BAy1uZorJYuz9uAkxoQA3Z5mrCJ",
  "key34": "3965yqizLZq1z2u3ioiNP5SRstcyFWoSt5NgBRTxs5h4oAky2rzusxFW9kX22JkDJjRFgsikRxfGhY7fftboaxXC",
  "key35": "p27cYt5z7jFGjYhE5oiX6Expub4RPDCYr3UJkxbi549zbEmYMjuwEJiycnMuaJ5bv3wJP1SWwQto7fn8gF45gGo",
  "key36": "3YiJQkn1EpZj19JjvdkP4yfRNHU6tQzihnTvY4vkY3fR7ge9DPTHAyhH4jRCjx1bogs1FkiU1zC27oTFke8V7DNM",
  "key37": "4A94ibLLq3rFdS3Zvkh5w971xuCqfBDKbhBVkfYYjJ8ScZc7HRNzjBZRRodYwtWmxHjBGVMDhuh3ktHZABcXykDZ"
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
