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
    "ywcAfTNCVvNDhhfHaopNBDnZn7bCk6ACfbcJth1WGx7kF3gmac5Ph6zc8EttyM33pdyxyBqyNGLZt9quCBSYMhT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Rt8ED7VKHgqEJLCUEasWABcEaZfXcLrqif7DAh7Zn2DXxdjAhfBthPZbb6tXUGGGVbGQFBrEd498EWCgvMAvTsa",
  "key1": "3Hmqqe3cAGMS5nFiLrYczsYHWpfVbpv9qNxQaYbxHWrZLbyw7RXUMuyZMS8GsojTusTbarXhuRiGRFY7YUdLDsw",
  "key2": "3SQDDafX5GgtaduBexqrMjtjN2ALGn2riLxvhJwNQrXiLRexjACMUTG1kNvnn7xusrn3kSjnoxqPksMtnsDP9iXD",
  "key3": "2HPp4zTPckJNm8i4SJaQa1cPjLshWZsAxXWMerdvGuMepcamd8HhxSeLXtgPMAPDLVx56cqazdhtMAPH25aTgLKZ",
  "key4": "3LQhfneUh9AjcskLEdok16cZFnNXAcBmdYH3LFtjHc7wi7DASiNeA87QQ5vK4cUxSt3Qi8ps4zspfYsiRkKmxxLE",
  "key5": "4xrWjpaZg4q18cqsU6EpcJLd99gGsRssfs39FxU8LAp9EVaQ6nreKeBLpJswKHcoCpFUiXnxjjPHK8G35PoxJ2ea",
  "key6": "3X4ydFYtnNSPsCdxeXvteLPsjZECp7cs3aBtbSaP6isFxxUF1rz2o9RZBafTXRUxaAuXyvZzRHbCmAT4VNyeDCH3",
  "key7": "SqhsjUeKTBJjr3VBazteP6zNo1HACkBTD4Zcn2czwAjgWaPbYL2sbpk97qc5Asio9fwz6mTDuxG3ConZb1g1U1T",
  "key8": "vmcyBKmFFymwMa4TE7uQ4bxNH1jRSzCKKN44o2fHz4XGA4YjgsaWn7Y8EiPhVEa4hmhTr2zMT3BL1GARXVYPy5X",
  "key9": "5DuJNTbyFraGHrM3ZRQErpCSAEDrcaWg1twNMWRVkH2TZsRstBbpGuB4PHWnnDRcY8vmBTjSLYCdEvPZDd9qZc5g",
  "key10": "46ASdfJeG9o18LZMVH42khX91WKetZWyyNv7S2vZ2GL5mnxGKKAHrt9nFpfA37J6zayXpWN5EW6eQ8MYa94khxii",
  "key11": "2roemMnjoprQcJx6TxKkFBxSUwRKm6T9V7yc79wHMkStqKm8uKy7pLP7Vb5GMdXRT2UpFY5hUbAmMQo5EUqEXHWG",
  "key12": "5GYyJSM8avkcAi9zoZrNfTVbRZe4zSw4w3AKE8241CTdA2GyhMn9HUZS1wyqRLCjAVvnbouf7VDTt8MpPHfwfB9n",
  "key13": "Pb7Qs2JXUB6X5kCEByLgjF6b7vWVVsTeMejEXDfJF9iFcLw5FZj5srFvEbVhEQadSUjSi38PvE2jELCjbd23gFZ",
  "key14": "4RkgkJ2JNw3nwcNEqdNaW29hoHUqMAVJmky3Fffpc3vYGgjnMGfvud8SrSeH4BTAN13h4nnAYoAdwEiGCNzYrcQY",
  "key15": "4wnf9McgJjuwME4W5TNM2tqqQvqneESGekvrxkPh4vU442DSUB9P5c7baFRKE7Wg2NKoDbLh2Y9u4P9YKegN1G4h",
  "key16": "2huJWyohSFKLSpt8NsJrjrqr6KdTvwzH3qvnNrQAEAuAwbL2Dx8TP1YSeWYrW6qSM62Axs52n3w5dTNHgxZKR6GA",
  "key17": "5dhBJDMFnBpffE5kvvCvouDZ8TFxiYaLZvNp4H92Ysx8YvNyJZwpqnGtmzNPoGCjaJpXfYxbCFzbhwSeNAq5uvuK",
  "key18": "9qsFbnFLKVSkDJpCu8H6HcNW92FQNBMoq91UDPoUhxvFhizQVDKpjSoi1nsMxKRwLUfCmqGLdHakBjt35AB4Dgf",
  "key19": "43tp8BW632Qisn5N1NMMraq69h274zdA8hP52mbQgcwLRFYFAsqg1mZ3sNxvCBoAHLxioh8tTwWtV81jFfKVumxi",
  "key20": "2Y41mssKt9K6mQRErRKiELHSz31ELRgqqGPxDoJPqbmgCvBnQdyMEL8U3fwubnC2dsittdFna9FucHcFHbNpmt65",
  "key21": "5uycVvSRNUTA7xn1sS7ggDXRvvG4EL9nhYa2iakVutPsQ6c8GNieVtAJzKnSrc4eLGoNm1tnc8RpvxBt7p7UCWk2",
  "key22": "5KGHGCQTGhUEgqqffxbwbvUUkGpKRDMFPo2TgjeXbvVGmPSDg7XqSbthEKJCehztcbeGgBDgQEYwXrjDUTzcfzYm",
  "key23": "5EY1NbJoJYraxrFhG5mGmQpdw6DRknarU7dAJ2wcuH22e8urHNZVSMywXhp6tbwtDN3N3SciFJV4Q8gp8JJvFFHq",
  "key24": "2NNvDaxS8xPMCJGbRsnda79ST23hzPD8x8KGvhN5akUQ7cZ2jao6PfyzAzRViqa2HrZ7uNZfobMZvcSmE9NFLBhQ",
  "key25": "qu9UupfHCK8E7niqCkVki1rLsSjASm4DYr5ihDbjcqoBgd8BuUYNpTSJgmP4bBzTYwkPMdtWDNzJuXMrLb6duLN",
  "key26": "24oC1dib4ztB6Wnf8tBCgabUGcwf7mpafVUsoKHnLQKQLqtd5xfyUq8MTVCBvP1aqYT7Q9wtu8bvooAwUE88vpHH",
  "key27": "2K3MrzBTedNczJ7D772prJKsrVCFwXiNYVveLBvfZAU9MJZY82cPozTC1cVC6jPTEVo7U4QE6TYTxprzZUzGLCbj",
  "key28": "2v821wCJsmbnMgH3GWMphngSyKnXUWHhgMMNCwB1NvUwKQimmf4EaXCvNWwn8AovuRQP9LjXkXhCHKq4HA9o69Yi",
  "key29": "5wrEiutzQ4WU2PKCZKPDZZmBtJxdex9QjmDRw1cFQEbDfEHcjemNXYaNNL5fVL2Vtrr5cbg9GHoUkArxa3no6BYw",
  "key30": "6L1HcnJFS1HWZPh4Yh1d4T9sYAqX3KXbBpHW93MHbeJVwhC9RBaTSUZ63bT4L2ho9u826gyLTFLTsbZNam8NyAz",
  "key31": "3RtR1znTzWkF35gconpDYdLWPUWayuaUFTvaRwaafkfzBvLXYWErdQMREEaa7d1jMVMcGpWNcxGM3GAqDqZVpcwc",
  "key32": "5rD7YkkTStu5UeN2qZ4ZQXT88bDpcPyTQMJGPULHHKHrDs8hxZehCK8b7qDgvSEciDMChWMcdxQoDawyUvRwjPxf",
  "key33": "3NiqkCYvFcXowbe4MotiBa445Pb7Pkeg2NN5AepJZVLqdJoqhVRPL3fcsoXU419hMxa8ntj4MqrDhXdKJNY5JB1A",
  "key34": "4p2QLMgikN7pCL4TaG9jhLHYXdZbEof7GyTxCm77R9ZguP3eS9NXrm1HitnRd5cn8UrEydw4uFuxhuLW5aw4Ughb"
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
