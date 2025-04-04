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
    "5jz5uJkgJB4Z2wDhKBht6fr7WHtRgdr6qMLmUXC8iiEcy3yLzcxAvAJm73X7tAMifWoguPin4Mz2EB43MbzcyGLF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64PNDkoFdTTu7mpEKbHb2L49SRqSSxvfnUZyAcAVLyF17ds6e2LZu4UnwBnLTEVSwKMJKSi37U21hYswr529SWuD",
  "key1": "3QaVnSvyS4SNKup5tUstJWxvED7uyizmbVZvhpJzvk1o98fX5QjnDgXuvFFkiTa9AUABuctYQhfyE3bKpdunDAFM",
  "key2": "4BjMpY8wdQn3dqHsTFSmgjusWQKwWzjX1Pkwt1FjXkmKTqBWTo1GHJ8DcysCKeUUXZGLS1kjXhCxmAE8xyvkTUjJ",
  "key3": "4WvYkDMqxigb9Hx2F9DGzPKf1BKAUxSmxQKaYM5jfCpx2g7DPjbz2T6MKaudPpxhHiioU83ybUXXGKpUHe875id",
  "key4": "4gM8dJpjpQJq9y5HuqayLedkyYuKmAmujs3op1N2Qt5yXXKtaA43gKR9VRKxKVS9aGJBQhijM1FPdApqXrWhSL45",
  "key5": "2jKbUB8na1E5nj1pGTgumDzp7aZETgrLUYGXhbCKhAnbQRsPinCovF5qJMFArjHFvoKgu8nBRNkZv45QXg9fnMpW",
  "key6": "4VM3toV8DkZtMCo2Rs7WVdTqupZwbe9UtmGTw7vZdj1DzKrPaY5HQ3Aoz42d5UtBfei6P4SVXh8d8PMhEMSNAQip",
  "key7": "hMatYMuEkxcLePP2hjUfBTmAxpn24V8qXaEw67JYtuwAMykBWuc4836GMEmzynRtDyyo6NxQNwsSzymAJkDfcv5",
  "key8": "5tRA4XyaArFnu2RaFVYGN2G6NPXdiQNsupNGsiJXJJKimMdn9PH1RCXpzrkGLP534bR8UJBhev9scss9YN7M7DHA",
  "key9": "5DGZHdb2ukUKupxq7bpojwFHEuu7q1GfXHv7W1ntwscnJ5aT8kSnYUtmtttM4TLaacDf5wRcHSchjmHiHqNdicnh",
  "key10": "2z6s16L7jYhDHhqLKtXAcXXruk8BZ2KecbWx3oViXjsMdsPN6m1CCpfv7DJLqkpCuMMqeD3oRbu1W4WeqSWi1hTJ",
  "key11": "BdBCRo8mdegTJ1vSHvJL7AhRFgEE9HyFHVtPg9J8cgQFWFCzumL7hcBUMh5qu6cnEDWxVv3wYonQQ118TjovxYH",
  "key12": "5jAtEAo8iZWYY7k5tbA345kxzQtYP2if198bCj8kcXfZTARY3SQvUzL8wr2EKGv4F8yMBUtxpFVPf6gYnqiTqyWj",
  "key13": "2YQxNgTtMmZfWospnaZ2gAo8WDudrWsJ5NeB35DUQ3hz2wgs48tG8FP32FenU4XifVLL9vo73q2E12evAZU7Z8jC",
  "key14": "4v3qjFS3g1oTcHCnFkpZ3Ru1JeWTCR1mqGbQbZHeNKH1XCUnwkwxLCQySLHVMnqEZ5y2LkstGcztGFX4fG7urXZm",
  "key15": "4zzH7eJ4Sek7MmG8sQR5NH8ZkTUWLtPLGujnrcsdZ6vS7kBzB7wnubBGgUc54AZPgLag4BXvGJMmrDGnQGg5rfUL",
  "key16": "2xNZaQ9yJmzW3sFgp7sHjDHuPL3y87f93hKkdYNHZ7thkeM2JgFkAsx4wks9ixitqxsvfdLpTHYzHiXcmcdALVeQ",
  "key17": "5TT6KwdNQ8GjGRVCTfjVoTuq8CUWAG7vtp2jzbeJDU4DU42tuheCi2y32itRfanDEj9t4NgYQAyFddE4XQuZK14x",
  "key18": "GyyssDEXYX2KRvU7BNxXPoGLXJ3PoRtHXGM9KX6Nr7iNzC8aK6Fyj2JEkBEhEVfgUVWLs9yHGrPR2cSvvrpzfyJ",
  "key19": "RL5xJE3naabXoFsc3hunzCQozjpbCgmXmStJJmxZPayQF9PB2mMJyykuUoqv3SvrAMDmqVGcPmLgZUTnrpjWVmb",
  "key20": "5y4829BU2Ywg9P2UkK3nPML7wZJLiQ2XrKjzCA3rpM3SXA2TM43WwDXFCiMHGy3Lop6B8xe4KhihSAYGFWeuF33A",
  "key21": "4F9BsccYBBdxhFCEV4XUZtDXK34SWBigekHo9fkcVbWe7aTdZmXjyM9AGvAVktQAcktK273DMC55WcWoSAJVAM2r",
  "key22": "5xBeRJd3aN8NC4egrQ98L5PXqTtHCWMbKbhTUFyxkEsVzD1dKMrJFrqCaYDaurz9Sw1NXY2ms98Uj1CY13DAMhne",
  "key23": "5qpYTrS1uiFR7Lc18FaHHrKoeiBfFF15tHAPwgt6bjbMT85ukhv4PWfrjHs2KuRb41acDvoMGTCE8fzB3Spfw39D",
  "key24": "3Aa2C4wrH1QyuHk6vfCzwamfzozYAGznviUYLZaFUWPM3EFAmthL3B9XUcba3HrtrQnxAe1ayLrMSGvvGkZHVqKd",
  "key25": "4EjX1ibkFoDUoghRQr7j8fbrC3HcLZMspnaJ3dfeRRxcQHyFjVTZD4YPJKfiSYbK9xtGFb9WSgLff4e1Nei7cAh9",
  "key26": "4HJTNhAz93GjkVTsKnaKwQeq2bFpbQDsrSRx7ZRT8oT8BYozmQMGkizCu455jcCQh1KVFJAwVso4m6aAy6EoLqh3",
  "key27": "2khDwkyn6vCCkwpBkeRefwYbVtAh8eTTbyUpSmwdeErMQutConjSjFVNTgxs5YdpSumWfkcNQVpgdx8XWmnCGUu5",
  "key28": "4SqVhbeCjw8y2LS2cX7VjjJN7UyGD6pobKmMFZvRpskXe78xCyh9xG4YFkL8g5ZEd4ddphGRzKTvvx7zL6Sy4fj5",
  "key29": "2Ki3dJMXnUmXpVew2zbM5qqpXBX3uQr4kE1Wu6imsBvVjhADjL64WieyF7RQfCoxUupoBcxukXgH36AYXdyjsbXg",
  "key30": "3tv6tRiDWT42ujDQ6oF7d34MiuidrYQpvASdzK6hEjwxAMFcfrRRGyGMmAjjdJfHxBMsMRpuqYXf54nUTKCe8s3H",
  "key31": "2nKmTRnxUrHWJxVPMXiifrLC9BxMiHatjd9nThG4W4pfFSmjEqDXrkByXEamanHjCHPvxLcQFFg7ftV4XjcJTyqJ",
  "key32": "5UPXZGz2tjVD3U9yM3PBvkHAUGrPzcGMjfpHiUiXQmp3iKy9aRipC8fcFfoExFYD5zSAZBx3gSdHtVoL8Br2953f",
  "key33": "4SKTEJcUdPg9899muxPvFeNtuhAFRt3WLEebn1DA8Dcbiq1FwwYgQ7poyfeDJKS6DCQN1hoWNa7oCvbAuU32BRZY"
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
