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
    "2xPAQ51uuNP9aBn1AsjWR1H1xrzPqQoZmgeue8bzBtnG5To9B7NpNryWExXCssGL4VMjA1XbJvAYEYEhkyAcHT42"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uvUVYvCChE7cShu2oE1Sar2GXZHPA2CcSRS4iunC8JDKGv59Vu44dkfd1iVwrieBBw3TBUuFKX2KPksxzNiiwXF",
  "key1": "3bAQHFUDjCK1YPvjAJLUfM6MqFtH5ZHwYog3yJ59xNh6H1mrSX1SLtaz4bJXuRaDe6oag9PcLUpLZkCnqDr6DRMy",
  "key2": "4w88XLnD6xT3hwoMMewsYw477WfF5cssJ4RsGVW522X7WwePcvLXxZJz6Hat4xqSg5oaSnVDtzfi8JcRuy562MwF",
  "key3": "5a6YpiZjvivCfdqhPQYxAkyADG6pEp2iuQZ9AFFvnkkbnkNksReReSsPYHtnaNLAbFj9sQGxCoVDrQdoxBLBoZbx",
  "key4": "3b1r72ChYtRBJLbnfK4BbxSGvEu363iRoy4Cq31QWMAzBtfWuyDmGG46sMf1u2eKs4fnJgfgGU2uC6QqG2eBSwNo",
  "key5": "67o9NwaRD12PykAwCixB5UQJniSyuRyk44KSJhvx3zqtzgEmnfRR6fwkTbPfM4Kv6VZR9aguUowEUADZijioQkzn",
  "key6": "2DCb14rDCnvLjnobnwSxMbTodPQuwa8M13yaXCf1uVRhydE1G8ioEb2GyJpFJTdMQabfwmwVTgpCLjxFep5xcW6z",
  "key7": "3SLgnJ5Z7uPbJBxobTvX9qqEKLNtJYWnGA7ExoDuTCMADdz5QMp1TZsmWE87iiKb4c228KZu1yonhJaQqSLRAeAn",
  "key8": "67DBAuRzcN1xAmLGXWDaqCE5Yz3RqvT124TXBULcd1vtrSbj2YXDaMJR8qjuXWUDYSZSyspASKes1d2tmEhDii5b",
  "key9": "4ttWD9jgqENvnczU4w14tdvb6nGG6ce7dTcAkvXBe8M5ajtEcEPVX4ufNupzpyJWiyGPMk8eqUbEVkMLUY3ZubjJ",
  "key10": "4ERnkfve5HxJPHKoV5B1bhNKBevsHvWYFvvWUjggjm2mJM9LSDEQEgQvkoLyiDhNTvYQCrhqZxnBQtVXvPsX73jE",
  "key11": "3MWjU1X3urTdFGAv7cbQ6TLx1xNt6aPSbsPrDesgZPf9tddCRKB7bcac3KsgMK3dfCVykxD9YjdCfkT7kiXj4Rpo",
  "key12": "51BMHArVJuZQkpcrwMTfKXGBPsYHtPc6MXNaG1LTs7ipqtfJVJbfTMWR8MMYwKQqDwVgLdBaBxUB7ptLfpMrQxnN",
  "key13": "2noNvugyKfKi95GZ7YU89oWqWTahrBsLfAg6zLCpw1WSu1V9wUznzSKrNJZU7cnftt7NTvMR4wkJX4UigyPFT9T5",
  "key14": "51ACMHE518Re22pMVh4h7KP3vxKkNV3AaPBPUx837S7d4sQvksoZvXKpYds5dJrL2q9oB92Q4y5pFc2ZX3HwFccg",
  "key15": "3KAxmdWdHfWcBBUnyZ2mL8KLmFJGSLnt3Bj3cbPyzNQvhTok3jU3mo4Cv6661W2jHMqQmePrCWJ4fUsnoy3fvcfS",
  "key16": "4GEv5JT6uAzao6a44kqPJgJsX8dSUnwuKVYMzT4XjQmDGWKRuw5rUU9CJNTreRGzqNSD84DeHkThW8BhaHkexdwT",
  "key17": "5v9TNu9yrejedYyrXegvWNwQhLwPe2F6HSimPYyLxisRVecBtJ8aziHpL7cbaQfgqJFh6AercB12ba4G4vEbGvrz",
  "key18": "3axZeAoUWm2geJvZ1vZa6XmjWBJjRh62xQtKSYpCjaZ6tNWop9HKRbRZLz8GnoLCEkASBaRwMKUZk6YXB5sF1m8x",
  "key19": "2EzjwCaqfKSjTNL6kt77j7v1qYQqMic8PeHGAXuH2m9EvK88icy6CAfpMPxftWbJwivufrxhos8AQdxsAi5Tb5P8",
  "key20": "2fdzmpmheHvwpmJgXZURU6dejDoaaJStnCZY73muTdFjmgsQXsYwxTv6gL7n6Dg1rgjV8ERB6XtvvtBUyeiF3FBf",
  "key21": "3ZJGBrUcmRZh8x6W8RXmsL6n6moVA4SryGVJLvVbbrU25vkZC6wFUY6p9TPjUYidahUYPxGmRYkWFZ1T8nJ3Q7j6",
  "key22": "3kqTejdg5UEQuGRbSdMrbL5Teh3ffdZrxvX4rLvnpkxpGjpYFcY8RHNChb2Z24LCS7Bz2b7Hc2KCHtCtVqgSTQWD",
  "key23": "47ze5wqJTYTBmg15LXxbWDfXHe1ioMcCUT32au3hJsAEaS8HaECrWRQw7UXJb6rEWrBb891HqWF7ccjzEbuKSKuh",
  "key24": "2EnJZZSKXfa6LAvwu2KjL7CndfAnhf1mwXgk7rKW8yJ6ye8S6KGQmWGmHchj4B8AgHVz6as3nKRk9ZvMfi4DEj1E"
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
