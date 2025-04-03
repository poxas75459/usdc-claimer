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
    "66JnUxQwaSfUf9SfRjwgczxpP3uGt5aDAQyeJqbjYGBcgdNRouEp1S4JaLzWQMSJeDkTwN9Jvb2LZyv6Wgc9Qrni"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Uq3R1w2aSaEsFdyX3a2s3esok44ycb4RXSb4Es8LuTMwkWbhJKjHXeLPzfmDKhTMWkG73gKQWFcrUTDFdqy9y45",
  "key1": "59PYsHZEyeZTw9XdyvzELfS3EYiHb3DAaMuyRvybRPQ9ZtPcHz11NNqDayT9KsiijHrjLPsZTqjvweSGTTfKtEZA",
  "key2": "51JS5TNh1KM5doMJLEHwFBKJ2CiRAVRdAn5jqYVsWcyqs7ttZQuJmgX3V6syRNri2bmRADgMPche7XTGgiyNdQPw",
  "key3": "4xtHT4FuijAGXY5DC6p6SEmkqN2TgT7dGoBdF9nEwoxdVpjPbsVoSSK1HC4JMgpo5CsK56YGVbpstbTYEgamHvv2",
  "key4": "4LEiK6BTGfUvCdk9QYMnL6HdUe8dNUHxzczENxU6gfZSfDPqzWGBBt2icxHqBxAnowick47GZYMNu2QZ9B3Nrc3j",
  "key5": "2VXbgZofLxkD2sjg3V9hEL1B4M2gXrMf37DuSLjySJS1mQgomdwGooEMQpoCRZuLyqpvPwMEzCXXVXs6YyubwzmS",
  "key6": "TDAnV3PRxrnTCA62rCwCeHzVXKRsLzPtncmyobHAXmr74ktrj1zh6VT3yZFAhsTsri674JL3HsdigXmXAxw6ZKr",
  "key7": "4UJGScbtTpQbvQaXBnHM3rRwtFuqUWcr3if1SkpW1se4Q7mSQBztmgTb3JfVLrJg9ZQTgZqYU6GPta9BGR5SvJ1k",
  "key8": "55AWFNWSL7YYG84oHYtALAhvWMvsuefevCSzJc1hxVCwMAUF85QFeWE6XDtoCKHq8tRovsqiAN5aaAz6gDj43929",
  "key9": "5U3UoZCPtsL7qTva3x6pgM2bMXNFHfjexBDq4CNVnLuxSoCqPp8nuwkSq5szvEcLUB7mPcvT3kvdoWS7YGc3Xi9N",
  "key10": "3Gabx5Umf7vyAMCL7DQJ6Si1L7iC72k1ufNt5Ht6vRFcsRuGbj2gkcCgmQUG9eRGmV3GcdK8NpPos3D6oNFL5Zh6",
  "key11": "4x16jvcfJyri3mqR2Bi9jZWrHh36tgxeP3ceQfNN4zFKQyhyjr7P3fsi2kALeb7J78cuJRKREyYMnEc9WGZ1vJnn",
  "key12": "3ohA29KAhfP798ujDgEJ67xSfHQE55NchYu6eQamRUzF3RUoScMosP8ZVFQ9xoLAze2cGvH5XZKJghaXGszGEhCu",
  "key13": "2swjXkpEdtGUxXkXArvewyoFxWqEdvgQ9TrWvtbYPfBp2tW1nmviPq2pK9Yx2jkXxYCEqwcbjaohCfMstdaXa1uB",
  "key14": "4VgB9aTSgBoG5hvzVoNqZSUiRhbr4DWKZgCvxk8WU2yM3XX9ALiozup69BtkyWBDrYu6hDpovD5UeXzHCb9qg5DG",
  "key15": "2YKFMtBA1UfFEX1cjyyVBtn9pDPTUaCvPvpMjYqz6sJF42Pf3dmcS7aXFspm8gJQ7uXuQSk4HnAdDivtUJh6nfEM",
  "key16": "5nk4gfVqh8cZvcZ5JieMmnEUhAeyaEZrsEuc7yhtZJEKQLFHR1E2yeLUiyW4jNTNsuZ1vZ763ub2NZGwaWWqVrS7",
  "key17": "51DC6YqW2xkjzhwsNRQhgvaYYj46LW5AiKFTgxCYy8rDJKDqcrWdsUKf2fJaufzYiyYz4Fk2AnGScMfz3BLkzoar",
  "key18": "4pRRjUYQ83od5CgoN3HQJJPA3rQzEyhNyP3UbK151PYNTWVwSxFWfhto2CWNGUzTdshpgtwSmHqatyoGtNnVvvQi",
  "key19": "2XRHtV81ajY5KdtkU4MVfLGXFutU18EEosmK1s7xyaa89SJTRbHTUVDiwnfCtcT4vfMqkGx4g3qWrUMzLwaCpBmr",
  "key20": "626vKmsMYonXUpE2TFMAQQcELPnZswHuLqk9KuP5Svdxc2ynwpehBK4HfwNC4MmZMSF3dWmho36rES8G2D7prpxj",
  "key21": "5m3TCsZsSHiUyT2ktiPQztrEamc6556cxNMCjza2rntRX4cDBhi4R1bo1D87cpe2kqPTTJZQE29XwriK2qsXN1dX",
  "key22": "5DCTvqQVo7ufVWyLr6RMViGmkGGJWbzXYEu74S8exszVur6PXgBEgi24476hb128Mcd7qYWwk8A9tj8ibu5JCVdy",
  "key23": "wPBwLwSVewPPmPLe1qcw44LxjHR8ZodzkvXuzyoCwmHWbbMFKXo5nhAoVgArihPTiAGfCsV2991ggxKsMTxjHyQ",
  "key24": "3iUUj1dybGskWMP97yhrYUKs9e3Jb3rnWmn2mQTuGEEwRzjfGHhdcEjq8P3z4oZevwJiCj4XQbMTTRwWx8u6nNjx",
  "key25": "56CmKe6HNNX6YwFTMZRMm1KUJSSgY8Gm3ZeR6inXi7veBLdbz4XApYpH27uKQNhRUsdo5ARQunG5wEUqb7FpXUpz",
  "key26": "294ArMmYtZm4Ri37jo5ZowYcpGg8QZMeYDVLHHNKr1EtmLBeqSyL9JEaXpuZiCZpBLiKxwEzDu5zZnVPbPs8fBSE",
  "key27": "3Ah9XBMCdANiqxUfQc8ufA5KLgmFEva1JaiseR1m9KNTQu7DyuhgnEQj2BPKR9SP6fgY2owL2vvyfyoU6RZCWyxr",
  "key28": "3cxsSjv2Evxni99mGxSPDS5FGJzgzAV2wCyKnsRh8DSnDKATC3PP1FRAYePhsECCUovo73o6tPXmM76m7Caci8kv",
  "key29": "4bE4MqXEgUvDzEatdnDB5drhjCyH5QoJ9mRhWAzfwELnm6YXmrrgCGZRQ1kbVDLGLvXdLDvUocXP5e3poWBj5LSQ",
  "key30": "33P5PcumRR3Usq7Hia63QdCXYpg4btkqfSMxiAYgWNkvQfCaQmvBMUnYijnwMHELMiVyeE7qtfHqptqwFjWcnXNq",
  "key31": "4kB6vfeDqxUcpdXsp2aU8tDdgzQomX238dspxMuzGLnrUKrbY7PXBqemKYcRzMDwmRfvE4Ti7t7xwqcyVzWem4QS",
  "key32": "4PQuqCuGHCNGaiyD35CFj5eeERDdyRvxW9STfHUTLeYgE2KaVQqPfp7Sc5HAguWeEiw39jhaRhtgRtakRKCaB83M",
  "key33": "4pbcVDw3fbg7LsSpLQUg1K4yuQbPtYYjBaPQWFs4ptUTdDJF3hSUfGFg4BFBxpPZjTZqrw7HmDrr8MwAipqDRCbh"
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
