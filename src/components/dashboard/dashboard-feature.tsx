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
    "37m7MnUq2LB9D45uoE2xqzEbWWJzxTAToWGZ2QqDuKZH7fakBeqXwBTfYp6LpQiNA6NHYM1E7HbjYcTuiNcUZ6ts"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tdfShBPbLGKwEY4pnp5rdzHJVQmqfHLspv8ynS6A85gf3RPpcJcY4zvQf6jaqAH9a1R3BLEsjoZ844cBreKhZmA",
  "key1": "Mz9t89qxPjgJTd6Ba8a7Dgv4GYSBkiYzESmNZfnyJFiqNo1BgLr3K8Ew13i4LRDrDeEvgJXM9RR4avADHC77bJS",
  "key2": "2ijiN2BF5EqHaNPEnGnS4QUjgXYaEoDWy1ExM6Q5qSWKF2Rk5mGqdJQmjY1Wvtv4EFw8XZWzyz9tHg1wkYviHWSP",
  "key3": "3hoQe5EHt3yHz53gfTAtXBRaVN4ziPniUN4iqW33sRTZT7y8dvmxpSSjPbYuxyxRnBZKiTQ2U2QvW5g3456ExXZC",
  "key4": "gE7CdMSg6gG9UCbabV5R5bZouJ7u8rGYdkf7uRfbVEUnusAWw1oL4EGXdof6JVJcfCZqyEpt9c8Sw44DEgjWrCB",
  "key5": "5Z7H5KZ2uhRjef3hWRVRqxsr1Ts8jAsTVPGU7er4rky6owGj8tjC1HdXQaQMtW96L3ucJ3zjqvfmBWyc7LCzZxfC",
  "key6": "4eeDEiJwqUypFUHCwNhCbPccoip3wiuG7mawZvJ1FvoKbqemJ9U3DEi1Hje9zUNpeugdphuspqKD1bLAndeGsAFE",
  "key7": "2XAAdMhLKhJRevJQgF1wwtRhDhHdoSAHbw3G4wPZVxckUc6rhfa57ihDn95dgVLnGYxQRNA4QSkzLZLZPyAye1V",
  "key8": "tyt4KaT2Y6eVT2mYTEihaKmjgmEYjqvYAps1BHDyV5bzHM1Y3QM48AEo51B5jfHzToWZATw9dzGpupnwZ5SRBVp",
  "key9": "Yv92zYpWaXBGD6mc1E42KaN6UjaQU1MPViX8BhzW6BLGtwAoikPfWUR8aLpkEMY2Z23aceU13o3ZUHAwJRHzqF7",
  "key10": "2UP5aZ43ZHjoGJGRdXtGsebp4svB7SdBpQs2mae6sJYcWWYrEFEnhrLuy9E1QJxyYCDo2oYRq2qhzAMFw1M5s1qK",
  "key11": "NoSSUfiaBgSkRcFXo7UhJMf2inJnTJMty5XH9ngbm7NYSNUbRrJqE5tdVN3PuLZBc739S2tNZbwiF4Tm1Cttoww",
  "key12": "4zJNWdUv8QLGq4DM667b3NKd2pQCwjzPWAQvi3jnE1Vat3R59QBWWbThFmgqdUxNDmt5Kfq7Jn6E2JpLKve7bg89",
  "key13": "3pLy9AMqDxAnfzyoFskDAvS9oe3Fi49BwXCRLPVkqumXv5Lfz7R5FC7jJCA1kM86gPhrShA4WSMBe2JRBmV1szFL",
  "key14": "3R46ejXnFJjQ9XiF7e4QnNiEPnwTvpTgtUog5PM3pkfZqfsgmnyTVhtR4uskmXZrBDnkz1n9BvNQau6PeeTxvZws",
  "key15": "4YcG48LY5Fr8PwPbkedkQmiM7kw8fYHvDdxKKckE13xmHw9dBGrgF9EsKEQPHGVPXWEYCnxHfacScHMaRQDCVx9",
  "key16": "5ZgfCa8EbkXrJ9uCQQ9fKKBYD9k7jKJnxQtNsdFBqdMB4cXqkmyLunj6sGFCGgi11qFb8E9WcQEadvusKigAEiBr",
  "key17": "41Q56ByiYr9vSTqFPx6dK5CcLw4PYmFNAgrCqZQrD7GWXsGSx1hUczCGQS1pEqapvK6EaW6qxfPFTzNktWXDeHJX",
  "key18": "5fSdu3Xg6hiMz92EDG4noiAfXxuvpr81ScCcVzbscijUtnzQ8BKsB62vTK4seTcRzcBRTLc1X3vB26wwrc8di8u",
  "key19": "qapdZQr4Wn1DY4woqSASWDidKQBRk6L8DtHLGgK8AVdvVEBcbHvpfg15U4A7V1HSZcgBQF5jQ6dcFTe1h1RZ5YV",
  "key20": "t4y7FHpvCG7YCPRBARDLj9FE5sQRYKX3hWWFuJsVNZQ4oiRjKdPqaVyETpwtiSiAgySHb3upHrZTqKyCRnPPpKH",
  "key21": "5zMGpmvvewwcBEdLiD2x3WeXGSXtgN78rfzmT1J9AWWy4ciR6wdUvuYwGXAA87D74HhJBTTcGdfBMoiw7MT78YXe",
  "key22": "4CUWpF4D6JnmqqyTtADn62wpc62Z8FbtCdyEfmDtZkPd73hHCwBZe1JZ87HJ8ev7KN6C8r2UvA316rx16HWurx3X",
  "key23": "4nrbniHUMfkeuSgupLUNmFrQUm5WYhKQTTzVK6rgjQhAHoz7BBarkh1q5pFURMd4yCiykYythwBrnqYC29c3hZSm",
  "key24": "2xNxKNpfmXE8hmFLW5Q9ecdirhVNui2e2hJaPQedqPratbbeSp9vA99eDhGGtJFFezMQMsADKvzqYsfQXZLKc38J",
  "key25": "3HPLTMPweH2mGPWBDMBFUqc26r8yYa1ratnvG1T8ob1ZYD2VzyK17Q9rQY3W12jT65XhXVTWAAg4LB6wsHaz1oyf",
  "key26": "5xEghWB4ybcJTRu3GA9BSCiKyYc6UqPHLPTy3i9sBgzetEeCsiJAHuL4FUdZM3NWsydsL7qi8at8NNEVeBoue9Ca",
  "key27": "aLeGEgN1YskBKXKGTsktoY5ut9fj7yCET6CeuVnFQVZ71Uu8M82CEM5vnBEkDTd2aQy4giadqtUAtQuFwPwJvZb",
  "key28": "357C62FMafLqa8mgCkFkU51mdpuzBp1sZUcX76MLs16r49VMFVdE1rkAywvW1H7nsjFhzMXFMFAmwzBjqQpp1XTd",
  "key29": "4zF7phvWn9nxa4jv4WtKp2xs9Faws4c61Fhk5epC8NjNgFHRAxGPHXoAHMxoY8pgRSQBYTSo2DrE75iRXw9ZngAJ",
  "key30": "mRnbL61pksj7YZeRvtQFDCbWmw4AwZQDN26HFnK4iaaETCb8XbS6HX1tPWYSF8TALQy4KfqTzXXQngizuY6pdHL",
  "key31": "3UhkhunMJw5fDPhEKy2WbUDSWpprjjEeREb67mABa5Y1itMRpnnVvhupMqqt66TckpJtPRzY8DMpDPr4E5SGzioi",
  "key32": "4QZ4G9UyG48Pqn1DHtpQmrvYHNxkKHUnYAxjvQUtuujU1bMQFfcqtSNMh4EPqvTRZQWSUsNyPDDVanVkkToATyJ5"
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
