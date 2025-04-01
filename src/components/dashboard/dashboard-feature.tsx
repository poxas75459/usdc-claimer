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
    "4fV8vNoKSFcnBBp55T68KEzGC9FStsS5NEuqBZKMD2iytim6kcpWpYfFjZtSBiktLJCnJB51QGwrxvUdHsbrPJQE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oajnb8TM7JDLsf6kVUJHerkpRthKhwd8nn7gkNDhYXY6ukFPstxkD6EkaQKFkP6ZiqiPYcQgnj2YiV4EHALwWPm",
  "key1": "3oSaQhPgLfm1MLhgRvxLvo3wxgCuTANpDdNA8tkkJchdcgbfHbeCKYzMxyr7s7SZcRa3EFcnJWjhg4NcEuB1t8wj",
  "key2": "wnMc8Gk2xGDGGfrusoE61L2HHmdJKi9oj1RtnLaMF8ms2EYLdwTRRcQoFk3VnL2urU4dvJHxbmxYZWEUSBa3Aon",
  "key3": "5yK4B9rfW6xnkaviRUde5XEjwi3YxdwP9qZpFs6qeoeY9qwsCs3mbcVSNcFRPMoFyn8sKZ2MYTtQMRzptJhqDwGU",
  "key4": "2YNocBhFPAesxc15MAoQkRMo5RjsmZnHxy3HJ89sZZbHijXHxToQYounjQmxq34iULRz6r5ej1VPQsPz5kNuSArZ",
  "key5": "5bMrrQK2ZosbuQDiKypzrtMHenEeJ21dT3VmRCC6oEKKF5bu7Nr8NHUJPZq94dDjkXJPsbuHLQYs3sq7L6dwd6eF",
  "key6": "3X1M53ZHvCx8hJ8Nh73PzLHge5Fa1zYv5eBf2oS5UAhXaBANnANDDwXvU6zao1HqnMWfeSWvHeEr2oTbynWSzVba",
  "key7": "3iSKN4US3cUJnxS11BJPDwYbBZwiJfgMTKxFKp7QTGJ62Cnx6v4D2K2y1HWudFEeTSuzSb2qoHgg2U5jVVT3FCVh",
  "key8": "5kkDhGoa7DovErW1gJo6qXTec98cWX2hf2abuwRy3sfANYL74hFkwVJkP98FNUoxm853YMkWAzf1eqayN7w1YJAi",
  "key9": "4aptas3QvTicN8h6W4fCvisaWzGKYXpN11Lzu3L6KUUHxJrZLNKahoXcNPWYpSVj1FQf1oU8XAsmTBbKzPfD5c8f",
  "key10": "25GdYWbrkGYJEtMGwHgZog2xCyVuePjaivB2pHs6AXEHEXViaWiLdaFMNwAfJr35pzrdip57cS5wQvgxfVtoA4KL",
  "key11": "5jrPPe2kBwEVxrbRaSULZNPwsAHrzPV8PdL99mUontgJXS7AZejQbcSnH52X9xXRmTTjMzwj4dAw5JHPmL4ofYjP",
  "key12": "5AuiwYFQ1dTi3f7mDi2Ax825JoEUw2A8qbub5qNtAXD5fzmYHScs6mqLzdAaLaD1MfswdQCXztJAH9sHuWLHUXYP",
  "key13": "rAJfGASER3bSzd83BLH4KVyqn6eAHn27GHmf4Ao3ayAGN9GxzKGwmCjg6vs2Uk87vVKE8YPhpto4Gissa5E2Jjo",
  "key14": "3XfnwqKEGUwPtEVAhA7AUZz545LTkgzrSnwtpsL1t1En18xYLDyThSqHSNKbVrjh6YGMNSoaGAErMNJAa9GWjG9N",
  "key15": "4m8ZdBSguVT1N7V7GDHj3h2BuCvHVofdQX8AHaXvxsqrPf7WJmTnhTSwVgy9fvsPBbFrkDjbkkYvHTqdjgwttiCf",
  "key16": "5gkUdnN9JK7saqJbxywLVFrh2N1VncgezXDNyWc47kza4WD7eQnVrUgpDGiXTmgmaXtzV7x14LG1hULmHwEpGD4v",
  "key17": "2tZ1mQZoXtvYC44PPbc6odiuZTk869vxx7qPH41FdK4XL8UnmhXTbrocD7pcM6f3C1sAodVcwnMjjD1vRbLNTNUm",
  "key18": "2fxdB9bMJJhnxJ3i37vwcApnzNentNmG3rJ2CYUg9a95ukJLo8LWBfodvbEfWwAdsQTabALWR3AHqXKgWyyNc1i2",
  "key19": "49F5V4Zo3vi7DWrG2tC7k6z4c9GPqugjGSMzGapspDpHdFFnkPTHASbenwE3F9CMj2mE15dnNAW2nDwwhrcEm84v",
  "key20": "49L4GFFJs3Jqd4Na1e1qpTvZTQYUgGLsPVkKitpiAz5MfHM3jfKdcEjSRqQMmCWMhi2K3gYAL71YGaJihHrC14bS",
  "key21": "XuqCBRBFm5wwHfVMmSUhT8tFy9Dk4YRXT28gcmPjbwo9wCB7h6eCsSWuDJLRW5DX2hTxwrrbZuYTuqqoP37TQ8Z",
  "key22": "3rDtECm6uggt8yduagnaysdqoEWj2EwzrxfgZcK8mQCAtmcehFup3ue3Q1pMyRowiubYzwjbbtuLcCZw5TGCDdY9",
  "key23": "5rA9U3UmjAWjJcbAJzxmi3qqRbGEiKhqsXY21ArgjBH2fnTEXrbWeAKRiHBSVXVBWAAMRdLhqXzXPJPA8mMUQ8uj",
  "key24": "3o82vtCedpYqoyyTUFszbjmvv4SsWFupft8BTfoVn9S4PVvZyuMgFAFf1NRoZaUzaMf9zUpDDqGMezpeEYVZf7Cq",
  "key25": "4KNiKaQtN3jNmohmJA29ndmJaQPebMCBuinX63HEbowHrj7j8KgMqXMuTXzxK635NLCMHQ3V9eM3qz9NgBpqBoED",
  "key26": "2oew9BDUJRePBNygs4iW7NpSH5jXEsH91sCdy3JeYhi4FRLdHrwata31dYXsbQKwT5XQN23GnUMKPHq8CetvE3RH",
  "key27": "3L6RQuhb9QZb7SUjTompBqxfLTjqmdWBqt8XnrGpWx4FPmq2G6K5smoPALtNe69nCMr7MBnx8WHfMNHaL8mYZBNc",
  "key28": "2QcMdmcCJx2ckMjoVtx2ALct2gbekGECfWHPYdXXjGJ3ADLtXSLzn9PTDGz5KG5dsGaBQTSGgEdZHbteQ1LzgHui",
  "key29": "4XEqDjHMzVhhEikMa25GvV7ZVQG5opxFTohgqDS5UrG8jopiXZeTKKWULKEYk9HgbSs25ZXMKq6QQVZbJ6Jtn6Co",
  "key30": "RDWVfH2sf8h2dCWCdDirdgTsrDCeNdZ7P8LCgME6gZvAFni2vkyk48BiJMSS36jLoKeNkTZdwrxBynDdFAJ9zuv",
  "key31": "AevSLxyBeD1q3oMuBz6kd621kr2pEVGVK1zSMLozQNq771zrirfASyc67BbtY4W4NmeBtASiz21S6NWoNZzuFXN",
  "key32": "4iQVTc2uUGDqTRRa2nXweHwJqsaLH4Vjf9pZKBA3DQ2dWryrXicMyvCV1f7PrGs4Zp5MAaYydTcf8XeByYepUpDA",
  "key33": "qRT4j1qPkquQdb1RrHCTwsvGEyzjvtJmG24dQnTJEr4gx615Y34AzqoYfkhRNaJaeNSagnpyRNNj3AinpmmHEWb",
  "key34": "3GtioBps4FHHr5HebtoXmsMzfSfXynNRGwGAhSXa77NfwBkiBYEmZqxuVNDdb61tb1swD4yAKteu6Z5mh431GGHY",
  "key35": "5VAKYqnAX8XufhcPWYWbh5UkGjWwn4DE51uXsP6mwjEJvbKgZeuTPDBKQMaefV4UoM9jvBvMakZEdRCwNkBXMJfz",
  "key36": "4gYDrVbigQYxWZ8RmHnRpszZsB8qqrHbDnMGgF8TnTEzzrz2hDJzevVPuEcmTjqtKLm5faYCPGMbWUeZ3N38xtau",
  "key37": "2szmHDdJF8h93fViXT1AEKwN2oNANrSnNdirYHX2HLbnKwZ2JBpdPrB5pN1aaFESLcj9vL2kMyWvXefVXQouDtfA",
  "key38": "8gjLE37UJWKTs3btfpY5i83uQ2wPFzXmQDctwk31PkXEmtuvtcZAmqSCYtMo2esWc74FgL4M8iJkZM62XoAPzCq",
  "key39": "2X41a6xBd9da2cfTpaPxgQa5xYmXXrsYDcmCBsQuE6tXJBS8CZkF7V5updXHspMvGBJvjuS57YGTWZjohbBfZRtr",
  "key40": "5RDmz7jaNSxJwZFo3EHQoD5xShJxDMuj7pLN8DS9oZRYxyCdNHhyfXy4NGXp3bt48hnUN6GFRzV349RNwH9bKL1D"
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
