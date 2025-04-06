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
    "47ArhL8a8te11J9JCrjuNtCsumPJkQo7LcAHmMbjGLKb8M8FH3ET57DzmHr1coeymfJztP5aioznwVRqs1UXAHkH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29TtKgfkfG7R9TTViHn2thMbz1jv9nMXY8V5ppVGr7Rn1gGuqg6a5fuXaHCJSSpqXWGHcKH1m34TQzMmHJmkeCRg",
  "key1": "4hBzqMGz7VrAPqbKPYXP8sMPg8YXWUeksGsmg4bm2CyCA1JaeetGWNsj2vFVq6wzWit2cAQg4eySqM2P47oLoRLQ",
  "key2": "5o5VHRGof8UNV1Mk82oFr7oMZeAiq16waHN89ud9Bd68fUwWuYDWZ6tCM4S3p2AuFGZPcrNt6p3H6bt9F5i3zq7t",
  "key3": "76mMPiSKzx5RgSE94Z8J4eZ7Jmqw2jtG3TJ5eCGo3fiL3iJndkcNL1FksnfF8itKcVYLcYJQAf8d8bHRdbx7Ktg",
  "key4": "38nnmHTT1U8jm3BvY73xsZmyYwy73kJbUTX2XjUeFVGTfw9pX1fbEVBiCFncRr8bqFTzqcgxTbuaD5MKLNJoMoNg",
  "key5": "5nMPu9fDpbhHBd1kD94qs9X1ZZgFfcVBg2UY2w9RaXyrY7JXSg1YfDMA9nxUEX4RaP6r9sB7P717qi3wnTyJavbq",
  "key6": "4MPgEVykUzrCVgDjw32CvNQJS1i4ygGkkBuP2gsVWQMvzXK6aZfK5JGhYAzgSvXn38czebgyuciuxgu2HHkMm2jS",
  "key7": "285Psf77bdMcFdADTv8Sg7wsqHEgFgFx1UTcvaCf9hPM9YvAECKL9YnXybmJKgtKVs98F48yecEd8rfdmrggvufm",
  "key8": "33avWvdRTxDeMfWFZinismNN2dBdR56mXVb9N9rMdk26zQ1yXw3A9XbwR8rknnsysy16QfkunyCH7SvPKRAX6f94",
  "key9": "4YivNzfkLSeBTswwd5u5yYGWPhMGZ8THGR5QMLv8g1g6XBern9JKv1yZGNDU8nWZo2gov9dyFpkEuz9mFv7hvya9",
  "key10": "qdobwZQcyUypvXiBW3F8aSUAgvrYyHWQPGM6ohVS91czqK2kc9nYALpjgNGznKtGWTd4dB7A41kMtfjG9j5vSfm",
  "key11": "5oZzbbGHvnrjnFyw1ScUmsxdkkfntcaD5oxZ4Z9qiUvQjuGnEqGxFp9i42CLHbLeMpGMMHMJSaQ8id1SRMv1hbA9",
  "key12": "2b59tn9eNtDV6RZ87Te5atj7c9cFjLD4U4JBnrFu2zPK1FXsMoZHzLRaUo6AirSJGXdjs4vHaRBtL7XqHYR9i8MC",
  "key13": "35h2DaPGKZttTRMAL1YTQgH56eViEJKA2kS8BXHQbGLwb68SCZzYF3vVMK7j1LsfqCCUXpH4udUvgXMmQCmLY4Mx",
  "key14": "67axxtVDAJtXhtwb8L4QoZ9e93Wc1YaNup5LjGSYF3pedJEux133jGw1eXur3bbQj3zJ7NJdibo82agDgGawTRGM",
  "key15": "51jXGvRbxh2Ap7uyQbEjkLmW8QZKXexjeBim4wbxaqc5fDdn3fFtvEn5uWnXjeM7sj74dKbyf4kTRqsVoBiGRN2M",
  "key16": "63ZzXu492z7N1nzrBVES6nDJjHCfPLHm4EMwespNPXe2VGhDNboL61aKwRZdnQCQRp72XhuMxsEUrXdZ172Kaj7B",
  "key17": "4RBm5qu68ANsLFzJ5NEUm89tpqsnGP1B1138S8dKjnocLt5J5F9Uyn5fyk3c9XDEEVeHWdJc2gjaa6cBEKRNZgzG",
  "key18": "35SnSN8KMgJf894ge9G5TNcWsgS3zuN6KsUBttgQim1hb8vSQ7jZDcUynCwpYJ8JQNWbZKUBLPLUN4K4SozuMCcg",
  "key19": "4gNdoB11sSimLAD4BkAntH7T5DRvcjAWFCXqGyahD5B7Cvqki1z2AGZpoqEJHgrrftG6DK7rsXPGMTSwugnBEaW5",
  "key20": "57UwueUrhRmh5qbA3XYAjzyMUUnkSkGpaU6GxVpDzWTegmtHeLLRB1Sr7JJ9NJJxaY9dt9E7Q44PBWxqWotEK1FL",
  "key21": "5kebBRc2EiL3wp8x1tYmd6Lra3WJYdZZfp7w4A1rRPC7iCiLsmBzRu9FPTrLio54hznajRDTpdiJNJQaasCaULH7",
  "key22": "3HWP92GU8TBiTuiE3f63w2d4yAh8YDS3T7cs9SJPEunU1uy5NcWxc655u3qSMQ6a7GcdpMMrPhASMPXPxxX3PgAn",
  "key23": "3V1kgKYwmLTuQrHpv6RxMHs1RfjBuq9Uhg5fF7x8tXPaKVuHX5psB28ur5vGWDVdN8Av8vQEPhokZQ1gE4ceVw3E",
  "key24": "4uSPX65TVpKuLj2Drk6bQiggn2MGdFiua59Fryuj8pkx2eff5QTQyaMXc6AmmCJ468mehJGwAAVpJompVyJiKCw8",
  "key25": "Wa83nHeG2kCyGQ3jD433fpasCpG892N4Umprnh3PbUA8oKK9b9cYogc1M9mLhDkpUG9zgizcLPMErT44ZEeZEXh",
  "key26": "3j8YTEdcFTrEFUxgU9U2gLAu6dUYek7MhQNQPGfo8AjZYV1yWzow5AVVaBQPZErmgifh5c4DRisgs7oqy1juoP7f",
  "key27": "5knN7dp5rr2dwUT4nfsLcXJeF2oQrt6n7UqHCXhAERndHZyLTVSXU384pou83PskVyhAmsP3WQE6Nmg3T4BvHQKR",
  "key28": "4ahjWs8TNbDCvYQCJGFWfEC4EUYYN8rVxrbRp7iceXXu4ndRmvqkyN86xTbkGiU4JqpnoverhM6xXSAdVQMxjvHE",
  "key29": "3n8xpGUUu8ZDah4xcfAeCbdXNgrYFotyC7uCfQovuQPB875TwBkpU3Ja27Vv9t7zpxsSqkAnGTBQRQyrjNrREx79",
  "key30": "4RA6u2kyovwV9oDiJGhmwuYwwFbai8Qcr6dSKfNmks7agHqeZ7dVxNz5VTEFa4SiikxDTaEzwqjuVqiJN5s9qYnS",
  "key31": "2q89mh2ZYFL6s43oBEQ57pXCcatp3k4wnSUikLMbe64Hzcc4VyMqB3Uf7y3AVPk1yq1mmaBM8k1hfu8kkKVf8r6s",
  "key32": "FedAZ74jmiwuYNx1d8ZwmA3vprtvWpD2WEV1ffDZKpVz7dfcWpwSjPko8nz5vVYCBpKKQBjyUQ64HXTpD7dZi6t",
  "key33": "2g3MNWMcbjriATs712NJjgFEvKjL4ZKvJhGQKjNmmmk2P3PgFfMRHaAYXR3WMrcyRhwZ5yzNnUNnnfuKCwQLKJMw",
  "key34": "4pPhgTyAdGkUhjwgmyS7ib3iCTm9xJFSkBgNivt1Re1Y1EdwiQtFS8ALw2NMP2GYbW5kGiuuJviTHx2fxvadrHyQ",
  "key35": "3SwByXeVArrLeGMT4YtkvvNTL5Lgvn8Brc7ZBb5c3CMv411qyKwBXfUxqnmvZ1XNexwfMAwspPijzqxGmMH3FVUJ",
  "key36": "3a6yzmCYTwQGiR3bmE42evWe3kMNEZVd9aXdLX6Q7u3ZjwyiCp4ht1rV3R5dfcnoTujjisDXGtJaMBYdAQFQix3d",
  "key37": "2E292bHkaxv4Le6tCHt3YuDtdComf7kj8GUkQidC8HKwv5WbBSvAakwwx8YGBk6ibXsNApHgQ3AsyosVUTRTRRJd",
  "key38": "4gNehLKe1kVMcDbVNScxNatm93WJY9uV8579MZEQES4BNt1B7oiSabCi16A97PeuauLCPZfXpXHkpJjgEqg4mGDP",
  "key39": "29EcdfxmjyNEBhM7dXQr2fmqsE4zKTSArSawuK9uv8MPmEGD1cUrWu71hEpEHy2WXbFUj7nRmEHckieAgRKHh8cL",
  "key40": "49ESDLYrDEtagCUjXFDa3anPnAjL6oSXo5SZz5m3ubvpwnD25GnDpy3Sv5YEvKjoL3AX7bugUmbJJ8nJqdKm1ewR",
  "key41": "2tAU9hPujdiUCWg2BdZHz7NFpw9BC3azbpHA4AKsgyDebGQEfD6fA2PejDgrjFAbAGwd1xxUJZJS2K4SgVHefLg",
  "key42": "5SQj9Ds7GuVUptbjH4nTGfUzyN3HGbF9qGC4zAbiSVTEfM5VxijBvQnsH7dhtQB3A5Mj9qoMFDRp6BKAESe1CtYE",
  "key43": "5QL28NdMbVoZzhMoMFeGhDgA1H4bpUZZdQ3a64XZG7tG1NooEYReJ8X5Soors65beUQtbHQEpPRKFSZ7Ui2yvagH",
  "key44": "4T47KavpuLvahgFFrvqkqM9DHyN1Jhbm1ib9fccu2RybzpASNgHm1fvFFJMrNBxnkDCifHkxnNGvUDZK74Lgjxfb"
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
