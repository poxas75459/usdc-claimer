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
    "5NeNmgrra7TozN2HbNP4tZuMFjkDx3LsHafkabPFhtSWrpuKms7znQMn1LEkdr4ykyHFZGRqpy1ohwUnESx7YWhE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wCiw8tyTp2tXYXksai7JQ6Vhqj8RaURoSLQSWgDYYzZrwYxeRDPEruWMebAtV3XdPCJbYWPPd27rpd3PHgVF4Uq",
  "key1": "43xmiBRpUnpUKeFaaCqGCKmLtJphJMRJWfLxxNvZEqMSoZz6ueUxAnBubvin6qb2KJzwJGuTEowoPTKyjhnz146y",
  "key2": "cPR68wpmdeNWRsovHg62SdSUz6pJqAGs1VQaz81e7c3YP7mWgW1fscjQuHU3WmF8izx9jfLDCFUBaRTQbyvjNEe",
  "key3": "5ghfJXp7sz5TuLCHZqTLggrwgpdxeVEBwsfYSYiL1eWkzJAyL6yS7xrtFoc9rHjEp6sSpXjHR4gx3H2ekWXZqDkR",
  "key4": "4qK4HkNZi6tSqouQ12HJ3qHW2AMVtxJ8QD8tQ6qaAdAYRCAidFyAkEXK9KjiygU5yu7VfG4WkgvD4h68B18jLqBE",
  "key5": "y8sRPL7JGUYACwWaHLEowdS7AmEQipLqDXmTTap9soAJdtaS3kLvpHN6UNJED8g41ZBndTDsZS2yiPYaQaRB1aG",
  "key6": "2WC7wQrEoiGRoS6aRCtRErbzCngqWySS32afJCeXCJGdCnMGvrJF4NHng7KjqgqtGKfogbMYc7MFpsgSyntN3YNj",
  "key7": "4wR3pdJdpaDpHwVXvunQDXKUrXt5WvsEc5GB5gGUhLxb7qrw84MWQNQPtmi7UMequWvhcx4wbqLWoBR1RaLNBLjN",
  "key8": "3Y3Mm3VXbai94SDRqYkNkLpUHy2uURmmBs4KWhqmGmRQoCoZxsGzxidV2MPA5KH5hteLBHvwxBS6Lo31Jds8ffpP",
  "key9": "5fDHrMf4mWpoaLZKmPd2mGtPUfWiNkqdjsRa6bXoaHwjrSjYU2yC51u2GPmpSiWDCZmtiU9Wieqxt4XHmBG3J5Tz",
  "key10": "3N89wB9iEL1g19FgWSd6moEN1x5UoyubhFGcC6MiVGr3CHqcSi91NF9ptQCvz8FrTpsUdFyTBUEYXzfdDpAK7q3h",
  "key11": "4Nxrom3AinKtv7N7a3cQ6oRvJ5jfuvU1AqFsm9o1UJkvn3HnxAEMXov7S9GFfj6DZQnsEQAhbZo1jNZ68ckEt3zg",
  "key12": "4hzDurfybocMRkC78RVvnGkmxqmhjZSRK52wDjhTXSxGWmrBAyp2n6FhjXCBtkxCixnyFteM8CyJNQiokc3x3omF",
  "key13": "5Kd4VNE4D1xcVNKKqtGYxdRXK9YYNzFDdKzKY6bPAnbVzQumAoqmfALQSXM19i37ZFS1d5r6zeKwxYvby9DZirSv",
  "key14": "5T2WXGrb9ebeBSfjbYPhUpnHjbMdCdMMKBV637HpjAyxFg2ubjNXPAXPwd9oAVeXoJXY1M71B8Wr9P19Zmkcmi9N",
  "key15": "SPgbtuytbuGh9jgMPaeLpkTHkU2fGTd3fM7DgihTbJvsX4YirhcCCHxTfyCYvZUmh5DgiLPKDwKCQYNczkEQmVP",
  "key16": "5pkEFqUVEn3wxef1JjqE5AbKAhzLgfto8JfQbLkn3uBZy1Afhtk2XYZY1YJBTYmXf9eDfmSBByvHb1jNWunBC4Qc",
  "key17": "5mhoPnsfSvYXgdVhXsFBZXZ2Gx84hMtkPhRmGvVBnEmsxuqCpMgFo2FZ6GxMpXQFHmukbFw4Qz9uehVYYDi24LYt",
  "key18": "3nTMGtmq9B2zPha95kQyrevNpsqvvYzpvp3XDZB7sCmYhCMNhtvocxYAASp9Gb2WwTUJbDRyp8E1pvvzFkg6ReRh",
  "key19": "2yHkTbqQ7QkVDkNv5MbxCMFVv9c1Lm5EsPEHWzENYqe89AhYc2n2W6u5tLjHuSBxKufL9sMETrm2BQteULAwZq27",
  "key20": "3HZLCeu7hxm1wfu7DkVTTrHPaoGtdgHaLDQ8P38JgLXR6kRZk9yCJaiatA3StbxxVw5GqneuM1ycKamcbhYjceH8",
  "key21": "4Y8hGZJ2MWyX94U1ZSkNAALzWpyZLjUFfHvzDgwzwcsTV8HA7MQTk2sBg99ZWLXNDpbG5BS1JsDgejT6LhKUcFg",
  "key22": "3ybwr9USQBaBgxLupkPXhRWTVyjDNdwJ5FGJ9KBJ3tw4Hev4h1pcsG9BAUxquy6S6sQBoAiwEAMQcSLDbkoDgNEV",
  "key23": "4dMv41hkkQ3GSc8J51et8H3rkPZgggXMVeWY63VRSmh51ccUGJTpvcdcS9SRDfRRdtLVVg4hmZxYgGimej2o7D57",
  "key24": "zoKEPuRnMf5PDMXbUv1TZnLi467CK12ef5hvrjkCxVH29jRdY5qzYhtTNQvYjuJh3zdtE6MiNwX6Ai5WMFwC6xs",
  "key25": "572MoavGKcy4iu7MVYUeMVD8ugu4QE3PPnYXE7NCRfxnUaR4MSLWHrhWj64vH8Y8zGD4f3GT7usGys1sgxkqGdVQ",
  "key26": "2JcWDmiU8b6kXKLopmebBfGLinJm63qNYadHS9Ap7Z2dBe1iRBuHWKjBCpxKX4rFepLuXCeHb97buGq8A7xKG5z7",
  "key27": "5oKQTepFVuUXSBkBXZ2qa9gwSMdRckcKWEenPNZUcb9jXjLPz2cNT4nnZkk9pZA6uuwESj62VK9s3F3etsg6WRcW",
  "key28": "3tAPxLZ5S2vbzYAHeujY8cpvHY7uWThCAGLrTVnrPhWfDeQSbZWHe9GNiRKhzHJZsM2JaKdHP6ocbWc8J3EhbUy2",
  "key29": "5EvBcV4x3yQaZRyBivbA49UPRfpGXg7bWHeptGVUE7SM21QDLVnKG99d3UpBjde7e3m4XSWULYgXuXuNF6g4cEB7"
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
