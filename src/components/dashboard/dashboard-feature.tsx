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
    "U83uwP2gm73e9c31WpJa1Deqsfm4L9eM9wmDdaFqtCxT6KqhkrLEGPgyttBEe5P9t1dE2Gpp9cFyyPg75gqsNYr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Eq2LHt45z4rBCzdKY8ehvBiNCSqVppmiBEr4cywEj97wsFzfRk2MjKSbgLzeFFohhXPXMPL34t54nZLZs2qgAjv",
  "key1": "5GVAgiT445iuTbL5vBP43wSD41qiMRfKKTA5ouvvQcjx6F4TuFo8mJ3tvVBtKtpDcepZ2ajM2SH5UKHAg7X2dT9P",
  "key2": "2iAVoT5yQ3gx3PDKKofuQvDc33tMH8UXLyMDM57ES237TkAffZ1JUbkewSJwoKBhVaM9uKomLyNu7Qkqax9dF2dD",
  "key3": "RJjUUJ4vyHSY71SYf6y6qKzz8BN96VP3dggCG9XR4vr2fPPpgasrbmvSTkJPu69wC2RQRd9hYMrcvDdpyZUB3MR",
  "key4": "2FPHGvVZKC1abme9ivmYr7RXsrhaP2JZPhv7YcAwjzbQyS4Rok2iXZpAixGfPgQbMjuFwMRcaUfGaxWP8GiTNSzy",
  "key5": "j9P5SGweojsK141zzZY5n6vLLT8odbxwkMGJqv1RgBnz44tPxwRiJZjsW3JnSEJ9UVxxgih2WGJ5mavs7VsKQmW",
  "key6": "4wrrGsh4XcKJNxDnYtgMskJFoGJHCaMkgxWaZ3DyWCRtNSzoHXxngNajN2mucSWrQECzKXu8LPAsv5ja3N3qDgMo",
  "key7": "2S27GvSiRAQDNzMzyZEPGStWQEewJ27FsFxWC52redcXLx5ufT5UKdAHhkyfFPKrrkMKkWeStoDg73GAJ9fjnT2z",
  "key8": "2T541twY3VfcidaE7GCFpXcVr8eZeA6W5RXDeaQ8hMJgovf8WSnADFTvhVsvMCfaFVroqd6itykT48hNqjadwSVa",
  "key9": "1mqPFv59mq77dVqkXk4mJg817okraPfaoYp4YL2EzwWkk59ySWT3KtvRR2iVsfQDeMAGnp5JCzko4UDyAxdKrmw",
  "key10": "5L4ceEkKJJCNkBnie4wruWij4gZ5fEtfsQY7w6fL6WrZXhtNw36ydo1VFR9NZR3QTKyxx9FMfa9vcmmH4MjYTmd5",
  "key11": "2FjFqNqK6yM1cJiNZ6MGdbmxFeEz4p17BankA5nJxUd4qjkrVMZjLmmUTPmgbepVYhiQz9jUytkVMqn1rmno9UJ4",
  "key12": "5NWnbDpHrCFi9uJRBfPoL1rGt3E2nwYk75PQm48uskYTc1eTr8PUite7aDpdVRJVoTUw2bG7eRgVKXjhnAU4C5xv",
  "key13": "VebrtHuRcdRLUz3inVMHK2yBYEEp6vHP42uWBLLr6iE1w4ZyZdYkVof2i4pEv6X5hAbYNCLTbQbfyWYqD17JK7R",
  "key14": "2aQQ8Tg5752859TH6zcmPmFCJFHtQEFapd9JR1u61WASqpSipW6Qd3rJtPS3HW4JRQbfEShpo1V42inNFq1gMPbT",
  "key15": "5zqQvm5dPvrAdSVTb9Yt6heycQgwWUzui9FPTUJcM7bGj5terdnXq2Nax3anyEonZLHDrwYTUnbP9faCt1hr4ph",
  "key16": "dSiewxzaewz17ah6xVvoHeYyqZUPNvKNQ2dt4V1si455s7cfeZsjoewn72Edzg7PqgJdK8k9fPGWE48EX6KDoAG",
  "key17": "dUyYEb7ca7ZVJmq2KLg5ykxiQZyvFwzyc8Yi7KSN9mhWUECmBs3djeD48aYuWeT6E3XUYHn6WxhmvsPyLQE4EU1",
  "key18": "5ps6F5i2kFwE86XgZbM25VYWdoARvXQQqiGkSZ8JFp1D5KNRXLp5A4TLC4VDEzmZDtfRt3CMPTiC5rpaY8uX5xQo",
  "key19": "HQdYuCKVWJbsUhdQxQKfjNoQW3Gm7HKvYSVi7UTRswG9qMgkC2uJnGP3VoNyE5tJYS5RdpcEsrWanscPsamYNE8",
  "key20": "QmF4vKDMJrrSAi4g2zqumkRQ3F96fYyuzNhonCQEzk4rf1wkNERVe9SDLShETqvXdo9mSQn92X6XBamFjeEbzff",
  "key21": "37cMPK945ajMbq433GADso36xkjtrgcahH8DqttwutBf8F7hfJUBdcdtYWke6fn7GtNVu1XuwhZaAcMCGhSoUmRP",
  "key22": "x9o1ss1dQY87QLwA6RsnsjvgcrvgaGva6n4QF4PhJiTsGW9QqPJDUCxEMDJuSTTnoViurqe6mQrS8XTgmTbT3Xz",
  "key23": "4NZ4wvGNx3de3hcRYsztttWVz3kzzw3t6xvZLoKhQAKEhej7XfcKWe8crRqoKdKfqWY2YT58hzQxhGgRvkaz4ZT",
  "key24": "hfkbENbFD1RRG9q9Sx2oAGNkFLMnFbXv19mLggchnccsdq325jvMAAY4RXLcqh4wmy6DSL1smnekyTo5Nhk4MY2",
  "key25": "3BfiLStdFiaGd1D655xJb7zj7ue8uGfPjSgfNyFAGsi5k8SxC7Fx7qXaizNVquF1vx8yBSZxTJRmLseMWiU1yYZc",
  "key26": "mmNd7TMHiZ654ehTuGtTCPSGUrfCjuv2cA1k71iFifuk7syCiAoKeQwpVPmMcVy1y4dTNn8eTANq149QimaSqsu",
  "key27": "39ywqfTdc6JH6LjJfh8GWNGAh7A1GBVzV6U9mJ87cEjbFwnqVHAnhqUsXf6dxWR2L1iPyjfCGFGM1TY12y8Udg2r",
  "key28": "2FxVw51BqCK5jaRQP2y9WFdvccN7zRHPWtiq7L7PrQDTKD546CG9sJuwAQDhtRbPyuChCnZkaxbssmzJKthw3Gef",
  "key29": "3ENfR4D1ovktSDXCvGCgGg4pPJtcbtMdC4wZdoMjwCozjd7vwV5pNJ6YeLqRk5XtkLMk7bTgQturDBeLhFA1gUTY",
  "key30": "4QhL1RZSHVUrgSs2dXR7PTt1a4MNLBHkCMFdcirwtMNcVJ8oH8D8tjv68xvc243dncvyLvpxE4xveNPveLyBjGj9",
  "key31": "4jdqzitRzc6Yo42584QMN9FscqmgDVhwcdw42nWGLNQWhYDj2dGtKjkH75Ms7WEnBvEWgcUNfueLhZdjxaZ9cDXJ",
  "key32": "33YGUuBfAeDQr3quGZT6MwLK5xDF9PtTejFYZUpAcuZmFn5iCnGY2LonRwqZ3JcLUFgxyGVRZYwyYjvE19J11svh",
  "key33": "4EwHFP7HefzHN4ZuwcVbRMA36L5b7AjzKwsHENvxQLhvuTXocRBtBmqdQ11Pyc5Z8ZqbF94vKKdhWjYj8xY3tjBh",
  "key34": "5xho8SxcZRpzrJ13h8ta8hYhELsJnoZp5KrsuKEUcgJ4MgGRytcJ8tZ4SPdAYVhot3nms3qS6PiX3yJyD8Lg4XhC",
  "key35": "2RNK29XqHXNVbGN8wetXKHFUoDNdJpRP3aovER4BdqToHrRJR3UoxcuPggDPXorf11R6GDKNBWReaMUQqEJHFAoK",
  "key36": "36v1syUgrCx5TRWavJ3jQ9A7KHZGdbFiZSwJggCbKXBRKLguTP31UE6kBWfK45V6wJkyrQZqcViPyq1ZK8W2RLYN",
  "key37": "2A9Fzdhr6bgSJqXPuaArGhdXrVDAPsqimrayTbjhywv7GSYDF6zVxzihEQU8dNRtjAn8yaSmkBYR8wKrC8Qmznmh",
  "key38": "3Rfo6PNoWCxedZFir6YPpFWJ9wSjgf8p6VNfWnYiHPDmDbBQH6gy1yEHPPz4M6EAoUwRsnQ6PA38UpCHzjgH63D9"
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
