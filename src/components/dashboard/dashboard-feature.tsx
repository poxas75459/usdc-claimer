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
    "bJtH9hu4iqcVAaHyBxtPnPdyuKBocjsYv3KBx2zGd2kvLCDFupAq9KdJusRbXtw6Bgv1Q91LwocXYY5megv3BEp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B1frGQ8LLfUj3pCNmLVVyYbvtFqiUsmLHCJn2WPC7NHdjxgPGxr3JErnMmPNdAfAgGD2zcityptTpCznDY4uTZZ",
  "key1": "3akZ5QXxaD9UP5vip5hrVMV9wKFLTGDG5fKgus4NsxevZLhxWwAYS9Sq8NRWkzjVYfadrJeuU8FEF4ZGQYnHQChH",
  "key2": "4RvMSUsDQX2E221Z5i8U7AMyfA7bW3NhZ62QUtovSX1cJtVkwzkBHrqCRTFrCUPGe2kLiVR4SqNphB4hYTAeck4r",
  "key3": "2y9y5xvwsETySHndCPM4S71bYSNDK5o5hQ4uegmkXVPuy5t1WZ64EXby4qVMnWuhr4vYVHABoVFH14u7fEr5HgXy",
  "key4": "5eVi9VwbwdgRwadzNR1b8EGmMFrt6t7PCxURdQPCvPZj15FXQv7s9nJj5L7MHToQMeccmJhg6wCSdUygNjf18EHb",
  "key5": "3WPXjqi2xJptN1rDiBecP53MbW4u6xRMzELUkAPTSJ4WQGdybkZTD3tgXvpwqqFewFfmkJiG8itqnFFdmR9R2tzm",
  "key6": "5FQiunJruEqDhmXQLVsfxepTveGAidK8bssfNUQQkvrWa5ZK3XNsRMix5sC5HHtKSxivzXJbWou4hZ5gPYRB8Nie",
  "key7": "2aD81HjQXxFEnSVwpu9V88s64EVVkB5dkdNCcY9CUf4X1RSnTJPRAhxLUMoTHFXam11h9hHN8GDkz13qsuCaRmVw",
  "key8": "AhoiQQeDDecBFwTe3xXtJojh7yCLAU8MrDzuwkf88RNkkKZ5Pm3D44uJew8gXzbJs8Dai8yDocgnoDuiNkhfjey",
  "key9": "4HbesuYwDKhkuqhRdnzPefbCJjZhe8x76YRfFC1WJCHX8QKsXwMJAa5QfSBiQL7GJYTkX7JTBnCxtTxQQcPrUL6i",
  "key10": "3jzh9Hfv3bfKufWJYaN1D4vnqtdTCpib4raTAPRHLKYGmC1V6Svcjhmc17a6Sc8NVDGnKvERoDRaQTLfh4Mn3FL7",
  "key11": "4wxf9fjPcqSUstZQh1QJ5pQVtKNB275w64PhBAFf4UE2t8VepsvBgtLUCv3B194nAFiA5m4HyvmzjaXHsC178g81",
  "key12": "2dHy4ZwGtt2Ccbq4v4tmnpSXbnUpn389t9TLuDFLWDqpfqRNJqWfQrd2LoAtSGB9B9Q2P5tuLaisCBQpjxHUmyVV",
  "key13": "2bU1Q7o5xibKrYKNupUPxZzTX1PkPMhMAAQscxywkRYHdZFUaxMYMwA7oPBdNmXmZj28efn4n4oopfmj9uQ11S6x",
  "key14": "2DxTSPjH7LRKQKvVtDxLyLD1jb2fyB8eCqHHon9QLhTmVMD5V1yudjnjXCFKpsULVpyvwuG1vjtK883AyQpc9mzR",
  "key15": "3avm6kKwx9EY4zHqR4mNY1F3i2z5EWuBAaW6tyHUgFFL21r7HWoBtc3G9gfLiEnEXinzmqrkjAykdqQBRRtLsHqM",
  "key16": "33HeTTbbAMKUfM29dv3eH5N7RUYHydiFGDTpretTTDPQwNWxZtpesmgF3GdDBTDYMfznBhUd9WDeAg62A1GufMwC",
  "key17": "49DnyB3QKuZwobvGuArXMtfkPM4NK38u8RoEBsd13hD5yQaSCVzqjsMfZk62x9mWbrFrPnFAHzyBxTsdruWp4nYR",
  "key18": "3d5qWf3Rt92jkdZ4UP13MNvKS3bmUZ7Ppt4AwL13aBLavmh2SSkF1rsa4XPMWWHnBDRHP6z523pzjTuNo6JDxSYC",
  "key19": "E9Qofe2vp1jvTLpsbHugmyer6aCuysPhciv1H6jqYY7xEUtePR8uJVSu1y9hUz4Fd7RAaresh8csdn8zDkxctS6",
  "key20": "2DUnW6vCyia8qnqcwRVU5zJFacyEibDG669RJQFknGFWb2ttp2mtQsPbhxUAWzAx8tVvvybJB8YF9MWDhgyyoKJa",
  "key21": "4ZSXdFx3pcJtTtMUaeuHfpt8NG2ii2T5bQrTdnVKJ3ciWC83kEgkHUFaf6zNkg5K4AZibhDQoqkeFJ8uATCbPFaw",
  "key22": "4aLtJAxW2EJFPZshm7ZYQUiVCJ4Mq2WZLkeoyeRG9nJFDQrdG7my3PdENBQ765PZhahSK3Vbe2CTmhPNfbgi5CN2",
  "key23": "54jEADWQxSNUruejwPDfm1BAJtBsoPtSRC97gWNikvVQembvSvSeLb127kEC2hzdJfMXUbnafpcr69qW7nVBmcp5",
  "key24": "2cywTf4oRrwgoxk44dy5eAQbESNWHadCmodnk8yUMaPZQWRemegc2dxhtvyqf2gsQJNtzTqoNX97uWk2bhNQR4n1",
  "key25": "3BJLomLbWZppuGgPz9orb2VQqDvmX2jD8D1gGikPEATWcG6Q6WE2pLPMUoQ7agQQDcsQUw1dwBGXbN5MTVbKESUL",
  "key26": "dWN5qjafWEeLcMvkFEz7MWZXAeLSkWnjNSLwP2LcU6d8jsaakMbViuX8AhhgpHy7f4WqSCoG1Tu2ZZ9Gyzjir8X"
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
