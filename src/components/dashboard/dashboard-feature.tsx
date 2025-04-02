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
    "3CF9hhELwj9tmcdA8kbsx6r7gdeDcTh6qKgUf2PXdNzofSLwXNCwrmqKuho51V1aMZQvoBivuHjYt8nrSEwYUXk3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tfVT1i6yLeVu4oXppWwYKuP7nzvy8H6kfnW4nRTaW8x2ptXbu3EpVVzmUYYWKeQdfm9zKiq9V8BtPLYTPySFE8S",
  "key1": "r9zqPnpTsqWbENpdHkX68xEg5D5rdYurke36pXJ13qzQQ5zAckyLM5CXRf5rvT1GYz7oPzSsjvcC1aTTMjWePxs",
  "key2": "28j9Q5sxorhUm8zFwFeosf4ESviKXGxG1gzyxdMWvmyUHrY62GFUUmLiJEkkzXz675MU9jP4vZSVPYh9cdVYmWKx",
  "key3": "2ptXxiAUWAC7bm4BEVE8NymXbt9aXixpEdLS4jtHYFbDHBAHx3gnuNXHgtyiJ8a2AxNTgGiJjQDWCc5mNdTvJEkY",
  "key4": "3uuDwVPQuv6Q1qBksNasUAYwoLDVwUR3JEQfmxnHgiqThhXvR1zobdkejpVDVhw9DCpdqTGtePqJ5Sh4sg4adJjX",
  "key5": "2KvNoWxZ6Xhy1GXWBvj2ra3k5Xhu4zrdCyA5C5V9t326qYkmWptG2Ng6KfgfLa9yGgSZ8qAn3LfF9ojnVBXgdqce",
  "key6": "5bf5mHSRjwGVVwHiNA2GTAWSorhYvtywYvurZnAK1zBDFVQZR5qbrP7NRdTNAFTgXQ2kcmwFWSUiYgrnNjZkRS38",
  "key7": "modDiE3BDVpHd8ydMBn1oxLMXGJ5gtR1iebYNFj6Usu4oGt8gEKa3BEdeC3nNYk4s2LNsDE2eY17YEYtzrRU9Ex",
  "key8": "zQ8R32ts39eL4dEVCGjseZsUSe9MQW7fUFMDaJhVYe2DMKCG6pp7yddkFZxATMrD2fmJBjevUYykfpVSKHx27Df",
  "key9": "3pwsFLYFR4D2iAQpojRYTKYDXzchjFPssxX14dFDvbEVqzHtN8xwcsBBPFXzdqsV8RSQyujsQX9PZxTEUZNvjXrV",
  "key10": "3vz9BZSgzi3cLicWJ2YHNM2is14vW5mrjnzko83rzoajagJF3Bw4NH8PL8XeDnKffe9nYK16ySSfNb5bFyyftQT9",
  "key11": "5FtRDRHhYV8xTBE64AF3Y4LSRudp43dmtnLpcDxuvyqpoHwqfr7fCtjybCgbkn1DqeTd2SXZwWVgQuEvTEBnVw2",
  "key12": "tcXWRoceDrLnrxkCcPU81Bq7ukYRCWqLGUCmQjE2rMb91NyoyXVYRd14PsCgYhB2c28uecQLDoXRKPvqh89XVx9",
  "key13": "5g5QLnJ6W8HGSq6U5DaSKpfK7Gmq8pg7YdnoxHDqL64hUxeKq23kMjjfk5Azr3P7aG7Jbyr2ztUgjFUbxz3xoWLt",
  "key14": "3hnoXMqxqC9cZuSXUrdTa4rNMNmS3bFfVhZn8EuCcYhsRkzvmjiFVrsR4we6zpm8KpgmwZzCCcsykWiiJUMq4kUF",
  "key15": "j3J927BLRBzbEP1XsrFhzQrkGn3J8KsQ7MnJsD757NEhZL66sDbRU1wXJEEVT9v6rEqRiKqFmuCwCaoWELbYUDB",
  "key16": "3pbgUdRvdqQ2Y4rYzAxBB65zenMtXrTvC32qu9EVg9vCvCsWPv3RhLuTuiqLxHp6excfYcnpyeDfXbRjSNgh9Kev",
  "key17": "ps7xwRKCrhMk8NxTzKFGb3UQFh187P4teDgECbS9WPhoXbbP9VCLeAnKZyQF9Kriwztbsfs5bPFDW3BRWZYWt5x",
  "key18": "67Ed4Ym6A7VqqZC2vrg4wtS3njqhvZh4f1g2E9P372x2f84DEBkiyt1okw7sKvzVaLUGkMqJ5uJGPk9jXzvCDBHG",
  "key19": "2LkBuwwfKegeSXiGMPSzqYMBqjsjnaWkU2ZfbVWsmF6RuLbbCz6CzNmzy55doKphZ8dgJh3TnRfDiSYMXqgHkwBS",
  "key20": "BWU4fNSKgVqDZjFkkvUqQKNDta14CsTsct9BcaEekdcFUL4ex7PTUgbm8eda97Sp76zL2dJ2qumUpjqFRVR4mjs",
  "key21": "khL54jTrxUsNY1aoqpdsSTTs1bYyEmAVKcBmiRn4ic3PGJPQqDHYcPESiK94QoMyJpWDayKMUg9qpqfFJoYz1Qm",
  "key22": "2cRK4bv3Jmfo2ejryG5mgfqKcxTbyhWKUSkrcRhXHixJ5eAE4WHZVoFFZAF5sSVQUEchp356eanPRgcjNP2DRqCg",
  "key23": "2gxdiitQQqxc3C4JqEKRXW6Q4aSsKkmE56yfCLt4KzshuuRCiQro8DMPZHeWW4zHKaGnwDH7GeBSRZjRR7B8kYP6",
  "key24": "p8Cni5fbeD9rg5egAW5Npv526BaScQXgJQyKdWgzrynz3TRvjay9vbZRpR7gHygj8V4CmnrBgNFkDtdAHsf89QD",
  "key25": "4zMTmLjw6PkSp9wMsA63mYorUBebTojb8rqgErkvDvzvZgn5EJL4Ar6ztFDvrNCQKCKsre59cuWoXgs54kkYRean",
  "key26": "3W5M5qivtzGt96KcCvywQxFxnnynPJ6fFDcQUjXqnmGoTNNtvbiMjhiW1VVdhdkGqQbmZDWLMBRe25hbv12b6KCy"
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
