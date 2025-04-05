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
    "25swMkdzEJsMjYLhSyCH41wqwgMfMwKXD8AmDoNbW52d1HL9wK8QxykRqUGgyR4E5hzmsRZ3SNCCS5rUwhXNGPpP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "233dr8jeopMZRxEBMz3ex4FEuDYbRFZvixjMhark1Wcr6F7X9bxbzW7e9V7F6Kjhh2x1tZZkk8Hd2q39jHUK8bVT",
  "key1": "452t8YQ9a9E52uda6DKPeLrdKeKY8BzkmmNXRMPTXP2FDSjV1AGuHenwjwPYFjQCMJ2oA4UQh8eqmJv4JUkmNmbf",
  "key2": "2KMZfV6gT98GVna2pYPy43BTriDgeCYzjVGKVFunsDxzaRSuKeW24DRCB9GcrrgyynPLASda7BJFGy7RkEG8ubxv",
  "key3": "4F3Fup6X9QEC4e68rTnUX6SGttfi9Fxu2sdp4iuEPgkfjg281UCsknwgNtagcHcV8xTJhxA4vmwyc2acomPmtcwc",
  "key4": "5mDgm4L6N4CdZskE4zvXCXTi3LQ9KBZDT2Lbw3LXxE7dTsSSDWuDsTtYyay5FZbzLiZCxV3b8PHyWf1psTupA6xw",
  "key5": "5u8GTqjL4sYYistFkP4ezS8GgwiuYgX8tghcVLKEjAwW6oVHqmFdUqza9ex8jPHLNENr7S9abun86rdNxjpkqmz7",
  "key6": "35Uih1wvJaH4U1aTZEuAzjCE1rQxTwqkw31SeP3gvL2cxieNgx5yTvba1qbpLbM1P9hM5MkcFYNSJqmCYDE3QiC9",
  "key7": "4G45AUMbvp1s43jo4h6PeWLUkhkLUT8iUzXhYZSWPTmuXMRC3ez6wdSh5C1x8TfSDXLws9ZKPWLq1upiFG2ZGt3b",
  "key8": "3ZdWicokbARJnWX4B8DnFcWhMBMaoZBaixiHEHUDD1VQCVV3M1EGTvE2JmUKvMkKQzJzcbZ8dDySU7gN7ZWFWsp4",
  "key9": "5kPdHyt9BuMHtimP2RMHekEMT7y1vtQxabJ4ANaFknSt1j7pHnwAvVTpdZ1rLWwhbtAT1u9hGnvPaDR7b74s1jTV",
  "key10": "5ah8X2GrUPfdnA275GxKcBzGbxRRX7exGt6wdcnMgqHEQ9y5q4kLwicxwnVjuyEgokeUycRgWqzU4Ha5MvXeShZu",
  "key11": "5jf9s3H2DUB4xy3PGqsihEmLEvv6hZdpTbCQjuf2H5dd5b4hN5jNuvqywH9XUXsgaf9By8AzQgSjkfXQNpMVE4nZ",
  "key12": "28Lg1XiNMaeGXw22hcF2ZReH9Keg5iNxZgoHeNwQ2v8xi6MYSfJcW9LioJ3AFXqWS6ai7Mrx7EtV1t4DQLsR5pmF",
  "key13": "37DMXAWeNDt3wjcFEYV4scArPJ6ox1inTGLUSwAT9AQB9MGgnfKYn5RfMoqpTrfmr9UrrTxTregLD2FwJaxmVdni",
  "key14": "3AgcTeVqo1ujSyDvMwR1t4ubakhog1qoMuPcR5Wy7mr5vq1Uaqd55orK4kPU5LfPKv2NaQHKRT7DhQvuZcjZTB1m",
  "key15": "4fnoGFhiNswAXAacApnTCRBSzSAMKya6eVcJm7ugsGpweazHBc77GemMohPc9qtnt8vuPba5nUqiZk933tfQ3ZKh",
  "key16": "2jx2dL41ePimCeygaQjNR8u4DYpHQoiagjoWXFCHXmHPD1zGUzNTYZcmsaKXUfWCNfsxFfzcPYiHMhqVp1vGPXTA",
  "key17": "524U4tpvzbN78ywt3owLu9xGSwirhH2iavGcaa4pRMuhjxi6C4raUoiTifYFZtB5EbRbkjbgN1QuGv28wwiPfYsd",
  "key18": "3a53hqZoSEAsibQU3cQ8WsUkgpg2eZGNkCAw9rWdABvZL35jbY6GsGpDHPmEzfhpQk7n3rq86zthLexnQNdiKVod",
  "key19": "4ezhJQYTUbKY2h3V7FwNiWLBxpYR73pQ2XrGDnpraqa6RwWBgXf6wA9gf7DW2qbmNFS2qvPiw1NvC34J4cpJ7fGo",
  "key20": "WDvn6VBmETjMPFS2X96WZXkxyaYr1sW2k51FxJTyceZmfsDWz4podeB2XMTYJyHet4g8UKSZwphAJuo3wgbPr7z",
  "key21": "wwLQQ5NaYaToUe2zg1KyRteZ6NPMqHQVxedqJFhqfKQs63FyGtfi8BYKurvvm4B7gv5C3TRp6xKKVCLow45TFzg",
  "key22": "3ADNwg6YZrUcsQ8oXHkXYLxRJqfhCC51HRd9VxzjuTjDyCAapNdMzh7rDcR4W1Yk4tv9zMFftQBDNrqB2D1QWcm1",
  "key23": "PKctPUHGCXxD28Wj7ytPFqqRnkQe39LQr4DnZ1qgdM1ca3S6169dGnmZofL2PS9aB344XT1nV3UuxnR3T7P5h9B",
  "key24": "485swZm6VQj8kWikP8LxtaGh8N8NNkhCT88UqGhvP6b9seuHjqf86egPwbhPGT1eWXvtVaa2taQDuu9y9MHGfub4",
  "key25": "3Kw6Qfya86NYzFNSU4GyHweuWKbYpKBn49AFyTrS1fS2o9ZpRbCcfkWrtb2mRLwKdokeS8iNDZyEmjxD9YPXUnEn",
  "key26": "BhSACUBYhunAyiaBRVKZoE7gd8mPnYbtMAH347gyndSdC5YAKbH9Yv1FRo9LDZ5EaJ8csz8aQu3DPBr3QnS2z4x",
  "key27": "66VDz13Fi22vfYZxnAjNUwtVCDxwfXF3Qpd5FKFg3zPYtnvGMiQuE8bQ7Pkepmpp62FsUeegKNqqZ5sdtwL2SZj1",
  "key28": "4g82ANgihftwwXkWF5pzLNVwEpKFpEWPQoddtkDNZaxXrYgBG2bwjjG7FYX4ygk4Ku6VjjrXKhaYrtSA2KkDdiVo",
  "key29": "5e7N5vBBn95P58XZvfkXCRNyKWsazMPxXSZdWV3ZcD9QMMFfGTz1qA7AA34198D26EpkzRQQEmo3eKqdLr9TKntt",
  "key30": "Kw9WhbsmBvXJ78Wcab2MEdoinxi24rycY3MAksBq4NpCFB1SRpbJQWagZw4EhEu1TMSbRCktosWhY48VCctatut",
  "key31": "24exh4A4xWF6pkdS8TWJjWyz9RJTMzR5ADENCFjyuweAv9rniuBit6RPkqHszhhfwvErgFVU7C7vArVKZ19G98yP",
  "key32": "3jnXxz7TpN27vB1i66MLeKjHoiGwDfyRZGBqYUqdCmH79kihAepBEsdRfDHHBCJExaz6Hp36FkTE6uwx3sUsZVjG",
  "key33": "4RYQXBJQ7JTuLUDTWEfK1PRSEPUeMxgrW3KrdM6oSwXbBVEVrJLMkcucnmsWUpWRNiPeBqcXSZpFVdntYezK54m9",
  "key34": "4T2C9ajQno1DP9b7V1DFF7sro5JRebgZ5b4PYd5ZRrPmPYwKKuobz1yEP1Jo36wpZsTpaofqiCSS3nrWCmTs3zGa",
  "key35": "3p6xm99FXx55DPgfHSDQ7BPcSTGgPYxvWenhSBGy7hsC87SS6FsVUx4kujvxZW4ZkzJPrSAEi39raXvvucPyS66A",
  "key36": "2rhaubarhV3UW8VdK772QHgYxTiohb3fdjcmgiyvZkpRpC1bQBX9zSd6UhZ1btXc1EQdrRieRH5pexXCxeWTgDsh",
  "key37": "5EQGrCswjctLZJZQT3Xtk9M9QLeKG4CwgSNQ2uSvqXDYk4mn9CDhTX5jmSQo12RJy4YsxWD6yuBXeRRDKUDGoHef",
  "key38": "4nGawXUyQFLDQCL14V2eMsF11rVqjzyLbASYmSyW4GAnCfgqVzimMt7LQZeh1pDeauEYfGXzv4tGqDfzoa7rm61g",
  "key39": "2Gx3sHJfTuRnUBosdcgBgBFETDPYoZxFza9ggjdGhijyUq434v8z7nttKHrb6PdA9kEEC3Js8JWKJjDR6NnzvqnG",
  "key40": "2GwbsZYSRWt9ek7DCqKcReT6GxGFsTThvAWMp9MnVf3ESBuiBmwwHEY8STwq9FohVWzfH5DVe11tRR7iwAZFFYtm"
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
