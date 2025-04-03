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
    "2qnKt6JwMaVr1v53UF5W2KCicaQgc3DkujkWv76ngvBvrRSsS4qibWwjnQzhoHJQDgJRMmnKKtpVmEW2t5vbEBad"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JwmbXXkJh4xbbF3hr7Vz9NhKwtLCszVkw9PTSGGLCxLyY5peAH8U1MxzFXhJxxBxPey5GmKMjPwGSppvepejQub",
  "key1": "4BheeBDUAfUSSnXweCw9x88FtC4RjREwNFUDiESsXYrMVTRmjqzWf7P8sTdH9n456aA8vaFU4rNoSy6y2wh8Ruyb",
  "key2": "3v9rYJKvZdYrGNpv6Hu3zJC62giQDMXVGftLkqbzKukyUiC9nukCyN8WxEM1Har1T24SpQJSz355tViSXEXtoqaQ",
  "key3": "3UZZGVPrJZVxnjSSiF7ac5KLkfPfUQJc5PrHmpkt2eFabN8F2bYaJYtmPwekL7HsiXp3Rai3dDJ9Bo5TsSHfRAGq",
  "key4": "5PYVNJM69fSGKLSUpEhDQnGhB5X5Qx5GwFgDGe9ZtWKVBSfr7UTR1UtbDwQdPuqX4SgFc5tKKiSBNLzzhCUDYRDe",
  "key5": "GjWewou282xFgXrgM26RoWTdH1wcSS7jbscwgmvnZHSCRoHqZPqX2bgGjmwNXoaEgPYB7LW6JMLoKtrZkRRwBfk",
  "key6": "5E9qnovxAGworQKfiDWhh42rgFnpeUDmwZ1Rq6VSvzWBCJwozb6XyFAtC4uECfn7mWNQXzmCMegbgXhb7X7s44RA",
  "key7": "5BekmAQrYMpMs8kG6qaS5P6yfKW2Yvf5rwmmaJUiSNk7bL8DhazgepPPoYyor6NiDNnXnssQgMhPApaybkpD7sdY",
  "key8": "2UZ6sZBhetERbf86aPAh9NY9Gh7ZBkKyFMmBMNyCCKLpQ1d6D4ifkd241JqqgZdDNLAY6KLatRLMNi9kQjxbaCfM",
  "key9": "3gDatMUGSGBGhM9CSHF6JF2C86eCtXMXuvVi91QPN6xRtFaumaewJip7uE3tcA6tDvxeZPpYEXvkQUiEVa4tuDLc",
  "key10": "4YLbzTQSTjCvatjcsR4rSdRt9s5uLd39T9uVMz81pMwXnxMw7VWCESxR1u9XubFAqaAZZSKtiPBqNwuJSwxrf6zn",
  "key11": "25hmDqTcEC9gPo1nX1D72uUg5FNimkvsp4DMBec4eDvdZVBYmbwA3khui71eaon8L6C1uezKTtauAavzVQqzHqHe",
  "key12": "51pd2RcPXc2v8qJSAQzUo5iLKpuE5vtScPj8dbHieePEfxiKcnVK1Yux5Nhkd5aEGpLTG6GBoW3vZSPSMV7jcZcJ",
  "key13": "5xQVSAvjwhJqWQ7epoExtqL8AYvEn466q2YBfn1TfwYqkP5vMfe4Z3socXQPCmXfrofSXEkwcgaKpshehNB3HcAj",
  "key14": "5meKrymx5c9MzpSYFKMq6VH77sTwtRKq51xr2ir7yXA6oBqoJXxwz6t868yAkxsfKtQN4k3hVcpPMfHex3KSkDkh",
  "key15": "2jK72baM5tCNGbffQzwdvJRkDbdJ1FepyEQxKt89puLVc4T8iD9wGrG7p199isZLLbFFKFA8jYKoZD6ZoWx2yLdi",
  "key16": "2f3KvvpRMK4NzCGKtQmTUH7vs5kJLyjxaW4tfCobgbbA1MfiqMAMqkW4zqXzG25KkDDWSYQT1rXRdkXXnNuZFr7r",
  "key17": "3zmi9GMaJNUy2JYbWiJwBkvVzHs33rjckibnjm7SBzqJFLA6XpaFC2q2gUgVQ6GKUnGUFd3oTWE345xZwcw3hnQT",
  "key18": "53Jm8n93BDoRKGt1bojJxeVZoBdgmCuqVkGQoHbDDTqj6wJrhbNbCL8Rj1XDbJt48dMLf2yXpZxPxwR2QqNTtDMn",
  "key19": "5xGxLF81KtouxYZsgmfdcVuBFYhJg11AB6dxMQLfD8KTMo5datMpiJnUxyvYi3Vu2piuiZ2ugfbiHpqNuGY4t9vK",
  "key20": "LbJwzWns8bLvWqSYCUX29tb25cqQZNguvE3h54XUVMp8hn3U22kVYhWzhGX1ZUWrw6cveLgLFmvQt4622Wur6NG",
  "key21": "54ekUn31NeSYyJKuMuWmPjMY6LDKii8T4HdhUATpY6P7f6k5PFiaodxmoiqkcgMx1SHFS5xxiXCWKsXRNWWDiBfg",
  "key22": "2UeAwJAm2yepYGyT6top2JFW811bTHVDN76PuYJ8KYQZbrDicY8PQwKgQdpteqcW1wCrDKSct2S4nYzx6vsTSJX6",
  "key23": "2o9sFQbbc86gYZvy3tosgu6TsXuexJbVNyikBnDswiHWRbCrWRMLbejfAQ8U9SFnmMHFFVn591FWn6L1bt4Xhcef",
  "key24": "2iG5qNrbeRABig186TwD8vpmeU484QHom7D8sLBdkmS5Sce2MRGVGw7tdBcwep9PJV1xNcguYfFEPtYusefbjENq",
  "key25": "5BiEux22QfSzDoTUEEkgYCV66mBPSCNUJjFpXhUXNQLD6uUdeEcpoZAEJsCuvYajqWFksKQjmCg8gsqMLAog4KsG",
  "key26": "3dZfPxJge5PaDVNQL92E5amMhasyDpmvozBT76zfcwQXB4VSQNgB74hATZmQzH3iJ4SM3EeUWSDn9DcZPNTrMZVD",
  "key27": "2PU927meNV5B5FRvKXWEFDi51y9rJWyXF2yG6gKttmAQ43ReMC3imW3cUAjHA6G8otberQCsynGus3URSa49dTKQ",
  "key28": "5UiwnZhKzoyoNPF8Zg166p9PxrP7zGA6w2ptPdhERkuihcq1vzEjDNypasKqjKDbqabfoP7dzJY8ekrPe8zgYyi9",
  "key29": "3Y2PtuzL5onEB9JJ42yruwYQ38ScWqung2CTK6r6nYsat8D2ArpUQWJ3utqiKds4K8iNCSQiWxZapN8htTEpUXcy",
  "key30": "4HtMGg6NAkfbc4zXstQUpYUiLC5xoEEdrur28Zzek3F8Vc3QjGDipFVL43VjaVfVgQJLEtT98PvEZUoiEkJNJT8c",
  "key31": "FyhBwsmjyXhrepP1XCetVym8C23YAoJR4D593aiqauLUPw41ynzZeUSCC3MrkP3tkXKif8GT6Gbdi5AD2jCMFH1",
  "key32": "5fvryCz81PBJsCTMmV9NLmAPGAyiS7HvjNj5aFjRpcG71mCYNmX3VFxriSCmusE2xdtx51bDf4gyRkzMogJS7hnr",
  "key33": "6hs3K6ux1wfRwrUkStmDVGnsJqubgVs3xEiQ36yatxsc3fB9gH2prEW72ywQZAjMpXSLADD4oP77nqZbYUbaV5q",
  "key34": "5F4p4fN3rVjArgpmK5n7FnhjmhmQtRu1sXU536otDKvvhMxoCVdDRtWnE1fxfHRKF3HQK5hJ9YpfyC3kLMCN6qa3",
  "key35": "cPJbGc2CRFyJiHWUwTEsCi4z6DiY9Q7SdrTLV1KJ4XA4N5E6F6ab9JtxgkUbuQERw6FHyJu3coRmX3iSsndPKnm",
  "key36": "4AQmRqzgCFtbmog3ajA1QLperk5R5Jo8Bz3tsVM8LNVVQFcyAugG871AYAUz6R6uQbaGDeB49yH6LkHBzuAqMD6z",
  "key37": "4LR8DQ8n2ZNnGfYcdSJpQ98ng7gdgK1DMf4jcdnWvqpDuaVRKEtFeQEP7WZ41pvRe6nfhf863yk6UQa8xfsZMrhN",
  "key38": "5u8bEZHHLk5fAziN75zr9Nmwenh1vspLzghi5BfQg2FBoN9he9mrM6MkxuzGbCXU9jyyN1gjeGHQYvuUnjiTWrig",
  "key39": "4nTbSPFVjpW1EXaZ4M4yMccPjd2y8sgwA7BAhtRdSdQGWELEiNiq98f2YAGLtriB8i2FQaqywwDj5AS9jgnRNdaS",
  "key40": "48UTKWLGcLnAzJDpHvU99qHYtqWqGXXYs73HZXGwxym8odvQHpWioZxL3C3gMz9P286FP8jJSb99yJAYeKMP5bu1",
  "key41": "2NmzoxjmV5hdi9XTz2xErBWzj3BVvRxiGwxyuMbvCrP6iMngkJXs79ZQyFVfUT9eTPfAeGRTJPo4MLMDxZu8fJqm",
  "key42": "2vAuszvK5tvEnNNK226iLoUMWKkAJ2cyAiNFwYzF5gY3bC583wa3Kc2dYTA55FUToT7fgGrB687aZhdbFxBcaAy5"
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
