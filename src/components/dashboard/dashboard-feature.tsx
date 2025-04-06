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
    "5L2eEdrPrXnxJMJRLa1CvoTJBPtaLy21MH8hAhQk8gQzTKJGkMsKBew5wapkDi2L932R5Nx7X2rWMcRvQgxQhGSJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aYYZNhLsrFAiC6QMHj6zCK6zimTg6K7VEFQupgn3roQsfZyH3Cnv7dP4dGkpawiS2tgqw7AQRn7yXfEV7LgNMjW",
  "key1": "2Ev1o3Cn7bxUQFNWEJqrgJPcgSkPZjXEypiZbEdWvqAuXeFPPkyHxTzHYMaYwpxUcxD2j1o1vU7iQJBsWU8eU66a",
  "key2": "4ag9v1x4GGJeCiMM2yWya5bQuigsNqZbKZAFWe9XCQque7DPokiQvrVpUFpAxtEXrq5QgRJvwutnsFUWLmT8mFEu",
  "key3": "2WZqEUCgr6nb6sQufyQYKAJdbTvkjpKYqXAQ6bL7iHBTVvuKzpZfW6mXTgBrtmd9qi4q84Ue8mo6Soi1Gn41pGsK",
  "key4": "m4cApPdmYTiUnNzJHFYPW3nMV8WHCpkanMK1DWmF6EYJcKui8kH3A1PqqbUea6rFdZkDX5U2C1Nxwo55rMqHPfF",
  "key5": "2oxDsgidHRdgRjtd9nHXtdYjxNLgPxfkCsDWXDVrUNhR2jYqgUvjrHFdKauzqrvJU5RNFnNmge39Zt38awXU3LH5",
  "key6": "4ywkfuWrn9y4pc5ZqvHPgAAHyTWPNtfKPcbcXeNfUbyaLbJHiA6zdAamAQW8HqwnboHBwPbGUexg3uWSTxT6MpsG",
  "key7": "4vLuDd2DqsFy3QJQu87xerVvKUKqeZY2hYef7AfTWFNmbFv8DPhzfJnBFL42e3cmqKgjeBtXRepQDHRCx6GmoWsC",
  "key8": "4h9s6AxDRPvDWvvWSBp6Gk3zAKnYWrHdWRVgBUHs9rgviNJhxsnsu69cZnpawSyjjkNNWPMsPXceapeLmcgew6nv",
  "key9": "DQ8myhDRtyYfQYxLLkEzV9UXjcGmG8uPg59dtpWfPuBSxLLGjtFF3DgCbmbUiBfeiNokLfXrm5n9Ef5nnvbGesB",
  "key10": "4Dx8LyAq5ZyqLPHrg5iMcfzaVsZWUwfuMVcWqZnX6enzFZ1BGhBCrSz8dfgcsUnzJsoV6s48RPGeoQRWGSt8AWph",
  "key11": "45RLWvZjKpDtPevct7o1QJerPVVcjDXDXsDeBEtefHNX83Luc35gidkm59jZs5Db9qzF44z87jHwbjAhQi3sfgMu",
  "key12": "sNBtZeZLhoNdgSAae7W8dHYAmBd6iNf6tnGB61EWHebXXH4gywpc7FkhZ75CdkHBXG43L9avRrqiRwrepvSUxke",
  "key13": "4dbgF1LhWQgJsoKgnJbEjgpJXvRRVBzqnfEd4fLiHCVpyktnfdqX2amTYgFtPe96GNsmE3tGA2pmRygvnWCfmya7",
  "key14": "4KPgrZTbZZGPoGQEkdDfUt45MLodAdnnvcG8KsZ17xim4JVs2C885e5zm6NjcW87uQFMF1pQmLJyw3iiJiA2eTwL",
  "key15": "3UMUMHsKPpexEgzexnQkS8pDvKEfUWAgeiZSAtP7NUFM45vwU2H5yQFgS1DBBbTt42FjVa88TkyhVyYzAUPEEQCr",
  "key16": "2eRUFZQKPSDSPm8vK2uzMVSYVBAAWQiXqsx2RafrSE2fV5ygr5HRLG8fNkrmZtaHMAvfgDFBmNiajj9WPDZja7nr",
  "key17": "4Y6AZKW8LQ42DhpktMBsgA5wJdndbNmfE4VE4xqhxEk9oiZCzPSPp3a1TpXURbN5aRD9MnwRvAbJ8fpeLrL8VAB4",
  "key18": "2KxLMqaaaPB8g6kBRyxhFf2omPtfXQqgYoYdjVBfrEdwFhE2Nomh1byUkYwEiawYmmg8i7kYk8sgfJwMtazPnemi",
  "key19": "4VzSvYyrc1w35ZKw4jHdcDrZ5PgXhtaKVkgGqojAdPRQnbfZiow9wMDV2c4USdrsRkXg3v1TF4pLQbkUM87q5XQk",
  "key20": "FawvBvheTkkRE8nL6LeE4LCfxrncoWTM8M71gZPQybZ8rGoyiwpShUpzTQM5Bh1kWAoATeYFNxTgo7MUuJZ4SNf",
  "key21": "UmU7RMTthxanxQRN5U4UURPpg7tgxW2b4dRK31y4wVyq5XoQfpi9msxw17ppopXz37HvRiySHQDBaEkCZMSbew9",
  "key22": "342bEusZqv66oKib5yZqRyjoMmincuuiBVqhYUDWoX7H5CznDHXTdtot1mTGnc5dPS3iARrK6hS22LkwQt68ndfn",
  "key23": "4ZWJsyaWF3EF2Vyh1VWrbkVTZXmwekHHVG9Zi6crvvihh6Gzz9CRQ48hajrYoPXWpriiBPxMk2RpSBMiwXREELfV",
  "key24": "5NHr9iqf99Z5iQvDFnyZ3UfKp7SJ3ArHdC7brNdRq1MdS3o1kZjKPEMctHJ2HnZxnPJr4RBjbE3evmT13q2S6MdC",
  "key25": "49Sp6PmL4bxyJnEdznzpP6HeN3jethvMdvhQqsv253tHhcbqzVQPHay1EBjyUfXrLYGvqLGWzU1X3AgXUhsexoiL",
  "key26": "3Rx2i8kY4ycjvcq2AetzqdN7hi7r78DdDaL3zr7oxR1FVAFudGBMUhoPMuvGcnEbiFY3aV8XXrXfmem7ANXdEo1Q",
  "key27": "4pzUnUjE282kGmpHAMSrCE4ojuNLPuGrNMm2ZdLmjcYT7nZrJAGev3pzAH58vMNQ6ctFZNicotx9D8x3aLvBnN3H",
  "key28": "5GnqdSt8qVTucgVneZGDmSji8koWB3zdsW7RVxiqpyUJFWDQpQ1SGTHxioxwdHvcwV4D7gqcfNMmXjH9YnvpgyA6",
  "key29": "Ks88F4724maMuaEqEzQdqPPDCGRRj3Rrksgn547YKJNnX16BmPnc4swyav12zKnYFyLoc65uxYwoigBZXpuqpdk"
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
