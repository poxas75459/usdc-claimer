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
    "5gqHmkEFn5Wg6pU8YKsdMkechYd6WaMMMZinDHtsnJQovybYnCzxxixjHKi2fcRu2BcNzXk9xsP7vLuRDJ74B9CP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TJ49MUbouPiwWB7uSDYLvu6oReM9TBu8UoWsY6wrNSTb8wzBnxEVV2P1auYscgKMeBEfgobyqQNptUrJ8K4Ab8F",
  "key1": "5vHqL6GCAQxVBe1jePiBJZ3YcGHbwghGvZm83oqCsPLUiQsdPHNSdfzxyYzjvUoyfiPf2pgfNzo7rA5Bdymw5pJt",
  "key2": "3CxoKr2hWFmSd1Wk3hQBPgsSJPiWuFNF1A5LvNu1MXYcWyFiSqyGJNa4obnATCN7F9sJsiaNmMdAGSSLdCMTA76E",
  "key3": "39pZHCb7jDfvJELrE3aNYY5PM8z4YDp2UoHiNFyKNJdtvWxprRMhaQ6uGVq8EBm7FU6KAPBeXDZSbPRkwMAhw4mk",
  "key4": "4eeAwt1t7CHSn5ZkReXSo3HA1Wer3i5UeGAKo8zYRpzXhXaUcg6QqRWZkyj3pzPta7ki6Ujtdf5PxzoaoEG7Gfo8",
  "key5": "3RdYcYLF8fRny8svELY7vHYmpkeEp1HFMyBmeH7jAkJpnEyghSDLP8uTnw7jJe4zEvJyu1iJ5txUAuz4Wftcg69C",
  "key6": "5ziEXXfqBKtrGaHiJXRVF9Txz79uW7JFy9qTHcr9kJFpTkAagitLquiZZojTx81fSoY7fB1GMQXA3C1FA7Fak3o3",
  "key7": "42MNMNK9tJfVXHoPSpZR2C4Mrnxkrg6KvKKnJUDhhqSefZdrupuhpHsXtMBGayXTSRDANgWgB8mnr5XJdC7KfYw9",
  "key8": "c4evRZTpgm1HH6dqKnGVFQzjYz7Sckn3g6AdNzX9N3sq7a1MeWV6AGTbxtsurFcrJAEFkAaL7DVoGDxPoFS8sZe",
  "key9": "4SDhqFhCQfNu6HKedAmgWzYz3YYjDwVRex4AkzRavyHuZVUsRTP2bgaYqym7ZiWiQEXDJb1SPk4qDQVPUqj1opWH",
  "key10": "4MmjQ3RLGagcd9Rg9HRWUD1Bppr6bVAi7gpsDkTszmCA2729zZpg3q7fcr4TK3KV9bZ5Lzd8Wk1tdqiCgb2ghLzp",
  "key11": "cA3mgXTzcBEatXdjDXgEue44xbwqZg746XmNWqK8jwZmAwvmrJmbjVfgffShpqosvkPVB3RXBuBXzwo9CdFiUQ9",
  "key12": "4eie1zRZEVjLEXXXbJJ4QLHncJsAvr6ztPf8k2sDnZq9FJWQ6JmdnCPhsAjrTnpFR9m1iHndtSE9JpC4JPTmLB5T",
  "key13": "4MgHp9SjZG1MM44SBD29bpCsUCPkKBXXSF3xkgh9qqQAvKpp6foGoBoUPEwHVGGFSFzbosj5zsrxz6nzKgF99R9w",
  "key14": "DTnby2ipKukRYjeBBBRsAtZ7xmgvN5X8qNuSDGYQBEyZUW69HxwvDsiyRNeMnYnrZ2qawceXB9wuh6Lc3x8doaM",
  "key15": "5qG4n9Krn83Crxs3tZHR13Exk3uXmPXBXat41Tfu66Vn6Xgrh9qaTC55ASAhF3F2Lko1gXaPS7isdqc9V2Fhzsqp",
  "key16": "jC5iZxMxmgw5DccSZbdEaXwnL53rbFrYB8QZjzf2PXT5xX9VULsZrQDsCLHo3jraoEmv2WESajoE2PTck5xcFto",
  "key17": "52EnLUEXyN5uaEgund59zFsJT4nQrwic5VPieQYGdeQmoZXLWVAodQ9LVAvo2skMfJK4rFjTGaLsGJ1JBQdcEtcE",
  "key18": "wg5juxkCMC96tqEYgicVkSdWB4N2Jvvvzxujys9wAkMvbqLjDfac61Ev8epm3SfDYdSJxpdsqU2cM1N7Ww7ZRZ1",
  "key19": "33MqxzQxeKzJz91J4Vd2NXoF4C2kjcfDLLYRaKbQoanb6y4QoYnhgB6bYWbP1iA9QQshZAYty5vNCighLKYvstBX",
  "key20": "2zYj4aryU9gBW1Vyk7UpWMF4N98ha2BPVxi7NbAu4WPmkW8BvPSBZmHskvkVvB9UPvnCfQv3Lke24BHB9dEEtnbk",
  "key21": "2RQscBtoocmcX6FRpN2zLRG9xT3EpMXQpLZdC3s3gCFw8QeWPfi4Rhv9T9qeUcDYznzNjRz3HC51zhdYqtbhDKLb",
  "key22": "2vvZ41tnobqVVRdyfGVVUV2E2CmmGmKgkVucvXFmXAUcF3UvwzaotqPrRojMYjoABF5141HbqqxAi56JGRAqr6yH",
  "key23": "z916Ka32sFBa77HCgeKUopKWsX9tFNijNN83uwrQk5eAkuReLs1RHd67PnsvqHz38fgByyZ51tVo8t287jmZfXD",
  "key24": "eafyizydDQ4FFFYoMSmKNzoXLnzpbh9qVRzgrRb3CDtQ2jdXVNP8r5PJYCg979cEEzsNDbuZefGa74837j2aGSc"
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
