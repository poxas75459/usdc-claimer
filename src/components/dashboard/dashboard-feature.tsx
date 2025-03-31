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
    "4CdfMoC7c8sB1WYD4WtJ6WiXw59YgnpbVonrv39w8jF1o8xVgpKdjr4ZFVm8Faf8ivxtUUqBaBxpevM6G7smTLZY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1pZYxzbhdboTWdmNfrpYYAAheJcaPbBSA4p544Xbjn2dNGFQoAyFsi1k3R7M9UTJ6QQA7fmxJTPu7oyRuABtg4F",
  "key1": "3rnkUQ3upsGi3KTyPJui4UHjoQM274Esyjguu5S2SPC4s8ihpmzLBEv15aX9aw5qQZFqWLic68AYzUvwZ9d58yVx",
  "key2": "VYciekD9nZopmvuYsuAarQ8YQkV71bSjep6JVmUAtBzN572oqRjwAe2Q9FctT1iN3afLz2EXsRPKkQKLZGjQ8cp",
  "key3": "5q1L8WxnyMnrfnVrSVDnN5oj1xswoZ7eioyD6zwEbs4dNoFUqWJBiTyojKe8wiBn6BhFjYqjMDDoyXBVBwoPwrpw",
  "key4": "2cjtuKqDmP9ygqmRAeCzS1UrPENzvo2P8SNSawUN8oNyjVsvP7BH7j3zzHvty3DhbarX8nf8LrTTwU3m2YY9coJw",
  "key5": "5cjLiFV5WJQ6EyFWZB7xcfQ546oTvHNm5G2LwsgpvgV9uHJTXdk5k31nUF88W9wChqytUumbYFDydhzp7scde8dU",
  "key6": "9tnqNfCjMih2YkUiDWLD6T9GVR5yVDyoUVVFnZCJH4wm6pV8ML34AMvvii2Bxj9ETtFoGGK8iqrbRQzvU2x52Vd",
  "key7": "5gA6ANTCdDf839yptjm6WfZy4gP7tYrtZEntsT7J9ytDKmnRuUpK1nRYxn4P6xFV5rgD7MzAUFZPD3AAbR21FhY3",
  "key8": "3jxVH9uoficmkNRqFaKDG2VD7hLbyriQzhznUYQRpHHnuwNSqzeEBEc2b3xmXDBdjkadc9qt5niGycPt5r55HhTG",
  "key9": "5cM8fm4sM7xbqRgRdDrbyJR2yCkNr6A8ooyA51CNaPvwAhkgwY5xggkhdg8Ajv4k35JgdvZ2GKDwAZBeigNa63xL",
  "key10": "36BoeRXzv93rtjpJpnjZCePTMimQPQuoMw9c1Jwu32pmJfQah2z5v8pxGPU8J5MqXkStcaPsXXUAWiSQ6X4wejmg",
  "key11": "GfuHwqEMVbeZe9vWUNv1kVrVURNkrTtFJyRSbKnWCzAUSepavkYepnGr2zi4RGRyTZB4yokMxSsj2xfEnCyZurq",
  "key12": "3m5tS7e9T8kmchSenYkECyYhFTraYNgMGNYBdGy66ystXERJKUHrC2cxDtvX1qLguRVfQHSj9WszHoyvVn7q3xKR",
  "key13": "5X3WXFx7NXcEenooo62qmN14XqsxWtMJeY8EGUAF5nXYZa4Gq5f5T8kkLZVidy2yTd9Ys2DtrEz2CB3ktZai6HeN",
  "key14": "4AsRmWxZYwWvq1QL67ro7Mbw2sqhUrsTkKwJ8LZTr92LKb1UQ7h5WY3UW74p5HtovBiia7D5oXbMVovyYH2XnMZN",
  "key15": "5huSsB2HWAg5mZkBkAkHacSWV794FFgiCbTmi776tJYW85aRrREVWyY8YfRuG9qLa5Rpgj9CZqEELkCrYDKZHDbV",
  "key16": "2QtvkWGmvCfnQw64CQi88kc9WXrxeNKoNLXDkqLyzgYh6E6xvmdi8tnD1YGxFGynyKXze5zSGGUG8GLf4rx6UJr1",
  "key17": "2BuhyYzmELcjgmrHdMYekqtvCcjWVWUocASVR4bEqJqDGA892QGiUMzCw76d6Jeq694XYLhBa2f7EguEtsx2kvVz",
  "key18": "2Q1hPHHtqB51H1KjRN5bxWdUEAqWLswefKef7a7JVkDd57a9HVqr5c8trJmYFCUvE56JZhr3v6dtpQpDG2JSKHTS",
  "key19": "Z2eZ3vTEoVMpBtCYVnoeSDki8x78rXztvT8meV5eQuxvUTcHjG5vNRDs46UgxM6NdZL8ukvvXHbVMyPk9D2Poex",
  "key20": "5cYreWvxxQ3Cyk2ou19CGGsAsw2inApQKxTuj5GbtaFeijAXS5NmhEBJBCJr3eYD6fM1Fa1Yx3PA5b4xh3hx7yUs",
  "key21": "3iK1Mh9rr35WunXXHSuFL19Pqs3xRP9Kzgi4hchkG6pVvgZRsFpY5vVCsbUABpxooHgmpT8iajVgD2L1Z8JptM8o",
  "key22": "3iUicFx9YRnsgT9bqFREcbSGzWo6Xyabfn3K7TTpcW2eavpoGUVzsjpQ5qhEqCGkmuuHVyFaydrGLUSaCYfE1AiY",
  "key23": "2o4UPvpzAHy4G3tKH5SUGEzQ1fS2wX8B5wTJA2v48e7DUW23sHaNaBpkjqcno9Wb28Fa6e4Bh7FsoiihdQvpFFYt",
  "key24": "4djfv3GXnTQfBDKL5nnCARp6LEHrzYCbKsfUEBCVmd9XXY8JT4QR8NjXVqvsFbgoHsrPKNrUaG1GcgvnNj85D9rZ",
  "key25": "4Cyr8qdj6LZpRPhmG2jgonm8vi3mxFs7uMhi2p5scknYhbqBcYmvAPiH57TmFXFyAnYnD4HfxhrPqZziC6EKbub4",
  "key26": "39FtH2EeaoGiyBTScrYvGpjwVKtFN6vmBHubWK7jC3U9CUubX8EbTMN4SegtKRegezWYULQ2QgSNtD5tWwdo5uEb",
  "key27": "2CihR8F3EZX16uamXvH3J9sd2zcwGWJdvMq8K5BiUzX6wKtMT2axk97Uv2NW28CBuzdhhhaoAHXDWb9GWZ9mVZGH",
  "key28": "FTzrL5xoHmhCr5RTiwtMJYq6gFVuNQac5weGRCtWC8Y2ZAsVz3wRt23MBBTRSKEnpPXnSkUe7deYFnD1zEhY4hA"
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
