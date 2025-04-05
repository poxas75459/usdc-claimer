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
    "uFFhHPs4JBXRSxZwjGWZ9rp5iknYAZo8ZYuEmaafH1BBMCzpuQcGt2GhpaujREra69zgRywN68B6GYnG9FpuQVG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46EXykVnPbtjmBuFdAhNHG9zvA9TQt4n5y9Qjb3MUcCCBNJn1UreUuKqt4qCPQeE1jtAVSdRiDr3G6q5sxf6C1ux",
  "key1": "3PmGpAemGr8Q2TQTTq11ec2FdkLRvih5gstEgJviu4TZ1kaUYKunbPWui4eXN7yzTb1rAZz1cHkmx2jfSnXyyvTE",
  "key2": "3w4YefiYkszwELe7fpmexwBJPkXrVvMmKsmt7JTqHbiaY6w5THEYPmByDDzp1iENA4FUSLFuFYbbBXTB7XnwinNh",
  "key3": "48S2LufTh7s8mPhRbEYz2CN5F8cSw62Ei7uxZSfoQhtsbA56LR79DBuG2Fg6jPASg5aLh8AcuKZ14fBMcia6caG4",
  "key4": "46rGGD757nnZ9wYQcSrnPJtTUarqSvoQWTqwppC4xPkh4ErMb1141E4Zs4r8Z2ZPeN6b6Vdx2GoLipjRUP2VAnxr",
  "key5": "44xnyTv8hR7iVyCaNVYV9P4rp4gpUwghCdWyXf8TmR9RxK8Uj2zTfbVRQ57kG9uzSBpzatY7jhxfv32biitVXFsv",
  "key6": "4njGboke2J2sNotSnaQeYE7z1tZCmbqbWdSTD9isn4oeEejmukYAZmm3yGS5vr4YMBixtAr9r5n4fNbmAYCznvz1",
  "key7": "48QJ8Wvjr2SGNaENpEKPrWKL2BmcXe7LzpR2Vmg232a1pNkqZxAsEpodvWXrhyTqcNGdKE55VQ9RE3fiWSt51CoB",
  "key8": "2ZbfAER34wqsveCwYauLb6K7rzi4AZtXVDepyCQQ5zvapLCFQxR1zkHaKtoNmdef6JQqBB2YFfd1HXxRCjNqkdjQ",
  "key9": "3PBvSqvXNhWfTSweAWyn37eQW356NnhUovT6xYR7gkUdMy2eJecH9tcSkVv4ratHGTinwTn8Zjh3QXWsTMC6qaHn",
  "key10": "3eFtrdyF3fHYZZmu8MXwtB46ZZAAYgY23kJHhKwyp9tWdgsJquoUVwAD2knBjfZfRvZpRuSemquGFsRgRVJEiiuw",
  "key11": "4LSkNexdoztVXXKzZYE1JdPkBFd6aNrAnqcTWh7T6jGy7YTVQRT2wChS1teSfvQovf9uZxE6wjh15oLYdZdsanL4",
  "key12": "2mKC6FzERs2sSPiZe9HSRb27XprvKWbQjihHsi66QLfNUTf3qqo6QtxDCj7TuXhsJhkn5UkCXv9yywe1q8Ur3WXW",
  "key13": "2yW2jSn4W7ZSwyPPvjVSpPBXpr3179DPvYqAZTAdK9fArpuimAMSus373ywL2TiE77HjszgND8AUrTYH5ycxVSVp",
  "key14": "35UXvcMSCVVEbmzobfa6nFVaMHnSmmnQxtkPiuzdtCRgXGy99ymQxivzVvNeeqL9nFopHmCAp7PXTvj98jBshQvE",
  "key15": "5Szi1oMT5zFccRSxJrZYX7diNwtRp519ZTLn1m9Y61tCLygTUvF8tbfsNxFb2vMJSPc1vQf6GEQuMa66FJxeEKJN",
  "key16": "4rTrVdriYRcyFxH3SiawoV4FFq5SCNYhB9Dq5KA9c9xgdzLGV64ZoeMzvRCrjs7B4Rd5nQgBX2xa8DiKtpVjg4Mo",
  "key17": "2r2xZRUzXvwSoFAMf1j5G6grHbCmYYAAWog4v38PfNBHaSdEtdtEskoSrRw64RuVCL1h1986dpeycrN85zUTExFf",
  "key18": "5d3Cn9PvvZrjSSVrSL6trYU4TregDDMiMWHEoSssnvM6UUCBvX55xVZHHvUkhEDdvw7Yqi4DCksLvEmGPUi3MUyJ",
  "key19": "5EZLjZhci3zAVmFDfRYUPMdrY6J2to6bFroGgHLJq2A6NYV9rhQiFmir6dCNVqkM8gSvxWL3AQtUEucBao9ZgYxo",
  "key20": "vkiYYWBhXquwVUZsGA3mdLaoHZF2m8HSoJQSpDVkX8yk4zQ3u4xWMfxs7wyoyDWG2vw8FUNVfxJVLn3btmD9hGu",
  "key21": "4hT8vmj9EsXyb7Lgo7XeuJn5T59i5U64XSDiSGNk8TCFhcxFGNX5Lxa7GrzQq9too2seR1dH8GvjSBtofKGKarQm",
  "key22": "5YbvkuMfkmtVt7u9ZoM6cAxPBLtifbRyAAhohDHCfGHJEobijWdG3i8A5gs8VAMuEQYhwRFHjjAfUbFx5c5N18Dd",
  "key23": "5ijnFBVAiBELEkRCACV5mHxYfvizutnK3rVkrrjG5vyP1WpLqHtBzaVgKSN88Tt1NR1uKUrDSXVHEHoLHSyBTtGh",
  "key24": "33DpVgDKvpbKetJXxdMiSKXEYp99NXhQMvCDhxtaXuHoDNWY2DDG8gCcuCBRrCfzNZViF6zFJDdGQbzVFx5orL9B",
  "key25": "5H1QQ6G1kYW7XEhMh725yJTLNMwXgxurxM721S8L1sm3dB6bzWuWoRex67vLeA72DLWho9CND5o66jcXqibYkPwx",
  "key26": "5qW6FZZM51PyfRHDfZg2RaL5qoEy5q15X6cV7DntwscqxHWdWMEJxDd2on1RV1EHpo1c1g8j2DmoPRnxzCK9Goai",
  "key27": "4kFQgc8hpDhNN8Px42QBKM1EGnRyULyngmffi1FBbrE2GkNAWC7CZMrb6b8vkJz6M9537xGu4B1eCnQJ5BCW1o7Q",
  "key28": "3k8a1hzt482RgQy3vUDHUCtKdoDoCh1fvPowUSfZCBEBvcxUtCSopBtdH8rzUkKocG9tKPVRSfCo6wxGMhS939KA",
  "key29": "ECmt1n2Upu3gW2kunYbhEnVVqetUHKhPQPAbWh66mkLvwuoBBzNCHSsTvNhWXodJM8kkZQqbRQyXECcfEKetAEM",
  "key30": "eytXA8q9U93msgGkqDATqN8UCEbWGnTDadXP6dVFux6ByZTLxr8gz8o4ydburoVMieu2uAHLcSjqJQrUt7B61zd",
  "key31": "4HbgDa3G48QcjMxiBeEWJVkXsZcFbrdeG9xq5fu9ecj7XNz6dci3FkGw5iPy6cxUULm6LA8QkxQBKy34m78fy1z9",
  "key32": "5YrDJvKAhTTueaj6b73REBpibithUoibfLmKgxc3cgVdCtiFZhFsxFhLD8gRQu18XkJJh8tFhEyZmb8gVHguDi8u",
  "key33": "yGs4BGLdS4XiKrS5ZkX6yGZ84DeEAi7XF2H7ohfHpUTPW1sTBUR8S3DWx5zPF1qkRp2eaML42vadhnoh66QhC2V",
  "key34": "4tjQbHQfXTEedk6RFWyEAGSMyLFGpga8mtkhPdSrKsPjGXpemCPsvF8rMhsMvTB1GRcpqyorJ9yKSSarRuhRBPv4",
  "key35": "Ajn2eUshTMUa96zbSW5yLHV7YLy5T1epoiRJMha8CHNfS6YZY368zFqe7LVEFUoeGHpXa2YZdah9Mgt3PXHK2Ro",
  "key36": "3S36Xqip8zpAFfupK4JPZXuYGNdDNfZJ9Pfy4UYhzmokQBZeN9xGptb1DyxVQtH3dBpdSv1q45M3kPmcNaXvJZey",
  "key37": "2mkBUo9e5NHZ6oGEKsqYKx75pasXrAhKFn55rgcydRY37CKk4HWYGRpBzjH6XzJ4CgkJgVpM7xDEkb8mTU4bCfTu",
  "key38": "2bZvNxeYLXAKfHtWgVNsyyghRukizPMKaqnGobhmv8G1PYKQJVNd3RQqhvxBFNsnQ6Z43simc43Grcg1zCVEbnED",
  "key39": "4zrXAVgS8f6U3GbMajKKtK3S79YeKDoFwqqci9bnYgYSvkum5rxzxYN5htdLBQ9XDAbFWUoewk2gK8EAsFrnkFeN"
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
