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
    "4ZjPS69LAUHKGVL8D74PD2bZGzPhAdCMjiZeeJZAuuDFxnPXS4pLcLfdQKFxfiAtEUC3nQg2sadUEW3xL2afYhCe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MQJ2jyZMjzDqmyLAy7SUboFJX9Nkpx1h8WZFaFjGrKD7rYRodfe1B72wTGoFVyf3p9ivZSCHfe397839faPqRSD",
  "key1": "66BwJiVUuJVHDRiyB1NCTYunijwfdzem9rdRnzyp9GyexrvGDngMEQCYEKshGZpgug1hDj2dbjNUtdbVTmLKnaCS",
  "key2": "5yBYqnYtsZTfMEuZdo3TquawdWxFDdEMvJjyXkVJYVukYwaSQSoBmB4py4bSRQjveFTMNu2AzBTEfbs9VK26TQni",
  "key3": "4r8mwKm3hS4ETijjePD99m44H6dFx9f7PBbBYfGLtq11imnagqmhmipm3hCpGAaYjxzmnQTJa4gXDJKhS48z4Zjh",
  "key4": "3ZSmAjMeWbhw9oEQbh8cXVwAnu5SxK38tXgPmFJrhEPc98rVyFMENgywiDkjiP9Jwb9pYWSsHaZxQPsPQstyHSix",
  "key5": "4pAUJrkDt4x5yC3Ed5cwPgYi1CCWFrCKjY1r2xvHTXVF2vFzPsCrqBgS2VETphQeR4AkbFi1MeZwcgor4Kbhc2F6",
  "key6": "4vLkoWk247gfW2HbQ4TjBGX7cFgBhujiHya398gwahiQggL377mprzXZFyB4761oWP4fXjEYy1cGPVDktaSJz9fj",
  "key7": "2UETMZV4DdFqz1KT64soTVw5RmBbAoivJQFK9QrUYzekEAVz1iiUdF96MMJWz11qgLmoND5PfdMj2fxBNPZ2bYJu",
  "key8": "3eWF95kmsdudbmGe4xEEL8K852cRrhQs6nvjismtkaNRjgi4p231f3zhX8YZsUz7SAaW2iqPHhS32g1wo7yrMRja",
  "key9": "2EpZhYnAa3EpoSMp4Bi42neAhfWr5SfP8VsEoQ8AWjo7iP71M174k4nCzvqWSDkCpuvYvzoevuTgBwrXyknDRNjj",
  "key10": "4SbC81xmcs3sPPgbMBQCn8wViEqVUDAKGGkJ7CzWTdZu5cP7zVzkqK5Bn7WVoDnidNk3xwx9mKxCSNqDtTJY4778",
  "key11": "3cnwJU9bN7gB76y8BZ7DGDKjStAJR4jEkeNmxwRhSyd9FhMG1mRqtX3QrbCgcA2QXY9v3DHrdLky4vx29HuSnbME",
  "key12": "TXHpGiQX6gR9VH8zQn5zKCsGKwSfXAjXMpkKM1iTqcBR85uEemKQUq21UZPbcPAxQrqJqsrDRRf3GNpZ51y5mdo",
  "key13": "743Yw8sZRMkFgLJ3UgKgRWshYweNdPAKUqJARVPbryeTfeMGb7ScYuvfdyJwJXsWZ6BTD8BciH4MXSZR4qkWZQT",
  "key14": "1RtjGqqVTqpND7iqpHd52o5zJEDzd8ZpD1i8g5VNaJQzBJBNqd5eEQJqJUNZ4ZW73sDJ5cytZMeeTADCtk2qjJn",
  "key15": "3iLeDY21xee7PpGeaXnQsCTbtR8KgqyAkzaoP4LzoPVvMG4Bs8M3K7LYbg33eLSMvVzUK38jxQXKxFhcGcYZVGRN",
  "key16": "3heJBk6sAikLf7cDptdoiMKyx472ijJiv4hj8Heu7rAbr9VGDsqY1Zko5ACF3j1xUk7rw2aivCDsx8tD2rEG6N8a",
  "key17": "2A3a7q8Tk3xMrN7p8RLhmnNNpi8W1u9Gb7riatpExMNKjXBSc7pmwUcPwN4nZCa2fFp595rg558CCKn4wzLmkrQn",
  "key18": "4gaFj6L9nPfBLof9AB5azCYHTWQ8dcBBbqW5AF4JjuFSWK71rqnTAiQ46c6NL94S6vmZTdSPHPhWgE4iN2wP5eMT",
  "key19": "3bLH8crAuN8hm7gePqmuYEuVVDvMDXkmejkPy112KwZ1svb5zyL8smvgLUhgaugFFJmCTtwLdfs8Kvqxj5yCoMjk",
  "key20": "3QuQ9ajJGjaDFQKuVX58SFPV7m5VUMzuXodGVFvn98WqnJc6VjQXzqmyMLLBw1a32idyVWWAaGxgGL9E8gJCL1be",
  "key21": "TLDYpDTB1L2CEAHDzpoGnDR9j68qWgBR9nCV81gbauMDxVgvURpUe7K9u51MaYeeeYSTFHgiGBe6jBHf5Qnhcc3",
  "key22": "2xN86yhz52of7Jyn4SwJyvbfCUG1VhrGFnBu6W1QqjcCTxttC6LG78YdxM7QsJZHtRBxAFxsfNwDG3PoAzvu2gi5",
  "key23": "5mHhZzqniDGjQ5utpGAeC18TGw85TN1YFZ9haxtDko9XQSN7FMcVJLuueDNZQifQ12RD2zQu2phprZSwL4PxsNWy",
  "key24": "3P1HU1hFsi3FkoEZqHDcPHiov8gLtxRRnvMkzQHuKsqvzRqZWYNybkkDmwLLasKE3Ud5C91CHghMnnGehjpPc3DJ",
  "key25": "4XkvkDpmYap2BP22wsoMfdRQvLF1aHAdC5fGXZ9CqdjxNHPXDKEqbDWBfXsbjaHpNWwMyGxDPg2nYw7oDq8sZaou",
  "key26": "4yqk5dCdhdCCwqrjnYirjt9UpA5Xbb7D3TfRr383erX6LndGUJfpAEutdcnr5Mq6tQH5UdVYDKvdUg4cjsvM93KP",
  "key27": "4GyvSfNiSEaYV4b2DFKemPi631y1b1aUdBCLGf3ErPeh5weKwpaZsRoNgP2GcML5dtuFXcaQud6KXCxdyEWxZi6T",
  "key28": "42n96phZoDxbYQY5dkWo54C5Vn1NvQ7mSYkyLQjrTPZJBuhyRVNr1gkjdvTzykniuDJLphBo7JcPfwPm5SCAbvc4",
  "key29": "5sDJrjyP5u9EdaYwcnZ7Qp373z1g6Z5wS3GMzSYzeUQACe6A595cHztUpLvRmVJdLP4i421NPi9YVimAL5fmmspS",
  "key30": "4MJaW3psYyEqHckV7gD2beHjx37th64zcZQN7YemtdhJqC3twWQFi6uuN8rVymRMMxpxkqyauNNT6atK4doM5QPy",
  "key31": "3usGdvJhfUpGaNyTmi5TrdwZ6o3ep1qx3ASrm2HQRFnbj1cq7HDCn7GYw9QiW3Es8hPHKUVy1yFQwVzsEKAagSpR",
  "key32": "2w2v5VP7LvAVz91u5tUmErJ1w37dCP2AEBFQC2DTzieJmHUeEH1CfwZnHJGsf8J6vmx33JjdsEXCVinHmeaAJAyT",
  "key33": "3DzTKMF4NxDkSHFmftwkbWTvx2TJRY1hDRs66MbXaiVdiLLwdEnkBMmP5BtkcZgYKdLGsNoCwfdcALRV2JZdusR1"
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
