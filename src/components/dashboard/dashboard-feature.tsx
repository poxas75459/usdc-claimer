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
    "4fXWoNuZTsesbEbY8iLJh4BWshBatzbHPQxDmS7CYVydK5yFvsuxR5gSQqQiC3SF4bRLGuSoJiSEEW6p1HDarNUX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qqGpgQH5TxLn4j1nMRe7hxVx9fk84HwCpzoxvKTD8CYXmL1tALp178AQsgjZHXzGqf3tMuXZU7qvq5oV1QmkdVH",
  "key1": "2fMurLNNiyn7DQRNB8mf7nzEpMkVbipRDyygS5TyjTs5NQd8z92t5Lu4hPJ5arZs83gfJPZiSDVPi7nJyGAmhQNa",
  "key2": "4h76cCbpMD61odLJcWWURTXBdU1t92pwBBhCGA7Gg6GfYmdCmFVACH6KQN2gyvMYhdqe7ihqHhd2ntvXRLwWnqgt",
  "key3": "2Gzh6SZsawoWCBiWxXcgQKnZnJZgiUDHREN2MukZow7gDR4vZh2CuVWFpnDcCf8mwZgh13DbTTXJR2VnbNikWCoM",
  "key4": "5k8a6Tbzvt51fZ4QPTqMV72cKdE2LwrwAp5HQCHjxD9AbQXQwzJR9ULhNZVPUtvZ2RotTnjXsnpHbwyULt6JEGMa",
  "key5": "5HgtuDaB3Ud2Dhf1cWHBJ1nMor4bi22JYHFXSKvPNPgg7M4EtcuTwxfQndgeQkQjuhSR9zYXR2M38mNKWeEBw2QJ",
  "key6": "4atSYCBzzXf2wCyMNeUNGJQV3rS3CWCbzkg1YSAnWrEA6quRCDq4MB7NMgurxaGjgmJrrqiHtawf7Y6ZjB4b6pCT",
  "key7": "4WpMJXevVQ6s3ZX7LXbKrYfj8M46UoydWBiUtUjLfPZvFV9Tc7M8Zv6esZ8gi6rafTRgbR7UzDVLrmJfJYgid4Ad",
  "key8": "4t2ijcUz6RxsDt7d72A2stdQDWJuUE7VfzoPf4Aqc9PnDaUrhz2HoKM3QGFiXSqY2ZgDVxqFF7vfie5d2fD3Vkiw",
  "key9": "4WcQB8f8xmcyiPUoj9uvrTzUwJxuxuXQDtUtACVLygGfG6XkvRiZmeqNzRHv77orENB19ao2YUGDWk6FTb9t2s5D",
  "key10": "5NBHY9CH4Kq5v8zHXKa4HEkARDogeZrR9sEvvTzsAHT8EsMbGu8wqmXVWnrXethDNL8U1xGF4zkZG6dzuAvcifXg",
  "key11": "5MBeR1Qxt33oWmRghB3BoSskNftaQmRMtvxffFLoNiK142KWtJYD2KWb6QpcGXvkuunuQCUrikcKNvK9ASuyWT7v",
  "key12": "5sLX3xvZnbNLvYTuYKTn3So4uMMBnTpQe1Yvc9Jzwj7K5FDohVHpASoF7D5rnwtKaJ7WS9XUK4p9dcdJ51CA8MCb",
  "key13": "41dSQzsC8GrRbMJfwb6ucAHVBB1Ew8HZDQg8DUgR4HhagmtDJmEQGgHLasrozqCHJyMZxv28sB5BJH26Aquj7Ck9",
  "key14": "5TG8hYc2ydiUt4AhnafwT3gYXNHWUS7WvgLj3ZPBKX5oUqWPsgDPhNBFzGyfyZWynwXSDw2FXN8vSMmq7HQyQ9fc",
  "key15": "VAmNME3ynzcihatcgx9zUYwhBFouysKKDxkGEBzrNiEhzU6hrmYXtupirscyKkRqUFsyUUVhjmVi7dR7JgQPzUx",
  "key16": "4SbgGHqUcTPG5mhjzVkL7zmgZvuH54hrTBtVqVsxitG57qyvNCxCwdPmTLMRS6dCSd5Z1rJnVXycfPAh3sHmCdPS",
  "key17": "2M19E6Q4UEjfhHEQwhaYQm2BFPPJHnYzf4L5W4bTABAC4Ga2LJ9ob9kTKCyZpjgjFkECLKJLGPxBuBk73ZYsaQvS",
  "key18": "5eD19MyfmAT1MswmrkTFKCGahWNAr9dtJ19qgmfswfwtD5MYZ3wq5qQatgg8bzoUF7Sgfvs9pYZWE8AHdCdrMoZe",
  "key19": "5SstNiHUDCFnW5CEdDYof7wC7xsPuREYZi73qjLe8GptfRbAaa54mGwV4dMhdeJZkkm7dcysMB6SViLF3hG1w6gR",
  "key20": "5SQCP2kwLQop4WLG8cdUKyDojJfJn1cZ6e6DxpDVCkD4VGZU1GHAuHhMLHLR3XYyTuM5K4YU8ZUk49fUGpMN5Ds7",
  "key21": "43JGu5cCHJP68u5UpWYbx89NPHT9TSBq627ZE8Hm5E7NNnAGMKHKYkw1AnvhuYWQTSYeW2MK7vwU6vidM2v2hrck",
  "key22": "4P2hf4nEo2YXsF4n53VAdMPEqehtn1eHCQJpGUb7abJssCKTPQmbwSi8o9zQAiKaNcwaW7Sb3ywu1YctBYFFaK91",
  "key23": "59e1933uYNDMYM1SpH5MU3YgmihJwC7rmikypx5aEWBh2UVMZMCtRNKVEK3fFRBp5r3CzK85AjvjFb45rCVAgwTe",
  "key24": "5ySEFP65F1dzsLDjTjo8A4jdFSnGN6cNv2f5tjuqeWwJGtCFPdNeJmkuXjfzMNTum2VCxpk74D8aMuc9EXiQMf1H",
  "key25": "rjk66ku7AXFZeY8efViUibqgKjb6kvSzeJofA31heNgRxrAEymdyFUkB13ZVQ2srqWxBXEEpUn2ZKmFNDzTLLr1",
  "key26": "4TPGHNsYCqVvttudT5WbYuxf7nsz8aXtHXpf36o9YKfG5mFjsV8otZjWxHkTvrrwW7v9jThBCfUxMborX8VSRY2K",
  "key27": "2pNZSNPvpxGuTHP9oXt3ioResPCgzq5UkvGs7wnYE8pLY7VUyRvN2S5TY1xGBY9kHNgVZChGxZAWtAs5brp6Cbm3",
  "key28": "2YLD5mCqXh7p3JNcbVywPcmaToksDD1hV6PD5VJGL2AVdauqpNcpXC4WwF1MTT4yLPBSWEpLuw4oksXCZW7HZRz1",
  "key29": "4JsGFBf8e17CbMBNWV1gsP8LWYtsbX2K8qqn77nss52MDrP4HGH2MSeidqPNmXUjMhofeDR7wAx45LM5DNLx39Qj",
  "key30": "2LPJNYubZioLqbCakbC7NppuFduHTrTAXvbRLm4JDxjZ1o96NEDWS781ZcyUMwzG9TpatqpPUhyAbj5qaiUW98CM",
  "key31": "24SShXsuHRqnPAgyAsQNSa5Xk9aQH79y7YNPZLPQrrrWv1JfKtfW3TRDgabPjxXxc8T2Dqi7JtbbyKy6ZqGPUcSA",
  "key32": "49Lmtko35ntQMm6iH9m9ysFYRDnGtNmsT67raJADKMinXVdMSoaB4LpPtTL3U2h62MJXbT38zytaYbM1Cm2KbmAG",
  "key33": "2kLXRumfzokgGmKpGMLRY5RGvPQek5A6eP2MUQaTmmoQwbjZiRfuyFWFYZKvDkoh6dk4VNWkU8PCnt7ebHJVeif3",
  "key34": "Ri5zR2pH7wuxMRqGN87brt6vtDYdYpUgUiaA5RwA8ePraL9BuuNZZGU8bPCundFjoH7TDuQrpvV4EtBhCrZ5vbR",
  "key35": "5sWN9eQggvneybei2rv1i5dEC8tAiJc6EFKj1wduPZ2NojBFw8RtAVAtDMNL71tQcxFk4cW1oVDHKBHZKzHcXRhT",
  "key36": "5tjHbhM2xEam1bA9f6q3xPUVnYdSLfCL3CoWL716DGznSpAdvhYiDsVNoh3cVuRzNDCsur19V5NqNHHksmNTHUpn",
  "key37": "pMFy8iZai9qnH8h1MN6wRH8BNuM9YRsL5L77DACGpaVVhiAAVGkt66YnGvLSREybFAsVnt5a9jpCZrRjwMCPKpT",
  "key38": "9bxphLo1uupeUSPsLne8HrSXddMWqjheUdHQzDhQ7ePy82XwivkxX2VuACNKssB1PqbYdoNFV9guyLc1diGMXVB",
  "key39": "4BvuoNDAHCWdr78NHmcC724dUfbxNVH2dyDofkzMVFDHuzNpUNw33ZtBn4X5YpG7WYy5Y3MhEK5r3M6WqS4LkyxF",
  "key40": "2Sc6tYYTL5HinbBMw2R1fTEjWbnB1B2ns5DQZ5JJ3Xu96Ti1KJTpMVDjhQqXKJieJusGaRysRRxJKDbHX93PQ5o"
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
