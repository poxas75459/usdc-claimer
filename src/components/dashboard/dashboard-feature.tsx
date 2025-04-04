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
    "3pXMJVN4AmsFJagjyqJroJN7fjwnhdqgWNvUNUfsjJH18EhVX448YLo6LJjZKqAZczRt8TiVcuqChXgvpvGGknGj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DL3cs5pRMHhKXPYmfVriiqA7E9L2bvYFLgGzfGXYQbjeqtWBLJWtBZyNDqJYqskFuJhSBXStKKemzkADAV7wCc",
  "key1": "4KxNs1pHEAY7QAHmMqjpJ9XEHSvwmqvUvhaDNVQGodiaTd46w47VcmHz9yUYa1QCERU2aUoDjK7rowLeGUNhwxx9",
  "key2": "5DKursBGF5rqEiFzBJUuvt2Fqk1mYfpD1QZVp3waLsuAYtwGmZoXcTgFNn2BPLgKNpRu5cqEG624HjPmH9LzUDps",
  "key3": "ZvqvS2epavQgT7db2fKwPiBw9fwfzdHAUMXzgTTpohaiUuAAoZBT1zURK9svaxfU8apwi7VM6MGZNC59hF8w9Et",
  "key4": "5aC1ZRg5D2ez9F7CUBYrREJrcM76P6E47iTJ61jV4JTpcD52zKCkbMEj3gPpuHuH3z9Tb68hVVsKbZKub1Jgzr8a",
  "key5": "2fzXXvaDWtEkXM3gWx1wmFtkeenFLx9zA1MrS8SLMDco2uamT3LxLxgAYMeT7yw5YdXukrTgtA5GkbGtb81K8G3r",
  "key6": "bzAARrrHtgBRgJNnNaGsXj9VBo7cuzKjCbmyNU7KFyoCyssdyaoYdwCAyiTfwv5tXwx7a4Q6c7Sia3n7hfFyefp",
  "key7": "2v9ZKU9rYRLRiLMLqXauRPPSVXaw1oRSmy4kNKUpKcQBoxJx8PrNWuvuKcGoxJc7sjJXsFdgDGeDE7f7ULgj6iVc",
  "key8": "4cmPzezEjf7t5WH6UnXWuuKUZkGy9oxEWd6GNPuBP4mLtDF77NNGRyuPmckWZBY7dC4ydxbfieuUfu9T6rwgG8cb",
  "key9": "3eXrSySR2fm5qBNhE2ofbCUKj74WY8v2jhdk2afE3HUckg6BmBxT5k5ABgWkrZQPi4VBmKM7PVLG9FBuj1xrZMCz",
  "key10": "3Xj6oGaSTwpbo9w6HZz8imBXyNWUGhrYx6SqxscozVAWB7wCZynnxVFxyCHa1VzXp69EZjZsfkQvpX78vMs4UTBG",
  "key11": "5WnRG9fJPKXQHvRSTa1SYahBzVWWNfWVEit8JusWsBtpysBTa23QTbwdatmn4BCmg3Y5P9RcobjDucBdaSdVfzX5",
  "key12": "2d8c96fUhAVDnXdbBvQKXYtsKCJdSym19mVfFVs1kS2gzc6ZNMPfxdsBx8HjP1Xu1AzBvBjJyD7Q6e7D8r5NdgAC",
  "key13": "2xUWyeQDSuwRx5UVp33nmPdjwzgUBrHKAZUJQTenDdxR2KNsYRQWKpwznVfqXfmzQaWms8Ek75XBNK8NK3DGPMV5",
  "key14": "5Xk7ehKxCeyohcEniGq92D3nNuY4h9anjvVj2SQMSvVDN5zRVH8Kp76uaowHGgp8jfWfRYw6QsS2kZNUBWTJ1Vry",
  "key15": "WGxAsgVgH2wCpxuGcB3LveTgtZkkeyzBjGryvgS9ohV7sywo1Krj2ncgroau1HxjhzJNq3AXQSiD8VdBtvoM6Db",
  "key16": "4D1xdH3LnzMFSKMGzy2dVVvCrVYSSdZ6Uq8u84LkAeSnqDmwDdaqdob3L6m1Keib1uJDenwvRsMgTTtNEWVvhDt2",
  "key17": "35WFEtb6nmJqQhggTtV8Gjz8XjQcirvkEWmBAzqU5KALJF1aKzTD2boEkK832ymLo3YKMNsy3Sbx1g8Jkr3HEUK3",
  "key18": "4V6GgDckjBwm5cE5BPqVVDBaDZzdhCcSiG5aaKSXiraMYwsvvbpug6A5EZhnLi2iy3UuQe6z3UQfZH8PbEhAuRaC",
  "key19": "nayR6rQbBwwmvsaBZezF51MgZ8ax4MRfKDi74nfw6XWwxwMGjP4twQRme6nNHm1qt3W6TWo7FnAUFNu9EWzwCw5",
  "key20": "4QLJRo36nmiiw6vJdt6R66spJEGhkgtaBQHz65N3gn1QrpG6RuWLL6P6MJdGZzbVtLTBsLpsxsbAvywPXZsqu9yr",
  "key21": "263EQtKanAdZh1urs8EcoswnqK41ZFqqpcsdzavTC4pFn9unSh4r2TiBVqzTspGTGF3KwSTFWWtf2J7MSgYSfHFX",
  "key22": "27gkQ9C3Pa6Ai6m3TtAs5jC83m9UVk6Ftgnj5G41hMnRaCczdqfyaNSNn5UTnrm6Upxp47UjMURWfZx5DuLVoDBn",
  "key23": "446sBxWDudrbhHPArPbjubKY5YhCuovxvbNz7FuRnPPqEe2KVHN6UzJCVUSpio2qsTZ4REGE7nnhshm5WKgRNrGQ",
  "key24": "2gGfgHLWvCaYtJKYxkqQkw9HmHWZVg3Bs9yCRyUJdXsqMuukGueHZiNP4w6SRyKuMd62jbH86itSWhtGi5yi6SJp",
  "key25": "2nTu6eYhNDjxa6BhLLEtAXWhg3XtvDZGkf9QjywfFCSj1UQNfdMUfR5GD6GgtdEiFyyMG8n3R3cRBihyMHbXEGLv",
  "key26": "4ytpyoXoaDZEZFtHWM38Cqy66AGB7zkwjsmSDqsMYme71Q9gFcCm7zFd2UHdqRzjWRSxgBd6qEH9QojEqieAMjkk",
  "key27": "4Wys7w6XsEfEAagy7NW8XH4F8FZ97YsPtC1cxeqBKmUL4RoCyLPfEMyV94rrFhzo1LJQkJbAwWRisb24Vk5Q9ibB",
  "key28": "EMvbSdLgUBZaqHuQ5KpgKtNgrF1UPqC577NdDNkn3UHPz1Y6Y7SxDVzNbvN1sb99XtjJ8TfRouwHjDNNjaB9kCQ",
  "key29": "XoFMinmTpuDdaEw7chikcpAqCzAvV4xweztJg6BA4jUivQF2pwwBAXvpNqPgS8qmedPTR41T9r28s743rmfYsX9",
  "key30": "2CrAq6YUTRoojFyPs8TCqfTFDxkWjTwQvb5YdS8fsRVZQ39T9SCMdC3anRA9tpfsx2n8hsQAsb1N3ff4XcjSHEdc",
  "key31": "4LANop5UcZCQpDyEAaSoWzRztK3RPoY5nWBhBdzYspkjBqNQXxbUZwoRLu3N6d7cGLKApX8RLSNiP2mUpZ4jT352",
  "key32": "eiUd7oboLcop5eiE1jpqABpECKmfhseovDW2pPMfpVKFbNJe8Jdx1uKEVhdyTu4nrBWq3xqdh9JdeZuqJpXhHNH",
  "key33": "5kU2fP47Xm7aGBv62gXadSVSu1s7WueA3JUDgNP1LfYfkmPyDjseLwYqen4rsaj37aAjGaP4FzvHNYVEmKMgu5nE",
  "key34": "5RnTQfbHgcgc94WzT321pXiJWUyVhjPNPvnkQvrrUNSPdmLjCHW8yrbVURJtBhQSmb5a2vyfqFmQ3o2WcHkBEXRW",
  "key35": "UvJXSo4WgSoZwu3Qpd8ZbVdn5TaMHWzKSrsj2YwR8C3c8p5y2FTka7hSDwtXURAQzavspavTx927wKmDdeTTiCq"
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
