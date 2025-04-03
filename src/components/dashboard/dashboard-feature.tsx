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
    "Xtpdz4BRoVMk4TVxNCGNkRPMtKrJRCtpihpmu2nuArCa3Rd8a6mhMSeBRpVs37pkJ8RqH25P8hqmpA5fqJBofUM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48xgd3KB84oTnUuDwgAzyvJzTyd6RLJ34K3rbPy9JfYs3vRvoy3ydZGqRpGkZc6KNDpsYZho2kiuixJRgREvuUfB",
  "key1": "3e8WHHyvF6Y35YBgzGWT8tSL1UbK7wQ9rQSSnKMksd1ckGzV7A2pejdjLsB9626gG1N1NdWijZ6kNVMNbgmyZsXk",
  "key2": "2wvWS48AWikafmZoWvswaNRKZGqiuxVJbXP6c1DjgSHDXe5JMzpBzXwtNfymz6iwRiVzGbrgggkZqadEj8qRGwDz",
  "key3": "3UMFGqf39JtuhZV2YKAWmNiB5t97EYx7QvbaNEQmKLsd3YqwMe68N3VogRJ537NNypTAoLEVdiSVMWrBppJ9feNW",
  "key4": "62t5iTtCAoFfq8wMBYZBzwZyijLLDEmhCUFZmoEATSb6DHg5iqvaeSeoMrYFAWeuBEjMSJssE3MN6ProUZhyi3vC",
  "key5": "2jhB1hWmX96BpyPgc5MVPBpEKFthwTUVauW8t5o83xFXjgouu3tFsBCDKqqwkgrx66BgEfvg53G94nCDBAU53jjc",
  "key6": "5BS4iv9SyTrHDjtD5EuUQKZRJUqVp2JgKqZkS7ezCnsQ73Xffb9rMXAhNayPgWjxRAteTS8WTEwz8ZqSSoN51jVf",
  "key7": "3eckY6Y8jP3Rq81Na9LowvA6E2H8cmMzQ7v3KhyNCNj5ye4isRpvVmsQwCDnLPn9DiD32NPPpSbFQirQQqds9GSh",
  "key8": "wp9wbNWrvZFsnWBKkwiEBBJmgHv3GDsj7sYUjf8B8b65XaNiatCyMhNuThhfX24uGC3XNut9bUaCH4WY48yCx1n",
  "key9": "5Sm6tU95qVbVoKLJjDYofYTyo8ajZiLN93wDFW8GVUsWT55jGKbL3se77Lcip8oZnhHYDX5zzeJWd7ERKRE2aEgk",
  "key10": "2GyyeMdtNtQXQS1enAiDPT4viAtKhnrU6wJwnWXp21Pv4ocV5wjxVT1zoEqLcwBikC9TEQYpC24TC26RZ142eQF5",
  "key11": "5xUrpNGKksYqfXBeHYnwccTWBqPUG9thUEk8d1X8q1kpT7Tc7fyRz3QjJR5WzaC2EpiCw34SoZivzqsm2kqgLQC7",
  "key12": "4L1Uvquc7g8pZST3zZAPLrMc7X3HPdtvpokVMLAk8rTf2PN5Tie38YZgoinb5oVESUVnZQCtJRQo7mwogSWuQcMR",
  "key13": "2Zg8SPyN1hKksFscB9PDCMjGHT8K4Hr4uZmdr9VxLaYiwC4TnnTqKxs74D51j9bge2VJf7NGVgxoCHxUo19fzfyP",
  "key14": "2zDBLsT1nhvJ7bweoNYVWeksrpeTYutF5QRiftMmGM9foPj6WQYVrLgZnZiBkFeg9Hdmntmsm3jnLe4gWzqpwRH9",
  "key15": "2QfHoxAdJY2pWWhGX1X1Kjpn68SXYqnZaFTWBGdztUUrLu7qWaZtQUAnjrhSdk9uiFTkBDKG1ULSKTRRR9DTesCd",
  "key16": "37BQzKzw6N1gYWJTmvtvz4QE6SzZcSs5EDCbiiJAew8UT9iLXoJtVvqnvZqUtLMMgFrFjQVEEpacv6n9xjVCHEVZ",
  "key17": "3CHny7a9m9Te7jWKsvK6URLfNWbJbeyHjzE2CTHxz83bfRgN4Qx47NaM9wvbo86dhSQKsMafD2SNVRLq6D6thhN6",
  "key18": "2WvXv4ckWj1gexU5d6CwSZV9pRvkwwFvuakg5k16kmNtsVwHzWRTafmPy7sBoUywBDXdHE4LLWQpGh1xw2gmxDeQ",
  "key19": "4iAUMbhok5KDo4PrHaa3DAEPY6YCCMjfYh5SkkWtZBkFZVRYvyfGspZBseQbEt1ggGASdcE7vzo3RV81G6Z6wZia",
  "key20": "wtfqVHDZiFTRTQiobMMJUi7dP2EMSvD83sXXg3oB3kzimNbrjMmZqCXGc1XX9qFxiaiJQu8MZkG7G3UNVGJmWWQ",
  "key21": "4YZhcDeBpHq9EhsAbBGMvkicpbajJiyGCvXzjBBE8beNmzLRRpaCMoDiwMq7JJEGQ2W2ct7RpAEuso5VpJSWZmNu",
  "key22": "4RibRtHPtz2oqxhweuJ7bfhyWvwdU7ZquaniqTwYeLu7KmwmAg4rmPfuVRLR1wLsmhnJdhJoUbhrjbV2296qDFP1",
  "key23": "59DzhNXYqeQp4EuH9P16VfXUQQVB2weqQVTao3PSpsfPZevtYjkCwEpSsZ7vMKCFFq3uyi2YLCpVjp2Wxf8Pw72v",
  "key24": "4ngRHQCFMwFwUxrX4EUzaFcUin7hx1A8mzt4pk5zAxh1tkDT996yaVvE62jEhTgSs9fEStRrhiTy95YdEuxhWNUd",
  "key25": "Szmbrb4yTRFXgFGa4VUaCn6GwCi7s9SLCuy6oqDUCpdGKKmABxHr4zVtMwRuKzfBcfV5irNZ4pJf3bxDT3xnd7e",
  "key26": "ELAba6xcea7zuDeJbdA6NF1xpMCKW3uJSGQ6WtemhTEA3oLNt4JwN4BniSBsebC83p87bDztBcNnz24rE3PhDAX",
  "key27": "3pNPdYsu9Rxu2ZCqf3ZRMsuBuGAbnU9WJhdbvGuzt3HgxmdMMPnKJQB5b4xnM8k99krErojnbw4cQm2GMJu9JpZu",
  "key28": "22jvt2STQ6RVdLFHoPGZghX9vE5RLA3ACRL5948vqKhsymWyXwude8oiztRJFbhLGoPrqg6a7Jrwq43hDUUEjhxT",
  "key29": "4buB1oe9vYp4wDERtQrrYg98eSDnDPKDfxXK791n7XjjNVykKSUuT6cmyHtQF6TH4RzVLuPKChsR6FU2ws5ShJh9",
  "key30": "5ZRzMdaCdN3q1o1ubj1wBSMCgJm8UeEDgXHQMPfifwQKKzcykwMB3UnuEVnsRMhx3vhBQd7MQfCZF428kworbzvY",
  "key31": "3yjNCqwPdrnawvUFELfzNcCrjfvxC9dS1H8mTsTbYScNeW19jVSFs62Mr6UXkhusvBQsMoMSzD6DudYyQ1wgCXo8",
  "key32": "ZKKsSvnE7tumTxnEfEVoTRXSH8PxEGGn243csvcz9oXGdGUbTRy1CrzUdL6DqDU54LguWpoEB6odNr6TEbRREuV",
  "key33": "xd7CZoknNPX7e8t86CV34Sruq8PU1LHHLmCYUm1mZVNGzybq4Mwovkaj3RoohUfCC2k3EC5Zu2qNKTctRF1ATmS",
  "key34": "Ckt3ASMEVrda7ByJwubQE9hDk1D3w7vRfc3RsVz2vr4XR45qzx4dQCnH6XQMs4q9qPRUJxWV8obWgyVXqMHWuZ7"
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
