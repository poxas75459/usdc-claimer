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
    "2JZZRqN6AorqaoqCZkEPtZQvJyquSLNBVPi6UZDCZQtD2DateLPpX6FCgR3pfM262awQn6JsStLHuC5dyXhsQqXk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AtNUX5CLdBYUdJU4k4EwChMh4C6bSQovQrtHx8xBwJhnumQE3mgjWtdZw9x22YPjMCug6mr5ugS872efPvpy7Ve",
  "key1": "2Zkrfip4sbxEBKfEVgYsKLuT4sVfJHW1TgkJ8T4aEoJyvomXopqea5KSuH2MTWKDJPZbU2raRfkjzuGLf7zd9eX6",
  "key2": "5ReQZY4cYDqp19byhw2NP1qBRxQznFAJ98grThWaNJHDf6DSSCjyEZQaJzL8oA2zsb9Y7WgqMM8SJVLE5Gb48NrC",
  "key3": "5srkMZkkFT5EAHmvPJSxV1FmSq1zXPugkrhYf7QB64Xjx5kSAkyqwRL5umxy2wNrvyxxs58eouYk1XUzEXS1wMsz",
  "key4": "4UrmEG4F5JBKfB4LSSEdAEH5j3TyqUzuQihyFBXzWHXN5aWyjhxMzdcXvgyCjjFcbtsV4DKxWTJ9PXs3GErjrB9E",
  "key5": "4yGStYf5ifq7jKossQwdSBefjXdufav8gFSkt5d63JsA7Aqi6Uh4ofAxGuRiQmY58zqaycF5ua383E2wc8uy9fmw",
  "key6": "4Sth74y2KagQqeR2QbrcvJw1taPTMtydnHyobwy7Mvh8kUuPwiyuHQWCfipVig6FRnMrQyznNnQ62fcCuDdCiDRp",
  "key7": "Qoor8ANFtzX8PTiLYsyJcgqf8ghfRBxgUjWyAiJjmtY4Dn5mTW6SCQWWnqA71u5KHMxSHDPm6uu5bLgDY52xP25",
  "key8": "VFfCSw1PbqcayDwi5B6egA9t2VZq2NWU4a7x7eXknHPANDa3tTks6krNv4dc3cWzTWZ6TTiD3VegwQbekR3rMWG",
  "key9": "244h41zCwM3gcaLrKhK5LQhbd54MY2zAnCpDLEuehmxjeXaCf6pUcXgH6Z65vLnGHwAmarq7e9DjvZNb856Qfvef",
  "key10": "2CH2TBpdKiFRBGC4JFUyd3dCENPyRfsT3CpCDe9XDi5uY7CYLuiXk6TgUJkCLKrZEkrimLo29XA1uDqQosEuBzri",
  "key11": "2SqciDZJUcNvUxsPymeGQCddM8io1KAf4H61v6LLemfm8G1fVySPFr6YmdtadnCpBUqtziHUSLQMy9dUAgFYF1pF",
  "key12": "2VDBQZUSWJmQ9MnkTxCpLqHAkAaEPWJSFebrTiADoank6fNPe5EfiHCHrWZooDLTRrj1fhZrkjMLo31rnonfWbvC",
  "key13": "5GEargNHTrodH728wJimzxvnCs7Y7SoFqdewKDpsW2Fjopz9wmm5FogSaWSacGuzHtgjLrGmxedVMLaRRsDNMH94",
  "key14": "3qvPNAmSGMbVtVYUbd3xfZBc6uq6DAwToW4BJmamrJWBXCYCzeXGXdRoQseE98YVXsWWvTt9WuSr3siKb1rGzgjr",
  "key15": "53tZ27P45tWSvXmEXVDLMYDJLEtpSczA1N4UzkucWFfQYnoEfFzcAg8tBQfdi5LhwRA2m3oYMerjBKa6iJaZTfvG",
  "key16": "2629uGuX8xTovyjPigdbaCeaqNat4sQtBXrPB7zpc2t1i2Rn911gB8B2DBz4SWxSCvNk4NHkBtqxfKWFNiaCTPrD",
  "key17": "42RqbeT4TKLtDi8YeJ1v95ots636KBzohXm9YWEMGtwxdYMiwBifG9CkiFn44xJsMrUR6ajp886fdV1D6SYz491t",
  "key18": "4fdJzosJrExZ9exHEnLCBjD66Ymp45qeocxtmk49r9fQhMFuqAioxX4FEq7oZfgbAjssneQeP4RN4bQY8UjYrYyt",
  "key19": "671uvMyt8jjZjmgmajfvs1oRxD6oJHE9axmyWET3nm6jdEVR6VFgbEoK4h7PY948F8q1XZceL9H6cCxfkbwsmkxH",
  "key20": "2vuzLarFQTZjPoT6cis4GCj78VqXPCVoQEPxeHw5P31HVkc17x1NTEN559sN77cdQZpdwnK4ykoMdDXz3h7RBLto",
  "key21": "ZTiQnY5QP5pgCQAxT8zUfdMfvCTqQKQ92PNvjS5uwJnUWFL5U6rkMUCmNh5APX9m7gA6X6hGyzPjPdYva4iu1fA",
  "key22": "xZvXiTzngtySueYFGVNoHAf2jajwzMhsR5ip9Xe9snCsqL5Fu8bkbgNHkNBXabQChJ6vKmFCAY7vpP3GBahno6e",
  "key23": "wx5SPRusVbKdEwniz7ZCZCoGumXF6nEeSaXKp5qmo2qAbvMybkd1pF4HJV8utijQqkMgHUnaciHRJ32TSe6nK8v",
  "key24": "4sjZeQbewNjgRL9yhfMVnNuesU6q9Kzz7VLRjvbFgqjbkDNfLTeT5NyhchXZ9SgSAQo1VGfGnbzfyqdMZ9eQvt3i",
  "key25": "5PQYHTsmzH8EW8bwNzN5aEdUfg2B9Dg9VQtXGSeKFs5xoPLyPWAgwSUWbh67ZN2cTVoY68A7Q8qdM4Fx6oUAkrn9",
  "key26": "2GWjNL4Aa99Yf5YMv1wfFRV4ZY4VWUAcVEiJTv9UkzNSckB3S3yhRtp8V81deCKKc7N7hGeM2KobmbZxkFewBPa4",
  "key27": "5cgViW7Gmi7JvSV8eZa7F41Y1vuwKpe96PFiMj6efhrAMMV3m4XCEQJUHSQmQuRUgKw52fcM2s3LVgZYgxgyYrXz",
  "key28": "52iA5FAGapozKHabGcVcaoVgCpo113jzW79WC7uM2GDuYKTLuuUJLsRDyFtz1a939CWwzZqwdY4AQPzYxE6VUY4q",
  "key29": "51qQ5pcB8fkRnNHn2WrzmZcnCRVyyatQpmMkRLtkrerAstgdi1rWBaHUUTGQvm3cfaGjX324pL4wbuyPkJcgxQDc",
  "key30": "37rLHsibLKtbPELuQ9hmr3NoDhgNz9DZVdTFUhemszN9egLDA2hDr2gtw1qLTSpR4T632VnFqRXeHxB5HXxt8WmE",
  "key31": "e7XM5r2eKxRX7qo8UPC2rEUrpFibZZiMz96iZBetnjzuBQ6XG8FxgQWmyqJFhMJqHtLEVcKDaAA28CxtLHg5E4S",
  "key32": "TTA2RxXX3ZtRv9Wv8EHfKfTbJKk3mr1d7TYxHTuXJZKfdPeFjjiA4yZ1z4kr8JsthP4P8kjMpGcJUYMRQ87eGsh",
  "key33": "48yKVq4Hb3wyf7WLvkEUmH65pKVhDW8PZ5pvxuKdA9F6K2NAiSCdtYA5U1uyo49NASn16Jb1VKQLVFEpVpoq8bvA",
  "key34": "3VfLhaQ7NUnYmDpy2sTpdCVLNxuTTuJoGrdpYDDA6eiVqzPghpYMzUEjuPLXv9HUTVxB1PiofrWSrtyjwNg6YymV",
  "key35": "4Eip1AUC8EQ4NrW6Zdz1svdyZyqPxrc9xJVGjSJagF9NBrARk7TzEEWpuo5WU7LX6w8btsxqAvSVotvBYWcNc3Cz",
  "key36": "2HwL5ZnVHTft6LZm7X1nSops1idtCXon3J1Szsa7UQ75v5mRG9muVjxjoBqjRF6jThTQPEzD6wAzhVNR6NsoA6e7",
  "key37": "2PDLtWa68TcLpjhWgmuLk2me9svRTdxzwewDhqAAuUPUKs2hacb3nC8FC1FvKyTCdWfzmwhPofqQhaUfcy69YjyR"
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
