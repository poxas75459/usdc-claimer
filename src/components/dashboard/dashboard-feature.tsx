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
    "4Wro3zTkCoq1KP7QsAa6Fzq6BQf6uQYodEZbno2ng34QuEPULdzd2Y8jPRkGB3keG2YqWDcRUt5TzQZNqF6UA5YT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g87KHVm1aW9mrVoqhTE9jquPRjfJvH8ytCUGX2W5u4LDf9BdS3HXxTV24viDuHTafP7bnwDBvMiCTioTaoCx5iR",
  "key1": "GWGrJSvtb5hvAcCwigex2j2SgHsTijYTYgJHvD5XPyUK5vDnWaH4eguvmjMfUFJ2VdSAdT6ErLVUS594pFk5qzg",
  "key2": "3XVkHZ8GE3z1Y9vFgH2S1pvXedtSk2soZGd1Y3E3Siwjm75w8yoPKpMfAoxhX6dpnp9a4guJpUHLMdxzeXBJ6vai",
  "key3": "3npPP5RZchZHH14Li7s2vQ5iPc2TWpEtU4mbSk9yAx2tUqGgTqwb9DhyAFsH2ZALSb4zfRGeGgoeCqcWGaLDxXK4",
  "key4": "wxsYCiYkdw5TXv82MXwNSkBm7q2z33ckjgdxZ4G1GCnDgU77jJ8WufAsTeGdkKJrUbxU8L3Wp1Mr37kZwpNLi9B",
  "key5": "4rUFMkToFriyvXRMZXJznemzXyHq8KyakTT4VoR6M2diELdtv1FJXSkcP9aeh6xtdkEuj7cV8aZ8PdoPTQtxUJB5",
  "key6": "BvGTNdFHfRBsKteyAeuf7qrdGLPpDkDb6KBSvFy47whas3Kt7aTF1NPQqNLqrc5sKeBBpBrUPE6WefYxb6oPmWH",
  "key7": "23Rwp8nsPVRm48KRbWkhgHwJ739yrssWUxiwaSQ36GuZeESUsQFTfxdAmLDHqetwy6kszaDbeprXX7u2KyA2zR6Z",
  "key8": "3qLnLiheysTv5iCudPipKFk1SGEgpq6LupXgqjQRoTuSut9vn9TYUhdpBcwvFxAFjVuAiEuX3oD58M2yfbv9XkUS",
  "key9": "4qGgVFA1HkMTN6yweKP74ZJydGxMkjpg6pF8xWzryr2frPrXsoFiW7aCDa91CKKSpSrt9D9fbN3aCiiyZ5yDbJ2G",
  "key10": "42vXPZv59CT62P1XEJoF1KJpB62Z8u4BCeH7hbxaRBdXdzpPCHNowbd1zKdFcqDXD5pJNnawceXp4QjeYSKgQKKx",
  "key11": "3efbKa4asbTkJoBeaVbbnhyhD8Cha9P4Tr4wKHE83ntWSBk89HdmmmHvTBo4cNNJRRH2xUNCuSSmnqFB7TCnrRPM",
  "key12": "5eKXYgcCVhPpXgBFyTaJJR2QLLiVGZY1QmApqenwggHr7FdbUamiDVNno9GkagbtSgJs85z2jZDWm38nNBrxWdup",
  "key13": "5xruy5TEqa76gP5zCjhfeB1uc1Pxa3gCsDTT59EzLiZ2d7XC3XPwrpA46cQyxw6ZjeDB7La13f3sfQHMTkL4nTMG",
  "key14": "5JtkJYn5xqoytj7NtjJyH1xhjos9jQLr8CW2fQScogGUAQTHGshNanyWq2MgzZCBGMs9guH3fBnZPCcgx169jR8U",
  "key15": "28LvjBTV8d3QAWgiepUNuHsE7jz477LAVHYvMaZnJjqSJdadJ5awxDwstUm2FGRwaGJsW8cUFHDz2ELtyxERoGcJ",
  "key16": "4yHpAUs4vVvCvUTxPAjWNGmgGw6xN2Fex8vDYi4opExTKDiBkJVvuiwTsQYYoyNDhodzCVTdnKUJX2zVtSDxHXMk",
  "key17": "4toyiMFJRxMrDVaPWHU9NMewY3nTBdWMj4eptE6P67QxGh3Ujtdo9wYDyWvx2sWCEA4N3FECX8uWVznHHpuoCLYB",
  "key18": "39N53BFfaVwQKUkNSgEScKdChh2p242wa4M3UhhSVzFWZ9SpnZRbZBRUfW1X1CDcR3vdFQemeoKD53LA54tjz4Qb",
  "key19": "5VUDA19Rbg1VATjpGaox6y4fRkiLAUDKre8R3NEwxEs9SGGAi4fXYavvMwzTP6VVDcqownJQfA9WundyoixxAN8P",
  "key20": "2EoDyRifejCaFvhcxiYAeytaiPR9WTntsRJ6bws6QC1MfCE7EDAjmXXAeJh9tGYzFKMMqkFgiBqxJ8iE8VwdCaip",
  "key21": "53aVsibbd5e9wShXs5QutxS72SJ1bSFK1w7ngtqQHr7pL2ikNUEPVmkpWRrQJ2WhzFUsK5FBKBV6sTfdZ7oiLGga",
  "key22": "67YnqUK9nm5J5A1qgQLK17ehF5cK7WEm1bSaPxV3o5cD1sz3HbpfUxU8vti1ZXEG86n945emwS2Zdv8uHoDAw7Ln",
  "key23": "46bAYqmJ6S9Vqy8X34vhgTbJpaHZ5QnFVK9Q8U75UVN4vy66HQtVBzFcdHmZjw8bmNYhCNgf2CWnhRSibyXkGG1H",
  "key24": "hX2vwNrj3UbHtaBu5W7Cw35jqtUSymbwkk31MzL5qnRAsz5TBg58Ly11BgFxv3LTZPEr1U96wdmns2EXTNQRHjW",
  "key25": "27ZEDtY2xStTH7q8J5M7fUqmTQeJF5hP3AUHToXnqaFGiBnqtvM6qcqeYVYvkbn8v9nee7r1wQt4wSiN6uRd8hCs",
  "key26": "65SscM2tuhLQ7Hkqjb9XfY5Njv7WoM4BVVNSAFqM7WRxUBaApkps1SMxxgjqF9pq7oWrULKgaA5eVLFsQtodUNAv",
  "key27": "5EJaUeGw1CkeAdCGgYUAyXNWCp82u4JYBraY4MxUMXg51LqvDGtT3tsmZt5En5gh5jVnBSb1S3uHYFzgxGGpr7ov",
  "key28": "2G5zuWb31osk838WP7pvLBDZdmBaMyMufb7WpB5k6AjqHTG96Mtq8h8G96YBNKjmm6ovhMRMjpyZWeAPw8nzqS1n",
  "key29": "2NerxqdBTcUg6DhH3CJ5ReisjTnUmx6ahsQ6n6UhkffwHkLmFwBDB82zuPYyi6K77ySV2GxA7zKsjEPLq4dx7Bfg",
  "key30": "3CospyTcaDqSbaLAA1LyC6P9YtRsSNdG4e1kqUULhdkFgPRH2P8pUhiCUYrQrUkzig9kD4yR6GHHuePLGsfMSNCb",
  "key31": "5bx73vcd87ABWr6tci543LaLM5stjwsdrywebALwi6q9FeCZvuGX4wRobXjsFYo58CVLYaA9eVLWdxANqWuvBZ3L",
  "key32": "2Mv1ezz1wo25ugWse1Ssp1JJekhzLgsfmix7TuVU8VexSqSMHtiBNSDHvtGBn5FkjFPPoQZAz5UA6rHTETiB9di7",
  "key33": "2KLPjvifngXWKCvvFEnNZautc1u4uNUwS9nLqjaA7bK2nNjfMmXv4t4pz3mFeux1L7GqEJ2F6bwPhkMaonf1je54",
  "key34": "2VqbepLUCx3NxzZvk8gJZteUjdGzSg5Q5vovnYRHabT3Bic8RDFbYrz5BVeeZAAPr3H7xWNiUbgjReTAJRCDA6aL",
  "key35": "4R6gkALUZHTxdrfD3ykmcuVxNtzD9imFGx64U2i8DSaTXKiUQYaDm9S9QGxpxsGYnHxrhf8TxTVKVL8G3FybRzkk",
  "key36": "2Z65ogwAti1fRFTWPsjMuhxQYHNDmLz94rBw8VBUbYo2tz6Wzu6jwgfASRsjTfh5cwMesjLKA9PaXWd279UNL3wc",
  "key37": "5r4mgus6RwQ3Chsmr5Vx33h7p9fx4VSTzReqdmGJM2K6qCd6tKWd25gjWzYL8efkVjABn4Dh1kAq45BBdveE3CR4",
  "key38": "3wzr4JKP8Wv9duMMs7c6wYhhn4yekrRFbwnwekHZSau9wGYGfYriidFYc9caqaAEDSGt77vSjmQpY6nzGjPum7p8",
  "key39": "48AV1gsLNCyMGY5qZWpzbCAcxq9RioQWGmrwgicuJEmgRPLdhp2FvQ7wQW7c5hRB6oUd8vQRbq394R6HKTTcusm5",
  "key40": "2E9ZKiXLDRW536CVUpeXPzVr3CDDGZe2fchi4MpMRN2kjzRfbg8MMbj7fqrZgsEHQ9FfiJ4bVjaqPVvYJRXM5jGy",
  "key41": "3o868XuiGGFPW21yxeKDidRetw6B5nnoa8Lisp3P9Y3mm8HuDw3kCLkuEZPEUrcmyA3qJD6Pt9umbUVD39dEYmgR",
  "key42": "3ZtaoeCVLYxTAescaKGbyxMyFnebX1dtTanWD2mMvXsPg3hDhraJZ1oumHqnkcxdyg7dfV6DAoFKiJ68ZruzHv24",
  "key43": "4LXvhQWUrNJhoiC248rurrgyLtH9VWCFqXR4MwsUduQ49djrMtvMfMFRjBGwFcY5LFJmMY9S53HrujYeigxEYnku"
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
