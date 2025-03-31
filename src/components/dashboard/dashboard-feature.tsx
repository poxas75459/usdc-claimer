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
    "2r62acs2guUzzkZaVr8N6TXRhAZNgxgvV8HgF3XfkX3PxWJyxRTcTmMWZVGiECN1M33jV74eVz9d2EUboekXXyVc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3z2ehAF1roqusNcqPnbnwdeYVeJgAegRBeSVTomVWqXJ152NuseVkZLsG4SMgGwu3Hkvdn7cZtbtTZJ5fHAdjivE",
  "key1": "4cFyxf81dN69vzahmnfSLJPBqWAFS9eEJRf5mvwmPk2gvwkffQSVY9dFFmSvDRtfMhJbqXzw1uLqdNBqo5oN8J6a",
  "key2": "2TcRmqjWVH3p6otxzmDoXCD92LM5UoW7b75LzWM2GynAKnnfjJzRLXVz8vj6T5uPyG2uDmxAP3spBbTtYEbr1bsQ",
  "key3": "4UY3WA23EaFtfFPtCS8uacDiWyqC6Ke2pokk8bZzYFwj5QjRoFZUHS4SfLViiADhzrXNJ4Q18UE2gDXoFphttvsz",
  "key4": "4Gp9DFzJqJnTKLXH1zqEonovT7xNYkn9XfzwWR8WoUsbAiJhb89xTZpahfzbytgzRzaTk99t91pZyLqn7L2TQbKR",
  "key5": "2CuaNeT8XnHB9g3uLXwkKX7Z2426F15UAGrLWLAxUjDnzWtwcoSTjxFqsf8kRAW3WrKcQHRpmwoQhNo7EL1tVKqJ",
  "key6": "5fSEr4rxm3Er7CtRMWakZKZar5NFfQ9Y9bPVL6fHfRu57xXP5KGaVkKD8tEfQvK17SsGxAw2CyX562QCb6y85WMU",
  "key7": "Cbppf9EVHSzvkvXC4N3D6u6YqF3WiVAKmZf3jMUhRYYkn6PyR48CgWGWUfQP3NXcisF1bYi8nZBX3NyT9YTpve1",
  "key8": "U5svPN84ZC4DAm16dVFtsQNWGp33fYipLn58Q5oYU3ygmhFCjy56gsnQJou9trrdApbVSRJCzkZw4HrvM7K8vpB",
  "key9": "4DvxdCJcDXkbhFZ9M8yTdowv3ufy82Y9Ya3mBE6wp4aVhmQUJAGQTm3kqR6wETyM6xqwZok664cCLL7hFR7jifrp",
  "key10": "2h9U5VkdbEfudQQaDmdHEi4UJehBiq5wQpErdg1wPEDLiGkgabDx1GVFaZLCiQqPz668hWpU2bg43Aiewd3739RF",
  "key11": "2cRVbeX1bDx2UsFEgCYRXU5Wwu1XtR3N4Gkc5STVWxhugtPgkjLDSWmq1MSqzaKwsZmb7znmqRMk88vEQBEbhGYd",
  "key12": "5j9hDJuYSyXBv4H6v4F7LSjzNwtce5UNmeb1MnnaNpSkCy98vWWtWscMnYVrHhiWpYFZbBrCALDQ857bLYcTya5z",
  "key13": "3FSJRWM4UYNurVtVnJN7kzks9WuogHFn19oAWKwzgfvWCrvhznrinmyRPSbbBETPzbD19wyQ4e7MnzvLF48JdXSZ",
  "key14": "wYWMpSGKeUDS6mRhzqX7MUTBau3cwzKjNtnoWEaPv17k2fD69M7Ems2U2MkeodTzUEpFohDSNUYZsC2QMUiJuxz",
  "key15": "3iQ9tctSgPrQzH2mMP961NDuE4a2V9RGJbo7ygUiJhdTaZeXyGFjp6sV7Txt9aeoaCSEpG9mn9x8uws9oqufJgVz",
  "key16": "RxQo3GQznomoBKunKX6PVKDWqjzSbbiAcxJubVXL2qGgNheHhNz2N9tAaXfmBHqmS3Wg6Sj4T4N2N2mdMa34RXQ",
  "key17": "3UhLTTWyn1xMsQoMfpACtQWrrxJJytLZJK3BrzfrMwZw1y41XP1kZDACDAtHqjEjLeSddewKjxc8MreS5Hsipa7a",
  "key18": "6435TL6r2L7vqopuCkuh6WsnTgxPF5dbMca5uPjBXurLRNdbhmNjPvK1yG7xAU9rxQxjUM7en7uZFZGqymWVEn1t",
  "key19": "5d47c19Ty3xn2umy8jaC3PZu94Dge6AvEQkBTewSDtY6sSqYTjj1X5aTWsEZv4CEDddzb3Ws4N47xDSxaC7UqNGp",
  "key20": "5pT1u5ktpmiNXMmJQ6AyMMT8mvQa7SEznbtkhVna47GZPqHmNfUzLAciuEtkMssXRrsGcUkoAmG1kwq4jtX2NUqn",
  "key21": "3ftihtG3KFG2Vpqn1VhzU4Pe2WDgsH4vH9AfpUEAQWGGeXy8GC1754A5rR96GWY5KyxU9tmpDVyRZQa1bMdzP9JE",
  "key22": "2AiGLB5oPwU4yg2s9Cqjdu9yR8tAZw7CkVvw6jpvPWd3pJdd4d6PUEUQkWbvtLUw7ZjHiJ9pboPYascPcxvkWSUU",
  "key23": "2UQ2SNMF8MhxAUJAWusP168fxLUPCDrvFXp47dpvZVLGGkC64q1nxcfzVCL4PuGjqaCQz94ZDCG7ETjHQoS1Hd7t",
  "key24": "VgqChtp6Dcm3Pa92wxek9p6tAhKHEB378FhN41tz1VeqtG9pDNEzs6wRDiwaKccybdV1wo6w7eyQat9BcTvs4Cq",
  "key25": "49gqBkSZu1r4jnXiB6L8zvYV67oHppfYDZKgwtRCbwxENKG3NXDL47hv22k7LaStpzpca4NnyfeuHiWxJTxNmVWt",
  "key26": "5CnsRbzRxiKx3nxTCysb3SK568wbnV6eY5LZouQAgZF4bbaiaVyXyKPHAGAvr4EDFY82VDEadrZ9qE1ju6UUYmrM",
  "key27": "F6CNGFZAZ1RzVqXfeeFaPj77iKrxcJ3AK617KqiJjvJTFiMmk4kdvAVCuTSNw6zncx4XHVMBNzLZLjQPPtt3ryz",
  "key28": "38Vi3xhPJHP55uHoT7RYtBysnnH95ij7GXTuV3nGAVXAuy8uzicfbBcHSMPK62PHZQG8CtG2mu6YeGbeZ5AYwWuf",
  "key29": "3vemK1YEbuKtGV8iamiaNetrp9SLHpuNvyQ1Bs3QSXeUF471XsQ1gXFu6PT9QWGvMAE8K9G8dH62Z2YdYoZKGHCi",
  "key30": "2J3k6iWQQtdknVT67nQxvZRN6J7QbpiEu3zrqN4k7m8sVaHYJPGudzjJgzvdnAW1YzNhPonM3gUFWJQ2CYzM2GNx",
  "key31": "5Xi1XzvtRMUgeSjh2ChBXkXacKqTsTqncsVUy8ognnbaoypgY35MP2zpzHgNCbUb8RsoGwLN8eVFXAWCfAHqwyti",
  "key32": "2QJdkNd5JRGvHVTEkWJcVtpQEe3tdv9ox5X7nXmd2wBEqzK9W6GFaYp7skKfgNgrJhL6RKATVNhNY68HZ6yYz1SF",
  "key33": "5QKNC7e4BZVNKPYd3duuxBtvahozcLr1Th9z58vMkGUF27ukLSSC4QjGxddM7kUgCeknCMFwfxrSYeFEt1pSVGKb",
  "key34": "5LPGSUq5NbCVWr2157JrciKMJoEsTJAqJ2yrmeEsyij9jpg5xYQ4SDXmsJrmP7K69DRds9S5KsLS5bkVqqKttEmq",
  "key35": "48txfQ18fkWY9pLsW8CWXZL4m4ywmhwUaNyPgkmybR7GLbhShDGZs1CdZ8TiQDp1LrLg5QgTW6HMZ4ejHa3FccwT",
  "key36": "5K6Ge9UyN18SK2NkGyvuupEpivFsAbepmkQS9u12p58BtjVdi8ePVqfEDFNta2MxbCwdpPBWCsNg6oMVFzAvTWFp",
  "key37": "5bEmPpsXu7Xj5EwccH3SiPbgHi7ghdq1pA26TH4YPbB2JJxNmwSmDzJrEY54F2hp7GzbXRXds33DsZRuHUB1WzHj",
  "key38": "2BaowFzMd9bsS5j9pJk78SizHZsswac3bnYdBFrs2sxXc5iayjb4wKKtAJCdujpBcNnjEvW6GRz7yrhrbmScCi8v",
  "key39": "4HpNmTWqvXx3fS9jX7UXpCR37t1FDRU9TmUNQA9j99e5ARUf1rbtpgeLsU24o8MHE4g28DK398CTrra93YfRBA9R",
  "key40": "47wgKZHF3pAERwTvdQ1pzMtwWmfm4URNRJV7QJu6wUpZv9TtucCJiewYztG7pjQCmRSZ8xMZyZvxDczo6L8n6Dsb",
  "key41": "3THwYYbSACVjBrMfDkCh8dW1xLA8ZA3737QvgMmkbrsnfhngDHhRktFxJv85AbzsH1yh6s34VYiUkg7Y6grdLaEk",
  "key42": "3k9fs3YBYtffbbY8LESXH2bS7FBBBaBW3dnZLMeUQ8WNtoLtfFuU3gbirWiM15Y2xxo6mF8T8ioS9Z59BixWQ3b7"
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
