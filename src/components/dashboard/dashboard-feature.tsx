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
    "3naaE7Niczc4hAkz1pQyCMchUo63s8UWsGt9pcaycaLhFjJHNU2cpG3NJqWpSATQ1bw5MJgVa75ZUSU1WYFVcznW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rVbJP5q31UNK3KCUtNo8cx7jVKj6DCt914g9GvL4pCxg2FcJW6hwK6tHfBb4ggGgsWwBvn237zxAcffsK354vAe",
  "key1": "5ToxxcK7NeEpVPEueZACCNB41LDvBr4rtE8hxa63B5NpAddzpv8PRRVJYTbqi1dSfFzgXhcqaUt6pe7vmFPuXkfY",
  "key2": "2BnoSK46VBkD7gmVGAx8Swi3fKx7HmwQJFQ6bk2YkYAR2f2ca6mwztwCHnWso5mLqLqzTcDQ5x6SLfzMaPe5bdtv",
  "key3": "3s7PYPa5RsvuDjT4QLKqpbYjsHZ4usjeWEcFhxvHoNGsFxbccEHRJGpD7Lk2r7GkH8TJ1oLZ7bec9QMhFrjRvBtD",
  "key4": "guM9dLsTqAPiDmoPQBtSYPYQs2B5CbSXgwhQhGtvj3hh3LVvrbs69zF7J4Ln8de8G2fYhSjJQAXEYBMmFvj44p1",
  "key5": "3M4nWjL7McYfR9uioFWxgEXCiVM57YttwWnfyHXZrMy2dKG5dMxvcA1oiBW8HfvcegVicvXCRBXzwgEWg4Ah8LV3",
  "key6": "5FoBJBV9Hv5g1k4CK5KWntep33hYBptPfxuNvKBQnDZbWja1Ec3R6Z3KtodpxrFE9kHXzCfnEfaiZgMZ4JFJ6yGT",
  "key7": "32co3xaLVyJuXfm9Sph8NwHtVyUfSdL1xMu1TJfawY6aq1tP13zrWXyKKaqzHeshNGMZaGzk95tbD7FUzK16hygi",
  "key8": "3JPtZvg2bXM2KUxR9DHtJBTcB5n1W34Dx7yQ7vDMvVkmgJi9bRctPcEsNuA64ocymK7dbB6SyjwFYNbwg5ZDUDvr",
  "key9": "5yoagB7w3iBuze8EU71AmgLDneeK4f33QE8w3ntQJUf97cbbYpL5vFHjUChzs5pzgi9w8ghcYmQF6eSg9DaVXGvF",
  "key10": "XatsHSc2sxkz3oWH9LHdAp6sjjB9agMFNq84Uo1QLyBT2416iLxYexrYtDw5jLiR3CsPfQB27EsjTeWxpm4GciH",
  "key11": "2bBc7uMVJEjCPMQdaSwXqYy5xj5RpposySiUr9RT1DQvbEA4yr4eug3L8K1748p9wsWaGJSuk5iJ9sbYtApZwtrV",
  "key12": "4XZ23udK1yVMw8KwrswarWwqvZP6wDRePjSBppt8WcAH8wMbRdJa9vfkxWvt5ooNdiwf6Ws2PcmyZQswDK9VwKZW",
  "key13": "5gC6LaGmFSjvR3JDCirVdQcwxg71dJ8p84d7CJc9mcj66xjEcPaC9Vz9BBowRe11PBMzbY55xNsWwpFQJDtBxteL",
  "key14": "2ZnF9FW5Txv25cTZjDzGTidXCq9QhiCEeGCvarVacDkT76ZmhTmpymetvYLQpmSMyoXr7vHrdjnWfYSiCAgwiaMg",
  "key15": "2YGREEzM47fHz2FEk3rP4tWy4dSDZhHD9o5QXoxXoDYuPktsSPcoY5mYqFeLWW2SsPd1LDWsShxZMELjTAyVmvD",
  "key16": "5N6UNh3x4H2wo8XySs3VPDycRvY4iL2UCeDZFSKFWPPGJTBmT8qnxSec6ewcopdRBBdxQxX1WRUMNtuNgneJGKDn",
  "key17": "5a9Cd8CCfNbW1Xe5Sp1YTjxF8Hmb9EiPYbjDQ4hyxsN38ZHQ6T6yh5mfXwa9sNzPJtYJGirLPvSiHwWfGgyLsXL9",
  "key18": "4cRzGTu7bPvBrpLuL3gvxxvcB9MLCzMyiPCKwiwYoE6tMFTkre9URNYYVSJz76XtQ8nEmRo6DjEQHaUbJnkYca6F",
  "key19": "9tiTfDjFyDusrofHvqocakG56cm654EYooFjkVuD64rZK9CcQDkWLToL429X7axgXNPoyz67cK6eProknuxKrbL",
  "key20": "g62rPECU1eJssHYrZLj9xtpeNk5T14QRLLjGsgTxWPCP5nGtUGaQvXNhzz7TSCC4BinxLny9Lvgpwf7zVfCGeL5",
  "key21": "5r3z4aiLj33FJpMJfjajbuH8yrFaL4q8vjYK2RSSBhVLipkLKKm9FR29vz8BbWvUUr1uJG352LnR4gUzRD8KxM73",
  "key22": "46pvk6opszHSYSbgWcqVQSBBQx4UNFGJPoE2LwJq3i2kwaFuXbgFVxYCB4jVcB3vuWrPSMCrKaRczcaYFF7iDWCL",
  "key23": "4YdFjCJw2FbG7oUtPcKrCq9awzeoNXNfiRyYETdDsNsug4jTQEEcpgbiVaoYkzjDmPSGpyc4av3wVysGqQQqamHc",
  "key24": "2hALLm25zviazPPcj6KLXPzMGXWfTohpEEfhRymDX6vYTWYxRU2S5TbQvRvhDzGJbBpEQd4V2XX91hmnvKVLXSBf",
  "key25": "2DMwdHYoZj5gwkn4JJ1HTYfwkbrDEaB1afwd7sAeNv8Rzq4NfJtDJkfbFGnAR2adpwMokuB9DGcc7FAV8EpEHgT5"
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
