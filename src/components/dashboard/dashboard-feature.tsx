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
    "3jpVjEY3dorgdjNmJitVkSPvfCcoGChMoCFxxnDWGXzNrA3jyVCCfMbuvvJS8gBxbr8NUzUCeaaN5W5dShN2XncZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NPMWfScFsEKJmAPZkD1VbK2cRgkJQywY4txuWVULfrzpVR8vdEXDHoiUHYkeXNynDA87y2Lf4gabKt5AVwwN2TV",
  "key1": "5g9y6jVsomJA4UmpJsybTy6JDigpk79zc9takJiUpe2TFcLz34dUELgc8xST8enbXUWyawTQz1gnUH9GSFBJuj3e",
  "key2": "58txW3qFwDcXcWzDhQCDt5rzZn2KV8mCYeT2ZxiEe85oJPZo9AVAywn3Fn8gH1cjYXLhXyGSVQMwE97UebtC8JE",
  "key3": "L9GAuTvW9oGwxB4NerADuqjNa1JwtN7FC7fTzVfCEiJRmVQuDEKw7VfKVraeSxoD4XcFQatmxMin7qCh2oBg8wy",
  "key4": "1XzmJj9ZLyGxEFu3eEZwVcYabWoxbMQ31f6qtAp6EDdj5DKUbmAvCAfexqP9u8rd7BP4SGZxRhtvr1grJCyJf2Z",
  "key5": "2nxL7n9tdC13ir6iGV6NicsjJCV8qBtgpmPTEvUntcaHEW14KGsMioChs4CBWdGB8k8i1bRz8t7S4iBNcWtp7kS9",
  "key6": "FtwkeYBJrF337qY7SRNe5vWNxrppQt4V9VikLqXVZ8AhDJVLNK1KqbhKAiBG1khAMxvDVrfqz5oGLznBsjQJd1x",
  "key7": "2wDuhb9j9B3a92Tk3YKgznxGJYWXyisQ57dqBMwtfKFN3pL1BTyJizR1Q4QPMBBFbEqEXRyZQKend1TFt3MWQAem",
  "key8": "4NdmcHaQx3FgfyvXcaFy8vkB7yHCofMBJjfodTTpA4M8KzxGRJiS46NhiUn8Q5GqvGgg4P4yJzJ45FDZfCtfdsGU",
  "key9": "2eLW1MQYtcs4o3htfXPMHD8sU4cFcBgK5SUHcosEcqmiEFpsr1XWZXtMoaZ8zh8ZwdVfjicUSCdTRyUrjqfKCQ8F",
  "key10": "2BubmuJi2TNyHK84qaaUWVEvFuj1UiHcrC6AoEsdXzRDJ7DhfCeCon6ThEMe747KEskzqFYqdS25QC18eLwAST6A",
  "key11": "qbH5t9FtaL8FhFCQ7LQakMS57vSUKrFtii94tzeNDN7AQjU4xirp2dwchUnJp46NeTqjoCoAYqHMD9WvT7zQxyK",
  "key12": "T7tjqTxwDntfKofdBWUdfyq88rgKtXZPrGkcJgGKewmHcotVtjG9d61LgzWBH8DknBzU1sePWAExQ5bjbvaEvAj",
  "key13": "5jeTyhpWPFZp8vRwvz5mLLmjK5zbpc8aBcsz4gVAEc5Gi5LxdW2HFwcegSBLyt3rgD32E7Xyv493Fywm6Vxi5Kuv",
  "key14": "5Fgy8JXd5VacK9ZoEJxkHmeYRrJicxee9BbdtFBR51v1AEQ9xBeEE3K6asG1vuGk7CNTJhLqkLeGW4QESnPM8iqu",
  "key15": "ftEoQmL6icRXiZLKqUtAsHE9sZvCmiSCRpk41RXppMw8ioY1bieZ4VN7KSktsk6GJQDZ4euPHdkQbeom8Un378b",
  "key16": "3fRHP4fKEU3y7NfvkUqZ7X86Tvk9TbfFD43dnTyPa9Ch4B2CBREAYmmpsnhkyWBZyM79D1etjdBkqvkg9qfdBqX7",
  "key17": "2mJgXUbt4iqpefTwwThfm77aYnZmyTCA5VcBgp3XF8MGCT9KCd3TLp2eqyrCZ17P7zbjZeaC4HX6MsohfgELJPpe",
  "key18": "5eZVYBVZXzdMikpv8KvQYnGc1PPkxQ4xVSXQjHKnAbdDrADTv3L9tcmUh1owQjr19eEJnsGZD9D45SNTzLX98rZr",
  "key19": "4nbcg6t1u5cvecU9Ro4hdpxwiMBG6bxs1bmDs8NKXDDAQMuKpUhMNVcP1cL2hy4ceqkqvavD8QjeBUZ8iZopGTvC",
  "key20": "a6ZUg5pVja8vUfYq2XGxgT7Pkn99b4C6R7p8nTGcRrud7RuJFxnu1JcoM95M77jfCz6cjwXwiNWCCKZCEdF38QQ",
  "key21": "2bFvwZdYPhDEvLp6VYrMm8UiL866Ad8ZRagUcKfKf3M4G9S3VrPRdgJKa1gYjNRQmabLXFdh4NgAWFXoWPtte2k7",
  "key22": "5PpkaeqHQ1guTHjcBSiNgAZpr7BryQjTJsujuSqrYNBVrhCaLt9Y7B88eG9GhAoMr4Wr8z8QpyumRA84KeQF1r4K",
  "key23": "3QzJiYSteNuDHBvDpj94TiuWCYXRXVgya49Z5HWP4ZfFxQxApo7Sc8LU2MrA4QZeYwHKj9tJkomoRBGNtBNqeheF",
  "key24": "4Uf2NwWcrY4P7VDFT87rrdzvTJGVCESLAgmFnmMANqeEfyaDUPDZ8enqANjaepmujFhdMwYgHyA3ipEqrCT3mMLu",
  "key25": "5o5pJfscBoYR8kJ3nGH2t7Anzy8ogjLE2gBuYtBGSt6DMYEWGsDfZKHiT3F3qz2gusqFVQKHD41wr3aTKLQKJEEE",
  "key26": "4AzbDvRcWZryFfpi7daUZfxdFXkjiTdrzMdCYqMGh6er81pdhWVT6BTqHLSZjW19UzQiZrALxeh1aC6WP4SyvR3p",
  "key27": "o5xYfjYF2tXQ3jAbKkQ2HS4U2Xzv8FULPWN4i6a3bd4s85fr6tfpKNRMrEW3a79cNRhiDvze4K6PpfLw2C4VtaV",
  "key28": "2xJdQxdSjQhNC5KKtR4VKcm6zCyHnS8mQsDq7w63VJWx9bT2AFtsciPZytBnAuUb7XuhGDdEtFKLqgdNSEqSbKPG",
  "key29": "3a9ZHBiqixpE6y1RCwaFGrXb3rJTBJpKsefLvaSfV7D3MLrWcWC1z46KTjc11J4ZdSDdq59J3uecjhBWS1wTkKWx",
  "key30": "5z58Ygrinm4DCvhVWZYCXdgg5n5Kcicc3FiYzBHr1xZjhRKsVXDHGfgyVvaiUvG4EZgukBvc8CiKJWqB19FZLB4M",
  "key31": "5msB74vJxs7K3oN2i4dp5A7Akw2sygAfLn8e2LyinsMehdyRgnAoneuTEkkpxC1vRzgZj5upbpPEexbyXHQ2V8q1",
  "key32": "NuETgoxwFWmeXwiH1Ypgvmba5rWrPpnxjyeWmnS2Leh2W9HbkrVMrRZyF5LBDtAvMn1dnXMoug2phNSYHU2hmSs",
  "key33": "2sE4PvGNNQ1jAHyrFJCJJcJ4k4LFBJhtCpWezG458L3e39z6p4FYR3Wnw1Pj3Se5KevaY3cURZmjmHUBaQCAjp6G",
  "key34": "2e3YTeX2Yc1iJaWZKsYUpV7xvGGDDWN9iE8qLRnTDjjj1Lp7zjb9ScwmxehBZaUY5zAYyvZUjuzcaocdwazCGnds",
  "key35": "qPEjdtKurttzwufqJqqSuSSvv8ry7d5VETDA52LqtUNXBiMGLdmiVLpNNAMdCUuL7N84etdAPVHE6RaZ4qpBbEr",
  "key36": "hAaScZsNtn1SiiPowCN3CDa8JcTECoGAeYUrcEUCEPxAySJdV4UtozBJrbgt7ETiK5gP74pDk5EXKxypATqYJ92",
  "key37": "3tWoBMyt5br5ryJzbDs2qvsa6GD6YySBqxAnp7JyNpTr7g6mU1YaCru8eryEw4e7mgkv1TYnGSMuBecWekZSPnji",
  "key38": "5RvRcMBHCRQ3WzK6dBXKuCLRuVuf3WjvTw6tdpxFW5gq82zrd3p9Teb2xhMBAkTBHYDpcCqQEFbAyU9o9rpXu4z7",
  "key39": "NRGeMoBad5aQKfbyrEPTByQLKP7Df74g5sUe2U3LGtLY8dk9uqWgpLpzY9zyhfbCSgtYjftRrcv4XaXtov9Mwqu",
  "key40": "2ydHfqaNns15AMQFNJE3v8CLABAdtZ4nV2EZU6SkzyqHYY8JY9zBRxG3BMbWMytu8hfM54u9XQsJMGSAWwxGnL42"
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
