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
    "3iaCfimztPHPMCY5AfQhdoUH7i2nwjHc1KsKu5Y52icyS7zxFgiEb2x2AA2xYueyjt562ZFn9ADPJedQzvcj6vWx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kjhsJQAu4JMP4viMbUW7riPR8SKsenPBtg8hnxmjgatxa2wtf1imEkoPYk7musERnJfFirj1gEveQQSG1ZCiewp",
  "key1": "XRToBpViBgJn6UeKFLvUESrLLqDtUymPE963NzKKw2arR5WwwDc93P4rtyn64YkWAaTA9DNYBnLgMJGbrczubk3",
  "key2": "4xKzHNYtm3dqwn58xzM1371BqhLfzTCwxdWELb9NoSZNHx1Udu7GCk4uM5cx2nKkgZh7tbMjeyv2MkFup6JZT68j",
  "key3": "46PVZB2X8LF6fSRH4UPQsv2PUNX14JoRqfjFRkJGwPmYxhWgrs22bb1yGdffq21wqrz2mznkQF4jAUmMK8E8AGAi",
  "key4": "3E95bCGyXnpsHGvGsJxz79tajwdmxfZyqyaHSHCcZp9yRcqheiSKAHBatmTKeJ7MnbHb6brUknQu8iMPaQ3bhq1P",
  "key5": "4QxFNksZLDCovEBxmmhxn6E5qQFrCgEeKhTA9mKRkvEiR8tzPw9cu3btfYbbaQC5RYzLy6aye3joBQfNGRt3sYH5",
  "key6": "zA29eS8uTs5UrFyA4yoxMG65fJ8w68v7mdJYCdPiyTrb2372xAAtGouutP2xv6AtxJgCroLiSWmDcZUhWdHGYWv",
  "key7": "3c3Pgp1saR9joghBqU9SrXDRWEUHZEYwb1hAg48m6XxgvtQ9ESfbVvz4mSVgWSggzQvmkKikrx5psJ5qay8q42dr",
  "key8": "oWytHjBy1iCpdvwqWstP735CNuoWXRVQsnFRKavEGa7r41MGAp5ALFw6YahNTZM8H44J8PtHnhoxH2WX5jSURFL",
  "key9": "HkUAarDAppXUbNZWfY5m2CmAKxSXSKZhDwNhiFsXjTKY1qW3qcD6gUhy4ucFPtyaBsRKu4kDrgp1YLiiHDfg4bd",
  "key10": "4UtFGoPHFWznvpZte5Q1f5iAvoTTD5W2TvK51ojQQYt8Dt6zRuL3iBJ4B5mSw1HJDGqPiq2rk2FbhvP67g8m4cYs",
  "key11": "2xP6JHZfYwsiSAT9aar51RpdzFvtca9uP7bjC8ta8723sNHtWTieQEWXZiPWZdwDviFsdbhZTzVPvFwvhnJxQtng",
  "key12": "54YoBkSC45HqAQE6KdFdznDMv3BHySjXRFKtd1QQpymPzPnJAaukNeNrrrbRdUu7oBWa9TAhMdbhAuvSAQyEFLYe",
  "key13": "637Fo3LzxWL7KPzWQ7ppbZopFjzEHe9rJRabxRLfRQxPDWFviL3UL6LjYyxzmVftAzagZHVnBSwubBHwK4vUupSe",
  "key14": "4xYJhy95ZFzqSHvMJY7QDdyys9d3fpKqdGCnW31pgNmAdfhqsPeyXu7vhaDPPndvXZMbfj9xuaa6eSTb8qo4GsVz",
  "key15": "3bBbMPEMwFN6SX9RWSZpiHfzEG8vztP8dRNkBkCgUHEo1inMv2DppZVCuKGBkvyM93MdgNKzU3dMFTx1ShF5D5S8",
  "key16": "4Nd9CRV3M9dzeDZtoeS1bTvEBAvUmcr9E1FZn7XeGNWZKZkrcSUYBiGPbsxx7CshF6zv9cEGs2zVimKuD4j7dLJC",
  "key17": "4jSdaPcWrwnYapcB8bkpwaMjt7LXkT1wVENTJRBkqM2Jh5fAiFtLtVXhWEjafukNLqmGud1rEYVGm2Kwp11LLjwV",
  "key18": "4rE7W9sCA7r3yfAdcVZLb2wz88wvwLNyrcw21VS69jgBxHrzmx4yXkDfRKSi9X4d8nY2ePfbV5K1kH3vP8fNAN65",
  "key19": "4vNCngygb1syhFbbWqxGHk1FjauW9kDfiTzgeRF8k4j3B6i329i1yvibK3NtW3yShSdi2g9txqA9RWHzg6Eib6F4",
  "key20": "5RHA6xRhGyzM1rM89rYhj69r9sbxW1QrM3y3B1sQiHedSeHkNTRUtMzoM4VXPUSEid47vwmWasxbRuFuBpfYNNzr",
  "key21": "3Aqz5PSUHyy8EejosYa6sYWminsQjMKJeA7cauGpYkntx8DVwiHzattmKWTHaQT64Jvow6TH9vooS8D8eQf8K5TH",
  "key22": "2eVaXEGqgUdvzrcnyAmNuGsw8mXHXbjdoNpFdGcQWp6nge9FrozE6ByAbBvVGDt1zZwqbvmFHbqYmaUJQ1X5TCm8",
  "key23": "4RVxn3LX43EdvD3adZHCvFiN3EK3pFX5tVGwwqrvFzDNAkjcsniiL1hUSMZdL96Q9e9SJxaRtQtc5tNZZYp324t7",
  "key24": "2aGio2oTGdfoTADbxxadk3uqcMRxj8X7Rvdj9VnEHZuE1vjaQKWySe1Eq7M8nFPFKmKjqUXWjrbPFdoUefaiJDo4",
  "key25": "2wN6YeoMrh5eMBFGwAjNoTXoUBXLysTqdf8tCKS4SRvy5rC8oBp4Yu4Psxo5AtbDrofr6PfYSMeosSWsd715uyQG",
  "key26": "Cvhj2hiffZUvMdd1LEp4woNeqknVsF812LQhqvJB1UXiNBE8vedCJG8MEqCDfeerrdLT4mEUrQrn1PxxuSg4vSh",
  "key27": "x2vFkQfvmHSLaRyJBXjKwMvNyaqpU2jpRemj46eYxuFf8NiPyc9s5KpsLCPdMzHsZQFnwPkiLK9FfYK6Qpsh9c5",
  "key28": "2zRbDGjtbyTmUGjXXV1ZAqi6GUwXQCYA9s23tMFcsQZGShGSp4wNDnd6FSeXE6EXixEhwoFL8X7a4gwSNKK2ovP5",
  "key29": "5RA7bgWmcTuN1mZaFXUweVnTF3NUh9ebs3YDfbVNg8fVJ5YT3hTPUpGUGNg5P7X8x1fZ9jzWzmqbrvhVzuqYktQR",
  "key30": "5aUiMqyYMkocZDziJMYJkmFXjKoqfnjzNrQr2K52v6D1fupFZXtkm2pbeH1dxL5fjK2HiFLGv2SNosLiTs4hQVTK",
  "key31": "pFg74fSbMVxzeyXixqZdGhyK3GvCCgt5ECVkKomd5pxDCGhxMk15FSe8fQRYkpuxToTDwJHF96gyf1Z3tLzySJR",
  "key32": "nQxaPW8yzKLGnGRAWCM4NjNVDSXxt6BcJDWDW4ocUr86zAPuT86iKA2BZ5zwj4oMHN8xN12hVojzZzwXCSa8GRP",
  "key33": "38xvQw3phXg5ddMJmtXsWMuC3HkNEsCtTkEKyyrZYUGx9Cwpbo2ooSKaijAvrEhvbVexXqEbyCpFVHuEnyKwwdX7",
  "key34": "uS57TbbXrVe6SbULr5fcGhdNWfgh5xL8Vu61XXngFJrVWpHE8iHPAJGLEUmJy9vavQcav7f2Vv3mCf6aA3LKRHq",
  "key35": "RQnuv7FbCkb7MLvxpYm2BungHETK29bbg3Kq2QAQeSRbGPtW3TyjiKCRfeTk32BmBDoQ67cXpHJm8PKkM1oEC7G"
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
