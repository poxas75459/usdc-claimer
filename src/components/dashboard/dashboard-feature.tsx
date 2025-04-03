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
    "5DDCywut6BShoiW6syKhYhzbCdVuS4wubRaLhT1XLNKAmQd5FYvAztMG6CDP314efCRPXtEfGZsnKW2rZdTeGyEU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51wRMKjizyPnUSQBikTpNja311PFh9aVKy3MuXt1myQQEBR4bSuW1779CkrF1mDPCEmvtK15jJmBmpR3Vi83Juyz",
  "key1": "2Q6QZt6NmP1adHKd2RYua4HL92t615cKavZAhnVzpiyfiHSfYgTxGPvfPbW5TTsgLesMe4xFto4dE7CQdgQPXB8q",
  "key2": "39oWMXvio4kV6eviSov2iiehp9dfirGmidx9MJS5es9tqw7HQW6M3XQ25npFcuN2AY9acjcTBHpimMrXWaoCL27z",
  "key3": "2Sr4Pt6nscdwE6sAcJ6PZxATCJ4dV1GYnLCizH2jUrqQDngamaDRcbjobx9ryB7rwrNTXuP5vYssiYGbxGwSmZ5Z",
  "key4": "5B9Qq2C36t1zqYyWCeBXS7bafAbkYX2z3aYb9jzdEEUJHZJ1x9w3gMEpGPdS9YRECS6JJTf8b8534XU4mLZmS8kC",
  "key5": "3utGauW9pBN7U97hUCDuGKjUDRdB6oy2uMNt4X6GyxGPjyPo5zbiCsVvDcJLbjoTWDzE17aHp9mJS5Qkoc6Uz6Sz",
  "key6": "4FeCLyNKpKbk9pKSmEU7NRSGZpAJbWKjD1t3ctgEGMkMa94ioDJZq3Kohj1dtPHL3Jbd8sAEfXTjD5thfbEGKCv5",
  "key7": "5WP2C3Rj6p9VUfZSjhKdXaaTzoZysD6w2CkD9TF91qEES4dVoVC72VcdvRo5cdsiM69djXhuGFuG6zvEZTdSBP4a",
  "key8": "9DgBcsXMxXRfU4U6mZdDn2iMJsc3J39Aatca8DiJtGsWu5A3frmvoKqHT82LFenQDQVMJRtDPduSRQTtrhNqCZD",
  "key9": "5JTwitsJeSWdFY2VJEX4T8FUsagaQ14oWznkYLHwV5Kf52nJL9GUnkrxmSh7iVDiR897qo6ZTg87dAhUPkC1mJiJ",
  "key10": "3gdvZBUpo4SHdGhjfwfeCHWuEvGgwnnkgfkZQ8b6Zd5ZWpNEvQRJCBSu3MDwcEQzzVWkKEfnK3zN3qNBH3VK3osM",
  "key11": "2rJi35vFWb9UshnfHJZxeFPT78PKYpEgFParT1ACQCDNdDQisgxZcajmiGUzNyJ6x9c68mJus2uCbUWiss2eXJku",
  "key12": "QoBUq8Xtwq6PaWzeudp2tJ4KA9cPY2WjCF9dCNjfGq1CZaE8Trsn4raWfbXmecJxyzi2knfAydHUrhisVYAFw6L",
  "key13": "4ehz57zoH397isPWGohtfgm9nBHgU2htxGSf4NZcXWjEmxdH4XRbyefSSgxxiH4rcME4C8zypYk3LtxoRqFJo7Tx",
  "key14": "HKo8YqpAtBXanCY762ZihaL3er5sipR1QvKfddB5numMpxRD2HwTgFJkMsz41uxGYUYJGYwbHpuxuFHFxaHAQeM",
  "key15": "4bC5nGn7GgggN3KJHKfSytbscxXNay6H7Df8vjvCDvupVWkHSUj82y5Jwa9bJ4PJDvsh8UZ5P3mDmcFDMYETnMFB",
  "key16": "MtF4KJQJgALFBp9Z69xbGjejxTpbT6GbT63EvtKKziu61dAYee22AQtpJuPdEPvjG2VuRfx72CLM2859tnXdpi1",
  "key17": "4edV5F3VDtub5nZpaGwErdgzhhzVWNf6BbsNoivAyXLT2fhWwnF1Aq2FMdhLXBqPrP8rZXmVS3VowrKwiTPYJhx6",
  "key18": "4WyqzzuefEaQg5U3qN8FSkQA6bE6Zs6MeaW2gQCRojtqgpzttkUKojRyyko8AWptFN3GcSR6iCynPj8Da9Dr4Fvj",
  "key19": "3M6vmqfTbNpqVRhVfKwYBxodfeGGpH1WsSYkZPakN72Uj2PVxbipm6NmLJ14nkeXzekc7CuqH6HEXY2798zNfqgJ",
  "key20": "2fgav3nrFTmcLhhvuNdrP1PzFPh9PaeBeAxo1GkH3KMWE2QzAKh3eRU9Vp6hweQg5bXcmr2qEgnkDYQF8rWSfxMe",
  "key21": "3F6S7Y3vWbweEX7KGfkc6yKdQsF6Rfz51nzJiJbrc1HFh3cKZEwWG32Bt1QvofR2yChJsmsRUt6WLeoaYSt1Lgx4",
  "key22": "28dubehkpVXtfu94PxsVNjAV6fSXxmJms6n6275cmzERaxBpEURxX9HjkNmFG2yGxHhhDYwTmJGXX5XYUxWnkyDK",
  "key23": "TEMrKn6GQcwNtfUhdCord1FsZnWCEBq81trs9QSJjX9HmY6vqCjt3C2zvN6qnfx7nME6aCrKP1YK7D6DtTrfSxs",
  "key24": "3JUKpxLyAqTLzjJuejZQKEZcYDjXiyVzMkrh5SgaB2qxXV2qTLEa6r9DCPYiAw1J6Ym3WJ6SRtKmqqqEEP9kSc7h",
  "key25": "26vMfRU5WMAiwUAQpvUP7CbpVPhY1Sigb7D344oQpgDwXkDy3sd4hagvneCD41BuQF3ntYBAKqwcrd4RmAzQSCYg",
  "key26": "3W5Yb6zfcpWzCLu5LWUitiAbWqWrb1G8V1iVsJXHSATjnMgZGkex9jWQBabfaspW9dq1jLmKgFNDC6eKhLh6Pm3G",
  "key27": "5bHjboLJrjrNkAuZWVfCvgqoym8EGyXTtqM5kTAqA4fdnRpUSs61cvfQAj1Ep5f4T8iMTsDM8ayvzsMMEd6ioMnk",
  "key28": "2sSxJpShTSWvNKZZs5s3DL3dxbFWq91TZpx7Jw42vpTSMvsbqhQ31yxqaXS4gwLcyJiSvUFSV8w9SjgYEUALymV2"
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
