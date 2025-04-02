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
    "u5cu2sNP4XB1utxURhJAkrx1vXZXXmgePQrFSEYiqAMiw7FdA5pkmoLNbSXva72juoUp7PdCm5fodVDT1YEq9gt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4o8nEbBfjfRwmVYB5w9XWpavm1wTNY4qwYiFFyTR66BhJ3FAsRGqg3dXrsCDkoKjhd1KP7HSm8hsrbd2euSDQGQJ",
  "key1": "5uUCWCH9N1FvGzH4dAyBS8vvF1CNHqik6AdGGmPfPredBWpYCJheLwXGdNK6yNLvrYumntWD8v9RWmBnkqQhVBKL",
  "key2": "5MkEeTqtKeFGJPxcYVSX1Xxrgve9nmiQB9SZ8R6UaLgLZGwpTDhjuZ69vyLQwTV7GokX27RuZxzGysZ9tpcQ9FRh",
  "key3": "2XoJTPUjdPENkbm4UKvY86tjkWbKjRUMrsQSoiYnwSw6dN2k1hjUYqPVF8F8KFDdodcbXq7HnY7kDaZF8eXVonKN",
  "key4": "3gKW5cMcjbYoqCiU7ch9LsGTquMSDpyFDGMu6xF8Fb9KAWcH3PG1ffvShvjpanicR3PNF3nzaS3XskW3xWnN4pMe",
  "key5": "4xSBshDuzX8EjW1PVJerhSLckWwgYZN5HKt6j8UiyQW6wza71fvvVZFoYJpCPtmQbS3K2TMyQZe8TTmRPTPtsovs",
  "key6": "Gm5aHQ4aNoJ8LFt1ziPfiSh1zqXZqRNCk8JZpRz2T1E5hUJFExwXgj5gfRheebgHKgxkDkuvbLCVwRx5HfXyTcb",
  "key7": "67mQmYDhsg1XbN4K9spnznF1DEbJuqTbLnrwJrVMzw72U3k8a1Tq4VJcF3jgi3n8QfziNRpYtpyYE2iymeZDKzXw",
  "key8": "34rwWiAjMPKGTzV6e5p5rWiYs9Azf7nubWbthdBYb85XcqvHxdXf4xnTKSwXXwUaiXmVJbysoCQN7Whz1fmBWq4V",
  "key9": "4ZMRhebBvLf5fD5owZiBUYwoxeXNWuCkzELUfLof41wUWFn7uAtZ6qNsMN7MhUXvBc8caKGpDbxSddWXgWK79MFq",
  "key10": "3HnzXqk8HyYQJkVymXyxa3aaAvh176ZfDWZKmFhBRu3BLFupLweSqmScUF7NgdhabWEQhPQmHTVNDobRBY4Pk5nd",
  "key11": "5sgxaEGZzehDUmnj1UFACAjaTdKhMHYhXmtnLM2UtiY4ymUih9nfQRymkY83V3fPgcPdMCw3TGkaSsLLCQFmL3PN",
  "key12": "45ZSVsUq9vfD1ayvcnKHKBn3CbuKXfeUYrfWkagzxxgN8FsYMNps192KGASfNnRPMXv753PhAXFBomwif6mFSseE",
  "key13": "5WHe9QPmWGmGr8NCLQmkDeoMb9Scvpe1DL2FReAEYKVvLBxijpSLUFqu9mkVoDnxnqEXcUmLcUySQJ1rCFn71DNP",
  "key14": "39djfdmU8VagEXgvH7t11kJsooFSJXGNxVfV7xoLG142t2FQ1mcfJF9bVuXgn2WBbY7d8Q8wqPPFx1AuFrpQdYP5",
  "key15": "yAZoVk3QPm49bdNXZiuCNb4q3RQuQX5ukak7FY9eGEZcrSVbHxZ8SisidzPEWXtw55WyNHdicC8xCxCxbw7KkMr",
  "key16": "5qH3h45ms2fXvGxWMPP3SUoem3qew5HhJ88MsyMQzhxEnKrLXPxqGTwgvjmQptP8HhG2p1DNj3q4ubsXEEfKYzHT",
  "key17": "5ngzGQGja36Ya2yy5eyrGAswVC3FECBA6sdnRAGhwUwjVV3BfNS7q3BngTDz7nhVpHGCULNTryDMZkY5enXbqx6j",
  "key18": "3XwbMa1KiCzVc6GNwWn5gHghAgKp2XBULFqCuRpTzxZrJKu92SYV3Cgtwg7p2ZeyBGiDiCTbZjvqXWsQbibCiuDa",
  "key19": "Y39yzGsqR9MeFHf7rdmtLn4jDQLFtpX7tNKjywiTASaXq6cnNVjSwxGXs49wFwNgaS1evwmGPWpZZ2daehjQwAo",
  "key20": "GxbxCWq6rQoDouogjEtydr1dZpWnUKAdBhJ1kRLghxdHFTF69kxbNRBe2w48GCNaRNesLK11kokWkQp8nmn7ibf",
  "key21": "2hc7QHMLQCFohi9GvbAwAjudbj3LnmyNCXsXNxReYM3XbphPZnA9NhCVVqn3CirC9NwDKNdSTpeSj6GthmnaWYcp",
  "key22": "5gneB2hbC1epmf5mNXSvroYit8bYzQAKDC134o7U66nEYgwK1vCuseqc2MqwhrhdhQwzqUaL4Pcyi2SoH7RqwnGY",
  "key23": "3V7vjdTgL3kUeYm7mrDxEjznbdraDnQAYPbEZbxsi8uzeZLFfqohHvwk7mgmGTRpYpxhTkZvPLxiyYmvpYqnNyHg",
  "key24": "5H2jqzfymrV4E1g1gkLvo11DRuqxncixct8VjfgVgRiAwuFJRZLPRs7iPYmFL8PQRnofw5LqRWp4hvida9pCJwHU",
  "key25": "4VU4KyCx2YZJqMs6gxs1UXzF3skCMt2VqFg8J18NxddaD9qPzfiBdoZ2qaPYtr6S9upgjmywhcH2vEpu1Vqw9FDt",
  "key26": "5D2kQ8NBrA6bLhNLHwCuwDdrAWYAYPrSDsRiWR3VqeegSeWZaqVmbAmtbmJQzeG7wZexZc6xCbfDnugw9zGT7VmM",
  "key27": "i2NwYwvLGEy3s9tL6KDCX4jACJ1piJW3ijmUxr5eV17RVZiboQLqR421CmcNtrUUw8rZ9NxzyoHiZ9oJHgPPm9a",
  "key28": "5JNgjf8yYp29JJxGjspswoBcNXJMvtZLKHmGcMkXTm7DJ4TLeceQKjxyhuFzuBksmN9jtcb31ZgSYShWpFhwXAZE",
  "key29": "4q3qvP2owPcciXd1TKp4BdkeEpkUNyykA5Ac7ctehmceQHrVGi5rq1GUmoik9nGmrUEq2DephHU9fgdkh7SjjfMQ",
  "key30": "3fdPkfPf448FTo9CTvM1HSNjqWVzvLzKtSk7E1RfpPQzERM742umxRZ3NyyHanMkiYHjsGV925znCpFm2yBcjBwQ",
  "key31": "2anoHA2A4y5TLyrz6rAKAn54GZzwShSXQ2YAWH2xSxWqSJv2zRBRWosVJ1vboTSWW9e9SC88hPCUhiipZVkePiW8",
  "key32": "2MqF8h5iPcxj6H9kr1iT6embZAsrReQirDQSN6uwiF6eHQVUjL6TMU8phXNSa1eRo1Vu81nKoAFYELktYkgtqAm6",
  "key33": "2QeAcnBLYbyan18SDt6gJiHHXC4Hb39WDAJACPAudsAXprVXgfneEicG8VmT6nMqHcrkTzcmse37yiQGnxYBYUL6",
  "key34": "3iayqYV8mG4cywzoKE2FmXAcXB9rc2pU29LbWNmvweRdhSxTGiAMoasqKFqHGozxrdDGPoaN6cs1fctY7RV4mM5k",
  "key35": "5hHhqwuhgC93EPjJGWdV7GcBnGMP4veJQEW8Zi4sGLRY29sBLAFYa9N9dhY9NG85hjrsLkCqbafopdkBXDy5hUmh",
  "key36": "y6vLdtCV1e3wPH1ithMEu4E2vFWfZjgo7bZu9bBdN96utfrzkAetbSs6nYago4NKG2E5fTqiBpqjeXfJ1HPdziS",
  "key37": "4UoHasrvDePkQyrrdyxKVhYTzdozNPegtuB4VsjMWRfMM7SWvq2mf6voY3PHa9iz9A5c7cASj8K41zLAP1pPmStM",
  "key38": "DmFfqe18tDGA8a1cKf1MUwVZpLnQZZNoSsvQtLK6TP7tborNdtPZshneP3AUVeK1nnDTivasbvzKDR9M4KTYne2",
  "key39": "ezoXw3qcjmEsoEcRcBNHsyqHDUX2vdvhZwZnZtgDkR4dPPPncs6MC4rs8aNReuV6EcAsH9KijBVyszLfQsu8QWz",
  "key40": "2Dj43Y9ZV3GKCjYtkEVXybZKEnxcgKEVxqrq3SLUByysBHW6TcB6ZsYXc5UmcgS8rHRPct5DYJ9aTmx65HvYztfv",
  "key41": "2d9KvL3UrUStnf7FwZem5aB6cVFKYPcvccGEipBpWNmgoo8U146zVypTPPA6kHZg6x2YD6snMqp7Ag8135KaH7N9",
  "key42": "2qkSzsUEhw3y1UHmPP3f9RQLYyueyBCRfb2a4dcYDrWbe1MzMhVZtbHbVAGeL6PRWRt55UgJrXGNFhbQMjqLg9bn",
  "key43": "5FoJDebaDuThFYWr77KuhsMEHRQQRuGErwbpK3jMXFfmTR66Xpb6AkrErBBfPG9YQzcAJWVozmzpbC682JiM3LNF",
  "key44": "5DtCuHmBg8YZbsFkLycykB5YhyCr1CwCtVGY1hLPGkGxYNA9YTUnrmfUdFdb81zXrH7ZQigeJJqz1aLNWKTbC2u6"
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
