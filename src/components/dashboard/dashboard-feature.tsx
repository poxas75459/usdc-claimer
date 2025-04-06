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
    "48cHfxyjWcASnGPeXNCop63MjDwvWswCh1mMWMvgtSPByabFmgQz4kpVPSznVbk3zztZCoftXoxhhgbqn4JDzuAy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2akxvxuhqgtxQrRBdjYaFBFGuSZDioFken5CQQrpXinRywgKrhMBY2KG7ZfoefkiTXb9M6z7wKPESryNs8TcwgS3",
  "key1": "23dLafB1U2qFDxA81f3eXEg1ekwEZzjE9ZviaiARzjYTH2WVbTYg1EknPEZyuADtByhZSoCmYNLqdHrBL8Fq3ZwD",
  "key2": "4zAzuwyNu53VqPb3DdCUnFXa1pA9bVg7GodWBCXY9pHeaWJQXTemG4m7ajPwqFpoTc7KivERqzXB1xqNpRRHCvqn",
  "key3": "xi5LcHBKFkF9nfitdfn8Lwvm6C7oQKMhZQs5QnVEwjmgZovYExy6CGGmG68CKpbiSm3zKBJLag4Y9grabeYk7o9",
  "key4": "3c3JgbT7nPhZTrn6cBYS91p4WUfk5bsjRTu9yqZ88dDvkUzsoj3hx7oEKFJYUB651o7GmNWLN37WrCSixgJKkhTz",
  "key5": "3jvyo7Gjf9WHfqmjhjeR184f1xoNvzq2yvqc9sNQKWgYjjVQWhzMiBgp33FCLKtSafkuzDQcFdK9z3Bj3KgpFcbx",
  "key6": "3Px9UHp1z19HDPghccVd7gfMQUFnEUZWiidRd6UkFF2eY7SGvxDrU8C5Y5wyJz76AC7DTrEm8neGzYDbTRdHtQkH",
  "key7": "4h54ZxK5BeVBLB9FbMeUHS5DsqUEAvZ9Drbh6ij7fotm9sTQ35KqNrrWh4kyQQGgo9jXp6U3p3djVzBLXYbgSkbP",
  "key8": "3fQfzH1vavNvLV5zxXukyiQ4so1m34LSZbKSWqdH55195dAnT1gitZQY2vy9bQm2YnBxiNzciNhGHHC1dLeLk2ef",
  "key9": "3ELXDg75tvkPRo2zyWX9EmmU1brSVvi5uCa6McVDeX2QoaRxYczAshSqabiFd6aBrWyV8qTCL67z58QsR5mY3VKd",
  "key10": "CnAA5HnQ91yvUh3zt1t2mL6n2Jmd5YJsTxV5A6FDzudkUzgxgYvH4Rb9SMwTZDwptkCWWnMNajXiNGR6JPxrDA5",
  "key11": "3EcXimL5gj3zqsjFm1LMQZTSGhKwVuTkZhBhreWZ8NY5TL7vXtHAqGU61innMY8cfqAU574zLbSoYEZVUFrKDFfC",
  "key12": "kRPmsd3bomCGHhoqsQvytrdkC3CBd7M3ugeQQyAWoxzc2A42aMKK4zRUdPF5JxCJp9oyihroqACpanxqaFJdHsB",
  "key13": "4b9koDJfCFLh8ewpVBoCMgnyZM5UgyJhgYwu556uELtAdR7DrHVtGidUiQJGp1RrvRSn2nFsrMU7txu5iQiuCBpv",
  "key14": "2jaksYbrgeuYt4pm1i5W2WKK3esEujTaTwnDnaKhwxaWkmRxSXbXHd4EMn2HccErqwU44wdTMZYx8baaaUoi6wW3",
  "key15": "3jpTLkuCrwEE4EsuHZD9JdUfYYq21QA9QnnEc2rnbEAaFTkPgktpqEJ18zT85Ae3ZRYtvjD4rN63vrie5KMuSH4d",
  "key16": "5meczv2xHhspPgCXK4CV3DVxdv8xfrScwixcRL715wdnGC7eQt9oWNHJePUTS3pcwksNqUpAeTkLi2QoL648pKni",
  "key17": "5sNsNwAe7RtYPSLNdihzv11wF1Z2niTpdF8SsvndPTSKUB24RpTReqo8bh9HBzWUu6QhqibbRgnpdP2x1afBTMhT",
  "key18": "4Axz72A6A1W46D7SrDYULX4buMxH4grzAx8aigLBKcYkoenzwBXdYWaQ9od14gi1Vkui3Y69RnKQD4GcKwuAjfge",
  "key19": "3Nkx9xqPVLBRLLWXJYpQeNZ7v1pSrA6zwUJV4yPqiHzETwLb4ivabR3Pd2NHxNsyMzjURYQaMUeQNNjxFzvbK89R",
  "key20": "5ANbjQqezAjiZfq2FJwBqyyaan1L4kHTJp3fU9VCRrUdH4sKGMQv2DJN8oRunnFccjefGzWihRjfLWd47gU14Lmd",
  "key21": "3Pqdtn2MsxEt24A6eGjtUDqqeVmkwgp3zhzKEfqnxRZ49wR9WhZE3q47Q51FATohzzVBCNthGGVKWbCvh8SQdGZ5",
  "key22": "2hCkYqtecpSwFcGEuDSSqWfycAK4orCSVnhPRLEhD3CtD2ju26TLd1ZUV4ybem2HeZk3U44hb9ecwX57RnVAgQKs",
  "key23": "5VYmNruRrRknEkfeQYLNnjsG1gj3aRJLxW6JKZdTUxAgLvMwnxqzY7frZrveL3rXC6xSCKtAAympSNboEbj7jPWM",
  "key24": "56hKUUb1ctCpDUhcnkdJY5YEoEuAm1iiP7HgRJtaunBPb6Yk8d8sThjsySPvfHHN823ECFnjrgNTcnANyqbASXvX",
  "key25": "ozwKT8hxgoNDZehGWLS8nUwdUpcJJ2UJcMVpynnVCvh4jnz8BrtAqsDdWCpC71d9bKmWfu4UVZJdFuBsPSYRVpf",
  "key26": "5YpyCmwJ8pZqc4RoB6tN5v6DPhfDaF3KDGw6mXEjrF6LfiHotJpmxLs23RwHsmQwz6U2aXRZQSj9uGrRVtMcDs7J",
  "key27": "2h8K8Gn7tNa8NcntaTu9GTymN1CJdg7t2KkVTnsqjgRVxD3Exz5qiDdYL2sfJJXS4NH2fNho3qmfUPEiq7UvdH8h",
  "key28": "5Ht5X3CQ1cArrrWvCAjatDcQvUeQeRALoiyJthJ18m3otTSJBNSgw5FfJjTt1tmHBVCGnkxco8g31aRnQb3hbcL8",
  "key29": "4ULDSutn89fRLL88SNTfC29xZQvaG34VWVcd1dK8HJFHUCvXiczDw5ydQX3Wpa5YC2kSmEMxeSmQtFfn8Wqexh4g",
  "key30": "5V12MLWfxCfTnahupFbzfzFUJpWdGcLfFhkqJFaKyMVy8JXWGkPaywNfucM6Dppdi8xQmFJ71Yf3HDU6oDwQWLwm",
  "key31": "WWUXsS9ujSVzcaEsSeECUrHt872E6exzWYdMCenFtF1nxgRMrTHAfx7Wviixe3yvyAHuY7hLtGnx4KM475VzPM7",
  "key32": "3LphzbPpph3SJiWC6t8dJayjFDog3ZuSBUAurTtAHHkxCdQY5DTHc87U8jjzmLtr4yuKMBcvk731f4MqnHp7u8XD",
  "key33": "5H8GUkghcTJ5Ku7sEbgCPRpsUQzMPmupHPEhJiQzSck12MT5MGfKLyUSpmYM22pzqS3Fm7Jdif5KxHPBs2f56dQf"
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
