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
    "3nv3uU83rAoNVJ4Yme8yLRagGP39h2nEBkZU4UXsocWHh94UwWw9KvG37GoMgyRuXXgMcNuEbSM2zAqpjwCr4ReX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ziE2JnEfJC592934ertzjKB9uuz36gxJ6GtpjRCtsZM5cgMb78Lfz5BXsTp7KDvAn5ycBUqsXit4yZ3YYp4Jwb8",
  "key1": "xsir7Mci6FsswXMHMGMsxmJ1DxEu1CXQjQ22gBLxNT4SHykBGoFdbmt5nKrsyien1SVWFwzUwgHay55uAtCqUVr",
  "key2": "2LRz3WEd9JWuD5kh1gxYSQY1VWT1fEcPWgFSeB7A6LgGU541SERnvibsjdz291ipc2dMCc2x1M11CTwnktYUr55a",
  "key3": "2GwB6DYPfaDNQvBJihQVxMQ5qk7BnCidRhyRoDogLY2PxHXE8CfDviKvADYwGbuBDX7nHD2ZSprP3fU3Kyf4gM16",
  "key4": "3EhVtuMZjk5VoaAekYhvs6pW7jR2199WFzUsZP9VC1p9rvAnheSqzt7B8ZZpsq4QxFaZZzWZGyYXenQNexf7gMNt",
  "key5": "7Tw4dzn6bmbaB645cRfvvMPghumvU9BSbjtRpt1vL8JqPTq1FJsV5yWs3eoFdmbkKihUE7igvhut8gX6XteH3Wj",
  "key6": "BvVDHw3BjEkyz8KRkQ88bphgqWGc5qCDYYgYRpjcCTUXwjp5N7mFTceAxRsa6PUSqsq7HKLmy4UXZ9KjKibWP33",
  "key7": "57XrmPAry5hBaRvA4Q4bkRnQP7pAppSAJWSBKuLt7u2Sh8xKBCBXDcbYB7nHYyjBJzMEpMjPim7eKkyLdsGMbGCC",
  "key8": "2dzj3qP5WRtTjKyhbZk4GgAyoRkgrFcebtZUFCAzsHoV2vjNX97PYcpCVbtxXowHRSrgJ5hZghh2pohWhu9RzcJV",
  "key9": "5FvEuFpNpymZEuPGQEM11LyjyXoRnjYkmKUpKYFd3e9PUd8rmcUn1yKNhtX9NiZ5NLrTLs9zwQjygExfuYD9JcxP",
  "key10": "4ctyXtxukhUoeTo3rFmnWJro4dNnXggQmttS8FhrvF4trvS9YGSkCyRUfBrA7qC4ki2jtjbzAgRszPevjYUKyYky",
  "key11": "2Mpx6NpomngV4AiER2iafJVXTZwwuQVjRZrP5B5R6KBb8epxwizwvTwRCqBm3JYUaJPCPPdryF9rqcNo7K5bcasc",
  "key12": "3AJnJqwz7ao66HeWpm4ed9PWNCc5nLd1AHwyR1nWbaUNsk5dAwKcBkEnnwqQe4WpDpf1hbVV9VdAVsm12AThFJy8",
  "key13": "5Yp4C5fYmTVmwJpuQUZysTMAemoZjTj6cUMUgjgYP31vfKMwMGnuRS7B4fKEKDm4Cpsi3h5XboXsr7Ce2fJtXSNA",
  "key14": "3aVTapGDHsUBK2PF3R1HRv5rsDtSbLcYh857oXscfnGGCaBh3ocxAcDvt9CgaaE5fTETWYzbx1rGWCr6NWwkchwj",
  "key15": "2vZ2W6YJ7YrS6kps6qMMev44nzSdQV6cK9KYXXDzCyfQkH7KdUmdP3Av78tDY5HookovoUJPoQ4RaznSHHVeiiZA",
  "key16": "51esQtfPdUbmC58BZoFgmrsiUJR319xCPUYZ4MUsZzhtRvNNHapTb2sEGQKo7JRDRZR38A7GWKkSUY2RjtowUmJS",
  "key17": "2a3xpChtQGi74nzKxzywVj42iXnoSYZicmDiFHXCVZLM5kt2ZeqBPM4ZZxJSCxdF6JEtSF7w3XMYu72MozSj9dfi",
  "key18": "2u6TsijQqp2QynPAwBiMp5U68PsDEvdWCTwRgide6r2koYvqP3tyLBP6NSDFKDcY6rjHBPKPcQAFnEQUg2K67Ah2",
  "key19": "4Yr8d9e2VjP9cm7a7xaCcUvPjbtvyKN8xUb24WY1WsdaPT6FB56hLb4SALDdgHFh6qKnXbWwL2DQRm1nJrgPBSSF",
  "key20": "rE5VTuofDwHtvapQQmmWihR9nSov5CFfRVVPcJJ5ntjRH7aE7FSibtgkxmvHpnVaAyTAYemLmyuZvo9SsjKbPf8",
  "key21": "3LnLbmM8Hv7zcSpwBcYz47jHxcuYagFjGN2TR7PdmJQjPeyQGTey3emP1zdrX2sknmAugEvcvCxMyBewAfE7yaMM",
  "key22": "b6b6DNdaM5reyxqEa4NJtL2QjcRpvwALGSriTkACF6tBPZszK7kdrNGAW4V9WJoPAqYdtEC8B7vy1AmW38uV8CG",
  "key23": "46NZFVq4W4qJbofvqrgdUpRa5LDZoq7HjTBqq3iTSD9BU9DFn2XEMGhRYsA3aGZ9L5ZXnDbJxNH8eiCsw3D9o4hX",
  "key24": "36kGgfJ1pERR4xYq8GgG4TboRQ5oKxcXNwZV7qca89ntptAiUeFyJHhdiicqKWBgwp9QCvqixiVJws36Wtg2tH7b",
  "key25": "5WWKguNj67nhFPPoB3DfPmay2kzyZdppS7Sp6LF7SvZo5vqs18R6Swj1tsrwCKSoUMbmBfHRXUHYh9scZLZDjxsf",
  "key26": "dTvDaK2CkWRia4oZHm1DfN9G3mNCwPksVWuFRpoJLHa13L7gksZXUt6WfpCvYp2nvSWZRRrW4QsZvS2z9fQwtSv",
  "key27": "36fn2hSZyyUD6UqyEyVZCYW25B1JjYrxJDFTm1LZ3dy5nbv1cR9Wf8Wj2DrKteZcbZXJRPp1J4asb8gZwvoj5nze",
  "key28": "5VCK97TfPjq6X5W74bJJYz9kN75PcDpN5tXXhifu1MkhkbqnhCpWyzGff3Wtu9r9acjNvN2Sd9WB3dYPN8nwmMs8",
  "key29": "3XFJhaRReZRUcCPQhCu2QrDpzUmEoHEJqCB91LPpMhc731rWm9fVu1txpSYNbQK9XGK64JJjq2PCtLoB4hwFhcpu",
  "key30": "3zPde8KKkfWTi5nKyyYFQs9SutLZVzFpgajeLFRK3sxn5YdvwQpVDWsL1QY4B4T3AqGB6HgLaTC51jKM4e6uBkzp",
  "key31": "N9QkXk47NZr2xF9Ppc7gnXnfgTn3NsYxehnw69u6xpz6ZtVvVkukfTEweDEK1fViHP2Mc1QtGEWKpRYN3wV62xC",
  "key32": "36ycXraSN8Gr2TiZYABfQX54HMdaCBbg4AsAxzBkqkAD83HJS8DNaC6fq4sYeHyNnzZeRC452AGhqGXgmC8Yz4Fa",
  "key33": "3qSZKL6qRZZuz88gRR2qXepzAbxFisum7x6oeGh7HarjmtwriQYF4RZqMBPp4Qq6xFWitaMWmgj4c7kZiSwguqjG",
  "key34": "3V5Vjfe1wSafXzCmnsJ32Y58YK4ojenPaJtKtU8vp4eLK3ubn36dVNj2up4XUbHoTmZg4qWdqfycAZrbofWwihpG",
  "key35": "4DhyJkESzY9LtdMJg86FTCPikRGAvk5w2ELodvaxtbMTgntpTtAQJuWNrdGUi9tkY6ShXnj3vvnuM3EPgXLEG9tK",
  "key36": "4L4FWXBoTBVTvwXUVEsauLQk1o6jBcqrLZ8NY8rJPWtgjhnwxmbDKdJJ3sWeKFzsdDgt6tAurXo3eS4hvgNPP2nM",
  "key37": "hnKXE1K5x6dskDddLRRPcETQHVXA8xFkYXpiZiEkJrxt2RH371t897CY55RZf2NjJhjNsCZRwry25YLs7giGJVf",
  "key38": "4hACC2JdK3K9AUuask9BXQDkJt369ZGjpWj4YJUpDGJ8DK8yqzr4h1LGvp1QGNDqXpWtUNSRTip4L57GyBCdpVQt",
  "key39": "SdYkwQNvnybdgCJUXE7Y35fGt1LeJ4m98FGCvV1n7R5LSvwLMkjLjnpUgeAcJFbKA8vBHC939xjJ8xFviA2o7qk",
  "key40": "4hTntmfqzdHHvW1MqW5SKFaSBw2VmYNLCFskDso3hy7HjokpJUkRRfNg71TXp5uLTpabctDkyAyqNBHGJDcNX6vd",
  "key41": "4FQv2d25qdDJD3P1nxHTFZasK1AMqgBjMtwgLJRQribr4ykEputm7AyqZxeYTU1PDu2V3RMkQK8gb5LRR78FoPZK",
  "key42": "2Dmmw27stqHcFNx45odvbSg4F9B8PTzHGEscSp6uiLu6zPFQr2Zi8gLLcfSPvPhAw3LW7Deg1Za3TsskynmDLNUh",
  "key43": "ddrGT1CPDMJpS9BGB9GW6nJYSK9NdbD9bJrH9nHJeDgQhgqenWNdpFxejtVmXYtueQhuziGM59oewpqsdTH1Nkp",
  "key44": "ABMvqgNqkJeFhZYp3vvnhZS17c3LZxm6y7vR7JXsvcrdanxsgcbpSxSgqakJSumAGgM36FoC9kVCk4x4RnnSKBh",
  "key45": "9Q7rk6ZSwd8jduUqQCGfYddV4e4VBuwovsMQcWvDDd8TZD4ADjJEXeSdLcD4sgcVayTe1TpUf93WGokExgVyDwU",
  "key46": "61ckUywyEARgpTYkYT3dzMqan8dhecSZEgwyPvqPa89gcViMWmbTqCLLmVVMxEJnX8ppXjHs4roti1nGm3qDjRsv",
  "key47": "ayM6bHnHDwaWTx6mptnAuHQ6dVMyrdEvYoxZ1EsPu9w46oi7KGFCYjMAYMCCtjzhjN9nULLr1e6uZMAe82zLSx6"
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
