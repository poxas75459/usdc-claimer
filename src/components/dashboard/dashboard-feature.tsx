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
    "3RZSTLcbQJLWcCPNrDeZTSsgwtsEiyMMMxrqxMYYWr98ekdmbMZkQzZjrFDJfZb36kX3aZy6wGvvBfFv5e4YZDck"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WRcF8ZULDh6sZqD4QgRtbUGA5GdWnkq4QoTLga39mbqSqjDLKYpNWYNkhQswwYFBXNGGHPkeD5mo3GZiYcopv5y",
  "key1": "2vMVgYVxdu7udPq2mvHjGDo2xkDNwz3aTX5t9LwohHRyXRwYeWqGSMpHjzPGpDukWBjAa1TxDVS89HQhGcfPY9Cm",
  "key2": "364U2kzGTsFSAnq863tyQLKnSMCCivL17U5s3aU6DdqA94NBitVbRusfKesUWAgNVYGzsbFwWZEQMXCsRJ8M9j9X",
  "key3": "63Z8PPD9qUiz4R6Ju3Asp2NbxokRBTpUhWz9owb6zB4fy64U1AzFcZcrNjwzn2mDAzQ6Yk9MpRryVQjWrX6Gczx3",
  "key4": "ou22JeGYcYcJerv9rohjo83GJmFfUVjhd7ztoBfptvhoA9P9TUYiaofyLQY3q62H6cSXjpPnn582C4ErXvzqeEz",
  "key5": "3bT7pBSQgVfMMqpSiYdqeUvh9P8PeS6RZFo7E36UQp192JWVvTrKaGxDkoVJcFTqkYTUBgbQ9MSYxBVyoEM4AUCs",
  "key6": "sZmTKfhquUsD8BoWTNR1BvtoK6TxJiiWSivfaLiAeNud8vTkiQBksswudvczWXCt3HMLae31TYVZW5f7XKxwA6R",
  "key7": "3idTmjcv8Tf78wem9KrDdDNX1qqvr4AmVLuGuKidWHGXMj6yqcGbVqE49Ery3Eo8U7sRHMEKuvcV7f8oF9uzjMvh",
  "key8": "4t7KqxDuvAqsgL2tKNRVpLwrfp6otjXNGyWYSkuE6NfQpPDTriJsYb2n2DNiog4778KHBb36LjesDgUVCBmfCUyB",
  "key9": "3zgr9A3XzJTYPEPPU8wJfycq54U2cuZRqsBTXm1ypvztoRWCV5m1DrpUC6YuuRNBVBF3dch3RrTzSgHYw1LTsF9u",
  "key10": "Sxxuho2kMqxoDFRKVicpSsqsbq9bksXSur88po7vEbEUgkdmDy4oCzQwgSaxQ3WHxYbB24qtWpC2i1fSdACAj6E",
  "key11": "4MNngbPCjAgzLHWHpCBVFiTR1iM6KNqxgTfeuBuDzFzKCHub4cybMkuj8n4zZP7B5GCyRRcuhrGtis9vtdBroe3h",
  "key12": "4LmXwi1jcEWFgufAoy4dxm83fUf9Spgp1cak5kD6aaJQinSUQtW88UrKvTsTTTop5CEb9WY7HCaAmCgehB5pStyx",
  "key13": "XRJsDQc9smiekpJhhSQGr6Rzx9414WVQuY84PQSCqfVczSnx5rbpxYzi6jU1PU1t8mcPhK845H1utj4R3gibkzp",
  "key14": "4fcVtxtRh5Ujx4fFrHw7DciqPw8sAKzrs9ohAGYjmrXd9iLpMGX5PkGpf4Hi1mCrTWbCR8VAy1ihw4VHmKDGo7ws",
  "key15": "4BnXTrFxdbztwKWWE9ywaHRdbhxzKJNcTSLcsiHcrXpCCCFGvYoTYsUo5ZFWkYtrtKDMRYLyADGqZJ78pcJuDCPS",
  "key16": "2HM47rc2gwmtG65fMgfX8AWhfPxgLEmTmMPAxSV3X2QPwiP96B19V2Xcsbpn9R6W1UwzSLwWS4RdkT9Wtc8wy7bV",
  "key17": "4vd25aAtByEJdxLcwxUH2ca3g1874sNiUV4PB77J4tzgPmmwyncV1gfso9pRNMc6NwVv66LFveeZMEE3Vz1dbssd",
  "key18": "BsvcotCBQCGgdurQYSftYSwyhZLjyWDe4tS83b4CkfN5WgGJq1tZFpEsCp9mVXtE7TfNDMNLvdJ6MYjTGoaggZf",
  "key19": "38n1qAhYephdn2FU3mJFa9oDYaqq3B6fDVs65EWQEWm6dBV88i9KyYQBxYQzCSRaYhMmn2BpNJgbTdFEQrQJybQo",
  "key20": "67T9rnZFLPGWX1rpAAaor78wKtvXpxqksuxHo8d8VhUQ77cVeqCF77qaTRA4LaLKKeP3wL4r3HVAhpigbiN2jXtr",
  "key21": "52iJDgkQwpaZ9JjWwX8MjhS5KKncXXf27DubSAMMqpUm2egTndUM73snpLqiQNUPx1cVsF16ZsCMNjsnraoTASp6",
  "key22": "4srsYybeUpazBsfmoVeX9JCJ1PrFfcBNWcWKh5j1oaTZzixT8FzDWkfCmM2RnVj4iMvmGD3Q7mDN92qJUJ3VJwYN",
  "key23": "2wdkDrAC3zSGSR1VoAJcwqAKxKxamieT6VCMzAaz2C1fxPYvLa4yFmMfK4sBwU6UDdmBoagh8QCW7GPwBWgDbL1H",
  "key24": "2msvXk4oi32KKF4FpKQb7hnYSV6hbqG3sBQMBZcqdYeNS9zph3QVZy1aGUUyghycBujkeL22dULmA45ps8G4ppUw",
  "key25": "5iqBq3yDkLtLCZWwiF3xrPzL4YVfCRfpdXVP3gcaCMp5XAtNAM6TK5oTiexijoMjQjpHv4x9QZP9vMX6tLQGhLh5",
  "key26": "2TZ3zmqtUg2nFR2f1yaZvWPcrMoTq9n6yf4qGxJ1G92pVDHAABsUuA4AG3iDbHAcPZDh3KbSGv7RCNisUqFEtqvg",
  "key27": "347B7JzBhWQiucTZtwfk6ZUvbadEXBZaLJyvXpf9bmFJvu5ySh7yBfZPgzhiJkzAZw9eE2ejYwNMGGBCmiH6Wft8"
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
