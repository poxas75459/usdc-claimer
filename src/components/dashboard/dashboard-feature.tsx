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
    "2a18Q3v8ygmfrYzCiTuhczVR7xHizNNoobiGtc1ueKeWVsYDwcvn1Ci3heuPRNbbRzraYR7FWGFavQoqdrpiwfsd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Au9ecpSsHZhxNkhm9fZC6vFNCjHFyf9ryCs5iABhmoLy3wfYbtKmAumqTbZaizCehy3iae78N5QXTwJdLm6u2ed",
  "key1": "2b3k5sc3jLwVPL5wo9n61MvxSwL48ye2VCUnjJEietMYPf5Gm4Tj2XknNqZFmw3v15UoYpPBhwZLwgV3NZ1XqqCh",
  "key2": "3pBDQwg79VYMbAfQNLaA3rGbPHmgycMjRGdk7JPDRiXSzpLBTiu3eW3rPbA7A8PUcrsd7LzmBAu7RxuunydfdEw5",
  "key3": "59tTyRx9sa7A94P9gSpYffwCKC4ND6Y6u3yoMvzTraECbztyWGPSirhvnyZfCVErviq9cwD9M2hTPr58hwyMxLGv",
  "key4": "mZMRpzVkQFR3n4P2BGVkksx2aHxy8kSwNt9yKH3N8nJNTdc3jioDo3PRghypDchGB3DtvSEPX9iqFCb6KTjENxp",
  "key5": "4q7Fat6ppscLo8JJacVAfZjsgMPuPsgr2NEW5m3e3H6gq34brxWAimrZAGmVVRPiLPEwqM4fZHxNoFD5QG12vtki",
  "key6": "3u4MSnhq7964MpEnNDkeqdzJS7XtFXrAhhJ3BgEurJnc1dww2kPM38aWjJDcSGuXifUJqKkrBRGRNxra2dFbi3r5",
  "key7": "4L2UyVbCS4KqACe9rVqE2kNSCWLrdymnpUFMJBtPGuW3Dv1ei8aP1e6Ybnzq2E7gVAxWzRkQavFHWvtkRV9P5ZM9",
  "key8": "oSYhj8zgShdU64ry6VRuhY3pgCKwYzVENM6kgaYxQuHDM4xqddvVw931cJGDS7dNVU2Yx8tXNWrCFjhJFbtCtq3",
  "key9": "4DPevKAHFWV2Kbfq5y9SAjh4PreaTxR97abRvT48wVNJveDz8HAwjfngUiipQJccoHcPdKgpKzNXZEdVQm2RQXQS",
  "key10": "4vJ6jbt3Wo1AQ2HvkXuZbANBcwGPAfFcxNaFRAjYAgstjm6HRQY2PVerfXocDaAcQmXN85kcvJxxcjTNcNE5G4z8",
  "key11": "65YzQnFp6XaZKgLphSWdPQ4TyJR1U7rSqtwuvX2xJf3XnoJ3AoHsqHJWRJYRypPnREZ9mGbpd89q66BMne5DnZgY",
  "key12": "2rxLsSrwPuCromwDbsMVYcqnC25iNyncaoqGz5HouJiFUecCdLkkhjbehBdR4sdvKUD8CRcxB6kf4rViUuStbnWz",
  "key13": "VcVqpCYQtY9hBZzHd6ifa9kwGQJ7bCtDshuox8wX4qBWF73ieTWCVnAuMpmfsDYB2AnyYBSRxf3bMMUeEpU9dn4",
  "key14": "3jA5ugUsJcr4QRex3Ln15DBtF8HHpe7M9y7BzLSCmZ5TQruRFuivjgPfrYZHzkHjfVHJvk1Urs6HnBvLcJixZ3gw",
  "key15": "4CfDLgcre1zBzkNpz8CGxJ4rg4fEJ9bScoqB6Z12ToZfgex2mZZGDAjq8ttgAHuwD295XyjnDNjKJLDaj3Fjjy6W",
  "key16": "KQ7C2LN4oc4Drex5txBtomTCcCTmgu8SU3mtdDEZJ48KN1tf1G3wP1dvhMqsprdYNbdTmgdAGHnhN2Ezfu2ExKo",
  "key17": "2z1bz3piSpmTJ6synPXwhszq7bBoauQu1fkkeL7Huiduu3MaEwBp2p3ZuvhkQdjv6UsWWJYjLzVSx7DV8cLZm1bZ",
  "key18": "4T6e9chvQzC5EAEDgRxgsi57DMEpNM3YTpJatiyduc7hMEyMxkZGgnpaqTWxXsaUzTXF4cXDi6zt3U2vaQfEZyj",
  "key19": "4veQWJH1jHDhCyjcU9Sx9KiUhr1T34VMKPFX3Z9meoKBJJWvqK7cjYkiHuiMrQTQvmKcieQSLQ9ysohzZhgm41s7",
  "key20": "2wgESsu6iGdxpvShTwHRNAySpwFi3adSBJydihWBUM6achzPTAHXxhWJymrfkrTxFwAMNofbfEoNiQfRZYNq8xxC",
  "key21": "4uhDnhp8xaqUnHkhDWDLztxUrfXwWSTSBDkbLcLCHiGGoyKGL4fVxDMf6Y6Smzs5wERFkBqsk4YocR9CKJFgFwrC",
  "key22": "5ewCFsFftccqoCpbUbcKimgFf3ioaWAv2TBEyhxDkuPvTwL2Lti2jZoNR8dn13Prn2eCE2Zo6SbiaFjJjEd4yWfh",
  "key23": "26SJsPEeAgeC9fXGfp6YAiLVyVpdCdFxV2ZhnGGNm42hohQBJNT35Z3nd5dWk8cWrniYztQ1SBCKsW4PNTFhzfse",
  "key24": "5dzJ5VDX51Ng5UfnKNdkLZ57spmu4jKRu5sDuuMoEphcWv1orjUBEdtjmxKV3M8jujnFXBjpAAHD261DMf5dTRF4",
  "key25": "41XzN2cakaSWFiUBf3inQMD4XrpeCJcKtkixH9BdAcEckHW47mB3dE4UTXG47Y5bg5aFpDoSnN8BdJ2Pr76ASjRV",
  "key26": "2JHbuiqXACacppJ5RJCe5keADiF1ch3iMTnkgsHC2R8sv5MDjhsHAwT4TdmirpfhPQfjcWoZ73pSysRjWbhEzrtm"
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
