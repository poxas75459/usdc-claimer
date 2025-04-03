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
    "qrBfR3RYvTfcbqC7YY175RPiFEudpZZTfUu962gNCUgSQ1tvicWK8Wehk7vRgfQ9idu3AYaf44wyvW2KJ2vCrEH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vh4LsQxw8pEY7FmH7RvTAbM91ZZYmLS852RN4ihGU8PkBA4cyiEQoE9PMJViB9f4uB9bSrnJnYASACyPUq3wc6g",
  "key1": "2NmTCj5ZmgbrhytkfG5WVpxoqJacSHAR1sm53mhWxdV6FYZmTYPvUN5BABJKa9Y49om8idh8qFaBzrGdQ6HRYh9",
  "key2": "4gmbRVRim46f2t23C3vCovgtn9PT82FfWT1m7QMvSvAJefnQLBdF3dXt9Suq2RbKfeHzuxRnabD1gSBZGHbHM87v",
  "key3": "5tWr3wKtSMRq7nZ7Vpki2D7pFhXDmvM8Vu3U5vYxDZwKpd2t7FoEfYGQ77bWxvA4xWAKEoVMzLfa3LSnkhG9641Q",
  "key4": "3i1CiHmH4GuJGNcN7gE5TmTRduuhkcYbnFqoZSPBoAH8ksiGSiiXS7ZSsHyqRkrzk5nDA8z1YPHxKnhm2j3iZL7e",
  "key5": "fW2f3ThmTmxqFGC2u7F7yFzypnispiZue2VjUfBkEENKfEbQx3wFuMr9k3oNSxZABLvdi4jhYeB5TQ8aXd56xv6",
  "key6": "322XpLd4w3PnHnQM7i7LLNbHNReeicnq9VyFYftuzJdUn77ZgEWB1YC7tT3juGn2omysAAwpCE5TxvNTGEA7EHqL",
  "key7": "RXNaAt4T5me9aMcbzmLmNp2xvBM4sTKkzz6Fh63XeHcPuCniwwuKc6ZvQ58hwSTTPakDDEsKBzz5GDEXeZkZEqL",
  "key8": "2u8MxSvfBMC3XGRbn8kaHNRLTXwsh41BWGAJpH86zWcPA9TcTbjeBTTpcobJx8UpU7c3G1zFcXpJHpNFqyu5XKr7",
  "key9": "5hSgnqpwQBzVZdMwAYy2L3V2hHK88iDDThnSGEbDuuGq2vAvTXokKSrAmSNv18kzyw3Jw9riPQFeYpkeGcJHBzeG",
  "key10": "5fBoXs2cBxFiGDEmkWLf9vKV46aZCZfcnMkW8WAJ6juSPVruNS659xArxjwWa6fAhZARV5dFRxAB9g2MAhjUAKzN",
  "key11": "4iyQPFNLvVdSayw3sQksMqmWbM9bpCBtcMQK2tFKU7wiUF8dQfQrnjpjVHgeoaxw3YBzN82a57dZYXZ8drAcf7NF",
  "key12": "2bTc5siHv2TuX3J3BHTTTP5UoPqThW6bY4EFtRspUAMCk5mvbrHA151DuyrXJNuLMeE2Z88Ap2wH8CZEWh5qSwek",
  "key13": "2VAZGpRxyLrwATKyEUQdwxzbwrtX4iMRG9qEjgKcorfL9z565hVhyZb7GUcdgqXK7CeCofYrhBAXHZWsbt1DwNaS",
  "key14": "2iJ6wTkS3T29ZZyrsre7JkmteisZ7VbfuJyJz9sPo9YCtytRsEX8rBsydMbpzmg2wzFWoFgnbvtYxkx41P6JAri8",
  "key15": "22sELgYeg6skxugF8E3uQ6NyRJgkefw7F1SaiYr2AgY4WHBHshFjnTHUiUnxXV2e6mTb6cKLWd4Ww2wpb6pdQMSq",
  "key16": "32aZX4kNHnF6q9U4wiFimokt712xJBNGnHFA4nnMhCbAFZRVc3xdo4ThKF2EUf83WCRst69KvhAymHTPukA5nNwr",
  "key17": "25HLSKhgeriTBtpQ7eMZMQUPsZgWhmApYXJg8azaksq1oLxNMYzefBssVQz5KMiqCnS5RaUMtUNSfhkBLwnLzcGq",
  "key18": "5JPMzKA3gxPR5xRb5Vu9cf2os3aCtVAwJsS5LYNLRbtb2oazcDMYJHHtKLyCzQzGcdDmRMvCKWpGRizxtrZPh437",
  "key19": "2SzZfRbEUAUnuemWWKcHDN29V4J7ftCyt3EujinWMEtF4eqm9yhoPBBrUieuMy6wUSgG9rzTbmWgkZUX6xovWG4z",
  "key20": "2YuYFRjNV56giWyi3Qq8bUUk1TvhGUyKNysMiUWckmAg8ETWuaUu2b3ggVGMWTZGYKtJRL5PMQGX6mgokzF9kVaf",
  "key21": "4yAVBjoAF4eqt1QQa1jD9P9mJ29Q9Dw4Fx99UfuEvMh2p5Ddu8GfG11RcsqkL9B8ZFLEd2xPHvKt3wtf9bYmDRnj",
  "key22": "2iTYJ6RDAx8oP1qZicLmGcmMi6qjJkxhcxYmPF7UgLRErgTv1tvCTm2JCn49wiMk8CT76RxcJ7mT1c6eMQUUoLpf",
  "key23": "4M1NWYPvaSjEM7y6DFYu3ukYrjrq597vqoA4mr81LYQU3VBw91jMMAs29CQq9HtS3eyXYUJtz8LTupJPrmkwgPWW",
  "key24": "5mujTrABQmd7pzxH9ZmVPKqPUkNDnQsgbKFnM1S9344kd5pRwa7SQh7djWtZYMSubTeHwjdXbiL2QaHtLRtaYU16",
  "key25": "36zihQuYzcnfBUr2vNu7C843X2EpMJo7Ukqvzs8kr4vToTvcK8zxnMC9Kbh25YyTfJ3W2D3LwNAovV8gEXPr3SY4",
  "key26": "qDLEF5qDrALx4SKSz7SBBmdF8UTbmSS1emiKYdcWJ7xvyzaNJFkC8hs2Fdoms8QRTL7jo78NP5vrtqRJXHARcky",
  "key27": "A2EhA3eJmw6V4fMdSJ5iWiNnBzMnWUY6sue9xVPUgrkc3961eQbXtFceBSfBsBH1gJhrwhZP3cfHSYpJGiorjCJ"
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
