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
    "7hewvPGKJj4C74CrEbBMQju2mzAnQwdzVkahAeyFnDYEh181EWbbr26HqfhrgDbWVEf3EkqgMqLVERfd4LgwTdK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VrawtjN4sJPKFAJSk1W4JPqE6gdbLK7DGXoeGRG3AJStrCUcWXWeUUbYWST3z96JrCRKX1gM35DLrcrb6DEMt6v",
  "key1": "4Z67uhpUMB7xTMywqnzJotEZerVJWLN6DRr3BC6K66cumaR3sAqKArZjQXmb6TR54f9R3CQjfosekPsxaiAjiLF1",
  "key2": "4nJ4Y3Fm62Gu3xykVjJ4JCwtCBLLwKDxNsPbqGgfkCaJyHHopyCocN6MXB6sLtx9eS2tQ4QyL21SjavL2Xs6DM9A",
  "key3": "4fRQKCjvqDJPqH8NvGqJah9bhBwnFFGRrbk4acDJAKBqdhZPev6apMpCk9Gp4UKSWmkBkBjfeUkPC6uB2Bp7EXTx",
  "key4": "44qCZrho6GhjWuLjvRmUJQyyRLw8KWNN63GjC3F4QsVVaAWyPaD49E6yrXusGnbuyb9v3nskB26CEPkfyu4B5VeJ",
  "key5": "4RiwUU7fuyFQmBQBzGcr891LiZwVunQaQ9XuXt8Hq2qr6NABamjfjBtAKf7jFB2R4wQhsqm6XDNNVeu5UcQ1MSUf",
  "key6": "2N8ztjbHSV77ZcjH87s6LG7T63BhJDu1qrGnPxQ1fqkGNK7WYsQArK576o1mobZ8dJGf66i7Q9sTFym9xoytzBxV",
  "key7": "23iDhVUUQQmNxrGgtbGkbdMLJKXfiyJSHtxEVHyrreqoC2vb97MvkEn5srQJaWoYgoZ8goB2UXvkFkaCekDtoZ7y",
  "key8": "5J9KLgkMYkqVaWEVHDaWV7RmU3nheWsfeWQNA8BAktocvzx28Phn2H6gapLAmqRiA4d2R76CehzYEdKwwtm3KXHz",
  "key9": "5bXS4FjBsEYgzjdNYQfdJtfwiUEoyxPkuEpEoMDbBxCpqAXVLXjmw7EJR6gwpwGkQtLyb9EhfimhFQLxTHuYxXhJ",
  "key10": "2GtULgK2U2W9HkdaMCCnj5oaf85RKCmeiAFaUGDE2yFvHHxF9SoJzxcKtH9C1ZvC4di9iRZCKUuGGDXcKrMVzhih",
  "key11": "3nRoCS9iepAeibuQMLa3u1q2AigjnVVPTiZNZEbpsP62EzETw7f5QmZZwbgiXB238tchfaRXqXcF9rx6XgpPhEu2",
  "key12": "33EMf1SMKSiyLU8ke3RQuiHj1FeRaPQUVWHEHLZ39ZyjJ5cdisyRVEQZzRczCDkTviCoFFdKnURx5q3xo5mDaXcM",
  "key13": "3JsKepnSVbaFw78rShRyWBFZkVYjCZ2YbFazFyx8nPFptLU9FrakHZ4dCtSyJrhwJaYJNpM7gYHPvXpysmBjHxAx",
  "key14": "62H7VKYFAL7JTtJoYfAPcLu3zmZP2kfi1rkMryAMkMnqchhyzGMNNS1hAFJHRn7DQbmP6H6Pe8aHW8iSdcJXNouR",
  "key15": "3P36hTTtrPYa9qHnupDqGvgG3pYefgCdBANgsSZa4yuH9oGBMp1EwqCFv7ALUkq1Kf69Xg9fDP6Gg1kB94QYcFaz",
  "key16": "WuRUcZBfN83miaBtsusjz6CYY8dszEBaGKo5EccJCTyaG4jMAiXG31NXQtqFmdvxhZuDGKBEAL64HU3px7JxLXx",
  "key17": "466y1ww7ecnghtMHtByzJTyoZrK1cNb2vVzPwzFt1sGqZ57oF7M6uesCcgpYx7Xa9YdoahJAEApQwScxajzxNy7N",
  "key18": "5YiJZQASTY2vLzhwiU4jZtL3gHzBFLSuv6hL4VbK5VYWcwMmwj3cfzu2kFszpdoPsDfZ7sT1WcpJua7cmZQJb5wX",
  "key19": "ADaBwgkLHKkFmL2gr3GKpeG5VTEna2kQJ7T1ejNcJ6ro5A3rXcGtejppmDjDY7JzLPgWGnLFv6c8GtV8shkFy3P",
  "key20": "v9d5W1nzFC7Q4nhwwLdoQ8FfsFTQLPvDae55oXcNuZJb7AK37e2szztiUk9HHdzaC18VocarrTvLpezFN6f3EBT",
  "key21": "4NcEXTCqHa3SZxDDXyHCBWHve2Uj3akwdhRmpq27GoP6RiJuLqA3Wi3L4o5dV8ASJVTW3GPcrrT4CGBcHUBrTFHa",
  "key22": "4DJzSdfG6LAryME99yEa99ARHMNgBivMnkAoEr8qQH8QiZNzWZMEoByBkFRx2wfgUysvjHstagLBskpuQEuKaAqC",
  "key23": "4Zz7d78K8rA1AHi9oyM846tKFPmyuXGG8GH6GboXgSLKqhpNp8e9xvsi8CjbmHaZ9wmg9FguHYm6uhk3W6x78pi3",
  "key24": "kvUH17CfWX738DgMUQnMqMJJof5VK8LUYqbgF5xKrPpUe7bbFxUWNHLzB8VfUNFuEQcVqEX6TvVqvxsYLB4s1Z8",
  "key25": "3WvjSStcAbK9nYndUBbZK74nTWwzYMExWEydXrpTUmpW1HVeg8SKsR3NwH8i4wM5HcfYVgG24E8BBvPdmpHbPThk",
  "key26": "zZAw2ZNNY9zMyqf2uuzuEin8TdhqT8eySd7xKKQSTq3PmGf43xvZeXMe7nywsw6xtvm1m6jZnN4RMN3azzEjHM1",
  "key27": "33CsS5UaUVnPQQD3Kjwqj4WVU7PKkfgjPS93TZw5xyMgCsLW48EBwqsYfjq3pHDCY3Vt74qdkECMCd8SPTg9KtGR",
  "key28": "t9mvBqMruTkWmcdRtvSa6wJg1dfi6uFuhECdDuysN7NiJC9s99UqeKn4pdU251P9z9x9DvaFaiAT533VnQov7V9",
  "key29": "MXEhhhQ9L9viZ2jBLMRLqYz6RroTzHRhpwb2j2PbkdHbdHCMkK39K3GSQBMzjAuoTLqRw293MwYHVfQebQoAZnw",
  "key30": "3j4UgdvFrHFWLqziDjwvYvG9v4x7h7NGPipVEEQe4G9A2VNZNB7FSJpfSWsJ8yrY5c3mTaWJBQYrtpUHvXRKPmeM",
  "key31": "3BFarQLnZwvWUJowUMDrfn4sn3RztaAkQd5qqepVwhgHQf4K378uaK2MaScYtKxANy9R9NFbkyFX4E8XxMiijwAv",
  "key32": "hVk69WN2JEwvS4J9qnke8Stn2eSj1EykVnsnMeFposbD5L314ZGxAYRbWJK5xkvo4Hb8CfDMwC22JD4mqTbzzp1",
  "key33": "2p8krgri2435zXpTx9ZZ3T5NP2MuNEMhfSzZdXfBWvSU4YpwDZthmRE6HFrqyrJ2kcABnkxVa6xQxudnmTjiCjVA",
  "key34": "2w81rZeaAjmPECGw1tdhUhwVxdLqED5rs2aUEZc8vxfhfBDftzrUq9U7Ckin5V9gsGtRKwecEPCeKhUQMXuYTYVw",
  "key35": "3vdwYiW8YcRCLKk9JrGooSsrnaV68TvLcggJJQ2GiZ2xWntcJ4ZEZYpgCycLGEesrHBQt7nKBYkE7zAgJNRFqzAm",
  "key36": "3GnNdc9hUPVRHFxv3cN9DsNprivkDC7WUqYUjCPso5KFV7etThWE4KZZh7aRmWbYPQBMmvooyZDYLBh8EDCJ2N7P",
  "key37": "3QUjxFV7szJcaNvEVbMt2iV6XgZz1ns3EnfzEDkqZZ9Q1vAtBFQNRMFWoKsBbex2P1wfUqXyM3LF84zxnu3YYmF1",
  "key38": "2rKEC1DymFXmsjffJZobuar9UqjEP1hFku25qDRhWQDZ4dHBrY5rLmDJjwBoes2M3c7TtegnnQZgLEASv5GTLnGL",
  "key39": "2jLsWR6djz5DyMP6hjTRYGfT6duzaiXezBmtYwVZYPvXkY2FCwWFqytnc5ikviFRjsrCjQeiavwqUD7HQugKtCNX",
  "key40": "4T7qkti6Ux69ZfK7Rr4JAgftVqjJF5pcNu7jTfnc9VTenXbXVYDELVSSazQ8pGGuwcrciyVZVBuvdtDwTDFfD4qa",
  "key41": "39VXnicU7bxapa4ysJxQZW84HxWus2N2kRNZNsbegtMqa9VeQMTFhWqEsdZxRJw8shV6kyEqe35dEdvu14a1aVNx",
  "key42": "463f28Nq9rCXWuJQQxcde2xPYWaJsHDdjQcysAjJ4jFrD8pYR6HPEBPVsVun9dEsLDay2k1gHgBsDrF6MuenWsPm",
  "key43": "5hLqTD8sM1iFWBnHqjRNDikih4tCY16bXFcLQUCfAr6WUfNHciHAbf7XfFRCHWsovsiAcMesnFsK7t2QGjFGs3Lv",
  "key44": "p4Stt6bWdju97Cqe1KPHZjjLJD9rZn7s2uCHJooipJG82Zktw9VJxpDkNWQYnQWNp6UPSEMyRw32ukBF4bqYJS7",
  "key45": "2uqtSRf6nX26hTG4JGTqVVNN5UAPLeAuc38fYjvQWkx7HnpqAB9kSmQ6DPyKcNR4gKpcj6mtYE8fKo72gJwcVChM"
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
