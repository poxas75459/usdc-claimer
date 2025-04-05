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
    "3PgpD83UE6RxVzuWpoMmG4J7ykLCtk3SRu786eTeCMWjS1NGmneCoRWYoKhvfM16WAKamCFEdc6StYH8cwXJWXTq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pPPo6Bmcc1ernPSCa6oxLRYWzVwUVUi1p97uTykWmEB94bHjH2JGRWF6KaEV3YsAM2hiUXb5PPLtoQx5BMgRipJ",
  "key1": "1gc2qBiWpmWSKJ2cKnZN3oJZzpRVyXFRjxS3rUNFmrzu2z8Du1jX8GiHcYyPj2uav7a2F8qz7nRr5464mB3pyfi",
  "key2": "MFQLCitVzLcMc7ZxpyRHW5dkD1PRtgH2BtC4qoYiwjfAWrGYm4kSGwtPAZpE6sBCVQtPi2vXk3B5ERmMUES8JCk",
  "key3": "36Dz453Ag4uNERzGvf3pzjiZN36wNdRuvHke2WBAHMNhzYiUqjmbQsdYUMTZLPagAontQVfsfZD3qTk3fMHZsMQb",
  "key4": "2GZAAPqX5LbbpXkHM3qoYCQQuNV2MJLmFDP1bp9GnfVjSrpSdLobs6tJ7Dr8Wy3mjeP7QQu3HpnUrum3ZcuJ9u3b",
  "key5": "5HHUaT8U8GrxukV4w1txJzcZgH7TLsMHedgGGV7KQQMuHB2zEA2qQXhFJiF8BmbWMcfwPSJCeGFpkEHQc4c361ts",
  "key6": "37s7t2bZuQkdVxu82pyH6oDcJhMHsPbgpMsU66jfitL7nFLRtRmqAJ6xQEsXfxRNcgd5XYxPNvuXejSGjbBJGDY9",
  "key7": "5CPGKJTnxsxFQ9LRfonJDa37whRxV68v7aWVSZuyNoGz1yKkmWS3S8o5uxKcqDFNt848Bc83sUxQhGHFS6ZN6uBF",
  "key8": "3STrK9HFLcCaDsn56P1vRTHQZBCjKCnGN1ZTHr1r2CKQwEwFSEisGk4Fmq4VnfbETHwwvNRUUe2MtdnmHAHo7Ht3",
  "key9": "ksiqSTm5ccrmGKwtXkaHZc6rRSC5mpz1NSAEsMrNcmRRP7yRhEzrm4a7xQkUqq1faNq2yFdrfqDVSnvucS2hnmf",
  "key10": "2XwVkyb1ECYCeC2JGtWGNXLBqYupC2osixdj5EZqjJrtvjRbqSfWo1tWocb9LvzzRhL4bnDPT2AgyPTiTv1NxXAi",
  "key11": "2qLGhFMkhBmZmFWz1S2nKuBXavHcw1QfrwJZMLm8hrBzNBne7CmnRuVwyqMWnYkiWTHUEf9QhJb1CBzXYwuXyqqE",
  "key12": "5ug61C7Udh8JuaNnZs5yWJyEwuh6erNQ6ZrQnDn6G8enNZXniipW4MbVFNdsDmbKjCUAwpWU5fA3yKio4crvS7n",
  "key13": "frE5rwq91guwbYPQ4Ae2CWj7UtFSYCQYwkLBtVBsUxp8qppkA5ah3oZMDYmWKoUtk8rgktACw9MTLUjuXiQDZq2",
  "key14": "2PUovEKysSDD24Z83Bcy2KXULJeWqSCantqeeFE4vZzgWoytyXqm2JYMTsHxr4dufLiHSCuFBAxfeDzxZJgWyAHP",
  "key15": "5hEdk24voJ7Dxh9RVeTgkfvxpz96BMZMitrW9AeRNFRHJ4JHgNin1uJNvFNxRaAEKSWd87VV9dkky6pxM9AHfFbq",
  "key16": "4Ut55MCviS8vjNSgdsB4C3UU7RiezxkwQWLB1tEWQwZ9AXKjngiHkW9k21xAkyVb1MbeRXNYe16b9GGX5qpuVbLN",
  "key17": "5BaBnQt3kdyBWtxQnaoMCcjc6AR3b2CLyep9TFWXAR7yxU1bvEWXRwU9miGtUtsH4EWxeLF6mhdxvnXHR2qomiXa",
  "key18": "64YKxxN3enVnKkWD8NdGrgsfCDeekA7AYWmhMKPgGsfp3jgX2vE2wqxFfebYjEXofKzcXs8MVv1tBDuyp6GkAW6Q",
  "key19": "2smx4g4B7HYGgiH7xX38MGA77tWMKkdT7xQ8csWupkKVqNEBkRN5jL2Bd5mHVjcAHWt441xpMembDm1jJBavurC8",
  "key20": "5QDpvkx2PWni9s5gPPWfZZRWcobZnfLai1AmwRrfqmZ1Qv4Us6aKwG29hu8RHX1hF19iTHSBqeGv5HQfAeCaNwN1",
  "key21": "5KrVnE698VwajrxANu4q2aG9kQKKF7J3pyKCtX31bgNMPT4NtAjXDLx7kPdbg9etdKbtx6NPyPatUdnA9nLFjXBz",
  "key22": "5Agx12hfeYbtPbs26t2yKtoAPwo4ZJgA5wFBv4kmn9egYYF8DWC51FmDGAUNtirSd2ajf1pFGPihoeNBBqBKZNs7",
  "key23": "es5QoYKz7PjcDwvn2Hkg4b71ss7ZkqC7TeRiSYKbEGrAKmm1TkL85e3bvQSY2CY27TPgQ6j6WWWGHXTTt4v4KxL",
  "key24": "4ARrAmZQiJ5mstpNzMjsSMqDHZMW1uMbfGKgjVRfDZRn3F7otppBFMMGqVk6D8GjJDmtm7znQiouzffxWCNAeurz",
  "key25": "5oYeXJcVYBSyAa4fN7BzuX14ifN2gpsDY9qzg4Z5cU2WmZAY9edywBFjVVqv2cdxbj9WswvXHFEfAZn2rFZj7mhZ",
  "key26": "3HL6dMSzGnwV4SaLMoHUinEadXDUe78Uztqdid8wVcw3UdNoiZhVcdz6g1k8kJbeG5YfHs6HN7BFhnEc2jd99fpn",
  "key27": "5JTA1tcNZ5X9Jm5VPrbbego6VArF9amGuDq3C6bbxjdjNSXxWqvv1D9TUSzz6Hr91WBexV9nSBPcntHom5Ddc7hq",
  "key28": "q459xQpvaoLV8R9oX6t3XcjFcNsKdwTmkuasL2aKKUq7WAKUQbVG61U74GEppXXbo9jVxJBZ3SQwPh1kNjxNhbx",
  "key29": "UkE7pP2ityNUgLRLZz5xArKSiJREfidNmZiafNRCN3n7rEc4D1tTaA8PmrzRYZEBYjvEMRKe3UqEqDPkxW9AQSD",
  "key30": "51DNrYnWf8ETQeW5BN1b6P6kgTJaSzA7DHQCHscrbmh7GWQDpdmD3bRhxwpX5mrnUSbdAxZPnsdtMGUEMMrrnY8V",
  "key31": "3aDpLAvNKU5r2cYoisEFUbvN7j4DDVQffMPZ3NoBzou7nMewi2bBcMF5FsktCkb3pma33iAqFrUL33tqEH8Yzyv6",
  "key32": "J6qMPgh9MqPrC2yMPAR5F95RPmTf788NMKwFwCtijS2z1CTxuGvSqcTtk2ybR6qaTCbhS9KnhzsW3JXrPpQfAxu",
  "key33": "4kHW5h7m5y3G7QXN7HHa3JtgjqUQwfSqamPxcvyYT4D9UtAMC8atN5bNh5zoGyMCp6xgL4SfskQnWJ2vpVyLrfkF",
  "key34": "2AkkFDbGs9t1N1eNxJksfyJ7QuxE7tmFAgKsqW39bXvgWaBvn9eq2A44bVrEuiwpmRGkVh7ESfZ2AZZjwCeYBDKK",
  "key35": "64poZMwC1XNzFqXBdEq4M5Ecedtcn5teoHn2fvAiH1aJW3Eq3owD6SSbDJdjAZ8XKzainKtF1GGhq44fb5JWDhsp",
  "key36": "4qbWjUmffG6pvU1otVPjALmDMs81CSDARQE4sqtJ2vjo9tFTYQTLsQyXvVV4RdED3tUFL696sFRSN1XTBk5SHSsf",
  "key37": "2qzGy7a31ebKMFy1gZjUPiykAbHYgwseZEkJcGwA6dbMwGYz9cDgwGg3W1M17Vh381dCHYgJEvX9yC3sHQPfL72X",
  "key38": "3YB1NuWKHSGqKVM3tJ1J6vp3HpnhpvzdbCXpyzNSNZGgYyMTqefeDEBszP3dsPqLdjAUvgiab8LqUeyX3jX5rigg",
  "key39": "2gP9MCttpzX4H78T7mC1gckAs6A1mdpxP1K3zH8if3uE4DHFCoyiyDgr1S7W2P6V3BuLnC1m2DYQBg6C6ry8iTRJ",
  "key40": "5oVumP2JdeZ4bgQXZ4JxXbEuaNLq7mGm1Npbz8TAuJkvqpNfPgZJoiuAQphnUHGEovXkYn7XBfeu58Z1Aw8tvZFN",
  "key41": "BQhuPzVKrDP3HkhKpRHsghHPxDWtHK9xywfMKLezmJmLkKNfnaBM14EUWwCBnihsQ7J3oDpW18zpYWbfEHaPhK5",
  "key42": "63NTgn538ceHWXSy6DGPZKEyYPh7bWDp8HkLCdLqwPRq9hbrsYDcqGQGaWsws3JY9GmaGFeX6xJRNpweANV96pKq",
  "key43": "3XmXe4yT7uuDk5a6zUijxUZaXrqXCsvaN9QmeKXpqHW2XusSE8XifnF8FnV4raznAEgnsekEgun3MjfadUAsPvSU",
  "key44": "64ZmzRCTx6zCsk2VkaXBjfzjSqehkjrBXT7i9iFq7vSj7HVvEi6uXQMp2xd15FtagZc3ztA7iaXxpoC6xCd7vgPR",
  "key45": "44Hu8WW95R6FmJoCJewnHUtnQrspazGYV9PKB9C8CwtCS1ubDcuLhG1f22y6v65bT1U1y4ZLqZuGVJcrpY5i3AJo",
  "key46": "3PYYSXARSYrNVfJpMHtzvJPi7JCykJHrQKF5EuUGCt3jHVCf2ctZLG7nKFvg5psSDH1KER8HCjuYV6S5nLFKgUEn",
  "key47": "3sSsKyqgLLzpUMU6o2bX1mYW2kGmCSHiyRwbg2j59W2MroKb3KBp3rsPanAV4pVLF51uPUaNaUGvnm3pLfpqjo4U",
  "key48": "2cGrft3HyHr3gKpeeeG8JPTBr7Thn4h75BEbLEcWiKJaSioRckzweYbRWKKhht65CPJNqU825zhwcXyrS3NrXCHY"
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
