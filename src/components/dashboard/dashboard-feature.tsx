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
    "4G29y7jB5zCSs69PmCEwwo7ycepiU5V6Urhx7EwoGyrSpo6yZ4fYSixsDf6MuFsAd3h72UTkfuPap3VJ58rpFsqD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PBj47YCuwyYZLVzLPiYUemmauFcxzVHNpe8tREk9pmLQKbA5tfTrWpY7swzfGJiAN3Douy7hELQFLhYVEbW29z9",
  "key1": "3gK5edTiuS49PAxeiqY7vK1ShwenU7VGpGoMCNC7yHDq8iY33dbSzCmvrdYBvZuH2Svaob2GHub22okppLCmWjb7",
  "key2": "5kWM1kt1qaJ43PnsPgiJ4cD5qik11LEfqFhqNmHahv7L52YifpkRvqX5CdGBkb5SXPx5AUAojaJLEVf95ahX3vkd",
  "key3": "5ckGziDGo2DxTXmjKJ6wo4q38fBPHZNU9GBi8kwdJhZbrix2jcJXWhuHv6zUQAYC5n1zowZY3dniKY2aUAHULtgK",
  "key4": "4d8RRfDqwitYMQFLC1TewXrxrUbdhGK4rW26eHfdxeEwt8FZRCA2vrRChduA6X2wtM12CzZU1VH6uBeyFKX9kcB4",
  "key5": "4cczVxLpy9Q47zy1xSmexdkoAJMd5w7Mdat33zRApyQS8eqDKwgc5hST4QmQJ2UJ8BnVg1nQcDem5Pn8Nm9banEF",
  "key6": "38P9CZwoVCFiQ6GvUYmbLHT6XrwfTDbbRPkm8fxkb87978QoMQ9NJ3tQTaLE74DHxfzCnBDHtt4uyRMbSpzJfGuW",
  "key7": "T52cFxQdkxAhE4ugQ5LNjTkcThhdrzYSTXDyFzFC5m5XJNGg2kAjQHsm4KsQVXQDMkyiPxinzMkayASU3FWUvZm",
  "key8": "2ZU3hrubWsLvU6S3RQN2rTCLN4fHY9d1twrDT7CMbYUcuM5HJgkQWgaRxsXdhDSRYF7VADKpgWNAC9gAJXNmffF3",
  "key9": "21mEgFWqVtcwKcssPdotZE2fbG8rMDpyNaMjAALzQzkn1G92FBVaf669eUSgZmPrvb8RAAGpe6tE27BY7nZGLYLk",
  "key10": "4tjgV5WGSahevUmeqMpD7DMHVjzRV7VKwWBsV7Knw5f2pdk5uEfoP5pQ4Bnr8w5CUT3s9HqfgscdqMbDUmgPZaDJ",
  "key11": "47hhruHq4Yu4LXMQEkUJaaPR6szfXyzXZfhefUnubBomBfNJBrxZJRsi4Meb1jo7NcGczKfHrwe5g8LQpxeq3nXS",
  "key12": "4QsYCv4wssXTMDf4E9NAFdV7S9P6FsVd8WG6aQ4JgbG75XGhKo2wiAjDvcvjD92omKZncdZDqG4BZ2RcaGYHt3uQ",
  "key13": "KgTPYUrFJQYVkJoRbYPS1B7bn8BTjSX42LyybWUtzvnDha1UewDSpQPVoVnHpS7PwS2H48NwuRyPpNkaRYnx9Ev",
  "key14": "2PaNNQSa3NyaU6uVrYxVRstTyvsjZcNmwH41dWziMHYpPyUp3VfrfBySNDcou4Jz726ybA6uPTeF3DaHaVKspvXa",
  "key15": "5YgiuCNMqEjRkCVV6Mi4Y6kCmfvmRfLqhLKBQmTafuU4KSLi7Ceij1kab7sse94dynWJCvNNWTpDJfh1pQ2RcGhs",
  "key16": "53E6TeRYQ37KGBaSiz37WPohmLpfnuQRtKJ49uGR8XaPXmu8hM9E1HqnKJWQeC587Sy1tBbTc4fzMn1i7SSZRRQD",
  "key17": "5uh2raq6Tb42xNG5TWeC3BCQh4ZDgE6QQMLnPbyR6c9CcefRwfVqrvziZkgSG98ZEDCidF13MdEqPnf5FND6mw2q",
  "key18": "2UQ7YiedyoYArmrkH4Z9xD1SS9XqeXfNc4PBp7KB8raZagRWzGvhmq7yVfu9TKa8eHYppPEQZTSpfbY2PspogGVc",
  "key19": "f1tAYLdQWYXE56dtwVwbVVuRFuWXvYwsy7cBs8EMZKG9kgGMR3C9ASeGDPtvyAaLcm9cpAtsZiSbiRCunA4gMBY",
  "key20": "UGzuEjZqxXWnZZrcgp99FYXXLm5RR9d16zHtkA85PXGYWPDXtMuK1TiyvDR1zGp8xP1D1gn4KE1T1pztgkAL6ua",
  "key21": "4ruN7EQ8uUjVK4YyBSzKTajJQ3QUGj31dH6GkFcQ1Yk38HQK2jm54YXfUwf7mzFQZArz1HyaYvjiCHdoxCKcuWTK",
  "key22": "Nh71JNopcsiepcGJ53eXsFUuMW42EY1GNdAyzAQnyvuBKXBipBxRE1jVzWw2hrHSHGYQMQVZwPbChnypEFnkadY",
  "key23": "2WUKnT5sVLvjjehHXVyojMskEVMQ28YTxMFbiFqtD1Lcj1jnNzJTxKWKm5gmkHxSQXfktwg6NXuLxmn4KYfHyffj",
  "key24": "m8bvXp29P26NbqKB5aVVS7VodK3qjZjYA9QHbki2C5yC7GjH7AknV8GFtUP8f8y3KBMgqkJQhwkUDDawLzdgVd2",
  "key25": "65ZJHE1TVkpcTW2kokKU59d29PkHQrcNEfkz3WcGcbqxsVYf7bCFidW65BSEYCyhzCDNhn9pRkzkMDWvxJ2G5TaX",
  "key26": "3jvKxbTUhVEMoyJAWoN524dezgJUKEU7dyXMQ7TdD8uKNmkipPkfoey2P4JBSYiCimptqU5C1aSU1tXgHSVFFyuz",
  "key27": "vmVBy5hRE1QvtgmKMsSnijhkAqHduYRPL6XpPXvidkfEBjumPyeGAwYXyx7H8trmJZdqWLakqMNCqXYHBsCU6RY",
  "key28": "3TyCtosrhax3o9QtjTpXdYujw28HrzY6xG4ApnRbE4tsTTddMoJhtb8qW5jw9oaey38BqmnJyyapfBgpefRpxtMD",
  "key29": "3x9d8w4Bg9QzW3LchMkaN1gnDEC5yGAaGBxZap6UBT53URE4DGNBWd3SBCFF41zo7R9g4QYJmgreNDK1FAkR9fgG",
  "key30": "5jKYgaLUKmwzUvJSmieUYXpKSK8A56bPc79Vq5rhPfmeYH4H22YQfijcQqpjA7zdBe6mKBhyYdfNcK3SXhuNjmF",
  "key31": "4mYHqp3Hc6XiM5yy5HH8whArkPX1GTJkY8Y8QDVLv7TNTRLDbtdWrVuqCffiRDsfHkVffRH923ycQdVoshPvoXbF",
  "key32": "2pjsoqxsvMAEzZRxftUHky2PYGRK9CpQXCCsNuXnZ6P2ZzsyPcmidieiUyo3nYL5HmpQySpzk6ggndDm53ddNpmZ",
  "key33": "24Q1GvztZBCPehcfrGP17uZf7ZCRcpSENNE1DGCFCJFtSUDYaUVBqNTVXwyLHKLNWDX9yiRcYCC81ppTvnfnTWhX",
  "key34": "58M9PRtuY5mdhdQCRwzUYEZ1V3DbgY39Xjx5VrdguF8dqhnxg1XS82YSFqnr7C9kKmZHP66awdxnw222y3TDtPR5",
  "key35": "5A86b1j6RGE3VA5GrH3QxDHjSCwe8ypMfZhefzjcZsPATtfM8MddHp4JkhUjK8ZS4HKDczpmc6KtcaE87BSYXxJA",
  "key36": "VUnyz5tJ8bQ3HhAEcx6dbFkueLJWy8KdMYWjfzM3w3wGuy9mBGgfkAGE8MxpW9gQJXSWV2d1dgFCfCCphnhqYLW",
  "key37": "3g1nfGb3wV5WJH6wZJwpJFCPTchT5sd3xkWriXhkNrdCAWA52TNztany4csvoPZ38yvswHDRYc4Y2Fj3UUd6uGt3",
  "key38": "SjwRzjS4CotyjtsNkqtwPQSEiJtVF32LEV3tPrS4vVVyi44zxs4AwGeN8bdtm4S5KnAHbZvpWtU7z5g12PCt5ya",
  "key39": "3oFCoTJCgM5w8k1S216vEQ9ePJksgoF87sKQqQBAawebhgMhsP4TvV6vpQ9gyDnTmS9eHLjGCHT2BKhRt7Mv76JV",
  "key40": "MG2wFj3TkmYPyx97LSVfw1p5aZQrepTa8BThVz5YtGMa3S8Hk6qjrA6bb8ugN15rasjJaoKFqeLrvYuGn3jyAzq",
  "key41": "3jNnz4ZMnShDQ1AwQ4hgqSg8yurKPF4q9aYDdS8itSrFCNVVutggmQqsKePD6Tk8at6yhpCDDJSjoQc498DhbWKe",
  "key42": "3nnxc3nrq6iEdgsTdSway8a8mPLJnEvnXJkpuZmbpx8hRMC3d8X2vic61vjhKEnLxDgyEihwwgZyFwb1aLurhGk4",
  "key43": "5qcnsrAYwpSnzn7DE1JDsjeQ992oKD5jp7qXhYeM8iauqWR5TAyY98iYpYe9nCF7jATpwhNK989NUpqr4cW7RSbm",
  "key44": "2xUuswvm1WB1MFUapb2Snk59WUt8tzKxnUSubRyDVZXtdp718oVxh3pbJiZ5pBStUXweH6FxCFoKco6yzbuL3JKy",
  "key45": "Ff8o75cH67qZLjaHH3L7Nr98LiZYaQTSQ1LsMrpFr3EYRF7dK6ruzqfNMweUJQ7iG43UqLHTthNLJWtCHHKRuwk",
  "key46": "3hL5ZugKxjchB1eacKzu8cpz7gH5rYNtmVUrEm68sHG1x8QuMDwHf2k48V3Ktx2zNA5jfTHniPLoRoyeD8SbhSdZ",
  "key47": "41Un9vU73YhxG5QNWiTCidjeisKqAyyh6P2cMuyq1vFvYTVpPTqHJheEDXwMEXi6a9Tt6gAVZh9SvqDM4oUREZzn"
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
