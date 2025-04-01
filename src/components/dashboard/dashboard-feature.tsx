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
    "4U8zBvJXcNjUsFAtsgAoLz6CXrjDZmykvVKmr3g6GBKTeZyFi6hftHBSLzjWPkqgydLJZNyd5YqHPVxKEEjvwn3m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S1qCw9xYFpA8nbjW5K4v4MM23JMo9fN3gQ9JNLfUDChsostbqD1pwnifu37XdcSfh6qUnSCwBVzeNLrW736Q2ba",
  "key1": "4xhU2yXRjDgD5pYF7MkgqWmQPWyoLFyYkRa5BgNiWrvNCVoNZHze6EbHtTa7obTSfRbBBcKsTa4BcWzvQ73Eaych",
  "key2": "SYSfw1gu7YDAQrZpZfHL22fWZ2K3wDr9HqBsxTQzP9ZUoo629cZnmJGNPDR6ULt6h41j4CZ8vnD25roRMKRseeQ",
  "key3": "3sqScwDGypiGwByrbECSzX31iuoc9MvxEKJ4wFhhmDFkgjaMLaLUrBYtVzrcxbc4Ve8VubKRBpJASug44bxhpSce",
  "key4": "2SPXJC2dsrVyAdvQDSA5b65ZfGTedSNb5nD9NL5a6Y86cf3RMTTaqywJtKzPC3JdMMSU3Zrhrz5YkLtRn5jNTaoQ",
  "key5": "2WD1BSUYXiuffP8yd25DGQp3BEjGwDMsXX8izP9B5ZKG1UmEL63VcdP9tbRQ6SyoDxQuyM6qpgjqFyFNQjtK88dm",
  "key6": "2TGg114CgSBJHNEHse6j7CMTC9fPAQ2Nci35NKzzwdKxTNmcducDe2PxLh3AjrmnxJ82kEq6RwGLjRK6b4d49WUu",
  "key7": "4yidyJeRqKaBTrZUFwMoJyuAV17mh4iq8AR2UYKhVvoBfiDyF6BeUKTw9ydQQSLXPgtHWxG7fZqTAHv6iJP1fxmS",
  "key8": "233H2Vs1whaHQwYNHQ8tzXodbNoZstb1qt7FnbLuw5KnoKUvr6zYiA3rGtqs9w6PqqBBM51fLoFvSxbbJcfAMGox",
  "key9": "58o9rWsCuyjm7if1mcfLHrvRiUeVDfrepqDpiP4uBnfBqJBR6BMG8EUtwZmeZGPHMybVnuF746VuA64SMYNDVuYc",
  "key10": "2tmyHD6Zv7BDhDg4fGuYtWutkppd94HKojPKefnZ7tfZ9yG422KE4DAxshprkMdavk9EJ699vH4UoqsgjoFFQE1",
  "key11": "3oLt3Qh1LcaS5vtLtLPocVso5jwZePcg6QBWZqRZh94CWKEiU7mbe8q8DUvhqgFJpr5sFrV962ZoCX478fG4uHYs",
  "key12": "5pC52Vb84qeF7jG1S2QnZf12XXBxD6iRYriXsbqE5KWCRGEjZihBEdG8GtfpAzMfo2DHD3AVBCNGCrsZnx9qoqKu",
  "key13": "2V8xbbHzPnJRbm8zfpiebNJyQGJowgXXm52hUd5bFrfuf6FxMWAVufhrzhq7uuE5yYxi1e1CkL8UpUZpwqt2ZDpy",
  "key14": "2NLycHVRLESDAnU6kKPPo3mkT2JJ6khFFYzsr84W9BzGRKLaGsG15GreEy3Ep63ZddAD8RrhRNSeQoruK99s14vT",
  "key15": "5ut1Ax5pLFHiJ71B5p3DrRkSdhrZectshqvfwrgyDkytmQ3FCxpoF3MiietVtxNhGsWco6JkXyMkgfZrzgvBQgFB",
  "key16": "45YvAzhqSRykr96ZLvdi63JGpSM6TYg4pvFDLS8BymvmnEpMMzQL5K1HBdUJCcijtpiA8zXTLHsrSiVcDGpZhCEq",
  "key17": "m2YJTiGFTrzTCm4h1B6oh9QYACq51eGF2uXPJiRagqyjt21QHZZADc9U9wP9KA8MULv9ZcpGWK6MT4A5L9knvWv",
  "key18": "4JwtvF9tXnJzysDcfxWbzZA4iY52D3BwGaZayDwDnZd3CSj8suqmyLdaHj2peYtzkJkuhSsXfdd8TWVr8F2rKkUZ",
  "key19": "3vVLq54RKvJ9BKSaBYKFmJf6vopZUfMbMnAnKF8CRGPzLETEeAkCy127wMabBuH3tWp1tKtusinYeT3GMCN9wU2d",
  "key20": "3PjgkMNCkbbWFM1cFY7Dvi2z1bVKB2R1D4kKWvQu9rw51jYb55rpo5aM1gUQzHeEa9MnHjrz7F6eRbqRVyXfMHZT",
  "key21": "66HS6aPKNPTEoxPDp5r16xyqq7zgXZBtQzy18bkmG9JnYB7WvTtVjimL5sLGbeFmMygGzH2x2NswijQxu8DU9vEi",
  "key22": "5qdKgXTTwM65a8XjtQxFF5GaBzwhonJaq3TC1WGzJ9adqT4THxwAG7M23jNvMnbH99LurE2ZssoFVPhVX2h4kuGf",
  "key23": "4Srb8MLyV7QaVL9kPDbNwsAH3eVQ2ekNCmXTeYMPtJFbV5BkW1yKRitsUmU1VjkRt6Y9Wg88DC5WsVuk4aR8ijZT",
  "key24": "3zF7XrjW9LqF9J1fuGQ12j4sNaz8q8wfPk6aBNBb9vFJbtQGr6ZnazB1WC8Q1r1A89cShrCpJe5q6vD33JRb1GJU",
  "key25": "3hCW7qYNyDwoSLJjxLX8Yc34vatUg865d8sZd3A4gtri783dwTHPsEmr7PDBFvG1EtJ6grrM94fmP3RpcGkvojzN",
  "key26": "7WbtimLXd6axqZryLdMwDL1WxuUeuGYEqoWepyK4zmNgVLiS5SNpGXMRixT98RNp9ToLLNBibpTPdnahinJCfEj",
  "key27": "UKqReFu2zfaG6s5Cxv3RG7DZr2dAVzT32KmSP6hh3HrMR96sthHfdjjvBi7RXdZNocVgfqqtxhFxUwPUXuDf61A",
  "key28": "3E7RwcFo6PsPUnesGGjMCY9rMr3zjy29AQvkeuVt1DoJMNhLsQpewfp7zBVckuoDc82KwX3w9udeVXQhfZWJLuJj",
  "key29": "6iSMY4MbcabUNbEnGhWd8pWs2RUAa1JyUE64FEZWpyQCT8HLmBHYc6mMQP34mQP1EEnRfNd54okig7jMbSXdaAx",
  "key30": "4GuWtLYN4sCji3Yj5YckxL1DuxKT8DBtoZaSNjnXNhixgR6XzyWEyCq2aDk4h7crfMdSKR6dKKaWAGXZKtKQdUrD",
  "key31": "wcFzRLJyXRUjFZAZhgqHVnP1KmpzgpUV3QZtADkAaUoab4QoTYEYkgAqR91cFScDZS8L59Jyt5UeBp49yB63LmW",
  "key32": "28W97KKBgUwwMowhQMGyqJ7iWKwunh83NXrCmxNDSWigVNeQmMT5Vtb1rDiEXU9p6crX4P4dvpJ9Fa5Qwi2j7RXV",
  "key33": "2HJenbJ9dHYno12aSzDprf9NcZCZ2z2CRrMcM3Aa9BCT4dDTDKtADbq8eFSgtRE15quVE66muVPMvgWVXFZDcere",
  "key34": "5hyC1CxiN1REXgtojpNcYrzKq4N6rmHsuswM1HS6dt5yizAYbWDp1vvscygJ7WrbMQspsBW69LSMLSyPa3tbSEw3",
  "key35": "2wEoD8gNPhhQm46P9JYMP9WGJUULn2jueNVABDQbm5XZdJh6a2GcnXctFoDLWCbuiEmnuuH1zQGqhkLgWXYe1F21",
  "key36": "2TF52mGz1UtYLzq39N8tbWhCDWkovcopvXwHPo66Pn2mMUAHWJ9ExxnsVax96GfadoZ5RvqR4xJaFVCCiEAfc3Zg"
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
