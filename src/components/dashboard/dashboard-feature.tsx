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
    "3ni8mG3q747gms3Y7dQJtv4pNoSmwr1SaPy3yXnJ8vasBkymtVNh4RdX5j284GnPqtegrHrrLk4XZDYukmkpBi1X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MPthMU3NWiNsmT5ECbMQ5CaTc5hZwPaJct1sueatZKvXrmbQvG8D4LvcqMSDrXmjJ8tWqD8SLZg2aPaDUvSSJTH",
  "key1": "3A5HQKcHd8bFWVT5QKcPNe9aSfQe3uk8iyzKu8z9i7UxcTQ48tuvNuNGikzBVoVwAaPoTVV3Bephpc2o8xYrcGH",
  "key2": "CBTShuWFkW46tgTHkf2GfrbvkQu5fdkdQ4mb1LeMaQYmQmRB2Yz5mRKF1YUEgf1oWX66RVnFxPyj7ecG9cisbRz",
  "key3": "5DGYdTBq1uxnHnhNfEggTkG3BvATyJDdsmQmfSGobEysYfS2j77vWtUN4JrUwUgeg45XtCxD5sWnxng7LmJszPzK",
  "key4": "akaGyLCgZQ1fLBiV2GF81swjM2xun8SYeFDPvh21feahiqhRSuJzLQDGuJMw4ovWRh1eeLPKYJAuM4JYJJi9L2Q",
  "key5": "n7xhvKFYUC7pRhhH19dwyaw5jEMUxt5BXuojeYh8hY1fKo7G71cQ5PftkSa9Fce21hzMjUBKrnjf2tcLXN5LpLN",
  "key6": "5gocGSR2G7mMFzD3LdJ7TDsLdEe9sQm7nwfU2GCPFjXvoj2eJkNGk65oDtFQNVsHZ7WT7vYEhxdDcQMrPy5r9Sxh",
  "key7": "51tM5VEfjB9KW78nE9BKC9w8anq2WB1ftyeacqYv3zASVCeh9WUxXDUJvJ8btSi16iBfWgiXRLmV2Zu9qeM4YLTW",
  "key8": "5n4TuN2FUi6FaFtNP9HCSGbR1xwjjcG6cLH6FyRUCMM6vUYfgbRrJqzpvM9DHJxeEVbnS81KYmnvuQFwR5ixkaDs",
  "key9": "5KqRmmMMQXfmAbWpFiBT8auPriW7HCmCLxJju9XSm2J7i1gTCohne3RaKhSaWEApYB1G5U3sY2rTyE8pDvaUzwhc",
  "key10": "5kAd4DkM6rpcYSKUiASiCBMPZiYzMPvj3qMQxrDeugyvd6XJYg7LVznVFxC3Nzir7W4xvLVPUhrymRngsV2G6g6k",
  "key11": "21kU9CjE1noWghx6NZBMFL9SE616r5ATxcTxSE55Vr1rgNzb3VH8SynnLwMotZd3vbp9cbTr2NCRe8mKdESJwzkc",
  "key12": "FbdBi4atySM6JQtP3sgJUBY739gLntWRLwSXpabdeDweB8VmW2qeoWkJLjgfk21Ldq6HSiL4YCREscjer7vzbSD",
  "key13": "3HoVoVcJdsVLCa2m6arXUXo4CgrAQjKyDFaqgRrUt4PAtYT1my7aFtbTLZfynYSVMXT64fiSqynPyxggmL44NUHy",
  "key14": "FQmGrXz2CAchkPEbxq4SWqV4NHbFNRqiGS1LYekEZ21v8WF1LCVRshFafrpSMXHtCHKoinRUVUDzwYxzVE3xaBC",
  "key15": "e1zMBwZnN9GRHxHFqGfRmBwnSasPqwgSaut4Y4mx35X1tw1b5NTEERtcd7k4sL1jRYDUEVEupCeVz9dNUKZkA1v",
  "key16": "ciMvYWz9B2dRjiQ2qGxB7tFVq27zwEnQY6cvLgCX6yXdwQaEbYpK5DZEzZnsNDZJWYhjdKR8i8bErhZj6SoGG6J",
  "key17": "2VHctd6acfExjAmtkbxCsrRnCvpR9N2ZVGfRxF4ud8Qa98iGmkBVc1Ufy81TdXxcwvSgpLbrTBrRV93Bi2Whidyb",
  "key18": "58FHgNuNfkoomc8bAEpF3cC1KhdPsPrKysjc5LaXPB9uBtNVVDtFMvTBpELhEbbh5GaR277hsqmM5doNJCzs88g8",
  "key19": "5RE1rTjk4HUiXnTGCtwn52BGoVhWsYmpjcrRV5HeWxWMVQSFkNwpCEQcHXYNqo59ye1j4514ywL4ZXFtBp49nn77",
  "key20": "327GVf5gMrfet7bsEJ4qc736zz3W1cUZQbDSzWYYHVDdPHPBaTDUHVdnvsUEGMGv4SKXUQdK51GHr71c1jxWUGaa",
  "key21": "4KVibV7X2kFSJAzTEemaf7dXaL68X8NEu9cLu43UWFxoyMwCoUCusFktXrqRqrAV1oPuQ9RypWDS84SwYgDaCyRL",
  "key22": "fKeH9DB8ERqy2vktu3EGa5Amg5QKvMC1RCs8vxUdp1Cyh7hykM1oiwYtenAoCGti7nqpNTTWKtspB2fMUYt2iF5",
  "key23": "4WAj6wwViiJjGPFzo4zyMxuV8u7nCjd5cowd4RZWpHrR7FToEmzLS913eiRMEJ15tPMsyVt4VU7gVzKh9o7V4wKo",
  "key24": "DfNhxMEK59jByv1R2hctZPnxjkgoamc1Hu2Vz4SeLA9zZtZFYacnXxnqC37uF3tjjAUu63j7mgNiekGAyaVqE2a",
  "key25": "mW9NGbZAYfahwZwZH33qKJHPuQNv2XGVY6NikgTZLYaJVk5JYoPphXR4HezAfrMRSFSQZY3EHV49pmLQrXs7d9G",
  "key26": "2PewcZJ7qcnSsmV7pLVNMvb17ps4qGCRKySU8vXpR7A4QufnVtxg4zYqnpYMCVn2NRB8aokwvT7YRtuyujMEY5iw",
  "key27": "3j8bTF2SpT9X34ukQB3SMBekyweYH1n5giiNZk1JRMLEMxWXziMH4emrQx9YxHTLGPAB9PSin5Gy5uUzstmm4hyz",
  "key28": "5mdPuiahGybeLsSSM3kU9EYwNBNyHRjfZCki2kXNN92tNYMRFvTw43voQmF5421mcAi3tA4Nj8YBVuwhGwN66qtx",
  "key29": "3M7WXZ2dEurTGL9UfmASZD21w6b7eb4HXKYNG6FaNzsBeJADvUc37iiCXkCMFBh3k2pni2CoLiruct3fSAWbDDqq",
  "key30": "2VFaQaNTSACeBgsY9T5RT9vhdFExMuHgmqdoz5o5m3Q9aT84uxc5fQRqp6Td4oink8DGVXh5Dp4krV5G1eSDbTFx",
  "key31": "3ojdufHYZK3sZq3WV42HuZDjWGQjd6rN3LMQBRdukA2dLt81QSiHRc9hrkxhjh6cpkMkNNBsKiCJBuCpjA4hEiUt",
  "key32": "4VSkGTJHug4kdxqwaHBT5SeDHtrT5r4ZFgpARC3fvHs7nuto15scVxkhttNHLQGAEnPR8CCtb99kKQuacYvPaQ7e",
  "key33": "39Bwt3b3A1JegUecoCnFUPLzzQxTtE5MuYP42KKiq9gTPosgWp9RwrdmtRF8nsrcMDEejgKuyUqQS4gr6yYKWAe7",
  "key34": "5fYGLpMaovwMHZX6kaqz8zzMjXCiYSFnaPuZ7WFaY2g9XaUt5QSNaFJCBHi8VbaocSGU6B2EPm1C7ZiPhfNGdQJd",
  "key35": "4GLcfvkGJW9Tzb2sr2E4zHJDG9NrFaJKyZugQEHSWUGH1WyjpanPDDQQkTa3ZwjUmJ5KwzefovCx6nPxjC2LRoBg"
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
