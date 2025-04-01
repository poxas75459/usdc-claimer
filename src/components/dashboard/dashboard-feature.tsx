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
    "3kkQbcSrKfusnFFGJCbwDLVFSfJvzPY7uHYZjietY5rBpGi4LCPBXE4aosE4wNj5gyQ3KWA8Xn3AgCpUQswVKku2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GUJpLtuHACrC8AC2HT2J82BQDRWE262WZACgigpGhSMGWxnJT9ie8oKjpno45YBaS44hP73aWHKF7CnLNDJdQ6R",
  "key1": "4vqMtcqBNngRRNEy4deudTSuU4FL8rZC9ekqsd6V4MWUtdyqy2gacgpZJLYB8zNEsRMHgKKJLv5JyvMjsyDE1A5g",
  "key2": "2rKWFuhszQbWRsBYU4GswcwAe4LgSYhUEhN2yVhcwMtrXhVVQRdLCKqVe7xP7ST1qbGupZHHAYZqNMBvi87imSSA",
  "key3": "4S1zhngW91XjmSb94A2Jf3A5WP8cse18kkjiZvqkGMaYpgPMps33tzdAX29mSWh8k5vEyosh2akiarkH4RJG3axB",
  "key4": "25ST2XSV9ngB6sukCVbLXDBiNjhpepzM9mugaVq7hD958nYzfcPMKpeHeKtBxHfxZ2ZgKZg2FM2T5DoAuQXaA3dD",
  "key5": "3HCdMNREbWefThnagaKS181QFaAc58DF9Bic3LfZ6Wt6yX8x84kLpuGuETakpTqYv4kHnwYuzpEMpzjdK3AAsGu6",
  "key6": "3mxkVSDfVCLFkPZb7U9Tj6enhXzw9KmGXau53UgoCSbL1Y2tXp8zmXf82tWFiwPc8xCBPEkhgFpM8wfwEz9aRFyq",
  "key7": "2qSvkdjScgtcRcJ7nf9R7tPMG6JSiBceFkgyY7wYKXEyj2U6VDXPPvzkGnqGVXPzgvaQ4j6iU2kQ2iEDW86bm8Ez",
  "key8": "5M8pZgSfu9z52c5BjLurtxBh9qiBGy5r15KyhnsUnzHAxbHH5XSFVpU5gjeJxhFeaNyqWq5e11XndxZR4DkW611m",
  "key9": "3J12nDq3ET4zX5igMSJM6uRTKytNLwaJjKrTVk3fcpKRV4QYfBbqmQT8ACowqpSCziCXgb5dPyWFEZjJ9JrBKbEh",
  "key10": "4eFYa8eGFKLxetXbJ853h8iS6iHbFmXcSUX9YJq6wgDPJx23MYMDRLWJ7Y3E8YsEwrdrSdzy1RxcuLrb4EMuNWBb",
  "key11": "4uZVfjLRr7AfatS1LdXUrYdkzEkCg6w3aYj7cqc7Ufn5qHdH8uZfxenkqbnYmhiQr3sJKiSpf969Z7AzLmRqAAUi",
  "key12": "5uK4zRJgGBwKSvZs48frsD6HxtiBmDLBbHnwX9HPDXoYWob2gky3K9q6JMvC5w2nuwMrZA6imyzwi4RBZrN72Hmt",
  "key13": "DQiKsZxW2nTbV8bd7zJPcXdbFPdt5vgqRCuKwmAno9SN5wS6L9TsDtEN5z5hQMLZUrkEPwRVJ3625B7pu5o3ZrM",
  "key14": "4T8u9yv2ksfug5rkqQhiPEnip4cMCCEwrYAxzec5ijHdRECh7c4ZciqDPnQ22ADziUxyDb163yRCQ3ZRipS88P1L",
  "key15": "qUPTz8nMaDGGq9YEYncizypcB2XFgZVftag3sj94GxGyZnKJqTuN76BnQXT4DkzfYFAANBmqsDaLCojhrqH3egs",
  "key16": "3zR7E2YRo99MopMaMQkqyzunF3QMTHPtkGZwBD8h5Eqr7FLbWYR77n8973A4KnQ2HmetqmaMNJBChLYTneGcCJT7",
  "key17": "7JURAuLwTzawS7qojJyxrWsdjnFTJ7ruUxy5DBUFU6pmZL6rBtdUz7dsP7xznNtHMFrwxidrDdvHG2zKvxxEAE9",
  "key18": "hKKemMz4Duu8Td8Xt6dkfhUDxEuDyqcXVtH7SrJ4GdxZSzAg4Rtr3vvQqsWrrGHNq2oWGe5z6xTyWL2w4c9nxJ8",
  "key19": "VDwCuBzQovhXUxN2q3GexuDBUpNzR74mM4i2SwePba7Cu6wiZZr3dKLPoZ5KGkj7YCcxmeTCjoTtmyKL3xiaVp5",
  "key20": "2B4dWZ1sMke4k8CmKUrVjStfRfZCvMzSHPo8zCxttcLjPNeKSyM1vZifDf8DUR5d3921zngiJCgHCNtMJYSMfULp",
  "key21": "4E4Xm7jtRmVXv3EPnqWFYDYcRdTcxfGXP87ReUJ3nhqbWHfLTBrNW1ow4aen6hxuLQf53MVUcvLSALLALkj4jNu3",
  "key22": "23qn32JQyeSspQ78XwmenvdNnn2uPBVboHxhzLoGQCFXbHuXBEphoNxAygrMjPi3SkWRAj6HQWHFbutVszLWbA3G",
  "key23": "4piJG88feRx6EkJpXThU7Z369fjMHqoAokqfF458pqTDm7PihZdPAjVbj4Dq5Kz6yLMEs6BZgvdmiDXrBbeDWw8a",
  "key24": "5CshRUabYxfHyniJE3WU4MHEnUhfKY8GFeTPK6a3BdV7hQat2NKxwrGXteHqSbKsaJg71vPBytThsyMpwGM6wuKm",
  "key25": "3mE7iUjvPYQ1fMLro8127FqzqhwigixRzPUV2YCK5bRpjgHLSTf4u6CuTfRF7VdrXmhWRGRNL5Tew5Qa4PPYoGcJ",
  "key26": "4qjZuMQTmRFcW5GrbfvEfovtWwzR5WxuE5nqJXWu3WzngKWNSRWY43wHV1vtET8gHPvU2EKKW7irfdCkTAgQmo1q",
  "key27": "3CoR6ZXYZoRzQbddS6bevYGKT9k1ryuSfA6xsYVSdm2d8BoJeUBe9MLzNN227kukbRFx2Q6pp5PKxWeQQfyhTnkq",
  "key28": "4ZNgSVE59qaCtzhyy4RU4RwHUj9bxHct7TFd8apcQSFLq63McXy3UFrFZ3mWhYrzHprbHr2F1hQ32KF8juzC8iMP",
  "key29": "4Vsp9B7NFZQPrzHEv2vw2MNfweAEHs7J3SEyxKJRT2TE6ri5wjfKLf5U1ujM4ij8GuwRzVv7uNL84ZcnnEbCofaf",
  "key30": "4omo27ng4FUszqcCV9ZfoJVu7FBuR6ViaVKbE2moy89z8e2ocpnRpS4bZMMRc8RSjEj83RhPY6dhqUtsvhxzm8zz",
  "key31": "2Ruvq5yJAr1Z3ZYpFqkSGWYSurryToZ5dKY8a6RTYQ2TS2NE6ae5gM4oURLkiuUC5Buiu5g219iB3NU38u1YBQw",
  "key32": "4686AhNKg6CjSg1ucFMwyCtatWMhybkjTHDK2Z4T512JVV7qUzTKSR8aeN2Xx6jG5yfPurncvtaPkYyKKgLyEfeo",
  "key33": "5ZXbk6PLLnycRixtZwocZzDVgnrjB6sQRLjegYTc9QHtCX8zPqBN5cVACNG1XAQVM8VcZ7RxAzgYnQtFi9mngLti",
  "key34": "3CNyqX9BHPi5cp2URperkh4cFwUfTFVhCCvpcgyv3NjAB6Wf2WdXAScvzGgjmCKVGApVvrw51gDyZwA63zCsuzBb",
  "key35": "5pCBrYP4Xb6xRiMnoD44rQmLAHgCQ4i8N7HeqBpcPR3ZkFEgHnrhQUwGM5iejgr66DWLgRoVtW1gwEG6zhdPZ3mM",
  "key36": "Y1JezyNU8YpzrB3AAxbDJ7XWpuE1zee8ivCfgGM8yQe1jZCTLWqFSUeJ8U7JVi3b1bN8DSX2knLUDUyVXYZgzJ6",
  "key37": "5Bfb5cvEEZnv9YqcXUKCaDKwGQZXNRihAJo1LQ4AEANZo94RuJqmr9KdmgtwqFAiEqddbrknJKt4rDvKAV35LHD8",
  "key38": "3FXxtd2JWifny6LLAJ4Kjc9ecQPRzNxbiJPU7aeLjiK1CnJjnH4G9YxMHHb49Y3TLPhoKVHWRT1ncoVCjoLx3uFY",
  "key39": "62kmd6HeZ6dfDcEKnTMoEHnPniPm9R6BqKtJpJQ3ZzB51v4uiCx4ZSY4dgmeW1TNFUVLMRNYFEtJqFek76qwtWFE",
  "key40": "5ovBcCpCji7oMX11FfJVqCTvVBYCwtFtBVcD2bhRR4oLFA86MWr5QRLAm4KNkP8vygD6dZGkmRcnuebTuuvWpC53",
  "key41": "2Ew1Pb4tDoTUu9EY1tXCwC6BgmX2ptdVEjcQMAFZFzKCoAbkyUmFX3UDZu18NoZj1yPpArq3eTDAaSBV2YH5BZez",
  "key42": "4U9PhjB2U2qvH2Wbgi9fB6B8sSTa8girFriFha4uX5PLEZoQuTsGaWh9xPDav1jt9zAZBp8VRhr8GVFCQ6F2qpVf",
  "key43": "3uFDYEZq153RcnkhA414M7Mtsi71U1tpzNQo8aC8dq4mWpaakkKZUbqBHQTgq62PQR56uqdmYTYXz1JtJ7PtfhzY",
  "key44": "632bUtoyLADSUPNePkHEm6mmxQFHVarbhcXqrBWKr35g4qzw4m6JF8fgXmdnufyGj5axDqHVf31TXrhLV8cBaCVL",
  "key45": "3MLgdbRo7vry1hTPGAvkqFsmpvVMaGHPhpuZDLrvVZZN561YimAQVZmRaKt7KAiVMgcotzaixrbfbEjt8ZeGxYQ1",
  "key46": "5wDeQV3aigL2VVuLHzw9DD9SqivyqyVwH6p5vzxT91XgcuM6jY8QV48QsYF1pwN6818uTtBQJNWLnojkvnJcbWXR"
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
