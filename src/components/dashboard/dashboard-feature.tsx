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
    "3UvUbCk6WpY6X9g5uxDxwtLWXzeSEcWaNcXQLTpv1L2U1iEpwAsxEqEfD1E6d3zvPgBP4mCED41GpWQ3eRkJsNLR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4syB9gYzKggfa3yD3W7Z6dg88onthqjFyGbubdrXuCoV9fnPuU4ey7tgt3vusLuKz5dR14pMRMxDHTacYMi8RxAX",
  "key1": "2LgTRx2WpQmoZSaHnvu2PKPfkh3yAReG1EKRy9kUHmKvtJuJeUBGdTYiR1D4d6p2bhK6u1yPCPvVuyFTmrswun7Q",
  "key2": "45VUaQpektLwGxnwKmo2hkA98r1oU9VRCmS28A2kcR1MDd4csW7UjbnKRFf3T6W8nLBRMJ8WfmWghtnfv5HVj373",
  "key3": "3r99AJkHKY6UwujNGPK8DBA8TPccvscghN1TWUhSpjXqk9vEvjt1ujerT7KEbDYo9FCNJgS7tfyND955RakT9atu",
  "key4": "314Z2wd8XcnNTG1BFsrRCnswYmzUad7Yyz7CYkZtizft6whbBcHYfY583EHpDvdb5YyXePvvRFepLHTuvToisuvV",
  "key5": "5CU1dhPaWHntpXrtUfUToHTTy3h9Kka7nyfDVN6wRbaeNL8Bc8CkUbtamEDkwy8GxKwGrM9GveEWrAdwAgTrp57Y",
  "key6": "i8tRQ3TjoFDWv51r9kCZZdqDRiG6qd2uXrLq72FJev1KTJYeQdYT9BPSzGbWf8yBryVDDEzbQhUT1hJX9yGC2UA",
  "key7": "3EGp43eTs8VAXZYPuhVwvGyfrWC18Uwgc5Xiwt8kA5HjkWKn8DttCwzRgT3ar2gYm5UXJtvbvT15wxaS65bCWs1F",
  "key8": "2Nmbd746gw1yeK14ztCXbTcK1qy94dV1iYj8Yqu422gshZUCK8z6dYCXyxa4ow2BUb74VDn6bV28SVmhzq5gzFuE",
  "key9": "5FafH6gL3cskwXV4fLjtgiA794e8gxMZ8rWacrAqC8Zu3Jv12MPBiNtK3HtvAg6j4ofRcUhiqJ9bS2WZia74Eczx",
  "key10": "3kdT4EiNhbM3bKezEJ1wkddKYFL5MeRBrsgg5XBzmYkJKkZJxSu7t2fudWzV9RRcEipZaep2FdJAduyPesCrWB47",
  "key11": "2pT6H1XrNnW2X5RZBMf9yoWX6MvwymZsFUstz8VxbXL8kwbgCa9wttKZ883giKgvsn4xjM7bCN5vjD64BqRYPEAe",
  "key12": "bbQkodYduem7DBBEd95AD9BXkaogpwMD9A1M8Mb1x84qs79QS2JvzKtaYdeG7tSLRDgF4E4AkWjhJbcRAFafcRC",
  "key13": "vyNyGJUWNeYx395cStTHcVFhgUgbEHKWhxfFPzRUYi1oqUArdngh5cSLxb6YcLHzQBaZxZNrjfko2bg3vELzB6o",
  "key14": "4wuSZLxscybDFxtvYBEy1e5Y9uyNegqnisUTnudJrRy5kXxv4EXYPC3kcVuQorxpapPASNhBGtCV64cGuZiLX23z",
  "key15": "57VBNmWx2Z9Y3GqYZVuvaj7UbzmhyPUeUkzg8ChP6g81EuxrwEtEkDDcoznhbRb9EAdkhXSC5zES1uHYvw8WHBr3",
  "key16": "4ph7MvNAytvFTYbWfmgAmxMPn6BwqtxrZMVxiLBAAcsCR3faEmNs5mJxNSthMPiMh2vFjxupAXbfqpWJJNZ1ZjhV",
  "key17": "2xAPDmC1jSLFW1eoPGn1G2nLTr2TvnDq9mmGLQaAzzQzNJTz93kr3y6NdhrsnjTT11FPCsVcaP3QXdFubXxgenE9",
  "key18": "5vQGShzFV6NAc8RntUTZhZHZzHrjH1jPqmB6kKrC6jhA5qtMtvtEUM1yvJdUqeJNEYh1R71MtPamYa1Hc2nB8eH1",
  "key19": "5yKYCt27XKEXAe1iW1MQiUCo5k2FyR3hKmwDS2xb3gDFpBrbuotvEFFfE8dLUDhNXEw7ATj9ebxKmMByscCw6ESc",
  "key20": "2ehiRiG6vHTZH95huRKbms4v3E8etP7XPHR5iWt96prJ3WCqLSrDa6tCxYdTCKAk6Lj1gi3Cv2UddHt8s2bqepGW",
  "key21": "461NPvPbQm8xyegxZKLSbnntYmTfo8Kwei6EdCrYrjMoJsE8dNbikm2BowbkntFCjmiUBFXobwuQ4fdfad4vttfo",
  "key22": "3mtaJj67diEU3qXQhSoUjocWK2fA24LRKfRdyQmVGme7NkkEUoYAkAPDbJfYfXJnqdZRxL4cisG1rUncTGb3LcgQ",
  "key23": "2KCrjWprMX81Fs7RZMrY6DrFLdBBjttAhSmnTjtU3SofmzPXf7T54Zz8WTympZdEnJvcpsjTHzN3mVdVHQLycaqU",
  "key24": "2QKEykMUTdJMKqwbQ88jdg4i9wdzkjGnkkjfrnmEMGq3wE5UiLjfxcKVvcqU1MXtTsKFejXqiAPxCreXH5BfvRXA",
  "key25": "5pzBKdPyzifv8jvbpWxmg3cdPWXqxgtRnKoApJPxaAtRrfkbanM4n8NDuxB2QCBBbwmXYqAxVVpRF1nwo6qPXu6m",
  "key26": "2cBqonFbRC6yz1TzKSQtSg5Xt9vJpCfP9L9tRBqzhGam1cg4DbMghkCtwRF54HZsCXocoaK1H33RR2KEDJ9Ksgiy",
  "key27": "xtt9Hae8YficQxin7kX13aY1i8kviQQQMcFmzno6Lhg4eqQfe9gTsEkS7mBSCJ2biEjP2aZs1QXmYuGJm7TJ2E6",
  "key28": "446k7Kxbfwcpgiw7SXYF9ewbmGSB5Zh2FPaPBny6pQ6TocCndA2AywesRAor1hme2UijFb2wrKPCCoHXMmkrLFT6",
  "key29": "4vfwuyFYZjWveqzsd4q7GvzaUA9758MdcyUTQVKSNiDqNiPRKXwByjH5iUfvCkU3wxQ2kycs9KcokpMqu2F77txC",
  "key30": "gsiEidCPNPKdd7AfczjdwbRJjnUZNp86ewySyPoXCK7NsBNmNMFVNw1nzf5u8U3NCMYUiro1uwxv7YoYjEjEQtZ"
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
