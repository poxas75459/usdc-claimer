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
    "2Cpeemnu5bkS6wA7RvkVkG25MtbJNXvAXs3VPunMHGviPcRPAgHFawYMbVZ3MbaqNQVasorM45NnnmwFgtdSUCSj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22ZLYMpcVhobi54EqkJoTM8FBFu6LbK5Mbhg2jkq8shcsn8cztnU8xaozAfnnCFPgEvG3nsroDYDB9mBdq7TmkHZ",
  "key1": "3UZThqgH9GevFAfxbxDQWDGyYfWojFyark4kUt1EFtJrdksg4raL5GhYrEcVYB52ibhhhkv4EvT6mjCHf1xnxbGT",
  "key2": "2SPSXtkrYDtNyWkGqiPXBdxwqWnzvUf5NeBX9FLxr5Q1k7ncH88QCDaogjSjSiRjSPDCe1Fk8C2QKk4nKGBZ3g68",
  "key3": "2usGRtvEGorWdzCqsCVFeaWk5e3HP9GbmKje57HZKpPKWqbSSjwq9jC4o5zxhzyQQoDA1k9MqWC5KTdehdGdVyAm",
  "key4": "5j4pRXZdz3PxNB175di33CtB8UXrFGpG8wVkXMU5tavimtdJG9qBGyJicaWCfq1EKGGDkkNXyN5xeE15Hc6P17Y2",
  "key5": "5UtVXRrG9j5ZSSaJt6MmRFDGLQkJnrrJPRZQTTtphwqwrrCPTYTeg151rnF6j3AdwkvLUc7R4LFN7H8aC9TRb12Q",
  "key6": "65iPzB7WkPSRdgpDxsE44QuGX7F8hrzJmWez8ZJ2pAPDnRPbeJqX9DQfZStgGCVSMhrtJ3yMeRKcwjcTRnuGPzee",
  "key7": "3rKPgHZ8ZW8W2wu4JitSxqTqCxttdkU4dbjLpA77WSozcH2YQwhE1pPtVaErEh4BrqXKP5ANqpFszwPyskG84JVA",
  "key8": "2zkL82tevtcwPDmNCjmprLCwtHiU1qj2qRTqHYJnurF2o3XZp98CSz8VwsuaEijAVeh5mdVyKG8tAAEhVfy3cKbG",
  "key9": "5zHn5qhQ8p3o1av4LeyvsBkRMo64bKyvrpSyaSkH3omZyshH13yf1cET34hm9pz27ermwTBEeM9FRSsxQgygVa8y",
  "key10": "5MznWLseCyXxgy1nTZEV7shEBD7aJYXXJn3hZNGDbvHr8SVfr66XouYm1rcz9vJWmKPRaQfZ5fjcUkuzzj3nr4iG",
  "key11": "3RbFc3zEc2a1pL75oR2j7kaP9eqCQXD9otmNhg86Hif831HzyfDq4rxpkEeyyuXEA53VQQaJMDU6PLwRPxqt27BP",
  "key12": "3stYtwR8vEJtBmaGCN2z6pUuSDf9Fziwv3LYw542gAiKv9b9rBiFiDtWw4MRYeR7AUx2iZKeuvL7xPwUr1WaZqLt",
  "key13": "2c9ScFuvKqVv9Q9FA9yWWzsmMY5acWBMeKAD8G6hiVSXdsEjLosqZR9FJUQfp1HzPkzucymkNjmnN7E41CHUHbvv",
  "key14": "4v1s2G9ytcNi8jVcYp6C3twWk2R5oVPs8HNhMhshFWdUvpH727Uup9uQ6aBWTdA27ZBNoo7gceXJcGKjBMc1BjAT",
  "key15": "xS6ewMXkoZpoMNAvQMGrD2csykHZw2ZK2MBy2iz6Rspu8aW2fVCvCT6UKrfgY4Z3FetsnBodAFeASYVN7cxBuoE",
  "key16": "5y4V94GeeTwJvE8xeZeC9Njq9Z2Vh2ZMk3uki85hGrTbeeBrmdxaWcw4x7HXeg8YGgJVavDXQEvjCaJxDASvbTTq",
  "key17": "31Qiw9vjp6aPQ746372g3kca94ot9LXNjj5Uva7RCQ84RkHBDcTiZ722VzYET3ErvNPdRMTdiFHNonPujcgRaj38",
  "key18": "MFdbAKrkLzwzJEi5yCgesCXsxwfu3YboBEAKbqFUbjy8K7MnVs6Q9ppATN4gjdDrHiQ1MPSwKv237jy5j7o3BQ1",
  "key19": "37ChGMJxsRPhAnY3Cwxgk6hUWHY3gxJpRvmVdCtXKBCd9PntG2Q6ZthMiLKF9K6eC7Jsznz33oYLP4RUPstP7B2y",
  "key20": "4RtSZnrRHoNMpBL6JCcWUqGgXtfTW8zhfmFdhL68FsLzSKBji53gzXHwGko4VDYJvaX69Rd9yzM4GBh7Ci1VWNRq",
  "key21": "3y9y5STxriazcuGBxMagsoWQ7FZ1dr6VNkej4ngzgHqgvjXBxZRkgiRz69nNp8EZjJGHY449jQKViHbJuoSfEqjB",
  "key22": "d4L3nDktkqmpGzwwSde6KtXny4eQYk7SXjX78cU93UJ9YdMRK3iSYukwU4ukLJJ7dC9bzeSJLtUxohBWt1UuTdi",
  "key23": "66kBE9Ym6WezZ2btgB5i6rysLdceoVLsNTHycwc6utvdqivMovSM13wEXJj3ZZmpqScfH2YhnGmcJ1H7oRGtZUXK",
  "key24": "5GVezSLHtiaAyXCXNXZn1ZQDBucfLHPaiGRs7fvgAPBaeUAv3EHGRrhg8p8Rhr6pkcQWKdH78ZSXvRVetNx3QiMn",
  "key25": "5fgfr3TrMPuMhCRs51eFRD5RNFtreMus8NZ2NzwuEUtVvKL8Zv3EKsoYLM2ATnGn7BLi6HDVJrmSKLw4esbfKJe9",
  "key26": "2FPqKLpfZdNXiSwNhGtqAmuxdJLbe6uk6QdQVGz8MjB3scEEnXcdG2URqGE6Sz7dPBXQYTyck18MHnxY6XbmLnHN",
  "key27": "4mZS7w3qQa7y7nigTQUtXtDWYcMXckApmi7U3xA7ZW2UfeVKZw8gRiYEbLkGStaMuxG7PbbK4APcrikMAdoL3c5n",
  "key28": "2yjkRwS2ntuLh6GYQc3Ay8X6LMCHRgcejUrxAzePZFZTpJh5J7ZSgMmNregYpDxKEzBCaf1CKYxjMqtxgJRwrDhF",
  "key29": "423gGFyv4AfWtFsBvUpTyR2DS58hFdns23QzavNhdKB6Y6EDr6YQnAsdAYckn1t12KuECq2F29vh2JQEGsPNt1SV",
  "key30": "33KRrJyQyz1xqzky1ucCi7T5dRvbAi6zbC2kKkRmiabLvFcM5bKGFytKgo2uTD28hT3eVkVjLKqANf6KokmGmJEL",
  "key31": "tH3oBfLeGCJ87pQogntnPWjLwQNSmt91jHBAoggEb4HxRv3UBFGufioha7UbJVo9kBNUhmna3P8zVJR1PJxRR4A",
  "key32": "4gfg2iqseTEdGrMnS1UkubSA8xP1c2x6mxrM4aFh2WiUUZJLeVFebo8dh3BvPLKQkHobk5sXFmTkHpXQUqsJMFwx",
  "key33": "4BbxYfotHfg3hpBgaFuqTESF9PA3L6sxrSWAnxRwAvxMM8J8yicxgKFfnbYVa3aRSW8XzQP1vqqCuboCUsDpbWxn",
  "key34": "42E4VQYzmGCNA1RfF2WV4XtPyuoqnNEL1Ku93uWRaAJznVu4BNsfoaxBfSNvYUrVabDw38EbM4cCDv2JH4QYW8kf",
  "key35": "2kmgi4CeQ53GiSDoHLHXEVR7MWY7EFq31DAVR5AfGACUwrUgiY26BDPSqq3aJRSp5gFAvzKXYcjuRz5avHUCtXWT"
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
