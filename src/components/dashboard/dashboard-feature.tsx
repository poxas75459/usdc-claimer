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
    "648x2eZotPUB494wRxoQy1WEHwoma89zrTywz8yKSqsbYcv2jzgCDGTuo8HCM8JaXTM4YcAqtkhf4Vnq937iwhd8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "367VzeHg4CBg3cEvvxWd2rhArYDFbyhdFauCqjrqmR51JMQpr93mQWGz9ioLpLqahZ1Gvx451e3ZtGQBdqfGVu1c",
  "key1": "4Y8sAkiRJW3MiXtt11YasE1xGAKHDmqgV1XDUWg1g1DKVo4MHj6XsmzRsWsfrqRQcvWmJmtAQPmC2jbJQwJiAZ95",
  "key2": "5RZHKcekGfMprRvTMiXezX2NQtXfzEmUpSdnrSM9ogMG27HcM5bN2u1FfyKjkNfCCkmN84M4ayydF5y7NEHFfskh",
  "key3": "5jozjHPY8HvupMeQqFewLsRbdYg4oZADV6mSekQ5FhyDZ6rEJMUAkJiJhUFBLeS1ALc1D3iVj7myrC6EPZuNNSh8",
  "key4": "2Ltq44pJnJYtjBqusvx6YpfQjFaXN79Zi3cWoCDukEiRtJCC66esEqq6ss533QNAF6SCsM9wZzy1LKB3M4r9idzD",
  "key5": "3YGpBLmHdcXCFXq8mAptYhwXTsdxCaJ87NTrfk4yxUapDC5Xq6mBG88FiQtY6PpznXnr6Um3zggxdWau9svRZQF2",
  "key6": "sAGsqjqAoW84z5wHGtg1zkDN2JUGjbRAkegTMQ8xVGSL1yGSRscU4b6MFohf8syYZCZfDCU6AapLZjU1qYDgWQT",
  "key7": "5jbvT6jkvkCF1xdgSJuA95vGwa9kAWLXyhxqQeXc6mqRQjAxFsvMW22L74Roi6yYdhxatwtimBxry3hxReCpfUsQ",
  "key8": "3q2NN1Lj3tXox4H8YxuBvxXjuJF2R72Se4yTeh8HFznVzGGEkENFY3wSEHBFhLuuwvnqfVMxc3Lv6rSRxZQGSKbx",
  "key9": "3jKiEgaY9h3RMeqQtFPH73ZAaLsft5WXbPKKuVizGjEkESkprd3xEDPVRB1CwAdtXdFHjsovNKsxaiUzcQtRwhrR",
  "key10": "3mAevPHTndF4B4ydkhBUvuBbseu3aHf3tseUWjC1TVjpdZX268n2jcjMErnpK4roGZw1Z1EyEnhDrvRqhWqw6uQh",
  "key11": "65yFZEyzFv2HBa2uTrRLSJFSyqDS9Brs4U4w7QWhU9HNGyGXrhAr82PtwvSX9Nn7Upt6uHoqK5vxkpn3b6J55vFU",
  "key12": "s7h2dghP1mDjFmMYWSBfhuDL5hVwnTAmpFjyeKQ9wZRLifarY5GvMHpJ69YBnVzfgXuUg9zkKNnfVwoKzkLNriQ",
  "key13": "66RokazNDFcspPHCUhpbq6hfj1gKrGLVcgfk9XdBczXPaWE7BHQCgHW6nHATZSVyAXhzspAr7i2zqNNbaZug3m2X",
  "key14": "4R6jpcPap6wbienHpDT8uFoEgHzU8Hjgj7crFuRgUsX9xLYuaq6SYNnmRYxoK3masKFvFYKYa7PvDcBArYXiAEvq",
  "key15": "4h9jpk5AbhkwbdK6iRF2Ji4VsBCrhkdMQZAfzW4yjrLeJHYtgj7UvUzDpfveQvsueNUfM65daPxUbKzURPEiUzCZ",
  "key16": "436yAc4SrHH4aBhbLuS1TPsX69m7xmeEwcuTtzJCBEVPdg72dY34DrnCxTgGpsHanCLNxgwvAKmH8kpy6xcE2AzP",
  "key17": "3MAgxsMKwDitKZnC9xKfAgiqcwqnroprode3ArGUrpVoCarQjRUwAVCfCWBVBbxrwf8xHsvtE7qpXFWoYeWiTwAN",
  "key18": "3pFSfXTjyiQfdbYoEMLqb82Pi2tsAaws59t1xG3WpVgedJu1KmpCXCVfgPXG6oqbfgnTaeX1d57xhC7B62Heja38",
  "key19": "2FFcofwnMKVvgiM14EL3z8vP2ugeGWfTt365FdwfhcpaHzsWkJw3qG4w2j5iFuoG63didVqW8xvb8JpFgDXqQzh3",
  "key20": "5hyc6PNgM3cqmHLa1vPeTMAEGAmZtv9Ge9DKvA63d4gt99mhqj2Z9mWsBJj1UXYUyBWEX5crSRRR2xTQAMwGnewP",
  "key21": "24zY78wqu8czvsx7vURf5hfmJLakPkJWXVVEZpEo9XAjBvXeQcWhseR44CjcLQAknm947NPnXcxr7NALnNDZ3D2b",
  "key22": "2wK8CZJikrxkyojWonBdjAFs3fTLEJe7FjS2iMe2FHqU2J9jwpa7Z5Ag4dREf7M8cFxUuAo5FSkZayNkYcKXXenC",
  "key23": "38tEwQNj8hF45rgbKmGjZhACvvSJqEpvPHX97VzSQbU8DvunqAMbLwPUFvCCVW86LuxVzDCNBcagQCmK4otRHajz",
  "key24": "pMQphV1SauheAbo1udt5GyTQJDyrfVKt55GLAHkbSXFfcyFCAVkorEFfcbZyDuZKUBQEBzg2HfUnSnTeQPH8ZsE",
  "key25": "4Etid7UbTXcRnr3s6U5kn3MvT8YxishRTB7hJj5V2BmrKT8GWK29gWMWZiGvuC1mQb7A4x95pTVLM1bnFmdFck4D",
  "key26": "2BWojCy2Xx7YzJ7sbZEZEVxvGe1zZEUMcDgHGi2KhgrQCpTED3UkH2gWWc3FHaLmWoHzhAYtuHxMLpY849FxohfD"
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
