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
    "UYVNDppmwNHprWnwNWp3wV959LS8zZ7khZE3bQCYjnTd447pmW2DZeiBYuxHXmDBQn95hZTSmzhaBmdrjevD4gp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vxbjF3NaAkW3yQUFdxcTCGspTk6fz4bYw93HszbNnBEUnNxLfHFyUkYGyHgmGFZnq4FaLnHxxsv6KYqpSDxXFdy",
  "key1": "4TVvGt7P1Mu1prUWgkbMGEhadGArgghpHXeBZjzBsTqcHRebtQi67NTv6b4oLzhuVNtks4xsC7kN4oNjLBAMHsmp",
  "key2": "5BUajHrCwgGuPZcCJKK7QMw5gpmq8rx9csxPEQbBrFPuGcc1QRC5Et4d1zmmRpc1q9hyepeHeQhYbLZucEVicU8R",
  "key3": "3QXsQwMPzTDsxRe8G2snhPZvCT2BRUajkwBFTfogtqedZzvN4UW1rphhHmaWTzK25dp1f5PMTZ58g1WKjVXZZrT4",
  "key4": "2adeVhVXHiUuAmqXSLHiNuFPf8FD899TMAcPcbBqDos3KGfcMJyPwA2up1NihQM1XiwJzt1NUeL6G6SMfDQGoRjh",
  "key5": "4cHUVG6NiUG5aDZF5Eeh3ZSkC19m88zsNvgCZix7Snm6TU3ztfFudsB1iTMjGcFLSLgTBp7iAHRzQjH6w42mh8EU",
  "key6": "5jfdufaMfdn4UajZQSGqrpAkwrJZFp19xiH6mYC1bpvguBro2NdgLESx1w6uhxwZf6oGsZxWi9uzupjt7mK1WXsQ",
  "key7": "2d85PEAj1RB2rqWVTAiSKY3RBDxRqUoaxJCRLxPLAhZvhiqkR8kZk6vR77Sya8Z6XVMmYopmwPFcAhtwDRyeEVDk",
  "key8": "5hP1JedGkDL5XTL8diN1ueecer8Zzmjfat5WWMbaENgjSP5oM7gPhKqYJeXaSRKjiEKntoYdcZdxm89Tefp22K28",
  "key9": "5twXieYij7hPSojqE7xq1N74YkmN2YAyffi17wDp3uRXLwGC4ZvKuk5HepBLLBSyakk256YT6iSgRoEeY9dUgWL5",
  "key10": "5CXpNvUovS8K6Emr8F5D5MiaSueY3EbQedp3pyXBQDJmJCWt6qdam8QkpwUoaTxUTpgd31BDJLPt79ikdMyNJqPP",
  "key11": "qQhLMYecgwrgSHcQY7fnPiKfx8GQuvwkdG1uvuuTdiUYKtrtPovmmqeJZh9Hqbpn5icMaUFFsrSLoZNNS8v6iVv",
  "key12": "4pb24goQHFLaSBiGW6NfStSNjx9DKhidbU4PLXCLc5mmJqhsQ6kFhk9AsMcVAFqe94dhYw1BWc6JXrbm78Kk71Bi",
  "key13": "HzE1vjBFQ2oVqk8iGXtcVNWg3qxYKtJwCkjSy32u8Pd6Tm7vgJexm2xLGn7qhbEGuNZb9VwnTmtn5Zyu4QKyQGJ",
  "key14": "2nQc7cL4nzcwvPpsrfR9cqV7NjzF2wtWij6pLuJFwX6SG8DkBF5wFAeeYsy976DhXPZziH6dGifT5hAGuZmyvxoz",
  "key15": "5FStTeTs3QtdnioLfhTxDzNNRHswheGg7fpa7rW1HFWmeZZfg33cnbBKhpdAj12S9mLUFfB95UCipLjXJAX8qb7b",
  "key16": "2R9L1T7r3tJFoNbfdUbKgepSjQ7RadZPu5vS5VMtMAjrivMZkT6hPN1p3bbZev6CcQwLGPRiR1mru62T4q2VXpvg",
  "key17": "4RyFMQC9LTTZys98AjPo1oCcFUdFeJY969vKc5zzLuNdM4XgbaFRjUthFLxmJN6Ly6KC28N76xkd68HLtjrazJ39",
  "key18": "5KTPY4viGhCquay96b9s18ePD5rBs6fjryWrV3ZUNT4mHup1dZSATBPHr1FJ3aiAcs3ENS7vZYHnQ6s51SUmTZts",
  "key19": "UEPBM1vaxn33DgFbzyYAm5Vm4DT5UJqLZuFKbaXye5Sj1NeqvzP9pBWUtgChn5idbyDk3jPPwPLcVwnQPaE4d8a",
  "key20": "3rMZRVaPDHx1yD9BoE8fU6cokbj3ntaDZeFc723Kix2GdPNb8eYekfWxnUCQyLN3KnwEaoSfAo7Gziog6JKGjQw2",
  "key21": "3RDUZnHt4WUrUzvv3qzEayTrDA1S9SZtJRT3q5DU5PfdT8d3NGtewRDDERJu73yKQ2YSqXcnXwNBBqekKkS9oZYQ",
  "key22": "3245NnFfgPoHkXfbQezpjwLZx2YZP1Zz6YiKV1wytohmjpdY2UUDyfD7TvDJ4fc7tH1TJ9t4PCyrw5AWzxxtC2uf",
  "key23": "3Zed21cwE2XivZRnP7GsswopY4KGmJDWP6Ea4XNaJ3xBByYfYHSc5dswepzbPXM929Em7YJ4Htpdd9Z5zBJ5erJP",
  "key24": "uTVZ6nLRcm8NFiW4rwTsqvnCbWdTytuZDVfZNGm1nvwEztH5LPeai8xSr27iwp1SgLYSz2qfBzXmmjvgKFuar1h",
  "key25": "221ontvPfppMcre7ConhDN3J1x9HUgsgwLm3UyTaMwSy2cRwXQAXgEGEBa5puSexfG898JvcMyMvWm2ZmUv7x64a"
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
