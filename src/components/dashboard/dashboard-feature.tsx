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
    "2CoBjkWim5KH6MCcogvdpbJwfTRQNgbTetAtXzc14etVqmRmi7nUBYY8Q3tf3W6jAHZxqyAJAZXtMadwZinxMp9h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TF6HSWA9h9b3Vhqv8DwJazNE6TH9dyy8Qv8EhnPGVzRoLRFAxDi8j8KXqwKoEeboPBcDPfzfqKPwNQX9zBLfavt",
  "key1": "2EhDFhKcvmYDNL4XKCyAf3nUCZWZsKUrZEgtADqWtpjEpqS9s7fqijKsJP8hW9WqJzB33imFRyFSoYjdXpexSq7w",
  "key2": "4SpkY5yQ2rBK6cX6VaqQ7KUqbu1TZksM5p5zdCsqSe2YU3ca1CwDXMDF7Byu1hZxDaC35o4SwVLWzKHjF3hydZ3f",
  "key3": "2iSmEjKZFQdLEjb2nnZTw8mPqPDYvNqmpphVogsDnyqUSkxfSH5JJ3F2dWigmh6a1BrniPAN7jyttiidSixQ4MSA",
  "key4": "BmfYYerFwnmKdSb2QCCLJoJrHKbRN8ymwTo35BG9rGcwusNLhdNJ76efNyh6YJa1iaxtgSj6C19fFRX2D5Ggw1V",
  "key5": "5CmQhbfBB1SoXJnhTjXtAYXgGjr816UytkJ4Gpyuc6N9JRX4JmaPDafQmCaegVa137rKKueAbL8eAWrZCkga6MJQ",
  "key6": "2t957aoaHdA1JbjqzQ6hGee5u9iA2S6RfQx4DbR5NfrEZw3FeEQssh5wdpjjGLZX2Zzu6YHvwiwoaubWfnd7pdVA",
  "key7": "43AxvNiWCEszi3L6Pqzb75yvKvkEh9ybMxKBPtLP6H9Us6p2hXt1x9RwPSYdF8j3sTDJiksWmoRjo4ACTe7knmug",
  "key8": "5yMMZibPE865QkMHtzspH5ScCHsB8KpNDZkLhx82BsPTr3Z2w65hrpRFTp17f7QDvtPR7V6CjWenA9mjaUCp4mWZ",
  "key9": "5ZTbJn6b2WnZ5EpxY1eMPuaW7zCgC8RHD3UxuuAmskmHe2yyjdUQgqSMS5iC8Hh9XFo1HgQ26HM2v7uwgVfYrsrm",
  "key10": "3C1Pw58Q8PsXWnDMszHDkBzxz28AF9EFVgPTNwAbiv8jLyaoaBxin7GfjK8sc8BjfzA5raLRDGrrC1NJMQRT72hx",
  "key11": "zQovkRqcNrj12XMt6hPpJ7Z3e2s21hN61J3w2y916tcknHnRrV4ES5tbVAqu7SUN5pUXJUUJFdTvXwn7LcWxUVg",
  "key12": "39H3PAT4e6WjGwL6UqmVzX4U2hFnTcjug8f96StDT3VgRxSkqdTb4phWXxBcBFQyprZfEqXuqSQMNSPJzrGP788s",
  "key13": "533unmfH7XqnbVqDYSWvF95MPDoYJSFhanTjUhZt1zEAeTJJmtFo5jP3BLZr4AyJ7qTjNUJ1V76PfBjRHKtBv9cq",
  "key14": "2FmkiyEEPcW8ak7xVJvCraUjUvGtCNZqeR6ALpWmNU6Qft86JZyqk2duSTEq4PxvhN3Eu7GaiQM9VT2szeu4Kx3C",
  "key15": "2hSA7pDdDRdRoQZtJpDUobruYpq3Xjp3UZcfYW13dJbcTecw6kbqwyo3Bo1RVnk6wpZpgLwFL3N1N16XtT5bca4j",
  "key16": "5rXqo75zu9yrEF19YtS6mAKLB1VhFEmY91k7rekVt61T5BbPAicmu8QRNXH1wqYL9JbXPoAmgzfBQ1fYizWQoWme",
  "key17": "337yjeNfJUmNjHq4sCauSDqo2Zwbfo68uF87MYXnzNYbKXgiZb74zXhFsbJz2o2EoE6SHoLNDiB8m1vXYnuZ8ZAj",
  "key18": "d8w6jRgxDm92wy5eoqLMHaNMgfC5Z3jtCpG4nU3sj2eijqksPidGS6QC5Dzjh3NxkKfWayWSW3imQJuvoBGm17J",
  "key19": "2AMDt9LB9ExCFeLqULN6ZcuXnfT8xhG3o9mdNJRBbFkMT5WwPoF9U2jeXkFjNRU8psdp4M4q3UWGN3yjt8tSxbR4",
  "key20": "4SjRCxTavEGEy95yzKkb7G4LidbpaTCj62PD2CNJeZvZrVtQZQFd6xX7RWDcnQ18vn5ENHnB42uWm7LPaVc8NAwA",
  "key21": "2aaYh5ozeMkftqv4jDaWyMhKCii4dJb9rC9ZwAE3GATJKxiw4bkufCZFWTyKz4Po21Ln8panN46xfVspALfVuDjN",
  "key22": "3DWGAqKgwH2FTWXr6yA47NpWSJ9uYYieDnz3vNGy1x3B7hXS59J8mXkwEd8kR47mtu7ztSXYgQBuWD4vJxwY3MqP",
  "key23": "58NK7XT3sm1iKK2cmUeH2crQvnGPqifYaSCiuiSTCkMJFq2gKQn7Tr9DyeZMHj2EFip4ii89Tdr3Uyo65LYtudoD",
  "key24": "2vB87cMc6quSbkF7hNegsqzDmvgs5oQDbGbf8zMWXB7LmMg442xWPjg1jRvB2G2g529MNj1EEK9V4nMTs9fAMyzA",
  "key25": "2pjHMMJEjcuZKW9yzTZwuso8FfRocr6M5TxZN1YT3BV3Mqha5HGMMYxLYd1k2wgnXGvncQ4Hek8yxNxYUSW7sDz6",
  "key26": "2HiC41SBirwuXJ6a1Jg7LoFWhJnPkSWAx6LGvqE8eDd49fQdLehqhHF9YJC1D1Ltifff9uLcqYGFnSes5uWUTFhW",
  "key27": "2XaA8VJ6qUZwE97hcFpaVCAjwriHC5t5zYeXST1VjympgZxFZ5sH6ZWQuNP2MbV9TYaQELtU2UdbsBfoB73LvWJC",
  "key28": "3YwinxwLGsMX3SqXZUoPSKVeb1AbKnppzYrx7idvmXFwSxJRjseuLZ7ryW8FRzkjmEFeYB1WeDpmC1xQa86zJA34",
  "key29": "ocqVReiCuaCrdgS1rCCGr88dnyZsdH4cDzgR4LCptKZjEXFcF6am1gdtcKwwKDQKMrmdbKcDPzS4ZrFijbx1RQQ",
  "key30": "3qstyh3xUKyziiSDvzk2KLcBcbJyxw3shkzYeZpEQq46Ny68JVZVgbm2sHCgXJegxCKMpfD4CARs1F62ndu8DbrL",
  "key31": "WZVyhYCinhuYStEk4sx2TnQnadqP4szifiFSxj8AgrUS5Qs3CfXZPMWSfP9BiLFEfsEoUb8CPfM2E3ZA6JsxZDY",
  "key32": "3PjzZDf5HNdpzboVrvjX7jxRV8tL15CHpu6gh7AZtXD4YXugm1DVuy9izWWevVpnCa8CyyGMzPBBKM4Q77o4QjK",
  "key33": "3YfcUamwP3cqvMMhcysUp85Ew3zjQcyrbM5eRs6MEne7b7jAPWSo4nQszbtRnzqoEfd4VdcfzqFLiTjY7YfRizHi",
  "key34": "5NkvwwrF3A91CCBQeZaRxnXuahmjtHt5VF7oFjNtyTWy4rWiKEqXTvDfBwAkiGPAAkU9AcgVprAgaq36C61F36Kt",
  "key35": "3W1hmTUSM995M3d6gsJ8V3GLmhfZzwpKSfGSgjh7XvAwZKNyYcqQUi17wgKsAT6f8Smxa5hnydpsgKAUaW6sJPMF",
  "key36": "5NP4F35XVzi8mPJ2A9CWqtdrGEDoLGgbQQJZx8bQppUtTDBfmR9JayUF7Nxqistfmu47TyKsBga7unKeQ6XhhdNG",
  "key37": "22j4akTLabbZp4zgybnsnrYZTNhRfKhBHQqeabj6fQJ6SNC4vMcDsikNRfHte6xXKhcCSMDciXMy4ntB6mrs9qMK"
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
