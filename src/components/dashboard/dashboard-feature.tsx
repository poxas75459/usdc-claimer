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
    "KsuAQByhuppN5nDvkcJWRUBmKKvvSex1CP9jKApWV4L2cKg4BKwtnPSF3NiA7wKy92qbk2Hdmj9HVkW4mp8M2Pp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zWy8zqkvaDMtKedNcfgfrDQfHGmVRy9ciNkuescwu6y666ygFs6GykEanDSGp5pkVNZkiV9HYc4rRLiwHW7BBEf",
  "key1": "27dxMpEMn9cvZseNWnPsb7RZv9wEeTha2NzecZBhmao53uNwpw3ARbu2RbNxx5tZLJGBHJyPkrmZQGF6B495cPu6",
  "key2": "45eVkxrx6K5hBcv5rnyEnpPFNZwj8awCZwAH2ekP62nCmCiP9pooJvSNJvpqAkQuwmVzAtfcoVWDnpQrc673S9CG",
  "key3": "2SsdNMgtSEv1w72LTVQrgWJUv5LsurCdxXxaCdWox1ow1aSFcVZptwWjnhM8y4UgrvnHfhM4uLKMAmMCyvikdUTr",
  "key4": "66i2BnVwQEZ3jsopULx9282Jks1ppRiGHWDs97pU6hon3gpEsbQva5RpMZwofxQsqNUCL63aDF2h67hogLXp5xRA",
  "key5": "2CVBhXAZXLBkGhcXnxg1teTdAKW48j8ZziCLWFMMNJy1FYymnBisTKaf1NKdo9PmSsrUBDcEvBAoRpvs2gqfJqbG",
  "key6": "5anndNPzqfCjMGoAb3VKgqkSFt8UsnYEepooWha6agRqD9kWYkmQaJsGMKoaRUqKthHe1T9oHJBE6no8EsddyVsj",
  "key7": "5JhKCWCi1qtkD7pWSLHYXWmF7ncWoG39S8b1wottqShRACHoR8RJMAbbg15YtWVfEDU4NFrbYWm379omYsktG8LB",
  "key8": "3SjnAd2C2JDPXN36nHq2me1XUS9hXpMcBip9GJxGsU4yD4yKz6JyBghoJYR9a4HqKugSUfSHcLThyTW5B92zoDwp",
  "key9": "2xPpFByVnygBkV9u5ieSitJvT2h1wrXkHaZFMXRGDUgiqAHJGivDorzQXN7jgiPnrie8drCRVrFbDFMo1Ta83Ur1",
  "key10": "3FoDESRjW2iYUZCHABXy9PKDCd5cxquHumvYNhkYij8qZnSav3Y2uy6Udrecp1AgjaACUcxsTzsxpSRgyJ2FuEtg",
  "key11": "26L4o8ERDQeyQUDeZexijij4hUTEKfHfhok2Hn5K8qJJEbVuBXPQYdXFW59n3TM4VcxTj52aPkiigLj5CC2MyUYW",
  "key12": "4JNeHY3ZV2EkiCwTUFhneYndL25DnLZygSy1piTPDKZFm4zFafYoCBs697yY4d4EWrbRGNbw73z4HFCHuSpiBm4y",
  "key13": "4SSDfGS4wYdeh5UpXVbfBc3utRntkYiHz2PfiT66aUnhuZiPF2MjMYA4mbR6uu96sVomLtKJk2jdWcAxaYNwHpJQ",
  "key14": "33zbqTSpMMaVepdLv41XHMjMDiEWL3t1WZcT1J2KAeva7W8rQpfrvry4Lx2461cJnzLspefVdouHdvqk3B1SUkZE",
  "key15": "55X8SqLixwYLqhmUgrsFhQBkSHCX8NwfsjxRKDG11wPmw5YFRfQJptrvtHWPVZTXiQaSYCGNCamDCYGsZabfYxKd",
  "key16": "3PTN4xRUXKZYLoXSaBbqVTwCE3wJFRy1u98eWn94kKh9n2hgMdSB8c6se1PLKit9FCQy3LS9rhqhLwZ3rWv54L2W",
  "key17": "5UsdBMEgYLob2huHmpmqKMrQQt78dZZqrxVpTx3XNvH9BeEaGxDzi29KqoKGCPxCbv9uDqToFWUxZfCiT7yhxRjz",
  "key18": "2fAxdWiiiExfqCDgaFo9Sqp5shXy71EoMqBqHGktZgpLRb6vSYFJpQFbzFVmmNJDvnBap7psXyfZCUt5DCbRD61d",
  "key19": "3XroHRyLCh3thX4AszoLCHMo62T7BKsAdvo4Jy5UDERWii9rfPSK16wkwaBsYxEQCqM7DPisVubZNz3BCnK58d6k",
  "key20": "4JkViBY5HU5Ntphb3MQBaEJnrDL98gCg6SCA2hMWTSRRnwJCFXLYuvJnfNcGXvo6VQzGRddniWFtvqBN2hfnLeNS",
  "key21": "3a4zvLEZKfRKHbsdbfLr7XDKJd46MKhKfq96L4uK1rDanaMHahzrhxSjyWPdqmJmZ4gDphGL2HGtakg8G2ySy7Wu",
  "key22": "2hzrTNfjfPkKBg2vZfYN1NX9aje2K6mtviyBf1ub7F6nffNhLjFu27LVgajNJ57BskLrnukTNks1zQh1tVFJJHKS",
  "key23": "5ax7MxgwrHKVaSDgPtxrFSJaGk7kMzqsuKPQgMUebVzzoCLd46x52Ekb821RZzpMAiVEuXqLEeWmzNPDJq9zwB2D",
  "key24": "245Tw9vXcYaR3x3Puv2YLJQ3U68CBtM4iTzHAU1BaNRXkZcWU5WUtsh1yUrFVaar9rF6ZSPwYWFVsbubty8AojVf",
  "key25": "mDG2eQmN2tTCzYCw2ceYnw4h8vA1bsvZ43o9oBA4FpnWLUHLiWUXqLHC6naEQ2e8s4riwD2XhvBJQ6U449c1hDD",
  "key26": "2HgCJZcq1ckH8PaUhZFLfdfjxepUGpcCitPdy7mDo1SSB1UwqJuyqwpg4u1HiGctHombj19vrkcAA48XW4cJxWEE",
  "key27": "54YpT3Nnnjk7VNVQiFvtZ4e7DoV1CnrDeCpHJUj5sog79cRVCaPyxQNZ44eMKh1qP7pc8bQBFQchP5Eqhw8S3brY",
  "key28": "5HbsQK3SbXmTG4PknQ1d59BTSTF52cmoz4QtSp2xgRA4sTfZdrQbtxZiTstgS7nfVdd3mJrcxQnKvfiWvMDrKLWP",
  "key29": "2wJMKFTWqguoLU57cKzna6FsJ3SE4pHptdQ2inbphzxXjey9enPH1ujASFmt4QnGtwrhLxWbR3x1yk9tTxgHgqPY",
  "key30": "63fJhbFqBMGxzTcbqt8V1yPfTuUwydpmK9eeLdzBVHL7JVSCpPzpLV6fKjEXn9qMnFwJo94pCExhF6fRkLRkYLhS",
  "key31": "3kFjRyAStKRtte67EZzAioRxRf9eLfL7K2oW9mpEfbAHrbugxtWE17oJY52wGjhCFaj5Pv8yuZSbibCPK7Kce6gb",
  "key32": "2ujFzVT5S8zFn93jTrkgiANiQ9Kqkj4grVNQM5r6xWbRfw3SqycoeeY5i1nzpcrjEQNVzA6JVddzNBnQQgFgsEKT",
  "key33": "3JnHxTioeCLD5PuhKsoT7mYuE8pzwbXP1ZaH3FZuxkXNG1GzJYaFEmRtXNuREBdWjZzoBcTEUzz5FzDnS3K6ePr9",
  "key34": "4snyPYC3fyx3MvFJom6GfKYRw8WPrNonCWSALRS5zoCSCU2ght28ABYLBcgQeDYAYqqresJULMxXwgtyuWi2KfdU",
  "key35": "WzkpV4H12HwDrMxpJQRrdi49jGpNZbGjaMHQga4itfgMbS4qt6iFqvhKEsSP6YNkQtXoiwkaQBS8jN56amCGTec",
  "key36": "5RBV2YVngaJYqNTwvim8iEZHe58mJqDRV8jnaZ2f4ZbEqB8kjF9tTCuvyNkrv2Ho267zBj3F2i28ELi84RDAi6Cv"
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
