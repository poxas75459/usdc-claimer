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
    "2CyMtbqBuzbWX2fD34VNsZ91zRymoAKfEcCFbXLF8qciyf2FMesbzo9AxKyuLBsF1eAMMzjjtmE8v6pSKd5Nz78w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59vCxqWaybWfjct1bzpHkor6feAkXE2hBMZJyN44ADBh8NsEhCULc9nGY9v4K8j3K5tRSY7FcZBNnvPNvRw6wnjD",
  "key1": "26Wa96aH4nUUdgTouqiTmfkDdeNpPPoj3DFd1xwy8sQftYgyrcqbY7gBrrNsBX6iH1GHDkDNGXnLQxt5kwo3cGHx",
  "key2": "kMzbMFtYdtgwSmgMF9LYHNJ665tVRwk6JPxcJtZSxwq3H5XWC7n6fav9mpApAkgvzdQ6iQbgsEjiySzYj2FUL3a",
  "key3": "3MqHUWS2yhnu7YoKN8o41oiZk6Hf5rAsjDczKTd8RAVEiBBt1Q4MVdnPuPRhJeBYDph94ViQztjFqaUny6i3TDpn",
  "key4": "21Stpt3pE1u4fFZynqPFv268BqLQhC9z8GJYsb4Tx67WzM4UXBU8iFUuHGd6dSkFTqWs1LmgtSH2f9AdbjvHd8ch",
  "key5": "DGii4Aix8dSsVi5gbx9K9nv9jtFfYoFuzTodHEXV36K4FvZ7JRLbt9QJzM18AiuG5fLwcd4gHWmVJRkh4pB6if3",
  "key6": "5jDGA6kZY3wbasux1hmxL8piv6vQ2dCZ3AwuHKDyAAFu3kaCpLPQLzf2MH84JFM6TD5re68qZxMaXDqeFLuWXAAA",
  "key7": "3EZrSpH8yYNwtVBmAQnEmCtSVTr1bgLyrUAUoLXCfSoT2UQ2MKCjHcDwNuagEFv4v4oiaRBMRrtjUA7FxHcYqpyU",
  "key8": "4Mb7bg2ofWhwg3ShBaZRM6xfhgwrCx1Q35KmTA4vxemVpvD5qYCkijfb2Ck6UEMps1eFA648V5jbzwRZb9ojQThz",
  "key9": "2XpUn4FqV6wU5Zfi7Wuc8XZeWf9UqNBUkzg7UVudz3JvaHjvFHzVQ9PDxacnsYe6nGDHeYN8PTAX8RkVbw7SarnR",
  "key10": "3WKtF2RTq1TnCLhQHdx6CtbhY5nQAAYEzieYTDX48ZhuTwH7phaEVbvvNzgUii2sWNKMdb9BK5isH8u81CafCKed",
  "key11": "CbB3yumGPaq3oMkaPFRZDLzJdwcKUWmjvJVLNG72qSvhykiEwUa1FabugN7KatFK1KxUTUaxaKpQrbqJbMxSsPK",
  "key12": "FVbady4iHgYU8ku1iHS4okv69dX1De6eZQXRAMd9vStK3xu12o6acNzitv1ytpMeA7e7V6pf3zAojc5ayTSo75C",
  "key13": "2bPyDmqyt95YNcWheR6E4FNpXBJCzP68Hba2wB95Rtmsic7LGG6Siww4d6y1NisMWzjwXKEYMDdKwKMgWLRiPBjo",
  "key14": "2DEh64RSSFpfxfocFvfd1QvLddK4i2epbBhLNZaoD3dY814PzfZypS9LjAsGQLyTAJoVJqt1nYNSZBpJMqKU8qzb",
  "key15": "4KHcm75z8jMRyPxEWU7tiMT4iLNgC8WLwnVJKC68ogp1UevaRrSTwVnYN52NfpYTHEMpjWCR52CG83K9JzBBhes5",
  "key16": "vtSzikCBFTBU6Y9jigLJ6QcRQShnBc1zduPxzaFBWwUaZjjyMLT6J7ZeuajG8iPyfx4p6f63njGbpLiZS9QfuLN",
  "key17": "4FbzaaKMk2xEHSEfooF3KX5A9nUmSrT2EqXj5iJHyYf1mzpvYngkmZ9wDS22pTmWy2qMkQ9exU1RTrn1BiC34P4b",
  "key18": "2vpWm9adfUPAW9K4qj8kUL12UMzygCYd6ftURNDJbELK2RmMAfCut7VsigMH9TG83Jp6v7QuJiyLFmsdMcknzBHM",
  "key19": "VgrFhompCd8qUvr3K7v79CNjBH8A9oEWX4SBWo6sf5SRWEhVznyVrUCA4pdQvD2DUCsbsHefq4vK6soJ6nFeNVT",
  "key20": "5PKM5Ymaq72xukijJKCH6j68ZfbkWfVsaBNLGNM4d8fcdN6xuGjS4DvQkoUtry7Ekh6JBRBn9WjpYmx9iVHtzUy3",
  "key21": "37qSaSZ73fareHkUfWdvFpXPsE1C7vZsrgCEAy2UKSzy1vxNmvtTh5EfeuNzXoJkX4ToQ9xurpRQLvKsJ6A7XU4",
  "key22": "5PwLXeL123SvPU3jmT1BkzEG4LDzkG758g8kU9SMs4T11quHWMA3DqZsMwC762f9y9feN3WG7BmYJP1fdTUzkYGU",
  "key23": "iQ6fXfCXWGYSr2m4K4ZP66E7Sgq8XpoBQATRRR581zNJpMsv23Q62dvT5hzcjz3LgyqLAY346K4tfJaC2iumXw1",
  "key24": "3e4uP3sSQvDBUPfpWLFZx3Sv4ZqaQzS7QGVPKzHk48NDEKh7PLAs2nGDjbaDYEkn8Nudpp3bC3QrPtjD7GCyse2k",
  "key25": "cbSMHYVRz1m451qxVhCzksQN11mPEPESciapdgt352o8AtA7zmtFWw3ZkDv9m6KtSatrymDchtLxuN3bMn3h8ww",
  "key26": "3qrPk15bTEe1wErtVL6kBUKDMD8gmScNHqAF6GMeR5oCXfNvaJayXNVUaFBSmH8zNT9SQN9CGKSaGqaqTsJHxGTE",
  "key27": "29sLqWL3EqkFMaWkK3g89RiUFXMXqQAjrgdyS9dsqzwWx7K9HnqZq66Rf7NvrL4x8CC4GR6QLejZojJS2bE6QES6",
  "key28": "61NWDPzHoqbbiHCUQu217NUYNepmAq2XrDNFHKef6CqAxV2etQpQ4BRhzYxPptEPEn8a38cRE4QMUMiukAaAsjGX",
  "key29": "2wDJ7x3GPPsfbMRmKWsfCuoMvsp2hyqTycsjLuqcM9U7ZyimRXcGTj2rRZSTMovWbPohrNk7qXbxvMSwcz4veEuW",
  "key30": "3KYa1oNNzor1nz15i5Z53XhcBFFnu6sQx3E5a15mzWkXsMuwZWPsuUPcbtf8x9TpCv4btBsgm7gQcPqYakBGrurZ",
  "key31": "3ebCaMfCKGtmazgmoW8ndwfznpvbprycd6bYQo4hs1adhAYm7dCUhzp5gQ15n1n8QYwV1PSDvPdVKVxcaPYC5FWA",
  "key32": "5TpReLaRaZoASN131oEYP22bzt3DSAzwXHwZy2puxfLNPddLzTodYvYwVrxFQTKF6u29i7hJ8TrLhJJm7zn4Bt3a",
  "key33": "3UUWzTCR8mtd4kyzMj8d2wbUjQExEeq6h35DhgsGKXvhvotMpKidwDXcWgbKwXat1MYb6MfrNoQzsFc9jafNpaBZ",
  "key34": "4KwMqwR4FkbWkyo2CYbM7KM1wkzYNJTagDDdKb9NX5vQ6DumXQ3o5FYPQeEXAAqopZRRjGzb5JjmnZ8ZTENZs2id",
  "key35": "3aqKSWRTV1rNoDgKGoNVLNxiF4ouengyWQys9kxyjis8aZq8MQgP7A62dg13BUByECDyi2dh1JveppyTe914Wd48",
  "key36": "4q59BuLmYhLc3UkpYbA5eK6i1fh7E49titwVuNc632Qb5yZCJnu7GEFheP6cVLdphvo46a222WrgeeZHiPoyoJQs",
  "key37": "WximmHRFYqvmCaFGK3bSELy6qr8Y4uyCc9xLBasHShuAPp4zG486aXK2U7nHk7tFrH2G6yTJ8VZb6b7K14VAhHr",
  "key38": "5eQbqpZrseDavDCAjLJphEWA2hkhENY4ZHSw8yAFTUbNMfvhjsKo51dcAudvHB8DfHgEYFBuYVov1E6EhntxjmdA",
  "key39": "XbjH1U3BgiiqzDXqSkWefufeEtsxGGH83GwPwjGy4Bicfsb1mfiCL42No8cNsrxBzKsM3aJNA6ZfUVrT2MC37Uk",
  "key40": "2tkXvtCrAkyhy3JdJkDG5o5Pn4try9wTNuHn4btcxhqx4f2YYhkjTQkpfg5qNMZJhTJuUYYwANGGoyURpkuTVQMS",
  "key41": "4XcgYqoRWvdooHLyeNbo3dPU4pdojUspLujucFo1jmKy4cfsPVZvBQxDxjufsF95Yg3f33uZtUKzvSTXzHXpquRN",
  "key42": "2nuayN2p9rL1ZhqT4xR8SQPG1j2AGEMygFpDQf1HPYjjdw6PFH46ekgXWnuY8V6C8ESonM9hFcpF12KtFau9e43M",
  "key43": "4tyYADqfubZzQMF1DLxe226GxFaqYo4ShXkGpbHoWSX2M7uaz6CHN9NV4M4YVqnLjxeni9LvPteASisiTXhcjWFT",
  "key44": "oJAsdtsLqj8K8Nd19i1UCL3LMjHtYQ1VYiCQRZhSWKQZkNn4FdZvDmgG3f45Y8CVjYm4bdZqbpuGYYXmUVKFHLX",
  "key45": "4uVB3qUcY7SDwNc4nPvDSh1MW5NCkTioMiddtkhQuTmNr7Xh8a6MRVDPZHzZdNLRNyazGkS2ov2gz9YLPW23jodA",
  "key46": "5qdFu7UNdpp4fRYqEeope4SGqnkTNrQbAkGAk64cmR4FZheb7YWmo5tRAShm1NwxEdZ8r7gLwmyRav4Pa8Yw54Xx"
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
