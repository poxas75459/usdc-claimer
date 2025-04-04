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
    "336Yjo7mGbUfBE4F9461gNBYGb3NyfWtMZ5Dw8pgGK76Jymja52Xz5Sw6qNfcusyu1iXQLdaz8FQoHRUmdSJ3kYs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NvaCz6XjqsWGJWw3NhJqNg6U7TTz5wsXVJKdt5sCzND8vESkfAyLhYCr9bXDq2JSVW1wLGQdX7XtgcEASv1hYaK",
  "key1": "5oiLhjyM9PcHDmywHJTsJ1x6q9ZLWsTPeRu6GGVkyYd2ZFdnLPYduM6RZF9opuxLHVxd5XxnXtWuTX7aAn9SuUcH",
  "key2": "5k49ANdxRoijCp9ejRTCU2fCZtGn8GRijQU1ENyNQab3eH4iHf5J6Y976sLQ4oVjhWVe43z8QAwBwsWn6js3RVRw",
  "key3": "5uxYdRcnZosnT5odUfU1xKuSw84C5f5yenH4ow9tAw6AhudbNxn78Yfvk7GZmb2o38QXakN4peNsBW9GsYkuShJa",
  "key4": "3cuwCE8nQzhK9RKsSaVH7xuLrc5rxBPFEKDeVFqT1QnLx5cDRwAxvzjrJiSwHZjAZktedkb3RiFk38JwTW8U4rmz",
  "key5": "35Xw8P9UKxvbfjXcLAWWBMWkdncJZaFixDDcwiB9yVe6JtF4xnpocenkw8csuXkhNEQMDKbQ7V2QzpdySmZzBc4Q",
  "key6": "5z7CuYbGJaT8qyzWxQDq5QGvjtAVme9WZmBHdpLr1nVTTeknovQixkJVNgNv1VtFGB117GaCJUkuZie1wmFBteXs",
  "key7": "3z9fbUJ6ziFbzJohTZMQ3ZVSg7CGaTd9VY9R7GGRs4kSS5zvBAY7gFjxwV4H2LiCu2fB3NZjfdgCMa8EBqJsn7HS",
  "key8": "3tHRYAACM5mCsBRMcH5tWVrZjgNqpQeoqrqz1MhLasedjDMEbMamp4KNp1UsQzhqzqLGCJyQL6NnXEG1pztQdkgp",
  "key9": "5ReGj8ekNjSnFhU6mKgZ9wWvoGULVhF86UqwZLnvmpcvKiKeFKLkVBGtcHrHso6xN7hwcavDx2AuDW65tffYy6Ym",
  "key10": "5GGe29RYDEqKxXLGYp54PzZLNevWfhE4eSy78xdevLaAfHPpQpbwev9pQY5CKisw3ndQYGih3shH6ESzCajw7qmZ",
  "key11": "4eMu8qpiXvQkWYZ7xCdMcZ9cnGCYwDF5K9QZrBLP4e4PkMNrzz7C9T9xHZTQW7osLAZ8fMrXCPkgbbpHKHvscBdc",
  "key12": "5ZHUgANSXY4eMpKdaZt74GzuD8adRHBR4NukyuSmfkwyhjucRocnYNrg2adxpZjwGvoV32qHSwnp8xJX6U5quvSH",
  "key13": "45zhJPhpmErLsQ3KoxfA9aVdYCPtEwM1mNmANB3ejKbWp5MsB6U2UVL533V6XbzfhA31JGxtFP7sjDNoSNS1JMav",
  "key14": "whd49UMHoarhbhUSgmpEMQMM62W599wT547jzLwrgNudUa3fPGnzducQ43YqJEqN9bpnK4ABSz2rkmBUafaWtuM",
  "key15": "vx5yiT4vrBUzTRZ5SdKZAvmmrWVijZfdYfweVhaHRGL7fZCXHkhWb9fmCMXkLwZqHkfYiELSFjCbqNJCrBApQAC",
  "key16": "4qdCPteAnBfu9sxp1sqQtPBZcuYXmzuh9r8U7ZobjxE7egKRnfgmS24jAiLVnpzG7L4BXEVoUJkGmme4BjfRxyGC",
  "key17": "4qGvN87iNF8Q7sK3f3JjWGD37ZPG8pFvDuxmN5y3pnpqRacLFPefnby9Pu3UZLbG6JXXF8YPb6Zkp2sUacY2BMKY",
  "key18": "3uZFwjsJWBihwQbzBxsjLGRMs5uR5bdnrcE3fJj2mn8WppPV7JFjc7CjwujxWThgAbuWtfKspKn8uDcvEqpRNH4Y",
  "key19": "2cdVs7LHU3acdzXwsEyM3Ayiw4u5zPZ5cWwRFXxnSesNWaibnJ26SSH7SSkMC2BKZQWA5n6aqpUjd3zQKvBAarPT",
  "key20": "3e5KyCnKFQ2gE21ZeDgpYJvhynWWe1VvjzjJt3WAqCniKSK5evRXMwMBZR8qEXRwNtL8n3qWriXb2Cf891BpLqgV",
  "key21": "3GA2iUTK3PQaZZW1VPdz6DKkmLCVzfJJWRPv32ZM5LtC3fTDQechQTFzDcXUVht5ReUT99nZbL8DaKgEAPnjcz3",
  "key22": "5wc91H1FAy7ksvMn2HDWHYGMF7n1hTxGPZP657KHsoZ5KwyBvJfyJjTm27RMEcmQFVBiPitoZ3YUJSwBLbrRNfjN",
  "key23": "4uQh73seysNrVePbikWScFdLZ3iuzPpJvmSvehPEH5J7Q1CTK38rLzPedXQ5YmBqHEGMduSem7LmkYnSC1H3Noba",
  "key24": "2oRxchnr3DRfCTF7SVcg5iXYgH7cBZmpeTE2Dj3NCgee5MZmUYpSjn99scRSpAVKRemBQBH1sAEDouvUL8X7144Q",
  "key25": "55DgXPmaoBm11pM5W8bFYzRoETLDQ8fUEBaUKi5gQYMHkNVndRbViSEfGdzecdHbtsR2AsxfPEEgyM6ydwX5vwoh",
  "key26": "3zBhUxUFd3EECL7hyKxMfLsYPWrrRA7q3kfEaCZMe94cQVk1EHguydephNxTR1XRUF47SpZBAxNZEtkLj9frXxHH",
  "key27": "33yo4dUenfxGEANr2cbrhY5G53Z2Ad5tsdSt6ZgLCdcripGqDKrNrZVcYqnkchkwstUKFLyWtHKrAZ9EsxjGVYf6",
  "key28": "3EPb1dsxUR9MMC7nzduZDa2jNsqpKMPVjmfcvkeN3vX2CLaF5n81C2x7CTWCqHqfXajr5NeEPAkLA9qxxJyRKenz",
  "key29": "3R2sYYphgkgrP35tRHzR9QwhtUuTi1vRfVqqvdYp9RzZJiJuJcK3eLtSEsEX75pVPAxfMUN2UfE47MBCh1BWm6Vy",
  "key30": "42XeQw8UyP1otZCbWJjtWyEmNwDk34h9U3KRcQJQJhR31WBzWYsMG6fGaAJZfbPSxbxWK4DyeVAeCbMoiykgmSsh",
  "key31": "25qZNnsShiLSSoi5hXquT1XsyW9mgXvh1VHsmFZin5KHuGwyfD81nWyFH6Y6k7giXLUaCXAUkumMvJZSGXiYVns8",
  "key32": "54zAxSZaLwgjkAaLfSe4dCr1rAPsZpmYL9z9KStKavwQuuGYGoaFqGJZaHqyQkE7nLCLTD1VRKAzya9Vaeeri1oJ",
  "key33": "3LGWnK56Z7FrUDgSbmxo9tB6tFTqg5DURMCHhgbCFuZ98cgHPCanE7KwrLmqGyVKABfrMM5u9UyEULuc3kvqv1z1",
  "key34": "529NJRaVRr4x6DchqJS8EMmaStkDHnu9i4iMdF4h4sgoXhf5E8v2fErnv9UfP2z2TYh6neEjPcXoshuSYN5fimaW",
  "key35": "3CWe4A8oazWU2qVfYBbJH8JG1Xh1SATpJEEEFzuCw6zXFi9qc2rJWMnd47kyfYM7DzKA4WCKgFNxkcWhu3T7oKUP",
  "key36": "2wCR6Xmmsc6YLrdwkZUDfFGBmED3RG5m8MUGasteozDjKwvzQAu3TgvwS1XKSdnWCrivtiBdbzCYzKHMnWabynaZ",
  "key37": "3HFv7JXQhz3XcpG8Cs3k7ZSh7H57yEt9b7Dvi7JhWcayYR7bFKHhLFnQx61wVbUdfFg3UyUgzeECnyB29wLR5D7c",
  "key38": "XxM9UC5zagieepHT5hLhWuL1iyWSMvhsVCB1RVvDZ8J8Hz7vRUCSQde13U8BcJ4frwWSCFnqzckhm9hgdYCv5Ez",
  "key39": "3tWPAuKqPsbkHwVvqUPw132dokhq3pLuCCbnYqdKQCG2EJUU9qfxTLUYdSf6dcDUMoNpnPhEk7f9GRu23R6eKuzQ"
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
