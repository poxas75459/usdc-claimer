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
    "64q5wSB9WZnrLShzDy8KPmCirWs6YxkSLh45q71NgbXbW7DogjyYnettTwCDdEsgiEaW2xA5csPotbw7f2wTRKKg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aiJWfz3vaWHJq6gMtJj1SX98tKBSaC2nir53DmxLMr9rbu26M2XBFNekDBcPmZVBpoZif4pNtQR5RGXeCAf9igf",
  "key1": "TzSRULPptmHmrthoGj3dqygNEaykQtVLKzY3D9QwNKbCjV7siqDpPsHh53oc8nvbyfhjXjXWMS3ahCotUTvWJLu",
  "key2": "65ZsYVWFk7aNpiG5tgaogxdn9qJcp7PehrZGTqnZmMB1rVNAKWRPbEb8gNwvrGZvsT9Z5uK4fMEVYUVDoXEr8XhQ",
  "key3": "3GS3FsUTEWDkyKABUgNk5zVFruWYeFuzhhqq2cv13GuwiJq9AvUua1MdGUW82VczUxyn9FyFVUNLWF4Mm35mTFhC",
  "key4": "6zgCghjzBhdKmYC1Q6vCYvnGQzuZ8dhP9Kag1PwngJNnU4TjjZkSiz7Djsa9bvydVzaWyGdcRgsfGmE6hUvuLtK",
  "key5": "4biEjzfcaiRPJWucKnws2cM1PdCnqUiVsfS8e9YbXhwQrsLdYuaUPUMT27nygCbP117mTCu5PXe9kU2vUA2Rnpif",
  "key6": "37mp8ccqzYRv8WyyqKz1rbmH3ovY3TFJjuttnSTBtQudBkQNbqSKjxm8WaaXD59GG3mAMeGpjWJ4szmKvVR16yvz",
  "key7": "4agRYnJuNVWXNnANmoEYbgfan3NZWahN3hWG73j6CCDqLVfdnxFASgFhvDPjZUGeZ7uJ1AebhqacP1Xk16zxLDj1",
  "key8": "5eoksjVAystC7fPf6NSEQy8JGpXR8RMweo5QzYG1eh4c6cc5v3fVBn15g9N4MbbMct5unP99e35rqm25QReqNKU1",
  "key9": "2zbqDFEPQknLdJoWMTzN5MqiQdxPnNYjYQ6yMt6T9DWJ4PJm4kbyuP8UB3n5ZxEyPWkbSdhEqfU3fb1zZ5L39xUt",
  "key10": "2cx3JbvAtNTfkt7tBnw53PDY3Ckyb3ey7mLpBWaDBhdkBNoabPSUaVtiUuWSfxHGRVRqj8U6YUZY4meLFuZfxLt1",
  "key11": "5JrBW86E3i6kdHxmvB1EN3xmbuPYt34NR6AQZhPQTRm3K2tXxcL1Ze1QhXUAMvF3SzAsDeCq4tosVy4o8paFpKEL",
  "key12": "4XbDCwL4Kpje2ewxBp5n5t9SWt9ai2SRYcKaCj8m8YjGCAoQXSMV46wb5TG1N9ms2rkzaU1MHJkhoQF75yPGp99d",
  "key13": "62rt4WxhNVaK32Qa2r8s51ZPMg6pYaC9nA7BZzAKR3yvubqaA44rAcP5sJKWvxpJCPxytgbUd7xUaQSbmSARZY41",
  "key14": "4JguFx7e3raj5QjKR91V3teaTzBrjLEWRwgYeErnMT91jqg2rmundi6oLGeJoMEAUC35YuinfNvUZoqKZR5kwdkN",
  "key15": "5xYxAmQqaqVNHtk644BXqbm3h6WDAGNrbkVWxLAiVEA46kYXMBUo2pexhQXFgeFd2i7Qx6XKs4y4ELyM94oBu37m",
  "key16": "2LbX6wFo6tVFuddY18CBvByjFaucMNypSuhSQD5diGd85keJ2mzQqJHCCsTGbBjcM1PKbdHurD4idpS3NdVpjzfe",
  "key17": "9jJp3XrEh5DTwVkWsvtFNLotiuTrztboSHPfqqemPw9LMYSgEdxTZapVqcXjfokMqWWhCUKfnas4KYtqMQCbmRj",
  "key18": "eSe7EGUu1V1pQxGsfpDemriMb8VNi6oMdYxjbiVb3i2LXkY5MM6Y2VQ97QpgaN6r6fP4p1SJfLaqscppEs5pz9c",
  "key19": "4n9aJPieUA8Lue8xDqpAw3PPVHHogCnhNXWJ5HamDUqtLNRTjCmTEJXTiux3BCfjjtV9CoRfC5Df11Z6w9Xuh6Ek",
  "key20": "bCFysMRgfPt9oa4HjgboKhGNPR6iUQXwLCuL5M24CANHUwc6s1T3fzjUiqHvuiSWewyx3S9Ssm6vQ1DzAs8bqvq",
  "key21": "3bwMqwY8dLBzDsm6Pfy53Gxzbk2iQvCLFbcLBc4Edq2wDor8RQfUEohRRMPx7yKMeQ7H687ArgbLdhckepNSbjth",
  "key22": "2kDsL7Nxut6GXenVXai8DQvtHcS1TKN6vtgF4rBqHxrMVnQAHd9fZsYusLfVi4iuZcoaddNwKMzvQej1DLqLW4k8",
  "key23": "2Fd3uTYDEzHPdr5UjC5L6KovREsHBxafGnML3zsmsE9YP9whfMXPQhofVkkbQJppuTx8dTYdGrSEY25GyPf63pPq",
  "key24": "mJKVxKsU3RgPfwZkukRaWcPNLRj9rNhmS2mimCfiyLv4CpbVgUPi9GxAEZDMErtMVuxvT3DSt2my542eK6ui7Zs",
  "key25": "3Y1j4ZaHCDrNpLdi6Lteg75yEW977e2eXEkoZz5iLECM89QEcUurn8RraDXm7qi1FoHyjdUwQwesMo9EhyCKU86H",
  "key26": "3tMeoN5v9tT1qJhxPPxphPtxushFxm5G9xQYf6oCb2TDXxtzpV5aUfBSwVm3UFY6HYSj78CSyN7EQGDrMLtsuLTh",
  "key27": "5tDTsL6ZE1p9UCMrfpFHwKRkWC9X8nB4fAkCqfrSizspE46Su1eigGwczLxdPJqej5poVV2UpJK4Zn2hX6MriNQg",
  "key28": "35hrunhxoPQfY3b1r7FaukPd5xkxg2cVuLzWKSa3vZibm2PAiRdheu6YKb91ChEtDSAsgBMQx8EQW3t2RVbZdugf",
  "key29": "48X99nEKgeN8sSotaLxKjRu2s5rycgayeTV7P1VKaGbSBKAyBaF8LMZfMUhcH4ncibfyiAe5wNNF16CRF3fXX6T7",
  "key30": "ciVNmdcpp2kNUbWg2HeS6MqaLPgZQo8ELw1ryLJhzv6xHzCEeKe8NYUropR8UJpDVDuwsjwZFAPDPAom2htgknk",
  "key31": "FbJZjLCooUQ8dAvbCtgMncgJxfGikQc6jM2pmvaaKwTPgorvaFEYQiUsioJvf3HfbdhdhWMhQRqdbPguD8BhoCi",
  "key32": "jr6BFb5AmcqEFvtECVJtSJnuPFu9dNmZC5bC1avWK59PsNrAYdFYji4YJD3Tkd47CCyvxLpy3eGhp9KfwTPgzcs",
  "key33": "2DJrZMbNWyJxC9KgKno8c2RTjaSuGrRKFHUAKpy69fcgn8nLiLGiK2wcGMXvEiK853QLN8nYryASfrptjD6yAfQE"
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
