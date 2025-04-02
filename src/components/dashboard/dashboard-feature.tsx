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
    "3PPXJv13mjJDBboWBgcBPfeKqR8zGVVHH5P7JobLdx16FVUDNjLkJByZZxHEkWnYptfjHE2eDFGWBHEVnLn5X4z7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uF67UwqRrbUXuxKKnR1ECWjQFC98DtYvmespeo7kwNTQ9CSd3aTSMf2aumBArJzndKywjDpprjtheWF9ccdzZSY",
  "key1": "48ajRzRt5Fpp7wBujdJC7y3XvZYcskPxBEst3tMJ1A4o2oUor3y3jPcjVxEQFxcv5tXrtnJNA92p7bqELyGhKgD5",
  "key2": "RxhtbS7TAFGpuaQ9NcNrxjcxboYvrqp1DYopNHgPpLsmutqW4sdVhQK6eDNrA8NE61JQkESRDVAoY7Tn62Mranp",
  "key3": "sAqTVXnY2VSo2y7N4V66WBdSKpGRd7PnrpdtJ3VCyxxaD8oVirwkCoybtstomrp1CTRKXchSnQ2znXNxKfw9DeX",
  "key4": "32Ur5FzjpG3KrViYRBY9mp7u14JrM9QUaBHDEPqQBHrqrDtjvApvzsNHN4Xt8mr3eadzE4NYUgtAwpKQBvCj45tX",
  "key5": "2AKwWePvCuiyDWgEEWAkx4MnQCnhJbesvUBZvSjqME8syFL5UqTdPz2QNDNsVkE4NDGogzRzEAGGPfPdAD5nq6ay",
  "key6": "5g4CgQoKNM6Z9wThkZkdkKGr7v4HLKZyRDwYqv8LGgCxrssX6qdyGjYGwyAVaNwHBnBu1QhkgPx1LVcgWb861vYL",
  "key7": "39wmmhzphsgAeCZRgnkEd5yQdJJMbAPLKpT5uxHJmqmsvdB7N9nFVXMaK6brqLPRYhFSYk2xHWEYtjgv8WS6v8ej",
  "key8": "24WFv1TjsM4a6nbYcQQDSYW5aKE5KQBUXPuMw2qboqtRbWjJ4CNH151hX2xxf9nbZjtaDx6zjNPQnudXA8EGBny4",
  "key9": "57jMVw7nVc5DpLpXA3oHU4Pk4YCdPcYFkmUppZAzLQ7rWqfhCUcs4PutC5qdwCUwGP4SBprya5TeXFY4mGKXm3JR",
  "key10": "2VfNJyyXqfcrH4C7JNV2wFgMoG6iSgMVj3idgUtPYK5cqg8SoEFvGdWfN6bADsqXKUaumd1H6TvKjABCBeSo1y5Z",
  "key11": "Kdest47Bo1AZA4RBxRCiGfTcd4bkHt8XMpxDjqhtDT18puaBG6MM2LAcSGcpw2zhoKFFacYAfPSUDBhBeNkfN1y",
  "key12": "2US6P4F74dnWLtbYQiGR21Lgq9yEJatb4nG7617MFrH4NvyUBqy7d2RBUDUcs5yevUVfgXCofS7XgNU6ge4kJzuS",
  "key13": "5SyusgrUB7kckry4w9JCEY2gGHydu1WRoCnsNg4LpN2xM2FBHM6eoephbEiSJ1hqPMesCxS7Q6ve2dGXm49oCQ5L",
  "key14": "25hUe68JpFvqNXywb9MtF1WzKtDRo1vPQ6Zmy9JuKdeoRYidMcBfrsnJb9nFJKUxVKTDwab3dBFcX9LLPzWLRrNe",
  "key15": "5H7YXAP6Gpu22pzUnWgaMFqPD5gG62gKSKdEGWuvroXHM7hrAKHSLUp3nT6tDapESBc9M4jUF6sCgjHtbzooUCs",
  "key16": "3Z2EB7ia5WBgYm13Sdvw3hvPKs1En5mgmmSg1VUKQZHVyBFawRjawvLtaQYu3b8gYMALiLQAER5UBaHbx659MGNa",
  "key17": "46MxYmqzJutXVtEsAuwVC57Jqmed6aUtXuUVuDRgsAssdZ4qzXxAQE3wV1rc8s6Dp92YpJayXv7PGS7vxQqh4zZ9",
  "key18": "61296eSPEHHvy2bTbrCRznjxgXN8k6HXAFhPZFydCVVmCfKBdMeiXWYjasEryUc26SMn8YvtoHG87kFMa7kgKcRK",
  "key19": "3j11795seGt3NEQBwidJ26Bof2RMj3asX3JhtQXf7LqFu6jBBR7QfiMVaaAVWjGfTGA5D11VG6AKhMcLRAD5Fi7s",
  "key20": "2KNNWF5GNoCpa8FmYZx3uE2AfDXhh3Jr1EN1ps56TRouXfoxVkaV4yzbhosWA4PBTdzjMXNiUbBP2JpR2RQQH2ep",
  "key21": "3tz7JBk7hoMiDLnfxoJUo1YLLaVqNJWUruhk8rfgtvR6N9o6Xnqoei43Tdx52yArkg98ambFyifnBu3HqiZ71UBx",
  "key22": "5Zic7HrDcQoA2GjLmC3VpvcQ4qNN436cnEXN3DZ4uqtjY7CVqdqjvpoZSVnZhNVxDaz8UeiFFKUuQdrppJuV4sBF",
  "key23": "5BeMYLxQw5vHsAH7odBsQDZR6o7stSTW2ozQzFRzupXhs9Uc2U26DxqAgGRzZ96vS3Aog9LZury2kVezXPsLB9Ms",
  "key24": "2bzFmP3kKe7yNRTUsmaoyfhbWRRdLR7oP7rDJZ4im5C5Ygnv4Hg4r9DFqvj5qY5qWnBiWGJuHGMNQBSBoNtaKjmo",
  "key25": "5JdWn2AeBRwMKtcFZEAbZPaie1xJNCtLvuC9862sFUopqd82JVGV6dwf5gY6UVAU9srAW7QiaBeT7sortJVoRKSi",
  "key26": "5QrJ95KzTp2HjEHmbRWfq3Ts6UipQLsji4Zg8ibPPYG78vudoGo6xSqYPPqcRZWvYdVwfVMEzq9DVTFAJ1exB2gg",
  "key27": "4YkU93kGC8cEMmgwUzpArE95b5R1nnnYRCT1scrdfnPAkwH1iRfieYsBu21wzkEskcAYzQh8r8Te54feTadrMnay",
  "key28": "P7jbVfDTDQrkH3twGJdTdMYwx6DMugqm8F4YYQ9XQ6MrNYXHNnPXbP8PnLRoKYLV4j2B7qxxMo6HNdCMjT8z2hk",
  "key29": "4Y9EpMTbCQFkdtxjCcgLttRmueU2QjgJd8htpEds6KMnakPYhepQyRVJHsTd63otH3tUJ4DubVPLLYEjkwWJCFv5",
  "key30": "5HWRw2y6cmQ1yE6F6XCzT61Sfv5VpjHyzhu9osnX3ng7so8A7BcbjqYGw47Lz5nTmeNtuvoc9Wz7HkGJPaH1tg2X",
  "key31": "4wtBN8HCqoyY2tsChXVJnL6cxoAbSaE1Ah2bGisE8uEgtxTcsAzsKEUBgwkP4zmUeZZvxaRLP4YV1nZ4ci4rwicF",
  "key32": "3rYognyaR9hWJmwMxitTkUZve28iC6RuPM519hJRVXNK6FZjnX34iQvdgEVrAwHaJBWA4oonUzMu5RMfv3ymqg6N"
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
