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
    "pmY1QFFT9Vkhzz99HgSBpugmUouQXmYHLJj2PmNwNVz5m9tpxkvnA3qzAfD5UyZ14mXhPVeAtvQizExv7s6xhu1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4r8VZ7bAUBC229ztq3jVx9RRWRmnSURdEsh7H4GRpmeSEW35kcDphDPtC5EmhqhmK3C8cyDU1Z4PJVhSsxuNf7SY",
  "key1": "5HB5UQnejQZW9KxBHSc6Eo9iFrciCofQospBbMfie1qiMdjUw4TWDxbqPSyf74k4W6EJ33s65TBMXeBRk5RVqZXy",
  "key2": "EFWUrGSwPywVsJLAdhnG7gPW1EcAeUFTkSnC1GVuVuDnxpK9wJ6neFTam4KTtuP3uP4vireGxAqBoQAXicvMr24",
  "key3": "2Xaii1XZvR5U5eKMkykMoW5cyxSWDqrJfWMLqxeAjiVmcTaJ7eH7RRJR6PhzKsEAamXjceYGuywj5iamG2EgAYGP",
  "key4": "3w6bjhgPCASqZXu3uG4yHBr54HfjVVcgX4dbrsj2zMDp3bvMjMzHkSJsJbDyiSB1S5mGLK4TLFUUzejvo6MQLruR",
  "key5": "tefPSkUTeoT89wnXzUP1wxVseLXjyckpkQD7vu9iSFwmMuk4oQ6jxbWZDVoubb62XqJEajwUMt7pYHFsK9GB3qC",
  "key6": "ZYK3N1hfdEoACMcE3HLm7UZbmbSF5M5wQSjVr7yrskk3f9T1BpcA83we6byjCU9dwFoPo5rXGp1CEezLr1NNiMA",
  "key7": "5nTRyATHeS3i6Qz8YjktrZHWhKZZpJinMJvUzQ5BVGd7CF6HWuB5F9BCgD5jWycifWP3j73oo7gNr9TfrjsTfgBa",
  "key8": "2gbAvMaWcEErK3FNWe2C3Waps62DgAsuHy9W1PnE1tC4WtKuGfgA7nfHLYmoWpe3dsKM2tkPNLoeu3JDkHBQ49CK",
  "key9": "42GgS9rp6oA4G4m9CjHxy5sKYnvBrnZTWCthme9KMscKSUoWcsjwZnNFn79kYt1wrQF92TH4HdzA5wne4J1z5A2r",
  "key10": "2XX5PX5HG6UW9Si95iTV2XWi2jxYbw7LTJkiRCFhQGfdELTXyYt753eZMDmXtwmPvSRxH4kbWwmJWdn7diXu52cg",
  "key11": "65b5kFKHmAWboaxUi7b4yqGXe2cn1Q4ozfWE1PRMQ6j82Pz7GPddP51hy7t4C3BT1bfJHmUrNAYVXAyuDNTSepCr",
  "key12": "FkcrNiBBiG6AjvtQ2BtkAQUaHJhr6MSd9UncLZMFx4LsuF2cEvFHuazqgt1aYbABtVQjh6ygzAWARyFGWhqgDyU",
  "key13": "39kxvckm6LgUj1NymMyZ1F8wZaVA2HufxkCkecDg5b9WjqmGm4dBYtkufDE1pBZtXeD2j2CQFurFsqaMDFVk38Wi",
  "key14": "2VrAGNR6RxV8DrNcevRL5qV24nNxtcCqLUUGq4TxEWtsHJT9eij5hNT38erFtheyjYf2Pp5fqUrFjeTpiaNdimHd",
  "key15": "5idzkoZo5nms41J2Sb3tBPwCHWkVpjwiiFKft1J7DpMYQNp2WmTTVi43YZ62eNi9qizkHgarZjkYhmDg128Bh8We",
  "key16": "2TG4Lp2hanCDuX7BRTGSfjqsRt19USmfcmHFm4nyL5S9J3LphpS18RvZS38NgeFKudTPGDzCw4fgd15U6phUVyNF",
  "key17": "3VrzrJALBsusZN88ekVXv3Nwe5NriHtbzUpQ1rxwsTcyB7FEfSKT8JiEMT5eYDkt1B6PvYR6jD9e58h9c7AEfdgG",
  "key18": "5xynPqLydNgGTvxSvUiRwHCSJfXneDrH4mUNiE33WbsbaftqKhJUyNJKrSkeYtQyNxn5hgARHproy8KrMDAvGk8e",
  "key19": "37LZpcAZWYp7KcsGf7RxQPksB14bRCU8ggoDm7kavwmUU8quTtJ1ZPWJfTmmhu78btovLrEQiWshATB8R7jim25R",
  "key20": "eUZrGSVk2gzC6jmFPRJ1Wi76SCmwEG5junppxPMnhvQfJtLLW5gymkM53E8pzWvGF5nUnTcanuBkXrHL6BuiA2K",
  "key21": "2Y7goKKcQvdR7GhmVCeTMfJxMyJXTqh8r1NpHezzBwGj4aUcVtDADskrbtBUa5DSgvgyPjmiV4c6AkRUBWUt1NHZ",
  "key22": "52YFZmaRDuzgpRnXS5Qd12GzQEsSFD2ncTYASo8T3DWsGSwkgtbRbw1FfNxsbE5pfWhgTuAT5T8CJJMyhZFUfgxJ",
  "key23": "2js1VxqhpP2vtxo6yoLmXpou5F6N78Lccb4o92X73JWTHQAqrZnS9DXDvfzydnDTAj3yi6YQ131KsPYVMDgnPXYi",
  "key24": "2VnjLaWstDvh13zUMShgrEsVq2dbxNHzaVuuPARM1XHeKDqEZH1BjxuMLRvHHbBRBp3pgvJ8J7xj2kNZmrK4MRYo",
  "key25": "3hxf1FNkgcZdWogWi5qmjENGPQeCcxX6tSgaMzRf4F1AiqCDcmZDGwf5QaqiDFQGfRj1taKnjza6yvHQTBVhcYxU",
  "key26": "4wR1UYEnfx3mGWhLJYiirhWJ2bAwrG7R8DoXCi69FqJYZn5vSu4Ykgj3hy69ue3mxDEcxopYLPMThk9ouCTHP8pP",
  "key27": "4RWecyJAzdPV8HWnPN6seExBosbPUXkDW8DYA2cwUuerfu694C3kGWVedNVnw6LihMmLABaUEHPMVafPrQpPXmuz",
  "key28": "52QRcC1iLCqJgPdXXgMwwM5bDQn4N2VfhQKnBiijs6PcmFLew4vcu3XEU5aRppyh8APqLG629rvEfvtsyXK5KNvx",
  "key29": "4ZmFWcgE367UJciFXLEXMAnhxK5eHPep48ZuxpmAkBxMt57W7g4AkzMggyhHu4bah6DDnN5xqftqAZa6KEfYCnAt",
  "key30": "5Pxs5XzZdkZFYiGUKmXaPM3FaTja7MvjqsUzK2mq7HyrsaWsW6HsX4EY6uKNB4Rw62YzGJr379SDwFzA8m75SSKK",
  "key31": "5cRMfgwzMsYPVSCUtFwmgU8BZcEF94mVomcwvxatt1KiyG2EM8wY8psscgS4HRa7hdjTxywVKkm1DRD6172od7o5",
  "key32": "31YQpFwNRvWXFimfZKccMSZCz4bRZ91E1fT8mcCo6wf2gjhSobiEFD3CkY9cnJREUKNTYfi1HYDpoeBfsdFYJ8at",
  "key33": "3NJvwdUwnjc72HeD5LGdroEAn7Mz3dd9Lk1siZS8FbR6KJ4WifWYQProkzk4Bu4Jaj2PVQenKnmdm4nx3crewzG3",
  "key34": "3TJMNQWN8zWTA35PXnMa9JZLFQiD6ZABV9S49CBRgbjV8EqgDvBKKhWr4gXSXk8DB56rvtRjZK8rJhNLXD4wS2FS",
  "key35": "Z43kqWRJCzdmqGgu79pakaCnb8MKvdDwcxQDQHbJ8nRYfuM422uVqfYjJDmMxRBE6oaVTZvHiSmz2qRXqvcWqDH",
  "key36": "RSDPHm3U2AuhU2ohQanhhx3og5JxS6T6PR9v9Pka2GuU9tPYTev45iugT8BoEjRD4Zq6VidSgZxxojz45PoUQMN"
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
