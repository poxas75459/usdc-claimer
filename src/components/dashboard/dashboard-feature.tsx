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
    "3yJEAcXeShZUnCNLXc11toxmusmp6Y8KV74BTNBinxVKhCu7mtwo9HturkVpWDGvnaJouUTzKEi1KVKk4zyz3Bwc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2h4wbfjoakTnRQMacrFAFKLmiGHR6HS3SmSQHyAfCYWPQVKNCYSY9WkvtXuavAxRHvMa8Ld6zLyb6DnLEiTPyj7y",
  "key1": "Z2JLPMV52mwtTd14yUa6XXJFF79hEsHV61LB7tExBsAvsgREirNMZRfJKPktMVhDsrr4Hc5KbeABh58qhd3QDak",
  "key2": "2KpCFU3cLNy53kyHAiF5jsnxy4aQLQ1dHLqX23YEq5Z9CqzY4vXDYSSZsQ8i4j9J3ZzX821NB9KoxZDEusrK7whk",
  "key3": "3MpG8fvYB1u43RZ26dtWXyrkxhyHi95Ko9u5SQwTzCsuEz3JMD5PYHfAKSePeHuwzurausbnDRPVkBNhuvcbG4eq",
  "key4": "4jetFGCsk8KHvV94z6XFXugEVYiPw12R858i2DPdiwGG4pgLdZaBMo9V5P9fFpJZoxE4cHYyzVgQertPT8R6i5DK",
  "key5": "4UY49wx3wqUJUfrGG6Rqrmz1zkYuKgCNhGjQg4hrqsPiSFFMFQwLr3gwKPeGnRcTCFxgqPzQASw2BD9L2Y3mQCLM",
  "key6": "2LpFDTy9jhgoe4JPLCJq8w4U4iRtLpz8cUq3CKFpcAYGN5uSTQrvB2LYxqyVwf8WES4Wd21CCXFNYx1R56xfXQ5F",
  "key7": "2dMUg2rn2TJL5Vd4qmvbMwFUJ5mj4XcXLFKMwXQAQMDnC35DHn4spzk3W1SAWMrxwdMzv94WPKbXgMFtjXU7wgZj",
  "key8": "3cWePKkkJeMBoiVH3og89YHrWsthvurMeyryTvWukCa5XHYgq91XDetTayBdNaAo2Zuj3emAbHt7VmSWc5z55YMP",
  "key9": "5Qpn56Xmu1wy4J9N5F3vmRLCiuRphSigGxydhrSx3qAiECZjVCY1qoX8Xoavq1UGaXxko2EndRtLnHZ8kJqeC5r7",
  "key10": "3xQPW8hiqj3QzdkkRDd9GEFRdZ2H5ZxXejVanFD2rkT1jWBNoMCNaAuiYRBF36X6vGRZayQVEiwwC9ctNDpPNWZZ",
  "key11": "2w781RxmqeLdLFoeK6aHXwhvijMHrDJpNgtmgsZsvwCkncSC7cX3cey94qQrzYbWe9TP2LN5vEPf5sdcuZYfBYR9",
  "key12": "vr4u3gXwGrqFYNvnqbMBCJd6Sk1YFBTe5WBGFBwtpPERDZaHLvKW6rU7E2bQAoEL2tAAQWsKX2tqn3YkYh8hjjP",
  "key13": "5xnSP1mqp6fVRHAsGkHadMbSZA3SrHGSLNWj2H4WYkLEa8JEoiHZyWvEkM2thGaHfMYUPtNe9qRjcjy2ZLHYEWhM",
  "key14": "3VbzuHx9CdpTmboYySqcXbaCLfB1MKEDmosMbLp2671xVcH97E9Q9WVwmDCGLwpZNyfWiREGL8tw6X7seHqXzd36",
  "key15": "tq6Af2WkunAPfKxEuRnp5MgsaWJbQViQVDgnuVhD9ktoJW2KFWqhgy8w9ZQrsKbR6YmUYkEpMrrD32R9i38dqxn",
  "key16": "2GqfpVA22WG6MH4uuPkvxJajt1WYD1imGHe1M7izZctazBfU1W8xhB2JndPLUTrCWKErjDZeZHDdKa5kqSCK3Fvm",
  "key17": "65cjiak1xwdqiNiRzN3YB74CWKZ2okyJ8vh8Fsf9yMGkzA2aXJPAEJWG8f49MkExV2PLRLSnyeyaSav22RAsAV3g",
  "key18": "5HBdGLLoP1LHbJAEm7gtSs4x2Bg89hR9VWyMrWjGHpUbnNQH3nX7MBmQdFL4xFYnhcNsiDfigtQNWYh86N5ZB1BY",
  "key19": "3AUr4Ds2vrCphMW4Nu1L61MgbRCFoBmaCjxPvWhGGF98Stmso9JRwQMcjabDTEVPQAmzVURMd9BU4Tsh7vJkoyXM",
  "key20": "2gihFehzTr9D9zydhkPuFLhdrTDLjTJSAxNiHYS1GvRi9rDHe9P6CrfUEYoP6s8k1ptriz2DmQHjJWqDGAZUKyL8",
  "key21": "S6QpaKZnLBfeAuEEM58cXXR5kve8kJsLDH8TMirQgnuzbNyTa6o6EPZ9bnPatFKAtcjBVk8KtDxDJQwgQfjtEz6",
  "key22": "3dvvnHwh7NM7VPyciDGFVWDgm81AJNDBcmypotPxo2mGSsK3pxoZuitFZ2WP8hYrbjaUCXTs7s5g1ebRxL9D4RUC",
  "key23": "4UfSNyw5Cpugh8SRPBDUUMs4dgNAfvTmjfiEFMzsaNmiCJRuSqKkuYzRNTHZ6sbVLDVaKy3NY9RK7zJiRNeJ9hKG",
  "key24": "5VV8JsdJ5uxVfuriD1eE4uQLaWtEYayxayVsKMYJYMPqKfDJ6BwT4GB3WGFQRp7HrPuzQ8v3H2HbqvqWo5BFKEQ9"
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
