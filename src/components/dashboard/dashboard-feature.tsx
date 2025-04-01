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
    "5S1UuVvi5miqirNn9v68bo96PquPHeHRc2jSUuy3H2NpXEY6BrnenkhRutQWMmqTp14M8Vb7Lek32PLAxbXw6nNk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hteSVoEGxEj5S3fhZpBMAvii7kj8kMo8gBUUqyXY6ucY5B8cTDhgmjHLJFA9saZ6CuM4rNMX1KNvzBJu6KmUqrR",
  "key1": "5Q1Vxj1P7tHWj7CeBrs4wFvsk8ANCb8LinX6kAgRq1utBL2CtpSX7h2uaoHHNSetkepndyM8xfsW4Z5nhem2cGS5",
  "key2": "4d4BxXbiaZ4wUMdaW1Rj3emwZP2eGZ9etVgACNC7wycxziB2iPC9r8HELURTAqnXbyNiRQzfVDKz3Yvao28eNRWu",
  "key3": "mp4sboHmBqWskJs9L1tATxjHVZ9kyq3wMWmbFX1vnRLgs33RwwhFasBoSz829EAE7yx9mjLVvTE1FFKLvvmkEJ4",
  "key4": "2qUv3D9QA1xuE4Q3s3d3mdrByPsjQBuEeXa5ZCwNBZKZBox4t5EV5w2iDMWycA5R5XM92PefBKHaGPHYPbTMnP1d",
  "key5": "Syx8dLFx28AMnof3my1a1urt5aPsVYg925Xi2u2ZQTfu2GENEVLjnK977pkheAeHhDfbk6HArhXxsKV8LFKrPEu",
  "key6": "3Cs3G6K91zW2trzqGRxka8neFvXwCqC23WGd2DftMYaZjjvVvjVsFW8S9nFZ1YuavkFUxtyxNytNPV5jqHx3Z93F",
  "key7": "j5p5iRBnwi2DXsHZeyBGJo9rjJ7HmuwNhr46jkNi1n3fAgfmco8zXfBJrTYyUG1RJ173yaH3gxCswzWs7J7aCxX",
  "key8": "4ysjoBvJRvsFqAhtyDg72JHfmKHB6FwXoJ3jn75YtyesAr25XHFt546g5NmzMTbXpNqCXWmZUpBd1fFzjBN1BkyG",
  "key9": "5CXyBXkp1D9ju3AWuwLE8t4hG6MGEHvrRkGtZTTakcNgdMD1eLf3hv1Q8Umv3gwmdL1nAmDs5dpYSad2wCZL4163",
  "key10": "4XCH9gGoY2xpm5w7z89Ax6pyZvPhJgetTLaRdENk7M3QLhK6qrtHvFnyLZmcjuKMSchcGCWLPt5SbFgQnb4krLSK",
  "key11": "4EutswtnzHc4H9SxdHPPxb4kXZH7Dj9AXMMCSD9GbVBpzwa3kuRvuGYJWNU9hjA9Kr5Nvy8HrvdFmMdeuA8syyKA",
  "key12": "4s4bs6nHPbSALJrzJSrNTFBZePGq7YyxE1fdwcDNCjQxpNk43jHUPkXDGKnHkRdf1DycP4AXWuRMi3e5zqDLexnH",
  "key13": "3xGiHbDdFzj4tPeeuKV8fQhvRavnZjmzVEyPjSoNXNPHdcVvLsYBJwScGHQba455xeYvBYrAA2qzomWYU9UQ82Nz",
  "key14": "x2y9TAjigQKnwhfrhvQKULkWSn3cku2qmnTA6NNTq5wJd8ydHKUVhy3p2Wo4a9q88yNGnVycXWhvxUCWLZdZZka",
  "key15": "5feSBoevhw6LBiCnDxdJ38T6nzQ8h3uYNF1gX4NHjAh2mpCDY5KCcsmxLHBYo3LRWR4E5r8NuEbcQQ6VqVErQz8q",
  "key16": "4xADkd8vLDBMqfiQyaEmNvXXvW3JypqU4bKoEKQEqivARD1aFGwH8w3HrdBM6HUczwGCruDgskv6xZYj2ubZQ1u9",
  "key17": "255UDym8WwTwCfvvEUqiRcVSbpwpYubv2BBVejuiufHtkn7auM7ip3JFMdY1TZBrUXn8CiUWM7h7Ror9hoYb8nsb",
  "key18": "5W1ZDAxJhBVAdAyub2Yi6VsidsAGxDmKwHM3zFgSinu9ojneLC7zr5vxiP32Wjsw8n3p7ayyn5ik5bryAqeCY1yj",
  "key19": "3RxEmDXSk9MmkRbzDH2fuH7nmU71HDRtoBhyzUrKRcXMKo4WtyfZ6EeGG53keHiv8HrXZUkF9JSBW6tADYQfXBSL",
  "key20": "bB9Qfyygco4PV88MyNyPJRDKod7tebrLhVewjnGhrQEMBUtSYn2kzzYa4DCFvJJ1RFDZ3eqyuM1zLf9EEKquiUv",
  "key21": "4SUkEmog42UTQw5uBd1rRfUyoLnLU9pH85XYc5rwULpycPvyGy8UkGYCNWgHcQQEpWFTsjBrLf3aadSLTe4taknH",
  "key22": "3LbaPH146fgVpDeBRE1aDansSksChzo4NUFDBXucPW6ScPTHwvfGdMKF7WLR44mq1KPHnfjjoZK3ERjabfKHLaaj",
  "key23": "4Q95t6ND8vGGrtQHeugFCUeAT3R5y9CMxc4T1MN83n1NhT4jFp6iS7FbZ2K17fmaiwvZ8w1SePScCQJRa5UWCCCM",
  "key24": "2aMm5JdhbMq2P4wPWn3hg4gEmEpMhm5rnXbKqcCbJ2VK3xD7LNiK3oMGcPxyet7qzpMuUHVx2wwXZFh9kvrApmWu",
  "key25": "2xwhVi14BinDkxyGaJYYLabkRbKbcTwQiHvsQZVAA7f9EfKHKjaL4J8JsDTMq8E1JoEWKVRN7mTRTBqktsf1a8sW",
  "key26": "52sgbPXUn8xVDV3uQkhn3fCuvPmk7BJerRNk83PW3wbsfxA8QvM5eHJ56wtNyVoZeHtwcP1bqDRuyxvp35uLGQY9",
  "key27": "5cTNkz8N2XfKt5tQmQyuxgsry2MqSfDkedzbThNNwbHVXG5QheTiPp3V6aC4BcJquqLseL4x8PwkTJd8X1Csvyjq",
  "key28": "5Bht1kuceMxRdRxv8NR3BH9h2pShZzQAAbaKovuRkwVUrNiGRfB4ihiuxeVi99dNPPWHGgA5FVZbSGpM9jGWtCRF",
  "key29": "5pSAHQHTJ15xEN1rF5QZuUrZrpDpcvS4yM8h73e71yAgs6p7bEUHtY5PP6BdrBerSgLgmNDuEvmqEjKPWWtcMTGb",
  "key30": "3ArPdv5nVTeP8YnGinpNP9Dbk7be3hFbyd3xxq5tDrUwYWawcG4AiW7UNHbtMy3ceCndPchAkH5HAWTosfrePJct"
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
