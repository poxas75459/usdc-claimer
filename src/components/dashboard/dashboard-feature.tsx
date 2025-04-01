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
    "2NryLcaCdc78a6mY5thKrwMizMuJpFHpbg1xhFfYC7QtsGQwq55meeVUDS7i6tYkZ6Y83qSzmzvmQWFRuUFBgSq8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51yMC5jzVxgqgjc1XAAQJ9tLnqVgHZX93fscrKoGt61gDzy5cB6Tv5Bg3M3u5qWhf9TrdHkNW9RdmmYPBBXyJxHd",
  "key1": "5D4Ldsi4x1PBL6YspNwxWNdGReus6FrYtuayj9Bx3SpBydvvA9RicizmXpDwDzEW15DymDJ7mrajEp7JpCtEZRh6",
  "key2": "21zBig5RGEuEaA5GDiLLABbxWombCKbmprfVDJtf9vg6E6oMXAP8q4HjTJ4VMbanc9euzCu46nYPaKx1Uop641TT",
  "key3": "2qrK6v2tBVemS7bhkNcZs5TJV1RwiWoSS9YGgwXd4Ub6Sb1L6rw9R9oWeD7uFpdDeQa8jm9KL6tFGj6fJjb5DgXF",
  "key4": "3VEaZM1tH5hFjt4nHf9MBqjgnf4RXH26Dq6TXKoFkrwXDerEgMfnB6N5bYRSiBRvyjztJvhb1d5YsUQdXcAzNvot",
  "key5": "UAvxAybCDSZUfQqnfMpiPYQhBFS4CwSvZZr1mBEA1WpzhicMuM5YznyTcF5qewmEbH4kreoEq18aEMTK6gyMkEg",
  "key6": "2BYA2RvGurkMfEAx8oAePczE6QmqYYNKnDuhTnaJDKC5vMjw3DehuL7B36yhsqbtEDTciERWNB7wB2jXfxkdnWFf",
  "key7": "56y4g5Xe4zbYMQ4HogXzhjrMFEjhzbAq2j1zVgbtRxJf3MxNcUkwDC35C7WRq87CvUiTkJGqRdRf2jZ2328ivcsk",
  "key8": "4eNxFvtywEEiAwUvnVwXjPMQWMjjDZe3BofyroPNFpB7Zc3EeHn1oZmJWpwNB7JZMLCAEaNswDdLsc1AvhBYGxPF",
  "key9": "X4NcvZ28hqaAVEUUTTVU4uxY11J6PZgZ2pNgJiyAcebT4wCAe3DsCJS8HksVE5m6D8CY3GDK8XpkCiC62UrrWkn",
  "key10": "iNQWX1t6uGcFSKvt64RPX4Z2ynRzLstvazmBSUBL78e7XozwvZqmNoCNBQtPtJiNRRPnrm6cDCJfRCkfGAfyAJp",
  "key11": "3eKENVEgBDWHQpc9aAHAgxKR5QHpJRgF3TPEYzfUKFJf7xfG2D2ayzjQb9iGUbRsfcgBe1CU1B4J9NkSzvrUnBnV",
  "key12": "5sd9SADZGHP26mQ7Uss1qcrzSqbUid9jw458i2xRwQSAkGHvsNKvysF3BSAHV5aVNPwDHoUZP1eTniASEXYPyPi8",
  "key13": "5ZLvqq4Rigq3epJMmzmWoVN1q2pyKJYEvFX1RL1p8czo4xoHnfMypp4kTjMmHV3D3yGPXQUtJrpc4UQbJ7viZfgi",
  "key14": "RuuncGNDsj73K4tYZBNSErWonaceDk4Cf95BFouD4KdEy8JmmH7dWhZGfwav9QTq2WL4LoRgfCGaoYGBqcz7565",
  "key15": "5syZ9JySSRY2NPthuW6cmczysBAU1KhoJ6PbKm22jsABH6FuiuVS5ZcqhjoHM6w83fzSWyczjAkm4H6LoYgqKBV8",
  "key16": "3Juq7ki1CeRZ7srTF3MEAeFdEQDdRu1CVg8Zyd6SFcVWFZJZ5ZSJJqnag9LVgYFPnS4paNhX1rhuRbHqUv1so38Y",
  "key17": "3vzAiSTXE8dUcDxotPBWSTU7pgFQ649gXwrspKUoe3bb91tsoLrghSjotkmu7NxD6U6yzAXVANjcxrvrduw4vrqi",
  "key18": "5u7qezRySq2QRcCjs17U2fZRLhoAQLaXK5hpWZywzA92CG539gYvQTCmRcD8JnHAq5Go14kwznVXKrP7ABBJQEGa",
  "key19": "2xDH5CLqsKdrqDWnotrtAwL2CVAWmsxSgdcNmRNdrYsKpZAFoNNkrBasw69ecTLa7c9Et8dALwo8ZozCNAdckB3Z",
  "key20": "uMqzpKXvSuYoGsDSoDrkMWaptdJgXhwKP96kyKFSrNDndvzEsmHsNNZPd4ubYycm6kjssktPsWNHCbV8u1Z13AA",
  "key21": "5yuC5Tix564cczNzx3HWCGBkaewge2sQMHpJ3CRuTrf2Rfk6S7BFFX1VNb3U9ZRJUqUQD3SnmxxXEbsK6cXL4pq5",
  "key22": "tAFbCyXfpYpv6vfmV9k7uW3RK5C6uNtzv6Z7oyFKe2jRMqJsisV3HPgaCtbWozsrW2pAfMQisVuRBCmpEox4AXq",
  "key23": "4MXM3YxcJpnH2pkwwUHjdtUzmjXwTXSKpU1viu9Y9p3WREGQJ2Y2JKb4WtxMVL4FG1KfwtXjfd5L4WpGad3T5iQ3",
  "key24": "2ZoJ8KuFfYDWQ377msBzVSr46pDf3sNd51f3z7mjCDJzN5ubsgq5UirsE5nMzea3FjaszQ6YbRFvyiw5VtFqqRDr",
  "key25": "4cKVxxXE8rfkyVAcDCE2ivKPYfduWo7RVtCW1HL6h92xptUGA3w6t4nSMSx1sHbQvJd3AmRmHnSDmCmxx1rDpoox",
  "key26": "1hSGsSuvc8i4tFPVAT4e6sS63aPieicsA4heMQPpMcsrVaKSyZEqY8pPCKQdhuMynUsPmPRMzKAYj6TYwNw17U2",
  "key27": "Ytyu8QseG6J8inRU85xX4SHTx53FPTo7L41nrJqw46KnsEv57u5L23fkTZDyRZo3U6ZyM9vXVR4vHeX9EJspd93",
  "key28": "3mVdSL99FrWxvY5vpFF7Ek1Wu8h2cBG52rXcDYSJWRH7A7SxFgBDJs5fJqczEUj71fJmmzGAk9XAYyeMe5JBy3ib",
  "key29": "2cEHRPZjyiBb7tBgAMtMj7HqfdyZkex3oX6prnybjvXN3nT6Z7EKrykaRunGLk1xEBS62bJDUJmZnqx4zLx3uZ5X",
  "key30": "XeuDtCWGVs3Sg5BhNshJpKeVr68rg7G4sEaEPZ3owCttAHSzZjR7w8n3UkizwxN7QEUdB3QEJtkBo4wSF7DXtsc",
  "key31": "83dejj6Y4PbxmBx1avNQ9nNregVcKwKwAE4SZbt9JuPm5T8JQALzD3eAx28V1wM2iCt56q3369cEhsCZR82DJxn",
  "key32": "ut1Tu1heY8ZYkQ3sgUwKMctcucY71BraZS4osMfyj6XH1GzzDvrF5WFUX6j8Czx8ToNXfhnf55rb4muJe7Gsjgv",
  "key33": "5nttxeVry8nvQvLhcTCemHEWkoiVVWgWZ2Zrve8jigKZwtBFMdtsp7ctwMuNNWZWDi2b83PRZJeaw2njSrEJBWUj",
  "key34": "4RTwYJfBtxE4BkPLbVvKc3JQ6dVzkt71wsc4bAZwQ5ucTdLUdnFRNxwDWCRkMUMARC3FLx32BkCtgGsBsoVXgx7E",
  "key35": "R7J2G8beowB9gpA7ofQwpaEXF4nszzbWejySGVeAqRLxGW16RTPtbRgD5dgvrjo1GARoXerBGwi7yESrHdyN42i",
  "key36": "KWoiwxcAqFCQPTjcYstkJt6K3HBgPaMNsEy8DfMtYvSPecehVDBm5885CE4XtVBjwVQ5yhCMyALDrKzASnwdrjM",
  "key37": "3GRWATfyAnSNE7RxHj5bssf2DGdPKB3fDo8RK7rq6jSztGUyyhg3xrt7sH71vqwaEYwHgaBPDG2HGkProciqhXA9",
  "key38": "4adBe9Vwuim2JfDYsbVDEDMPSueSQdxM6pMnuBGhXYugoGEnzXNfeHLyHPnKYWvt4SZ4vdmcUv9G1Fq6bs55N8yj",
  "key39": "8dTxLMt8bjqDBnVfYsjQC3Ex8iEqqNna6yoC3qDSro9ph3T5XVojvaXmZfhgdJkwBj2jQmGBnvALW5k8cuoTfjx",
  "key40": "3GTDpeD8uC9kopSaAHUj591vYunW2jrG8Swgfh61AvSDez6g1XjgY5e27FbXK9Z3GKw6c5T8azWhLXWXH5suvAnH",
  "key41": "4pXYdZMrXN7eGFREciBuuHbkBzen7bmJdS1YXkGio14ewsovajLLHHQRu8yj1MN8jNPicUmrFRBSaYwo7aaQxM9L",
  "key42": "4WRKAMKbmMVehQwgd3WtKCqPqNFDaXgZ9t7y9NJycfGWxWq2ExrjU1EVCCZA7yDsc9JSV36buopQvxASoSRDmoRS",
  "key43": "4sQzEdMuxTFFVCmRWjxyd5ZnYCvMSCZUHMS9ATJCVMDMc7MWxSJz9FEdogZaziDD3FmQPu11Pij3nX1bKms1uXPs",
  "key44": "41cFP9XrSpfQw2BF1EEyUhhyqPShExRt6vUBvfEpyAxweumjbxdDdYMW82EFqSmqEWmgTQcSNc8wPTpuiLP4Eebt"
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
