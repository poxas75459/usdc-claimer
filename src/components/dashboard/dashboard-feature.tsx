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
    "TGbKdaK5NGoCF1BBfrwuLAHvkjgoBvqkk6aF3qWoZeJYtLCmNXpbbPa127gDm5xbo7cTqnKnUysXQ9LqTqbtVV5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LPHLhxGJuENo5Bgssv2zZgHhDnAXkdLfgBA5uqFMvJm6Sgc4CnxkkcqAom5C1YxZcbCZZMziyiXq3WpxRVB1Cch",
  "key1": "3S6ov5sDhPKyY714fVT2vqNTyHHFsDVGNE12HjYZ49HcMZWr4c9Lch24tPo2Muzd9VSXPWYHnBuYXD4emyZUQ6Ur",
  "key2": "2ET8snccXZUY1dN6XZLXW2TL7518EZmkQ85ej64VGgM6bDhwB7ikdNcRuRmUUr2U2n5Trm4F1HqVD2NRMH9JyEY8",
  "key3": "3QEh8wiyePQmS1Q4Jb51BCqMqtj4B3QTwiENAuaGNuuXRb8WSyth3br46jYrPzMTLAeX13CQrwvbWXVrjuuP7Uro",
  "key4": "4a9ynysWQKkLMVMNUVEhAuoAeFHogz47WgufMTquNihfN63XHp56SBTEUb8RdJXMjWhvSDZbBDpPsWdQMrcLExNc",
  "key5": "47gFa8a3zQ31JEbqp4aEi129fk5WA4eWmw8jEAEH7fZZnfHypSJhKkCHDnbXt5ExPF98PKSb6wh8YknYWyuJnmYr",
  "key6": "fcZDvCC4CrfujcoyFQG4ZPUKLm3BqSLvudySwCkEbB3kS6BULztYNYEXNjp5ewpNfD1Ukr7dfrMnUZybr5xzJXY",
  "key7": "3vfNX6ZWqP7cc8sqS3oTYMKXaeVFWDwCww7AXUMiMD7PYZetq7YrognrhKURaycmYzpXKM2hGhQF7Po6mwsFXhQt",
  "key8": "585GPf2NFNuNRbPf9SEFsSTMc8yenUKB7yKyMyYEgoJb8zwGMEtdqJLNnePu9wFH2KwZjCrXmR8jHpix9y2TprLe",
  "key9": "Y7nHRsw73seCMg66xEZkNJwzehRARiLkwq8wqwVyzBC6eGXpL74PcpSHhVFkyzzdmfBsBRWR6u5Ru1ZaV725kQg",
  "key10": "5MwmFFqNRy4PMvJNjjGwcgEEKxdYXm4SCmS9WWS4brCrii5EnqwXKdFraQbQmuzxQ6fDUHgtZ7eYNYeJbmS8LWxN",
  "key11": "5KBX9msi2zkRKkq8aHfzsewGv1dEjNp7wkDYQkD6NFx6Cu7E8JDy8ZsViUKsYMc4vEVUMt72sR3XWDwxfEEBKmuD",
  "key12": "5VgaqT4ByFNRG7KMAjZsC3UJeKXVrD49cZEvp2HP7tJuw8Z3M4h5qdE3rcHq8DhqRDaVQ8Cnpem2mBPXTQ14sDzm",
  "key13": "N1jNVq5x3hybbdHspK36PLaFJcta2eA9nPgY7e1qYBj1BJrCH3ACXmJwvfQ39hZPVki6ZNrcsS1JgRnQFr4i8im",
  "key14": "5XfYEyjBi4HDmDBULUMziNy3SY7sf3qq6DEfbZiebGUYBJZVxCfsVtoZfvveEfBzU9M4mdwNq4JKkfSxF58bDzp4",
  "key15": "deptwazWJPnjDTiQYhKmTSg5dKp4PkToW81aJ6d9eWrgDHbzmmW2ugdwMPPQbb5dSbBCWF3rhE6oDuw7n9HYV6q",
  "key16": "4Ls2aNcqrgiiCg41cMxaT8rpJkXANMe1SzFTYLT3tYASfSgkFVNfFur2EZjxkSmzf8t8pHMq6QGgaBxhKsWGiFFh",
  "key17": "3J5zBWULrAwnbQZPtvxcvrc9hMpHdujFzi4DLBWK6t5jVYmZ79EoX1R8atH1wQngHrY44Bx66muppvtsTdT1hspc",
  "key18": "2ikyoe1XvKvDf17bNe3GhPSvRDoNk9zFsvq64UpEXbsJDHTtex7WSsPa8vtnX4Ud7FJSMJudzrC3VygBCegYhfU1",
  "key19": "4JmH8ntDuCU6kkARMfkABvxe8VPKt4MLUjxPNKKbx3fWdhYnHSDmbuyXgY3aac5RPYXyzBnXrYLHmqrvhdSpkVne",
  "key20": "34qdzpiU4AWqSXEkYkdsQLJwi62hGV4LSMER8qiyPMBMn9Xd7EKmXt3ej4NhT7zNsEi1FTh2PB2eHvWvnGP2uvhh",
  "key21": "4vN3hxXorBeJ27DtN2JfASxQiwzRmJrXun6hJYiurBrLCkusfVAP3N6yGr8TVoj2ZM9is1Nte8h9CkWvJ86H5WGY",
  "key22": "3yry29vhRXCzmFu6USmCzfNTxNzemvSEKexu31otMmEyST7kf5LK6Kcg1FEZMBS6RdfGX9GzMX88QEV84QaEQj2c",
  "key23": "5xj4Htxfsnjy9Eimpv6sGSFCsPf6KAmAs3ia49UcxHJmH3HspHb5fv1S378xKL9YCEWGfkWzh6HHBXfyCr2TyApe",
  "key24": "hWHxcnQtqp7pYqSytVA9Mxp2aGce8qdtAssxeFVjCded4xnuApjmYBt5hYsbYm7CUnCjnnmZUGjBV8z459vFWw2",
  "key25": "4mfVafTRku1gYG64wMjrZW3wXPnJqFVFLVS8dQQvTbb61wfLbccA8JtmVAy6HMfRFWvNLeHbbHb1XgM5A8VigJrZ",
  "key26": "5YcgFfEZaUzJxUeDXEVgdJzbQX6nY4yrxzVMyPv4SsEUwYMXmVtwrTVpUQry3xqv9u19CiaU9WUpt4Xxc4pWc8dn",
  "key27": "5y1WAQeKjJfoigPh3QNgggTXtKERpYKq6UqGtNvJDpp2VTWGhZX6pXvUz1tzF9LAV3QYcG5txS5AmHRdwij7YFYS",
  "key28": "2K64iMqgBeZXv7F29X9yeKZwriKWJ7Nm6YvMGfjkCoFSfZZ7t4ZbbqAMrZYYKtM462uA3BztUDcfTXTQ39T9vAhd"
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
