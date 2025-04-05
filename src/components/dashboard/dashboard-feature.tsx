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
    "4wMrf2fhUU5gLiDhyr5VLqFzYVmHJGWs6qyTi2uLaCDq3y7esxMSot4CjBoQ1rRAXicH83TaaAcuFBEvZh4YTLE5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZN6sRY1pS3sk85ALoJMFuNFSGc8QgfdK1F2PXpALtx1xNb2zrcDJMq3FAYo3FqNiN5YUUQfnBqdabU7TL7sYojV",
  "key1": "4gSGGLxa9dXDFjEaxFK6NB5YsbBb1CEfDYqSwqAnLR2p2shg52GB17KpuEdDmkCkt8nrnkM96KNJch2mcss1PgZ8",
  "key2": "ibRgtMHWn15D2v8gch9dB8zZPNJyNccztuvWNAyVNZh1cvh5S3z2nDKs2j4SzzCZnQtGtfQkCdtWFmX6FEU6hhJ",
  "key3": "ikeB632ds1gLeQqc2nZ4F4Y75kjUTf72ZDCwLCaRPVA7tHNZ2QvN3cj7QCL9cxtqLq39xfHPFwQp4Gz7289faBF",
  "key4": "4FCHpeN6aTg7hnGf9uR6ZLERBTpdpfSKVmDuJAMZUjJJJMUoTsvTSyM1pCuoJeQQhwEaPyYnfTteXUW88iCt97T8",
  "key5": "3fUCcs6VLEirvLPCAQznTS1ozyFnUAW2gA87yweAgXNDhGeKZVuymt4cyYFkFfdUpfjd6HGDdTP8U6137YnavUcz",
  "key6": "39dVdAqgsM4Jm6GsdC6TKrPkS6NjMFDnYmpXSG1w8tNjKUZk96TAf4w6uz5XUEMbEN4iwYo7yoUA9ns1VS1XqSrt",
  "key7": "xAvekub6bMei884kYY8toeXeBvBRqrAocTvWVRXkqr65AFbowP5AmW3HhVCFjKG17ZZTjmezF3UHXnDCL9b7yuJ",
  "key8": "2qBVg3BCVDSPr27f3EpdxGYbuf7KeyZuAVd632hG554wwPrf8TfsTWQ8buMuWMgfE2MQXWEWsMChvrHnYoddChSx",
  "key9": "kKFXAXvFHUZTpYtfLXDc6zpXvncMEEjvtMxfaWALDoJ2U2RaRVorBnvJdmRmXmdFkzS4tAxRWuVTzDvR88MRupS",
  "key10": "476ZiHDQSuqDGAwbwAfS3J5YhpUyz4cKcskgQZ9vyKKFdrRcMh3qD6rWMNTtvYPVNkyinEjbFyG8cG92BkMkzbev",
  "key11": "zjZNt2w1Zst5nFTP9WqVt9haww1oCKqM7386AQSKa2ucGqxXNoL7YzxpCAYzvXLtZ7CMus2LKbdGjn4zuK1UXp2",
  "key12": "2H6hU2iQEwFADck3Q5DkDmqq9ec7UbEszZjuxEDJs2tN9uxVaXTyUWnydozDd778fTbqBvXwpNDYHVxjps1SMiyG",
  "key13": "23wxXWEpXTiGcP6GaEfe94kLcBRWZNv5PzyMEDyaSbz3zDWPcEJzS36ai11WUZAz6qByzqFYo8xrAo9qZbrm7M3M",
  "key14": "2B6nN4kGZQa1G7mAYzkh1CN5Js4rAiSWPGBZQBsb4thxyv7KAUwGLdf8yeW9F4CTppAKKm3pQTw1yemxjvvbHjRJ",
  "key15": "2yh9wMzt8xqYBfDgq2TpNv7mKhgsMnGS4gvUeoLLw1nyWQx5kcJkhSHcoVsQvdUoXngfRUe4y6qxWfSLovrvG1Zo",
  "key16": "42p5rQEef6Ua99enjXPsVNA8uJ8f6JxFhzAS9kXpbG8venVMqi4xY2MQYF3N62BenVkfXkPQHTAu9c6dagUdUzPg",
  "key17": "cpg8KtYtrkSHVZzu5E7PdoSGoy5vuqdWEhCvWpUfPeUVCvTRhDNf4Dc7JzUzPV5paXjPZjeQDTCKM6FDTCyBPxa",
  "key18": "46b6bTsBQKaFEhYMH8CEtBwsD33W8sFUEm3sFCheTsxiqPDTX7dDHFCzTtLxs1PmEFpf2qYaeicdWE6GJZfue8CM",
  "key19": "3Xy3hWpWg3Z7WHYzcvxBkFpVcU9HwM51Xs2uSLDrgNCSAEfggkAfQi8ALKWjTe1ph3qQvEdfqmVpmMG5UWcS1kXo",
  "key20": "2rCeuBFrqpUrMnNysekrscWbNVf5CJZB6ic3VHLRiocT2yYeLbrQecfKHg2ZhsDVwcer5PGzZ5KQiWLXUdo8Ya92",
  "key21": "3Y7UtF9Q1ZMdVf9Yk4BLhWqCLshKu9t5LHuNbaDaartFM2L7cwL6ZwpqK8h1K4NBTqZ3BsysXjvoiGeFoE1hBTuc",
  "key22": "nJHXNX41cu9GKjuX8B1pVVXm58JQjNzBSYkVLitbC3oc22jQnxLGxpCZzyELmzypJcFKT1Lh386Bj4VR5zNf9Ao",
  "key23": "3JZ2wVaZiwS9Chqb5uPdkgRvZnjAJyeU8CGFuyEiuhLWh6hY7HDL3L2gCPVkUXtXnxSziNjKgiPcm9p3htpQGp5j",
  "key24": "4YWGstB8kGb6Rs5HKdv9g97NchBH8c5vQncLYYj44Hs8ofdewHztpNsxnABXZh751dq8uqGvHquks3aPCy4CPUwN",
  "key25": "WNmyUcn5GNm6wb5yuXVHbdJ5FYVsgT3nRuARDHdKwzmvck1vfk8LgjQVerURJi1JmtJkwoZ9bRr2ufVyeo62yEL",
  "key26": "3VhiZpsSf7rZsRBVvUiTYbrHKzYJrsNH16Y8mZV8oAhVnTF5uh88vsjKeGPkeXwu8hDJgCamYefWaRMHzqcqMHfF",
  "key27": "57cTBap7wbPzSuXndmGnsdLQhsNKwUJCch5Wi5VTdkJwksCX8K4ya7Kj2oCzPU1UXgzjG3yM3PfhygVuLEhPrLN8",
  "key28": "3gn3dEkxLPGnhDwWM1dx8N1sU6wXjvwKDw547yb2JpNuW9yCCCNt9YxFsGaj5AXZYUAwKYGmiugaM9cLC8khax41",
  "key29": "5MewBNq2VDhX9qbiLMkxRJUSRjnVchF5NjEDP34PXgz8NnJLcSbo2XsWcT1hoQx4LbaPznJCKBVgArr9mzC57YJb",
  "key30": "2hQPa5jqrk4UkNrGXs9RqzHhxRUuHSoEnqXsKvxzci2wuLFqzPjJULYyKB8xzBiuykBeu4aebBMvuGYTCZxpiEvp",
  "key31": "3VQDWniiMoAePWSucjpbF2nbyoU2kNZV2n2wibhaSEvQzVGjezWBrQbCeVDsXzCiCD7FTWCUcCBHEfrokJCUA6B2",
  "key32": "5YRPrRxHsxCUif8aVAPXa945UprTTQLRaGLu6CosEBZksDQ1KfZZAgVmfVGXEYJrA4AQKcdLw5ZCxLx3EExFdEKD",
  "key33": "gj7fkCKDsa4nC1RWpjc1dNJTyuPpQXqupDzwu173cCjMByNdLW75TpNnxDp5ufkuitLy71eaPn9GapE5C87ev76",
  "key34": "51wBWMw2hyfd8JnLq4r5ig7hfLg93HnMrrBNwRLngBMYrAQBD8C45sHjGcBqeR9Fcv8vNhadQk8Rh9BUaaHDqDXa"
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
