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
    "3P7zdpuNh1dKD6V1rtZxDoSFm4CCFd9Gyufbe5CuqpkHUJgfYKEGpETZciUxZGPcfNVLdQa6NNrpD7fbEav7hKaQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "U3L5GRFk8WYEam1t7kQaJZgBJ1Je3VqiuFrPR7bguYWCb3FWiwVgrxHpCMaKxH8QLVLWM9xmtykNsPwCqkQ3At4",
  "key1": "4ZFDoBcfTKSDUxxRLCYLXfnxUA2hKTFBCtkmaixWSiB4tUGdj1PrXKKY9Qx1YuzDDtP6kFoAWeKbRg9CrrsVrENE",
  "key2": "YTp9yGiEF1uPS6yK3NezZD4nYTSBPZ52hPAH4cJaTPAPSaYQEW7KJcU5U4z5cNrm3t8N9wVffkfqd4WDSMm9j14",
  "key3": "51uP781x4TCJcuCDTJZfBW7p7yz4GA4EVciydWeUHAur4EtdVB2p5Kqh8g5TkFcERSGw89sFtb1NBxv9NVbfhVbY",
  "key4": "32uDLigavwcq6mVowR5wKGBG5sSg6TwCCsEYC8yJ5GhLviChxMAvVTwEndELbtETDimWu1yiP2MHo9sdtYMv17wm",
  "key5": "44dks9V6UYpLwomE54pbDoSnP7Pn53TKjr8HRAGJykPhRpERETpMWuzdsG995PKBnWYXeUT6i4udr8sCjvJHv6jw",
  "key6": "3EeDLSvnQGrMtBAGpAiiqmHHoeHXs2gAoFGM9iMATt1GSrAWh3DLByrLdEbB8hZJZeTV7vTQkcNjLE1dpHF1Cx9T",
  "key7": "6wf6KhXtCj7SM85REfiE6yGN4fsJaLqbfZszNDLFSfDJe6d4cNv3TDcVTyDCCTP6zBFV8ZHX2tYtTegZuYgMBmH",
  "key8": "45WdzVooX49Y9HuSHo3Fu6Jx6NkyL9NQs3gvkmGmKJfBw8JaERmJmLksaQWCsw2tg89sL795DaEme6mFV1pr53VQ",
  "key9": "3b3HtvubjEeDSQCKWgWqWZSKckvUGjhJicxJ7ySpWEGY15zQJhzifGT7cNRKUZwhq67yqMN8XLsNDqRAVcpMTJby",
  "key10": "4gKLBjUsjrTLxuD3bJBLmqkDhwFAxKPgvX2PdMrMgcgmpLRr7Q4o9wm8PDA2Yu41Qsm5PytnrPes8QoKbus1zFds",
  "key11": "2TV2CKFg7cXhZhSiw6cfGA7fc1LPEcBnv29EGysunEoB572NoZPzmTdEbH8X4nMWirVUKQWnw8ma9hhY4tkq4eVc",
  "key12": "DWKwv9VdNUh7NYTF5fYoRCFedJm8E6n1jiqCTr6hrL7mzKs2iMPURoqgKJZAk9nrgPpjdsFUPxikXQ9hCBDwcTn",
  "key13": "J6yGC4yZHU1rQxRxzcj4zoW7M8PudSP3p3NUUCzFRZDGonTRbC6gdEujX7s3g7GTr4BjeKoasAmfJ4PiamJkCFq",
  "key14": "2YffG2LJVzDybBema6zq5ed4MAE5BbhEK2Gv1NuuTujD1FV3NNgA1yuUpydpoL96WqDwPCFKFwYbqCE5HxKrGf21",
  "key15": "4MtR13v6PAd2vpHbzxsmnaxbWUanpDEjmePfVHE9fqctVMRsCRdeh8saB4avwR4toyBLi4xd2HdGtGXaNV2nAaeV",
  "key16": "4HzBGGtQspgjXTFD4Re9DdLfBrdZ1XQVvZEcA7BZBrovE4WJciez9Nr67yK5dbNKpLDCHu7NM9CGRh6pFtiNo3id",
  "key17": "f5LFPYUeKW5t5gQUzqV6LZFvnvngYsvdS4DbRPzK9qTNZ7RfGhYdXdJ9Q4m5KmpJiiXCQ3ywu2euH8fsBkitw6J",
  "key18": "4Q4a4vrnEMdhVgEj9nzeFfhXu2SY9ZKZzH95gHsY1eiUxiLuxQzN4eFQwU1r6vnFw7PYUE5X75GumEBex5m8yXud",
  "key19": "4U6jkfbhKvHv6C6eMc3wDruoVMBeC185J4f5xAFDDKkHLwb6FMnznRZSQNzUhv9dHUJifErkEMWjZ4qpP2Lnvejr",
  "key20": "4CFDCu79gkgSWHnxP4qe8WDqoS6w9Mhxe5qykX8v7haSeqTSsMNFkJk2hntjqcFWe7cAu7Su3T3j1pGtkyHQjZoj",
  "key21": "2dmGpjv762g8UK2QwiCnuXYR7Q7pvS7D7F1ZMDC3aUsHuMAQstdv3bWtzaKAw8HzNZHgdrWXJFvC1eeRviGAx77P",
  "key22": "2mMT6zFyVUdqnhijmB2WJHWdQw6tsaFxdPVvBXYhzpK8E5P83qDEf37Jan5ing3KEZgwMEixj9mHLgNWwihBGdKE",
  "key23": "5B9NiBtxTRCvscJaDi1T6Fjk8FiGz5gQWf57cE4btFRqM2A88ag6QtZKxYNv1m86jxR2uNhS8BRwbUiqQAHtUmKw",
  "key24": "4t3yr9KKxxTUtkp1tZixwULaBLzYLUrtVtUherR4w9ue7doXCjiTLS3av6zq3MRVz1FRudVWxoowVYHi7XJNdccy",
  "key25": "4rvQr9U3h43KomnssjbWWWNugPctapToRWw5cjb2r2DKtYcV8yqu9psyb4FLopYTCHavTij6Um4UUqsNvu7SF62N",
  "key26": "4hCobDJJ9P5ZAaCnv4cRVfidSi3V3e3fpCkDF6pcGnNq17uaHcMDiJAbjkLiideV8CEoAjJm5nLX6XmZspK1RkqQ",
  "key27": "2zxzoJ4XrVC45r2xef8USy3PJkXitQtVffPyuedZuG1T2TTmUrKqCgR78n2RRTjFnVxwrTxDGJ7u7i5jji6PePBW",
  "key28": "4fVZd3HXk2ziuM1NZ7HbRqZK7Sto9JuKGHqxdJHG8RkD3iPonW9mb7oRQQeQfpXCTezg43Pw2pCGgqqrRM1vGFUc",
  "key29": "kaLcTPSoXfUiuM1iDu11FdVBPncaPdTmny6qnW518ezfXcwYKsdLFr2ftPVHF9BVtZssBNomukXMxWW94mAQkhU",
  "key30": "tzR2q8N9vNndxeyrL15m1FrZMmXQgUm8gfWHrJxwAGmNPvmwY6zhKwKkq7jQSrb1aLyJLXHWCEbPPAJGXzEFwZ7",
  "key31": "473PDn5ygnWYJCBwXrtTT3434wAerLASCPGEzetPByfJrnCdfDkPQwztuNaxDrWUws36k98doB3ivTBnxuGJxrRq",
  "key32": "cV1QxDuSJDg3QJh1o7AiJMzoqcTMvt5BGZSpquWjYn6L6u3fNZ37MVapqvWRw3stUwSziYxz1eXgB7ftaGeawzz",
  "key33": "67k3vh8q2LSfHfpj2EQcn3p83EU4e4zMc4aYNPGNuE6o7kXaiXUzPcHUD4pQxtrEmCTcyMUncGja32GSk83snHqB",
  "key34": "5LCA7ZZeJMW9rccuKnexUKtau3gxm6Kpt33SDCM3xrj6FrvLoXaMSSaikJommfvMzX3GmBPCzZeWNhDpH2z4fRxd",
  "key35": "2RtXPgAFPqxNCb1KmSWdKu1rhNEq6w2wVwJ2DdzKMfcLn4FBtMQJjmLb7XYkjeYH5Y56SQ47STdXkYgE6GLbKLyB",
  "key36": "CfxxcKomG6f8tTZzVo4Td5xdpNi3aggN5kpaPQFoTFoJUnZZFY9xkagGWU6n7isFirMbMFuEuSB6jAxCHEJHf8t"
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
