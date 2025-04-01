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
    "M4BPbRDiwxdD2p6UyvBAmYN7ZpYxw9PqyCsUN7H2pxFQ4aqkAfKgcDemVwuCLJFkjRwVWNbiSEpjoiqni6phptt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c475CAcBeEo5Fuav4tYEFUYBZ2bKQz15jDcaoWQBMHsguX7Hkn5JYhAY9mmNwNQc23jnoQa2NZZqPmNrBQCmanK",
  "key1": "3xM8ZDP4zgd6sAuzshxQTXMbxM9vsJKuxqWke2fL9y2uG4seF3SGncGDhUi9yJXrq6PzCoRsWkxBoRDB9xu1pGhw",
  "key2": "3btG6tpMogpTm3gbyCBw1ve2GkiS85szr5CN1X54SVvhaMZbCjh5qvrK1qGfCNzU1mWqF4DfP3khk4gnGoAhVxXQ",
  "key3": "WrLt4ne7vdQaWghjbynrJLTjnXv6XVy5tHx8VCn1jry2DFojTvgeo8sJv1QFqFqC8TJCMnqGLHDVU5ynaMCuvcw",
  "key4": "3YESpNiPfFdvufuSTW2GqCXCs92DRU9VrVCfq3GwDQg72ysEcGmmJggSnQis8ne4PVgkPpwM5U3gD4oeqRC5WfCt",
  "key5": "5TK2ScV3JJ8DheikCk2m2xbxVH9xNeQkC6Nr1g6aBMZ9JijArGf8co62cwZa8FXwzxJmyrorHdj6X2wcyxSLC2NF",
  "key6": "4paUbEyCct5FB9PAw3wWzNywPD2hRDjyo6D6HMpLeGY3H5L2mkoKADRg5kxWcowi4c4bk6KsYdmrdRDawypRsAsT",
  "key7": "52CGAFhKz1XZHjFQ9V2QCWDfob988RXPLqeX7DKfZhgfDFGBJ6Cmt6VRz3r72biwGLSkRiwbxYNLrfz3FLS2Biyp",
  "key8": "3FfxpAfcTbhDEyEN8Hp7R3ZXvjizEzwyiVpkA6BsucJ8Fkqpx1KDygxj7cw3DmcvdvKCPuoKuy7rrrm9XTjJPSkz",
  "key9": "2humZXpPEEKAz6GuWnK4N9GoRS57DhmWfjyphLHG6UPtEGjgbisGfsvPLnbNdrFmvQfFTgrGYSJabc56eGUGkVMd",
  "key10": "5zF3z5w6j94YL9Qb8B8iz3D8M2ghzccWry4MryDMHkpuGgpU3MRV2yiY73evPXe1PmJaNH5sXZapiweyNomrTRvC",
  "key11": "3d93U3vMfn7aBDs69F7e7XTqwJRgBizPs7ErFAbEgs7ieV7jjn9U6bRwgBRbQwwZH2bvs3TfLzYprY8KrbhNbHhk",
  "key12": "5im31dBZuxjd9mSMcpkmcZ7xMhnQ1XxvtUS7RgwuA3NE7NsTdZ1STz1dXQPqyLfDq8PHRELmRayPz4Yu6RpjttuP",
  "key13": "3gXQcK3MHWpPZP33d8v9Kthtrx7Y7iNWcB8qWsXYisvUYcxGH1yeBzDXBcRwopLWqDei4Fr2QJUTWHudUoTKGo17",
  "key14": "5fANWALUWfX5DyKNrH62oL8dmm7nUG9ujcx8CBwLMhtayXzLX3XPbxUQgvaVN8fNi4Xb8MbzNim4fHHUDCa66Jz8",
  "key15": "5S1CdEoLeqmy3AtzUeU5o7XmQzfXV3yi1SNZ6CNqfwgAqqg38UqDkj3TBFwRQQ7bs2QPbZwg59h3FRyiVrsFyGfj",
  "key16": "5Jo1KiDnns4QpPEmPxnxJZH9MCaFCSho7hRUkDgu1mmpr8zX3cBqy3nzhi4nc65MWR8qccukkhmwvPpPgyYQtDZX",
  "key17": "4Xq2YtgM1xqmEhBssCJYCgVpgorcMrXK9p9x18hV6WrVYX8qompk6gD4PvMFqrZ49zPDBWRzKvynk6n76WsAv6aa",
  "key18": "631DAbCunt7HmedPrVxdafZL9StBwGrHRBeDMKjxgao8UXTh5xSHvxQoqkNkwXFaiRBsUE9UuWm1ZYuLJ6gP1aWY",
  "key19": "45ZQJKm8pmsYTfETLXaouphHgY5iMbBQMBuCUg5Ye15Y4svhLWp9qjhnFJMWWhtubjZhzhJnBxRVMSFGiyBRJ9U1",
  "key20": "3iMxMGkyWi2ABdsZboN4baMvEnJ6dAjWAmU6EP8D26wUzxQNFheEkCyLkxov9uB1Rccm2Yzcb9JPDKw9RpKaMrgn",
  "key21": "4PB7DRKSBDvFokmNDWHtJnjyziXMWbfQMb89D3pmUUgfCBYtQFrEirXvzVY32LhzAsPvmUVuVe3x9zrwRKf884F2",
  "key22": "5E6CYj5c1hpLCsndRJTxXeXyvcJGX239mcRTscVLoTU9AhiMgpCwbYeZ37qPBhF1qhE6tqqZHHyhFXTv6RJVpQy5",
  "key23": "4hWRbPPZ7vikuzhYWhdvovXVkbsdvkxhv7e4AXBr4bZEwFCkde4bxvrxqpdmfZ2tuBrkjYuCZsfMjDn8uv2s4HzY",
  "key24": "2jH6As5AtV7tHkqEbEPjzMv5Rxo5s9bHZRNYfVwPLfgM9QU673C1ufeyVytsxXXjkbZfgrH2KU9JnmBsCwDiNkTo",
  "key25": "5yTw6YFuvYmMMTd1zW9sgoHFfetCc4wJHNgbtnPE7w8VzpJdwvNes8mMP7unZmyvvmmEbHAfP82mPMA1KokdQLCs",
  "key26": "4L4H9ZrqA3BPAWLPBbq2rHM5sX8qJRSyesCM3ZEosFvJdp9dWeXnmpy4ytJ97SqEmnZdL9ku86k4TqMrRe2UcqWe",
  "key27": "3ZYTETg1nquCdi7T77JhwjQCGm2YikhxCvCm3Unbg2kx195EKZGJmQLorRSPmYff4xKSZKuF1sXbMduuVTwXfdLB",
  "key28": "3yZeBYoDVhobmqEWjeuWkZuGjK5BESgsnc33q8dkxYrfK4kizaagshihyU1jZjj1uAAfFBFo5HJDBK46NP9VXpHQ",
  "key29": "3gTZJaBJZev7BKYYFjcJrwGXQTUmAg2R3wUtpxotj1xiKxaicbSTD5UoA4B4ayfMBgM9i1PB8NqtHe8kCk95b9EB",
  "key30": "43BHifhq7VeNhmKAgTYj42Wu6qmP1Pa3gHaiG8QM8W8CZPXXwj5p6gZcQjDqwNaGvr4BXek5yKHFT7vszFPZx2Z7",
  "key31": "EnEdNDtg8P921CTxiVXTdCy8RX3iFSX3VKp7Lk5fm6z1YuKiptjpaSRkzZgxeXhqaELwhcRwnLZtJoiKxonX8bp",
  "key32": "5ptqoKk19bVGHGwgTWkfQrENgmAoJ99if12RTjVtPvTz1SYqGMrKEHSEEBH5V1zzzdR1RZajsAHpvXne66NH72m8",
  "key33": "2LwidtNkGSuxE24Agdahz98TJEdc9fusJMefjoKrtFqvkHjSm41i8D6rVinyjW27mjS4GQ1beLJfecG8pMMGiNYE",
  "key34": "8aYXsx1hYT8nLdSnQHpmDZ7dbqUbG8sYCyYsacNrpkwUbx9utHMtDQ6uNGPcyhQbc24aun8pgvxyJGrxp8ogvXd",
  "key35": "2EwtQwdBbdHEbNeCMoZjvyKyTB7quH3DVvurwXudKypEBwfbRrXz5XwU9abuy8LLpjakQU2yxrZqVss6Q8SbNZeG",
  "key36": "EmfuuoQwkMaXF4HSUeS68Ljw62EkGU6Mpb2KUCALbv4u6ePS4mJj54WDbigJ9GpVX3ccyjMAnopeE2Du53YAFu2",
  "key37": "2fnR9oX3AsVva2cvgn7oB7d9KddzGG54Zdq6oLXnoTeFJXbcnwq8fZfQRMbTV1HVsuhCi57zq2mvLJfjU6tXJdGB",
  "key38": "iUXMR6VLqx7oAr7BmeBZ7yT9TeY4UtkzztkMLTBYbDp79X5GjPcj7sasCgdVQYRBhRjxTqA7N9rpDaiK6jT7H9a",
  "key39": "5VCtnptZ9QpCXXX29ELiNJzDLKeAWc79guh1pK5BWmByapSA2irWAkwFYruZy31TN6PVXgtVJKVD7LHVHHHN8E6Y",
  "key40": "5TsU5hC2z9EwuDcM1nCDcEXVEyNd4FEFovPUD5zqLLwH7TeQVZjj4iXgbhcEXKMf8aEyhg2bUDAAgqVxeqHRC79a",
  "key41": "2K6eWCZn3d2ADHtdPWzv4bA3Ng89khrPPJ7K5gstQf1dmdgHUbsoVg69VbscxKaWbNfuFs2WbLjmijKWaiEnnYyq",
  "key42": "5GN2Ffn2CXsYTfgonRFvXeVaPEkKhmm5iCxpyv8K7TJbfacGgV9mXK8CupwmLpH6LVHCJcxVK9wEmC1gBz4j96en",
  "key43": "BYkeGZArAYJoL8W56nuxhUU4wig2XtHiTBjpmbS8BkCvvW2Z3H8p4PQMGGQRCrr9PMogKFXoeXmLSXXbG1wjHa6",
  "key44": "46tdpvXfp3SJRJUMfSLEscZ7gnizmwXQoMZNZZhEk9dAXzDoYPzYJbejQPSXdmLzrS8NtwgFtrwEYgLMDibrxYAB"
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
