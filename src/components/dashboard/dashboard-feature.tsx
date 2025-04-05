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
    "2BVjZVcUXrfCduNM2SKLcaT9xvH27mFP8TkoCUDKq7HLBmiBgWD6edaegmit6JPycie5ZCm4ASYdJ5gyqQSMQWhi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M7EGEN4qN6bgJ8StNERYtyAX56X9YSvcJEcLvFHHAymeVmozqkR3H6caBpmSSYXQro8xAVjFayBmEULAdfEwNGV",
  "key1": "ghvCF49J786Lxw6ywymifR13piC7SKyK9K5vkbc81dugHTTD3pFxQKL9AFF5gt5izpzUj3NntHQLExdzzENZRKy",
  "key2": "4R7rgzmSDLcTinF1WdormbiRv8X1gG2bdCKYwxhJCHvNrB9EGEU7r6am1UVcC5h5oaDJykFxmDYwQsBi1YDKUgaA",
  "key3": "KWsKHqSjqXEZt2ny6tnNExM87NTuPe2oHauUTEjBGVc8FfHMwGma2GmMnHV5vVSaZjhvACB8U8gCfqdXvzUaGVb",
  "key4": "4dgto9VhqzZBfGhUXxwrmuRzvaxRHtTpf662aLSL773oQQ1TWRZpVz2etEeYTif82tMNiaHjHagPAZi4VPvcQ4gv",
  "key5": "4egV8wRRPAQdGphy64R3NvcabZdaRSQA1hGuUjBnEdwJkp5L1cf17EwDLtyuXz4zfaHsrh8PbyUDNobXuF1K2V4H",
  "key6": "49QabsKera8fuFU8JYSqrxZUxiTtRiNii1UXTdwXESSZMbTqLetP5DXqkwAQ6AHSpPGbqTZS2DfvrDGeT3DCvtk8",
  "key7": "2WACMHDQFxHEjgCHuMm1aezxFfdwriWjGHhmdKCSATJQ4Li98Nok7ox2cgsMoPcVMDd2dZ1LmfFBhWrxd1w2dpxL",
  "key8": "4zUgn4aKPMBwGMhZBTVQDPMKyFgHGHaM5P6fVezR5pDNxWAk8PJoZTpQnxiDp6ZrS9QBV1Q94jXLHa3XMBPgoxeq",
  "key9": "5XY2zrGxn3RnVXjy1tMBtHpfR9gyT5QaBEjMqm4c8VpXj2tBD6ZNR9CWnAwS6TnR3WNgrLpjnKKiufALMbjVtofW",
  "key10": "UFZ5vH3M6QgoLVZHhrwUcdz9ZDFsegR5qKwPa6ucSe17BKFnXp2mbMiuAJFfLEgRdTZEz18jNckEdNeiVm4K9NC",
  "key11": "5zHumNF5yuSzc4bk9h32vtDTqxRXDCartRx6RScaMCwiBbyshr623QvA5JaFrJTQWUUZEcYVQrt2Kst7RtQxyiwc",
  "key12": "2TPNwD5nT3LCeVaWZB2d9dCjcMQ3XvFv2cwazRP4mcaiBmDGmJyZAsTQwVUeYrpXNRSAXeziM8oN14TicR3ZGbAj",
  "key13": "5Exd5SbTwG2Kpt2WnytQT7RSCoTECscv6YLVbAezTY4YCSvD1kYDjJ6rnkW6wBfpdjV7bbn1W1ahrRW8wi8KTrF7",
  "key14": "4yxJ1KWUnJRbAzZHNSr5Mcvovjp7JRKVq218gPHvnJP78c7PP5qhwH3JqkMPxhT9ygZrJ1AADknSmxxTGLkrhGRQ",
  "key15": "5uxwZKeGqV6ZsZSjGiB1aBMMDRgNxtugkvZeAovkmjtLxwp75JJD7SuyHrgFLyuVKTrwEt9NjeMPbxj1gZy1oHKZ",
  "key16": "tjmPpM7TfyCBvofXkekLUUGEPBDkLyLNQpNa17MS1NwbmtDVzq4Zwg4uAab2oXiQcg6vh4o2odozNLge7dnNKNh",
  "key17": "2Dz9w85wy5Zau8kAfaa8U7UyErUad3mTxcuey454JKMYU99z54Ym7vBVGkAmL3AsNHvYn9BkuYpMoqu5jbEc5Vh6",
  "key18": "3Jhetz3PwZrpNfyQUaZwi7LtiPxadvkPG338AopstaYkAJDV8UkRonsqF5fWfNH3vuScPMMTWgkYXZxFYBojuywW",
  "key19": "2JucYmkLAa2cvvCUm2EruEKFnd98WjAtHpjjzshYAKhzigQqqvHCsJZb6nD9RQ3yvsRLNMwr1Lg18ZncKn6TXwon",
  "key20": "4HUo5fgEUVJg8a4Vn3Hma1iSUNksNFkBX5tZkT37vdRVuPH7YwfUkTvkGUfwEp9xH7ejTRMzfKupcQVnLH3oWNJv",
  "key21": "5NNj4MuL7cmPWYo9TFTwWjQBF1LoJmJkNAbAghCdbRQM5ZWAE2uKrQyrKbPjCEUsmvavphFPEiiVAXisKE3TYxRr",
  "key22": "5JdZsLACDGXbzUr1q9QWgik57Bnb4f9MM2Q3KUZP7n9duQpHGfTCSNAeB9wkxbDYNKazZwgMKTLzmA3S2Bz22Phs",
  "key23": "4M2CM5VWfqoUJAEdDh57i841RFKb6bMnCv8uLx8vbtJhCnps8dk8w8R4phdPWch5hCV9ueofhwR7jBYqnC1uCRW3",
  "key24": "38jGQHe5dZng2eExcrJ8LZKn8jbYyXsdWZTCAAoyJyfQHpnYF2BELzQEkKqeqgutEDqAhdK4s9miTaVZEY9BY8Ku",
  "key25": "2XokXX3JBQxeLjrAyiQCXmWfiht9gtHvLwqQmzYGXSmBf15d5UqtDB9uLkPfGZfrz8JpPUzw64GhC1bmTW5YeBgA",
  "key26": "2tMpuia3PM5Uyhab5jtXcR1Y9v4KYJ31YKhAupvBCRPUyMtotTTxhYF9kUvAsQhDg1g6FfXEoJLFaqMWUWwPtqpG",
  "key27": "2PsJp4yFUKiAAv1KvKrgWaVCJVzVQuz9oxghw6SZmFzroD1hJUcM3ozG3jigMAAB5d38nbgitdQmyRNspUbCoPnK",
  "key28": "3FHapJm22QpDaARnVmRNmXtNSgFurmg5iTeKbs4qDSE1SNWD3Cs3yadYoBFBbAnT3nDV8Te2z9NMcV8q3yyttbGt",
  "key29": "SZsZdJMnYykC9VZB4iGdn1FoYYbdeRyd5WfmezHXYVNVgRiTSpdNP5AFz9smDaf4LFMMGu4ebArwKzsAe17cMzz",
  "key30": "46GKfdYe6mEX6bVBZ8SswLjyDfuuU1FHGnrnMnGBRHE63Z2k7dBhvq4kdBmCEPUAiPQ6oaGTn5NVHjMeV1dbbG9h",
  "key31": "4uc7CFoEoUGX5SPvhwFZvg2afJgjxGr3B8TZm8NsJnGFrj3kQUp3WC836besKRmNbgf1kqwJMjYAL3CShgTfNRap",
  "key32": "5QYdwkLCQSAfALCtWVU6XCLeWo4LmoH1S7wAKLMuA9kvyjh8Z9BW1ucHWCR7pqJeCb22kBFQZc2Er11ryWGVZWmd",
  "key33": "2GsbYtyMuqT7beB4TABLbpeR8zKD4SZs6iKxzYd54x2u3mPx1JzV6tU97GNupu7xRqfLvnp1xiDMLHLbwZdMecoR",
  "key34": "4tSD3RPWmCBCjTMviE1FRRL5Qd73m5Qrvs8cdhgk8GJdNLXFHiF8kaw5e2LcBF3wZbgouuVwtEiwL9ypyHEjTfw4",
  "key35": "4kxeNzqqw8kmJaXrc7ygXigrxZd4oD3F2bnCmVuiQwLEBSCYegR4eKqrLuKrXBmGmSUbjUupk9c2z1dWQB6F1NMD",
  "key36": "2i1n5g86xctkvXN6jcRUmNVS9YUtJfm2Qo1ZuZ6wJzXLwdL2AmmFyrw7wCVShMZNZ8VkM14xbFjzG9iSSv3hYPP9",
  "key37": "3tSBA35aAvwsze4SnN8UYijceohwc9mbv5Yd8Z3x8iaDVUNB9qLhU79kha3kJRtJ4jzRsjvGDrBVBxR3N1THakxf",
  "key38": "5GjLSbQdxZ8mPomPZe4WkXYm8HnVhwyVH44MEzYJoq1ZR1swUxy7RTyEKTanrCwsJfCj5E3aacn7FsM52aFNFyW5"
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
