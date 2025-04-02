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
    "2fiSVskBKd3R4X5KTviiqJeJ4fQPMP6TUG44uW2ZVjtsf2Qmx2hB5EXX7HpTqEBzBS93ZdNNRj2qF2sDnyv8E4V9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kLQmuosCu81fFLMNYoFuJZvq1k25XwDeJkSLoTSrotgf3repGaLDBbz3n7ZefLXt9KK6kMNmQV1yZJB2aoLgFvY",
  "key1": "2dEE9Qrn9eYjtyjfDcmhMibSsekZJ48hnMbNFoojfauEA5dd6mQDMBfvL6uoY96rwrxPuJ4P9s1yG2EbtGtDbq2m",
  "key2": "5oqjyfVTyQZeYJhvEnBBMg7Tcf1BXdKjgbtBcLeNpUsyjJCHQvEH6tNjdVnSvxPfQ9dHcgQpMr6uzqSBFMPz4FiC",
  "key3": "4srP1rF2CxHtmQF7mJzrdbuiiRjKPddXcKFSsdFmDfLWsJn77eWPiB3KsAT5S2gae41KwqsLNB4hJp2nBGeKDeud",
  "key4": "29wcLADNa1WMQpE2jtGYRs4MdeF1e3ccw7ah3WVbwHNW8WhP2VqQiQzE8ujhqv5zSzqtGg4ZLH5WG3sieeLz492e",
  "key5": "5i1YDwRf4iz5gCZ5WtVjzFWnFbnzwpfSaopCSgLEhmcELjS9893GLfnpWw8jXpmmeQWmC3fNhEiqRy6Ce7NrpcpZ",
  "key6": "3W2jhCWzu9YSkrdTr7QiMstqof7AvQQ9TvmMUsB8D6EEHeq3GR5zxSdWWeHM4zPLpVL7uJdZNGRQ2aVSCnvYDJ5J",
  "key7": "2HKf1vcu2dxSSsQatbdTCCLxLuyeXweRgd3kxPQqNdX96U9iys5kzfzuBJQA4USCnruQHbCqVdyUVrykTMnPi4Ws",
  "key8": "3DrRtUiyaLKZ9bKuBMCJKFrV7zwh7N7NeAPqPtjbZkJ7961R1zUTn6M9NrEnFoCSdNHA3BjrVoQUSkzCShaffnzx",
  "key9": "3JeWCoAftuPJtTfxeRA4SeE7HLWcQZnqZQzr8sarGCZBdrWSmLUqx8ZtEyz1Spk1baVZZxexJ6fGeygLfSPWJ2Y4",
  "key10": "x6mEhLeFkkBL41ZGjv6c22dnZz78uMkjfcZ8qpEiy7FdUHJfCJ8nYdo6EtNfNozA19Mv4aW56syoDhetcSetxZB",
  "key11": "3ZgzGvAXgGgaVc9tJDH6Hrk44GxbHuMQYkVUs87owx9PAUKSHicw96qPVrhxjENUfivNm5W5gKDX4zvj1j424opi",
  "key12": "51iniiF9GDz4tCRpQbLvfmbiHp9VDFXeofHkAU9v9naSkHxQWkmQTd6osRZ9pZYqvD7mt32SKA1fHXS1qQqu8Vji",
  "key13": "4KUHfFFfoinbB9pweWUqyxnKMUHVswYwnYim8PAVZe824b2YbhQtgfHuLLegFL63dyJvanhof2u8smyor4NFqvnX",
  "key14": "tRrAS3BsKc4tKVoqGFve1uZcwCcXxFoqLCVZt15AcEtkjKzMQj4GLDa2NMV8NH8ZhKW8zu9Zz2P4LPza2XoB9bB",
  "key15": "3wWV1upZkW5f7YHTwAXm1Jums9K3gWWXgRV5w1mk3bQ3xvGnKFGAvFZWL7TDWiFbfh6ACkhA2Pm3t1eBUPLubsnr",
  "key16": "3KvAnFpXscuV6sXSLPVgaLxHS9WKN22kdevfj6winoxkyZ6zU2Rd5QqhQZwLwSzm2B3pLWemkbjLkzsyEPqb7aBa",
  "key17": "qjwRHkurXXQ8gr7mHkUxEWiUV8JPxirSRSA4BAvDJu91gEWdUBDuanN5XLPbyFSPzEsMVPKxyNWvLxiWUCt4TzK",
  "key18": "2163iDMwrZtUgMKBYLrtqi73fRYrGy1QZzo1RjJBzPjjGgDqpEzzaxNjrNjPpQ7EYaDuhvoiMfn7gcYPfcjANEcy",
  "key19": "28o5Lr1v492BHu9e1D3Uci1pRoiLtycg34Q5gyTcfMz1GRBxPW3A5L1nTAqaamNLeLwa1QHFqaqBrVaR78azoUYw",
  "key20": "5apbzHBJgjjvusbn8eL8xmEeueFHdKgyfDc3oZvo9gf3i1zoD5CgTXb7FcAYk5YnFDkB3RyiHwUAdjq24WxQqLyH",
  "key21": "Sje61oejRyRmgtztnh1LTXmi8hB2JuYniDuEvUt49rmSWj3hWCmxJkxxL2Nvngcep1WfT5rnwavyKkUAT94L4dT",
  "key22": "wfxPxM2fAHF5XyDPoYXPgPuDX7gpsJ1uNXxf74BPmQeSBWraRSVmrxPTJQ8dwFDqDLPiNmuZHwinU9zd4CGSn28",
  "key23": "5t1Vta6SjsNKrq2shXWhztwfwMSDedFJypByt4733iNv5hkD5kGzTkgHZCy2yVLrK8ScXMDZN5KX2fZMZkUUxpVV",
  "key24": "3UPFXHTvRdZga7Nf6hhetTAwnJL6cXMMxwsXQwEPPEhAatHM1tZULZSStJr6EfsaExwMc8ZtqEzZ4Ri3CqsZ682F"
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
