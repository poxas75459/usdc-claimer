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
    "Z9TDnHM2AbBWnWGa8EyL4gXGSWoPPAsRUUCDufSxFbz3v6vbcTLqTH8WrWKrfMf3LLLCoDeifbmaecfyY2qUa4j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QYuFtxDLYEA8LPVHYKU4iotX5GxwEHDy8RYx8TLBzRGcZ7qEBn2jTNgWSxUXzrTvdbe7QoxCtD7WFHmy2tFZmLX",
  "key1": "5L4TuBAaTAYLkhCv47QqdDRpapcg9KfsUCgEDKh7sV7ZfXBgmakVFUqSH3ddgbY3UvyvWm1ppQTE3sapeKQvUWEo",
  "key2": "2rjsPHy7xXaU6VdPRfKMxdpcXyRCR3F6vAyToSmvWPpxkzGdg27cUVJt9Zrda4yhSUhKf4Gejv1u76mafd2F2JFa",
  "key3": "5oUEUSXAo68atGyf93E9gk15rE9HeVN1SZAnUke7L9sjQBAHpAd1dQsGQGQZwMSkGr7c54tPbRRfWMm2oMpGxAWZ",
  "key4": "5t4h5KrRiq2gGqPtSp7v2deorzyKJCdsWjP5SkKMTZNkz7v5JegzAR7AdtvTk61NDyAbHFKAPNzEs54MMhbD98XW",
  "key5": "5R9rGoRN4QSzUwQmFXpxxKQgbeQcwQVZx8Lc4VCgvigfQ9B99Vb3UFbraGweHmXFvTzkhRqJCJgSd3UnqQG54BmK",
  "key6": "2uQnz6uGk2TGHgmFhcxC9v8XnYrcN3W759mW9wYva8JUdQhobX4Nq5vTXSpVtjX152dHiLcNqZBksc5MmpZgwjEu",
  "key7": "4m6v1H9CvG9rdmpaFWb3P8SuU3eoJWABXgie5BByTmsoyfUvWQaP2MyABy5cmqAGNLAdTaakpziSzzbUMi5yV8AU",
  "key8": "5HVLJU5YRq9TK1opAJ3dLx81H3HjV6wErTKcP1i4PumwzQ3EJT7e4nZhkmc3PyjCBWaf8NAFZePe9Uc66Qq1okTV",
  "key9": "5XWnPRjNkyVzERtvPkNn3AbUTv7m1VSGSktfuo4eXS3oGMuB5enLLx5zimWTaFBMY9Btu9VW5DNuvJ67kYQc6vyf",
  "key10": "rgwt86FXcfrGubhzanduha7s7bLdHYWHVHhj9xECtRk7E41ahqKgPC9Qx618zRAEMk9aR5H3SztQEqR3wQqjG9L",
  "key11": "2MAoeTno7aKRpaLHSeq4ornx7mUbMgyw6VwDgsFBu6gRYoh7P7jJorBxE6c7e9QFfsGMfidXwftCWqE6HArZEHPv",
  "key12": "2kot71anFJw4q8P3UkFNK7b9HCcvY9A5sEiGzeDLChhscxPJSWqPfEHumE1LiZba8WrZGV4Sxh3XJ1dKdi1sXv8P",
  "key13": "2a37ncrssUQna71WQjRma9WgHs2HHU8qckDNkYzmVKi7YUJWGdUp4BiYatJ2cz8nqDgzeoF6xmdqj2UYye2uFpJo",
  "key14": "2RuWpXkADkeoMmyaiFmBqMcNjr2KnQiZmwHCGYJfriVDXspK1WSWhVstGPsAF6P1KHGR5pN8LaxhfWm2AnAxazsJ",
  "key15": "3Nncfjkx8hECXQ6uHppugWxLsLpA5YvME1qXUEVA4gH9Hhk9SsyGWQUr3jKUy1QnHdkxCUQkuGez7B6Fz2DKTFqh",
  "key16": "4qHuTBvCMsn5cfMbSBg3Vu6pJUPjcftbpHx4QCGdvU3CJmWmjjLsKgR4mcpF9cdjt35EmorppbaogA5ZR43tm1mf",
  "key17": "4DvaCdeYm1kP9L2aKzMs3vstEPUGPMo4Me77XgXHAUD44QZwMExbZ3x1GC4FGwQNFgQgGmFDruKdZwoHrRHKxXWs",
  "key18": "zSNpoaRYrcEvt6N1WznNoN7HWGFQG9pf6s6XN2WsEbfrWF5HoEp1WuBFpjv9e2CgvuBnojGvs3y9fd8e1dG3deE",
  "key19": "5u3PdJk8RnzP2Li49RjkdSSgMkJRqAagS4Tts8UU2Tu51KVQoCkpd8zqpHNVQSjwVaHYjXfAg85WhFrfG3ACcvMX",
  "key20": "2EtsF83osdPZfio8JH79L79kLUYjvJgyJoqMwyWp7waCRm9rZVEpy3jgU5ok5PXoKezgUaMdoLvm9aC7Qe2ZhCnB",
  "key21": "2cGdqmD44KdYxNJQwfp1WnwKWqDCgWb6QfkDNtZGnuQC1tXpnnygVLyEYwqgH18A7WuqZ3uMMw5pWHv69uaV5g2i",
  "key22": "56xPauZfj645FwaVGhzuUD9npUhSyHFDAaUVKAgVN5TvPHNzSnm7icg7pX3MFjTP84GUquGe5bv9EBEK45C2fMWM",
  "key23": "GFEfYciHus2wWybaptiux4Lc9PuZrFZwbneiC8CmjDbQfrjALTSk1oCp53UuoSq1XuApo8J32yVQT9FxDAP3z5q",
  "key24": "3FkniaWtLKypFx4geqSasA8wiDCNhiU1NPjSPQhsHmjJV2bc5PagpnRPJqofhgpPofFrtm8h4M8ENVtL7fVRtVup",
  "key25": "4pLaeomYWtog7Tmcj24bSKHMWG1TXxrcMMc21zc7XyRPTKs2GLGCxwQbai4GWFkdstFdfHaTQb3urNBVgYdMBDvg",
  "key26": "2ZDHHyNEFGeb5BJQrVQviZZanMEJMLAnK4pAkPMtV2e67bTEmybyPXiVV2rAyTHXK9Mhigbatu1MbUNmnQ5GwMvr",
  "key27": "25UZs54y381anavZM11yC7vPs8THTN8uNUhj2WDRKRZHmWTCo1wVDVZQQfaQVx396pK21YG28ckG7SzwjUXJvWqn",
  "key28": "4tydwuLyvMeFEoyEdwSSutANfDR8jmMQtfMndTRSdf7bxf8mMRv7rV7mZyaygF8BDDwwmALR1GSigVX7tLzztNYw",
  "key29": "5wt3ZaTkPpQdWtKnnG8TA7gucUTtTfDcmcnQzecB5Q4cDCZdTUBy14kYaWPgXHQLQiscUFXXSfMwzpz2f7F3uBT2",
  "key30": "SdavFsn3LWW29bAdEYp1Jbs67KxtXfRsLwhSZT3Uh2sDnYH3XJLZ76kUkSkC34gvrd12jgiKbX2RcGMUUqXDf6A",
  "key31": "3FUX7Jzd6Ruddg4uDc8Akd93uUt2PNinppKMsxk7w37mCeMrLhSEJ2h9wLpt8LXndwSrRiVjipeuJnE7WJvQyrWq",
  "key32": "5p6yj712kbwSMjQEBNh7Bx4RkTQNt3NStkoq82mVn6y1NywjXxF58EBAS8jCF73P8JHDrEYPnHRtpDxeeeGjkKHX",
  "key33": "34iujWBjEw4gcMuLxPzg7FzSxaziyxPhKCw8q6XkG4EP3L9WDqxcD8KH15YtbNArHmpsAuZ2zyH86NcYbLH6AhSb"
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
