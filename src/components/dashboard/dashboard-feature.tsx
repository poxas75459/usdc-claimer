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
    "5Su94U4DhRuJtyPMhfXrebRgrNbe9nXYVaC2zezH5wVrAGuHUzmbDL6kpCX5Ph5maGfF2kaoGVXtcVDKs5vsMSXC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zCYLmJZekw5ZswTHgrtBzJCkBU8m6EJ68r1EDbLH3ZoQA7nz5TT9t63ot2SYDKwAvm4cGzNrAqoBMQCxiEkvWhm",
  "key1": "3tjH7vsVVUSh83KaQXEUQjkxQ7jkkVpKvVQcK2JaKH2GL3rC7J68mc1x9cgHkR8cLAb7inNd3v4YUdSC5fGG3GX",
  "key2": "3mG7WeVE4qEZkTWyH4nghF11itw6sSULHw2LdhR2oA47XCufixeFSvuRPBHccLPBzKgKTN9XnjcaoDXntUdnnGLQ",
  "key3": "4p7bEu8UZ8cuSa7U2nHXboBB9HQyvXm9ZoD7J3rMzzhuTEzHLdFfpCLZTBoyapZYdA1TDFpU2FhfRjv6emZaj77L",
  "key4": "5NWKce5Naz86NhmcF42hnJsKhT5ytQGCzA7gXJ815G7G75gqsEXVqphrJizzBh32Kg2aMY5KfXoBDEXUosebNRuk",
  "key5": "5dUte51BC3amL6jG5Uxu4ZaKN52atQmz1d52w9AzHCbdpgXz9zfjRG5Vn59fJrvD2Lk8RMLffWvniqMPPXucByrd",
  "key6": "Esz3n9bD3SniMV4cbyiQVZqbjGJBtPegDM8HaNraFNYhrLR26h3gse9MwkhPdsu8sJ1zRPwwovtwfEQUWVsjDeF",
  "key7": "48AfycZkjatPutg9XwDEEyaYBzLo7fLSbFUQAmyNBW5RTH4dHmPpBpWRGmApJs1Uoou8HCbYgJH5qLD8PLW5FkG4",
  "key8": "27KpPyQasqkBwjSdRof63u1QMzQGHjSGb4F3jdD9htLpFcN4TyDm9pHrGZ7Ym4Q9thMKMx6D9C8SYgJSQt8vaqCK",
  "key9": "2s5o296RU4zXxAJhacg3qHfdysP71Un1ge3xMKaXkdyaPWmjtkVAMPz8UASjqt4U8xpqWVqdkdSCT7NAXCsEstWJ",
  "key10": "2i1dmuULGU9eoChLjkR5ZBRV2yLbpD36WQsrhLPVTLi2Ev9Qc8LakAjQdsg8ZZJeNrKzLf4PVyjVYL1nMsCY1bMo",
  "key11": "DYaSrLraBnBByCB1AkFGusb8bbAGtUSCvZEUWFAnbgEj6yHX8s8FUWJ96tE1FcnnUcSgWxhadxyvpyoHnHiUPRq",
  "key12": "5ixPKHhm7EeJ4yJpkcB9kwsJagtJETePciRrGBvnXNgKmh5wmR9ndKSTMimGVyBQZsh2mBAQ8116c6umHhDivPgD",
  "key13": "4T3RtEYuTLuTAfGETPD26kA3aSvBFjCP9GxxogncqfV4Kox5fVywGEdFynRLzszAfoQrP4ReyhA4W43S4zMZKXUw",
  "key14": "5zQaXRzQzXQQGrwgq7wAeVb82tG3cVf5kh2bsNXroqAEXE4TqodGMfLNxCn66qHwQz1ahKBKoBTZkKZWsxQZDLFG",
  "key15": "281MAPuJ47Ad6dD5fQNgCJS3juD8jjiXja8ZmErNcad8U3sHXSNgiK1yVnG3jWyTgMMaUJZKZwbJ5aW9w6Tqy1ts",
  "key16": "5HwRJ7Tbd6cuj23LiiUuGrXzZtmmDBHurn2cTCTGSYMP9h4LK5nmWjUof5xf1XuJUe8DEvPGmAp7F7sANCYpRE5R",
  "key17": "4FXjbUK7A35WAj2vPS9GGvp8idLqKhJVcZZESHX94g3eH8pBfBoRnqCyMVBXqmT3d5MNnRfjB9gxx3afNvjdYRPp",
  "key18": "oSWr6WMYBiTKAiTpUDL4TM65FAvdEqJuPKmHWNschd2uLUAhmCtttrmaFsNxU6FXoq7UUaejcdntLQEPtDUhdSN",
  "key19": "2xYypyrpmzZheTTGcb9T3ZiZN2Wf3Upn2mM5vnxyzXfMrHPv2jW4W16pYBa7zQaRkbRqXu38m1SDCQXk65fEX8to",
  "key20": "3gVmmFoLKCQL27UWmbUQSsRPcWjyJTCGyDmSoggoVUV8VEF631TjFvc9r4efnCbdxFUm3dmHmobE3RNe9CZ25NE3",
  "key21": "54fbjgEZuQRHATqb6Yw2i42mq3sp5KLsnbenJSY2UkUCWPhEeTsVG7Nn6Hw4XCqWe3sLdaLtfe6pKE72CyEG1Zdy",
  "key22": "RaZCrgAFLfzJjfZ7p8d96RuqSZnKVJ1ARi2YUjTvKpa8qL7U2ab3FuBVRP6pDUCxauPrcFpKULsnUhNybqT7ex6",
  "key23": "3xG3BJaRhQ11ZuBWZx8pT26Bde2vQyUNJSeYAYqsYSGXackupGFLdwVbSbQ1JZvCDNJHXN3omVBARnjwx7er5bf6",
  "key24": "5HcLnspi6DAjitXxmpUQwRwSdqL3ZVgb6U3fgoqAU8QKseLwAubYKFrdKow7mXU2ewiYfJZiCeEWfFyqRXxzFUeC",
  "key25": "2dtnpcNwH55XRxkJTKKfKVkezLLjoU6LNnVYCt9b3tS6GWbktGr6w4SDp5R9o776rgpXGNyY4edKMuQtJJ51Sxc1",
  "key26": "pisbffWehSfjsVjzL6VjQrwWTh6MdWbaboGEe7J2SctxVDFAwizVKaWKG7Uah32j38PAxUcKJkVV9CCrs8hrWje",
  "key27": "5Cz3CzhCYhFeFV5ygRUhgQhi8MLa3otxnQ5AtNVkyC9kakceioTHn2aDtNyXMsFgZgGh7bgH4g2CsUEjRZ6sL1dW",
  "key28": "24g1WfwKaKeAjqBVzPK4cZigvdsNFAegC4UHiQfUeS3XhUL63MW6jXEjo1L4N8KRmiR8Tvy8xx1GSbV8sFWcfpGk",
  "key29": "EpUmw4s6rV6LHxFh8MpTCtESEtDTudmUmjZAoYszNzKMY2bCJ5JA1R35gnZoWug7Z2m5rVSEbXC8HQzGPt4NXKX",
  "key30": "58TJ6XeXt2Jps8qS3Qa7cv76jFNVfekz7UdaEtXo96M5mD6eagtjrW78YUWGJjeyrjCGLkfiXJJa3mPRx1WDAWd4",
  "key31": "587AV9gA8mRKmN6HJVmxDBuKGRwebaBzNoL6dZuhfHgXD258gru3VVY8kg1x5rmbTcE9vSS7Vf7uUPLLMMQ5Ekpr",
  "key32": "F9Joo2EUYu3iPsyqviyZem5oJ8knX3JnV7KeF1aSpVxwYNp7UoVbYtNZQW36NozWW6J9LNVcPPGvrtyMjt1QVbk",
  "key33": "4X8vkz41rFnXkXmoecxwWzYuhStv6AfDNV8n8VuEGdQK4oou8NBfSbZnrAmeatnCfxkz5mvApXComJpNHoFqZCpE",
  "key34": "22nNnozWXpXFbVGikFvgtJ8QwyA8zk5ueStbeAMhKX7c1JmQ75wsanBgTbqHgCQFYbDSeSVzHj9aMLFnnMjqHyhV",
  "key35": "2n7F8MwgASoZXFiKMGBKasfLfGvinrR15MnxXJFHJPdgNkp4CyoEEQoLrLjLDdSvKchdWGhjVpe25tQbJJAwnUow",
  "key36": "5yGFDtx7KGmZ5dy9Zcgi1ALDMcPhef96omMTAbqbF8N15zFndvqBVohPjr8ZhAyj6DZYi1qSzMVpzH2GKor3J3gL"
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
