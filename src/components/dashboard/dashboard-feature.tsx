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
    "4hfcJpxtDFeN1WRW3KoQmvXvcuGo57NMX2RxcaF3h788MwC99bQLpkACEHJziYcchjhmYNn7Ja98pnQb73zCe5YS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jNv3Y32tm9FphYF1GSFEbAijeCAy3hFdufKLrLDkfgHHknMtfBSjWH3P13mkmuAn98dFsyfoFmTudFh4gdEZQpE",
  "key1": "HFu5gQAXEKqrKVmRms7dP97kdwi88xCZAW1dkDzZ1LBQQmD8kvFMTGvupXTQiwm9ahbQRDumrLpX6EcfrqJPDen",
  "key2": "31Kj2hzmFbXUSx7QstbSYL78E9WiHnt8VFYhXN4wegJbwWyfdb5s1UokLTgogALhbrzyzVrufXSPnsE6ruBcafpB",
  "key3": "B48VvYMvseVoxUYm7gsb6jiTX9BazdQpFuWgX9qWZLJ5f3vkW8yBvqCdzueu3wJhGENR6xx48v63iXEntUoGQmB",
  "key4": "5YkrrZ1Jpn3xyKYZ73uAXYcX1Gtdfjzwq71gTQai3v2EvZaEchNGar4dtE67XhAiaL2CBabBZSLkbmX26v8i6tGJ",
  "key5": "zQ1E3xJXMJZu5JrAQZoXoTLAAu3pEkASSBncaEMpUZCLAyDoUpS3doUReTSuDBoQptxPvdF5NSrFefbqmey957U",
  "key6": "4qZ6GpChtttEpNhdFjASePDBdKjbEJPSYVGC9KNGR95AYjPdRz4nmRczNazQCuJKJumBv6mm4NmAVU4tt6yhLGDZ",
  "key7": "tmFfSQVNgFjEDm8n6qhEKxcshMTrT1LmZAZnMT6jbZAdkgqpA9LZx1v4ZuoyLd8Fgkhfr5xx5UQALGeWSkckqSN",
  "key8": "2j9ECUfVp6zDkuKvJf75e2g5GRxdn5fNtxrngwzWC7fAeqKf1MLLo3j1bara18CcpQxEVYQBHJEJ4UVRhJiL5q9J",
  "key9": "5GbpvPeH8NZ8g3tpornh4ap5FTZXZPRJAnjs431aQXYfhcCnYjrasGCi9NX8kmxSKVAzEprrZ5PiRbAr7ULfW4hW",
  "key10": "2SGX7ZKhVKaS7mKoFsnnLPGdC28LYxVK39y7pWUnbDb4Y6FDBXzpVM9bjLNuavhp9PLvkv6TJWQdV73hqgqnWFt",
  "key11": "LbYaiL8ewRjWQ7zKzPHU5rMoqPBXxHfT8yD5qARpBixgbvDjE5sNvj1kpu3xpZ4Qeq45gSTcbUDehAd742KbP3f",
  "key12": "61ShjxWcNxV7MdJoGUEfxCngG7JV2b98CuVbg5mMnjBds4xr1sPEehA2EzHggmbL1YYN44bLEvtJsRDaRy5sszjf",
  "key13": "xHj7KncFnBh1zZw7r52hKFvM1gskpQ1XwD4GVpPWEX7xYmuzkbuBPtQp1TLTXWkuMhB41u9QUKLAm5ndfhvbyx1",
  "key14": "h7HwNgSAbia9SskusELNc2w8MywvqyyhhwTpo47ekqk7GS6gaCFhs6BXZ1axBh1tpPDut7VUKrk9iqikVsDsp5F",
  "key15": "4VVZ369pqnhhHrKeYU1eKEncwYXZLbvHhw3MjZUHptCHAuWaEWzuTVg9GrykeqDjngg2VunQGKwzCisadLXsCCU5",
  "key16": "39Q5dcr65SJyM8efEL7kkMJonjq7BsySwQTbWz7gDZeUmDo79fzThEGLWLrEUiHXv6j3fc1EHdHE6wNPbmTYyzED",
  "key17": "DyX1Caje1TuwmMKX59bRZV78LfV1paazZT1NEkdZuCmvXWzXfSRDn8KfjREriniL1ixC9oTXhRxTur4g6ov6fad",
  "key18": "63YrqW8ioxidDMYmaui8BrQTwpJwg6fKYyAy4V75W7pKJgyeihRKKY2uJ3NP4hxWbTkYyAm4YGgcYK35giDxZtBo",
  "key19": "35uuJzydnVDVPbSxmecsBNmnTZX9k2UHL17zQ6tSvVbVx29gcvW5aJBrkLybs4zB1ACcBw7pBWb6LPUPbc4vBWPf",
  "key20": "3kazmQxn7Myf2GPdWioX8DdjCCdQBEZPADnXTDxd4NfmQ1tVzE2YurijZmBc2AbXfJvWFkT7R2hWdMjiGaEw8ktP",
  "key21": "5xExwKvAxMMZcRnZShgvo8UMLGRsXAVshh6Vu6oWQfxoJLCRbgmitwjT9wVj4mfKZzg2QqjGKbJYLvEhVbdu8kMp",
  "key22": "3xx3x86ratYAUHHQBnFiW1XHMfPUn7M7DMpMPYEDp3BF3KfG8x3LEbWcCkFATDPjcHgufvF1pPWNNvtErXRoFmy8",
  "key23": "52wQFdU7hfn6mm4958Cu9v3BmCVwV1f7fVDy7WjmvnWnSp3vw7jYM8jj1r1wbDqqV4a5rdtV7zMEu62Wo2zLRdrE",
  "key24": "4nEn5fPWHWhqqK4JtqJU2DnuqBx5xgcZYt4XigeYxvxZi5wAUfHe86E97wtUR7NFgsavjvmcugyq3NH6VokJMJnJ",
  "key25": "4Bat63ok91bib9htVrZneLB4XWn4WS1Vjmv97KDkT47WPPBvG324yvfYejfg26xDwjdUs5SaPafAf8NQJ7kUfY2b",
  "key26": "5zFk3bp7hnb4BQ2WrpBshesiTVNHqMF65uskxMJPLv8WydRXxbJmmuFmaj6EpxdeCBW8d9eftU1wE9Ce4ddJZGsG",
  "key27": "54YkKgdZZEzCZg8U3AFMJeRvc2244PAqbAz3x4qqY4ZwfpGD9KdZHq3F5FNWyw2VexfpN2sgvQkponevd9Ape2RE",
  "key28": "49nKuE7xKmd3nQaEmid7avPuztnczEzh9XrvT4GgJdP3HyhMJknVAPqanJzhdaa8ySKWiCh9J5F75sgsEeWnCTL8",
  "key29": "LLMYcjyTgNEhF8oRU2xB7mLkfhSkfgiT7uzC9m2adkisK65LWgcp11X5D1t6UYnsaDpZJ87q7wzwtqNCeKbB9mp",
  "key30": "568gr3ocRhb7M1qscKw4xLV54ksbBusqxKicDBB3qAtNbrpKxjLEz4Nf9G4J7mLV44GJ3MzfmZVUZRqWBgZbpa4g",
  "key31": "2fNWZT8EqxkhCuRLmAFWnNf2nVnw3tdGePJsbz6Q4VesS7jkByYrBvUmJTymx9YNuk4PN5rPfjLAh5pq4scEJRuK",
  "key32": "34p4ttfhzrcr1CMan5UGnUu9LABBAZmRvD45yhQdyvrYxPnvRLPjrs6Dc6Uipje1sFQTDdm4RcArTSrNgv77CxiD",
  "key33": "2QLgZQ333yqthbxgkTKpsgkNahfxQn5noaqB1anLP1YDvr6bJHa9qjMo62uA7NxePvMUQadYQizsqJfBNiQjUbJK",
  "key34": "4bjqHwj6CmEsndJQvfmT44RYkbhB9X1XsnuwwmZBTqZmqVcWnRvgPaQ8yUbZUiwkgrbJeQrNHWDHFXVeRSNe9SDa",
  "key35": "2Gm91hb7Zv5b6e4UK8PQFXkKGk9n6MjCfG5j3qKmK6LhCwXUy8FCdUA9AHTjNQDahuHAhM9tkt1sFiS5SGmczyAm",
  "key36": "4tGCmcwLyouwoH1U7VG3ohpqrmthq1YGPV3QzKuEcJhP4gohZoQhxNsioid8jYCd7HZq2KVQriU4f3Hn5QibxPRQ",
  "key37": "3DuagnG9BJWW1UN2EdyezfHHGN5T14EiDKmSvv9hraFE3Y1Mm6kmcwo4QKaWsivoEghWySvvKZiwZgqNWscbgnZ5",
  "key38": "2tzuEmU5gRPhG8zZekUsQNhaUtgmMnSJmzbQkDaCnrWFGVqidwvNiDCf4keeuwbZGhPKYPzpkQ3s9AAWsmbkhaBs"
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
