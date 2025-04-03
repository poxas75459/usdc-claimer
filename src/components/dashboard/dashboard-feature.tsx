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
    "2DJz68aDJVVwW4uzjiLcPVTuYjgZBRwtjaL8oUw2QJEUqMVawSyELhHUyPdcjJnRxdicHYDqpd7QreKKJsoZkFrn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2megXNz2AaQdtU4HvwFcwPJE9vLCktZQ65PiVnj1978ReqdprtuDHznRqYsqQXCPSTQ3e5U1HL2yWZTaG6gZJRvo",
  "key1": "63q4xehQ522S4U2k5j4UjhpJiRa9o2zCyZfhkrwhw819o9Mibw7sFLuYjaWzrNevHKbbQ11YfrWezeEPA2FDRChk",
  "key2": "gtynCT21JDDq9TrvKj1dTnNEsayqdvcZTCjnFkDaL8RRqBP4b43zL5P3wpMzEdqFDeu1iLxTmizUZVRP1S9vJBx",
  "key3": "5nKkRyv4Mr2SihEzMWEFk1dsr6g5rYsGTeRZhddRvXxB96gWyHfGEihAJkwDkVeePSMzGWRfysZ9b6EMdDyxdtFk",
  "key4": "2cnwYMQTyUJiKJ9t9i5x87PoHC8WPDX26BYu9xpo3FBcFYqujSWKcAoYZYgn8KznSRxbERJE3q5UijQdZZrikTFx",
  "key5": "Qt15SLiRrd93cJF83mUYbbbCZrWQMXGCxKyhNzoVTuDUtpr7gfA4JJp16NNdsLouvEZTcTefe8x8wCRFPmZJtoJ",
  "key6": "3yWkWypV8Eh8RDeULp315kyTE48N3HKQxfkPL2N2di5fhZK77CsH7SAkg9NerZ4CbmQGvYTAbnMgKCWjKrmE9BTE",
  "key7": "24AfHY6mvqomqbkwvVECV8CViBSSTFFEqSD658aAdECWavSXShgHYtuKxX4qBgSGYzopB3rrPQk4f8jJWEaGEqX9",
  "key8": "4Exhx2WZffW2tvtqyKgmRKL72viHD8DwxBApZAzijTZBHQGGABfZRBrPKXzTNuNAd98JR2UyhjWsa47Ph2acAz7",
  "key9": "37RwKifWi5VFJqXy9PwyHtNQUzUsPjASXHaTMNBRMrEVieFYvnfFwrcbDc2y8rQRJkaXRyVZJDbJzMVEBsJLj8ZY",
  "key10": "29M75XcXeCTfPFsJD9tCZwt44EZCv9cLHjk6ZtJLesFFzfc6J5ZBqpCTRcjkhSRe5xtrVMX3uaZsSeRobJtqQyvq",
  "key11": "3CDogfC9NySwhZg36rH9gFhLjTJqejPFpTuGTSUHVXiQBKRpkGEkQRxkqG96r4Jx6UE8DHb563pBi5Sm2DEH3cQQ",
  "key12": "55XA1SLydWzz4t3HkhPA5LVcmHQdciVT7rJaGa6PvVFZsbM31ByM7wxD8gKSKXkq7ub7tueQjbXNXQryKheK6MXe",
  "key13": "VzW7SJXFddecnZsDRbKBqEUfFpiSdYbfpuCrmYp3jSA7YTWZnFRXg5v2jjU7JURGJM1VfmtVsW9Zut3vQeVZqm7",
  "key14": "4nA3J6xXS37hoz3pcsDaxLjv2o8uaBhKz8dt2DnU3VNGJ4zghGBRqP2PLi1QrLYqEd1qY5d5PqTiMfPj7nzSxiKT",
  "key15": "3PxpfodL4ZKhQJpPPq26ctPidkcAUveay4g2P3MUpS18QRisXgpbfQ59J9cfcbwRptqSHp4cK9rzu3jiNKmJoKTt",
  "key16": "3vjEdYE5XZHYaZ3czUXPoyLrhK2HbEeNiM2fkAiwYGJjCXtZpHzcwS2wU2eENbaXzD7VNHj3AZdbxYMq8qQcSFrz",
  "key17": "3bP1jkBUKKPeLPjpxq3ft1adgTCpshMZPMeR9BeEkj8s2EGg1aoqE6gPrTdhgWro4KyX6iPDurFBAi9E2HtFFn4J",
  "key18": "5XTnj9BDahdm2ocPXEXiHoSXqzHpAWqsMbMLV32dFw9Rys5AWNvCqD9CS8oekBNoYQ2XJns1xoyP2dwtugszXzH5",
  "key19": "4HusTyQSWyd5W6En8bJrd3HwXBVJG6EuF5v2Wk2qjE7aFuHkQmGt4PJoFUL4JuvdxRt4VXvxi53hwW9tWj8XuqB3",
  "key20": "5YwVrgND4Hx51wvALhYr4Fzx231i4j9vHketLm4rCF4Na4e5aVBGVKrh9tQjDUNBSxQfwpkBV4PnTjDbYoRm8nSK",
  "key21": "28XJxayLmNBTurTL5BeMvnhNTJQYbN3dqaam1KB3FBno3hSsNuUd4xLgBHEA7WTMcG61RMYFX7tCv9srbZfbgJoY",
  "key22": "43ELAsEVV3Y4nTKdkG6h4v1DbFKLfaAHFz57ASbBvrV75ivq56Qyt2ijShoWnWi4UPL2zKvAmMX4dfeHQ3vMnjpD",
  "key23": "3a9ovTUBrzyFTcLb3GMz49yJce64FY6qPQjde7q5ZXKFgvZkLYVHTEkCRzNkpADHj5N9AnKjNnzpRUriB9VV6j96",
  "key24": "65mDdjanxD5vYWZ2kbvMSwaHeU7wRLAY3DB7YhBz2BJJ6dzPxJMDfKKFct8JqBwz9e65U6wni1JQe5E6QQp1knjj",
  "key25": "3DWchaJmaqzkGys4cEGT5T3rq1kLTcVMRSXBmfTch4rkJouxBednwmxyjkkvf1qFrAG5FXc4m7aMeyuzhbfQ4pT6",
  "key26": "CNcsTRBBhJQs5XUb7Vs18bY3Urg5KVTtVXxr3TGpYNuNVYZcnmnXhv1ENCrf9wGkcSEKA1apXwRmFYzre5U9N7V",
  "key27": "NtShT1am8rHvNSV758Bsyo1zM8xK6dnjuhqwkLHKLGcJQZxT3pmo3djtQvhqz8s1q3YuPcmq7P7WVDNxTUbHGHM",
  "key28": "2WMWCzPSPEwDgMZamiDkibABE6U5NXQ8v4wyTNPBTktyGDGMCFss6gsY1HJ2BcLhqRXtFvfKNDry88DVmib3z8Na",
  "key29": "5JuFu5GgwkUF2PQArADifK9yFJBqpG215GKXri9zEM5JUGMjs8aRWVzwam1AMzzFxK5KopsUgfPhP9VW6u91a8PR",
  "key30": "3AxmEMgrvhUtTMFKUwCtYKqCtW2tw4bP2Fip23XcvcuNsm4W5jqGnbfxFAUd9VCcCTtiyij4gYYyJtrYkTSw91YS",
  "key31": "JuTFbMYvHDizn8BW7tasDhzKMfhXvtDBw8xLct9z3pUTnVkUdEcqfv3WYpWFakxb4qmd8LrEgsZSVRxrzn9m7kU",
  "key32": "EJfUhyPMbBXu1xGZWzjb2Lmxi9YCCMa18vQKQ8vLuNdwtDyvrz73YJu2szWiDAnMTmb44vZ2R1PvS9xRaKsCtp8",
  "key33": "5W8FpiErWQza63SzwkUN3KfZbicXSDmjLd3sFoJM6qtAZabsWSSq9BvvUGdy9yyD9dErKtQnUGdnGv9WarRXWSrn",
  "key34": "4Uaoi6s17HBsib5GE99WpfLCXhPA64i6rwwELdWMNPDgcUjFfCoNUme8Z8zz9qCpV3WVpHU7HaJHndjyc73G7UHg"
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
