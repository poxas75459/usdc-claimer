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
    "3s3p31PaUySQinYA2KEzaZeruYtQQo7npjR5UvKJ78sRoixQACM9eXEYapMmXVE7BaM4sDdKpwbiAvn2aLwCuo8S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jPyw65PaP6RLpHp3bHBwTXA3RYXAZjt4WbgC3dkhjir3Hrzg9pboDYbbucfaj1UGnsL7y2yTKhF9U1FFbabtEaC",
  "key1": "48e9cFbKqPfZaDPy81PE8tgkgdakyb4mhCZ5pCGWxawYBD53PtmJEUK5gjQb7KG1SY9mmW6cHxvL3BFa2ButbVfM",
  "key2": "3merdzbLpiaK3wV4W9VpsC2kDDcosxCzL898M645sBsSfVfVxQo3PKu7uSKCXyNCrw4j1gt8jhL8Mrj8HCxSERxY",
  "key3": "64CWgXRVTUNR9BfwdoYSd9pRb6e465Xn4NfbJNeHRhzeZ2SSV5Juo56WB57NgFk9FLwQjAm7JsDZZczAr9UHgVmm",
  "key4": "5BpqeCLTZuVU1RqEgfNNFDVQYDP6hTFec7YQAXj8pai9auE2NwWo54BCvrx49v9aHzhEC9t1ibEdvw5CXogtYpd1",
  "key5": "4r3CtmnTXZW5agmEWTXRehLNLpzupRbqq5fj4KPqFr4tAQbXPQ38apYQs4HDqkAFDA9AhVsZKjVuTPQadAq6Nxt5",
  "key6": "3guDmzyQLN9HPrZXvNHPJPMeZAYekqyf4cUXKEkXPQqK5GU6YfFfzwiiRV7T5SKVunXKrWpMepTm9TFZqEk3VDMz",
  "key7": "5zeEGfC1Mg7WasD4Ld9UvUQEXh5T3KoU7HzT4ZQdxyd7R1rx21Rzb5va8jgUH36SEqpxn7qpr2QKsb5DM4RKfSs4",
  "key8": "3YQgkMXxB764ifM75HKYBKsccbE3upnVZW4FpN2BZ5dP8ftM8w8a4AS95kXGucsfjpTLuFwnfbbmyoGiY2s7pWbp",
  "key9": "2oqp3tdYbbznTK2VV7fx2PHgX1sDpSzU88hC2TY1UvLE2o9Qg6HmnhxsR9zJ5qW77YX6TdxzEWKsb8mcZKAzWLLZ",
  "key10": "2kkQyhmfJg1p6Wo7CzuVpqAPp63Sz2iYEqkAeEXjL7q2TBVrLUCLhDdj7EUy8gr4JW6ETv2HZw4U6hfnJd2zB9Z7",
  "key11": "2mJXQ2g7reTVHuQADWhqBtH8a1wPPSGwvNzhetLUEu4qTtShSPMF5Fj5uMJqUN2p3MzZDdkwTK6TApmXrc9JbKBT",
  "key12": "4dKi5kwMSXS6sx39eHr3abZm4Hk6iSc4rTrnZYnyfUdrzJHNpAFRn12rHnTAMfPekAqm2cqcjhYV2GCVn5h7aoD1",
  "key13": "2ohxoT6miKLDr7T1rgRZwgoQV7MJPCxnNeBPMKgrTqpoMwP78pypomr3U9pot8gHy4Xx8LQx4tacMBUE7hbARvkd",
  "key14": "wCqbtNKXof4zErJFPseqjFDisSkryE1xQezdtRPZan7EWHQHYhxKQhMdpc6UYjvxLQKt9Gte5Qr3wFYaJb4TgwC",
  "key15": "2BZyU2GxHz7pNYt8MqYbbhYpDMBdDaev4ooVe78WiuLJBXDV9qRhDXP98Dixbhd4yvZenDxCpPcyms6PHmDwUMA9",
  "key16": "3NebSKPEUoGd5DdgTgzxdv4H3pHW87donNPKtXm2kh7ZLvUu4Ubkt6zXtomwbU3ojopa5LJJmoUjEXaAcuiWny7Y",
  "key17": "5wyyLEQ5oK5Z5viFfjeE75j2FfeMWLDm1NNPFjDuGzujuMNQjxazecRPBGuBkG98SWhBLrFXZomhUhvGCrM6wf4g",
  "key18": "3rig9XrukqvSgTA9d8mPRESk7i5x5mWkUZxZMNttHbzCfW3n7cJfW53Yie1VVs1Z9dJZ3jMtmQMkZ7f7AKSb3p3Y",
  "key19": "2CXfKMKnygpn9seGFMqy1GTLMhs5ANLhEFwmXMfJfN24JEjaKxgsyhxSkZyy8EFegVg4NTeBTmpXUxKpE9Qpcq9W",
  "key20": "4Vo3Si1iTfZiFzLCMEpTHeE8uUHbBaVnUrMeHAbzkrZLbc2gTN1eGmQBVGGBBmWcB5fYUcTwrXtATp9uTPsb7xzd",
  "key21": "2pZrafffRD6qJoWzBCwEcq8APJ4pAqrJEkCSBNPuXZTgjKTZEMEyK2CCQMCn1NehK8kNBeUuGE4snPuQRZiZrTpx",
  "key22": "62WwsCesWdDdMs9nbLaZnW5ePkhydeBsUWCdGdzokPZkn7AGA1NhT2wjUnoF4ybsRvMhuBcxBZQQYyP5NejEvujY",
  "key23": "4yEs2h9nNgGtz4SPq2mYBGTY3JuwqpEgaAxTss4Gntr233raTjdnWpoywx4MWPcb4QwyNi8k1XvHsRABWtCGZhYE",
  "key24": "g5rEycgLb9BDev9UtuHJXbHF5uF2vbMB8LtnBkjuemE4MfhyGH5c1TsGVWSqLMDeepMu184rg6dS8ZsyRwyLwLL",
  "key25": "2VE7zer14ZBuVbv8SCbU9xK2DHZUh8Kxu1crZsg9BYKNDa2vhrsk7J5zm3zafnuANfGYT9NLQcPVfFH9qSZWnkdL",
  "key26": "iCBNUmmuSFQpedZmTMn6GBioz6CooVmjfutnk7v7BvKXvSUxZoDhcLsMENmN4Q2YjHZjhwzL8Cm1SreA4mZyXLd",
  "key27": "3WqufGJAvxWmg51GVdvLVwmgdJSaftKoTLFZrwgPdgYRpdufa9Xiz3JHXJdsQXtM5SjzHUMeMZZSJhy6iqWxPunu",
  "key28": "qbXWWreeaf5PN6JNugewNKfVey5vEsqKyQLfjNsALRgkbnuNVQqkpdZSaZVZAJMCKZbW6e2ErLU9rsmrmuxFyhS",
  "key29": "EFQLUgn8oMHcEe8aYa7XeK5VpjYxnYSPMPj6YgzBmzHfLbSk5rTpwKEdfJSW1YnWkaE8Qg5vN6uWXyFpXkwdBj8",
  "key30": "4WqeX6UDSpSf3VexTW7gnq6mQYNFyr8cxdN9hCyAmY6Zpw3LXq4ifG2kCXyAsp697QuKf96WSbZ2RRzJMCRTvJ7S",
  "key31": "21Pff8R86fQs2khMfrbZjXsDDeFyf7t5VKL6HD3RThXwYQsmDX21cb1q1B4nHBRiXQ6kMevhNX9ZsW2qg3mFgtWK",
  "key32": "5kcHw7DuVwjYec65zb5UXcLBThrKqwA6sjCbrJgVqDYFbhefhHsFrQJr6Kivg3N5iEcdy3VdidZ4D6FTtukUvuaE"
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
