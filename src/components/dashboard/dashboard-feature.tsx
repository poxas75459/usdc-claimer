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
    "5ZCuDZo6FjCR2ABzQngFrpE6bz2JPFeCHW2gB9jPk5YjQoAyiUhdL53DqNATvQ6RogCkaV8qoNd6eHPLbTRCWBpa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QwHBJiuaHXFZo9F8rK5qiag85mXf8LNTTd7wVzEL1emY6g1RSYiL738wL9hnqbqTDCEqSWnR37MK5WZ1riehAjX",
  "key1": "3Tbpc21Wmkd8rUeXGFUewoLgCaQBd4HeXa3pEP2EJPq4W6MrQ4Sxn53V49UfsgPJ8bynN71mzdnaXgP6rrW85m6N",
  "key2": "9w3Gmo9HYcn4tynRecJpVYsDNotxXUgrdfedbY1tGG1CWJHsVGEPn4AA5F3wjWW9Hq2Yy8dJxdSmdkJhfPc1Fra",
  "key3": "5HScT462Asr3e5xbpS9mYQY6LsyLDJdsXCr1FaZPxBD9rJzhEqTcoacy3JeoE9pCbGcGGEKw7Sf3Lmkw9T27WpNQ",
  "key4": "37BK8tzJQ6gqc3htzEtEC7KggLPrdQhgDSYShtGZdTA9vbDCMNZDzh7kEyCiNtz2LtpigAx1FiPyDWBXhrW2whP7",
  "key5": "3TLg5oTQaTMpSiNkG3FWgxozeZKxZFXfvJduUo412A35fHz2QruB79ejXQFtPDpCi5mX1PdeM8gAPa5LxrTKVnGg",
  "key6": "7CDG3G5WertyxTNUDRa73gNWvbrtEfRpuDaYttypYgnoSdAqb1qjSJGFMZMd1k1ubU4wk4ujFDWZ5M7zk8EgjAG",
  "key7": "2KNd86dMWDYtUDNMgF3JfY8yqmH6KrzSAS9Eh2bvsFhk3CmubCBnwVEWjnNfNYJNjmvD4ZxeuGqHa6wAhc3jwKEq",
  "key8": "2EdrFePG4cuGUuDjxYLBwru7qcJHvihAPq85PRWusDG2F75Vkwmfnbr27bBhzkK2mmBr6FGfsCNvz99hBWxFt4hA",
  "key9": "5MpiqrEbgf2zdkUxNeMNT2LWHfP6F8KpSaNUHaHq8GqDg6Qg6P4SQAD9VCRhFyM7ZtwKZiixE4HTh8aLKLQxKED1",
  "key10": "5AD6Rva21YcvX49uU6UkTAvTgKLVW8Yzvpjq1XinWDtDKdNPEPs8VbGzSC7ZbmyjYuAZzd5fpGPurzTr5k9GYrvV",
  "key11": "3pLHhXi4YyQHusGDqRniAk2eUvzo8iRgJrv2psPSGbWrHLadf5wkEXN5qpMmHJT9LKvyVYR8kAfgsXMuRryCEvDH",
  "key12": "4iTPMPPp4AGgnD8Ff8QHrY9MbFHD7ZPvYRpbV8xoJQeEoHQHbizPmukC832qrQyaDrKBFCeuwfSuK35fmoZ3MD7a",
  "key13": "5S6bXkApzoSfEupELEtpbZrEHBQaAoQyBTWNMqinkaZ2pxz4YW5QVfS9skf5bkFkpeZXC3k9X7ZNjuH5992J8659",
  "key14": "3CZywMZyzVYkSwR9q2J4Xt7ywQmoZifyTiUneXcBEg9ETz6kommLuu5NBrEzqATRVG89XdkD12FdKWuwrrHxiNLC",
  "key15": "4mfTHEHpriwK96P37MhKrUb9FJGgm4nV61fXZDcEKdFnP4kiaKRiip6CD7D92vR1hcq8dF67xR2qTihtQsEKqAbe",
  "key16": "2cWBRu6jKurUxLiVp5Pi461QhMh3XShv72hFt3n3zbmUYA4hcocw6DjAcv1i9sPGTeUXthdtizeM1npXJc9FCdcm",
  "key17": "4kF5EmPrxCwbPeoysJbDJgqVMb1SHjivHcSany7X1H3jEpcZ3tNDGZtRGuEgp8NYHSCVtnu3NgL87EAa1jBPv4VR",
  "key18": "5U1nRykg2VBs1kkxMXXZJsfJxiaoq7LtpTDvzPQxgLg9ZkvTXx1CVtvSE77jMTeotR4FMyMT6LWBEYNA1r5gi7DM",
  "key19": "4QPbdjhSmcq4bcSnZJcc3gJTx5e2XwgiFhPm37aZci8X5T9qmbGoVmr376Fnkq2AYLqaKpzNgD1v2QJsyhDmSjmo",
  "key20": "26DKW9cW6XQgBqotw9pmNN45hRYsQG3DVXm5hrj43UuSpkHZJwM28JUvKFgJjwYCnNBBHrnhvp5EPF816JGKeMSr",
  "key21": "FMfKHS6DdaySoWju9hELMsaXneyy8RuYr47qedV8u6UyLy8Jopf7bK22N2NbNPUMQEfL8mekznWPxCi2Q6CGu2Z",
  "key22": "yEfXE2gtjh67fcJX3BaZCVygFEQBtVrDgqwdwGXZed6raUXAJ1crsaMGKoqq4frN5C6kGToJaRHYSLy8PSmcpvx",
  "key23": "4LWLwtXuP2Z29E3LjmHBxpHrb2ModYupcBbCunQ4FtHePyiyVMM1urqpwc6PuFGZ6Qpms8DFwXYuDBeQaB3jRBWq",
  "key24": "5WmenRcYupcbNBazpnBM9B5KQPbV4H7h47MEzscMynCigo8W1E9NaMA3JytkkeCLV8ePy4Jj1cakNQ2dAFrDqJ4F",
  "key25": "3hcEkWHiibbCGAT757snbTC9bNhzmQVJWvg3UKzdpRVF4tmdQxMSHwerZvCzqmhsV4okdYnDmt4zBsg6bMFw2q5L",
  "key26": "2PjmSkYXciKsxXMiCwZwjsQTBqZHYVaTRDdKnQG6wkpTTmKkcps1asQntYxTUL7AZdh97RZivGe1aD2DmLL9tSmR",
  "key27": "3YZpE8uP5TDmGq6GAde5UGKWap1yjMMixh4NUcK2zKcWh9NiVUfh46Evp4UsMob7geksmy3RPd2doCyEWH3arCK5"
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
