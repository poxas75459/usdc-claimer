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
    "QzHjTn9xucuXLaY8XywuFLNChJSRtDSRUfMKFHy29Lm3PHAP2W5qx5DvRJL3A2CTrdaUZvyAF6RQ3dNz8pBFvHg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nLmhvLvKdseUtNrtwwfRvu84RUkDVpNz89kQ2jwAokBTEQ9gGnSwJ4HY7Lkpir69GoZeVTbHDHApLsVF2EQUYCS",
  "key1": "4se9YkLASbm6LAKtCWWwK9jeX8tNvEhYqvzws9ghz9icKDBQTKPzKPvYRKtCZyLe6Z15YrnWLVaBqquUHxu7MpY",
  "key2": "LsdTi934gQauzWPUR7WbbT9DaJx4MGLb55X2jHimpmoxkri7rQouU4u33mLUmP3FSdkwFU5brcCXyDWVd6VyvXZ",
  "key3": "4B52zacnzErkLBoC2wxc9p2Z94qiU4UoqA3McwiZ9HJDV4RU51NLRWsqQTdrbRg1bPhEA3NWmQdov6ZkF3Y774mo",
  "key4": "33xn4bCu6Z6Lrk7CCWfpr2mNUihrLgk5sA7Mzu5ufritXF19RwnRUuZAeGm2oJgPfsNKxduQGFuh1ZJxnV8a4oDG",
  "key5": "Cv5xQqFv6PZ9bpYtnDyBem9CfYFQRsHXLZy4HhFEHpF3vSKm1nUZaXTvc4TMXHeEoavg5kPy4QEgWdWj7mszkBV",
  "key6": "3FG8JVuHh6UhKJiVk6A8sE7YZ1XqUj7PThiqqJcP15VWKbSrVuNVKN4rzDLfNJLcPFFfqJRW48igNXj12vYna8yv",
  "key7": "4Q3EJTD7RpZtg8v6bssFRqARFwwGZGZLezPuDBahpuEhV1GrY7Ne9nySaHzTG3gcyQuMbAanYCnNeyJbmbrtsCid",
  "key8": "474T6hzz5Btasye44ieHWc5g4UdBgth7xg4eQcyTK3DTRk4Z6MyZx9BaV7H5JGTJxv5L5TB6z4rT7Cx69YYHJVQz",
  "key9": "2JPeLHxKQDCAxjhdJLZsuPEkcmtL2tJedTKJ2BV5KgyhHA8zzvqLLPsHpXUdM7oaYjfmBhH6eHB9recm4R964Jnu",
  "key10": "3SHhfdPkZ4Mu4aCJFHTsN5V2VMgJUpA2ZGBGQ8bsmSZr4EtNaESxvypbGauwG3wW8iVLKP2UswXiTSLMq67u2TaS",
  "key11": "5NxSQrgJazgM4ybz6Y42XqmyU7u7PRa2X4waD7ouLC3BUYVXbErhThUxfjkhQmmz52aeNPjUXiSya6L5UnxLtB4V",
  "key12": "5L6rhmujgFfRH8zx1uYvK5334QdW7XVVdc8QhkdRcdSPZH5dv8vmNiQiYv3L5zBDt1yWKX7aprW2GDNj29YPhfkg",
  "key13": "jrE1oBqNp28qTdEnLZ4gH57ftMjTs5KbtB5gceYVmvHKP2LMmsdHhq6kdorYV3ZXiisWSGW2apBoprj7N5nZCJW",
  "key14": "t8ENn8Sogdk42uThq8tM5L8rbUHdpuVr1SVibTsY3noTj4gcjBCsQx8KgM5Fs2xHGoFzptGSj1EXCSuBDrhPpRS",
  "key15": "3uKxFnTTghD5xNYS93SPRNAtyuDBm6PVUcs7JUNYoXD8ixktmzHbfvomb4cp6DfawJYCiHLZp3XWiidqeK6CnYXy",
  "key16": "3NoAZJKQ8NLzWBy75DYddmwzv6cjtSzLhaeCVvqSfmT2E91B7oNcXfSRctz7P5BJzoT9aZ7qArLqsXFLLrxGpEMe",
  "key17": "2E9WEj778GoecJvxtBdrbKK2em31628by6e8vcUgwVGZFr6ozBW8YHP1j199oCGHiv1FCe1GirdcoeNXXgi8ok5N",
  "key18": "2wNrfPH7GCPb3sAYMT45RF69f43S4Pd7od5LdRZTeq2QooZRMUisB6GSNsvWHFymr6JmjPngLBJpm4EiuniTBMVJ",
  "key19": "5k2xiMNChfcHAWStNXkkCere7zYuFGFuWHMg6b63fgxvD1NzGJCwn4YNwqSwYGpx6sYngujJUBHK356z5d4tDCCk",
  "key20": "3ZWBTdPcxnyaGQts6HSUn97ADgKDtXkst7uspxHkTEViKKxkrhD1EpqinRCHTJoXR5B69RuPnDX3AYuvibjVKQsm",
  "key21": "64o6zzYoP3fnKWNsDxCE2DsXNGf9btk7JL91HH3FBrXk22WjWujTbtYS9dAunkmTbQve998V6cAmoxY5FPvwpV8C",
  "key22": "pnLyeq2PB8vApp79Lyvo9Au98cFpThd4oGJtgWPoPSX1hWopVQbvX39vSvA4fx9gJCakW4AxGnaogDhctDW9xsd",
  "key23": "3WuyDrgJSAhRfw7x7GhxZYsZuDsWBiBDJjhQnHP1BJK2NTx44M7P1KXQ35h8wPmLnop1EeMpkkPh6A6JGRr8Fw11",
  "key24": "ygbhq8NpXtKC5apepvskh9eCqFnikbuqodaX7Y1zPcKEkvXWg5aaMvEeDhw7E8PEL4F3VbHcfMYkHgkd2Y2wy7q",
  "key25": "49iL87JwP86QCdjqPB9xoqSVa8NBr4A1JFv7gSf19mj7STZhWPmstYdhZCKeuWGgZPu32NshQfVvxLDCoeKMs5eq",
  "key26": "5aah2f1yfBiKNQ3u45WRMM9Dcjq2ZtwnjojqoAzihy5GMXMm6hTxksA2JzzQtwfaUMn7Hrni2z9NjN25kyFyF4VM",
  "key27": "3wtK9LoFaabDyd51Su7cw9NJs9TaUEJiGFXugBgjYP23fA6Jz7QdKtutb16agftfJvNEM1B1DnQWQP2MqEV9A33H",
  "key28": "U5e1s6zFZCTSXGgSmrqfWSuVUstww1FkjHiXhHbhQAzsaJuk1iqZEMCjhe25cZjdmnkoeGTjCuKvbfXyWRrty9T",
  "key29": "3dBRGAPZwJofx1A8k1q9mjLvDyt6a6tXZ7cz66kCLWQgicSDnxQzGD7GSwR9JE8BvWsceawwwR4cJDA9zL2bNqsM",
  "key30": "4csSGYURtZ89Tam4tsXwevz1BA49fX6B6wZjMBXzHNQ6P9kdTkLqVvwyRwVxjQn1TnxJ8EtTpt4miL9TbN6dxBMj",
  "key31": "PNYKNr4vECr3JXuFp69pejvzZLXYWavTPm4hafFLjicQutSWkpAXywQRAPWy6jewRSwpPKsowBoH7BcgNeDPSbS",
  "key32": "5jEqwVDbB6KKbyXZXh7T9QsyytWTRFEi8HdrxDH9TLKzabmPz9Q69TLu3nq7uSXwigcHA4ZVY9HL6ZiNemxxT6cX",
  "key33": "4JgdfyfhxiPFhnRQoJayq1gcD8QXBd3PWEpxoG3qNQnntGmdheSA73gvYBybwFXAD6fcnKM42LJJu1TnR8ay9Mct"
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
