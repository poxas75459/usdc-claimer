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
    "sRBMcpJL8iKEDPiPhPzKbqyd59TXfnWn4UUyPbaG6eKbkR8VXG2i3sjz3gfU88sktVJmRm7EuZA4xqUarZWnXoV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zqKxUgSDDFu53DoaVaCdcGD5YSWatT99MuaeYRkYsTXoXbD1uMAwJjgfi1Ad1GwFaiPVjL4UvciKPh8fGLSuPuq",
  "key1": "27o5cojTnrhU8i4YPnnrqg3mStNT7TqfiDP8vFPivTuPMi91nM6xkBn2RQyn7TLMasAfPaHtyf5som7DMVY6WPhB",
  "key2": "3AMFeyypWkgoUvQ1dTnGsUtDFnhPtyEtYEdgvwu9yX6WkRGsvP1qYRhocvfHGs36kBg8Q7C4TRmfADRBnjq3CeH4",
  "key3": "36qjVwL3iXHNBxBxSWGa4WQgij4g6p6XcnSh7nJiidGkZjsmbV1RsT47ZjvRqn7vjpAiqLEgF9JGfuwygq9KZ4Si",
  "key4": "4jo5TW6yBktZLWReRrK4oBBqhVv1fiVTv9GWcYTHXw42L48gSQ8fDVBYf7ZYyb2mzEaYfvyV4rXovuQhVPTS7pb9",
  "key5": "2doe2cXwWwRzzNQoMuvgE4nAxaDduGuy9v6vrqFxmm8fZV17wo56i73XQfqGBRctPQhQuZRCn28234Pac2GboNK3",
  "key6": "53MXoT9MsDiMubwEiUbsCvPAHdBWErF6saV2H8KEuP4wQa8mubWddCC1run3m93GU72BJK5pb4tZ71EDLkiVCEZS",
  "key7": "2yBh4twz46ykVVndeJvAebY4mR2Z6j5SmNcoGmPKpx9rXy4YzvT1iMBkgDcUxK44i6fyQTgcjfcHkge4tU22PWUo",
  "key8": "59VJiLjhC5LDRhGqVZoWYN98GBw1HJUwCoB95exxCD2Ao5YBPcLoTuYGSNiWQB8yNX9s6PAVzkTniF314bp8MxBa",
  "key9": "5hUR1zZJhLnmiTqqX5sZ7kLcYJpoPAVc9gLRLZBVZywD1oc51KEqq1Qh2ZUif7g116oHaxHVudyCmTari22wniHm",
  "key10": "2ectqjy7pNLNa7woUnHCtLcJGjhNDNzkhYMkzuHy1y8AfkpddqJbcKs27u11DZ636jjTgxcxBVUfZszdv2qBqmWy",
  "key11": "3gde376F3hC5kw5DKemRrh8ZL3kMykMQCvozZxhMc17paj1WCDuC7AubNy24oaKdQxQJCxqGumxP5QTdZUzfYsKw",
  "key12": "3Uv3zCrN9AM3U4GDS4y3XBXSMTobLesDwpnRtL8ssD1HT7Peu5jJDX59uYFAzRCvVEnKQkEgP4Uuwr4MSzx7LSFc",
  "key13": "5Tc63sasM4gtgLYehSjuUaJskmCs1TFAb9vxdcQFssbtZkfsbHNV6G9BwRPbaayQhNEZ3mb4sghzQHZGgnWmoMhG",
  "key14": "4FsrhGZ5MLWNqW5qYKjrARjFGnVFN4yoXaVwdkqt83GykD57Hfo6p14a25QKVQDj2975Tp8e2TSUgidqcT7kkpnr",
  "key15": "5DhwCBGg5JSfRkbJXJMDHYx1KbKXtg4ZxX4t5YHZevcufGa36QiFFd5kCFh1sQD56Lw9aiV4LpP2q2KFTSZx4RzP",
  "key16": "4af3AFmPD8hyEhbioC54WtHJMscDAP7SQgXYry1zc3eaWC1oHYCQSu61nByRkrdNgGsBQrXtbRWdoBt1iHeQ3Xjb",
  "key17": "c9vT2phJJF1jDdGwZeUUeYUuuKr8Uf5vL9k9bBAeBYfUxC7ysq6zPpjQLBjzw2ogRzWexUokUEMx3f7PdkcojUt",
  "key18": "3ZdiHhRomDsVAecadYPmq27XxSBpHUUBBiaRgN3MwSrr27UNCx54kPTFnkuAXjoKeE6YXnZSZTo6yGB2dg4gw7AA",
  "key19": "2PFyBFC9PTmE5j5SFZv3fSfwTPYLbKucch4nxWmyAZb43GRx2BRvtheP6XF59kka2MtbBq3EV3cjL7wMdh8JgQ6C",
  "key20": "3ErZJ6HbWmVx6hNctR4Bxdo8CouvpR6b11TquKn8sbwxGcbyXNfawh3PL3PSeLCSRAu7UaWhEBrqvKHbHL6SHAui",
  "key21": "myRpC9vbFwsJj4YuLnoPhaCpCbuL9t4oVvmfMHRerPgPiKUkfabPkmnMt3zw3tn5141VJL8UCevQJP2yA69tPWp",
  "key22": "2dgtQLM2gYEXJE6NpEewyEY28p8BF7bkui4DbMaCX4XaboDEE4sui9D7QUn1M4nbVc92iVXNojz1ZdxfcDcAMmZD",
  "key23": "5aefEMHtEBFfWHQeJbZALG6RmmkufxqcKA7UK9LsL17PYkynXz8cYhSLpuNDqUQxykNRASYdX58hLyXGTj9Eaex2",
  "key24": "2WAi9AyhyP13NWmRTKqPbWJDSbZxRaSob9tsAje27EqSzYRXt6dCY17urTXfrZBC6FWFcqb1nqmAWeAXNPMZmwHj",
  "key25": "5N1kXjxawxy3JaN2iSENoET86U5cgEzHMewdFMBH3x6CD61mRBgQLuiRBjCQ36BU6oqtDNcCGK8232WufiB3XkyU",
  "key26": "3sLrxvG1tPtiTCPBgPpaFtzRuPnem431BEeLbDAj2Gim967P7D7ztgsHdw3kiF811DMAF5oetvqb7oPhRRxYk7sH",
  "key27": "n8jCxGd4Rfjn4JNUMno2PSBQ3JUNRxQfRSzRJviVA38a1zko7eJQgRstB3sKAju4fFy5VMCpkRo86kVZeJ23Yf1",
  "key28": "4Qn4Vuej7YXGG72uiPo5UmT4HAD3izrnTpoaECpcHRGtDmYoT5yJSwN6AXH11ZKByPy9exLvuEeRstSTSWbHbUhL"
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
