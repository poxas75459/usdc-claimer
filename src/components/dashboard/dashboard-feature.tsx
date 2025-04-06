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
    "2FGm5QN21qbzULD2kXS5xxGVPXv5T2W1tuqx6G6Vam4JfvXcXw6FVRU5sZ5SD5LZxianLUFccYAgTVKcE3S1Yo2D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XbVUqveKNEgUiXvmXr96Ex5h3uYveWVTPiCGHqw4UqamaUnm7tDDqBa7XKx3RakWqoPrRpMHqvkJdG4Kp3S7Eub",
  "key1": "4uCtempm6fbygfX36Kb7WDULByZyvXtjTdvV8133VQk3NSQxFUFG7JzBgCsYLKE93F1kWxK7pX8vY7YNhFfsgP73",
  "key2": "4LXTApatTqREWLpcCdiE3uguZsSrgGE5pnQfoXqzw7RXvTKDr4xRAWt723Q91VbtdZLNmRd6SnXyyDpi9vA4mKiz",
  "key3": "LeMQ5jRQjYiJyAqjUgxuXz9i3xYmpQY1StuNau17ivs3ndYwvFDXn6vJ51ABCrEyLtoWk2A93hXnBou2R24i8cY",
  "key4": "2xFeqhvoyNc3VNFvGgyjpS5Re7NPGZJPKK5FutN3UZegsCkgCozn5RYMzexgc17ZMUpfzS9Unp2dr8w9zh7M1Uzz",
  "key5": "4PK8p2faneS339QNCcyv4Tibd7tzeJdeKGbd9HK4JatAb7W3XD6i9fzSEzTVkd6Zyx9RCtxvEd6tAoKwpUHZeEZk",
  "key6": "cMeBLH8Ym16UBNC5iwJnJTuxN9phmgXmgKfeRKujEymM5Y8Z3uCMjEW7VkAdeUZk73G6hwNJFTEjJPPLgFTZWWD",
  "key7": "3UWKFmgxjKPRkxS934kQSAfm1rX2fYcnbCiYCBYSoKVvVDRckTYgG7P16tVHwFru2PrXk44cBYwfStKKSwx3LStk",
  "key8": "5YFZbsFFqnwzQHnsztoEpoBH57wCnv8DqRuiU3xH5naYAmtfPXWh9vLjttxoh5Wfe79xKg9VkUgDULy6w8A3b8ky",
  "key9": "3deNRSQTxGfBW3G5XstaCJxBZBx1vRdJfQUARaSo6QrwjA2DQaBgNK5yvYmqB7sCFHkoqGqcmGAtrGbQhN1bCBob",
  "key10": "5pfospQZEZAGmq3GkuNGvhE4BwAEuh3HBwhx1DbC611KEkap5wfmZCck92xTseTajifD7Vin8k8EWG58gjsw196X",
  "key11": "2LfJQdAQnWUKEthVahrhVNDw5vjh5Yppn4r12u3uG6Zy3MuzQmSeSaf6y6Tmm8KmVx9PUoH84jhg1Dm4i4KnXNMB",
  "key12": "aFcaGWCn8Bwp9Zym5y2s92H7mC37xL7nfNjFrNBXiQzxENjghwPsMJc4pyMCiqRgT1hGNLEmy4sfJbavxHJ3kmX",
  "key13": "2r3AoUdSJ9wNEhkL6n56BsNYYGRjy9Yw1tNLyVkNzaCFxLGKA9iWFXyyW7CK9wriVqo4CqsnKNswAzJWTeXSVMDu",
  "key14": "4vQuaMFCw2oqfrex7kwpEZm6V7e2ncAjJcs38DLsrfA7KZmsYXXPDf9ZBcaJosyJpnHKV6Xkxvo1m4NErc8FShWW",
  "key15": "2rYgWGukDPdDCYkU8ntmNRoBBF1HBrKFvCvnDZUo47xvox3jdw2dCBwR8Gj7moVgbytUMuxMxgvHK7iv51iRM5rY",
  "key16": "DWYr1U2ZyBmmbgoZM3LrQPbEpTVWPK6qzos6uV6eL6QNAYcx686bzRtHJU9oT3RZp2Hx2w2bDbaYArag4QM7eyj",
  "key17": "2KWWZMsicQ5y1u3YApJ8RpXwRayGxefGoSkeYwkDakbWAnBErjns4uXp2RAZkokDbQfdbFrSL7MtQqnhYfc3SEHT",
  "key18": "3QPxmmkYGRy7QbnnHN48cPWwTMiEeDQDKtpohoPn3qiW1nFZA6hN9M2gCvgbt6h8RbA4GUi8sxgAKs4f1h2a9Cpm",
  "key19": "4cbvwdECmSLk1uphm9H24AsERNnbq4AHFWtVWXck6yVxfU3rHn5Sv1t7rFry2yL1AuR2p9D9FPFkbbhEXya7qSqA",
  "key20": "xsAZp23waYuLzaz2Yas3jJWCnqXeHkbqoY7CcUc9WuuZanBfVVVdGzu7gm5YLpSWkSe9F66v5DzyZd5BYArjYCe",
  "key21": "2YgntUY1ZzPAxEasALQUms1iVeS5pKmMMVu91yG6o1CHrT4jVWK7ZxGLW7si4u27HiMcTwkwt4FFvA4FcEPzbtXE",
  "key22": "4yuhro7B3JqtN2ocBG5NwDznC6bA6xzvQGWpDh1MU1GEYFjPNHSjTDQ7Bi2KD4L8aPX3DjpTHxRH5YRsGRfcKgDQ",
  "key23": "5hyeqDAKHcpWGrwWkuWuqL993yUp7pYz3izRfB9qyUFdAxHURe8KKvgTS4qswobGA9gRXQt1U7gR4zgMKGc8Dno9",
  "key24": "3RCxXWAPVtb51Nrfgrt136heh1JC8iyVr1fSneGmc93sEqYmL7eQX9S2dQNaoaDwd2iABu6MGiYuDtTmwwCp2PeR",
  "key25": "mFVQwyH6yv8UJ9mQ8ptbKDHbEz5cJCgF5Xr9LS5HQC4ZXFVBQw8Zn8JsszhMnhaf489rk1Aq3Pv6rfDHKhtby9P",
  "key26": "4Tc7W5bxo8xChEfeW2nwLHxVszzKCcDuqppyGS6rmmPMeeavtjdLjL9cM8iMTZonvuMLZ2YG6pzmsGJw6mx3FuDE",
  "key27": "3dgfD9JQBCuagfYaNbT7B8Wrmawg86ASWcRYqxoXaREPeA2azsWkdwzbBJirMFxf5NLDUG7babyp4HyxzVqVthjj",
  "key28": "3hmqLeGRS4YGKM76srkWeRSkRJw5qNXMKxxDsmmtZyiCarWWRJD77W5ETZcgpgJRedAx1hqde5mK1KsiEqfsdVqx",
  "key29": "2yuC4jyp3TYz834RbcM6CToMKqiZ5cWUfCRXXAKvAEwmKe37FMz3w4gDrE9r1NdVVAPK7umchiKLxiwmyBZVt2Nq",
  "key30": "5gufD7S2TXQZgJRQzco1gDcqjh1GLSL7yfGR8kDM7tp1pQkvmcQ5RJHaXSnWj4BQaDJRWq3oXvuceU5hra1oLtnK"
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
