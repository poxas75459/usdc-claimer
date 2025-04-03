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
    "n7BhFKqGx4tM1eHEEnqtCiRAypFiSucz8gJvg1hsatexz8BNDapME7ntuvECERutfRMyxeZt8tzx95RgrJ8jTKF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55nNvTDKykuXtmivMcgArJcJeMMwmHrD3HgkPj3jnTTPtgrTVgmURyim3CtBNdm6BiFUiEQ4hudt2j6N9cDZSuVZ",
  "key1": "3oELJfFJacQTuHZxY8JP7m8YXscQSjhEcjYj16dai7RNbNDuxHM7oCMJMrsLuEaC8Xgk5B8rqKgdg6sPqWZG6wb7",
  "key2": "53vGyJUUAgjdThbey6wjANkHEpzdXoQfXuq2WfzNq4H8oSLS2B2t3JfLg49q7r6HSuaPEaJoXsmvCMpTWwhQoDKf",
  "key3": "4shy2fGNw1PwNrJ1cfoWxe46gLHZVLpApxeQc3vvmreCJEDwf2qAW3EtvHKxv21vj5fAjMnCjvBwZ3MThXBPZXuj",
  "key4": "2x8p38LrCDAo6pQqeNs7hkFQbxhxtzokDch7J47FiSXp13LfMxfvVb1ha8SY9vSyYLW342pQ3humghfYXxWkWzo",
  "key5": "4WpG8Lw3m8e7pAHDf3Ygx3bW2FRwDdnDVa2sQmm9xSxkKzuxDitUrmpow7FKdz5HRWdrzY61HsxPtSBsss5zTGR4",
  "key6": "5tRhEiiVum96C5KvZ1QPyA6VdZftfjZAwnDJMRhNuQmrvHXtinKjo8Vnba5CDck4HzgASv5gDZMpD39sBLNmT7Gy",
  "key7": "3dxLr4CfbMwq7J19hwPq9Hx1zCEzaRQvndNGNKMiWYcyjVjQgie2Axq1MxVgAAx5kWaKfAVVfwXboRLNnrXkJV7i",
  "key8": "5Ry6vz6J268Erixhj7Xv2iRu9mxUMdj7WNduUxBPLpTkRtPRzNenk7iN4y4YdUg75nxy7amDoNNB2ghPes5n4Dm3",
  "key9": "3K25omWBru5i5JLmuSyMHa9RQsU9wm2NC9Gj5X4yB1agqfPyaQSuAxeSjZ8589odqWP5gZ8cni5RbNgLfT7CaEUF",
  "key10": "yNz7da6BxmB8jiHYiGvyh7wMa7UtyCHvtihmeDbcrrrLd92WMwC2Kr89kHqVmXR9h1TC2xC7ptDwRU4Htk8UmMz",
  "key11": "2vv1mMUpegSW8mLZYhANFAfCgrxkiJD59p7kWKtRNFBrgaRoCXJrzJojjPeEMVBnKv9MvmKzwgaqxhUdSFwL45bE",
  "key12": "d3hP3GZzGATPpRrkicAsC9yhanN5RyzmbgDnbe6PMkysgW5rXgnx3fqWKZ61heLpvSRp6C4B93s52tsdh3u2zCF",
  "key13": "4zZkREH5khiYHM7VA7zMFJhDWdEwiZaVxn4q17BWXBTwBezoiji5nG42Tg6yF82zrp16kDBpFfghJFo8rZkainoH",
  "key14": "2KKzpu4A5V9SDVqCZfWHQ3GfAECyDG9dRZmiHsDriFZL6Xg4PbtzxPuaMUK14H3GAJEoEMxqcxLzzjY1sLUri8xz",
  "key15": "2mVoVxATRJZYbFg7SDmhCT1Y2qeKXkFZgJmUZ6t2NQQsaS5PfXq5SiSkH8PdPvbCL2STYdNpzdnoaLxgKZTuuS2e",
  "key16": "2Gx2EnWY4yC96xkawhboZz4X3mFVBu2Z3xtLfBscAUj7EyYXZNs7xUP4HaHx2vTspAd4T2jFD8VPymgFDnZjrQJh",
  "key17": "2fnEmKcvFqMRBPw7ZaRzc7BQTFjp5KDH7yXDVxMHfKYAEbdfnKPcSZVXd4JEuMZdMj4p7HmheQRMZD4ZZagA6ziP",
  "key18": "tkU5nEyYWzx5T3n6eiE9h7byVP18BA2aXrauxWnJ2EXPJhCP6usqWcpawvpmb2TJjUTUken2Kea5DT3pa9TUpFo",
  "key19": "2ub6fjPtGFh9bEgJg1acGBMRWj8PpNTnmfTigi7pWAm8sbMzR1h3pTaJ8AcH5CrgHDrcjA6NsV8aMhjGs8WjegBQ",
  "key20": "46SyCmkyXiJ7SnQiwnJxVAueUGRkV896usY7feuRxvwQeT2HB6tW3pcKbQxrWH7mA6gkM4k8hYjhFN6AhRgME2aS",
  "key21": "25CCn2HLQvn5jhqjGtFhgyp9nT2K1g72qwNTSbr1B68S112ZU35u1YUKDEpdfyem7uihtkWbpUjBQZV254Ni2HFp",
  "key22": "grnLxvrvScySomdmYaonct3C5uz7ETobfQqRnisQLLZXpUs4BRQG32meke8SXUjHixc6FW67d4UwC1bEcinR9LV",
  "key23": "4ZasJvHHx8XXYN4pniuFz4X9yZipoVKGzteFdgxMSf27vgraYu6J5B3rugFd34vsmhP7AfN5gZfYs8M8L8QKTmSk",
  "key24": "ECVTpazE2Qm36mseo6Sye3jESRnJn4r9gNxS7QYGrLbB8Srjc6jq79trL9Yq8VWoasLQ9ZdvmYnsqMVZsHWa6r1",
  "key25": "CgrUPqP2ZNNmLc71zmWJZJhsb3NYsvYJimqaZDgiZVUF85E2YhUB2cmM4cwGJzEXWkK1paAntah18nb5Yj9uXVB",
  "key26": "3w32vqSWMgEhxVVSJozWesMyn6k2jwm1FrCzTUKVaqKfwVVJkyDerJXh6U3LBgxhd5nS8wFQVAssJMVseTTX8zdu",
  "key27": "2D74xo7M3JcwduFsNYzxsNS9MYTuHWsQojvvVkD34uxFVS71Vv6cawqLsTrc1pV8mVBMyzDEWhUnV3qiA7bCfEME",
  "key28": "4E8TnWHaQWejXJjVQBi2CveNWcdNMP4TfWCaZ2iHPyTSuZjUjBCTVoSiujSAZ2oKHsQSHrQH9YTev9DiriBhahdg",
  "key29": "62NwASHx2PKTUtXSTpLeGDkZViebbYmEauzcWbC243vBhjnrQ6P6fWen9XSeqFR3ALz22jLY3Aq5MHdfEEDsu6dy",
  "key30": "G5rGc6B8VyuDzphXsZ4HV2hnkmsi1gaWeKYPCrCaLrZJvXTqGQAnhyyabCftL8DRWWDBUQevNeCKQQcnVASsDU7",
  "key31": "59HqYvDHgJ2EdUarFAPgcEWbZgwQpYZnqtzoer54P8Q3urdvfrT7MEQPZQesWirAPuSkqMTciu47ntrz3AZNj5hS",
  "key32": "4rU9H4vj1G69xN4TAVjgnRVLNiHhwACghmuEQoYmTcVzbQmWqezPKrMcnusJ2KaBPWnzsmzHaH8y5Mg2oTbuQGbf",
  "key33": "iURTSasKvVwPSJNdZieEdmPyKcXqR9Mgs4HXhobraWRZpGJL4gm8zBz3Q8XRmfK9Z6aZV2tPMjH84F2Rgfm7fKX",
  "key34": "3xiFQNvpBVtBFe7CqafP8AQy1jVR2Yv6Qmra9UFDjAMXvaTCsmdfqvyVXT1ENssmfkcZyiSFQoSmtwXeHoJTWv8w",
  "key35": "3tBon2V4ofBogVuAH4qsZanxuV64x3j1iL3ed45hNKJRKnABQ7CncmgriQnrfcuJovPevXzMjehcJ8uTU5EHpjam",
  "key36": "3tgLagCKsdMZLhCvwcreKGMJgQA5UH2VCTMU2VrVUuvaMNytE1xqtmBevs2kaEP1zVigHZXMww5fPQtFYaKqYkPA",
  "key37": "VePDZ6qva6jpnday32zpinz94AtJkndBNukmkhcZuxh7H3Zt9jwdALcvx49iqysYd94Eo9YrHPFeRGDGqK7FRGw",
  "key38": "UgQjKBxtFRzqEmp6svR4VwdS7QHEsRree8L1Xp6ymAdM6SoaEP7esNXhXB41gJDvzHwUBsvuQiYNjLVpjJVwguk",
  "key39": "UKPuTeBip8G5FEMJcjvV1hJkC7oJfQJgYLkQ8CFhStcL4MQKUqizgqtGqDgSKbE3Qm1MRHUqd57a3KSQcvC5Pc2",
  "key40": "5cftDdXEUtb8Bh57iiArKHjgLAiHa3YL1zrDCkPMsnycbB82xfXEAuN96FS1eECUPVpHqyJ9P51bc86Za1viQSCx",
  "key41": "LiWi6o7oXimLAkLp7NEDQLur31YeCM7BjXJWGTNHLFNhjoCoJHJPpPBd5yeiKo2mD146S3oTXhN7wSZCTCtL4Tx",
  "key42": "22S2P8iGXGsdhBRRsjNy9zH1wrDPwFoDu9Pj2RCeTPQyyJzNe7wmucJUFnVTcJjYTVdqpBuwiHdJCZ4bN6x53szu",
  "key43": "3p297kKthuXnzQ92gNGnxCsoK3DTFyDv3tFWJXjEpKNRyD33RzjYUEC5f7Wx4bWb12KwUVLxSy55utev9spbiLQw"
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
