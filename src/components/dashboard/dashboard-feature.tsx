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
    "3YsNryTvSRwnxFRz3AVtKigMVsE2APJme9gGQd4oVm9HBpZRFpNBUd6qrMWKSBfp5PrhRfWSSMzDi6AMdM5u1zDy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55Q54UKdyeHwBxHR9k3QMqLrw5jyA8tZkMcF9WguWhcoyePgJxtrWoXDNpqUkgKHszk6NNL2cetiSC4XHZapZyT4",
  "key1": "okiB9tjwjRVT2gH5zbGsxwn9tKrhdJ4gk4CnfXmu1v7vdUdofK5eL1Yv2GqfbEippgnRLMpVnU6VgazmjKJCg9i",
  "key2": "2c3iZzEezGpW9rVmTJgkydDjz6ffNWLpGzBS4Prqz4ac1dfovVj8Fmu2xgMASWgVMnSCHCZwE3X1iyv29AF8sLFF",
  "key3": "4jjKirPo6ZPjr231F3B6zMcm5UWwbUdrUZdM4V7b5HvpqRvzwKM2K3CUJFMgF8asSuUTQ6SfahiK8L9Xw2SqFspD",
  "key4": "2DRRExbWS7gg2Njq3Hhx8tN8ADe2cZLCFsuQbojK9jRmcasGAbZwFcXrJxEWJy7d9BZ4HvtZTTyShrmjXhHXeKFx",
  "key5": "26giVnFmBose63zcVgP2bUaW4Ebd9AbXPjvUYkGniGPkcfqtrBYzcepBcsXeqjWMhc6UY9iPE72HAebDMdFatZfY",
  "key6": "5wCrrBMakzTmS5N6gxeEnCAXBKF1XvaDDrzLU3D4kn1aibKCgQAxvFDR9hK7HcNqy8hHFMJ8MN6XyVbaMpWKcNmr",
  "key7": "4ZpsCVUEQgpTKSB16oJhhtES7PGKSGPnzrYXSq3iKW2dRDtHScHS2m3rJW8phKK4KwHUvVkdBCnswgK4uhdS3m2S",
  "key8": "2zNFiH2AQKeyHqgem3Ydzwu9tjACckX2mPnBMCXH9BoH249vHNVmR5D9CuwaupY2hGEFaJaEA55WghqvqGZzxARk",
  "key9": "32t1RLXC5jYzuPy1Hc6RhwNfdctK1cpf5JqF1pBKnWGHWbMCkdvnn4h7buDs7qyzQZnrdySQYsHdw7u1NZeqwb2o",
  "key10": "6467C6Bw29xV5De4toV5UzzprJnZdN9UdTD7jTKZ4K7ZTQLGk5ievCTCxiRdqbvPEcRo2fkbSb6QZWWWqzEhr8zv",
  "key11": "ur8eBAjDGT9dvgRDWhDn6YYUKnDRAoNgLa4m24gpNjEtMgznR6z5wZUavZ8N7wCkhjdk5KH8jHLorf8Q3VyRz5H",
  "key12": "G6RLZT6e56xqjW8TdUa7gjmmSPKqBRiZmUUdPNFbvECGHEMsnDCetvc5tc9jREf15o3zf84QyHeHGHcqwPoi58Q",
  "key13": "RD5c44fWibfNjiX1PQ91nsupamgbosyka8F7XuYQa5cAsvmSzmH75r78dTf23XSfpA1HWJfWsWrvea7nRAqSkzD",
  "key14": "3fnJ6eYjekPL41P1zbXAztQfnJsYbS4fpiveva8BFNUAWZsjdbEGihwZc6ViWSLXVuEo5R7ogDRaKkDkh8B1HCFU",
  "key15": "31BE5QTbAMAA5dLo4BaqRmyTZ2qdjL6ZP5ouUgaJypzkvzNUCNVLMTMq6KNZrFeXcY1rdNUzxTmUq39VDNFzhZ8k",
  "key16": "4s9qhsMSpVtAFpgw2nhtgeyPMi577GjR3GD3ToGT7sEEZKXqeAaMGyJ24vJsp65WUj7vWaamGH68EW21eg54MJZK",
  "key17": "24GwyRVFx3Biy9HayGEutBGRC1viNTD5nnFvUj3sabWNcEeBwpVSvZSv3SKTaZAS78JFV3sQ5vDHeqcARVAZ1jc9",
  "key18": "3DC4WHnooJekUhR2fR13sve85AoUrshebW9CZXaYr3JsjZG1U8u4VnVvXvZ3ZgQqMAdM38ptPSzVaMSJdcLcr9AE",
  "key19": "4T2ZMdCXBju5VRVgtRy1UAKmvgXppmAMWiqEN8UPAGfH9tKFX1HBgx3P3znGaNz8QkGZqgoVSg13ZN2uoPTGh1u4",
  "key20": "3neCp5Lno4vqM2TZJRJiwyuiQony3VHTsxY4zD6c5dMVEPe9kNJvNSzouFHxCgzsqZFYYRK4NrzSX6v7fphKDyLA",
  "key21": "5jh1SW1GamyxvVJxhENHEMV4bcjm1r2NxPdVjp6aLaRMdHfaWHwmetVX4kwMwSsCu1TSHA5rAbB2JfxBqv2nfmS6",
  "key22": "5J9BNrZ6ZKmQj2MHGZtmmJgHnUWb6jE3ijhgdRZfRmkduZpnmXKgKNRA86DRKXZKykQbjs1RJ1YcigYKzuAo95H7",
  "key23": "62UzaG7iqdbyF5NdbVKXtuW5RunmzL6gZPQ1mMg25Mqx5wjxYdbDrPpHneeE5xizxVXWuitmH3yZQoyHh8Tf7Agy",
  "key24": "2rcFHWP8oqcvKFkmj231REfdEgMkMWSuAckJiLyHYrhsR8ttxinqxpWcwUganATDKtMsj9e9LCmCa96gY9zvjuxk",
  "key25": "5Bv3N1Px3PEt9wNauYP1We99YnMR4GWugtw9fsjJw7FfZfr5tG8LifJR2xNsmLfz5rjwG52mv43inaf2rXTMMirY",
  "key26": "217jKfibZVDhx8NKasvYEJK8VEFWxn7jfJRJExq248f2tpf3no3RFSkAaGgpXG9ohGCzEKBBt1zyqoNgqJuFid3n",
  "key27": "2U1AXgbLd1Dmn43Rs5WiB8vx743kQVQqhrBVnKd5D64tZX1Cq5dRs9KhiJuWc7qBdHxX2XJKyD4PcTse5NeuiRYC",
  "key28": "5qy2fNe57yWMMoRDAz7k5Z5FAAjSwQqQPCkFibKvYiP6Cz9YAjKKqNNcG3SJccgzh5Z7kVTXJZKkSACLYg74vpYe",
  "key29": "5AP3NqjcToTx3JfR8y7hfMev4mZg6yXTxJD4NneWatba1XX5qL23GjqpWAw6zuStDJrwN3S4P7d5Ya4J9Ld43eLA",
  "key30": "Cy3ES832ihdb6GTimU2p6mvBN6APRhEqqUGmzYfGju56hB6UUw3s6sSqtZY7qD7ovEYQ39ymBZNxwVtTkX5ck1a",
  "key31": "yxHmbRtKaJUwUNiKWSP4E11Uf1w4acPbdeciot57HbNDYhZn2WCxpRapgoBJZnbPak4m6dorkjwvz6eboMRyq8H",
  "key32": "4zegnAdjm9RdLjsN4n72X4uofJUbTcXXkT3b4UXLrKq8A5PW4WaKNGbggvVE44doAA3BCHvPLfRUivjRYhyfUiUA",
  "key33": "2o7EmJNXi9PrGGzwWxByo3ReCcjhvWxS9UiL9XMXomZGpqXookBVNRkpjTD32hrnp7UYJpaUXZLnU9TE5h8ewBqD",
  "key34": "PmL6r5Aat6B49wnnpyXEfuRD89NBvh38xgoWwUzpeXNDFgo3wXsNiVhg1LeviTRMxYipJgeK5i9HfX8ru5pcqDD",
  "key35": "2Y6Epvuri6x8Raxi3BTpi8d9z2iwVpEa51mn1DstKPNYnTkN9C4NXSt9xHsSaTyDsMTnEHmxkndqLxgdWQV8iszx",
  "key36": "3L9tG93v5odw5sinvL7928Vq2UZdFt8B3sJ9BtMM8nujvDtoYxaYeaviztWSxU6uTAdWDpz1LTpZU5DimphHVcLo",
  "key37": "2qnHx5GeYMChJNF5UoiDh8fqvg9Me4PGhNA1ovXEYrovmuGFwqYhthgQdkrzTdXcQJHizXYmwbex1EMfZXN91C22",
  "key38": "5pRyDfdMgDyaEhh6qLeqCUaty1j4FsKfEToKQ5gTWz8GHgWrNPgwW8dCsSWvQbn1nrvBSEW9yHaPo8AFNcthi8Zq",
  "key39": "5LSFw5YYyG2EQj7DsNf6xsBjdAM4JmJGCcinnAdHcbK9jpypjNTyLDx1bpDyLsigGp8LsZBA6xrB9LjMYFRgyvgd",
  "key40": "4G7nyY354NRUm2vpPo9KMJA8pHTdEbFG8SaehjtzTWVxipwd4wMZmS1zLvRNXExCEc8zSX3MUBhLaY5vXjn6BxCE",
  "key41": "2CgVPq5XgnbDf9h8dhNzHebBYnezesbuEb7ibZXEzBdxfyPvZMcGdnw6nwQeSRWZUPWFPgbY8CmmnVKmUxwiTQeG",
  "key42": "24qy9V4qGjq3ivTpEorzFcuHG5TRTsGzybcp61KNaVDVaQVWfep7QoKhDc55QLvD6F2CzfCfscUhZ55FSKozgase",
  "key43": "4uZ52nBUj5t4UHbyTrXFT2NRe15uZgFxXavWxFqv9kf3vgk7yMFUfspv7p743s8ryewNoftUz2quxCcYux7WbukA",
  "key44": "3TRyKYLvi48HKpG2nr7jrUQoFBg5qsRUnEfVHfMepP1LuH5UVmhaJiahzerBnCvtjWWT2keEeoV9cwYZABoTDzFu",
  "key45": "gCvpEyG9zD5MUTuze9FiyprUTmQdGmjW1LPPX7pZvGjWfVz7mfrB5ZmpkTAL1L5YEpqLJcQs9RD93veJkXiCvUW",
  "key46": "mMssk2Zcxg7vtaDJw1pmmALVqFZNskCFnWb4pCLDVZFF6zgjJVbNy3M32bjofshe95o9jtzAEUwoWhRM2V4zW8X",
  "key47": "599BTUQYxywEAi8c87dUeFzZ7iaJH4V3oyq6BPPjmxMEsBSnRufkU8horxNiZM8HZrf7udP1uWMMCoVTUEgqEwxH",
  "key48": "JB1XxLt95W52yTze5tArXf7LaopKVcHmPeDf1U5JHv9QbNVmKWj4MQLtcxYS35G4kVkDHG4bRNBRYqJE2onQrse",
  "key49": "QuMD6afoEnQxhnSoqSSFo93jPh6WLJRoN7LMk5cp5gDs1SSpJEuKtXPRCH21eHTL4m6H3d6Gxf5x4Xgipr2GQk4"
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
