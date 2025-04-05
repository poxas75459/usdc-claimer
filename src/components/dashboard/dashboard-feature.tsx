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
    "4RD6ZaMUJ55NFnEnqiB8CGX4xGQD5xaqZYQVw5gazpEBkAUvh9eJkNyNSTtp753h2e4NcaHqXMfWXoFmyi647kcg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BeEQGq3yM8vhCbpUzaWbh8jjyMUyckuNEFfssnrg67EbZKCv4eZd4HPfwvnZ5wtVaJwvuc1sSob8Bji6kWpG9Sg",
  "key1": "2Ji3iRBZxLREKwoVt4M38rc4QMtqXA2CDHaYZzsWSeXpEtUQzUTC9xpNMMcHLdrzbTXwsjEDLxEkq2RmaCAftoQc",
  "key2": "4EhWJkN45R8gAg7idMghQ4xqLYmEAEgxpce3NDxnV2TSQeMedPv5D6FLHeMVm9ijSCwJWgUxKgVxn7XNrqmGbcoE",
  "key3": "7fdS4DYyr3jP3pjPUX2n3y3FXRktkmuLJ29Q8tXWw1ZHTw9WSGpjytAnsLD63TXEsVG5HAUrBFkXtsaC9ynruh2",
  "key4": "3VWmk8YXWYabhCn654KcyRECM8ka6tZCfqt971ZpE8vFyqjECnPTDz7ebLRhgE1k7Eq5tfy2mwMgZvYqbvqtGYgr",
  "key5": "217nJ17hVC4DiZtWqZv3i5SGmBM4ruyLH7jJToPmJiZT8BFNM5AirR86yRLJTSrftAm1ZtAtieLQ5oDpW19puyZe",
  "key6": "3J5VuXV1hHCgnQiJt14xEt6nQNs5PuX85SUHcCQCEwSfgtRzrpcMfChbNJhAQogwErBHU7PmPFpEtnHFAnfVvWxj",
  "key7": "3NFo6WvnXFa4cqURsdpWtnXZvQBPbCasSKyL1rUYNpsC2su9BWat5hweqLxAYRHkhSGxtySZgXED2v3mZrzYn4ef",
  "key8": "5t2FHZRtzN3B9CLaS1qdCkRE7CU8om44WJxLj4EPXBK4mJ2jQBjQDo5wqNTQBBKYKomFUeCiZhcCHB6gAf3bdPGp",
  "key9": "2PhJE1Z9pv5wnEVePWtQjTnYHnwrLcSnjotvDZQAocee3TmHr7zu8NienPUYy2Lz51p2y6WZn6SHHovbfwbHME8N",
  "key10": "2xPczPj43Xorz5X4idGw8r4GQv5MbnqzpoTDrtGqy7JVyQ6ksET58de95TapU8JdfVhjTLgCZbzLLg9XXF3YsBVW",
  "key11": "4Fo5MUzqrSNUbG49aq7Rt6c5a6YzRzgfmW5qtc9wNZBaGZw6Tt9xerEyDcGMqZFpgPhgQGMcLWHbVEhj18VdEgRG",
  "key12": "5wc5DPLnoaS9VJbFvK82gVLr5HhK61VLZ4HnWRbGBVgXmnQtzYdSbcDfvHJQGaVvT3jyZhrwNgNq4CcpKTmy6itf",
  "key13": "4DsbfaUFYCr352h4YtA2PF3aJNoewPvMC2Qtc3gsoSV9EuHx4ds6aa1x6Vvpai5LX7nn3xBsxozcAsSLteiD6pGc",
  "key14": "5KQz3vkZF7hNeVtViVc227KPdRLkvm7ci5hHoQdd32duUaav7PTFv7rXUzXuS5w1u3tHswVsj2rNDSngRUtdkw3R",
  "key15": "4vstxhKvEnHjmmb1WvvpjexzULVt9NiY1tZAKVGtNq6pJJgwAJUeeQ2gPcYqqrGBBSJ8fYuyyJLMetgGFm3NFPkc",
  "key16": "3JsvyiZ6T6mTbMB3GjG2x6Vj1KjJfBqPGHiYAMimZX1KARVkhkkdgsAfPyDV5L7x27XqCU8WfVApcZ1XUNmis9wG",
  "key17": "4KtkLcLXiLKNSjRBc3iJkU2YmpoA8pYFuygBgQRPVUQFcQcVUQfaGsrJjzAgzJKNWLdPozmqSKpcnWUsfbbVjC1e",
  "key18": "52BvDXjJMDVnEXCVCvqxgCKbtBYtxE1NE2LkX9XCLHrev47ukYHj4kMzsz9md6gegHmt4gHF3KBzbZzZrVU18v96",
  "key19": "23dyTNseUi3rU5PaRYTGNAXockeSQSbpyUMHUaXj7Y1NN25f7Z29ZEnb5FotrKocuKAMkkMiPbAgn8GdmHpPncrc",
  "key20": "4ySahec88RvPx56qhFQRh4c9RDu11NsQN5SBFeF18uyRJ6YQypranu2hAJ3JueWnERnZDzifKuHTTn1U4nKSSeQS",
  "key21": "3ggoEaTg7Y37e5yEeqMSHNyGQLgVzWfTCMezWdQDngUC9t1HNLaMbAkzFpdiDPmwV6nLJUUNLhxdgiiiEq9i4YXh",
  "key22": "UcMW1fpSQRAVpSscuMha5U9s819ZTnFy2NkAroJPgpb8ZDBLGnxEPuwoqsCZJdjLf9r5VKJktVkDhnm41ukAqB3",
  "key23": "5BWQKM3WbFn6aMLmQgfWM2BpFViSC1q8DW6ncpcVQPeTcz33ygs8Lo5WygzYPUf8FFd9yRw5Gyb85oTt5NNYYnnj",
  "key24": "2rNyR9vXHneGNnDcu9sFN1wrRQQAgansnjNHcMfqrNNgP5CtuwwnLZ6ttS1nd1KVAdMSBG2ooGEC6CHhkQKsUF7Q",
  "key25": "ZFnyayhb4s7jtNaw4UEDajMtXwKsSRZcR5E29H6AmKYqr5GFLjpN1B3ot7Dm2Fg51y6c18Q58Gj5MjxTWS9zY9a",
  "key26": "2miRqZ4NTR5rxLhYvqL9Du3E3KXMqCnJmrF8XzC3RmeZVK8JRfhUPXZZvPrsJaEo5b3F8A8n8tS3nVX4pFytMMcs",
  "key27": "VDb7qk533KNMUbFX2AWKAQBrCw2ZASgGkbXTRJjAdf4RnEGKznRVfeH8WYdBj2wJxFGMw1Noocm3E5voN1bpSsV",
  "key28": "4HuA3WNepkm1gmg7tp65wUfN84rzfePLhhNpfEwrkrwAveJBWrHuDFGTXH9bLpjrEdpsYV1KkzS6aBLQfuypd4Re",
  "key29": "56irsUjXA3VChQxjzhS2RLtJ8eVNG6iFxtwhvNJ8uWH1mQcHYahoWaJJo1hFmaMbWCBqZjJgam6FhTLtUc4QsxJJ",
  "key30": "3Weiem9aDVh4sAKDmfBaciDQeBYxNJydap6B5zqsuqucATgeBvpewxRYg7fDnXjamqfxXq8Eq5Ns5Ck22RJDNizA"
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
