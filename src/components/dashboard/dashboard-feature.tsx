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
    "2RKkL5QFnn2cQT2W2NiF7t91EvM9nJWJVjVt9fLhGCodR5XpsdU64PeRp5Aug9s1DkMRWo9Rc9QHcryzN1ALJycP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53tAPvycV9MUxKAE3jQRjHrKHrRvkh1rZ3ZcgU1FbrG7Jsn9TWooWcWauycWd2zCBfgaRMXrF6yafQj7iFNC3SF8",
  "key1": "2WSbYQZeUp4gQDr7bkEa54kgB9vz6nXN5bL6vsC95BNXZJToupqxVhCGYZ9gXvpf1gBnucqwEaaciov7JATfPLNJ",
  "key2": "y6cStqcXRRnYU2qGvQSe262bkhVwgtjXJmspFkcKzYkErzBMmvpQGpH2T3VivHStwR16M54pcUrofSJXgN4mW7a",
  "key3": "cBoYFV5cGDBnbU7xHkatG6xQGvtnUKAFrYDPzXf2d8eXAu2h6cSBoB3fx2D1iRWF1uGQNsPbhVqr37C3zjrMhaU",
  "key4": "4u6xnCJ12VwUwkKgpJgqZ4CaafLcT9DWMkkb7vYFEMnodnXTjXnovh4Xmv6h1UjKDkFhC8uDXmiT4G5c8uX4fExi",
  "key5": "2huUX54Zo6k1GuM2TaXGFh3svGBu32Pn9DkU2byrbLZn99EVGhZKAUJSydSiyBtX5K72gf3fbawDLjwMGKcDvdYg",
  "key6": "rir9arbfuqptqEx4hxEDgBq1zfaGaGa97Ej57DjwfjyWPfdP6Yc4Gk9rMC2YUFT8fpgwMesbWhiXrSKNWj98Jv5",
  "key7": "5TjrezjcU2zcier2Uqyv5wXQPffLPLdDF3rn5RJvz3RsA3PAfPNzXcSoDxA1wgZraRqBZj1NB3kuLc3UJmHF3H5L",
  "key8": "L9NTTWHcBLfN9SMmeYhtS7f9WMDX4YNfgcVpKoG9QG59v84paadhczgfmbm6UQNygB3Z5K9koBy5CvFhC4LEsFa",
  "key9": "592sPZH1ofRLEykJomd8TTACpdzU3HxYXnTwuWtq8Gt8p4FkBHfet1sELsgdPD2tbttYyxGH7KNuNcF1TVztfjdq",
  "key10": "Tuf9YWmNf1VB31f8WpY8bVooHeuooS3Qp31vinPw2iUgSNGNRSoziFDhfNe5gJdejEiqHWgJvLwmJGMwR1KVdVD",
  "key11": "4uGuyPvC7PxCKSmX7y7nxMirQ4vDZYjceX4txgZyaxCxpbBZHuo1xa6WPpRs5xQCxGnPrSoYndCHNV1f4cD1pR9v",
  "key12": "2Phm2DuTgCqQkdUVinbUTWjhZMN7K3UvA5qDam2d7RkySdGkAyYcLwsDgu2ijU6HJ58ZrZNqciMwHs1dmovJjJPp",
  "key13": "W8KGVBC5UWjC4D8uU6RbMdm9DYXnDY6ztmbgZXCpdsChFPLNTAZeFL1CHg834RopYSDTH1ewQ42VDENoWPzSHTk",
  "key14": "4BiUSrzVGoFXhhH5sEDdkUg9292kQ6yAFm5CJdJAJksMSNGyd9PqNKi7WV1NJMar1EBEivQsAA8XAb4LmmsNDGj8",
  "key15": "251ccMhEXHmfZgdyBEj89o14Xk3xjfz4TwTNEMMpDSXayTUFEQZ9dpno5f7F6Thq5mjDuGEqR9wvRqMZoE1dp787",
  "key16": "3cuRqg8jAG6Df5eZtBwc4qCEmCJ8MYK8vcgVmBaYki3B3tfp5NvyYheVM7Zuxd6e4eBRkq2WD6c2zXaKnVBJmT8d",
  "key17": "4CKsNgRzTeh8oH2fvzFRHoxDLfYLcwjwBgHxB1NY2kw4YhFULbmqibkEb9QbfRJQqg3Kje4RJziLzA7pWWXhrCCF",
  "key18": "5z14vuTKGytHFhsrQnUAKMZitvr6KsV3vWosSmN2cvq88UxHWTGKD6ZSHvqAnncEnwrb7cBHptgB2CF7Smzm5Skt",
  "key19": "2vJrb4FZ1zCS3AQFa6UtkL6qN52wX6hB8nw9Xr2Z8i6EcUsgjnwoaXgXoqi4kTh2poFmHvGZTuwa6dqLch5Jodaw",
  "key20": "FxTmXRMpL9X8AkkvWoG5bRNt5LGSQYEwkHBDzW9zysxZss9A57iwxaqakREeoz8FvU9yVhDgTKoskgPgvwcVj9v",
  "key21": "r1QuNpfjiK8ARvWMtfvDq7uiiF9C2wzcMbgcam7U1EMw2QVC2nob1MX3LhpuBfy3eW5tjgfq612YyWKnrjtBUpN",
  "key22": "3EthEktWTLSyAeebViqXQrCzc7PtF6hB1qtHf1pn3HojfFJu3nRpmvW6JyGyr9CXoKfKbj5EuKcNu2G9Jny48WDg",
  "key23": "3WqKwxpjv6ayzDiUuaoCEfZfEG4BvhBPDmmvDzP3MET2Je2MDjCkwcZtQ1X2CNc4RdMQouhsLqpFbYUdzWTc1SW2",
  "key24": "57wUX2g34Zbyedqs4wZGeZopLKz4HWWZFurkg3XR94xBRGArtVUCo2fGBRoNq7HbkbLGX7cWhnV1Ei3pq1pFince",
  "key25": "2S63V6GePSYMUdejyPvwsSrQTTCqvSBdRECDFfp6JJgU7Db2CZE7nfPqMZRkNPMg9RAMmT1kjok2kXHmUczWqg4a",
  "key26": "5xiaojQNDt9TCw8jvVsXkNB7YUXjBBk7d6FAYeXgAe78vDJbBhtVNWhwez3TRc5fERYuhj2a2whyzK7rzWXp7Xec",
  "key27": "49ykek8EPghi7EntY8aesXWnNjVPmKshxymEHFKh4srTXTNccYFsc3vrgKcGwsVW6y4gKb4jUFW8oky2DNHb1Qpa",
  "key28": "2ybMTh8aRS33qi9go9A36i28tzY2VtTGvD24iULmb7bijNo9LpCn5KF9GatQQnn6fwVKHa74Kx2nmtTV8gVBYQAF",
  "key29": "axEqdKqdwssrEVXSrRkFoLiY9yTNrBwM4vRzZsnkYiautzrqRL2nSR2rXwssgzNy7jD52tD1QJtDaxqtsw5hRiY",
  "key30": "261njm9DUefyjbhno45uT5bFcpy2Qf9y8rtxu8gHNtaDAgHAXvmbPf44QPz7zpY7gvEesbphXuYc1FLNoJ8A8tWt",
  "key31": "3poVs3XAVQbk1EF5Ub7mnGGMHBcrnfY2r9PYPdau3HCFrqKLrLc8W56kkTjT8RTrToDwxwghvoYJWGdYdyb498rM",
  "key32": "2CqaD5XRYtHsskHgvbEyLFUPjhgFpTNRgSrgS52gKmgiNbK3e1388ZdeCPNiWtAcU2qEpzAAyxRL6WsmH7HL8opZ",
  "key33": "vZAdPtrz3wDcdxcWdWkYLV5n8mEHymAPjFWUcXjWuAeA5HUnhLyWYGNJGzyTrDfZ4Duyd99WQKPYfkB7oY6qgPV",
  "key34": "4e6VDA6T4AHGh8BLdUUh4PL4uMdEyc3Y3nBWf4nFxtLC91kfDFqvV8n5hu7VpSWWGVQgxUGYFfSuKzfHKdmwhD5H",
  "key35": "sj5W26KoYrWu2KrRB2ysLZZXRecwkpg9JxMmMasKbiXfVwjvdJ9hdKE1iWx61UvW9B4M5j7zQNyqsxEXgJ4idC1",
  "key36": "2tVnj2VWXMqcbz712VXrbuAwgg8hYcrE3Aesn8WoAns4G7XxYsNp2vAWtzUYKoe43z5Dc7KHCsv7WRDKLqn6oZ6R",
  "key37": "2oEp3d5y4qJKJqHdkornFAZbYJpcUEag5Ntvttj5sfVHxiU4oYpfzf85bhwVavLvkiGkMdvRyLzmfWKAXME5bUjE",
  "key38": "4P4L8UZKWCscxyQDJCWm1GkAGMhoRK9xwJ7yWb2sGmZbDt1Hiob3394gaixZCzKVJAxzVwQyQcu7Wn9nxdzWsnJe",
  "key39": "2mB9FR22WoJKs8DB3x3qVi6jjk78jTFwjt75znP6t2mL8LKGHb3umdNX9eEx8517soaMusPKCLojgtXPgMkwKcyS"
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
