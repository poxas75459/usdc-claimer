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
    "4oefgPZWuEXMh9ggVpjKPPC6DShq3VfNf1iCJCrYTdUUWmEWJFxcMn5ahSY2paaFM4PizNiN85cuQ2Vhi5c6Buk1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ntTB6EJ1hnQvqxF73bSnFBCKhBtLLtTSXWrSz8zWqGmMv6jkravnVAftpH7rw9zFWtpfWY16MAYTthcoWCVYLxU",
  "key1": "5MCeUGVfMnoVgMj7Mq31gJrQu7VBwjpvopDToP2EtNUNLDCHiTFxV6qc27EWf57F8GLmrZcYNbTuqrFBJvAqpgQE",
  "key2": "53wAeuwiTdgiN2ruGSH5vwCa7vNSE9Ky3E1N8A15MWoV28KWttvJVnkivWpBF263P6kCEx2YTVVvRznAnxMY644B",
  "key3": "62kED6xdjWPKMtQ9L7gShjaD4PdGHnq9aKNusAcjqASJeitJJN7q8HfRtXTTb5wCmfvSsK3UfN6XmK4if9XffruC",
  "key4": "vSgMa9783YNaBhLKtk6PY9tkV56m5XSRQrYEYe6r5cu6ZzChjp8BvzYiXLjQeSgxRryfkoyEFHv8bGshkqyKfQe",
  "key5": "qDi2JDR1Cvvjegj1vDXd8PPWZFf11YXp8dS3q8cdAj2vX8YsiHGDNdLW4nzciti8R9Cu6Gx7krwiRyWPAnTo5q7",
  "key6": "65ErsQ9FAnLdc5DAed6xVjjph23CDoH4XSkUFQEWJn9iUdk4Bfwp7WszwByax7VfwXmExGxh2BVtYxN12bKShrPg",
  "key7": "4Sfuen4XKVdMyaVm5UpVb2imyUK9GXRbDozJ9YfCe525j45EiQswQMAj4p9DsrayacaPy9jxHGPqTTrQNLbSYtFs",
  "key8": "5ydmbd4LJvqqFroUjpFzEdzWKgfCNr2zwDbYz4uNxZrx1gaqXuEzENdvQ4v9MbA2iWTgsfRwc4F9HpKVD28VYkt2",
  "key9": "5Uf7NveaDfFAY3swWiqoJbtCS97DTWUDXWERLeWi13wZ3wc1BDgvfKWRVAvrKYfgcgYRpuCQs7pNFRyo6Ft9YUE6",
  "key10": "mP4v7d9mVa9kjQ5dEQpbQEw6BBiJtKEm14ZZsupDTNR9mAYkt6vRBFBWpmU5FjL4YGQ7C26ZSi9pbKGVuH6EYXQ",
  "key11": "gmEvxwbzihdaGuCLGdfx6Jym3UzSc3HghrmWtqgJ8sePEJdQD4cHd8VZXqAC8rJ9esStyGyfdGF8acGEXheQexj",
  "key12": "CzJtgnZL9VVGijpxtAXwUTxuChvFeYyGHT5jqa1xFm7HpdJYTcfmeErU8ipQ3BoTTaKvVwdzPL1WPJokbddKKTx",
  "key13": "AatH8eBeQDr75NQXmDQH5Hf2xYBTxz7ZwhVJuuB8FHGrxBsxy4ZRfF5twmRDtxnYecJzbZjn6YVEpeeToB8VeYN",
  "key14": "2GEz6G8W9gcsRE51uB8wUapcFVXj98km5W3ubuieRJMSLgSs45PMZqi6qU42saKqZZEx5ZGbZmR38ZkPbvf2YKRK",
  "key15": "3FRJwxTyj5n7yCqvojcDYABkWahpYeDoakwengmGURuLiaLLggyeQCuCECLM28FwdDCKNipQUrRRCzknVwYqemcA",
  "key16": "RtNqWXRBYqnyKx86n8hfQin7CdJnBda5Wxkm6RBhYP6FxSUF2bd94XCBgrTw1u8i3anEVAaiiNRhK8AgXx83dhb",
  "key17": "52BUpA98S8hBvfStg3ccidXy2dKp6KmZ2dGrgbSwPstFudYrWFXeAVQ9Uj41jsQ85hFtnoubbNsqiMv2b9mSTwcn",
  "key18": "5m2bNmZk6zScoN9hqB9L1At668rVu7RHaNWwmQworc96sDLmX23cZt7ZrsnBpLhCQSAmhRfaS55cUAfCaXjXjcG7",
  "key19": "57qa21HxYfJcJxAMkyK4crzFGAqeLi6F8JZ56bhvF4MWLBGD5iV2teDHJrKomxVtF288Ce4jeU1xuQDLEYTtpALe",
  "key20": "4VFeHuDXoaxidgDhyVqJbd3YRSj3VQ2jwAH39JpYRascXTyQjc2pWEjChHDoQ7XBHzqPfiiXHpp78XxrsR8w4rEc",
  "key21": "34hN92RZzqwZqiYPefeLQCnANyxBchTqmcogSLxngPFQMN7FGJ9fy5ynkzJ4nW2aFxe8PFmRP4zcZkekQuLC1bb8",
  "key22": "2UKhNatZus7F3jUyGnRaeCvAb2fvkZR7s7kLFAwcveQriMSEPG9Psp94zKP6EyUPk6sNXg5qz25p7EnKRJozRfaK",
  "key23": "5Nqmpk5YQ91m6cP9N3R57k5nUPhB9uzxeQZ7LVhQz7TnXUSY6S4HWD4NZmDCest5QhEk35ZvN1T7qvJKvYNaZPyD",
  "key24": "55eWtBhPnFR2CZbbJFzwtaNuhcusjYHmhz8bsPgVx1YqShTBxrSngYc92pTEyqvwbaus6w6QsmwPPdU2wXoB1aCd",
  "key25": "4mRZDRNT7C7Ncw7mSVEQ29xGgjabDkzT1LRtBnqwoKAtxC97ozsMmLKRNP71J7PNdAwSyoJaLR66YPSzyAQKdtMu",
  "key26": "5wmZ6vMbwZGiLm3Dn4yVvkRDgjaJZ8EZPtob9LLCwGdos7dbTkLus6pWYjB81T9WDimof7ourbz4TzLksUa2r9CW",
  "key27": "4NbgipGCZ7VLq5S2uNQN49s7mbCPtgHVWmFoSrUyNyKg99fBx551tpPBApPxGsYwTNgJX3ymvRhN2ZRbqRZwuvqP",
  "key28": "2PAZLp8grJvSWYCvrCMNhjtBY5NGhViJ8YudABp7nD91EMy1aSdKWB4EhXuuBThzkmMFjuS3jWaA8dSBmcquUNad",
  "key29": "4kFh5zWNHsNyYJ18KuB7NwmB3bj1HGUpo2jxpqXvoCrb4UfbL4fLxPfC7UcAkGPsDEH4ziDzxvdCgna3N4G6eysm",
  "key30": "2TUVdKGyUXhNa3xshAEpbYg1Cyd4jhHFRMcN6p15jKgVegB3kdwgWZ5hc4BZgiX3Xw1dm1AWGjDVC7bDA2oNDUrJ",
  "key31": "2Y6aP2LWYCdTFbJKwLS3wmeA49DZ7k9J3oa38bMwdDwhUfKDkJqsRsCDN1pJHBg5oMs5ZfDEqwxcZUw9WQe8WQCK",
  "key32": "4hUDiZ7XhKvakxLsN8jHd16YoAtzwiSHxFj16gxw3VPVwBWqx8W3Gx4813LiFR7fGuBcmK4EgBM7gUXokjuRW8iL",
  "key33": "4NJjLZh2f1SJteuCvu1SMj69fsUYiWPgDkEVtSFguWMCwS1VzbRkJZSjnfPobBSw76h7LPE3j2s7wieZJyz6SN9B",
  "key34": "4HwYyWub5hDzotC2N84MnJXhtAyosTS2AWujMEbc6i4qBzowvU5EvFWAQGxtRNASB7QLtGVcd1gwJLyy6hLP1wP",
  "key35": "26stJ4NjiYPQpPg3RwYvohJ8bGcnydq2KLMX7eNidHBUSdXERFwTR2tokgEPxzNVstD2UbCBdsLJRAEgRcgw3Gca",
  "key36": "4kQ3La5dNMCBVHuzEphpLM1ZTWHb3obomXcp61D46XF2PETdjyF7JXBDXx7z7eLpzaiGcK872QRNNkVS12wqyoxq",
  "key37": "23eAg1EsM23BwQFf9Zkx9ssHfUgN47HSnFtfi3DQojqtKATwJe15jYuTGMT9pffipn2LFxnJBqEy9bvQjYon6v4V",
  "key38": "4362RLbVaqXLaszULav55zdbNCV57SQNzVU97VDNxBbC4UfQex4J4jpr4L2F5Q2tRbqNSBTwzsTKkziSJpgbTxvk",
  "key39": "534WjYsgVMkwsVfygHPGEjqihG6bpifrdhCmZsfcrHw8XZLxEDiBmYWxQ4FytX6VsooymaX7s8Hw3ozjG5he1GsU"
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
