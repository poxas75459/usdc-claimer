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
    "4ETnwU6FPy8ztmxCFYtCFk1pLRTNoQyZAAxUbxXduzHvQVUCk2Q4TLa7zoudyVhDuMnQo998xETq4GhVj9DrTam6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23E2NESChBGmYZdzamEQ8v7Wm47CHqd2n3bZVzPhDKnLBTs5EdSvsHzJXrEWChzEmyoZ2k88m7TS2NNnhwWdx5nh",
  "key1": "5NxYYoYXVWmhUUi56BAwHSGcr9Ckue5mFgkHcp6LmYkzu4BQ7qn6u4rfiZvxTYrkLTgMMnYxMfRmXJ6nY3qvAd5",
  "key2": "hMdmeey8GPbzrNur8thzBJUjVYuT3r3EZxUTxBMSgkTvFTEUTMaHdNXkN4nXyibraeBv46BAUw75TKPceg3kfsB",
  "key3": "4Sntgyr4adCJLK5t8dVRxMnLexA2G1var8DyTNYTCDq2d4g83NDGxJCfc4BuUX3vC1oR4UdXFjzoEkQ9qspiGLpR",
  "key4": "TuDD84RLpZG32ybR7oijD8xHR8tHvXHdscks1HRDxT624H7Mq51rzywwGMbd71Rx1tYqMGPpSMeva7fJbDEwV9i",
  "key5": "38wvcUzVtyc8vNreQgyS1DgtE1yuRHCSgQof9JC23yrS5QQAjyQm26YyY9jW5GnyS7LK99kcBiBEHv2SfTC6vKYE",
  "key6": "4MBVn4iaBsCJon914n9cgYBvMCDRLTuQ6wE8i7H3dDrbPSTtKHVuDaH35ug8Pu5xpwRpjtaQKqjHoiNGee6Y57qk",
  "key7": "3ZwPnKJCGNb29yKBFRAjsztLyENupnp2T9iLQESdztoACVuVTQcuMzVoZW2VYnFaj3QV8WGTYWE7pDMs8Usu2a7P",
  "key8": "43MTeToK7cGn3HYiv8JZ7Hqt2P3bD3R29HRKac12QiunYjkNrnRBQCCgwWeYZH6QNY72ByGgqVgTu8tkjmfATk22",
  "key9": "38RBEjj7wfWMDLYRqBCwXAijMzQbSJisGUcBBNegPtDZBTbq4CeHRaEGirNtniLbf2pMFNMBebLE1rjYCACbjeka",
  "key10": "BfnjvaqQ8EgNm3HNfFRf4yJvSSsKVoqhpSU5JmXm8E29U3MFr7jbpDRcehwDZ7r3fPM4BANa5858PMt7QAZLSKL",
  "key11": "5KtppKctYhs5UAVDEv9YrwoyKFMdQi2Vmv9F1PuvoXSWnqX3CUn5t16QaWDJmk3teuhwSHWn7AZf2CtfnMvrGAZs",
  "key12": "4L9Sp7m5FaxTLMo7oBsU8vJAEf6M9sNmJCcfYimBZEMM2dwoXqxhAX6DU2yqDxJAxZC4eMcNAAsEzEhEHeFooV8m",
  "key13": "b25uRDvwMrKH4WkrakNzWH8izrFAjN4zfvfstaokSBmwfWszg2CjrfBSHLRk3GSvbuK8EqvGQeNQocnte9TxMCT",
  "key14": "VwhfL9Lp8HynTSY7dssBqx2q1ftvaVLpfSKWxd1xcFWyK7edaf1VuwwvxGzDnf6VbN7x3dbx7j6AqKRejBJFLqw",
  "key15": "41pVhePxYUbun1LdxLBqrazHJiXNJn9kAzsZ8GjqdhTFG7n8DWJQcsgcqr4rWYHCP6tmfsfQ4cHcCp7mpVp7vmrZ",
  "key16": "qYRM2MuTahWXn91DMC1umJf943Fcm1iAXAJyaiKXzJCC3S8syXMBxfhpnQSi4CxnB1MmmyMxZSxH27a91b2f5sd",
  "key17": "4SEU13roXoVACWymCbCc9ESZor7REiwX3i5v1eE4kWGNN6Y3q4gQs8wL8sLPyYDSmM7vgzDWDUju6tuh7MAPzhw",
  "key18": "4t7FN1wv2pphuToC9tXxvde35XpkNroMoNc71tShR7Xxifsd5xrskfTQnztHC26bb8MRicjw46engqm7iTiRzWZg",
  "key19": "5fFeJBDwXqHSRhihYCKPF5kpTmed37EAqtUhgCjSNYW6SP1mLJTYxeiPVmkpqQwfxhZhvjseANkWqVdYpji1XUhV",
  "key20": "2PUdXpML46CC9GsJGRHAsNeXsUnapBYqSmsQgXh4T145FY3Nu2Q7mGi9b7YRc9vZApzGzjoD5oxtwhgACaeunf78",
  "key21": "5LnRVqRhDh6rzPmFUKmGeizCcEfcuKgQ5idGMKU3HG62gQrhADwawm49b8jFKB3SH9pcQww1YLg9AkVTKbz7hgWv",
  "key22": "4qwNdoJ4zqi2auF2TdrNL7uttu398jPnJQV7KKTfXswd23er8ML5n2F6z9Aat3LfrkJCskFDDUSeVmFoetoPmKjR",
  "key23": "3EScW6bqMyW7Uo6ojKpMUyNkS9qWUQ5fWwqc5DELhwV592XrDibv9BCQAB8Na7GPJkEKp2YGYLB6FJuPFZCCfSjU",
  "key24": "27HTPau4cVrxfvzAd5W6fgReTwxGnLJXisNoL7GV1negngnSHsGdxKmuan7XprJdE3A3b544XRSeqwTC457Ediqx",
  "key25": "5TRC3UCqZxGDVoH5Qx8FpY7zCknYNPPHsrLUKNehhyHcGVCc6ztfbDg9MmjtGLniBivKgdB4Q59giuNceEyfukua",
  "key26": "5qPcUdo1STQyxKRn1zLNiCvMEaxk8Caw6vu9NEdUzLWxpFwnRGoWQUTAKudBKohi8pW9u4pDsnE9mQa6nqwQmcB2",
  "key27": "2ydZ9UmbtCPgWMJZVExyUt2jTWmJUMuJ6Cpb42nztQu8pTmVRQVcfbfLmExsPBHbjjoY5tYZBTiABADwbgYjgc4v",
  "key28": "37k8VKAdwvrhN3QfugZa5Kgjur4Do7cmVDe5WNXfJio1bwFWy1yu1aZVFnvad8tLXx5DniHScp2yevNbg58cFLHt",
  "key29": "5umssQXcru3tsUsXm5BS3goQcZqzyCd2McQrUJX3hA72Pth7Rrq9djYNmBaRRg2Bjj1bgJBuvcike95fR5LPffqZ",
  "key30": "rGV5p3py9QaFhZSeVy4LTSxCh5pxLD9LNqnbZ9NCwuVRRMv2xXFTqjAoU6FaZHh1vEEbPbJUSisza6MNZn5aNbB",
  "key31": "XatuetinC6yfs6VHJGYLBbqAcrwR7CiitoZwarTdM7PJmFVLw8REBzN128PFJTW9sLCcd6DwsAgCgCyzUqm1Gci",
  "key32": "2Unyh1jeCLDSF4doAUb5XpmPsnw4Q2p37asvBxs1ZCNZCtuebRfedCqyiUG54uCQtFZoAThP92pu9kK7NZCtZHhc",
  "key33": "4hghdeu5y9QjKP6PZWAF8GExc17vd4VUmTpfXBoSNqom94D5dpi53d2hrdDHqGp8dhrVmczQghvYTEXyvYRkP7oG",
  "key34": "294m7EikwnzPPp9PPJ1erhYW4e99J7eY3ggphQGbn4UMc93Kw2DhYCvw93Vp2cNDKTUqf29foL3DWyVsDE5NZsYT",
  "key35": "3sLzqH7YQHo3Fa7gsKCbhpYtF35ZySHiLo7RE5GAw2yKEXAgQrhYq7ppKJdPVvgJ24hXzBuXUsX5g72jWegzGWhy",
  "key36": "2xu8RwiD6fydv5uRzrBDoTrKXCPsBYD5DW22WDfJVPz2n61crVghfDvs1yLG8QXnbPcUwRqhThXSbaVKCWqQuai1",
  "key37": "3KHwSQDbNzZ7fo98dTtc1hw6e3BSmyVLdwCDjbRaWFBUc6qygzdAocVZoRdE2XvSPtKm1EPY46jnyWGysg4HkYp1",
  "key38": "9vJdD4AGMr3nwbPKwnoW5vMj37UjfB1SiUipmbAKFKX4aDgswUuoUyHnM7C6ZaHpNBDqmAeZY4GFbdXGEcQQ7LH"
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
