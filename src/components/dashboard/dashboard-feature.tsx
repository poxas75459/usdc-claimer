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
    "2DRAD2B7xCkzasDP39dnTx6mqSbq7SizsMWZsqXC5n7rBbL9s3yobgRTJoiDouEQadWmBwq8aXtaq9jbuAhayCLb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ktew2XDE9gvxQLucHuetXfdRGcN7ib7HheyL9rZmwF3eX8yx8qovqQLKQD8Z7NTVm5V4ZNfA8zBeAWYc3MREkh3",
  "key1": "618mR4qK2NGBpP7XFhE4EUusW8ZCAq56yLZ8DfsWos3jRAU47wdSYhN9emcnRm6dam4Kmm82x3ZRY17AANpht8x1",
  "key2": "5EdwkKgSUbyvfAZZVY43mj3xdknttuixzXANnZPujw5dikaYe16By7FZnibNoH5zjPyyntSRRi2ySdiBZTZ9nhbm",
  "key3": "51TKM9iT9Da47D4WdkZCfMXptUsKExWTZFb75dsLxhWsof5qMZhohe16bLEAZvXdE4AD1SMoqFVzkgp2q7k6QTwt",
  "key4": "3MrTcC2KFSnwQp8zvJz3x6LdxeHJTzLDWo7hGzH5MweivM8WKirTxByG6aJjPy1aFyX6rfaeTFia8ybbiKeC8czT",
  "key5": "3XknG6qPKsD3MngDExKdV6QwynVEz7Psfe8dsGCYVi4MjF5sEm8CMWyCgV33WrskRT7r3Y1nxT5AV9iEcbwkgr1E",
  "key6": "j9BRvmFn3dZgTwUdc8SFhJVUKCgrg617qRVGKt98t4yGr38VM5iuMRwheR5C6CkzWGyxckvN5rtJMe41b32WVjv",
  "key7": "32ga5gi18JjHzYQEw5pNxQsqkPs7oC8kTDaXvy1K2r9E8Zd5z4NvLyssppKbuN6VrLM7EkwS3kvA1T5xR2qirTwR",
  "key8": "5cGtkwkHcrnNNkVBtcHzaTq2613reDdpQw8b4mynheKxsHXZ6YSvZaa7ebc1DbJFJzERP8pFNjMf3fmyTQ1Ke9dF",
  "key9": "3dZiNkEacdx8UvDDJitPgRiED7meYcXUQwH6wbwwSWBn5WtdHC2PBJHQFsV33MovC971gbuKt5PGvsB5yQAES5nj",
  "key10": "3feLQ9kb8UxiJK3zSruf3oePtZ5MHqHhQCTpMf3Dx2kU8vszXD5aYznNqfEHghCyyCJmneW5SS17jXtiD229upYv",
  "key11": "3HpMUxfb7nioEgf97BLbJ9YMmFMbJsR6RN32NMHDQP33abqKrVhKR7Xr2cpuqXpme6GMuuzgEgqbRbtSVzEck1Rx",
  "key12": "4yBrdFt2bZUY2e7reCD5ybooNaHHW1PLkQaD7rgvv25vWZHy7MypRDtsivZejgFk3EX1yD8FgYgHArfG4jubmLhy",
  "key13": "3fQqouNe8Ey4eDYF5yYH41mSGhEQY5wa2eHkpT48KBRerJshbqVzPwZ7cib3WouiRhkUVYvhTnX7pLy17AUYWPUM",
  "key14": "3YbgewQLckk5cAc5E3ZpRHyzKJMJPhMFhk28XpX75hSk8tn43xHBERexz4c17BPPUVnVS5wEt8gFXrYwP4zyec2g",
  "key15": "5PRcoMzCj91gg4rw9LRHmF6kdtLUnRzXGSht6R6mRzbJVdiZyXwNNRaS1ZfmZqqPmsgG9Ludqkd3K5ZVvSEEyHuo",
  "key16": "ztktVfEdu4a8WvDwxuKfVpRPzceuhwKwS55EhEj8LXheyFxYahMm1evhAr3f18KjAjuXSQRbdQzn6jcfmyzqpTh",
  "key17": "5Z6Sn48w4tWpZbrndfkpK3V8xGeCkAy4iAF3ceJ4f8Xz1jH1oLmCiNdE4nc2ngBMpUAhYpjMfx99feDh7wvogkYh",
  "key18": "5dQQL6G7nBxCg3bCD8v1bj8SvpHGChrvPkoJyq3tAhELMez4UXjRUw4Jj9LhQQsWLqyLpabkHXiX7iuvmHQV1yA4",
  "key19": "28f8MgY5TEcXjnCxtsoLZz3T6Eaut5E6iJJYH1VEJc66LTrqGDYZA8gipisou8DrS2k5ZpduDdNqyctjg7KDCYvx",
  "key20": "3rBLus1J2KrFJvVPFUG9XYaT365dnG5JqUQhx1nWfGkzwXND2vgUJYXnfyxaXA7UZUAs9EJnmUp8RkxQQbLPjgWe",
  "key21": "2Kw4ojiDcbkQrFSw9Ez7cMy5so7D4JQsdmKevPKaoj9XLaLgA3JzVN9UqfFEYVgC7cQmjt85cFW52w7jVZ3AY7M4",
  "key22": "5TCVMNnAe1h1Z3JTzMjhbw6BK75YeLTsGkfd8nz3pY59LGN36MwKwoMhqBfS7zpyipurSQUyT2Jj478JtCuL8xEN",
  "key23": "4fHXYyCTtJtN12iZcsYL51kf5h1rvnvXbEsCBR4DtqSDoYJeKkSySACzKXyu3du2JBfAFNTwG2VtLFM9t4HvVYCw",
  "key24": "3iUDtvwmn6qwFDCSrY4XAQhLS2z7dAAFUgoBCiGPqszMzM82QD5BNH2xHLNAhj1rwnhFeukDfcNZw5gCP2yitACV",
  "key25": "3PuVafZJnKviZzqgZkooT196NChpDfUfH2xYUctDDBFN1MXWZM2K31K8Vg7GNCGDt3xYui8qBpRRC5PbE1pGbsmw",
  "key26": "FqXoabKZ98n4p3nec9FYVFmAyT8eafAHUAtTPe1VFG178NmYBsY1FET2UJizpNyiJtxJQEsNuigCECAqeqQUVb4",
  "key27": "3RDcyf9aZdf8rD1fuMZvaqKFDTSzKTPU5QpdXiYAcS9T2Zvrf4ZqWoYakzpkPVKetn5tWCuf3qGHwZ3RHGXAeNVH",
  "key28": "4zrdhrGtiG1vRjrUFNEC953fcdYmp9CS2BzXwAk55ymFPm5y4k89cd77a7wZwDCLZ37zY4WJA6hpDoquxWX1r1e4"
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
