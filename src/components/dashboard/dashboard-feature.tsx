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
    "4vn9r4bFaziyioR8nUMWK1hVTyJZZsDD25ZhiRSDuPg7z3QL9hGjDrmjyUjUS1rL7bqVX4yMU6JaDizp3EPytAzY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tYu4DQvQPzcUMjkPXM7EngZCyKHytEqPjQ1JxaZkchte2DAyCJFLHomKtEiXQYc83dC8iarSzqzD1mh6UdZQu3",
  "key1": "5PmTqSc72rx7Vi8s76bzi9C8qo1kcRq9VqLjiQ4VChZ1bMngejEfmJk9XBjTQfoBnjnqGivPrVcXHdjr5VB4BwhF",
  "key2": "3wUngycuQSxa66jgKjrVBUgtcxUbFyece8UuDeczC3HhBVRTDL8cWYKU5xiiAGJaE9jsMx4MzUCi19poF2uVLWVM",
  "key3": "2yvUWMpAGHXfL31Bbxp6QjE3R3U2CJbAvPzr8qhQa7t1MMbGKXMq2yJph2Wd2SAbquNqsn4WyhDdfYUqYvGZ7Nk",
  "key4": "2CtSfeFtmGR3vmD63FgD5PQEEHWpWq2zREWi6w3p77rgmrcXS5BEwMBaAZJGFyEyCFfm3wjaDhZErgqGm2TV5P9c",
  "key5": "3RkwGUVdb5YfNEB2tZf5oHPKDFaxuE2WPZ8rT6wcsmEseXr8sv6g31JNke4Ggz6yLVX3DZH1GxUNb1mFthUyWGHc",
  "key6": "5AAAELwSPRerwoQiV1Qka9prN4UN4wtoVbPxXTLbH85XD19pyrqG6twyyHhq4Bba6tgXDad12ZtesWkrYmSbGjmP",
  "key7": "2CvMokR9nj1TtYn7FkwudG1okiEapxT3Fwy2cXxLsfSeVzPkN2uu3MjhAUjYUEjJNJS9meDZw8Ya8hcTktX5nnWV",
  "key8": "4SG8MU1q1CuG7zyAYe3Z7oC3Z6mLgoF4UukP7Uyw8zXucCg2ASoPrcsnVfwgsiC96dp3Zm1Vts5B8GcKWDQBHWMk",
  "key9": "vvRfNdMKpm9vMKgTF1uzCv5kVz9zGCNbJRaqy7AroZKRUWJLJXYJbzHXoyengCKaMfN2zb8YkADGYD7rgpJyV4a",
  "key10": "4gA6rMRL4SffqDBbXQmAdAFVbkwouarKf8pD7TUNgtQUAWfH525XDGRGVjYKmypKSAkahSgLxmBiq8QemDoZ7ZTA",
  "key11": "2CRvdqugdLU5CWCDKHMWUUSZz4c1M6WZYeitY5b1RgyNmWLm6smng4hvjVCZpdUA6Z84nBgnPmqkd7efu2SppvMp",
  "key12": "4VGqpdT8QujLtsHCLRFAxPF7ek6E2K3E1oCYrRQfX63hQNSM5W1GUbjADWJCMf6guNtKxug5WWrUwccvpYBG1uBQ",
  "key13": "3eZMX89GJBXS8Ub1J6FAFSem7fZZYkZ2JwFgquWBa4CWCzdQEg79UAaQC8q6KvxkeEV8ZxhXqPXvS4M82Fwhc5Hj",
  "key14": "4E3zEPZUxz8WKd1PrKvD7rLu98G4tnn4vXR4ssfBxrW5TVP2xpWPihEqSVv1LrcxvitaBWfNUWrJb8DKHaYXQctv",
  "key15": "22wzYNXhKNkX2si4KvnYp5dSWwU3sV6YEMjBS2SuDSmeJXccERmtrLkRCTD3kcYuYta4g9E7bvhNtbSWDGLnJLFs",
  "key16": "2TtYJ8mqPQmKxoUE1ntUGY2ZfxQu3383fwoxueTpArRpaGKddoNEgCJoX2azqK1puAmCDaeGMuSLjXUAYgFKHvSa",
  "key17": "WzSr4nqZqkNFXhKMm3jafBZg34K36Te3SWzBzPHDMd6RJ1C3vXLx3PHqQFpY2yhboS3SVMJktRAzp1vaLgKpv1k",
  "key18": "2nEvTHfgL7YBBGUk9KBKCxs4MTg3TrFzphrqhWg4VokmesVzdnhsw7h5bw7efVjYBEuhG2AeTHML9iCPiVKK3HM8",
  "key19": "2r3dR7WuQb6i91jN9dJQXH3xvNRTLzrFcsGRirAeLhWqwcdbozihz6pM9B85oiBvKxcrqoknHqumuojkVA6k6ry8",
  "key20": "4qswUcaptKafsDeASLcQfDAz3uGruCevdPdfWzS4EmKRAfBZ7t7gbSw6cmP37XkVQBrSrqHJQUyucPT8tv36pWuX",
  "key21": "V8HTtcofRLQiWVscNxnpze9nPJrVgxqaLTWCEnjKA4ruTGc1WM6cosbDbWHFVyksTZ6K33WsN2eNMmfA6yvBUXK",
  "key22": "5Zbb1xMxkbt7xkxrxhBqnzCtRjKJZHPBJ7VGnzD9ZHJ8ExxtkPdjKAUmHkQk2E3Vbs5RZKDz5bvQZVeou1E8DwJh",
  "key23": "4Y1togpfgYn4d8L5rit2myjWa8rASk1FMraPqeAg5mfuH9N8JkotPHADbEBEvYEsyaZVF34qLaN2G4bp3sZycEqK",
  "key24": "131EP8GyHmamJ33pVcEak338eVZgHTB1T7213qcq4rc14gNLsXX6YJWK6WNXGcTQwkMUHu9rkNXCVqY8UncxMba",
  "key25": "3DF8iiCCg5GNP9DaApJxGeFATcgm7mxRbjC5rUZnLGi7kxqwqzQ1mFGiPEDPrHRLeBq9ES7Sgb56brjQtJVn2k3d",
  "key26": "3jXjAPCg5pjmiKuTaVr3NWc7QhomWcLNbnXvid8Kyu8eENy5nFUUSQPVTPSW4vSDCHAgDhRjDLpnkTWzarnNwEYD"
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
