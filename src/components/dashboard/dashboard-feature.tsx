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
    "5GyUz1vaQ66MnmV5xXBrxhoZavMGwrxx1b68pqhWkdSjPG9kTtZrmdnN3G2GsqkHZzsDt9WDVyvf2KSDicmq7xdx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uzQNoAvqe5BMfirgFi29mbpcJqw3dhZTevg9db6TVhsqfg3Zi81XH9gJRNf6mEbEHXHA4YGGkXu2sKxdcUfyBRe",
  "key1": "2u98WoxpAHtUde8ypfvKrFGoaKCuB24RqzPsQjdJBvesg3HABGL7spsKAPYRm1cjChk6WqXLfGczGjEpLptuAFVt",
  "key2": "67pqJtt7RfFsGgGpmYaCKHtB2GK67SqPFyx4RyLhah3NcSq8bzu8UEdQyzFYDe5GaBFAi4V1t6kD7c561htm3ckD",
  "key3": "s2mR6rpYbM1p8owMzawmE3HrQcbHK1FgMr1Lgt6DiASY2HSQEz8y22TbZkSiusLhk9FUSQ23oLrRTtk2xy16Sex",
  "key4": "4jmkbuiZbVvNk7L5MEUEgXZADP6A5SC66z6Ybrs8inQmcShgxm7snECtQF5EoszZwPpj7wznnJpdTub1E69idg9e",
  "key5": "5vQGFtPcwecFqbNC7wuPRZsJtcHjAtXmzYekNS6BUhCT27woFTkWv7cUH2JhuNeoBC7atNRV3iDmfmQQWEFX6sRe",
  "key6": "3HX8i2vEAHyHCR4Hd5T5GDKWcf17Rs3E44AFXcfPppWoZc96ZS3XtezKRpeL6f2W6LYfb9fj8c2xGAVvqzuHHRN6",
  "key7": "2AHqks2RjfD31pLVdQbB3hXQTR9oFYqfKfSeKusgiG3h1daavxJnDcoKUw5mdGninGiPvZSien9g9LUXmh3idQ5k",
  "key8": "vFRWPbWd1YQjEL7P3EdSTEv7E4SzXqQMSDeNbXcy8RB3b1wvNYi1kSQQfZH9Z6cqnT3RgjRV2CrPXQpymjBGCNZ",
  "key9": "3bS6sC1tBt9otcZezcm4y3MYpxxHeW7L9U1tmWwn8dtCZC2meY7yKjddzVGzLpc3UiHD7XzxonV4bW3oYLEaYPur",
  "key10": "3KQoeqmqccuZB5YA4s4XNs8JExGrGjY6mgMgbp2CMR1134kE3EU2BFsVoNcV8LkgVG86mzy2Tov6pSxAGxiJCG8e",
  "key11": "4Cm68PCtaSzFCzrYnxNGVDyiSb3nbrExRaeqr4PWBHXHvntu6712bCYP3Dry44QAR31dXqvhALsxquJATLipkajU",
  "key12": "5QrGLEB8cS9y6S2eM6oxGYerJPZN8cEstoTHMSffWGw741zL374ckAW5bEnpqiAKivHgrQRCu4Tk3S3jKwCsVuBd",
  "key13": "4BpoK5RMkSRmz722qR7RBPQk6PUHnu64D5b1FMDtc6vFRP98qwvmkF8k7exXwkm2w8GnCx3qbhp8suUgFBthD9JW",
  "key14": "2yRL5c2jFnMo2iH68WQpGVgiksXPAXuYr2bu73fChygHCWrpXrftt3hoAejjB84FXK58oh2sQeJVvw4RGupCwS14",
  "key15": "2fjJjSXdzdxATLSrq7cbECEJHrkJmT9eXXRfyfFHbB6EA3bco9CJ5BuRFBE47JvuN5wmfXJqPdwUoVnMHXFCrWpg",
  "key16": "2rn7xQ8pqtptpjzDpJdbvgaerx5fX6aj5yR5yefFxofQ16AR5fkt2HfSMLsZxzdgjy33r6HRUKJHSSHrrYnUXfXh",
  "key17": "5WqgW1ZLCbgSWVCfPfuxnh27xGDe5p9BHU1JZzjxp2PudFm2X3BpLmKJYvWCiMnNUa9nAhvAo42XMa2i9jRdJAs2",
  "key18": "3fFj2YPt5vogJtR2NCid33pg2xaeQwxvJh2S3srAHkPyRHc96GwtcAv1tFP7bxWT6aTCJ9sPEmKpMassNviXQpjV",
  "key19": "2Yq6nGKmDH3sTULAuqrMCr2aycDFB7wwWAGqzCDMX4ua1bE6nAxYvrWtcsfrV57Phgq8DRriLi1xs9GdaRkjzXbT",
  "key20": "42q5cZfWdPkzf47a1AwAkw4hmBsLbf43ZTTZuLfiGUdA66nHKbD5inyVUqbASRysUuhnvxYjAaYMyz5yxSMWFKma",
  "key21": "TvEZ7LS5Uao3eg4vU1jex7jTuWNnvK8Uub7ufsBP6o2PAkyoVr6LnUdpx4hafzKKM2pWdekwxGY61S3TUvkAp7W",
  "key22": "2semui5MSkwxhmWTJFXDMyyX6QGgM6atCTwJBeiA9t1rWEzwYSeqzRVNFaKUqG4U1AQComDvG73Ae2CPYH5BvvSN",
  "key23": "2Kg8AYAyk9QhmyztXqP29yTRE4GHZJi3c6E3kkUNps9rLEtRg1eVmRmghzGU1T4nefEnmHATyjsP4LDknxrVikKf",
  "key24": "2jAo3aAQ39byrza3FBwpYFPdZ2Q67A1ZsaHbNnVkXPugH6j3wXNYohYAHjyd9xc6SHYX4k9qE1eL1pBKwEvNzzpz",
  "key25": "2pk6cMFAg5CbfZk3YUYXSgfhWapjNiXdzHTb4mdPTno4r5w93YRXQ3osbRMHoTkzt5XDvtMGNPrRP6ikCRkGjQmH",
  "key26": "4ky7ksQgrDj7ERdxb3549ZZ9wz1Q9hqPnNnfaHNxDxoWymvvKUKHG1wcURemoWiwucBHAsmXpSyPQ2gEX1ijQkeL",
  "key27": "3HUvspbiwTvzwkKhByD5iHhHTb4m7G9ApkgQTYkdFFotigP7FLnrYoWpM6XUdZoAH4dKAygdzJoYTL5tBAbTpVks",
  "key28": "26qhgpqvuZ5QS31dA6omPUP7Jdvkm1k7S3KJsFsU572JKV5TMm6XqU19mFQ4viqvCMxLbW1VauUpec7CHCkLNYJS",
  "key29": "4zaiqrQJEWb5ZGk8zXPbWNGK5oyvJ776pt67TJ7KW5WgitpPh9iGzAGrFAkhjBQsGNr39uNmwGarbN32fsCFi5nr",
  "key30": "FevYJW3hKKtGsnCkVgzEEB3TQxzF2st1NAsr2XD9vp6LGXxSUWVKhQavyk1yTK1YwPUq8yTYwCAxEwwkZNAASjB",
  "key31": "2X8ZY22FVVaKkUH1gK5AQ8WkXEj5w3PhrV2rbBoQ2QonUXbcDJP2Y5yW163fiBipGxub6b9YAnPbSr3voahxkq4g",
  "key32": "2tp1ci6oK5PhffkP4aw9JiGW4LYNC8smdqFYKbdtcsMY1WLimtZxKak572WzWgadiPvjMYNDPS8U2489Fc6iG4Qz",
  "key33": "58RswGECzAZqE89WcTjpPQnKZn8cKEEXMhtRtQHcGpTurJicMSJ8TpMv6SWM4wAdYWgcgKAPF3soUGoHjA9XQfLh",
  "key34": "2qVpp6f1yfuk1u3DdsXFTXBGM3MSdfViRrzxeAEoXTbVurR2oiH66YTiX4PNhCWPz194saFnRMWrraw2ipYzGM6A",
  "key35": "2C1my9mYifMkCUqYvVmTeGS6FEbff7NqWLXmDtMMyjt4yka9Jju5MT8E3owavmFCm8kZTev4Y3UM3j4cpvYKQVG8",
  "key36": "3nPHi1pBczps2XNiFN948AqTKq57hUTr4PJvspkJeRMa4iJmddRRYfveKGXes8NvEnd2VFC78VFd9m4KqXskYfP2",
  "key37": "kHz3Hug6ZLV7P2LDN5dWk55mVbFDkHKMr6jDNsy3JHwJpWmadGikNrTn7ZVY7neiEGRVYF1ttd5TzmYRv8jPJpE"
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
