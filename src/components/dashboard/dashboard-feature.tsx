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
    "3rB3Zn7sVi7CbauzkTWaCKCtrQ4h9n6GzH3s5LTdoBM22DqPaYyPD3KYzAwDhXepFukJ4aN3KZ2FcBDDAEoTWFf3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32WQJhqtJoeQkWwjBs8xN24uhM8C5255hArmwEWF1Pz945wEiHCq9677RHsosj8VEnS4gn4TZ7amL8SYUyu6WhPq",
  "key1": "4UCxWKzpUEC7W26AyT6Un57whjNEG26Fpwy2vYD5at75zNRcuGjdPDwsY4YfFhBJphzwQ6NabFgniQFx2eRyD95t",
  "key2": "3GqE4DsZEVYy4dG2fmidnCBxZVcw6wt4xsMNJ3HxYxPw64XmqL3JWLpbAs549Rc1jaFDYDoLaxSqmbjqsWjLX5tQ",
  "key3": "2yRto5PMaM7gh451sk2MHsDCe3agZkVWjZi9VVAiqx4kydrKcFZ7KSCaaFhA2eiBprswTa9BPhZUifwSCezAEKY2",
  "key4": "229zHHTkWZkKKobuqXtwA8ejJvXtxHKnYCJpB1rzZBbTWZv6LF3E22WcpEMURBTJ9eaUUQGWQgDHkw9Lo8jQmq6L",
  "key5": "5HMr2s4adMnpGPzdFgNZFGXpXJwQCC9C9XhJAr2qEvm3SU5hCiNpF15DAbbDAyHYXKv7WZXaxsodpmxPQMkBeTUF",
  "key6": "3yrDLhnmjJqQjvmti52JNXmWsf5DCrjXrTsG3i7audrLpBYEpg7t9MJyqaHJXKd2Vngbpu63bn5CCTAS3k72hgCx",
  "key7": "3nv78HE6xwg253Tc3pWQEPPS5vvDbdbwosfjdBE3ikghK8s2vaAAgm2u1sPD3j2fAu4xXEteNBoNr97qB62pCGWG",
  "key8": "2CcKc5V19XhtH8whmgBvoBnpS81ne4nca8QTXxqe1hR2pjVFsdRH9wjwfiKBsJZm7Dz4C38wQg4CDqZ1ZrnU7xK8",
  "key9": "4vqUHrYtZqsijm73YdR96g95wWjUutrRdRVYb8Ch8sy5ELHwSVTfW8Yo6A7APgJtNe13ioKsdWnmwaxfwaLW75bm",
  "key10": "5yWEtXZBndPedxQLubrUEpAyoU5gEWDnreC1QbEF7sMnagLLMBK1w6BgY2qkTdjsuBYiapSMEKgoX9crQ1EzyXUk",
  "key11": "2hiMvpT8zuv6NqjLPUh5KXdTZgbxTV2jw4E2ygK77s3fxQsmKk5s1RW6nn4wnxb2ofrjexBfcYGdFa7jdWvcsqwf",
  "key12": "5d7pWNvpWTpUfbWSLFXaiCmErXBM8C4tBBn4enhDT19cWTfNCfHdKFipRC28o3RJr6PTf8TW7QJmZKE9suroMVC7",
  "key13": "4iWTWndKDodQrdsXLyuULT6h8MDJkCtfihk2HXWVF6atoCQvSSUaJab4dQ9XJjRXJdKV4Cbha22xpcPN7HLmy9kY",
  "key14": "tphjGoqsPBZPEwFx7sGLQeuiHtQWiVGsmqx9upmdhxLvpcYLvRRwUcujVcZSMiqzng9NhSBGvXAAyuqVjEdjof1",
  "key15": "2Gpk5pZLRhwpmXZJ2WjJqNmd2dnUBt7Ckb7U4MNtuh6CTHvi1gKncBrSRSXAswnBbvyLv8fQupH3Tj5vWHYV42Vr",
  "key16": "2BaZ3bXmMArbqmAhyRQW5h3ubAdM8fC9fsmMy1YmMKiNozrfH4udUY33E1ffoReEa3ARC5r8kcXvnDfQa47qykA",
  "key17": "wqEE66NNvTL7JKd75zoefVYzLb7fPEh9tehHxdmt1VTrXPihcyEubfhLNJL9qaZF5wPcKyTcfvXfGhJehmhsgUK",
  "key18": "4mrSbLYRovYLPhdro3g6LjsT68AGctyWftkdK4cs5ND7Ega7tAN3pNpZSX2LctYdeqA3UrgqtxkoN1JVfiRkY4YR",
  "key19": "2bdakQ79dh8sNpKntQT3HqgcJgQrkYZafESZe2tZ6J5VAuWHKBWEAvnxVqfSEwXE7aCu4ubHPfkq3jdGn3KRhc7z",
  "key20": "4uLrVJmdc8FYFm226xEKiGTpaUMRvSawM5Wnf3vj6cooQr5f78eQShJg6rKucf3zj4iWXxBquEuLuPncbM5QpY6m",
  "key21": "5GDQtKrnRhaffgN4LsSNDbEkJpaXMEYoenXbomZFYm5UDRW72dMuvr4nRn6AGJiYsejKMC9RhD8pjRP45NhfVu5J",
  "key22": "3nYrTfbbvDEoSxnKWjQghKhEjBWm31hdJibTypTUSSrUMQnMk9xcAYFSnc5nXWn4KVeCiqHmEMXx18x76QBFW65x",
  "key23": "oaTAVod3vHT6AcL1tiJz1RbvERypDSzbgZWJhPak3VniVWEpRZja1xFPyqB7JWhRYmE6y9SSvQdRGiUqVpsZSgN",
  "key24": "2gRDiGRDPJmpuA31ftMUHMvHooEHEh5HwfDAwA8ERsTDhaD4MrrYR5SESp3bynQSbJypZmHHo93XuCjGom2AkALZ",
  "key25": "24oMu2EifcogwNJpHtiRPHhejLUvEJeSJGxijaYjAmfYP5B2cm2rX49CMPM2jpQXEePDihFDPdjRWJxL1ULKPriC",
  "key26": "4vTmP6V7btx31MoP96P9Vy4je6eVbrGC4QkUNTCY7hiXN63FZ5D9u3mtTubvfaw2i82Qg4YNjiqFaM7myoPZCqkT",
  "key27": "398PnYCrCnstdgCkTDZvMHE1WDVSthDK9PGZ1Qrf4yvd56z4D8xUBFYUYbEjtQSjzijyPihEX1Jqd6GH9KjHZrnk",
  "key28": "4hw9zmDfPZFLxgaUyKZrR1Y4iJpf83SvtBQPUZUHxUNAviDZ9wUMFPwNexZ8uYZszWq6ddviCJUcDpQgLFRS4Ukp",
  "key29": "2fDRtK4Ph9ytNvRt7NZy7Kawqw115rqpySwoRS4T9UbH2Q276pS72pwHyrobx949BhqiUXMug7YNtpZRmPw7954N",
  "key30": "5Z8tjCbXNTPpdVnEarSGvDDRomnjEkjxxNXHX6HLFMDiGjCcEGeXVoTpesVrrjAA2fz4jVC6Btptjo6Yy7U1zA2C",
  "key31": "5nTDWGEAN73wdfiC67RSn9YcdETiRC5ccKN9iMvABEFAH3AdPnpwsJKFPUHX3eDzwhLsmhbupwPxiurNyCAu6ETu",
  "key32": "Hnrq5aWkR9UGRAnohFDRL4H2whna9Yy5GqGwpaCHRLHNb3p2L6r8kmV5tj9EAupq3mmxndGPviJpi4GzjFmU5G4",
  "key33": "4UyBptsVnW4mMBDnvtLTmAXxgt2fJ1VrDhG78jwkSc7ZHjEXiKASiFAQKPFw55vSvjqM9GupA3BxQUzgmtNhaUVp",
  "key34": "ySzBteKTjMe2pobRdpZKNs4ms2LfJPGWyNfBSKX3Nd3cRFTAMfAFGGwHpdEfKJf4N6CUYnUxySuaN9QQaf9NVp8"
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
