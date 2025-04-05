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
    "5XvSeNaD3MPsdd7NhhFwugNsNoANuNUrNBTtNgnb3Vx7zS2jpSar7HbADbu2zPA2EfnaocaP6yruJgw5Qk9AAoQh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tCSyotYZ73iY7TC1JM6KpSZuA6SckoHnhujjLCPtMZucRrw5g5svPKLKssFDAj9uSCqLLfC9eb1YHZSZQu5m2EF",
  "key1": "3ZUeMkGeNSfEcVm7ErjR12oose4DYD5o9McMi57UQGP3kjaRrxdSm9DNrkCVPG3U3gSgCP6ZGstrcs7CfFBYh5jJ",
  "key2": "5zeBayaiFWN8NEFf4v2cHy5EvX2UPzTNw4z2pTb96KVi97Kaq3W9BENAsxZCdhLM6RXUqbPvSszePE9YXKLmnVaM",
  "key3": "vJ4fAHq3Cd2HwaG6TPjtMwcya5RTeHpUMK5BowiJoNdzDgqUXjrDZsDby79MbFNSUuwZ851DqHcfJyLAHAdQ9p2",
  "key4": "5faTmNMYdgdYocAVHMoXMvVWxTRjjmiy2qiv4oUEvvTreTNXJdp5hFuqaQZqMzZWJ6M2CWrPR4AyUKWi7zjzLY4x",
  "key5": "3WdkNcm8uEPvejhWnF2uiqevbMzLYsUgutE8SYFdVBk98Y2LRp1xKQYYV1QTG3EqaBAJ6wGwDVS6xNPzpi5UEeG3",
  "key6": "5SZ4Axc6mVUW3vmsY8QBfPU3gcTRQzzM2zhZtrfv2FTnoLGpmYxmfiuy8vRjz1ZS7qCsBSw9MwryuD5m6r9oiYZU",
  "key7": "42BCgW4Y4bzq3zu9Up3JqftAfTz6aP4q3pmKD33twZK1o3mEdjN35ystBPSeQMhB4XgaGPSiBSH9N4PNeo8Ff8pA",
  "key8": "5pKwthgEniZiEmNAm4oa3KcSTnFshUt9D9jJsFtrbbJrQ13UsfNVyPPQ3BPzPsnFsGA1rY3HTdzbuFnskCuUrB3H",
  "key9": "FMTcY3JjMzsKwVkPesWjYdCiTZfHoQRDyrQvoWwbhcBJRu4aeKU1nTvT5YgDAwDXD4mRFkEAsa9Acc3Lmc6oMoA",
  "key10": "3d3EoDrqeQBuzrbgzrNhVqnhAPx6bQmDVP2dyzRmDR6dcx3AC7kMAqFJTt7bGv9eTcqPJQsvNKXYajh7AArquf1q",
  "key11": "3Pd9sgvA1pAXJfsuwKqFfA3tcaTZjegEKassPiyjZrigyZZDuSJXMKkTT5rLAUTLM35VTnHAqvpXaQ594m9H5Q4R",
  "key12": "XyQwHCAiiACwMm5jmXinjbFNyRBxtyV23k3XyHAHJx3REm84f1wTXKMCWwLHhqRS1HaykxfUzMLFfB1oCWLyhsm",
  "key13": "4TzwiyisonnyaupmSXcwrcrF3scSqvH6imGCohZjzKiVv1Z7fZWfd2GG78exzZC6EtFbeiMKoF1ZRGi5b1nJ7qqM",
  "key14": "38KxYFRKiYnAjZGGJXzwaTfoNoBLPPQ1vNbHfN6dCaprch13HpsdBoDsLD7paMjM9BCPbv3n4czNeszffSmR3HSM",
  "key15": "4j81dHF2Hm71s3kQZwBTHGmR6AEaRPSg514yvSngbraaWzwa79AKacNnXPfTGEgu4Q4eVPdgdiPhKAuGbzLe13SU",
  "key16": "3KiAfsiV48jK9NdY4k82TmxBFDkp4uoZxonfWknDLTL6vW5fJ9XvobU1oA6JDNLQHKFijZc2PiPkxvmBDUjMFf5A",
  "key17": "5YVCB1PVy9iWC2V5aaLvDED2FajX34aPYD867ihjes1cXspGTXU1fKxEsxQwaP4kpPAJiuinaBVyDk6pya7xVPpZ",
  "key18": "4sNB9UQNwwe9t3AC5E4CG8i5cGsRdd8DZaMQER5XKeuX3sFXFXrZK8oxXuGS971M1xjWQDjuFgdenWTJ4bE6fnG9",
  "key19": "NHAQLHNDKkGw2mf25EupC8BhjFe84SGGcXvzVCzAg2w9FCFt2FYDMBm2D4XD8jL1V6CYTXF1VxM1GLCz7GL7ZaX",
  "key20": "21ZRTxPa4uVoL8JJiF11YTrLUeZgFvM7UhqwNigZqBvaZFmDMAu7riHGKsgRmzRKTLvJKU6qXBkNzVf1QKKds9NG",
  "key21": "3KD9ywxPYeBraV7AbxK6WCbUdkRh8jPHatdgFrWNPUnMcXBjGfgwWPpjiVs7gUncHNK6K7nD2zSJjaGfz8g7MyFg",
  "key22": "3kZJ7RWYkyJ1WiTAZZ1KmNoKYaHozTonxwJSeVidXDEikDvfZzsTQtawhTng9uEJKdkGrQCXoeAyAASbXN3YfZay",
  "key23": "3ZRZCpecxvR9LSxqXi3jpnsX5MAhG1tqjndBpA6tBN5gDp4kHYrcp4BhrUu5TV7yNMuSJe6gt5eNGxubsgH3Qd8",
  "key24": "3asCmUAbGrE8XQve4XbvJKZUjmpjv8H5YrF4i8BsTGLibBiPQaugfFFxfFPMZyCTwrCNntNdYp4Lujtn67Yb3aGp",
  "key25": "4ekDYuqLbtuYrrXx9dmTjLHZM1xAikZBrja1XWoQArdzQiE4xtaCazy41YMsD1R3cxwCu1uMR3P7mwn2Ny4i3yw1",
  "key26": "3eZLWhM9sNwn2MNUPRyrCKuXoWDYdx6bb1bZyZxS4XCMkyKZPvRPKMr9s6jtyXeyJCYqy2iGkomCoe7MKaAtwT11",
  "key27": "3oG5roZ56Qd4yXvEwQyEqnvgQmRSwoB4xML5yccUqVxzMtxYmfENuzKg4xwXoxhoY2FMaQPVfSHSnswu9oS8ZWjP",
  "key28": "2thcwtEZfadDA4NgyWbp3g5e23isykpgc18zrVG5eM6jZyY1wamC7u65RSR22fjmoz9SwaCK6WWgneyozXnp49Ya",
  "key29": "2fT5mdJry4rGh24Q3N7AopAoMp6YHeMf4N2kf7jS4894oh9XhC1N8mMLW1VRb3odssTRBM9GHaBWhJ2hycJevrL8",
  "key30": "3A2PuZY5GT7k3SYcbwuvMwnyLEBnNBfJkfR7TpkjQR2wEsz7kuqNvyQkBg3y6yxe983UsJkM7PipR2hX3BWLydMX",
  "key31": "5ea8RqqKyFR4HuCFEnhCXf6nEs6xzXEwqRbsvgqwG1tFWccsPBVWyqcZwZMe5qtvpcU44jGU786eTrfiYawo3BbU",
  "key32": "3bi1ozWWikmUdaveYkjhX5sX8ecvb9rYcceVH1zJshCNQKgA1HmYQsfd6FB27LVCKTrNGM4ysxhaChN2QtZ5KDXb",
  "key33": "vpUqm2Lnz3V1suh44nKwHKihnWXTy9QMb6cYR78TewiWKwxR6hfPBcp7sq8KZmnHmkMUbiZsM565y1qdz81Saop",
  "key34": "2Zc3tkxxjAM57gYuZR6pqTV6DGEUB2eaP5YEzHpezM7TnRpd7n6S3ZjpgHiQ3JnD65CGh9kk7RX73G7K2YDxVUFZ",
  "key35": "2q6SHpMdc5vVsZ1rakEK3RQUSEKwZHzLiCArXPG6QiMm6YDLqo2tJKB8Nodtsg4wqfrkRM4CnCFchtgXpcurY2Ps",
  "key36": "z1438zCmwSUCXyVdEqURjNceT1SQF6idc2jGMAPmUXTWTm1EL7oHdQwN3BwoJM5hAqY4T1oCeitqwcEfd972s7A",
  "key37": "UVB4EWs2BTJVkPN4mRorQ5xacjE7Xn5BWGB5vZLAUogyyuoiVwv8zRwqPsT1Dd9njeJpGwVMKu1nCoooVSyDkGV",
  "key38": "5cJdykGAbPwd6szVezmj8cQL1n4ze7564kMVcsydJnRUTWy7ARZW144owDuKbXLsHpS3C6ykrXqSPY9snth77dMP"
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
