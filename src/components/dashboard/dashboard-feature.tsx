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
    "5K2mCBGcwTTbqqnBxuYgL7ea85qDRzn885WbRqoKatg3r2o7w4XL3BbWGmQzLvacBnvM3QSPuLTJi5cU9QPs3cSZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ezx4TvD7YCZd14ecJtWqQGKPgUBAmk1tjTD3toBHiJErSNKUc6cNs8h4z7BwmVp5dVZGgkBxMYM6ur2h7hSw7N7",
  "key1": "252jMAo4ZoHnZbZWPWw1Wx8nfygLrgsZiPeh7zRsv7UNwrN57A48TussifxUtbM5QJbMswFdkFhdEXi3RmRkqRJV",
  "key2": "58Rv6KqGcmbF1va2YaXYqfqBFtJeisxQPZCqNRSkgKBcLTgRsX4NcY3nKrmUzBpX5DK7fFyxk14PykvGNrc6AArM",
  "key3": "2A5MibF5YnotvcQHVoNgZnToHkEhsJMKnw1Mpq31jo3JKpGBUUUtqKeUWRejy6ZhQaqhMrUEEdoTYgeCAcfY2Y6j",
  "key4": "43zXuSaeTUp9u1yXUZTbHmJpuY25ZeKQVRrqKsbFXadfin5cUMPrJR9Zcx5uutEk2L4y6VwZNULKaWYQEZgCt5cu",
  "key5": "3ceyNfMzMhHzwT1cJDnPF19yAFPjBaYCyESEini4rU1JivUGgqoQRnNyhr7vfFEhT9hqySfLFV79j7JYP1GS9riq",
  "key6": "47mhXUFdY5WgcjWXW3dsgw4RacXKq9mUA6UEJgs27EiJxuWstTd5L7u7YhhUxBdcABs2s8GqXbifSzyUfyT5kTmM",
  "key7": "5tptWYSuvKPVBomJY4eLnqmLZS1wHqLkEMVm1NEUEWaytpGyrmHNzpXMYEAUNThncxTRG6sTH2EV4DyGnxD3Nhku",
  "key8": "ibQunpurQ7diEUEUxF5nBHYaabQ13tNbZR5eFm1ihU6mhdbzshoVtixSHFF1gr5LFkopH5XxwPi18PCLoCwRWjL",
  "key9": "2n5yPfMr2bXFKdxmtKposuiLso6jfJSkvM5jLSS3nNaCkmzhggHaBfLuAYvBkst3DXSbbcE3Zyck39rd2irZHFGf",
  "key10": "iqw79T54wmBZJKx9avXWzequuLLHnoHAEn1gjXhUsD5DsqgUMYXe1gSpqn9hZY9FaeK8EzwigQUowJUY5uTo5Jz",
  "key11": "3AnUDE25tBaG3MmsdsbMvUT9zbmganDmHF7nswLxz5rR1GjmcGv2Key8hcitKbQdjUv2Mh7wWvP8kUwgzUnaDCMt",
  "key12": "4PKzDBDDvxde2nh1pKV4qNC5UbtjDkz7ccypWUiTPRWheRLeB4D3JfrXaUNnjFQfY4k3dfHwuwREmkqBA7xUHjZ2",
  "key13": "24hRrofR72Q2hjP3xXTyraLVP2H2Lrr3tqBTuAGXN2aTMjJANLCABon4djK36K9AoXbmJUvgAmB4rwbRtX5E7Anx",
  "key14": "azeyR81KwgSAZkcdKw6MogJKTSh7WbsPE2nEHFj7kgVkPF329aH4KXsvgWmmoXVDTJV118XwCAx94BYK5fdGj2m",
  "key15": "QjwLfrMaYUSjthuUwXKq8vySWETXQgUZvYbzMtkUBUHzoQsqMRsJaRnPrRQxqDb9stY7vDgySyZf1TFk9nGZUPv",
  "key16": "AqPhrs8Guf4SWLNXdg4cbGgj4fc8kUfnnfpud4uAxD5kgGpUhvLZydGifiiSCyigu7gNFoVxUKfpRGTL27xMyse",
  "key17": "4oaZjiL2fDLKk59t5LhaHhzgsapQHAgfCKU3eGnW3cXoLT6HcYyUtGFBnsYPwj33y9h1ZehJjFNjEXQburExuCnB",
  "key18": "T7DFAgiMU2o1zK9QWNn9WwmWCpB7U9hsiTb9Xy1DTd8CEdeLYk1WyJwWFTLPq9SYfTVFfdm2WkPch2ZrZuKBuda",
  "key19": "24EMmBdsoHcEPGt9EGftWGw8gQLm9Q5AUqf9HLWPUUapdamzuCwWtugoAhzy36XTuu4wvJZ3nYQSUjmmaaP5MTT7",
  "key20": "5hVBKtyZPGeVr6FDr4KHMpZLFw18LnghuoYgkJtyAByV8oihc7rHXtep78jVv6oExgt1xVeyhNJvartAmk67pcme",
  "key21": "54beYnYU5y1AUGd6PVnjKNvgdpL9yLhW3FWW5Hker2TJCNgB1mfDv4tpobFZvFNNs8yMjk2SHjitL4KTvLiYt4xv",
  "key22": "zv5TsXX3TzG52abWJhBm4eJqFbLdsGJXT8MDFENy7byCJJhCbn3MBqyXyo32iiQy9WwaodatZJraLM2uxVkTHUo",
  "key23": "3AdxhBkJy87es5sWC9SpXafD19KyuXUj8xmVMCyQqkEEHGPxHkXnmPvRrRuxqsabTKRJHadT12x3guqcbBtUACa6",
  "key24": "2ozM68Kdp15hyDEJFCabTqJQHDEjtsWoRuDzDbTjYr2og1kxK6cyYeuT25QLn1QRQVHJD19NhbBB8Sye6y3g6X7h",
  "key25": "BDuMNcEguAmxQjKuXEmzkwGE27k5uS9yaeXVHMtVRZY7sRksoKnEqz9kTqqBYc2q7KCvkAsbne8nYg5w144WvJJ",
  "key26": "SQKLPtPLBdLta18Mr1Ba2Pc1Tmt38QcXkq3jyRSuK9fNn3BtePhr6bBBPxpW4gqe4CiA2wZhPdph5WGqD8TAApF",
  "key27": "2g4roZe4tCigqgWiWq1ZxoS8agzG9pT3VE9zfd9TpiCfei1MXsdMdgzX5mWMC6RyxwdRWYRXNXvftg8XKSrHZtx8",
  "key28": "5ukCNiqY6W8Ahx9maA6nUEWZfP8DxPDQsnyEWkkZtQumAqfN8jj1VsZeuCNYCH9yGGDvALXWALWX78UbEFmEypW9",
  "key29": "5v9rH6NZ1VUJ7anLTgBPhstu3Ece2udARbuYf7571QDisXcbVDsGzsJL7kP5iMA2XntpzneKZLa7jG3KSbaBGAnj",
  "key30": "826a6LqFf5ZaAaP7A6XYCU4UhXEfKKtRgwyvgc5Xvw5B3E18d9619eox5uBoMYnq3ynzK2Cs4wiECp8GazZXkDd",
  "key31": "rZLEbTqPh8YzmEGSS647wXBTQHN1jmBX49NJoPcHs6iFu2YpFeidM3R6njRfXt1gi17cskxK3vdprkQh9WrVxT8",
  "key32": "5yC7X7QB7X73cggEvCbfJuAZcspnPQk2aJZeV2VJVxk4Hrj2LX57KY5f4ju9JV1jZi62HeziMWj5p8xw85phaKMC",
  "key33": "gDRU4XweHNS1nr3pJSVJfYaxegTnpXY1d1XkCEa89RvPCw5PcxSTsGYSMhy5bkJEtMAQpF6Hqwzgn1juUEEv4ru",
  "key34": "3mxtz9okwY298K6maEb2uJRx7eiFWgXYr3K6VCjKsdbzfXdPKysMnEkzMfLFpRQqNPdrQfNzbrQNwvVeVUV9XVbD",
  "key35": "JFLS9yeVXGhV5v6J1WQCRyo3xVKo8HB5YhVNyBiZdEUn66wUjuzQ6Pdmao4SvDipXKdMvYP9iY1QArXitNdLcxq",
  "key36": "4VG4jtEHCUFCZf1z4c9BNeXQSguamJ4fbBkaUAX8sKP6Hsf9zj4QhH4Uai6DKgid4QvxfGdwPhWVyAwK9Tsg4eZw",
  "key37": "39C3uchBZPoeDpDjsuHisZTCNuVCwjAG5hB7y8TM21ow7FkjDWx2Z97is49UJqk3AT77xgEGdEZeic9DeJZ4EQip",
  "key38": "UYnwWtL1hB8kJw2CRL7W7mz4F6QKZaqehruA63U9Siu5rCHuoZaAX3b1TE3zzptwfjjd8wAb8xTzwsU8BAyL7zy",
  "key39": "5AMLcqtDJooE7NMWmJtkh2Us4NREhM29bBBwquJYeE3Y3SnhhCCTeyCopVt1a6pcvXW9yitZ3whVNFxvA4YGxsoj",
  "key40": "4JAVcHC6Y8Lac4Tm9RcedxVr9fGXyuQaQzPmTh33KUe6mNiRKBf8bzJsb5zhmg33piw5cyeQ2iUYxBKEGMtt34PE",
  "key41": "3SQ3QhJMGiL5xyutDksB16Gbj4L1ogwLk93AF5vt9jkaFKnoEnj7jQAsYkFiiedCusPnRUhJPhjRdshbHywdLq7f",
  "key42": "2bDVhWmzXfSJMtJVGr47tPNzXbVtFrcAziPY8NGj5Y5STrMo9NkZbs8X6B4ZNUnzBN9my5HLRxtAR8UExbMj9gCQ",
  "key43": "2gv2dbWvUG2kAbAWQ4cqKh5Cb52Tbkq4xXe486omFTkuytFBLj2b8a6difnvRdegjDF5K1mu6eCehqYcEiMJQpkY",
  "key44": "4Sm2eTLK1BXLY3dookL7HmUbjpKzPtYECKDGYjhb6gdi4TsRjmGvaam2a9riDxbMPEwpFRtVXuAwB9AjyswKtpHF",
  "key45": "Ad2joxVE5MLK65eXt75dUJEXzzATZAz6NSDdeUztUtdDCTHugtwYAj2ua7Rui7yzPEUyQ2hFZ87kxg6eKaksZdY",
  "key46": "YuSYpgtDf8ioKDwGXWk1YstgkwQ5jaNB3XQYpit3iXzQ8DUedjQR7afNc5ENvn4xMtYhSs1mexBzLZLt4LZMFXo",
  "key47": "5jdePgh3JhwK6K5owEqQRw9b18VPwSChz4sKY7z2ErGBU66d4pLqLcCfpwGrEDPCCevMg1t3du6MHLF1gHwF96kL",
  "key48": "2EC1Qm6cBnEs5eckWJxNFTjm7FhYGrvmZh1j74CucbLZJrwSKF6xDuKNUmnxS6ZCWYSfNCvkyJw6kJDS9dYXaTmF"
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
