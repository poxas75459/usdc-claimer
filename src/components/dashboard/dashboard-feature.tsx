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
    "3QjCAzz3FQKxxZqLgUN1KFjYnSstBWCvkrPXvsxc79amkmqbSFwRkdvzTMwdn7sVgfLWQ1gLcQG8ZHbZNmR5T4SH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nqxLrWkabCJp4Enk7wgeSU4Qka8Lh4kUnGotivQYxUFz5CoJ4dfF6WQ6Bu4zBWrzQE52zL1SowshBaHeUS47xRg",
  "key1": "XFCtw68KLcH39TBw8H7NY9MjbB2c6ynhgkcsQQunFSsvjzzQqCgPckmKS4GUTVW3RNYjRPymqQm4v19uDVwRGFz",
  "key2": "4BYEL3DduJCs7WUAoEUnvTJ1R4U8FBWwSeUYYBYLPWRTfsgeSyMG3WrozpoB94mN2bxtCDRGWa1x4SythRYdSdnS",
  "key3": "AgAjoesT8BgsBX2biy5TxKCqSF76kQHxBBG6ZD5vJvhYefYbHaQwLdcoQvbirwNTdunMREkp8Txb1E8wLNREtYT",
  "key4": "56fUMb4nZmgLhWejmhQucgEVcbdLGb99K9ZoNPEPUAmpeww5aQNcR33baoyDYSCa9md8FRr6SqkgeNm7MzTY3dbH",
  "key5": "4z1NWhtLKeyuAqsJARBZ5fHLHjaDJAw1q9zVUtw7U7jGa3E9iqsCsWeRvjTTDEcnUPvBQZb5J8tAND7K2pkfySyq",
  "key6": "nfziJbFvjUZj7x3SJcusNEQ9BJRD2vGCidUMtzcwqjmB8wxFdbYYgdjCb9FxtfVaXLTnHgu8pECzvv1ZdomwJRF",
  "key7": "2WXTqXpdMRiHnSPJuvvPZA9rMs21DPDWrDYyRU41StsahtYzsoudNr6NPu1cCuixUN9GnsyS6d4MdsjdJdFDhjoA",
  "key8": "56FpHcjRY4VhQTSei2ck12tS1krjRXt5mpk9aSAV2duxErwaSGTJAMeAVFCRsfPnmX3LNBSjQFBuqTo9bDvUWW9d",
  "key9": "5PSLxY8YbnR9r66qgc8Hgq6vTz8V3E7PDAMcZCzCJjXZiEDBKXCQ3YYSQ9kZVnF8V92v6Kc6fDcFptS5B5SxA5AZ",
  "key10": "22mwjbYDNjejJTC2cMJkkLtXi5sHGugZu7ySsqvVz5j48jHk47Cmz9s6uLGoVWHFejWvLuTH1Pbipo1cdopdw9hy",
  "key11": "2cUps5jATy2a8LUGjwPLf7KKQUaWpVL14eaipJpD8f1AWPNyk7dTm8UEKoKnY2sPen5yzrVrPwkKuFRVftrw2GCy",
  "key12": "2EKJ14ZagQWkrDqD1YygGbS1BvPyr5HEQhQPrpyTahR3VUcF1SNUEZ5P19U1YYy3CG46B3BLAPMt1jWDAfhmtDY7",
  "key13": "5gbq5ibjV5foaytuACt4dGaehoGVfh6CoCs3f3F1RHCdCiQ6FtvZbYDoTAg3BxJMWnU4tHmiaP5gdvFzaF7LyCEu",
  "key14": "jmrk9HWoD66rvjku8jJnDMoGtrcQTmdMHuWXMAMW1BEJGSzYhb6uXJQ4rzqkRJbqXu4u4xjxUhK5h5GktX2Hkhm",
  "key15": "4bkSgHE9DrJgWHJc56eYo9FNF95YfRaFXhGRz9yFgJzgFQrNvZHSxUpCdFXCKGdDMZsZjpoKikbaaVQZo7jw4MBD",
  "key16": "m8FptF5LApzAUFrnLeUHiDU84VsZBgCzKmiRjhW3BozfT4zVGXvcqfK8mnBxsgbpuuWidmYgi8ZYcweeAtCLvRy",
  "key17": "396pPu9q2FTFchnALuLsaqJTSqekVRBDNn6kAyGib66KQCPGfB7tkigfCZ4x8BMsRL35VuFZbfkR7id9UPJ4asrq",
  "key18": "2UjuCbVnnWEc8rRGHaE1TbVhbtyJtRCaicpnhVKXCKaSXUvkMU6dMRd7TiHBHZUZwALps4JBLsbT2827AWZrGRZR",
  "key19": "676cojoVD382resJr7piE4kuMDEJwHZUUn8MegixLJoqke8FmGpq9biapTmSCxAT242ddV1Ao4s5FPrD5UHcSHMP",
  "key20": "DArqbHzDQKopkYWnJKtZDzwsH2GdLhmQV1dPkfqTrYeMWvJHNuESGBKiuuHAjru9ut29A6Zs9kHqrw7yVxGot6T",
  "key21": "EQmKNrkcWHT5uWV47oj8d17Nhbx9LUaMkvnnrTyfL6haznR819DeJnRQhdEd6HYf8TVJBr49xruLUtaX8Poz2sp",
  "key22": "Eq33jSHD3Bc9C1PTneRUemdYg6X4hU1WP2CD28hmm8fpU6GD9Z7ZXFHxwVQntGr2P9yoPCYvjZJ5SawjA9WybDW",
  "key23": "fkX4cTi42RdM9o2M2c6xJmQm7QRmW5zmgLZ4GZKcS578EzZXsHoxgss4Rw5jah9M8WEFufcv5S5aXQnZEFsnisr",
  "key24": "4D5kc62YaCozMsRPK8CBMuKcrvDvVVqY2jdpNawgw7dE2TAJRwJcuBECvHsPHJxSN6rCpLCM8fqQNEvjwN7ntsiJ",
  "key25": "3WUWt1MVc6uD9yNHWckx73wGXWJLksu2A1PwXvT4o8uwBRBvn3P66dzLrfxw72aVZoSCfcBRrFnqpBzL96YJ8HGF",
  "key26": "3omT3YsANK4CWagzY1HYHr55CRb9xtbC4SBy8ZuUpRuNxBy2wV5PitqmGrUApjpMPEenvYgHQv4gLe5ntGsRbMgz"
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
