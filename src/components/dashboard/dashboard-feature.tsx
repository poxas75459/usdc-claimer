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
    "5DYpMozNWVhqCZfUvYGFHP3LV8N95xSHvBzLEfsi9ngvA8xx5hcdcT74P8wdBrXc5x3ehmZxUA6w7MYigCj2WNnE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BQjbUBBxA4bZjEnGHtGTD5hQCPGR63AQcpiH3MGqXPCdRTjnMr7maCrfctimLTtcTg8Km8cs2nr6HuMq2mpTLJi",
  "key1": "3Gkq3EaFYAQjFdCAzbi4wg87yB9teyFMjNNTpgdkoNFamK44hi3bMkQ7MRmfrLpdkek1sMRV2ntYvqaLfm5f4a4m",
  "key2": "3GC6i6tWVuo3JE4xr6omU32ZekthmMHHiPhrpTaeREUTWWtmDgNjysjBZjW3ZUqa4WYnVTnkKhwSbAHd6ZZ74hNU",
  "key3": "2yn5kFsmMtUokMk5hy3jmK9PFL7qzBEisPo89QJNzmjPbnLLmiRVYR77YH4HCMYoTPJFuwvUc8vNWGUg1LBNVihx",
  "key4": "noQype1VCs7wv5QBWvQ59y9PsqrXPkzywYF9JqfMLFdyDMbsveKWrNoShHLDLTkHhT1XeU3vkYYV1PGfWMo67Sn",
  "key5": "AEbp71gph2nqBojdDLRQsU5AyVtUPtuucWpsBQcqzrBFvck9ssRgnaGiTU2KMtjfstwTECXycnGya7y93QnzwN9",
  "key6": "3JAiN7PjhcGAjq1t5QS4pNEhKRxDWFeMD6CkAd3afSDrmWTDQufqCXB8ULDCEPjzsTfwM5EYZiKkdh5jeFXxhXQt",
  "key7": "5xmbpmHFxpytWcw57Dit45mcoLi6B6cMPYCWeQwYRRieQmcwXmoB7JHbEVGcgWULeLNPvLVk5ZpkpkExExaWdQwm",
  "key8": "21pmzgpB4aJ4xhQouZEbZdLYuNzqgkEyrWGHcRVS2HAWoxhT3CvZoKdaZcxo4aJFukrAN7id6z9WTgnww93KrA56",
  "key9": "2MBTu3T69m5E9RunUYsDvE2ibaBBzYVJrycXXi87U77sFwpJRwtBS7mQMkL9q8Fev8mamso58qPUWiGfy1vdWfQV",
  "key10": "3rwVRchekvNoo36LgCsJGaxPjyviSQmFZs4MwgEmEC643X1xe5n3piMj74badia4i6PPMRZRHYFFQP7Ccy8avREA",
  "key11": "2eYET5WFnwi5G2KMptuRWgBCXfFJEBR3zCh8Ucu3stesTKRjwKj1qzdubsQgtcBmcYptNrEK6rcw4QASnT7HjxUf",
  "key12": "rg45Fbj7bKTqqqEFCsSCm81Nfan3JHmBXmbBbpb4qG3xWFkQAPC3EQKaGTAWbYKzTEKuqozQxd4i6d5iMCMieJZ",
  "key13": "bVibgBRrdz3Z4Kd3jFqYfUgC2grpEdLEeM6fPRNpbQF3mYHwx1BRQYP3NNi8mGgSys1FvupkjmtS1anVdXWZgiR",
  "key14": "2eb6Tsdta4Vp2eQW2SXT8YFu2sUU5H4BY7YsU6LCyMjZUMENGr89EpBEnpbgyAbSeNckNozQSjMaVPXu5j26QyDH",
  "key15": "5Ab1C7LiYZKWgpVWbXSDt9zJCopbbU4yCAkmDtqnqHY9LkrTd4S7vEqKrPvSczPuPoRcR1TYTZ9HK7muaP1XWPPw",
  "key16": "5xx333dsqZHNKGt7omHifyGCqbyJ2NTa7dC88nYVr7C3cTunkF2jWHkqN9mRAr5jKhgkZQQEfWnfVnWCCaFWkoT5",
  "key17": "56nKSLNHXdf48VxJ33Uvs9ZKtkhr9v98v2hacDCnvTgT9LuEmxH7tQ4bry6sXcdN6T4mtfCy7a9wZCmMF8BwiWqz",
  "key18": "5U6TZx9aeoEwSagvtegKbqc3cezBDFRPtUvpe1hDCiR5XR2AXanJuN2X8mzVDKDfVynDL43X9XHpNFpejNdJXyjd",
  "key19": "2Ak9GeKp8F1c1h7tMSTr9jrCjoJgJzzkHaE8BiqGJK4NhBZ2PAsrnSbd6dWRAS4ZzSGREG3RbWoJLqWLdje7zk1z",
  "key20": "3A6MX3LGLwdaYpGzd7e5fTb8xESpJBwb31p8bj9etQTUE54rPvuaKoi955ybUZCsqWv7oxADAdUEWRyAE2kZKWHF",
  "key21": "2QMc4tWMdVPn3xEVC8icBoyts4UscXNcavN6Jn3iJ1peVK8Y8d5QC82rmXDDncM93weznMw3SE3qeMozzTdBqXsk",
  "key22": "3bdxB7W1CMFpPrHmvg3v4ycv3ZoguW3y6UirbLhBPwPS1my3sLyXcCkx7dywAv4L3pPAszcQVu8gct4wsASd4m9T",
  "key23": "b7hVz3T351bQX9X2B1bo4e5eQiDrWFHAon2uE8ShgdSh1BeNoMfatR1zrsmVVr81yEpcSQyFpF8rpU8rGXu9Bw7",
  "key24": "61diC1N2VjgArfZdHxNyTbA6JtjRVgSSmB4YRDmN2LAaF7pnrk28TuMuzT6M6tT15tQY1wkRAGo71vxfasGKUpTB",
  "key25": "5srz8auxPYphhN8RWSeugC9br9wNBz8Qb7xdcEFam4vrDQQej7U6WpRqd1kxUtgwQHALH5xbvVK9dErA8RmX83ok",
  "key26": "513pUVYJTcEWg1MRnXsqZCtHAeRmhjJ6MbmEoqNcMJYTxnv2x4GkBiwp8jiLCCYvoEajTjssfGdDFhCwpoTV6DVZ",
  "key27": "21QsnZBr3VamGQefXF2R4B2Ndqht6VDpPqc2bGZRCMxky8R45QRUuAmMk31b3NGKBHh8zo9WVMeWnVUJGPFVmZQM",
  "key28": "2fqWcbwXvHMcXo3GZZFrYrqsuk7MyT6nZFW6imXcGNWxc9kNaVFjzckLZiW922TgWRz9yD6EpQrjbt4pHC1oHqmV",
  "key29": "5SRqhCFgXEgCZRHC8D1hP6H8yzUUqrR44MJRmU17X1RPECpeGRW4wugAAK3zaCJu32yTUFx1yVqw6XUiZi5Qi6jZ",
  "key30": "SW5yNgp3D5KoiqSMrmEiC2QY3LW62R5abMZhNUXHHBv28eXELmfVFKsDNko8siS5AGy7hSZywgNYe6vp1WgFHGg",
  "key31": "Kh1soLDsuKa1nCYDVmi9ABcTMocVMMiditgUUtgXRr56yFgERt4rK1hDyx3quR87ZxN35ny1oGeqz114VaRUV4W",
  "key32": "5wRt1VhkQJVgzFiDkq1tcSB7dW5zqdA1NztdaarL1JbwWkyWnrr22PKJNvFD2qHFJRN4tAjKb237yJB1tfUFauhe",
  "key33": "3wvq7hXAdHnpmQP9CP15qJnhVqqCzNMnUeyEv3fJ5RRjhLmBzcc9mQoXxjpdGBUcbmFqiyyAhtVc2JKg5EgDdYCc",
  "key34": "5hAYQ76beo3BJjYcJae4CsSSt5vF9d6eFmfgoSRiCJmiJ7d7ELVotwfonJMXvqbmACDmQBDqRz6HjEmTqFDmQqKZ",
  "key35": "36DEvqDhLMxqv8nCsEZ94eYjDPTrdGtJYTuVRZcvV68vSKjykzb4SSn2fdYVjaEQKNRESuGMCjfNVdjn9Hj2Zti5",
  "key36": "4toL49StiZvfTc7SFtsdLRSha7M1SFaj3qAdhWRTAxeQtgSKzTpsbqopyPAAJbLKAQUwW6Dy8MkFSFfV9vt8dqYf",
  "key37": "WkTAwyNc1YayPSwGhN15egpyR6KTAcz6Dqc1AXeCgLhjXCA3DPrsDvB1hFWgA4RxJEGvh57K4WH1xahdnYeZYsk",
  "key38": "UESMMWnGXVbaXX6CFRGhDdmUw9CeZA55zMV1vY2JCUr8SEq2YnNvo95iRjNKXEfm3xqS4sxuntwHSn23Upfpwu2",
  "key39": "35z29YFZsxsJiTYTUiP33gzSUtUaEGaNJeqMrmXKYJKhsoav5WVmXkPGnnPTjyNkn8dhepTMjVVPu7DjzapdHArV"
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
