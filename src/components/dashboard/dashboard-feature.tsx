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
    "4ekrETpJ24PXubWGBb5xhTWpp92snJ3TK4eVnH9jNdeNmZKP5siyLPfGvqdEXrkcKGYXxCdRBzqHFbfAauMsmBxL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "b6iKeKtnkbmSYbeb6CXKsTG8r7wNfwsMo4gw5uv2UidAdrdm7iLWCXvtE4o8GnYF5YNhtJ93eoRYBX14cWcWUSQ",
  "key1": "b532LtWnRoiFhiZVefFs4FWnWPE1DNGA9Av4GziYMbyTH1Gxe2RV97zqFsnjytFU3WXU4kdcSBQMSQ6zvwWHDQF",
  "key2": "4XMVf2zgFRD4vuZVcRCYiaje5rscRi9Z3ueXDnjmknnyjQ4k2ztpwH2rh6zgy5ZQfj3ExAyUddGUd4yihs3DYBSd",
  "key3": "3oBERmeWY8AndAhCqo6BnuGju8kxeU9GkVd52Kttp3QEzbyjLajZLE3E4ehwQQczquR6fiZqumtJ9eYYAsoH43wH",
  "key4": "41MoLj2NMFiKMV41YxxNEVeSuanmxqqiwFDS7Myy6YyYpLUKBBRjLqyi8Mnp5CJ6EwJKv17JBdb1fpwLLY4q5D5K",
  "key5": "2UXCY4ioSs3e1tXVFxT97cJvKmusGRww9RuQJRiGE7oVACtE9FPw873o7NAYshMVmBeiKGfGAZrGivkEBnvA8QcW",
  "key6": "5n6WDqFbBbbG3cUCJV28RTw6KFWof5xyP1ESDS7nBxv5FadRnaT51yrdJkEaVUspcgxro3zrfb8vdDv3qrNTsyfy",
  "key7": "4mEXosPqZ8GW8wMRDgV41DY432JpbRmc9nYb9EbdCx2Nf9cjhRwY5VsAxXfG8fi6DFv9R1ZXK9EywL8F7oXDBQm4",
  "key8": "3C3nht55e2vvEnHv9STrXb735jZW942STdEFXXHzraa9G3DDkDYJQZ9aXYxRr25ndtMnM8pPSgB2KzXLHAmagtUf",
  "key9": "5mFdLgYBS2nJFPX71kW68EjgNcwgU9dUWh1WuXFewEJmHRk5nAbJNyN8zM1BwEytaZ6PHMXEBfuz2anUzKQizpsg",
  "key10": "3Zu8MEvVd7XXW4JUdwMY9rbfdPRR7ubtjh7xmPyugrTyPno6zXXiEjeuyytgKzxPP7pekpZEmvp6JQg8Q1ep72DY",
  "key11": "5jkdGnzPUUWdxcA4jTE9Chsdn7fqcWEwjtBtfsr9yvYdiSsV79yEvoJRRai3agh4kSGBbh41BieZHJVzPHbq4T3V",
  "key12": "2K7JSC5ERiAE3tVHhgzSTxbcg9mupEzuPgRTN4R1GzjtyojfeSARHowAjZyi6d54zYeTBeMKYwBBhVw4ZZgT2PUc",
  "key13": "32WEWQvG5XrUJSiJ4Gu4j6ihHrQ6kmGk8wYCaXKCS4Ki81wKWytkaJC8jyf352UaSDgynWX8bQKxZwy7LmEdCMP",
  "key14": "4CBDidUHEVHZQiQCNeR2qHUsM4TCZUwDpYX3wD3ncfxnQeeWj3QNvgipv3rorSC5EtBRmRYSnDRdG1hcwcwJzSU3",
  "key15": "4L4GjLWHL9FnrWZB89NE1YbzNMxeYT48KV6kekGECfqaagi2rbpdBGVSE5ZPbhraW7zQBJsecoeoVsWPzkWz6ueu",
  "key16": "4Q5TWRKwMVUFWubMSrg1L4SMWQZKb7zb9RvL5UY3t77zgsSujMUhncDRkrPKkBvfXp5BAMWercMFJDAngdRwqNtE",
  "key17": "LGdPHnpm69e2aoFvcNBs9pJaNZ6ps9ZVD7srVa4drWvrZkLBF5qmeBp2qhvTf6BzyYSVni8AZbgsgnqSaKAHiTo",
  "key18": "5exQyHtWRv4kxTpoyXqsXWwewax2qQd9kqgRA86orFFCWGCZ6yZHG98JUcWrS47e1hs9rRk3T2B7i7j3fjXv69nc",
  "key19": "JyWnLFbsvjFEo6AUezLZRYARPbWBh1aLFBsCxKwAaWUbyn3EFiZvMLYPZQ31Sx7CEkaYFvsMxFVujMBK5yrKLqe",
  "key20": "5mVJT1uVrhZMw273zWyDZyV6WCTMtZW7Qwoc3PawxWRMeXNwUcvPX177DsgwaGi3WtnWmKbd4sz7SCR1RpdXXRxY",
  "key21": "vWzj49qHmYZ8Lk1j1846TBp9YcfAryP2PnRemCoRJLkXJMqtFivRkm6JTo2GAVq8N7cAxYv3kEKv6upB9ss4GVS",
  "key22": "2PGeXkw1sJczhvW2F9vDUdXzGKVhmiLayKfzFxnARyEjF5esrZnGdBXGjfWZM96xd3p9vFacvf6SPWgfXbqM3YcM",
  "key23": "2q3UX88TnHevvCzdkFUcNY5wJmAifyTnSQm9GzBPe66C7tHyx2uvNF6HrK6sPvam5e2CmtrWSbRWs9o4AEGrV7Jr",
  "key24": "3X72ugk7Pqmkm6L1wNfa41qex5Tkm1hdWJpkqbqhnjv4ViYhHktgZgai2SAm3t4ZqYM3387No9AatWpdhhsCySpz",
  "key25": "3L7aTSeYZYz1SdioeoU68kKBT4BZWWzP5WPNaH3VSYqvYnHtTVmSWBrEj5vKT2HbRPcncWtTFuhsjDo5roK3eqPg",
  "key26": "2necpFB97FxQEb3S376W6poD7UUioHpNYjkjSS71joJh19f9BxKYZyR9ECZdaSkbRzNRZi3giGEuCoK912uJyZrK",
  "key27": "5wv9q9Drj25J1UnQjZUhAdohBrcz7aUMZQgWBhcNLLh8TBVhMZ1VkssV3EkFQHc4KemWdA2rAAi2KT4QgysPWiyA",
  "key28": "51iz32wegk3TgDZcbQeVPSpXfSdC7J5wPafhF6rFLHCb5sBiDDeSzo7ja3sXLkUuWnSWinY9y5uTRY5z9Wz5JR6M",
  "key29": "4xkdRe8TfXKgDyGBKpP4LTp4uqvEK8ouLXSsnaQMMFD9wkCmiU7XHVQ7JKPaLLpBgwz9th8HuyLVsuPN7oCJgcKx",
  "key30": "ot6KZFv1Av66Kth9XwESanLkYts4UieCwmiZSKwDKXyCnPwjqctFLuLBn1WquDzfhswWYzDqyJaF4JXtneND9Gs",
  "key31": "4nbVqtv26tGbBtZK8ZJhsjkz93v7CGSW6LoVYQN2M2fphf8jdMyyDPaXnKLJCsrN7rSju7XCchTU6dmcmaFzhd7r",
  "key32": "5zSvU9vvZF3TFCbYADNE3sGzDhhA1Y7kWhVvBFTFA7wsn1e4Toe8Lp5c4T61x14zhEiJS4uFd3AoL92NafFa78JF",
  "key33": "47PDTBbonybKAkVZZthiTsJxPXnhPerobrjAgE3eUiRxjHKvZff4EHHivuaUfsy6orAQoravBDzy8xsFsp8wGkpe",
  "key34": "VRTy6Qy7ViRa2nYeemdLuVbKiFsjcCDNu1uQ1GD2m9aPXte2cNDvZx4vWiecUnh2dLStgm65VFb5mbw3cs8uwez",
  "key35": "4D4f6Tz5b6FQEWZpxZw42jdnBH9Rw4MBJABPNdhX2amWBUGNZmtQYkqEef88f12jBTpjoFRgakLPj6Pixm7q5cNy",
  "key36": "2thmbsQnRbyZX2yDhVjkDARHkQUji9gYXuGFHyuBXAHB9MW7qnKJ4hMzvV1DQ1SJ7BQAhGDSUDVwXhrGsXxtD9DT",
  "key37": "4QyzgcEtPVeZ7N1sJtEGDugUuNGDEKRgoEmjZi41S8eYkBXpEphmmiEmAK6bvebMcbE27YJpHLuzEpu5gF4dCsq7"
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
