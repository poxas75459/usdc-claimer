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
    "49vCvk9EEJFaBer6S2hBeCtjZ4bS9RGrvs74Jujq7BQdBQbQn55Up1V7zMFom9FFarVkmZ8uACjTJkYgC2z4mzx1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38af7gLgcfUM9qjfoXA9xoUEsmRafXAruMuQGdqwtDBMo3Nw6BUQ2SDgtwkRBXHBY4btMfC5f1NDDfsdS7aGnGLX",
  "key1": "47zsy4t4G3N2Z59ciRShN71cnGnFj6nptfnC4QhxGszZWxso6yCL5UAN2U2xtePshC7qRmohXgxw13ZQZMuMGLwH",
  "key2": "2SVNHECSrnchgD4JgXE4rUeGF82QK5LpzeEEVkjweLuKSuBm5TZ32VgqKuGQRjaD9VvLGh9yVQhXVVJBNq5uhoJV",
  "key3": "2z37Nv5NuzD3Mcv7zM9FuTr3dDbRJUz66EiPGk1dnGur4xM6i1y6aShgqdojkc7hpsc4qeNDVEM4si6r8CcxaKi2",
  "key4": "3bLmRmSAUfWDzEvFsYwM8sAzxowJY5V8hV9tUcKKxmULQdd4XWvHjMwzkd1SQuju9PAjhEZWEtFE8kDh2mKorfNP",
  "key5": "5nbM9AR6Myw6SLtNi6evNg1FXT9eJLS2wbFgLmpdScxzjv5PYuBDfEdxnbHNJNCYFwdgwkeaHdS1XSbVKEZ7CpQ2",
  "key6": "49RX3hSFk2XF9TnG13sGgyTt8vZkLmwVsiQHJTzf6JfJNUNGcKPvYdE8CxqNpnhUnUauB1Cvhky9QWgnCr7oqdH7",
  "key7": "5qFNMUVZ97aR3ozBq23Nctb7B7Pqgnh52ZWkxrbuPL32fnabAqvMxN7qRruJvcNfLHbnATRvHjr72RMdaqzbveRX",
  "key8": "2fHeNdPRF6fMvGHVvfS5jrnWRZLT96mGh1rcWbu3bB9r4vADFNY7Mrb9Uhk5CoschGf58q18L3Ep3pbLt4S2nds8",
  "key9": "5NfWGF65nZ3SDtLLt9dtRd4AGJg94kRo7uNfrtZLyoagEwCg44RLf9ZmWfSo8NUB3KxvA5McM5DnWqNXqMJn3qAd",
  "key10": "4kTwf8fGvnEqew4KAZBXouRBRcMZqLMS3x7YPoMoweTVCZuMJAoYXBCSWU76nLnynZrCr1rWVawyUuY2QP3JCfwB",
  "key11": "54vz1Y4i1jBpNhkiAZWyakzhgoTYZG2XAQCSE8t2f4aimLfNFYQz6XqwjEZwvqDcmL9pBKhczkXTxBZqUayCzunZ",
  "key12": "22r2SzUe3msY3qbCZupEeLvySXJZHdgEf1dGnr5FCYCLWkpGCN9vjm1cLKuug1sjk2NCywVA11Zs6uUHZvX3d9Yu",
  "key13": "9mqMU1XpWjCXy7poBMJgCP4MTez2eHLspR8e54FfueXdZBMyFDFYenaHfso8CAR8XSqXeepyHK7WNfBAXdcv3B1",
  "key14": "3vcH64UY67CR8nsXv7tgy7PMxQtYujYe6Si1tdmBfYYS4FtuXGibwXzMYUK3roM7ECTjLq26H39cgwHG63r3SDjL",
  "key15": "5YhNoNYgYQFP5sU9uFek8zP2Q71oForDwmEXmP94g2ztAufHi233quS8667jgtsJTVdh4syR8Khr36rawrYboo5a",
  "key16": "4r3EgaDynihKnL25hSFR9oy4Dp42FNmPQtMcRsAUaaTehQGBwvPVx2kJvwWAXb1N6ZBuXYiwA2W5j7E9cMCWNzzp",
  "key17": "46U1ChUupghTM3t9G8yn4XnyUBEF3xGDQTgjCzMP5xK5zZAmcc9g8W8ss5jTx449mp22vUWFAtEG8hm3a7JmxwbD",
  "key18": "67NNiKe4fcyLY1pc45CkZshMuwmjefn8YfEorxyaFiFVqfot6r6ck83he4iWDsR9kzPaWDwss9DAQkPvECnyhqdk",
  "key19": "2xDwiPXkjwYNWMNK5hTWcV4YjgtoAj9jvVtysR858vA19a8WH8JmgzcCTwf5suMPHipYjZEay2go7ie6Edfuj8hi",
  "key20": "2XVNDJfJCMnsRvNmZ5BhJaYrnEDgRgSsWLiwzC9RqHja2xP3vSdWopkFrD4ag7QwbfGWuwVR7iG5LfozoWD9SBLU",
  "key21": "3Ku1wV91z2Vxy2Qio4etJaMSoJBEk57EfXrL8CfHWWHyWsm9iJJPwkvLTZxHUDUhcJnj1wV9rtFAb4FuqK1DsZYM",
  "key22": "2yJ3rSE5QLfhr5PXcRceKbDbjXKVwfBNvMUctpuACeK5kYBwJLCuCgLPCNdZ34usUkcSoGQfKLzsfL84Z1eM3Ec",
  "key23": "yvL1JHaRs9TmzvEummcjmMMnG7fepvzDZ3QFyJj5V73xuNKNkuYhxqNWEcSbD7b96dN6QXiNt5qWU8keHJqG5zc",
  "key24": "3bWkM2nNHAJ39TqWr3SPmLdjtfVFph5TLyAz7yP3Bbi2XrJaPNbncGMH2AtQPxnkiDrVcUTxRajmQaexytirY7qN",
  "key25": "5rqfYcwGDh5mqJYgG1bHVVMUwScLLJCA6UatUvNzEgLojKHbMiddrusAzqUBYCSPWnpuktUupMphhtjNrLwxxRiX",
  "key26": "ZTqxctU2QXfWpPnHhwaGXCaSM3cWRR2AzzzWk6arMHT332pqAtWBJY4e4czLdofPu6HnrgwythFER7ZMLV5wd2K",
  "key27": "FJxV44MFbxZryo9Fsuq1FHdBkCUFDkoWKFR2EVMKTzU1MThU4ot9C1QcAXGQgLdzvEno1nGD7mj62FMbrcShsaM",
  "key28": "RgGQanm8JKYnG8rbkNSgpHY1YNBdci3pvPW1JTomBRjPcCFrWSrwF75JQ4em2MFQwVsz884SjChW8u6JZjSnS4w",
  "key29": "64AHawToadKza413bgNK2JrsZsz3mvJ3mmnx83pB9g5V7WFD4MtBA2ymPzqpdTVpBzhrR6zHnhCzYarHoW1Jgovq",
  "key30": "2nJfaqzT43EvnBTYiRyEi7APdVvvYZqJjeDbGVWzejancSD7Bh8k1MbNPCDRCpjnNSvkYujqdPY3ep4RcyUZpB49",
  "key31": "zAYsmsWpDuZ9CbB9qttPrLoShEvchwCii9Qb589mkrN1M1BW3UjyC2Eu1AjUQNCpDDRV7SpZmsWBKxHmaSwum5Y",
  "key32": "4ka2sZXf3PbH4im63QarJ6WEJh8EgnMNZ6GbcvvEAUYCgQtDivefPuZ4B7nFS4WSzxwXJ2NJeG1rjWfF4Nuet2E",
  "key33": "2VpwYR9vTi6mp3RtWuMCfMaZK4yHN3wfL2yeLGr2tCsoYSW51MA5rsnH6FLrdu8cFS6Zo2frVnvacicZr7jJMxD2"
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
