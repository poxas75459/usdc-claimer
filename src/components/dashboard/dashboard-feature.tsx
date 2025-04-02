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
    "5WjnvtPX2MJkiK6JKgN7fmWmJs5HdE5RAJVfcWGQT1BfzJm6aSvcMXersbrus6qMvRVJuKdX3tNbtnSQ6mAhCALQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q9TzThbvgvkuoA4cC6QSK3XcSyeowyRK3drHURzud1GiaCzYyMx4LCGfYzxpNBuHH2mbBHJzi9dWXgJfMRhiVXJ",
  "key1": "29BPu7EoBZpaH6pSNZ832i5hE1BrucPNEwqKJYMAfyXF4ygdrrBmHzQXhVitLTUFprnqCawE4Cx9i5oUJzcUMPUL",
  "key2": "4JeKxzKwxVGDw1rBDHJBooZRUrEQuY2xN5wLRbrNxyUUYHD4x3QzNSYLNFPsDgPaNsKMc3JWv51mSpLWq9aS7567",
  "key3": "5LXE48tSECwqz1dPPBQNMbnT9HJzPTLSvP3uZ5GvjzYmACLfPM5MEzLwUCc6UAiBUPsSUgoot19Exc6wtFvt13bZ",
  "key4": "3zimyfpcmRAGdZ7ZCJ2zmnLqDA1DfgQDGqc2wRHKSWEhX7iTUx1fERYhfymmVysQMnhTrN17vUbbwZgeSrPaUaTh",
  "key5": "51nLYomhyEGkNXtLgtTs2ffjMtoWvumv6V6YBGYADH3jMzBA6i3nae19AJaDLev5wdh2HUh1NBWHoW3GRK6bAob2",
  "key6": "4PmMh5JHQWJtH4BbXQss5uq4dU94XiGPdZ3cfHPVAPsjNodcx9kXQKDzwEBj5YopsZM9yNy2y8m77EHggzoo5TQK",
  "key7": "3o8bm8tMcv3cDo3iiHQGRoAsJpkWMwDeg6f6AWJn9i6eioxAr4EjF13jFh4APYczcDqAuzCb4vGpAvVkExmXTjXK",
  "key8": "64SNnnsDyEC7WNwyyRHGXN7d5Hme283wDt1W7scCMkztBWKQ3aywEG7PV2hu441QNXmFqiBzvSQ1s1PTpmHUgUPE",
  "key9": "u814XjM5RQACYcocJRFAmEUREgQJUTRYv7xcrNYk7rAMGun1ugejtoJQosJaFFBdpp4uKgfBJWTPpkBHthzGJbb",
  "key10": "2GMGsTXxXPRkCxZVcLufnV8LCaAAS8jfFCHY9RJR5baTDtSWTUy23fW3tnRkmDPPGJD4dmLfzhdn6nnX92oYHRph",
  "key11": "2CFkrspepPDxRWZk56RmXBfxErw5gwUnfoGAAWyHE3DbwhZhaekKTB57VQkFs4y1SH5Ld6ShAeqmNH7sQWVKbMzh",
  "key12": "5VdvYq7F98YYWdateEw35Ya2wzqMbThJVURiH1ybjA4msraSpBQezCVEBhbnBAXAHJhV8FK6HhhBFhQRicFfPCda",
  "key13": "4b7rGdEEbazDWRdx3X4j53SZq72hNVG4Pjw3pTbiWy2VZjUszE83uHubScgD4hgkHyJXUi88QnkXZT97kq4sQg4P",
  "key14": "2MRJk6uUef6HzpzTs1BsXsSvBDmcpCYsvUVuSAxP7RNnJKuA7sNTid6zVSAk6Apfn9dc5Zo6d7iB4sDqKShuAUEF",
  "key15": "3sSGpySaXTMjjXihz9NxJfe2borjFNEod53zETW5UWcbFEKVQZomzoHLCHggGUw57y5r9URSBBFy98AHuLzauVrQ",
  "key16": "3CjpJrPSxajG4ujPLDV1YZNscqdnxJ2SKbTv1Q32Fb5LEVU45qAkUpkE59kanbHYxJtF6XGJbjinKAieMQPRUVr1",
  "key17": "2uF4Xay7NhJMpjSbaPGnhY2ZoXcCFqsCgsT9KrNxqFU7HZuJoKt77iDugp2TPfkw3CbFEFmJtDFn8AUG8yrPj4uV",
  "key18": "2TW3ZmvrVbEaPXYxirSWYrsydm8pYQg5Aq1W64wvvqudDnW4DvX4tfrpZwq6yqKtoTttHY1LdeycNwaXcUAFwR3B",
  "key19": "3f6kNuDxHTFR6bb4pc2CZsBWcpCZT7srgZE3UHVKKoWVeQwL4HwzvmHu5grthX6mdiW38ZHUzNhGkWpjMiKUjJBa",
  "key20": "2jyeMtihWikPW5qp53BHCcMr6YiWVabZTeWeSbbzDGgCVGZ6LJrWxdFLu2HJhyJZ3WPB7oD2T71x6Xce28WHDhVa",
  "key21": "2EvVK2U2DwCzME5jGPiaCSEsezLeZ5Fs6mHJX8AuQqHteMAamXJdqGhEnQW9eNQdPkWf7Gq6FZfaLXKLn1uRvRK2",
  "key22": "en4PNG1JpvkLBJhLQAPdvotYuWfivYAGQ6qz6QLGDqZUUBLN9yTcdcq2f8BizeAzMTNtErvErSa1rhiapfpJrm1",
  "key23": "3mcUcYnrF5F1TKnBmt7aDMujFkMdRrNVdzBKE6L8JJk9WX9nZXNVUhKdkDx3dDg7ytrY48HCRZ2gexcwrH5X8tMq",
  "key24": "2cMDxZi7aUh7vcof3VwmWfDeYQus3WfgPMtBcke8QZJeTC3kkhZjVcDmsm87xx4VGDDUPSzqiFdruia1jaKWSKye",
  "key25": "379oqvaBp6Mfk9thoQr8WQqXPQ3nzFxnQNfjTno3CAqB5tFCyx1xULZEQy63hFJ34afrryZtMhCg3EqQpX66h5pg",
  "key26": "3ni8CYM74cxzUpsuwNU74937WUhyPSUw7h5iMnm5aSxgvoAzD8GNTe4tKn3PW9uVvodFEvQYHkLxGd91i7FnP4b6",
  "key27": "5pTLyGhnMv118QhV1wnY4LvTW48z7MiEs9GNeLQUbGzasC2zi9mgerHhGnWN7Ds2FQPuWXb1uey1vrBJr3mG3vBv",
  "key28": "2Ujfw3HsyCTiUFo8END5CKtb18f2hr7wU7k6GQBcJ48qfcLbkw9rzhyPJUfnj6UzbMcoU4WvEfiJmtfFx8h5hGj5",
  "key29": "2Q1Wc85eoMhBt5wQ5MdeWxVNTycr1A5zgGaoew7unhBc1ckSpQHHMyV2HLAJdXaowVroqicEwUgCTLAk2W48Ybkg",
  "key30": "5cCDFAQDkux1noXKNAudjCdP9DsYAPjBCVZJKdiDcjse3BDMnTBd5xgcYRB273PcbGeFz5TwKkGbkh7YWY3XmJjY",
  "key31": "29G18Y6vCHY6ct3huZnoqKUUm413ADBMD4zjk4tdFtRszJYw2NzEu6hzmyp7iUcYpvgBvUW83shNXx4R7cFvzpJy",
  "key32": "5vFWa7N299P3vjEANghPYzctdbNVYCh3bn75csWA1GHWqL9XDamDnDPtbQSaSrngN2rPkZA8duKsrirhksGxHqyH",
  "key33": "2QtbY1ekiNRRabdwvLVTtDxLMQboru4CGdRHgkzDvcv2t3rnS3TMMa5f1rRjia93616TPA9yY7PTUKTzWTG1qt7h",
  "key34": "2s3s3R5FdJb5rPe4pAwnWQkZKUwBNnxiyPzhqKEBhAT1T9LtocsjCXv4GsxRVS4hSM565RtH5Ynh9Q2gfYNEQ3XY",
  "key35": "47k9B5do3yAnGdtFWgMbvAW5xkkC1wjqPAvP2BBdEfbxHmEWXjpFXB7FHEmk55ArN5SpfVUmz18C8HeW25Z9pZUF",
  "key36": "2rTeDrp6bMZumh3DMi98L6Atf3Rx7XT9McPjmanUhGc5PUMF9CJyAqTyQ1DpNc4RroQayuyC5QhjKJGfk3Uhxcrm",
  "key37": "5BTTuGSPEFyfVipaMjKq8DpTVvue9YmsaJjpZ4h5TLUZHE1Hh452oS7iaBnTsangGWSNJEkC5LfVEk6P7orzBk5f",
  "key38": "57RwvVg8VyYdupxZHuLm9h9iZK4MSENxHWSve9D57xjgR55BmgfwyKSLQCx9pGSMa8PtoML6qaAgwUYDvpqYJLJy",
  "key39": "5CDXQW3SHMG2FZzdLb6qFVtGEpWWarMkJLiDxvvrWb3aF2d3bGNwFK67a9brh7qHMmFnK5WyhtVdBC7tAy1pZT7D",
  "key40": "2NztVMcMGt2PKstgRVuAHTe5F1AVmEzwp1K2htRhLxiPndcqJUQXDKtebGUDrYdTrzfTHYMMAfFbcwt6mQsQ8cvU",
  "key41": "2GFX7mpZWXVWzpnsxQWk4UtbBw6hhborw8oDd8kzuxG9CQVv36wk9zUfLziwUQebXB6kWJN4BojyfvG4QP5EXfR7",
  "key42": "4NvtYgpHFv1zaJPwiMEdg3L78zpfWgtLAbAWsvjSRoxEQFHsUL8npWLHMsdt7ZF5PWmhisJ2tiTUPuFFuGfG5EXr",
  "key43": "31LjcXC7CkzUWwPgeV3Ct9746P7aFs14eLaYEzahzaorzKX18DEFpuH3ZLHjQhESv3WuNTTeABxNmd6pwipvt1gU",
  "key44": "2EcYArfiQVfLdZnp1HJk1E3rCUmicHLYFBWEWaBPR32fYXMtLUSxS89B9HLS33qLoymAu481biTCJCod2aYkPGHV",
  "key45": "3pCCNtnV5DAhBSXWesVMHNHhx38pTHNvNfD6uaY5yKk74nNteba3vncheFvJtvZQY4oTToA4a3H4991XvwLmF384"
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
