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
    "4goSDFvn2okPNGqy2iJju25eRPc9Ga8Wub6kdBZ3P1Jyu3oFGfqDELvu15oZhQrMHhqDwPWZXDRQR9qVyK3WRGN8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MWLecxZBPi6dLst4hURxNuNscCUym9XegMS1ccKCUfHJoK4XdXXhHgG4u4WanH51P8RaSAh2QDs6z5ujNaE91nV",
  "key1": "4mc9HgofpLSvQBbCSwvs81SKi2Apd3NwaRy3dkvGErMTwmp8wN7DV87Puu2H9zGKXfqqbAJV6BvgKTMrZgp7Nzw5",
  "key2": "373PAhpvGCagnseWZkHwV6uwcXAa6gADnLuBVbPAskqJKUBPf4GUZf2uqqNdpa8XK4idw9X5EeD1yjRYXCZyPAcN",
  "key3": "3Mkm9FTNvfWTgBoqAWX9GfGFS2qHgNgvxdTQRN7p41BCXNtUX6SGEjUfF2sQQmCwC1asNmu8FymcBfNq6nLrC6Qr",
  "key4": "3uesahbYNeFSinnwUhLN7nHsN5HnjRipuv8pFUqT5wv4n5gRcrwJDWSSsT81tHc5GBDZBw4YJTjVMG4jmxRDU7Cm",
  "key5": "2iGH2rXBDkK8HNLsJhWTuWsCZ31z9suSyLKZTCw1L5ooNvCofTFLpem8vaUhzSwpddcF63q75rXgr2eE34zWJQZH",
  "key6": "4MK7FBhoGzkLbcPxhC3oSZCNiZo7b9XGnsGu52m4x3zTQm8WaHKFZQLNDiV8o94B9y3SajAyy8dKypzJ7PwcvY5V",
  "key7": "4Sx2oBdtkfV9qZC9H8iLVJAXWZcBCMTmyXxdkphtnkEq4aKaB4kQR25iUF1ceMwmriU9HYGS9na4reJo5UyP6XeR",
  "key8": "4bbnSdXN2W31H2Xz3PXaQkLA2ChSyEfbKURxy7KjKPiXvNSnumj2szEJ96rAU8u2kYfbz3K4BnxcXvRwJN6zm5yK",
  "key9": "4AN5GwNZydZ3qBqqzca9gNVmpWanFwcrynrPToYTEnP1Fyb4twQcTSfsTtQQbSpGffXhuHQvimucpSpc5XGTyqH4",
  "key10": "49DKrVNLzHyUGwYjB7AZtU3sUVBZ6b62bZWEjAty7Xwthf8zRzNWtfDXKLXNLczE42NAXMNwyyYeL4WneVfKL612",
  "key11": "5jetUtF8wpXqf1AMJd2YRJ1Wd9p2NKon5PzDFyVtyWyY7YyHFgAJ4XAN5LSmDdRYpWdrns6tKE4HY5rzozu7G8u2",
  "key12": "46jsEdFhuCSwnkuMbj6gbd7Tcsp372CNxCmJthnJvHMDZSYBK8dWn1itb3mc5PwBe51ECGMp72p5kgZqMZ44H4xB",
  "key13": "3LAZJGsXAUkXULSFDpM7aXHfsCgVw9YQgwz2EsKDaPCFFGpxE7S7wCxzk9bfRW9u66VBXCpJJc38uPj7PQNtKJpd",
  "key14": "3qXfA8FGGeLPSg7KSzW9ZfJVyKMTdYSp2uzJJk7i72UGnqZmujHdzV1JFGCVoEV8hpnu7F1X7n3t6ug8iyG215Pz",
  "key15": "2pMvgqPYz3W6TgybTAtWhJUx5iJkvhbQo9kq9u1kBCrpe5HTUjJ9zpfYkeKvYfX4QxkPDG4Hv7KJrFGx5kemwmsz",
  "key16": "43vYib34ihMmM6YQzHYqkSdM7phH445zBfXaYwJzRWGg2X7RVhQax6mik3QaFi5top9vmZ8buR2uRKCSuMsLJF4E",
  "key17": "3zVKmwBM8BvLuy7SAZz1BLdeyCiqxAQyB3jZJzBmrD5u6oMZYWyu6JhqwEn92ZdyQKxX1EYXkDEQirV1yzTScXpb",
  "key18": "4zEbFzBvVNJUVrDYzaoeUTD1hkvrdVqQaVtpKsLyfrGuC19i2DVzQZqJYHqyDaffDKcKWeRwVPsbGjiqWAcguBzS",
  "key19": "3JXp6Nbn7wfRhF2Byes4Dg2UYQgHWiUJuX64B2dSFquSKkPvZVDyH9QUEDH21ZNPQfqRGVvgMYSkFptBBKPwrtUU",
  "key20": "5X4P7S2n6sZpsPXh56YibYsXNf5ssayguHFbprUWP8C9LsL6hzcwgotmorNSNEzj9eCjJKRaxGYFhkRCwMGYWokB",
  "key21": "63mZUptuun9KGKJcWj7vsPKFcRsD9qoBkk9ghZv1YrPd4LZFTeAn2YAGuBKfw7eSbJ8uXQtjnifSdKMYHhuZ7u8r",
  "key22": "W2kL78HFDTyDUgkvZQ4BahsHoRVRcAD6pXDgaQueF6dvUGGQEQV2e5ZTR4ZhNqMqpuorpmQTTvHK4dUSzqwKRfg",
  "key23": "3cRzLFudY3Z9qgcimxsDkMwM2DR85nXSF9nAgQUPTzXpbWKYBVnwHemQTZTujH5BAz7DS9Z74GDA5nuuFUUMAbku",
  "key24": "2uDkrK7nz7j4bkteGrfgCyekjRvoRH9yAywQSY68WREDnaRemtksjPTiZ2Vjoj6GVGE293TL9EMPvhPj8GqLhsXi",
  "key25": "GVhAigCQXJkaRgCzUvtVmDmkpFPDNhDGaJY1BwcYCRC8mL3NzUsC11r7RTNZFG9Vd3eFiWWFgPgM1kwpE5UVcyt",
  "key26": "3APPFK1YL6KZ1dh3ENm4EUqEtYEbV6wGPGUjJNAGGChVWVdMcFLW6S8xDt3MAiGnXs2wY5XkMAkWaSfwtExBHhz",
  "key27": "5NhvjYgKfzTfTgUkw4Fo1v3f7bCFe3uuD5R9nEGKuLYrSBHFxrRpehjjQGNPExqoh3FhUrstsbUrB8J1MeYC17YC",
  "key28": "5jiK2uYvhHDMEpn1yq1WzY5uvJb4jfcjQJW9vXsMFHsFw8aH6EEvQZtVVYoacz6xQvWKkTX6i4ZK3wXieU6XA5bB",
  "key29": "k1hnDtwVm24FwGtK7EYATt2v9UsL4oSeo3PRVTkShpTSLSDTv8n6SnUDsnSHaxDViYt8upuGZAJJ71YWxmtgkWF",
  "key30": "2qZ9Et5gDDqiX4A5bpTxeCJozkUKxcK9zDqeXVLi4kYDXChR5M8tshY73ZVmgVBx2xz4Gd1R9WDL31JrcKz21Ksw",
  "key31": "HQgxku59AvrKnLxvsots8pu7icwHoK8iiX5YkmQwBeoH4fScyTDv783M9sm3sd8fTAwj9PnMWnWNcM8ru4ZaXqe"
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
