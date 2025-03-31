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
    "35QwjhgH8m1Rygv68AdUZkDQrofcANomUXM7D9nyBHLLsXfU6y4Q3k4mFxCuna4ULsVry7fzHz8ghXvLefqpHRsq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2higcpUBEyFq1QU73x11n6TrAZ13j8Sp3rvu7F7aQ3DPkDEdAi7AyQ1rBFuiL5U1vY5ScL8BCJcCKFaTCc8227Pr",
  "key1": "55NdrXrdxooXTneEf8vqS1fYwytwrTu5sjnpiWvDd3i3B9tT2naW7qkXrZ7vREuGn8oKvpc592yRxQDejFTdKcXX",
  "key2": "8YhP8brFYdSBDxqAXzWyvPrdH2n7c4tXPh2RP1fCFEaBArttCKBwXATMmAk3cTP4kSGdbWhrm6Y7VahiDL3aYaP",
  "key3": "4xdt9fUytAeCieM3HkT2qunmhudRHqx4AUXG2engVwDhv3B4U3quyBezANNocNrQcrUP6PQcyDsNac1iuXJGiMq7",
  "key4": "5FRQuneFXBthgjPQUzWZeVbJFh8j64DYjrzKj2vHBfNP6ELD5A5UTuc63v6GyKsKwhw73V8DBCVH27fndSi4WADu",
  "key5": "2fHwb4Lxjmpx9hGg5PJhN2KunctKQwZtuJh55saUHY6f1dM35j59ibQVo5Jv5VGdPFqd1rhcj43xn5eT5ZT87k61",
  "key6": "5tzqFn6wkY96CgEypF2Qpmhi3JK9H58QWptozvD38Rv7rbrNys3gwJ4uV3rLqYAij3ZVZBgQNzSDZLEiQ3FZZPgE",
  "key7": "64H1HFXRdRvyYyTXto4sQcLcvpCsnFYB6Ff62nHutPHBWyCasHvp7nKmyjeHhLKxJpRdL1zs3wLvUbXPycb6WBNg",
  "key8": "5b4GCtxWPNA46XsPD9To6A6mNtDMpfXhiDc9AeHyYNU2guSZsLg4xMBHunYim5ChdoPnwv8stPUh38yXPhocZt7E",
  "key9": "2ZykVLrVnm7xS4qFjTsayxxaeN333j4CuYWwwB2SZ6bc6AvYeDffMgwEyZEaELJvpvJ3YzBtPgZJRF5rmuAbQ7du",
  "key10": "PBeNRU1YBFLN1Y53q4YyZBv65GwHmXsmKJifG21fsBpSmasao4LSrhr7k36GZ4sKBmso7xpV4qvdtQfHoaCMB7w",
  "key11": "2gmokV4ktzwcAucLQbS1VxKSDq9ncLyXjktZXEBESdFRstZ8sTd1xFoGjJPVzNEQgLPoDc2UVcDjmGZDDN7J9vmn",
  "key12": "JKFk6nLL1iL4deRwdQ9XkD3ZGf5NB2UZGKSK5yaoNdqFhDMswGZjBWWHfbHbaHWjzCvMzacji9BXmy3T534hCM3",
  "key13": "iU1vFRq2aC4fUjDSubzHHpkZuqqYMQz2SqEQ2U6F5r4FyNecr6ay43YGYrFoo5RF1FFVXhwuG21AvbiC1b9Fnmk",
  "key14": "2hS3LBUX6nkmhxdapNnzSgaN2fpB6dZxcJBicAvL8ijNbZBLRW5ULfLZwMMAoYTGHga84SoYpJ6sBjb7RVMT5pYT",
  "key15": "5jogh6tXwLTNhodyT1DNiLT9bLPFFQK7QS27g7r1uaoxfkdzVtnj5YzDR8VyK8NfUV8ETQCLxXxuCTdrGgSUL1GF",
  "key16": "646FEdp6vmSWyRCCx3FQCLZsDx7cKzxZgwPJPGqsM59jBV7TshKXncAruzX5aX2EMWYNzFhS5SoFsE7f13CSdAGU",
  "key17": "jPMYug5uTovsTzuUeFB6j2EcczcckV7H6FD5jtpkif3E2ugKDhPTz14ugzADtsU9jPdr3PqPy3aS4bHUDGZgtVm",
  "key18": "5kKHpatwSbdFPzkFtrJ8x4877gS1NYxP72JqRVbuxC7r3inRdNeqp4wrGNWEJuCGiVGprCSZMEts6fZ3pwyczAN3",
  "key19": "22yUtYZwqq5dsNwVkXjfiZVZvg35yKDqr9VzCMwpkGo51kgRNvabQzVt3nwNbkvw2oxF6Z9bc6eBv7F9aksD64GK",
  "key20": "5ovuw7t2KNgUuZyNXypdutrtuBxJxkewPd8m9WJRKU8Xn6WQKFZtCFA6Sf1VDbxNJaufmPtqScs6mf992SU2FAaM",
  "key21": "568FwNkoDz4KY6kK7FVryPVR22YBT7csu5k3D4YnVumoSGTFbLZz9qFsLjGHh2kyNWT6u7vb9yKVr3nXBZJFcy8j",
  "key22": "59Dged91EjUj64voV9NbiyUUpBHY1QTGsmG1zLXuVmGgeT4Rpj4rngY2owpKLe6oZ4skMVv8sPyZQf35V6bukpY3",
  "key23": "2EwcQ9gh4qCpscswwoP8f5BBuQ2rqjxEsfPnuZCWWfexX8b4pd2EB1nkQRfNmTzYi6hPpBEYmaW8HtyLVkqzU5dN",
  "key24": "4MwBktHQHCNVF56v6a64X8FjtScfgXbNqG6KfhnPPc3EzBiH5euWEkrMq6V4EHKbuo8zjDTxCS7QvBHX65zZaSPC",
  "key25": "xebhKmNazrhwbGjew9nmKrvzVxviLV4qLeBE8Bb21MGsHYTp47Ce9QD4MvzJs5ama5dhKDW1afZqpzGTgKpYMMR",
  "key26": "31NmsSS43hknzvf8BWEUuJA8aAu6KtdeqzbKfMjFcyTtZ46iBaWcj8mbBdnp3rAYm1FfEma69UywVp9ghdCnBDK2",
  "key27": "5Y8U3tkTsUm79jHZT9pSTTTpHzKTjHVNj2ZDgiqq5sEQAhqAsRckWs7ZsNT8pnCWqGgEnZN85GL9Sb6wnkwKhZNB",
  "key28": "3PvuJzTmpawnn17sBDvhyMBmmJB9kk6H6p2Td4K4iN2ShZ8948CmjqZEUZW3vczUi6BqtVtGKX8ahK6UNBqv6RJm",
  "key29": "2h3ZrFod9wtjM6gXMLDPwxAtJCuw3K2SLSgwdphwzP2tpoV177NYDMMH28qqPGwddZCJeLHaZkqsxF5k3MkJVuKV"
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
