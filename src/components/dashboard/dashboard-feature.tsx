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
    "85rQqoh1sGvTmnWY62yHRBcsCHjQXaqxkrjpgPz14tNapQyifog3686qA1XhfUtC81nt1Vxv81gtp3a7z8tqWxn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9iZsQYKxx7gB1GA3PuXhGjkSApi8E19pBotVhUCtzmMyNttCSr4DBwjaGQwGfrY7mxojE3VPzjMSKLPyZtfA7ap",
  "key1": "3QpVY19enrpdiZY7MKUVTyEvoPqXBYVLQhzzZ24puFzBXafcbfmF1zaANTqFkgiZNsHZbKCzcdZojMm75jsy2YpN",
  "key2": "4Gvq6bp1gcozjw1WQWEERxqQbfMaG8zAUbzWEohg3NSUt7ZQpHSm8Mhz78VvJMK4ee1vPqUm92YMHgFARy7b89Ki",
  "key3": "3LQS629ihaVj6VqKGoBG34yZ6oPQo79My4uRU1eaQdcKAeLij9WgTLad4r5n3eShPrKpJN9qinJDrBBLBTZkFdbQ",
  "key4": "62RaW4ymy946ASiEh2PZNzt5YDcydjLmU26trqVx38QdEUyicZ4VVSWsGZ6HsiPGgzkamn3dexe3UWtJs9G3GzNu",
  "key5": "2swiaQFNTq2WfeT28bXj1JrA58XsQ1spfVDP53eT3p5CSqr99QixjD8nrSnXAALFAMELi7hCXbZxQy1GGgDyWk3C",
  "key6": "2zMDRByoqCimuQidBACusYiJjeEzBtVQSNJtbMx8X55qSth8ntsQmBT98t88gbard6GHPDf3RygUsRZ2MFYec6VW",
  "key7": "4ewSbiN6S2wXc6mZjjZYTpyMRJEG7r9DBRsZooGB3XGzb1hhQRmTPqXbzhJxUwbgSH3yfGGTjfSu9HJGEd8ZFEtS",
  "key8": "3qJLsESse8eH4Uok1aPzKTppV8h25P6wfpb9fgKtEg1cUFKRwteMQqYBY96bhf2F3WBQuf524c95DiBtzmqgw6yu",
  "key9": "6EdF4wxd3RfGxwP38xPjdK9U7H1KDSqK37c3rgeF5XMUvaU7qdDnU3ZScUrYdHHpjFSi87tPnHzSG4cH4eJxv4R",
  "key10": "cauEJr6WStCCzwLgi7BbAUMBTqMDQ6KLGxNtgHHV4fcQjzryQJ5MqUvMPUPyScydXF8ZwENJLba1t2JgXnWpQUw",
  "key11": "2L8yq1RgVVEBCtKKtYWid7BW4fhAB264gcmuAM6eK7WmriKEed1Uz3WoELUh2GAaG2nrZsZ8PHDxhp1KtoSe6eZJ",
  "key12": "32roTT9wZXwEVCXdJ2efL6tX7TiSWMfBBaGafYdDEEbJeYhNQUPq51JmZBAKYKqHz7CS84MhvRHSkgPLmqjzo1fL",
  "key13": "mfvP7Q44GmghLLgBDDunnEpf15Q7oYBdnyvpqZ9tiFSdosJCA8MXzPVsqcdqKfnASnFfqhT6fAMb84yZwadfwb4",
  "key14": "2n3NwkeYwee8G7CSFwHdtXG2wUwYnQkZYM4V8e3o86SomTgqYt3nFZgErfQLP4bxoGYFfTKwaMkVRk3fMFqEmZq4",
  "key15": "3rGKXN8ZBM9u6U7p9X9v61MZ6E2uRrER4HAECJ9uNdBZs1KsDqMyGnnarbvhWVGLEMMiEBXoUf4bzUEHDhpu469o",
  "key16": "5whbUTZwxBxJcE9Swn6r5yhtZR37aEYhVkfVBX8ZP4sY2KkHqKq6aFcCcp9bPb2APGy32cUoRqGfGH6cCJhc6WSK",
  "key17": "jXRXhFUKUaAEZ1r6BYZPPqxxQvuJoWp5wFHj8kr23qUahtP5f93EmCppBHhRAMbVU8MY9ZwoQdQWXBuJe6ZPCmC",
  "key18": "31sfKryaXRuV86aYUuQFb4iqrFq5wi7MPNxo5qBxXaMzgF7gcSzL7ExzPsH8hiVNmXxkNaaBzCRNgaKyGB8iqPov",
  "key19": "L5jHaovHSpzHYEocJH6EcQTaWfJxtuLbC5AdrU5hXarbMLQAhLsLy7LneygfohXvaCtgmUXgQuUCu3gJGZy3KJi",
  "key20": "2s2eWBF7iX2eCYopecQm16cnZRaJty4EgsMuHSZCGbXTwUURPSQfgaKPT2SPf56hRyhx42S1PiexJSoFQ8gQ6eaz",
  "key21": "ffWdWsW3nrt6miHujUPfQpaMdzmTxXcu71AJtwEDV2RCtaXQN3FnBLT2oh3rULMHdmmLd2BWA7Cq7qNVYZjEgVy",
  "key22": "cEcwPPy5L9F6cup6sq4sTbkN5kBfRMPefzFk1DyrjCvKzLzm2NuhzK4oydK89dJyo6mBZgDDag4dNeqaB7k9hjw",
  "key23": "2rcPXJLiQJMNYv56dgtYThTbaVvg6PYMSn1FFeb8dHCXk1qYXofCQoyR6TSZaiyqXoDbsw5Pd5FuogYPMs67MFHf",
  "key24": "59X5UMqDvuCZaFsw6R11QXuthec8nrp3W6hXokvxPKrs8npwPfwgvj9DzrA6woH8i22iDpCsuY2XoMmpzug4uHLJ",
  "key25": "4hYq5eu8uxxg7qQJ1wu9AkGPWpSvrfEDkZ63HccejbkG18JVbX6y7BH962PGAMFM3icFhyFzv67m1i4TY4EJ1F4c",
  "key26": "B4LcgEHFjYHB2r2mwKJrevzFpFcZubBGEtGq2otRy1kEnTmpsdS4bdSavYJxkesUTPcQMs7c2ZFNJvgphFej7ov",
  "key27": "qKoZGCnsHva22z6xc9GwH3zaV1441n6p6CXqPuE2T2arAPkL8oAatoSodeQh9TNfkxz4ZcAtPrYxwWMVfsJoAWc",
  "key28": "2HtTxMSYK5fUtGtCH9RRQ2ynLr1nUDHj2RD5mrmPUkGBLg7dKK5Fu7HAPD3DF8rHZcCo8MDZktGeJdNXAz6R9Bv4",
  "key29": "5JNAvbTTAqZodjYr7rqvpXMqbwSs6weMiRDXk5SST7DDPhBh8uBermZ2E7VV81MSeqQzL54rGHvEEdRj8aQeHD2T",
  "key30": "3irJF65TDSf6tTMQouM7YNhmtQbXQx29mqN9RZZSxDpjjksVeHzqTKf15YJrYyugqD3ZHvdKpgCtR2SnwbCFavUT",
  "key31": "3BMCnwcW7hbwyrTHSJrQzgJjZBzS8RN7haWDsJsTqWkzSNUtyAjJANzAib6aGugPD1h9P979pyBP3kbbCKTPySfF",
  "key32": "FfjDyHemyDhQ8vnAbMP8dj7DTjYUy7ti7cpmaYQSg9C7J3Y83Lzp2w3V6ZT1ynwM6N2pQUbeTrz2N8Z3zcKCFek",
  "key33": "3ZYUrF42Fc1dgRNCy3uR7ur3fCbj6u3ZYBCUoqC2YXq1cnd2aiS7j6FxRrYDrVTDKiNViyKYrgeGzULDHnFeR3cw",
  "key34": "5RqWbGQNHeoZPzbA5A9DK9vNausXjGaj4pjCNoaiZTL8d6nUx87ySmpZe28B2iKBJqaup9Uvt1avnoxtZpifyd2V",
  "key35": "3W5jPdxLhUbnsdagZWq6DiZ2ic8ha8bQ2KM3hWLu7xhqevcmKgAsAgaznqLsgrpYFYYeMKqa5YVCSYiJb3pJw2wB",
  "key36": "5Pt4gqdFVVsW4vcF9AyHu8q3CMqKwUF4eEqmpSLjR6x4MLkHjRVPhMAfdpoypKPBFmTqbzU8byVJ2rV3KGeetNnc",
  "key37": "4yUCFo2aPTh65poiXmG9x1A1x2ALyMAcozmjoJ9ykL8ygRTWeDQp9ysTfoEMT8tJWYSuenjRnRpVbrYMcijMJ3Rf",
  "key38": "5ztV4SjC4xnwNMmkZni3yzt3DJu8NGzHZebSqvfi8SgwbX7NysbeapVJVasPHLYHZ7ChgrWb5PLHezztaExi4F5q",
  "key39": "2qAwu9BMEuLEKAP9mN2rZn8oSq7Qy7cnNwZqoZ4cUJ6ts9duhjz5isV27oVmP81R6Eq3AonVxKJ7vreSM4kRFauR",
  "key40": "P4RUzDaKxJ2MFYpN4zquER1U3KNm6Lc9DnNLoWZfUyz41kUbYHFCARrS8c3zV5qV4weP3kbTVhvtXeZ8gKedwwC",
  "key41": "4ZcyAjXjhipuKG38Z1xfWoomWyV63Tuan6omDPXbgXRpEvh6mtG7WbFC7X78aBAkg7WiexgzhPaZnhbSa6dZX2ir"
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
