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
    "2UXqErPp3HUoLYxThFVfV62CsiksrbkfUHYhiMSkRZkYAEQgyzVZjoEizJcsmmxRmHKPeUs4wcyVJjYnxzNuj9RY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38ZMwHopmoRBfAMCCVXh7Uw1xQt5fdzGfYz5EzbXq4aiN2vZs2R49BAeqhTSFNSSy58D4oJR6FYh8kPyR8nhCjzG",
  "key1": "5FynSg7PAtJq6owScF9oNuiNe27gnoz9UcYfGofz4ZwPrTa8pU7KziqpsznXk3iKJiZ4FsziDxNatYWS8ofdVL8z",
  "key2": "3ncwZfQ8ekMPT9KHBtmprcm79NEd1WZ8D886SoqZpFyvpqzJk6tY6MyNQxy9RF7iLvJ2jgpsLpVn7Cj5d1demzf",
  "key3": "5kEgGpKLBq6eopwiQxmeTBPzkgBXeHfw5cLFFGD1JVgPx8Bfho4M93cC2SgZDmTvD3aZALjYABVF6c8hWqYQ1z22",
  "key4": "2NoQqBG1n1QxidT4HzwtiNx4GTdPCgYAZgPh7G7kQsmnxUunpKsWG4MFSLXC9VvEnMBE3jgkX3LXz5wF1TQ48ed9",
  "key5": "D4MHxmUZpXAtCpCK6pMQVr11sWRA39w9XkJPpANcjwV6fdzgty1Yp7pboVK2LfbdH8zuK6pBQiXJ95hTsu1r2TW",
  "key6": "4AVUUGVuruMPTMEoarNYqpPMmTHCQ8k3W9yBKaGm7dvuDarXHXuKZKKyK15pJ9xYqg1vQR5kw9eEWCpKy2t4QywH",
  "key7": "4zPRLpKkaP48mPek87TYFssVDcRKUwAvDx966KkHjLGZhjFUEnMpssEWBbQiMt9f3WqxGcCagtLsiMHbAhHus9pB",
  "key8": "62rPfLwGCVt2NtXNKarQ7JY4QXmYvvHFwuMWy1SNr7G1ETxZgYAqW2G7Piu5szhBftZBopNoxtcn9L69oRZG2H4P",
  "key9": "Uh1QpTuKEKWqgHMXFFniNg1YoVh4t2beyz9VEsediZSEGXtnaW3v8YiCudSqJGVS73tJpdoBXHjbxnkWfiQRyHb",
  "key10": "21NzXJiex5NoLbJeHtb2rRjFv2i2Wf7MogAuvMNBspppC6tGZSriQBztbES2preBnCjY3vB5DHSzM5UEbit7X9dN",
  "key11": "2W3zYxrksGn8jPQu4yxtH9b9jUvxHoq9AzVjQSk76mYi6CdDMj7y5gjEMVWkwapCN9sUV3xpc97UShQZhff8wvPA",
  "key12": "3VssY7cX7JVd5BUzsZsS8AxgxuZxg7Btwv6bfzwYjoXJNhfEymakP3DMXZxMaaNBnr97UY6DjmiNTesZfgwB4pHW",
  "key13": "2p2mwYkdcXUJM23UKq9MCRjeqVTMHJdy7qMQMP7ePBS4ogc5uWVVt4WnicChA3W3f8KepSMCots7yiwQK5CAnsYR",
  "key14": "7AhH99cSz4SpY2fT4CEUyRtopi6Y5r4sMUnGYa54B26Jk8S6gszevVAm3qJzpho9E5kMLgT8JzDSVwRw6f98v3B",
  "key15": "4cTooUhohfaJGQ1eo6SxVAgJbSeVshwW9CoXx2wcBDjmyTsQnsPyoAduBNi8NwbJAWZDKDouGUcoYy4aHCD1ZpWe",
  "key16": "4wnFJiX6v6Qpmy5KdREsMCHkgFRtiFdQHJUJ8g1Wi3DHLNzknB35d3FJovJD6xYbSAjEjTozARrtexkBVLqJaGQH",
  "key17": "4S2i2mruQnWdJRQMJC6ScMhA3CSe2vajMqAvTkDfAnQKAUGpskVweLYz3N5PN8QfakbHwM3HPhiNsNDZsozZvsFb",
  "key18": "414ygkyFydA8HdbnBTfFGyGgG6A6MnnxW1cr8uSCWPkCqgVDXCJQyM6o68WKA6WiHHUWUu6DPwX8teV9Kj1VitMh",
  "key19": "2pqDajjA2EH5af95KFVQtmiaaKvxJqPUA6xzTferdgr3Yiivr6KpCvqMGfh1VWBiPYS4ufKEM3BXhJ2UCuqXXDHG",
  "key20": "2TfawLomFC8fS4BWS4Xn2vShRVSd6GHocwHUc3jgVYE6bABjwTUyGHGLrK8VpKxzPgBnBtztZyPC59fC7UpbhGmJ",
  "key21": "5ieLmZdhxaXryzTSuAjaJ8eaAJoN4sso8dRx43cCzkXyHTj6iPHa3hqi7qLA3CwodHzytbVgLs27os9VJc7b9TqE",
  "key22": "3LnGQQ6o9ZrDpeYcqnbTv4RdwtQorVYDdF59rvLMfDZaxtKnE1bczccurbEFzD74LvZKdQXtdK5iqkYRRhadmAmA",
  "key23": "3C69bBXVUwTKb2Dr7A1GV4KZDHtGxnTjKyik8e7Ctqh7aoZ6NNaR9xhMz7LGi53Gfpi632epGFwoyWB74zrEkijN",
  "key24": "28yQ5REhBjRHrmQqXvymhAUqm7oz5B4BVaGMJd6TWAR9VB2E9dfejCaNHdnN9ZQCw85RsvJcK8VJx13fFXxcWzny",
  "key25": "25FcRw4ZmhCXPvtyRDVurowfMtMvcJk6pVha4jb8Gq9F9UEP1SMtKwatMBpsE7ifNZifszzGDzrfJTAa52CMbn8U",
  "key26": "2SyZquCVzFr12jyyWqvGh2teBDziL5FY78EBq92D647WqNVVAZPZvQzDb8aA9Sb7vUactGpoxu1kXsnWAdHPnUEg",
  "key27": "3zLz4YEpPyMWBic2AmoV5afXN3WezJL1sR1qtXwiC6VYJujYGdeFfTAzBEAChoG5pMh3w5VmZjdfbev8wmLn2rKY",
  "key28": "g8ED4STBe8WgwpvcixZkqSLHj4UCM38FC7fFJvXeYe3h7ZmRk8dGZDs88obutRtBzrw8mScDL3PdGXsEKnugHB3",
  "key29": "482Jpnj9cVQqFxuVRupBruh2aANSj5Mq1aRBueLBjffM7acUHPjUKbN6u89mch8RWY3afWa6PdghP5ae9YkUCctr",
  "key30": "45qpFDVVxjD7xxvfr8yce4cpZzYAKJc235cma7vd5wigJdUhjdQAn1zR1S5khb6mcGZrDDyAUTgdeg92VYCYe8CG",
  "key31": "3ij9RkAsGTC1KhgQWVyyefbUhorgS45SRLhAHBHYdC4Miv2AbBbLLKDp1gfuactDaL3Dw9zUBRfDk8iNDgxH4QNy",
  "key32": "5BvNxZPSwhZ6hQ26G9CDJjkwv8ut7ZHR6jwmzbTpwi5nM5CLaRGX1hWX7TQ1YnqWKofU3buJvC9C3RYktx299Wu",
  "key33": "4ZA89zc3gDsLitxfBdbcg2N5vieAgzPeXRiBREgWHPrRwJQ9jBMgy9pvBHdRTSfaFofZ7CcjXxmELasdKWLnVWmx",
  "key34": "2HdbQ79qcNUpxKa9jW5xhAogoyxymmELo1TkXegs4HwG6hwFuYrhbdfqnFLAyjNpTDS37UzrtXCjPdRXoCCBrv1o",
  "key35": "4e8AEjraryJGMjRrnWcGTUDY9HLDUzmu3WN6dkRhV24bJGJiswHPNwwa5fJc5R5XrwB83AVwqeFfQHpkS6a7AWwM",
  "key36": "4t3HKSxCa8Yt791HRp1LmGaKJEvp5zCveDB7poH7CHnE2WjMq2EH7DLvLwX5KtVyjF5oTSAe1GTxPbsb4EyWk8gk",
  "key37": "2R2rKoNpz2pbwegpASeu4jaFs3VBoRohd2cP3gzqrHZ3nAVWhCdozSdXUvpDAKXC3VSv6tWSTaZzWQ2UCfcZ972a",
  "key38": "Zd2sa4orNNBV7SEoP8T4GXWE7eMzvd17CBHctb5uXw9h1iDiHNeXSJoBTuaFyQUAsPnB1MtshVzMqnQhNn3VFNN",
  "key39": "eJpeBVJ6hfqVJ167gudAhUrvzsHhmsHtGPDTdghrJVguoZGoq4Cu1YTy2GPJfiL2W5GFSERqVXc1huSdHrMCmmX",
  "key40": "5uetCpmi3fTVMc76yVuWwaadkwKDDX2r8wE6wZ3oSDjCJvntPSRjFfwDfvD7Xozrct35KpP3mdHLRs6Httz1nMrC",
  "key41": "5pzDUuFtVWhe9e5XFJbt12QmeRKUVWXvkBkfFf3ubttj8xejFVhYfpZQccrqD9Ms8YiNHuSb9wdz6Gt5fAaRqv7P",
  "key42": "3jMFV9EBSbZPnX4QMGyGz9z5Kc7FFNP5dGx6aMxDPBRqjyQTExEN8ZK5ijrppJBZMi3Ptn2N6VZ6xg2cxE1iP6Bj",
  "key43": "4ga262diDUPCrFyHFtCtTumM6G5EbSCxMhNj3gMf7Q89r36ZABjJ9PcAwcQUN9JjxzUg4CaZSJEW3TtjAB9YW4N5",
  "key44": "3WTrSotHxYK1s6qiHVrSFUiLbwdPg76Km1NWHPbhmf2QqC4fVMrc7FXUSpTBUFXiidpYD6SY5ofbas3Emr7zPpxt",
  "key45": "3gpAxU6wUpyRzLdRESYAHS1j6FPWzdpeiXT3x7hp9MciBGEwL6SmnCbA8yFN4jsUYjoUih6UwDxb6D3f49SgRPtX",
  "key46": "62DB1RsTn2f3MYwoSDcWQKdzMUU2j3sm3QybTGbxYMHxnPDLVT1jWBh8ZgD62PZaQJm3LFBpaPDwiY3LFutLffpX"
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
