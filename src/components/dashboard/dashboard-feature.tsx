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
    "3mptNrgUSbM8G8aC34voWRRGwDY5Zz1vg5LRsppPyh7v8CQetSEDKzLiDk9CREnNMNKrLsEc3razQypRts9E5m4X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eR2NyLKtoVe3MPQQwLkLRHbqQxf7jLeG8eLWQx5TZevBY1jdd8St1TBgYiGpf8hN7LTprEjQk3ZzmPfUQxPDovg",
  "key1": "3KedN9w4q5uS5rKuP34uYx8UQcGoGuD5V6WuAtVwcqiHhi64KTcEngfGUiw48ZeJSBnH4nhhMgcxxrLh3QgV6fG8",
  "key2": "5SRjVcJ6Gwqwr2Fxi1DCpe6kKvJwFZc8aFAGu2gEc3ygGUhT7aohHn1p1d2jRgKZ249z3S6YAYgScwhsuECKkbhx",
  "key3": "3kybfTLbAxti4ntFEQW7QKz7BSnoCcbaFSVL3EjjR9RbdXz442CKUf3g1D2z4qBQmCZNHKqzLWnPfGnm6BCkgLH1",
  "key4": "5VUddcshVUZtHhSuLDvKMJseWxB9S4MLwkFcfS9W2UqMXazX1TNu31LjqF8HVSTGy7CTsdAdhb4g1WzRsKrUM2od",
  "key5": "4njAN3BdVKwPx5oW8yLtmme1bVndKJDQwVbmShVryUJyDFxixW9cjmJ7UxqyEHKV3LazZPY41KoodxuQfmeeRJeD",
  "key6": "2Lz3i2EHkaHVjaugiSpoGduQApAS83UBHNbu1Up5pSxtvVNU9EJxq1YdPcmbqiVnaCRyZaDTdw1T7BaALdboBWPb",
  "key7": "7PF62oE4KXzHnu8xWhWDPTFVywQV6wiiScpgiX5gXCD1kfk2MTmoE33KHpaeQ62ZJuDV6BXwft8kip5iXZd2ffe",
  "key8": "4cVdBdpHwpkXctKXzc8zushMuJYdn7grNBoEmDYjVQVpD61mxWcQiANEAM2bsbug7rdfWHS7oZgaZiz3n9d7tNa",
  "key9": "3wgbGQvtbB8QJPBrihpKb7fFdKPJHkWg5r3M1ofDFp29vPtj4LtuC7c5XWpwEC82xn9MrGFectcUiuj5uAcKtgsU",
  "key10": "5s3grm1Z6HLdku7V7QM1xwUAKEo6pw8tziqLj8HzbAchVRXkXY33uikra1Z69RV9cQ2E6kAiBzyC39QDb131XMft",
  "key11": "5ur815BFD682u5nkjEpbSVtxXqnt1wt7zN1nVa9tak562oCoybgSDaLAuuDrVAD49znaFjYYSWhiZ4WuQGsVB5Sy",
  "key12": "5wyy9LQEepunfAjEFodP5TcHa21FFqWKXfDB9CoFzcVNy1crfyEo9B6ttw5dM7F5rTWexyKRP4onFGtNh6eX6DrC",
  "key13": "4em1E2A6nXoqUcRwXvPQzngudsLt9wTX7LAT22epZEZ2o3VC4CdywauSJYMfN48dqfBTrwWen8nfycUsM9Weh3hg",
  "key14": "5y39M8rxVC5BVeZUgZVoyv4RmZdGTZT1cf8KJNSnTd5HMqukUsgZKmK58TFTtWPWU5JgbYoR4tLoxQjj7qHcLzDv",
  "key15": "2cagrLBxP1xx1xEct6oz7cq88RaT1KH31T91UaL83X4m5hHH4xRbfKrQZbVvPtJ7LVbcdGtwuToZTtT5kmSErZBF",
  "key16": "5W4acJG7mZkY4s3BtwCtuxsWTvXuDGZWXitJ9zABY9yaEnWtjpZQX5gu7XjAqp7hnvfynmqfb4URU9SvDpthLSNP",
  "key17": "znQHgSAxt5NFPyQc1UR6Tyt22Yu97hFfJrizx9CcxFjLXkgoUApH8y4FLJKmJVMD5qJBEVWiaNCpPe5E45HzvVP",
  "key18": "5Lu7C11sMePuNRojPpi15ondncCYMXVE5NRaLwUZiBTr45JpE4FnhumBVrrM6wQsmJQqnP7B5KkKZmt5p1AZindu",
  "key19": "5WHzrat5PVtA3JPm6kdtaShmk1Ri4UgzUhrvnvirtV7ypGXmrneacdfa588KihFmJsti9goH6LCrfpeHqmUbbpyi",
  "key20": "5H8g5MTexJT1tjv2HKtxeSMm3LisN1oBcvHuhEzQrTJG3cvdFMEsEkXGPDNRvgr2fxQ1V1Q9zpC8ZhcXw3Jk3fzy",
  "key21": "4TuqCY7cCMgYf57ZGZfFs97PtrbnYFWA1L9JMfJcSqvZvx3bQWG3FbRHrdsycueQ47GmDGcpj5PC1Ld5scB67YQS",
  "key22": "2Sd9a5h9zq3VZmytGBWY4DYfJ8SJSnH7UjCMWuzGV1VxXvhCKzSgJv9dSkzD3QQDLGHnkw8AE2icX34K5pYMK9uo",
  "key23": "41ruPFTJwgmiC9mp2HqkGrkFFvrD4XqPN6exuCz5NADPSKjSH1QgjQRepDsC34yUH7EEXNU1CqbP68wx13oENw3j",
  "key24": "kMt629DwhdeepLaa6VkSUzsQEmjudz2rjQuXHMAVQf4WJzwQeXFbQrZc2QkfyBSSZVTiUepfk3aab5bd8sQ8pob",
  "key25": "DBsRCEJqatPZez1RzYBdsEhTxuMj78bYAAs9FyhonGAHLiKwUeZFZARmBgeXq69PZkzFF9ELFidhqmmHeHqamai",
  "key26": "sYdS4avcy56hXiGc5jsLjDbX43FaWhL3FkLL9VRspZTFMkFitnACSXguZ3nUkdP22SuQvAR6YcxcXo8RuXZU6Ng",
  "key27": "27hr55a1mWFWQCZF3sp92idjTzA5pumKjoUbPPkmt35pBKoQM369FeiEbka7EojcRmoZtBoWrc9VQW9H1J3fzTE2"
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
