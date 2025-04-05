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
    "2Ze2KhQv2PiqiMeGTHMaWEpJmemJsFV4ZMEiJvvaXhTTTG7qX4wg3jwBE3fQphHJwiYZUi6Wb1nmHW7sUr5i9j3o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mrsenjvMey13r4EMviNBPnwXMrA25WAa6E95JpWEmferkiTd2Wjspy9ducGLc5sSjQ1aRchA6ZYH5TD4FyE9XHm",
  "key1": "3yGjwboSUZU6wXAWBS9m2xkX3it9v1365RTFatCffWXuVmkKmrEdaU9Q4r6zvLA4votrjQXyb4QuC4FeJppK6ggA",
  "key2": "K9tahN2EDzkL2kxztjXbMGfDuLS4iTX1XYgkHbhqpaFd9pAEM9Cf8UGAgNXPK8PqpZRQEuu1KSi3SZjdzAFa1iA",
  "key3": "sDg97aXY8NquHCSyTNHoorbgJcVT8W6jELQDNdzundQwussdZh3AnJa7T6vCJnUyaSfhbQmq9fjgwwRs1A1Ei2c",
  "key4": "624qMHQhJEmhS9TngfAC55es5sxzoFNmPrPPt2WUNbK8jgttb8JxcJSMLUzMk6JGbPmJdiMEnhcUHGj6L3ineYDc",
  "key5": "2UuiHsznCmJB1nBQRbcdxSeCbcMAdXc4tXrbU7NHBB88KM5KTozPFh5d3w2RSvR9qPpYpF9sUFJwKyzyKQ2iNpNK",
  "key6": "3HQqBnXT71KkKSnPhsSMjvj524dzCz6tfnueMBaSeJQNNfzjmhPxf7fZJJR7egTJRHEPy83h7buuRTvvCAcL5REj",
  "key7": "4L1FQBfCjDooDdtKazvsydo56ATj9PrtBBcyFqjVYBFu6xMS3CNWKBd48NGv79zv2Cok4J7V3WXL9ApQ8jWFr29M",
  "key8": "2AJKsp9s9YGQoKKuWzrEeLaK2PnBdzPH3VjeSK8pxtbT8Y9XmBUMiPofvjPMLXwj6ELzEGLRu47jj2hw9aArWnVc",
  "key9": "QTuLwcfL8omLNaXmAp88pAayoujT9CqYrJWfTmqBZVh1B54jFJyg2XkxdeiA9PkSmiL8qpDoE4M8EwWmtdSpSiG",
  "key10": "y2mwjyj9yphk7jhsABxZJXKNX2mkQzrkhf15kfSg6crusJyqZwhwaHCNsxWZtbKqHoTJxD7fyaSFPUTfKks6tsY",
  "key11": "47f2hX1qHCQFwgfJnGQNgK9Ubitm5KdAqhH6eupcLLLhfXeh3FKNEinwR3tTjmwMDd8CqeJdUUyFdWbrXY7kZG8H",
  "key12": "3PvuzDWGqLn7EM3qzvfkbceqFFxEdDWmfhexyTqjHfnzSu8GVr7S4hxCr1wt3cbxnSDs6D5CDG7qr8coYoAsE6Ap",
  "key13": "4tSH5h7tnsSFdQy5xcLkpfuJyi3PLCqBtw31q681x2F6Ee6g9njYpYNBpvuwiNxT8xZKGM7D51DvcQTeUYAmjmhW",
  "key14": "gUZ5MCQ6cspLEAeDrLtXQ6peDyzrwYt5aPJkwupnaN9Utq46Z54YYZu5U4nPaurVYUfyGGXgAWDt5RwLmBVNR5y",
  "key15": "5SZptvug93SrZt5WvsAcUDFizbeGKSsHxYpbwZo9aoPKSYDuM3vrkBrLQ3y6rZVGtq2L9ccL19F9fTLXKnzEZanq",
  "key16": "3vf81nvTGs8QVvYs6zc3CTiX8iMYJiekhmMoS5M7W7SHJEyYdVf9iTJN6WcfT1Zo8MMumpyZCg3VrCCir46sd46u",
  "key17": "4CnYzAtq1u9SjWRTgwozLF75KRmoDT88sGPjuK69Ep4DeMNQaYorJ9fkHnix3PhKrPWEaEPK35LCXMwVptVvaFph",
  "key18": "xXS69qtHZzSATZBVLWUUa3PkeLzfYLV8qB2CkAhnLE64BDdM8CFJqtwY8NtovQfj6sKcKpBtVTk3GgwgMQRG2Hh",
  "key19": "3ZD7h97eTTcakg14AAPsBQ65bJkqv1RxQYzLUcZfKJDthvxPhjFw2StPg4KHTfyYfvJZ9huQyGVaF4dTWZpYQTHC",
  "key20": "vCjzm6irRSj6bHYq8AHUguGWVspJVt4VgnmNpDqVaNNo25kSshdp7ijmooJugZv6DbxetDKitTBRJMXLVETcz5F",
  "key21": "4VB7E6gZt7GRqgw4gwV89GqdXPVbqHYFtbZgvXh1PMkmcVqp8NtNQ1jPZbiVHi4oK64upB1ywtWFk1X56vWK6JoH",
  "key22": "4ZyAa528HWUK2gzJqgmaxfxwkZn6CSpofhVe3w3vMAcdT5cM7omTGhMco2Gc2wyjZJ97UXH1U9bss6gpWZHLyYBQ",
  "key23": "3QC2i9UTw83ZqvXQjU7U5MiGtx7idhr6zsQaqX51m8dYi192u2rHfRVRS8tWho1Lgy91KjWS7nUZv16EQadA1DnS",
  "key24": "51UWS3YQWBov6eG7VELj8mZGuiHAu5LA4gEgrbGbTT9GnK95G9QLtaTWrBPbTqxE3hQwQrQMwgUaAFT22MeVNb7d"
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
