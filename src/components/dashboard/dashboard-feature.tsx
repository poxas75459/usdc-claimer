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
    "5H6ra9J9gbZdnzAzhok1USTMSt5tPNNeQ8pVCF4A1XpshJ1LtFJu9Kf5y1wfJbaNnSTVzmPkGZeW2Rr5Utefr4d3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ymM3DKKXXfbT5NAJnq7WyoHnUM3Aui5JBrs3XckRJUHzzBG1P3nG1LyDZGfzEVwsHcWFQjNjqYuLggYyUtYV4ih",
  "key1": "2jZndyN5eF1GwHYErZYkPsdSd6Lriqjs6vTHJRmHfx2d3W2W8P9TpqMxTJcKfKa4ELpgPPXZuixQ42bxoKKKz59E",
  "key2": "2SAXXF2AKhJLdVcTTRtVVQJ91KwZPviYQawPBZ4FWpAG8GzyWwJ1C2D7M4WhViLhtBcQcuam5kYFF3pSq9anjPvj",
  "key3": "2xj7YgEh4voZub5xfgxjzyUFbgidVXNpVi2RxQswYYZD7JTkDAgw6AbeCPZDUb3Hr1s9JALwJKVKJmNM3w1BqroP",
  "key4": "5ZpoZpTcSAULE2CdjA2DJmcqoECozmX2TVJaKEbtgW6aLSFXJcjNmafj11Y7DYnxVqN1Dx6fRkpZ4RbUEcubPjJC",
  "key5": "3axXcokS4bwDpFhKqfnBjfwg3yf7rV4eKUWQTQbnWmJ7woD1bBntfx5nMJA3kEV5Jx3rgDxBDfKzFNgEhJ5KwNYu",
  "key6": "TxawwU5F2VcGEUz2dhf4tdF4ojoMfWhX5quxy9ew9hMwapQPbyjFGwfUxcp71jsqTQ6Tvio38orKg6iTdcHXJ3r",
  "key7": "2zDdbH2jxH9px6Sf2iD852iKmFQbXh3mMkGUMBeQXqeByhsTE1Rx3VQiVv96LuefFXbrMW6vWdFPKRWpCg3fHRPn",
  "key8": "373rom4hgWgpdfyxGGYdJBT7QfyJcra4wcBep5mGj9LW7xXxbgT2QAeRBqactmRmdMRbsFSBmXHKFGs7HJtBtWxU",
  "key9": "2CWErwE1fZGoDWJXaQqFoeNSRBtsZXKSDjao7GxuDWtPa62yq2oZgq8QXguyofmmRAaThFiPENLzSJevXTTn4k4J",
  "key10": "3yA5fp9jRj31tWmumwsgAJD5NPf681vnCgCHxCnLKNF8EYzRFxQyejCpUCK66SZobzjg1btdEL9iixEbmG37zt9m",
  "key11": "4zNyhzDYjrhWbzEiwH1GCStZ8BhdWKyk3EsdFS56EPKWBhWHRQ2fJF7jNKR5RomEJeVynjw8Nfm97H4Ctp8ayP3Q",
  "key12": "33tMwnrZrBBVKKyu9rPg4FsyDfQFtiNNeQ8JHM6dffEtyszudDMr8rgrfDyytbCqKR29FmwaAwZg8Eiy2TSxYpCR",
  "key13": "45UmybukBqt37SrBr2aNvq84d8W2sLQnpEAjFxTmEM8XtmkU5YnjeQGD8Ti6dUmcKVYgPX6aHs4e6jCmfvvSTe6t",
  "key14": "2Be2ehkPUzjSXP5m9xSDWC41qYNQ9t6DqgFfi8noSwUZEiMuUPT2nVjqPMmRt9gTFmoiKo5mw5BucFFw6G6iLG1f",
  "key15": "3GCcih3VVumjvggLH3jkbkj4puogjoaMrZZGyxZvzgJHLugsvF5To7MkR3152WMEUnUSrtFYoa8GsVmksfPsoR7M",
  "key16": "4P4EwvedeYUKWQD7b8yD12KexmvRnxvqu9wQFoTmDBDdkuiM23CpgRsDeFeh78ZyKDjHgPCfHEZRAsz277JoyUCe",
  "key17": "4C7cRVy2MHHdMmTk5iqDGHANCxTHmD8ojNYfA3eVXHAb6h8qXq9GcCeXPbbS6Ta5j5fTapccjnc2XBBn9XmuysHv",
  "key18": "5JFN5sZcgcmRLnmZMdJNik8VumrikhQ9MQ3s8UKPMEo4qvucBq5AtFHyZ8mjmLE4WF8uSJTB7U3e9QeGDa4tHvPZ",
  "key19": "3ktdosQqhXhWx27BkroU1pgUp2zULmQS7X47xg8JxfHe8WnbEeoxsuUX4BGZQwvdU1NnW7z8363djmuSPzkjkMmw",
  "key20": "3ZuHeNDm9TByvmeTUjZpyo9tPAVJVmpTmm8RDL99m7fBF5mPMLBofpWYCem3My2kZDpSNvQGnRxvZ4KJ7D14H7EK",
  "key21": "54vqLVUyPe7vQhuAr3YwgUqc5TveWUwsnxxGzqS5C38qc4TNeJdTEuiRbGfp15JfnYCW3h9YUYgxkujXXoAPqEJx",
  "key22": "2T9ReVpZp9j1PgqcKm7hw2fmMDApCiq8owsKJvk6BcP8JtLH8QBp5q9tMF512q19KPA1N954v7ekMyjfABwzSbGs",
  "key23": "5BJekFeQ6Ry83pvcXk1g6SHcu5ufkaAaztyAR8U3dv6q9R93hManUsbXkk1WPg3XDNvD4HbuWz1BJKgT7w5RzZyK",
  "key24": "2prmGU63T2bJk7qFZLZgnu2CYC3xbVyYZNM7gc4A7Mv71hQWnP4uD7GK47xQM7j6gJaCkL1jNnppN29sitY4brrt",
  "key25": "4sgqxy8W9FaaKVQYJARWRbfy5Hj8WeJCBt9hvtpJnpeZyMNNsfdXJfi7sXar89LpWBd8oz4Xxu8ZxiTyi19kMEtW",
  "key26": "4skEXGmxDDe5LAocQ7dKsuHCnCR8fvrpW9F5tNiEjx4CALvbjxrDTC8nK1ueshsrbD3UENpLAqp7urEuVXbyvugd",
  "key27": "5VVZwvs3wwDV4ZmdySpDxndqwweejN4z3venHVsq5DkC7gwGcE4VaXhVCJVocZYnud3tzCfaeVbMajyvjwzXCMLo",
  "key28": "2AcX96HjbWUy7Xp8Eur291QN4sKktsV4GcT427UtmtJnxgaSjNM5PNxqte5FMJ5ZUYRypNCERq1fytoHZxsRgANc",
  "key29": "JhBvwjMLbH62NncQMqH5kWjNRkQgJMYQNAHfG58cqM9WKT2Qf9Bbqa313ciQVzfp9UGrEVu3GBrNe4vfS5Fz2uR"
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
