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
    "58WE44FCkFcMRiSPZoBpkNYr5GGGuqmJigKicmaTzrZFSqMeqVHLiRVKtVkJyx17Qck5BWFJUPz4KugJd1Kbi8Gk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3To5Bk7whr2kRfNVLMZ1Bxhec6c7DWkXaYrosBW6JeB7sEd6UJjYY6S9VMsZzgSerkAitAQnLavj8UmEQPxdnLJ4",
  "key1": "63ZjA93EAT9k8J4JCfHeDgZbcfC3t3hBT9TZLn3sTmZcAodw3bbe6BTeWUVohYoppg91BQLBcZrx1bRmzUeT4Lzf",
  "key2": "3gijMS4oQTz5JxQSvuM8Cv1A4KcdFLXy6YiS1ytxb1YPisZmd8LVsaey8bYAp51zSoFidfDegbHd6njEdV8vRKBT",
  "key3": "36YkgARpDUEKkNntdpGdZRanWvThx2ZsCEoNchAuX3KqET3GUzKmoT12RZpBf856dXZWJnNAxuCgXzZidP4CW2jv",
  "key4": "5bTcekbobApgXeuEEBJhUyd9BkQeVoUoJmo15URUCdTKGSzidAQv6ThJxhNxtZ7nCtdUYnEHkqq9UkdAuAy9NNtS",
  "key5": "bDgNCFJw5bfRcnUQoDpExHqLYYM1BNCWgCgkD9jZjton5VfwuWmyGmoirMU5yhbCMjo71GbcbEQtH5JE57pi6cN",
  "key6": "3isEvLCbuogjNFUTvxQeNCiNPMWk6njPsvJAhc68T38VB4Yr4uZ4ovtVmcFyM41CVpY4AAv8oKf2qis6QNkZeEoD",
  "key7": "2ffX8a3dqu9zPXDyhLT7E2T7GddDNyd2VPuGeQzRU3RakT1ySy4iCcAthkudaYdtrLpyPBjH1gW8D8y4X8jPcnxv",
  "key8": "5JeQZuFXtM74zeBChydM1oravRMCVWD3BFyjTPMxWGtXFK2DxEdtVjvHStzBHutTJ4qJqiGhQ8r99PqwQAWSQuAc",
  "key9": "66SZTkHFK7gXMBL7nqyTSXLvXrSusUcAUXW1GzFxALXn7xBZUnrsTbvcXxb2J67EvzWHv6svFDKsGcerDoz3sak8",
  "key10": "3B8XvciaX5n4At7xSnbfh2TcF6nqfLajtBPsssyYaaZdv8T3Rw8r9LQpsBrXcJsQLqWTf2jyPVCNLSJRoZVeQrQ3",
  "key11": "67ktophmVuEvUwutjMZ47sQ8hkwTweygqsgDfWGaR6ubLvadgxn6WcuDFG24TtZXhQ8TZw244WgkToGiFPU5iVjT",
  "key12": "63jkqrrY2wfC8YXPxPjVpxbjzqLLgotN2dN8AQahuhtDvsXQRMic2hzJUcHsYXioTRjoCCL8sVmAZdhCYXK13UJz",
  "key13": "5Bfon8xsgDC3HaNmnsU3htgxNiHaN3NUAT2jH6YZJZ9L6mrYLZt8MaxyP1U7Vw9si77x89wvUXZWMiB4gU8zYvGR",
  "key14": "5RrXkHTudoEJ4kRoFKRUBWfhKGLMEsS2dRofweR6NZ3LKLzxxDnqApugkP11gyb9R9bCou8f3cBD8MVTPZD51K3B",
  "key15": "4Cu1iKPjqeQLHmzZiicYiw6QruvY6sEMrjyHLSF7devFQ46ZTxD8gCBr2SoBSinNuyGWBLVk6Sq5f5ZG57ddqvo5",
  "key16": "3hMjns6cvWM8DKy2GBipDkXQMnLW2FZUkz4qL5H7zgD9YXpvHLwEvFzRKwNJT7e4QaGYjU9P4uUzaMYV1674XV4g",
  "key17": "43gHRrBpvp7XSeMtANm57DnqZHK3imeeXyXcpGiCXHDaRbcc3buCJWSwvAbY2UMLhJWMqBZ6pcw9cfqdihpbPcHm",
  "key18": "4i6Ftcdd1fntNGTNLQ1tNApT9hVeqxhRsjye6bA7KMV2QGnerX4AWRBAup3cvFrRAyUwgDjMWhLcWaHvkCj2sDKn",
  "key19": "4KhqtGpaw1V61Vmfhw2WjugY6cHHM9KNrNRGzL3Dg4UnAqgZLdSS6guofXtKgKBhoewZ6vfGtNiuvsxz8MVnhA1g",
  "key20": "5UK876P5Ebuyc1rD8zhWXmdZ25yiQZHzq5MTTBDR11UdDz8fe7i9oJgSpMVcaJKJRxmZnick2A6M5dy2THzNgxan",
  "key21": "4N9gjEU3nLXDHVFQ6DiQQxDLhPk9xD67uMNS6aVeVdpxEfbWn7C64dRssNdr4BFbBxomjNNKgpAvvYHef2EEPHaN",
  "key22": "2CyuDshpsgfup2caJ2UZX9y8k9DCrg7CCy1yqA3waXoyg5SAfQVDZC3amyKihoxgtUSDvxbt3nimmYuAkNL4QXwv",
  "key23": "5hRWk2o8uTYMbDHoomm7kaxNjHferJM7ArM8nmg6TWdkBFtSsGX1kJJ2LkgP45frdsnAq5GdTAmYtXrXhXE7PppV",
  "key24": "2PgQ5idH6cbhypGFMeACqpCU8vyQe9PU8ATx5BWnshuPWHcJNw1BPoYPipnofNNVgGn2iajCR4ETmgT26Kk5qk9Y",
  "key25": "4KYmcMU8G6gasigg4dGVASKVRR3GTA9Cwrjv4fuPa91hhMNF8uD8cbAc3FgPn2x7LkUQXDmpXTvDyWioBchVbjxH",
  "key26": "4SCyHfMedxkCKm87VqPdaaHXBJns7B9M6X6xUxUXUPahk7sV9p4PKXbeohz3eZyEhGm8ZAPTC8ybWNYgx6w5TsE2",
  "key27": "3QXS1BtoXkLVEWbesKSsMtn7isUWYUsjFLzZZ5z7f5bMaprPiKNL3Fpp33ozVMwzTAuNcGMFFoy2ZNKYrH275PVB",
  "key28": "XrJJraGWgCfMSKU1NjygoAK5VG2mj3jabHp17WRuUcR8QwfVV1xB1wHCfN5RJpEKaThPMsQCSvwcV4qPchB3m7h",
  "key29": "6rC1qc5KLBKVG6es9z6TqLY1kjyPhmsbNct5R4cFGeFp78MCYn9uPtGrz58Mu3mJvLSRimJTaotLozPBDCoG8dh",
  "key30": "9fZN3iNmSZRxAMrMr1UavVGo4G6onZawLsqNKu5oHP1wgDbrLpBipJcJdrmcYoRMzWyeBj2WHRqL2N1EpiRRkpm",
  "key31": "3Z4HEAHsCutWnQKA5dK7WvWMYUgW7ooNDXvBFPWMwqWsVRdeZ6hZji5irb4s1ABrWRD5EWSfyKLc3Hv5XB8wGWMf",
  "key32": "oTs6Wack8EWiK35VZLgi6QeGRYsRsmmp9PBnB4zVCKGwUFqDVENhXvQ5HGfCju1TYpKXF54zkDtn23m4eesvCsY",
  "key33": "2iYfyantzcQPaDhuLtAaJuvmN5ovrBavVKmXpFRAkeQXVtLUYFGFE9FhArqMgwp3QRDPEXxKePnR6QJATG5Yo3JE",
  "key34": "3BwpxCjqvo9KmFLek299AtNR752EKKpTusJTmudoNbwuc9ZvNvoZJ3QqJwhL8dR1AkjZvSmJQ7i4Yts5pm1yUMN3",
  "key35": "4aDaWg8W1r42DfDfrVNotP383BpsKdfw7mKWc8GXYJK6paZfwpnMgFo6JTHiACmZ6GpG4Zh5MhqhUkZnYDXvj8Re",
  "key36": "2bJFvSXGV8DYL9BjaaeY6Jv8XgZCsJWjoExodxD67QJ6RDb6FTWWmm8bJEN9u6nL6rkTnpPGyi5UgrzW6GGAGUWH",
  "key37": "5kL7ZHmk3qXFyLUKeC1dgieVXi4QRTrPBwpa6BesCX886cveBi1vVVpzccjpfcZC5p7cJ2TiSft1W7iXzxckxs4j",
  "key38": "3o69YnR8zrWeTwJEPpfRnqFj6MC2KYtgL7VUsDFXpHhh25UvHxohWYcK4PMW2ozfNNwG3XPQ3dJL2maaoCza21Q8",
  "key39": "4LRm3mzAXZ7kuL8dSVYknGPg1JzfyxWwJ6DExTUE5FnpYox8RoYgdTAkZ91DroawoWV4qeF2cke6CNRfLGxVcxqu",
  "key40": "tNWTmHTTZVAkgEQNUepRXb69UV4GJpUQZd2149UHCN3Ua5FVYFxiG5CL87VgYaJQph1BVBVR8jvpKRwc1J5yv3r",
  "key41": "M1cuRWEb9zLirY8HWNK6j6LdzTMr97FrdkBQvtscFVWuoTDZGnjbTK1HpFD2Gmd1WSS5f2nqKC6nxA5MSyxH1qq",
  "key42": "5uPBUBk2Kiyn47t9ge5ARjkEbhK5NK3MYcdV4WBZfLscQHnipWjGDyZasEkUJB2pkej6rr4UAGTJ1gcjLfFqqxqM",
  "key43": "TQargLNxfV1kYprFC8vhgBMyEmHYuhfXdu9cQ5twzjETbBY7WN8KJcAn2wLqTU4NUoVW3yWD9LWM9nn84GRjC9t",
  "key44": "3SVV9JQG5e4ohD95qeQXnh5kgHVqYSb4C6EfnmFbrVi13HFTyco2H2eNf5knhtNkkTWyT58gppVmLebBqdF6GJuf"
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
