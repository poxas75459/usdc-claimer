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
    "5zzaGs7Fdo7fjZfnnV115smoHvrqP9HQc6mwqHKyg7UZMEDTzCrQmcuTwS9asw1mAKwwn1xknniXKeZeycDdXABE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HkKXffGsVTSWBpKjaXZJiG7hfCNBRGjmpYGmgt3zdWDLJvXjKbRXwSJQXVLn9L79rNZ8doEHy9wTJCnpBARZNLT",
  "key1": "3kzpVLZMRUKv1XBrvqiR6NexvaNYVi9gVt4MoPuHqW3SH1aAcFjjpjoWfqLsm7z4VvT5w8aS3rrd4PC6PugLr643",
  "key2": "5MTS8funFCwjUgdB25MSjqTWK1gSb5Y8yq3eDgKAmd4rZqR25bX5BQpiYD5am9cK9PaVk9Vemj9xAaQcQNjzYYtL",
  "key3": "3oadHvgd8RxBgLXfZVFDxboHZpw7PZXNB4eRawYGsH1vYEGNDQZbxYcksjmvE8ZwxxbcBNPc3hhrcuRJA5wy2hrk",
  "key4": "nkTgyii1QZZLHA2zwR4ZCBQLvFrRNKd1VEohGU7296Eq9YCwiZU9Q4Rz79SW7PSvRKZqGc96k6hsbv7fQBHt6eh",
  "key5": "2LMmhyK2tw2hyViGeKHJsVqkYdw7u1y7v6vp5KwM1JzvyoSqNAX6XScauy5oovmB3KThtiJEKvYQpp37DHAdTL8D",
  "key6": "5VTqhdfEWWHLnbhi49xSfRCgNkQhuiJwCtVH984c4QLgSRMzfLXCkKXstbTHXqwCgsrQQ5GZ4GMF2LxBh82uSLYK",
  "key7": "4ivxS5SwUnuDDzoHGrtNdnBKUatv2dN4oTSiw7itBpXSpctEZzou231AYRuHTT7saqTNQnzXhLihsuqwBnoVB4bm",
  "key8": "3URv8KjrpEYuhogkLzavChxZesHG3LRmBYhJ89sDHzjBkkXM51ZpHTAjB2yUVLyu6UG2Ts4aKkt9n2rcdUXpFaPQ",
  "key9": "2x1CD3uodqeAtb7drNxzty6dfFx5egC3ymWj1SP1p1pzt5DZQCgX74Q8ppZAau89JRzzF21x9Qw1gsfgWWa4HWEj",
  "key10": "2JC54EtZMmdccNBJ9iECsP6ZzH7CUxN1gE3xdinZ5PNxUz2org1X2ewZGvPvxEZDLdE9uHbn1PoLKboEdbNKCb9d",
  "key11": "zWVBFF1wAFJwQ2cDWkyiAXvr2RbMbfKuarHfEs5skM2fKJkDfqDZwLNerD997jZbb7s41mXc6aAHsk8rc8RFRPA",
  "key12": "3w3xt7GaZgHUpNJsm4YpsWUfPYc7kDLumeEBFcWfXW1vU37KVJezmDJzMN7w8M14v5GnkTa7TBzPBFeEHs1u1wEU",
  "key13": "zXcLSGHjjFU7Nw6X3EKN4RNVLsUQE8tKQKJzYRRPVqpgZpusvxcbAR9xrmpoYknksktAaoXcpfAsKv2ogb7MYak",
  "key14": "2DmBVDNq76fVSXZHFv3vs5Acv2msjri215ZqQRkecrt24skwJCDCWFDjseXQFZoKWZvq7uyJatC1AaD6kV7X8Vow",
  "key15": "5ryKPtK9Ddn8MUyRq862wnh8CBSijMNFyGBfV2GUuMNeCti53wtiyrvNqCnz59348e7n68Qxs3CVrhmMgdqpwKED",
  "key16": "5AyWpraVRpMu51Y4hswxvgjeKCQNFxwbtSr4eeS2C4G8gPiUjhTZzGiU5EpYKLSoyv2Sacshita8hcxgAwaxVGHi",
  "key17": "3hzvRDxjquWAXAtsXvT9L8nA4vry9C23zcJj6ka4T5ye16ycAGfLsFufMAvSy7dgAtbEHS6dPieq81X6BAHoEk7W",
  "key18": "4SNftkVKmeePDARohm4S5rzFGG2YVVeP9U6PhKL5wBvH3zsLbEtey9x2vxG4LYeAh1CdbJ6CfVnz7ADNhYBdtqab",
  "key19": "5HeKR8EMcT6fGHFMiYaW56iSwgntdZ6rA1g93x2NhBJRJAa5SNeyzd1Y3cVKz9st9MQf1onPmqjQSYfLSGdT77s",
  "key20": "37F8X73JpDqbRrgUJZVWqSMZk2jTq2uG61QpvH2cduh7kd8P9L7GK3vMta3X11uadg5PC34Aoe6Sr17JrgtVWRjZ",
  "key21": "2Ae5HKfJ5tvaZJeKXiK45NGP6AuCe57HzemsZXTrKUcAxDFyUcfG9VHg7UqFzCd2JfeHctzo4v5pqCYqBgLMXQ4L",
  "key22": "37zHKEQmTPLQ6dnpzxwtbsim3CVjAidA4AEqpK2irUpamqBrLgQhijT6fPVt6PxrmjtgvhJDAYE8dH14zEQJypc7",
  "key23": "3SN9axx7uLDeYHGeMZ6hZMXPj4Czhz4Qt6RQE5q3mTEA7jfYPdJxHmWeFXV8GG6fxRnx332UiLcW4wKRXDcjF1hW",
  "key24": "RizqGy2gCAji6xPRiaxBhzkefH7g4NZ2eFiSTRwxaaPcfaDweyEpbg49tniFmz7VDSmGArVZis7zUjAh2zGDxrk",
  "key25": "3q4y7wNHYgGLDjUmLk9buq6TD1cYXYbLvGNYiGqXYwEYoFxtTrjL3pkX2hhfWPdD8LhfAhj445Uk8xETi9JBcYHb",
  "key26": "33WQ3W6SntDxYs6NPMKVm742fgLk2TggBJ8cqkp2rJCV91FRHQ8hgdZxViB3y9hWnibaamwUnpivdCkbLoWCcJnL",
  "key27": "2ezX56juKg1wLVdkvZetyw4FK2tC36E3bFvb8ohXJzxGPTUHsfHfc8QQtzH9qa3fkndjDLhVYPUioPwjiuXZQjxw",
  "key28": "3CutWV4hPvyLDTsNRBB4bVpkT6CBcm97Q6cYBukEJNKzJMRwikWXh8JHedyNf3fs4AwEuD4JWkfBQkVtLxjcwYKS",
  "key29": "4gWGki956BzjkShsi9DY8a8oTS5k5ryDeu4fJcropteD2m7doVM89YHwSxASfYotfujE1GJa8kcN37H44CmmQ32d",
  "key30": "47dJ7RY3dUf4cLS2hqjV54EJTvM5zfabj2pb6GFPsgjhrGQ4DYL23SQ3SgVYPKNS5m7RArUKZEKAmkiYrEp9E4uY",
  "key31": "5nerRagYPYJWQHJZBucVwC5QGzarnddrh6bHzfiKQVxewL544MsNZGAWLSuCi3RzoFQg7qT7woyr9C4MB8WDS4fC",
  "key32": "4yrq7W8CJagN8SLhordEjVzCrwFqfnKUqWvdTa9JAVa8t35sxmkXJgmdeuELkFrE5QsvRzXccBAJbB5e6qWRpDSX",
  "key33": "39uFTTHdHL5YtMyUyooaVjmXrFqVjTXcnVZbdamriMNSECED2mbKTjSRXoHxz1Lp77urquzygzneM1R6QA4zpJkt",
  "key34": "5QfMw8fhjNCoVeyd9t5ENexM9H9RjJqFYN84UPscBCXmwU7gRsQ2hD5vpBmGcouJaA86kvDbVyHYxrtnGm1xdo48",
  "key35": "29BLJgpLUqbG7U1qfXtnwUKMdWszjc2gxPnfE69A2R2DKwz5C8RpgZ476b72A88HSjjLX6WfQMnCe3Tmyg61F3gC",
  "key36": "2rQmYTTZ8W8foiaEyXq4eooKWjDxTxd1LgBtkerX9DnDbmfTQSJhiRT2w7JQLMMVT2etVf4t3V5mWcHrEPFXbbjb",
  "key37": "2hzZVxDrfA4axj6nB7YZnZJSQB6E4xeXrzQEuXot1WHGZo8cCAj4yXHL3UFv1PYo2B7oTpBUA9A9393wEB94BuBs",
  "key38": "9n9GrX8HTLZWwMRJjJCjgjTjauTuEguer23dPMLwWj3PY1Pe6CSTnTPKGCMV6deavv9sq96jcRhdcdoeyhA5ctT",
  "key39": "NbUpxBVJ4FckCaQDVkjKvExYxtNiVhhR5q1LysBhAvDShdEsAAe4BNf8CSpnSAq64nzAtmGkV4LFMxzwCv4LRmB",
  "key40": "4bx972cPZS7co4cZeG19GTLjXDX5JAYErwnCDJLTwAjmV5RrcPduLSS8ApPpwQ42GeW7nUXwmA4DmpjjeL82fJpm",
  "key41": "2qaftZs5mVAXSdKJEhPaotJrz8qSrHQek3Q8k5hs1DWkF5W4HHke6hx3qriBjMmPw4KSZLP2N3gxcXtrkvQa89DR"
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
