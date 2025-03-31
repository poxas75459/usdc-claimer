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
    "5QKJTahbcS7Zczp8bPNHqKKM52YEKVGBcaLXcxjAR3BVPrJW2cSgW452MmxAdNa7G2u86dhJ84FbFGdgWMjuJ5kE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55UwcTtXmjJ2BsdyCD3obdp4QaLNkca4id9vJSJyQCNd2Yr6ooeLzRsPGJ2Ngt6ZshSjzq5XCWiajADRpi2w9Pz1",
  "key1": "rBGVTeMWMmYb9cu9i7T7vW4ipbxGVtziYcATaRKPKAmqoSbmGYHcXXr9Xy8i9XCptcyWuBy1TuYJmHYxN1ER9Da",
  "key2": "RYMBHxKJZGwh5ecFoKgcsNdw6Adfn75Ug2yHtDvMupdj4Maj65KtVntGSbm5Vzf23Ku96a6DyvkUtYzREMdbe4u",
  "key3": "o5QqWPDAzBKxGwtMaAKpMd7GRPST1K6d4pRCL9ahsW7WLuVxXMPFpeS1DUXj7cCUYjv18eWrSB9sj4NWbfXb1Ge",
  "key4": "5Jm5CdDnA4fXdRyXKWNvjQxTvTBNDi7cFmS1vAzE7RyHaPCvE2CD2KgGv544UUNjrX4SzvRPFUVttty4PdTEU9Ee",
  "key5": "4ghxZ5dybyy1CKYtRJd3Lu6SZRaThvsEtqnTT1p2sJMcgPsiPi6JcyC6squuFxUerzpqsxjMhY8f6Zj9TF1CEjxd",
  "key6": "5BkLF9N4prBH23ZYyfizkY5g7gvwDRJk7Tx6Kd85VwRd4CcXuQUTHELYjbUG7U9VvrsG5gAaL4ArQ67a4vLnw9Y1",
  "key7": "4QDFeSWsEVNZbLRMgq7mNps7G8goXQVBHCW1uqxee4XE7QtAbUdTJWiPvW94PapFeHBg2Gy6K3qntHtyNaVnkYFz",
  "key8": "8NkTtvRZ6T8qm7hW9k73SGcBoUML5rrAzZWxGfLaQfsw9XaqKrbALHDTEGgRuxYpg64HdYTgGPK4azi22arDbxL",
  "key9": "3jFc7ALZiWF6xX5xz3bx3x1xsiyep5NohqZ4MAv4ycAQmBbkvjKmwEgVLLHCVryuR73tmMHBemVdPBUzBBRnCfvb",
  "key10": "CudgDPBkb2eC9YAo44KYp3gAhP3KcwR4PENw1TB8NZjTFKvcn58X4XdS78P8uuoizBmURj5Rbdmx8i5Vh7iPRgr",
  "key11": "46fgVjnUw8wtBz4FJLWxRYDJ8TGXDaooAB5ej7ZsdZdKo3kyVRHsTqpsMirWAq28QCjytZtRCoz16S8vQAK76J1Q",
  "key12": "5VKM5xmTFpnpzDSxXhvKGy1w3U8ZB5g6K8hmv8zV8WQWM6on2CYiKBpXXM2QboCMXoNMmBpQA2ExkxydYA9jT5rT",
  "key13": "3NuB71Y2AabjgMBFURcB7PfD8a7C4utQezjDc2miApJW6TbHV9SGbNDYe4SMUc9PgKVGscyKcaTnJqk6TvZjZnZY",
  "key14": "2Zp2apvg1ABdMR5uQzjD3pUbfpc8dgajsfz11rzgAuHG3ajuH4Dy5KGwzsbV1aAFcftnDThnZmHBbqzgzyJR3zVj",
  "key15": "5ZAvVz32p5DUmPxs7nX4JVcAqUwz5TzXwkx4uUG6zijyM5cWfroeAW2UjqJjuhR7NmVctjRkmXxVfUHiCNP1Vwn3",
  "key16": "3ckffXu7U14gmsgvyEMaPRsQKJGZuVVNFWCBpGfiw1k5LppTLJ2Nz5WLf349zi9fqyrLiVr15g64JEwGAJ2D7Zfg",
  "key17": "5L4hyuU8Z8o316FyukgbeeLLacxASnvirXSzLP5qZ9odKAHhEHW7gP41KMtUm8U6L7Vf7nRMDqV7iFKrzKGvU8nX",
  "key18": "3bTu8uyTZ7LdUN4Fj1UxKDMcVJppWvyuB87jHkvSaRigKh8QKNKHGPuM5qnJ4RVA6e58J4nfVsgmJY42c3L3ucMW",
  "key19": "i1LfiUns2DWHUXGiZ9fB9WNh95huuiCoyKhR8UJmJTVHm73uNLxWdiKvGY6YZhNazksft9vGRLb1NsvvqBhyXLM",
  "key20": "2kP7g2vTRBKivogjKQZDGztDRmViueTa6HB7x3wvMxQFicqrXYVkz8HFhh4c6pJcK4DoaTDLs4cbBHyBjhaeqAeH",
  "key21": "3twjKULdkXQDzHDjQFtSUkRZ7K1D4tKGwrNWDCfyJSUcUwz8s1uC3iPV2Pmt7EzpYATBYxWEF9RQRjdRYMyKoXpj",
  "key22": "5DPr8xXBNoMDsacyqSPva6HPMuUqsnco77vA5Ua8C5piDTBFUTfU2mWCnrbKY1Y1QudtczZQwmFzW9hfxETTTsLk",
  "key23": "P6YDhrr3EycyX3Nu4Zrp4jryNvrtgrJBGGASTdUsPFKuR67N4pwAsRBvYn2WcnDJNddvpABkg6KJDQ1erKrfmXH",
  "key24": "2ZGPKFynDK9HfeF9zynHF65EbyZSaRKJaPaHvGBx5UMGbMftXssdjLSd3eFK6U84eMyWFv2fUP2T2zhMHAs3y1Mq",
  "key25": "i2thhfTTSoRrM8KsQaWYhPsvkheEEUsHmRbtK9PrH8GQdCUdpyeuWxs1tVs5mhUKwPR1nwXiYbXnxrb6aHj4khW",
  "key26": "36CcBj5qoqbutPyivw4eTFXGuNhhxsVca5C26fSLdW83fCG4o827umnL3EoXjQM4FDXr3XKoeR6x4SdFj565vC46",
  "key27": "55rAKF6pHn86me8jWNpn7gKFMWjNvHFM8xHXDCRd5HAJVAN7xUtDyC2KYyBNA5b8aSgZKsxgHuW2eE4kno3MNqs2",
  "key28": "5pTiM6Hoe87Fby4UGzRcpdkRR6AxmDp7vVdqrUjSibsk59ZmXkBHNa12N2f28FxnCuTLnuZ67sJyhttW9iZdofof",
  "key29": "5zRPvhBepR3N18xpJoE59seXc8vepn6UWwqHTnnDitqgLAe5pjLmh383oiZZTpTJi1d5mDrw3UcbJ7PQRYKxLGp7",
  "key30": "4GBwDvKNbW7A1pDA6UKfxZ6hXEEuy5d7MxbtYdo1daRvQT1bUD9R3DEVE1QPwjhMCMMmBVSUBGmWWr3MhBLFtTze",
  "key31": "2uT1QsyfbjvgA62LLCjFAg33UC6qce1nevzN97KTvxmwLbUJ94WSmFBLExQjKLXPtGa2k6CKmkgXLYT9GaRRXBeZ",
  "key32": "48LJeRoqtYbT5Qs8sHrFdFo5uZuBV5fdZnUpamjYRMsZZCu8XNzTERWnx5fTjfKAzTKZvcGqGvXxARKZga782fGJ",
  "key33": "2A6doDJR27Ng1Kn7fdz2NQ6GmT1GaH2A3bMwaMxWZyR529WKW2P8nPTA7pDNg7uyqprAHTT5ADhCXE7KX5aSQ8S8"
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
