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
    "4L9sGD3FBoWN9tGbrZ1LJNHiGzUuasxfN8PXcjwDHR1RSpwvGmYqQyYx4mmGPCa187MjiXMxb6uGSK8n4Tj9boYU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WXP8pTwhcsDohxuDU8cZYQEoyu4sRuSGvXm7gqM8Lg7iiLpQYFEs5pCUKc3ptC9Hbs7dNAtDsiQaSGLtjpBiDbY",
  "key1": "5e6cKikNamtFWXeFBSCqrGoB3eofA5WHAGJq7yLz8m78JtrN9uqwBkcWxfMizBM4LnWczTpWvsJHuWB4uJg7ssAP",
  "key2": "5jynhZpntM1Y1CSVzBerhbHfUhHpiAtEqLngAoAQBYNyGdj64RT3RSp3qVSi9caRX9xW1U49besPAp6PUdKwf7W1",
  "key3": "2yRvA9W91Jcwpz3ubekYgR86UhpZqNvqp1Zam68kMsTrQUAHbaWpgeQoo5LoXMkEehx3S9CVK5k2RorbtWhF9Xkv",
  "key4": "3nHvuzKWNcsfHWbQ6Aj4Crp4xHq5BaAMUToHZVj5hd2AP8peGbs6uJwUchdkpWe9taEDmC5nnefPdsMiXsc5C4HX",
  "key5": "jfW7WWWiJvF6TtSo41tBmtXtfYegY6Zqn4wbrBK3fB8RvDazPCfmWAbmRzC6oM5YBLYuP8ZCfmwsZipJS45H11r",
  "key6": "3cbNvDg5938iFmAX2ZxsgL5g5dFYJ6Nku5MTC8oDkiYhLqSWj7iQgR3JPt8oMv5edTb8iQHyonVEyDD13xQGx4aG",
  "key7": "5jWwsLcGZNJRza8htXQmDe831KUWaA7Pz9arvMQwqdpRNNNWXxS18RMTMcGDgSSrdaYutQPNGUHXaA2uZjBZbZSp",
  "key8": "5BsKDYzNExBWt6dNCfiHKYhNoEa9kBYzr5d1AEiW4Z3KgGgdJqxWAHrS7T2kJzwxeo623iWvLJ4vbJonPSUbi4yM",
  "key9": "5y3GbQXimDbvpV5YrzuxT1N2kaRsJcmaQpYQJ79MdFsV1tKabjFDFdsDee5DBsAZcSQaEcgVKDNDChxb7qnfPJ6U",
  "key10": "396XMDoVeWsdxqkZqemwz7pk4JESwbykZNGN34tyNLLe3izWbhbfGGNo3s5FnfgF2D8BHyhRptmahAhTwJ18PFEs",
  "key11": "5GLScuqHZngHsFsUJs4reNFzFtWrcAgNNBRKwf8Cinzfn7aAgsPkTAQ1DFikXRexK1ZwuGnFrZ33todLrqN9G5tM",
  "key12": "2nuTi9K8H1uWoZhEUKAPVgYShLfU9ak59X4K8fvuNvAWK9EB4YBJUvHJhYcGKe6szcRCm9JdHBhrBTCdduwnmcXW",
  "key13": "2X5xmJx3E3HPTRM6vc9LWagZe5cPptyCVRq9QnYtr5YrLyQHZjsf9fLRMCHEj1X9ULYjeMyNuvbRH7YbqLuZQkne",
  "key14": "5hrCQJn2QeLQBMrboGDMnjQ3AnaXVUeUBr8PRHHi2fzhuMVpydmZmuW8JNM1Mj1B4G3hyRZjRoRQfeNi7jJZjJX4",
  "key15": "2Xroe59uiTaA6yMxPpBrkmLqK7dmh9o2onQzPMRyvPjSLM4dhF2QAu91HuhxYP68xeqSeLXHwdn9oin3j3aqxtd",
  "key16": "4Q2EdmsMugPtNn1AtKbQRQErHdx1DwDi6UDMwrvcqqK4vivJBNZysUbYW22Km1zcDh8KM7z3UxJG9jPNDioxRiuU",
  "key17": "21wRzwvtP4cTc5RdetPs1kiJbZ8HcXoaeKfYPs3jaXiukdXqmtPj2y42RcFFAJUvTCdhqFt8hF4yE85PZsj1ttQF",
  "key18": "1gYBJcv3Dk49ZktEWNg3RX8W19MVwGZLcxPtRNqjiFuuUTyhzPi6neGZzrHC1fdP1L61ZzDhjVoxGzEzWu66uXJ",
  "key19": "2QhnMAMsGrMh7nuGTVPKHSqtsFFygUMBZFAsmzTcpiC5CJNzdLDECH9bozHwukujJUXarDvgFGXEF3LE1gCiMMn2",
  "key20": "61FmZDLFQ7KS2mMUX5TQzR93K2aCheqMT2ZrySbHyt6thKPfr1eVRDe4V4ZjwJKRHD2VwqXCsW4DPAvHj6DHDYw8",
  "key21": "18r6ALK8VanBS9g7ZYqazt4RGnkCbs9MamvHb9dKFnnbX4X2g2LUcSk1zUNqvznsCAYQoF7oqdiKVoE94muDdXW",
  "key22": "2s3TNwgxfSErjn47fqSb21VZdNucyMemXuvf8n4tNjnKBL1fLEL7yuL7faqw3xHJT9ZLpS3nxcbyR1SaZYkNbpZx",
  "key23": "3ZsVHFXUcEv8MAQzoL6tpB3aMgmtV9phfuyFje6Z296ANDYPWBbgkLUUMUZDPZX1WXSdViCR1QEDLFtnZNuKb2Lv",
  "key24": "3MoxQovc5PwcdQmDKWSa941eLPYnd1g18ZTU1mBF1f3iYzWyeW8qaqnRJ7jUwCeqd75HiN2MenWJhYT9sdxpBdMf",
  "key25": "2dFDVDqHFcvShd7NPwLhE6USmiG2x2MJthPT67w3VhobeVusFBXaYu7vDBcbgjRCQ5Zhx61anhiR6RoYJLwgwhPT",
  "key26": "f6uDphtMDRupSndzzwiRyr5pC35joDxFT1Hg2sHVsFcGfateLSA7A2TYsHN7FbX87FCRAHb8aP3oHWNkyUFMgMN",
  "key27": "35S1SDNsM8f1RBfFJyBNiA2QkudFMMymyP78ay4TqR5W9DJXPZFjzpMA2SG1ChSa6dQEMhsdXH4iPGtBYCLUKMbj",
  "key28": "2ENcJ7xHguPpFvxfopo564UdrE6fmMzHnJE9ta19SzNSpRrZjHy3LqU2gghowBTWXyP8tE4njKCfoYD4fcMjiLYW",
  "key29": "5AEaLHt2AQBmXcEGrze8E4XXhiZKcAnAaxkgDGUGwFetPv457DwuMPoY1SEfe9fuzCN9m9kMBvgpAWfb4YfEpjx2",
  "key30": "dYDR9mLrqeVVCp5whU6SK313YXejxSnpNuMNuVyVTnz8pNPRw2FQjZ9vNhsJ9jYNic6RXoWjfxZ72MByMpKhNqQ",
  "key31": "5KLJ7ssSr6ae8XHsPU7E5K9oMdEw8sa3yXqnV3dXEjmGYNPXNk4ansTMtb4gepy8F6mAauseuYRFrs6zpRaKgnJL",
  "key32": "y72w2HhBfoMjsegkoRV3dfTfMvBxdiwYMxKB4Z9qqu2Go4GvJi15UNetAhLSYdq9CqmYKhXYnB6HrgNAMXXSwAB",
  "key33": "38i9QN7tQnW8aTNyM5esa1qVSTvXLTmWPNnWqd5X643xeR55KCoy69cah1VSjySEERL3rphaj6dajPW61nkBP4gq",
  "key34": "34feyDa4PpJzAvDYp5ZB2HvJe28saQ3qHju46AeKJutgXuLf4VmZnmtfbiFvChVV3R85HwCyh8RY2QkVw8bYdDSW",
  "key35": "3yRfFiKtKPwHDBW7Qqhzd3yX9FyMxbew2TUYgqEq4DjNXD64LWivhxbAdwVrjCWsmpLtWWNqep5L34kDgV1V74gt",
  "key36": "3VAYJM12VuNzb2bTnE56NBrcgviLgV2aMxasZZ6CCUrVLSjew9SKxw5tAq3DcCgi4E7JwzbmfMdkMHzJNWeBAfGc",
  "key37": "33PMk1fPNevLtBnDRffQUTwPrQnqW2nWVx21KdgCkk2vCMgc2wL3TtTUHGbCZcURvgb2Bsx8cCohjKpMfSEMqSsb",
  "key38": "4P9LUiGp2khFdwNkcms9aydezgTyfyrFMF2ynsEvJ9JxcDg61jGueNempHeEjuRtwzDD4UFFCMMPMuWLTXkbghYe",
  "key39": "t86xooBRL9Lgd9G61NP4vuLa39DDWC9nxfZ9pA5mFC6qk2AkDNPBAorS126z3f6NBE8USaBBmj3kpvQ4aeahUP7",
  "key40": "4tjEmc2RjKK4RFdMYF5Bxvj6g9gkF6MAPys7ZeohD6ZDwYXdt6Sbc7xJW74iM2WRbBRrnM1jLPVo8heiTpEpCbab",
  "key41": "5DLuLHZEyH7vfwzYkmUrBPHR4pQPVG6ZEhwMXAUZauWir49AHXAyvm9XCCopfJqnWPoaf3TSzVb7HMj4brk7pswH"
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
