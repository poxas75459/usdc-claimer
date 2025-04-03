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
    "2jJoNsuFzky6yccDSLVwK4QUFcFoXH49sN9sG8jfEAmxnYCcjFnKk9q1ZWTCspX5N2o6AWPUiVX7osGEgWjM3tXN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eC8288LPoXZjtuMKuv2fCT4XMtSRjo3ccMxR13jaML5iTF7NNx2EmzetBCfdos4V5Nkv8a1FPApG8ML569Sm7JQ",
  "key1": "3GgHecc7Zg4163MAdHk13oicrTpLQnp5U3MTutnDuabEHJ3Hn1EQFc8FC9r47ikoY6jrGAv2pSQQcZNYyL98ArWM",
  "key2": "2bRFxd94eHbHeWEojdg2W9dNxXfaq76yn3AYCynuUV2TB9My7RD4B3NEnM7TvvZjKS2e7ibYdA2FBSpADqHhLd9s",
  "key3": "5Sqf8a3SYyd3eRvmVMS1Pv1PN7xjxYSo81GCBF4EKX3cfofz1xb5xkhD6PDpc5wFQgBwHTB9F3ynyrZvYt8r7ZUQ",
  "key4": "2xHXdBvjZXoEdxQ2T9XrZSaSrrgj66mfYVGSgbJpDqZq37UABmBV3i2s7bfJESaE2jp7n5yjgW6bAgMEj7JJJPXB",
  "key5": "5sAAn8wbc7TecPPKkbTK521KQysM5HvY6RrFj2VYBzFEVyNjiBTvzCPiBhaxBJKdjDzfrvGUFDXVApHxardUqX9S",
  "key6": "656egxKXDjRdfvCLdJ2ZDV6MQ5iwKgn4hxCQQN1iTqHaRjW8HdRKDaMHErUJhPjMv8k4Xg3ZeDFcmznf53ShJeQU",
  "key7": "51SSWPvUFYPctu3Tfzmh9sCTwtG7KL8MXGt2QKWQiP9EWtqjsDsJ4LLxFdU9B2WGPcGhWn4CsbXJLEmGvqzzcn5p",
  "key8": "5XWEMsBTspMWeNQTh69WwJndPdBdes1FXd1eGJ6bxuBbjJ4D7TKZDBqiamV81GahZswmMeRaMTjZgj86n7Edwp9N",
  "key9": "XZgGxT1Y9wGwfsVRJFcLx15D4kyopYdMrGirGvStt2hTrrr8r6tk2Jhdrgtz7Xwhry6i6NMzjofJtJADt1pqssc",
  "key10": "2iRuS4xAWMdmaGRivyQT9LSfGE35sCi1L9VeaZsZLbsfaF1zbwYLRAJziebbEqprpC6UmrzQKA1Wq641vyriXRoq",
  "key11": "bhg5xEcSzBrN92X2VWyyVEbRcegj6q4aYDaTDGfqKYb86YdMm3tB3Ake9nBpCvf9ADWfp3Dx2hgyji5LRTNpULG",
  "key12": "2ZhaxDdn7uoRbVeD7CpCrdCNY79pRz3j8ZJpr8FXed89UsRwg1sz5Z1eGPXN2g5cdWYTT1sX96xR7A8xBXdWLTZY",
  "key13": "4LY6thMUUHeAGyCv9WzTjxEukwkH9QWqrn2wwLEwQdbR477DyDy4Xd8AVqwftffU826Tie4Mn5G2yQBV52r9fiEt",
  "key14": "4hHZMxHHLFqAXhcpHoJVXhoxmvjYTF83qzcY8oMuKoeRsZUZNcqcLymWvyhXuL5JU5DZy6GbZ8skNEX8dWRonr7u",
  "key15": "3mheWogPRzZyaPpPHALf5tKmK9nGqYob1UyLatSNNwEiSRokhjBWpJWuAYHuHSKMfw9qsZjT2CSsHX94z84KP5ZU",
  "key16": "2kEvFQHDFZPaAxFAuiPPgDEZzoAc1wCiE5jS76Z4kfJsawhQxw3RAFVdwDAvS1Lczbg7C7Ax1J7q4yJ1TkJ9GpVo",
  "key17": "5QcLa7pqjDNMJDa6ypv3REBCWcoVds69uKSjePW9XyKHq67y5iy6wLd5VVvv9jnRkMjYuzxCqzUMDvezSd1kqWcb",
  "key18": "3jGMn9SqJBBPHYQZ9RvQpZpBtq15MCJsJ5Fi94cgXQfoa3GoWfSJ2zMU5zAsSQRPQpsrj2qUi5LsCRMQt6vDHeN8",
  "key19": "5hk6mbAsStLeqkvtQ2ywp75mUgttMt5rfDjakmdUmtLA7mngNCSQ2rPPNYNYRHCs9BQbUHzYcwZRiQU61wM86a2b",
  "key20": "EaDR1pvWtum7HbLZ9JYPsch5ke3YBmFLGXjYkn5DGE4wLeFJgL3Bq3MSYgGuZsmE9fYkrXYmYffdfwPYDsHcBf2",
  "key21": "4KmA3y35BzqCy93sU65Z8oChecRPjR2w4sQ7TQeVviSXzPG2emQZ58u5QXXCnnuSQDyFu8BepMDXwSYnbcYV2PHb",
  "key22": "4MEAaZGZfawToLNSaGH9dGsod3bdPuF3xkUeppqXSsXi4dFvCnWyUZfwJ8P52eXj8HivGwvYGhTawD2ZBuJVRpWF",
  "key23": "3kUduhaecmFHs84rDTFygRebPXAzZHWXewNUhiShDj7qE86tH7G6iKWNyAwEg1ptiSYPrRCPmbjVqnCn7Ruv7jjK",
  "key24": "3knudtmrykZhpCuzcUw9iNEG6CsoHS3VZasR4MffiJ3wP3KDAsy1BdVXm2jUFYKSQpAzvpgi9MFrEkvTj7vWvTwP",
  "key25": "4FhCJXjAtzkagweMbssCLvSvBuRgwQt7TuPy3smX94KD7fZyFDw582t5zki6pMGGQHfsPwjiG5y7J99bjBdMyXoB",
  "key26": "5FpYY5iJCpatoHupysxfiLyCcwHMGkV7jgskKimnxUJFMbaKC1Zc7Fjvqvt95tv6KjaoWWpf4YfGebv8GCLwRjNY",
  "key27": "873qcC6ebjo7fEe7DFRkn2nxRXVTf2hqP6JfigeV8HRuhRjh3kDMTigJHbLBhrhpcohdCWyGKiMxmgLVc3Nu5tn",
  "key28": "2a6v4oPB4Z1ivJDE4Y8YLJTCWjACAao5GrZnd66B3Y5Y7ZQMRVd2HF9VEteTPusarqGrKJkPiLoTFYjjY1dHDT57",
  "key29": "9YeeNCCJGMjX5HfsSWDQeUDtSKJh68YXr2gEafoBSNgtGawBg1bmWj3pMXLNoLGK64BsLjH4TX7TLPNA5sLymKx",
  "key30": "LaV2G9hV6aQpbNUubP31upL23XfBjryrZCaEbM2TumGCNFoUyjbDWDsRx8EveeLgt9ngRE8Lezt1UHsoYNs5ZLH",
  "key31": "2LKWktMh16LAi3aSc83EUpqFkaCrcbFZYGi7mmNKbkMhyA6L3uhzBMtHVSC5Z84qtwS8KeFgeErGN6Renci5fKwW",
  "key32": "24yHops1p3PtUTCG1mF35cLVd7ssPS5bhdVPgsCKefb2cwtzTtMsVpx7BeeTtPebbbVK7kEEE8i7N4FtN6fZxMV8",
  "key33": "3BvupCxd5n7LEkvLWsd4fTb4MN6gBN97uX4w9HLb44RC7doK1aKV5Ho3o3VCeYgG966d6SXT7K52Rg6Bu9BVk9La",
  "key34": "BfMTyri8yHvKQtRk9gkRsCjVKJuFXnbgECxyJxYXQyrvuaLhinnuwHnpfQ4cg8memx12E3h2CHHvGYR6kgseDTn",
  "key35": "LXhHcVW69ewyWeWJFShRC5J7ajoYdG5ibNb6tUVzjm91xahmLe2gUX3iqomc5uRW8weZBhe33d7bcGoEdraiTVN",
  "key36": "58JzcFY1QAL64kZVSN7RsohESA5m1d2ZWrru69Stv1rH1UfoYMi5zq6qAVZrrETxRbpg12EgQjar5GVgJRWbPsN5",
  "key37": "3GL4MrfCDY6mM2ZukARofZySwYRP4PTjKYNYLCDpZqnHWdbGS8QxnVkK82ZU47Wp3TCb5ewcQtkRBkqTaSmhSLEf",
  "key38": "65aMJu7rwGYxWUhgprKSQiDzFPZQwN9U4LnhjV5BsnDV25GFwc2hzLM6MfuRrvbk9aSuDCWchMXtXm9Q98AhyU1A",
  "key39": "YH3B3K6iJjXTdiCCjq4k9Vvx2Si4YwXYapdVPff92k8gNwFjEMBovYwqMnjdfVRvQS7i3ECzdBJVzHMUJMqC5ex",
  "key40": "2hn2JSPpF6hzNV7hC2jSeNDKuqPvRKCJqe6ytib5p3AbUgec36qHnkKHQc8YTwXwe4TZjNniYwwLZ2iv473J3vFZ",
  "key41": "2dVv1Bg7njYkCMFmWkvGAxWHmWSstN5bzc3VYKxh5WNuxSdV4dFkN7GSRn5vuaG63XpfbHLuvqi5Cq3VmVBcXWBh",
  "key42": "5rH7iq8GBXHoAYH7Lr3jfDNxosTUBVzyR18thy1fpnHQUjqZJ1htSq2LKryiBoVfoPXvp3BFQ2kBQDNpPc1hhhwW",
  "key43": "3C5jcVJkFeJEKFVja8nLUhVCY9wn9qnouTpLFAtwgENbizbKDJR1fT8WLNNu6KA2n9QoDtU983sFxLbd3da8KVLg",
  "key44": "mTiTryJYAzvXnPnWtEQUnedTas6MJgS9TpZNBFXq1ZvzAXSVHMb3g8VuZwwEowp51G1xpFVmPGBqXF2y9BAVdKw"
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
