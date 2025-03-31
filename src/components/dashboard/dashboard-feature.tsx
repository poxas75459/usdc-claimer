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
    "6194RXzZ49WK9AWw3AuSXanzCd7weh4yCDtsZ5Cn9JL3WTw8eQGMJaFJAVVEoixj7yFdpGKtZomxsMxGvbRycnS1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cet54bY3Wub3pAKWjrf5VDQHuHL7Xf7DCc8Kh715Qed51dn2Hy4mkmFTg5CFTiYzoM1AYJWoKueAez4z438m5GT",
  "key1": "4yG5UTcnFNo3sAuBpTVgUVqWX21TQRR1LnKcCXCmKd8kQVWk8kVGSgN9wG7pMeDeHc8Gp57goJsMPfMmgpBTnCU5",
  "key2": "3eMDnT8rhjN3mnjBUk3Rw4ysroGeLsXxpUHi5HHykwA1dhwgDdYVSKvcg9NKWTx3bSeYGoxwQDKhhScenGdWugsA",
  "key3": "3H3dwn4iNfEtfRbs3xjDk6MKeGaeV7grLDQAzQjmUXvuwto4L7Ey4Rq8zUQvHyHbXuXmed1Vr3NUQZL4cJQxsLPf",
  "key4": "21ghWYtZnXqQq4EwfgCfzyVwwehPN17szoArJWjupfGtNC7uoZkpJsWjKNMoLkXyfoTcBfKprfkzZQtaYpuQ6Ycp",
  "key5": "14yR85Z3J4Hj2tPkW8Co5xckawFigYjfc2t5bMYVUyCr1Gv5SdJicd6XQuVQeSThLgGSWRK311L9VkXt7g6kN2X",
  "key6": "MjBdRYQNKBPp8T2ZmYhPwtsj6fCDyheULsA2Mgh5Cz9bs5WYJLgH7ute6Q87c9gTFJ8sHMMwTxDGCN3uf9nPEa9",
  "key7": "c11QC7Vek7dKcbVMdHxod4uDWdtTpZsLYsmbV12jBKgBd4hBmd2zKQbQwrTWQVDH5evWEdJRBdstjEYPvJfsbak",
  "key8": "RbJ59zhzHYzAj15v7NvB4v1Xn9GTRspQSnytAH2fwJqNaQC1yrM6Vt8CNj1iit4VX8VNEfio5fSfkxCoYVu3ZUs",
  "key9": "4EXkhc97tTmXnEiFGw5c6eSRjRYcKuG8fJZTK2DC5LoJhEd6rAgC9Chq2NYywKog16fkGKgSKQ8qqff9PrkjUdhV",
  "key10": "7T2SPd7eqPbqCNgQnXZY8GKSp3654jSU1Hj6LL4SWMEXzhKHiLT1276HEhyY64ioHJBYsezYLp4t5pcviCMMTKt",
  "key11": "32sot5mSzhGZ9BoDrfhM87jT4VPgoFjBP4uRNAf7Z5jUu78kNYCxxXuh3CDwDDdZj5ktWwvsrY24qG4dvNB1kFd2",
  "key12": "5GxjRQrnCuMoqhP9bCS6eiXvvTzrhtTqpDFXxYxmYF1jmsMXsfukW1KS3SRVJEitAStRruSh6zqeoXMmJENE9bcL",
  "key13": "51KW8nckJ4rHbmGSsMvAz58ae8aUNSvKWTePaBqdGZ7D3aKwFd6MV1dmyrPr7afCEiFtcu3HoYuJCcPohaBt4Rh9",
  "key14": "3VpA4a8VdLY9pFA9xFdpUi8KNykpL9gdazCC98Q1FLfLVvBvL3rCJuNu1MKEh3Dhx9bMLdXNLaBTjTNx96TFFtDT",
  "key15": "4NaMdrsuVwbTSciundqFkTokDiP9WoH8i3UP6N65tShPpemVBq1w1QrnbaXcozCHwhJaEXXevsfdh83hEDNyuvrk",
  "key16": "2FG6QamFWRJ2ttpJfLwaXkTcBni3umPi3yrEUqDbnYGQJZE4tpatyngbtGLabJAJHBz1rcCK9tbw7zm8JnYmVWN4",
  "key17": "i1L5XdnBV1WNScgwqUPtJn5U5B6iq1jhs9BSbNtxpiPEKiHieDxzY2GuCpVKm43aY35BCSsaGf7Y6qyosStgBMg",
  "key18": "3e41Xay79DWs4ZbjzBaatA4Ku33M7Sr3ezyTv3pQYhGNHzgwtXosaz1kWnjL5AX5HMXpoLKNih9zjsjTqTeXMPbt",
  "key19": "5ZynWzNHvtyZ3kN7sEY3vnyJvMAsRHCGKtBTSz8srNAhhramWEGFcBtDbMDf83qj5isQDNjruAMDQVTeHcN9cp6E",
  "key20": "5mjLw4KQUWTSkvZ2xsfESBDp67Q7Fd9ZiyNTC8PuA5YEQ8RCM7iCZRnxCdhRKZqb4J84xuYdxNy58jV8Wg12FN75",
  "key21": "2d9bAYdccKBXuitoSUa9aaL28M7jbEcPc5qbcuCjPvuKsNuVdokN7rBPKPr9hEsP3dqvgGmQAqwqrbHEYEUmVQQ3",
  "key22": "5vkxaaaeaX7tSRZw741PiENtdAKS6SAfdBksjegVcHuys6Wi758wXpLSHKeX89GL2M2ArGJg7THfpYh1FNiFaXXt",
  "key23": "34zGdtfhxEZ3WTd1Ba5xJdqoZqKmtjPXZznVMGz839QSXqvVbEWb1G8V28ugBHoBMAUQXMisPtPMMGRUQ5VnzhoE",
  "key24": "2NpJgfgsZTsHMSFu21VHZSWFdP1yK3223yRGqe8dZurDh1cFJHQ9FAwLJ7sHCaXhysz4M8AU1g3TrgGWTveWAzqg",
  "key25": "3Q34jGgcJcdVQmudcaRykSrR15F88KZkpBzaxGvC8V19obbgTHis5A8u7VkAm9d8A3jfhUHcCGU9Hxw7Vc7MmZaq",
  "key26": "4m2vFNFJKpXs3GNafpMPkhBu7pZHLJDpUMtNKrAy54WgTrn7KKzYoCaPch7GNfcnMXzsUdQrQSB8CUvo7VnyQozT",
  "key27": "4dmbyxwXEp8qm6HAt7Twsia5skSsz9Az82UF7Dv4zJx5XN9JLUqRdk1iRwMyCUWi9x4TymHAHmW8H4ZMaW9KuTaG",
  "key28": "3en9gBJVgtJdWTymwA451UjtnsLhMQXyEPM6zdqNAtx1mDavaugy2Vya17X25NzGLfCjySnHan5jCbhxHrL9eWsJ",
  "key29": "4hHNVjQGiNPisPqriCYbGxEaqS2qL7EHMpEwYGxMpr7ToWnrKnJW868qnjLtruHsbKeX1M4HLykv2JhnWi5z9S2p",
  "key30": "JCeXPNGrdxPd96E6VTnds248BRFUGWCjQ3XqhFPuppz4VnpyD6EqzZHnQGDSiKgAaipUAacb9ZH64MZBD74bYMM",
  "key31": "qQNnL5iTQ9PYHjHVdZ5MoeM7KXJFSuBaNr64TFcidEru9mHZipB4VneYzkF3J79DQLhYzyuhSguU9q8P4WisLpD",
  "key32": "nb7X6yGbgcfHwCYFdzKbJxe999gVoCTtb7hDpk6A4HAyXgq2MQG8c6Ezd28gj9JtjRMMkQXWmuWHoeFR8Mz39kD",
  "key33": "65AhWS131nA4GKDusJkNZCC1yicqzWk7Cw1vs1p2t78FEk9MR2x8feH5oETXnxh3So3RfixWHGNbdS2sYqzt2Yhj",
  "key34": "ABvHGtemavJLwAQUwfwuDrxBGGhy1cjoYDunNM2grARUjki9EuAwJ7ne5WK1MDjEdBkMBazn4Hgkk4SQg1Jex2H",
  "key35": "nR8gemrR1sn5SyG4oCxtqzahwkntVhvcm3bFmXf3bjXzcHEeoAX3jXagCMWf6hAWnobq1goCx75bn422u9ELR8q",
  "key36": "3stz43czeCuSMWt8rQ6Fxp1JURUersaS25tafr3tiGLfFifgkHxknywXDWLLtMcfPCPxqb1PU3quaE727btToBG",
  "key37": "nJ6NXLCBHJ5odopvpsUH9tuHiYbUqtVhoR2xyvXPQqQ9efJ5uTChYWKDcsxUCypmRyXiMRSm2cLn3fEir3CGcfZ",
  "key38": "22gLYvopmYRQLU8nEKugVbmqmcZEHBGQHg94B399ksNnqpMosJKKbNzFHx4wcfm8myYVyRe6XmeXfiPBnBrsQMNf",
  "key39": "5MdzmZwCHFPsXM7hjwjoXZ2MYoiJnjQGkJ7amhWvaH1BDGBGQxQsitDkjKdsUquwyUpqVx4LQcLkjKWZ3gvBZ7Zt",
  "key40": "2rWNFNzpT26gv564u3Vw3ih2UNXHYyb5QiSZVLun2tXsCVfRvz9kB8RbPstEdwSRR88bEDD9KaYR6BaDzECqLBy2",
  "key41": "CZxi1MNkvpFpvm9wEaQHsuZHXZLq1CbqdvfZRoVBA729CEzn5pade2znaxEiB4NcLw9hrG2ZzySiXCe3NLWvupp",
  "key42": "2YR9dYwRhSCsbkh42XiWyGDmp4zsE6ocx8T4bCKCWrDfrrD63mBxQ3BcUSfJrqZrP6CwyWUmzU5Bv5J6YCpwTTeT",
  "key43": "5W72mPiZw5F5uigDGD8ykiEHmxemKMRXiRT9K4TmUeoWLeGXYTTrGhNNzZvv75jdyhMmSNMkZAKhaFGLVaaZNj11",
  "key44": "2gqZvfhJsougsujBa5jAeXwg9LRtkuiHavhGSMyTzzWqKUnVFPNScmAZ9ySa1CBDH3ntrfqjGP2ZTQLVmy7RuPhB",
  "key45": "5cHSfTAfBWzqtddEh29WCJYotCgREA5QsxEjJ1Vfm8WTBnT1v875i1qFi8Gfg6KfXu8kzPkJYb6V1ydvB27fywqr"
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
