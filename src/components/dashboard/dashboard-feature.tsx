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
    "4isx8EhkKKCrRGDPYZwa5XaaNM1vgo1oEbcHGxWRVwypqeT7sMqW6xFUQVq6CDq3e8wvkGxhdZcGi72xykcJYF6i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XZCK7kewYypf3msq9D5Ak9AJ9b5B7iNqS1X6PXpU8VKJgmkn5un15LPynfwPzrfoetDWu24ycyvgTnz6F5cwMBd",
  "key1": "2QPWsxeY3f1gjAfzvKgieYKt3E2me5KUhkL7QWsPS5q4eHK1eZaeaRmzH3GYYMzMdzQRNc82aTkHZKpjwnfByDih",
  "key2": "3Cixsq9oi3FdWqh8V6YNYMnk8XP8ELzXK9GrrzGjPpgkJusBFrv45NVK17PBV4Yo9mo7A2Kgdy6fTXTKKrViMNXL",
  "key3": "5gvFoKwQKjj9b8uRQUksddChigqcxUcaRpsrP3HbtURTk8S8s8Q6qf8fdeRTvxoX34DDFbuD8Lj7V1z6scKgu3FM",
  "key4": "5Uxb2Lj4mbEBaLgTYfPyDSLRiWWYr3RzYCnfyQzTVSD1NBznTAAwRCv9zibzYEZcKThrsjWj3PJzrG1j6225BFfb",
  "key5": "5EY3StTCDhPuDsmcZ1rkxf2e2Dprnb26t3BBTQrxRfgor1VraFfdezeVqpDcjQWmzFtEe8uWJaqLcDKG86upZDSS",
  "key6": "3kYrRBqnWXh4Mo1jxFX6wnSEQzM3Zx7gKxJfjEdxc7bYPVyWoVp3oAGrbjYcSr8SsZstqTWDL2PQzgPsmenJv8va",
  "key7": "2LMWQnUXJxu5SzvFqoWF9M7QrGKu6zRA1hceNi9R8cA6D231ssdi5s1sPN34MKG2dD87asaNfNocFmWRAgsicnRq",
  "key8": "m97wozaMuCCcaivT693WAdWAMzBBPbCnmbihkDi15T99UbCgeTjn1RNW1PruhNTQCxD3GNrHKoF3LFvNZWrJB74",
  "key9": "4p7vEDmBjUER9Pzkw9eadKCt62RzmWssbtMQFEYggX3U9wYfXJhdEM5JxE1ZSwZ4zzh4tJU1FMmnuEoMf3Grm459",
  "key10": "3dBvexaCG4fC9eujfmaE6HqytfnrxaJBYLHnFREvmdQzPuAMS8xWiE3YQLP57uoAm7T3DMsqoLdsJVY8AVymXJi3",
  "key11": "5ZPu3ryNd6v7NUtFEeTzZjfRnAwqZTywGt7t6uphrBzjjN7MvJUBhdGxifJ68pUwP4wkEvDyYsLhBmkMyiM4hnD5",
  "key12": "4aS46Zu8SGbP4w8yZ2eA4wCgZEtftT3GcQ7DtNUYQKhBnnU58QTWW4H2az56WwyGNJhhdwR59NFm2YEUxGbqx7oS",
  "key13": "5ykhDdxf3T6dgnYwogiF78ZJHGr96wR9iZHJNBytVGPYiVqY9G9eZE1VExbNCjcU7ooH6MGnEkGTFVLkiM6CBxUu",
  "key14": "gWQjJ2TiUfJdyfAnesMXjH1XEt7WcAp8h4FsJg7RkTGqHmGmRzPEe6ZmwYeq7mPohFP4iUsVZpnkJfDQe5D7YxU",
  "key15": "4aszvjkfzXXmnqUUrcic5R5anxfXXYd39NynMjhKvJGvSqxR63dXDdwCqAfR2t1rhdf4LzE5skHYCy9QAANB8Wf6",
  "key16": "2rEeqPQUar63QAqf8fxcCRYxG4vneVeEjoTLGMfsKMXJJzENiAiY4zueCpPkVmAgPhvYSaaCv5sdkDZHfrT4nWp2",
  "key17": "5qD58Cv7F9MsP5hercym25Zpnnu1Cz11i4YBV2oKTG3Qg95KUvEbL2Drtc45zX9DdhXQyAwqbWDpLTbj93vfVQFV",
  "key18": "2cUbRiXUtYXa1mezqnKMaDhwLVwkmHVZw7rSiWNq6Tum91DXZmVZbup1BZQSSY6x8eErUSo6ZZBkKzcRqGzoyYPR",
  "key19": "5hQs6yKhWNSmgbqoG94A8496tKHRiirRdx1nvWTk7YW6nPocsKqV2MB5R1VsEJmupwrR2NDEJvcCwdeYDJA9uA2",
  "key20": "3dVbquGuDMLFLCYWrySNjzjCjbwMJZs5qRfQUCTrynGqz8STwjSAs1A5i5eBiQ3HTc1aZbWFJbrK4B8pz6tyyu2o",
  "key21": "NN1a5Rtga9NAsdhiZh5FziXH9DechgbnjJXq5jFsdWFcYSJ7L1Ro1HB2cSTaRRnk9R679eQ9bzZReu6quX5uFST",
  "key22": "2gDFU8Hrcgjrb1PjEN21azUzqnMGU7Li2t9ms3U8gfgbnw8Xi6BVdk9EU8RW8MsRcWKUQ4wdmh9Y36HnpLJrd38r",
  "key23": "566jvGKoBjEEoNzsWgf4weCrLutzhSnRiyYKrx3qKuSrgudnaVSkt1KuPk69q6A1K3mmNreucdN7cbmYk3sw99jA",
  "key24": "3RHcmncXd7HS7JorcYJ7xLY1RphNvktD3z2YQMzPbzViYsLPkF4txvkNu8aYecd52A8gTTSChPNjR5RMspW2C3qE",
  "key25": "4gTvK7Xj4NkQ2HwQaf7GsXrKNfJ5cE8a4iSXpfXtJrXuvwUinKh2gpDANc9B4HUkhsaYEKkdGPopxDXQcKPUYtaD",
  "key26": "35A4C3tMJ6viQMizmFnUEbthmFkB7czJMsDJEiQcd7mcrztcLaUUDbq1QYuVA1mvmXq2TV3ErPHvs5snDPwQBC1T",
  "key27": "5Z811APT9PrPqfVAUDGbAoQB42ETr24HdGfASAqa74GCF6iKGWM7VW8kTJedKGW1ST2qYM9HKZnYjpRVKThSsSL6",
  "key28": "5Goi93QwKEaQk7EQEMkfvetbztyXjaPu43jPRFTZLckzAnEz69evH4HTSPFFceRZDT6uLjut114dTcsr9Rq1hxHd",
  "key29": "4VYmR3YcXHym6zZXzefQWRGhraBY8rBBa3rPRd6yNvo2DbnycPfQfv3QvKWJXc8srn4x8Cd69vvJrpbVpg76S2oY",
  "key30": "2rfW8eVsyV7sm9GnGJUsjsbVNrWuY9wmYMrcygmsS3osQ5bmMBjGwPch8m5R6aRkrx5qEuNVegZnm1y1QK9R9vQQ",
  "key31": "5WgLfxeUZpmxQi7Yjt9wLe7WjYGA4F3tAtPRTsjF6E7NmtTaSb7poNhSWmV84Janq8MjcccaX7zL3JQ7FvYHrZkw",
  "key32": "4Ey79mY5DGUyCwC27W1ziyp5byUxNHjDLaQ4GEBTD5GpCMVKdqhykLzknX4d7xyfg9PFxWAYdUkb8yNxB4dFF4BH",
  "key33": "2NCj3su2PZ6YK9ZsmykJ3FJrBAy1p4p1S5nSVBa4ioWMKa983Y4ymGjD4TwRdtSwujVqhKXqt4ZGoLi2GEVFcsFe",
  "key34": "4o7eJcWxSe82WETtf7V1pvXjqkKFyPfPQruz2T8XG6xsNTUvfi9FoJRTyh1qudKnVbsrs9AejESU2ofZCJEicc7a",
  "key35": "5NLiCnh2rqpNeZrLYbsnaLvT1vu4QbN9QbSQiTHfcgWKzyVqky7Vt8YUGMuP5MJSeTFRqj6oXAt4PCqgXkVUYeik",
  "key36": "5JsZ3SpdBMkx9FCbxNSwtNynoSPLS1E7Zu6X68UMcaznEpHYtvVqNE7XJSj1ug9pKMgJN4kbP219uitZRcDREVPQ"
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
