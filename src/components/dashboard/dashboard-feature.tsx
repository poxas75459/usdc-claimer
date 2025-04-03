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
    "4RbwcadNruSx9TdCHwSooppMj295BTBNPHgtGxhS4tNeNUJSqu8dpua4K1hvyagKZ6RZkbeTqhCHnus6AAq1u6if"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z91jjWEPexUCpf29M3ouF2ApFtMvNCUQeBBhrWRvPzqUmLtBSnWzeqXcMxvCwyMuS5DdUQ2drkcgPVUADNpKsfS",
  "key1": "2Pf54k7F6qW6a7PB2hgcji8m13Fa2d4RDBkGmd8AusEMTfvStTpaLgTpG2B5GrBACJRBwszoV3JydCmr38yrgQvw",
  "key2": "55pvnfhuUyLkENsW8TnSE5BsEgJC5wPYoXKMmxaaLhBxyQuQQk3zMrz4rJ1RPtQKGuGafdDgoQhKyn3s1VPRWJHn",
  "key3": "3RKTXCZJbzW8hqnZ1xhnRE6o1sPnA94TD2GgbEDK2CRHtyuXJTWs4Qu9PnnPDmaQartuo5UMsSv5hsf1zyGcwegc",
  "key4": "3gTuynWYsrAKB3n5dPvzeLda6Mcn1za9tkFq1tnC3g59Gbw24Et3W88U1ngfHjf3NWryx8GnQ8DLxXx75wfF6VhV",
  "key5": "4w2HrRNb5df7DCQSnyx2f76BJxGpmax7AgUg6FrukzhpcTUF5yvQWbEGp2NxLF4hJK6WoKuXdhcR7kBmv3ybbPJR",
  "key6": "ZeUuWDZ56ZC7YgRNYB8RFvGAKbZag65anVWQAgnMLai4fWM3DUcP6AXZnUg5uFXMEgvWZ3wbZCp5kCdjSbBQSSH",
  "key7": "w4cPLgDViGxNmsTz7utbgB8AD7VGxmbUk2QCrdw65G5jspKDc9TK3pd1cEvywzvPbXC9VEr9u9aB3EpZ72C1UCL",
  "key8": "2vqR67AemYVNSytkyS65S8eRuJdVvB5F6hwKcwLmrd9hSvq72pM8qp8fQi4bn1Umare6wBsbuBFnmEgsooNp4jkJ",
  "key9": "k5rvgaxDm12WRG3xgtqrtWuZjoQYWTn2MW7ZEdG43AY3wDzjpJdYRrjFQh94zGbaTUR4s4FXhxjFmqfx3g6LLeY",
  "key10": "5jqdxyA8a1VtmotYMTMgSjKqaHJDRwE6Cmtmu9ohsETfjxosZkqUTF9hN6kLUeiexHZKDYc7a121UFTQbhFMWFxM",
  "key11": "3xTGxB6hgKW3RVToEZeuK8ZWXmEnHebbA3Hx48gM97vSPXUnGeaNqQjeDM9yXEzQZm8vHGpp9wxNTEBPGJB5M1eg",
  "key12": "23u16PAccQnbedMmfz8JqWz8UCVHAVEJapxwFntyZqBqESy9nGQy1j4aU9YRPe15aNLXjUveJerJrKuX4QxRBvPY",
  "key13": "3gGmuVpeBPR77EYxtGzqaP5e1eZjrg2Bk9D37kgxWvgjJeqDgoTZZWoGPu1Ha9PxjN5WsoDFE5r1vcL4EyUREg7w",
  "key14": "5CxR44V2yoryBFSJ9nNJBmvE8HbCF4JtZegPKiK2izHkBf3kfNfBHWzcJoRZYm7NeLTzBEg6S7SCuhdxqPK3LrkB",
  "key15": "LMYpqzJd9o9wwxRNvLxPGSthtjot21ASitWH9KkZtryhEG7xdF75FBRR6ibbZoJMxEb4RNDVVmL4gkTTuhwPU7i",
  "key16": "56t6pE1Ua5ztDmGy6z5X7BR5daxzjpCY2DjQhF51VbhWyDrNQceiJwKsu2HDaRZwTXGHQkdxaDSKttLhrxH9AdWp",
  "key17": "53cPV36JN9Um3WwgCLVneEyJ7TAvjbehrwjQnkAArR29SgZMJc47iiNoabe5q6XFTrT2uV55o9AYYFHWJpuiH6Fs",
  "key18": "5vonCrGBGuapANq8rmxwwAqnGsYR5JgD87FdLGCqt7n38yMajFgpnPTYYAxkyxbHMXPkiU9QeYHyEitF2ed3LuzC",
  "key19": "5e9Da9bhMDJGUjempqumXLtapA9LB2D6cuDm8aSwmgHufU868EQuDwhTRhxFqq8AenF8vZ4qwMptzXncLaPMvpbv",
  "key20": "41WnpHNjEYTL1tttUnPgMKus7j2bgY5rLAKrKU6L7uM1jkKgy8sHvjUSa5H67dDaNQp6HZ34vg6knwkJs3MKQERB",
  "key21": "4yqsjgbQtwaP9bgGRXwoDnewtajt9zSogBtwzkeKm1GbRbQz2Fh9c8WKjR1J2wZjqpeUP7itnsoCbZuqpMkU4KMM",
  "key22": "5Vn6P2TxVNHTQSLkwft65NK7pba8fJj6ioPZ15VDoiNkHFNW3fSSsv6SLbx8e7mTBe81rdHAs4gjjYme3vDoJcKm",
  "key23": "58LjT9ZiVybTp7AshYUY1rsnm1iuJqfsrfbHiKHTSjUDqBLWGXfpttWL4SzEgxNzqDcj5WxmGeTB1sApXvVQHWHU",
  "key24": "PMeygAk1YVC6CnNk2TNM9g7beit3oCb34Z9mrumXy1yoHhShKMiG4aNfzx5ieKP91FgLttkij8Wux9KFJSvhm4C",
  "key25": "24wzbghn4dQtJqQaUCcRt94mp6anEAZshY8EXvtTHjFEWt4RjrYPgSiiDoxdr6NfYJvQGJV7vWZXUNZvE91GaWRi",
  "key26": "4N8B22QQ9Qyc1EqVDkqFNzTbmzGe5H75MYp7FY9cihvUVVXE3JqmfvvUBsViDrw3B9dc4pi49dUDD3j4ZbgegHbp",
  "key27": "5FFMeYRw19kf5WjYRvhxUAcd6nFhqSJTBmW61PhbtKLA9DoQubcvcEdQu3B8GoQSjNyYMMbqgK5VsQA2hnN4mj2t",
  "key28": "35KoNFYuXFUoY9QgoVCNgikvD3Neahdxa885oHsY5tpCHBvMzjM6PqgY8osE2zzsrMf5JLvb6kqRjeoiquyDEdRi",
  "key29": "bVzFCJWnTZeXH6Vr99Xg6PS35ATFQvRQexJBzdEJ6G3m6oHCdveNCVSykSEQZBAvEBe1hhvpRK75nAkjJ1qEWfn",
  "key30": "4ZGkAKyN3Who3UWMGGrQ3Uzp5ewEtj6jNgUeoGXyBqd2BUPRn7Rs77wGmAxEmDVcnh9CcmYEyEgoNjaRkzuk66Xd",
  "key31": "3dQADuimYCNmvqxQNAmpgWpSH6TxYhTHJm7umhaBJ9AGHBYhLVzB2ZcVw6botw6h1qHCiFbAARppbVpxzY56fWNq",
  "key32": "5gBrAu8zNcp4hZYvoBtQW9AA1dwQks2pYYSn2V2mjsKzSiHoX3QoBDYCSPxZXjrUv4RbRzSPbGXa2TK8vkkAyuBp"
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
