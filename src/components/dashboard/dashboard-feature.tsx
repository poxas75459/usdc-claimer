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
    "oVGT8F35W1r3UHKWkB61EpS48FsYPWV729LV2kMKgNr7MP3PTppCgpej3iqqx1QhhtCSkogCti5L4sYRUj5WKeX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XJXzSf8q9YN35XHp1VYbMHoSAaG1xhLQm93KRdHiUAtGmJmwtRgxA9ggugoXAywTm1uEFFQ3TCrfNNRPri6gyzh",
  "key1": "3QBdvxUzKLP24r6yLRPJzSu6s9XizL9ADdC7Qx4RonpVBFHQm9xNC141gv9xmRnsELn9i1n1jQbuCLGoi8w3DMq1",
  "key2": "5fDoTkamySJtK6tkgJ4DrTRKeGMtcieKSzW45LmPkJishG7Js81RetnpvHwVHN6KzbB6cfHp9cQvdtfc6wN41Lvv",
  "key3": "BugEV4pV1eJrgWxao7sA3hUSvGpt9VgFCL2eSk8uRcVN1VFwkGVbteTnU9xMuFB5L4iRLy1xFrLZAfVRSiJjkj3",
  "key4": "3eewt47Z6avw33RXv4dVBV9LRHhyaSKnYZKPZGzXb9gW1sp9ZXs7hYQcdvKVjWsPzAhXZz6NjdT7m6qwnduyNxmt",
  "key5": "22XmuiXiTvbeVVPaRVDcyiH598fewN219xeXpyyChuQZADRuYnhieQqAUtZFznXtju4xC3NLfXFUuooxU1CkAsj8",
  "key6": "2hU69C9KMHtL984oDqAJyHpLinpaReZqidBnJtuDaJ8P8aFnbDmPebiTU6ZU4zPFiPFX8DdQBSK3esWorBMXbnjP",
  "key7": "epdi1Uu73K9jzfcg3WcEzA5vXPASmuCNK2RFoWxxggTskFXur16C4ett1DKWT3xDueK3bkDb1RNgzhjTAdztjnE",
  "key8": "39FkD3b1fvJg51TgMiqU5pUD6d8ZEe9N3SJhgyHFTjoMQaqMLCzLg25qbT7GL1Pdu9JWLS6t1Ye3tfXQJjoca3NV",
  "key9": "2HRABdH9STfoZN7PpWuCzq89KAh5q4mmg3sMVTG2XqogLWXCawY5ccDm2FLahRjKuRn5zWKFF2fosntkckq9nvNP",
  "key10": "39aSrL3NK67VTcZgfLfstZzthRYLjJnT2v3n5vhXpAP2fVKyfJZEgtCTFqkRSku8rMwWkjkVVQ4j2upZXumqHSTq",
  "key11": "2AN75MedY7L8pxTZHFzf7SGGL5uTYPN7NUZQCz1yHupaWbVaF9F6yKSZMbg6HNRjhtibNCSPw8UUyyDn33iCHTs9",
  "key12": "5xCJViVLtVcHruL3vGnWB4zNK7MZTxRFUZRpVv7EFze1pFe3TgdvcciexqmEdRYWzeAaU7maaWN4W1McAjv82x5R",
  "key13": "3RCqU6q9hmEpg55ZRSoqF3Nfv3snZbNoqtbFJUYmJRzehGE4s1eCZ6i7zoWHEZ5XXDLSjmaiFSGw6DB1dRDa6F6U",
  "key14": "57MuRrFEDCJ3BLEu7wcSiY3u1pgUaZBuA5mN2juYDiVg6p5QaZNNdGZtNbNbFjyGoE6zu3i1PT73LJd9aEiTDVgx",
  "key15": "3ToNzUWdrE4HS6hi1UZiAXsCXz8TS5DJaji7QP7CjShvXSq41PEvMTL224bBxbSZRhLzpNquKzcp75WmGCj9FnnD",
  "key16": "3cN7tmbhw6ND6fJha48jyVxHrMg5LCtFD7is5YxXzJtbvpXGmV7RWGQjL87JkedFgphRP98XLLr9s4napjtYQRT9",
  "key17": "gySbbFYcE3GywAjzS7BJJXBQY624rgfGuNXQUoW4GN4CLjoobHPmgi79rpmqNBdivbSWQAkcv88xZt2vtENmSpL",
  "key18": "oB181meemVm3wAcwgiDfR7jh9XfHdHXBYuoJJsm61jUP3iWDqP4Q8RdKWQJhZQ5nDdGeeULaJBptgk1SdMEdE4E",
  "key19": "4yvGA8G9e55sKQYjJaRdYvyvkJYM3E4j8UdnSRy5d1xA6CBQK8s65n9ZPYZPtJcBevmRbKhRSV7CfW2F3hnDh5Ri",
  "key20": "KGZQvZzFcZ4fGQYmtw4Fgzr8cB8eEsdhYSvkndcp5kCeeSFbVVCtSzmJteijoRwAfZeXA2KDUXyBiD3NyL4U9S9",
  "key21": "3tRYZb9yTNgZR8TXBLanw3ncuNLGBuwKDuVagoyCAaNeGtCjzW5j1EhPRgM8RkbMwrp91tvQgBpAQymCgij2zMys",
  "key22": "4UNcpSCdTUAESwRWNLBhTgUeB6eWY5GmurNFSjZzQzm6qEGCyfbqdCs8FWZAv1sCtqHH6HTrSbRxxA1Pd7ju336u",
  "key23": "3fhDXS3ZYzB64yK18VmgqNFh4LaHdWUtBShDqJeQPiKEtC4UGjEuPthw1AZoErvsEVcNkuRsAqpuZrBcxvJAt9Gd",
  "key24": "3drEn4YxXin91Vrj94PxxV18dwMuz3RQRE9ovKHPUA4n5SwLzsN3mmcct2BQvfozwrx7C4DYUMhuFBtbrET6YzXe",
  "key25": "5wMBKTTRzmKwG4st5mpuMwucReFhuQ3HVkyYsg5UxpSCH8GeB3uRUWmfSDX9UZeuNemAtqzxbCabMxw19YtjFDH5",
  "key26": "GiBf8eEMinRYtBCx8njwczYbifhWPWEafDi8Zx7zbzjzS7K4vTMxvZ62HGoRNxDPgG52cD5x26J5mXokuZpDUKJ",
  "key27": "5VuTNzDQ7QfNC5WWnxo9vheNV3YbswFbHrKBCLuL9ELRZzkBjkCeXtChADyyHKZBjTf6EovLQTSLrL57qZfZ8hZr",
  "key28": "5L2bZ9M4Bh5vj9TeL4m9NqhE8ghixBrop3cAeywpHJfWpbKMsBG4tkQWKoqGG3qeU2vM2PPPx5UQZYod7EezU4jq",
  "key29": "5jEn4GUt11X7rqKU8cdtniCPSCKQfyXXEUzqBeyAYVpvF8fVWxx66w6yZPsfQKd6s3mqhJGJ4aTepftq3CeZR93"
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
