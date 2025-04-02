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
    "2RukzYtkGkuQeALgzyQHHKgqgipG9xBoFNhithqPggaBReYWp38NuAw2VXtLA3SrSMnYHMRshfFY7svK71TuzcXg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "egwSXPkZQqaanor7PDN4zBaUcbRy8RHMgmFwqETkCuhdtwASmy39z41oguhs2hCQA5L1bcTHReV12DeqGSB75tQ",
  "key1": "65ZJSg59P2j8gWkYfVWJApdHwHADmg9jAC2KsJyiFgXkU3g2nhWJSNwF7jq9UYPivsCCibXT1JebFAHqQpdHvb9p",
  "key2": "24WsbVQ63sx8GDsNcrZyAbtzXVAV7w3sEjfMaqSrHqhXMrVDHQ1kQxKr6At2Mj312gSwNWDRTygvumFVihEbJsy5",
  "key3": "35tP85JE9vzb5bikxggs6uLSoF6dv6mcNmyEJDHtEvKVfJT813vEs6AphM6RHEJRBD8y7xvnyuZDH2AgbGCiWUtL",
  "key4": "3b6Zr1SdgK5rwcXNnVfG5rFVb9i6Cd4F4YHkxURQ5mDTBrg9R7zEF35eYYv1kmMLsYuab1GTbCBrHr8d7ksqFyqa",
  "key5": "2PsDBTUdXWRBcV2xVgXdYMivzwXfduYycuth1U7UwB6bb1niATybufwgHcyqGWT51C5UXZQ79eKPjmVDwBKr3oH2",
  "key6": "3KKLkxYDtBNVDMax2LVP6yQ45WajJu3KH5aaQ478Z8k3cqKnahYq1MRnLuRfdkbLDNhVn4pbm6kMGFgnsFEEQzYK",
  "key7": "NGyLNfnpDk45Jj5sA2iCUpZqDHa8wD7uZQfiDzQGtQBZ3XSQoWfTfeRdmprjzN7x1fCL9Y1GM9rTrzGz8rJQwso",
  "key8": "51Skz6CVu9uHSNBa8rgmpEtwWVCZQ3Mwaphq87AttPBmeQaDFQcG7coVDn1oBmAzRn2dG3RQ2twx95xK946y6QCB",
  "key9": "5Vdy6sfhHeL5wpw9jEU9T3kCN59gcwe1WtrDi3bjTfLyhKUkDpUrug8svSogY5agKwKLVRvXoGMNjxpHrQygWKmw",
  "key10": "3s8obRsxEaLNJ6ZVERk7vyyfyAC2wPHTahMEF1WBKcUnf7LbKpXhpRDYFBxpmK9DpEB1RDeXkEPx1uMGeXD9Jvme",
  "key11": "2Z7zm6WUVsFmKRPys1cQWjZPZuD5xwYbpyxbs3BcRUxF1CDdWr2Etv9J8ihpSXHQnJvvhtK67c2v94nHzmsryv4F",
  "key12": "2uhmev6xmcqpNJPADPXLb6ZY34cLxF268YJJhaRxsTfQhfM6Etm4q8reM6f2dcqgUoZ5H2D4Qsrkyg5iRzKCGkAR",
  "key13": "3fGjLBsxy8VFwBRyUG5J6Kz4NBewvAjQ3JDsrvk1LDw11qz65NbU6FBgs23qrgRBMYSdfxb3uTGVvLH39j3Jvt7A",
  "key14": "2KCtmaMsUhXrTdyuWFQxcvA3i4uAxBMvCfHJsSzVrAVPRGoysDRrWYRqFNYtLnKLDQBfa1JG1Pm4tT7Ft75Jmj9H",
  "key15": "51Wn6f3woqpkj1S6WrrpZpu9rPS76XcQowLrFVg84wtFnRWo7gqkLJDiiLBcH4dGCk8HRzEWdtnWZw2xfdVSuVxv",
  "key16": "5jXoCumWLY7aq9f2h9J4v44ufzydEyRtDufHmwxGgYTMHE8dLuhg33QyNCLrSwJAuvztsSnArq1toznAvgfQMHfJ",
  "key17": "37M8yRmJCMeX7Df71LL1zGN7p7QoPRVg7hGwBvKosiEb3sYeUzzJUudVPjhcfh67eH4AQoNpn54jMDjDVtzhUM6L",
  "key18": "2uCbkk1ws9md4VZS3FKpuWznN1phU2g1F4gFh9PyLwDgq7sU26pcFtnJ2r1gFKpxKtw3xbjZYg1yGf6qf5p7voxo",
  "key19": "5DACFRNvj3MDnTycCeFnqSeFstvEvgx8aNpbxRNSUEgxKZ3G6tr55DZT5bAZagosbCYHtpHZoDofCQBYson44BAB",
  "key20": "2qA51RFwLdnMKnMTFtSpYTqcDS8Fm7GDJnfjb12GArdRvvCCDJaPkdAuc5ftFB866cTJdhBvjpNun3at62ytP8BB",
  "key21": "4ZeWQsK64rXnQcygeBtEZbHR7DNjdRwpMZ17bQni4pPYJhRWobkoDfiRxvBnohFwdcXDLi8t5p2wHtq6ds35HNp2",
  "key22": "34Q6jjzAH4zpCWsnak9FL3cPLKGAUT5ehpoyKALfYPSBhPfVM3HjTLk431AEBLov9XdapMtyuFBjG1g9msDUKk5X",
  "key23": "3sWoyVJJHFFUEw86rJJ9wZhcMX15KSSsHdgto3kGGNoXaVfY7cCyLfdoZK9vQFiTS5PwDhkvpVDTRatbit8XT3PN",
  "key24": "BkewA2aw9iPqsjhmiBTVKXVrFx5qkcWYtGV9CWbik3ZAqq3aokdJuERF3YECFg4Dmwi282i7uB5CqDT39tXVZ7H",
  "key25": "AjAc8omyeawYLRePDZG3zMR118ApQrnHHS6q3vzzWY1jgfqkE4LNfZ9oKHu8ZWQJdgdaFF1PUZCPouCTCFQbJVn",
  "key26": "4MSVasAnwwmcJsa75AcnQ8qJd9h2EU1Wm9E5ViuxQGNGQ9zTXXK6netNsx6z2hAKJET1yFGzV949biZxTET7kUsW",
  "key27": "5BchArw2oVervEXFA2vDtzrefToh4X7hkzVhH2HRqt8z7BPALiBi9dyphTCA7czecx49CGLitAiEJNHKdJgqw5t3",
  "key28": "3pfMxRQEuzs6rHaYuaUyNmRE1fpfSe1DKX7NvJoiyL7gGH6FYDWyLtdk4jiUmnMi3RCCYWggKm3TZZgyKVgoULiD",
  "key29": "59HAn5Vf2mekGzeCa5bNazjsnRiXzgXmJY971HRP9VSxLFM7vkHrhZHr9eBAQcNDvLadU2fcQGJuKdhXRuUgJ5X2",
  "key30": "61kChZFRfzpZiocdfMra2YJm2z3cd1XwCencPjzef8pHRD6bmWmrivvyhudj75nukCtArCJVHZV3N8GhD4HNYUJ4",
  "key31": "5kt8CTJfUmzuyra8EuBMvrSYsP87c1D1rXWMp6sk7DbytrW3sAGKn29isgbh3ZLquscGoKuuNVwDcGv9rRUGwb22",
  "key32": "4hgkLVS8AziVXCQvSSPmF3jeGjsEMYjDEgJTbrevyhqqJaDmgotkw1f8VAuoTieQfdohp6J1QHoe6eGexA2PVu1s",
  "key33": "5Eym4zsMqQAd5Md8z17Zpdn8XgGNr2cQSqR8HcZd2VbYPYqgH5b4CLJUt4SiHu71r9QuiFxdi4y9MtSDGoLBkxzE",
  "key34": "2mv7K5fWEWFFhL8nCuztxs78eAiqirGfLgXNVVs4yQsrpxyuLqxMm61ijRJgzr37hZE4W3cXwQykJMF5LRR7Ur4A",
  "key35": "5oATM8gNYBh8qGQaRPs54rENXzzP66raF1BhqqtV3GBkuzozyr7tfPEZvkJG3FyQbGaLPghPQLgdkMTqex87pk7N",
  "key36": "4wizjsmqx9c1LR6EecEUSuBMhMX6ex8LuzFJrzxvbBcFV2nZiheFVkitKEz33mo979kAT4E2cAuUyyLTgGPaU7Dw"
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
