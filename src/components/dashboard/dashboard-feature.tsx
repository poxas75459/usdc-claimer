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
    "5EhdH5FQQrwZwbu177CrzTWMCz7j17iV59bxD1REmrhVRZSK6oW6bJ7hcsGJgn2mnQkSwhGjrK1CEBCssgSG6cmF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r42evTGWYQHWF798KjrtNDmryfQJ1Dz6Wp1UUrgWxFkScQ3u4XZhvdV8GFmBuqMT3Z9AKHCP5Vt8yDMSEB7HqFZ",
  "key1": "3KN8Frbs8ockBcFoEsPgnzcrHYjohzhfwUueeisXfmoycJ1foQjdEuUJYyiuJ7a3gPaG3nku42uVuRuGLzFaqhiz",
  "key2": "wq3eXiLwRHdtiavBbw67QfsHx9ZhkqgqQjF87DUUPpgBKa3sePPhxkYJDqH6JXT9jmD6JcxcRH7yC2uUF67dbRp",
  "key3": "64rpBuDgbvbT84vKxwZbuXZwq6T6bhecFonnJG6vCpGUk2VKVeTDDP57GdYEp5Y8wpQ2cmwjH1rkbKfFZ3nnY1L4",
  "key4": "3ruw2fQBx1yUcjd13GECPNVYBBTvUnPkkV95aG47jPuUoVeJYALvcdYj8tzwZpSoXx8ZGyG7MYFJNa5GRe5hkAuA",
  "key5": "ApKaw6Bhiq9tDyppP32jcAy33kWcqdUCKUdoxm1YK1ijRKy4XrCr3RbFDHVZvHFHMg9qNQTPsPn9dX94qvMRanL",
  "key6": "2hKnjdvJCBR8S7jq1hQqzFHNz2LiBT8TmgkNXvyU7LiCuQgWdYdiuXdr6XVSJdx63LBusrXDMBEh2L8RsL1xY8bk",
  "key7": "5kVk58NZ6CK219Uo3tAjCCvW7gsyLi5vdNMGbKo28eMSQQK5de2f6iKiRp4Qr2cwRm6nGwEJok5XoAPJo5bdv4Bu",
  "key8": "5Nh3U82hL5XJGMbvadU6NAbp2qXbyd74ZSjDfaB35EFg6HmWrFVpYb81Tj2ZCgGifsAMZiW7kCeUxE14VVVYnZhK",
  "key9": "5bycz6xbb57Ayg6RTj2aG6LJvQMZoHrYF8fGALAa3eR8dgeySFzuWUt54dJH8zRtC4iZQjUQj8i2A8BGns8eT9Ep",
  "key10": "277W1TFeYxoSt4S3PbVSYAe65yiJXq375n6gMtiieJ1exoGTzLsFmj8f3jaoVrcRFPVBoM8BRd469RFnTo2xgorK",
  "key11": "ECGJRz2Mez8yRvFQLp8ByG6gqdTZYHdPFjjkJvdFV6HUkYHMMrB9LpaUhtwgG3J8SWSgmaXGG9UPvXRHJMBz6KU",
  "key12": "47NarhS5U9a85DueKFZCSvnk8fNB9hYuNj8jMztBY5Jyycfj62A7jaq5hEDu5Q7RM697E6mNVC5DPZ4irgaY93Bi",
  "key13": "3sYA1Sz7QoDwvmxgXnfCJqDtYBvHS87jkpfxRBgJ9xcDRnZB5qjcuXgn5ZSUsAtPdi3spTPwYpNotMLP3qv2FMkd",
  "key14": "21MAbaiBSX8avuKJDZV8nG4S83SvEUiXXsSovN3WJGWBvub5of3ecQRwJcDN1JVeo8qrc3av1iKTwegnJeQJdrhJ",
  "key15": "5Asr9ynNeuZi76bqMwcw4o5jSjdpR568nHEseNh4XVwaan4cxi8bjjXk6DAD5fWWQ2D1qhojB4jfjYDdiiZ7HFYf",
  "key16": "2rjiLoCKm5zDnxpbDjo5ERkHFze8nWq7AFMU36Z8mXeds7ZZcNHMic81vVES8mQgVSb4QkwJsKvV7CFYH9ws3dnV",
  "key17": "31p7JdbUu5duthAsHjnfL8zwdKHGSWDLtgvNaLLeh2AgGDhzkRk2jQYk1D7364fRcVypziSNQAo1LfkvKKRq5jgF",
  "key18": "66zaVfcRcd1axgJULXEDf2CFc3pCSEanHF5Kt83euESs5UPNg2G22ygfCG52rVZUi3EYkpDPkTXPNfxNdrGwyZ71",
  "key19": "wKWE1MP2qvmFE1b5qbhb1GGFbPbdMpz7f8FNze2Jr1CXwvTFoAymSghor5jdfdkvtJcFqPfAXPHZn6gQg3gs7bn",
  "key20": "4QAWQESh7p4JX74ws7A8TwhNp4BfWkrjBMcPcXBH2VHMCgWiEvhw9NPJjF6yGPXYPHadgdomzst973o6mhwdUAsU",
  "key21": "3jwA2HxMoLc2fBj1eD6EPT1FybMvfkfc9SHFuhhmesw7HBGarFdZ8E4Wyjy6uz2zLDH5snfhEsYgB9D1UyMvsy5C",
  "key22": "5RWFW3XfGa6EYFmRCh8fbuRwK5Af7pfBT8vgU5vLeFW4oZhYHmtfitJQVVGusggZZ87Wn9dh8SDbGCG9FaP4WJR6",
  "key23": "kx92nqdwAb19ZG1yGN2oPLedA5vDm4XyhGMhgPLshATTf4xg6qsG9USuMu7uoAqQhXePgySeYjVqWsjc4ppSrH6",
  "key24": "3j4spo5MhSRMNfX11Faiyn1tK3TFGevtvTv8f2fEk4EX22rZHokSPYiTDv3gXE2aWPV2bHhYmGS4GUfxBaGm2ESP",
  "key25": "2kZafswj8L2E91p37uu9euEKBCN3vQtwDr8TyqgeK1GJMVGHMuQn5Q5FCyZZxMzUjqTMsVZqyqjiUY2uBH9SzAhS",
  "key26": "SRpZbEecKtXx5jkPyth3kYvU47xb3VXraajuhigeLw4aH1PhjVJNBFs4RDNCa1nj2w89iJq3pSQaxWUjjbg6vfg",
  "key27": "5X6oTbYjWWeo7UXM9pVzGqozqFXHjLxLaPcrMoP4rdPV46pXJ5NsE12aiQ2dJqY6e3wiQo54QNpcRXW97WDdQogz",
  "key28": "3o7ZeGDMrDvKpuozAhUJiQucJkUSJ4L8FbtYf5p3iLawwBWV9MWKHfMBvHMe5AT3DSkTVRKqFTCnjqeMoHUYyPGp",
  "key29": "3Q9EamFd8o5DKqiGqgZuV3Hyua2XjxhJUQDDfvsFXEJyAkAaLhxn9bkuNG7EyyL7EdhXDLUbWQWb4qJ6bZetPnwK",
  "key30": "2CsbKcXPN2FjLjAP161wn56bkNt6HeGzGoUjvbe8n5Qi3hx7551WSu3ZdQs2PB8HPNmqQYzMRn6aV4z4n4Sa8fEC",
  "key31": "2xuqE2HbBuupxmBj9mdxEaHahg4oSEeoa2w7k1dc298p2apM4J8dmFfZuu8hsYZYmD4nzAY6Z4kbZmiSqHBdiwM8",
  "key32": "5LWtS156aAf2ULAfVtkdwrA54T6W8pxmkQJGhKr5h9JNfxG4jPqafcohTaGhiuXEVoutuFbxoWUgZU8R5Xcb5ZUF",
  "key33": "4bQ8FqQMzp7rJz4NZVfrouyohp8zfrfMGeY3CQKnaJjmEMjLpPwZC3gQPhVRkfZRM26toBdHr7reohsjyF3BE5nT",
  "key34": "2RBMj7dJLnnKSCNXWxW7gsQBn3xPhcSTvYThJL9UKjGPZ2YU2ymh4Kwdb8n6QN34CuAtANDMSuhJjdTSrLF2JG3j",
  "key35": "5ytmeaeNyX5s19oV8UnFao4E9HSvAfhDiLZj6P11APKVcJXi4JJWsfepKD45Uz2ekHvaWfp3qyT76FekGR1iGdZy",
  "key36": "2Cz5dkA4idF8Md17HGecoEkY6z2yjUtfC8ubck6yT9AkZG5RMEpKwnDB4wPFo2FTCwALMw3P5eUcqfW3hnv3hpiq",
  "key37": "29C1ebX9tGmE2XgHrbYVT29x3EVTxi6n3xxNdD74JR1Zvrk46aQBP3trXgdmgXZL5jJwhM2RqCBYEgCS1GXUtMTy",
  "key38": "5QzfBQg6vcWov6HCeh9mLN1yUBk4i9X1TyWhyTpaGWt3FqbntHbUyR8sgAhDXNQ3ytuRMEAC8zPmeysmmd3PfijN",
  "key39": "3TvkH1qL6xVBisTCCs9z6ypkzrdpv2e45xNiqqCVZz7tSbr3VnJYUhNrsgghHPSc2r5xd7o25WmQ3dTpfZRYEW99",
  "key40": "Zj3nQSGhn87yFtmKATn2D1GjqVptZTQR3xFJ3ikpqsZsWAyycbCRLvsEHSN9YJYeYFHRAiGd6cUCabdAuBQSzWB",
  "key41": "3i1XjSHjLfMo1xFTMha1u4MMFM4BQJpqjXdyxuNMoxswmAR4s6tsNSbUh67WbZctE5xt4YxBCrkQvGdQAuVHacM2",
  "key42": "2q1YhKVRzFQLrHWCahnktwN4yzLxTrdcVp1nRekP5CQGGHZw3jFiscNDH2wYjcP6VTCmRTpJKjPja4hheanV9sqd",
  "key43": "23BQNZBhLkJE3cextRQPgzSYtihXBSycswyCoYBWBsEp9CMXchzvDyTin9xtP8uxo6cH8pCUy67Ef8q4D99NANHb"
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
