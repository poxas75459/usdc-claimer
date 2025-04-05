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
    "4yoFPyEnDGgitzS24SFNhx1AmGk7Z92HQ5yEewE34mk5mvfnafvjrfhkDUXbbVSZ448PAAuFemcaYCCYwBHuFB37"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4c8vJ4LyB9evCmtAAvR3oEUuhgTdFnFoASFFPuhxMALJqMxRtMadSL4BhRYDXUdicKrZraRfgKb4DbVLcr4zYtcb",
  "key1": "oM3sQM137v5tRw7WLBKGY3VUYEbbTDLt7bLYA1AYf1zqPoamxdxnvbsYqAq94eSXkXBURHs7ajGoafDNwwG2bos",
  "key2": "318VV62sqD359kocKh4h2krePFv21SXLRjWZg1r1WWo7y4Ept275mFUtTEPySpHHW77Yk2nQA5uaSNqGLq6TVgoX",
  "key3": "5RouYsKQSXSuKZ38XXn48Yw2xSHwUaaYnWcCJQ7RTgfMcTKYgF6BXtB1cF5YLdMTwDvkNqsjgbnLBVrReZaUWyBQ",
  "key4": "3xNzGsKcX3QjmnDnRJ8D4jg8P6328Fqf66P2KBQyxYY2f7b2yuCz6BdXaT7wS5TuscXAkKZfk5RqbFdq3LiXFFpZ",
  "key5": "Ar3KdGQsP11D81fca4hcjPoiYq8u5KJsL9Wvcd5VARGWprS4f7RC42hqVP5SCJ32Qwz7HXZe6gYv9sPGxDqGpB1",
  "key6": "pHKing36AJfCEFs1puZAbwbSsCMRZ5SR38m56L9vGSMCxWd5BXEH4oCi9hvorQf3jXAesPJYL4tXshBkfUS2NSe",
  "key7": "HZm2r9cYh4svk6u1G9DBJhPu7DSCxhQNJu6uRFaAem1i7tuWpzxqLNp6yAZMrznnqqd34Pz8xj2SoEb1UZYfw4E",
  "key8": "268CqsBP6rccNWsLJr3GbRNEYFViTi2s7nbtcNJ3BUDzQS49JLLe2hCKvw9qr1txJfHe5DVNJNo8FWxX1ftjTVxN",
  "key9": "2PLemHhzeLUCkzZmPEjt9B14sMFbcAEBUp28CwTdhU66Fr3WYa8St74j82c8bRgjpwaRqzw1huXcJ6jsX1KJ8f89",
  "key10": "rQB2vHqoYXJk9CVfpru6DtCMdDVVmF7gGrFziSiafqd6AAhjLQ9jUKTEd1k89F7C8QsnZVrp9EfSrVnqDDX6WBB",
  "key11": "BWUQfAfhybnCs2iNufUZME4nKFDVHNPPstyka7G9wDJAeMFM8NZa4hTt4osauzVajwHMeiDPmcaMPHME8xJJA71",
  "key12": "2JgTk8zyANqWvGFL4B6FLivqgRyWVSVqXRRui1GqqUyBRtLLp2kqB4ixvjL7Fpoi1miQSifCZ2nFAHsA2EqZkJks",
  "key13": "2UgdAwpHDFbTyb7HWGWVXb2o9vUUwEcBuh6bnE4VX1FHjdKeXPuuTvrwAKLf9xS1ho5R68ddEkkCVdfWw5QC9AwD",
  "key14": "ZuzxsML5uK7VuguznUNHkfG16StDKukrUnF48UfWPvrWVGDaPXS3BampjWQat4FewzRCLGPYXjLoiBN9RfvuE8S",
  "key15": "44WZTBAmJU135qUP8ZzU7DhkbhppenFTGB3718Vei8MABogQie8qZCYhyhHaCfnrJ6iY9Ak6JuRQpJyfimaCPYeU",
  "key16": "27JYCSy4Un9XnknEXbX3CCHcErGX2xD7heVRqbnzVb16Km554L9EXKho4sgf11HyjSDWwMWajoGLWCDcsrvpmqZo",
  "key17": "3vi7g6QCnQnk6Uwa5vPVeYzjN9Cw2xqB4fuKtcTMrPo6H7W1J2Kx83K1Dxr1rbwVRHwpJE8YDQw5rRsJwgQcNEry",
  "key18": "45adpykDjiFhFRm1YLsDuWyhes5X8jj5DCzYCTHe4msgLYXcK6DAKAwZw8ZEU6djBE4YvsPkGK1H4UkdW5pkrxEB",
  "key19": "4aQ1ShEWWejFbz1mbgb2Mrg3jjmZbdNpuZokn3YgNiVgLenprmQ7iPwZzZ1sZr3y2VVTibYPjpKGmb697ptLL8pS",
  "key20": "oJS6kmTF6T1hPsRpapBdeJfn2cVi1eWd3tpXpGiMRxVYUV9xDbtjWXtYR5AtWAEeNPgTKrjwkgUAomEe4kjNFc1",
  "key21": "24j23B6uFbB2rnezd3bVZibG6UbN73CLGnNLP1cecHGHhErhBdyLAAn61UDQKTGMTb1H5dc2y6K42B7LL2y3rW2S",
  "key22": "27ut7iWNjC9shPpH7A4TXRBEHAHsAY3qQPhWGNvXmHPVJYADeaaDc1LiEWDM6tw7on8LJjheiff9mFpxxbBVZsaa",
  "key23": "5wRbGi4g4BFaQUJEswC7C3JxEdA8k2Knj6tvmVhJViB3aeUMFCJLRPHDxjYbtcZYmBV4HYtH7DNXP6hbSXbwKj28",
  "key24": "3jYdisPuM6PEEgmvYcuWWnHyoCYV8sYGgYhGTqCoKvDX3rskdGM5f1ALWsrXLpiJpcGenGiuLAVA1MPDkrLni8EE",
  "key25": "3HzAuxDMayKytX5Tqv39PFoCoG4znYSkfMU5UU4ETXJ5j5UNsqpq5kuTPwpSrApVezzwSDuM88F886uQVCqsPVa2",
  "key26": "5jSXP24uRGkDL4zZFZpy7a3TxKQLpBN7goiZacdgbaGR5Yi4Qroc5zpirNcopqDafcVfDVSviMSWGBxX7jY6jaVt",
  "key27": "29QBWzod9RBm5mPy5Qd7EcjK5Eq6J79QjkCdMxhSJjat6QZ6an4qAHpP5wfCYZugwB74MGM9FhRP6A3r7eRc7Jmv",
  "key28": "2wEjhETLpYwLFgY1ARmGawZp8cgkKmhYLcyXt9pctxcmFnU1Qp4R1Hae7oFLYoPU7one1K6XEmangkLwtWmzYsFF",
  "key29": "5PBfamzSHwj9aX4YtPKqcXk1HJWWHCQzpqzfCXXoNMb1xk5mpc81m9RoGwcqU2KuFeUtX2t49a5MJYMqktmUhsNh",
  "key30": "uUwgNcXZbZVogkuvRrXq15yPWqh5XkfgbDsNujupadrjevEdgkTZjDN36nrfGr5LKFnZwjUvZhhDZVR32qehCvn",
  "key31": "2988tZexXH2YhdtqVHJNHJ4oCxyUToPBU4JgLxQfD2dy2eLizxtKkMoHd9DQkiR6uMJpXAU7BMSR9A8YyJQEdJnL",
  "key32": "2gWrEvYXP1wBrUot5VZCPrfV7hZTZhRjGKkDofLRM3Qm9NBk1XpgL5TkZsTDFMfLAtdh3AzAUdZTPQe6RnBgWUS",
  "key33": "MG4xWthqbLHgKVxnYmLZdrzqyAUNFzsVXLeNyeGQbCZa2GjKNRhV5iLNDcyq7uS2pWbhksQ1wy5Ueq8MsbikoLB",
  "key34": "3XqbY45UVLjcrmGJYHeytj77GdafsBgRdDxeqjuCbSisuy8mvjtxLDNrDNvoCUbWb8ER8HrP4d8WCwPPMwsMxgRU",
  "key35": "37rL8foDySxhhJpps4ykMz3Yzx2b6GwBaheFMEZH7HqAtCCT7eJ3tWcViAgxRpfK4aCLMvJeSaG3dsy8hmXDaSeb",
  "key36": "62WhuMPoKx1AfqGC9WLZXh3cEdZZKQxW7GsGy6qD4zD83evv8HA8dGe9hz4n8fYYWHPVahL3ax61mpzKw1qkiWhZ",
  "key37": "41oYNAk6VVM1WxU6MkRgNZE2LJWQuXgjQC4Ku8dFitUs15fm52vxc5waQNSdNudmkWaZJjaPUmnevy9h5FVsfy2t",
  "key38": "4tnqXhu3EQiD6rgF1M8gUVhW6J8CBD3ao5VwMjpQyo1WrXrB93jBvFpVMVwmimiVjSGcBsG4h7gZBoZAgf9dXwSQ",
  "key39": "5x894iM2pYigMAxyJE52nm8x5ekxav24wBNVCjBXoynPdgqEUCYtU85jYZ9V9RJDJA5Ah8g9q3papWkBxpygwEiX",
  "key40": "2mqxEkgMTgzUSYJMDmyCSVh4nt9Tta3K33p3xAsh4gmMepQc7cjDnTi3Nz1CKhAmGteqBeuThkwr6xL2mwBpg9eN",
  "key41": "5GCdrcS8LSmrPSv6i8L9u8L1HPrjnaF8u3y1pUqcohsByYpvu5828yRrQb5RfGZX6P5sSRbUtUt4KfE6Ubo8LdLp",
  "key42": "2bS4wDBq9cFS3fvi7v9cEpjL2tcribw5ehMy9io8Fbape7NCvZJ3BvoR1f3wyMjVHnXmySL7TF2TpRc16UCrbeHW",
  "key43": "58yW8BCX7KmwHeiN1iqW9yecWMtGRmYgcSW4svaGis6eQz9P9eJMauFdBuJEPsGdF9ci64HC5erdy9L5zHZYCqaM",
  "key44": "3BExm5VxBTgAtsEAAFzWGdzV3bkcJdLN1fWNY6ubxCK5uem1eyxbSerLNXahddSYXTSVwRqNyTm9pP6vZrNxAruy",
  "key45": "5LHkzp3rtUsKQErHmqewtjdXEMX1tRdxJet16NdZZzXcyRsnDNF32DNa1uxgQvS7Pi75YXKXLSvkuJ8kHEvHnFfY"
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
