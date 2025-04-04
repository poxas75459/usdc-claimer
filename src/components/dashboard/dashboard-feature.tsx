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
    "25c2Ads7P4RC1AA6Q9pkmkQBZEKjXuUjVrJZxPL6Yacxj3Y1PLXrUVWf9TSattNNQtqCHy6RbzJB52Ru2Tpb5YdL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e1kUDns66YAL3eSiDkQBfWnfVYZrXzSZTxp2sSUEssbbSzshQzCRrw7N4Tu6utZF7xvbSi1c6njK6PSCVrLi8eZ",
  "key1": "3NGy6VdET53RsMztuzuduNhiXVdMEz2p5VG2Asc1ERDoGHZ4JyXhB5npEvufFEmQVymbFGFPviivjCHsSq298k86",
  "key2": "3Pne4GGofVGdAu36w1TACoPEba2tvyFVy4NVCATGASDnL3zCj3WT62ujmYj6GHi69XZnZsemjGBdhYMAxkWTNs5q",
  "key3": "gC6xGtRdrU6hr1nT8gr4N1UPPBmZybr5mGcKgFYjghhJnAay9MqGfwRMYJXHxEkuXe2gTZz476avN2wyVZHVscx",
  "key4": "2ussMYz7RUgJhH7JzwNeuBZka19oiypBhSCng5HRrZDa58muAaiTzKdLMq2PU7Cma6w3AcR7z9soZtdWcjNvpTao",
  "key5": "5eQQddGUiQmWxCjZqEiC9f9FCBfvdFuMWYovKahRmFQq4jj8t4mWhVDh4QLenEH67N76qGt5rEcXTfKSmsQAxx3q",
  "key6": "2RD6d36JyGZ22yhKKHyMz1sThQn4NM8BGLahfwhAxcdX6sPrnUofJCcU1Tb2qgXHKvCJQiQapwZWbPHJA8WmmYpc",
  "key7": "3vK6mnHSNE1XzYVUrYP6rSFvAVHHJz4rPjW2GAF1FJHTZv8Xx5xZPV7iNqK6zP6U2XQiSNmw3q1bnfT8GBFdxjwz",
  "key8": "4y4i9wiMehxkYwyZ1dNJoZVCK5w2RujkXLYzninwNDb54JdFGi9hKUtff6bsZ7c6dmnp5QpmbPXLppQMavChj4gy",
  "key9": "3rXptFfxMP7WutQjeCgw6F7jrKd6BG2CEmJrLeFhiChwmpPGBkJpSd29JbMRWKe6rNrQZDVYQnfeDJk28vhJc6vr",
  "key10": "2xBZjGK5VBBcmcnfyDChLPTLqdM2UKcLxp57kDy8RTViZzf8xjrntE5Asu2LTiGfpMHJ52X2Jzce6rMV3X2MLzfB",
  "key11": "66NGeQBrZEuvayQKz8FCV4aeiX4jHAKSa8qyKWzyAA8sTr1bn3wczaedYD8BeaHAFBvjeB8xj8h17ouSaPSE71AB",
  "key12": "2bctLUgBySFBUqs1PTDkTHonV8NDTRLnAFqXsRXXTfFZ1c8uj8dqztAcgwr2Ng7PKEtunPqBPFt2npWB76ZvvnSz",
  "key13": "4cZX9KYk9UexWZHgAX1ym3UBJPwztRrsP4Q3FGeQqVest3DcuPSHkqFEQodLqHL8T3qswpNsjk49jecf5LqXeTGk",
  "key14": "4Ti9XbsXArXxDuF3TTS3bHaEJfqvhytjogs39F7npEyQ1XppungQKcZqHmfp2HrdLqDXHnSBG3cPr5N7bQf1cRMr",
  "key15": "S4WcRZrBtcQsysDVHwptpwK2m3sepqkvVTYCpSp6xqpVNUH8Zu6TRip5tV8a7gp4Z1nuFVcYZdMF2L4AfVgyY2Y",
  "key16": "2hEtoXuf7aN95bbVWmt2NnX71xwZZKgYtVUPSiwUM1tG93nnFnq5FPEyvspNNQUWqNpYVCXYD5xKUumQTqUVW4Rr",
  "key17": "5AyLSCJTC4D3UvDF4TokUkbWbRd8gju4PHcJ5roJAjN1efgrxPbgK2BEHhgXYuEt5UvcgKeGcFWfqVFYWL2Nwyki",
  "key18": "5cGrHRskp7U8TSxQSQg2HRAsqiWPZnKSou5qiK2YZ9UbCj9V8MoKEYHaHX7J6AospRJfwPFqEX4e8p1r1fLHyBjx",
  "key19": "3jikJi46dGdmhuTkJf98fe3sEj5fQadFzKYzaPAmSQ7nBpAaCdZ3tvnR6tiXkqwLiWbfZXNdmPrgHTML14YBa4Le",
  "key20": "5RkDD3ZdjoAygSChihQvxuzkwpsJjU9UB8EfwUrerZi8wYxCFxTCtNdQ3TyXPfeXUhcj8NrvXapR2FbrLdXowQBg",
  "key21": "4UeoFmCSWy42RyoXk3QnGJPGZuQF1NSnkwjYHx6ZRZhq1ttb5C6ZFE1BLDm3YZ2RBAN6NvkZqcvjRUc7ZfS9dyhR",
  "key22": "2uS76vGccPmMnYoKrkz2hSwTR6qeSdUNiLwcKfLC39boc3Rg3crji8ZcuuYto8RsqzC3Wz6nBDZqrzJiNLxaPcvh",
  "key23": "3wnMf6zaTDf4hFJsi33BKPZ34oS6uKVkagAjkDHHpJzwaSByAKPFiey4eM5zpuETaxMCNUfeyASpz45kqCPxkuAF",
  "key24": "4edpVedH1b2v19RMy15R398Nr2egeqBceKYwEvGecBPCSHPapo1Xck8QqsKiYxff4YLTyz7qPYuk1sjETHM6QSpP",
  "key25": "3dDgNJx7ETf94jicF3Q2tdnBXHvy1CLxLuPoTNziB1x6GgL3bqTR6JeEGRM7rFnN3prsgnF766xSDG7gNzr2EEaX",
  "key26": "4z2xhDRL7BSGuBpWi67Y9bf9BXWBFphuuLay1f11yUCdtdELk562jKZN7X67pwBwPW3fuAJpu3BRA7CabL6ARWoY"
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
