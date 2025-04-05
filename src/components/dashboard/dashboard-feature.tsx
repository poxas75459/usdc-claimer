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
    "3YfqpZBKAycfEEjkFmzeicPEZJmvc7qSePuWXh5a5fc6VaUN3zMkGAbNpkBajXASDXEyq12Zn5eZjuRdYxs6uqD7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59CSQYPqKgMLSBd4CR7ABmYvcbhFPwdeT6t8bPYWYnZqcDThvWPvnVf43ePYmbz5fkGK29xeCscyxpy4wAHkRNYP",
  "key1": "32rzuACmgEFTkQDpGdSqEZ2pawPwszLNsfkmPadGB8ph9YajSGd5T2PLnpCXe1FFfh5tD3JsJtsX9E5N8T9PTVAK",
  "key2": "RvJzM3DghqeDCMFvws2aD77m9KBrD7ag6wWr5FLQr8g8oY5ssVz6un3YeqrBVxEapKRexyDUgFCsDPH7VTwZqCW",
  "key3": "KyjEmu9Tq7HWdJvkJvwFmoMmdCEN77vuYzmwTfGb2HYWkKEttT7wSrar9vbGUWmcKuXxuvEJVJTMPrmLvLQCAtQ",
  "key4": "4CLGMz8ka1dR7nrD5fno7enPBoJosAidqSiUF4CwA1rrjC5VBTZr3a47XJhhSmuZJXQYnprhCvnzrFxEF4i6keYj",
  "key5": "5mrTv848AjtSeZeifWjMwkkfYjM5hKeLXDup8fYvydivZxmpmX9vV6VMK9NaTBoCvUXCUqy13abMfV9GQQA9d4Wd",
  "key6": "21AcNGv9T9mi611uNMzpGwyEyATjfH4b7U52q3j4vfvEhM6gbVygusASTA5dTNuCiT3vYVQ4Nq3CGR83MRVBApr7",
  "key7": "5Y1GtPCi8WPGsGu9DQmBxChLYVnXjfkbpQ8wkakji33KWmcJNXGdnTKZFrcB9KaXibbZwRUPyjv6qVgZbQYnUDxn",
  "key8": "2TNUdpYxwS8UvwdxsNaW7GmQwdbp65ZYrU41GsLs6Tq8nic9LgJBcc6othqF13b8XWCuFARNvsY1K7SUb2E72LFk",
  "key9": "o67FiEYsoVYXAgeA7SLQqFxh2C3mpFNwLL6pUy2ZULoxZFpah8891zqNJ3aCfEV3x17iQwaDAXnbEdjY8G6Nf9W",
  "key10": "2NbRhU17z95qY1j19SDjp1QGXeyEk9FrS1AzZHriLJib3h6Sd5VLafH7oGd7K7FiZNmMJYg791Q9hQvk1TEpkUeM",
  "key11": "63DDqwUcd49BhGtu3N2xMvmpCDC9geRYPv9h7b2cKjMgMFvxmSaSvk52mrvYcFjUtzkXoh1icg2Wh3pXDaDuDpZf",
  "key12": "3bZakiK2YP9WpiZTyyKPTDV6hacoXdsDUfEpfBYbNTvx2AHDBnakCQiZYnxFz8tPJFZ8Fj7JJWDxMcE5Qw1G3oKm",
  "key13": "2fzFEgjc3PmzCjygvj88xdP79ncryJH9ngpejHGoa8e8hTzDYR84aUBSJQbS9TmvjATx7y7K9Zyq8MjQpcuWz2Kq",
  "key14": "38sAeG4pgQQgzGtSB6VL5RpH4uYYo7Mq6RvFgx4ygVSEvP1vKt3WXBAknNpjwGAcUQwXjtnU928FKBrdaqtnWtfp",
  "key15": "4uPJsWErVGQeEo9iDuS4Ai64FaTdrS5wbr2kbYUBVXxa1HEk374LTETU4cw1pT8ZwW3WQqoooT1MdmT951GXQL8r",
  "key16": "2i8LguXktvFZGktYHRZi4vevjvYrNetoEsvhZLXwphojDG3j3z2gR8kKkeRMcHE1k9UVuaTM5sUNN1zcJrEf1Giq",
  "key17": "zG6EpJ2Hkm8RCHHpYhqHJCov6NETbDh4ds5AeogstXocTgqkAHM12rbNgjoyuX4QCbmPaF3ky3mQPTSSWD7jHb8",
  "key18": "5xDKEjdrp5sYH8Wt43PvGpr1diRvrRSq3DJ6aiizXonF6KMp7YaxPQ95kBTkBqVgVhTJXRdAHkxzoRs4s7h9gNK6",
  "key19": "39gTfAHKe4zBhGvRxjdZe8vAZAwE3NKXj7tsvNN5iNzLTWoohD5eCvAzHZ9KSSp7kHQG5ZZ7omnyVFMaKngdec8n",
  "key20": "6ksVCFSdvj7TsiZGtKoyv1QR1s4TrugLVqoBkra5cwWt7d9eN4VF9r3UG8twLjqG4RiDDnZE2sXbNz9MEkNkiKu",
  "key21": "2ZTffLqA4ZC1cpD2bpwq1cYbSv9FR2cv2Hy7yB3uA1uxFpR7GoxZVtaU538LKR6RNWrzXoKZydBRScWJxSQsxtVh",
  "key22": "4RF6TxULizJQdRDJGMFwVMwSU8NM1fiRia3ES2jk7x6gB9A6wjjWaJK5uhWdnszaiWsQWecBDimVRrxBcz6KzNti",
  "key23": "2mmDfh2JxC2zVXoFrykWjNyzkTCXVqRFEdGjNVMuDFBWmevbP2ZkBmvJv2RTAVFDxdxqNZ63XzfSv4u5HRnT3UxU",
  "key24": "3NJKWk5J2nHjY6siJ5pH7AG4Mz4nWMnfw7sX1KyKwQz2VfcSSQE3KcKGa9gPraFNNFG9JtXntPwrw1rzrTHHXpG1",
  "key25": "2TajRTJ6S1nhbPLen7m7Ewv8A6w21KQ5VK4EKDsWXMrZpSTEAhGhPYRumh5Y39P3vtCaYD96SDD7ywwU1QxNeSWH",
  "key26": "3j5GdbCVAbZo4omTAy1m4ZD3wRX5yeUziebhBBvQ7jRJCoNiWEC85W5DWrGsojYgWfkJNo2MmJypk2cdAo1RYzuc",
  "key27": "3fftkmeFMsyQy57cA3vLdfeN2GSBFVLLDay2dHtvQ8Cw3FwhiABBUvNoZhYUbM1MDiXN7uVgZ9PbJg5vSErkcUkU",
  "key28": "Bs6YZT84KoVuNDFrK1ZTHEtxBxniYHFEJsvdqAxppTKKp7XMwrByLJXNT6ahcZDzoENG5ZL5P1EgzyfKydUkwew",
  "key29": "iDqc2KrdGvNrLKVJUoqNFhZcyQwWUA3nJXrAydo5GDgY4KJ43LRKBmNs5Pmvg2i5ZrPa3nifGqD3ihZUrJTRvZ7",
  "key30": "5Rt7rRDup4z9LYU1aDFJ7fE32AmeAtsnJp1DGnaeVmzu2eYZhBphY1wszUXyPwZUAkDtzMqpHiAYs3zwbe3bEyJ7",
  "key31": "2rCL88uJ5MTMikmffF6BEpVBo9MdvC4K96EspMS9tczTiWDrCk8ejhbUWeHjEoJB1WX36Wu2MTj7dePej2waFqaK",
  "key32": "4nnMWzEWRwCDPqGUG1QuDik7Wx6LD2xERF6XrQQozfkJqChFTMLHijcf3uLoSdCKLU2BgeMsMwtypGnkBxh3zzVx",
  "key33": "3pAqnKRcVrmNLrnZhaGjHAJqLd7aWqSxSHuB6j3cx6GSpXZ6QVheH22i9RqQ4cwq6rTKDqL286upx2LzNnrVV3AN",
  "key34": "MZUSVQsgQj6QzpKbBFAHJ1okEBz4q9akFPuiwcXwgexzakSVZdE1XUXXz63XdUpmEpWHwtf1uNVwEvRAh9vgKEq",
  "key35": "wPS3Ffob3QnneB8Vow8EPjoXig6HpKaDnNcV4gtQPSeq16Sm6ooMotdHkLjsPGaRey9JwvKdcBCEb5qijUPSBaF",
  "key36": "3aPGwYzYYLtcS2MgQnyCtFsHaNaTeGg6dTSdJpa8RiGfH6pba81rxiYTnGXSeEg8pg5Ae7kYGxgwHq3ZuAGD1aEm",
  "key37": "qqxXhBtquTVxmv5ac2HttDr4HqStssFBMakLHFFn1Xkaxz7SGQBiTRVE52yc6QgqphrRZG5n1jPCAidm7iUQBe2",
  "key38": "nwtwaheqJyT3T5X396Aq2TR5HPfQDnyPumW6AhR3jqHCh1RqckNAV8jXD9i9KTErfLhTngLXDpVuR7v1n1raHKf",
  "key39": "57rQNkTzL2YngMKxKEa4SDXY9AHqLPtQZKdVJBdmy5x3TFriqgxZC7YDrr9S547STKeP8oug6KugvX8MrpgEviKF",
  "key40": "4Dmp2fLxiCMbNDWP3aEfrVgKK5Q5Z5x4dykih71FKqZrvRMFpJXXoHkzqdutdhPppbDiRTXFfR9u3y8nvGuyAdZ6",
  "key41": "3br1RMuQJ3RitDDe25mrMfBmXqJmNmUnvZUt9xuJsEkqCJQCNkNbLQkypxRFdUTm88eTRqeTZh6i3jojBsGefXBL",
  "key42": "2w89dAJtfYnuMVZDQKvgXfGUv5Yr6Tvu1aamTft1eg2yfW8xBBEMd2Vr5ELd3qDKtXJjtGdcr9Srm8AsD1X6Supe",
  "key43": "2YXGQ4j28d3URhj1L7xtotM9etFUAPY3Zo2382qKqtogtV8TVMJkeZGqrATw2qLtw6dh8dqV88M4j3ABS9gjwUP3",
  "key44": "2dxC4LkxXLHwH746p6Mxwh4nKzcrgp494TV18GGN53SQ5eHEfafYKZSj8JS9fZWynEta4HY1maqRnZL9duhx11yi",
  "key45": "22mPzjk3XngRwa5LZFyphgDHpnCG6eRgBiFq6dTsjL5gb8A2n8s7LQQw6SYKx6hgkvEVCTp7aJoYas3JLjvnjSVH",
  "key46": "5YAmdEzr8WiDZW6FrbFsPGSAGxxYLSczmxojMcTtgrf7LEwD7u4Q6wGfjvmLhdBdBPzowW4bbA3Pzd8Ypq3Sizmc",
  "key47": "4ZbdvbrUfx8Nh8B2B43BbY6cnPUX5NzvwtdaWVADq2sv6UVv94jtj44ii2USa28gHMBzb9dX6WYnVD6qkLZwL2fH",
  "key48": "UyLC9uTPhGf1vmT2PUByARbxYY7kYxbnvScGv5uFrQySYuQsTCZ692ozB1QGUYp1etZtHHx88tLL4N1UQ8RRagq"
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
