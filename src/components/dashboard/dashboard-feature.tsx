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
    "4VFBSLUbvg49JMVVMCS3yCZieiddde7hxnP3MMXeztsj7MYrWZp2GEoRJFSNpKvnpWhgiiVcxPJFP8cXiz5fdCA3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34F2VRCX9gqKyxsZ8eAwfxWsTL5pWNRkFqrnENXMRGMzhywvJ2o6LnNaQZws9kxrWpW61GZ1DLXmHURAtnGfnTTS",
  "key1": "3JHpcNxSCw1u1iQ7jXsqKffxK12EnVVrNR56DHCyefPRuawipvKvjBg22mnBCHZdMhnAKcLmsWcQP7XHEt2ViNXz",
  "key2": "4DDFtA7QHjbBw4KcZGtnnBeXmPTNXC365Yc6bBVM2NCabYX6nMVi7gHyxnw9MkgHysFo4dTJJCKuYt14xfvjeiXz",
  "key3": "5pUoBUgRu1yTQkSriH9dpQU6Sk7QF9Vf3sXMjkL7tMfGyGrVvCnt7sUfFB6QAGdoSdDR69ieQXQBBPKqt3p3GQ2D",
  "key4": "3m1SCLY5cAfQaxcDufMT69CVDNfXy2j7yiqwkDux3U295aX4T7GwCejVAKJLntWZSjQoeDHxKQdqzhzDju5z4GmZ",
  "key5": "5zggyoroUeTTZkUsQvxm4gr1Mdn1ghK4JoSdgPLfkEnYmsAyiW1jTS71jC2kZcn1BZT4fcTSGUf5hVoFqVvgYv1P",
  "key6": "4Sum65W2eqZWGhxKyR2QsmNTAnr1xUCa1LEiQs8P1B6Rh6pkrRhFs91jHzE9gHikBWVJPuoeZwZ2kgnGYSzhDL19",
  "key7": "2gdCbkkLaF6aqFK8EYdEnhPHC2gmSg9dD3zXyqHNX4R39GiznsXZRRRW5uPruPxbUmB8r8sRvuiawdAxJLYWqG18",
  "key8": "gUFWjT3oq4pNQNXTJtV9qbAHMEH4H4wrtei2FGh2wA62NfGrPPoVFEmvaUNiFJAygtcMpxS8Les2LNq7TN1jo6L",
  "key9": "34v6mE1u57ZDvjQbwKRd5S9XPHzXSoASyHQupwgMsWK4geTjnZ4cGGD4kJqM6s7icAieJZTfvCQgAL6uhdehUAnu",
  "key10": "4GvY4apLP5C8WTQwRTpSfd68CrDiprF59VXB3Dpq6vjXT5PJ96DDDbASCvzHSFaNNo244kcY1qRG8NebpiHpKZYs",
  "key11": "2k58XhrmpqUdrnpJBJHJ1k5Lo3sGcWjJE6u83fsYQSv8o43uySRM8EVp4NuPxSzuaG2L3k3w578mn1WGRX9EQArE",
  "key12": "2rvALA9HMEtEU6qJwxCUXz9WrytEMc88heZZz9z3v8hpAk7nzmzUX5tbbEK2vsmUmWcjSGkpXpgXu8Bzy19W4hWp",
  "key13": "9Y4D8n2cxh2ANk25gkmxEX2yVNiZh4xcJmC8NFAkJNkZijrcsaJVXtd778ghLRxEg3kkXdnQnjtTuFsq44HxqGt",
  "key14": "4JsqL5JdAv8FTS5HeEfkUSXn33UqhvFRy4guXe82RHQoWpk3kkqrQf1ek6h5nRVQNPjJYpygbxGzwZmuVTAbLake",
  "key15": "4WC5UcukLbVC2Kuh2nAcE9z8Ss9LuTp7ZdSauLFupsgNEJPhr2cP5csDZWwuNQwuq5x1SStFJ3rvbz4GdXYcyAqP",
  "key16": "4kABHQHHdKQz4HBbGCohKuK5VkhTjCD986Ui8aw2Q1Q1RNBWZWeMnyfdPE54RBpz5ST1dd6AEZU1qpwLkXMLP4NA",
  "key17": "51tJAUsE7HPcA3ZQfzbR2LYnBwm6GfHi8ZRdKP7DJvnd4tZ9KKmE2uMbnmbKh2wQ7Va14Bu52ZMVfz9qRN7cojJo",
  "key18": "4gCg6o3wvoxY55RSLkdHF2omppQvoLtvaXy9zmWwLYbQfwvnT8dvTGNcoSsLRMQHkJVKw9saWJMPgxPCqDJJc8zY",
  "key19": "2EWeUqzoSsn7mWLEYLXKXujQtbY6b4JmisEzfDpGhDoQgKnX4gqJ8skPafhN75ynVfaLtHEeKJmrV3xV9KwoHQ4f",
  "key20": "NEs8dxPD9hwRfrnfNqcBbBS96DaSSKEFRv57EkgyvtvUU2RQMF1DAfCh8KYue4aZb7dkYv2GGyrUuQ1eStDWFe6",
  "key21": "3wkpwcaBT88wr8YKPxM2PoRcCTYMJfb7WLkdsoNeJEM4MmEgHmow52Y5Bxqix7cxctcMpd5cnivaMiGMhpEJcc3M",
  "key22": "2PS4DcdTdZA1ugCaFLKbzA9Mqx6QDsFRVTsqsfeK6bbnrxHLc5eVntqb4uumXTEBtGjgBwM4ss2HanBZnCVPBXzX",
  "key23": "J6f7nNbBLFzMo8pZNxanxa5mufZ4ZkaRPwvzXdTMu3BMeA2MTKakAM1Y79AEitfPDQFfzjZKEYVQK62ikU51T72",
  "key24": "2fHnZH6vq4Vk7WztYf3iL7DXZSUcpabkFwAKPXp8gR8xMC27ofuGmQUhwWcehacqgajZnmoj1YBdtBSTjH6ti4wD",
  "key25": "3avpEi1roQQ6P4LTMYQaMTrHf6YXrvtMX9GrDcrmH4XkTn4iNhy9XrC8ERUi1TPX2t7DJsQva9qeeswuvf5dka4Z",
  "key26": "52EkLLpPWH9yyarjPUPXYXX8sZgaL2feTLfzbVRq7Jx4oHCaivMkAixfCNWSadfBz1QS3PqvfpJykWEGtHMzgDsV",
  "key27": "229VNtcnqfxvGxe6WzWFA3eb5wtW7LYCfdyXcx7DViBCztqCzXeJGeB1fmcJcHsdoAxdeZuJcRBLmE5xU874ubMG",
  "key28": "3e1ZtCkSRP8LjT2fZmXiYw9GZCVq8fVCRqoVrkZoZJ7XcGe5B1oikJUqvAA7fFVWNNDMMhMk5fmhd7STr5NLEK1J",
  "key29": "3foKGHHRSsMScjgVAJErJnzZZPHCanZW7tVZZnqRVRL6Q3YkdBKJgShv9Bk7Ma6559iBmQemTmC9BMPh3588xt6K",
  "key30": "55wsoNjiYNewNWPssfnFngpnW5jJfM7aqVBVgndVggyGtZ9eiy5qdBauBfsy3iG4AEZ7hBji6zK7H53THVQdUemh",
  "key31": "hXLX5WNat17XgMcL99i5qSZbT3p9Bt3qXXiXt9o9tsxJdVCxvzBaxRkebwxWF6T89iULSrejmajcjrQt45G7jaZ",
  "key32": "22G3sXniJN3G1wBTwkDK9akNAVFc4UFNcySZmVewYwbLssQwVWQCx92Rs7poMtoAVvatW2ojGhHj6wxdgAxvNVYM",
  "key33": "3caapQHdkHr5LsANV2LSULh8gJC663zJpPpPUV1bCy2AY3zDTehnZc97577PF3deapreDrV9T6AWmVC9cmyirV6H",
  "key34": "5PaBAwzNqjQzJG9Yy2fxd56J32vPoPubyfs8KdQ5rQowXwEWpLcVHbfFXj48TWQYj2xsMjb4jFKMSN9u2QfDPk1d",
  "key35": "5LBettyrt3p776TQYKoVRAQV6RgzpbrcbiHBwrXxzGhgTuKRyJi6oXGZeZnFsxkyT5MR1em5krf6iHHVHaRFZKPU",
  "key36": "3SGNTAC4d5Ed3cHtyKTPUb5QCCJNoiayMPwkDYeyFnWHiYHigsanmxfU6y14JnGAi5UED43ddQMwGxeZ1BFfLYup",
  "key37": "32GhQC5RXZVmmdawHR6eBg8BN9toNtM6SQPx2PJ4fQ6z7Nv5rFdgvjAPXKukwkttg7GVo7Kno4RBv642QMFDKgfu",
  "key38": "4BnJcqBzSrxCvXoYSTRtimtBxJGR5w5VKB1WVDz8Hasiprwx65SU7drx8ivU81MvMTqznHCabpVXW2vDkS1bkAgF",
  "key39": "5xs4ApSpnf6vRtPX2a9Uxdpw1K271KP5dDWwsez7RiUWkLZpHEDHaSVhXeNx25xo2pHAE26EBF26s827NBdQ8SAD",
  "key40": "3CMyAw7QswxZZvJBQBbS8SDaVCWgXp2qp1iexiLNUB9jPAGsmdrU27v7KX6nxUvV9sqyuBuW2unDtY6vHbrx4Xrw",
  "key41": "21Uapa4BezigYj3jem4pH2vr9JrYWdw129VCAPMdwSGBUD2VwHEMAWeE54VhP6GgccYaGd9bcy5mhay1FcaZzVHd",
  "key42": "3zHaqBoJ4c4j42DhisHpZmBf9D5pSKZzc2kC95v6CU2hR5khJpNh1Wj58iNZCcF3B9K5Y1et3o2D4a1N44uer3Xh",
  "key43": "22KDdDfJfhjRiKVvNC7APdfRV6oxW18C9U5G49672w3ZtmqwQUf2XsFpjtjuUADJck3wJZaSxZ1WLwomtWiFzNPV",
  "key44": "2D8YdVrNEAViEicwsMTwPwfcBgHWHHbj2nwLqPei4DmQC4vCe2KE8EmgaEGNuszxaUQeqgJSbfG4EKR6HHi263CE",
  "key45": "3KwS8sVbWWicUM2HWXNwf1wZ28zkhWQdaMBNZrHaEQiDVfkRk9CBJNTywSMVcz4Y9s6ZbBdTocdN118kj7pvgsb6",
  "key46": "2gjJk3fARY2SnpafHeKR42no77whxXm3wtoTGj2niq7kH2RMGLnXjuErSRwKsbPNHf5SPyhbMiyvKUsCKMDZ3AYh",
  "key47": "3AeLjxLQMxMaeeP4LCset41uZUg4fr6AcoYxWmfEwyTS3mkdZtQsvRE1DGRNVdrEsG7TZaJqHiLejgjmrtf2xnA",
  "key48": "2BacgHcwd87RKvCMofXqmAwEPHaz95rXYXPVaMsShjBPbDgiHKLwm3qkq681bJoFSq4PBxbZDGccWgvGPJ1qkvwe",
  "key49": "5jByfvLYr3EZAvMDdcxDRnsDU2QNwBUy6H8q9PBK1McVWWG4xsKcE5LWuG13Fcr39dB8qV3u9tQZQrZd8svNv4c3"
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
