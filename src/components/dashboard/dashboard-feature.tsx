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
    "5qLeUfRwxNNRQ9J5AvqVFTrgyKCf1AmWeyJ8BRJHHHdgddu3uZS45WoF3G3qgevM2LChn86QAEh9DDshosq1MRaR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9tSFJsBB358PCQDJJySo8Fj63QQJ2eC361gRTZJEanhGtiM9C5AMHM8zeqJV8EXokPLoQdVY9FZTpERvgjLUvS7",
  "key1": "2VXrxpUn9FA2zSkfhPEmS7EhM2pkCBmuPn2Lo4CzHvhDqkPVkq7wpwZXdwnmnBivvo5itUJXyPT6f7rQqzqn3C8U",
  "key2": "3K7zKb3DyffTEsevkHz7VbodEUqsB4gP2cKDKA8QiGHGfgooEJD5EWEjDUkigGmvkyxgSAS4wUKXdD7gYdM8urdK",
  "key3": "4SzxWCYnSbG9rS9UyypHiTeye4QoZevVfpfTLaTN3M3JiiZQHAgLfx7vKbYVsz7FBSpYpVXvSLbMEigynP8x6jm5",
  "key4": "yewMxzaJwamV7qz2TwgNajZeEsVNSgGjxc2BrBwRxSyW3Em8txPXU2WaXTCcRwhCEnfpYvkgvL6K8ugTHiZhudF",
  "key5": "4gb11BB2am33Bb1gL1pVHE6MtMiDRSeH7i3N4hzvckz27c6Guu644Co5j47ZMqRfVdq93XMQd1Vyk556ts3QqLoq",
  "key6": "3az1EQuqC3Kiv5isXtfYP5J6DRqacG1YY1xzvDNkhkg9m6QqEduXoF9pU2KZNdikCNh69MaUqtp1hv3XFxBHQg89",
  "key7": "Khojc5jvBeJSFUy9Ls6wVo96UeHBbfiP9fbhKpGU9i4YLZy6T29ismuqeAp64m82Eie36uZtrC53AaKKPy8b6qN",
  "key8": "4vUcmonsX4FZsiWJf6t4QfknexwkD55JB6TAXFXFvo3FYJQqyL7ZkHvG9zUwBZReJBreZV14NfQf8ndVdRdGLCYe",
  "key9": "4awDLdNkBB7ci1mBw69Q3Nw7X6k2s9TkdjBYGhTtX94ZxDJ4jpnWCCS5KbZyJxq2aNKoDFhwb3F9qmWZEs7WZiy2",
  "key10": "5474DvuHSuJrSC2wP9apkVXxuxoVtapnjAnuUHFwE31hgUGTa8mvqEaHUkaBAPMVgEfrK6Rr493bhdz1zQL8Lhk8",
  "key11": "WHMaxoMUQajenKHtcQJqMpME8nu2qFYPV9wRWzeeV3nafPu3z93Y7UER4TiPFkuMd54G7ThVqW6HWLJUwJH7i32",
  "key12": "5gomzEANieog5LLMA9FvhZRhT79JeRwDYhKj3sVVFxmD2eYKkemdWfgJTogbGDa1DDZSddHBk8WqJJ9bCn432Koi",
  "key13": "33v8VTj52nLttVqBsHbm2SJVrkQfVH3CY67bBBnQr4eyCo5q6cqkRtdfcukSmYToQhMh8pXP5m3VdjbdvPHAbcqz",
  "key14": "5p1Q1AogyotvW4hLLK6vrfJsWkzfPt8dB3PLk9v677o3uebXS8Rrs9KnANiapuGtdfjWX8tz1XsPGxRCfzkLJ6ga",
  "key15": "86VJ8BtwzA1V2c3V4ZfYnsHeRMdUCQ4L66Aesv3MVoCPDSpo4GFFHihnnzFXQCMJd5uDPiXH5ugnZnNXdNuDnKJ",
  "key16": "3us9Egk4cHs6PFMnApY31jXNR28292M8B9Jz9AXmGp5fxT5pyEg7SkGax7W4smNuxRiQ1SwLG9df2zekbRaJkLyJ",
  "key17": "3RwHgQ2R21tNQDwJGJHz9NrTtpV92315tQP65ijbjfeaTCG5DjTzzjeracqBGsRoohBnKcY2kCgVPeG1JMLvAsHZ",
  "key18": "2QjXC9vZTV6eMcw8ioKtFsF9UZVB93KZ4Jv7kGDekBgVQZJWFh8o4rjUGheUuN45upwo29mGSkLgeFoevE5K661m",
  "key19": "5DvNTLZ8hFgKxpDWPRzF4JwAwbUMhRN4EBT9mKhof2GTh5eFNtikAU69DvSxkKFoiS9b4twVNNjU6zZtVvwYDczk",
  "key20": "3G4gayEZzJYV2y6JZiamAAZwoPNUHNABcEyGKjbs2p8Ajt4qgEDckhcajbsjtWnTsPJg4XaEokqZVZXH2gHr8YLv",
  "key21": "3BjdAFwVwyLjRGQgwtS5WcGYf4TK7FZjcYU4uGNNiLkMxGhfi7SaBf9KSsG4ur6ga8FwBDBwTfivfau9XwVnk7EW",
  "key22": "55H4yZ9C4pt11XqGZTLFadoPgnVUjvAKfG61K7fD81tXZdjPeHVZnw82Jf8QgX4AYQMswW394fX3JVvo7yE4yRue",
  "key23": "4yStAfiZuDWx4D57PE36pSDh3eBqzUcM7y1rVrkukx3kAauAbmF1prJsnR5AccUiFJAohX4s7DEbGRAkhe7E75JC",
  "key24": "8pKoo8ddK6xHPVvezHaXwrtZxxN26tfDgpXkH7HcBSkhJGpBrKDuuWNKF8PZ4AHfzUX6Qd1SiMfDREcfeUzjjPF",
  "key25": "SuTTCJPLKvkyLmqj9amwZ3zfPd5aftvTHMzn3rVA2C5EptvXPUpxVWuv7WBvmZPGCa4M2CMbgfUXYmAKhF6ym57",
  "key26": "VcS9GFmkCiJTAuHmQJJ1xiE8ppM4gnLj8VzK1YdfUfohGBrwvdCpMVRJoT2r3KjSPSmuq5JyYHWd2kcrELtkMCT",
  "key27": "2cfL1Gh8JYafhLNFQ8gQhEQL387FGV2KeiQ39ibad26uXHgHUNfeQDzkKTJiNyFhEQgjecbyTfxWPXdCi67xhs3V",
  "key28": "5ypa7UUEv3g6BARhDc53rAeoFuWUFH2Z3eKQWuXyjxdEABvDmEu9HaKjdygGiJbfcdAJTgKRmYUPxmrVzoSFtfdu",
  "key29": "4HZozHUjsxP66hnAwxRYGPA9GspATAXyYraBYo8tswtaYScVjzUYWJHLzuUpn21ssk1aGsyrScKKj1PuH6XTb72S",
  "key30": "YEiVXmTnmcjkRDqRk9Fy47JQdG3B41UeBUQhViQkYMdT6x2nA5Fn5rF33ET4JWDHwsdQ1S8QSvk5w6LUngsdMJV",
  "key31": "2y3jhM5TDKcyjizHaZ5jbXjQ9bNwqXZvTC822UQHkbQC5vzfBCYsdyBtcM9VazGCRcck5qYKCyqd7KTWVa2emiNV",
  "key32": "5Bm33bU1iXcpDmZ5em3KFg6mxQrty6xkg3okd8KfNHZbQryHFdBisZ22HFoefEkgeKJxWcaouYk4vtH5pG6q5H7n",
  "key33": "UMg1D58hiZnX8nmYVGRtwvw6MFkJBNTgVKxaiLA4cYCXX9zrK1zt3BtJF1fxWZmbXQVvxMMTSgMT671J17PQ1fn",
  "key34": "48mzyQeAwLo2F9K8HajCrzZqAu9DsZFkq7DuqGhxYUWEMqHa3kpDxdW4V3kKQcMdryHkrC1Yqbp2MyNJnMs8SUTF"
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
