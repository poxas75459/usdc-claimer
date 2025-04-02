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
    "582GTc91mtFLRAL2QRu8cxZnEerEXMxQ7RwoEiEMGFkji3xxGCD4xhhPu84gYGBBMDiAcy8sBnHuRRTewsc58CLG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PK5sbyzu9FoaTEJFCifPDncDcn1RLVw4MqhqUf8FeADrRkvFiRCwMiSenAR38Q9NKwxg1BcD9nHbyVB9P6YD39d",
  "key1": "3MXhMKytzNGkyQYtD4AdBqP6cxpLp2vVtmqaSzSRwoX1662Kq5zTrxYLK4cjZs5vcA4bNaG2sDayRmASLowS1Puk",
  "key2": "5uM4LkVbsbTAZMz1w9T1vHSNcKgdiEF2RzgQ43i2BzRTTijLCbB3HdEGpdvkkzZjtuhwH5zggLMMTipnzpavgXBQ",
  "key3": "23v5XHP27obJdFZR1cbBjHj3HtA7Lc2MpC8sQWTLQ8AU9EM9xhNobw5rMAJdc7UAEmxpnRuDird9BayK1aBgS3jB",
  "key4": "5tLc85UkKhEWxpSVQk6pHp5TdKudbEJgXGdWg6N2cxQmKnTxaytW7poMzhbr6j7LaWurpn6EQJRkiUoxecjjBq1F",
  "key5": "rYVFGCS7sPs2Tsw7zymEgaLRpVQoMUbpBeN77P7Y3YzbQG3FAQj5fZifiCDYZBNTQ723GYkXxR2XaZdxa5K6XBa",
  "key6": "32BTbP1y3qvuTRyLt3Ct7ju7Y5JQz6qJpuJBgDYWdYqTjtzH9syxVLmpKNfZ9nB13G1A2BVPhSbmXzSEAyZX8rx2",
  "key7": "4xn3m2o1wZjEA9FcXyth6PZz7rYPyJw3KufUVp1ud4NAtNnhCzGdXC8SfqdmwCMM8rzVbevpxdihvmcdZYnhPxWz",
  "key8": "CDrpWrb8bkV2JGQu2zfS1RwG4ibHB5jZPnZ19QN2j6Sco7UHeMD1oAPq5QQH77iXZ65dDkLiDnb19ggbK9ReB8u",
  "key9": "3kjv3yFpR3ADBiUd5JFBTQwtDF8SKmem8xiuGqWG3nDWoDkmxmoLJpQUZyzR8sN1UjsVxeHu7XpWKAvwosmwr86R",
  "key10": "3KNJNufo6CsGvbhZimmWuQcakKRCxk3b7ATkyNfEGPcXPjoHXNVUmTeKqRLW4LEEqDBRRvzCsU5qfndAQREHeSnk",
  "key11": "tfx3MXK2qWpfbWhAA6hYPEjDCEd1Uueee2esoA3EpzSBFmPUvnXmMyCmaxq8TdBYnkZGHKZaE7KD4qodv37czW4",
  "key12": "3khtRaw62jeoXtyJzLFb7McWvg2XLGK3N9433BagcDC1cjgQUFGsF1p2gS9PMqWWWuPU8Zxy1NG7rzW9i1y1E3SB",
  "key13": "5GBVJctzftpsb6C8yxjYpth4NgRTXiFRoK65DoVtn9Qxc5i1hYhY3RrEQNixXhbadjdpDUomenX9CVDWhXe9ZMn",
  "key14": "2r67GiM6uYrg9fbQ7rdegeXFQWbfFJns1fUhzwRe2K9pzJLXPmRaZugnq8RkMHxTsJnVbA2FWuL5FHrd14F9FNac",
  "key15": "3A5hVktsXeqGFPen4CKFhsBwAWN9Rr9PEpzyLdpUrqEZsqoe3qdziceT2nzA2UqsCoAdP36zDZmAZSz1t328Ceae",
  "key16": "5iREjtnSfzU3uK7F8Q3McMU6WMDRznSPGarmAzqNmayMrmLAsFG4zxWvWu8jY9ngfZ7jqds3M3PMUPDbH7agccmX",
  "key17": "5FMQXXv777xm35EsBWRGhgQ19NrP4VJXf7d9gRnKkShSvApiGxngbcy5ZVzPCKqmL5cvzqtjqoZjyQepxVRixuhH",
  "key18": "3zqiNhmfF1JtFiDRhBAUR8mhyVBdybELntvGuLDGTw65NANY9WfRek6nnWRkquaBQF8FgGUkC1ihpdD2m8EYrxCs",
  "key19": "NvY6JSPkaqUjJa4beCuhFFKYqMSbWSR1bvsZAYgeWcjPwKPipE1mDYcymBcFryyQbgRXRstWTc1vumXfVitvTyB",
  "key20": "3CbU1LAFpoiEjW2wcSwe5pojyG9LGZ7PiW4ecBXw2xo9Jx2WB1c7mUiggAghwFbWmhs7Y9Jmut8MWFzrC2LReT4J",
  "key21": "3FJpRuty1m3bYT1W1sgpHrkq6kdH8ra4YjyLSKaw6Ti3BwJdbTgzqnquKSx1hChty5T9ViPTJueaaTvDE8hX8MKf",
  "key22": "SQPggCHhw4EqzrGBicje6Wp617AzTnMb4nxj5JEyU9dxjCVdyA3KSHKu4zqWA69VvVRqHtYePkiTEAeiPFmAxbK",
  "key23": "551FrrwAv1So8XBWgKkojY12BgKRc6dMxhtrfBu6sBkqrwkvTB4NXz3dQpU2pR7QoupBjhXM33W2rD9E4iCTnRMk",
  "key24": "5eyX3WREhNv48PowA79uHDUz6geffZ8UX1qKpxhtNmJfUqGEyoYTuoSvVky8p1R5fK1dCixbeDpNA2iiP3vRdqKi",
  "key25": "5mdUiKNPv71xUK6PCcMf9GJ6AHLrEvMghDZS2Bdhda26edsGVQtBWDMPc2ssq2cTXT3tUCWTSopekrhkJzYkFtBn",
  "key26": "3kNv21gnbT8UtE7B33Wbx6fxHEYi6mcHyXHpFMaG2hXyEEtG7ZVuCWDH8x1Ec6gd6ab8c6GLbkG7JnLy58ZJ5BEB",
  "key27": "sA726YAAE3cSwf5YssC3AVvhjbm4HB6BX5UH13LdPGUB4BrN1hscmbA35sK5upJ38fDRJLqizvTv9naG78gzQGe",
  "key28": "3Zzv34KoJ4a8H4A7KMMDtaZvfyLdFaByntEqUPzsNu6CfqMA71NY4H6shhVjqBPRQf2mFyr7BmCCJukQU8Zk3sWi",
  "key29": "5HRSveefmtLBGheFkE1Y15VQfJMKcS5Q6HgsZntiH9eQhMyiuxU4dt8dwBWgBrjkrqhquS4YHNUUm4HvQw6Z51mc",
  "key30": "13VdVmHxgccwZCYEWapkY3dtBXVcvDFJv4ewHwChHw8TzroZ9cKNy8rp8a4jygmV54eTCD48UJCWUTcqdke8NDi",
  "key31": "5cgSAQqDzvG2Yq9wDpi9GsQge7QyMqMPXcNwmv79nXmNdxQU1JdaBsdP3UaXZvqrdXty98EbHuYvmCwvcpMAQHWq",
  "key32": "5Gkwb7Hdt7HgyfZGP47SMrqwcgR8DBRWy5DgmDZF8caBDB51p4vFZKtNDu6fjQE2N5hzPbxFZ5Z5yZ5tN38949bs",
  "key33": "vGMiZmvj9YR1ebjxcvt63JwwYveUgU8esfYWPNVn18zg5F1ibWUvuWBzLKHVVjHzEstvRvBootew5fagTvRHBsE",
  "key34": "JbM2r2hojP6vxCbJToK4w86s7aihvpm3SanVDXqtzhp3V4bvSaMsz1J7ZtVuPuiUfTYSDuPzukoFpdTj9T9GMQW",
  "key35": "5iYdmspVVUhWdB7459R3NMnEJe625UbMLM14bkacfBmPVbcAT3EFgyke8iw2akxuwFAQaNt6JJZbCg6MiVx5mwDs",
  "key36": "55CuHrgdd4b4W5QNmPk8nSixjmiX4NumgBmFkEeKBeQrVbC2MTHRqdNwwxMoeKHUb7exMtihXaqLhuhs2Af48nmP",
  "key37": "EmeTXu118osJrnNbkZjiDU9h79WGuHoSv2BYL4xWSsykMeYKFCtYQoq446KL2kLhAEf5mgUGbiyrcfPvbaRwW2G",
  "key38": "rbtsdSGsG9HbtxV6EEXT1HAGZEWQPxPzHCjTFu6P8FNTW4Jfe5LYRRLQx9qZULFVBVT9chUHB54gmDqJAsx6vAf",
  "key39": "2sKzY9feG5zFEgMonNttjyH9ecPsqwPaHttKokgPScEhFLHoK96ZwU9VrmrorHF4W1EysDRAnA1mfPiQeSxZV7jn",
  "key40": "yJYK6dSFtVPSmcyUyb8WKWvWvv2tHsBP7WDPEQ6pp6YnZHh8QRiRsYko9eHfFQLCv36HVecwiMbkf1BNShgcdAD"
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
