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
    "3QLSrmc9AUv3L8miJSz4wHqhrmViqZmkpEBwJ7bxMprWoH6fXQKahQTGpu4jiHXo368nhW8MkdbP7mWAUbnJ8ZZX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "243r9bc8JcTtormxgpU2w7TV4hshFzCwxH1SeduKjNoyzv9avFMgvPsBd6gj29h3V5PmLKmJpjZJ3kKgrEHHE85H",
  "key1": "45mRyZhtk6fW5c84wSpRMmSe3TKgA4MzFFcz8geruZ1iXb8cha33ossMof3B1WpDtgHDMuezp53turG48wv21vz3",
  "key2": "55Axj6khjJbHSJMGrsp2CYiNagbv1fANUsHmd6srWKYnpGa3wMSmHbEZVm1iisUCesEgKHKT5MAvoLhjfazbZc93",
  "key3": "5jgPJ6PvH31n3Dva6ShKuNtyK3SFnuBhN8Bu8R7c2ZHChu3ryH6ZjjzV3GpGxtvZuTrxNt12d67gjReqJbr1vRVH",
  "key4": "45aPzrChFw77ni6zqNm2WzUmvDCvH7uXoPAf5fNgywsjjaBB1gJqzmdUVrNHVYd6tdGnT8MvqLpMMwzF5W3XU8cg",
  "key5": "57cx6fazMQ3tLtGZQ4xeqs4VEVNbNtcDAJkehkwH5Kcq8HfGpuex1RuMJ2uYRRSggjBnzUXmZnMSn8xX4VKMsXcp",
  "key6": "nPohvHwhaoAc2Trm7jzUUP3aktgYvtGvqJawx3fMF2XqN4CZrKPENboyLfsdGLgtuByDNVnnzpz13Z8iUnRvtrh",
  "key7": "36QRiYWLuPNGwNdE7c8J92c1GB7rzGepjFACcYYq6QxUZA3XFE3RS3aNAGfLkZ6pP2QmtxjVL7L3A5sqiw9BjYYx",
  "key8": "4Xf63kVRQQhBxH7me1EpcuTRQAuVvjtz46rXwLLJegbH2e7idGiArT1DgpwHnLLRCFVimshky86KZ9ShCrZGowg7",
  "key9": "5A8T454DnkhQCvQbxwUQSi9Y4H3x9qogpwhLdjreSocL5vHRkFqnEDoQnSjTdcKLMC1DrCk6bDSDpvnSoS3vra7o",
  "key10": "46c1Cz1J1WtCSK7aL7x1DhrtSd6NTVpM9oaEW8FFaZCczDVGh1DapYVf6xCD8yPQGeZSV6pVrDZPDrDGikJi9VSV",
  "key11": "3iwd5r8nbUgJTJLNihXFisAxrY5yhr82fyGtVUjwMqGodT1JWwgFXHtds9V4iNAxrRNDcmZLrumqGdZUauu9Fcc5",
  "key12": "2xuEr9vwZwkJbK6gUkVARebC6Zf99fjCpcTd27NUUX1bySGBPU3u8qTAPeBsEpmRydCa1TRoshq5TUAWVbXPTUtL",
  "key13": "27xaDmGpa1dTx7BBrD5k46A6s2UUxUWu6mf3T3UAJHdxz6GGC4k1QPD5VB49H2Te968tx3X2w7N2AFd1JbnNaSFx",
  "key14": "2FV3dc13oCUqX5bdo2DdSYQUZy6bsmgZ6L2TbmtTGLUSauLJTxrhmmJ4iYPnodMTxvS6CGnjSW5icdQ5RnHoedGc",
  "key15": "47u7bSUwBJYqG1vrZfbKkFHDX8WZVuZdDfMK12wB4FiY45WdqPqRiD4A2FxjnAehryeuF8GiXtWGf72fm12ayPNe",
  "key16": "3Az4fpu1AdqHLPfRPtM3mpfYm5aL2YzonGBpB8RbiHGuvqg8ued1AJssscsv28PP7bQjQ7J57trBVaS1HnYZgtex",
  "key17": "4L1GTRBPK3yi2PRvGLKZDLYWaFGSC1Cso4fyJHbqktZkN2RmxDs3Ckg8m5ZjgzZb2u8Fkc8gVzj2HJvz14aLaRMT",
  "key18": "5nNRmpFyjEMXWr5KGKwCyz77mwVjqp3tmvSkmY6yax81frKRHGFPBDtnPzv1Djt5jR5vPrg1MoZigRvQubNAdAQA",
  "key19": "3DLkKtCwKxRzMhwTjofQYKMUBQiXotPbnNw5LCqG4nhnx9ti7Z6JX97SDCgyw7toK4xTKME3C3SUEmRsTzWrYtxC",
  "key20": "3Gat6xpHeEs8U2jC8EYn2vAZmDjPBSRX6JXEEGrk8hJJjFfkjhVc1A4pZobsuhTxjNrw2E6trtkAgmkPApzv6Xbv",
  "key21": "5quuYDLacrqpQMkGXicKRBYEpmP5hu6FTFVPGZTdBfc4wY3nFtsdyyEBwuZsuD5Mp4rVqRZzeU46XwCDGvf6x57n",
  "key22": "YPdsey8x7Sb8ZeV1faopQTEXtQj81aZ8uoVJ3FJrBnGUuBrfWoAat1snXDvBz5zf1QR28XLvQCbrXUCPAcm7uxN",
  "key23": "2YtkZPYkyJ4ACCgNTwGhckbcQBYPd2NNnYJjR5JKHg2N6ivK3UoQvstQxDWXXrj7nan8MUjvGvw16J8644LfBteG",
  "key24": "Q6tfot857jGB75dHmEeg7QXUfhGdLGx4AYVU5yMuMawqYiciu9mSBw1RvXPUxXTijDL4V1DkPQQ5QrvhXNSMKZr",
  "key25": "5coYkMKXWG3jGgdofMEeQF2DoD79bNAhrEaF2f17ZiZgFMfrs4vRo57v2Z6MZACm81GSwbyUsYVYT85onDCVqejH",
  "key26": "4RYmUfzLQZzedRkLeajuiK9ZokeP24RTB7cHPiJyYt12Y3hNNXHVqxsYFdDWnitG9fdMtYiMBSwADwTsFSJJRSLQ",
  "key27": "5U6Rj54qhBL3pN2kMuW96bKGDjtVvjC23WZKu4hekACRQ4B8VmyJS52Um5a61PuuWCwGzVuGW8ibvV4uk4vADQnc",
  "key28": "scNByLNvxK4aA3b3gwaaoNccQUuk7PFV2iVbpTQfecfQuRN72MQAxytce9Bw4jY9ton1DtYrwNNUDqbprWbvTYF",
  "key29": "2CiJDDwieDQJQ1FHhVeyaN2CB6aUtAPCsvzq8ZcqCtwHye5qK2PJbfX2aKgmchEYvb7NL4ZWYBL1wyP6ESntyqMY",
  "key30": "2sYPNdnBWQo9BrAFd2fGovddg96uFi31WR5F7jLRmBL41KQf3hDWZEudhDWRtXDLjG1zFnfFxhXiZSVUtGJzdZz4",
  "key31": "kDrfTuuNsaiUVKtcrKEWjbJ8ce72cK6BwX37fypcm12zJtNcgTxq2FgyLtMx2gBSwSVabaDUUMcDYvJeUtbHzMK",
  "key32": "3GjesaED1Pcf3UyeL1QigYAaxgDJcS4qvUJTc4ydJNyrxXG2ha3Nc2Q7pCYjDpmLY2d9VkLcyisR31aPVPkYNtCg",
  "key33": "2Zaeqjuc7dUmDCdunTXjjJXFHGdtqXPaT8azQKuyUKyr6cvLXPjk2HHKyPLXP7M2cy8Cx5WpM6w5b6iUX3vJ66rp",
  "key34": "fm27vtLFHV9TimqG1Ch2Pv9z7gLVeeSoDemmTz32zymFqSAHrfHBGQvXfaTGS5sTHB8bP178Mj3XwTJQyrhjsWK",
  "key35": "5c2XcW9jyUVQxwoAse4qrpUMCVda31Y1MEqgmXeqZphHGzTy68B5CsvwQoTvfYod2xPx7cVQfYrK5P4SLiY5Z3bW",
  "key36": "3xpGKcZ2JB8xoE6J7pUVH87LaLoYng1DCBDiHWn1cwJPgb3eVks5JXeXxAXrHmWzRFxDLZMy8DCLFzG6zAh6HLG2",
  "key37": "2iQAtPcyjgkZUeKb4ioN2mWeKWzAoShJn6uBPo8oS6qwat7XRbvdkpYwvMRbL2mAVnk1Kn2121WWfRMevqjyyNPG",
  "key38": "29VvtStkP2XT9KLJCTd1YWhmbPexZjg6739yJLzwrhPDoMH92h3y7j2A6tLjSboraGQP7gDDCfViadDXU9rrL26N",
  "key39": "2QHwn9npKF96WkzjZMouWTDxMihbj1cU3DZH27ym4jNKzKhPsr4CdywpdC6p8TahRo3gVoFPq46JHNUPByf8DjGC",
  "key40": "4Sby3MiiX9ypdDd6ZVpuMpCejQqTeXshV8jpE92j6xypH7YAuSkyiRJGXbDHt8ctx8yDXTSCnStCW3U7Fcj57c9v",
  "key41": "2fVNQsH7PrzspT7J9qVCn9ZDYVJZAYuMpP9mksNkYY8nj9BPY8EBRHaahTeJRJdWBSWLUf6yoMfMd8xgkFqdN7Ub",
  "key42": "2varrdS1nF7QoB3pevYhQmTgsLdBndhnwHa3WFPYQtDDG5C9hBEsWukWnQAopFKR3U68WFeTv2PAhswfjourMqk6",
  "key43": "UcXNQf2YtsmmH5DjctDwrWzRmbi8b5WaN15c8Jryb6Mb9oepK3WW61D32Nbej9bN7nAqngiWGDTe4mj6Btcfxsx",
  "key44": "5sumhiWiSkb9NEfC8cFToE471TwL2RuqAf6sfNSjEqzUSJe7T9xDry5K6j7wXyD2uKt7WWNhVhRE5Gm6wsK8NCTd",
  "key45": "5GcRXRxA4Hr2XnzccV7u9D5NVkor3dcDzZvCtpqJGqWTyi6NvrXqvy934vgPYbBD3U8Zo59o8V2p8TwxkzkxAgkp"
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
