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
    "4Q5Dkxy9pUmSHYbQtizLUdKbdPf4p5sDa4wt3Qymyp1UgENQj6rQTRxfkarm1PCcBdwmvRBoHzMRXooNKRH3Dg9V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43mFyFuJ3MyP3gqZBJSMyfkckLQYEt8f7tcCkUTfDSX2zWkUTPTLKxkS3V95xp1Ctdxg5obykXSzVE7knGKkidMx",
  "key1": "2nYp6W1F8FZbxYVBNkYpDG9k4X4mtSAkJy86s5fr8VHSFZCJJRYi3YDBdwyTnwYZjk8dAbVY9rSycFMewsQ5gQY5",
  "key2": "RNdC33QUA7kDf8qVkqAfhJSBT4pU3eZ8UqRhN75ATU4mr8ua5SEtBi3VWEtNGjYf1DPFwxbRhAM4awPqaS2SAea",
  "key3": "2w2h52d4EUuWadrfoYD1poHZke3isC8FRZGhw6M8UNLdS8rs5QbYibFTCgJBKAxcZVMC7omSqTiuTo3RhYC663F",
  "key4": "2ZyujnGrPBL5dSo4uwvVB22xy8dnGJqLbvWAtQdNenLMSuoxAEgcmUYqqYxNRX5eBUWThsnK7gu2SJ7qemx84oye",
  "key5": "4vkVBiJAQDKqUdrjdZPjSTCREsKS5eddXJTwv2scBMFqNC7yhdr7eybPVLHVUZScLm13PKDnAiQqoFZn3dcAUKiv",
  "key6": "4C4eS1pCHiozLhsWNAVvJPDPCJWSAbAuLRKA7VvGDh78cgnpVAuBeLWRe42LW2tXoTmLx9VSPpWy5JpSJykQDFA5",
  "key7": "5hqH6w5wJ1oxR54owDDoDP37xYMw421h63NfQUsEvqFGkE2eQU2uGSiNWdCmo86osysQ4ykWnt2hzs8D5y2AySuE",
  "key8": "4wMd983TLw6WAy6HrjBuxSLNGMCefwfS2NYgmXXY3QMcWoCMRHkt1EWL8eFEGWVSUA5HXbMB7Xs26dQzNeQdmwu2",
  "key9": "42W9vKtX8ZyW8knJ5aEEhZeFWGz8EPxF9BkkXRxw9gQTAiFwXqsug4VHCXD1yjHoZdA6aQLcK9QvLAiAnoxtg3E5",
  "key10": "5zfN2rCNtaHtWxg6DWG47MbXDw5zngcChmizwjxJEbFZbzQxeHq5LCL3CXkihcfGbZ5PJUsqvCPjWXSbYmptEsDA",
  "key11": "2gFMRBMrBW5p7TdrFGcBp7xKnd5cbrGq6PMSjgb759bd9ZwG2bTaKgxmFATxEWzQvWjWZanrcu3JCy8FSnxGAx3P",
  "key12": "39L94tEwFsqwemvLV674vyWK44DwbNSFzeKe9MnkjkPSV49BGWWqZDbhsoscgjHx3edTq85wTmqwiSfhoGSQHWvi",
  "key13": "4FnuU7Koq8J4qY3UqJkHu3cSKETYTs5p2L7riBWfhDVjczbiPphM1mX4aoZyv4GFELdFMJbkVLpFstfNgihNxjXP",
  "key14": "2EG8eEPPtUdNSvF6nBUsccppHgLkPbMq1xzhLGESukwYxaYm76QNY9xUxLM634YaehgCbzZeNYVFdrNpQyqGaWF8",
  "key15": "54BUw9dsKB5PxEh3BYrva1RmUHDZsC5uRpWRgM7EHDo51MbXyA6ADFLPkxbFdjA7v6aTz1QhkNgesSMT3p9J4P35",
  "key16": "HcyU2dXdohAxup4XyQikAJ1awsVhVCdXKmZGGBXWuvLHFKYXn5AQ4WikJDv7ut8YtarBGVvn7oDRUBVLvh7pnJW",
  "key17": "3YUFxuzW3JFuKpqWtB3VM53ABxj3MdNHyhqDjeYdVuo3jUQaann8zJ7G67ioR6DW4EesHd7bms844KTWmjW78fZS",
  "key18": "5A5hr7zSzrmLWkZSXS7FYpme4MhRgstJyAHT1UNGjDhhQEh13KbCTKHy6JfYfc7GVtZ67ow86878hB3YkwkA16i6",
  "key19": "39QfAr1RAtG4Ycm26nkzCXVSpS2dWsc399Bv1qfU359Xmooz9ycXBJNo2vCh2nh5TychSbfX7VciQUZ9goTyWLc2",
  "key20": "ZZYGNNYLj3HZsHVdzQQLf7mmgYSUFYKojRmDjWmHENqLkmdbLqXevC2ZV8ZaLggzrfy4VDcLF3ByrpCWwXuTtEd",
  "key21": "418SASp66RsLz2GXK6vePgwryWLVwhXW2NaGPCDd5vds1EZQL8jW7hTaBNxeBNsapRHwji2KczcPjZ2KxbupY2He",
  "key22": "5dV2M8Yiwe672YFsoYGM4bAcrAVubQUsDinWMDc5NsnQ7oKEa5nWUToZTPMvb6wV8VAQVFL5w3Ca3eZN8Zs5UoiH",
  "key23": "2KBC1ugzrb5Hyu2nHdn93nyUFAf6zxc3TbEsRnX4HTpNcsoXcWZi8SLvHHt55TQB2JJW3N35FeqhomabND2nowuQ",
  "key24": "2WivaRuNEN9HT5qTdvKLu7xWNHa8gRE534JMjV6JCZSDoUkHfycUQWstoEJ7uJxWPfRZNpbWCgvvvXvTfg7aPjZj",
  "key25": "4VqrdUhCGcFU2sziZsgMjdZFVb5Y9BZw9Q1b5zcNruRwjtukY9YqTxU66NAkNSQLeJUM8GViBzeDroHbQRjs2Vcd",
  "key26": "4fS8LdRBZBhYYWaTcUDAHtwvsDnGDLgLSg3h1E4NeiZ7hkV5HVAcHqoQdEokhxSje16hbkBkcn2rxQXk9Fsu28Mp",
  "key27": "5x2pPSuHcR3kq4PdY2qJUbUvBUKRfUZbQYZjHAqoHh1cUC4kWQ5LMBbUVfmbkaMTjY2pKVxS5gvq2tBGghbVQYac",
  "key28": "xbBGQvFgtoSfA2hWfxXVv4SuxUJPbojB2XYgUAXxuXS7R9F6PrKQoz7NcfS3JdiDeG2xoawrnBVsXKHVE7YThkp",
  "key29": "2FwvVqxWWa4khsJz3jvKYYAkEJSAqKKHySSoyKHaxjiSfMQARKRtn8QkBo8baQBo7AttCt2qWWaKikR6XRmymCoe",
  "key30": "ynJCoPjFio5bzk3zvEJzjjWVwpRgrw7Eqf1pJnUdsUeYZpawHuF4NEZZL9CEhDjjAY5WfjyrBewpMhg5ym3SiLa",
  "key31": "pNud8biEcHru3XUCnqoi6Pf8FnP2EderRsFijs31HPViofWadkR8KUaip6yg2Uh2BnsK9pG9o51cLMvAZufQkwt",
  "key32": "4zXDsFwQxt37tHa1zUfuaCc4TWvWhQ2txyWUQgtfJUXHiSZnaihyLnn3seiwSiKDyvFEx7R4UB9dq7yjoMPyMu8X",
  "key33": "46KHFufrBkDWxE8vRGBJsBDR2jMG6uxyVz6y2K2TeXaiywNrTAefoUEkZVWqbSCutKpyZZ7MY5XT9wT9KwuGdiHB",
  "key34": "QJYRYTgBRvnr1qJemgAphHN53H7qSjkfCr49c4YMHZ6rukrDzYMUwZDVJFgTDKFpzua8mjEBZZ78wJWVLasK6Zd",
  "key35": "2oNPuV6Ve2nb9UN7YCW4q1DKTZBFvKLM6VRpNAzCHqo6GHDCBuFQHZrqLPg3ubRhzc67q3VTm6taxafagtENJP8D",
  "key36": "5WPXvk5WDJYZ6tWWBJvdNxUsxJva2uHy2pXJa9RDGRkc4U9AU9DTdwQEZiFSYVFD8Qrmd1bj8QgT48VwbkP6ENJb",
  "key37": "5ciRFZV9TCvyHFKNoXNrFzHKzU7mJAetWfSyFktRwsQfJuHJEbxULVyB8zrvCXu7ko7QcuKoXDqcdJkyH9muJfnC",
  "key38": "4qGpDPXftmddQfiH18ydXXaJG2PuMSZG3LcmsdF1muNgMWzTHtZ6jPtdXvpRB7TSDSqbs9m7ohCfkXgumdKVRHdf",
  "key39": "54iewriFvT8aYay8zV4h1Um4F4V7hjcYaez7nDnh32mB4WuPKMpoxvWDSRiqMLwZC9QmkzNaFBzVrSjcP3GdBAYt",
  "key40": "3Rk4yYKFkLs2kp8KjLaJCeTu1tuoEeZgbFJQyyetYrnmggYRnTo9eh7RjreJ4AC6nrRofLRX4kvCpDh1giufMKY",
  "key41": "2ZifXRjvTBHvm6e5cQRbW5eCaAwoK6ecYRWf4pCakf9YD5Gn5XC2s1cpdq5TYzv7JnDB7wWwbEHNA6N8axLPfdkQ"
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
