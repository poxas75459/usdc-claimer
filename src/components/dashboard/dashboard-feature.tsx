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
    "42agLBqp3cAafj7JmG3nPad5kf3rBcJFjfFJmLSTFyfd1Xku3PfYZEb2PjGXpuwpJHQ1Xg4ryvsWU5Ko6DQDezzp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hXyV8tUg4dpoFtwMXv31EvAFWrEW7eEXTt7AtBkxcWrUaRLMWZEwXSNMS7En4chcATvWh31pWcFLvKMaxFzB3EH",
  "key1": "4tufqdKShzmxTz9maN6XC5XjMuMCVuBh13vrRmmepMq2fckfUkekwfyeJBD5trESc3vd5ZN3E5gsXGmzMoXaUdR9",
  "key2": "3NVb8GqpxNZD3nx6LkfVEXMr1eceDE99cZohtHjsan6s8skHaTMvzoE2k2KZceTuh5EBkKWYPRvaShXawY4XBkEa",
  "key3": "47pS1orB69geWNmZpGkzeLYzmx447BSM7ugZiuB88kTeRe1ZX11aYfHYgDFc2XVcjpncSVyodN3ooW7CYDa6Dv7g",
  "key4": "5s5FFEV7ge8rzQXJg3JDPENYcJK3jurPnaTK8QjqAzQF1UYtTp9AVyvXhgnQE3beF26eEM5zM3i5yE4n1JfzgkfM",
  "key5": "5ZPDGM3rkcgLc5SYMkuZub6E6Nf5fitU4k45nTirF4YqidRC8NyWvvsGpk2kG1VyyVdawk3A3FBizSRuVmRh5ZkD",
  "key6": "2xTHEe5dTVLQxrcpycge7akDruNYiTMVQWmKuGfXTFvTwUH7uVH9TK52hjoJaJtLpkr8XZUcfTbmtg2s3czDRCwg",
  "key7": "5k7mr6jR9LMD5T8tsjb6pfoWXUS7B7uimTrWopxYUU43Lu2P7uWjJgp1gLyrFc7kyUg4bMGxEHm6sq8DUfCQUvyy",
  "key8": "253jBHbYnnKPpzxQ32J6GMESufQ3GwhiCFJb4V8HgC8qcrYSCi4KMkUfJPnZzeLw6frt38oWCadmZpNU9rtRqtWn",
  "key9": "2QqEcUC2GyJCvKvMytWoMuiqi8fMgaVSM1PtCmFW2y66gKuZML7LZipXjtCwgDyg44bt7fBYtPFNr1A8FjSeyqSr",
  "key10": "2dtMYq8ApHx1o4TKfPtQ8Xh9gGWbvEKv7PBSfRVGoR1TkkM21KCb8Xhm1R8W2AhXHPxSiDfbeBC4wNjWs62Mk48q",
  "key11": "2nHiTStU5ewccwj6pfVMUKQKXDvHsjatPm2wh3aNG49v6AVsNc185HfXSt763NvTf4iMsoSpM7EBTC4uqek8yfLu",
  "key12": "43xeUd2P1dog1rQA9WPKEcGFepVmjfBhveXgT9Wc98RsKcrQFsKnR4U2pJG5hRTm9pa342fwCWbp3okXiUD9mVMr",
  "key13": "3rMkEScGasU7DzU6BiX2gBxu2rxe6cxW7hjx56Wh7SurnepV5b25jqRP2Jv5L77wBmjr8ByVPQ7Wwj9Rjs13epW3",
  "key14": "hnRsqk7EkVqevnZYPorhAYu6gZwdYrrdFXLn2AUryZeUh7UZ8ZFHvY6Ju9dyMjqDBceUc3Joui4GY4srktfi5nE",
  "key15": "4EY9bUbqJThcVaHsr8FWGTCrXbcMUFuiVkocG7h27qzLQB714P7194PmaBfQYzfUF62vfu4rSF6j2XqSHupwzws9",
  "key16": "vrEd6W5vJjCfLDB4g7g2ZNU86iNcpNnYdqspN7hUgmzyC6U4U5136FEasHG59NUuEJVGrXZmNpp7sFa3GiwyCxT",
  "key17": "5XQ1LpbZybJUKVWT3FKvrCtQpo3TYY8vSgwMk7RoXf1N2MkrZt4c3vB1bK6NmTPN3uGEdVVQEf6QF1VfGdo7q95h",
  "key18": "3Ytn9ZUU4cPxd7hBh91bbcMNZaajir69w2kP3RwfYNYWgFGuhBeRa9V1aWpy1V1MUvj1JhsYN69bse7sv2KYNwUi",
  "key19": "2jtjdwsqZVLdoo9nck5ZjBjzuT7NcATXnZMs5kFHe7BqU9wNiizYnaUssSKbFd8Zqj8MnP715uuNSnpv3iWUMKKb",
  "key20": "54zJSjSXdvAPwmUtL9W3yS7J3uBjGv5oWEDa7qiGdRJxctMgApAUXGTuyphTT1BA93xsiG9LtWE98eUFd5UYJ4Pv",
  "key21": "28Nr6EZRgn7Qft8wnoe4fgbpqjX2NTgK2Vv7swSwh6Jcnx1X3uqdNkRfmdiCUzTGA3Fyd59zCbFVoojBVvM1tP6s",
  "key22": "36TsBaD4yZFNHTWdabgM9ATWKbjNJKk7oDSNcxETxFQ4MzT48wLqb7QzH8tNCiXAqg5x76cKTEdj5v7Sp87U41So",
  "key23": "3984ZJqTThpirmBCUndAha1DtdcDpwzuY3jJBK6n8D54p21WHxubbY3EXZ99WuL5JYFnQrapCR5GuqjYw84xugmY",
  "key24": "46292XzWd7DyHE6xitrXiW4HzFEZovj97ez5rZFCVL8V7L26pQbtLrZYkhoHuoZXrHGchw4yJyeyndgP9GZt72gH",
  "key25": "3dwoVCW4Nq5RoEqF63jKBY3j3wc9LhXDJRsXhtnDSfPd9amw8ajUZ98hcUMpsaAbZ6mvGNoxr1fRm5EufnYA1Mg5",
  "key26": "4wjiwBGKAUskFCk9E6eBYcAqnJPZHeetc4aAySZwT3dGnBxqXrtaW5x1Ycxh5RCYkohBivnYvpE1ewvdmZNw4JgG",
  "key27": "2YRADv25ff1bWwiDDFcqKjFK2RN8mkbvb92trXvwjPQPRquNGEvCGzXqUTNAyc3ZHGR7BArSz4pEw3hGcMRHajNg",
  "key28": "DWSnb3ZwMfe8kexy9YogYWK4AeiDLH5FihtLTGM83s11R2vkwMuZziFurnCnnnPBU4tvP6FsNznfXaooLTGtbwm",
  "key29": "2sLYet9u14EN98M9JQriPBbSFNrJDU5eLBkfL3DrF1HM7S9gxPaw1npvFFEkBWpnK7LC9Y4Bu4yfUAyo33RA2QkB",
  "key30": "5ZUgZz8aSwRTgKhmFxFiJTWEzJJiRaqaEw9ttuyfyPkY54ZcLX547VsEyqhSCe2X8kvBZcuDHydcQDz1Lq6o3GBa",
  "key31": "56qxYHGonpEWh1UdiFXmPefWNkerkYWp5B6FWKRyiMXvVaJiwZHEAaCz7t3XqrpFyPZvSLJ6BfVD7AGWxkEM6ZnJ",
  "key32": "2NYBLByYptFq7Dnuyq2xiw48br9utfP3rPnXbrWVZPxaBQPyTeZfozutpbFKxVAuZXNcoM2ikx7nQYqqeSWxbVKS",
  "key33": "4yma71Ffd1BuB7iRFRoigWFMBTLdZc2hPzQP26YVg3nQAuDwaWXiKm8oqeEKkExXPmhYySh39pSwv9o4jwWwZzBC",
  "key34": "4xJc6kEhaGgeZT5p8mzgL33wPxrpptqwMVbUaGGBGiP8insLEwi8tJWHohF6pfFwj5xj7MQZANUdeMVFPxaYviRg",
  "key35": "61PzS662fhJ2Y6nx4qqDyDWsyY4Jrp1U5QXpL86kVNfMcPvBVW2o4w6R7w7ATcpZ7jh9xb6CkioFGKyPuB8wSqBa",
  "key36": "asC1sXTsnvKrgfhs7wFb7o68tFYQ1kv4oPbYoj5fteLF7vYjvrZC2z6WpSSnYbXWht9vF6pnL38sdxcWetHQ1hz",
  "key37": "5Aie7pkY2TW16NoVh4QGa3g7xMmFPF5wf5vU5SjTdfF45qh8HkiDYvmkBoEr86E2DFChoVy6udbfcmyzjw7Ef6g4",
  "key38": "gqgMRnVcihx1hqomjLBzNnBnvyxLYAqUFxwgnEwUAqUc9otjSPBcmaLJgWuuN2QEMrJzhcNJ87fd5tzX2PRHJ7o",
  "key39": "55c4FvjXEGtKUQVCXWwhmfV9sujiLaoUx4QKG6sMwD9E7YyYYe1xfQeTfmUWgdhX9TaysYjRFdoP7edH1VMBmvgR",
  "key40": "5rvxv55CrFhpAffJao8BQCu7ZTy1p2Dsv46q2cwww9AyXW2F2jmJSP36BqsSLBvpYuZQ6BiknHowRBkHCqzjVejA"
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
