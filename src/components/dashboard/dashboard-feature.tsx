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
    "kRXRYREhAvFte7qiCnGNq2TQPG2tzCecPoAv7bcZAKYCsgzV7puAoBdZxANaUNpmf9xvLRxuKqRZctthtuyCRMT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cyJHzmfFzmDETxaW1ZrpKQneQhydBtw2sMW6PmLv3sMbyRzpXb68JiDYQDFdWc2sHniBD4ZK5GadLJjwHWWSMFi",
  "key1": "2XhLZdVvwCfXRGFbQA8eZPsbyFLMvYUz11vaCKqiG4YiWv9HjDfoKN2qMY4wiZQSLii33Tkx2oBEt5QAhfsdAX6q",
  "key2": "3fYMFoKyJXUCPgUpnRZD75iJAqhHKBprfcuX71RYpXp366WBmafeFCLQBVSLfqQtgCFXdbci6qBnnhF3XJzVmFjf",
  "key3": "5qUwvuX3wABGiua9WuFFfxuPYQ2SqnREHNvCjDdaQW76wYSaLoFT8P86WLYBkJCavqqYdufiLhyubdAtv9WZPmEQ",
  "key4": "2HJXQupAAVVwzFTMXh9V45jxzTyZc7yvSWXM6oZm4FCiDmWP1BCmeHH8AygWmdWZYv3jNXTwohhERCqXGGi7Si3q",
  "key5": "n1Tn6uuoc47VKGvswfzZ7mBB8iuzrKrNjdrA7q8esdiEsf5X7g2enHM1oiHZdAN2v2XysFzJYfWtEXXWxwK6Zw8",
  "key6": "4DYXnxYZZ6G6chXERRfBtZrQV6dbs77uajxHTSDnaPqiSGhtezWf1wzbFptP3MCeFpZXHJgCSLvW7neoCTS5ddFL",
  "key7": "3Lh9vBUubciP75Mzb3jFKV22mXWaG33jEoz4Uii2cbkuzjAD5ShCvrKQYGYSqTS52NyZHUzA1YqwkCLLB2WSMJfX",
  "key8": "Nb2S4hQk99FeVLRaCvHmjq1jX55pdzAhAjXycKrN8t1gw7LMvkpZubfyZQZvFZEqdZJSrpFZgVJAdhMDFxwBvRM",
  "key9": "448aCPPFoghKLtbodUd6pkNKK1WYqFD3fd1dag1vZm12vfrfNYtT1TNPrLiGLUYf32FFgRk4Y3cHQ7VbMo53cN5p",
  "key10": "i6fht7ufjHym5eJyY1MG2e6Byd52BxDbk14WshmWE3BuEJuNjqXA6D9JtV9L93kFeUSh5ZSfoDPMvoVStP2veCF",
  "key11": "jH8GXCJmVBDGGYG1X6g8fkXtXhB6DVYpyBx2HCBKm9UW6A4Rn6AccHUer3n3MYK39AQmKmvq57JkKk3L7E875Lw",
  "key12": "3JG2doF97sEsANyWJutPL9efRqjWxJgyHA58gn645MN5zS738K9eUwtZ3ZzVJtfUbUVqPg5PXHrEJhA1ePvr9eW5",
  "key13": "4S6SAa62YELkn86eQEJ1pPFQ6oQorWoHJMGaMtRUTwLaSTMysEAhmRUo2vzcc5g3Lpph3RBtK5r4gTDXvpFYt1hM",
  "key14": "44uXk5tQY2772yd7shREtKoL1fKYLbVEeJ35HsK3yXitR44uVWaJQjo7epseX4Eo8DfzMmJkn6mXRoyzJ7WqdSiU",
  "key15": "5cWuMS5dnJYnyDQmAeLUymUQU3DkcWSowAEGcEcCAL2jX8qbxRz5KCC7bJyCTsECyGmGHPhWdZLGuc4gsqyXPojM",
  "key16": "45HEqu6Hac8vQp1FtWC63p7jkZof5HqEM959gzUEWgUpGNWXhQCbFLMZrvJcxg8DiSteGREb2zM5uyU7V6KDMvXa",
  "key17": "4jWnoCUbPTZiFLDSb7RbQipb1vwsXDzE9xSuAyBy6GxSmvhoncvEVaSe7uvHdeDfYZ32mWqHNri7TcjeLu8cvppG",
  "key18": "4imsCrZvtXGnDTX8xsJ2FUaUD3KuUTX2ovN2uKAwTGhu8aq13AutWKZwz2gxpzAcXSmpCz4C81knDiCCX7VdZswp",
  "key19": "2bjpwFQDks1A7eCMWAkhmhpA6f3G6gWiRZifsjxSy7AJoQcciLVhygQnBpqWfc7jJbkLa3shoUaeB6YZGxTPfoAE",
  "key20": "2c6ETAxSRChwerkQyAVrNpWAwdi9MKChD42uNQR6AbW1R44YoTPtnPTBamaHw3Bjpdk6mxHf9t4tWjYvSx5J6Mpi",
  "key21": "5wRHuQkoqecaNQt1Nw4emjhKwJQDAdBLWQYceJFdzii9tMsqbLQsdu5TixQ3bEaYg689XTkzJy2PB9jBsKPaHXJw",
  "key22": "fJHAsGJ9v5f3LzDdbdMeEwhCJ5cg57zbgHJrJQ8LmREcDUGayUwieGuZMSWznxu7tj2EASH94UevSwatPMaFV3D",
  "key23": "5gWyHFwkfDx96jGxpwPL6gv2iHbdHMEsVasSwWM1fvnNHwhPtFvALRGHcfNiZeMvRbTSo4tzjSUg8Ekq1paEFPu1",
  "key24": "4twFcFGB6vXMPktpDf8RQniYuiAWuuGp9i5UL7xsHwZeeWBXMgbr4eaXLBZEHtYAN8WUQ4V9yUbBjQEhFwGY1xEH",
  "key25": "3DbXrYFwCjeyRem9etAvp26CUY5C4XGPZh9HHp7fFvWFXxe3DQ13JPB4f6PD3dTACmdzfNeFRvZ8aTJyctVdjXXd",
  "key26": "y8fCqbpS3u5K1ytZYLYRqt8TupjvBiopkC4RTDkJULDma3V2FYtr1j35pLUCcoWdLdSw9AQRnkZ87asNrZBvZYf",
  "key27": "4BXvohChEFge45Qak1SMhTdbjQX5a7HmuEfXfc4Yux2iYAnHfwpWs3K7w3HLc8z64oRVD4eMFHtkgBwv1S9XRBj4",
  "key28": "5h6BvX4U9QrkgGcDpk9mo6gA88GEkcxDCTJM3AfwsKRsM1oSNGvW2Df1GPvaSfQjXSRXUFtbLZJ1o8bzyZcMhgZX",
  "key29": "3McGSgu39bznb9Hi6SqZdsBE5gqSWVmdMmMiMBC4s5nmcs8A24xoMXvfTnqZT6sjeBok3rj1ZurNmdnJ1igfiv63",
  "key30": "5qVJzmvTbjyFTtTFvC93xrwecoBRGjsevrkbfwf49yN5JNmbNLmF66E1nXawfHdb1EQF5b38QVEFyupGNEqSCE93",
  "key31": "3h2GUgdGiwLFWth4BCeyX6qXaeh4a77F5rGYkJhvchBdn4RQE78NTpWeiUWrC6FV56VS11Fgrjws9noRKwcwgWZc",
  "key32": "5W3Uysn2b4LdWKpLi5NZ572JhGSigv8sSjjyVeKvkCQj8xkKr8kHaTWcmRN6mvxh89PpsXy4HDezrnQHqpB7rzaj",
  "key33": "2nFWGR8H4pQNnisBKNgBqvqcAa7LXAc6ysq28Gii5vaSo7M4ks1mznQ558KPgXhHPyb4tek7noeyLe4tdKgVULhA",
  "key34": "VtvJGEddVB547dbMyo8pTVdPpEznwzh2xvqteKsCLey3hbTzmxugWFTgYA2D8JHPd1DAbTcXo7bu5oZY29xuMWY",
  "key35": "4WZyLBeSKk7k1v9hRVHo56VVsSkeEtgGVxB4DGFTs2HDH5tR4ZcGA7kFrjafqDq9FcDMSjkqnvttY8agxW8v7B9T",
  "key36": "2CSq8G4uCLs1w2M5kaawHYJPM8mYkH9dK84jmKAbRVYGYLj5CAwNLKR2xmZeZuVty6KhtvAcYyUwiFJMn91Xov8Y",
  "key37": "5UddBcCQr8VYxuCiNA4wFJmTjffT6weBkpxFricw4LtqUrvRR4Nfj1CQMgHfDETgK3yagXbJBUZwrqarDm8fFQoL",
  "key38": "2TSeX3cPQoWYQ8EWVKKXi3GYqQxNaMEKGtV6knDUqUUucjj2xYd6TTi9XK5BMqe6z9ScXoNn8xbiBWxQ6ocneq18",
  "key39": "5ETwqWqJCpQZrxC9brZNSe3Siks8N44ohk4u3m8ahMVK4Cb6Ax7TGQBcjvFNistinNSgfWBThEYw6NGG7PCTg8Eu",
  "key40": "3nB9YpTuMWYHrQZanmoGxznH12HsjV1wQ7dHvtL6t3BzZghcL2px2m6pR3ugDEcScxkUiVYygDJNHL4TMTEy65DS",
  "key41": "2C47TeECpseTv9P7cqLbAi6Bc65VaeojmRmygW21hvcPmz1PwbvyTawXMuodqG8BWd5nGpSvNJJiMnFCrQaLyd35",
  "key42": "3tci2dTmPMmyyabTZFX1gicCP6cf6BQiQFhZPVLorMtBZbxEFCYnRYoVeTAhxv5DAnPNX4JcTqoPevTGw6kpYDPR",
  "key43": "2Q4FiQkfdgM8aje4N2JdLRo96sgp4UGT1obp5rLLNuc79bDXe1EipoAAqneJKaE2wEtmm5v6a4oEZB4S2rU19j9q",
  "key44": "4vaqNSHtYVzXBM6fbB96U8pYVwvrDafxABoSV4iWkTyG8UjKiuNA9emkvc33udUqb7tNPDQxCbrU2RSiSPUTcacy",
  "key45": "4MLgb3u1srVKyLdYEGjy8qKQcu5a7GPPn6mb3PDCFLvekNu16kmoNbeR82ja9SMTmKDm1sTzeRwCZQGgppzKQ9vz",
  "key46": "AzGtH8B1jukkP6Ewi5cjjhaPD6KgxoJYzm5To5Fe1dHtP772a7WY3avnTBT18vr3p43bwB9kaRWHsnkj8E1wfaY",
  "key47": "4yGn19vMipAdJNoYAbMgB9G5fjF4dfKWt83w29c5WGzfZcnqmcT7qdPSPQkQFw1ckhhck8Ce7Frp4i1w1YefhS5u",
  "key48": "3jonGwp6y84VrNft2r99mNdcvr8QxE2YqKUo9uYc4GzzwDtajRZFBCF19QPWJjbSFTGzCkLWmwDaYZPwYp3jey1V",
  "key49": "4KkF1BQEfcuuLsYGvPCLcqNcesu8azJNfyy5F8YGQWz4yDqtBUXKP6JHW4MFdq1ajSHVNEm1kFHrRfPMer3rBMun"
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
