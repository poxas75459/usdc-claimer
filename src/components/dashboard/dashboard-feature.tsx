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
    "21xAFLpKLwJizToZuUAkwYzr6PCEATKbsTUGQu95JyQ98xuaxgfTbERkHM8tmyBfJjQFxiEKStgK3jqcSSLet37s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35SpZi2ePEuthvySZJ62HPtc8LodMmaraqmbUwmLmNtvm7kTE6SQmDfsZNNxjysWRfdCNLJg9aJ7Ya8JeA6dAa9w",
  "key1": "47nfmx8cUynLHrXDMJsZMtt3rXG8N2uNju2BCCe3jLNM7qJsYe2XcXJK53z4esw7UZAe4hw5bn35HZcWjsq6843R",
  "key2": "5QDseuhwt6B6MdhKxJiXvywy1XdbzGtgg6H8Yv1YA4b4PCAwXHAKhbmRy3bYZKxG58ZFPDU2uKrpvJGknt2ar6Vh",
  "key3": "4DHeD8AaecebtWwtykCm68HQtwq5LZdGoPHnE3oMbTa6MVNRwGXsaakcsU4SNpt38RbAR7KCpDSWfJLcXoJiLEZ",
  "key4": "a8mkqKewEoDCb8FfePxdFHTYWKKRGpD4c1Ci5jwjXv1sHa4kBfjitYxfQrDr637vXt9qi3LnABrK79kdZV5GkyZ",
  "key5": "3YDjm926naSgXT8pjRocxy8aKpRSNSYuZ6KxzHCB4tg7JHjNtLKr6zcL2zXQ6ztoGUf1ceHeioi7nHLjFoLKwPAN",
  "key6": "2kXQEsbUJ1Kxo5eYs21JpDfcsSmQ32SgyCuGCQzXBsB5yqs4NfTow9BJRTUfrsmWZg6inQ3vwFhXCbEadkX4oQEG",
  "key7": "2yRxWhTvdyZAvRRHHhqajUtX4AsrD4QmYhn73yUrhmNcBKHRdxe9FiogLbf6qz8ui8bTDqk9cE5hDcYs82FQc25K",
  "key8": "412nqJMQ7BVC8WS5sFEWVpKcgufE2wN6czoRZwbjRzNDzEeyZufCzkMvESzKS3GWNAWkRwRcpoDSKib1uTN883gX",
  "key9": "cosYsi4Sk7sEgzPo1iexvsD4BZAKiYDtyZTgYJe5B7JfYZXvJ3yKYRZ8kfq6rq7zKpNH3kXgHe9nqRNCyqJXnDe",
  "key10": "28yAqHDFvfgqv7WJxyWnftFtpfhW8f4pBceGTbCrDt9F9BmWSyJtfZ4JJe8V9jxsXV8nxtGNfqzNfT6sfU4Mexpg",
  "key11": "3j4Xtb4xy92a5z6XvcsXbkg76hSYCD536PLcEULZB8BZTywpbQ3joWLbcJ85aN5iUBTLM876QJWctzip6iYC594M",
  "key12": "2rSJarjUyukVKHXdzoPkWBTBKue8iLvhuN1SDG4MXtoyJEL6mPj4AqBUWkXqA8nn2bzizyoKo3cAimbV1WZeCmZ9",
  "key13": "45q9f5cmxEEwmtncarUJFccMXPmXocEo6vE8CgfKwZ3xgFdnnsYiEm1iQyhXhXWuiYt2pnVE5XcnvsqxiaDbJVnm",
  "key14": "2AB2mNwma7S5PfyAMv8HLPterGsfXQircQaiN2HZvUBQfFGEm7xyRYzqdLJH6pNuDbJWxv3ugcHYqfYEkM34wNmC",
  "key15": "ARL5khYQLLhBDyAVMiaxXqmkLiiGqKLQx2aw3aNEuEzXCr66AZASpqLy6S4vjMNBettNZp1aBUFeT9uwHryducM",
  "key16": "qGvY5TgKcjKcUMfvVpDgUZDenj75r9Hof72VkDAyk7kF5ui1nZojFUfsijmcaufSu93QNGJ3QP5UizuZ9SdLEn9",
  "key17": "2hFbNnyASGLqU2xwKZEFG16QXoFbci1FZfN3MHojQyAVeNsfAVSqjxB2RevCUf9f9hqezP2z5UPvoNrcJz3R8rEY",
  "key18": "dPcrKE2xDaEd9ng7NEkgsNAoJvd1B7tAEjbgWJBEZAc7hpXNzPVBDVq6nG1wDdXobsPGGenDVsKwS6D9NHxrxEm",
  "key19": "484ejwvAoxgS6prBHprkWQEPaauwgm2HFX7Q5k1NXnfajozBPPPW18LBDGe3fZ6jMpjWBWXsXtJPymJtgSPwmQy8",
  "key20": "4wF3AA1tRL67i9N8pzzPXCpkRAhFjdEoeibJKFGTiwmcFWDVWqxgfgKuZGmqVXWNAoKbiGJEM2Ep5cGcGXGojW1z",
  "key21": "qyPqpH7GKe2Mhyqmpd5otZ1E2Bt9GgSbhdyrGRDALZHCDEit3nz8jgnpsK1QdhAVgYmvepQ7w3wFDKS5R9Zc1jx",
  "key22": "mCuCEJrq82CJt92fUbM5GyriwhHJx1qQcUBTvEZcuGPCzGjmLL15oevzwaZpHi75XvPLtMmi3yEr3HNS3Cyke56",
  "key23": "5eDRTZ1M97stdWy9tfpcMeMAy4AJLHiS2b8U6gEvZzSjSXGYaUFGQxGFkrxSgqXqpfnvYSJbBuThFarRX8VPeeQ9",
  "key24": "2bN7B6pxsnNjKScBYDa5afersCuwsh27s4bqfdBhSqTNZk9NdSeyJ6eLyZeuetJcMzf8ugqQWhNqqnfaH9iP6e2o",
  "key25": "2kF9dfH5x4TRt6FaUUiYyW6q47WGrt5Ak9L1qrDiUtW1SgEj5bzTFHcbMbsMkbkHJeK8s3aaeJXz8pTrEMFub2H6",
  "key26": "4KTxzkv5esPA9zFcMkhL8GHhEU3q2C44dSrARUA5JwYx3HBVgpykK9z31nA5qsojbpkiyGQY3q3iySxnXXyA27fx",
  "key27": "3FLCDsUg84PU6oU3eJzfMNb6hSnPcqrNxMKGLviBWMmHppqs2DBh4HaBR2fpcTPJx846gmZBbNSQwTR5ecaMQZbo",
  "key28": "KEgCk35Du1WTisRXYBiquTJqH8FMoocS5dtDvCDFzw5VQhUv9rkKEmF8QXru5qZ7seNgnnabeHE93RrV3JbsieQ",
  "key29": "4LR6bJrdooBqLmhWgXkA98NvNGQFYYSs8tAXQFMU7GuPi7oG1P1TE5rc9ApxBUwjyWVcbYmHu6Mz6e8k8sJvvxG5",
  "key30": "2nuaWXMHR8VnyYZyEdkm5umfyf9wS8MqFHwwphNeDVDQf9WJpsiSCMQ3mYDtkdAtw48qZQs9Jxj3pDU46tA4BVyN",
  "key31": "27qywch1FukWeMtaMuWmKDgRLVoveTVDd84yKMpWkWiu59dVhtomkVEU3r37nr66CeQSWhPS5b3dyBaMn7Z9t1Bp",
  "key32": "4foHvLVYiSmK3EE6M8qHqNcpYfxWLp1BEqu5iRns6bSzza4fAkL1GdjeAxpuW7GDXEokrx7ZFSshXdWdn3woRHtd",
  "key33": "5psUxxy84jy6wSQFutSE7wv7SPuVYLKJaj3qffnXbjUU4zyGnCouJXttWopKxb9T1CPhJySzMGbhWyqN6BBTAoWN",
  "key34": "5Py2ijUj3V4zE5YKLpP41DKendJkdGconsrwGKBwUUN2urdcYPERYJM1DXVCJWSfaBExy8bqFMs1qzxbUMz4JFUM",
  "key35": "4JcntC8iksZwGhVKvVSLUoXDBbvcbx2esGKvty7LnoE5kS8aLdysicT5ncuvcJQsjxeL9798s2YbL85RqPKfdC7X",
  "key36": "2Wh3WGVTE3QpKAVtTwhQENnKG1rTRMgPQogsLePWR32ESQZHcqCbqtyeHR94zVuShUVmAL5NC1s9UuSEDsD5Vybu",
  "key37": "uRcwpFBdmnN4tG26Apw2w6HBm735Zvd1GwKz683kjkDMsP6aaEt6NgG3AoGfp3jFtbvwrZEeeqd2BXWQtfjP5gp",
  "key38": "31BvNcehMTvRVtt3nHC4PbjZCCVvMuC2wbPydsfmMckTwXMJ9GRHQpK777hTQcytyk8BbPxNJXoVvVqJfX6RPUKJ",
  "key39": "3iyvDjZPcSVxhVYvk4qLbgzaA1FH9ykmpTE8dWHVrr7gKnxTVvLFmdMk2BF8oJtKKciseLSes3yvrNY2Pf3Zrh11",
  "key40": "49LrZe4VV6dYCYs6m1fNwg71CMbSxFvyF8kwHwYAnCVt2cKpKp1DZnj9SnqRgxETWnNWTENwRPASKr9ce3VbHUiG",
  "key41": "2FAvEq3SV9jZAji4rmWSXnxYvPYuxMqDknCSnhUCF1VGC39A8ALS3PdkewEnysNnHiovLTkQXRSLXUU3npNiFkeC",
  "key42": "5GM2jtVFf262KQvwsKmFz5p421o3iQf3uhdb8gXQbZUmGbodE5hTYHYunx9BtcFMZrFUntuj4VzR5w8Ya297s6RH"
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
