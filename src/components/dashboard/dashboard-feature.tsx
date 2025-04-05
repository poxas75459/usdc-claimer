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
    "5Pmbc7Rto7VSCYxo76odFxxkY1skCAmRr7BuEJaxwwHZmWPxE3iuf3Sw2A6qnXDiDvUdQ5pKztC1UAPCyy5TJUj5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4K4nBqEpLXeS5h2bMYd36v2i7nrVa82g7GAi2E1vPMdbtBu9SC6uqWjWmqmK9NxA9Sqnu2JRrC5LWBXai8AGwiZ7",
  "key1": "4m9ygj1AyXTGKUpFigm9fDvNsKJupwbVUWHV9Hpj9BNRb8jXAdGZiASbjdJvS3RRTYqfY5mZv4p9gC5jHKD2qxtN",
  "key2": "4xW6JGQT7d9bd58yUPNSGEYpk8uupKSCCNM6PHTGYj4mZzNMQeN65s4RtbYwUomAAFgC8k7UGXiwU95rZ6BmyVkD",
  "key3": "66nA1566UQnYrcfGRb1W8iZp1phzMkedSguA9Mn637F4MJE8veaiixJBGWsX8cDe9fA9mJC5hcWttrKqM5Qvzttz",
  "key4": "4i3TwaCmT4vjQNxhwTUzNtnaqEejxf7QQgCDWWTHQXCLoQwej5ecmpkakPYVwJNAVUkvsryegUWwFMu3NVZckap6",
  "key5": "4fhtnubSYp2YKdMVw1KwHUoSw3n1sLLtpJJrPQrUaGa1unFyh61rbacNNgKHRsbmphqXpv3VC1a12NfhrckBjwxK",
  "key6": "2PFqry1JUevaqrnnoGY281dsmpmt6J9zhM2k5Ldd6KEop5dUdJ4hQVip4CaDKua6kPq8V1gB4c2ziEFhvhYPk3kd",
  "key7": "2Wpz4cnBr3QRmPgTZJi4suZFsHzyosD2NedsKcyUswh6jVuPCrnxhUDtrhUKRhu1znz7MsxFnW4hZ53juz2Whp3n",
  "key8": "46vYpTGoUk2Wnf8nCiqTaQj7ApUNjtP8ov6QCQjaP3NHNrqfQremWqLUvcemZ9oMLgD449DB7P7o8sog3ccqMQXh",
  "key9": "5Uz7qmvo9RrV3XdaCRULBPc58dPE2G6Erjy5ZPQin2T4dUpAm2nKR6eRtZ5e6tRSihRph3aVX6NQ4kTAH2H1sN8R",
  "key10": "5XvwxAJDxinUW1ZwGyHkohmPJpqAb9gkgFvVsXmtKxu16kdqKEhtfwD1j9dbJ7bhf1zxVb84o2C4AArZKpgcxDek",
  "key11": "4T46p8NN6NrBebnksZWJiYP4t7c1z7SLX6ssj4mrvvMUcdoxcKBRJW3KR3Av174wubEVA3Mr7qqvk4Pt5AGRqho8",
  "key12": "2St1NHKtuT8ndr1fkfrWhxsnG76Nfq8UCDGq85St1869KrnMY2yJCeCDtrdVweRHaodqpfV7h6GV521mqJXW13hQ",
  "key13": "5N6EKZvHFTKyvCdFV2ACamDnqRon434CkLeczA7S54CSMjVSuh8ioKm6KMDDiGuAamfBJ4ahWv5rJTemRmf3793i",
  "key14": "3GfiLML4zpkrCMUPSBe7fwu6TkyfCkXd5eoa1EEKRRBCStsyHEkNgQKhTuyfHBt6SwVvfbiQxkGhxBMCHcS9hiV",
  "key15": "5vFbVuq1i7D2CbPkmmW4L1N7SzqdkPfvh9PdB9ARJUZYBqYqQsMM2snQNiumoFvPhup94SM939vckQJpaQgpAs7y",
  "key16": "39sjp5jBs6XfcMa186X7oKkJyxSkdNSWGYhrJFe29tCj8hFWkq97Kq17C81HojVXYuQsgtzEYCTNN3FZPLmcxKLd",
  "key17": "7v1HYixBMHMRDen2zFBBdA54fskLMSgWX9SmmN8ieurGJiaiS6dHGsV61VaBdrqCfQiVXwK15EG5i8M2e1U8JLh",
  "key18": "55AiRxbwMVqbDisxvtckqtCCXhH1ZfMzeo2zaXcFJ8VEr6GhPyPtJovbifMAu7h9bp7PD8bXgiGR2vkfkz7EXyyt",
  "key19": "2Bn4bpzNumYpBxcCMBAfo2RkcZSifyio8sd748kFQexFUMw8qRtvJkXfGPFZuZAE2DBnJkg9iDijLMQquhy6VK7u",
  "key20": "4TQZtxV6B1p8HHVdPBT2EADbBaCvwCvbgfi5rwogxdo1nCdR3Bp35qoTx23hKsvrj1nCYU3QnG8KRdayfHZJ6kM1",
  "key21": "4wQj6UAnXw2Ejp1KYz7Qp59UAv916nvnSQiKnysLTkhTw6eb8pMqSCnobm5yN1ZCkjQMytdwDJoHxrE6THNTeYnT",
  "key22": "UjrzjSDz71DdHQuDqFc9aT7c3qFcCzoawRxcxTvikhdnoZCRayBmVKbuUFPyvy6g4UUHrYySbmAGBLywgFnxoRW",
  "key23": "4GYqtW4NqB6FG9UfArYVRBSQeo9hprsRhnoB2WUmZRhGHxwPijCyLAYKJMUoNSitKWpFtfZf1UmNGTNnCVG8tQAc",
  "key24": "4LuF4RVNuRqEVgTpkb9G7gBZzqQunDbHV8f9XRwkJuXipvQknto4UTkVg5siYRGtCK1aY7rMJduJpTZ47EKXb1zk",
  "key25": "2HwqS4pDT7STPsWS2Da3TwdLzByjCDectPKCseiAMwbzaVDuZXetMUVgGQ6Q7VsceT1PSArEqxTf3TJEqCEChhQo",
  "key26": "463yifrGd63vqFZE98tQ3sgfhNJ7uhyn5vj6CaadaEg5mAsysbKNTxQTWkTKTjeV5R8k97Y3WUszsqqdBwYyrmiS",
  "key27": "58PUfAp88U1r42tuucLmjWRiVjmZhciyWLCvYg9rh6yzLNa9dYKs9tNGs9idxYxd38Ry7jsCnzeFaZSag5bHJmD8",
  "key28": "6WVdco24MsRA77xm7VxxBQymscDNybg34opeKQxbfzCZSUqTcevKCg9ermZ8YiPsLoWc44zYBDwxNHCihMWg53p",
  "key29": "4yPkk6GK6jJPWvvf3C5qjMLQc6s5vop3RdnLekoZNTWunUMrWPK1sBUWbAdocYEt331XnnLYfZ1mwH5j1YkdFNVi",
  "key30": "4Y9qb9FdzQVFNDArgWuzh5LvWgwqENEs399QUbvTQuTRWRMes5yZpKD6EE7ZmkrN6s6KgwVGNTTy53ddoBVjdSho",
  "key31": "4S5KWCxj5KHhLgfJYasyeCRfLfd9j1ka9454Jcrzs5c4hasyH5s7h9GNfmgFnks9c9oWz1oetsWWLTXxJSvWNQ97",
  "key32": "FyCLXFVbJUo9Tx4gsANhz7DbK4znJUGJFSM2kBm6kGtVDpb4JNznfZBRW9LnvCiYLzMgEDKQp4f4pPpryvgqP2p",
  "key33": "31CSjP2dEKjwX9EmPkuwrNYNdcsMpXGVeV1PLdQT4NW1iVDqERhJNzzE6qYjYYURBpQQU4eZFyNYZNx6z2YPwpSP",
  "key34": "5avrLTPveF9tS242oF11jPWVAoAX7bzEqh7fRcruseMnR571iPV4yhfecAXjDkaCtsrvaoxgaARniBGyNq4VguGA",
  "key35": "5kaTny2ihKDFiivvCEDaK9Msw6AK8PiShiNXReP9GYDCsY3gh7HDi1kgkENPfGKkuydHDrPCPpQp2z9cHoXnsqJ5",
  "key36": "5jMJVR8ceaycBJ8u7jJmSvCrNX2Z9AtRWnL4tYkkGVwKi25YUjuDPFMvq46uQDfsoQ7hfH9jkdcXPFH7qzkCC7yE",
  "key37": "3DDbmKy8Qje8turjCkLaAXXcLfDq5DQTN36uiuP9MNhkGM6bMuG43s76NhdtJZWywJZvS6EaJtc3nsaH1mMUWAur",
  "key38": "5qgdXiLG7gu46SDDgp5TH5qv9JjYYdJrWUNtjcY1xzjYJjER7o9wSFTTS5zPSrVhKMgFQsbE8NWYKBEWRnUy6sDX",
  "key39": "KCipNHYbto1QJ4KznfZW6nFPvNB4yoYvFxD7b37jk6aiNQocNoSL2eC4jesJkAGTyZMfA7KZQ46vPVWBmNLeWaD",
  "key40": "2BiYgJV5jg7MCbqFejjVzCXg1CYtSXWVf2rvg4nUmqjJS7xDsc6j9BsuXvRvkiCLHmhJvmLthe9KmUbsD8rwLqrK",
  "key41": "2oJRXk6gyQgXE567DyQGSgLmhgarz2qM6DgDiVmxU1tqfVNzEKQG2Jz35kSyUbfECi1R8MMdDJzMYo7wPWfXK3ni",
  "key42": "scZCbqnZGurREutnnC8E79ahuSE9NAtJE6nJYtAJdjnfcM4zr66XJikJE1yYQ1quG7gY27oNMVCty9pon2Y8kST",
  "key43": "4x4vT9YvKS2Y4DNmGZjTintGN5kaJDQNMiX4Hifk4YB2ew4AkaTeW6ZBRBwAE85Rn8Z4Zwc5tukNducTm1ah2Bpo",
  "key44": "ZckjJD3fYa7ZkqEcxkUi9qwEwkLYpEd8zk1craCZtJLhovWevbkEHHudtbHU6G7FAPd5PrKtnexgN8yiykhwsnD",
  "key45": "6oNNGFkXaHTBdKRPfsz6fYy8Cw7LYMo4JS1DGor6j2XTDs4KFsyo5vT6T9oGA1NfYtkaynY8QSVTj3KWMVdyFnQ",
  "key46": "3zG92JQ4xHTwDZy6rNkbd8NVc5vAfD79266rDayDFwzLu2PTrebcEDpN3Xgr9rKHMTXMKM3b46rBPKfgcymYMwwN"
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
