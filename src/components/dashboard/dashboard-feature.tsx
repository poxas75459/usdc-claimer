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
    "oBh2u2f7x1wBH3Waewj4x9bHJ4osurJi3ngeUTCFqY4ciBQjH6nbrdsyauy33X2bDxscegUvqyKLuxBswB5k6ZV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57dYQf53FLDjBEryfbvLD7mUNrQdAKD2Hz54MByX2ftYq3yyDikiZosYDr2zhvgQ6cMQrYpArmgtHQeensy118MS",
  "key1": "3MNHg2zXvPGpSEQr6QuXFkssrtppfvordm6rWiHiNandFXrGgmSvUGLMKSmZKfb2bakTyNwRqHawdvPqS8FSCZhs",
  "key2": "22UWQrkeQfzsGJ9c5JvBzXP8L73YbureG38SDeX2rhfnxSGKMGjcoZuioiyDKFC1DF7Y8G7TujxJhaEfzg895gwa",
  "key3": "5DY4BBb9zV8W1ntHAELtQcKFyR5ooGcD4RcvyvsCgEuyGkydLq4Br61nH66gR2BpmyUy5i6yoJZx96C44JNwepth",
  "key4": "eo2MC3GT5jLingZUhRjRxYjQEd2YKTHS7GhBkC5uzjozAH3w8ZdPt3yo1JDg6z7LEjCPVzQyP6y11niTTR2Y6yN",
  "key5": "52A8ZPNG93gvmX85Q1jnwJkYvjJuTBRfHTVjZVgHsbcSabGga97X1RR5qTAV4zuiuyVrSXcof9HqKdeUC44QPBjW",
  "key6": "2N6c5ybbzYmCeG46LsCy1sn9AxqFNDKCi9szo86CWaJ866muTXyrgUWRUXf8RUibudgtmQLU9YyypGzAZpeS8UY4",
  "key7": "jPVLDSiSF9miEkEGFEGybxd4rTiHP2BDvJJA4SGvKhgRg4mGBGAEtW5HGNRPMNAekeg77mFxQK43wHhyT8fAWea",
  "key8": "3wRmuKfLMT1vdhNvFhGd1zCd543qPwuaQ8nNtAYibCGva5ksZ6QkD8joKj199JziHQuAZvApnN1dz8XoFF9v6zog",
  "key9": "3dmVAWgMkbdgUrPMxCRtxifNNg2HErdpNSzZ3nTGDztiYDHtUMKeHFAqX7GG6SxDP4vtC6ghepEAv1z26BY6eHfF",
  "key10": "7tcYGCq4hL3HrQF143boMZ9DU7PCLxFxia5LzywTy82ZjrvVCZ8sXfxsNcf5JUZGTPSey7w7eKM678ZvQMGfHKD",
  "key11": "8ZvNf744yFTx4UHyy9pe1eeJvYUMXZXhJpWscQGfM8sf8NfRvnry1ghbYiyUXzH2rtgT6uzcV2wKfH16eHfEUvv",
  "key12": "2TYFdcWtkzbEPGt2RmXdertzTBMBrnemF5xNW511921UgcqRWqX7acL7Hs6sZWD7rB38AV93EWfsNLptFpo4SVfo",
  "key13": "679tRVcBJqSHbhaCzN6zZbXrSSYPWx2onGXw4Tk2SfrikPDWcx6UxmEXaSKzcjP2T9uD5zsPJ8YJqeyPG69kvYcf",
  "key14": "LUPKWHgRp41aM56Q1fsVtDTsvYWoeLH5QKR7DHrPKdRFuFCCUeEUisf74oz5Yqrz6mJESUMseMSFZQEgCDtkF6z",
  "key15": "3rGGJqera8NtvZNqvfVMtg7Gg3EGzSqwWfVX2DjvLbtbjTbPCpnt7wwHxG2nNQiKywJ58eNprRmdyVZk49bMu1FL",
  "key16": "3yZMbC9PAoXUdeUkc5RWxpjNX2uJAfBB4BbVTav5U7pJQsYjGgMbG9NFtn3coRyCkSza5nxG5mCqFYBtgXQYSxX4",
  "key17": "3mW4ELkpjayJngXUHgetFmRbGeSg2j7RMwzUVHxhKEccNmmqWMGAvMi2JsVU9VtsbCM49sLCqTg3zR5MBxz5SR99",
  "key18": "2jHgb5XsY8Rxq6g4PQ8qko6e2gpFmLkK3gt9soonBxjadd5DK49kNudEphmMrtecEYt1LbmCyMb7SJXHTD3dT2ir",
  "key19": "9YeYzQnY3et55mnC8W1cSMMmoat8ag24kNYddc5zeXZ24yZFW9wDKnxzbs5hmuxxZQDMZYGtbcAPWz6rYHRzZjF",
  "key20": "3hzdNw8GzuzJ6TYkWgAcefJ93Edqjnung5vr1THtiVypDUX19ZW9ZhgM4cfYCXSELwzi3mpG6zNxxK6NAWFC4Yo9",
  "key21": "4jzQoLfVhBbwnVtneuL6aG8JpMKfHFSy6ZkobmwaLC4QZaQjVTx9PFVYFqSd2jsyYAjEs2kiXWLvtVbE9fx9UqcD",
  "key22": "MrUv2Y9DrkjoWeRWrmnSRSQWSs4TuQyjg22Vd5FYfwCF3uLZq6s3KoXajwbf6yXR8N9Te5ngph1Dd3Ftj5h3Bcb",
  "key23": "2QsXeroxZuFtgXzJLvw3Foqmb7r8HHfcSegAffvYTpxfV1EL3iA1rJ5t87k4xaunXzr1qQx1fApx21Yo4gN8Qubc",
  "key24": "sE5UmCnzRjVMsGsoFH6jFWAWM1V1Qs6qHrQmdg73ZXaNP6xZxPSPc5pLKfzStzDGaGPniaoxoZE8xyAL1P3SzGJ",
  "key25": "U3D7bnoXma8oxistJakw7WBkWvU764eEqDDJ8BYKuvYsVxFg1VS4de9UA4US8UEX1h1m7E6jPbXWKRN4YyHFvB8",
  "key26": "2ph1fuejXn2LohhfrtCQ2oCssKYzCQKZ7JC8TMHp7w4AntkYpY5AuNKZY3b2EzKiiLcQTYp8JrH5i2N7Zpq39CdQ",
  "key27": "5XchCuL1BCErLVFBThZpBy8EtLD1ECY72tbjKqsDLuths63r14HghWpm5F66PGbAsnpM4bhB3SKQuFNN7F1rYrma",
  "key28": "23dYMFB6Xhfbza9wNJSn8xZLwvAbAStJK2uatKK8JVwzFXDXreHpASjmfAbiysdkddpxpTii4GkoZw6c2BzdT5TM",
  "key29": "3dERzpoTrsW5es7BeDCJ4hsMffdkrDJBDzS2EmDaDScKrFdfNrXrbXjTjziWbu7SkrKQDXgKy7huW18vU6akEtk5",
  "key30": "5ewMn7dFkeSToYAoU7QES5qa8KJLAEVnjuovNWgJXvim9Qb9A9enJ4Z4pvwfykJ5sJj2w37AmQGvDH3xi1JYW1Gc"
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
