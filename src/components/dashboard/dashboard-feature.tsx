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
    "4LprMDkxwdVWbihNrjA1Cms4LYnoikB6dhzC8XJv9VY7ySS6nxjFG1KRBx6EpFUyaUu6YZdGMycWqDWAYjGQmyRs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fJ6nvwvX42FXQf9VxgUeeN2j9y53Baf9BpcSEXcKXyx8Gc7Ee5HxxxUUvfU5kbHC3ZqdtsbqeLXVzB5BQCzmzBE",
  "key1": "2r9Eqg5JeAQJmDrNttYUVi4pnjzygWqtNPrLPQUUup3SpEo1CgkK7djRyjMEnMWmVgYHZh7F8cRBuK6y82Z2c2EU",
  "key2": "2B3hvExRg1LA4vq9U9ioQUuwtragQsAV9a9TpkH8ZTCN9dudFSorgYChq66mMEb5QyFKFQXZhgpsFkvuhoEyAK7J",
  "key3": "WGrcECaYkW6upUgsWmsqmWDH3LLguHN11WFX4VfzFEDkjqoQZ42jZS5DdsWQEWCRZ2qjmtXudesJkFTU5kUDwnq",
  "key4": "4GE3nJva7UJLGHFvWzopJJdzppfeQj1dpLvuo3Hw9nt4MBCxoNFcBFAiTZN6g7dWEBehhZacnQ7LoHE32BZ4SFRz",
  "key5": "544dHv3bjq2kczFSycpoDX3431zbESfF3aBgMSNQ2eDeEAKWg8dWdLE5fQr8XJTLLCwPiKEyy5U1ceCHgPN7AAN7",
  "key6": "3yaS5FFQgk4zdCBqz5ctz6G4BKEurrVee9mkZiDBx5Kvi9CWqdNkoH7TMgCMZ9BKDYU61NisiML5MruEL1T4Gdjf",
  "key7": "eZDUUcc21nFELPnYESWtiQYtcXr7SNsZU3raMGyF86sqPpVtir3aaGix8WzVpMb3i6e41kM38tV4R4ybK8d7ugT",
  "key8": "3UcLhzx2nfYNtiF9g9WDR6YPixFbxpBYXZ82toVxywmCapN4cwXv7T8uDgZgZfmaAL6qxFH72tTbTNz25ozaAX8r",
  "key9": "4Gpgk3PWKXj2Dvz2rsy97mRE8LCUysjgX5NAAomZ1SQMkqDYKd7aqGnZMeWSTHipZwZCZwVWGJFG5HMMZ6fzZcwD",
  "key10": "349CUctK8V8ZsQrfZEsAmfsUwg8pLD7wMQ6WZR7Lh8donZgPLzfwhMgdRLhUwstP8o4vPRjh5V3Hxc9jdX9RAgHg",
  "key11": "2MZhZC3n7y4aWtpteTrajsmmZXUQwMSHUVmFnLWqDUSbgFGauh2fu5eURw8GgGCetrLx41MyM1rX2Q28TAWjSWAj",
  "key12": "4YJPA3RB9oF3YxJUAYgt8PYuTrmaRQ6Yny55d97pthbqtUtfiyVr2L7hJaPP7V3CEzBvovdK8FPmqzZtZYVRRxzG",
  "key13": "4AZxHVLb5GAo3KMHWfnKkxe6h1ps96xhk7m8gLNZDEWyi62u9ggA6rJotdGSVt5FgqkeUPAHaLB5xPKYGnvbbxwE",
  "key14": "2Xdc3jp8SqCVsnJRSHcvXPKcKXThsPmQay3JXWiQQLaWmKLxEMjMoYkLeWkekMX94UJg6fzsiSehV4GudGReHeEM",
  "key15": "5P1q5hrFZaDzoGLHyXNZd4mYwKrJcBTwTJqDCgk2Vd1vMqXJV6kT3aiir3o9YwwkTrYTykzthVxeizFc44DjQzrL",
  "key16": "sp85QXPvS29GBvb5L3YTtGu4s5CfxWvnWQQ2B6FUJ5qDHMGAEpZuJqgWKh5R1AxasohA9xudkMtvyST8SDfW62r",
  "key17": "4MZqYmBwxJjKPFfR5MtcVgYXDVf2z1jZZABLN5MY3Amc1GbR3zwASsXnryTBKMSGjqMVsxJUd16FpmjQ5vwEnHcD",
  "key18": "5zeY8gkxyQ5PtYhjomS7WkooBxrtDrpRNAGyvcCtBpUBi9gkPje2PtpyrWxokHy7MAE7W2sTmLCcVPbyAZSk5zpW",
  "key19": "4XrcQo88VeNzScpLuUc1qK2bThsLdARRM7epB52duqPpQbhfgcZDzhKeUnmH9Zx315Bu5jSz1rtfBAFsCfBAE2z3",
  "key20": "2vxAYnSoPF7v6XYzBZ9WziV3T9FNN86qGbtQt2AFc8vuVpzyPaa4XonjETt3h4WXNJhtSfkSC9abmNqnu8XaQZXy",
  "key21": "ov3ZMtJy5Q2VqSgjTwPtusFRj7ypCy7t9XCpY2Pch2XuxFTcqbHbCsTHZUYkTDHDSxdpn3pzcBni6KT9ZMPE3Sx",
  "key22": "5c3nyWye34MbhPGWnjhWffQi3qG53pm89Dz5zZ25dfS3P3wVPhvn5oynkvbEA7fL2EapiCLBvhbzewC4CA9ocbw3",
  "key23": "2TzFs6tUENd2mw24dnQD86zNs1HLXZp381QzSgPFp7G1CnkatWSC8cWRbBriwLN6yjxNwQFAtRkDbUuSUbQVxMvi",
  "key24": "2Y2rhwR2RvQsv9xmfs2C4DjogX98Pop4a4QqU6cYoXQq91WxmBcjTkuuZGCvnVon5UBKKU5vVEvWQkw5rv9LadPz",
  "key25": "2FPrUCQjQaCk9XGCpq2RMQsfEBEAutph7giFeMtF1ueBucgy17jHeDtQvayy1JUeNQFg7VeR9bDhoG1pihQaQGeb"
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
