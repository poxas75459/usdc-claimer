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
    "3jcsF5uguwVoJXHz4W81gosfGYCoBpEr4yUGKwaZJKLmXvjCUc7Yc1vq6BbemvboKMBnGahXFZYbeDoAvLauvSzz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cLAsjoPHi43xRwh1vRYrZAxCQqzy5mcvsENmD3nYnZTzz4vSTuFbPhjmTeSqPe1Ua57L994X4ajie5XyfgRNhFd",
  "key1": "4EfF6bCM2fSAdTKYATyRhscAALofwHDMeMYUEw76mS4PPW8u8M7QNErf3JDFf5TZGA2gdYRteX4Q7gbtZou5rVYu",
  "key2": "59mQLbHY2a4b7by4MgTAQVVKimJ2KKZeaBeoCB665JsLEg1UQfGtmvbQDfiRvS6ACaFnXMeSGHtLBHvSE9hLsU1X",
  "key3": "Pf3uVBEUi972VGbxZAtzhNP1yBsRh8g8LAoxeyMjhEZoXKYKVB3cnyT5b4p5wY598RpWkYwFMNE3xq1q3Ws226k",
  "key4": "25zYqEZD2wipisY2suBi3y4Zad7SYj9atwPPHALZLj9u68KPmNav3m5BVkrUiPxn2SAAHgCRU2nzK1WjppGV63q9",
  "key5": "37Pw5oFZYUzhz7y7FNtCudarncbNYRAmuoQf4rHV9RQAZDCJ2AEZvpM6gSV3HVJ5r6yQXsET4ZaSn6MXkx7dzUvC",
  "key6": "4ZnUHdRptAREs4uwyqaAyZFYGH1rmui5TtF1Y1zTFVAJdpyJyavz997tTvy4QgT7KhPdUXwBJT6qftCwJkPTkwxw",
  "key7": "3SZGh5sob38iDqrZxhm8suxszGX3tV1RRAZekPwaXVBDAhX9QbqpY94oJn7suctSG2A1xzF7zH5xWtdJLgBFH7pk",
  "key8": "41UQgNyJihyGkSYtV4iX7GUd34KN2obz7db6JyUpwX5x8T92DLAHCFUGrWogN6kd61QDtkmgh4kxD9pfaTf3cDnn",
  "key9": "4bdpcjFPbjumW3p4Wv9DLjJ4tqeGwzdU6H5nfwP8FBBgETf2Swx5VFzBHWp8BtPkNG47PapdFxFYXjpnJSHXRZJ5",
  "key10": "3fBtnwBJtqi7jZqRzfHx9Q4ntV8yymj47z9AzkcbFA1dg5tzt5SoAm9Jc414722GAN13wFHR4JsicdoBbwN763EA",
  "key11": "23VfyYezrci5QWbHfa99XcHyM1Tn5XxPmTJSLsXpBYcRZMMHiYHhRTqWR3cUK15bvtQXTGVonuhjynC18ajGUjmc",
  "key12": "2jYfKTPqNnPKtKVpG8fyCktsVAZhQSnJggZzqxbndmZtHTBCZqFpEaDFeYmFAfkbNFXXeQ5kTByF3dD3k5jAKa32",
  "key13": "bvpUCa6Gru6RhZeevhNJiyVZsEA8G9Qb96YSrnzVptETdoGoEdHNo96ikjRd48Su33HXS6R3xf3hc4aF8ionNfc",
  "key14": "475dvaKP3DKQ3waAajYtRTS9Mcxhi1mvEUskzgu4b3u1yDJ72QUtPCmLNWcrvkErbgpFia785J5Hv1k2oVPZhxx3",
  "key15": "2jLaTkYSs1b3dbxy3wCAVimAwCHLPEnAhXtsZbnE6JQ1pA44pNsci7uGSfEbeVV7SiyGYNcRtPTttFPotMXmmZiY",
  "key16": "5EKfCCdx4PEFi6jfh8Eg7YBEisst4wXN35nsAmmfAMwXhbqc2HF6ogXAVtqDNEaDmkH3tu5KtXUoZdw2dLZ2dsAj",
  "key17": "5qH71Uk7R3jPuEeVArhzEYSmbMtis4qUDkvYhvZx8KNATmSbbbrMN7b7fDrsUogaLfkLszq4ApgV6zPUfNJH4bwx",
  "key18": "4qyc5fokJnjqoSEcqF9J8zJEHjrR3CSGpjVPvieHHCUwp6H6U39kMhpUAvsy2VPLE4vyzJWRKL5TznXA8FGwmLvM",
  "key19": "4GSckoTKSVgbaguJXoJB7FGdbVaD1aWan38bCeZzNXRQj5bHDgw3H8Z2wzZMtBriMzqBm113D8V9RKFhzr7PxVw",
  "key20": "2QPg7TZyHerbuWvQzBjR81DHNGKgDb45RqMBpgQTw6hnWeaSBoTnS1JcHdkgv6UTi6Qj7FMSwuTPERJUDo46whaN",
  "key21": "5ufPhrfX7MKrX1dX5rr35241b68E5yRe6SneHSgu7ATXLxgL6gRFmBMfYfx5RwWXuTdQj5xw2p7b97FSAUVgPtEd",
  "key22": "z94visMr9RXvK5rteZ3TVYBz1HvPHm6XZv1f5suDubfF7ZeaqAt7T6S6FeFLjZZfTJ8yVNaLuebvaSRivft3wN6",
  "key23": "dfMAofjX4ukuM2tMZTh4iUWyAJXtzHppaW36T1uUjGGR6RatBCzb6gFTjaFSqYLzYQTpyufhZhkGcdQuAwiyc7W",
  "key24": "4gJEwesyUsBbPnQa3YrhtxSfyNUZLkUCN8uptuzCxbgL8wLXv8hDU1ypjL5Q8wPFR7atZdCaykh9QtJQonFYtimz",
  "key25": "qw4ziwqSd2Brviu9NvKVGzJadi3bpDxYbmtQWVTHdScv776JCsFUqEFznJX8i3s4Q8M6sw4SdwPjqfvzdKUcd9N",
  "key26": "3jLzC58FaQhbFgnvt26YHWYs8u5nMLokEarN2m4mtPnGNosFwwSDejLziKKHNNf2EXsDr9EP5coU9fgJf9nQXVnr",
  "key27": "3uJyf5wKoa9ySsV2LTEgXPCqHRbJU9uPB8h2YhUk1LgxoMctXtQohb2vk2hXPE1cmudtuYdiFueXZHN9epeugujX",
  "key28": "521hqoxjaysS8j7J5Ah1Cn6kps7dnodQktmx1Ki2A2Y2fm6t5j1nnYutTAmMjXpMDyfUBxzcKg6vtE3tjYZE6cgY",
  "key29": "4Mjk9Emnd6croVpLkKPxDzcckdw8fTLz55k46DXYEumocMdBcUJ1qwqtCpLN29xoahZifEcfVWEhSQVv6AVvAovC",
  "key30": "CM61vwobDv9GvLM6HCL68dEQVvgLbKWoZqmwVKndhHNrXTZDaWLVjS9f44JkPbgh3M7FJMt43HFipa8wRsGGrAM",
  "key31": "5mYGS3Ld9Ep4KUfsaASohmftwatHQ8VCpfCAo5SoWcdryiTcb8nBq5EPcR8eMe49ynLyogM8z18y433QMmjMR64d",
  "key32": "5PcYEHpzZKgKrUdHNBW4DFwkmMB1YtiBDJcCMbpUL3xGrAUmXfMmaPz14FZRpq99txKWXUGormBQY9VsaTuavaiR",
  "key33": "3zbDYQj2xBSk7NZYFAAsEKXJVTHW4UR9zUnSN5GkFEPbBP4G9hEnQeBA8k6C5i4F98yLVbzehVrFEkzBfZhgt7pZ",
  "key34": "4p5kUURYJA39HAU5bfd1cjSBKney4v9Aa5ULnqQVYbgLr6XE99tDJ4nFpUqfWSNQRiCoq1axENVfvGQShG39TpQV",
  "key35": "3X2VeQGSBNtqpzKkGJ2VcdFFbUtgT2tEfRc4juKwbg2VX2fyjQVrsAsBXJAYtpMuAybPV89ZJesT2L8H5Li9Dddz",
  "key36": "2WBiAvGVBxo2iUcPdD33AnZvn8dQXT8dsr5sVUX2UsQFWCc2LZzPGVowAWUBj68oueijRdfLem2FzEsx4SpHbp2r",
  "key37": "4vtVCrZrWZjEW3Z2ozxq2uiB8WdcHdgqaRBDimU7mgyyNvVKV1FC88hgsPxKQhtjGJzPjEEMdxN2iq1NLmnGM9PR"
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
