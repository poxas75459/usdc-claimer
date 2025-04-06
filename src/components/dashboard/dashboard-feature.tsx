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
    "3Y5wLN3t3jq96HXRGZydYCbUdzb2A8iR6Jv43Lqgrz7XYWDLTHSCJJ89GDW41dgf8jhKpe3bQa4pcovPMFXMuXik"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y9tuGfiEdT3hauNiUf3mNNXoZ57JSjEFd1eVQgNwcgKkDiWf1T3Cu4mPnnXyD6fM4j5FjeBFaXhQ64qdsUn1ASP",
  "key1": "fbb6obmy9skSr3JCbtv26f2N3dJyB7qi6cCKwjtVc64qEFc6L7kziWdUUMnpdy9qEibkNvCe5JCNivA7kc24CKo",
  "key2": "5CsHxz2jsGWtJesW8czb1EC22nauWwWnobyHnbXmEHGYxcr2i6DoVP3wshQmGYKafnxv2mTTVqg3vLE4z9Shn4Ny",
  "key3": "3nc1FwjXSSWSHgfzHcQotQNioUGHZs7xJmY2axJfoftNKvuCUeUxvCdij4coZiWw94wtefcgSMJ5fjr1KFis9SfG",
  "key4": "5nSzNCtbyDLmq3JevUKwXKgRpWxcxBisWr3vgtzKhr3seJZTq5gZ6Dz4oY29JcjGwdx6sRU7rgVhKmDkv7Luvzcs",
  "key5": "4W6XWQFbsnuDsRmBmhLa2VMiWkeQXqaVfZ1Ed6vd2QxrcsKKTbLFkWGgGTqYeiCfiMZuwHtb7sVXiw39kv8Exxk6",
  "key6": "FnAdyw4eQX9VDZgW16vRbgjTJ53nXCbExYeqi6ozzKwQJLPUe8cFETZxdcptqHTWFpPLLhdks1tTvPLKHJ2A6Bi",
  "key7": "EpcWStpCyG6tnwFBqGwAttsPbRBzeqNCGDmMBoMyPoQyZsST9KwF2yUtWCoAxinYYgsjLfWc4NyogoEtJMebzv3",
  "key8": "iuLGWgtKgqKHEL3zvGWSNnca9g3T8H4rAyjiZ81AVovcEerfeyoD4E8giqTdmM9pHC9JtzTKMhss95n6iY6stkV",
  "key9": "5LfJXK5KmzFNMKf6P7ZZcJZEGThXCH1aTzGXjYWY6dutXsvAYGJSzvMACqx7xZdmsaFaGo2HeRNDoZ9wZdnj5Q5Z",
  "key10": "54HMSwNcWVafrZ1SwRSQLtr9J6CuEbRuWmzXS872rce1eJi9SjCMCUCWs922t2fDrxhnjukRMdfyRgwwvX9RyX8d",
  "key11": "3B3HEHA52uFaTt1cRrNmrx6L9Hntt9K9De99XdMwyi2d4q3RqvwqmE1S7CLqRUFC9xu43kvkVfPY8qgmr1AAaBrm",
  "key12": "5J7VSdATrr9QfEiKwJzGvfmswi7oSaHd5YYxj25nupmhVikQZBgSG1xNqZUNcwvTesWG6AFqNdmwrWkvzXrHzH1p",
  "key13": "2dt14kB5wEMTAx1NLcUuzPgXkyv9yUmywLtaf9QV2QubZfMRjLVd223w14WY2e9uQuh299AatBTmPu2cLNid94ve",
  "key14": "4GxnF11g5LWsqNHoV2byZFw3BcKWwXuWQCkcJFDczbzH2KLuHWATF3tCUXHK7m2NQxPm3PsX29Z9eG4vMZzNmyb",
  "key15": "A1bMzPgGuFTTxpdEv5NUaqzeswTxiXhEfzNLvbCAqns4RSLZTeRqX8NuixF54ME5VznvCxBQoRbvWq52p7LtA7t",
  "key16": "2qJjkzzZWorhcZy1tJR1EbWVRRqfE9m8dDGx4YrVfTuiSaikzg77RJoLMEyv1ubxWDPyxTj6DrW3sQHGNmJMkTw6",
  "key17": "4eq3qRN6fqAivFdJF2ee3hPB87nzqDoUCbX1yyCSGjUNwuwR8x7zk4EJCUaNjBiP23FZaiH8dgZmcskAJht1qXR4",
  "key18": "qMg9K18W9T54mdo2vczG24Mua5jFRSXGe91MhotsAbF52YvPraqkf2Ga6djiCnVrWJ3ZVk7EwAytpChMa2Ypq4t",
  "key19": "36jo3AmbmxxTv2ttWjXGXF2BzxYUAXw3gYB5X7DpRf2oq61braeW9HzjP32hhANz1BKSmZ2HtPfXFC1yGNpXMEKM",
  "key20": "3AjkRgomBA66bcKVVP3oMR1ZR3Go49NtDJwvhoD1C31CVLMQwFPkSrF3n6kfxm8HbKJYTTU8dtWGDLXZNrqeZoak",
  "key21": "5bZDjoUTYkRUFurbHMerABrYxTFbYeL626KVP2sk43vsu6os9tu5bN1WjMXFnNsZgqPnw1fdEuJDdg4nJNASr8XE",
  "key22": "63peMbpHmLJ1Pe4YXe4PJoA23Qh2fbmfgyP2cVykx28obJYV7ZA6CDmptAs25bee831U8hZc8tuwbbVMGX47Dehk",
  "key23": "4Z1MRGHh976Rptmrs2KWHJTEnw9XFpXpgiTmDcQsA7TfJq816Lt7D1p8eG9Jhj4LBXcmeVC6Qf4X2RjnkV6RzmpJ",
  "key24": "5tQtnD7zeVwz5RWY7u5GDtpsaqjGBVVzUrPUJMjDNKbggsMHwsT756M9vWyMWEu7F5KjvYqHEf3vEuD54TPgzEgv",
  "key25": "7NtVest1gj9N2N4UqDcQGF9YPT9XcbwogobDKRnhSpnmmyj86TwNNB1bKMi5k5ZiHULxVwocZm6rdszaAzWTmoX",
  "key26": "4MTSVBm9TnbSBhMaLuEFYjh1GGKy35cnCNJmqBugDdhj4EyKivreDusU3adpB8poK5G1WjmenLcsi1j6NTY23a1U",
  "key27": "4vQeqSEnzv9jTKY2jjNGku8wwcsheYzBNgmZmhxLkqz1whFK3dfBBHuEzosyXEkQQCdKhQgK9f2okTs4CjD9W7st",
  "key28": "644ma7HWkRkN5Fg6u8zAyDMga7MiwhTXFAKnBKYUV3UGLC2DNyt7RVcDaUbFq2ojd2z3sjsTf7vaG4yPXuxECvpV",
  "key29": "3q3o9Cc5H6ksK3hfjAmrjAcX9M1NZEuZT2CJhKMx7YQef8Zeo2fecD6yrKxEKUuWJsae8MQ4PYiymidoqMmttTPu",
  "key30": "2aJz9NcWDj4BXpdqfqyqLns7L8Uoq9rCq71NnY1MRkcQ4d6bsStkizXQEG95ZyE7sjEdW5FFStzZMEHgzPASN5xt",
  "key31": "57VWZRydAVV9UU4Bxa65d3ZcLAFYGHcebYAu32dhuxh3fANs1JwxnFpFBkjkiq7QBUjsMvZz557eFjzdvBLz5ibp"
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
