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
    "31BP7eA7Cxir5ndYPFEt94EwfNh23UPyhX7HAhHa3NqjwefBbKT2Nvzaq4YX7QmqSN8xrwubjjy3XexutavB6ZBG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gvsShJfy8wB66KKUyGDea8yBGvT6KxgwrbiQfknnjVVXz537qV4GmQjxyqBAvhFmLUH6HQf4bvppBNKfjAeauzx",
  "key1": "5fRVFj42HgHZnVnxYH3PmoNNWvBqLTjufL493h64DMbJbuCnCZUVCajjtC6dsRpPs3amhzQw8wwf5MCPnA7tDdoK",
  "key2": "5Qus3zrrjgN5GHTUYW15A5jZbd3fCc5JEoe2tjrfGG5XnexPVwHTxBSro2PmUom33czr757MwzTztTEaEa6SGoqD",
  "key3": "5N7y7NMJxzmyQiqGWatyrgnZxkPh7XBAbs4nzjRcEtxJrVYrEz78gYha8LpZL2MuDs6WVG98sTJ3x1mKH2GS7cyg",
  "key4": "4sXPhdcyW6By9BzmCdFeh8CU6CbqEj9axyRap7pegqvdHiGKsjVe88DGCni4TM3huRxmW6ihiTvTnxdYYST5FqJq",
  "key5": "57RTDegVd6kLqTz79nxmVe6GPfTCxLiwu8LPeLjidieqt5bDigTmcMq9dqsjmjqQrwP1mPtZUWNnxGQDY9TRNWye",
  "key6": "2Zn6MtCgxxKWmQZyoy2bJoSRD9td9jsb29xJWSaL4vLoWUbmybTqKGQBVK2PY9DfPyp1J7CPmLG8mKP94mwXZ7bm",
  "key7": "3bhwjzdDxc8eYdCHiKtRKeKYjQ3Snc2jKjfCmEotEjTvi1SBFgo9erL1VLCrDk6mUaTMgEgEFaPxuFuqMc5WwQae",
  "key8": "ceHswQLpaeWm65NW4yJxyYJxotq8YLHhzxVHSqCDmdBtxUpg4cCQQERu5yGe1gPQfjowx6VdLZAZnfCiQ3o11EE",
  "key9": "2dd3A1qwZvZBPw7FaJsnJkZJcrAQjFszAQJCqTFqLVNMnkKVsWXjf2GZf2mih4ipxurgYREVjoK1BJGCZ1oLQjjX",
  "key10": "4QNzPcU96nW4DtgE6gR1epQCATMwZfV8PYbxa65nmrohn2LhFKC57miMhm1KN9vfWm6dgfgAo4K63D3eimnd9ByP",
  "key11": "2HM1yTAFtTGztT9Sxmcd9spLnRaAb5qSyz7qTMFCHmsESKwDWnbeLn3ZUPA85tqidvX7b4gU5DDRashNmCPY12Qt",
  "key12": "2wDYTQ5WaPSV5QAH4zpr3pQoUqyVBLyZADQu1LPSxopsbyZutCemmggPPEPY5z4bywvpshGY35n7KQpsHN75eSpH",
  "key13": "3KMNXasqoCu7YhEi6hbcf2C2wqRyrh9jgDcykuHyG92yXUDSUMpX9eM8MCkETu8puMHD431KFRLBe73zkFnVBsaw",
  "key14": "4WgNyTi28ihuQbETCRDnVFbwjDgUeP7mXaHcayddyMNgZpafjeJf8Ch92iRRnmc9YqqRje1zB67SU4KWsRn9LBQf",
  "key15": "37QXrCppg5fVtcQ8Gru2CUXf1JTSBFDrPDCqUK7mGkzcJGZpkdkMoWEo1d9wzrKbVnLNUDjpHdCfCkQGnRdMLuqR",
  "key16": "3h3ZCZh3fHsBHM8rHwXdt1wPaaCaiENe8JcCH14Yud24ZAqFM4zAnuMCot7eLxi5MRzXFKZyWQqCEawuq7dfrYjD",
  "key17": "4LNW5wVYk2RcYmKGrnyZAtynmTv3F1ngEHxf9yX1ofdJL9Fu5z4UMLrFeRUa7Y5DsGoViUWDETKUkzDeD1iY4oBr",
  "key18": "2PggtoQngiRkh1kjSZpwCdaJaGaekHR3knkUnsJUG8V9U4W7yknnhyGtSpsTHZjYPxeAoRzk5BBcZfm31b1o1zbz",
  "key19": "qug1gmU7QM9yntVrT6CQMmexikDN8xwpmeqdHXJufFyMaRxBGGwd3mAyqsUwpRsiTVw4E2SYdGyzdyEz5qkFNyR",
  "key20": "zNJMEwRLbuhAQAHMx4JiG5axPrnLvzyo3Y8f1yvqA1w1iGCeaAB3RfUuNFwX3NMh8UKRd91gP7hBy1pTiTcHGHY",
  "key21": "4mK9xcSrHQiX7PXmwSH9TjcSapYdEYJZSGPwCSwQpdrB81ssqtp2vbX3Wxyso5U1mema4EobbuPSyHbTxDRB9Vfc",
  "key22": "Rb3Np7Wk11wnPBR6rvQP3F3GTtJeq2ByKbDG5AdtjyZFxw8oco24nLUH1HLwNpzi9HQBwtMYYmoHWFdDdCHcmkH",
  "key23": "5hGW6jscU1JMB1sEAsRXygUBQDaudd2Ui93R5LTz2cNfn2tJYoRjQzUoRiV4abeUabKfnoTggMrB7A5K4SfMmC5t",
  "key24": "3MY85H2KGKeSCzhiBdy1F8JFq48rZghFXi2cyoeU4bERQAQousr4J4rKnmXC8DdUesCVpHvzoWGtusx7F5vJxgiV",
  "key25": "4cYMXrZuGSCF3ivz1wsFQmc7u9uMXTkBK8vRinZkTeGxdtzomPzk7yji39X2EEZarWQqnQmNhRvcqi4mChqG4jjs",
  "key26": "3o1BEKbN1NJ4wYFrc8sBJnVZkAyaXYaa7N6dd6jJtLEk3YYmVHARtSTDEZuig5CuKXzrVAVkUixQxPg8mXGiZw4b",
  "key27": "VznnX1Z8Eifsvu3YHLqD7yodsYzZYKLE948yp7PtfrigHkKpfkJ8feFQAnWjGPZFftZQHqgP6uQu2SX41WWWbv5",
  "key28": "3R2qE9c4bLGZwMTA6K2eEXvHw37G57EC4Nwr8FMT8Qhjkh8E8NHJNXYJ918uRa7tkp8bWbtqu4DYchSrwJVzpS3k",
  "key29": "2fRkpf7DywqAU5pVf1CfpjLyz57aNAT5Y3iaCXyysemZqNUp65WWWkrUFzsVoJCajT61zyGdheTK6gVCLagXcU2G",
  "key30": "3cSdqiLEY9CsTyeoDwvynqbjL62TaRX6kZnV4PLiFRwr6jPWeGDn2wm2gWK1ffmDp3H5CNoQkDAMN3aa5tkU9QPe",
  "key31": "gH4SpoHc8ULNEMYw6UERERbDAiy2gKnnqAznzk3QrxBijWfBg7zdQkRfRKMnY6oNGiqMfaExLSw7ZKpp1PW5AWv",
  "key32": "63Vz9efjwy5DWTTkuhCiUJWTQaHQvPjRaKBeYZJYBv2MNgc6Ge8We82rmfMzqykLzakkpzCsfLo9ZaCqogNdQaVJ",
  "key33": "4VJwPwHJbcMiZbFLQ4wibm5qqeXA7BTMdajQHaa58q1hoNmsNV1v4qhVB7P7VAvEzApFQu8e7xuLhcqcn5Stax6d",
  "key34": "3ZSNuw3JDhkPyxonKDkuGTw9rftG8Pp1QUrXUYYKxmRrQNexcsdC3w7C4L28B2gLytQvdw9azh7DRnzugYqtB9Z3",
  "key35": "4uYDRiBzRdoj4G79uphwuHb923YAxWfyVVvasAb5ui8SipDWc6XerpEXEPhRhb87tszCvPrVGy4KLrp18d5LMREy",
  "key36": "42x67BExVQgRZjg762m6VNTyse97x3KDahR9y4LHQnYAZy42UP52zBcXcw4FTRBipu3jKZx9t1L7nWWsfMGFaDeq",
  "key37": "58VHhymoFyzKMKK63DbEhzn8mE1v8j2x61BSjz6xVHGrwzEvKL9eMAbGqtBJnuKLUHFMrKxHXXSpfnQpDDRe7Exp",
  "key38": "5UMXGUA6yKJnXUnT5hWPMk7uySnHXfW9ybrUfdRkvXUA7Lz1xk5YDx518TcN9wjtwv2gkC7UnrMTfWTaR8gd2bJG",
  "key39": "3MDgwxiayaRfvFaqXE2SK6b1LKBWksuKDa99WWkDXVXexeoewasgHNu13FAMzYSaPkNHgJFra5RqnqNZBWevXYfw"
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
