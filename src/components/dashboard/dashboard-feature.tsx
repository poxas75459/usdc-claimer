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
    "3HMqeeSQ4WKiA3xizLtGC3FmcBVjt3UAThxRHQz8qB7iJgN6vKZkpPrg9HctaDgza3o9WpkRe8TAEpcyrMZ3r2Q5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NaZ467LfxUZ81fGG8p3YZqsmu3TSpZ7Ujts4AufYAQYExHpNVcSfd8aNQWH6dG7mMraFwKA56aap2MD9qfAr54F",
  "key1": "3DAaHN5raMpiZMkMxATkqf3MDpmPnrEEgDhZKRk71rHZpjVuUDVa5qKDYpMK6WUt7eDu68XoPMgVxdpjmhedx9bi",
  "key2": "TcK51pnbz6x8aXN8wpeKLvkPYGKDvKwUsSdsCEZxxbNrUQ6AgFUYmDoGT7rx5V6H3aMFwUHBx5xTmMnYYQFM5Vj",
  "key3": "66yz2PkYSFPRXTF5zgDj7SENYDKw1gknCQeUQsB18UUs5UnM2dnCfc1sJicUUDwCvox3ntfkN5d6m4kxoe5gN8SF",
  "key4": "25WNMbPjathyQsvqw21ZUqQEqKbvvNwZFDXBs2V1T7Vfjf3Wn3Hm5WPMkJZbMDv3nFpyexz2DWyAVBYNvTX8UswP",
  "key5": "YQozd74fMWee8idVTL54q7rXZDyGrMMEkB3daFdCCXX7q1GHTDACATmfdo4zAm2enLDwx9ma5SAFsfX2RGvYnYs",
  "key6": "4wAkLDdtY1fCkQE2pyGcvCbH199Vgs4Vt7aRTDdsRHoGAQ9PgGksTii51BcFtiqwJbUWYr1ggPrKZMjf4e74BXqx",
  "key7": "65YgPX1XVohfSFb2kZLGWdz8YeMV8gdpiKjSLhCRveqJuv8qEfTbp53EPUQLK7PueM3La8N1MJhV1nAzZjjvP7wL",
  "key8": "RAYQrKDxvE32akq4VafuxAXhSED1gRZSbnZy9aRSjCn3jzDr2gEmLuqSURDd164wZ7jigcrTv4rrrCCc7HTn6pb",
  "key9": "LT2qL64esk4ksT9edE9gbNrJUoHLz2EwjriG366zJtyB1hz7rKS7T2BZumYPuNPgtaujujiNjY1xj3xePPB3KQK",
  "key10": "49Lxfi8A6vCptz9FguygN96XGNyWBbLpsRaT4tDvzBcadCmJyudftFErnT2Fu9BjqzstjcgWHKDnxJWRhqYKtu6Y",
  "key11": "29vxy3YGCTMtwiesJbjLZz13xxKemtr78nE6fjrRi6RRGQg3ZxUXBiH6hmLrq1xmrzP25jT22Eprf7E2rw1qYKYA",
  "key12": "5iDfNM5HWDKfjfgZW4WaYFt1Gt3NumFDUCUGfBBqEQD42qqFsWUcWcyjL4ht7YPxZKxdHhf9PN5Y6Ps7aKyEkViw",
  "key13": "5fGvhimAjPH3JvmHqaHYvsJojBGdv6mZVSx2oSqhF6Npd66EKroQbYMwpEQgQZ2rDooAjAdHW3BbEGXU7cWr2tPW",
  "key14": "L5M79XRuVB7FY7CF6bW3m1ZpbPBtibCPRG96TrUB3doWzZUoYxDTFHS21s8oLhFNBPTxT7Lfmu9WWiniWfZuHjV",
  "key15": "44E1XrkiAMoqKXRS6TMNB8zZcsCeMmbGkpwEt6kTGmcWSkJu5KMEEPQJk6TayFoaXfkkep2VHTFJnxy1DAL9eT83",
  "key16": "6vdTYKjWrRs27Pc9uzbZRcXssa8BsxDZLpb9ZmAjoroZpLFhxHM1hMxVLzhzAknGkFoWsqMgAKyTVboFfkqAY48",
  "key17": "2EjxVMKDQ3dARTZHc48ZRPxAY23RVJuHgUbnpLZQvgr15uRw4sPKWzwLh8fpUyK3iFbGu22HHVRjjpJxo2MHvixm",
  "key18": "3WxQ2yYfP1KxDkoYwV3pRmR6MQBUhub2nPhnahK1hEumDs2RhTQRQr2HobNFAWrZ9WGb6KzCLCB3w91xoVe33uHc",
  "key19": "2z2cSty7ZCXBD6kYNaznwY6STcviBiDJfnb7xJtVpfqGuKRMT92Xo812cMcdbHHwkdo61eWybiEtvpnBGvcRhaox",
  "key20": "5SYeStS75sew7VAL8TWKxofrBcCiVgNr4CQdDvJEofAeUjqoYfqNdwS8FTQcLr3n3pCmuzMMtNK7XeRJ1Dra3Eh9",
  "key21": "5CCidFbvWcsoUwmLXdUErvrQCqGK65apJq2Lba2xtqELRfxPoLPLhH1wgr2mGJ5dND9NsaUzxzcJWFMuuGt9RiAm",
  "key22": "4KsBWRNZDvJyQK3jndsSUATBCbeTxao5sucLmmrZiTknCAqvFCsE8nc5rkHgDzjRTcMHFzhoQ36C7wDpDK7DYAaj",
  "key23": "2ybzWoTzLrTAPfFTCfXXTCRgtceQMbA3rYSiAjcPDwEDpZgqXfEbtkdf3eRwrzffPTqytsrytoau7oueVwVvwKZs",
  "key24": "2cBD2DJ1dw8U9SEq8Vmi5NmhrMzcx7HehvHikWXx6eSA9FDVWSmbADzrZYCE3e2iip7nKMtqV3yiV16o8TzdFd7e",
  "key25": "25qaiBjZYgnhpsgNuJHyJ3RvaZ22tXQAS5EQ5NtYQ1bGLZhWtbPaFmwEWHiqU6jQYUheC3yuFXrrpxvVR5kBq7Cu"
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
