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
    "4NuBqSirAeJ7EVpLQVekAjmYuVMQKS5ncgoCfV8ugasRmipB8DhYLGndVbPe496pCNhBRhECCEZvSr64Fbum8rBY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GqjBe9tGNXKVnzj6M4EC5Q7DpPrPvnDD5F2TwbNG313tvW4Vf3R28tbs1GfxAAWG3war9jgGfHrucoi9vMGKfMo",
  "key1": "2bj6ZfemDXyeTRzi7wzGSANMh2VGnYWJiLZQdKsr92NtRxjH1VJySGFS1siVeE3xToKBQTWs7gGEATQjZMdjfLL4",
  "key2": "4j2CnTZpiZUUH1kcGM5ebBcgcBSu7sX7UsS5S7a3yvzn5aqEBQqYruEWYjyerGHhHBKMhQzxrpE18TrgkULqk5rv",
  "key3": "2VbZMepkPZiHLsHELbmmFFHdjdGYFYCJgQWKu48AaP54u1Qbz9M3DU5Eyzc7SywPsXCuZUf6sGgSgfz1ikgbmXJM",
  "key4": "46ga2uyBqiHduY45nrV7Ub3YifVHSu7Cy7sK97eLLQJdggsZKsqjQV7Bya1PrqbAwSNi2UewAacrLWUAKtjc9g4t",
  "key5": "3SE6hjnsGv5pWp9FaKemNPgpPRnfc8WDWkoRGwdarnsbSz4ntz8joneMQdUVsqgFsb8YQtix3wVc5s6LJirgkFzo",
  "key6": "3QaJkC3We9F8xN9uhSq3DebFVkTyApxC2zmQjjzfu9nWWrfxKo3cFpTzHtTPSoFwzQZLJapYPnikSwerd1977Rdy",
  "key7": "4ti6KjvvoMKFmY5uqsToRwAis82mvBJkNqWQRvqSWHcEN7fzfAuPAmNUzdREptGiouexq6yhFGQAxK55X96krKCx",
  "key8": "4wiMe738YyJp4cRkRyVz4wmgsM8djs3v5kX5AxMTuQvygMF9NeAkGmqRgWZ4jDoMRMPTrj89bsG9As3BSUegP59U",
  "key9": "3bMfDqwMkz9K5djtQfo6uks9eAfC3TiuJqkvooxE8aZvnFERVFc5BxQV9HMdHkju5wQ9xucJnWAx9nrqozKFtuqJ",
  "key10": "5hx2z43dPRGNjL9pZ2uUGJehrFg4XNXS8HY2Jq8azkC5pkQN6Wi3AuAeUA59SZkt51LZ9QppeRHWzhUmqKvuDKLt",
  "key11": "5cEUjRCfTPbdXGS1T53bvSAwKq1Hzit65LYkwoykz75F7wkgnnTvcVoMQd1y9uS3GkqiEXqKBydLWHZdmWzBMT2b",
  "key12": "5sHqTZbC7tVzEaWCdNjKNeEHDzoTyuF3Nj8rc9PJA7WafwZ9DKNWzZjYueNaC7vwQzBCXwsEPkD2mNYWJMZTwKuU",
  "key13": "3jq8vWQMF42oUW3qtPpTgoyKms3UXJYkZTg8mgMx8An3iQx1xq1Pp7vmkctLzFo7XErM52LzudeTkdMVAGMcmSGD",
  "key14": "486D35hsZvmRcPNZF6SzzvGpPpGtN1gFB46k6rVD9R9ge8vddRG44nHWCuVaBZ4RMqpnq9fyiDK285ip1e3ppfbq",
  "key15": "5Rtphea7qzTn5kXYBPyUeLCBZzUKSv28qHT367onxYLCyntwXEdyCUgnmQhJo45h7cv2Ej2YCrzwcT6zbg5RNe2f",
  "key16": "5YGde24jGrFVwwZnCUKGtYTW4hnUKNjhLohNL7Bkf1qcHUj8RVfRgCMo5qmZH8U7JaHNe4MaJ8rqgMPLg6vVJoar",
  "key17": "3EY3WJN8PuzQAHD5m29RxpU8cDKRSNpRj3PZpviMd9ZbJcX9MD69DQZrZHWXsrLZQFbiysX6XeEnJsdE81MyQyAn",
  "key18": "4KGearCaqqRpmDUxLbpXVDjZegsy6h4mXrn3iiYLPFbghmvrUoQMJsWgRaZKQuJGiaGxiqNcjXHHRBcduc67ykzX",
  "key19": "46V7ac9mgvgVZPGFarPdBh7SFbstWBRyXRMLrmcGRvJz7AMz9bAW4fc8s9Uekukb5w2u3jH5fVcFqoKBQHzJEnXb",
  "key20": "3WUzAZ7LwKobJxMknJf6DaDnNjfcvN1aB4UNY7g9vqUW8cuemhr8RJL57toLR5eAYarhoxTBSSUUA5gPkohSJKX6",
  "key21": "4EFkxBLkaSdPEJ3XQheNLYRDFLzyg1QtwRVAR1aA8q7ko7BUfLCTMgYkw794bVrL5Vu9cmZ3mS9Y6LwPHVfEcggf",
  "key22": "5bfzS4NJrVsW9wFLunrJBhQaoRxhxtxXSZh5mLdrZeSzXMpBghtvcqZxHoH5TFv8XfqYtTrzVQZC7JMNeEiJxsCL",
  "key23": "9x6kAeAkRvcM3UoHoBd6EKyRdVfVLUTDkYUx4ws8uYkxFfbXR2AUBD6rEFiyiCS1Xq9sgJ1RgKT5jeyebL6Lsau",
  "key24": "XY6aX4qkXHHfGPX2YM1Q8Ky5RTHE8m1EXJUqakYaZCCWZCpfG9tsFqjUcWmfYWsG7b6NBRfEB7qM9pJjhEKSrE8",
  "key25": "4vgGrNxE72J8YBpHHtvSkrQcdc69Fvxcy5moHWACDX43pdZvQ1YAFq6FdNqKddGon9AWsPrFxHaJVx81fcoPmQNC",
  "key26": "41m5CXLFSey5cmiA7yUUAQtac4myPFBYkgyXDjyMzrLgjUwHaAL49rkeX1AoGxX638ExhcAtx4DeRThYWhki3TnC",
  "key27": "4BQ3tCCkTrKqqtXRSDq7tVoYMmQoTCVuVTq9NnS7yEzaQV6gn3UeQctzzpgnwwkQ24AgJ5quVm3jBjRPsThJefui",
  "key28": "5542HbHTLSpJNsGATPtKTqWoZaBqkzXB5X29r7rnpBvT5cpmBtgnGoQf7KqHtFeYfeHK2SWsMWDnJK51erQBUbEJ",
  "key29": "4LBhJyuk5UzuACM7vdJWrfWDpphr9dCZ4UDeQHLKPo19mEtaC9D9myAwECMFBsnTbGBvzT2QokYv4kMpUyJpSFWe",
  "key30": "gq1yGuuBAmEc5g9PTMBCvWpYfe9exWffbESWGzsJRxshh6aZ7iseXMmkS9rkBHZx5Zy3E7EBuWKaa4V7JnTJjRc"
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
