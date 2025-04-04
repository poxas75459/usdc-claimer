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
    "27fgttjwZvcD54YLyZXJo4714iKmADo8KvFcakuWyugsMG9UQTdJZiuktqJ748T6HAEvtbFTQtZxxdPRRQebrcjs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AiBfUHFBPcf8Dt8qB5xW57BwBTRa6TmpCbGUhp83s2NKn1DQZCvW15YPDSPkBYwPpfgcW8iWz3sxFTkZHPrwrj8",
  "key1": "2gckbUrrE9YqxUcTwEbFr1AjybXQ7fy6tXcKBLLhSE1RY7XwZPCrNk8LuEk5g48S1m8GioVdXN1ZH5EWv4ccvsu6",
  "key2": "4zYCQZdoqHzrSAMPhzJb2aE782bpQXpbAKqy31XQ57o4mJM7QXTLPaPSkXvXtBRvCT8nzBQvkSQZg8RbnrocPGQY",
  "key3": "4jByzad3bWr1WM3UYnbQaDMRwketTMaH5WaHYeJHmWnjPRS7KTByA6QeQ6xPc6htaNSp2to2aeBtkKdcF6iw1vmG",
  "key4": "3hJjJygBM387UfVBEGa2RxiKLpwmogcG8VU5aFHznydTPys1wAtaxZs7omXJYiUUmzJz4SnSftwjK1CMPYMh6zYK",
  "key5": "1zv4oXx9HaSpkwmL8LUPmPHadd6stj2BPrcfzw9RM5sEhNDFf6zAVkW5PJRjN4S9pdGGs4ASk6RSCv6BAjPakjU",
  "key6": "3ynqdEhzMbcdiPh1SYArHMzhZoXbHrzRjZ4GLxqjyaPHRY3VfLFMeJV8c6TuosuEzjgZ1LEbGyP6CLSYixguPwiG",
  "key7": "LAhRNt3PkjatDuuc1a4kUTwSr5jUF6PGTbwnau9prn9svEKu7oiyx5iQDATPx2mb1WdHbJa6FXdjzNv1jLdSHPw",
  "key8": "32mNcqp9B8fZaZnwM3VCRKijAtZupeK1VfgnX7ocepHN7JDniAVB2Z1D3uCQVq32vjqGfDXpmWFD1FnE2SR9E5U9",
  "key9": "3x4mDXTQVeE5oY1SrWtPDFz8EeVM1wiRVsoaLVouArBVgoVKERrtr6GJyopVjujwt9Hzm2EvCBwzD5WLr6xZgdqD",
  "key10": "hcdK8vYQmmyUEPvXcKHhu5j7VEu3VjU4Ht1vj81z1MTR6B8AscR4Hq1KMpLzkM1f65QUTZmxeipsU359wZ1rT8Q",
  "key11": "4qgtjBKT13iBduRrGXLMbX4PsPLbgFcveGPXv1i518cReUFpURY551NoLmt6gpmaQkb54TePC1BEBk9ddpc4Gvso",
  "key12": "5Gsuxuu52fRS1x9152iWLaRy4jCsA4Y5ajQ57mCZG5r3puBmo5QHiVpgNqroTKkRrHvfrMtmS1THWj1Tp5WkuDPg",
  "key13": "xEHfbmuXfYiQMGbXmyMB3hrt3dyUV4C8aeHAfU4TAXpsFKcRmunzvg6akcmqWRecmRBYq4HvoUC9t6TbpfvWSbF",
  "key14": "5SMXafKSa3KkNQvDgNseznEs3XZMYNnGjDZ8jSy39qn8hAE6URZrxvuu2LeTygMTAcJe7VFnPUowbeF6uW41386Z",
  "key15": "3SgU4qhig7QQc3qe3kBECZQ982Ad8nPNWDNSsn3LFtCFJvL2KiawoHtH1L2yUoyTCJN7zYLMBuxCCW4WRyW5vuiJ",
  "key16": "2CJqKQbRG5UgQSYfKFuP5BN9bsb2ZVuQvkRExPJs5wA9cNJh1UN3EBm6xSuJak6LNNYe2diHvaAnDjf3nryVBVWd",
  "key17": "5XBaTz1Z3mFt4hsheN3yw2aKypSfwSwrAnkpoYdmd26GTiJnTpFMT8r9BX44QBHQn6psfrSjFo6E5JdcqB22xpan",
  "key18": "3T5QeNAJPts2hNMaiXGztEiyVs6ahsr619Z4AZ47J9qpbVYfsWUBQjdydfq8KtLvfmNRMZGRALNzFXLgn1GMqYjA",
  "key19": "38QU7o26bn9jjEzdquaXeJr1bRFmk7vWa4P9tyasHk2vTiNsVxKjjighz4E9XvheHUx4sFeY6m92JiZGagtZH9EY",
  "key20": "5EYbun9qpDyZ3GEzC4mjtH4tB8bHDB6QUsUDjUWdV4i8SwQyzisMLv8ktUoAUywLeAv3GUsBDvxDoe9SEqpMNFpR",
  "key21": "jC2GmbPhSAxC8zLyJfq47RTwFcabZubbXij9dtbcwJ3EVB1TQ1zfBUM7x9rwP2oprtLdA3ZjaXKVNtUqzYwPVqw",
  "key22": "57sgtKL834UPA47BAwQPRhQbKjTt6tMDpFdVbPX4HBNgbtymXtWLrVwwLkGEpxuMG6dewtk9TjdjheuBe9hWkYP4",
  "key23": "446MhLkUKCbG6PXYDtN9KRdNhowzuF2stJc82BmAaFxrcbUEziEVbhX4aRB3aHnUntrwew4XcsrWsf67xzrX57Uj",
  "key24": "4H8uKDuxfCpXg43Y43iSb3kXREuZis13ufK1sVuqEk5dL7YV9RvCkUxeG4Rr4rC51RVuo4gSeSg96WyPb8ygpq7m",
  "key25": "3TU5kb5vmKCVbZ8VF9woVsc96PNKJDe6PwyEpnoyaXL4mwjdSBVph4P7Nd7Q3FpRxAvjyr1RBTLQmjfyP2wEbXoX",
  "key26": "3CLGnkTXCdpGGhDX3HkVbWeSxDk7KETGK5nhGFoDrJSM6sEFYX5dGbQJfGnCg2kfqHZ7feJU9KHbbSJW5ES6VK8r",
  "key27": "4eTD6L1yLjoxrgzuQXdvWBnZWa6f1DY274wADoUVCQAfSw7pHa4BQiDhLgE4sNVRibkp5fwzbLBpScxazZZHpT6w",
  "key28": "4Q9yzwAkCnhmHAcAtEvtB8QJ2o8gm1LkNq5ZJFfcm9VBybANiX1BjUSsWzjti7A5zKRSVvRyqGTFLtAtMrfxBJeD",
  "key29": "31mKfh4w3B7y7sHktPhFubWrWu8snCmhTy84SaBi1F6XQKB3T3CtKBSnNpEnrrxLJNEfaCjnFSdNPZ8zoyEEB6iL",
  "key30": "3BoFExEL7yiBvTxnTrTaWsNDpMxsLHe46sFk987Z5xvGXD1dunEgCWAk1G94zUkKi4JT9XZnJYLJxhmuADRvX147",
  "key31": "4721TJqGZVgX3GWGKRKZAoNowXbDWzqsLQZvCiQB8gHUTAUt61dGAR9eLZwatU1FapixYKe79W1rAzjRmXCQs9h6",
  "key32": "4bRW2yGmAY5pTLJDSCvWs1hAUUiErc8pR6TQgqVEcvv7DBe27XtZKj8rh76KTbSGZkcsVE1gaxgi7frfENeawbfx",
  "key33": "v9bKCebpzXE8renA7RFrPApaCcr8Y8qQfE1UqxH91mqqQQF9UWCGVAb16TEG7VXymoT8u32AXVv6UTbdRXAytB9",
  "key34": "3wpC1B6ZgGtRMHrc1SvheKAY6tWdLWwNUpWYEUkg3jgdqHEfb1mur86AHsiH8qNkopqKcFA5yfEz7fuk6uG9UwGy",
  "key35": "2F2NexHm1o1LsG9feoyPCXvzmsJfE7Fdwd4XNmMZbAQCVXjBWySDjbMCahZsgA3tnXL6Cit3jvoyvMHDLoKyT63N",
  "key36": "5jLfMN1E4p3FX65ACsgUzJz7UQeM4D52u1hgQRrEAqg8kb3ssmUYPehDNsD5s7LwuPgNEJHQDJNmcxAp1neN4e9U",
  "key37": "4NTTYQPR28VuxV7kahvCWR6QmRJC9TRgrgaKuHHajQVY68V3A7ixee3TyvYHhpHewzhunMtEBPqg1mjvymnGWGqj"
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
