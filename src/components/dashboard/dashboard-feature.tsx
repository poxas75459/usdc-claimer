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
    "5D9BTjrKSbRuvUWC2znv3E4syYAuJGbv6RALfBwegPB9EtqZmYaAFdLVA36EjRCBfrC1ge1fkgs67ZAu3MyAPaci"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "R1fpnZLJAhQZwgrLpCZYdneDWHF2gBrxpMTLEKFaMSSDwavT4FjGEi62S1XH3XRF5XYCPQMwymKeUCgapfWJXSz",
  "key1": "5QGYhXiAEau6dpuFmmmv2JgQXNKPSCuAJzkiXPFNYq1sJDTotbGerN88conBAoYgua2KcBeV3iWvX4i4rRx3tVbM",
  "key2": "4ebkaJmPHEAf8Y2S786whXDuqdyiP3oQ3YQHwK6i9oG3SRB5yx1aCvfw9cT6vSFKTBqPEwvKUmkJQ7WjW9tg9f5A",
  "key3": "4NZuRRcEy5B94Mh4DysJs3vKwGb28GESBy7VaAn166vAVyEvGMqSuvb85Jra1aaCicj19HGKTPqiA4VVNeowRZbk",
  "key4": "dX6TvPgjhws3SS21o92o7B3ApnDB9Cb6aCxtWBMkBhMb19kYWgR1mNd3xoyEn3bpaD7KiWhFEKH4ZZSK3wSs8aH",
  "key5": "5vydiue4ZWdYuK48p7yurDNk5CtLNMKR7DucRPMdkeboEJQePr7RtuXPpmEVJAYhHViDf4SzYMNnZRG6E46KV3WW",
  "key6": "2KWkvzEvWVdp9i7z72rxZB1uXJpb1DHRKBXtKdkujEf3jwNhTsGuKb22HjqjVpEMvB8qSiBAWjgMDjT2UAzSYnWr",
  "key7": "Z31YTPdcCpQFrbM5jTPvsuNhcW6pRQ8FiGRvmWy6pd4badZV5196hTjn3pYNuzz2uzmvFhhJebcHDFueR1PuqxT",
  "key8": "xdeqtSjYcFD1KJsVHM2PWpRXWy6PiRpT45iMuet7qgLdp5rTh3XLYtbQ1TG6BkJtp6AgG1qKmQ83oEUSxpvUzfJ",
  "key9": "4cSydYhGL2KSbZcPuUmDLWr3a2K3kUZqogTyvWvqH8dPRPU1sWNprLMCvXgKDm6ZzqTCXaUkhVDAikxnEtwJtmSw",
  "key10": "3aCirZXnWuBYwju83GVCQTnkxe4Ro9MNaAsrNRmrSMmLQwQzo8ELgpPBm7r1LKQLWqgMewDULaq5r3gSLWkmayM1",
  "key11": "48zqkT67h8PggKbEVKtMi3LUkEutQAtM2hpnzxhvXgUezKVkv5mJWUhHmvTcrCL5aoFWuWdDsYsvKyFkn7J8nH4k",
  "key12": "5wWuPR1szZ1jU4x4bUmJBofYA7uc24cYtNpXPfsdB41zQkPufx5iuRAUE5n2Jhp8aXYsL2txn6B2GtTwWFbr5AWE",
  "key13": "3XcMVGYLbEcEpdANdWR4y58PTXQ9p9DiKTaV8spFvbxtLfcxwzDDYUhm9KS93gPW1qrzoBArvue53TFRfcmW5nG7",
  "key14": "3mjvbahLjY2BzSTtVJ4RXfZJF9ffoqMqzeDYWpHAREaexAWBWarRkgJ4eSxPMmbkLYDv2gRGb9FBDnY3CS3UWPVa",
  "key15": "N5N2yXg5HYg5xmq294aH4S9kKpyyTHPB1V1cP8Eq8VTGQiXkNxuUTDoA4TXPvGk9bJdVXjeFowWwq7329PAD9er",
  "key16": "5Ho7weZehwqNhYBPegfPhBrs7T5Amp1mmuFzynyU2eWMUzEfC3Vjonkh5mb12a6tgu3J7A4mTNqVEB4JC8P5N4VY",
  "key17": "2zFZYJChKtHPaWcenxTLa3uDck1bP97Zuaz4AYb33uGEDRN3fyCwgcK3oWYPoBvy93df3P4Jdb7ovs7TZSQp93hf",
  "key18": "21q4U174pE379eRLWNprE5wiCckb5QhKPw6VwinmqyrxC7VuZsyiQzxL6jjUgVboBj3zZgcBieYTcmZybSzune6k",
  "key19": "3awpNuybAc8eitpyLEjdqzrpy32JT144UxhBZWRf62MVi3GGxVEkskZp9eVjxYVmFN9mFnSsM2JWDKcgqCcH3Egc",
  "key20": "vBdtLg2fzj7pkGemth9R6yce1inf3FFv3famW2WMPd5gCEpKzJiZgfLLR47RLsb17SH65GhJn9XAfSqnEAip4E7",
  "key21": "4UD9GpXMCQgyHX2scdJSkAemkf25VgFakjgEbmY5hPW1tJYSAALdqEm5J1BH8idJatmmD4eK6xr6wyGyS7dZSEGm",
  "key22": "21btwdKcfYBsDW7pg7SSz53fYdESU8U1z8bJYM7puHdYm12nyBUgpK5GiR79L4eZhPvenRxr9rvANNmyM1WTtwhA",
  "key23": "zdZ2Go6P377GKy2j5GVFaqM9fG48BGPnvhUBPGm35xBX4x7BGZYcDLsYR6x7RbEyFewPZKDa6cuR1cDC4sMEUxS",
  "key24": "3g9DCqLDUx3532sELer6owW9nbp1k7cewQ8NoSJKsRDJSsEjR5Z4BLVDJ2RtV1BDEcS9EUZDoXiKzzoTH7D7fZ1m",
  "key25": "4anE9qwWCsAYPtv6iUo3qP7biMeiKW6bCCYsdNXYU8M7grjWS4RSTjEwRTcYRoTtYrFBJzufqRMKFm7QuohWYXdQ",
  "key26": "2mqzNRYFSsZJBzJ5DAH3NQohnn7FGDJW7gnyz6343raYQJLLCpm8XSecXy5Z9wBGSP5uVF9BpEDt2jEPLG48W3tA",
  "key27": "JpMNJqNo4eGdzA9XGxo1LiryzCSYuQWMxqxjpiCffFizFhHNbujMMNZw2SqsF3gHKN5L8LDycKX23qde4jq1uT9",
  "key28": "MztVoJLdGLMa7A5yGEeqf9nw3i7do7PdsqumMPQfHAKt5JAnR9BnWYthnpFxXLhfRbsiHUCgWbKFffy5jN5Z4V3",
  "key29": "61G6URBhaXnLArezwWKGstWTWqFsmsZF5WCp2YnBcDVjzRBwoe4MZyGHShNHeUx9iJAdRMFw2G18Knhmxo9gNxny",
  "key30": "2DA4EHxVretogkmr2v3JWrCyjYYkyyvKD1LAy3e4sPRYHFR3Zzvz714gNBs5ybViDDrPuEZw7ZpDtBGrD9AtWJ6V",
  "key31": "3TpDYF5BNMnCx1QuLQ7DkwfjuuH26zypCn8kVRTphhUZ5g2y875ZJV5DtY6kzQnybtu5iDKhctNUt41RWuVLzvLW",
  "key32": "6y62P1HWaX5Sc3Citymi2ZzfLkQwEaCLWrS8fsT66mPCaXhY4hGPVDERp7Zqr4DPicnhZbuq37gSDJKxi1Cz4MP",
  "key33": "SHtiSmANruLKjAG5vDZJi87swyEnFrENjD8cedRXpzWKeAGANkkrwwYaQcKoPcGoqZHdJSvGWkq6UKsPaZpAGHf",
  "key34": "5vodES6LFhmPktpvsuS3XZbzxqL4pCRGEefqZaDx1zNhbvxF3uwDJLrEbQGjrqadcGsqcgrkEx4wYBtcpcpDHwon",
  "key35": "527oKapY7Jt8At9G4rB6mUrtTQhBURFWBHbbKZAQ8DcjaHTY1oNJkW5einGt522JxzZjfvUcxAiKdzuRjVcunvbG",
  "key36": "5nx9xmwa3PyaQppU1cc5L2i9uGUEqj3UmyTNcPPsW8Yf2rAczSHVAJUGFxY8GHv6Dc5GqKohyc4NYRWRsJAhdQbs",
  "key37": "5tF1USb2C2excGQ5McYvb8QuJj5uawG2VYXpgnafdopkdq1e3bJkVq5AXwZYcBUrZw2zoqVdsvcgbc7L2R1gUyrw",
  "key38": "2c8A2fswPUGkEQPBa7bHZo5Uh5oMrpkQxBQtp4THWGcCCTacGfY7hL5TAWTSuiS5VqdaRthem4d2NcjGyStyfNbM",
  "key39": "4oWGDNswve4txh3bLjQpv3fSRpxr1aQokZQXVX9unv4FKqtpCfCn2xuYJBN41p75898ASmyc8gTxwxdokQKKZLtU",
  "key40": "3x8owyzWAziHkN4ak8LN82cGgBF1bUtdDGWi9JDEFDrcdyUA4gWhJUasGyfgM64ezWc6njSrTaev2Shfia9V7S27",
  "key41": "5L1gm8whPQ9PEQNrf9TP6P6k7mxxgnEuuDdQEiyjqQccVcTARaHmkrkJ1EghCTfEUT4UjYX2JJ1569vct4nXdk7c",
  "key42": "ANTukQB1YhzbVKMDF84jKTrXJUE1sa1oVRbtcWCzStNs4NQVAPxBfHMa9r6Q7SCDU7yG2LTdpNLveb5QYEG3URc"
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
