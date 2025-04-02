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
    "BtKY5zpu8DtwfGbMd2HtcsC79MQ3PZs2eUi48X3PXyscBnhPnizSD7Q6SNAaQuw8QpgRrGKvskcH3D3EZg8pHek"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KcVedvRfnmefwcsxtiV9yRrpMaywZZD2i6znyNk57CtniEAtgcHNs2xzyLuqQW5wjwSEyCSAqhHupALv5Z32eYh",
  "key1": "MDnkVJoxTDGPmLusBimMFzUsDtpjE4bhqAYeWn1b33fb1LioEZzAQhfUopQhswnHQXx2MXuNvfRGHqThqPY27y8",
  "key2": "nMtmr4c6XMw18j6hwDdY5DN9EzmwyH9RDqv2bc3YJoapgx41ZrBqvGHQ2WNZgvbVpKiPJSNDSjbsq6jQPCQhp2a",
  "key3": "3dUYwV6Bpqvnf4NNxAXjNitrWHWdCuSZUMaLkVepUbtu8vRfViAs8qsaaHNrbYAfDpvh99hEjGiR8JTQKhKgjTJh",
  "key4": "qTZ5KvckzFHs3XWY2thcDJMKZxMww8CCgxTv1J4meFhorHpGiRTZDE2MMSSGrtqKFJwJ1FimQXMtjpYhsr59AUF",
  "key5": "ktxxUFEVkqJTPf4W2XkQbRnQ1Aj4wm7LrzhnczWJDu8kCcrXXJvVbTbnzt6K7ky9kz4uynq6DRvDYBPxc4ue6h6",
  "key6": "2PwfEriXDMvipFxiJGEYMAEduAi95XVdP12UrJNF6juaibGXbKEAQou15rBTRFZqcaSF5sgkZsemMigjXhobhUpa",
  "key7": "5HNu5DctyPGiXTR6iuV3Zb8WrmDkQ5bw7k3tBsyjqeuSuG3XsFD94kXWM5zi6pxk9bsDcpz2bwvuVsLq5gZv9WsN",
  "key8": "3mWyrQwJJdZhkb46USXUPdwdnZpCwmiPATPgGv7bCmYRLrMKSbYK5yWLpkqbGS7ztp1f4FUBpaCYip27S3f5PZQr",
  "key9": "3HEfJfsu3xYoxBUVuycZ1stFTTwNDJkKuerPrrgmLCRbvGgZfibyMjGiekweQFZhDHELhAhFyXvaff5ZPQxCrvDH",
  "key10": "5WhWwQAdZntJtofw2JvNWniY7tC2MjGEk1WEmhGDmtKdaW2K9V2Q7LFXzUf4zBtbsU5VCBvHPB8tUoZEKYSxvLkw",
  "key11": "4n5AQgDHvtUmt5X1S4LtBk9xXuqtsefYanvoSrBWbNyg6bLXSLgVxW5kmvfzYXe2b4Yqp5hFDafYnrkNFoYCCzrF",
  "key12": "3cgnASkfHDo1NNZvZHVZitTTyWAEMD5jWKricFK8F1UyneEErWV8T9vd75j11ZXegwwxhsKGgAv9Cpc3qSXPuhnR",
  "key13": "2oMZJQXiFJHxtreASWXVwMtCYk8gKoHjRDrqLPDCD77ydTg4NViKGWw3mYyxwWbBqS5C2ezK5JcRhRNC8Zxc7tSP",
  "key14": "L97rXariZFbYUYA3jeoXMfxK9LBiJSQAiaEFEjxHMvkeiJc3GcvztQLvh8QnwpYNWWBDuH12L34CcuV4RiGFf66",
  "key15": "3aN9PyLGLDDhkv73cUMXmCkvRpwSrhvi1TRsPud9tCXH7Ao8gnR67TmqfEG59EH7ZJoMppg9jsPhoMdxpUyo2Fv1",
  "key16": "2KxwvpvwZjXY2CAuwx2KKcbQ9xiD1TP4PZn54GmdyD7hF9M3D5kkiM7jDT7kxy4vLT52iY8cXgGKc3oTp2sVVzFt",
  "key17": "3vtHvrY9i98AGvNEE7753XzQwNxqqCVTNnCa3xPVPrLcqntQv4BY17PxnCSaXpsHWEqMttUnBPDkB4qVMGqApAF6",
  "key18": "23SBWX4Gt5EUtUQZcuNQQqGVRZfKopHRnTnPNKzQg1Fnnb9fA2LeHe2JxUGNgifzRfWCxt7xVBY73W3GKeS8UiF7",
  "key19": "39KCXAHxY7NBcwnp9ofkvFKoY9RnxwfwfVLHT9qdof6gmn8HE8LBmguAHK2EJSsXGPRf4oevwJLW6U6DZ7gxFcH1",
  "key20": "2a2RSjwmcJShd3SLhrhxF3GK2AcF5YpX35T96JQJk44quEeVvPpZqexHZEAn2akcwUg7qFkbfpWcVBwgJtCqsHw3",
  "key21": "5ZX8uhF46XR9uHttfjU7FACmsZX9Q4N9YBBtJgD75pTte7X13hvnjvxwbpuYSzDdWWEdwM81oMKcYgmDQJp1x1cq",
  "key22": "2D7g1DdonPP9tgPWd3BL8Afid9Kfijzvum3Rf1EF9hfDxkZUv8yJGmUpT4kYtC9fMCcAink6dzpUnVB23Dm7yW1u",
  "key23": "2GAu1inrZGCVw5ziVKa9F7M9jtEXfXoSdXKjYvNCaxuw4TfZiyHkcyLk8ZEYPcpn8167636S9RXq1wEtYqsqxKMb",
  "key24": "j3fmc1SbFTquvgziJiT8pWQDMRzbn1x4qRBnu3iJmwhF1JER1vLXF8wpnkqMsijptJf8iLeL2X6aYd9mq7Fzxu8",
  "key25": "4gpanCrwanT3rbSSTwLvK624kNurriZjar2hgWJM79tqXQE7BH8wfaS43h3LT9TTuxQ9ZtXa9XrVGHFGh6hxFGAX",
  "key26": "4yUYyK9N46ttBz1G2vxgKAaHHvNearxNfazckHnuzbsDRwqDyckVNegtrDEbV92f1UeMfPRAdUoaG6EtPtYF5Nrg",
  "key27": "v6TSPcVk1o7ng65HTwwmhM5cwgpb1rLBg2nTeCGKYWuXqRxpGdsB5rcnN95yoP4DxnMtEver1JZyzkk9kYPL1SA",
  "key28": "5bKHd8wxyDAev55oHSa43SSFM5ch19x99qGawKutg1CeTTenVsrc8wgRJq8TJL4E4D8J6b8VfenrkMsQ3wiXVMjY",
  "key29": "25HBBqkqjXyLkA1DBUjPevHDHku8AvQvkgf3TCM4BL87iqyXdAckZevtpuHKfSs6QA1SMh5M2pXYbot4b7yKvyK2",
  "key30": "dgN5JNzvQXsampBn9JuDJY7PE7S9cFMevCZFLVxNv3z3meBHueFR5PyqJReXpTgfwsGGWiA6NgvecHxWvSPkZZL",
  "key31": "HLPaBgzppSa4hQTqHqjnRx99JQ7Ek3ZjrPQf2S8jd3B8zhSTTz8ajo1CZvdypzrF5KcefX2z5vVr7tan1yeFtzK",
  "key32": "YBcw3diSfX3mXX5GaSgsuVyTPMq5sLujUEj2W6ZAS5fbX7d2yqYvVfyAm5WHjiQCmft6VgiskTFtf5x3irzmHhM",
  "key33": "4Qvxk8qtTbnYYpa3moUBLLjVUUKhEjLASyVMoCfMFDccTBswenMKYvbcKc9H8PmpCjxupRUGSS6UhCrzLXN8RGBD",
  "key34": "3Fea2KV1yrCQPVv9XtaArUJoXN7kriUyMsgHDsZ2D1sNCKzHPjKhkt3B4enwUPgcnrD2GbovEXEGnRgC3M7zFv7C",
  "key35": "4SC9jKpuhKUpGixMskoDMvHpmokx6TbNwPcKmoJot1NfrXHfTCSUbzruixrTnfuawgth3iJXRdZmiPYYT1F1y2dJ",
  "key36": "5SPKgMUCWuygU4Y8Esz9PBuZjhSLTpgKGmHBMymKCxmNVMWUS5dTLGPag5UcyJjNaS4G8q7VerRXcuRfB42TuwTZ",
  "key37": "HjV18paGKk4HeZTv2pVQf6DxQgmonwEEvfvDMFALfbrNJPcdDN7B1DpbdgYrpXk5AMwGentViWDAtCcErFq4KTd",
  "key38": "4D8RQ9bj9pnJHd6HoXSgEYu8iqkAKs4BSKt4ij17feG6khZ7ybba4ppuNBXy4w6PpAQW2kMfNutNe72tG1CPB5oR"
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
