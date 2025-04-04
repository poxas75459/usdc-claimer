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
    "3kRVpnFSzbBXP42CT5P598MCN8J9gKU5Ex8AdP37YzFAnWGEWKGg5XnzKM1QZwMeSoEpP9KUiRdZmdjoiZiTRTjW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jXpBbusuidHQ7Be35XkhpdV2yebwDwQowqh4o9iMM5CNrpFDSwkgYMvzQ9ybzG8uCqKoi4ug1grzoay2naBirse",
  "key1": "vPUG5yC6g6hk3iEohyGF1RqUGDMRJak7upfQwsFcN8zeGnEr9qJRNtt7tRtjmLPUtgw3CNGnoy6HpbH1r12ykRh",
  "key2": "5yfQ7XYccgjttrTFWSimTVjFEUAur2PUGA9UqiN5zaqqDGZwFHod1eKH86YQZfa7W5YbJAfzFi5UtAcUaaei2CSx",
  "key3": "3xpBo2HHQhdids4CVnzoXrLPmBWfjo5CYt7gmQ3DWcG9DRPWkG7HEuzHS6ehXTaVYP4iZeS4xcMWiKQ2xWaFpxXx",
  "key4": "2G1qjVWM7dZfPKUHVvn9Psc9Jn5vv2MuYQKwXADsMEJ2x7J8ozJdrCgYksXGfqXmEwaRYigjEUuhmCKAqnWFiyTP",
  "key5": "jxM2StK5MAhzzvR3ErqnggBkn189FMCMPvi1S5zEtTc4uwKWZE2dcx2SDYMQMB5dRyg2sZtMbgNVv9Bto3PBsZ7",
  "key6": "4ARUVPVVNdpF9Er6GkimRvXutQvHzhgMrbeNNsH3pX1iiSVyfosfyyFv3PtN2hd1b3qKSwCRsNfsvCG5NRmAG4ph",
  "key7": "YowbVsiP8HC2ar8BjqfeacpJ7PDq7af6mNJyb5RDyHrMPjii9YifGqZWJVaCTGW16MgrR2xPLipnPTtmC4vSmvX",
  "key8": "1aU9AKiEZv3pMWCtcubinCYE2Q2iZfGqTooxZKPMMAkbCBmXUbh1vayY4FpTPK6vPrzztnV8usaKjhFvxVE438A",
  "key9": "59MemmMytyxEuAH2PXDkJLBxCndNCWQxrKa3c2XmYosrsvSuEdqCVzatvjmfvpZtMJs2qGZSagTXT4ZT3SK3BPsA",
  "key10": "5PjpHPNK11oP8Hxqgo9Y1F4ttnwGNYQSQuuqP2Jsk8623dtPFNiiukfacAYogVFUf48yjYHKriqkdgqCLhCjuA9g",
  "key11": "5TyYJ1i73UbfV8RnxFFLMaq6H86v5ockc93hwVFuL3fG76yn7Vzaqa6uvyA6kg6EFr9SPyFrCUeSZsrh3bZJjUmg",
  "key12": "5CGNLjwfMjh9JUwQ77xeHZ8mRQhuJsm7cQ9uDtxcg2YrywwDniGA91aGJKXR6742JtLiNMdBvPfc2CdKQ6E3RfbW",
  "key13": "2RNz5pedSakX6ysqFqmBProYCMqSpzRxjuWWNvsH7WG5McPd96id6Vs9ekAV3kexftfVHrB66AXGSabEfKHmskaN",
  "key14": "3k8QTYZJ1TdYRD7ii7YNbkmqG8vk8VxaSFvndBeQpec3Z7GD3PKU7xWLWnsyTirH3EpjhvoFy2wee6UgXsoy93Nj",
  "key15": "23i2bDgpXMDkGnnV7RgiKuj31WT8yPGZYVkZr6VwgCdrbWGpWbXZ5T6qfuuBWqmLR33LhuMoqmrgS2ZvekrAVzZg",
  "key16": "4zU1KPqKRGErJRAkhC1v41AmfNp5BqXb8GQKnH5RVw9Uv2pkUwBc1cZ7q7TMFETDDEwkBqXhcgpjngSk2cAzX3wY",
  "key17": "5wgkSEL2qXgnbrt4dcBY5gQZZ7qya3gHkHGwuXt9hYz7vyEvo8mjegjcL54a7cLN2EngqogNP1dWoMizVUMBmPsJ",
  "key18": "5XwgzNxWmU5CqvwbM6CtL84ko9UgtEtEAMTir6UbX1ZWWkLcborjeMN2nqWkPWznM4HWADsH4LvVt4WHD2AoYqGv",
  "key19": "2TScS8jae4bc2sLsBXGJRuKaxZVG1dZXBMWsa1nbSJvexgi8dzepahyV827Uc6d9fjYcVw8AR85PV3rLJ5UjDiiB",
  "key20": "5gV3yfsdt6ogD9DqGZonreNiEW7kUUHvsp5efXnncFTPKbtATGiM6mPdFZXcdSXDJ9iPz6pJ7LdcGJ6FQ6YRzUCh",
  "key21": "2NBXwVhBFeb3RZ2dyXJbQyeT3UsuCTBB5dw1gzKJCprNMMh8zvmkETs5xxq1SPpPNef8c3fLVNdVB5CpD7tq6Ycn",
  "key22": "THeThWH6gws4GUjKYoPnR5nBCrEobfZiwmCcm2s6YBfgN3bFdYWiauHHt4N45RHpAtFpXRvmMd5RpEzfzhGymQF",
  "key23": "2hd3Rg96AmDp5frd3zmVJVwp9TEGBEaoZzsiRPovijzWxrqvEfWjJUqHxHoXHs5zcXzjsHiQa9Ho8WRbjnjPiGxN",
  "key24": "2FfWNf9azvMkKYXm8G93LezR3WUsNsu3SzNoMJP1CzEAmBbPQhWRSPZHMMS9jeUJmgszRmnfrSerPM1HabUnFgtS",
  "key25": "4Hy4LoUXipD5v9E4ifnKpxSztc3y24xrivMTCgf3S7dthR6wC6GE6oF1qusa5eVnm8VuVcv4Z3q2CBdJbC3DvYP7",
  "key26": "3xK3FeiCc2xJkuwdwHEtSXRmN96kU2SW8iUbufA4BEB3nKuGbiSxDhCo3cpXmyNDdLm8aWEXWab9paeo9idKVzN4"
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
