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
    "32sUXGvpFgdpCjMXkXM8Vz8QWw6DoQD4uyYhPbfTCsLxSaVZkE1nMp4bPHAnWjvGCMF8NnYjCbertbxhgaSomiHA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22d9MhcBQtRHSBM9E6ucZmncwuxkSoinUYYgafC3KpSaJGapPWwaAE2ZcSh7AMPWFXSHZns8iV55zzvQW2nsFBMQ",
  "key1": "4u7Wm7BfpyUQkVo3hxNrAG7b8uLKZEWR6YCTgXMmacXwiQUfJWR573s4aiEMDbZDMUZSRsr9obsrj3pmqP7f5miY",
  "key2": "2Nd9eeDsAVczpNJahPBnEmDhsWEeeacCBUUTc31TeVUJS7aVJKpYWezA7DMz376kHH6s4UpURKS3ReVKWEWaQtoT",
  "key3": "53gspvQjjqcUh6o6xWW3WGuzrpLtqRx5vcCH1GsUThENG1QBPNMHdqFqTQCFAxpuAbF5usWPoWYXyU7LbeeV3une",
  "key4": "4MaMDC6xuR2hk69iLshsQzaWuFRMeFXWHGjytBRxh9boDpRMrfV8nKBrSSzmEJK2wxfvaLWTeQRfJDZuhjCXxcfK",
  "key5": "4zsAZXz5iAPB6zZxbTz3nW8TMQLM5HEU9avP3B9u4euUdW1oVxM4GAFZ65U5ECqryJv6C8V9Dwyy1o3hspguxcm5",
  "key6": "3AbFwxa5Ugr93fbzFjeaLaT3rWa47xjHviHHEC7GJHq75ipLRcEB9PqmznZjSpRXyF488V6XbLbzKQohUCXdggLk",
  "key7": "42w5wtmNu3QuYsF38sBZryvB7SVfTtJGTJH7wkon7MXrt1GXi5F7FqEkdaDapPgijhCPJ4XKNF4XvZKJFWw6DUGN",
  "key8": "y1JLrM6iwvfiY6QthfZ595bRRe7f9God8qhvkBkCr62bXG2ThFsxXmtP78PV7gDDPHFk9omAheUgeeGd2gH2hd2",
  "key9": "5wK4wLiLYnHZJZtkPznpjLTsC8E6PBS2ZVEVEo72dh6TR6xNFkPreiQTwGcU2xFkroudmdKNqX6B6oaPeBSGCbek",
  "key10": "3a6cPLCTXcUHvuRtD3gYrFnpZBmSq248rUxLNofB7yULTnaVkvkpXqXMBRmx7fh9gSkFizprVK2rb1uPZp7xvGeR",
  "key11": "569WLMhZmEhiy9NCZ9arH71rhoFh1zbfAo1y8D5dMd67LBz6VcUFQpmBZg8sErWW3KWHaGYkaQo1zURgPi8ssMYe",
  "key12": "3vVGV4vKANaB4T9kXoHZbMbFRup3V6nvY3Ecvjzn2k8PnrX4znovkDbe5qgkrw2aPCg9GtmgDiPuY17PVmFyJhLt",
  "key13": "4vqtqNNT9rtMuGyg5HFnPvJyyzXfCbJvLkjWHtzShC2xdbo4n9Nt5avNavHWn1J3ycBS7oZuoxmUdt5UKz96rkph",
  "key14": "4qqaem1U9BS3acrTf7VaUH4Ek1Svh9iJBDuDp9R4MMNBT244t7GM7YVAFWUptAQZdL2jHpYXt6yUS49tZW1VY3N8",
  "key15": "2reiQWz1iMyJxKCm1mmaTZdeazgdUt45c5JgjpuBkxqsNqPc9mBsP32az5z4sjURH2ZDrYnekiCpBgXQCjEhq1qs",
  "key16": "2zp5kySQ4qmK6fxSWFVHANuysDJd8BmwAdjo7rgUVL3CTS5RZdWJn4cydabBeEaGpvM4K1uLRUEsLAUYQCYVA46B",
  "key17": "2XRS62kuX24notvq3EwpNWgZ6Qu9zv6Mbq9AtG2pNj4NYMHdzVsghvVHJYjuG18gxPd7mnuCAuM5ira1PBtL8aWq",
  "key18": "2Kpi65KGM2HJYJVVnafqxVo4usZqMCGhWzNDBJUmb6bF2uicUVjJWYc5W6NmTgJYLXNrZEFGD9RSCUBVxZZigytF",
  "key19": "4hqk1W4Jo7GJKE18CpREHEuWuez9f8zvhzJXaPFEnLNrXE5vZ8PVXtRy1JZXjq3XyTV8uKW8R9Xdp12hJEcxzAf1",
  "key20": "qHQ9r8E74R3aMge4KcewLgD81GuS2JcbUgZzjgufpWTeL3agzyd5WaF4Xbt9FmoA4o8ED5zz8AQiyADkzxNZDg2",
  "key21": "2MRftpG4QuFhxWXBWXHBWcVQBudMuLSPWZMYzCSUJqru68hjKaSg1TrHhrbUNNDu7ACXQvYGr8xAGUhVwnCGnomy",
  "key22": "josiYxVyjZxGxyrnXSvNdSMbU6gcfe8mzbmHTWnQjfkw9YLhRWFynLcFXezq1dnnPii1R56G4TZATegtDKGQGB3",
  "key23": "2UAECC62XFoZsfngV92FfUTEaAKRwDUJiNMY8jpvAn5SWHME89Kec8MqPP9RGEgKvYrY9KriZpWo4DNHBwUhnfok",
  "key24": "mRACsbQTbbcmhk3Dz884aRsEsC8QtDjoXjA3pZVQXMd3h2RmzYme5AygkMjgfjbZcPevb1kXzJh7Fj81q33Hmg2",
  "key25": "2jGxn4wHRdr6yQsYZF6PrNVuC2XmpQcg2C9CsxRhVj4D2GPE2wgGddqrDRD36Ve5fvQVQWJnUWTVDWT5mFFvFDKo",
  "key26": "5jU6NewX8jcWQ5AMq4Hib7q3viLuGY5Vr4oHm5gp2SticAAFQLVP5AQcHZmHtzuQrFth1USBuSXcvXLqzXSZNdem",
  "key27": "3ZMJzspSytRiz85uGtx8BhWezGRMabj7hK6ZkyRZxJtu8wGTKf4pfzYnoRV1J8aMe8nfpM7X58U3kgiSCsixjtDE",
  "key28": "5ywi5Y8SZeiAWaE4sjmwZKHhLP7X3JXvugVAfjL2bR7cU1Wh8iKRrd2pvWsq8zpAEYDBsmcfPdaUNSUjtwwCH8Zh",
  "key29": "kG1o6HxcWTxXy3wAJGwB6MdijTBrUqUYzxwJ8U5Q2DQazmiqpZXVkzhLPaFmAPxqT9ebYoQe62XA87EgNEtp4AY",
  "key30": "2A7kYVSgzNHhxSURiFmVG2YBdzpCT6zXzubBrWXpFe53PdbK116YqUFhuxs3jefAEo2ifwmEXouaweCoqs14MYka"
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
