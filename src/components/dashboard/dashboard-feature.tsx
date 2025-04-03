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
    "3RhbxucKva74Ek8F57oXdu3JjuaFZHLLkwmrCC6BmhJhSrXYmKtdRTAia3tS94W3Ny8ATUc9uNyZNBrMPeLuHKNQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dSY4KArDNgt4XMBwJbwwsZJsraJhCsN6q3t4e1XvJudaNDDDsKXm5b9KhMmUUKvo5BCMGsXxVDy3xMDqerwNUMW",
  "key1": "4YpDhAzzRYW7eQVZpW1yi7BL3i7LFyBtTq89QD9TECZDkn7bm8jxnZPoGuSuMyDqMYjowhy2KHvyv7cbxw6kWBFd",
  "key2": "VioqxsjGKi1SKGnZEceoLc4Bj6oKhsG1EMowqNi1SzZrRFazZHWVErryr8GPygkTFRrZ5QKzx1iBU2ES9PqrkYi",
  "key3": "5SUuRDhQsFsJ9nj64CZtXhEB2XcPfMjcRwvxeruuN5jL4ia97sYLNzpTVqNXYmDnNvWD2RtCMFwMLyJva1Xp17kK",
  "key4": "5RvdyfviYBDsYEuW4McujPreGU7oXJcs9Z2AdQxMb66oomapxV1BFWAAYE62jJGw65pbPTMjSwZ5XxMJqDzZipA8",
  "key5": "3YJRm2geNQLyJbt7GkzNwXNkUcmFR2hp9AneQiqZ8VqxgXMtesbTVLLutojLiQritPou5qMdnRybzTAiS3C21gMJ",
  "key6": "5M3sVi4bhBzZUCZ52UYgry8DFUDnQhRhHdY6YoPa361gTKrhhp4Wf5XLhQdj52jtiKhP529HeQyKT9j1FYgHPAVq",
  "key7": "72c1oKDBGsuEmsvo8cnvQ5XKcmXMX5Pw6HZKWsC1MehJnz5jA7rkqbwNgBhNBHuzpNLjQKdEAVseDiFmxZ4snHp",
  "key8": "3fKs56rzkb4FKzFW1wHRHohL4foiF3QKHR34gn7Tae2Ykn8azgMhBs5yp8tD6bk8xd6wLzGpB6EwDvWvaWstiZ2y",
  "key9": "3AMyeiwF2oXcmadYEo5pWnSmb3dc4GTMMhWZdxHfkAsXBegamVwTooSbesCHWmNzKuuqaBc9danWTZojcKbwtavr",
  "key10": "5EDuTDChoqRvwUBKw9ytCRpGkB35fmsCMGD5vqZpGLXWme1iGH9ZkZkKKVXeMh28BXJmJbmuxUmTzAz6PUYmYpJS",
  "key11": "3jYuzfGZKoKyDLBijY1nykMyrcm1jajW1LQNNhNWdX53F6yfuZYCvLq1n9uCZzh1q5meAL7br9VR4Y6jGbdLwNgp",
  "key12": "eL6psmbWuTyCKqwHq5xh6HwSPj3LFnmZiRcmyhjPaoHRdB7WDQFuWPWspLLU7nSEa3GSmH192UiEdEfqX6FrMtY",
  "key13": "5UADxZnwUntws4xU1GdT9JyUoX3cTjQFUsmLcZjhmMTiHUZCqiYiqtrQd6mpEdRyz22aj9PEXemTyqonLaxEvGtj",
  "key14": "2t7EBSnUDruXtH8Vby3xZWC445qteJt3LaTtAwi8P8K8eAASsLr9xRdbYKPFbMe5jggXqMvc7K9TE7MLr7AuLHzN",
  "key15": "44EnXN3pVDM3Fd3EHd1A2YZV6gDabwsfWaGmX9XCh7XgVNN4fcLB3y3tLvDAmMwuGnPhTKDSx76Hor2bmCXVzsJL",
  "key16": "28PcNJYqn3nJPAQBEqqUXA5nBHjGB7rYEiRQMe7RjXAkwCaD3Bzc32yo394dBbEzWZXGhKpwyj3dBHRSyy5UUq9V",
  "key17": "7oGXKxg7HCRqoafxuMApzhw4SMHY2xZ6P1eHcpja9hmefSiEpVBkr17PW3Qwrnim7frqoqjEWgDPDovUQrG2Jap",
  "key18": "3UTSqzS41jUgbbNkmBNHqBnzJhxWanitJkpgsMXfcZGkwWAh2V7ZoJw26H6xK6JUrU8Cmut9QD9hprcabANexuZZ",
  "key19": "46iqdtJotyT9sW2UEm4VMNe5Wc4uYHNH7FdMN9B8hEwWWkWS2cYypNkLpD5MW6BFTN19VYp7qAqshSZciwHmM9sz",
  "key20": "62JnkecMcGkjYYfzHQNvGmRWM7bsiZDwsfjpbHEKWqpaHiV9uL56Fone8dEZ3d3vhrQP9yrx4V4EUiwry63bHzvY",
  "key21": "4oEoFcvwjwAHNr1UkGUVYjvoH8BAobcTvg1ey7h9PJwpU4SCRsSR5S8umRBSn44NDLmH1LEWEchKNG7VHkmJgDGV",
  "key22": "3RjhCqWkVFd5N5yQNzbjsm6zzFVCGjdGYBnyLiYbFi8msx3XtKUQ5ogCu8cyn85dosiudw4FQL9MYnpAKWuULBa2",
  "key23": "9tDJYaM76wZpD581g3SAK4uy7zSBEWwCvAUi1HBc8Vn1nAnvfzdwChaxqYkoA8WzpqWwKZkrmVEpvSkhgjeRxXJ",
  "key24": "3VduBiEmA2pMQh3RdX5MC1T9D6D1AVkCTqza39gdGkR1MAN4PQuNqcYojnzbFyKE6mG6a1Rpm8iSUfsamB31GYuM",
  "key25": "22qYiWYjZZ9pux8iSW4jDAxP8Uw3sPCvKGj4vrQ972SJZtNB2dFQoTdBWbLtuK94iQcRXZD8Ytj1Jfk8Qhseq5b2",
  "key26": "2k7KFEbcyUM49NnbUK1n3inLw1796sqtcR3pN4qVndKgcFqb5LZ2XcFF2vvGQquh9zm3KJn9gAz43VMWDhp139qK",
  "key27": "PBxn2VnZLv7w3WK8iNvXfEKBXfpzWwuqse1hkPKT2fzD8XMTvjZjtSEPjYiMvvt4giyhq8r4vpuRKJc3vAEFrQj",
  "key28": "3HhKBo3Zi7BW9U371GikkkXz88WHAiFyZVXGqBzFvwmfExF6QL4U9X9XhQ21V2dzBgMMRPARUEw8mRmrCdeW92J1"
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
