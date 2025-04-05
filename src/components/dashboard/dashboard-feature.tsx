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
    "3SWso6jJjJiK1cTubFCvXNPh7GPN3wqVgHqxzrstQ14FRirVg5ovPAZYsgG5fC1JG2h2rDcDWPqaaV9kqHNzCMGH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JcCxTKx1ijNBcK74ymUGHb4HEFMpDqxaQberwYzSCsCAgiCsuNpJizydxisrsEWxoHiW551gVdLK3XBm4mA7i5Z",
  "key1": "2xv1xUqSCMM2ZJE4rGGcTB5W9aFMznZnPi2eDBcLBnUZYEdDN9KcWaa4qz1h97o6eEc3Do8NecwMfPjhozkqHVJR",
  "key2": "2N4LUztKphhXbscAkKZ6BBstbDXKGqMGCGo6nd3Hd9aH5F3nBwj2xrvbth93TQ383fzK6wDaJqnHs5KN3LzK92FN",
  "key3": "5jcZH11nv3eiu8mew7Fcu1ntHSbuPNWiDcdjdpTCL9CXXd7n2zBM35WADECndP7ourxkPY8Mfqhvkjxz8NiNpncG",
  "key4": "JgLPjUWt4bFSeuihDv6b3wffPpYg4pxrTSgyFiakX4XMbzMk6gYbiEjWUvrECatAJkm43KBMisCWSaX6Bid3oeo",
  "key5": "3ZRnCUijZAYRQdfxNwEyQweCKQsEEiRBF6bE3JB9WbPw7LEq8eQwCXAq7ExdqHc76yaX4B2Yc5UbWe8VAkGq1RN1",
  "key6": "2kk2BbEiE82nCxZejue5C85XP5vJ4zoKyXjTaqw96cJBsTHYHtF5xKaDDwrMMN9MGHZp2Q15PPjY3fxnRRAdDP5Z",
  "key7": "4SPPdeiQ7yXMDieQsRJHpC8yFrLM936Yf5F5zgjf8RaAWMHVEEVxNQwYEBCGLfvXkARAsgd5VWiMfvVPXYCicRKh",
  "key8": "4YqqgzYzcFN14ex6qX6rr5GcK4myG5dwd7jXt437jf9nWbhThV1Dt9LuoRXWxEcNF9jSVSdPVUY54eM95PLwMQAC",
  "key9": "2nqmrpVU1TfACa8xYL3LZwtwunpfa8uC1Kq3dQw2WL82s3Bb5XLFJt2cFMN71FqAyX6tyrrC7fDk5PjtRetADUKM",
  "key10": "4PWNsegsqkLinRK7b8SLPgxkuwnJYFcuq3V88ESJpV7N4jgpzBXM6Sj5vM85fTzKt13wcv2ieZnz9wrWYte9oj4q",
  "key11": "3rV6Ke8urcToFfhBkhHGQYKDrkDejkBpyCi3cHfn4mKmkdq6WhzdRyQpYMbW2sDtUmKpLigcgKFTojcLG8wgwwvs",
  "key12": "2DiKMRZ4jvuYHikNGg4unpgdhtRQ87sZSG2bSRukbDzes3S9EQH8jrCMg5GCajsz5gC6PMkQYRjaHzaYyoUcpxvK",
  "key13": "3JrZ7EqLs5PeEa5j1H7ZwxsLJAEU2ja3ZcPWqJwkoX6oGkWmMUWnkZ7f47WfRTj9h9MnVNzuKrZkxptA9kemMBZT",
  "key14": "3nCwXvDwmcxSBiSGbtCdyhM9zPE6yGRs4CD18LNX6PMG2sPXiq8LkK9rXBU29Wet4Dw6udWGRnQYJiYEVWUuFjsj",
  "key15": "34g11qXtN6sLYSMPqQh7EBNWyYKqBM9jyPRwRkMN6XHX7z1XuXThGUYsSmgypkoSNH3ojATCYDQn4vxDh5oDEyfG",
  "key16": "5jyoduQB1SZJTtdJezRP5cg5BEWo1x7TZGQ4fvg5utmCNN31P9ZNcZB6esi163a1RpHJepR2RvWbRjh1Uqe3J9oD",
  "key17": "1nGpttZTbk7CU7QZau1oxEWbBgYhV4ieirCxqjm54azNi9EcP67HsbBMUpL3RA1aTepMZEHDEgtPQE6mfnpcaiA",
  "key18": "2VFYLsRoG8vFjKefD9m7Fq8NyjR75jQf77CBmNNf8xDbiPLq5sKJTCovzazgQ25xmAuy2i5kL1gEm78jPt86fTmn",
  "key19": "29vMbrCa1DgEgabyYvNGswt5b2HrsgVxcw7vsXQBihEFhio9v495UrjyLEheebizsjRF1A8JDhQGYFHF9xVALmkX",
  "key20": "4zHwVYCuVpbr6wV6ASeYQmZ8CTL3YEy6jTkdPQ2Y1M7NQMnyLARGs8neHAAqMPfkTNAVvBXZ123EALjbMNe77ewC",
  "key21": "5uoi1FUAFBaATscuSExFGTngJMWN22VY44pgzMRHFBXL1NbXATWJMbczeCWxKrmhmrZ3k9hA95u75x1GUtuGxNpU",
  "key22": "3g1YBxSovYthEQrF1ZAjWsbTVozXY2at9fSfnuvasH9CaQZTbK12pj6KX5xSTeuZCFuzUfCoEHEXoApcfnpHPcG3",
  "key23": "4brz2ZRbHKJXc9Sa4euQn9DDZrmMYLgMs8S6oK58N4HYtjgek1A4r2AaifezW4f1oYFRsdziNrr99LnTNLmwHrTu",
  "key24": "1CsHZLfKm5wpKzofK4nPapX636tmssTtpZ9843HkB3xE2HrVcw9LrFHd83UTsHis7818YNM9aoayutzsqWnZQsn",
  "key25": "64w773NmVsE99cwjTYeBBMZTqcpyQN3Cb4gmK5fHvEwUb5RKqCfKciK2L3WmtvsgnQg4ZnorsE1zgedj2KciHZqj",
  "key26": "4mBkW18yK3pTs6Ga9mMQJeLUFcTHgSkAtmRMgRhwZESiXhNrKRC7mCByUrzbeBsqEZK5onbwwAiYGQ9ahvd8Ci7F",
  "key27": "55w6VcHv1wC37wbuFcDsvXytDCrghaXRtUPnJBJTK6XTf36v7SKtfE6TgRRTeMZgLSeWv79PZaZakWthkWLqWtnd",
  "key28": "fCyMqV2bQoa7so4hi6GrHqQuYFpX96mpwrEExhR2X7RYXp72L5GyjdeADwsa3LHbFg2UPmVeSCAY7Cz4sT9x9W8",
  "key29": "4Md3A7DoytmtFDyD5JmCgVC5k7bdqLV1zXczByntjzZFv8Nc9j58f7EqGV1scYc6MhAQAsAd7iAnDjQRQcWrqn4J",
  "key30": "2Qmdto3PUJksYKZckJnxH6D9zQwLNKvwyXSk6EGg2Kw6ck42mfu5DuQDMrpmjVYUj9daSyxC5492Gtu9qKk8KuVJ",
  "key31": "5JcKuW7JzH6dzLuLTdgnwcPr2X2nJAEPazeAABWB5wMm4u5mt3vqkc7rWVXbp3NtrkN7JxChqZm9qGHsPd6CC5Cg",
  "key32": "4NnfhhzZHNujB7NHuBUfP5ZD7RQnevmo3XgjWKCLoVxX1MK9xJNqwdu38ncph24R7DANNn1LgTzh8QZZsibLeTHy",
  "key33": "48yW2rtf2RkQYUDmrwiHathyiScVmop9Wvfeh3rhYeoKBaGvukgdFEQTjcz7y5v5SfXp1y4e92bSW3VN9tK29vAs",
  "key34": "54FQUMmSXy4gncChcyPqFtWhkedtSUiD65TfJAUuzJHA382oGH51CjgQoVXVuqBDgqAGz5xyPAoQdVAz3S9MHL1",
  "key35": "5EAMgNFVtbi8Lpp2Wp5yV8PDdDysvtqSMKcbHoGeLKv35UhwCZnHCW6RJYk28J47JQiScV4BVKFfgHzqa8j1uqPH",
  "key36": "P1YSzJKZLusZ6SUbtjfZrftmRmPhUiMmDwkGnLzSerqFffG5n69fiLKFa7a4ykJDuH5gYMCBnaTSfzEaf1BHApp",
  "key37": "3prGRzJ9EBosjML8fobyPRpj8smHYGX4rYqmdgvBdRmbTvW8b6m7ZziZRFmbHcLCKRAyWPYnz7tdbrgBp4UieHK6",
  "key38": "5UGRscZM8tMyRRRvYeuZiq6c99mS57CNqXDBzrY3bwRBX7CFrKRWMifmScDos6sDQXegaZHRwwCv74E9tRbegUAp",
  "key39": "4LbRjqZJ22GoiCu6q5WknWoqE6nN7Uc4us1TWqNAjYYGDUvVPQvstq2oRkzkbGc9U9L8rA58kfPx1a6cm5Wnvzrm"
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
