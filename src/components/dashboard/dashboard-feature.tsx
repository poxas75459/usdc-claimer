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
    "4JjdKjJXxeDDKpNtsiMB8f9ktfhjWNBwKfqmqztmhf7i2PF4iSQtkMFiFS5QcfFifH1hmqsKpgFWc5fsJ3phasXA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pdMMWdUrQuRACXfSjzjM6D3GridUpUcK962rcrU3L3dVdCA6YhJKtxBHfb3ZbS3ProwTwniANM9PGXHFqp5GLrN",
  "key1": "3BJf5zcJe3od1NxdAymUmiRqXMswxyaaPJLepCn3Z7ywfPD4Qm6ARyxGoPdEFyASHgi1u2KV23MmaA1XBpKZWwai",
  "key2": "2uymF47D1VUxQ9T7xBtMh9qdJrkKHchoYk8X3jajmNY1HrZDKC3k8MG1u8bQzRctASvbTEjGbv8n4UPCNqP3QYy5",
  "key3": "2WG6HXRHKMdBqEgu9MKyPG1yEcwHzu1ZkpHcqJ72a2Qwah6gdSitCJ5debW6R4nkhsZuELFdzbBLBJcoDesEdASa",
  "key4": "3XoaBmrSFFaPb2A1f3ws28V5dSJR56EZm1f85Rb9mHKCEaxVWMCC4eRWnQQ47MLJxoMeqTLzBT75KRa3TNqoNQca",
  "key5": "42jd6kzwcpEza8HABgUDTTvCjh9jAVyFWp4XkvZhhhdj11jh9DKiFNU19QKRTZ8c2BuwASmsAuPMw3CVEfPn6nc1",
  "key6": "2r36fYK5pNsHj5dYrs1kM27uzrvZHvSsrjksogdfnpqSotjVSbnjHxDBA9ndBN3YfNGSK3EXsnmDoDUpmrHSJ552",
  "key7": "4wSEDhNicR3TSKDfpkWjueQVVNTxgXQXkiQXiNszVH8BhyuWKn4fEeZqmt7US2QHmNJZifojEr3b7ZmpHmbXoDzU",
  "key8": "S3tLTftHSHARH3ASQuzM5YyQpsj5gT5rQHqb9Xj3ns6QyfhjcWGK2q4tmytZjzdRD3UDP8J1f3WBvaHfnPwSeQT",
  "key9": "3ChCBtcVt33ogcQ1orRq8JsZNXVt7H7z49JNdf5kb4SyxF63Xo1yVgBZjVCFBdHP2gxP5jttitEdRPDAhb6CfaYi",
  "key10": "4BF2VDcQixHy9EYwehgaKYFA1VRfk7uxCe7ZkejJzkWeH2ny7HEzEnHfM3xEX6PyP3VhPEuprDq3KeLT86auwouU",
  "key11": "2xtXVajKMV85zRABzUJwr3GCcuesWATC9wL8QHG78Z6h7nDe41ziwqqNXEDpJaFNZzxZ4bD3z91ro5zXY8UzUeXV",
  "key12": "4ZoQHwutp2rJpSUJ7cyQtFwqMmSiZo7h6esFYLhHKWB86U7bfvoLLbDk2o1rhyQBrrnJC5huM32V6561baiQtoSU",
  "key13": "3MN6FkTY7xLtu1VGMEZZYiR3GgEcSTbJLsz9tXLSpGcFHReUVYmu27LTovgd917Q8F1eeSKqQtSgYAyZTzvkG1o2",
  "key14": "4mwPzP1vx5j9pW6sZdopZR1bPgUwnR2iADAJASP8hkC4tgpdYTWxMwUskJyV9aQv9fRciBE8E7DgbAKYGGNfFr6a",
  "key15": "5PLBmYgf7ZpNPsKdLc1nM6f1ADhsjksLpPRorUjGwcbG5BTubYybu2BM8w4RJhZN25HojyaT2GmyePrdawart5cL",
  "key16": "3wLixM5abyR8bQ3KSYhukZxfh9xwd32DRkzxNRQbfWMBELXvXhMmAtwCEiqzEgVWKbbdNY71KaGhAsg2Fap2N6Ez",
  "key17": "aX3bbHMV5cHKoNegXmrK9jRCbBzSTaRPZRp17zkQsZ9Xj41SFXZ49CFRvYY1H25xCAHativkS75Ce2HFXvBNuXo",
  "key18": "2CSXQFAVvu6d4un6T4KAYyEaAkk36JKkPgUHBBJd9YjoGJtozQefJE9agaMw5C9xfMY1wbvaUzdn1VGSAy6ANr8F",
  "key19": "yfaEAuUsopkwywR2cft5cEbmd2A5GQNnqqF3BhfwkjJWSPt5jcESmT3eihfTqeTUwsnTkAiUCtKPorjFv6C4d5g",
  "key20": "3PJiipQBZkhYqSret7pzKTLvxZYkH6gqr4WpuS1GZUGxT5HygqkPeA7VcFWgdLtVHHCJQbseNnat6ptZ17NVcVTh",
  "key21": "5XUhXKmXRZkBvQJ6QnxXTL8UuZkhZuucgN4CZws523CHZRY4DKxfkv217zBv2p3TZ1c7SusWWWTy3iX3tGi7SxRZ",
  "key22": "5d79aZyfRTPqAq1MkkNtjtTeXrjTwAPQBuPsShYJditehvrmAYHAAQ1vqWvEC6b1cTQL6Qtvphwq4iUi5tMZqYeU",
  "key23": "4Bs52aHC33LwKpgRPHVdBsX9TpaUzBpaJeY7n8mpgzfXvxr3zAFaQPu17zJhvXdvVvRsJ5jG56Be7UERaMFJkeAB",
  "key24": "2C62vGY9NrCpQtS8DjLRBo2XzZDR7mh7us4vS3RPawAi43DHARGK6oCcVvYHHSUP7YkDSZFjTU9migvpT4Pp5v5F",
  "key25": "GXJ5cYCeiWyrpeGd7Xiwqev6MPh8Qw2PHGz9CWqgbztJ3aoj4t6SxtigrjHeLAS4PTmx9oHxNroAxgB2hjtD7hj",
  "key26": "4ckKnwnd8CY1s61hzpFj9rMoXCYMApjibbuTopLzStRfVPeY4TwCBLGQc1N8SEZgYs21r1ajqYrEbNzBSsgZQuTw",
  "key27": "3JTY1QoT1kKXRn2srm38xfHTw3cgtvn1Xywrq8dCABXVwnyh47i92jU6YUZwrREMCdhaRoKW3aW1DX1ERBXqQeMV",
  "key28": "4boE9n29q8TDuCKM9CjtKbn6cwRXpG4ZhkfR1bLaceVesqK7nSjgf262aJMQ6vqCC3fHPPfjaiTZvrXGwNEkfMnB",
  "key29": "53khMsnkJFfFdeqwqrTkAQShQqxtS1zdZzKhghru14R5sQNwZy5xTJ8egAWwzvS5QV2NiBt7BGtAizDkK8P77eHu",
  "key30": "4CbBEw2d6XqvEGvM1MXbUg551UaMUReQg4RLs23cZKCEeaDiyyDNEZ4T1MenkrGr7ZLj4zJ7KPFcgt7vP2PpYrEr",
  "key31": "eHVsYRLDXm1KsByAEpanuSD9EYfFCniAxmcqtoTdoktTVHmzLmVRtsbNWT8Mqz4yknWg8K5zhzLebo7HpzyJJhs"
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
