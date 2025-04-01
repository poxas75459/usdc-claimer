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
    "2CmFYBxLAB6oTwbSeoCmNFrsvMc1mxiue5fQU9fk7qNFeCsvudkQYVBuUUDNHkw7GPpCrxGu62QPRPw1k2YDVDwE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Zq7yKBZsfx4G1g5aG16fE4ASCowFJKFeQT1m857aeRsWfJvksNyp6wc8TYktuG4zWPR6V9Wx7nTxV24bGCP1eKF",
  "key1": "2aacdw98CAZfYt5uskmWpLMB8Zm8jzw8dCcEXdY6pDA9t8xEfdfaAauxUQ2uxZr5hyg2Trz9GnD8ji8TGDbJfxAa",
  "key2": "3QJYWfJFBf8hP8spYBpMi9tzMaYxYh3tWPTbFF1bYjP1gFN7RC8txkaaqFu5yUk4tQjr14w4PmN4jVaj33tTptRo",
  "key3": "46afyegi1pP5CVBmDEVEBoFLXdzCHqa28ZDW4DCpYh8pt2Hwjtzv3EDbk1nFY3i3QjncYMXnZNQRrLxV93EFjLhM",
  "key4": "31kyJNkiuwdkvb12dbr5W3XXtNTePf1F2b8ueYR5u4ckWHhSwFS6WYydLCczMe8uCS62FA8NGDaNUPTcAusng7DQ",
  "key5": "2FXGMwuj3KsCsYvmzXAcZMJkC1iXajAMPEXpBLCkZdbzJm1B1XDcnAwQs1EJPjWqkgPgskKNEKsv76VA3VzrZKPS",
  "key6": "SfNZ4JSM2rgMcS3UYR8AnKEMzFBGLkoxnqmf94yAU1y1cj6cUrvT8M6Pm2NrBMdbwJM9qV3ZELCTMLyo98nUrut",
  "key7": "3PBH1g26Ve8cgbxCTeKHoM4Pr5hpBWCnoXdyMjFFW6fKwenPFpAnB5jjHdX8ydbARE3KUdYEeenX1VDkUEgPym52",
  "key8": "5WMW9pToRmPxjKYVrLToQcu7cHavRNvTCmRPomvtU2q2orcAE5mLiBZbLcpqK22M5iCASWE42cg26F9iqYTmgi3y",
  "key9": "4gSJVFm7PUmLVzsWnKRqnwj5cKitTzTwpmMyZW6vpBGZon1WKjX8eABM6VHxsHePt2L66RqZzaT5NRyEcqLB3js",
  "key10": "5VXmM1b6JZTMKiG6GuDs6UrPbUooM2XRsAcrjobze5UNtcuSr1hu2TKtM4tZpUws3Xzyutxy7eTTUraedcUq4SkC",
  "key11": "45mUrQT4cxCHZgSrj1HkpGFNPVqHkicossuyqmTjHBtMTXPtFkjKDujMEQxq7Wti3C1iuRVQFhaYx86E6UQujGdN",
  "key12": "55xsfBjubrarbuwAbwvpJNfsREPQrUUGWYpotH8MezSZBHSxnLwHwSkkwkNtuW4qGBAwb8W3wuS8j14nBEaG17gh",
  "key13": "3zfo5ESXjpWiTvfHKnKGh6Te6Vvvi6p9RcFm1gp7pVMwJ49BhQUR5KtZxAmZyMCEUyEoZnMr5J7AUfQ7wSWF731k",
  "key14": "3ofuoLqQyjXXWXdZJ4Cgt48yp7GgqeUWzXfLNQ6yer9FdKiSEtFjujVL9sd1FPi883wP8nMAx1wLh4dYU8Eopf5y",
  "key15": "4Tbs7Jo25MvBGKbVrVTg4BHBcYe6uHpk9YfYda2tzog7HeGKiFuoCFiVye9KTEfVNvRdKCg2X6QZjLcqQqzxYqax",
  "key16": "2WRdyZREjQ7C263a2ZQPffk6HnaScM34ceiEbe2ohmXdHXmQScAJ2TLWAwBkVTHJ8A213vM2TBBDBjYTSAwYMx1c",
  "key17": "Loh4cu65B9KGb9wCE4sDuAk5XiGo3i8AJSfyyzc8MkAE6Xb5e81mVGiDbu5LQpByyJuRdhUGnnjCDKB8MoTPpz4",
  "key18": "3t5AadyCfv4UfP9EghEdMpMpxZGnvPHEXqauTft8KNJzNUVAgLhDDPTHjbEKcnU7w35BobFAcLeALwo2eTErAipY",
  "key19": "Wt6HB69LzhncZwYUSLdchBXY1mnh7W1Tp5kCtLRTWYpM6Z8MFL4XqbbqaHA2gHaEfk8hAXnhw3efHUK24vR1Srv",
  "key20": "2uUQ6jEmrnRvswBT5wSrDAMANdAfZnUmZJ4Gsztp88kmP2Goir8sqvcYGpHiAb6R8tgfaARyy3uAism6JHsXTXSS",
  "key21": "4TBtLY44JXbie1LbMBz36ZeZFj39d8kAjfaDPabvtPk8d1qTbyfYnWsa2P9a5JXt1Mjgt8owSsXXK1wVKDBtW3E9",
  "key22": "4hHiBhEiHSjq45dC3tbQNnXTHWRp23i1tB9nPxdnGwcdqqdqJdiiFeSCdGQ2uVASw2Wz12vC8ZoWEUepFN3D1DuH",
  "key23": "8A4HhNgHrnUDUiqcSBEJ5bB6pyX8eqGjyCtc6WoNS57zB7kEMFp5BAkCKvgSqC95DZtkHWCsof1HFDvTLfKqWZ7",
  "key24": "4wZVL413mukUGEpbQEg7mQH686UYXknCBG5fhaV1GebKfgrSCrVPzwqwrQTYz9bq8sxQcGZcnTuLW98tC794S9m4"
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
