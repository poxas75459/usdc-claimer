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
    "3i7m5XbbUkaRweKfsf51KJcYsDxE9sekAZxHdAzuCEkhytZDDZA9GB7SjZkUYcx2BtgdbEDGiTEckRve3iBZKWZB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3toBdPyBn2FWTc7rzo61CawnPoytwHpfHJsEm7jXE8aYUPThy4LF6bFDuybTJe8VdbrKZfudoxEuMGdKSLbaoD8h",
  "key1": "3TKTufWAJm6YieiYJRC3Z3HPdTCJUdX3hQ96jPGEdvrEJR2kPWTH9QjxcGREC4xixypi1aFhSgSFX6foj64WNm13",
  "key2": "3BJpdqBgGMbkmtNqLh2ffQkVHzuPvT4SsKd49yYSsMZLbjnpyH7nypmYBt11WhZR8sKrjxAPoxkRFrSShuByvqF9",
  "key3": "3QcL3ZarCct8pz1zPeFfAqueGP42LKZnHNDeV58vZCUuP1bP9a2ggzAsAeRgFoXAPBBesxbfxubj7K8B81iZdjXY",
  "key4": "hGRnW2LghAcH22uPn9wUJxRHsTohjkX4LokyNA8Taa6dYhrPuZAnSgWNZr7WQJpCVVFn66rnEkRK3pToJiVaYXY",
  "key5": "29wMA4W3kxrtjJBhGxA4JJ6cPTs4MSF6DRmsQh7zWP6ozxuZf4xC4maFQLZvJu3HuTJWuibm7rjpCUrMQ3SPURto",
  "key6": "5s1HXZjeefQ9Gdyh41oqUijfPzWRZKppXPbW8XPdXCKpLXFSCS1P3myjXXMfMdzrj1Qv9dvJNQwQwfH8CJuNHqB",
  "key7": "zPK88Sas4Pku3fykTg2D3pbW1cvMJ5zducJc7F51BacGvUAH2xJA86H2vGd4sq1ydEXpzjvYW6zVsPsQ8CzxagH",
  "key8": "43noJGt6Zh1ybJ71716a2hWoY9PoFMytBdgJh84bNPmpCq4ehpw8NQPL5TAxcdXdkzNrPrtvc29TWjAseAGLRH3w",
  "key9": "SGEVe6Qthb5Wd1HLi5mWwKoKsgFMW1i93hFPBHK5LSGSVyFckjJufk13x6J8CWVixsV77iN6QxEHdd8g1W9sQxc",
  "key10": "2hGkczzFJA8SQcALmR4QAMJ16zEKTTs7Kbqk5ndVC8X16zxJntK8pcG8t1Pt2eimkbJ2cwQbk6dTkWxppDLgQD17",
  "key11": "3LopUt7GWpWTEZmGkJiQUoQtZnN1Spjw6YsXyabwgnNQxMcVJshW5E2Z7qjViYgzmEsA1xYcuB2r9bGKuz2MuAHa",
  "key12": "21Hiqg7sfpQ4eHu6X5jRkHeLYEt9Bi2K1n6dNMsuSGXb3pfVKrb8zxEy4Csavu8gJPVYjj9mxoH3qNRJYRFz5nms",
  "key13": "34hJWBdgQBEwx8eq8dyDvqXuJjB3Q3NEx366kzrfL9U8y8B2VExUoKNxozBXzsbRxC8JNd9QpbhU3QToY85ZrqnG",
  "key14": "2EBsM2PyskMqpTtAmfNReJdtjhdTujUiM9vhZEARw3hFFLzFGRS5HPTe2wngsWk8czcWomfWPUUd7ysRAy7QcFug",
  "key15": "2rutjgR6Ws8NQEHGmEtGqPHU8Dim9ZPinSwz2fF5bELp9bz2TFjxWwppzZPh6m9EtXkj6cHQE7ZysHhTVLXsDgsx",
  "key16": "5D7qTfqAyF7R8ogggjxMN2ddHJT15LpYZWc821FEVQU4hVRVUsGH9wG3rZqaRgdLDZNa3BEuNr7rJVdiqsGTC15q",
  "key17": "3jQmKBa7hnuG5Ayf895YEf7dx5r6ychqEtdPrCiEBJvJUZvCfFYQhqZJnpW2my8UaWRfRsRjr3DDgMeRNAfyLqpU",
  "key18": "5cwyG2eN6X7JQ16tZr6myrq5WaBicbdr7pRCz4dbS1eiZapamz8xeU1DcbmVrFm6s7oFLVYEPWiG2PXgNzFBKvv3",
  "key19": "3xjhaUMEx97C9J669UW38sYbSgePPU8bB5kqhRVAQzTKkX4cnsr7FRpkcq18afq4NxXwumY7v1JkNsYQBhyeuiEY",
  "key20": "2zgkjCeQnRnXexiwVKPwVWdLCaiBk4q6GHVKE7QrdMaraVc2BpMFZBCn7cEAmYzLqXBhC85jb3jzAqLSA3pMLZkq",
  "key21": "9nhoTjgujqVHvxXsUZw4Euy3Ceia1fm4MSTg2aXoiWi4LW13UQugkGUHVYCZdRzYgRX7Q1K656QS1kRphXMWLer",
  "key22": "2rTeUfKwQ7WR67zf1xArrNDozqf1F2SumMTHrCmsHSHTv8dxuthLnnPJaSNGCeojZJDe84HCPp6tEHZzX8PfKfEC",
  "key23": "4YHK3KikbACVNubJNrPeMa5fGRactupS1S8vmgsMdvhReG2SDntEWp4Yb8YYQoYJMHUaUTHr417DcmGWdDuZkrUD",
  "key24": "21MvgKYnF3GwMH6NyaJY3kUfti8Coy4usMDjvT932ZKktahdgHqGky82q58iv3i5Nd9oZLp5CuG4ZbzMMKV4HJAh",
  "key25": "WMXNKksUhdyJv2yHNN83VExRg1azWqoaoRn8fe39RkZf8pwDPxccH6pjJ3FWWZAtFx7GVpik8GXEc4mxeaMBAPn",
  "key26": "3qvrAecPr1D2fJmpsWzUeivAptB8ASaR99Sp5T6kYgzyiGdcyuwjg5QveN2E8w7Ub9DymdSyu2nrBmo2VENWJ6YJ",
  "key27": "5Xr43jQx2hRCdWXd5CRnRbCudaBKPMCgftNKAqJvt9oUzLa65nhSKpBxRiKcHYw3udMHVqY5goc8HYhMmyzxAWSx",
  "key28": "4DAfZq251tVy2CNcnrVfrdSD5CTzAUfv4H9mbKUTBCaHSarksfLpVTn4M4Yg222UfkXdZpfCqPYXxDnjS99LjrAx"
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
