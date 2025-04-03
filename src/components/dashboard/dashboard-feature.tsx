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
    "2va5eErozd9XyqhkDfcBwNeE7K2UQbA9R78QV92tuDRE6LpxKALx3nPJfEbhob5B5zNDs1BvnDb1nY8764jHGfw3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GqcXnUuggbTH2e4JFCvBoQWgwwCaJgvUkPUu8EqJXTdZcKsHwbMuGEsK91czhRiiGKraJeURDwxdyfsEkMzhzeE",
  "key1": "5j4m5ftscwoSNVNizy7hFXtStaWYyEnnFLh37nteQ7rKvW7SqFwKUcZKwy6NiZzT3sJTEX3s2BE7C3zPoPUY9diA",
  "key2": "2mQH2ctDhcvaTJyBVD8VaVv1fghZTSCcwrMyTn1kVMhyEWgo6qJR8AP416weg4wb2gNukvTdQg7xnTBYjAXKcUzS",
  "key3": "5dzgPkMUYkRLTozPg9v58JpBuX6TLVmbzt7h9x5repMgNErUYrtqXueZ39oKZmGKfcp661d3jozfCwLSyEQ4Jqa9",
  "key4": "3AU3A1wwnxn1nrYf3EfXCUZSWJ2k6ytPQx2VUPUPbjgBZGDVy9cQGV8rQVnyEuqKxw6RV2yQHhTTufnCUSehoCkC",
  "key5": "4Kw5zrnVkmKvf5AaM4zWiFPbtfenRqiq6roMEP6RyG8G2Sn8VQEKH4uLSfmjqJzjTSh9JpDPYJn1Q5euhp9sYSwv",
  "key6": "4RCCuBWnKpMSDBB6sTenax1S3NeiLoMwQm6ZKeZDk1HAvijYGyvZimNw3XtrnRAdjpU5zCFEpsK3xSySP99CiEN3",
  "key7": "HbYweH7gTwCa9zMKFsQu3qNvsgjHyXfc3LjyUN8w4T6HG7jSFqMKN6XfZG9q98kbk9YNvfBFe7Vc84uQmqaZEjA",
  "key8": "2TqJAqmyDDt3sPyrGacmiq2VsmVzvALc9Y5WtWuHNe3jyond6wiV3jebNMFPhU6qeeJdQqvVYxQEv8kMeWHpHHeh",
  "key9": "57U6YECTnWeNE7aH9xogXPxqdpMr3TrZMbRzmPEVLxBT3MCgnJufXzZACBaquhp3x9pu3b82zUiyGgUjyU1CsM4h",
  "key10": "HkFhCiTAV4gcBGEMvskmvzpLfhosacRmbM7LzD9HGA9modvBeW2mMA2HJGpPH6MjGVTocxbRtsGzm7HD7529dVr",
  "key11": "2D6xy1LHB4pF5gKTmsWSuZU1msr6q6CNxwRX6ggRZtmpbizoiVaq515R6GL6zUJhQi5CbJDUsjyqapp9avnmATMu",
  "key12": "3Aenc5KVxRKxsiZBHcHympfu58NEATD3iLKQxqbS8JV5NnVCE3oA9eEF38Ve1Bnz978E6zib9seNuYTdWXNBAHTW",
  "key13": "3AFBExMcmXuPAsYxBx91HHTrqAYYRLWPdYq5BVzsK2TaX4W8KapWUom2JQmjXDXtmSxAeaYBemDCFa3C5S8tZsz9",
  "key14": "5uauY1RAczgE1jmeLH4QSYM6e99R9wsf34YvUf92wrW1nQiSti43X2MwwEUqoDTEv9V8gntPYkf9ExQcXmEedFp8",
  "key15": "5isdM8TQqmAQZ8j6N5FvhBhRjpe8YtgSE98JnxLevtJLgGdMpnwaNdfGQt8DhpENSCezvGBGWMDsw95SjYfxXNn4",
  "key16": "5hgxmCMWtSoj7paNSzeTGzf3UkuAdZFG73TB17QRYCxXJKdj7XmxT8Jkq7sPGRgEasf9W5gnR5985ohXut18wzM1",
  "key17": "43G7NABrdEGRWAP7DpV1FohQ6MDLaYXnqL85CWJuhbv8FHjSBTi4QdQ4pMm9Ya2YsXMJuZiFgKYScodvdgtPR8Nt",
  "key18": "5WYNkMuGofCnSgMPaGZ22VqY8ma8jyfwF1zSBrxQ4qajQMbLM2qaxTY93wuM9GdNH2tt7UZ2pSousqow9HX95f1a",
  "key19": "21VxNUGkKzyxuWZtbYn5wsaR5n7a3V8pZUqsbeuM52ik78P9eVe6RqkbPRggVDMp1aKpeP1zTgJwhdFfmkRZxeoC",
  "key20": "4kdZ8jyNk3aPTpfbQW7oHMwz79NsKqiaQbZ7LSn2pjjZFMiphJCsLFDArkWMxuKzqMWMd5F98CRgujrvGM5ch6Yb",
  "key21": "3NVpr8JTb6uvanUYYA3upCEo5YxWNboRnNSYCgk5AyW6hBUaN26MzPqGDGPPzch1MLjpg5EyjxpBQrcf4tERPHTa",
  "key22": "4cXFjtTaBucvfHuQZ74migN57AUvtM5DhhLRa5GJ4zzrLyS23oHj3vZhanzHcaqehL89DHTzRsJz6zdJhpkwBdYK",
  "key23": "3PnGWRNjPPmE49pKXEUD5gHhU26VZzmW3jknLjVniaHyAr7NL6R7odRQ4gRxRNV7EeMg5CUBLf8dzSDTTuvCKaqQ",
  "key24": "269HVz5FLz57Z99fmv1uaXRvoc7haJGSEu5VkutPiazKJB5rXyM6uNEXxeJG4Xi6ibK9PusiAhLw6udXF7izsz4F",
  "key25": "nWWSDjwWUjyn7P1hawMvBo5M3S5Rppe3MoLwVsa9hGMe5C66uFKuLDRnzeGdYzGJTYscog7H44cM4ZwmpQWL8y8",
  "key26": "3TPCCQAneVZRwc71u6D5H9nwx9hp7KC8eBDFV3a6jazVc3ACrbn526pwS7kfHxm8XLaz4f5b1p6arCxAyaskpfBk",
  "key27": "3Z1nBNDaVDQ7w3NFaTrBRNR7mCzFMph2mjHXMDZZj5pbCZcSmrucYR9MHbBWLJUTZHZR4r5ssU5mSBbz5QwDwaLo",
  "key28": "2cTacnV6HAd8vJ8CMfpcvKM2QgFhtcQtyuJkxmd7my4e5dAL84a4ePg6YNiKFw8hrYUG6HC11vfmezbXcf5PCtHX",
  "key29": "4wem1ZdYCSw7M1AKECCeJicUrJkZ4MPnvCNLWS6oX1kG8d1TFyAGxnNgwWvBY3EmKRYdKRzh9VU2NgoM6Jg2f56T",
  "key30": "kGWHd6KnqTQN7YjiCUkgnvC1HhE19ipn8FBWehvYVvcMKewDApyMC77PA9fUhNCcDbizRDjtXCLTkEAxcuuh7KY"
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
