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
    "N8Gw2X1pLBPrQdcFFeL71GiyJNBoJbsDmS88T6P2P5ynQrJw9q1sm2Zxm6iMgx23JvWakpeKLb4pFYagTZF3etZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u8EqdWfExe2SWR3Fzf7MZJNtnyPTxdSHyn4kXB7Msjdp23rwvvMRrGGPo7PXLZw2yaztN7JLsJj5JypYdgzv6i3",
  "key1": "2cQQVSnJWcdectVGMAsqdBrV1GTy7iNpedxfPcCsWNotSeiy7i9ey23ShLNeCD8R4zLwVimRJdqHST1MS8v9chH",
  "key2": "4evbV3TEY3KJtyZQqaS3m3goPk5Q1P15UG1GJKJ9aiWPC2pxXCkKzgjNcSnYDooVcgSkGzSxNq1jTusfcgQCwr34",
  "key3": "YrNjCfi858MBuydLnC92zeimZ1LtbJvkBQiDPXm5Aas6g7KDZAm7p9hxR2xsByjrmjGZKKZWmabNsgY4VQR5fUp",
  "key4": "5tdfBak1bK5beTwM1TVSSVFSxUS1hADMHuvZgdBygetxPC7vvfJ3Ah2s5sfShLBDMgEWJGC94LfhaoBpyjrxXvSh",
  "key5": "3uVRpCvZTnJdQj3QPrEoWuUYTCDoAScnCUFd95KLPRuCZLDmgLQi4XGbCJqh5mkerJhXFnAQBTt2vkTwJU2tV3Q5",
  "key6": "CjxGFdb9gbpz1kabcqRKzbEqCT2JCLXBDvCQVF3jBe7rTeL8peCXVtq8WW6sh8jHAnDouJF5n5FXUHNEgf3zfKU",
  "key7": "24zntBTpsdQfptBVteRKbW8Bu1CeV3deCzRMcycWt54MhfdkH3ZHKJsEhj2dcvJU27YHTSXqiyJVzGG9NnZpSaaK",
  "key8": "5ndu1Vjm1dS7ZQJNdgZDhUntromoyTadvE2sbeCXSWAiFBSwddUBcCwE8W4Fi7sfG9DTp1o5euMs4yT4MMtC2H5R",
  "key9": "5rwJayTkPZsSzgGhe3YERkfChYFa1g8Ug5jEP82MNbGgTywKbtoKgQKXhAmwKnx2wXhz3CBGH6LtdPTR3iYg9TG9",
  "key10": "4VWNbspF1tYdGk9BzpT6WvQtCwoQ7s7ogywGzh8XPkPo5jwYYXSJVSyG5Vay3vnYF7WFHWer2Ui91GhAKbdyDaC1",
  "key11": "4QyxfmhhoyiUsDsgWgVLk6rfKctdxRorYQmUycJfs9tyXpCtQwGFrbfTQw8WVgea3HKbnh6Gdnj9W7qZxSuiCf9t",
  "key12": "2ZjmgaLfd36a2ci17y5jFzB5Ynu37ef7e7r5ZfFiVq5BX6AWYwMAQEAKV8RbusBWxH2th1enNFH9soqhB7U8ptFA",
  "key13": "2k38hWSpLdLCHrsiGHFm3gtgH8TV6qkEpDR4H8GVEzuJQ7Yw8Mi8k2ejk2bJBz49vLhTWz9fVEcYVC2gYUZrHJCK",
  "key14": "5ZkybSxzDK2t4aKpoDbo3zA91769UNzgQtC2KYaRho3RFm8da4cpU13ZrgQdcbAv5DU5xKXFoyx1MBpjhz8yXyam",
  "key15": "3N4uNZjVZV1t31B1CGNeipw3JnWMGpVxBVDaFGmmr6BwdsZ4F54Z1RV5WqqUJu8P4w9HFxn1K9iNmHmBaFzZaMDH",
  "key16": "3ARCxAgzVEckUzKNhdkHRF9WfDJdbPgBAKpqZ6ogrYxTCFDRdouyZ6XyyfXQovXhn8Rfy9dRf81ynmP5uYfqLmvm",
  "key17": "3UpAuR4qScEDVyF2UEerHocSynKCrD4WBcf5T6gwXha4ARtSQDqKX1hqkfEepuh4AeYj6jGqU3yVbSf3QfVB2HS6",
  "key18": "65Y4LF73AvmkoFuKohD58BQKWZd6g6r5mDQAddsLdQ9bHxxbH5dnXME16zHSqSjSi2sSiHV7L72YNW8EKZ2KcurF",
  "key19": "49tjjRm8S3ipAgTkjBgnrdensCMWbwmnhK3YPe1LJSNvm6V8vLDK8kuMgz1fPGXmawPW1fzJgbNBMXeHwh4Dif3M",
  "key20": "3Uod5Gy63N3yiivoAB9YXKdxP1gSqgbn8wLGeHuHKywGM7NtjJ6tiNWg1SExh8QPsyQVPRG2LdjmVNmc3F16Dkv6",
  "key21": "2DPBGX5g6QHLZpG3obzPHfdhop6EfHyWUv84pyoH9gB5qa6FdEywuYVoUnbrDvAWwMLKrRYG21PG4xtKz7WLExdk",
  "key22": "4pvdir2AT81i8VN5YGc1tHnRmZG1a79TwSDgMjusNYDYpAtFCeeAzfaYtMEWMDwbKPb4A2Hi1ANvLPVvDCdQ7c8M",
  "key23": "3M9EaTUePXjLw87ZmEGvLd4zGhCU9TvznK3S1qYbSeMqiy3yhS6mnuYVzmtngfvoVehnJGEWSEcETHzfcH4RfjtK",
  "key24": "51RBv7fSjBpNJiW1Fg8grbvqHxZPcRNMWUa2MeN3Dur5LGebYoS7HgkPrFgwQFgEwCRTPBgjLXsenESGoe1S4TGw",
  "key25": "3TWs8HuGcpDxb9NTfv2eSfVwWuvemt9jySdyVjfY2aAxmJGxnVLwynkaVXADNfVN5VZmJn8vF4vkGre2u88uYDjt",
  "key26": "3k5NNPZCeU9n1zgmr4YwZytQTBuuRQ6pCzHMrCEXMr8QstSAHux1tSs98mhZ2EV2Rvtn35VSBM7te9j72P6Fpt1X"
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
