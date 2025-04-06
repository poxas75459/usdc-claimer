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
    "25NMnCUX19ZBos4aWKwML5tG85RCFRHP2aPf1hJUPxses5qgQASfRHV2b5ZtnMA7MUCFXxA1PJQjGysBPXc5w98n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c1wyffgxp82HqxnsDF3Zjx1ugH8dpm1aUhqPiQ51DhogoWbHmEnHJTc6CuPQv5orxWGR1vnstioMqkoZagSrVhe",
  "key1": "3zjim2wo4it6jizFonfQdXZNpChUT4wiy6DMjPUorFUcCPda7iEt8WJKwrQDqCh3QEk8cmtYeYC8uRzBByiFheFG",
  "key2": "g6yaEHqScTBABfMJzEvVzzFxrKe8TKS5CYrjKT4CS8EQ9okBxkfZVnUfZDa6B8EmAzSuV7qsPrcBxfCLjggi756",
  "key3": "3LEDrBW61fLEsnMinLzyhB9Dyhv53YFaFC44Q3kbY6APQqJdfhESCJQ5iXgsWP4YTgHwZHKPkei4LwxbLk4gNi8s",
  "key4": "4YWkissGsVyZuDQT49pReo8iSgyr8ebQkqghYjUdwUW7PzxMNhqFyepJbQV6M77ogsrpMcC4RNMdangYWLk4YcNE",
  "key5": "5gSejykLwkcJQBm3SRFgYrcKUmUCTEk127ZMmidggND3hznSMBBxycTozQWAafhZG8JFx7H8Kh9XqbLAsDEBM37j",
  "key6": "fypD88EWYCDJcXyTkJhuK2AtvC5FGiNYne5uHuBycUeGZYVSxDfShNHBwcb3LykhSfXcrPnZjuFMs1Aa5KbSRFX",
  "key7": "3injCvZSNPYZaKtKoW34Rw2PBJjCFqCTfmixyeHeDzW8HNdpYVa2u3RfuQ3evfsegW2mCM41Ykc4CrscEznf9B1z",
  "key8": "vTw1rQrP5rneyZkuK3p6mGz714DytXRxCjCFNkKn2qqrtqajjctGnqFfftYZsNgMdeKyTatEEoPYDyRRxeQSxaj",
  "key9": "482TYaHrqTTDmB48qPFis44joWuCfZv7nLPnfFKJbUeq19Y3xpBndPjfA5zXzHqHGjnGRiS5svdWzX8j89J5PoCB",
  "key10": "3F2w3RvgvKPdphci96sqyvLZpf9itHVhyLhSKhctxnK9Wqxafnq3DMjiC81e6q989yHLiSzj1MHCZuSwwnNqNLb6",
  "key11": "4cAu5HRNZRTkttAsJCwyZ2WuVJQoHQAReg7UfBd3AzVokn8N1CCGSuX6wNaEZz9iMFUu9ag39VpojB1fdViX82gN",
  "key12": "62RRzRDLpAzM52sKXRPL9rTWWifrS7uJtp6LEnZt9DDaSZFxbSJ2WKi5t1n2VFwwx7D9mbFpih6aewFBhZe1RxW7",
  "key13": "ATzr1EkpFfMaaoV86mQR1FF6szj2GB8KsDzMCk1sQf8PcWEaNgqG2YS3bhEq1mAGUgAaVYCj1zBVR2qq2RGQin3",
  "key14": "3KEpJvK9E613p7PSBuvZtiiN1kU5ekSNfsebRLaJ7WN4YoYC2QEABGAWUregnokwowN6kPC9YjmxvXJAiutUbY7b",
  "key15": "5N8vcXQnXhgueUVA3B5SbmdHjubvB6MUQ12uqZBLkz4Rjck9t8xetEbffcLALtgtfFAWCrvD54KGMwakU9tvhKxu",
  "key16": "AMV6Y6h8pJpKSWqtZxy7j9RzhyoDCVo3NcdeRhBK2b1B7RKQ2W4d48eURt9JbMzjee2mB58SEahzitJ7HGKgEq3",
  "key17": "2knX3iUXRzEVhYcBG4PMPmZeoWb63eKtnw5CDsH7TAVMdK5MwE8TTNCPuuf54so9tsBeXR1KvKqWiKywh4Z9hU3n",
  "key18": "35H99WUS469dPRbWBep5PQuYrsv9fS8UCz6f8BF4RVMymEcqxFA3AxqxG5an9PEfBQg1BVwznGvyJTXJE3yj9fT7",
  "key19": "3D5uPH4PcAoSeXjPwXZ9Smx7vTB4ukcXAGYUiVYdSin3VFBzrRW61cV5f8jWf8gcSsrAxWSjvDoJtQYFrduXYmqt",
  "key20": "4VwEZSnwfpn1snMxKxhHy2u9UsQrrfFQsmTd63JM9BTgDbDFt4sqSKE5pKNWqYjReLSRwn3rTdTdXvJnnojMgTtH",
  "key21": "4tSYae6zNNL8JdWaiJaWrL1bWQsk5iGH3XPx3DPfE23dyvrkHpo37QwjUwm4TW2oxTieWSzuR7XReAjbhDFWPcvZ",
  "key22": "3urB7S5GKdE8m16mky3r47hkj4uEmbcpnZ6NX1gKizU2JHNQMb3zofaA4e2DKvYzk5u6fBZVF8awY7j9t7bPs2F7",
  "key23": "4KRqnAaBWM7VVZMcqD3Uj9vjRZ3R6A5pMqiG3JUESbGPTyF4NWLJCFTgVv1Nay1SRC9hCYxiXbn36fXxGcJ454Wz",
  "key24": "52BavU3Yb1adfZCiXSKWcFZCDSB3FPdgkJ8t8ZeLXEYqpewtgc8CxFFAd17APr6yfg2eUaYWMxA3J4pm9y4Rgm1X",
  "key25": "r8zXwkLxZe6pM75dKqGYUPxKQurrefpkSywmq9rUQFAqAWtYpSmbGx6zXc5wHLv1i7Q8qBKhviHwq1XhsWoSv9G",
  "key26": "5ccvHkTZWbYAmLhFu12otE4dVsawCGK7JVta42zPR7zbiWgcKuxGtY9QdqLT11HwJARDzi2FE3ickGEz9HpMH556",
  "key27": "5o3w4tFnDcB1CCU9Vd5k6k6xnu5xQEM56Poxsea2mpvkTsLLJp88kGdqoiYhWXpo3q7n13A1MYiedsucbPsQarAW",
  "key28": "61fQUzySEjrQpZt9fLmqePKYDfVStMhGVb9y4LzUNPf9ZWhHHqrR6rbovzTStCTTFoL1kQuRbkdxumR2r1rYcufF",
  "key29": "5Y7dtQn6X1MByyMyFLpFESQZef39XindrmpkR6Hwb2bPjvNggG7aHwDmEmxJVaq8V2DEyTzCJ9dztVtwqjXmL6Mu",
  "key30": "4Sea3ULGzgKgk5ELX1mfZ9PYtxG1mLkToftmHXA9uUs2CQ7Ht4ofUXMuMtqt5VzEPp5B6XRV639S8u3PVkjkgGvT",
  "key31": "4xprsxGVyB4ki2VY4Kn6BdygJz2Jx3GQgiTu1ZBUcTKnEHf4CUCzVHnrN6RnZvY4beJgx6tL2Hq2QoUNrRAyZVRB",
  "key32": "4Y72DV19D2uqNdTqdbb55yJMTrQYe833JXJnjGhGN4w2BV5sMgdVxeU1m8AajwtEmFVbBXvNehrtwvYGbtQ99arS",
  "key33": "2RxGdZQTskfVTXjTrcVHLyAsqdKkVXTFju8WsrtJfVPmeGgn4Vpm9pY3r6GwngW9oZhwA9pwTmWTKeVEBBN56uf5",
  "key34": "2uHHUAFsTu559bWfKGZAZCmup6Y6gu9xfCvaMSjxSbAW46jpH31C5WMcSZZGGdbEJLuZMHLtUfvXL9TfZqYy8QEe",
  "key35": "Uj5chfDUvWzatKuVqHMVuPpx7avvTSAGnSSxvCfDRiuTgcdENWY2TfHcDaAwRKueDHur9UqJXGNnRyZxWpQWT5m",
  "key36": "3HzXkdwDixtykWS76Kr9JMY9cuJjgs3nqXebcqWXgyJKnCKfH8u4FvbktXFBj2qpA5Pngo5ZS8Xpw9captZsA98J"
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
