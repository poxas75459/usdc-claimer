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
    "4kBsudDBSg69aXypuUHhYRTvrNKhLi7vfbM7DRuMRtUX8kBV2K96ey9Gs392pD9vkvzkznV8hwdN1Be8aSq5zM5k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "m2Ro7nuLx7nZXgtouCK74QSkAx5GZjvsc9iYvavNRkDmjFrKyLNfZRKLM1cTgPSKioVWTVE1utSp5CPYJNV1MLW",
  "key1": "22GaSins22d96pozTA2SzEGVYz3iMDht2xVuJKGXeBG1dMHDkkthE56sLWHX6584CwU3BhfrdFQSPxGmSYtfmQhE",
  "key2": "2dZZEPV2C9cXqSHoMjdfm6y6N1wDDfo2wLCMDr17PjCHEmzSVbnwathXSuWjhb3XXBvKWDo5Kd1G27E5pmcxwpqG",
  "key3": "5jkQJoNjbRjFtjjHY9Fyq4XGAgbBPk8zYaU2qHeWtiRSEhT7iJ9nz8mZktmnQb4z6Ciue16zXuhTL4R5xjysHu9N",
  "key4": "2TJDz5rK9Kf9zBdYbXUB23mVfvsxdAYGPuoGxcjR1aeyUCMC3ppDUN6upGpJ5n7YswtsoeA26GcvtnQZDLCe2ET7",
  "key5": "5Xrs1kApBSEyBMkUUzqGu9B4yZT7UkoxEwq6GQn785Qve3A82uZH1GwTHTTg5YPGSb4RypxtDGJdzYBXgq2miDv1",
  "key6": "5fDeu8C8dt1DhvD1gDx4WqbXGQoxcwLKVAeFWA4AywUwQqeGWMpNTmrrE92Xb9kafgJysgY49E2nAXGtmuSc4aGk",
  "key7": "2ASxVcYBS9uKdYRUj1j8bz7T6tXSv3uEqtvPhGBNC3nSq4SspHQVghE5CzPeWuzC7UMPikeobvN6SzAyxEXF1YXq",
  "key8": "5EYttu79gQ2zXo2JVuRdosaz9R88aMJCvdrHZh97nicB4yUtLZx9zs9QuGSRRMH33BJzDW8BRjsthHTksYY17kQZ",
  "key9": "4uRLdVrjnBT8FTZt24R7TYGSF7PMPy6xCYZiqH8TZBs5y9oLXGJM3fxV2HbCrxfLwrAK3SVemXqmRudSWz28rdrX",
  "key10": "4QKNsX4v3ivyPSgioRrF4k6XQPF93b9uZ3DLX7zhWJqR3MGJKq5dYN2zcH4yy3RdfUA8wxJhwwr64pcoi6qPLWpy",
  "key11": "54v27ocUYK3qj9mzWLhPGx4a2QfypYLCw6jk1qYb6Zg191iLHsBw1pWkffjDjqYxSb91MnqbXLyQFpdp9jfZ5bV4",
  "key12": "2hed1CgEFXFKeC3Fa5mBFgagtcy1gep5Kc3YJ9pshvbtLRM2GHAAifFnkChRPu9AHgpyz6CjQ85vW2mQxioHDJK",
  "key13": "3bAhNG5DXrngMJh7gVSpgKGox4LWgWPNUmMENBeXhgYHS5qVxGogTnCH3rDqSx5N7ZaEchsNfmmCH2LYN3udmhws",
  "key14": "kRQDjWh5Zp4irCYP6MnV7Hf2hWkMsSexWR5uD6pR9tomNWTydatGPaSifV2w5r2QwM4Rnq5XWfVYNYYJksNegbd",
  "key15": "2DehS7PPA1ZE1N1pnZnQ6DQcuRwydaEPhQ8s6fe1TrABp4GxJTPptqt8qpbxWdLJJiSnk9MQ1eX3znGJuaS9jJtS",
  "key16": "rxcSV7uQ8GYtghV3YW5NZHYL2N4jBCgzujZEGCro35ofzQh9SirsgVx96EbTYN4oU4QorNsMT4TKb5AdRR6xPgj",
  "key17": "4whARKPvpFPEXLifGkH9D5p7Z16ha6BZShqmjk94EZBD5YJyyABQk4qh6rr8HBt5Chy1z5wScmRXxdC1HBWDs1og",
  "key18": "2U4eFvEwzHqX3um1SsnfwGkamMrrmsGBVKT8DpogNn5iU2DDGqHPD47HSCtR9GLoobWdwixo38gDnuawem9nFAM3",
  "key19": "5FpEumhHPqqJyyM3FCw6emPwVGUk27pzWYYDW2Egh2CNZJKXxBixfqemfrgMuFcDm4bSRLiw5uLvL6yDbzR6FeRf",
  "key20": "67NYYdJZ5iBvr3DpWSqeaouw2fSNutPWEKm5fCoihXdzMyaTH4gZkn28wmaVT33Jd38vQ1wfRs2kbth2iNNfhtJx",
  "key21": "pxNm1vGgH4K9UMv9L2WfGAtCxGyP5ri78csWi8CcaXPLdQmmTcdLVH6fDg8bXioaCf7h3fWu3GVjq2MtUhPEFSb",
  "key22": "5TaGU2vMV4hwAPzjJft5wsVwZo12tphUP4e8zhbf3JjBtddVvcvCqMUh686WwSs6n4YfXpHaoEHxQcBnbBL5SnNR",
  "key23": "41neuYqDN9H5PMVGXYubNPgrfsqe1cpK2yU8x9EkfYdRR1ZECKsFjeteff3FKveXrYtyoqAyoWzg9rrFuAzFkygY",
  "key24": "3xEoMvqco1igLnpY72wtWKFPBm4Um1NGGUdviRKraaUuXAoh586tcDBEhgWTV2uVVyrXEgwkw2aeav3nwWWA3ZWQ",
  "key25": "AzwQzoZr3qUujjsLqkVB1ED1jowuxJL72T2dzRybekys1G9q1LzaABVQzfoYWEFUNbuA5YSeXfbBYMP7w8ss8Q8",
  "key26": "47DFCS3tq4RjK6rhukhmTDY4NDZmkQbV7tdVrN5kfmx3QVWhQRfYwKs1fNYSsHs85gzpC6oyp32HUo65rWYHZ6eq",
  "key27": "4UYnbtW5prY6fzGxuYPsep5rJCcX9kreVcA3nUkWFqVUyFheGzzQy4uZ8ufMrf15cF1cZLGguqxsykM7VVqaTpkN",
  "key28": "4G5U9FjM2SkjsoCELgw2HJE3243rdEbDyh3JUcDtEfCaxfxPqZgzRVscrxnjyStdprjnLVdVMynGskrr1K8ZM3C7",
  "key29": "3deDyC7h5uhWAysUpyUaMeQHXSdrQFRki6NVUrdSyAqyWN856awG2qTVJik47sVPBWWkPftEpKXQji7dZLGcxdp",
  "key30": "5D7DkhJ1bLcyth1kivvJeHKsvvVcjpTQDyxiTzKYcBExiYVZGTCr7GzQtf6xZ2aVfh3eJMpBXkhMfbWxpQLQT6aH",
  "key31": "4kDpQE3mD5WHopGUNWGirjXiFnjScY1dNLyV76h6Nrji4KmBDT4sAFULs3KcHmKLQkDNFJuaYuN3eYi1VpPStSz3",
  "key32": "4zQzwVq5UiTEqMmPmTHAz6bsB5i3cHbxg1QEkqx3TpEgXTiESDhKaHVt7Kvc8iJ7ZK2SGaQtcQjQj4X1Yw1QCjXM",
  "key33": "2YdH4XJdfPX8cQGcdpNMUjRT8D82Yue9Xy2pRx1rw4ztqJzsVonSVmiBgmS72qtT49ov6RZSwmcozLEthaURgx16",
  "key34": "5JDeXdwxLpToZZ5PhxfvWk38Vn6d9a5BDkN1yJ3jkRzvdWxP56RcEYw5ZBAjN33PkmXmmUa9sVsNMbuKj4fJYsCh",
  "key35": "4Y3gVDM2Zqxq6VpU2ckZK4JPNKh5N21WqcKBVEBZqscpG4oFbzqVXPFg4bgSaLscy7kKrVrxJxaNcKbJx8jR8tCT",
  "key36": "3RdhEngUXj1xf44vXr7j9GrB7CEvtbPPeK2jgkAUG8petmnFNZRxBHGmoaoSPjK7V8doWeNhho6cYDr9JwRaSVci",
  "key37": "Hpj1dSduYoooeZJfkxD2UyHGnXp66BfEATU7v8DQTJGbTfypKFmtTjwf9cGEuDMj5vo279xuDQTnQke7fgLHNDi",
  "key38": "fg9PYxjhJDkEhcPdkTqm3HKttgkeBHJrG1Y1u5199ERVkyeJM14u4P1155AD2Py3zYB3uH4x9QWrcbJyg5GzGyp",
  "key39": "4DEgt3VLXuhQzrfNVQrKv5agSVtde8wDwbpdr2LtFdgu9zSxwSRGLcktnZ4RQemHjCATuMJwUtUB7tQCYUeTgwWd",
  "key40": "5EciV9Fh82P79b7snKEh7oAhdvsGeD85JaHtzM9Mp6zzgpQxj3e1KEs8oCgVLdXQczpJjPPJpdh7U7geeZnFPczE"
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
