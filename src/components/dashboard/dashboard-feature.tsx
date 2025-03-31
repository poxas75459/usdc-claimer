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
    "4wqvftRNK1rymnqu6kbd3m7ajoZYwE7JAD7NdgEyp4kHhnhXdtsZumzZmTbFShKDohVM5GgG6eMZsqhPNS3yirw4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kHivhHXvjWvK8Ao9Zjdc4QxkvPFtoD6oSEsJvWp6unaD3ogo2yA1gjYPqCyfLdekty6Dwdq5SxW91knj38B4Zk8",
  "key1": "5Dgrui8FPWeakCcha8q2AjsrNN7UR3ADCsuvzj5tYFz63X3nDZagp6MinAdw3jB14VBZYrJikXBq8h6CfAeZHjJC",
  "key2": "4SqZqyfmVcMMNjAWds9UX6jZDT6KFbK9LExNyVwcceU35J7TCZxkVgEWsctm9Q75BzjCW3NcvRnrLCJmA55jztY6",
  "key3": "2Um22JoVxycc34dvvkenAyNTwYUTppDLW5kuyhSBTmJBH833b47kkjcgUQsxJWVfpb42Gxmju84yAh4uaSE5LSoW",
  "key4": "45Hd2z7iKnRhDVixaG7ueNCTn4L6gvfysuqMgrAvuuqq4bUn5PGWt1aeCFU9L4xbZTDCWb4skjj36Y82nVu78gVn",
  "key5": "4FVL99mZpXLms1Xua2jSEuK9CJM3iuvuvrtnH1JuDGMvAGnMMqSmmzwyGi84zNdhKtRtgm6UrHDtSNzVV6HFoxR8",
  "key6": "2wtEF7zVZi3Q416h1zQd8mqtAeEgYh6tRMLRSCWfh82BkwyvctCpWvGG79dD5PLBt1mRtaJWUA9J15ha4nvQcLpt",
  "key7": "5eVvxPxo4HcuAQPmwWpNY1joszqp9DX4LNGz4x4A4AQoQ7UL452LnMQKEmuJfhgPqapygkRiG8wugZd14hM26DQi",
  "key8": "au6BuBbBGw2jJmXpePYK1yFLnGLj7Nn5trGP3Pv3XvLDad2DG5qL6oRpkhwGSq4QD6eTVZGBDCWqbqLZndeUfmL",
  "key9": "2LPe6Zh5gP2H1L6tdZdmyGHBQWVUtcbuPbz7EBjWfnA37onxA8RqAaXQ5e6XdpnQ3bhnDFvWX7t7YYgwvKxfkQVM",
  "key10": "2B6usptkS9jpCBVohiG5nNtaRdU9Mcu125JekSpiLwduDCWDLM9Z8H34taQDQCGXtFTcgHVr3ierHmtKoTzbukyX",
  "key11": "gJZnN8aJpg6Uu6bULhdEgHKGpq7rdugfgV3ZQLX4EFpY3sAD2ZvD1YeD7mY7RPU5iPmyLKbHSvPqK6jP3rukyPc",
  "key12": "s85cRHhDDsAwMTTmH6je5f2r32TCy8rzPungRjFy5GHu9uXyfR3J6GZNDU7YepMbrsE37S4DQWRAgS1Ndc2akgP",
  "key13": "5oQeFTWJhAATecNtNM3HLdBHKBEKnXvQdPDQbYsoVet2JCkoidd9Uce62fx4psKrA8r8HRnNFGRJgrQUjF2kxtGD",
  "key14": "51ciuHc2cmwh1oKESnzgrktjdF9AH766DW8bSWSWY4hX8j77tjPggxBQN1eY6duBrSjirup2ehDtN7PQyZ94vXcJ",
  "key15": "4E6zZPoRCtJKJ4DYtgbtDgLh6jSUBtMfciYy1cesbbTtkqhjtKS582sRUoWZhVuSuJyGF8hR2jSYK4deFWhAZdud",
  "key16": "2LTmrxtVEEn3xjjYHDDBezhVxi6YkqcaQ9oihzTCwVZ1SbhF6zpG9AbLSQCzmnvayDTWGnKqRXvdcLm7MZgovgJX",
  "key17": "5UKeZFs7eWwjDUWMFnppwCCnggW1VyceX1qYzEpZccYSjWTRreqPT33UTvGFkuwLB3pfFXHR5LYi8SnTrA3VkSYC",
  "key18": "642UVw4FnJhSnmwJn5EZxzkKwCjG3V8Hmh3WcY3WWBF3mRB5ysHMSPoCRvMXNCBbjbRzUeEshdrLsQix5AUpkwA4",
  "key19": "4sXeLqR3XHuv3kGSGhUwE2HVeoxerCHUV3QJnJ4V9SxQpQdYgSqb5LRCUFENMeMwzNkj3AJogaZWPuxLYp5yFmBg",
  "key20": "5ZoewRkkCUgQwLtAwgL2UMP2tiAmejC1dNRUBetRngvS5EJ3opwQ4twUfnPcCQYFWxj5g36ieZYjvzAGHNUskJqb",
  "key21": "33HkB8VFJJgrs5ts3CUjge1jdAmgPPjXbgFiQCKBazYacWGuDxywVz5uBZjsKT4Qq6L4DJChD6pxYQRJhokKoUvn",
  "key22": "BpSCGpEYZ4mnxL6ewiq2Tq4vBhbbRxaQXVFTr3acJaJkpREK1eippkC3PupQt3wSNdhCKBGmFajd7gYz7ygnMBs",
  "key23": "3GAZ22fqb8SMaU2vAWS6w6URbpBZ7ikkEt99kBQY5SX1oqXfTe6Sy3KbvW7gHjXGvhS3zvpGKcD4UekxC2nsxoiZ",
  "key24": "Xm14yqebh6SV4jubGJaANGiXYeAKNabAHFjcVKmbe3YPvFbvsqAKv6GWGGz4PSyhBos46XV7FuxThaLNjv4229h",
  "key25": "2kpqt7XnrdPMHAYzhFoKRYjVjeY5cqU2FwwoaMiRFuviWB5ibDMP5JtbkCWsXu8UkghvE2N2Ceb6vgMEe51hyzt4",
  "key26": "5af3HysC5q7zAz3R9x6zxWZ3eQ2gKkq5hXi4hz3pueJi5oiiBNEqyvzhDSc7HCLhsBR6DhZngTHuH96zBfEEp8dp",
  "key27": "rdHJcxWvLuw3CQ5Rt3AeyLZ7AdTt4Amm21oiPeuo5BRJA2CHpgRHtumNZoXBGf53DszuENyN3gX1yJcRr7gpVYL",
  "key28": "4mZHzrhKFZTDksc6V2wLGVsVtVokfdX4aNab9M61xEbkbE517YzBqvPyudYL7Pnc668UntGZ9EAZYYWDDe7dRQDx",
  "key29": "62yu1b6Jfo6JjLjn54S7NMuDy2G7jWhoSHm2cNHFaM6EUMAdR986st9hdtGt4xHCMm8tpg8AaqqswVwPrqJeRFaH",
  "key30": "cr4kefyEa4rJUWgrE8S9t1uCU36w1kb4oEENKjGZpbpm2i4TSzsBp7yMjHCRcNLYrcWtG353W7N61yzq5NL7eHy",
  "key31": "2MzqsBoJFQRYZPyiKJRofWJxUoryjqmKFXx7ue8FcXw3Pze6viURvHU2EYJU7tJTVkNGfeBRx2XDgqpQND1MwrAo",
  "key32": "3Udi2wBF4HCJ7tqRUVxhsvyhG4sCRCMhBNFgSRfSYrZHjpqpNHuNf1uufyw71nBaoGKHrNPUUxgUgcw65Ep9QgN4",
  "key33": "3PxARewnPx1dNrc7i1B2fFogmMMGkm8Vn3YTNgxsSjvaj71Qads2oUpQay8Kbeazt7fC9KPbb4xpdLYqevj8nkAN",
  "key34": "3snkARPdwAJfpKZ7bW67rbZbm6TtWyeGeGyNTe3af475MEkLk5j8YA8wJiHLVtVi6Ty4UL3AdoF9RPH5b3LbbNFd",
  "key35": "2EcoYpZE1BCxPqsb2todabq6sft4sK7DspEuShuiwKd8mVzsDQGf6YJ34ME1XuJmSSMGSnzQLVo28mMYYetfoqxZ",
  "key36": "5kUCHfWh6kkxfESA5S75wjm1f6qvx7i2RXxQVSnWs5wj3wBcyEpdxgizKiVete4vaVXrKM4oQsGEiVVHcJC8ka1w",
  "key37": "4C2ncbSBVGcziPhWVyDVfzYZ119xirAfqtgGxqH8bPJMaBETepzzxHS7vgnUJPh2VvCc7RrwnW2y4T3zXjxShnwF"
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
