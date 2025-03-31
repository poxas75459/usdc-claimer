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
    "3rRe3qsu8xBsB6HWAGnyLUNmuyCsVdNHUd3oixBbsPFQTRJUK6LMvtNZoNzQkG1wcJ2LVoaSt8fTza3676JhC7gv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LXp1ZnvZTM6NK6ZyykDZE3PTxUvBi5nsX2izdD2KktfYDqKDaHEJNfYH2RQ8FWFhAnf4tbYyc77a1csC1D295gU",
  "key1": "52tvyv9NNikAuu7eczw3oVwaiwuLh69x1uYz5bF49a1PEwyeBUMRyJ5dShFWFj8hsieFAZGaByCmUSfm8RDkYhMg",
  "key2": "3XXMrUJjTEu34zAP62P9UwQUENSB9R6Rib4pA94SV4ShgCUdhQ321NNQ1nwFQQGJgBYh1KDdg4aX4EqNhavNcihW",
  "key3": "2Hh7WC42Hyvjvwr2RCt2UpSFeHDNHwQknYDFgysRPvYdeS331bk99S5MA5ZGQMSR3D35S2B2pvAvJzGD569pPGBF",
  "key4": "5NhmMHeNMgi4UbYpbSWp76CijzrrMCCyxpKg1stCvfMZDyL6uW6uMU8b4sXWsgFcm31DAZk51oLSQjJJg3Kr4eq7",
  "key5": "5Qu2ZYm6LnHkZ4FA6fPr3qhtPTh4LStCSs2HtP9oGvBGUrC6FwvBNNZtbUgY2TPYo8y7o9xZfowP7YZZkq2pbJeM",
  "key6": "5Ts98KmFFv2UksMmsKD8xByJ7dZDQVw3ybxQnwe61MzCgULpZdPVZqz5fQneKv1LJTA4JVDoMeWxPuwU46gZ86jQ",
  "key7": "2xkJSRMginJ6utGTE58mpAPrNAHW6mRPcozQCv4DkxQ9FCLV17LVdMM1RonmitepPNYrMUzDSNi2dvubfF4d89sB",
  "key8": "2p5RZyQAZFPtXsBT2wynpxYyPvgippNhHtrpkzFYP63jGHqbZCZk8vCYedxqvPpgY5qJKj53DPcz3xRzSbNpJx2G",
  "key9": "4fqwUsCEP9EmicSq7tBWu3ZMbC7mLMgrhd9xPFMsBMu1YwPgPHgopRfTNaRF1YffiefpQCEuEnFC9aouGr16eiXL",
  "key10": "66jxq4sZ7A2k3xCPKJ15rGXCa2TrEakFJuRnsCuvuifTPEZXE7AYvSSyfXLoDAqwqPbT8kbGhcj1j4rnWy9P6tYi",
  "key11": "28Z5mCfyJQor4NEKqVWDSdCUd2VNmQbA9KQMPRUcr354B8pyMeJnciMdSvfKtyVsMPeYBskSVkfrJ3NXXFmRtwuK",
  "key12": "5CJQoxAguFyvLAiXnNPwhY9Ag222YyWNHBVQ1fyQvwjGx1LkeAuHwY6r9pS2Sg7ngNeQtMSX3rgVYRtSnKA2r5tH",
  "key13": "4UPyymd8vUy8zn9323QspTWfCWbRv9C5LuMHm5FDoYbm9CYUNGZrvFnCNKw2F1dCUJXtn8jVzi624K4CFTHyhbMp",
  "key14": "5JML8gx2Gx6yerGnQJw4sHx21kTvC4BT1MRAv1MpvuHu1jotQshfwPgqyfyvWiPu6F4yqRvLkjpp45eRNhDz8CF5",
  "key15": "4UkW3iAMr4U4pmppoT2ouU2R88Xg2eChHEzf4waUFV6eTHxwAvbSYutSVf7qVqQ9gNCKBRvKPv3KLrRCtMyxTt9m",
  "key16": "5daSjFNYkHivWdSxhJ5p3byKygKGB8Bf8mhfoxtHdzPKU516nraRkUM8zYLXHY4es4vw9U3D3skwk35fg571JSng",
  "key17": "4JznWCARxUUANnd87s9qkP282V3bdnXxW7Ncu2SKtBCLZH2Z9DFDYV89ayTf9vi3DNUTTpyprWC6SWFH9MmD4Vp6",
  "key18": "413UwyZqbNRRZ9WsReRxRuyD32x3zPXAVgX3d6gMuak1ghGHt8dgZKYRcvZLB4nnZPF4W4pdSKMDZjkYncNXr5Rt",
  "key19": "2N9QTp2SBC3egQ18qw7gPkmaZqfFhojVqCERREBLrafYP8tDZMP6tYFe8KKcsM8vpbCkCQSDbv76zpbCk7g1RBfT",
  "key20": "3kxxRvYcPK7H42WMUYmEAziXo61JtYKyrevzRKRhBCzpyug4eRQJDe7nijakf2VZBtfKcxjWz9PyJYWCNLiEqDQa",
  "key21": "59NLEnvU1yWGHm7jEXKUptU7vFgP97vC87sUsM8jm7qLNpH8ccf4dsAwyGQUxCEKd1f1iPJd4Pu5RHAhPGqdMPkm",
  "key22": "4unhid8DSf1AopqbX24Djq68jWsqRHwrBYDwQwW9HPJshsAo1gquZ8wkzEcnrVWisHpyY4V9vVvCtoo3ZpN88Ym7",
  "key23": "4tadSFzF5rgJxeUPaB6L1WDzkCjSeXxZJNHLM3DDdWTLQzEvr2pRdTfbkgF4bBfbG1RP5qpNEF6FwCgQ6mrz3T9S",
  "key24": "5c7dMzTNRS5Bgzi1KpNgqaB4bTbJiJtDxmErHPTCj4VTU3njQFJkZLiLBkNHapgT2M8JyQDqjZG7jBaJ6H9YrZke",
  "key25": "63LPnQeJ2FPU2ZeDsAEgKvmrpffRJaGgwJSK8YV7xXPApvhPgQcbL6HbyyyKW6Nd6L7MddmU1pFUaJpMwXzCt2qd",
  "key26": "63uJgPPUnuwV8yhqiuwNP8rf31N8dZyjPHka8m8djpp8r5aA9Jag6ChStKAHkBxjDdDHCiuiBTcPrhQfTPF6ftJF",
  "key27": "3V7qpaddrE7n7tCGyJSu7ibMGyTHEYDAtJTXBbLA3qu3HPvuT1joUDsiddVYMhb2Dp8bbWa9crLyLWS4LNEKHzd6",
  "key28": "5ugVwc1DxqcxNvJTCwX1q7xpCCjXTT5ZtWsGHjY5L5ny8tB3c8cetjmoKKPy6x5PrRtaSpNfeHBsTk3TbgymZfVw",
  "key29": "3cWsdteHTHRw3RpXeJ4go6RG5XMqcQqXLisaw8ovHTL6QQhnCmEHUXM5tGcHhwYQKWq9WVUfDZR55bEu1z2yMMRe",
  "key30": "5HmLhqHEnhojViyA6LU2hsfFHDq2shLikxmSNuoNExycepRQ7ucpgRrpdTHWtc7YK7AA6GKdZywmvpftUxKQtKNu",
  "key31": "2sNCfs4pEJBPcn7Z1REgCNBRFi78ybyh88pttLmGScuJxMgppjCP1gttU5uofYsmFeGjVPq8pq6vWqcMwgD1t9tg",
  "key32": "f5VGDdu37i1yaA4UrJR8Yi7DQ1tamWwepqmtskBxasKhcvgMJqWx6nEeeYPXzMATdwWsyLzEsPYKmC4Ns2xxaQn",
  "key33": "5GSrsL8NdrYxwdrc9vofYf5jQjc2KQ1WwCKZdBLWhSd1g16ccN7rhuxmMio5VYHLyFddP1enUp6GpLMKsnpZYrP1",
  "key34": "3GmdJ2QdNwHsrCnjJUMY7CCLaFMY5mJqgGKsqUSAkTN6JjUY8qs46KcwB6pCFS5PbrcgYpxHB6xBFai918Tf48vD",
  "key35": "WfbNfeRAjJsfqD13JxgLtt3BQtVpSzxjNMtnGqKxHde2EDq7gS4GBvYL6Ewi67wCeAkvgHbipiHZg98uvXgZwZm",
  "key36": "Tktj8pv4RdwSxQTQTTGAgdm25h9TPGD4wcWYs85W2mKQnzBRP33m9BEq4BrozEVtQSkhP42Gc4xWiyfjWn8dQFw"
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
