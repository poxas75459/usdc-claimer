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
    "3xeLmjZxvAC323CA9KqC7mqV462dk2rJcmD6pDWxmWY638AAgQfCYDtkFvhT4bgFAYyUhF1Sd81iTi5yDe4rRNRM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G8BXg4XaBH2JuVww6cp7ov86FprwbLGh8JL859irzg4MzFunw4ay8n2kiwApU3SoagoUPAvMtsrRe3nC2aJAWNg",
  "key1": "8VYASXXCqrhqHGhBKtSePnpW53DiTeouS44Gg2FSrYY5PaCeVjXgD1PuWTqkYitE8xoEnWy75wB6Kc4vyYQY8An",
  "key2": "2vQ2PachSXUsmyFJm2d5CGHGfXTX4GxLkwBzp6RCVbpL5nUiij8Map4o1yL3TsJxrV4RqxhR76zZUDUTwP4uzqiv",
  "key3": "5QxmwMPaUE3iaM8wZXcToBHa27YGqDM1gVFe3Rb8xyafoAacndQM5wYLtgD3XyiMeqPkbrMhRsVZwHTi2BQfFhaA",
  "key4": "4PsUpsnHv61Z9R6MEzzNgrjGVhe8woi4UhQ7PkV9BnRMDjRMTAFEx1gPP4EKzyi3zq2gQG13i3QzRhRhSfqePzjh",
  "key5": "5apZtK7pNwZGFKWPvoLeYDfnZt4qpEmHDHc5jT6GGYAY2o48QmgGJhaeA4p5e4HBbT8BYDpDhFvUkgr3ZuN5VRym",
  "key6": "2GNqoHNERVg9ZucJEjf9ZZNroKbaZtX5iQDpjQPZHvjnFZvcT1PzKKkzc6HCE5xs3bYuuKyb9jBeu2roNmsUNGq9",
  "key7": "2MPXaQYQnoRPZfwYQXrwwePetvcRivHDuQJWK9xLBxZngchmXYLpRUbQwgzyYAC1TXsDwj6AGNrU9iQgMchwpa1r",
  "key8": "3rTNJzPgWzewRZTFjVNE9VZU6MBXSEtBWmeQ1wmNhgJ35bpMVfCqkx6nUPVSMN8ojyBhUFtF7vKmEwzeTRDatRoJ",
  "key9": "5P26GH59GE9iedGrChjN1JWFJydhCY6bnYr1dyQV6CF5iWLAQhwx1hFjwXggq54d1Y5WtAoqWRkJUzoJD4VybEbZ",
  "key10": "53nYaTmSACnvtctPZieZfHbMKB7gPysDkryjrTH2pU45jmCgebnnBvWAXE3oDv6SYGVh1iBEQieDUYobvYhRUCWD",
  "key11": "Zciifsf5a1YmBxBFGWJ9izB2aHPEMvfGxSeUK1kNqpg8kTVVjysCYjj7EGrJ9QcRk1am35Au1iPYCNfiazzLZbb",
  "key12": "nS1iKKs4n1EMRjeFuiZAKRXyg3pEQi98ZnD85WhtkqEF4ykSnonxquJYCcJH6BV3UoV74n5jVPTEuT1BNESUTPb",
  "key13": "agiLsxZce4ppV5tKHE3WBFEyZsk8JmGQaNwZwPR8xnz85w1ke8sDqAjRcgxBY6knREyQcMqCG9fgLtHkTroUJUL",
  "key14": "3rf3fTQPsvtuTwtgbpzpQRzmHd2KWpbzcRoKdEaf3nzPoH7zVac4V3T4cKvFN8DzpeP9QN5V4GrjGx1CjJnept7K",
  "key15": "3QbAtsaYpqoBEitV7H3wDyFXWFiAyuCYa82L1o5qLEXCAcHM7gWNacZHNuiXMpvsHszBe68GrALsnwzk7papYva1",
  "key16": "yVJ4BBf1T8AT4C3m4WeHeTnTaiptDCxyXXbkahjdK7bD7M5VxaQW9FYh4K4QUEwfn511HyT7qk7mHkZLejXTHZC",
  "key17": "PynXRr6QSyf1dJ8qzkWMVurGPCoP23bxHchLAEcD2n9SaK2QDVb4umth5wvS5xSiPexoD5uYYEMQGNs3tTAKGmj",
  "key18": "2L35NpqVAk4ZuJDBj454a2kxXsHzFufhWU8VCKoswHqLMgzLxxUJy5ifyh1ZSzXTBDhASJLaxK3UPjQm3wNc5HdS",
  "key19": "3kspPw2vfRNVqx31vAyVBVqUcAjD5t45kaw73ofvoWyuwjpvB59uRfooe61e3qdZzM1d89yNWzYvTzU9WWGepZWA",
  "key20": "55Pymun4XisHENUDk3hcyfSD1zmcA19yeXVDP3MeTiVi57kYs8M2Kb4RfdBckjsyJTyNdk82HatoyYjF4kmwMZ4v",
  "key21": "4AWH7wQKdoBDfLf3MoLh8sTsqQnSXWGHynhEDC8ihYtLYMDFbRegbniyULQcbgx293BSATVXsX25KqKLu3jx6nj6",
  "key22": "5SNU8LksZB7BwB5WC6CA6xxpTz38H3hAvn67jRUfCYPBUSyfn1TL4HzSaHn8btoSpJkEiQoGKVP4HmotFxYXuJW",
  "key23": "4YmY9NSYVqiRGb5S4i7EagoRKYzJNsdxaUMaoA5Q8hEBsWkiiNrCTTm4mAnGmrd6T2HbXeXAv9YZnrAcvVfBAJ67",
  "key24": "5bZ1DCutZ4W5evFZADUJ7xnjfWzmF6eCi3XuCNrbqNSWdksrZz96HgcfJsPqhbcAuStmfCSwpd3n71kA2zt2QvKx",
  "key25": "67o14qB4ixJyeoHnVorVqLC31dsUaNmd8caWJP6JQTCGikAJerWHEqWXX3jmVJW2ABTfickLN61rxqh43DdYgmyT",
  "key26": "2PBSyH9X1ddnymsNBGz1MZ3iLE9au6kfTCcXrTJLY4aZ56kKsdCwRcQtScuL9ecte75ZzGUH23ccHdjL3ghxgKiZ",
  "key27": "4t8RFM5yEnEjBnz8isXZbKcaH3wFFBBWCq63yUGU8YPEJEcuXQAtPbGA15ErDBeZoNSyGKAyvCZyEbzZYGr7izA2",
  "key28": "4oKQJc5wGQBji131rXM5RX6m3y3Cs6J6hkr8AotEkZnQDFYvEJTETBDL9mdeoiWzrQXp5UcJwLUb5gugALTxm5uW",
  "key29": "FxnYKQUDjTgGGXwsSptqrxAZY3W6zbnuYALLi1JAEF25VhHnXq4nXSt54CLYKe6WSVDQh5NTamFZ57wf5gKbAGa",
  "key30": "5AQemDDd2L836sRboPfsemJnbD8WNgp2u4ZEdxXTcuvqpH77QKT6Q1WGxZ3YdWQB6t8isx86cn9KEnss8Cosuv3f",
  "key31": "318EvKG2KZcM9htsTE6iSnuUmKbdjLB9Yge1DELvGLWKgQFf29H4DGwrDuMdyyMDW75NuYNwbkn78Pp4kwVeWdL1",
  "key32": "4zNP58CE2A6MgLbfx3tSTr37q5DMA4nvA3EfGuq6AjYk5g8oRk3Dqe2s9j3ej8xyNKTddpxjqr7Dm2bLZMJuMDoU",
  "key33": "2JDux9dT6vQeY65WwQuoabQ97d9yLEeXinvcmc2nTVDAUuvFccqTePgJD1xTir5benPz4hUMJMB3Fckp6181xzb7",
  "key34": "5wKXmaCeHhFCPY4wM5qVNwYzRd784YdZAsdPKgN5G5q9sLnCeesUtjPuZ84oszi4Vj9hwSSVhRWFU1Zu6kSfgkZJ",
  "key35": "5D2yCMcLBLwvnUusoVDQp1qNhBuDGDvNhpYLmBkYqoqmQ8mFsgF3NAA5qDzYdA1mR7rFXBhaqNsGn59ELSDT7cQ1",
  "key36": "Dw3dSXHwrgwDUNMn3hyedqJyYAqDErZDgN6m8dBPHaAzVYq7DzFJXZ7cmvLyrPQGQxHJjhTPmruTfqJnXLAcpgU",
  "key37": "3zEYwmuLbc5mcSyzhWwax4JwPKgj3xjrWRMSJwfD7dXoGq6H7F4QN5jqVZCxsA4WfXsD8yuyZ4X2pkKFjuGvXFLC",
  "key38": "FZWcc5GEMDtYqMknZjWWkymvsi27MSVKBwUNnAR4bDsiF85z8U8DqERMVJHuVZ2yyWZFKDw4cvvPDSXTtRd5x6h",
  "key39": "3zbeaTRcUkWQaUukPEZhL27bj69JMaxDSbeoPuFYmXiJrnEWBdXWogkBWZrY9RwVMRLA4DoCUisjkiT8xLj69PYH",
  "key40": "2vrkzUw5PTsJdQyYACKmFPb3AERVQkW9wgUE68ETnx2X1ERhavBrobXtSmrUNR25wofAUsUTtxxFSXK6oeFCkY1M",
  "key41": "5vSyvpZMBD513gAngt262XNmbj4TdaQR7pAoiqAfQSGuwDhwcjk9pJyYaHBbzKozYGFn18KiYkyJLtXnoj8uCk5C",
  "key42": "3XGFAEgXNxdYNNsCckFD9U8VGrnsDZvnyVb6uk1PYP8ZByR5RFoXs9myhzNpszMruh2AVdV5zz38APtV2w7yzDkJ",
  "key43": "5cgbHsNjpM7ViCSfQZ8VCgCQrNV9evNC2zKv8YSmzbQawS4Bs2MB921GnNjideDpYjBBHMGS2zLNcDTQWEHcX7WF",
  "key44": "3DR4y5ZCnx165rx1FNWrhnKhdMqn8jjR9xTnfhiherKuzVtEQUWWF7aUfRFX2ibAzwz4DwtAbkkxTWHNvqB3kAun",
  "key45": "QUsxdYgGTNerMiDNHF4mnojBCQHFx13rrU2Xo4dmHMrNBUMQY1gBDDYmdYojXGLyRau2N95LPV1oKxMMWn82CiH",
  "key46": "5JtHAWg69dmjzK3q9qNuoRr8S2YZ9HQB448Bx1TNqrdFYnyX5DLFP4aSNVRx4xBDLWmX5pK5hpXECWoumiWPkjJF",
  "key47": "21UzXDjBvVfUY1H5obmvPLwgQJ9XpVeqb5UwqeHJafsYqKiSipBuNh5rK6gE7rrnhiJXrju7TPY1G9CiyiDmsMdH"
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
