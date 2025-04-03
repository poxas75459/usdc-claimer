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
    "2gxmCy9VPwrA9HCwVrm9QjrxctXhpqfifyhJsp3hyzvWUL13hXwszaXKUrZ1XWmmgbgsY6pNjP5oGAtcFjVtGpLa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FNvxXoD7Cvh37xNfTu6HsjV363RT47CBh5ARHCrrPfyETiZxa7kyPxjwz49Q8Push6fTqd9wP29KTsZAqYWh89s",
  "key1": "5VSA5va3b6749zKkKmgRXHJ4NxXfUNc8FhuwyTcJxBq4BsLVwPs74UQVE3KQyPGPBxqTB2HpG8ctSfavdAmZVXZT",
  "key2": "4kxdta1wVaGmoh8CjywsrBZ8wWG8nDR7UC7rsvCWrARXKHomaNzY1V7cw1u7fAqKFmzUJWqwsDNLG2E5iGvjqNPi",
  "key3": "2vMJcRoddiQt7HSo2i3P19ju1DmsRKe1xWuHhD4ia83B3xF9myos9VLChVfRNzh6RuP7zHJ3bYG1YBfbupeH9yhN",
  "key4": "2m6arQZMwScsEQ4eBXSJTAWe2ZBmM1kJrLbhge7z6L7mPSXAAd6rVs2biiLWAznshhbJ4XxkfcY11m5hEWfiVgd7",
  "key5": "FrNNeLvgTgf4kCQRPtPxNYyaEnbVq6nNLs1p6U5HbpW4A2wRZFTQzYpfPAwzUWN8nmz7nm8jSWizJkr152KqFck",
  "key6": "25UBLTXQn8gVj4XvAQaKfSoAdUARepuNRhJMEeNEBvZDuwd91nZYr5umvbFShgMQ44W4u4mDwwHjdSggvaw8tXN4",
  "key7": "3WjbGkRhLXbGcNu34WWGWT83TiyPwvz523witjbqcwom7T9frBsEUX16qidgRTdK52sUfuKtjicW8TnPhc3AWReH",
  "key8": "3VTKQ57eL2QHVhw3WsfbjCYDs4vMg66sTsxSTopG133PvMAsJVHCK8d6UzhmAc5AZVMirPxVUHEYFA5uZQ9x7vaD",
  "key9": "211CeSo7Ytq4kiVY5qHiCjRDFgNospbzk2KjjioFveBXZ26bQWupqnm5CrRT7NQUJF8a52UeAhZtU5fX8riJy8wh",
  "key10": "3XmKouXnDcAXfTjrR7cUsabyGcFQeVvDy7vkbXZS7UmbhaQeVqBYSHPTHvw8NEbUTfdboTGVEHbTBtSm6TNiYe7K",
  "key11": "5Rd8DmtTYG9mGt3NNK6doZXdv9cnxjVHT1xyr8rfRi3LE8SVwGnwz7LYaCL7fzE2TsNTp3HGrFQhAwmz9vEQrfRG",
  "key12": "4hEYM9jvYXD2gDZsgWFKWjNy24giU4sFCBpgixDu7xHpUiPrjuLdkWTbT8qofxLR1uKP6v4p3H4RM1a73cTHFV8i",
  "key13": "4p7f8gxoFbRaVeBrKKZBtao8mx8wL9RPiZs9aUcJotZhKhaRHdCJMhbmSdtJ5v7iSCuDi8ZKrofo9M4dZALCRF74",
  "key14": "4aeJ3RdzzXDx194oNSq7df98doJQUeXnzS3qwjB8fq3kC3AmA1L1ySyrYiDndo7Ti4Hk7WqT8M29Ls6ySwQHs4P4",
  "key15": "45BoiXD7GtxD7pE2VvyDGyhHUJ4w8tVHStVukr7RxnhyDYzYSoPjFfiqbEatXVtBscbJZm8WfgTrA38LxhXSS4m8",
  "key16": "5YvJemBsMiEYHMjYN1s88FACT2MjkQGDL6HstedN75Um1JvgY7SaeCBK9hxqwX5QZNPHLV9ue1bDRUeguy1Yoytc",
  "key17": "3GHxQc5CC2aU8bNMvKsLSYkxp8PeGAdoRwDNYd2kATGDkZriLXXchjmkQwjf7CGJnjGJTehb6cyb3ZbFMCgQ3Nto",
  "key18": "2maJu6xu4yCLeSnj2E7XyckzGnmirADXsd9q5kA2uaNM6e2cLcGHKwMwVMAGcdYQzCr2eQazijuLvmVgmvrHrv23",
  "key19": "29fHHnmfX48rwtZf8YWaZmYzEcx4kmKJPk9uNgxKHXBaLAtFz4wt8kGp9ioqBScezmWccR6jjepKqVPsCfTypNYS",
  "key20": "3T667U5X6iq9HE2D1xXuDB6GJEHoFzyN6VQh6VPf4estmXWcfhRYZVaMJ2BDd6bBXFsumtqR3yNLMP6mJzcwEGca",
  "key21": "5ocVtt963ko6At8ehxjUjzAp2wZnhqtasA5pzm4XHhn7mtBwVtuwqs7xZZUTxUpXYpdoMqLHNaGBuZBZBCSRe4Tk",
  "key22": "3kwENwoPuCFbH8m3L4CCVS7WrHCYp4YtpjsJmVXnQmFTZs9umAtbj8P45VJu3P7rwdmh4cAhanuEPxibyLLSWwfQ",
  "key23": "75LxoaRYTp7SRKiwEFgpubavtZxdwLdZbHxJQf4XKTKWeZuyAkzXj5E4qocqNucY4HKqncT6RdHnGn37cUrVoEQ",
  "key24": "3yv2Y9516CaGVb195KZvkaznGLuRzHoyYLJr3T7azn5wSsD458VydBQcF7b7hv2QKapeqpo25satipLEcBs9khmd",
  "key25": "4NDSwvqrFhHgwdTTDnepWSNfnWVL1ymLn1uXwZjXG2Pu8yQHtUjsXHgAd64FHpywnoFbQ4iEG6ci98xHJ3E2nfZP",
  "key26": "QCSRvDLHUEHhQTaFJQe4czsh3gMacjGu9EfN7gd2WTqSWxvzQYBQj8KXMgsd42roDTC3Cs2G6G1zC8U43McVjnc",
  "key27": "3uRBXmGgK8t9WWeWBqnRiUjs7aeiEyuaeaQe1XncLQv4HxXPvLC5jNmLBmkqMnRt5gkFqgmPTxFuYnP7RFBKrTDa",
  "key28": "248GNmHWaM8cYoCb2VMnMfVSVDhMXWrRzMN2kEA9ixZzXP6Sz1DAYvijM25Vb5g5L3XDYxpxAVZhnKznJAr8PPqB",
  "key29": "nJP7KYUANYwvXuzMZC1kn9ENiYqMYyHRV8kGXPfGSjxvaKgEJvDBaygR6TdZAZzc7VHjhZ1mxkRMZ4R5qyCD9gb",
  "key30": "4e7M7upc5hUuwvJXDik74ZyKJ66x1iMzD6V8FC2eUbNVubWqwXtpMNHi24XLj8iRXNtc1LET9XGmrNtXgvXrXLAL",
  "key31": "34FNnRE5juSRUMifA2SVrzDMWAuG9jW6u7s2kcJCpZK5FZTjwkvRjNwg6X3WaK23pzxxaFwESszrbBuZHi3ivvF9",
  "key32": "3aiRcGLNjrDGVfZvJFLBvcsb8kRJVP3BsfoW92sfvtxw4fzLc7ehxNKcwAk5QeYE7nJJSUH8ajyR644Ev5vHdYLF",
  "key33": "4zoxDR3DyxyMYLePn1rVMovF8TxSqWK6G2URtzZLr2dRnsXAYy3rYgNEhTvMwqhXASgQmCq4FSGcXtGhLnMpSo3p",
  "key34": "2dApuoLYeeYK2oEMY7aEcGe8c5Hs2Fi6fkk1rYsW3P7JfACJ3gxgpzkRuFgt9z43Er4q1cU7FqdTZHg7YA3Hyz4C",
  "key35": "2D8m7Te9vXAgbDSsE5o7EztAkWcgU4Aifjmyr9aHEMF9uEX3jdeYDwXnjwL5fKzwWVQRrZijjynzT9S2eJ2N63Ye",
  "key36": "6nxW3wqGDDNjwm244R1A5RSXnYv3eB9hiraXUyAEU31TkoukY7cpn3h2e6dwkNznoyjottuHp8qj7LCoaYNcbbE",
  "key37": "2px9eQn5XduMnsuVGouGEyRJp7Y1YuzrHvdnb5NR11Q1uRPVNMwQ4MT3ZkrBxE6XnjBxv4zg88DbFtP6qx6VMTw5",
  "key38": "wakfu13Z2LwZBgghA4yr4hhMNNdfcJFV94MFxV3JUuZ5QL2xUicZda2KQAsv2ETqaHxg6AqGN2JNDtZBxsbjLmA",
  "key39": "4zu4zkHkY5CYAjz74YGWAFdorRaVxYbxkZZDaZHs1xSWAS3iiPbh1CNt1zRM528yENsUSPiKVTwjhNnS4Vuj3grE",
  "key40": "2RbuEYcZZuisGg2dGnGh2Qndj7BumBYF7oSFyw1FhGk5MdJWG8Sdj7wm336z6d3zDPhQzenDycUCYr8he7qbCgdG",
  "key41": "5EvBJGYi1Mhimf8j8gQngSqUL4cRHXQMd4HoqEjUETvXxV9jA7WZaymuJs5sbKUNQFbs115dJjWH925Gy2BmiZqD",
  "key42": "3gFwp95tL9TpigtCaWp1cEhbKEpPQKFSsGdSQRA5sVGBxa2ESNkNTxuaYTBQucMHzUSAAi6d4CYakJfq9RMkV92G",
  "key43": "cWbiLQfTBuNMmo4px99WW7RRz4s3AncDKh4X1QNPDWrcBDMg2BgKesokw15ZwA8ykwyezcmmYqPNsTr9ReRowjZ"
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
