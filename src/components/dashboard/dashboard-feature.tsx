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
    "55NND44haDjvhKBwSm6jDEwU6Esmp3fmPwjMjdma3DbgNmXqZjemVWSQq5ai6irSM3wqMcpQFxBi2hZoWPAV5uD5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PNJrx5wdPy72UFJ3thJnMpFY9VYpLqN8fAKcrf1W1TehCnp6zNGfjVyzKMsEyta2E3J2dqHJt9jbQpsH68e2MW2",
  "key1": "GTZoze7SPEJHUtJwVkyg1aatKbdCSetv6NaJD5SjavxvJxyMpfjdWGHf7CsUNPiHKpvjuj93XYTWgyq9v2cB1zH",
  "key2": "28QKixJv4FuwnTkVWZbR8hxM54vtjjzwkcyW9JqwPo3DNi8mfQS9L6oTvDNbNVEqnGGS1tDzZtMZjCFZVWXWG4Xg",
  "key3": "5u4GNRUV2XnTFSjjB7A1rbyUZTKjZRqnPoS9HYypq3Bawnp9arNEb26omwQgVV48fKBg3SFmtPf7tCCGEw1FL8NL",
  "key4": "5zH8FBzXhPBgXZbHYebw9C4PSv3Avddz2P81fWBz87iS8src5Uq2nLLxMXYnVt15e5Z6K97v2wTzPEoZHLuyXbWE",
  "key5": "524yAQecu1Lqf1298XLgwzdQWAwuSiBqMyvmpyDreGRNoDRxXkr6d5Z532BEL4F6Vv9GYRDoAeWoRtizyr1NxAhq",
  "key6": "4SDMDxrCAHLaHLTceKww5JUyxqSpCsNfoS7Z3c68RhZuw3jiyiDZf8xSkqmd7S9mQxVZgxjm7LWWSYBA5CfHRCsg",
  "key7": "25qDT6J8CBkgxNHmeTFWai96UHKxumpxeJKXwnUD8M9YwkQgA5LjTCdxTribetrkFobQCR39fepUhgv3m45iMXQc",
  "key8": "4G993UkMGu1u3RfxCWjA9mR5WWsBzzkLbsRW61cvzyNnJ4aAoCgFhMfwEfEbeE9nkhtuv4S8jxjuZkdHsGpa2apD",
  "key9": "3BZgAJFMNbwXAdFyTdL6vRMnAzeDG2N3zQ2zRxFSfpNSFPG8cSDrDUSm2Thg9TUtDduhfAgT86QcVa4todkCLaDu",
  "key10": "5fg4y1D84n1145e8wwCZEtUm22UdRZp5QVMCyFWSZvPKpUSkTM8QLrfVXj5Q4trkg25Xxca2yagvmfgVtWhFzDVw",
  "key11": "2fArhya7UoGQ8nkbedTCGfeSq6VgwqS9McF9H9PtqL1pZWFVPQ3QwP8YW39eTW5DpF5m6uYK97AXhFqS5ZRX2i9K",
  "key12": "48vYECRXHGMbf5J82rAFATSx6XY1Y1p5C3csLG4nBLecnr2Xe6MtV543ypBv2TwfDmoHE7xjkjBBGvN2KCKfc1pF",
  "key13": "2QNQDvXow3uw9NRshxt2YprGHFfb5ZMxTfWH9qdXKo9rxGVMF8BceexMY7Vy2QF4UuJaqvyvcNNvpww9XM4fr9RW",
  "key14": "2a3BhxEgv7AExLBYBWmXumz185YRPg7e4dzgWbg3eWEMyMQG9kGqXeemGxRWBrQf67S37oKSqr9z2u4S9dbJ1ktA",
  "key15": "3WiQQWoFzruX3BKCjda2Ps5vrMtmJvip6KtHx6isJ1SsjFDAaNAyPP51e3JVthwZgW7EV2w5ZfDd5zRqNXStqB37",
  "key16": "6215WHmULc7Yn9uSveg6GSLBFRaTsP511PGZCKdKL6YZPkaR4ShbL4CS1xDemcyH8zfT5KMrwjaK8ucz5yUmiLvr",
  "key17": "5USMzuiu8wUJBRvUvjpzMeyv2bTBjQs4mJCHn9uV9q2fkFUgxxkRRMPC4J2EoveupggQYe9XyVLNBUmbAewZBuWL",
  "key18": "3zNaPQTHTQHAy2Ggjr1tz9CWXh3iEpnmLUScbRsz2yCLNAEqYiMJAk2pcFLMzY7h382b92FcByoSbUoiAPbeAZuL",
  "key19": "3euRanjcqUctLEPZNh51v5Lw4A4SUstbUBnYnF4bHkFAXFAQ4DzaknUKUWdEktdbF8P2i6tTPdSn76oFPrn919bR",
  "key20": "4MzUnMxGcP1JVmi8HRgh9nXCXsTh3g4yBoDvwXSaUVK7FBY5Bn34xTjbR9U2JMjBZ1C23HaDfRKfHk4WpvpS5a4L",
  "key21": "3npKz6eBh2WYE2p9D3qi3efwGsVTK2NJZkbCFakSsCdQbyc5Yb1ov2UYbrpjPbrGZy2vR12YLQXuEZBrJnnMyBy1",
  "key22": "1rxVVhzJhXiTAboGbdTYc7SiP4m5FsUn36AQMGh6osErjE1Rb5JX3cvGtXtWwno39G26v6nVY9B63eydkuP5BXe",
  "key23": "4E162dxpVY6xCgwUKN7LiRenDMcCUEEJDTPKkqi7pgCMRB76QnypH88UJkJdGpMaCLgFUJKqapyE9VphbdHZgJzU",
  "key24": "3Z9ueV3uPngW4iDkpsX4NXkWkE6KZhWApvAYLvsjUvjYfvsdM3Xg7BZRYYZboKcrA8g35cWhoPGeTfQqcHhksvmP",
  "key25": "2ZZVpVhgFoHUopnmzKaTaXRhi5iDmAVzpebEacqKt9mSVEBzxfbacVjH5yGPTqTmdwhy7VTzjKgUWN7WrQvHBiWN",
  "key26": "4SXpbV7SKg5Z1pzQLMhnXNJz7sCSaeKAg3iEEXY2cUSEMo2a9SxnNjwZYdf9oZEJrYcxWkckVRRDfDrhjSBLqps",
  "key27": "5Jr1xBHq42WxC3wjApwMFKRFYmDdqXdQLwrL9RU4vRmoZEFQqczaHnyY9pVuFKHqFcmQ4FhkGwboRgzpLk9KXgQM",
  "key28": "2USxzNy5rCdEYSwJqFrauxXxZJHPNBGypqLxf1uKGPJAsGER9Przjg4wJt5zFcv9XfYqYhE91qFzegFjooz9cBqW",
  "key29": "22s86PxcZ1PoG4Pjp4QMnN9dqc8yGQEsSRJPiW3vxkc8gwZjEbonUctrqMjCiUJ3T12EPPAZaMVpCrofKNEtioJB",
  "key30": "2X3W4jiEPqGWYFxjEKCicMbpcWHJDw5nf1pw72YxSHmvHL2u68Eq5rJZAbVJwHpaZWLC4SWWYLraYP7PdiVREat7",
  "key31": "4XTWGif7gLsDvFbRPBCpNwZyKjzTuBxJWgFkxXuqT5b9aqrA4TvYBu1tM4r4uoURmwPcuq5e4RYUTf5XDi3T2cTH",
  "key32": "3TqZ5uUaa4R3KxjGZ9QuoJhRKcFBERjVcZ545FMTbqiuPvGTqB7WEcqBWdrHBaD8BxueZbtDCgATbqXThg7FPz4n",
  "key33": "3bU7i97yRHXYFUhb8BNZgxNQHhcm7GqhvV3F7qv369ZsdiT3YJuCM2bKY8z1WCGaaMor9S5exKcUC7R66YmkikQy",
  "key34": "cBXfPveRtZmWcofk93bmBUSFwhv8yEbXSbFKRS7G2Y3A1Y23pWgGqheUKPVvEDZ82emM4eunngpJAVjBxsYPZp5",
  "key35": "4kKWnDrwd6dsjMKUrvY7Qus1RQuwaNfT8NzS6HFD2uaVQhPMNZY9oMSeZij9wzikG6Fs1RcczHmomb9tZKKSZPi4",
  "key36": "67HKZfkLzyvQ949rcriiBzjruyGxmd6cRsKs4FJKqjVvhgjjTSZgVzm4PSW67Y9cVCaFXSzUgfoiaF2aqopPAGr1",
  "key37": "2Tvvr45i49xNqaMnQMNNji972Xtm7g8rf6dVzxTrZcoTjE5rgPJhKWntmKhenSdxgUMzRuozfqAtD1Goh4WGx1o7",
  "key38": "2ZXVxvf4aPRyvghbcysT1f5EZJPALF7j2YdrBHEqT2EtXDrdbDd1Ga5Dyxsus6NiV8cSLjpFWrNf8u5bRpb8V7fb",
  "key39": "5mu3LAvuGkF3guHyNyNwKShbCXH9hy4bugKm7AXQZ26wMaSgpzGuWRmpSxC7WJ8gAdQ9bk8ejSMFjaibrzf3gHdp",
  "key40": "2YcJn5cxR7mgRHNtU2Qax2g6oEdAaTxK9ZigCNsa63PLsyTqksD3ZWYUGchGikCZWALrSue2k6YT5j7vLRH2Qgjr",
  "key41": "67JQr87ZEcrv5gdPbqvhfSWtMgASCiRWR4xEy47UCxQQvMLLoAgcMzqSpfuAFgpP8XPwFFFn2QdDkqSceXQG6doJ",
  "key42": "hwT6YFQi4BKBsfN9RwspViDAogDnX8e78SZMLHaGFxA8VjQM7EZJbzYSNQy2H9UAyqGDCc2xAHw1HJ42E7dufvM",
  "key43": "wNjvAcRdxS3Emm8DwwuPTKDuNbbn9vkukJduZE2tAGXFPSsgTCMBh8LZNN9Qov73rHQTCyD6srfmg4ZHxoZJuZi",
  "key44": "5GoV4w2GNNX9vchCcVPgdbSmPTwL287WvqZiefgju3ogkSYY2HrYqeZ6ECW1dogBgDeL5H2pTrMuSoinfC524qJ2",
  "key45": "2G6eokSPkWK7yJrYaMtDAuTvKbEUDpvEzhJ7Ngs5AFHjoGx99GtCpbcwCZf3nbaTjfHUsyhxLdnNE5cGZ53e43SL",
  "key46": "39FeK9JvqJGPoP4VAB7VGXDosig1dfMm4KT4vQu7gbqDmeCxnQgBBK8GSZuoZoaZM7bNwmKnkHUdFe4e2V9RBA4F",
  "key47": "2s49bmhm9EXL8g5SKsoWvHsaAPNfC3pb1vbTWAeUoWFBtUvMitcWSptHrsm1sn3d7dU1DjvWD2o7HQ7ENVGeHNUW",
  "key48": "4EKqHV8txdZv8uLqz2Vq1CfHDdhrVsNd3RivtVoiJCBSzn7dK7WiYZbqa2YyUdkUEdDQSaB4Lk9Cs6kshzf5vn4p",
  "key49": "39pW4adZgPpZw5VUgZnf19E5KmQBcWVXHDDXfsFKrTaYNA7m6wkjAuECVs324RfVsdoYNzBpqt8KChVHXT6tjii9"
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
