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
    "E6JBDuZNnsUeeT5JMCQsCC9Tr4HrQw2z9cfQui5UC3Qs2KwouEP112Q6CuZTU5bZQVi22RWoYwgeNLBffDPBd22"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55q7q3QCMRQxEEo19TKX6w1zekj1kQTGNV65iPQEz9wpQAbLnc8pQ78SzoeM8SF8wRVgPCiMjcJuznfDaCjUGmfD",
  "key1": "5EXZMFkEXUc5VQjpqD2WRGkxasBy5m1szuW6YHn2SQUpMA33xb94TixYQSKmLK8stzErAwe5171bVL6TUuzcwc56",
  "key2": "croSTUrkkQpeoh4zryKPkGWguWkHfDdsRaiDpnMT5HovC8pFttQp6p95MzChNvYNMG7J7n5hQcDf9i47dmVrCxH",
  "key3": "5rA5YibYuupCta37hybM2ie8rsGH1GxJkDBZTCDUYapGVGgbLXszDbUamGTV5uhExR1Q1nPaAgfKdnxKcPYBtx7o",
  "key4": "3n7DsXMpxnjARi44FyvyAL1Chd2Tkdr4A69EcHeRjZAVWhXC6t7Q6GYCg9rvvc3eCFfY1mGdV4ha63uGHM4TNKe5",
  "key5": "2dJbMqX1maehASwfUeffnT7vJpjT4mZiV3j6zYmKWC2EgP4rQyArgum6w4FvUZe42h2LN3X5P3zGhfya8snEm6qa",
  "key6": "4x9wdELJfXSgpLRjP6Em8jEDv7upYpqRTZj3kUbxQPK5Se1Az68gqsXNYTvNsHBdPTBxywFwv2wMx4DsPJBEwBiJ",
  "key7": "5g8KMni1KNWj8qKC2tXPcSQ6wrQbj9gRNijeycuL3vVJtTwfXqYfjLJaeP63MMdkeJWfnWVxYRcLQC5yfh5MWzW7",
  "key8": "2S3PpQpfUjGZedtxWDt9RBuTL7wKmoCfBd1YT2ZduqbAQxa7TbqY9XuWx7xKUvDhCkTqssE2ttfuQLUsZz1EoMjF",
  "key9": "5hrJbvb7kWToDMMdmFNTcRjDH5WzPwibWzGTmbibDU2DTBdv2JYDw1mR7c95rWTNvzzVdshc6pRxJquBUc3zKx2U",
  "key10": "3VtnKSEtiJmPmY125NZVBwfFcHnzEC7fhxUCa9RFeQMWTcxZGsirHi9E6DcUFAvJg8AiDCnQSwMa1CwsstxoJNgm",
  "key11": "43yG1NPaq784a2eCsrh7Ts8AHrEHea3ZqkVtoFx3Q5kjkRZwc3GwjeLtYnNWwEk2gT62dHkhs2dWEUt3rzncyqqU",
  "key12": "4Q9UqKxfGpb1G5D51Ff5LhrWpRvzz3gNLtT8MNTi9ym5g88KToZUzgFd6Wnq7a52Kj7tKi5MT9eUuuT6yjSyi68u",
  "key13": "3UNADxHSUz1D3nXgkxEe9zoBto8AD6qWJzJ5MxJRQb69VVNHuk6nBEvacujCpnj4VNEfQ3X1mNJHFKZ2PX8Ua4yu",
  "key14": "5oQJfxbXi9PyWmPQQE89UA343Gq6ZQ1BcFSwnJqvzmkAncYLpWVcVxsesS9HGBrtju2FaaTFrN42gfo2cJAx7hNq",
  "key15": "3hdysaVHAFbeAa7BQik9XWifFHoheSNUxj3d8hwHFuKk5tZFR2XmcfzJD5fLBJLaZGBjK2LsNxX1YjbnxFjb9gBa",
  "key16": "4AcGBSFHhcxhHBn94Wjdv7iYRFpozbVcour6wDeYTY8cbE1BPyZGxzKd3BzEEaavWNgUWjykokgT73G6PFAdHrhs",
  "key17": "53KAUz9e1M73K4EaqfHWbnaqPasm6bsu3wg4Hc9cJKMxuprNRXuLvTX6EhRnhEp7yZ8As1s5gmqf6ozvK6gjSpfh",
  "key18": "3dUifjsAxXHFnScvusaWQgnntpax77Y1321TXj6Tw7aWdktiAajM4teTnuzc2jvyxwa5caNQpgPW7ko3qwgdvN2H",
  "key19": "2vUq6NCwAqCpaeb9JrN1PociUsh8o6ZQhp5w7urp1b3VHYSyMdtpgkhD8B2k5YiBdFLzUVSLFMR7KwaxuGMwwddD",
  "key20": "5qzepsogyxTjkT2xTpRwRhsLLYq4ELsne6Uyq9ciqxBj7bY2SajoiohydKQ64n9rSBgMH79MGke9czQARmALakQu",
  "key21": "4ptXn3SUcKmiGaVeric2LiUK4noFiGvsNVJhSYhvvdDypbVQFEpNjh43Uhv99B7ybTEXTzmLTaEsKubdjsva6HP8",
  "key22": "3K6U7Kb2jsYvnJF4ahP1pGVkB94sq3p4pHj25Gctpcfujxwp82jUjjU2NgJvfoAYuqg9jPm1WgQ9C5LvNHSF1Np8",
  "key23": "3NANwTqesiWAQDBiRUEpPrbdFgrTjCKJ9aSKJfoCXETaDaLNxg3tY7yJvk6RCRo4MCkjbb5JoVboBfE7pBi4oV4v",
  "key24": "28xqr1uxTTM9ynNn7FNGXpctMFwXLfWXgqKXhBGyZquCBgfh3WhTjpzZfG8hfjcYuBHszin6THfmKJvPrW7jY68U",
  "key25": "scrGdwfRt5gaXFNi3V5FQy5HHzbjMK4vRvaZCBAHbwPBizSM5uq68zPiBNWVNxwkMZnjLZPQEAQH1E26CyQ6CyM",
  "key26": "2Rdo4NMC2zRZvTDmGrQ7cWAb9gnU3RtoyfhuFVhuzG2J2CTymohBZ7jfESzJPqwwTNGQdM6ejX54QfFqSauCaUsW",
  "key27": "2qJt2KqbSRjhNThZyrueSVqetXuqQ77zJdfvok7tb44FSJHfgsqtRCgdGfT5C65hpxCg2pWCzJgPK2dbz1TfL8yn",
  "key28": "3GhcrKc85xKSqL9EbLAji2PAou8g2Lbru9XRxLZnWFUouA3x6MEStcvNBvHumvBckatRLdhn9JXvrfYQ6v1X8gty",
  "key29": "5SWLbPdf9PL5aWeHok3cqyEFg4wPJd863jz4UoypEjfwJBormnP5JRwGvtZJzc2bwfXPLedpXc4GYB5V1wwVjmrj",
  "key30": "5GnytftTrovrNW5TFK9itsTjrkcufxu9Rua6s7xN22uvqVSVzoUEb7RH9LXwQ4AiQbXefQqRU8YQKnUsTT2yyUP6",
  "key31": "5iLPout33JFpiBBzxfG81ThSo43MnLttUxUAsCRLukdKE9H95DCCrwVQ85eBseQ6tC7Ekm5JCz9Y8GATwhp69Ax1",
  "key32": "VuCvGrtgmKSfLxJqoGU23BLGCkdpLrPv65mJebCgSuw9mDyCZ1qjdQVDP4GY7w3USjc6S8ed6yx1ZFXr2TH6QYa",
  "key33": "4XSxuEkG3UH3Kc7z2os4oNA49ZvhUETW9SdMKAn3vQDL3YD6y4c1KVYhcQM5ZPEtwkNzNRbhaa9hqX7Qo4YZbhxe",
  "key34": "5YGRVi1k3raLhVaTYZs5Bbc4v7qV6Hg2TzWfscYgQVSFdk5sGUhyrGQcokUygbqk6NMrYztmwH9dZ4LjFW4A4vGK",
  "key35": "HMpgh1GPP2rT6apLmrz85ikhLE98oUjb43WeEEZvGVUtJ3pWxjCRh5rmiqnuTYNRgn1pG4Yath9ZvQkZf2kSq2E",
  "key36": "52za8DJMx7syQwYcHfHr4WxfRvoJRE8v2TL2htw5XvFgH9ebHCD1ByhsyJfc2LCa9aD27oEGjpt8132yH8vgaBmX",
  "key37": "5TLUDu75NAdtorTyjNj5NaRWUTQTaSSSC7cNRVJDyAoFzVVg7Ra6BxXhf4ZNVgvPLPeKSd8kGLocvkPjpetkLuTC",
  "key38": "29dSUUXVDaDhz6Nbo29oa2HarmUay4VZA583vzmuKkYf7dMimbXqXS56NLqhUn67hN4i4LZwziqLpuWmBUQpNHyX",
  "key39": "3Ab3Ckyq7poyAsGDGzjYewszyNivXy6cfEpFXurU3m8fghAZo3pWNEXn7zQvx5orcEvuSpVFueHdmU7eAqyT51q",
  "key40": "5Z6oyFRruHkmqc5XrztwhJNPnD5fkShgPps7LUD4MKoNyXZPjdHJiQXLjsCgKngg7e2gHSvfAMa7EEwF52aVF1bP",
  "key41": "MzGcbjKkYHowJ3j25ZsDpbWRxjmVLoQQsFX1opzLQ4aqruonEXYoW8nsJjpQsjPWRoPFQpjDKQfsNtbBZr3SPxV",
  "key42": "wDRHVQiNJ9UJSZVrrrViQ6282ZnWZ6NUvkKzZkjdpHEj8eHhrMh4F7XGTjUkjvDTgafy3QPKZJwfZQBsvkWhXuS",
  "key43": "9X6vP9tfAr1CSCPY5NY19PsYBKcfxdxqqgJmE8vuTpnJeDvjJLhefpnUoXzDBxyaXKQzegiiYhLSUhJWRg9haRh",
  "key44": "46UuKoFjVHdPJDvg5X6Se432xwo3P8oaCuGTNLp4WyhLFidBLDjMooZSNA8u2Z2hTR5j6EvcjXwXfgsGYsJiH46k",
  "key45": "2RqZnJAE1d2LixcEXuC3XXzR5xGMznfVVrMi9xv2ykjfHeLwNe7VN2VV97hKxxiY18jc5TBFCBdYQRjFX5jfb1iv",
  "key46": "2499GSdAPT8vKm9i3ZsvjhanwDpncYDYpqH67vgLMJFofJNFs2hQmgcvJA9d6wqxeqik4L1N1feDCrMRbTGcMzVV"
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
