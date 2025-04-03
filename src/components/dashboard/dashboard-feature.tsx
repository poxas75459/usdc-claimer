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
    "4hZ8KsSwRy7sp4Xsiq81MN3VKmX2Kovdw4PmKjqVwWi5aGkPjsEG5e9tAMFpZFmgQzXM1ZwXZpBz9iAe4UtWwob7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Xpi1yAbGU1YS8SGnFFe6sQTtp6FYBxUKda2pfStShstUpcsdNZGdZ3rmWcqyZjkd5C8GTdTqmvCH2a4v4eSUTHE",
  "key1": "5ZJntG6BVHCKkGFruhkRRUo6fcTH2ahy5Hc4GVR6rRdrtdKibSNitvBLiTPL6EFcxNV7qsAJReAWfWM5dFa6io48",
  "key2": "2oGcciqsB5n1TURQN5sgHKC9jV5vdF3kfQTAisrWbKrN4JGnNCoTSKGRiKMGNtQt6RosyzUkwbytasGoULk935s3",
  "key3": "5n3j3LB8D9uz8a6onmLuDZodjXC3UgWoqDfkVz86UYyWTdX81gh4oVoh8KckcwVbbGWKFPKts2p8oJ8pyxhqVzSu",
  "key4": "g5riyxq9An5VsHCGMoxFnReKkaV5tbhXdWnrCsLEcvKmChm3fiZnp1MV8TQ42Sc2sf5cRdhSVqVgDSNsD2KSYPH",
  "key5": "5poxQDPYYC9CzeF1a5Pnk2sQ49EQ6mvzapWzZ8ZZay765oV3x5s3bkqvpx44ZUkJnvWLm6vgLktEhmNuQt8BEcpi",
  "key6": "472GstyDNqWL9JMmfARSaN4r1CQNTq3NVBUtMvM78UA5gJ9nwcXWcyofgD5T1UJCPzyyFnXriyGLbQyNXmxzuHj9",
  "key7": "4iNYRnJs4U2KqchEkVJwrdWKgeZZHNnDivwJLf9LMepZfgW7GmuZZcEkRrJEuTe6xRoHwMqVCapjkxNCzb6Tz9QM",
  "key8": "5kfXCUsMZWVBxyF2r5JGCrgrTGv4mPWbc155EjajsJgAbsc3uiayy2Uji3SjeuVe4u2Xg3NiFjTthy4KAAetVDja",
  "key9": "36RncYttzLBvRw3fygCH6fKk4HjmBPHWE9kX2HaQYzMJYXREMtN3icCWgbnuL5isFmVtZZFd78V6P1HnQuQS7Z3c",
  "key10": "2EduWAKRxxjX9re9Sf1kpNoPEoZjg38o5f9PX4E6KDvHPvJz3pWjfJhGaQz5ueivKXSBbkubi4mtqCCrJdNrHxoc",
  "key11": "2d2MgvYQzDFjxTHT1A4o4XmdRFAaXQAobVHYvrZFD8c4AcJgxGjiyrBuedmSGnXNtBGx95NiYGJbEG6qv7ZXcRqM",
  "key12": "5x9eyiw3tEBJwXMUjPaJ9z6gxfPKk8nFD4bSeiEXDjyLsdvb1mSn3kvXxjGChyWSVPYt3vpY6WRiTkPTeUpig6Ae",
  "key13": "5J6T9Hamv5Mcw4onXiHRYTSiYGtLfEhjQ2d5B3qCniWXpFuBE6pjog8DkwXAQoVySK5Hc2tcJ1PD9JpAAEWisPE8",
  "key14": "2riTDgB6a6xTYnfze6miB8rkPLBWg5ozZVfBsLV6Nx8WoNVdq3uqfKdpCytJ342MbmAhEQh7Y5TY4XYAm3PUcRod",
  "key15": "4qyMAnm9gpxeZRPBrpBofBg2Yswpj93qKw86PSxsSQ3LBScUZz8Uy8P5LF6qSWybKmDAbXrbyEZFEp8nv3fA4Seg",
  "key16": "e6s1PdsaTdTGsuvoRYX5vNTTUE1fuqK2AvNfJLuAtwTxR93Q8ynnXcQkNgD9nz5hqTVCCcB9z7gGr7DMMjx1ww7",
  "key17": "4iVAthQ1VTk6s7Rcy5jgt73oNemCrzvqDUmZtTUt19wbwXhV3rpcZ7wsaqCK7RTbUgJ25JQxFjsiCSUxZ35dBved",
  "key18": "2yeeGXVAU4ZptwRHn9pZCS8j98ahTHeGA89KVCJGiJS2ETL25e6uUBHtUiXpbUC47xwUXJxMW8QGQrBGSF4iE1py",
  "key19": "3BfbJqCYRNX1aNcm7HMkowFCecRqLdNNoCpMoUKoFADxSiXVKyQACWFVXTQvgmWEjTSZB3zPRUe7JBHHHgSwLzSe",
  "key20": "3hpkzoX66EGzWsARV2dsHktgnWo9a2JwYdeeSa39m2uYqPobYdEdFa6fXFMBDbbrtEpYbtieCRsk6CSABoMrCiEv",
  "key21": "5XjKshEVRuYm1kNBc2ZdYxYW3YeVEaZC6Ss2mgoKRTqXAqbhKvBXajSoKyDYmg1JwzuJveYBrTxZjcfHHwrYkS7j",
  "key22": "62Crbgmehvo1zmvgbFzV12GLY8syqwqT8QkJAhmcycu4atHgRxoKUdYxaEoWLTse4tm64Q2odVxkuHcLnRo8Lzv3",
  "key23": "5HA9jUeQE8dMhBqCnufsQvfZ71pvRKyo7zepoe16mLyfwGikjRSxM8r5U7NoRuF1SFNQzyW2z77wfGxBc2BPPZkZ",
  "key24": "32z21CNubvPnGkjQRRvq7eKYTr8WGvUpLJcqyXJGhvoRsPysgrbVL7E2vhd8kR8FYTULGBJyYTGbEd4vfbqfRM5z",
  "key25": "3322SkHSA1o5CKnoP4ECnfNEVxPbMVh6ADFE9JL7FnP7JTjd2roRHnroDVwDQVesKkKa1MnYK12PRHHTFHP7ZLhr",
  "key26": "iKj1VCxgkLxii9EUDJHLkTeBrSrk2xxanRXZVtc3QUWrYy6r9ZuQsYsZcRqVWidGhtgVcYjh2iNnSkgahEK16HE",
  "key27": "23uz1KuWDWduxmEKieFbSMF16ijG7Rxi9w7CdgsGaTnYcffvy6sFwHnZnqTDvtsWsStSi1hkwjTJ1r8y35SfAssJ",
  "key28": "3t2tTpYD79DzW16eunKycT1tHWHFEzW6u62SXTbPwbgA18ub6B3dB5SV3zbXh4mdCKrc6CffJMFLyBfpj1yPHsXt"
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
