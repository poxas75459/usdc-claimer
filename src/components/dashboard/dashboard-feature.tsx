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
    "5rf94pjLBPY14iM1jFxMyD4i1fkWGzQwq3vffV7FJ3Tn5gUsiYof1zwsA3N8Xm6GGpks2TtP3sXyYCNWE3tVcoEE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wUNxH8kn86VS8NhD5gh2frSSpPGHtJyBsyiyBNXi5KnZXTGiWPKgjyRbnqkhWQ8GgpfYvYk5Emn3U3HWVutmwHG",
  "key1": "5MVE9G5QajCENMgzogDFEyhU8vW3Jsk8Eaw33fsCF68YBDjkiTvdvuzJabJMw4nWRmrXiuCq9rfcjjgPjnj7AfmL",
  "key2": "3GQgYsD5jHorM9jEpsE3gZSinLSe5FfspZbeGnYWkWVK8FNR97DtBwVRaS8FdXBV3tbHTxy6kDpnHCsYuxLsjhmh",
  "key3": "3wZHXoac2u8AVwRKzmNaMVt8QcR5QPGhkd4BSXPZwXtXTxyMXbd6icmSFLmqvA2TSq9v5yFoLkAEebqqsQeB4Npy",
  "key4": "2KcTaBhgdg9DdUK3tBD2cK4Q1PjHQDSxMj5S5JuZSJqctdRCtFL5uT1wxcBScxAFhXUoURBy3eEsPY5RgbWYrBsL",
  "key5": "3Pk3G59tBeMVrfMub6JBcvPLprJg1ucjzKS5QoBREgrqvk17S5gzEoPMfTnoru9UEdNVqK1TEbTX5jL8jK2ADDfZ",
  "key6": "59MCPJ7XFcHA4K1nPMQzPr8zYAoyRS4Apy71BxFefCePCKiqH8MLx4nUuxZkDmrH6dn3NQwJYJQtRxWYfoGy1CmF",
  "key7": "3Gof4cnKyHFYjBKMcuXaN4Dt4jT643mxFFRSKuopAAdJ1oMghKyPeED6P64ViGXoLVPECYeQpRdhSqodhL7FqT6r",
  "key8": "5mXVbGdeEy6v4eicKpmjf5fS8UzdmU5TpbKgWwa9Ei9vDh6vmdk4EWupZiSpe1X1uLdV5S9iQ6kSW6Z3TcrYrw3u",
  "key9": "4frwKSJCSPH5dHgatSgGFHqBy9f3daAev5mznifHa6XPAgNwUd7dnpKh9uYsR4gzbrm3s53LZ23VGsbcHVDEr5Af",
  "key10": "27g7VkWpj1WE4F9yshoWcNDgtRyuLdu1ioub81x8185eQCYftBmrXGR37R4xPQPLDtNi1mBoLtgegFyf8w7N4bKi",
  "key11": "4kystE41wJumeYQ9h1FcMeiEXNZ5VDboNyf6AXHiZs9g9XnR36wwsk2Fu8SnxW2JjAp6RHXdwg3WWoJkiFVpb7Aq",
  "key12": "36w8fBa3EQGYJwmym3pVuSuJRNbm3u6WCXcg6JyLfL31w7gjcFxfC7AmWibh4sG6Rv7g2pDfKK1K6dDTLxi5qyPJ",
  "key13": "2Dvqjqxqxg5DFoYKbpXhAZx35FwYKuZCPvQF1E4LKrCpj8LeqQJDaBtDVQzxmGoNvHqawVSYqx764wYHbNuEg3Ek",
  "key14": "5wwFsVGNhdSNgEfiZs9VjmSic65k4JLXBvB2H3rj2XbSwN1e4xR1ehfMKdHvszcAjWD8moVP62BAM12ogGxjcDVF",
  "key15": "3DaRfAJ2D5V2W3SRtM4QY1gK7J1vDTTUJEPsk4dmazYdsN4umTEDyPsGjsm7d2fw2yDtxuKLLhD3JNPszr3y9TsX",
  "key16": "3aMcd1vpPh7QHiUCBfz2B4ZuSsL7seDMzBekcQH29eE8bUh1YS1skmhYexWCKw53yfuuKYB8usRTm5uvJHPgmApW",
  "key17": "4p3LNyT8riCMXLNGeaaJhHwA1R1UM5tY9ewpViEqgHcmQLD5jug4fdYSqJhwLMheaS7hwhT4B9AwBUMZdcLqt3ik",
  "key18": "4Ggs6UDBFesgwvqbwCPmBM6RqptBEY3ep67djgDQJCb7PQcxya5bSwwZk8GUor4JqWtxCHcqpZewNgdrvbyzp3Z9",
  "key19": "4N9G3G5eH49VF684qQP998XGSoHLoCxzwYwcASsigEXQXzpkowKaQUCvxs3opz3PDc8Yr9R8vNTsPoiXrS1S83no",
  "key20": "3ENEDUwZddhfpWtSg6HvbcHZKQ66xZe1TXVjQ8A6kuSoqRyZiEg4NuhZ6irK9AEwb6fLmQoPiEpV4SZyMkEkoEHK",
  "key21": "cc6fQ5gqKr8xHLpPHtZddL4LxAT5dSX2v7RDjcc1MHeEHsF8dtUwJ3u1irqJg4vr4GLMUHRKWmiii2bWTcgtuRw",
  "key22": "4MKeRzYFcbNA95spfweWgStCgrs9zRoKZXi6wajmD5yUBtuKWZaBEWisxtassC4KnKfHreFF4KDePXTzikBL6R6E",
  "key23": "4o2Kn1hovUkCZsgJf3Naof3ufAXMQS5yKGNt1NK7a6z7AQhDT9A3K2Ux8NymVgxU1Tk1xCLpHBDpx2F7ZkC2jDv9",
  "key24": "3RB2jL8kBqgoqD7KEDbBzDvUwxRmhpJA1Wk9YPFS4tesPKYReaGSsXVzv3G4wo6viqco9FqKxNP2za3rTKp4YgiG",
  "key25": "296JfYiJ96ZxTXAe6oi839VRuugHCvzRchiMpu7onYUQtQqqs6fd9QoUP2V71DdQCw4iHzVku6HsKEEZkgcvmB4d",
  "key26": "65tCqmqD9aMnrdsva759NJ94bUuonQvDgkMeamJfC9WGinHQg4dMUW1v6foKLZX679AZV98zbjhFZgvW2jGnfa4h",
  "key27": "5fk4UQpf3oKaXYJGFTEv5nsgTXua4o4tbkYXcRdPbsHgs9f4c5kcBeAiisJQ3hNqTDfBD3dywsCWUn6UMq1nUy5g",
  "key28": "5p2AHtejPzHUnBRuWxe4F7PMHySVtjSjvGubGoFBVZGB6XwkVGusEV6pYT8jaYi2BDGBhZz8Gz2o3QJoxVNeyCKy",
  "key29": "LxoELnVJxrb1SpVSfpvdJzbH4qMK6YAFN1SuAEmwbjtrdt2JaAQjdgSsxPBzjHmrqqFggRLuN9iDdUitDiYriE4",
  "key30": "XDoE6He4V2eHSfYdsawHyrn8Pa9kdUZJ5HK19cBCmXJmyckdJNU6TYorhCoz5FBh9kPdJUb8cpu884XJeHTJHqp",
  "key31": "jT4Fza6FxYRHo9JS1yTuHGN6HN51wuBRUw6SWEdiCEFNkjSLKZzYUfzYghEMffRurZmEudfnCZGDCqknhdfZ6Ya",
  "key32": "4KdnnCpDeqaRqFUNPRnswQGYVKxSNyAfye7DyNkGkCqnFrkM8XUDUFiBGQrokRLnkmxPXxKFYVnvZQqCWWfyhVv8",
  "key33": "63NseeGer43NF9AnJ8tjtVP22p7eAHcWXLtjvSyWhAkdSr9AfnWLxo7NFZjbcc6uv6sAU3Gzg7E7AfiPzCkSgZBX",
  "key34": "3Bsa81gQfdJL3jKhrhn3cbg98c5SB9TLUkGhqvKwQfd1sgXg2j29GxZLuo6rFvp2MzLozahX66sVS9hXMqq47tpZ",
  "key35": "4QMazS3kWkcfb26aPXfVAcquhD2fS1YjP1jtLTdCDgybCxJsYzDUuQAp2TCAH21omKrFTBBrAxAyquGn1mspELrv",
  "key36": "3UzYoVcWiU8S7fXJUmkV3cf5oGvMbMorZaXJh7SNLj5r1RZYbzuQhcb1j9GDTuXYQdGxWdZ9ZKSCjDhyDAKsiCqg",
  "key37": "32m9TUC2hP11vmSW69uNh4fX2NP6bDEDpqm93A94PNPYqoshs8t6TyUaGgB4gcgMvEgX8wHdSi33rQVSuSXfCbu4",
  "key38": "3VdqBFSodza1sKWHn6jGZsoeg64oX94deZRFKjGBTNxvi7BXnwsWT9ZedagEdidBKioE5vAgG9Hrnfnc5twMVvfT",
  "key39": "39QWWv2ooYojx7BPADifLvZMCnFQkg53kx6ghU57stwkzWPNBn1UjmnVAwn9rukvKq7zQQpSD7XbYF5vh3UWDfrw",
  "key40": "3xVB8N45PwNtYubEXGjzGcS56fEZuUaYFBJYNBcQ7DeSD5nueC4KgoxcucPWeRcTZakBUd1uxoi7m5j1hD7zbSiA",
  "key41": "5WNWEwz8Ubq3e4T3vA5oCWy22p5SXVaXHgYAuSe9ced5CUWExXFyzdvqcTJbSqvFQsXyNpEe6NdzSR4eEkR3pF3q",
  "key42": "CPJcEmL8EVuVsms9rM2uFfooJtAcTy7EoVivnuWxH4pVefb8gMhHvbjj3hMaX2jXQ8PjLr3Uwujbt3SqqniXTqT",
  "key43": "41BFbVYmjtKJT1rpDd72sQa74SH47sE4Yxvi3bpDSQmyKC8WLEjjp4X5Cp1Fshk3F7NTQeCr5iPgo2ucybC6Mz2w",
  "key44": "4i4dnkxhLhkNMs7iouzyzfke65DiYi72xovF9DM1roVyQyxcEHNTwWsYrSS1ay1xbrZGTuMuBc4N94PRCbw3xUE3",
  "key45": "4vNoD2VrDAfGcgX4aozHxXnZ8SPUezZFxmVoTaeNq4uR1kPUcwpZZ3PcDYPA8wfV5zG95MHHasd58r18cQQZNUKH"
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
