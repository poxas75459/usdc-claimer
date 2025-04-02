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
    "4Z9MRccB3SEcAZaq4pyj1v1yu5KNgERBfwfoo6NQAafVHxRiNUJKUTHDi7kcuSFTjRJqUf3XtCHe7PYWtvaq9ePk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ieAeUZf67ZS3WEZKxFmgfrZNNC3hjpE9J2y8eGTYfPMUSTFnNCY65f7BYJHfYTS1Dzv6BvMoUqxHfowTCyvgTNk",
  "key1": "3N6cPbm5gfd1KisjJFW1WB5K8kahko4JperX2QmtZ9kh2fqJPuFbmbfLRiadHoJq8VNRDDn72GuCELvBsRNY8t6V",
  "key2": "2PeAn8yGdMFF43dH3QMddEotPMm6tBpzSqvJorkBs59oq9hHbjknrXh1VdjYkWsmr41PzWGPcsqaFxi2jdnZ5TFN",
  "key3": "5bFDp7hMHr2R61urMoxpT7hZQSW5vG7XNXX8X4Fw7gi3DDAYmfbbeqvYGDfvPnwzfVrbFwW9vE4bxyKgsvffh8ra",
  "key4": "3ZDYAKGBRso2Fc8XxBN8NpZ3yqaGn3qCpYLxCm2YtKP6MYybN1xo13NMyGaL5VjaBqiPLN6T5LRD4mzGsS5ymt25",
  "key5": "eCzPc3e1bRWxGttZyASme4nZVktwoy8V2XaqAPPMjcmczkUPozZSuASD3sibwPZ7c9TrktWRgqMRxkzq3yVnunE",
  "key6": "3N143HsMpittmGSXfyTpbhB2kSFzJqBgbhcsgYVJNBHU5tLgdK1v6QBpD6t5HhpggsxdWjDfTnpuBMWofdn9yoSF",
  "key7": "tyLdkLgrquPRyNMUGToLZwjmKSTsF8NoMcy4AZ9B2rH8Cmq2sdJyjnq1eBwEDfVm8roDgPsJM6UyejAjoMDmntZ",
  "key8": "2YWdkDfzbewHu5Xkj7Nm1oJQqEG2HrPNrDd6Du8ae8Z2jhgWB13zVfSzNisUDy93Ff81N67uERq6S6tJwMtLW8qv",
  "key9": "5nbxXLa7owpXFrsBUy6Qhb6pWHA5nmYbP1N1HHoahrfta9c9S4oBTJsT7YHX8KuNhyERaptoLn8thqh1APQ2FCyv",
  "key10": "21g8Havjbe7E64GuSZ3bquvNExThiJEq41ciKrowmVMJapXrb9c1cgm714cMQ4VxUbnT4rJFxVCXsaKfNLCS3qkX",
  "key11": "66iozAbF4WK2xsGY5gLxUb9bz4TY84PGRvxBKoW7QYmp1Xz9A3dyYbSPHVNohQP6BYdGXwdBGk65nmkojXXgEbGJ",
  "key12": "4qoJxKpQKXcRTUBd9hG2GX3mjkc3oE8V4FVQhcW7q1Hk3BDdqUddQfUt95W3cY8s1Sm4u1JvMMFCUyRYREv9PYNu",
  "key13": "4i9ATuEAi7ykrqr9PHQx7tSaUGvJ5ehL8hHXmo1XbzS6sRQVqY6TwbyvcgC86dUe9ArvYV8KmX9d7pGfTDVNJ9gn",
  "key14": "52Wu6UofoZUV3nbSLaJx6m2nhAPKNrU969zRu3TD9N9wwW6K7fpyjJJZ3LfDHeSXjF7vcCP3s9iPRchUFULYJ1Sx",
  "key15": "bYeca2YAjGeoByvnztrwJ6vY2m2RQPYKdyWhGdRNbwUhbic8HcGo61gVCWjTQ9E5HacVzLGRDLE8To8LABUkx1A",
  "key16": "2qqM8MLPYqgG7ueHPRnaKjEkMeWcHQeyt5NKLuUHv83tZmrwwwVfySzTSKTxUKrD1sDGJ5WtRNajWrXvfnGYzDdL",
  "key17": "4YAsGXJr9v4fVDLGU4fn6DedCmiKk1Z3DwU5wjn2zrh8U87xtSoqNufXfpXSAivpitP9yYbirbZvNuySDs2n6vAt",
  "key18": "DkQBAqnQ2iQfGHiwNHEZ7wnBdcaTTRHksHHvukXAuRefpgUD4fFTvptSDkQqkU8tt9s5q6Z7E3ZXRkVdK5xxg3u",
  "key19": "4XuJhGMoZmFaSVQVyjiEqPwGvHdvKSdCjPLL1rr6ZyAoJXmaf1M1NkoPqTzMZemj4NquEQZ823bLTqxnEbddagWz",
  "key20": "3osZckASSTyBUPLhK7tVtiuw73ZFKbQovngYH5Emxjv1G27WpSSKzgsGaMJ5F3Rj5CDjAQzUzLa21RA5D4aMP1ke",
  "key21": "4o5Wtbtm3GY1rkCt7CLbCx6i7iTacCzCceGetMoTL9ELfCQoVt2LBomYaceWVMekYbAVcMeVffwe7UqZSZFHFSvy",
  "key22": "2Y3cU25xXB5oGed1XEVecmGo2eyu4tzk7zRgcBoYiDfVw6P16tUje871ApWvRPsHai9TwPqrecQcNLHuMiC7cvab",
  "key23": "3WAtc4oBrJ43W1wF1XuciW3VXjsURa4V9EehwcPnDjQ1aQgQSRD4ZHUiSTDjyxUL8jcDjdxzqWxjvzWd9w6hP8ZS",
  "key24": "bpL5jewwt1iVS6MFtkMVoKSwoAaB8PDuEv3Eg4wn8WKuGZetdrLE4VJWW8LsnN1ypozcp2i8vgBWbur8reSB84S",
  "key25": "3WpNV27mrXwNGVS8yXTg1L4BgLSuQEoKK6ooM6paji1a3pZRYmLpDGmnm1qsXuBdDQk95Cw7FwkQv8csK9A9e9ss",
  "key26": "2FNz2RwEapssXBSxFcrASu29rtWcMERipaEtKCenWgAHJCPWT47QHM3GLB6b3gvoKHo9fdUKiXDrJiv54rYFCNQg",
  "key27": "RMAgn7rXfQZ1KSUiMrKTzZmWCST2nacf1mMPBPxBSUhzy9JDDZM9ngoPQWLjiy4QxuqcyZkGw7BQka6GoE7PL3s",
  "key28": "qxQhBbjaa4URiptfNEfECpVuxgjTajN5iMZf34tE1vsmh9v1zqSyV7py8X1xAoiAXgmDwKkxAezERkMzsFqpdxz",
  "key29": "44Ltcj2vjvv5LuWdvh1kTeXRHZV1LgyWJBdCFU7b1M3sxzNVPAVzMsPZd9Bjkaop1f1Sv46vAam1ZWJvDxGEVfge",
  "key30": "2SMAk67UTb12yreKksGQwZN93mhQ7TxhLJ2tizDMHVwFFu4QpmEpxzMc89BpT8twFLaPw85jtk6UNkkRsUa7e9Jq",
  "key31": "2zGKAhRbLDUYppisyQqqJCZ1DNvqEo9jgE9pvjE8VibXkjxzJtNeDoNmzDQBbhuTdmtSkE4qvgaYgAHvVtWTMx5f",
  "key32": "2E8NiFUDoSqBM1GW1fLQbEXRh2YNGWtRTSetuiG9AXPdD5gUofbMBRRF2z7yKSJ5U4HmXXfwyYYtj3Ny1ppQRvnY",
  "key33": "45iW1gAEz4BzN58xs7pqv31ef6wfm7zJEpL61sbUesoqeMTkmNEVw4fpbbC8TeAgcdW84H4syyFGM4dRJSsWaVny",
  "key34": "4A88VFNLVTfJ7L9nZtXLwZJZbTKbKPspxYihjJD2jGeTSm7xYmGFxnHzzJUQyPHdyXHKPQGCJjdTTxsWyPJhPdc3",
  "key35": "BpW6pcZnqWmd8yX2LQZMNX7kZ7f44sgeFQin7KokAzCCMzJuWpwvJxVMhpEcfmicrPJXAo81GvfMudXQRFd1nq6",
  "key36": "zdzDQaug7Vq1vkRhsx2wsN9HHZL8BYAy2iATUszRug6AosA3xBAik78Uz2FdaXh9U6aK54HbMPfSjdCdpcQxmCM",
  "key37": "3dH4ZYxfUKfdUmXU3o4pT5Ap82KT1vU9rCMFYK6MZvFo6x2g5Ly15K38Uqq9QSkeGkMh9Z5DP63oLaaow7bhqyeT",
  "key38": "5Js814ybFqRTFEfvYhP8e8niWMqAbpmkoG7JsrT9AWWHwbqJkfowQzddF1yKY7DcTrxnwd5Yc9e21BFPJPJWLaGR",
  "key39": "5GXJwXuDEzgH2cvCveHphmumRkN7z2qXo9gLBp1VmZBAosf8TR7ZBuLvMToK2ZCxxVLKFXjacF1CBSCXsTbfjfML",
  "key40": "QhoCF4v74837c99aHYEJGW3TTrENck4yRLDDHVqy2vsq5w1bKGgYcRAvnzbrz7zstdsup78uJFAv34ZnNNjmUDH",
  "key41": "3jBWfCc9duKv7Qf9uG7TKNraXotENkE2A3VTxFYfxzZQtpZWUtwNv7pRWxjXHCJrNubFp273f1WhuyAb7jPhhCik",
  "key42": "58u1NKo7kuNgcqYuFvtrD9v2cekhHxNSxzGzXT6vkZ9Sfz7LtUNfbTQrLfT7aPp6teuD2ejmUDFpeTobrF4iKMBD",
  "key43": "3Vsx8MQSQmKGFEoCCkYe7qyXsxFn2M9NJuhsDRWW5J4s2CHGpyhypo8wRbfNdq2Xtq2dmaKWb673GFXW9VpbgfpW",
  "key44": "54LDJt9D9oDq4EWT8DYUsmffqcBdAVZ4DAoT9nPwbPBdchdXrHZZ2X1itQJk19BcR3shfJNK5pzfjqKazNAkqwbV",
  "key45": "53s5YsKPAmBAUaE8bj9NcEmiY1oCNsDG1RXJi1DCjz6Hoz3aqSiupHoimuv7aA4PECZU63szZp45rtQFiwjMRWmv",
  "key46": "2VMvi3BiQ1Y1d3ZemBg35QicVhUNw99h29XHDsMiYfjdt4LDAUin3uuXFYCi5XwCKrtfxtKhmp8pSJzRcdjwNkwy",
  "key47": "323JWyjuPrkH5MTWLTkTJdYM2xQWhsm1P3YYBEXz1QaJ2BYGn93dgNsYS943x7edSa87SzuWaYZ7ri4ikAh7LU84"
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
