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
    "1vXLv2VvRpf41gBSqicRjtky4a8Ta4z4GVQ1YDmryTZgf9rnBjmPjiLfbg2YWYR91U95LP6CRto2RfATN1946GQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ByUrHLJnzh6zwxqyzj3jA7im9UjCJwqxAWmADFv1JGVLzx4SubS5VmfRw1MviM3RkcM9RhS8EWzg7BqdMypDT5d",
  "key1": "2AAv8DQCRtvQiLKnYR9Pc2aAsnipFFd1f8CvrEFaxvzyRgZaXQceuew34LeStbvopRvHb9fN4xLNTw7nXhRSEBPa",
  "key2": "2MNNMDT4RWZoH85hP2Db9KkqEiZQ1BUA5aqVtNYAqrRAR67BMX6aC7ohdgJPR5hYmEcDFYn6Kr3YNFxSmSgs4mi3",
  "key3": "3Ah12tFdgxxFmkgUBncLpCcJ1BHi7N5XKzqZm98ApAEbknLwUCik3UE1EhFe4iLTm16DwJ8YhY82aGBSoD2GNBPC",
  "key4": "m1q2tt1h3hmdPSEGnKwoDsHMxZafaa4pbqjwRF4WYHUVX11nSnhYLwHCMnrL9Gph6f8CF5GreLeZaFS84dTKjAn",
  "key5": "BKpfC8roBQcukJG5Cmf74HaMSXfN1gQutMUtAhpHvM8vVsqxiQNNjkRa75KTbfCxfm12mjAkweqgsQSNfTtwkc2",
  "key6": "2QzpkHqs6kcKEW8UMga4dAo4wqReSgbW3Q8qEsStZ8yxQmzWUb4xSEdiihcgy1D2quLQADRTbKyLxoj8iyJnevEu",
  "key7": "2Virh1GLnfFWrEQYgJNCev61K6dmmzDZGAgLGobjtFj7ACgRaxtYZ9y6yVHe3Zc3YXotwNnXLPaBLK5a9z2mPg7V",
  "key8": "5mDF9vkecnHmGH19VRGhFcEMeE8TQPdPgNjZNb3uEso4xuanjXpbog6EqQaVAZvwXNStymcesiEhHeBVogoTzrMD",
  "key9": "2LRZ3VaEyxKPH2nvTYALKfJkiz4VryoVN5DNFsWcyVM75Zjc8CxKfJR8rbkBhfiemo1xBDfycqyW3i3Kcgy9Fuio",
  "key10": "5qZjksTfzr4errX8vcA9244woo7Kyf5iMzWHfeLrCgCTN2eo4syWbAriJPebenmDXxumoTJj3TMa9hfhDbkFSX9j",
  "key11": "4h9gsy4k8SCAMPr7NpgwNCqPHqjQuHHAgLENzPFng7J2SguZ9UrT4MiRD8RkhJDeEHxFvzP64j9FWcQjZnx6qaLy",
  "key12": "37s3xnuJtQ8FDam7jtraiX9mhUS4kGNFjUtsKVLWK6UoJSX7wZiMLnu8CYp9CtEL7m5NQCCrd4bvdxCSS1nQM3N9",
  "key13": "4aF7Dxsoq8cBC54Y9QsUhtr5mhjJ6K6DshS7w8j6KE4mh8SjejctE2dZdKds9iKMCb2PXu6qePzRpeytznRXr85X",
  "key14": "2L1P3Y6SJApZzc1kPNHaKyQfr9cs7ePLRYxsi2surY2weFnrA6Huc9TgWXwG6WY9qfLPcXZ4Aeyammcx9c2MaqTW",
  "key15": "2ipcGSFGGoDkmT6Kda6NHSxesAthbabfk1UCUBvexBcshTGQiTniwLjgvmG2BVe27F4uRgCKQZXzzQVWvGfKrwaU",
  "key16": "2kK8MzWjCKKyhKJaqRcUnS7HTPmQj8emfMCp7YACREHmGJz4DwxkHS6amQkhshHYWczyihzXQMwUUaY9YAKpqJsM",
  "key17": "k8rTX2EvSr4MFfqFPeQKeAfCLERzVuN2wfzP8FtZn5gD5uiurhRPtMRV8F9euPPjy1Kr4bkVh5BEHngZmYeJ24h",
  "key18": "5R2TnwYfUEwFn16dHai4wqTZCUgKeiM95hmsZEVXVnkZxSnkrEALyEkJ2eSisLUfUR1LrDATG4f2tpJKpRXWX6Li",
  "key19": "4u4VVtecvkD74hjD3seSsZkJEEoCvtEbHj5ACW9qRiXoKHqY3dvQy9LAM6NDzW9eU5dtNCSqMkLdYdU2q5K9cUbM",
  "key20": "5DUxGcFLhonq3TdFtyvrdURjL5hLkm9wWp6yVxNv8sXYqd3ohCxMPXDhpfqemEFKoi33qYguF9CE4PM5aqJBdAPN",
  "key21": "397sfhPFzUWaj5UPLd97PiBCBobTmVTFD9zCrJ2pDEtFoarxgkhaUPtE3GEPzc9zn39FuegnMpfEnbgD6JFxNgyR",
  "key22": "31eC6wEqJ76TDQ846VkmQUUfpwxU6EkQ2MrGxC2PEb6wp4YfLx83QxYbA2S8VTiqJ9zwMiprgGYuZTowPHJ9tZPu",
  "key23": "L9ociohNuUE5p8e4KPBkQrtAWtELUHHG6u7tNpYJvwuHRaFDTKp7TE5AkPyvUSDFoXEbporooxfaJyn6B11sEjR",
  "key24": "5wssJ8jMXCmBne1MC6LLHeWLAd5ty2beS8i258hcZ7pV18EKrYD1sZyKxhG2j7CAU2ZnYribeXf5buntPyCz2Jo5",
  "key25": "2J5iWomdB4dB4e6HZoE662h616vvq53okZECoDd9RdzS8kdJKUgTvQkoZKW5jeY8C31iVxGHUav6CgbcK5ZtceXx",
  "key26": "NfD8MhqLiNKhvF8S4XeTazT537SbT27mkqCUMaKDSDwS75FumKW1E8mwWPXGf7Z8w9gzCEZduUs1WHcWPhJb2yY",
  "key27": "3iYUe45AU4xFaC2G2AQYjoUsmjZg3kFqmepbZgJMwjc6AMDKuFnfbCt8u3AKux5CjGhPHCQigzr5UUknhSo5qtuq",
  "key28": "kFcZjxfAX3QYxgqrpPc8UmA1jU7r7A4FvASDd8HLn2o1YBT3Wb2dzr51xPFMePgZ29ggrbWwMeYiq8BCbc1x3zX",
  "key29": "4CRa4hvLP22DTvTubb1z1Z4vZ8jjFBddmFHS6u1324JkidDteoYiq735KR6ZdkeR3ojzondhSpWNUruciEv3LtNV",
  "key30": "B9uMPvQ8NYtVVj3TsgeXxNxfMU71888cwkkVfSMCwuQwNBrL6M1sfaZn4QZXZ1VrFyoNNTffZgPuwSANnoNirjr",
  "key31": "3HoKG3ge44EjLzhpPdPAcLZfCfch8srnBVeU6XmpL4xx6AhsPUKmLxVpBzwaSWxBXEp75eXAjqzx8M8E2ZtU1A2z",
  "key32": "5mnA8QrPUro4P4NxBFfPAEVnP4dAYtWZCxt7SfWTNAFBEWiACDLGoXxCTFbgWE2eg29JHHUHswqn62ATwrnYioHM",
  "key33": "3MqmgcEbHqGsonW6B3FS9XT2yAkLBycBPPtkavmQ2HQn5za54gP8cFZc6Jf7cSq7FXrpgBnRvjJfNLhfmbczJSyV",
  "key34": "2CBLUqw3Xh6PmiUmgjAUSMnQVL31ygJU9hjJSHBMHQG6LYhzYmLFb4xE9yqumRx5BH4oF5p6ETu3zb8xjXA5nzpp",
  "key35": "3tdbb33NsgfGqHkiNFnXR88nnKwBtRwYSBRY4bHoip5SP9HBiftvZAgXBvPaBkUpryiYUpK4Kb2Q5Gnarz1ENuTf",
  "key36": "3JQsSQL8ZB1ygisjmmFVRH9RzPeaSzi9hP3dGtNpAhmqkCBgnhUPDGbE3LcpNefxuGJFL9vZ4YpPF3GeNWQn9Hmh",
  "key37": "uShvf5BVPCRncKbkChq7ZjTh8vHXLJpXG57FXGQGS9JwxtAZN2x3121ewZwtpvrB9qbDUo8JPqnCRz9YbFGXR93"
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
