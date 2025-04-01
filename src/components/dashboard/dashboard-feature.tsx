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
    "4uUv9iL9dwh4fKuY31VoTGHnLTA9WGtDZXhNicww8znuDN5teytHEKY12jT18xBPFfdAfExhQUn6r7r6bNPakv7n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wsUzHJXKLVVDHT9Bt59N21ixmek5AWvvKiQEMd425ZWeo41zgWYMTeYFuBDSjcyruGUMyHJwerT59v6EYwxBdkU",
  "key1": "4ztbQFvvnF4KAnghCnLCZLLt6oy9k9htMpUEj2JUuNtd3HoXHQgvCCTwfy9H2DxUmtKKSCrBvB16u3dcA2ptFb9A",
  "key2": "5KjmiH5duTJ1swsTkvostMcLHQUYtuk1kwNYdnreVsArZXmAqjxPuDFvnuGHMpx8XdTgwtTDXTFRMRfPNPYExHjU",
  "key3": "5wCTjs2UvFvRkm6fg7TsRmiwfqjBMutrA9q4kH43TMWAUpL6tjuVnkUvmjJL7iRMhHZssL7xQCnrBVkGPfXJPSWZ",
  "key4": "B55KTG4YzzNNJKgncjqiXDU2m49HTpRXAGhUMMq9xks4z9vgp2iVuXEaxsBo5Xmmrzrq3qtBpk5C1jiY8z4BoiQ",
  "key5": "4Ji7a2E2BvwJ1g3PeGw2jefQuFiSJ1PQi5LwFmj8vDziFhCjN88z5aWpmv8a4cdLYj4M2bAazZdDjbFwaUWDrvEr",
  "key6": "2jyN8Tux88CTGiGmXY8aSXPhYwhmbTWwR4m5PnYy5fEhNZtGnao4wXMmd2ypw1XR2sYU8wPZYN6n8ET3hi6tVPKG",
  "key7": "5H9WBJmHgSYGZ6hsFT48YWnDxfqATQGjr9G6uPmeAtVTXTSpkLPKmgHiMvSUohtvH7XjpdVHauKB7Vj2Zvqj9PkX",
  "key8": "4vk8c5sDvRgBX1Wqz5Mnz8L827sqXRqNSmkX2aNAZVEj6TXFW9ev8KtUwu7W3gNDFGqq3TuqZT47KJcHX78HAaUP",
  "key9": "4RnWQaDiVspedL3cmkMY2b5kHeR1tScUB9dckTfrw1CKn6kjfryM2hRoimrKgeoDub2jkghFRcD7jEYG2yKGXShH",
  "key10": "3qcMeGC5NYgXHXwNMWejvwSSLzFXbWVX6AZhEP4ukW6nNkyx9sgTkJqCdmqkE9FV3NaknpvbzHQMUaBip3wezcaL",
  "key11": "3ZTr6mNwUCyANY72mYXzXiTSPHGttkSjJ5xDsjY58XppehCoDo5bD2d9N6TaRkBigjaT7moGaVHVAS6KXdoZmL26",
  "key12": "4eYfepfkKZURbcYwpkSf8kNjQYH94m3RRQzGuMLPc7CTcPw1XjFHTeaj9TyH3jHtGg4ufUPQAFXzJqiuux5Wa1FB",
  "key13": "42BPEfcjTwRxqHP2dkYm7PYTQEbfehT5XQEJtQ4L7pKKAX69GQQf7zFnFVwXgVfDFBTKSdovKQaWvEKUnk61Rvhj",
  "key14": "GQFRze1vBfhqQkNiXGDGcLZm2Uz5bWqUEP4HqdMr45rd25KeDDf2jYhBTB7gnnekV532Hjyv7w1KxN3f7NhpcaC",
  "key15": "4VW6DQqEKL9fZAVsd247mkX7z5AAdx8MNuAv5UYdrYq9Z5Vwe1gxLxKMui3st4HpgyrC8J9XVLhBpJ7asdnmJz1d",
  "key16": "5b3RSxtz4PqMLXKgijDPDgUXA9QKj5bg8tX8i4EX2fgbdizXSvhbFGZMdUE4ja68uf8M4vhfjkGujUK4od1kTs34",
  "key17": "3TghVS8CZeQMAQ19XJKGe2pPdpRAaoDFZy8C1x796wkgeaQa87fCTnKw6LeowmmG3xLwwQSA7LVdjeKuRGeyXEnS",
  "key18": "4h5aomVgRqYA1k9Npr7vupmjD6hNmJK9XkRSbZcprrQWqYoRk4Hqn2pbVbN6Qgzk1k43oBfgnvJmyyBvVyHkQKeA",
  "key19": "JYSVLmyKgBdCSbLegXSyRmyJ3DEcFNyjuNPNGhYxYUPHVXg5k3vXhcQsqhApKHjqJqSSpyZkSch1KciZbRFxtkD",
  "key20": "x8KShCCzUWWjErca6bcgjdLBJAHLsnY5SCeYW3aFbCVExMv7ZEcZSEJKaNk6xZzCDyCyU72Lqg1Yrp92AEW9edS",
  "key21": "4PYK4LLNyjmogbC2LcpBMmUqgGmU4QvpmX1p8YhtVTZGvnf3yg7hgxtE8bzYGPVPNBTnrnvDrUPyhDJq9Y78Q4Aa",
  "key22": "5StBn2LyeiB2YzwvVvuLyk9upZm5U7bTs7SWgGAYFnbnvi2fJFKMkWf2UfgxRsWo29yQ6GBvp4Krk9Vc5sZQpND6",
  "key23": "5QfTHenqxWCdWFuAjbCa8zmXiGhKfWW2UFumwQyEKiJbW9V1jxxDGG7CDz5NpcEVCWeGognVjq1Zu5Erd2ydEG1d",
  "key24": "3J9Ctsq8DfB3qiPFvJu6gpqJLHYd244BUuosuBnZAfTSos1Dt6on6wD53CBGB7eqeDUQKhJ2QdYyZg7zXYf29mrF",
  "key25": "4CLaNEtp8c8sK1upNz6bJnZwQpEeTobnqJ9cPMpphwjqggmrhjDWhaEbeM3XDZ3aBTBY2JCbVCjRRXZRKTtjZFh",
  "key26": "5xN84vnJrdpAbfJMAKGBnC4WXxHVHi5KHPy52A3muwFWLz6f83JmZPeGLzhabXKiTAp3JM75opQ4P5xzhBShJvc4",
  "key27": "4aKGMDPrp85vh3dTEqLkSGqz7M5GrbRzr27NjVB2buQu4stKo53PoaUNR5mtzmLAqBjHxfnfzXp732GMMCECaC1J",
  "key28": "3N7WFrCUV4xJmhASrTJYeDwBqjvRGFJNHehByhU9vh8E4sLMFHRTnvZZ76ZTTTjRvTT96n1abNy7yHsXP7roqQ6E",
  "key29": "5VpuQWdgKTJj3eD4xbxxmVAKNShneGp4nAH14nKX2yTNgYnn67Lu6zPe5p94TsLgvfwQwsnoWzZ3TB2ndy83dsMD",
  "key30": "2VQTVoLxXb4Ldfa16p9BzTMx3fkbtP9xdGtJvfarhxX2PvJVor6DvagH9vgcMkYbXSVmpFXPXDtCsjjR955F4egV",
  "key31": "2f5ZAeGWWvKUqKee5qbqWUyg3WxkUtL8vhMrpehvE8un7eQQKcPrEB2srvTxg6uSAcfsU4aqQU8PCKExAjcZ9Ji2",
  "key32": "5eUdVVnxqVPduXFrCdCBkxbGeHiEZnmHMmNZ6vEKR5UhjtyyDMA6afVDZK5f7QTQGHfnAFprsG5JahAHS6Qnx3aB",
  "key33": "5TKaPGCn2AY1b1xyBSJac4Lt33vArN8WsbvAXNzWPtiAXn7rn1KoGuSCFwRHdLqXEi6vQ7cn1Zob2L958MdZDgko",
  "key34": "2ZS6mShRwWsdfu2YzZEwgLykYRVFZ7DGFHMA6FCk3Zvd4D582EydBwZyWBNo3tykbWR3d4DoxYiHVnew8fXZfDnJ",
  "key35": "2jLDZHfA1rWjxGptJFu7K3kYoHxTZsjGcJzU5mnyzK5YVAU2wo3ttNx9d7uvAh5DsnxLP5dzpQuXAPdzurrUpAU1",
  "key36": "5rctZ1jFFRnysVoj3LtEWA5mimD8dbgAJdG2ykrGGg5QEyzq75cUgA7yK3aofYfcqXdq5hrrh2VCtL2uyKZ1oNY7",
  "key37": "2wa858KuXjdnwojGuKpAUHV2jUGunfQ6Ts7pfNhgzrqHUKt2Hh4YnRFj3j1nsYoheYqCXHV57qxhYJpuYLotfhjH",
  "key38": "4bTJof8sWpxGU7xGJqnFGvAqetmGXYHzKHrWSQuoLShWbS7S9kswNyTiF6edKMa2o4ZhUfSoBszW41NePAUNeP2r",
  "key39": "3iiCU26cb1wF3CVsuEMXYd3APnwpGfnPd4HikDTuQj4DRMmCb7LNh9D6Zd5K3Q68d5FwvHG5acKsr7UruwEfR5cm"
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
