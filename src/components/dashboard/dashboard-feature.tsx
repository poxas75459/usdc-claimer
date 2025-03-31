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
    "5QQMvjcpBBT3wcmiqoJfRnxV16YbYXiNjfSbgGSzxSkAmmFdU1Kpf1Wvz5NMsgqEt1kjSkaF9yShyHkQSdYgUh7w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yZuNhQpxq1T9WuLKPsJTM6MvRBcTAGHLN4bKgvZ5cZcqpLj7jWQo8DJ6fnyAr4wnuKHkGPC113gHJvFQAJXFDHT",
  "key1": "3daHmbtGUu21P8xhncybjL9ADuscariLvRGUHRpkP5iyADQ1rd3526fP4ksHjwJwvEehwvZC9hE4AGcbzeT5ZAte",
  "key2": "64JT7sW3VtBiPpkgt5RarngvYN4V3Y68DHt1ZyUfkvKuYcC13SW4SQFMP7ctFPvNpwoASCSUJVTd9vWZ9Cs2vEQE",
  "key3": "3758iJU86TkURXVqKME3e2954uyNSsAXRF4v8KJ1ncJ14eNTujHEQ48hbpAXTjWGFLQnzfxeP3kit1WTaYhwwPpC",
  "key4": "33kwZuk2c4tw7ZgGhZdiWhVNWwEKDGBmBUqyfmGjVVkEfWeUFa12aPtMjxqisx5UM3bJVZSwWSWg4bQB5M794dbm",
  "key5": "3MxSGFxD8LHJM3p33mhQ97ZYQmR4bbCr5MqdpX62W3qL9EGHqQvqXR91QSxFWGdQJ4pr7nRsajEbaiTdRJvaAHBx",
  "key6": "2Wc5i7iS3Vm5wc7oJYyAAnjhTAGG5EgFipdZG2LZBEiniUHPY4q1WwnQs6g8Yj6bSRyxDuUqTAgs6aAH3Mbqow1b",
  "key7": "4auumRExGowxBgeH69iJFHYfYBZXrwamic3dFa8Tt1NAEWUybo8DiD1Asc3V94Bgia5kR5AB6i5ngG8y7u2c54cM",
  "key8": "Q2ynrg6PWgq227ubQCqUQjXZFooUfWCexpRC4zLN8eYWsMvS8cRKozqsub7QX2rVH5Xh3i2PCTykLMaiBh69GDs",
  "key9": "24w2KMptxYHdrDzQkE49v96AGKjhBgiPru9rN9hJTys4xVeJd8SRCTypiNukPBPeWKX1fgio1GWytxdwQaTBH4WY",
  "key10": "2ABNuhv8xtdF4UBNzCMQE7aJbVh8W9HRi65CLm69HvERQhmyJE9H7PDPedj91Bc4saGV2wDgz6VTFNg9io2rirUi",
  "key11": "5tQraryEEdtdnZWJh1ruMBZHnWxsjdP6Fb1C6gbfEfaPMcYFdV7USRyB4cTjGZBSCCevEVjRkp2Y3xz64MTZfeSC",
  "key12": "3uiSBHp4dSqSymE9JFt9Yki1CbiLJdJN6cgbVq7izdPfXXZ9DPbgr6bitUJ1omHUYa6Us2Mor3VxCyBC5LqFjUmC",
  "key13": "4MTi1Qhqiibwaj8PAoQZPG1sw8USkzEk5kncmWgpnSunaXXRUT8rcgxLumJi8aFiznW9e7jktajPkN5nw9Xj1Khk",
  "key14": "2fWVGw773dBq2pjinv7BzgUsdsghwwkvFTckPCST8pccx3AspRqpxoiQ47VSvKx3CzwgBwRvwZYfGW5rRsZBngEC",
  "key15": "31UbJKMdmWW74hS1R2p8zoYEeVUonKRhfeKAtbXkZ2VBcG8FA5AhkK7ZfNX9gnZsXeYLTXuBFxcrRTEGvG7Bhda4",
  "key16": "4gE9v7a62XgwKz7D1FeR5DJ7oZVQaKHsvZabHknZ3kh8uWRn5gu9XW3sPQoWEx1Y6F5gwLBTuYeAQnHbAmSZkN65",
  "key17": "4aVJVkhEWqJ3sGt2vws3otpJnvBXYLhZ2DnMrZPpQ5Wco6pqFuwRYraM6ZYqQAn9oHWJKGW6dN4qt5bvkzDvdSiM",
  "key18": "5tqcLkHndmRwhuk1sJ7oerbUKHUeWTkm9VmbkLoJXoyEc5NHMDCezZTqDrbdCLjoLoLz6LAhLXQNWUjsyWvahoZg",
  "key19": "3bmmuXH5P8RuV2GPGtaZPG21eiESCxVHPCYz6PkyHJsYzk9eXf5F3TPbKv9iGo3XEqaY22JYBjnLCiWmVsXZfJs1",
  "key20": "217fd5fgfU9KhWyodhZFL7JHCs2Y7H8YZSwoCSCnrMZVcuqN3JmDKw3BBCRSzUTyKqiSxUmKAFK1v9jMHfvEDhAx",
  "key21": "5kb866vvfguUngMmCfjWQDkLGdHpW11L9JxyZMa4Q4vDP6CZ2bcLnE4rxfTS6gUMVGoDp3gm9fDxV4S4VCmKLGgg",
  "key22": "466Xyj6Z1wCVDkTV4Tkv6vLWa8t5dzyPpM3BUscFUaBGoYuCdS9MfXHqoq4ZiYwQ9dqe7fEywQ5j3mZieUHkPhbJ",
  "key23": "27CXLHUfRSEBYtJeGG9X5i6FCfKaRqQ1LjM1i2wMtWQGpsP3TUzm3m6vhFU4Mm4rH2P12xFVGaG8CT1yfNzuejBE",
  "key24": "2bVFnpg4UiTx1uj1WoQixqiqWr95hs3B5P63ttUGdRsKNoXy1ZTJN52D5SCQmLyG297fajZDHfpBDnbo9hVEpmBu",
  "key25": "4yKRq7rf2QkFVUs9fzWwCKBXNoVsfD8ipnBY93AfXe5SEW8W9zREP7w5eEmnEcCh1LJupcJoa8ZPTQS6yKFG8k6j",
  "key26": "5anMGCNxb6js173EYp2mTGcPv36LMhhdGhUMLBAJn9RG9qPEe1w8umLXhLPWNrFR9SKZuF6SsJR2FuSz8PSRDFof",
  "key27": "3v8MDHyHsaaKNip1445CL4tEemNUhJMMVnWY8VmmFjEPuUUqUNbN5SbTcmkmEcfLbE1eczSKfH62Ap1k377VXVSR",
  "key28": "3ZgVhnSpyoqxd2CQxi8JSmiZ7iJSbnPZxqH9BA17oduoxUTaNM63QXeGN1s4Ggn2EGrWG1nWJB221hPssR2EoS4Y",
  "key29": "4fdjmrS8Z82F3BLXzfesAyUmq83pDGqBY4EJoYSzAp6C7wVV3Rhf1tyBF7At9VcVgwMHHAKWyh8gjC86BmJBZ1zX",
  "key30": "2AXnRkJWBpUoDgmdJ2QKJF3qRcsfkaSP9Gsp9ZudeDGHdSsNUDaQp6GKbE4RALfeWaPKDm23HafP75tYuMnFvZUJ",
  "key31": "wPbPzRCzzqqHrsY6y45s94mVRxYN27YWoxzkqHnphMh4ykibs24G8sfQkkgZZ42abCfcmose5krddHixekYy53V",
  "key32": "B2V9Qkco2psoipdiHEV7UvpN6GJYMeBKoeycEUd3mdNv9QipBgE4fnLxPPZVgEPkSaCoPCcc6bkPodwkUhiY6ue",
  "key33": "4Qc1wHjfMVJ1PrL8SAU4ZgXzgw8UEnn6PhGnrhLcJ2mQuCrNKchfR7TETjUNXNGzKdQmt7xe6rrNTwqgaPK5uVdo",
  "key34": "4JVm7JwfWHvUUk2opSeUMiUWASbvwPQWocx8aDR3yxWfhbNXG7XCZr2bZQ1aB2LHqZzvthjqKsU6SV1eWCvQThtF"
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
