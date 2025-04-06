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
    "2g1dwqiDoEMG2qzTUYwL6Dwub9vDdL79Pj6M758ueEsNvodZT7u81vB7DEzkAPNtfHbkmgCqwcJ57m8oUKM9BWUc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zb1M2sviitVQpfZMXGTMrmDYoHRdLyaHy5L6Rrk52W1DZ5QLp5jx1LQBaGcEfGZ4wPRPsQdj9nELroG5bTpBHnY",
  "key1": "2BDz4BjuJM8vKNrUK73w1tMGEC3FdtQu8jxGQAvCN9RmeNAW1snKxxVTiciFXKoaYDYuuq94aKQ5KNF94QHVwhU",
  "key2": "32YxfhjETy4S52eErHFSdZjgGiRjHMTxq5yVyDW74mxVTiayi1VYCBTmKk7a5eSnBQyzob1x4ZsCKpoVzwVFhWgQ",
  "key3": "5d1tD1tb4AHh6YXqSjgN8DdBC9KVRtq3rL5FWYMjePoNB8KFCGauadUTX9PAp1mSoLkRtS6CFsrsLfr5LKDrTFz7",
  "key4": "rHJd61hVQBuisfrpWdcUPsr9YN3WkG5UJvApuy3rH6pZAje7EQN2rzxZFDzxsfjsjPei28HxDTJtajr1zPSYPNg",
  "key5": "5g2XaFdEjHwWMRnHM8gz6yUuCTxQFKrPwd8j63MxnHySDAD58CT5wizqQ45KUGbGFgVD3d8dMv56YPZ6PyvedUsh",
  "key6": "5deD1NrngwrHRoMjSazWzEYHU6ZDyhLJhWPFrP8EsrXS8o2KxhT3PQEDQ9XopeXMFbPmxb9JJDiQeW8zFwTmRm1P",
  "key7": "3BK2KgELxPW9qS4a3LeizeVFa85NZaABDq51DccWy7ps5MyvLs9LoBot9KpBFGsaUYzmDYXNDvjJ95VsXsejxxWp",
  "key8": "5JVR2EiHHvXD3oJYVKvEE2Ngotc9MfBJqbGbAsu6kdczzgMF1DET3s6aVSi9UDw4rZSha4oh6AzJn9F3RcLeq3GE",
  "key9": "4EMkpnHxKEiNJ2zRPyLfvLYC76ZtBswytcwYevXdARqYacPhSz2wYtSkbur8wyjZ6xB4BGx4bw6jLMbNgu9Umkz5",
  "key10": "38JBU5JJn97DukUYUKnq2FM43U6emvYK95tnHutmuVagm2UnMVzgeYG3Pxb5EaeiAAzWPo4DBvJDrXy6AiRb9c7j",
  "key11": "4mTDhEFbNBrve3VnmNVy3QnYMm1WUeum7Qt38vxt9P3Cjhx9dbKxPFjeF3x66iN1deE36b4vjd1jo86rYop4YDKX",
  "key12": "3ko5tpc2tKKW9JtmNeznKHaU9g6NwpQBDm6C1W2LcGzpPrVa9oUnU2NVNmyHmrFS4D11uSJLGaCETDJPrFe7Vqda",
  "key13": "5wKAvpSKj8GizKmnDL1dW91HRNA8BtQRCN4m1NTPEZxup7PG1rAKVmJ5sBy53RQ2KhBoUPWvBjScw3Srn4egLj7o",
  "key14": "4k51BxBmzpE8GQ2B8jv4KAfXsogWj38pjA6vQnwJGD838gnT6HS5wvriCVksSWdcSea2cshEjjuKFEdA4Y8fgmpi",
  "key15": "Azpa2BgZqNKHEZp8u8yHVhBUyYiukPiX4X6iLnTsPMyM6bXXM5YuRzFAgs2r3N9xqkFr3yAkGTbbXukibUDZTty",
  "key16": "5afTVzRvWThw6wv9Y1t5mXgbdoSzAEjw47xYWzRFxkEFQpCfimE3UDi4wHHJDhbs64M5TjnW5CTBtCtyo5AHXEkB",
  "key17": "56u98orfx8nzYf5a8NNjjP5ge2iFBiCbbZF1WCQvRkn8R1Xa3HwtBc8GtsZcKYuLV9Pk6twiRZXmQRnrg3mgocpT",
  "key18": "5uLQWVnQBqA3WPicuuYzH67VWZ5U6piAMkwDf9aN1jxP7P24tjd1AydrspUyMsdeHEmJCZvSxaS12x5r6PMMoYJa",
  "key19": "4UsfHs6Eu1dsew7nNPH42PhePHmFL6NzEZartuEfpzFgB9RoAXCjvVUoz5ckHWgFoBq88d187u1euVT4uRE2oSrF",
  "key20": "5h4oRuvuZjTXqJKiBeG5fcrEW9v81JB1ydUJagf76Z9CYdqyHpkk7VCF27eY2DiSH36usBraqMVsno1ZGViTBQi8",
  "key21": "5BSeFE8shsLEf2Givy2Vj1UFP1ZFRNxAfGHq3Mh5cd5MAMBV9t3LQ6yRH44qsb4n1WeoLHX6G3iW4DGERJuGnwPj",
  "key22": "3qCPFvQabvFqA377mDxjUmtv8JacUzQMmJoFJtk9VLmB6vTX5sV5bRewgkSKGnnLrYPvjFB3UFUgczrZFhcBVHPq",
  "key23": "cHUAPsZxCiEuCuTkdmaJ3mTrr7k1VEuTL1cDDqARDcuUb6RsXsbpnWkUJkqL8HXdXupvsnUBH2wrBivQ58tvR5y",
  "key24": "8KdChQGqowiwTLZ6N88Y5Xem6J5LKGunSdwm96ndbSEy9SJ2XkUcNHp92ZjN5J3mta7bmpJGN8SgK6LJ9XsmmsD",
  "key25": "2HfHeGHDJUVumqAQfLSoPxNRWCpECAL9V9G9YHzrzg1GLrytyifSFqpQWw5suEm5WverA6eyLatab9khtPDFhAB8",
  "key26": "W6KsNiGx89C7tmvn4S56xAFGw5B54wpFmV9u5qiXEEu6LM8Phnp8ExneNgS59S3j9Ccno3XkWNjaZZg8n9Y9kw2",
  "key27": "3tk79W7j6r4U9MZgXVSAASJ1iSkzXL1A8pQt4JEEgL8xwn6nDvfi3LrpYhuHPxxPFM3Uckp4tkaZpsNwZiNj9crs",
  "key28": "tqTjSBGyfajTXCxxX63Wc7vmm2wuYMTzoDMD7bEDkUS6gXHw4eQ5oB9G7qwMq5E16wo5mEFfSypGeWWrkBEc5Pe",
  "key29": "3KkqyhxKsfJ6UE3qdBf3dAb7nMuoW6xpaxtad6Wq2rW8Z4g4TMAAu6a9B479MWzy51y1yPmPKdBxjMbn2QNBLdCv",
  "key30": "4NTUWn3xGbrUkQjfjP9R3mTn9XtcLiWxx6AooE1iHz7gngTcRMYHmB6PZw7HmwRug6Hxr6pD77mm5qK7xMtcS1VA",
  "key31": "2sR9JSKjhh6xzwfrgw9Ttu24xg8oyMXVFBHaq8XCaUT395WHivszNKWbjomHMk3xafs92nR5dag5fqYPH5ak53Q4",
  "key32": "5LdCeaRV8mvH2PU62PKfDfmf3JjmjEvkQ5FC6U8jnN3UX8N1371hT9p1FccGP46sMVZAxSMLVojuE19AVy5fqpae",
  "key33": "2cDCn2FNC1LVvwb93wGFsGjYRjURDcuZhyua58DfdURuqKJeexUuPa27PkqLCYXmuNS6DkSgDnLT3AUqoYYoQL5r",
  "key34": "45YZYad5XLe3BwbA7pKyqXjPK5YR6Vqp9AQ7JkVyJWuDChkXkhYkTjsEJMDpjdiK6L8L79cKqK9ZevxXunuwJw4x",
  "key35": "RjPxaF9VkJim4FTr8eAfRE6yipPFitrUNeeSU5n6DHZkfbwm9z1RkUUdDGpehCLfUDHHbqDmzq8RJmk1qJbMc5j",
  "key36": "129ZQsVNfn37p4QVR8oB51dTUTadhAaDfTTizXU2WSj9tZ8QLBtY7qfjbwd7nQqa7ciuU6TvDKsjG22J5F2qos1t"
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
