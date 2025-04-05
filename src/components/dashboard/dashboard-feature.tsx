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
    "4AiRvdwvXAobYWpmNEG4yKpUYAYwJfYKdnh4mvZqzPjdVwQFyEkqT3ej5nb3CcSsRp72vWA54HLwpnqeDoQ5x7f3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WModLvUSfDDxJN1ndPQQARWPVpAnDF6TVsQNZjnzzLBGxrCqPAAZnNN818dgCUhsdTFqK1UZGEeP1PqN7btBo84",
  "key1": "5zd3DWsAxsWGPXpmDptMvE7i53Uqp3bau7GNZDKFceT4aBhBzT4ncrPpu6NgGCFbWMWE9dFpCRMDCLpC9stprvrk",
  "key2": "2PbC7QhsXy2Jq4oxyMaygcXucnBvp7gfzeeEekXz2Q2k75MPHaygB9C1sG65FBGN8rcpBrKD6Q4pm9D5zX1shGXx",
  "key3": "2uigSQJw4LpuNrXP33KpbfMcza6BzKoByfGbrr1nZHiNrR4KnJq7tnqL7r5r8KW6BjvYzHMaUtR3KekxeWStaPx4",
  "key4": "TfFSjaNx6WW93wNaTFP852WNum3LqaPy2QwSJsbyaAivgzTAnfXEmz2BZUmfL1DLJzkRHS2hZnh4MruZSaEJvpB",
  "key5": "3WRrYK68W1uWFMwL4yiffscJ3UEbUgNeySH8TngfRjZBiidANaZFkZSptgm8gcDyQugThCTLGccpNGadFVv6rkAE",
  "key6": "jPjHdSTz7V8i3iRrQD9WvvEnGtzQgucLmMy74GajzuaaVsgcRkicmENUXiS5DfTzJ5YJBXFueB9LzLY9UD4o99z",
  "key7": "5exZhJqx4EcCAdHc87yYnTdn5sJaXA25NChmiTKKKTH9xJ6DMB7tJNJde4FbnY1xd2ZgZ8uZXCnd155cYsGeFM3u",
  "key8": "3CNrjpNFqcvSxGyksPU32YX3aZEhiq2xLhZMnz9VpuX7NCK5p2oxTX9AQk1BwAnLovFPRRXXWfYjqxDBt3ftXJVd",
  "key9": "538xxVa3c7GrLCv2UhWbvRmNeT6kbdXdhX4QVByjoFLi8xZNzfn5aZuwyjD6a3mq8aXtxbPmWG8EZXXrVZQDdyJW",
  "key10": "n5bBekDMHe1J7gkxFsq48irk7QWdk4xLqVQpWNp1UWepFDd7Y2C8iPNAy93TwNpZnZ6oM5dUYgnsZDHRiwH7L9M",
  "key11": "3uqdXqhStcTtnJQjhbTyoAuyqdLY91UwYdLaDwXZai5UGra5rx9bfijt5t99BkHKjqjCjhZxwbhm5GtNnXeCP7uy",
  "key12": "5GjSthYczMbWB5uyfkWrKBPpPMDcwaTG7vCd6CpB6eG6WyRmyQ58w7s1T2g3YriMgsABKezbWKHdoXRxFVLPEZko",
  "key13": "5mmoYvYG3xfW1mYvfbgXXKikxHezo8UWnygGPyk9VJE2QwEfaKD26TDacC8ujPopTUynisV18WoSzxGND4WVeGvL",
  "key14": "2KMHLGDMuYgRugXqV95p5kMN1RbjLwEm5HHrSbRBHZkEy5oZ5tf2MTNWY4exAiXFWy33eMQYpWiwXetuESUVUBCx",
  "key15": "4Ndan6r6AGos4mGtFCKRFZ8DCbnTzxCbbyFw8YVKk97K73Zb8truRbCTjMJ7PD8nDdDro2LWJygZd5Xb1VuNaS4H",
  "key16": "6STEDumhks6u7wRPK6rwfKxMaCFCcX7QYN7sqF2Ln6mvDXNC9qeAD1ob1d76rfqMWW71akdJNHY5cKyvcN2h6KE",
  "key17": "3U4t87F3nV6rjJVHcjrubxvQ8EkcUBrwAHcmZVTvwm7DN1hzLHpYuoP73gpBBmc7PKha2zEPye4YaA2WE3XVuT8U",
  "key18": "5isaj6wUJqdkftzdJ4cRDGyqZ1h1oUr4pJ5r5tascm3cxyhQXMUaYX6Mhg5ugn4Lr3Niea1FDTHA1MTSMbcyxfKj",
  "key19": "5mZGDNdtGfc2wrAD4gA3swnD9vwUPMdhfjB951JDityCdoawVyfw4jPBi7XGMfjkqU3JSDy7u7mFFt9dQJpVyy7W",
  "key20": "54WGa1hv7PHWJdZSMcViKH1nwyT1dihWsQxoYm6V8qNbjQScEZkZb4GFoK4byv3cLv39NqbWmdaMZjPeBNUPHXhP",
  "key21": "4ZT9RCoMKBkUGuzjhiRUMbya5yg3WkT4hmkcakhJtTmHBqZhuVRFKsHCLw46uZTX7Dm42NwvCEkaasU2Do3HQPPv",
  "key22": "5s1tKo5NzmSMa6vJJwii5uFjRxQUnCvTETsRhDck7Qa1rk1PkPmDzaP67Aw2979ZZmc6ZukbHS3sdfTkUmB3vrfa",
  "key23": "5jyQxdLqwaVaVBCrjQCMemrTbu6ykFbEmopnZNLXqgxbkevCrMcji7ZGAFf7qSBBvYgwASCqcAKS4tXSKmM2yaLq",
  "key24": "3CuGPeWebzU765CAENPDEoJWJiZLKRZyyj4zReQ1ndrdPiuyMyinDfpPfXhYGbaPjPLtPjnBW7rbeicLA348uwJV",
  "key25": "51PdBRq8BGfTLUdoLiKsLdedmAtVA5sTCg8YxD6crWV15dK356TL8BhLXyE8Kw57ebcf3YRtDAEvkHbrWSiVQu6D",
  "key26": "4Ry3QU8AUMJm7CBenSmu4LKefTBTLhPSukGodRUCVNcE81UZF2BpLUaN8VFzJXtRfLgmqorczZ1vs5FL3nwaB544",
  "key27": "3CKN5y6icMaKRGGDz5PbnYefGPswKibNfMEPz2cQfTd7nVUzHURG7NCWVCmymFJCu6MuALSRjDnsqeuP2wtMjqCP"
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
