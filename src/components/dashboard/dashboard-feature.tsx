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
    "6rRckFMsc9fpeNDEjoK6TZdYCPgjCWTL71PYTgU6eWj5zpqW2mD6zy2fzAUxiF4ZpMYkgRsZXHesNizpg3FNK2u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KZRxhPUVgowv4xcCvV4TdPscGMuFCvShggRB57yxstTZPhZJwWPAsdiETvkvK21aZ7SyEVBKMMdtB3JQsYmhdLi",
  "key1": "3x3B7tdxByoPQfZqUaTnYHmePrtLhXSjqKtSSC83wTAJinywYkZW4gPdfFqrNpbE6FRqDFvNXp8XpBoWyhshwEiE",
  "key2": "fUGe9bczmDGnrXGWLiN4BF6GBcV6SATJzpnQRWsbstw5tGz5zthToiwHiwqFQGZUenftfKsWa4YmUujJipZ8Ce9",
  "key3": "3PGamyjdSmpAGhboEq34SJMezzPR2AMDdo1z5vhUPWEVyp3GGEqG9nJ5cWMrQ1uYBimgPhfSihqudGaZWy7rb6Fo",
  "key4": "4jm49XrCHz2tLKa5GBd7Rm8GMkNhzyfUpaMUVRLT3S54ACxMiPkKcBKKkW9BosowV2pE3tfZ8L82iNw2oKAteGUh",
  "key5": "2MXf9veLeWrjM4JL558hggkwyUnoD9Txfyhw1ba2U3GJvSNryrHJSsd9WhJxzoAYEmtWAtpHtW4F4BNecdCFgH1S",
  "key6": "2vEXhyWE53Dgg9nS8L7mXDtHRvY9JWrgrVxnH9cxaEbmJ5c7UQVK4wZcciBKnMPofG7D4uJkhSKUC4zGY6CC5J1v",
  "key7": "23EkxSrPsp4e784R4vMDp144Wir6bbFwYvnWrDLk3kawYnommHYkbMhq5AVCPusjJmErF6ATcxexckgxFHJtpJ4k",
  "key8": "wyXLCYnRmsJ2SvRgerTR2VgZf7ihdPeMtaJjUBSfbZzB7THdCkCx22maVU5ixjFWjVrc4LRgm2A4ii5a675r9Mj",
  "key9": "3wx47Y4tfXmrXsge47snR5FeixwwaY6Z2Pra5xSGQBPm67HFHv9ka52ZeZCovsvTac1ZFKGLqxroaAPqYvVQ2Y7A",
  "key10": "sJYfuWhipZqSXK7H6mTzWhknd2uyi9ffH7YNE7FEF92w6fyBLpJeDB2jkMCEKUcxLULLok9sxQGW5onLBvBx4VW",
  "key11": "3iyW2oouz6D91mWEiaEM1VMdER2NGA1gd9hpumxgMjj4EJ5Uwq16U9eysVNnXwVniP5HtJoLApHXxefQ13JgWg1y",
  "key12": "5TKbtg5TNUt1CeGkTyRd1TBdh398RdwbwZ1mPrabDQ9zCuYtak3C9e8GgAdUBZi6SgRyhNd7BDdzjfBBMPPu2PyZ",
  "key13": "2Y2BhaCeBAJbSMWcFob7L7vdot5oywHcnetwZzs12T3FyJNPo1535rTZdo3mdsRhNgpUeFv5G4qvETNmGyGoFJni",
  "key14": "53VygqKtZ8mrqnc2B27csL2N4gNi2FSKErTU8rzhTL6gMcEBJMU11BsFQbC4AVSDgmUvycoCpWTzsdegxXx36f6c",
  "key15": "2RECJRhveZVJQTuZRxC3BQekANVjZTVgEaTvteAWGoSzCdJxwN1TzfrZu2iEFdQFfhQ8nZB6VwdwdRnCx8BEXpii",
  "key16": "4Q2xUAgHX6qFFbmTfzFbNWmzNyY5WGZyhPHwPaPuW7VeYtXFuQqmR3ZqF9kCyZTxncsiF45PErXYznNLzyRyU4tJ",
  "key17": "Uig9TNNPWzjxP6tfo2dMRXBruQHZ53azm841YuS4cRowCvBw5ZDpWZCwzmaUumAgTX9KRfYBnTMaZBBJJFfqDKr",
  "key18": "RiDbAyKGGDtyZm6wzvJZNULVuULzPFpuqAekQEd8hkpKVECnnsyhXzgj6MEM1GyUikxHh5qJ9P29uPSbtM4aNcT",
  "key19": "5qm34YomZtzm7Btb7PWVzBeQkaMnbevWibMZbRJjFEfue5GtEKQU3QbbZGHKo9rbL7CrveU6g8otHda9jghA1dpm",
  "key20": "3SVcqRDJ5eQfodoQGmupSJMdSpJKicbLfiootptPau5FRh86hfyKUW5UD7kzbeSdncFVjrjVicy1JozH9P5vhdcU",
  "key21": "2Dkmxzh9iqMabBY4Wc6hGhYaU4qRrWsZBrrVg2RaBv5mvrcL1pbNeHpfex9ixFXwbj8afMkPVhmYtgHJni16Eoit",
  "key22": "2w5iNEjwfWfKtmD4T6yopYtR6zZCQ38THodbQwtKi9g5hucnPu49SwzuTdMnYCEzjzrWoFGHkNrmwMZedPwpQKPF",
  "key23": "5PqfM6A1VF8tsiAcDDuZv95LujHKhTfXh3yTvDHKqnD4NGhk8jeSKRze42mPS5oZSxMvXVEWWgwM7Y9AGvURPtBb",
  "key24": "4nvTt25TwUJ1jXjuRBarZtCFvXRpBouwbYomA9VbtECjXfrFnwFMsdnVqacwV1ufJnyqTSKzHm7QE2zkkVBFf382",
  "key25": "2Xrcg5JZ1a9h3xy1TmcGmDeDvXr4CemmLX1SdkwyKiXg7b8wjEeWcRxSigqtPGuGuj4Ffcayz45XriNq3Kok6gSC",
  "key26": "5tsaVSLuRvmYV1i9RnyZB7RUPoHU4guk8R3ng9NzpHjUmCB7jJHpxQMMnzU4Hr3Nwck9HU2nYwcjNctXknizjTRb",
  "key27": "QmREWVeyr6qv2X23vzpx4VLxcqeeAQsCCSZ1xoGjaY35HmiNWCHZPAp97q1P8SMpfeLUXp85nCEXhi5459dhzp6",
  "key28": "576o4Bp56uvvV3gVtei33j2LKoiz1Gsjn8Mj6yYtEGHbAbKXUj1k2oEHPYNoDWuS8RsjbWkxE3sgsA67P2bA85C4",
  "key29": "3AArt7Vdm5zTpustJpjz1gPaPrBw4DBSEZg7Dcq1suvPxyKaeKoEHBCdNdraAjHBddAsNsJQgeMsZg1MRoccuuxT",
  "key30": "ytnn1qqCaY5KrcXXTL25yFurfeZdobZLHjpLLNwuCy9scVPoQof7W5ewncfnDvoUW1yPaeXfLw2hAzjv2uJThFC",
  "key31": "2woSQHHhdbzT1EScnh8Egho7rcksgAkYir95uJxLr4veFwVYekb39WVYaGkqtpLErFThtkNhFCdoV7mHsRsdRMSL",
  "key32": "xLyy91UgLUZtovyGwQBfNC47PXVwRN9VrpBarvRgW9mEsaoYyCZV3p4yW9sWvkeBsZBZe6n4YneKBAkJXL9Rokx",
  "key33": "tsUyLu2tE8SGFtaPf5fmcZaaqoHcz8VLXQKSmzNG222avZM1Wwr6B7V2jdyuhaTjaxa4v1funvK1PX2vaw25MRG",
  "key34": "2VncbHp2zFVVrkdKLB1Zd3itDFhhdbavUistDJ1geWFop7MJ5ka14nfXVdQSSeMabend7TwMb4QQm5JYTvVKdmiJ",
  "key35": "7DTCx7Hy1kWqiSVytG2zn6iU7UXfXkNvnXcc3TnxLsLDsJ1w7eWMLudxgK4ojWhVJvz1uGC9VmT6jhyMCdJkY7Q",
  "key36": "2i4iKsq5qPeXBhjqRHM37toM4ohee7EHz5ejYfPiAcDoY5mTEKQUaFbWL7KB6dqyd9j2VmsjrFfLL4Z2HPDhnxiP",
  "key37": "4XYXnnHk99u2Y4BUG1m51i6AAHsKmT4SgQDLU4zKVg8coeJMsv84uqMiFgdbKMTf5MKNRwdtU4dVPnYJRYDGGdrN",
  "key38": "4cst6je3NMzDbcmup7K1MkYentpTjrF2Ce4GMrnzH2iBQcthCQURFxMeZFaKhdtimv6qjEdqyU6rCaEctwV3uwqd",
  "key39": "ABSrSABZPGr3gLqbHy5uSMDK1RAAHhnHFgnZ4GTw1BfdcHRMVHtgkh77HSDRqHhestM7K42xJkMNoNyrYVmPVDe",
  "key40": "3nJEEF7QX47SFct2HhipnF7tJDpaPZ5hke2VJZTnHPcdtcAP6TdyzwRFZE2Q44uGtjBK28NQsJpPtgCyRvbyGUFE",
  "key41": "2nNoAs6NNpJgf7epV9P56zSzXWQCRWhYnSvm6cXYTZJmyAjMTJgEuPL8mmBd4NvpFUPdMvYK5SXf7x9Fz34Y3mti",
  "key42": "9mRnnFGxfAqrSgqhRS7urFjAq1DMF2nHSSfMZTmgQFnYLrp45ypC8Qy5mXp2CydpuPMCrPmdPp27q7Q46aQzi5y",
  "key43": "3axC2odvkxH6NuKzZW8rpiUVSmgFecZTujiJRHiX6Y4dX1PGzm4PxaGjcMyxts21Y5m69Nrbb4KTnqqYpruNPXYG",
  "key44": "4AkAn8reDXqgYYwLjcoSZtpL9uCaDRbrXUjFNfPXP9JfsTqCAHbLmgyxL8YwufMzXhkP29kfwa1Cenh1ynqMzA1B",
  "key45": "2JqYqLmuoybwWxCvnanP268nXNPdRkqzyi6T3nevc2nnZEQaec6QzpAJpSGxnpxmJsBL8p57h27LPaUQ353wxQfg",
  "key46": "4ActEjsgt7FUsFpcxZUo7PM8E1q7S3R7eYaUCggpn2sjZx8vYYJzXNve8dGtJXYNZ5Jy3sFaVM4XhyKHDwkFf2U5",
  "key47": "2c92uhGV4LTM8U5UqnhC1QGFcRgC3RmX2siSDwusehH4tkwcPZ4YokZQ5gJ2N3kDUR3SvT7YumLd74sJxUvvZvWd",
  "key48": "riMxAPHs78F6iVjQguYF8DdSCyWzbhiBAJGricvGdVqomdhJUVBkxDxTE7N6MADxsaC6o64Hj75uNJct7w5kFxD",
  "key49": "2bWm7JGvBFtR44W2qgKDo288vXpSncTmrhghxBppLvxTM8KykBUxpQVYrXn3dWmNZina5KdiJ1o539UXCfFvnt8G"
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
