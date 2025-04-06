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
    "2JxWph462cMf1EeBuMZGmW11UbfpyTY9AVtJGGJngcjreR9Ndm97Bxp91CVYwicEDNNXbgGgqcJtR72pytZRgwMm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4syvxvezxy6LSKom5V2uT6yRXmfuChkJQCXhyPZ78wbB7LLd7XemEqbb6wif4CDSqXnpdmVSf6GoqbtGEbDn4jJA",
  "key1": "4d7yp3JQ8P3LQfm35hLtYthHnBEzva4Jizd21nPwdqmsErSrrsnMN3C6Hk25ZxeJbjiZnjqaaaM6pF47E3EsWeCP",
  "key2": "G1jpRM6SRJ6TyPyBJHz64FLfTTRKzyP3DyMiDaLTVudSy768ZgiMt9ki6JYKTPSs8v39tFFWmVJ2XKowGAXCjY6",
  "key3": "2KSQ7zU9mPhdoyGw71TBDguFQcvaGRYCp9WYxEWQ9XNNZdiPeAATad8fbdyGJpUZNQD8dCexCajAxeLpePdSspUH",
  "key4": "5hmNPcMGtSeSyxS5Tc4VfG8Qp1RDGUBgRmCeQBq28yhJsnC5oiq51UDx3NJoFSptPrW8fERMNT6PxbjoZ3dp6Tem",
  "key5": "oihtorSGVChBMuJD3Am2umbbyMmhrbVecbVrFMHkX42ntLz63eS2BGYvp4vCZdzg2NXEK7xqC6eZG1EUcqk2SWK",
  "key6": "4AZYaNiRC8MjgQN4uzKtKAGGt2An5dHwSsGiwB7KRQaWmztKxJ3atQAKqLybfsmADu5npmnRCWy5mJz4ERTuWvaR",
  "key7": "LKHqJEtjFAZQK9dpg4UqGvdmn3H3GFenKuXuZDCzbAgtcm59hVk1u9ZQ31mcNrKgBhSqkLL3Di3mBPLJjYkeVD1",
  "key8": "SRidTt6SZesZnTCu4ezc3RTzgzy6ik98ZAMB1eWH5ne84sfYYnsUoBCNnyWgVw9uU21vL3wxUtC2ihtSPRqYNBy",
  "key9": "3qBwxo4hGqwxGUwFTsrKMaSSp259poMxYPsuxtUMwRzG8FJjrtGiQG2pETfebFXtFLJGybNannFaHzSTfvy67uj1",
  "key10": "2kYx6Dj6PWqDeeuQHDwvWVZbpXAo2cFJGxRjwZtBFr2h21pRBNuHKRY6QdycZ1QoomXv37FMbK3QD133hihfxkCq",
  "key11": "2beedH5gtTYqpgDu3UNv3D7rSHWeL8F6Q12Sg5q4sWsWqDr5oMkCQJdroTCorQwXkzFs4Y8cZEVg731qcbSrSyyv",
  "key12": "5woBf8vFnX4wQgQDYT4nfEbzCgSe3teBHNDVtjnsHoAnkonP4oUYY6jkNgtBoui9xfsjSoPuRLNpzkJLpfQHo9Dz",
  "key13": "22VhYg1os4V1DoYqQP4tWCo1rMoBCMipZ46e5td2jpjVwAAdnz5WnqWELW6baJZgtDf67nYr2KVB8r5uuBQGJYME",
  "key14": "hXdbxDeLfxfB2ZN2QDBFu9copPpkXdqyxM2L5AMxLTXQ64VVBZL5pSz93y8b2YuTHSHZnjZCWzEfMYe2eNgaWZq",
  "key15": "2Rbu41Ug97GA5QQu6e2Qgbpz7k3NjTAaB7wXNg8mQw4EkPkwwmKetkBGJ2c3uKNwdwAKmBeTi4Vba988TpE4obrK",
  "key16": "54mjCupuWShkFFvS1SKMUKSc9NKNjC8GZEv2BTF8PRv6Rwcdter78i8khqjvD5j13waq2abTX12dSXR4KBVLRzEv",
  "key17": "4A2KmKnG4Sqfh6HRmfZLPETq4wRBF2bVgh5uk6DWJSzQE8Ly1J8FULDF4XWYJcGYmhf42ccAwVXJySEGaftGeVgS",
  "key18": "285FjZXoZdkUsj8wduKAzCPWZCt9rTufxj9tQGb6miXcj6b7zSkxzWkaXqf9LmPiMTDfT4MUNZpmtG2wC4pWayBe",
  "key19": "49go3T6E61SaixZ9JmDT9TphwTfyYYH54oMZ65B8vZmADDCJcKQ663q63iFKpwYyEoVtxg3bCAZHUa5Lq5KmNyMp",
  "key20": "5RWEQzsj3bLiXzccSL6jnUjwEYn8Y1KvxSMr4KGo1GnZ97GRsnxyHXzzbYhbXsn6dW7XwD7UeSBCLaFr3mxrXaky",
  "key21": "2sDCtC7sBtBbZEmiyCdt7H7dVFcVWzn9UC5iKrgZTYNwnjxoVLGoc13CiGgEMUfzPNwZE43V3nFDMw9vjGRHbCtE",
  "key22": "4EruMebkroyhuKCoNYxPN1mFrvTLL5FWcZE3rPbXbFtYMQgSfxZUqrAUPcPDB6BHqCoLHB6iGAVEJVyTxJMdPxqb",
  "key23": "3w6tiq5KrqHkU3cBeE6pAuttSiRLWdGZ7YSquTFsXAcHMH4NfGDNRRkDGKTNp26W2zamW7uYafak5J7okmDwonLx",
  "key24": "63MshQiFJX7KbTYCuXtfuT31k8iGkti4RcuVgCDK2Y2ryi8JD3Vr4MEDZ9UyHF9mXXo3pqsyY5P7EykVuqqeKgg2",
  "key25": "2DfFo9bhTeQknQDr9gp5LZLJh8VqxpgbASdWYjsL8JExhcCE3jKE6UysK5mgMz1NskQvK7Nssk9arbXwX36XooKW",
  "key26": "5DuYdS9g72xJ2E3dBegzPcVSoL5mQ3jHN7ptymFiogZxkhLjC5XEPPBZrXa7ZnSCj5GMwtEUnqUtDvDvVgkrW2dX",
  "key27": "65kb1scKK4sfoo9YstvR6z1E3wbjztQngtqajPFYs8PrNd5nbdDZjaVRLSi3n9VyDSB8hTkye9m2o1VGA9UUuE9f",
  "key28": "5iAgx6i8n7DEQvzvShoX5uH3KCjn68jsXb8NwSQZxfAtg5MGbuMtz6uUsVPNfRaPpZno8NXe7oD1Zighbk6vEnMo",
  "key29": "3kMBihy6U2mcw6ea6dE36H6GiyV2cFWbAEbr7P7hdZBPUeAhTG6cYbEnRH7YsY6p9QLKrm3ESEVqmHY1cyYxd7kA",
  "key30": "3fpSAbzTJi4h15MSqpwZgamhBxVRXHvTjkr2D7Fuf5531jHNdoTSPsyzap7awxxCV8WusKT3qqoWkRkArQLWbmYY",
  "key31": "4U4Y5zAj7Qqhk5JRCjSMHz1nM3CqKxSB3zgNKk1j99LErfrwFoJxZ2iqMwtj2A71VfHuFEiGHcYgRTmov3i73hen",
  "key32": "642j8mAQXtM7RFtScoTujKyoV4ksLscZSHdk4MWpenaE6GA1wRK1CCTFZMU8Ar2nUcomARhZ9RZ2n1YijPhvNRXF",
  "key33": "ifvaWWdXNDSsuWiVWw8hm2VL5QYmgtpqsENb2wumwtWMjoNYtCXVz5Yp1YWgZim3ngof4iDhkUfaj1zdDcL79CY",
  "key34": "B2gVahYwsd4gaAaMGEbNfkZLvLxnJMkYfbtvu37kRnuQ3qAD9cnyuCccMcZ5gtBxk82uL5cqwHYa3MXQAdbXe5e",
  "key35": "3GRmMBcmhdAE28W6L9iSZsgqFaFcDqty2DMicPzKrMhCEAC6DiZNsd6rgtB9p7R3f311tCvAMiqW8LTUMZhjAqMs",
  "key36": "nDJiYcnAnd6xZ1hzJqr97LK3iUn5cSG3AdwFgUcxbiAfB3AAeRShJMrPaU9bWpa7YbzCm3cLyURoPivwds6HLSF",
  "key37": "3rmRdTx3ZSJ8G2jgSBP4DrjykKUGh244ZjHBuEKUhThNyjg4c5YbRveCQZpwpYZSxTSiRKQH86z5Tgy58sT7M5Wi",
  "key38": "YjKW3tF7PBfTjSUv7bnjc8pnEw9jnqYbJH9TgM1aw8zFZcQQCZxpVPLQpfZAQxziVbUknScBgv4sXKG94Fk2X1W",
  "key39": "4cvpX5NdMaVRUdCHJgB3hGKzNa4rdVNaQbjdpbRnWreaHdjLbgduWbHJEa5LRtBvRfMfFXa5CTgAvdMg8Pmx3nRq",
  "key40": "4oBgt88UABE1nGVmacW675sx2jYortUvTXcGuM75c8LPaPEvw4qLhtM13cGFVBgbxQUTrgfuBuCRRLhQUqpf4sfZ",
  "key41": "3oGhHiVWCJff2sNUdd2xcFAhemDh2AU6n1d1XqDXdEoH1fLJV85od7PzFfvT8p8fZ82DkUafYsRJrXgfLQRKYgsN"
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
