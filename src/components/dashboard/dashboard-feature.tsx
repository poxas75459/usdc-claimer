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
    "a9BRMvryaXVNsUwB6jGctDmQhMmawyuYHisNxXr3NqzpDArAjSQA9jtdnqKBm4S9VfqeU1Kx2SLiqRCWKHiZ3bf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38dAgRBnRiopRfTxEcp6E1AAQxmrPG9aFUV9x8oXD23fAr5neph9Tw26Y6uMif9vEhvK6izgtSRCeLgyhetBzAEt",
  "key1": "3C74Yp9JfJwFHm85sGtFvc3dZAoEnX4cEe8ZpxUXLMh7qR9xYHyTmTUZScCRAqJWjK719PudGSoV8sWmPSEy5qQ7",
  "key2": "412yBmUVZEwjTDeSreent6dfQQXsL23mvSRf9GHcnH8VGc9RZ2vXuumt6Xxqk2jUVkswi5KATmPjZqjXUMPHhX1a",
  "key3": "3C5aYusWaHL7wb6W9HJrhWZNbaHKQpP9TeXwaYadwnikUqgGDWJa187XBedMNUTJz6WggEfr3NzoWf4bpkvGp7nx",
  "key4": "4A5QC3m7QPViyK7c1LBCpe5X3jSsH8uNXyPBmZeyEVuSBZMSVPCy7UD8LYHkSSRVkjCnUPZhFrbASNESZuwQxdpM",
  "key5": "2SJJQW1jCgtWiHoXiQJbKxzh3EZwBRVePfRyVpbgs98sMSDYdYdEkCTkLe5jGL4jWYKDo9WBeJFNqKf5DvosuiFA",
  "key6": "4vjcGeGwi4FHLk6rMbkzZ9pvwDUBXzHxpd5Gf1uevFVfpdbF9cg7nP9jJP8NChS1Wf2bmLPs2PGBb8uH1dGrAneM",
  "key7": "2eaYqr1CGyurhd1ATzLLZBFveeWWCYa3LtmLKyXsyznEPNxKPa7zzz2rFp2dbGJzWArcczjEtpXPidscetpECBLt",
  "key8": "5bf2M8wMgEKbaeueQkCcEPgFMpCXs4LrESTu1ucSyvs8yP67gcEurYkMFFd4nDngLRAoTW5g4JWqyRSZyrfZLG8j",
  "key9": "3V8qJencNuZQ1T5NXop7XcRsVcYVbTpNFXWyKQ4rFoZgT1o3AbxWsFUpfXHXULKw69pG31YNVqTkGeWrBHWHyq8C",
  "key10": "3pifVUYvUFgwU8Nu4GyueNVET9eSvoTs5maX7kBR82f7VEKXaYzT5eioh9mF7HUAmPGvmf1obH5W88dmi8uRVWef",
  "key11": "4jtcaAwbJtCpxuN6uvLjBru9oh2Kh1t3S5yZxMGC5UfJHrzm3i8oSEwY9vpKqDkDdNgK6VXvqkKMYz9xCsAXVuHa",
  "key12": "3xDUVTMQjhyUTPWLjiSmtxHvbEujLUoG8zCSu52tQ6BnT8PVF2hLht5nE6XQRp5sPDKGBQPHKtbR6awh74yNNsKH",
  "key13": "43xhtVPBqxzXH34RraamKHaPJtU7U1HdojdexyDs3oQt47cpWTXW3QCdoEEwPn6svEwoejnqYSPXkNMd9CqbeeQE",
  "key14": "woCiHck5fD79xQx9u3jYGF8uBAD3enBVN7icSG8wCPhZAu8Fvbnd5ZghSPUnRNVuLVpBYkgH9ANAPwWZs2Wtk2Z",
  "key15": "55NQ8yviNqdkZXmDWN6NTsRVLiMebDSCvUSeDF2LACytSuJFDkbDrmoxKZK28L4eX7yT2JCcozcnumd3QkuJdUhr",
  "key16": "k5VWn23R8GTw3EBTs9prHZLrZHVV6R6s6ST9BaAfPejqofZwcNyyxxMTPrCWw6rxMXwhUBq8rkayAyebiWCbotL",
  "key17": "4QXM2SKgQPsv4wbb4YH1f6ek69WHfttpE43gvyNzoWwtqtdpfSotKfnGHAiuH6UXVgMC6TdoUHLVaQ2hBr6HHLrf",
  "key18": "2XjXav1pNh5Z8FVzjK5gNLw7zFXRA7hAvgCEVfYVb1pAr7arcr2mwSYQRUkrfj3fAZsWSu5ieZEL5zzXuMZ24JqG",
  "key19": "3ivN9H7xpq5kNaubkpVh6wsBGkGUSumdPEvC798NvQKn2EZjMpFsFNguRa2tDzEu1fWSHRudaG2a63NyXfxDoLqq",
  "key20": "3aEgTKT58sqJZPPXjXrYawkmuRyEjbHKemTRp1sbvSsw8rh35cRtHbR4dca7nB96GopH7sh2zmFNUiQkZGq8E9LA",
  "key21": "2YHVpbcMjHMmuqaFg5dTvgCN2WahnqBEQCm4u3uCBbb37c8956xLQKX3cNUbNPNHiWtQr2hnCLJJuttPYmjLMuZ3",
  "key22": "2a3MSewK5HjX7gyLCQRan9Kk586GaQCESYxaaEbeZFvxvAfK1Rj8BeVeievRtcpgr4oAs2CGmGH1AXAcsLzULX5W",
  "key23": "3cNUmvPJpHVf2VnUzH9BxsJ3Ni1JEH3Hqan7eReaPGgR9kvpzu3d1GMQfSV3yB257QHMzpYcD6mAQYbGGLYkt7Zw",
  "key24": "5EVQ5drEdJx5yt3D5z5WarXoDH5DBuRwqNFX2bKgC4ojcJAdfoLnt3pkof8XdQc8t1kRudySJXrCtT46eRKificD",
  "key25": "3w7rRt9LHE4tqKnMqnynWXv1qSFDJMsniWDzvWKyTTRgffsMsdbC5jpb1mNdGebEQmFMVJ7JxMCVydhDeVat7Sb6",
  "key26": "3cXSMySL3dK8LHieNW4V2JuGxbYiDXCbLuLnmKy3z2xyxLUfivzxx39qRU2xMQdQUyMKSnGULJqsqoUUBo8RQPZL",
  "key27": "5YJvgBssWAAexbLwqwyjSd73417RxWnZMFKxV1FSErYF3YeSuUsPnAhekgUU69bHTAPNNkumEp5xR8Qt1jaTB1MC",
  "key28": "39LEcHtXoHVWk9yCYYNRQwA5vmTfFHTaJgHyJyBKH48evznk8cBYEUTBeJ6c5Bn6pPYK7DmXqZS2vxcKzEqqkJMD",
  "key29": "YkM7FcTMjJfuVAytRru8zehpZqZPNDJupySYpRkSFkAoGeoxUWAacchSR6k3Q736XxYqbfKRFKxaHXdx9YSd4Kj",
  "key30": "492Re9EyTfNpJjTBWQ42BJhJWsUG47N19WpW3jceumG4adGGFtphfT6PtFr4bj2sykTWMXogiDCwxPAUu2YRqHUF",
  "key31": "NhJgbJ1LHTgeDZE4k99ztxYWHoVqFduwbVHVMS16cAbSmk1vDs4LAAZeajy9i43C8i6XzEVxRkuZefnJp2w3jeP",
  "key32": "3txmsrxzSGUkT3WxUVxJeRHGZmbZSYb7bbG34Wa1THX5En4ZsKCm8qQLkRb6jdTLV1WYEzN5oCUjqh79R4Y8TEUC",
  "key33": "4hq1pBF4f61SxbkonqUb5knvt5wMra8ffag3rgFaqVAMxwRYstaG2UiouproZmFw9cHZH2ZWhmcKNsYLEB1KEHW",
  "key34": "2RdqbUuSrC9GfXwaqi7VMNxtf5CUDHm2yjw6FeEWHBqfJE4yZwHEGETv2tkMTLoDwogZyd5FgS1wAoXG4bD2pGSr",
  "key35": "32QT6Pk8JU9R4jKiB3DD6D5TBHVrnrBVHt77Hfss4HsPbv8PCQ1mF7nzyuv2GxYPdJtAbnw2S38B1TmCetSyHePn",
  "key36": "3564TiMZtTZWK4NuXyVMnmHS5fcuGMcY26BG3xCDoCzUyXbTLd9sE7y1BVKGkwC454nq7CTgAJZdQ5SYCVhWzbwo",
  "key37": "4CykDE5UFzaYhZ1ZC7hjnjKNbeennXQvgFtJi2bhhv11iUoqVpusnmSag6t7dtnCeKyazNaSyhN1zmBzFZF51YJ5",
  "key38": "3KanAwE7uAXqNnZSixK5qHpdE7Jx537pGiTPPmBgSaSuqc5nvPm2WhpVay9wVdTJgB4x1jhGEhG8wXM6xN9kKdR",
  "key39": "5SnXercXq8tr6iRU6zWMPKRBuNsbUAwN3BRFCyVySpb8uHXQH8zoQxELuXTHofokhwYd5gy9ryi4Hnk6VMsVSupy",
  "key40": "3PbBsS7QywmxqVH5up696bxKefyyYrUZwJGZqDsRfCYneohmtZtjsZxDZgHZGbGoQBoTTaXxYWPtBEjGActVTiyh",
  "key41": "aELjqbUvUNKVBypkqCgastjxruPB9zbVnCLLp7DbE29nBaeuvWZtqbLBFnnmXBhumCr1BXAoXjQUXrpDByvexGT",
  "key42": "3ykSaMU3Woxcciruqw1u2ikRWMrPxyqgkFuCs8Jb3MfG23CHxGzXw3FcLMvdw8Dmk1E8XV4ZVCm6E2KKhZUVhwMa",
  "key43": "4iHPUhz32HogcubmTTdy6yVzMXauTN8dtRp9zvHxfN96mEMUU4CbmyRGQ8vsSXdjHnjaSQN8UFexLEAYcFKmjvBN",
  "key44": "43mNqznp6eG5JoTdaRsP5mvA4notjnGgRcp4jXDRB7Cf8ndErScM67UUdVhUMzvVy2dCkFckF44cxBppuuxLxiWv",
  "key45": "8SJTo6c72pRduFTh4QJ1DiaXk1WjkjT1M7RQHzcHk3Tna5qMfuN2hADWrSAnjoGexAff4kPirpVvrXZVnpqvr3u"
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
