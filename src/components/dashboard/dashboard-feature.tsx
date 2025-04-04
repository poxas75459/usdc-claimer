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
    "yNV7Mi1mDHr6eS5iLtUj7S9AtEPjfnhnRjrxD6ZEfbuj5pStXzo4dSevCYe1G4KHR7tDLifDEjacDU14XxeCLK3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Meoh9vLNB9QtTpgYy2KKPFeUqpCZe75EQVfzXgZ1grLxhr9KUgdpx7ZW8tzbuh4p5Ebc2SUPPHUFryYRNMfknyB",
  "key1": "43sQ7jAJtiKaUavhSSrHMgZwhGv7w4ku2TJFYJRTe5UjZAVCLBw6Uze14iTkA8tfLecLf4rppNy7VaC8k6VtykY3",
  "key2": "4JyR6eS7vc5QrmASrHqUBsTh42Y7FgNqQf1M5Aqz8mBn7nqLtJ8PJtxVzZV9zA9kuvtTg4sikTC6b48jeVSs9JJd",
  "key3": "2BWRieyqScgz3JKTNou1wJjpQ4RUSsXpm2dewHYJW6yM4F5eSwVuBUqNSs5yq8adoLJYi9HwptPReFQhkwryPTvq",
  "key4": "2KtjQdvdsSoea2eArcM7KKDngxgQqtzTWucxikWdDceggpkoVEqyZMwbueFqhG3Se7w183YYdJCxRUk9QFMrRieg",
  "key5": "52Duyv62hSoowQE3zXbAkF4JDsogsaZEryfMJqfdqbwHdj8wPndPxeRJJfFPJKhvq73Ja7jTVSnDoaHVvHGCazBr",
  "key6": "5ipzq2dcw6na1gULdBn5jG1TAkrANpi7WQ8hbKpu8KUGCEGYejVELsri69jZduxwqfmv5KQC5uy8f69hUxpZxavF",
  "key7": "2eGJJqBh6M4d1PsEdvwuCyVCAVWBvfnFAKHthmwBpJ8QCJSCPA535mEv1T5YiP8cBZtuvgFqSx5YAGCDcvBgctN",
  "key8": "QHrLgH8xxAoAfZQ2j88h4hLwpzscfPyoReEq5Pu9DNMeYYUEDSheBrHay99PnZbfmYEPsFz3HqGPkSk26juY5M9",
  "key9": "27erYxGJsC4w8Pz37fZRTNDyVzrMfwoxeUB1WvvWvFFcptFojtWoU2E3arQE83HxKNtrLwXoMq7h1Rt25N64Ayw9",
  "key10": "3nGpMfDLjyhVy1UiFmwo7avvjFkGghwgywYLzmHdsBcBk7k9doLN4LGHai5vTt7gpxJeHqW98ATTsBDocjPeom5T",
  "key11": "2f8tyiWSeYQVD6b7E7NR6pHURofG5W52oXXru5LHMVQcjZ8XddJdHqbTJSaiUDCGPw8atZ1waafNBcm6jPQBekK1",
  "key12": "5ScB585eET6j92LS59or63YLE8UjgZsC2hdYcsKNTTbBDjJV741eX9UmKP74u8o5SA3qVKRJi5hfUfYmLcS6sKt7",
  "key13": "5Qx8GuHkRu9iMEfWVjq515NaAh9Se4sthJuUiqy8jxLkP8Z4nxgPS1raU6rSng3TwqyKyVEsDq6N6gKCP81BnLoH",
  "key14": "5CpMa5g8AQHr1CmEo6cGxkQRiyAZfEtQdRgCSEUvLbgmmtMing1PRoYcHDdFFuitGYs9Y9uyfpLd5nBfkTEreJgQ",
  "key15": "4ETA8U5fU25sccX2M2o1iAbZYEgsCyHXjFU5dtD4uhQ1oqtaB5ZENiFsdyVxDu5Ta8kNWtv9oysDQDyCwKVyvMzE",
  "key16": "3wB1DPCw9pLW9vdBsPZ74GHmZEBYeTSBRVn3r12dTbdNLhDcZ5GKH4npqKcVyE6FnFbDhvnP8cy7hyNFuEhuuqJd",
  "key17": "2LD7KTbmZdepq4yC3UgsSYES13hNBz8Etgt5T1rrbSzn2wLpLuSNxQxRxaBAeYgoXyZ15GBWETu3k1FQnS99iBKh",
  "key18": "3Z8eP13vgSgSckmQTBMLgJgcRxqWtt6YqAU3fewM5aBQpZcEGhMS5yfNAFxbp3wyivXzV3XV3xs4vnQN1mEDihsD",
  "key19": "23c8rXn85a85hGs5vdT216SYSZTBpD6DMJfaza8xUFN1Xec86ptEirw4sSi4TtopTCqY6HTRXKFSNFWQxjCfJ94j",
  "key20": "28aonUtipCDxMMHBrjjT1eFoUQEJQaxQr7HF68FConJLhELqwvwmEEjZBBtzUYyqvrXaMivNnNfHfiRATEEwuZVW",
  "key21": "4xCQo3nCJfGGbrrieo9XVzUxQJZ9XNrCmS5sYvEbwTyuY4NNoyJdNucqRzXvqm8E4fhJtC34b6Ane91fpWmg9f8R",
  "key22": "YSb56rKoRqpSJ81dJxgsSSoW4JnxFFrxGk2YtvkoM227mGXk5tS94i1rDF9EjUeAaozB6xBCcU7PwTGNR6bP6Kk",
  "key23": "2XHLhjcbsC2uMD5TAzcZXcDg7iKPWKyGEhvGcU3L7BTBFUybTtNR8W8K4NFCeNtBATHkQeG2TGrfDarDcJHbgnEe",
  "key24": "3Py5Gki7LdJpnReMTUyVK3xwnwUvZAZzyvjmkrxeXiEZzuia6EJGHjHo9qbMN1qspxKNquSHiZViTzYaHMRhgHRw",
  "key25": "sYYPDTpzqdmpzxuzmV7HmQVYTnbvAgvDTaterJWaWzzhzbrvVXsZUHAAAjtbMKeQwgBpXbjoiQNRTiQvV8zgsvu",
  "key26": "5fJgMe3ZLpHfeGR9JZzyn61T9rBLb1dCKn2mqdqaeiChu6fzMr22xxMW7GPusREki7jGGG3HF6GzpJUpJh3EqnJV",
  "key27": "5KRxBT9ThiDp2gGqRFwy4itqdZFtRznbhAyXojwQr2H9NpwcRPVmFj9F8pF6TTjuKsJ4YMWpXcfLCb7r9BN1kT5J",
  "key28": "5ymy1ibyfnS6crUFAraAb49bfZzPD2wjyHVT27mYMgZaqoHwKphFroQ6CFhfBd8SFvRC3h5ydUVaMHhKUEQWL8VY",
  "key29": "5F8cdj8nwDDacC5CuRn1CULCw6dXLk9s63DYNv6bk1wHwaVviAGkA4TyYzS24XBdZHHUMHZSyGWtAcGMrRewG4tj",
  "key30": "3KHgKr3NvGm9SdX9M6dPxhT8H6YU7daZMNEsQ1LZWZwcZG1KbxH5UnfofBiU7ByWv9RB993T9GeUvzW9isniDD8G",
  "key31": "2eVDhAfN2t8QL77fGas71mCkzspSJL5J7utBFtzZAW33thgbXFiB1VdANvqKpRV7FyghuJeJmzmZabdSZYSB4xUJ",
  "key32": "52iiZkKSjg57ez4mb4fr2k6xtK3iJegTqrU2QxDE7cEUgLkH3zVbfqfvkVnm1xJhuePygwJeTpM131XyVaK4W6Cs",
  "key33": "25qnbQFpBwu7eeYvD9qQejWfYAVQY82YXUKphysfrC2zHsoM6VjhanFpqZa39UBjA7ktEkYhfscxSGTozLkMAgxZ",
  "key34": "2u1pnN21esVMQWrzAdBSMcpHxgy7rxdFgHpwfuEY2dTybUbat1n43ewa4Rbi75qYa96yw78F3xoU4YsyTaRmRWGN",
  "key35": "61CCvFZfBhPo81HnNm8ssv68FaNdJnWRN1Eknyt3hXDdZiNxZy9PSgdUVz8yG8qCQaZBeAew2HLaevQjBtS3SDgE",
  "key36": "5JzuENKE28ScLQPazAfcof9LjDejHpjm15FB32jFiqofKK83jNShP2L7M6S2hczwDUtA4khmGwtWiv3oK4Bq9Hzi",
  "key37": "4EhoLgT1MLBVfP1xeK3tP5oV7vxNUFNEzgLpJpF7r3kAeYX9att1Pw8mUr8uaSyQFAwophx1iCCUovYGpFAg6R4",
  "key38": "47WKJNkZ1Zyys4qWRkULUohRUkyPc6riqJoMpU5cR6aSj5ZSQZTu2m37pcJ2pVmdX5S9X8ZB9iVuYCD5N857ntNU",
  "key39": "3wn4UNNyxZhhVGfckpFRSg1k423aqJjJkRhMGmQX5JJVhKbmJm4QWgKTTeF5jedrXqe3BULLM3zXhQgoHGoRSKeg",
  "key40": "JeeAE5fZ4TzNBke3U5LoMYfd1Uz2JRCR6onj4S6tGKQfi4cP4GwSLu1siBNsWkRrtkZSxj6L5RNEN6oc8oqHiau",
  "key41": "2rrKjo1H43Zk4qk1cNszjmSA34doeTG99RN9FPZ9Y7VBnzJe7NaYRqXA7A6pVh1aDKK28aiVRtNc772sYjTWKcqy",
  "key42": "56FtbTHFkPPqJGrvzdGjxM6km5tnUv5HMncq6ckh6Nmho7XaYEAqkSLPp25dG4mFoT8pdaL3xsXLe2hTXox8kvnU",
  "key43": "5kSfWYVvc237U54sWkYXCibnnkTrtuyToGxGPQgpNcB7pghUea3qAwcCGtmXeePiEDu22UkDdsenf9SvjFw4WXPv",
  "key44": "4G1aewJNeJ7HJWPTW83xQ8sWremT5YUZYShjs7yjD4rTUqu5t3zeEQcdLufyT4DPKQm5ZGTUTef8pAcx6ZTQsJ33",
  "key45": "5t1MYL5Uv9rwKHCWCL6WPqEU1aDzDxsqRBBHazK6ftNRWKetzB9EvJUZo6FdEwnegoR6Fib9q2Yyzp5fvwAcNQKD",
  "key46": "1ZA27SKtwTZSqkYqTefwgYMcehwcP4FFzNR9eEQy514tBJEh6vLb2Prs4DHJq8A58LXx6S3HZEihGhmH9tNr2ri",
  "key47": "2SQgRnPmdxt8zKn4XarLh3DFq5umaLrUh165YMDcm5byBbYjEk8Gq6qCj4KGbrWC28J5rsGzu35WiMZxVyShRHse",
  "key48": "61ncJFWhU5wDAT57UX6qnPpb1tVtyiBxhcttWDpf2iU2ab81NgBpXfdkcQeGfG6QYNZR4vTCRKUAGF2WDA8qk1u7"
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
