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
    "3hjt3SQL9bXTtC5edWaeC79116fWKypDJxJDVAzfJU9sCB1x3tgSCt6MhVZLio8jjstqvZ9hu2xr6QbT3AwCB96T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bAja7B2EoUtdJit7qQWnBxdqLWiuKzn7R4A6w3eh9DEtgENdWL6sE3CH34eALzP7xhtngQKup82chsdCASL3MEE",
  "key1": "KkRKVfP7X9qSmUhiJ4GynWMHo5UZThcxyn1hBDtaK1hTyEs6r8USvRdiVG777f5azvaTBqMKhNSy5ioPUJLPH6m",
  "key2": "ogfQihHaF1UwAoddzwCZeriCCKyhQ2XRq7dezUBHjrPDgfub5T57A7Ez37eVdvXWfoXnmjyAsE62XU6YWRaRW6H",
  "key3": "4SroFs71X86daGWtrdPPs6bRgwVdNKB6JqNKFwWxvbVTp5mrAjMK4s28iNGJVzen9RnS7eKG4JC8eR7VMuPiSoN5",
  "key4": "N2ML84YaUcGm3zYGA1wRapm1aSxJPjZ6HuoT24XbkksQwpfeSRVpLECrTeHvB1z56M4amG9pqfRcPQ3gbjimoWs",
  "key5": "1gHNcFMRAzCmwWjFWc23tanDHAFRjNvoWdjeghLhPsq9NfZwpgntUEEohxyZAFFtzcTDA1pauqrWJ9oM5oohyot",
  "key6": "JTDFbU3cFHzhaiPbP9aDxeBjKKt2oATmJj6vBMNipfSzBMPTmFxYcxDfSJLoj52Q6HrwFaqqBNAx8AqpyXsAtyy",
  "key7": "5tJzHLrPVFqQCoaRsbcwuZVibG3Lnne61MzDsNjkaLWL9ATLCeFK9mdgRiYyN9knVskERbmMyFFaWVsPqMcbjoGM",
  "key8": "fMKCigkr4oavgUPD98VnEtcfz3ksEy2qGuitcTDR8xvvUyuBXQBJy87qMMmZnSgENNvTAhsd9bwbSgSiMH26y6u",
  "key9": "2bXwqreC5FU9AyAY7bfXNcVinVAHwNt6HqZkXgLRrfvFohEycufQLUsfe6ySihseHKShd8wTTzPefAKD1W9GozW3",
  "key10": "5gHoxXhUoPfDdJyD7pK9YmjEVkUeRjmyodxCEDoei1uTuLMcvK98tQNgKVeu3eGWNeRZurbaQV99ASZKeSaedtYH",
  "key11": "5yr3E2JFLSxSZt3UTMMTPDeKSrAYFrYAAop6NcpC88NgfcQ3r3fELzD7jWNsYjdTyMF1mYQC85tFFZBfxB4QV8yd",
  "key12": "4tnCRcEwXJTYJbYEezNPUBPETku1ZvXF6WpwauFJLR6qFrFqGqcaCEYWLYQiVvVWwhGc82pRY6sNBYK778TQh7zR",
  "key13": "5ySoQxFbPnBkHWimYhnvJRnk5D99oQHGCw97LztsUQD8fC81mFA9DgTr2jrXhnEUmD6McL6g7iU1oM8HGWUPy7zz",
  "key14": "aAP7FnUD8rGLZsf6kxLJADt5EcruHGQTXhjct4DYwvgZBh5ppzdWoLXzRhgp8z8b7bwRJzonfbfQrL8CLpWmxcS",
  "key15": "oP1MozEai8ymdEm8i4uAx1dcdgh252DhMzRzcANePZqEoZZKd5LAFTSchsv2W6JY95GJG3r5zeJopithsepGBWT",
  "key16": "RuA5RC7tT3GeSDx9yeW6aoGmqCUVUy6nnrZBb5JyYzBVMNDrFZjydaVkT3bD1AimTHC3ZxrTrD6hgASmK6DCqhY",
  "key17": "2M7ysYVuD3ErcUKR4v4k2u4LNLQb6H8J6ACRc8jHD3rkeLA5chTdsyousiS8kbXmtVRzWFdGxjuzyZXfMq3fTzqt",
  "key18": "2tv3CwSh1NeHz5WZSyVLVty9fiJNH9guqVBcMD5X6pXyC4bhw8cVgvsezGB5n5qJiRayr4EYYLjjVTYoc2DWbg9C",
  "key19": "CdTbwKx7V2HpDnQkKHTQ25HggkdTnpNRDeKDvriYnPje68ZFtehi46aRVV6RfbeG6LvWueW6zk5kJ9bVLXZXsvd",
  "key20": "3eBfJRXU8SsnpeB8oiVg4yhFKaWz5GGNnrMdCNrYDsJmqSv5MkJPVsfmcTVP782vqaVwzxRCdR9Gw8YR4PmQxcYS",
  "key21": "4eDf9WY3yMdjyNFC5RnyG3wXR5qJSQK7Hd24em6HwzC8Lf5yAk3K4duPoEHY34L7BUo8YAhnkBRPVp2VzYTHRnu2",
  "key22": "4dkeaPUN3wc6e5evuoWh7ubTufHUi4Kfpe7qiDCWmmLEnaos3LrWaMESr3rWMcwWLAgxZm3U3gC3zwYjWyy2zxwv",
  "key23": "5HM7Ck9x3XxA9qdp7erVndvG5Xsq4Xn9DWtmcJK6MXVocKdkPmnbkEkHe6x4PkMPcTFf2mLuJhB99WpaoPkEnXfv",
  "key24": "35SZu6g2zxd8ifF8ENZdoe4c9jcPaimEHxnyRJdbZ5MwRejTAzkCGffVZNKx73hCDK88p5pZxJesGCVtEfTyfPtE",
  "key25": "eZzR1go3LRBpUz7VKJ6RWNKoQnF6LSaPc7uHquUGsvZfMTREzbDnpityjhyL8MiEsmNQyudB4cPss6AaJ6FwsKC",
  "key26": "5PJVUQpibPsQYRRPFhmJ93Sruv1nugiEwEPfUukQB4ru3Pf2M7xFwsL6CGWhp1uXAdWPLxmy2BF3fe1aJyjtcSid",
  "key27": "DcD3DdyZQbGRKGd1TUAjZg5sauZPktu3bPX3qwF47ih55GK4eHxSF2FDxZNF5FVcCDY2GpV9h5HR11PsfPRGmPA",
  "key28": "27gZmWv3QmyRTSakDN2NCgrpC9nQ3X6wvkmTL27jAomZTD3BMobtaXYBNNymVsRQ9KJPX6jSya61LASWz8xWBn8x"
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
