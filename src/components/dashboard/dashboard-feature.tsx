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
    "gkXGFLKsLMAWoJ9rVDWpgfT11anyHmumpQXGpq9nfJcYLCQUH11PM8EXbjBhXnHmo6Der96NuHoWeGRmaC1SrfR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qSENg1csfrDu3fEpgBp4A2M5ZrCwGuF5ifWUvavcov7EcXeTa7ESXGAmVU1w4tMMSDz5iQN5u3WvGh6oqWDJzKj",
  "key1": "5Agkepik1gdktdZfuqo4eV7UQFoXZrZdGRZWKSDu14nszkLomaj9ocQUm3tbQDbWaK8p19q9LuxK9PQ56MaHg2nL",
  "key2": "4vdQHu8yLpxc25prBbyxuTAM2TthD4fsjVzwvWJbbjsizBT3LC5Qy5F9HQCCaLem8uzmV1sqaRJeCkSEfj6GxUQ2",
  "key3": "dF6iaaugW3KHKsJoaPVyFuigFNYTpof3EXoGhdCgrubJQrd1FuSrbRxkhJA5L6tjEbF15s9SKvmcopkBqttKnCX",
  "key4": "5pcRSAHLXiNQEYxA7m2bKeQmksHmLxLrUJfpodcSe6BWr9CW9s2iAEPWbRPr4PUT8zmq1dCeuJMir6294BFf4DuL",
  "key5": "5U5A6Hp19qeKHukFCbUjquS66vcpNJ6HgutsSU4P5gXcLMbVwE9St1KgRnN5qWxc6YVh5UqPWhAy4iovfjVWBxDM",
  "key6": "Wti5xo6dsoouT22T7WZ9XEEVBb2BPpEnCny48h7mj1wuZbUqiY5Vvvut2dqNs9fnNerqG7u1KRxRCGmakZ3Yht2",
  "key7": "34t4CYU5jWxqiezs63W7Ho7QQr5DrWVKm1v6EuSFuWWQuLntrfLkdLZBVosNzh86d42wbAiRWS9fbpYD83fCBcQ",
  "key8": "3igBzosWtnDLRjMzCMc5vK6mKU4134DKrUnHHWiW6rMD2oSt8mSbJr3dbQAMhztkwczuSHjG2AytKkCeVvAwvAuP",
  "key9": "4E7pXgEDAYjdpViBdgcZpe2A2AYJDwRityYd15h3nqzozFK5TysBe7WFc9X4ueEF8YR3FGpVRMhsm36KMpwjrh1a",
  "key10": "4umhm8aHXmE3Tqx9Gh5eujFFYgrRjp4UFPpH1iiiCJsEZEbhM3EvraQSd8Kt1Z6G7B44HMy6JSW17DP2Pnt6Gxb7",
  "key11": "gV9qUVhmM92ZiKE8RXtS2RnYDiGijbNQiVPCfeVUTDtiE7zSfs8noQMw57g1em7U9bPJCfQCfR6rgBHZzMyAbnd",
  "key12": "4xL4s6WGvAkFbVPc7cmwqsnXckBYGix5rKW1Spcmz7guaiwLrRReGA3x5WHFqsciFQXRqf5PT4jaapk8WE3KSLzF",
  "key13": "2b13YfBm7tfwTANryCpMVkgoa1K5wK7dHPFGVKzrA5qz7DViYk1AJrAr2xMm5YNnzF7FT9ANoQWfDVfEWqqi23Pc",
  "key14": "4zzLZbYK3vUSCeMSiCW49QMGM1XxQQk7Kxm6xwfmmELRYvfVHtUpj1oEsZjprzcB2oBLfN3WYsPcfCmqV7FjqKXB",
  "key15": "2qNuc8Aiihx2mZscbA1iaFBiNFMcwCRyjTxRVpwj1A35xHWRzkxwBYSNQK7ET7ajhxySWbYGpuyFSWsJyPCCbZQP",
  "key16": "2ykM2pKKZF3EdhfuK4uNLDjY1XJ8XsMA3ecUEqdVrbyiHbYNpwsnCY7hNmTSdTe1A3ApMwVF5kWTH6y6Np7a31SL",
  "key17": "2ggN6kngUuHwbN4ta38s94JSBa9hKuq1RToDk8KKprpctwW1qMBexZrHnSvTS5KzV3Q3GZUGwVNYr7ApMCbuUR1E",
  "key18": "29qRZS3pjXXhNnbxeniXTysrKVhzKth14bPcr5f7ZKg1VzFsHFZpzJQNbVRyaUSjmrMoveEBRGo5SHxpqvzuo1JF",
  "key19": "2pXuaHAFBC7gEUk4cyZ27Hie2azYW5xpbWGN7bZ6hd2pfNYivzJWUJqnHPYi6WNqiMTtf1NxmKNeWC7KMPjjvNMn",
  "key20": "22tXvbsuCMeHPgnUGVoz2mp7Ej6CjPNmBr4nKZ8Uh3NvH3Ts5szjs65Mhx5uZUBeNkqf6mCxYbrNpxGecNyGo7t5",
  "key21": "43RzvxyjAquP5dsm3ubeKZwgkwjKomc9XoytkJ3dxzAMZPMuBrX1141yabPUdDbAdhnzLACVKY2NnuvR9E1oUPX9",
  "key22": "oAHSKaVhGaWmQeG98syW563MyAinbd14ysjG1iDCMNFbvPYvkasUEXTndtmpiGEiWJ95nsfgNNYYYXmiEyjNxsb",
  "key23": "5J82xUYzC31Ed5BjwuFDcTPPhfuYfSUojrFBFG6keA33u2z1UdZNAHo3ng7ygtmGSSpyKVrtxtNnimKufE47LqZf",
  "key24": "5kZ2CYASYFZsCD4Xk7GUL9ebbTEadtb6uTZ3Dtmbqd3xqMtNKWTz18ufKj8oc3ZbR8XaCEP5qK8z2vT3dPdpkoe1",
  "key25": "ZYThKYXVkUJW6naXw72PN5rU4pWVo7YgTFjTGn1y8dEdAiLUp5tNMVTwSmrfTyTRgKVehFhsYh1tYtH1Lj73CA1",
  "key26": "62UuGghTpTV72sMy4FCF9X8V3FJaAUyyFnNuqqpFWTeYVH4bxj4TZu7DFZuEsBHqHr79Q4c1dM79YbcdfEHJVCHT",
  "key27": "5gAvCmTRfVbHe8fcKaDBr3QJPqjjW98k8CRZUqqW5CUofziNrVpjHJZbZWkXJdc6AuaBpJ6DAouya77B1kMggqtA",
  "key28": "zSC2qBVbu2fjWYTHsTDus6Q3BrcVcKwyLsX1SoeqVpL5AUFMimW4kNGnN5RixvjRdMrofBwNSsW9EqTzv7tvNku",
  "key29": "3kPNTnzQa3HjsNUGSNxBVBA9K3Cq6mGpGgJ4r9NcewiRDJnVBj3UPqyzs7EPT8H3b8WuUmZRWAMCrjtYe6FujUo"
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
