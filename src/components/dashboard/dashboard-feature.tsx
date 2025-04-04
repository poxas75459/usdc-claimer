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
    "cFnwARUDqphFjLq9H8JPEWWZmRzkC9BpVfJh6udskkbcfHboA6B1KFumV34bxuaH2p2P6ByENha4GrVzrSEDifj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6G3VY2iBdpfDGy2PUeoTjjSDuvz9EztmvjZwQngkvquhxMmknzymFnbkfKAVQvhUEBvHMtWT4YXhi2N8SXeMBBF",
  "key1": "4mjUc15dHkwcV1pDQHcjWJBMNzgisy2PDkjbctRX8DfzU2j2MVRFThLeN4gFaTkJYqq9KWtpETGjbwHaSi3S3g5t",
  "key2": "5qnc4JTXvsCTP2eKBsaWBLM8wVZa9g4wkbyL3HJ8fp8j9D2Z7S7N8ZCLymvLWsQsULZuUTMsoSi97MR6n41YEXXX",
  "key3": "v5DEPxUo14pDFv3pDQXKFkk66xKdwzRzRR6f3hRGNQb1gRsedg3UgDmhmCZmGn7yEhZWhCKcFZRycNqRVWSwLd5",
  "key4": "3YoZER9Xd6MqcKhdY8j2ysBtEdmcuuFNDBREMsd4BuTLZhZqVvamzRgUbtkqZHvVtphvZvJBi1rnXGKex5Xcnha2",
  "key5": "pJBxb6gK8UkESaGT81Zj1xxgedMLf89cQtJnoHeZhmYd8H18ubt9vpX6wSw7DRWDeTsfWzs8J5pLzYjNvtfzrE6",
  "key6": "2iqoMp9oGftD2kF2HTEf2ZMGKmHwWgGAh9ksaihsbq6ekdAJZiN3Mknipxq3zHCbNxdddKAG6Ni7xPALckcyun2y",
  "key7": "QdBjHQax95R2e38e51bWUzAWG2XjbMP2wYEzDRXNtNUz3fczMxB1ZdLYwq8KX84ytGJtZmeAVRt668mxT84Z52g",
  "key8": "sZu7mpymKuCoDkhdcL5M2HXZJhRaX2vZFKP4oNTFWvjbv5yUQsMkeDXMPMB2ZudCXhtRZekF9XGDEsbpf1zdAgA",
  "key9": "aT4MXgCCVG5Piax8by7jhHRN8Tjs3xgX43bKsu9xc1azRjECmg1pVocmD8UQz2x5uqsXoKY8DVKXSucuqp8CF5G",
  "key10": "4JfKrTavHXwzyNAdw8rCUm6MmCPymR2oXDf4KMR3sh9jPpCrUXKbnTz8MTFrzLcituYqFSbQ9DJiKjwRAUcaci8g",
  "key11": "4g44qqkzKStm9B7aJbiuBY7kWWRGXNkWQFye5BV1DkiskeWg3yPAzkUrXTDAsoL7aUamrMRSN1DCxktQpq42CoRz",
  "key12": "2s6MLFZnPDraUfEkDK71S5W8TQE6WfoTuyvfgMTwVtqMnxY53kquGvdAPwVRRi772QMDR8SXmVcjfbhwPXS4Nhew",
  "key13": "5GLqnytcudnFPPe43MQcP3UQYerZiavERCWn57Z7hjTezC2GwkZwSTKPn2jkyTLFtVZxbXgkX7cRkuz54GRiXWDX",
  "key14": "3B2L1gtBovthrHDPWFmWZApnT14k1q54ySTYiMpFAdkAXqSstrkBYYrWqdtxqDRjmGFejq2pamntbh97eU4M66Ac",
  "key15": "2v9EbzHFo2YBw2U4HjpNVor9v1tNRxzR13rwxuAnNUoG18f9pDj8t9w9duocK3KhuXcBc3k7aGsdeuXzuUX9kf3R",
  "key16": "5czwPMVLBpyvXwcktY5wRC5KMB627A9FNAhdPXb6JR242C5cWGj6eko8tndosgJj6JxQ7CzSUjuHwhUMeDf4MqJe",
  "key17": "5LQ1tWihuWypLEmEtGtnzSUVYK8dWNsqrVVeR1StURgkF2i6EJYbZNhnXmKYtpu3jRW4ZtYHPXhuufPbq8UDyAdv",
  "key18": "HoPseCDSYvJmB6qmjSCpKD1zvnezUxWgnVENRqXs7z7s4bQKMuimP4EY1NmHiCMihSZwQYUKD9LKmgpg8vyetDK",
  "key19": "3QoQhXkw6im9pSnfD4hyBcwiwpuPE47u25AQNMomopxYJY4Ra7N66hkJEtVSxbQZpCFUoENJu6NLJLpo68wCrGep",
  "key20": "4mEPj7JKE8b4v8szgQpLseoDUuUoiHsQ4bxWz3EBLW4U666xT57XGA5GXkfWe7vXGAsJvYwCZSagMRBRXWRdnAqx",
  "key21": "5VQCNiLJ3s4buEtQZAfuUXiHvyaeBxLqUutMdMM2uTjeqX7DQJSwz7VNZBR4mvsAwcEb3bpmAyDdLYhBRqkL398T",
  "key22": "qMMZLUvNNubuSRLJM2JVuwUwbn3PR9cLEtQwNe9jsf4qJkFcYMsRQqy5f4uxy2FoZ2g3VGWCjFhvjhkaY1jwZbT",
  "key23": "2J8hmMNbkKqzQu2utbC9v5MFWvKsoAgU3fCuePPgudnrq14MPTYTyMuAEEjW8uUQm78DUvKY5haAf4iMS8C6jcbS",
  "key24": "57MQbSGnmMQrzkSm7mstqyCm9stwfCkwTUj9GQ7Mvyye5XsrTdbUZy2vwdNZnGBiWFpuZ4mqyhjBiyqefVs1jum4",
  "key25": "oewsuYEodqh2pygmPVJW5GCXPcnW18VCBwSxdqCtSYXTLQUTayL7T1aLWJTNLFBWWTbWWBHKsWfJwjme9nWVT8z",
  "key26": "3Kyk9vi3WWU6SAQdYtQTH5xJM6LGU29wDXozW9Z5jfq5hkwDqPtuJ1wNR7124Esms9s4bsikxvMxi1sJBSGey3TT",
  "key27": "2uc6kTW7FziGypanudUPP92FeKDBWyPWYgNS9UtF3H5EbaUmfdhNAX3BD8irRXf9mRmNkQSVHGz18PkFJGCkm2UK",
  "key28": "35J51yph7cbGQ6rXZTqzh2aWip42AvQZixxiRpZcgSJVWjXaCd2pf1vECs5F3kejsrBtAHdNfhvymwvwA6wZo3Ai",
  "key29": "5ZnJtGrXL7LChmA1c2bQwrTVpHQYaNPxYPH7R9YkQbky2EuBv2GfYKHJegymbCX9eEL8o1dkyBKDiGX4EkR9qe7A",
  "key30": "4bdHSruMfKHchbMKmJzpfmv5LpMiXLmBEcJmWtHjryrCKsqoTiQGgXheeZ73zmfcgAWt6qdLDv8iaCAZ3kAku5PG",
  "key31": "4GZdjk6tG8cxTYYZymVEne4XwAZ7HQKZ2t7WJMny7oDgLJ3j6acANZcHB5AzykPxTerAsKqsJnDBaqR8mydtogzU",
  "key32": "eEtu8Y6SLmPEByHJP5Se3HoqKS5McTu9Uwm1VUGtqfemQFHUNPKd6gryuBixXNfdioemBAg2hH6REuZnXiFTmTe",
  "key33": "3EVPHb5REh1r4Ch7n7LdtEPHkyf9vgTczbhQvE8byt2vXhmKGMbQ5socUhfKJ2G6GoUjJoN7gGTTR89k4473DTnm",
  "key34": "4n8GbmVkjeTxYRuskoBSJx4inhFpSbFpftHWVs984nMqLpxhmRm755zEBwKN7n1jwV4EeKrnFycq3GdGJfeQY3sC",
  "key35": "WVCSSgGxsaiMWg5TerzhqEYFrsJQAi7sVpCCdqccDs9zC7fXx3aWrjw43AG9k3aYAAyGa4voF7s76YoZ4jELvfe",
  "key36": "4qVoi9Mhat7K3avvMa5wKqbKzcCAskCfAYix1TA1RcpntFeHnq9GWm7CwciRxEXPgWa13KvZrr2gpdRYTcEvt1XM"
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
