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
    "4qRDr7nExNCVg9jj39VRvd6WUY4pWzpXX5WPgmdfaVJtmbMhdg2dqRu7txPgvVVSzeFeUigkbaqsnzc3TUzhqCZh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3t1Syffy2fyBMZWxcvTCr4u1oxSx5nmq5riUiKW7surx1JYTA7DPi2ncGeaddfRJEDye95j9zFYbbEMK7LjjKE8i",
  "key1": "25AiFyJaeyYHQwvUiPp6wFfaQyU9BMuYUzmq6aYTPGgLr8XQpALJyGHf6RMPScFErp7moGbzGKtETTwLazeXQNPX",
  "key2": "3NkcEysWcteveQnbrRKdmbUg494YLBfmAjk8sSD1y7ydmbfS97sR9he3Musc4KMfS2ozawNUT2cNsV93mdPQewhn",
  "key3": "5PQphqQP7KNBvWFgAgFpziujW4TcaWN9z72oQEwiXoyCMPDtAc6W6RAtHdiVQHjcrS33m6fTknP85ttZEc1nVGcK",
  "key4": "2Z4h8zVRj7AdM17FRWDW1AJMXtVPKJLCbQ4rdGKfT747QReafYvprSPRZ7GN8ECtbBkZQ5UzH9vZ2UrQvTpvYFtC",
  "key5": "534Uyynn6zZsLdUNF6q9SzTcNrdct9Mtmc3wdk5wKo3JKo49BASCzRfSy2SNFsPpknS5R1y8vq5KgG65J6ghpy7B",
  "key6": "awiqMd84pDNH4hasgyc9obm25VxxtAE1ahKJKapjKZZZiM3bdxYo6gZ28GaGbKJR8Hg6rn9aPXQXBBdjnnGBu43",
  "key7": "5eiHoPa5AAewN2L92egq4ACBXymPokEreCb7PLVPQK9aPmNisbSrKtCsXr99MUmEqUQJuUQQxzqz9jxU3uAtaFoK",
  "key8": "2durW1kuRTuh1PcAeQFPPr5Mf8eEmVS1yMWFtbiNP82uxriojgxJe5o27YDdFtpSmohCPhijNUqAj3CYsdSz1tJh",
  "key9": "58icsYSVvsBPXpHqSJPMVcw28qFtfEkTJEnDsjBMJa5FXoCyTHcHyiKwzoFcoYzH8i8upv61ePKubEn8uivU1g8P",
  "key10": "jvcbJ658EZk8x69VsYyePmUJbKW8PU1WyKCXi6U2XtKK53acaZj3pWgN6WygkXdhcUHFxNzETn5VBCbKk2bDjdH",
  "key11": "GNhC1PbJFLpx6txsJM7jJfFnJ2Ypmsbt9zZ1vTzEjkSgwX83qmLf3gSrizjM8nUJpjdwqCnXrfE1ZMrxytCeiLw",
  "key12": "tAYZNYTyauFsJZwqJu8evsRHZ4ZBRXxaBP9NWMqfVC1RB7A8VFKB68UKjsNKj99QevV6a84wk12vuGWfbDiX1yH",
  "key13": "BE1d3hpS8NDr5otBpMa5sXeRqagHd34v8UbaEcVNGVACWayA643F3eShLuGfLqsrWg8JnQmXdS3ZUyomNGCVrRW",
  "key14": "3SGqYjQXk3sha6YQ11wdA3fg32w189YmdaKc5Fg1z5gvXguQ29j7SG9teaiRKBwqByn1XdSokYgFLzPXZeREVPYC",
  "key15": "64UtEhHdndNGZh5vAzfqfd9gdLSHdX9HDWGcEnvDXJ5u97uVZmZJ6VyW2gqFFQgwNn7tPZtz5RRWDs2CfcMvGono",
  "key16": "Ya547LC233JfVYMRoXLDVVcXLxTxgSpJvzhvVFhjfUZrcCjfjNU87Syj4c5KCTdXZAtuQLpdRAx6r8b9qp7tXYq",
  "key17": "5GTxHk2hGw54HStGeHx84YHYPhEqXbdsvKu2bAqwCpeqrZU2FA8uSqpMvfUdAPSuotNPN4aagAbgMYS2dosqtTkX",
  "key18": "3LNkvXCvmJhNhYf9cLSCCc5DNaTFdffnWp6D3NUQxwdmd9rsp8KDqViF2WEQfKt5nzc4nFLyiNNLN8h2K1VfeRKE",
  "key19": "3HvMBLmm3hW72aRQ3GEE26GPVrnQSiWaPz7r1XUTm3Eb6XYxvNGiSBXezdtHtyzC6i1z8e3CckNxQ1WU135NgyvD",
  "key20": "355D3EQ166aJpQtbCXnXdNjMMctbjcvhzxuZQqzSQPdjDP5oMQw7k6KNCEA1rxmpMY2QdCsn7aFmuFv76rxPFhHc",
  "key21": "3fca6sDa7ppJT23GRKNjNJzwyzn1XrhpuoXz6V1gN61uHDLx78ty8B445aN2kMJnJmArNcdiWBkdkT9J7icv5WzE",
  "key22": "5cmTJrgJDhGxXWAHD3jjukxZhUJ7iorm5ajUPDSsJFfKkPCMj6CgrdKdAPARdv5qNQZoVDnEVrkHQbrmv2P7zx12",
  "key23": "5UvyNhPyQX9FobqXfdKngF3bmAk5vBR48Zxj9fbYfTS4WuUrKM9yTeFARdyo2kvkk67jAfqgVGRM74qYvAEE1hLy",
  "key24": "C2EdNYs1Y5D7SPBVg27nYE7hj3oKSi5fX2cZ6DAABdzjpvpzyVk4dWZdBxuk4sjG8MA1L65ANYXPgc1gjjTJgx6",
  "key25": "2XxvDg53ToQsDDnvfNpFd4aUP4DDwPUZPkbVkDA4KthziwUJJH7rSLSGcJB85xKEK9NtRvs3ZkDddeQhC6YFb3mA",
  "key26": "4MUB3DKgFhnM7r5GhjUPDBnBnVFFT5Vo9qWmX4G222QYXrJjx53UMDwDQjY8CWETmG6PhdCCNTpZpSSjCihgEcgf",
  "key27": "67TviNA9YDUcAvfPHMJ8qMJauF5rEbw4sUgiUamRQENGSEc9MSHTU3YtpfTudcLT4NUz8WHgL8zfiNVZ25oecC2y",
  "key28": "3bejxoiseGLEDtkfJoWQj7UMjhyMEzv2CH8n2UJVH88PK3U5tm3zhFxaHjhwrLDDn6wY7DXaJM6JkJRt8G4nD9vk",
  "key29": "NFMhJTn9oUak8c2DkAK6mDr5mi53TdTphUaSrpGaWuvnbK48at393rNNbLgmNkAuL1mifvCG6tcMyRdEjPGU1Tn",
  "key30": "Lf2FS6v8Y6qjEe3R5NvTssdQbkALFnbJB7ap6mi6TDSDUDKX1EMPWbfjbhF2TSfDTHvjmY5B5qL8fgR8LX1hnQQ",
  "key31": "3CHSv2x12uZx4PYE8PpZihR8yXBCyvCjfD93m6pfVds8vjA9BkJVF3y9U5TcqGhfEH4gY264SWnyMj8m9tLVfQQu",
  "key32": "4UDkREzFAZNresaTCRNM5paAUrsRzNDmXZwPSpqReoHmiAN3WKBEsEXzpL1KLWu6gtoKgyfDi5MgKmf78vih8nBq",
  "key33": "2tLB7p1sh3h3CT43FWn661CEZuEsEKuSo591d6d7jjT5uRW5BaF8PaNZgDp41dYAa9Zrneir5NWn2zCLvThax3UB",
  "key34": "229d6GCoDacRQsvYh6KUkx4QsHBZd8KaZwozS3LKj9LKtW3iaJkMyUE13DFmMq9qRkmtRfqCTyG6rmKMveeyDp5T",
  "key35": "2Csi8m1hrWKWs1qkPkTUjAsmxcgwhrgxkgLDxPvhpC5JuuYJrrdb7jeFnCofFmkKWEPLVUMNXSkPbeTDawnMh2WW",
  "key36": "LzDhXpMWXp3bYegikw3YT5pNeaYc84ho1qA5gamNgcpVFquhiGX69PU4fdwvsE7piQJRc1fdc1nsy1aBnbBzpJn",
  "key37": "j2wys1jQuepWsZcucdj1PGDiAS8q4SBtE3ZB3rL4ciSJupbvf7TctQxbCvSaq7UzuuCr566u1phSACYupZBGL7n",
  "key38": "4i2696rK9EgaJsVF8S9CpQf1PWYZg2AACWtq1bbZ8nLfLhzNmQcNTsXnGJq15MGcwKWEaET9BDtbRwKuLJCjfLaC",
  "key39": "oiM3bHVicM289HC1A9yTKvLNZtZfhuKPtvDMPMXJwg6hDH1wpGJEE1eHd9va68Wzkwxiud5mSNqfWT2rop5aEpM",
  "key40": "2KrdNei3RVJ4UqQo3CVoRuT2qdmVtws8R3f1V6Q9jshq1rNYrqzZfwAXFJm5rGC7ZjTz4HbUmJMiYhouJGLKV1eq"
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
