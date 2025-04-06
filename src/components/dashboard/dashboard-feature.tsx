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
    "534fBVDpVQtgXnxWoek7AMrCd6gTgYxqui6HB1N2ubX2TQ4Lxqs8FrQx4vjMH1Uh7JBr1S2rceKnV95b2LrRBTz2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53xSgin1D5cjENabPPLJ8mEouDMTSmneFvMhWB2JCFTBBeMRQfHJZmN48zs6ZHrbQ6nhcb3L2GUoYHAayiM1Ws1A",
  "key1": "5dgFWdaoBwWi9rLA4TE7wngtWU1hbhA64jRVYpU2YMTLpCXd36AryzDTJQAZQPWN68q19LTnZa8GK8YZ2X1yKc5T",
  "key2": "316s7Lyfe2V5nWci9oJJgEJLCXuAgPZ4R7JCxKHXGaMjq2jxYHRrykDyWkgcKwd4ytrsYxeSJRcHHay3WtPXRCuD",
  "key3": "2wdpxSRJF499aCXSjjDkT9YUgNdGEhCgfqPbp16SUvBWRRNxwVEJrbqymRJjZ7zoKefH6QYBA3bj3zgxzAhRRCCa",
  "key4": "jgfPDtxxUzSEPryNRpUPX5FL8pBCjcottkds85w7dKZd6dDiVkmTKUnwZ4mQSmsph5QXXzE2yybyLSgkrRsGQYG",
  "key5": "5ffV7dF3ULZb63gPPyZ4fUyZUJ7S6ymYPLf1ZmQGJrBUN2MHCAx9A2mDptpngYiRkDfW3vgotrCyLVfwu1nQkksj",
  "key6": "395fQCT8vu8nmFQ9QMd5URZzxqbHBidrEkjYoK3tL6EwW1AH32cAsQzawoagPfnpERhg6YKRB3DJqjAKPb2Zry7F",
  "key7": "2yfzYaPDSivjuigL3e7nJGVLyNRRjVzGUSogBJUV98JgEWKxeYc5v5ux94EHJfzg2fEA3LgPu36hPjgQzeNRvvKa",
  "key8": "45H7iUnXzttQLohs2A17rKHPdqwNRxpC1zqHsUCEBeh5acZ7Pi3LpmNzFAXJX4heLZb8aAtq3XMGZWH1qoaAXyaE",
  "key9": "3FCerZTV7CFf6S7EHv3H6sAVKpSFC1T8CADfLGtyd6hTrneXCfkEhQJvwG7ELkEPUW8xQGiFD1XuUjDZhiovNdpY",
  "key10": "2X8FZD6jgc6Mq2aNovjgH5W5uxDZaXEfyJF792W21a3HGmnZYkk2HBrAR6JLXhb33Vpwp8LzD5u688gzS539DSe2",
  "key11": "4LfTNNeJgqWZ9sbsGwntMoA4WjNSgrec3Bfb246SZB4L4fQZp9quqncVn82Z1f5AC3X6RpnAQYUMJvww3JAgeTjs",
  "key12": "5nQoWLQcRXwexcAZEnzoqsoD4nuK9qYCCKgQT7nKVK4Xgze14fauQK1NYCQmfVEVWSAANWaTN3KeRdmL4oWoTSrv",
  "key13": "86h6vqeaqGWQb54FvPPXKB3Tb5E9ZHXxMXNz8TopS9X6acQ1KeA1PMgwWDR3jyt8C1j3xwxvpRu2kMAQUhWgE9K",
  "key14": "4E9EwE6Br2BhErDTxF3LvgbCy8VbQ1NgFTc4MoiNMJz2w3cE9H8iC1TTr5cABH2yhEqgWaLpMgfZ1eVhpSuU9emf",
  "key15": "2KTnymsQdUR2rMDATw8ZQACCijuuTUF39P4eC5aw3WtRJiWK7BEBagFvXubqWgFrsfbprRHBHLTgzFBLzt7ENoHg",
  "key16": "2g8NbeG64MqbnHkYNbK9CVkXTZbK4h22n4ucSFe82UZjheScB6ftfaAMsAecuXnpZJxbajFHv5LC2yjZXcqG9Gor",
  "key17": "5j6ZuTGK74UHEjmyqNkqdpLr37rWAVfKJGdYikVP4Eur7x6YGtFf73H5LzYpYKVw9AGzsnRFHikk3Y55kFhGtCSV",
  "key18": "5zwprwdcHFXm2PZtfVt48vJVNYAsupfjbgyXQu6nJjH9bEYuriGhP2pLAxaNuZ6M2qvRfbEgUneMHaMKFQZDrJMh",
  "key19": "3FP4tGtD5UKNQBKHMwJqLQBuKNbCsZyQcmkGAVtqzG98z19vFAhH2oFLLsnTdmuhuEaHbydZJMM85atmo12yC2qq",
  "key20": "4yu2zc7Xhv8fGMmCWUonPmhZJwyd1mwyEDwydxAMjxvh6U8Zyi87MxzfUiEiFKsT3aSYvCjgcpKx1epyUE2wobx2",
  "key21": "3FJe54pNmXM4AdhiwfB6T6sASv5rGaSeBqLwfbQjw3nFUVpXcoRPk5CtWecNR9UaB67Uzbt6ZdE1KhCyhfheF56U",
  "key22": "5mrmuYXh1fqqpsxCoatVPp1BNFoEgwvgCFz13vnk1hupwZZiriNcMYJyRjqG3xiXzToK9uXPyx6RCrb2dbHaUTdy",
  "key23": "3EV9azQw8CSS65gLxoPMHLRc54xu1PBLZLz1n8o9EwQ2TyznSpBfSyY5NEmNFjacXu7X4fSp8NMCqtMtGcycfgpt",
  "key24": "4vv7PAzKEGnR6SERrKesrgFLhxxHfjCcuZsTHbduFf6rUGu3yHUn2vDaLkpqZW2ZfH8GEmWAbGgnrwFVMU1KLNsM",
  "key25": "4NC5aJZG2hoNUUHLdTAHSeoRoJyDEL6c8LHVjPEQLVTenSh3jUptaxnvcR9S9zNszAg2tgrAQiGnnydHXv64FB5j",
  "key26": "24QqXdD8opvV8U3xiucbZkBugAKM5scQmeWsXr3gx3MhhZMEAqSoyYEQDXHLDFKMePPPLtw8Et5GK28JhEciSFY1",
  "key27": "dma7Z5SqpoUxFPstHQkCDEK2ra6cRzkXLzkohrADBvd9Bev72L8HWY4zfPHeALYmeDRPbzX5aVuRbavY9ZgwLXp",
  "key28": "kee6V2BPzR43uSpPv9Kt3hvvzPvPYm8M24zyFvpLzYHdF483ybuwHcDPzgLA4Nspm6zgcFJKgErCKSLa83kURp4",
  "key29": "5GvrKELahP2jzGSaqn1g9dUcTCnGEBdYQWuGnKubHT2N8eBY1h5buYr8paUYNZT1Fy8Aoevix7Q7DRANe4aVse9q",
  "key30": "3eJDiDScMSNrBG3xLab64DpYAp4UUNZ9Hi16yWuPdkGibbw1BBnxGCzow66ZsbmxDGUxFcYiwLMRuFBWiJ62V7M3",
  "key31": "4AaW1QUFC7iDxXkzv64w3Tb7op9XLM2di7f6UmeEr1YFitKzzABGWEN33cqEvGCS8EK7SHxP4KpagEcNnGkzZnmd",
  "key32": "5X4YgLndCJnopgD3MoN3brSDe4KRUqM4YQMmcrcTonz1sUubB6C17mXb3D8LDySkX9GXjZ9ZLAsWtMey3MDmsitp",
  "key33": "2AMx3PW55FBf2vzQL5CUKhKweMPpGL3WWQKpWiVFqWZ4Kk9xvsRzj7EkPPdeNQL4TiWa4r8db27mMVTLyNBmbeBN"
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
