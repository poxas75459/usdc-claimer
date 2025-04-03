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
    "2QWzN2YE2TqWDFT1vLxPiutdy9NEGxihZeB1oJZE4DzTzX27MBewhYyti88Q9gvQMXxkGhWia2R9i3FmmzNrZ7Rs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3d61faGGLfojgRCbcVFy45iWAkrR3fiLMkKktSnTh4avMgoTeUHWJJArkuDsrNtHuF9LAWSGPxKVg6f3Sx8L3Fke",
  "key1": "35BtqVS3zZpUV3QvRpk4nXN8rSrpPcHcxN8FDBggpgTVG85fm8V1gGNj6ZZKf3F9FCit6EE2ocsp38jM6c7dVsV5",
  "key2": "2iM1EiazD42TT1cjQyWsPfNpRdrGz7dLJSkxhXdZF4feoXJhBsNkAfviaEvbybXzP4AXnAE3QPPR6RX3uVeJXMTi",
  "key3": "5EyAZTKaRcYrET3UhCXT6VAGPEqx3r2QCWza4YoY4ohfwHAqm4omkoXthMquyoVFScUFVPvBExHFi3xqyYw837Lq",
  "key4": "3n2kMaam652jawMs5sEdqeSpKN38UsaVyNLo1fFoTUjEewmaB78oGfu6vRLwphXHNCv5STqd3fS5CiAUbYA9pEVZ",
  "key5": "519gxmcsJVca4EGQ4JzNqHQNP8GiaUFECQW7V1i5whKCV8wE5TSzBhXG1DaVp3AyYiwpc1D8AN2rQ8igP3twHDDF",
  "key6": "33HBtcfLw3gB9CAcaLxxS8Mf4YpxEvtXgDj7BpLTLBykNHSedbP7pojnzWoopPc2asK1dtoiNAaUMF5yafCFRJm",
  "key7": "25THYktaTPkwYSq1hXwDfzf9qC5JHz65QfjMbEbh9RSmBCKgXJj7ufrQGoatgHYDEELseTDKm3FXsanLJ5xBR13t",
  "key8": "3u2bXBupsBZRDaHoehs1abmJ2iFkhftzseYxybhQqTNJTwJt8JyFv4ajumNeZJnsRJrgCqyRYHAAXKzCuUetN8uK",
  "key9": "C94r7r1PgNnGHhGL1ZuQmN456HgPQ4Jka7J69ypLnmhLvC7TfBmAU4RbexR9mj9Pm4AAkGiqS6TXs49ojnt6VBJ",
  "key10": "2vDqMgagxkSkwVYDao9NVgpEZcQWmao9RqC4QjXsXdY7ACVNoxxrCgWFXeAqKEYW399Zcpi2gJGv9U8N3EvJF9qv",
  "key11": "4gak8TsBi6MvunpGCU1y55ibzoLTUJbiamf158Dsyg4VbDpTLfGyazm392ad8pqHfmhujQRcqW5rC2CSnCjsVGWY",
  "key12": "24Sw32z9HPmmdKYa1ZtTdHzb1JrxiwUDh8G7fbBtVsxcAn3iFc9YqfqGKChbihrGTEChvjLZySndq4gYkcihGoit",
  "key13": "4JSQ8fjAsn6ExaxVqjkt2mz2twahDofce5icb1co9ebmyRbqQoJyczCvo3dG2gaufzPhsvEFi1CqQWWQ1f6NwHbE",
  "key14": "2Jnt6Ux4nYGH9aH6o5UZYoovyKvtYPxPkjTofQzCSQUmgeeCeih2WZfcxDVPULhiHXvjMvZFbnFykFJnr683bzoX",
  "key15": "5P5qiCMZP6qrYXcSv6zjmanpUSg757pC5CngCoxSzhJZ9tpmGh2pHPmNTsmGU1rC8Q39jkZ6atp53YyPBXkG2P1R",
  "key16": "35CDhy1sJ6o6kRwGUfmpKqU3dPzYtxbGcKxYsEwNV23uKzeeraYtN91BRy7uExdgNPTXCLgtAweJcRSgpFqYDPVJ",
  "key17": "2ZCwnsuiHaNLuzEBSSLzyohYr632mWpfN5tnr52Zqv1KHHZrKvCNEaPns8ZD5kskfFbMdHLab5qNLx7gyxpkYGo6",
  "key18": "u5qKnedPGpxqRKjSt4bdgLMZ5Reh8GA8A9kxNqyp2aG6THbW5p5zagyM9EmMdGBRQmVUQTBLdLVNSG7hiZLBEYc",
  "key19": "4EZm726Mfjj9bzdm13DtoFLyLk7Fh7BR7crYqSnUhcXJgR93gRD1jHhXnDvhsTESxpQhZ2qhPNbRBiKG2G2i7Uat",
  "key20": "3tXF6QN18Mva6Ny5QzREdPA9MJj19NmDoCvqMtVa6wrhyaeuDtbtpqp8aBX8NeSSiWZ94Ls56QqPpzqgipFRypCb",
  "key21": "4VtC7xMkP6a6Zv1o9LniYF495PR3wptFLU9daphjvEaMqB4sakMRK3YypVpuWVj4YfBtncoygnvYJoJEB6aAZn4p",
  "key22": "HaF2RycDnWfZRQHKe21E6uGvVxq7hQXfuL5o4Vr7y6sMU4jwvnXKYoh3FkgxVZ9hxYSdQ26LjAvEW69z7dJxRQz",
  "key23": "5AmzpAjyGQWpFsfaJCDzYL7xFss4y6c9WusndERVmA4JLw3WHhsEiKLvys4QnGyCA2XCx7rcnigg8wvFvx9A2ZVC",
  "key24": "x1zJe8yDePANrh8jPyH7A9rj3NBH7iouSUykiumZrPv2vQ2jYX1nF3MWW2nGbYMHotJ7kYfYhPVYG8adaNF8Tbh",
  "key25": "3K8Hxo9zsuCtmjFwMBR36onP8As6iT9FjToDod8k5ukLtGzMeEM77cRzeqk1S2zGnKGx9V3c7CdP2c8Fw2XjKCQf",
  "key26": "5fc4LBuYC7CZGtHbfiYANKvr9jVc39FTEsbAShmCvSsPfsowksqg4SGokYBnGHPYbBfsQAp3m13jFuY6N1BnmK7M",
  "key27": "23irx9wbhax9RBDzTZbxj1wG7P7sX1KvVTAqXvGqk68Hn1yzPFLa11jgmAYVdCuCNiMyoGPms3THDQsNZH4BDQdK",
  "key28": "2eTLyq18Aa4Hr9oE6UXrn42jdxdjzBbudoXFyrXg14Yzj8D1h5zkohJtjhZtFWiL6GT1VnRxQDJdDNA9ycZ4eMzZ",
  "key29": "4mrBAdctetwRZx28EYUQAS7qFJevVSppVkKFNNAEF7q7QXYGbZzFC9mohxQRSNNLt7uXbBpGCuRv3pAf8j4jhyy8",
  "key30": "66uXa2o7CodBJn9SLtbGdcziVtfdTQYDKerA8bKSWEN2RkHQWEhoHtMXW1LcxMmRApShGWVTqUnTmeCyiyNoh1oX"
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
