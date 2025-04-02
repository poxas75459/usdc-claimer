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
    "4FZ4ExaW6gtFQprvV2RDzKcMehMh13bKGGwACKGkscB1VbPdWz2tYcNDusahTkq69nY3sMnCKQyEZ6UrnD9PNyM6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GtMpVY4odHizpc9kyRWAHvrh7saVXay2hpxjiUV5BHiAtnxSmYLboFoTntmYTiVosN5y6DDNiEDSGxoQqNgDy4c",
  "key1": "3C8Y8pSKMJmBeyKZhNPSEqem3AuC9TM7Lzg5znm2R5g1CG2H9m9oFb8mFgF6T3MUqdnwedZkqNszskX28GWZseLd",
  "key2": "5hUtUQiBTv1TXbUxPixFAgm57FTvGUngZwK7LgtgDAa5ZA6hSjYWihThWZJbJt5nB32QC4t6XvJzaVLUN2yfPUej",
  "key3": "2hkwa9dXNXEt4wLXDcVw9hrCgtNn89AyEp5FpfoMvGbR2j7Ccp1BZigeKLPkcdhoXkjSNrYx988gu9KYx1MshWkg",
  "key4": "2CujJmH9ZYZHsFDmVpEYQuxu6U6rqgsHUtHHbFD6rYGbUKVGhRCi7Gmi5Go6hj7ET8CGCUyJtviGNNPccy2MKn3W",
  "key5": "2RppfkrW6ZkCF28X5rmwTERxN7gf3ScQK4KUkB6w5GGf4DE2F4SE7M6crw5eCTVhTfYPSCg5RWbZ5FJNQPf3ZvTp",
  "key6": "8fhMZHPQqcUh51y4z89kDwZYE7freMGHkcCbPg5LwNUxtyWrqoPpT4iov5EJjNP9dekahYY3LC4P6aM5LLYNXGH",
  "key7": "5cgzxu4zzPCgZYLNY3oncpjqbNUYK4y53rCe76zidiBbgynRgpEgz9YaNFWrvwdhESFDmmXC3pjFxBV2MaHMEW7D",
  "key8": "5P88EarHEf32xXrqidc58n15wZFmrXFVznAfVUbUmRkzLugKcrqHdKMTEBQ4j2sM1ztejcMWc2E1cHAJLdmhaKch",
  "key9": "4z9sBFiBgrGU5KKi9tYyjN3Pzardb3dYGXCJmL7bF5fJ19jrhteQEUZQTqc9jnJ7cU7PN5TniRxenr2M34V96me3",
  "key10": "5iLrSKCz7w8gKqmN3pqXA34GGaDqtngdYjgpvoSoE5gAo7CPCQAm8PMriHdXUK8WsFBdzRzbDHM1miyQioWyFRTv",
  "key11": "4tN6dTi3RQsUyx5V5FsFTJyw9kLpCVtS6kitnxbqFAoJN6ukUz2SCNAXURqL5dD9YkiiaHxL9Mk9WGJ8EwDWuKvv",
  "key12": "5a98ahFaZwqkLPL1ekD47Q4maYgWD7A9gpXC6CWQDTqP4ex47eQeesLZEDsRbtKVNiCY9ekvZorDjHkP4674wTNz",
  "key13": "3vqdDtEymysWzYCJtTj7WrNY7xj7aCBonMkLLJDPnD92Ksaa4BkAiBZrXziQL7jSbWhHSMfFgyMJ53Kh7q5DJr58",
  "key14": "54wTseTqSk8cGEbzQSSAzXNpHNonGGrh2M2MkRrSjUF7pTR6XZUenDF99V226DEQ9yQzF4GN47NXFzTixLqwfVQ9",
  "key15": "2gS8s7bfGDQhFympdSvQors4qFo1ZMKXah524Ghco6XTJVyVsgb6X8FmSJvrkR2ncZj6jUKEijo9n57pjpMdE7nF",
  "key16": "3pJ3RPh3kqTvCiChYKAEuUfSNw1cvVjt9wjX1t5rC4nfXLaKwaipHBSKxYRA6G3a8Q5w2sxaDhS7o57uzRZV6K24",
  "key17": "3rtxkoyRYVt65L5RP7EWPMegi12p8GaidJRM5DZqSqg3QKP3HXj8fFa7eL6wofptmxrrCLF5x7C9A1V1MjF1cWUW",
  "key18": "52Q62tiDqXdK8gkxhfU1oKiUmTzKc15oSo2tydEwAr6rSYTT3hxaguohywdSxSzxYZHCpAnWo9pnDRRN6Lz2gPsg",
  "key19": "23HdfgTrar5g6rz7gCWYjAW3PZQGkEPqVeqc99uEeLvtzNqBGzWE9y7U8yLk9ajQtRUpQdR7Fy8cqRbqG7d5jEHs",
  "key20": "vqo2mRiuoKw5iVJtBpig2dnsUA2g38QW8QqXJmpXEqYe3T5cJYS1mdafaCHay7Qr6TbkmJPcLE9Vj1gtCCeN4Qb",
  "key21": "4mMVPtMRHK466HR8i3cgY8SCxZvSfdByoqUzFb2DQyjZggJJwrBSJQ1We8rPZSgmDV8NpJSqrAis3wdU8gZGZ2Eb",
  "key22": "5FnPYoT9CyrX953sFVD8P81xfFrjiVwDPpeuRThBMS3xEEi3qNboqdSbYLcxn1d3Ag7VnPqEyrhgpToaZDnptu79",
  "key23": "44ohm1jEGUvsT6fhAWk98fGssBFmMePJDKyUkLAKk6yr8dAiUGE3mnTjGRGdFpM2AFcnHBDmERj1cC7eqQtSthvZ",
  "key24": "3b2kmvf53CmGSGFvYUoo33YdLLtnK45nJjrDguNNaUXww6iN7t9VTbZhBjPg7boXkPqEXND5CPZV8LL3gkGJaSyA",
  "key25": "24ypqYP2526679uShV6wZgpcJtrwyFLX4eBLmAGLtwpThYaE6XxjCukoeBF82R2nNYye5duVvXhfgjN8bvyW34WL",
  "key26": "4djD73k4hjGGrgc37VRuP1dXQD8QUhfXjeiVkLDM16d2dDH1QBafuFFTj3bC4c5d3APcMeJfdsCF56sJ5zWbXB62",
  "key27": "4PfEibQEJH2wLb4qoMqGrLJkoabdx87bcRCFi3pHbANkQStnNbt5Ty5kxdhYuQy25jVL4jEpFAXLCWq3QPCpYNZF",
  "key28": "3eC1wy6VCmvUpnisvMkgCCJhf2rhSeiqUXL3ophy33wmPZWzTzido6fK5bCxpDTgtLkEN9qgCuLcf7gSWiETf5Kg",
  "key29": "3fGnf9XsjtoUoY27LXFF5DzyJ2qeoYmS4Sn8FqdrUBZ1pWj1hBj4KJc6tDGf5QFFfu1k8Cn4Crm5WGwG5RTE1Shs",
  "key30": "5p6oJiwQirvEFSfgoMWM2raAApBY6KU8N4HkdG4fxJyJYibgs2564CxSWX6xEbd6SQkw1ruL8otzPUa87R1UUvxv",
  "key31": "3zzdRcv1vcbQKbgk6fWEHCb8T1tBtb2wvgqJ7qzCXdPhnhETf6KPdYpVmXR83mbMYAM9ABCRqE6fv7C1pBhfDAqU",
  "key32": "5kNTzUZGXAmJoxjaovnqvTqDVtCwTcBtrJjauQtQuLTPfj2cQGb26bA9eqeF6m5iZKcGFnRxg2SU3ARe22AJAZjR",
  "key33": "3HRLyfV7M6Q7Hvggg6ss6VUcJXqHq9SpMqSLSd3xUSKgz8kdjxyQtgqocGCsQSWAvJVFwrpK4XDujD7UGxsh5LJ3",
  "key34": "3ZmpWdZe3xM6zFiMFinN1K9rkAooXa57vozbdoXnW7H1mz5HprbrTErBYZHdKurALpt3oh849jGRtUAhzwbu2VPG"
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
