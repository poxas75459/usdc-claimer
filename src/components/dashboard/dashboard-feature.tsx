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
    "eBpVXa2RykA6K6FfvA4KbaKyuiYSYVrSYeKr4QqXBfUQehKYeMHYqNctNd7fw8XJW32oPAEGYbq1MEbCK6MmzRW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WDepUk5qPJFoGuPfUh9zcfhMGnmkdLeDbCGQX8isBGdedHbu7MM5rmmWebxrmiHxiq48YTAMXbjheYT8Fjcy8hj",
  "key1": "2eKDKR5WkkLVgg5teHnL2U1yPNsYNNPCvgVsXDYPcJUHaSeRZT7y6SyJufW7KEDaYtUzPiQQcZTQBfHwsYUC3EhT",
  "key2": "4kPtjonK1JMuoTxtejRGo9L5Z4sVC26SWvcLTz6xwBaJ5P2futbNUzbDxzKesDJxPhdJxnriTQ2837Dn9Dwtkqh2",
  "key3": "kahUTwH3KFbTovTvMRvMgX7ytE35TVGW5TbSXN78Z7gCaMGZR4mpVYKJ2wnavg1KQDpQHhZn3VRLck1FLzkLw5x",
  "key4": "5UiDxpn6HSAP3DiGZzHQbpMuK37KMmDms9CkZWaLkGi4aJpDexrqZbHy3wxqfe36jWkTZpzSx3PfVaf511j6pLds",
  "key5": "57Fqdic9Hp9p72XoEHTv9gsw3QboLTHm1cpTwLocvJf41bKQHUYckHABgFbjWYYrLc1hmfZjoYxhAuZwYD7grXBQ",
  "key6": "2adPfqqe5dufLbjD5sMwp5GA6DdcACDJDoKHbWeXkZTPSpbwig3ovbcg3AmSqmHCrhvT3Q6db956m87AgJb5BXg8",
  "key7": "X25Rfw8BNw6ehn7u9SoCG4wFMFRi6Z2UCs9PMgZPds4bp2soHJsczNRXczVqQit6Eg3j8KSQpsJ7mRsvtFcfKnc",
  "key8": "42eXdZqahh82ALkhyUE9UYGWR1jATwn1RAh7Uj4RpM5xURTfpE79HAfHwq51qPtsU79BzBRuRf3rMWXqnw5i4vMz",
  "key9": "43JAKCQFkRyfjbraw5LAuJ4bJKB3HwANHn2bVrUkw5DDDjzDywsE7uGQXEKmRbo6ewdrmiURU7YVcd3Hvs5BEqyZ",
  "key10": "29ngEFhB6L2o5j2ZnSG7a2xXbqTBY8TPvFuAmuFsN2bwmGb8orpZ9D3iMCNQJLkV8sTrAcP2s4PLPHb7JvhxRnPf",
  "key11": "4HZyVosjoYyzwYPvcoFpDGxQVPocumXSDLVYeCMB9bFVSenGCawj8Y87bY6nyppZNDo1AscD3zJrX4VmtMg8qBVJ",
  "key12": "3PuUvvRbwiCZfqUy29H7rryWZZU4xcbTWHNrhGqVsYRSC3DLH515Szp2vmCzpANhFWmXzBZJb6oJWw4ZJ9E4uJyi",
  "key13": "49MEBH34bzSq2oPy25JdHGB6kSUZHZK73p1LRDpDB1NAe9d418tBsTFc3fZdTLoVeP7cFr1uRKX1CCA1a4Q4hfMY",
  "key14": "4wMekNzimoZoTsSfc7eTNSBCokwr2njw1jGAkV7czMqegpBnY5gr7BBqZ4eRcVEdexyv6A1SiuQuZTa6NdQPd5AX",
  "key15": "2Xv1EUfoXceMYYgysDv5CspwyF5kA3J3YX27NPMMLxR5SMnRUgdXWztYGHQquz6G9xv46eJ74NBh7owcHouj9dFg",
  "key16": "2z3qTDtiKxrVBtXioGvmN8p5XtTBaDqWiCkdSDShWrDpyW7jQGprkueBBfmusHtnJbshoH7AjaibPXSdgMrbYa5i",
  "key17": "63h6dx9VEBPW4AsvTkCA5MMP7eNXiEBxuL6WTe5kwgeRK412tdcjK59gxTEstofye5GSPMqLFCgRLJFAcRLRJHYx",
  "key18": "3zvkax5UUiseFWTpEL12HwKucj7ktZ89unFerLfBmadmPoEQKvkLQWtQx65fTGsVKof54z9mRaac9D3fqvMii1Qh",
  "key19": "2FtM59Uy93Q3vfuiWK8anCB2Qjo7yrSSACXdDu1RSZD8A2d14otK2nwfDNLS5Dnbc3C3bofixP4cUMiRVCEjMUxV",
  "key20": "3yPakS72r2iPvws7CqqmveALPdsgJYLHz9yMBfvJpdduB45btxMprZMbqC6Ld4oPKvakZK7N9B22M4HKS7av3s1p",
  "key21": "3P3Cd6hcwisaaecUn2avnWubUhm2WJ4gUd6wwAcNSmLQLFB3aroSrhpkWpbditEVthjQYy6FPBXHwE3PYPgAMycv",
  "key22": "5rCiinfGr1RTLRLLc1mMM247e6t67vWkvMG785tyv7MCLtkmH5E2g7qvd7byAiET2JjX7g5KLDnwbpyDSMGSS5QD",
  "key23": "2VsYL1o31uUQSgcy347DdmQfkevjwZ8CdJA6LHB8kQTAFfbvjuAnmKx2psjx5cXRxk8SsJ3ZyLtJ3zUtVJQC2tSF",
  "key24": "5hzkHPZn9eHGseTmuuYLNTwUzurMzbTeSVfFoAh2YwrB7dA4D5inCapp8QfXoaovbVM3pzgTS7JgLoVQC8abGYXa",
  "key25": "3XRmGYrj5uXF1En9MUEFFoCgmPgegvvjRHP2QXd8RSuT1tyqyjLr9eWgjFNzjLH98EX4VJeuDVxGFXtg9AaCbiVN",
  "key26": "5dWv4UE8rboNKfrrNHF6nSZCQLtgZJi35RbKiaTtpvmibdiNQRdALKyg6t6Hc1mJCJFSKR1zAF7LG4CfabXPcU4y",
  "key27": "2mC3dryRToo41x1SpJ4yfDuBEVF4WxPmGskX6frHWDpTyR7iMvdeL5CKsF7bdQmEd1rRgPjGn7uQNV8hshKhrbzy",
  "key28": "5K5GW2ZTu5H2VmP2sdoKHKNaKEGo9NSmpm5hTXGQRtqyTSkTZqVbhWCQWd1GWEQ2DUofJ1XFryj8jgvnTga6yUZN",
  "key29": "3mdoXdhxTPExzfVtTfQnPefvziMuMSrRLtWhC7AveT6zckS9PJiQUHUhLp1GuPyn7dAZzjdaXWzjXzqYfyCwNMe8",
  "key30": "5tWDa6gDiR3u4bs2RCgMUwVpJyXvDukhabVgsUckrLEkybGX5TCPbnrNmFybbkAnkvgEwz4ucuZECe69pV92hHD",
  "key31": "WsdiXuf7qJdqo3EH5EfDyuKc5Lo78nBmfY7Nge18Ef1SHtsMUdnPKbVUaRdZf5YcdkqELhJY1Mzxzpb2S5w3wbs",
  "key32": "27hcyAG2tRUaPMCMpo2AuKMJZXC3Ua5y48im4qCfPjCtqnPUn7pHPwjvhKCtRpLoEyD3PESfpphbA16kRZg5a7uE",
  "key33": "s6vi66Jg7ERU2n1RbdBMNyL8yYoudUDd8EJnJeXE3164K3hAxop4m6bZ181PBPXyJ4HLaAgotvMn3wotZ6sKWoi",
  "key34": "3mnaHStpxiu5fXQBNTWviw3bUNbwRe1SPvM4ybud6dLMK6TzFpDzCsqAzBZface2E67GVJ7weenpbqVKSSaLwN8u",
  "key35": "42xGh79rYa3XmD2MC3EqduQ9ksCztbqJZwqWgk8TKAqc6Z755Ax7YXYxKBezssxhoFUExiYPY1x3KATNdAgz3wq7",
  "key36": "5soraxWtDJPZ6s1LZPpjJh9UZ4PYMaEu6FP58hYhitxmXu48diVAoxP77cc5TZ9kLXYykgDnhyRRT7TZ5GiJruP7",
  "key37": "uheLicAN2UdShoRLkUSWiXdGeWcSaWdAcuM1ihE4soGQdBqiNYvHT39ik3GvR8y9UQ8tYWJeZMDrXBSjzKjWcNN",
  "key38": "37nbwWhjR2bqMdhS7LvRD2gRxeGnW1dqr1r5zDihCexvTJ3WBrn9z9S1axEY8wv1EUY46NoCks3qBWdhG8fqU2We",
  "key39": "31y4qKqCrGacWSZ6N1iW1GdfFRZ1bHeEpsQTwgZDLqLzbMXcmVyYZnCKz6m6eBgsywr3Lw4R6UoqPqr6M3GDBovn",
  "key40": "4Dt3UWWDb2bzxZgie3fJw93J9XNUXXKBhoJqLcL429G8RQka3wtZrC7fgLaa5zkWgzzHyzKRAyMhJzFCwxfQntHF",
  "key41": "r9NQkQZAhh4Lc3CcQt2wuZJcH7ghcCRWhCiT2CcyiUNivrURKjPChuTe7NqqgGaRtUfPiMUqiQpyg85MJLVtqEP",
  "key42": "4SQgCyjQUxRTWyJZ5p2vNna9yMBXQRcute3Bc3mtRL4FnvtB91epeFGQ95hT6dT5YF3UhB4xrA2wEjgxE3MbQQZf"
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
