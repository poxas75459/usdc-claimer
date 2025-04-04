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
    "4utXk4MVJq41XUdqdcTcV4xNVeJJve21ZRuc6nYMprpaBsnqfc5nFyFdryUUa1xHmHs3W29b3Xd67FKr2fcM9S8h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jBDgFtX1MNyjFnWwhnBDFWrk5FKua2YtaRRdy7wRfKq49MCdPTaKaGkhJTKUa1attcL4PKCuXsJXRZycjSQvuxT",
  "key1": "2YHT2ebjaAyo4jSSkwzstqTiqcuSJ4jbwYvhvakjMQbHNt277t6ixaPHpYCQ9utQjWRsmDtjjwbGeEpt6uZLSBMJ",
  "key2": "5YDk8uFny1P9adwRwKuLU6Yqu78KNRU8VWWpQDcRop2Fy9MfwtE38VkrgjEPwsy7SUG2pm4wnrgyUTtkmMkyqMTT",
  "key3": "FzrPLLiqdQ1PubDHrR5CSTCRiyDvsgxhuttJadrFqo74oiPv3mi7ncB1eHNprowqqC7RLrASsDVfqnWu9ZJu71w",
  "key4": "4EzRoow2SzZhBYJ3sxyzcVo7md2AJSjWH2S89iqBjMRBGNCWSRZErHi7SZNmtGUjVxEJT46dS75Y696hxCqp7PXh",
  "key5": "3mZ7FF66NiCuHs8RaK3MYw1TExFefdPFucoG8SE3KpaDpFtgU3hMntUkCU8iubZY6kvuzH1N6xiNt7z3tHX6UtbA",
  "key6": "32WERXHUKuSiezgPeidszvCBi87LFxHak2fYNCNqz2thptXjwxbGXduUB2GbpLin1UPvGNd69zaFXPrqModwbXkY",
  "key7": "4qFMLdsiMKsstTjce4UxC93gM9zf31jxevizP5BUQR9RLoJUnYSiJjud6YEyoBhp7TpdXUq4xo9wWr3YssFJN2Jm",
  "key8": "Edi3kMGrgJWVVrNnAXDNZQdWA7vvDmmvskhKxda26h7GYXn3d75eJBTiTZgWZX7ugXAh2Km3H4QVnw96Kngp67d",
  "key9": "4k7FX12Nr8w7HLF1CxNnJnGJ79BZaHrB4nfskB1CnEJoPyGoHLLFr2TG5YavmbYUnhTLN3avjV9ax8XT8e6qZbvF",
  "key10": "2FVRNaq4iWUMeVXRQQ8ryGMySUHGVmf8YK6KPk1RYXvFC2ZMjsprLTSTGiVPhnphZg5ULiACSofnaR82V5nhw9qn",
  "key11": "2RUSKUkSSNQsADTE2jMu5Zyob6vafZwA2iMB1vUvXZwPw3iCMbtrNxu7V5AbsEBuGeMMa12dmDENcCMQm8ppPBPM",
  "key12": "64ozuRJGoRDL9ZX7XxPye1fs6LxKb31vHXFzHKVTZUPTw5FFf1rdugN2sM13KFB9FkrnroZdUNphqufLFneM9S3M",
  "key13": "4t4cjGTrW1aH4HsmoscVUed5n7oM5dd3TocChJfTidxHT2mv9wNgda3ko73fRYt4DUGaeV8vsR5tenzQaG2iTt2S",
  "key14": "2ZGqjqFH7s7E7DpPt3Xj7tJa7LuBU8P7EcT8hXqeGd99chbN38qi23XiAq2vCytasXG5b7ch3saUMEnHL87WwY3c",
  "key15": "2tPWCNQgRm7HayzBtxDhKFNWZ6HgYcuACcXHKYuE6yNuKmKfJ8RDpmEwpPguE2QUgPtuZiGGC7jEMy6Rhe85E3pF",
  "key16": "5Hr4B4YvbUHQwciZQvxvbJkptLAkJdLnuj8xJVjQEUbqq4WyXLrGXpHCgUHXQW3ezWaUgsKWw9CJMc9m51WQ55ig",
  "key17": "3EJT3cQLY1drUSjgxtHaxxHJbXpV1CxFNSUBjYrq9ZMTJzotDUsSB2RTZxmvGtJHFmS9ceBLE52rot9VhtfMB8QU",
  "key18": "4HCmARGREmRgZNoVgUzd85HpDefEaarTNpRn5sFjg3H3tEhQeaxdAyEgMKDiV19GvS8ehHQh8BefVnM6UqVr6Qw5",
  "key19": "4npXmKNTJf28Vu96chkwkXhfoUyLx6k9mhv7JUg6jipCD2fmsjnKDx6SgGkb9FCfyBzSobPAnDE7hbGY6JhS5J2L",
  "key20": "62z2CGzUXGRs5dQrWCBJfG5PDFUJvAtKMud4n67amZshupbm1pCQ5hf6UyvgpNrFSbteKXKKtDnsWXF9gqYTFLsM",
  "key21": "1fkQPpXQgU67U3mC6hmsMYjy2HA9PtBZeTybDmN59UEWo8iMjAEfRktgzJrd9oUaiuhWu6os4g8Qdb7Yfh68ifc",
  "key22": "2nZRSsPBPXDMeFwcaQEKNmHAQadUpmubAMyLyMJCHzf6TUrJDv9abRGj9nvBXg63Eck9aaeJu7wbAo7PFH26auM8",
  "key23": "3jLWp9zBctwCKbvwCk8eG7nthxGPyVK7pyBsfWFDnAAXCURy1CxxNLT3qe5fNk3gNPQkpaGNz1Muov97wgpSyhaD",
  "key24": "3YxCdJUmpYWN5tFzP9TtN7j8MZi94uv74Tw1ushh9BVL6P3Kw6AJUS9uRV6StgnjegBYZihK2KzRoSTnttZuERxe",
  "key25": "4X6o8R2ZXH1aMzDF63Uht2Yeqk7FVUSN3NQN2X7WmVV2w5Mjp1qTAzGWuQyEMSVxHQNAZKLtqxvXxYen3BGMGU7r",
  "key26": "2KUbfZeB46BTkWcPSAtQLdpnu9FHe8nCGpeZ1wbQ1X53xkhLL78tXXChiBk6mecSuMTwXAZdKtTGGR3qxuFvUPXW",
  "key27": "bVA5Ln37gFch4BfLDzosRG4u1QuPhSU3qpBK5VsJH4KHyqTzVV1JtVUqP3mXKmCZwgcBTTCwAmr4FkuWWwHnzqQ",
  "key28": "2QMgqSd8yknHFGNjeXBdQqg3jjAY3Z9zCbqnjp15Pow6vkD1X7a6Vsni4tAwerv1ZWo3kMWd6McYvV4EZnV1WpJ8",
  "key29": "3EpdQG2efpcipTx4o1hBVFdTTjuq6cpYWfHHRS3fYchr62ym5pgX1sGECnV5rRXy6ZsDnfP5Y9VKFTzAuhiaoxK5",
  "key30": "JXV17FscdS8Xm7CjWopDNUbk4E9GKQhUAJcy7SYSi6ot4nTPstPciLRDjXdcyvUZpVMD3Fe7aRkjPssdJVEGEYM",
  "key31": "4GKormHey1kmrRVLGwfDdrQfDh2Kx7cLJmTWM5bHBBkPtxUtJK4LuxD1GSM6LJksp2GM83Uza5ox27EGj8LEsCTJ",
  "key32": "4DDqf8t2tgYpxWwQZ8bySMyG6aERDwBDNRD59euYj3MKMpLEJS9Nnub972shPsjwwBogYagcZdbd4ScsKqFN33mR",
  "key33": "4cvAME14t7dHP6kc2VD9aBvnMNPbrrEfhfNtWzzmdYLtArahJyqANdmUGRcbTwg9UHqwN6BVYQi67nf7JdpuDuou",
  "key34": "3vhWmx7j1XTbmhe9bSVBViPUEPHMSu35HkEGQYZdfawvSfF68AVphdYfrSxfuzyRY9ry8Ue9Kcvw8rNVbWCKEY9f",
  "key35": "3KQRLmN2WzLyiUsQbwTJzoPPXJRrvebBvnrk46dG7T7enHNHa7P9nV7B5uyrbvPZSH4ZRC268naWEfi9M2qu2CAJ",
  "key36": "2GKonqbKATNzNyNoRdpe543JZh4mbfXmN1LoF1ZvYYdtR5U5wEpcgfcVC63eLJP7WhqwJpNbKiF7AWe4RCHfYYzS",
  "key37": "2yfuCLm7G1WCDzHKDnEnDng1LtFeA4KjUADAboei8rkvUSpxqF9ZiGZEb1fkvz13VLduUnVAJKs6ghUwVMtToCSB",
  "key38": "oPaVpp3w4WycXeBSGLNYRcv93hG2BK6nM7uQgUTc42gnBxPyyFWhvGUPkM4ZhgqbfWByC3LDSn46nCfEXiCKis1",
  "key39": "RnQmqZPajUPjdMdmwnD1mV3v4GquQvoQghVZYDptRkY7zaxsZajGa6HDiGGySkHe8eedWxpp8MaZ8APZmsb9eKt",
  "key40": "3jMRTaRjxY8mrMk1dutoCGr8q79wagEt66Mj5jRPX3k22Ux8mJiPTLtK3CMFBujyPpZZV6Bz66yeWa3cvGRspKGb",
  "key41": "3f1UUyDWhZSqEpKhMuL5qPoLyWxWRdXXCyaQPUPofGjMFCtQE8gfhBANH3fkKCDpnnwSECPfb6dZkgLj2cSmuziX",
  "key42": "5UDdf7ed4iFdaXxobwtphh5H9e7onCPmqxpV78XYL8FbKBacfpDeMMneuSn49RGqnGibWk4WzWmtzFANu7QxpYEb",
  "key43": "433cb5D7H9cYuJx7aa4Lt2pUoxdHtESopM2cQ3Ntix7nHdew5FdyAwMLNAm9NTovzuUSm81cmp5VLeRQ5C9QZZtE",
  "key44": "2GxVf8JPg34BSaEWHwab7wxp1SWkmBXYqs3Ee4mQ8EztYzNiou5FRn74MVsgv6pWPo3ckBRQJ38kLD7TWQjr9PJB",
  "key45": "2DMYs7FbaHF5eMMECzjoAcmBU9yaBvEhE7cP91FtQWDaJKRGhPVedUFjdP3n6zMLxRFyDu4pfmbWFQCvnsDT6CHi",
  "key46": "2efxL4C8eNXDoDghwUGccjTuXB8tCvGwg1JCQkfgYKViBUY3CNknK7TCx4ZZe3kbqgYKCp4sqoKu3QgzLzH2kojM",
  "key47": "9tyx7R6DRMmtqvtCSRybaLDEbDZQ1D4HWjcQBc89ePhbUyrzqBeagXMzZp8RXfspWBCT5Jjx9UtYbsHKrUx1SJU",
  "key48": "5D8UMa7fAWFe3dwWnixe2b11Xw5reFR3xP6EzwFje7EGueJJi2SzWyrr3UY512X8pGoUBkeHUKu4fWjU1d9iV5Gt"
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
