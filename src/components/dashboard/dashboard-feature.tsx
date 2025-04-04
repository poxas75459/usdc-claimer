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
    "9bza3xsyodAoLsBnP5oK8kd99J82Q9hiZHLqmdXAtPaQCiWBScKFnN4NmjwSnXJrA8sK18LS8tchhGtCajXXBTF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64ZemYQo1sqFutwNkEVPYafWKD7wTDYcpgiNFHfkLmpZgwnsmfnzYk9uGYshdqCamD3Bmkrisn9cuTpwWWF9ZLkd",
  "key1": "2GFmseUbPZLyDNPZUpXDFgQSJ6eL9b7S3XpsixQ5qpFcdHKxAUqjHzwCgrF8QD7LjhpB3XWttNuqydYiaEbci7RN",
  "key2": "222qCw2eNR8ZgbJZojpzTk7jZVNf3su3aiVPPfmtEW1RhwciZ9NcRYUDD3p4h5skBgMMgFknaVWFUfUxGpBAUcdJ",
  "key3": "5684txLT1tiiVvpbVtaJZUPc9tVjhB2c1BjoDK2iZHgZRwsGyCfbXjgDvsxfpax6CiRg4M18rhJxadbstyZENmb8",
  "key4": "N4T5ScoNeFEobVPZYoeGqGaFjNQovkuWLL66BDnYAVaKJfevJYa2Khndc1tcZ6eWN1csTPC68vKejwPf1xLdWSf",
  "key5": "4rgXgGn4n8nc2Kb7CyeJs1J2M6uk7aMkopVcHygwfGeeR7cC8YyrkdqZsgRXURknoULdbmHBAKJqiCZEQkFm3Rzd",
  "key6": "2Zjyp3o32BBqozknAVdW6uMNGUCiP7foRvvXJhY2sLe3qV4jFT9G8sLUBoRzpAvnVkyhUXt1GBQcjkaf3MXesx4H",
  "key7": "4BHGnYqq3Q1Uqg2HdfwVR5QSfVVxve2Ub3KMg1MXbjDASZvUptXUJDGsjUA7MiSDiuiV2xvWz1ME2wTGjCvFhtw9",
  "key8": "zTTMS3tRFDAnkwMekasXR6DYJ2sNtbshAcfv9ZWiTP9YQZTutYYLNFkr4rDpYgrjSjSdZUgiZxHJVo8nCqaeKc8",
  "key9": "rvR1gGvpHiTGYnsJLuShBeKi2iPQ3Z7Paf75TNtXQBS3KJYjB9igeDDcgJ1mnNNtEJi9P5EBumeMkNvF2ziofEJ",
  "key10": "V1Bod2UgC2eg2AUxBgwMiaXV2yXCxv83KCHTUixtMvLHcmNeSz2Qb4nYA29Q7rcmKQR35tnpP8GQGZGSa7R1q3g",
  "key11": "4y9ZSnZApM9Mrhk2XT7ZKEszsNbzyXPBUSkVZAmp6CmhG9j5iCjJ8dgtzZhN57evPfyjjZC8CjAqr3gyYBvDruca",
  "key12": "2fFvJ9FLK98a3tvSo2ssJ4dBhi2iYnqtWPgJCJUfND64mmhgSC83EbFmgcKsuB7XogPbq7ec57evWkxvw6h3FhGq",
  "key13": "TFwUorj3R5G1uS3CzgG62LZMEMZuXCPFeVp9S3zZ4bpJPqnkqCUkibLvDrPx8rFrCBG3guiuwDn6w7Fgso8Kp7J",
  "key14": "53FWNNqSDSN4e4WBvsjorLKD7qfvvuZjYob3tTtJjMHum3cWMWeFhnii7RrCuaK4JYtMRpmdxTuzCeyFSfWJM9pT",
  "key15": "5XQifQZ5pEuPQMnsdB8LRZAPudhjmZZzSjcmdaJyHo3bZfj2aX77P3288xsDXj8z6QtTZgDYqqrJ5AcLg95NoaRM",
  "key16": "5itSRGN7sCZ6J4ZGRZPCMwSqzk9PT186fewqPfQK9vGqVxAReg25sjqbExQHhao6ybCuDsbjfPzaBvGgLQqJNtki",
  "key17": "3E8LRBBtds1CquC2yCSCijJawanx1qSeCzEXsmPVs3EYUkPNFozgV9MQjhiKroKxdB5jWSKwCKxpDN3pb1tifGxJ",
  "key18": "2HiCD1LnwZQt1Nq5Cib8LjciZRme8hkKMgaqrickmsTyvuoGhMfJXdK8PETfSBvwpmvsuJR7bn4UYjRGpYiP5apL",
  "key19": "3oArecxKoTHuxR6XSgJUMunjPgSXrj5dcGRgrSCq4n4GVkvaZY7oKG1z8f3764CJHPzoFe32iF3vMQcmbaJFYKuC",
  "key20": "66vR3NLi5fJCp2s2k99uyXoebadGgYQBdfUnVu3vGoxMdnJSEXqfdEKUEz1N4AQdUL2gdbUyWFPEpDtSjqHWwUXG",
  "key21": "63XQWMqvCUoLodoBPqukTaG36yKQuvNjaqbQ6Sv6WEee7ruUz2wcp1ZfS8eAYuxQ8HcnxqjBQXsJT5rebGY6FJTU",
  "key22": "3MSse3jrwHLaNueDmAjsHPKwNpfqYQqEjTfawxY3SJe4pzC7nTjoYBV8hKq3iNeBbtGK4ftky7pNgn3jgy8B6mev",
  "key23": "3T2uGoE8mTXAyxj5o9zHfqP6Y71f31yihbK2pQTonu7dUMzViZErFje9dtB18DZ9UgCNM531pBApjCmZS25xXCcC",
  "key24": "s9rFZRN5cLjrU2PfmR5cFfkYCt5Uf8m5biWKQcYcEk3zyFX74qVbd7SvT95zFdcyBf41CCWSGXK7Z3MeUMkbUar",
  "key25": "25CDeABTYZjPdNiGtwqtPsDWi92TKDnxL12NpW4JShrtC6hnode7w5EjaYxQJM3KfhrEhXxn6WEN9iAw81o3iGQ4",
  "key26": "5xpoVKwnjAj9VfhfDNewcsSGw1KBEHdmzLZ7K7HiZVd3h44x47HpQdcQfeSKNeiFnGH8AHseE9Fm7aED57NADPc6",
  "key27": "3aNNu9pQrXTibbW4jNKy1mfEnu6JqEnoHy5Le13dCdwKWP1N25egvRpZwfzA2YYKrMnii6mWoB3f326zfQSHN3nh",
  "key28": "HgvQsx1rkwnfLC5Jf1D5y2m6Yrx5394vCNBHG9FmCuBuZf85tRMhK4XqYJtwk3MrbL94xa4SWjwMjaqArFXfyy5",
  "key29": "2BeDdtQhkeJTxtgeYicCqUU6iwRg9zayzfBEFSq1TTeZjMAFUNvdaxmrdFr1ABAXFyrZgMw2ev8x253JXAR2LLBM",
  "key30": "3Tmc9KrRSfn8u9eymSZtxXq2PWhNzTuHwbzvCLJWNKnDucZ6GXJF7MN4hXynF7u4WDXCrmJPSNpoPpGfRR8A67Jj",
  "key31": "X8CNJDMJ4cFw2hJV41rGQZJ7FpxrkgNaN1Bq6TzCRx8pwCAuwm8SejvziLwsFTuC5XN1WpxfWBpnwT1rARAk8JT",
  "key32": "5J3oKUNtyYuhfxfTUD5BD6X9Ucb92DgrUaZsCmff9EAgGYYFn6aYUhR97zStDj6Kg6SmeF5V2JSrbsoiZpyEHcLq",
  "key33": "5gPzwdQqpVyipzyuzRbim9F4MBvek6sUS1rLFLGY8DBrCyatq9XkQPyw9M7yrAjbF3V2ubK1U71HxTdoN1VQ21eb",
  "key34": "3RevC3do2iiAzeqNCCDhGtNVk42LjMbups4R9meZWKCa66mD47ohsKdQqgHTaAcGeybTWuTkaH7vej5eVtGdX9MT",
  "key35": "5iyvJCreUAvNS22NAdrFtVdNFTPauLamUiwzpJSiEjZwbVTZcDUM11dDNWK2GXcpcXWwtLHHfD8PD6X6PomsVA8w",
  "key36": "2wXz5bwNJr8e7wVz79FHrkwqhdrMHiAbLqLKkgfZcUsWGTY2agfSE5SxyLL9wiA6SZvpgxRYQBnWbYRPhhzHFnhW",
  "key37": "5TLaYPvRXRAsXMLEy6DN27f8ePnKdGqBtaJdQg4fbJ31wFPLsvBYwkPDQo7vgJYD22cAncCE93GfLugTbgY4PeXV",
  "key38": "5pouyNBZ6AUCpRjuTfja9y3zbGYaMuUAG4fSwNwVu8KPzEENGidHWmzqtrDcFWjVCGnPd3SWnoVeuoZAidDHw7WF"
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
