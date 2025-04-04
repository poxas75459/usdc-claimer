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
    "2pHRQyj7HwBcRzbNLhcghvsWHvWkCzG15bsk6DD1qtddK4GRAUyVaZhX6PwR8JxtADtEVj1DJ3v7oVqdpprPFtpu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZKkKesbD1AdVBiVo9WSkmawXWtsN2vjSWBirdf81PWVyNcyvvy4WULmyZZj3vPBQNAT6jJb8cgtFdDgudyNRBfH",
  "key1": "2bWj2DUiMJ7pAfVyqwodSo98iRtbEpBCgH6ZTcJ1CwM1uEVTmVJTjTkEA7ruPDd6AMvehq3eC6WKP7GVQ6sZDG3p",
  "key2": "4DNePfVr4NELqDwoB7kCMCW6Q6C5hzqbTpbPRkfL81f7uRnR5Af3V7stUsgtoGuxPM6SKpdR8evhx5d5NrS9nJqv",
  "key3": "4PHN3U5x4jYcnVqQmGhtNLEecWvuRQUoJz4HYf66D1cqGpdB5MKeuAxLe6jvqLcV6X8mKY9P9Xz1suk8Z5JHqjhY",
  "key4": "4dYrx9pcrYPintd2JBBg8ifPJWFLCVEb8qtftU7kJJgpY4F8KyPJKf7NrWVvjUQJf1Xa11dhrGzkdkjtQWqNd45U",
  "key5": "4X3uiyXgfh5txABopSEhhVhLXq1eCJe3oKUAfSnGmos4EdsPvNyMQXPLd4btswXR8RLD9n9JEWsbrYzmDPL6eMqr",
  "key6": "3zjYpXRyQ9rgsMEjGgxZPWcK13ezrum6Zo2T7vGrsmDzftTSK3Duaftc6fCGXMbDm4X6MHtoedkTRqiUy2C5rz3o",
  "key7": "4gX1zKKsy2x7GUcbWDUFdcw6TouXSXNFzqadCFSt5qS35EoeBe694fuLLW9c98Ki4gXi7N3V2vyXa5GrRUaPsKJD",
  "key8": "ezrTEpqZRDUjnio3nh334KQWfe51Keh61ybP4sA9zH2FPin3ZUR99qJ6a3N62bx7FcQPwEZUHqvRgjrJ5tpmg5L",
  "key9": "2wngPj5b1rjNb3ncn9mhwhEi8ALDgVFVtLNmwU7AiTeu6ThiESfBRQw97qq5WmAteH9JBK8oWUZDV84EZ9y59mkP",
  "key10": "3GrDqvgtzURVpLmkhvKnH3L1G3XsC4tqUxSTWo8uU4j9C7yAdrN6Up7Gtp4cZjtPxnRegLiMHGGd1K2xa9fHjk1h",
  "key11": "2J8bTTFr37eh3bnbLgWhit1ZWTUqaGv6zrBxBDuFBKMwrti1gBPHpfJueypbHgAyThZxUa9g6WSTKSCNBE15Uir5",
  "key12": "2vZPvDAPA5KFZYLCENizFwZnfKt5NyQqncEcoHXkpkCWGStHLdKuQdc11ssBRZxoWebucMxzevaqcV5hLttagSWn",
  "key13": "5sKvpor4yLqodwrTmFYVHoVqpFZkytvkEjWFF1zdvFzmdtEzKd7NkzBARj3LeZ5ZM8fbJDrF634e8Xhkr3dFPKpm",
  "key14": "JmEjKwBzgJgy7cw5LTN3wwRpTm9Qju2pCwMjFvt6H8vwHvQx4tjdf79MdK8WdrZcRqdkUsnr7kFcVKbiD3nB5Bm",
  "key15": "4HkFS6sScDjkJLC6jAFU9RTgEiodomGGKoVDVpnugUAWcQargrGXWhUiJCv3yqBo7gPeH5ssr5Mvwqb8GJnuDVoK",
  "key16": "4LPwQtkEFANJGrgW7yhHSGVLz9qXa8My6qPgMTzFEoTSJidkERcdNvvEUjKdZTLf3wmEv8szzcqFLPA83E5fmeJf",
  "key17": "4viJ9mo74gjsAB1h91iRXi9XYnEpDu98kWTya48pL2xLztAubuVzmZdiJwj6UYMo4K2F2w7vzk1bTb5jvsCK6Cog",
  "key18": "tJPPDKH7FsatgAapityoYNwHaXRoohiUAjTZoxEseVuXj4fqCSaAJUFiKM9XFTVEyUASLKx6Kqh7mRRkRR94FfG",
  "key19": "5Ca14oJGN8Qiyq33nzPjH3ygpWJuWLh3vQ959niMSc6YAGRDDYseyxdnyVik1uVw73qMQXeNGUchmB4vFecz5EDr",
  "key20": "2vftPxdE793qQMhyhvSig4TDjfuSgqySgEgA2p1niK8R68Nh4hDP4YB6YaTdrtqcKsan12RoQyeCvG5shBLd3FP",
  "key21": "5eWvL7BBzh8Rm9FaciAYiVkcRkih9GmSTaK6bBkEATgV7LNP9CkJGoVuZefb4unyc79Bi5amZUBuAQfbRups2B85",
  "key22": "4kSLNWWER7F4D1skpkCkQqc5iBkLy2sVL1EsqwRV17nWSf4P6QvAz22hdVY4CzNuA6bvBoLa2VbYJESJtunf5v5h",
  "key23": "5Q6s7hkB3NAmqKkdRGPocQrfGSJLPYmsC45MCMbmE86HVE88Q2EVxmCLpFg2RJ4z77nsVxaVHcDN4Km3FCDfd4At",
  "key24": "J7cmnRWedCi6WUfRw1ZHLC4Trt7Hhiy4dVhWPPu2JegGDj3fLtr3J3XzoYqJ3gmo7r8cWb1YdpF9Fbt6BSGvH21",
  "key25": "5F2oSuiRTXJkYTDJHr9ZpYaubxmVb2QyaYZY9tMvB4XJTn8SxrNAjojgdDhaHrM1zr9cNh8aLuGCtKi8Jfe6hjg1",
  "key26": "5VeDDJ7JaJzao8k1Qi9Bo1rxajcqcUtHRoHafAMCaDVFQcdwRiM5eQ2B9n1cFFp4psnvTbvq54qt8r6BaFKpx8xw",
  "key27": "48CmrpG3czgjxwJfHLm9LsHziKLp1kBdoJZdySnPTvyc1SL7vSFZJNSFBUNteVi7YZpk42PNtZhjvYmWGT7KNkT5",
  "key28": "6TzQf3WLSo6UMEmyLMsngspWrMVTZxGwQ3NbkcR7jvRVCffZmcC795C9d9kpVEDw6171yCn9iGWtpphVmPMqqfu",
  "key29": "61XjHwewL72sPR5uR7YaXyrGTSoFiR2hBECHsG8HBuxc7T1sV7CpZwU6HXZYfja89c3iCwRVfFWCqYgxyXL51XS1",
  "key30": "2fBMKbWpnyipE1qR6fR6WCDAw7aPUmyn1142apQcC2kQbc6xfiBhW3QhFnUH65ftnmKnuaFbLcbjBj5mtZKzxi9j",
  "key31": "5oo3VQqb921sSAUC4UpLfskBNWqfeReM4WejpLYEhGcCezhsFNsCkpJiysujayhTExZmYD5BM81v99VDb2nuSQn",
  "key32": "2tJ8P39tFwfXasAij9AqPQAp4vyH6ho7UUakDYoTnhcYkm5MW3MJZ2jfTVyAvB3V87D9fHFZY4ung7Besr7NPkQG",
  "key33": "YCZLhTcWkgxd4JdGTb2cFYm15SKWCwATbdnUcT4k1ugYY8faSCEBZ66Aecvev5wpECsbTgKqEisYEugANP4Y8Bn",
  "key34": "2yb1eLVKKF1gGFsxXfFCPUECnTdVnM9wdJrDNW9HADwKvohBnX1kfN5d9opYQYQUjWSNYssnRMNuV45Z9Mni6Fuc",
  "key35": "LxgKyfLW56qwQuREUMArM5iYwN16xGGmu96GR34gxPEuYiDZtR3DsbDsqLwubEwSPxHAKMXjGeRp8Rn9GU3kLxD",
  "key36": "2EN3Pg1VEMbQtLqE2LwTybkDUR4oF296CWJZogHUMoncc8uf2fzjhtcMomhj6tyoofxRGAbrqx2cnqqLd48Y9rBj",
  "key37": "62Ppx1WXPR9LXj1eXk7aoe1NgP9UoRSoHdgp91WhzeeZ7xRxupcgFuZdZoLJLQijbfWHNxLn93x7puvEpKKGtTYA",
  "key38": "392A1w9JU8qsFtpwcaRM7xty2nGs8ZvJZVKo1tgZiQaU5rRCjcrLKS4psbK79hVL1NSuwtcoUiiPPPo8MwQPftH9",
  "key39": "5W8cPYEnWoJDpqZoyrNRQviRKTJTDiYfCi2MvXCFK5PgjJWJ7CwAXc9Y3XMddPzwk4oBpeaJWLDQVRfusWz7cfj7"
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
