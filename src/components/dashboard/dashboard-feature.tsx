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
    "3Uau9ecCvbReSffQKtskocMyEaMuxnMjebfUqUFuYDZ4YKaKCTf48UTtuEVqkaCUaZVJ4fwuoSNRgoTpwTKuMjb6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Xt2y9ji5P7CNHyD6DEXPGFmFnFRjvf9cqK3dfMuvNYvxYa87ifgd6g4ze6oRZcg5kPR7xTg7SJemUGQ5i9MKPjp",
  "key1": "69brEvNQhKTf5Si4JCkWM6YifLDYG4SgX1fLkXaVKU4jNZ82GVVF5HDZiyGcC94tZ86H9CAmwWwmU44PnZT1FFf",
  "key2": "2edzw5TQxJaVFrH1HCHJysPqhGttpS9cTSmFCSr96XHNLho3nZzhShef48ywuHKt1JeKmjQR4Rnw9M6LaWUikVyw",
  "key3": "5d7J6xxyFt3KX456SzQUw56cekeCfKKsW2y4M6ss1EPYjmgrRTAHKL7MydNEcDeZEdVTkzJLaHS3X3MowqyPG3eE",
  "key4": "4neuiei3tkRiCGXsFxoxKFN3ziw66otJbBxGcregvpKn5dk81QuU8QpmTAfJ3NchnMbVeJAkse1cZwUgSDNa3mxg",
  "key5": "64gxPFykPLJ9fGgTjbZ9euXgA5SgM1732jo1rkcYjzSy6SeydtjR899bCkwcBH5q6t44rbkD26L9UcpPdjbnmzzr",
  "key6": "jgzKzuyVqYeQV6ZDskB4SEcxCwLdcvin4a9yeQhLhYg7bG42cZz53x5z9nTriSRsoDhKhiG1bbbQwec9byNsmr5",
  "key7": "3RxPpsi26ZPhHiDmcFvf6EUR8iX9V3ShfaBJVUGkBRvv9ZUZTMAmnVBNNCFpMxpRT8ciKskZkGH2zktCR9yC9bX7",
  "key8": "2Lyr5dLtXLckUovVghEh2UaSFiSU2jKL1c2tXLABMNcw2xFuc6o5azFQmYsLwwczPfsyrYb3mnv5qpjndr3cJU4H",
  "key9": "2WuYSgm9PfUuRAL2sZvCRC5i1q4HbRjoNktgQ88vpM5MDj15e1wUTxNmVceSM2xqpLAJXLtG1an7dyXvTC6WARkc",
  "key10": "3Dph8YXTGVoJ4sZrBXMNF39RsakiTYrjiEuSVUFpd4Af78zZWDsWZCMep4LeBS43vRd2wB58yqN4UHoF4k2zTQVS",
  "key11": "qDmMjdgUVq5LRu5e87h27uZjAQvDmrGFmXYoVa77pS2PS4xgtLm3SVJWxiVL13VPEoVEZ921wky5ZuVvBwkbwcQ",
  "key12": "3rA3adWgJ4k5VVPozvjdwsLDaDBAzcMycMyWjQVZ6TK4xCo1jffNLA4nycBStiALYy7btypkK3TaRYqNMeTJ7cJg",
  "key13": "41W2Tz38vCfMSCBfN3k1p6GZ1CyCShDVqNn4v5QsRxNzG3MDKt5GNFxTTiBFy3tVzEhApSDEj36TnBfSUs2N26uf",
  "key14": "Pc9DWosNMP78NhnkmdPNjf7kyPpfSs7jo9gzdES83W515asvNcgiwoP29HxiTy2V8fzA1DebGjJL2cbCcR7bpXu",
  "key15": "48bqVjZdsLLPgQfwNt1ESAN69xzUB1fdAq9DYsyWz2XXM6nMbTrDJA7z6x3DF8vBdkWSkMpg3JzUetmiJ17mxmzf",
  "key16": "2dQCEfaUXL6zsr4E8RVfpZiJHZ9trxSVTqupFbQofdxHLQcJvXWqLxquocZKWKKRuC8MyXBfrcc5EiCkFM7TJPXo",
  "key17": "3PL7gdCKDRhfHRqXFTkzBV8QonXe8aPovp5KBgMaV59Qh6RgcdUhKVxCZvS1U2GyUgpqskWG5ShAwrmHNgR6dJ5c",
  "key18": "3YaY6G7w8Q17eG5UxvoF3PXNroDuu9sPGjXNmdSxq7KFdEf4pTo9SAJo2yBLWhfnqn1MNtmvPRxpybhnYGpzq4UX",
  "key19": "29YMHHRp2BvT1mUXdbdpPc8N2ogAF9k7QpjQbbhCVWGfKBzyaxRB5ggSVQw8oBa3vBikVby7AmyELnj7tVvWyVy8",
  "key20": "64EKNDaKAYjoRmAyVspzrqdSRQDUQMguPt8s8CGm1FJzrLXg273gqSfhT6WSLA2Uzco8WRmutbkisgTrrqrqUunk",
  "key21": "47VfapcTiRh6xMLMCb4n6MirqWWHbqzQXkTVzF1s29kpYVgu3y51hY41Kd16hbZhe6UaqVFpJ8krnDj896rrXnzK",
  "key22": "qfNjYjuDMLBet9PAdobUscNaVk2GZ6Gw4HYTJSkvdFhuYQeKnVwNU6QcqsvD57Dzwm4LJce1vdSCxKrxpMdYHTz",
  "key23": "4zAfzsyvrR8Pg6RXB6jFnT1goPc2WStwuCqgmrPkrir8wGYKnAhkKwL7A28bzmWU55NerNnJ76JDWE6yrA83AQvd",
  "key24": "8jVMa5USEnRack7k2PbV1G8AZVTk8ohxygFaEkVswfdXGCx7zBxxrs6aJkS7gsKJH2qBtoMFffmt4wVGZaP7Ybt",
  "key25": "3xp8kKC5htwn5DiUgiN1n7CkibJS9bjMSLn1cgCPvA7rD1QhxdsuPGNug3dnhdQwq8ybmnFBZZDXKbkhKT2k3X1D"
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
