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
    "3mYVRNGM6umRT1xa3cbpr8UoYCt1neF3Tha75gEFAijyqwz71HARksPdzr2nXaQfxBwVULg4uMRAMqQT8BvmRss3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4z4KJW7dBBBxmioXA3RaStXFceEGpTb3VCSwU4SqK76pQGXqHP4ruUPgS82QZzqgbok6GvRqb6tB5k1yE63SavUm",
  "key1": "2XoerfQCovH2umNkwFe9KzSCpSyjEyZouCDtD9SVP2Ei7QaAbXoBN754zWpPvaMQLDziGK9ZaWAdJqZ3sweEfp5j",
  "key2": "SeiokWsasPwLLTvybxuR3VYPfskmdQgtJTktFvSdyRiYMRc2FMPCqM84S2TvWnXJWxj9uHkG4ZGzBemgESRaiqM",
  "key3": "28F3Ur6SEXXCrKG6PXD7SSmbSpmFRATzh6dvy1UXp8EycuNskXWnmfPoWtiY4GP7G9Pcu5kS5Sk1Ku5WwUhJoCwj",
  "key4": "khvZhqeuosr9kcaxuGVUCx2KFphEunoWEgKUxWH85pzVJxPaQZ5mtPcAuokVZPUC82bhkoZkk1ruHUWrEd4X1eh",
  "key5": "27zwNoqcaMTePp7ox6J9FLEMwNiLPWEJZf7xxnJ3DAdZMekBRhyPZZ2zmr6cdoK2Sf8ZNi8wxKLzv1gMtLcBSwZb",
  "key6": "Hh7oY81hzGDR5AA6Pp3KTTjLmeMoHb1U78hpo15Ue6biGLs67RGzQKQyP8SYrfvjpVvLCZZdLpzZ1biN5b9weSh",
  "key7": "5KH5qpgt2u1BQNVedFTMjVg8r1ojiW3Vwb8LrDu3HGM45aqEMZEjDvR59X5RiEZVv5f5hGc96WZWFM1kjV2gT7e9",
  "key8": "5vDDe9Qn1hTGeSxuVBSKdbXwxFH3BZQc9Gb9wMxUaoATdp7nsrt4okfbCddLicebsVqW3txATafRxqr3ptNvSJWb",
  "key9": "Qb4JekZVc17NLJrYewTNTjNUNH2TJUXrnKskAUYa9APmhKuE5Vw1C7ZbTU3atCQUKK6BTMqKSuajwan8YyJQs7E",
  "key10": "WKFym6tkvNDDiciaFEdAkWYLt8MPy1z8hWQAeGcj8RVCSvyP1r3KE2f8d8iM2ZVjjAktwaYppLhbFsRE9yEqQh5",
  "key11": "414FsvYAcXByQyeu778VFGAsRUUETf73Cy768C6t8m43Rbe3Doxd6g9Tii4vYSqhJHxtdnTkXbDV45GZY7L7X4d7",
  "key12": "HxXEXXcYf4HHqzxpWHMm8prPVCiqAZK44piqCtzCT1SfLryUJQpAsssy5S4zTdTEBDju3S22JBGC4BJoqYoeufs",
  "key13": "eubyX5XLyTg9dV27vTPdVymyxMBy6qBMZeg7VCvGwLS8GbYyvRYEvxf9yG19E8r9Yv9gDyXnGPvaD3F5ybspmoY",
  "key14": "3YYYR8juckjz9nM2RS8HTL73jKzhUDip3pwVQbkKjKjWLD5Mb9bdpyhq3sSVYv3uVF6rKKMFRcRE9N6V8YFhpM8y",
  "key15": "5kyWLFoVQtCxexSKJ2NsZX1yTu29MwtGEaDx3hwUj3TjYxiMgUYq4rtxUtVWwCSMV74ZsQ9ijC4qCDibKY5Udqd7",
  "key16": "FNa8EN2aC8tDjmJzGcHnGYpeR1EQqzfAx8szp79cSUd6VKAXkWxUpSyZCNkjoGbf9Lbv2qiBRY6ik8sFDxNQjaZ",
  "key17": "481MTHVf2XZrmSkFmuCdS7ivZYhLV5dFApKxvj7eHfopftowfUMHpjB6SpRS7ZgrQcMGPNRmvse3yMfra5ErHzUP",
  "key18": "3YnGp2NjksWBxWLFze97GFpwwf7sh283LfxTp8QRxp2C8afimX8x76tzapRrJ8wGNnDcJeJY2huprJiXLiCMi3PH",
  "key19": "5Gdd9KrdFke98XHGz1Sieq3P7YNenAAkX62vQHLe5MoLQxoqkWudmvuBfgxZcNFbJReBjsFpFW7JMXHjpKiACmSw",
  "key20": "4YEthcRnPeq8RQt3qmbnCHYaUpig5WsZozVd6xr7QL299XeBkbqDRvWqUB5oM5tDFYVdAMMp8P9y2A7JPKF2Ztje",
  "key21": "4KaiL9XjZ79nwYmJwQKGAsVJRK698AYSz1ECjnWxzQ1GKEcxXWQrKrnHyhpcXT7SqJwZe8EVpvHbBYU7gAiNrTm6",
  "key22": "3RDd7xFEUG1TKw3PJ3K3bRfDEEys4iF3VyULaiS9kLGyjz8ik5zf2WQ1VQnjG3B2CnHNLRh21nsht3yBf9F8ZhRc",
  "key23": "4BggTirzkcQAKCeAaUT5ydw3R4ruWVJKc7abBmGCc9fpL7pBGQDkizmU8W6ZrD4hSm3fweaCELP7JXsU3yg9xRfm",
  "key24": "5A6E7QHgh3zjz91bDtF9KRhkip5twQ4X7MdtqMwk2uMSw9dDF1AXd7T6a6JfZtivxZ562YpCviEWY9zipg1LCjTv",
  "key25": "4nRmve39wkudk77uyYwht5xWJrHYD27VF25TvcGu5seV6onP3Wk5EwUq6V8AB982GLrmM5aHM3q239q3JZeSSbJQ",
  "key26": "RC9uDvhu6p8pwAdkE1ppese7T8ztisDesJWRV7HwuJ4Hc44mvbMfswcYdvyZCYHY9sxzQKfpBRmgADLguv4rCKs",
  "key27": "5mYwjMiqXwXcCzZoHraKArqZXw8me7H3Uu7Be9hM2F3EP9QkTfJFkKrwE2V9WqKVTcWwuwLJSRs5Rup9QNt86gbK",
  "key28": "ZMQPYStvhSHuB83z9B8soqs9mhJdvgnBT37pbtDkuKbctM3vMGCq3TLnwyMMHwHLyFxx9pwXXkKmiZB2EDpjN2w",
  "key29": "4aDK1jczf1rTBPkDQGcKA5HviPXzvrEFrdSRHVmh1NkfLWiYxESQ5P7GE9TXRpixpU2Uff2tmonTtPTPXps4LVVQ",
  "key30": "1i6YywVyyHYPM66XCciiR2kAH6QuRCRYkv4Rr9XwHWTWGYu336XhfmnJpAkAX6LCYmFsn1cotF6D3qEiGkuSx7y",
  "key31": "3xJfDwXFfnHUhaaHtAJpr1XZM7nzzAE3LrE7aJWG3a9SMPi6bMLvL91E5tdiggUcJWNf5aFj7LpSMhxaK9P8UVvu",
  "key32": "5ZNTLrraqQzFYQjHAkHj8uiAT3BAv2V3WdMetSMGFemQXZFvs2rzdxFrfNUE5ndJbKKHUvTJRwWQo4wkECZpQL2r",
  "key33": "3YFhTMtkHcBnJmo9dG8JU1CUoT9w3i3mG4JPm64wjWhXCELNF8e5v7Rd9jxiURAf2HCC7f3BHeybaxTnVA5uKpTg"
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
