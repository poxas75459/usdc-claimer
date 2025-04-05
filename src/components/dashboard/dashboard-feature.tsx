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
    "3CNyZ7ZLsBPEGNPsTvsvsThLxmBr8qADwc8WoU9Wz97GH3UpAh6t6vkbrZEy5isZPdB78XVx9KJ1SmatvPHxNpk3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bzncHwWmKT8q8gdE5JbKBHLSUc8aX8iRYqt6FqE3LgucWHdZsoXbg88VrE5UL3mnYjacrfc1YXP9sdSNyWELGaq",
  "key1": "2tFdTw8hJcbLd9GYwamUzGiuwpTP3XLXMoVYX67JTcwSoJjFvtJ3PmYNkeCgE3McrXXVs2WUFdKQnVd6PoUrvPeB",
  "key2": "3fLe4eDKuSm1uwhpLT8fMFL3XG5htddGKBGjMBhx1T8FDHjYjxbE3Fbw2V8whufJT9wT8ah2um6x6uCWwhokquvm",
  "key3": "5frL42QYQqHRhnH3GqsmFPq4gPtzfipyFVtY888Rxyb46j8q4BE4S1yeubY5TQX8MtTWNidaJSKauqaPShUbGDbG",
  "key4": "zxZVFZm2HjCLvPk1NZzSckJvFB3vEeqV2PEjBe9EUn7Uh7NusJeMaoLSCU7pfT3ZvQMMNvV9BN12gE5J7CD7Au3",
  "key5": "4bspdxVS6Biyh6U6bZfDNcfNonhTwLXr8dmx4pg3SjS8Xg26PuHJqjMZAmVgFDYcMGwKkiSbXjNKVAieFnAJFQxq",
  "key6": "5JPbtaDWu8qKxxaytKUcrA4TK83TkmMT7xtwmoSBGn5NJicZSh9mWaschxsQgY8qxwodwYxXf8tAHyfwjM7hTQSt",
  "key7": "5t4w32oiX9zXRc1rPTDBWw1c1HARYp3XSBPU1zySBF3fzMoywF3LKthh8zRsC53HNipZRDoQKYfQfCgFYeGKrZG9",
  "key8": "5v2mQFi6TnCtty6WUhJQMAPMpY7KUDMrE3pJqUjiidnhJJ1k2xy2DBzLApfpieZYWgWoLwC97qPCF26uJgW8N7BK",
  "key9": "2EprnWeorop4b3LBbTY5rNiPyjCneL4WDq9kf9vneHKxtHFtK3qJASSaQYfkDmvTq8s3brcAVqhiSLigTD1ci9gN",
  "key10": "aipAdtXnJtpi2Wa7Pkfq37YwjMn3KUi58BNLJbWnFY87k2Zr6wpGwnttncYhVLQQwiA78pgyHGTEiHwpBeJ6nK4",
  "key11": "27SMPGYQo4Zq7ePiBkW7HwAz5PyCZo5WCxbFR3eG4cCod1ufzfmagUzAVnd4LsEPmv7DHiqKHUdhd7P4W18DyLaP",
  "key12": "4uWdTBth89MoioMw3XbDyqUfbjHdT5s4NnTNGZrvy5Zn3HvMyoLASuNKXgUm9Mgk6dDZabBViTVK2CLwcHXGH5oV",
  "key13": "56F4h4m5KuitbPjN1iC63ogesSmeaDaFsphhtEqbs4He4VhkRt9VQgLaoGRNbP2SXTWgwP2a1sbt6TFtGca9Pi48",
  "key14": "Q5iJ2X4zTRJjABG3Vsgp7qf844oqW4cpubW7L1fMELrNDrBejeYCkdJ21Dc8HJW1RNgiEKhmu1F9bMTsfuousUM",
  "key15": "5efPc2dBPQYtbxLDUCbRXA8znfpLQrXXsr7XHmE5YkEA7n56PooiSSNC1SsgtGqd8yQ8dw4qukfj7LJQaixfaiy4",
  "key16": "2iwBLpS5egqRRUR4FRdp6iNC8KxTV1rzPHdLSxY897BHx5uniuLMwE7WuMMnQKn988ST19sFPpXSnfA7bfZQ5LGS",
  "key17": "3s2DDAUKheeNBsibpoeTNHSHYWteMPXfYzBHcfj7UAcvLX1YX9yZmEiZZpbntGg4k6Ej835HzkH5GmetLoQWNTzW",
  "key18": "3cmMiDCWXKSU6oPyKRLUHPmQSrdUFnq9trRwuugVpBopddUANRe9dBWJs3W3KyHbM3dvJCHnwYrbHNmHm4SD6eV3",
  "key19": "3raYk96TL5vxM4Xqt3AtxYgNbREvycZZMqjyXimQmV5LT11oBA5Utqye1g13KdW9ahHSrVqYbGsXQeE6zhyjomWn",
  "key20": "4pjrdtBi3wLMmxZT3Na9GJvqSvyzAMNYjrzcQZP6eAGMk6WmeM2uDxBsEdrnSKHJpH6RpzYMk6YbwyD9vVhJbX4D",
  "key21": "2SmYGxahHa3EdgcUuP3mqcQLhymvLq35N7gvFfAmCn7Un4KkppDW7gpDZUU2zFZW2GKHzNzXMaPWgcLqG52W54Hj",
  "key22": "KXXCWRgNmcMdiSKEdWSjsxwh4tQgxBkd8Nafe5fm1enJ9xBStviXuoRtFqcN8rmv8th5auHkc1aM8URDGrndvaC",
  "key23": "5sdbzyPTEW6dXDn8FXqBfFKzimkHWHXhuwxfQpL6zjfp4QkeTKiQWdjDkohUNAXHfpmKBWmRkmaYHpDkZQ3HkzZs",
  "key24": "5ai2n4iAg1EcnzhQXe4EJUJhLw6tfz9XhCW8tQ5pXbBFbFW3DV6Bov4ZyoAuTcBySZBoiCiCwoGkCv4v1kPe7R72",
  "key25": "35MVatkAgeTfX7pTFotAHMs6papK8jwWWL2yL2WP6ZGjrXXbBvbUCkg6r7fCuyVtgG5UbjUDu1TJCenR8qcyXErs",
  "key26": "Be2ECwT311QpGmgLT6NdkaW1kPn8mWCq7HRfRJofHgeykTxrtzwqYyGBs7fBSLN161DsUdoowGvmqwEQjCHaGpr",
  "key27": "2F8aE7Ttm9mknJDpF5XgZPdHaKKTniZVmJeLR2a2R3ZP7njDwN7DR7URhsywvEeroMsGc76LHYtoqqzvRxNHQpLa",
  "key28": "3z1ge1VvubgZthqX7gCthMyN5YigETRwpp6zXndQ1AEzu4Qmrk9cacq1ZdULYre2Hi3YqXGDha7KUEhCDEm7AZ2w",
  "key29": "3SuBGfiS83JeT7w461VKdGfzjq1n5oX9XgZxuJvgexNhG16JABwejMPvFCzvegz6BiiBJsgFjc8Z6BTraL8SowQw",
  "key30": "2zxVEbqN3vJNt2aAt2ZjywZQt9W37KJxFSpYCbXEqSer7n195xxjDqEyKhEe3PwEauvG2dWhKmhEt7cyp7X5FtZ1",
  "key31": "4CH7j6qh339zNCPGK2QeaetyYqn5rHADesGeGu6aPZJippPaWU7igVGF1CGCo9eh8K57ZVbZ1Pp7AocBUyetrSot",
  "key32": "2e2ShVnyqiYBBSQmJzqRxqtyYVEm7ne5Mk11c2oXzJjfyrMQhEQ7vn4tb9WHHEdzJXtnpms8kvY9Smr2GfcKBDvS",
  "key33": "pA9CPbvNdiGiNGB8tSHHvjjMeLPTRfUD77Aqvda6GVefsLbxuRCnnn89RheDTuUooj2uD5NFSKhsiswj7jYZ5PJ",
  "key34": "5V5LabcxeTDom5SupgArSfUV276uWCD2mv9nJSDtH8GATGLEzCZRWbkdZD1DXX9naM2YvNPfLXGDhKqgP86uHebQ",
  "key35": "3AsWn3sGJV3LmBwx3SDBnHPwhSGQaZ9qn6fChh14tCUQGbLdRBvfcEuQunnLAASe2G9Ea9oubNGK9sy5eNCfDMQ1",
  "key36": "K2oaYKCwRXbHyDmRuokWHgcgDcw6E5mLYDhmfpwvEGeC2UAorgDxxEuoSLViz7B29Xqa5HxfQTGMW3ramMm8Buk",
  "key37": "4WCGVXijPmc4e1ggNxSGgHDJWLB5QftZbYtJRsqAtfy6v4YeJkHT6U2UuSX1qAbvTkJAzT4DhifjXnQsii8HoQ5M"
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
