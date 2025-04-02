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
    "2TH7Jm9HngXPXy729TfdDnbn3LG271tYspgD9vLLtPUv5cCrtdYuvWGXJBvsFv7he12ZNHbQyHry278fHJMbaaLu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AXyrvzyGvLKPnbNA5C9GwDzsN9jsiMtf2ydvY61u4G2ut6h8hPnBTBhykM3UuxrfFr6agMjug4yCUXbaeQzPeGd",
  "key1": "Yk72i7dncKaNZukkomt21n7JCByAtXrcaZJvUa3xcSTLwouBaWWPDeqhS1L928ZsHDrhdhctTmkqyVNzGSqQmKo",
  "key2": "4H2iUhNdEfDjdqckmCMYjQ3HBaAXJxBTe3s13shPtHo9jyyVvNABeR8CVBCAkAQrVhHNoMYZr7FScohigPCqEocN",
  "key3": "22h1wg4RUf9nDRfx8v1RWgKWURMaDwLJstedR1ijxYy7sTCLwDUKcfCTYwLxxzzJTNnEMYVp22dfF3TK16zmKLhr",
  "key4": "3noCJYsNrvqcGmV8CRJ7caccxPLv6hhHop8jiUADzgNUVg4AEp78zPrT6Z9roQbSKBFMwevMR7fmCqG8sgimnXJG",
  "key5": "jdoxKJfXk1opXFJQvFL6DfZPeBQxfWaAJ6YWtx7S7Gid8VSEkTk9xCYqPp4A1wLkf3n2Z52EpqvmZW9EkUy5AeH",
  "key6": "3ENgAYufNccpcxdjJh35TefjfmpEnqZdBewg3f1KzpDL9cq6Tk6JsSND29ZSgWvCgYTNJoaLrWLg1CBd9Wu4uJor",
  "key7": "3ukJDL68d96X67VfUhdLN4CBRSFAQh5utvxkdAZVARsZCDJidvPwGAVP6YaUBAtinCyfN7XDjWZ6nafo2fw5zWyR",
  "key8": "4nccHSGfAw1qMHZXHK7UNqiJCS4TSeTncAixGGPZiYjdFr6gkNDVv9Zy31vV6zRNsijCNaFkuDZMJwsA3QiFHAaR",
  "key9": "32H6Z2WPftR5jaDxWteS5T7D7AE5wb7ocpYjs8MeeWQgTpdWqvfhSAZqLuHtcoQjoXy4wVMRCE2gzQyzjXHErR9W",
  "key10": "4NEf7UaiWri3qj6BBMJqVJc4F822tz1RdB1QT4xtVKKJW8hSEJXa3JHJgFt44VzFARdHgiGkFVL6Rvph79d2SvcQ",
  "key11": "2qKWFZrvCHmuGmnUHxTaDPm3FXECCEMa9nx6TxT4iTaqpzTchzNLeANVpczLSZVMdN7XivREaqrRPpGP3DrKVpbw",
  "key12": "62wz7cT1fY2EJkz5bMbpv4raytd7G5eEPnCfUt5vB52E78Wq1kEf179juQhtGBTkKsh6qHEbD2CkNzhBDcswbE6R",
  "key13": "49N5yoYHqTY45WLw39yPbNKwpLzRuKv1kctS4jybjrTzid1BodoBvL8CVNovN4qTahMNmG5xUYCfz3HuGYh5Vy4",
  "key14": "3b9oiEKqcKUS8sabCBZf86TSi8LT6JtTAxueGEGmFpL57PmwoehznFqfCdpPz6HSKyt6Muz3A5U983PxyzpNQ8oh",
  "key15": "2jh1mcnBApS6oG8UEzae4PYcCFDXFTsefUrQMpzYSs6JP7c6wrzUVvajgxxJvZPzxDj9bdrNx94yGb8nBbT8HjZL",
  "key16": "4JwVBwGjp7j4BCsg833aKXV5PRBo6cyXU87A12eYrvvtZF1PMHuzEDDESDSE7ab4WY7wJD9KWd36xqEnhGYnLZqX",
  "key17": "4o8T5vDGtdqwk7WAYJjdGTJGfLZFbdVFuwwZTPDwZyynEVpE1w3zi6pJ4N9JVuiY1YrtD9bovpwo1BBVzTC39qxz",
  "key18": "43NWEudDTmCcVUaAJp7QZKj19XxffQGa5Q6yTf26yXaAGDdyEzNASFMFTZbZPZmLG4deo86zsasyMrwEHbQvpzck",
  "key19": "4MgwC4aGZxmeGgoaF32RzbkTdy1AGATKuheujX6eh4Fr8cSqCRo4Krvnebxe1WXYK1upn4EedpFQJyRDcrm3BV5T",
  "key20": "3HcUdsfogotUQvmZqsR7iz4dBGjMz2nx3tnRnJgnf3TeYQ6MQ93LSCL8eFLRhD9GPsi7qRbK4cSyZk32Jyootwn5",
  "key21": "4aSNZKhJpoFjr5vVtnvn7NeizY9ZH9sTJ1ETmeCe7BSSjiAtYq4bB3HScaoJaBDTzVvMaowcB5aUmTKnQijaw17H",
  "key22": "5T8kTQneKN8jLxScmsDsqHBA8BYuMACcx8v2iPp5a2EwwV54ZEC3HQEj7BHbBpwvkubWbNFV1LxL5qP6asnuQ6yZ",
  "key23": "5K65Chs2jhyTC9SQfczNKs5kzhM8zozPjkoeSNTYpgcpBULJo3eq7hmFg6D3D1VqcEKtXBSmjdCUQWU9y2hEDqa9",
  "key24": "56NC5u6vR1u9eKiJeeXDUrBGKXGtJ19hFNWNCd4exCPaRjSjXhLYDJHZF3iWW7Y5RF6MwAv3KZCKFkv1z4p4r5d1",
  "key25": "4D8zYbDEzpA7i9brv7W1mzjcfmnYxi7WHAQQ5R9zvvtQQAg1ESxKG9uXpXi6LFdi4zhtxhPiaWbR9pa8FU8YuDmW",
  "key26": "dbshzfFu6SFb7jEF4jXAii7QYAqXvD8dH235XModV1GAV6ruRMbND3sENRZ42Eb8eq6jjfQR8A85EaoP3RZs34S",
  "key27": "5t9Astca9zU8xPZ8GrwRom56xAiLBgxLKbE2NtsraC3iQMPoPKEmT42stLqLkqPTEZ8QYy7FhZG4oUv7Ln7g8ssA",
  "key28": "46gUbA8KG7tkC1fevRKbZY814tBgovmW3Ju827SeVYCxVSDpHRMbM97cXQtqA9apjzmSKhe6irPf83BSwKgjBL61",
  "key29": "3hhuUjZu4qU9fG5nRruqJjZjRfzRaZSKwFfGGkvxQ2Xk9b1osvJN1TfFhH4TTHGT8SMQfq8z1ZajvWkMUk4QJyuf",
  "key30": "5criZVSRBpjxdiuLKTVDQZxrYMAv9wmV5UEtWqbndcsErVKJ7MoiTu1d6yTj1t1HGRB4FoQhFypXyp8xyHhZD8ZV",
  "key31": "4tdkPkSGxLAp3qTBxxJjDAJGte8SWbDtsavAAybCK1DjM4QsnBUeuZtQKULTFQrYPedcY2M99YV1dXSuaM5RLxxw",
  "key32": "m7P2S5XCxikn7cR7fcZr4rd8bnysddMJtbHZWkkEmD3Zt1pCGjjEVMpzGEmUzUbGEiDFAWh13SsRtbt6GRbHyBN",
  "key33": "4hqUKvivvAGeGkdkfCKWgsEJkg2FD5eXB3VEZUD5jxe1LjsSNTCFdiEf85znxQg838n2Gw7BgyRsQfd6Rg8GDCeV",
  "key34": "2MoBt5EeX8xFFM2upKLcM1ni6yd9pk8ARHxCeFfrSLxEw95ha5X2AgbbRcHNB7yNMGpEnLkmNBXxa9tTrDPa1v6k",
  "key35": "4JC8Csb1PiBRtyhKVj6cQopS3YZMv9UWexySd5ZwM1UKp1MNFSjw1wPfqCKDfv8bNaSNYhgg5zvYQNJyUwgLA2r1",
  "key36": "5KZzKdAr7QvkK6amoXxWaH3hrNawsvnKpdXunRje7QDPQeDj1h12EzmgDksdGVKU8eybv83KgQWmmoPBFi1answa"
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
