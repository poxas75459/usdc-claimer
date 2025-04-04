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
    "3qziVubs39a4t2Cb6wcY9TBDsCqiyBzjVt1bGjrveS4wgLeWpPibCP2p7PXjLGWFy34MiFTEL8d91SQPb3GTEU3L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3A52CFnt8m2Bm6RGnMq2NFyhbixoPM7eUo9YVxJeufF2id5kTS9pkcrJ7z3Xkz7125LNQkJhiiT5BNfKuZ7g6kB9",
  "key1": "3v8FXyCrBFepAE8m1piet5789UmmPJqg47TRpKhrEgqKQuGVVqPDk6zLwGP12c7rimcfANZVnziRwEhHmku5z3g8",
  "key2": "5uiKhmo5biPQkwkuwEy2QBEbUSu3TWdwNj4RRgQVAmxLKwXcbkSaRu1hMFkAWRBtp5qLABaDXR8voeNEkadPZ7Lh",
  "key3": "2HRHVPtCJCHEo5vzbfoZzuaswcrUx499pQwQfQPApS8W8ScqsdUd56a4aMHux6hrJWsUUqmnrTNjoTQFn5R1Zbmu",
  "key4": "w8czCkgD3VurPdQoV6RfNsy4qs1TSx7BaXuRaGi1eejqG6mWk9LzPKHUv7mNM9WUYC9x8C7u5J9QqwjYDJNGFLQ",
  "key5": "3STN7AfLKCcWBwHbbeyd7yneAoqPCJuUzgKVJyZx5Dh43RvZf7pgwM59guuFmEA7tRVXYdLUtYdeTVLHuNt35y5n",
  "key6": "5P1MGpRR1xGd8kveC1xZHCup95qLUGTLDU93hfcBmbRdA2kHLxTCmzxKo8uVx1gZK6hyLexC8LopzqkjtsnhWfFw",
  "key7": "2BqGAJUmhGHnEzxkipuvoLqgDZpbhUJKLRP4hnrKtmrPhiKREFwrrY37cH6YzeTX4ZbQG8C7SJJeJv5kM8ii5An3",
  "key8": "4Desz6JKf9cYBsMwk8rmMDyEg9uiBHrAi2DbmhDCEUEDSHsTVKiwrqjrhk7pJSFHmpcjB148ZL3G2Sw6J1EKwSpM",
  "key9": "25QxcV6ZnGc6Ny4TLnZ8qvXoSRMzB1k8f9yHCovxuH4hZk4ERKwvSzb7cGUswfnzaUQGyPibHYY5WAzb7KjT4xF6",
  "key10": "3QXQNiHNASHLUQGndLXsRa94KTHvDRCZYEmWqHm2gfKsakHG2FwM3xUrdiqmbDSCFmFoSHAhyJ6TXuF3yNJay5FW",
  "key11": "5219i936hDMidKHuw3owWP44nTVNCTNRmrfdMQNWr9TbK9hp7y9f6beKLsspKz9HqAnRASwEnnCaf8G3phgFnhKm",
  "key12": "2w4DHy1vzEKCoioXgpz6b55WdVsoNC3Xn7pbG2C2rKrhAugCu3Knn3niXYTHBNYkTTa1AyyVT2CisAtarTMRrSmZ",
  "key13": "2Xd9kX1m3fnX9g7GEBw9HNiZtawPFvL1c8seNdRMLekLQ8o3AjisTwCv3ASjKDU3sSU8vAU8BxUzJuNmMAiyCsRX",
  "key14": "4RxUAHndxnSxgYsV1b8XQ7F3HCwJPHSbyT8sJJACiDjsYVGCEiQyqwFoo9ypRYyqSG9DVMeLXWMiPqsnD5yZVDqk",
  "key15": "2xo1eQBG6tZQeZkLZXXEppuuQNGgjnEG43D2wE7HZKBzsPYN8BMyLySAb7g14Q7WaBWyFmENNiKrpp7CVwweYLsw",
  "key16": "624hTLHyfR8wDC8FBnC4NSQfCM7Wuw9JWuPZQGuWQGUQXhDynYNNdkaY6zaUH4qnNzpsizG9rJwRvyRG2eivPHg",
  "key17": "5BggXtB679fTCS42R6wpa7Ubbnu9Zd2sH9wzMAAW3SqAcJCuFN3d8XUEKvkg56vjHWvqwBeZdUG2af7gXqbb72k9",
  "key18": "54JftLsZ2LYMJJVhGitojoAaiXQgoySrqMyuUCtPAytkRy8Ai3cJfoKZbxM7CGJAJgufeLAtSt6r8sgmmcByUvVS",
  "key19": "5Ur5iDQDGU8ycNkuU3LCtPH9mVUwhEJEzyPUrGJjmahewaDN5L2iiWnotcCs3FvN7BZoVfDEYF4EVZSrSmRDj7Uc",
  "key20": "5ZrBoUt6sEiuHCZ7gH2vJy2PeeoTGWabvu3oy66teuDhhz7ta6RNdqoDPnVXfCHytJgVuxJ9vdpc4SwvBmqc5Y6B",
  "key21": "4pMXLuiXtr26HEcVBNh4A8waHSaDD2Q7n9fgKET5AGYK9m9qb2Fon5ewb2ouYvJHe9RRmkJri3yVNP6UXy1inMNq",
  "key22": "2nbSrTnvjWcvD81yaDWaPB5sQVGsnVWnuADXje9YbiNLT9aBMA9JH1pzhKhFLGANvgNzH5tS2QbDQHFLa3eioMdv",
  "key23": "4i7jNiH38ufMyAUCHpmVLU1LLYqNcwPdvxQ1nrbR3mTUYRw4e1KSss7uTn1pw2PHjRp2srmzVQBWz1BAg2qHaap3",
  "key24": "3zrafo6mXZi1RDoKpu6BaMpvAhALdQLTzpJbpTMk5Z9VcvbZW1ZZCL26QWs6wm1TGQW8KPHh1u3LgB8SvFfH9FRv",
  "key25": "28HJLfCk3dCWUsbSfxMFqMNhg7zAD9CUE9Lbx9XHgXEvbzdV9p13adSWbuc42MB8AdcnQNfGY1epLcKtgY269VKv",
  "key26": "54RCDjNGE8hgn82KJut7PUUdq9SYvVNmCpcxCNsghnMMzWeWDqHMEUbUuA974QY8VmGFSMN2o6UPynSEJbJuE5s4",
  "key27": "2HfNotHnzFwBFjgMAEmhaCoBxC9wPiwVb5B5BATt24SeXQBiadG3tJkBDez4urMBM3SNw4hi7b23tQBoP2WJLjbW",
  "key28": "35WrsQxgHn6sXrTTQEnFxXW475tJr8oxJ95a6d6Wf2CX4CSMw6LCKmsQ57p96HgrjLhWng5JuL7haxcCww6Ns7rq",
  "key29": "5aBuSipYA5dgzjxcd6nVinUbu3eDnJqADVhgdxjyUZJxZ5bKGVXXQNP64Fk86hwU4BkSiFrs9qUfJBagZLXZXsVN",
  "key30": "jv4Kjwy8ubQ6gstwAuR3yMApx7k1P853EVwucLYw8y6dP9Qdk2zBAwQJHPQFTfNLRS4Sai1wFxt3njb7HkvQJu8",
  "key31": "4yXWehjHNr3XQ5XTp5kjkg7emzYHzqcVNBWbaVdfy5wt5UzQLEnAKCeMzLpMuAYyYqikqmP8xy9uWmnUNLDqFxmv",
  "key32": "2go27yaFbfTzX1zffsBoV6J4YBxAJFbaB1ZnnRoPreuovSeMQqw3NrZ8kMpnLPZggzrq6zV8gkwWncadmnYyLP14",
  "key33": "2V9Wnf7ehJKxVXHwWmtVy2L1LM2WX9END6iaMAuEWV9Anu988R4Dqa4yMLRxfBoPDGnHN14X7wwYnXszDB6YntgC",
  "key34": "3cDtH3a5nXBPUrcr6P7788Xei3ETUa8Dpq7BnAtfzDSXPzy3X7emgFWdeSfNUsuzgPbH1HHEcAUHNf6yLHhcDdVD",
  "key35": "AXDt8dSS6JWfPZ8Eh2Z1WYipLWycWPNzEKuEsgYAcxwsiSksWnmaXQ9utZzE45Gzrm9oc4TQu3wDye4aiwNCxPP",
  "key36": "2itorPWJnjQphhJKWHsRPAFbwT1ttjEMav7mdsQw3Bnsm8i8FcKT38LVGm77TsXYXZ3CurcE3vYrnDEA2H2iVV8p",
  "key37": "7YJMKTjyQGigogxADApRn4kedTSZ1apbB9swt8LN2PjbGLZjDJJrdRRRHsg3YXXV3yNNSXiNW3FQYPTB4eg5PVo",
  "key38": "2XNG4UDjs2ebuxfFzT7hzwfaEhv4UC8uNYqUimDeTsLP6VK7KVL5tPCe7BBA4pp5xADMGNeqDHuSzwHk1DvpL4X1",
  "key39": "mGg7VWDdgShR4NLHstaArJJzXVheJeB5Py8DXGTiBcEffzWDkpLBTth3euTcj5yCE3GS6YHUSB7r3MgHBXzx1E8",
  "key40": "5Qhueb43UvJcbnN8SNminpnFirBkoEKU5YoG6SBynbxZiD1xqMbrPU3TNrJHd7Qasrgj9PexHRyRgSxqaea2h8dk",
  "key41": "5zpfhzoZ7fgBe5bemo6K3vCB1VKgnGRtXkkoLwGRzLCXGShZMutgH4YMtx3k58vmhWZAoEYXuDr5ci7XbPf3vuuN",
  "key42": "3b3faW1EQDYo4f4EiXdTpPC5QYLmAwWTfpGbiRYyvQKDGGSrMuXYxFqQ9tKSFcojNeYw9c9iXUc5rCCXhrESo5d5",
  "key43": "5rbW3gCTjNc5eKYw8WQCzmJQXkS9i4YWKrNDHRUSPmjvjWRqbnmoL4VnQC6GZZV1uEgXzVU64S6oZxkzuFVTVNei",
  "key44": "2qyXJ477xKzrhE8w6bfRz69ybCVUxpdZpfAYGKPwGgXKFvaHkj9MhmJfVQHpmpDJjrkJ3Zm8Hk73q1VeQDaALYCk",
  "key45": "abpXTh9Ff3M4teC7mdQUoY4q8C9sMdTtSxr9Zs17pH59eGbspwg6pLpx34GjjxmddqtM86eN3KVbkTj6VdXJh3E",
  "key46": "59PgdKHoNbbJuRxuXVcH1Sdkpbh6NHrij8v3BuDHJGBwwstjWknhxJaVsb6K4NJWP3n94V6vfJNHaD3WZFZEJpNj",
  "key47": "43kuwP8zYwoBSgapMcmUDyqziUF2wvEqQjPNUpRUB7nTNkyWNMoZmSw6TehkRs7wdete2Euy9cVpXLNS5PVJkfJT",
  "key48": "615LMr74wBDKTfJLKd34ggpLhyq4NJyHRoRbbxwSGkfXHqMzJNgF5kBVhHsYci4ARRvcoLVPGH69yqyREqKowhi4",
  "key49": "5x9AD3i45oF3xf4HR9UVDKA7pGLDFyjR8qFc5uCfvGvBDNvbyPd1yMiZmGdrsL2oLTDiEGXo1XMLZMwf2AhK74B4"
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
