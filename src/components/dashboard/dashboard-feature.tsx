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
    "3xECXLLxskyZym4pzTURn52gxCCdyZxv8TYisujqV2WPK9H97VxMWo9Tse8PxPVeqUt4HUs67Rt3Vtvc694rGedZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jrsmLidSi8oxi4BWRgb9f2TjCRUtKPrbYs88sJywvs7MyY3fmxyzU7X92fnfM17ZPnZgrz6a3zWeWdFW3dJLkSH",
  "key1": "3EdUZrogiD1SxtuEB2gzSv1zBvfw8DkcunUcfqGvQRXq9Ce5ebVU4gMuH42PvKtTCoow55tYCWr9M75iK5LCAqE4",
  "key2": "24dt9qDLCtR6jB2YduR9HUHMTGxTb6TZQFVzbLv9AQQyy7wtLxMuoYE1RFPZJxcSisHurqKJC77kb34CUr51YTPF",
  "key3": "2syGEb46pvzSnEFQFqtGcrj2HSGSZUUh8BMrZZsZibmoK19CkNuZqPt1CjqnTVyXovmohgLydvouJgKefW1TWoJD",
  "key4": "2Ru7f9NXSNRMFfMZNRrwzwKXAjtNGpdxj8wTaxh1wvtMfFm3Jwbiu9woJ6YZaReoiCr2F41tcAXWMEh3yrueBiuN",
  "key5": "3MmeGWvHY5biPpggHJHvxFkvQDaDm8oj57ny1oKUk24Rs34FD4hKjYxNQG5rFtYaAej5YqbNCugdEhoffxDqzejX",
  "key6": "i3VkTKmzutYvA9ihTgRvigU6nMWXNAhL53XhTuBoBi2H79DjtrhXEvedPC284WSh4jEgdnNZ1P6T9FzrGXqMZeZ",
  "key7": "4A1py6bp194D9iujundw33aDA8W7HkQNYzHErSSwEtwfcf13hgTYHXscbfdK1AprXNws6PURZJ2SDZioKFBKupW4",
  "key8": "2Dg155hCNhP7Y75mV43FiU1qAH7L8UMQy8hbaYNUa6t2rN46mbY6sUxarHxucDBmkh5AtH8N5XUXLGxdBaRcjEfq",
  "key9": "5zhmVxRwByjBrRUM7e5k1LKS2hFEPVYXgNP9cKYzfRGaYGbMMLP8PaMBCDMQ84onC93rGqnPiLog3nK9NnWxNen5",
  "key10": "QLwKQV6y9v1q8KwFQ8sXxTrZCy4Ld2k7C5gmTZpuC4pmJcFows75vennabxDqUdYE9YogRNnsFV1Kp5aGwVeLm3",
  "key11": "K7yFpoEpmiTbnAobiMVFYTS1KfJk3tLy64creeAGxQ9J8WGBKC4J1wkqas64QDMsjHhuDFavmPPVARkcr4EKedd",
  "key12": "4HLdyUmQ1eRE9JJJMiPgKxxbm95tHdMgv3B4FdCiAuD1WEbAs2UhaFaLy49kXPvXx4J9PDx68zwdCfXZE6KWfXvi",
  "key13": "a4Hib3iNgMkYhVgaa21CMtJLpaJAVvrKnQoCVUdwmTZ1x98yzFWoAERSRaqEbc2SsnW4RQfhavWSXgvsWgtseMK",
  "key14": "66xHVfcFE33VT38U3yZRWuuHNSKtRgUxajPD9g19QL4Mt6nNMXQq92zMRe8fNBhqiiKszUUsdAzey7qYSFtUSMLh",
  "key15": "5KMoE4xwfPDnWHDEP2mot6ezCEFQmiZ8e2ThRAx83Yri3VDJzcWMu4YQpbtTRnpnatZvSqT8fiqTGgtBEEgdynCM",
  "key16": "4MErPeMg3YwXqkK3NrTCoZRxSLUpaQH6Kf8eCJoDCSijESWBpgKvwrQStBDrqpQpVRGhd3dVh4HrZHaSJALVTiam",
  "key17": "3zmcakPKYJTNFrG83a1EEBkxiZ1MNmSJFgCoZCsRNS4ENMsPG1jtazqcqhywQVRTcfEB1bjTq2NBBYjqUdxpWjM1",
  "key18": "5iW5usVs1tTFfHjmmzURtNQbVwKC7ceaRkR9GZwRuXgeNcVQcknih2wYvxppmAP4FSSoyJAo5mMCvCmaQEVbFvvY",
  "key19": "gbygkqzDF3zHksTQfZ33Tn9KDowHNiPB9t2rPLuGun5s6iHC9fWwz8EdT2S2U4VGCJmoto9R6WyhQW4rz4Aum2z",
  "key20": "5nTGYgrJb8cTB57SCkpvdBxqAYPc6pbFA39PBfYWovEsLCsfYftUBmoTX245MqPfe2aWS7VLbGbcBb8fW8pdba97",
  "key21": "3SK9cAYafDA5qhmjFXN8GpuftN7Kc8wu3NDLkw6AMHoZnpUjCxL6ERtnwvE4MfAKvKo68EuyFgef3XjRWdPQ4VYd",
  "key22": "5kx6UGb8mD4BeGMzVTGZW1USaHo8BJhA3e5zNgEEkUWkqVF6tZfVFTCfESido6aYzieWMgF85Cb8Zm8gcjnETixx",
  "key23": "22RemdYeph4HMUwMg8qnjxoFYtKXWntdBgdegVgfLCXxbLNJnsWLRHTwgirC7Y1ytsu8j1SxfbjY3RFisZtd7zHD",
  "key24": "4UdAYVn7AeTne4puCDUKepBYaGqS9q5EsA1h6BaBGGexb5deHK8B86mGPk9veYfRSsM1vrUQtt32Fpycud5mQtEv",
  "key25": "3BL6T4XHfEpiA8xMZirbnqW93LrPczVs7F8ufpcPhHkwyzPGT8E35Kc3vWiN3c3FaBmfyVZctrarChVPocJyXvnE",
  "key26": "4tc67UUMMkwecTjcBJ8WEmi2hidyrJxsEyWZxRX76QyfcVSqozNgZLm1FjBYxyoaWGJPgrWfhAYH1DECMy95FcDc",
  "key27": "3fH933FU85yiU3afCXYw2wR6pmcfedAUXatSdbP6ukBnUzuhMxTA3EkNMqYV79xg9jWXiWA5SNSnJZgcsCeVBaQa",
  "key28": "5YMRtDAihmxKXmm3qZNjsMFA8Jd5NjT4MyFWLiCtNPgkxTsvjts43Ek4Yjjtu7DwXXiQhAfd4KzRieeyJJQyqskT",
  "key29": "4JRV9jUWY1j95MVJXMKdspXSM7sBbxeMd1FGANbxtcHjKtm6XmcqfLDTefnYZ5dV6RgpXhX7p5e3gBRZveSWbLG5",
  "key30": "383qjsbpKDoX4q7jxxhvtS652Ubx4mUZqJNztmmLPv9h653M9ZPNdfaQ6UDiSVPWp9ocgtkYnThzB7FzjcBEofKy",
  "key31": "4EM1HBR1QzszMv8WD1WMCLwpfiRjJzcd61L63hwTUqPn9eR8r95qkN5hH5bgyfgHJ3vvcBJ2KT446MtVFFTXQ48b"
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
