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
    "2cvj5bnm1xHFvgDURfA2fjNL3wGXsu86wfPACHFhPUADJLEsrVSsChZDu5u71icdQdNk6DQXbh5qafj27dLVsyBH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LqS4Wqi67AKoKEgLu7oehVXoYpTMhSQKueCD9i37gXNFj89MLVfiunZWQHVWCoSykUoui8CsZDPoZ8WpXaCk79q",
  "key1": "4ut46HVha4zBTySrqJp1uLCapbpfdPJFM1df3hWRBKyocCyoxEyerGM7fM9avDzGoa6hXWHwwA2HSVRa9zmQAmE1",
  "key2": "3u891y3wvmWpYSVibN4LZHXY8uk2wV2P6gtHMTZddKJ9Q7p6a48saC3mjkVco189ppnHVw4mRk8TaYtdZDsFhSrv",
  "key3": "5dMcddL7QV4HsogTCrjgShLf2QvSfgku14mwazTXgfgTqVbkdXK7V5Vp4TZFf99N74STUSQptikZ9e42E6RtTjJq",
  "key4": "34i3nVzA44DVMqVYUdFXqTFkaEyyVymsNEN5sCGjbyR53cXL5aYQ8MPdEcLrSMobpjyU3KULsWdCQnAqxpesLtuf",
  "key5": "25CjmtcKV1suxBXHkSNK9yjQjp5FHQEbayis2hgmqCcSXpdJsUceQPkbaqjx45j8stCRnDsPFqofrRZ4PNbHeigr",
  "key6": "4n2ToQ1MtUNwjVb8Lc9mRgRWeMkvSVdwMHehGAWBRmhYK32mBfdjhpvsoLExwBK6Sof9Weauo3enk3gBN3Hq7VaF",
  "key7": "5ASXp4jdqzHNZs4uSYsAvJpyqLumL9C9JYiSpJ1ALS39uAaMEZzT8kLFguVW9p91Eocveoj8jNyWxmWSBKHiLCG9",
  "key8": "2ow1Z3huisLjZJR5seEkt6tyRhNndAAtusxqqcUGMx2ZGkGekokg5mFATu1wBEuQHCLotr9V9QeGZD5i2zhhwwkG",
  "key9": "3LzXUABbQxHmkxc6D3ocze5rbV5oioL7rED1o3iCedwpSuwCJPKKWxup2ELETxx4MPLqfFiypH7bqZ5D1Tzx98Wn",
  "key10": "31A3J3ehLmpAmTu9ovYr9aHKNyUGMaeh9rmmANZsyifLtczdQHiMxUSKx1eQVZx3kLXfHrTVXMEY4KigeBivCsiW",
  "key11": "2otFUzTBWHEyKonC9QDRexUKwLbZ8HebzV89yN2vR74RbWEisZE5gUQp3CMB4vHh3sses61UFKPo4nyog76mARv8",
  "key12": "1ZUbPvkZELaLnHBB3GPP1mPSMKaPZAqVP4az5aVRACSQPXNbnsLPwaKwS4FrC2fhHcXMrYnCLwprumyPtru31MJ",
  "key13": "A7EfGNnxvhakYnRCMsiPLmTTCXP6B9icmnRGauiLsnXNtssVYB8aR1bTTxnNEJvxqGGAKRKqN7HaRdEafSWjicg",
  "key14": "5W442Lryvo3DScTnsFt6bUhAKPTyr1bPxx5q6ehhyDceUfqVKjsGtiM7FPLEgBTFdEwedi7WXnDq7bYV8CWoN9bj",
  "key15": "5krfDVZCSMZm7NHbkm9goAAy2QbME4moigvufK6gB7w6us4LevbXg2hqVMrqFuUAnpFv9cmVhsXZUxJrhm7QX7ZC",
  "key16": "123Z8NDC9TUCpqsWSAvb42RxQN6r3sLgHsQQq3B5Sp7ZjyxDbxcnMensPGdmYdATDsEqRn5QwY1MyRdiRzRoc5ss",
  "key17": "2DHowoeuLB4526gjgyRRmDG8xEKY3ZWBsUcC5XVYQW3B7qDovtwuUDGwwRXnKmHxJAUXBsP8kkqJ7sppVsv1hBQV",
  "key18": "4VE8RxQcXnK8ozazDDFs8BK1iFjRosph2r7oQAEcfRyG3fsTxivz3XhUUz6MFcsJbEvqucrwaNbo7dRNQAeJu7yb",
  "key19": "2sjLfshe5PTF2z9gPUbZKzxQYveu9Gr94jctUsq6tvPxLE3knQiuGYCrBf2fPpE4Xkr4L8HHpxC6P15M32BdTr7G",
  "key20": "347cjej31BVMutjGyMB4Cpa1PkxdzAohwJ6pNLM8Hh9Z46oZXXU1UBk4qZoTrdfBNrsYoEvfzu5XGh6gLm1sDRTq",
  "key21": "3GYtLq5EoARHQ6oU59oLPBcMjG8uwUAowqfykSgyNMZa1d49EyQLkFDLNJzufrKBsktVtFmuqn3sYdabf1Zsx7Dt",
  "key22": "gHvToFjQNmi6vDWYy7qfquMcJB4qonaDhkeSVwHupnLQUaHY3YzdK1sHcSURUxnT3qURjixwRGApEWjphNbccik",
  "key23": "2j5TkEb5wft3999YEBbbhqbBFtVMnEakeZZ5J2yYvWYPcLVmDv8VZRd4thEaYDMLQSuuejKzSzpnSMJ8iCbrDesk",
  "key24": "53Nqu3SGLBDqXtS7d57J76E46MSjxgvMuyUrrBipWaw1C9JDhXHQ22B3epSMH6JGkeqwy6kNybeYMaeV8mA1Arxs",
  "key25": "4toNVs6W3watbMV72jBsKWBBPXpsFfaQc688VogXtjQtx8Dg2dQ9iZGAdF4c6fseKxCSc9yaMNoZpfKzvhdBVQ48",
  "key26": "3W6V7Hzz3RL8kJs1mPsgp6Pcuh8TYFcFhKmPf5oXurWibYPi9xi6UWkp5N4CusPzSftmggzHngfoKEDmqqMjfzZJ",
  "key27": "2GykrPnejY6BenyC3G2FB2FtXoBWrPBzZrK3JedbHLZK6zRaoqVZFrdzwKfy6dAYHNjoGVAK8sT9AnrJMG3BXGAi",
  "key28": "4gXYEsZXvDEMdTFRZLQktAA9abfVdFdcsq9eB1VsXfdrARtZNGyX1rksfvdQeXZw5HTLAnHWwXsQNBzA5HHqsvnp"
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
