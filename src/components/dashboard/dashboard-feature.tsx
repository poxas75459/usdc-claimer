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
    "pwm7n2qZz26JgVzmY337QA2jn7XJ4JjsZm3gDdMKpWWALU5w8rPij8JiYhGzKExLqgtkghgB3qKvEqR6hRu4pFS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oZiqR1H3EZRXec9jSEUWQ6cEYHR46vTTNtfJLXU6Et7JmCFvKZMGnuwSDrGr6noZScP7GJFX79wSvz9f4ydFSTz",
  "key1": "5d5H7sEp14eRaccBgKC6yMZWB7YCGqJ5reRvBcCMDnkiH3j3EbPFJg4g1Lso7ohDRwdyN57WgzJHNHzmdV4crwhQ",
  "key2": "3JkEdJq7TpE2f9yCJq53hKj6SJ2PGpnvUf62CQ2aHYT1eKbh1pEdDvYMpnU41P9gBxvr25mgPvgrvswmoyYton6N",
  "key3": "4kguEVUF2J7AGrcQ9imJvGNxpn4dt8r48QQn79bMxjZ62aBaqhKcA4XqYtdwKQaLXU944rLGW3hnaeJrxjchXMnm",
  "key4": "2ReiTHdyEv76ZHcaCwXoHsPJUoes6yMLvCjoptZxc2JRrTYJLBTi99kTZGCwH8T3oFog56o5UmmeaLGmx98nHndK",
  "key5": "2w3Lkd6q2iB9nbBDosMtbnT7EWmecLu6xhKL6S2qL3UcC45621m5aQLc6V6AE7q8DAEQfA9pRkBEfqgXJr2gbyao",
  "key6": "3ppMPaaxhBtQVL3UzN72ixsfYATs6JXHw4QX1dmgXRFJZuy4XNhjYKRHQ75dAu29eWijn2EXCyiSMjLH35nt99Za",
  "key7": "3L93qTbK35a5DFwXF26yBPr7tR8JVJ8b5mqFRwkZWpHtGgGtQKsHYaEnMHEMqFjhx6Z4pUhreRH1wGa1n7yUYZr8",
  "key8": "66PRrLmv7i6wSNUjv9ZbgnFoGPTUk3TWF1eETiKLe383x2f3dFHx6mSKdwxvb7omS84KPBVAtUsbPNFRzGLfvWGZ",
  "key9": "2sNvWudpH5QYKAqswqEGn9y9dnHZXK57TKjD3yx43xNi6Qk6DBcybGQ1jsdXRMecZEjGe5xjYKZf4UCTeX47jmD7",
  "key10": "4qvgAmRWVTHjyH6Yjug2gdmCbBLZKRiHyswUcRLvEvpcLvkfrGpJVcpJS6UNwDiSdzokmY8r39c9TfbVxqmpUC7d",
  "key11": "5B7SwYjamNsAK5SScNKrLhMgTZNB6f5AuTXnzmwz3dV9EXK4bvBc2s4vuqkdmfZVejv5axHgtAGMmRz2fFWTU89A",
  "key12": "376CDUsVHYdLqWAFJ6jBSDTxT6JYuuRLqXZoC36q1JWyAxksPrPuzsmfSmFYpQQHKy3VmAdA2uHQWb3bfxN24RcB",
  "key13": "BHA2qwiTEocawSJqt6cBMCXEQ8k9KnvzyCHAWamdyyzSYV55B312BRc393Va89FHcPqYM6iyp3bYpinJdVC6R6h",
  "key14": "typtQWGFsVX1ewnMUMz7KX2DJFoaArP3QibEQHTGtTz9wEpxi5CLqHumduHJ5e7RcBzDWYR6AqrEVMmP5hwTwCU",
  "key15": "396qJd9oNW6rWfDF7FCXmUKMf9CtiWYrH8xgVyzkKZN4KYNftM3AK75J1q3Ntn1vAHgXjoWcqZGzotMTTv1yTfN5",
  "key16": "3UrwNmbUVtxCiWwZUMrRWVCLuNqGdGrrc4RehdLtf9UiPwHndbgdywSCm6cbT6JhNGdB29Pv7VkdjB7rsZAiMAiR",
  "key17": "4ni22w7AYRCSbFyts2FpZuN8KMMKNzdoBFsGGmr3dxqqfuEhzTFkeX5Pkzc5ihMCYsE1did4HdBPgMegyocYiv65",
  "key18": "1UF5CS88ypJAF3KdQ25KnJcCfy4JJz8Q7uHtmbYxAeaXowLfpgXtkCVg5j6DR86KTN9C7YwGBTu7sE7m2VXA4ZP",
  "key19": "5NeyAm1ZboeguFAbyDq3qEFdm2pRLQQmuGXikQZZ27NKBxUF9jLMpgg2JV6JVzbxUtqFcPeprTp2bCRk5mwtHbC",
  "key20": "2NDdoSCxc3hhNUhf58TrQKiP5arwTv32NMDKr8MxyRMXi4m85wy6UrNfM8LhMCZfzaGigdEtxgZmTAqZ7A82sZf5",
  "key21": "MdxttSHQbnZfvKHk8sXZHmK3axpRNrCHciheWJV69ovT9U5XcJd7Ds6bHS41AgTvB5zWLtYsntwuqu2uB3cegTW",
  "key22": "5z8EFTjz9hxbywdjmf4LhTP1Nfx2rjqqDYmRogqt113VEVsmxh4LBqgneVnxh25LNKJRdtcWegJir7hqpgZuzWFX",
  "key23": "2FVFAhCkMbD27oVrqkxam3VuQypy1anmEAQdv2rpGWTQxGnGGtpVb3PtYExz6g2J8qZ8hKoDWUvWcQm967eDjAaP",
  "key24": "2Lyjfym4ehjxhLWpdETKK4Bf6ZaCPn9GJ7h3maGS3H4EqBiHeUeaUQnPq1jg9S6dgHXg8zgWHPjK3hcV5KLoS2zj",
  "key25": "Mo4Nckf1p8ZE1HGL9dx8N7B6vPEysx2TbBaS9aYKccbGD4WzVZ9SrF2HrsUvwJYCwDhGWH7cGhkAWMs4NaFndnF",
  "key26": "5ZsKnEiiRLJFVFMe9U8jUDF1B5ScPb1RAoCWQKfVZSJys6QcH9ErYFPfCiatMTVkfbnYS3Mb6Z9oH39DmdH3Zxi2",
  "key27": "2iGMiSHu8NRgUDbvuYS7AN3qnAt5PKHvtF1hL4ZitXFfe9bBCweF8rf6bcqdNBsoM7j2L3zJrPf54RD9EhbEW9pC",
  "key28": "4KxcoHhLamk3RqKN3gJuNDnfRV7pZAVvDJybeX3SV2FBYVrAGumAsweBnxBLbmkWKbVbkeRf9nDuGnZgmdMQ7CVP",
  "key29": "wQ1PKukNFt8CyPKW5gAi2tUS8DLSh1HJgMDrYUAFBBfftdETyU8tAoZ9dzX1abRcKwWjyPJn6mEsTargNwr5PEA",
  "key30": "4fVkLPdxDLj8zoucC8v6ko3bfRdio4crKdJqAV5ZJc5WiheG7VJXpA7HVki8uTsdXBUf5Pb8uVpLPdABrbaorfJT",
  "key31": "48pGQGRm2DNGMARXWqNEP2vWcvt3tDeJ5i3viXqfGML61LdqGQvzGmL9Cmb3pWTrEtpu8gFFu79ZzaT3rY9zX31u",
  "key32": "5JhQnMjD454R2486ctNYReri3quHm2rfroEw3R1VThf9eSTT7RGor58zvscppsN8KCkwAGGYwA1RAruedhBrmR9V",
  "key33": "247WWCyccZ2iDMRD85x69xfzUvHFBzFyvVe3ETHWNTGxY1x7cyde7AunsRTXmwXbeymVM6ZtiaxhA9EYCs3TvL3N",
  "key34": "5Y9niU2NxS8DokFp3rK6GtLMocCrssgHuYMqQvuQx8TCpJUpsioLiaNapMUpauZn77Qv85t8BpukeRYiLV2xPZKD",
  "key35": "56othLiT691ui3aMAGTNhn2Ly6U1rQSQEkEJS7LPdEBiJFeEYMvszwZ4smx2KKtzyenxTLUucWVEzDteMRqqnHPU",
  "key36": "2o9ycBKY4KQKuihBjttGiGnJZedJ63CdRpp792snQ6VMg2R76F556mb9wiU9GQ16Xk4yaPehtcFqsp1reJXooqvM",
  "key37": "2tWHR8WhVn76jh863hhAqBBYffPUN9E4tkgvHSyVUoy3SJ5AyPhuGRTFxEoNpxdpZBLr5Ht54Zt7J4CaE1rNu2Ls",
  "key38": "2XRE1r5AJZo4Lbe4XWYwvqav93q7py2tfVxKM7fqAHyV1jqFnm68j8yRjPhCcvdfnzRqoEgYNXgKTX4UBr1e3mWN",
  "key39": "5rNAkki7rrseFDzJnGb4PFjihMeZ9fBQvgrH1heDvytW9kyorQeJWUGodKSKyv9KPFTmkUYk7xQCduhkF4Hv322",
  "key40": "53tBRz4qveZtkd7jg2mjNJQrzEzL9o4tX41xJFVe4EVT5d2LEdu5A33T8bxoge9g5bu4x3JsuwmHeB7cnw7CvNUY",
  "key41": "2MiV8AbyNdDsuvKCaASSfMMWKHLYqoEXbiUweWngxU52V98MZPF1wuwjL9sfZkdg8fCyWMpStyRZ6aPcUHbGNuQf",
  "key42": "3kaRMaheqy2fyjJLXFKw9dNh1TJ5t43E9gKqcDQcytnoYvXh8U1SAXCRD3TPDhfbphGv9K4k5PHqT4KHNAtiVxsp",
  "key43": "RKiyNR2vBD82jasbypiJebMLLW2P582m62jqGvMCr9QzzVpFSAJN1qwowhPNZgKeYt68JTV8QDb4WeCvazKH1wi",
  "key44": "TgGhiyhv8mHjK7pQfT7YtSmZVkCYsqrfSrHpRVMbmC2BWSCcbu4RDMsG1KwCezccDVeDiZDv2ZqddtHzr6jDk5J",
  "key45": "Z8ob38wBqPgygTvJ9DPPpzithmikVW1eTwnyqnNeGzUcXjRtfsZhiz5byfYaXezbxF2JhpPEPdjNtsnABrjM4zu",
  "key46": "CgwJ5t6YQDwrqYkMBNUKGbDmA4wUU5s22byxANWaUNxW4AeUhT18jr5kRzXjjMhFKDikhmysJPqfH5oK9mfwUc3",
  "key47": "3KpvvDAXzMZ6aqqJVyTjBEKJE396yf1HE2fCkMHK8KFPJNQuDyA4mGzMnCqSD9GjLd7ET2dUrGYN1pLdBPF95Ddi"
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
