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
    "2Hd72zAjwscyU1uMUW7tajpyqZDvWbPdNsgEjyBiFNdqUvN7rbja2dkkksTe2Pu56EfX8wCkPDuWhtqMuXKi7ijp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SKj6oqctMFZgDL7MjvGyRTJQzyxjfutv4Px3baqRfJaz4KoDoC5eh8X5WToCMksyvMvWMSEuvxQsanpYeKgLzMB",
  "key1": "274r2z13KsCxP9di1ocPEsJsUJ7W15PWD2imReWHYgMWiZ7hxW7rMhdLpgfQcimuSMSCHjJ53jYg34ivWQcN4DcK",
  "key2": "R3CTMM2pupXHSUvFXCZDQ8JQodChuEHZBKivdzCCcrWTu3VQzHdMXRS4jthhy6qEacAdzPTCkxNBNU4sV1MTBWK",
  "key3": "kqKqwQPMv5NDQdnCNo3pLHPKYQ3GGCBNuT3iMSqC13JpjhnDH2RhfQtL2mCCMewHjdnAwHiJtWjZm2y6fmsAsZg",
  "key4": "2Pir8YhyL2JkvM845JECs6svDDnvyJ5n3EveLU7EDG2CrjoedWMeqe6hvtpdg4b5SE84jvAdRdMokVWAVyYZRHjH",
  "key5": "2ddyZZ8ws3zqabR2jha74AANmKfSt1wqDFbKznLCebnLrdE8SNqQydUsaktx9tWU5FPAFXSkLffnTEG1BoSa95So",
  "key6": "FSrVTDpsuiyF8qVknM7LP6pTe8SJoxFV5uJ66tCQWLVu9TSRAEhwKCYHCNg43JtbMhmKb31mMZb62Uw2AJGtPzV",
  "key7": "2TCA2dEzuVFdi93TYukn5p7juebUsmAnaomJCf4gxY7ieZKwtDM4tzw9ggKTEBCy68n28TyRE15jbVm76qYFtxCt",
  "key8": "2rrp1hw2WXCzWVGtZDftJjd1AdB4rU8kwDScAFUFGXzBzryibE25FeNMUPpWEo16LQt1VtEpL4AjczYYDjfosXK4",
  "key9": "5yRBJsjhsMLADtJcBWXKWFdZ8ySmW7EKJMacixAS79hfjiNYhBQRMQ6s832Hijo5PA8Hu8KNNLsFAEHX8Uwq3ebY",
  "key10": "2NkwLtSimKuKQyeTBgRfYNiuLtiJuNV8GArKmDupwYGPyJzh8Rn6CWwLz2cjG3JVCL7kWUhNvwBxJa2vFpeBTxY7",
  "key11": "5Kdt67SjNKTHTsebDmpo9sFE42PkXejV227dBdrEUwJhrcHwrz8dSu9g3Bhh7DgzRDJnUvSgZPEwx5HS7CatZ1u1",
  "key12": "5asdCLjioNzTYDDAfYKHJdAFLrXSe778hrQipgQrmg9bgTYcKUJSqcpYrQSzm3cgpZUTqcB8zCEseh23G7PuyPpW",
  "key13": "5sdEFQAZG94pf2ozADnnaWTjgoXVzUQmev9ca1DZMEx74re5vkTwdoMBGvehTB3BWiRDV5hgjEcwcVYa3ajfB4ev",
  "key14": "3LQt23fDhwGdzrbDbrDws7auFnxLRuEaoVbb1WQ8HdnEpyJPK3RyfC1dGUYGqE2ZqqiRmMkzxWDRsfSKQcCBHaSm",
  "key15": "2R2mcLmaFv5zyeTMbkR24X63AAgnvwbfgp3NdvMvToNS8iSk3G5yYPuumM221GwsBJ59eNDniSwjM9oQ2VQ9kSG9",
  "key16": "5jXfw3ruNnyH3LUFtnzWKevvZNo8oB99gPUVFhpd34hw9MLTgkXidyevLv8cn8tZNVuBTRnNbLMVYeirsr7ZimdU",
  "key17": "617uFP3oG6V8fS6uR2Pj5TBaVRfuhGR1fKQSChATMmmADne8DGBqepmYhMWhmWBb9v68ae1GAPGDpGvFiAuqyf1a",
  "key18": "5avaXyAPxgAN34QJvSNn2HF4G5p45j1LdX6kLY85p7mUCgYQZLhM9RhicsQJVWiiiNx3Ep9U3Uo22ZcfJo7mwr75",
  "key19": "3h8ocx76YwsysoHc6gBmrDGMQXsUVAW8pq284DvENyEkCAt9gfefMUCYgGhbeZq6G1vD3ZeDa632HBLdPZb1B3WG",
  "key20": "5pxGA5nkZygiNAMD1jH3ESXPcnwBiMiSXD87LyKXpZTj9T1eKMRbBCBZYb84N5LHEQordz3rh3LVZ7SNZU63Re2o",
  "key21": "3ChjywPgPotDfNJ5aKkjiVCcAS58tjZ5aB2rNt2eJmip1Uaw3x3U1NUhgLSGvNy86R6V7jXW5WMCZcdjv9B7VqUj",
  "key22": "36iazZChUAUVrjJJypaRpGFsixViEuyptoXPLPpN41Xk3ZCXGAQAsmoq8GEAhv2su2a5xmmDnU1J8LrRn9EjyhU4",
  "key23": "2o4bYmJDWG6G63kctcjMvfTqmppXLhMNPzU2ErdYmfctXfshWDBFcmhtsxzbqwsgpruX5rpK4RRYkkfumepZSJAj",
  "key24": "36rmeBVde47CPHMNYerUMKMhoh3KioEZPeNif4oGiBNECEPUq1ELPZCTjZKCHet3wJxPY4DL5mjw1vbhf9ZK59jZ",
  "key25": "2dbEpGgKpjpN4qLU88uK48dcURi27R4Tvw3zkaeBwgXUQbrPg3evYHBCTGn8bMMUWsQVCszk8XjCNC9TiU3A8Qqm",
  "key26": "5WqnyNLuykYCxsyASYDHTf6pL5qVoesbjTT1wDmhpysgcv4P2v9mBj8zqxBRSN7SwiBtvvdVyFRi1uVimRZyCYFj",
  "key27": "4P798be1btcoEK29MKu2zgQwM7RyLQpFnhH7825KTxibyShkJNXXKqjQ6av4BWJpu3SxBtncCdkqF3o1bRFp6Hoz",
  "key28": "3yjEuqCoN9AFrmkvTHwNZNrWquiFnD9eU1d73pBF6RvMGTeXhbtcj3oYKNuGvVEozdRcpPzwWBbzUKe9kF9vTqCP",
  "key29": "623Wq6x8mNwJBMoJn6WHjddrbmCy8kUda2FKeTpiN6kjJvb4VK5NVVUmoiUQ2J3Z7oUXA2zxJHUhd3rh6pRNevKr",
  "key30": "2Q9g7kwr4C2PzU443Z1aNvgz8mfAwXfoHnjfw3QHt2TB2wZJarGfUV6vWwR8LjMcASww1xqRdCcE4duTtR19fndH",
  "key31": "5pUajk3hj9NM4jhfKr66m2A1CA1V7UkiLJdVaD2g2Ky9Q6SwVGxzkrs33ZrGhzXJvnKycdW1Z7vi2ZtXp2DPEcxZ",
  "key32": "XMTaTPJzS3M6y5QFgPg2R7W5UB1ue8j7uLNPKrBDNuq66mVUHBQJUST3RknQY7GthuHy29UXYSjrwWHRjscFUxZ",
  "key33": "2rFnRJ8g9rb2ZqrAtvrjvJTJE3kzsxVL7VhdFKaQwQZSnMPXpnKkkhof963roHFr8BuvQMeNSt5jZjurjdazhShL",
  "key34": "pv3NGeD3gCiX2GYwLNGgGWjMk6DaWSE6B7YYDCdQqKHDCZ65ysHmEBwZ7hMeHVRMqeX4HkZcYrwWQ6vGnKUbJLz",
  "key35": "3PDSJR2RQ67rsgs3dKEjRF7roqNWWFdQeMwwfhaXNmXmuZtjR24bQwCQqyyu2oUKMYedyFLikEZkGeAejggWPckP",
  "key36": "5acLe1pzrgHudujbbgwHCysEcJBHKau53vQjrvtxbTXjxiQnzBZWzaWXmWttAGJY9T33sVaYbk7Ng13LPANP1w1J",
  "key37": "3pDU8psbmNuRCER4JTxTJ87oQD8bHsqMC4o9kiswTwd2ADw9Vczn1c8Yw2XjfVdBP1uzmce2zLbdZpJvjdqX7fqH",
  "key38": "2YnD6RTKreLSgmTRor32qK9eVPTs8P3jpnCTcB3s4DgwAfw6KPnWPwwvbqaAd5pNT8Jx2sCfVftwJyveiRtLurbo",
  "key39": "3NjxzgQTCJPUVQYaruvdD6iHdv2KQATS1cSjQVvYegK5gH342C1pNpD6EDxCLVNZmFRwRuvNjv44obh7Fhr6UQTq",
  "key40": "2J6V4kaUUZp9jpRR18h2jSMFXE578o7gLNSaV5fnQn1nBoxiuRZ354PJSZ2SPQphD7igKqnfHdNryg52VZnDQA6C",
  "key41": "3hARioTC4CFUEJqWW57sSL2e43TCksbMXhcy7A9aRfCwFftPaUU78m4nzP5WnLbWp4j4JFQnVEF3J4oFaz61azMk",
  "key42": "4N8iQ3cvJvAjPwUdJT7cYeDwCBuqccYf3bvkArE3KeUbkPHDRFoeRpe8kNnMugxUQXu8J9HS8c2dGnPdWxfYQXnY",
  "key43": "4fvuwLwS3accZpnbc3bC84C7Zt2G5p1rCB9k8yynFmiHqaCjs5HL1TTBp7RnAFcWjRUVKhRtRhGkdaBLPgdv15Qy",
  "key44": "3VinwbUpvT2DRDYR7eYctBiMgRT3wN2Kv8mWP6vZCFn3Gss5exSEXhKu6TgGJDK9MGfxfAEyUHaNhqGeqJGCLcVu",
  "key45": "5NX52jorYnTpQu4ZMy57qr99BHh3Kh3cy4Ms3zCBnwa9vBK5wtMQUaFR2XSVZZuDMUV7c34bVm1U6epMnxN5rBVq"
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
