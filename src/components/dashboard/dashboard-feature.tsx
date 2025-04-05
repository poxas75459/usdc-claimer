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
    "2J2ALa68vLJTbWmngSFk8r6tNtk4BrEDe3YdyoamQnK2ToHaXQ6o75NtAuSbJnSdWpW9aotsXTHYiQwrbur8LYkj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ASjvxSDBYBzxkaD4rQCKKXCQDMchQ4wHAtR82sWyDJzjJFvmcPw9ie3etmP155ATkjHzcwmbg2rTcEexReAenGN",
  "key1": "3kvjss86y71D57Qn3iSMwGxr7U1AyPLLfMc3sBiVHaQWpTnbFmuHDV2sRy4FXSxnX9T7BLqG9r83xQFZ8yxP67z",
  "key2": "3oshym4DkzwvaW6Qc4DVtfwbxT6qdNx9PYXJuEZJdoN3yV5h78aYjBoTFY458FMobinevHCqHQntPAMEPVigHeV4",
  "key3": "5vWjHcC2kxbbDiRqNHESchBwBSV2Kajt3H9g8rAZhAvz4gzgoisdUM3P1XVxZKtGsxGXnWd3XwBTtfnbYavxnWKG",
  "key4": "2k2N5gmHDQtf465awuHAxnXeh7GzBiFicMjtoBMBh3CEyoUQJUcycJb4mJH8FbmZ18FYQPKJ8Hb6gPLSGeB56hdH",
  "key5": "547zxwbtCWz7a3eDac4r26eMt74wPDd9aD6eGEbWEXi49hHZNMB9BJpRG5RLT6iXxDiEpxyo1nkS591c13wyX8xw",
  "key6": "22DAhsmasmumU9puDc2HBQXeoDsrGiuAUAFuHQxP7jDbAWvT38orDJSwcqxh5fWHqSr5GPXsdEZGbib47ghFAecf",
  "key7": "4UrnKcGrJqfUqQxasu6LS7k6RjJczQLee8ZeccNaQn543XffuYmznN8psbZQT4FwZh5BfZo8xZyCcKzcn1KJFhe7",
  "key8": "2zjETDg9oqKWuGjxx6uyPJEmHbprrgZq7foK7XERXVMgTtdB799tLmFjp1Fb8ay53PVEJEGACfeYccNEfRoU9yed",
  "key9": "3NgjSTEMBiP6b4QNNKWU3g5X9sic2cAH43RPm8kFvjELK66pes9k5LCJAyMB1QC2J52oPiUm4GmqKyW7Ro3LAt4Z",
  "key10": "b7VhuNcygXKMdVT6LJ17U7tqdCmoojK4GVfqfAF1UwmKy1cPKiFqpUVkoB6LxnCd3tQ7Nes7UfRPUwAKsRoT1X3",
  "key11": "5oUau5G5ctEBNzQcKH2ZEy2kNveNzG3Bt5kGngXdn6mW5FAg9epmfW636Rv69bjUxkoNSXUiRDSgR6CTZdaWVn8s",
  "key12": "2jSr6j4Ph56FemnkaqQigFXmyCse9CLKiVLWoo7HBiWP83ig8pE8BJnwfRL15zWiFcC9a7BE6THVeudAAMK3qBTU",
  "key13": "5iUgvsqd4guXhqJ5pa3XoBz78ey8CeUwkgLkucJrw98biVWfVYLpVLbFjRwutSxVPvKHitqaV5Q5B3usYBPx1Q9",
  "key14": "3sQH9BcFeQHyjXn77FMLCpaxGC9WiiCPKeiEsK79AqJwC9aVAiGfoEGTNdf2uNQ6hVeqeQNBJPvTdDw5fNwNnsjf",
  "key15": "22LhhQSJDDzj5rHqTDNMKehJtzwyGpWwMgjA13MVbXBZQnvGgF2mFwhUHzRybF9Rp1wmwKqntAm1oLDXUmUij9BS",
  "key16": "2jUFTNqm8GeoLXCYDvFxxWkHCboBaCtUimhQYZekwC86J6s3n5HdFwghujVihiaVSN7UQN2VPzUtzL2V57kZAhWJ",
  "key17": "rt1MJrqomdpZ9zj9LF5JR9wqUUMXTb5AeB2gDGTPm74eMrKbPToiMXJLiro1G8cRgGP7nTbJuuQK7heiVzi2LNM",
  "key18": "tsiMVacbEVidP8qQYnjkXBYiy4ZVp7qn7ZxRJ9xvbNAGMjCAGSvvYDapPxQYDJFpmySFGQjosryUFoADqvNJE9N",
  "key19": "3ncPbD5r2uUcfNZ1HMKDv1WHADZxG345xp7vEJ3TfAdcddK4R1PUCFzgjU7kfowWU7XgpNG8z9dECYzenAThheyx",
  "key20": "4xfBTYcqzeofhJMqAMiNDPu4qth9KBWFuWyb57YfUa1KY9xCisPJMAPciVVNteMbCNDVnM8M5b4erfsSUQsX51v7",
  "key21": "4RujedtDCmK3kSwrzH1a6e7AwxTkfXN8HyHb4uwcT7BDWhxqgHajhuk7MKL9mwzM87YYjN73RtiJhkcEWgxrLPFg",
  "key22": "46HMxqjbPB9rX9z6m3rkGdcEw3mkSRnJtWMaHpVrFEH1CCrpSqY1BAJ9tipztBurFzhUnbqGjkJ9HqZc2awJcxkK",
  "key23": "5hAW6xChAsB1KZD3finywRHsDSqASFGZJTpMLE5NkKCFVzH8hPtuDb6YVTMhhEVSDTEn5sMFzh2kokS9Adkb3Tbb",
  "key24": "56Mvfa3bxx7x8cxnewPxvs6qSv2f34tynUUt7rjNAJ2iG6A2E7jV3HAL2vcBPy26kTD24FeTFVW7EjaoeYSz5KXU",
  "key25": "57XFJsHynSyaVDnFR8sZyEKsyiujL2NmFyjHEPTB1z1dew47vieGUWaMYzioB1TFmoXisVHxYcwYnmHB2i3LXMRk",
  "key26": "43Q9Yb3yjRnShmKXuuZKAi8k5bBtRXGD87o158iGGa8yrSAKd1w8wc9RxBmNZSU5a1aUAjVEUMTUTJ8Cp5Z3cTHg",
  "key27": "M5z74uo6h1xt67wnGB8cWuSANNo9mXGmuvUNFUmB54E732eAnvWpJoTcVVjEHhHZFHdZJy5KnqhWqtNW8APpvfu",
  "key28": "XQd92cMNn42LodpfEcynPuRCaNGceSRTEm5zNaWYDnDqvMtEMmphgLrp8yTeqhxDicZSkzTMjPhibgU9TdzKPCw",
  "key29": "p8DCzGuaGqjtYhBW5NW4DMobxn46mdyjLUM8oQLCekiZRPxnfJaQwYHyKGa4iTFVrBN6k8drnyu3RaegPUFmd9E",
  "key30": "5Gq1wQRpgf46tPGs2raZJUHsKLuog5n3stjqN3GAUZ31jHtzjkGVE4hy8XE39uxxqzDW1nnVBKgUioYcWeGLwNPk",
  "key31": "qRfsvyGUhTvGq15mvzmnziAYrAbaQ2jubFgDihaMpvCCYYK5tyYGxra6S328ne1X1WJXPy7yPa4VcXfcBkNRjRa",
  "key32": "5HNonhCL7j2k7ECrvpwQBfQm6Arr4EauveW9DH4TYa4yHnzxAkauqHh75qdmMEEzhcymLLKkzTFyZdmpByP8AN5i",
  "key33": "4Nj369DAk3La2bFnCiLjqqrRxKpMt1C6w7Eji1Zy9LXMv9qtYaSRysrGAYNbqGH59v1qJP67S6UwoqMC3FFA7TJ7",
  "key34": "2YZQB1ancyRD41SGsRLHcEbwyrfN3LYWx8MNHCVxvvc3vYqQ67e1ZShsZppp2UtCcs2ZMhjfxaiTQU4nCEBzY1yx",
  "key35": "2VqYwAeXZXs9MZzTJiBVQAkpGBKC6h4B1L45hiwgs6aTbWZ7HeSt1MAXr58TrpV2pXKcVtksq52YfhvxhdXBPcEv",
  "key36": "ddxzh7bYuc5hwds75JjS7mxae2oDqkLeT5mEEcQLrYKG1bEuW74qreYnLBJGuQCrDcRkJCmwgNo5XuyFjxgab72",
  "key37": "5J72hbUTF34ukMsixKip1k79qznxnM44fJQ7LZB6GoqvK4aso3Kop1jKATq1yHK2QQKetcd1umN38RES9hgyb6eb",
  "key38": "2tQCUmiZ39zfvT98rbLHSYGk4m9nf9x2zr7tKwu6VAq82W5B5xqK2rv19FCfRLeGkDpmYbGwJhSLoxcKKYvvB1p6",
  "key39": "3FFKncG3FTtWRuxuGBC3tdcMDYHFMqQfPn8EvAe2isQGZLFeZ8133t4248x3wGhQLv75Cur5gmrNaXqq5KxGurVY",
  "key40": "uruoZRhhaTMZZueW2NEkbw3AukwGaEwR7vZ31nrVoBi9xp8FmSATYevTDmaPzN5CABZXLR4ZQihQ7jMhMyoL9iE",
  "key41": "z3HMMHFRYDoHfNFGZQewYbFxiVgVtEEBZkRF74R86QwPwFaDhvq5cNZiE4MgHsyoW94oQtMh7n32NTDLrdoDmwu",
  "key42": "4PvQNA9Mdeaa46R5QVUnkf9BZY6DQPSNX2GQ4zm7SRzGC3zjxqGmB47RoZb4Y7kKDPcj9TMKAR85F5w4rzwgZTvW",
  "key43": "kmp7smCAyZg7nFnrJrEDAaZ4MsoVSQzBPMpvvHpPYbNqH1HkJkE6vAsV3BWEn5rZs4tpnT8bYByyr3gr13daisu",
  "key44": "kGGuwQWc9aBxebBT6UfqAkFiN5r48xG9g8fuMPRQvJfPLWy1gcb6HxMDXyDuWpyAQJuLQrovj6A7kLm3puUGj6L",
  "key45": "2kcT3GPLyPAAt4ERRezGcieCYWNABvS7EyGWzGdE1T2XTYBcR67HQjmACJEhaTHTh3wbFyCzUqxR2fpSrsCoizf1"
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
