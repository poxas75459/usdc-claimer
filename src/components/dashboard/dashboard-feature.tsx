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
    "2iaSBwZpFfm24xYTontFz3rVrBUWtkZ75ZyYhnigu4u2KoXmyPrpnWgoFb81p3dZYQD4id16tw9Lqo35vggLvmsw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3meQ5mGUQDEHc8mGzMCdobiSLnDJ1Kx5ir7qpspWSbVZGdDsMycPMPerSDgEogWPfQ8mcXRn8nytCDNkuh24eBUW",
  "key1": "3ZcRmmHvEKNofq8Z8sztgntkfsbSA2iSKPmh3JZDJMkWS4s3GXShjtiCCctmWAyxZUjiR3jCthFEhncuiYRcpQrB",
  "key2": "JdbdNvcYEvDvYBdz5X8N3itQmodr3SnqATiNxi37BjW3WvQgBZobGj5WaujaNveEfb2EE3jNhzfJGACt5W4kCq7",
  "key3": "2D9pJr3Py2ZuSfUvr3LRB3dFfBJxhXtepgytZdVdvH56Bm14W1RFriu1AUUcneyiuUhaTQSdrFmcBsim7jAJXHET",
  "key4": "2yh6oz9HFn7avP693fhGK5xwAtHSmb2yWshCByoHnBaSYTYVb5VzzBZYBDCUjrU4CYm16TgjSun4swxRncfTPiHK",
  "key5": "4xpp2JvpFuh7JsqvDux7PhvJaVVCMozpH8zG8R8QrubwpU5mSq3aUDhL5UekerJFVmMgSctgYmZk5ASPGzimdsRv",
  "key6": "8Q4jQ4QMqsJK1p3qVWFQ6bvvH1uJCu4G3BFeFduegn6wrtiR9tqV8UiG3jjVyY3WvdFi2LFnkSP94SZChPfMbkA",
  "key7": "3Uw63ZXgtSPGk4D8fjxKwvGDh7XD6NKYr8z2HSLwTN6uwbSTiE7HSVUcW9W8Dcpunqr8cxJxByGtoLytcQo8uSPJ",
  "key8": "5qmy1fmc1Q2dPYmK76hs2AA2gR7jB9Mavfo7pcuRDQXvgotJ8h87tHAkVtVCijrmPmDZxN5Y9ym2Jvx6xFrDm1Qb",
  "key9": "2U8xJiSfhkvgP2dphbngmnPLwt91uw6N43rfDvfSSW6YpNY99wEEhVd8cmCBxiu2iuQ1AkVhn6NmwRwWkhHHv2bt",
  "key10": "p4N7YvXaoeLSHQmASSMqGQarmzFVQvR9taAnFMjUZG4WsxoEkkibYjMJLHKmVUpBApMVaKm9qvsJXna74nQBv8F",
  "key11": "3cxRrFFzrVGfKDDHUz2rNF3MRjGJFuimpxRkNwTeGbSMn9LQrMwZBNjbwH4NCmQPweL1SCoSTWdYVrxjU4jdNefV",
  "key12": "4GssYAod1tHN7vwwa1Ai6uhwm3LPyMQ6kP4SiYX2EH1714u8jeDqea7uVBLVQnkB6xa8gjZyfR2od1TgAHtAGXpT",
  "key13": "4gQWVUx1mUVyYs1YbJYQnNYUvqgZeSkrysvg32YybKinMV2q2YFAXbpDxFZHFRyuPrToKvARjKWsxTK6XnzBKtFL",
  "key14": "2K6DV9dTs56vUzhcWKDkpyieMgMH8HiPKYz4pQXkF3WKV9jyUpGWg6qaBZwxLd1iE4YdyeGatn28PRM6bmEj3jKZ",
  "key15": "5cuk1Tig1MrwoM3WVVUAzqWunrE3PFtiPjn1Pn3zKCfyfCfJyQk3jjiriBWfWGTZNVRmrvciLJgS2KMNPPCBpBx5",
  "key16": "2tpc11hcXzSGwceevLXoL1t11E4mESLeiWrzWhJvb66dUTry75RdnkdshUNSiqsxpaMeVmSTwBymteqAFUPtMtio",
  "key17": "4mpirQCHeLzEFi2NKCoxfjdo43LTG2FqYgt9BjRMvKstKhN4RJZHLDRL4aX7r38uJ9yNn7LtZjUVN8Zer6qe6fTF",
  "key18": "2koAotL9yrVN4yAp3Dp1LBR2fSqCwwp3mWznSppnCcy529JAD2SmG1xggzQvni5ahzeqyoWrk6zdTu4qB9nAZP3c",
  "key19": "PAXThUF2bu7Y5Xhj3V7Jfk5sRgMp9Lm3XapAijzeoNijrmewExtgsw4DKYVXY2mkyLwpXJ2ycMJjHUuxs61zQtJ",
  "key20": "R72Nt9CMEv37X7qC75JTXfFoRzVnXM5DAXKViiyqLKW8SHhJ5EPsxhxD8nXBEC5bGwiHiGcw9v7R85pdTVYgRP5",
  "key21": "2hvEeumTPX9a4aR4g2o3QtEYUzki3U9WTrjk5qLiKjJk7wh99aHFajQBYQmcJ5LuxCfkstG8SYt1LnE1zRfs7oPU",
  "key22": "27auGvU7cGHx7LBWipfVV3Sya9FgKAwqABnDr8GC2KbaHncQDmBgqFtVt1wU4rJ37U3teW6PCN3dmQtUpc417M5G",
  "key23": "QxkbKrRxMjJvYypMkowy3wAeQbvQhsVJV1TCD2Gm1UyeqXdUxGvZivxXM1cDH1NvAd4ykSyPV379wF4chaFE7rJ",
  "key24": "473ZUic25ZA7LBwqXcLCikCsovkvvAZf6FxJDFaNCD5UQC1U5k2TT3ZnhnoSqhkkgUq3Ks4HaukeLmqVLv5k9VT9",
  "key25": "4qLurRy9dPys14RSZaTNfUatk2otuEzwkYWSq1yAgfAcPLV37qFHS9vKEFPTycxa9hPBCm2vQVzht7vQoXF91PPL",
  "key26": "2NcZAogpci8nX61iZPoUYSRV2sAyN5TwkW5tCCPKAYb7bt2dsihcqfEo41QGw9VpuQjg4UcRktzPUme2mzAiHNy",
  "key27": "PkQ14g1DCeCNeeFedBU2FGGsH5z9bfZqXn6kKd1GnSxyhENY6x6txk9B5FdKrZGGgxfodAW59YotYC3LpRATjbE",
  "key28": "633f7kRoK4u3j8Xhz2pc9iCy6TihFfNgxsQqcFxzzqz56M7JrEfcW6QB1es36nKnWxhwTqmS2YbLESnWppPo5oBC",
  "key29": "52sYdMqyEo86Xo1A5ycLFJ9Z6cjtdCAQZ47qt3g1c4k4YUuwz3v9ktPoNaR3GMe3JqRCkFiH4UjuoQHjahZPsryn",
  "key30": "4zzKGDzAQy56SahYMwARbhdmJ7UJFRD1rqax3bmcQQMXYXFtJ37fZiNYsUmtSbfvdQXBipPtRYhntKfB9SXU23W",
  "key31": "3iC6iPUcPcopEYUhYUhdNMUFduMmFPnt1uFSehV1Z5EUWEDvkm8nwk9cnZpC49VYNqqif1J5uVeH1jvJANHMRwxT"
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
