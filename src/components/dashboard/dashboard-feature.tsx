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
    "5ofC1naXjsAeTXhyhTWdtU8cyY4LcuJxgBFPGLHGEMZhzEVW6BodnFusoHg26mFVP3XiukB7zsLYE7juYHN4kj6D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SQaCqmc8NELLFsoW5sH81aAgAvipYvNFFzAMbuZMB88pUgTksi2ArKVC3TLrU1AbrN3rQVTmF6rftSXxRDUPfx8",
  "key1": "tD5nFFysRNNv4zAsnxQ9mTzXUiLnbupzMSG8HoEnLZty85xcdfP67xJQZwjkvgSSthrkLzZgaqt1jvEu2Y7u2m9",
  "key2": "wYAmuBQgo1gGTCm638ovciaVEwqKiDAGRvk24aRUwF2KcYwRfu4YS56xaYpYKnscKxJtCeE2b7jjWGK4fMTFkRg",
  "key3": "5CACC7emktqyheuEQPm2QCr4m4r6QRKGYLK3UBZABjW7nRmpn7RaQs8Vs7hJBNfauc6esbtbKnf9NpVgwb5xMism",
  "key4": "5S6HwCjp2qGjswMFAkHBQDCKbmQzmF3RRivxVuFedBzCAqmiCEESdjuyNEGFLKRDqUu5hHzjGbkp9oex4Dtq6qhT",
  "key5": "qNz13eWxdtKyurnwufk9Hjf4sMaaHVhUx6gEUXrP8iyrLaqTAS8MahC1gXv6QkG9t13CBSyMpYBy8cAVSqdgUqo",
  "key6": "4fqEeEPKBn8i2rLPq4KSM8hbXSpPWQSN7cGeYG4o9z7r8kgnrRuCS5jtby5Bcz3N3U3bHA3dbs7TMUmL1sF761UK",
  "key7": "2BbeSamcAjyhyEbv4jWrnqBb8tqHjKzMo4rgCbiDYPt8gndajc986fAfRNvT1HLrRjEsiSXwET1cuLqpiGpQEgEN",
  "key8": "3FNbhTGeC3UcfFHmWb9RpkhWmhPfB59w3Zd66aMtvKGWxfvmGhfpoHgzrdAiAJozz7MgJGYC66CVZsp3K9UFE15d",
  "key9": "5LVar8ACWBQdVzpZyYAEtNzm3cZqekxSAAjDiNMy4EFjFtNkGGArL3V7EKGZh7hAj4mchAna6CquSgadRvcF4UqL",
  "key10": "4qnxegYSKfCs589G1up6vmEwonowwGweJW8qbPzLeL2ortQkVnqpAAq8yiWEDZBLpQDca7SnyWBnwhZxBwUBUy5E",
  "key11": "48CkNEfwknErP9268kVTfWmozur62a29qDswEgQ5CwBPfunAzuar613w39rvXUTH3wuLJowu6PKWquL3tFwa6CLU",
  "key12": "4he8bAPqGigT911rbXfai7q2PqFPz8QrjV8z4ZmFa6nCWXaciNz9VF3XgX5cXjV9BmZAqwRYKv9opnU5nD4FW9p8",
  "key13": "5Yb3rutpZ8b9ZZkSdRJMAvrsi3wGQMD2CezNkjrxE4FauSecWe5xHAso7F4N39CrzjpgNGnZUbJJ8irYuF7QbWcx",
  "key14": "2iyHZjvkT63aBrpghK4vt9xMASr1s6R7qRNPNT737hnCYw9w5bKHRDnAeWznbzPfsU9GSvxB8f1LoNRQsRn7TKx6",
  "key15": "52CRJ6rqTVT6xjZb3QT4m4JW9BYHh5z5U9xctiJgCQburf1uo1ccDJsS7vrFsZ9EJkb8tLA5FbfqxrYfzCPeLDUq",
  "key16": "5GA95mSQF7fnMUk3ujiEtPcZN7Ygn9eayeXdnwcUF1RShjesHvUtUi8BkaUJZgGWkJuFpmxjy55czU4CT6Mb5rwb",
  "key17": "5qsosYStAjmYeCuLQN1nYPVPn6DRbsWyKqzzZ4kFyMG5fzGc6eotzMe13TFvHmzdkFUdbGASsBssYww5fzHnAwFJ",
  "key18": "5SPSBuaRJb3nvDdwspbd7GcDUteZHp2ufXo5mqSJUqSATcQyNTKYZY6ssEhrVC8kocLw5b83zE8LiJBQbofxgp73",
  "key19": "9VzJzhwQ3KDnHNJAxhvboKwtVziJZM1WqscHxjy9qybU3i2oFMWnvMyYpA2twXB94QistDaKAwgRw8Mwo6vZ8zE",
  "key20": "3WdcJTYynYNeAEyGeLRo3TYLijMNBdQqSsLjjys6FwV9AUTDfL6ZMpVDF1KfnH3vec1qc193P3Wf2T1Zf2hA6vyn",
  "key21": "t4uXxwBXnHHJ8GRMTu99hdsymGVMQRjhn1P9hzgcTq7HCaJa3YaSxUmenbg22EXEZK3gfMdsjiTiippTX5Qu23H",
  "key22": "2YyVLBioWgHnEs6iMi1k5414pALpmphNYT9jvySWYE3MaeWQnkZdCLavkznmD5U7Rp5NaUAS9NxHt14RW6pwEfZw",
  "key23": "cDj8MaT19dHGBDjaTDHKjH7UVowq3iAHQzaFzttU8Mw9H8dRRG7b8KPuzLNVPt6ENvqMQfGapGUmxsAdTuBz4dq",
  "key24": "2aLTMhuXzoKDMAbw7cangvMNWpxwEX3mQioFGR8M64dbg5SZiGZ9qpZkgA4X3rWv2q5oLgdUFhxrSJF4jFDTN4bJ",
  "key25": "2G6EJdSZ9NyCXa3bWZvF9Cmvk6CwHtVbi8sfwujazA9p898sVdJv2A8jdH8WExS8pgkg6XWk293BJmEmRNFyWkgr",
  "key26": "51WPBUxAD25xhEsYDe7y2U3qBcR48j8stc9DNEDhnMnZapF9mXAsqP1SoBQsVJGnSRfURnwAZfzyJfWaHVUDmNxp",
  "key27": "4iUR56U2FSjGWNHGXpFQaAsZNk3Eu5EzB1aeVRYwimVprHRuToCPHmypzsYsdiciqiVGCetzpRK76PfjSW4Qe71M",
  "key28": "5Ztmn1vm8e5SLD1TsTFVcqa8b4r4ApjvsBDivdte127gZqSFwXJYAKSYYqAukTyN8tLr2EbNz3Fu3ngJZhrz2mX8",
  "key29": "21FfaWazyvMLyvMjLMk9S6wkMtD8SroB7FSyRpPwu7sVa988TimbEpriEWypM6ZDQrv9KoUtph6JnK4uNt4X89Qv",
  "key30": "2ovKxSx5en8cADYPLQwJH8b9vf9BNYopwq5TWNUgYWrL9YsWoSoKHryFEbnXLpZX41QaP2Xv91Ev8PzpPhnZzSFG",
  "key31": "5ZQ5kzSoRBPcVxxTJLUTe54v8gyQnT9dMgL1P6FsvRFKW7ZxgzudQWryVyZP9p7bgdvYuTsZuyerGwWs3AiNy4Hv",
  "key32": "4mWJGLsvB8dyRE49dBzuk2M7QBFBmXQi3appFQ4yn5RZXEbNZhNH88mr6yWMfJJUoJF1oASzXQFW751KP8yrfouL",
  "key33": "4eB86cnVRrt1UiC5ynUL4guArHTiiw9z92h4kmASCYKtKRPPyzx4c7jbbv1qQUcF9has75FHWAVLUmj3oqeRhic1",
  "key34": "5GNsCsxD5wc4M1Ayj7yjiUX27oWfLQhHJZy4Yh5sM7LE1rGCQchTXUK2gxbRcuE2c12jCbKayU3errNJ2RLVAxJH",
  "key35": "Xt39NuAYC3xhx7Dzri8nPWzdPMaRr8i5L23eSESjADwB4wNdMV8NQ4MH1WNXMY3dXLXpExbzDhKyxLc2Bt6RetX",
  "key36": "xvnHQeNrUZvrqUntxk9X2qPsj1zsgUZTE27KwUiTM7ZYGJSvtSfwMqw244baG6hDcZ1LPdAcoHn8TSBYriefMh3",
  "key37": "PRWfMUiuR4rtSUA1taqxQkuZcWv3PbtHrDxJBG1buXWFAShKLMtFXoycgMbC5C73tDQXdjc99hyk6sDeqP6Mqh8",
  "key38": "4s36RhWpJf1EY4rgJFVvzJLGLgtDbdqvHh4XWHgymuKBjodxvXUSr9CYEMQ7BZtzmxT2vAa5HwBwVkAZ6DvAXkFh",
  "key39": "5ZFNC5YfFdP8H43aFKN2XdSyu8uoYfQtxEb3vr6CjqCdyUe5e7tEUV3yQaE2Fxod4jWGqxGqzFzBV3duZqFxxeb5",
  "key40": "FoNfQwrsdbEPqJEMwPPRbj13PiYbHvsZZXC1dn2Ls6B5LHBb2n3i7d3ToFDJ1S61buYtQUwcLeAwnKdDTvh6mw8",
  "key41": "5WP6tF3WfJhE3w7D41s8s8r77aCWetpFSUA6WtkN9WjrY8reFthyMqGMc51RRyutd72CMfAfzkYUNMfWYNUsoNCQ",
  "key42": "2a2AgCqQQ6doCLUWVGnN4wtqYiCpuKVyTFgewQ6Xv1V4Xds1cnUVNKyC1sJDmFPcp5wsQ3GnRrq7s98xLrD7cuKg",
  "key43": "4WR7FsnSUEUXYZaD1CLg5z7WompnoYTFxpYgHrH44yGNNfpo3HGMZisdvQ6NTzCmd6e4JyAAuWogVQ6KZNm16H87",
  "key44": "4WU8AcQ8sdW41b1gztrBKc3wujEKncvXNJ2oPZxg7uZZ7feeeKTovLEZe6UZbYoBYZK2qh8BfaNyJdretcFmumuP"
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
