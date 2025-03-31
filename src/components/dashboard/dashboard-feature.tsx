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
    "5kxmWU1Qa466uXJ56AoYHpDefLwbLTP4o6Ukd2acN1ZXfQ4jhnYPMVkRmqGSZjqtCJY7BT83kDe9dyn5tuGJN5Dn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35G79ttA7oaNQRpEh6J1vfGK3pyiWWG3gMzfhh6zzE52MaxcWKQgwkuhuSsmdeWgHcqhSzpBYKw8xJM9sB8yWJaz",
  "key1": "w5Q1bB1bMhyhQEvpExfVXHJumkeHfMNNAurWCmNqzLBBfs4zJd8iTbKYdGgQtMBYHUx3Ai6ch951y51dCBjGHNr",
  "key2": "3u56zjQeAPaHRSMY3MwagV37AaMTVjiea6SuRJJYF6SJ4ee8wQGnGiafFSGSmPSSADiXg8S2TNLZCKBuxSN23uLo",
  "key3": "5BDFrdNvesnKHV6JHKg9UpWsVhLZ5Nqfr73Ao5xyEDdUUVCbGs9A6pabdFRwhdNnp7ikTfjyrjL8ib9AibAVice7",
  "key4": "jBFzHHEVNJNoyiUgeZWKFQ88ccZdCNXq8aaiTwseWWUdcYxevTwBT2C9Ah3CaMyjbiSCzSDD7bFZczxGE4ojAbN",
  "key5": "3xVNKzJx9uUNEoVn8fWgmeSxXzQeeU5NtL6nQANVnSTNDwQXMchvTJavYgVZjxapkvePCzYxoAxVWGre5SRGsiUc",
  "key6": "2HAtvRDadPCL4pNpKZbiBFqRWpvBNu2hzW5dRYktUc3GnswFDPvGqJ3hmdPW1ageYamEcqV1dERricEDvbMKdmga",
  "key7": "ncS8tVgjAoQ3s1toPGMrLpbViNxiyN9uTYmtytWcof95aHrMiAt5J6nHLbXNhnByUjD7d1pn8LgacMfsvwBn5iR",
  "key8": "2JEd6suiGBp3ttrB1B2vubCT5zfDspeMHy8JYxNviVt6ADeWPWZ9iyf6yJCEfwfCknp1i4nncJPxxEhhrsp2uF5a",
  "key9": "brbkjuPf4pUhNc2oy4C741xizgxK8iU9YkXfpQ5Yp7HrCfY97Qk1p1WtzA2zMLe9gCPrzRSwcHQDPt2cwaCi4tB",
  "key10": "4SFW4fngCHbMdZECWG2cWkGxcNuGHfAjyJog6BwguGj42rhJfVdHhc96xdJVzr8RukYsWKmbWnFMWaNbA1pnxtJ5",
  "key11": "4u75LpvSbj7vF12jppgjmJmGgftWHkzQ7FpNgpzYxHh74Na6GWuTGomviRid5HcrecwBu3Rssr5uP1okwnNkFj9C",
  "key12": "cfUSYLudSmwCUKDnuGCjV56KFg8RarB9P1NfnRWLHyK2DrHL9RVaYaUyZnMdF9EhwGWA2teyzzGXNuVjCee6ZSh",
  "key13": "RzJSkxS8UKCUxRTejM1GskdeUp3XbusahRMm33vrQqKvUjXRZQ9Fep7DPg9fTS63D1QB8ZGhgcz7ey73ZF2TEwp",
  "key14": "5bncwcEZPjQyXzhtvbRfZ7qqUNWVjrqA2J4CoHiXVBaxEaW9xRL9fHhaGtnkK7JgaHa36hRJJD7Zu3eKiWGCvyTy",
  "key15": "5DGWSuJq7kfFkCfdScxmHKWJf2XQASd7A1EkBwEQ1bLiiSCjFS5pdvD5M6sdr8FoNyCLfAiZ9sh7xeQfzEZRhWE6",
  "key16": "297NhQiH7zQ6YgrYn8a9Bpg5HW3nYBf4BCHgHxgzABsZFyMZntX9ZdadooMKPvsvcTwZqwTNo99HAt7MxESRieA6",
  "key17": "3RbKj3RbS6SGTmRu7ofsgxEgNNeiYRknMCevKt8RnwZKYRmmzBDM277Dq5kRXdMEgLWVdEYHzLkqEDehXipbnGQq",
  "key18": "2bWPEQfkGERd8Ti5sogLZA9U6r4vYewCoaMoW8TkTagd2h7JdXqxgtrSxtN2zWVi5MHgPFSi1UdXhgont816hwbu",
  "key19": "2XQ1jDmP7Z468oCmcw71uMGEvPqXS5K4xUioZGRYoABoNoUV1y6F33JHykdSZDhrcqpXM18MkmTXoDDvum2y6owa",
  "key20": "5fXEqG31B5AcBpHkALHQqRZ4mNbhfDmMXAcR2KJ4dExcPa3DCTwhyXhjKxpkGKuXoiR24zytfvJMhMoJfAAFAJ7V",
  "key21": "3cydLSKN21fQBDz48T21bDhDXh5ac5dcLm7XwdwwQoWsj8gv2F1durU1Xxa53BxEFZixjMvHiiWVwjxP3oYKvjDz",
  "key22": "3jV79s73mJFcq5gqiiegvRpxCKZL2gditA4JjZaGqoXaD8RXHv6DsVcEMgpAZDVFjx5w4LQw1HZFmueXgiHzHxAg",
  "key23": "5UVKDRhr2HBMWmnFdAS5vcQUzLGHteUNRV6jGDwm8bjYkLoMEhReVY3wqqsL4KywUnhkV227yPMULCVLEcxVu2Ys",
  "key24": "5qdH4VfPVWSDiNcpQrNzPiNy887uwAAhMQHuUuRvFJH4o1gs2bPtB6r4DTRTb86UGucuqCFXpt3Ku23LudeC44Ki",
  "key25": "5xmi3y58GHUEytXDtA2SXNzHWHxZ8WBAXg3AA7xUgpkWKcSS9y72MWBfh2zdCFde58jqpoDd9VhJSyAoKDszUxKV",
  "key26": "3igAVERKaMG5UH2oMoRBya2gFN1RxoXwWgLAuuyWxh6TCripCPRBq5ewnG7t38nYXtA1oQ4Ekr5MGmLqZJmni42E",
  "key27": "4opJqxQ7Rd4NzXGcsrgqqxy98VUsJfnd8eR453kxRtHdv23MPNQTFUErKaTiqiYg2jqUGzcioBUWgX1nCBw5rekC"
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
