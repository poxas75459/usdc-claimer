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
    "4jXhun36zF718weKqzVXVBgQmq1jvRfwD4cKUvGoFHXQz4NrQevN1qXvh7HxRBQkUzTPKMKY2PH4CUZuGrrdu8P2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xdQawLaKt7sEf2AKLnovnuLx2aDAYqxqmucgYiR5oPFdK9B12ypjL4LxNXiL7KDoceRk3TPXGXx2j6t7T6fJFoL",
  "key1": "TXY6wG5wpeeiYZgitCErYdGQiBVU1c6WffrZYgaazfa2ArgyjKZTwzcnGsgUKiBfz6rPoQC3hrzxrEfTy1ti4m6",
  "key2": "3dLduqM1XdfNTJ8oqxuV3gum9wHm1NSXHwfrKLqvYGcstQnavLabAYAJA5zJt78uTUuSmT2VraFjKpFNrY3RcdBz",
  "key3": "23uU2jnvse7eDJpaXhPMXfqCZnBzdLRps5Xtuei1QMMsVdX4EMgTEF7KQ9Kj3TjDkScDiLXHvMS6vs7kngeiG5eT",
  "key4": "258Neqk5mde295DhLo1NcvNEYjAHVqpp17xZRE2SHSkPWhDav6eiQRF4dmLV9ejQgWBsiGBiQQLU3Liaffcnxc2n",
  "key5": "3dmin8TPgiWmgndA4WfpBCSneNppoC1dYbsbqt9g5s9BJvePjQekQmZC7bF3M22339NbvBV2r5ccsQomn1jUFbMS",
  "key6": "39bVjfmbLeFMJPvmH5XXgNrK7ZqTcPsh1yJditoRdqQSYvootsFEqQENLxGE7DRU48fVqL3BQzEzbNFYV1eseWFY",
  "key7": "SeSooPkgALJdFyBdeA23RgQMXh6Vzoodqy6xVQXrvBBp3BqPPKmKHmYDwRaRghkzL7kB1AuokNfT8BoSsqSAwgr",
  "key8": "3epdwkJyXuM4AVJ3BgwJUpyru3DQ52UmshxQSJ1aJz95ntqQtXWbiVy5fjCnzFLxWsWE3ZLn1hvrFnD8FdprpQpj",
  "key9": "Bf68XpuCwt13fxfHjZ5aMUWsfUjJARowNBw1nckCyGPRr8Agz54VHU9i9HnD5WbhKbgL25gj9Tiu9kK4eNBoURv",
  "key10": "53iXM2826VvV9V4PuaanoTjJ7aKD6UvXtXkNhMDyA4JzUZ1BpzPt7htKUTB2JDQxL4NDW6SpL9CD51fFYuzQ8vEa",
  "key11": "5oqY7hrCWRnUEAqsfrpAEi15yGcbdQezrZgjjpcutaAirCTCmX4D5jh1toQF3shEvnzNBSc6t136CVSfETJBP6gm",
  "key12": "5sgLyRXzSoeQ2X7cPZzotJhJ6A6KNUoFHeDHFcCkvEkRAkX5YviPDwXD1bujrTctmLxEU5qtnx6AacaDUBFh772f",
  "key13": "5Z2oaSQ8nrg54DK8fR7yVaWi3LAY1FQyPXb85EGSRNXZSGNbTbhpMenpDMB7mhecf8EsqaXVQ3jLorE5JCm3Tx3d",
  "key14": "NvD4j3iQJ6Bcjo362y7AAD8crLqCdagK7ZaJFC5dJXFqz3aREn2MK2i1HX7WCRtseocosbhhQAf28mhzHStBHRg",
  "key15": "4ELPn9jvmYKjZqQeAMZsMmLNKHTckVgnoUUjKvFsG72RnmKFxc7TADdfqVRpNCxBeBdzdi14pUQ1m3toViQfJ9s1",
  "key16": "3VgXRDGLLUHT4uBm2kR3eFsnphdLbbytjRB61cEAzaYvkimyxyhdj3BBfFivub9JeAhJT6veXKwzFGcsrpuDMLLe",
  "key17": "5FLyiD4CmD8t3xEoACBCBxxFpn4rd3kbVJAUhnekzv19S2gLjScBg7NSeUineTFEEno4XoXmCSvq5Hi69hJ95emL",
  "key18": "4fMqZrteKLdJ61cxkPCxZx5JP1q1h3xkfkbFWYAHMKw5p4Q8d8DJaj78XgvrajNkLqsHd7ubg6dLxYXxpmjnYu99",
  "key19": "5EFiWAFsRRc6ju1kjqK6Fd44xcVV8DdEinbiFn4w36pignGa7UQ8Tr6TTqnCd9bYx2VxcJngN3swxtTsP5ZNuiqk",
  "key20": "5GxZassLDF78KGeab95Gv2HkBg2CUtGFMog9SVnupJVDdxABGgmKC46d3tkFLbwxVVaoMLnXQ4hWLir2qREBSN5C",
  "key21": "67GXBd37p9BrNEbhHmL5SaKjeCkxiPa5r9pSmi5D9hDQdsdvrNB6TonMv6srWcXiGZU2eKboYRCUU2CcTrkZCofk",
  "key22": "5fU7Rtmbv9mnhiYiWj1qkNML5ydm6Upx1SrL29utFVuHyL5PyVcsu8UW8CYJJuctD64qTHkZkhdMc4ucxEAeTH3e",
  "key23": "2iv2ZVdtnRr39XqnKdDmhzS7e9u4kAQ4sCJEi95jqXaLezcsoBdZoTNh6s64tBTk47e1RMq5cx3b6vy2WdNMGcLh",
  "key24": "3dgTt3YHbNmvfLeH3bqWqpdJDyaso5gs8XDKcSc7zZdL8cJwq3hCrcHCXnWt3WExpnBmRogUCqzYhymGuYibw2E6",
  "key25": "658WQDecVPqBuiTAik8HAroj2RgumHrzxAFPbGUF8hS71fEp2pRbgKfnak9NukAi1M2R7FCu2gaL82xKKGVvEvek",
  "key26": "PNkfJMCqBpTy82rbwYYdWkmseGVfd4rZ55DYLC3s9M5wmcvmPT4FqVbtd8poBw4ecyKRo5nvGykj7JdNoBDo9Je",
  "key27": "4F7Zu6VEY1hyCfXKUsHcUAdUzQjaKR8w1Y4JmBX1nU9a2dcaMwuwa7q3vnq1b4w5gPtMTMUqKCfqvjKmjxmeA9pi",
  "key28": "5kHYcBWy9pdUVdHyp6W5DZ9ocx3pgLxceyMXdoZtpugUZw16a2xuDCFX7XRsQoNxJfGHjnfZSv5a4wawuSAkVmip",
  "key29": "5XrWfCxpt7wKiVvRDkr2fLbEfL46ojQfaoA391b6xtCquqnphRpzuZgHRm4Q24w2bFP2xkyTkDnZFPGyNowRLT3b",
  "key30": "3pUfK7GFsmQwca55zGiWrwPyDYTwxodsXtzbjrjY1z62ufyncK1fuRaxXkHXz9A1d3RfTZkzuxSZv4TqdKRHj759",
  "key31": "3mZmxbYoBy6TaHuDXi6qbKhRtUF5KEs7UGioHJjc4QjhguteWaRBZrGirzRb5ok3UHovxU5cnqhkBGEokzrXD3ni",
  "key32": "3sYhGHiJHV7vFdLKw7BE23YfvB9VGYFZwkYgVspLNPN2uPcJxuDpUV9hLNe7mrJShu5t7ZeUFyQtZZac5ZwzgPFb",
  "key33": "3qiGCvgkuHTcGbQGmHXZxbBjYLbdAEBSXzTsB8KyPhAhCWS9zXegWuKvpQF8c4iZ9wpB1RhC2HanMvvc1h1yD2pU"
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
