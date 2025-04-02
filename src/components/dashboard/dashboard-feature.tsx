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
    "38KQqNntYFHDXCB8EE2Wgv67Jw5BTvJUnP6RHzgpLoBm2LvQESdy7q9EqDMF2LzVDSYutjo2vQ7Q4LUqKLDeBZXv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Bph8ErHPsckARxenxT4S6Um2gGVa7EYTBkBFPZeuwjf9beTuYWokXjGEENU1Re95mMMcazjSf5xJqECg9fvrnAb",
  "key1": "528hbCsdFXL7oGRa3PDHFrqBJHfh39vfgAhvJdund1Z1fyoa7iBdwNQt2Lnzs9aeWNUrRToVjQqeNXMTRNKFraFn",
  "key2": "5zGPw52D4ouwkuBrUHppJ9cov4RKf1xjpFkfk8C4wBGsFATAhxi1YPuRQMNPJD9WjoDWByW3EQbZUnaaJSG7XpG8",
  "key3": "2ECP7wekP8wKp3pPCqqV75Swwr5EvzbYdm5y4Eq1kDzJAAaAE6emNW8a3jS8Q77xwjszqScCqXq8ht1eNNDfzavY",
  "key4": "2h5HrSpJ5fjC328aPWESxDBXQpaxQZWfK2CBoqRiYwaBp3MwCm2vxTs6wT7my4rMqkyG6oYfT1GiL6v3XkV6p33h",
  "key5": "3T1TjvZW4vbnnKHniuqhUDp2NnEayZ4VVgioFv63BdNbrSAt3WB2ETEsC12pShJFaiUvSq3gHSBtqJ1Z79kb8f2R",
  "key6": "2ptVPaszsbaGqK7DUkPriRWs5DuYG8Bemm8tnB1j9SX3ir85m4VhxJ1LAGQbLVnfVLyeqD5s1MihJdprE9crvZJR",
  "key7": "3dHjKxeuHy1xvtFtvHApmyoxLk8qpX9dYVfhV33QVcQhSRtDX14dFJqGcqQCfeVPneykLm7LsmZG3U52JbxdyvXH",
  "key8": "5aMxiLyZDs3nvkVcXT5JPzdSAU4ax3gsFPFZGvHLbRCCG2qJ2tbFhcWCfq3nAkhBVvZz8zeNK1YcYpmznMj718U4",
  "key9": "5nXc81NXLFP939vHY8Cy8hSSM8KYAESNCCeg7ykiS4BoYrzrw59uw4pTHConAHjg5FLEZtX1svSeo27W1EgZyRgq",
  "key10": "aEZxMxQcQjU8zAq9X1wKF3eS14UwRqYSNQEd7fB4bCFNczMdCA3y7nd86LsVLLNknebgUDCirJgLsjWG3Ybu9sM",
  "key11": "3GZUgPP5UvNtVdXU2Eq73fZi6NJGdfcTWHvM57Kjk41UbTdofbuyFHfK5htgZWmsxDut6yViFdaTqKCst9Kuj23B",
  "key12": "5zhbdrxj7btbsj2TW61eVtiegNHBrA3boFAm7kbCibHWseeGiKn7d76BWW9SbW4bnk3KgQZuKEW9NaPBPzd5aZMU",
  "key13": "4MVHq2H4McpNUHddFjaJKGbisy4FBfpT9mwUNRZraKeN7ViuWCEJb3jJa2xbPkcc92HUjiuq8DHkgyyeTaj1TE2B",
  "key14": "2zWaDvKAUpm25AML3gS1RDf1TNrcE9R6JY8NefGaC9LLRQzb1y34iD1sx8Y8DjUmhEf1MmvRLmRbfDY9SNUhbE9D",
  "key15": "3UugzsMqs2soboCwTBLFQDty3daVDLDRmGopvPHuhHPTGM9vk2QT1oJKcY1GEHZ3ywjFwRZNYUbogamVbbDBXA7A",
  "key16": "4BJ6DbwRAdos1oNtV3KiGo5B7ft9YXXAg8k28CpXmeGCQweMU2MngGt7XB9xB3dYpiawZ6BAnJMHRcU3Z3jU9av7",
  "key17": "22eaAiSqVH8KzFTvCsRZbR4wNUhc5MjDvkUi2iqxeYyVhtQ1c3F3CXFiUQwqLsEYzgf9i5NcagS8vHcsrUdpRGz7",
  "key18": "2H54cDyV23ciWxudcEvbvm7HS4XBproACHRmQM9n8yp7a37NxNBByRGQRJ5FaLfmZo1p5Kjsm7NDyVupahQrnUMQ",
  "key19": "3uvcrgcWP6dzDiA1XP27jgi8hyp17XTDYeypzoFJ4mH2WDjXHLCXyiNmAeyUfJKNurotPAhhDEQCcQuVVChv9BnD",
  "key20": "3EmuKQkxz3gkUU7U9LrAMppbKJMu9mAoYWDCKMf1y39x3tX4DBCjjEyFd2W4fVo8tWPnmyN3DTx51Cg6bADsPVUh",
  "key21": "42nQyXE2XGnGhKVQYs3o6ahiGqsCtcwvpasqnvbxhNrP7uC6KNcqLUvLzRrdVFt4kAie18NYjbhckaEgaDFm3Zhr",
  "key22": "2hLVeg37Z3MC7HY4eR6rMooGMe1KQcYsjLnr5x5jCRp1Rqvgs6rgsRzruTWCTvFVNQStrWNyV1e1c8DoSkrZ4LtX",
  "key23": "5adCdBS24QJkw1Q99cm1ZQeowuS6TNfsb9S6T4ng1NMW4eGErGJ5Si2vZS5WPxgAK3GxHNaqmuVcxov3hTfzAJrA",
  "key24": "3wZdkbeX6AjmL4DvR4hrYMeSDMy4XeTSULbsKZZTTtArVoaXXoiTnUdfg1XaGrmutrKnG8Vn7GuuH8AjbubC6aPG",
  "key25": "28q4PTLTNreH86zm17vc2To5JEzS6Xi8VSTX1N4ZUhGvrjMNWm8pb1JQ5mUaGP7kXbrKkNfB2MdAoyGrZ8Pe8xTY",
  "key26": "543VUiEaUDMfB49RAD7fgyd4QjJQV1N3v4695XpUpFMW7spngVAysgaK3BUY3Ch7zudVzNfQgz5dxGpD22esMxFM",
  "key27": "4FDyG2cVst5zKpAfTTPz2n7T762nca4BTZiF5Ru8SGxGVz6KdtD5d3mnTbwR3YC2eHRF887SqDNcTo4nqiVfhDyT",
  "key28": "66UXUtp6zDbtZFJrcJRDiT7o4QQAgibn23rqtcpjQV68fd113wJG57Kc6EVYhU9As25tVf5aostzxUq9zpzSJJm9",
  "key29": "VXQcMWPZ2rsfgoyoysWh1A3ErqiLExk3WYeV3xSoxZcs8u71q7rhrcYXQ46guWPe84iKzNxw62yiTDUibw894jc",
  "key30": "3K1DHy96xFHFg3o48LeMC5ksBBK2vmzy9iMvGuWEUHTCjRpxqUcAroRoGLdyQEESmug1b1dQhh2c4emdwo6Pynfu",
  "key31": "Xqh85WneTEPARUeL6RrGo2eq5mCsi33ddmmdrKqzyKu1qFApfNH9MUP7oW3Sy15SYye43LL6LhYLbwWB1DKGjti",
  "key32": "4DLXa6VSXnaeXkokCiqU4DjaWRfFouBKnd7kZTe6h9qXXegYGzv4VCAmJXiUeUcUskdq6L1V1qZtxALdTkWPsvYR",
  "key33": "2wcZsDMErSMWZ8bQbsLNgpsaxmPkCSz8KwL6e5vwGZiff9PuH272XJBUT84A9iPAsH9noGuhWhy9eqQvj6KXCJxX",
  "key34": "4CySPR24QxZwrSkPVygPeGFknwbrGvrMwTVf7VHUnLN1Jpg5MpwzmRvD7BjNGCwgSpb5aY4xtE2yiDbspxczdAnA",
  "key35": "5V4fhFuWkxsMJNbvqxYfXL2rcBR7A5x9d3JoKGG5BwPFzX7rVopVxVtWj8MAT3UY4a2kJJTdiPWSW5aveEy4haHg",
  "key36": "4Jkjrm49j4KWAb6LHoqEWvkxYCA5CeHRYmzXnFBGeNXhTbMtASYpu9ez1svB74DvVAdnnstsADitP6mvanQDpijC",
  "key37": "4VMrxjmabQnLEc8s48Y25hDgnqyZYWhYxkBVkfPa5tXn8b5fBSo4NuUdrpo5jbDvvDLErK7RsBTbyV3jKheFpA2L",
  "key38": "3pBGLEjABkvJwAj2grWA6r1ESzFMqocNXeXCDJnzDcaoGMixTPLChNZ3BKXKwSRdrGp2aq6E8Si5R3HRCjiHpHfV",
  "key39": "22oKBdewKBirG7NKPMotLvfFoDDPcMygBn8se8gu7CskEDxEDiD51wJdNUnhDqHTpsmKUmbSqEX9gWyUbPAyEbCK",
  "key40": "4yhuRXBZwMN443RrPjWRvjqRzXG5kvmC3JGkQr15XdN5aJTtquvaBYpYUPuPQNZHnWixWEZMqF4J2fD65x9DghkY",
  "key41": "45eqtXrW3D9F6KjjjYK3hd5x1C5xrxt3WExQXKqDtgKPj7p5GF8TBSEudioL15yREMmXjKyoP8Hq51Vp6U9Pwkzz",
  "key42": "GMFbHgUFbGsp3wGU7cT2Hq6NpYXZZF36Q77WeiU1PMMTHGvy2fHjoN354BQ65hWnjLhYvVx7AMouMLfcyhFE3Rt",
  "key43": "53u9mk1dEhL2QvynyTJgMAY6BBxEnpXhoEuh9CRqGmse3usRjFD3Wp8vyFvd1QnfHs94ixVKG1cMdRffUBX5kbGH",
  "key44": "fDrYmfyRaNmhgQ3QMPnJqxej2bEoC85wxATyE45x9WqEUh8dAd9nvSKkhsPvDcdFngZtdJ6tSKmgMLJViXTvRFm"
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
