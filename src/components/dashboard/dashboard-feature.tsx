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
    "2ab3bNgdiUoM12VMaKPCajvU6QDLcHogWa5EtnpsRgpg7qL5W9DA33td6NF5o76D6rLi8bbDu6w93h6EciEQ3oYn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Anfvv6dXNuGKpQ2xuSL4hUuvhN75JmgwtWuBvQdJNeyLisZpjxUKgNDDA5c5CXGbfeFjWD5u2wyDncRENxjFPso",
  "key1": "5TruF5E1nbwFBQTfm55Rp4TuDZadPpPzbSFSt8xNzkvBkfdrAKgaJcZbvcuWUSXd8Wp2yQSHj8keVCLFpYAEqLhu",
  "key2": "qfYUkT5j6GUf1MVYXvT9L8vomnU3NZKkaRKe1Vcy6qGLnfWMTnVYNjWXuvoqQy5fyKBbKoHRE6M392EWLcVVdBk",
  "key3": "4M5xTsNG9Gc3A51tDdroJMVbSq14UXZsJY7rk8D9NPbNwSruyhDXiauJgG1nSYQRbfWamGw3NFveKTGfqbnEw9ur",
  "key4": "4JfeWaCfLxjStthTghLman9PcawWRMsyJd6VjUeizsuhjxsUeUV3XVbCuC4hQhAPmnPukA8c7uvFBFNPyHQJzfSB",
  "key5": "45b2ZAHdcRFMvTQm9D7vHGz1mVWYRZGHEgdC7wjxiG3KYj2JdJBFnNsEemYa2rR3n6YTEJ1HoCZafmc2p43k4iuY",
  "key6": "5c3pF41c2MpWvoiXU9rSg5sbpdtJgRL5gq59J151kQrFv4USKobgC8BXUaPdrvw5i3B1HmYS6pxUqZ6wGWyNQyq5",
  "key7": "5FqL8Qu6iq98EzoKQFLypYU57BUsrsCsmRbWGb7fihVNPgvPXQbbugVKEuxdP6GePZFUhZKUYrZFywxcEUAPDoaU",
  "key8": "pHPSHBrstfPFvpidTGnXY5hPkpxJMcjSi2yKn6LZfdBPdNCgP5Z57bv8UzfBtPQAdgZvrjWgEFzt5yoRavC5Pye",
  "key9": "4nVzpmM1gCUfoBm424ka8zxHMjGNiH3L8k6WB8evzYyTAZves7FCA9DmrSuGsNNiGjhyuAki1imP7zmFFD47UrxU",
  "key10": "2g47H5nMMdJxaRLKKnYv44E2oZbNUPJSEiJNqL5Px9nHAHBrehbg93FK2QuZpkqaNEoutHH3L3KPdnMYd1r5LQfs",
  "key11": "VHRFWv3YDp3NtAHRzAs6zyjdzZQbNhCFnqgTqM3KLzS94vdqLtFyTDsNTJvwVfg1JE71YkDozD7Rx6abRb5i1WH",
  "key12": "676ngvrg1GMkXogS7WEkNHiU9hQMGwZvRF2t5deW9ky5YQEz3viLGCFv2BRxivcrvLGKmBFjLYkmAxGfH6vudZpc",
  "key13": "3gqTue15fFktDs3u6ebdqnwdFAZGNg9FwunCmzA61S1QUFvxB1Qn6RH6Ab41533o5QGArN1MJ7Cm4VRfx7fMwWxr",
  "key14": "257XCXBkoiYPBMjCRbBrTTL7c9nefzCGFoDqZ9EZ4nvhRe8ZCARmXmL8UmBfG1MZ6Utc9vd4gro1G47PVKRTYuA6",
  "key15": "59KRhLniBywm9G6y99bZCQAWX4Wi7XRwtNzxYZp9BPvYRKcv8aDugyNP5Z5GBQTXd2UZdiaP2vyH5TS38mmH2Pnr",
  "key16": "2d1nSWvB6otjdEbzaicuuegbDNCqEBGzh1VW4RcwmxSWw8iWQ2ZY97w4P2c5yLsv1Dr92EvadpcesJ8D2o45SQvN",
  "key17": "5SkPcwFQVnyK1TCNm51YNRXtsWEyqyiWGovj31gATLqyiuNEeJgn9tAaoHqyZf9VWiDkUEipwPMJpeo1Z5fwA68o",
  "key18": "Hijc6NnaUUqM1TjNQitjjdDJT4KTMBfS4PJPKeL5XtpGLqNrH9AXEExobwnGtFnWrxWnx1a299FBEDfzFi1mWNw",
  "key19": "hXu3NrXLbrhdioP89YJjbwy56aT9rSoUVNLtgCGZFWitWwCtE4cjEtpucDcGK8J4CbRKHXjLpuMCNXvf6BRR41v",
  "key20": "4yW5h8UFjQFEe9DyiEY6FH87fUoyR9ecTG4J4qYhBN3gBjthRM3AUB7x5EFvcrn1z3rvcncVJ1Wv2iBYTAq1bquW",
  "key21": "5yJN3pzUKe7joMvewnjF5xZ3QQuKmGhEsEvCyaXrRQLoYq5MCCU59QHwVG4mU9tCGwdGkd6vZATpozcv16YD65vY",
  "key22": "5xZ5FQRHDE9kbYJ5eFWVrAnxHAtWRCfM3faXmLUn49Y5o6pEPjGJZQWanLLqDgqxZaCMdAfTKzviKotRqv8Txrki",
  "key23": "1Qi5RrpqH331ZZct6WE2GKMgiKg4Aqf8MwoccTiXhnNPr2fEWEzr5TdZ2uuZfCwAozaZa53Tc8kinKaBbaYR66c",
  "key24": "4cSkrctvRJRp6fuZ8qMzAn3ENMN8WtQbw8Dc6SjFwmTc33FQxVMNo4MFhGtdPY6Yv29jjKtHPQQJ6j7XYnj32y7R",
  "key25": "2dZVHGpFHTfStAmE33oF5mAmRjMiPZXBMcs4c78QDeU4USGiqrnwfxXYMhuWQpJssYWhMxYMhn7HMwJwepiaaBQw",
  "key26": "2PUXb6BF1UFLmVRgKgQ8uSmw2oB6RdLnAcpRXufgP3eAuetb9vjKXgaCGKdb31VgfJ6HQ2PVYMpY1pSnCkJ5ESaU",
  "key27": "3esDGcyckxpRyqaey2GH1DkwuNiGGjqKHsXK5oC5Ks5sC6GaAkLajrmNiCtmh7AUngrfMckkM6NHTjp8mDnNJgPb",
  "key28": "2bHEg2qmv3DGNaJp43nvCVnhBcdsR9GVb1SjU6yC3TPRquVqKguSr9csvqretV5q4zvSCP7TLHAAy7j8NrXstx6X",
  "key29": "3nW5omfHyoxLwHqbkTDEPRkeXbJnwEG5eGAEhgzHBQgNFuL8F6sF4Wu91a2pZT2FYGzRUxcEstPuDMPZCFKK1zpE",
  "key30": "29Mox5MgkQkssQs5rirVJh2hiQmwAnspGByKfryJqVWXswXkDm6xr8iT6WN9ksGfmwE1YKAi1DgwUvkKGvME4zYB",
  "key31": "4sziFCLTdGcGpxHMaENApcaJmBn2sopZFrw3ahwhhACs1jksCUqn6DW2QqvK3JBoWGkbeGDXMdPBrN1bNe2GUeA7",
  "key32": "4DssAjfzAGJr7e3ynAzaJ8sBNddYdi4Ns8cEPP5GnHhbfqXMDvKidK9PbHVEYvrXysHaYgRZeTBYVWPLSTG7ibgu",
  "key33": "2gGW2q9qcpZvUp77RY4uzX1EUpCV1o9Z7B6EFP8LzYwLA41GHUqt94RoA2MQmHeGj5oCFtMEAYhtb2ydbAJEVirU",
  "key34": "2q9bmxtBuZ2nFJGTXWtBHRfLqtkYBLRDXmPRTgfTi7Lxr56hUGBtyvFbeWjauTESSrA98TmJ8ZHp5tkdBDxbf4PN",
  "key35": "232734zRUYdi6MT25v3mLm2urEMNRtTUdd5kKDa7KuzumsxgMxaVabycBewp3E22LFz2gVV4QuaGuWtVkFkXFBMB",
  "key36": "5fkejJwZ169is7tUqLyWL6gkhgMAC6xRnnM9WsvzoVf5c9Sx4YP8Hru4j4oNcuKFtgig3LTi91wSXJrCbpEC8FV9",
  "key37": "5JXTyDE28AkJtfWh9KP5kwUDQhFzhpAaATivg8t11QNrz4F88UYJEvStXx6bq5zLrCLPfGaw9TTqZwKG5NcQ3P4F",
  "key38": "3YfFovuoTeZUK1xXBbUUbqy3QYjND9FwD7WwtuSnmBuqUYEC2BdJzaRDNMLCYP21UmPipR6iDrGPaNyByynKt4Bh"
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
