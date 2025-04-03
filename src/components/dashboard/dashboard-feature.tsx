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
    "DD8yuWB9nTbfK3RUKGTgR81Q3gUn7rBm17aJkmYvnrNjqej5sjyev8TndRcXwtveKw4NQJdx4M5C8N8fWnAbkMt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ySPo3e2ER3wFYB7wkfskoVqLQNTCt7nz55DU7v738kZMbPLYpmschq1KjpHtTdqYADVfrjPLEKMGHd9abY5zAd7",
  "key1": "3ChZFphdLq8hRy2gKq2JreSqfDabemJnQFKnzdyYwo9LYdzGVvxeeg2U46H9gRHZpHt4GNwq4TkrTChB8HNPZ1Wi",
  "key2": "4PX7QdBSvEXyBTsFJicmR1Dmk4D9SnSxWcVe3Mun3s8N6J2iuks7YWwvUecQLTUKu8uSAMYLdF1uigwiN7YGm5qu",
  "key3": "tUV1fPm1qCM2a2QqnpR95JSDMUapJGCGeGYz5NKnAjRfdJLpKDroErpG9abwHHcAi8cQpcWM8imXK92Csw3RvXW",
  "key4": "5MpE92LFac5NtRpbtThrvzFEptAJjKVAMWngnnG7f7Hzw1SjNhC3TpwXuBEHdxz9CEVyRV5eiy5M1yduBWtex5jG",
  "key5": "2PdfhjXf6nbsvB9zSE3JJKCoYjpQbCaf19dKorrm55Xwpz7tuf3WW4vf1kvLsHDfjBxWtbVzJ6CYptRbVst7xPCN",
  "key6": "5hnGZ7CLErLsMUZshLkLcXoxCi4bRXUgRKyDEJUsndgJz4rYqQEv7Yiw48MtuPuvxhLkaeYGdcp9Cq7BYHygR8GW",
  "key7": "2pmA5oFY4r7BWZhwZVr5yt1T9ZZ58sTbY9562p5rdEQuTE9B9k1yoQRdwhqsyaBWDcnRamXTDbxrw2FnssHzUau8",
  "key8": "4ScvH6a92F5UCHKQRkXE9NSTABDs4x9BdLqe56AJpcNvn3oPdV2Stj2UBkpzAqsDtAY5DqZL5km36eyKxnk1bufV",
  "key9": "9Jp2ZLh9Ne6382Df5kjrgHyzJDUAGcnxBiLfnYNpzmrhNWAy6TwR7SsTu4r5kA8H2JXyEaAf9DDyCNJ6Ct9kN9v",
  "key10": "5Gzh4FhoajiUFv4aWhAEkM1pb97MufXCKq1i18z4yxkt6vQ8iz8DmJPsmEGVEobJieyS5E3ws56cjAJQDmML7V6G",
  "key11": "3EqMfDqncwFdLLrbg9MiN9vVc7f56MjpSqQGduoyfbnZomRjQqR5voHQU7kx5Rk7WtqJyio2aTj1s5xpa15M8yH7",
  "key12": "3QvJ7o7J6rhNPePAYd3caCx1kiwVFh6SbVxCWLGDfFVvDAFGFXTLkrb8nxmrmq5gd2dm9y9X6a8U37CZC3J3ziF5",
  "key13": "2222hwB3EAQm5obM9moAKuHjgZj5rmkC1Tzd9fyiv7ZP6TuM1kJyRbxtdPjesJ35RmaCnJtRxHQfMoU7Zr7QgL2o",
  "key14": "9NXHyHTrWktUBbRTwuRtiryVAbPFNx96BWTUyKDqmkmV5juocQo2eDFYdYzJVBjHBu4FTqURkY24EiHyotm2g4C",
  "key15": "yaJMYr9sR689SGtiNjjUhbQPTG7zBDWNW9gxKnZoTycUN7XHeujMX4pfxFabjDrHxkt43LKxGBtC5FE4b8NkF52",
  "key16": "2ozNykpwAVG1NUZVMfwBQg6c2BCWdDFiqqgJ5tLUXuNEsKFSechRw8PCgVRfDyZBXofvmGcNaKgT7wDHhBztcLce",
  "key17": "ow6mce3aBhMa78esgg5K8FY1WkPrdniifBsvfGCi4HXt1TALLk6yyJ1WrGfRRf6q6K3K4eyADVzV51hmVyp5UkB",
  "key18": "XEBPswxDfYeAME52HAXxConrzmwreHufsBJ5Au1Dc9H7xNdvPr3KGuPYqe6WYWGx6hUd3jcXgiGdTEZJjDxT6tS",
  "key19": "5km5hSvdg6tpckUoH2kQEGfA5C7tVYC1rzME7Y4xhdws7N98NetFvfMwAwxfZcNoEE4uL1UPmMPzrnfkJj4XJuuc",
  "key20": "3iYzVSxzZ79KN6q7U1FsZdbLufD9DT4RnpjgduV4bYTYryvz1vrmvHyQB98NS9DTAnobU83LPWMvhxU7ZcHGGzzH",
  "key21": "3gb5xbonFgqdJdqUhDJXJPr7b2goo8Yvj5D3NrW6fpxWqU947DrQKT5HVu4kXhJyNjSERzoBvKQnvwRtuZB5ktMM",
  "key22": "3mKr2GNMHNceEJhxYfsUY1AvPiJowEw17rVMGgEzjTHsdyEUyA72oDxipwJBMh4ZciNms4X5CnLZHzvfv83WjV4t",
  "key23": "eDhf6MLwpHDjE1WVSTUFc3bMfpXsPPceUEQDnWEPpzt3iteD2jJzKiHzop4TCb7bpmbiL7rgA8WAhLmdvnWcXqB",
  "key24": "4BDaKPdAiicdY4ni2rerXi4zQrf5JDz9KirxWar71n7LoZZD4gP1n9NnUVbRDW2Wsr2SKi8eVTL6KmPS1pM8WWRb",
  "key25": "5qBUJ9am7C4mNtk3CVC6fwPpHzL4jYMqfVfztoAxS84nCeNkgRvHG4CFFrwUCwoomQTUcJ8um6nKaY3ShcRj547K",
  "key26": "5LU6xAhPBvgG5vPEYwEAXECwCJGFEYWhjD49fdeA34DjC6BfBMPecF4FhUoskosFXk2f2xgLN4s9SrtgmVE9VKtc",
  "key27": "un7WgErFAwghRHyXQAXftLAsU3oKQhoqUbPfsNvPwRRUamuY7wx8YAysnJd7f4Dsy4DYRaXzQyFyGCYK3c8qiME",
  "key28": "4dAKvYUm2kBZWfFNGT6aVgtUGznyWu2crB5ZmGAT2iN2uWWa6tNnA5gu19b6Db4GXuQRh58vY9wNa8YftUNrrLJ9",
  "key29": "5DrSHtYEX4FkYiUxPTm2KKC2KPupx2Z3yL73WdWpNroxe3Hvjv8LaTRiUWh326KXkX1VYvUMcG1rugfMNwGh7apb",
  "key30": "4R4WrzDvSXLJv8rWU1u9Sw2FNYgnzD5n5JSnxRNV6wA3EN9jW1DMvuFNEPscDSMchF6J5WRdbxTqQfgsZWZC6CeT",
  "key31": "5MouYCh2EFZrJqZPmbPSoSVLAU3tTa5R8FN4Qtxm64yhW18AKnShfSyKr5e9oypM4yuktAXRbFev1rW5w8ku74Rh",
  "key32": "3CdNS7dxdDoT1HzjxdvzvcD4BZteRMEJNmBPhvqdWSgTe3CMrm2bCnkvG2bfejSsSqzSeQNAU7DbSowT6F2PjDfS",
  "key33": "ptRx1ibNUGgXBSLZjaeiz1mJywgzpwm2djQT3QmNX7Ugzq6SaVFo2DuaQjiwHy8R3YtzTC4DEmxUkfgVFfs33QG",
  "key34": "5GbG9WAQFzeJoeWHmMCF1379sYAJBVJQiGzNX93fegBjvsmibXTeeQeArViD6cmoqcksXEQXm1LYw3SYdWHNxBF2",
  "key35": "2fFPFCSSmu716xCZ4osiKz1AViHvycsDNvvrkkM9JgAoCVKaCriKokcp4ShY1nCtRj1U6n3E7MYqNqfMhDoek7nB",
  "key36": "2kX2A3fA734G1JZgsC3sHP7mArBqG6RGjwwFvWFeJkUTdUyq8p2JJd71VGkWkYoYd3BPJRh2R8Msc9Xa5oiJPbXr",
  "key37": "4i1KTGfrx9C6poz8jzM4mWcoRY4br55vXs3jkkrLWK7kU6PU4c8au9yfwbSiQSHcL13TiReXKjk7kmF9Vp1HVzHJ",
  "key38": "4jbMMo13XQ4aPUMEyFwzwpFpaLfgooq8mAwCxzY16m4wp56sYMsi2S6GBQiAETbxDAEAjuAz5tNGuxeLwqX78MdR",
  "key39": "2iCWQRJiFhSyktR1C9NSCV1XkRowbXNWov4LUpErVy29iXzTJayAvAtv2dY9ra5G4hvXzMLzxBQAm3PgcaReTMTi",
  "key40": "4UcMZ91HECPTxiXBhLDWRYBLbMdX5SJq9KZor9CxMXuV9QXKpCfqKQc6nmNccoMmxLZutUze3PoB7UCF91qK9oCX",
  "key41": "5JfPCanrnXPY6yiAUyUghKdV9K97kpFNpgZAq17wAdmF7XenyF8CAmy6xfGVKHnmcfKfnHyErBBDCgafb7rWoEK1",
  "key42": "59PjXFJhsThECsvZSkn7kvL2bSu9rK6QtLXMiRp5Ay9cT37yfbuczYFuBYjyX1Qb7SR1WZXCzstf8i4tsxvrxkju",
  "key43": "5oDMG6w4XqkKe9aQDLX6ZWMHmAQh4QCuJzpuqzCbYU59Zftdzb4Wj2TWmA7p1ek4hzb9AHyuz8pxiswM1Y18TPTD",
  "key44": "2iSS91hTEQDHaGVJTFodZBa35UEtUNwuUo24QMuqzGaPTPjmQVoTBKAmKQTgh4k794aLrU1fGpaMFtE2UKn4cosg",
  "key45": "3AHaJuFmbQjKL9RC8bg4T5yZDMyjeu9aFhYNxkrtbTzuzKsnnJ8NmeR1bDkWSAM87fRh8hgp6S4p5VhM73z8CypN",
  "key46": "TtYkHUKhMYx2MNcsgGZ75jXvNzyB5wNqiWoeuog8qvhWKhgaGvhwycmsTNwo5k34FtXwNCQbBBjrnV12Bbq6XZB"
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
