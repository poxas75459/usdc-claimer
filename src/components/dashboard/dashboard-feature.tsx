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
    "4P2mLmWuX6Vhy7iZwUKYVTWK6DGBvKhhiPKbDdQ2zMCtSrZWtyVyYuPd54aSc1se57eLioWhcEp1MiBR7jMAzi9J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NSLeBEVV3TN985U5cmKDHNbiKX6tM2obH6HbjScEt5orLMGZ5b7oq9vGFn8DwatdRuJ1pQENXb3S6MpPWEmkKu8",
  "key1": "2J7iLCr1KjezDDJzVDjMSWcgw8wSvquLg5qU8Z9SR2d6pW1LJvsrQikv3jxHm7vKRys3WCfu7Y4mEikSCCXszvUB",
  "key2": "5D1LdrGd7hE4NGZVgZBjTM3LPJtxyFkiohkSS9rMK94156cRd38u5gTzZgxks3ngKSZcbZtF6y7C38FkK4DZBoM1",
  "key3": "3i9yw8ZM2FoBWBjyadLyfpeSCtiWfDygXETHLTo6EvDSoUh8wgE7FJzpVTjuRqBDLeHx8vcCiM8nSJdzU8wbPBxk",
  "key4": "Ts8X1SsKdbv6EzPEKxMTAtpPshQj69AyjPy1EEALWQoFUWYiuJUYXxAN5EDVxhPrU3D916799gohuEkeALCc1ZM",
  "key5": "4WZ3tkhD8Bgaoo57133mf98bSSdqnKFs4ogkQrvwZ4jmCCSCXYS2skpv9dYvHmnstLAr29HWRFAKQfZxVHhF6FnK",
  "key6": "4vaNEnbMgZKeRapYcHxUoN6DEJr5RKuqHqb1tJq1mJgYgW7BXWFZtG4EZa2uHWjBQULrb6Wh2hi9GT86QqoBASt5",
  "key7": "qLMmdvVtiuZ1KX5a7pBS73GaUm81CYCkABXykHGMGkLZBquKF3vwoBxYgPEqo2wFaKriwiFsFvTUKChBp16WfmD",
  "key8": "67EBCX7jLDrj6H36GYH1WbATL2nd6rj7YA7aJMbUSXnMLcrtkXCL3YREZin7hoMyXzrBSnbFbRZ7u5eQjXUAZ77F",
  "key9": "5xMBjrHGAZZc3QWHpv7gVZfWUkk3tkKRJDhXYU6KhJ8z3vKPW3X97uK4soz2hWUgr3hkwVNVJpte9GSF25mXgjS9",
  "key10": "4n8srijnRnrwEoXmdUD1iPVCAgEjSJMad4hQnGNKEvbB14UGnVVx1XikTvmtchjSxnjmqxvM87XRvy8qx4zhUhf3",
  "key11": "2KRYx73v7HhhtDgSoDF5Fa4C6qzuhNgRrvH2LNCPrLTY5FB9cTq6pyMqT8ufaKN8nQSGRAeG7TbbiaSUv6DowNiK",
  "key12": "5LAkAhHxSURV2uq2GEVF4oW1yosqKNVMtgAnRehB5iHBufMpRhs2eL9GaEhyMapytYzU7aDjnBKi3SMrEfhsik5U",
  "key13": "3GkbFQQiHwjcLVVRVPeoq5yLgwaVAPK6AzbseNZTZjbueSn9LuPQEF6JKc4w16kLFGtLV2M85e2deE7iuim7kUXU",
  "key14": "5ESjgPxCgxtjzmJgqUa1fxoJxSB4j5voSCjDhvQv5QJmepzGFgsJiCauNFKZsxNB31c8CMgPnLL9WxtAYnxYy7AT",
  "key15": "2VHnZDho3Xnq7u8ucTmNNZE6da8iVkmcKkuVZ83tvW4X5Gysw8mny5hdvGvXwEy57dBrAsNHZAVZbp3kU2wTqKp5",
  "key16": "22Y24MTb92B5QdvZJmEbNGWzAkGcpN5DZ7HXQHqrqRvFyFcER7zmmpTX7Y23nbhJx655cCVXsSUJpxwrwcJKgMEv",
  "key17": "6xxji9jNBKXhnDh5BVBmJtC8qdt5fReUteS8HJzoxfFZoHYRq1b9k59KK6DWrLuE91qrygp3CBsQAJtNjXUJgK7",
  "key18": "51kaZarDfAqx82JD7C9WKAEmPKzHNvBLkyvtpKfwvQ3DKzRXpXzvJ1ivUayxpPNRbN4Pag5GbNMdqkfd6ofwkwPk",
  "key19": "2EG65EEmbA5j8NxQHp15NbNxjA4bnfndGyFSgMo8FDkNuN6mgjPayapKX79DNLyqTDjKLmTunrPDBApmZU1RAGKi",
  "key20": "3XbzEmPjM59Ebmoscpcc3SG6CkD8P1HPzprQ91jiuWk813K3hVhAtwLEZowanf5uYYAEW1G7rDyEUwsianzBbSfT",
  "key21": "4jzLAnLRRxqyDKs6eYgs1YQAZUh28ot3yhvuSNNFwG8W1zNc8xXE3d37e3xsnewbL19kqkH4k7ZR5QsbAACy7s2R",
  "key22": "XubVyTVuVsQp6aigytcg5YgNpzPp6a2A2nJC8Z7jHk1DKhac9mgs3QH4vpQnAammCepC9J5a6BFsC2ip4FpzSrk",
  "key23": "nk43fGt37chnLsa8WkSZT2hhizgStJR48C8oRG8e7pUCGhEG9G9VBtaoycyW8mwxxeJ6caxjGM4Knkv5or61kw1",
  "key24": "YkoXRRdPtC9tR6XMT88vD7saLuZ5HbBKJ5X39DWG9AWUd2HxsUmwLZy971D7L8LHWUZWFKNyEgJ1G4fE4BMopi7",
  "key25": "5FBR6HSCQKUBS9ra1L9CtGp8PUgBFBP6jhcbH885p2MhuoSAbKhSRYdHAPYLEvbG13q3rswUohun3Xhxwtg3n8L",
  "key26": "61KKqC1jSD3zWyTMciQJAGi5ejrFaoYbp5UWdoXm9BGTUqDFjhxAYE9huVgyebyVc7cmHrMQf41d32CkEZaPvckq",
  "key27": "M3DUs9DXfne9c9dtFyP2MRHaZsPD9C47uSxP9yvTrVSm6QHgBpjKhhNvg3p27Gbcm69m6H9DS4RgpjJ9gDQYGoE",
  "key28": "b4juZ7VX8mqGHNNBPNyRM5QzLfNvRhP5mjrZWhWjpfpohfUqPePSDAfeKaarv94wfSddxgDudH85AAKgtCpBJni",
  "key29": "ZZz2Y9RFhhMgXiX63m5sST4pPEmGy4zimpJCfjRQZqpK4H7KWfqLcFAUEFX8WtHBj4r6CXPT5AburidKzgG6exZ",
  "key30": "59sDjG8Xe5s6qYQY6ZU28cMtqkbXm6JxUBocuHRmCjLJLWAuRRcFSVfHkfpvDykD7zaU4V644LTMXEb19xDGpBVT",
  "key31": "2pxXXsS2tw3Gn14ziWhPFGbbkiZQns5xt21CHfNC3kk7nFbNtHcUq3UCrMwUXizZFR6HTpN6FDSPL8RnkiU9Jono",
  "key32": "3CoTnH4zLKxuXix4Mn4LGTuzNUMnpMtHqxHhc5dqy1pLy9ZMZfsCQrUcGkxJ1HXRDteDjEVGJtKFJ8wajP7WaaWh",
  "key33": "4wCe4GfFhWwANvuCrMTrYNRwnbLpQGG7mTYPf7kQkmkfCHpWna5Vca2QJsxJWW2RvdKwyDReE3K1YUrp466j9A1U",
  "key34": "e1wL39mRRqwZF1wT8s3f4eXorbRks7cwzRX4DY2R4jUeY5Q5zzKrJqPDfiQTXwsKa55CA4rCfN37AQmB77TMaYb",
  "key35": "5rJS8KVr8P9MaGGZFp712RYQxXdNE7KvVzZYmdti49U1vtaDDRS36n2YNVhUMwxcokSXcHfe6MSyE1id6LWLFpmq"
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
