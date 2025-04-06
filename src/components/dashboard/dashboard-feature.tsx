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
    "44K1TjqaoR3qxTii8KpEtBU7vXgTPrxhyU6z2WfZTcVTLxE8NtALvm4LupYaz2gFvBvUkXvh2hgsThdrMBUF3w3Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HwFGron1eqTBQEWDFBxaEsFqenGKu4KkzXJoVfREdQsDMgViUWgz2SZqacv6SWeWetSDaLengK5A7D3381CAtku",
  "key1": "5T8BVcYGkSNHLCMzAK3tJoTTW7WjLb5Z4DZU6uuSBK58jVZzR1ZfnmcicUkFNRw6Vhe51sf9dagwR8ZGMG7UNomy",
  "key2": "2n5aXgsVmPLa7wqTVGv8zJYckuqSG4gE6tJd7FmoNG4vaViHDvz9CQYTvBbWNzGHYRpkkWy5B7HRaknn5RTQBpmS",
  "key3": "3vNEYiU2HRpBnAAt5hBS2sbyMp5joPxpg9htSpA6aLb4wFEo4zdzfepfPE6CGmZkpxx3WaUUvV9Q11CH9S97SZxH",
  "key4": "4S9Q81zSkZNc8b3PKoVdRu4rZC7qAcCwjfkerd3eC9crwPNazTCw1YxqMC7eRvpz36HuSwJ9Aea9Y5fTncbuUbZM",
  "key5": "4XuwuLj1yPQ5BzURQDJPjmPNwKsZr8oG3dLmWhyZSeirDBzAF9PN1uLmGszkn4dacUD2UickxbwtrMLjD6VD7wVC",
  "key6": "3wcLmYuY497WnMwt4pugD3D6xhSq12Z7NswUp79AVaKtCZyoPxZU3LJPTH35mYW4ojoMGZfvchaFPidJYTQmp898",
  "key7": "LhH99paANh76DQ758aLSBqcPJDyvoGzGbr7yNQqW7twGdNvYvjj7fw1Z3SDsNVAJXxmCxPJEsa89v72sSUfwVt8",
  "key8": "PDCbLPXJmnn9d3ZoFg968v4LahTV1TjtnxccewbKbWVDGB3RJEdsZhgREbHXkp7zvWP4LmWiiHdVUoTF8nhMKMB",
  "key9": "4JzQqgiRnzkfWJfQPoDyGQsCeWBjCvxkJuo1vhGFTNQyFraWbf3QhTxNxo8EtJgCgybFydXByi6f7gDmapEE4qNy",
  "key10": "2naRT8xkTKGqpZbdF3sqQ5xMQ7LH8iZ5SsrgcRusbmqNKYpJZuG5mGJPfxaVRncFXVZdVGNVwS7JZvTeKnWoHDR2",
  "key11": "4xDTjy8h47NDwFp8y1mGSUS5LkZiC3YetZWCELXYUBZ9eCgKEYtMu7L2WpYr5QZ6QKTGQxf6Hn3Z1nowsLSuHGPD",
  "key12": "2kFVfK8rH45Tt6E4q7FZMdEoy13dSL44BKWySLdZRjhAPA4MWYgbYxDUpXALdfhDVNKqkGXBWPA5dshq4qiLefP2",
  "key13": "5Cu1kUD9hKNeKbcjr2rkmDWBro5wNoe13MFkhvdGS2mWCBzPTcPtaQV711cxyoTWdErdRkNP7aqMMh551wY1Gyc6",
  "key14": "59ZGGmCbF48cTT8WnshBMEdiC8y9R9Wr5e8SV2g44LdvSnC76RZpttGTXbdU1qidcZjyAZZesKsENGwdrwx96tdE",
  "key15": "4QzcvBbgFQXdcxAoa4TycixGcdxDrPNQ9EkUgqD6BfEqDVZGrUd8KH7AZTHqTKNTRTbP5Z3sGxp3XdrrgKa3cZSv",
  "key16": "4wf2MBxpT7vKqBnpHv8koypzU9APka8CQGocZD1hqQydGSxEtZMrwEfTg2Hn84s9ZMiFLUufR4Vuu7fbgrZZmrEU",
  "key17": "31SArxx4Pby4mqWt8uXPvfw9wYfdmBT97xZnJHtPeXfuySPyDtPm2pPm1UsDN6WUjkBByyyyk7Ai67JvCCjLXhD8",
  "key18": "5buZ8R1akMcutoZ57LCmnammBtfr4abGpwUfJJ3Zubg99MS1D74hkVGEP4Gm65Q8pERL1DaePUeKMheQcBfzWtpK",
  "key19": "2Grc3BT8dqhEvGUS98ETQvFi6kF5D1uaUx4ftZ58aTTDjMnNqey1CCMbBPeaw2keLZ1Co9fDaotRtwdWVaV9NJTh",
  "key20": "4KH9ueZevxrZNwqgLMeBfDdZVva1PUor4csmfXjpHZ5smZ5ihqpuKRLo5iZUtGzw2RRYvgJyd9HcTuXTY2UPrZws",
  "key21": "iE9v9JCdNZiSiaQn5ijeJSthbHC1VNcysnBZUHMDCgjeku9wp4js28VXpQnexvi1mCAEQprmyjAqtP5Wp8bqjAS",
  "key22": "BeEp6ZigDtAZXfht93K8887FcvBeLAXTrStwiTPX3ZDaqbYvH9ZQhMjNG4GvqedugZWm7Phed1qTLHWckDZ4zRk",
  "key23": "5qNxEZdnd4imDkxcYu3koEiCoR8Vhb8J4LEezvMUBnwvpWGzP27AgrUqhzjCkZk9YauS8sKa28P83vHas2fHWVXj",
  "key24": "3A8Kv8zZV8sMRm5KMfmY7MgX8sPfoSUS5MAgjjQqQgqjKwpWLUxSs1N6WANqE54ZzXXiEgoXVR5VrkjQGiy3NAWG",
  "key25": "4s1RefCVRGZR4NdJpAePGHPR2UF9xhFKNYNsHqQ9zr6y14JB44Ndekc1YLFcdMRTdsvoxPmbb7bzw47aJDCrTQ8h",
  "key26": "rnjd2wZ3k7MqBVQT2gAiCUDWpMXYjBsQEMz78Str27rug7jEk4QAvjwkbLKxjLiKUVEC6DMmFSUFnMM7Zckihfx",
  "key27": "s2xurqrmgMbHvNH4MSCqbtNqZjtzPZu9bh7jSP7rp2HL3yQMjn4YAzyXEUapYgPPxyHF82ZNN2o2Y2tBUD5cNQF",
  "key28": "2896RAFV9KjLQ1UhAryKJ9gX4rX2jL5nRmNzq6gQWfhq8GWKhzghVqLg9xLc75FVqGfEjbvqxvdUunUsuX5mCQ3f",
  "key29": "4RSs8QuqNEhZLy5HRv2NvW1RYWuFwdm1B6PCcqcqU4PpnQ9FH74dPg2Hu46xXousHwuh5rsXJmHGFBRVHRoiDt4o"
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
