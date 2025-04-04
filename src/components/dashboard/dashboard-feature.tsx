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
    "4aBLwwjMYyKzqUc15ogcfYRHbYo4swyWMXCyXm7KG7vXQPPvtRFfK6ov9iYHVzNjL1vVxQJoiYVPEkRstmo9RFC6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aA6RpBcUNApczZefAa8vaj6jutsBJXTx4FdDkGbbsJAkQZ2NzUvJMsPXFi4p3QgNqRkCTfQZx9oRx2JCVXj6pdW",
  "key1": "66AVNhcDPtCKiyY9zF2DoNv4eNgdkT9W14z2b5jJ3BvQbwK3uvTyxUfQ5Evmszxg46gRubBioNw95JnStm9jJ2pt",
  "key2": "ujFFrvLaU4Pj82fXoAHJwxKM3YASVKciV3i69fqm4oL1NUrmzehWXfut8WYH8dXoU8VjR1wMuN3t3HmAjh2PFnS",
  "key3": "5iwHncqPbVMAqTwsm7uV3muEEB1ttnXecyDMDnAtrERpfXTbmrRpjjincuJxSfqeS34r39shz4Zu5o7yRzpG9Uhu",
  "key4": "2oSyVR8JeyLCMDek6X7HJ18H9bwUiqtDpXEUiSypP2Hch3YkzPnC4WzCB63eGQg6wb1PPmJYPdGx77U3EbVRVyFV",
  "key5": "3xXkxY4TE5mw3eiDXmG8rbQ4gJGwZ3QCkmEuKqjErqkFJKnUCCuZcydRK1xxU4KA9TvFvEC3eCGxucuSyJCRWLVV",
  "key6": "5CwcFCRfUdbvW1tMVR1uEwJVuhiZbiCrcD9HqmAbRWomzMYyd7XZpbGxtJdb8829oHQJCogJVsVknMnjbp5HbSaL",
  "key7": "59BegwgXsePr3U4twjGb1fctuHDxHykUhACWG2TP32BKXVH49avLDJwV4CcTnUFB4nExCNVcJknMVksnrcyRazwT",
  "key8": "67LGN2nACnKN7zpvc3BLHjBas2cywQojcH8mk4zJmvfHL6LE7qjwu7XTfWxQYztH3VpskyWJ3zYGLbBoX4cPXGqe",
  "key9": "25xZLGvHC5LJTw5nDUNvA3oLhJxjZGV2m6fXGujesU5DELQ67XYqmakJP7gaZaquVApM4s3kyfPryZ7Mc3WUwYM2",
  "key10": "3ycifT1SWktp1Cu9zAGwj5zg7RZQ1MNT82DyJNnygCP7dCzWvFQS6vF6VN72PUVfk1LUH69mqr7tyqeeUh2YbgoB",
  "key11": "Ejk3DBF9K4vYqQuxxJce95xdUM2WWW6eu8PEzQ1gixNn5Sw4UvErn32Cg2H8cRjmHTqqGexK3eapFr6avZsqdKk",
  "key12": "43RCwwSBFjNM6suVV4ctJRPMoaxVBPMZXX1bmnod5zWzchPpSFnGHFBjqERwxsbtupC6h9dyMvbAnfFmpvjqCAPU",
  "key13": "2AqyxapU8XDBop8TVXPBZY21HWDTScDsz76K1j6fJiNX6qTEe4ab4tHgeqPzViwM3DuMC5dUEVBYb7iouPg6VELY",
  "key14": "neb8GkRfoUwr8fUQC9yj4qz57f3vgiqCH2J1omt4Y4ZLcfSo3qxiioQaGWDUYKtAsdePYhm4fv2hehor1FL1mg9",
  "key15": "5ReFsTxFpZPWr7MWk41uGAo7ZWcxw3XzXkdx2KubXMMqGbqjjozVvX1Bo7KhNdw6ePEpwjqAAC2pS9jF2zQMWvwZ",
  "key16": "4ZxQRQLoGrPHjXGuqdYXrQMPQpJMNPyFEGH2iNG32pQafXhj5Sj1zPcWLDkfJCSPaEQLQ1ExsLax3yCe4SMbfquZ",
  "key17": "5Cy2kMHE5HWzxP2pV3CwhRrs1RNceZiQpMHD38MgkSFJV8nC3srKBBnXS7RzVR3G8yn7zGxiLYrZun4y2ME7WosU",
  "key18": "6eEanDVQGM7dyaPZmfzv1QuobCv65Grpf2zTnrp7FjhggBUaLfG9cTH84n87W56qPz3WwEd9FR2jKAjQGAwgu9w",
  "key19": "2EoHDbAGFoQyessdiopJHsJdrskz12CxwS4thVV7Ud7nndtooSQekwQvACMUccMp8bkuAFKv96mHTomiDwcPBgnd",
  "key20": "4x84Rxns7cgvK7nJZmPAs6Yfis94Lvo9r1GH28bgxHYRp8mpLs1wu51bP2BqEP13NitQ1XL6dp5ehy8rLDuEQpzj",
  "key21": "3rSNRNC3mBwjbo2NjQQQW6SSTkKc9ovo2spQGEjST5JJauAPAmfFqdXPYAByizjW7nvWvWxjynnsfjmzstZEXMdA",
  "key22": "3H7o4MkpnE8ya5iFFmzdJHsccyNWWSi3K2A7EHiHBbD6Hdj1XNcNeP4uunzWLi1nXJ2hhcVGrN2h1VD1EJqYLaA3",
  "key23": "3mY5rDpm3fwd2NoEXSz3ah8U1YxRgHXfeBjZnnuYXnkHy16HHzEZA1SRzZXsQnXnLkM51YvazRxUL8uzeVnmLra7",
  "key24": "3gddE7SAt8TzAqeFKsqdCQF415VEyZAegXss1VMUNMidapm8e6mBBNjpt1LEEoBspagCVw6B9s2v9GZN1yH6fxT8",
  "key25": "NkUcWh5jJttvyaZidyEo8n3uUyxtZkNNG7D7vK2R5qkmTwYuP5Zh3zZCY969aZDgnZwD9ri5gLhFcmEhcedDZqH",
  "key26": "4EdE1mHaQEvExULjwrEHzuDDGhAjJLbAtyZ8Mcz3KJR9EDD7DPTca9RhEetBtHjvyrHBpnrwV3r3oiRGH9uwcuu3",
  "key27": "5cMQTXCvqj4bo6mmBBuVtSFpGUFfowFSh45BbinURT1y5pE9FEqcdSEggNcrzFs7HFcTD8f79EW7c5h9C9ZVWKC3",
  "key28": "2nM4FE77FdheX1Ujx4jwhLiQKYanMXURLoYuQPbh7Z1fGamCgGLaFWLj2uWRjdhpoL5ipaz22mniVUCU98Vsj6dH",
  "key29": "26UXJYK6HnRMoHEhXRXUq9RKRTALqNRq6eLQZwiWiuXCfPqQq1aRpRUdx4xyRstSjvcGHjcXocHEzvJi6nvktPm9",
  "key30": "3SMt1eqSmbto1D2wfTfbJmBz6yKXYfppzbRrJmBH4PVFP39oWrJfet4Dr2kpfuH3RQ8hu2hhYL3foLw9o4aremUZ",
  "key31": "cMFZ7cf4bCUStSddGELzdQmKxA2oKmcddwgCa5SsjiWBqpRo9sUricmwYQ8gzajeLSSX9mbdcgtSpJVYtxJt6zr",
  "key32": "37NosCnm8C6XKRe37A23kjnEmm4jTJNViwJ9YzpjLYz6W5iidmfkS4XrwhjMzXt7xJhjRtz76mr8hXVqUVSLmnnr",
  "key33": "37E2pu3Ki5NkDSZLPKCaCs7WX4WGQYpCCFEHA8LrbAevySrgu8xKJx86AzjSPKCUknft43mXHq2Ka3vmcCnHd2Sf",
  "key34": "4J4za2ng9ZuBbHLzYBbiqLJUGuMoKfbDt5XxNrqw3nJ3bhaJ9dsZSy8UZjdpmwwF6s1ojaCJK7v1NBivWU9i9E1E",
  "key35": "3mjhWpuCZwjaRe37z6qPdE3scP1eQaQxypgFeP7HEPx33nSdBXj3YLNT5d5QE3eCXUd4fYf1wjUBejXZcFb1rw99",
  "key36": "5Qy13yvcsswwsXpEQwm5dzQCqcRNkTWtMiTvCbe5zpWabBrfMdeWrJ8Yn22wc2p875ybSjHuY8VJv6NuQWcKL7Rh"
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
