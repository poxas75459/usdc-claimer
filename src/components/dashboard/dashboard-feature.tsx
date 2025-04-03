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
    "4JUYvCct9AptyKmBzFNEXdERh3CEMwBMKPEW3B97tM95ufJKxZvxeyys49jhT2bj3ZpUVvfxv451BnTjv91yTzca"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43LF4KRDHcAcJuWGaQBSezdJvtWnpLqZdW5qfqQXvT1iwVuC7cQMK8YjHP6hLKcuvvJ1N8ykU6Q1WBEqFvX5HQqD",
  "key1": "22v2K6MD4mjfqaUQaXogVAPRi5LNFwN738qkpiQeAm3zo7cJjdmAGZbyFYePb8RDBhyrxZnmGfD4K5bNzHVgapYU",
  "key2": "29afiJYyUx7nx31HXnr6znLEmuNovgqfmfKHK6pQunMBNbsCpj45u1RP6MsQbY4ppjTYD5H4arp4MJdVMQfHkvBv",
  "key3": "3PKEgySxS17hpph975vYDYbMLrq9Qajkdu3gKLvZpuJgtMZ99kJknG62npbZyuBiu94SmQbz8gMWjNfQucJMbimF",
  "key4": "27umWFtkio4DVr6A3coBT97dWaq5Ai15sDnyWKJXhSrnJkLH2cCZUHyiYzT4oV6ShhAajbzK37exyVvUejtpjX9f",
  "key5": "3cS8P9xoSTEEm6mqC4wFh4YzUM1mUB5NTBRT7zJQWZZPiJxqwJW97yHu4hLzpLeNQL1Eze8VjWB7zZ1jSky72WuZ",
  "key6": "cGCmTfDfHaMyEcNVQw9jQWH5jfghL7M65ZMeWCRLBfTFPLJ1jUivMg8haSdFHrgBJSjL7Dh7ShuY3dg4Qr5ryyq",
  "key7": "53s9rLctUvd7ojRrYk6X97wkWNHwRT6dmQ9PGTbkSreMFxY7gTcdJwteMbaPX9ZQAG3JgjP6i8NBzfny6PR69rnK",
  "key8": "3hEmuE4oZLef2J3dfEYYSRK9sN45iv5dTUanNaeqsZ51UoYNHbuXQunu8chLJbSCR2JBKjZHCaCsJuMCeHoq1Wah",
  "key9": "5JQMzjEhx1g88ktRUXj5HTY1oeGhEiJoBAHHxnxiuU34DZd8oKxRTLSUG9bkbTne1XVm5r5ff2Ldmh1bhk59KLoo",
  "key10": "UyhgHSwVUcC1tjCy61FyMkLAUj44nXiiV5Mk5cxPCDc2EYgmpbnSqcX4Ah2hH6x6ZqyGmmRxA3sCQ3PZrgLq28J",
  "key11": "2un6JkEJkcsMwpFb67BJBpDsRNTWaumnDMtbnzVmqV3CFUDQq5ghoAC5upu7zaF3eNYBHczqYCSK1U1kPkYEWnR6",
  "key12": "4RQdz3qo8fdt8bdcpfXZ7HzSqi1Da5EHe98HBhvoySteFjkgxKZDJ7wrwujTFLEDQUdWsH6S1sURfrpWTGm4tE9n",
  "key13": "4aBPchYuCr9xS4oG7MtBZVHstvEJn6rMCVbVJG55o7dnYteZ6Gb8SzqcJXt6W12DVRt7SQFjZuCQyc1yXRejTeE6",
  "key14": "44YgB7CSjzst6o33zFJda1YqjssAdvLyRm7CZwRv1yN8LeWFXHgpfyxXU1uFjBYpdMLu9WaGM4b4Gq5A7hgs6GCt",
  "key15": "5o4dq7iQ8Ro8XwSUmrR7xrJLeRTarj1raqudk2hNyRVfppNjxiNRrPZHw8ukxcN87FfBUCskG9kjJeUwKefxfDzu",
  "key16": "k7Ny1y1vUFGXCMq4ZvzFAKzNUiCCTgmdkXg624mGskU6BeN4W1pSg4rdNoQn7EmKz5g51EfcFmKZvpihoCZs9bf",
  "key17": "vjvcnZ3xynEqKgymucbwFSy12NNPYsyHFFkCPttfXQdL1AHsocnED1Aqz567vkvAjEtnW5b3LtdcQ37jesE5N2j",
  "key18": "2Fj1mYWhrbxWb9MXLWxnMFakiNQGLQsa9HtBVrYCDX9zx1fPBNyLwGeoMtPPtx3okUiwiwEKoKYMLNDzVJegE1Lh",
  "key19": "5bbvWRq1CXwz6KaNg2kS1b5ZvxmjeDAye95DdnSbUhERwo2A7ANWzFvjVu2zzTmcVH8hVTegGzvBC9HSM8j2sMDo",
  "key20": "2K3Vc81w87YqbkHTXimk7wSynRuS3MyNZinLsTv8V8cErhkUApKLjR6mayMT8RUzFoyeBq7qLxbjMBS4PV89pCyq",
  "key21": "4gbMt8yJsVVkxZ5ZdLEJEKSs6mauoD7jtvFx5CkjUhEmFUdAJdt5x8iHLrDs3wCQTEd8JbfYSkur2BKgBor6uLVE",
  "key22": "2hsecVP1Zzp1jVFeGfeDJZQH3NP71qSuaMEYizYYG19awkVPsPG2D35iF4JYh2fKsAbGfquNu6KF5xoJiX1vd3e3",
  "key23": "3as3oyfgAZjhJGtksTgVix4WbG78rE26ic8Njh9RApkb2GBfU3X7eUtDzodk6gxnMqawLpe3veWk7hwLTjQQuWSM",
  "key24": "2r41AfpVhiqMmE5SN6XVE1MvyCU4CNn3grCLCPMdhgEZkEdLByAPBPxpDnCxM4H8WdPWg9PMJB6DUL75mrZNNoJv",
  "key25": "4hTG2NQ1hZ7LcMShd66MRoBXYZc51ZWwp8yQXmkdS94xWKW648pj1xVDSv42CzESDvkLBR6E4W6npjiVgZWMF8Mu",
  "key26": "hkzz5iWRadVWGYdu6nXdeScMir8D9bTTXSFbT5BuGPTw9a14kfA1FkhxeNjpedi4tKLPhDqRpNhUfUR4FMsnS5b",
  "key27": "5BscpSmAQAGitzXgq5Hnr5fEi5PJY1hjTDrVjsuyjdJa2MTeopupHKqgzXFtobBZHFBgLn4H5cc8skvEx23iTPxy",
  "key28": "269zcjtkeKWSUJVVq9bYyp3cYzCqeY6GjcHjHGZqJhEdaezM3LnyQRzypfM6kptmYujLxS2Zcp4FAzHTAzUgWbgb",
  "key29": "4iWeA4bj3G2NzVMsQjj3FCVqbgzzrrXpaGk2352pw7HD8Tb7PTGWQHy9MZNscrwawpFsVNkxfQm9aPpgGnJbpotH",
  "key30": "5T1SgyokTTTmkntcJRqTWU8ihkDN4eaiNoZNiasRVo1wvnBMZyQFGwaBaUFqz1QeXvsMSVWRUpVbcChZjSB3SNiC",
  "key31": "5wUWyppHwi2UiAnz4wcuwqiJgbzkDVTJ6BN5VD9MUbcWPcmRJyXdfpiakG9sB8W6YvAYtvkDKSHk4u8f11fy8k9m",
  "key32": "4RFnMH4zD7dv81HpekB14AHegeBsecU4EgqLJ2FzGfMwx6LjvmLKn6dhkiuaoRip34YfN24PJKzDUtejUAgwagJN",
  "key33": "2G5ZReWhFfefrHVHsiHknU698vbztnEk1bLdXABNh3FJ8FBwAJSJEnG3QEXY5SUZYEnFzack57sNYu1EptFPKTNR",
  "key34": "4VNhk6mszfsw6iMtESzzHDVHhxcGNUtWZZefeB6ctPAqx64V6mTWn7J91rYxzdPnMkHZdMNAj7wtPuQnDhyiCPke",
  "key35": "3KJfHAnm7kEugMFBYmySZ5egLFGUwuL6JaVzXYjvKJCMc473aJuC6dCvR3oJgUS9rB2ntaXM4AeBy8okkfNWV981",
  "key36": "3AvZQ87aEEypnUFoJXmcoGZGL9TpA6TRLFRSj7U3hcDbN9CxYvTFtFQSCKudS6JhxkS4H1sVHNpjVV2prMnrWX16",
  "key37": "e3UV56afvJywxqo1EdtvFFNf3E1Ud523L1LQQZXWcQDEM6zRt3XoRfmhgaxeA2QtGbipk9eeyS2aZjHjwfsBA2X",
  "key38": "5qybhbxFQaMZMN5iAuu9ogBkqcSAtrBPtAsYRsLTdzbhL73wfWtD7dbUwQuW3zpzwjN3AbZVkoi552EKimko6s1f",
  "key39": "3PFAT7m6PFa8RsLjrpQ7uvqRXoRADoMJJE1r2o7KBhpuoZVPegfNTpT1dZyCw2oQuHHyL1crC9zLrLgb8uovrQwv"
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
