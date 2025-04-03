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
    "23WCP5j3WTzjPGh4CjannpLFyT9g5UMEMjSVhQeiyvn7HbwGSf6C2Emxx8vXD3CHce6TBbyUrMnyELXfLWkoD8cQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ydkrBaWPZTVnQX7nJ5UYwdFxQ2pzV4sFQyugPyS1FVF9ngQLC2cvuacoa3YRRrcZTczPi6CEf7ripT7QdpmVrZh",
  "key1": "2AVmtVmto5TvsW3MG4g37dszNHJX1FYrEg5Uk4hd7DmyxZEJidUBbSJEmPuF5mZSuLECuUd9H6vpw88zgPzkNMFP",
  "key2": "4EAof2Gfou37V1CYk8WFm6eK3ipQgeMmpSbAGTwQLc8TSdxioLk6M8jvvE2QU5gu2vjd2meZBypXGKdx6rUT5Xio",
  "key3": "5gXJBQxYrJQN1txyoBCbZ5PY8BrnFFt8NAb37kwwHwb7ZpMSBL82Ljhby7VAxhg4SCzPnngZTfjCZdBEb9KzaKeC",
  "key4": "52R3sDh3xQntW6fKKykz9nNFh7hJwZTs3jUevj9sg9jNxDJZ9ARNEUtsG9V48i5J5raByC4NRr1hQE1mpsZUfM7Q",
  "key5": "5qLcG7ggFYBJCbYXKMuv14o4kCSBWg1jhDHndUhjqXhQvywu36cjd3eMQLhmsFC3P2q9uttVout7HMB6y9b6fPr3",
  "key6": "wMoV5nTxh5fGDk6fsKYKNQXbH7vmhAZUTXQ9wbPs8e1XF32dMtWbeVFBsNCwmAX5UFwJBWhpaYbxheqZzoqGFb9",
  "key7": "2shmpQMCoGkwW54oaxjiFCpVMB2dkFhnHm54p1bqUA9y6fLNp81q34XDMuQdPXejRXLZ5Bi2Ao2qamwEFPJ5wq4Q",
  "key8": "3tTCmXiGKYRerafkWG9k5PD9Fyh94S2TjZa4MVrg9fWRAVn7FKGY2a8ZpA11snTTvT6pwemMen5jG9dTk4e3iBoM",
  "key9": "Bqy2FgNNFZckUsRtrY2E5EUHnsToGpqQgvnVqUNUuMq3A8cgwxkykPvGgDp2HGes8QzB1DAJx9EJ18hP1NHnBQK",
  "key10": "7qwZvg2U5hXWNYQaCnjHmFZjvgQ92NE6M3ebeidZN7ZcWNeFCeYLr4wnQRMLGSuAPzXrQHCctw571jpYx9fuUVi",
  "key11": "31dTwgf3iyBEnZyHK4Nt1XcJvxeTnEqz8UWLkQA3fk3MfTJ5iXK4d9SjcErr2bP1VAjaykj6WhupdLGWkzXUVixv",
  "key12": "5uFf6CBcQ3F5R2ffAR9jicC9nPMpFqvLeviAg2GDo6aRyW3vn4Mjsb2g1oiCZPjrrMKphLfev3pkr2R1eiqVDqYT",
  "key13": "2ZcBRp8Y3AErEJGgfXHSybxBXUN93efDZCGpUHVGi9J2i1DM7rqwxSzjKhQ7Fipc1RdAnvS1XntpwmDxgpWgtXBP",
  "key14": "5h5eH7jea5x6YJinpW5Xq98yMkdsf4CzDmEbfjeWXWAiDJQDztgMK5q7oKM7UekXHZKkghze45n1CR5B2psBfQMw",
  "key15": "uqQeMkE1V5QA367x28THFoEQQFb2DiZmY6GfQvrHugaXGEzuePG4b3pbLDi4wi3GTFyevvXacPuV4CjYnKxJK31",
  "key16": "4cCeBDjx2aihu2sM17v7cCKqhkvsEnuDSdv8xh3HVJYktp28g1FKcQf5cX8Qv4Vde4exzkmudHzm7aZrBkZ9F6dC",
  "key17": "5oEKZR83YFVDaUzz1nsVMzKeyfYp1Tmec6w3SSJGNwHxa9joDsEqG2ZTwvK98cZqdGBxZAL49dS23w46dBsTRJ87",
  "key18": "BUFwEYBGhDHuz4Uz5R1uoki2sMnxRRn7KsX42q7yy9bhmMuKRwAkhseL4qw77hiCuHfE925jzp87xV8g8a5ZRro",
  "key19": "2HAdi7FxTHcvEbT5biRb7fKg2gR7XJMDN41UbtrFcNumFJG8iKTtPF7zC1YezQ5GMyLdh8MYBdRSPM2wgdjMSG2Y",
  "key20": "5n5YjeHn1N4h483avUoNR7rKwLSBkJKVo8yGSErMNYgv2btCjmmvUy4hJWrnSy7NHPp4kbY9U8TAGdwsaV3emfpo",
  "key21": "255TFqBDiVfDWxe8mNHx2Y9ytSwHydC8hiBFD4bky5DFM7H4AfxMdsBkzR3TX3NnjPiraXk3DQmzZdUzYU1upzhD",
  "key22": "2VrAZNpzqCd821E28ae8HnHHK3yip2idfHEC5Hvzt2X42q7qFc2qXsRK3UMsz975HiBEmGta8fourBc8p3ZQEZtK",
  "key23": "4kRg1D3bFK1hxtp1qp9T6jiLEWGZW5gHSsaoYA9eF3vmotftq9ty47WrT2EWypNpwVg88641BSCrayZuz7xnQFQW",
  "key24": "5X8mHeCCiWM71egBdq58iPcaZUTSuQ6NL9R7s8dku6qi6YhKbcEhPLa9YdshXxzMgvEpH2fafzhtMv921mjaJ3fB",
  "key25": "fGJfqVrb7J4bshfVkgcqb4z6rD98vnkxw1EKNAswUDmxt9ooNy7CEhjyuJfrz4ojJkcnRBnoRWQUrNTtDiqnUjP",
  "key26": "4XKhin4ujwEg6evAp9qMjYMBV5mUQRpH8KCgYRGTMgNDySNy2eQLK3b2xi8QCu3bmxSmyJjRhTomqHzXgw7xASYP",
  "key27": "pwVgCoByVFpChvb1HYsjNYtGjv57Rv2y3DeWffg2cgt7PiKRrAWvBKc9763WswBFSQUE8Qnmng8cDKCMkP1nFDy",
  "key28": "2F7WJtw3mhwDq4vUPNLqB2r3fQiPHcMegJPDXGqwyJZLsFsZqWH3hMNeYmV6K7oE7hsH4YPTBWx3rgaRnhmZGHrj",
  "key29": "55Vd3NXB4YhrNie2Q3ph9qF8jurfoaDiYf4YiHHRAth4yH6YtSBeWsp6aJCNate5GL3fqkT5MKqKeoBUxwZZoysW",
  "key30": "344idi1PyJ8J1vpBnJRGatVNLLGfF6GiXpgsbWADHe5xnqpZvppKuaUDDCFt1d1mwwWqgcYd97MBPpawWGZQ4fqm",
  "key31": "4niZ7adW42VobwAxktSBMfDiA4CwDv1m28cjZtupbHoeVNv4aSvwqi7LY988q2ahMtZp5E7f1WHQSc5tBaW8wkz8",
  "key32": "5gv3H4rS67PYnrAsEqBtvofnQDzszaaf9atx1HhKda3CxLSRDjYyEJ2DkdTWyECYSxKqSRNDe3LDDtyEPMraGuQ8",
  "key33": "3gr4smf5hRvSk7kvy4U2YZchyjUWNucEXyi4dnKvmJTc3Sj6vVBCz3w8A9xL4YkZUTsJGg1xPJfJXJ9hcSQeja45"
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
