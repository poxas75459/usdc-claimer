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
    "vkekeyyrn1brmg151ZFS3VZd4oCPXZy66HQKpmQbzKxfa7xK6Wd4v1xmnxouQ8rBj1A4KNdJiQrB6euDy5vPpB9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uDZHr6vJaZ19yecxPkmWhLsmHbeQZm2ehbCNt1khipAZ2UQpYvgLBSfYHnqpMVXceWEcHpTHfGbHaAVYKxxEt2T",
  "key1": "3eBWw2LtDkinyjymDwr2pM8gn9GmULKJaRC8FLc4q9x4iiokmGGcR4X2qHnZ13xPHBzsEBj4Z7mqXFpDCbwurohS",
  "key2": "3mRxHXc7J6Naas7y1dzmU86ETiHc7EWGZyHNvK5gNDPjVvxAAUsh5ZiA1M2NhfnFW4J7TrgzRGPRp1GvexTtaFX1",
  "key3": "31prSd4ieQQ41cpSQoA2yFiu99JMSycStqe6dBK6UCo8Y1tF2N1Dm3bQkpTr1ptVoSaBWuXmYoAHYLPr7Py9WERH",
  "key4": "5eCAf586S61iWenmkEwSt7dem9sKt8z3jeGeaxS2bTgx5aydxvoLCBYmwcj1hLTRJHPauUDTeSjYBw7LcDHhV6N9",
  "key5": "5VZoRms7STqNM1iHDKdLiBNSNhpy4oh4zu9V7a1Ankjx48KfMsLhhc6o4HP2fAyu8KkftBvuE34dsYL7EQJb8C9w",
  "key6": "2eu9SKRSG1ku7Ur6wKRLyU4PejEm9Uki8LuFaPvzzXQVrSZ9rVQ8fEPdqVaoBe51yFHZfXSpshJeySG3HAaDFvDE",
  "key7": "4Veq7XB5xMHVR7Zrdxckfd96fRAqzBrd31xbgPWBpfjrHGLeLBwpkhyvUDj28DeRNhXZY9f5wrtPz4R2n4QD1usK",
  "key8": "4pdKhvtV2a9ofJw9cxr3DpM45dr9qhoVAY2aaQ5Qxe1Vs5KfU78xEemAhga9fq8x6wDCwByJXi3AhkEVeCdkr5iu",
  "key9": "2twLANmmr6a6VgfAN9Joy5x5y1z89U6Fkfd81P69XnZDMMCTqddGFEQsq2axc1cRN9QRGvTMnGLNyE7J678mgAAN",
  "key10": "4BtDUA3YcvhbfvZeDKfB8weyyxA8Vf4tNDwppHfPpoYeL4rPz72QT9HsZXCDAXZCy6d5zbxCHtDdooQEo4tKrhjK",
  "key11": "5eqgQQbWE5Z5bqz4S2Xohf8Ec6jyL3d2gsaXBViZToGnM77WYgix1XCMMrtCzJrPgLbZVmjZFbDWXieGe1Bd86pf",
  "key12": "PYVMuLEq8LmLU4CzTxhWUVMPng14k8jyRyRyDHmSkFM8SK5SJwBrkMnLtFp8XQwE5zskzRt2xFg2VzuVr2W4eNk",
  "key13": "4MwnxA8WjLvxHgRBnbK6W4U5JcGArPgm9fm2V3UtRfzRtQBdkonHvsWkyLiEfitYvsY483RkA2EZgFMztnTet8bx",
  "key14": "21dVWMusQkmYRc2fBT4ogEMfehttvxmyyJG3faWDeZrLCGGg7UpAhhi8SKENzb5kbGY6LVzAhY5Rx2cJMssToWCg",
  "key15": "4XKKUGSh9FEeb8JoGRQuFfNmqoNWvePgzgTH1xgQbxhgK8qwNjR3y2tJ3xsLrGNdqz5RfHuPxpiyVPpqZ2aaQGpG",
  "key16": "57RBNGYEZgYTDTDGEGBdQotDMi6WWP6UD52vVMN9E98bHpPhp8x6bqpL8P5m2nYCtivkmfYFDqiAiveXoPN6F12V",
  "key17": "3NBYksiWv45jjuoG33aySq6gC45rVj2ujy7m6L4U84APwPGdT9rvBf2CTMFWUa1JN1AgvBBVWHmoXhtusbhNmRan",
  "key18": "3pTGCAkZ1yapWNwSUAzUzWo6mQySXwVpjv3sMGE9qTmzrp9ZJrdEEBpwATWfxMCqCahHi1JL2UiVqeCwNpTjxNPX",
  "key19": "2MX4QPeXQouoHqTk9W4DKqpfGmatBPu4eGDv6tteaP1Fp6rgbhgnYQE1q1MwwGQWPFR5XM6B84PnawrVvJaneobm",
  "key20": "3QQjrZdA9Fi3hxGTx8PRUMHbx39tMk489YY2G8ac3VAS5JvHSNuF2GrQjTWwqpx48MzjHASUZhyQsGcjXVMGecy3",
  "key21": "4UXwYi3S9Cr6HnqeUEsj8fwB7LWfCyeCeKDv1qsZd77jzeLf9YgrUuTx3aC3mxG34hLKZ1eBQQv6WHgkoAn2jgBF",
  "key22": "2gjunqTwFm73gPwSsmjmMvb64AySwtWWoLpkCAaKk7MxBcuHucjmpCETt2wdjQ4h7wmRSD1HZiozBMiY8w5SdBup",
  "key23": "3meCnSuh3mY2BYTy1TdwnkQw7uGEXPdKu4Scihz2s3xoMhPAXFLub4S4rHjePSmgyriYdDaJwRCM5tqwxzWThihP",
  "key24": "35guqu6nq5sTAW9Xzrpd7tFfKCTtj1xExekoe2nQb5rsJRWLH2R14nX3LzojLB1sGgjVPMk8YcbTGuJbhX2fFzMM",
  "key25": "iGaUcgcm7pZSqX7azUZuTen8RBNvy8ECWn66KHhJSsWTSt1xJFSHrNW3qqee2exzYdsoixvbSkJanwcAttsRRmx",
  "key26": "bDY23vvi5D1p9m4vDR2TTkoWH9RXwdASxmZnJjj8uFbYYxJbgP2MdL3cAx8hMXbdWcwjkqLdLwFFAtVFVfay4KA",
  "key27": "APeZmzm1AMRprJK2ciPz87UaysjC2xfakHa9m3hUopEo8LcuNFjhpj4iewianp2mYFS2yDTSMtLFSY2muCqEX7c",
  "key28": "xbXjTqCZ2Sg5z5YWMXp84Mq3RXJQM2aFcHsupJFtG27aZnrtZacj5oeLWyn3MFbDT5wZejxK1HqPZf16FSNJwQz",
  "key29": "4Ub2KRouaKaWFsDwRsWZ41dgACrzBgb9BzJGAMcKrXGN5hAgABGkvUQyMkEtQWgtNTapFtKMqEuKb7spLhMbfRxG",
  "key30": "5QMqkQTxDQsD6C1QLeJZxHipxnYTAfbRXEvATntntYo2r1HDPcJJFZSBYUhQzV5WUndnq3ihLATFSHhBNBAVYSaN",
  "key31": "3j27aTkSrN3V1AmTyqWUPYkT177djDxoCub2WraVvBDAdyuBNKPYSSKe5NNrJfgTQGtJcfyXMzfMFwiVuNM9LYY1",
  "key32": "JfJJ6FA1ne8eETks3nR665QREPFoBmEQwssV2nD7cZmBRcA56DCfbTzZ2BdHJowE6fEKFSkfJnm1AZgVFREuFLL",
  "key33": "34qtZMwyzHG7dy8gDbkCZngkydJSGae7KEDWW6uatDuJjegtH2oGfUUDfL6zaxDVx1CfCnzw1i5ovfPbPBnGQE56",
  "key34": "2f6CzmaWRPbY1xpg59yEvhUj1QcoEbKdPsJbo2ZvKG8Q9tX8qeESNCd1mE9FHhNqj7XLxFBz54F4yq4DQ6cbAMYD",
  "key35": "3bQvXMzC3ipADP5jd9ro6xM2bxV8LJrfasP3E1mYfGz7KJwtQX8Naij4r8G6avXxVuYG1zZG9zPCdgNniNhdvn9x",
  "key36": "4oBiQ24eXGC93HQ6nC4GG6ca794XhydthbVdm32sKpaqXMNDdjFdtw1W4WSgbyTV9e1SFKMjwr4H7chsVECa8fah",
  "key37": "4Ub2bgD3hmYCLLc1eD7ndCnc8ZVU3W1gQQsrmba8cb9LAk4gxeMaYxp8hqpf8TNAnNjTaYccSyziqKY3vHgc9WAf",
  "key38": "c3ikvw21gCfFT5jprsDdr2Z2LqbQsVsvmvgJPxae8n5ZnnpCGG27xEyWVXXcfMycTWSijnwUACFqyAHCaFDyjcB"
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
