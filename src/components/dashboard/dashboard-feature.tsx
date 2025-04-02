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
    "2b2vfCbJm2ZENd2ar4xoqPVTZf3mkwEmY5aZCRgkzWnT7pozUp66GcFktgcDEoSahRDgCpmRqfhvop5F42qtrR84"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3J1r7WoPniMRyhgDxu8d4gKpwUwJ3AkAnuRjvZcNcRNpqRcYGp4VmH8L2DQAeukcGtt8EGZHKY5ftbWQLAUeuMXt",
  "key1": "45eWVAtC6jzpjcnqRwZ2B9iNGqHC98JMSxrZBarY5Qf9T4qjY932VqC5PEPsSzBnWNB5ePgJm3V63WATXPWZcQDz",
  "key2": "5cwpaJhtBgDbuRdb22Rh8YkEv8fLoPpVrigutcT5Xbin7KzrauXnpWFssL3WFMFLv5L5PbXCTm79rjPZd8WkvCdA",
  "key3": "3xxmZudZiLRyfEQpCYFwG9Go9TG38irf2kUNmvQBrCPonGRSKuCAgds4NouhJSaoDF5GGFVDj8wU8RtRgbVdj3VE",
  "key4": "3bMRQE4t6sRPYjkR3ADQuRazWy1fP2eakw5uVXmxHvsrTJU3nQdkktRrvga4boYrghbj7rfiyBZJMp2ipe5jxNaW",
  "key5": "4fQnPDbxFeB2qVQfdLHuERM7yHFoqxoHA5SpCRWELQKqFvGq2Snbutyt4jyJRieNyjiaQnYNE8EGBVD84gfLAoXK",
  "key6": "5gC9xggB44cpzKNd22mpA9GsK4UgzqsbUWNF3GvG762BE76SWqjCciMa8xvzaMxD6HpcxvQHxwjHhEybHbtqaqnr",
  "key7": "5MADmv7hTPsdV7e1x9chiAyTqF2KssMdtpUH7SorK67uzhmbnq1RAbp5VH7PtrjP5chhUNrBvmzy47yKHKinYgGm",
  "key8": "CfqcUW5rsTeFPj1BvuYUg5nArsEbpt4EUXxS76YoBxLxuGP3WXJtH3oESoXJfYLoTHyPRuHZ1j4q38XSgwrJWLR",
  "key9": "4ds9L1udDqSeXQuXGgpGVgrpnJbsRv4XpyAmEVm9CDr61eMWL3S3pw5gwDW3osLjLYbCZSD4F4mgudyEJuisjgzb",
  "key10": "26HTk3VRtVTGU79FWMqQh3CTRfYxitp2WHu26P8e6uGCNvMoGWsFFk3Em4csHegQ7dRAoSUsQf72XWDEhTSzjvZU",
  "key11": "5dGFFq2ZaQWJHCQzEZwL3LHuWXgKzXVV72h6kH8ndvvFyJnrHBKNqu1wNHbNnW3YQZMCEL9Bo9X8dfT1RyAFfbcE",
  "key12": "2iGhgEiAKqpiS9j7tkSD4Mmi9qJvjCvcSNNp2p41xUFjT8h3zY525SymY4F2pMVeyD1DzJdxR7v2NbEgEbqxv1k1",
  "key13": "3PmgDitJ3GC3GUGwXkAYtSc8AWqedoWXSHbUnK1wPMdtvCiLAs34SLSzcWG7gkfz3V4Pr5tHTqSRTJpWSYT72Yvq",
  "key14": "4JAwAta8ZmB91U9ncFvXQitN673Y4PVuUkRTqfDvxLwb9hKpB4P37qkGW7sn7YgJwmV4qvyhciqyjXQhUm26f8VK",
  "key15": "3Q3HW1vjEBr3z2Sx2XF38yEUPCdqBr6JXEV8G8ZYz7E898vBMzNiRbJwqsaeiw6D7vNj4ghtuEpmwRs3TGrYyRxU",
  "key16": "BHpQxQQDWbhYU3oxvM4mxqbon2N2iTsm1HfmDH7JHjnyvT4bWdfjHaQk698cpWKgobLyd7hAnZPhvHRJVvuurbU",
  "key17": "4pFucV8pxES7htJ2DoRrBJmArxaoxH6WWZpJgMLo7XXkjLqFWM1vNvJ41pNY6R7xDJpyeQBQUJnwVpKY1ni6oGMP",
  "key18": "2fdkMKp6uw1aDi5GEfKq2mTa8qUQVdWHCdqRK742Mw7dJbxJsnwX21iRH2B2dwLJxRMKUPCSxJKEuUNEoeevWMii",
  "key19": "3sygLAQ6FMoHStnLd4aeAQFk7VunD2wk3XThUBPKhPzuxiMPyp53TmwzB7FYhF1u2wHLcEmFRbsnUiaYMJxDPV68",
  "key20": "2FHwwBH1rEi4kkBoNP4MuVpGbovbnHDj4QtNGwh6KV5yRqB5zm1gkk5gm3UT8zcrkH29cpPncPyL5CCYE7w12Y4h",
  "key21": "3JypUZMaxHxbnbBojJ4rAEpp59wDYS4XNLYxNvZr3RFycCJZVH5PLrtiCW8RYEtRFhFA738uWcxL6oMTmsZUpjTp",
  "key22": "4BSaGPcJMdpr1EEFyqgyNFkZXTmWJSpavJ8WYwqdSQjGE53J5J2witWZiVtBH9uhyEy2JzRWrPyZqCsoem32hyxP",
  "key23": "4KwxbjWEsa7zJrHRNzLqVQuYoaLuAehUgfduWPUpjvjfzrUz8WNaMNhihBzVqotZd6HdMUewNfWdNjj6oyyo5aWr",
  "key24": "tUdpUHPLEZaaXhTWbnHNAahnE5tcaRMuPkkpTEcyjkAspCmx2qR78DSMex1YcsZsphq3cvqmqgWKmabU1p3eCK8",
  "key25": "2sGGiVVM4gKQd5n98g7nsKQQYYUrYuuhYfPZLkttQD87ZF3WJWrq1JMeQzq1NYcxs465fzM4CA7CqSqveGkNsvuq",
  "key26": "4DRF9DGs8z4dUeJs9R1Js5inXHE5Jqo1vkmXFJf1GVofRwhyA1sffwX4ADBXKvdL6dtW9bLiUF6xi9vxNibheuiZ"
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
