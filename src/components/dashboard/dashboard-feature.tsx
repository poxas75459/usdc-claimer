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
    "4DUBmB6GkqghZ3Aqjbw9ibtArKoFnSiMWr9KMNjqkfZm4op2ARSmsXTuNatUmhgoURu4Yvjo8KCf8ErvAqmTxqyh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Gx4Ao4apS7SUbNgt2vRr48y2gWdF6eqSZi26FuvQtBv5nhqWGPAXry9p3jt71asqXQ2h2ZPTrP1ULDCY6SvJzZC",
  "key1": "64NsCvGDbyaQFQ551rJfSP6aoSV1is9DbLJdPwuyg3tu6MbhtVjQoCt4oiDwPE8Pi5GN2iYLVDkWfFPuDRVo4SRj",
  "key2": "2TWYHGQq2nFGgdHN7ChixFt577zyDxofri7JijsPWuPRWmpz2TDEyj5WWNPAdUgmf4Qat5eaN2QhwDo6jFvHYzYp",
  "key3": "45i78GMwo1DC6jPYwfd4wbSErkSgT8yr7dpFNrPb1omcUHgsmwrU8oKWdMmSsYahDDxzrTLExkmGBxeWv5ZjgqRE",
  "key4": "4jNR81WqDyF6rKGWtznQcfCpRu4RYQcmnwmXgjwV69R9SbiFR8fkcV8yfarMN3P45xDaJViTBh7Upe5B3jRPF3bS",
  "key5": "65CB33GWTxrYp9dBhL25fSYqjcymkvNkSTsM76pXrKubKKbSaw8ds9ZDykk9yd46hPrsXdyASqhG87zcXsPFbke5",
  "key6": "aXNTH6ZK8wuB7FEi9sR3wButKHHzb4rciHGFGdU36GGTavnZK7MQ7hCoK72a8pAPdsV2ZUi5tA2yY4Jovfd7KS8",
  "key7": "26Lo9WMk9u8cMJnR15erPu6Y6gviExuM3Lrrwn9naU4kW8egKNZ6Se8jZYxJQTh2Aek2vQf7rNh3hXb8xbNwGNqR",
  "key8": "z6LQnzAwbHgDNk4gPECJfqEZty858q3L8xqGWBY2nsd9jeoL65wfLV6tzieqyQKUBBJ22juscXD4XWTUckYpPmk",
  "key9": "4Uj9AGJZo13C77k2c5M1YvzDMttqvw4DMtDXLtqKmTaztsbDV9muvSnF7hYL87ijtyAgQfWqNykMAD9ZACKmpDY3",
  "key10": "5W6Nftodvnk42TTxNNrBKQ9JBbRvyJtxDW5En12Qod7rdre3uUyrbWqLKVvKai7ngg7sLYokH7zLwZSKUk9EdwZi",
  "key11": "31RLjHq52hXaGmLqnhMBu1cehUq9qZ1RZV5otsye1fEzHi1Q2BNgQe2G3TKYbqEMph7ZkJqARPr5c1eBgPUATyBJ",
  "key12": "5BoASekMn64XZCNFmKzda7HJz8vGTp4rYBT58VijQrZQ5CtiS7JoWrjGr6yp3DRyMuNssgvWzWjAPPG5EXkkvU1P",
  "key13": "35JUaNXwcfRKBxdsRbLgbw9Y2fthPJF8TZ7QxgdieNqstTCci4WH45T64UmgrRXDiQLecsWjJXedXbSUzyzDQd3C",
  "key14": "2NPSjwozWSkW86eKLEztuiH4Ncoj6u1HgFDc1cLUmmnuymr57jcEqmyWKCSvzDCbaTQgMruLzNrVQvSSfQszWFCc",
  "key15": "3F1iJMCcBdW6FiKZQE5JwLhbshysqP4v7psNkmUXXvwnpWcHKwiC8NXZzc1ah4BFRZ4CybUhE38P89N929VaHPqn",
  "key16": "2B2bgGCNLNyZvQuLCcKnW7xiD8cZSVaNiP5vgLZZVThTm47UQnzFCgN8m2hmRb2XDTy496KqsDTvAawmHXiuUzvN",
  "key17": "4zqX2R7MLr1iZBVCSKfBex4GuBgjZV9swwmLgpAHkC7VVLWwxfJptzZBMyLGP31Cctkw4jsdnNFGUzLXJw92TkcB",
  "key18": "513L4AEj5iCq2jtfCNZ6SsCwZzU4t5VMdd7oQp2WNs4YCwBZPYUN7YQhG1XZfzpRAfEK1D2pEx4rwSL7vp9j73PJ",
  "key19": "4FyW2e8dWHnYLtcQTUu2DgRB3u43YtsiPbKCGJAN38u9paVA2uJFwNMVtFscToEcJTT4RT1xPQBse75GCqjraJ7b",
  "key20": "34Jk5ePLHm77ewVux8spCubU8yi3wCyFTRPPZF8AXYLMwihWJm87Tu3qa6ppJw5LnDBk9jjMuTGod3HTNoW2X8W6",
  "key21": "3XLySU1iXuBdCGMEDaqUd8qhEMGMj5Lt6WhTEHesJKtA322y1TztLkuJC37MTR5PVn8cmSaqKSTSZmWpzMYNr3ud",
  "key22": "2aVJF4NBfdm3ZbSeiLzsDgTUfwGkeFMAxT9XRvdSYREMNYuNANLydpGpcazErAcfAX9b19AUdFaDGgtsFaAek7ko",
  "key23": "4dKCCTFBRmrQP3UaiaBetNQuMNLiwHT6ZHSVKPbtXKTFhyyRrzP5KJHwk2NCE5oxTFNRSVn7hy6MEtQV5nduuHQW",
  "key24": "5ADBF2x3sRJMma182yuB1o9PJGgrpf2sV9TmFHKomik1WQ2S5qPCUjCXRxBGMtMxZr2CCNMKUiqhpZaHgCFxtkaf",
  "key25": "4RjcNgHwoWbkZiDfFkDiZDyWWx5YPyhGGkKSmSFozsU5c7LU25N34T49FB2LYFDTHPakKUM5BgYxdwnQ5efkYKuK"
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
