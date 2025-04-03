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
    "66maX56eZVXn7k8jDMbS2KMEkjcMCSAMMpsxy5vLFtg7rHv1LPpQfuXS3kFiXsXVEvSkKysoHDt66Zqc72XmM27w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4789c3YXyTjcmjQxALxEA7iLHyX53UF5P8zWfZKANF1kc7tKCj7WAHDLbov9SBbpdpTBPEkq5F8bRsaYXVjwG8i9",
  "key1": "2Dwoxs9i9wZQTrb4vgKVB5srY5DtS3p5VYP7fSjJ2kuSdFUrtY8UKnATHz8ZaWisD32CqtCLmH7oZhEoy7FcibEi",
  "key2": "4QYMqXogwFdyt13FWUCBVaXxS3kVF6zaKoyfhdvzsLiph8CgG3QNHg3JhVHiGERVUfirDWQaaAsGr1rDUgZ8b71N",
  "key3": "5R1TWBwcMJMoqWYyuDfSDzpEY7jvNpFZ6TNWtEfgd9U8cFbWaJmABvy37bZ3EKNYt7m7QWqhfHRFMYqQfxxjzNUM",
  "key4": "2NovYWVw18yYBKG6B1a8Qd4U6TKZoRzgC29B8XUpKEjvonSrzdemfq57i7JvboURVAF2vMxLMhHFUxJnugcFjogc",
  "key5": "5W98E5aRFQLUrGXr6jo5XgpFgr2qeCXkJLtwM71kWfyqYeu4QhVqiso1N6wHeHz8KoCZ9WVUgzSuzemj2BpMwUw3",
  "key6": "31Z23QybHhwGMXihWRUQ3sK5LKVXQmPmKVKfELb8LhAdSgYEQv75PSHKY1Xw88BqTJ1PhxpyK8Ca9WpB4eZFZw8k",
  "key7": "JdqjmabidDZkLf5acaJmoDTAeS2JRRqYFCQeU9kp4Y7CvAJRQ8rDWvau8ZskeLQWHCjUJmJWzse1LxgezJ5mJdE",
  "key8": "4BpLNKNCW31EpQowZK1WTcdzPUS6gj8ZhruDCio6DsNTDkZmzAwjVp7KwUwdLySwqxooX9Y8pkCcN4ZFA5Aa4vWm",
  "key9": "4mV5XkMuZqQxjEKvXucnYKSi1vPJt2DHwZzgYTX8UZbEKspm8Z7wFEPi31vjJfdYxpUx31niKJziexWFV6dhdhx6",
  "key10": "4xinz9UxGKZ8gxvGjiKj5Q7xD2nofszYrXJe1ekWjFKo9sbcfjJKZ6wBvRhhZRwo6yumzvhS22Uzv8797tBG7mTh",
  "key11": "4nyw15KpNEgZERd9oTRcJ8TezBm1tPnMTZ6xMMuwBscmFLNfuqsXWTufGmULVKQct4sVDVKdzh6ASLmSHtDZqRUB",
  "key12": "5LQekNVLy1XddEZ3oB2hkPbmL9SDp5z22mzx1yqkQhUi62qB3MDydxM1WYAzwV8Q9oK7cBrNhH9jGmKeWH3Hjh9B",
  "key13": "2ooEV8LRqDv1cotFZ2ktRqPH5A1j9XxTG26TFQdqeNc3xLwRYyd7h1483oggeWzbrkmdZHV9gKo1CPZ4UfEUmvwp",
  "key14": "5C829XuvbGqeiyCcB3jwpaKPvKMY2GMXnMPNzUAjapJsozbwnHogUK6dfs19zJYB4KYTgSoBUUTCdF8sCqAdcQ5J",
  "key15": "49zJfgMAT3tck2dv9xrZbhg3FpqWHQVxVc5uKTTwpivupHV3YWPRGSYrSzGPLigHFAqT4JbG1Sp7WYvhsTJb5zKP",
  "key16": "f4NRvrdtdz4axNDxb72tZVq6usV4EcRR2e1kBwkkZ4zCWmmGe8RbwwnnvRrWnNibxWJLW4cCaqopVb5YnnyNmfL",
  "key17": "37Jxt55oHkQSC41u1CZmbdg1LfcCZGTgnA2ycEdWSkeseCVSyYWRMiSiCGu6DXiSmiWFHUiysmComsAb5fdk5roo",
  "key18": "4uyJumiMjYVonC1yksmReqmft5NonGxBQbMzTz3KHDABwadsGX66d2y7GRD4KMrXpiVCwboQhZPYNHovDwKFd32T",
  "key19": "28UkhqDKvw9B7WUKVqxcUWUNz6NYEubuVNA9i6ZFB5SsUVxZNNFAFRLTS1QRopUowqjgswDETsNdZxJ85LGvzDut",
  "key20": "2R2dz2kLXfaCQLmtaQjmagwTk9WQQEDEyKYTV7CKJtE7pABNtdZebgxXriBC8zMkEmCw3pkj37WLFWaqdDehVEa5",
  "key21": "651C2SPtH89i8CbUyZY7qreV5Rw2fpKaVwrWkh2xUC6wvhJSESJ7qyxfqApqkJ7or9w368E85JH7fVKzG6ARYCsH",
  "key22": "5tfG132Tk9cDrSTT2BG2p6jYGophFhyKZCvbJH6P5nKBZMBcv285ChyewfCLznSCdtr3ko6ComvFMCv5Cro3CAvE",
  "key23": "Tdb25JesDAAqwqjjpKsKpGGURaKHLXfQndqG7ha2RCf52fWztv6AzLzAbnbEMpZb9Dzja8A4uYzFx8L9jPvp2vC",
  "key24": "5khQa3RnLnvy4e4EqN4fzUvumAdKfVUPjKBguDL5yMddmVG2cQaGWs9fqJ8KsAMn3stTJAaJ8FFVyCeAnh1FsUHN",
  "key25": "4rosWweb4NbviaqFiS7whNwRCNYoT3bTxsex4eNYqydJnznoPa4GhXN8Nsa5KuDdR1EVNtvfFRWKQzpFgrQZRpVL",
  "key26": "UFFGeptMLszWRWoPZsPxcJx2ZK3tRgqu6a6sTpaXheAv6pZiBGoJHhTqLHGThvcaNomMCqHBzY25YrgihSac1nH",
  "key27": "27cv2DiScbPWUfaD5ugzwnaQsAQuJNDjfyRQKw9Tg5dRtEEgsVA8CkfXbVYzhoGEMP395uXiLX36xd6CaVYsspJE",
  "key28": "3G3b3kDSpckgYQ18vxGkfsjxs6emM1hkgNEFhRd17jE6JsBCtGhyZKv2Dd6jpL7keeewDetAdXY6GbP4vH1t6tRQ",
  "key29": "3xaSQgmnDETDUx2sgXXEcWMcFByRMYJTWYJ6ojqW58dfvkXLfsq7QhG4uAeSjzhhNCAd2gZ9TBRkuBLMQdHwrqvq",
  "key30": "pSX24bTp1QN3b26Qtnxk7nvziMXoMLS24Z79au9aV2QENb3Q4h2eDaPCzrUcDdSEMnXgnhf9e4yKY7B7YTyf7Yy",
  "key31": "1KatUx8L5NER411qwsx6GtnQY18F3kaHFYTtgWQnvwv7yNF26CAVxbBNhCn8WCq51JVbr9Pbc6H9FvafBaLR7Fp",
  "key32": "4MyubdhV86T5SonGunmvA8Hs3wgd2ADK9xqm2UVho8Ppe8uhZkrKaAuRvr3bGipWrQkiPaumFDUYa1vHsufm3buZ",
  "key33": "5uMXL17wrxL59LcT8cUacgGwjLKoF2Juha8SYTdNUwqyXphQNQWLEzUoA31ZkLczTRgbrpz9vowxG61eSh5wf5rA",
  "key34": "4JTGxRE99ereQdY14Yb9uVu6VaQ4WkpTooyqAgdwRkVDUrmwzRoVhJeh731X98ejBqDnB3Hqqv3NVwda3UZe7sbD",
  "key35": "a2pfnfBZmYcFdyxmuiFnT5vpjMBGN1zvAm5WKcAVR2XNzQXt3NWR8chsQFDGLmj7QpjEq39zqFtqtEPg3yJ5Lcf",
  "key36": "3q9atgdZkeSCWyhJEbmSR3NETMVxonEgg9Hsevgbf9P5r4SUPZ4Yz52MdzQwtCUPUcabS3jr9z5awaaMjE5VEeLV",
  "key37": "31DvPJeDTmHpBiaPeTS94MjEpF59UWyviaNL1sRNgdqcW1DGDDht4f2ikvwnpEDsDgo77esyQ8uoYsanA5ywJZiU",
  "key38": "3JdUH5gpoQvHk8sSpkEpYZkvCwkV7NuyvKKDn3bTraGCh9eLgm68MtAtsoG7QrA4prM86KSRMPZjGTi3vQ4MgM5T",
  "key39": "21TmhNe4kyyzSiYptLhtB4ZxNXBBVmWPxdXWFVLmsqE14Uy1SKboWoUTFfdKDSZhYbfRjjremCv7Q9544Hub7e3g",
  "key40": "33CbR5DyGdigCjiGXSRdGNFma1rNNQN6rL6jvouwXT622mn9dTB5dej4ZSGuaQ4L7gzhQB9cbj1RsXPbQJnfSfD8",
  "key41": "4yZefnSNj4Wcj72SkKXALov84DY2Zsnh5mqUUbojKc81okM2DJL8m2WG2myUXiEzo3Jwop2EGNpE2orDByaRmqCy",
  "key42": "43bqkBXpK3eWD4TKN6yPb1Z1RU3KtrPPNxXW3KLeTuTSjawUuWNLUj9j87WSHsLpfQVxfj6q2XujnjrPQLAtCEpF",
  "key43": "5whyBDqjqfMZ97R7BefegNzwBttZpnQSwhiduaXDyhMrf2FbRXxnszcbURCg9xm5i2oGNLddH1c6ZFnt1LtYVEQP",
  "key44": "5mDC9rneKGXsyKskur2ZkJcbxY4BzD3tTcNWVuotsnGBpU3dhA6vtVQAFQkFWNxBuJxvzBpFPZeKyuQ4hteazgW3",
  "key45": "QVrWcQwT7m1Co4V6vUzf1VicVMe4uQzhfUBMuuqfhsc4gQTQSwke4wYx6kMDxzVMEYcYQqtQTM7oDYXn6PuD1Nt",
  "key46": "4eTAsiYNwuxKCeNRHXszTRKSLgkcghiJpv1aH9f2CPi9ssB5gQYwNWKhytoiC5ud1zvd6ek8aCvDf6q6WWZPzgk3",
  "key47": "4iDPYuCbtZNGADngvDBZGnvbfF8YjAbEk4fgWNzvfwfxkws1LJTbVgvhEB8Y6vLCyqXYkVap4ZmvrFJ7qXFqLRxw"
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
