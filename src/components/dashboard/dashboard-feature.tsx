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
    "3raxu1dNrhXuKt5wPDUnij44aijUGCt7DBowcGFLum4NXkuUD5HdPZLP2nVrsmoHi9R4qszNCLjXF3hVqTyjSBFC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2som5y4fNdA9K882cKPSvrjXz2PuKZ1FViK5ZnMEY3Vtrx3pwnSKc491xye2iNSexwQyh13ceJxm8bNqiHoTCa7A",
  "key1": "3E45EbgwFCQYe2WowZbZbufkdgpZG7xauHMbARgYWGDE3mZPo6Gmy8tMquQ5GkLv1EuzqRwpTtqotBEqjs8CFgjj",
  "key2": "5JgT8qGBa9tsbNzYms8L5udZgCdYxfAsC8uM6pEuKrsSNND8JsGZgAYRDPMqSuYbKiCVbZbsoUDi4P5X7kpwgZNZ",
  "key3": "25fqUGCvAQXXBx3BKsYJuTE21aQHEMrkFwKx4g3Jf2dys6ksZoHUUjLSQpVzk4uxJHH5Vy92cYcdDKPqTXxEVdRZ",
  "key4": "5EXbqFhDJxKpPx5XBFheDZ93uZz5FUZUGZRxhb1EdUtqhTzseAo9MZsLxvxxtDXrBGzhMaajuHWrataP5A7tviL3",
  "key5": "2NPoWovUri3y9HPVu7BArhm8zLsskzduYa8AgeN7fnQ1cu7QbmoH4PSwteFN76rK5R2rPJbje2n56szbCmiu5Gsi",
  "key6": "5xQQGBV63ZwrTBSFo1uoUftKPkZYtcTDJmQ5hwD9QjJepfns32VBc5HZfCnuzkAfn9roRQaXmEc6UEGsTDqpMf6Q",
  "key7": "VLnWvfkv79FJV9kSRgb1Tqu48CtGqmvBbcmcSpuJVLrWGdCPcfgUmGXfxwoERWpTzRy3EZFJadxpXtW31STnnRz",
  "key8": "4rAMiQMfpSCTf7nNU5yepxwVugVhyzKkgEUrjzdY18n8PS2fa2xvHcifSQbXXpLgYTfpJ3t6KhtN3ApJE5z9YxzG",
  "key9": "5mrgKV8MdPTNC3FYcssBhVcqbNG3TEiLLRhn2KJy4Kc6J4XA9JQm2XmjPVNdsLEPgvzQVDJJwBFp5vp5LyAJXVZc",
  "key10": "HwPE7iUxQvNxavx5XYJ7F39XaAoSwwEN2KcX1ajs3ZnWuGBzPdjpGr1FJ6twq7gKk7xiiEm87FWw483zrNT4oD5",
  "key11": "3KhEdg1UoVR2CYqfH4G8FGVcQzNyn3ngnoqp4MgzxMRgge2FpmDH73xA8J3KjUePuXDvNFn4zcpd66caPG5pbd5n",
  "key12": "38W8GhpnQ5Bp2FPay3AKsHaKnb6cW7nvw8Zq21QWowEhHfpEPSXYkgKkB3wtqdJYWN5abxX2rE3SHxhfjbWAr9Tu",
  "key13": "5bJeyu5H75ia4oKbGLxyHc5K57Md2KrMYUW6aYDvRk9r4XA4ohXzN9BKxnUCep27Kn1MgrCLG3M6QzJMhrtw4FGP",
  "key14": "3i28fhEik5it1BeA8FQbvmWifri2GuKB43pj9kBN6krKBqRZZje6tLHcAKR7FDjDbeJAUkbm3fKU7qibAFhdHV8J",
  "key15": "5ivDJp7up6PdYuhpYz3Ef8GGCcm3TQaNHc3JzM9QpL6mGKSkjpkNeFpzgr9H2HeYEGkxr3kUXk9BnDRjYA74Rqvk",
  "key16": "3UdvkyCYL5mcyZFD8C6ssDgNNvfBQbMArHfNZsVD41Pj9YP698azJPLq7dzHojvrVPhHa7RcYrHkdrA7c2Hodeme",
  "key17": "2JhYjDpqtcv3T2dtAyfLa348PjhhZ9zdGThMk5Nuh2j6WzmeXGJdagd1v9DTzxsmW9f46mCayUbXFdDeLfxdceUV",
  "key18": "3h3tAkt4sW2VBNDayUTi6dmDMeZ8a8vGZp1YUt3vnRw9SQ9eambTLKntF4U4CipEFtYXzd7dDwoPex5jVWGGvR4N",
  "key19": "3FHKTgg8AcLZLGbHVsGAuhFSsEqAM4uqgBbKsc2RrGTjPYjvKPXQoFT8oAFDFqY2yr397XRMyiJ65hQktkX2se3j",
  "key20": "4Dio3bKZrmU24K6gHzaDzGLQd4f7QzNQF4EHkj2QEjc2ZJ4MtpcRNmAbs8LUsA9ReDL6i9F3hs5ASEE7YnZafRrW",
  "key21": "3Vh5afD5wxohDZaYygorrdQfDSk9qTADDLgd9QZ9mbBgWAqe27b5cYk8soJ2uptjLux9nxWqgDxboP5LxHELkdYH",
  "key22": "7fPxPBNoN1VPyNWpGKw4g7NMjGYYn2427ehFcE1S4t5H3wUyhJt6EZSv2Qt9y2e3aCt3UUBPovZ4GWrzDpgkxzJ",
  "key23": "3YrKQvwYytBHNumREtPPyAwGZEong4rM2Nb18g18THqfQ4yuNJYox8kiehJmsPWcXVzg1nEo3Nix6yBPhvXeBF2E",
  "key24": "3eBZpvuesB4kDPhTu5jduQr8zv7L1ogk7A611zwGCZeHecswveE3jA7dRN4n8AHEKYjUu8SmzFwC1CZ2YRff4okd",
  "key25": "3mqwpwtnAWwksHxJ1Gb1uVEMb4fNdEwbBc7usT1iEoHXFbmZhoovhEq3JzGbBqbwahcthn8s7V7PT6W2iQE2c7q2",
  "key26": "3N5VAy6jZBkwomkhoZBwPH2hsMLRamKrJHsicWb1oE8UiLYXXAKShtNRY6YrPaBwxvLEAeDfsYEnpCCHjQxaJy8Z",
  "key27": "25BGA3ZAU5Bc5iGgNhJGvScR8jBnGyCreNimiUVY8zCmFcHDqZuX7E9kuvCScZAVZVQehLD569cC43xKeP1hPCuw",
  "key28": "3L6iMJNYES7QnQQtekiC3UEnQNdHUu3s25hMmUKz6qKhAUxdHBmpMqBBpKBHPVoMHCc45wyJdKbc2tpu6ArLSJcK",
  "key29": "5TZvuCnwCqvaNYEqJZhPxRoBFNr2EPHV4vPcmNeXacuzzA8phx1hLdoJqunH51m9HstkM4gQVQ8hAPoSkbnAajer",
  "key30": "2PAfvGE58xABY38mDeKCCbj3F7t9UARQr4h1UD9EhKhQAfZVyuzh2dQ611h4772Mx129S79C8E7Zdch1vJ35fZwJ",
  "key31": "5LgRCgfqzFn9nXvmNJbct6NDc4cCLYQwWi38td96XTrrrMV8bcmwb5R1PqWr41oaDrGWtoKN46tTb9BbpXxN1sma",
  "key32": "67EjQYjjMfozdGkbhfSvqWN35DW4Sm9KRpuDtk7LoBZPCFfns3bnGG9xEo4tAgbaXA16LsLJynu6zdK2Ls3NJBi1",
  "key33": "qyoa3qykmE1DyTE2FquBMqd1PzJCG8Df8V6EPHWEkhw7JZVGybGgQsAjk7Ww7ZSZnHzruotmu4P4BHfh4peHSTm",
  "key34": "3wFcmhEnbK4jAHAwNYVcBoTQNmJ4vDecLVG4PptbNjEWtEJdavK7W9P7xg63JDXQv2ChwdQEhqZiV9VCZutYgfbB",
  "key35": "yUpksLYjAiwcjMLcLDWxMsWKBy2qEWVAoA5HXmG1amdD2T9Jy8VGNE9mw5e2yH8YJjbfpsVnsGY5Mh9Wrcme5Wf",
  "key36": "3ashF6kn8Qzrn7Ny23aaqL3CrnNS7gamNikDdeMsNb7mbJbmPRgAdpvvsZp8BS6KUHVTbrUhjT7KoQPjRyNezaYW",
  "key37": "3beNTDQbyyKsQkz8DvSULV2sPPCJ2A1XJuepGkGNrGQmm2ep6mjJjwGSPGmxH8gmFLfXqNNp8EczCTKRvh6BfVqz",
  "key38": "28cUjB5VjGF36bt1Qwvvd1KqwGALt2n3LbCfPTaWS7YYwhS2tbnaMsqSrmjHSiPjePoEpod1XU6cWx7LHLtysKkV",
  "key39": "ronD6cPeDHsP2uSu1AA1fHs5EkSQ2whYdLGEZ4H8VKJkMPd4VfK9TWnpyVaswayMZ6xbAi3aoLZFtX4heWwfbhT",
  "key40": "3Jv198hvPBxUMZZ329SWnxixgeoZkyxLe4d97ykyYQZP44TaV9HjVDyaBphPh2Kp48iNwumzda8w1QGDwj3RW2Sp",
  "key41": "2ziVNDVUwHpvMPxX63cuECEFMoxa1GYFSuFCtoj8segbaDtvBdZToCdB94dFvnnx6s5SSDmVt5VXr7Zzn6gP3iG3",
  "key42": "5DyKv1iKCUgmhLS46Kx2wQo9K2JtRrMS4kXFGsuVPtPkCMDuJmWqLBy1rP4NbdpjFSuDewDF2EGhPxV7dTSoaBJ7"
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
