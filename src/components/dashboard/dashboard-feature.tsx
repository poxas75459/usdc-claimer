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
    "3gScAfAhvRhdyvThUHqbaejTa8ffrNKXHXez5omZJ7JW6yQVaL4NRMqxWXSTe9T1EGDg5NCsxvj3HRVwX2Mt9UTF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JuwV3NGXY9N8wG3yn1JMcsDKYHMnu9xtPPAa2fMy3HCGHrevx2NxktLDd89kAckPHGwpn2XeJrctHpuzyf5qoEr",
  "key1": "4tNJ924mTbf33hjeC5Wr8UnmRhM81xnzpvQDvpAh5X3qnS5dTGKdgC7g4qs73x9xpqcqFTVU95NcyJV7GYgaw7RX",
  "key2": "3vByYCZoYHJC5hwY82doNuQjzwJu3GBpJASTJLAeANdv1X2e5M7DGXdxUSACNCmavQV5BpwfizzwHX3u78MFtaqz",
  "key3": "4fo74VovkiBGNrevQEoT8EVqhJ3B3DQKLn1CVS9pAYuZDmbNwu3ueLyooR9uDGcR4taLBGR8qkLFACF9mUxjXpiY",
  "key4": "4aUMAhadg9qNWHV65fEAYdyZGxDa41EEUXDM3VLFGd81Uqm3Vt8N5pUj68iBS4HuiDz9LUbkay947NC3xhLXeWCx",
  "key5": "5zrm2AhjQNkUAxmV6AgkVDaXxwBZbgyAi2hwwBsGG1YvaUZ86CCuYEAJEFwiQJCcqaKHmzXTfXpTrZepWgQpukmf",
  "key6": "2Ro8A9cA9ouCY8sfNhuFcy1LpUDAoM6da3eX5Ltb5FMGCEmCR19DWNUsG7jP12QuDUWnUhBj5XjbYMd9WmEGSg8K",
  "key7": "5pEUisvX61miQEpv4UENzKzoHkQ9RGRubWvZZu1kZHDGLzmvSNhppd1y8eZaaFL1MvJhbs1eiNv5Xed7xdhhHboC",
  "key8": "5steAW3pMCYJFmVYn4TWLLPMVqDhhXhk1RoCzVRjkQfH5yKaA5pK7vNt3EB2cVfHb3fcJmK49nurfJNVinyYTCsh",
  "key9": "25GeQHjcrPxEXUgLfsPgEEfRkusMifrQAc1LsDPQgwfLCAZUoJ51kZAkS9EjHVCTX65PNBSRCDMHzKEGcJwFoLiD",
  "key10": "3PKu5yvBvMjaR6tqZ7XAx8ifwUDwuq8w19Q6yxskNn8YspvU4m37hxi2ThFZULqBfXts9QFzL8FFvDQGGAyEbgYi",
  "key11": "2eY1BLQ8nrAQeHsRBjzNfcYA1KcDDKR38H4kk33BekRzjGs9PMyzMXeGgBvUQ1KHj4FieAeJ1KgtTmDXjiyRhnZn",
  "key12": "5kzEsPvnepWneqYk9C4kw9CEVtthBnWe6ejrG1Rnodev5s9aAuN2ft17gsEAWXnGV8Vzr4rK52jhAjqfg4B9AU6p",
  "key13": "4EszZysAai4WfKgd6C2RPxGyzMPsJykXxQDWT84D6RuzYqZ2mLtNU9opsHbnFYCjLzYCpCd6cQo4n5H6vMyG8pEH",
  "key14": "3gdh28JT26sct4JpRaAL9GDkFErSW2AxzG5X6gxivvDi7HK7nSZpqPMF8yHmLKDSoijTP2iz8M5yZSRpiKp1V5Sr",
  "key15": "5mFsReVRYQPitQdf2co4FJK7fi4AVzMDeHBic1ZVwbPLzAqTE6kdv2QNaSivQs8mD85FXbt73SwKBqtoB6gR6QFt",
  "key16": "4gMALyMFmr5wGnbh4u9njyz2sXg67g2k5n5C6ytukft3xwMUZ7acEh3XAMpNbNzKCxjUbQqmRx71AYPkYY23kpRM",
  "key17": "Yh2bymQaGaP8Zf6tNYmah5if99842hFUEsieDRQxNKRopeKjF88qsNRePjiiNX7SNeMr9sx2ic4Gfd3YecjnkpX",
  "key18": "44nDSPQ7qjpfVPbEMNEHBeGDLUPCRxebP29WRgbidmXuEP3wLmM216PM5nUC72drLiN848JuVsZWaPECNBeTNPsD",
  "key19": "i7fPhGvEMAZYMfdTGFAeGpszcPw8ftcVt7YTy2zM4Y5NiJtHFPhnFgbjWMvQqCV2aoppJXRoHoi9jCELhEhT2FE",
  "key20": "5By3xyLgTHgsAQ7BswnigQjn39HvcFKUHK3XKeprB12dDJehxjodSL2Tbgsvx2ZJnCWvyLtTPyYjgi6m3BZVUKxi",
  "key21": "4a1JAM9MZ7WGDXVv75rWHyMYaCSM94oQGWgxN7MbG1G27RZtcmGEqMyC5YyULoZGQLo78LQNCEzzCFuAjonWqDeT",
  "key22": "5U8dn2s54SryeuVXBhHvVTWCx54v76B9Zc9LSNrTiZTbsxDDCbqhK182PjkHEHpbvmJJ3zjAU77icrQFoX4BxsUG",
  "key23": "2PSs2xhuHTLb28hAKctRV1SzreYUWpncKtSTzuumeNRtgzs18viFhMdGHYVXH9ZqN3SYQWtUFD2GDtNVTQXhacaF",
  "key24": "25Cn124yJBmYB99YE86EpfNSaCLQPRgGZrbKZ4y1PM8z2BuyoLHV4fzVn4sBPcQUsjG7eivC8pEv74FgKRfkpT5C",
  "key25": "676N9rv8DTnyW7vPyFuQq6FnLnymTqGzxjExF7zFY8coJYkBA5bnazHi8nVwp1kMMjhvRYkM9JJTCxBNGuEFGqY8",
  "key26": "3DLthkg13rCVSH27GSXXtnoCvN3hSja1Qu95hNvNJGnwTxzCcqNHJALGi8oPzoa9A1AriLh9rhJbAcewsBTcSXsw",
  "key27": "xNiqhLBNNvuoZq1EUg1AoV62WDbXkBMJvvhBuDUJYcDEA4hLLbC1TzRAjHPdFqXeA5uBjtPpGMGf4qMpj674jgV",
  "key28": "2RYMUZnxyPFkRaigDzjdLRVKyKaTnZaFiWsoQWqGW3LC68FDXRCB8YWaPByfbJDaEetgKhA6pVazp9pgVrsinMgP"
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
