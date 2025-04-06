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
    "36YDZB1cWYXtxzEQ713KrsHuQifBkkC6GPfSYGBUMEuAwPGcr4XxCmBJ2vKC9WWYSu8U26pzFJFrcqYcLqkFpuCa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dQBredz4Nw77dyRPTjQ3qe8xhKYdBubypV9o3JMXHARNWKr3qC5mmpRWM5fcfb2i2WpXLzKZgH7fsSAAbwMAqx8",
  "key1": "x8Nmu8NMZkszP25Awkt8njumPS3d8cHaP9rJoyF9EAB2UH3C1CtkU6pofEX71Z7eCLPSH3iY98VVgKzsHB4UFSa",
  "key2": "5MxC6BCiaKehsyjR6kjjqGr25GkRntQNMchWa9mVEgzkVqZPvbEPVeM6gyLAsnsWN8PKCRhHdbxW7b5ZNz9VJewF",
  "key3": "FWQ9JMNmr1wEvN6K1NgzuJz21Myus9cmt86zfH5P5EWwXBQmhRRoqQZkpZW6qEXKqB563qTgKhL6wazPnMLpwZt",
  "key4": "5LAkwSip6J9GsyGze64YnPQxVESH13oBhnZiVjWsg7AwjvVT7ffhLMSVbZM5RRnbgKtMB3XXS8NxgALfVUCfB1jB",
  "key5": "2vJJgywyHcmQPUgGqwrP4PTdKx7kGb6gnqJ4Jh2ys899hgVSxBphrojq8rUEiRf5By25qPgAyx13eV5Do1kzaH4A",
  "key6": "5g8dPL2qSU7FEC7oStj83vJ2bFjmDG9KwV2zsWSyhKxjESx5gpswMDz9F1JGzS3ZnF9pErUKFfNegp1jjBDx5zL8",
  "key7": "2f7VjPJnVQiRueSVKqmLQaRzNqZKKqYV8YSfn3E2w4zxHMfPR5xWY888T9qNiFByvHGnvP6xBcg5fyU4YtxRono1",
  "key8": "5BKmop4BF8TuTUzQba9egTcCD4s39htqfk4TSAZ5QuXayRvMdV7m2VcvHrJKnSCHwfKEBTnhuo3wbCAUaL2mrtrv",
  "key9": "be7d4M7Fs2kY4DFysG8V6qrfS55C3MC2DdhzXrHVyibafgcLoG6KTvpyzP97THLTTDKfwHKMbw5LRMbLoNdr5A3",
  "key10": "4MSBbeU9eDyTuQWLGMgVZLa9QaKYURrth3zh4g5tw43Yfjapj3xMXvV2SR8Qf4igqs7Woa8DSSj9PzhMQN8TdNZ5",
  "key11": "hDP3CKQX5ch8QG5sQSsPDdVaa7ER7T6fFFDmah1iqojyAEaUPpisS7ewhL1U1Qk5PC4JKyGLE7WrjMjfhBqMLSf",
  "key12": "5cZMkQsFiWDzdEMWQWHcygYUhjS8rnDj3YbvbFovin9f3ygMSMvgoTGqmPqE8AJTnTrr8jMYHxY2ctV4Ye5S35Xy",
  "key13": "5n8pc1EgyMUHQUUccP76hxFHm7UuiCQg1kkV3zLoN4vpgBcUXJ6UP1hfqgdSqdwFTvfnMk6PY6KYVfAeUEJLSm9X",
  "key14": "5voNSb1DgVaLK8RNzotaJ6fDxopRkM2eok6JF3ihrtXs249r3a3rpTcLrqoeUuYJ3uvwFANSHKYebazL31LeEzVc",
  "key15": "5cdyz9xpGjCf4nv6hgDrdB99i7LieEwCbFpA9mzYJLfhGdUzEv2rsK29YVLcnn7qXUerkNt1JqTYWNi81BT3Drsk",
  "key16": "4x6Ux5XvXDrvx6H7qnmJWRob5cEnVYkEwaF4m7Q3Enbarver4NcYqmmWiawYMNvnniUxd2rwxGw7nFGqvow88B1p",
  "key17": "3K4s4aM5DsSuyxEBBHdaCMsN1R2xFHDcDeAeWgDy8fjWVJxeQsRH7kCQ1HSYepMzeSQmCdMjFBFKLkXTXyJx7LAy",
  "key18": "5KXqm8QTfai68Z77dqtHyR9WQoXfsMY5AzeEYdhA27EwRCUHZEjjTviLPCrk3vb6Zozm2yS7FpvuD6E5zYSsVRvV",
  "key19": "DUGNg7zr7vboeJxZBKgtteeizZvfo2hNKmZB3PE9PijM8GxjSKpN1u2GLnBiha6iMLFqTAN5thp5TKQfPnoMAgL",
  "key20": "xbWZGqSszE6YDfprmsozQj8eF1V3hgynu2SVVJZbh332NgJuZm46vid5i2esHYoUdy5Dysmr8bYyworFQjm8SAa",
  "key21": "4YL9zLe6fE6m3hR32vofVjkfyigsyp72jrmcBVDupY6TfBfzHcGde1ErNhkBmpboBTCNUs6kHidZHf3ZaTGNcjo7",
  "key22": "2Xbmhc4cz2fX2BQ6YhY6m1rxgYTxx4MdeCX26DzJjNysMnwZh8nyapuSChFYmZoezMmpcAgmJvVxSyyqdMcPxng9",
  "key23": "5zeDW9cgPLnC4uUHxxMozWcJH1jjTwnFxUnhs4YaZcTdmEQ5Gny1MNwipoVx3AQn3dENHnVpdD82o7rHC5RNErDj",
  "key24": "3LLrrEkRZiDDRHgUPfRtA279UfFVC2KMieLj7QT6Ep46HM88vfHT5tJAQcpc1VhuShHeiwsb3TnqPK8s7Z1BCtss",
  "key25": "22PQjzdRsSveqz1scLURGVAd1Xbm4ZYaEFbsALaFmuvc7Hy1kEkXWwqvydZnEG1QThc83bcEAfU7zUei6Y8hmVCq",
  "key26": "4tznqLtEECZWiPhN3xSrARB4TKB1Zavv5AQocHjjdQ83uGm3EiZ34S82JmMP8LDHQSDfXuBNhi8r2fnq4EjFkqup",
  "key27": "2NY1w5oSufZTFjiD88uYmt68RLic6CE4137JYzjKmDcmLwDkS2S5hfsV9ATWF4qQTKvmcM2Vxuvy27z5rAmFQvsJ",
  "key28": "G1xwKPY5nkVSfkW6mYH28U1224PEx6sNNvwmHhmz5vAiYBR9WkoewU4F6FagcAvvEkBh75iTcAcNt6RgDGnzLVH",
  "key29": "3F6f1uweoosuzzJct1dgnx5AvvTgtFRafUhWCkFt2wUmqDAFhQS53k4LkbcuS2D4tEPdxocxJZkzp6YoJzc92S4x",
  "key30": "5Q4t5brDGkzyecRFu2LeWXdJBUMDjkEnFYHCZhhQrEBQ83yugq9dezu6kVwAK5QgFWwWDMKsKXgAaMRBy9cixrUm",
  "key31": "3zUcSDeoA9TWkYpNSzXvU5PV6eRD8kVuETDq16ExLPjzspYbwcjsXMyfBeM9k41vpXwqENGJcYv5HN1S3RNUEwX6",
  "key32": "4TYRvdqP2gVd134d5fokvxsSFnD5cPCfusa4HpESZFXvYmbYnxuC5J7SY22mbgTrR6CsvdZYRndPMXJeYjCyi11q",
  "key33": "4Do1EDNxFiA2hnqa1NSb6nMDkk3qzAEyTrjAmJomvwF1aGaXWVf7o2LUMqtuegSwoX2e29z2AvMaVRNVqbTRwgxu",
  "key34": "3WPMxM4nVKxaWiCVujDUMkJ2Wc9fd47xpwVwb9rRJPEt6MdBMB45btFJ4vmCewgN49SF3kCGQvXPZ6gkemepRaCU"
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
