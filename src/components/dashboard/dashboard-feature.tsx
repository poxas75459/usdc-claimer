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
    "uqVU75BCAkheBKLBHz98QDCeC5k394z7Zd411QehTFtyA3MPWwmMYJmKcGCyuvboP8hCeEnEALJArGnQpETivHa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "97xdgZFyswNuHTsUhJicqq4eytJ5MUruNHtpCZQGBMkwHcrVwb6Sh1VUgeNp5RQ94a9RJcb6yjjZhA6pkCwoDdB",
  "key1": "3iR3svTHwyAz9p2fTdnBAfnm3eenFhdF6cGBjWT2ZjFTfwMHC37aDRQF6ryseSBeMGXnoJmGfVohh6CkXC7Pzvd4",
  "key2": "nHtWAsz1uUW2evPBHSnp6p2abs1bMVXLaW4mPRyaDLHrNu8mPNh9NmBqvv8Cgq25qYCT7zMUymH2tV17f1WWiEB",
  "key3": "bj5XxrAVnMNaZ4vQjTJeUuYBpbpUndzHz5TGkzzxAu1RimEFF9qBaAqBcoVwE3468jYpWUYBX8H94WbMQ4wdKAK",
  "key4": "5NpYCXkvfG8GzdGvWgjUn6cnU7n2nZ9sTwB21wHeLtdeV5S3WB4p8d928FLypYieethf8nXMNkXkk9FroR9xapuA",
  "key5": "27pWjQGdRxnoJGUuoUZuGmY4rV3zjBLQzBinKT5GgpsPMhDsrZCmubruovRftPVHika5yUdchia5yi8go7yrqq18",
  "key6": "4MHiUjWND6kkhryeDPFcPV9QbGtvH8DhBpy1X2JERJy78asQb6ZUugzsdboSZuLeBdTctuDrUrYtkUMxjYuAhVJx",
  "key7": "2cE1FiwJmgLXDecNteCzL8gjtqHTQYRuLS2uW2Ymyt4WXZmGDL6ywpmKECu9AWdtJWucj1WQo1ZMY8cTr587poZV",
  "key8": "2VKm1yUbuKXExPbLMtBeMZHkCKm8rNYA4j4FH3a8RDbSYM9WoSLzSz7bTjrwnDR4TaE7S8ZDAzj8C8k8nBsCArRr",
  "key9": "4supLaajRBN4Q4HNvCb622r3mqL1wGpc5k8uAWZtyNhR8oNkXj2CxeWKhXcTDnwYwB4JwRH3j3cBQVkEEvsLju2U",
  "key10": "5BV42N1DtNFqm3AMwUBtbuRD94oa6qdkXbCpFkMo2PAFPLf6Z9TL2rRAz7gpaSPQweWX39vk2BQq15NSQi4RhqFe",
  "key11": "3Q2AkW6gb97i1kzAaUpaErCp2YUghDxwcasLWvfofhinasXCptnD5MoFpPuK7o3xGcwpcv7HXcHkUWBcJgksegDH",
  "key12": "jAVoynrrbmQzhfXHRhZ9aMSHgxUbAdRXbtGc2apo6hUDkYVT2bmWUAfbM64Cw5q6Xpfc7ZJwaE2CWNhatHjsM58",
  "key13": "5yqCCreuGEWgxCYowwKKLx25SEf3wdNprsS74FS5thNf4AxMf5ragxn362zV8iopRUq5nckdmzcaC2pWyGAfC5UR",
  "key14": "5gT6QQUnFoM8JfgJ2c7hvQhd1ZpnyLuGdrSks5g5gDRe6yzCQcACeeggpL9Xj3yW8MFoz3oxGKn3RB4t1pUgdpgJ",
  "key15": "43SGMyAhJzqH7EkEdFwr7RKQooHiE93gyPEXZtWTym6Sbyb8S4Gw1fPQ3KEE8uhbe51w1xsPEJc7b91GPK8GUoFY",
  "key16": "4SL4g8iLXa9smQDPxptsyXAr6vTHwtt7PKixqKrNFjMSKuUQLXhcGPgRvuRjM5vn2DJs4QHWn5JedsWoZ93cVwMX",
  "key17": "4wCWjJPJ7RXFbWFDEqvWUVQ3J3QP7xC8HcTbFZtakamQZDZb36pmcwahjwMUd2cgJALdJMVqbBx7mtW8JnwWfhLS",
  "key18": "2bUXifx7PQ6pyLCfszhDg2GajPaQdzmxXtiQzbPEvSw5dGXnnG6TtG5sUvSbsdAE7co4pKVk3oMQPvjth5Uc7g4G",
  "key19": "4s2gnqMPjBJtkpEf7WAVXBW1oq6HjECDNaNHQRcSc6r5NWH6sJBbKXu7W47QuDiXPc5fwSRsCwBDinMzd9b1r73S",
  "key20": "3uR7Y4wM8UPau39EzFwnxb3WvhV1Hhcw7tpA5wwi4q2kb7Tuq6qTjPfXhkXTZQsgztUoCJ1hewxmQHspPkimwBuG",
  "key21": "4MBRr5jXNJgawFh86hk8Jt6V78m7juSghnDT9fUSTQ2zGUZyEgxFvpv8wVUXndXdz1C7t4niNLuE3KVnrFT6ULZH",
  "key22": "BXqPpbf6NEMnJZ9YQWire11HpWefdG5Jy1fh11No54acV96KtjpSqVTGj4GMPQVofNzS8BcuPckPHiaRKafcpAV",
  "key23": "DENh4Cm3EKqhZoCv3UnXKrBDTaup9peynK3R1dCZ3wNJjSrHhuXcU9xLgkFfKhVkWZDp537fbraaBKutKftqfuX",
  "key24": "4tc12vhs6ZcfHBoMrCtoehfAR2HDGvJwQ9kQRruK9PPL42D9LspjxRbGbgv5sGBCa4P7yaiJBmv9tQQaX7JSfMcq",
  "key25": "4eHYwP5vVfREtrpkXUG4oJ1cJRQHoqw8ckGo9PNPF7E3SBuoWGnL1z8KQKtzUWHn1DcHHsMfn8hQCHgXj5CZ8t3E",
  "key26": "cLoD3VUfn96SoE4ge9ZYfecqc4eU1RXt4vGC5dGjkqo6d8oEMABpvNgDx9dBzxFHntiaTATZvye6eUAZVY1A3XP",
  "key27": "47pscPTCX6MyoNwM272ZJaJSw5H2p2b8eCsgUH2uUUGnf1vzqkqapQzJCVBf4wL28jygdVQcskQDgw9Ao5SkpEiY",
  "key28": "4hA8J9QLVZsc9MCMzjnBv51Jh7XPktJCjAbdWXPmnaz2hLhWu6Z8exXmnFmKeRRWih7gkYXZSjASzGdu88tPxrjM",
  "key29": "5fHNc3hTaTkyiXBADJseyeHfYqBfqcr5kAzxHpkvDR6qmkRfK5yCoScKXG15Tud6W5pAEBH6s5idwE6jkTbdPLRh",
  "key30": "2bFLwRNogQcAe4N1x6gVjxeQkVzz6j2apmwqgCBwkmRJJ9svNeKyoRQsioGnnSgMDUhH3cFRTG5pm8e2FNuabozM",
  "key31": "2k7pb2jt4eFhb4EVa9ucuQepDHRVH4Ni25j4PYAmeHqWKmbBGnPxBxrvhNug9tbLhRTAquMfyp2XRnFcw3qVF9zJ",
  "key32": "5w5JU775Qhd7N8GhipwjHiApNihJ2qny2PvgmH685WoKigEFn16eKgkNet8sxuPeKiLEqPSsfK1dqCBwM2QPmgdZ",
  "key33": "4JF6pYNKbyswtzLBvZ3ZoD9bun4gSkaas49T7pXY1HET5KWE6rNDYLUS48bwvfURAK3VKwCvECvK4rR5NhvgoEUx"
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
