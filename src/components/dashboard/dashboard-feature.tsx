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
    "5xFh79oyPgBonid5dR2CUaoZfH5yd1hsCyyFMzDA5rxqM1a7mPKbjWaGBWj33eYmA5heCPm8xSuoXj3wA3SHB8Du"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32b8qr5Axp4nXEca7bxy8zYDvzgSf6YYyhrJDqdrnZrh2vpnS8cyjNywnL9Uvt2A2iEmDvivRbAVY6yhhAF9PbDp",
  "key1": "3qNRZNLBNZ57KVAWcCMKrpLYV92H4kNoosgoZd9p3e4DyURWCPYYquy2nkHdquUypZWEURGvw3juXko1soeoFxtr",
  "key2": "5b3Vqm6643JhyMvVGMXrepirT6Hun2t4goME8qzfhYGkiiQCfAfeGtQkyJVeZQmFko1GCvfuKejm4TvqhvZuFH4t",
  "key3": "3WxznbjKsSRTsCMpmUpaWt26JkmEnTcWGS2jgoYiCiv33FwbBs51jH5EzdVUZuMGJoHaAbixxrEbsqqf64hsLQCW",
  "key4": "7436sm5JRtA3FdK6FYA82FBj525ubni6bujYD6Zygdq49ZDKTZzkyUWq3oefAft7SGhEniE494HvKA2R7ms6K5o",
  "key5": "5PZoKDmQGrNRAMpGYUMT8bUf2TJ4YAmq5Ro7hnwigwRXzwCPBVtgEairmhcKHNe9PvwYN9g1jtd3QeXzotCw72T7",
  "key6": "2orzGb3gU6qA8t269D71bhogw67Agohjmce7R1DgNRBLZhZKfAHzxmQsGadjTuuxMgUKGgTsyjRKxfkkPr38Jmje",
  "key7": "2v2ayoK5acCLMfF8YRNPj8p9jySC8ozt48TSZzqsZPzgMeqg11S7gzf66oNSHJ7YYqVjkNAYTtQ1CbCaR7FuQqWD",
  "key8": "2yy2rpCxpwCdARWUFJENZtzVCDHE1B3XWPpjBrywaUQrRf1xvjJJXHgSKZoxE1jECfzo6xfWUCWpm7EaxaUYrcLF",
  "key9": "5tyK5dNYEawAm2zAa7tkkFmMhGkx7sMe3yWCwXBXgczVcDSjHcxqXwbefS8CuenDqUHnoZgVQyhziETpBjwLKQpR",
  "key10": "3QfqxitfmQxSM1ZSeGsXusZrGu6M6jFVjdwt6wogU3cdG1UuFwMu8XUsAEF5883aP17mU1cJpgWyt8hbuETF3gTF",
  "key11": "4c8hXjcjkbn8n2gGSMvffe64mQbeQCqPH8ipFWVp1mMVYffkyXXb5Zz7fKuZJtUinJEnLvJuH8jJArkN2oMEWc88",
  "key12": "1Gi9mFuiV4bCkZkzoB6V8PZrDrRutZpcEp1oHat748x5hGLeGcpqHWjULCyiqzS3EwHS9L3LogpB6rkEQzALHpP",
  "key13": "3EuCdNFkASdZLzpoNeozxCydDyZUDXd1JnYcoGuemw9nExfrot6Q2Zsb35nqqf97yxm4qi8cTkr2T4w1SRqfb1aF",
  "key14": "2RBDA4yd8H9S8MpGfVxEvc5pFwJBrfvLhxSqnn46JvMQTaCkcGXw542ouySHV9C2xNZZUTe7cq1CPeDnS5uEPVCw",
  "key15": "N2K4qqLRXEKGVYMqKzuTdrLgU7CGmMqMAB6DXu4RMdSeKR2KaALZhmQ3bwvRudSjprfBZzDHRP7YbgpHnF2ZSfP",
  "key16": "59wc2V28RQwMCwobcaF6ypDMTYQFMu7LKjpZ4bo6PLCds2TWyB7eQ2a5ZhKwThmtvZQc2NyW5owyhXu9LhkoqtLB",
  "key17": "4trpHGV2vqw1VtZRj4aerq8miEjtJrccLsWcB54m21AFLxjWHCqqqGhLPLTCfoMkZ441VZXz5v67GS65L2jgtnm2",
  "key18": "2WPXZZ6FX8cr6cbHtkScLjNPABeBx2J9Xjnfny2zPj6mowXEWmnKajBzDQ527dJ7XxxgC7SkZHZ3VKKBDbuNKzvS",
  "key19": "5KwwSRXdAkNbirexxrEVQGTbv5cBFKLwzXY9qDkyk3pW3KVLCeUhLNm7pW8o37AKL17Jc4wYLLxz2e3JvkB4Qhwh",
  "key20": "3KzqYReAmbX4DYKtZ1Jx3RdbSMmAdh2g2a7pFUbX9WMSHjc1wCLbD3dufqm6ammLhYtiadXzZjzm31JM9H5e3iSj",
  "key21": "5iCB5qz6Stiv13Y1KfkToNeYvpew26gLqHpxKVUNaqN1yL2KFcJdrHe7ReH16ujVECNisP7fBuWHmCzgbDMUUXfJ",
  "key22": "4BaFQG3C4jfwLW89SGj8nZLJ4sB1dfECUkPGJprrwhuxJihxJngy2S1DjEt96nxcgQAmaGizqXH3Fqv86D7a5BsF",
  "key23": "wAHZaphbSQG8nhD13knm7tUTkdey1tiThAJbf94BB3z9VBbK2Hac2i2TLKPNhNDfv981SGN6UYuZsS7UC5t5TDH",
  "key24": "3ZDbms2CmiHmHfeUqQbKWo5uDMXCALX5PS5yNQy6vjzD22tMgvygdgiXJDPNpWEoz3BxzxyYX54sRxapBQjBcyX4",
  "key25": "63Zi8mY7WagchVN764SjoyUCN2ZgCV6z2HZtszF2yYXwP3tCkSuH9qcxkChHNzDq7Ah5M2YEdXwpDVDTTc1uqPux",
  "key26": "4Ztv9yTxPxLry1nbiwJ63JAKhhHZcdQBgC6SU1zzZJ9efkM8u35kzr9CG29uwfXw9TiPJhoWANHDMFVUjfXNvqAR",
  "key27": "4rmtgxJNykFkFYdAuq8ymoLdrSzmfcN1fCNaTiA1GoNFV7e4NFntEAJVnkNoaohorbnuNRDC3fbbDhzCFUGNZkzp",
  "key28": "21V3jCPWQnFek1Zpta5WJsQRvxujTvRzN5JafNW3y3HRD9MdEw1CLXpXcUwHBrRF2NpN5nzRL9cwBzHcRAw7XzTf",
  "key29": "4NxtqiBEWRkAjzKAxEiCTsdi3uyHqY4Qsqzu6S7V5iQVB8TqciAzx8aH6xfk2Sp9NLrGsSCMZHDfw6eZr7YoKt3E",
  "key30": "3wTokzv4pyXLGXi94D1MDfeQJQqg5aprwa2pLP23ryKJy38f2uTC7L9rU1iRoGXAmcM2Jjxd1V3mDdZY1FNdE25v",
  "key31": "5JNrswbNXF6Jw9Wsi3ukCc8y2EnHGGusX7DJoBYVKZ95z7iqLTRBTvScAYEKarTZp1ifhWhaLULGBNEUrNpfSiwe",
  "key32": "PqvUZYGVLQWRwQZA7kgJGSwtxmpd8yfHQjXsGQJ8zx8xbTJNhFs2YzLCX2XGWNLCVNtAnMc1nSehSuVkcU8zPzi",
  "key33": "4GzaFN5N68Y5cXQBS2ziTM8X6FLBeYEaXRLjtYJzZ6bMhWQMMPkdfxei8pARYC5HELv48M86CrcH38jaVidxsuk4",
  "key34": "66Y4yBiXHM2SCwZKvB4ei18ipRQNWwwvX1j4J6cWxDJs57WfrtYsfDYJ5fjCmQCmfsA7AfbL5wXVADFLED8vgCsg",
  "key35": "Mfvst3GecasQf9a8vHL6J7d3v2pDTXthvzo7rhzsWmtF7zJZzWpJCNc6cmF2AdzUjazW4JMdgLi9M17TsGpPKcV",
  "key36": "3WSdgick1fJuR7fWq5NSNrhxwwuy2FzgYgfocMLB4BHuDeNph5ZbDDk4zXiuZDTDnQr5KJLcCSS3UUN5mPrw9LN4",
  "key37": "49jQ6xuN9TaywYuyWJFHkuMb5iwZREJr9tvGNnZ1SdVkXHtMg5FQu6o5vdwUMcDTVvt586ggXoGichCK3MkNeHR1",
  "key38": "2HEVjiHf6wFbqoGKhfud6Pux9cHJ25ab4o7eFST8VLx3LcvJy6Wj3QGdzPKKCLXxqnw8ZDxz6UmunZ7w9fHE6WLY",
  "key39": "DFsn6HVCXjcPwDUuhvmePRUzrRQCm5v1sMVgxDmE5zQGayg9p4aY6g5We8Jrnzk1bUXbv3YfHgTZJnSLiZqD2b4",
  "key40": "5nkrBbcoZwVtthL7Y7EKsSTJmrvnSDRwqjpoSwQRAgQATdVqvXmqRLobLnQqxjvim5SRiyiNhVtVvqNUyK86wGJH",
  "key41": "TtCTBmqiqQwN4aa4a3ta4VkygKQzWcbGX2ybi2FufEAAm5gHw598WhPXGd9mizsMNvoV2WcS6QkX1Qrmy4Bk7Fd",
  "key42": "49oMwZxxHBy3kZ6YT5Yg6saoEdwPMhXnRGVDYy1NhVSGmq6yKE4zD6ozjjVWvhSiSwdJg2HGCB2BNtQjv4M3Hjcj"
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
