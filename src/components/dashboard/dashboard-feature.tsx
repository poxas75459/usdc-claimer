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
    "3M9EMMXRcgXM5D3bxc8QEEjcrKvuBCyYktzcxTfpJsPrLXeq8Nndz7uDD6xJ8V9VkXPw2Q1cfPa8iRdW3G4LZdnV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iniJzqgaNxpqRJ35LaqJTKef7SKhfY8nRuvw1wigR88WuKAEqAe3S1WYxZtkpHSacpzkvdHQ2HLNQczNDz4V7eJ",
  "key1": "31eDV1DiqoQBY5qrRtu6BAeyvDxtJzDz3t4yCFPeKniqTznLj3WKbUHbiN4fYroQWXrsEFUjD2SsTMswTcSniemz",
  "key2": "5U6ciSaLhfLYvjgKRtYmLdcgxBygT4LyiXL9iHCNDhq2HpjXqZdQBrV8VLeuznPNfCyjhGQC42vrHBmF2wMYcrG8",
  "key3": "3SyidDAuNSBhPwQm2JtvpQ9fztNdR6Hr41SGL2HixDnvFus4nRej9Tg8kCABpgWBVWeFRQxbJN8ER4wKiHZpZXro",
  "key4": "28zLVbtiWHrXZykjo8xLTfQLxkv4DWx5bZTChNjp4WgRKvNog7XbjzoDioxoBqG5co1G8zWZmTxLXhahLHVw4Hzf",
  "key5": "5V1EMx33TWd7QAj4vEgq6zgSFxmgF2eAETL72iz5FYNEfFntyQiP2qPnWQGcpg1gtBWUsmTE5qGrGvpAVAzQt6B",
  "key6": "DsszM5Bw9swY5ospqFTrrj7Gmzh2PELJGboyrw391c8ngwv5wy95ft7SH6yecpSTBtLGbKKYRJCEFNssmq2bq7b",
  "key7": "3fa9JFzAosFspKMTpB4ac4anzouroUzBvviiautaruPJQq6SsE8GBFS1dQCzQyPyRGaR63g3gsJDeiUducGig8s",
  "key8": "cSZAfn1NiM1iVWurX5vD7hjXL4JxdDsaC9uoaNV9ynRFzc67fHwQ2XNcwMnMNsYGce4StxJMeGM28gZYWxrKLrk",
  "key9": "63SRvEhWs7qvQMw7UPaUThTu3ztW6Q2YmNrFYPh5UWi3Ds9MRFCXnCqB1jRKHaB7y9monuN4MqvWo1dj8GpWUoNb",
  "key10": "yGtHfEWcUyibCSBnV32q6N9g4DDtaW9VqmAiZqy7FnDoVQMNWZFmApCzV8fcgSBAvZV8hnavvFNyfqTumxKCqTZ",
  "key11": "5HrU4Djwf9cLmRmNEA9zZtbzEzskxYKtCyqRPRKDeD8Vdmib4ozPR2BPzZgJ4DjJdutw5UNe5FBHem82SXjaficQ",
  "key12": "xypbTgS25nyz6HMCSHgTfVkoqtjxr7hcBzua9aaQCdoXEqVUmwM6oMUkbLTwxwFkqondjRghAuoUWmSQNBR7sXK",
  "key13": "44gdosnUGHCx9Uopdcpaomubu4PwxcRQgRsg7zUG8q7bj9P2ZmQX21YLxFhijn6D34XfjN1yVwgznsMwmksWmcJS",
  "key14": "zfKgXPSMjUhKwYbL2DPaeVVzouy1UheECexVLWqkzkQMdsXZZVmhu2obXJmQ9dK7gXrYug2nocMwWXqDhy129wh",
  "key15": "4MtexWWMSV6YGNbe3ADoXEVQzHWnmtbTx9VKaZesj4tanRafuBAk5DDAb8zYA5nShJ6ibrqibErD8yTbH9rFQD5W",
  "key16": "2qkQtWGSggos8Wmn1MQB9c9krYrbKy3rMhM2uyCzAyc1vduovuuxczKWtToEcSCyhqLuLGrrW65DALUHKStfpBN1",
  "key17": "3sHyJPXXqiHxqjQcpQLM8LNXt18UwYF3uWVVgZk4oZwvXEnSNdE1rew1QVYxR9smmmJG6rs8kQnxjfTTvkCuK6W1",
  "key18": "Q8bh5U4RykD1wgJUvm4juQ35fyBJgp7Jk1mbePmBZG2Ay9SVoDAf1TsF8aEuAyvidthHWJM6ibDYdgcqdqNDdbu",
  "key19": "4hWsREvZWH5nT4iFLgLky7C3QtQpPXtg1xjVd8zxqzCCg1H9c2VDJBQvtGXpUTu9okvYbqB2XB6veLnrbow9h8cz",
  "key20": "2Q3pHniaFiRLnr8F15LuSQfFznAdh5RoFbFr5PSAQTiDk6Ba19R3fnUhep6X9JRFW4fyj8mBL2xBGR8wu2aUsTk8",
  "key21": "2Hxo7oVzFVzMhyd7ZmkyBAx1s77ao8i3YtMw4zVgS9HSMAE7i2a4ivTBw6YDxV5yjTge8sDWtczScJ5fpcMfLAZ5",
  "key22": "3meFq6gQoefGHg2JSjFFooSJfP2qsWGciE2RsmiefFf1n4Q6z71uwpT9uJXDZ7nE9LGVBkstHqQSuLasigNQPjEv",
  "key23": "4Pwyv6gWkW1TS6Kg8Sz3T4xAgvdP5JvLmfadjc4zi89NqSBNqnS2WxD48VcYma2BFnh6n76zNWdyhQZ8yRxURfYK",
  "key24": "4VGL9v4GtPoitN3pWR6ex461wK9io9UqFrpQLzypVp6mW12kZX34b9fdn4WGvNMVAB81oUsaY7sNoiR2Lpwt4Uj3",
  "key25": "55kj56fYA7UzUMtPwhkioYZpfzDs5L3oPZvF7NycJjeYG2f3rKky4Ux2tjrNy1vvGgWYdVewxcTXtd2enVkg1tUw",
  "key26": "5L9ePhU2rxB3rb2aG7TmxRBx2pLeZJaTt4zcdeeKkiVqj5dELiywVkcdoaAQaEGepAe3QSpMeFUcm3mQrf1sW291",
  "key27": "5vCxVksCeau2qAFXTRSBigB1c41HBc6cxbAH3Q3E3ftSyjXPqK2URjqsYGFKUocP59RDYnW9M7Vn9GhXtqLBLecG",
  "key28": "3oLrvQaKbEnagu31mJyE9zwQh29cY7c121wGi7yxL7v7fn8PmCcCnJVF77AdycbDvL1fNabL85Qy8C4T6JBJJfJU",
  "key29": "62GowiPdhY3181Big6dVSiceSGjdqYgyhEVXXAnpg4sAGcuR29iMnJeQ7fJ3NMzeYcAAiFaq6M96yXRFTzFU99UD",
  "key30": "3TZyc1AEvQm7GTRduZyiYfJTg9rP6cUDYvWoWWc6WBRUuRvfSRkg8vc1D2CQNwasXC9SCoFd1spR5HV5q3vy7EMM",
  "key31": "3n4dUHc7jUqeZvrx4n8wbEEJWMByaQ5KnEH3rFBDRVqoN8XoXXkkEE3Dr9ZjLpRekVxwWrydN2je1zinmkovGK8L",
  "key32": "2AKvdVD3GvTEAw7v7XwFk1nTXFGCXPYSAEy17n4RVfPxB5679K2NYxQqHPkkZAw7U5hXm4dQ5aaVufv6cyoMx3K7",
  "key33": "Xx2KJbnK3YTiF5NwS3vTE4jYVSkWH898Yb78rLyrgerghzQVDQkk72E5LZWD3wsxEif7gUpvaG2aah8mJ84hA1q",
  "key34": "4HXd7fF59pJdZGXtaCEnZyTKj7RgGnG7imkvLWjBiUH1hiPZNr5xbGp1tH4XrrmZzdwoeLtAPZGoeEswkDzpU4vt",
  "key35": "2U9sKDvehiK3rMWfJrsfejrhGgTTYby4tkreKhXQV9F8jeqVYdcJrCSLKqjyCZ6Tq73y1icxo4tRZYGX665otmKq",
  "key36": "5tKdqBoLubkgPdVbPLq2YL3ziD94CF2U8cXx1kRU9wkS8XLwNnvgb6qJu4R6U9icpVhxDvXLPKwWV6PftsKmugTM",
  "key37": "5ZV6HfSboof8qfVXMi6My3ave27g2J4KheRqmYXNkKACJtSKb6Vki8PvXXogg35UVWP7SW2zXFxXnBAcGAGzmEsC",
  "key38": "3aDyDm7wqbUXwHGjMrhVGazycLvTvHFFMji4wBUtB5u41vbwKgAE8aasxyc6oqe1kYqbUGucLqcDHoQUtvDMo8bb",
  "key39": "4GGp8zj4wKj7hE7ZUaK4qvgQMS8r4daGRVM26td8dMpShMG3kYU6qXRDVEYAvxZ7fXGusb6bP5wJNnGXPfhbfvB8",
  "key40": "3FbBoCi8XsVPC4onCSNhZ1HLQ2TE22gHDEv2zxib7hry8niRwEUWUWUuDPcE4ju682GNWLf5uGcKvV7rrZiSz3G5",
  "key41": "5UJxBzs5KnMZQnXU9K3R8MH2haHc6hDNErziTAPfuEJhA5RU6CdqmAc9AwVr5p9NxepMdeF4efXz4rEqPxmfXaFd"
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
