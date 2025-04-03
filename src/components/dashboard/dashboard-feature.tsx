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
    "4aH5sqn43Hhfa4Rj3fLxgk7EYnpBTroKwL5pjYE4S3xqLN7XtWe5pc7hp97eX4TGCayAQtuGM8Yw8GHEtxvuLdL8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ypDSfVPQ6Fr1EZyepGesF8QjJE4gx53pKtDkRfQzz3AFVPL6M9p94Eem62k5FxAG2xU2wcEiBfVK78igNu15PRT",
  "key1": "ri5sH6iMsfYV9XK82aNTetqDXWmREUWT2YLbsdUip7JHyA2NvnMT4mW8BE2Z1kfdHCDpAxWDmZbdp4GBF28vfrm",
  "key2": "4y4hXJNstVoLEY4zkSqZCcrZeXw76mLe5tgmaJKWk2AXYDpWENhkn6mHvPuVt7SsZtmH78wHXYrqLFeoLNoFBU8V",
  "key3": "5sJfwQ22P96vYM7n3PWpYmHbQEyUCrqBY5NaunedvQKvRj96MUwa9dxVvm6m5Q8j1kvyWejLyZZxhchjHBCx8sew",
  "key4": "4xxoCa9Bx8Dh2jU3JA15pGfddcsGavp44PfHMc3NgpYU2KdwWe9jFEHaqcyZHKh2rJj5QdNTbtyXujT6SWgp12KD",
  "key5": "4MbFTNmjkRYd8PGV5HXqFMKtpw7setUgyYfzMjbP8B5A6pEe9C13qrTDpKVHJfdjsp5wcVJ78B8CMHrm8LtDxHYR",
  "key6": "3re3WNBEp51uBNgXhDJk1rtzCc5cqMVsQ7fuyuesqgoNXjMa5ctdLSTwFwhKMub6SGMMuSKjPSEd5vJbRtjbCVG7",
  "key7": "5SXfry58uKqiUegBYAUX6GtCDpYHg26dqkuq2eeDBeNC9BVsZMWs9R6K1fq28ArLMaQactebmi8ZywWDnvHBZdaw",
  "key8": "2U63NbDPe5wMXtDLiQeVExjFgzpeAmmqhKR7CoEjTK27brU3ypsMCMSjppAhLoj4gpBWXWm2hc3THTjuY3KwLPHw",
  "key9": "C9Xzgsc42k2scAucrDRUDXLgmnbJjuRMEqu1niLa7JWbbzsWfhMziiut56e51fYG4w72rL3AGkwGhqNdFdvtsY5",
  "key10": "3Ygq6XSLYSeUdWeEC1ax33mBb2AnGHKMLff4uDGTccYYU8NDfLB3bKvEnh9Z9v1RdzzZN6nhZWWby9nCjat3LDKD",
  "key11": "2c6GgnXjyY2FGAh8acwSRVRZHwJDAwLxNsqST4X72pPyU3yYneZCfG6nJRoW4b3WdMmuUgGFCf33CqgbS47CWCUu",
  "key12": "4uPSQ8WofmiaJyAZD2ZkN54aeTcCpPorpoyEkEmtcJNwcf7hddZXUYbySQVFvXmdDnVubE9uf9KUaSKn7M7qiLoc",
  "key13": "vXaL9PaEbrAg582sV3dtQTsniducgJbaVd4SFoeEf77xveNUmdPgMdaMKSUx4W7qhTAunpqapAc7AbbHP8GhqtY",
  "key14": "2VnVMMbgMXSb4zNqDp2b4GenNBbEFN4x3vB9Tj3hcFdiphjh6zGAEf3Dyd3xcqVEphVYVZG56aR5zVTirmqLz5Xj",
  "key15": "PfCrA19pygu665rizm1Fj1xoYHHC7YMhbfA96veJhtDoH7pvZ7boEsK3sfqhPEQ7MeepnZpQ4sbfr4xPpvxqfi3",
  "key16": "Q3VtbrzX2En6xnZGZxcJe4kFi7f4aHFTv2X6jk17jn5bwBwuvcdkceoPFhnAzhBfYQwb4QuYiaoMGpNSS6d7oHP",
  "key17": "2o4PwzXn38kXN227b7RYaL8rRgCaVLvEZnxd1HpQ2agYr9Er6vcn8JFFu2SEnDFJyHacHgNFz3aahXkgTBp8CnbG",
  "key18": "57pmaLCgXuNsxMfDRbPPHfE6tGpom2FF5NNKJ8aHffNuKSthFND6SeD2aDU8rtvSfaf5pW7bC8i2pJpaGwz3U6sN",
  "key19": "2wFLPQiHM4wGwQ2qBPhLthTu4TouVDxJkkn9svasWvWKZQRaeWcBeVQLyJxb9WMUUMWHqPdCjCF8DZrH8dgkYgBC",
  "key20": "3wBQt5n1ogCakjd1mtwsbYT6CVebG6mmC9soJRKYdKuiex4Evuqfxy2R49yeQYkXH7N9jkWpVqHVYmu5FqQsgoje",
  "key21": "ZCG3aUofiRBYxkpDXk4fCFZrqjSrfwnMmsLFKp96B2LXBpdZ8Gb2r62D15ra7BNpBRpZ6iqLtZ3Pr45v98hu3Q7",
  "key22": "3NZu2vSyoELTMJ5DQPUjbTWUH3ieSuBvUSbkvEDWkHqgvAqVcYSi9nfL98xQVX1etmUAomG9Brh3KzTRLKEnLnYv",
  "key23": "N8VbBkNFDGGnHWRyEcDtRQnqfet5BcyUU1A1EdttRsrbLfkG7HQ9sd3WVJ69pvfA5vy91y318FNYyySY356cAy7",
  "key24": "3GsPmRRhfKSPGG8ajN77mALPY7M8m6TAppTYPtHfc6Gh6e5xbH9uXQEgcfQ18DmgQMfi72NUK8wuH7Xghp6mbJZc",
  "key25": "5AAe97zjYZM5ZixzMGLZnJK9oVGRp2HgsUACK6v4JfcFeTKTfiNrJBnDfjBexiPCWuwHMHnTPX8yA5FBt6MQrmDs",
  "key26": "naa94n4nTHtyPCyKddfZJb6HVWBvx5eqR5hnoiWjvUD5dcAt2ivLaKauFifKdzFkpnqZceCgVWJK68sd5jDkoCp",
  "key27": "2nxrTsjuDTVY6hBTUSpM1dE9WPushaetYnz4kVzri2WuMBx8CGPeWYAmk9fd7mSirzRHAnvNsqZXXtQWNq2XL5fy",
  "key28": "4noagBd7g1RUCgKyvtCdw2cEk5kTjA9cKxrwNekbu9SbJbsHmLbVXMedDSf6gmFcjJNDFDQqGN88wdLTwmGn2ZdD",
  "key29": "5af3d64Cv2ZzpoojR9MLQmYymT5jKWeFwZ3MoSQ95MiWTqHA3NXt6Wstefs2NR3xb4XgQ3Q4yRZeEMbiDyYf2re3",
  "key30": "3kBPjyTALP5CFUFbrVPQ4xZUgCPWrKBiRGG8Jpd46tXP74v6ZfXLfi9ztWQ244PxircPDTboMCpSXTRZDn6RpwC9",
  "key31": "fmZJDvvw5YXzPsdc2vKfNnkmXT2FA8RMRqnfB18Zzxb17RYaBruS2eH9wm3hZ2eWRdEcycFzpLJ2ZRp154iK3n8",
  "key32": "3Un66nqfshUaj6jysBLRrpQggLXohAeYZm8YsHZDvyUh9p7QJvL9zfLe4bRsTkw8pD2SNiJXeTSFMCtS74zcJyuJ"
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
