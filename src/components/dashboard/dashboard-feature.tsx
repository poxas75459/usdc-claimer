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
    "8W9ZGi8uBwGcPfccgC4r5ju85Qjd7DsXgVSN9JbnbKZtWexuVTKwF1CmVQiR6WRS1y79RRAVW4fHZUjQdH2FEP5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fb3sFxKPpFjpxRYSybTP4EP6sbY3acEzbBcVCx6irbysdtViu2DjZC2szyXyJUsK2ZEbA9xSag31qttujX78AW6",
  "key1": "4R3xNvGap2268WyXuNp3rZdDukHk6ncyUogUo7eGsNHEkKzUyJnJhy9tNfthAJyb219mHDSek1NQjY8yCirmBhCE",
  "key2": "3crLUXCoQDof8dgFbRvzytvefBfZH43svnzsU18fFetS865mYBrNTFNstAwWQ6TL8Wy8pnwHQPpLUYwumH2cjhrv",
  "key3": "3fuDJFiEQmxrg8nG3PSHi5d7VsVetKawUYNzeQkCGprHKH5osyCMCbTamQ7VFoSC1t8PiecjxnsnA58LweJKDrY9",
  "key4": "4Abf7tPmquGbygN4GgooPaCDFLcse9N3pTHPcVX6mnub6TkZWJ93VXSwcxKqgG3jLYef55qcDinX2SL4Srnkn9NN",
  "key5": "aPBuDuczbzK5epEeb5eXKx4VPnrKAQVwKpb1uC7aGfRu5Pc3nJhyNtdGcmVDBJuVjERMrDc8BvGrZ7dXDBN6Cyp",
  "key6": "3TQzdzaXRLXuM5Bmgvy5rtEEQ1TQk4vphUpfxEGuUYqt76QV65rAhTUcVzihLwc7G2iPbQyqQpQHf588C3mi2ZQz",
  "key7": "2USkkcSra3sk3GCVSZeRjcm5mcWjBCcQgcoyxf8fpLrLL5cssVZM5iA7h7axVcVVQdY5vk5fd27HGvhoxXQcfhac",
  "key8": "48fiaAdBrAuv96wgQkYDDDneD83QdPmdovpiMGFR1QqXwLM2ehou7aQSeUqfXErdYNXbn2Pq5uWdLp86n4koEsPK",
  "key9": "5m7ec6pxN1xnkEtYmktPY6C4q4TWENo31VeDtUqfG8hMP7L6YpCbUXgyqVcwHe3MCgd2fBtAH13M5Gf6qBLqHxRd",
  "key10": "41U4jfPZ3Bn7VGYXH5KszMtu8NEQesAUyaWpY3YVAsM5JJ3yxN5pcV3L2g6e1FztxiiTVcEPp9ZkKqaPfoSUZjt9",
  "key11": "3wextNaw3HYgHmbRY8jTzBxzravibQkgDupLyXwQH1qVoLmZKDZt5dbxnSKM7Za6RwbHDQSypZnG43Jt9Zhkm7Y5",
  "key12": "2YxnvQ9YU53aonc1R8FaRfK1wKgsBpw1iq5kiQRkoETABVWvrc5Rwy8pfRnmP22Ym5YZ57n1Qq8rNMdXBFX1UdmW",
  "key13": "38gPN3kMBEha1GNpVeLX7fg4AKW8p9T2vnNf3LdTz6MxcbFwseYf4dRdPJ6376myFwALb29UoL3FpQen1HxUKzLc",
  "key14": "2Ut8aWfuaTB7JtT3YSKMeLZxf5DJUHTwEctAoHjEjx3ata22SFC8KWUgMMnNhzgZj7bKsY2K1vXmsQPVazyTsdpa",
  "key15": "3Ni43ZCZ4rXNirxTZS3BgHkLrp1tmvygEYeitJ81Bmw86F5jSXPjA46X91cC5Yhbj4YaWzZJPjFbk9dGPSmMwuJw",
  "key16": "55ghMMzW5gtk1nPYPYWmtFBPEFxrCRxsKrGu58j1YkTctvSg3BCdQyHJGP4oQ1ZUtupsb8NtVD2zDzU61b4zDBcM",
  "key17": "4mvsGQjV6RHtAe4trvgMENTLfE5W4Gic8tGh45g6SPHRrk83xR7stK19uNHh2TNVtevnhSWjXFxifvKfwqXwAS8X",
  "key18": "66NQD8vtwu51JSU78k4VWMTs7noUnhYTW56tAPxBX8Pc7w16RJorSDwtXFyW8U8fT9tR7RFKBjxqkbvSsgtQRxjX",
  "key19": "wyqnX2FP5KSXxJv9iaDFtDnZZVmpsQ8Jusgj5vKP8uzYDNWtcEHNnod3xD2wJDxxThBA3X8vQJUD8rBKh8DCoBR",
  "key20": "25aDmkcj4LUDnePCkvVEt5gCSADi6mz9QN8cwEpwDfHhDzFdELEqfYgn6kGsEmKsz6bbnRoTXB7Ew9JGryB66jva",
  "key21": "4F2c3PPoVhhf7KFSQVNPavGhaAbYognuKo5MH3U37TXpDtWPoC97yarVTwF7hQsw8BpqmsWxzT98aXH9q5pwbQm5",
  "key22": "5sjyacCgoVAYtmeDZmzZ87DaBSd7RH2yKqAbFky74ssdNz6s3fNaU6CHV3Y1tpuqCVDxH4FnFEYcPyxormu2ordj",
  "key23": "4erJGRctfmTHH6kztgP1PfbH73ZJmt6PehFiMcsXG3ADWsxzcj4rk2Xw9NPwEu61J2zKjDv6P6Epw4HDi3d95iDz",
  "key24": "2g3jEfyTHfQRxQsDhGQiNUbWKz7Tv5ifJyZJkkoa8ig4YosNtr6Pnz4L7J9HuZosjyAww1Nf9VV7mGKqhSEzXyu6",
  "key25": "4KzpDoZTYDPhqpDWHCazozSNdmpp78KLttWWcdtdWdBNoK3t95YEs1pVei7WCDyQ2d3Ze1Qmr4JG18ztYqDRA7Xc",
  "key26": "TxtZKbRcxHYWYPTvYf6A1RSo7ACYakWwa3pqnECYe9FvL55EgcCdKdy5xGdeKaZHKVWFqYTNWCXhQcWxw8FMftf",
  "key27": "39mZXiki3F13hN8deJY2ns7xBwoqwhR2Cdxx8zgyX2iiWG38Bo42VSvBbwzDEQuqaAPKUmk5STB11SfYfoDvB9EE",
  "key28": "4pC4Xogj49bzLb1ircepyGZjYvunstBMRJSwvvZpXvGJFtEdXecnYSXsV4aK2iBJNCfbXiQrsrA2m7iK5jZfyy74",
  "key29": "2cTtFH2a9px8aLpPtUKFPJN7iZBVu3dHxHGpsMjYR7VprYzCcxqu2TVQsgz6A9LLV5ABvvVqCai8rayGP3WfXur6",
  "key30": "RtT4RgSdnSBmKkdxWSZrdbVbQq94FL61tDsnVkDFnBEzcXspwBSD5H2xstCcNUVyYchVLQNXbev8judFsXjdCKL",
  "key31": "541EC2YtcVamvdAtXYyc4FfxiRAcmhzkr4c3sR9yigHbAVgcUnT53sGthpwMs5FiG2Lfuhiojyno5fMJvkscVmGy",
  "key32": "51QnAxh7zGU2gc2mKZpJcknjoRSqSgeHjVLRat1ownKHEGtpXhx566LW5tpr4pt9xQ8SiGw2NH713NipmPRma5MA",
  "key33": "2F5VHb3Ef6ePNDmjN5oTTveuLLud3iATwZeb7i5vPADooLxgJC2qJXwNa3zZS34DWWU1JfQnheku1NH7PcuiUCZ9"
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
