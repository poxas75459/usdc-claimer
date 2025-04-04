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
    "4dP9MpAuXiqipCTZAn76ZQ9aYex2cwz6mSkZoEz6PeBYoveSTqcCFnU2QA8jv2gTPFnDLfTym92LE9y2PZ7PeiN1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JQNX12Ub6pnXA7yxmsrBZcHJkwqisqxp6UZSzF9hpYmsXHo2JHStbCcBiWXpVcSzvAkULcGbotKhUTwmYc7dfhD",
  "key1": "bavHitCFHzPWhqantXoF6ozyfs4gejEAGHuowRW66urJrXtMNJbgNLBZPgdJsgoSbVaRHyxjR7obsG9EoVhmayW",
  "key2": "81mbezSRbvmpvHgLpKTSBRzFnGggFEbFpNLaM5tqWAhZvtRHZGYYLyPxrpxhcZ3u2wFkuknu1A2WBFkVukpsrew",
  "key3": "2sVXX5LJM6jWiJZAkLWgaXEP28FnqbWDKuSoWbvZNFSzSLetsBEBh62UhX8kEsPvREAqCWCuuWbmMZ4jfLjXXmgV",
  "key4": "4KNvMw48Qhz92cndBqioRVLxD6VxN9vDdEhPbcDnJeduqB4KFZb8DbvMRh3TKW1zn6W5e8DMRpbpahFqDaiCGPWv",
  "key5": "6z6KiAR5K5hXUYQwnyb5n4PzTMaiB1N3fPeAmjFgMogyJwCzs18eMHmtqKRXciwkjfG6cQbS1c3SBUKvDUfmqVT",
  "key6": "3rzk5m5BHFjJpjNXcfmU9FH1kYWJ2RQBGaJ7oDkGiBmyP5J3tdoF83u9sAJnmiRzefJHN5uCesBtJiCDBXJVSCjs",
  "key7": "5eTtF7mCWe9hkJ9pJEhf64aqru9dFjWA2q2GkTo9HXvwfYysTAauuQ4MH9YjRAdV9rjbMGTcC6xM1VgRbuTK5msn",
  "key8": "31eQujQFqc1hDUTwC1sfNU17P1D6TX46iz2BeLdbGti67jyaxD3q1UUYd3Z5YfJfFA2Hi6rKn61R6NptikheomyZ",
  "key9": "DoP33AnZW2kNRqBJBaYuKUbzgd5UxFJUajV3bMZdvFmMkSKzti7SMUQumVpaphhZevNweLHb61gVy3QADUAQdPs",
  "key10": "2zPJkUfmEV7iwXC5Zz4Ac11CnAUhwXx2FUiwTbbMni76irHGrinjQdRgut6YSwTNMc9q4mZ3F5FxXz5jK6sYXsrz",
  "key11": "376kSCEUiVNXz5LpK7zadCZMcDyPd5S34Qa2uDdYzMsrNue45bTPoXmmXsXztw9MCDQJe8rQgEffZWpMuZWXTr7e",
  "key12": "2rzS2tD666dci4JehYc66mSTnibtRQjJoFmbXiWpakXx1o4gGaMZce6QrqpYV9SWvL22LWssLLHXTY8P9VckqefX",
  "key13": "4YebpS1pZpwsFJ9Xb7nrpD3PcrpuSCHApet5ycxg8KBzAPeUN7dstU4MNxeHBMJYgzaNVvMWk5mP2H9VmgYL8mp8",
  "key14": "5k9XVxQpeFH2gE58XdtCMeV4UNF9BVxaRAatDmA6LTKTeY58tUDKmupsCWA7h5MyxV9NipQmm8UiwnTxngMe9AcS",
  "key15": "5KfMDizyn6kuKh6u673u9BnPcfV4wxTok3Rbyyk4W2NfQvhT5Yr2gUY4cUVUGxAouGti9Go6gKP28Lj1iNSyyNK1",
  "key16": "2hgXuL7rGfAQ5h9eRHwuntjxqZLU672y8znZfFqXF3gMCrmkTcjFiqpWyCwrcRFwwD6stybo5c2XB1TqzGNWrJmh",
  "key17": "57sWjDfWtfhaH9rbhai7cqyL4owRGoiL88Zk63Ry73cMpQaJUHzDcfsNZuvHqVitSn5xHYihUUUzzGozWBFfoJ2b",
  "key18": "Km6EesnHW2KzMTddtdf5GNakvNSHPNimuvrmrjYhFkc1XZBH7F2dnS9euiedsmxjzJVWmX4d7dqG6znKr1grTVN",
  "key19": "5DfzrWPVyiQtZcsZhd6fdh8WnGZVrVxNquArZk2mtvGpBtLLktiFhjwDFG8hkQS7Gnu6xLWagNEeNq3sNiFRt3QE",
  "key20": "2JM351GtevZWCjArrLbMvqNrX7xXXoztLfeEjiLqhkCfzd1g3Y7ZFffw4CrD9JZfyvuGwjb5t4Umg3pMEqRb6EhW",
  "key21": "3qXZVSUhYr7PV4p6ydF947oXZyJYmqCrbSmB7RcRU1mwN7S586wB7WFsu1oqPhymt9UB6LvFnKNmqbW94GfsU93c",
  "key22": "4Xj4ztMuGdDTx4VbakNbUJZQTZKms4XCaSnzKhEg4jJveN2TCQxGSVoF8KhrnAjQd5fwjy3CB3crF45ko1gAvF4k",
  "key23": "RBpt7wbWK3CZGiUvtE1xFCD5541rdq5xTAaZDcbe3ZdvXuwp7NQodCZdvdTmhyvqd1o2oGYjBT1eJ9mQFNFGycv",
  "key24": "5G7RRU31QGGFvmTvEo8Nh91BREFEqKqaP3G8CuDzDo5kHHnboWm5qmRExfsPCwEtwKv5b92tsnsFxkf4HDV8qi1R",
  "key25": "5QvHPcAkXE27xoZPBKLFZNR6vusYwzKBqK4CZbK4NisKgXJDQHw4WgwYLa23iU7mon87Ufxhy9gueKQFqf6gTAAs",
  "key26": "5hZx7o9f1yc7UFFx4LWaaa78VBhdxL2i5G71DZYkmWgNouBWMhSRFk1FXtyfiBAkb4VeFa78Dazhq1MrrP5ckWUh",
  "key27": "TkxEed2D8vx3CLKKokhTFBeyhR5y5ekwSdgMiA7meukZvLx7qszoYrtCfrF5n8xwomJZo1CKEE2eCcdJFfJzagz",
  "key28": "oCAeZcdDUMYpRxCswWPN3qFLkrDuRpZ3cfhCkVBpHge7kVNbDBFq6u9cvntL4jkJLnvp3qQZ1umVDkzgupd3XqB",
  "key29": "4LcpiXKytnFdG8bbArhhaaAm4DdDfMfGEjNp7sVeAu8HCRN2w7thBkQCmctZLEQGEyEJcWVnLASskNJhCxjCWeto",
  "key30": "2wdLqPRdHs6pJ5cATHUYmdosSL4crj9z1JktpGZZW1zbf1jUg11KQbUb36Z5YeUte7BKSUKX5TA4xZ6bjYpNKYuc",
  "key31": "4CKYKhyLQJx8WgghSHpXbAWRtKE6vf8C83K3v3kMSLYF7S61eRfsqqGNerXLPWdThMDKQ6tJZRQXVUDQYHMMYB3Y",
  "key32": "5HAKMp7U1KxrxFAWhQSNhaKSMmDCbjzSFFQUS8CeQxyw864iveqC9ADdQ1n77Hjwc8xpCVVvaS4aDrsKo6Qy1Y7g",
  "key33": "4LAwmWG9EeVdZkZUzEmpzkA6oBsVqkYrp9E3oo4JF87hBh9jJeziFgaxHyXXPjSLSLnwS4gTRHYep86x9r7s9Jke",
  "key34": "4K2grPH5TYnDWFibt6aX1U4eySupD1TR1XEJHv2Bt3jsve4uXiicYm1QVL5nC2pPvC9kfXi24hHnLR9hpkw3viNP",
  "key35": "5fzUCT7hM9L5xTkDrEjkf29N7HWB1K73koE56duZLM51DKDqQwxcsDxd9AuaoXaw3Hs6zFBsYNCQAEzrZAWkpj6S",
  "key36": "MoDmMaeYeUSYjUjk8cogu6c9sBo7gTwfrpNr8oeVPGnWEbq9dkA8f77pjpemouLLK827DixaXtBqreAWEQgz9v4",
  "key37": "5BxdianzdkotUKrbagmVLEqghr42CS4Ch9rLsZSM8rbFKzFAnrDSdm4E94Brzjrw4PU2SwDaqvMSQ66EX8YySWCM",
  "key38": "dk2T7wUw8YPFeNv5NxuJPVyGnroP1Z9yBcGT4HnHZrf9Def1XcWKoNdUHPzq4psMm7v87tLKfta7yaRkzMF4THs",
  "key39": "xqN6ZSzspZTNXy2FfxdPUCjnNVfbAU69AKk1aaenjZZuZ6gbvyDMLT48n3g2XzBjCshwWzhUaVBuwfVxg7dGwz8",
  "key40": "32ZSLJJYc4owRKqCqmn5LfX3Kc6WBDy87Acg6r5KVDtnvXrmGKM6rfMAQN2kRSLtH4WjRP5njnBDziFaKvyANtzj",
  "key41": "41VQ4EXYWt4EEen2Fx5VVGsRS3PPqhTDmKZ5j86jBk87Rk6p2WELWemUEFQh4angETFNA8W6HqGPgZdUoLC1ci5",
  "key42": "3ZyXqQZy1h7N2ECscWASZGYW7HELWeRuDFQXeUpYUJFKmfgXqvxjDPQ3vmEe8nVqeMsDY5trvwqsjdVUugKtpEZp",
  "key43": "4ce7zSeQ943eEjiGCrzw8RE6KigZHD3b2rSQ64iwdH7PWFcAZzMMJPA8UzdtEK3VHcAMNVv1yQ54ZDQVJkKoE2Uw",
  "key44": "5SPhcaKi3fbRjHiEu8QAqAbrtku7A7SMricb7nKT72T7wykCi9QFmGEHpxms6P38WLLDhyimTwCBN4ypjPkDYzvK",
  "key45": "RuJg6RRg4ZR4BB8rJ9a7FYzXHayJL6jmuT8eiUrefUqS4ez8fLoPC3wXxEgt757ybM5NTnv1GcpfyaXeHKxQCZx",
  "key46": "4P38c6fmsBvKX2CSWzxnbHjtPhSMN4sMGFh6ZY9bDtzdwLfeNMAm9e4iCvQL1ea2dnVTZqBXD3Xbcua73DjKpzK2",
  "key47": "2ebFig2Ug46L28hhXi7GbGjAzeKTAkRoaAZMogUYiZrA8BYiLFvvrfNNjuCHsQLZ7av3JXMx3PUdhY2xJs4wvTag",
  "key48": "3yttdfPSj2GmfcaQiBSaPHT1prwtY3V3gKAXH7yTjNj9eV1gifVu4SjqWV8AJkTcaxcNfhunqBTmFSKvhJJtqQ1",
  "key49": "4Cq4puwnWoC7mERahQQCRFN1XoZNYkucR4DnipiXgkfpDSa3u4UBVwx3RP7gUboMHcMQ84gergT6niViBLxE4uhW"
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
