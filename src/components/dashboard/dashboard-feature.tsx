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
    "4Yj3LCoRXksT7oreUBvGD3bnRcCi95hwDRh24cGdQo8DckGthYeGoT8uYCTcmt28dmGGC2JkpoKSi5sb3b47Dwpi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Rn7gL8QfLrhMiU6efN961dnkyB8TCrWXa91nzcAbxZbDLyaXnjQUh4JZ4EjT1SpbSe5dUYzREwDjQ7HJ51ixDPT",
  "key1": "5K2oQiBtzSEnoqHje7r71CGRviF2diqVwP6zxY7ZY6j1WJfvaTtq6b2tdbJYb1S6Deqh1cVCfwmmgUigQ5T8CvN6",
  "key2": "2ZF7hTWdfM82jcLgt9zCPxUGz9cQNKhybipdHgrnoJKcCuHB3VvZjyQe88sx9g1siQ5ufxNz7nvcW7FxC7revWGH",
  "key3": "4muVsc17haaUyTP4gV8drKAjJNq63hfJZzPHt2qBnRBVAdqxTuA28JYU2ZtYy1uAWAb1EVyusHKqugFpnpbf45SR",
  "key4": "3PHgnUyR4k6E5VvzpCj5q4fuu8TJV6UZ6EVHnXjaSvdpxjpkUjvrxUntR9u7tJEGfYr9HQJYL1yBnvYbdDxD8ABr",
  "key5": "21bDzMHRUSrz7jRoRy2uAaFUdTLc5fQvNSDtVTFSr9msTRBuS6umbUYHoYhKjU2RpRok3krvGGdBeLrRzMiRnY4f",
  "key6": "56DNQ71afP9vbJ6h1SKYWismXQKZE1u6ZWC5grCkGBHNkLeFkdLP3ZYw4YrGHwkkLwBBq6o36nBJefWcRtb1nAWS",
  "key7": "47M8hHgYqNHmYzvtnHJVoFNDmcu8EkNwsnA9RsD8gBSYRQgG98qUL8QRid7ojN51jvGiw6ZGNHvqRCwpBRDNBwpY",
  "key8": "5bkqnCxwWEGr9NbHk4eMvuDWP6XbkXd54Qs2MK8azM3mauPNuZcrochHXix1y592BjXa4pN1jhAHCcP2JRQCWUGs",
  "key9": "3T2BnwN4dNsNosANarTeek1vYcpQtVFibhC4FEvTBBUjNrzfnE4DuHqSpYfMSvPWoDZWTxDPh7Vs5yQC6b7gAWrG",
  "key10": "5usmyNtUQWPDK3Z2Lcq1jQdpwFgtkMdoPoSjBFmsJwtQWwpmw6HDicBXHgk8jdwc3xgivNmf2erkqanHy85LPD5q",
  "key11": "24zGpH6VnFBwyC1HnjqLeVqS8YQQSSK33tEtzwTvQYqVfZqjWLEWNTvnPVsdQfmDwEvArXPPY8GB6uq6eaS2GWMy",
  "key12": "5Gk5TuBVrbcnnQud1TyaxmkWmhb5GqCoKx5LyT9cJ8DV3EA6VAP7DtDFLNQ1CmrLha9nin4o59AjPG4f3AbWqhrM",
  "key13": "442txh1oC3knn4e7dZzYTCTbC97FJkKMWDhNwajTAQjpk57FP6ie2qorHcaV7QQhPCdyAkSP6nd61mNpbqqP9BLs",
  "key14": "3A1LXPLYWZHzX4L3q4rhVxUaBnzNgpTXtLwmgrKAGidWKbhZ46gf9f9Zsse86Q1ZFRisvr5wQX7RvuKwL4XChkR5",
  "key15": "4ZPrkStV1Levqa7aEKzaX15tgcDFq8G68zk5XmRE4GiZaLawC2GKu72GkY4kYjq3rJ3VR4VznAP4SaZ3R8s3p4z9",
  "key16": "3FjeWd7MiavDXcCmNPbGvmU9Axa3c6abcK3SaA8wRApPRkBDJyHYySgyXU17Ndd9S8DXti3MMdmy338pHz2BPdLX",
  "key17": "2egxBkhPgeKPENKqKrwuijFgVioShuZUoK36TXvCRcR1EtQS9qpXzj9GRwsEJ2od1TyKnB7pXhZbjgaGsbc1WXFe",
  "key18": "5KWDY3rJCD8jp8hcXDWG598kApZQbcnTUuFZNssrjj2SPrYk6jDgz9wUyU1b9NYqKjaVEa7m82xofM39kvi7sir2",
  "key19": "5C1Dgg87c9gAKGzX4TETwt65BjgozQdyiXfNAxWzVocTD5w8ANnD2yxA7RESRWcBcRv3MX1DaTmpDzJgtXK8ozwj",
  "key20": "3VhFsKKRMz8bkTJgAQzjnSemwaT9nFFQeXBQSFMNRLsN4RypjdNPKwcPhpk9zdbxeEjpKPoAuAvKdEvJSvCqDDn5",
  "key21": "2cjwKwDQdzw1MuRXazWimaYj3CnEdtH8EgJYnNboZrdjcwJbSWyDRArX78DQxm7w8GNf5o9CuTCPPAfhPGFcEpmD",
  "key22": "EjSupG1Yu1fucrBNipu3teJi5N97ES6BU2u5mCHcigEcwntk1vtzhenyohw8h27z1GA2KB8JfJgUrm4NyjiCpWK",
  "key23": "53DrcvfSGE8MsXk99j7ESgzoNz56KemTmaRc8u6F8Ts8kuCq25en9JWxWmBULqowrfNU2PqAfTTKjFdUiCTR4Mgo",
  "key24": "44snChbNm6vziJfoHuvdJ76bVYgL7RtxBPWX2SiuKHiTWVtjabcEEJ3HTcVBgQb2XGPyMRq7mvVSS2v1qYYFtUxC",
  "key25": "oWgC5BAetkUy7ddkw75UwBg3fq3VgC4C6ZSGgEpVXA9DNDZ11upmG5LsyCWuX6PBJzjj3oyCBcwTzSNse2CEfwZ",
  "key26": "dbXpn4dZ8esqzCKTmjmuANbswo5RnNPNu2YdAjs21jpdbZBsYEvSRKc5qujLUwyGMwsVt8d2MuWdpuryckfPRnx",
  "key27": "5659SYXH44ih4JczYkByoyBpAx7x6WbrZ7Hy85WUao7VaBkfiAJ8JUkbdgFCYxQ3Q6TPwLaqnKUZdJTR9jJcsk7A",
  "key28": "4hBpUaAX8YEiBk1AZHAuLnwn1c8idXmJLaB7xCvvugUR4sCR6tNd1e98LPcQFKuojGQP1L1CK3EZmpG2BhaSd2sE",
  "key29": "bUDCfG3ZGcZL3dZw42qNVChXTNtVqbwL2sZPBQ8jVDMTNLeYbuCgzwVe87VALupHyubTuQD2D5w3v5dDPKormCp",
  "key30": "2mGnLnfonvU7mznjbxenNhWdcGDUpYMmFej4z1bB5HnZPfN9otMAusiAW4SkrTyWV4Q1S5hBRvN13GyGzFiqWj9a",
  "key31": "25QRtA9pPYg7Bxz4qKrNwX2t3y47Y7DeagjVr8xNUrcqLDS9RtWUiPRYa6bDPEPr9dFjqrQn1cnPkkJ6EXE8HWqB",
  "key32": "5CKxxhePpVWZG7PJQ8f8YqXpnXcyM1X1SaQHP3ZKdohjAvu9GaKJ4cHqtwnK5QUeTEUH8EUBchdQkDnXJJtPePfx",
  "key33": "5693vTQKhjGAPgyktDyqFTrfu8PreW23QpuPhHYs1is3wLoCjsVZEXxDjefLLQTcppy18ZXZLRtNgDfyV2gNFtdT",
  "key34": "sBJ48zkTsonVBdojL4b8vAkRRiiSFtZn2xfoWggU2QCwoNDKFiHDC4ndkermQxHcQ5kaEP9QMu3CpRb3uE6Cw8H"
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
