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
    "3GYggK4j9nnCpWUKtziAzQrwm8jHCTaRDySffMB8PhJyWY6G2X5isJKrTzk5cBGQm1zajR3Mzak9AaY4EzsT1bp2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MuHZHoadzR7yZWRiD76ffCFdEL23Vf7Q8udaopdNj9sAhXkopXBZNqr26ckEoYWsPbw5hpxoE2UvwP3E45dP3GM",
  "key1": "38xSB1vXM5EUaXRtGAtyQrPkzwtp8FowQHeWUHC9mtLUba4jMGcbBjfUNumaiFd38a2UF3Z4STpFm7ovHiHzjkta",
  "key2": "3iENyzC45YYTBs4pDsnRCDZUFpXNU9y9g7fzuxiC2f8QQVgrCoYoLbxHWERgzfnodWkfKveMyVzB4uGkz59TZ3DE",
  "key3": "X59HuftAC2qbQ9PLXcLKsAzGU79g5HH22PK8szk2jc5tZuep3bEzYBP8iKPUbQRdL4rG2A1VjAAJ6DPZarWD4Qe",
  "key4": "31KEVW93TH7xpJxCR2SXzyrBTbDH4b8KN3rxYzeCFiSqvAtUVP4buuPgLGtETpHVE2ieeDoxiSUtkbQY89bdTW2A",
  "key5": "566fQFLoVRL7hH4VUpAeDeAa2BV8jKJoYiHxtvNmBL5NMdyb7zL7a3pANm3NBf9Dn5S12TukBSRqWsQTUtujroWz",
  "key6": "4WEKdt2EWbRuRyHT8nTi1ztuprYYGNSeZjeFEjPebibe6FtLxbuFuxERpeJ54mDrxfwgV5aiPG6uyoS6LkFMgaH",
  "key7": "i6ooMrkXt7XD9N1D9M5WjdbjctBezmVg4hA3G35dRNaFtQiRCZFfkXmVwCL3ugh3RtYiPcFJukMENFGwiFhxefG",
  "key8": "5tdvwtMuTgEXodXGitm8JQxYEo3B5zt43LcYrotYj6PX6Hz2cLLmPzetHGCD7XDZma8oPyqFFkiHcw1J1rGmwRxx",
  "key9": "iYbhrayCmKnzTdkpkggCH5DqygiQ8PEBtk5qtzzNBYU1Gs6VoCVN4Ar4iJbCx5wiyFJCMAReg6F1N89NCQq64kd",
  "key10": "hitXZdXDSDm2Uo9BvfCWxjqGghusj9Bq1pHLB4XRCiDFSFXiRdRimV1DfUm8hTsPTRDi5yk7qsJMKG5bwuzU2DH",
  "key11": "3iFPNBhyncSC1oQBF5Tce6jj4QgARYycTtNMNouw1NouWJnxuk5zpZFFEAX9v3aQwyPUWpZbxHNP4pSMfcPa8fPK",
  "key12": "5rrjDDK715rwz8pLDSBPyHa3NEjepLUraj7DNJEJ1bK1feFWceyZiN2yTSxfcbG6ovvTLWjbMyS3vqMhd5xWC7WV",
  "key13": "4h38AT3gTrs2eCUXPRGArCxucwkJ7ob1QBuBPkUaXGwB6GYH82st37kGT9wCJ7gQk61vR1CXJWdR3sWphv53FdKN",
  "key14": "5cocAQSCPGovVMyUa4mxqdCc3kVNtmfDks4UAHEm81Pv5Z7Nj9VqDqZUCkbAMBQ8Tw9ejtAx98iTQa3dtWiL525f",
  "key15": "5DLYMXfUHsKwUU84dkEL2hLvjLqAqpyeGnDFL97SWaypZWDHYRdpW8PFvCdybprv9N3TGk7fJ2FQMUqZ7ZcRYuZi",
  "key16": "gBiXLT5xKhRkmRUt33jNMma2GuZFQdKXs31ZnCmXSQX89fnMdiDC8zpmQ4fGwuzX7749L5dBVg6mMKjSWRYxLEB",
  "key17": "2Z79uNv8aPkCfpxgTtVxRMf8xTSW83Ykrjj8kTb3Qmq1DGh3gPWfCb4MUBvCE4AFjde3shsEbZXE85q6AQicYdhc",
  "key18": "5woWe6HGpsuGkPKwa2QpnELfojixHet5Hr5bRnjz7H7FrSz1X7HtSnGAp55oaaB34M9F8HX1r74FcPPxajddnLLb",
  "key19": "2dgrRXNstaLovgqTuTBsz5w2h3BVDrvhyZwTZ9sky5VhE6KtJX5BefJ1pwT67YSHaXUaD7Gm6zTo4dufg1RT2GvD",
  "key20": "34EmaHhP5Dqsh56cK4EvfY9oiFmyFc4RonYvGYJVVfqDCHPtiAURPjk92bfuDLNU2ZyaKmc4DQodjLT2QsjfGze4",
  "key21": "3ser3FrE64ybnu9d1WN5vaYrUoxW3zc1knW2cwdpZibLz59QJzKK4pTexsi9wsYY65ma41mq8DAFLdwkxhUgUU7G",
  "key22": "59N6EWuDWg9na1qTKemXd4tNyUXYL7yuV6yitmrh3eBQQTvAwBUHmhXyf5eVmPBEzo418N6idksgQ2w3TXSJ31Ha",
  "key23": "4E8N6zkdczgnB2qozvnAPAo6DTYLPKLfp4zDJAwvxRpDvXspFS4j2PSSfrVEyyQJYvaVaaq9kdPCg7WiMc6oZgWm",
  "key24": "38Q9BAbAPqsmJVKhmgaWeFmfem77YR8TKvCbhDR2P5i41YMBW871eacnZiP6EYAcMoHK4Aiv2v2uGwmYgDDC9Amd",
  "key25": "3nAfvKC2saKjQSCwS6zTf7PMDWzVvNNByc8gG4rrg4hT3Xrd3ZtvN4EXZfDgNHbALRFK2dHtWwdjhEtWWpKZKgFC",
  "key26": "2VJmey8sUtx6PuLYqah1TdznwRD15zDwggZmZDk2VU4DD5WUU9tNSJxfAqWkJgyauDuttG58GRxi19UgHoYFpWLS",
  "key27": "5xipJjUeKVXJU2b3bsrfYPUS9wvHkAT21x43L5dvVHrCpxh7yao9kA4DJHM7r3bVzp3NBdbAnGdjhuDr2o6M22ps",
  "key28": "25BEhFUmvddiExCjup8ArHnXUZh1gDKfdUMZ7xMv17tGDbBwxTMcBftTht9EPsCN9NWFgyCrATWjR2rezxpraKw4",
  "key29": "2vwR8QZzm2K3mqDZXf696YZucQUNwoSXTVJEMGWv49UYBkrEmFKoy1NawmX8ume3BYKy1xzRbReFG5Uh9Qy6DjsH",
  "key30": "3zUQQGAEWqZyqmYkafRjJXtfmCCwGrkWSZQK2LvY75JUKPRvrYKqoWyBSN3x2CJtz21VmFWhBDWMZrgFzMb3S4eW",
  "key31": "2Ua8zv8EAi5NK3ZkdBxHstm7GEETuAQD91f1WDov3eTGeWW1qfWi5L1gwzgtQSGY6FSN3u6WGen9Dt5BD1DrSaKC",
  "key32": "4bbR1vr2y5TK32yukegfCMNqig9SwwBLoNdx4LVCoattTUsMqDS7PiXqCEVT1ySsoZGVd3H4fC7onmYXmxkGeZVy",
  "key33": "5eiHkudCS3ncnfwdMNojBPMhNjQFDtktN1VzfzN2CEpUB15Xm3RvSmpfXFaSw18ihfKvMGdBQfs15UAZURryiFWb",
  "key34": "2E74Egz2VfmpCLU2ktoKTyrcnPsFfEwNW8CcxXx6wZSPx32HHMi5R9189y7dtoL9hkLytrpYViYcjiR1KhjaLAv",
  "key35": "4KDsTCY6ty8kDrcMbAKYnkF8MpQn9rVB156DA7gKUb8wfjCZyYPtC34mcfvRc28DH42kw8FYubbHZfd46U8fBZEQ",
  "key36": "4M8CWSJjnrVdFjjsEuYxrgoMPCed9K6kwWNGgi3XfjMxMoHtW11Ne3S1LqCw6hxJgmAh29tRau8BbGDZLckbe3Z8",
  "key37": "8rLkbPBBExPw99gaP8uhaj66Y8R5A8U8UuxUuvnQktY6jpAva9aphyttbRMasvqGEixxC9hNu4rCFbJnxY3qt5G",
  "key38": "3AGLomXpbkPihTMdDstm7YXPSaBziWBJ1xjuChsCCJ1D3Lo6GgRvxei4tPDRCbf2sF4mJ75TeEpe8GvzEFPn5yhf",
  "key39": "2QyeFvoTVZFR3KDT2inA2wpSq9nExatGH6oq4WxgxFm1CNSoZHUwjNV4my2VBxtgY82ea1cQ5zeynS5MxG5T3w3X",
  "key40": "AaCadgAcRBrPEHunRbWaYqQC38oRk1hvB3Rg185raSZf47fputU57846SxFLqCE8zxpKTezBmt2xiSY5gKzFawd",
  "key41": "4XGvdh1s46HVmPQCTHmNBzPJJ1wjQszrHghMKFkSvWWp5WhU1pCpSghaW4SKPjKQhm3dWc1PU1fBsfgf7Utt2mCv",
  "key42": "5kNYKewFJnZ8QALbXtvYYPzMsfHRSD9PVvyJpdisFVK5KxwtPgEj9bExGGLu5Fasbyyh4L9gnEpV6MSuSHpyHDKW",
  "key43": "2E2uQNeVCzBECtMceHb4CXcRikaFqwvz75LPoZA639AWV4HdgBdMaLyv84ZMwxaYGPzV9HeAGvhpHZzaZEEFPFp"
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
