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
    "3PppjWbw5tBcY1GstYPgAJ6B8RyHook1onEGnQtuefionsnaXH7b6wMasfGroREbDSN6USmT2aR7yEm8VxgLXJ4L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zoLdksyUfneDk6UYX9Jwz3Con3xBMY8HDAqBVcHSnAq2Jn5Zcu9WG6avNXsxeieCRTUGf48WnmEBx1G9UR1de1P",
  "key1": "ycKoMfoDhqc3mqEUQK1VQueQXrLCJYWs7YKdqazZgvjpfqg7jxeoVL4uiFedBy6xMm3YNYXRLueYaEWDS3NhsrZ",
  "key2": "p1heQidADhoi9YqbYi6R76Q3Y4ko6s3n4aAksgLUBnhrq2dZhTZimHBk1H55G8f4k4Bgo3mJ8KF5jewydJhoHxN",
  "key3": "5B8fokb1zMQDNZxW1mhzro4eD35g7L3JurpzeUrB8zX3bqgx87Ea1rEjWd5bXo5HXbeRjC77c7ab41qsq6f4iP8R",
  "key4": "2Y5kRezzZZieXZe3Y5c5qyuqWR3uYtJDY66pV4wj26kddKXgvgzmCGiJeQBDwZbmBW7P1VP3ch3ss6qjrWi3siiq",
  "key5": "Yz5QdB4Je4ZCjffNqpnZz4V2iWE3Bf6gdYwakQ4GcJynwj2vFBs8nn86yTPmqQVX6EQt9a5CgbDVGd7FsCyfkLP",
  "key6": "5Bw7rdvd2rWqma5e2GsdPKxaYsw1FDaCRVmZvfTkGaEJ52Ju7dVZf8M3ANMnLDpXdYQxsE8fo2j2aAVmgBcjLCaF",
  "key7": "5eS4bhqQoNo9KCiPsPWjspV3zPMRkfynnRFqNwunEJHPD2FiRQbFtWrcuXnxr3QjA9d4v2wmGTFCpUhiWiV41vG6",
  "key8": "KHYuKGakVZLZFo7oDwL55Lxi9cknoFkZiEWiiq3UMiry71DXbvkHfKbLYHtYqqrZr5dX5yTr7dkAY8bbmCQYUBc",
  "key9": "tt77DijyTDZFWtp2AQRhW6GdR3cYgj7qK2BmxpA8uu9ixegLzkZCMc9HMkHq4WMBP5aN7ZpCbMfGm5oUw6bmJj2",
  "key10": "4uA3dnh7w1c8ojx7QKgXPfS22FUqU7ZxhVrsb6Y5PzvoRJGv3M24tveboq1fbUXWv5RFUDnQJ7s6zZpRfNxEfMg3",
  "key11": "2LyNFgWx6thPVANHqn4kmVdRGWFn1vAYeuTRmex2oaEhXcsxNQKiPFZeYwdrAw2ZxwY1byxt5V9dC5brRgZpyyJn",
  "key12": "4gYD4CHYEwTCuzLUFaEzgQ3PGZKHEKq6RXDBGw6SKtXRY1eRCH86yAK5xgoGPdBk5YcELDfNKmbASMJhfzZDrmpe",
  "key13": "2Rurf6BcBfKTWtjVt8pcXS2TbKPRbx3jA9Jhj7QmVrEuHDDZXpF2CCUK9gbd1z7WB97TsYDsdkuVgwLUFdX6kbwP",
  "key14": "1EMRTmcs8256cBrUt63x2xn6gXCoK8pqFA9tK3edy4BjyR6B7hR1nwY9eypiUFrxmJxQsHj7GSbd8NFZwCDgpM9",
  "key15": "4hQmnGTHmHzVmuSaBWGRbsQC2XeZxSC3P9XgU17tB4wRcPMZ85m2mcWsjGd2cfcdKxtj2u8XuA3V6guA81qZCa2a",
  "key16": "4SuncQNfGBSkzZaipi5S2eMrQywdquh5hEBLknHfY4wRPABaU6PAPkDVefeNxw3X3b94QkzN3G9ijUSgAL4kriCh",
  "key17": "5KjPzfiC6tcHU6PK3AvYdzztommF8y38bXrH3rSY6752Let94QnLLWr2vDWTHQUCfCjRc1T1XSHRBhLL11S9CRBP",
  "key18": "2mGedmAQ5hdoCGwbN5cwNKJpmQK4Tai3rjtBGUzki7U8aPY991oJDM7GX7K7mDSZky6h8iVHLhuoNGEc3SqkhTBJ",
  "key19": "5q9zAR3RZvE6WPxoXEYt2A4o9j4pxm15bn7bA4sj9a8yE7KcZkPbwEamaeNVxQb5kPrwkQSYnodzkGa6xMu8urfj",
  "key20": "2J1rqp8wsj2e7FX4L1sDrSmVjASoPLFhPJ63x4EWpAKGwT3rmDtMV7S7BmV1RhedVi5DaCyehw9kVGvnMqVsHzoz",
  "key21": "2MonWhS5NdE4WtTvrE81R6mzuTcV1oJSvcXS2ByPc2kYLrrxko2qP1JLy6ym5rrioZtnC8KUsqFuxTvhFTMe47Wu",
  "key22": "5dT9BJWKRHfDSuM4dYsG158pdLokegcESYEYsCtp9V4Pkyc55tQ1K1Gb8fV4oEL4X5cQ4v53VUEG6WXD2p6VsStC",
  "key23": "5kZ8UuNeDe1Kgi6VH4wRA7v52ZnAWbdaJT7nKDNf4t8tSwQXM8weKQMgKFGT35RdveK2zFoV8SwtAioJjzdp894Y",
  "key24": "ejWL4MC4iUW83i1t4r5j1rdFuRWFJgQbq3knfVzVDdg4sUtawWNqSjADeXYbPXgmJnaU5JFJEkHY7kSBdE8UqXz",
  "key25": "3Pez54Fy4knepSLZZfftYZGhXt9vupFc1SvzMPfZGqZxkZpLEX1hUkktbgeUm6aiqG6Cm6A8H8WXT1qVupMgxpZr",
  "key26": "2zQcdiSHqp9N3pLjmjVgan699PxbR1ceTbshGB8vBxg68Yn7qMNjeD8BoDV9c4FFjyypS7amSG39NzHAzWavNY9T",
  "key27": "fSZbme3LQCiYTdfdqpCm6DfaMreAc9k9tsmJEyurWiXJ936ETC4iVBWm73wHSqo3Cv45SRMyckk2W5YZoZYnffR",
  "key28": "5ofF88n7K24McgKiAjT1KphsCJ6caSz4JMFnH7o2zismJCPmB14iTRdqYdCkwjJEHfbjcaJ2uvYG2sxzDuafyBG1",
  "key29": "2qrniQpgiBY1voBZb7wZefD4diXKphNqingxkVLRKooGZWyCAbb5fXyxqaCAG7CFctzh6R4pGRSV7C7LrsWYD5qd",
  "key30": "gwRRMw5Umk5NGC2YstvLtUb5Pujc2g2YryXmS47y76LVH9D1aPuSqVYfkRHkbbCB8QyJVPy4CV2qAHB2a9XKSAx"
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
