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
    "4PR5XBbaU8tsWUfUtLuYqSt2MYB4AtppcCHLXofW9cBPFawFs6wKvqJ1x8Snoa65jraCQ62iZGxaUHYUmYwVZPv3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26kX3PTa2J7nq1ZBMgS7eX8pJXEHbX1MdJrZ1CUrFG44Fp9Cu2oKJcJk6zhqixvVhzaSbc9mdGnNn3esNHFU1uoX",
  "key1": "42xK7JN5u3oWJ7jbf9F8h3dAHjXLSsc1j5s59xXcc4udUEsTbndHAWKo7n1UJiaRrA4x6rsRefo8vG8r5kJC9oxg",
  "key2": "4eviHZGuZ9PRLQSULmhoNnXCAtyoEWK2zm1h48e4mtcuZS2Xk7GGpXTWqjsBB4RA9QYEJh6m79K847ofpZa5PXW2",
  "key3": "4DxQtQW1fSGsLEPiFe7UrhXVbLyamYr4HctRzWc8juDViZxQHM53UEjm3rHN9Bx6RbwsRTbDAYqVX5nxjLRMCo45",
  "key4": "3MuMpRy4LuyCMCHxXdH85h7CnE4Va8VMsmdVQPXbELEMCoJU9KwTH1j4mTkcb2YWfmFHRQWuospxAZMYDhpNJyLA",
  "key5": "ioQ7XxzZkxDbyvnuX5PvDzaTWNmtEiBj8zvpTgDWRukupE9xGJ6e7g8tpsDXYHjBHM57dWMRWe9Lav8txQvMHEW",
  "key6": "42vnb5gEzmzv1E1k9CtanyLgKDyjoFo88FJcu7hFjxMjV66eAC1i3Py7vVVTxww9Ph5QAY9H3W9VhKtfeTup4nrj",
  "key7": "5GnEZZLN1g2XMSoKmiJqoNc7fXiiTcaHeFVYkqqtjuXwCyHXUY7qfoWZQ6CFbmuYuV55EavyMib1ATgypyY8UtXd",
  "key8": "482JwFuetdeJCKk5Lq8zco7hpXJPmg4h3FQHvbLUCtjNGtZZfCZCjahCqHb8rYhmRPzW28KzXzXLfm8MWJvkpSe",
  "key9": "3jf5HB6MAgp41Tm7oQwBVkukZqFqipmZw7sf9wiHwQ6csJU6ThSBCAYJarg9bNZfeiZteeyHQ3mVmPZkoUpy1kUb",
  "key10": "52hhstA6FeJg8TfNUskdfgLCSJdwKJyA6TVMAyAtYkJqcNdxa4Qfz56Rznc3gwVx6HG7NamdQM2bM6StbZy2LjfC",
  "key11": "3tLhh5btrh7YiGURBeHkxztyGcqAJFgmgjVp2KJxc36vDebCGkTrJWySgoyYCAQrvnPKEnrFuN6DYPN8EU2JCesF",
  "key12": "5T5onqNJxE1chkApRaZ25UUPY7S6ScnxW8SnZXsrD7cFEhE8G5wrEijVwAbGDZdwoGmNYmUGv12tJvhGWaF7BBYi",
  "key13": "5Th1ND5ZLcqesgjzUJ7EuZ25kMrrZKTu3qGSmMLN1WpbF51x1amQp114gXEQqZ9Gev9j7PnM5XK7k1V6SFJ3B7ym",
  "key14": "5hqVvmCtiVxzNRP9Pvm9CBvgXbSCAJLjS5bYEBRvTJiYat4R1MfgRAe11uj5VkfVofjLNUHjVoeo2CsoraBeHGJi",
  "key15": "4XcKULZBtWykd7fi12a5xEQDta8CPgkxyrDJw1RxBAsAhdCoUsXrQQFpebmrzpbgAx2qvfnjYWL7RDJu6GKCgruv",
  "key16": "3AkzVMrkRUNAqDPposLxMy9kYi35XU7Z7BHDwpuYChbB7oQ2sZjcfh9FsW3iBzQJ12tWChBTGgCS4QZruUdoXVLj",
  "key17": "5dmJfKTAKKDye5ekmj3kbP4EWMZz4w67xnykwtkdZT6DfLArzDBt9KBbiwhDRu8sH7DyhXotfKLAUX19CkLMvvEr",
  "key18": "5bQUDunPYTgUufoRmq77twgwAYv3VZ5rStoAZn12aGHpfyXGGuav5puq6pvGctuBrLqMDBmX3nuGjXCq5e2iTGWn",
  "key19": "Vsawm7NVFBQpcwrFZrBugzkPRukqjNHn2MAnZxCRV1p8YADyCGBeNrvxUC4VtxVZhTw2yneTzPoCLHGktaFgA8q",
  "key20": "2zj1vofZVHZB96BTxZaTZCN4eiLWU3spmfvshnhJ61JZqJZizqFCcj1F9cMJzEEnpV8Kc8uiMbTmRsrQMSrYet8v",
  "key21": "53VpnFtKj2bnwjYVx4H7jxK8EfoD3WKJ4NetP9nQCdMpXvkcouy6vSjXfW3Dgrb1B83UPXVmkjtDcTyg28apLVGF",
  "key22": "4errwYuVePt26HPcFpDeoerWHP6zFDbgjpq6dxqaHyzP4LPArLNtfPwNbcB6GBjz8cv4CgNZ45fFsGWJ8dn1gxuD",
  "key23": "3JX4BAi5UrZ4ZWT9arQTY848qWZZ6FTC3rVioq34Th6GrGqqDwJu9F2XW4fYF8y9igFBm3a2PqyJ62QLwmQcNptt",
  "key24": "sTxFfL1PxRXPGwc5FioMKSvRnFSNziBDYyjMn8QfCJF9H1SNByi5PNTvhBpxXHkzb215tr5QApwT9rei9L2S4VD",
  "key25": "SRkMpgypTMxr9NRXpSzFrCg3YK8ViUYxjJ4L9s6kAytTdD8ZjmnJZLj9gtkqXTtvwFtwZEwHTJPatZ59cMoYTRu",
  "key26": "2XXB1XC1uNrskH8oS6qRmcJQw8ew3DvMY6Rf6zjUnghtXWmKhH2HYML7pqn8nzQuraDX8UH7yHpUJDLpMYE3MmAB",
  "key27": "2CxZwUc2DKeK4DhggtFVBbGrp56kR6ovbBiXnqL6ddz9U13oJCE5gpBJtcBGBwf5V55ucV13rShu1g7kjd29aZn4",
  "key28": "3xWhqUF3ma9q23CS6sRFLMXeEzLVTHu14JAvXyjS6fcwJmfJf3GXb2ZVeBSx6MFpcKkJjMXLoE1eL9mwUe5QqH8M",
  "key29": "5qVRUNde5NhLpKaWkFrTHcP8pEBXsvcCMHUUqEop3y77KLx6tqY9Eb9VHf2QmRDFw35LcWTcGCHyLkTghJcpweWR",
  "key30": "3hreKi8yed8LKTDBBtLBbs1WeGVh821BXy3s6XdPti7PbhP5VHh5nAxyrvb7ccS8KHv333mNf8s47qUYSwEsYyQT",
  "key31": "21r1ztMR1esKG4ZLY3YZsTsXjBjhCjDCJ8wfpNg9SDzoqpRwJL4fPXzmdmFr1i5gXfC2tf6E3AtvqgJMiJ8bWqe6",
  "key32": "2aJYHBkummD4oVcaXvfHxXaViTcaoudP7eYLzZKHaQADVZWmDgj122zpoNzc25PnNdc97D9gd1oKoAFE2DVzEsXQ",
  "key33": "jhzrcezxiubhdsD2Q46tAxbjdGdY3FkZYu1nynaCjQxq5pUfZruhFqoAmkC2kd2hyBnw2RqdL3QBNc7VGpnCP83",
  "key34": "5qZMv2Sv8889d8YfohG9GMVj2ZFeFN2HdTFzAq8yJMYr2nuK7xvnauX2NFsrVKzUKq55Ua9MgrLF4LRnEaNsQ5tr",
  "key35": "3Tzqe1KcWhpr8JTZn354ZqKwovw3fvM4Sgc1P46cB64FCoW6RF9ZXNYcjwUjxyuonfMWrbv9gZAkN4P7UVvXi3c5",
  "key36": "62nLRME8GhJ82eC4SibJV9vnvvSRp2QP1jfKC4bt9JaNBVTfTW2B5cgxtGRW7yG2RKAgayLDj4L1eXvFeyT2dt5H",
  "key37": "2g11t8tu9GQrmjUThjRZqubeufeVu2aJLKkEzwSuxn1nFAFWTf2Y79QGmGMdeTgy4esxBnhmCHwA6HFXBg8aSCW",
  "key38": "SLvj1Nyv8jfyfGU5VTbJSEnLw7Wd8PZxwuVoT42X5jR4SRG66etkcVTgoYdUa4BKhajsFQeef7QQFK1WAcZ5cCP",
  "key39": "44LfP5dVoKLgisV6EfZxe115Ud4m9BXZHsdz6duTVy2A9jab4MoPxrforjhmSBUZCores3bstDA564svkmXDJ4X7",
  "key40": "3jqp61XJdFuvVUve1cxYpuBpHhJUVVcp7EGBM12R9qzUzPfd9BfiremZuDygYQdGw2XLDgEdCCwtTYg6SdCVyszZ",
  "key41": "5qACtSgbfbyv3KqrXZ5f84ixhcm5WwRjAD4UHeAGhsmLJWKF68ai2zN63roGJ7DEpzBnYFkzoxScXbH2hD26i1VW",
  "key42": "2SAyRCUJ21UbwVBupgqKCciTA7L9ZfPXMQyMfs6x4TXyvBvakeErUaQMeDU2DtwvButQxrqeM6XoQ2bJvyVt2Xx2",
  "key43": "41ff71pSR71xDdzwgqemYD62oBqfqyivXonWYpnr1GGxD1tRkakRj13YooGmSi3icXgTMkks6YvZXBUXdzUhDr8a"
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
