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
    "2kgwkC3H1XYoy628CWDTv2jVrUjtG187XBAo54GbCK5GmB2BY89j1mvqk5Hc59pSLrQ6U9WqrCjDKtDxthbtYpiT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RDfvn1Et7eVgTRkMyfwSgZML9RE5fLNNhkvTNLJqEBT7G3sATAXP5jw6bsxZH5t7WbyD9LxUzqvjLZKKGxcrFx5",
  "key1": "5JqqxH4Vuz2kpr4wYZK2ZUkjQ82HcW4j3MvuLdffb6ATbUh2otqZMcsTBqBQmMwzN1FAv6Y3oYVTERsGeWeiMKa8",
  "key2": "3wBQGzjkY6tFwMgepyTs8vgW2LUBJLEHWJE9Dbqw9BFT3DihfXLPRkQWTwm6udRGLnmfSPhXdzkT1YCoE3t1wsQY",
  "key3": "vuCanncAWE6SVa8BZSbmuC5q8xibuwCsEZXmxkVbNEyoZfwhSNphasnbTR49R3WMRHjnFuvjxHUTRfwp6k9mDKc",
  "key4": "5hpYzPAV88q75P6Mpn7U8HUYv5eWBftm7VAfjyan4QB3wFUNk18jQaygq9t8HW2X3AZUmGcUSrDKJLEDUtHGvTPT",
  "key5": "3Aeav444aC5QdQe8n5wHcjhyyD86S1ewuwmHUry6Z3bCVr7HJeGQeojMjtQWoVZ33xhwtuA8oN92Yasa5K4gNcVy",
  "key6": "EzDZNQWMRHXmsR3xfveMZ5muBcjusguAyEcxFEXDfkKB7jmbiZSfyd3AGQZHwxMTo3QapCt9TxcpRRT8JMPoY4o",
  "key7": "36SJdnttJ8XFGTHPK6G3WKsZppF61ddRmDcaTZ6LfmbemYxPhmTiJ2uS3JHKK3f7T9gdpmHV5wcxyxw1EmeNQj1Q",
  "key8": "3QdTZzsSF224nnj1VrpND3unHHLncz41AcRY3v27ndju5sy8EYbMrYj7FA6FDabVCCe9TMdxNqQJ7hQ18ciQ4LBo",
  "key9": "4c32iFxaXmGnBa4SUn8NtqmUpizoDtpeh4B7g13eH73D3WZhYceGSGta8CoUKg6c4cyMgZUXbhGfd7nSxuKaujNe",
  "key10": "2eQymp5Zy4baMjbs46vbG6PgPkSQosPo1aZNLHzke81o1dRsTALKn4iUkNouPYyJ3k4WpjUmcBRvUoL6s3bhLKZA",
  "key11": "2b53gxyVXn5c5js5L5J8uXPgWthjJ6gMoBAKnQyUbwrPNkWkfhFzvCW3ijHYxCiz2ebw8oKWYu9dkkh5EiEk76T5",
  "key12": "3c45NezpG453ebgTU3MnoM18v6gUzWmN8e5LvPrgrsEi3tt9ENMWkkCrwTdwUhUnRK9tRSisXPvm6KhnFon6Gac3",
  "key13": "uqxSZfu2AjUKZhMvWJuVWVBh383boKa7RGgx4MhV3YGQvBjRDcgMsNyqoBP4qxK1BVWdeQ2ybdFVE88cHREunkG",
  "key14": "2rTkuZZmFEpcLBSvKvfVZtksPUF9cTSE7zQHK46HUVU1z2pEYkjPVykmJiM3weMfd1Mq9S9FN3AytVeEiYpDE2M3",
  "key15": "5D7g1zf5M736uMwZkaZTJ6cF1F9sW31CdQxRT3LULzFJ3FBwqhpemrqaKADP1LrGQEE7p9zLZC9pQBKSTLtX6JUe",
  "key16": "4g56aRHhzY5y3ZfdUkp13Y6kcoa7HbjaZvCaic5ssZyxjbTAmiA6FVPzUTnUNbbZYYE1HmNStrq4HduxAw4No8ut",
  "key17": "4ndME7jfgVsGXz6QVsagvi8wKjyz2Acg1HFyFqyBHypSWX84WvC2m4JHGH5Y7xB6J5eQ3wB7rgx1EjPnmmuvPTd5",
  "key18": "3mUyCYWbyio2swRSfmUgour8CgTQN9Ho5NLFPoy6VpjyDSDoFay2v9BSrPXzAxTbTRprqxp1xZUCFZatoJ7oMTsQ",
  "key19": "5GPDzZ7ZG8pqNMpNigCfDAN981PvNYnjvYvnVJSuubbAYd39xjsSoRvr53FzGzwHZR3y6QdqYWiyL6HgUtk4BQof",
  "key20": "3DBXDMitsEhRFC1WKK9fSwZVzYf618pHBjixyVXkKM5DtbyVJFVGbEBnPVGEYvDLTCmAVJByoCJQ5PtdmEReorHW",
  "key21": "277kkDJeCWy2wJdpp5zju229gn96JqWnYBYYdjgUAx9gqu8WX8Rke2Z8GfSy5nyENQdYTD31nwUw61NCJqiXxr4U",
  "key22": "niCzoAzPZ9H6uvtnu3M2Pih2LC8UvaMEGqd8WF3H5raJFXGNUV91mkvELHJ3fjSvQqktnz15TC1hoY7t3mGgVdW",
  "key23": "4odaGun4pWwYSvNGwJmAKQwVnBzcAT1Vh3A1rEFZVRfNe9gDmdSgj7TLTY9fzmYEMe7cBXhkt1tqwcRPwmzzioJb",
  "key24": "4FZLEDeLLeWanDiZNWMsFAgFDvWbZ35YrPaHiN7vgBKxwjod3xgHjiFZqE3uhatWqYWo3SgoDvgiKG77yzzPKCWD",
  "key25": "4qxoY8NbkcAmyEarb5i5b2MeHznVP7MvE9LzJk4reb3EwmoUCvqqizug41t6hne89Y2EqHFTJ5Fv4cYzGsxpKguv",
  "key26": "312DSVAKcUR4em3hwhdJnb9aXvyx5HxkCzV869rCqXoCAb4Md7eYA9JksVdGVPkMjKdjwuSE1ZZQQFReuzXdQMYT",
  "key27": "GNZS7coM7HDAAq727sU7CWvmDeLzgEhFZaG6ndoFz1dJn9jk6C7MxtAxAQiE4QWcw4xq3YCKEVHtsDyUUUuy1Dw",
  "key28": "LSEyAB5HZCbxvDTVBZMqKLp2yFhxvS6Nf7nDjik7QH38UkNjHfycx3ZZyot9LYyhb1w4A1tufTzbbyJwcCNo2ds",
  "key29": "2fdemnuTPNkJmbyY16yXD6CRA3dgAYdTp25Q9qk4vrANuViABUNPrCpW5AiQG48f3mDBsG4CmZND2vSSsGEw3iTi",
  "key30": "4iHfhHWPjchQ1FYBwoUhfqJUNWm1STzQ2CRFoLUUCWBSYviborxLsRPePB3ND7QzAVw4VxsXyKkAmRhgwwaix9eS",
  "key31": "3ig9DReyxy1CPjvUhcddQcPhkpJ13JTZEHPQeDVGWeWMfJHisZqpgX1DkjjEsq5yWKvVUchx6vLurBdp7XGG5ADr",
  "key32": "4JM3Zps4wCCrKAGiDXhHgn8hbrmyUWPmoL933Dykm7puFU8jKsc7hd86dNLYqk9v9SNnHkcEoym3x8mcekoHG28M",
  "key33": "5u8ZRoh4Qnv37cDBrn8hhFdUzXNfXNH4TQn972fqPtKEfsqQfENXJxqipDjPg1auqB7SsuKHzf2RKa8SQnVufaph",
  "key34": "4VHbxr7NhQKdsHvnPp1TZtgyaDjbq9Kakm6JevNux44uzeegwUNNojQj9nrYp48zunnTz5ZxtnUWYkTPP77c28QQ"
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
