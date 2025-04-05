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
    "28DJxDV1pT6v8hyufdKCRNu5fwp5h8ZfnYdhCE3NGqRBervd9qvCBJzd8dJtbJeJscSriaj672tG5HZFj9cdoF35"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KGkEkzGJRWcKjycPYH7GS78vdfq12EAtpYmhquG6L7oX4JhhszFQ9CiKytsTGK75Fu4Ra9NMmVfRoGRrtV4m67f",
  "key1": "5o28Q1dzFZVqQeXmTBNg1Jjes4NHUtfEppJAx8xKvLyMu2aSLYN7aqT6M8xPHFw1EfPNhSzG8TTqDAsv9kJMh2Dw",
  "key2": "5HWC3tA6hsucjy1ZKKhah1Us9iYaikDj6vXN34noEFivhuu6nxUHDJxfvqKJdf5SsSyZ3zm8ENVKmGS5yeDNXkhj",
  "key3": "32bx8Kc2esz7Lcx5oVaYjgrw3n1hqLkAoFYoBCjQHFQya2AfuF41oAPHSDVDEyZmmFSwhn3usMELFyW67YxkJ7wL",
  "key4": "2NDBqnsK5G3dfuuSiPH98Qr49Zux68gr58wqWCmdcMEJA7viDeuEb1AM9JbFGRDMkWGf3qPG4rDp9k36NxoeAenZ",
  "key5": "4tTukw61ZbWQxfAHUnBSV2W8i5ff3iubcCKy8iFfN5vTbTxhvVDq8Hp9L3yCWT8zPoqsg2SHNtfbxKh1Cv9rug1y",
  "key6": "5cTeg5XrubmyPixmzai6vBX4pqAPqpnuV25TDCEQLekJ3E8g3H8A8W6L3hdBWwPWMED86Hu5Bh64XfUE7S4ZqRAk",
  "key7": "4ErZSTaVvqTgouWbnJghmf3d2HVzNvVrZ7qmZSkwhmALVQW4Cn2e675KwJcMN9pJZ5upSfHnM2gGtyWyued9oQuB",
  "key8": "5g51vjY5BS86KYe2zr1b3uPEDYUyMWgBQ9VGXbn3xGidNJqsSfPqdckrViZdgD7N6ezJ2p7jvjfhutfycS1XnPUN",
  "key9": "NGuNJ1hi29VnjSotHqpQdy8C6bPdCokhsiFEDDZi6tBnsHvRwQU4pwNAAP1o2MGBQfxZfjz5XqtBipD7bPDga9E",
  "key10": "3BEmDvQ8psWPHdXZQWxW1bTH99JErVk8s2XvpPpdGrt76WLdsL5X6WMoC2Jp6GPeFTRaxQTmhmG9UG6R4i5Z6Ma3",
  "key11": "3LyZeYuY2G7ejtMfaUaCkLMq5eN8ePC7DN6AuAgxLciSZzsUrxwGvgTobHu3iEPDU7SZiTJ5iDkAgVVUoYSHoaLy",
  "key12": "3mVodNyu6X5VhDq96niMUnMUVBjVjKkoXbwUe88xZWzSumTJgUwnNrD2m4cTZQ2PKw4pUe1X1pDpRd5qpcfz2aEA",
  "key13": "Eh13Rvkm7njPCViB8BarPTMEm7Mh7Z6xJnrsy9tYXvydUZamCcQrRf2q64Xqx2zWojUYjUUQwkh4KRjTngPPGcy",
  "key14": "2a45CpCgVXyJsWd4RFvQu74W2f1gZf6EbAgh4pGjPyyVtMBuPjB2pH8914dSuDV4MbSMmukQVsRrriHmyj8ihxoV",
  "key15": "4ao27QVGT5VRoaqRrghcWBQLn71fpX7Y9bkccr3ZbioDZGfhtNjn8cqNRQFMetRxtTBs4oN5uBSQzvwzuf2Lkrmj",
  "key16": "4Vbx9RUyDtfE4WAuXibemZaE4635wxdgThD5pxFau5PSnHUD5X1AXErPtCjnvFZMUPf7pAUEERZ5UWt7sjU6FAar",
  "key17": "4omHRfus4Cqr3W3c1k3oP8NaZ8z9kj4ELTNBiGosh11RByGXim7HJpZosTg4te8PtFm58VSm4SDwriQNEzDEZw1i",
  "key18": "3TmebSeXET5qGC8aiMzAt2JnhdHXT9pYrfnvSr1nbQZw8YbePkVmo8CdxfDDT1eUt9qAEfmEDjK3P7Jre7AtDQ5D",
  "key19": "kRhDEg3f7tjD6YM4W7qqJbP15hDXMUuidFaXDh3VJKHceMrjtoJPDNc3sahz5x7gFpmZzcBvwpShYkTiFmPCr6Z",
  "key20": "4boLybUXfe1Syt2BSruWHL1Fn6XKjgkpRkZB5JAKR7KYWUDivSt4D535J2VJzNynJU5SozWwBsU8HJwuEceyYVft",
  "key21": "586yJSi3rzPaZi34Y67fjKdjsBWFb8ub3DAuCrTsptghSiaMVzvbmRVZznbZ22rossJMutJRgMcH2d9MoDfpZxgC",
  "key22": "5QkEnoREAXfwzm78vVtGe4XsGVZPSovT3WN3X9xoxUP4VdjzYMC2PPFQPL6R9mLFvEZpTsZLRxY3a2tCYLQkBsRb",
  "key23": "4iqyidYphuZtb1foR1sY9N3B8bvJUTbSavkZjenaYJdphSJwK1nRvmN94j2pRmmQQtAb5e3aYxHrJt2aYGK5d4Sv",
  "key24": "3Q1E1H4dUPX8oLcfb9Q5jmyAHJgJFdzj6R3Jw2EVVV9Yz1fFBqUqScoqP797GXRV4eBM6p54qN4m5zcL4Zdn3Hxg",
  "key25": "beiQF1yYNMWLY9s933cCBrn6nvtuYD59gsvx8qHbpCW6fgJE9xNqnMMRtZrDiRD3UoNG8pUnjaysoWAJZXLcsSQ",
  "key26": "2rVNTsPiAmkTEP9HiJUPCbsZ57gkHnFoza3aSTGLTT3DgDyfQjvym8VvqmkzxoREDzRRqayj7A7xRhS1VBQkjg3C",
  "key27": "3UUyFeBw7z1Q3pzUMCovNY1ZEE83ud9qnj1GXMcCxBW4xfpnLYNXWX617xUs2YVEHU1TCHi4sqbUfDD6NcTM2qNG",
  "key28": "5yK9vBydvr38ch13d4usUtBaTdkLGs431xAoFoJfH2SSYRg1fFf8gZsqLpjeqZ5m8ipLZauhKDJut6idnbUWwdEA",
  "key29": "2X3doc9bGpKwwzTouV6LtQBZwqRiQ8RhZitJFG8aBUJQkvatm9HHSFAR5jqpv2Xhozn5rLyCdsvudT18PTVUdQbT",
  "key30": "2dZ87u2SZYCArUkBMJKsupZDdsSou1YZHzPtZ1WJz77GdhrsQsAe1Wd3cWH7wZkkY7si8aMYb4kLSv2zsQL5UGhs",
  "key31": "2MMB8o9bWEwnowsF2AifhKxeZJEZVzbhPrjtmyAhVWDUQdEWixwMvC78ypgdJFW51XJc9p6mjrehb8oEwriicLnZ",
  "key32": "59uVd7g9cxCF3FSCJscpND9ddyq4vGE1UGqVdFyE95EraJcQSvQmrbZEAzUCYGkX4CGdpNFjDNyT3cds1R7T4vPT",
  "key33": "2DQgyoW4aYdrQeEcgYXZCSBFViSNHgvFAQBh8ULjSYUshMznTVE79922asU6MQcKgGoA43xSMkfrr4bFxXDW2Zak",
  "key34": "5qc8QFSH8acWxxUGWQ8XStP6FYaa9rtf2nkvH6G3h7QiNVDcnNiYACFvxxjhJWf56QfJ6zE21MoLRcBr81nTmdgs",
  "key35": "2gkEuH8cm5tZB2wCLPbkxW1iGS4cf7b53eySNbNHDbjai6DfYw6hXPQh41EpJAuxUypqfFZ9p7ExjYxYXFDfrRjF",
  "key36": "2LEC9vD1g6miSh6XzJnqXvDe4oVt1dNscDSFyLo1jKTM5JQDk9QVU1Uqvx5Ja8qB4U8rhR6BZVTa9Fo6xZbBgZU9",
  "key37": "5LCke7EmLbVRUomoLL4d8aRfufETyGGvyx4kUtz9eWh9V229MXBHuwhUPowLurCKsoEVsNAChmVybjfrzjLtGRXH"
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
