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
    "3eHHvDxqrfZePJNFJD8F9FTqkxHsgW4Ascj42mphZyWyvLJGwkezFV2kfxMgfBgVAoaGX4LfeVJMTx2x7vrFNAH5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TbWSQqzj3hBZ2MpeFfzvxhXbFPnZ5jQZhcoxRcVyWc2Vh9ctRYbWo2xBqxkxLmzbrgZdTYz2xr6SxiwVBR4AHBz",
  "key1": "jBTPdKqDmsBu59YzaxfLbDK3Vy9owgCVkhnxYXPWhTZxKL25YCRMY2HeJrJyGdzpy4QykWwJ2XexsNKWHSDPyPH",
  "key2": "3y6nbMmhKMXUMHFJbk9A1eLQoiu5VpPxRqD7v9t4yqiuAggLKWja9JnELFrHzYybh6TdwLLcLaGQvnycdWGJZe5P",
  "key3": "3sq3iLbsDo8ieBCNGdX9KGkFYhyodgQzYT35YdUptGWyj81weBXemkxzr2cuTAnEpkKnbmt1EDEzw2b4B3Ea7yff",
  "key4": "7TegWRLcGTv6VAy9qQnZPTNG1xQA75t6emk6Ki68Pj3i6J3ksiF2etyu5RQob2HWULh9gu9ycmfkQVtEpEnBTLr",
  "key5": "ytqRNmoEYpJa59UE1NDdpz9WmhPkXNwPvFtfmvzEoZekbVEWf7B32ruLaLydhkCyyXPKZQuJcF1GXnRsqp3bqWR",
  "key6": "3xu7pBPpy8mw9YXPWrSGJiGrzMDbvDFku39x3SyEin9Zd6xfGbbdft4YJHE31YqE298fgc4fRuuoBerQcgmNHuXf",
  "key7": "3pAn7fUVkQZ5UsUL6q3JuWop3R9oSJgDMh5fys5U24WuajkHNM8HREMHFsCoLQpf8VjFfTeCheUvXS1PbsRYgZYP",
  "key8": "5kg5hyXyMDPL3G3zBdhLbs5Yy3dxQiefahAWVzwPjzvVihZiWo6DYYNtqj25QpeSUem56FCWsUoHKEHCgZPEp6bn",
  "key9": "JeMVqZf2bCp8Xe2nTFz2J3BQgHRT13tzTSVDb2sHvbrAJwvzHY5eva9UCyjmF6tAbEyBdKNkNdQRvDSiSCQNdVw",
  "key10": "66qwbG1vYs7AgW2chXW4H3kVbCRQaGmJSE1E6NnRRoJbrPa485VR5ZNpopBZKYD6FWu4K2W9Wf7kSggmNHyLLYaD",
  "key11": "gqFCa2F6VkiK7F6k3n5aGQP8HzLYCQewLAcy6jpEDbELETu4ke9TMKodrAiMKy7vs4F2s6pbZkgAEUekKpaAEN7",
  "key12": "5z1maU6TK8QuKVYEjTsnHR4kJD3HuUDEA7oaEGr2sbsF5trHZUkXegrDGb2ejyyj1LVH3FP2t74aUh8paM5szJSt",
  "key13": "3M4DKkmbcuC48a4pFaDe2JAYzCHkuE2NEvXB16CSW2Jf9PPb699RsbWn6Kyky5KiJDEBceFDMqnojKJ6uaX5mY1o",
  "key14": "S7fqK5793o2MUF5M43UTu7pk5aP6VzjWsjH1YZcem3TTaNYkHqS7onHXk88hdhbHyYjdjJ1ysa5EYE5N1uNuKPq",
  "key15": "3Co7Y6REq5DhL1966A9W6Cor8LdW2MozY9m8nEW9EP5pLUjMybVm6xrgxPWew3cDtRnNeZWKvMcsu5vqZ11rKLYL",
  "key16": "4BinBwQvjCziLNgrKdhbHViFbNfF21AhvGLxL5i8eNiBd6CWMdcraNu47fFbjFhf855WDDz1fr1XwQnAnur5yCcv",
  "key17": "4jguXz1eiM5TVDQ9WYYJt81s9MDP5bGELvrNTLPY7kF6GYkeggV19QzbMhijcQWyMYfzpsqtWYpBvh47FsLXRwxS",
  "key18": "47UhoWDrcSgiNFBBRo4cZPDzAnJYzdcGqHU8WsZrrYB9nvDHYkj5ioSZJCRbASsdAzafyo8aSCwbzSJmb2FJ9hi7",
  "key19": "2j7myjK6wf1GruY1mv6n48dfv7iL4L93ADcJ5veg3VfLGfuKZaYz5gNq4Uw5tcX4keU7XDn1aVBAuFCKmdTVwHES",
  "key20": "46W8zGhQSY2k8h34BG6s9oNoddMDBSd17gxkm3rFbjTWjWPYxKBi6Z6oHRxVXkAQDZVnYwnRBh6RiJ6nNWais8zD",
  "key21": "327CMtViqE1B7Tbt9S3twb1bCb1Dd5oSBPT9y7sAPzqMHXHtHwHzDYdHg4ZGCuJT2bndXLyc9JgN417tN5KWfjBs",
  "key22": "vhg6V7euKSnst6iooR3iu4rVYMU92bJoToNMMR3hodVpvcBbwYucb74jNonftzCrUNHKbjuhbUZ5JyafmGKjZLx",
  "key23": "bAb7F9BCCV2JNqnL1AgmaruThMEFsSKvC8Kew9YuNtQu7JsP4n8aZzajmbMNSvzU82gBcENZCNT2mitYdtbrVGs",
  "key24": "3yF3U3MbE73fhYBwfbJsHdhJW1pCU1gTKYNJLWwebJ8aVRcK1o9Tf385QXoGN7LmWqKquWHXcgWNqMNKzimeXDqQ",
  "key25": "368yPJ3BjYdVpSCZAgmpGPFGMLa71xag1adAZ881cLh3smXBM4433x9heG3BMWnrN6m5oPKxaTNSjbjH9JEqjHbf",
  "key26": "66zDK2VNMTB2cngvKwfrTnSXdz6bFHpSUpPW5vr1Bve9SxuSwUjoTa9TdQBrdiSvPxQMCCripbvhhAPD39a4WmKk",
  "key27": "6NULShuXvKqAiPK1pMwo7zpUTiyks61kjz6M9nNF68zGqAauTkc3ccxTFPKSmwJMVRbpEDxN5oXiTKjDvGJmbGx",
  "key28": "4JJkDAZSE9h4m1beV5U67fsdcnJqpQ4E4mKS1fEyWu5A1NBYeHgiwQDarN1VFtZx7NCCfnvzZa8ACq5EuacNwCAD",
  "key29": "2rhziJA4iPt7A4QVd3RMRCP3LYX2BxPKnzNxwsWEDACQmyxi2p16KBTuyRjMyyF3dfG9NdddPTVCzePKEHGucZuA",
  "key30": "3BEYHgzKt9z7HGbnnHuX252tEmS2v1Sc68Vns5gx36SQbE17CG3z9GPnQki68NnS4opaxDvgaEY4R522waQfX2iw",
  "key31": "5aBTZsRovQJ1jGHyTcqzkeF4CDDn4w9dQwdvi6YwFFVezXrhSv6HYGSbNym8q5TwBJbrpW4rkzL5sv5QVGbkNheo",
  "key32": "4fsNCK3uEEb8uFH67nB5gHJ3NxSenDunSTCQ9YooKjko5WwxdrNjL3eKVNq7sn8cTWUGvTP3P76qJfPfYSKAozeH",
  "key33": "2sM2Qnn27ueRiDV7TUUePH3vSt1wRJvd4xGmCEXS7C9ZdVcQmQUvemULYh3m9occooVB85oqqj1pDkjy8hYN4eXC",
  "key34": "4DwJFsZ4Htf9TanGtx4uw758hkBXtR81GagVXn39xb6ythpUgspNEtvWsYE7oPtWkgM56VVh7aAYjr5GaMADdnxc",
  "key35": "4XyFcb22xEVe7pGif3VxNFgzUm4Kph8Zw4HKMUoaPJWj3JFDvxPuq1niRMBa5KJPWX9bjATvHv6DG98qkEtZ9p5X",
  "key36": "4FjJdS5WcLYbyZwVyxW9xLvMKxq7UcK5xyroHMt2NmepagWEoeLkWtoyW2Cfd7tKgVRqpRQrYWuU7pkQmrx4txrg",
  "key37": "49YPudfasJUe8xwEfjSwmjct7hszDp8AGoF9nU68LxtZ4AvSF5SRE38EvHj4N3AwyyebSvBRmuSpYpZZfTSkAGDt",
  "key38": "4fy99ecg1nsHWdDXSQMqGaFm7wDbdaWBu233a49nwjknmC1euWuBjNt9iWjjLbxQbRKjuUjJgd5f1Jrzr4uVaFX",
  "key39": "4KgeA2jJg8DcWFcetE9frroigLCefzZszShHHZGPSxpFF6guSV3rQRxTPSgA6qy7vjw9Ykjx7JywmYeqyU7sT2Lw",
  "key40": "52Ks3dmLhR9yCxhoSDKWYnksrEPjYgsEdDSzyLqGrhj9rTKBq8tACpoTWKWXugCJm7xHGKLQ7d5nWavDKPUm3usc",
  "key41": "5QLZP23uydC14zrqNwwJoCFhCapxDL84kJ751soJjUSbbFvoftXYkHx6koc5RH3AmQP7WwtG7AC2DvxpahX23roE",
  "key42": "67eUxHvp2N9iQSuLo8QsSRumijgLkf1oBmrK7urr6NrGmWqWivLvC4k9esdontHzvETSJrwt6aAdvMYUDACV3Qma",
  "key43": "46xWdSysBGCJopG2p5pPimXiCQDpcH9BLwHpMVaDFdCeN43P1K5P3hfC7oy3GbLDDqnh7rQcCjAXAnmDvDoGxqx2",
  "key44": "57ktwPNncpDnuftbWegTMeEHsDHSrJiojoXh4NJtn27N8n1EYURV5oGc9hS3cbeKRicifDhtuZvev6vb66TcEjwv",
  "key45": "VFfATPk7AaKNveMiQXRnih41vMdteTRhYJcgfofZFqyrErLCTkBAiytSrMDfduGp3yYF2YuT812uUVBBjGvDahg",
  "key46": "47WDgdoYHyvVZfgsc8EWTaF93Dm1CQATRj1zBKP1k9kFd9QXjAGhR7DvEJcLgzQCsgV3pm1tk3oh2bVWhgG7HW4J"
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
