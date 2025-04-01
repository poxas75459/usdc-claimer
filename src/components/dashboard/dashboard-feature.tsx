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
    "4EnXfXgBzxfktZWR3t5mwUt4yAn5YjoSaMLZqnkgvCvhatrKxvE4qbGpizVb9cJZbiiS1NYZfmzkeZjkKkEQbuQM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vzW7gMwWEGH4wvEdRDQDDj6KsD3sX8uxaiXyFQoUtHUhDuEo2iHt568j3qBkMuFvK8NNFDwNELsugNXDJFLDguX",
  "key1": "31Az3hw5ZZzKNF7eMAhF3VRiHa5dnxnw7i7fse1hdZeu7djXqGafdpXjUTmCyRrAkyGCiMsYrK444RB9KLg64ueG",
  "key2": "5YSW2WEKbVs4QkY6FYYPVj6xc8YpeNfbnd88rSKEwH8XDGEkTr2k2RVdL8DBUEUcNmnwaf3LENApoxsAK12aNitP",
  "key3": "67V5n1w9UGywWZdtFF4brGqXXhKERRAQckvXkghkpiS2jEkizND92DjjzbstYyD74vivSV7vCSb7GCxzVSTZ6knQ",
  "key4": "5dwgXmdGcpEX5frLQCLzwfmVwKEdm2i8mjy54ArdJuaxFgJBHbKrjj5QqyvDADomr1wX8Am8o48XjzgJcTbG6Mx8",
  "key5": "5HtZgYHynBiszUA9te7LCozuJnhP2Ms7no3UPqhuHtcvirsRckvfkSZAudvP53wCfmGe7kkhmy4XiQ9Yj15cVLiB",
  "key6": "4FLXmzbSzec9yN7mb8J5XaAPu2oohSZrrzE8286qtzkphAAhojETdr3jmkbGuNJtnUtPjNWfVTdjuY4jN2nmLU5c",
  "key7": "53YTsQnbfqeLdTR7kaHLWrtGoLZHPc6MUP2n4Lkv6EzqSNisN8wTQnyxEpKvtsY5khhuef9mDVH6DuiYj1wXWk9K",
  "key8": "2KwbWFx9gzRqEwLvfwaAw1F2PD4XNQa1xYdpRgnz6mL7GRKEAfNKhev9DMADh3vG1oFSnFetSksThQt24BmJ12sa",
  "key9": "3DPfzqEaPokYzUzZ4L6KwyqNq8sdEAQ7zjBiuiXHfzGaxZ8JFUGvw6XswKiB88XpuNRP1x4z2MJo25TZMiXDZ8bP",
  "key10": "4tTm1AnaqVuyfihKz3jumeTFxKgn8Dv7RGq3PJ5Dhe52my9jDJFk1Lp8g2xUKiSR77dw27U4d8hsUT8z2TyTTffL",
  "key11": "4fCspbJXKNfCCKwDFG8aPEmpwqaeCNS1Zsk9EUKEDhgC1wNrsSXoyfa3XMvhgZ6x8iSpdXimoRaNmEPnPnHcWjdB",
  "key12": "Xnk2x5LMhwNP1Dfi1fXAApMcSNrgWzWWgGgjRNgSPuFapgmHyGKhkTKMVkYanakcqQbypTY3shrswXRjuwFLFkv",
  "key13": "3ctqTAHVbaSwDc5X15x2tyvQgf3gWyKAnc5RxDiQN1pPk91ebJYbYMTpV8xETbnGb9ZDFhNs7nXkZthd9a1ZU3Xu",
  "key14": "2sHtVPx4YeKv8XtwSepMpZbZLbcWV6uHEQLvH1fP2dwsEDSDRvJXEBAfGubqTBNyB19zh8eAkyVRtLZJLkgzc9BG",
  "key15": "2HUDAh5cmGkQzrezepQ2heTrw1wQkULkSAkdRD99yEUj9iVFGsybFF2N5bJiqTR6hwu25T2RpQHSQ5rXEAi7Zj1D",
  "key16": "32LrbU2izxR9HqMWhAw9YXFhXMwWTmiXeCgVsNb1EtCBFiR2MBqQJzipmxytS3hWstNjWCVKCoj4JYTSYdRVk9Fr",
  "key17": "ZQkMQEtC8RCi9AazaemNt1xwueEkewgVmn3VZcEC21r55AKJquuvZsz498kPAjdXzMMbEyCJ3Fc44cJh1zMysXD",
  "key18": "4kbeEx5KhFpnjxg4KMvdEaNGuzVwYcj9SHxVWoxjYknBUndFb9YEPCVXBiRhm448uU6S6t6VcnYojsFjFnFTeD3k",
  "key19": "4XuEGLJeYaVDdkF562uEXxsEM2ygjz7MM67VP2gf5TwHbnyDVfEjVwq1Y6mp7GYVYaaiHCY9rK1QXXPNpwS6Vyjs",
  "key20": "3ZPQ5ddnEtDhmF5rGNPUn8dkghpz83ZwP2gZMyfd2gzPq9zwK9nmcRYe8quzmuLfaR4K9S1t85cEQ5cEKxQTSAEy",
  "key21": "5oCtNR41uRRM2rFD54xoZiEYGhHk5DTh2gDcZVJsLKda1rnWZU3fxsMm7EWsSEaSaxWG32NRpgeLWPpWcvhJ2ghy",
  "key22": "4zC8QEoDSXBN5s1PYyGuVGXSUXNvFFcEuPwqMo6X6dvjJ6nzHXUychCHbERa6j2z6CWx4kNtsKmuEy9XWJX6t4fM",
  "key23": "3eSo1bw5syP8MUsNBKg62rA56EugmxWz88TWfETEj8CTBTJbSaVcLw7T1i62MawMbpjFa93AD9BVtHBc6VKhw628",
  "key24": "4XWCLZcJQfdpm9E8vZxskZJ7Mn7QkVCbjb93pDR4Kxcv6tyavbYoYSmrVSUv4QM7TVekvCsbi59f5TFX4vn4TXEH",
  "key25": "4mj3B55ykYrXHDm4Uai5oh8VVA2xxtmwNuWftEZqn23HiCqE856p4ZJPAVnD5BFF72hw5Dfde5ubquB8yWuNm47G",
  "key26": "Ko7FHh2D69qT8bnHRRsgnnGWYJnBn3oNjFoTVs3GcxejPNhttGgK9CvUdxr6ooZ7wpVRiBb4xpqUWJ3LFq6AVJQ",
  "key27": "4r4s6VFRLXtJnmzhDMUGLTGiAHHH4YBzf3r3dEGxrDECzdt4VMnyg6SKbvsgww389JWyCqjkVhaf7YZ5QFuFgKYY",
  "key28": "jSVfupLTxnMB5makmYw54gtxF56bg3dLs79K86zCD37cXtCbuPmuGdmRBrxoYMJvBXs9wy5YQKjndKw7TDPnNgZ",
  "key29": "3iZCx9QVVzQN9LTpNUSP7bniqdUGvc42pgt7HqBisgNZvHmMVJwrWNPaZS7ziKgtDcbKqRPocUf2BY1DLcgpueG7",
  "key30": "28uhNMd8baaAAdqsBdyHgA327ur94KtzLijux4HaDSp7NnVbAzQQBEQ7T5ivqjpyA2bPCJVVnmVK5vwbmkMvVzAT",
  "key31": "ERJ8y7Lr6Z33YYVoU39mfq9TpxNVnzL6Smspte1HaYm1xmCwqssKHZnbuqwrdLKBoEftx1pvToB765PiR52biXV",
  "key32": "5YsWg23orxedhKNxjy57r5FBBEEmeQN46wne8Jcmc8df2oQo4LrU9mh9dBegCg6sh7RBB1t9kGHNkUbGBABaZnSK",
  "key33": "45kTSAsiGG9QVWJgy4Pxw2xDiruUx7npsGNr9NfYYdn8piy5hXhdFXy3KTdyPYv6AuhkjgAAfwU5eMEUBhsSPRjh",
  "key34": "2fPGSkmTKMuii1BAtXYBtyvstU8bP47EfnKJAcZjBmPgoahkGKUYEyB5rkRWopiUMRzMkdpqyxNRqWHW63hKawtx",
  "key35": "3UcosmbNcG9yr89EWiCVPyRfdfVRws2GdCKpSVPEKS57YKxk7ciDMbwLH1k9LGJt8tZWC1YyqRudfBKshW7EM73s",
  "key36": "4NnHVVJwe6mrtTwUEBXxFxW9W2t9ULw77EKuWKb64pqq6UmsZk6aQ5YAmeSByZzkMgVqdU29cQERT9WYUUXoZTiC",
  "key37": "5B1rXped6GnF9isAcp5RaduSNWDqP2y2Am8GSjRTHzELCe26YQh4QVS3rhsHmHA3DfUjEXg3EAHs8391mCHsnkq4"
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
