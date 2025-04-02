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
    "3VhLQEcPKNYqzC9EKU5WBEakXPddWfDjH4gSnNpmPxURAwmAF7nV3KPvAzmV5mBAqdfDG5EYwJAfiZiJTKAsoncc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uNGhKR5SjA2UpgbKkmv99SvDG3kp1TqzoTNwQXXMmwBBpsQAumnXbenh81KoFZ6ee1hNYzeN8fU4eb5PjcPpcWD",
  "key1": "3hzUB6SiAQA2XdC49bBjJvcM5uvqNZ7ngt4UvshjDppqm2tCoZoN1CxtZNMjKMyrzFKCuvao6SEUPHfwRrVXpREc",
  "key2": "5aXrZrqTpLH77BbvdeU9EVn9Jmep1hgsMxm8hycc8sKeqXgvW6yPB8LvQ2zF4B9exDtWneAvHJzx1KUSVRS8bFLr",
  "key3": "giUfWyq1akV183MJay1zbXHp1Lf9FRkiMSyPGxnJspRUCCycD3Bskurwcd9xVeN6G6ynXTtBy4rBK8TwMRqYtxC",
  "key4": "5BnRCWgV6QhQMbFkonQqcoz229tpxTKvV8H6GB8VmPTNuasGhMCMempCtuPdMuJ6pNk1vSo3Li4ygy83m924uqCF",
  "key5": "2ywgwo48qBz1X5mxFM1SAJ2kso6ofywnXDs4hzhxokVrQUBrc654kuijk9ETGR8Lbf2b3vRhgzeTek3bqnCAU228",
  "key6": "4zLFrfzSQLNF5GNwFNcmTFZJE2rqAnq4BiTh6mqMKptXXYzMEdRurkF2PG6tPpioCer2XcatBNeKQs2gb6dGGCYT",
  "key7": "21BnSgT8XcRpNftX9Pgrr83Nojojea9bauX3Km8iH7TMSqkFaUdGyBg5mXjsq2TuoC6W8VNv47rkmBCApCNnBZGA",
  "key8": "4SWePw1DTPpGuAUksm7q8MY1UnRBBCkHYySEMot1wPwF1jBiDrjzVH1QW6YqLGNxDy4Xa68nxfiG1juixDnk2n3W",
  "key9": "4ZDMTTLZ7MTctZh7X2dc6SjJ5nAdp1X7hApLzgwmMaazeAqLB6fXwRDoeA7tsNTQvsMnGjGUCQhfSVyfJ8YTpwHX",
  "key10": "41AT9vYfDGAhFFeRu5G8f9qFqQ9mJ8E4WUPE8R1CPsdr1YmQQcU95vzxqbk8EXYnkqR7v2ACCNa73KYuSpjLvB6c",
  "key11": "3bpE9c2cGMUriH6uV3VYrDtCfi5k6BBQzCWSfseVqWNRXLdBBy5wZ74BpxYJ1NktHuM52PHrq31kogzFeeNptp7",
  "key12": "2n9fdQMzM6bapkRaZgAm9uVtBLpRMFsYTChsgozuJ3yePqqstw7T2L1nqNHZtdWWjcdC3soPYSykks7aKhZ8JZ2a",
  "key13": "3NN5NA8vuu5xD1EGEazDmG96jorJgEgur4cDbmkZcgRJVQPT4KrCqkS6Q7pdMTkmZbfgFP183riQsd3VPdyQt3C9",
  "key14": "2QcEhBPJGtm22TMJDvLvqkY4KuNJfsSDBoUXYvPZw1yLCWg4MbaufVxNmoKpeWjzkxDAMSxB6ufAWPgXcKo32duK",
  "key15": "3gLfSh7WN7nTE5Sv437MYTcVG1EGPntx1qTnepaSWakQEgQ9wzHbQnrBh9PuutcfpJjkJSyDZGNbXdv3Sbwh1WDy",
  "key16": "355fXWUX2V9BEe9L9zCyPDUBmdRtAPwB1QAdSKFjww2ME157wumL6GYCzG9fd7aPtXVPJqT6sG6uA6rDyjZARjSR",
  "key17": "2krK2fX1BSYH1YAYwk9bzEr7eUT8WbutthMVGXWjTgQp3pQmZcouE9eBUDgmdiYvAHSWrgNyPN8xMYWtQGdMW9Qn",
  "key18": "5AB5WFL8MkApEPYDCGuuH86UTPfGPaHQdNkgkJkJhY2BD6bRPXNvCut81XUpYc2z8URkHxmjKN1JGgv2fWzXr8PJ",
  "key19": "35K3tRpw7EFXajaWttjAipK1b83faFs5LDCm1UF2Vf9Xmn1ifJE7Rn6rrdnV9mfKKgKwFYHverEQdbMAPgSSwFzP",
  "key20": "uH2ZZrDpA22cSgdat57kroymCZsDzNiyw8ztMpEpp1UenqP2sfieCR47Wyq2Z6XMijZTEew4CLEwnsRkFTye3iw",
  "key21": "3r68CHeYErQLawk1NpgXbwzsPWrPewYsM8bKUU1XL4chX6mzppR9E54BAa2a2Nz1VtUhvCtkrfmXSbKgEdD3ZSR3",
  "key22": "5uafu27BLN5fR2tViurffatN629XEMkq8k8CjAkxVNyaBEq2soMqePBmb6jZtcTZkMW1GNXTvJM7aY8Nos2crWdw",
  "key23": "4nicTYPR4Ybax6ZWD9dRd1GeG9EbgsmDadNQEJQQfFSMaqxATt4YtKwXrvUfAuGNQYrrewNuuTRFcPMfXWwGH2a3",
  "key24": "3ykQkmoMR3TwBTWZbPo4kshnzyJoe34X3n5QUP595Qup87o7LMG1HDy9ePfFNwVvTCnuCcbRdQMBZ4f5BeyJN8Go",
  "key25": "2j7nq78yo5emJbXmhehE9PSkHP78TYwENAGp44amcoqNDt6cVbUEmq2SfVSSPbUFkqEjY7DkLNpbvgQyS5CK4N4D",
  "key26": "4bX6Vxdh9cb3HCJjJRybEKhfkwacZGGFKwRdJswaH5i6L8v1JCZAjvUSAaK6qTUDLSa3yH68FPxsYto9sZKkP5Ey",
  "key27": "4MikXkRy4XQ5fBi15bucMfXiujyTYAwkiggLcrKa7sUVpaX3HmEDHN67VJarxSQbEWY94YbFaMhSagaBiNN4ks9H",
  "key28": "3Y1FRedMGYJbFfyyEj6HMM3UacDBiqHr2nQfMCnzadEhFCbywidoJrorLzfpUVQUmuRHudBwdrwwXg6PZzzVv6Yd"
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
