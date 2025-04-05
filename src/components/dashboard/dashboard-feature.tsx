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
    "4JDCBgLpdWYLtiUiEHEJStdhJNBJeS9oYaJhECW5on4naSrZsNrFb1LmFsthsbzsXvFkidrfHeNDLr5orsJCez5c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i8NSQRuyPUM27nPgNxLRPB94N9pACr5xzhLNb3K8K2YGbry5K9DyZcd2Hn3XZ1VS7dvfm9bGnq4U3LYCAYE9ueP",
  "key1": "3KppyRiufUi83xeAgjhkDpSUV4FqhfGpMHS2cKsgnYg6T3zrp8UbysuCGjoEdt5ag5DEMYxkAF7ag6wWK6gX8yRk",
  "key2": "5bBQeH7iYcEQfYaVsswo98T2K8EeGuU8Nss8T7SMqm6jm7sbm7dEGUXjPZMZT44sKZQetx5U3QUKctVqipzCZUep",
  "key3": "4HiHj8PxGbYGKNjQ2SC584XSpPew2Yy519e3Xv1PMbh2EeKtx9ktyafCrNSqidvSq8v5GxmmmScFFN5aheTbs3Hv",
  "key4": "2wZDYdqk8Ake8xsuDwmaw24PUynUj9XJYXa8NAaBSQNHziEGBgpCP3T3sSJGotns71EjY1G2fNXoX2SuRTS1pCBG",
  "key5": "2LLvzFrfRJqXsbQ6ynYXrdyQqyTHEKW5N3V2ndo3AaD1nvV74vc5R9PTpg4fVnvCyYHigLe4rjFrALEV9N8K33Jw",
  "key6": "23VU52Qn1deSLrV5GXVcb3t2AcSsn1qrsY7pQPVYWgWDCDHruoJRiahKWcdLzTMd9Hhv6qd1YDxL8meGVjCDu6R4",
  "key7": "55jS1pdvbhyZUxXmrYgJnh9MBdo9PqHGgKqRJMD3JoQGKmfKJpNzSBxrbm72A5Cp8jMbpxBWdpBxsNb27MSQDqD1",
  "key8": "2qRrFYCiPvzNc6DDhFFXCjzdRAwLniTjCRxsFnVpyBN8oWDX6V89X54XKdGjTngQSJRNcGdTcrfjDheM4XsjiTTG",
  "key9": "3SYy9vpVYYAubZANZAVzsk5cuwjAJdJZt3JeyowRwacgn257Jc5eRFrAVec1AiAaqgAtxkJj5kSULStZybsBWTSr",
  "key10": "f83WsRKkbpU7W4CtG2NgTufoiK1BpXWKAAESGzRZfUA7WusbTbAEUvaDE3tf1H1BWSd25x9TVgUARxLejEvLPQV",
  "key11": "3SdCZBChWeboNz4PXEkLxdqNKGoPgnfVVq2dC5tMjC7knNhpJaCzM3LTrUF46YC34TrwZ8Y1KgnWtvcw4Z69Y5Xt",
  "key12": "3WJoSb1NkC5hV3ybJyR3HecPWXSWj1deSYbVx7kLdMWpZod2DCbjHWRjSFHuCajACJuHwAKApduFHfp4VpYF1s3h",
  "key13": "kzTHJ7r6jR6KdKxshXCTj6W2wB4hYVFozim6wiZUjwAGzxKRTBBNsTdx9xFrJJQjbzxwYUJ8bNpMMGVVpXif5v1",
  "key14": "3k1Z8mX2Q1NZTPwyzc6SkrsWAXRDe9B9jpGWnDziVMMXHzCw1bZTghVw2PTrsyK522qdmYFPMRcPUV1v1wFkewRS",
  "key15": "3ymC6qQHHsGrMoqMAratQDXJ1Dnz4g1RHzxsXF9BCBZrGzMUxPMVipHdVUSuRWxM4f2vYHCFJKCepQ1MhX84tpLf",
  "key16": "65RV9ujoKtqFciuJVhK7rAPEQ4JediJMs82cACtGMqwQjjKhM4WVdnoCRsMmC7bYMWjqzs7Ujqq9ZD2NFLY92Aiq",
  "key17": "3xFpiAJkpfGQdzV3Sewx5yZtXFATy2okZmAKuUaBrEtvDFrUD56EF6rQnaJjJiWJ9MHzeU1pU9ofmrnQpNCSKsF8",
  "key18": "4bQszFD3Mc7vDvC8EpynyFjLqQRiFpHKZ5Bbhn8MPYxwiyNk127csrkGzMY9ZoraMrqYJq8iHQ39EAvz16mosB1x",
  "key19": "3BCvbJkhsv9HYauK6nC2VcaNEnS7ty18tey5y3FwmQzPdhSrxnLkdDtAkXb9Skrih1novc5ARVUvsdSKYXM2SpPM",
  "key20": "fTDiubW2guyWsuUk1SfqYJG8LTSW3e7CtSTQkVpg8ct1orVcYJbjTTxTPFkY5cdaSm9nhBUGQR92mRhD37mK1by",
  "key21": "4JAVqDYb57RaTiHmJQQwDLe5gmaJEgzrfSj5P81f3P4iS9SQD9fRCe5NpcqgV4uAkoafZ9VCsGBeDANue2jeVfJL",
  "key22": "2XbaY93C5wQw7H2o1nRPju7SxeCCgmhkes7R6aisCucVicyVHbBQwA7HoDVMMLMsWXJSWJgUbL9GiK4K3U13KPCH",
  "key23": "5ifFudcaP38bS3hFsqahEXnJeGX41DEZdq8KAZ5v8o7LJSw2xiQwUQeqkVbAjNyUqfsdrTCFNGbQbJzrNPwaKVTR",
  "key24": "46Pbt4Beco12zWw9FFvN8S6J2RjZyMEs1W7nU26M1e9kL77owSDX2PYDY4DLWbeghCw5Y5iGoiNURZJkzTsz93HY",
  "key25": "3Lv7ZhLNwW2djmgBBtmJym25mh4HBsWfn14VaiUT4cWWGFMYJHmoxY8bpjwxdiWwrYv9JTHfwSwXKeM4XmuoEfSd",
  "key26": "2sz7eMnAC52NHkcCUC6dnkjtpBMbQGkpv2WpaLxu82FC8ref8g8tkU4HKnutiCxDweRBPEVqZtDAPr5GLqe2tkdW",
  "key27": "4RFDgoGbSDFpnTzrbXVTTFmuifYfmm4LhDgUDmd4Y6dQBnW5A96LPALCW6EPFQ3ik1RHDqTLFm5yJQn1pbESzvhq",
  "key28": "TdzD1v1zwpEazQzPJABgu31fc1WBAdMNt8tDPihV1FFrsc2cXdnt68PF2RVTbXWUDGEP2ijngojEDK4E1H18Yp1",
  "key29": "4oa3Gtvhbi3zHbwqinbgmSPFBJNP5exHQsL7XxPhENdANkP7WFD3PGDLhPveiBdMap3Zf68tqnnptAmuTTpwsvKu",
  "key30": "4ust6kVfGAzrVXwQ2haYXHsGVgLaao6XBD7UN1wbSi11h5VRSzkKE94x3nYSKF9hiwWNvziGXmQ4wcAZqr9SMwEn",
  "key31": "4En1KK6qnruDcQghbc38V33mN9gugG7PrHrBub9fJ1cjTSfvGcsdnMViQnG2WiAsqH7Q7ik1GjnfByTbB5WP3qRt",
  "key32": "5vAMMjSwpJJ3mj75dyZUGXLZBgeznBqgFmwNsTHktzKvV94raf8MBYgj7eJEFDvsC2aVprLhw41yM9oo6DAdpYfv",
  "key33": "2ibh6bHrhkau1kejfBoKt9QH3TnSSMrURpe48kYoC99czVWXJzK4aY9r6hr3qNRZW4raBotgiX8ScjmoenKX3JnD",
  "key34": "2NMMXzrGPdLQ9oyk9bv4yTFFZa8RhCbaGRfa3veuaQuKBitjzW4Nmg9mfehFqRFs71EMQP6mzatSequCmrfJmAA2",
  "key35": "3czkFxvuKu3MDmSnxosrayeoBrLiFMyYNd5q53DAxLqZCbT7TDViwmf3eyxLso3fHfKig9cAofe9JYKrdcduKj6h",
  "key36": "3GVE5y3MP13dmSUy15tkzLtJcng9wQ1Zzb3LSXevjTvAU4znjCQPaMQJEXPQteAiaWxecAcHGrvTGwCysM84yE49",
  "key37": "kvDHqw9B8GCHW2FmSYqY5Ec7krHGL688xDqkLdAv7z7CxxL8DtAwGUiVuC2aLMZpZRAJFJ6bgCzA5Noxw55gSPy",
  "key38": "THrvd38kHP76CGBzqShhUMWxx4NYn3UzgQEU5fjZ1KxqEQ1qukz64FEs5sFpQsYc6wPKpkJHfBBgQvJnxzTiZya",
  "key39": "5jtV8EynunGL1c5NcBaNqzVyNdThJdCtHaWTP4XfS4ej28ArT61Yq1yK8mhS1RSUVkkJdPjzZ1QJVfi67mFMFngd",
  "key40": "2Yb4J2D8RccuN2ZEhK5F4GdMqTG5Sks3pAk9DsGbNAXfFqLvCHGtNxNQw1DgK61aLawGSN4XexfQYNmAzwWasUZp",
  "key41": "4kyukT6xgRzdb8TjXmcHZfDJzQJT5fPxgAkST8wasCiKszAxU8wGyu6vQgYp5gBCdqnJYyN4ehcfYK3Jn3daxQsM",
  "key42": "4ZYyp2i8tMHNmEoEiVkWzKgGwZ5ExWZGDWxKXcDoScKXgv56LvoamM73Tvn2RHQ5kC27dNjVry4GKKPSMvB8wkN8",
  "key43": "27nYTUhGDaktZjvm7VNw7iYFCWh1zgZrpyfr5uE4foho6A42pPfgBgrfyT9aTbQFy38cUK3DJzipFaN9ctnmzKjQ",
  "key44": "phWcgDyv5qaaw9zewiwujKrFgfYVsmGXnnrPZSMrTw1otXNmBFbVoDe58GRcq7CikR1CemB4w2eR42Tkp8gwbje",
  "key45": "3ywhwc1Jhyip655kRu7hWziutNSbaaks3VXwy6qkaoYKU7fHRS4kBqSg9nX7UawqGqmgTZ7woqSnSu1tBgCvnGcg",
  "key46": "3yr34ExvyD3LPPQekJFQzJt8ECnkmQNfdvbMYLyAXmpLWDmUxs6EfhcjapTSJXKaRAHu76ddHaKtoYZfyYyYCnY6",
  "key47": "2NSo4roj2Khbsfzz3YKELj7jLJ4CrfGuo6rgVKxm7fbSRHZuqzJTgKSBSwofEqN4HxK3mHJoqBSEDB5p4ikaN4M7"
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
