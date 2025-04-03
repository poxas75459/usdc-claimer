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
    "4BHwxmW81hA8EaXcowmg18zEfZFmvNw1woo3TLQXnppRcMa8Pb8itEvaky5cYHEpvpT9t9qmj5Ntt5jTvFmrgscw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48rr9NkUTDoik6WLBNaPEBY3S7trA2TJs9Wf1ozM797tcPzdC5pcewJEUL6JvncdX94X6rgUbGgnG3HnyFQC1HzM",
  "key1": "2BXqm92fjFEgJWgAoisa2npYQhyu2bkS1AM9Jvpf5wKSAkQavSGuVFcBFShXXo17NSDpWYg56qAB8QwYg7jrYLW3",
  "key2": "zenbSTQ5EKjs6seLmq4cKfpR66qfMcmeqgM6FPbbLtbUEm7g92CayFZHUttqbTA19xzK9FYkGB9sRUBCXfdbvrT",
  "key3": "6gasHk7L87wP7hBCuwMFT12nCkKPEWLNd2FZAhhQCavGgnCHitwZJyu5k4fxxdr6Tj1FkznKwQ3Fu4dQue9FTgS",
  "key4": "293P9k5g7w6CQ1DBU29owqshom5sg3roNe4CafxhEPqwP75z5gPpCH158daiiTYuPs1PDcKm9iNpN1J7V49D4dya",
  "key5": "5QK4wzNb1tNMtGSnH1fw6JSMqqYEHBSy9ATSxU8184uJk69hdh1MBLm2T7Mn3GqHWH8pWb1njaSnS7gvjKJ8qGaE",
  "key6": "5pwcdroZvq3ArkB5PkcWZ4CsgoPQCAW7pxnDncZB6UkfYAZwf7VMihGC9XmK3qUVyMh5i9TcXRF71czcQBLb6bHM",
  "key7": "4dVUAyR5UmpoxThiqevxa3WLZaGgGUoVPFVSMBgJsC3P7sqJ8KHL8hiLtdtkmGQJczFpfiZ1WeZi6D7cHaaZpD8g",
  "key8": "7JLKDtRG9KaYeYq3BXx8DT85gQWwAq9qBFSnraeFjvXJxwgEd46B8LMrVLdJpd34R8B1rt83S5gZ6jceVkLopHy",
  "key9": "46DE5k1nqfExUZ6HyCRKhHtLvdHHwCv1ngNpjajfoE6eG1JDEKviZUYwHCPNBHYUB15BP4BHaGaTAZzoUfFGiQ5s",
  "key10": "4FqRTsNECj9MEnHpEHi3h1TqJqdq5GFxsc2G54dALEqrpxbGjr3gKv6SyJzTeCQj3DPmPwsqmPazSDw3YmJjg3o2",
  "key11": "4uVd3zB28xubrnGGmviieTib7pK3c5YbYfpaZYuFKBTQYAQWCkd9AoAkQJa5fqSbD2KaY5FZue11eKykHozM4ctU",
  "key12": "67bjEAV9F74VuhkPU8rKbzMVAyLF8DwVhUeHaaej6ThHGuMNSApjQ9GM4XCW28D2MpiEiE619EdPRkvYkKpbBDPw",
  "key13": "t8LHrtrAZEQnDTRRkgEg8yv2GwHGKBk2SjojqXQmFdVHCGXddTgzinbYC1GnyKKHaJk135P96XgCQsSbrb8BvJt",
  "key14": "5Zewp18i3s4HomUdzYNzFXCHnQJUHJFwXvoPS81MX9QGa37Khwg7GEz5jPdjjBZLjABeJCUDg73Xz8oxhAuKXPC7",
  "key15": "3SuQMCjgdy14SMTQUdcTP8aNhU6k4Yrrt2d2YyzJFVsgZ2F2aCFFcJVpA5Z8RjCU4xg8Zj6yy3YXkzHFrZyzhaWw",
  "key16": "2gCFPF8fxLXxRzUuWx4w5HuvMDgSH42dDbCfzuXm7wmCA7ndtoiB4Z6oX4FUwar5PYhYvQAotZscguZ7GUtSNaFQ",
  "key17": "4BFhzL6qa5WEyXLZ47j5SDJFKY9KtWg7sjmLV1QqLgTtUGGKgBWXFQqUfjxtVbEQW5Vr32NtUUokFAYYWGU48Shm",
  "key18": "yHmUUxbEciG3CmfJWDJeXDSCTyLANBovy5rYP4pV88icEnbXMStSDv4EVFvCJJbMiyfy2devfgaqBqYn2x2pArP",
  "key19": "dYsVQPGr1R9BFPpQdkXQCTAhTm8UXnJUGvwwVJ9m6ho9zh6V5BTgoRqV23wBWiVALeh52RweqFzTfMWeY5betDb",
  "key20": "2qDk6LiSnksmF41c9Sp5BMvxkCGgffDftTBf1HwN7uFQm1Waigb1YNgbjv9fctYdzjrtQqQYgnZiYej7UcFzBJRT",
  "key21": "5zZc5SEZqzn22skyR3ZhSPQAxH5RUEYYuiTHQwwJdBBqSBt6H2aEbitsBhAWGeJBnDDs7QHDzhFti9ofJBxL9XfG",
  "key22": "2Aitt4dpQNmbaWTpDLSuur92mHYmbHogXzPjkXJbzzmdgnSjGmJEwwhkXtnCDqevbWZQkQjbfxi7de4xvHm4DUDQ",
  "key23": "FeA7rvaEpnwkkaPA7UQQ2Vmvvwoe7w7Xa2tb4JqgkdzY8njtqZuowExG7yxh1rTcWnvyqpizLeUeU4Mnd91b2XJ",
  "key24": "3ngpFB6MYK1ooNFUCkFuDvz4cAtDDbW4VYfw2AhUPUD4pi2maER7Cac8Q1s99wJqgAWHjR9K1hwhPeWYXSqrEZvC",
  "key25": "3mqWTubrzayVAjaQ4xBYVRQ9zujghAPfyFYvTGHzc6eD6bKMig7L92etsz9oXRPVNCjEy2AdWmVpyiftSfTL9iGw",
  "key26": "4wmV8toCDtx86sepbWGtiD7816TiowwZ2zA4dRCfxrHnLfU8iSva7ymTXHqhwebK4LGtcBSyZEBvYDY5V66RBJjL",
  "key27": "rkfgzizj7RWF98STW4WwaigAxPHKAKg8EeyZ1RSXjNwMnFsyBp4RWJyivTuMuzVg8DunoccQajcn8DG8E3o29jP",
  "key28": "3yneCmXUBit23bD8aRngfQmPw1HBEXsxtDnygyxDMxdqFQsZnXeUmN5i8gBW3ZcBBw2UYjqKDaUcquSsgKZrT6J9",
  "key29": "2TFBjV5miaZzEGPLQqwhqEXxeB179aYgXwB9H4L9857UTzz2pZw2YDvE3exbjuJ6Tuyg37LKByUSxGsrVf8F24cw",
  "key30": "4AiP1DUwVtvqFHL6vEHnR36BU5XbrpPW78gvNLBf9MHshUDZZp9PZ1Q97PUAeMvcBJ2qsGSgtHBtUPEibLgCWRy1",
  "key31": "5kNFLhMSySGBLDUq4Cwba2dKQsrNAndB3XzQRstZUYmKGXxmaDyWuwtCS7fmeSt2PPKRQntTbvEeQQBtz8djEws9",
  "key32": "2gTBM7h5Ei4h8oJSe2R8gqFjodDhHJXTBofsUbWooAMP7Bd74zC2NfE4yAU67bYZ2ycWL6fCLmVy7cYrdSNFxwex",
  "key33": "2a1YJkiCX85wrbTS5spzfESvKa42zPyPFGejQKV6yY4BmVgp7rs4R8txMHGqXQ1M7cjLMmwyqZMd3SsmwM5kcYEa",
  "key34": "5rVpzSmUtYB6Ee2URnEQGY6Y1MzwfeZzUH9CwZRDCmbvKak1FFgoJhYUpiE83ybaDMA5vzLkruebVeFGbqE1wxBA",
  "key35": "3VgxaaKNtDvjzEeb7MSaXRg2nsMAq9Gdp5u56oP21zTE2brRS1xnEVtwKm3aeuyyDjdT9XGg4G2CzDLo2HxxK2tr",
  "key36": "2Y1RMeN9tBvJsbaD6QRZ9Jn4tbf9TUb9FnED9gCmNDa1SAraNZCgfkoEKoSq3rFWdsjKr5K2AWTg3fRSWVMKUds1",
  "key37": "2vdRSsNBVNcfHjaYMiiix2N73WRbUeUjSD63qdU3kLex8hHgUpDim545dk6MUhydyQYfj5hDP7ZYqmsrzK6n2zxa",
  "key38": "3zkWYA3hGnUwcNcDT5bMWj8AvEcfUP98nxGHjNZtzCBPVyFCg8HRn4RBn5S98M57Ze5hk4zQUHFE5bUdegAHPgEs"
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
