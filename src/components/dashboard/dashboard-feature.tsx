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
    "3iWz8oMoi9Vsw4r9ZMGrMr3T4p4sj4dVrD7Rn9mS1wq5pqYGy8qopnx4QSZVKF1NQfZgSGZLzQJaHPPt2F9kDLHb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23xg955NyAn5wuVWH6yXTJdzqyKpZ6mKA3AU9QwJ6jMvRzUGUH53BoeJwSYqfeDZd6BGZUSYdLTH2hFNetpeSbbF",
  "key1": "2r8rF1dQ1qgCDjg8aSGs5CVRtTi66Hg3GVBivYZFhAHJTNoG8AHoj9U9oYPaZvQynMKTKeCCwSX15sFcdLhDPk11",
  "key2": "3JCD3u1iKbeHrDeMJyrAL3Goiz9WR57k4HfQNhRCDdXbG2nUEFyz9pT5ZruS3Q3JketJABjXDtDLD6fHTdXMQUiJ",
  "key3": "3iCvkoAL51miVzRgf99KPNoXtAhg2cmBguoRVx7vLknocRUUATymniNsvVXp2qkqP5EYLFUiG9xuyepc2GLb6yfb",
  "key4": "5NEbT9jGxcZ3TeZLL6ZCHTbVaJss3j77Ji4apN5ScqrsEMtJvQWrxHUqFqPFBEai5j3C6QgS5jHJgaqjmtqqigeV",
  "key5": "5PsgoUYe9hRWp69pLefPvRofeCrq2hgZwoA1mStNYfcQ3tTK5LNrMevVNJHnaoWaSCkLC6xZA9T9c8yWaHeAv7Ap",
  "key6": "3sCv1ptdoybBnDbBMmJqJFanDp3qWUu5rAebEvpGvAS1jaDrMmYqz7D9SEevW7e7XPLMnKqR1Tw86H1N4sLDepQ1",
  "key7": "5rURKHYu5wJdzTKiVCJ4f1GiMVg36y8KemXVcYEGz5rfxuVVMGVB6LsouXsuKVWEmTXC7PH59JsPRM3QFYGtrtMi",
  "key8": "bTNpmDR8wo1Kfd1yZEoPEmjYdaU2wQuv5VkphCnmcYD42o55QGdQK4iBcXvax73N8fi9HoGDLpam65uyYNedeb4",
  "key9": "2atmgkuBJz4HMKysiJgwUVJ5LDxhYTvepPTT7yUhTRvtuFeVfTPsmuB216Vu8crxR59GB953eMpMXBfmzAoP6XxL",
  "key10": "4ZkNTjSvW1ShEu9gpvGfmbVWeZa9xvX5TY1ENbc635WW6oQy4LJeNDzYD9RMwbEyu2ryLqvXRr9pnx1KeJTsy6xt",
  "key11": "41cTFLk6KHrAUy8jXTfqgZjyA7JUBHvwy1zh7jwK1c26hojD3jm4NzoogEQuUgehyXp7yuCcBRVNsEwpuxtui9W4",
  "key12": "6qiFS6pJyfmcQ6MNa9FRyHQKpLkbsSQK3CkMPLQdqfWkDi3y78vDnRgcRzWiAjDX1CJLLXSBYCwhdzmysTwcy4h",
  "key13": "3CnCqgPABqQ3naHtACP6QxSgwr1Q1Kic6REWCH7pnSWTPdvmwZQoWm7bNdhH3wrq3ZVXG9rDs7tYginB9K9WhSYJ",
  "key14": "671i4J7ehPksaZhji9ZW6sgzRFPKgyUL4zSjjxgkNRYt6dGovYEUMPxJRDowEHJk38WuF4ktiBVfb4WG6Uona6mm",
  "key15": "Qa9N9Ftwu7FGUjRYVKwM7dtQBVWWeDUsmactiVwR9WpwmgFwkCgtcXRq1JYdannhczVbYKjswjDqL2nJN4TsccB",
  "key16": "3LnHjk6eAYsyQUXxK5b2wLtKLDPDWkfzHQdCUxaGDuEHpowDs1e78cEH5HxMUYcLx4wZcHfoZs9BjAURyfLAreY9",
  "key17": "595G1G9oE8VXbJigj6nknnzsfKeCNwVz4xRVxFmcvG332oszEGaB25rkqgkUi7qNn9FEGsFCyGBnQ5XjgfYPDpwh",
  "key18": "5w1DHmZcFwEwegzr3qszmtveRrti2ru6V5VAc1JGsC67PxmPEu6ptnijGJyRuYVYk9eQZoGfc5Ezhz5g9UoShvKB",
  "key19": "2V4PoHDnKVr9YmcWadxAscaVB8uYypWLYV8VqDFYciH9xA3viH1uJYxxCADSQLiHz3osNmdVgGN5LD71jwnCXVpm",
  "key20": "5Zc8mjnXExx2yB3QUx5aJyPE4bq9HdLYHG8XDji58n3U4S8RDSKGxy6kLpFTmEzP2vHx7knWCAFDKTiimhKLrtz6",
  "key21": "2Sw2wxqhojZDx9eQYcyuThbTQ425Z9HRxeSXJUXyHTvJkVaT4itMCuMP31vT37eZgNQZV3xvZFiCPVSAVuhNsvAD",
  "key22": "JoRDDDpZjtRkP2NJi47psBN6RMRVxJ2UpSnQR26g4jE1mHDJh4ddvc8suRJzaw77gyyVpBAfs954Cr2k6gbvP1h",
  "key23": "WeA7R7pSxs8Mv49k2BKCXx4vF8DaNk3demSkKfJjBpHu6WrirGPmVFxAPmTtb7qdGtPtmgoFrN9Sw1j8aSkJEzX",
  "key24": "4RXDJXSJoWQ5gEfh77RNEajjrvvzWE8mb5qtaws8zyrXFYvV8hqSEg7nL6R5XYJpNmqZtMdwjLyytdmsBMgnrnRu",
  "key25": "3th63P2jfpaZAeJFQVnFyCsm4s5EjxKjQWBih79gSj5vcmZRNfyTkboZ38Mh7VGGvXErAgw3PvRie5RuR1MM8szD",
  "key26": "3U18Gps44nxvuQBVFGH9SvaXAKjqGK7wsnFDQ6D2GX8jvi3YrSXcm9cAT9AFdt6pGZQacDRys8PuBjWCLr1Nmz9t",
  "key27": "2xZbm5DRXecGfPxwwWVqrhYxjmcyXscgFQW6moskAuC4M4Hott3vhMLiaoHrSLu7igM2pDSf7CP4HbSMBfnuf9pD",
  "key28": "3wH2hnts9Bj6WDAarVnm8r4tTR71AhxqwZNMNiqoQYexuxonptdLhnNjiWpd7Wg21EgmLCfbmQDSNnkVmsBYXpH",
  "key29": "TXzk8nguNXFd4Cx3VCCYNJ6oC7GySyd7NTP1CQQGQdPwQQMp2zuNwShWPwVDYXg8aK3HKc5Cu2RvSCZTwLoDQu6",
  "key30": "3VxvyHzU1seENTUWkycBX4AH34QsxEzUgxK5uFuRNw5LT4DfaZqSbFjHjvBPkyZLXQvaYNz4HeMEvvHNETtsCjSj",
  "key31": "34oja7SnVK9qp7fRRECzpvBkvTgRTzoUKVeG7FbSmoVj4bMzZRjj88m6sHr3Gah8LGJfiDhcy5LsEdrTnPq7nbVz",
  "key32": "5zTk77mhujU8k6Ev3E5rxjP7vhfUxeJaBqSwRcjoJCAEq3PaPRpsGcBRB6ZRv9yd64rUu7GjcZduhnHWBMoBrJXn",
  "key33": "2SUinw7G3ya5p6BrcGofN9hh8ghuXLxWTy8MCsmbvTsSxxyWRYL6XQkLkXuJMd2UqiHG8qxCK3nKoUpBpkLQ1rbD",
  "key34": "2SnpPD8WmdFuzqdhnzAbrwcqcYdyx9YiL9TE1JPUsYmJvJTiUZr1zZFfAwJBXTUPijD9zPbdw4nCubWRBrEhsXds",
  "key35": "3ZRSFUQh3msRyiVy4xRaqm4a6rEznpENmtXq9WY57Stv7MCB6y3y2pW5caGwL6wsMktddLbhncq7p4B29tY6xEkf",
  "key36": "hXYQuYxfybP7DJSN8TNoWfQVb1CzV1LQzZwCCfxAQWNNuSY7HBo4G5AiXDgG6DEQhFSJ1Vqv6mJnbn6DZMPhxw8",
  "key37": "3L2DPwxocfWB58vEX1PPsS1YAucpNcFbbBCzYVVhcQ5adCJYvD6XApj9b1Bs8uUgSExvfPDtFYZSwuGiChAY6b7D",
  "key38": "4MCScWUfspcJG2dQmqKpnfjUbgg5xokEwC1W96KiNqECAFvgHDkcf83xDsvvfK9vWkr27DEEuLxzbaXQqDzv7km2"
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
