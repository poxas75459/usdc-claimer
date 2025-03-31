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
    "5ghUpPJhQ7N46Hz5kgggZf2CiETnGMDD1LncwC9rf3fQ5cQKJgP1VFogorB1txmLBEiAdVBBqhRB6Lit92LdG6k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vHGGBrriHm8W9wJwTUQC6aJNa4LN8e5BBKrdFS84vN5ivpz2tTuJ4AjH5SAwPsD351pdcJernJmYg5zxduhBzg8",
  "key1": "2ZabBrVRu68cRuEzof3FuLwUFRiUsas8Cgta1M8EoHtddgTwjo92dZSZGaMmVzmEWqRkp9DY5u4LCbHiqEj8kvgY",
  "key2": "57ZwnnG7tdfh3UfLg2cLtqAeGtUmgMzfQT4beEz3pwo9x4E9SscHy7MQuCm8Z2Pwybj3NY3WgqBCJE2s6KUvahAE",
  "key3": "5QcSUuXsGzosKZpbxajQDvJzSUQFYR7xgApPLEaNAUnc6r93TRGdVWbphdBBugqC5GmDyqR1Wz97gFPAKFLELhkh",
  "key4": "42VZoGkyQSU91Vx2RWntEqjc9gPiB6ZwpYDwT6xMR1xQVgPiziQV1ovXvai8e9LhuikGu3jaWBUs1NMDTpikCGc7",
  "key5": "4oshbw4BbRjZRYZspHrarn9xJoLCtCoHeJkYpkedVY6fhMoNqiKQYbBzLDTmWM9GBsKcUE92oaWyFWuUe7tFEcGz",
  "key6": "39EbaSBfEyGA7iYxyhV29JB4w2hEMKKDBNL5Jrq15TJfg5FqUeMdJU5kKve3aTrEWqzrasGF6BWgJJ94KQxx2hta",
  "key7": "2VsjobPLG3Qovcz1KWc6kphe1ndXwCX4bpLqdrrzRzQxzEaWGRCw7LXX8wmq6XUSZVr6beRD5mTnZ2qm8yTnKfRP",
  "key8": "321D4p57kdDNJ6TWep3dtcRFD8gPfXbp3hGCS4q3jWtN6X3UpY8wtXyY3VEgd85WET6d6hfwBPfc2kPBqgf1Pe5y",
  "key9": "4rwkU4GAsByy7eHXZuoCi4Np4zrRJxyqnqo1ewCKErFDCxYJjWhsnf3KRGSjqJ5ic5BTLm8p9jWCJRqBSDsKRN4A",
  "key10": "4ueb5EvNBYifwwo3oCxEqVAteveU5cHujhyjeHJpiL6wDvYQe1TtTMqC5ic8ccaJ67afDsLQkXxwWKdoCHNj7gym",
  "key11": "5ytQGdrVh1NoD3FKNXbKkNSWP18n6jiqvohyHf9gBQep6Ri1syTbno262MMjDnqqCG8G8E2H3Loj5qgNyNDWLhZd",
  "key12": "oD2jQt9uwHZe516WkJ3L31a9keWkhx6W9hGsBDD6X9cXpJomKCRhq7P1pQ8mdepk6H2BPmctt6Jdx5PSPyKGrye",
  "key13": "4AfZMB2gwCYRRPzsnheort2LnURuFvWfnMZ5HTrtf2aikzLWcuqTpWBU8MMhL1auK32DEmTSaVpKMTyaoBSmGWk7",
  "key14": "4n7siVdzPPKxPpfpZoJa7VhZeffrFVzzHC7kfqULnXTcGS8bEkbKjFEDcVGD8tA4MdzpKeETX2wofeV8i8DLGrXB",
  "key15": "5VwMVv9UgHBYaTDE4GZuvzu8Hxvy4MtWa8pLdVPPZp2GjMS6p5eBDqXLUBNnNgyDdBuTKF3QqnY2MUEvTUYeAGJP",
  "key16": "3F5QRkHhgG4BT5Siaw2RzuPRNscsb6Kinbj57RXAhWVxBtTwGYRQZngSMqJqiq458XzFsHELGLyfXTGi6E727TKZ",
  "key17": "KKka7t4CNubg6cPDSowphkxTY4Z1Yz6MUMTvC8e6ZbtqFFweqS72T2X8VW9LWg8gmgmfvwNi2g9tqPBdNpQ3WT4",
  "key18": "2bmGcnwvuRJicuQikC5bU5jwBQmsat6X4wFthjf6JaERBw5QdSWrqNKgZ2bSENAryzs6tR2SGQuH8pX7Q2zepTFQ",
  "key19": "5qGK1824jTL3LSMrugS1UjQSH924ufTLamsUHZuPCp3DHqjqnrYss9P2PC14RLXBVk7vK3FYZXASfdoMki4JwMKG",
  "key20": "cmNCb9NjLD8ZpLxaDcpVRs1RxReVhk6vf3rrzmTD1Wcjfe4Xzxsr9cLZNJ4zBAgzR5KBXjzuiLUGxao5UmgBhCt",
  "key21": "5nFJUcoqHkx1CnSApAs5xw9T5yZL3wyfWx5zQAEq43Wf1PDqLCM3GyiXVR1FmzXA9kLH2oPayztWAVNbJamMnxsc",
  "key22": "hMcNXWPBpyEHZKtEyFgxwhmFBxBQhRv27qaqEBwRSK8cKwdntH5iSaw5uiSAPWdvaQ4Y7SK2ABLht46fmFjc5AS",
  "key23": "4s1yHSH1GX9i3TVBtQNz3RTCXKis2HUGRfaVo5uLEPnjjj6zrzXiVPoNLJZxCFDNwikRRXj4zffCP1jbrG7TcfZr",
  "key24": "33cQZhiutR1NQwnwn5kF7MwrqXUCW2WzqPgfKYLYCmy5PAVt4ZHGfgoJyFQZ91DAN7XVYmU9DerpX4pbpTTmxQA4",
  "key25": "4d1Wv57ivCjFjKqEKErVUZHhiKYTBsAwnFJjbFkYgVE98rGtxjF5q19U6R6BSY7AqsvsjDMfgg3T58QEcZbqVXcy",
  "key26": "2xLsvdWctzJz8b2yPinzvyecAemVXvmFKNf3eV4uffwjLE4Ka1y1ypr7vYFQ74Rv9wWTTRFwTrMUFXm7R1bsi9oN",
  "key27": "8uSSzadR6JV8FHEMqrQQzEYFzVLubN6oFJMGHpfZKhPZQuyygGGqqDomXPQku9wycvnvJKQtiNW1ie89sMpgpkA"
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
