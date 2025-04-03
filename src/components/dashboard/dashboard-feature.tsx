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
    "4GJreKwYDMCtohR65pGvhv2XSp1M6XhsrhVkLAL7i2DNoGVsk72Xt1XnMq1kBdHjzmizYgRhyRs4yYiiEM8qSYF5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZTMtYSTX1uvE638WqPZoEwSckdnRKHF3gDaLB1a7k49pM5P9zkEyoaBY2W8ZtK7YxM3Prtb2bVU4tjjCqKN6fWD",
  "key1": "3DMch1PWfUxLxJYfqGgC9cXPDc1w6KLeNJheFsFTymtCE1NHRDEdK67FjRvH78ns8E7sqfo3kP2skk1bFkCy5a6a",
  "key2": "iLLQUUmttkfMtKGoBhGzXivVx9vVF5BACDyeFTc9piPWWfjhNMvQte7XKkHLaCHCGpPHGPxT32jF6Y9cqMe12fk",
  "key3": "2KxJkRREXLQo8AgTwvuSBmnvBi32oHganYx4zNN96wmgxm2gF7R6JAHA8U7vwkDyYUfgALjC12gozTjfxAWB3dRn",
  "key4": "2xHwsGjrXDHLX6kmS8NWbeXvMt6Gysdd8LkvVudHub7VVpi5QaCAJNc9gEU8xVPdDtuGgnJRfYMLaYi6z23wasRK",
  "key5": "3CLpLTv4H3RuY8fYFcCmkkkmjoHsbHnDU5oygdEHB9QcTipjE777ttt9n5yiLr5DmFVGt4sYXnZ5WEnQG6aJFysc",
  "key6": "5NAUaQv5oZ2rJpsvTaGvRAsBAYbiNAorF5JSqy7ZjAwGP8NP9fzhSbP7MoJoeeQQ2di7NEJuMCYeAE5ikwHzHetn",
  "key7": "2NWUgNWc9ADGZbPirvMpe9FDtahNRYkzBgoS85bFJ5fDQjoPALJ5WjJ9HwbtgXs3dwWJYwP9nH2CoceFY5295Civ",
  "key8": "5xiM9BKp27FegmjMJgeEgvQdb3HNi2EnbCxDx66FPQWu6B3bZWCit3jNXmeYRtj1bf3E5BGJEGfp3zhKRZw8E1Ny",
  "key9": "5vg91KCmQzXXoGrEbgqSXsNnBpm4oYQwoUqDuaDVXqzh16tz5H4LAeiA73hNMDkSGFvSJCeWGbYeb8djvcTrr5TX",
  "key10": "4mcdmHjG96JATCpUxsaMv8JLFBvR5HDhEga1f4kiVQpcYbodye9xsPdwp9pJFyQvWfsTFLNxs9c31yRA34P1ogrQ",
  "key11": "55DEWwkNDfxUpfPJxzn8q7UYGSPboHckUppEtrwAr2Bv9qpLP5DfjXpNJrySXf67t1rCYxMmDZUknAMEsY9k1hXt",
  "key12": "33bDT7k8xAg84K9Vqhq97Ds2h1G5ycTUdaXsSgs5JvsEFkpy9mVpPD3P569ffu79VGypZCgBATWpu8qNbfrRet9j",
  "key13": "2m9wmq8XAUwQuS6SWmEkpFcb2r7fsxsxyc1LQLcTCdXRxzFDX1FyfM5bMvFm91XW9hDaXWBJk2WnjbrrpjgceycD",
  "key14": "7dGxwvSoCrWc7uAbrPD5qrMRadgLfM7CRvxZ5SA5yHL3UxJSfNjgJXJqracqw3LHHQ8xBLA9GnN9uciKJzJZ3A5",
  "key15": "M6TsQ2dUgNzjYuTvSyDwMkwKWMGdqfedukrbabcnsMSyYK6951qpYg75buM8SHBP9UGo1Xen6xha4HPAAoyiSZx",
  "key16": "2cjbzweAuLyLAMbKK5k1xrX2EiNkb2TfuoHoHPJ7ouEjvptVLdVL72DnhDw2qRqaEXQBRegjvJQ8xZaLDZmX6vRr",
  "key17": "2GhRqUJevp3dBv7gCSXdwGgYpBQ4eVSn7m2WFCq2AM4rLoMGmZUn9Cz9i5UBmDtm8fnJf3jitDNUbTybhvR3kbMG",
  "key18": "4cRvusM9RBXktemRXPXWtdkcpHkot1qTKPNLTFomV2QTpFJfNm4oGvzy7HtqtRjrAyB4WfegnLLFTH7maKwedmmZ",
  "key19": "3QGzJqSrCtWxHgJrUFRNf1PV3JTUvLhaqNtMPtpgPqdXguQkdkABzaHzXQQULVjNGNkQqvbPigQKHKNsaw3jKiFN",
  "key20": "2NQnpWnEDxFHDdHc3ebrPTRCm773BSZbwthMHiGwa92zKxhTUb88KiLP9KF325Ni5ELct2CDVpFJv5V82cwRAGMK",
  "key21": "4fgwgfXNthX6S8UUbj7yMKyhahxdEGxGB5U5ufDJJWBf5yJvn1hVvphnu5XWLxwdKj16aSVCiUNWEuvMc4BFD7Yx",
  "key22": "N1gGXajbH9DZhxuD96iFhytjCQ38AAK8Sb1SreB9mnxEPqmeTogwtFQkirFRwgeFz9KdmTHRL9aVi1ESMmnxjsr",
  "key23": "4ru8jtBzE88cfGUSRYCDF6M4wfFSRdvxm3XEwqgMTt9ALH2tbGDEgcUD9FxsMYLeWQTYLrsXxownKTkoswHxwp3R",
  "key24": "5CSq8xc1mG9MMdK867Tm86QF6xnYufHj7Lt8dj25j1FLgZFkPR4S6bkaere9VvwG2sHoWaDy3NjAXRtSvczA4UGF",
  "key25": "5KLUH4PzTHT9TRrxasauz7YGzR4UTyzLcNAy8xzCrw6k6vUPEyJn9tzxaC977MkGrEF3oeLthhaxw51iqGhsJKgU",
  "key26": "35F3So2qBkbLbqsyWYzuikTvzqAcRpJ6nyeFtcBqsXrDCDZm9PRmUm1mdThgvedTtDAcZLsBZtCPKwYPXF4VNxk2",
  "key27": "D15SEXA2jj3drUWJP38Mh9Vv6eFxu7kauZeNNBYkStQxUZx5mjvvwgPdnphRttRiHDpTnoNWxSsgXPfwDMcJ3zV",
  "key28": "4wo1xiHf8jZdgPhqjBJkLGuESDfHuzmikqHc7rt6FgrwbW2xxtw8v22zzDtiT5C3ELntw2KFZiCTmekLAaPDnaBp",
  "key29": "5nyhyukbuRm2f7TxJLTt77ftYdTgoxUQfrAFXeSifC5ZHfR6rX2SLAxBuCW2tfBnRZ4V5MSyX6x1y3FEHFmcmk5Y",
  "key30": "5u2HSsrKjfuo7Ms1vE42ECmeAEZfRRrhUvrSPmEwYe8WMLaXvzioX2jYZ4hJqP9PnjVZHuJy8rTJgbJupYE7ztKF",
  "key31": "4TMxRp8Jqwgf8cuQLFuuPHwkEfiB9GhbfxYXohGwfKjjbScHwNhJDU2qYF37hp4z1pzPfaT4zqo9Ks7kikrCwrHG"
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
