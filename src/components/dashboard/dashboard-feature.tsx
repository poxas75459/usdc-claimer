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
    "3QDWUbCMtZGBnpUaqqDaBURgyZG1AafGMhD4hxdLCvvkZ7JVpJeLSPshG1Cz2yHGMeKeE6VeG5g8Ja21G1m58iqG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mhtZLUJB7cVDDeGizAwtQtXiTanXyr7AxGwEoX84ZiWyhnsRLvpw5FyvmHZofaPgRruqz1R6TLkKP6TwMXncZ9S",
  "key1": "43KSx8WM5jrb6c19pa6KDfDKWJekj3RNkYtwdB7c7xKHx7AQTDPGadDn8RixioCVCj4rVwtZNYVhjnr2ZbRaYZaw",
  "key2": "TLsAVt7Gd9D4FJGNRjHm4JboEEjMAwBMNaccE7obMEp4pnhpQ6aC1K8JYtc12gcevqrRKrBGY4zM9SrxjjnizV7",
  "key3": "BAYj6fnDtYAwMeZsRaNQVyBBtusa195YpLpxWmhMXzEYiDg4YHFThrQtEX68HiPU1nKNmpQK4MdTig9TyVQTxzj",
  "key4": "66ua1bNxDp8TR83Z2jZ4fSC7dhyEMTMv2cDgpP8kWjdnASfd6yivb8GzqAB8xHWryjcuJgKtZEQL9kiPtsQyCFV7",
  "key5": "4asordqTDaZYHcPWh8nif5gd4UXcbqhSZcDYdAubWKSvsXzRnhu187zzgAUFS1tE1jsRDojCrcLH3gixEJDprdm6",
  "key6": "3iNopRpLb8ypFufSFSbbzPDdaHLHbBwvRLsCuLPLuAhtB2997SzZmHsiPThZf71Lv1Af9sRpnNURYZGDciGkLDST",
  "key7": "3pLqmy8DfM4HuceAfV4S7qZMnNkjFZ7Mbmo4R61kMDTiAhK1LcEcBKExQshY35TGqiZ6wXKkj9A547UtgJEeNwaK",
  "key8": "3YkaBuPiRPSP7eBd624utkyt6zij4zz9PkqVSCCpxErb3JA8tsfLRKtyU9HCerzyt98uinPV8if1BZucWY69Ye56",
  "key9": "67K4GeFozB72ohQjtG1dfwKBnp98ixECLJG3Y2B245TZGpFgToczNLURxUX3ByWzB5YrKzwyjFfGYX1iiZg7pXpK",
  "key10": "5Qx6Yt6cfHmsFu855Ke4YviKNRpN6APNQYGv9byQt7w38nukyMxmhSEWYHRnNua6tbQx79iM6hocsyDn5BnkVn7c",
  "key11": "4rynJBvvzyZysevCiFgWwzhAAysTyi9zBdM6dSUFc6sS3kTNLJx9Y936AqwV51o21VukCiEEVVE9TXtWo7Akc6me",
  "key12": "3BDpbePuwF65NXbVNF1vSbrdVbkyWaYxwcdFSWnzr5wgd8MxdcvsCHuXHzgveYokEoHwSzrRqQ8DAEGG6wHnqB8h",
  "key13": "3NUzgcjnmc7C24iLz6ARDZtxo1zW1GPvmFvPv1GvyQHF4ZAdK2rboL52CXofyyDKb8evwXdfJpY6yczhYNehHWC5",
  "key14": "22xMYZHJNNViirYzihQxz2RFfo7yBmVxM7ZXE3GuomXHSuMsqxow5MGnwRoXjAWJpKjJTZAohDWjf2arUwbysk6a",
  "key15": "62jSYjNK319zspvMrRa7vAVhuyRLp2NbSGr2oFDthSy2Xrrsa289LjP2MdmeTuwimxoqWxt2x6miuej81tjtfMTe",
  "key16": "2zCCZyV3BhDw6Yf6pZ8eqXFb2HNCd7fJy9dmKxbqs6vsGN2ntJjXcXw9vUgdxzMFzfQbtEa4bJHPEFx3NM2qeYeF",
  "key17": "4KUzP9rAYEct2bYWdHAEZRNfXoVQ5g8sdRnkubQ4hBqHYdaenQdk8beHzNZWbHQmJFpdyD5g3bQ6574ZjYA3FGPP",
  "key18": "5pb8HNRPEWHUaGWNHn6m1dkjuQjnkdKbNgkuSCSUFWWaiVapLbEysi8ouB3urWeJUHMwVpSsXDG9bAPPRNznsHSS",
  "key19": "G28rcGB9aEf28WvGVLy8jn7yzXKn8p22JLtDHZWpd19qqa9iUgH2hviTfbjb6PXGLnHdrBEtrYGrtrrfNiZ7r8t",
  "key20": "5gzA59byL7yoRJVpjQ27Ah1JmzcBEk1TDvZpfVKX2Y8P9yRpXS1z66rpbHESaEZKjYzYvq2cJgq1jiRNBMv9WeSD",
  "key21": "2byYHRX1hy5bYUSPKusD4FG785W52jMbyMXZXfawP8fkRX1rpebAqk4eCGLDNEwAA4oj6C5F4hW8WWzEsr43ykTs",
  "key22": "XEnbrDHUB4Gix1o18GJdNHkJaZqvhtuzGP71CQU7ygsKuGWrEX4MP7AbGGQbbShTp9qz3t3AiA9MUEiDSC7iYXC",
  "key23": "4z2bkGhwqVxGNmZnda7D8aCteBmGYNLndpX7CwQLWhhRhPzB2R1v9SoM7fmiZjuDW4BcfSB3YMrmU7h5hnUsvfaH",
  "key24": "3fwzG2MCi45wZSJ9E52bMzJH8L71pX7ZQF6dMV1WPpyKxqLhhNkx5rteBBvNK4YqXmHXy98oXfogH8R4MqyGFrRV"
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
