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
    "3VB57ieXp1YtXDfzxxwf1hwSzJFBmrCDAg9rDMgt4pykF6PeMt5qXBai7NGGu9YKxNPbtjVEyZfStoWpu6QYUUdM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PgyU9tJHaF27udvwaKWTdS1P1Yt5cwMSH4HsXht9ThWh1Uwm6SEBxeLDchbJToWCLQapG6bZW7Rh9YxUNyPTr2P",
  "key1": "588TW5Ypk4s997SPNJiEhFisAciUFq3UW8nDDbUS4djx6tf6ByLMWDArmpUB1GLcGrCsVUQnb2WpRMLbMnqWmaGz",
  "key2": "4Y7svaHNFAiNeTDFzWJxgS1viuuQG88G9Y86kW1rm8kBXDbHC8VNsk64fNZ6xPNjttQhbXjydk8u1Uri6owyX8kG",
  "key3": "296FBUbQBw5ARo8Ldo6n7dBqLaFFhVxvyD1EnoCc14Z5P6LA8h8C6uduJALdz4WicpNtHQw6dKcGgVXzXoiP23At",
  "key4": "2cZXnuNRU16oBRnAL3d8jPfR5GcDf8W99DiboNM1ChLuBm1wPxETFpUGgei5ih13P4A2JpQ1Tyu6CaYhdwukqxap",
  "key5": "4cY7YEEMfxmC9mSWUyfPer34WVu3CU9PKYZW3XSnhrY8ti4ZA2UKJhB3JPQ198pSJ7Mh4pg6MyLsudysbVinYgct",
  "key6": "6CjUS4rd1uzsuc1Pj42s313pKeSZdatCPuitc17bybMCF9yc4o8gmyt8C7iYvWCDcSJAWgs9hffHpAEgNP5sWQj",
  "key7": "5uPeAezULB4usaTCtVJ1djwQqafJQw5hNnSxBxx9k9b8jRtUQq91nNSNQB8QFLxFRhydPTfDbHz4Ymn1yhAajJhM",
  "key8": "4ZM2imfC3MBLCRvVTZQKi6MNZEsRotCXGcwa7U2egBYfNPBgo1gKB1R9B8oW1wu2bjHMfbdxfpFtmV2YGEUGHRPE",
  "key9": "3Kvp4f4hruMYM6nMd6koPFH2j8TQxdenk9MwremuBkjNXMFjAVFG93W21pPF3Fm4rAZyugZuQeQEBQgDiH2oFrf",
  "key10": "2f7RgmeLq6kA2YXq8WMhWvMhUzpw8mUPHgPpBqFnycjvwBBPa3Dcrn6gwaPzRTcbWE6HWws1HJpb47Ntj3UHt2LX",
  "key11": "56rLccvKvPk3bZCiFVhtAyY2XeNsWaCFKkhk5JuMon9taud8rfTS6sikTJm5xda7hbcHog2gU1tz5j235b2eTUXz",
  "key12": "51qmDVfAhm7yLPunSFer3JBzoHpdNir4EXZ2RTDmUCY6CxEbS3wjXp4pHGJzJraHJYAGsVLghLXm81s14juyqYGd",
  "key13": "5HWE96GLZehNJWkAFBG7cDJ4JavctegQjNfEXF8cFhBGqzuSkaSZQPYN2ipx1xHSXNsjc2fDjeLHFiCSyAvnyAv3",
  "key14": "4BN5er63ukWWZqHms8iBV4cg8bbUykXHnhA7m5UdPRydTDcjbrUtvxBAFBKt9owb21oxtkH4BwJqFxos2GTN9jcM",
  "key15": "4SHo1Sjg71UAJ8xADiWYjuGoNCDjapkpM3vADpgKBB3m4634sJxFzMj66xNb3THadXQs8gmqgtguSBf1eazB6ZbH",
  "key16": "3HYS9fGLJtyA1dqVv3iZ8J8KV6eQ6j2zJvFAaGWmaQrrBSeMqQassMRs8bT6UqTm5sWBmt5otAaZx2RWncXBtAtJ",
  "key17": "4P1UPnbJXKcy4uH4FdSbZ9SB8zkjSxorr26dioFkvAu9Qd8dcstgpSb9mPSwCpidpB96BQz9E5AzfDU4DjVdDScR",
  "key18": "4f9nPrDdDTRTCnD9E1pRY5A241PW9MuTnujbYE9jWYRDwMyRKfsmRquJZVpHHPcGyFiM8pYyRFW6H4YXsfXKkHHe",
  "key19": "5XgCd1xjDCpEpZguXqRwp6KVH5dFXXtUnHDCsckyw1oEr8tzMbNqCxWdooKFKDzSCeU5H2JQYKkEziKJ6e7VEHbr",
  "key20": "5w9kaHP46sJaJKLXUCx7YzrGWj8WBmqcfhMYhbn4eF3nezvQKT7HTMEP6dPS6RczSdiZPCiGXFb8PPWXgF7x76dF",
  "key21": "4sEfFknvSDcgVCJ8LGqejX2fJPBm91R6dBt9JRKSaavRan34SSiFhFCi5RrqjFmEadpo6Ms21kUWz94ZgYz4McyL",
  "key22": "2xCXUTkJdbhg4CWZwiTRpYHcGsvJgYAMCvxcsAdF9VBFw2QMYsakQZMeZdenMhyrRqCGj7itiY9ZYP69HL74SbHr",
  "key23": "5Qo4s4o4nDG7sKb5S4rtqMV9wJDKrpYnP81YJFVfrKBe1WGNVyHqoywiQvS6ecx7smsyCjGNKnBnUvuASkyKSnhi",
  "key24": "2W53Pvh9w2qJdoQDztK9o4gwNChr6BExpRzvG9DgFReAPeBQy4fBWnop5TWRtV1ayPyiwBRAroMaLCwWJ7mWeHm7",
  "key25": "4D2P488GevkUfA3afYeGXmFxypZQ1WonNajNKzRkEz39A471GUp66dxu4Hu33vTp7j9SDviaNRytNpNGRfffJA3r",
  "key26": "5a5BJLrpUGMm1Dt1jpVVZP1FWU8L53qJsafLFfib4FgrZ3dQTwon9ytkJBxwL3qNULvayH2tVRanmRYDZo35Bde6",
  "key27": "5JfWBbXjtyKN3nQPDgD6UP8sUTBiuYjhrzW7qzEJxnY3rFTw2bVQFaZU8TVdLP9cdxYue7VUFp2dW9j19AwcV1NS",
  "key28": "36mqpop9V8Ezx57389Ch5xMcmFEta6Fv811hawrqZftVDDp2Z7R4wYVf7cMsS6FDp82pAcxvgYGoNij4TmREGFsr",
  "key29": "5b7pgwM3FUfJhbDGoHw8BY3a27b3eymYYv9Dckg5Vr1JXepgaV3aCiDzsD7p2CibQmBzeW6ZtcXnk3yvjG3wydFA",
  "key30": "Mr6apN9M1EK561YNuuucpC1nsqvjbjYcGrpFGvSoGpJHNgehaErenuvuVupmzD5rQokA22nzjA83YXHoNt6Dsv5",
  "key31": "62jh1MXnEwC5iMANKqtDjUza4FCFHZ1VKjBFUjVkJVPZ5Q4y6cwtVJwGW2JhuPS1Yg5c5gCyfV1iGVnRmmTfdPng",
  "key32": "49xNpTiG2QrHr4NcCecJw38CDnTbtyh9oGMFeNdtJXhUg5GxKX6rJAik7tcB1quL3MNEeGvTmtzdgwr2fCJfMzPy",
  "key33": "qWEKqxh3soGJjfnw73dWhbxNk6duQ1GvmfSPv77QJaLSXUv11ubEneZQ9dEvf2RDNtTDjHp7CQxKmyiyrtwzW2e"
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
