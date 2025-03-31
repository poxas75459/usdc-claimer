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
    "16QhMQHwJf6pBcTwMs53Y7AbCh2jvLadWvHrMu89jVRUxkjQfWnN7pZYVYPoFfrPPK7LfwP5SHHnCxuxBEUSXQZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "265G7JxpZwLSxWiAtZMB1nawgGv5DEKVdaZ7GecTLtXMwgWKQkt7di7yspyQqSVicJzYhSi78vPcPHJsz4LchwRJ",
  "key1": "3x4BJp6EdZ2gv23nnwXMGczaxoxXWkV3JYmMKKAJrXACdKnN9uxeCkAJbSsgRabvM9vH8GiwSLKw5HXkMUjbom6d",
  "key2": "4MmM6Ki6HvXT29sDXyJmeFxS5rcXbSs4AwiPAVA8P7VzcAkHCUYeSCYR9h5gcKsFHDY168myyqt7yU9TV5wT3Nis",
  "key3": "5NQhhYMHXzs7fLHNGWBfuqAHbh9BLenwRzsdfaWV5sqLvoCDRdGpqun2xYxpz5de31iBknUBvZrEG23hR2EU5XTg",
  "key4": "4pcbf4h7A8ttHz8hsN7Mh4S5RSCe8vr8kRuqrdoh7TCFSTHRB9DncKsfkRwtrgVfigtE7FAn9fN7rmxUfAxMcpW2",
  "key5": "5RBpom2bCvUsk1f5n8gQAqbGrVTTKypRjdMzwN6Fw5oNpnvfW5nnjVu51Zdfg3WJgfFyXhFgNgc1EGuNtLdNaZCz",
  "key6": "4JLy9DeJDKdHysC8LeKLS3qwzpyC7dqrM2yXtMnXMU2gRmxyTkuTPzLhmmYzeY8d2xU4A2wWAoksUCfR2G1GcWmo",
  "key7": "3VpqcVKc8f8VppGTG2Czc7ShH6V45r4j8WmNhR1DFMLNzQowDhR65crfPGVkBZY23mEYsCCvUg8FTRb4j8eoTqHt",
  "key8": "5GVTH5Th7d65NRkLi9CferkcR8XsNaxNogKPk9fUgiHeC4CUaaHWUUi58P9iDF2H5jqqcJ8FiQs3XTZLwrnySTjD",
  "key9": "5gLKCdnHH7Pd6L8KjcZCga3kTHpvkq5UedahV3jroHyXknTm8a9Ry3Ar2rG5S4dqYNACRJTgceZXhjtLgDrbYNe1",
  "key10": "5NJN2ARXiKZcdzd6ZyoooX3hnUTwb4trv4PCZkUfaCN2AiYJ7bz1KiVYh3QGFHXU34jtqQkpXPhqinPox6snFamz",
  "key11": "2rRNy1C6zP1pXD94mRaJMPQACfEL3kbUoHELWtyJkUQywzroS3vfUqFLAgAb4Jed7s1MUgkPwtL6XjRyTrPd11k9",
  "key12": "4STaeBsx4gcoTHnrTe2CAtJZ6KS1jQeVVbxRUYV1Tpv8JDJERaEMZrmTSnzYSnfZVHeUEUvkR8eehaVfXLVKUh3L",
  "key13": "WQ4P3kqTUCv5rZL9ATnQTRvWrr9hu8uy34YGF5qy1dvqcbmWZ475dkAAXzcitrLpki4ccAJqtKxPzMFSqL9FQUo",
  "key14": "3s2m13vfPTJu4sbncfFDquBZJAtxVjSd6X8zdhvq69ceGQfzA7Qfc6vemqoD6xBqUQUVownqpHhkfjUU4iVyUg7v",
  "key15": "4K1DC6JwhZYDMSHpX74U1nnbQRKxysAB1WxDmSzwmhH9sj6BNPMtEEufmdg7CVdDMEhgf5h2f8J1s17dyHeo3uM4",
  "key16": "5aRC6w4WnXpF5kJDNEWNWhbbzg9shmDnwSVmYDJaanBqVRvz9rBMvqhGtoZtGeqZSyvFrwfJfmzar1xoNqUFt5ox",
  "key17": "4VxyuwBDsr58ntgksSuKGbU5KECjjBeN2frfjFL91MgC3vBHA3G9Y6VDycRCUfYxGCAGAqQnaPYdEgMPCZG4ESWc",
  "key18": "iaQsV8NJGXcD1oU2hHCUmr7SQANBb36ekK4n3cCKpEFPk1wFTHhLEyamgqrs1VpCtPtXkZqhdjWhhjdEY8ZqCwZ",
  "key19": "ajoE6qCB5G55SdMK85e2QnmK6isAv8sKTWHEotvzREtwsJqC5PWLAwifA6zsLrZ4VcUW1iSECxhGyjzsmec37XX",
  "key20": "4R6FeZ2k4DaU5EFm4deDg4gnQ96t52bWqTKw3UPLHakFRkHVQYFnTMmiwQuT5eDYrqmBDg6cpMVz4SEUpqpnT78",
  "key21": "5r4dMZLhgr2V9YTVL9Wo1y2tt9eTH7Bvo3cRVJE1MpzsL1v3nPnaChn8LqUQ3wZ3LZMhEatsZkMs7Nnm1NbB1adX",
  "key22": "3R5yLSVBPnBixdHmEgAw29ceWHRLPw5cAmS3RwgxFjCynTvuEA7nPXk3kd69SMW48EfMsyDHFzWqRhoqijwgAzpA",
  "key23": "5rdyiLdEWnjJPspXRikUC4o1TkQ1CyX5UEdXEtWPiHcEHNj3xBrCsJZ3thbDTYoEo1rsDbZhdYmsriE2xc6qZnye",
  "key24": "zcnSL8u5qSA2binLJoARrg86c8PqW4m1UqFi9Jy5og6uGFiUeKFG1qdHnZyZWrHHs3jyopChdzDtwDxoqY3ERqc"
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
