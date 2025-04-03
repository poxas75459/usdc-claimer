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
    "9ozdpPfpsd6ihZCgxyZo4zFeCG1jeUNe9tPaBRg8G89orAT1Kjo44pqYDmhrqDAsYe3FyUZDEuHfKSeZHoFn6p7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57P1oQANejz3YioJ4ffMxZ2ZierzxQCmEHjN1Bo6MbfSY6FGSXH3PH7vuXDi8d16exzaNCku96atiAWFtYz2itDt",
  "key1": "29Pg5JwWb9A9EvrAvYGAoSYxR7U32H66UkCVPF3DcFhsYLhq8CCpJJT5zLpfMzBtMCXPxqqGg9RCLXi2UEiLQY55",
  "key2": "4hAzVQ23enftN215hUYneokB3wnNTP8oWwgbx9eemCC3JwK5nZwcznY3K7hQwXSnavToRWeVzbFYrXMXZMwiPDom",
  "key3": "2wvrsDwi7d7o4XuBHw9QrGpKEJACLH987A2fLqdg7P7wxJSr6Z7eJH1tQgRfg1NPZNY2sk7kQQBkeUZFgZxBbpRw",
  "key4": "4uQTmAM2K8TqjEXF5crYCp5w7gr11ZDwjLUVJ9M4QfWMy6u93nx6eZCSq93wj6MHBFD6KQVWWDXb6c3PjnGKhuqA",
  "key5": "4xaUTWjgteUTMe86zL3CKUGsKf1V6jr7WVLTUheBoQqRzF6uXkWAq9UeBqXmoTgdC49EzGyusRmkBYiM2oncaJ3N",
  "key6": "26YBKWRggGPgVTBMC1nccrF2yQ41zKJT5JQvmt4UF8K4jpKCdZUvysJTfexq9FifMvE1xMFtwqgybXKpZfYBhe7d",
  "key7": "3EgYPykeVc4J4quvAEURHCKRAJgkx3J1xxk1hXn45JLM6VuevUVuVc7D1A2iSrpP9LpxZKAgMUJiXiagXa9Y8jP1",
  "key8": "58WoSswCQzoqNh5v6TMPugUGwQWWV5W7VucQL6jqrNjgm4YN1KgSYk3X4Bg7vrnHAWhTUt2b5Y1gRurYvzoqtMi3",
  "key9": "596YLkTEmQ5JwHS2fgmLywVf2o3LgU2qxjeriCiRPkF2P1ij3tYswCbs4i6JoDKmYf7k8AdZdbdRHJAuwzhPGJs3",
  "key10": "2fUaN68atoy3A2GJuhW9jDhdZu25aPspKuRt1i61ydNSjNq6avH81nQAT4KxzBtVdVLaKWia6hXDtymqEgTX26WY",
  "key11": "5h12DCPrR6CUGgtt6JW3SZikhUHhnYdm9zFaM1GM2LZGRjUen3xfdQqKarwNY56wKV5suvjLDVSYMsaXxp29g9pn",
  "key12": "2P8nxc5c3TNzsSFy6MDYT5bYrkTptc6yt7VJnLrfrhis8KDwFmz8GVRk8toaUvKJuo87pAQ1JRfLRtrbtdZeq6kw",
  "key13": "5zgRdYG4pvFr4y8wGn2zmZfhcZcGeY37hRxr2saXLiGaECtSx7hBetkLnZbwucgsbbkaVAcnwWN67uVa4xXhcHju",
  "key14": "43AT7dXrUBFBYqeGhsJmTHPGuV1iHKPvTw2ZR7jrarudzjvM5MQMb79UWwFHQ82kKNUwWikC2iUoBH4MqQBiAnZ2",
  "key15": "MqmjtuDscDLSjh3knQfJYVDJFSwKsM25eDuy888kXXvdw6zyEtDCwBSEzYbUWgUehbZL7qdpRGypEvSUCrwM9t4",
  "key16": "5G6bWSE24ipVBk3uBbCbEsLgXUwwcDQe9rBWTaxRRuBRXQJHT5vG2y57TNwc1pfEXmzVtA5ZD4zJhM7RY6JQmDip",
  "key17": "UqUVD2wGMhqqTFDNxxpjEw14S36DY9T4wmgxWYLEg6bVDKCstMbsgyhT1mLyQxsWAtNySy6KjJr7E4nE7MjNLEP",
  "key18": "rskNYNmzzrW2514h71u8uSGb3BLrST8Uf5qHAo5KG7gT7TFudsCE4F9eHKYKnQW3UPmpkEbfGFGHMJc4QmRAJNt",
  "key19": "56CxhmM6AiCiHPUbf7wMwnc5VAN4DFzJkqHSNg1Y6w9zjXMCsMqXrweS9qTX35JNTP4oQVgo5GHve4MS1YKsfh8T",
  "key20": "5769ZvNkBHZXDbhzv2qg3U9pTczzmTKJVoGzX3xnZP67eFoXsXAXvzru6zEv9QUrgtg3EBVzbv234VBZL3MvW29g",
  "key21": "3i5DgNnqpAbQsTcgeHB2Vwt7GEuiyoV3aLVVSEqPvTStudrKyqnhRcUuXZeQXVK4YT3VRboxQZaNaCR3vBXaQF2q",
  "key22": "2tRe3ZMvArZs8PZ1xXXtrWmDo8WFaK9hMbsSKRSQ8gwAWRorEadNCLKpSzjEiqfweTmpgf61R6fsJ8QvevD6r6UQ",
  "key23": "4iLX7HXxpizycxJuX6UBJ43bnBacxNeFx7VoeWuxEugFnTKRq5YFExvBBPL6SoDN4HDHbQwmyUqucGQAVsKBwSog",
  "key24": "28sSs6sNBRsnr9gRrkm8mDouBMcKbmEXYqXjkzjSGGuYhh5TG9N5hArvbCzHtz5ArNskmgxady8255pbQjJnKWBj",
  "key25": "26WziaEtUsLFp5FGbY6eu45qjXFV9DKK1bfpwEE41A4nPU2Y3h7pr3JV1iuzdsxcf2b5NifmnyAh3ipMhTYEukt9",
  "key26": "4SNKyccBgejRjPVDZ6mAypnmuSmoMQEsVHMj96KHWoYc9ibYX262XRy2oJx4vN5YGgtYAS9HJ76qHwWirXYAGygB",
  "key27": "3VARMsLVVCCUJSQSC2Ew3j3o2jFR2AQVbg7J1p62NvixPu4fWkkYfLJH3DVaAjgqx4a2H7NU1ErTG2Xhko2DPB4V",
  "key28": "2oLc6m51n9pcbi1oBw1AF2UqgdnFQwRywVNtSyiTa3f8cnLND6JQn3cbQzowB7HHM7FP2WxoQ5TLBwYQ7w6Wi82r",
  "key29": "5wERP1SFhGLenTAEW5LDXqVxmyp4XV8Ycv3GGSMhvgdFyYuVoEkTRZDhtyFBvCsPJnQ2DV82UmHTg6xACREWHhu7",
  "key30": "YB7EHmnoNKvjzpzkByDVjuWiqcwzpFxd6QkMGUCU544c7CuUernSjfmNGMKhtfhJdhhoroYNpmZgMMxt3mVPU5s",
  "key31": "66PpHARcJTZwmqJVmrJSVMZm7PusNEfeUbJeUr6PVBnnLwLZ2sQKhiMJnzsuCyvcg1biG781xEnbf7KHqHxAkQWH",
  "key32": "24bs3WRVd8joJ2aua1jDcjp2A1m6aWdLaKcdwg3uNEnoB6P8JEsaS497nPzW6Wjx1mdpH36hAJKcZ8rxVArsTyLe",
  "key33": "64KSiDAnJEAw2iDySAPoqkoRzhLQ6dEhp7uL8bTdGNogsFm8YYQnRRaJ7t77y8NMxFAy4dkXuPf4gMBukS7fVsMf",
  "key34": "2EWcso2qVdygysPZdPcz5vbCfPtawF7JmnAstzfsUouC6XmMdsiLdNpDRxGv3wWMzE2a4HEjKgaqJ5vtd1bPtzwS",
  "key35": "3YB6Ng5YmUjK7wsBkeAbTN9TvmrLq8JFgB8ZUTwcSf8kLjEiLafKuFMBPq6JQJtSuEp766JgvwiomJCi2GN724Sr",
  "key36": "3wZU1oKQerF792gMYU99hqM4F2ELWi6pts9pKw6bFktJs6mwTTgqtbF5XmpbUiSEbszzim39GoMDtqmg3rLT3SuX",
  "key37": "6CKeFgbBxW1VDvyrXWMo24NpE5AWzmbguqo28NynoDHjdyK9zuakXfta8m64TuqpjbE7tqgVrpgYjGn9UmNrzYv",
  "key38": "64F7aagzge2NyQTuJ2qpt9dUwunRacQWxTrHMXdP3NorVFYSenT3bDAP9Hf51EgQY4w59R8yEXREttrMsFXJmScC",
  "key39": "2BYnzvQypi3M8W9FCt8uygTp3j6yZaK7PLrmuopSnrobhiLeXE9nyAp7opRCch7CEKpGcYvLEPmFRh5k1JCLamZ1",
  "key40": "feqCYCZzQXDv7qvKYfLYf2A3Lk2D4KoaGC4osL47RnmroySMKPo8J1LL2hgyoJEkDXyUbwHZeXAE5G4j42bRX2D",
  "key41": "3QJJFLA7ZBkqrw48VATUbPD3Ntj56Ggq7dSyvA7HNPmrTNmmD3xDcsRMG6c2tgkawf2uYfTg42vj5Xtm8VAYq5WA",
  "key42": "2s1hoxNCEpqEasvqK6xU2GsKqVPJMUPMXYomC8h5rYwGDx3RvwGRnYXoAeKxsjpMebraq96qCf5Tsr4nPvQGV2oV",
  "key43": "5m76MNAH9p7Ee9mwTuzHr1hPhMwXeqShUS3E8wr4d9i3RyQTuPoRDzJhK5pqJoutV47E93cc1vjoqbPnVqti7e5J",
  "key44": "2ajRZy8UsfqWzGZRymm7g4p72PXsXkqYqRRwkXnAMW8yQgFAkZ4XwQTXjZsaeLGR9bWa31keNaW218R2JDWig611",
  "key45": "61mMamxu1bcsXMtSdZmHFUMJKV64swfZvFTaqzqvmE3XiERfvQagmM2qtDyF5RwdCKXQn8GwTHJKxm9oKV7ddaLE",
  "key46": "5MaiW1M7Nifhdj9C7RzFLDAe9RUE1NyGc8ym6HNQSiAsJj298chRACq8oJcNjXuf6VoNArauV8P8Q4Nj7K2qwYay",
  "key47": "4pSd2HmdEDkR2vFGmBiVRWQzRW7uu9Q1HdGyQZtxnxppUNxcwk8WzPo3yxpGjZCRqZoV6saVCDziy2rmKkhtYPa4"
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
