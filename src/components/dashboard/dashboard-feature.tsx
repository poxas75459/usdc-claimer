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
    "2pYwNN11S8xz5miuSk27KRkebm1M6kvGQbaYT856U5cZGkcCNKM3kpGzo6bsucySBWMknrqhdx4RK1HT2BDhKT1P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bmM7pz4puNVWvCc1X9J4boQ5unfBmvc9yqGLMEHXw4M1DnxJVwFd7xgEWKCTyTLgifaTTVYPgLohDWUASGfmEjM",
  "key1": "GPdDNGSEwK8QYkUZXFBMehRXB6Ne7AEYMMm1KZuoYPMWLbcPH8M4GFB8csB3vEsoJsegutJBmnCErfCDYR4gz4m",
  "key2": "2asnzxTfyi1c4u9bV5SBy6R3dL2gyyHrqyWXAW6YxoAkqVtcVAXTdUJtyWzaVhmArZBXVhT7VhEPzEk86Hyvb8XG",
  "key3": "QzeVdRUkWcS7BJSkAkpigxkfGdsUt91DzCBMksa8PzrnWmAoHqxMpuHpr2644NzeEMsyVVHnErRDccAUK37xMxH",
  "key4": "65pH8HeS1Rah9jqH757p37jfdqBYmrAfc9cQYkhWu6uGWTFFdLdHeGfKDBkKT9XS2cN9LjKBBj5pHMEPGDJcQu2k",
  "key5": "5ixF4FDujSGmRh1VNi8U1MuKA4FoDfhs97G1DpGUkCrAQkUYB46cUnjhhnLSa43yPTHQ2wbnmF9rP9WnNZ5cMKAp",
  "key6": "5e71WyLukgH7Mi4EfasCkQiPydwD2Ct4a1UtJPbDe9FAgM6AynsWeRnCXfVcrCWaSxgThyHChoJNm9MVoZXNBSVj",
  "key7": "5Bh3Rvk6hBZdBEPdXX5rYMqp5gdQqBF9rMWF4iYftEZ5iUTzhTyearE8JzE6Wgcec5wtma8kFeHJz6AgNQunDsWL",
  "key8": "2RYuXtEn1qKWyhfEsHQgVH9zuaPFrmnqrjdsq976wmssX3KfTE43XwPn913aspHNDRrjgvYKD2Jnp3pigg2bniMY",
  "key9": "2X3Ueu1KDsfdWQQgf92zRiGtgacJNxmf87tJVDruTuXnctUNrq9YRKyjTwPg5WABuTzR11u7qGMxB32E7yAhiRnz",
  "key10": "3XFzbqhyrDRjwumtVa8HB77T9bmcaaXMqCjgkhnVSHq3RT5U31qBvJgJH4Wvj7iMS5n3QBp3m4YeS2hVx6XxLEPp",
  "key11": "4w4iPDHq72ZwkLsHsPPKL3gZnfJdizpnjGf6FcburfVVaKfg9iyqAHBU3uw3moc4ZofsGuHbn791siicFogwtynh",
  "key12": "54KgNk1yXkEq1pPCBue9FY6z7Hy7VRzWfnnySqYqj2bWFDrtBSAYg6ZavwimevCLrUyHDfnLmaHJjhmV5ZKCpcun",
  "key13": "2AgakakePLJ9aBbqmeX4HyBaKAvd1dKzcVtogRgTabcG9iaZi5ojvcx2mcHwBVi4erZqcgtG3GHrhGeeqezuA711",
  "key14": "4BXbSXFKif1tjoexoiLpRMkqom8iztg4gGjkA6H3StHu3PcNmzCs99eBGJhJNYKS5xfo4kRJb5NAqUVYWJVPKWun",
  "key15": "2kTgvb1yt4bPoSfZ8DYtTD8NwaNBusXPZes4WNFjsN2C5Qd4pRU1TsG1FMupwrWzrTm3bJWiYrvarJkNprYhHJkw",
  "key16": "2LfppZLVsiHvTLeGoXvu9k9naSo6VfP9uCBye9CTM9vfTf5mvmYwNmYJC79LMroCjznKTYJzVv7gf8oBhZ7WNY21",
  "key17": "3KCQzaHVAXfzevddjGKuqz1HBpTt6QVDpFJ4LWHAnorwUCb46Nb4WnPQ71qWCYBuzKbDYJKy4KMW7Nzyi6mfMN2P",
  "key18": "3qhtuC7vuATvDNrkxbWPiV46jwfLzJxKhF3EMjN5GH1pQaZPb8SMDxp9Sgc5qr7LdYNHL3BDCSMZxr3dy7KfUPHL",
  "key19": "tTJHPAFyhpjtkBao2seRsoJ1BYgLsmW2BzTXjuKbNGxLHfNKFsp4CViq487cRierJospmmSu6kyxYS9WS1dC5MZ",
  "key20": "2ErSWk4BJ1dUav4gyHAVmfiNR7geEKGo8DvjUe8Yvo1iuXncAxaDPwNAjh2yS9iwp7Ee4y4dDjqXEyUggyNmQFAq",
  "key21": "39tvtvACZLWncwMeKm7WqGrjYkA1eurzWvG1pxx58sUQZjph9NHeCAif7RsjmtYhqo3YudoZjsgcRkqAfb7RGc6k",
  "key22": "5ZekLYNmBTp9QfTL8rgxSzH5VrVSphcx8rkfn8NuMWLyDY6t6QTkvd321wdLdh2LgY7snzqrxATi54pTjZ4wBYMF",
  "key23": "3VZMA1QAg23ZhoQhN6t716Affye6s1xaNW7rrZwHBobLGsP65bqtrJgbnyLNsTdLS36kfh4g7FsH4J5buEv16bTn",
  "key24": "2M3ppSpjw8NsPqTVVJncDkzqCSUZ55pxKsJBb4gmAjeaCLP2wNUKBrbX2693YzYrbXRHzAC6Vi8Z8jMYazRcR97v",
  "key25": "5mWW2r9TmUg4kt1yY6uvQUFuhcte7DfKMzftKFsbTx6d6ox8WuFnpXQ7ubMVArxgWAshx6yAnka8HT42fKDsx7AW",
  "key26": "4hDyCkPrXuzQEms1RtFkewMAA7akdUUY864QRJYeFGDfVfDaHMQBi526RWkqaY2nmTN8EvVsexQH835nRT6r4vL6",
  "key27": "4XMh7Ke7fachCrjr2YR4jVXBCEvN7N2fM8MH4KJtRwLo9yPYmvyQwxMnLHu3w93f5J4sG9MWDUTDyDcaveTRHk4c",
  "key28": "4r5pG5v2xAeNZJyLHQXowPmPEAvaPRN7UwcdFbQTkfW2QcZcXcutuNRZ3MRAadoY959tMX7dzpmhsZ7atpojkaYC",
  "key29": "4hTJfyarKs8ZPQWE6QpNzvWGVhLoodjK6aV6AbAjFuPQt2kTdoCHhnmgBCMc7Z3CromqEDNQXzMTQXncvsihNqot",
  "key30": "EHJD7swRWo7BVwwwhpfThgtW9tgk3y8y28CWuMcwX2gzEArHzyhTMFksb1k4gfkwQAdw4or79RFfweLwt3LHEvy",
  "key31": "4MWc5e6cuB6dmc6XVbJ7ZGRv2k3tYwQJfSfyKjnzmRRDjPvKYRzdnagwUXL9rqpWKvc8V3pddcmNKWM1BoyN75Uk",
  "key32": "2kMdgHjmcF36tcGNMqoK1JEuK8bNCVRy27KbxYtiFofR7BE5AXRTSREk5fGhhvZ3C4fCWA4wgbxh3kJrRPf3keh9",
  "key33": "2AddNGjGMrsbm2ZRsySoCF8yM6PWorgN8bYmitAGqqQnWRHLZeEyiYZitHxk1u84fWj6uHm7Jog9C8noj6PpmQEz",
  "key34": "4VfVPw7xW42CuUKQWPSQr3TRPDMkHnSPXXK53bCEdsiqto8crbXcjmfaZWi6wFLzuFUqKnixAyXTdNRyR1dFcUK4",
  "key35": "5DnJLRAUr2xUeEqWVZuVBzDHEXneue1oNQHPGaFaEuuqgM3iK7FcuGkNMb16oGwUkWENY7ktwxs7nVRH5q3EMhKm",
  "key36": "4AoL5N8u7YDVFFA7EeUELCQVBjUzRCZyGza2BSw8hiAZzYKyMxw8c7LQV34KcnmNhHDVQNubrd4RGxJXVihiRUmV",
  "key37": "5KZZzzMq7zmmXzQxUA2a4sYMzpeBv1K2U9DHwALacqrchs2YFut1cydurpg2JQZNcPN3WAAAzyGsrMPcwYxzZSp4",
  "key38": "Fzb9D1dSS96Gn2dcGPZqeLmhMokSxw8mffkPM9ar27JjVhmGhnNYtgMe4Q6uYt8XMz4dKZWm6wyK2TTyLwb5SzH"
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
