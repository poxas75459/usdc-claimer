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
    "5Df6eaqHFBhgCxcf2cL13oYRY7h3wF7E1KUveTZJKVoXzW9xYHYVhnFBwzjHGYmGPYpc7HtJHTfwAgjUkA3rpRNF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vRcVQnCXq64dqDuUQ2bWKWdnUarFcs4s7yaeq9BDaGzdh2TpxzRQdQcVCw8ijx3PZzpuYN59YP1i3wBTxJFBiQD",
  "key1": "2VpL1Vg2QfMkWnzuJrW9rLtdNhdJZ3Y288haAtBCA5mAdkiNNTWEPNGmEgKihMWRi25Q6TTfJMijn5sPrEBCkWfT",
  "key2": "8d7fYmWs6MeQsM1r3UfQBzT2b41nbP5Yenov25zA85H2LgxSuHyaAkSTcBHqGKt54NLLKVnjaR1uxG2Lsxb7gKt",
  "key3": "3XLXr2txMvtQ1UJ1FtCsPoWUByFgxebEYTcGjmYJpbczinqeuR1vdMFDRdvWreQkgYhYx3hMxA5UUA3gtst3tx41",
  "key4": "419FrqHD29v2TumFYEEJecYRuYdsJ6qjiAsWxHdmSjZQE2nPrSYd9DAmbEDDpAuVafc2apqrb5csQG1W2nzo6AUp",
  "key5": "jmFfeYM3PrUuL648dZE8WR32116pyZgDX78BHEVGzyY5AiQNXs225wmUWE2XmE5HshZn3vUAHVcKrsbQ4ys8kNB",
  "key6": "koC92BKxsEocknWC6rHNbPDgyxx4S9WwRts33w4iqA9GZXC3qjobukpFZE4WT9kCkquk2HqvoBz5bD8wgeC8kcN",
  "key7": "5YUTFT2rn9t1cPRNymE56HJ6f8sTwutXgVyzsJ19PYJ9DW1ETPMUWUdqLcvvmNz98bVstZ6v9VTpTRG2JxSqXoxz",
  "key8": "3ikT3bBTQFUJgvuME9t37wjEcAnGNW6NQkAHyHM6GJyqjz1V6qem9sedaxA6kRNebtBN9GMjGKUMxwGbHHu1PCib",
  "key9": "4spMzw4Z3nFssXo46Dvmi4o4yLR1Vt1kEW7r8k3sMwe2vnJ6GSzwsHEQ4i1RBcShZMX9Ed99cN43wfXUEds1bEss",
  "key10": "3tyW9QQ6iq85WsjeS1WcJFYfaaLw3xW7Tta5ACy4iHTo8BYuXFFWKerFfDRvTwNsx5gapWSSZQ27A4BFFFqWHJeD",
  "key11": "4LUWDTQaQkmWxLZ6dkgrc7aCgKcfjTTRZyu9QktTRvtGumR2Q4Gbz2pGDVvDDbUBFaVYRA8y5UmaznjAoYyHsSsA",
  "key12": "4GPmRMbL5XUJVnCi3h2EZK97Wni1j7y4Tg281whewmw2qYz2f7g1YFmcywrScqQ2n43hwP8vMKqArqPUeiHEqFwC",
  "key13": "XMwhGqmvmuaLGvuvAs3ztmGtTRuaoL7ettADr2EgnhBu79CbYfsed7i7TYUrB24kR69XHerd2gc6CkSxFi29e1S",
  "key14": "3ejaqw6xvTQLcZbxRZtvwGitRZJ8jTT2Khh1u3AYNwXN878W5AJsAgdfTFy8P77eHs7ZUo19S2HNjB8oECQDSwyR",
  "key15": "5EZzBs4agMxBM5oytEJr3kMKy89kwVTKzu7DhMn8s4qaMW5kdGYkkYXdGhZWUSfX1W6CEPPr49RYS7cM92qf7JXt",
  "key16": "5vctYhrV4rHPdHZ43jyiSB4wjmAFpoVrXnckz5ceVfpxUPCFn4ZwA5akqy5wE1B8g7BbkyiKvyaz7Tj9EV2TcfRe",
  "key17": "5EXL8ZydrvncEsZCPjg26AoUrh28eM5y8JtZuHfx16nsDCmmqvGeokB5bEFRi25YRZYP9LuwU6kYwJ8qbqjYHVkK",
  "key18": "5EUSkB1LM2vBff5AuCjTFi1L6wCBCJuQhKYbBRnR42RYkzdwKkrTuQYmF36d4nQVfL3BJuXguswYEP3EjHfdTizB",
  "key19": "33t3AvZ68MvcdbLcVUEpe9J8QCtxR6KAAb83Mj99j8f19eSUDyedypxXzJ5AUy7P2E9SfivZSB4o58pf8DKooiJ2",
  "key20": "3FioC25ndHwSxwgE5QhzeZbeD5o8iU9n3S7SNfrV1BQXpZxbCSeenBLs271fdj5DLBq1ZNiaQBJLBxY5oAUKPLho",
  "key21": "2Lr8Zum7MrhYMavAfsxMFtbV7wMDBkpGjwhKfrX7XeCEcWr1VkgQ6aJH7iPndgfsu9acBF2EydN36q5EyrDXS5CV",
  "key22": "5GGHgDhV6jQM5gkbsjw35dygu15gfWYPQ8DvJty3XsrBokBNZm44XboaXUV1YSZk8RDNSJhMdu58vYPG9dYhrhs3",
  "key23": "3PjWQ8awhcUB5eHCiLM2hMdnQHggnJBDzTPRApQn8fzD5ZjVJX46pS2zAgC4JoveraHkSsJmWckvmKGecn6rMDjV",
  "key24": "3RVWdPiNzED1XBWeWFivnSzkFNrhXQr5hsw2YdpJQJvHjzqLekznuZ4G1Mu2MMeAaUiULC6d5GZLofW5KQmJ2hRV"
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
