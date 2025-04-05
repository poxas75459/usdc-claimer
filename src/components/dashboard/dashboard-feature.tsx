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
    "3cG2FAAe9MuxoViSt7Lv6ok8XuTB7ZAHAoYxDPnjP6MvUnEAQ9KF9oYDvBwcSZCKAEH6aEELkZaEPavijDSNQi6M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NDnvJu6CjDiusQ6SfBd7RsTQo3AbDAcrrJ1rKAX3H3SztAWZk7D1kdpjvrxkNFYbC6fDe3ZqBywFozrhT5GCudp",
  "key1": "2E8BdrGDjPpgyZvCo9qHxZGqWtnyQZPSN82jfZKX6Khuz9ZjhBjTVveyjzfrM7vM9iDnfMH4qLtgrwY61f19xYH",
  "key2": "HhiTnFgXY7erc9iVPf8rCJQfFaKFpBTVm2j8VrHZBc6VeFuahCuF3FN8FD3SKYwaLPFpaBwYJhmemAr79jCUzvg",
  "key3": "41uobcdWRn3DLyHy1XxfKJbwRiVZPDu5R6hw6bH2WcnBzQQRtG162XPWVYXUa9UENsebapouxYfaXAESEmzv6mxc",
  "key4": "RUEboGxH2A485YpizUQoLtgcpkRW3QMC23b2WoZdQNBSYwFjVB5Y8NRVkJyN5LYwosU9FKYsLGb54Ww6HHi2Yta",
  "key5": "4F9Sw8xjxNxGgmmrxutv4tCz6mJDwnZzP52q1X9gsxPqCF4kQSXD844v2anXTTAR8pvyRpFi6k4CNiZDhjUEUQMz",
  "key6": "4RsbZC2v8C8ioBdFvkR8r7CttJHyTUt8zUezbioGbQq3pDGSX7mYfqVwq6faUhY9wpHyFHKScV8Nc23GfBpVxYj7",
  "key7": "5MVkjiVh3sXrA2oj4aR48h2WfKphFHEzs3YVFbiDhVWeHZNaoELd5x7gQT4XewLTRCjYSiQFDoPTmkd11D552f73",
  "key8": "4xfDFca1nhXAMSZhcoLeswhNpQBEvpsXqz7oYCGyFB7w9jHSx6w8SnJQ2Dohf2yKYBTaRBBPj97pa4VRS36zEsaY",
  "key9": "5EMcc1LU84sNMCoMTNK8Xp7V4gpLXH6vfYF9WmvrTd8cRXFHh8KT9FVZcqDVpViidmT6iP4xcfLZ9U5B6ztEW4iA",
  "key10": "2NkkFkUNFMfZUMZk1jnvM5qRfvioVTLeSHTT2UXNUC3y2p8dpNdhKw6pAzjagMDbEWQfSarENXhg7nDKjhWJ8y2M",
  "key11": "Yct76z2bAf8uACaG8kyFDfoRw6ZUeD1HhxHsiHpyPPtKFbPgkJU4noKgQN7Giec1tY3wyRb3Nj7sKegTrVYookH",
  "key12": "5SExKJokAMvRSqQWXgE1VaBxF9NMkLP9j1PHtXKuJwecbuwAZMWJnErd8zzjwpKyFQYF4g7XkByemaaB73da5GRj",
  "key13": "4jfmyivKbYRhxxgfUUov4txS12uEt5G7Uv2soxu1wczNzvua19K41721a97w2y1XnTq3d1RVjUH2JJPVSoYuYgz7",
  "key14": "4YnET7d4odECWB2hisdymjeUc9jfhxX6q9tbnnDDDr3KEoTG1VJntP51jypcFPwPbfssQdt8dveUayTgSizh4F5y",
  "key15": "4GhEMqdQaAwDJF5DHVpQbSmRijhH2e4Cxe53AzFCsVbE2ozMjZTQUMmdwzVGU7ySzVzH8gfX5y2ruM7raxBNCbNu",
  "key16": "GchYUfDttM4qyx95wqNgoyv5JeSyb2tfUcc9fcJvLfce6gwvhvYSbQSniP1JaGp43eXiaB9Ys6cgXLMGwww375t",
  "key17": "4KGKiLwz8vkhRfAYsqGDLofr5qJhajkv7sGTAacNoHfq6gMtp6smgCaftaib9zrTYscRUyseWmXUX5XPRamxXjoK",
  "key18": "4bgD4q4XGcS6wyMfnyzuGb6fGhR8CTmY6nqxHzjZDXTHTcsnjfR3wbXDcGmb8epocohyDhrfn6HrG7NdSPkYLchw",
  "key19": "QLB2dcXTeD8ErahmMnpBHPFFEAE7THmw74agi8LUP2zqnFR4rbFDR5HYVc4FGe6Q1ZqmtBC8o6Hq8EvzQkptuZk",
  "key20": "43Wn2ju6Sw3HKiPTT8Ex7Qr3hYTVfs42XVQNF5J2zjbc1rBtq83TZRPJbrU8WHwj94f8jwtfxLwTwFun3Guynji6",
  "key21": "55tu7cANhaG6KUPrDmxU1EdRJPwGUvyjreNGkjX7JETZtYhDeXKUKGtTqbTsuhDHP39CdMvmhtewLWExj9zafyjx",
  "key22": "4rPMPLCM8TwQEzDePNx3ijqkpqxsYXsNft2zxCcZNM2ZeAtgb3LQVMEuTv6DNwic4DTT3n3ycsNcC3vVU8GP9Hx",
  "key23": "huKrE5W2pJAdWUCmwT4QCRLSgfo9fDKXEYNqMrgrENnWMBZ9Ca3AkZcyxHiTWM3ohpveCqkNKje5b9bgEK8KTVa",
  "key24": "43CwLswtKLzvRUWNKHM8waPpfB4Evdn13yFW3MTREzk2y5Ar5sBMMGfVgppJtFAhSuMncT3GbPAF1i7B1RADgHA",
  "key25": "35NBYbdAPjjvBUcLzqSXQNumhNQTcBc5HdgQ4PppnSK4v8jWA6k3E7aC8HV4Rh9GJqwSSZqDumn65g88WutR6ePL",
  "key26": "uUeTz5ojYwJsRShKL6X3VUXdG6XAev7s4bjnvdyyy5hbiWo2osAVFLukY6JK28kp8i42nRphTUHDkseErD4HQcN",
  "key27": "2sJcRY2MiifgrqnWYhQX2PxrujxtJCEMen4nSkMvUfKo8rrvUe3zzScnFwNk1fkZypQYcdVRjq6CoS29sUTNivBU",
  "key28": "2AmEU87vr3n6rnN5hvJVwYk7CFydPSkYUSduQ2P9N5e3o5fgJj52PgA3krhf79PV6ssErrkUZUeWXKyoTMGXBkHC",
  "key29": "43EYP7eBgYFXm8YAZKXdsnkfS9MruQEeKubLVGM8ekmAorGGTfZLgtJ1g4xnnoMX8sUdxNyPbst35Ve5FL3CExQz",
  "key30": "mdhetPEQAwN69dxqVMNzrFLgSkw1STD5mkBxfpiQAQc6jFLUf3KmB1c5vgRmkHs2JugaXsuT74WKY3vaKYWPwBQ",
  "key31": "2PgYrRJYwdrsUEBi2akE1aheuckhvznSAUm6XUcQSF8eEARBrzv23QhXduFG6wUiW7LKM1v9x7PB1uHKw8i4t63p",
  "key32": "3tW8a2B5P571hwz4QzMqRgpK5fk9eUUZLiFVrtQyr7sbijkJzhdVypC4D1n2yDLd23VJPWBsdHmJa9MchmVjWP7F",
  "key33": "3P7ey6vDZVWPEbVWK6PQe8CQbrS5hvp89HsDF4eRT63k9WL2Pd11mc2bHEij2ABAW5zGCNdt33q6vvzt97ghjL1J",
  "key34": "Yr1qjZsa5GxgfNuzxk3VUdnu79GUENgKoNUVtWR61ccZe8HjqJEWNwdR7DL4XCev1NUKM8hKGKJn5aeCGukWStd",
  "key35": "5Q7Ltgorm1zk7vNKNG6wbB97rtqsmWMzVN7zaytxgQ2EwnSo8HUuKxJmjhTnT9TXZWPvshAy8eLYDFqPJsNdCH1j",
  "key36": "5km2HL9p6ZiDKyAKnUGVf3dxpd3bScruBVp4ghV64NLSL4oy9ZZSq5mLpdPkeETF8uJNznM3wkykDdooKMuhFMmX",
  "key37": "4VsWn8YZSR4JEiyFFfZp9WgjrzjZYGNYcHRpdRD5ZRs7GKdfqa28tRT2eyWLCqZ6Whas7JNM3pBXK5N6DZjDwzKG",
  "key38": "3WMy8PnXF6PTeWPpiKY649iaqFQjxLf46c98ptFPEYxE8iwMkPVS8AWde8wgFQ2niQcFk1Y8DAYHs8cDQe8J696L",
  "key39": "4S42FQK59YFZ9WhUSqH4SsWbSKuS77t7yCrD7jGXnKhK6Fu7bVAqjGZcxXcvEsEFS8XErVHUfzs9ZntwaNYbmwaR",
  "key40": "3LNt9jErjFaEJkt8SygM1fNNUHiFx54gbMW1ta4yCqgYuq1TozffL1bHZZU7ckUQALsyZqc7tknXnfmjHTFHD8ba",
  "key41": "5yw7u2XUVtvTT6YHZYFQtbrdTZqHCYvmtD6HVs8hrtqUuo8fN2rjYNpN6wYwmf2LZGpoyNpisYkY2NcFYCSjGbJW",
  "key42": "5RV5t44MSWcJcLBuLsAtJySbBQctx6skuoVznUBd3rVr4M5sMhjcf16QXid5EVSoa4LCU4mvQwkpTHZA7zuiPLmR",
  "key43": "3TuoqrTHCEGNoD7hV4uWMfCqYDcFyz6PhmVg7rkg9XkDavZtY1NeAwCh5NocCXZTBtCRUP8MpAB4eAtmRDSCHTaw"
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
