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
    "5nFCSrSdEniYdY3bVRg4KTjuU1SFW3CdWrzMAALcA8Qj7fmPWPX2VLpbFsYxGVV9dUKTECG8dQ9peQwiyqVqHfD2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z9U57zre3fWt2dvJBtgsyBQMrQx6apoDheyLA3crLcdKNjqhJPgfNwY95TfrkTwEx3fJLxsHtQB4u4npsSfV9Tq",
  "key1": "5qzWFazAscfb3HXE7GX2mHBfFx1hugGqvoU6umjtbr192VNSCWzzNW2SjaLHTiXu91wpAgGiEVWqQpPzq86kWtLQ",
  "key2": "2saRCCLddrcXNuNuBTdr3DitSMHVoEbDE9pkhY5ixBBX7XizntXvJsa3Fj5WMWdJnEMcVEAyPJvWPuEU6Pof4iMG",
  "key3": "61R5wZBLcw1P2oF7Nq3sSkU4ByAyjAYMHpcGXJiyAif2L7KRjE4uLDntPbQYmWCvHLwnoUFFAhTQtcxc9aepUM4w",
  "key4": "AJNE3pDeBnHwWyonSNpJhRNgUc84qbPQiZKwr5KZp2pfawi51HRNqQLKDvfgSYgfLyK87JE6d114vpRutapHL9E",
  "key5": "5h8dFtihFDoHD8BSJiUpw4EPR79Qf6YL39N6VU7KRBKZ2QGL6MnCNNWERi92KWHWpbm9rKyrY7pMdoZC3oRw1VoK",
  "key6": "2Q6XWcP11Jg76B9MRrhc2iVHBZyVQuEtELpUearVhBSk8Fj91wXsZeeYHUYS4XCc8hBiyrqCiRHUj3r9Y9MuQWtC",
  "key7": "36mCCkJ1Re6oq1dy8i3GBsBvWRQYjjJXDUxRStDb3GcVruezmf17SuqVWYhPfgsfL2SL1SnENV7ByjKJvUCuDb9e",
  "key8": "avhhEHJc3KNDJssULDRNmHcsuuLaYigiFYfBhDDXh86ZquSE5P52MFgK83y9vocWTrFi7FM3gMcXahUaiffZyDV",
  "key9": "3spVVSjrRR5KkzqcAV5uTK6bSjDHsPXFfQu82RASdqnCQiyuk8rvx7H8p8VpwDRaGkbDh6bawDEQHxhVJ1pERJar",
  "key10": "3QdayG8V4eFdtFeeqMRBjvjvNyWNocnu2J2mNBxj7AvEzAjSqQqEfoJAQNag3hxnuTE5GUjXPCz5UkcdSKU2p4S1",
  "key11": "5JHbN2HQkneZaexHkJ2xS6YbkCY4kTvNkeabE37JwxX4GUVZb7L8DXbbnAFC43CnE6FYLfiQaHaQuysVKBmFhSGv",
  "key12": "4KbZP4ZhLaFGUq5ujai5B27v9fZ1Uy8rcuByLJgmKkCjhtzuV3v7Ubr2vxHPWeaAtc4TYJVDEBMD5T15ozRX6poA",
  "key13": "36AfUVuHWx8mVgiZ9aNktdYYREzY6ikihVmWb6FiwVyG7rDnhXFCGbeK8PfwX1azoDNTXb32GJsHtcfmXqW2fdJy",
  "key14": "5tB7qRWqjSAxYmtvzn1wWUu2cqWML58ApmXZcDPhhVDpmgtgBwDNXB2wTVxMVzBY6qUQhVHTNvSB3zC7f3AtUwNj",
  "key15": "5KvTXvvSJo25iqdUCJrvA5qxPuYjZz7Fc4fAhyM5jk2VaKFc5ecUz8vtF3ccfR9idrPR3x4Qfvt7UqSZuPjmiJUe",
  "key16": "5AMehqXuo6Q5CzUpt3xF9VESUhBh7BdjZKj6uUnyxuhu5ieULC9DbNCmtWqohc8vqsQb6a8Ur88NBRN4wRpgMNMe",
  "key17": "2DeajyZdNjKxUoKR736ix9Fpmv9mj98j6Z4W6ZYqn4AjfPZmvNHvmv5fUAukFE7TjASDxku3mq2W1RocE9TEuQbY",
  "key18": "3bU9KSfYKfpWXf2Lo11WKwFdD7HTaSU9UkntKxU9C1i2EQ7crKDisZzoUS6bCeLqgQQv84qAA4b6CkA4n7Y1NytW",
  "key19": "29cojsHDKNgMXenR28vBHqoBzSUWizuhUAqtNioDQgbVsPvKuRRtcQSFNRhxgYpuVn8rSs2x9Y3K7zs3H6bXJHjW",
  "key20": "48i47Rs7b9E66FmNb38ApK4QY1BUzQmB4n9y6m4bheBqDjuWcjxwdSWUfAVLN1NzUZ21PD3Sxti1WDMVuhaJkCK2",
  "key21": "B9G3eWVj4jp5asQchpS9dPx5tGjfpqQHbtzbRe2J6EYcPLJWjvGiWAGaQaQv5miuMkA4X2pZo9kHMxscWHHYWRs",
  "key22": "4m17UDmjc3XkFieMExnb2VG8xne3gY7Auwp7yN3igqbnV585krizPrGRsDCAqyPzXgiHzn6kcCWrvXt4f8wtEMJC",
  "key23": "Ta1Ta4ZQqbUdKBvPcPwvaj214HjukxBn6j5rVhP84uVPXE4aQLfHGH1Yc9QnnEj5EQ8xH5KYuM955KTLMg32FAS",
  "key24": "5XZLim19wdiu3rUfbdxr5Yg3HMQXg1AkohQFziYD5yhfuHpBoiYh8mnrLu1XvvJ5kWvD61TDjD2YiVExPqiPQF3W",
  "key25": "4h55dahhLhazJ3aay5xdtEPQRk7c5vsWQ21yBhDQB1vDwPcristCkafTe2n43yEkj4SFbZ5S4mpyESo4vVC6SXad",
  "key26": "aQHFYyiAHXDUuh4xiQPUMSVMRs8z3FqbES2gC2JkEnWuUhzd5WPV1P4GGKuEEGWXeXBX1yKuYzw2Rtm32ViqGgw",
  "key27": "453xe9p4sMUCbYgexLqTgTxwrTqx2tQNxeVf6AkjsVZpmidPMHweEE9tNbKJDahmEmmSbwTNUCJDRm99VpdtouQs",
  "key28": "34WDja1rbhmeLU5umSTPiPtxWoc9Yea8cZhgLRnQ8gfNFAiZLGvY29xSSx3Nh6g1MaJxNvtw2ppNGsuuo6fRgqMt",
  "key29": "4dHmMoAtCgjXE2L5UMa1UBPLurvgd9ngEcekXP1v6ftWVHYMb3PuGyvx8bxZx61FAVT4Wq5ZteyhdVw9AGnXFXrU",
  "key30": "5aMusYf3kwZ6Pck2sRNB8Gn1idedDVnLeTXmCw8JioFSiLLFSEgKYdGVWZ8FAEp6pxu28RnWXFZK29Ge9EoSuRfv",
  "key31": "7UNJktKscNEmnKG7SuvSxL276uU7jvzTQR314UdaHo8LWNgfRFa3eHnNbhawTkiZtgQmMqUayyQnfBRshdAXMAW",
  "key32": "5T6xmc857T7sRmc3cU7652ULEdqnTz679CVw8wRtMrFVvctT8D8S9ZR1qv1sHPDi3YdbMZPwmLNsLxhkF9hvfrKk",
  "key33": "3sNPF3YSjPKytmDKUYjcNorNdsJsASN8ZP7FMtYmFkspp1bsvmReQFibVq9qXTDeAZi5Ljt3MwcUAdpAoUvuWr9m",
  "key34": "4Yy79FnixeZetT8rUgABJ7oFXhVT1Gc7kWwQRuRpztPw7APFkYEyWYahisyMCmFcQeUmwhRHetSUtyykJezrQycE",
  "key35": "xhvmhvJVcjRkAGd9xgS691gFzHmkE7Dwx1fiRHtQWLKJkseX8c7UfuQf8Cqfdv2FePWNHjufPYYFHAhLUNBi5T1",
  "key36": "4khpMJw9EV6VaxBGbLVJ3LBGhJ9Lnh2uE4dvnQw8N9snhxyfEbYbopGEJ2bdKPtxMe4HMAnSXq4t8ahLh1uVxRFG",
  "key37": "5MpjJhM6KAQgB64HQi3s3q1J4FyKWEjuNYYVtDsgc67VoDLSDqfM15oVvdCKTqHNMu92HiBWzKZNqsCPfQuu4Wfh",
  "key38": "5LQgAZQWG45ARkocNVqi25NKsXkZ5M3QFeQmrUDS17nm6njSRqbC1rkKyAWmTWMkRJmGC4LGpSMfSnWxeYFvKn4y",
  "key39": "3x2mHHDssHPBiEDqiS2LdopJs1uQP69HDJgRM14Wy54brr19RjtFr5SBV9csgYHJ3KEXfEXm5GWzK5mSAPRSUZGT"
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
