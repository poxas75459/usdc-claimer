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
    "4SE1Ee78HbEA8NTTNEcw5u8vdYnviFceBmpfQkGQsJpKdAUaEHcMtT7EuFc2i3MKnxsvDSENYxjEasokZoZVoGbQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KmVkb4JT4ik2B3yLRonsyS6hXFTn9FcyGDjpFnMzZ4ixRFpgrigy7VLJFTVYdkr9fNFhctCU7YGyhLn2pMS7Gsg",
  "key1": "4MsE76PFz7evATs57FSSq7mBPRkWgck74WRHfCB3dB2NUMDF3cHnjmz1gB7CFTwW3at8FSUDR6Nch2wBLNE3XHKW",
  "key2": "5oHspX4tpCLK7k5qPmpCVSHVsmh2iUi2Gz4zxy8fzhqbhRQefMTExW2NSuNkTh4SHjjombcg8QkHYKmbmfmB5X44",
  "key3": "4a18eUMaErnSTuHopNwf3RJQxPJX6avnpeMFvkmBvEPNJvJGBeVReqJu1arhd3j82P7ee2DR1b9HncWGaGcFe3SG",
  "key4": "2VjbCMWcF1AdoNyCZCHGGRWeid6cicmLrQDsYLzrrpMksmNrt5XuPTxGZ8RCoBntzsS5Lom9hKuupKy5nstzGaxw",
  "key5": "24t1QaPcPSoPwkmHLjErnE36m7mEd27zWiNc5cSvTBaxoNZjtLosGMmnJjEzJRTFzqToh3NfbXvxR1FKHp68DDxn",
  "key6": "JcLYM6UF3UQLhHHWM26Gnj3uMie1YZpbNVHusi4Kvr14i8WZjTJSEZP6HB2RCwBBvooUfXGCsAK8FCYJ45QS7RB",
  "key7": "Tbo4hijT2rxe6oP6cyNrK9owKS86fjoMsKrz7sqLYrP548LJkUMKNuACdZZxCC5dHafdXB6QesQQmgKpUUxgtjH",
  "key8": "ewEJ5yhw4p48ckP8o3NjWERZv9jmQDhxTYKhZ98JFkxcxH8dJzZPXJx3Jz67uuEEDjzABx9W5jLphwS4XTQ3MmT",
  "key9": "3QjxPWJFynXf8QQ8xCJ4jgEJEg63VQ1NMNPZJtwekSEh4qQJGqfmX634NLDhHASdJX9H8jPWbr57Mbava3adavw8",
  "key10": "4fRoyEga4hWmGRJKLA58vJ7gc5R3ULVZD9pQ66jVdxR9tADafvdFyXKMy3whcwYSLDgwbipHs61YDD74ng547GeP",
  "key11": "4ckdgLfodnnxdnrB2gZNTc1Ct9s7Hm7Jfhmgtd8iivVGC3SBM8b2SKa1z7xk4LJnutmEdVpuJUHxSeVLeeXJvHNf",
  "key12": "ZxyGgW4rR5PLJ5op2WyLnuKyaaRLJJC8pEEVeKGQMuHJLkVwszRo8FDURVk5ciVvW2QiwjMVCjwFtFquGRpwnD3",
  "key13": "L3UDGmcL6HJTzd8ztE8iqenfZQtveN9eurv9dtm5WsAFf6vpUKETPxwtfjYcWqVYnpKCKPWjftuNwTnnMAEb58w",
  "key14": "5Wsx55wdnu97WQxKyEAEM8q48PFwxUm9CbnHjwzdCVTYng3VR61k64cDRYna9fwTwA4jFW2XjhMwZo5achvrvM4q",
  "key15": "4tPGiidNfpkS8aiEMQmg6ZAQ94rkKXQG1oBS7fXuTgpqR5y5vTUa4YM3HCzfYj9mardLeG5TcYDfpLoePNVLqBW7",
  "key16": "5QfnV2Ptd1bCpm6bRSF6G23tV1sxgvvESg7bLW6MJzzDYvhNwr3hX4vEe8vZ7atbneZDQG5bp4CWScmUGBLYdVhT",
  "key17": "J3j4sJYcf6xzvtwQE2DVzcXcBDyd4LHNkuim8R9pNhAtdXJpzuqmUKzAhpGwTMiujeEnbzHXCNT1uXScTGT4NrF",
  "key18": "4tn2xVc5mNUByPFQUfAL77kh5kcTq7Ln9mjWrnT8vNeoYzmK5tZ3TMoHbADFCQMneHxi7BmDryN4NkP2nyroVPx8",
  "key19": "FokCDTCq1dphWpNJJcSUEcC44uMVkyatUCwGyd5P5JPE6V6FuSiZM98KBxrfZy3spTSSADsFJPdX9Gtj3agkGYU",
  "key20": "2gad7BunMnF1UsBcma6SFou5NWkrxaFeSB8GFmQtfz9ACizvi2UQpxyV3aYfLsUNeaiA2bRxr9vPoiqdFrah89aM",
  "key21": "33vqwLoyTvmc92uYSiJCS9ERX7JwqHByPUGNFiYbGnN4ma3vLNJjKRMNqit8VZy28oHWjGWXi7JN1kgwFLkNq5Zc",
  "key22": "xozgH5ov7ajPrtaT8wNNouE2CdAfpEnz787gviwnXUdHgAyBkpp4cAPvkniC1j6naA16VyFcbdrBQavhNi1NySG",
  "key23": "4nAii8mSBUBH5GdPCHM9jWueX62hmjfPt1PLomQnZbZuVw9CrTDXppb86b8jCc9VXnsDGVCwi7cJi2fDxYmg8C1h",
  "key24": "kfWCQ7Wju7YKna8yNhwMb3qMVLA1cxyYyxMqYbhr96CVj3XN1P5KK52E8UwPKDRe49DJkKd3c7z44vB6ZP3paC4",
  "key25": "4Rt81gJbE5TndmJXu4GGDqEr8Ufq85xEkBj3HF1TYD3UVWRja6dU8LEghfApGPUHGwfinSi1SNpb1aypagZLuri9",
  "key26": "3YZkCt9P6paHqBsc6DGcatcjKTt88GbnvbBdxNKJ9YBAiKT5d3Vbx1gS9LWXigtK6M1jZ4NpZdWVV36wup27pMQ4",
  "key27": "42G3fKcTSGdz6LEw4FNEFSFk311aqD4hjCYrWJKH7dPJ1yBCGNzPDS6k72dR5dh3h3PBYMqcuEMYbBKbenWe112U",
  "key28": "3U1Z8ZUU6ZXqhdJSnSKnTtm6bGaTRTaduPdrS85BvRfU3Kxqs5aDhw4BCyTKt3x5RYxobiUy4qNV6nCgDBTd9Z2T",
  "key29": "5ZUfV2fKCiGGiHvB2NEhTZ8Ta8haowq1osSAHRPBuuzEbbZutW57Nzquy3huDA8Ssxote5TyyroAAddrJpcYC1Fs"
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
