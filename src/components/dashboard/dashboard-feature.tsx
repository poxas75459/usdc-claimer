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
    "4Gv7r5B2xHELBYxsaY8kHqKy8dvDSDgerTCKpekdYTSZjsD3tA21XQxtjNhf2ySZDXPV9Xo3uax9cbcDybAVtVmK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7XmiH7zKtR3aTawMLdnRmyWPUf8ed7reTxRfgQPXRfnNs4Gw1GY26AzhYarqvXzqywHrAEEgsvM7PmUURcDgMaL",
  "key1": "4qLqSn1QFtDpYf7aD7LQ2EZSr8WFwsb7uisxDwNiGLhpuiV9AqGS688B5ZqELyMnvM7FD4JRpySRjMHwnkapqxYU",
  "key2": "56RKEUVqrGvahyLJcdx4dRcgfmkz6NUFweQuF7GQBxRnm6vEZGhR5G1Dps3EXsPyeSjqwjX9Mto46w7PzaJUT97B",
  "key3": "26J5pPvPCLuAnRR6sJya1LaXAjbXY18tw2WgnHwn5QTsK4GoF6SaULWQJ9mmRGRKQ1qsLMWg7pJiiKSR7dR99Q4X",
  "key4": "3uHnrgWR13tnStvrQZV8Ci1WK1gxQTSbsiLW7aNkLAMxtNY4DbVrTi3KTrDWQy3ugWtm15CSQqeopdiFfSTF5ADu",
  "key5": "p63JJpvCtE7QoNUgMKKYSW7jSQzL5KwqKmn6xrntQbLzpLHVeJ7323aYcqsA8vLEAjzCrU5XUsnc4zRnJRQFe3G",
  "key6": "3bvYyMR2yTkW5NB9RxGDyhghqPYFszgzGNRLhjkrePykS1aszDX12388TVMbZkMmVsJDNhmfmsK3BbcTnAvjsHwZ",
  "key7": "48psyMLZNXqcWZBqKJx7D9u1czEs3bp6xzvF4LQAkhxFksKq5bViLnJRQCuyj9q1KW8CTYGAAYbwVcqkPpjcJNds",
  "key8": "18aBjZLDV6i2LduSRSkGJf4RMHEcYm3sdoXLEpnKP3DAoSvVravcjjZiDTCi7aaaJ6Xdn2CcRzkYy7BwmKidYGx",
  "key9": "4DChptkbnLvVmdkN9LeqEqDjgnzL8anSYrmR3TtdDUcbKmoDJ2KVoYJrL4cJvvcLwc86s1YjqsZ7k87Q3pmcTkr2",
  "key10": "2vaAxRD61ZEQHHF2nDXrvbmQcRTHSzXquhqoT6FckfuLwFX9QrqzHqVjjfoA39YUmxwYneXTQVMyTBAbA4THRtBN",
  "key11": "3XLJPCrYXvXhM8AGYZVQTf62gUicxc6p2WGKXWVsWfNhH5QyPHneo9RyBZ5FeMNcrZT9bLUkP26UBqqDCKbjC8Pp",
  "key12": "5Lz7ZqsGetZLKz48dF8tGJHtiT7zycdFpiL6snNo8rSS2bkru8vwjxGeq1uArJ6MhDotAP7ijGgZLHaJiE8MrtyC",
  "key13": "3np3vyzMvm6x2bbNYqGZaCnHtHdY1C7q8m9yQScxrfN1HZdx11FJbqNJbCWh8XL2vDZBarZgoz86e8f5bXDwQdwc",
  "key14": "3sBr57w4xGSBr4ufckdo7VTwXeU9Jdbs1uUUUqmcVTJSXJmZVQgLRGob86LA8NDHLhiQzL7EN5ybF1Aok7qd7cJn",
  "key15": "5Fz2oV38Cjxto5dXGry2sfQhJvZyVA4QP2YicFbezgZBMohrs1QrnUY2GQLmTnoasB4LaVnbyXDM4RqDgaekytB3",
  "key16": "hbGrxVSXYBRVPFHAcps3m5YWkZaDsfFHVYZ1bmvZHUkn1bqyDLekzMkgdwZBTLiBoipw5iFK9dDE4W26TyWyBDp",
  "key17": "5DyZehsDt43Qqe4hhVFs188kRo6ukRYADrecQ3YyW1MUwBKFiyfp6b8jgAmVZUeyEpDnRtHxjAwHwpLuczc4EfZt",
  "key18": "3pKjddnTArz3DgCvjPcxRuJTYM7WTYpdkSGSnpSFjSWJvcE1CMWtRdBqRKU1qTUBQvTNJjyMfohdvU67WsQ15Qms",
  "key19": "49optniUbTneBdgndgHwBqyjJcZXePtEs7BH2dJWx4wbbnXNjeRJaBeceVj8Yu88VxyjdW4aPxpeaxuKAWZSQbPY",
  "key20": "5sLnknDwyxXVREkCL6HYMT5mHkT2Chz3a7iTWMGG2LMkaRpKVtQGxGwUhMFVtPxCKzkUjSxkiDgt5J9UcfopH6xP",
  "key21": "4W3nFTVz3aApKgYw5dQzTEJKdXBSnkVexTNrBtBBZPj7QcSN8PypktBbRcuon9tFb2ytkR2meVc9uMFNbN72sojD",
  "key22": "47J7zYKgbbxkEZDmhcTG55dXA7814Fx8ZZ7T8CPp1WzhXpUbNqSHXDdgWqKuWagnXAJQvMHvAED6tpei8iZaSTXF",
  "key23": "39nyhgoQqeFbG9FVUhTcMWgjt9nXSkToh3UinE9b92mQXdhMMsp9kgE2qwHtWujQNwHQxENgjbzDRm5zqTbBo3xR",
  "key24": "63MhHZqzbdKjzZonSfU5tQtN7KRxcD8WKsYuR8BtrWbTRcbunp3wKTyVXydvQ8RYewmd4Vh7vm8T4Xbh1536ea4Q"
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
