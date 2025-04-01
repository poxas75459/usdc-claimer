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
    "5Bii49itwmksRXDR3CpnL6WuD9ypv7aozJvsjt2r9rTzdhVqkkBuv1EA39WgaL4UywLtAhirYHd9R3diR1CKHZad"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48tkKEE7i8DJbjzW3qg5umwH2y15H4BWVHBFhT2aH1DgzXKEXjD6qwqSBikFWL2MoWGGUeLXCGKdwPE5mWRKEVV8",
  "key1": "3XpuggYxNPpiJnogtps3VXWfRcZy3BaS5jV35jP8mQXPpsutbJRankS68hqBqH62dnfq44Hn2M1AEt7RNDhVsjZa",
  "key2": "2PCMVQdV3RkgTR6o6t3mGFBCVvEuW4CWBpkUBBnJTgkmSJc3Nuh6G8PoonLVjwcBxj4svtAhxGGFrCwDCMSXmF8a",
  "key3": "5te4ZAZkxMHVFw15KaSQ96rAJeD21VJ3voogvZdsGMfweX7Rpd8uxho5qy6YdQ7eJseL1h85fGdPfvSKaAP4geKx",
  "key4": "49CSzEkfK9QYGqgMwjbnHBW8FCwVKLNvwuCb6M1rpZpnrxHizdLNy6v2Y6pTeJRbPCpTGyKCRejt4Aqa4Kdvykat",
  "key5": "4PA71jGcCP9k2GVSdwVGKdonq7zurmTmd8hjsbFvm1nhybuDFoqPuLq8BsAEikg4d3r4bysjPN3yuAHfNGLPoy3w",
  "key6": "45sQZPFZjL2nYiYBvsen1X36YG68GF1YyBBHh6KtKJoipGU7YuZEPrYsb5X67qufuVUwMYvUsMuVqgpcmGNAWjSV",
  "key7": "4eyzoCkVSgrktkzh1A75yMxRWZKzCDmZHCwYPgnJBVaAtpn1oWmxTCP8Yc76f1PEVqgdy43At7FpBBYqxBRqXs7W",
  "key8": "4ozxfiZu3GoC433TQpS7eYAmTt6v99noJEPvqin4c5icVciGvtVdMto8FUP9GUSQqC1pJbY6HzhuheoturHa7t5N",
  "key9": "25hVj3kU5YZZ5YYzKBUUGg8JJubzqNreV4ebU2vpWHqfDV3cbnnqiCkfqdjah4HMxsewfJedJuE3S7PvnJyMTJFg",
  "key10": "2tAAQxkRmKW6hveaPpfrJXZNEferMVdVD4PmGRRyMeMzEV2rSrWwMdGmSiDTaJnifSPCsrdnhwr86CL3sZUNEuHu",
  "key11": "5rSogAystWUycMHmko2dryDHRBMvhvbqUNCHxtMBVnBgG2tAi1SFZydcwGLB18PnNDfpS8AijMAAKf4RDZf4vapA",
  "key12": "2DYggfG1Jfc8rwrnwmLoKor6jHMUGwCZ6CESihP8xf2bsqMerwAQgTpGhA5P9Zw2Jfh2AG7VFsBvNjWdAu8EZ2re",
  "key13": "4icnR6bTSTi5ShhoHt7exFJnWisjVs5YMCpdGDDRr4mpMhsiLCjvRtEBq9PoaGpazcw7PKtjsxXGN9BX4xca72vg",
  "key14": "55BFXhvq4SBmM2x9xnveKKdazfQhZrXAvgCwBBG3bvk1FmgPneP5dXCkGX1k1Gi6cNpisioYkdJK8iNgLC5it3tR",
  "key15": "34MaHe6Ad6LQCyQUFqfKTVnhk51egcneKbhUCnaV81ntWyohj5EDrnfEtTLFjeqNuAuLT6ethfrZmwNzhdgT4Cfd",
  "key16": "5AzSbgtg5boYG5EfRaKAJpUaLDPP6g8ux7yyESNzKhF19HSE91jbWYVVLgD4N7FLNjqmvMp343svjV4ZxsSaHDp2",
  "key17": "rttJRJ89mS4zuLHj6yEseMsyPb52zzJpktYnGosbCsemLZrXhbCGzz5Wuc4TwK6Go8ZsaZakHsuUqgpj31WhnNe",
  "key18": "2MrnzeeVBNqhdVhogQHEzPU1GAAYFrPggrxM5i3XTeXskp2WXpCBzpnvhktW67P6FYm3ZErZh3w5FKYBQCroRLqC",
  "key19": "3vsBNPwXGZuR8wvVRP5EJrofENPdgLx8d6ETBUqo3xV2T8G2UTcesfumhRy6RsYKHiBDuwWJXgXRvDhd2FvcHhvR",
  "key20": "KyBZx25ZuXQQ4ZYwFUnSBeCdxoPq5B6SJAQ8Ls3fHYUnPXgHm1KTWNbkDkjA3AVBDCy7tHjfCVXQQLXrCq626k3",
  "key21": "4ZCw67WCKrZbfAHaf7Q3bLCWKKWfecRNwnidyiEWMkwNKvavYScxGCRUwjtLaf6Dag4nauYzr37gsHmZdnsVZana",
  "key22": "42oUriSfemUwVyy21ahGgaFU4rq7y2ds4iLB2zy7MdTsFUiaiCzGah6EDgXSBYvLhuqRK1MyzUTLVBLgB3oJAnF",
  "key23": "iwV2wHiN5yDnPrMUbcSYJmuYffgCWgsMKB4L1cY5Jtpku8R4gigXuMKXpJgaiw72hD62CLzTzXbERdwJfCcyQPK",
  "key24": "4U8ipf3KrXDto4GemvTZQQnoWND1GVmofnynSEGKCZmCht5VYdfxWcgp7nPCuKLEGqpEJp9ADEHUDMoESM8JWWVX",
  "key25": "2ef1K83cXDjvSZfMDfJZLyxg2ffKY5eTcT3sJWwfcNMX2BYrN1TEm3GzHSzzbbv6nGhuBGC8V7M47d5sEZdw1iy4",
  "key26": "2d7giMHnDrHHwMXyqXjndvbHutQNS7qDX1koLxFiZD17GfV3ebDJtxAQpQCn5j27ZvHtebPY8MQ1xDMi6c2BHThM",
  "key27": "egRetmV6hNfWkzgXU9iimdiM1Hy8ectcJp4M1yo23fLgRwaXfJrJoiWKMJZDjeFZMfTGthA2WTTQ7URR91cy4dc",
  "key28": "4T9GgwdDoXYecN5ozncpLEcN1pdAyUkdDYw1Mi5cmpx8Ldtmnf6qBG2uq1iSK9kp3rPNbmfh41qd9wxLShJv3PzX",
  "key29": "592ycSnCX3nekZtvW9Vf24A3CuQoeDFZtwZLm5QfysK6gZZeEs3pEVVPLS9iySaWoKq3Vo4BAtkpLE89fi93kQgg",
  "key30": "3ytVmdxYAi3Cq3fmzzHXrqmPyZvabQaqwv2VqUR641L6UMry53UBGf8mgBz9seKAtZnXDw2JuxvmyG1KYN1ZzJmD",
  "key31": "5ARw7trJGvrjmX5DuxWkFypVTqBBwZzT3ZffKmg75hCWoP2PoBUt7rCdDqjvwrroFcfGHrpuphWnLBBpWVEAKWJZ",
  "key32": "4PSsQfchnpAGfe5nRmtQmc5Jmhcw82GwYZwLL8s8TEbNtZhiyFyFyu7mgiCDjkUP3zyiuEkvWrdjnMvShaLpf6er",
  "key33": "3uTNcvg2XT5rWQmtq2BB2cLtcPw3i8Vmm24D1CQ64R89QwfXGVaqzazGTSpyuZvKiHva22opA8j5ofNrM1ztuaaY",
  "key34": "5eh2qyZYNbr1JtZsF4HEuktddNXmtWFJuR57zSMFjZK5WRuop9r9cXrV1CdrLf1pqhjKXL6HdHymxwf1EqF7JGFk",
  "key35": "2KYutQ4i8LqrWDQshPzoCALwR4azoL532bFzsm4DjMs5GMAjWzpX9E51trVaJYYm9HoPigUAEnnKSJjHL9GBs26x",
  "key36": "5P9SkfN9WQ9yz9w4UB6GVXLogrsyU3NNkVrbReFyjmPTBAAjTwD1WpeY9xKMRfR33f99vcQDHbomuZq4BJ4greVJ",
  "key37": "58sdeGw8kfeZJdNzszoPRRPJZA3r5AQDHSeRtEaDfJTUuginoc5FtnReEjNM49oNb2yYhPFpdQqgZMoK7sLXLpML",
  "key38": "rJJ5T2tpzYqTPEe2oBkVPm2JCBeLkVjWx48iqX4CcmHKfiUKRcwwXiS8RsY8E6cxdvgjMRcq9CVkAwtbXmwz954",
  "key39": "4wzTXztKSRrfXk6LYTch2ELw4LbTERvYY9yQXfdJ9ibKTR4xr62jn5mBjQe5YnK9oLC7LNFVtA91vg5wjqBb1HX4",
  "key40": "54Vxu2YZUzUmLbu8iqcEmBb3c5DPuPQfK94J39gibL16JhoaDgjht96ULuECNqTivfxj6hrvCxpq1QszWRPnoj6t"
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
