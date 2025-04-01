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
    "3VSr4euBp1PAKjAFXCBap1c7WfZASzGeg63HA6PFgd7YPkL7NnZaJtWpZbVmPgHPJ2rGPNL3pjg1gLDXrfjcWZq3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25QRx4GE2gVBPddiAsbxpHvndmVkSwMqBHSFrAoe9UL5D36wZ5gZ7qoDuaajNfrcqQEeYTtte7r2forad18cYbkW",
  "key1": "288ZKaiawwUj3z2YoD3wFBLtH7BnxeB82GL35zdbXL8RioEB7hdyt9vH9gHo31MQt3isp3r4MiiGXcPoCXhQPDHy",
  "key2": "8NKRWRTLLhAccbvq5UCAMsQY8RjKpXgSv4LZHjx32KuEfr9pNjNBjwmNk2HzEVVYU98CcW7Jdi2J8N9T5fGPciH",
  "key3": "53SHXGiEvAJS1UxXdoLKd1SCM6hZXZ1Jbv4GnHMcbQH5xqY8oEib7bLg6Q8kCS5E7W2dUwsFpHQjVzxudYzVS27Z",
  "key4": "4dbhXpp6h4WUaWPMGD6xGGcJqspB8SmkcbUEK28toRmj3g2rE8Hj7HFuMDTqhGpzmFNo9zR91diWVmmFv83GorTX",
  "key5": "3UH4Fa8LJeWSgTxp4wnLqLyDn55nk2RkCQQHWH5CXPiJdcbxVXaWYCsnhBHQgEH5Nge2LKPoWGaULbQW6Vjipo1f",
  "key6": "3uTyaT5yb9aFYWnhwq8ZxRxda4edKK4p93ZmYqU62L8g4ff5vXJkkPmvaPdKxWc2dTtDM1tcxNCqwhpTMS3LfqQb",
  "key7": "41RPrgergW7X8JJNxTprSActXnByJd6w17cUzcVZJmRGFzgFKvH8kSsWFsNpjPen8ShBvUyjQ12oZRLir7ZfnHtp",
  "key8": "4W9qi8hxBDWRMVNR7YgHniuTZEd1AutC5hYfjLJ1KKFExoCzM6s3bubh939uedZMbmYEM7WRqZzp7vBTFoZFWaKs",
  "key9": "262G1rm1YPGRTDCe51pqeXqyXshEWHSAXQPU4w9yrQEKXwKjRBYtqbgCEFjx7kmfGAsDX9TcQPxiPfNYtaEsf2qY",
  "key10": "5oN6aGPTBagwbKk87kWVX63WSn4yjif3czJjEcNuqa5mD5HudPCo95PYXEwT4XfPxWrvyWzqBRSdqQnhJpzkG7za",
  "key11": "LDPEfndR6Zt2e5A4FyksfniFs2hnangmKHaRKWXRETW9VWxMNQBGFCmf4LaCxC6jXJqaC72YFeCqD9XSzEnSdkw",
  "key12": "59Ck4CsJWyfeuofy2S83bCEjLLAffPCLPmQgbpk9ehWWKpciEy1HTCm7rKkwGKJC3MDj9kAStGJGib7gFLehR9aG",
  "key13": "4FtsSyiAJnS3yws6KJRtNzmWeJQvSY8RVW8uGbZNobyqnbymdvaNNZkgUmD1NskJ2p51xyTyDP8tqhCz3ST4Zwze",
  "key14": "3j7MZuNSwAfJ19NaLtz6vhd5gqDHRj46PhKaEGbUTfgty5Av5CqkJSDALCWRu2dJikTyREohySTuAqXueGgfiGJY",
  "key15": "5n7AKpta7hRMJWnC3sVW2ccwShRY9FmzgKCbEuqSASucv4HZTyKAqTSZwvUUyK9efGcYP8uXrgVXpGLc9khJg6k1",
  "key16": "51bmyj4vM1Mc4jAm7jqsagBdMG4mPPpgAioyxJJW9nMdpjqQWEJBtX6NwMmL9JfhGLHqkfEJ7dpnpVN4JkX3irqZ",
  "key17": "3TqjkKMxgT9SC2YtKULU8RmnGMDQSVqfeyGTA6KpCFHVMY6LLpM8hKCEASx9jZBM5d4EQ415Uqacqjdik2FH1zmn",
  "key18": "2wBs5ycnf3qsUAjkUqE7rbtg5D8N5ZEtE7Xd9QWBBrn4TXQfehA58S9KJ6cgEhb7yFxGpXg9r36BEJ1kHkQVhtsa",
  "key19": "4xZJ6cEGdihy23i8SodP2kwTETDyPmwj5cK1goSsJ4UaqWWGvThpR2VPZKV3TNQVnNo37YshjTLfHn91pm5uFA4t",
  "key20": "3Rsukx4hkcUG8JQK1Kp9hLVVhZv7f3Fg5MKdiWihXekt9hWHavfCiAuZXRX61Jv4AeGSQDnjeAHLjN9MXVBsyWKv",
  "key21": "2rrSZLsu5jzJEnBqhSNbJ3wrZLdKWh5skGJ8avwKwGEUzPUuFmy92YeafqXs6EiQVSK2RzTzt2bGgsxx2THFF1ki",
  "key22": "ak8yqw3FbMvLncHcNhwpPFNqHwhSNUYHJekRcpFWnF3ZmHC2TzQuiJGJxHXbWkysi2Cu4RJUKjDwuYkigjHrE4P",
  "key23": "2XkGAVMamtFvzmaqbzTDm8iwvwu8EqiAgkqNnQmuxYJMsLKdvSRYZGq6bDNCh3FpX6bKnee3MS8YdbfzawtDmH3U",
  "key24": "4Gsga8xfgGjsJPziBifb8X7EuNBNqu1UqSwPKmGgFa7EYLweYaVCuRNrSmmw5C2nPS6DVkkxwo3Moqa3AGyQHGhA",
  "key25": "4w3U7MFdCxUPbLaiXE38gtbAFyUqJHDMKpTNKLRvJ2ZvjJKfiEq21K8N5VgdbYcvr2D6ysDojoaMoqFteogPda7S",
  "key26": "3WFj6Rm6xiZj25temhWf93jV4yDECMHQoeKxPAXEhrmHJuVBJbdiH3QXf6XwHGDZJs1XfvrK5shSAaHZanznf2jZ",
  "key27": "54X9Z4aKehG9evJfc4hCk18mRqTuaMPEWp2D6a9SSZfM3i4pZFVAY1teEt5ebReLkaB5uEm5kBV1R8RmXBtJ36j7",
  "key28": "3e3Y5tFqtC9Yny2Vcxo28iRJKQvy4jBMezVk3ygFUGDPkpK4W7Kmy1qD7dgTT8usWS1AACPJDhjgSxvyjfWQsCFh",
  "key29": "5tJUm9wu5EwYjxSBbXr82516i3fWTJSgz1kGBGKDTgZKYYSEkTJ9ZLhnsSqEd3pJY7gLSfYZFevj2TufQfyZupja",
  "key30": "2rYSf5eMhn6sk1Cg76F87CB9K7TN5vcXhCBEW1ViM37thNEcHVnHctzQaNFMVDYpVReFWLr6c5SDuKsb2sRWnHzh",
  "key31": "9q6VUb833jWpaLbr3fnEUktR6XAkmTV7oHSkLhubBdwPV6aSViQ6kN4esiHff4jtGj3ADEfy6NbwDvd2A4piCfg",
  "key32": "3vuSYFNGqhXRgFyJp2XVL2Jz3Yf8RNvg1KQb8JGSmgV7U5Jr98xBQxugCaESSeQ4GM8Adgb8jQn3jRZjihyT7KKF",
  "key33": "2t1tPNSxuEHzayyPUxaDMCeJ2A1kY1cY3QXSBx7nexoUiWrPRx5UM7oehhqaprV7M7bwtnXQNMp3vjyzddVhbN5Q",
  "key34": "2k7n5j16Y97niVpX68iR2dSahQ6m8vF2sRFoGjTygVQ75NtyKpREwWqrm72B5X8iFuvd4UCjGLzNxmvHyaycw6rW",
  "key35": "3QTVrs4dm6QkGTkGQ66cLEYEpHwMMmCNvc67yZibgMLn9hN4cFnWN9DVd7JUaJqBq7pbaNUAW5NEDbo5wjKBFHwR"
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
