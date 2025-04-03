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
    "5KBYhiAb5yxBEVYjcRKzhUHg2UDeMi7a1P9xLUU7DS5GGPyV7B4jBfsaBpN3U9Ts2WyMgzxJJVwRtmqGLKahLR3o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cYrMT7E7LDAL42EDN7k8q7Ek9hK99b3YkvaqtmJPbq2xTdSQ47Nam8R8kcHQEy5cf4WScDxNvc2i5DgMEtE9ybZ",
  "key1": "3aDt8FhCBVFWo9hEzomRGHbuULh8sSFu1jtcFtGzChwSVmNcXyaMYhv5YSPAmkix87EbNCC6okRKSuC7zHiS2hP9",
  "key2": "46X72Lc9uZceykHqx2CDuZ3SUhb5nGDCoEBdQ9w3ZSYJq1KBpkwWuKDBCiLGqpM7i1dFAMiaioYgmC3UCAoShZjH",
  "key3": "55KS2gPtVt7tCBeEdLmp13TT4CxDuGF1twhuQ8QUdcqsN8QhqpZK5pjxAQEjVahmY3VrLxfLRGEozkiCNHBGfPUW",
  "key4": "23S4bLhXPjTQMzhpsB3n2mH2EZ5DSdUpaoqyCYTAxHEb6YMnLAUTEj1bD4xo81Qyd3DCaWnyq4KjhW3Hb6w9D1Xu",
  "key5": "3eLGPk4btC9VeMV4ha3teL6doeuTkuG8Kh32ANw3sgofRa454w59xwfvCzoNPSZpfroFh5z4esk1Xuga3mxVVMF3",
  "key6": "Ek1awd5wKMVbwYLxa6WCUsR751ANpSpXRVRqRTiTMMKyKyY61rEZNwGZ7EDSXChXHRwbnUXNSkLetppzaSZvyuS",
  "key7": "3syTW5S4bayKRkjhoYL2jnV2QuiqKUVw5pMMeHzDQ9QocusybmFDtaeby1FdqsqC7vHWDBcrVwVDzaENNCSdXJf1",
  "key8": "5tQcf1WBYzYuDuLRYNTBQm45DSUrUxrYmiY6eyo7chz3kpkuzPemw1mLjT6Mdu8VzLhqsMNEa4Ch52WB8e2rxahu",
  "key9": "7AdNYshbsQqBNM4wjF73E9Ddx2mQeqsh5v2pBi8XX6vFjQcRrhFGG39ux6XcPxEvnX3y5is9Tsy4nENxRiFsGud",
  "key10": "jCT3CAbeH1hbh1EoQFLzVdww8akKrVdCvZxzRuQNecTpZUiM4FxGmHWXGSQDoYERog3GG5ar35FUg2n67Sk4n1D",
  "key11": "35g7rZ9HSGAo7NAYjPwN2uA4R2fLTebY9nWszntuiu5qcTTa71dscsf5sxfD2rFCreDnnmE8EWLDxpVFLmYURwEM",
  "key12": "26apMRQqgfB8zRHTfNEe1Eze58hCCWViZbnhX2EXnUMQZezMJfMHn8LpaZoawPZNBC9XaesW2Qb1ySck2L4g6DHk",
  "key13": "3o6zLHhn1ik5MgMQizZWF58jgDRjAFHx24gHzqK8NJpeMyaZqwegi4xNbDWDC91VvtrresgoWUU3XXPBR6dRVY8M",
  "key14": "NAGK4UUdFqKXpavzErtcmNC64uQ2AM1RZLhsp8KCFZKy6sejrhiLKURJqMMmmWCSHWFJDL25aMZN5JH9aFnDW4j",
  "key15": "2KkJ29Bp8NZGJM4rhhQaJEdMF7PLk6FCMtbTN4ZSwYcLxj73fxjW1ENjTnVyHXoiKoaaTyYdqtodcXVhLcECVNTG",
  "key16": "3qGPYuuupnUzBwcH8RXkcSUCdWucYuwmpp5Uj1wByHg9r7GFwhstEieyX5uRYbd8Pgk9uYCHwGEGabVBv577LK85",
  "key17": "3dgypfzM9NVdr14eVBhEWM86jJckfLHeiMk7WNjDfS2HnQqikVnfd98k3QsfqxCqjw3kshGhhb7HAnCH9KPff1Lf",
  "key18": "5DtAoQEqsW1ARapTCrR1SWhEdApXa7rbDE1AREvx6mKnDDxNnmZV8mTpkL7zHgvhexgcAdV9968FkgsQ5fmZeTsJ",
  "key19": "5fkyVUK1KtvLHkvwun5cMUj5WrDbD5WkmLA3VUxcpSeHgs9wtHabNqWWQLUBYmTkULSFgyyJGZAXBtgTjN9LK9rf",
  "key20": "24MqoRoATEi2vvwHUHWQgs2qzWM49EsDPCneduLpEvZVvsHFRfzf9TN8joDg6bfLHgiiDoFwQnzqBjbXRo7uvJ7s",
  "key21": "PhCHCdDkMdAJ8jxWQNoX7GsPTswV4GtakMK729X3LohpSSnRPDHc5mYJk1rmoV8EVaYmDZvsicuNfGYRzMraykw",
  "key22": "3NDGpC9kzgu8LTNXaSZ7krp9UJpMBxSJaWNQDJuANjobabjCcyYHqd13HZUnLRkfL21Utc4FVUKfY46gw97HtQ9H",
  "key23": "5zw2WDGMxrBzjiWXCozU1Fn2FAk7dA57NFiYCXrRaW76i9ErVmVzLx18WKdjV4oM8z3ptmiiAW4JX4hzaTmPBkaZ",
  "key24": "5BwCMdmttASPAmDjP9CpyG4eY1QcBPUaCCLBAL6V7sND3zqpBcQ6eMYjXP9j8oLRnmfQNi8xF7ZWrvipMuirvP5U",
  "key25": "3QdTtw54cJ7NYepoZs4VoXav9YfJze4wZMBHWzC9QtR48HnZQ18R14DHD5EBhuvwmdjoPBaa4s8xPexzDBjEP42Q",
  "key26": "2cDUDRpusHp26GUK8DuPZyoL8vswRmrxXD3P6QKL8v7sEe8L2jhs7Saurz2MnUbDB8KZ5NzrGVJTYxvyueKgrAuB",
  "key27": "5ZVdofXjH3CWk5QsRP4WkxBoJ5QJ7Fbu2Aj8NQ1WABcbWmsbDq6qzawPnaoEamJJuKdrYpyBVyAChNVxyNyX6WU3",
  "key28": "3uYv5L4mK9MrmXD5i9EusjgJ5KxGrwSsJZ4QCrZuH8Ruz3ZS6T6UbNmM8jeNxXrRQdxkJ1LCob5XMonWdzjedfJ7",
  "key29": "2UYe8hKKyE8r3JaVyYSeMdPVwvmL3rmG194cHX8YeLv39zmjm16nXK8ifbwM5CE8GUjq2v4G3TAgE1DrYjfYiwum",
  "key30": "3utN3mUzBtbeXkFsFrU7MMbnJp5aR4aaKB5HGzKHkKmDpJiTWTQ2XNbrACHidjrTCeVK6CLqjyUK2HRLRVTzfbVF",
  "key31": "3Ezv4Y5Jn4XvoK5TkLrz1BuMc5PqzMzFuamqDgZx3knxHoHfBzSZLdMMqETnu3oUmbbx65CBcYfmGMT91jrKr7Fv",
  "key32": "3dBJXm4EEdDPGZdYW2yd7HnaGwA7xvpuF79MYMM3E6wmAntRJA4PZME4RYvbxZBCLPJXezPV76VyXiXGsSAfKoFf",
  "key33": "4tX9CmnwRXEiDxa97yMVdZULuRVKtrbrcH6KMCKbHc3N1CP5JuMzokZ54tmhjqzQQTo6cSToYC5KhxTrpkP9vVcJ",
  "key34": "4q2MxnfWzxF1B87LSWQNSYVFczm2DBo1hgzqCZDHDVheMGvtEPuYXHhrLvzCKr3aEAHQgbFCk93YySQvd6D4KjsG",
  "key35": "52GNnapMdcXSevHvu5THPXFJpVB44QXHpn4oFRT9iasNuLJuysLkPG4YsRMojttT6LTtL2Sc92E1XpGK4kNgAdpT",
  "key36": "4o3vw4ST7TMtz6HWYN9M7L4bTyotAV77GdscikoxoRFSEJi1dRsKzYZhWbqRGSfZYM8aQBk64Hz7TEXmKetUZeKT",
  "key37": "rseczWHVSq6Y9UqctrYUSAfRjprN43RBFmP1s9Yt41irxvtLpPagxvfKiUupWi5H2oUpBrqh3gDLX9re6Sb4d3V"
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
