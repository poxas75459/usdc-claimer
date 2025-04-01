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
    "4q4bAFpY7aiojuNEbYPPMLSTwGfbvnCyx5utziKCUXJASjeosz6GWhqDVw1PmDGs8KW1eaMAFWUKRQPm8TnBpGVv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51ypNTRwCNDwJe3mqf8HsDMb8gJYC4984nu6Vakng7CqksHmqMNh3Pfingo14i33eVn4tc2Ebq2z3gE9tAYMXcLU",
  "key1": "nWZhbTqZBUxoGE24M76thzQEFesYyqJbeMyhpUa2VLLB6rGrVoaUzp7MvDyRD64piKC4n894cewG3Yd8UqH8S2d",
  "key2": "3w49URFN1QJKKumAYdgXej9AhyU5UZWDGoBPNRhkQun6GUnYVUDPkNdpBHYhMK2Fty65ePzqfD6Yo4U8oqSdUXtF",
  "key3": "5mBA3hoK323xQkZHhhqWf6facjMYVWKn2ivGdcnPBXwvSogEfNiMqryxPTQpSNdaStmhta5NCzUXcMf5FyTyaVgW",
  "key4": "511Wx8ZCacAuPryrCc9bxf2CSJcNwS5L6ULx1n7DirowkwaR6XM5wuNXXt2ohMTZo4EonyDZMB2gVhFZnBzAFsr9",
  "key5": "ydRA9mYDRiquxukSDhWw3KaDLq62f8GCaPGzZgFJgPEmmyss71bqCUBnrjQQ4S99DKt8gmcNEtmcNbmUow7QQVW",
  "key6": "LqJ6MpZVGA13npd8u5g24hRQfNLmAeGZ9j1XvVbU5ja7vnjS1yp4JFAqeCDT9Djmo7p3AZA5qsYuXnaQJs75AfR",
  "key7": "2VJ4V64pF95RiFWtedDx2ndJQfhd3C5x7KfXNVvMVZQWTTYKn8CmtALrvuKHJwPvFy2LQ8nVFE1YAWYBfTj3FdYb",
  "key8": "TorfW4mcnnbigVUQEuWLLh8DmpaygmjFXE1rn6LN6grRjbP2xr3neMi27KWAWiru7YrzPEfVKCmuv4BWppCMo8o",
  "key9": "tsrT7PCMuwaD9CfcDPDYwxE9szc11qVKQV51gMA5KMAopLttHce2QgrxWwFAf79zfJKKUC7c1xJqm6BsKxJN9rB",
  "key10": "5zSY5ZqAndp7TURKhSEQzA5KpptfQkk87tKqUCMDbCnepTcxRobkzKDxN9oKdGCsnGNhNFL7XousiiQj9T4dnkBe",
  "key11": "5nWrT4pdJ9TEdNzniU8L4t9VibiVuUe2a4wYpXjKbpXuHShQvpBEUvuJ9bdvQ6XAoXc5apocvd6rvzNu7Q6fUppf",
  "key12": "374TU8X6rt3anY8bBz6jNnbB9epR4YhTShfUFV5zCozcuUvbyks552H3nbqZSGxSXcdkLdZ2Xkva7ajYJhhHLtTZ",
  "key13": "ai82RTqhqCh1k4TxX53T7CWiEUjr4AdcyNCZqD4npmdZg6fatfF4fvH4ijXm1FniBix9V4oVs5jS9mE4NM9Q2Xr",
  "key14": "362asW7kMRvdgfCcHEhRJR8WBuvGLUer8FxrFS9Jtzs69urUgtvHFFWDfYnKfd5Zb7dZ4teKNPVVooqzRkt6Tgrh",
  "key15": "R1ZydxENMLzY2riZQhWmiqHdBn1umYevnQf3bvZs26KzDXgVKsgqpRGQD7yWqwJKmiMHaT97zihNfwT9xbLk6af",
  "key16": "g9JSFva6KTfj9nrJCSLTjoJFq8WGoAMGoPLgvNq73cV8i8bjUx7umv8NmohiGae16pcBzrw3Rs5EsrWXmEJjsaF",
  "key17": "41wMyVR8w8mjRpLfJxnm1W4ERSjsnRBCZCKxCbC9gx13D1AYcbXNwkBFDSu9mxsJX918esni16FUmsaAtMo5mSJj",
  "key18": "2kbGMQ2kNSiwMA4fiEVkoP6RQKrK4j8kE6iUayQLR2xrejTwhdKY9uGxSj2kkE9knba7usjnSLc11AbaUkD2htNj",
  "key19": "2kcd6SeWF2ynaSzxjKaB2YZxujWmujsQYG7KkcBNs5obnPZSazNpq42Ed9JKKCBiMYrZtFSGwcXhprv4p7mzQekx",
  "key20": "5eGgZ98aEtjbnnni5xFfcaYQyxssuuPm9vK99h8wCUZsYzJFpjk5RzPUg5dzKcS3Y1VBW5h7TCjpYxLc2gtQ6CpQ",
  "key21": "Q2fYfdo4DgrFnyFzdVr2mtoXzECdQLEdBTdRgBQvLKMpHADadmVYd7tPezjxQTn3RDmQkwCJexy58WPSXy4hthK",
  "key22": "63SwNNdFQpZvKKVVC8AJXAU8VYsgXgeZA3PHaV8gtzmnt6MMt9d6bBkRrNJ2U6pWn2eBKZFXn57bspsXFa1Bk7w6",
  "key23": "4mwPMzKQjhtusRexzp1FZ9YB2c1mJXaVqj2rgTQwDUXzD8rsXiECCmLp2KuzquxdMGWqTW5wWLLZXou4C54r1jCo",
  "key24": "7YSPuCzqwGjvSAgAMsQtjZ7vTtbug1ZLg6PKErWQcRFLJxnFH7PujvqsX2xhGYMzGaq91ePpfoRSrMdBDS7iR8c",
  "key25": "R1H4vK7GArPCW3nw2WcLDuWphrLznECcF4wYzAGWEyLF7duqYZxwPZ4MPK98qmzLtFjvo9QjyvkUjF1H1vCs5YD"
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
