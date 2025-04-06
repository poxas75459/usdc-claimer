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
    "k2JVXTTzAGoqpn27HoPgYerqxeiVUPfvL9YTcStVcvZnfNw14SLcaXh1F24RpUPJZ8ZDeV4cyBbVoCQSeAkvYLR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mkbdXnLuvrNFFqJ8wyePC8GdmkEyUsgvBwMNXiFmtKVbkK1xF2DdFMqvUSgtTtLBVN2FjgE4E4VypAUogMHDEQM",
  "key1": "5JBL4MbBAXerksG9xckjCuQumGMjyy4camVN4VVaQsELPteny3SdAPJMZzfu8vTARw6hwJ3MqyVgs7XTAPvvpKuw",
  "key2": "4wbDVfqGRuxmpdxaNEnfMQTsXs4sKXueihV8UXSCVhvPy5q6MSLbwBhb7zviJVTDA9aBwn46mqG3ztCjnK8mXSwe",
  "key3": "5YQnzipZ3HukCJWUmWtmeEaCDqenebxsGDoHcS6sJTJArNG5mn4vk4J4tjJgvVbQre8nk98vmr4d3CeVnJYHuniG",
  "key4": "22fmjYyxzHdsqxZ9tkCyMqnZKgrma2PxcJRez5y3H5wEnEAiUyhV87Sv1oTZNvDnfe4LpUc6KptXT4othweAyumv",
  "key5": "3k1DPCmAKFjvJSeqk9wnyesqrCnRckLqC93uYPsVfPUeTg7ht9nzRyQH3Z3wqJNVihMXecVDtttL7eaUJ8tn5Bns",
  "key6": "3Reybp7y2WzCAEBtSXdg6XyBnt3ykWcQy2gxkGpyGHVDn5Kiwm5jxfFrSA6uwQPkwFsnXtERbKcVQrTqBw8FZ72o",
  "key7": "2hjqpQkNUkq1b1MQuLHH1kWqmCH37S4jYoXFdaFonqwdbkeC3n4kVREbE4KchDLzfu9HxFxYMDn1FYYF3QmxVfVT",
  "key8": "5Hj9yW4ijwiDpvnchCWUD7bKrRUsDdQFcHcog2JndPokgM7YYUE9xVocqCnHNojxmKXjgdd6GNvyAouPBueSvWgW",
  "key9": "4vh39MvuEaNGEs5G7tpyFKUp8CX8HJFbEv4xYtNHZuUud9bC4U6h2HfUtGrp3K64fRKyPwkLaQb8PDNwkVPZQobf",
  "key10": "43nMRgoaxQK4PUGxJgthhjr5aCA4xFTzCTAZsSu6uBFfFW5aCoG8JmXkYU21u71UB2iEPoSNUBgCpZLRbeQP3awz",
  "key11": "3odt1mq2DaVifYKtxy1XCZr1Sv2M1L5K8FEcj5r1UbPYk9fTZybiEaZqSfgE8fDFNSitcmnsG5JGaiBJ4D687FiF",
  "key12": "2ARA7RQpfKGw9uids5h5euMHkz5hrkMoYhDJyRVQmuaQewGCpBAErE6GyEzoBbeeBeKjRJ2cpMw48C8qMfW4sawy",
  "key13": "2eFYjetKAtUZwWaGaGYtiovWPznWPz5mzV1qXrUzRpwB5gKv7hed5jt9U2oXh7Mdkx4BschbGDx7SuxqenXH1XAu",
  "key14": "39jfPrwK1yFg64K2pvzEvX9ubuJwusCpo5bY6A5SKg6gceukwp48KoffWEuNTp7G6ca5SA22jgH1mjTPRnLP2CwE",
  "key15": "34u48xWHS1DR8dtWWMGaVg48FWLS9tZ7e1USF3WA857fJMz3XqNEkoH5DacvVYSs7oMdysayoiPBQcCQQqVG1C44",
  "key16": "BVtgfKtPtysyGpvNEtztbMZks9c54uRnsNgpYVVAQztLLAtmBZrFrpetiVk2K3CtXkiif5uPp3cHzPyi4V5aNNe",
  "key17": "58Z2MRjQhqUVoFCK9Af8aqxyS1PZKb1ZT2VgWqYEyi1w1XiWapK9a5m9Bkr3rzrR1rTebY33amUTvsGBQfiesF8e",
  "key18": "36TTvpf58i7hQ9T9umf2ptJEeydY7H3AFfhG4k5eSj8MxggviaeKKz3TFRJjDuwtaFNvtFJefQoTM4fkoccekdY9",
  "key19": "2V4QL3eV6CJmsYbW2Y7tPoXyjUmbbQyG4idCtLz74PtpAuHkpQcJLtTMGd1qrpzs95QMkJEngJkBtZHwv8K7iAzM",
  "key20": "58kYrsUEgjqbSRFTNpv57phi2qUimT2u8BpSFwRsiQpyCur9KXqMC8b3uu3AGL3wmdxmTP3YWpvSWs9reuKX86Nq",
  "key21": "5JVFbyi36JTQLFqHcC5y7nFX6p2p822MpNXZMr5kjpEt3TE2wobfuozKdheupg6p9BtmpNTZn2SyNMaoM2QGWCEr",
  "key22": "43CHuJEFEo3LYFbC3xnEixjyLjQN84uigyYyaSNuMroqwVAR2eNq4w1oAd8cLkSvvQ9ZDvgHbuEfvdgWpN6DsxeJ",
  "key23": "ss731empeAL3vW4J4f2sW8WzGjoZhykeWEnpm7ZdnLou5Ron35jzhKKi5AdGifFCZq744UzfNk9RrKwd4ECaoqt",
  "key24": "3GB5pue7oQqZNsE9V9fujvmNyJjwEzKJ7VAaXBWBpKnbXPEyN6eR9Vq2SwJzn7ccuGjqSNamzB9rxZvFTTVLWaaF",
  "key25": "2QZ837Ngsy4TGjtSYrkgB1hMaU3PcKsSpZxYybYGrW4AoWGpx6a1CMroAhweARrkSBNSx8YqrjZKhqYWfoJZ5P5t",
  "key26": "32qKzucTYnecVzsbUAfkUcn8zz8dZ583VAhfFGEDi5gGTeoS3ut3gaQpyzVurpmENZtaZMVfqUqgwSCxSRRgPyzD",
  "key27": "5irX15LjhAjbyWAbqzfcp3fKWWxiU1hMzEyPjSZCBWVRvxetLVbhxXu9B2AJrJpauYMZ8Q2Nu7jSwUGAnJ3pSDv3",
  "key28": "2uYhx8fDt7XBfRgKmRBxaPYEHaSvNbLYGbSz4EVKPjuegqqQK6YKwLz562mFrvzvNxXKWAmBXwqRNfbQnztGeSg8",
  "key29": "2f5JAetQNRJn54isn4JMQEufw86heDF1jF8v7vme5mwtxevAcpgUCSgwbUSPz6tG4KGB3FvQ6EaYnzM9Ccdw3Kig",
  "key30": "9EGr15oAbxwMDnMT4WW2uC3Yoy5kgJ5pSbjMLG2ALZek1t9EkLDJcg16ac3ZB5bV87VDaizaTzKuTWNHVa1bgQN",
  "key31": "2yfFSy4KkaVa5YkqedXmzG1Gk2CUX5iNzNxLAXpgy6FEFyjwChfVrE91vyTgh3eWsxAVTCZVE7zqCXkEHdBnkRMY",
  "key32": "5mkEMDX76HwLNXwy68uUbAywLWTwqQp85uXD5CyLgXd26ZxyJQ2JzL18K8v7EhsMSwQF4tydvU4YrPPkBCRuGLC5",
  "key33": "2MikHNky7YWwUiVZbS6V1FPgmXUfAHNSVwSbFskHRAjnUGQ8f4Rj3cjpqjksFfwR3HGtE9F7urxePuiyh3x3qyWw",
  "key34": "3ZWhAM4RphuMGSYLLSJjgyLAik6CSeGcFzfkttQreDbAynf3EtMuces4sH6TQaTeyzcM5PRabfm5Pa9niAZtnrMh",
  "key35": "313VGzDvQFjwWcSBpRo13vkkppddswgpM7U4yAXdcYmdZe6ec34zSdz4QdqiL6VW3j6iH92LtQp3ZpgBsPZo6pUN",
  "key36": "46A8vkgL14cGuifqCPNUUGJjQREZV6gezoqbsHhZF4GTQX9ZTAKqizMr2nUEj4nFrKFyCgvQJHwYCsAnJ6P9q3Pb",
  "key37": "2YhX6rG6vgjZ1qfUyrpcA5UMQCG6YzecHRaRHHqVBi5BqRwrNYLqDTpa52Ee7mECNAwBxPqjQC7UpJhwbtCp5s91"
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
