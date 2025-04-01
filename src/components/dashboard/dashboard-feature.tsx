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
    "4yfZQXQPzFURy3RdgudCaXpNJfjRxLWQvpS1uaUQezsQoyXKKGHWHCDc9DB6gi69wRNkh8HoQ83FuvBoRhgGnDpq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4owuCz6UL3MtQ3JAJxfW36EnopxrFrMrCojM6L9e8q2vtzqwTSe5AJubafWzAP41h11R2akiwNjHYSYx5eAsaBNF",
  "key1": "fYm1kNgeER1w6VDanHXKBUHEGQe3bmLLTcFX8C11x4pqGuAHzhmxv9fFji7rfw9hLdjLahVLwDAcmqtfGh6HaWD",
  "key2": "scDSA1nVmNng6atTq5x9FRM6dTNuHk7TwLM1ZYjZbj8GshXsu7YqkSmZoDqUkB7hc5znfEZdk6dtJtc4V75vXxw",
  "key3": "2AMbJ4bR37Aiot8FqvAe76Sg6wvDCk1SVY3LPozCr4W2TS84nCoGNrfrF5qnSPDL9AGvuEtxPGKYQCdBkrBTLLPN",
  "key4": "3GLGJ39ogjT4SKnYzYs7DRjHAyvjShovxJMSFhdyPhDNcu51JJjeae5b37CdjebwEADN6JCGP9QzgJ5WeNVwD5FC",
  "key5": "2gK4kttJKrnfPxgrwbNWKpch8YyNmVk2VP4gg15oZBMCqbcyGjW37WvFQW7sZrJNiUDuDkkuzVvUSmdx6iAJJxbn",
  "key6": "4dJ9qgbVpbRN2vt5yBcexPrjimPQJGR2vLkNme3qyfu8NpzKQSnZ9t9NyTSysiv74WfYSYxhH88M8J8ozQjxQ3BA",
  "key7": "3kMF3YmbYFfXmfJWuofiFU5p9BP1x9HCsy9iYUTqgE5imbT1PzrvUx1yQ4XE2MSEwx49rsnhrcHKCPPa1SMtEuUH",
  "key8": "4VNiJZHhFjUwp8XyDxnngp98qRt4NCj7CXotJ8kpFjpqeHC1DCqpECvJz7KRqj2mp6LgCTgvr44fiNGuoXMP8iQR",
  "key9": "DhQChMT7Q2XpoH6X9rtYn7SMNgFZAUqPyFUFUKXFay5MHF8yNTZAm7ZLuyCQu2FKhj1tqDGy1hF2qJoHwjWhDcc",
  "key10": "3jgvU87eLXcops1tNzJqhq7kk7gqZGpikAFAZxzh5gbg5Y12zuQF8aAPXMCybkL6AZ3rR1czWs3LTaFvoTQW7yYm",
  "key11": "5Ke18cV73SLCUBysoEHBAihxNKu4EsTcjSzYWyKuumbnccpWHxhW9TcwbE9foa32cjvTsvEc5r4VjiH9oNaF4dJX",
  "key12": "4GVj4MfhiW53ixTKH6LUukAgutNyb3pSXVa6jAAakJY1r5gKL8nthNLfsJshnrtmYwmtpc5Typw346gzoEN4yE8P",
  "key13": "5uD3Z8tPhiirAKBLZE4z6SmAc9BJyNB61Vv9yoPgYjgncUo2RziFNw4fJHbZJjWKUVUcYHkYvpTvZESJYMrTa8EV",
  "key14": "RDNXrCh4dwq3NunSd3iGApiMEJQf2D4pJkDPe2kAXBZdXy97hrdKH4XLCneiyAfZt6qjoT4PELQ5uuPAcdYFTdP",
  "key15": "4jfVW7dQkZkj53vk6N3VNpwbfhCeRMU4cbphMMS8st6obSugagzwy19h8h2bvj5o2RDooGy4CQboArdCsYBCbmGT",
  "key16": "5b4QAwqqqwESrT1N9xdzDVgiRHS8JyN3wttWh3Ypp2K9LYK7ot1AZxTHJwJ1v1sJRmFtAW3sSjZnXYANtR3kfXY3",
  "key17": "2RzXyEs6Fc2Yy6m13rhooraaJELyv26fEiiqSSuR6wKhgX3JDXG8fi6R4ML9RBhDmtoLYg4CNJeq2j9vK5b23i1K",
  "key18": "56E2GEa5xqAzrEmgUzCrcapNetB66vhD49btFHEBtBAfwXTtWYiAzXdFFWt58uo1CGJxDoJfRd7jJZnr3tupWiFU",
  "key19": "4Dk1zN8kRythTjPNgrG1ym6WhVqdo7ijXVrccwWvSUkgigzu1vg3iH2qTYps4pqap6QWek1xcL3yi1aTu2jGtW9S",
  "key20": "2WWGk1VyW6n5XxMxbJL6LuxAsucVQ2nm8spiz5gk42XmZwAatBmA3SVZyCwfiMdegcj7PPpftPTqRasqGTMFtWpk",
  "key21": "51Nm68nY2jepC7zBUyD7CdRV5NL7teNS7p2h1BEDYRwAMLbvgBoA691D14pSgh6WMnMFPVdcAWFkK4F8BoEpjW5o",
  "key22": "2WwdurvhdRrsZCWdm4kzCSYKW8JcnySRzRdyFX1MP4AX6xDqVK9RWD2C38rFZYJPpa7MmKSjDQuHuJXcM1ewwn3e",
  "key23": "2BsY2ywhcR87VzExSMQReUYA1ZPjVfiina7U7Ej73GGyaNwrW9F6NAqpRGzDbimJj29GQDmcFayWFcfsyMLETEFJ",
  "key24": "3zEbKnhriR3Bd4D8HfSTK3orCWmsb4xmvZnFjiJ7aEPGpwd9A2Nzb65Ep1CpQcAkCihWFkYvpaHK8tyKeed1xnoQ",
  "key25": "tS6MKAebhA7YBQrLhPGAnEfvqKZpfkP1ZRJah5MYQrhDqfEZomQa6X1iboCR3kx1Qa4wier9qZQJbCkxe6SrF6N",
  "key26": "m6YX1SvpYiGwsq8Hmb7GSisYeK8bdAS48LwMLoE7eJT3JJ6bfTMaNJWxytnGhLSKmC2MGcWNDZyW5ePDNNqVajN",
  "key27": "3NvNnYzWYHzZy1RrBK1KYcxkCAr9UQrK1UKWsREFwaxgV413XgdCQXrt8MmTatWkddRDdr77X8kQPThdfaujjq5H"
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
