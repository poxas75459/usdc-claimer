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
    "8D7JzszHof7Ajxv3LJ4hw7x8tAYd3QJ9SVVxP2c9Ktgd9p7BKMn547YcC43b4Vid8GaG5jaMJVRGpFzHheHP5Q1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iWuJ2uQpbaLQPJLDYS27vaWySizqkc9D9iXWm8GFCFrAX6ZXJvz8FgHJxuiporwxheWiKH5hdFW2DRDdi6sPUZ5",
  "key1": "25ySoakYU9zEkYGXnBdM1BZB31G1NTfoxtWdkGteiAZSf6perK8327faFCRvv2y7zvbQiL3pfp9hQhbUGB2X5mn2",
  "key2": "586PiRsv4f28cTU4ktegiaacM4k2NUGF8UC3UTYDfYEEkKT48sTFymecVLDh5rzBfNPV7oL42tRFDnFjjJFtpbZt",
  "key3": "4DxY3Nzw64ruAqHPZ9SiJN8ku2QkpcDAcGmeJUj7L9AeZs1zhvgLBtq8QAH8bNPkkB8JFaCjvQnjcaeWzyxLas4v",
  "key4": "3FhB94dPqM9Qvwc7WjFoaCmXk85SDXfkcAJ3iX5GaxXdGn1QNUbWfiDZxW7wV93YgVXPR7Qi4xZybXgoRqawaqSS",
  "key5": "61oTRdJ9d5o4nQZmqtTkvVDgCXBgFcuMJNQx6Mzs6YvDzzxAEvybCwBb1ByCW8WsvfcwUtW5DzFAE1gFHwGojkKD",
  "key6": "5GjDwayeiKaYmQfPvfmNZc5BjYuTQ4a1qKZwa93EHZBMJSom2X78qHF2wt26sXJRxr7FfszDYeti1LXj1WQRDuNv",
  "key7": "5g9KHpr3s65ro6WTGkZNghpVxqKnn45AD3hnkjf4EKp8TTFS3PSZkdUbS92jk8XpBMbg97adxbFMSVEfihS1bdya",
  "key8": "5RtcrcYSWdjaLbkX7oSfGCdFN2mo6eob13whhfAcM22FKxZ4Hm9drQzYFp6r8qkHFAFzojvriKrS6mTa4gwRXNtV",
  "key9": "y9dND8h227tHcJ4dsLxYGTJjScHfD1MoxbUBSQkQFYcGeEkCBNX9LFEnrrbMsZY92mTGuWXMScg7v7Yks3dnybQ",
  "key10": "2XSb7Xb8Mjn3tkWjGrJKxfysdktARiYU3p5J6oq3b4wX7dk7fdcsV3QzmutJtM98gmQBVD1VYPk166voUVmMtrE7",
  "key11": "4yzF5pfY6HWXCtX5L7q7tZzkNAcF4ETVDBpoJfpe1677cbHV33Ft34CvpqCdBSQ5daBwpYewiR9stEeCJUK8wHx9",
  "key12": "4bKx3aZgzQda68gv1H7HFD7d591J2ZCjf8et2CnrRNLzVgy49hGRCYBwpno69GdYKK7wV5pNWWBKEn8yX4z4m12L",
  "key13": "21vP1kQ5Pdyh4M4xkynarGvSj8fCqVfXU2bM6Dp2LWmDM5VyLF6EmkKi6WydcJ634zFV519PgUqG9gzQDai9qtd1",
  "key14": "2v6yEJjLXSRKq2C1R3Z5XTKe3HBAj2XAiMbkKt3ubTrvFwfd98Jiwep8vAWurCtyHaHieZioaxz7DBziNGDHSELj",
  "key15": "51L2hCpyqjihdLz4sLAFwU4k8zeNDhqJ1cnezgQCxFwVMGScnHXvfQanJWe7mBnXAjQna3WN7kea2uoTZrqGAanp",
  "key16": "3MCspPzghdNG9HZLhAigQ16iEGovx6zBXodAC3cxtV49yN2FxyHLYMkCXy9bHFQd5jWfY34YaZxBjiSySbsHNYmU",
  "key17": "45JqATscchjuV6tJ4Ghc7ALi72eA9osXTx2FG5yBFxUiNLUG8JUg85a7AhXqy2fKSixJbY3dEJPmJJrGsJKgPPK8",
  "key18": "5fYNVBYGH2L8fjTRDgp9t1tZPWhNwxngE2fcq9gA2CSRWnJ1D74ujom7CsafnZJdTz4wW3wg889VFCds81Er8TEt",
  "key19": "6By1iP2X21Pr5pXDma2bCipJWcdY7kNFsp4gct5ygho9aXxt4fpHMgydZuks4KQFrujDHEKGNYssv3VXzeU7i2S",
  "key20": "211wANnvU7BCQKsNsRfow2G4v5r24Zvjg2LjTzoX9mfAqJmCt4cUDLHeyGJaTVhgALp4xnucy9kF7KZGYBCi1iNV",
  "key21": "1uwoKmSE696iSGMphdWRMAZSsfnDiHy25B3CVXuBv8LwS3PSKQDcAkAB3PjbLtQfnnake8ubSz6Tt9z4aqxeiLn",
  "key22": "2DyyMD41hjRztCzBHoYvZ8zcp9aV4Tr2EADvDDU7n8SBfDNYCHfXZ6MUjUT9dnXCUVgbfRSW6GfHjoX2GaaT8v2E",
  "key23": "2baFG42r5Az5xFXHRwNWKzX4U7RSP6v3iG3qxAzUVYiNKUXgrme8354e3aYUfSmw92BDQ3MiJPgnkz4vjFakSsz9",
  "key24": "3FZzKh4Vn1jUAxrzbC7JUrHyUq4shnxa6i4hcBHvjXkjLpk2HKHjmXbPdMCt8VFZNrDcf3APtScXUbrJMvAVUccH",
  "key25": "ZJvjdKcjVNRrJzjJGRD5jYrnYN2WjMzPQ351Eqk3bAnxnxXTKYGLQ313YgEvHAMD5c4yYTo2Q1r7GEvGPtnEA81"
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
