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
    "5ZMwTHQCbs3WUYm2nevypy85uwHsa67kyCZ9sPRhSxs19Ci3XpZ2sy3t6Aei2Gt5ANmcTZHSq1od8UjEZmm6fegF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AJbArGSzgL3CiySRqrxwkN4jf3e8UbVakNzgNuXqw9jShhBduUf9jYzW5zj5hpQtDJrwgoDDCHKBzneH1KZFrvN",
  "key1": "2W4Xaq1vmzvHr3ARMoBLyB6dxvAS1mTLcKKvtRtg6NZahm1rxfxfnm2AbSNhKmb3V5pmJcSooCkE4UimntvKDv3N",
  "key2": "52w5BVjjWrKb1SdeRZLdJFTfyxLe69c9sMGvzL6tNu72cFr6MCz5DQg7wb8nK9ftDKJNcAaB9A6MieTBou3RhkhN",
  "key3": "4dwFbSQ2kiLdp8wPa6bjVJgzuhzMYuKBcPQ5bgKc4rQEverSLUb4xPDDv97qbSW4mKPg6sHR4wG5436DMwp2X58B",
  "key4": "5kFnr7LdeWuvVSo5f2Kv2cwstdgbydJG6nvWytzPzjhe9MAmsB5WySfia5jKn9iETKSwwhVsLa4YMyWtVS1uw7tm",
  "key5": "3DTGKJHrc2C5kM5k3WnTnFX8WZesUa5g7ppwN1S4hpBCHZmSt4gc2v2oREDdwm111s9B7hS3D3kzR25j4rg6w2RZ",
  "key6": "47nq7CUYv44kueqs7fU17kJjbKmEoLoBHGYMh9mH4vMxXFRJr111ybneVagQJhaDVh6pucKoc4Xw9Ji9cfhikiqF",
  "key7": "56CL9hwTmsGgUk8hgnZgbv3Cf35oxeWt4MqiCtBBJKi411ioitikPgUW5x3fXX2GnRrkU58zFhEZwcmLLiPR357u",
  "key8": "3eK5Xy3mHib7yE47EMETHtZ88N7rNSfoQiVR3AErnyJ7YWbaTSyXCjnMxjE4ZQMgUaPGba4KTfc3chK9DCsSgmUk",
  "key9": "2Ewhi41B9C2g6KLMztXrv2gPKMxrMZnv7cwBNNPiCfTGBpASAvDULiwNN4TH2d3wsee8qZsivakpq6zBXXF8P2Eg",
  "key10": "dFbfgiq8gGgsgTBC5Fz7DP5LNjhnpVnvhGcnWBgArBmZrz32XnEsrAEfd3AB6Tz3NE4u2QrBp6ZkJEWeETyMSQy",
  "key11": "2m3dK9bs9ufoD4LdFs5BibzebsHn22QvjUsyMoFDmoiDc9hgYSay6myKHQEZrUbR7mjLitjn2hhiwtYkgii7DQBz",
  "key12": "56Eg62ohQbQyYrbP4bLcvYqSxDck1xzXNtLhJtRif3K8CrciAK8z2pZDKdT5oJJYaKhtrAdp5wy4aJRN9wNtko2h",
  "key13": "2xRYpy8ZNrSyNvGQivNHNa8YRFNJXHkFdCvUCEyg8gX89UaGdVM96zikZ1QRGLsaSExbrUmqWZvNmh69YP5CtTY",
  "key14": "43q3WL6p9fF2KDeZ5xMpKAS97Np3otpWm78Pyihok2SfKtsUiQzSjeYAL4SqgJcKY5KgqA1z5kP6Vy8edqHdGnoU",
  "key15": "5jp5joWp12PVonvdfedz21mzgbKyHWwPCgMVJgQbWcHTZTQZjXsiqPHFxySZieBKq51JSFipMxbJrnAVN1xTjysE",
  "key16": "5wTGtcL3SNHtq6fkKXsKSyVC1UfD1QhKQfC4aymTEgvERQoEPR1E8jxtpK52vJcyopKCXhSpJombnQrqD7W7d2rj",
  "key17": "3PcmzBzHWJmqZHFe9hBm87Qs3wQdDYt6zJeQfXbnUNzzcvQnGKE45quyWYACQXyDy7PMoU4wwngFGVMECB1nGK8Q",
  "key18": "6zK1XtadN4yZ3gBjAshVv8oMLwQNGwfDyT6vwsZZHzR7Xif1vgrjykA7K12i1MhNuYJXYt3aVrhC2LN9uqhBqb4",
  "key19": "168B36eNXY773L6gJwi8FmsR5trV1GjyScUMAipT4Zk6gwzBx9h5reVczo3tHmyCDS7MuE8Xqqvsm3XC7XaZNS9",
  "key20": "2qZcEFbfdzBZT94W1Mv4H4h5ciaHKAb7P4owuGsu6zj455tSWRqMvUE78GyuP2HxVabCknSGmKN2LWR7Z9nBjrxH",
  "key21": "4dnGwmyZSLAWnxAQTVYXLUwzyL7AGdvBSXLT67owxA7JD6ovQ93sNMbNsqvvhheTNwh2p4f4kBPpHamqL1jbBdjk",
  "key22": "MGakjrWnkssvYymwc43czbUXvQLEUsYnT2hDJEzJ3EYYKUCew5oQRKGkQ5pRVUBA2vL8Ky2ado8wdeL4LvP2TzV",
  "key23": "2PXxYU7QiSeUDDxwjJbiFaA8Jb9mpP7tAJ9JqFr6ibCAteX7G7DynXAqrrNGYV5GRFtftnZXdwGXGTQAykZtxFDy",
  "key24": "5UPZrdha89maDA8UVcoZtYWVoms1jWKf6QaJv3Fc6vkkDmJVegNDaft7JuKKCbh1TCQBzEmn9Affio5hu7Gc7a4Z",
  "key25": "GHNHKsi8smHPavzFZjCF2px9LTpzeamoi6PTe8x1ovJLvQi1mJVbGvzMLASDH9rTLxAuDKY7odto93ZVCY9zRkW",
  "key26": "37kEmQ4GHZhsMftSQss3j599xGtURnhZe9Ger9VcqoM8G7VdxcDhNkqim8ZFZ4vw81kuZmQzKEo8S8NXZr6iYxJk",
  "key27": "C2N63J3voyUmAN3Yk61NvaBfTcqQkUEGQya7PUBEGBWq57Wnyw56bGu8zehNZNKCpEMHxZWjuMDiBuz9jBTYWh6",
  "key28": "2ZxKaQ3eRvwLxfHhz9h32JZ2MbX5oNcUz39e2zKVCZZfBP6BVqzC5UL3KnUtoTcfFMrBCPgLPbC4d8PZxfx687NB",
  "key29": "4F7MLSRKFYgjTYqVvrMgg6zbfQzyXGhnrkWFy3tCdFgEUEABtxdz4Vi2A7dp3fQhzTM1XhbMRsjbGfqpfwpPnCku",
  "key30": "4oEMME4vEkn5XgT8kGU1kkgWnEZEphr8zyqhYdtPT9qnGFfLYkPnvPgkvoQdcMYNNrhgiiKjNiRWdBZLx7RGurXr",
  "key31": "4bWr1B7eK54aaxbfLF3EbcCYwK44MVYgsGiXBCRxYkp1TxKiWMyuQk9LzrxSNZLSVygDGh7nQWQeiKr3nhwt129B",
  "key32": "67UXm8fbuenYbdh6b6D4mmx4W2gemjkXzErfujeFubceeAfjtN2DPJbmLS6jrZj1K5TnLH3fyNMqnUv1pkuooNzC",
  "key33": "3nU7v9dN5naM9ycdvqi8gSKkZBgDUxCG6iPGuLzKT2Udfsx5JTvuH8KinLCETyPHB2pskwT2jYDFuUjK43qjX7WL",
  "key34": "48Sj8FRdJfW8gKdjesZtU1tNAnbwc9sNty55R3RknLC5x3e3tWiseutGuKhHztojqjGkfaxcAM2kgQ2fZMC4gNhw",
  "key35": "7e81cZF1HybWzewC6nLFRCTYwe4Zy7xxYZLZKPCjMh62Xb9mDAE5NTsnshATM8LPDS2kwPQsQFdxJ7SaHRTuKQW",
  "key36": "49EMWh125sBiiyDXR6h1m2vLzKWJXa9CtVTvbc3VHqSs5dx1KjjkXdPm8QAwVKtrj1RSUfrQwWmqBXw9vFtcdq7y",
  "key37": "665vGG4M9wy1C5KnM98oVcBpF2eWWZZmDkgmBi4hrd1K9vtJHtKXvMbqUCATajN1uV3AAErsFYEyg8Dms76TBGMZ",
  "key38": "2WTZ5peuh3eCjdiWdA8QRnQv1XJ6GpqbBXMAq2ryL6yRu9qeVKrHwnbaJMsdFA6hxK8T76Uyih6RtzX5ukK4temY",
  "key39": "2MbwBgK67Wnu7SLig8c7WHQdmwDMLc6qhEoRdqVxWynWhPKgXFeRx83JSgra2a3hSd6geE5FCZ9HUw4zXCvu5Qkg",
  "key40": "2a5bZzMWfG7BJTM5JPys3CVqKcScP8MkxkjfLF2Cvsv9MvDm5rgvLiNQmi7yvtrXw6GSKgjZaVzwfVF8HybXPnw6",
  "key41": "4exK8aqEKhrtbNkRLVrWGjUDmUq37rUktz9ezunE39Ha5ZJ3yBpzw8X6krgQ1UPBEopiZo44wdqQWbwP9xYAC52A"
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
