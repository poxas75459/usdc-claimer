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
    "674FovxYApECisNJbVRwT8hnZomL21niQArBBST7h1SPxrQGnzGYgsZxkNbEgLnqCMvCUv2dX2RkW6dHUrooQhC6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HnbWVmi1Tfq6Z7rTJwaNNZAtKeufhFaZkBfrWj9jwG7rDEN3wKW9CVud25QrtdmsYsR2WzAUkjgu8kefZmBg99M",
  "key1": "3iNAay5oF6G8qFsgf9mSvLpAiWTzVdQZKt9rBuYWpKd7z4u9McADXKEj4WuSxQwPZVeUUwutUDgn843R29AScNwP",
  "key2": "8iay2SicMDFPqrztZoTstLotsgahSdBhRdVcoBLypzpm6Go3xnQZAiELGEQQdrhL36zKadUBj2GnfiEnGZB7Ksv",
  "key3": "3kGGt5NWmFUbEqJoCTMCMd5zJLRUsKp9edAy4rwCZ9XbdMTrR8FBwthGhnJxabUh8HBYe8TAFigkPRXJHQXMoG8y",
  "key4": "KkkAgQpv93vLfZk84PdWGg3krFZq1VAPSYafobGkWaNmerMvzaHgtugFuERhk3jZLCbkcN21K6yrX4XTS7wS7eN",
  "key5": "u8sngBRnBKpm84KpaJLC3uZoAtXzsAozkLMLG23LNv5DoQCuLKstTz3bvMbwUJ9BC3cULKze931WjSt1ADszKc7",
  "key6": "2NXx6kFaFvyiv7B2PgFLXn9SFGywaWmDekHB6ArMpVNvTZmf8RuxFjsF6S5VuPRx6vBbE4b2r9Br3SXN1cZ42qYe",
  "key7": "2wA2XNrcZRGJqXEr5ycRjSpwGmnhmtfJMzDgfDPGdHAo1yHEGpCaCFHKtm5zhH4WwnuvSeub5Q9rPY6xBFY7s3X3",
  "key8": "5Ppptu78hKQJ2N1sKa55W44vApPjzd1x9VLMmLuDFYxMPjt2R7oEeEKJQ6ZD8sYsa7C7nPX7qDLse5ojuZ1MHsXz",
  "key9": "4e2Ekgt8c4Q3WZCi9gRLgTf4Sm7PAaDayjDQSQVBHvYahWTTdxqzHVFxM6xMa8vYp5xm8ceiB6MmtENpLTcpLASc",
  "key10": "468ziMDYxiSXZbZQVwCghtmVsE1QzyE1nWnVt6VNy71iJv655k8ie71THy3rZ6y5TnuyvH8dnoAJzUB9F6pApXx2",
  "key11": "3DAeMUS9zDSqy1V969i2rjMaDsE1zG9uhidrvzvXJrWqhvzC6JwVZzndgQhHV7crf5zJPHHyr3F1RSsS4DD31W1e",
  "key12": "2TD8pn6k6xH6VvokJDMZh5NEeM2wJ9ZL6HT2gdPmWdeMtrUQEzCpcNWK72o82yBrcFWeZifUM2rfFi5WLVBVTXoz",
  "key13": "2zPTZ6hMpdAEmWnpbwQFrBvw3sFoRpYDZDYcVwq6rRVheWaDkTrLdkeepq8vK6iEGK9QzVdWT9bUQ1uQNKmTzeSE",
  "key14": "2ztWL9D8bb5Etn2aER1cmAKKVGgPyBsqdeb3Mm7dd7bcrg1S7aAi16NfWYx4ebozgyGBYTeVwtn5sGAAJLAfpR6y",
  "key15": "4RCTAiANFeYXtkxP9fbFMJNghB8ML8X3NdChjLJuNoRqXeFsPL9qtt8yk2ZsP3npDsfcgpvJFF8UUpvXR7Tdg2Jk",
  "key16": "5gc6TviTXbesxdXhK5ag7a8bNkTauF6AXyr9pFiaYbfPxeyDAeZnYHDSER8RZcop8BgxBvjHu3eZBCzGsVeGgJWT",
  "key17": "2aPzs7NRn1MkgaGWRR7fDCgmBsET8HuioUsNyKDHWKskSdUcDyprH85LDvsPd3t1Dgad6SEayk5ireRb8YWK5WwL",
  "key18": "4F7W9gqveVPzStmoJpkyPv2naDV2Fw5KH1EMiSpahri6NwEBtMNHhKgQMvN2xV6uGp7ZfBzLu13ZoN9JMhFhoby7",
  "key19": "3oxqxPFtk9LiybZYcws5hkrfS1BQbFz9jrGqq3jtC86e4FpmKqUG3s4A1BbeyUhzgMofgQpMxhnEqqRgXQuG8sb4",
  "key20": "bkGa2ezH29vgx4k6dRpuoKoxQjNh1xN7QbqZra1ZxbQrcN8b9omY3tqqgZaxhNqDX1FcfyNeAmQhDxf2vPnsE9b",
  "key21": "5G5omfbWgHxGivK87yXRRoPRVy4ZYr9Q4Y9CBx1T7YKnZU8MxaArGvmwe5gzjfU7E67SVrYU4Jvj14tV1z4dfVPz",
  "key22": "3HfyRBeremqDY1f4UeZT49GQx5DxsQv8sUP3eG7uzwyHTb7aXAnbUzMbJPSxzBL7tRvxpwGgRF2wNcnwRsug5rvc",
  "key23": "2kK6GHm65J2o4Ujkbfxi1DxuhUQfewjxpDv9MeK4i5fohXY6uDzZDXZMYCt91h5cnYtb649repejAStEVAt4es1S",
  "key24": "25ScRxn3K3BwnPXz996LRdFXvBBchLanPKhAvPDycP5AvFCfmGKTpkfgXbYdMQeCSrkGLPyMmpewU1VRtKszumXv",
  "key25": "FqG7FpQ9qQQ6xXYCGCvgZpj5YrofgX1Cft73h8cdx5qyu8hnB9sYfbM8fgX6WcerbRtpGVkrvGqxBuH7kGRNBuc",
  "key26": "9F6XZ4xhgYdGSafvi3Acm3hPCXRm2G7Va7hXAf9VtWXHMgui9Xq4ZqQi8eUqZGTBt5Kb8HKc7p4DyCfdJdwQKkM",
  "key27": "61tyJxxpE4oSMhggQABuMK3tFAY2vjHKyfV6F5EdgmjgH1M5BBHewFFEW7og5CxBtrb4Z2W1A3J2XUjamY83ZkDt",
  "key28": "58L2T4yy7JxxKCm19ny3qkfsEDrR7UcRtN9vfvGgmrEhZ2HGb2dSAggA7Q5ZKXJ9ps136iFTvUVJHY8t1UCZo9tw",
  "key29": "3QggizZanb5FhyY6bZeV3vJbaHtVdQk9Q5Lpbv6NJjB1dUA9w956eqLdo4NZjuYS1C32LLNXXRXhyhQh73iG8DQq",
  "key30": "2p19xqDWkbwG4b7rCCBVDHv2doRSKVeYbJ357yHqUuvyD63mhwEEhG5jkPHphqMYwZaSPKVaL9nyXjUqCVUHrSLu",
  "key31": "3BPvNfbLUoJ8xotwitQaHdNYQg1K8JCEuZRNuvAoDJr5ZxGmhufXw5cT3DYesVzqCoYy1SbULZWbawSXFK1AwpMW"
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
