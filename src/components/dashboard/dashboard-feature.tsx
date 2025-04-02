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
    "48DhuSYXgcBstqTh8QW9i7M7JJdgF3nXy3JN8aCodugrBrhZrQ4riXbBsuzbnvw4aPGvV2112aUWEsZveEGYboEF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rX9rA9ZwUXfcBmAC7NUrhpvUM4JhUiX2csMKdmC6YmPFiXFKhzhcgWSoubJLujAs9B8Z7ey5ZGTVexuwgvQG6CN",
  "key1": "2zxBFEXgF2KVb85Qwt4ySMoZQoJkvG2Nk8yNq1nA6E4fNLCimuU2ygizcJmcrpa6rUjNoi6xpt8kRvrJXULbuQ1",
  "key2": "3HGH2Ka3iRAuc9q2uVeGV4nnP6axk9o8f81WuHXH9MHa28s9mSkb8PryQeTQb22RzGyF6nSSuaQZZpo7giZfWZeP",
  "key3": "4cLAcs8QBxL4fS2NRFNcn3rS622ydpqEnvdVpbfuz7MJTXjL7GQQoHLbwLNVG8k6PbzATpnFE3pWULgSa2BSjU2h",
  "key4": "5HXSyYRPRuq3a1R8ojYLAqWZtDn4bnywtP38MZsrcGqrsKdt44iCGEiWrTFiAMmQFu4SKrbGp3czzGgaLkcYk3Zb",
  "key5": "2aQ7qazNqjuG4NakXzyhBEvC1fnxYiTcLx8aBFnwmy7TiPx67HKWsRVeAPVjPhpqD86GwQFVtK9HuGwiK1i7m1QL",
  "key6": "ytiZDTuud68Xpk6tR2EUtyexDVhSStSCGjCNP8ZkSq3pQoniSKN3MajhUgAxNMPmrnyjzXtG9h4ndUqmLdr8D3s",
  "key7": "45qK26zZbnagyN5z2x1gr3tvnmqTU9NnGTeMHqKP8aqtuCxDF6nazCu2SWcVbm12JmGyRhJ48MPFJE8eLabCcpbg",
  "key8": "53MpHTpLWjBF9V5bAXZ7FoL2wSuagjnSAB2B2F8TiQEbiGmC58LzQrK64uYpxbP3fe8iRT4srYb1suABwrg1oMnF",
  "key9": "4EAAc2ZC2D1Tzd1ToDJBa7xtyheuXeECU9wFh8sUvFXXNbeYxvR4mrqy8ektC4VmcgitDcXM1yX3U1MiCYVJ2sLB",
  "key10": "2jYH3Q8N55dPp4chG21N4qv6rq3x3RrK8KnArX5ycS9VPMSJ4hoZFDuXMJDzzoU4D8Ci75sUTYPorhyjzFnMtu5K",
  "key11": "5nXX7hu1MrqJxyfDe3AXJbNTWtPLFoGuqJUqJoKK5tng1w55QN3XJ3Jy5YnSLAtygLp42UUBJgfofFNMZKqRvt1o",
  "key12": "4V3D5XY83BPzinfPt5ffCtmB72A76igBFZZoWA2gQtHoViRT2jWC2BzSEHBhA4naawyv8T8vneG73v5qgxNsT2DW",
  "key13": "66erVFLiKa2LK5UPRXaLrnNC8nFDqZjJhepdx8DaygwYqfkvgViKeMNSaNQPDHTGCzZy7KeVmxgSUGTkRDG7UMou",
  "key14": "5nPkcJM2YXgtrBw6Eb8DKTpuRqwqLPdZnGaVkeCaP8D5FwVSFuXX4Ukubx6iSirkXsRTYHaQ219voPDAcJzktQ7d",
  "key15": "2syhEn5rN4Je3mMetzUXjR79KVoKaxdTvgHaTnfs5a5t3CbKXyWAi3FAoP9u7ds7u3PpU2GFQq3ExrX1xahPehxS",
  "key16": "2UV7ZMvCWGqUS7uoFAfhjqgG6y7rjKDaPZQVhPvx1wxYveGtoZnBt9Gsnu4GWDbH3QXhxmQg3wCdu8tTSuGDQk3x",
  "key17": "2oYwK8FCcTkzXhJ3dW1HFHHDt36mm3ZhgxnfmKNSkT5rJfJioeV6RjRM3TUxRLmzCUeT5vmCsMWbqh1dTApqLAhj",
  "key18": "Tzco6Ym5bbpweNU7rTHj8KUArppzGw5TTcqDYHKyGjBj3U9BRJGsPMZ3sJXLUipzN9Ye2hmK3qhySdcSsrQyzdT",
  "key19": "5wqjRwobHw1T8Z9yb4Jj2T7n5zTvvMuDGz3BeRGT8QhX21rffR9Rir8DnqU3HeZUGBQABLb9iERStmLZnG8tSxHX",
  "key20": "2MBZkPpa4ZW3yxVBGfeUwheKhn6YgSnmAjywPkvK9znF822bwxeKBUgSRZm4ATmDCjPZHH9tnufTLwWjhuxcN6b4",
  "key21": "4Q7UUHqsakKQMTdv2GroCbtwsFDH9Zx5rmtZKi5AiDYEhw9pdcrGKcHJ3WgQHnsJcVLECHd2eACYyn2GYE1z3twX",
  "key22": "5vLcN8y7ECDgjSrpnVyG5T8FCZ9qa3xwssej6EfTP4Ah1w8FTgRW37P22A4FqSeMUsTpHU4pAjHAv8pu5ZMjSiqu",
  "key23": "28aFmBtwsW4FLyG6dRsX4YuGFPgHHZNR75asDQdryhaXXsPQ93fw73UBHAWuia5CJd7c2DA8QxfzcTy7LutsjW4U",
  "key24": "V3Wa6hAeTcvA8XUTrhUA8QwrjvhVGHzrChSmCM46KEG5ijVNUrLenLwydCarTkfSqRXETPqnDhf4jHdmHrprVPD",
  "key25": "5D54UPiGRchysiFcfrANGi5zbjrRUEMQ5tmSH5qcENc4PavJH5kSZ1ybdtNsgiqHo9pCm9V2p3zTBzb5T6hkKz6D",
  "key26": "3fXiv1gohn8mjZsjsqbWZxqehnqowMWUgu4Je12A69gun4mr9QRo8sRpVttWwmxEfNLgNLxS9LiSUYNHEJPVFpY5",
  "key27": "3gn8SD4YVCqovf3ku3qFrMLJYDDG3pruA9v5UDmzmj6Vcr3DAiDr2WwfU3a6jLhxzARCbfkA3RTKuZh9UqBtwssS",
  "key28": "2xfdXvFxsd1mkb4mPWdzAPQxzRZud77LUU5g724eNnMBBZvzKNs4CNbFHJ3vtudhAekCrDVVuNDWc1k2hZfmK1KS",
  "key29": "4bb7R6AVxQVuGPRXJN8mHhAGasatMt2xsdfQhuajGTS68K7UG8hXhTq8ivVE236JwxKcxbzHCytpiAZkv2KRKKzG",
  "key30": "3KxR8k43Z1fzpt5NNkuMgQXohSSz1fcNmwVWZSXw9fHwk4YyeFsB6zaVXpidGzd1VPpJT7rZUUowFDCZ3Xzg9EKN",
  "key31": "2B1TnQdybxdFZ198WNHjqGH4UCNehs7YBbR1fzQkqyqGtn8bgYitVCwbGagjHghm3mAtVzgvTQTbgDCQfG1KPLws",
  "key32": "4QAaysRiCgGNgz2yY6exhjaou9SoruyMr5simBRDLPydokPSYWo1UpSVJAEt6UxnQx9tJLcGH1pDHJNrf41Ed7Lh",
  "key33": "4578WtskrbGFiH1SHGS8UsuuYuruW5KiydDQB2G1N7cbcbZ6xXkpKf8QBsb9aA3QVp3u9XSbYtMzWe9LRKWmJJAe",
  "key34": "8PkMRp4EK5jVdrS6QEToqe7uD32EM1rHFvEkREvyK9ocnUiCYYK4RK52zNs131SAcfSVY4Z2ijoX8zUVTCqP5Qh",
  "key35": "2bagKHd91vACKWnxcNmk8wjQxcmZFsQAdcLTkz6bQX6sWd3g7PVRrRX27yCPUor9fL6Y8NvGGJgyuXrePYHpvaqX",
  "key36": "5CPEh2qyneiXiG8q8WvdabB1Aj9cDfr631xCxGfhqAUznsyroDWBTdX4fVC7wQiYRW3AqjDd3aVKUjnXpKypPnAB",
  "key37": "3vJyr8iKmnSKdBz5KmrRz2MVRTToas4xnuV6EfGuFeXYwZs5W466jp1FewCgEbpoAisnzWTHS2dSyPM1R1iSdY1h",
  "key38": "FJiGebdzHcpT64CPXQxTSoQKGyoHgfgNLAVh2QRQ9yKzRBSanFxRa8se8WBb9PxStBFX4QoZhbt2wbZwT9UVrxi",
  "key39": "3mHqFs73z8oLDgwwtBntcN6s4ou6MyfZj7ceM4UDB63JunD4LcczjrBR7B2cLoEDJoNvafQYNNeYiKWNKDHTb9Kw",
  "key40": "641rdTDy73rrkjfrcSRso1EifydN67A5NTXYj5SNfyWFTNokifGmBah4D8qXgpxyALNVyFf86P66SdGeYRLWVVKL",
  "key41": "3veC9ajVT45hTKZEzEhyQHLcPBGKVNL1YKZc4tXKejs5K2od8q788eYg275ZXrD9CMub8xmCnsrJCjm8PQLnCqLk",
  "key42": "4jNXDCGnLVd2e3mXpaGR4AhZUHkX3h5eawY9b2UzqjAj82bGDbKHceoT4Xi5qQKj6vZM164rUtoSn6DKnvvMYvcP"
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
