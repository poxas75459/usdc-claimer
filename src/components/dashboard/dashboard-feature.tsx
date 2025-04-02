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
    "2MvkDVd5nJo5WK1JhYp7sowH7gnQtQcmmWkgUQiNQUf2GiT9oE5f71cnjUb89EMVx8bWvczgqvAHvbFKRNJTpW4W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TmWMHDvoAGUDgUfhNUCbbobYY34P1r4HBk2tgtsnQWk7QWvmQaZFQoonTm2uzdAh6rEBiAAyAnR6DggJwfxQoYs",
  "key1": "5ARrpYeCjPVEs1ETEhYHzzMRDnM8LHGGF5JbvC5ZyksmGLLfFN8F44Y3MYzd1soSUJaFj7UqBZQ695NMaENF3yW6",
  "key2": "5uPHutEb6wefMFdpss7hF1QxAkKGWnJJn9QMyV7LP7ii5YQ6NpXST6Q5og4ff7roiasGEgf23kL8QjD9HpzDrahA",
  "key3": "12UVdLe8TTnNhsxzwcjG9P42ivuJ8qaXApgsWtkbMQ8WoMBkENxedgGNFrBau2fj4FyB1onNpg8f5fpB8zkAfc6",
  "key4": "1551x7up5dhtTRnzfaUkhJKiHeLaBwQejsQhHjQ7sxFJPuDSrygUsCJqFCMAgsHe5sd28ytjjckcmM8L8GYJuea",
  "key5": "4Vch9tSGgWnfZtHdeVQSnxCqkuDMBm4jnw638FfeSg3eKEbNZr2TVUEeZRjXgjSw8MD6mwJMo6reTy7psWpECsxY",
  "key6": "33WmtfSJ229HxZqGPeGTxboHHAJzwZ4XCEfojTpP5CJzRHCmFtGG3hiUMsdFqWckW5ctGi8LmL5TLfum5smtns2z",
  "key7": "3ceQBjty21qVAM4JPNHakFutgYWvYtM8WS4qiC9rSCdG9Ak1EDYsSN5WhPChnurywz4LY5Krk67ocEeysBNzPyqt",
  "key8": "eXcJJChjmezwP7b8pvxGw1qFZfCJN4ttK8E6NptKtJN9UzgWh5mfh9EBAW5oCxA7kxWrYewWp4BNcrB7UrgcbLU",
  "key9": "445cGU77fM3zRn8WsdVFitpvKS8ZXgrvPSbJdD6rHHcdRVvKJdQT1PR1Umkg692csFQnNGhBV9XGcHFZG6Ya7Lcd",
  "key10": "56ivnrHLizZNNi2taDyALK8SzhGVVuGQd8fR9JYMvcqh95upnpuHdeoJjALvAqpsoGDF7wPRD7mpRZMq4ns5miD4",
  "key11": "PjCmWNU7EgWM4m9UTtrCxPbhWv1LbktNziA5eVuFf5zdsidMtbzJXpEUnBkvxcYbPdfgqw9qGR1YadbSnrTJesb",
  "key12": "5Uk7Dgc8ukduQU8CtqjH6ScKtmhi51SPCSB7biVSis7K9SRD1UBC4ubce2pqLfMAw3N9vZJ8katmedwh2fxSrXLo",
  "key13": "R7gdCQikJ2b1MVvemaT6fi8YhLQKxxLo2q31fJqsGJ6fuuDNpvCCV4j2pbwyyxxiHmCs5kPSBLHvhUf9qgmeqzo",
  "key14": "5HqpzAficibPtGDMDzRi4jg6yC1oVL35dD9VGAsVgZ9QpNXXLu7isUUzq3j1WdFA93vhuREfS4CBHGQuMUUFSaF",
  "key15": "4jqwgw8pCL4RFnFgRLH1KESPiF6AF6s5CrtkM3CbojZRrPjHgarZkoREmsMK4HDkTH7aEZzQoTUPPp4ycaAUy1ND",
  "key16": "3s57tfsaUryniA2MfYtwparXihbD4x17MBwARzi6nCBEz3DJ7jbhGSuQeH4QdnxReQETmWPEhSCw5p1tKNwsHPES",
  "key17": "2JHA6x1NJaidw1PHajhJJUEeoELU8bTKcjGLmY8iF3L22tyBCw1G3xjeKEkEs2jKzVNRHrepngdAoHC6kSEWKMw1",
  "key18": "3HutQQaLY6eynx1g9karWtqmddTCUYetjnrKqVvjm6rg6oQybdnzMXAesowFYmigtv6AaKfXRg2jYLDstk9s9JS8",
  "key19": "5yBqqdvgR6VMHjo1uMFMnELmCXSSZgp5tYa7JhR4ifvXGABo4jQhEKKf3NDSy3Jv2C7s55ukcptjhB4tgAcyYiEv",
  "key20": "2i8Qz4UFtJLxuLaPYawp5mQ6nanrkPN8e319Vm5LPnDsZwDEmEyyeprGxQvsSE7indLuTD1LeXXHMaDzBmH1Ty6U",
  "key21": "2CCGcgVYXPExE8FVpg49ia8mupgJrYAPMUencV9rLsH7fVp7EWJewYw1xZCoXAv9eA873BE1tq3mLzSebFKvKKdq",
  "key22": "371DiJHDzEJ2aUaNVXZnzoVDxbZVo8hpAn48a2B6wynCxC3AEGT8KAbV8sQSeKFrKD51Ka8VBQr9nMnSHzFcqaXw",
  "key23": "4FZh8p4eMGxUEbrG7dK9JaRP1HsfUHareG46WTXRBuyWKgmundQkbUh8ZoUo4c4JQ7DUwu9K3yX9hufceL3TKn75",
  "key24": "3H6rbAykrZJ93apZoPBAagGYQHAReFemPmLWVim3yZHctH9beiv9c9cJFQH4mQ7Bx8G2ZfSTQshqj2JgwwynuEHT",
  "key25": "48exwYeauBtTTdCkVQ3SMkfHr8piMq7m9CKLDKw79HPfPvf4hvF17M7hdJ2rYCUQmciuJMv3kQ3fUsgCaarbQh8f",
  "key26": "2v7dkU2ZVQjyHZndqh6pvP6t8vuswX4T8B5RGHcjj2EbP6i3xtWKkaCKEbaVmaE1PQCwd7C3NyhMMd5ihWYUfRht",
  "key27": "4FeAVfwFSUJkUtAQnqcaEZKCtGC6dBafpHhS3gVUzA1ZNUYamdL7ZM6FBghaYcWhEVspxoXWJQ23UaZAEYHxEH5N",
  "key28": "5jYko6tkZm2PLQZaWZBKUs1Pua3Kp9R2bC8kqrysN2xBygBbieLVScx77jFR5mfZhPqevcBAcGjfkhG4V5NGsRB1",
  "key29": "2JN2wLqhNL1R72b5XQB52HisqUxYC8mmw5K2uHr4z6DXCCddfKz6KXmakKBcBNmE3ZVP1RHR9LtgNhU9saeKNg2B",
  "key30": "2WFZ8t4JQPWwE2isHCWYStcGv73Pssq75GYk5KHoT1T1T3KtXBNw9J8gMF6qduNy7RYNE9k4ddXMgrkbKadCojiW",
  "key31": "5MKw8ZdRt9SjUazbWPnKRKHnFtxX6H1UiHBxv7S9XbbLm1DcXQw5JCwhM6J9qgT81uEXDCzpRT8EyWcx6ja5zPdy",
  "key32": "3G2u2ievBGPuxVvtkupHZQit4siUeHrhALDd6unjMPcXbVNakGbcjeKQv6etYqfHgyW7fKbTeDz5GRbWKaWcwEax",
  "key33": "E7LBrthdMif7ZqBctnvMwaVJShUxAwQYtEAAsSxyKaq5kuFWE99dB2dbWSL8YXVMSDZFoCsWbs1TufZ9xnKQUK5",
  "key34": "2cZXKNr4pqJxtYweeuG1spunxFFTYFjhtgPq7Yt8kgerPPcR3VEd7sHFqrXvB1MNBKU6zJQKfaRvDPHEY9hSN3aS",
  "key35": "4PAKacW7K65wJs8rZT7E8eb72TtdSbJmXpTU71RRxD5EaCwkHhYHp66sXUZmhY1d1EiD5EcFkxsDtyHQo2UhTTwH",
  "key36": "49ogU3SeiYwDGTXHghEMg5R6Dza97DAj2VgRNNK6Gd3HFKPrkEy3fNwFkPSopDoVq2bE6RQe8FkK68roQXv3dmsf",
  "key37": "4ByTRSvPpcbZtDNodLmD9sSb1DnC7GWefGdVsHf7i4Gst2sszQyvDYwUPnD7sB3sfaEj6YaSjNYLcLrusP2LKsEr",
  "key38": "2q7coZq1yinBReF4ZfykP2fnkX8aj6qTSBpAUMaXAHeASquYrkBaf7fcCFnEyWRNkuUxQtog9UGHmk7jNPqUNZJb",
  "key39": "NSyRXNbPsFcVfSDkQ389MbF7rWv4pSm3TgsByvJDoYKnFW4BHrwceJKAUQAY24HAb8EcxCp7nLDHV1XuJqhpWFW",
  "key40": "47GhRMQTjCnUg4x3WSzNwrQjHLrWiqbKYA4u52i7wRDKEDg3vYMdA51FKgt2xiynUS4xMXPRbTuNcFHgnuAj6MaG",
  "key41": "5YakDWCg8RXJqZvc93DQo1AWwFKZ76vjux5M2kPPNJ183sguvo5tLE2VuuTagRREzms21L4agqTzXJ78Z2LWim4K",
  "key42": "2NcCZYaknCD6xtYYEvY2mAppFpPPxSxaWheQX8MVPzN2sDhrDGG6HsLMPCG6PdAGoNJ3AvTUBjUs9FJ3pkwmoy4y",
  "key43": "2XuSWfuYPteV1CeMv53qdGScHzanQtNHCA8173PnxEqvp5eVu9nnMnVDivNZ6wD1fmtLW1beHgTBRFtkeMGysxft"
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
