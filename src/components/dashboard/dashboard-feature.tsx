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
    "3tAYXiD8P6v8CaC8tavgauQafNTp6n3ytKxKsRxzpp6uKoV4GreQb9KtDevwiKqqbmeL7UKmvRg2ygM8PxuwP5ci"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RK2NJAxz785XgoGa691FmTjBTwVq24y3fJy7FWdF71ez1dqRfkK73Xmayp6vxtvp8d8MrZ16MQVsQmhkkii18pB",
  "key1": "5hgD3oq895DEPjZwH4Pxh51Vxa5oTFMFAX7aMzHiHgSVJazAxDmEt661dchcbXmWGbuJZr8vD9u52MmRmNZcRMmW",
  "key2": "yDyWQv7kQ2qV4NiRQH546p9TxPWyHuMr9EZB2bGMatvAcm4ZqPpGMYCczW3xokWmtsPmjngy7kph97HHgy43F8E",
  "key3": "3Q4JKBKscs537oQu2Q6r5ehZGjTRhGiRh6VpMGnw57JnVREYkuCY2zkeWvrMxFkUdfhZaY64ZbZqxYekwX86DdEo",
  "key4": "2qPePhHzABcoVeosRv5Qxtr83Dn66nodwFtpVoQm5F1rg4iM7GGsVMBgzhEU4tF59XJMrLCWT2tJ11TeKGcbGoGQ",
  "key5": "64euz9m5ip2B1bsRn3GjbSi8oDnUxFrZoguMFbfZQ9cy2SLWWE4HX9wyrm2pzomitmSwaJhsZUfk3z9L6KCdFukF",
  "key6": "Co1bvgfZ4gsSzHbzy3LJE8k5XT36Q26tSr3KEHymvDsVRewVqgwXqFchPu9nVKTYzzC5a8jfAz5MuZxvSLLw2dQ",
  "key7": "58U2jDnAg12b9tSQXv2FBntLjgsp6fvD8g3gP3nLqPvF2h7xaSy9bYZ6NgZRHXNU284GW3nXkf6S5AexCPQkJFBW",
  "key8": "48GN4a6dcqmNqLe4AjkmSFfcNcyTgeJKcJVPUycr9RjNN8DFW9CkGBxJbXFxfBKFYE2FDJq6fGqT4NXH6jr3xR3i",
  "key9": "62CVF77ZuPtG1nkbo2iL37oHDkDuuaZdPYx6guWLTsdmhxaiiXioqFHg81j1R5b8QhcPds7gAHHHBbN1HKA8NpYo",
  "key10": "wNR88RM2yFLULL1p4rpWRatNFoCaAvXsKLhboRv68kytoYS2iBbmU7ge7EYLN8YudJXBPirY3A8waHiQueX9tVm",
  "key11": "4UaiTodoJRV1TEhTPGJG7GZnRfBeY7vDj7kuPXgjxiJjXmWzwgy9v4XqRDxeBgo2zkRmSZhenwfbZ9jncHnEDWUy",
  "key12": "jXNCsp1ugeCqcfcDKoEDhQx12W7zhW1swnDD9oWR7aQHdPdbDQnX9KMZDSoAw8YysSBH9rfusYb6jt4NikY9BY2",
  "key13": "3QvYD5x3bojx7BpFMbZcePJu2B5oDe2JCPNa6hcxCPpFhF2MwJXetQ4A1FLy3tsGc5B4m2UCGrKC7RRsPjHbkfGA",
  "key14": "61rGjvrUwkL1Ee1HM2FxrRBTkoSBA5MsRNCJMyV4ogJjW7mWU9NmGx15vUNNGQ7WZUANNCJ7wf6MqkDxadSy6kDE",
  "key15": "4irJbSk1KLUYLK9wep4FTFjQowgrw6fbFCrxPyajJdSXNYMzogGnM7nEUDoiGYRXgGoTD7nNaj3AtUsSjPneYFRi",
  "key16": "3fU3WQWH5GBvyF2RLi3PFJsTv2eKUeDgKo6PkiFe89FNmTx9zUgoB66MLUPMhx9emrQLqre54B2TKbGBFwsqBgu",
  "key17": "2Vo8fpviAB2YJ3gei9vkXiDeoQB4dzBR4gDAdNasMS7TrujsQUjQ9yy7Ew51oC7jGqdiw7nMHRKooLUzEbFn5prs",
  "key18": "3HmoH77xfbw2UmSZcahcWgL8Xr5B6BYEbmXgjnYX11X1oQ4seKQtT98avEywVMENd8F45cYToqu9HVTH99McS6G9",
  "key19": "4Z6NL235XhL3kocc4tWHrU6NnwpWXEy9q37DZRz3rt1JsVrNzvyLNubqGgT1UkBUaJvLqHpATxicBq2sw94T7esw",
  "key20": "5Nzz9m89aN3YXCxZAZtTAzu1FgoNJQmGqyaQS4dbKi8XU6Fs96JyHhaoar3JAQqpdHhpyGwXytRrcqB2N9S4rGvQ",
  "key21": "4WUFCN9ToWxRSso8kJ7cGkvQXdpXMMcu3ARSV7PEU34fMSVJU5WfZVjZRGkA4JVd266NwNrERSqyZFUkiiGaF1Vh",
  "key22": "4ocDZRCgZeMtemfZA5bDqjH7WF8a5DLGReHqU43DH33DoG5PWsJVc9XdTBard2WzQi6XKQcAbAusm8jGBBXE1PGp",
  "key23": "2NRsy8dTP3Eu57t616ceFjiSyhM3yig9uZ8Tg93pJeppRzG6SVtA7sbrpDbNxQr94GXcmmYbEw7LNKumUtoAJEHa",
  "key24": "23kyQRtdPJRnQMYLkuh7rGEG6GfVRrRcZR48w8dPRfCgJvb4EVpaZzBrsKPxiM54vYzjED7YUHWpxbEq8YzRoeVS",
  "key25": "2UJfnbz1452GuUzuqgWf791DDXV3RYQqnwULcFGf8S11NMNEEKoKJi51dC84N7AGyYVQx3B2kGFf1M6SUcHnE23c",
  "key26": "4YWDUgsbyQMoggPAzzSu3NAVT77uPKur2WL3uY8qETexQxBdeV9ULnkTzgNtRa32Fm9yD9JUDXFdZnQ5VuBQMWRC",
  "key27": "29rXpFp8ZxqPdqAk9TGQNieMMPkTXdQsZWwhmL1DYcuCBpruGhqy6U6gmrxoofbChchzczZDiCYUQUchZVfVoH1d",
  "key28": "5gnkpX88BD9pjRwN8fFc2n5gPjX9C9pWrBH6zHEHHhUJZXTe6KQWnQbw5gByQyKnzwNK1BDNbB97sepA8HwNKvBA",
  "key29": "4KLr4JDhw3HMz4A2aDaXBPw1zUmjRBUgd2sBh3yaJQMLRcYfmCDhMVakqsLbEyQozQ25DDfZb2JzyDBd1Qwu9hiH",
  "key30": "5wu1ZZ9vShncrBPUux7iPC6x5DsXm1QvmMrnT5urQpSUaGRDkLKf2cQgGvsHVfwkCnxaTAmW1ibTCTZLLkEJhzsN",
  "key31": "1iCNFgM98yFMxcizkWYTEM5NyAQB4b5GTziu3JVvXMstfaiuULVNEGZfNnM4AjvuM7w9i7W6W8AinQpxDCGfDDo",
  "key32": "4FqjVqfQ3crGki3LeN4JtyPExhr92pUpjBSFB5q7C7JQZbo696A6qpZ8Dy2PsMxEMqWpddguVmHeYP7NKZWpuJ1V",
  "key33": "4ZRRUPLRjpV71DqLZspotnYpGRupuRm9J5XMBestVxbyZqmV8UEWYMrhX4JhiafLytb68mh6RMQrArfbpZfhuy3P",
  "key34": "uZYH9S4MVNWMLHn4X73ZWmQSPnA5iPrcKTav6CXAmThTCz7PCb61fqMtFaPVyCZSt2VKSsZR6CErDZKctCZR6qY",
  "key35": "29gR57oaXFjcFNS7yCnGbE4gg6wSqfemS3GCVai4851KVf1EzYiSHruJq538pUC8KGAUNn34TGJZ7oxF684CAXxg",
  "key36": "417eRvJESDsU8BxFe8tSBL6kf8Knx6MAvkdu1FL8RjHafMRjEshZpLTDj2Vg13L6hv6YVNwRKosbSAT7p6u4MHmC",
  "key37": "2awnWHtnw8vAdzCHJEYjaNVP7z9Tccr4xZxPJ41gzJxYRC8tQegi8zrqUrfQWdk2XiVvoTcigczVSRk8nNPooAUB",
  "key38": "61TrvRUpDUNerBxK2QsfPzBa8yWumXdHAPFLezccbf8X42zDSyotSYmfQjpU2yH6jDR19FPERj8TfFECaxQCDXxJ",
  "key39": "5rBbVPXwpQKzGfWt3TtdaNXn1GH8msK12G8bPwe9Ff29VdNTHDFa7DyeXcDa6yaMrNYGmjhDVgXFQQGUaxUebvRe",
  "key40": "Y8xEcNcqJ2dCFMspThRGxd6vWAJW2NGKod3d29wUTdm11AwYG83zhoM7a6ESSBVUojnDkV9aqbiYMUNE2xEFs1D",
  "key41": "41BLu8tafKUGV7g4rNDhBJwcxGa6kLiihijUitCb7ifgzZq8EVithdVvaApwAADBTNCTWipu3JwmUpiskGnRQibv",
  "key42": "iJi8rdZh1rC8q73oE4mX9wtMZgnkdv1hqEUYYa4dM1RD67xCjTBATcY1GXAwNPXVx6k54BZ1Ah8w6FqmVUbJqnv",
  "key43": "4nmEi4rU9GuTxhjppAy55yb72JXtNq9m58Su9n9CLVCtVVyM2bUTxLZ3X8WGop5UQYrcAEKDCMg5659TsxQCbeCz"
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
