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
    "3xz9LPKLTF7ThodcLMiT4BerM5Pi4uAhMPSqaLTn7TAX3N73aH7gqE27nyfPkqMA3Mg6GL935Fq31BM5PinEXtNs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oDQoRuiwtd8osGHPz78Y5kconpcwsi8yJH1mhQmt9wH6aawFtaFH1K5sdCgxpb1nPvRqsJJPe7duhkyCnhMFKK9",
  "key1": "PW3ASZ5tygQUAGVcTZQ7obkMnFryNt5c2qBy9756moV5h5B28M4917VUABqtbqQvCorNjdv26u5mn7vfBZ3tgFK",
  "key2": "3zLdvFCPzP7TTYeKrM9urg62UGQxb4fi2fSDfP4TRXYg6xNJv1fCUHRra1piYb5oxrcJ4xPFpsoT3xKjs4nzSJ8g",
  "key3": "5W9e7K8pBREP5eHEPdokokZAwukofoL7kHKojV8SapgyxQUkVCcqxdrdrh9Sivqm9iZPVNPqnG3QC3Fx7KibwzLp",
  "key4": "9ReErGGrwt5ANxZ4ktSooMFmitvfM6YXs5YyacF32XfGKApF5xEJWCq4fX2bDcaTLAkZQxX67raxGZPcDLAPjCJ",
  "key5": "5NHBzfQRcVvyFqJhEciqrcNJDoBvziQEqZedir562eCqvfxXdXc7tPBF6YPGHgkeVL2uLTJQwAJPMPjtbbVfFSDT",
  "key6": "4SKpnFFn71QU4EtQt3C5nt4sN25U3YdGA97edMM7FnnCgujHNueVKRijBKJGAuE2ztmzTuL3mZ7qVAB6dKF2LAac",
  "key7": "2aMVSxT3jdVLPKruGmdmsZKTUUYySA4uq2secabXJUGzE3ccNFqfB4huY2DWmQ4UD43aVHCzrgGAnnTGhYDcDJLw",
  "key8": "5kAW2hP2uRZ9QriisUZBqGCa9ThadNLBC4H86nKKyF32M76qNTJ3N3qHuLTt8AAk6xyTMjNDrjD9pe9vmeAZiZV4",
  "key9": "3URRF59skoofiycLgYkH9GcdUSyKUyV2tCCSNpSbVvh8KrMmL7uopRcwHGYJRGX8hoj6LyynSuHaVEXr5Wz9gE6h",
  "key10": "AMau3MBLHvXCUmgPtXjHYQcxcjvJ2b734AV9hgbGhsCia5uvSYEktNQeB5RfmRr81huyzqQkhh5Je4UBpFzjaUW",
  "key11": "4vvNsW5pum6GSa4zw4Djw12Zn6znWTGjMFWvNWH55risio1CxcDRTuRfBuFsjAXYPbnn2Pc87ijDPNW5ERmWxY8V",
  "key12": "5qD4QGKNkDXKVw8ZHgZ6SwT6qUaedKFcWe6EmrHWbgtefvRBmR2DkPpWpLvsFu1Kmj3Q4jmJD2PweUyGkhB1Uuo7",
  "key13": "2HB3AwZQ9y8Xq61b6pS7bFmevKmqZfVTqfTeyCoLsGUdDVFEtUAUPJcSGGYKyLHExQPx199AwiHVmei9eVZnRc8C",
  "key14": "2MqouknvdBmWN4myBbPEnGNTjZ2UUi3SXZ4zauACSibhf5xgyqmKGo6KE3wrm1BfygmjMLtNW5nEueL1ki6EA2Gw",
  "key15": "ciHhzMNnGYs5aju5JE6aLc1u4nToe283dJRQ69HWurjWFsvUC4C4cD37wYv98WJ4bmLmacyaroMdsP2zzAS8rCY",
  "key16": "5dtmYy81JjtBytfjeQTCdvbjsvi3r7qs8pa8sBUvFrgA2ykKTJ4ppqtzHci5TFbMkBsX2MbeNYCZW5HMrAuyEpzt",
  "key17": "BKFsqBFCCUTieqB6VaZGQrDrys3j5ozfFZycvZ9effouCSCTsvfViQBPDSQzh5RPR6BnJ99K3vdumeCgy4z8YzE",
  "key18": "tzAycA4qiY6RJpZbo8ASk4t4qKGbq7QiNyeKJbqHToDDhSUFfQ5JYTN8mXkiraQVJ7tbAFt41FftWaRsJHAhQFR",
  "key19": "5QiNtNFx5PtDLpGnqkE5J72nnmaJkYbZC2BuPoKD4cevWM4kDfYJWRv5QCY6AquLF46xzTVPP9FGZLAkRXaTK78h",
  "key20": "2hBqomXmDJtHdJhkhwercGmUVR422tAEnXwbVDZQLfrt1FRdU2EMcq675gAGLg3C3UhzdMfJphSmxtT7gzhNRn3E",
  "key21": "3K6HTfHunezbjWR2wrodR9QcQJXjmb365maiJvT46RG6n8Wo6z1vMwD37zPDYhLKtZ7uma3TQkVoANcW2vKzyZ3U",
  "key22": "SSAo7J7MgGzPx25bPLQczH8hEq2c3jN7PFCA65ubkdjY55ShGMWz3svYjWW86YYfbGfoppDoWp6fvuo9BrFauwF",
  "key23": "U2raKgBJa2zWxqvoNLV2GikJS6mZRKV9VdHYM4fZmo58RozsKEViWPr3BpmvCDKDPAXwFuDJQTZAuhqaUEdHBTw",
  "key24": "45zQ7krUNixgYUUeifdgmWetdjhbBgg2VEm6YzxzyuCVQxCPo7YBejbDh3Dm4saxrLcyMahttxTasw52XuwaYGtX",
  "key25": "2KdEvoDMkkX2HfFvBfYp8C9cZxGtW6MMMF5zMFcwDfeTZ3udaZprP4oKPiDgkv25A4ubqwe4FBN97GKKkC3ddnsQ"
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
