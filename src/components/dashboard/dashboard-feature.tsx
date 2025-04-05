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
    "Jmi5LKz6MNsP6V2qmkijMfMvW7VFSNYfQ2rn95QybxE4a1hkVL9SV1SUVMmwG8BHEfcDtmhAX3hdnsQeJC9R2Ui"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TAkfx6JHXHA67i6ssURJnL7845h9MXaBcjXtaoUD4fwrWVaRuJm1DA7zEdRFQZXsE3fE8NtDoyHsiW99TFajXu2",
  "key1": "5SZRvkVvdYysFBXFfEJw6PYBauDcp91RkjXvfYAQUjXYPw1KhajMdCNoFoinqpiTaqE8qt44XKub5Huki54FeM4z",
  "key2": "Mgw9Nx9LACT2toZtmgQj4VrDWrG8zhkgnT2FKghPFWKjHrL9js4HFCoM8n7qZ1LiawPSZfkS4CLdpBA52pwX1v2",
  "key3": "4PZ7NrzW45uVbuAVGBTkFF2wKnFAn4zcKxpGihr22YrWjwAUUX6ib4aF5Hebxt6qKXM8qTeciBF96d68iZ2JSVHf",
  "key4": "4c88Af8aAHFhhiic9vseoTQXDsrWBroJ4tUS83222s1WLGLxAsb2nweXkMLbJjJNQBCxb36zSHFekeJZgJABpQiR",
  "key5": "2ZMqpAbd4uj62wNm7HC7xL5aqxoqMbAG2xaMrYVA9RKaciFdhS6n4Fb2jCK4r651Sd4Y4EHBg9yicDcBsogZdP5X",
  "key6": "5zy55uvGYyTiFuWm8yRzEYmuw7EeBqYyx849qAVH2NcKU25LTwundZNeWUPqWXd5ALwHPaqRgMK9TJauR7dqd1iU",
  "key7": "yS2qqqiyoCpNvL7QkmFfikKFCpJpZwUfRLex89KnQpfRnbjiiXQu9LNsWE1suY7tqaq9YQhGoPWjT4Xq1v92Ayu",
  "key8": "2KWtJsNh1WfqKouBHPGmj2qM1tHT1MbA8Dv7kAnLeQ3TeKn5qaA4p1yuEb68zssMMMBzZ7AsfwzfhPm8DZT8nZGt",
  "key9": "26ocEPmYYzdCAxunqdcSaxra1w8etTbrczdPKV1Sn5CWZSGCDYPjYALVryobSQGpXL5DSAsBZ2i77brpdFWsVmdR",
  "key10": "a1MMrWCakrgCTrE9fGds3PTcwTkLWwwDwSDDoRaRHvYKmhF97amCn6WXRz5sU4B72F8KYnGJBsXsJLfsF7qR8Rr",
  "key11": "2S2TProCQLxQcnd7T9gDxzPMebFn4udK1FtDFia2ymY193bnpP4egr9yQZkGzyA35wLXMBGLKPNxAznnvG9v7bqM",
  "key12": "416S1bRDETVnUxy5PDm98nJQhydALK8hbKEZw6MGGeRLHwBjQ2VpZSy521JHm8XFtgrYXTsBYmgc3Pi2EdDsww1r",
  "key13": "2trVALgJHeBanHjHPHAiwxhGHGWQ3eAFbCwvx8tVZgycNxxMphTxfTL3aMVwRcr9QLNuQ32oCB4qpq88dhWgXNCv",
  "key14": "2x2iSCoNU7VnoGrKHJMapshAq1mbcSzQ3VATSx7q4k1yzRMS3bFpHTDCCVjo1RNeRJSR5ZAAERh5qgZ1yy3CBn7U",
  "key15": "5sxea1jsqHVJVsZMyJqLdYvySUhDTxxn1oLyVyKKStfu3MkgAizg88xBgv5yotsRGRb7qrnnuTPjXjH8oBmiZnt1",
  "key16": "2wwvDbkC3SUM1Ch75VvuJAdBUDXiPw3E5N6uscYCy88b8waiqspDsNH1tpVYBuxrupTYUVRRvtpscFcU1ZB4EfsP",
  "key17": "2TzG6yCpdEt5ZJZhhRxsstzBMdwhH6kY6abQgVLdG2Sy4rPkumtvMLWvUStTRTvy6YorHYvRTaFC5f2tAfv7C3j7",
  "key18": "3xDT2r52T2WQ64gMyZhWRXZJeTeyjp8vzsg2i7U3dFzQsZdFaLitNTseBpJgcaN9rEarpLxSLwH41S4ejM1c2Sat",
  "key19": "4bidxcB9xxUL84PVF52T9WNgvUMA61i6Cvh64pg4Nv7Gcx2qHWtavS5btBgpQG8aBvWPX6YSqELaPMmxfwc3zSZf",
  "key20": "GMH1Fp4thFroeAFqtHMtJh6PG3qvMm2j2ZiXK6KZwLVnHk1DWpw6PP3VusDqDnFWf1msYXVfVyeGfKbF5B98ane",
  "key21": "53HG7iQYqeAjvVWKqht2YvfBoBBBBywa3vRmoVMgRBF7qKmzEAxpr8zeSBHgG6E3MTMysGPWZbx1keTZqWyA2YJY",
  "key22": "29FcmwMwAWAg2FeFJKGdMnfas4yjg5cHt48QjNo5m17MfTzDG76YwMdubDKXy271sz8Dks2PSiaTixxEYEcqmC3T",
  "key23": "3xZ8pPJhZVWsbfZR8gnmp5imr8rCkXAjZ9pCGbwbq87CCxwxrxdzwJrRbpBxsTbDGC7Anewrf2EYdBZWrVzqGKDp",
  "key24": "63GsMjWWKwQYXvLJpeE2AidjXeKRQA3GPDMmQ1T81d4JWtwMeNkQQShQh8P5MfbKtqLbZvKAFshmRJbv7tZGSnkC",
  "key25": "2KVShNGYLWSC5558fBxdc2HFxHaVxaNKqxCghz83L9zoUaC6Cq8JgiLoSxZWhx6UMdZKYWgv9KHXBiYU5QtqZGwF",
  "key26": "34vzJcMhdiqBq5SzLYBvokNWT2vx19qwRhAMNLdgdR4BnUMdoXenSdaJkJu327mhj3Ta4eCdEzJALBQMeemB3pgK",
  "key27": "5XpKjhVn2NAVEM1nz4nZwvpnVRTXumFXG2qiczTqNZee1KKY7JuMwdjDQiZLUpTjyKMko5zcyyxLYYpFmXMYU8Eg",
  "key28": "2zNxeS2UQTmg5puSrjx1GDoNURwBj5di18TU9tGmgyaULYLo1GQfezQftxQFbFApRwJrc5yNKEQ5NhQ73mQCUsfr",
  "key29": "52sTdddUiYb8EbAAHPT9JoNQw3d32itpCgriiGa8PmmFfx4hKDo13i1M2DmVqLB3FA5ZKaHmhyVK93qcsTvnxU6P",
  "key30": "4uj4dWZZaTu4GYmiMyqDYULHXt1Z25frBBd8D7G9zgQmCnkDUHNxxespNxrJmYwKfywQfTeZ2HQydQJQhKTUvpMc",
  "key31": "35HKESLi1AsMfyCD1HqVbDAFhCw6i8ctrZmu9txBdcWiHEzP3fhjVWPzcDPhwDixtEdpRcbeurZVpbp7LcF6dzHf",
  "key32": "2sNdLW7kB4aRkDfyxiPLANZQXPy9KDCRqyWBLrjRKimi2zHTdUrq25hXwGCKUpaWaLNLLCRZQyLZHWzohiowJnk2",
  "key33": "29XqJf6qUiLGyN3piWF4gXJoQDbPbHQxsv66uPhmtUqhWQhhxSYJjbJLFDJ76QuwctNH7zXcT6GmKkmuXEMQzN3f",
  "key34": "GzDvkrBcy1Nij6VrAeU1E9FX1zMNQ1fdwcm5SSNkXhvwvWSqNs2fVfbau5UKmKwWKZhaHTg2Eci2EXokb89gMEM",
  "key35": "FQ6MnxYkzCT1TNLqcfxuRFouNymx3qUBXLX1hyxdtVBqsEnXmo2QgQD8m7Fn3DVJeD1SrbFC6pFeRu35AbzbVaw",
  "key36": "5VLJR1Jgmjp22yoMrHGqz7oPXrTMVAuZDrbRfQoLF7wiz3yvEAyhisSyWWmASgNj2vyv8J126JW7cHcTkLxqG6p3",
  "key37": "3JqJ1FnoiHPZVCduNijk4VpkrqwUPCwHSp32qWJSN33G55PAGBebvbGDhXNpnXH9oEqtVDRr7YFB9F7VQRRY79YC",
  "key38": "1TBC8oZhpg3FNpEo75grM6aSxcNiPRHEHTaUtGQs1Pnhvkphvi3xoekYKYxi47jYny7gQPon4enqjNHRoAoH3v8",
  "key39": "5iswSK6LA3NFqw2Dh1ZuW611bcknST6t7pDoyNf5jjQGR4s7bJYzAsgYNyJpV6aRJzTB7Rz2NP46FLTYgrD975D9",
  "key40": "5hhJn8ynxj5qzfbGE9U2A7HbBDACRUmNDxS6PGTboQ2pcESph2tg5RDdjSTSe4rn3BoFp7GbREN9CWViy39Mp1ha",
  "key41": "3VYcDj8So2TMNVwPxKyxw3nVJVQEnk5JtVLfnFABrL6nYDTbZpr9sz8qBAyH9dmMPa4uk6LGaseCuQ4NemLF3sZ4"
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
