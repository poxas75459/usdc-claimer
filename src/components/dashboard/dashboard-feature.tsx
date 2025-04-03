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
    "5TUX4YqxzhYAxCSPRUuCAHoEDAyCs5cU9Ww6UDFqVsaynbxRw1FBjmDxm6N7HtJsNw6qdLbLPxczgvST27TeGo4j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XNrPDmMK7uXr6Xs7RaD7AR1opvo4c599xkFtB8kESwJhgii3ixS47zjdmfw9c1ezzuNB81aQNtwtz9Rsk8A7rPr",
  "key1": "37ACMJmq2bobW6awRkbEBNH83PZCeFhBFyVZaJAJv8TjMfQXSJhztgqoq98uuLopJgZESeeq5T2bbyExPVj1uHYw",
  "key2": "3ThZmZRgPbgqtrqVgf6nvMDs1NHNLwdcG1r9DmPr8r1RpQAuggMawrwbLo8YfeCnSDVX7Pk97FvdppT1ZgCUDEkA",
  "key3": "3PFHTnQ9fPLXGHAcYveFJEbmFu1vHBFVZ7QmR9NGEQeYhfz2Zc9m1rspNoihDq8yrNqjPa5pcY8JjXxYE4wT7z3h",
  "key4": "3gEdq8xQNT7PFbBPC9drphdSayP5nmQJWhC71SCpr5eYQP3VTrxeakBYWCL3TM7ep14uNcRhtneF4DmFrDrQ69Pj",
  "key5": "gE827JfbYifk2GP5KrtPsMehTsG64ybHSiyHcFRZtafoJtkw6MHbfPnnpRqpzbe5xgUYmSYjZ1yc2HBY4MkxVzH",
  "key6": "n7Wuz65x7CYsfkzE4zZmqnnqkGNyVDmsVdS8VtMBqQ8b1nhX8v49tQK7adk95YsWL876b88MwLotq82ZTSCteMH",
  "key7": "295ezUeF6urcUTaGe3HyGkVkFSC4dDXZuktQnPkkJ5E7mhUM9wZmy2aG8Vhv8tzAiMzhBA7qYHcJzwg5qPduAszk",
  "key8": "65TaRs7UkepxA7xBbgzqLQ9E5XombPpzYAqtR3o39cAw93erzn8tBUPzmgsgVScH5ZXUyD23JiBDGprDzyVFebhq",
  "key9": "mXCAFfBSfXyWnsPxWJDDjyyX96pubPhhErmvQX1uVfsUcqAnf9nzCCv4SHPKNh8goLiQvrW8nRufuNED79ZywFU",
  "key10": "3PKiGRdaB1yzQo25NFFJ3ymnY8sFuR6eAD1yCh2p3s3XyWSRuErcHvvjwvDoi2jSzs2b4MRd75WgMBVFoTrumkwN",
  "key11": "4oGmyuwhgFUiFPnHL2GYas6YPQMY9UhupetjUnT3CsQBPJ92qWwpNUredbRpuPvDmJYK58ddrpFDbSAownN7uXd8",
  "key12": "3Z8YEaZ6DsQG1xvVbdU9fsywT8XgomtkvGCuEhtaRE55m1LXwKDM2AL4DmTdN2UphFnhivUrnjm78QiK7pF8pWJK",
  "key13": "5nR2nRNx7Fy1ERx2RtDuvY95TkykYB7imMB1XGewriBNdEuAYYheUVLEer9rtFt9TWDXHARXPL46c7kj2qzUu7u9",
  "key14": "5z3xEzmaj9G1XG6rJqDLFCZWSyFKVZAoCmMAGyLwzFZQTWgxNZqrvXtbJ5JmsD7r7nfC4xjGJ86hS2SqAUWrYP53",
  "key15": "ugcLyr7RF7qFdP9qpaf1aboHPQDtpmWp1dsFrPDDKKEj1H7eZZye7JGoszDtvS8Aw3Hj1wz8MxFYsZFWiA6LbNT",
  "key16": "4AxfFoe8UadqkUDhoXsjFgkLCfFXmdGTgRVytJzPovuac3cgJcPyxGg9vLvurakeaZPnsC3vfJCMTKXxk4D572Qu",
  "key17": "5RKfib3h1XbPMk6qsDR8XauzQ47ywpPvSJ7yZUZZ8prdW2B2ZZRMD3sb2GHKWhHUSrrVQDPKfQFw9st636rbpvTs",
  "key18": "2gpaNQoiDnY1jWqsUuCXo8bzABN294ZZs5oWjrKdAsrBuKiBBqvsrDr9bWPwMRknC9VFY8NQXs2zJMvV19495mfj",
  "key19": "2rYtapCgLqSGeqkMpcz2yLccmNoYe6zRVUEoJm6BgFrYi17VKA7Ha3ShLF225NVK3szNJYYAq1SHAbKFwq32hr4d",
  "key20": "5Y74UjS3iqHQcF8kZYFLrsNjD45tiEx6xKNwJGRGFYCgv3FXmH1UpTEQ2euEmZPTPThibv8EBiJXgkoCzTE4TxHP",
  "key21": "gGH5xEKjoYhq7AmLyuproBSeiqkpEGZpUGXMu15M8mTUbvwWviVAcUmMDowayjDnqGqDtoJyuzmUNX21WQAofNt",
  "key22": "bcZMAs6vUwvGio4Lwr5jpY8qR4T8Vwwzi2gBHQLBYPPduEaui3ahR2XjzCRgTLLcto5vbx7QDvBTXvW9tHKBd1z",
  "key23": "58FUo1xPjTAPpQDtjHtdzGzQgynYXKAvPxEXPXbQCHcJPoeJwA9ezEBMd4TBujdFWTEhvhQr6ND6s2MbQ8Aqio9y",
  "key24": "yims55szuFC7B4ku7zxcsjCP3DGtSDXqMtm632vE1dvDGQdV3uBF1p4vvYQkUj5c3XabzURSgn6TGLKNa6XvkqV",
  "key25": "2ntFRADHzg7jbUuKztdwmiwCykCp2xSnN7inf61cWXLaZsAwHNdRcs8kubFJZWs44t5dP8EZd5Pbq6QxwNhcc7oX",
  "key26": "5WWgwKFjQELmRDrarthGDFoxLpUKWb1UmZPK54HEYWwgWKkKv3DWvogr8tG1GzPc62zGSVXfAGaMk8ecNWdfwq78"
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
