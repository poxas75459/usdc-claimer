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
    "4j93gPdtWTwjfiCtSk6CAnByYbZcnEqZv8hNT33Tg5f4iGaDE4AW5PELdfARhVhfXpNxfMgRj57DKCBF2CHTr68L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PMbTtnJVbPiGgmQToVyzRPwgUbBPPsdE1aNYWpHKUyDsyxDecunjy886ueTNXfHAyELndJyLseE3VwN1mfrAoko",
  "key1": "HF78z9VseEqdMN5N9dnrqZHZUFqxfpUfQ9qaTARRAcT2nt9tnfB3KYeCUtVBseCtvKdm81tbTfJYNUun2xXqtmz",
  "key2": "51YMQe7f9nuBVo91iFoCBEKo6sDqngSoZzD8fVzd9ZxcReTTk7McFf7mwvs2m2SJzbM5AkcSgf2EaKCBDAuusKKh",
  "key3": "3qMMAux5Wc8fqQcmSgFkuqPfVjATtPo9pTqB4xLAWfe96A8qGYW72kDrBpndatNxVxtuRguRDNXeGUEkMMD2NoKB",
  "key4": "qeRk7WZosG6DawQAEvacMz7t4mFiRHFuBZ9NWLH4horN1jHtMo45uoTTo8dXKSsPjpRtvx2FdeNiyR2AMGtFAxW",
  "key5": "5A5aoXJVfBnRF4KR1md36qv5ckxxm3UTcxYYf4pHhDdfH8y7JtEGXY3VKUoQ9s1FQbgWUVVFTE2M2BpLY8gc2moR",
  "key6": "piSUqSbL7vcPRZWyYq5Jz5HjGDSoFLMuV9LA8ERSSuAReB6EVMF6oVKNW2gxSWYH8mrDCKKNx4LfJVGVpRLMRMU",
  "key7": "5mqJVLpFTRV1y2zskRhfLvUrbmfxaeGrQWXr7GbXHW3qiLAC9kTXWtWWNYtJhW89KDokDuCvRHvWyCXSPHpGBqGK",
  "key8": "3zPK3Mbjd9onXf6RZGP5HcmXXuMoyQr6dADt49JaN2LpoN4wn3QA9sH3hC1Q72rqY45w4RKV3g3kqfUTPV8Eheap",
  "key9": "3vq8c4b28ENvGNN3NLiPBNJ5sYVyPrahdb2ft7tcfbSttBBxhfLtcbyfBnY3SWViAvTjuaB9hnD2yA1FzvbjDfQN",
  "key10": "2Zg8rHpmR462edaRuVC74hN4idxL8hPKDr5KwHcoNtu6KQPHthqojiUhARaTB7zWPAC1zm6LrX7X3aR5HNBVV8ws",
  "key11": "3zfytBR4butoWkmCew7TV1gxPDj16KQq3daScCTWofBNU77dbAoMW5GnDXDTPZFFFMDENGopXDfYVqNQ7mwMPoTw",
  "key12": "28ZLgExbqh7EnenS6rtWSsgiWyVnkjkjDTDZqro15dW3gKxRo2WCyXRCHd48o1VvvJiP7v6R4rpKJnvskCqkmrpo",
  "key13": "3r9FNEXwXPux3saDsJqE93ZwvCLMsUUWjfKRyq1ZGpXnYzauqNroFtLBx6Ad4JzLaHtbNqcZsoiYz6WbFmaG3zgr",
  "key14": "3srsymd21KwRrwRa8Nzyt7wzJAL2ykLen2P4rz1L2PXSUnbAtYmzxMVacLBnz1N3NZndWV7MmUPy1tjQiMss338p",
  "key15": "5b5JF12iEMdpe9P8WEKwwUuH2S7AVptuwXzQqVXtfxmiTnTXZHV5Synswene53MB9WR4fMKgT1VWZtgMnrkcaJAf",
  "key16": "3C956SqWyXd3wv8gwzGwrgebdJsd2zA84bYyKmvR6QGUBRHXyoiotUQKz68vzoGeX4aszDuXmuknXpPPmcRssUJ8",
  "key17": "5yGr1LfyKZwg36hgoCneWj1ptpZPA9WGX6Mh4F4EQjjyup8kciZBDY3scYUwyWfbVrqE32ALw5FQStLvp4EpK8LD",
  "key18": "3TTmPvqL7xs72MLAj3ZzCPdHD82XaLp518raFhZAhLMnUidpsn2htHiafFR5tFRcBp9SSZ5LeU1HBPHBHkHSPUWJ",
  "key19": "3ZcCSvxswCjbYxUuKFjaxGRqwmv49AAicSXD2in29nn9zDoUt7YwRR6fgkFhEihstaLW9zKUpSMcQZTZDbV4dM6b",
  "key20": "4eh43NZ9DN8yBTnbVFGVFHXogPPEBricj3PVU6g3rCmBk3bHc9GFnjQioYTge9daR9t9JznVCv3fMJSA6Xtq2m84",
  "key21": "5AyXpt5qyuDoAJmUvS7Q7iKfWTGuQUodK4TK3dbhwXPET7XBbCvwKefvZXCu4gTGyqTib28YVGfiEr9okzs7wXoi",
  "key22": "4UupURhr9ok66srfRXTVFHYVkkUXVc5qxdGcPdRay29dJd2HJgMbLq59NcUoJmwYJbGcGf8LSUozTz15sasLcgex",
  "key23": "5WCHWcgKik2vxgrB2xc3zZxMCNDAuCC8RXSUTBia2ij3kyNYcYDpmaCDEoZL69yy5sxp4BFwD3dhdakXuDVPywwu",
  "key24": "4fXedmNNXsARMuy7YvUqZn9u7zQYpSfGFRUqYw12f22QLHufZhh8U9xkwmcQJidQz9kogSJqhs8njkoz9fy92DHz",
  "key25": "4pfsVqh452vS6JeqZKQJBcPHnDeuuf7Bh2kREviJUHQNUQNG4wLJNN5vdiJSCpctwGegiQAhEW5j5AKrUTP85xDX",
  "key26": "3DMy8qxrtApeHdUucNRRL62TTuapQhHbZuaK6boirvShGb4N12qpQdkxMoeWWTYh4cRjNqFQ8DLvB2hF2oBxJDeH",
  "key27": "5ATjA4rkPXb4pZ3oRA2c1AVddteuKBzY9YZZbp5wvtsGauhvS2mUiG3Hs6wJM1k7sa2yfXuDARvvSBrjt4K8oLVm",
  "key28": "4HZWAbsz8Xi6f6pT2wur7rxHgb7gieTRR2PtgTNjCjWYvjJG7fNm1mwgTEuqLbCfk7afLuM7ipMDobq3SCPyzmzE"
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
