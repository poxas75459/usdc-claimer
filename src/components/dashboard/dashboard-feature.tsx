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
    "5Vka9McT2jC1NKBod5sfBhCCjw3Aws2vv2UH769i1pn17fRgoMXWfAkDYEQ3rXcGbZNPD7BSQJVPBRCVM8kNe5rF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kUP5R6cTgdp4QJX96XB3gE41f9nCbj4HwZztzem39AqLVEfHDotY2E5UQcQviMaoEgdcrk3QvZQBEyKmqbxTGKT",
  "key1": "5GiwjG58X5JEtX6AVfy156dpCEmiGDSTLwiVVcnrNBdsdqSy4GWie9XAUWhyjtMGH6jgEyV2dSa4AcQjt6ZNFKd2",
  "key2": "3npFEgwHwvU2us8SCx66gFy5F5rDurNXkmjw8jKSLs1KcHovYkTxWfmhsDU1zGzt2PXCDNSd9GLcCkT9jzEhyVPs",
  "key3": "3sG4WojdyxR53f7cYC8qch7mQVmCytAvBd5K3AGrdMamXssv1PYfRArQtrd4MFAvhgsr6hi7opjAQ7oe3fnLHdJ5",
  "key4": "39ZaF5HhCWrTeodsLYdGgmxRo4qYB1vrDtEo3cEnnL4wDhrwsMbubs2BKaKZ9jq5jmfFRANfZqhMXTMCbisN6pRH",
  "key5": "62VLTRTw4PvvectTtzvzUqjaafTbZ1oHi5fuLdnd2Ds7RxDm3wfCvmtHn3pRh2dHNEvhCwaowQs334SaSzTLPiqT",
  "key6": "r9KsrY74tpZ1w9ADkYpmfEwfQ2gkW49sDBJ47wB7Eg3AKcxzZCgB1GAgKCB82EPkuZqiANbz48AQjPCShUzqXF5",
  "key7": "3t8qPYZgu6NFWu29phEVt7mGpXfWF4wvnANJ2jW4zoa4UTDU5bivhx5BRHnBrPoxT1qSHXZNoe5BjywyjNH2TfNk",
  "key8": "421txkG89yZuxJ9kzW7kPaXd6dKC7Wk3pzZpQbJxyC9piTji3X7vhw6K1TV5AxJkXJWTnera8rprRFJLSsm9qvCp",
  "key9": "3FVm5GSAek57PFFvTy8nCQL65fUdi2sj2ycerEMufNtbRwm263DnFdx3BzrBotopLguvap4MaV1SJdwD7Aipyt2J",
  "key10": "dqb4iNByayUh2FEyVGqSEpyHK94RCQUUnJokGuXPUwd6ZiC3rtrS9a98uicaZ2rwpDuQAFTE32CXChgYmYUf6tg",
  "key11": "5aPRf4ScvHY7Ys1RcnWbFUCchQNjGWaK1sFtPWMDoetR4cqzciccNzaH3bk2hUHSH8SrQYzc4CcGGxoQm8B4VrAu",
  "key12": "5HvkXmS9JeHCRwkULFX3UphAdfLNbqtZyHkr1HyiMsC4nDacZETKTA3woSKH1xMXuXNgvnKJn98KFs6qwkC3pnb9",
  "key13": "3bFrCkA7u7Coc1uvWqvF5jPnmbewQyNLbukwXgSX4SMPaNtCLmHQouRjEqVrxj864RiqayTcQJxKXnsCnhGEjuTi",
  "key14": "2GTyiWQTHhLPfzJKQeYmVXg4fi7pBN57twSAfzdhit1nVoymRXeLYV6VcFLSUcP9ypsetmsDQ5RfcptbRnjwEvjn",
  "key15": "4VmKc4pdSM2LrktepSbH7zYdpssuHZUmR3R8RbmyJtUhQQ4rXYrt17e36AGSACApcjobtePyiTnpphv9r2k6ZYbz",
  "key16": "4QH3CWoQitJmqCQ7JTnpgQ4AuWzT7PsjSBwYznVh37jsW1TgYq1txJF9ymYwYjkW6HL1NfXn8AYLtGGxfbEgAqEo",
  "key17": "fHq3hCYftJ5vgLseTM2NHR4fF9pLEAe4Z4nAcTCdZMB8bSM5mYhDJXG9kJchg6yrWRfNUAg2Jj6MJb5Gg1NkuFm",
  "key18": "4X67gTPdx5CRpqNoFFYDsyZCd31u4t73ggLuW4xp3sW35KKZC5PJXmX7x2ZK1wVVQJcsg4rH5LRPsreEXqJcS67W",
  "key19": "CyGUhK1KCFeXNHSdqfHBMuao6yQoBj4iof9B3ndp54Heguy5tiMfFa6XkzpTGjoRyTbW7qrtGemKE9gxSoVJipT",
  "key20": "3XF2w8ibSRmbJUq6Bo3GVUxx2egmgyDJg1Zqj7V9WMnwLsfnW57iY8aDf1fpNXCR28cBnjfRbv9zcQchv5ELgvgb",
  "key21": "37bxyGPeTvWYbu5DKc86KUfpXUzJE466WBPwygvMaJkir95XRmHsenxifb78K2EswWic1dLwoBPEDjHJYMpj9rC9",
  "key22": "599VdH8V99DzTSuc15fyzPwHjmNtNBHZvkFs5VUrFfYyMPTmM59FNBYoh1nYd1jC4ySFEeSFVCyHuJzwwsaJTnLe",
  "key23": "3gLz5RWgKCnbJWqdbWQitbFVqwV61A4HKZnxboTKLe7Fx5qZFHmnXqzvD6PqDo7NbTQMQLbC7UjNGZnHcRaeYoFw",
  "key24": "3YBczw41jhfteiba5RX3Vz8Gvr1EPy2vexPJ3HtquhuyhhqweJ3QX1D2UuZbpd1GZ8iuu1QqXWA2RX3jy1TmgBEj",
  "key25": "EuW8vxPNsKmT8E7t3GsbRMs8aebWdxS6emq78NAReaJSXjzD1hj95Y5yi3H9qJ8c9tx2hX3FNXDYN1PAX5YtxzX",
  "key26": "5ZNerWmvBArpUcftAL8HhQTHYC5mpAh78qwyokMcS4mVpYiMex6qPszbPjJmkeiUBCNPnwxtVioBQn6VAfasiAqh",
  "key27": "47iowDvdhvpXGzqWkTPe3hHVmyXogsZL3uzgcEPdZaLDLiP1MDP6tNpovt8PX1U5JssZWNWsVqxQhTx8nFLyWa7H",
  "key28": "BE8Y3DS8tummyXe8ujJKaYQyH78SquAENWfxeqre5mBt8td2MAKeez86g9mGk6WLrfkCGq2MjZcNF6Eka5AsZCf",
  "key29": "3GgpZXYkh1NZy3494q8XenFw9nPrTtA3ahvkK6eBibsveEhkkvF9EGCJksyNoJBkpxcEqVL7mgCfqELgZ1ifFUoo",
  "key30": "2hcqg7RQmwj9iqhGPUTxQGTMbzykZrEjaZBSgB3huhbgyFwEmtdohkT3PACoGeQVJ8UTyF4m5ixShXeyB7sYKbjG",
  "key31": "3AMcXBdH3WRn9X68ycV7G3x89629pjUmeEgJ59zGKfB11otsWpWK7YakRBVQV3TeRHbVrwSrEApCH67CyZ4VHUz8"
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
