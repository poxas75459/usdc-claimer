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
    "hzmod7tdbiY2Zrk7i6beqFDemEKgnYYGbdBrrziSu5eY2kUQmcZFfcE3XWctEybLGUnj7Ch76rrSsyK23VWMQUS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CSVWNXoMRoGyXsf6owNKLf2Ahrei1bCfMeB6t6p69VzfUR5jTMsnYg4VeEJnT9Ju9xQpLibwGbfz3U8tPEsuj2P",
  "key1": "hqUjYm1xnmUsQbZuShiuA2RQNNa9r8JXUfWZPsgM5tJ9whv7MwaNnUbQ8tBRCL2emzvkfdKKwLnyMFn9hnYkzqC",
  "key2": "5JtuDGPPdmQ434wN9byBM1Br8aMUfUiBy1ShBk8f35vBCtfy8M5ZHyFe4PSb7ssdDthkpxGgkYy1VH3x8RHboTF8",
  "key3": "5Z79nWnQrVV4NdZdt2aEUNYSemfNU7fj8YsuYpaNsZLf5yyn7ne4ujdUgdfAV91jySujfcvC5yQQUPRALExYKh9P",
  "key4": "2omc1NJ6EauJDo3SiQQnwaucZY1t6qBXymyFbh1Bgd3KL2tJqUenMNpgMHxcVp2d3yGF6M8u54TpZFxB5ht7aMSp",
  "key5": "2XxpxWuuaGro2jZsodmsJ71UEp7AyhEoaGKjE4QhXsxFdGwuboK4nYdN3Z7ajViduDr764GhLThXF93Lo2cVDbt1",
  "key6": "4dagRQKueGr5GxpXcG1Sa833S9rZZw9sqpPscMKoGDrHwoGaTK9c6kDwvbEdSetAn99mptJoZpahAKxAKEAQT9ST",
  "key7": "361F1bXu88z5Zcr4N33nP2DQkpzHeHsuBSyfphnLSatAwJYbSPkJd9uQG7youBmXBTKeFuHhTkomSTM5ZyvLnWcu",
  "key8": "5Bo5LqCdaWZLHPRVNG1jwWE1mqzfnTmiESKoi1vVpWikYWoeiUFVnYaW9SFLo2fXBarUwhnMfNn7ATPeyq5evBQo",
  "key9": "22a3A3NzVtPSbcokDmLd6PRVuFSFcgZb2T9Uv2fBd4YT9P3JihPyc8av3fM5d9XWAEsYW8dDABzW9mGnFUykWJ3Y",
  "key10": "5Gxg3GyDkjiVG1oSL2giVdqP5Byr5HyVRqgpJVzNXBcRwdcngngpRqQiB7crCHLqzfjMG8ga4D7kpXEEXkQAnfAW",
  "key11": "3vgQQd2zM89DKR2g1HEhXc9LbkBdsf8bMi6VdyYytrK5M7PHRVVR4YYjzon2pWfKBTcaY4caTk6UQyxygs6Hp3av",
  "key12": "4Xq4QAjAPYaB2i4R78KgxV1qUaFpg1aCiUuVrDdScs2buctC88M8oXfH79VwbQS3wmp8oMw9aj5EQ6Z494AVfxto",
  "key13": "3AZMb434UqrNP4TAMpN8gL9sBxRWxcv4xS5FNSPYbLABJAm3nHoCj2UYTu9PWaK1mfvbKUKZ6gQdtuDH67VqoxvT",
  "key14": "2RbhkBftKLaRPJnaa5qj79dj3cfCq8PzzXV6TKsWNV842koq9LDGdyQsmoCgBa394Uk1FECpwZrzSiQV1Ra8TrCU",
  "key15": "34yKqzTvyAde4h28zF7MFrTfeyQDdi7NivYp22d3qey7DJH7nNmCz6dizzeiNZwRjtMVB6E6iC1zb4B8hHoaW1rw",
  "key16": "j92nAi4BHzZ7s6WdbZq3p8SMUF5AGr4PwaWjWXZ4J8mS526tMQx5Ki855MQukgyGCzHg3NyrnveQ1jQDscFVL2g",
  "key17": "3s67wPDwz5odSXS3FasnChV591LQYpu2Tswz9M2LrcmiGXemHcZRfdUCySnfRxbiKWfynBRZs8dpF3eMDeuMcrmx",
  "key18": "4ftDWZHYWmq1jFEr31C38xJ1rMNqX5JFV8AtnktWQhVf4iidyHY42ZGBFdQUzsivvAXq6LZMo3VRwEq9vF5aGzZP",
  "key19": "hKFpGyoKqnEkjE5JNGfLv6Kixz9pL42iYYvSsafHZGABmJ9Fw4QpMpSPdhqsnN81hFekS3gx9yn8Jj775Qygrfj",
  "key20": "44mwmiQbvDqYWgyHsRP7TCWq8eYhivVpdraAGGzf2xoJL39oscdPH3cHrumATSp9vZ66PWPoKHYLZNM2ihWUWxbL",
  "key21": "2xcHSbADEQcKeqzWaQrHYvYXC47EwNrgXkk87fAMMgAFc8qeAY9HrqspM6twg5ymym5NEGuBDxb384qYqxeusRug",
  "key22": "5nGVYMQmrbgn6Ckhb4ScqaxCfki2sXqm7RRdeinrgcKopBBiBHtjDAnXEEMSySBq7Jot2QZiE27948i2BCQWpkHi",
  "key23": "3o2zRYPGY8MFtskanzaiiUMr1DfLL4DEa3pFX8gJYrL4WpBvwvs3pHiJ57a4rWRfRUBwLDvc4ahGuUeCMW8t4XrW",
  "key24": "4BUHD4846MxsQqPu2psbhDjjNvCiNU9hHRPgUZRzdGmiAk3YLTZXEDrRUghePuGgx6wA2SL5UNbX5gEYkLmzehHH",
  "key25": "4qxEvSEeHNeauGzSrRhjvm8uX4ZYnVkPezx1nPyKTkyE5RqF7amX76NK46LHeqQjW2mcWqChNSpvxvnM7JPeCWV3",
  "key26": "4YLE4Sse7R4YE8sWnpkRe1imakET5Nf7jaXbndQApftWErBJwU8vx2ojD7Fdw5qvAZU3APWziRapr8wR2RapEEyL",
  "key27": "5274vFmhqCBdU4rspJv3aNakyq1VUbosc9RNKSQreVGi5SWoVBEefGymsoodUEuR3kinx4dtcsV5jQym8ukHHmxB",
  "key28": "62kAbhNVd2PWE8QZtd3HW5kDzF4A1VW8iJyq9NVvPkYeRqQdEekD1QUPLnCFeLPeAh3k5TKDgm4tj8iUo8zKfoUN",
  "key29": "31c1bHdDyA9zvCYjE1APNqiWsZkGVxeQxyiMJFJZeDQGY6vpCj7b1wWhyBj7WYBDrFXcZRVqjfeYQnjjnzcfWBb",
  "key30": "4ftp8HU28D6SbNDgv8NpSwsYcBPyoKYAXqFU76Qfvz5wRXqLPgBn3D5b8aPbzhvKFSojwP7ZSFJZDuKGCUqKR8in",
  "key31": "bnPBtcvGciJUCEupGh3oay7eTgksYAxRgxYuitK9EfmiNxhpcavDXg46AgePXWExDdbu7zNk4CovcxwERnHknNG",
  "key32": "5sKgQzMWsSL9aB4A1HhGXmwso1feVvvmcxsQoQ6EgPcVepMMnGhnWsMp4UjXZHzobFrsxn7nXBJ6iftzp8mJuh2Q",
  "key33": "xZSSque9kY6fEjSsECipqw8THQGitsd8odrgsHtdtAjNCH37j39w2K2EZrgC1H1tViJ8ibQiSmkPVpnWXMnGdWJ",
  "key34": "5PH66cTN1zUGuKKgnQhEw4mPjtw7E6UML67V9iU2cphdsFDFgRCnfisUysX7Y95bAJbnmVJw1QKaaaiDthAPgv5R",
  "key35": "3kXsQQAzxuJs27PVdJ4EU6fMAXnDrAAz99JJ4vC7tbatoriqfxaRq2pUg3SCstgYFfkMHMhf3tCenAETWL4yztrp",
  "key36": "5JEtj8QvMXJy7yXJequB3dzEXWavzx7SKhK1jDU4n9WYX9f4f6Kx3qcEz91u5ie29vC5hUEnYH9L9yaqPfAC64js",
  "key37": "5uxgH4Q5oDVvxJZXGJto5HVf5N6dGQsAtqo8p6WYEKEwRktR4Zhjh2tGLhKe7TSkwqw4eXGPLE4S2siQcQCgMQmQ",
  "key38": "FBQipqwZryZhHiKeVW9eMCK9HUS32FRM9PpRWJuezA86rVBac2ir2E6sk9UuorqSVa3GGpvoEayB8ppLtAUEgWr",
  "key39": "142yoRCEmTFwYN9SYDJvpxvyL4Qxtm7P8yWJsyGRHrQ6Mgp9Gw7i3WvCxp5SP7V8rh6Ko21bkQU9gMxCMwbApSg",
  "key40": "2TNJgXhLiS2danc9hmMHxUtyxpwoNmhubixdteJe9vSiEqydxg5oUgVmbCYYKwmgY9niikRZG2D3MNDsnCzEfsyX",
  "key41": "4j8tT84Em5HWqfHfbvYqVG7eV9f8Z16RbE8grjF2UByNK8K2wbpGD7Q9YzwTehq1gpKVfDHkt52jp2t3iJD1dUQY",
  "key42": "3GkMy65ZVzNQXA3xfQk1Y3dUDMYn1BstjcpUqaJZQveyzsneUpHn1FbTMruvz2oo1pyvbHvQyD1ViVPSSniaAweG",
  "key43": "5CjGzTKGanQ6DaW5r3H4HvohRo3BL8bb9ruQYiTvRXRc3San6BR5yBmz18o5GeCxCqDZpBTG7GjZMXrCKKNm3Xfy",
  "key44": "3wgJBmggX62RUweVCHTrr9sRb7rkQqkEK3cQyEDYdKdWGkgzy7HPzMydcnC1YYuAuXvCe5Lr6XxTnR6Rz8XjSfnW",
  "key45": "3F8BY9w6sbjmGCiZbXUjAW2xWWzXw6rL3ZjjTCkWe6mqpDcfwqAXKuiMSgfb6uMS7jW1TGJ9xiyZmEpuiJvUYMNu"
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
