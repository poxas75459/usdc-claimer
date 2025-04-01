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
    "2dScyTC3vTcHa9pxrvKggh12FbKXWmxsM326u5KSg4PBKnXVfLhEuEPwWKXkmvVoUBHAkbNPfqTPT5jyhXiojYuH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xcZqDvUpfzSaBxdQKhg5sAXztFcJghXJKuYL8zL4E2MbXQ5oubzQX2EX5uEYvm7pU4JQWSZzvFVQnwb7XD3datv",
  "key1": "2X8zTZhKtysESUq6rso7rMof5j4eEFE7sWr4e8U8WKTCdUe9RG5hfG4vJgwu5b2RLs8znfx2vqVJ1ubPSyhvMN24",
  "key2": "4NJqTKHoSjjxpPHMDYBcZQpZS24ZgWXbvxqkHyxGfw4QT72fdnvHGZkH9fkaXKfSu1dt6sHducgpfdhCqB7Fmhpe",
  "key3": "51a8STBj3JqTBLgpngww6UBspE5jiWpYU3M1ZhVaqVaB5kijiur2MbodfZN3Q47nP4iouvnQSUh54vZorXa1HbkN",
  "key4": "54HVJwFdH2C4cYq9UaS9qxDHgFrvxBhvA98c7BqmNqaHyjN8aAvWe3VDoDeTqayvkdNA1uyF2LFbzLe1c1aYYA56",
  "key5": "2Kughuc9rwYpsZZAa5mydgXVwVgoYnuvcwSw1QsnDR1KVA47YU5RdUzjDuM8sXx16gsR7itGGiEeuiMqo9p2LnmK",
  "key6": "4ieF3LCpwds9bNp1Vxda9KyvHbi4wMDnVS7dg8Gx9b5wAo5YQFqJjR8nUF6Ffkbf2sg5dbJPeYrLDnePv31gxMCj",
  "key7": "5SUTeLg288i3ccgn2pZG5ZHkTbaZoHnt4NPZYGATDgFwpaB58FvP19tYqFBNh45ezbBxiMkAybf8Fif5xbeKjaps",
  "key8": "jipLj76b8MEnwAcsbUDy37tXJyG38DknL4bFcibtFeUtr5w27CU7Qb9mnkTB4yVaLB9FF2He91sFe2ZHMnqpPpt",
  "key9": "3q4q7r9VCPnJ3u4Eqj9vx9CDX2o13zTxz1VjrVSUtExBEGVf1Uo9258Pkf5xGgFqGMx5LoxuknQbJrkpDCHWj5db",
  "key10": "4JVn8SgxxAeiaLtV9aSgyESuLLo12C8TNhNGFppk1LXUpV1kFfPzfprfiiajtBkWAr9tM3cASt6K58j3eDXpiFz1",
  "key11": "3eqePsgnDm1NU7uYLB9CePq2V46JMLPMZMstSid92BUftJaCzbABw4BDJsXoQsdWAKeA5WVZWHFzEUusB8Gbi12H",
  "key12": "GKGxtrQxoQxteDJxzL3eSGjfveXUVGwgcPomohtukQSRRbkrJnWiXtvtPERT4A4M7fTE4G2YqQGCG4dFm6L7Bpb",
  "key13": "o9mEHNmn6J1X7wiwNQw2p2thvBbFbhhmnGBse5721hdbdtyvpgLBXX18TUd5iw6ChK3xyZ8KaMkZ1DfsKs2juJH",
  "key14": "36BdjznJBXAuUrZcVfJkSPsRbJgRcy2D2cxbuCSi51gvLLMDuMSVrrg5S1aw53ihbN9EwU7c2jZfwKoUWKXxsrqx",
  "key15": "3FqDZp4kXBwfJSEKnEfUaHZfftjmgcR99ahyn7KkeWcmH14ytHVUoE2L3xuYgaNE4MqDb2PYJFevJkGTzKJ1NG2H",
  "key16": "64468V36P6m6agYp1pDiJQ3UT7UjrD5VGZdZW42sXWS4yCokQrn9irvKM7GCxbw7EpGrjFTnkQVqnYWi6AQfoenf",
  "key17": "51LaczKrsLsSjotDHGJydppF6XvSKxmDrnNvkdJ9M6WQrqC3dJ313Jsb3LHjJk7M9pA64zj5mn3YUmWiAqwR4tAf",
  "key18": "3obw9xBP3QdnoSGUnRqnwKPrWtcdW5HbSymmGSkDmV8482wAQMDAw9cMWkGyB2fVwfWuZuZMJZ3EBwcj8ASUGKWZ",
  "key19": "64E3Bxrd3WN3eSYfKHaVttGZt9Qro2rRpagFhpPbAuzrTGywU8yEUCw89gcgxTZQCk86j58XiYJv6hVP8prA9Z3w",
  "key20": "vP5VmB4vBT1y2s7hH9FQX83hMgB1LmDg6etP94MVzVsmNMukAhp5bmutELPXyLfdTE8Xa22hpLiGg1Ecj7CL1bm",
  "key21": "4h8XLSCJMVdqCvoqjjtksNABBq3xoD99uMX4L3ZgkvBsaSUnNiLDgmDpJKhJaRBh3NH2Z2ztHtDicnny9Wm81tWo",
  "key22": "3Qu7sYFVwytFcj6emtwereHvYW6KZpf5Agx2957yBZnWtEvzKhFDJnBMjvcU84EteS9oeKAYcTrfmJnWmnKDPgCw",
  "key23": "2yYFRooU5E6YcBKqh3h3iLvVUS2izvhPi9wcyxGRcWsPHuSu2huEexU4Cz8Fg9QMz3M5QcKRcsL6VwMe3rr7xUYt",
  "key24": "2CgPXcmAMqVUWXLQAU9oNwsAuKyyQtgGwHJEu48czxif7rPu4vBUCdHQ55UUDKrUK8ogEvyzju1o1xxHXqM4SoMr",
  "key25": "5b9bmmZhPi352piCsrn6EdTQFsVoLYzy6TZUnKcX6mXEP3QdeNTyCy1YUfFG6peQeotLJafNnZb52Ay98yCaF7mx",
  "key26": "7aXrLowRkTxQjuFHBsotHbPiqPgZN5bBduMgKGaQ4kUsdEepsYVxMJ5tJp1nDVhGL6BhNhWCegpptexqoQMZ9dD",
  "key27": "5M6GYLqLbzR9ZjVhAduGXPhqBkSppQFgkB4ReydYPopoKFvu5sPcUMUWgk9W8uApRvuVmEpPZnRUhsJ7X2ZHmNtr",
  "key28": "2DBswVtwtjsodsWHF6ZECQtW5hKGbd6YSUCy9e1BbLLftbi3QkcN372hEZkKhg6VioAkZipcR4ZFxPDM6Q8rLgUV",
  "key29": "42Rc3NLskYYaE2uhrME6gGeVFmDqf6mbQZGoY4V6kxA3AcJevztarg2CeY5akgyPvtM4y5Rc7fnugs6h5d5FZosU",
  "key30": "2pr7JB2X9pQWpS9obvKLpLgSBmHBWAB8TqRP6J2jz2fDngyKfJsXvbqRv3pJrRfRjZ95E8avZzJBVtXxvDXC5n12",
  "key31": "41ZXrho3rgkfSBXdLnrnG2CBwBrJUGXmQawJxLGi7XCqLDgQjDSfRbFfhe1XNorfkuFZZ5f3jZpNgkntUUXLpGry",
  "key32": "47geXzobdBjDdmYr44PAiFTDQfg1syBqDyqMasv49fcbWrDsSLadFuFJzkgFDb8dQk4RGpqbbcACXzfq2ZmatZN4",
  "key33": "5q8xM55Hp99pFZ7QzZC9tVZzNsJRtqPjKVhcYF3mm11r4X2WAsN23NeCNfMbEipWuGzeWFVUc5dEpbodp6FBiyV8",
  "key34": "3xENJ7UCzz88WNhXXVJGJcUptj3JuXzDBXJosbh9MMnhbxskfFUKndko9bPYS9ia3C6em3mAn9GMbCKREfKAhoKS",
  "key35": "3LdEvzkAJNjSC4L8eAvqvnySE1H3A5Pb4puZGrebsJUZCi7o9D1ksbwRWQxxcxqxuYY5WPzfLGmmiEntD9SvZT87",
  "key36": "56T1QJV6P1ykJpqmPgJbtoZiSVbv6aGxk7VHvFckbre3y6v5Hi3NGxYmdZfxaonwfqn5bjQdr9o6MPQfZWiA5LnS",
  "key37": "4a4vUMp5WMNsvZeTBWJnHAAE3RHBoyXrt2RZpa48dXCaS7BcFWD2htTsTfJRGfX2z33VYKSeksUQspn2KGLgMKGU",
  "key38": "39uPBDLRSca9q4rdJ1nWJoc1B1H4aAuuAwtEgaWd8D75uNZAdiWGMMDs2UqwonjQLLBYBmDxN4Jx8YLXTmx6Xp9k",
  "key39": "3gxJVw1M7iXcua6X6SEm6GGASGC7gZgpn6uv9dogqaU8wpSzHfmzmKBA8hHn8JSksUcv3FxfAughgMHigBfbhgKf",
  "key40": "fPEtSHw4D6B548iJLbaLamkyEsf2z5bnZeD12mNAwJN2YoTujUMAK1f3hvePkKBDpxSPukc4Ff2PxHFZBZqg4cN"
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
