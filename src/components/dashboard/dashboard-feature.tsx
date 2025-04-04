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
    "5FE7kH7swnhZaB4uGLczKaj9X6qobktgCDuZPtFWzNdyJ1MxWAa7gGt9jJFon9UBSsnvru1cizgcroJEPXGUxkjd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M9QumBG4q5UUFkmWKdmUeVnMyuYw34V7AoLMWynjRfJvinoDUsPh38Ji2HN4jS2jmn1JRvuk1RY4kxgw3KBvdB9",
  "key1": "2p48CbtiTHMeru32rfCPVc5GXF4SnvUk5iAehyAv9QYwkXSatTk5LNQEmQvof8RNhWg1YFk9gdBJzhrRwrSBP5Yq",
  "key2": "4JH1qh6fcTmfeySytrzHKFY1cdrj8hSxGoo7sYcEPbetfy3EkrKHTvXKdKRQg2ibxYDsLymSo6HUvk1oYeNPWfPS",
  "key3": "5f9VS1oEDEXSyfekvdMRU1nDHbnh2VFCTtVRY3wkCvFey1tkhiLN6sKQFAKznDJQj2QNc487Z1uFQaipnfCGtNmM",
  "key4": "2hG3anbUqKDtt2NhgUdc5Zxc9ZFrhniDKHKYy3kyLF3DmrE56BNKB3Vu8m2dKQpTAXDotsHy8oQGytyrumqVgcm",
  "key5": "2FYNkizLSJTB9RhQKZNgy5eXMc5RFyqMMsGDNrSZMuyP14n4xvuYdTse6humPiMXgA7UchngoUF1TrknCkyKYrRY",
  "key6": "5DFzL561Qw79uaZuZuQQeUknvMMVWCrcE7npomY9e6zAoZMXTJj4E1SUbbJxQZGbE7fEqPKhMtqAevdBS6cnm7rK",
  "key7": "3D8gR45d4AR6BpLNkgWsBCyp6TsQq5UBXZ8QQc7t28kinCUHkyo7pDBcs647RL6Ah5Sfw7LrwovoBDiCi7XSKUbJ",
  "key8": "5H93FtzXQT6Ratzs3fJzGmcZHAZEr4PrcXg6jacuRvrpegQt6BaSQ7HFiSAvC9z5SFi1qcmpDTj4NCjkNfGE22aZ",
  "key9": "5mY51md3jVncnnTUyFS5rLYZW9b8LPicN8ufBELLe4BL5CfZkgCvWezuS9FCwVeexM2cNK9TzQaDrQ3XbybajoSX",
  "key10": "4SVbjM4DvKykj4hKGCV4bkveZhZX7UmMagFvY32xiLBkmwAw8Peo77n8Uh8Qapg7ijXdKXREoouBkFNy64nZfMvQ",
  "key11": "oeTbWMsaNQzd9s8aNW7qmdCJaUi3WuWzgqLSByUbWjYPef27Xryjv5grR7XV5XW5ikHCoctBGAQT9fraSbmCKrp",
  "key12": "5ExNCoKxXFHnS1am15QuKXsDaRnEgoE2zpgS5aZidDcfsQi2wCwkd5t6VTtGExvzJ3UqqH1AdaWP5ryU4wAvymZz",
  "key13": "2DXfwHvedocFavZdhkbAmDmuZYb3WFqLdHkU1s6jZxsVCAztCSoMzyRkuS8GnGMVcc7rDYpDFZGLE9mgUNjmoNYg",
  "key14": "3HVkY868kCWm3XXsstmT6zPXKZxjyywHDXzsEJFDA2CWSPoacKLdN6fMGPBvdDce8kRSpXc1CbtUhQYPz7bJQ4Yj",
  "key15": "2Kgq8ueXnTB3t6frDAQ8y7afA4FWwchbd4ccTRHqwGSG9e5a62p4TTa1RZ8kehroHW9F8fpPKK5YMXfm4AnzWSEg",
  "key16": "3wxrDZ2trjJ8z3oq6NeaXcoXiuyF89wok59ZwF1PUppzrJ6Q1as8nAzksEb76TDzUGfjeugSMkxF3FWp1vTKuzsi",
  "key17": "61hoTCrSRpLKptVp4VPBKVWcMgWgWviMZtvrMKfvE2KsxjNWecP58fzsaDVgqe4bmZBAqmU5sXN5vpHa2L2vVCrQ",
  "key18": "3gfBznogr7DvGPsWcXwypWte3H9d2i8EBAHq3eqmtZyneFvTHiD2W3fGcMZ3tvMStfCBoCXj5ygNRtAubSZNQ8Mk",
  "key19": "5u8XuNQ4nppzF8h7GzfFwRQN8DuhhS4r5DNxmi92QiHKsVhNNPQrujc9H6TTiE6ds6Fzq1oCspmMKobcSMCJPEJS",
  "key20": "E2W8A7i89c8Y5sNh4xwXaoLpFCfcXo1qb6x1CfzmoC8sF4ifKedKJBudiWTTcu1RU1J74EZZKPMr9hAAz6B3AnH",
  "key21": "4sTboqqGywcCxSVnc4w7M2hgZscXjZf6eGMm4jzAzvcS4e9tDa6JR4917ibAnzs4xkzTWFQkqkrs5fwRTDiUCzV3",
  "key22": "63hQpLixuzAK1eHWHMhYWCAXGCmCwijJxiYypTt8EvmbkzqnrcBc2PgXCGK2ygNAABHVegmhMGqjSn3MDxRujsWN",
  "key23": "35bzEwEZWh595jDPdve3Tuvqq7y3P3qtCXdZ1BFicedhnnt4rMAgohoenasfq67kaPo7TgjssXyBM7FUV7b4y8Bj",
  "key24": "5MV9ZvuJKQT8PZhL5Yjuk5nhQeJjBzpDVp3bsNL5S8dpy56T7r5QdF1ZYjaC9YnX7utyzSmWFQpkhqPqA2jFbQeB",
  "key25": "65zEv79oEzF7BfbFPyAQpdoQeZiv3p3dAL8z1F1Rr4uYjRH7JQbUGSbwTYcEQnjRXF7ig67HvKmAGFREzcXonsbj",
  "key26": "5skLxXYJQywAH7WZHwanRXYKTLFN7ukYPtLXsVwDnsia9EGys5AEPv3xLn7YmHX5XDskpPgn595iFpqf1Wi5bKAp",
  "key27": "55bdci1PpuBsK5Kzg9truZrAwPhFXheyUcLBqFAx1yeyDT8vg8Nbj4G3UxXfQovtpWwuerzp46RAmW1ZdcqKFmfd"
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
