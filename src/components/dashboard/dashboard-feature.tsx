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
    "5pTaNDDeEay7daccVFVcUm3j7rPW1ZtRebqw4h3QHWc9M33XiWCQDP2YH9pwYbZhzshPPXYzftMSdpPDxoYijx42"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TSYLiXbohQtHKa3bAZWZv8SGa2MzTykz3b1H2S72pRTAy2S9MuY35SAdabjWRGfpwF3JQAa837DLxYcqr9Eynf",
  "key1": "5mjrye6FQBofrhjLBMrpjLZJ4Waprbh263HRGJStNdDhPbK55zg28c6G9PQLexFpeJLekjtqX5NLnTkzyPCJixSV",
  "key2": "4Dz4F98ZKWHfubTydHzc5HFWvw826rzrwmNXWSayJknB248HTyoHTH5ghaQAokxNkCpuACvMpbwzYx41adDqumpf",
  "key3": "5pbskydFV9MSADKs2NDNowgGPaNR9Z4sqkxW8jqX5hwpCmNV968YGQfzRVba1AuDnef6fMWcw3Ybgzh5zgCT4Zgd",
  "key4": "mG8AC4QjNjcwKp4hyi3ZJSxtmhiRrs4TvskN5TzzHy4Dxoou3SJYqKG6GAjhDTtGxLyjSzjYMbBx4vS6Pd4XcQz",
  "key5": "3y9e7gD5vru8a8gZ3YPFRUcb16xEr38WmUdQ4m1DibcitiXFAsM8wWy2CxyyfJSX3DbfBryKkcbP4nbuH79XWP1P",
  "key6": "5cCcpTdDyAsjn6N6xz2WiVU2iFokwiDsTQ2qnBb6LCxDT1Z5ivs5xZt5ss65JVuu9cMn7ymri27yrKDjCXhm3z9F",
  "key7": "5k8Lq7dV9CYfC4mp7y4ULzpzy54LJ3UhJvYV5k7c7XURg1J3GgtamsWBwTU2yDd3piDDYR7n5KoU85MumHzVGxQu",
  "key8": "4rCfK1jwKLLbHF5DyTpP1xbwgn5yjLgvtk7ajgNQntukg2v2oW42Evt1DCcYgqtxq6Rnu3VWdDtXTitAfVW75m4k",
  "key9": "3URGpeuZVhkBEqmiHKeAX5W22VXsFdf8EwLn5Y6jLFh1cUs35Ewo7wEvKSvaqvp7d85rhpWpADkequS1WcC7fAiQ",
  "key10": "5SejKWsZeAeLQ7hNEQJUBgJ3dPEQ7Dp3emxv5Y1iogNaJxrHYwCw2qGAfLULT4ZmLMC5izVaY4yiQvAbqRNLTyBz",
  "key11": "36Z1wBFhhcJp99C3k5fFhcX99k8vkbFCbGiL6B6YY82g2kTnnmsZkbnp48tAeunQT949nw6FkQQivc4purAaFvye",
  "key12": "3ZavPSkxvn1KmULSVNKui5AoP6ZtZzF1JWmy9ajvwQeuBKfozMXS8Cj4sbgivEv6izDCK73N7jYe8qpoTt6asNeZ",
  "key13": "zfbt9PxUKapSJBLN3fw6MmPBProdpCqsxM95KorzezYHVHn7Jbztw7p5sfsKUtyBrX9aszmU1kEbdBs3f5on1dV",
  "key14": "64vnAB8gG1PrL5oTBrz13ZrciN1CWnW1oFLb66UpsHutNpW99EqHRjUm63bsV2AfqE3TmF3SgSmgXP3E1UzzTbAD",
  "key15": "5ELDnvYP61FDCJGiuQwHvtEfYXQuScWxPCHrWoeuNYY8fTDuGknTwdQ4rYjxtpLetHWPFRooMZFoYY7NzaUp9kBx",
  "key16": "4LAo6pUKWHtykCo37cdQShPd67US1RN5pvnrzJFrFh9rGfjcBWqztSaWsxMcLH121FMRYdRHotZyzyZ6hbxWRm5Q",
  "key17": "471rQU9HtPLMcHqVW7kUGi89JCgdYfnLQk844Nu1JG5snmH7ve5ZnYTmWoYGGqL3QNvnca6X6eLACVyuduM5HyLV",
  "key18": "59ds3KVpGqERsDsZaihWAUa48qZd2HtGq6opwtzfb4BjrBsNUUcbu5hNRdJfY4JN2bGiwbp8JzDEuL1fXbyqws8J",
  "key19": "5rM7coQrW5WhtHuCVTh8euRRBkJyDpQLj3hjQXWKJjsabfooN5av1xRRaqwFomG4HQ9CyCSDuAA1TgtJeW55dxTf",
  "key20": "41FNWZ7fvFpGpvWBRp7dACpQDpdLpAaGPKHRVWskgCXU4wLMrXagTtqWLp5eHHvb99xQNJCwvGr4EQ9AFi5o3hVM",
  "key21": "2qraWRPaDEyqXuH34EGidnuQDrRxHTFbs1kudvdJVqdRqBGxrhe9EfYVDwMB629Cj2JaAAnsFMvTB5XGezZS78L9",
  "key22": "4Hesi4UgwumvdMptTEgkjf9SJYddXnQzuXcU1bTNbeoKB4UejoPDHG4t8tmN1R7MFBv5LhqZqPyD9oAMDd69AEqZ",
  "key23": "3m3gMTz97mW73u2D4b5VoBUMx7R3mhnzRfEq4i6P8ErnGFB3Cs8uqVYxkT5NjdrVTmaTGcpPYA1vckWfv7FiwUe4",
  "key24": "4EbhX4DH9e65o61qDFdyUeYdaPfaDUvkFWFjP2kyc1ePHQoDCzoUMeLNTKpbdpcXsc7EnWTLU18SZVdiK53wvpao",
  "key25": "2mwXMzq9RHnJXZ3KmGVPZvP7CmnzLNqMPPogrcmXcCUuUBX3qEbk5jwnwubjWEvdVDBcxzEJmH7WaGRDxE6srveE",
  "key26": "cUeFm6RUgzKK7mz4CehwxKAt46rKHccc8g6UfsSRiDo1tUD5dSFqVbfqCYbgbKGRwA9FYqYpJDn4DM5fKL8XXMx",
  "key27": "5wSiSwTeH5fy7yJKUMzyBQ4ijk2ZWpckD2JFvAY9DaR94MTZjAp4hcWKSUPfCTpqEqj1msr5KfZ5bPmBbeuA3r9T",
  "key28": "3ADx4dR9aBEMebLka9YoRV9GPxr39H9Mqyug8RKRwQfopFebWH7JV8rqghWfRgh7eDMruyDvxhMD3EEYpT2cCoJi",
  "key29": "2XHvDQKnRf3AxzEu46WshqqFk11twCTFtY3SfH6qypvHtw2RzkAqPKJjJ6SQvcrdTpHY99PBPwK4u4RMQZcYeseK",
  "key30": "2q6JcuFs4GfrkdunoCtdgQm8ro4yjPUg6aoyRW9LisSCdV6LRRqHHXkMNQzcWuJpzVPiwcnaL3qTEKGYwHqVCkD9",
  "key31": "i9XnSUAd4qMNq9vHYjopnPrpGCVPitE9zqFWFgsRsmJS998GCwSEN3zxLBhRnmhSjxa48ZZFfra6jSu3xaSF93B",
  "key32": "3MQUZ8JQ5QcxDbpx1ogGct9EdjypRUz3jrM2Eqdu1s1QwH1Am4heDTwya5cizWUJSyoZPvfMtTGoPu8FR6tWxwqm",
  "key33": "4vxAyCd4tapRFwYfwfzaLsVLtvjGfjPtpzsD36azR8i7oLXsMEe3CrDMhxxUszqMmUyWPPYU82kqx9TWhJDYxLdG",
  "key34": "3KNrtTqNwosmuQMXLxxg38CBRQgvfAikbkb71FW2mEeFFcM1uGeNrz7nC3xkroMJpgbyfUPLTP7vdbQCK1TQfu1H",
  "key35": "2BQ1To7xrwaZyUzrsaka4TPejGaQLVHYKShFYwzHw1hSfQbdLSGemATxAYRmKad6kQQRCwp4Gx9xzggVtS2FRUWk",
  "key36": "4cFTnaFnicWaUK4mUSypEPJUk97jXPgfqreDFmErwWwMRd8Q9FwvfLozLESJjgPm3ELKziA6P2XuKtCbxSMaxHS",
  "key37": "2hA8oqrHfc7KrF5gdb2gdckc91YEGEmBq6atZh81JNEyxdrU89ecpcATPtHZZRSkvjWtxygXv1XyfT1CwmB3EMvT"
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
