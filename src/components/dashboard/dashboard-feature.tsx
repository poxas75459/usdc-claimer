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
    "spaGxNZuTFUU7tBpYbh1bWqYr3nNRoeEmmjD2tr4hNN7yTQCyct4mViJ8D7ZHwiNP5btejeE4P1ENkAko9ZWeLG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NGnrEezPCafRej2RpQhZDNX8ozR4rYGr7jnwxkCuEetjBiZsAueVBEbFmynGHxq85zRmDZjK4MKnBHibHWFfFsW",
  "key1": "2u8NCMn726x1A8tNc2VXTh7bxKc2HKB41j8tpdShW5yeZyumcBPVtqt4qScg8YDxtgK4cYWcDLyrVqWoN6V1bxzU",
  "key2": "44d1cavwhsiihye3UqXYQmJ231JhU3y6EHERDdj4Wm84d54qshiMDFNLcSQAx3wvrkfrq4rYSk1geTXkhZxuMEVg",
  "key3": "64oZz1VMtyg2ZxtnkXj1n8uJhH9UYCT1uuKgvJT2s9vhX37xTQSSWMoZhG73KkQGXRw9tXRMUirt3qaYUwbPu18a",
  "key4": "prDTLrZ9LgeFqyuNmaD3JxHrQN1a244ERzHuWTNaSeEqYXK4L2zd1P2J1xaHGmUECQh6oxgnqj9bMmwrEgUt4Qd",
  "key5": "5JadZxxr6V4CLTzSrhYfQBisTMsaGnHvhefhExPHn9HK9C7pzH3ThxuCD4wK5CNBB7KoZ3CoAAfvhSod1r9i6Eeo",
  "key6": "4JhpgpY6BCaEJ59HMtCdQ64Z7yPrdmshBu1EPUasrNFXwFNVoceyvS4WuT8SDCbrXjJtmD4Ud8UwrWsBSq7Rg8Hb",
  "key7": "4w13tCgTcXeyDhTisTS9r1sRYhsMTQJQJFdirZsrDzDi8ry8VoJ1fJmDK2JLXAU3uFhmUpLFABRXTfsC7fggEYe1",
  "key8": "4ELXbfttto5xRfKPhupMDEZtksxeKekfapKLeuTRiuzq8KTdnjKZdVfaLAiyPWSGJhR3ZwTLn9jLVsdX33qW3mJv",
  "key9": "13eNct1oMHMQh35FGEvVEy4bgxgntb16ykt1KzY7m9SAb4NCqLcQ79S4B8UrCE4o3jfAUd5gdQwa7MHgMomVqPT",
  "key10": "4mUgQMScNVjEgik23WqyUjQRxBHtk2s7EJkxdsTSuQ2rrGvCfbaULnaCVJZDorQw6iBYTmn4nzUi9LvooRwT5MTL",
  "key11": "4FUkEEt7P1D4ZFsszq1MD3yGx9qdJxjz4VvyJjMcQM9MrSCb3bHuMSe4AaWqYULD8S2QgdKNWctHoxgQVtCZ23cb",
  "key12": "5NRiiFqCxgpBHMYjQo1Gbzr6q146aktRtUFxYHBY2i3526Jp52C5kENdi4xqxGxG2VHdx8nmobapbB5RDxUfV4Y",
  "key13": "5VS8rduRoFfMrdyvVn82RgxHNFEcCZyHCRC273Rjf72kGVrafxXFymYWCMTuqHjeaKgc2SXQgrstCraDoy9GBRaJ",
  "key14": "4p32uM9brRwkeXn5C4xKzJ93ZEgPWxDDSV5Tah71V5SjcWwm1qBU2wakyQuaESabDTv8GrtTLWwinJwtqx24pPca",
  "key15": "4ywSSJNKAHyHP9rZs8soNRXZeQiMtWAL2oABNiCCnAiWm5jWRYtvnW12c5t6PNnkG9orZU4M5WmxwVnDmGGXsm51",
  "key16": "5DvkpavjqUj9DYEmCvZKHUviA5yAJP5wNCNrpHT2Xgiyr5pxN72juAPhRb7HU4KS6gtctrmqD7Dq6vXyQX8zD1A4",
  "key17": "3ovvbuHNArCHGCMmedkZHifrFG88T81i7BFMUJkdwuPM2T6veXz58iGUmbBhSz4BAHtcSUoiXvu3a11XznMqGW8S",
  "key18": "32EvuoTGxKBPNcRrXDWLhjKv7wwLVnAmMN62jKFLpxJGZg9CEQY2j3oN5cjRGQyVRGiwVyCj8N28Maqa6uRdvrGp",
  "key19": "5RYQBFUvw58xsiSSLA5ak69KTkwDBPbX5xNQHJtrQz5EzwAeM9mvW9jpCTAKzmc8oqkj9kAm6brzSTAEnkBjgjFH",
  "key20": "2LfAWGXmAomZktGXLdjJ4iDZs84ZLp5dByinRuGi5bwjgvLAQGi7mZK4kw9fAtWBMke2njyYRY97ghSEK7AvKawU",
  "key21": "2sn2gTuC7UwzxizmbatfpFQ27Xpbg5xKQPaiHwhfCjiQgG3s9ECWTPhEGPpsvcbvZmYRPir7wFbRhMb3WdtokPpD",
  "key22": "3VoJjKqAxrBQG6Tm8thoZDYeNCJDfa3UsGJs6r7MFgWGDrSU9Uu7beG8GEGs1eBNYo7WAG3W9qBR2FtKA4FQy3kx",
  "key23": "5ooSFncNp6tKjYnSz3ogYDDQqrmfuAtktaPve2yAnUrnKVPAJ1Zuv34jAxu3eFgTBb6WvvkRAi4ZSLJVpYMUTHHZ",
  "key24": "4wGygWKY3bbTsGTeJjEqjxo12t2Pu6dbAM3aDPJ5SJPtE27zANKdmAjDLwwQXSasHHkHUhrpo5M3fL5k56goT6qm",
  "key25": "CRDaDViip2dqQYXGimY4LhQ9hRFwWpg5m5vdHaw1WMgVqqpqygqkepSnGWW6NNc1FDnX7YRi2S8TvxHDKZvsuJ1",
  "key26": "3AMDyAPLkARE4ygE1PwksLf1wTuyz8ESPk2GW9qSCSvUzeKtv8ZqzGshQDXZzb2S4UtdWgaXPhfgiU1uagsgwejm",
  "key27": "4h2mvirXQFssvSbHqZ9SfCFncFcP9DwcyUHFSLgCvEuRHrMXZvTP8Geo25XHZzi7fSfXqktU6uUd2XKjqUMsVYbF",
  "key28": "32TS1qVr79su7xbCaLjQgPW73hSw4pr3pgCsc6ZwHyKhhz71nzbatdNvZ8TxXB8TpdZmNxaPJTiUWWbawBFaHRTJ",
  "key29": "RSa7qXToujtqDLUYk3FtY2GG8VF3amb3GZeTyQ4WZ2bkzb8Q6dJFQrpTfCm9smm8gRwoWboT2bWYMyoa5x1Gsv2",
  "key30": "34zUNJotFTYaPXzkbrmpBeooZDj8e9pBwbaSgyTq45xrqpcEMS8fmTwY6Gb1eKW34j7usbVwCAUYNNEHBZyqPDUR",
  "key31": "5hJQV6tcaAaTdLiCeqaJUqEVThFnzufUT6SjPJksU4yCMCoQG9bDC2AXT7Cv55a5KhGrW2yecAWBNeVGK2QLVjXA",
  "key32": "2g7mAqCeXBX3e4AYvjwKq3kD8hkqCBKZrEtXnXvJcqUoprE1cnD1eFstyaa2Ykp8eNSLD7N5YyqD3LHJCwrRt9tH",
  "key33": "hcu6URT4uQvizikCEddfZoEYTpgPb5mv8kyWXEyfzZD8VEQaEYY1gfPsWrpwzNCpMGA5JvM3RqN72Are5bEo57y",
  "key34": "5ZSDExBtFu6ZXF2uRXz1NUHmUoWPq1XeS1UWMC1GPewCP7CffE75d9pk8c2jVBpiNQgKg3Ue3aMSsREXvt3ZyPd9",
  "key35": "339FrfS7TMh1SL9b3nc81mN8Lv6gZRivWLNp7adJK8yJmrWkfth4F1wYNVtzh7HP77KifoPPv7AmSMA6EKF6Adye"
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
