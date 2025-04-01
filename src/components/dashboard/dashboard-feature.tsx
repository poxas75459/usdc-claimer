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
    "4FMkdGAapdGRheGQ1zVefGLeaUqUnV7uizqb5ThF6tM6QPPd4SRQC7Fq2UXQUy33m2wEqYdWWmbUnBAKLB9Yev2y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5apFKRbE8gj2KzxjwhvPGATeaxc5Y3YF8tG6ts74UwuMt1KM718ApPyFaEoUvR2qbEhhscNMurtPCnLWwPVVWF71",
  "key1": "TsNJe5pvbL8yyKTu3jVKtJCNtkqs4uDTYyQod6oT3W2zv3P7fAKTsJpw4CDUdSDgKrsMoj9jhFJ2xeBVVd9fJ7X",
  "key2": "3DoRmwWUmbnRcYTY8vy7T2ZTmTmw3Y8aZzRfhs8SGAcE9tPw3T4ifG6K92YNkdBXF2YxrcCcr8PAgQt7jd1qeeCD",
  "key3": "53NoJMvjfXiFUhohc1xdMoJkV3dkRwKpxYewNJ9eFGTFVebQ156QWvng1GNWfn2AsVcbfqWn15Drpqqjo1ctRtGg",
  "key4": "FGqEwoSKoxVvrawBdvKuxAj4JhYga9UAuqKY2rC9QmAQFd6JbyHNXJyAdxCVSr7p9zaVCZZihLuNqfDFVaynzfR",
  "key5": "jigL5oaVfzZN8mW2r3YmpVgr8FuTnFDNTuUdLPPJDJmJqQjWenJAKwk14r1jB7Cewk1Jjn7ZJM8EghumjzwgESw",
  "key6": "L9AEvLf4BzTKDRGSJ4MsJAdK38fEWpcdEXCg3zeuWnpRPVLpnsZ3wQCpnihvpRzDF4j1fom6T2e3F1YuwoFSxSA",
  "key7": "HxsF1SBCyPNEwtpLxvwoi4QZKK94vkxNbFMx4VNyAPbLF4EF3AESQvFfuZagADuqfu3C7KqG7LDCpHNPdoEVt4k",
  "key8": "21ryrnU1rB1ZUeWYKpL4fd6eUnkeHReqdReGtfbhtqQsj1yM7DRdWVKbKR3QAaC4w7MHnzWfUBrF6mktevLfxagp",
  "key9": "58hfn6Jsj3XLP3Dw8aBB71EyLipVmBbqTdS49Pror43LAEWcFeH3Q8tvZpiDHujhX8DWkqy8xgp7giii9iEAwTgC",
  "key10": "3uR7ix7eonoCK6m8YwvPtrWq6AtVRfu4xi97iXCXzhhLrnq49iv8HGZYQzKfTUWDL3sPK3F2TajnHHn8PVj5dMi7",
  "key11": "3DYZvSyiyqNvjihMm6rrcEMi3bqTVi8Rz7todwFLdy4TZa5ujgrbnhUXavBfMta39zucDSVxXuGTZDvb4CudkENx",
  "key12": "Vds3QoFZeksW1y1bPc8tno7MTMGPyWSwoeWsyj84fD6M4bop8jSkB5BjKcLqudKzMB9vpcfXZDAzZy2ex5h6pvL",
  "key13": "3gu88NAZXQ7JasHg79NLBqYPh7Pzvm3M2jm5GQNf9dsRFbEbtt8SPwAimMZLPg7bHcZsq5cLHNKgbQaEU7fwogmc",
  "key14": "5ky3ceV3Gd8Fr7YVqoYf1ov5dg8cv6W1nDyn5ES5yofpV4u7Adw1X7GKsmmFezzaPBRVjndwV4j51XSGKEUk6S2J",
  "key15": "BGybQwFpWHrC53ZonkUr6GKYCbR3N75zwQKycQzbY8GxfvJpXNc5tWn2uBsge67LxjEWtU8WQNyv7Cju15mom1n",
  "key16": "5N244n4zXroj1fsS2DEYrcUuWwy7bS27UTwmwnoi3toVtc4V8sSdR4WbSN6uJ5QrQbmpcLmz7qagxqf5jnXEN26K",
  "key17": "3ifF2eWUXbHPzJoraVHbPKwLbgesGzJFqoR4eJ44uDhebimXC5jjJ2EzUTwwL54uYh2GfaNog9VB76PHNuC5fvUd",
  "key18": "vEp1zZPUQedxpjoVj3qHHoNuaxtscv2W8p2GZZN6zR2616Gv7oUS77V9cTL13uvYNg2LEvcrp58BxqidXL85RGQ",
  "key19": "5vhz1uBboSzLAS5tKqbD6ZsdY9nybBq4EQWBt9osQAdPuEC81CT5enLc8LhYf8jV35VaNKTztZZG8JrcfcU3eYSS",
  "key20": "5H47D9zH4dEzWaQr3StF9dXpdPAJe7hKiyjfafG3N9UTs81EouHpTFXJF4t62sovyS3YVeJKSGCAGbZ3d9DUfpW7",
  "key21": "g4SqAapU6tyWmvr6tCTS4Nm9SbWZ7ng483U7Bx145vBRQJPHNskkdkePNqBLcL9zy86xauo1PSNiRs8rwF7cz6x",
  "key22": "3j5fbeMC62Ld4bmXPvzVkFZpdQmhMZp3AVukmt71sD2fxnBvH4atbygYE1eGqLAS2KpBEZSVVtXdCn13FJPySnKP",
  "key23": "QABcsiEHhspktgQfsMK8sDQbAG6Hf9Cnj4JfQH8VszA1Y1kgAZ3QXi4EPrgBgbp1aCA7ZNM1ZueH8C5Axfk6nSZ",
  "key24": "idMvZYiomsVx8k82qqnUr5vjLw7TGA5fXJE4c93XZNtg5gdhB6gr7xs3UaxxQsZ9WgVbp4oMxBAhe3yba36EBdd",
  "key25": "4ZMY1dXA25PGMcQKchjY56dn8zD5myTjaNiHjcfeEmw8apRVUUy1CDAT1eivqCxqXLju5Bv7Qw66eCC7Sb85EwHA",
  "key26": "3DzAqTDuGKv1i79uvbfqizNcpTRSUptfub2vi6zB8ytUYDgKqcG2LCfcHX1FXTmZKATfwD3cyFiKR6bBLCHRihCP",
  "key27": "7Pk2jhgWedmg2WAXqo5g78juAM3X1fmvqQcvijjpYRR38LUkpezxA7t3uUewYc8KyzaGBWe4DYRWur1n4KVEQqF",
  "key28": "HB15JyqZKELLiG3FkbmnUTFnYQ8RxjZYSMrxhWngskSMipAt7ADw38iQECbL6KRVurNs8BrjmcPyHx55JVfJmVs",
  "key29": "LimbxDpJErz6e7AbyXkCnYggi6UfAXLYim1XjrxVwkCznUpoqsJgXeLbVPKbHUvUmTr4xZd6e4RAbKD1dJhMwGU",
  "key30": "2Vw5dimPSARvZL1BPJXTEtFGrrp4nuDXrpZNFkm7TNgsQPf9ZTZ2GK46G99dvd2DvkovgAo2ih2mh7PjgLh5N45G",
  "key31": "5t5qmbx2Q6hL7QzxbGYuQ1sWcsHEUvgkExxBKJobnNgaQiRnxm8N2XSaeZbU9CMivM3gtUM2uzxYvzYrSmBsDQRi"
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
