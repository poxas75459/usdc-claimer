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
    "3ADMTvgTCBTsct3fcPoeenqZ1oF8SCQFXXLHvqHD3cV5KEjZJ4Lu1f1q4ww7YkKnEmsXeTmJSzCNobayzHAHz74p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31Wyc47G1Jj3Rm4UgvZrzK75eM2xGJemLjfWApFjFBEogNZifD6ZuALGJZiPQmaLCFq49LXFq9xUDSJ2QwfEqmFv",
  "key1": "wG7VgKCFBSwrQh9ZBcdmyzipyDgfJ5BGzHrLA5qYnTUGUpbgnHf8Ff6N2CpwJuto3GQepscEn6FafnfyMca8nJv",
  "key2": "VnjerCxehd6pPBM7P7QLLJSVUDTxDDtcKEnvVRfSDkMS7RAq53Mf98eC3ZkdPqQTEqntUXUmHxppdnQPPUHBM4n",
  "key3": "4X7dXyRvuPJk6MFMaEa7vmAnuRdTdGajkzvBT2WfP1ZnALfTvNTgXu1C2XEdAPtHDcACEVoNGGTd5TxFzdzQMfTN",
  "key4": "3B85yqRyjb7fyGjgdmuAoRpq5efSXcg3g9Htsbdoc3rtsZejCzxaTRdHL2EbcXjhJBx6wHZ4cZ1GCC3Gc1tGodsC",
  "key5": "3GRNQvZQjpQxgx1vpvhgn1fFpkWJeosACSbeA3Xh4vus32F6YdRx1oDMB7M2qQKcZ19QgUnYDrGEdxmVPGPQCXkc",
  "key6": "5BcdVUwJKDdrgqnzg18Xo6XvzZAuhVshs2nvG898rPUorjYf7nFGy55EB1ems5UCjKpdiTe4tP3Ze5uoxKFpJAq4",
  "key7": "7ZfQ7SeMRBxnve7e8PDQbcy4f8DR2igebsKi4H4api6DoDHXycoTRbCS4QHJybdFMJAix1o4SnoEMJQMp3GTdCz",
  "key8": "5PdXSmdAuG93YV9rd9o3EtEMcSesY5kQUBvENeAtnc5BDFkJtikvusyhRs86mJdfcN5EVFJdzk9zzRTL5UB26vUW",
  "key9": "2YyLGXDn9Ts1Qrxs2EASGCjzGp4VgmzQ1EopGNiZiAvs9MsHrdVwjbZgMtfKeXdnWYreBVGW2BQQb1bJpHEEz71a",
  "key10": "4keH9g4vPzC2CpBaPzd1KCnHKzHwkbnSXzqym8iMn72xWGKXZutfCPXfRaAACBpe8KToxJ4ZCVngyzjnQxoBxhQ3",
  "key11": "3zPbnZWS7VyJCaC5NrYWEU8Yum14bdbmrqyuT9Bkm1HVic9fmBoZQVwSMzgc5bMNGMLFDdwXxxHiKi6JP9bvzcn8",
  "key12": "3oR8KNLqaPbTQyZzkw1aHJJHvBf5otNaU2FrFUEr34NMuHDWtiszK5Gq9bWxvQMnh4SCfz8teBNwMo2LMGyccwLf",
  "key13": "3daXitpTcC5SykbAUGgPnJw1nyagFsVbZ9hCos23SGZDgSWp1KzNuosDXoTPdtqfrLtuYCd9F3kuwZYwvAaSxGkR",
  "key14": "3hpfVFYWC8jQpYXUMkYgY92p2NhurVzpgGszKdEnszMZ5TkeS94KDk44XAtiCHg8QTEEmuFrJ2NSiDn7ko5QQJAv",
  "key15": "2xcJntf5xrYkwBUZRn72aVu82AiPYTbRvCKA15FUSdk5tM1cgqaq7aJsfskuD7AkkgZT8tuMGoV72Af67g61hT1W",
  "key16": "4KdCRhHy4WZZR5STxbGwgxNC8P6g1UkSMnEDCP1xMWhBxfHxyNsQQp9GkKiwiRJbdJvKhfbebXw9EQVVi3JTp2HD",
  "key17": "4WoeKdHHVuuWKZvmJLr4sa4ghcsSToeJiTKRY3ySe62YN9Gm8qWphyyDXGWQvTyM7EQTWR2dz53bum9ZupPxu51n",
  "key18": "8HuYL4gCziPfydUN2FbYiXz3mnSeRcpn4v72XbQrefWMqqyWsryoA4eqmDXneN12WPgGjPSk5ZtQkZVMXYfLPRS",
  "key19": "2hGeDXbvK8d5QHiLuj8wBfQKJRaLjeUPR3jmekr3XzRJuewLLTWv5jDn3ANuJTT4B53FdQFYmdyEvtCsd9WQkDKX",
  "key20": "J1kzAju4sC9AwsFg5z9WrLw3pyN1xwdGuRUZPcdGJer1fMTi1sKsUiwx6p6xmLwXQ6KKDnBL3wAQGdzk82t3Mej",
  "key21": "22d6v91q8EuRSGKnVxHRawvWkDh7xG5Xj6QqBCXrpwa3Qb7jmForGbK9e5NMoeZEsS6NdCF5iqsXLukfyhgF4WxY",
  "key22": "64XkP1QqnfogvZzeGGoBssCzF3vjRJcDRvB7NVoD4vMufMSbSsnBiFxxxXj1kyKorFU1vKVjdGr4Dq98JqwB2fR4",
  "key23": "3PEQcapJbTY4jjoTq1SoLH2yquEj2Wx8EuaLinGFGsPgAXhMsicatcpzdLpCwcVBw1Xrs8xfkSamuwfx5PvYzrjq",
  "key24": "SkKpsh1NWzFYXV3w6xSonSZz2EXo5KCuNq17BisJ3i9rqTHzbSYG2HRguX5kKiCqAJ8Yufr2xSds8wMutcoDTfh",
  "key25": "2ymcg3KLxq98ANRHVuedNrRpcvnXuy3wwUM1Ao2rdtgFwC1roCFdKTxr2Q6kXrQ3BdfkJJMb5f8mwoPgNFfBWZWU",
  "key26": "4PuTKYGE2J7FAQCikUthm7YbBPhkD2pBh3LnqDoQodbK9vSM3wJr4gYXbGqLqNfK1WVFxVMh81tWSTNWCqGzFmF",
  "key27": "5FUbANtNeLvdbYiX8fZnRB8XJAE3Hbnr21r9N1B7pjjnmfZWcvd9yikmja8VUmBgmomnzAaHQH3ZktCDzeCbWsRQ",
  "key28": "45WPy3UctyqXPZag1n2ujeYYng6jMWhDw4AkVVFBwiHR8uNc3uj8u9PwGbaPGYT8xCfRFMqGHAmFC8KF5J9EVxsR",
  "key29": "5ZhsTDQC56QoXFAnSiccdBqu2cjkfg1D9y9sVMjANTneg6Sh9y5CeDN1th6nvUtTVfLB71RWvP8RNQpUya2UU4zo",
  "key30": "4zprZitCZUmMSC9Ed3E2hdjU8taoU625eQMTL2CVhucctQgFgDfuEQ3XEg4fALef3tUjYjFspTjggh7zYBopeuJq",
  "key31": "4bwLQsQu2GAbM975ddZwDSsFwDtE7vurvgq2FigQq5nsAyZLpc1bspMbhcz7S5eEizCFSBBwJZx1aYyoZ6AhfpUe",
  "key32": "5pAGT9WxYL8Sh9cwiJJacwzWnfwMf9YmUxQqmjoiipFLSid4gHBdsyWKTgGL9VWAQehzYtikWRtMg1pSsjvhh3uA",
  "key33": "3G1EXzZjGwqkg1cEd3bYGPXPn5nnp89Y9xdvNv1nwU1cmTsSvQsYgwSjcJ9rH6HDVALSC8uMQmFqVbsV3Wp3wbnP",
  "key34": "4R4kqcShFvrTBwfowTn1JW2kfcgtNo7NSRbLnJGNaVbNjmzEBAyGjuQHFsgRSg9jECtctAyUJrTV1LGr5EorxdHV",
  "key35": "2tTjz7uU793jZxDtoXhpaLgEbMUzf3GsXcYyPZEt4wasRo9DYqVQe7qgTNGDDEYgvK9mKS9oJyGGMQ3vv5hS113h"
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
