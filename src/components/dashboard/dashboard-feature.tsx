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
    "26GyrvgYhy3chCdPe17zzhCHB5KNoqeqGLffMChvZPkZSuHXXJ4f2DWki6FgCmnA3FyE4rXVZHFaNQ77Mo67AauP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LNV3b86hVG58EqJwQkNWZYXDjfYvEvtEWK7Sk1UtgzUwaWUg1TYMcXAoskLNrzoNejCtvUepGP8sE7ZnzyRckTA",
  "key1": "YcwArX1X8d99mHaPdSruguUGKBD4XsLmv421EynLWRGEHPqCuMNWEPcKSqGC2HRgvCkxdozC5xToLDqMmW5oN1H",
  "key2": "WVjBzCKyfts7r4WH9a6TxvhsrfhJQDWeHyavM8vmr1d6VDuZywkpZVUsGqAchhQWsXUR7ztY8f2o3Q92zmq5rPf",
  "key3": "21BtWQZ7g3w5k1NTPwAtj79zqT9bwtiVp213yQRAyomoLQ6ZFmzaJULPFaEe6mKBYRDbVbFMWhDZreqM3KQ9hCP4",
  "key4": "2QJ71pfzSWspSxrYs4g4bg3pjdtvyzdAevouu4mu7LNrwrvQduPXhAwFQNC9y2m2rmfjqAHJjnULoRfZCm4miKeD",
  "key5": "4BU3hJgrGxNTP4JZChbg7D8cneZHpWBZdLVeGeU3T9kad2Ty4oHUJ68cjQLZs5Yg73FhE7c8bq1vNtbFzc6wnQoz",
  "key6": "4VeK5XHxB8mcykWpEt6pPsB4tWBF8WGoZ9fy3GJv5cL2mVQMw9GjRCZUQTkt1YUz6TyimWL1U42uZiqasUY6sVKj",
  "key7": "39txDN7pRWsjH8JbyBaGAwYszPy5wASsVi1YzgB5sgArhro8A88yyp8t88X3GNZhz55dV5Ud6Ayx3QLS3ShRyYTM",
  "key8": "4KkU9X7rq1221qT7Hk41opErDXUskVVA19ramAL15yaR5HjcAthManh8WWcKtQ5aUCXrvPjhF8E4gWhEfBCVHdiM",
  "key9": "5eKGAz1PBDD5ZMUR1wW4eLRkSPcYbDQL1urtVpphbaMtgmfaFT4ApZK18owyoobHrENEfFXRTGAfuVq6dmnJMWXG",
  "key10": "NAzdnJ26dawNE2inPwAnrP3vtWuSzrh4gNStutMZwenPRdnefB2gXC2FDXv6HQFiuU6bpDtPTeTxA2xjc8Szqks",
  "key11": "WgL33rWfDLMDgi8JeCqVrsc3aLLuDozGREnL7WUYtmdxGkcNa9Fq7oSqA397yQXCcAVSQRSQC71bZCLyZHUjwG6",
  "key12": "24thpT7ZpcqkNUjxVkcfdqikreLJc4FdxF38kvm3gCwsjFimCZKGFdgefRpcT5wCx39V1LMN2yfi3Ym4A1nHCUHv",
  "key13": "2CCnx6jCR7vZ166Fx6spWa41eN6KQCqb5kzCD98nwtAuHtGZKWhpccCX4a4xynFMYuNjXRZ38Y5zdnuGefbhi4R",
  "key14": "3YGhK5aRRjrPE1M9MgDkUVD62NNd2aYQmqzMqBkB79ZVyECX48aBEigmRDMvZnxZjZzcVjizgTmaAEiU3pxDR598",
  "key15": "5NrbWQvc8eAxf17yZMXjfWdKaVtuAdbFf3founAqkpoeoUZBRm5QapDCGcY99KBBM5afV9riietNPtS727BrsB6D",
  "key16": "4rAJQzH4M6Q2HGFt5RCcBXnRMuniaFhy7dpn5qAyL8AXko9rEyzfHVxvVyTDRi6a85rWqc4ndb4aVLHng6JNGddV",
  "key17": "4mrKHXsVCTffjNSqmPihghVxMeakkwBcsk4q4Po6fRc7zN69L6cmH8L6puAJ3yKPNfWALgbbgw2BTvsYdcibxMMi",
  "key18": "4vzk9a3gWJt2yFG6GBBSj2zsddrqCPQEHpPnkF48V1QYhZ8ro9UQqrfMHtxD3TjAVFxqy1gQSi2Dk4AMTK7zrgyx",
  "key19": "a3bc39hZJiV98FJdHZYrDJEFGh9sKj3qRSEUpavu1TpQ3uq4T6cXQcMWCgeRbv2jN5h7zxGM5mXavcPFkKBG5sP",
  "key20": "mKJ4zn1L2rD3qQYtNhFmKBpj1Ph7upS7qqVfsAyGPkGGzUtNvJaNWtyKXynUx94JyEhuhoX9mztb2RLYdFKTJ31",
  "key21": "2JSxSwShbHVFagAhWdiREWhvDes18Wse88qdrvuGWGVY2E8FgHUBGpj65xPMi6562augpZuLmngTdrKK5LLU7Csu",
  "key22": "2qbNiVmAoKcGepbcnwFD2W2MytUZZQxHcLLSc1FDcHcWTwgA5RhUjTQJgCs9Q9j4dvuvF6mfW6EiuKiFwHjsn3a5",
  "key23": "2ehh1rEHMWXxdVWgs89pSF4VNDCmF1aMDeEk59evvWgJ7LtZzAGYAGEMQBJvFwJEQYNKeqHgvrqaritVmhYcdyLs",
  "key24": "3ZDrZvVSzJR4UTHwxNRAvPQUqCw2z6vqmJHRx8E98XkE7o7FUYhgHwHDjc7p1UeNAdbBoXoSAqFm1EtG68xana7E",
  "key25": "49eWcGbuQfnrrb6BwA9m6qGNrTRGzYPiTzkPBWkStiaa7EYw89NrtcH2g2sWgTv4soC16aHo2VaGoGUwiHNx5K5g",
  "key26": "3VPHCFxffB6ktjBUqLt5wwEY4n4hisojbAFrz8gZaU1WgkBjsv2x9EXQwTgrhz7kay4Y4zZEfHNfBVxDh1bBUXWK",
  "key27": "32NiHvmRhEe9MVR6soBFNy5wxiDNpmrVD4fJJZtQokFzmpA7TSpH3BZaDnVTTqXgcGVyKiUD57pAJoY56EG87FMs",
  "key28": "Xs5reYzuJWqkfu6XkLowtGheWqYuffRSLTjbnJuwYM9s8KRYdpjcminevoTMGk5S3XW8fYs7f3RYPZ4Ew7ecvHK",
  "key29": "3iJ2VF2oqSBwikzJ6GGN7QzK3sSE1CU7YWSiMBSxwDmajR7KVDZaUKwtU7A5cRcuwKxXooBM6QfoRxVm1pXfmXB4",
  "key30": "38FTTuBBP42p2LQdq47BamxayP6gsBTfoySHXo4VBizDDjPAiPzGtNr992rX299V2RPGpQk1FJBGQXbdLv2i9Ac3",
  "key31": "4zWWQ6EpbUH5tBCouatvx3Yg9XmDsY5PGt3oQ6jdhKJHPAHEEASvj5gJepyyLvBKcTia2JY2y5hMA8Emmknkqd5W",
  "key32": "2u3reUgNDxxj2hvQT1SzAY5SrvqhEfKEDxX15PmXbD3aBF18UuTSvtcebkAuDAP47JpfnoFihFqVMwzgk89mei6v",
  "key33": "2SqRoWjbF3Qs1vRQjLaAtVFzSNfNfcFjrB164hpNA9yiyeSV3gScaRrxkyXK42yH5cwjedL7fX2ndcpJDNMKv5Y2",
  "key34": "4yqVT7fZ1Yoj7T87aHwxwNXMtWhJ4HA7yEV5YvfE9jx4BPmdppSXpJvrkWDPiVH5VQ1o36WpMdsCiyWcicyq2NTH",
  "key35": "2LDjHrzmfABdnLM4fgTCSpQ5zcvLmEiAVrNcTcivaoQqb6dLWYckaTegB7HQ9hQDMdzQQqkAA2R3r3sbRRj2Lw4A",
  "key36": "3MCEaod1YkBeZWiCABuCWX1qaSQYabLcdeKjah8KnJCMMJKUCnwRAM7MvK6b1btyfKr9RqVX1GMz1Quy6JdGZF9Q",
  "key37": "41SSRoQX4VwigVv6HG1JuUfvtAY8DH7HP4j2vbUBXLf6sbbqbKFfodQgSwziHnRm3ezjGSMiB7E5vcpqCtovbcBf",
  "key38": "4WKRsae1x4UjWZXtY61BqMcj44wDTz2rNeApMxqmu1viP89eGikeXCeAT5XhkCRENRmaShnqEv4ZDXvfH8oMBZJo",
  "key39": "RuozLs6diTKLwfhFz782TMskbj8Hf1uTZisaAwo26y99R1E7usm2gTXoAWz1U24yVo7KrnKEXXPVcfys8vQBvkb",
  "key40": "2BU2Q9avmQwJkuhgZpj2LUu32faHCFr1hhHcYMUJyqJBWpiMtCMc3X1aEvLMU7Cd45VLNuSYMFcxmaJfRw2q6v3j",
  "key41": "2WWfXg3DCtGUkNSEBeaBga7H6tPnJB19oEddu8dmgBCmbmy1D6hxzBMxew79NZhksEooKRcvGNY3WEPJckLCpU9J",
  "key42": "XTisJfzGUaXh3Sjg1jwTLMSpsUshMeZsrQJTVgrjmPtziKXnksDuywUPYdeeK9eoh97haUvHtRh3KbEdHjqyhwV",
  "key43": "4ESHQyfbS75BfwaZCVwefcJPWHnRG9XxNfDPJXf53kLAHHtJNxYKuidgBpWfqDDik52vm6F8QvoN8CNuRL2BdRA4",
  "key44": "4sShqSQh9No163LZYSbVndDe7JyjMfHUykXphP2KCcEGQ5z7YXCg178mRJVU9DXEFKe7AaEzsc3yiAvZTMBL7Q5F",
  "key45": "2CHdrsQCx6EbDm2yfK7GTRDwu3AdSXRQT1RaDWuNraF9iy5Cc4HKXqsg6U4EYXztZZpxrniuMMXzP2mnEyZzfCzL",
  "key46": "4zLwKSDZSG9iGr2a12XEYohQpLWmQqb5ZETe5aQJG9kQMyst54omy17LWSeN9GG38EsHGUF2Bnaa2B55DyMABy1R",
  "key47": "5eVH8nHbfr2dzcyzYekK6wA9UDmk66nA9jzadYFfb22NUdhgjNLd8nqyNhbGusFsHhWeZwDnKEw7hW6GcUAik7sB",
  "key48": "4XZ87uX1ywbxwGq5Fq1myxDNBwYVWcmy23RWkZniGCgpR3VnXwu8iw6tXYuGB5XpVheHYf5hzEcQnryQBKN7kTsJ"
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
