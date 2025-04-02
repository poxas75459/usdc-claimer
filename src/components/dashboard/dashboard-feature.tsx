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
    "4BHwgJMStbRd8UFpozDBREU8kbAFu36ubxazSXunwFu1cAzZ7BeYfcxgiGPc7SMnDFXvmUnMCjvYRXYGJeXWkyM3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zi5FG2RRUBwAuj1VrUJgVCynAVUjiQN2hgnYpAhdm4rkXyYWGjXPbHCxVuraPvCXq5vdd29ut3sJm8fDUG2zcyY",
  "key1": "3setd1ZBd2yVgyP5uveJ9dr7d34KuiiAG8ZBsMRh38fcKeiXgnXuhaKakA7zTVpaRrUYQwPy7donPRz6yNBkZEj3",
  "key2": "5UFX2mfALBp4HZeG9qGAVfp8u6EzK5xqjJEUBamPvVsJiwrohWuodVxRgmwGNLgTroUSuExBUCBsG7L9Zh7EfEyB",
  "key3": "4jmmfz2jbp5bTetB2PfF2QBEX3K5pwVceynwkAs18VWPSs1Mn6u737oZiUHSxeFwB9ubDmk467eH6kPoAdyrjFmY",
  "key4": "3ZtNqtXgmUCUqKvjtoSWk8HVn3oFHsMedzMa7nh85GV4UuygpcMfFPTzwVL5RFgnsX41CJd6vu34wvuCcYuZorQC",
  "key5": "2YHaBYEhY33HA4SHLKk6smk7nsLjTLGTGy6835TbNnMSnz1h3VHXrZZ8yS6bhwpiy5jA2yucGS84auzh65Rn7DNc",
  "key6": "2yNXsGCv47mcHDp5AzY3P1S5jeGozp3mt7jFWmRK5KbwyfPNdE6u5KwCXb3gR1Tg7n9zM3HMLJopDwbJBQewaucu",
  "key7": "52EdKPpbpbx47W2eDcCPwbjgEYPfsEMUzdj9P3y25vkm8aqeqx9LPxHtGCTVHVSroevsSBfCKmRNA937ZvT5HtcX",
  "key8": "2CpXCUmUs4M8qU6u6ygceEbVzvbkA2pMN57W7FfyMC22SBMkDgf1R8JYXnNzKM1ACBDTKk9cMH6AhTvKHkPEfTR7",
  "key9": "4VzAQAccGdLqzR1CEgkRb1hUExhWSfFpTTDThuCnULyzQokkzYrb5q9UTvsErXaC2sbNLqzfYDLxYLeGPUFyuMFM",
  "key10": "4FjmLpXs1uNJ47GHPgb43FmwapDRTPeq4XodPArUHuc5HVuwko8JyAPpPeMoFJuqwygcHRViNSWCwUihe6KXu14c",
  "key11": "33U4WTDk7MgNjEaELvB6zafMxgtUjGkQ7Vqm1DuY9Zk2ToNYu2Pfaa1gDMGRAKx1FoR8XAxV6TiRxMGeVSjMkqB5",
  "key12": "2KVfAz9AzXaJUy23KKYfABMKorK2F3m3ip9UjrgiUrepQsgFa9jXqxCZAdsrJkbK3XUcXCUNU6iapfcjqM3LLSMn",
  "key13": "dc89juAQKEKKhDvpJQkVPANPU9DxMdt4ttZRc4fJyq3ebs5nhmTuroTE3FzG1AqF9a8KQBo6dax2aE8FKtacvvF",
  "key14": "vnzciU3MKBGp6JaofHm5m6QZ58x3HHAkFVufNh1SAkVgYKd4SZeivMURRje2eAEah4FY5sZmAc9265JPU59ZXw3",
  "key15": "3tmTVeoYmSdKiNB4KDdNxoz3nwfWKaaFTUdBboLQ1dKwZfUQzrwF34ZEFrYnL6T26i8JXQK6bSKZunEXioQeBc9T",
  "key16": "389xZGzhmBmxXi8pnL8Z3joN99sAziBaEgE2kiH1PTwUYTC6v8BYY5dvyXjJE49QqkHFbpeXnSxQ6Wja5uDcZ7kW",
  "key17": "23jJvCYzf5Kv4TVVXutPtJaY81XPCg2z8KHKmrTZUkwBdYtuGBUTpAB47nEx945mhNXv1AP4TUPCfbg8UYkHNLoy",
  "key18": "2p26cQu2mNqad58nbo9EJGRnSVg3g4JjqTuEczMgprBLkMDxCfK8od967iDeLmdYMCAZ5HVyjVMNkRzoyN64Mpad",
  "key19": "zdG5SYnHVWw7GowuzpYuXashR5GM6iEEEzWHRJFU2ssVbQQp5fyqCd8PeBrynBmX1ckg2FZ9SswDsEtAb1a6DGM",
  "key20": "4J5ibhb84YgU6NptDfTAYiPTJ4naHYrGyUCi2X81eg59qT4AS6qB9p68DNVXvdjuDcYQ2Q98pqgWk5GXqm2gL9HM",
  "key21": "bNfaTaq6VXNcD8JtJUhTrnXqabYqM9MS9fonvRzVimUTDz5JuiSXPFjkqDcLPCT7tFTE9MWy1RHPQh4iBgntUmu",
  "key22": "YaEGDmRuQkfVPFrfvwffP5n6RquqqF7QBTdc7AZBBzz9PDn4WAbezssCQE1q24rvK5ZbVBhCJaiaT3rFywJ8Ah8",
  "key23": "h8aZTXxYwgFZvGHgVyNGgDwSwPDBtSV1TG4ycyF9x7j7cBVEFaqcM7UVowT9R6cdyH7Kp9mSykZmnouQqVnKmhX",
  "key24": "65cuGwDDoka1gypoHqGTAkDdQv1AW7f3r8DdSxkP7HKypjzwR3hfBXSRgCWZwC5MT1ab4sLLDc2hkKn1wa5oZvPZ",
  "key25": "4GwKvcqcWdiXUgnb42b1fMVNzKu6Ek5wWY9hVWvP8v8y9t9ph9PZd1SwP6pP4ugN4kHjUbGjHrEBp6WhofWMAoic",
  "key26": "5Peh6WthJ6NLxyrjkSicM3M8wgQTTFGbw5Y5QguufFRHtfPDSAcSpuA6SdKfDZ8RuL2WxxMwViR5duBG2kKH1Nua",
  "key27": "5eRFMR3FZLhAy6MWZr22J8WoDi1NUbVgg3NyoEiibK8bxAd9bad6L9Rk6rZNEjr4zGJegzZzzv5rXRwXvjJbdxo",
  "key28": "5UbgKjMtT6CsuFad17NZdRDbkEKVVFVEztVw32UGTGp7JY5z4x11qM9rjK4Cqkn8TVZL59Cubx8U3ZNCAzCyNBa3",
  "key29": "2HrDyXY6qmvv2PAprJj1o7qxbCNstFsM3YzNssUCvnxagxm68Znt6jUy8xHVk45JEktyejiBkdDF8u94CpzHcbx7",
  "key30": "5nWz38xELeFszimmETPCJsXW7eiosmHZ9s6D2Hhr95C7c8zAftNuwnYuVyL3WZeExVWS782Mejbkt8tZvVzZkmUs",
  "key31": "PdzNtdTX5etXfh427c4ujwcBAKefhUzmTCHD1FxzTeBvQ7B7UyLWTWuSdydGH3caEBTr5EPHwzmh1WKZSZ1rfUN",
  "key32": "5jJ4UQrWx4XmYHidUt4PuZcRuycANr13ZT29uHZoXQyRaRTs7tj9yCDbmRHBYWocXMEnHFmQTxVG4bUysqgWMRHy",
  "key33": "3RACoH7pnQeds7PjNjf4oxohbRxWLFs5p87Lnj4xaPGWdBUjpCzRLJDHQDu2W1upijbHF4BQerzTW2n8dLgG5Qsv",
  "key34": "vz7hiPgTd8PuFHAVBvfS7bqSRxhuwSfh7QMgqMwKiVjEfXuCPr35c7VyxWpajiVnHusCWbfF52yHRHGPfizhFTg",
  "key35": "3GsPL8PDoa1heHRwSoJ2TVJELC32AS1d3rneu8BUQRBJZ7GxisbGNg4rvkfcatPaghcpSvst5z83ZSDUCoCAgtxg",
  "key36": "5YfjHvf2YDLfZYstsmgimTxfvo4qUUHo8m191fiwdr1sd1NYs17dDt6dLUAgguMdjakf7QpFJU4xWcE3hpgAyxDf"
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
