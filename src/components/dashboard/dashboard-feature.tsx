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
    "59JBeAdkyKwXweJgZvY6EFtNwD1SxckAvQh5SXHGwDcQRUpK8eAWNRSeJ83ZQUsjx2TYWa7UAshyLncTKdaNvfCS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xHDqrNWAUKv7ZNvAdMuqKbYcppriLVk9CjgXSdgrJqrvr5UKcBkG8cGuxR1SC5wy7WeAxCgkUYLVWLZrFUgGtZG",
  "key1": "4qNGSG1ByiEQAs5CophxSDnF3FNKHXgTymCtH3SN8bLYNhfGgzcATMyDtaQnWZqQK5czp99DPqxA2dn5NLY5fyjn",
  "key2": "3JFtAGUsiQSEFaGL2Wd4Pi5bJJSzgsLRd5D5icfXye89A6Xep7USsK2cMPDHWb8br1fMftCtha4XMwmWRXbmE2Xc",
  "key3": "3e6gst9pujdd1CmnGXEKts9DS9ubGaHTU3iCoRy1rbN76VRg4C6wuEW2nEMyiMdJCdipCsjfqsrywQMzATFpHW7g",
  "key4": "E65txSZJGRGykcGeEtY9W6EfL5K5dKHUbshU7JHAKGtQM1CxgXr4uAhXUydPWWDMXuJzLuoJEXQiBk6E158sQ1d",
  "key5": "2TD6EiBNfnJcq5c5Ax9gBGFvfqzmX2MJv4PwVhtfwQjmiqRk2zA5fYU8iALE5gDuV8PzcC3WENTHBJZP3tfbczpW",
  "key6": "4K2TETGLY6XBYENywEqK86nSLAXGUDovBeKFb2j499ec1vGenxgEvCrCAxruMLSvy7kjvWSdddkWWgk5SgMk4dhB",
  "key7": "4mD4bZkz6L3LJjdWDV8aR67RJGGCtrgAKJdStF8bghvPF1hdrx3fH7wXoCKkbbu7XGTaYxHnsharmCQjx9UksuM",
  "key8": "wZYYodfPFDMcS45syD21JWrUNcWQud9gHtf7qZwNULtS2R9EMByFqnJKR7fHMMu6h4PiET2b1hBFEvJJzcBozSH",
  "key9": "5Ny3ZyLkFJjJ5MnHgJKCq8nVco8mHyPJboQT8AmnMoZPDfBG68MiQ17eVr3z12vLPxiJvDzz3FKVVvAatdjk7rtB",
  "key10": "2oNoyeH8fCvi2r3oVTH3Q54jrHmgJ8LSp36A5CwmLm2dbFTFKTfZ3kJMz8z23vFoCsRD9a4FMBNGtirsTkxonYJC",
  "key11": "GfJbCACRFg2cUpDyW7tQGq318vhFemvBJknmQMCCUKneYU9UZn26vqo1EdrFR2R5sdBv9Vee2uXkhbuuYYeCXti",
  "key12": "3DTtENzz6ZM1oGBKZYygR4CA8JUoCU5FRUfm3VHKwnj85LHmdbTqtXsGC9NMmvxQKzkuMZpK4FuTs4zt9Bn7hEtx",
  "key13": "2AuV39C1rSEPZi1EyuC28YEQbe36cfZGcpV8GywLjne5sAD6tKN9KTyjkqZTCnja1pKn1caAULM3pwdnj5EGTJAu",
  "key14": "3XJxRjqsDTUBtjHU1qyG7oJ7HBjYdBzSrvar78mdVU41qDzX6z9kebxzDxwEiA54Xngh7dqx2wZiBKbsXcNaZemn",
  "key15": "3fbW8DhLtAFd99gGqBZuyibN42bWjrEax8pBp1vouEo2CAdymercJSwLt27hkmFy6mgux2gK1CFq1uzDKErYMjf7",
  "key16": "2xEH5hrWrsD6D3rY7oHik4fc8qbBv5mq9j3SdoZgRdBPeRi8W5L9u872imqfGthkPKo14qshp5HvKqTfmntcVU24",
  "key17": "2V8uEyv6hytUfgt9CbqNRkX8E6E7BtrSeEHWqQ9S42AKakiL7ni2hgVhgd1SDWDpJZB2X9CC2z93cxzBgec3N1vm",
  "key18": "5PxD7bHMtBUd3KVHfSG77RfEgY27xNAtAyyc9JKCVg294Ny6LYZkeJAzb2WtTgVb7P5m9UE1KfqPEqMWQAvynKVy",
  "key19": "5eKsQuZfwJ1aS3qEKksra89n8J5dnvgFmS3ettYmX7FVS8G5iSjTK41z8n3kquJVoeF73hgNCKv9pbb7H1wdzpTR",
  "key20": "3hNrj7pBtWfGDxaSXW2v34RaL8wV6cXiGg5ocTn9dPrfmF5iqSqZCcrr4YZBXyWhcCc5uybymgcbCDXoq8LTGJnV",
  "key21": "5eZx2tdKeyaoD61wmtzoYx3hvrHHLBhpi6efvZicE1o9zKrKdiXLhFifTDaaMqastQADKVt9VYk3KiSkE1pBiBp",
  "key22": "fc788xfUjvFaYsLS9iPWXcabaFLMjh74TFeQCtarvPY5b98xPZBft5smZEhGQpXFNyyADc8WNMVc5ihZxabyEXB",
  "key23": "5znPxWh2yvvuKaR5zakVs6nvMsokcN9wTVEw1NTPgt5yuXuvgvDCbMhKTrTfskek6PiA9dBWW3G4QYLC41R2dGh4",
  "key24": "5J3VRHZW9yFDJ7x8i76wCo2KdSVV8agXmv59EJrme5uTK3z4w6TQQYXuLVbRk3Fozcj2VwkMTtr2jHGvTQpgwBqC"
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
