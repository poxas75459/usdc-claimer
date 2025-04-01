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
    "4PuP75y81E5FUKUtHQ1hywwG4BNycnA2477urkJJ77n5MeReFNanHq9UyiXgVT6pkUcaihmQb4ywFyhYf9MyXCU1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xYkgTyd5Ldty2jRLKvYVRMuyyCNhrnSzLUJgUuUtUf3veWPhRzZ175yzxhhVgffNaQ4K4zuzEzMMFUarroL42G5",
  "key1": "5We8FBh9Bk6hNiTaqyrhxUJwiR4bWT2CmbH4kxZoPTaRNonJXUwCaKW9RY66es7SYUCYNJXeXp2a1cDbVk7kN7wc",
  "key2": "4DncbNEZLQD2hmiGxPHhWkJYQcD4heza9NMa4JQgLZGCCLesBC6oNJWvgMxP3CdW4wMVze44fnvRULg6URMvEi6j",
  "key3": "5GaJCV2JTii6qw5hU1ziwFhV6v9qYkNqNopHSLShEYSADHnjieJ2cYZHfqvtb8qzpTYMQwi3pEcjoYtY4M1oLMy9",
  "key4": "zqqkLCL9vFrkVyQFxWFbb8rtrYwJF533BQNCVRvnudBMSTKSVcqhMBgrGLMwxun9k9QESmnBmjMEijWkrN19P1a",
  "key5": "2pY7kJsm3DkJAsB1XPmJwquP2xwFaY4GiRvymPGBdy7snA14HsS84G7CakwAMkGX1tPsckN4m98EFw9kG3VRXHwH",
  "key6": "4b8TWnALCd2h1xGqo9kbv5VuD9tUojuGNkNyLRDPFfBdJ63MdUKcqLtK5zfM73DkCJZVmK9CYb1pgzTWfcZj2MLe",
  "key7": "25HdgEUYEhppZYWRz5HQ9F8imhgnNtszJVxoSkCQhEKEMK7oi3Ve8nFFuaETSRLS3sepJMRfJfQVTwAKJodBGRP4",
  "key8": "2KmWAecWLN8o1pWwRictDrUeEc9u8yr4wET26TuBPUNut7AGUd7ouYtTBkL1rQZayDxSAaR7pDZMdEYazv4HmwDK",
  "key9": "4t3mYng77sLJZx3v6gPvmPgWtBzmBEXqLiP6wV9SM3qsToviDiSWUa6Z14si5RFQGxXShdqu7jQRg8f5negqPVkU",
  "key10": "3yoN4xxhwuDfBZSx6wMkhLmPrpS2ADbKsFjdo7Zbv59dgWWKQvk18fDc9hPZQok6nFZAsotwCXwaKub26UL8GThn",
  "key11": "9B4JTyXtsRu1xsKsR3cGuKWQdHWQ3E2J9L5wVUhtXZmkDa68dQgwCxppFbe3G8X8TpwVTHrBvotxdittuoeQn4D",
  "key12": "5PAPobMg63DukNScoswN18Jx3i6BZTFporXSztPvMdZNNu4hyiXNfG4QYi86iyLaEpTSAxfPYhhCXZL8XX1WmW6L",
  "key13": "5KGM3VTyGGPjCfCu43Dmuo1sfX533hUJdyvm52vDZes9BAiFPGcoReMQzp3kSey7XoArq7siMs7kvgiyXA6E7c3U",
  "key14": "25SJEzTJGEeQZtL3Ktc2K9Sg2ZxuXUfDJYt6Sfv4aSTDUrdtk7hbC92zQnuR8jTMVQ2ink5AzEYqUxLaESK6xXYk",
  "key15": "35Uns2XMHpE7QxDk8FkxPJTbrHwCeznCsQWc6EpmfG3HHgDtcFEfrjqjgmGMVpyvnfVbwYukiBgzZ68is3DehZab",
  "key16": "5rvLExW3YrVKSbATJuUFzTyiJG2r9gzMme1SgAvtJ137eet9dqiQzGgGr2E3257qrj6mXa7AnTc88C9Q1N3qBfwf",
  "key17": "5aME6hnCiWsBc6VowBtE5MdSbnNJvPdvUa2yxTDT96sSCb84GwBrSnEt3CGhN4eTUwNRJkwEkwJ1WBb1Wj8ZDftc",
  "key18": "2pF5HfinBQPAeHbArC1KM1M3ThjRCVJtcbndFDdxzsz3hEKh2BGsg3axgcVen5Jhd22Y4StJWHGcaRREbfw7scgi",
  "key19": "3xnsDesGtePbgseatQrNV83TXS2eNnKt5huPZ9EduRS3FdxHY6J9eqh8o8EjRBTAApEX5GaK4ipFDmEmBCWGPtZj",
  "key20": "2ri3nSN9KeqvdSbe3GND5wEXV3XkhZ114yCWDoDrw4fzv8zsY37voKc4jXc2kdWKJaAwodw4yvjfqPRuVZ2JobFs",
  "key21": "3rgnC9fUAUQSkda6WqceqVpvucJVt37Nhj8eXU3MC5uwNfk4RMxY2R6PzdHoGsodaVv1XAxEgvgGZupnn26VSK3r",
  "key22": "4q8mj1VVPV4DQ8VwmGFfcbZ2f3b5P8SxACWJc9HRo4pAzT9ivp3iMyr18cksoCu7W4nXFK2uKunz28XE6YUm3mST",
  "key23": "3FN47vt9JFvNvAnQXh59L6GafD5zEoyvf7kQD5JJwjxbu1d8GaWrqhyHbV9khJK2scRhHoeiUgf9TEKxnm66DDdD",
  "key24": "vVtbZK1EUSJDwcBy93VE239e31atareBd9xo1mJTA2sXRG8eqxjkUzf2NgWS2UfZ4yz2zBREnXkkpD4e7aKwcZD",
  "key25": "3nSkD1ZdGoPykrwV6XEy686R8Cfx1GCbU1SVjz34t6XaK4jDNaaBqpKakxFvWMCwnX2x7ajNBNvdgxECqekzzSh7",
  "key26": "3DXGRMBUpVdF7DEV7XYn8Y7E75oh69ayQpeXojRJmdED5CGpbj3SBooZWLn4ySHQMcirgBTtkLMSmGgjTfQZ38aB",
  "key27": "62SVqHWr1KYLn7noFeTjTvm6AnYykEtHm49G9WA8KkdfAjRMENvJPgHwEPPHgggtXSUG1pRA2XSyonpsWXVo51SC",
  "key28": "86j1ugvygzV5C5ncTkkQjZDM6V4mRoUgwe7gU4Xv7qZ18wfK45eRtmwc86VrBxKm2xgK96SKZPNiMDzYtvdWE3F",
  "key29": "3KxtCqA4HgtUyTw9dmwrg4zRpA5EKL2qGB7Botkkdo8J87tyzrU41okpQGtiZMgMuqmziRze131CCKdJx7hvc1PY",
  "key30": "5Gqn63gfBiiFFCGAiCdGpTqJLppw7RqpsFvepwKTfMBAokDcW4FBwUDrFvDEjfUv4e9SVhMcFKU4MGH7sTgscqLH",
  "key31": "4E54TtQun7t3cFgGvewLEesFb8gxq7G8b6vdPVonbNUrw5fV8S159HyGN9r6wLeegbSupijjF6s1jZ2JP2J3zhwD",
  "key32": "5Pa9kQFNXdmbdocTn5ypudzN6fsv5Rrn4gXLu7cFrUD3UvbVjkQLa6jVk3NoZErWhDY8DKqXh4LouFScG6vfvDDR",
  "key33": "5yDMaLSUWBxpv9fn278qcCLPoQeWEPvEsBXRHfS87LeKzZbZwDdxfs3XVCegzkRbH46w5GdJEXJ6oJS7QTxshdD1",
  "key34": "5goTnJg9jR3qdgKSv7VeLJKxz6mAW8mhTfmo1SLmhoJhtYvsyCuwABboPdgpKFvqFLbJkuqZtPWfHrEvMiRVvLjq",
  "key35": "23w7ib6X6rGk9eWcFGFwGqisxFUWiXtG9iWV19U13sxQb2yMEfstvu6kdJ5VN2uohFMYk9BAf31AY6XVYGG2corg",
  "key36": "5yuMTEb8BBSsrGdgVPMJMPSVgtbiahN5noqsxAo1ZJEssahqhwCEkGgBsUafFkcwcis1eneEEnGqCFUhc8nUMC1Y",
  "key37": "4dmkEFEqb6U6HH6Cfrmj9VeTfT5fqRTyb3VxyN5JJcXEGh5rGY6LoTKQV3ZDhbEomqGHcxs6SFsDabWDqJzdjZta",
  "key38": "nhQpFNXTezUG5iS6qwkjDgdNqzDNn4tg5XA7SfpfphoG5q14T54oRnj6S7eeP74abDJCVmGobiK8E8KHDrCpn7n",
  "key39": "4ZdgGGeFFQ5qtotJX1ALAZpxRsosKTywgnYrS7otZ4ibfaaSVtbrsxmApqj8KB86AysBT1diAgoToiRrvYk6ymkd",
  "key40": "3TcTDePj8wEZdD4XUYEa7zBWf6fAfV7XmADppFaoDBWi19SQ8EBMCcvuWRPyyn7rg5Y3amdwfMR6grZiCFhw6jjz",
  "key41": "22ztSxfv7hUbJYGdbvT8qh5TfymC9ob3N1CeAj2srRgcagyTHBUD1D2gVFvU9G6ridvQR2699ERxkiZd3iNbkRjK",
  "key42": "4a2UBtXJ9DcQk7wKQTQiEYzK52RaBaJriBLXzBf4eQhNLj2cVVA9ZJaf7f5EB8LbFmmF4zgXu4Nj9EFyABuc9nAu",
  "key43": "2qXTQZnxmy41TGRcr3iuVtAH9efmGgovbDYq4Ma5MhtmYZG7aM4idd8vST5fnf4fdQPSXe4cPQvtxcHzD6NUpvDM"
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
