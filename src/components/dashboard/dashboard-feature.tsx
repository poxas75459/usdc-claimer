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
    "47GCqBhBM3qgJWHic7W9E5Cr5UWarGkKDXckhPKnsy4tueEeJQjA7PhpTh6Nhz3JHDEQHJGCRVvSxedmPXzEPWd1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CKJWeCDTVKAxGPg2Ukp1tm9DQLzjtvZxX1QhkVHbjBJsk9RW9vMGV2mMZ8xxreSbHD1UeBfvNRMKYxR3zysvNhC",
  "key1": "4t51tAa2VD3UXqhCjJ3ByXA67uSZgvJMce6W1XpSPENe4pxyXFDe6Pz4HgVwYJ8tnh6PmdMCjMKB5dX7bNJtooD8",
  "key2": "2Wo2WgeTJY2yaRnSvP6phPm4o2QJk5wncBch5Lk6K6ZGGb4FgvxGUAuqrD2Dd5hQMTiBoA2VmrWMEFvh6gymzU7e",
  "key3": "2EvkobRngQTEYn9BvdHoSzkd4zVXtwDez7U56sU4Dua4zSTbpQExD6dhfcHbegZrMW1ZHCe3Ld73SsPCPb6wTepF",
  "key4": "5ApHLPkgxxEUzDJcEvGgy76ANfEjk2Xh7Jx2beXhrcDp5UW6mYGxqkkhGrwH2Wy1mgigL5YGjGaXahzABJMkGhQd",
  "key5": "3WWwUHtYWrFJNWNmPcDxrAVS8qXeZNuP3FiFCL6SuMzh4tQabtthK9UmcLPu6tSHr1d6iDrxQLNxGPrYPjqd6kyQ",
  "key6": "3DUHh4w6Vp7vTUbiXJExLQuWjcc5TqEY9ijErE44CrYLnu1wnFNxsLSrh89toMXh4Ji1jzRqQsd1j35wmgzT65Dw",
  "key7": "56YbiNYdmB9MJdJp7zdvyUi3JzYqX4UxmAMfiAGQteGUfXi1m7jCkez5U9q77wxDrkNQeHit6HPrB2UaBti6bWKk",
  "key8": "3xmvV6EeadMeZ11jU6WabBP62ygtCpqwfYRAgyR7h6RBTcbGUeS3YAMtT496ZMxrrkzvva2K4pvxiMjQWYviBpkH",
  "key9": "5XBieooPHEYi8AE2ieYMgyjikGfys359Tk6fHFn1GWTAiPkQ4ozF8eDJSQMvh9iFHfVmcsEymbbmRQNsDchEj5EG",
  "key10": "2orBo1eQMRbD648C231suPMqR48kCJYnRmEiHw4ipzdk5SVCZMzbk4CNqUe1BQcHDjxkUeq9PKKgYyvvdH1dkwUw",
  "key11": "2xdVHNDymWb4FDEPsmCXLQtfZcEgpG7M8MkWwYvu2Np4qiPmnYfSvdSnp3jsD3HDWbsAgMxSgoBrTCWVyeH1qhav",
  "key12": "4dU5NKCN1xgBPho852LvMj3TtetpqLaFTuArD9AykhVUr3fASDpQUUWXUn29WgmrWVjEopKYYkCQzsEhKWt3xQAp",
  "key13": "4UoG42bbn9rbVnn4UhiwK5fhhRpSFt8aZuJb6oMqencNhrq5vHeHUN5wWzBK556QQUzK2pPJQ1DihTHtZc1jjpNd",
  "key14": "3tmyJZiMT2izvnkoQbqAtA2PYUspvGrdhsyLVD8PaDExj4BWJ9pVbhNsjAvUnxKzE5hPPqLtfVHKdGvzkSztG3S3",
  "key15": "TStXY38NQFC5zQP7ucWoYtk8Py6hWDxqfJzFWUZdThyenVHtJFMHa5bnu1JLnzipL9BRnysWtYPCcYAxx5uMMyf",
  "key16": "3CwPBnMCotAVqddx7xYnt7DuWx9jdbwQByy28f24MkXqkka5PbdpG8ydoJvADiXyaTi8r6UmyjPr3pRovwTyFtNY",
  "key17": "VjghDBK7vzmAJWwtqZgusCWC9RR433LfyYdwAPso7z9m6KDWZW5bWr8a1GjgeLJaA2xat1wyyPYJzGS5JqaE9hB",
  "key18": "5CX9su96v1AP3BkXLKK8Wg4MUCAoJZuhWchf7MVWnnid4Lq5Q8X2tyLzDGt6Mqxxtdmccuve8dMW9RzKCWs5xNoj",
  "key19": "roAkCqF9XYJ6iv6kESVmtBvwz6GCZW5uFiwmyhVET54ntacXdJn8kDciLi2cHCQ4PezBwtaWRnsWg9rxfx3i85Q",
  "key20": "4LE4uP5xLKdfJcRViqyiW7jGx5mzZmmMSaDqeKc7DJ3EqiDoUABx6w7xx3gAAgSGCgoXGtj7wifrTecGuf7cAHRD",
  "key21": "66hAH2ZiTzx3LHRNonw8CdxC7qaBk5dhmrfWb3AYQcMsoPB2KKFBKCwQaCsX9aBnq2SiZM4zcWSUtoXm8L8kwcLK",
  "key22": "46hos8MiLXxP66h4m434TcpryykdigsXtPTbBDZkrPWK6wWcL641xBFu7juZryfZuLNg48Jb5sPYC1GDGYqnLMc4",
  "key23": "4Sh7TT7VEG2BQm44shnaH3bPXWMsEhoEz5gJ5WVY7gcYQTfwLC3sP524Qo1zhK7oGwSbPSPaaQgTmZ73stqhhKTJ",
  "key24": "65mzhj9sUUS11oTUJnfmgY34sabxdNjG7DRXMYupDChUYngp1ZbHdUjJQKkCxKePpsWYZ3WYh6bMWoqaQXVDhCR2",
  "key25": "3tRSAcfqN7ZL1Hz3KvhyE8SFxdFfL2w7xgoyqvKFqxHSeWjgU8ehfqZZDuCsYJd9stkUrUnnWoSgUb65X4Xr3xq3",
  "key26": "tFpuVPo7dBq6XKczu36rCvS1jbwDDbB1hrnhsYBjNsHvYxPwhN5GRwmQe15rtSBVyuN4UhXBmqSp5jfefoUWYAM",
  "key27": "4PQDoUnmyRKqEDYAzNDbZ3skpeb2JibG7KUZe4hbvu2NtgGEFQEbQsoG1mP7kQQAsJVsKt6SHzZvBB93gKCZ8wFu",
  "key28": "3uDjmoiVrB4ceVGHzTEmnrBC55jpv375NHUPd4VZBUkTwHGq4gsQjDh7P2AAJNNSABepndaogEN58N7wVQDfsLtd",
  "key29": "2kjMwbvA1jGk7rjzkRaeyom64V92f4JSSjrpaUe7uigmYXRw2eGvLg4PQ4of9Um2bot5b3LxA4hLfmaZR76Ln4CG",
  "key30": "2Rjo2vNXrCZN8o7puyHmpphuFVaSEWkxgVshwiCEppdtFxC7YhF3SUd8FivmgUt9kKFaPNbJtWZhSJXyfPR4RvCP",
  "key31": "3hi7rEZgQmXmaPAPp313nUikFfjZj9dzBRt7xnV1vSKv5ox58kHTyeedoZudMsQr6TtBURzNtTgKG1QkPD86hq5H",
  "key32": "4Wzm3NmxPt9qnWsadUT3sTih7tVC1MGKarSNf83YovEL2ruqKNYNFRb9XhzthjTTKsbyYhwYjVQPo4Qee1YbgNL6",
  "key33": "CkyFyC7GLHdgghuGtjewCALuMh3doLoaMGY1onq7L343jk7zS8ojTFdXykXy4pd2DokbeevNVfJuRiWWQjrg5yf",
  "key34": "5hX84AYThm21fAssJ1ApnLNvvEoiNbzVBgcNKZfaKt48eryJmTGce63rDgA1C3qU2DTA8BL1T2vq6J2EAbSkDCGx",
  "key35": "5AfdRryCoqQpTjzq6RVRXGHRWR6uimnG4qyhQ3kX4jNjf96eCfd23K9aD5fZzXKMwCjWFuEiFo25izPmE3tefqqY",
  "key36": "2xjzL8nnBGFauJV8aqteW6TnvKp7qjdimJTidPNnDkDACwkNEB3ceFxSAihtkkhPXr1Bag2gHoZyJMAdDbUmGcJM",
  "key37": "5Zi3nn8L7PD3yfhtUSaaxJEQigwMPLySo2xpNqbLHS8Z6M2DhcdoXnNJ1mCy9Hqe4oozczKWSnRbuQjMCxsf7qvT",
  "key38": "2z6Rdy4qiDejW5ZgbSYq7UJub7Mcizn2SsA3k8KEdAewSg2HJU5AKe8RU9bCuAKqPWYoeNFBP2P9fJXcbJpJJ9oB",
  "key39": "b4g2r8NNrQDFT6euYjMvXyr6zgEVfxzgn7fWj7kkXuq55HoLMrCodqSFippywBWNZcYFD5W57Px1wRUGLzMXXTE",
  "key40": "aFpskdypMBDyCWBpkfppwZyefDnsLNvqTzbfBmaJGMoFaoEXKzETx1UBXLVvRHrshMTbabnW7peW7ZEf95dDXFs",
  "key41": "2SJ2JkwKYCFVYr9aEVBu7ehmi53S41kJYDuopS2Mot5rsSX91uXt7QzRDRU2KSW41datsYY8UjANpWDs3BESosiu"
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
