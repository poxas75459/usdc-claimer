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
    "5T6DTgN9oq8HwzkbSzfkGRJxenF8adehbHBvwEjcDr1M1bFxhivVcGBNhiPoLdcigsr4r3KNh9CJnw4X2USxDbnx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pGZiYzRLPi8F3cyfuM89TmviV8xhxZz739cAgcKmuam2XpCwK1oYTCm3uRMdRX8qWVvVRwU4RG868Z4EpNHec4s",
  "key1": "5zVe9VHzsbctZd7KSqCvQWmvw6rb8bj2v8TaZLnj7Ch96Eo1cSEoCWtnthpneWmkvFmTS3yRRSYJP29U2ykNhJpr",
  "key2": "4tsiSMyfb476ptvtXii6F3RxS2AHULYTV9Jo3Xq7WrVQTSnAWidjmkpADxHtkkexaWahZVKELar3dBASsUuYG4hP",
  "key3": "62n61SyZ1VGb6MxVnEF6pD9AmwA42V91wvSCYGeLgbRohQi6WvBUMbeb9RPMwwvWnEoxkRMknzGYaXQCbAcCq1ri",
  "key4": "2EYkZdLHojEoU6D8sGVrkewgrGWi6ea6icmLPN9PgfTNuQkL22yVxLB6TPHPehLmEcivzaPAzQ1BprUWocwtV5nY",
  "key5": "5Asr8budegwXr4fZhQ8jwGMeeCEJhx9A9fUk3xzZiVrEADrSXVt82vkZTLyfjGTRoXZy3x9EDfk5gWdpeaqUUbxN",
  "key6": "4HoT1htkKJ2A4pG3jpy3dZe2nMHzLcgazLDsgspFvDzcuba9LJ1tmAKJxVqimPe4skwA5gq8pkDzEPk9BJPHFnyr",
  "key7": "2r9UmtgTJefUfipTm6woCWfTApR4egRgjsBfpBW5Lxk8SmvkrNS8FZPcjq34mDPaZbMywpxmCpAbH3CVBTSm917A",
  "key8": "5zM8qpK7ryP5b9FYGiRq5j1fFHJNQ8WPH3dEmJqkrFKRdJWsNFeRKDUdacF1Exanm7JmfeQQRzGDCSwYokgAMfE6",
  "key9": "4PK5wkKzQnhD3SwqjpV12B2Yk4Pbq15TuGX7MpRjF92ETC97r2nFoPGTSfoAr8Nu5J5rMSfSYzryQrbcouHAX4xc",
  "key10": "4u4eRPTNXcW4MoXHddXH3XA1awcTySFHLRYyHUpww2yc5Ad794UcaZncw5kyaucLRG39q1VK3SjdXE5KpUiCbdPb",
  "key11": "2sLt89ZYcQ8yZTZXQTj8EdheWS9Pu3khnP25VNg4muPqZGWkrXSdKuTARErD4vyqq6mEjCfkkWvVvjxwSzBbmsAC",
  "key12": "2EzKUPgvpjWGNUEjkzXYVFc9WoLviK3cxH3Wp3FSsPK92oWRWGF4XpMQ7SjW2mWLrMix7iU4xVZwF7vBhg8JnYWA",
  "key13": "2Z4rAXbifgDvZeK4PkQLaEP3QDqjK18PU4meAstnrRzoSfyb3DZ51jwtgatnG5PseiyKaTdqm9twXpvHrUPqDy7A",
  "key14": "rtkocWwEsoPLJbmdGPY2ahVWeupmA1KF6ys5bKi3N7M4YzGfL9cACZXBvbku8kumEEvFWvCZtL1raMDsGcEsqRB",
  "key15": "38YAxS8xVL31Bb8ERH3rBZDmrvCHQDm3At7qd8ZDtPsL5vGgMTs4faptvZq6zxV2WZsvv4HJXEXMtaUBnsbuBzrY",
  "key16": "4T8hN7pDW8SZW2pC5Js9EvtpPkhnvTi7KCvb7b8MzwPBe2rkuLRe9xpBigXCmSGHPAUQjUjrfUB3Vycem71iCX1R",
  "key17": "XyNpyNSFK7yXgk7h8Utb7Zh12sS3HkeHNpFCXefZBhEkG4NERgiBY19jyhZnuFMVvGaJX5n2JttpNiv5pEXtAeg",
  "key18": "sxVyhmJ198eo4ikNvScRsv7daLpy7BswTAGKh3sq9Dumbgo6DVyMuvL3Lji2NEuh7WCQgkdynf9YYuP1JKYW9ph",
  "key19": "5Vm1pSH3gZk9D61MusCQi5Sf7wjWHQwrKtAYtrhHy5b3gncUkG5WoqRC4kuKqJzLe5dc1zSAYQg1UkDfWCPqKPYR",
  "key20": "2f4Jbrhds7HHNFxHgSGdL2a7eS4eXa6uLyh7Sj8A5N7zaKsPT49wnraGwMaqufCK2zQZqSv5Tppie3iRqdM1PQbW",
  "key21": "4mHHxbvKrqAo8G6G5tV96egHtvbqmzmncxWWYfmBetvDE7XxQgpjCYFsx67zeMVtPHKA35AizAGyDvJ7jvb9GTQX",
  "key22": "4QLTnm8m3eHB98bY6gRYBGtnFghxLfA7HfoFwQCKf6wcFqgiyKfy5hjYFxWErcByGLUn5GaD5RYxQhsAyMKzWTF9",
  "key23": "5U2DYGA7tE8dnpmSxbeCrjFvhaBpzJPjuyin6AsYYH7daLAFg8tCGK6odtwBAfRCwf17ivM8jzCzaFXKZnsLMYaX",
  "key24": "kMijpT7CpqzC9Z37CmofXpuJ4oQjaM8S3RHdaEAJ1cZq2caJdUWY9ndj4gp1tfCVeBdaH28kxfwMPFfiumMzAFN",
  "key25": "3rnDQ7tUY6i8FoiPeiunTybNdARNDzAom5gZ8YiXWzqUXqGAHZrVgpWj3barybs5vdm9QA6Tj8Wfc2LWvetooa92",
  "key26": "64Y6uixURJceMwWT48LyWn2vAhNoj8TWnWMzfnKt16F9g1FMgcTmEKL3wV72vAfMwAzedGWHh1aVfzLvCvFjtVLC",
  "key27": "Vq7orS7wae1vbR8jjykGB6PFMK1jt4azU7m3SDSQFtzBWg41Eqnd5N4ZAZW4tiuSkYmvNu3w45egJfjJQd6HRHU",
  "key28": "4dvcZxQk4DXFSzJB5dVYYAiJhvdhsTZwjeBJSRuYnWqvdnGBBrJ8hQX6H4qM4amB4kKqrFbcTQ4Nwvw7Z8nWQ1uy",
  "key29": "4jvL2L1sM8ShABPvmxT6nwgdwn47eXEEfUKrYs9Grjw1KPFggXf9uaL2ueddMSdt8fvhZsfSFTJyiwX9o6uQHzdE",
  "key30": "4M4omUwrKFjkzPZspjeowDgDcLNPWMQ1yeHkctK9BGNwWECDXjK9oA9XKa2gJ4wjuDZTdJqCNxeoyXgeibSJMKrV",
  "key31": "3ZxqpAYU4BV8n4h3c414LQSVGkQVSqs5wPQyHsMBnxqkUoHs6rqU9RHe8SyftZCSLBnuv6oChyLVDjFafdqw3Jbt"
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
