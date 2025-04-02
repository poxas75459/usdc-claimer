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
    "5VSS5XJHY6VnukWCQ7GMJNR9ngueiQ77JUZ47YgrV3uKfJpzR7XnZWSyxW6zznXHxPLchbdaHKCwuc46ng87CbKY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u1s9ErenXYCRA2qk76pJpuaPXg6w3AwR9N4J3WJATanDXbqdVoZgnwxr54B5m6iqMA3GFdpswabT6aDs6jDPmE4",
  "key1": "5Fkmp9ePFeZZbmbTTh3HSiX1si2xn95Pf17bhgq8SSyVz5VXTe5p8mTPsDdpKtGA1YjKdsxeCfCLtbAivaG7Qhns",
  "key2": "RBkVZowKSSR3ZYM5p2yZXUhVd4DzjwbBCrpioX4C2CbSWq8iu2TFF7ddnGbuYfvb8ZW8rnSByxubKDGDARTPqMU",
  "key3": "3iF5rAQosWJfUpLmgGd6FMsGaxgcYMgKiZXbmcPwdcdv1MjrMVRy32x6M5j9TmX3ahaYcWZsEGLLyhQEWoundY6o",
  "key4": "K7dtwjjF1pDMMLBzD2hvr4mbsMo4jXZBRtWKJmQin1GNRWht6YA3QM6iKJ3B8gq75H64HkApmncBqUN2QSVpYnd",
  "key5": "36jkSrib5vhmTLarkaDahY3R59UrCNndchKnbcqj7ov5EqmEjRXBdFNzSmwbzHYcvBwWfNQEoQGyRcvCLLhBkHos",
  "key6": "2kaQ6sq5S8GAPaerKwQg4bbfur3JxhwsoYLozWE2JspKmXGM8VMuigNu7K66NV85gsHe3huD7Kscx1dngCy8Q1gT",
  "key7": "Rt3NZkaLr379A9oKnjyEs1SCLMccTBdhRyw6xSkc4v3dzadDFh1XoDhunfeRYG4fQUZvPDbRfniKcyZ3hkqQjLB",
  "key8": "52Hyw6pDtsn9SaPdhiAF3fe77FvSNjzZ2DMySUXDPfxJHuKLzhHVPhbg3yWQrTQycZbve27dLJXBNoCRMnGq8RsV",
  "key9": "5Bwoh9X8m7KATZX37uMkxBt8Ygk5ZX7mp32LtP9AQyoypnnxF26UN1NMcvdJV4d1wYgg28cdUjtfrpmVTdZ8KpKE",
  "key10": "67oCTbFsbT3HcUfUfgkqetptPn3VpR9mV1SSrWnN79sm8jRenV8EGnVN31KbT4TG2muTngVhcuWYq98FWRAxsijw",
  "key11": "BotqWRyTQYMJhwELXjnP4CSuuMkPHUVTSj65G3HNKM3kJEftGNs1FPmUirh8d56oxvzazgoALSdY6smNTXe6f8f",
  "key12": "36funzbZ1sdtTRhveuDG6jqTuGTtAiCir3B9CUnQJaBD348EmFbBV2E4vdGPeYZCZvQHbtJUHwSD755LNEMjsKya",
  "key13": "3dC22S2veJfk6NC24Q6aLXdV9NVFXHiFi3MTcN4Boo13ogaFMU8ehcLQBJNGMbZsZKdKRGHZnuSY8ZGx8QkuuwHx",
  "key14": "2qcyVoVDQpzrLdVGrn2orq7f291P3JmYosrW2k3wxZ9NvwdfRftXfwyK3FVF6jD5UEaqADKv6cpGZxsWhaYviuLF",
  "key15": "5XBVZmdi68PkTQHR2tUvQ5TGdfq1RrK89AooMtt5EibPRU9Xzr7TrCSh4VAyfumuXkUqasg6Xxcu1oKvhkrR43VF",
  "key16": "57YGw1BZXqp2Lm4as4h15KdEh3c75PD5dpQMBibaaN4xKeJFEDYNiLU1ssaC7cMFUjRPnyL6T8NYgqsZkYsNVBN",
  "key17": "5M2Huqj9hGKDuPXZDV9umNGUy4nHjFLMRGn4ymoeW9WFJb2HqnzbbmQbyrmrDfZeKwxfb4MdBSaDL9vaiHCmwswK",
  "key18": "4g5dDHjF96XULdnHaUL7h46sxcGHpB4ZBUoQPhUBwg82oJk8rg1C4xwPdigjTvHbphmwdptpv5Sek3xdxoTUdc87",
  "key19": "21744mPGV4ZdDkxmfa5UP7hTcfixErGVKSTRDBcXHJSG3Vri2adjmv4zqTj8pXFqTh2P46mMJh1pKDeMPfDiqyzu",
  "key20": "5te9aVWdN8whoCtSBPqzyB23bSCGXM3GvmVTCq4dnatE67n2o4tVXkDUKZNyHUkXeeu3DXBB2MQFpSGiiVQwhYho",
  "key21": "SS7irza1P9buMBWGkeBcKJbv3xLQSf5s9SjtGGVNJip8juWswiBPJo6FCSnsiemQA4nfHFA3w69iiwZgQybjtrB",
  "key22": "5ZwafJcPzusMqG5KTJE7pBrVUtEMWRXgr3FRQvmgEbv3fu1xiDwGD4oBPJUXXB6wyGuC4RTMnNU7SDuvowAWkWE6",
  "key23": "5YtPveEZ4rh4TP7JVAxAd4iQQvTBxvBUTYd1xUs6K9992HHreo1PZwCt4nCoRoJYjyutej8Tu37byqaBgPYRpYH7",
  "key24": "S8n4yia4GcUi13inZmhSTVp4uWDr3618i3Q1ZWnhD5vjcHo4zYSehz2KDLAgdsqTvAr8fBz7si8At2wvfr8wVQL",
  "key25": "4Ar9dixbw5qgFSSuyfTyGDMjDQ6aDzxj1RxU9xqDv1qKojweJMC47M13uCGZte9Hx9yLsSBvwaxs5AkFeqrkkN5o",
  "key26": "hFbzyYhE9h6Edp1nkJL6Q46QjHysc2kJRaFZfydiw14BrXmC6xeBjRGr19SCmorTaMY1uu3WGFwoHEsDU8bPZym",
  "key27": "3vJr6QR9CbqxajYJqbutq1j3iZQyAFkyFdVG2mVT9oDcs25oS6ThCadMx8wVDvtiAFpgGSQ5be73NH47NYmUijmy",
  "key28": "2Q2TPQyfexou7A6yeXHjKKAR2Q42urcgLbvXkej5LpZs6k4cFED6dGVTfXzDw6dRuqZD8heEHBdTqSEuVHUB8jN9",
  "key29": "sqtvjWDGBVDAX3XbgxQkH6B3FcLf9tABaE4eMjL42RLjsUYSNZaP3kQ1r4xCdcJ6YDReMJ1jUSarEjoUdw1ieW4",
  "key30": "4CscUAWPn9Egh3aCWobShz7JSRj5fJzhVnZikxdUkCsjyaJ6A8rJQkt4mk5sRLyMNbkETmh61fECgHovr6NfDKUg",
  "key31": "CzDL9KtL1fNHut2X3WPSCRu7GkyVNoVAsNTMNBjBS7Vm9yWYA6XnVuZqxLZjLC9ZQJCNxxfn2LZ8dspEkv6zQgk",
  "key32": "64i3kPCffp5s6vfRWVFqQjYyvKmUd3xWii6SCkujKDu7aCeC7nW98UN4fENtyVAjb3LsYTLXgMnJmPbRdJJsZ5sn",
  "key33": "4nFULYf8JLg4UH8QZ3CWeVH1MREDvsvi9Tci3wqFemHxGQwpCJkmn2kPJikyuR7tnGVDuXKAHZUT5u8JpEQ5cYVU",
  "key34": "3W4ebxKrCVVFvtFsut3NZvM8Tr5hir283rPKCVfHTMGHuJVZJijJ9wdA4AsPt12g1XApco672pMQjfJnqVJ9jpdA",
  "key35": "B7PNjEG9pZhP7yk1DHSUhzkDB4yyedPi4RV23QtL5EeYBmUB7ddZirSNx23TMsYE9xV6W9maoGVpxGmng5xfARG",
  "key36": "4tysqo9wexB4jB6YqmVGf1Bsc3Bo9tvcfvmwfDi3Ue7JSnPPK4XA5nkgm6pS3zx2pBSkrTyvYYfAbL2Bkt84qR7M",
  "key37": "46hMCDigpagtxDm83wCZrPTcgxWfBrhRtXg7oSJnSKqUgmzreLPks6Z8zPdMdpxqLLErZfTjMqGbLN3N3rsCDTfc",
  "key38": "4HDunVK294NMii3Komk7gXADFr7z1M5gVMrPcAH3bAbRsH1bsXEuWGYM4xbijr5T9CCPW8FFuYGKU2vJyXHTuG1e",
  "key39": "VzqbWJktAtSCjgwVenkMtaJwsTFVnZwvexyAsQ2RXUeCQDEjeNZpC2852LaP12nvvJzigV3vzbwB9BjTmfVLkeZ",
  "key40": "GJqhBsZkTm9s2kUnK2b1XEybuRss2vBmuemKAFMFe8LDttZDsmtCXw23mmtPxASZ2hyuRRENPEoDnEjvL9aJiNc",
  "key41": "5Re2dieY8co3pPJtjAugAugLP2PNyuW3HvhbcuForG8RrY1w82xYQYvM2PPfXnkT85viwZe6eHoffC2Cer33FpUj",
  "key42": "5dmx9X8xB2sFJED3KB6vfcpXr9yvb6Pzft3dYyrQp5F6Rsp4eEY7a9Fr98UTwgU4zBSJLoLKR2vZpbidc8hCUNHa",
  "key43": "LMhFxew4R6NY7g3CKro3dHYrBFm7Ab7ogAUMB4D3JS6c76QDhzDw5rDyd5XviKccPhGBpnD1gEAAbHgGi7jac36",
  "key44": "2ZknaMS9bXKahhZ3yHE25wcWKvim4taBF8gRBpbJVmZM5U5Hiv9ysRrcks8myRBpp3VNYBGHSnWzKsYFM5zTBRjC",
  "key45": "5oAyVajGApsx437yMau6oNYPgpntn5uYbitoV8Jr1KyUiNEQhDNoXg946MrZvswL9vgRnHDiyXiHg3Ko7cYb6ojd",
  "key46": "4wMUESKXXc4UgbWAavFT5BSzSFLywgmngYSoWGiqqzchCE9nMJ5Et2HheHJz9Bq2aC1nNqsHrW5Qaz5Wa43KfrqL",
  "key47": "36AHm6tFecdAYjaP1EvpsfXHsPQ8Ams7phuSMuHvR2xawccqyd9sdMKEcrcZmaGrXjnTSaP96utJYEJ98qpUVENk"
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
