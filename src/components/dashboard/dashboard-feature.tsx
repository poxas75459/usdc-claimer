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
    "PKC37n7NdqNDLJF3mK4XQD9aHZiMdFWza2KXwjc2Dh1WHfPMfaV7QWD1WESutpVk5QQLGVXyW64n5ywLzL7bU73"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wQRx24wuAJFg6QaNnqdtBQCUansMVuDYiTgNEDHUud3wovDwFLMcZWkKk2dqGg5MRHz6brBZDryHfuSTywuE162",
  "key1": "3Pj6jK27jhRg1mSu6GtFDx5nnvkWxCJLQALceyRbhrtYeNKRXgAm9shCcnwaGJksFnLy2YrSqhT2Md4SXYeKzcX7",
  "key2": "3811fr2DbEeiFh4wX72qdNvcAztFcRzt9T1CBW75XZYyTvKhLk9mxaAZM9vVhVEJYPJeVEjvb8xmypc4NKSQisje",
  "key3": "585JaFHXvc2oboB9Fm3vbSDLdFud6xbQHuPtPbFuGdKsAWxbdbNfwaZMjxfFrWRQnQN3C3cxTuPMhfYGButeKRg4",
  "key4": "2udtCQxGZvCdQc4DF3zabvyDAEF6PK9UQtGErdgSa2S7Kn5Ls52PwEJbidGnhLdb7T8uu3RJY8JhKf8PuzPCDzxt",
  "key5": "5TJcLqQgxCAX7zmo9FAKt7q7eLdotfDy6uAkT2ux9vnDMRut7F63CiWAaTkE5Kr4NKUYTmoGvuwKVxFCKnsYHSmy",
  "key6": "2dSPKc6axvvwcw4LoXTwDybbYKKu8mP4F3qEpat4UgzoQNusjY4FDcv8QCisYxHdRsd4ZBP4KP2MEgKbyoqhAH18",
  "key7": "5qHgd3SKHfwnor7HMxw9NwW88ejUYanqM95HKHZU7b4FbaiRA8cWSiac4P6G9EzcMqtyBWsP1e6mrWXkBVNpz4NC",
  "key8": "5q7tFByaoQqBfAAyVB7Ngb58ShHugb19apYDpeAEmgivj3Wx4GWLYwDiaf9bRtVCLxeUUseRbD6FPaqPFWTgF6Hn",
  "key9": "2XJjEvuULgbQEFEp7YbYiA7vyD6PteVB2vNTLpHS349woCRbW4Qg4YVYwpaMVVbKr2cESkkFu7BFJm1NSTAB46vC",
  "key10": "4nV12RjZAGuSjtpZaeWC5wVhobZP4AUHvVKwFVvKX8CFGMjec27FQvjeb9BL9x7NaPoM3Yb91ESn9ei1dziZTtdw",
  "key11": "JWUBj3FUp72J3TgiVd1ytvNUrw8QQ5iD2QaXdZKagdAESanU7imuG3MeCs9gPFxxhmT4VueGZTAgpJyhHMxgqCw",
  "key12": "3RuE9NjwjoRCv9N7VqENufPyFGhnZSWWhk9ujvqQL5ufaXvjkWhtNaHKmXsqiae4Lo1ivkXoUChtPNz4JY15z6LT",
  "key13": "Wviteu8TUuUotLTwBPBVynMqkqdiwGMEB7H8hnR6eq28UrDPEqjzXQ1AghmJNzSMLbgpXhnNPXsGW1fXNHrxT8H",
  "key14": "2Lyq8YsfFrjwVAnzmD4tn6eaphtHMCDKTfE8xkRF8RyT5tbmi8L8S6VgHSVSZu6onApRtpyLjPzAMkZqzuvC2yHA",
  "key15": "5m9GAfbKb8eFayqNBZYSVpAZ43R3voVPDFvttWGkZVrkH8YLHTxPHZVJF85FLfTdhcuQyG347dnnmNk8GzSZtNVr",
  "key16": "3YMb7tJFBfHBEFQTFBknkeLXH278yXcfZiEriwWMkbVRa2vKGYZcR7dcmtrqH36rqL2UQWnXtKKW5pt8RDWNWZoT",
  "key17": "Fau8kdpL8eTUQLyK6Vi4oXJNM4U8pxrJfAhJjw4PA3x1C6nA2vqGu2ENQiT37KjNAUaHeNfTN8rSPXxEemdAECH",
  "key18": "3yaBUWGjsg7e8nbtezAg51nRZ7G1FK3y2LwgeoZjQiaEB6HY7EsRVrz2Uk7hrZsyCCwgEkruz8HiKuhpHtwhPj3t",
  "key19": "WYsDZe9Vp4jpAwA5KWezJXx1Ue61FSrwM7f3rReTWEA3MdQ5bPxqsxjtCgXFgHgTeF4sixjfkLfacz8AL7BnPuM",
  "key20": "ojzsDbEuti8MRZHPdzhZMAmuttB4aqSeZ6DbgtjSFPuPmt7TAVTFW5vZ7EGDodPKgpWfxRLYdp3u2NkjGSLLfnH",
  "key21": "2stBzU47k5cx3TRtqzwEsA5gwRyNQu7GBfgoSibhJwvVGiq6HyUD7B45gxpHaKp1dQYM59UYBdrTCoKR1EHfqFY5",
  "key22": "37SEgxXXTErSn7PmMFkQBwfRnKzqfM8Yv9fSNBnSwJiDkMPHN7Yu9UL15YrN2PUTDRioBLJxCVRTL199r2m9zqSF",
  "key23": "og4hFMJgyqDoTgbVtpE38C5kK88pt6gVPp6cuRucULQ5ecEjVj73wj8h8brmmtCbHujpShnBXYVXZCNQbo83iUt",
  "key24": "4LmyWAsQZDi3BtFTVYS9E9cyiueHcgMzECFj9YAb4Pz29gRpABHF22dNcYSL3cjvJi7RbAXUHHAVgmEEnp5FeevF",
  "key25": "337qMYdNacCbHuTKKxrRDWxjK7oogXSd4RAtqt7hKguUjLhcQ8aouRDzkGwaHHnvJVHe7bTfBj51sANUMwvjSmJV",
  "key26": "2uZrgYg9kV1CKhDkrGQqdyJg9XoAvcD5ZMNWd35Upjrgx4q5RdMXmRwE7eLEXDPxm69PAbJdYvNxPvDmCgSJBzw9",
  "key27": "4DpPPSg16T6zxURUd1vE9b4Bn3KU3Gw2bf3UiWC4Eckf1gGC1n4c8cBhLT6kWq5vJHBb1q6E2vGaC1AcxWkFZLyo",
  "key28": "5DNpvJcP4xgEVuRQjyYhtcnV9buurayzCBVgbHv8WG3cyd9jSLdDb9abhfDV6BzMq6TAq73qnHVF6JnA4eCdMNVA",
  "key29": "345whm76y81T76QT2aJwm3YbKtWWB8zmoyJYypvA9S9dwwEmY3iQnbMJ5RgSytpvoSMM1J69ctVQK98YadUaCvDC",
  "key30": "3hhWsu6cTJFYJqFWTeY8CpqF9MEgkBP6B4xVF2P39amA5TqKxCZmssUJHu8NcXxLtP7nchn6j1TWZYkAqHPndra6",
  "key31": "5QHKNXUksV7xby951YYwNSbiDjMTr1kTpfFR7siYSzqCzNvXBRWjF2mJmaRUBWfTet3XgEbDcu6kvA1ZosX35S1p",
  "key32": "4no6s4zeuodXtV3fzkbVKU7SEHUemnasXb4oEZ4gdS3PMUD2MTSnmP31bXdsepVUKMX9Fxvq7qugpk7qrdgXd8vg",
  "key33": "2dwYUkuVNfV4qrJFmpDSnyZwajKBkgdZmstGPGet46nUxtoeb1sGmMzAbe4RjKJfAznX1gS9dNF9zRrorB1FH2NS",
  "key34": "253xKNaCUjDSFjiMSLMY1PabLvb7Ck2Qc5YnjFRZGskBEZKdwwK3WwXRYTXXSshEMvvTbU19saqMsBGUY2MbgJFo",
  "key35": "36mfcdXSCkjCoLb42WnS5p8GZyJXYrL7onES9TkhGiAniUL94Aj9NWoGkKrucxtyojDZFu29sAyi9nY3QSmrPonn",
  "key36": "5ozjyKAeQCx4cvudASWxYZWoTamwfdtwQQSDxPmHthVcNhH942wktYTofeXkEAFg17WbJe4gzE6ZtiNZQ8sG5yTV",
  "key37": "5MrP3t8RWrSrtxG4dvW5n25wbf2KMma4aFiV5RwwgXv4Z7GA13WmNQicZ4brZrA4hJ6RGjDW4gb95uvR6LcYak6r",
  "key38": "57at24qCKpG6GEMo8GZbyfLc2fFH4cziBaEXKieYkRhy19k8G6wN8A4bHxeskebHqdzxmebzLWsZ4SmVsGaw6PLe",
  "key39": "2vGvi7twmrgRsMSttFDPjH3197v9XT6aW55YRHJzJAHDL5XbnKbrzvQe9CtUHCZUVyXHF8uVovR7XGp6t5Ab8def",
  "key40": "2v3tfQbXCS5PWVFfhvQbLaWfefjKirn3SBh17zibbD3B2zoMpDDQ9ANspoLjFeigypoiGVPACdNkEgKKRWhasFob",
  "key41": "YxDDugEL2pu6cTZzWDQHq7UpEJ9DyQJ8jVkQcCwqjm3aHQLQQCkZRGA29HDDdV8hgepXoPPghM1M9JTZ5NL2cBt",
  "key42": "599t3jpHQQXYE7Bf3p1QkoJTH7yJdcueuE64RChqtfwmkcxG2VLKZD9C9mAYKedkKWNGUFbgA6v9L3FsqZwTuq2d",
  "key43": "2fW6yqhCNBW3za4rCLdEMs6RzP6TqExovE5euNXC7XeJUGqbhpcPKScZ7fBZnWviS5FDENKfo6ncnGVUwkyMb7Hh",
  "key44": "3uV5TiyD8SQPgNqJ4zcJDdWkCiPkrUeZ1PZ53ed7rnZf929ztWMWUNFfPnKEaJWL2vkZ2R1FDnH5UbMbAGW5hDSv"
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
