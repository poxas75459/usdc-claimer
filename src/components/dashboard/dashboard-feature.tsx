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
    "5dcAmCwLcd1HDr1VywBhKEVWhcYwo9RPXGXjBeeKXNNfMmQKnu59bpNtFQJGa4YKgVxkcbcNsTA5nRzhJGFHtQ92"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wTSxuDSPFehrr5yvXJt62MM6kc5VGKs2tvVqVkwuW1WPFBTiX7XCzxrTMY15bsVNvagh4sbn9h8wCQbFzoceZ4w",
  "key1": "24Bp2WMALZKt3MC9uypprSnaEJE3VH7rvCnox16eg4MXcW7mPWdLrmWuXwxMPpifcLPmjSDU69KFG3wYqCvurcXW",
  "key2": "boY3Wcoiwy6oFNUKsqRket6Q2GNVX18UdBuV8Qfo58J5BURBamgLnXdyS5qZT7Zt16sLDTrHktYtojsni5HeXyi",
  "key3": "4xqs3fnSAUKnWEK2sqn6CkGWchs4eHpSqp9BtATFKsTciyFG6kuUpUGaroDmZbFksuUMeR7XHnCDYNtTDnhkJDmA",
  "key4": "mieYTLbaeJuRyViMrLBTufvFq8nUAgEbpmHJZBtASLHH1S8mMvcdB8KQ4hZ3L9YVauPArjj24mU8JGeavakQEKU",
  "key5": "62bWBhJKCTU4rSaqFey5W8DvpgRdRQ5uJ84FFJ4PNMdJYTmqEmGSUGTWCoN8Q4d5YT4BUwUdEiSCAraxZXS8q87z",
  "key6": "3WsrpuwmYFCerxq4B7m7W5o3d1NpSH8mXcEr7rreyAufBCGHwxzF7RChtsmLfwX4F1FPCeVdSaDBFLzs4BNeusUw",
  "key7": "oXfM1pvTXmASkd4UXQVifXZxMqCgmmVRzcDnnsMpK7yr3fZiAZecW6PcBiQ1YVtyXwVEJU5XAZ6ME1JFabTSXyL",
  "key8": "35BbaH6VKJQGaXocrzozfH6CE9dFLmHcCa3sMGMf6SZLuiwwU9hqF6L1sZ7pV7TJyY84u9dbEorp4yQDyNGwQvL9",
  "key9": "2jpZoELaN9JJMLp8J5sFHveCahsjk1uMa7VuJ8hAvhREJoeFqsg9fDfPS1YioUYFhKLNGnvSmHRraruK6UFQeLAG",
  "key10": "3cBe7taWhu3aHZ1vTqErZv7c7Z2sVj2wCsyQCGF4KJxuxwkHhwqerhkmt87dwZVyJnKngmJeUgswbutHGnWQmxG5",
  "key11": "4DJDGENKnZJWriQW6VEmhXytNpPgqRL5RDCd3G7PQJTHk6G7iEpwXat4cP3oBDAh9t7nZ3zYsqa3bLrGrSTCC4Vp",
  "key12": "zerNTVqruebpkkS7Hxv8SsW9rGRf83P7Nu8Fcx7Qj9FMRgMtCEzQJWdRcWXXKgNeyMAkhEuy1B2LnQsQnzYXBXM",
  "key13": "5eMsbFnKL6TTkgFg1RidkeMqLCehBPbyVhARpnNjV37c5dBeHzxL4wqsa6J7wcESbpXPmcqo9cSxau6pzveHChgG",
  "key14": "BXh2iFdWHrHuJmjYGpmVTxBrzLJWDMonLfrSdtiTy248uU1TddMyJ9BwkTQwgQJGGcev9q8MfUHqfp587juJ58J",
  "key15": "zKwqGS4BUsSNMsxN1pcNfsWJeyzUsXPvJvMFvxinWj9MdCMV5R6jjj3JDd7vm7jTCnckoHHCdY79a13UUuzSFf5",
  "key16": "cnqVSkrnftNCyoKotW48DshcitBKZWkom2v9hdeZt2J3VA9UazCj6Kr8rkst7BQ92P4cK52s4pdx7hQXgEVGhUv",
  "key17": "3wqyMs4K2yRCAyRqnLQPAbuZuNz1ZxsWRZWAkrXbNQ916CQgWdGXFpQsucruxid7uGbUJN5kKDVE441zAj57HbYX",
  "key18": "4Ro5MgE6LVhUa44g8mDmUnrnNe7reSMwWVLiNs1dzTJQZPK6KnchJc3ScSDvFnzCwLBizCrR5vzohoHgt6ecdCV1",
  "key19": "2G2pdR9dpvczkXf96F3nnTTAJpAMT7b2gEZCHvjmePf6nUGkB8bfKVcGQcHr8XdC4pi3Y5wANme9o9tnmQJCELdZ",
  "key20": "baS6sTqMgHYKyM5PXy7WniFvMqWaxfxb6soLyDeJuTDtpchfUJhtxECy9rskDyYc7adzZowLLKnmc56FPkWamkg",
  "key21": "wLjfXH8F1EKNfTYf3VdcBFpxVfoySDHPwVmuh1VwdfoLe9C2G2o3XoLRAoEUn2L6eNn5jxu9Z1prRZve1HBTGLR",
  "key22": "4iwkaC7mspejHqQJiz8rJMWYev4xTpmgHVSrTTEK1Loj4xqMjDWXytuYHS3omba9Ly67DQrwCr7f6BzwyeFiuCqs",
  "key23": "3aeBWJPPjvYWKKjQkfXgVhgKRsdWJMQSzBZiSeQE2c5ZiLCHGaY74X71KMNUfBfeDy9qtDASQTFrg9YbRL4aeaGk",
  "key24": "5RsDVk6jD6B5jgqxRCD4Yc5YizjPu8vikyWXALYAefpyJrkTCMxDrDBCxvjpaJY4XFEFTTTskJq9Hg9fsicG6h5K",
  "key25": "8x5q3LWoMvT7xb8nJA7tRpamYVHvJ7e47r5UASTodvyZ52ApKzXTnB85cfyzgdxWKkLuDsyF2TXCAbcyuDkfLGB",
  "key26": "3ZDoLDJP3YGkc8C3vSUkrVSu4xRDRPpxesRwVZU6BwNDSZpaWXhU4peP1fEdHaNQgoJbmsM5Ei2aanjpsC4MZ7gr",
  "key27": "2W9cG4mNFzFvNe7EwzCSnBULuh3oPoDJ63uMggyTbSGJAAWDGyCmCfNEJhYbXCCDH9Jb8HX9zJXNDeGDaodRtpzb",
  "key28": "2r4VMoxcAFqbhZbK4WLcspaEi6KXB1ywg9AaT2LZT6CpDiRKDzVGXyVC7eMYupdK4eVKEz3M6Xfye4wQbmr9rgcU",
  "key29": "2ccRF5LZ1n95NLJQjVD6oSXkW4L2udxqHwDXXKFevf3Zx1z9cAL4gjwcb2vqhufrWkJ7ZeT4z2ehT2VuTTerfk3K",
  "key30": "uJd3yh8mEjjPDXvKx8PB4m5pFgKPueXm4HmN8F97oSjnFf12m2Nba5AVCwXvPtGoQ9o6gu3CL3G6C9zAoFWwh4a"
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
