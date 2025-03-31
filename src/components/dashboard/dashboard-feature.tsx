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
    "nvY3347pg1s8XX7vdrxKQUU9MyJkp6nhn2M7arfQhKhAFa4r4KqQUtUPeagQGCn1CFatHaQB1TVyoLYdxDZWgvT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rckQSFTHzjqZTAPjA8EwpYbw5bjgkGYv5HPKHaQLtsXAXTrJQMfhHzQhBScqjpMz5yfiFyF8kysESRq2xJEjfCD",
  "key1": "2XAmoAb1tGbrGYTxENyNZz4nE6QjDAJETdbuYf2tBmAsgQuCkUDtoqLkQxK51BKAnvtRq3PhUS3wZ23Yzkmfvens",
  "key2": "4E1XozX1QuTZydX2BVanupFTdq373hYAw8Jx9p32hmPnCq7gfoePRcuTUiBhSNBw9xXq6rHE8UzvwbyvWT8GBb1T",
  "key3": "5w3Cay2ypkrdeGEofmHEcmUQWEYHJ36nuFV9s6riS8Hkzh8Ym8TrLp9RonB3vGz7QtFM8ECuoSeJKqSRdXURqBEt",
  "key4": "4yfoePUpaJRcCixge9nBu38fajnUS189RGpy2VkxacHMopn77qUm4LXUbVwgGQ1x64Ay8eJX4hazt9RxJVG52ZMr",
  "key5": "3Yw7AdS3uGDXRXm1HmhAsc35UTbwztS1gLzDVSr4MmMA6Godm5tFR9aAWKMPQpx9kNUN74P4qe8XAhVJ4P1Dh3mJ",
  "key6": "tsEEMHD58jXVxebJURxK5ET9uWJuJApPvnyTp2NvL5AXRzE6eoQUiEKcrSeHnkYwdys3fNzLf5wVhyBtw5MPGcJ",
  "key7": "nfJt7rQw2TSm2HrKmahtEsRhb4zEr8UMj5oBAyd5J5iGhuTQMFSA5XeWRPnXoE6gjrdzcNGhRP3TeJe4bgoS3rw",
  "key8": "BeieEk14ePugxtJHWQgYsMy5TWxZEkdY2qC8GBSVornR8uv2ydiMvJtnjpvGNxePm3LY49rMjxTqfPoDCm4cbM6",
  "key9": "k1tL6DKBsb1w62xiAbZr224fHSUGrVTsw3dLGsEK6GDtk8Yy2TftbYPPS3fkuNXKUUUso3RS8cCNYLB9FyErJFe",
  "key10": "5k2h2o38vs9GA9pq7vwrqQgzzUw2fEHzhNsLiDLHU4banzz9tTgxx5xMwFc2jAtyNLXYSac6rCe35rTiQSbcZmuN",
  "key11": "4r2hG2r5nhW2dk46eVtSTifsdXq1G6BJoBjdnpAMq7HpH9qEiMn1DJw9s9tfWmpHdGsdTJi7LR4FN4vXuQzNCch3",
  "key12": "n93p6ryqvPccyJoEsXibap8pFAFYyAHtQffyYWJKBR2ZL7F1QJDc2Kt6u7ustfqWaz4JPnvVSH3hmT8i4cD9gT5",
  "key13": "2FYP1J8nxJpjtm9kjWJiNh5kNr3KTvCWNSsqPD2Wf9NzRz4j1puofhWiRzdm4iRW1AMfzxuy72YMcbbirQyoG8sC",
  "key14": "53v3eS6KLzWm1oYJJ3z4v3B7VuQ2tsu1wEdgrA5rvr9grrdoHX8rUrEhyUqRKcwYkAsv4MsSkydr5ckjtYmQwubF",
  "key15": "gHkvBiwzZCrgtHgfHo51bSxWArztwigZRdF2eBsjNZQfLYEiLpjzzYh21XyV7NsjoYoHRWhUahLAPdyn3PdDnZS",
  "key16": "526wxR8WWUL8afTQ66txmKob6yTBN9dPyR4gqGpBCZiBZy5h2x4ToZ9P4SuMvzUJZLMZRXwLnNmSxWxubWU8cqrE",
  "key17": "4acinHdh4tqMGzmNHyrCS32sNnqQ7XRQ4UJrDrfGu17Kcscua4bQZwn5UJ8pjkESnNDBBPhk4qhA7n66oR8Aiihs",
  "key18": "2vBiv6Y1Z7zTqJmt8W8GwfxTYAMhe5V7iQCNSyWFhPkjT8tx2SumyuoB7pVytpei5MB9uw3RRsvyBKG3uSyksF2",
  "key19": "34CfAM1T3rc5heEVCSqeRn8GB7Cv5amgbDFEpdt6sqQjVAGgjeXvzm6mARigPuCgNHyD6VM2nu2QTusBNJAVowi9",
  "key20": "5UdvZDubfNuaCgor2cRFwmPwVuMPkkLEUCCsLPCwMKqa3u9uXmf8Ujh6mkWQNbNK67QZuutzR4DcpEYwReQ3CePm",
  "key21": "2ngajhYpkWYeZir8FJV77LNmxMHTYtSzkGvkjR4JhsPEWo7PYGXdaVHBAUbGCfyeuKPFhxJcTMJfccMDUdwJiJr4",
  "key22": "2eUS65y2N5RMuhP4bWR1ijxZxzDsV4EUeVuqmjsr8saTBtza9qP2Ri2PidgdYhTXt6GPwiGuKgZ9mbrQPdWcbgkC",
  "key23": "4dfEf2XQD3Jt6zEZW1anViojVx4jqpVhWouL8WiL3enEMn2Wnf1HAGbZtTSj88HB2Lbw9cvF7TynUQT2JipvRyxq",
  "key24": "VCuyNF5GdZh1MNDeouzDwyLR8YjMF8irvEPmHbZhqN54X1rhsu9eqUTMKLqAt1yeYA4sxVKqpHSnjSUwh83BvMP",
  "key25": "5uW81QhaTuozpYvPC2gCe3g32edTySPBawVCgpCNVPjf62mRXnVfA7LF1MBDMKKWyRqWhb3BbLRMe3GECyaiwb8a",
  "key26": "125gemJDfDvFHZD9bPMGWHVVi4zc49R78cD7UJi1ZCCBeoHqpujTPMzkcMN9gADj4io2J62egLuVWhX9gBWtDKq9",
  "key27": "4JQn7o48rCy2ug4rLgrM47tUkp2FDmweaHs1mURCmFSuUbiUrrtqtdnXhHPo4D4gZCcjcAdbsGNUjjWVD4FoGL4h",
  "key28": "23AC2HhL5oB5fBhkqo5mEZxiXPzKcYV5oq9gmQsuim3Pi6NtCfQEZtSMJYq3Kd4fWjWrJoAJfR2C6qCQQ53DokP1",
  "key29": "2sefET8NsMxcLmhqTxEdSjg3T1CTYCHyXjzyWvfeQ62LRAoE3DXu4rojJPMwLcqRaTxfWNSB4sioU4E4FF5YNNMX",
  "key30": "eRFv77fxokDaJXE9tUTSVtg26prEaaeYZybNryfz9sNeAXVEiyLYbcB1Cb4G8zFkVbhQg9wdpabTdcNtw3o8w85",
  "key31": "Pv888JNkPWYMjxnQURmDhw9PxaqkibrGugmyLX5HiZijqUjVaeePkzex2oro5jqeLxx3fGbvuz4UKkSD7v7WN1h",
  "key32": "28XCFuzyvse3EWLsYsCR7jgU2j26NG17f739iBSiP94TdfY4RaYPVoGTHDM1sPkS2N8F2WCgq8eci1fwccCEFFfo",
  "key33": "DeQDqrQ9mEmefmGF9eVJA3Lg2WS1APb4A24iig2VoGtcako8FYseXqYvfVXHir1cAP3t4XZjBYajdc5BZJZiDeo",
  "key34": "2AjcBqkHqTbaNJcWfEmDasviHyFra44Y7bTQpZRECyHjfTrmb5k6CnFiza4jpd7TkF8uQuhgPQeWVTa7KLrArtBa",
  "key35": "btJSoCBS2UAwPrbBRpfh2kHGnQzXxJvfZGXU5yJCjoN1M8Nj8RHQ2uPi5MoDr2j1DyNqnEqh7pcvSnVqMiuP5Yf",
  "key36": "2ahsqVevnmGhFqXiRogAkyH6GM7tPTCz6uMRvmqAbtjCqXwFabGF598nGA49GMdeDsZ54kMyuHn64u7yScwbuwYt",
  "key37": "5fd1dm7TXWN9j8vqcCVoKNWu2eEV1pSZsGGZaTdviBpMLTTrPEaDe6pfLnf9TuwjuXsMMCebj8fGbNbcvXbjcB3n",
  "key38": "49maNh95gcjm2mfW7te5qnfAipw8rYktiQVgRZ8mtkD5VP62SPiJ261cwAEMnBgMtokiMCv8k6BpopvcJi3b4B4y",
  "key39": "47g3aibx72oXnm8whcA2gvqgkkB3jZHteSFejcvswANnQzxDtSkZrGKRwh7LQAivmsUpkarxXuTikyMXoJ2cB7VC"
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
