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
    "PnAsWjaRwUpzkLJVuGCY2BCt4hjMey5Gs4W6Vt8jkvReiX3S6T8jCi7AyBNLhHCz35zFc5cqupp4yjKR6nWEeYm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pjxvf5J1Suc11MMhipfubpLr7is8AbJL8VZRsxYdbphyGHKq8euEmVuRBY4KCwewCm7zJj6troPMfy8hQLKFXxR",
  "key1": "5UarwrvacVTdYZ3fjMS89cqt8bt3bxvTniZXUsKXQ5MQbbWaPL7HMhi4QDsafjVRhrq3o5Kr26r8sASUzUQ5jHCL",
  "key2": "3FVd3ZdUDAP3EEHTu3HJXiWy8nBgigKQUzhCRmAqeXWMQB5Joakw5Ss7jzfom3KbCck67DyqZK3xwnNuVnoVAifQ",
  "key3": "4ugdEvpPZiJ5yenypv2VzYyf7v6CXoXJdnCmMjCb5poHYEmtJW6GQnAw7qf9GqdnAaCNyeLWWWHy1QUtTC1Mpge7",
  "key4": "2jLJhn2JNLMbMv8CpoYzq5KRRDtEaQSmfAkfVNdVrnVp3ZnvFqpTmmi7byCDgqc2bYTPK3GrXoipbpmT6HvSoy4w",
  "key5": "qi3nHyNq3Pkb86WFuT9iBXffdKMS2hRSsYvFwPcPEDpdvavffdtHDHUqgXwnfWxyHr9ndLkW1HJmVVxhRpXd2dQ",
  "key6": "5T5ibGVa2rg9CxSfGMbnrVdSHSeDpCLkWkFW2UrLFxeP9Wfaazc3yyEDHj1dojPxh5HHKCG7WHMGqJpQ9MnL5rwe",
  "key7": "2HYaVEeMXELiwVq6RAa3NntRmpGi8waj8kPsi5JCS4D3RLHbF94jZxPsZZHuJSCLcF54LpuoPR9y2B4T6Y3w853H",
  "key8": "3fD7SpGR6sSdDXx3SERQze8wx78zPgjteM374AnBvLPdqb5rY2B7bGhAZT4yGcLR1nx6FBzHNzD6u2nQB43ZZn6b",
  "key9": "2zecmE4i4WVwmn9xJgkhcmvQh7SGQgsoUvvLLpJE8hGfoCN5pqVrA6guib26gKLuWp8HBscf8m18w2ygrPPsdkym",
  "key10": "5VstKdqnfBUirNN7F78SvjrbEusNGhcbLcbnaB2UNR67ByPu6AZjRv9oQs6CGZD7jCjRifbVdYR7gr3wgac7DHm6",
  "key11": "3MEp2JBMtsKQWAnu7yspSZkmH2PS7NDxwqeqpdHpX85uWCAymHWB8t52PNXitzb4H6Uq9xbG17zYKXJp8Q9NTMkS",
  "key12": "5iEmPHiWRPkjr1TsPgZTFgSoQik1KNodmhfd9L6PULpnL8gGqiJzXTMMk9X2cX39r2V79ZcG8hbHZwEsm2QBQsBN",
  "key13": "5TypbFXPF4TGQAjPHYNv8oFixCNascp1PekUYAN9sRC7ReGr34JYafWs6RhptoPEQoCH4adsC4j5VHqReF2DRQ3o",
  "key14": "4rMT7SUFv3PPVLx35RHHaoURBkkbf1PasBgQuvwNdLTdrG2tg1UubKyAayjLRwToG6imdeg1qEYYqpTLCoNaervP",
  "key15": "5ysbt2QnZdwgK9jpbmEMxiwyL6bKSJ4d5qrCVsA92sdJ5tMxwu2UhX2zmbimZKwgY683hCRZVAFhtTep265JaJCN",
  "key16": "3M7JJgXQRhyEv7eoLxgaASMYkSLkWFboyeRfDcU92YcUTDmbQXMffHH1PpJhPAqBJyra3LSrfp5CuzusB8J9Zvz2",
  "key17": "4ahdhL7tcCKJBw34EW7HkVpF1meF5GamS9SsW2YLZzyUn3H6sekDyexAqFmLufk4P52CRWTq8pzbQyDXVK8jjmig",
  "key18": "4i8UBKQVsoZMruEecPCyAh9j6h6fSRQJ1dQjPkXFsRHC8eeeXtGShMCCHFH4CQaKHUkL5TM3uYYoXLg6oMkdYyZa",
  "key19": "3ArdA35mQdCaF9oMAMLDs4vZiW2tGrJ4iUTuqG5s9w4JfCnN6prwnyeo8XozWyWVnzHvMuEaSxRmm8HKzsFdnQUj",
  "key20": "5AyCDn2FEZVh6EDWL2dbjwDkyLcZ5GfeUhbF4y7NCMKZEPaeic9fkBpEceHPevC7abYgvCKqjhxeXZYdmjDPFScF",
  "key21": "22vTV8UU3ZocHJqhSCR2cRApkWFmCJoJ9ZK29QcBbrpFbb8vbprHprgXpwy9WgcFg9T5X6buUpgvyVFPd8S9HJEw",
  "key22": "4R7Bz3kUvjdiSditMjoQsctYQCATR7a3JHdRKKFa4tJF4RbFuff2L1MQjXhTVqkNfLvbVZkd6HVx6zedfJ7ZCkCE",
  "key23": "5J69sveMNd9GP8Vp1zAruK4vwq1jd6Nibqpg3F8n9fenBrne4apbsZiTY9SSChYWbptdTkaSr3o6u21gjU8puMY",
  "key24": "3cZrPzEDVmwm5v7Rxcz2E7YZtkobDitpqRweSPqrjPhCY1Be41hd24CBWJg88USFaA6CQ78JKMC4bhFHhnSB8gdN",
  "key25": "N8vmU2k6HJhCaZAkDYMa1u1KvLyyWtGpjAyC5Z9SCZpDotYYMQbHgkR7ZBJWspcFxAG4bGBZqbhfHMrQk31dJpp",
  "key26": "5y5JEFdGJpyHezxeqL3PrjfckDZW2idtfcNCBM17HNddWat5i9wXzUhuZ3LJhNkPJFjCPPRvsDsnjJdTQdYPN13o",
  "key27": "3aq1uuzZK3sVeBxdUzaZBkdMpJNKuFNNrCFK4WLJWiQXrgv5oc2FWG6hiU4zcZKW2S27DEsbHgJGDu2nfys3xUd6",
  "key28": "2jZpD4wTrgDmwK95iTGkx559s36jJ1PtphQnbgJGmtz9tUqe85pNvfJnRkp8KzePp5UEskuXt6ekXCRvFthZf4yW",
  "key29": "32wy1eURZjVHBnbFXJfJbgvurX4gLnXqpnA92PA1RKce697HzHG8Xz5ZUzpGyUjWpATPSMB55Z24rmCKPP2uN9tj",
  "key30": "2qi8TtsmJwzLjyyzRBzphWunBcCq7SSMngDP5SePdRMYaarg5ooamqd8FMKSYaVvKGd6GkVBU6S1dWGdXBhb7onU",
  "key31": "5fLNindB7DMs3tv1vNZzHBda4R72uKPwhsSwaujYY7nv7x1zS49gx4pbW2xZgjSbzjeekCWxXyPV6qexzRLmX5BV",
  "key32": "37gF6kv6WQ5iZGzWbVeNQeJh4Swx53qxrEp34SuZBQC9pcF4pNXv1XCBkcy7EmNi6UvoSRvJkNW28cTcoS5ztzA8",
  "key33": "2K3dp2ztAEuxKQYdBrQKo2KJxYcPNDpfQRcuSxhuBpf94bt42RhV8hSJ8gQ5gwZa2BFtphzZNqTW68siyJKraPyJ",
  "key34": "5YeqEZnE97ZLNhTH3MXfvb3MT4C3p3X25dnbWGKFSFjphhNyynEZJjJWDDFeQkasVz8qEJr7hALPb1bNyv72bDR8"
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
