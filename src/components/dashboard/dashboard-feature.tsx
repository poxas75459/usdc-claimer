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
    "5J5NL8JLKSmHxxWGdH73E4vJmncAfRE6xv9PFR2U465PDnLLeBzYvv4ph8nLrpcsQiPZgjrykPKtcD1zDwuge2jk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z9pLBKG7ubN7cjwcLmmCuTHWjyP2JbX9UX7v8fLu3tCuT4z3CUuWmsfpubhWuHBrJPbLK5kwk7Mjnq8jW2uaW3m",
  "key1": "3Ju5MLjVBS2xdVXapib1ZeZcYjfWig2gDU9bpJhNUfwCTqiR2RPAwk8mDjRSsu8cjGbiVcq6q1QhBmzkYDBjN4UD",
  "key2": "aoYNpgyRqYoa6angzLF7buGFa69i2EbfUqZ9trSmk838aoeBU1nas19UU9WFrwcCsNTsQ5kVdTNdu3hmLcWjnRy",
  "key3": "379vMuSnkMu5y1F2V6MQKFBGUhzeDimHPdZAsAMPCaQJRdpHQwAwVPLmLgv7RGAsvkvuwR7iq2w9fn18cgjS14RS",
  "key4": "6DQUWMTjTXdoEjiaUCgSC9zv47zjLJbCVAojeguCUd8aU2a1cTUssYnBS22EHvgGHvEa2iX2QURWg8tu3eDiPwF",
  "key5": "2NtqTQcpgaKzAo9CYZgmyujLBUF79XRcBeDdFAmz9pduiFxpyK9ARoc5A861r7tA5yuwPP7xTPpBRidR2nUnPEJB",
  "key6": "46Sv2YWt4VPDxtNb47ZkU4TdgbTGDLSp537AJ9KXDiz9TByfNpq4fXzd1UKhDEXV2F63bnvfwdnc4eecy5fiNixP",
  "key7": "xQVbDrseJrC9xQmPJFYtETWoWTAKZz4aYQDfL8PZp9MGqueyv2PmH5WwTGKA7AGpVKBfzzXzdQRSdXNekVz5juH",
  "key8": "5WkbqX3at24x25GRqxfUbxZTmFhcStxYgrDcHhbE3ozTb6s99EnXwh6DHH5RBueP3JERLYG5bv5dKJc77a2uPDF5",
  "key9": "F5ByE7MK1Te3QyJSEZ7PyF8Csh8MyMDChCm6mRrsSD9jr54JKD5VM2wmUPiehBxEbyJYGiVmJoMEQLgyiiDKsX3",
  "key10": "5JosBasxVXrxSQKwrMZVaosWh7uqwTxdm6qrHWpVVHbAHSLBG1XpiQQR8E16XX82vMhvMdjjcrrF37FahwNBJq4f",
  "key11": "2LeSgxqzJyyRJeBjZwGonjTgMPokQNvZzDsJ7XWN5iWiRYUJ8MGz8CUa3mo9P6fgrWtJFULGSVQ3LUPTaAbeWM5t",
  "key12": "3Mnsoj2Tf8jAEvzyfeeJAoRFv4FKJ4UfkyvW45tKxMErb17sDxeFzzJUjrSdkApBtUvdCCkLh6EMn3CY8dJhe8fM",
  "key13": "5cKQLvy2qwFMifrZWxi9TnrMrhdwBUpHuryV9o5izaEL8it6HaQ88bJ3oXTMwtp18a8i2G7AjX3sbpGARbEeNQJB",
  "key14": "DUHpvgjucNsp3z2XbKQdDkrSULDufk9PUvVDNzbX4jUEmQ3XjFiJeVp1dFzcBCmbtn3EMvvdHFmPMZ62Cb3y3S3",
  "key15": "4fi8XqtVjjDEjvoNkEGg14vT6yNBAFbYaFbYtbC6NFbCYSeK32gAcfGVDU2yiAYDnMXPkTB8D9w4nWC4ovkgaT1R",
  "key16": "5K69G1MT8WztGPgit97YEgLacxYsy1vm1rTTnUfztPi2W3QuaqPJLZ1R4U8NPbKXHbbTm9Rub9pxvrGYfPz2T7kV",
  "key17": "43M1QGuR9zjmcf1AguArZgsE6HnPUFrrZJiexuR1AfPWX1KTNW4sB4paT5GXJjeRApnKQVMArHhP7HoDXgc2M7Ba",
  "key18": "36HXnzymnuWhqTPCTJWRFwQ3NerfW38UojsVEBysNKgcqAWVCYD4TsZtx2Te7UmRVxMqd5CiNxjhKp5gBZPTtC3J",
  "key19": "3aw8ekbP8LN7778JwWuc6EEHwkAi34HaXcEtVBJCBkYRy4mH2kRA1SbJk8VGPSNzcySJUy9XvxakmgPAG1xJxzVx",
  "key20": "5xuY3tnjGcpA8qK2kG6qEAnzwNWocaXtCJqjC2u9oDxjXiBEnj4hPeSRdtVWgr4oe34AGUw4YP2TCqQL4JHfvzPT",
  "key21": "3rNWmYkqEJyTkgnKDmzqt7CcEQddSxJntixt6xsDqP9prqbAkASaQKiWvt6mFzD2js7aZXcxVXdvKzYrNRnztQVV",
  "key22": "9PvQZAQN9evngf9TH8zxSKbbDG25fNDN4eJipGY1zNpvpaGwvk4ZzWuAfQY5LVVBUbnb7HvKBWJx2Y8TKAt2NUg",
  "key23": "4C3ZcJaKj4FgGTUEGVnyo9srSZEE7NRdBnZHYjWjQkJ9cyaP4bYtaWRp2gH3uydW3SU5ztCyGAeEEkzRZxsZmqqu",
  "key24": "3443wV1YTrwiwrEQi1apLghwaRK9F66vMRUjqu8DR7q7anLTorpeNeBDKQW9uHEASg3DUVcoByzMS5Ttt8V6zY9J",
  "key25": "ceHLCk4MJ3RFApipKo9WK1jgjBaJbACLJpwRoGRB2ZrMXX4nKT2XkR7wfSBWcjiqfcLzhHFuxuS2q4sw7CjGPgm",
  "key26": "4TSc4NDCAifiSycEJobAtXiopBGLzskjdoyMGQwAa5aSvhh859AhVQHakdMJMruqCNjZBJhuae2Ei3YPjokE8XDe",
  "key27": "5qhNfDonfFUivd32xyhCuhiKdrBJZk4ryMDQsgRWrwzJx8e1JVZc7P2h9UMEWcypmZrYkYv4gQHBfj6qzEjHBSev",
  "key28": "5g7n1ucP1PTMKfgcLvvS8gMdTa794Yyij9RefEw14YqCkasfwk6wo7i7pRJSiC3HCTjbKCxBzu7wDLvhkYTehHxN",
  "key29": "545uPrT3FwdiLzeMpLw1HtUcD5nFVGgZXvq1K71Wpi8ML9p7JwexCbGG8w6fDh8hbRpEdAn37B1ZYu3bChLFs7uf",
  "key30": "5bBwUysPmn2jmp7CKKuNJer7wYoDMxmDVttYZwqhZH2m3nyLgxcHHDbZusuABxgwaephMJm5DjdUpjPVK3tDowuX",
  "key31": "f2g516nbH8CxypQgEHNovnJtinQh2N5juatwhEB7ndRgzTfHXKcuPFTSFcDiZ28VSwwXZ58TUcU3FQS43MdqD7M",
  "key32": "4fFmn7xgrBye8NikbbWdrYMg8v3nsZRC7k8ReGp79bJTuzqfGCy9X23QvrP3apybc9d8nTbFyk7FR6caVr7Cbp51",
  "key33": "2eUehaTYk6n7VKgdQmoDMFWdTnDWZ9PpBYDuat3psXuQ2kyd8uDje3karD1xycpF8Nv4Z6LpAA4nxNfwBzxJD6a2",
  "key34": "pPgMYZQuz5qGbjQTdxesUvDXJUYW99XDEkgVPUYeKCZtJBmAoFjYfbaCLPWLgFN2ZKgE7f3ABCb8f4oBVYnHaBS",
  "key35": "34QF1VQX7RgdCUzowHAckz7Vggoqqiceo86rG42pLxMf5v9oRMYimw3o3roME57vpSioxwfjVmGH1Gs6rHVySNzZ",
  "key36": "3zU4JgtvKT8XQF8MPntHc7wTzfUxwPSyb5FL3HKg11TDYXMEnPvPvJmprtfVKbc9phUA51rYPahsBnErqQPgFGnN",
  "key37": "64Q6StdxMzXESk3iCzU61jJ3uRNpWA5QbUz1kMd6aQevZE96s5N7AvGiQzjPjqRqouq3YZdVejvAtjqw1bPC3Dgx",
  "key38": "3ECF6gwYsmVhtazJb38kPhRUHiCqc8NxPPmSSKU4QKoDXHzwNNXaK9JKReWGaYdVoMdntsnJ3bZJKkucDhgqKBrg",
  "key39": "3bTHnqdESwvgPXFQteFdoZe7hJVdg85va2eLWwpACobh78Uv6MDXrxFjzxdLtns2dC8hnBcfVJrRp2zM7bR2uriL",
  "key40": "3Va2iNEu4HdbtmRS1krwApnXbCdgznYhk4CJM6n4wBbSVdZAbvLCjup213NYjz31AHpcm5jkLV687SbUbyMtKMUN",
  "key41": "26bMjvQkKtKwoaecc2vdhTv8g8Y54y67quwo3snQBmcLngjtThf5pBdKCWqQTBJUhczbNxj9uBdnaZAYhrQ5xWV2",
  "key42": "2ZEJZ8LAGbFHAgWpi26zdqtXUT7ZqYGu8uvPC2oFhLAZeZtR3bxtoTpaUmNaKiFt9wqEHKkNfAeMzNTRHd6LXiJd",
  "key43": "3h7Bc589XUn5UD6fBZ5MKLC63pmemaZPbnNcf8urYpJopVNENkHCsqwxEdDek8Uvm766SnmJSUfg5yShNxRvmbwj",
  "key44": "5JcQLutKuSWo6WC14oR3BSR7kq6uhdLGU6M6fFjhoD6vrqxrzPgvVmACGFZJ3UGeu18o1tgdjsaaGPrfSujrncEu",
  "key45": "2Rve5tUpH6TQYqDGmQfRpEVd4WRGLAcC5oB1KAKK9jnc6dCDiiYZZ2cYZmntsaQ45hATBdraq4tYtzXYao8r82tJ",
  "key46": "4pz8xCMNbhznSd6YrxUhZm5xwjhxpk7L5eWNmnRrbyHe3GyNrvjeYLJHiBkCyitZ7aJ5wdij7NvPLHCABsHeYFkD",
  "key47": "2Bd4E1MeZBCik28tXwa36vZk9m3sBbQ5jrMp5SUnSQzzdF8p4EkHEHBSPzpqyvAdKKT7cccpr7cz2sctVgBttJ8W",
  "key48": "5PE1hqS1s2CXuynxm1mft24SeQoyGn2ThfTWyY9oJRhRB7h66GF8Scjkh7L8F11zys7BFjNbsWuYJqeEQjchQrdS"
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
