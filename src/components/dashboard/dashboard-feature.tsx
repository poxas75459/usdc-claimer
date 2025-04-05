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
    "3VYPSPKBBEoiVJ8C9btBDHvPJLivq2KhQNbnAqEmQKJLbPUZYkLpU8FhH64FHGYF2rf6QWpb24pJwp5gzRPGZQBi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kkSVgu5azAZ6WiytsbDvZj1iMjNygHGi5noPgHQaNxxfzW9noztWJxWwKvd6bB6MNDfJJ1Q3gR9dYiQY8o2sNsX",
  "key1": "jfxfHQTuxcDG3RKwb8j7jkoFep9cZWqD27EDYeHepK1yVZtBdr7U4NcmqL2rBRDGMmXBDtzZURS6zBnFjk3tPpP",
  "key2": "42dtPP4kGrBAVap2zT6tSmJ2Rff8XcNtC2iNqMc2UUdKwP9Te2fpb7pCr49AbZYov1hQHbudXp8V4jWJa3XKi9Cz",
  "key3": "5csHRTNDRWW4VbBBncaD1f4ixKgXEt7SdGow6TA5XMSJuHcBg5HGAnrgCyFSFyKRkQuzm3FCfRGHiWGH2vqcnnwr",
  "key4": "sYywugo4U2xE6g3zvCcgTphowhBxFBoFwk2eZCxNppsDJDhW1BsodsUrdw2whos6u1NbcWkfvfVmWkWmwH8Rbh5",
  "key5": "4YmrWCn1Spw5ts73XGVPHKaFSWu29frnZsx83vBnopdMQTDQGLHNTUadwWwQF1rxuz7sJdhpuCKAbH4CQn471kMU",
  "key6": "32BayAx6X1xG5wWWH77r3rMPFWU8mG4NVrEDfzHLSzem4Gjb1Si8ZerRAX2iUssBdHmtWdwUZENE4Yo3V8SCVww8",
  "key7": "5ZnPNPtjUUp3Mm2r7SrtWKFwqisw3vwD9WZQzU9eU1vuoVTLsLKxRJ16g6bjQzVnvJbk9VBtRjfGkpmg5Cv3bjQi",
  "key8": "2dy53KeZ2E7xwpwZdCTksqCexXij1tdoS3ZrbHwSDfjnNVF2J3Uzruz7MLMCxU78z2itPPodgCEJo1WSHJL6fnHs",
  "key9": "2AQivgH8ZMsHd8UwRpALPSiQ9ZDnfxvDBFv3FbBpXEQci3mmTjZbw96c8mnYdfjmrfyZmCjUBt2ERrKoc7VmDfza",
  "key10": "2WBhCitRkFAdVC9ev5rPBVwwfTR77HLfcjPf9K2NgBQ6j4W3gkhV8ajQiRfRZ9Ps4Kj6My6YUs4ePyidUWoRX8xG",
  "key11": "5pmDdekvi27VQr6yTBbES2pWtJ1k9YCCZsXx8VXpk6maC1yPJ16fddAtHDeaXDcRWh5Ewe7cXeMuaTpF4mvvsq4i",
  "key12": "4DAmUNm8kdwvJdtRYZk1QBSEh7bssYphTfKthBMndbbCQapLzJSz3FnsDUMUszYW93MM4RwtoaVU89Wt7LATkHZo",
  "key13": "3GTGQuBcETJzxqSJyKxudCPKhgXXHa8mdbQddb2T9W9akBVuCwKgoF8Av5Q8jZoPHHMuckgvJeymh2RQVoDido21",
  "key14": "4cJxgBMwcNUdu3qbpMo1aSsurRfA8eUs1ZbKz77tC9EmLJkfYxtRALtSiniKYMwyuUj9nMx93rQ6fsh5rAbx2566",
  "key15": "2wM4JmcCnLhQDsvKFoDXRWz3GuhM53BRYMEm4aE6eUe5FkpzLe1j9DaNo9vP6fy3KVcpySuyTcKyotAMLcMcVbEQ",
  "key16": "5XkHJQfK1GyTzRNLoB5WFUxadd3xny5f3f2hvsGyGX9BV6gKc1GW19F17GzUNt5fYNbkWtA7a531gxgQLvE9xc5P",
  "key17": "TaJBf3DdHKh8MtMkZiY4YTEk4nCFg7HbpyCwUFFQ7BDBgfxz8wvZr4MzSL5XWkrSXt4NcoD3bd8w99oiGDxd3w8",
  "key18": "4o4aU3czWan2HYbrs3FkoixoVNGJNoGJ1qhBTZ2Mp5ikuyTqQq48sd5JsnQtJpnDsWjfjDwNFPezNZm9XdNbLmM2",
  "key19": "4sH1QZSeWm8rHpcwKSgLHQz9gtEfNrmk8FrCBMTFmfnnkFAyqcyMVLRcZSfmgN1eBX7qmfwxzi1ebrwAuAm6Dxot",
  "key20": "h2idYT421PZkK1vB2cmq94oexE7EVQBvewiRbcCEAbfoVDwqQnaggGWJDVbjMhPzRMoWLvFa1sLK6HK8dhsAnwq",
  "key21": "2JMmMy7kne7nFXAE3EkHPPwJ68BkWPfeVvueUB7yVTFRvbPXxoxg8VwSjRLFk2NFBvRmwAiM4CLMoMNFccfWEbDA",
  "key22": "2GocQfmLVimhSmhP5hUc8mxKrwE6FvVB2oHZEv7ZirzJG7oWt5wEeqsGXCFPJmB6Ten2CZCcE4jufH3ijpQy4KQU",
  "key23": "3cJcirVXQFfWUU1oa1PuKSvb4xmAxuoqe9aN8vAf6cSc192rawoL789dpV3xZjy5SbCdcQjGY58gVJTKnHZjvoV5",
  "key24": "3Rk8aQ9fYukiV5s4HdmdKt14rFqzMZfn5hyQCDojoPSU2WAeU6HY8zYsCUfQupDvHaQBvcPNPxzbkknxNLXbZHUN",
  "key25": "5SwNsS9CRNYWMiavzPoTB5UMrAyDqWcULUGAjv66kN3sNkEF4nTF9hymNNFdnseTq9A8gGNR6uFYESVXDA8G4faN",
  "key26": "SNq1ZUX8MVfpsDFYQ8M5dGLWQcioFUyBL1LaneKdW5XTvXRicmefKRirSFLbJYEGnkA3mcDDzQ3jHX9dyeu9yR1",
  "key27": "4UfagdsFMpGJMyRa5R7Q6uGZjqQUvQmqPCoWUuopB9rPN2hNvq7jQW8HNaD6o9QQyGd6prHM3NPgRBHCbxxAE2eT",
  "key28": "4xf4Ly7JzZRJHb13R6xEM5DxdknUNinJ2aywtSgm8VQGzMoQRHbkBt1NaaGmRj3xL5fjsuL1TbeV7jip9gVjNK3m",
  "key29": "3t1YaKT9y28NsXJ4GtZ8WRuVJVqJVZcEqqy3eAi1KC3gn9jsrRq2ZnUMSUikzuhpVDxcCqpjF6C3fSKG6BdjYEaj",
  "key30": "2anit2BdSFs8SncchrtbpnkyXfVpkuqTaAidfaQ1d4gd1CE7zCoxdwTyzNbNyT33kCYs4P9A5nLMVe8Uu3ipeueh",
  "key31": "4AKELqw2vBTzJ8FmhtmTe6GWgLdYgyVEzndiJUPNuUxNa1zb52sxedKZF22jjYSB5sLt3UGpmENnMD8v2DurwAFB",
  "key32": "4yZfyT4z6Ro3Yzmkie9ngaJe6okWpV4NXNEnAo1ZfwTCdvW1U3Jh1tRfacrjVTgxiTNbYMA2wW7NSy68A5ypQpd2",
  "key33": "ZTNpTaxxDTGjgbg9vo35XE3D4moUuxeQBGNQ9XxjGo6P3yndW6SS5Kgpegyt6jLCWbMHd3qQV5CxJKkEe3jpKvM"
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
