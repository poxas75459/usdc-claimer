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
    "3PrNqXoiLjSqo3pT2huvQC9bKZgiuiSjEZZQeX1avZ4XMP7VRdjPVZcUGZ8w6xdo6Qu4DzssgFmcECvsNzFZMgKw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dNiG9SSWoWNNmofQAPkTkHFkmj1qMRhXDa5BYXE1xET35ZaEcKyoU9CneLxQoQFkTXqTaoFpskBCVMPgzMdcfgA",
  "key1": "3vW4s6fUu4eDuMCAuCigs1ZA74YcApZDaaHASqyYcJi52GdzRfnpMP3gT1tqRYq8VzXTWVyUfNE7LyR9SXtnaG4",
  "key2": "61JcRpbkmuRNnieY7rrHan9mfyk6uxyjF6edt4uveMmHhJVQzUXVijmgQDKYzYcpE1jzc9S8Z3ntfYZ3TxTzXeSE",
  "key3": "5sydum6XE2Yqh59jimA7qhSSs2spyWhdgGBsGR3MLRQNhD6AA6XYF2pqFhxr4bhDLteT2876rZiyzNAudxRCM95v",
  "key4": "aTGyQ1TTY4oULt5hNjiSjj1BHEyoTHPrxGh5U5ftwALhHhQC1LKnFvHdeKdKqjBnL5AuQZx9adU6najXBgkDuSE",
  "key5": "2HFFufnKA3aPA2NyPTYrb4VyJyDykYMrt2HsBPJNirRBF9CoEwkWv38ZYeSnSqrDkQeMwqvrT78K4cTqGVoasNtL",
  "key6": "3YCRw6soap9RxLhpqD1yVZ1HM1EDS9FTUYMvF87NNsG22eobDMLqXDWfUkEHU9oapnymgw4PTxi22CH8VTxS1MHH",
  "key7": "2mcxKzXjBiJGhKGNXnQ3BEHpGZmAbHBdxuyAMzvpdLu81fhakWvSoBTYySobWiVR2dDSqMDgRS493zQMbFwVTgSs",
  "key8": "dgczf9dW97p8Tk254uee3NgTz89d7k399qhUzgsBsosUYRRgtW3tndHvgBN6NoW2qNx3PK8tgiNXBebmAXvjxFJ",
  "key9": "5Fa6GMLq4JnNvW9JKHwFT8sFFwvF8W5rh93kWBWFcWsRgyswYA4dbNbsEbjB7tNy1u1XP1eofxUERp2nssU28FZs",
  "key10": "2n9ZeNdHrveEpgETA7LuL3T65KKetWAmRwQi7w2r3d4d1dQ2S393ypg1zwYQ8AdTxDkCubta1jtxvPrBzhRb8boh",
  "key11": "5nDZL16aZhgrUnF6ZpZN5PP9RF1DBmdnXcHTnt7xfYm7zNM8iPgsebBdY5fvxH1mS38HjyPof7Fkmuf3yPKr8X8c",
  "key12": "2sL53PwzBHsDwM4mumrAF3yjndoy8bo7pTt2jMdR93cWb1Nkz251eUBFcu8rXc4bjSkTJZTHJiBdPyxCcNYdkbtd",
  "key13": "B9JAUsFbMMwC1G3Vja4VFBmtyEDVkYWDsMAVAHrZFWVTZ4Sx6H8WqhaVwfTvwUaATnKnnxoV1k1vTFm8QZMQuDb",
  "key14": "41eVYBCtLJnpWRcfACijo4EjL83MnyiR8SXf7oxs4ET5GsB619zvxR7ynfEM3vKwaWCbef1zUVvPYGZycXFbqneE",
  "key15": "4E3YdekgsgFd99AwwKzeV8JEVBpWmvv3f7ZymU9gmUkWTE9JcH5oWo6vKKJFZonhuLNKLTArFToMLZUS8mSoQUGk",
  "key16": "4QwMhXbZNrTjeYZSCvnShpVdPv473o4GfxYj38k3vkD1DzoQih9ZwX5ycakDnq1YMTSwoyhMPmsZY5DJvAec1TJa",
  "key17": "51A3HgDtd7r4BpL1RS8SzcUsdFHgzn7Eq1SNCJuf83BZYpYfLB1J1hfcjSBUnN5Vcn9r4LVUpFQoLVNJRiABZ63a",
  "key18": "28BCGBPYxRYXGEbLHXiSMuS28Rx19h5WT5zvcWm6NHLTyAM8fYVjbMNfYeiogrvXSde2tMWt8GNsYraHymDMcfnz",
  "key19": "2xiXU3yDmdRs3KUccPLj5rjyLzNDRw2KTS4otn7MkZ1rgD3MTocdJjiYgHDhbxhrMdK95yoqUo8zhkvmYnW7DSK6",
  "key20": "62SjYzcJfPoa6VQNDc7BXhqT2QdbpYbHUYR14Kv5S36PrMVYzWqiKtVnUqh6ciN7SuqwRu1kzHcrcMPE9hSApK1y",
  "key21": "5X49sp8zwsmSqeuVSopHG6xqnyGBDvgL6tjJUWL4ueW5A3hPRm3PTAmXrFeobu6Tw1g5wTk91ZSAM5qq2gQ7UhS9",
  "key22": "dVPghyxowazFZZBFv8iYQyjvYVs6Vun4nbWbnKJBYkMuZfeq7xQ8pPxp3NPX46BwShj4yZjbjNnPCs835zZDejL",
  "key23": "41QmjHoCxvu1bdkJSLRh7gGQn85Gb9rpTQWNScBwYh53Wahr6T12YazextJFZkDWFQhBubo4K2qp9WM3pVnMytyU",
  "key24": "63j2vjE7fomCXiGN9CTvyRHzV31pozCo6KDtLWynmefqSqnETpTBx51jZ1TTBSHFGV28AYbqmptqrgJejGKHx1Tp",
  "key25": "kczFZ12qLkVZZnrh8zB1yf4grwPA3rtpS72t4UezB5qMQSVA5N7FBcWVWwzBSDx6m43yEunzezXLCSPTzs5cBn8",
  "key26": "2hEc6L4rbuiW6PEucBJW75NLJi2vt2Ss3kXDn3qyYKkssdkMcZvTgMHsBuJS1i2JdkZMqYKcmYNc9G1sLTj1vzdT",
  "key27": "2wAfJi1oXzSS1czWsfJBWjPgYMuRkRNxbS1wPAxDU3q9aXMPSUZXjiQG8AKjMJ7XnbmNA6qjXhc6SCqHGkGWmGVJ",
  "key28": "DJMMtgLG9Vvbvc6UncUs6qA2xLJubMF8yi5CbmKLE7Ld1GZHz3cjM8V8c2cGjvFm3LPgepR4z2JsyP3X32GKPM3",
  "key29": "47wf6bKpUVUWHEpZfzToHvVgaWDcwcRFNgjqZXvuBBMWy7QaDTYG9N298Z6bVFauha2FGRrGRWR4X27FqhvzgVkt",
  "key30": "28nL1ztNZrdd6Cko15yEUtLL4hgY6Vuo7k5gBwRsEKLJgv5KioUdn4uuHq43yqARyPRvUNAWpFv8fr6hUmVFwr51",
  "key31": "mGfrEa66rcb71ztKjx3B6dfT1aQkCu89bNRe8LHX2Vou56KwzA8t4i4kfGT3LvHGhE5C9xaUSxW7qdfgpUSZQzc",
  "key32": "4eUuhbX9ZsGKDSz8CrBkE4n9av7WADuG48pnSqS4DfWQmZx4C4yqPjVxNMWNASr37V4AEtC9pzd3YnTpvtgaQ81e",
  "key33": "36hP6wdJKdDra1Drpwf65mPRdmQeeyAG7qVfaNemf6r3UL4cPbq6ZPUMGYkbXV8dBHtJ16PYyDo18zbVmX7NXHsd",
  "key34": "5G3uTZyqcZhkcBTLkNKsTjiFhCLJkRTFm5rpuAN331uJLydpVLpUispbXrrdcjEb7H9H3APye8wBv56AYevuKfj4",
  "key35": "3CP2AFZopijsCAuunS9XQEGNHSKSj3YwooYQExfKycj8oTzqXKuPs4uvqCKE5JWsJuo4bGz8SGXwPXHjrCFT4MnY",
  "key36": "42DTnoGdRtyeM3u5SvaerBUSAbQXpJPuhMjHMDh2VhYFVbDywLbi13eiF8KvB6xEiHCkPCwcFSXJL3tKN3KGNAfT",
  "key37": "3pxLJSTcHuUyZf2rFzmaur2beJH5XBSXZM79fhiD1rnVPZgvwazMtZ5qpevXWDUogEy3hUffn4u5mx9w3EvrMBfo",
  "key38": "274UgqXtRzohLxLvCQMprKq9xf2tBhbnLsAvkWkicBq1B4tnoPNneDGmu9SvkGFqqisRaNBGHPuTP43WHCXgv7WU",
  "key39": "2daeKbeSfE42TihB2KxiM2uUuP51MnpjbjHQfeXDZeqd23yrtNDhLXHkByXiUXR9UVhtRGsvkWEuUz3cQiMqFyjb",
  "key40": "EyBLi8bb8TzcQ9qRPixFK2xBPkyeKFcUbN858c9cMBnva41LWhwyCP1GZvQyx4BSGw6FtfvDWmP5ohZHmQyf44P",
  "key41": "4GDdn3UCXyhH62cquELKKZi5kUB7BETvpBuQuoUPdssLBSbKrrgwbc4DrDwY9s81zMUQzcwWRDRK5ZnTgSVMMPRV",
  "key42": "BLEg77RhP5sRrfxG4Gv4rrpGMEo5941gNcPQyJse1VXhjozugZnsQgZFD7mYGFZUFGQs151uVQH377mGnNXYfm8"
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
