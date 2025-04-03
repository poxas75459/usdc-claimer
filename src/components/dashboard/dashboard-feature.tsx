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
    "3wE1VW6ftCmnXRdDmgWrJnNKCYuKUwmGk3oaVFjSkb26Zw37y1XG9G23XrRRwJf1XjGb5dbUNpikjsVCBjS9sVax"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uzDLLxsxQUdpFYTTnmNx86DvajGpajnQPvbcETKpNveCuYkf18iBH8JKWr9xT2Zv6sQxWm1famdfYBxhLMVQSS5",
  "key1": "3wHr2gSWc4B1fYfXFyxwGwsPbptdQUr4nhG6Ufis2yxjAWJyoJdtw8mUEGPaEiSUrNEGoGX79kAvWSFfcJxxWw2P",
  "key2": "3PPUzK1HG9JN3NoAYLBM1m74Sog7YsLVR2soaVMLZkBpzKBsJ6EdxZmK5atrt3Fg7vM71x2DwYPEZMiKSBEmThBk",
  "key3": "3VYtpXXWoqKxfFZJc2CLNoUryp3JgFeAmVndKDg3BpEqgFYW4k3EUwTJUBB1q7VZoQS9fGY2Y216x5idv2dCgqHj",
  "key4": "4K9wkFMn8JMFX7b18nLuyVZXfsBiSr4Z1VemnD1j5JzfcuyjJtHFXspQeDziLHu4AUMzc9xDcWPbFvCCC1FHES6Q",
  "key5": "3hawwCzvNjrVk6XyiMDnCL5hMKLvb8Ybc2kAu4ZSwwttqY1xx2ASbsQ1KC5nFykxdvrRQnjBCeWGguysWb5yTUti",
  "key6": "e2mGbgnFrpsFHDMLwn46bTo97w2Y9jmrLYYytQ3usD6f94po7LnJL4k9wtH7vnYvGhGiPHeCGof7kFsfK4SU93G",
  "key7": "DkMTXgvijC5wgF3kpuMcXfNZpsmq1oCYyLHzi1aHFFACxHpSMQP9wPptBDPcLjWPPJTrHRE1oA5Tjf5Un9xpge3",
  "key8": "49Jsp3KxhCSonB6RGpX7M7xcLdRnULKxqrrUUbR6gg4cSe7z4L5oC2sk9N2acxGzYSAxD1hgb6L2kL8PyyxTf11b",
  "key9": "Qfcmk6AYCLrR7F1AMMjESC9yqEe38BWAPstMqCUwTcG1B8h1tRfW1GGrkovgVZaT4xbxpWnnwxmeXctMZBSVSGG",
  "key10": "42GccRg1RYEPefsAjCfv551yWKV3qriPTtZASEmJMgP3eJjLsMwMFHvUQtntDoDrjMe6Ft4M1ifRHMnQogCKkEy",
  "key11": "59yuRrtrzs2NqSt23BHhCBqCJckVHGrdhg7nahsPEubnECESA67NXBzKmZBergNqxz3yiMaTpoXmsAUgKyRiVD8J",
  "key12": "5zARzvUeuGjREppfa32Nv1ALxRBQYYiFBNW2wHch8KfVAZ5hyAiF4AwB2eNeW3dpZqcSeHePeTgD9iiXpLNYvMX1",
  "key13": "2ouhLdAcAkL4XznG3eiYDe2DRxxjiRYGU882vKnRwFfw86KxHw8WsCxTbREUsUHUrTAhwCBLRJ6mZVQLpJWijccc",
  "key14": "5FvnPZDXwzbEpSUe3Hk3m7Ss3n8Kbg6cGGcJYgVSdHQhfFTs9nxgos8bicewEtf5t2RvT7JiW9cQbjAesw3DAjsN",
  "key15": "3yy32rieb3ka2jH35ntZ7cWkb9iHjD8ZuW3jK4urwMsCQUc8cLnSGFyLHEfNdyAy5Ebj9NQAngrUquzz3DLspJmD",
  "key16": "2GfWNngxSKBvzbEZdgGK5TbE4Px99XfyW9nqcC6LwCNuYUoQ2UH5ZGihbjoEsPAiWS4K6bMp1KMe1vCGEjAHgEDC",
  "key17": "ZxEjYJqq475tEgHuPpX3K48CTSha7LmUDH9JfP5YtQu7QLKo4sNRcZejsncvqehKJNkcJBrS1mA5t6krnFQSBCz",
  "key18": "RN19G8qYivL4VxvMZfDrej9cYhDgSZw7rT7UfeZ378muxpPHymD6SgqMzEMqkEdqckz8nutVLt49g4beqkeCHv1",
  "key19": "3VNUVP81cmFjwFpmTigQP1MuC8WqjJ286kqqJBqZAaAmWiyLePxMeEMZw9PbyaJe6CD1uGzjZBrCYED15zL6t8pv",
  "key20": "5NsagAFRzFoSsgQnFNiCchDm1yvJazXVjFPdfd2a5Q35iH3fCCpqYzFb6FJjny7HNH1zZ56Fi7ZZJa7iurNyHuDy",
  "key21": "FRTJy9cy9HFWypjGuY8qYX2euo3ntzxPxhfzhc6WgtZL6JFUV4tLxr9Z7Lg5BFC7ZRmLjfN3up45Y1zcBshr1oY",
  "key22": "5SvmyqeRwm7FVRPVrFNMUYvAAsPo3zdJtQ6Mv87daTe4rz46poLiMmMp38M8VjZETKeViaf4zWtm7rh5N1G7FDNo",
  "key23": "4NbGoyejAeZ6dWadZ4BbPr1Wu4qhp8HAWRXVadbACCeP7kUwGHj8YowYCvfBGFpCSjyS3xUfA7PR2hLxaHo2o8VL",
  "key24": "5dsfMrqN16vEZSwy71P2eifg5kGo5NqvtgrcwjStaySKbdtZLPMXAMAq5No8DtWvKXCnbCU3QP4WEWBWeH9Sfypt",
  "key25": "iVw9W69ohkJLFGXA6dXDx3ELw7qCVMi4WnqxULAVtrDqMZfQpJqrJjwNFSfCEjioV2237F6bvW5tHS9xoLWwNU8",
  "key26": "4xt8WVYUZqCvYvfQLynamTwFaGJeHBc7sLnvSorevNF3KqmPQuy29v6vnxi9FhiEmJK7v4Dtvh8X4NFLcJCrV6ZG",
  "key27": "5QMDjYmx7zQeTcG9QTYX6PyTeZQpXx9DHbP9mHsxz9UWTzp17zyaPTHLRJsMXuvrW8FwRjJwh2SdMYtry8Ue1K44",
  "key28": "4AUsKPAtWsrwFoQTPn63M52BZCsfjP8qHajnje4BATzdsCJg7h2zoaw4uAE1kbrRgWDGgLoAhrTMfdCxEZCABUie",
  "key29": "ix4jUzM219uVPRqqUaZYXPg64ythFvXAYLFatB94iDx96xw9pLjWAqku9YzTJKfUkPf3XrWou6EMrcCnbLHGUUp",
  "key30": "21GKtqbk5rmUeJ1k4tgnTWEgR2xYHZzcPHnxGxNE4k7WhQgqCUP5YYLG8xPtd53k5K4rEHZRkcbFyTjKSJRNJUQ8",
  "key31": "36JTw7fjz2iSNNR5HU6NGyxbyohSvHYBLud4jcyQkQeThp8LqUCuK2R2qDGqaV7SmnkBLGTtxGSXNb3a6mB5RHr3",
  "key32": "58jX5dNfzoLpSoaeFbKhPHDvPYcF56cHFdpgTnAN7uNQNLpVbhXLunc3eJd3BikV54VZHhLgrBvSDVHHUUVZwe9h",
  "key33": "2wbA3wGSzhp6HRTSW6M6dZUDnEGGWi1yQcCpTaaZeWjnNwuDfUYnUJxfpioty84rXNyQEfUgwQ2vYXgTPg56zSq3",
  "key34": "27SQwfguUbPy1hFjSMn54MjKSXuG8P64QqRiNkaJBuNjMWpL9eLPTWWAQ2uzi7BQGrefXyrSLNDFn3uYb2KJGYVa",
  "key35": "61S2H63rwv8bKYBcsz3rAQc5au4cCk6Jr9a8B8cgbkhuuP7bSff2M4ihM2LBuywWtVXL5Y2tY1zmryXKYaxA2bSr",
  "key36": "2Nj7MgiKjrNZxkgnA2Ts8ACqsW9TiPYWBV81CFm84EVTm73s9QL8UqxKTWhzhBp5r4pNivnaDuQQYbSJVcFg1pc9",
  "key37": "62WepTSBE62U3srWVdyRdVwoyqrtAmXQ3VU4fRCkgtNQ3vtnEAtZEPsnaVwqnWPT8jc6FristKxgoRTWykJvs8tW",
  "key38": "3niQckBFYhkqd9dUsCigspvxTet9JQx3yxLnfxNJoSxV83tvbXTWS2syqEQn5HA6FkGihoxajjDbVZYWAU2kpvtu",
  "key39": "5Cy2ffy1SYac7Y8mD33ANLnSfYGLTv952eaBTSyjwySLs1gwbwMZNTY1YUdKv412PcPWxuufhVQYXowPbhknJj4x",
  "key40": "29Nxscfcbxq1ssTbaKsUHcGECenUxGoGXGdNjk6aqq1mfEgUT7Sw6fNUBBYHv6Zjgt2raDSXDK1o8LgPBnotZFfn",
  "key41": "XG6BfDdaiavxrH2a582QGF6mpuQTfUuTjoPbCnjNapLGcCAGL5btkQgMXFV7ASxAFRH69W52fXYc7cdeDEd1f7d",
  "key42": "3Vz5tMfWP4rWmXqGFscBEpKCxjhR4MWE5ShESQ1uzWBEbMjVxRWHoPvW8WsEJu3UAvy33rei7xDRmjXH6i7AFBwP",
  "key43": "Nieu1Gww8b1BMVzWsuAKMUaupXLoG7xBmgbhQDVT8vAy2tmN3xRFiS9Ha4DQJobBdqKhp5g6nDBdbfYwBVvTDxG",
  "key44": "MhmaAmHuppkFSjTtxPnHrnYiuTG7YbwEhbHwjYjYn4C8Kp7iHnih1ELDL2L5stwJjB4m3Zzk5WJ55Qv9EAwykjA",
  "key45": "5zc98DWB2Qh19GXTGG4r3VPrFmK1vmTmjon3PpLnwBKHiyjKKMwZvDBGtBrjEiAYiAs9457gnUhf1wAPFLeU3yGM",
  "key46": "2Y76bE5DAyUNneFTUcu9diABugWAA26WhjBKhKqLf5aKHhX9mype5LVQ3wAR19A3jMdzqJVxzuYyZGtNJMkcAcBC",
  "key47": "4MF3cxt4pe53pDEtwf4EN4redZY3a36oqvgwgDwUVPZhWWavjnMmJBPMFCzwUHqZsyhTZBDykq1stWLvUZuKrE3Z",
  "key48": "4fxf8CrNkTHGuv3Z8qZsk5Ji6PwJxZu3osaxSd93mGzhVPKtE3fjKwyDLKxEZKH3WCZoCLKgTUcgk8qCRm3TbBxh"
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
