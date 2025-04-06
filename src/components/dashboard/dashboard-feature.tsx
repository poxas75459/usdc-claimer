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
    "ViqJwsDw5vemRgF2dySx8oGXej7MdwqcJdiohyQJSpYKmQAJNjdZEHMPGCHRUT2dG2vvU2BbTuc55Hucryy9aZb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FiffYNjRgP6smAZYbwVX4XPxsPVoX4qBvehBi9J91WTY8JDj8S27JhNNkABGJE1ry8ZRz5f95G6ym8NEtv5D3Sy",
  "key1": "49CDaDj9gnebdnFqv6jPyFZiVahVUCGwycFkvC9GSDxLMofaTqJRcnnE34T3eTS5VAXKG31sGFjZ52Gxr9uSdMdw",
  "key2": "5CPjsRhxrFePaTSpYLYR42E67zLA5p4CVKbqcm4anNwCFtKxWiQSKA8CHhVLiSZy9vuLPSKpy55QmMKmwVCCMA6D",
  "key3": "5pBKbgZuz1LvXpxaXn7a6Nb5txudLtEHDvpYet6bc7r5PkDaq6R9vR7go8BvVMvAiX97Cv3BzLD9RnG6jQba234Z",
  "key4": "2NoKMjfZp8tjmVm62QmDHsjFYSNCmorytc8VNFb51Y4VVvauaXNgx4RtRLPHjXuEhmGgQZbvmhgoFBptVbeiG8ci",
  "key5": "28Y6qktYiam285mFSd163veLJHN5zSRwZeVDZi48xX2XmSuQrmTNKPT83ttHtviozPNWQKCMzfK8oHtjhxaVFXgM",
  "key6": "27Qqgf9UziwGE3TESCEKuy7kp7r9CKJG8aBv5gDUxE739qdNgSbFGmVmWKjKMbQVgpdKpq6urJw5b3bRuCVvMTC6",
  "key7": "53fjksqW2TQ3kf9pAivgR9dMUCJS4oDXCeMRL5Fx2DqpejqFsDCWqBpzTrpBtzRu4KkzMg1Ufa5krhpBQf9G78ej",
  "key8": "5NJQaYckaohuVvDY3otGFvhGWv7a6JUEW3Qv2x754tLzymK4pZEzVPa9wFPRLakzzYpttBp9R4Z2LCeerbLpSAeu",
  "key9": "2XbptNoYRuRvBcsLaPSxNnNpyTjUeFjXjHgWRUhm9g6D2HbhnQXSmMQbpskHuDK1Dk54WtLuRE2FBkUdWQPyx2mK",
  "key10": "3kiZmmvgDaZ52f2inm969wcxPmnkpD6ghv2xkZiPT1ZNMsDDm8PP52hAiQPYh6E6QLZKr6iZXckTMPasfQi3rwsA",
  "key11": "YMLJJ9E5BqGQ58CemDyoByTCDsycaTL5ipkV9ax98iLNRpiFYbmk19BSpSfWiu7NUQCQboGRxwo8RiSAFLm7Qef",
  "key12": "eCULAZ8hjWXtmWe3VWUGWdkvTop6LVfosfUaXcGiinXAdzDu9oCPrq51YU6TfLKmjsSY9Tw5eix3zqyksidYRUM",
  "key13": "53h8MuZrdcLmt76qFkBzLhEqSMNgKQDzgiRUS5hSmZA5dh4rNkRkZR9gi3vAL8TTpEUmnJuN9droYmmfcgKnCgSw",
  "key14": "o5WuBebkZe1PiTAiCnH2rHFLaxsN2aWPAdQLz9kBmohebJqASE2AaKwxsW1kfSgJdWTxne3Vv5mm6fPNrBSGUC5",
  "key15": "3bN6VxXp7waPGBP15h4fvdXS3dWeSNymQgd8c7Eft31gmbq4t7iVNuP2qFFzRCYJxfrrm8DL6vbbeAkPzL3c6dvw",
  "key16": "DswpqPmAqyBYpw45mVymsaNXZNbAnNji9cJSy1MmcPQMAYi521QaZk27bwENh7W55s3y736AizLPDPW3p1hnznr",
  "key17": "9Qh6VkBiDtEoD82Fb4xux7YHXqtffxNuvP4D7ZnYtKHaJcyA59cMTYbD85kMeTUAXwBgDBMvBs5TWRCNoHZqCcp",
  "key18": "sWqe5jAQPoKJRagdcnVpwRn7RZpD8tNJnXDYjJteo5yHYbUktwptjqCpoD2h9Y5Gc2XY13cKDFTHS4xmt3Yg4kX",
  "key19": "5QFS85Lx36RXEa64rbNHsHv8zVKDnUX8cUZs65rSGV35GRY5TjmeCkZDphV9vAhWDjTzaX6M4iGJTeUpHf7gS1eB",
  "key20": "4De8h6uTvVFhuceabTD1CFJXTMgn9XxgArHABVWQfNiJr8EAEd71VNAJwbiD7rCft5Zx1EmwqT8CXpWQssTkAQjy",
  "key21": "4P1x3Uey4dEnKHy8WVN45FyMu1wnJg3bRSQZH3xofJbBjHU4ZknJ4j9SjNEryZKDR5MNn8s3ufZtakMifsGUxX3j",
  "key22": "Svakh7RwUV3sUCmHpgpwYCJiR5pkHYF4tZZmUhwzHXDYUEFvYwSzZCXAcKY4JrP1zUy3caiRn8T9twXJb4BoYhy",
  "key23": "66eatHAsiJssGaoXGt7E7AXVDnHCHf579JCZyZkXLG2VrEv45KHQLvWgTY1kg9MXyNbJcycZkqvGWuKERQZj9nbg",
  "key24": "A2YJaYp7dSyPMCtYNPUEmjVkWir5kSaKJJ8m9VYDa2kX7dZBnAysqMGC8xnac181b4hVkjmxW6gofByjw7YxoW5",
  "key25": "2N5w5ZxAzBG7SHfMHzYu7H87rHVFUGbE4GERjCMLHH2n2eUkYYSfWXRRTe4bACvadZNR2FbTq5tv9rkADq9smxXC",
  "key26": "29DPqDfC9n75NRPwYkiuPiBfN4FpQZ4umzYKv7PTnVw59VpdtmHbKcH1m4nrkYnvt9KumjhGwf3Ui6DsLBUncRhG",
  "key27": "SBVtHrWGBRaXx1b8zug8vszSnjknxZmtkYagqPyUjkqf2Q2Nk8iTpyEiYPDeFrFTPaC5BCnQEBzKskWWHbqsy6P",
  "key28": "yU3FzAk7Mp4YGAdwBbpXacyUeD17spyiS655jR5h2uHo4qwP3RCeFEH86f4hG85tpHUCTyP1TL8kkWCZEwWtKV6",
  "key29": "3zaxciNVnk8kBHsz7qzUTFV1ZvAxdcWXaidhihyRyCGvvqmFyxj27xHGXCjYv6bTyXXaeFfVVh2kuBDXxSC7mtbi",
  "key30": "38YXRThhREKGZwvjj2irpzXAk8BMEFXyFuYL2uTEmhAu8FwWM9bbNaZRCG6UPQoXqgi1jrAigwc7e3NDnTUhHh55",
  "key31": "2pwv7kJZhEFevN1V7iRvNLWX1pdNjgvVXpvDNcUzVKSjY9ZSJqp8UNKxgjgFE5DZEvhK3kxvkdac9UAvAeti5o3q",
  "key32": "5dXww4iuwp5LpELAuPoLXSaPX7aAh8FeqxjqktNZ4hQCiSeFES7R6x6iLLTHggfReFKM5GZyYsQEfvPCQGPvBwmx",
  "key33": "cUp6Z4Jm8thAmDbzTGZxMabNEZPXAine6DotKc9d1cYDX5fGk6itMQ8ygAeDejexsUihPGH9u1xaPQcB1gYHbEm",
  "key34": "4J96c87hf5Bu6Q3zfZhKUUwewihHFr5kVyeW43kk2pKZ2zDbJAq316tt8JH5V2HvsAc5bZraVgyvKaWMm5H4HEXu",
  "key35": "64wreDqAREzsDuybYVKsyvRSMeMAFpdd4ZPS15huHFh4Lbdcb2TMVZNPJxKUpRn8w7oofrkvCkdLq7bS2groMWWs",
  "key36": "3YKehyBCxybMHZeVzAWWASovFejJNMp8vcHWfPxeoi2MunMPR38XCFfF9tUndY7LEnJxPw5xt78KmVz3RnsDeKP",
  "key37": "3SR12u7GYD2kTgEFRiRtfoo7Jj6dEwAVoGWqE9KoeZSJpBTo25f3rwj2QeiBaZVXFQSvLNWfKL97jrHYpYtxoNug"
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
