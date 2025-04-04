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
    "4QN79dAPAigcLymYofrTtJCFtd7sVTEV9wJXjfnBmL1yqZitcSjqwEv7XAkq4AyCBeZsRdNjy1ADLmjfPmQCDKqi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aF9Sgij2RUuSr9Zgcrbmn2k2b6wwcq6mU3RtNDFqrD5Bv1LcTpDJJzC4JaZndAPYSupmdNQV7XkyhRufS9H2gRy",
  "key1": "629j27u4cfMCkJJsk8kC5c89afzMChpPsjrQCLPQjJvz6gYvkv3ZL478kbkqw9T4HRZUqK6X4fqR5WEwxnDz5YAY",
  "key2": "5Lo2Fb99ggbtXV3k1ngncceZrB4FSbB2tMpeFBvsPz32AiSRpEmTdjc3XkAEMzwdQUvznV5gEJ536ZUqBChBc1Qy",
  "key3": "3J1abyJCJ6SNrChKxS5PWXMuXw3vpWfF6gueEg5vuMKBndGgSBYEmkX8YgSqcCPfrfQU11EQcq6Jj7Xnnh98jhew",
  "key4": "2D3ZdwzoyVtP13k6y9YE6v25AHDStAwBupb4yHnHVNAGE6n2ig3oefBeXhvfMr3A4hMMkXdDPwwb3f5HkZAh8AGu",
  "key5": "2DSQ6PjC4yC5rrzrqU8wkgsNiCNvu3tWZtMspN3W4AdGzcv31JzrncdkQeqduuzYWtsTULJynCoR96HmhTHq7P4U",
  "key6": "3oNfWoy1YbeFSB2wTFzRQibe7rck6SJXAJYJaBtZ17YrxCdd4yzGD36HK2QFaddVTLRueD2uRgH87XND5wFEbn3D",
  "key7": "2xZXK3vUVTjdgi8nA3vC2nJybxePnBJEWujAZ9z74NStGd9JSBErENhgTYruewRw5Kf1CNqwxSVB1QiZUnPUog36",
  "key8": "4AUvvHEbr5pToXrNUduEMcTdUF92SrcJbqi7HEPnhWAyFxJH36Wdymg2oTrzfYVBZJQXFFthWcAyWqg1vhPD3Bf3",
  "key9": "42q9KuBKPUCbLic5oEQvEV49ypmvfNmq9vrSSMxiXQUmriDAZSqfm45CLmEhH7BPvMxeUEDiAWS9nhbGbkuHrX5c",
  "key10": "5bNvpQFEVWADVzozBKQUPp6CEgyxrzVgdF2BaYCWQtCHU9rofyKtBBVsH4fUs6qpGSopjJWuexSUGYT7ndv8Ecih",
  "key11": "5vniSAy1UsK3owk6NA4LDXJef1Zgm5QDAfrybGBN3xQjz5PJuWePbmpSqgstQz6m4hZvmVkRnTpAyenA45MHRMv5",
  "key12": "29SwhdSJD513kqG2WdjnLjieYb1KRdRq33KdBeBckkbPGk9KtLkt8vHWhRiop9nD6LjLxWTtdpeHvmNSgAT3nX8q",
  "key13": "2xFZLEjPQ4pMGadnWsuP21nwgXV7yWdtEAfHHDLo5iy5tKJFqMsuWdzFAjDMiaxcLeJocbVJEReWUpJymh7AteRR",
  "key14": "3z25ZK5dJ6Bd9agq69MwQUNugSjNyahCKWCqXxW7DTXYAozXdztA2QgSQDYc7kiDFjcGqMqfHf2ChPmMfe9yVs9Z",
  "key15": "XyTcVv19KP9DBeRK3The58vXcNczkTNSmAvc8Q4AuyE4mv1W4ud84gW8PfAGSBF3PwUpmyzWC9fAYyAQsQzM3dK",
  "key16": "4cZ1WX5yKAihcZH5nG2up3xPAE7iod6agPVWjzWCY7Zr1M5GVz42ncpMF8vw6ETydGhgnzK9cHdH9FgghjoYgv7n",
  "key17": "61KERds8t7qgRDKTwDYrDS7aDYWsrgihd4vD3Sxpj7vaagxav89TS8s3PSDcgqhbgjPyexS5TU8NjNjN6jtLzisP",
  "key18": "4x2H2WD78sjD2AdMPFu3AmnVVmFcgVfc8oLvfiVyV63iZQfxGQA84Jfn8HzjMnw2oPZ2Lxpsk4ZYWXRej6uY6NJh",
  "key19": "31K8WGuPYsnob4DVmrXVP17KJk2rNYM7GoZrzxf1cUKTPHHVP9Rs6KH7HEY38xMXHdWQR8KGijtHBeu8Tq349d6T",
  "key20": "3BnA6wReL2ok4Mn6hXtnWgXwS2yhWTirX8dB2VG7nUvfsfjwSCSr4jNZTHsduzB4XKMf1HfzrJQWYmSp6VmZJXtk",
  "key21": "2v5t4VY74TgcZ3UDrtkqCuxEuwiXGQYkLiVsd23AXTP7YXMzq6Hp12W53tWijBhp6m4SNmLNYuzxhVnE8YSDbR1H",
  "key22": "2PrUpoPRcA7dLWtyyqXCQhSFnmK7yM2Vmc8Amw1bYjNn3LssVvHYKsp6GSNbSXeg65oyCPkwg7s4nvi7ohWDWht7",
  "key23": "2bgpFuAGCHHTft1GH2vS4SeMc2WBjMhgTPLBAe4eQVGTNxWYBYuW22kvkKDh9z7HN9nxqZgonSaa7u7Qe6nCNwVX",
  "key24": "4jshSgVEw6ibPVTWhhVHkQ1gSRhwns2zmJR3n33H4VHfZzzV77dDxEnuB9HoZY6fapaKxmPRHC2MP2dW5qq2BMxs",
  "key25": "5TGs68ddoDSBCL8BARUnqx64fw9qifYi3hrizyDEA8hECSd1E6NPCL6aRWzRDyKHK488bkJnaqE2BZgjFzNVnYNy",
  "key26": "PeyrpdTy7eyaAqHSSQKmJJ4pTAgNwFdbNLzBPFDNv6xG5NEYM38UCci6e2NYKdTpNidB92zMi3zgF2D3Ubw4b3P",
  "key27": "5WgVzNXLDVAyiQ1BjLthnqmM82vcs15eFB95vwiYNCcBCtnyzhy1vRd7CJLwGCKxWF5Xa2twfZ52SB3888TH9Dzv",
  "key28": "24mjSeFRhdXUfYBjNoZaWttuvtdPtxt9Y7NmcNhmKNRzPhPg4vCNjC9Avb96Dv8Fx8nSyjqKdhcqveJC8autE5q2",
  "key29": "2spdZmaEdwWrQjHVKnA4EAGC8Bzcaug1PMHaCGTCSYbQeRzBeFfsQ2XPqgcRHXL2e1ktBUmg7yKC5nMNEMYvbpRD",
  "key30": "2gmWN7iHx8vt3wZ9Z6M36cgWU8i3yua53DS39ambcCM4S3etXSTZ5HDFnUPLXzV9uu1hKVn47MjRzLss1PPATMkB"
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
