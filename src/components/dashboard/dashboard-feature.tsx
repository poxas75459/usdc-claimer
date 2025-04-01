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
    "Tjnv4B6yv8Q4v4YEq1KEMVHGhw9rHs1XMGm6LLAeVX9FP68QGv3nkcKhoZcyPfn5dVoia3EgkY7Zs1n5dNhjZcM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U7rN4yQLfRgZEHgZjknM4R3uBoLLJKhEwyG23QLXmS1ndPXAxwVRjkhxgqNWUpTZbaevVtiBKDU26fUERu835uY",
  "key1": "2saUxWpWLfLKJCZFqvSVtp3zdQQnf4aKB35eB4nJEddm439TSA1K1i5LwZYCcP7C5LmLFM5jAgomFJn31FzHXJfJ",
  "key2": "FtPgQWLDPnPVVaQvfvbFth3pHkcz7PmpUzho51rtee8nwQ7AMfCvx4crpUNRuaDdCRT2i8TAGK5NHXoW3viXnmY",
  "key3": "2NXu4gbx6xer4JQ4jGRM2SiEgvPr8Vg6nsnW76gSroSJtpkovispnQMAWmmVJeT4Jm8at53BfMSC4iagghiXXGaD",
  "key4": "5Kr1Sk1pi2DLLdGSUr4hezYbVtpeCWbvygU24TxogcNxtMbigs499eCvuNAGVrdpXubVFwdtzCoT7buKVoXpzK9s",
  "key5": "4xiHu6whu2hGiE1JHmQZstmsnQkANvZ6izoJufHSfvKQAzUoaeA7yeKwAayF1Tuh9sukAZvMcuDRDR59Tqw5Mmk9",
  "key6": "zquEsHGtq3JvaWLvcXi9SMY7oLi6cmJ8WXMz5cUrJ7LQKYT6FRMP9cUp3EK54tGZBj1eZUW2ek6wgCuGYWvByiK",
  "key7": "4ncu5jUeNFRMkikWpLnJVC6nMeRuXLZjFU3tf3fL84qy7CAyQwTfv3vPqsZpezXvJhkcXAdyPxjjK2E9aT1Qa12d",
  "key8": "5BD5cnyTfuSUpjckZRyoUjosvbNGx8jnjEdaNpQ9CkHnm883oQ8TLDinjcctHGytVniAxAF9pf1SmaMsR35xVru2",
  "key9": "5ToMfURtS1xiQJprakDbJxUEfCRPsJpWcvBmMN9dvocwQa713qjJYKXaBqy9Yf9cmn9JuwbVE7iUu1djE7jpxEa8",
  "key10": "3goDxnCd2VwMWeEZGUmyoGCG7PVBohb9QGdvAAuYuGjUQxNpvRXwtr5LNftQVt3SiKjRPojN8wfEqEwM9JYrsc9m",
  "key11": "5KFSnp6b1TMNRcCZbL7DZutCX1MMo3At61QyUJKfBGm6m1ccVdyQyYzWWR35np9smJgrt4sHfTSnpWFV5eDBgDVt",
  "key12": "2jfG5M1w2spfajAjaWB5uJFHMWQ6489VQ46rnRQq7915i4k6LN6pZNe7vei9T3LWpUh5CQPh6u1Z7pwGv9PqN6Y6",
  "key13": "9jeW1AvwMPo44B74X6KmmoWNPNQjpmx6mwULpEuYtrDvHwQb1LfruaPXEixj7WcraRVgVuvY85D8bdeTRXW45S3",
  "key14": "4VrHQ2vCzn1cWeC4bFEcyLN1S3tLBujNMFkSKRRn6ARUwH4y5tkUBjZ1GKcoade7KfxTr4bpFk3ptT3jiuP1VXrb",
  "key15": "25DXM1YpQK7cc8EQF7JVkACaSqV1BTyqbmdrALpPc69aSvUGixX6NjTcgfHcmVfuddkogJcgoHkbtdurLvugX7q5",
  "key16": "3KufEQhFmsXdLCpjScx8arMMTgPzW33hiAnyRnaSRU9S6uxeabzrXrNiVMHr987tM7mMtgmXiY4DrkDkwjc1WCsb",
  "key17": "29FGcj8KKuLXtroxynmpxspYgqosc8ShJwGz6En34eWMuD7NZgJNgoAsxeEmt3G3e6sPVfbjBDNvnujv4LF7UJL8",
  "key18": "Vzn3VCmmtVZrr2UbWusnSFRT18sz9BsKuFwaEbdhtZMXmzXnhrzDGbW2iTSeeDmkBf2VNTx8ZeA9wYttcoU7mmQ",
  "key19": "3QbSkBdiX4XbbJS8hoBTo3donxSE4WpgRYk3VEtryPAjMUSPYRonuPm6UNgwYghBpaqXLQQJk6pghvFcFXT5QoUG",
  "key20": "rZLUg4puzCPAFTTzQMMGrfnGHDPhF6HqWZv7UGEW6V8J4sgm6YiGfczxqGPExvAmMC3v3s9WqyWjbMXRLr9ojDD",
  "key21": "3ZLg7EKE5pdKpRnBNmCCbBtXdHD1XyeyV9AFB4doAttQU8B2AXLWuuGw4wFjAFMCPn1dTMiCh1o1fQMWrypi7acf",
  "key22": "2mQvLR75cPboj1RWb3SJM6VQJLLqVQ9PuabnQNYrUSFXkWx4gT3FNMMSWdthEcDZZ3pLLtxJuRBniWrkZfhTiehz",
  "key23": "ETwNcts6nLgn6B9RMDc4Fcww7zcAdmLbQAC3SGFTjXZ9GxnZEUkxWkR6eoLPtpYyHSrLWHQ5vccQqQ5dxAHCBoG",
  "key24": "3qLqY1hQJhBnbwsTRDGYR78XsDrxBG9fLomEzuw2S2pkGaV7uLECugkSgnrLSqCDSXbH6SLUao9qr8uzvQXRANi2",
  "key25": "3E5UcMjjVJhXCyYAQNSMCUAEXz1snLFz8bhpHvuh6dq8WFqmVjpshpV3bGeVirXDWSsd4Tw79psGjhWFan9oPNC4",
  "key26": "3ikKFdbmL8GvaRdR2kRVrz6jTTWfPWoZWeUw8fC1gu4TNAfk3vrPsmHWPpE4VzoQk3mak9z5hdxEKwVGd8JD7hPS",
  "key27": "2aGVyH9RKj7iuv9MjXfVBGxc1ipgSyHdmdua8k59vTQ7oWCz8jpPcgLi5d59Eqbw8gBHimBRCJH1Gp6kuwTGuxTq",
  "key28": "46XP5iPAEhas6jYMLZTF1xKGwdeXJYxDZQ1yqzXmZEJAkowwhHeU4fGXMNgwNkCw8faqdt2JkakDaQi4rcAhGqwi",
  "key29": "3QBXDSJ5rZFw9y5LyjmG1fKNQvYU7b2tjGj3Vog2CNRKCHbF3xsjm9UcAHh4mUVRBGt8doz2xFCmcJ3K3kicmEkm",
  "key30": "67W4UL8baMEatBivQ2JaYF27i4zHTEXUmqmFZRFR1MwBEjbLocHuDoqktvcXhzBWhwfJcfwiTQJrWxVApg5RRjVw",
  "key31": "2Vf3zU6m9AynAH46gu8vGh7udVCkFDQWTKzwDsUb6NqJyx7jWqTYpDut6XFiHsH8jw8xZP8TxEUYRtV2mfeZ4RpS",
  "key32": "2asQKEWeY7KntrqyaFU6VkQSQ3aq4KdSvtFbM3A7akFcFWyWTMxknFqNcyNRyHByJvLmD3Hifg1RWSMWz7Q2xVws",
  "key33": "3kCYCL9yGYFhxjLKcsVcVeMHFypSqZvCRCo5RdU6RfzLhtcWFUfJ7JAhnpRSBJvNMFHFnbRCVhPXAp4k7MaKyXRR",
  "key34": "5QcFMh5PKz2Z64gJLHPHwEk8RyMXJ8AW98vacmH4Fx3unKXdjRJqhbZtkxL1j1e6gpWCcp9mdabCagbkhGekiJpY",
  "key35": "29ipATMm2fWMz9iL33poc8QFBtV8NJQum4JUMzud24QiiSYYYNgyzzMWKtZeFC8tbCN4XaD2Tji22oEgscUS3Yrj",
  "key36": "2ByQn8sdqZmtydPoXb2MBrQRKC17nasa1sgaanoyUByDNmBxNNCzvH5xQXEYDe8ii18jQ5cEhyD4kLjKiy6QGHJ6",
  "key37": "qCKjDVTd5dRJKnRkgsQNduoUbnX1z7T8fv8xXMeofnTpsxh415hA4YNLfkDuacsBxMu1YSXXaXChn3HKRCZ6UFE"
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
