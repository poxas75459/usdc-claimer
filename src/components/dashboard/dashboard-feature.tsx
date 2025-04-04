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
    "4tohqyePkjE42XqiLQW7u41KHPYkE4iMaCg7ryvJ6kRs8WUyg5sbe4T8MdnMPzdagDLW9SUFjFkypHiNKxLbgB7Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nQuDhVqh6H5iX4hmRzfKKzqDHuiu788ivTqY8TAZfawpraDi95GEKWT74jofMoPYYWYX8hNCX1GFN8M6LJrupjm",
  "key1": "2z3BHbod1oJMoZUtuJ9WSux2AZcu5AC4KDmRsGd3zzX5bActEfpRRtqBw7aoa5ezzrHn92xfZKNQhoQsBZ6Ak3jj",
  "key2": "XkbGqbqXv2nWjs1ZHBqBd8HgfJk4ncRMBJF5XJQJEReZX2N2MDmm5Zxjdn4WeZMFCSzs8GCo5WkcQ8yngqs7Sss",
  "key3": "3uAv6VFknnkQ2rW7XcGENE2QPEvAr4eruAwVS9xBYrK86Wm5h4mzzLwzSqUb6LdsqxWCvf1sqbHDtmPL26hKdxW5",
  "key4": "3ET2ZXS3UVqmVDSKyFNRPk1kmiUUQtZ4JpTVoK5JdDwmGK81ZsxLFeK19P2AFaj6wZ6hZ41gL4rcqEzy8wK9YoRM",
  "key5": "3c78pXHWFFKuciMeebgYmQD3zpcfStZCB6XVsqmjUemsX1UJHLZoDTZj6tq3pCLsQPTejw7ApPYT9ApzpXL5em4a",
  "key6": "5Gu2yYYC3sRr2CetxUpB5Wmxe5yqp5HhaanZgkS93qyAujqmDr2rBkbmywtgy4ywQUEZ65s8WvV1VyBqUG5M1DXV",
  "key7": "yPCDZWdBbkyZsDuf4Nv3SVgLK1HjyrSUaJBGfz61HkRhcBehYKCzonbSLc9pojuzrdzgNCmnMZyw5K1iU7GYw7V",
  "key8": "5yRRc1BCM9YDzGi7P2AcbNpX8y8Mmg3KxjFiPD7XUA9Npm6inqVhdck3oy5Cs6BxD7cviQACJjPPi5JquzpkFP3x",
  "key9": "3UYS7xBTpk2GwybFTR7VnNYohFH3dzUNsPkKjYB8sqHmiCmzbgpyNZPmKj32Yf8zvrrzjKqmoJkDmoL4Rhit6FQj",
  "key10": "4ZhN8wGK2crMSbPPhkQWcfkTLRemXf1k4SSLw1DrCGbF5VykJ6R7byNkxRUJ7wWTpZYYyAz8YpLxAdNAJJWm5iNL",
  "key11": "5KtbLERBwGNkWKsQh8W15h3HTSfdVoY75V9q3z17Vdf7SUPUnk8zMQyocg4SpXr2kggyEnUCtAjeeZFXtMhxvVYY",
  "key12": "62NjhSb2XZKmy5KqmULZTH9QRWSrFKaZTCQtgbn1hDGnXvpUC9z3NaKanq1nKEr4wfhVe3Lyphhdhc15pdEySkPW",
  "key13": "3phF7rYVG7RVbQjJvNp3a9Xymy3WzCYaQbii8973Nhor6gjKw45s6PAY54RGAJ44DUrCP6ry1FtmbNJNL8xrUw51",
  "key14": "2412eaUf9rTAdMNDpsDHi6ySe2ENuhg27eRGk1dfQLkn9akABzxr8oHmLv4d5ETWjgVezqLDDWW7gRTUexyAQuEd",
  "key15": "2egBjAsZSSK42NGKxP68PjPP2LjF4aWjHxNkeLgXJnEjBeag552euT1pndmstZ1nhrFCVKMHhUJPsE1GJFSfy8ok",
  "key16": "wgfnmY4u4AoquSYYvYmFRk6a8p66cEusC3cMdBbdXwXEXWvQJNnK44Soy6VaSVvuKTw33ybcuNs7KS5ideMDkan",
  "key17": "4B694W12MunHMw7cjA4PfNrVy5DmkWPZ5bksnKgsAwarxT53BSj9hCVWzQu1RRQMikihuHFD64UMdvRtGonGufYw",
  "key18": "1PESfLnpMdpvKbRDj8eZ3rpueFA3Zu9wAUkC1tBpLAKkutm93q9RANHyku6SVBX8MiCop4yCVK2yrSWvrdh9MhS",
  "key19": "65nUFYNJo1keTPjP2yBeaqbHjAivY1yUhY3Uop8GoVhxjAQfDz9CVrK1JiLwQAzyaokinBa8mayotu5wZwYfpfeo",
  "key20": "rT8WD7a9dWmh5P3s3qB8bkvx4oHjawsZXpYtueHASY7wMQ3wFJpL1J4qBGFufyb81ikqsHyqMo2Vz2nRkcort98",
  "key21": "3e7wb29iDdy9wMTAHgXwR52X9f1a75LzMDMsihoDhoz3Vpbvj2QQMMMw2zWzKbYzDviq7DhHLUWmrwiwmnNV8Mta",
  "key22": "5RKYUovLVFJ8cGUPzThU2m7iuFt8ZnAw95oNZG7fpeq45ncegZbRNNUK6GSC9MgThzGmBLtZPbWJm9gSJf7mKVRe",
  "key23": "5ZcsPBNuPf8yAuNUW64KHoPpQT897Gt1Ge6PT8Fg7tqXH7dPGP69a5ztjLrZnY3bLffwtxhsChu6zJ82eHJhckn4",
  "key24": "31Sg6A9yueTVYgTJLqwmSeqeMnuTTzuCDKJYdgRWsr1oU9gg6KDsCqTg3GB5fVsLPnWV4ZdqLDS5DnmXPrn8FqEq"
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
