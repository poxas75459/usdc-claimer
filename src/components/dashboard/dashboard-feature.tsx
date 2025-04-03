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
    "sMbXB57WkNUV4brW8b8tfY4HX3BgdYATtYJJvKu5CAv3HVYEyWrrE5LScHys5rtDbsVzzT2hmLVmPAGmhDwFc5z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Kp7nMyqMJMfLiYTxXTxDtSweFtRoQGMHkkbyH5QKFKeqvawsHoiKvTXacrD2ADHNH6nU7G2z3mhk6bzAyovUiG4",
  "key1": "27ZUYsMZVt4kDancsMYqJsdDukYgDRMGNVMUWjFuscRZhVYQ7yEBn48hfnFdjeRbJqnnMXXeVYJMcKmNZh69iWHo",
  "key2": "2z69tNjFxTRRmW4WTtXdheSbWaKp2uPgMErgg3D1ehhrMs6kjwovfgxibQeqWPA9MgCrjqfWxbhDdir727EKhugY",
  "key3": "2iGvSUNTQYWtkSuH3cogv1zffsyjvixrnYTJpGBvyt6YTvSSXV5yffzc1Jwy6s19VwLm2KnD8MMx1jxHab3fwQcC",
  "key4": "3wo2wEHeQchsRuvvkXQEoJsNsq5SUTRpU7vBCKKBhSRnaKAcx9YRkKD5AVTW9qT3rz1kXX1CVFqyDZc1NMubMwMg",
  "key5": "2RuhLoe5UKhb4tH1f5DnWYbxLrvJsaU8RGgc6qTwr9akjVf6YQ5MViTQ44JriKfb9xsddwHFb5SQ4ChzpHHCVFgH",
  "key6": "4uWrpTsJyDZeB7XeWLcqR6gkLbskpAmswbfR85MBYRQvurn4Dexn7LiNpov4dWVSzPCLLZnydCCqtoa8P8Rb8vnY",
  "key7": "3eR9qTprRtpnpmX12sos19qUhRYGirKYHBZZ3GJFW7p2QczkcU6pRZTPiuBKsnVdytsex5xZak4NaJ8z4Lky8PRC",
  "key8": "5BwwBe1k8c4QjDvQQH6bWnNG5NT5vQnJj6iH9kcNRSwZ8kTYY7dv3LHuiB2QYDuULkKG7iLFMzVpGr4bngPP5WCr",
  "key9": "54YjQuZaxyYBocN28TM4Gq2o1gPJemmaoeMFtGUBskAiGJ8MyMcSMTJGe5wwSVna8xicayLUePXHWR2SLUZ3MAvp",
  "key10": "2chqW8Mz8gswWizJn8gbC4C9dqpB1nQQnQk2JKMiWHSdMe57FgQcdegKcHBaZDoQV56vdep6gGp397rMHs8UN5Sy",
  "key11": "4C6eFy3G3wHJr7gP5pQY4ZncM5W4bPosnvqQAazr65NfKGcFhnTu1sUtAqRzSmmmqKYzouFpDBdevnhufddk9Kc8",
  "key12": "mUFiyrbM61WiQqnvJ2q4FN5oA9zCs3Py8utv4MSzQMy1tQARhsvMy1AQNafC2EnFrjMgHf4WDzFPeH1us3JPeN1",
  "key13": "ws1k8DWSRGK9jEE9yF3oCGfNHVz9qBt63FH2tTMCCpNSFCRWnHT4STdvUw5iEFnGdPPx5wNeTQsEr3hB4eUz32c",
  "key14": "52HLQQsg17WyKPx1tWxrftasZQrCfisGeiMfWPdMB7bPWRTJpKja9iJtPfHh8bSAHBfaE3nxMoWrnVVTDiMoUQNi",
  "key15": "4qXpM4zFJD6ua3vmy9uyUP4jrzdxw2sBs68kfg9u7KL77xGLDHeWAnGj2wcB9mG7kNaER7VU1f4LTQGQapYwsx2j",
  "key16": "3oBdwSnR96StSYDzg6FFjPeYtEaZebs4s2vk1WijobiLEddMJBVQ4raCr2fTcNduX2i11szANWh9vx436uwUzwdo",
  "key17": "2sZ4RDqC13qNpFVDD472qafqFFkU9G3KAvPx6RxJD7L6BzGm3xijyL6Svx9Gzy4sXUunW1otcDsEd12hqzm7KpRw",
  "key18": "3FjTi2NLNzhHZ8AifXXgDTHYt5fM9yfxvp5uHdiZdezcGpPQYhErA55tDezP7cATZGuvGYG5SRqGF5bHTAkaUHTB",
  "key19": "2wRuPRYzBCwbZiitRWTgczqx33SWsmfFkGTQBSJb5zBDCuWQ6sqJXrsgFGr4hTvjHKLUmm2GR3VhKQJwhsN4211D",
  "key20": "2GKqRtSE1cjvh4uSuSSvkcC6HP9KdpwaaHX9mBPV2AZCcvFVGELxizEmYSsCjoj11WRYzgUS4PMDvD6EngBBzY8y",
  "key21": "3EEti8HkKTqyUpdx21DwpeUqMhG4G7smcBkUSJZcAMdS9cLCpVZQ9HHBu8ZK3qoUd4VDENDFB4HwfDQSVAgoDDJb",
  "key22": "2HGTHD94qbYyUPGonfCgBfg1BgGDn7TK3TEioA3xjtSdioXyJNoKLRgABNGVEycWQAJrwRQSzFvgcFJpxX6c5P6m",
  "key23": "3oNWfAhmzrVYFcpV1rcVr8XFb8tbC3WSf2PVCG5XiX3S91Xr1y56kkTdsFAfxCPEVSiaDCUFu2jDr3xVDoa36eRU",
  "key24": "2vYqqQhkLVGXKpLpdxW5BtrHNYg4HVKQWftrFYv1bT4pX7jkH59hzfe6XnyvBFq4zvEJQn182URrSjhevu3pH46g",
  "key25": "5r4AFGVc4MhMTzmRorJsdMBD2g44BSpqLFvHWQSAi56cj68wq6Fs254CrDokxbLw9uG6waCxe89EufunF9vYqYXP",
  "key26": "5v51NgdfK73dsPAhA8yJh8SUAUKod5GbANJEVbuB9LQgHBvfadfBpZooUjn8Ge6BwXbjtVkXVemt3VMs5KMXS4Up",
  "key27": "4DkJij3tk7jmRGyWXaeRHydNAzsiwn8z5eiBNhZpeA6fQxsMNF9DtaHJV4c8rirMgEXBnwfKyFRHPmqL5EpFBwfM",
  "key28": "2VfWCZ836gjjwXnNShz4rFNjXP1yDTZU3FNR9AzqewtbeQ4HgZB7B9ThMQSjD2GmHXfMiXpMXYhKJWTchry7WE7G",
  "key29": "3Pv5Wwg6CuSWtnejPNsHnntthHG45awSKEtAWGHMnQQYjS8v7KY7CWFjzGGNpiCK63UMPK3zKsRL8xNhpEoeb49S",
  "key30": "4FKgkgkhNePbaYQso4Nqhu6n6CJ85WnUbF3EqGtDw7fFAnNcLv8Kj8gB2ttGNuo3mFrsiuqmpQ6uw2Ad8uZAptZm",
  "key31": "3ob7LDyj93mVExoHKiR2X3MMG4r9JMHvXuuyg42Cx4UaCxJhAnFTiNRyZgiv9KFJuPshN1mwGCPdJwHUr4Z4aWQe",
  "key32": "zGNDaYQWMJRTQgYFStrn81P6qXHwPhJsLTQBstQZmU4FNNLYyuQriSQ5CKZybLi9KxksNxYURWD63uBAYzEoR57",
  "key33": "4uWEsd9Br7cBCQcUeP9wAHTPZZFJqwLZMazfp8ufwGKh7uARyfiM3WQ4joQ2bc6Lw2AQ2nnpkuFk753Xj5uAXPnu"
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
