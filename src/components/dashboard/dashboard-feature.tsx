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
    "3HzCAEJyXcxYEkZGjTEugNApY6GmrcYUKmwUgwCDKkSAT1ejSaAF1g6HTQknUfdefbp4LkXDTBJk5qcz43fr4f5q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i1UGULovhLbK7YoHDrktEjK7xFUE1Bnn9TBT6bcrpXmm5RgYFBiipAbg5V9fkKo5mGvWKiotyRk5mrp78bSNwYJ",
  "key1": "21mquhdbQMYDNKxNG2DKjcxkHmwGD9Px9TADfmQd4WoYEDivJ9y8MHFhnZdfMGZuvRQivMJa5SVFh5e1gb5bUdcK",
  "key2": "4bqUXTwajzsPWb1SnBYu5zumaaPk34YxJt29gR5KMbLNb8CNSHyKqvPbhmFNm9Rbgz53dKRjd658ERPrT7vsCSWE",
  "key3": "3G3VpoGBDz5b62USvYZxQuwoe7juKmNwNu3uop6TapXKnMFqPMhdkxA4eYLKMHb1zm1emmdfNokRVgN7Bwnt7jGU",
  "key4": "351X8X5rHMHVYoY4hTmZhMtPXs88oAAnDdYDcLmASE3M418RPLr4bPeyYMQ27mJHFag4JBjeceWZraq9uQWdufxa",
  "key5": "43opnay9zBh5SCpKTuN1jYiZ9N6ZjmNXDcgwB14YQRic6hrLPmrJLQj8BgXRoZdeNjjMhZySf32EiZgrQJ48P5bC",
  "key6": "3PhARAigehsriAPTp8a5zxVH8eD3UAtZ8NBJfdJjQV5xHqrTdLPwUZwaksdqUREPkWUi4jzMvbB2miE4DKfWs6c5",
  "key7": "5h4Skn8yjZTvWGa7FZ6FsgxTFepusmBLFPWj44hLZAwvX2j4meicaBRjC2iCR9VYTRWZUE2zvZYe4p1mPJZyMQyw",
  "key8": "tniXPcMYJDUZUybgRXGh6PDQTeM42cSXfqLnm5S5DzaMbwd3xv4UqVFy5v5ff8Tr1xXyHwjmJwnpvn3FNXfZLKL",
  "key9": "45aqobsMs7AY8hGFBbFh7KEVyqUvLsp3xm9JWJAv9ao7CiDaehikPGbrtcHiYJCUJCzwDX6VyAKU273LHnrvmxmJ",
  "key10": "4fyRZAMFNFPyh5mMf4PL9KFBcv7XAXKnbNBopFPJvA2voqj2j9PzYMpv3KANMuqig1Bf4B6yvUHVLGNNxv3jHtvY",
  "key11": "3Pu59SpJohC4VQ6aCQCPTUrog2ZaunSWrvqCYk7dvanFAxwrjg8HK925gVaHKTwV1wPgmsGrx5RvtudLdUHgdVRC",
  "key12": "4UL16A3cMS9PDDKzrCHF59qtSSMFe7XZMrJDLueRvgMsZwHvbirZPXz6KV7P63dT6BL3cWvmFMWe6f94M5bHndJG",
  "key13": "2kHxHjzu2w6S33wMD5ipmRZfbm4CQYWArTC5mUbjnyoQZGVhPYWDwyGh8hmggp2rAcSB5V5vNT5JCK5WN1bMoe4x",
  "key14": "4dRJ5gTUwhwpNPZkxX5Sn3VwdRTwtjSKk2m6XpLmaBQVjmzfd23qRnkBxuv3em4kXMTViAAGvobdhTBiCxECbjyB",
  "key15": "KXBZgHoS8nZpTL5WBh9NT9mMCJjg9qQ2gkAN4H3A3vQ6ZtTJnxDbXZB2qodz4HzrmpjhUYsSDyAwQkJWzGN4v67",
  "key16": "5XLQAMKX9SUtsAGcTiMVGyQKDUg3wC1hheEhtVoYQnoCnpaMhKRRGNhASd7S9RtVSsmHT2Vr5mSfJKy5hpdaXXYZ",
  "key17": "iQTGcX4Z1GUu4Bwp7329jWgefYFvprXEq1u58Q4hrpwU6Vi3NX8X79GHGUUYwktCz4XH31AepvksaNeap4V64pB",
  "key18": "5nHc1BkYESjPH4nhRcpWcBHiXWmdqgiSMkdoQSjwwLiH8x5f8ZFe2SC94Bve9nmZsTmCjMQYnzBzSbin6usnoLZZ",
  "key19": "4NfeTjagQGSQtaW1iaycjMqLEU5G8FHftCd1orZ9AssZhLx3kaFMM4vbCyCcwgiDAcfHfubTKkgRh3e6xYWzAVp5",
  "key20": "fdwDZBxZBLAaHjm1uVjwKgxmfc4LSy5nzakH3SYjBkLgp8vfiBTYmhfhubGqp2HddtpPe4Ydc6qtmWTXGS91PQn",
  "key21": "2zhwbAwijJohrrEZLKrkgQFcRcjt2WCyD6NJfvCnnYNMMB5pgGqvMNDuMphjdRJ8VcSkRyLL82EGq5pY7o4WEHQR",
  "key22": "3F76vcfjq2fU9FM3uud4QWts9juGfeqoa6rpT9pTmt49nfrjVejjXreyF4rfo7Topa2iHkYxdpy6AceJWWfzLGLa",
  "key23": "3YgNmWJ8iwcystqjAhmLyBi8Z8TzBPNcwuUKEsMZDs7cLLTv2r2xQxbZYdPMhKMg2uhmezcGkWJN4c3J4qC5GB99",
  "key24": "2Bde2zcowgdgKiuXunsa1q1vi6zLkXkUHNcVzFMu6GCJBkzHb29Q1NCrbnBq9KQc61RUGbFr7fv44SpTsitZt3vQ",
  "key25": "39w8E5xdL4wNeLemRCfAFWjR1mPUN1WbX648nXsTcL64JY3NdKMstDQuCt5FPH9TT5RYF8PkyM7WyCBx7LEtoKav",
  "key26": "5NGRNfaCtokpFXV7m7YvHkPoVXFtTMY7AhaCihfoA9KiHU9RTLoCKjzPtgKFhenrJJ5wAECBvxCAp7UYAxSU1NT8",
  "key27": "Zvr5zd4QPyFxUAPiXGb4TpA4MDJtcmbCpfGYRXjcpiVBxwUdRmxs7zPyQtJmzPoKBMJUeHdyRWNYE2Ba9K761RR",
  "key28": "A1UMkUwih7tbGncAmzZEq55nx2VQoW7q7HSPMge2DCbi1AUfj9UqCvjV9iAeTanV8aPmXM5cAASNEPNWqW2YpyN",
  "key29": "5haNrLGETUdVDahiCUDKSLq547w6Rphc9dzCNhkpwH3kWhKNMCKMDAXN1Xhd5ecWq3x1F9G18wSH8GMVCv1d6Xm4",
  "key30": "34HgpVs2FEnzSZSx5uabwEEaKAYGA777HdPvoSMDf6CCdzkT4v5e56YTzNE1E6D5eTPZAkUqNqatzuiUo8veQd9W"
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
