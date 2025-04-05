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
    "4AX6PddpBYZErcKpDq6fxEaMgfsz2audrzgXRh4jJmrZeNbwzJt4wAPdwNjpYBYJRr7AWd3S4ATtHooXMk8fdMNC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3opQwtbq6LaNmk8CeUafAEuBdxzygePZaQ89GaeaKgZQx5xvH6znSrEZKeh1TeDwm5SgX6jVATyEoc3WYzwyiMTK",
  "key1": "KzRoQefQm25BXrvUNPwYorEAk1KLcma5cpm47R5Ui2VXUu5Jtrqaw8afDCrjBiQiNdfvWfwuC8wrfiwLRNc9t5z",
  "key2": "5ueEkohfNYV1vcX1H4pLozS77SMjUkAzxvbCPQLcf53e2mnCjPuuwbiu937jbDBWNNf6Psjv2MT1ibNYD1BicDLY",
  "key3": "4swN1YrwPKxvpGbNbcs3zKCnjDmgW4U7ETpzxw6PaREY9kppwCNsDcnWp6NkU4ws6jK7v4U9Zr4NUgG76oxZs2Y5",
  "key4": "3bCPsZNL7v1afrooaZMxfizMEsw6GLLrG9xeX8VfneJdom6GkyHjWxpEGQ6uGqd9ELuhQyUECmYC4f1fxBERBSc7",
  "key5": "4tjKrkBhwHyB4KeoJb9uhWMP2G9VqJxAtP38ByWhP9P9yLSaq34iGnp5K42emi5Nf3jRgEssDL39XJUrHCpAf7Ey",
  "key6": "nbksfF4VFYRFaNFVrKgkTP7cgM6oCqH8r3KWfEzxKmmBhSJKTR6NLRBfQKSnpTUFVsxuRz6jEAMKQW2f61ouMtq",
  "key7": "pfnBGtf53hg5qwMy1jRDa8s6Y3UChxf1YSsP3hexZrNTJx8DRHHQ9KdNmzDG2s7NE7uLW9xYEV1K1uRGTtUEvsg",
  "key8": "2iqg5jb2tcjNjpT958Uj99ujVufmBh4ZkkCStRDZTFuN2ixpX1rs5DBCJiVwBoFMgGknqAyXgYM6JufSXMT4vs4n",
  "key9": "48YqAAyXb3jQXd8eBW7nfkXbZE1JuNu4XHNLAp9wYgqKs4m9rvjrohfuXPGBWmjXy4eBcGfm7TPYGeU4odcYh4VK",
  "key10": "e55iSYjHbBTHHjmjxtoDZpETRWjm49fBVftk5EiMtCTe3qZfaXoQ7tK61RqtnCEj6jP6w9LkXo2UC9t7jGid4bz",
  "key11": "3vQYUeAtJMaxmCaW4Jpf9qdrn9Xy8Lbwq2jFRRxoZvkAiuRi5FPEdoTtzcTEzEuttohQYHbVoF4rH4JBJ5g6kaa2",
  "key12": "4zuMHrkrYM4kWyny1WtPeTRWvzUCkPvPP9ETd4b7uTyF95XAP94qZWYSD1FAraMGWXywibPV7YDFUmCUJpJiKPuD",
  "key13": "4DTaRsh2JQdi46ytfr1XDjN13X4p5k5BZMme1ZYo8KAfcXZUNrZ7Y3kHnWX5syPHTubNg1efjmXURQbmrBZvC3TG",
  "key14": "4YzjWhTgAYcX6nESgYoWVtWik5abhBpqGNkVhk9DWyhZD3KKgJfqWHxqHMSuFNAWUR7MsCQdXGRWdcPr4GVShxQT",
  "key15": "53rFtMxErfVSz9B78CuyTQB4ckZf3eUbA4wenL92eLq9W1b7tFGVdKA693qBFyUpK83CsWt8HsUMtK4vKPFXhE71",
  "key16": "2BuzK2gFmf2HqX9TMxT51CjjQtufCn4947S7hcr4seBjt3DxmxGKFvrFfGUdN24Ao2gu1z34oqgs3jF8cxx91J2J",
  "key17": "5Eqb3kGi7VcrgeQZjVyoFpykjpbS9gxyVi5RS8aZ9bZ6qVdWw2m918i4tTyiRnWffwRukh9d1cZwaczwRtrYbChr",
  "key18": "3VagcjuByBQ4seXzusni1bJ2oiyNd9h99wYUaSQb1r3P1R57PAWr8NaVtxdcrTJ2gsTESDkVhfkRnv1xupgRJLdv",
  "key19": "251YZ7sdS5sJjyp6AWbvEYZmApCJjthvxT6nZyRx1CxYt1cbNo6EuQPJ1ipJBYHmBg1dMVQisuWUCh7JDeCueg6Z",
  "key20": "5P7bzXH7aiX32u254v3ZWhBKHncVd8EzbQsrPV6pij4chaFuam3uXJymyvHfgU5PgoH39cDfPSsZ2inoM1XcYpBQ",
  "key21": "2vtqVFyYx6T94aabkWEuiWww7CoC1tZrj2mMEPFuzNqhj3VRdVz1FsEBCPWsA35b6jgWfWMhonAMShwJ3DfKRoyA",
  "key22": "5YU64VdrxqRkojGjMSMG4e5Mz9vpMTf9DjetugzGinZa7qxWT8UsrJ8eMku4CMdodPkzxVdduaKwnCF7GQbUpbUx",
  "key23": "3qJBQNG8m78CNz7XfpDz5xgWwxPzxenEgWGchC9CecYhgUXozvNxX9UsEqfxYUYEjyUp9sUCspNWxS1ohhdg3cqC",
  "key24": "WMYPwEpTYfiFz2VJEgx2HDdXNwJ77WVf54oCKHtM6uZA4kAJnz54VrTYXH4tZBDcUSy32Y83iKWzwRhuHaaW92W"
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
