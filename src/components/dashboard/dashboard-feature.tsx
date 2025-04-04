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
    "48ZLnW22dLL2cHhG5qzYMLBaUKcNQcKy8LaaF6B74FPwpcvs6PgVZaZ4NQGwxQ8YW1tUzijYsNmLc7WTzhUmaQUY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yZXc2CUoezqjRAi4ZSBZ1pEZHPB7tw3wNFTcFz17tUaaV9q5tZ5H5eGs8L8RLE9L19TW48be62nbYSABjRHQaoC",
  "key1": "4v5aZz2tmfxdcWE8gLokWcBJnNzA2yC5VfQX63BDN1n2ps7GDt7v2k4YzCoee7v5zTQjMk7uZdkhThfuTSnWbuZm",
  "key2": "4neLqkyYDyB9G5PU1Q4UxMRwvWYWGs3DGWy7JniVGTVM6KFsGdqjg4t7KWUYhM9946jf4y5jMtemAW61GEAzCjNy",
  "key3": "5U6QBiLaVrJz6Q3QqGrSsqJtiChLehh4RbrUTCCeEkXXyTYQRSnqkeh1kDERmVZPQ6rsFbHcad3GzyW8KwAiQiNU",
  "key4": "oC2U8gcy67eLfavDLgwDwaU6QYp42WVDGJtLXyciPxuyMSGgRYmW4qEAbRStrTQu9Nij6scCGCJuNtDwEW3D9jm",
  "key5": "3cg5LeGP6Bjn3DKWNLr3JHwJHrQdURjmNAcFS9H1tUQ5R3rczywsVdU3UcfCL6owRt9PoCdgUvH7yLEBnGjkW4hE",
  "key6": "3qPWN6Ky9KLXRCU64ScoomxGsSawpSYZvgcQNa7cg7NjRG7D3MUV4kUwqiVbpi7yM5YEoYu3d96x3r7ZssB1Ksst",
  "key7": "jzJksPz5wzzXkGJVrTQAoqzUaN5jNRvwMYBFk8p3qZdkuPC79SKQp3sD6bJv93dJfcxjhQbGzjmcJ2V3DK3vJpb",
  "key8": "5XX6ojW6PLiGLW8N7ZNqsGMgnLEo747yuagswtSK4ERQQMFjGRHPH9Qjc5aK2LsMrAFWSCRtpNeXrrt2AAzyc9K8",
  "key9": "5rVm6bJYNerjMpB298Ch9CdQuSS8kAqZWrNkhnttBpq7Tf4p8ukrg3PirBWXaBm6reWr11gh5XGhE5pZ68p8qH7A",
  "key10": "5tJd1Wd4g2ViwQCyFozYy6EavV1DSktiyRZDoAWLXPfcbNFfjwnihUDvNy6hQcWeHeUeN6AjPJdAp8NqjradUNPC",
  "key11": "2UF4svRVC2vVi5utTh4tD5GqFA5nnaZNJTRb5VnToTx5qx4ChduyetATLZFCHoMM22vJKeQDj34g6y38JH5YkNx5",
  "key12": "2TNeZmsZ5LCyXcavkmEv6b85yPK2WKSsMvhuUByXx1AvxCsQ56ZjLRVkkXHcmKRi8PuvVcf7DADjcqpGmPgkrNGK",
  "key13": "3hEEFPWYP7vKAVfzCF6eXWp1dWULZ8Xbb8Ao3Ay1THDSZFcQfC34Lf1zHAbgAvpVutNX5m5Z5mWxbRaEaeLW8rbq",
  "key14": "4GMiyq5Qj43VC2X7Sw8zuz6XNWD9ZQ9fnNktrFgpDQ7PELYvete8s77nzj9DEM9xUCmmtXiCpSD5SLcs6GTJW59t",
  "key15": "ehDNpytWdUCy4N1BsJbGqSaoaGATGmuh1a6TRMzfVAHQ8LD1i7K9Dk7csuSWrdLVVe4Ug69Q9PqyvGK58G7b3Xt",
  "key16": "5BoueC4VWtgZjxAoCLXkTqKoM6bRzSkssAUYd4ZAM2kxxS4UTrtBhmJJUbY3peSv5nTdrigt6FTazW7SSF9LcTZA",
  "key17": "4KxDKdFR53vZxSALocSGSoPRjpVEBqPkUsbd1KdwVpeWtsRTX5tAkEQdU27tknTzPUwgrCpjsMecUXKoX1DNtLec",
  "key18": "nXq99Dpep3Zk8fBfZgDA6KHeAnRqTG2H615h5EivhaSD5ukJ8Y8KGPWLRoHVpxPY9PYar7caHBefuZh1jTXJRSN",
  "key19": "32mhscnihW79WddGDzEc3o3iuK45WAkDVoNH3Tq7vQMknHLY6o3AQbQfUxo6nKiiDgaJTGwEUPSZMbdvRS72oSsY",
  "key20": "64vKXyu1DrkDZSvpgL7Tb7XhLtY5XW2kgZVTtuU8pc6Lmi1bvRsX3Bqp9HRWisBZwca8ByVFKuQw8ugmqJAXbZWc",
  "key21": "UMDEAo52eG6LbgyhTTgXhq3FCooUuhb4XZVVeJGoC8zMYaRhkvgNhLr9zANkq99PPb5CnPNbZAZ6M65vioP94C9",
  "key22": "37zfGq7uRxjZsH4R3L7RxDHnG4QBRtmwHg5u4kgfvbiSNPjXwqvjPhWiZ9fWEZLZSKstr7owzHECdDsqEUmRnKjq",
  "key23": "3RmP2s3AW9MUP1xR1cSyyb7DabHrQ92T64Xq4abCyD7XcZzuVC3D7XUdmZjrQ9h69BkfFhuoYzwthpK5T5uywR8f",
  "key24": "3uNhcqhiZn6zbsPzyDqiSrYEhgLyRNWvoJhVf7pUr6pagzWtTzGhPdafaNJ3y1xsQn4iaGatuBMKJjLau2iYtmrW",
  "key25": "a62MTBGQZgGXt5hSEyLukMSNG5tZxoMn5oNfkThVCz61h47WBhfSFJ1hEtFaFwcqTim91iiDjFedCzEYfgU9xqK",
  "key26": "CKMkAd4F6hUh24nghisyxvH4ptM4jcw9r6aGF6CRLXgpRWDyGi2gZzcf5p5A6dz9kPvynLkV6qTLs84HyEEc8QC",
  "key27": "3VYbwxW9UhfLiGVza8HaK31nhGh8krYEq9aZHyhs4EM1fCC79Yapwn2eDmmx5aqb2Y1bDaZEStzrRcqYqYzdUoX9",
  "key28": "3dTF5kduPNEit9ovgibuBaF7Cht5nGpyMT2FS1mwTWTQ2VdNU1WwhiDejZh8maZMBEMfhCV4qxuv2rkN7yuMxUAf",
  "key29": "4QhmBaohJNpGCJvPPoqjJX5fEf9FAA7KBXme9s69s32aSza78uQ9xsYu9bteEGSajTLVRwg2ntqWpDUNbqc8ACJf",
  "key30": "zBJNdcSCsjNDmjeK84a8dUX7VVmasfh6JdFrDAxGsB4CBGj4zCqKhikCsA4UbKtSJ6wkiMAFH5bHZkq6T52gowb",
  "key31": "5KstWMZedVHwT5USgma9N6tg1AkhBLQBD61AtEhmEvcFKUHK3ZJB5GXv3JbMDAjZraTyQKsnxtmKM6JM9aEPDqye",
  "key32": "3oQ2nGoPM9572hJM8xuCZJFzKszossdd7cEzSjgkhvh8ho4pT42zDyDt63cTL5f2k98FFi8VwDsRniUVxmuxFwJR",
  "key33": "59oMChB5tRmE8apgePZE81Rbb526pjdqerUA9BYf7WMgy5GHDKf2gUeAwuzXTMfn6VXS2k8bDajcoWU4GE5Rjr6c",
  "key34": "5gAeAMbsez75LL8cR98qD3g8sK1HmwVh9XYQr38bAFZUqpPGrWUmhmdAPPp4DSqH3qL279BsVpawuHwVEH1EYrze"
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
