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
    "4RkaNSzs91nREYKuezXkbKLhtUYYuS39bjykZf4mnd3HuAfyurHyBqZdbbqFtGDW1JWZRBXBrFF8E4tjD1xh2xMF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27H8ynDUS6t9uqXbqfqMsTGFkBDRZd3xU6rRmApuaGBfBV1WymrWo8AJfCxHnoP3MiLYkpco1eFhDrRoqGtofu1Q",
  "key1": "2WmkLr8vrpNiEC2j5gZtcZHhVz1Ain8pspbrfg37iPVr3iytryzG9c5DKyAsEYJ5Y4KP6Vk6JxvicrSDyTH77jMb",
  "key2": "2N7sbmSdA4UCDybMUfwJGeocSJSkLDz5efpDXgZhivXo37NRnMY98XMZVHRWL3172TfspTKNyjwqxQgyG8crbaCH",
  "key3": "62BaXJemrjzhwKFdCE8y4275PJMG12V7A6iSHj13DR3nsZVdpLgKDRvi6T3gYGsPGuaQo94Mq4PmzAr4F8DbuuNW",
  "key4": "2XRtUJ48K3BCD4nfpZixcBLcxyuTiXgE3PX3UrBsSvjMe3X98gFafBuHwPdfMSkxNaFbEKTuPbWGiT7zHjYH8uzd",
  "key5": "5FQmnQmCCniLM6oLbA55uoRtS5Fvk26AirZTAuEhBGqFeFy4ue179e9VMdSrPtWKAe7u3kQ1aRrGzbFSUisKPiLj",
  "key6": "5BjmpGAp2aUADeT4FiivuDLBunKKBobu4FKkgoHdFYGNddnmRMKWiSEuFXEa3T6jpL6WxKSWtJS5KGFg7j4FRrJP",
  "key7": "3ZqBkV681S3bdPBRZKhx6eRKbzXYqJ1x8tENn94mTpmcoyzfKYT2wmK1yWGH23qauBmgN5jgVmdxN8WrfgZjJkPR",
  "key8": "42FNoTxvSzd7gKpreLJttxGdLuwvESVvR4gUsQRFEcHwcDWWfUvue3TV33fcZXbS7TPz2C3dyFW35xpSby4eEf5G",
  "key9": "Ye5AmzKpXDorVMUgKbYVUdqgzXzJuPK2SJRX1Hvxy4VLRWHvwjeirHxHVZ8KLUG7WxooA3vSguAScwFVgokZQEd",
  "key10": "3N5FwUCm5rfpm3DVfjCPPehTw1PKuXCbGcWo3bC2txL2f7TUwUEWErtXnRMZQXaDb4LMg6b7XfnhF8TdmSyfL3ox",
  "key11": "26KmHLtL8WkKZopCubhohvpsGB44R9fCUeusvNieyU7PgAqogptCeV5NaCwkSGsmbdNJNGMkxjAh8WQeWctEHpXL",
  "key12": "LZC5pdTvSvwsmhg8foN5KTwRwp3EEnGsefEGx1PC9e5GDY4KvC9qjMwtJcYQKwPmdF7FA9aGd4fg4tWvY8qGYGR",
  "key13": "fcND94e1whS8Dictw1H1udNW2zjbfw1KwBmocSqhfSyRzGiUZpyjgc2KnbfS4ZrhXNqnu8qVKJzz5Nzcx9omeDR",
  "key14": "fANitHuZJPSjBQWrB2fsRfeJfQyopbhDebV6Z6uYjV5EJbkoqoQLHCoKSb55C2UjVJ5RicA9Fu2sCEkENghzsYG",
  "key15": "3qe8yrqVVaUHW18uCnzgr7BN3am6u1ugzsV6hygdaKHhQj7WXQCY7oUSJHzKZGKyvGaizJWAXMEeytHdcqvhDT9E",
  "key16": "2TtsdTVMNMQ6nCM9ZZSqV1AzDsdM3Lhwqd6CDYYeuXxy1bx88vU9XgMb3h4ayooN2NFBzfN8aizp7gMhV99VSRZc",
  "key17": "49S1rSoS2a2Ro29pBUu6yKs4iZ8MCYWCNv7o7WtynqhLghb381vNGbYBtxxzH9wCuW6pCrPG5PRdU6hniHEiPGTR",
  "key18": "5iVhATEQ3KJRXapScmYAFHY2uXmMK4enDaDisATGSyGRMMuw8m7Ju7KgijXmX5Z7stmBjzun4vA23vqhx3QCp6uq",
  "key19": "56nFVPiC3JmvmxsQFvPEj8FdD1RLCNigHcsp6oqvJ74GKDzzajr835cBDLeeaTKa6VyF2WGot7iixdwVnJwQWJnN",
  "key20": "mdJLKFFAZPujtgdymSFdPZt68irQ2HvYf2DSr9xjAgCw76Vm3ZYATWyJrkFtLRBY1QSTsPnyZMAYHLxgZ5i3u19",
  "key21": "5M7G9yuQ5J4PAWHXAHiQSaQENMayqYz1iTxGqTFtHk9LedpQhnciUjWDzWomgTgs8MD7gwE3YpmDgiBsDuB4Qrt6",
  "key22": "sQLZo5mVEf7a69BBKp2jkByrB2za2ufnMP4ojvQZxXzKfzTCLPrQkykjzzpPzt9LRL8Z3K5f1XaKcJ8VSHdz72e",
  "key23": "3T1DRGpnFuRYAedZPwYYJw4JZAbyKUdxTUpxetmfbz3yuddbJAqtHFjWmGmS36T1XjmXnDWumNuFZgmuVHa1K43i",
  "key24": "3QT2Wo4qvSjvcc1Z5mQh9TdYsgoGicQjo419Kpox9zBQ5HQW33SjBorh2vc3cd9VuB4gpew9J5NbNBn9Zjw6YNPL",
  "key25": "2DFrbkkazXA73B9UUFwc49rMQyyjrfeZsTo1j59LKNws4oJtgaw19ubxuAesurDuQ9T4zytKupAt4WosaEFjnS3Y",
  "key26": "278uoVqXDcT7AXS2k3YQ4KMpKCkdcUBXuYVTMtsZjJSBcyvkS3yDuqQ3YuypKXPF3cQGTAB5h8Wj8hgxQsvFTpiX",
  "key27": "4uMaWWTz8h378MZEPqMp9McfRRpc4uF13wsZxcgJiESdf3EEhYhAwp5k9ya9VDAXp9ZZtaWKURu7M1sBSnZkuXM4",
  "key28": "46ABunL2542g37hKTkohmKirDfNTEEvKBnsmuNAEUT4QaRaKRZeUM5XJptFEzyWZiYSoma6FUZPvVwqQFQKx1GyT",
  "key29": "4aN4LrmdDPy7DQsqsYZtfFp1bJ5dbJbUh32W3pS5q5sEkss7f62hzisPABxxJNeBXRJXr3ffWQTPAqirkmNUDGRT",
  "key30": "vsFTAwRA3Dxg1FdMYeG4CbLApzmzg7WxTwtowLLN1EmzM6qKeDxG84Q12NPuGgAmaQAMntJGvw9c7zVfQDs99qG",
  "key31": "5qTHrCxZNRfrZyuztpMsX1JLkyjmRpku56qxv1QUxmAj7HxysPeYno8dxBd9wxtmkn5XGJiocPdAV52GJAjuKARf",
  "key32": "62guCBi9eCxQRBca3SDvkTSGY1mc2nafUiKdrvbZWTQqdGGEg7BRVm7QeMJnLHaFzhUGFxS312bxw2gg42B5X8cz",
  "key33": "9wb5fvx8zsSV5kBU8uTDk2Jgs2PmF3X1CHbuKLPvMVekc7JZqBbowhJ8zzzE2PyT45aTESvMFyDn2jNg1nD1m4H",
  "key34": "3qHYhEdsMTB3E4tcP9aDGzzAcWjsfVxtts2MfyQUek5fTuHYr92Q2UMhyjUnWBLSQz819uCR56VX2rk9qDytaEeL",
  "key35": "46fQZxAbC41sQbA9sUoZQ2Uqo83LgVGSSLu2nxh9S4ZAWFiUG1D1EQkPSdN9tBehV8gH7wfqPPzUj38cTLkpczKa",
  "key36": "3RAWsTgtJCZm2x5px5BcdjCcjCxNNEwSan8AG9jZjZa93eqPdtmVZeYZTtqsPkFTpc3e5wpvQqgNAcbW8e5pyoeG",
  "key37": "4cgvKvjnX8RMezpgLn5kLq5xUkFudRBx8Q1tsMuyJyBuJjHDYXVYkmpMQZuUx7SnoY1BN4xvAo3Yq2NqhTBfJN5q",
  "key38": "WbQ7Czs3K6eATWz9Exky7Ecz5dPkWBkb5Y15HsdTGniXLWDWSMj1CH4T4eevUC8ZyNLUgYCp6ecP6wS7yvGPu4S"
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
