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
    "6734NpxQvC8Fbpa7irRk7Bc6NBXrvzSVVnZub2BDfwAV9qvXU6b1DHDgrXYvJKQRVG9GDSeHwxX6tq3aiBPg4W7H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34enDsqXspVzDYYbQ4o3gVYrGwQoQREhdoxZRULYaXd9pKnf898AenHEkb2qRS6ws2tJq7ATjpVUw8DAeB9tdzF7",
  "key1": "3937MjfLinypFvdgVSafALCQXe1VjACL9cRbc2Qi9s3p5tHtT2JV4mp914ZpWFAsppoG1zQTtckGP5p1FTWuRtfU",
  "key2": "wAoYWddUty4zFqeKKqbHiSK4zutFMEq4ScMZdJjLxDPp1AgauE97518dH6VhiYHNq2vwRQUcVgQWcmLnyNZA1Rn",
  "key3": "3ozbNfju21gbE28DGrJLZbQKY7qU2KhAZyw9cHe438F2NxZcpfRfTrLj95zuuy3d62AGhjkEVGTN6pdEQfS5KstD",
  "key4": "PK8iaYD3LVHTiGcU45qHgTuMpLbHFbcM4KmTqWE67AnBrrKwAwfCnLKj9m87zCee2tDWU5dST5ye7UKS9iQ6mEQ",
  "key5": "5HTro6n7asR2fF8mNk2vKFYPBV6VCnoksjgJsrbDH2n9DjZXvvhT8hzfogyXhhEBbGqUXgkypF5b1sbviQFob9By",
  "key6": "4aKL55G6iDAyrpwSUZ74tjgGvxPcD5tnS8wqqCXkWbY9NNrrEq9qQuXwuZmL3P4wEmGpQBMMn8bnYAHbwRBVr9bF",
  "key7": "4pXMGeGgHbT7ghzZVHNPCaSB6povh5EnAw1fca4gCnA3E3gaczNHh2JQheM8mWjZnquZkAmoB8V446gvp9owte6G",
  "key8": "5BXyf4YKc9k4Nj3hvzj1z7YAjebjzkbRHuE2bAoKSzxR3rgvYkGUq1h4oaS9HWutDrVBZsPJ3GAnEgXoUYsDAc51",
  "key9": "3Ba8TnAS9NBUmg3eLcjUb5KuahW9vJ3NnorUbzmBGjyJeKWGnbMACty7TpoJw3CdMNCghfXKTNDrTM2QnjsTeUf8",
  "key10": "24kXte87oAtich3t7QumNGdgKRvkL6WkwT6cvsZps9CGdCfx1HbhVTmyfBK4QHyvKd47qE2RM87X3Lteu8qKxXH3",
  "key11": "FBbf7FQGtT2rHFkKCoqXKMbhZtYTSs4CSk1tMuckJfsV4LMDUAXQn2QA8f8vBaJEVLrvwLUV5ydSfwdBSbPjdBV",
  "key12": "4jyBg35CCHq9i4PFofN7HRqkVjyRoWQPJPScDcaoTtvi4fxTLjcGp2faLWR27M8a5xkL49kmza2Z1mL3KEPKK5AW",
  "key13": "tpgRwSA6X7iwMd47LfDWJM92Gu5HNqHHQBkonRt7sXFUGFiy3KGtwb1ysoTpho4q8MaXZQrsiG7iZiq87t85dME",
  "key14": "4qCkHJtVUTZWKzQ35Dq8cMRfAY5hu9LcZ8WFUQDY2jdMBe2gg86K88XurTCRmskX8gWmg2hvpPQBH7TMUFNbPBqk",
  "key15": "S562neN8W9HyJpNf4mcM7wwVwTB8BR8dGG4JVimS936qBHjXNVhXiwaDKKkYDYDc9vzioz8m3JNskJeWFATdSL2",
  "key16": "5uGYh1tmga5TN2J5712SZcFawzqUqw3vd1E6tKpkorAJjtNKPsZ9KKrBgHfPeEfCv4XVhomHaMSdrEUZZ5NgYEvV",
  "key17": "3HgiwEX2kVN46d1tRwN7H3FeCi9DibTN46cSemt2vxFjET6bhtJoKCiLgYUkueRTSHLokaReudRQ7w4cZ6XnQ7Te",
  "key18": "2uj6s7oZn8vUorcGiFfWigaYwLRP56HrcUsqXWH2JMU7uzj1WhNqc8Dtg6Ng81MYQySuYHroPLZSyT73MYoGCTFe",
  "key19": "63NwNfJJCUSZPJR1GqJMnLkpUCLnNZdg1E6d3a3WDPcUpbqy5k9siJHK2nGBXQtbWc9cGSz71MyXH3ZZzg3YHjQM",
  "key20": "2iv3oBMgGTJrJUogXDp2LMnW4hZCf77Uyqr2zCBbDGAzUCYTBrGNUJGEFRQLhNcxYeEnTqQdCjjTfYvKVQAZLiYM",
  "key21": "25odxBCUudriG4yRLdWBg1b8euBvFyedanYpKi69ECZGGp8LgsYCtro2RYa67MPy2P91v93e6cZsvEm5LLj7hzp3",
  "key22": "3WBX8k2aGQrtfGNX3sPRNdHaqrdmDXjaqZQs5X42Pp4cbYgZgaZcYuuyHZfPCtQoZ5rCgceo8n31RKzdSGdTYwA3",
  "key23": "5RtEEYAcnmuUaHRXQeCuFrV7vDN2it73b8vWDakMNjts2MWB9fpfFN9kGA8WpLe5QD48s4sooS2er5QaPdC5xoxU",
  "key24": "2JvzowuMGu9jk3XqCazPogNcTX7Ro4UWavHxyJRVbTeBRDuuqz4xdVXx58Spjg2RY4CqKeiToW3ym7QiKLabaorM",
  "key25": "2EKHJNzM1VNmd2iGsJyDSodg2MX5dodVjzkS1FKMuPBTiYR5dLDBFRCxNYPvCWDGCLdjjGc14Nyw3ShZyW5dbzBE",
  "key26": "3e9BM1giyguYm54oeFmFjutLz2eZo8c7xnBcJdUAXQWTgkBGuX7K8oY7Mvb24gq7gdaq8k1CCyivfeknuxiiTZkp",
  "key27": "w4T7Uh8YCdoNUqbCrADfjU9o3t6iuUxmjTsiNbi9LgeYp2C8xnuFnw632gekH4BrewCaip2fQZr5VfAHcFNR8CV",
  "key28": "4SkrqGtDUBtttr7ZqP1sZM21y4KCP8rQ8cHdJTJ2UnkxYYscrKYzhsEm1Fnjso5JAuwuAvPveN1DQAikqP49cdDc",
  "key29": "VCkbmVNUa4YasmRhtZeLfxDuguUoKDvezkFjtLzWeN9Gxrhd1x25Xv12893Fd9J4YU7wfvg9nhppEcQWNRBg9nk",
  "key30": "3ShZY3jSFcQHa5FHcSS88oRcBNvher3EM2TLKC4pk8fjF1KcdDzS6aobf8TFEiBLow9yXRYs2C3qBeeuMqMuv2LK",
  "key31": "4PhUgDf6TkzZbmeiBSC174oah2CPGsv7YkeYPQs21wuGLqM4ZzvApimHwXZZxf7JvHZzrJoRyHQPL2kwbLeRtR4E",
  "key32": "5QNaq3HoAz7FLvH4RYLtmhAp9qfWpCoj4dZgEtzkAA8WdvSm15W74eyMRzwGVJEuyNENFhhfkog6Ug1hU3Nr9ey3",
  "key33": "58p4BRjuv8x95KzCyfTWSLbUNNyv12mCFWouHHQoEJHga5WqpbGnpLizY4rLBktkHrKNnK9VAkCAeNZrYhdR9vZg"
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
