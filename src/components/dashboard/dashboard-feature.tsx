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
    "4hHLJFqYWdmFWPLx8jRk4XZ8SQ3A2eb1HktCgwhNBFm8LiwXS4j5bMZwEqdnyk3531wNoZNRQtcarAx1JtwC74kn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tJiPww2qPEnKpPyPmH5BtTP22QqYNSZb6vxcPPzPvy57Zbat8jj5U2jp9LHErSXMry5A24b8imKw1aeHQBWRKzX",
  "key1": "4WSMdXFyMtYPSJEYaFZEBE6n9n6M8JrUTXzY5wDZUaCJaotdcWW2PKTikeB1GmwM6FTZiWDh7ttaGdhBrdc9YauX",
  "key2": "2KTqyT7HKXw3rCmJRasjJ6rV5jUoagVXxHXLFW5yvRpPrgSEiAX3VSeGDjpsTyKtd6LJgJF5nLGyq4Bz79b7F3rw",
  "key3": "2BXGciSoX4mLy3cnUJasAuEgrKQQ6TxN2AyMhSAZpZpWScD1n4n7GtmaPXyEwvVjgJHeTxJ2stMmNk1Jdy7BfGYN",
  "key4": "4Lyj7MmkoLVweDDsjbqHv2nTtNzTAcbyNfzmPJw3Z8FXPxzPt2K5WtF2EaudnxTR7o2YtacfDaKEXMEqQo2ZbWxA",
  "key5": "mre8Fiu4chqd3GFsGGtJMjsuDuBvbHMeBxW1sSCfxR9udgrsgGmTbdczK3E3xwJ5NjYXsL7My3qd6bh1KGozpjt",
  "key6": "3p8Ki8EiUftBte1SB1HUBSTZcBbuYrL7o4smPo1iTcBJ6ghqW6FZxG5QPzieWtwe3M6hBvzeDBHyGXz1V9YReu4c",
  "key7": "2tGU7wFhk7Xd1yWAPapSaU9YAKiaAVk8Qgz2zMvJEsrydHffvF57h2JMJC78UrywAnVyJLKz2isxwVXw9Di3ZNz",
  "key8": "74mrkZz7WMCvDEPQ1kT6L4fVbyCeS73TnLLgitHzh7TpALmApwAW6mYJW3VY5mFf6krj6x4gcuPhzsYJ7JhW6tL",
  "key9": "3ryjfXZQgPxt6nhDgoTAN48qQzUXc7SsJ932JAXF4Zm1SNi2BgNc76myU3Yea852FFgK5v7bxMeQyxL7cwGyubXz",
  "key10": "3j1aT8YEcK6DJvX9SsydshY8gKFmr8FHn6Qh23eHYuyhGWtcZzhDDiEmgDhkB69u7zUdfXWMwmAKMTQVEDr9QsZV",
  "key11": "4bAcLTJ5mMLmuM4M7ESBRwYhbcx1BSTvDfjMoYr43bY5yPyytNwqAQ8S452RCEx8CWx1cz6utd1rn4rDz3EfaT6T",
  "key12": "3KFawbRfLKNBPtRmLaTFJkHESD8kkh7cfzuekdM8vUiniRjP5AJFNH3vxKdmnswaiFVJPsWjDvqqUXyW259Uj7Ak",
  "key13": "5x8ZRaYFUBqEJo1YzVX7hCRXhhUoGyTvNQ3HbcUHjEyFEPKVaqY3Y9ZMsGiAU4jRfWTQ26qgDKkR3gC5UXYNWJ4i",
  "key14": "3bbKXzwCRUM9CyYK6qLBuTyVNd6EFx99DEPqNDFNx4teqXY4ds1eFt6CDHJqNSjacqcfgfYUeUzPM4fhSH5abGuY",
  "key15": "43rvpjjSTHQTzNcKKR7gnCCqpqgGuM8saPp3ZFoj7dxz13nSrihuLaNvgmgiWFddU9rUD2dum9BA2UW6ADktVNxP",
  "key16": "YJ8SFf1nZNstvzahYtSC85Cdx52p898pSk2YVeD23W9XT883LXbfMChN3YZyZqCQ8bb58ZAdPDVpQmtP5SaLypm",
  "key17": "3GxgdzabJ8X7w6Lrme7GYQ8DF5adKMfJwTxemAMjpeHS7WExMFEdgTWU8zyzi1MML95ZLeFnjvnCE3iNGwMNmoWc",
  "key18": "fRb8BRiC51oktcnaSA199DCLFtSJDt7VaYej2GTmDZdEhLeDc51wfSRxCm5fGT2SVWZiH1VzoH1a4ArPB2tvuT5",
  "key19": "5qu8pEFKzYqDDsJ1bYz7PUMMNgYannUHgA3ha6i4brVVsvs4Hc3aqpMRr2QETwiPgBRUUVq3dJKGwYDS73pGRn3U",
  "key20": "3gwC4UVw7gac41V25PSbizxtUAAopVqbvLumARKrtA5ALbEeF1JVJdV4z53wg7J5RWwqpAcyBdUhZNEkWCu9t9uu",
  "key21": "229eD1wF1MRLXaQL5wTEcgRBZDidRxH8dyjz5ZqincZqHAfb6gkphadJfWu4c2Y6Lytsoc7DHxkXYi4cgRNjs84y",
  "key22": "3nT5JpKFC75DPJ77ZmywgoFE6mC7PvUryQDreFW7yuEYK44t5pQvKTAZgAcq2CHxXL52toL2u3EfjAqxwfy5wdyG",
  "key23": "2UMvbRM1kgvvmPQeis2wwe7BXrYqUrhT8YhzSQjs5zZiRNtKEGubEwZBg14fap7zxydqjUfsqp3WRaGPsUB3hcyj",
  "key24": "JEd4i1sokmybHBHLYpWPiYTevqEDR98j2cyUYZWwBasQLjuMPwZKca1MsLpMZFfVvFDxkU1tYJNfJaSDcqGiKa2",
  "key25": "2btzoRW4NG9jH839xZJPcT8PtqQRNoWNpsYdna3sJ1ptFSkFTKKLcp5aVEf1P4zwpnXGv9deGxVhxh1ZHvWYKMct",
  "key26": "mmN6w6ZT2nLybK2p9361VcLFTDDwiAnc8EwrZAqGztU3qWaDEegQpAr6NAEAXHPjtatbZcXW5xwtrDfUqzGmfEz",
  "key27": "5eER5A6EJBjpneXe2A5LxtwCZmAkJFdZ9Ppq1Cw76TtLwmc2bRdDHrZGgjTAdkocHW5fMCkKN7iN3rasgMqTTmtF",
  "key28": "357nFzgPk1KAKBDBcnjUDPBVv1hN1nHmFydsz67nqwhAhxo23HYntTnY6rQhSSo2NuNYjGKBWsvVzrsGJV7R2o7V",
  "key29": "2Gfajz8azFGsTqUQS6W3MSS8tgaZzT8scCYt4bbHDHNfgJd6bbNBem7nCRCzaLqKR8QBvMmoZzWwnxQoVoGjxRZW",
  "key30": "ZxQ6mVpYzYScuL7p4yYwzeyA4mqE28t1RSmN3k2WLK42ktbKZnn1vZrP4EAQP63vEm1m3fNPmXeF2hsfZdpgLaW",
  "key31": "AhpWyX6oG6ShtKUHifkwz2pCuX4GEiR8Rc9jxSaEoh3puBPhbWzbmcjRFZCSGmNiwYMM8vvR4UUKDGVJtGGn8xA",
  "key32": "2CTJS5VEVria1EafVMVDYNtisgTH1SMFqNw7Nau21zQjDbx9aFZDGmhzDfwz4oGctNkt4tmTnCcRY8p6frPtZanD",
  "key33": "wf4B8BJjs4ovySaH6tvvDr5iaWygXrM4EKYZZ8fW8ab4scxexmGvn6EFVJ2t4K9pLVdcHZBU6PHSgXg92xKxxN6",
  "key34": "5H3jFV5CKBzjhF2EzCL1jN7sVwrPMq3Fjv21HGRUNY5t9FdKmc8mE6XmLjrBG4rMQK7GS5ABt6sQpk8iEeSdjDgh",
  "key35": "2NNQNfVxMdumR4sJPStroYTRzq6exeA1U8nw6MiFJgs4yfTX8Qft39xeohBrWcrpbBbr4QoCYpPGd5PanAp5X2Zv",
  "key36": "2gEDFvNod4Pi2uiN83FpQZ4TViY4F3UqwvjGU1ma996XZnsp4ieS4t1cY4N3n87vr9tnYp2YnBfuxzXQXVHQg7MM",
  "key37": "4WAnsQHas6r8152qpEGhDdJ2Cns7gEf2Zdmtfd3bB8bVfRT7wQQNKcNKYoXk7EWPSek7Aszh9F752CQzMhXEi29J",
  "key38": "5mMF7E7MzxUfsVTVCWhKauXR9e4M36joMBKo7TmCDaRi4A5ftarWpVf6y5ucANVcV1q5fDxEWyuBMboUcmovG1uU",
  "key39": "2pYFtxYz1BdWKHvnCsJB92SaqK8aaTqimYhD8asShFmvWvF12RUhLFwp8paRjjoaBdKStP26vAMnaj5APdLMuVok",
  "key40": "2NXFG2wQTmj8CnCnfJyBUcUj7xtruia26695kPqjoGu9sKwxr8v8XDxBNV4WvBT95rwsPmwLMP2w9JLrnEweNZ1e",
  "key41": "nxxKpeMMMSjGUPzcVTxX3Zi71dPbtvEs6ZZMg69d361V2RmRtervwBjeAc5ub663CnQjnCvoguY5NNUajd2RELc",
  "key42": "Q23SpLauU7Mf9YcVXNHbjb9kZM4Fnu9DBHpnHSYYvkGWoz4vpKpnH9GewehYTFd5P2NAAbi44cUhuPAZBuevpMN",
  "key43": "3Es6kQJ44A7GxGPAPn863sFVfT3D3nZAnfkWhUYkwRbYmohhGNHJP5yhTWVnuCZQNmBopoi6B6LYpY2d4EK6CoeK",
  "key44": "4W7PBD8oxkkbH8f81KaW22maf9awUMJ8wrHDLzvxayRhGXc487AH3VnU8RoiqpyW8r6bJgsTJbQsecXdM1rYdLTH",
  "key45": "3nUYQmN1BQQDqT5VWViayrJbWHqACjS1uXSEn6yWyTtxSgrGAFRt9N7Kv67TPG2aGDn8jiCpuyot4PhqpDnG4JQp",
  "key46": "2MoCTphBaVJpL1di6FjyPsZtXnQathHkoFbarmDpquXQoajSMcAJ5WQUUUuc55TYjD76CEiXUUNmSWPuKfbdRdaX"
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
