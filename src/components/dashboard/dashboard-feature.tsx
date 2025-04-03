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
    "5RrZS5iHAG2iVz1u29QCDCbgVnrauLZadKAPYmf3X7TDRX5HJh94iq2HYVtrfwzHjEXxkoxSgbw8BED8kthn1Cun"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mC3zS5wBRGZq2gsQGCNoraUVK9HqGAcLNHX8LDQmSwDKEf9k8yynDSjQB2WxP6uqxEuG6REe5DxUj54rT9MvUYB",
  "key1": "4q2smrgQsVpW1zAZRYhgEb9MYntg5FSt6rFWJLwoLjpSUKYjDfv5nQnPTK7NKSwMUVcq5EMnDZ6WrXxCTjbpGuB7",
  "key2": "KdY5senYntum3vJdRmssxefitPGdhgKDoAtu9PRyPJhwM8riZmqijW9HNKkA2VdoysSWvNFsCrjxE9f2SumWntH",
  "key3": "3u8dw9aybfncbdPirY5VymcLUwhvnHAej535iReMjd9QFdesoyjnuhsvssRcrQjgbYCmmrsRVqNVn5ZtLJtYRktG",
  "key4": "PCjE1kDh29oR57yXVyNMwhudbS7vicWevUVupCWjKBsqrxJqyfgS5mRQT8Ve4iHwe43GfqBcWJP4gYFeL8T4iiA",
  "key5": "2g34y7aafRkFFW5P8mERcMCYFx2h6P7VszPE4KxTzrMXmxqyukN5SQBLTkdhqzrqaE9oAifndLS5uCtJ7tngD2gz",
  "key6": "2Y3TD85sRGdiXPdvcSVn7jwStUqTGdrJVPrMpDtisjpQ6Wiipx7wSEeGWqaWTZHV2WmfCXbZ1a2ZL3yZkjsxvnKs",
  "key7": "5TrjFqLMahQYuuL7c5M96ikkJcGG4hSK7un767aGYizWGegGYvhS5iyNr1hk2NdsCHn5cGzw4jfag8kGzNJU8zyB",
  "key8": "51qVGaEU1gLBhXNr6ehDSY8b9kYfnps42SYMJjQtY31Dj2f4gDutWDvSfV6rm5AAwQGbWJX3nwXgw1cDszDYaVW2",
  "key9": "4LVoWYa596UwTutLYE2uMuAcpRYedxbFcF2fW4BPB6ZNCb2zzH2xnQiKpyeYMyuP4qHCeXqyPtzKXLpq7KzLc7qv",
  "key10": "2goLKXWbCBi25d7KHPYRFs61Dh9Q65Q4Rq4QEN1Xxktb2zwocMH7jv293mLM8xBgeu2um6iwkjfbDVtGaZ2opfJj",
  "key11": "bTo2XzbrwJy3VwQrogfmYXQXn3mWw1WUgVfQnRU6pf51W3dnxXJJ9eNWLhUS9jYyE8xDKZVPEwN9KVcwnASQxjk",
  "key12": "54WHh9217FCsSzvpJFReiJGnM9eq713g8ywUL97Axk9YvACswFM5g53tRCzLK4bdp5PpSGk4Cat8FHFVn3HkTVNi",
  "key13": "4SvzfuduJX6WyZgPvfpEgryh6hmkUSWiShiNPK2fGSmn8FLevFrJvt8jShrvRXPiCqYEusLJuTGJQWTmEPNMdYn7",
  "key14": "YTyE6GeGPnLXx563L8fpAyLc7NEiTMibs6dXAvxd41JHfvd4R1mXrN7fzEKLWK5CAqWShrgRMiVCNFbquPPG3nQ",
  "key15": "3YM8Ra1Via4X4XsM1QnsyngqsDmK6EXbQGDAFqeB8ubxzcxRvR7JXNLVVWWKyWLPK98Hc2UxQFjM6y4huhxpLeyG",
  "key16": "4VPKKvHX9VmZZyTNG8i3tTuVMz1pRVBGs9BY54r82BYyvXHSPc9paCCP5B7m3FZTWry8rL58NW7AcUevhAcoyUor",
  "key17": "5oatHj8pYvhHugWjuuWbzfYo4CLy7f99yYp2LGk7L4T8yLWMYSMzHqQFwitiyj8CrW5EJSMcvFfXnoKY3BJptW1q",
  "key18": "t4ZKFwBSFuX6ioW28t6H3AfcbnjjiDDdXhFCV8mtWoLxv8f2pLuJsh7ynPuxfCVgguA5oGQW1huc5AGbuL3PYAn",
  "key19": "4kfkVckxyrfYs139bjX6WAtvTHKSPdxDVhTWv4nivbhM1bVt9NGU1GxagSwwFikpaCEbD4kTyF8J1MgumjtV8pbm",
  "key20": "5j8sKt8bt55b79ipEiDrVJBumPifZd47PQZ16WLYc7FGHNBFwCwhJRG5WZiWePLwK72tkZoAQBAafVffddCp5qpe",
  "key21": "4yBXHTdHTchaiH2qVG4t8pNjhYVoBVAGshW6qrfHe9eMGZsEvr22d3uF3hU8MYwt6UcU3iCzbkvsJLUpRjikngTm",
  "key22": "vGTQJTuybQbZGFc3DYaLpmyBHkg6rkabf34e8D91xu66YtvMsdrDozR8BVGJRgt7ckETHPEptBJey319HDFPywV",
  "key23": "5K4KVPPqXv5GpBR7JmZ8fKSk6uaSETDqTPtxMNKtm6GNTfP2YjrRRHarh2Nq19ywrv7bprPdWFXJRz8vYKSMuVeL",
  "key24": "4ndUWzXnR9LeaokLbk7BPyAXjVBR3B4ydDz3PtrGFqzrn5PyRR4Hqw5x3RaMLsMmqnHaiAJ9PoRHz29zejCKHQDT",
  "key25": "3CW5X5yP3aDxgMQgmqeNoUHfGxKZwZnykvTMd8G6HuAJUuPgKqxJaaTEGYrDVoDxRrKnRjwVyjyBdWxhRMjBifYw",
  "key26": "4rAV8MSgsKuaMF3FbYgcgPeg6ftAHukxfZa3wKzdUwg2ZApHJCmVfz8hrGTUfvgiZErBxZJSEkAZ3CijsrSuwwHv"
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
