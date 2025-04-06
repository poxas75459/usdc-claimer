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
    "5vDV3ZK1cEYf4RDprGej5qmxQ2tFUzVyhPJgVPSYq8zFpcVZtgnZuVbEkZbwj36ZD9sEsZ4VDfHH41cg5h2kp2B8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k9Tt9HEBeh5ih32u5SQXiFAzF2atN97Rn3LC7kd6EF9d3zFitYMeP5ChnQ8HMsvwPMEw3uCUipNq3X1QhhHLerA",
  "key1": "4QUSkXZY5u35Q5UQChX4XR7B5XDyyxeLVkfh4AhC36745hhksopPLeCqeWgRaMKSE4G4hYhfT9rHmp8HcFKYi2p4",
  "key2": "4rQGbc1zA12GNfPQSve4zWoNyGk4VSz4wfzDfj9d2o3CrsZGUmETKxpTSfSTVV5YsK32X5RNgczCy6Z2BcfbuUQD",
  "key3": "23yBS22XVE4ephR4D3VP2zDozXnAfbkqHSkMrPaeYmuJkJh6vJbU3tmXJHpuHbtQf5F6ibk76G3CkDiYhpvRjFrW",
  "key4": "7Fbn1m2c1xVFS5sypUwpk2LrprFo6xkbqdNCjSzVBXjw8dXCFJLtkzbakUEULQnXACJpeWuf3gVN1C6efWFRfS4",
  "key5": "2w7QKBHHQE7k4TBAvQNniZA2FGFE8XeNLZHB6zHTzpuxCJf4rywXDMXP3Pn7jicb1Wdus76ra48TEh8pN9QQqgpj",
  "key6": "3NaU1p4yojuTK1MaK1CNqteST11jVGe1dzA3p2fxCXJ2heEvvXwtg2RhtMWLFxasssz5gXS2V5XU946VHgNyVLuR",
  "key7": "3ihzzJ8BxxEeu5paa5smrjRhCXCkDhM3QZ7bromgWsC37Vyf13bpmwVxnTCXHmZgEq7pNAsKfmjs17XduuFUbrY7",
  "key8": "5RFnr8gYZbwCwrJkzLWFtg6os4USoSpRbXPwfzc5Ky2S3g54TqxWY5Y9GAFjKNKRGTv2u8oobFP4ebF9UjpeWddj",
  "key9": "WbyZ9PDwqzL482rBaTrvkZaWA6CxC6PjkiB3rh9d6UfQashzHAB4n24kxXHV7zFyM6sAMRq7EMkj6ChW5EW9Z6K",
  "key10": "5dcRbcBpXv4G2VSYcAqh7AUoxJnU9yHxvrPNqayw2e3fsJjkgzNPPNT76gHJyjzV7JkfzNTLHFEaN39h5CG9nk2d",
  "key11": "3EbPKek1nQy3LjPzY1XQJz4ddTLowWLuJ6dM1zgEF2jYT8LQBJdS2aCLK8P9BXfL5rQgzT1NT12WHDWSRcrqLoUT",
  "key12": "SeeB8frpZKt7NnAbQvrGxUNFWGwqsbbX9y9bz5MbZAgna9nGmmf9orABccyXJAP8bYLrgza42mq7rybDHhmLM2Q",
  "key13": "5EYZHGKNX6m7QeJPCDm3MA6Efqneuo468TqZWQDNkkPRZMeQ3GnPyDpjbCv7C9FXWSiuZGskEJAh4HRrPMdhQPNW",
  "key14": "67B7wsnAXnSVjJasCq4BzC1SAfWL7zJdgWC3JG75yN2nR9QnstnqkKbn4wEmBZSGB77z7peAQBWw5kq5tptJe1Nr",
  "key15": "4PagqGQQ5CGQvLrz9iRoejgQDigFewAtwKfh3tRVdRAD9X3mQSawWYQqpFwJcb42oZVurevkBSZCWjvjFSw43W6d",
  "key16": "Tsf9LR6RYXJ9B49YvWLbjiM8KZ9gG8EfDSkMpYzGFedVLVBHhaeRGy7HF7zXqChsB2VhvmAgxEyMwmazukrKUhF",
  "key17": "641Yiw9FPEtHkarwa7PRow3BUvbwcbLyGd6sCPwkegyoYS5kB1TN7ZigjQ7YGD4cPYkWTTsU6WVsTVAcNk2RCAvt",
  "key18": "4wywt6Akvc7L5s17wYbECqdP2KJEj1gDoF7VYv7VJnKB4hL8bVUzYNSSibwSfp9czgMU54S1SdofTtZf7RVQL3Xk",
  "key19": "2u8wnPV8Vhp5T98yQeTniJu6LvqWjyE4keGpUDmNN3LQUqRbtELPfGvbmoCQyP8qT2g5w1iz1WbiFKBA62Gn5eMr",
  "key20": "2xSFT5QCG2KUX7GweEMX86Ya8rVxnAiK23eeDGF7cqx1rg1stguE1sgH7PL5q9P8mVhZWQLorZhoWx7inFzf6Abd",
  "key21": "4xEnTP4rzC3iw23M1oaAvbrydM5QW4XH8ADWXQKqLqdXXj5dYuLushm9sShF4RiKZvXjYDK51U4ubN6dnGy3WPEn",
  "key22": "ZYpadvgygKBzLmBXykmqEJ8mVtbcZ1TibsycpGYhR4UpKDX3m9WqvD8Fo4w5xB6o5k2QAuf8sQuenL5PZCS1dwC",
  "key23": "5WUuEYHtr6NjZRVo2pSCGL5JmyvhSjYbQZMcefWDiKkGDLhqUwFdw7ANL898tCQgzEpcQ62C9mrm2tWgXHQFvwss",
  "key24": "4Z3hENBBsE9Ck2YUbWV8VdAaAZGJmV9wqSjbGEzeYhLvWipDHz7a2beLSVXreE2RKQoU9H6PVeKQvrM4bYopUWRm",
  "key25": "bLiBgvxPqQufZAhsMrLXdMe6FzWcWGbshBLZrAWXrnyLR8oLjfzour1sovCZ5m34Ef1KKpz375HMNYFVeYyvhWL",
  "key26": "8uKfdK5jauTtoeaaRWD6CaWEJwZnnonsj9Xv2fDkmXFHsYkhGVgyJCUws9E9ArX9WTvWT21sJZcbrWkLeiGWd1h",
  "key27": "2zLdkSChGsNgBWo2DCJ4AaNUqjke2nGuAGv9fffvip57FJAt5oWY3zNyVP2qGqqdz1d8uiZJdZiJ9Cx1AknT57kX",
  "key28": "5vVz9shEPVnEfLX74E8tk3FSwPZrgi4k9ht84qKTsKyHTFtGHy9FPLFw4VqEhjLqg2R2Kv6w4sXdvTxZ4taLya33",
  "key29": "G8veGW6Bi38UC3Qcuh8HXvQbFaRBnJQAMepL8VfrBeSrRMPAboyBaJKTabbRM79tpAkxUXsuTVnY7eTpnbLPxoX",
  "key30": "2qN2S2VqbL61cCWfF7aV9TK8Sxv82TTYE6GFx7tbRjb9MpXCLhzxzME416VTQxjQBad2XM2c1JX4b1NCAKo2bWK4",
  "key31": "5kQrRBADUW8CjstZGXVzEBCgWSG3vwtxFB9Fi9Ep1Nw2GwiTKd75uitXsK6RYq7ogFAxY77DoTdpWk5DNwqYo3m",
  "key32": "5ZXYhmgDD29EkqG9vReKFKCuN1HHoBezLZ8SG7UC7EYjGBDSVyRQbvr3nysW1AhmVfD6bXifceMrEXA5hLLSEA3i",
  "key33": "4EJ5nR1jaZGpnWkrG8Yojx2SvzN7pgG182TLP3CAsJBpjxg2udUb4osxud21ndtNG3jZjMADW3QscprwhNHEwCcz",
  "key34": "4tBpv4WjYAqXxutdg18E4iAmPYQPS6WKYK87fKb8cw724UUA6tqDQT2kU4Vo6Tu8sUgHcGk86aNPZKde7a3PhnKz",
  "key35": "3EYXrcwQpz2yRPbhyjHKAcPro7nF3pZcq7ohz1s2EHCQXJMC2xRC7MaD3wG6hfCpBj1wLaMoP32vhRsxsrskEbCb",
  "key36": "2ge8RbubGDWAJR61zHoztjcyQ9bFYBKyQVrhVG5udWYHh5Z5EypttdoKScHQaVYtNKZGU62z8a4NvRGDMxV3y61z",
  "key37": "iPCcFaGLQ2P5MBA6CVHMzjAVyKb9gJFQN2qy7ZzzJ283iTqf8xBcqj7xsSrv9dYdiqq2ZNLT3Q8bvUpMHxMcMro",
  "key38": "4TYtQGE8pQ8a5FQHg15dWYUCJvWvNkGuvBqC34MX98eJxfmKD87kEvSF38g7abEdJXezLwG7YPubZWwd8LCHiMAW",
  "key39": "SS6q4LkumCAv1TpvJgSwPmz8RbhiENCEVGgEmQJaajgzhSty7SEoUb4Pq5Vk7YpUDMHC8aJHBMPLk7kWeRNvFno",
  "key40": "58LhWKW3qgFqjwFvfjfAHg4zcB9jv5395oJGjTwf96pvZ7W7VDN4xATmnLM4nhXw7gypYAnwRRz1NBRQqKPegKdF",
  "key41": "49aG63J8iNoyz92tNgD6GXDFJFbhBGwnHK1prtVbVaceN78D6P4LBHB23DmYKkWCQSGCb3pCye78ZjC3E3Sot7He",
  "key42": "2Y9LcY1z8NiAX1Y4NdMUGku38dznEe45fs9vL3BbZhcKDx2Ujcs55zy18Msh1FfyDbxcTzt6tQ8R7LE2xXPs3F4J",
  "key43": "2V6DqAq1oeRNJC7iGP3B14ztxNKjCzXWuFJMq338mvnqLqBNZNhcxeZWNFERUtzwFk89ZiF7KQ7cJbKd7EExes58",
  "key44": "X1Uc3bWo18JwsfoGd7yuwcy5RB6ZPhEThRBZkaspmmp5YTPc8XLHFeFCCLSW6oDYqZRjb9nuTdxrP37rEDnT5ty"
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
