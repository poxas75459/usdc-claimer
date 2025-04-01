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
    "4kphNJgsFhDJVkzjeoJkf4bKBc9s8QmW3NH2hreAJrceBn1b7TKgPAEhcWXb1yWREv9rvc7tyip2R4kPTEEyZaCg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HDdCsNmPu4Vrmi9bqLpfDMmPNn4YWgUcKChzHdUN3xjLY3WrVjnYFK1Z8rjb53MgbdffNBZJaPDTdQyaFsnabCw",
  "key1": "2zwppGSNQyA7f3kgsB4Rzuydhme1omRjRs2qxF25DV1BouD7Zk1fBXynMxnL4dDeiHbm2vfNXmg6cVm4Si9zuG3",
  "key2": "oxb9YBFumsF4Bj38Hgd7bS1jRNh6yWJhFiMxDZduzEq9Vq7d74b3RCjjpUCPoX9dLQudvJBJHsG2vVxbibgDLYu",
  "key3": "4mVgXaSwsz5JMp6G5watqTjZTXRcodYWJkuHMf62HhQ6nHyfYc14yR17nNa2NQ5rXiN997iFZRVsDT4FsSaadFAf",
  "key4": "3Nm164Y3qxosj71W4nZUUxMigGnFtmCBc7MGnoSJ9pPeWkc4rjg5yLaabnNqb9Q5njWwQRCgV5ypBTs5kzCqDZfy",
  "key5": "6v9Lw1eJYvsWfYXQdoC4sh3LkCAHMm21qo6wqj4UTCGsVVzojDBHLp6TsVDzhPHDs5a2FDBuTKHPx5J189wda9A",
  "key6": "2iPTQ58KCpfksoSQQAZn9BL6r19q2pSfj3Baiui4SXUJbJYEwy3zuKU1bJSW7WM39AwYRUQqwnnkvKzPL9n3hnD9",
  "key7": "LdCoZUUxHjLbx7UdpbrZJtsWT5MiqBdoP3HCwArKgcBc69QHU7VEcdrirruN7pVxp1Jn5TRhHEKG8hPeJgeWjSj",
  "key8": "4pkhxQLEHQfSRT3uKgG86zWJMNyZhsYLfRi28pykL5SFqr1VARLfSoeGuQf5sjmP5F8L6mtbwyAT71ZAkn5AKFit",
  "key9": "7rf4pAzXyLBifrMSC8LfULLNJzhaLf37Rhzo2KQQ9rFmky7VzhKbhBn6dmqQY7vkTmaMn48uGntJs4W34MLU9Cd",
  "key10": "22JsRUMyHte1MQGXNGq1Z1jNH4BhWrjRsCqr5A62zY7vU4Xnhy6vsZCz6z4Suqr2o5eQ25u2ewmTowW4Kwi5o36D",
  "key11": "p6A88Rd2vmnGm9drzHdEkz6YmBf6LSCqdgLaxBMftutqeguSQQhQWssBwxTa7LNTiUCAcjEhGSx3CyRoE2MBN7i",
  "key12": "hdyeTHccNjHr6rqquXPsNio71ZGy96QZZtPDyoqZkp5pr5WhYrpWFSMnjKaycz1xeEg3qJ6iiBSswwoesexkXct",
  "key13": "PZQ2gcVjhAgAfZdLRMHdeCKWcV4goZhqX9Lb8aet2nF1KEjfTqyNVed7p6FVWc23SvtHQj1HkdyEch2qahNV5a9",
  "key14": "5rJkK4wZe5Bu8HABL2jQpDgJaPXgMDyhzHqrh6hz8cTbBuCoJriEP9Q8H6pTLyBd1iid2LkabCRxCascuyni1BuC",
  "key15": "2ahT5rVfc4KY5jowk4FVx3kieH8asa6yUejUa4f5Rvq9y9iCtfGWe9HJD6ZGgSBmPsvkhZa15bSdezz5eu1ppCZr",
  "key16": "2qZUYzZFL67XVvwuvKraFotmaD9TASFy7R3xrcCzLa5To6BmvPdSsqqcbrdTVGH38b2pK6bT7moFtexENch9UVi",
  "key17": "5Q2h9LY8Y68YdRHuC6z63ez1e8jJBC4zV8rZRQmhCve7BuMgxbgFnhhyrLUShRxe1CHXT251AfdjcBd1j6RrNzFW",
  "key18": "3ipR8vepki7zPzd8udLrspPpKtRxUPuaQzAuG2YEg44mX15nvqSCwSWtDZPactX8jrh7FbXVa1yEmb8zNgieBQoW",
  "key19": "5Gkj5CmCindF8F2BrwUwEKyg2wBSgXxXNakoCF8zMrjG62NSgrH8ERpr8pXQ2UujY3bXMjt5FW8tcpsLMMNiiV3y",
  "key20": "JxF9u17qnqFefqMzpD9tUVBNinUF7urxzAnjQW2bLE7ACE9BNS3rspQYDrpgY41SVg5sJe8Kz2YiDMLwUConCRN",
  "key21": "2H7mbMT7zQU2FTLFu2kpZwzxebrUgDhBjLSUab6y56riGHtmvyWHfrb57i35Hk3AJDV5RzX7KgBRdGQ3MoRsQdiz",
  "key22": "2JpGrBN7j5aNBvTRXEAdfL7x7Xgx7DHv8Djd44c57rukHwHHboP4cwT5gMBpDMJVHgxK8QCrWrhTVyHedTyADymp",
  "key23": "cymPbMz4JZQ5uErtG34q7cpipe7pSU6Vumc4zmwVpPqdeXrHmsSyxkk3FMwgKYLDv24E3FpLGDcsY3dH6Qsz7LZ",
  "key24": "yBKZ6w7bD5xHSiaswbRTFCopYcwVKABPhWYWG3BDz8WevJhVji3QpNAQ8DLdzQvdEXM1hbWRXpk9BaTyGAYfvmQ",
  "key25": "2xodKK1iFwKRQVbaf4dnXARbu9s2YPvdsMcaphL4QQL43r5Mb67cYQt14Y3ukRSjzHn45eDQuQchqkp7K1FqVQZ4",
  "key26": "3upQDdQ9pvDJGRiqe5sJpWhgztehY5XTjTacnwLE9dx8Xcy72pmG1JYLyEEyGZY51q79HYyYUAmK7T4KPgnXp4c8",
  "key27": "3kiZn5GkyNXFhyCCivA4P2gmR7xjqPNjr8tp8iSm6swTbXt6jrkpH6eHsAsyEbF8J84HRCVxXki1Y7CkNn9Jf2vd",
  "key28": "3j24TSfF5gqiNL6QotiBAN4zxPh66pBCh5YNnXe1vyuDp4zg3vBeGUswrJ7UTnNVzAc1wb9DEg3DCcYP9rdwA1Ub",
  "key29": "4JbKyyp9HWWKEJAaYU3zjoMFnuPUENbxvxsmxjV76kPdjcmUBbYcPUbBHvrK6h1CsMY3tpUPd5rP3NvdKZ8a8Unf",
  "key30": "3Mhow43bKZP8fSu7bzsxyMSktAaLNJNNhCqAUQdr2swhwPPTBkJGPfVsykdNW6xJ6XFmDmA8aoBAJtgZhgUYbWaU",
  "key31": "fqdmQWFeuDWvrXdWNTq9jgmHo5nYyahazus1hcEmShjexTra9ML86nZGkLr6qvGmpoxEUK5MKgj2PnosoaV6Jhm",
  "key32": "5d4MwRrDVZtmhUn9NZ1QH6aZM1WLnj9FeiRKvKqLeNSe35H1doMUsq89KabZeCx1WWCNgWrd97himWRkFo9pNHxm",
  "key33": "3Lr6jQmLNKAx1FcZNoao9fcirc1r8hZtmiKbcRTsNYF3dT2KaUDPxKqoUNJ8qEdiMivYe7soPWPPApTFSHp5WRaq"
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
