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
    "agvRybBXSsLDKvXmKKDGKcsvrJWYXzvT8zRrGbWAWNQhjASuTjJu4FBSsE5HpvvdtUFUGvJC8WSQiZCczQ45y9t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A22DNJNajziwMEcTkiTk4rxB6TEEpGZ8JHmMQwogHm7FM5EfuTLPQSPiWYpZyPSKUTzhjr3RByiShV5wtoQra8m",
  "key1": "363su2e5rWFQuBPmnDSdgiwioJsKeq8yyeteesiXYT73kPs4MXPNNPqXbkTvV7Takc57vrn3M15Azee5th33xYQm",
  "key2": "4gHSx8kMCVUsWGca9oRrrwUok41CDQymFKSJzHgJJsDenkwAoCeDK23Tc3fd5U2Z5eaWZ1AoVdkBszUdEkJNWmN",
  "key3": "5Xkqg8X6a1p5ZxxMh46Q6LR77XrQgeRHaJcbLFLAvJ6bwbiqxJUxQxAxixgwsN9zTrqTZuwwYYPuBbmP9DhdPLk7",
  "key4": "2K4VJy3sLJVuF3fddMHPpqTc7HnxcUM8Qfvkoq7UNfC5gB27aFHuDUq1TARQHeg8EPWqehu3Uc26zdXT1Dbx4NTr",
  "key5": "2ZA2o1nwbakeqNcr8ABKxUHvbnJ4RdKU1SKGi8LwxaS9AeuMe9XGtrAqNH21L9JfKMCBLG4uMfc6K6mP5TEQ1r63",
  "key6": "4hp4cPi265hYEYxMWiSGurKyTAscXbK9EuMArQJxP2GmP57s491uh2VSvXe9jWVXuJyq9hd5bSBFz4EaXDVGHieC",
  "key7": "5vhNdfjoctTnLKvgepJob1ogycRErAbKUWuH8PQVzt4ubJJM6m6zTe6PurUDnhpDsricFPV6xkVn8Nj19G4FrhMm",
  "key8": "65k7n6o7NvgYNz1PHsaDFu8ECbkSUVEXfz8kjMfjGtaJFuZKNtA5wYoeUCGXNyFSRr7ZwLYUDjQpPe76SovjUnQD",
  "key9": "3Mp1Sbp3DNB1W48KUXePdXVwR9pxY6Q7uUnRAHxNfk6jMTuVaUBu4FyLjhrEG8TaacZj4gizqnzBKEL7zprTaQS",
  "key10": "4pMJFsdrFA3qaVmdyMiBDUbnfyM75ZBsiJn2kwx4FBj4EkpWAZPvq88pmqWLzGPonoTEKoySmWzUzFpNBmu5CfKR",
  "key11": "2usW3RjfmGwnAsQEKEDNJHiB84563HzeoZDkDFqUnf7tjxaouBdrVG2sAFSyFTsAmdss1SG16BTvMUKYiWDueZFt",
  "key12": "2yG5ZPL2Wkc3RQoo2ByfL1dCcJuDq4Y4qrsrEsGQMW7uMbQDzyrtJx7D46AQdAvzUbMhxQJz348bLG7LJK3nhRLj",
  "key13": "227J98HEVBrUxFCqRs8JqSg75rUY2RAYeXau1WKZWogyHqy26SwgBWicLC4Vhb6eyR3557ncTgF6ryHzeye3efUv",
  "key14": "5cBEdmJ2FkCYQiBTEbYY6TrfchMPD6h5mT2551eQJfRiqDZGTG82LHebACyVi9ZCfo5CEhm59sAKME1192eVDwMa",
  "key15": "3NS1WS8XMFXZzMDT8HAg2WemzacVqzcQbSF7mK5Ld6osgxgmjvgAdet28pQ4734dT3HDPT2newTDqCAbyCVpgfYt",
  "key16": "64XByrjKHYcDNzqzwMsbvAuz2mUkoAGYsqoSsVk4ZZPb3RbZVn1fd9sTgEy5o9YiY57vMy5XE7712vEGNGP6djJ7",
  "key17": "5webMBDG8udoCSmrgms7VZRQHmATmd6A4f63AMQbSD3AaHNQBBeC46G5hdj3zjZJPAZop3yM1zh5sMzyKdkowBni",
  "key18": "5JMXqA75w8FAj7SDSDEB7fMPDzEcTeKY2o1oTJHCQxGKhRkiDkskWwXAmeTYgh9tWnhZcp2uq2UQAd9gvXrMAjxj",
  "key19": "3zsfdAePXV7LFNQ6z5ahgREWxsrjL7PURdttgacV7N9gzM8t9TZfJQpdiuNGunJdMVUbxo5mTHVShVEc9Mqtg5gh",
  "key20": "2w8w3M1tWwYXN5BFxBxKV46BVPf8ZrV6Kgi7cA6oygYaM7aUPEw76Ha2rxEsNmx8KR1j9FPZDtmrskFXwM9Ajw8H",
  "key21": "3U3R2iSzpUG3JZh9ksGhxuWxQFdHZvtuh7i52vXZZSUjfRjdXL6or9rAQxrGQExQDxFufhfP7UnyVTWiXMKG5hhD",
  "key22": "5mEtEs6W2SrHaEaagTh7C6fobtDapGshZFZbnA1ynaQ8enyLjaNUuPr2RQkMQ1nB5sX9FxeUYEYXtCJjS6npZCQg",
  "key23": "2UTCkSB3Y63bNTSMcVgqJtbT64wAAt4wPqDvGnrtkpKwTjaentMaE1eseKNeX9GtRPxqBZEDCLyrzj8EZQgGrkZy",
  "key24": "3Jd9ymvzMceD9ufGnMaczMCh2YhUhtukcojpb91x5CRJoKw2BgyEuEMXN4aQ4DfTJkEP7kTbPaeaxRF93gH81Gzt",
  "key25": "39bRyGzFSnqtgepgstvHQAdaEyiE5Abm567YU2xjT9DkiJZrr1tvg1vDdfyR55woPpmtTU8hswEvgJkP56EsuVJQ",
  "key26": "2n2NPnS1YNcAF49ataq7FjQFDPHSPcRoizH5L5AFT26xFykpBXjA3vFB5e3nnnZTY7sp5LiozxpFnDmi9JZHLFVk",
  "key27": "3mbgsaJWvGJZHkh1ygG1fZygbC64MxVDCapMRGtRqyuQY5Bu96UQchS14b67r5aTQMC9Z4qWuVBVdqJWgPGyuXtX",
  "key28": "2zpVxhcAAryezr3mQp676Mt1t1gAddVJ5eZbA5t2YcnE1FToB4fi5Mhkv69SP7SGHaYufigmRdUC8rGMEUAK19Gy",
  "key29": "5cih9Kg8QwVimPgGv46LAdpcvJ9u6fhxseqoetv5su1f1ta1vuVF1Bgpdm7U5DLq5ze2GzzmaawDCafUtvd4FDLy",
  "key30": "2KhCZwA2QYygydNb9fPRamCvogZh6ttPkfjVjCAZY7i5KG76SKEqFetrmPmi8qBVN4nP3XekW8Jj8WDpWfzmMEkR",
  "key31": "3Uerc6wDigktLr1FuEVy9xQK4daBN1AUkZfGgmzexW3xV7MZ8qeAuV9Lm7ZsVAyB3u3cPCZSgWiwqFhF8PKe7Q8H",
  "key32": "5L5K9wSFqYaUkSL6njF5UoLEYY3DBRsDHQ7rTE99sgbHB3f8MEXvwmoWQahP1ozjt4MiFaGcwjj1pWcjmxt2ETGF",
  "key33": "Gy1JaDnXgB6vLUF1UKYp662WH73iQ8Z8jkFbS1aVkB56pNDHqK3uYiHeX1hKYyThXfdzasep6AbPprRxZzMrkSS",
  "key34": "4dxYsE3yrQXwszDanBH84Fm6XxJktFLqSwPcqNiJ47PbU7JuNKrgqH6aPVRoBGM839znL4J6eu6kgzdVhskhh5vR",
  "key35": "2DrP4cdXFPwzXYu8mpwLRDcrCSFD1n6bqiyXudfyz5upLBb52dbN8qnRUVhdeucSC4y2fbukMrwPkhuwBn6rdnkz",
  "key36": "5oFgW21vxxxjUBus28csemZWuv2cuT1K6U2rqQ2GBQnniHUxycQQuXtyMQfuH9fFwAqTnDtUgpLXNT2CcZ63cXT2",
  "key37": "4fPtrCqdknZuvkiqiBLE129N872tjWek4WuHEeQfuGv3vbinWvqxjXqTYuRFJr6UuQymmTxMhvG7d8JHAxGWyUDM"
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
