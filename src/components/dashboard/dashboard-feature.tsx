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
    "61XgxibfmrX29nuoLFj1nKZYwzdY952pkEAsR87dh8bNNiuUUfXxhN1JWZ9Yf1bV3NUqSWPMcVmVRepeFn3ALkQG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2onVXhLfe6ajq3Zpb4SG74UbDGv5EXdkCFFfwtkaymdv7gE5VRGuSSW5h7gxHTdwpU6QhyKWUWi9D23P2iKMNLej",
  "key1": "2MbHfwPQFEtEPmwSVLzfC62xPwyZdzsjoSScC58SBpfy2igoycVn1tGbyspgfW23vbwzRVRX75bjkoYNyLNd9k3D",
  "key2": "2AVjiUVRRYmNpGZqdWPNG7A7Jt3e8ko9cJkmrRpxenrw6NNxEKsTqdc5gVzVkoLi8tQHb7MN3zmd7xuZTdu76Vvi",
  "key3": "eiGTmdxGLGtMPYBpr9sfJ4ye4JRzoEXLRsDSgUExPgkteoMSwEcv1TnKNp3i3bF86gcdJf6RrhufkK7k6DgvtwZ",
  "key4": "55FDzscDnK6N3tujtHrKgHgwgWnoQYKc77YyX1oH5gyt3BAjwUUC86YTT3yVhMKz1EacR5MxCgdFiXFokVN1gWtA",
  "key5": "yC227zG6MtNLy2yEdVFddYMsArmzcAUFH8WED13AR71kNnSer4Cek9qu3rYZo6oLEMBEVma85UmxS9h8BDgvcWr",
  "key6": "5ZmYVhjDE9mcpoTLz3CyGk4wWck8DhWKSLwmERQDSyfNnKXCGQ6sQH4PyEzgvGnjjB3dWF5zCTCkeMx6tJPpW5MQ",
  "key7": "3ZfvBYn73xbRNND3uB7uQKcr3PyKuT57nh7Mw2fTARfv4vChx2RGRL4Kg2iFRmKjMxwCSFyDjsu4ymEyX6qkZjxG",
  "key8": "3xDW8gaE8NEV5iirP5mNg12JcHpTy3NoshcxGcmFAGzmTngE4EB5bG9HodtVAAt1PsPoA5FhX8gr8sUYZKBTxdTc",
  "key9": "5hmYGGg6JRS4w123AF2v3856CVNA7wME5aK7UZVn4xTvaHZ4ib8YXF7fwG4LFA2bqMxvMqAbMb6qA9w7iLwXxdEW",
  "key10": "4qpmcCa2HvhXb2o3DrvMntYyx8KqFXrnqYavPk5mREDnjP15mgSewo64GuceknVqZUBK1KjhvGEuVCT26T1AAgP7",
  "key11": "5N56ZvXESRZyhQQcnZt9WGXKBVeP3LgDuNyTeJVXnxSphn1XuPJXPB7xkAAb1v2fAPd9XttU6tAXdkzeYxi2BAWK",
  "key12": "5MPzBYNRvnyzwGDJHjZ2VMWTQAvFmU7UfSnpxNUJXEH6L4N6SP5P6NzUwM3493m3LKEjuNoF9uJPbBxPQYVzfmh5",
  "key13": "3AUQFWNVMRptVxSWzZ93D6xxVzhTffi8D33xpg5v6AzmP4XSdGPWioh9amEnn6DifCQuNgtYWPS41CpaCTB1dqKs",
  "key14": "2r3TF8jr9BLzEFYGYfxm9VuaMubyPWKRm2xCQCUMSEMoDjPeHGizjVVUWJPkk8Kch8xVaMVwsD991CLqUMDmTBRQ",
  "key15": "5gAiNEqSS3Jtg2Bdup5cxAyHd4HeCPthXvpQTtVF4DGyTx1qJKxhBLtvE6Xpr9ECA1B3v2bkveP2wFKsMZ9Y86BK",
  "key16": "evw55kvCrPwX8TdQ8A83NE87YLHoYrRaPpinUBY5zYLXrMMaB5ReFRRo6c7BYfcSmerV8cTS3EEkXSQ7RnhiQwC",
  "key17": "bRPZfkWnyAnU6Ego5C1oYkHnptGLWZe9YeoPvSVwHtik3RzJGM3tRXSsVPRNr4DjVNrRxv7YAk43p8MjoyTwsvi",
  "key18": "5q71qUCYKVrFoi22Vvz9Bb3rF2YmP75T6rTkdhYgK7VRoPSRGVQiDnSvv51XPafrBH9vuzXn9y94LYnTihDQQpwe",
  "key19": "3Kb31nuoezn22gsx8XvtmoAkfXLV8QndP74kaChiiDqSNheGQbSmJDVXy4bZtoXSADRYRsHexbSDBngtXpvVPZDp",
  "key20": "aHLmPVmoTRxrTQNicjwJzDFnTUbpHenb4FEcaXKooSJpA5F7257CdN8aMXg38f1YsY7jA9jAFWgUFTZYJpWjDNy",
  "key21": "LZg5T867GGU5kgEdkFqEifxPZVd1tJPPvgxixgyf4qsjPGmkS4x4ZUXmaLriicYB72yJdmaSs4qCJR63xCTbkiK",
  "key22": "2efJqVHn1o7Hx7248y7mKh19Er1FgToemUukSXfdYiTX4PsYVao9jwnfWNY2y6vgF51rg7DaJEtaf3jfYKHrrX2S",
  "key23": "5fBixZjRpKZ56QuonYXYstqXwYBHUDEzLvJGFK4xukWEcdeCsMogDH94BwQX2p3RpufhvtDKjLL9BxbhHTDHS3Az",
  "key24": "3nB2iSYYmzPa46Fg93tE7HBcvo6LcT8AaS3PVXTiBWLnK7P3azbFKHdmkdNvb6X6nV7VQPjioyKLcLdFFTLPLTXb",
  "key25": "5my6HFA7vEiWgBcHtntKUavd56uLXNbvudKfLR5bWZXvKsgFv47BiAkWpyUo86FE2CTou3P4Uepx6DGfHoP3G3JD",
  "key26": "fiKbSoeiB3W7Wc1FcenQerryWabKUKcK4CJqyy2u9wPKmwj8naYr5HbePTF5xrbifywNnnCgfASYFPq9wM6bC1h",
  "key27": "gCpjTjWP3oTpqCAHqbjUNk9WJk8qhcgowGB1YGryLs7Twgtdyse4zJ9S5Jsi6nHDMu6oZvifWPWYpxPfKQ4Uiyv",
  "key28": "5Q5eFG1M64CB8wXpgrSHTby5k8Ui6U6YYBXiUqaLR6oEyGhNK1ESapCw5v7giHn1sy6vzpc6gkXvCYFRmSBmt3js",
  "key29": "4buFoZ2rzpGCspSSeXSZNFpza9ixUK3DPLnUp6rXP4ACbShrLfPCEkjCcUdp4aoJHJ6gHhyCycVLjW7bt5XcRTRZ",
  "key30": "3W6phpkFUeJGEr2w7GNcBMWBcdLnXTKaggL2PwPJWuVwocsNNdXRwCaEqvrpvv1t6prf4opmGN8D6DMyUcdB9a22",
  "key31": "38UW2rn9Gh8wFpyuhRaBh1srUF9PiqN9HGJRVCYw2DnesqixdDeQ1uXL85ha9USHgYx7SWvG1QUTPHz7cGcZFMSp",
  "key32": "4Mj83yEERjrQcb8m995bLWrq99DMwhA9P5gnDEaMsJ1rPTX1cPDERY4p9MAqByayiLEaFsevomxVXQgsBnkVdPWN",
  "key33": "3kBE7Z3MaVizr1HUrY85RSNJzRHvR2iuLxCpfhFHsyHn4p2T8h5KhBk7wz1A7U1yWnbAKMsF9cTiYHTkbSqfDLmZ",
  "key34": "5mpeFZGWF3kohMPq4XfEYEQB48SkyYQayzHY4PV8F3QxFTLnqWwX6X9i2rgYz31zkdYwvT4ScHhgNQbcQxmrKcKz",
  "key35": "3uFfhqx5aVzQphdW1qQMM4SjmStd29A1hyZFfCPZW77PDaDQukHTJrhKefD3xTSuRyVu266RJTSvz3udKUfC8FBa",
  "key36": "2w1AEMpC5x7tg6fLU5S6ToApRC4VZDLrHS5NuPLKguMvUatcn6RTe84bUS2EbpPgXMdjtYxBHLSQeiYsf4FWRYSs",
  "key37": "5Ma7sWL3t4MwjPCnqu1fa4hj6TcJ6wG9jLuaEHPiFA9UqVSKaU8K7m8Nh2FpCcywV3mHTfSrrsqv1rbkSvUzakJw",
  "key38": "4dVJ3AVkT3KE7bHZJHxcVE6NNA8LwZXSh99w9JKAFoV1h9NLW7ssd4fATmPf1jAkDvF5M1DMp2PBrDG7tHe41zk3",
  "key39": "2zHo4kBRbHJfED8buS6MoiD879bB4HZZi5p3MMorXHy7hHMojb7uLmp1DGo1LiGLbeNwGSzMYxHWfZbTggrqgbMB",
  "key40": "5GQJixTCqDWs9GVnKDWehaMeBsvdGUek9wmaGzYupVzdzQVQg2sk9cNtFZ5o4o5HLecrrQ5BBAj4McfN9L4SVUKM",
  "key41": "4GNxASHVRm7v53P9Cv9AXJnZjY4Tf87k7PkSQ72J6isjMZj89kZamxMeVmbEi3Xxf6hRSHN6MKZv2ActR2pBEr8G",
  "key42": "4pGiCmW7UsAhT1XKuFpKAJmkYbdariHaiSZFZfodZiTaAV3BBvmTxk4P6VZb54MGUooCnCt8C3jDtAkDwR2dUbun",
  "key43": "3jEnNTJ8f833GqeR86DmA4z8ZMF5AFWGC6sJzrYMT8jNZdeyoRdeAh8J2zhqTy1Pa7v9KNUPLgHfn1uXeWatpoWq",
  "key44": "5V6cTeGxDnFB68HtdVZsinYtixLCtES3KtLrY6FUvAnM2w7GN88ZqjuaW5VV8HbtFocAeC1GSQN86pBhxVLHMqBi",
  "key45": "519qvSWJLxfcF9LwncCfQ3P1ncqSaWVeUX3PUbujKPYDhRyrRoZ8jxhB4i9RdvP3pCx1wMyrKpEvRgXApXBRP6xA"
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
