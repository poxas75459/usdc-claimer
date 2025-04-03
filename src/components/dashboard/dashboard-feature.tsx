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
    "2FWo9CuzFHVw6BY82XSsVWF5X1t6nfX5RiC1Kw5VqhvQCkaM4LpJDCzrHcuPxHraQMbfWZs1X7VAVH9KirTWb5AU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2a2VL7VDEcjAYzJKsaff5ATP4uDfmNFzS91kgDddsT9eANqw7E37sEUxR7VSEWGHJDYUHxPiA5ekch2Jc66kNG38",
  "key1": "2r7xdJgrKumx4cqJWNzyiUeYAK9GFKcxCVSpwKLHmw1bmhw8qWkgXiWj5ezbbQmR4Jh3ayVRFhZLzDHaSiDKQZa3",
  "key2": "3rMDoHcWyCK59mmUGENyEfQkc78wxS1YbG9MLdbRoG3rpBiB25PkcRDv6RdXp1CsUtssupVAoqCynXzh6KPL3scY",
  "key3": "7WghLfP2AuEwxB15Hzx7NxpSVEDVh9ukPVFQPqmy41P4prjy28A5V8AUGRnY28SKg2yKfSTM18sbiLCcfQMZFZy",
  "key4": "3XYsPyXSA8fCFqpE24Wo9yiCgNjj5eD1dNJuUqFUYTkQdPDM8iT29ifLVfRWuSFfAd1eez8wb1113SkvPRhpd2ed",
  "key5": "5nMGxHa3BQVQiyiqtNwq1ochNvzofBoG2abBD6W9MNrwjnVf4T1eoBXNmjra7tVFkmvY3oPvm47MCjfRtPqoAqrT",
  "key6": "eAeShLDwvQwreTSFWf2Eakm8co8TRLXcTmkxNK6Bz6QLYnVUbGZ5uPUzoUGGffgUT4uVEHZ75krqwcPfnT7aU5G",
  "key7": "36uHdjTjsUmjEcxH6SUMmzjN2aTQhjVXfNNqnNE9Gp4hJUz48weHvuaCqHiyfGPWCHvjN1spQpu5GPpyMDcBzfXK",
  "key8": "2zCW3Bjmmbadfn1jk297qWnYqdKHvx8p8mxSSwL2Pe6kyPp2LLLnmGJ9RdRDoMj6iqMYcNnNfoWQ3D4zVpfEfAtR",
  "key9": "33QgT6jMcNMFvLZ4VaHsW9JMJVNu8jPEDz2rHDJqGwt25NNjqRyeRd2vRVGYmiSxJqF5rERnXhftCEDgYUgP1LGV",
  "key10": "YDJEjDP2bNXNDPagCUUY7avmYSVRJd4Pr4A3o1AyD3AhRGStx2zuCJLy6gP9UA37RDW9vu6z6trj4gDyxfyob3n",
  "key11": "2aBgQABDZaz4vAUaPMBsrbjtzXoUPXK8TLyg36PDm5HtogLqZm7Nz5an4S2b3eJsUjdMi5tdUckBtjup2Kc34w1w",
  "key12": "3m65pTApmMp6tQrSCgAuME3AwRhX49mFE7FUm9TShaWL7jSUtupMrvxqb3nHmabcZqdXxam24QuVczPzU4AKBteR",
  "key13": "4Ru8wk4kbPeGHaJtKNrVskNLHDm89MAzraumqBws7iP8aPzPYHtafvH14KYxkvyK2DfjvwpQhUXro8EBDZVPQ1jV",
  "key14": "4gBEooHWAFWYEnRdAH8HZN8uR7pwVr3tHAFScsbvxC7yz59eUfZSsWfuwVGLJ3fRKmRoe2QSwumAhYtqbD7Ra5Xj",
  "key15": "2sCsXMPHhUP5mxBXbZvErSvvfZj5enFzjPXAvQAKxvQ2PGFRtceN5ogHoREWQByCjA9C8wCijXCgZYGcWLhe6uku",
  "key16": "2gRFWBLiLcWHS3fHYy5riLmHgoti2s1BTPP2itAydmQqFZyUoHKeqbFaemNTVbDo1EshxbR3AUoFQAWAuuuUp2Gi",
  "key17": "5xUo4C3yn6wjFRHtAT38DYb5vPzJYuuFQXH4NordrRCWzWcfFxJRLty6uA19zNcPrJA2j3d1s8hmnEvT6HJbdwbm",
  "key18": "4eLqwhgyfLfKmZa57Wk1rwEy98QoFft1BGzo5vsYhGnmZRefr8y4zuuBaLye2Bc5bQjdht9fbY9Ja78t3G7zggwi",
  "key19": "4z6Y5uj3EweAZuntuRaVKBvKMK4W2wLe5GrdETJWAQevh5FmBz4qHBKV9igvGNfGAGqVTZyyqfF6tPFj1m89Nqtz",
  "key20": "33rQWkXqAyHL9Z6YAgHRE4TKu8tMvViphamnG5nymUNgZ4E5KH3WFNGQWu3D8mce2BeAegvSfLduqtVKEpG1bNDj",
  "key21": "kmgN2UDbMtuJagYVQFsVU7Ln5TizLUoMG2GTe98wQiCH11yJEJh5cEaonBnJpL1pR9KRZzWqwMyJiheG7RZh7qa",
  "key22": "5bSvR4h8K3zKyFpiJjjHzhWKzPX49mDuTSUoTN82qfmjeHVH6AGqMcYLiLwB1cb4Gkgy7nJexkN1Ahmr66Yj6i5n",
  "key23": "4bRaD8ZGRWpw79bmyq19bFBpZAS1ei7d2HzRP711zq86LnVfrAXW63viSDTyRvBagW5WGNcq1NASmxrjaMLESaSs",
  "key24": "4CVTRubXv9gBeEsszkUJo1tWro3vQ9TRFBuHymLeo9gMkqh1rSwTTmPMFD7PgedJS8MNwzScatF1tzbqd5xoQScP",
  "key25": "9t5yrwKMuybUU3gRK8KcwWDtjoQ2y46AuHhp2KGRHXd5GYXXybLxSC5JG5qF7UjhwJF3xV4hr2sHjKqqRktfn2H",
  "key26": "TuWqHvDbhboWRL6an1qA96oj2DrEQn7xJtLeJRP5b7ju9pnzbKLFagzq5J2faRwV4ZyHKjBcCW4dqkxpnxY4VDS",
  "key27": "4HmE6ssEmVPoomLDmNM4erjzzBqQmHRdHdmdrKtq1U6StqgmNwHmmDnjrxxdBAb5rBNS2mXUGbqgBCwQeS1T3VkU"
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
