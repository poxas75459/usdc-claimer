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
    "3shvxW5ZSU52xnRJChL8spXiZT2de2XMD5UTbwLjMLjwZRMwF8nuBamnQ1YNUCi3mmJxpGAJG2gJ1cK7Ltnm9Y5c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VkQ5FxNzZFKtRNnAJFopK5hkB214at55wojFWPX7W1xNf7XLophyyaZ2z62KeNkT5PU7xThZY53DHWofhDJRdRt",
  "key1": "PNddeiNr5LooasPvMBPZHpUQzVtauS6aYAWjuvAXREt8McvRyUmJxm7RKUN6pVoYYn5eAA1ioLof1mjpfH3fJBx",
  "key2": "4hLZpgvaTzNb9PZZvGPrgjNWUjM3WYpBWKVVB6oAAi5zqkMceBa6oBvEmF4ybSjgs6ENHH3AP2NG3GUSqdT1335b",
  "key3": "9G9ppNkP9qbYEgg6LsWDk4dmWrvE2PU4H9tMTgS8t7hD9ztRLpT9waDTSgYKo2W5ncco4ifXSWsd3iGQxYgUWU1",
  "key4": "5mY1za5QYPJeEDRaFGoyHeMw9Pru2hpNaDe7WHvykM5Zu2ZtJkkstgeBYis638V7GhUjeBgFgP6Wos5aokokSu4J",
  "key5": "8wWgk3F4Xyy3dVc8FAsaxjgSiMAWpSisXnGSDn9L5YNwE9H94YdmF1R1GGRzLWUwzv7ak6XvQbsHVANbhHwbemQ",
  "key6": "42eZB6U9MkXwz9mNaMgucLspfnPsZwp4YTqGiEchbdnRChVDUPgUD1rWafXuYBVdYACbBz2P2WUv74RqVFMpMXym",
  "key7": "5DWJ2WZ1yKYa8q8kGHQz6k1SAAWRiAweru1LC5nzbxriqaZgn77To7XwzDNkpaLFfwZjN4MiKTDXbEv3ZPu7zNze",
  "key8": "54Lv4USs3RQDjsf3iZ9EtV3Tm2prxH89Eexk9M9rBW6Znuey5hUTRgzxgtHBVS91Zy34jRFw5r4tcMcVNtgxQ9oh",
  "key9": "2W3bYw2hKrUm631qKsEMvkm58GG1JBvv3SPoDS9UzEmzKG7x8PHh2MSBPHJDkdSjHKnLuGerdjZ58kpoFWvBjifu",
  "key10": "5u7Lk2Tj5LC234p1LXcqMu4SKx6RW9YJhDFf2jZNdkojZZtxPb7WcVTvypNyrSGH4WhFKn5MB4LdF2mSktGKgpRW",
  "key11": "4oVDWbfDmNHKyDNa6N32AsSG8ToU43eD2tMGTfJVrsh72NRZ74nKXPF3ZyAtEXnqmJ728dS57dF6o8hyvq5tinEW",
  "key12": "5aebV4NojvzNyqn7Lg5R39YyFVU7vEByKFVCEhjuEWL2M5dtLLcxpvE5s8Ftm695JmiQ3WaDfscTdc2P7MdtQ8cQ",
  "key13": "4pow41ysyLKo7VtM3TAueqsgLc3ogmP5Ke1X4NwfuwQ4knz3N3UAjKAyVN9Gy9jhUAVPr17QMYZQtE5RKyXQWQSN",
  "key14": "2UirZCZ8pmgquPn43qWQN61UwhegMFdowtH1W1mTsXzYD27kAAhLy2cq8VoJxrb1kb4vBzo7bdnRzEbkXDkdhCLg",
  "key15": "nLmeD1d3mu2wmSbEn3BWMNqefJeJcmhaHS736AbrYdwGFYYT6rdefJvD3LBkWQFppDfebXEkEQTebjDjhT1GUiM",
  "key16": "537rvC9228Dm9DT4fyHsPXHFZZU14Q3xPfFv67tB77WmVBuHW4Nqbtagf4M2pYb8eTKA19G5FjW7cWsnRZrvBwF6",
  "key17": "ejvV3hqYHzjLLgqeXVJmMkhrayNEDbxhV7xYBX49dk1SRCFqyTiXzYPuDm9ZGTGaBkktXXu9q4C1TeS3iXkWHkS",
  "key18": "3JcFroxC4KuVPzMwKvwp5cXBgmGhcwKcFnfYwZP9p9DN42cxMYTVbh64xUUA7miJBJtjkvr1YQqRfMKNZd1tuZjQ",
  "key19": "2P3umFcb1qY89nxbtCkJhXntUKCFCYi59uXG3vHDMwHGPq9MD4bmT64R1WW1KRXUHYvJHCiTmVbEVxvFsPjMJPxA",
  "key20": "46ehp3C7fGSkqRrA16tSuTSx462wQPNjAVmjem8XhiJGro4DgcupoV34vYt4gvrwAtXnJrdtuT9yavgXQ7qR18EP",
  "key21": "56uyqUYu8CcEhiLtrSDFX4yAtXRhYMmNfyaLZ3AYEPxfW1zjGNicMnXj3yDnxKwSTFgAYWJJuCZYqsJWwijcSyni",
  "key22": "6wjH4A4xaqgVbN8ySBfquazzSomg9sB5QPXyYkDpGat3icSbkMmdTeBiUefkLv81Hi5y33vLWF7V98pNnCfDWmg",
  "key23": "1SAtxhwcgXXdgXYiMYqh9E5PgnyYNeXaYjPtyLCYE84Qrur3BEEyYtJZ3rcYqyaiFDfvuodWZjGcwHbdtaYr5t7",
  "key24": "CcCCF9SGn6FibFxUk9w3o3ZikQedTSnsyUMP7fbn1zRhJQnvP1Q3c8Va4Ljz7Fre68zMH7wrRKLiSe5JTmBQ3MF",
  "key25": "51fC6dg72y1WAUFeP5aZYATgu6cZchyRoFEsqzYoipewykRfNSGx5dE5aeuZ3K17uim9NJNjbpDha4R4ZEctQzeF",
  "key26": "215KFUTDCYCkNg2UT1pcL4ciNpzaSKEBrKczM5jpnwDR72Dx9FbDLrgLXpquSiFxbJ6NVGrRUJ2D59PNTNSpC69C",
  "key27": "2YJq1c2zS8n7R1PVDatGyZ6u4FnvCvN53Vqo7Q6k1WS4ygrjm9ewoxTqikPc53KGyU3GrJkYvAbqsYSpfBcDH2HW",
  "key28": "5a4LbuGKwHTLmPEXhZWRczBvGJERyj8PRSGE3CcTfoBMHQgfhyCarHL3RjTURgubE6auvBdVB1xe2UPv11JtXQgu"
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
