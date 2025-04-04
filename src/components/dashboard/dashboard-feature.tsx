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
    "2gE3DfuSoQnzvLzB9s6VfGwjhsnHbABZbdyCqVAcUBia8QuQDk6utFjKbvHQ1hGm68BrBGmR97eoNqzN8YV4dQR8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xhy6rrsHSoPADpbiGrLrZmTwvX1aK71rvjBoXBbiJ4PVM9KwEdsawzsqk1jeVixQd2Fq8SJpTLgn8tXiuYNTXwu",
  "key1": "53mzfE89dTJLnr7yfurAz11mPGGRsNX8fa2KhqTECSnV2DGPYvYVA1EP7Awb9jmyzs2hmntBGim3zbRnAfnk4H9X",
  "key2": "45Utd9J2bUFSEq7dCGYNarfS7QebN2SbonnRag68CQKycDKs6mQg7sDNrLBRDkH8ukFyB9rASLzqwbs2ashMTD6i",
  "key3": "BSbhGsx3DaAJ85xgjsBq7B9X2TG5XAiN6tuXeFnukuws92bCLMbXxWCFtGj4QFwiQxfuAbrNCJDtvetDgf4DHPq",
  "key4": "5MEqXccuqtxv4QAkxFBWxvtHgCs9JoUimrBKNKTrFGgTuF8B7gq7xm3oqWdNPC5nT8tF4uwajcrX89kgEQ7GB1xp",
  "key5": "4iJvoi2BQXZeyoEvP9dNcMBumcFPapXjPUV1xFxEUfhvpE7FAuBmWu5nJdb6RVdQ9CaVHNKQZJ3XnbqG4wTnfNo9",
  "key6": "5oMzujpy2Sk92j8KQDsHUK4TAA36kDvVE19SgRuDw7ppUASrApBM4f5HGnzDnCS9pmLJq4M1Ye93DTVFbcMidV2s",
  "key7": "3c2sMJr7VbQHacNQ4mxLbRanafcib7Cxgs54Lk3SEyTNK2otqVd4HwGrjV3f2xTqzFrh6ZYukfEY1NKvfNc1z8h3",
  "key8": "3TzMrZu2GqJgR6zp4NoTrrqFvNaMdQZdWoUx5rp8S8e8n3DyPHjLK1X1WBSgu98rurDXLjbzhEzRiNtpif6oMVu2",
  "key9": "5NemNLZPrTcN4QPXq7i858Xn329R7fTUQiVd27EBvbFRzYe4XNUKy1tc8dNwj1znx7g1scEdznDUA8UXQvLUYMXz",
  "key10": "3hv2hANemEfaTZWB8Z4967XHWyeaisuLpfNsDY18yUUACAtzJXhjehZrTDpszN1hCtgAA89QCMz7Sbh4EDt281n4",
  "key11": "pnSYxkUwAAFhPftsZT6rnnw4hPCEQiMia1kCapM9XtqMxuKZUUAJFQpnkTtU154LQVeX8CqERqdHX6xuemUd81p",
  "key12": "7MyB8wLiLYmvVCxjRHgaWAzkJvAYzGNBzzGQ1wmcwNf2LTv1oq6YFC2gcMF6bERLUi1wRShT62rex8QsMFBXwbw",
  "key13": "32xBy6kThMaEd47JRYH34nS85DbUrG7Vzbr586HoPh1KQwpT6pDyQw1Fygydg9KPsPrqrcgNSNszFZUaDW4LAQKy",
  "key14": "2mZ6dyUF9b2X7GGVr9ZjZrF6PFqUo8q7jbgpbofcHKo3yJm4bbdcaPpZZZghXk3DF8SnmjVwbceGHccoQ27VLN3K",
  "key15": "3srw6zp3THNBVe564qsdb1c4nfyN2ZMD2kdEzx1SkMRpAXcCTNVRiwPg25sp2wUaWA8JDNKW93A6HWfg9w8QqnVv",
  "key16": "3eSs9yV2jo2SR8xDdkbQTARBeQbU82Ek8TXzuPWwwL7kcQxzWiy5j4tKffWM9uu63cBSNzETdtNG7q4QarAo52fr",
  "key17": "yaoGoNAUCMRk5W2UzbB9inixcjM2p49hQPA8gNB2HeNNqo6gejUmVEwgirE2iaEtLDvPnAtuPPNM6ZnNKdCwmxE",
  "key18": "2KSRoLeTdNJezKtGq5dHRJjh9oztTkmqio8KFP38Hc9vro5q8QrKpLZrfqkdbMvZaqGjUzMxHEVoDUiQvTwLTMYB",
  "key19": "yv3N8U5kbVVSYb8Bc2HmcRtpdFDk8DzCqQ43485YjpH9S18CNmcY4RBoP24vqbrB9jxbfNTt9vQTaWUGHKFDoA5",
  "key20": "5s3P5Q6e3Lwo2s5qU6Jc1QwKufMj4RjHT9oPRHJqSs2sV7m6GFuMLgwxDbD25nS3NfancQaroeeKLnDN8PBkfJSd",
  "key21": "4yZNYaxZSY3XxSAKiZLB7RCotDxNEMFa9ijD77gf8fANT8r5WYaZmDa6Z7TTFcn9E9EDDyzkUvNE9VVhbTY6kfC5",
  "key22": "4UXiLkS2yBcnaJs7Qg4WW3RHwor1gJsrf5P1mkKEpT4trCQfqJvJrjEsX4GagNz2hcZ9bnxiBiaKT15zMLCGiyHt",
  "key23": "3U4pKZeNyprw5egEzLvZysek4bvmQpLM51Dt1iducPnSq6MMacfGWXyc5xz9DaYJJB95JJwt1MwBrQWR7Du1LiRF",
  "key24": "35X728m83B4bLuZA5bMDSNbP7EagZzgh3x1kHYyRmM8YYCntU4oDN23BV6TdDSnCwj3cDWH7fs9rZ5HJqqu8b5A9",
  "key25": "48dnLVfR2yEiMRi89Tj6FPHxr9zR6Xo2JPWBnX3whdpAsJsZuLscyHxzzv3Lys42pSTTXQKZbJGJV78nN7JZUR22",
  "key26": "2sfc6k4ZLYJ2Bd4FkKjbiVAxk1pgXJ5WirGQH7YLRVgqgE8q7Vbv5dJ2yF1DrFG4YmC2AjYJeeMk1H1ifpNBAwD",
  "key27": "3sib3kvGtAkBqJ3So8dspSHgyXLcupJLe3iyRvgRRL3Sj4eVh9yqW32bhBPTrgRWbxyrZYoY3PsuMPmT48Q1EXj2",
  "key28": "gVcjDf9B4eeLEwfAixp6rEjQFUp8XpfXT3oNPx3hQytvrukirLPQT6GBnXNCM88SXGvQxA3iN5nr6EhpcVwW1bw",
  "key29": "n5GZinZWXyUAvMjRJCSfjzmXxgrWwrWJMJrTJrd3gkyRgaNexuh1BnPeKesWxVQNqdKNQEj3VV6MLCLJPCBApP2",
  "key30": "xwwLNCDiKTRNEzg9nT2q6Ma4YiVgJisnqjsAAU81LzsHxTJaDnA1suSPTkgmq9jU2dbbA3qmU3dTEqZjLgPQkC8",
  "key31": "3rB6sPf995XAp9jmY8f6ihmgY7f2THB5zUMtp7tDtrXXUdBDz5o8Hzys2zXLcpJufhQLsGUBcLSnYW7UhKwSDukS",
  "key32": "5F8vzmFYtLDBG5uqL6J1rFQvZSXqEVvAuDwCLNjLZFxFaQktDPWhKsi5e9qaqDrL9kiP9xD8oyhadvRSHVGLnipd",
  "key33": "ijwAtvKpUfdqGL5tQFSVaZScjDCUFXvzMQaFbH55AH7KtfRoNLpGfzQJZfsSNcAkwxhCBYkLowgTesPCywVXkyB"
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
