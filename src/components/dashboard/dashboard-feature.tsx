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
    "Hjp4C6Kit3Z6n6ciM4nZP3ZK4BZvjTSCoKfcirMMpt2vpc2HZGJoiBxbaiMHFab4rZxnMMwnTV4F4nKw9w84FED"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f9GxYYLjv5jtLksheSsy5fYxsaxkuZENkEZa4731G6pJUut61p8a8oXivxrJBabhKF14U5hXBf6mzU3ws9hYXbM",
  "key1": "2RJjk1sqQNoDASFsqRHNGGpLsqnTpmZQhGPnCeACbW3FKELzZ486AFG4DkxP5to1hgzKBiaGMyu9Q8b6BH8n1zS6",
  "key2": "4QXqSmrcmP1pEj1i1NcTfzeez79LC8p9yo71oXhGikeny3n5xztdz3Eyn5Li6KpeNadNiZzgG6XcFAZya7KF1R3o",
  "key3": "3mNeocT4ekGUDms62rYX4vWaLMf1f2ZowzXXGQDz2uBb3PmGN9AsSuzF6Ks41xrPni4RNALPBYEEWDqCBgrDWstk",
  "key4": "4tnV7S67Y119vZw9qAJy6U8mLn2UjxovFaz5mwrGJ82si59NbEgUr4QYzeMjwGdCjoLLZzd9PmL7TQrQ7AFAGHpQ",
  "key5": "3kgoDfnwW3FNjJLWsgjthKS9PE8o2ENnQGzrtncG9E6Nram5rQyWNGykfGUpnPH92AAvDDzTZG6MbECPHw5dr2uW",
  "key6": "34HbVdWayBu5vNJDEvsmeeLLMnKzxtHnwowNaQZkhiEqGhkgRJfEZ1vDU8dYL5EhjJ3Q7g4nDE8VfiFrhWAhxj5d",
  "key7": "2iXnozKBm3LZGh7pnZttfCiXtMR1wSCxMxEMopojeVbZ5juLCbZVsfrKQHBSdMjfFzh6Fxwg14GViaV24W1GZZSE",
  "key8": "2nriSjmJ4KTbMqoAWDkfRDR66jTCtQAbPCNyK8tdNeoaVLdHe9rV43q2gNngiU1oXxHK6rPqUiKoWZRsLFkwHKAy",
  "key9": "GQVo3L4dna8VU5WF1XzFpTQTnohBnMeG6J2CeDPjdddouyivxn16z57nfwgk9UpF7gaicUJcXAvhhtduKSj1ZwB",
  "key10": "4XmcqbZ8ECpSkcpxBpMp5rw2V7J7e5uKQCfnW8zoj1bm9PSyhAdkkT2AkkJBnakK61HpyNcJZNsXgWDJqwUD6WLz",
  "key11": "58GQrAWZ8XUfJ7UiKaxwLarG5SWt88QNAQJzjNEg5ARF6w2pgVKLbApfBM33sBXL9WZDAjtJBouFg99wx5Dw9JtS",
  "key12": "29NnLh7Va83p45T2cxzGxasdyREbtHK1uAxXrArksbNNtTvZKNyFsRXqXYQh6WG4DU46mgvgGpzqhq4v8LgEcgQ7",
  "key13": "5ejQeKf2MHbgxnNZqChbxwVq1xufK7fX8fYXvYRCXiEx8nBr6X5mi2mjXMfRbDEBpfyawYfFan1MKJdAKnmAnDkt",
  "key14": "5ore73Lx1NKVbhD8RMqr4C5F4pD2oq7vEo4VfcghZ76PfF8N8KHwRRB8g2Cyu9FJSrVncHocPBxYDr6baPktJAiU",
  "key15": "TaW8vG6Qgu17UnJcE68qdg74KEQ7kjK194EDFLsY5uEpPdwMUjMdGD7Cc7rAFKbDGCaUKxWd3x8b9iZxWbWMuar",
  "key16": "5aHTU3zQuUGW3Pgf3Pf48fgH17ZEk3GrBnrhDaGLRUNzUBmw6xnrqYk7TJMSgEQtQdy3Fq6GPhboQmVhxDhJ7dfE",
  "key17": "3ty8iRdrUa28ZYSygmH1KmCRbyhW3ksuCndmQMCZxvBZwosQNLjrk65HHVPNXSrXZWCaZp6D3TLt3281vUdizAvo",
  "key18": "4ChJCviQLUXhjLcDEUymgqB6Rrh1MxJBhbeh3zqVfXENvtjwxQsLkNg5WfcYKVVV72D2UjF7JUKQVproXAmPqywz",
  "key19": "3D3jQGsj7pfJTAbKBfpagPknh2XvnMTXry87nWxyg6JVk42Zg5DUzFgkTk1cV8A1DhL6veDs3DWUPnCdHsmaXnHv",
  "key20": "41uNjjiMosTxt2ZF6uQzwoHAP3qWud49pkCoqijr9sDF3MAx4r7qjfBU898KjT3LubfqgwYVcVUfn8yuVBYvpcrX",
  "key21": "597hue2kpNtungfU4L2fhNMjpVKbJqhKEuwzszhg9vk4FtXBK1uiyfMP7Zs36ZvdJ4NB5PrpJyrQtutmayYNrT2z",
  "key22": "39ieNQSornCdHrVYBV99w4YoQbxBfWFgXrseH5nYRhGnTAKoGASxCUXf16qJifyrMNQbUA3uqZQwXjfEbwKxxD8j",
  "key23": "2FHnHGR4ckkYC9qHGWcpGCcaEw3SL4kFmcsP3wZ9GYWAqLJECjePyrnCYfS1ikpu95tA2xecbmnxwQHvLiWSUK4k",
  "key24": "3wWfTt4QjdSrjKYgvx3cBpcCrTmWfZf3gSG2ecaxKSeyMAruXpT84u8yZ1igrSyHJ3UvJBE3hxkjFoGLn7NBefNN",
  "key25": "4gs1Hjq8ZzbgrRHWFLeWRjtqs4A7rwWLAmixLVGYBB6NRYeCnHYgqJjPesLayrpkaurUrCUL3yBTWeQXBPAoibhD",
  "key26": "41h8ADum7fxZdPpdSHsUpahU4uvJeRsfa7hj8NErPEegJiu47EY13MNT7uTB15Enah7ZeqHnEyzEhMkvY3HauGxq",
  "key27": "fMMWx1DPgbAogY9WMQgkbvHDP8H3JayWiEGu94VD8cTavwMrRM6qThHku1DBu84K2245ZwUNmEZwW1A5M7hLcyC"
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
