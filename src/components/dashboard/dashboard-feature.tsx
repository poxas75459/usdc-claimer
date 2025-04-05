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
    "3PhFc2QVwbjhUMctTNFoWgm8SRAfJg6CCgFpm5u71VToDDesFVoEv7933xsqUdAwBCKZiM6VKUjC7M1AK8CWhAxe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FNoCBA1HZvSsHbJena7Jf1PZVcWQmZnJdr4AjgR7ptE58DMtFMSYSVXmnY9ob3JgEAwHE8SwauvvBksPzGbN7Cb",
  "key1": "66Sf8JDfSPQ3R5NGxVnMc2iRTraHxAQENZsE9CsoByp72EAE2M8Xue1Exvfsc8oV9WLG7amwSxNq3yktJeA86cC2",
  "key2": "59rJsRUtZ41CA7kA6BqQmz4rMBeuGLorTr1u8afLAs9MwnJuYfFumxdAQKpVKJhGdUDwt3u9XrLqEpMEAE1fo3BY",
  "key3": "297pu5fb1twfbxnUZ68JuVC6XfFtANXNh66Hhk3jsffsSHAgLcV4uYqmu4EvG66wft5DozzrKw7K82TvAHLt4cY4",
  "key4": "4BD6WDnkrwJ52nBU96YiDKPZEZ1m6aZ5Rqt4s8VYZvfWoda53Z8Aki3GPKQZpvs5DDCHoGyGY2xQLu1LAMtVQq77",
  "key5": "2YbNnAp7fizRJdU9mvhWW2zDALLJf7NxdH73v82vebXVGM7zX2GWiYh6F71TNKAi2VbBUL5V7mpLq2eUub3r71Pf",
  "key6": "4bn57vZoUvx74aum197WEjTHC5HNTF2FKnqckRq661eAWcNGmBDAngM46LaZt44c4pBeWZBcRsuBFAXGNtdeytuH",
  "key7": "2ea5gYLXgJFm4yEaAKRTzsSAmJSgLSNcUqGqThEktA5JeiuGEUeFxe7mNVN85UBx1cd6qKWbSiS2UW2NDX9vhfo1",
  "key8": "8f1rSq4KpmjKMMJFNMf31GcH4pkxkTReB6F8fuqM2jVNxzfHmB3LuaMNxu8VFKqwVBAH2fU1BiVeVc1G547mLgh",
  "key9": "2MzPTH6cpj7h6Qw8fHNdDi9RiFRCHYBWpK6B3LUBVMNWkwMnr7S1mSnKwyqB58n79hAisGbAJbfedMjuMNFMdCJ6",
  "key10": "3EM8b23d9GaCR9FN2Ackc67vQv4j3iEJmgPDL7tBTjdyqTBeP6CzHuNAxXn34WJoBgkMttnumQSUANHaDDdG4zg3",
  "key11": "3PBp45PmA6C6gfh615ecsE7jmUhScdAEidCbSHBLwN5LKJxbnV8D1ecWQQaMaWLstBvCUTGrj3ngnQ3deFgVW6NF",
  "key12": "3WmY3qdEmvVpiYvc7NSNvkYpFi7F8j4rPhR7FQBN7SZfZzxpjYveK1HUwo53kfYbSXZ2MdYai7nSaXpiDF2WSBYV",
  "key13": "3yJGUnXuknxpFB6E9yWsLa5sadaghxk3ZCWHGLoRFqiDvjTTBWyMwFJ63dDoAe3b4C952iCXbKtEn7RHKCfBmox6",
  "key14": "3RzuHGdiF34byrGuw7o1vsDpdkkqg2CEQYzgAo7Pn5HYxb3g4MedSkxpMuMitwDWdDcbshV3wXjtLWJppCLueo6u",
  "key15": "2ugmdgLdXYaWGR1JMbNC7ZoNfkTtLKRf2JpWcAmLsLkrhiUBeNxSdkk911e1adtAxtmYGtDuFH14iMp1Azy55W1Q",
  "key16": "5HAS8ZuCz6unyZYwj8P8ebPeFCjwiPdGcSEHXh5LoQpVuBTzHtKYqRRp3cLVQi2paZSGdr62F3ojDxhZnz6uzU1c",
  "key17": "4pJq67Fg1e55wRYva4E3Xj12jTQAXH7b7GcUxsPdvh1T9npif9zi2SqT8Q7Y9dJ7tEbd9SWSmPjjDcawJykxgJ7C",
  "key18": "523eML3JigUCwWPZtQdhdKT5E6cBXPyd8SyPm5oC35sCBphfhtzt1hgUKKwmbTZcChFEgMTmxcnCvynbjrzNRGnP",
  "key19": "4UsePiGJEtGB8McSLb4Z57SJKwkit6XkkpkEt1i7WNXdeMCgY7dMURbZQFbACTybsvzN2ESnWycZf7Cgbnw3QuNZ",
  "key20": "56pyNFpppnvni1r1iuuyD6Lbi3DUU6ufN5VTa5ruceuD4rf5tCRubrcja2khmRu75jMQKmy9muJPNfGmy6uJXwfM",
  "key21": "QgP4JMEXfpF7avgKPWbwxjrUrMiHUeDbfCsZo5rgk1rnxYGaYD4p2nHhSUSvcDnVSjUg7wyMoUNN5M7tYebcoa3",
  "key22": "5Y1aoeqHbZRGz6sf8NiMe7EkfybVWP4kwyU1uqJDDkYqJKmJBjtZJgjuLDTn1mds7Npu1MFqzwGM6pzdGDcRt6G7",
  "key23": "2WchNYLRGgmfPaXrPH7Ya5UGFPLMXsWz91B6HFbp84C7ScpLRf3E24rPsvwXPUqMxyU4dDvDDL1tWuufwmD8choz",
  "key24": "53oEhH7s5dqXeTrHYw4aKh8FKCbz6ADWfT1rgjuxQmJryN31RV1BQ6jBpSzm5qJ4HM89foqiQsM1sgr3KYjXZGhf",
  "key25": "2YD4cGZSMU1uDbAv5ZMryhU536gGPGyBat2V8tuYiPSW1TxC7HcwqxUcKNsvQvysvm2JXrXefnfBYv4cPqPVS597",
  "key26": "33jw7j7ADA3Ug3rKUY4dUYNCZs1pXz7eqLrWkdQTfZ8mdneMFZMXToj36wyRZCmKGLvoTMCuCh6tHJHjSVF9BfHP",
  "key27": "3fqUZ7DxPUUA2aESb7cA3vPTQ7Yte1iDGrwBf7SGUanH6AkZYjKhj5F7S8US7RL2VA1SnCphqMenzcjFFNQeriYE",
  "key28": "3GjMGFNpBCtrCFPF6KVDqKY4HGvf8Hr7Muh7CyqTNvzEs95pAgNEnwthn7PKhsfpZm2ytQtigdeQqEEHb3DSaYLk",
  "key29": "1nWCghiHcT2VsGVSruMSjfYgXFTpZZiRpgVDDFW9hgBqbGiSwKT8fc4DXZMo2RieroXZXRnGwPSAUop9bWD8fak",
  "key30": "46swmJkiQDMwf6YGTQ7itcCNvPLLypt3kfj4aVAZSfuhQpskyqiVP7ZwWFRMG3LsEMKq1RTkwTGRJJb8n8hjoZVL",
  "key31": "2x2dmkpibwQXczaAacowBD8ZVdz4Y59ENKtTYXN5X38TpREW9sAKfnWi5DGMGqcxrEwjmYHbjiPpA7h6XwBEocKF",
  "key32": "EzFUPt61Pk9Cwir4BtHxCb8izF4BkTwKJNk8yEirj6JDdbTrZXApoofb6RXo2oQDgyMn2pT6TSUhz6fLwAAuJuP",
  "key33": "44GisaQLwmcpRL1m3L2FdtDBj324RTeXin9uvpRy7f62cvJvowXxsfnSTxovzueVvGkhDVnBCLyqopPHenZgsKbS",
  "key34": "42KtUq3okaCdh4rSXonhrh3ZHEsVhCtDndtZLjqJgiKtEqCThKFRwH4cXxoApgUMf68fozKruLaiCUCi8Hh3i8c1",
  "key35": "4zfaN8L5kh6HGQBFFgQKfm5uXhHb8BRsEtGUqxdaTs5zX9e6W8XMNm3CawKc9qSZFdv5JvDPzNwTvEbmGuYmAgrz",
  "key36": "3QEGU9Ut3buWupnhNKQKDwrfJrYcXe3qyK6LTJBjSFeo23udxXnHAhSzug7bTsuEaap2gxVnDtNV39oB9MxYfxY2",
  "key37": "5jxeaYQXuPt9Btdhjpxg65dEkUN5BqpCAupc413h9aXGkxvoEZSY5Pqp3jJEBscFkGwaq39zimbudfdhvxw7rsX9",
  "key38": "4cBshZ3kirjBCfzaumFQN8MHW9PSfScgHGXaEwM3gzyWZ7cenSnG9bn32R9KEHxbxrPN4amXZh31MnVabqK78zK6",
  "key39": "41f94HN4k6VzbBCh3bY3jwoczxWrEdZymLfXwtdP34ddH3X4YhZTqDm3gUs6jCPEjjzDDXuzq84z8eWeA9KcEfYW"
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
