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
    "27tgDFzb8wWVwz48nimwJowiQa3NKq6EQxCLQG6XMNQQZwqnkDZvd6uEUS3Tg9VvTCvyiW5K3dwoiagtWysRD9LQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iGCRoi5NA5675UgxJrWwyh3rRDE5xtLMaSUBXCKZpj9AjfScuQeei55SEkLJ8BWYWk8qXTrkYMv1wgKqfoX84LH",
  "key1": "5LY98gXtqhRazFM2oEw15Jbo9Tub85UzAaN8R7zqstCxwpswo99D5XzwjyFt2JiYUJhSPHJ3fmNUpn1WMsaWjpa7",
  "key2": "64j2TgvVMnv9ZvmQvqhzsoBhMqB6pJ65s6edMTJ5mP5gUxmgKUByFUQPqojn7Cb9uVh6hXgiRJyCGeQqK4MYSP82",
  "key3": "3MqhypuRkNNHxTtrUx6XbKKRYFpJEdb13YpD46EprRX5PSPUiy5UspLG9GdHbyQFN4b3enxtvVKAggAxrxuWWxYY",
  "key4": "tWJJoHYTnQ8jwzxhBF6n5936KtwTm2ydo4vhu47p2pyUbJ677P1UrbfCokYULFPjznZocFDdCKfr3RY7m9QnwKr",
  "key5": "2EhLSw4sChgPUHwzdwesur9kXUkUfaA1kBoxgKoAZBaPPDGr9yhcyJjWn1JttdtiS1uADrkj3eY2yqsZuzxCkv7k",
  "key6": "pPCybsG6KLYi515iWnwxx2C1oqAeRMnmKumnoWNNcVB9DGkzPgEPR42bT1wWzEhzeoHw9DGqDEURuJhddXDovJR",
  "key7": "yh3Wr6Q8tbAtjFVDWjbaJZ5JkgyjYJ2ao1UerJUdHuu4MfbPogtvbw6v3uPePCKaxK8yBNBUjLViMqzQJBwHTcT",
  "key8": "Zdxd8QEM7huMTsnMpBr5DnJiFZMJEgvh1AznVSD8XsSbGTNGAN8pW2treaQx4779NPwVPwwir5fyrSu2PHs3KBX",
  "key9": "4anD6RMuKXrWhKi12BGiGnny4mpiapioPM5suVBGX2zCma3FTYeDUHBBxTMHNmSXro3Xwjqz87XLsAmWhFNKrqpP",
  "key10": "5zgc4cKMozuh9EA7dWuSHL744BLJPdAt8Uqb2AghcEByFTRMm9Yn5fPY2MmX8haZUVg993RC2L67qd9De6w6SiqK",
  "key11": "2zdP2jxQgy17exy2xEE3NGdv9vAaY6B2eG8sFah7gepJWVnxTrwVEtPEmBrHUhrpTjZ6fH9G3Y1gKHDqo2dr7NeV",
  "key12": "3uw5bNy6XNKQDVmcse9mgDR7vEZDvU1EwcdzpZBsBE5w3jGTndhP5TbG5gcb6TD1WWeWbwdF8xAAWwf3T5ixnH2M",
  "key13": "4h4KMJQzzf5U4kNVv5ev6Z6HtdUq3CMD27ubsgGRreK63gNwbQShqUZaH1ZXBhVjTP4JP26rTaBo66tUNynrCEV4",
  "key14": "4dyCpVWSZ2buGtdjVzkRaEWqQSJDEEeKG154odUJKiVAqvppmFMBXcQm1Vkk8vkGZHSKSsrUgNqhP3VG9rk5CRQK",
  "key15": "5ibAZAdJJYCYhw8njWd8s76V9xneRtHkUU8YiAUnjcH7sJCFVsWhMNh3Ry8tge8nnKySVZCkQa5HQCwDz8jATS4D",
  "key16": "3S9t1NxAjXgoy1ifBgpZDqwSd3DaSQzsqhQddDerqPY9cCs3snGFSpYRdgBE88BfvxEYxSdLKrcrn99NdG9hAUJZ",
  "key17": "5CxYZLVV5inZjuPUsozfSngDTF6QnQ7DYMVp5gf9eZuXpMArKiVXnkE5GAALVajcCWQ7tKqjbcd3QusaQeEBWjgk",
  "key18": "3AecfXFpYRFRorS6sDGDG4n2KvrSAN8BhbNdjTPUUJcT3tyudaCsN8MBkM3mD62Nb3iTmVAcJpJzadCWTDybynBj",
  "key19": "4BxmVEcPf71foUCLB7eQL6FGvX9BCPuF7LK9v7cULAtGFHx57VbsqXNFsF8CeRwQLsxnqt4KzDwNt51DCfk388xb",
  "key20": "2iSotsHsJqHyaHPaKZsCNpdFc7KxA8CRiMmAgoCrQqT45adYgUxqZcADsDbMmiZXk55cEBxjjEmWJRp6p3YXGaZq",
  "key21": "5Vj9MSzkknba4CDDzeRTzgsWKPUaq5tn7voMQRPdjRtEfLKBisgz3fJDWhNTivjQQejPHnJsvJefhqGDTH9kgjgy",
  "key22": "3t9L3AGTnSEND6ZYFsaH6nUrktM3CLteWUDCPSik8gFxnASJBUA7CaD69ZDcRpEgi9JjkXtq3a44wD6iUvcEBAEh",
  "key23": "fCWcvfvcLtR6LA9ZstV2BBKLYhGoayd4zMT56vsczSgcy8m69mSpcr8oLFfFGm6nhs5eVmeekX6ZxwKh67LDdpt",
  "key24": "3JrJwfwAiy5vsCjbH6aQww7Nz3MJyzGmE4fXqyqMuSZh3xhcq6iSnULbnxzcSy2W5c6ywfrWkSVqsBjW4zrBjVxT",
  "key25": "22XiceTFEwkpCh5bqMw7fBQtX5mrNjQxsu3qPwhaeiw5XwcNCWE87EZ3Xvj6pyteNLBK2HBTNToTJpt2mDvQmG8f",
  "key26": "5PNvpen8CvT39y3XcgvtRrPTfm666NDcs8nJ9bEwhWAa8D1KGQtQxqoFZGkgyJq32DNvL9kCovXwAQKLkS4eHt1Z",
  "key27": "wFBXUKJ4kdeTWQMcCsAt2vEomhpsy7aW8cgCxjGSgvp99GXaHXJDYuSrH57YQ2HdZ2BWpb9zzZR8AT6bs6FxSEM",
  "key28": "3eMdMi4zeLGdbL8YR8LG6WbzMSGASiP81cJfRmxt53NMJha3gvM6havJ4ej99bWR3CbsYe1pXJTv4bVq5ZmCD34r",
  "key29": "UhnD4zqxNtD4Sf4KtnWyp1AqFw6CVdoKJsiwRLuLdDLm6bkbkZwcDHE3wifMSFkknbBTp5K9bVthVxyXdgjn68M",
  "key30": "7HFQQjQBPUki8QMuVi1vuwdjyLYRUrywnhUJFBKSRPJGf3muee9MSMgtySYLhMauG3MxvWZJr64w2ivNG6be9zR",
  "key31": "2UMSdgyMuYpqLF3nrvgvZQe2BKUooV6M3TKXofheKbfDr4A1u3XU4LipnAxPo8rB5nudU9QW1dFD7MPVrXqYtbdy",
  "key32": "31G1zeKs2XKAUmQfCLGKwprBc72diwvhEwjZcWXgt2or4SX3ELVS43yLu6CdHjEmXYjVA8mqhVUuNkB2rVb55pjE",
  "key33": "3KCo9xHDwtKXT8qW5xvUTF33ibqVqEqSaXZGbt5F3AaSdLWHNd7LXDfj37DwAwQjDabpwyX5Lfqngj6Aj4pbActn",
  "key34": "3bW8W8A9FXc93Fim9beNcqLbi4rRRUf7AWaPF2hvmgJ75uB5WAR1QzAnQe3Sxg9frFPkMLCY1cbZtfQh9NajMU2Q",
  "key35": "3cWW2BvRMxtYyh7Av3EbosNdQbKGuBX3aFpMBHHNZcKQnCEgf8UjHAefFbvWWbuSUFhjAiywfpfErkngPS68yZJH",
  "key36": "oAPZdsZMe7NL7qVKtgSNYGeTr1UDA379AVtKbZJWJD6wBEhihGxwBTYGADWgVE6KQc8pQ4uuLE7RuLq6zWQQmf6",
  "key37": "3GqfnrtbkmfrrHAJK7RyAWd8YZRA74qurSRtbBEc27FnFD64h8XWx19LGXrTWrd8ebLJLdaPwXKCdt6SAjb5ACjQ"
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
