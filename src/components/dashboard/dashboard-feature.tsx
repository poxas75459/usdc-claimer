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
    "EKi9Go8PjG8b687tP9kqAnJ6PhMa5psrVcVGcqszgS1iQxhKe9HxNkMAn7mcKqvkyqkBsZ8DA8t5BmXko9LHqXk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iJEsqyZuB3JskV8N2zksMX1iAx5EzXuGBXsrpVodmoGva2kxAJbZDtijydagFcz9SD3AoSRdAxub74uiRZUpaGd",
  "key1": "4zBRsb65CKb3WvFhcnjvx2P3yemEhQsFkfFHSmXWi7556ct5zpedcNBZXCcqMUVjTtEQE2xeihQnoEuAVE6aACgz",
  "key2": "56uz5on9yJmLLbf3dKLi93wCCt97GK4YjdQMskvU2ipFY8rNnRMWgN1amdFSivYfVb6nudUsWnBqM161YXreiajT",
  "key3": "1w4Ri37bXB3NvAeW3DXwffbRnr4RbYbQyHwopMvS8Uae8J8uh6rrx6WWDfvu6KrVWPWszUgBA1HPRpT3RHfJgCX",
  "key4": "5QTmtdZeE1mcrTdAKDMt8dcmSkxz3dEm6BprPieQEWMMWZgYRbZC9wAieR8Xs3rDHoxWQzDVpKpnzatqkMVyHVPd",
  "key5": "BJyDG9dxVdDurcis6xCbqxwPEMtxG8RLpPhELaBr9TJauKZfbj4zikAHy2vhJeTCSUA5re3JPgDaYKh9JM5PnSg",
  "key6": "2UTxrGRPiBj76ybCHEwZtkBSkkGWvCxK2APNaFKVH53JiRJAckvE4R1YKct1jT676t9ce7M51kAjE258XrKRxMc3",
  "key7": "4tmg2XFNbpc6f6X6kAk9wb41WF2oqKoxPrE8vHDPLsXtAGtiC3Yg6aocu9ajFnRFLeK3FAWfnSEcDVUt4aTuaPxu",
  "key8": "5TGvT7xMLhpYgYFmGDbfjvCvkdjDG2nZPyfqqcX7gTVRUskL1zudCJM8h8TnGBjPr4F6kRf8NLdED5tVdsYQmJ17",
  "key9": "4wSJR6e6fUnE6kGZ3F4Nb3SGjAYf36LDpezFwewUdMFMWoqFhdjZNX7fjcuqMJKJAvFmFQMwYSmxEZtWsibToMZ9",
  "key10": "5XeVdmL6QVo1ybFTpfQQkfnZELs8wdKAvqR3z7LG5DN9bXFZHEg2XotUvWLEyjH62qtia2CWx4m22kuKqivogiA",
  "key11": "XqUArXYZMYjMRMr4ZrUTGtP88qgPvzEnighUaGrkDnQfn4JnwdkR8jpn4SSHDmAkg4Z8i4xMGrJQQhcweJL33Lg",
  "key12": "5LG4etZBhtKjphWmNdGszSV7dRHraZPbm6NALkjaA8HW742y3XwZ5UNzyMNWes6C7GNNFCKaq85pCEkjAbenFRT3",
  "key13": "49roGzFHejMcMs6j9oAmLvrvLhDbom8ZvwXHZYr3oTwCkxsk18wwdGhCRJNUz9sJd7VxSfpLCV3JFk1TjMbbVhJn",
  "key14": "3WsbSpwXEVHxG9P5zAkTJLqScgV3jWUCV6xxbAkma1L48a6wCYzanyz7kgeE6qtDx12HzjNo7h3wFTHzbdPtD5vz",
  "key15": "5Vvgop4YMpuD1LjxLGAATNDyg91NUrVjiPXBrYgAgs4kfqnUKowVyTcmdBHS5vwXzKU6q8CtoDmzPECUaTmFkcvx",
  "key16": "4kicQuDSUcuF6yn4mT1PvHRnaiuENzvQwLp9JUg9GR3XWXqWmTu9bPY3TRAKdJEPxnrQhspuLfvzbupgMx7xJm93",
  "key17": "2o58BeqYyGmdJPTmWfJHTm2tK5iT9c5y8hbAh33UK8qVprmekCNjp9hniEkjJjyPQSQzp8DaBKV8gQ6NBRuzx1yy",
  "key18": "aXUvcXADnJd62R34z3cSigptTvHBbpX4mxLEdQqr8vyAw8SG6j2GxVAXmfEK1udkYhZwatt91UuRCiusGYvjK6W",
  "key19": "3L6ySyjafN4fnZZXigmf7vXQbkNykdhjR3Z1ZyuLmwcHgPbxevTXgqw6UktTkK5sGimhb5NDPwb41jULrGLwLkxt",
  "key20": "5Je67TMFhsmtPVnUmG1LEYHtvck1DeACyNWzw2tt3dn6mBsMYBgxoZf9xVksPYG7jByzLHX5KtioGMD55KoFmhJ4",
  "key21": "Rp7LwLZRzmroVsaE45sPMrrRw812t5jfd5NBDFRQJifVhdRv2rejzfi5iSDMjBGHtHt2JgkDChe1NGwQCU61tTp",
  "key22": "5CRaEGaKPemAJaRmJZ5AppPvG5LK8MK3pBp9tHt6qE71TGefKtTqkhWAv84agPeDBbRuUVvxC5VmHAwepN7iLCfU",
  "key23": "3uKVMMqBkyTnNbvCUUUJToXiQ18MpPV4Lw4K7QDJzaYs88xWGdbXz5MCQvWaNHSqahemczZWAnufYebxLRKfqJRC",
  "key24": "5q4pXxRjXQe7UcxjpF2zKLVagKE3Zqw4GUgS4rCiUz4ynADCEJNvrsdcC4mr237MVi7pfCHYvKBn7PekUhZVKwjk",
  "key25": "XGvChHqQf99xZckaeMAKMqD5WvF6RWis6ZE2xRNKEo85an4EWjyW8CaGUgozN1MXFir9aDLexwXPSGYuLQ9BiFK",
  "key26": "3kd6RjuWr87WNbrqKDmWXxGa8A5kFKZB7tbUudgNm9yELedrt7YKLtmsJcQyiUMXWuYCHAVQSzZeaS5RKuRJugYB",
  "key27": "2jFzBbQbWQwsbbaj7YBHyomMVfpvcHjbPYhcrAEvtMZ9wuuWBFRNYxFUwpHgtFKcaEC2fE9MUJRa2vruTrZNBkZT",
  "key28": "4qLsPAD7iek3Nghi6yKyL7Ettqd8VcG3oWSvEbnU28Bqyxs9CcfHBvCoEw92FM2kXxJaPdjpFAbeZeWNq6scEhg5",
  "key29": "eZ8zX49KDPNA8gHF6yEJ5UPDFSR9sS7Qdx4VBNd3mp116You5M5ErXfaqv6p1REzar286V34n1wVhNz5RyEGSdb",
  "key30": "3Fwzvuztg1bpqRPKkHYeaEK45SJ4Qnx7KTvgd3y3cff6cwaTeGTQ8zrpiMbZqLiVaBQ9W4kVjehQHNuxAxemKdsW",
  "key31": "4sBiFagqGooyQ2kHAAcK9aaJQ9p6LgrKas7d7PNoRkZjTtvFQZmaiVMwmGGiWwSkR7Dx76evr2q2qNXRZtjEtJqN",
  "key32": "2rg8MAkjwdhQ6LqAKNrMHTEPUP5ENG5JFm3fewXVy4GtVBSLGDGu494THTGfv6Wk4L34ChXXeUw2sNsdNGvFsp5M",
  "key33": "3ebCpZiwivie9Uw3E6otxSgq1gCEuyvMkbWt4oh4sP1qFf6GvdDX6HJX7uwwgmCLcF3qq7uH7vRzxqcrov3nbPas"
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
