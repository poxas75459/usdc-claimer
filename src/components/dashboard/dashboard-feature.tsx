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
    "4kkbHpMneNEw2kPqNhzC9cdrMmfuR94JpMEgGH2fEoRKvLHkbszhP7XG2rCSuJoN7VTjR4bmS4BMF3LdteWj16Dd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KzfhFahrB2PT93SDXA9nkfPzrmUbPmjjXMSLQdfvjQmPVyrTPmUvN22nsVs4Vz4MYKZkjz3RHeqCGy83zVH8CMQ",
  "key1": "5UXBSWDt8VFh9ciScrywx7biDQqqHKgd9mdoZ1qXysfH8USES761QJmjJmQAEUaB8joVUYWmLNcarKa5DEva3kR3",
  "key2": "bB1vuZpxYFCm8tjLsLacE3QEeCasRtdF7mX9KBZsizGsjswJ5bJBMEZ5JeB8smfxvRnaQ2313q5AcEivDAtctFB",
  "key3": "3XuxdPabxErQZNg5jjo5rC2TWCsS4onCAdPfkgsosd1DRCG32t5SpKPeG8DJNHpQhwy3mEoCGKD5fY4BDhvBJMbd",
  "key4": "4KbCgE8gcxvzf1cHGLJAePHbbYQrzZzk2TsuVJoEH83edqWrKKmhPbZRLKatjNbRbFkvderghaqfi3QYKwx7sMSC",
  "key5": "37BBHyPVADhk1DWXpfowJvUCzPj9gTgEkoSmNEXJUQ776AfkvUkbb9shXmyBHDaVS6wRFknxnFEic53sXkCJxkkc",
  "key6": "5VbrUWHnYdbQrdDnhRQyidm34K53WwGvkBmggpptCkUV7kUyfCvsG7jAseEcuThcQoLTUtYS46jpurQEUB89HePW",
  "key7": "5tLMg1ajd9a9tzocLhetMdw1wxynVsDGN1dUMxkseyWb86DJChtLwaa4r2ZRtVNeqqAsXNLjente8PcpFq5UAr3n",
  "key8": "28GQZa9WwxDR1uSvrtbirJyArmTGNUFUENkTYoz8snbVL6oLGSVCn4Hg7fX3m35Lnw8Xet2zVP5qK3QgeGPL3kYR",
  "key9": "2sTUmUAp5pjn5pintyQejjC1VqZinip258KYYUhfifPmMurTSCXtJSZEyKej7aVQhHsY5ENZ43qqQ1tbwSR5RXJf",
  "key10": "3HE6iwPJZjGexyS9xtEeYL5eLTbF9TfKM6vcK5qT3gWMZbE3zzyYV6QZ5gUQpoPaoDxpURxhN7k3UB8ygJRHw9y2",
  "key11": "2ehymQqH9SWeV9zKytPzRVbVLK8R5rJoKiz9DtXDdC6reYCngBvj4WgPfC85qJg9MHBFoXtKfSEP9fdzXBEquuhY",
  "key12": "3vDigXsv8kZwusK235QaCnhmxYgSmy1ocvLfdsW8NjMH8YXPPa28jiyysnsesPQcQSdSi3mkkwxLrZL7XHG9LSQe",
  "key13": "4K6g4iW6HQkvXVHujzW2s2Qe2aT33qUvjU1xqhZeLKJPdkKYJAjG4rYebJ8d3qU9YEchxfFxKfPuZ4TJFYPm2rcB",
  "key14": "27PNV9iNoztyGv9KVkQNjeD7C27vDR4fs14t32m3uFvKdzd4HbJY9qWiPbdYnEyuXVLuwQ27PRHmyRcnUrmjGPb5",
  "key15": "4mUkwXT7Ep6URoWhtfR1NVuJhKi3rxJEH7HoCE1K5pu7UDLvYW7Rsu7Mivfkz6nttvLHfA3hDDarasWdK3s3aLFA",
  "key16": "3hMJCAi4DGy5WZVUeYiDxyCnVMnYiXjDSKVYZqGaZEMTu5NgnPvMY9xTRGUGHcPg1DVc9YsKMRjfctJJ45e48cZF",
  "key17": "3Lb4aFfoENUnAD4TxsuHo87FWiAwQJAeMgctp366LNL5CbTPYCwWvymixJdicG8qbq4LCzRcKDGYZF3sVmqwejrn",
  "key18": "4KbguBndd872hjsFtheGX53QXW5fa87NbBZTq4NmzekAZ4GTW5vmRjDvWkSWYJfUzozokYUSZULx3tP2pFgii8xC",
  "key19": "53UhMfWvHrPCvLCQutgB4JwGYfCxSzeKbQ23B9foAgqqjMHiRW5UZfVrWK3JaKmAqSGriP88mnd9zyHZZLqZoxc",
  "key20": "2XeZFqtz1NiQhAsSCDsCZBm4E8u2EWrv2vHtkyrfiz7uPn8S9KFxyDnAXjmpDHokfopMtVj3ck8uPbCQHd3P9cLQ",
  "key21": "3sQSt3ULvqLQ4QprbmkKS6VsG9AQ1H84YXgHvmwTsC7zoz12JzbYxYEtprmmwmgn2KssUBiVEAwuPQ4ADUNXUGoL",
  "key22": "WcMzYQzbwCiACukkMvUnhyvkp6781pKaCfKFtKEJf1JGN9SqeC5SZXHBefGGntkdqrfUVDpMst6xtPY4xWxYXcZ",
  "key23": "3A1jSMbsD2eBQyoQu18D6vMmYzgvHPmeALA4CQihPPzGM6gTdGqPjLRqSmZuZAN7opT8mWeSeqHDFET3TuncXHqJ",
  "key24": "57WtP169QUFtSoVuUL6zYpDionf67eN7kizHYaaHcDmse7GegWAZXDuPt2RCseCWtEMDUDKBJC548udWLFBEAyrr",
  "key25": "2JKrdjJFRe7VhPSXHCXstoJL62MCTjEijHCyoLxXwHk7vELSbhKkAA5f9LsPdZWReCJZjncbkeheVFkGwpjGrgzC",
  "key26": "b4sdyS7hvA9XWk1P9JwMeqRgQ1jUk3GnNHjLw6uoqEG9MdDbTJ2EnMduAwFN9cgxVJuDhWGD9UodyBVtEZx7Jn7",
  "key27": "2ntzwafvUeBVw4fy6pXzVTEmHqKm5VsLjRJbmpm7dppNeVEPZjbGMS2cMEz3vujgzGVQwqMjiFC2Aa92pR7FtnB",
  "key28": "2mSn62kWLb75Qsb1KQbM8DuxViCmQzbw3QqjNevtdhf1wKsWCEzFYjH9PmKNZkANwWL6yAkQPdPcJDpNCsQ3AzTB",
  "key29": "dg1RazgGVibrxS3tHeTGLSmqA3F21ZaMVLgWHm2RAD9zKjRxLf7r2CqnnKttpNZLdyi3J5zpzUyWK7t3sQqSzBW",
  "key30": "3k1YpaqbkGw354MohVuQA3wFcWEAMEEVVyzB6QcSSYYasKV7HQDcHTbS8PaxqUEHHQEhAuwWxaYUoVG5fsqGoEgz",
  "key31": "tqsAWMLw9z5gaPKaidvmdC8hHfNen815MqdBRMU2nTypZHBfzfTQ7jQ9qV3czkb4NZf123nc7owC2zYpet6ra5H",
  "key32": "35gbtce5euRKC13roUGzuXEbVPW7yMsaT32jCwgQb4ax9YxpKMrY43rSWV5efYGBxyTPB25yqYKQGTEncWsBwU64",
  "key33": "4TGmh1xpUJYH5DQWRPhA2T3Fy8dyEM7Ytr4oogRAxFhNQCyv6ADNNKQuiLkPFTdP7qry7nefe6FtJT9hpiJr7F9m",
  "key34": "5viYpC5dEiyLnNeRtfMJRAhG9oTRSWah9VJdV1WB5BTGdpSmiWaEypJJn4ULT5FWh44WG8tcjWPtu4hkRMiaRdKH",
  "key35": "4JTWAP8ATyhZ5hXCB171xfGaReTtmucbKw1ym9W1RRhGK7xVF8pwv9VccPztZkQDzJwycJCJTxjcwGZUCdUDLEa5",
  "key36": "Dz3ivLHGcXCsK62aK3YGtJ6FmABJTooy5yDjYqtBTEF1dXt9ArZaMirTqszKenZQmrTd4KyCk28wd8iSTM6B9nR",
  "key37": "4YHKPrMEgDAEas6jsDxRQThSRUKV4Ky7qYvPPv7TD4fpbMW7iqmh1m876LonAbWFbXNhbeJyb3UbrHbghyfNWvXn",
  "key38": "4vfVXExwTGkJDk3XLYTe2EUi1umFDTLrxFPwb8VKFMzAsMFvnyem9Li81Ara5c1XPEC29dfWqD9ZdaQs9pkMQFXf",
  "key39": "22xq24uAxUVacapVF6Fj1Qkr6iL4JE4Mh4u21dbPHPteZQuZGby2op4wxuTVsxaFXXNtL75eJtgSybZSQ98YJF6f"
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
