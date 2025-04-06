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
    "4aA7tVvCbew1yrFGfCYZ3iqQzEVFjTrR57fSUPjcJUcRbZ6JuPkrJdGgPa3bfWhVwiQzGFaLp7ZsN9DmLsbzLA4f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WkNGheLvE8yQu9U79fCnSrHXYgmVMZpqavyRYM8C6aTKDEm6gh5PcBWR8aZsMgstb6KJpXGkzLcXUpHFB2S85h4",
  "key1": "58fjkbgLPmx83LfrdpjHgnyVMfj7NyfrpaHDZg8gq32hn3rxQYpkBVqBEw2B5FcqDK5fj7jTHCVAKJRyJ6HrbebL",
  "key2": "3Sw8MQEsNVY8inCBbf2cV667n29vxxan1dLqteoiYxxoea5vYzSux2mGrS9Rzsyt3uUYD1XLmZoE8uC7Nnm8iP72",
  "key3": "45S6hsPgHpiDjjkvVEW3HW4gsaswMtt8kVR2NEi1kmQCErAA4jZmVqswoxAhkLoXpi4A4qSEJeEsz1teGeao7JcW",
  "key4": "WJKy2V1YVo9LvtQcjHz3C1oPWpmTreftvmzXb5fMNfDwM5mLidd5AJqKz93EVfsEMN5QdtAmiwqPjsDjYvMiytR",
  "key5": "4h3iiDCfqjKa9bGyKDyaYHH87a2UKf8z3jyxPC2HAquoNygD386fkf6UTcAoe3QY23TmufbbXfJJ7htnybGK9Eny",
  "key6": "4UmmudQtBNh9Gj3A84X2BGSZ7gWSspBFP8QacHbmXMpmYS2mSPC8CdWnwoCDASEcv9WbN8NPFA4vQkuXrhduuWRk",
  "key7": "2UoFCvrTBW1emBpmhNpVTg5J6EuhxwrqqMdtjmjbcj274YdB5PGQTdvFxnXN5dTcFQHYGRGvQmxrBPkuPyz2ira2",
  "key8": "3p4vBTHgyYbpvN8PwZGz2vMe3Ai5z3RQEhHpieQyhBTmdt4hPVWa2XxPfUkxmWr4QsQbZuSaFaPFk2n5EtYpKYhq",
  "key9": "GxUyXZCCwTMACjdeBposyAgoVmeHDwiL9Z17dsr9wUcffZADohTLSsc7Rz6JdFXaybQwH11cAmu3AEyrfScm6y9",
  "key10": "4SfEMcJQgkQMP69DXjD7vcr4zddPqpNjtGMjxxwt3nvNJwcoWCVu3W8LkCn8Q2y1MsqzpVAQFLctgrUpy6Cjxxpi",
  "key11": "3oWDzGguV2E3munAcxXUmwvhGaXiRHR452BxDVmF6BbsJCXJ9bKCa9s4Yn41msSWsm8wMF1Y5KydNYMphNEW5rzw",
  "key12": "PAq9eBZQGrFGQxVbJDxRJggmcov9jZHMHF8SzTfVrXWKB6mqWDwLghPzwuqev9iBknRfQp6dUg44Lu6G5pwyDqV",
  "key13": "2i6HEbQThriiTmYoeEW5oLJiuGK2hVsQEC44bCevYwPCQaWhaFz2LhrRLoNB2KDt8xnEFJoEMgnzYKxnv8nQ54S4",
  "key14": "4tvmGs7KDTbuqUSmNBNqRMdubfJB48DRP6Jxp23MP2FkRtM9ij9Z9yozHYzioKvGp47F8pmeuvWPbJC9ckxnDazR",
  "key15": "3avUFQx378JNUUxMf12MnKDe9u7bwgxRuwRgSFYHWbtdCYRNfWhM2sUQmdT1oxUpVdm8xo2FrVPFCzaB6tKY1Lqy",
  "key16": "4L6g1SUC678qknPiFRi4WmuMWcTNuhgsJQAvo4A8WB67LBcQyKnwGfsaPvLTRqVWEJsvaUZAs9XSLqx7cRPPE8DZ",
  "key17": "4JDr8Qwi7U7JzyBjn791Gd3VRZEyJ7zu5X2Xj65Yy9tAZD1gyrp4dKVB3769WVbFmtHeWPznkArMnxPYaBXVQj2j",
  "key18": "4gjCGsTPNWMvJyaaE7RJpxHnrJwRSXv16fsTisrrb2HPYkMpRhz6gZHGNWaoSWzLBjHtkevWpXPhuC35hR6JfQGc",
  "key19": "4Q85UNwjj6Eioqj95sskV7x24sDqyH7jgAj11FxM24ZpgcasMC7LKLTcn4JgFrpGaEeYNnznFC6LLfg9uRzQZie",
  "key20": "3M3WU3JyenjirujZj48HVrEnEC6PefWDVAT4BTcS65TjEdMsVrptUbAMnYDyESiBdTQeTR8Wsind2rFD3mJNs84h",
  "key21": "3eWswMDpKQxvbM2AUDvueE5HftZU35mBbnr7m9U9x9aZsWY3QQFace3VkuSGAScxvCtiF3V9ZRhXAnuC6i7cyVLb",
  "key22": "4oBGXEfxnZcE1GM7CXvDzga8kC22YUFEgqRggZ7bjTuXSaMJXRiQHaxFfDyZ41aPQkokuKdSFFDhDG4RdNfap7dw",
  "key23": "4outCqaSQgt4ro63kkBtjTEgVS9dKwobdeGUNhJnmJT8CghXhcdY6orhbVLygoRUdLG3u6NbgWDyMv8C8N9bzGBp",
  "key24": "ZJe8qZh6G1nST9YraMRkyZzTTA3o54r8DX6CLSffiWMP61x9Aaz8PhtFgrs8z6XFVw3Q1Zt7HKPwXbebddvKENK",
  "key25": "2s2NuMZPFirdtRGDPkGPQsCe6Ywn2YfJEFakcPJxJ4tvS2WuVhcQ5KDsUEWu4ZDtqjmjB9vC5L4jzYHLRtzQKH1G"
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
