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
    "41dk9inY8Jt6iH6B4vcuWD6WqhvZu8hYVinNFAueF6wUgtecgwqJwKzvwL8AZYmT8pYb5BZdk3agrx9atjwJMh59"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mGi7MpTpUNwVKYAMbnckshL8TARxPQyDytiSGuuNS8Xw3okgWgV3racbF92DEYXMtFDSvVUT3SaqF7x35GcrFeu",
  "key1": "28Ddd9eHqJanRawDTUNv5E4uWYiXzPFr5F8seJYSvc74axcZGonx6JvuxdjLbyxZpBd6N54uT94EgEopFVde9spU",
  "key2": "3EUyj7kSuFHwtYwiYRBtqqKzFiRmpWHQzS16dH5TNmwvnfA8g66ijGNbT598UzjVsZdFpr9yGKKLQBMXYHbYT5vJ",
  "key3": "21XaYkyP4p7XBuHCxqf33YzvpPSzoZTnQBmvkTpML7TissNLJW8FTBFksSEC2vUs1RBRR1W74XZG9u5Eyn8snfky",
  "key4": "2CLgAMnuXvUtLHeCzgh3CKF1dM3n42aHhco2fbFBVZtNDXmVDsm964dqZ1YoTvK7B9Papxfa8kxpssjB7fWNV6XZ",
  "key5": "5A4vFesy2rmXAw4WEqGyS8h4mCyNkjxPKY6s5AG2fC1bnGXdT9cu6PuaHTfVgWjP4trBBMp7ByEE1LQkhrKW6GNz",
  "key6": "32U76nmkYAQywbpgcRRh1UQw7ExJgiDWHPcm73RdgMeLNfAutqskkNQGnTJpQ7bKfsBUqFu7guQui81FrFvGDT6d",
  "key7": "3YwyUMLJQcXUt8XeGr7Wg6sCSUgTMkRjKTnTatQZ5JiriR77PqjPBcudcBfciKHxUGYy3CGjAVVggywZH3AtNkKU",
  "key8": "Kmpb4jxrCDx5Uno2zrD6LRBEpVNFt6V5AYmTL1a9ihuhzcXQdvQeym9BWpZ8ncfuRJakrzj3h14Zky8eGLNMs4Z",
  "key9": "56Km6gAzxhPe8RHVu9zcCVeNqfqurBd1hHLtvkNS5eFyB8A8Ea8NWPbeg1hEJMzGzs1zBwKqhPtQ7wF9xWx7QsVR",
  "key10": "215CyLnxTdAPqfyWT9ozXAsjZujVbDnShXGoKft37PnRAqcC94mTjLsbQHWzcX5p3aiZqkP3C8Jxrg1XW9GxrdiL",
  "key11": "kTX6n6TGmJH38mH5cShMgVWN3CnX4heNHcEiqkAfXoJWbJ7rxithLWwkRSbk5xdveXsCUpsyymX6iyWvbJXJemY",
  "key12": "5ddRUs6mxivXtTZqhDVLQEsEdtFuwTwgM1Eii669rUpsSiaL6T6habMqShjFeA6Wjzgrki1iGYLzZ6g9o5DoDnnm",
  "key13": "5kjHVCLig2Dviy9fXUKuvonCt8sHsKcUoEuQ3HFmRxjFMVNgnDppJwrerWfSh32juBYjE1TMW13jtP5eE83r23Tw",
  "key14": "zFFgyc5UPrMDwuCuNc96F5pkt8ofV5QCj9PoYaFJzWsMR8KmQE1fNWSSyoeyZEzmEYHQ7Xh7K6dSpXczZQ9Ecm7",
  "key15": "5pWeSdx1qXjuTWFwCyqke7oGmy6yiUw9UfK3qWsiKdgSUVQyCydJefkhp2BRajhQCaagtrwFthkNYYmVQYe9JgTv",
  "key16": "54FWQsXQLrBrEPr2ZpVhgcyCpZZVHps2YG2Cg6bxkYiJhmFqj1vUavC9Y4ugAobGnzVaqoZTseRcDZn3JyQjgdxn",
  "key17": "33iAHZrmahmYiHqUP88XHccBt2xAUTRBom4y68YdRXr3HN73KJnB52CuPVpceS3B6mLpXGn4aGsYZSdkn9bWXA2g",
  "key18": "4zHm3gD4dp4jqPxQTeodiXT591yQ49BeNcdokKeF6wrrSEA5U9a2vxscu2UDxUFiFyUni4zPxSzQSgEfhUPqLaGq",
  "key19": "rQMemqdESGsvqFhjWMDxhKnMJjwZTkHswPc1brKbh4s6v2tfn6HJcde3E9ePR2GbfrUmW1cBuv7bdwaVLFhvkNJ",
  "key20": "63THg5gkjCiwBdRH9JFZp7pidp4psR35jFMZ2Rdu6qHcJnyKuZoCa3CMFL8oWNXiSTexYuqTmr5oo4j4ihbF5qJ4",
  "key21": "Hv6SeZEguFxCoThoqRzwxFmZ4Nz1kwrjZHZquScBAGwT8ZzETBHrgESXGwyiGRab3HEfyL1TKBMzSBvfXGeX3vt",
  "key22": "5XjaQkDUKMBgwyGmNBrPWgnfQ9F732NUA2DHtKoxaRWYhNHZJhqagaH8jyQC1hwAGtd8gvDazNT2TYW46Ump6DsT",
  "key23": "3q16P2NNda5mATkSMgdwxw4PvZnEUwhZPDkZakaraD3JhkC2aXRvLoqJzvRT6941JNyMnNs51BSVoe2J4Xs8pZJa",
  "key24": "3EGEqzBU3VvMLwrSpYq1wk1VJytHqfqFuzAgSsWTH6knk4XWYoSzyJB4beS9m9EUy3k3UdtRjCGVBE8MJzMZ4nue",
  "key25": "5eaf86FiiqzQqfYmrt5uTRZNchBQ2HSbvVyNSSuMEdB4YB54YHKYMUoeSPRQrevTXNUuBCn98SpzY6U9ZF6PA7qb",
  "key26": "3yMSyzFhgb3WcDkLA7FzpKcyYALc3w6YpNNTUPVVtasTxmAr6ZfcMh4xHqj9WaCHtaf8mWbeqqJciotqVGmuCVar",
  "key27": "3WSWqVDH35nCLn9j2oKMTrEruWECEWfYLPJAkueZbuGuYWa7KPf33qbkHSB1rbvXCZs7CunpbQgkXgU9TFH49FJR",
  "key28": "2ahV2urTxDEqVuNg7RTViD78kkbCN8dUF79fKxJNXpEMmuZSTGhDQJst8erXhhoZFPFKtHPCGQkBuc3APcd7RrJt",
  "key29": "2pdLZ5p6UnXu7LhmMGb7jZuYFGyjfGpuKTiMZ8VMaYStm1HZtV86BUS89hXoN2LStAiLTH3iAv77xDs7bPBPYDF1",
  "key30": "3WbVGC7V12HikXiibH7MCaS5ZTbAa4K4JaErwM95NVvMhFG4LQwRZW7x64YmYFAT7uv81kNVSG8EwJAeCTXjTFPH",
  "key31": "4qiXXeqfhY6ZV4tpaZSwJP97FBdYt6cz8GxeGMzojasB4Hvrpcpdty8GueXCpwLDUBPBFtaRY9tgYsUgryrpnKo3",
  "key32": "3w2MkEUVW5h5o5vP1kspxUyy8niQEskzqZt7mnrsHFQKqYHtE7FDKE9jxUo8BGRtwx7KxcAAzMwP8esKJRv8zhee",
  "key33": "5zcK1NfDAh8byvUPrYXw8uudNfRgBmSkeDFJnzeTo9W9Uwzv4PV2soue6uLYLbDjEs5FBqqi3NUsH8SdxPnoZ2Tq",
  "key34": "64Yry1iYBjgk3dGnLa8by2dydQWxUKPpqYnAnXx9pQRCNoY4Gopwem9LjvEpbCH1L9PYr2P6tTHmkxpKzsDL4qRQ",
  "key35": "3FTrTPHwrpCGpHYpc1wPqHAv4Pwm1VaBmvaxP76m7cejd5k6AP5vT7zB4UEabEHejGti7z8Ei3Ar5eYTZXzCDmVt",
  "key36": "5kZLAsjdvDGLuRVR9MMUx2dJ1qMmzh6i8BzYThcMFPj3m2QBht8gtxZnpGANtqdw2p3XRXnWuRuBCN2LMXNmUkbW",
  "key37": "2bw6vmygmewoSoBncSG45NXgXxQSNZw7CQDCk5EeiTqBW7GYNsmMebyDXevpidSdY4bcKdEMtL4J5A34R3hCw2EV",
  "key38": "h2i3Hmgmpdn9YDAsiKZ61YPp7gFrLkvFSFXgS4eHLspbvezKTisRSRWtZh8qrfFjBvEgRvG7wATtHTMmtu8Qb1f",
  "key39": "65nTeopDckwdFLLzGMW3faFUvTJUr4VxaUYBwX9TypgqUmQPNuDWZL3EuWCd4LWoVMHiYA5kEDhgQLq6MGaoEmv3",
  "key40": "8kaYaKhpzPQRwhGN2NCcXNM6eYJ8iMVSRJEKFAwVqmPYqMmANaJ2mRU2Lucwd8M4YiGVDuJKKaE2fhB9ogLpHF9",
  "key41": "45GVhRVBhTxVjgfyjZ3GCFLh2B49e1m6DV7szvw8ZoVX3V3ZE1xyc3KAtddwryMz8pkHb2JmjUsBb9JYU86nEdMo",
  "key42": "5E6R69Hdn8Xt8VKiYZaHrfmR5SXYMJFi8cDV4YN2gNCAUGrcxtck2nZwYR3WhKR5y3dVpG1zvKzQqBA2VxJqnnwV",
  "key43": "3fKy5wFmmcPbs4nFx2YwN98duJ7NTxPqqXxrUZLFh3YRstvECC2ax5tQkMLwoB141TGWgWE44TsbLQKXWkzqQ3Y1"
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
