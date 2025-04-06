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
    "3wi9oALKSoMM4KDMK8tsP2Fkw4Dm17BrAdF7fBWsWRQVSiTULMA67s8nCWuNMH7LgGgeNVzbfXZt8wqX7YRni9nQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PrBrrQnTdtjugc4v4hMHxWpGvf67fSYFt3usir4BNYuNGPj1uAs4miQxAo6Ug3qgSShftRsKm29tKPihpiGFfBP",
  "key1": "nxNE5Su4JEAaGEzDzSsgAHDJoCeGf6EmxdDa7Gg3jgLHuhrsJZrRupq9VML6PD5uptWcphKihkiCCzbB6KVDKw5",
  "key2": "5j3zE6wnx7tFhgBtbpjAP2bAoDLKQNg7FAa8dornQj4ZYUYXXsgjRCx8QwqworPNaiQtRBYZmtLVmPFdkN9PiYoS",
  "key3": "42rQPuQnWghXPV3CjCp6QswpnwGUzaiNNCmrZ7ydxYmq3rKCkUaY5rRK2LhdGzAmwLmGoq7zeAGAfgPDWm7X54vC",
  "key4": "5rBT7xFgVW9SCre17peCnhcPPhRy9ndVqcPmwJWXyLRRvPB3YyEMeeu6K6cDZc7DH2ckdqv2fHBBSw9PiNcmYLS1",
  "key5": "5WPe9dAmUR64Y1HzaiTbLAf6s9Jpa18woC6GorwSFYRETaPS6AucEPZKAuJXSBkS6fcsPc5zf477yuALsd6A6CBG",
  "key6": "4sWeDFZjpgMoEPwxQJXN3boSmHL4F7a8Jek1de6yYWAW8CfHyEojZmSo8VrUp5yfbLbJfYntaE6tmoJ7jXGQEt1m",
  "key7": "3VZNLsqWJoJLcMH4k1Q5B298t6ou5H8ocGGwGLLoYmTnvg74FqWHqw6kbRntdcCwwASqnmMAs43rBmrWU9UmAeFe",
  "key8": "49kWUd3DPsyVaL6sUCm6v9mbF2UMpavr5feBbDo5uoVhztfT7Z5SbwQeFzLFYUAPcPF5e1ndG8Kirk3niwbPuBn8",
  "key9": "zYXtFK6XC9fbYb9Nge1AWSz61HCQbRBE1UvGHJzfHzJ5JeEDBJhip8JcSSa9o1TKUz5H5ZyT3ZQrENf1EoEfs3D",
  "key10": "qLwVNHTPG539Dgs8xqaJjCjYY7LCEnn4PcTAjwW7UaiD2u3Bf5ovxrN4BVSVqMefQrufgTyD442bsAPS1gMAehj",
  "key11": "4v8fkjYft9YjrbTvtuy9789qEv5pcbVg9KMzTLi5KbcyBG9DC3tbAu7hkFdpC5bCLRwhw7Ho7JQBuQEQi6T1cVD4",
  "key12": "39B1RWnVDumKaTEv49TEUQdonpA4pf2CY6WSrEKpzXLmGqNCmTutGGeHDyCFVC7TAz7u9LPiXfERudXjtWssGBNq",
  "key13": "5F1U9rDKtKqsASYdF4J7FfGfbx5HvoLHqSqNkdcn9ghUhuFMWA3gZNjcPTKcNrtmJ5yKbtMcuV1knfR8rmjrP2f4",
  "key14": "4e3tPT3DqAz5rA86HJML2ZzmZDsLygquRfuasq8nVpv5aC871PaJFgpvx67oYMPmBwA77ptyNWgBdVQhKrVw2MgB",
  "key15": "5cpxJNQZS8oQvUmFxoZUPKrxXkSm19z5G3Ud7djYFfgt5rajYXSeQhDt67c96jTxj8xgPer4DnknQro7mWnGxJrH",
  "key16": "3rftc6mjUvXudfgTFXB73nGAuBnKpUYMi4KHVo7nEzTNqsYjksgQ6VkBYfd6Pyb5awd3phMU76JMiXpquJjM4pA5",
  "key17": "3UsiXJTShR8RsxCD8mMtHQH1VaKmrU3hntWkKxV2KEqA7LRXEi1G5HDTjxXc7J6iv7YVvshAntGehT9SdEAGcufY",
  "key18": "zETsFW56Kr1qXL8D4j4rkwcZTJZfwaGJH8i3AbpGw2mWjk64AkoD7FhCPypk5gJRUwszwLi1xxu8Eop1CNWGagJ",
  "key19": "3QqkAtF9DPS5mmpYv68FwtKboa64ExvMR4PjgC8RpcXt8Swp38mJayYT4KWHWwaKu9mW1hnr7oMFBojecMfijVui",
  "key20": "3Kr1dEWnvRdZATN6bopDeMfpZUVXecm2pCvRGY1dSfvv7d6joBB4SJHSeZ7fS4dUUCxFGQ4xAiCaYF8jRiEQbf9K",
  "key21": "4g2KBZWN6ajmwmNAm8rsbf8eKaKYF6gqBoogr8TofZLJgrGbEAy3zoCgJ7va86pBm4DG6VcB6Z8bDH7ReYpWdxNN",
  "key22": "62fZPEQE79Cmq8uVsWbJHRKtmfLKknEFDjk7qRnmhRui4p1uqdJjWxVgyFNcVTsgJUaTQx6tn3xmyymoJmA4x9rZ",
  "key23": "eveYdpErAnMvH58pBKMA9TTsFXQ3puLCgFesjCtYcDuWfoAoKypK2eBx4rv56r97ybx8XukXXgLZgAAYa2Cs2af",
  "key24": "2Ra4YwBxoF3gFrEdkwPSXAxmh7qiEh6Wfa3N7BxLJjrwtgx1fmmhAAy7fU2SGG3PeJHJijZNuDpBexkauAha73hp",
  "key25": "4o4xUzxnCvoFVWuF1wSY8yvo6jfPvyy4NYgUBZ3PfgXgKuFpcmELDztSs2jRvejQ2N1eMBWzQk5SAoj8MSLMVo5M",
  "key26": "45PamhYt32t5Nk3niyssKSJBeZZgLnHBHdLbHPaggJzoYpQFdudrH5yNK44AYxJm6rRD92YrNePk3acdcwUqQUYW",
  "key27": "RtohZrzbCaggLuTfEU15SUZA7MXAF3XqSpwV8AGzyHMAYUPnTmkGASMeHuBmU1trqse5fjhwDS9YuNEKNLZwUWA",
  "key28": "4qJ95TE9wqBSrE532wwtsVrHNvcAoXAyhnWz4wMaYBFrRJMAermreUi9RLwvwt18R7cgWD3FuQJFkPZSLt4FcJ6C",
  "key29": "4H3NnHotnVPtdhTAhgEQKpBdoPgVjbFbSpqf3PZExdcM9532aheAuRdugWkDivksvNteQ3HbQ4nBLXQ6Y7AfChZX",
  "key30": "4AoSDWnvCg9TtRtFQg16ofVbiJCiqnpdk3xMVJ7kqRTSqcdrXPqHBcLc1VKTjtPyQGue5ajH76sYs3iMCp4W4Zi4",
  "key31": "GKp9r4jtD1czgVLmDdNuXskp1cajyEpXSzTdS7fbdcdQJ6FeQg9BYxZVkpwAadtqTVc52yZeDJWNfTFF3WydbA8",
  "key32": "3HvdsctSj7dhPuDkdZ7XcwWRyLfwGXT38wYiXQ3o25kaDHAH4zko7yNXoTZrYko1zJAtZ4mzKLfY3cYhGCGxaboV",
  "key33": "2TAtsp7eRaEMj4KQXAwdF5gPfaLN6u8dRRExYYywc2wkyNpshtsPUcWWTqeek8F6r4hZVAkxs8vef6TXx5uCAc94",
  "key34": "4C2myCj6RtCphsQ8y8TLAxvHtcCTDstnZ5s2G2AtJUssQXwt5chrA8bsK5WFUnAxwexTEUNkv4uWXzx9hfG5Y58M",
  "key35": "2aP9qp1u1rS2bENpmR3Gvp9DVsUvDer5mD5Jzr6NjBretkA5nNcWH5uWVAT1dcYLo1FGDvPtxQdi5QtPVZgqV6mJ",
  "key36": "uuL6VWDgj6SsnYnvtFdV3YFD6MYSMJwJZytZdqyip843bGnW5xY2o8SvbAR6wb4AkWytjMxzxSCbKPMP6iyUcva",
  "key37": "AJvHBSTnj144DexpCqNGT2QRFFgTAs3pvY7GQa2pDzwUw4uDeg8XhGKME21WtmqYTNtkGuHCWxgfvfsp8FS4eay",
  "key38": "2o78AhdXoSoPVfUrFY4Rf9vwRscrW3PhMy9t5vptn14NZMaxjRwGYo4SNpYL1H5J65DbZer954d1cYmVVfWHAVao",
  "key39": "3vF4nEjavABcks8LPbjrfFMnjsQavp5pp4NJsHZBTKDBYnkUSPDJvxbdXsxanoQM7xUZ5HQGYBwSiwP5Mee2NUtw",
  "key40": "2WANErZDftBgKyxvSXww1huYt6ELVNx2H99ZZY7KN2V9ZHPzApWhJMysYNwJjuFTqYZoREhAC4CXhC9Zfnf3sGno"
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
