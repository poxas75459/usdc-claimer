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
    "64XfAb3DWQYmYkHCKkN1dUMvfK5YAt314rH8sYpm3D4qa7uqgyCRiwAoSmVjTp7rbEsUH2Q7vKKCXHKnhbFm9Cuh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j4vtvmPzXs2dVjojXENonbCH6FuCUVLAP8NVyDypUjnK5SCAZvuY47HYHBzhVYPn3fhuX4gFopJENQPkTtCn15c",
  "key1": "3Ct9j2AMXvQr6P2GDY57gHUhZUmK9eXVC83rA7RWziE25jAm2LCf2dS6ScbLrraDJ4upekCMVgepV2JL2xsuxfGn",
  "key2": "5Li7v3VrLTQ4bDDrjcQfRuGxXZLHMEw4YCq6MtMc6RvagzBJEtof5Afurhr6h3KwPAxfL7haWzCr4GvAHMW2AZVU",
  "key3": "dTtYwnFCrRYhqgSXNdas23JQH3PzaumD7PgSAH7YfFBKaHPEqVq9gREzLVWwjJct6pmbTaux8SabnoPh9ats6mW",
  "key4": "3vA8nJXN221Jno5XZeokqwmtNKzGDhCDDTPntw8NC2DWrVsS4JA9TwyXD87qdShtw5fwkeu3sbzV3Xox3hP7AkXa",
  "key5": "3BsmNV9cgf782yvNAGuTjCirYFnvDsRFfHVAEEzzUQ11HKR8bvj29T8TmFELGSwf7JT3bk1ykyd75syR5MfZUGhC",
  "key6": "oY4vF6sLPRoR8Fepu8nDQRrUZsrv8yGvR52UFtodUsXeM5nZTFv42TNJvc46GkENHDotg6nhVNnYnHf9JCKEX18",
  "key7": "2TtXaGVwbYxyVJZ5eN3QSPcJ1fZ6jqhbHhp7uG2tTziwhbCwNzEVSyECFBHHPDhxkDFg4qvm8DSNCao13GSKp1N7",
  "key8": "3hsd1oSnaNDj4Z2dhjWtZSC9iKD7Kr6PjFXPGLd7NExwrgy95GM7a9DzXNV7MxM4QGe9gFn54kB7bE6XZXLtoHVa",
  "key9": "3hZ2kv6dg9wnULyARc7xod4xD5hE6iCzsmP6LRpiaY9ddG6cAHi3hnVHyCM1SpXcp5ywxDNfRXqJo8QQAuBpfpAx",
  "key10": "2zaWRMBrAvAKPodpfAqgnixha7xUUbVDvyfRQiLHHV297N6gKM3wXdtBmZQkVs25ghCzWbZHn1efHcXuDykEsxtE",
  "key11": "1uwgzhVrWBdpNq97stiNAKi1YJsXXdZis2JBjPGyp8iaXrAmqpYkwufBWEu8nkinsmRDKkcGsBUTXGnkQMrL3og",
  "key12": "fAH3v9KFhnGSkGeKrjubVBzioMB2Kctfb15DqibWS8zt2NE6ii4ozaXCP5jCvcTrnc5XpUXUgDWea5SBUuUAsY6",
  "key13": "c1DDBeoiMwhWZCXDUS2aqwMz6AmKBUj2aVgQy1naTfLRGRNyj7t2KY4Z4Betfe1po5toqKhQSGE4b9t89emhu6R",
  "key14": "2H7cqqBFMSWKGAJdsbRTpQnLcWLTdQZeCD1x3WVGKN4ocNPtvbXvarSUddPzvHcYHeFtqaxLGTWScakt53URv2yk",
  "key15": "2RkBf3brFRDsfyEcE4dFtxPfgE89JoHJdKbAdZdQTwUmVuNYoAiKrUekHP2LoqRvjCWTPaLHXQ7rbEbMvSN2xJwz",
  "key16": "5NYZWzZHXMZdkvAsD5NietT4C5imbzYJj6NUtNcQktenWEDL4draGbh1Hf7otDs5MfrDXD2yPNKALGiaJ3kiDbU",
  "key17": "2p2rxQ5YD6iEqtxafK58VVU93ZkZLANU54hSJoWRYEjkMTyFhsfPFzzfFXNagH42rZoDpdZRqtgSUzBGa1XyaDWh",
  "key18": "2Xn6TKYNstYSzWh5RGZycYGYEnRQMrf1Ngtzp6FFgFZsau1vMBojUzPd5ATGTA5iksHFryMsqvcWbPgUn7ovAQp6",
  "key19": "Rwg1RbFY3bGTdozkhV9LN5GmXb2LnGS1A5cbNqJjx4jFLw41sCwbE4o7eBZKS4Lhvt6rhUNErQLEFdX2WkkdWQ4",
  "key20": "R25g6TFKDGCxqEB8P1pb7KTDA3xo96KgCaG8TY9oYDBpBg1ZCCUib2fTseq6iQowDdG5W3fHxpkzxjoRQubKyDJ",
  "key21": "Go1gnbrvwS3H1y7Wv9dkGsbnnhmRssNGUAMaF9BDt27K49ui1Rebq5J2ibKaSFrQU5aQotR6B7mxVR2Lprs9MMB",
  "key22": "4DbF4iBtE3JC7zrWcD4DzvyWQLEwKWBR4Um1p1Lw26bngWjjagHgowCpf9LRSJEWd5Fpy3xJYU8Vg31umwHixtdt",
  "key23": "4zC3jGdXNRRHQgocAUQKaQ8iTPdquyknQg7PhPfwCvVwJucSzysLNJ5RqrqbwfyoEQN67NN6xRf3KsMH7nuCPcYX",
  "key24": "4hxrQcW9q6KeRZ1RPMYYGJbFiGJu88QAqooMay2L8Y32fMed9fFPwSmS5ZT4c9W8xSKx2zpricrgRYdHnEYAQpH5",
  "key25": "2bPeuB8Bvma8Lo8kRtoBPQBDvJGTLJjX7GtA1pM87tiEqaughdVHLiXy7qCcsdtJpM3ZEdN7pbTZ4Rsgo458eYHG",
  "key26": "4Gjjs6i9FPaaBw2mjGDK6LS5cwTZ1daGTY5o2m9gS9GsaRJc1qMK8oCBnGXJ6UrFaReh258Fyw1EpRZyCNvE3p43",
  "key27": "2k2HYS2yyDDGyzPZGdsSbfLeNZUaHrg6esiC56JSMKtyx8QrEGjv1DpDPG4HLBSmwEuQeTRvhu5WwyVnW4aTkjkD",
  "key28": "2qqL722rKKZcVEHvVby2638UDYdyTkPrGkDKnGRuEvUR23yZsJXgUxxWbKuNg2b83skHtyvGaNYu53ALSK1Rxj4v",
  "key29": "5wtP9pF24QXRw2bCWvqZ43rBw66SozatwHxPguQoDNKBEfF97q5JFum33BaZ3AeSJUstorkHkxzTbiZ7qGMNEPgt",
  "key30": "57XhVx794jVwM3zweFfyFqiLq6nYbnrPSmmj8yDe3UNCSRyTjkyryFoU5bMqqnbarapUpYARAYkBM9v3k8mXqSGY"
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
