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
    "4fyx5YyLffTYkxDAPeDRPTVEVV6sPERVXWJdwGaJ7jjjBC21bkYYZhEYaGuBJ3ZLNwEDjQToKjggBg54iijLY2MB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LVNWB2VXyrYYzvE7c1Czt4ofXJfuQi6N63m1c7YvYgm5Ez5jfaScrYzKdLWcepogJLZKXciKBx3AwFjDXqeGM4r",
  "key1": "5JZJrrLi7DXKHLEKoEbRmQz3VjhqQvcBuNqjz3qyUWmpENCei822ejMmvrVm3ZgEkKSrNuHcyjjNBNtTZn45nbrp",
  "key2": "2cDEuRVDhRXdffuKZVXThpUGaY4azSSPCvd4Sg19CgEXwfNqkHQxYPpDf1G2VPJSdBTXRYVxgvnpevt8UJmRmBHn",
  "key3": "31diDKLBNdPwzf6NK88MGwoEFxVCzWcvMenNb8UkneCJAJp4Fpy9Yv7KnFPUwciFA6Vt9MyerGchYAhA7uPAYkKr",
  "key4": "5tLqWYRNcM2MbkM9BHWA3SuPHWoLXUtL1nJjX2MgRQoaS2HdfPXSNsBDU6A6H66H5QUrnUf2b3SbFZHDuiz4C5Nz",
  "key5": "46MDfeq58UoDw3ZQCfaqfGoY8oPDf1RBitktCgTGHEcSBCyL6PExYACJtbHUG2MGTgxGmuZunDgvPEFP3Pxp8s5G",
  "key6": "5iocPbaE6kiKcxVJiFRRSuYuoYsvzgmZHiLtRmBYmMvHPE59pUGnfajeWhNWmkdAB9vDe6zMkYnn9de51Cdkqgt9",
  "key7": "5P2Z9Uqs5988zyo4vi3YDXaKY6WNHE3YuRPzPb5bDYTYUhEwWNfS6WGSeSx79HXdBqvQCxm9GodjdezJ5qf9PKa9",
  "key8": "5fgcaYQrMoFJuTfih5UainnyBgYrERbHEmnNUzb3PnmNihUbTAEqPSETXLvs1r6BaNY12QpBvAwJZ6M3LZBYMgTS",
  "key9": "43SLXKw3cLCuiGXvTpsQ3CMVes7MqyR9NcfESoN62SMtWtB926Erw5Dxt4hT6Jr8TwwJMGxAaKh5MPtsGHpC2zCs",
  "key10": "5PZx9rKvDwgw9um4GRiBfXTP8LyN9Zcje2YDdQWEb3k1DxZMEn8Eu6vHjhz8D9UgYPSS9q2JdDMa2gm1i7jFsFko",
  "key11": "3U57arjfLHRhrXc8NaUWSa5xQsr9vnZEXEdXw5oXJeo5Z7fSgW3nd2AgiNzQLXTMdStiQZwRahFtK4cRvadthZs4",
  "key12": "h6xhGfd4J5K3Vgi5KRrssfCapG9mk5n9tAN784d2a3XTEtLTuwuWxvL5kFzFYAFDKiTx9KPHzGw7G3L6yfDZTuG",
  "key13": "2Uisoindz17sdHarUhcpaNahm3tbo7ZSdLC5DeR2q9ppoFTV62dpnqpsvgrb5b9bL2Wphsz6ybXG7cizYyGwbdzo",
  "key14": "5wrJWVRUJKfcQVKfCWeMBM7nr2zFEqtYjyFd8VCa9rEEGucUMysy1WKJBpccWZ6pYCgbRQaD2S6gFWG3Q9meGSVW",
  "key15": "mGJTmU5q4iy1sLrLMv1XyqxivpTqCANGYDjk6ibeaYNicM5ALRRttsLVr926dQPPKAtegS8qHs1HpBXwvuVgA9G",
  "key16": "sLSL2TDFzBHFXWxzLQn9jDp9D2QeocNwX6dA7Dw2zCKZ6zoEHX9mmm7HCCQdWMsrmwsxprgQK3vcGPKSvmz7NfG",
  "key17": "5wXuuLh8yn7sW7NvuMby7GNptzdEFWyLn5Ez52SEa9hNHTq5yxrNcBnRquF3B9aNJDw23GgvhKy4JtQRDpXFwezP",
  "key18": "63VRkqH5RGXMoL2w4zz4KbqR6H1e8nCVdu3ehehZmrkVy7syZ1pLqCo1MjvjqpEq6i9sSwHrYNdPzXV9yE5HYLVm",
  "key19": "5DmirhvqHcqH86qYHAPFWRjHtsuvWBRoMgFRKhWdEMEjF7x4sw8SA5kZnBoMiDDzin4CPJj7FBrW2qbUWCirexQY",
  "key20": "3ho4NyDiaNa8SUhCyS4SdWuzrpBVx4KAVJyR1M3UnXdz41MUiwh57nzC5VVmzLdp4CbFeENkBmacMwSMAKGp457p",
  "key21": "x6VC6piQzUpeB382JmPwo6dJ5NzW4AwBMdzdLJPHrExidHZggh5MxZ1mzmmjNMmn1frwLipzHtYUkT4RjYwWf37",
  "key22": "qFvbcM9NWqVHz4cFcuQNTme1e1TNadHmcxcwN8GErFKkxYekKgbp7AJohYpvjmRLCWvKTfQBTpFAvkkmUno9RKz",
  "key23": "5dqyipbhdcxZMkBMhqzo46sao5Jgh6H6o7dvZdvovfQMWk9UE73qHpxp5bQD2gLK3VrhkLKgrSQ65rZG6sL7rwdp",
  "key24": "3Y6HMgFFGeiHZCHNXwpSi6uhBRhkoGPYgFw6tmoRDYxK7nzqPDe5icSvC9qCHSaH1d8T3f35QYFozyjP8kqbUyNt",
  "key25": "3s8jEaofhczVhkC9RCN9Ha2TCbrs4GTUt2rpc2Pff5dDCEVQnePYEbnth2GGZhNffDUJhbVrEypbNkJAUnmV6iPH",
  "key26": "3MM5KShC8ARbXvSNicKbGyrm3gx3zL6xy5DrYXupki1QL9XaqEtXkn6hX3LWMSZrNgsvfJfpn9Cs2zAjcqE5PUub",
  "key27": "48BkcWB1op1fynd4nBbZSw6x87Qnbg6JA9yjwCwjaYdKtKg7PUw6aZWeqkC7g4TBJSGPgXKLybS8YWygr77mqq8j",
  "key28": "2MkRm6jSdypP4TPgwNWCXbbrkSCNMgo7pLEcqvWBvaNWLafsTgssp88L5tmfFAgfQzhQ19g8gxaU17LXNp756ftr",
  "key29": "49S4gdXaYt9hVd8rrRGZykEALG4B8RjSFkeoWDUhDKND1UgEFavC9CVBSHyH5Y7ag3GFTLinU2PSbLudFzvw3J7C",
  "key30": "2mb6U5r7B6M4sxScPwGfGDEFm3gG6zHo2dhGJP12uBeqvTK2yLCpB5PNP8cxrPKdKcjaFYr8DWr1yRnNufa5egxv",
  "key31": "5LZTrehJBZJ3ZHksYw1bL7pewHR3akSiW6rW5vLDfssmPdnj9KQ75gRmJQiipwjyZ6bj2vMSPMpcxuCQqywEogQ4",
  "key32": "32eSGx89iTX9Twibq2iiPPa177TpzbNm8Yb8FrNUoVBc4JqMyLZWT9HpHK1hZxRQHCX1AJu4rPfM3AnygKmSYdpT",
  "key33": "55h6ivQX1zRa5VDdiBH52YrGY2ATasG5p3QTigSVenGAfS6nfZJfqJzWMquFBg7aeN28vAe46A3fEvX6WY3obsYZ",
  "key34": "Gky317zyeYki1GCDqZn85Y7fzwCQJGibW2qxhx4ZZu7wDZKXxiwXBCucqPqf9BWpaZPngZo3SrGVJ8YA7WpUyqu",
  "key35": "5wmkYBV2kx6GgbBgnV2QiFrcNwiQAoMhzg2aWjubUu4j47U7Cc9t38PdjEmqxxjNjFdw1vogc4JXLa1wRG7TbcSQ",
  "key36": "2wnKD3giwdkFVNiajohFcgd52k6HWG4SvRqCFcs6aRcXpjJ3YsPLG2TKTHYCR2PYAvAmPG89urQRhrDNM8Ne3Mz9"
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
