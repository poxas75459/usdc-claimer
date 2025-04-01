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
    "4P6pw6fPQ6wzG9fMhVvcEakm4FufvMSvjx4KRZ11DBtHKUMA4vFLGRrzZagAKQUs5KitKQcfubBZ5nFKECHPoxjQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HMpDF5hhu339TtHuAUsx56xisoZNR3Be3bXDsL4LAnX54GjreVPP2YEMU2iRq6nJEfdAp2ZoDMKgqZkeCNf9tdA",
  "key1": "3A3sr3rke5WgdMz6C6sYyXHagrRWKhrKhj2ar7BWWVXCToRx4iYTL9bTPZr94wKySXUww1upgHBD9jae5VwgiUgH",
  "key2": "5diSySKzapGJPA3TywGZR4zARyqEiXAwP5VCs1CUAhnDNAweWvLkiZhF6mfdWVqWT6gzhZndJtaciFVM4j2QMgN",
  "key3": "3Xg9B11rYC38iQpjWKaQrPiqXeuKaj2nSTq1MaArTfiL6sPvdj3kLnVaUHibT7tumqafor4tsXSiLB25k2iAqFND",
  "key4": "3Mzq41rCodW2E2d3yDHovKwAW6gp3jPWBNfUyR4368GRbL9Cz27FgCEkoV41VJ7uTHJReCngJZh4agQBaqD7QZ1N",
  "key5": "4EGjDy72WMqqjMgFMkQZX3T2baCS5i3etC5L8oXC4sNbFd3aack1yAGj2N7zu9zSwc9iGu78M8qFreEUD1hkx3zD",
  "key6": "sx5Xbx8x5eoVeCmj6zJeA6MGx8TFQ6pKap3Vn6h1C7CjzXCTLeMU2xmtCfCZnA2AhMJTstS8dhE6yRbgUszEk9Z",
  "key7": "3d9hXvBPYnVCzRerqLyWkHcubj2fw6KdaBikjnpxARBTSPBq7ZmuJTPTBUjZaZ7h4ccC8j8rejmepCf5kGpL4Yi6",
  "key8": "N4BPc4vEKx9UWJLfhHg3JKtyBAnwLiPUp1Ka4zx3JxrSErmqarMnjexze9oZCza2Y9zcKU2LABQcf1ffVVmP4BN",
  "key9": "5ULm1kSgRnExE2LQzddSBuz5SjxAXxfxVnwkZHs2ZupPL1UDgvzmQ6q3SxMT756YjWSjKiBktFqPG1yDV1AGnmbn",
  "key10": "4oJmjyFjTUfzQgSmHtjVZxFZm3q6Bqr7T7cpbhLRxtZRpHpQ2sBEDiJeoDRjciKgRCRMQhbncTwbgiF8RHUxXPQG",
  "key11": "3ShjZB7G1Yn3fVeTthbMhRr7XeP3JfrHdJr9bdnYg6ptfD8e5JwBk4HGnHE69bi6USNuH5EQbaLroes8xCtqjtCW",
  "key12": "3PmsfopqXmPFVrBE61WoFG5rSVugk9gyLN2y5pFesbYTHeCSmwYfMPgGLwM2nRiL8udRPGkMryxieszQk9QCcW8J",
  "key13": "3zq39j214xEVUB4JWzyY1S1yfMMnvRc7ERMU9mesQHNL5XmCQ6apUpyEWjNrWzu5ZZzvP7gSzYgCiGEhYYYs4omE",
  "key14": "2V3Th5KAZKge9hCjc9b5scsBwokYYY6fdQhsGkjXyv9Xf6rwGLasYU8TFo38RCAyCtWCaY5GaK6cAF4NjCZvDYB5",
  "key15": "ZohLrMBmgoQXjj1zisGsBa5AgebeVvZu8oeXwiCoKkNwKkZxubiMhGxHVem16NvgPWGSA63R6uwxtEdJviHnb6X",
  "key16": "jC2vEqEAHHWX1aAQoSFjPWJyib3LAsFfNhDUttDK3FeRu4uRVaKvTfK3U33kBGZFL1c491fLWtNyJvaKmL7YBjo",
  "key17": "2YwzNp9wpSU6kBfMdWbwggmeyEMasBSDVFpe3XNF2xXKz3BZRfAiRs2jtcA7S8Uv9fYVJb38z1sVPoMp9DRDtE3p",
  "key18": "3ePy8mKYiSw2Ge2QNdXZL7K5KfKer5qeRfNhMbArRLH4VWLa2VMAe94bjJ7MpphahxXW3rKi7zrKf9wKyo36Urpq",
  "key19": "2qUuSYJ6Dr43DaqeNS2mQRWYFyJv5ARZHR89zBkaMZQRP5yYsDsNBNJueLr26SuZJzgg8AWu1JxfbKJj1yv5Zcuw",
  "key20": "T7WifmEkQ9StTshSq3DYEjpNcLh512nXvRzuxpWcMZH7oTHRVyzFRdWZ9dRQ3Gypz3Z8U16g3qd6N6tQcn9pSAE",
  "key21": "2NqPgVa53UuqWjWLb3apCWfFptwVVYpuaoYLBUZUbh1739fm8zpBtSGNcANo8qwuQwAV4r18h2yFf8WyqqBWtMSK",
  "key22": "4fCPokr4ApQY3MBtJJotAMw1bpvUVYK99tzVvYy1zKWfG4Tm8UTYpLczRM8NzKrdRZQpDDnzuu9tJeLF8uBk5q1g",
  "key23": "4eTvaFuTd7jWgwzQhWgFKJiTYKCQhp1eAxDsTvuXBvF4C4jmgTLS3zBPtTfXNgZCne8cX66QAQuX55WE74WsgVaD",
  "key24": "4auMos1z3H1rNiaeThSz5AJk3kPg4qc3zn6GeSspvpPFCrTaL9H98uXXG9mFRybFSdx46T2hLjkqtL8Rm7GnW57V",
  "key25": "3mji7V9q1RDk5s6RkzSZMddgHyxCotMsVGCQKnEYivWQLjxmp9w2WgZ61ukrQXm1xxRtPAPTxuFFqh8Y1YwzYjKA",
  "key26": "3PjopRSAUb6xc7ET3WawFmE3M6vk3PRiEoMYQAohoKSMBFJfPGAqL7Nf2pwRSdjeUeJ9R5V5DriUSW8Wyxhg3jMH",
  "key27": "4wahj1jwYoJ8ijLsDHB2y8iCKZRwQaZ8vVZLRcsRrZVFSd569oEMhyGs9ZJBNd1HTv3CdZt5c6dy88knRDEG91Xk",
  "key28": "WQdgkcDFKpLVmfBniMf7fEAnn3HuKBsSA1ht64j9Z6s4Yq1yaeURiikhkmTLXDCSGumNR4qiuyHD7roMCE6sMiX",
  "key29": "22Wk5cyfcKdDLDUnrhDKgT3SxppfTw4DSZeRQYK6iTmdtz2pJxTzjfptf2HZTAKZc1xnbMMxETnVE4JUpQqErQSJ",
  "key30": "xAKBDKSgWq6NVxkZhsGqb4XFqfUzZeWr9fzWMgNXHn6ULcVQbCQm5vG2EbrB7ssyQbBpYKGg4SaFWZB38uVjNuW",
  "key31": "4faTad5bS5Rv3Wb6fSci5ZWheBnNeAMk5BLtfoWqKgdUC77tLc2SxdktJse9R4F9BH6M7Fps4EYjAbXT12GgU34i",
  "key32": "2vMLM3opqyWrpCPt13LbQBahY5xNUYvUt6P6WkUaP61JVdFrW3eXp1wzX1uYkQsxEiv49BK4U3e71LCJgom4HAdY",
  "key33": "4DhxogzaSFWR48sveocYf3WM14mZ5UyFXoAh8w9yqUtAzr8WECzN9LjMzZUR6QYD4nk1xhbRbHUZGkAc7YKqAkZx",
  "key34": "28M9F2N1gbbgeXYgwpAC1Taj9F4DdDPNbWtTjTumrCVdpb2AQCPLov48jLti6oDrn6EVBfCB1GQK1XLALiZSPrie",
  "key35": "C7ZS2Uk7w9V9afbwo42zRoNqtXZTZZVRxqvq7tcScjNeEEWWFnVydKrdJMp285tA41ZJyMNiCfJXCixFs9dnPQu",
  "key36": "2GCbCG6iMyYCmoCV8m9c7qbUgFLU9eHKuoxnfQSCyAfpTRBzNnkBQN4DHu9MZH78gQdvSnm3ouuzmTjpnqpNzdmr",
  "key37": "5hMRNNtgNVDsCfxeJtid2uVhXzf9B5VfuXZ2gtdQLK7M4TQEkn8KkCKVV92c17pgxNN6VHtE57dmPPhB1DYg2ZkL",
  "key38": "3NaZtif4iG6cn7kLKtLtFJRvf5zH27MLX9cytB1jX5sPs5XmSKncK5FSVqUbXpr3tRQpqjKkgYeS4yaZ4DZkfHp8",
  "key39": "37yeQBwXBFjZhkSkNuL1PRK8wnvdh2YfwNpGHzjj4X8vbnPUAVMUZKNAoeUPDCF38huwR9wksdf13EjpbSKQidLX",
  "key40": "3fzNATKkFyRCNwv4RT562N1cwkoZ5pEJKxqkE3BdnYXtU2YMk3gh5PBRsgUkQ9AWQ6kABtnHaTLXXinJiXSfpAhr",
  "key41": "76bKTUVcTWNkAcBKRiY5AQRRfdTPmrxuABeZWbC3DtqprYnJG1VeQgGZxhUSdvHCDb8jXirsM5bPmoNgovdRn2g",
  "key42": "5VAebSbmsPBnxUDHA9JyLzveWW7wGTLqisPRBjVBc4S2WvhAPuCCZW8LKudNSwWCwXfXPo7hg1KHcn7r7wdYgEZb",
  "key43": "35mJ28SWAuv6nniJ1Cwiosgj4rrKKpRpgECCzU4tFpgfjSCUSe5c8JAddCKrXhVt5Si1wLiyTqQHbNjQ8h9CWXxy",
  "key44": "2MF3iebNQqKyfUQMTg2SLRWnXcfRmMEenVBByJhYiiFgGxAnKKVi9ktDVdJZjaNMdChJLQS4e3YT9JRdQPW2W2J",
  "key45": "y9L8NRjNnRi7ikPJg1VXjzjoRNwd3bgF3P6dpzShbSH1hhi3qsuxRjffrzNeRVxt2VvWo16cZ2TKGfchL821rw7"
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
