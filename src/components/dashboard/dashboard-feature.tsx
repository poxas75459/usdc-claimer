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
    "5LgDRQHLC1cNC6jyVK3UNELtbkRK8FCfwnhKGBbzWgvkFzr7nMCk4HJHhhAMZ9WxTk12unL6gonJHBWnCzyVxBJB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cYZERZRdsEAWYy4BkRBTzSUBx5vo3ZzSbyArqqeb3wSHvupeKGEqvWHN89gyWNEqTqhyfDUqULR2iXFf5gg2qWc",
  "key1": "41sDHhbwt1cHvAQ8iCee8J1UEve7dLVtAkKtiVFyshSM4zYpmS5cVXkziAXtTUtWrhXaCex35EKKr7uH7MgeRz3u",
  "key2": "4ekKesbro9QcKLhk7p7baDDXjAWfFrBLvc9vc1H8hxMzyn126WDwGbfVCLL77NfAQQyyG3GuFMStDfT2L5FJhrLJ",
  "key3": "bzYRq1wapeYjVpegxAk9pWaGzyBeY6kTB2DP22TuPYJd3pJG6icyxqomKTazcA3szts9mGG6stu5W8SSyCQs1ht",
  "key4": "4afV1sFCBPpnBciTz84buktKhpM2DetHHgj3bk8NdtJSxZ85HRM5fosCK9ydVd2yboDCHbR3yvGNBEFxwVTyfvYN",
  "key5": "dhMtDvxTRbZg3LeGAjCvAZViAzRxRe9mqKNCQnDqXCybpC1Zi1b5FRbr53eX8R3BEKcFCGkFtjx45s2BWUHyHh2",
  "key6": "5o9U6UQVnVmHRNm5yF521ZJyfJJuLsezBSfVRURGyvtUQ1txrM1aTUyj6ek8szBQycqGsAu1SFgKGokRNAYan3LM",
  "key7": "3qwAdNNt2J3oEBUk8kSZy2pnNJ7bP6aPUGMZtNFqS4HRjLuEWiayDYwbMbBHmVQyd7LRTV55AMBGMhphGMuq9hQn",
  "key8": "57KqkbQAoXqNaUojB8VqvLcd6Xwf25GPVUhyJ81fpmRhWwoxrbgbueUh9hBUnKDtJ2XpK7ELvXKJR1zXCUexfMnp",
  "key9": "3oTJ97Gq4CcXPMhf4GxSnDRuRBG7p2oGejuGTsb3mTxeaRqtxPAQSrhkjekFyHxzQEQdt1D5eW2LponQiZnoro4i",
  "key10": "2QXPzRcdaojmSs3fX5KKKLQHkxZMWghFmsPDd9Mxo2awLPLaeXkHbc7LqxuQYPLtn2RNY6Qp4V1JMKqhg5yaL3Us",
  "key11": "ZnyMyEnw18G7yQ6MaXDcQSETkbfDHXtWoP5gvwj1Q9G9iupb71Rwnb2VYmi8noWNVdD6CHKuvkAL2imSz9ETwRY",
  "key12": "pZmFBt8jYFDVGxNVbtA3BRvpAuwBDKYWKdNketCQezz1JufsgZn3jeHtzhMuZSGJTqurucbkQuLe2f6BhRPghSP",
  "key13": "5s5AAWrhJHwRVTqR8hxvJ9gA8w1G7Vva4o2Zhf2m8fsgoCSmg8j75jmf5SoZQggD9AGN1ieCJjZjuXsxFmeFGG5v",
  "key14": "65mV7XiW9gecsq3uGgdijqzknvPZVU9Qq9d9gvyE8Y2Bxrj51ZHM4hofSMHia3kCRkwadyEoeAtyQzLwTg2EHJ8L",
  "key15": "5TQLHyJ16zgvEXJxJaHezN3wcxYxy7x9QUMVzyz64QHRPVZhmL72PoZ8hxMJZ3omNyPAypCNo6Mh3Rx9apJZTHu5",
  "key16": "2aCanSM6JP3r5SxLcHFxz4zBSbL8VtnXLTkqstvS3SZ2qHnDDEqKrwZfguD1tVLAc9ehHKepdpzniQ6zTKox4AsM",
  "key17": "5dQoWbWfpJeK6XhJ7fCHCVYr5JK6sSDfGR3Vy7FSdhJTJDTk32zn6kyhLaPLSipkcAKFZ5FR8Gc3HhWvrtgXrdVi",
  "key18": "CnvQCnLih1Hxa5VkM8zBk9B1SBWiDEYUcnjMtreQnQYYUQWmriCNu9HxQV1MBbNud23MGJPMmxGEPzFTGupqcMX",
  "key19": "oTYUzU2J33Z1RuxxwFVW1ecXy5EmzD5r55pM6auwPKBEq69i6UEkgLwkxJPMKjJKtrcCv7LsAM9NYpsK7DomtGA",
  "key20": "5xozEmpM9VRaqGZ52yLb7N4zAM7qKzJJGJcWJRAvRoVZwaB7K9r6y5uAZKaV6tsbEH2EnrtWexW8Excn5dxgNRzr",
  "key21": "3HmPRyiQL1D4nrUFqFEpm2T9uvYVzD5zKq65vcRB9M9rEn26mFnXMF5CRqCAcqoMKNLxRffGtyL5E9FmBLRaji8f",
  "key22": "3KEpJxXaHCNWgsMJh9xWwHogUokWDsPYKuqgThYBgAfyGu3bqQbDGjxLpVjNNLZV3L1eoQAmJkYwcpBjyEis8hf5",
  "key23": "33sV2KiLuYussfTue2TFsz9bPvhKnw1SCm1feo9fwQM9VL52Ff5PkBAga6SdmV2FMSx8iNj7J18DRKPuZddTAFWV",
  "key24": "3qaySGZh3Hqnd6yBmzFmoTzSKRARK2A5BCbW4yJBEKHe3onCj9euDKNRuZ6u34rcjhYMFf35xwPbhfRVwUnvVc6U",
  "key25": "3xxSALsdsZ3mxns1kXDbcwx81a9S4pXL8czP9yyNYdDsbXCbXX1yGBVdrtHmn4EwwPJya1DqawyjFBBJRbRU75iz",
  "key26": "3CnZnfjQWGnY97LHcVrs6R6rtzB8BZ4UPUzXHQjE3GpSsedF8t66hNABKhUMZqXW5zNbTHWhD5EHEu8BzVMpTHo5",
  "key27": "5V54Fhn1XaxQAFKp67f1KFuWSbBFkqg3pCFSGiRn38z5HUbNxUx8eEu2GQJVvM1qGfJUYqZDgxN5uDWGYDgjNnD5",
  "key28": "4MYnDnpYLKYNfgQKmq7XPzwt74EYPLQ56g1TRPsD4Uzft36RJQjnHHdiZRd5N94sbETRj27tdbAfaTZdCWJPwnuM",
  "key29": "4KX6QcfG4yDibNQtnv5ywmtY45NQGX2TxznPRyQ8zzbEHAjQUj11Za4QKRu6pqEKogrVGtozA7kopR16pmZSC6tB",
  "key30": "4TQHRb8XZ1ZsdRGrCLkHJ33qKH3v3VqPyZ58dVKH8fTdYKyT6XrX92g94ChcRZieVzxUiVs7BQX3CZrYfCtigEmn",
  "key31": "4tGK47T1wMqU29HokiMNNfhrMS4Wn5GckrHTpP6eiXPzAsJDmwW7Dbk2SfmN3nvwhxQYGbp78RewX2sa2zUEPxPV",
  "key32": "nn4kaKgZzF4rK3Jq2WZzUKfEoyxPfz6WE8JqSovPHUTjc3w1q2rn72yd3b1L6HHZ8aH2WXTUxNnXYnwvsKKDy9G",
  "key33": "2cSGcg49hHUxU7n5XgJjdtjT9V6L6aCwNxzctkFPCZcMkqED7CXJjMWJFcSrkSP5C3T1fXkdK7xxpUqdFsFrkEuo",
  "key34": "34srEHuXLjN6oAkmrEN8T32wAt4Vm1CfxC3tusMTSc4qCdvcCF2Nzf4krTKXfa4TbEvSTWKNxKfFHyVibkK8E2eh",
  "key35": "5fUJcggJd7amGN17ezVCaouHYkjJqVLb3ZpkFXTCGmex7UkDWZB4GcHr9c9Y5nnS5RRTX4iz9voKTr6nRLgGcLG7",
  "key36": "wRKodTNyyqs8XTKUb5PyQ2UH1VcGUtjfhmUseGKK5ZDLZg2k5MkEsTNL2T4MzVSpibKaBTQsCyhrpnTo2WNXg56"
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
