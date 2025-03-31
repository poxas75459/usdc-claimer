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
    "4KCzFCW4HbP32qwSs7cza8mZ2z2tf7sMwegF5CeNddxrSExA24kTzELDJpvC8EFUkiRyECGLCv76WafRX2Hqm3Dc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21ZWXNR3bf3hkQg8ZwDjA1a7bvBKEuyMpQqbNVrsjzS6uanycH7Ky3fRuST167C1nfWAyQV1uHoVi8npKQmAXUGD",
  "key1": "52b2qizKYqMWT5ZK5qgebPsJKeoiGLEJ89i5PAmyfVxPsRQcsvA6vT6u3aqG7yJreHnnArbGXNTwhsjJ32E9qmeN",
  "key2": "KyfpWpe46wGVuEx1rdDXGomwfsFa94CbpjiFRkKnkpGSM6xbfFfvsZSxkBJ7jyDYV4secNBwCWsN2fSY7aZ3Eit",
  "key3": "3Chypx4bzb5kPw4sDuqEAYfmkeDBJFY511NVnDHt7Ba2MZG4hbj64EeGUvQi3EVQZ9DoX2wiJCkfHHxjzB1KK3ch",
  "key4": "2anHJVN96UihQ7pocwghzL5sE2gFBYj98kFNMVThMMmsf4qvbeLv7LjjQUzPC93eJbRgMahv5C8UKhjXvKr1e82k",
  "key5": "3ya48xbYftBZBCGBZwzqS9UwQdBrMGzZbADx788kWW4RRpmFgCKcUcrPYHYCNpmYokoQCjNePBZoiM5g97FDucdE",
  "key6": "2ruxD9JRPv53U3vXA7qHaPSU3Y2TDpJvX5h1ZC5bc2mqv1aAAcYhYd3MZNriCgLy8qWwx7dFPPMrQb7kJYVLQXLw",
  "key7": "4qB4jBY28LMTuMuKWmLy5eVqvwhfDwo2FQLiRVu4wZGEccL4zDJPoXU7FvbUJ8PLyHD4yx1TburVmaq1mA6h2S29",
  "key8": "2KM46d9TcSe1GUZnkLH6Kfri78ao5sieiA5As4RbJghuG6NsGAzWWDrCyJNyvBAuLprDLqzWnZnCkudC6TnaYaaT",
  "key9": "32ByadwBGJ7fdL5tEgoByhN1QHsRWdYXsWoSnahhA2eJ7tVAkyaT6FQRKUgLKRFkVq8EqdEkpvt9zzZY9xYf2WYX",
  "key10": "4tWEGxtGL359rG3Tgq7usZvwo6Bes8zq2MA8xvW52MGTzcVESLybDgqkoDoRwoT5bnGPG8gJCw5mKUygBKta4H9s",
  "key11": "65YChaz2LxdhP553pshHLKuRYPVqn9Wi8ksaCSjd7EZ8QB7JFnL7EZ6LP5cmsJS1FGe3NBS7x3LoEaQAabxDLbdc",
  "key12": "48HVBCU8ar8hvS9LP4asqtfFNSQeG8oTDR2K7CrsjdEoWAVtGUXsEHKmWgzbSmvtf5DY3gKvFfPcx8SCGFGmDNu1",
  "key13": "5i5M1v3u11AXEM61TJvWSAT58QRE4XsJYtfvVujiqzbFDPfKLSYzKJF6jkXCqhttaiFwEff7KfF5URFafj6KyNdr",
  "key14": "3JmbHQjuQSdeQNqcVEQT93oGvgfNi63mc9dbQm5etMd689msQpL5joBUQ7rC1uWWXyxCVA3pmkJyA7HBa3SmnTRP",
  "key15": "48dzdRxWyfZKi619ZYpvLapSPGgtbDArCEVWvFwhKLg1WJs9doDwkenKt8co8QgVWMNCsaEFeLeNm22TkHK8zuK9",
  "key16": "4MKUwzHU8T3ft91o3qGPhsEsRriED7xJyBHthcSSKZHctiaCWejujmdPMF3cwRi4mbuVpwYDw2BZfkpSYWadJc62",
  "key17": "5Q4uX29RD6nKmjHwDihAjD1WgRbo53iQyCgsXFo8ytfbf58EMpgp7rWg3LkBEsgtiQt52Wwae247s4DhHdnWUhtV",
  "key18": "5wUiwTaSobuVbgysVgNYNaMtLamxgjEU848W6Vjrcw69gnWArDpsdxTaGNdmXE4YVTHinzbmMi2sxDuPqbr9yK25",
  "key19": "2fJQk2R9CfyNqv82Jb42GdZq6ogjKnhTg7Un492MTpCHA4vc1PPwMjuWi9fkjyMHcH4nrnX7MDsGE2RaoLqH6M6r",
  "key20": "3wEWGfW86NhAcu1fF6MZd3PxMY1GABJtM7Zihd64Ybdc7FCg9nQ8AVZApkG38PS7AiDgMdVEksYyREz6ucJ7GxD1",
  "key21": "51LEjnV8iSeQCjQoogzc8nZnngKZ76y5tdKY3Af3cKr6cjSoGK4oTEtExUcn7J5pnAwB4GJBkYG79x3TcfaoSs8D",
  "key22": "3n223rLUsQTs1gvPK5scyk63pujcnP11MKfA3yFFWRZV76VNrjvzKKtAUJhMTpueidygNS9AQTL1aa9kajKa5vLA",
  "key23": "2RarGEAqtG8rujvNvF57PArQjjDqrw1huFfiamPYcSx3T8rR5fdUizfSjMUx7qHSgqRSUZbVYm75QQo3eHk7b4y8",
  "key24": "2muCnhHTeern5VX345goBJqCuJgk212wqEx48LTTj8BrHaLG47wnD7tHaJL9wKQH6FB2quFD6hqSheRKRHQXXkeE",
  "key25": "2ZUGfTDr7FqRGsZyxnDZK93n14eSSsMfees2hXb33i8tXEUKM7RQK4ZXMmoB1Z6iZ6NYioxqBN5UikoZm2cTzUz",
  "key26": "2cAzVEFcfNoMACxzDBRwJcCtfjAA73mpVuSaaEPtTgNqjdgVNHwjVx564NVpZoCoLVs2TF9nSjhBYzhFfHcGUaRH",
  "key27": "2u7mV8EXGgukmSDnAB1HYdzLLxrZj34MxAJFJzkbkjNUbagevtFyA178dtbY8hnPDbJVS5JNfZxPDx9pmckEhBnZ",
  "key28": "3UypshKANsXadEQezXkAABNL8uGYM772auU8JLVFZ4EfTnCqaHZYcKbhboLQCQmw6GQ3jzfKuPka7AmQBn9tJZzS",
  "key29": "2eswB5QgHRmWiweuM6NfPiA3W7kxTf5bEW7HhpBCWnfnwFBytobtjwmkCBDYStpzURtS4NKNvzmEMbUpKH63HGfd",
  "key30": "g7Vr2eke1WcrJt98Uk5C1m3JNZhfurWeZhfq69cUVByphdc5qFrgCUYTpFBVemCV1H9USTiHFbybix9SVfNizRr",
  "key31": "3dGQddWdWgPCnZHJTsZU23Gnp2muLtYkV9L1nBQFhHhc3H3bGkW757t3XDkQ5uWFV9QUMaexusiuNmnwbcBx6pSa",
  "key32": "2KqbnByWXDKKmSSXPX1FMXmw1CtxK7hJMb2ZHE6V1ntizcuayFh8dTZkj5S7UqWygndqWiC4j6tnzUUBHSWhK93z",
  "key33": "1rEVV4UF3f1JZKLoVgT24JHvttoYUc6t2pSMuFFuRe8sz2qL3K2eqBK3NaajNktnmuVA8wp3g1jKWDqy9UsCLMa",
  "key34": "41fH4C3aTbL6W6GFs9264ryBQB37Sk7VUj6AAshdyz2TfiJe5chLbsbHimguXatocJEZmj9d4QydfvmHL196KK5",
  "key35": "4T2DQJ5pCDhFT4Av4stLXRnaLP6xxR1Vn3GDEqQC4xcSEmwZmHz1dW15iw1odQeyT72nz8zzZTTYk9gEajEXtPuV",
  "key36": "4yZ76PF2dB8G5Jk4skgEr7ZwpiPbW3fbDTqY1m4YECv1xY7mPPVq8EwHT1usGLUHzEeXYTN6q7ch7RCzi69vezrC",
  "key37": "iRVy16FUmVdadUuGyTHanLgHhL2pn2Yzf76LFeA12FQXbdhsuswmoHEVF3siVi6uFGh1aD1UtsQxJ82t5WFS9MV",
  "key38": "3CXeZrY3Pgz6ZBLuutCQ6yYMyzD936Lp9ZFLFyvxb65fJHVfcGY19siAU6WHMEqPMMxQMcWEFd8cvfnaRmZQSZPq",
  "key39": "sro67QxJLj46PAao4gbugus985SA1GDUx3aTrzBLwbJbxTGVgt4nBpXoHsb9fDZRrJazNqf34jiE42dEHZRvD7i",
  "key40": "4dZh2PtkfXh7pCLDkWdCukLGavU6gbzXiJ6XDukWYpuJtYdm89BJWSWADkxjrCLAYPrrZvQRq1guLopoXFZsX73G",
  "key41": "215uWH9ssmYRc6L8ETNeZJwbUdcK1kqDJy8GgwGCGRUf2yqTh7Voe8J3xeeo8xjSozBCVagjRoQVWkD55HfnUWVR",
  "key42": "5G3pr9sHv6qkh3252QngeVL3T96KYXjuTP4UmdrAaaYwdv2ugxNfCR6yqHqf725ytog6egkwZ2fZUcfpFY9D1v6h",
  "key43": "5Z7oAzAEZ7vh5sKXcAy93YdCAwZGk2DEvybyaoqMBHbSyhxjaoTBcyK4txdeqjBAh1RiKXTJ8o77ZnV9LEdCmtPY",
  "key44": "5Qfd7HCbvMKtSXzWhfE7NzyFYSXTLuQe9BM9WE84sHT29QNcpDG7RCQxrucXaaC2DU7aTof8j2TfBzCiZ8dBQaZS",
  "key45": "4fFGCzzeSTkBWmsCmXaY3GtBZPLtPPyJW71EjmeixWJnqxH5Cmj9AYMAVCo6GERjDK4K2JgvojSiny7FkoRpVXkj",
  "key46": "3KdEPZMkYqDs1dH8qduZ7y14BYfKAkFLUcWrE263HcS8uVvJfpG2hpxK4CAdJJ2p64dgNXajeDqSsJXXQu8LnQpM",
  "key47": "24c6igEX3XJeoqxWZ1RCFLCRqCd9JYrz6yR4eAQ2xaHHNnaBcrgmaHSZwVDowck1xqmW2BtArbtdjWw4goCkFuDx",
  "key48": "2h2BuajJ9oVzEosnDV3qiR96Br6vwtEix6Tvzz7wF7RoBnhUV8WouTKpQNWFFgKoXv71TsMxoB3i1JrdBhmwYprj"
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
