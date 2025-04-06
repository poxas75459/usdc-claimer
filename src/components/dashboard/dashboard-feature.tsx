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
    "4h9v7978MZDizi1zx1kfrxiu6B8YB3dz8og2szUcUAzcSbwkVjdTXqrwLy7ogQSvAoUPv8kF8iFtcZ63gC3T9Sur"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JTUbjXsptZJ3S1xo5AQRtDc6qvAVZNEUDnC2nUZA8gserNbcrRmyq3xWcGHsSv7WcqjCGEGsa7snPpoSA3U6Cfi",
  "key1": "56cKwt5AoR5mYJch11agLAmvciMKYMnADVTWwC7hR935WYNRUgF4ogfBJ2fmPm2oAFVT4TdH9z4V22vDRrWbfYMn",
  "key2": "2YBFM2Mm57gv6JzdFXUFoysapE1cYC4qyv4nTa5GFV5GZCiUYHjWm6ZghquS7R1z5ZWLFtPQQpqHNuMfy6Ema7eu",
  "key3": "27PmNF2yc8cD4UcYGyJMjtrDBCTSdqxj8GcYeXXAbujhvEnwKQeosomLRMnzTPjD5fpjBBibfVRJPPYNNvwGcMRF",
  "key4": "5c8NCmCjRKKPFD2W73gUbjGamMi29JaD6heeMKFUu9QXtZQ7b2ZwvojPsL2sEs3zUoWsfwBSUcAvZzGAVvDTeGRu",
  "key5": "5fgvmvmhq1pvmchc6UJX33zhw9QGwGQh4NzyATmRtLAdHwTjS9V9ogpwia3G7PXy6or8JP57cDZWQo99Ub5dKHSb",
  "key6": "aYhTp8D2hu2tCZptCkw9UTPv9aoceVZAxNKxjQeMTRFpSUdSDeZMBQ4aAdN1vGtMR7v5N1xyL6MnqXuVSNp3cQA",
  "key7": "45gGmmFutp1pNfTorvwZ9aXBBr8GiY2SFaRDcNGrduuvJimnV9W6e1Zg1MWzQsCquYzBSQpAAtUPcVPXXBEEX6qj",
  "key8": "3HDKXvipBepZAEZgmTpskvJCaFAbB21k63b7Za1QxaYXZ8BVfc5ksYXpMwKqVjgsEenrEm8seEiiqm9yJetkEAXe",
  "key9": "3N1Sd3UKjev59HVvHaWHDbgZMWBc5WCG7ydV5jM6smNeSUS6ShYgMvrfuoKsZN8m4iQcKMpGm4whLizP528B5TNP",
  "key10": "vADpWaTWvQgqKkQqWGAA6tD9c9G9nQLQbstvRVkYuSUextuoRya2dsPWTUegtjPBKsPsdrmk3sEeHFMhPREAZ7A",
  "key11": "66zQK5xcczXdRGeLpBZ8Rgr6ZRKsTTVkng9M6RqBVHugMVmApcQ3FTyRxXpAd8EQrctmf75oViTzAJwA7kFSMeFs",
  "key12": "GDPWrGSuyxCGM7WaZx7yGTCxvS5bMptjWEUK8Sgfb124eZ22EL6jbLmNUvgrsL95awhAapprGEthkWphRHtTfEm",
  "key13": "dPokjY7L2vGoMk65DL1Df9ihYBREQMZm74hgagfbzpVwdFcmVZFV9yJ2Mq2f7cTHg8tubKrwXmE5WJHcri3R23X",
  "key14": "NnpG49e4bSAxCUUKQtwHmGMvGjmgD5Z1JRNLjPkyvMHbYeBtVPMJr9KJMfYyX9yLmsbm9nsxUnRiidFvmm2p2Tt",
  "key15": "2JD8AriVvUsxDVUUDnyMoNYbq4bVv3rbT2aRGtP3BauE3RnRMBMkSmGjeuDp7KCLghmubik1a2JABMiezhh9LnvM",
  "key16": "5TP5ePkoD5K8R48QjZ6V6LD5tXbt5eK5sXZHnVrxBzrkquHr71AVuMTvQLsUTTKMynivxYb2UyW6eiV72WBiDcmD",
  "key17": "Zu99UEycEKHHYX6iCDrQ1DezRuVaFX2VNXjSpQn3SyhAyiijNfVNQMZXgTquHZurrgkxmaYh2Q6pUtdmK7CcEeV",
  "key18": "55ZWXWFUceyzMqUVHaEuEdaJoRWPuqMQYk8EBZzLNEUZeZzZMDiWoWx3Zz77WGADkC6gSqbA8R4131BZjQ9BsXPp",
  "key19": "5hDLLRdrzkErZMs1wTdD3xmw4hj4aufAjoqvvdeqHUMEbdSaaKjJFaU9MqWwFm9JCdojkNURAA2Qt6D57zbC633M",
  "key20": "3pKBNpDSuf9tXtufR9WfSZtj4zpyPXfEnr3ovz9VGsff39myCHUtJaM9bFhh4JzE36SbBBfABQw8QBJfRZQrb3N6",
  "key21": "4yVw6PrUJMJrQwqHtzZAq4TnqcPNJMb9pdJNgaki3f3F1RZTTRToeYhxDaZLZphHu2D3AFnJr1ofvdUdWffqkxZq",
  "key22": "2XvjQR9xofqG3QC7sbyQWSvqm519V8mJVbFtZ8QsHzn3ZByRgcB7z5faxhhYJK3htag9MpRgHsmBmZnG3JzJnkEd",
  "key23": "4T6rsAwRH89Xye8vfgHAvvZyZvRA1qxJPsW3C82N2ijENimV4vqaJ7MteVexEjZnYN1LvkXmCeLAHg8fy9Rw1cFL",
  "key24": "5MVdrL2XqNrRaxzGq338R475y6hqs2JtWS2opzkBb8HYe4xeGCfYSfSZSqbHfeo7XY9cZtr9FXfvrJ5WGBti8cqR",
  "key25": "3K2HkqMqMjyvD2bbPqQVgsXvCAJGwtF3DVC9RdixCrzUWp9m5zyKxMQhfzeD3DWbu4eDobXPakNBo5FFoLWDr1z9",
  "key26": "61qvZCCk62Yb5vsDsALdG2rYXbpKw6ShDMJJtWs4nCvW4pFHvbEKMvgmW5w9wfRr28Ufnq5HLpp3wwUCKBTSJLNy",
  "key27": "4aR9LK4auEEvi8K7f88DQcar7qcmj6nQvvYVKSdZBU2fzSjpAGFJ8RK8iqzEDfrcZks1PpZy18Yo1yeTCSFRkJPU",
  "key28": "63wKx7dxnkaQJKn3YGBDQKSYDATxLYhEyRCZfK1fzKpCCvTcLSHduKUJZfPQHTYjcFK95hycGZBMR7WNzqgjUwRG",
  "key29": "42KAdABNDHKXNioABHCVRf3dJXayYYfppcRW1svCeBSsBaTkt4AmDhcdd6aoFzXmuR9iMha5D8YDzT2yZSGK1UAJ",
  "key30": "5bNCNkmkiWge2Dm5y29sd9c77cJ8hoVibmZMb7Kcq9mL5eFrE8Hrfsk5cXqY663rY2mS9xgxkVcbjD5DiV5xXm4q",
  "key31": "3hE1rMy4gzHhpPiq3ffEKyUwa1heCw5gxUVEk2GN1XETrLoD4JRDExt9zc8pvCCpNfmvk6z94879WfLRNPYqrPsy",
  "key32": "3C4Y8uEZtAtEcpN9Z2UZk4BTMzEpNGaVdrQk2sygR7nZJbjVPMJnWtgxf4ogU3MQRyQ4weTF5VaWyncQq9JRgZGq",
  "key33": "4Rqa1tAGPzzTaUp92jukb7G38Fyb1nNqXaYb4b13WJxWfzzrVDRHE9KRWExbEiQTVpwD9SdzyKMNUCgAEEUX7kf4",
  "key34": "2sx6HKUfXUoVx4ZW7XL64yyCMuRa511ZevbtJcphoVqc9QLRetGqHYWRP2eDxxo3XHYksZFvbQguuG5P7v44iKN1",
  "key35": "2YH6zK4Y1pgo2LVgPFY55JyFGLSdq6Tdxwe95SLEd3xUHJv8u4yExKExCckp1syZ4mCBEcYC5h9FfqDwEjqNdJyQ",
  "key36": "VF4kognffbUy9HamLcPkwiMqtH6qTkYcjPRarXwHc8XnFfTbpivtoVjArfHnFuY4PBGYjKPxdTcyqNhBBcpPgNU",
  "key37": "31Fi5xumFtv1teFSaH3ntft2GSP5MdQCmf72FQfjiwWAxpCWqjqsDqsHUCsbzmQjtFRWYcMoRCKdFiCTQRFA56oP",
  "key38": "5k9btaTRfA7ixVvWgUx6HW5Zat9ExLfAHxfRUjoXumTXSZHVxNiMvqmUPRNdJb2yn6yicrWQB5cLMaPBPDMTrVA"
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
