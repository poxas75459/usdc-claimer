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
    "3u9djDGn8TStQZQriEU8o9h3wy3vY8w5uqqZYLeiqftg8KWakSyJdd1Vx8yLnX1i71juRfXrKF3RN8NLpzDhQop9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rS14QVJmsyWmCtEN3qZ7T2kZpgYF8XoVaX5k6QQp2Y1qgDJPX8ejdbLmWJgbans7jwSTx4tQFgsbJPfuhzEXmgp",
  "key1": "2hPxRDgAjknhnxXKDKbJPspPhfmvfUmLVqCjVAPpGigt1s4JcK4718axSMk7fdowSpqMGL7WxkU9LNGH5zqS9odq",
  "key2": "4TaDakZsymD5dj7nrckaPLu8gzdm8DQZFi9nBPXvETcPyEvVGeAhBGctDxT267XEsqMnNJ3Q4Q8NituYn5di65zd",
  "key3": "zHago34PsnyuyEftgbcPvBFAJCg1G4y8dyij6JKsgqR1TKbYAhb7y42j3MZDX4dq8VctGzrVLTyNF73CJs6WJwX",
  "key4": "3hPjEALKPdER6YxWrBFiHCA7cySTs997fCawrcpwTa5Vtwb6yMyLLep2sB9jU2csTkADedfrCUmweZv1cZFg9T1t",
  "key5": "NuetguekMNuraUsfaKL8KzYUaXaKEWguv1xH8PR3E3wqfUWGQm4zTQdM279SVzZv4joQJzg7FDESQecvUGL6ETP",
  "key6": "2Qw7n7o5KFXEMkWLdP9G8AaUnsBd1SfQvyvWyHq9RRFYzg8UETJkhuMQWKRo63Jir43K1JbHYwzErR8Y8g2qsTky",
  "key7": "AV69cjSpKUxrgo42dSoFmfRHkKtfwyhgvncMcjuW2xcTHBeadC4YBk7wAmTgEbEmGxiq17amRvRUZ5pRFoVWBCs",
  "key8": "5Cr7yWFMLHVBdJvH9jStTSMwEjpiuX8sgdee5W7XaH4Tib66343WJMFXYxv98YxR2iCbiD6Gx5uZc9HzFZxmMX4n",
  "key9": "5RqpfV6WV8QcRJCWs5VC9VAkZEdoi8YGfzAS7B4pvZERLNWFZQyha3TfkwchFPjZGL9yz3tA7NPJAm9aLiFXAyMC",
  "key10": "4RKrpDyvpwWZXRr2R4ru9g9XTdFLaAMhEfi59Js9w8Vj3UxgwztWZE2dJUHMWgTcmPDtsPeTvoNKH5FGUBekLntB",
  "key11": "5AqUVbT4CqbyHZRMLZxK59iCuwKAGK1dRf2cqcHrxGedxaPwLRNaJDe35WLuExbN48UQR2UYuvUwYHKEmmce5WBi",
  "key12": "2EqYPG5ZvENV2YBjfGmjrVCg2mjLGZfhXSEhkFWk4bnpg6DFvMTKmFHqMSDjaqP3LcHz4RCGZHRExEWE38d4r2XW",
  "key13": "4VoKYbrkuxfnr4pxwJc84VknNLad191bspBHEuZqVsnLcDUwmqJWoFPG4JXqGTsfvy299d3UxA8QGccQqxuc5gdF",
  "key14": "3k1hLQdK84ZQD4bvk7UB9Pd9moQE8LX9yD5fQgwPYrBMEdb5JsRjmPp2NjPJEbH3qKVCoeRUf6iTHVUuvePUHcW1",
  "key15": "4RiLSNz1h6sZk9UC8UenmM19vz8GuWHD1gkNhHsYRbwwBndBN5grFyeXs2k7uS1wKzdK7WrpA5GeLBaf9cRWfYC1",
  "key16": "4otABmpx4XMA4mqy4MDYuDtLrqkXL26SCELfSRBBeN4Bc87dYK1GkQoiGqKF5SjdjNNESWLBRz2YYQenyzSZgU73",
  "key17": "4KVbWifcGYWzc6HMc9rrBXr3JpDivUiHyMpkUHcnooGRvSjbkLr8NjGX7vyKQtDA4XkucvCe5e56vJVUnHGxKABL",
  "key18": "3uDmFpXEvAvWiiLhTH6VCsmUs5mUX9XATwp5ENfYgEj8aAPYLnrqxs9BmHM7jeE5zeaJLgSA8aEquviGmwVVi3hv",
  "key19": "26bdbxzr78vHv9hAbPkrCDBzt3S7FsZvh4RQPcheChErWuXDBJPoBFJdBGQSzY3bC9nZUTzURjKjPhwDHpZPZiMA",
  "key20": "6VduW68jzBgWtXS45VuWbXDmRgQXwB2ihvx9tXttosHk8hBaV3BR1jsgfxHWx3pA3hJnr6jU1eFNxJnmZTjicez",
  "key21": "2uBJrieg97dbdEAcrD6drrSxPZnWQ6jmskZx5SHvYN1BGAomvZZR8vawAC8Eh4zX31D4CAypp4Tma2yn8dNpnLYP",
  "key22": "4fVdYhUYavnRVMSrfHsRpKjVKddXoNyaPtJERBMV3h5NGw831SnLxyCX13tiCJNsfCHrb5z2nnzaZqmcoveBaRY",
  "key23": "4T2sUZXCADZ9DmWV728zEu76P3cKaZScjLLhcZyLJwHVX1PrEurVbmzZoeRcVgpk9Z63FwKNSbi1oKbQUzvc9kGN",
  "key24": "F6nyb8ToWpNe4xgYDVVgqbsFpMbVqFBh3bN7kmqmS4FXPzVLpEoks95mCYvU1N8FzrJstJJZkMdj4EwdnmWecGz",
  "key25": "2m2Vx8mEeyYuZZ8wVXyb2BiFgEAC1KhCosWLrAsZrxrdRcbbNQM3vq7bBGCBx97gSMiRxr5BRcnqdmJXd9xJQ6w7",
  "key26": "7LSEPgApshhm3DXWPaV3HCWTYxrYKXw8QW5TJhyETymVJFPngR9E6CHMESwTcFVgYiSr2JiwXCCkX4ootriuq4C",
  "key27": "58YKM6PoiDLJbGRV3vtEC1asjWuuGXLh48W5kc1SFVephNNDF291AfWH58gH9zSrLmbNipanjyeoqudU9Be2HihT",
  "key28": "4zqdGmepoykY9iFSZwh7GASa5GcEbxLwu8zt3AgHrqrPWxi97NWdWomN73qJG37mFFkQ24YFirMh71XtdFJ91nB7",
  "key29": "59UHYk25juJpVum1vw8vB3ekL8bWYH3JWP2aWzPDm9Hu1dj3JNrjz7GgEJwjbWxAYGVEe8sZPxbxrRPeJEQmNJEZ"
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
