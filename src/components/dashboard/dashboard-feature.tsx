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
    "2oyuzrpKU6NAbXaQEwz5Tpeg21mMT5uEFWutLHnrmsMEUrgvBXN8kFtzPbAkXUBy2AAVDk7ep7bGx6Qp2F7r5N9j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DMpezrWnMXdvVkyUtaD67qHTukJR3iCyvNb1c2pJwsU9gmBrcDmtvSCHCydLUeNzdTdjBgMZbEiKmSNeX8AubXy",
  "key1": "g2zWZTo62qP4D33DTFARQkfRCTbYyhmueeR5uQkP2itkJ2n92zED9yhptBwEFbvN8nkiJ8EmYjY9oSVWuiG1rcC",
  "key2": "58dCU2S8ugrvpbH4ExKB2oyistjf2oWDaoLiMAFV77r7AVq6y5gZoXJaexTrXKeWXvkCoanrPWxMpzgBFAKDFtDk",
  "key3": "67P9QdR4gQ2WCJaG1Hemmr6WciSnRZXJXLdNJLesiNjf5j2KjLojumd6CjVjAi7tjwP9gucskunsKcXyUN84Y2ag",
  "key4": "5hp15Qj3oX3Hba1kgtpyab4BEyoDM43XQ2oWN6KFo3paN4xgZLq8vkrMzo5K64y2vo7Ks9BVbsS71k8ijZaeJpz1",
  "key5": "faKf1cjz5YhEBiDDBczjwnCywgNkHB1PdCgTutB7R3SCaHNH7oq49X739cZVhcL8m11YGXCgbJ4WYju3z4NkMtL",
  "key6": "3NjTy4Lrq5D1cFGo18nEsGePusULKCPotz4xWi6MCYRwPcCAD4P63ReCmK9z8oi75DXwRCiFLXqaNsnLeke8ooaN",
  "key7": "4zTSt65BWJ55ojJCuSxtr1A3x3Q4nNqUSLDtFosVTRr7mqvFSstG6XEUPZRqS7NoP6VaCB7mY2BWtK3aQpAXkZoM",
  "key8": "MyyRScmApkohuSwz9tQQqCKPdK9k1WdzrjesuugUGBYeYqQ4XLq9R5mJo8sHeGdp7yyPddn6h1y4MvbPwmrFLrE",
  "key9": "2vJJP87C8FN783xtfa5PEpNfz2NbZP9tjxw8iRz6NjWZvaJkswQswyoWNFyLVyD5v7LSsxZz5NEtiQKjEviVYkM5",
  "key10": "2YTsVsLfRnYYyARwDhr1RzAzb5QRgjM9STTEzWERR8UhKyDipVDeGnmLd8Q1WXivCzbjnR5925BeNsvEG2bky4hB",
  "key11": "4cNG6Tc6TUQkKP9D4RaD6UE6E5cJWAvJed5WkQTnq4fD3QG7TDPBQnxHgFmFVDxes5sDdkHnSBVDYrLfwMXqCo3C",
  "key12": "a48mfmRgsLYMBEQpW5WTTWYJYFa9pZ66REkAGTyf5AVtiaNsGFgsro5kUVfM6eJRbgXATL9fxr23JcqrUR396Nz",
  "key13": "Ppf3TDT7BQLrJadPMYaG37EQbHgdLTkcAizvPhtGSr3TUPY2gAkGQ1dZXnzEfYKSAxs8xMhgh5BEtnCRm8cqaCo",
  "key14": "25tbuqFtjmtuSgAuFd4uyKiy6gx47VBdAfGiEM9KPrDG4G3s7egnX1uSuceHDbgjyCG27xhtb5z7rjdD9wh4kVDY",
  "key15": "4Wv3vMAq62ZJh2RCgFAhCHoXm6P5c5ete2ssB8juG85GvL1KaLMUK1h4D32WtRYeXwk8pzAuyzH8rC13pX6rbBQU",
  "key16": "5yJgw8ZbqHUvEptSkyz4YJLoT8bmzxfqJsKkjYhBhKm7STwgRuVfp1ckzznNky2pQSXnPC7VHme53U4MzrE2KEow",
  "key17": "5o3V64SyigNTC5ji29RaUrjAfze4k61YoUo7WjUuM2AWMox8B1RHyvNgo3bS8XY7LexFU1aja5ecJHpqWeMKufEf",
  "key18": "5yosyPRFMZp9pmNEHEdgMAZGPfvVYiZWwYNAxEQocyXCnxknApbFaRAicBXJE37S3R1jXdbUZ9VQpUQ74RUsv5bN",
  "key19": "5TsQoyw8oGSHUxM3ZeDz3aqSRnbrbY1xAzeo8KyxdttJH6JNmh9rm89ceJoHsqeLSwiTTvJzEWmFREKoDnpZZU2K",
  "key20": "3MfLRZKYN3m4qR536Js5EKfEggmLWoiM1uLPhgu7Shr6zTvRgpxWLtGWxEbCA4VPzVmcjgqxXAZ3aMZtxJ6kwV1W",
  "key21": "3u548tPpJH7uENH9DFWEXNHZefTECvh3MV1BZbbXcGHwYsyDZdtPsdoZgHcvw5xZqbD9oHzH6aMyWBAHNXjhhkEE",
  "key22": "3A5Mw3PmtWfX8jUDNgyHBerrC8PCvCZPfiyR9J49UU6iU9oz6KYqDtVo2JCD2MSh5TuXXfxVeKsbZF9qocpns3Kg",
  "key23": "5KR1LG5FJgJkovzaKmu7x9WydcVyuZHCdYPq7MdoezMv6cztPQhAYBZLSyhtcoHTrneMpLtezo7uJDrc2YzBZH21",
  "key24": "3tQcHLYgLo2PCj9yUQFrdL9LsVTs8rHK8NFgpjnMo9vPU1ZahRvH8p98fpnNxh1gRtTrwEAMsMt1tc5ehnNFBfGt",
  "key25": "3EWAadrXxUm6pYdVeYErrK48RqporcTCgWemkU7gwEgoFXr8ozHsMFNo195W83wRU9nhqPyTq99prtfJJBCEpjp5",
  "key26": "3YMRj23P7D9SDhJi2KGpibcSEj3yW5vs4dvGPzazqhgepsDSnRis4jxd28BgwYF3WwqBogbb4wKh3v1U3KvuRcNU",
  "key27": "2zWfi5dF6WdWBLVf4BcVGbXKzYoJRQ9zPn3c3A2jHm6uB6Tx2xUsdZzuDutzCUPUZjgE1GU9dP7rnW91R54xWWeV",
  "key28": "5SFQNxWbJfvgtHHMYe7Pzn8457nvmsDzLSEq9kcVBZSG5CEKCzqTrbBmiLmRiAn9if3wEGrLp2kuC8A3HDoav4jK",
  "key29": "4zavrcJMpMyzAC1YMoS3GCoWGm8GvCLt7YwpMExomQLAHWEA8QB1xBFPYfBbe3ovivCF1k3jKh48hwNCjo1NRaa4",
  "key30": "3PbqyBSTtPyPbJABLoQzEhDqytRkwCcRW31fvm7o7DynfGpy18Ajr82mGL4GhbccZWsVWvi3FsnnhE2pToFnfTJQ",
  "key31": "4n7cFnKgACdj2TB5MdyyHmCYXsUzpFbzvbQkHkErkw1erYYSaBu3tiMqF9nkys5TDrKRgckJhV29EPJ75qkeY4vF",
  "key32": "TE5iAXgbEpdE3yvrAuWeHusGQRmid2xJq4kt3LeinzrM8roWJ8xLzZGBDLq1S5D7FDbaZbGmzSqYQEhPEuVnyhV",
  "key33": "51kfVDG478AMpp1ziGr7QD7sAsYJPAxfeo562GkyBnhsrzvccpPpkWdP9ij5dik1sfR2L2rXMhd4Hhtjvi8HdDSV",
  "key34": "24zyAZ4GP4SXSDjeEQjHUxG8YuFciyzTEeWXWTZoxdqghk3VK2kSv7HrcyNApxdAw11MGbeBostEHn9K4PbjJ9P2",
  "key35": "25uK1488D8MGiBugEAbUr7wbER3zC6f2Q1kCLndfEMTnYSpjrnjnxdPwrGj2V9vefGfz1HRgF2QmAAF3AQPcB66z",
  "key36": "34Tgerdhizor6GY8vPACAiSDwE3GUS5mCyiW5bKMr5qYTySr8EovLZYaAUdaDG8nd5Chh7US3PrXtqZReqhm4aXr",
  "key37": "5F2tU17TpzyadRHXBRHqXg8TWUxamMjnKvjZgmP9Rau5UsTsGB3qrvY2iiMFHaYUyxXvTmuvyczBNYuhhvt63g6X",
  "key38": "383g9ZxRxAFJoMHbJoaocd9mxQtDRxHv8HXT1BbLyGdAZNh6w29v8So9qoZ24Ykj4wnNb2e57U8MrKFBifY4adwW",
  "key39": "2pVqpwDZwxhrpdXqFRDC6U9VVKggRYXCSSinDqNMFj6L6duqCWFQkyG4s4dgQgKxnwqmad1YxbRsxQhKKepUurYb",
  "key40": "PUtC157h3H3MD2eikdQn18VTDY84S1wczCFtLJVDpf43YawZW7sdzKBqyv2x4JKo5TZ23REKaGiVm7fTtCxCnD9",
  "key41": "4zVXaNpZ91RVgA8pFJuXcA11UJLsTb3MSwq6JbBQYUKHnvGCeRJKvxkfb31rJhzbjCbU19aHe5NQ5DCqLzH6MGF3",
  "key42": "edic5nUSWe2CL7C7aSSPqAQu1iJyTguQBxp9tNvJZkPwpYdwhszbKiQtdqY2dVvpvqvfwgkSFtLPyjmDeRvKfyP",
  "key43": "5cuz4jurVYzLmeHKhuyShqsQQ2YgHuUjsT5NguBU9TWyhimsbryquNRUZdtPhhUkaRbLWmQHNZfKhFQXg8XbgU6R",
  "key44": "5uhwfBe9Kh1vZrUiQTwBooxVTFQ7FM5VQSDavwp6Bv58Ygax451DqPtcxUYWo6yEnasZv3KLAkrSpHWJ2kVdDxaG",
  "key45": "5AaDeQqeVyXELoU9EwRzQfrKkEVz1XZzsQ2CLJkk8t6stqTTKT88GJAxnGbwfVVBDEprkyUbJtN5Ff5enS4v74YW",
  "key46": "5LEq46ZkZ6KfqaxUsE5vEWJi9fMBTV9HtMRCDX6oijnftH3Zfq7X9y4Uenf8B4QqtkL2xufgJbwFFYwamKQYH2SU",
  "key47": "upEb4XxeGLGJ2GmJGVQ6WCK24echbWx4FgSQi39sShhHmBXGeK7EpuihXKswLQSp3EtD8t1zLULf4aAvErUhVHG",
  "key48": "1Dg4EJ3omzuS63Eezs5iH64jrekzMcyigv1Vrp6Dg61C2KyPR25gQLXwAcSiAX9AAvtJ2foSPfgniKcPsrMAre4",
  "key49": "2cVLW3vHmE1vStFEEetDtmJrjRrxNBfhHB7peX7PJQNWiKjuGsRsC7PcSy4EhNiuuMfoVJz2ovbEMEHb1NwdCcH8"
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
