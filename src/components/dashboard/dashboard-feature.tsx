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
    "53G1VCKxM8Hikj4d2kqAiQdCdmY1XiDAwoM1M79h7VbDKR5Bc4gvLkYTjChWE8mT6MmBrUP4HYsmBGmnsiHyoESa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CL1Bw6wS7qJ7xxfJXh9K9wHcEvrhawJUR55Czps6EcRP9efTM5Useg7UwnxYFYA4TokwMyLNbgzYjebc5zdRJYd",
  "key1": "5fEHT2MgFhAPWygY94EG7tKiFh158cZAK4jVX4TuWsT2d2BpSwybThmJNH4oF45xkBubvjaZc4Bi35W7SuYQYAyX",
  "key2": "5NzAt8Z78iWx4TJSaf9YHCRNhKhuNgGpSc8DjSuQYXpikq6AzYzjnFim5GhvhjjFdfAvggH6T1iuvHzrjEe5dYUP",
  "key3": "5Qz6Lrsxde6T5kPgweLuXgfRzDJ9q8RuudUAYuJM8ViC6qzFnsYvMxghQki47mQVJt21tKiErArSdFmefB2dV5nM",
  "key4": "4EjnTnWqosik9hQNjhyoj8KoF5xD6URDBA4ez2amidi5iC8wyfYrs1odBb3FubauP6tj9JXsdTXa3rABLsrh495K",
  "key5": "2qGuqjjCZ2CLM5G8T6iAvkvrZdoNeBP4dizEYKhx1pBWjwrPNtMpALyfx8sze87RsDRPm7r4Ht2qaDTvLsMEp4f4",
  "key6": "2XBjGyZWNjAtFPhDmBCGxg5RuxkNdqZDDb76qNM85qkaqjjRusunEA7e1BHQcuaqokMQ8UXbGwdJKCaeYQRdBrRV",
  "key7": "5RDyU8ahXtsyeDBCPXAnFgJ23FxbrSJSf5fUfex5jxoMBkeUyRrCW2YzVrouWB1JtRx1yYTcDA7EimC2fuznMuU6",
  "key8": "WeNEJo3d25fRMQdDCBZxWzLLSKQY5M2MoBcForFMus1f64jGFwXHYUA7U5YDeXW3sngbNvUWdgkhmFkbmynnBLP",
  "key9": "5o84g8ztyZR5FsamUWPEJQ7wBTCQ6W2QFQeTdFGzUMJ8EVkDnSN1GqtZNrcUDhNFAdpTic8vNj8kj9KcbHZgSR6F",
  "key10": "4Qgou5gPwGC9P9B6vcS2YNiPmtcrBnaGJSw4MCTF4gpYBY8FNLezsPjSZcwxw5yaami6VAPJnMppsNVRw9tQPGhq",
  "key11": "3AHMfEMAGL4Z8KztP2aaMcXkq17ULzhwUZfry1CHLSvJ1KcDd5QeeYnUgTbyubofBnrearDz66fxF8uuKkBsQiw7",
  "key12": "5BcspVQvZnFbhF14sEccqEMhbAfYaYPXBP8n32EPP69DvfDK222RBHrhmVMFaw75MMSfHueedv9VxCpivHW7Nwuc",
  "key13": "5Jw9amBhRtUaLuTqrZrsVzfas9aNwDcfVczqBfVhwEwcmLFyea6ajFpSpba36sZPYSyXZ1hwKTbtXgpaqeNaKasK",
  "key14": "3jwmbgkdAvKBPmE6CGJoS2ENAEDm9FjWtUj8Cd3VjbZBfpi4tJyTh4skfQPg3MNeEdPWBiqemBBhdB66C2z8Uje5",
  "key15": "2L2EnqB5FMdVoBDFcS3YfNoJrKM8mGaezNHCFhbP61HCFuofrUGn1VLdrSjz4epKAvaVKv4fnfxVq9NAftT7ZkYt",
  "key16": "3U86P5Bjr9JRMG3fnAJNqDvP3sYQzSzLBKybgVNLmcuc8JfVZ49x9u51DopqyPjrPsYB5QQnjLYKn2wVbEJjPskA",
  "key17": "3NWTCoVoPG2keTLMZRgLac5CRA9aDWMaYS8PaAnTDQab2t8zS9DDyqxJuhR9u2CNHfDU954EHtMLBwSiExdbv79m",
  "key18": "5kNwYpnT1QF9u2HEZro1WfL6q1vaCCt8Ed1vKPs6oPk7tHv9KNS3R5mZCLdoHi2frCsDQ5dMMiP8aaSES28BDwzf",
  "key19": "z6XEEo5JL1sCG7NnwjDir43qk6K9HKg259mwzLNcrf5vzgs3mPNZKC1JRgR18EEAeRDPRJJriEg9nQddU3gqdE9",
  "key20": "5Y4BnrLn7BqXShDgs8h176R1UZMvTVSk6wsfVPrPRm5VDCYaxWHhD6MLtXj1zjAKgsVygEHb2hSpYdMiv9dgHjAt",
  "key21": "2D8frkprR3fW92sbp3zr94VJTQy7xjbjuiJMd6Kw8TGb6LqxczSPMqhdDMRuMD6SoW3CoasGbGkRzxVGXhyHvb32",
  "key22": "GahHB4bkBt5xkgq1yn2vfk1H71MBdvoNdbtuG6mGjgTAUCrF7GaPvTjqWXwXw5x84yhd5b6fytu1G66U8r4P1jo",
  "key23": "5fEb3Ft5eoB7q21cfsBt3WpJn61hN7mMioF71dbBQtDHK1XvRSnN6ZQqrfQziiHUt9cTqnWPiMchwiXxLCjgEoSQ",
  "key24": "3cxd9FbQ1VNGNs3gQU2cM8UGMKfnYnWKefgfs27ULufBsypbXkLQYrqtuZ9uRGrbU4v8kM2xo4Yc5hvRQk4wJv47",
  "key25": "42ZwDQoamJNt4togXXRVa2zDgfUwHmFMmgDNYS1F4gSY5QvwnRuR8YGT51Pb6BALoSXcZnLCqXE2DSoRzqRh5PA8",
  "key26": "2N4v61d7n63X8xw5U8H9LVuichjc4LXP2WJaBipUAR67rSdGVzTc5S5rsUxdTny7fNc1FRU7Yee2KUmFUpGZUDvg",
  "key27": "2ixh6M433uAYwDjBCyEQ5EAJacSACwFLBEJ92xsnM8nqud6hKkRUYxiL8EuKscRxiTV9gYNydwccVz3U4kAhFk74",
  "key28": "94dr1zyXa41YBedrUp2m46Tx4mNzcFhB1rzy8Z24a6VSkAxGuQNhkaSuuXBewe29xVzJKgtuLt6SR9zEPzD9qWv",
  "key29": "5f1Bp45F1qmTBUUFrvPkJGn4cxXxTBDdsp2qvuaWWKUyqqvcRZBQ3zVDjEEFngAJgCyKA5Dfq7byQUT5pgTQGGFn",
  "key30": "5VFd5bNA9NortwDRyeYmk8XVAiceXJ2uLRXTsVt6b5YWbCVTg5BcjNP5vCjV9CLNr8Z9GtjCAtCK6jVVuFmcr6Qy",
  "key31": "3vFw91aZwcpT5HsP5d9fAWVyBHVUzxgPVqn5RbZjSqwXyWqjRn9bXgcFFnsXqAct4DE5UgxEhkdwRg6NiTTNxQgv",
  "key32": "5eLKPmCyH4RJrtHK9ZK5QpoAvrkh8VUnpMXPVHrxf8HW1iHgRr8AJqSZU12aKHuTnmLvnztPoAjgkpVJiuQsVq3N",
  "key33": "4PbMFR3KCcoGPGXsgjZ6jWQGBmJFuVyVPWsUndehzHd4wiKwsAh8ErkYcXgA789GnAE7NiCN38JJhR4yg5ZvB9N9",
  "key34": "5sZTzPsUdFjfXD9YYbAtkDbp7idMy6ksDm8Rg1hG2vCr1az1uHHMxKrXrZbXyuMb2qLAmxv367BciuQGt2XXzCqo",
  "key35": "24be7ADJE4BH6wvwG3uyirPBGa7xjjyuTBN7ipxZpj2sQWtFFuzWjSAJzaoHtuTKwaL4BhRW7eTwcYueyoG7mjXE",
  "key36": "45fZeKKrYSqVriEhdYsAcTgCweyZMsQCLDzJwwSCzzkeTWdFtsovpUwRVNpdhTa8rRL9ebeEvy6CdkmoKAnEdGqC",
  "key37": "3DEzdiorvZN9udfCcAQd6mRTVFNgwSsvZ1iinmr46NChceAZ6T5n8hFgK4nSMpiLfpgkCDzoh9yyS5F4s9KqDdfu",
  "key38": "24AT3wWVfcxD2JLqpCLAJBQ3uYwkQeT44yz8uf3aUnmMR67Yx7LGht25uhuNLsPkpam45HThNNMz8u8jCNwp6AcR",
  "key39": "GiwMijQzjNBmXkHMB5FzwrvLyjcfKAMwqhpn3oLoSfhQj15ayZsR1U7rTwCBVyS5cswrMB1WyxfazhRQSVDajnn"
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
