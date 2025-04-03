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
    "34KZ3SA6Q7xALh2UuuS8cDGs2DKor4SAhihzZFvjgF48yoFaYzttZuiEtpwGanZ9ynoCpGJjpc9ueUE6LfTkKLh6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FfdNHqtFDUz2fXgSFffrascWwKd8HU1L82ixjRNuDeh7hqZ5zWnAkyQoAKPxa5VMAfRfxFbQzXPqvHrqV5c553C",
  "key1": "29mS9to4VA6uJnwLppBp6BMTnPYa3URujnJfPYatGPoxJ69rsyNiC4uFDM6M1deeBXk8MgMGRW9rbuxYzzK8aakN",
  "key2": "42dSmMXxmqEnM5aH2RNwbwtZaGE3xdfKCoMuBisadHNrHjRaL5hW58m1oXP6CB6Uxvz8w7RfcA21wvVqWPS1xFVb",
  "key3": "3S7ii3YYoNs5ojgFa1mcbK1DqCSwKPfAMQzvECbfp8HEt9aQpLE6yrQYcgKaAxY6Zvkmy5z2WjgoqaMaNteRXMky",
  "key4": "32S4bJC38KXK85FPjZKg4ZH3V8DzXPkoSJE2rgJt4zHaP6zJrzmoy55NJuESbKWXCwHmAkez3aPtiwwvLoT2mC7e",
  "key5": "4ACQFDhYRFTXSSmArukAdocTgKJ3TJnQbnZtynLY2e7RZyDjcDQwSkCDmk3uv5W9LC4kkxLYCoWZMPJJCzLSm7tP",
  "key6": "39gfYCcyBtnuVMTKoehpbMUwp4L2j6RqBNAGTAqY4J5oshtB4kq6Lw2Q7HjHTr2LE8JEYeVhBC1QSSz7eYS5Kt5N",
  "key7": "313Bf3k4eiSrHm4hcCQyfbEbSB8Sgair4qUT8duiPZZWGjYqsMmLd1VjS5og8PxBqaqUXgwsm1TdAKz1hika8xZS",
  "key8": "hZ58hodxVfv6wPprxLmez3b71jxmSGYzGWuxexsU28kwUgVG267SJJuZtnS3ERv7XTBphy5jVrqt9LqkSTBqfqy",
  "key9": "3nMbgBN2UUB5x8P88SkkHhvENPMCrNxzVH6UunPc6D3PjmDU3r4vpdXGWtpUqsYqYQrz9qpB1QcdRbv3di7oDjwa",
  "key10": "Rq3mZZtY1Ug6fTB6zmxmL93dVLZTG6JG9c3AtYzrzYgCxgzEryrb6JJrqC75iPWQspHmkhitrnghtrJLMz1JpbQ",
  "key11": "3cszdQDvGXJQ849XBUSUhEvX2qswpBLQMZfsxVYT1TiCEoVNvxUYGcvLZ6F7ESy9V7FrS5RUN57VS9EJ4KV5vEnR",
  "key12": "3tzcAnZpBqB1hgpbgdjSh1rEMC1upPLHSj21rHuKppFT32Tsn8WJhyjWgFQT5DNHn5qkYEbCBCfyS7si9ZbW6ELA",
  "key13": "4dxGg134k5k3JqPAomuxuFK42gLNjgn6cqQ4sF7dNyPyPYAgdSfR9SMVd8rLmYFHDN3vSeAfdzJCzGJ2XhKVmrzF",
  "key14": "4BvqAzkqNugiJQz3M67dpQmo7BKCT8ARRDuLfYHk6powbG81DMDJ6n97r7a8v2QmdGZsA81y5QPWY2VJp8ssFcbw",
  "key15": "21ic2n2nZ4JgXzq2RE6Y2oXpLBw4DZ2JvUNdFsLGuiBQjBnyanz6oGwBz6CJc5HENgCoKpUU2zSa7ai9wbW61eUL",
  "key16": "2X7TAMwrdBdwgYv4cNJw33PRxBfZ49tXm8eZTYjWBPSi2oyraamUFLtGABavqJV85sd6kc5iThagbb34Yx1RbpsD",
  "key17": "4hP34zutYwBXo3CZ7DX2ugyhjYyMzRqKE8uK8FsnWjT9qqXZdocH7eSMTPfZKbpjXDRmTwMryQ8xVXVPhyu2jzKU",
  "key18": "HNnGzMrMDyg2kVi7FkV5xcb4QnUXKSZ3hwQhAC9Fwsok19afxvszhj6jhhaX9uxeWKMpqEY4ppM6wmyVxbWvf19",
  "key19": "5U1MYqU8NSSUaCno6SDMGgKAN5gaRv6LoY5ZznZxehrdrS4L2wsLXAWvo16YWMJkwaEkb1pPQ7LsCPszyZJ7Rhe",
  "key20": "4FnpN5VjxmbQDYZAQPXRmsJUD9MkScumBfUN78mHvp89yu7nRmhCjjNrEvMudqqUDhTL1VVKYZKA5Gf1ZV2WuJTa",
  "key21": "4CTf676uqjK8B2EjNGe5a9hoEs7WaHdHBygSe3u1z5i5Z5zHJAnkMWvR8qUa7DZwHfg83zxc2HEP8VG5X72mKT79",
  "key22": "ifWh3QUoVay1FgR8QShLFkJTGp4omDzGptN5uuHbUGkpMrfvhhaQZr8ANTggEdhXePqtoRSgQFN4eGFHWgpdxqs",
  "key23": "4jhPVovMekoAYQMbT6ftz3yQcJBHg3guPoKYkroNoDmgAzAKunPjtXScj6Y2GxsW7oeqWw6seQYfHERB7xdb46Vs",
  "key24": "5r2qFCvxFY1CNiVnTRx2BQMvUkfL5aPQ6FbnTprAUcp34DKoM6oisdhgbpVmicNqMRpgUSdZCKK7aEuHkDXS5jXw",
  "key25": "5p1KZVPQxdL3yBJqCjTZrMtE2KRzNnMvMPEL5GBHFJHwjEYZeBgnrGaTLKLcQmVYyUNZEgJRvCu61MXuMrUavd2U",
  "key26": "4QY7ZzwxwKT65kMssdZJ2sT6qqaV69zNbmdgLP6xajDVeZ8YdLLKRGPqr9wXqoT41vY4MXevAfwFv1DbG2dEeiqD",
  "key27": "55eTuQVV5ifrHqS198fv8P44LmBFvwXWZxCiFkTGuDAkQmD4vJSz5gWwNkSQWM3EwNXXTWiZP7VUMswebLL129UM",
  "key28": "p7TbrutRiST44V8PJFNfCBD1Vpb5FAwDVNp6oeyCG4bxKDDgwLSWLZwDVy7zLNNmz6pTMt1q5MNPWHy4pqKDm8n",
  "key29": "2da56F47ZKUqsmUaggbzEEWGTCfD2a74HWmFLhstAJaJK1jj1x83fsMH4xWiPRjS1DMaaD7n78ByvoHcGHB3m9sG",
  "key30": "opdt54KyNJpRRmewQZps7K2B9Ea1P1URGuifeYQndfiJ9qG2sATgFLif44CAsLiMRxCEqiug1ai4szwbdPi35ov",
  "key31": "38YnAZgYoVnoNVQZThQ17Pri7Ynv2vDSxQsnEgrTvXJN1MRgxCxMFsyfxoBKQiNS2Arntrs48mMamxFmrC98SAxc",
  "key32": "s41e1gVBySxUzJJhGK8S536PoxWrHPCsBwPEPjm2HTzHRTqa6YyZEfCq8rFaGTvucU4M7mQEA9ZYKHJEmEMfByQ",
  "key33": "3tvBbRuB1ntjeTnVDdf6ZeT2GZxb6fxGcmExEn4himWnKU2217n7ZLfmdHwYDVncLupmV8hxeLhDBS4k1tZA7Yyo",
  "key34": "4Tk7Mn26CPKieRnYtVQYCJqWEcVuzE6SNj4NARYrdrt877rubRm1c2R17cqQBBBrTVxvKpEnzb5ShaqzRnKwwpjp",
  "key35": "5tJmBhdsnZLAXgUEdw1KrH9vv1z8WqtFf2J3s6eoerWMJAkNrt4MTSHcvCYk7sMVn4RdAa5vTzQjfCChvzzqKgkB",
  "key36": "5iB3j7v7uDyfuicuqGZ84iTfoci9LxTGZX6j9ReuaYQKurPjSvPaSSn241qPWRGzKj3xSVWpqihLqZmJMLeCmrdj",
  "key37": "RgjAk3qK39pdMsNmKb3kaAbwb2asBUs1qNU4AEptMsHRatUx6NTJTY6ERywkQmoNyGN67K4FgPsM5VhZM5ji9FA",
  "key38": "21BHr3a8bpazjWwd2praktpTvfyCmBf5F3g4kTac1MNYXLQWXPM1yHUAC75ZeMDiHZQc3YWfe2R8KyGyZa589Eay",
  "key39": "5RFZz85W3n8hgdMXVqz8ffSvSk2FEJLoWy5jRj6hJStQffmsqkuhSDepPnLRGFptsF6X43pRaFdNr8BrDMcVjEgt",
  "key40": "3BpVb5PGYAE7CNAdCDoDjENsmAH9xU9gPrYxPPcJLFitYgXxRB8ewGR6ZFm2Wgt6FyTPEWAw4aXkSgW3dtGmqpqN",
  "key41": "4w4v3SEwFBg2NbRizmoxSdzrMPFQiHR8ifshH4ffjpaqLiFcjM7RLkrGtYecYTBQRuRhSD6Hb4LLqghYPXePMJms",
  "key42": "4Bw2RdGD5UaaTaFxANc9rY5zDmQ6wdkPRurLhrTURaQRJVmsrFQG9L6RFUqGfXWRHXZELSVEUbXpvgExyPbqawV2",
  "key43": "4Vbz2ZZFxJRaJ89XzLmKCUMoe1ArHeSrxaf6vufbNHNgaabEHqxznhenjhNkfrpiYJFXebkvVoVN59pwNPC8EKHE",
  "key44": "46Xth984JSCnX4mic7He9Fj3ngX4qcT68nYhUJBqrKr7LWDmGcpL9C4hD1JXjNQ9T8q9VkcqLED8bS2NK4Xc4RCg",
  "key45": "2DQjjz7DRtYXR16wDxKxuHsfhb8iFJmCrtaZUha8uzGVf4rVNBfTwueG3VzAdpQNe8RezVuKbhJ6fBXK8pwZ2uYw",
  "key46": "2uxMvsi7U3QvgaK5XKw8oYwEcx6KBKghN5srh9rhHV1MctJ4nhzBsymoz1FZ238jckWxxwNucguN2YcAEAuL2XVW",
  "key47": "2NLs4hCgwdvikV3gde9oNY8sxiX5LAnQEYWdsJjxn6NTftsKL8kxMSzMrLGv9yRGrrFvGsWh4zr3oJsLUckRPV29",
  "key48": "35JUKuACk8HkvNdoYGmw8KwXa6QdZbqRJ55JXoH67Z79UBqvjiRg4Ngr2Ujimj9qL1s6Q9FsAoGQPU75haxqdsZH",
  "key49": "2rAQXAugJ5mGCEVbab5Fq6B1eENqcXwB829Ah7ftb7c5p1uoC3xjHBmZkN8RDWncuNc1jmuESD7vcBWfkVwkYqJG"
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
