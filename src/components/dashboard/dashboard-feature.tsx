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
    "4sAGYwkHsTCmWRisxkMuk9AvBALbrNsKvWqHMxwjHiaeae6yQPZNcjKow4MKjUEy76T3xwpo1hBL7us4LCtVdiG2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GZt6mVsZBeLwsk4ugaVw7362PZjKJXgGADc2K91NwFHCDKpkiPM9D5yL6iadbb9kyDA3HAuDeQDcSp4UXW7KDAn",
  "key1": "6qui2cnnp67qkE3r1REYjH1CxbFKhnoB21QDLTjUrRDyLK1xwQntBYQ1QMKbwcFy12KVB6xvzbedSxEHrVo1kar",
  "key2": "48V3ZWF1AggCDxPyfmZYaysmSxAHoR5hnZj12UnK5238fDhbymBGewfa6FdXU1RrFKX4Cx8FpQtLVnuqBGWJkGzX",
  "key3": "5ETWdFTJXi5pRFqjLaFoxkF8EEVaPcRhVrBuzmFGbauUKg9RKBihvy24qdHnabtK6EGr8vCfSZtNEESsmMhQ52Ep",
  "key4": "2ojJn4ZoLj4a4R8LCnD8ocerHfRgCwLAyvJXxXgGdAVH2qRmTmnZ7tb7anGyCsFjAcEEATuwrifyQx5wEwrUpZnX",
  "key5": "5HLtvZFaTU2eTqUHfGmsueUnkrmjsKchf3EYMGcUrjTzRaRTpEcsm3vY9BiUsAppigTHVr1jB6ArA2NaM8NpkhqY",
  "key6": "3mBeSgW5K1SmjqGGqq4gAJBwWVY24kWz3ApzCyciceEety5ZusfGB7AxEnHVyHRe3VU1TrHpoEossfHnxVW8eVAf",
  "key7": "49EhHwTBuGrjGGPoE8BmcLZmJ3JMPTnB9kREaDUScYskPb8Arpjs3F6hBYyYTeuVk51RjaPy9PmWeMCmHghJNQ1X",
  "key8": "HE55Xybvu5dYjz8DuQsXFURgVr1TGZrzxpYsX6xW1SbULWq3eZWM5FRYG2EgEauuQP9b9Zr6NZXdSTpfB6XymRj",
  "key9": "5mZmaNXRavjCUkpy8a249nVXWUUeVtqs5Dxj2zK1XdjPrkvHtq2H7QXbCgyG5qJggad4rgHwm1WKbFMPYV2R1h3D",
  "key10": "3APokJxpX99bHLm6c4MpeeTfugcDWozFxtGPP9wBKsxGffnMaK8ycqr5Jfyw4A2EFLjqa77ksDQEoM9Z9mb3Xh3h",
  "key11": "4PGxYetyekTTWpysaf31byZHQMzs4Y77msYRYHrDwAJ65WDtyQjMUVZimdN8i5rmuEyFTBSkW472vf7VsjaqHyyn",
  "key12": "4yd2sSExgieD9bwq9JGLJ65wM5bRrXVVS4zaSgCQeXq9oSteXRGjVxZktAZogAy2bQc6CrMxVtw495cwFJWxz7Ge",
  "key13": "5ytDK7TdaUCa4SsjZNn6yJWUsU6MKxAUxCSN95txWNsMXgeUv8LGBjzhcBortsTw133QixUP8rF4mCxqF1Sssf8m",
  "key14": "3m2xWPSe6j8FukfSF2kNfFejGtWgEAQ5tVXSYjEtR2yPDQL35MbL4rBHSpvotXKt6GHzoo2moiATrjJD5pzDAFKa",
  "key15": "5n12CdGJXLLQNLwtGq33DrmEGsvYNZEVWtP1fvAV64fx57h9t7tk5mwZAJbw7vSJkf1BWBm6kQDsTCkLsPbT27Zz",
  "key16": "rkNmupwD58Zmx4SNJVwsywfyCk3DwbZ4xWw5Xy9rsNMjdcwtzRsAMVUsWdQsvYukdVAviyw9JBB2d1tf8Xbsaeu",
  "key17": "47XuabMuvSXtGLRwXUnErYMyjH53AmqaBR3ZQKfBTQaFd3XSwEuoLEvL3UnUxZ4isRvHPWLziEcC7t6UmeZNTCGc",
  "key18": "2U8E8LumHV9wDPBa6ZcY8bcEZ4E2dNx6KQ7ppNykR4mxh5HQgu3hgnsYaJcib51q8yiyZ37d9VYPQnRaEtFYcPQw",
  "key19": "2g7F6GKpoYm3RSnSfwhLs47Mp5TVMUwVPam1codQyWXtF9aqMTFSLGweZBJ9SgvuAHtCcApcw9KPM1aAcQXAFdZp",
  "key20": "4ZK2wkdBHYSzNA4FdrUgxKBSBrinVFxKQwAqp3GgNxGbRaSxvuD7EvaSNzVu95aKferyb7gdPuZfwKBvRDp1K9D5",
  "key21": "3eLxcL1QTUKFSjGmEHKF5TRqBcsXQp83BokxjYwcG6fnc4fi2GYq9kpNjiMHVbLUxAveLGmX9K7qhXXhAia1TAJR",
  "key22": "2td4BffH7ZSKL2F8Z2dyfZKzEA77Cf7iLB57pgmv9T8NaaNxdYBcSN3NjdNANyAh1Yse9PnYhZZx4rgwgdH2a4xA",
  "key23": "2Y7tBewqv14xNystNzaJz3w7gXoitAygVwhgMvu8qiUAUGgnSUG3ojWLmoGA6JfeEnxXtqQou2TZPMqdmh4MqpDn",
  "key24": "3CQbsXp6nxK3KKkwgafKzcEu5jNkNHuCVkvECVQothXr5QgWwJxpfE9i5bPaxNiZLL8JrLvWTJ4jsLKgu7QPc4tn",
  "key25": "3oW3ENah8tfjSW7fFsvNoMXdEqNEHJnUmS6UAQoZDs6MPnbLai1nW7RaCbfp4wanS13aEUrUZMwgnnWEyEGxR3aR"
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
