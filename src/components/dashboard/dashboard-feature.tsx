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
    "KMs1ptUwqhLMNFMKZqAkcFLSbadrbYh13FXpzTgZcZx6Fzmio8bnBGagHts2116PGv74THQrMQgvh4XxVT8ZwuR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YoamnQypSiA1wv5Yqqt5kMANsAWg2nrLjTZUcy1Qt6xLGMWWbp5CpbTCiiqpNJt1KRwQj663C6GryQE9xU9aHKL",
  "key1": "5FBGbuQG42hbN9hwXistwjGvc787WzuRijUY8SwYMbWp3pEDdgmX4GHg2TkAhwcyCat3FQPqVUPc7w8r8zvYEVuG",
  "key2": "4fQqfugkGk3cMbGw52NRRaTBmfvMUwPLf72BDUQ34hfSYkGXsZeuPmyLdGvfwo32mqhSWJy1WVsQjnUFUAqfeX5L",
  "key3": "o9VFHZHcHBHHRCJGQAGp6EfFgiFh3nUMPTqSuAk1JqdpdzzWGK2afmy5muRTwWVfsybpCDhR94VbKXXBBX73ENm",
  "key4": "35CDQsEA47BpZ39MtNMzsunpjmBBTcoovQ2GjomZAXUKek4VEvw78gUJAt8rLrN7fuKZij7fcgZor67cqEyhgRSC",
  "key5": "5ssmhYgipPNau1zfXUSpHzM1wQaVuMhnExhQ4kvXqyhbGDuGEzbD427pcqi7P6Tc717uALkS1xMr1U7MmQpq2EN3",
  "key6": "iXghpxUN9kRAz4fiJWKBgq1NJ7oDuoiyZYJyfxeztrGMFA4p8dg5P1zEAZsDFSwfN1iZ73V6WLKYxPJzDuZhwzH",
  "key7": "26qdDpYs6HyuqFB6hi7sdnRNfvfqkJDhYcqk6rxdqso7NLXvr6HqBSieRRXgrkTCbCFfh7i7bPoXJFBK9656eLuK",
  "key8": "4ARyWeZSHnLjQ2JpAQnRpMtEXQGaSUf2FP6nQK1KRKoMfXyZo9oeCCX6Q3iUiVYRrLSZSuBVBE5YB3RbLxTdipPV",
  "key9": "4dc5jt5JWnGu49UDJYS78sJxkp3Rkvzc2jNa98v3D1zNe2Vayzm8HCgD3tTbqCUCAcZm72MJ4dsxitWCNbK5XYce",
  "key10": "5xgaZyB65CpYyihLRzQsvQZj7NhkH74oo6YJszHFxhYweY65UZ7MnMZA4TYqiEUwLqGzqPTEFxBvYTxMhG4vdYQM",
  "key11": "4Bip2rYW4xior4pBjVHFNhZbcmqoSCk7Y3Lnxa9pDmv8dsZdjhWqvQne86Ba59v8RvDufgiGLCHfYmGVByhghLfs",
  "key12": "2sAeKNfWqRA3VQLPstuNTyxUpHFzhtUcjmSAPiFfmANY9dRZqaGWRewSqDhWjdmfy1EfaX1tuKYwCBoFwZ9euFwp",
  "key13": "SW3jgQjr1EwE1a8RRs1ek3QUnFxF2roniXREJGeKaepprQ5FtQuobKcQf9MCveXGC73V7aDnrkan8GpCdBjMUuz",
  "key14": "58kMDobdR6Jm8ShnJskoohnD5fcFcYDdzVNV5md9bTYmGye4wspDLTtCGBRMjnYZWf3YvaE4nhnaey8RJszpwsdB",
  "key15": "26Ec6G1QWnrDUQnQxJUXdrkpZ3HsTHsoqM8khaxSgtG2dm1RrV6vS4vXLkh4xEvFCyMSQT4wH9NdjY4Sk3qJR3uz",
  "key16": "4C5gQoVhMSbTbKGnKfQmQF5LqkzGJmRvSgBUCxz39EtDyHTyETm3GGHgVD5JAtqvNvL3KydZrRDwA6a5pnmbtftT",
  "key17": "3HZZgigp6dZPsEPjJczcuzF7jzbQGgpxs77MWrGsEprNFYSXUH9wjLzQdYwXyYXCt2cb7p3QhfmEqc4QejQBMPYZ",
  "key18": "2aaCguCksrVmdeuGSsZkPfUHpnFmaU1bEy4CoZcLUMGerQgw4AwMgc8T3VwT7GpaoHubJKPQfQaeBzocMRZy2LNv",
  "key19": "4cFgMZH3gLCVpCNYBTNnZyFRewnQfwNhdeMBELKTWgtVPWbTivuqBAyxYFbaS8PgsVf9BzQSDAahEhD6iUWzt5gv",
  "key20": "3eeDnsr3RkxBTjHd8PjP7hbS9jrjUtfiXiYE6hSh3uNcw4UCe5ZQGniwqXzb8FNjLwuazncymdnMPPbWHm9GFn2Y",
  "key21": "5r13dFJMCGL8VFEAAhzsbCHY69v7gCYz4rYEjtTr9YWBL3SPxcGvQ1MiGgQtXMH2d6xTBRnhFVE5Mxzp7Sr7GrJ7",
  "key22": "2HHrxwqxUURDKaN7G1txyEUuVELnTBHax4FcKLEXhfyN5GoRTmUTQB8hBrsXg8RBWBrDTLv7ddGGcUVCPg4GLGsK",
  "key23": "PBuHLgfvnPkwiFdhfkFNZC4UxwoRKVc3aGFFBMcP5SVAekiVTt3knL6pohyKpePKFEFontG5gkF5pWwdLBQBci2",
  "key24": "38YqoAZkcFXYBBu619YBz7grXqzEfcLEfdFciq69giQuBynS6bpibQG9vsSwPogCFJEhz1Gaqncg8FDNJuhAPK4A",
  "key25": "5z4erUFKJ1sEhRKM24CSHkS1Mfn5FNVmmWTe5qpmAr2ygXSgjgUvED4vviDoMU36ySFLmbazQiXkzLVKNLQrk4T1",
  "key26": "4T88RpaC8m1Bmbu2ezQrjrCkJEfS4cnmdMgMaQ5QmjNHMTcc3HurLncgByucqHsVVUWt1Amt8CHza852Crohib5n",
  "key27": "4NebWx573KdjpNSYyY1ifbxaNyMNZsaVJ5nzbhqfudPx1fq5GkBUNCoZA2YtBfcjWpgdWF5bBjH1q4GtekdvYohg",
  "key28": "5vYJ78eP3SFav4HLAFcFxTuGKMC9pRc8YW3JDqpkAuhRkD8XBB3pDrF1FxHTg5ei59iwMdqyQDQqekH5e9Nha9ZC",
  "key29": "2KuicyXw4GFUjTxEctNgZjZxZDiD9gZeqdczR5uXF8Js7PU5ZLcfCCZ2ZJrdzH2eijmUn7tW3AMuxr7ZTHKjmnEJ",
  "key30": "57XZvkx2XNVkPmQn9pdFaQy4SVNpwE7wZ5cU3tU5J8vzvMFB1oY94FwVnxb4N9WNmEfYpuf87LLmi4Sva5xm1T1o",
  "key31": "2E5uanLiWo1RfZBRKBAgsv8r5XQnxxoaEBuavsLiRmLFiwoKCQGFB8Qy6hPfZVW9k3bYdcjoRw2v9p5zWU6wvnCB",
  "key32": "4B9hg6U2nVCpauh7AukG3RrQtTt9kuDN5KLfqVwMHRe7dc3DSi4fTAyYg7zFxS16HhwPpEa2RAbai6MvnTVfsycr",
  "key33": "ZB7bR6rLij72Mi5cxJ43ipPAi9vT1MTpk1YGbKwZB9PDWz9gZUee1ZdK5dj32e2FZdmQ79HbUWZ1pzpWFXnjdVF",
  "key34": "4acBqRB3691sRDtDPuqGaKjTMqGuBBXxxJTwjuwjQDnL1AWdTXgCTVhcPGMaSk1U73EQmL3dDStQM5YLK37Pb5wv",
  "key35": "NPTBVJL62KBwP9nmgYeLzMu7gqkzDe3AkdinxRsjvU24ePN2g9CVYDyiGWViLaNPzDzEdssrUcxjcmGqStFT36y",
  "key36": "29CcK8ezQhKe5F9HbrcfPgssnH6ubEhuJxs9WwS5DpPTD7wWkM4Rw5vLnvrAjyxa5X6Kb4Qf76Z5rrcdYePUZ6A4"
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
