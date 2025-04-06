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
    "4ohi4LA7uzDV85qfm4TRJ7dtgCXdqQh9y9pgnbsBM2NXovw2xAwpFzz8CuW9VVBXy8b9rtTdXYsqENkUAZ9xWnEM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AbLMs9fLKUwgSzEmoZ44npWPuGisyRq3A2wxmeAbFX4vvkBcAshcgd9c6YesVGRehJW9qHMr5ibkDZqYsW1PddH",
  "key1": "3GJVjSAijHs216AoMqqUkCHxUMLv5qmnCuadMyXYUgEtXvmoiVqH7NbkyrMb9GxtfuthhrC854PQnWBWvkNkaLvS",
  "key2": "s2bz9riT6sdMjg4VA78WzkWVxUn78653XpKZXLUAvUA3QjyedR6ePinezvWqcuR3UfYkPJDJ3UTkuewnyh3mFKA",
  "key3": "3YbLqjr9W5C8UmS6LTnFzifYeMWpmArrLTWA7Bmd5xC5x1ESYPit8YwFJCaVeVSK6iS8vkgQxk2SB41UnVNCsj4G",
  "key4": "3Fgag2CWZ3o5ji8ePdfxDyKwpGr8kd77Je4i9pUhMsyg4HTvMFQ4JkRPxpKTT5rzETwgsFzwUjWd5jLvCmFaSRTV",
  "key5": "6115rwN2wkVRWZXjhuiFVqCtfYhxqDPepjwLTrGewVAj9BdYNRMEkJvWwpJapZH4Ypp9EKCvBghSxuJpV39yRi4q",
  "key6": "yaMM1KiRkCU3sqrniqSLA1kdSDzzQ4J9UnyRdKS5ySS1ffatS7dm3AMEP6qmiyZQW6me4ua7Nkhzyfwrm2Y16iw",
  "key7": "2QsUTQCfHMfTwfxCEESLmvYYNkezJD5M9YN4HiexbriNXBp9TQy9bnzogncmpgS5gdxUQe9MExUFpYUUvStFataM",
  "key8": "232kcAPxge3zoaZDKsjFQwscCPV7ChtxZLFJrND94PNmuCx3v5xS9ZDkAkKdz4RgdvTs9MHW5Dp3Ej9sNgz1xdcb",
  "key9": "4AKkwuTRnk6SHvCEs4Mj1pFNCj3XByg1h5iJUFSmKemDh27fjtQpesYUXjBucS7KgU87Y2BtMKp8NCVZmJnYnDy",
  "key10": "4aLyPgJqX6QBybeTCWwmERE8s4SKVpy15CanzEPLnxdRvG3js7gGc6JiZ7srHA5quiHBQcLaPfAYkxFq6xtJmXpA",
  "key11": "Wzrimh6us2w8Xm59D3K6L1vvyLZ1Z7BrafppRnWPB7rgbemJdubWSauLfkUnWJkUbt519j5PEDHsESmVWi8qsrS",
  "key12": "4qxc5dLauTZjTfXAjdsGZDLAQkjqJerEXDZmviwsz6KvsmXwohRLJyM7HYu8yKKtKEvqMMrnRSyw8j72CbhSbL6k",
  "key13": "55bvaoxexmL1ovuapioXjLGNaZELwBf1ogdvB8SMQi3mgSUBdS8jKpkAHsRFuNmQrRCAq49ui8psUtMDz5T9Zsnq",
  "key14": "3mJ8P89uSnaBVZECFeMyoTzhDspPwnL2ZTRCajEUUTLRWLWY4nitG6zjm19iMuNzpgiXcWog5L16BQHuZsEYg4J1",
  "key15": "57JhhJUqh97VmEeyCU5aJwAGw7Vto7nS6xip7CUXZr27uu834hhEXY6X3ZD3sMeXQtyueVL7eWQsGgz8Z1f6trXh",
  "key16": "2nS7TtixLiuubsyBmdfHduB3W1oSyfr3RMXemW95txYFJRAanNFcSih9DMftTHbG8dQATZFAQ7Bd2LaUXffHTCog",
  "key17": "2sFB4kmcCVuhr9QtMQk4A3izVDj9iZqZQ93iEi8FHy3zmuarzcoBV9mmhhi5Pfi51cESZsfTd4uHgahcCd5KCWFG",
  "key18": "4gPnUVEVbgAPV63wSbRAKsdTwsNc4fj9KRcQKAW7FpALePtZNJNPMrAQYny4fss7pvAS9bzZxag8HndbfTJoFiSq",
  "key19": "3yiMMzHiD1trMbXKuUxhdLx4X8n62i1AGGkc1XD4RTkuu5cNDNmpZL1hJHsP7dSk93VavYAuNsYKiVAPZFn2XWV2",
  "key20": "62JXTFrFkXcKKugWgopjymDtDBPq9QQtWda6zqzGiQKEprfHJSA2mwg2NWTegpkWd3czZCCgA8FVDiisFED7RAGq",
  "key21": "4u7qno8zDYsszhqp7DVgHnnaPfF68zdzFhL9AWwqzKQ9ieyedjf3knyDCwhdJWV9uxstJW8QataQWyiNBALt24mK",
  "key22": "4TpkaxXV5KDAmt5AWdfksXcy7V8b7Fqd9tQzR3tAKZLxdtZh1DMAjCcnDAUDxVKHzkAF7QZDeeoiWSCkWXA7tosX",
  "key23": "4vnKWk5F3ugkawFEvK9aQXs4GuTjhEnDUFnUYb2Zf9HfbpAM2mEmGy53R1MBkvEkN7axUwSZARkGX2q6N3HrMmGA",
  "key24": "TDw5khWyPkMtDEBN1AmC6GSn7YMNubCZfCHXKhjWWpRWSRHvY9EfpcjExYpcKvsaiyyqdAzEJ4CVKki4QabzHKu",
  "key25": "2nWt2jnrTfBSPvwyoTiv3S2DN9oGP2eKphFb1gMBas7oonurm1bxLMHAheyprVnEd7SQvnrnHwjmzVCgsRHJebZo",
  "key26": "5tPLD54ef89PTwr21j6VfVMzaDAF5DY4tt3qcDG3bwtFRSzZsW9uy46DonV71BAx4CNgQjGfaSP2dsxbLSfn1n9N",
  "key27": "5QJej7UtL1F4H3YSUe2PeTMETgWkNFMyqg39dghPBkVE9bd11op1hqHyyM9cupC4dQiiFqJu4rDRzfzfHEBioEm9",
  "key28": "3jeKCVtJvifZPaCbPWSLxPm8V6L8t6WEMFZeLpEs1R8bUVfRqm8SGfuz4xEQkCzv1jcp9tcLcpfJ6o6AgEBcrc6s",
  "key29": "Cn5VTUEuyoPb94WnqAHaPKjsE9iyHTjoP9dV9HoJeE2rc1wvB7LwWjuaXFbDLtEo1KVdS2MrNvUsV46EmDsTY7D",
  "key30": "LKvwmrcUD7rz52owj9MRTHovoEr7QuUkJ8YZpYGkr8bhoDstjy59DdHGPjMMYAcwyjY9YRjFM5zbNoJtbi8Bezs",
  "key31": "4ZjvhWDFWZZ7YfvKbUDC1FZsprDZ6Tu8pZ78WWy4M3rAQazR34tyF3EKMsYq8WXkCozykdwfVRncWJx8DeLzcCNU",
  "key32": "2mapQ6ZwyMmWMTyJoUrNKV5zXdzRXDksWiU5ZwFiw9CmJsn8NqLEWMhXbBuvfzZp4QsQ6ns9qe4dugWUsGusX4rX",
  "key33": "3uH7mX3JcNQgMRJMEZSovdrPuzyhFn5WPNppv15gHZtzh9Q1vVVroQtVEZnWkyj1EvbPZsm1QpMdtvReZs3sQ2D4",
  "key34": "juUN7EsUjrwkTNMVKHTUrHtHRJEfyumzWg2CUvfkhieeU5FmetJNXFsJhr4Vmmi93V4TW2dsyBCEoaUmxJz5FLY",
  "key35": "32JBjqP2jXfuuy6CGRBJVj1v5XXNpH2CPYHhz1AueBECvtVRak9ETk8hy55H8aZNdGVg9F9yzakb3xmRJLvfRw8X",
  "key36": "5Hykb2WSMkH4nyC2YtUPbctwRmKxWRb7dnodX3F4kdoqPzRdZB21yNKMw2ejsfa5cSBtJ3gQSPE4CRia7VXZLo5r",
  "key37": "29yQqr4yaPazSYwmaLkzgvQ1vD82avrmiJbXiunmqp9oT7RPxbkSUxaBVeFNAdu8jyeoCz9fFqrRuWSmNhBYwJys",
  "key38": "gqML75oJwp6w26N5hLQzZqoiHAurRCtcVRohMwKqLoLscdfzgVC1HTHZrhvzKqm3ZstV7BhZVEJzXxfZVGELxnJ",
  "key39": "2e9Q9e79z3xCfzZrpbWJGKKtNXUJxJCmmGeUpzrALLVEqs7qFp6rX2bB3CW1GcLGxXZjhbQLRmthFCY49QtQdygY",
  "key40": "WZ7vyk5xSjGAXSCckYGQkW732wTZFUgDi66NQnakMtG3s5vS1ASATVq1nqpgJCexsPhvAKhvtnvYEKobEYvTBrB",
  "key41": "WiVAhqHdZWWbigXsc7iXxU1kJ7S9Eebsfr56doVyqQTa7f5HCgdra51uV1URSaS1gHNr2gtxCYQXnU5Xc18UFWv",
  "key42": "2z1YJLHrLzRQyuWvb8UPg1BmFHjjfdYajJmEUgTKfudrk5QG7xxVGSFXPH698KRvMwmugtgpGaKtPDzX7DN5C5sv",
  "key43": "dLHLuPKisWuLtUxHnuz4rGTvAnKcJ7EWdT2E9t5UHt5cVr2BCRVtGSk53ynhSy3WRFxZcJWq7JH3zcuBAxR2EPi",
  "key44": "8NXzyd8haB1rF7iEHPNfo2bLBCTdYos8HATL97eRG8TZPiD3tMZ6LeGos3iqTer2P5XUM1zQ3QecUeiYxbgySRw",
  "key45": "A3YvyGkkYsukkxVejm4XQ8Qx2BwJtiGLv23ytTF8BoEQJmumNe3RHCsA4aHDanAeYH8FmMgEHJetujHCCTTCaGC",
  "key46": "2DCca6GjQcqdC8pjF43BNz9C87jztqQ47Cs5BD6yMAkwfNVQ9tyPRorpcdEEg1wN8gZLzmsrEpCnjeVgMKeHPPKS"
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
