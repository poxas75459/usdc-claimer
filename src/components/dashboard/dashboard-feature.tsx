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
    "2jvxRyo6TzWrusnFvMtFD6aXZN7k6Gmw1t95TcmifbCkj5kTGCkmE4B4KCYEW8iT1TNUAQukWNgNQDFUxm8xEDQV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kxS74fzZFhe37snKqnnPsZVusSeQoeKWTgH6y6oxBRmjzDpXEtmjft6WuTHyDkGGCAzC2XUWhpsJkbHnsHemWFg",
  "key1": "A66v7H4xTkPaPyvjiqJJetVN2K1GZHnd2okvZGce58CYoWN3G5kRWGeoQ1NsCtuQEzzAGPrfnJs6MHNgzMQbC55",
  "key2": "3GkiZ6x4j3dCif6g9yPSJy47N5GvoDmorp2aMq7djPaGD4mupFsUsRuKd7mn5D9P5aM2Sq5RcopVUMUUZWH5g7am",
  "key3": "4PDGuh8m6aegGAGCcr59Mgq9UgAiY2VgAD4mqLVt7UUT6cpF2a8xXRqfys2hdmVspEniT3gqMSX8yee2EDoJawXi",
  "key4": "AegiEFQJ6qg1injQvU9bj44chvn3WdzYQyqVypx9i5auKcLkmVR7sjui74iyFwdUptpcoCwp6c5GrbAB5UUzxYU",
  "key5": "3DNXCeAGfvAacxPqG7ykm8Xb1wwibMNimCafQtbeTnRdvfSEkboLRrjELCLhjLdmjckjx6XXGpFqdkrGwD3dosR1",
  "key6": "28MnsEo78Soo3TrTGWrctWbGdLHgLrhrv5tQKruGKxgKNLtiHLeG7ENoyRDhTMf3nYMEMYVtm3v2kNXHGGPLbnY8",
  "key7": "5YiXAP8noZ8S4mdrArvyccKcAHhEe2HVMw84EPoQXS17EvMttTGsC8uyWkV9FRdFapcezX3Z1G6whG9Bkt9d3XEX",
  "key8": "2aydTrb4Ae9gpho4n33wy4eArjhQBwStmBSTUuzhaTY5w35hiVjopeMQy5m6udT7M31U1rDbkcGQVXgx57vwtaRF",
  "key9": "3ucxQaeZdyEFgdkEPgq8E5HZmYPRqUVcZR2XWPUmmTTn33j5Wub1zd7j3BMpRBFgD36Qr1s2TqL5YssXAYKv76Ug",
  "key10": "3a5KLg8zsRD4CF53ZSv7fkxq29GyAYCfghLHWpt872LU8RPKnsJkBv4e83SgT6Hhsmg7KH6asUC6hzCbDckJdLN3",
  "key11": "3XHqJse6UyxsJmJ1hokoAJ36A2R4uCZKjgEb3hSrR3DZZeQhMvU4xY12J3eahaow1MuYsmEZQx2CNsQZDshqPVj",
  "key12": "5KiVbMFTEbj9MrNbGeyNG8d2RPw6GFCFcFDDYEqbrWwHXDDUeoGdtpPHpyABeq8dDY9vwvnTaeBvbP1jguFaSmV3",
  "key13": "4dazDAjEfcFuPKgUnzgRLmbATWqt4UiZmEE7joGGtj9pWbQT6Rg4vUQzN91pU2aFQZhm6cbCmx8FyuSS3aaZ4EHu",
  "key14": "2r5bB4LHir4LfNW1Z1L8d4BjGcvnBrvgseo6QJ5HNSauJG6WoFiMMtXNzP7CvDATHM6sHsCNWgW5zcN9vAzHmwjT",
  "key15": "3VTaVZvir4QSvx5mWsDM2K9jy2W3bubywc6Fji6M6MqwVhwtCjBbiTyuJfxTMYQDGKMCzk9Q78kZnhptpwU1rs1m",
  "key16": "5UpzDaTbB4YRAewyVDmNqdvdUmvhwwF134RzhNu5UYhyvyDgWK3nzYg8eFW7qmaiSW9C4mre9jYmqSx11Svt8xfj",
  "key17": "5SbwKrVruxLswzvzA7bnrebXM7i3JhePXuThCdayrRXYydW4SVCFC3rMFyESsW2LNgkbiUJLGxnyThozbErWhcWV",
  "key18": "2EztfpVnZeTUzmVzvegY9YUoZCRVopWb2AFKcP3dEg11VNUpYMCBhAqsNMHisytvieFxVkUrHNwZhk1QPLgfThgp",
  "key19": "5AhC29EBkzdTNAaawPCFxR6v5Xdq6KyWJzSRyYmuB8LiPRacj7sGQyzn53s1AjdVR9bxD3Go7F7b6doZoek6QVtM",
  "key20": "29Tg8nnUvwik8B9dftxaHafqrmXz6dm2Nk5dGCCuNzbpYJscdE8d7nvTVbXZdHy4EUZELqaKAtMCwui8WtBps4fA",
  "key21": "2PdaNyVWssWNVfRkpJpoUd7EYMA5pj8E6Jqv4vwJWYejgYwsnwmkkTPNGQ6wVsCxmDE8D9bjYUwx3GCQcmvjWxKd",
  "key22": "4GR73DKufwModBDVBTpYKgSoaMScPWbM6KsmxNwGEn5hFzFHcEdJzVjAQ67bmQFCnoiTSUkHng3nwTkoDtLBqnDJ",
  "key23": "21Lp5wqnibcVVHyNASE56zJPARCL8KVYeLgfM4qPnDnhyuUyUAPgBcJrieeb3dD8jR6dNQEyMiGVHTi3VUNv2W8Z",
  "key24": "4TGZJWD5MiQT4Q51adWBSyMqWZ6V8hC1BUvo5CUG4174Ehuoqnvju3Tgsn9hAYBh4daPCpmAh1rAqKffLX6B2n8r",
  "key25": "2JMu6W2gqKZDSRteaATo2GnasLuDyNv7G39NViCbLrpQ7bgPoKQDMHMhjrcBnRn7BzNmm4ZaTuKyVEyxRhp92vz",
  "key26": "ZYjQqeoZjjBwLDqo6X85U1oTZgx7kuGeyLPxnGHE7bp3EmW3d6UbtxEk4JxecRyow6PYKGAd5VX16iiz2wuXsPe",
  "key27": "5JK3h2PQv7iMRZgBttZaBgdWuMnxqTuVYqyLj1VdvUACTF5yWSByGdKjJaDxojvy9Rcrww889XofnYkPoab144Vu",
  "key28": "fuxsJxfbmefRXLgCADC9DvkNYzkWY3bf178NtGP6wuKnVpjVDHBC7KfRr4hfDktttUUjeizUq3uwECRtcdyGKKP",
  "key29": "3cR4Gdqo8jnFwdw3TUJQQnxFds1gsTRA7j7uasY6256Fja3RJvhG22U7mNchDFtxQ3L2qRqghFrs1VZeZkWsMo2j",
  "key30": "3cXy4SDv5jJ6sGQvTLTwWoToqDZWsogyJFzVBz1pAwcyA3qHj7UKFcVU2aYi44XPPAJGJJDn1qSVdKhw89dw3Pt5",
  "key31": "3eU1QKLuonW6wSM9AqFcnY4ZenhxvYmRBdGemGxhsf7rR4jiZYQH26EqSqJTGPPHYfAvFhGVBMaXc5CsK9GATNfY",
  "key32": "27Nc46iLYhyeT9245WXWGqYzizBsUrM8tMUUyBJtKsnGqUtb7DsJ5n1M1DDCkU1HspphEppiqGgDiELZgGmnaQsQ",
  "key33": "5psyaTxpt1MsKejghYzLL86fxximj6iJfAXCUPsMT56mA1wqUP8JAgqGM7G2oFueB74sDETqHnypqokEdm9JPuvo",
  "key34": "52CSDwDEhxC8fDTqLkBC24LRkZq2Udv3dSQ5Uit2YHgM4TMdwY1FBg9NQp1t9bMCDxgjnkywSU1n3gMSBNXhQTic",
  "key35": "3MxJWHT7dvb174QPxMXY9MZTU1koNuNLGZymURXHMhnB5P3Bc4puWgBi9oSfT7Ztbsfwih2VGJ2uKDpYsjQLPR7i",
  "key36": "3h4zX89jMJkEYvGAQCYwFAzm5iQTeasqNFZRana4rwiz3HbSzY2Qz9xLTcsB986LprBitJnaQ6bRh3byGgkaJCPh",
  "key37": "UauuG11BrCFk24k6kPuATZ4buccQpfZt24Wp8bxmWTVhvfKYEsMw1VLMLeqka9QtBsTz8XSFJ4XAhcTCuQewAG9",
  "key38": "2GxHZuMkA8KdCEudEoxqx3jrJXMh8MZkcbuPwotJEQhXyJFZk4dwQ37YKhMUCZpkmphSnxVG91qd2PiKqCJREKET"
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
