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
    "4pK6yppvRoqHYn2evUXmZS8y78nQUwAoHAjDjRvvd8ufPjM3nXPJmBsPnfPZhzXQb6To3iE4JhiLvkhYXkADe8SX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RriUKs7QJ6zcXHB3aWttcn5LAn1r4fcH77Lu26kbTs6u5Gxq4QL7cqJUdxPGZEuaNrVnH9QBms6T96jFeqmzXmG",
  "key1": "3DWSp3w9g54eSACvYvkmU5PNtnzJwj4BfKDN18cpakwjtTY96Z9R5VqCWrXnZdBR7t131v9Cu8duwQJzJkrMQELN",
  "key2": "ZV1iZus5j117EGFuiFEK8HrCgnqAtx9zh55ir9YpzNJMtDBJRrmNKzjkvhAgW8XnBXyNCQ37WikdXWrvQDAV7Tq",
  "key3": "L2YTynGhFAYefN4ANwwNbYhj61y3T731dRnosnriGAzFyGmJu64JWp2pQct3Q3Ka2hS1Uz8nx38Hv8aehSNuR2q",
  "key4": "2qbZTsUgoaY67AruhndznMs9u6xRTWME8SiD8X7sAUJ8ZtGcPrqPSbPGGSn9yvPFvrj6toWA358ZB2CMFozzraUs",
  "key5": "gu1YypP1J5HhsJau2Xo1y8uvgrFzCGXL5V9QqzaK9WkxApqFN3i35yBRNUq59npgNikXbq6FDAm5k2rHkTNGN57",
  "key6": "4anF5xVAkuU6srvbWfN9zEDgQskZ51P2kvaLeLwSewnKEQEAn31TffbFYbGk91e3acAAHw1NiT7PWmzhKp1jfRHZ",
  "key7": "kvgcAHTTroiXyjx4o8j6FkL8Yq6UedyfnCkfvReaBmTojmDnFpN9moKXzCcHB43cgP9suKXRCYVifijoVHL5EGu",
  "key8": "5khyfk5129QtsD65jsfNDA26BQRkPayrWnoeLXW33VGF1E6TFj2bUqixndSkceM8ox8ZY6fUNUh4wR5JQ2MtVbeo",
  "key9": "3zwf93axGQwFRmB42W62THozib3iqDMV8yTBaZBp8e4McNqxTJYe3MQ8xZAsD3zytg7yZmYwc1f7ZRo4uwLyyCUC",
  "key10": "2Qqv9o6CbaC4MaWq7RU3FZJdUZds18SUc6iNZpUMPtYKHLqQXwy2qif53oW8rKmDXbpG1meU1xh27XBthLxAka1r",
  "key11": "2iKW8py3tvMeJRfj3xbcWoAmBVQP49wNLRtg5ZJwYE35MhUdrXiJxeD75T1fbnM5XXqLZqvGvWLpQUZbA49Lb8fA",
  "key12": "2Ykwa96nRN8TDAaYzNfs8qKDnSHziQRD9Ew8oZkUx3vy9CRm6pbeoNxAPvDXe5ZPzrqzuEjZ3BpX5wEA1LKoAu8n",
  "key13": "3tHUNJCY34fKQPsszr5AzScgZzQuDdRZoLS3iCVtgW8PhCG9Ph7rVVKTfh5QukyyvGjeP6EfmpZowKHV7hEXaTiV",
  "key14": "3hdfMvF5hJhNnKp4chdPE5ba5426EFGe8J3geW5byFpbRaSYjKimoZcAFFs9dPfeB274E5Ua9WVrJFhd3bP73XhH",
  "key15": "JUGj4D8b3cdNUemaCn9Er6u8LsUMnCjYu8gdAmRx65CmWJBYZRkqSoJGbMg6pqhoprFP9DfavegcvDwVQMG5rfZ",
  "key16": "1h5gFbaZahcaDiaexhpzMTenMoBKv2UN6ZGc1zKFzFU8PgKkxFcUpQphKZ3rQaqXWTmDD1eRZA9D6XCrhtcKgm2",
  "key17": "4JM7egQ54sGiH2qSthmym9DQMR4XJa8ZCs2ZxkP8KKoWr2gmC2FT2oUgv5dx3GCi14xoZqiNRQTqsi13oJJ25Cvm",
  "key18": "mWtAHEYWEGEajEndyquec4pkgjfFeogtxuECM3AoGCzC11FJBp4UG7mWUfb2UMJD9k9STk8A6EYkySGbq1DYsBC",
  "key19": "3UFHh5dhBtpnJPPi5YaeowqJCQFAHdR2qvdi7tvrR5wDEkHA5FxnJLwqosq4aYCqexnbV5kAERNWqbh6uQvxzXMD",
  "key20": "d4XR5xkHNNogys6qNdAXVWNsbiwN45a9xSzmsVgFnZYdCRxE8X1CA6Tz7Dd7Ng8WgJUUQqBgRHmSb6r5LjfYCVy",
  "key21": "5n3GnYbPm8c22TMxpg4SiwUAu91jKEhT4topzNFhw4NzCJVkDAT9Hcen6Z59ANuEYQWut49Lf1ugVPufovXZttBo",
  "key22": "FXPXaeMmaVGeTjx1zecLXeLCiP7gdWkwgscuR69rTGyrqgHiWaVc7jGYinRGCapbVLPs6jKB9TmJ26XpKuXbXrQ",
  "key23": "43PkBqYsCXX68gdS5iHCtzmnrzkdhKyJDHaojaq4BMR8PsKFhPBrLku3Q63zoQGeGv4p7GJhDz9diF9LtnYVPBtw",
  "key24": "2dYTrFuyowMVV9kZ93yZWDnQ5qQBL3AohaVYE3WDZoPwD1Dg1GeCz9WMbuXq7QEvnbFtKkdfAGtn2rusZT26uq5t",
  "key25": "erH3KTFJo7ApogoLx11gbAqdwNqdf1CBq3r75Qi6LYB3YURtnUdj5ggeBxe4ZLywApm3NcsaTF9Th2vGUsY8pUQ",
  "key26": "2S6juMSPnNeXp1SWquucQyqqA7MivTE8Z7gLauXchCNpdPuv9Bsy8bF9Lzc1Yj1Y14C4E7d9EaSYfdE538wpRcvU",
  "key27": "31vuyUYeJu8scYa3bHZyfTgzpz3odKd7q3M4LE9qoMxnHs8dRHas67XkuSWgtN8qpo9padZeLD9vZrFY3LE52YRh",
  "key28": "5Lcgt3SwTpdGwD8XY5y2GpNX8NVtikiwbayWCDwDAg8iZxQ5vQLjir6uXiN48UXyzG7qZfgNHo9UUigYH2GR6Ygz",
  "key29": "9Mw9khbaqHv7D51b28AFRHSgcpGkemPsdBdQgd6oWmxKY1d2uiAS2eoXgZwAq31QEhnsNomkSAr7MedhpSNWzwi",
  "key30": "63gRTkLT9UkqHtA6KcEaea8uLHapEG2K3f2iceQPU3wmAVctKzZSnwQFs9stVM43UTtn7eyuu4PMunsHPBr1Q5Vx",
  "key31": "5RSgKaD5wNdwwdiCtzne4Wc1Yz2CUci9quWi7Tj5nSUofMuhGBAKoQeV5AYp76Wv2Dm8CV4pFBJqbCp4eNTnUp5N",
  "key32": "v7tXCHBkyxGicKXNsuQ8nWoe1WtfHfJT6HK9DCEf63xWiNio9wiXDXepzHkpvjkNijYpgvMkuGRB1V216LqFa7w",
  "key33": "kHa23zeCnTFDd264HeAbHFy1uFX5Rk6n22CJhBxBEvGgeRU4gXCWJK5HTduQaGYBSKx2dqZHo8rLTsPBg5XircR",
  "key34": "ZkdJtwdVB4pE6xGsNTRHE8A6YHuuoScWvWZePBraoH8KkCmsLucYDetb2aKWjLkvT7zXeBcqwnJibGBF2gcgkxR",
  "key35": "5f3tqJE2YiVFXpkrV9jTxVGs9niiPfd65GcunuRgbFo6SSdVxT84ou2jsYbhaN63bJShyh4P1SSGBvVAuCT514Uq",
  "key36": "4whGkorSuVsK7fPaoysDXhvcbmM2gBXdXZSh1iKDWj7T7z7CVDaFwk4zZGZacAx4p7RaE7TZ67H42pD8WezQzj9t"
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
