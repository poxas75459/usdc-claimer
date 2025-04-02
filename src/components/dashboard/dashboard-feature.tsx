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
    "4aBYdbkcXciXVzfesxJjEdQKdWU8cqXn2oUYsvVjueTkDEE8ViAfeDZiMM3ma6FzWvpC9qfbWt1AhJsUaYLdy4Qh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Jx8jbeverJr5Mse3ReN9UWP2DEh91DpASjJV1n8cYX7ywAAq3xPFqcP2oLaMU1zaAeAe5HUadNPbgsYEGDEYL4o",
  "key1": "2kxMifwQ3CxdDs7WJV2akP3ryjdg2sEb36iK3gskYKoyJfQL32BK3a7aiPxMaz5EzSNA7ftGyo3LjKoEw58ykX8p",
  "key2": "4rHmkUBD7QcCoB6buZdtBSp5scHNbhmNc5oF7X6N72wfK7aBjTKfeXjyDPz7YMuwc4zBSJ8WCGUxNMUkRXXPoY7c",
  "key3": "3t9R8MxLSLAZULLqK19KmMrLkYL7K8tYCsK8GzDQ7ByMgmSwjKKSuwQuHzhbHrnW4FwfCTiQE4awm7DPHQcx55RB",
  "key4": "2mwXCbzFJoParT6NJh2tyak5RtZDAxcadKZbSMtGumveHyfAvRNRhv1xouUz6RrF8Lz4zitXjC1eEYX4evzG7xkT",
  "key5": "4farTBmav2c7WEsJXnnk7qNcJg7LvUroFNDiQzH6vMYmUh76f2EGBnaT4dnbtSw9CvPxPxa7E7w7apaG8Yv2hLjY",
  "key6": "5aVFtP7QsiW7ViwMAbRrB5nQ1VCHkMEPF1dXid2vF5NcbRGW3VNaS7CbStbaW8bE1pnE1NQkMsj8CbuHuHuYJiS4",
  "key7": "dA3c1qT9d1VkPhn4P3aDUdGcVxuzxjeSFxSseTZBx1oxsXxvejtGNtJSvJ6cBuCzJEtHm2eD33W7q5x3TkrRXpn",
  "key8": "2GNaRgt6z5Ewf5xr7HyJuTHkphKLFNAghFtyz6jVGotZZKQ4kmeKdEShvqX6E94bMzoFjYsZAfCASrqPLqx9sqRY",
  "key9": "qutvWgnhZ9zYhPNBzgYeM7GZuFQL6jaBqPnKZX6Ns1ZbNiyVYEqnGN2w2qtn5gqJQBX1tEtFMouL3ZNJ8wXgb1R",
  "key10": "28frDcskLPZPFaBksVxjSz7tRKNvQEPzmommp8ftaJnzq3vf8njV2qgdWQhiybjahTmTtGw7fqY62c4tpmHeXztL",
  "key11": "4djbx8oDSsZDNTMsUQxSmwMmK2NT3jRkML2VuYupH5oBzN7GKUnZRy5Wxq5X3bnUnFZUVgJwVK48MEWMVRmGFKuH",
  "key12": "UM8KijKuBXDR1JeU9WxTqBa18TyP2qZZJusqWqNY5h1mnHdChUB2RPGBkAqfDQH6VNY7iAQtppmeBh2v8c3CS7m",
  "key13": "5sJSNsUaCLHNF48diZPL7RoZkiyj1Ks6cZApxAkubEfrAJzuLmdJhuZWEhA4vzt4CYEc2Ykqe8DFt9NcJE2ogN17",
  "key14": "3J3hj63fsBfjpQNiaqrJJTr9sCCFmC2K3XiY78fS3UrPFGN6giRiQvp6kuhkBNiFTtQGJf5ahCEy2JZE7sWXbqH8",
  "key15": "M3HfEdpn8Q9WsqTKJDi5qqAXtwZUWAVdyMqLWzokyaAH5VpDHqzwqUkUitXyDzJsSUpAEaaKAEuks7ExjWdeBMV",
  "key16": "4jqnqVEwBwRgPCDN4u5yVPMDsBsqf7Xm3wwXCYPzkFneeCTNU92xcYatev8vKpe5nLJB6AnFPSY4pjWuvjbbdfSM",
  "key17": "3PZPe83THdTJJJUnMxjLkGGEqr818aJBB85mrP68qL1yKcLjjEgyVPKZURkvHdp8VkMWTSgJ8Cc48DfbJSWZf8pD",
  "key18": "3KWQibjmNJ42MCKLvas3pdoHmn3wv3saVN93i4JdxVF3GAJVFQsKsTMfSczh2LvkB7i1DNoKm9gQS7oDQ1d1fXiW",
  "key19": "46moP5ipdMtA3sWvCbv7GWaJSMuDWcidApgSL8QwENgj1zM1mdnJV9XP3ur3iafwyAF5K4bkBQC4bYZXL4EA6d4q",
  "key20": "ywaEFr3CJhJtZmRD8kKwXxWFGw5mmj5h2vYEPZuVHR3xTStMjdJVKwhXCMLYY5s2xxXxi7Cx8WsmxVCcZvjWTJy",
  "key21": "5SkHkwqayqng52SiQ2PgN9kj3eddKQ1pyjGReE79BR1bnQbQx2rh44BMcEWE1Svp9Tz4417tNAddBKZnGZ359F5C",
  "key22": "uC2UwHgYkSWF6NxPWZZpgmRJT9y2RKCi1puwN5BiGpL1RJWFeaZk4VyR5i25mvqqMq2vMgmtAgdGDYubRUaK2vG",
  "key23": "3YUCi341Ct8x7dmM5T71TKuToRSzRnj1wnQQbFSLSgcXJW55VvyVm4PPtiJGiuRNtSFg25yBiKoxge1LQ95mDx7E",
  "key24": "2ENqx9oWKuDgRnXewHqRkm7AXXAui2bcQnp4dKhUuXXzZmcAv175H5mKjY9Q3tEA1YFbZN5y8m2ZUe9rAXekiYpX",
  "key25": "289crZhxSuMExKLyBQotyBURAhH1EDz3h4oKCvMruMKY7CAUqGgdqAMQTR3sw9auqh2e3jxfNNctWUDBzhLneppd",
  "key26": "2edjf2G9zAYrktVmLqF7CgEKMhhm5ZRXnqrouANkC6K4hLctUefVgE91YpByrV1ozKMVLWkadyyiLV34HqFKF4VX",
  "key27": "2SUKnoUkBqfRu747uWgCDbZodF7ogAvZJAFhn9U7DxgZ9asDybG7n3AQPfPGZcZBeeEFuuZonWu7G4uUn1ce6jnL",
  "key28": "DSienXDVNfifLXAPomxDFCqFKBX8PjJrkAbA1jtSQjUtJDab6ReEBgGYGRNHc35MnouwMbFzT86WNT7fMaFtzyZ",
  "key29": "39HfVzrAADoPa8michTxfTKV5KZ5RTm55L4mro9qFAVsB7c3YNjPYPQXdAoatiDcuFYkAb7A5wNQM9xggLhuwVsP",
  "key30": "rddVBav6pSftbtfpbBzYS8oi7JN39cG7YGHrcWdBwSJKpBoX8i8aTAzhoiMFnUxrDXtgGrFLV1AQHmUpeTSUsKs",
  "key31": "2DVpJNgG614rvzZoQ45dTSmmscfuyV9c2NFK6VrfzYk4sFw961ZnHS3CxPcyCDnKPHjEzgp1cxpVh4FWQSiZZENY",
  "key32": "3ba6x1X5hTk2CJCFpp8qepfyrYDNNkkvpFk1B7PTSd6mFpLK78bVfNJcKg2qbaNRqDX3SvCdQhHPvkcmXwUWB19W",
  "key33": "3EQcQGhk2mmrNU8NYBXWQc2Sk5xruHSrFiSbHjK6nc6AgpPfwGSaH8v6d9VfGohyGkQmHsUgHrvjT1wDrhJf4sGc",
  "key34": "5oz3cjN74T6eG3iJKiWtKu6UUWLkYqCrCewEFWtVBYGu1zFb3yj7MhHW9JJKhX6LE1h9HeuyLoho66D1H2iEqFCF",
  "key35": "4D1xmQAdd6pqxxxjeJdpaSGEq3ANG4ki751cC7xnEhcYMMgoNQ621aTXW7DSua1qSbzbTy8W7TEc116sVCfDRL9L",
  "key36": "4btNE87qS5x6gM3zWWXca1jR4srzqChXERWzvA5tvbB5XWMjXnNhzGLp1XHvs1Q2B2RgRQ726JarrG1d4ffv27Tm"
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
