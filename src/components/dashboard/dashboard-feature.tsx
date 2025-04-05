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
    "3BrW5Bpw72Mjzk5LG2a1uCjR7FZojfTMVfLCAcQDSQcDZzVzfyAgkN1xwBXNyqMZQ2UwQUiRzne9RcdaviEhA5FZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cx591WMBzExesPEENq5xp5tBBMjqdVhiMrhFwS5mfQ5ziNb7i1FjWEvdreTUJEyte3LGEuYyE11LeT4PhrQn51w",
  "key1": "5jCYCVQonQs5ec8VDXgAZrkBP2tK2sTz3XTaMSb1RS2EiAwB388TqMjKZgofg8XdUVxzkwF1goJ3fpKtxXTsU6qK",
  "key2": "4XJezrZGu4X4mWYp52e3gi1hDBerMKrBrQyNmXKfjJWLkXFBVQYTcoddVEqta7PujJrWSUV5ZUKrLS8gtBw6Uh6V",
  "key3": "5sXaK9MDwJw2exAdan5yP6q5ofjKXySAtKox8N1ZsZTAXJYdNe5HgqFx9tuaQHA1fpzKDM4DmHtWJDU5DAFY2eFY",
  "key4": "2omLDPMZfgDdDZfs6cRorQBsiWZFcA8Pf3cGiZdFQK4tuDBoZeaV51rnTn1drHdcbq97qATVpU7XmUkWKnKrdxmH",
  "key5": "3QAi9oDNPgPDhaMJsLaK3DxWm1VyHuHNefq1seGxvaWmvqrAhjYMtrURz13UDz8ammLsSojERPXXd7acVniWm9qw",
  "key6": "46GFGCkCFRGtGQaskt5LoEVLcBjj1Anp7nNDhe1id2UQ4uq5wPXgphz7C1MVtncUd3qWiDcva7DNZMb2eogyetd5",
  "key7": "3SzRxkvDC4yo1VaZpnnyCqToaBd5MrDfwvpNPG6ibo2UbgKLSsDbrqjz6nZ67kN2v5Q3JY6gDDSfWnzhsx7Tfzph",
  "key8": "2xBm1hfTacxY3FgTwNEHrFdcNp36yq4QFCcDFmrzbtXDnk95V4FhmoNR7yFkcAhJG3Ki4miSw97c1H7XUafcFuZq",
  "key9": "33qMMJsdi5cZVZgvAYFvDskbsFA1braEfWHA3Y7wWyUYzWRqC5UJBMHfRWXrACLbR8fwdPXq1nADZHHLSeEXrC5K",
  "key10": "sTiWbVYw3K2KBWN1uhLzTBxpYmrt44hx8yuP7QZ4DjLakDLjqypvsW1pUtHgTD47VTycLWPrdrhiBLnfFWbtr4i",
  "key11": "zuQmYibDxY8rLzPXyQkeVWGTAFKqfH9Ga4N33hA2LHNteL8BABUcbFeP3QAtcpjLDMeoFoaMJknjKMNu3KCwsdT",
  "key12": "3gd8VtpFL21WTtSBP84KbzrjSt1nE4LXTC3GAnWHUpq9dhFgJqsoojitxnHdGtxKrZ84enrfRSCQC6peFZH2BXRb",
  "key13": "4iSgcFuXhX73RCjCRbMhnPXDyu1ATwtXjQME8rUXNHugFpi3VaVcCFmzTSrnqTf4CR6GTmCqYkNhVcriUfyPpZvo",
  "key14": "2qwchy3K3tVqZVXKCMTJFkXMp8HkZuueuFTppMyseZRdfHDx4Cjk2PsFhSkRPgkjaggFaEhpazEhJWkALaP7nJrx",
  "key15": "4pVCRgeAJLoQEzf8ihc4z2hf9SjokxUKiwUQEAFBCZ4JiArqU7SqNMUTgob3jox4RWDhR4HoyTu63HVsYDJQS4Ko",
  "key16": "2HXEmVtShtsXESe6ppnZSb9L3dajCvoTcqAGTRXM9x7RqhoXtL868B83XSs8v6R6W2bR5ENiZQwQTaMpE9RYE5aM",
  "key17": "y4xZTtGCXfsqjz3pctzyqdb58M9W2ZV9821VBNapCQ6N48jUCFmVE3ZbB8sZ7TDCS31WMeVAkFvTFwjHkoQJaFD",
  "key18": "3MzGKF6fid8J8dfAV8GeXdE19HTmqRywVaRGhSt2GfVbUp8q5dA6ZN6rzk6kUXt3XVuj6qxwK6USCNCaXdf75EMx",
  "key19": "2t2XAHZDx8ncBfegmofcodpega2MuoHGNfPmJDLQVJhx59ix9ieGJJfdkfpSvNrqsk9qRvU14Vrj8sGXYnxUXzP4",
  "key20": "dcxfYTnXacXjX8d7YDgMyFTUkAEbmFGVRFtF673jBpYVStQVnuEhKL4iVvJcUBVTLyzw8pCydSZfZNhX6Hh7ewg",
  "key21": "5i1CfQJE1bPFhBNvHc7XYMZZHM2MDdzRxuusy7c6FYH9c6doBasGaNWLoKo8LLVWfWLcdxDRv1YdsNwE1S33yNBd",
  "key22": "45P62nSHsnEzVazVPkgy3zZ8nksdXjqwUfiWGVK5Z9ABRxLtwQMpvqY2ou9rw1BoSdfyqKWc4RbVFj7A6j5utuz5",
  "key23": "2zg3UoeJdAH26uag5C5g3rZeBRgL831XZtoPwA8sqohYW3kGdB2t4Faebnvm7jQKWyvpFrcpc86w52S6VmPgSZDu",
  "key24": "2aiVW9Qzya4gGNLd694P5EfyBFvaRiv42gpt34zcSEtmcYrPzqKwpWdDEc8EzKF2mUvJxMLF9dzYaFfFAEYsu8kx",
  "key25": "2uA84BkdY8H6c2jYCfAon33c91Qow3EMcUYkHpXLykJACgLSFKnwNLSGUfDP8A3kFnwyT4ERRrfF6M4mbk2qUJx6",
  "key26": "4cPx8o9LhvtrtvsQVaxsDWxuD5aLqcGoYs94BiEbEDkNXeStRrh8fQh5fuuHzxAxLKoYAGVvY9EV1HTAM8Z6d3iY",
  "key27": "4RLxDwrN3vuRyHkS68e5nvmXaZk2j1iZPZCwZybawFmY3o2s4Y11ssXsuvWRvKB85RXZW3CdznNBTmqyhhwZXXUV"
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
