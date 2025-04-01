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
    "52Ty7MSD4xV86cyX6DP35E57FAmJVEh1f5N9xAtBbPwDzSvpZs8JRNLkVWxgJYSXNjzSAgBB3JxeUE9Qpq3Tj9Sz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hFejidqtdPw623gohCFWUDZiL272z83GqHtrdjSin3rkznbLUcvLuzUCHgAg9EeQck5euviBuB1m4P5mWgkVKKh",
  "key1": "5xJSUsiXnCH5ZpignzCjHE1RR8jMKdBUWVXnJtys3TzAFmRiq1iCS9AnwKyTwh2QsmCrn8cHYXCdAYR21p7kTN3T",
  "key2": "43da6h7MjgLCdwiSGVRRGnkTHEDRSpVXtZGXfq77qZnzJ7JFMsXCaHWPx8dpSUx9zyBt4c6ryaF3Erg7eEUhTqEJ",
  "key3": "41TLUN6r82YaibmtpSCh9kurwRBLVmxaDtXZEG6p41fiKt3z58uvQHMPruqkwNdmLqrxz3qVrBYQtMuFK9EoQohU",
  "key4": "47EuBpjingDXo7ZuvgXE6EbdJuiUsoyMEhndu4zv3Hsx1AC3TaCC7EpLqVCXNTrKfxpaQNqh4vJokmeJ7vGWdQzE",
  "key5": "nhicR7HGvM45VKKNDrygmKigSjACmUW8xeN8naZdBHNDsg4Gse6HbwGpUcmtQqgw3HoSTqBW6mX9xykUoXFjd5S",
  "key6": "4zkHtj3aQxs8XZob2kkqDjk68RQ1T1dy6QFHp85KfjKHPendsa3QEHJQdMRDwYPVgWpr9YgURoEQ2nzrkrYqfAMm",
  "key7": "3z8BA7qGhzuRt5jtWhDVf2De8ZbmydjpEFBT6yZJY4bfABK5guDnMqTXQAkcDiW92bqDQaeezq4Yfpkx432o3gT6",
  "key8": "3CZjiPVMs1rESgkJDCuMZvAcYyv3x6zuhLmvhAUF1eevNQsxjbLBsUmnNPa6G3evphUxXLcZs11PH7Gw59uaK8VK",
  "key9": "568rt2c7uEyZhawWFFiTXkNdfs3FnZWzRdC3sUkZv8ZhaAJbzWzxgBafUu6sp2zsNcKTrK5hL8fW5vXQV6X33tJ2",
  "key10": "mLmX99e6dvvHjwHsSuHDLfN4u4r4j2aoKSbdSQX1prZ6fEwF3sgBd6Z1Bm5ZyRY7SqV7ptA2EabXYC2QQKCi7r2",
  "key11": "nLxnYTF8xQC9DL9vZX6CFE5EgXxzESkrTX6jdoZrBNf8XjFccmX32W4fEDAAL62icjcQwrENhsvsojTYjAzmiaR",
  "key12": "41TzrYgHZE5SJ3s1QNndQxGtnhcfUtK86zaU9q3HE7CmgPPjvv1oYwUGYPVcV3tHRPV42BqbUoH86GUJ4MabAvcv",
  "key13": "3Xve9bZbYxjYGW4HXzL9mY3DXFP2dLGnUHTg6NwBdappV2U7fh8m8bM1CUknVEFVdckUrLeqpdQeuWGR8JtdohSX",
  "key14": "4BDcUHmATT78avQEKAvPK56geL8LtP18NNNapFibfC62kvQUVN62GJakmTDEF1hS2zmmHt58aWQBzPRVMqRzJ9CX",
  "key15": "3Md8X1EqVHmvpdpgUAP4gu3o67TVdvfYmVFHLL5Q2uYLbC5UwFZzcb5oYzimDQZ58Tms5FwgSUsXCuEsoh89wtYx",
  "key16": "4fLJNpzFUPpvLUdCKRko14JH9gNKavTEH2uicB1C1vUZhnkBYXJxGA3sscHLsdqEwZuB7jsUmEXU1Kfr9CuvnFee",
  "key17": "3BssXQMZyEmGik31pMk1EmrZFYgehTgjM1FPowPFEmS3KAPY4Mhrt6EfKKoB8bNsTXycVrCRcXZAu3X7KvpxSVSv",
  "key18": "34qVUTrhgE29bongPt4kRbGyvvZVMjPt9mdkaLYocoZkx9bunmpQnJrpcMeyNxmLPjD6RrY6xVbP8rnsHGb3b1c9",
  "key19": "26c3L7kDvg7Gw4TY3SCaJf741Hj8ebprCr94oX1f6mYXjHfF9oxAzV2rD4bhyfPSQQiZ7rpoR8cHquLKBGCWn3bP",
  "key20": "31y4WJnTG7qnm7RXzF2k97Psh8qbxPjcFpbeXHV7hDgYwUdBisG9RFEyVwCNFmeUAjtBVXxMtBU88rrScRxzeCtq",
  "key21": "63hiBftz1cDC1cVtkensEuebyYNLm4YHsFByzDTqm1xog9GTtziz43PkxmJMYVnXszUp5RDScRDEfqWtFE6aAWev",
  "key22": "w9opFir1AQCknsv28SNGtcznsiPNyKSXgbrzqZ9R2TtYuoGxZERqYBE8WUQAdj5cYcBb5yu2hjA5Ns3DKbunHxV",
  "key23": "63HqhyHNVKjr3YmmbnzgrNmTjP6y4Y1wWu9uYmdAeuEbdbt8UgCSvbT4QJ2UVqRXABiN2cx6S6nkHAqCQhXc2WkL",
  "key24": "64kYYKR6oakpawdp51NiFaMB6APTjE4xs5QecmpmsrjVbSYPfpPR3t8yB3bTbLy1k4jnwn3i5fpBHqMqZNc41zcH",
  "key25": "28Cr6iDyNKE2Zr44fUWhX8JLTGAyLZbaZkGvhBxWD8PyqXgqxHSK9fvCb7zMjD9mLnexgPhhSYCTrtJU65vhK6jw",
  "key26": "5k6LywnqkbT7HuLm9yviap9FHynt3aqa76MSb4E5qyL9ggDaHHhwGdxH57kxRDjeXGno8YrfdEKtVK9sWdrsmsGr",
  "key27": "5j2Wse967yxFNGox7zMYQJ2gXZWwtbdgy6gtuZvHV4Qehu3nPfwPC3CbpgEoMoJdCdABmtcjSdcG1iEFEF3KNUV7",
  "key28": "5jfwq5oVHPEeHEwNZZYtvY8sG9ahzZqoakaLd7H61qEUY4totSj9UWSQNbMkhwkYLGsCQde6RknCzm8ZKuZYcZB7",
  "key29": "5cb1nG6Mr47KQNFWaNm5FTdsPnKEdojCWyxscZ3qidD5LA4f2SXM76xvHPvqSjgLV4aYTheJMQ6khRfFPSQYxbod"
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
