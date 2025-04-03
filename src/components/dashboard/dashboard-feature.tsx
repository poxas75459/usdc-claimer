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
    "2vAutqoUrQuYi8SpCvEhLbdG58Zvbh4YQVYQg5WgT7PgzLCcCuVStDnSUUUwAv1GhgafADFoLHck2mrqTgiHbkCT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ktyv6mxAqWKgzPxA6pkoQgZYdFPDJfqApmkqsBumrr8hrszyyio2RFFzHVFMDrcQgGBBwEzbWmLwr2oc55GUp8S",
  "key1": "4rk4KD5HJB9TAe16jHGsZm5NUPEtXYE9gAybg56Mt4VWgYZRXRTLSRdi7tAfH7bjYwXZBSjhmuAWcFcwxuA7eu8Y",
  "key2": "428kcsobjoxDAE2pJgysjjABtMPKBfgnWmp6qKjEySc9HhYqihf7uqnTmXzxWm5Cpufr3YoXLhvMnCzC9iYWDJ3t",
  "key3": "2eqcoSvB5hXQDFHbsJx9ab6oa4ATUtst55Ta8negrfySxsmTxhBfQDce8684JeZBPa8uH9nD9NDJCNPG4x6fGMU",
  "key4": "KybDwC464P8DASsdYvwaUEKjjsMFvCqt5twC9J7ArNnKz4gU1NCAPioLrLdBKMgdKVprhGhVuCbyZ6S8CBocyNS",
  "key5": "2me1EeKQWL5ZLQJvbAGeTPfBmhwRqErpPGE9oGXLaVmHRAmLBs8JUWthefxuN1ssbBsY7qvgHfu4HVsXyKNpaXKN",
  "key6": "YXMnm5FxVPikhLBuiqyfy1U7KgyKbCwmt7RFrXnzKUsRrVonTs3949rQMgrWRgjeLmqDvnsGhwF9fYViG1BDFHA",
  "key7": "2csxhbNsXPavWLKrtKfUZfXRuBJrqHoPoVWcYRdMLZLNfjTeswzMBphTZGyAHemvska7rJpsbyiggEktUHQPp4Ki",
  "key8": "5sfEFLZZV6G13VKXrKsBRnZvzVP49281bB26L1ShmHBEwJKQ4JQRGmFSNbuEDqCsewSGnzksVUoiMB94CgUA9ju5",
  "key9": "3HmY4QvgrHHUf6mQbUCHrftmWAZupnhRNheZhqbLSu4QrUirQmhBbuTnWRFzqBUS4MrBN6cEmDvNyYjW48XknSVN",
  "key10": "5S7o6hg6gd25WL4qmMLNZG6yv1qtQLPX5qkDyGjXRnpp3JWdt4L2PEo5YdoTt8FzBBxjzByBiuN44p2Yk5YnFJ4q",
  "key11": "LQM2iJYMmbAmzgT81AmJSwDdNhasyeGF7k9UUUEZJguCkLGhTo6Cr5irYxgaupKEiTj6JH7oTWhqUt6KpaSor3e",
  "key12": "2UWXAuPyp4sXxdEHKxem9sHKgBSWVJZWh4qCWmHGRWSbeR5oZCUimxu5BGuwW2KNwdu844fusLXbEwfVd1dFxrbH",
  "key13": "3j38ngQtDmfdefEYfcNAsrYsjSQpyXh8ihcYt8Jb8brokNcBqtr7SvLM5usPRBnqfFqNrTQ1s2nwMueMETnUPJkb",
  "key14": "3Kk2mRZErFxqA7PtHkWRQVm4G8sHVTU4hVS9LwuiPyFBBQNvWmVcKYsWHrJm9dTGmZEDZQdg1JWMY3AdAt9aumxS",
  "key15": "2GbwQQJkw2xr24ycBQoHMk5WQ8WkwvPUdbv2EFKhUGdoYHyKhi5H3XNvPfDSirH4nXzWySz2KddVWFchbnQBN9aN",
  "key16": "2D6urUSCx1FXwGhNFxq8P9xxfpEZWYNJ8ZNuYcRMPdGoaXQGhz4DqABEjcVVrZeZKrQdfp1Ya7UivYhtchvrJEFC",
  "key17": "5ft39XJZsq5KYM6wYBkJCtFp8cCw5u5XD5vkNbifZCftfG7cuzmgfmwe9uhgtbKN3qLfeLXhXtWccPkReDvmNpzC",
  "key18": "2KsE3L9bWh43KsMKGPZ8BrWpjEwX69cMtQnf4nW386gbF6WGAtpWNE4qpmdfDCDZEZkcGoTNcfoUgAe6hhJ3dugf",
  "key19": "3U3y6P6C4aG4bybTRKjqywEKDr2vgNueT7XyG9CwXfMxThfLUuM1YJSUqjLZ4vcUW5fnM5Go44ofcQuu7hBJ9Hqd",
  "key20": "EfrdCzSgPAy4EntpDBhxQmGARwmC8q6orc4ZCLkkw4SJC3VBTw9sxJWqp2DUGP7LRm8upAHZCLzx2ENcRb4pKGc",
  "key21": "4nf93zRJdMCatZCpeQoBiJh5HANuRs4XxJ1X4AVCMmWAJp6YYRV6PqeBaCnvHJnabYr4B5pi73upSDcxKenraBn5",
  "key22": "51JSRqoWomS5x5Qk61oEQM8X3zX6PWdCXMH6ep73tFuGZXy5g13Vc5cowPWZmGtM6VCLQnuRgBrAbqJcWUeYpj7Y",
  "key23": "27bsWagJxJLHJXmaQW6p9EgGmDctRp3xrzE53TrbQeiDrqx4QJqRPGXx2VboirABmbzNSEpFHG451AoVhYWS29rS",
  "key24": "4JuDESFM3Quusoj6ixWZsizbD44hHSPY2j95JMqxsHMpj3S69wF82CEJpjo77FxHjw3kRVFtDJhr7xXnHrUiF1rd",
  "key25": "3RLGeQ2epghewW6ibG9GyB5kF1RMoVMoy13dBqUpfqiw5g3KY7Dc4C9QxuLEKTP93JPj8jBjYVuRxDPVTExvbauB",
  "key26": "2UY9pjDiWo4XaVDXkPPgMG29MFuJuvN36R4m23AJFvPwBQGatpmn8oCvezCx4Jss1ftaRkRkRUtEeQyj6fg7iPjm",
  "key27": "2FFMN4pMAqhEfpdCPHTU9HkEZy1P1PjC8bT6oyax9Y8AD79L4sY9GrTagbcd5aGf9y99oUET16rzxY1iiDGhnHhV"
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
