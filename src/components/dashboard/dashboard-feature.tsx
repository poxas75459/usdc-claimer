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
    "3woiBgqqxH9dZgjH9VxpgNJB3KLWEF2USZsSFfmWszgg43hFF163QdaZKxVJDMSAVBpEdWgkVP9CcBRDsstiA8vT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aSK6FoeyeugoEJdudMGYPS8gKdJTHmjuGxdTGzSFthrQwCdcz5J6579Vft2otKpGG73baTzFfFneQZrwc6r84Jv",
  "key1": "5Vm8ng9pXJBgi43FvcvNUBo5GR8wd96pV2NygQs6zcFgCtC7F99EQdPVh9XxG638hafYcS7M2RSSwHuxLdwtkEAv",
  "key2": "5Ypt1HTMnJThK77sG1zV7AhvUBUnhRwA4gpHuKFuxErcGarFm5tpZP6M3JvNGemMz3sNMeAMWXfvUYvPaTDxewQ1",
  "key3": "37ugWnZAKKWq96Lgstykpj1HJYTuaUQ3heEaKxM1hGZa8dfM4VB5MitreqnXbjSTbeB8yqdd39wQzTJSEMsPrvv",
  "key4": "YEizzKewaYfPxS9UWnQ4VeKyMbAcamWuSDFRUmznfQEqJ81itnVaDGtBeMFfPowyC1cBKfEna6n8adCGDJqvacU",
  "key5": "3wPvuVaa5EjTWASnKUfUHV4LB2hH5x8FJr7aNg2U1SipD2m1n5sNhtUYo5XKec3WyqWN2jy2TABMWpWKXf33DvEj",
  "key6": "4tU5xAfw3tmrGpqmbRsFZbBFmTwvL19vibtKsHMyNtjjTK7c93sJDBvcNK7GPtpRv9tMTZFva8BGibFbwAiPoZBw",
  "key7": "5NuFG65ENyTRSPhq5dunZJUyNo56quMZSqwbZ7HJ3sLbC8sHLM2W4d36maJGkDWcj3k2GzrdQcWjvRocysXF8boi",
  "key8": "89vTXjFiaRJjcmipkDgZHsQVAFBTRG7j3BS2w8MpcL8rgh5dwetKDY3SXKXroZDmat9DV9q7V5s4LapWwGhVxEc",
  "key9": "49MnkszhP8BBgXocyG3vHvS8ndxVgay5WGpfikXnPSnFfuRkUYAfGZq3qhnLszjYSKS2jXS1EFf2z6DdvhP4tLCe",
  "key10": "kNmecuXxCZkRDFCf5CgqSyBHUD4B2okoVEjRBYhyUcTqGowjDonhY3oVtTtyubuPY4EixS9xBmz1PWf28zLqeU8",
  "key11": "31gg5nuNMTfrTR2NCy6QCm2bBEbJoMQasWGZ5dq1LYLDFLbaC4WpReZTCABeekd3TnecsWAYFPYzDQ4FgUURFNF",
  "key12": "5n6CGz7mFk2mj6Wyfy7dxQZJiKufhXKn2DnbjWKUhEPb4ppFzwx7ZMEoWAD527pxgEPfa3NXZqDDJMbCLUjeeJAn",
  "key13": "V4exUqXgLLUgmT4grvz7Eny2c5thGU2y9may5xXbLZoixuzGfHExDjjrA9p3jJWgeM7v4H3Cyp17cm4ysA6oAio",
  "key14": "3TXKvE7iQBdTfsvzpfxFnQTt4SDwKuhR2xtnH95Sd2R42hKWtojVQiP1GruTKptKMMgDqRASEY1MXrKiqKGE4Zov",
  "key15": "URQUDkt9jLno3C9hyebmLrGSk3fHMH4VRhMCUq1drb3RJYc5Du3Txg3JaK3XVLvrpecK7GwsFRku4CtPvVqNwam",
  "key16": "5DxzQD9JjA4k1D9ohTHqBCsDy9684GXLHy8W6hSp5qXsQcCGrPeG9S2grCqnkgSszqeHBtUrap5uQtytcL9xNYcd",
  "key17": "2YfvPxbjgfVs9F4A8ah1N9hTn76hr7rKqfLZGsgHJpR7xus891UH2yERCKE8X17HHNjf4W8LaHNXNQXRUpzTRZxM",
  "key18": "52iKRLQkLgwsJdhn5JhD8ZfmAcdVbBuFQQaDMTafBL6ktYJH5Tt6JFpwkAayq5LXAx4CJSvVAN4aM6jbn4Apz3NM",
  "key19": "4ta4TXyK5SSTkUZ3r9XEDBMF9qkFGQZijZhJ6b1TduR6dtqRjEx52Vp8kq1fMNbXqU7hbQCt5YszD5n5Z4bBkVae",
  "key20": "5MDYH69W8MaqLp6rZfSmz3WvF1WVjvkw4gJr2DirXQvuntnecuw3uh7PRCMumWH8RjYEQfPXbecRVHBcJQfX3s4h",
  "key21": "EFDKpLNf1vwYEjQni5HcNd4kMyyps61kFnhxz1hGDFZcbFcoFWHRsvNy23dSf85FaQRmCkxjDi3gLCcVENkByVi",
  "key22": "2SCTGcHq9kv7QhJKkjimKxgGsYJpGpaTD42u3qbHhAby1h3kRwSAMBVueXHGz3Q6eeJGgmpcxd92H3QXHWmwWfBb",
  "key23": "5fCkuqqswNNwLXBTazuDWEMbUWTrN9NwnaUGtQSEgQTgVY1fK4m6QEzSVDU7gyYQcYRDYuZS8RT9yYEoqK2RP7Gy",
  "key24": "3xApwwNUujzsw2rbjMW1vVsMJsHNXr6XdPHUnxB2kXS4CyszQ8o8XanW1CkHtoNCK5GnoGwTpEXYAnZmaDKxpeRG",
  "key25": "5NMWkLiAkQSBsPTamGgwX3bjxmaMU5UbgAj7xizsTA75nj2XU9BXtQ5gDDqjQqShgDD7FsqgHcJRsd9hp7o282rg",
  "key26": "3kZsXEm2EuLhWmJHHWqxwnNTEAzucXgtgP4X9THP5tEpUqvpgJYK6vNibTV2mnh7NhdUnygqxFRsVVVNDW4pqNCp",
  "key27": "2W8chWzE5eWsr5hPdBQuzK9uiAHwdTsiwzpkL8bcu1euZyZyoRNMZ6bXkrDNqEkiQfHXvyxRRpP1eN62oyWLXHeX",
  "key28": "4v4YXZ6NvTFpYmttdzHL8S6AkAjbxvxiGRxGdjqGA2h4xWrqemd1aXeg9PvYtyJ8yZHXCpPpfXzeXJMXHZfWmh5p",
  "key29": "2tMCCUM7D1p1sQbb7F9aZQKbzqmPkyN7HBXCAzKyQqJ6PPZdrZ93Zie419feezq8hjatzrpBGy9QhgnwRRDKqnSf",
  "key30": "529MJp4YzMUBTWzeq3VB1girCgkKApsiv4XGfcBpYMc5MA9u59483n8xgrWoiTBBRGm7zjuECcz74fHRwnb8CMkh",
  "key31": "2p6gNTtRNWWM1nEBPre6VeqBAWoBfDQTmG2b8j2CJvQJojCdrpXfCsWHJCtDu9FFwGaEJfFi5Y1KU1dAtbYqnjsG",
  "key32": "25APQEsS5jNrcfWaS1fuNDsRj96caeuSAb7uXnwwJKBEBbTnGovDRPHQEPYSVYFDkE1ix6oVXTGJLFGuXnmhThKB",
  "key33": "2nahMU3H282mhMDAoGtraM7BKhyMR7cKJohvuUSyqGNw1eEMSD3LgjHD1dxRWamZ2g2P9CTwtV61QsbY9WkMRDsJ",
  "key34": "2AmuPew1nRD9Ae9HSEVUJUqp4K1Z17DCgcb3Dc1roGmh7HyPZ8Xg3834T87qFyCCUK1ECmVze5zZGjQrqjpX2tmg",
  "key35": "u9sRn9u7BkYGF3U9UYTZW7BiESmmVvPceNi2Pp16eA5BjbekjxKRCQBks7EZrG2vSPTEgVjkWBwj8GL2bxwvaEt",
  "key36": "hAgEBEKYtxkV61zB7fVczm17zv5baj4vxZs2e7c24MDJmTLausgXioPiatJ5ScHkxWSW2NVW5k3EcwWdyMtEboS",
  "key37": "3X6FgHqagCdcCMH16LkgpPWH3c4LCJW4kn2ZbvB72YdrVqDMdJ2vzUoX23GvDVGerqnAAJYWqmobqqudFyXBN7Yr",
  "key38": "2j8s7AoxqhYRha45ig1CmUZn1yQjuGKRmLpRgYugFC9y2Mx7cy1Fh9CQwdNP7cSMzY3vhjidrm1rjrUFfAWKdmqq",
  "key39": "45Ddna8K5t4SQwRh3nULYn3uoZP1ByuJdxZKoHjPCb9oejCJkUrkvfiUtrCXSKPSsA8EwkDm4mtLxQiaJHebRWbf",
  "key40": "3z5zw1wDi2rnSgnzopr5eufBpr6QECxmQZJ9SUgSru3P6CCd2yU17yGXxDYDpnkmqUku8C6jSyW8V8SBHN9bxDGM",
  "key41": "4eEkLLnFs1N826P5zNhQEtwZuUwLeKSAhYZbzGADunyUPrGYmgyUA89CNE4jFPsCsUMn5ekvtrKBVXu7DLL5PJwH",
  "key42": "n7K1iPy6d74Xe9ajFokeMDUwhkZfFX1kM4w3iYFtD2DG9wDnhkQ8wXbJwwUC885vX6D4szXnHarwZHWLe2gvTJa",
  "key43": "3qbn9CDsqZrmPbCPoQjSEzyNPYDoCkhCMF2zRkUdDLNEGaWpmJuUzGF1Kr3XVgaihjkLVCjtfmHLJnRjyqv9kTpu",
  "key44": "3GGAj1qfkm7eQSsSsEK2hVKGAwCgt9PoeKMWgJ157W1DLR3HuDpabsgJ2c12tCK1MdEvVCEJcoqSKSzEPhLqfNJA",
  "key45": "4ZQWtsWTMN9guFfYSrBe2vdWnFpVf3xehe1bZztHEK4g5NZjnvPfYXhGkiz3W4rNSPdnpab9AaPmyAtxQwtv3Kyp",
  "key46": "28RXztk8mDzpq4nUkk7hWFNh1WTfaerJRSsXsDRBzR55pN3mJRXcdU1fSTauC369gNAB5M3zgBJrsARkwpLhLgcr",
  "key47": "YKn9ExiiPoby7mHUKXQyMdb7mhFx1wa2Ffd4tZV34De7dWiGoE4nrWyviBDqbV7fnCuDWUFo7cbfm9PQ5VaBmeu",
  "key48": "343QywW49j3tLfPcj3eFhutUPVzcTBLzW79zfmPG85caatMNAiavjiusfosxvCUMfQ137Q4j8uXgUwSnH6XRCizT"
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
