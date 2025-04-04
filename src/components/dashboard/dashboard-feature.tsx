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
    "4eGqaQGL9U62hfsR4bD2bohHixTsFjFyH7SJfqAchd5GczsmqcFbVyF8xZWErc4HWEGAZGM45VzxxQXQwnXr3xUU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pUxBHRFadjruPjsipKRqf8WcqykSg6fV2FFZzRwZjFmBdjQXC7RB8A3ko452VvETcqkRpcv67cdTcJqvSKAdmPM",
  "key1": "wTniijSps3i8GtnkdXit7L5Y626QZmbKY7Pm45717hV76KCd719DHagXJjpNgY2Q3njeSbxm6hZZiJvoUCJVzRh",
  "key2": "4RjeUkpbGzaWQdok6AMALc6XPzTYYymGnLFmUd1P1g1p57tYCFLPgn9LLKwmuBJmvWqNhFiYLLqzJfr2hShvBfc4",
  "key3": "4R8P4ReP7rqZ78BGeTSdHV9HvXUL9rMeULiUvraqAVp7rnb4wLBDFBgTeckxoSPuxqUAcSCgP5uHySSWyt6kwmNC",
  "key4": "4bUXbuPcPc8LJZTHXr6XnNySMu8oSiA4uvNJppbXBsJyKFomSD4eLFvoBzgjkGE79pVMXWehcQMfSwyHpq5RP7Cj",
  "key5": "aK878gobTGRfDFJRQKcuGCTiSLqnTzNucpPtt3jKKZxHc3BWYYQXYZSL7M7feJhnDYZys1AWAsNTh3NHmuRB4ac",
  "key6": "3b8PGunvJr1sr44cfVRrnXYeQVHqsBhomuFPxqjYUbEn1vtG91K5eW7VX8D1uB7B1wYxKzoCrKbmdwJuZRjthELQ",
  "key7": "412KznK19MQ2zYdHKWuVNLNJhUeBGgtrZqpbLrDjDPvFxNg9q8MWZeWYCFaZ7VF4zvc8ESUpu34HwM3Vf2UofojB",
  "key8": "3LPMQChMiatTcwVyCud5v9P4mDStyvXv87wZdP6wRWVuM5PvcvDmRLYHHmBy3oErCPbhG27bLbkvpkngi8tRwbvF",
  "key9": "ngpJTUfemREPPoerMRdSkkWDf9JgB4k16SeeedaMwnmh6V3q7PVUyLDADqkEncUJaTJzdx3ypD2it8M4UhGCypE",
  "key10": "2ap34opimJXPXTdgLuGh7jBHvtYeJLFNazHLazgwqcMWpGWWwqqdC8svNaTCGPHmfUqiGchAsGNNahnUqRY2UYu",
  "key11": "4gEakXoDnNCyG35j59f485H93W3NbYXJ69qFRysSTw4rYVJMy16cv8s2A6eemdx3FYFrZKBRzHdE5vt6z8SVsuww",
  "key12": "3C3DPKE7a4EEVT8nirJBWLb9dG58xL5XiiXD25AK1ZqbPdp6LKFJLgsAkPQyc1bhwmAVJLTAGsJiaeAwwJbDv3jo",
  "key13": "3auP5CRuq9myTwohCQRb5rjuC2hgbV5rYuRE183Z4Ei9J319Q4ruJLfFhcvpfK9s7BhW5mVKmznXJfCDHfsG9WMt",
  "key14": "4h7VsoVur8ShZmRKjoV2cdtqubcwqqXtGioh88iGhAtHcepxUAsvtzz8EDW4B8JQmd52YAu1QiQu7pqzcpUthPTt",
  "key15": "5vVSXQZPwSkEK1N6ZgVvcaYBTNcL4yo2NxrUXGDHf9R4CtYUSxNf6U8mgmHCvKxv6396ooHezEiwGFndbGKkxeR4",
  "key16": "5gUP8mwdCGivi2j5ikY8449i6PgbaznXdwYNSBj3nZ5RCYpsvs3BCtR8sifeL4CLmgsEncumPhRpe7FKcdZL3Sjo",
  "key17": "3uf2k4Zi4XjhXVBAHaJxo7MGwqkxBseEZFKfg39n8HiJoy31XU5i1RbjkhhZYxt4ZihqdA6CrMTH4KQtSzuizjFi",
  "key18": "i5nRFuXg4YVL9DFZaWxEz1WfixN4UqLXnTQbtjYQA9gz61U4h5MtqPtXoLrfMueChJqwY2KrKFGH2a8K2LtG3ZN",
  "key19": "31kfSAcowHpuyubgzKyzpzB5RucUETkc6HHsU7w717jRCToKMFodUcSySFBY4wMM1gcYkEjTzLjn9BfpGu4uPFBG",
  "key20": "3QpnKMMvE82wT7H4PV6Ms5xuD48NZLikhc4mqrLjd72Lvg3MXa8uDoCkR7kQvxmqKX2iurQo8kdE5y3gHzA4YHXV",
  "key21": "5RrVBZZumy4QiBvufekqifTrVx48W4eL7WiwYWZQkceh6nRR38phcnZ53UG6gBaCaognuZHLFtpF6tiMcHjcb31z",
  "key22": "Bw6bfqrVd157LPGoe3rTncipZL9FYheRZb7rpfaGwc4oDM1a2EzMxwjhLkoXbgaXCp9ko82xE8CUmULpKbrxjuA",
  "key23": "2picHUiSkMuZVNQqE85yd6KPxR9Q61LJJkSqKdonXJjvgach4u2ndsr1dNLTpoD7YAAB6TBgWkvA6EAR2WyTwqTx",
  "key24": "2WPvjpaSyfn5qVTfgBLBDt5Wew8QqBc5GvnCzNuhNedxHxU1crRwpyrhedp7i8d8psXukqnxrxbKER1t7pJHncvZ",
  "key25": "2jB3yeqGDWtqew9zAN28qchguLUex6WSxTPAgCm9e4Z3wLxijBo7BZxmdj3QAPfzL3o16bpPTGWoApkgTWvtLsqv",
  "key26": "3Qxryj5xBD8muurFUM9PxnA8g2xQXG5stMcShJQALk8KD1eStHUTi52FwLeuSMhBHN34629GUmvapsoxQ6jLbdfW",
  "key27": "5xkZfb47sTgqdazSTLe5rfTj2iPRJiHDX8atCoPYa4V4bTCBotu21aAjWKmHKtZJgpGAC64ckiPo2ZkzByTc3sp7",
  "key28": "4ZsXNcr4svMg3T3SfaHBpHoXSPkGsJAD1Kqv4xX6wjvYdn6nns98SKF1g6mYeQsu66PGhsNB95CbLWDf9JYhGREM",
  "key29": "3JWesXY2mTETDiE6bcAojh91N1FzYjoJnz4Q5VoFd1GiiAsBgVYkentjwm4poX39AyCLruriMo6m3czrLpUVKhc2"
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
