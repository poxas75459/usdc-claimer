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
    "eJpVdFVZBDCEFHw63z7kF5XdAdD1gExCPWAN3vM3S9C8vyxVDP2WWqsnt4A9K84gjKmn69QnihuPxCmmZ6uu6Jx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xxqTotgqAs6fPds2qVai6rpGV1GAjhKE9tzbjtsQvGg2qXRqFdcUjC22raH7GMHCZHVjyqxNvgRXhHGcF46r2tA",
  "key1": "3HiCoFPGnFJaHTW5eWqpgD6ZxYsjB5PhANS5pw65GrobbTqL4UUC87ZdBTAcANp1Y14rCSJcpZhYQMBETYoBQD87",
  "key2": "5eHG5yyzqrrzc6Y7zUYBX5QTMvPXsrHngF8eDbfES8EVz841pinG91zbVQZ2G1LxUsDtHB7nXKKnxbLVU98QTmgZ",
  "key3": "3VKTEnabd8UCoppXQLuAog8HDvfYD4XLiQhWoYdPBesdbADbwTTpFWL79iaVWaAvnZFQkd5tVikjQHkX2MD17SHQ",
  "key4": "4SsVcB9rLaMe9XE9VX44Be8baia15mXot5HrMpGoq6NBucetY7pftthtCc7cM72KTNKoGHLu5z9RSpYra79BtpJY",
  "key5": "3N3PFQf3LYAPGZQg6HmLbDno1aZRjSTpBHVbq2YyYwto4kwtRJbFnTCBL8rMeyCSF3uPnc8DpivS3gxCR2sqTQKw",
  "key6": "2i3DxmiCJ1gZnuiWKY9Abeq2PAVpEDoRsZtJpQ6GYjb9kvUcPErUxGK16JKP6kASxasXvwV6jS3pgxN6zAUXpU6r",
  "key7": "qrXDbH6JQxppEZRyHxYNrJNvzt9uBx5VoQWN8tD8g5r8inVUttkDMK6y5nXTZNBSQpGSQVTffVQz6La8k6otCtp",
  "key8": "2BCEa9is3iDy6GDcWt6HRtJ71FqtCrzHCk68FGNHCVWwJjEtNrgG8aUcrFTe1hWidaCVKq5aRpvk3J1MCn2fXGKM",
  "key9": "ThcNHPTecYrgovBF7FH9d91Ed7T9xg8apyA5MVi6BUUtsQGm7PYMBSeNxWPQVtXVwBgRR1eGvdMTewPqeHQSZsJ",
  "key10": "2fDFSGZ6qt7t348saP73wPMrrCb3Cjeos3fxgJuhpkg44wq6qYGewUuPmohmuECi29H3LEoKvEFQ9Kqnu2YyXrpp",
  "key11": "49VdeTKWU1VgvvXgBbnfTNd9rqcbFvGPNcTWrpLzZTPbf24UBbPWuw232WorqbjFZNBrTq9TQCCozpN9Gko6GQCa",
  "key12": "xhN9FprpMjgQpjnWu3jPVXcqMXVSpWMJr9C54ri8WNuhzoYYNBCunZ4uF9gRymjgqRvioVP65zE8fbAQcxF2jP3",
  "key13": "5cRYGDuQFFEaaqTf6NysE1GJGkxFrE2wvKK2pQMhBQRXMXfxt2QkjeXmNrNdR5wSRXtJhJzJxERzmoWZkT3ioNnJ",
  "key14": "3rN48DRoBuurm7Micac8p89ZR4ewWN2tDhfL1DKP1VaaFDKh5R2qa1yfTc6iBNaf4TFsUNj3PrH2rDpmM76Dj2yq",
  "key15": "33i8oGqEuctecRFTRmzH7AsLR2Ke7GhkcpdFMMSACjnUKZ5xFHfn523YoViJEDAx5mjc1KpTAVmzzxn72tHrBLTi",
  "key16": "fjT9JUAJjJzaGXi1dBUrr8Qxe7TnwGaUk3pyr1JZ3WgRwoe19qmRBW32Ag2NokC2Pe8vZ6sy92v2uLnj3LxEp86",
  "key17": "4z17y78s9zFvwi6X14gvatgUX7aMvCgzFsnSHPvZy7VMpjdhXW6e5rXcy2qpYqmXA574rTiVjzhWGWpGYthGTSFw",
  "key18": "2129u88drpDkMeZgUw9K9Rcga74vHPA7ZuwVu8TFHSb3sCtL6EsuqJa1ApakNuNgeDz3GUvZYb6qpoefZn1aR4zK",
  "key19": "2ihkvARhGPtE7gaKxftg2uYFNnHqxchirUT8fQq7Yt98xrwTzzt96nS1WvUYVzXd6Pwnh92fLQo5VQB4EPWgrYMQ",
  "key20": "5Um2uam1GuqwJjLLuPyi1TFzotJFLdb2S6PzoGH9EfTifV1nrm4cSx7ZPu4Rroo2j4Mq2aEaNox7ovw3AHAZubtC",
  "key21": "56PfHzN7Svr2ecKybEY7bM7QMV8UQwcc1iT64r5NuTTHubPE72QSRjiFcaJ4ax69qptNGbnmt6xW8j2atutGvLTH",
  "key22": "2Y5o8j24Tug3nuva9yYWvCo4vgdvhoWhVNUtLmCbtN7XnFDNuqB2umhA3S4U1XUJszYeQNJ5gGzX4YfWEL4UJnKN",
  "key23": "DjgDr8JqS4CU7fXuKN4m7zzWfCqvMShQj9HWLWgNUK7fsGPKUnp57k6YfLEv96x6XyupihLvcyFwUjMhr2uDRC9",
  "key24": "2JDRCKhuuERQBCxwDHJfeeZf1tA2GMnVM1fyGCZRa7KMMDDdCo3Ffbe1fxEzJX23sZJcDsVE7d4SNyptKS8C25KM",
  "key25": "dQAASHUhPW7jqa7H86vnZC21kdvhbkD58pV9HvQuZnWSSUr5fW5Ysucyhw62i7ZuN789FUehCgXrpz6ssxdFk6T",
  "key26": "5TGFuJqvLyHqEy75mAkKhTKgWtj17f2es1WvAtKrJe9YsC2vZ5d7YbpK5KXkVZRTwkeYH9sgxzqxzERHK7BP91aE",
  "key27": "5cERrAgZgZ5ZwJuYZejJsBGD4GB9XdionUBdc7MihvgFtUmRme3ARvsRa8M9LPnMFU2jZ6RNHKNmuv7s7rVrHqQW",
  "key28": "2SPa3tfKzWN9pUb888y4bkMnDKPFjMr8Xy7Bvr8NKznz68Ezc31KdU5dvBiW8kAPvnvMj23q1Uey2VaXkBgcGNkR",
  "key29": "CzkhqG5eD3jBMLNFekoayUSSFsX6ehqJHQJGStZ72Egw958N83M733Y2JLu7iPLZEZZKr43nuH2e8SVuGny2DZL",
  "key30": "3Njfads5FoiB61HnfsQqY6mo924cxWWZutm8HRaFExpP7j1wmL4P6Za9xX8GkaJUr6PK1HSLLBmDMcDWRp2xsGwS",
  "key31": "49d71DN4ad3s6MSkYKRsGqviXgT9kobf5XMf5QVeyXw8RLVnqin2QQ95QucJuZ53x8wV4EqXPdcnLZukHW2pFVp7",
  "key32": "2RU6LePapZNnuHtMhvrXbaAHF9p2qgEXnjHUwaLTA8hcCLACQxpYqBqwYTtiBBFGkR14Bt2ttPgBPTHjYk2CgTGy",
  "key33": "5vunQXz2xZ4mwmPKxJ6MsCromCDMFeUdfi4LoQYpGQnWZV4YNL5g89o6LJreyW1dod4SPH9n2M3ZUJYJYEPptY65",
  "key34": "3RpbQV6zp3cXDzRguZRRMERLgo5VUUqBszurVmYBXQsefiFPVNFVZeVQewmSsRdfNBcW2eKBren49zvHesdJF8xX",
  "key35": "2x9vzfiGCo6faJFKiNwkTwxDcC24YstZBB6DebhdanFbKrqckWczDZwuwUCG3cZ55mdiiP7a6CcHSqsNePfchdwg"
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
