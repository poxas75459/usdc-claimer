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
    "2gnNahj7Qr5q8zy9QUnGTMu6jWvybPiWaxaEHUXwKKBPp7dTANaVuUhzjQEsZjB6U8KPFhFuEhXiptAJreJps4Dj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g5f59x8Mcpn2qeEMroMh2Ckk9qLoVNis7i5dVc6Kbv6n653EPioJ8WcigmbwmJw7NtnCYrQiFNA3EwHUE59UJ4r",
  "key1": "3FPdJNWpquVQAAEWDLVtABayu1TRFuLNDFFaz4toAZkYzotqXHFBWKrUm9AQuRQHmzSFGhjSs5QKexC4as8Fo5AM",
  "key2": "5KC4J89eAnW5z1GDiUUJZY4JVGUi2bMn8rPisUz35M11QkGajQ7tSHQdHBLuS79Qo9Acup54zgtqS7t88T4Jy3cH",
  "key3": "4sBdVaNH9U9tddqkNBYXn8a2sJLHWfvRwi8ZGo73SSLw99Mukv5mX4pYxgL6h9ednbJ12NL3gm6PTj3amAgLssPL",
  "key4": "1W7Ly2Gb5vmStmAD9yQcQn7S7gpAHGEmZVFMxeBVKGewJE2dMxwsDwsXa9Ppp9JKumf4mphg22RAEJ4Ho1saVt4",
  "key5": "Vbhjk1srQvSB3jk4XNfeSvqGomYh3ywtxXKwCkQfvP8QbroXpP2S7hMbV8WEV939kwpXpemFPVZdrHGuq3WMVaF",
  "key6": "kQbUSenb7qkw4vn5SPuVuups8mfLUj23H4irXee2NZ5os9Jrf2dUfe4PPATgbJwA4eegnccPVdRa4F9TVKFraNN",
  "key7": "5NTSdNwKgeHAgp7F48Wqf4MGeezqTqB4671A8hZAhkYLegK4PgHSJbYocT4RmjRAjqd8mMsWTQyHFGu3XTDXPahv",
  "key8": "3MZ9M4tKZxE95Lxcv2C1bAWNSrrXrMwMmd9muHuCRoruAuMFZ2vTWhVEgndpVYSkwaBXmAaZmRbuCx38vcCC7Gah",
  "key9": "5ddLfp5YxLjSKRxrDhedkeUSTA4fBQZq78MMJjJAQXRSwuNBu6k3XfhzfAtdx6Wph41crsq4GYheWtuXZTkLZJC",
  "key10": "3yMNNwdRWdBeJczjo1ybWrbBXZHyoVBh15oUdsTsRe8pARsbrvk3SUHVmKPnqUFTi67op1GpJvPC4rCJJwCPMAJi",
  "key11": "2XhJ48XN2XXRtqnSJdfcngD1xJ42tXajpn2C4BPmJYH7CquwbQ7FSDVA6pSzc9mbommKU5diF1xmXFgvBLnqkXMF",
  "key12": "3JQp4HnGpUEambKragPaUgxhgJ2unnCJXeNRzHubN6AtZoHjA9eUbTEZVjAoTCLvkSVrcpA197h89igf5LiGiA1p",
  "key13": "3HCSnhnybYBTNPpQndN21P8dH4kMXMm7MqPDfBjzmxspDgUvdTNdHMu216JGjHcgRdQ5urXf9BazzdqcLnj7qv13",
  "key14": "5cQFAbAoWvWSQNzh9iWDhVqEZkzm8jBYVRC9ZPkNm3FFqxpytAXN9QZpsH6LaQcmub6jGwCJVY1SY5xWRoKHdnnT",
  "key15": "4byHYbxdCo3M5uhEXWBTLyzBnZPTjxa8hTACqj4GfyxY7d2RM7N1WfiocpJ3YQHBoH65drgQziu7EwbdpUBkbo7V",
  "key16": "3zBRkMqsfXpCKWnx6djZ8BtX58XoLQ9hKdPnmjjSjTYWZnV8AzUHEQ8WAefKQZADaze7jTd6VsfYTJg28HfcnmoX",
  "key17": "79pAH4shZuB3RW5953KKNL6xpmxMD2qTRV56gdxdk1J57Gd3HTxJ1RTxzX1tw3Dmqyh3AvXVhEk22Wfm79AimXH",
  "key18": "5F7UHB94yZ7dVeEPLRuT18EN6e9oHGGxMC4abzni2z5Z6PZtY6dYnugQSdy2y8DeoD4MP3zeVMZSUQxf5vHKLHTt",
  "key19": "24P4Us1rxaRmF4mg9WydtdLwECmCwJUay8goFM381ZAipy6c2BcmKkS47GZQEYT3JZixvMXaDNyoasnM7gDAybvw",
  "key20": "dHwqxDnJXgtLZyV3WRhPK82mUtoSQyMJQVp2eSFBw1cZcZBjM1GWEh9FMKQua9GyhKEYLxLYQExUvy3K8m96SNm",
  "key21": "2F2mzAyC2E5W5JM5dUj56WV2H2jh3FBaMQRH8BysLaDM82gms8YFK4rL7Mp5cMNbDpx96RtfJHwrJyZaGgEiZeeg",
  "key22": "8JCHJEzBfh9Wm2Fv59Qh9g9DNzmjcNJW85wmC9Wg7FwhVtJiU9dBx6axgsLfCvH6ZhJu7JjUB34pLZS4PFb894s",
  "key23": "3ZjxXBLoS33q3S6ucvrsytoVerfVqvh7qrMrQ5VsnGbQW8rggtQKQ5VD3WTVmy7WJYa7p9nrwBdBCTsigeezGz6E",
  "key24": "4kHjdNzKG6ecMhJsBKXKfeZzbF3WJX9aCxfC4KiHedfFjTiDbNPMTxp14mHsnnHk8GtiY9uZo7255BMoEZZ3rpTX",
  "key25": "3r79TJqwva12qygw9QLaBcBTFxar6C1nUqzZgdgwohi6usVkvh76bP9HpcKt9KW4zNbzdHSnjKU26ig1xmXsQzZm",
  "key26": "4on2Tc9CH3vPLSFex9Q1jx3NGNYgpoURjgU8JfVRTvSQ24DteVCmodpw7ruZ7t8AyfRcsqc8upJFunj7tEtUyBNn",
  "key27": "3YCL5nscnGBqCqY2EDd4JmfTcNy58VzDU3rAf1i7t8j6WPxWW6n8hgieUcoFzH23CLaHdqLBvigPyjHW5EAnzk3g",
  "key28": "4PMiUkqvf66QU2XcJkzFtcBtA4qGWmBNKJDXWmnKRoJQbfTSWkboxG4TjgaBGxjeaMo1XanLMCbsen3y4h9sFhP8",
  "key29": "5V5FV17EpUWY41VSFkC5h3szMucuU7KQcdfbwhVauMNcSo39qfY9WBpGQPCawE5Z3uZqJAnKHsK43qgEqyWqyEZA",
  "key30": "2ng7dUfXCmfm1xSM2Q5ddvQMA79ePD49pWdao3947uBXEXounSpfvgtHGXnTsFFVRqaGtSYXr6CZShySGZBdNKXP"
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
