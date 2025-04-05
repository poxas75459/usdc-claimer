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
    "4G9sRwTrxqeUY8zNAY1H5hkndvPW31kMHQEsvwvhxHZwYr8MQATJeoSeiEZobMApXdCuD5Toj1BD88Te7jpijA2i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rP17usWMtcBZRQfy3Boo8xhb9GppCsVroD3xmP133TJg28DULCqU4d8ZbSihJsX4aqnzFxPJp7yZyBvygZN7Pdv",
  "key1": "2Fhjeg8HbzMw3PRxz7JnBTA6VNiepwZBedk6yX2LeYxrW4n1LDAzGaPsdCx5pcZuBmPjCXxPTYBj27ERSombgQ2K",
  "key2": "Si3oygABKpY859dNFw92Puf1hMV7QjgBXvg8VaZydhBg5Nyqv41XA6AhB2FUzpD433ZVxovAcNnGCbFyMpWrAMZ",
  "key3": "2XMgyecQ19qHXbSE3GWCXXu789ytvDSSPjBAunAQgJ2P2rX4Qnd2BMT4irUC9D1jxJuDq1JD7nPSQiWwjgVEjGkZ",
  "key4": "5U1XqG4doMGuBRJai3ei57gCjASEpqT9vJLnEGhv3Jf2CDRS79U5YY3qjx5z6Lg9UebnAUFn4tfB4Jw8mmLrrC8t",
  "key5": "2zdp89ZVcPaFEHETNvcL4swVEdqzq2qybKPEZ2XFmfc7RuW1DQESVuFynD4gDHLcBWdTSPahTX3kTnL46m2oGvvr",
  "key6": "4Qx78HyDNDsBbHEf9Jz6ZFMUnXSwkyjXPhxYETtaJ17ScKBLnAPmbjGC6mGau6VkjGh8iaFxm8BNFnQYWd3wLcHW",
  "key7": "4z7etiZB3x8mXL2kUmstakyhdJdpPLwfmJAWNxq28gSUGsAWo1ts6KatA5Krps6WFGJz2N9DpWCXrNFibULQUdFF",
  "key8": "2XHmYCK9zW3qv4qPFUMpySEp2b7o7HD5pgK16wTRtfYn6yQzXW8ez8tkT7soqoceujh4hmaoVUCo1K1NZHWV2VL2",
  "key9": "5EAQPeLF5weooitSwPSw6quNsDy7TeXriKtYkyM3yWCFRKi6PALTkL9a4vJ1mPDhHNPHfW8mxcStTz14CGpAXH1j",
  "key10": "4xpKVALMz2ksyzicnUyQcU7iA34FfG2eYMzwQQ4Cic2peRwkSR668h9zscMQ9sTz1y2KBvHso5aeRqLbMzByXuPA",
  "key11": "q1nM6rzb36Uq1iYZrzC86jxVA9W87W67djyMEe6Jvh9SUazcjqqyWQP7s3cJwpEYQhbgdADSGCPSWpAg3szqaTj",
  "key12": "17zC9AZDercGMthCUGSa2VxjrrUQwap1pMHXBU7jRbshFmMSLu4Qf3Tuu4XRpofKrcCjbkQTimuQS4R2SQC2aHu",
  "key13": "2EAbFFt7GEyVWsdAKro3s18Z1r6jGeZYAHGmosP1HCiGtTtesANXnXMSPqGQ4KqmG32LBvgmePuN3hPFRToLAH55",
  "key14": "2SyeHGR71vfU7rwMTxHheBiBdm5AXdmL1BLWjGwDWPmfjUi2oZ7PduXawpySs8yaUKQ4sTaXz5vEBD38fyNvcabR",
  "key15": "3jT1HnpzKoQxARzvAwamtGNy7gFyZB3WdadDWdED9NmYxNYXiHjN1CyY93nvPZZs6vEt3jz67hF6rKeAnMP9sNuh",
  "key16": "3H1CFLSwTf3TsJD3C5t2D286gpEucocmjyMGaHFHDabYf9n5DUJ8XEPBDkj7HCh2z5F7VSGM42wkkxUURP8gYCSo",
  "key17": "2MF5WoXY5Q3ng3izCQBPU6CgzWTy1bDf95EC5AE5i8HeVWoE4ESey8MW8bTAhkcBxj78MavbyuHhRaNjZt3fjvkD",
  "key18": "676ftYXprJi1w4uMeaug2SpePJiQ7BVpRqsiMfqDQdkXGdTd9Rt6m2wApSCpz1GUGmcYWtceHUdAnm43ji91VADY",
  "key19": "3LNjNvsZZ2opUWzJSwznZSgaW8UCQepQspP9ZsD2Yms2uV78fwqRfGKUoJqPHFUy5aZmPYspVBCWTQKt6FMbNkk4",
  "key20": "4a45FQkSf4f8ykV2i3y9YhPpTuJw8EDVK2c4hf6KAKt1UidymXzVFrRRUbh5HcBnkKKzCUUTYc7cGLgkfVRYYyZC",
  "key21": "2YYmyhh7sRaLswmNPNUTeDP1fpzaZRGPSUJxDBSGzfHGiX6eCjdo8QUigbLzBEdwdqfd7UE7Zmg3NQ5GamSzHq1i",
  "key22": "aWwwb3knxMbvP9kGWcuWYcHofaVfMnZ6USkZe2RVbqx7aq2fLtQLKmFtobj95qJgnxhxEjo11h4C95DgwjQmG4X",
  "key23": "NeYESJMwH6bR62qWkxZ61rwjH6sBqESebXWzE4WNe31MFkpH78aTevhKnAfMas8vVoyHQ5pnzwFXRo4UvB5CDHA",
  "key24": "5DGymsMVEnXyZHxHb6QKwKVkpbvYYk46DM6A3BYCqUAy8i665DkU1zs1MExvzGuAvFxvYx1nWkkRRDyGUStfn2jm",
  "key25": "2rdCVXZJejU3xFMSpfptsxkojBBZjSTKEWQwuLRRQZATSBfb9XpLDKvpkxoGPBrk37qYh4RvAWtCHFNC8oMKNxGE",
  "key26": "9Bj7Fc7VQkmyi1DE6QqmFBbEPcMCeUbZDp9NDFLxjL5BqjGwpC1n3JBwvbt8Nn3E5vDQBf6XnU6uHbWQGBVhaU5",
  "key27": "5rbBzLDvUFeeKbTfqKPMMKWXC5aWT3Ai4nNFQQmS6kx5hngFFo5kGVQtdLYSaYoHp9YLhaSCzj4x3bzjLPYXg36q",
  "key28": "427DuPrFeBqfiJtKgNrZyNL5XgpyjREKn2a8oatTBkxDjnxMz9FyUY7TkMTijhgEYrWhioHAB74H7kMs55bY6jad",
  "key29": "52wsi1kmAXv9DvAWHcgLX8GyS98KigXUokGBg4hUzgTKjoEBWn345ifvccdLGEt8LwHmtDU4kqxLHmfEv7vCqwsQ",
  "key30": "5wphhVfxDVsUYShULJ3kH5atrsh9dyR1dwfMtVt36qZr6eoz1MKf77Yw5P8cgEVpc4ibyuASZQiSUUuzViKAbW2J",
  "key31": "2wmbDkRijHCDz22yU7rswwNeUZvdYmsb77Lc5v8CgYFaH7B6ov8JsL1dEPsumKTrn878Z2drMfFsAthd8LdCeqmM",
  "key32": "5LkaJz2VjCetKHmyqqu24mCZ9mgBN1rkf7BGXvXXTE6HfQxX2DCzayVbrDKBgmdWu8p7RneurVXjNMdHeYyJCk2X",
  "key33": "3Ed9UyD2PwubjJf9TU83P4hvxZPhsZTnKmTZU2WPqh7vgGaSehjSUqRRVbz1yHja1wkyfVvCDfzjDrbQJgBm9GLB",
  "key34": "2xZtst3XcdnQztt37Dz7bmZdzxjFcL2fX4pWWHJxaVMDRvZ6hDiS4fUoqv36pz3ofHpZya6DMK3yDwrejX4xbCxt",
  "key35": "5TzJRmeyBuQqGzbyFCXRYMNMKdWuuR9nZTjFn1zaAgqMQmyfty4CFf6s9iqFcfgE3ve8dXhWtzGk29GnFciyQtdR",
  "key36": "3tSszdHs7dovnbG9eviZhdw4VBDeVTcUsSDusczHBuFuvBFBJUK2oFRuFTmXrqr2qGXERAGZ7xKeRM7DFzNpj57f"
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
