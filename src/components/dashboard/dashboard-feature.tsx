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
    "2APGWWETpRBoWnwh6LodBaVbJbcLMp6YAU5Dt8vhKbLdjNgtmaRmzrpKcA2Fggg3PdJH2riJkqvTiJTX8aYxJhjo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hW27qwbjQeJ445nuHoCHeF7TeSQE9wqaU6fnKHxdMhh6KXCk9H9STuGQZQPzmN877NhdNBFxDquHba8Rc7DuDft",
  "key1": "3qCCCBoukqk2R1ZUmsBqTn2bpSdEAWGbsKUCSw5DToQpWknr7B9HeiYUzwfcX28Q4XhnfkgD66GNRA586xXJozDo",
  "key2": "5jC6UpKKyKEUPfoACazq674YrE2EwbpPEx6mxxbQa3LUApVzpnMvHiT8dYgQZJdP28BtwkcYwYbvUNtEgi1tAiP5",
  "key3": "33wniUoYMmP8jW2ZvdGjjd2LJRcKGja8jwY1qZTdnxtnVonDJow11KBniZJchEjxbF7TTpRZzcHr8kc8JV6GXRvo",
  "key4": "4MRYKXD8v9Funm3PBKDW1y1PQQikMWKnHhXj8QpoQaJ85tvsg7Dzd2NNEqKQ3tRNhU9eH8Aj6yh2p255xPFLkcnL",
  "key5": "5ogjLzEW2mi8xpw9r8LhNw1n7zh47SQt9GGvLDVGeMxjX9p54mPWCE5x5ZLkrwdpd5vUx51QTaErMPXQPCB8oDva",
  "key6": "WiAYz7vD7aQwyUDrTqZpiyT2fefLUHP15qmNdSsnkzVYLfyQDqdKQqEcBihGc8H4Z5PvPh8MFy6NEHZGioV24zx",
  "key7": "5tSFxaniyaQ6fN9Ki7Uhhj8ZoBT2GAK1hboKYoeSragjqKCxnXq3oFx2ZFSHbaTfmBEqZzuVWCzno6FQNKnm5gX9",
  "key8": "4DmxSeHiZtfSFdvsunCT3acteqrVBbBFM5VW4AecSb9dtVRRuGm2G9KFSdUF7tJ2mHQCehrkHrDcE5PZh4ZYcXDW",
  "key9": "iAiFUBR7pvfG69sNspbnvxnrmkbUBhDBTokyb4nYL2sZV5eBKNUYNB45z4EqiXpFKojHRojoHRXuRPyMpEsnNAG",
  "key10": "4p7ARDMSBnez6YdyoyKSEoYXckgbudLTcNy6Cgp7wGF5RNJdeG6YNioNSu4LYfysiV8aEwJmQ2fie9bphmTTQ8Cg",
  "key11": "4ri3kkdtVK7QY85C9b2xX7DfunGYnxKLfqaq7ezJDK4dxMHjtyV3g9fsJBrjMnt7qzKK9wjyS5Xinh2dsqfhvEJB",
  "key12": "53NdzNv1dDwzePQDp8ZCzeGWscK9aUF2n4ysdg5D153SnV3PxCHd2cvRCKfCUd4XtVEnipp7DJeq8XsbKVo9YCoK",
  "key13": "37JRPLmVZ2hQtUoQ4Pi325mjHFsAeZXWfrAgUHZa78M1UNUPAVGNtREVigMFah36DUBVcGZnkaPUwUqFagKaaV1g",
  "key14": "4dWHyoKiFQYiR29gkNnioTxwFFbd3fRy5g2jCAsDiovNyR7S92uXknN35f98HMtyMvtjs994AqWAMaDgX9wcGce8",
  "key15": "2rzyiAvTcZKWzpVkrf7ripJZBYzQqvCkSZ9VNtvXvZcHH7G2cRETcMk5YHzH9YfCmEbu18vjWtan4hT42zzgb8kt",
  "key16": "KGRfjn7criKDPa7KS5a7g5LXmuHMQ5Mae2JnVFsqbamNuP3xu8CEUo9gPRNQ8gGw3N75qytfbsu7fSWgzqn2Bii",
  "key17": "yh2ZPYzfgDTDpY2EmovLxRyWjYs8SC2PWkCqaZMgoNACGaBDXgVZCK53q6hgBLnYCm1arEYrHgzR6R5jAUCzQhN",
  "key18": "3ngenxLWcBh4t9uPc4FFsZkAdnxdxnofedxj3jedASpGygGRxoYaBR4wUihxyqQdLMkZYNnUq1e5etnovcKsf4AQ",
  "key19": "5q6ofDURoB555g9D8wh431dsCfJdr444fEq3ihf1AesJt7iM1KfQmzHUmZqMTYiXiHN8VyEHFGHe7pou5pxmb8Xz",
  "key20": "2fnVzkV9ZZzer4HMa1dryP37CmDVrW2CXNoVQ2Gjw6Xojfg5KGtKPyKAJwBQrVEHeXfQpbZQLcBRfEar2mS7a1zQ",
  "key21": "XWuadU42qXKjGvGmo8Bat4ANTkUKyk3DmncmaYfk1kdkDRjKpn8mgthzMCAs4B4isASyJBfhFKN2kyWVgoiQrEB",
  "key22": "4jBbFaXtC1gP92ibYZkFpLAsR22ckM9RRvYYHpZJbKKNEZvTzeccU1xxAtaYJo4GYjJAEQ2tCzhmcGV9SRzamj9A",
  "key23": "kNYvZ9vjYhv4WEy9Nz85DZTuJYDwkH2nS2swnu9ikEc7DAjT3iXEKm2NoWsujtPmKrgUGFAyvqUBRU7Lz3PFA5m",
  "key24": "5Ro7rKMi1mpzbN1DhsFmJwXiqKsZ1kEXsTvNDryLrruo6eHdSDKsUWmhtALZEzg6Nj45yGBqzQDMFZW6pPgJGZbg"
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
