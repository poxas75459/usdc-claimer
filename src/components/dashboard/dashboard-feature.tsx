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
    "2UrjrYe4XYZbUPsj8oXumxNoyVzmEfRc4wjXLSLnf4nN8t8xpjxqaRtV9iGyNX7ucG5QjZToBPqnNTg2rPoNu5Us"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Fq4J1Ryef4bMfeaPB4P3x2LzJJ2nRaLHN5Bp7MFp7KjLig8ktc2JRcAX5Cu4Jf4QwYMBpAQkAt1YUwmXdUWNd7f",
  "key1": "5az4Kg2dK8xy3WDBRSLrUf8DAavNQQCM6z7hgQeei5w9aqhEXvMHUyYp1CEhadKkYFkZUgpjfc1zEdwqSs1SMjKw",
  "key2": "3gircPGQgRCkn9Ra9USDF67PxuiyioSVZTWU4fZGjiW2q7AtXW4q4dybY7Xjorg3de8TNDPNmYCteDvhYubUoZ5x",
  "key3": "3Ki1YYTJYrwsCNh9GWVauuBTaCccKd3sXMqoEpiz6y8GPSoQM7cPznUhhpfopgBHgmUPxgzrnTWB7FT9CAnYAK7A",
  "key4": "4LQTRgTnRrGzXYfDdGU77UaMZh3eRMtiY95v366PTAJ1M7AZynJqvT4HMEN2c8iqvwY5o3Kg73GxGfvojAACDuPC",
  "key5": "4dhHTj1s8m51fKVWnowycJxB1hRvorfXRMjS2pTcDJD1Y3acnkPRC7DBD56AqxRb5bkd51nJuQ3jca3GzM8Dz6qL",
  "key6": "xi9efj2nwDnj7wgXd7mQ9asPsbhR5Y8qwMTcvWkLL4MkN81JBtdHyhvjLyZY95BaAg2Xk1tQudEtFHgGbXMFvxr",
  "key7": "5XYJoNDhdXfBWFWA14Ujavuiyd5vtCiWXrVX4fUqCbeHtJrm2xegDgWMcWzEpZjqAmvmKLxUMxySJGcaihWSMvb3",
  "key8": "fwbX5M4rUqJV8HbM7buwL6RGRh67qbm8TmnWsRQKidJpbfkNfo3kZ1pia85oVrSq5wGQr2aZT7Z4wUgQDzr5Y5f",
  "key9": "2m4nSpikdqbMVaMt7CsufPpYxiwbLc95E2kA3UMZ1efTMebeRUnJsTmm2t93h589jj9EGBWXZ2NiVfKwL3TrhHtf",
  "key10": "63FJMGQt5ygQVma3hxjN3MosiqUdVaRQwVnLadzKwgd7AvzF3F4W9toDbrBQx7i7dyFDRGQN4w6q42suuy9rqn2y",
  "key11": "wLSqXQUARGdMwBmHG8626FaeC8FyoNEikX6TQFfvC9bWgaPu6MmQJsGSNRkqfCs2ZSHUPu2RjWGgchiF5uvXGdi",
  "key12": "Zf95GjwesFp9cWGSPd9imnj6Ks9Lk7aE5F6Jeff1oHEfyUsWym5XPftRBx1AztibajcuqqfuPSTj27yKD9b8VRS",
  "key13": "4dv1MxopbsRP2VYqKzCvWvsDUGsa1Q7REjAgrHACLFASeoPgCC4vsmWwWaTc6WAXjXQ3jXnaVXDad5tEAMWaY7sp",
  "key14": "24Gm9ynXYgMKM1jCbWBNHZftnC5PMeAmPuoviVnmqQqBjqsb6rMN3yfQMr4SXuMutEUFVtbDwsUeiuxxtist62KM",
  "key15": "3hbUiPnNN3uCVRrVSdu8JjDUZF1vWEwu2Tn4N7STR3pEuJcb5FYf7g6KKML6hY1xETBydRweEPafCGYLmyZRv3Dj",
  "key16": "4fpUa9b9PxQBjAJgRqsVnuY3quZNUn4x6hSkdeBqHxRPYkYkgB1QNSYXheTuLnPDZYEfytJXKeNbwskzsVkQKPCS",
  "key17": "QWNzYFgJq3vBD6q4c6MWC7xaS6KY6hcjUpNLdRVvL2enMNP96XHDG4UZ3Y7AuvtMZ9ScaNMuh3fx7fu4khr1Mnr",
  "key18": "4RV1d1KzrKzm7TcmJ1mAQLo9pLVwonAGTmV3vzEuBRXDNiHVUi7U3hWx4xtS5QLLPViFUVaAZAviq2JuyDzSiqXL",
  "key19": "ZLYADTg1A2disF77PXobA6csStFmgDyt4nctzx4DH1s7p4ybr26zwtoizDnpPMz8LqgzgozwX3ZeFQGArWDx4nc",
  "key20": "r7zz69XEwfyGpiajS6zg51sRrMV1T2t6i9WBF9V2yryPD2ag5sVbPe4kmKNNJQR67LWMVXsG9oxGeHxenGPHvVr",
  "key21": "528DkS2MiCWbgdG3bzBVRFPcgdoL6c5TLafGMHF9qKRcmEgPwiSjRUkXMaYVTNAAmoWperTrSEBkakS3iMbX2mdi",
  "key22": "5gMXPbznjGPSDXMMtiAfBtXhbS6bt68Mpdh5Nam47T5RQuUg3PFotPcbPjBzx1feEm2kJKnJYRQ4NKKtDT6k7oD7",
  "key23": "k7SakQtNC24NZ9yiHA8phaMqkTPnSRtZNaPT6Ybg3mx17Q2pFpntUXnxd6nfpN67DESgR9pnn2kn5sMB7vXjs2b",
  "key24": "25kVXip1LoitBhKkPKABJ3ZP5a9pHwhgnRhcQN1Ma2eo7sj9fENNg37X2hPuRyb1haHHAGZQfKKmCoZRbKFvxoAM",
  "key25": "5PPFdZhGNPwatNToDiwSEzsTra2yQBJjWPCoqn9oi36RoYeTShHAKxFBUouxcsAnWLsQibPeRvPBrtfmW9GHArBQ",
  "key26": "3a2owvNmrvutS4ouJn2W3AZ2ymX4Hcdoqb8ioAy2fVEzcyPacoy7hJ1L1io9WzncaFoyGpJSvhAzeCSVbKjra42z",
  "key27": "5BwDBTEy7hu3reJj6eU6EEoYEjCu1t4uHHQ2Sh7Rxmsi36tBC7egw6W4Nj1Msr6M9iLDzS6G7RYA9eBE12gNZ92w",
  "key28": "3WMgDF1AneUs6oTGYTZ45W8H4NbN4zHb34SkVSMsjLCf2Lq9gD6gdF5v4KPSDMzNf16RyrwXcxcBMWomTNf9AnNP",
  "key29": "5LKjAJhjG1g6h6enfMzcUkCvFAYchBuWoJyzgR8PY6kR61VYdbdGXdEe9PRkwT6BXzpBmA3kaU4PbyATGUhutEvC",
  "key30": "4x6LX9mBsHC6MDLsbvyrnc9mRty2s6FZFVK5Z2T4y7o9E3yCrQP1b6dkH6Q84UEXVkpGBLs8WfNoyj9AutT95JD3",
  "key31": "3yxsgzn4wkENeDvwf7KNmKRbhQtL7ZnSVhL12i4Xi8k91CW42WMsTqwFRG8bRSdX1Ej5e7xZsMouzRYZsqD9CCsf",
  "key32": "xoTiL5rm7EquZ8g77tTk78pgYuuoLm4vM6kJFJJJVEdQVjtYZ8cHqmnFAj1Sdro2o4Wpq6vutE8wHGt4p8UEuc1",
  "key33": "4qM6WjAd6PSZzo9DA48KpN4mKERY8HvMWhBjz3DQKssD15RTWScwiHr7V96Tga5dqWnwu8883t4D9rWsUKyLKjJo",
  "key34": "3Pa3nfxU7MTLqTU2eK9t55c2udMCPHqRQNSfrRGEqBDvMh9Q3V3LES8QnruKu3rYCaeX8A9q4zmo4Wr2hv2cfkFW",
  "key35": "5FJ97qmrCv9SMAR6CiRVGwtjVH6LTsfpY6moQ6TS4xuMtF69DXYPLWYtLmYfMeazB1QkydE7Mfp4GGKydrHkQMoa",
  "key36": "67rSBm2uecPDkroSJXs2LGYFp2N8kcRnLrancSHMMcEAhqBH9WovVfme6uS5JofrY4keP4ALKC2g25Sw8W21iyUo",
  "key37": "38cUKVpiG7NcwGzCTc1Eqtn6kddYmuBkoCcivE5zAxrxWHh2CEV3LQf869AYHwMFeZDsXdAeFzbz3WnnD3MvePLW",
  "key38": "4boVMn47ujMMvPV265yBWAnLWeHJHJ6FXDN7G3vskT5jjPHyKsFYxmgMsA2JXEzvHuSTYN8mGxcYRm3pEEQVj29N",
  "key39": "2jWAMRz8aBPaMeLehGQz3NrW3H8xKqhQdJHaB9RkZr2oS3ZWBDLJnrPy6mFnYJwYy6HFw47ekv1LSHJ2SffT3jH4",
  "key40": "2QD4Dhop5uUFa8j5RAeEC6XwAg9djQuWWUxrtxLhU9tF3rACuGTMS1NEMvTxybLdy4UFi3Pi7DHTZB4SMzPnz9Dc",
  "key41": "4chi8hdesYfLuq5ktGt4SMuZEiw8xYvDUNqasSVB99C3GSiB1XPBKR2WWGUBT3LWUzN4SgRFXFm7GUYha8ggc2x2"
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
