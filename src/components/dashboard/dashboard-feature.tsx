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
    "jofuAtsyhf48hne99r848w4GoGySbjGCW4fVBFFWCNXTErhXUK8G6NQaFjcZ8PZLnzR5t8vGMQG28c9oXBoxuT4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JTNcWfvjCxRBcvfsVJSGxb1ARLDQAWavC3GUQkB7nAcfgVe1VKjcxD12DeMhnbh5AfDqFSKVDAhgRggL1cQ3LKC",
  "key1": "4Cmsb5Dzv6U1eGbRYgaRMeuw5XUofTQE2VHwCBBtUpxs5wXrns5FRizp46eJdfQgihZB89Cj2EqjK52VtNazKTJ4",
  "key2": "4A7Z1vSpx8PTpkMyPLLmzWwLhQiTp7gJZsQU8AHL6e9LrcFVSvyBzTVFdAvg94mjp98VAjUo5mmG5vjGS5hPynkB",
  "key3": "Viq5MdRpL8Ek1DpckjGAnD4HyS3eM1h9fNcZAakR9QLUfhFVRN5CyLJPT7X5msPU4H17mGjEZvcpi5L3FZPw5LB",
  "key4": "cSFTFRdHNAK33nP4ByvqKB3J9aJPHpknFrm1GnPuNpa6hAUNb2RbbpwcLYFvRvCnS5qyzyNivWvGu3xzQU6ukcZ",
  "key5": "2a7MCpzfWqqEsVub6iuuDHzDaNxcBLW41oVpDD6Hc1RLzW9RKjTT5bcPiNrq4uSwRwkNLza4meR3ixw63Qj7Rtbd",
  "key6": "63hTmFnseQEbT9yBBGTk5KTiwm2Sbj2KKMqMmkHRPiJCasktYzCRaLbVSNMtM17Taa1NXbEsYQwK75Xz8ST4iD8R",
  "key7": "327Nb1YiNZnSXvJ8hyQws4FP1ZtHXY2nXDafwDGNgRd3tnNkMK3or79n9wHyANp8Dk8oMRxPo4sYAA1nf8aVzb4C",
  "key8": "5JWJuzz6ZYA4TA25mVc6aGNopYGzkCmzfFeEHUQXLbFgYDZRsgStMb93VYJFiekKPhs5ScsmHBCFHsUnUxE42G2q",
  "key9": "5NnKQseS9AHG46iDwDCXMEDrXgTMfPfPx2qqdTo32j18srawubgMCGSHCkqvuPHwUyu9zkpBBXpHMbHRkwPwzyAv",
  "key10": "WsCtRweRGWR1DZ55qHddmyz4upN3F9bYGHzJjdndkSK9QdbYhkt3AgVRrAoWXdAD6eyzdEZ2tZ8DB1CBcdBYhkR",
  "key11": "VoWwKVwcQ4Zq5r7gUQQvUseacr3ktYPowQWCiTngzR54Sng5vnGq5wD6GBsTe9x1tecktCn8cj9KjAhRS2AM9hT",
  "key12": "3rfXSCWUdxWpp8fsB6KQuGvUX9yMzwQKoTydZ8KcjnBwW2P7tJxMN1p9NyXU9yYHphP1mQNKM6k2hqcceUbGZR1i",
  "key13": "22KecmjePSccu7KyAu576d6FkGotUXxMfaWkfKHQiin9UHL4d7Uy8rRRtpYxh37tazvHqHADioz8yQb5jTPrHg8W",
  "key14": "2FMPAVqksyBvZUBRxvdacqTQXutSvWMhf6Q6nvjyB4T8NyRwABSmCfHXVt7s2P6pxyXFTJRNtpgh412TMPXuWDxQ",
  "key15": "roZntMc6x3eTJPgPDTyqnQ2Qoq9biTEy7ArvV1npN9F5eFhuYgSsTEWSVBUeCwijmNRUmg6D1T95wEC7oWvqK2m",
  "key16": "2QUaJHWFcE5kjTuicqvCEFSvLNbaQqeAguN36SB5jefZ5uSaPQDSwpFVrFjijRyffW6jEiXd3UQBsGV5C9LoaxR5",
  "key17": "5dZehYhq3iSBpZusg2jFJrLVXkE732KAcKBGuWBJ6QdNeaqtSRw15khU8en5nZuM4o5xbQ2mhLDarN6wD1Xk7UXW",
  "key18": "qAyKGoWvo1b6spMNTZ2DtorHhEcnrDsh5vTGxg3QZUKg7RmwuG9YhCpEm9u3hi8GspWs2ZasoW6bvHej5CmbMZH",
  "key19": "5Ca9DxStk3LE88siASRSete36mQmRMyPBTNbp36aQ5eQfwGU7mi2b9BahpjNCh4VhwNwXcurLe8SVqUkwKyhfdvw",
  "key20": "2YTVJaa8X3ufi5RubTJpvDQexwEkwsM5CdYa1DCWFyB5545p8yDUNJnwuSkLxXksVaUCqaitjX57U2NGZABXmJ2U",
  "key21": "5cfPYYmTwDwQBupceKsYpfU6VbiT2RZTdPvvcWbND8H5p9tWpUKV6dUZhigyNr7zUo2kZ82hPZ9y7Yozn6cQ8F69",
  "key22": "2KEGgeh8bpG8HMAZK3i3R2Bx23ECBMP3n8XDjnxtWB9NgJVr3RMs8gbiitrcwiggxq4KFTmMQRruqirWBZbMjysS",
  "key23": "5xExAGuhpsfuuVuNmbafimwdCYfuJt693FSp3wgSuQPCo97yZgzBKYjGS4UYmDpy1Jnjj3452Ae5eH8T71jwgKJi",
  "key24": "2wG56EPPSzU5Tay2z2zu3ixexPZ5mXZHDrsGKiqZVKXHCH8UBwuYutyxT5a9RMRGtZiTZC7ZNMcE7sTbBHRhRHQH",
  "key25": "uj9JrrThpgUgT9vyZvt3YfvoHQLffVne2ZwHT9Y3ScNeKuBwgV9rxx8jjiriPBphVuSHt5VVKbiFXdUHS9zm5Wg",
  "key26": "4iWdtfWNTmfmMwsXfLBTvogEmmyVDywWGUU6uwAy2YqGSkU7xcSa3CZuNXZmHW8qpGV8TGo8nQDSYiCKS72RiBUL",
  "key27": "5UtjDoUpozvAKFaBiJTD4mp4RjRobscF9a4nVBqjqC2tU3S4LgGeaLn6pip2LpKQFN4jdWwy3MmkMgQsREDJECKY",
  "key28": "61GHn2CmbCzrQS5jkqD8RdZE79pwUU9g276AswKsVT7x7Vsy3T4QPp3eGQwNMaVn1hwbc2Z9ydNP3QnEKjnBNX5H",
  "key29": "2DtLqYrbb5q9386DScARM45zeyUeaTMFerVBwb5PokoUcVkwLMkpxuLv8xVMf9oXtWPhPeegkUSebuD9kLSsqN8s",
  "key30": "4zfx5Bx4wX1ENa4JyCBEUqCe5LUspCiiYGtXZiHpH7NBPeMkeQmPHtZvVjdb4Nur4yA228N8bzArmEzezP3boPEV",
  "key31": "3LRJptYnqWrsho6a1zSYF8fKmb4PEATuAfvkFr3D8NFUWu1fqzVXrEbvqT9cYj3CA7EFsspkCBpSG6nqTyicSboB",
  "key32": "4vaEDTbXabp4MoC3WCoSTrUeKr8mH4zoPkdDSzHYa8TC8KRW7mcHrnxarxtaymDjs1ketfWkZw6BAdWBDRm6XQ4x",
  "key33": "FoH6ZYbxDUC6bjoYLzH9uGkJAFFXyenLQUftGhZpn2qsRRDxFvYFbs41U2yC1kLK48QBkHj9chFLGp9c2jivf1C",
  "key34": "2QnVq7XFEi8vztdBQMynu9Z8ScnbR8qF6fn3j1WsKkzuuRDAvpAC9ke3cMuLCnSi4YsQgahP97j7VcSWatcP656P",
  "key35": "3po6DPYWssJ2Wj1ywmvEWU15LvCY3yoUvgi9kJ1Gx7jsyG7obU5VX8EUCL53zZ48H8jHEXqKEcSWsJNfcFT783Ap",
  "key36": "Y9wRpKYfcZhMjCYwsZZQmNrUXi4sQsXafpGcRk8YaWNgvMsHWJoLcsLcJqbAeT3UaFwxkxZ5nARxxRguaTVe8pC"
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
