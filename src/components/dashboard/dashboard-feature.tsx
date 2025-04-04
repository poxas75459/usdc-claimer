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
    "3yed3XNA9XECY9d5rYjNy97SGvDxcaS7LHD1W4Dxsm6UQp9cJ8hz1hy7PktSCP6hovHtD8ybj7N9QwAGGpL6CeLB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A8cKFTYJEFnTUf3kgrfWnHH72cct2jy1tEnogAWLAbG3z316kGazNW4frYv9YrWm5rxPPB62ynf1XrPebkMzYse",
  "key1": "2R21wMP8nvH5J9KB9PjLxFFuarCre2MxD3BLS197Qaa4wRQLenpF7V6mpJjbL1KARkFNYuuH8fY1Vwu8s7EmE38Q",
  "key2": "y8UKBpoNAHUXY5GVRjXYcrVME3o3fCBmPhhc5oSPpTuE195gWck91hFChMMqjXq2zsfei3utV7KEfucgSwJG6dP",
  "key3": "5kCtwae4KUHCzb1eRrLqCY9Jtdi7tAVw6Cwvx9feuDU9ZGS7jDPWDPxnPrxMcANwWZxDofcvHr1Yv4AoTWQbgvfR",
  "key4": "26fMj6fMGzdzMYup5E8wKfUZg59P8TQ3eYGviubdnJgXQ6yNNXE7rWFR6HB1RKj2hBWNJnHGRW5buM128ybZXU2w",
  "key5": "4QP2ebkLkJr8wnJ8Rxaid46dMoq7fNviutdKfwKbdGens9QGGmrHwDKMVuAYP7G1arZ8NA77ANMHMMws3NX6H1Qz",
  "key6": "4MawuNLYDMrhyNnwsS2kcvRjjbH4Uk4i867FrbuQ6YUUZVvyTTbr7SZuDpM8AAJ1mFxgeJS4VDoBrekfMd6ARLK",
  "key7": "5N6aB6WUqdM2MRCNugWk5vnbhuiW2z7xPpY6HG2oxeq66oQcqgMVDRnwmQZok2hxopJtq3GebXkUCnUaRbqaFESz",
  "key8": "Zj2inUTc41vFnTRmditU5e8inbsewfMmCS2i6TE3K6grFCYBCbYxLpVQms84oXVhc4xuxYqeV7utYRUBoWPkzxW",
  "key9": "3qs5oKgHKt7c6NgSftquDc3CjKorcmAddFiFYdsDjo9ctDgfr578pizeZAGd9oMMhJ56iYiZbPhfMUDXZ8t2D4Vd",
  "key10": "5gtqLfSqgxvDtbVvzQoCyE6mshWfWzXhHKrXYyhDs2ubEkbX9THASHenWxYt34qKtygbPTqhNchT3jD9cqLVe5n8",
  "key11": "5pTVYWZAGwFB261JQoRgPa7Rzz76D8VVVX9sULRKGyFYa2NmR8KdjtecngwGVsyYkWicrdVsjLUhEzmeAoyMGayu",
  "key12": "4WkkVexUvR3bXopsgWwi7d5bhfJqBP238Rmf3jbvWv7zpegwSK3vrMH9VB3QqdKB61KfmYhSvTvcohp3bdebHjFs",
  "key13": "4YCkqVA34kTTk8U4zjJxp1ZwVQRsFwiXF351D2wBcKasakWWuy3L93akHjnupX9m6MmRnMusEdJcuQDrvWUHvizf",
  "key14": "29TjxtSz3PiFw4Q3ov8UMNzrbwhQq7YLm7yasPbXXCAXTtZyQkiRCEQaNkX46Z2V9qdvyGdfMXBMxaAER2QeGD2h",
  "key15": "3XKj1y33c7oTUY1tAPQydF3VcEcSc7vpWGwzy9mFYUzZ1fhRpYuh16t8PVstSGWduP4KjmU25CvBv7Yv25HZ7Sxd",
  "key16": "4PyYi8zDdAeYTHGCFXJivjzwyYt3UNxpMp8xdMEpWF7VuAkAAjZHG95xYNPSkFWJaPPs2LU4uW34Zpsqgy9RJgbv",
  "key17": "2NVSjifiNQGEd4LiMP4Kf4mmfGH6ep7fj1y17bEcBMrE1KGu8MA9fJFitGYrxZtqufWmLwuJoJNYBQ6WrnU33cZe",
  "key18": "31q2UR7JGTUzEZnSSNVPuzP6AN4rRi5jAUVGV9tFMESJwSGSHSU4E6g5NuHRCDWNbD3Dx7gLCCC1VjbnGSHHZAat",
  "key19": "C1SPxU5ffdhjJnzxqVtLYD9B8zvEdcJEp1wzcaJ1rYHLDZbEsiMjnSdSxUDBHxLFDeoHsGNt2ZAmfFaxkceDtRL",
  "key20": "3gzwAaLsWdmNmsKimdSh9GhXnVa46hR2PCjNqVRQd2L3N52V749EpCka8mgJBtv47vhxYoQmTuqfunWh5UdxcUUU",
  "key21": "5p8P2DfPB14cXuU8v3vxyLxTjr3qRvcAt8Jc49J6ZcmSTeDsbHtaA3vbeKbiRxiGh7HT9yEMBNdbKnwR7ZZ12n4c",
  "key22": "4oSkAc2imr3VQhDX6d5RKd4ga6zLXrMKKUX3Pvo9Lwir2HqNVatw3Wn6nyDfK4nYEULmUL23CPRQRT2V6P59DjDQ",
  "key23": "2TXaDYXe1JHDt1hzBbsJsQXfuye96QSfkDMr3RvCZkPj8G2eqMfQ7iPo1pUVJEyCz7EAS3C4wedqMhrgKi2uKVZB",
  "key24": "59qdkfer4ujixLiFNgAPm1B9WVERYemJ4FCt5ChxMmCoNg5xktHVEYRLxvPnovmn1WUxjtefCgqB3yK37zk1LJL8",
  "key25": "2bCAJWrn1Y8yKYkHQxzZp4nBdKtV13HwX7cTB8nVvF2SNoc5WRmE6DitZCKifR3ZaV5iAyoY3XckmnYEftbrzcUU",
  "key26": "5MqjSKpZZnZTQ5PVdrnu4gJPzpkEXkC1R8ZACPYtmmPa6gqT6fudH4r55EH6NH7WCoV8ahTrmvP74vPx76ALSWSU",
  "key27": "294vv4TSuhX3gWs6GKzEvri2BtTVw2Vbbz3XCHr1Bh31rxpyCE4BbjHKC5Att2YRgXrFAJVE7ctgqmYfnjmeKcp6",
  "key28": "4FQtjLcdb7MDjDX23rYvpXTSZX7zY6jHA9R5E6JPXLoHiSXLxprzMv8QdjmGAuSUkFAdWja7nQxtPRdxUD2Ugtho",
  "key29": "4UxrAzXAmxjAC8ZQSa7DRn2jMa58mBwKaNC1JcvyQps2qU43UcRmWDy8dY6yUnHScCLTmF96ME2NDV4GKGXjNBi4",
  "key30": "C1cLt4238KeZr6QHoCxLX9iJ32GD9K5q6ZQwPkfLQ7dCdBNAMppPi3CVyj91tfZ5TMG4AQWU6z8C8NWGHiEoe32",
  "key31": "3peZJwbpBixwLFnksVqMBhe9bk7AULMKKg4r8L38JnSLzBjYk6tUgGbmL1mVrZPDKqQz8PrxM341TERue6WvFH1Y",
  "key32": "pS4hapXGssTDxzNay29VC9JYjmUKJqamJsxnzbqDpB2ZxcwAJKMXkughDAAjP72FspxFD1UaMr2QJ6MFcEyBVzx",
  "key33": "3Er8LTp79LhjngR38yHt6i9af9VizcEjfFAYSz4bLRWBQVucTuh6NTupuxKFSCj29UVShhj5B7YMTcLmbidmC4U"
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
