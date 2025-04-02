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
    "56pzsYGDxxkGfSShjQpFwjKtJMkYatymNLMqpvevxSfCbRwrdKNxsEQsHwxnCvZ9m3jwQtjy1Qd2buyeBxyaWA8H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38V6GEovff6sMxLPtwhzMQRVf9BqdTiSK3BdRwJMAKh1n22bd4tWc9HbYwUKKHSmttJsAyQ9pgbMhe7NjXwhKhc4",
  "key1": "3zf5piQg8U9mQb9oFtGE24ZNprqCpdLHZvvPfxmAqDxTnEz5jH5jQBu4pqfUSy9qMsRJqidbe6cdDtJZi6YPnhqk",
  "key2": "3hpkRozXg8uPw4ZsouDY2FYQx9Cu6LqPnobCSaoL9LUUWghkEWPX7PVNs95ci4CPCV72dXXEfpowkd4bk9gj5YtC",
  "key3": "2rNhYFFrhd7J1zGGC2TW76QQM6Y5p7dYD5C59kmBDnSrihHnbcWVT2KopP9T6SavZii1XDbK97ftPMrLeoh8eKbU",
  "key4": "4CzAU6y2tcJ7zojuy49ajtV6gsAfkoBmPAxRnABqQLau52LFvYK2fg4MJAym6NWEgMgCYGCndBoyDqYc9X7yqXhA",
  "key5": "5NouGzqzVLB7HMJFN2KDmbDkcd2PU1ML2ZkFB8PZrbjSz786MtQw3w3TTnJ7u8gP5EuCsQcR6BhWcpMwg5cWHn4T",
  "key6": "5UbRjCR2cfk4ccA4Mxpx5NmDp6qptdqziRf4ycfLqAzFsccC8V4oKj84Cmt8pXtfFGccJwmFGGwUQm2JWfbHvx3u",
  "key7": "5tLSnzHhCJF4yo1HjbizoZzqQiNcxSTTyiBocB5ngPPVp5R1VY6KRBdAHXJZTBWhKKT6UiTyoYCaTLH3cho7fvNn",
  "key8": "3aLeP5Wna2dKZUJESgvUu9TAGzNYgKkLqDpkLDqY91GiVHdc5WFAsgwai1rArtmJAKDuP9wPyGm48yNZMDvggSL4",
  "key9": "5eKNrxjw2eNNKCUeEjsQxqf1ctve8JiVjjbCZhHKjY75g3t5btGejhtNigWCbXLPZ9qtUZjah4957FYY9YUqzUfZ",
  "key10": "4QH9VPfWCh2C8EnxxrZ95UXBLWRoXceiBrXRVQfZLdA3huSvN7UEKQCCRExyYq1KZwSiDuQGzfqHyR6B2UcuNzXz",
  "key11": "qMufX3uxZEYPUSHKeGxbN1VKAJj4nukSQER8crr35shy3bPZVtTtvmQBSLKwnW59bZQ1YiUZQmi2Di2nRbtmXp9",
  "key12": "p9d7gVREZXGD41brFW5h4L5hTtxV26hnzax2Y9x6XsCeVeC586BDyVkGpSeHTtK5Dufh3vqFAnyB4mFUchvn5oA",
  "key13": "3fQffxk2HTmG9uz7WGStngT8kQJNGnHqUqckyEBQJJY9AGXSYjmN6NfeeqXF9WSTX7FD2GFegUaxUiqpgq31fmwT",
  "key14": "2cubF75GwKG4vFZThSHQUhTEGbbjmjymHTaPVe33YoThZJbuVHRa1PTYLXauBqMpRrrwPxQLgKAofiHB1HQSHbCr",
  "key15": "2cSYn7cS5jPpQMP4tbLHDguoSNnwwrd3tbBFkgeQg2F1rfaFCa7e3S3Cq5smTVYGkpunUpvA8kX5L43DGEgmCgHv",
  "key16": "27XQmUUW1aBe19n3VZd6tG2paJ2xymRAQrgpDAGTL95ztfprpvS5YQQZnNDVW8N4DLxDgRdocYv7cftCvdFSesDx",
  "key17": "4AsuJorCmVEmEJMySXGyK75ri8ZWvtMFs2gowweapYcye3v76dU4eMVMSErtEhshGUppkJFy4siVVPSmUjea9r9U",
  "key18": "5qT9W6AL9FNpn2kUeupGBhm5C7SXPVaCcYsngT6q8PmacKk2ST9PmDrqb7vefg4fDZLSbo5xKgNzRuSnhZQxi8Bu",
  "key19": "2gW1vG1HpEzQpu6GU6zfHYBEyegVybedQxmFG6Lr3zJNBJ96bpk7TB7yN3CgnYc75EPPQpHoSJgjhGzAMEp8R1TJ",
  "key20": "36CBmCHe1WcAswwMJkPrvB1ZwVPDJ24URLsiXxMK9mfQN8SxbGrow2Vibcz9eBZEMKTayjePKedcmfEUBcacNgfB",
  "key21": "1ojyKBja7whGNRteTXMXWUwPfFusgXkgNaBfXdnZdVoomsRkbekcV8dmA4CYBzX2QjZe3ZQx8L4GxWvx46DHRF9",
  "key22": "3XmW4rWhgzhGWmriJj2Ao7xYDFMweVkhEQ3mVDmuUa1gqa3oanFvJs3NrUP3avJ8zvaQVhnuRdZuGMwvHn7FMMnF",
  "key23": "2w6oBTYyfoyMhG9sLrzBFw9Fob97fz1UVi4po7oBKYUseJLewQKFN9YwLKXnQMqdy4Fgh2Cr71hSSxV7sf2THGSD",
  "key24": "bKMeCvKkTPbnYjHDQWmR8CRSxKCWGBRNRKoqjCJAHMZhdn5JeQ4pfPt5GgywEb8vjwuAh4rgR19nqw3wA5s1xwG",
  "key25": "4qhdM6jMeFduRXHpny5T5M1KggaWw7jrJZo9Tgp5VbGhFFfQMZ8wnqyZBYEBeisVgPc9RbXaEHF1XeWiGWKYWPr4",
  "key26": "3ryypcAkBhRfnwBLBLzp6Q8WqkCykH5faX6Xc14AgbfBaso2VD37cykU3HWHMxVFeKt3cSMcN8u6NwAJdxUDTk2w",
  "key27": "3bHE4Z5HDUdJJtnwifAXS41zLSsRE2kfLtK2Y5AWGfrKpqU6fbgJVpFUmG8wsdQeEfniKjS9EjZotJ9iMNNvSxP",
  "key28": "2Mk95vo6Lc3YCqeFAggVTUxza41p9ownYrfAhQTPZFzjwpA96SQDkJnstW5N9dTWzjA33i5HVH92isLXj5QrLvvu",
  "key29": "3izz4z3qdGqsfJRKCCKQEQqUwkU5GSZXuEZw2EmZG3dL8GoDJe6yxiX2iGNT9V4MgvGus457EJiVLr6jE69kcVE1",
  "key30": "2mg3Fs4oNFLp8PwqtKUtSU28jTGGzV26yKH8gkbW9MmudbhJig2y4EGhK4wYS6wq2AHCYGuiirJx6vYzzXWjmtN5",
  "key31": "2Mf8BH7suyPGHLXiAeDaLKA4HvbWasCHbZVuywPVkBrMaPehXyomPeevrorw6Yds2qFE3DFaHcjgYQJsSjMj8Yx4",
  "key32": "XkDTxybhHJ2m78VppGvWPzSXRXzkvGAbUzDXcounmQ1qJELbjDtweVuwoxW7z4dr5QriVPqDP4Gy1kvYGVFoFEb",
  "key33": "4pdaommU6y1oe1bmD7LykejnKWKJxNWUtK3WiDHLFnaabX3ZwAYd7hzbmbpc75cgEg2KtQcbTvsLgNz1t8JT7Mq3",
  "key34": "2F64ZPxcXZgp2WUazaoNnB6MGNveUL3J6WRR26cgk4vCH7QAaU6KcoewFM7DMARp6YevSkVUT9q56v7KJqJ4jVrN",
  "key35": "36zkkN5NUYmPo3PALsX2TB83vWyNkGxqDzkSJNF1RddTLDaBXEpnTjVVGDn7qcg6cjHvhRxYjWrdB87dBvbSJPqu",
  "key36": "evJDSvT3ahNmUK7i9EZvYoWiRHLAsdYXyupsw5K1jRpDrpaiYoAzoNKLFbJpSMQKw1MmkFTXCoeEsFBTMcu6LC6",
  "key37": "3fPYqPLZRwupDanBG95u4pQMgFQjMmfuYHVTJ36cymFoF15p2L6a5DgsHnxVhRNvhT9KdkKfxS145E55ZSUPp86D",
  "key38": "5jE92euVNQ5pFn4zCGvqsyzVB2sb5M48pSxMCU12b2QasQ5zfAuLsKEN6DxFqUmGxKn1oJuFAH6k5Q5WH2rUTZqq"
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
