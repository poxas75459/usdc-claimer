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
    "4UHZbhWGNw3UsfwSJUH4PVCwxQpGJV9P4f7A1uEs4KN56pU1aBaHJvUdeoo81mVBTNQ5wy9U6CNvTqudzvjwiSVV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CY5c3PCSfTBxSnA4bSwMFW7AqZZ32cUWWruAymrKm1nP37UrUwbbca8o8ADwywboamV3woKN4c5ACc3TNt9vYrR",
  "key1": "2NE5JKxvNvnkd5F8qGRH9v5pAjDCiSKyxk7hvdChkpEgTi9k3yW5fqesrg8A8Yak1da3tNsEiHQHPfhaw4i2qde9",
  "key2": "2LbXE4C9ZYt1E1F6naT65AenpphMetVdpBz2tiNH1TvLH1ShoB3GBfvoT6imR1dmqxHiqbH9n4BuKdpPJRfqrUq6",
  "key3": "5cWjVpdPvyFTwVDDQdF7DFx77jsgAkgawdbEwQhi6Z8SndHMKjZbyqxoWqvu7Vh8NbMnPqLv4RiHyMUnv4NmywiB",
  "key4": "cok28EMYjB72YDqnMbrfUzsXXNPweJPebiH8AP4iaHkWzUixQLxgXpvBr3CEFrLsZwdtgFetxX8PsxCcW89e85Z",
  "key5": "v1wFHxnouSHw1Bcn3UvzAvUUXKzrLajQYEzt6q3Ngr8Pq7gyCEtGBDQyURjogiyqAtWQACjXa5SaguBmJoDoL3g",
  "key6": "4vCZ575kywb1bQRWzgSooQwYXxsBG1y7kXTxpcoJfsEHXFa5ivaz1ZLTfmRx4wiXc1vfqxM7eKFwWviZAN8Cm6vt",
  "key7": "5nzh9ktKzBGrxDkUuf9MBAzj2RmXg7Sumi8NhjMGQ4Tsn3hMLgTHoBW3x6RJUpPtFonjEs4NJs2JmhbSpyYyossh",
  "key8": "5FfFJ4A8JcnJvhfgBKqtYCsRK2pdZ6Xxuq7SAHq9Zg5sqiV1r6HVBoAqLge2v8ZH26GaGUq4JGcuvfySawaCBsE4",
  "key9": "yTFX4crgwEWYQeCy2Za9dzNbib3PgyakcZ8kWCyNRVGztapZEtgSKJRjtTVctUwCqieh6pmNW42K4A15J5isUq8",
  "key10": "3jvWWsH5cih4ViZtDpzNhmWadqfX5PjStXr2Crvr3uyMKoUYgbL3DyDoqZNVwyvu4YbuAcEqcxFa4pDQduaCBnYc",
  "key11": "22ocinnD7u7vfmZZtTo1tQuk9hxTDneJmB3EEXtrdmotqweDoqDz5wEoZH1JuHEFkHLA4XaZ6pngSJvdw2SkjTcQ",
  "key12": "4BTDf38u9bWfaRGcsfJJK6dH9Nn3HrwFHjLZ4xV9XxkqULEGPWUZxQermveK5Y1KFFZsy5gVrVHtRPDJW1EXDcF6",
  "key13": "55y7Arx2vt3aPmxw5TodDrcy243ya8pVwVQCMsyqhWJAVvTndKvLnb4EuAA932j3HzuuGEBJ8ToTjwaR8jSs1agX",
  "key14": "5hSbZfnDauesaMe6dSNpse5HhZWttdo1riEURMXorGpbG4TmDvQdpCU5P7yhvKxHenwRcp7tKvazx29HxVhtW9mK",
  "key15": "3qFUfG3piArmM1sAkUR7pCfgyLkWAbbYuBbqwN2pv7bJjsXzX3yfEvip3zLosvyVfJsMqpUt1ju2gJGRjxaVCqqS",
  "key16": "3uLrsRSrgmVfZcGr6PPxRZZiK85FxNUjKN6q9zBMbptSeQ3dpQoHyKEU7jCUMENuB9GjB1xG8puA9fhq34788VQb",
  "key17": "23CL7vSDhFE2jdZ1m2A5v5H6Yjs6DJ6T8oPyPV9pTB35MbrNbDSgtYh9TbnLzMN2VPyGEAdXX93HHni1VEojgJ6B",
  "key18": "36MULeNgcAporZDnZK8d2i6e9r4M52LwEdbYEkTDPKG9NbsKA2H2iU1yWCa1jJYNMYpVmjCD9wEn9kQsBrd4SnvU",
  "key19": "5WAWHibfTrCavNzvXaojtgozWiYMhr39mNjw8nhYcs24CK5ciAGDWQvFpbNTAnJnYDqP3MhVFZhR7jiF6UUWYxhi",
  "key20": "2151waPCrNxj93RGiqkQtRKXEF2iW1vqjJVwkDBAdwX1nZs98ZQgc4eSeVzDgZm5EAChKhuqTSLws5A3f9v9y4pf",
  "key21": "4dRrghekSE8ySihW6V8dYasMKdx9evdfEYQKzQcFrCw1j1zp3t76QSA1gJ7MFxxNX2C35QZcbmxA2dWHTUUVhhwU",
  "key22": "4FQ4YVCVttsDaDe32is6uGLvuStA8UJ8qKjCN2Jhgv1VuX1oYbSobWtoTBWzA2gG4QBcyfmwFcsa3dPUegaUJ3gx",
  "key23": "42uXmEVe2RMfCbKAA86AxpMvccGBGDRxE4LN3RN579bSwLpcm2bQS9ygJxWiqpUxzBJcFohU7ZBiiyqD6wZEupdb",
  "key24": "3cE3MBwJHXYsGi1UiRpAvhvGJNk1STEF2JtRy1vy7BTwY6e7hfd44hwJJjHxs2fZX8PEjWHKCrqac15c6jVwmbFD",
  "key25": "5GzVh1AUjqMjZGosyuPRPN6Ri3vB8Sz8pHqsax7MYxMCyMSLpNrVJbVjtse573EnizMiNujFoRs6TJ3qfTSMNjta",
  "key26": "2yHx4fYuNtZHj5WSPCDMXvN9cmAAmQuiGgYZM7VoDMoVWUve5FXtkpAmKFRuBEqsUrTtGcUWdLowjWQdZ6HJshUq",
  "key27": "34z8Ron1rSxA2NRVDg1CyzpVwszhnnYM2YdVsXYJop5mjoK2j36LyYQmwo1KcU3FFXx2FKsP1jWy6dhgN2Fxppgx",
  "key28": "5g8a6W3amBA6HmtXoARBaWyx7dJXojrTHre61xSPBAU7tAWXuiLXN1bqy1UmYMbvK7whAzU6FtzcaWafa2J9AVEG",
  "key29": "63QGxLCiFNLoCPpAacraKPZeMyCjsrayGdqPT8AD8LKQgKmMYDT4RBx4wFPWJALXTWyAdrgrZsnJQ3k2gGkcWvRe",
  "key30": "J7sPF7rRZKabemkWhvZKpmBJ6zkpAdC4czBsqS3JTpmAXCcmSnYV5Be3uhWUHDzchtDbpKBE7aBHVLTZxsBjNyj",
  "key31": "5aPSHSsHUmMDaXBJe4QhLgrt7vZWsTzWsMsCDb6tSp81fL4Gb2QSioesmaW3VPGpgCS7Vcqgb6XniYdVzXu97abU"
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
