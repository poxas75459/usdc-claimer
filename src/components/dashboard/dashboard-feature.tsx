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
    "2ZNF4HxmgZkz1ZiVj5fDuan7LDL4KZpp7yeek1CCif15aZ8d4M1anhifjcBv7QtVHnQ8XmB8rSPCwdAD8P1FqHpk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LLD5sDwJHT3EdyN64LLZnT2VBCFbsYuhXjCX4HU3QUA4sBaSAsp68YT6rtxpwjehWboRJemL2FXn47WJ3q6XYye",
  "key1": "2sMGxZkvsKisFuUng8o9ixZ6jXxJeno4S89Wu9zhs8YRxg4DpR3BhwupTe3nJ8VCAeurAcu7aVTDBVqmQcVU9wKu",
  "key2": "38aUHtRWFbZtktYhoZ3LUNqiYaJsTYFPMynHUcFEdQEHbz6NEmLqBbKXrmH5uJuVgqm72t2oo6GfFsUvzEjUBQix",
  "key3": "NSQEt7pRtDnHtpaeT5xdu6wrwrZJcyNZDYA1UxXdCyd4RoN9wh1npJsV1ApTdC6Bgn3s2j8wmx4cNjfWL4VndYi",
  "key4": "4aQM8nFBxAKVXYHc8hqEbSJWagGsGYNt8u6bqsuRM5oGzUEJC5hxthtwSgNtr68azzkDDyALM9DDYMzsQGFCutkj",
  "key5": "4utLX6ktyTomSkreBRFDyNLRHsw8euBxvLhsvwzDvHhBf4oS6QrYnE9kAq6EsJ4uNnBocff8NGtaPosmopkGrJhH",
  "key6": "4uuHv4AK34BxWZ6vXH21jNUuGZAS9GxQWBCwWbDEAMC2fsDuLgaTSu4zyWkSrMfD1McuqqL7thyP9NgCzLPS11GL",
  "key7": "5TTejt17vuEEFGd1CpktFGxJaqPrLwuS1c2kqShLsvCnMi7vYgJqCQQ4YdrxfoGXUDawC2qvQSQZPiMDGzf58oAY",
  "key8": "63dS6rYQgxNkLG7ncXGna4Dd7DmY7iBsSQNrh84iwHXm5LRRFGATYLkiUh3cKow2ppcb4ordC8JJRGR2KctaLG5e",
  "key9": "2h6ah93m1FSijDTVG8ChvfAJ1nG2dzUW93jQB8DFVUQT1UAG7Ze2woRGCzUodJeY6U8zAAXFb7PBW9D37vVSrQLA",
  "key10": "D73Gt6jL8TwtQ3W1titePLSYMWiavqpueLLjSfL1BMWotm2YTxatUjzE61uF7qPibdrW4LfwL3xH7FXTyFLFDjR",
  "key11": "Kr2m8YEXKKLNAkTomY2Barzt7g3MUmPzPMmMiZ5sFZp3onpVsvgniDcXvxpZijByUUAMHjxvVv4zyzFVuLby7vK",
  "key12": "29wfqi4EDzBDyExz5ycPbHJmkJVwWtULqLEVz2hkGYAhP6fZuKXgrs8wW9HYFMXoSaPFjpepYFiPhJQCJrdp4efV",
  "key13": "66i66inEo5u7u21MBcUgHGMogWUtvm6mWPyfxwRNHEAKcHRZNbbzZ72AemcE812HMZGhWkGC8hGXbQZxiTniCBxf",
  "key14": "58GkKhgLVXvB4eub6riNmD4jYewW7azSeYbeRjeeK81JHGrkqzErYEo9WRuYgvXbc4yvXacrHiksx7v7KTkwqwcR",
  "key15": "38PaU4VeyTJozwu3dvGAXWayDN9CNVnPx34RpxQ78j9DxVtWC4PRV4dQonS991eHYUqDmwqkNjeoXzwtt6svi8WP",
  "key16": "3VNpahopkeuW1NDkrKTryBU7M6W2s2pe5he7zd7WaAGx2v6hzQFZAmA2PWvx1jjkBdHAnay6oMxTxaDSDDCegtLK",
  "key17": "4kDQzWkaNZS5LotA6g3oBZG1BZkVYYLUaVpiFft4fdwfRvwZhW29bnZ4V8QyWibhkVLhaDYBVCevwuUSq12dWoTS",
  "key18": "2w2V9YTUQtCbK6AyXoUhzgUh4tEwszJCbhrLrx2yocmG4e9QeVwjSMG7H6Ns4bXvafgARvbpy3paPrQVHK78x56F",
  "key19": "3Pii79JabhfCLhQHYkmCcEnbterhSMa3hPqFYGf2H7PQVJfY6XxzuhGn94dV9Xa8hk5dgyv1CyWi1vxV4mGPpnTX",
  "key20": "3GVJ2dNDYfUB77PsVbn2pFyqVhuBn4YoDAMK7AP6qHpvDCQrBZBKX21ALt1FLGYX5Nn3q2qBKZxdBRUgCGxzrEKs",
  "key21": "4j1ym6RWhHH1M9A3ujWHNtzoFRKsdxZdj5gWRJ8WokZSQuQW95AvYEWenTe2G9aahRazSv1thrwrAVo19kwc5621",
  "key22": "3ukdEQKsNRJFdyxJ7WySLV1qU65jRsjREaJ9K3xznivGgyc1sqvH1eKuCMxJzc3xUv4Uesxr1j4t5wY1oT4jswMZ",
  "key23": "391cAqeCXi4otKLtuKSpdPJK9kFiPKVUJowkuEypN3A453KpC29j7VynM4UuyBPy5J9AdAnDspsd2moxtmw76vGU",
  "key24": "4shuqMnfDvcGMjCpQBtn5ydNtB24dMvBZMaV9Q3Bf6uU7WNmbqYBzfLxx1FHiTyJGsWqGTncK3XbXjjzqPv4SJEn",
  "key25": "49mxLk7zaKDva8vCPxeKuRPQJW6xZ1HeE1cnkLHwTWvFBunfSZdNuEBtmpNvRFHeq5C1zgNJKNXnRXVDWaqXbqH3",
  "key26": "62XFpjos5fppdJWc9B8ykFNi3B84Wd1Lke1rQZQAkyogQkCMZK4VGG8Y9zWhrtpeWD1aKNWTwn2MPLyxFRAzBAaK",
  "key27": "21A3AEZxpT4J5rUuc6ExN6ALtgxiek9rKoGWomxiCe8bRz5ueKhcpebgxkZ6U8aWKMhwxpEntpYt6GkdzbtjsiFe",
  "key28": "5eQs81XW924Z1jy4AzUkGWcpfkbMfJdbydgtZHnuyDaSPWJLmE3Lyk6TivWiejdpQTmDHbGHbgVW4FmiHeWJfxWL",
  "key29": "BqG1BDCRcfcDqGPixTMXAWVt8Y7XbrL3UKYV9mUrSqDLVBBRh1gkwvFH9BWnn6tXEjhcMkM6sHedbNpjw92nv9z",
  "key30": "4Ph9nuNWn38J2vAAKQhzdmXvivkidVsGyJcarz55X9Q5fboA4feGVc8Bb2MDYo8JsWJ2ZosnSskbdXyXqEDRCgEv",
  "key31": "4iz38BSqiPQdJ6aWFd4o4fAyxNVA16S6aDcn37BXBxz3TjCT3tDZxb7kv8Y7ywF6RxkH19jF9SftMMwvjzyXS9Rj",
  "key32": "5qURGhZcoX2kLmS4ZncXmCnE45EZQAh6BRgHQxFrbVigznoYbmavZfRf9Sk2qZmfwNV8ipjD3EgysmpaLJFPjjKZ",
  "key33": "55ssdCTJhU6jPDa2X8RewfgKNv8voncPQLPaNNZyphU3LYFGZ4eJ3jkBzfinwYD4PcVspqe7VvgHGmnbrpf2YKZb",
  "key34": "4YdKBDS1PvA1uVWHV2M5mJUXXkHMCegLza5cQodBSG5ow1UPtPpgKMLMp9qMWTdUa1qNadPzHyMCc64vxpCaZMLf"
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
