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
    "5RK1ErspvXgTueToMAGnabsaGpf5pAFNjf3gF98e7Hg5zMv5Tariw1m4pTJY1rzRmkTejYxrVHWwkoEzjoFs7cgm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JyaGL7Zj85Gw11PzKfKSuxYikJdfu1e8Tm7FmdD52XLG249HcdXY3CEbo4krQnBv6icoVq3Ubn8iNFGLb5goscT",
  "key1": "2qENVk5q76GTVm4nD2XYDRnj7RK8rLM88gjoiWbACtUdohGaV727RtQfwTzhpEqaTDPfg6diNPFaw9CqP8Gjn7ni",
  "key2": "54dCSTbmBvoKhb3yvC3sMLUW5RQwNhJSwieFrwdjTPxmccWWLXxtvUB2MpfAvkqWqvUBmvuCgKQtYdBwdm3rRZCU",
  "key3": "2nFGaNTinT4uouj6bPy15n8QbNV1V1KcHZ7RsAM51BQYk3MizQdshEoQFVfLdmKsExNJFUht2pbJWoVRu4BdiYnT",
  "key4": "5rHy1X1zV415hFBjSryXgG9eRjjtvgadDepUCzRJRcK9jVFQvqfFZYkYF4ZF8nE5p88KD8TLj7fAC59jrk8GXkyK",
  "key5": "5GnxxaJri7rgmWaSRNFWDEQsrVGqqbA2jwarVShYto86NhS1eurfSq5znj6PQGQs6Scud3nsc1xgCM19gHMdHkzo",
  "key6": "VpDm8XiR6NboLV9St3AB7baoTowzWS8fdGDjv2FGkdWUAdP7vQyZB34F3VSmLNpjsG96PnDncNxsAwT5gmn9fBP",
  "key7": "4G8u4PApyuPVXfBdmAXkXLJJGWp2KcAHgFEQ4Nx28JVGZVytToVhrjBg7ZWLSTw21YmFVo3xYrGtMoPevZXgVDn9",
  "key8": "33SsrnxZGnP9M41TPUbsJ7NwbhvZ8ebGKShkh1zonPUfbGqRVRQ5jxBfaPM1zzNcVYZbjMujEXcZqcXRkMdC2d7z",
  "key9": "2mCDdajqb4feuNkfwGPh4MdMLguQdWTotJuPU3TqVh3GtWYK4kCKHzeraKxei1zLN9dq1HNP1CL83bXQ47x98Ywu",
  "key10": "StTiEBqiir5S88eec2bTE4J5R3padYu33VFfk7HGGASvyrz6dHvmmRVoLWvGGgdc5MXV2jauC4M9xZ8dntkWAgQ",
  "key11": "3BDmMQtCxLtmvRacP7DL9cktYNQBGyuEUoS5W9kXRCYAnPvkPbL4bqAoW7Kwa2bJJeUrAYczbYiYuAycBHFKcRxB",
  "key12": "KexcZN7Jj62tGSodSR3DFnf1vedcFK71144nAbHmgdgsLjgA9R32j52AiDRh3va89NkCREefviPoBrfu3AH4kiz",
  "key13": "5c9j6sKbLtnPDiNWE61GfcBaemkd2hQ96Yj99p7gRNhdsbVU5o4B6cQfmF1nBdd3gdKH6AM1aTg64Ty8ze8jagZh",
  "key14": "4WPpWBPNasmJANXDcm1Sss7rXLoJNomeBorz1orzoyb9EktCHXfp53cfo2jiqqutLfWadNWT8omyyUqDTrZeTfe6",
  "key15": "mXdbXSjytFveyp2VLaqLenBanzLbJ7ZnfHs4Q9tdBv2r6G4b7CsisdEqpsudfhuQqYwdSWKLwRAr7wBFJpdhiSg",
  "key16": "2LQWhDFoUPLyfoN4QzWex6gtZdJuHax8QtTCPJFzemQy4QqpRzPghsVv6uTUnQG3you8Bv5rR2w5H7eVu2RbTXrB",
  "key17": "3mps8t8FAgHSkLmjHMmQccf6ZqUbLzDsoHuWXsfV4tq7FfPrf6qHPWjahaeNF1df55qnLG6i19LeWPmNbkmzoVD2",
  "key18": "5YmFofozNdsiYAWFowGTbYmi5HippiLn1MJrXkS8RQYgjrRpQAWxxr5KBY8WU91XLciU1fQiH5wSYVjqUCEvX4Vf",
  "key19": "2Vj9ZAaC4zhMSWZSo4N7H6hY5XkHce2dEZKWLyUqgnftruZXoYjh1Wyik8utSufpz67KvHb6zwg1i8HnuEgELcAE",
  "key20": "4r3QbUjcbhV8d2QepVT8nf2y8xNiBYMkqUtey5bU3Qm6pav1a7VaT5S1LDj12fYH8St3AF1Ya5VmYZgzB7URbzL8",
  "key21": "2S8DUBCNsphVFAAovoqwjcXGMGXjQKiucPXZzeExnxrqqqi4Zsf2RVXMNxnMUXrCm4bVB5ZrvHeZjSKE7wGcw3G9",
  "key22": "5w6HnZds9w8nFgubF4Yg6wAgkiUETjcBvruymQqxnCTuw3RKesBMZ72wWbG55gH57PTPTNAZCV2NxsE92x8qi2P8",
  "key23": "2LBiWwxgdXScsnt2y4JCwFxc3f8cJUq4xTTjyLCpjdArxmRCUWLDCjNWQCByTe3T8tug7rMbcRGo4zQ9UksvCRrw",
  "key24": "DTz9QDxqhKHW3v11E4saT33AB3WAEJr9QxHASgXGmr4VP9Do4y2Mocrv4UUFjLn9gRPAJPJhxAXQZZLjoa7UVJx",
  "key25": "xXqCWgQfZkUDtGLJh66Btjh8WsCKwXvhPe1D13jRce6nBKVpzj8qpYybTJFAXZPogLtBiAiH7gVVTkXeipWihfB",
  "key26": "ka7Z4mc3MUN7SVKu2QDzvhgxRPYZkxphgjRDaXmU5j3PNKCVysHzmR1pfDwnom71L8jX19Ptn3wnsqMeXEV1nvx",
  "key27": "24vbRVTFcpq91ZCkUQhnyz7VMCy986G7v7uStjSRtDRyXBE7fjcN8g5cijd2jyvEsFeCTURF29PdKNcB44sP5VM3",
  "key28": "5P33Dw7LnUuZMfzgo1tmeEkCfxGLS6zZ4ez7o5BKVDgYAeMqsC5oQ7a4MzskM2hYRPokRi35ZjzHoHbdobKfCsi6",
  "key29": "31fmW8PQV5bHiUT69VtRpEnFCMLTVRzt5m1P19JtjaBmqeFdiiFrYirafghzt5DBicdYQAHTm2xuqu7QVe86pWzP",
  "key30": "E4anmjiMwtTVVBUkksvfPn3tv6p56FgPBiEYXHBiLdCVDdyV6ZtBGdvbpjhwyocEADhTeLLxq6bdyDz9jZapEZM"
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
