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
    "4rNk2qikYhLnh9NxEYvJbQ5b7At9JLGFdoguAz7DDtvXY2JRfKmooqwhbZvVKiipBWbe3yybwaDEMQak8f32DEhg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yEoXBbbAoNDskrtB65aP3gX7TeDJ5MqJkBuLY69konRU7Kg42eRjFEXjXJ5VdTH3Lh37RoioxGYqYfWfVALS697",
  "key1": "5GFGhXiwnGqHwQgzpyCWQKDMp6iWdegybNfmhCoCy1xjUNFmSFkWgzUoMVrNMp7JViWEMkPDtPP3Wj7ouCxxkMRS",
  "key2": "4nneSRBrDKkdFYq3xTbN6PjYZviC18UauwHkzmJSnF7Nuv4B3mnnFsU4tUgnhCNDBTtR1MaMKUB9u31d7YfPpjxV",
  "key3": "49WdH77oWGuUFsoVWdyTgHeEioXJQkN9abscE1PUDpXVe1xD6FiPcWCR95fCLFbpTGBs9hL6scNjHgcg73gq3YKX",
  "key4": "67Fzg8oQBykPsjQLSyuhXxcEbMW2JpbQRzHaiWTqANRd2UGFiJgV8UYWyWNKDRqri9vx9hueyoJK2DVjoHMzhi8L",
  "key5": "4AXftGBX8i2wrqXgeknkRyU4KgtHawq5LfQ4ZwEkg5ETxkhAaeZvUmPxs8Vok99Xf3RDHojr5Aa6NXcgTzUrudFk",
  "key6": "thyezYJ1JCyFMCmNDVaGB2h3cycfZgmfzXGGgxB51KQuxHneDGKiBH4spwCD8SBKTv3xBzKHp7rUwhxW5aHpwXR",
  "key7": "4Z2R8E7cEupdQSoCYwGFARJ3rTgTkkGHX1P6ygAFhzznZpAf1GCVYRhKfEpuQcD4gy4zFDeoTW18kCeQa2Asuq6b",
  "key8": "RPJKqTWTyvEi6usoCDfSGnUqd2cHitc2eRqvAX9BXxrFeJFBJMYoZsh8A7zwfu87FfFbKP7KTXx8TcPv6APwtkm",
  "key9": "r4maaP7TwQ6G7N6wqi4Abt7xgv9X2NND5TqEYcqmuYwrWpj9gQnDEEmT6V54yMMzr592Yjhe8WRHdtSSHeMB45n",
  "key10": "2gvf3m5iQaZXPHhBgK7PYRHeU2fFvtS1SeA7BaFaGZ9BXHaiW51DCAaHG1PyCP2FDKSyntjqdsFsQbeKJeRqzoev",
  "key11": "5h78HhSa2ZSkBeJzB68xZGNTVLVabTS8mZvhCtBqfYBrBtysbEo6x7d2aYqWfdQFAvBfBrZBufe4h9ky9qR4nMAX",
  "key12": "2B9YqDaEZumBXe7EA9bpM7nVQP65DQj9pSWqKtVojraHPnQvFx9ebJc4BdVFph3a73ZdCsSyfYbcfHyAdW81NEwk",
  "key13": "EzfCsMRH4cX6F81x9sEMcb8ruC3EyUfsrWKaXU4rPxUZEh1pcsS3ZhM6sknzr5nGVp9L7E8qsiofvGNXEk7DfqQ",
  "key14": "48v9yR7Ri8u4S2mzbPw5Gyf2VqASLgp3tRF1hRfD2H7EPeF7Zi9GH4GXgSxRU4VcG6EED42QuKykz7SgRNegGmWy",
  "key15": "5sEcNSEtyTPHxwNSvQLgpifxXSR1Satd67GwBVgkP55fbfHWCuueMAZ8VySqf6ADQ4nMG7U3NKNtLM8CPXQosVtN",
  "key16": "5VxwaeQfhuq1fcVxRKgyFB36RMfmqiq1wstN7cwT9KGX2jodstt5DukpHHp7PNF4n347gCQUTHHzuvmGi4pZ6LHC",
  "key17": "4hJ6UunCqsw2ukNoWXD6GkNoVGtdFeXukxzRmUqbsZt9pu7kHuLqkYnZ7UeitKctopbPvwrLj36eEDi4L7RaEcFY",
  "key18": "4F5mA5z6KdV4E2C4U2zUqaRULbysfuXFeDfzhD7VMZheo8mFhmGbJUhkmAcJbLpb8B5AULtY5SFPty5LeUNvSToi",
  "key19": "2WSSH5tVr2mV12CituFCDCXzR5wDohLKto3WREaPHuvfQLzDHoW1Nn3nM3tw4XvFftYaiR5VDfwEMwivFaSmSyvK",
  "key20": "5rQwccSrG7mgBX6cggKRWMsts2WFHYT1oYSCABuu3PRpX2C5Ra6WjpY7N9PR5iXqv38vtwGFkMKFk5WngzZsqj2k",
  "key21": "2tA6dEFwQd8k1BRQLDqsG1EbgDkkvzAbVnyNaEgedYvstyHDJUhn1wXgHoes46jLXJY9eLE86xU65vSdSdMnsJFM",
  "key22": "3guMnT9CAvq9jVfLfgt2Q79PAg9GPnA7jwQKAqQvMvvhkewZps3X68enRfY3PkKZsozAFLTaLt5NeZZoyd9RcuMW",
  "key23": "NjJm4duz1aUGDx5WSsTNay8S7v77F6uN3rr4mrj8EoTc79YtYpdFCsVdiHaQaJz8RipcMKvDdyoL5DdEzEYECmd",
  "key24": "3BaaCECn5GGbeorvs9yJSYYUF1vtFiGYPQN9Z2tbotmYWeWvzHjiS2hCv4WusrRmJF7uYNsihvH5RpfwmDumQH5Q",
  "key25": "5VWjZbZ9Vc6sqeWrQSPuPQrvYrXtGDmJnCEScVBYE5cEQRGxNn5cSUmHGULv9oJbDr5Hpbg1TxbUBgGiTyt6fYm3",
  "key26": "NpSQMfJwVbzmf8QRbBqdpdBfBGWM1pWQA8LhzABMHDgz8QFSUQgiRoE8NWfS3tsjMCxYWiBpTVZ8sWBvDM2vaiy",
  "key27": "2DP9J43WavaCZ16MQonPLM1H1v61qfW7cCw4JjNVb1a9zkSuQEgGDxyoXTxNCthPjVP1BbmeXarz8YopTy3LFBgL",
  "key28": "2Qy2EyHi9xiTtayq66HvKRjsrz3Bn6bQRerhPqvcPniQK8Mj2w3UCpGt73E1GCJrtcMcWSFMmZkXPS8cQMtAQaio",
  "key29": "4gdFXRphgPxPkLUs89wx3FcnyCqdCQmxmQzyjbNwJPpAbe2AoDMG2BQSnGnif71LC3j5WRCGo3yubaLyNMF6UKkT",
  "key30": "5YNmTsFDAZ659vamRx4aBv4Y7QaysqCPEp4353A5zjiKueA6QpwvpDaWoufSN7KuEABJJKBBXKQ3QLJiSWFCGuoB",
  "key31": "3ux8ETCTZa5h3kGmEHBhcWuSVw44mpdePxFVLcevcxHFTJXXMPbTmj8WRJw6B3AV4dWm4VJs4cFBqV5bVMEMEhyM",
  "key32": "5nUDMmqC1uRrvcyF6nfQ2yxjwdtJdYXSstAcc4Tdj8Ph1QXjBpsY5iaXRKd1GomUy5pi5PdtSptymQVkQQqajjFb",
  "key33": "mUB7gM92ens46wNzrZc1FKgev4st2Hnfh5Av6cu81HGFCw2WqW9DJ4y56dfKvnXhUXQ3y3QjEhk1ehutxXtYqnx",
  "key34": "4WsqY2ab8SFn555cUScC7shGJqBy5GkySKuZKuAL4AXcP3sZJqLqhqigGkcPuwsi9vahE5Ur5jtWK34E2rPVwKAp",
  "key35": "g9bTbLF5P4KFuMPwQBiMKBtrXuxJfAT7FBEMXjvsTG8F3NcgDuTRQNBzdPbLpWGtpmFT6EWA24ttczzrY9AtqrG",
  "key36": "5GggdNajB7vzQjwtFTWFa3awwdRZyS1sz734oBbCvznhKcYZfQAYXBXNmammYvxSSxRrYoXt8yDM254to3r6s78R",
  "key37": "5qMxmK8waYXkWa1pyHyyZv87AjVE25SJKdWZWe32X3sGLXhbrKz5gceo2P8G1Xf13cG4oF9tE5kLtacWk6wyjZQk",
  "key38": "65RRCQhAGAYxs3o8DSnuzSByrY3uSAiazWNzjGwc5R3EKeZTQFw1q1igHihVExpnEL6cPaLihETeUsapGG1Xmyhh",
  "key39": "2vHSBouopJJ8NSj8aittqxbXqssxiSeoBzkmnLReVStR8g3tYpS7SthoVUEoPyzqko7omsy8yJcGy3o4SyvjvUAQ",
  "key40": "rjdEgUg3hcfwKMRLk7eQcT9ZE6SW26G8H1aGFREPoYzsLnugP5Qnc9R96rq6Ri7B2X8RRi7RHza1F3tjaHzj3o8",
  "key41": "4kY3TPkNTZHkMSYgwVDxAg3whJLfAL468nw3K7XQ6iVfRTadxBiHFd4yingddZbit3aQGx7YTGxxzbNrDqDGDbcc"
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
