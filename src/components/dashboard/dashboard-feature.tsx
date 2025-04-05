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
    "65DdWsJJGKZGcJCMXaivmHeN2vRaoTTqg3L8wiRBMYLpybS42nqFyA6BZpWjCG6erWVru1kapPA6xZg3qwiitPLD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B5xmnRGjn8Nq4468Adr9KcTWpZBfdUjHY2gY4EuHkktDruH2DrDyHK2FPmr9cXtiHWZMCTryJcjFiHG3zqJPJpK",
  "key1": "2FsdttNuGch2Ehyfy31YpCPgjKhXBWShyuT1L5YYQD5CJ3iGnw46YgdvN3DAHzTDu5Zzn6Mb6au11bVAsHjyFEmu",
  "key2": "45cubbxFyM7HxkwCADXBocBPGo77Ejwda65Tx9D6toemWEcqPN7DWoTbXyx9a8ufa6vnCte7H3j6RfVs8B4Mv3ME",
  "key3": "5ogatuQsxZvDgbkfHBSaBXVKXAnsttRF6FQiZug331AxPS1jGgeT85THf32mrMyq68HDeHMRTCWVas1VsUtXu3ho",
  "key4": "3TKsSF7DmSxrVKXX4GS16EMKYX15Br4i56YkxwLjm3THpjPraGjDCvNk2VD1PCmskpG67qD1xWJe33NWt5Fw2DNY",
  "key5": "DsCtXLmE2cq5ghZkLsaQCoR2tY3Mh6rxTm6TnpEzePxY4v7mqeYkoHS5DoTdpX4BHFmK2s9eYs5wBJMahvMGYbJ",
  "key6": "4vSPhrFmRBDkeGGQHW5AQxzE7nkcBhccXrSPPYVEurHpqAhXoAqRLFf8uwV9B4aagd6ka9a9EB3gAcu6eByQFbS3",
  "key7": "5MixsfmKxGkaDegzuKmTKsSPVv3qqVkN8q2UK3ymgPUqq2kELbjzYQMf1wzyx2tcGSptJ3QudFKxEQphmEr4hNBA",
  "key8": "9zhABjdJS775gWi3D7Fi3LJU337Rpqz9yusrnjUzd2Q35o2txdo4gveuBESLzESuWZraqutn6DdNnHsfTvTxupn",
  "key9": "51mrRCNzD2AciZBAD33GVq655QXAgwsEGw96WWrkx3ATyijfnYENfdBdML2kEgz8kY7DUmEb8qP87iRuYzww4Lom",
  "key10": "1Gtr3FrbzWgArZjFyDkZ8EeKFQs98yKNEEQYmiBREnJfzz3fJ7LW4VSCtiM4GvFgQC6Ntou3QSVF7bFM8PZ7ir9",
  "key11": "2TEngQdNQyePkJnJNKjpWqaXZ3wdz4gUUr1Ps7aKS7QJtQXR4tBVb3gK1gw4VifpzrVg8XtWgLspWxMZAeqDMpwg",
  "key12": "nWD3xjAaSTtjcRas5NtZXY4bbUZd9fFBFwD4wwZg8NrLZCG9dH2c97c8dS8zfXrWLgcbzuw5yWR3P2wfxvqwZcN",
  "key13": "5xWGeEbKgra76uTsjBSNT46cPUs3JMUfyQrAMJjhvf6cf5maCGGErjkfN3WB4fUi55p7eKoUJ4hqwsrpHuzmxz9C",
  "key14": "UMYRdH6fZEJs6tppvmnEGi9vg5Le9nPQ2Euvuvji3QvpgTWtF3SeLYoKGJkTTWWSJ3SLwY3JGRRfLv4AN9husdQ",
  "key15": "3GdKg582uVEFTbZ3ykLSuPvsG88oQMyqqh9nUapk4yfeLeXzmttsfJshtuMeGNXjaMiWaRAFtyuVpRB5BoBZ1GMs",
  "key16": "4Ftsf6KBs6hEiqeqRTwVQKnSc834iLRP1A2xjUM3uTV8jMmYb5sVhJNE8N4TcAR3hmqV6NQ5fPBsBqA38oNAvTBf",
  "key17": "2GWajPjRmZMCz1rcXQPzbpNxk8cz6hhLzArdcdcW9g3SDZccpwaZpwLxz95hdShK9VF6AMx9QhkY6x4riAWLNJUk",
  "key18": "25TVqfoDha7BiZA21D9Guw85M8ocUhWFJSC2mMDnzrPDCWYPu6xLEMk1CtnrbWhgXu7bQ4q6yG56uM99gLec8T4w",
  "key19": "3tM2MGRQrSeb9CCZTZqtBCpLj2ZNuishG2CXGJtAY2RNrW6ukFwtUfXoKBPep4zoEK5e424xeh42ySVAarC8NyPm",
  "key20": "2eGBMGV5LLRaDktkwZLdpm3BcTEni7mSKtU3HvvoKGFhskQBgdPS1Kzuonr3492w63mZVvo7n5Bbk5sAtgY9WXg8",
  "key21": "3fsAw1VTeu7F5KbAJyDQQC3LpsUriGLXe2cxo9Jue23KZ25yM4fZdeMBN5tjt7RBHD2FZkXfVhnTMdxV8BD7nCZM",
  "key22": "29etBwFU3ZKUuhzGFnM4mZn4WspwJgeJN4w8dD8BsfDn9MjrSWj2Dz63RzqypwGSjKr4ABm99QgkXky9nvpKmkM7",
  "key23": "MeGis8Nf9yXnY5aMSdn5TKcoXjffxLeVbdsoMcSXGY6hy7i7VnupMH53XRVAo7gY674Sxu335Nv45HFwJ3eCqBG",
  "key24": "5Z2SvaQRUV79PnQZWA7uV2yE3maqYfTkH5859Eb3hK67LUK4fQSJR8SSHgjNxD6yVoq7Wo5DNeMTkJ4tgcP4VWYK",
  "key25": "juF6TzDa9Xuza53y2vjbvcxHiT3AFqMTJnUVC1iW5b6bHySX2L85mg61MRRTFHu6HiwFT9iUzN4TNNSAniEbjqj",
  "key26": "4e19AvQmPRUKv5hJKHBWWQ4cZGAXb98f7GLvNQLBPhKa95HbnyjNXJN8sqfucJZ38YsZF6sPC3tu8PCcaAtXD4He",
  "key27": "3V2qniPt4hGKcoX5UdCA4esbuEtMGAW3EG4ZQMCNcqRZXj3fNpHsWJVY7BEFTZNMNCLu5ATskuSPMbLMaVKSi5Y3",
  "key28": "3d92zLS4RiQv3gGKEt7wn2gk4k9A1WdUhRo2XAjbBRzBopXbfMKrbUURMrUpQekWv2TRj43k7GsUg6p343ceJdNV",
  "key29": "4qKk8fNhBRGo4AMLCh5zzRM16nisX3KssFtGMtjs7WLXp6Xovjd8mgUxYBhQAxPmZ51fRXJDdGAW1tbtLZvAtHLL",
  "key30": "5pZoqj4TSVgLXEMoxwR1njoeR17eLqrNwB6jpcyTLVYVCpvyqzHNVp5qhzDnprRCKUNDS32PpGCRM8nTdqToiYeD",
  "key31": "29hXzPN11bHNhhEok5EfswUz2kXatRjeoYDVwHLbEHttVc9yVM15TkX5F7J7YFh3hwiibJ6nR5cCnZ72Jvi3wRh9",
  "key32": "24XqiVzbyiwYuxwznVhjE9uPN1ePLS24ZuDYSoEG1Ywv1qydnCtrv7ZYuhf11cHNjzA4DSYmD1hNiuPWBMp3hQeM",
  "key33": "2w3AGCvDSGsSfvFfLBL233aPfbMyUW2UTN3gSzCG86X5Vsk44cpbJj8X3V83Qq7qWBC96yqmRqgmQWcBrrBcvrJi",
  "key34": "3Bv41MhFRCRjHLN7Lvnj4x642MY4mW1UXbQq9xxPYmb3yMWdHrxFv8unXtxdG2wXW6ke4C1QV8Xj7RRFJwuE2vSM",
  "key35": "2vSxu5otThMtxEQdy5QGrhYnPExoDPhXBFUQn7fAH762kuj5gyXxh5mU1Fo3QytYL7DhKPFziYZW6ca8uCkEkHyb",
  "key36": "4eLgkXDD6vgrgmpiupkMGrJg6u3NStmGwJwNm5CDzhVfLSK2U9E9q6PnSvxJdZzGZoijYc57iXYrEE2v9pTp1faw",
  "key37": "3aarV1VuVgmFkyhA8HvaWoXdDRozFZB6xAHf3fmEKRYEG9HCJLg8qMKcU1TyXWrP55comfpsK6d8xzgpXgxsYGPD",
  "key38": "5CW2uCwKFq4qJ1XAeQmkNSwhmFC9K3xV3KbL3LJbAptZ65Jd2phnuq3uPzj87mwH3aTpa4t7yRF7o5MWEAbCHFQk",
  "key39": "zy8m3hJJ5dkAmKRYmGYgSR6WKQXvF7kma9qR6ZB1AUdHnZkw5Rs3Y7WWPTJPyRuZjffQ3wdh5AuiJhTKJGAJU9E",
  "key40": "58fh4d8P2V5nxWQ5M6mAPQiv3EgVx5m3EMY9WbQBUmmLm8zT4We9wU8vN6hpTf1dAaA7CRmFWCWWoBxWWvH8mpvh",
  "key41": "3VjruwmQb3ZJJMveroP95cGTbvv6kvHaoDYUhiia6nB82NvcHgfGQ48ZSxzuiFYBQjxarCbaTD1KbNhi4Soo96B3",
  "key42": "4XLUfAR2DfVdB8VStnYv4v6HHegBrN6kHFXzQKTZpkSXAeuamqTEVZsDH6rcKLEtaoEoTq7CPgWdebdAQBG5t2Jr"
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
