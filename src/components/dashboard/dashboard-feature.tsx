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
    "hwf1QWP64iDxiqRfsgBvpEzGjcUtoY3RQ5RpzKEQY545JrnaWeMJc8nANqG5Y5r8PyXkhnyv4YYaDKk3QU2MAxz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MsD3xPGTxNQHuvQ7aM1x4kesBMK8a7maFChDru4NsWwEdF9n2SfXquJs9FZWFvNsAy2QgC5eiVCQgaa95RDi92R",
  "key1": "4cPM816wGd9nFTuudk7Eqvco8FPYHLucx6YWFDc9CBkZSKXb2zTRruxjM1QH5v7yPXuHJGY6KUqdfNZLkGjxL4i4",
  "key2": "2YFFhYSsBUEFi47XvBcbu632cKZk4PYpubeniPSxUzvTjxmkBjboYcZQHixYsezMzP4ekjuojJmhTJQYmig4YkgB",
  "key3": "5L5HFr2MoeFBQeZebWjNVGW2gpb6eEAw6XNspb88iY62r6SUwaDDxbjGbEdpv7ZKAdPKVkpsVM1DpZsnnRoEt31c",
  "key4": "3eMXrkkSLTG6p353s1gpTfrofH8pYbv9oo4GsMUKCAWWgpskUPg1XGS5XAWxdw3N4ckDjJLFT5PzBGZMxBw33EwQ",
  "key5": "58oiKFRvv9MVzRBAan3fzU1KFSXzfU92P5dpQHtMgBvkJG1eU1nTscVSTrMT6HJNxaADxgdF56hq1TwDSRXCtdcE",
  "key6": "WgjBm8h8DKZD2pNGde28kYVa7mYrUBuzdgxctYCH2LkYyaJNZFTChfJRGrnj2X93SSrWxAMb6YjfbSTVt9ruCT8",
  "key7": "viuN5RMq3KkR9UhhVustwcTCp4sxob46nbxUgMQeMSHsJ2wZvkrwJX9YY4wjYR811sK6GFj77DWUb1DyYTM7YWE",
  "key8": "5ApaWQvXsAH1yYsT6t62mukSteJGwFLgczXhBwUhx7HQEXio8TJ116H6HKzPW2jX19MJMPvdphNdjcwu18mjd2mL",
  "key9": "2ec46At1q1Ku29wS76N4TprBHMr4kQW3z3betm9NJ3adYten2USgKzN4XeYEqnJw5nDxeGkrYmxe7Z7yuePY7FE2",
  "key10": "gUyx1p6Z1xXPCwsmkJYkk3Lt9bLjdYM7DwqwUMsxk3syfyfnkDW4H2ptkMHE9AcZ9KwNBaAzxcoDBaQST1QAy9t",
  "key11": "3yuXEnBjVzJ3Ycq6yvyGky3Z4AKrDvKYNtUnuYTZTTttioEiq8yUj4ThisQiRiScs242PTLBvkcFxCJPuH9p1SpZ",
  "key12": "2iZR6H8E2i4WAxpBcBTaTS99zxjsSg7PE4d7fxqJEWFsshbXjm9B2gr93XfX8zm3vaDjMobdew1xVn6RvTsYkj2Z",
  "key13": "3hqeVrZU9AZ3oKqZdNZGFsWZ41eak87Wmjd6cvu3Y3UsGZFta3QKKXqc3RrC397YwyWs99LGi76fehumJtP8wWjx",
  "key14": "4M2u6vdeKGifvTJwURbxjehpcx6ng9R61m7jhsBBzFPVDpTKZE3E7KdqeZQSoRndkVUsNeB55d9Gd1y2uxtZRYLg",
  "key15": "5HVTh5HhY5u3pmjRsUevL5CtgdT4crJd317gygvrPjKBx2WLk6qetDC5iqbSxiqdAZHARgrgpt1EcF1PwUFivJK3",
  "key16": "397eL6WApN7ha6rjBHQWqsroDLmnhwdsg19gxKCuFCRnKY2EgCmQck9jQaGzPAgrSgvSF5nKw5hr3WtZ4uVLTyy9",
  "key17": "4D4QBd5DBPWmvJt8G2iVFweNX6KEBjW4WkUfbWmmb9bH3pReinWquYVceBYmN9xcTt7sdQJfzEqNj4C6V2UvTCva",
  "key18": "5YWnFyxMZRDdMXR3diLphoje1DKJm3p7yTcQ4eFKuRP5sCqTxzw9tJZ3vX8wyPeBSvph3mCZEkUeEXr4z1utJtSo",
  "key19": "2L2RCbAdLHJGHsTq87MfzYsjLWCZqqJsVtYhDUy7cAYch4v5rZawvbPxfmRc6xebKJdYZZPn4zpxQPegohpEBX3h",
  "key20": "4ZHRS5RkF1t3xKFodG3PhgMQpW5McagL9WrAqj5Fv1NnXs6uimzFqNZvJYiB4y96CEaZbB4pzDHScGCP8g7jpZaH",
  "key21": "58DC2Zc4v3EeUh4wmMK5ufSjVfJy4hLJzUznadAgUVwxMzCuzMnsVNyQ2KpVxjCnGkx1frCxrkc6WyREGg9CzUDp",
  "key22": "wu8tjdVJqyqFJEZ9fvecTnf8KCLTWQMVWDCSdm4YeM9V5E1HsaA2pvyCwa5WZzZC5r3HH3HtVAQdUKCdZbNZNo7",
  "key23": "3ZC8wLSt11bwaXbuBV7aAQ6oJLPXAEN3rhPcjJFS3PSsV9MA2q12wGs47NdF6mmW9U7vrp8GyK512UMJ5ZXKJjtF",
  "key24": "3ayWFCtgrpwbW9wqZUmWSDjMGRF9p9cEgmHdhqcP6NFxtx7X1y5WKQ4RTffjW78tCKtdaUAUT3vZrsnw12G5yoPg",
  "key25": "5APN77oFntT5vie8oFAwUzxpkFabCwKRQikozRDrFkaCjAgaHZD9emwi8JH1HRjpcUBWQCb5tYcJDx3RWCBpAvYa",
  "key26": "5bcwBffsWvaKFfkLHRhYn6MkeuZB5sWkwYUqWfvzKunTsQyxXco7zakNWefNgm2JBTU6PFr9GpNXabt8G3gnEnx8",
  "key27": "56vujQ88XSbQAXdeaRb1BgvdcX8R8vev5xhYLcH4X6ACiBRQsiu2ftbpHYVY1qMvddcJobEnGpZhmKNodFQKVJ3n",
  "key28": "wCLMLnrhKHDCN1iaLbfgcCTeZvGhhaDJaPkH8PNnTRLGgc1qK54UU7QHiVZccMMBmsbHtpiKrcAxrc53LLSHNbc",
  "key29": "2TKbhZyush3YnMn8GiyN3EYscp1sSh4XTwamF9jBrMMfuLkUF42PXXXASRPzkm7BKbTM6AvmrtF9TsdUCpUFnhuK",
  "key30": "3LsFdwQ64VpF84NcXm22LLpfZCNeri5QqsLudsbKxALf8q3peQJwLJkxFzfD29abA5kccLDft4GoMUGpFUFGtF9P",
  "key31": "4stnDtZ5mKAoMc85wY1GKmwC8Yned6EpGfT2FqAWFFh3hxsriBMmS79vvVvaciyCTzBCeYUyoc32bJMkBqCvCREn",
  "key32": "3HcEC6FY1brDYvNEsErn9SJ86igormbpgaezMz7nSJDNT6BrSNpt2tqtxwtxAcyF8Ag4868xC5Le2LbWQmGnn1yv",
  "key33": "8J3UuL2RL5ESzoTLP1TUxwFegNuuUQwfD6UN3tNzxRSNbx6wv9W33nEh2ApQusbHsFhVCcJQzLDhiAeSbJWdYyT",
  "key34": "4s6VQFYNXNBgxgrDZBeWLDoVajfBqCs5zSBUpE2tUshCtZp2JFB8hzEt9qTrJMo6oW9wf8vfQRwFfXUHutntp8BT",
  "key35": "5ejGFL7wQqnhMtLsEwa5eLDuHJBN138xoJdKjuJK42APpWBrALSDALC5c1NajBDorNTceePRDGqU7u1Xb3W6iJxE",
  "key36": "Gqsfj1RoFZcgMwZWTVUu9WMphXN8hfFxcUhjXj7inuCCVZZtWPLXExo7Nw4Ha6dsEZSRT841yDEtxBKGnB9XZE6",
  "key37": "DTMej4ZjKZohgt9azShbvBP568HqYZZ832BVv8jid1De5AGmptE94D7jtvwfTTezeK2BwwA2KaJThD26LYJchWi",
  "key38": "3fhK3qyoCxCfnnnAR8j39TBwPEGxdmhTj1DTuB6Rbep38NZ3BHj9wwaStKmqJTt3hoqD6JpLM2itPYKz6tQrqX6R",
  "key39": "2zdQAbg5518S7M2xCYYQhw8eUr9u9VijGsvJkEn1KrP2ZRAvSNH2aDatxWCTL1oBz4xdxwfxt6WBKkvvbs9JGZPz",
  "key40": "45bGK7ZqwmDW7hx9TrKeHtADSkdj56zbHM7F2EsHypXFRQCMF4ouzyCPrRcHWfPiXcgzoCgBz4zExAg9FbzfeL51",
  "key41": "37NSPYjkmEorVCVMwyDAaA5uwcy4uJJGE4wiG9v2f5QoZUKomHEaBv48Mhv2Kxy6VgTLioV4bga7QwHNqFLXDJu9",
  "key42": "5HqjjJCzxFdaYXsod3NsTUcewUwYE2YA5gBYcTmYQgavByiXWj1R6yZKNjpCoiX9P3r7yvNKoBnT1rhLmgWZpiXw",
  "key43": "33TdEoGbsxyKAxgeNrBxv8dUbW4btUhzw57Qx1ZEJgafebMcZGjEiQWarYa4SjiPvKL46Q24gaD8NaM5Eu2x7BKr",
  "key44": "3VPcfNScJZ6m63P4qiWpEhvXJgBL6V1ds5msYAV72cFCPi3FZkENJMpmwbEq8QZJA6ADa3sWb5zqWGtFAtcHqWi5",
  "key45": "7Vx3mUAeD7jW6zPUYG83JoX4R4DoQGfui7o2tsTSxX9y9aYqBTaABP134hWVRzEbYEJt58omM58TVnNruy2eu3u",
  "key46": "2ATfY81zcH49hi25xf6G5Uk3u7xF7EukpUABygWq2ETQnLNrZYPzgzJaeR1FfJv8cKSqLwuY4xM4rPicCvgyiwfG"
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
