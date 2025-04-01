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
    "2ZsuAjv3CFPSZYApixjxNPwykqeWQ29dnmvg9WPFJoX6xyr4m64JAn7CRVcta4yoFCnwwtpLq1aWw3L6eDQ8Jaj3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6kYhZWS37WbptYGCQGowLapK2jYwDH4uSCmx9ZRB28eXXfVLgbxBRrrYh6HG1JenSYhZ91oX3geBApJC8qnVjVh",
  "key1": "4jRtxUCiBtwoP2UuNT4DmLqhYn6ofq1QnFkds5x6tqT1hqw32qUx5EtTBchHEadmZwCH1HWivgXdXKmWmC4RwpBG",
  "key2": "2TBUKmZunKjjGyBLsPrTzV3tZo2jmudN9uqePcF5jy4sFuGAbMiuLBLobaLCnxvKmeezgipq9GvbSAVBipU75r9C",
  "key3": "2myQroJqmi4bpyWQaCYudM19fEQAeFLjGYx6qzyZtLM8gN7zvr5PEiHduw5QThAqNMZD9exohXGtB834HxGWi3Z2",
  "key4": "4ShAysiHbTetXr4kJi2jxG5N4bZkQ1o1VjE4exc2oQcep9Vffo6SrAfBWZfejPyJHBbTphbhSiK7Cr2GUjiUhZQU",
  "key5": "2DnuiYPgqQHagJeywdRcMdJd6RjXTYdQJLoT7J7ewunVETempwQog9udKrc7xeMwuGtwkUuksioWWuTptmKJTsdj",
  "key6": "51H72sM5iZUWZhbJReGtYFFUFRzsR14jcxNmQRRMNnnUx1LMh7jNzfBVv2Rw2Dsiew3i5Rrq4xwukC82ToDT5Q6e",
  "key7": "34GBdTgKsdaSe3LEJTzgoy3MfAvdu8RTuBjmjiDB3GXcqxg2NVkfb5jZckfSRpAXPvq9NXMxzj2L1Mn5DJSMbqCY",
  "key8": "EBr27SmLmsMD3H7LyJfBvKh1PLqNYpqCoYTtrfaUqmYYdD4NHojCRuzXySxF1Tyi8cyg4WoDH5GWJsq5z6sBFM6",
  "key9": "5K5bkowZAjobZDvagCKLywTZTvnawJwUXFC2dcSqRm6CvLNVfdyNhiz9i6AiyMgutahpxfbMkuM86Ti2EizEh4HM",
  "key10": "3wcUsgCpHKykBUtdDwuz1cArt7Az39tT5EkjeFwiD6hmdLVgSyU697SSGErLRY7fHzJoAvKmjViAZ7TztfTY5GdK",
  "key11": "QQZovthYTAW4dcoDbTGBAkVd9gYZTFqXm863KsaHEk1jAeEwN6B83ntDEyGdqqeukk8TePf4jnhgLQK75hyLePM",
  "key12": "4U2DRSnD21S6EM1RNoxqgvU1GiFVEUEdKbUYV5s8gsK9GeTmzt9kfEWxzYRfnAc3qnoBemfde4Ex9sQnKiFAMYto",
  "key13": "5WWkkPuYFDgdsnpuToPhFAtranWYkSWFeXgcWaJyhJYSzgywTvMTAZVSwj9gNrmyru1QR1E7VzjnkNReJxS5jvmQ",
  "key14": "2ujXHTXB6uYB4fKurJbthGFgsKiNMbmiThftMeHFSr9MzzJHkHQniXiyK2cv1kBvCBJebvJSykWMsPaNcij7rVJ2",
  "key15": "4s6bcoWkR5S9jJku3VE9qHzg7GU1dwh651tqhNsoUmFVzy5VPf1s4jb2q8xy4sUn6D4tfYi2Notkpe7Tsnt5STEe",
  "key16": "4HUFRksyRPiKt1sWLH39zBdcGE7QWKhd7VwYjzfs4WHt2fQk2kY5yVgCaj17wW26MpdYfoZdxDYFgQb6m66wCGG9",
  "key17": "2mnUF7zYfJspQBMcgQ4osAcYVko9bKEzvwhqsLQ1N9XdzD4VMnjtb2AYfSoNWrxXsJccpvTAzc3spgjUzLMSxBp1",
  "key18": "fHXAho4NgJvvuq6No3iMrFFveT4xK7xFDkNjXxhm6c5veHtx1e8YUBP7j4TGXqFA2ByuTW1zbM8Vst2FrxvajWp",
  "key19": "36zjNcSDyzSqhQdDUD55zFaDWsGbffns8LotN9TBSU8UJA9hUXKeM29ofzsoY5LeHqDh4YLghHset2TSc1QSCwzf",
  "key20": "5GcTz2ZdxfFAEbBYNWtJJD96wUUCq4wzr4jBrdJEUPuBRTFQoxRdcjx2pKDN63UfkzQBpKZTSRaGdifN9ixwa8QJ",
  "key21": "29JRMyaqc1KrwcPBxNbhqXdbekFJBo2RVwiGJti8F2BwoTVYemGeSMssbxmB1AYieJQrgNcXEA2S5VirLnJEmrSs",
  "key22": "x3kTttyGbeqevzhjztCYxDrWSC3nURNQw48XZ3v9FmCuPjfxQ1LTLhkqnqy2GmWb6WeriNzDRQ3dm5DLfzJqKGo",
  "key23": "3NnG1ub3rRHvCsajS4K6HSG6DmUwCG8zEQByoq56qo1JdpVmmQAL8PXr6CAM41mV5fyvYu2KEKCsVLyZeXwh8eFS",
  "key24": "23fhJAwLEKGPXP97G6JZyCBMR3nzR8vX95kG2YrqN1wrgqxaWHgHQhAHy748xEwwrFaVvVzvk7jKnYHG38tfqTGj",
  "key25": "5X6vvuazR4sNMCBiXDJsQMDJwq91anBLJT5Z7XdqMpU3JtLTUfs1BqjWsZQYp2cvvw4h1n8eB8imNYsAKF3g4pYk",
  "key26": "3WRDfeTVmqVENWvjhjWa8HtK7FpgBSwFifD52VVeoek4QZV9mNCgswXee9strkbbjtFACASNZ6BXxEocnadWj648",
  "key27": "5PSSEWt28eBw47SD5NhctZ7zxq9C7JPvrFt5yMQfAaxBhxow2XHR7pZdF2EWCEjhGkVVBQgduS4EWZfoYycYeR4C",
  "key28": "5vW5ptb97LP48b7YwvnoXEqwsqkMdEAzoWR4sEPpV3xU4MeHhEnjSp6XgdAtUpTn84TcLWC7hZwP3iUT8SbGoncf"
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
