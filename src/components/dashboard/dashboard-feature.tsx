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
    "2gkf18wz6d43a6toD12J5SvbPCuaNGUU27vSJDwt9C3kNce33Nm3AQGEUiCxVVJoK1hUTd9wU9TSKCMBrPciAo4G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37iY6mhLFZnGSDztuX6s5x7YvpjZUX2BjG6fAYFPBD1p56E75tAz36BAzrtRid7pZnqr45k3XDLJLanFhyUmVHmc",
  "key1": "XZzmNqRE1VqJCkPJt3usXppDiAcJFRHYV6bCNMrB3j67mQTcqW6h1sgrkaB5BtcEFvv17LVEEgJihYMYogn1dUg",
  "key2": "2uMDvZcJqV42HmSHNugVs9BpffoLiEnnMe8NVrmpPJnQ7xJmxnEcBZYQFaKVGWGAQ772osuLh8NLiYdBc45peTYu",
  "key3": "5kqF9m9dHuHiZSoLcsPtjLR1LwCCfs9AzWiKgKPzXPvgDPYnyHWZ3ntEyxvtpkhaLT2kQ5MV3KfDy3quiKhg5nWG",
  "key4": "3WgW8U7tfcBBgy7yvmbVq4kYFxuQh1VGrshqY8HT3G98KtbFG1A8GZfw4EjekWRGU2PgVZvRfCCRzsVqKz8bYCHy",
  "key5": "2FjNnjKafJjMTprkkBSJGTgsvN1aK1744177w2eUG5PMfPZCV4TL8oFD1SuqQKDVm754M4B1pbRWqNRr7igsf7NY",
  "key6": "5X3uXNeMBVMqAX3KntNuWg8Sp5daGKGj1ybuk2MvbeEXFgfKTUFq3yUj7CuE4yjhfuDiXNu692mJ9cGSmPrSNZPD",
  "key7": "5y3BR4MXd3Z2iSR6rZjHzc3fmMDwqL8pvU2tqeNPupM2p9YWYQGnudcPTvHWhacptA12tjG1Hc3ts35DuVwrNeNy",
  "key8": "2ELGTpRQKS5aDw3xyGUVSyENm8TuXqLai5Ngk3DrxCudsfhopNRyhCP9etqtVrz1tgtej9RjqgjmUdU5eJMsi18K",
  "key9": "2qS8bjnqzdUpxTdYtEN2h8bnKYnqNvUEN9ifHK513NShBtrwvWmW9bQCFSwwyLijdQeywqDk2s1ikuRimBF2pTPL",
  "key10": "5YQ3NY3nhE2YfagbvWF9CxVM8kjbX319VD9J59NX6Ehn5TvGCpX48Vc1fv3WdS8w1WikM4oVagZFsQQm4xhtbEX8",
  "key11": "5eZdFceT3hhr22wF1xG6kNF3b7kYEabLJdTWrFYQ1VCP6DuNgKSNBGgYkRCwSTB6XgE1Fr9UG7SBHDL4wK3NcqH5",
  "key12": "2uQ2LsLRretWt8ND4eza4kBteN5xE4tNoPSanXUHspXQFa9pq2yy1hzFdstUM8sQwkZC3BZLq94p3MnBxtx3v8Go",
  "key13": "3w8Uz1AcNGP5iDu1Z2JQFZq7ZtGSYbJn1gXhBwKjAa4bQ2vyRATKsr6sU4b8Xabj4V6da6yQE7CmxyJxFcEisdz9",
  "key14": "3YW7GMxEowAEcBNkimemx5PqYySAvd647KpuzKJWYRY9y8uTotwWaa3bUaEQ7ucc6kQCgWcMaGqvQ9rSiBASHEwf",
  "key15": "2xwHheT6ePeCS5HQyzc9DAuRLpt7q8v3mtbf4NHwUfgUzrRN5dCZxmGHGW4WRTFykVUFSV2FoCLxFa6JeoZFxYyx",
  "key16": "2ksvPEARruf98rBbC1QhzLV6BuZy7dbkWjGQyPV5W1ozdtyTXdGjBwwT1QGzMVMZ8TZiqq7WtvJ81oNrf6SsS4xw",
  "key17": "4TZT15xtbkAcefpmfjFJSzZg5vZivvLjWfzV5QPAjHminzz6hQoVKwcfzu6d8e8Zq9eS9ZbpizqJGjvUUGA94CJU",
  "key18": "5RedF97c3pokEy8zVnr3yW4h29ncbQDcdqXN3xoz92zapwbFL2SjNRjjvJAQuxdxJ9nyrQayMexrvSHPGXRnjfj9",
  "key19": "4U89k1h2ThWhQcWcgAQWDw5ftw8kuEgoKRpwhKyejN63XLWn2Xo1VtiCXW3cPwHfQXhHjdYWi4YwNyyJQ5GHSRQi",
  "key20": "2wRRFuTviZbSYrhD4z4bimQjM7k4jhB67JhbfEYtLbQs2Kn3PaJHaMJLNMQbgPGiEKHMQL81p5EKckaLZobvP2uZ",
  "key21": "QLozigznfHnD1U3UBjCV67jJYYaiT5nmZg6qRF4wp3Mj6BYXZZJnvaqkB5jkMUL7dVRak6axAsgt31PxP65Vnvh",
  "key22": "28WcxyG5qgHfE58MoVKmcRqDhpKMQ9xQRqVGuVa1XfvyyUmdgcJnqfHXpBZS8Fs8LigS3gSPj4FfnKn37z9rgca1",
  "key23": "3a9Lm58QHDc9dN3djoWX2xdPJ1nx3bCeVy8DKTUS9QXGBC9f4XJBSRN2zhEETrLijyfemiGK3ZABYMa2Z6AimJwp",
  "key24": "eQuVvSQMGteSmdd4PYJf7roJWa9eh3WTNsKuXVKZX32EX1uU9q22eYPSxGuP512wE9PAY7rR7DrTBYFfp2reYxG",
  "key25": "25yerPqF2GAhw6iF6FcCeoJKqjaH8rw4T3NTmAKBHMJHyjPcq19Qeq5inhKKZTRMhGccLCwpiK5UBedf2myA5Rb4",
  "key26": "sWe8M3YoyMdLBNMEqC4s9ZSWybKgvcvH1GsyZ6vkiQEeE7ddenBZBr9YZGQVz9vjfSrQbU3KhiXEwfNY5YK46MD",
  "key27": "22SSLF38swXn8sDimPaAUn3tQuySdB3sC12NnKtxPkKeMjvsr71qMRTBena7JLhkumtgyGihVzkTxrVwJttHfoPP",
  "key28": "5P1itpi6hSSEvgBLtiZQ4ET61iqdNu9dctSG2EWEGe5ZmD66MnjXDMc37bvCG18cKMuMFcpi1KJRu1KfAmuymS6C",
  "key29": "2v8VvQE4Zmig6Jz7NV3qS3j5SUUoxDXL2dnNDa9jzdjXacWREJ77AndLcUiE1oTziiNS4ZkcPaz3TUcYd1APJJYi",
  "key30": "2PNVR78EUdJqT7Br7ukyuZckwbSHy31PSkRtYNpW2Lgxb1m6GQ2u4SKUqJzYZ3pUiej1tUdVqXNDtN7LNpxS25hg",
  "key31": "2RurUK9xvUtMwUV4eSFm1h9Tsyuz9z8cvP76tYHrwsG93gPu9bSmeQVmLjmgHRZar81FahNi2wFoBu2FBDVAKFSg",
  "key32": "3FVgoAqvLrWmYBUCVp9Afgj53wPHQ11BDLSYaYfD3pqU5QuzvkuiBhrVrydFwtSoeR8ehT9R9JtyxZZHPat1dRwC",
  "key33": "Po2gZKg3cemULgQWkaxTiTkRxg67qubVYYRrLfjWVmkTsVP2kCMSYE8zBqPeo8r8vHvxy9yxZKjEhEAZwtp7YJV",
  "key34": "4HpRkWBq3BsnxEWjrv3Mu2yTfiPvGq5ueHZAkSQVv1MUBbumLBgUW2tJfEfHjGfGQY8g4YM2fctM5t5WrVMcpzdi",
  "key35": "vHJJV9YwU1Aua41tCPdhTf63gFQhYATmEUy83sr5XQrYExxxs4aD6TxGqYb5EtyJ7RTpjC6YzRXjAwmLA8iCDqu",
  "key36": "2xmcHrcyYWyBYAjTr2scD13ecDTisD33s1zjz9QzuCvV3vmbpAhZA4eSHVcNEev8fymwqcBQpvgx1BgZv1WgRvU1",
  "key37": "58AKxE4GsR4DiCEe4cbxygp9REowPQXggtPa12i9yrJpMbKSVmxGNCLUT7qgP7p9h7Bki14pMnUB7B9bGPtbyyPf"
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
