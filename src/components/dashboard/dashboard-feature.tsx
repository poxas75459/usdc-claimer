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
    "2VSyUhNBaLypzPwnJP4mrAh8EgaKoEvE98qG4kJ5BtfrzSZRU9QhyySL756RqBgeRV6yRVc9kWXQuhhrPUiC8eq1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qLej1PrZJeEwYUBwUEfFkYmH9T3xqSGXCDnLQ9RNsNYXAhBfN35sD2Xch6b2812XGZ4Lj1k2ydRDNG8ENqjhWqC",
  "key1": "3waGJqe9tHqwU3tmHkZweGmkZbUcHeZZvPb8zbN1rcDQt4eLboEDmsX28wzeujwT6KTCRRLULkmN4bTQQDzUaMw6",
  "key2": "5TmvpJbTAdaSaaPdWfLUnVCrwi5PphihiFWGGMjARVotKxbPeRu4KPUKKLeGmHN1hxRjtwTGm7uynTxZKQwAE748",
  "key3": "2Svta4xmW3TSZCkhvvha7jzrGCcRZKmHrr3xwZWzyu2rUqyAkJwmbiTZaBVMLBL9a6cGydBvV137mP6LbZ4FyUZx",
  "key4": "3JvwJyJuAyYRaDy3EUjMQLK1gCpume5EBswXcuaAzdY2MaL8eemWsmvn2Ftmm7XYQSmmDmUz38aDEbkZ4WgEWN2y",
  "key5": "2uBcr4Z1DRpeBVhdphEaaoGwMabNDCGAVsm9x1uMevz2kn3RohvKtkczNLFDkUXdR1ACv2j3QvdpPyxHkciPtxLt",
  "key6": "4VnMpJU2Q9xtCdaL6eiybGaNXiWxYvyhqQFHeXB4rP9abEpbHgdtfTrGVXqhMDzmgVvax5w4MriW8y4LvBT9uQNd",
  "key7": "2nkZAKjNi92p5zRDgJzbdafCy54gpZ25tJ8FVTn6P2LBA5gjok1fLsPSZMiDwLNoWt8k2oXiBjz6n6AvffBk8gfB",
  "key8": "5oXTc6Y8F19xjmKF2nrgasfdfhiZSZGCi6mzULX5CzXPLvDNNPiuEtA6NyeKA93D2seqKH6UqTH2S8u8Lj6q1J1E",
  "key9": "12vwJpTdjRyWsJeTDzPkn6zsDi3ATqDqYvhb4mjCtFWWPB9gP4j21hQ7ofgYePf71h1P5R3PwMHLrrsx7mbumWD",
  "key10": "3QZriTUD4PEWR5krMYSqWjrf2pAN6DHtQCH2xj7ZE7m7WMYUEw8TBaeyN5TK5ZzQNdpLaLVqeWMZpGihaHu9XkW3",
  "key11": "4fC25znBtS2Qc8vuuWz5Jr286j4wrMXj6trwUfM4juXtDE9xqBbJRt6bjnMUY6LfRTHhupM7rCzKa87fGLCMbiCh",
  "key12": "5rQY8Mue2gxAeSR2zC98JBA48Gw7df9wkwRagoDB3X6qP9JcZTPrHchvjg1E5EFrAMAw9Gkmz7CDWnBpfGa2vTWF",
  "key13": "2Ccfwpw1o6UASnLVvtH111UxgxBW42Bsm1oMHhbbcrZpMtpfryFvN3Gy9bowFDLM757w9mEuFzXGp4Ra6mSeipTw",
  "key14": "4YG1ZQqmAGjdxdjNk6c8i2Y94fVx2S9YRrfXBoM3jE3QxxThhYzHXBxQ6sEoFP6DVnN31pDHkx4k4FruvBxy1KDg",
  "key15": "2QaDPcB1f6gz1JVNkPBQaarKrTpfZrYKj5VRAsHKpup94TC9wdpPfNvxGtqpCHqmwqCQZu3ryhhgzEU788k3r5iK",
  "key16": "29zEbRkgYBGCDHzaLcXKi9q4F2cK13dUu88s1wG1Nx3xQBoyQdPSbNNrjSS9WVA7EKGFcshbxFmNB9pAaFr4Mr2w",
  "key17": "Y9Fogfv2voKLSnj5Gro3nJhgZTDQVJADRLUeq7gf8CTkerMNs4qsPSyVp9AmUyGX6tfCH23u7kbwwBFXiJo9xZ8",
  "key18": "4XKDBcEnMqVGaDufsGivZNY1saaWRxReBz1CvmwwN3xTV8tdS8KPGcFqNWrYJrUzPPEADzHfos9MmG9Qv3oYHTFQ",
  "key19": "BmcnVzAKAx2Yp2ZEnJqQC1DSv7HmoUAGqnQmebQ7NidHSKbYP4sB3RhnUKLFjvX1X5f3NDvHA58Nikk8WZC1W4h",
  "key20": "38H1ewRBsbSXJv9cNj89FNMYf4bbbhGDLNCbekKLLxwZtwGTLxquYxQ2XbT2y4QjYAg9JbPnnLdUWX5LwwweatNk",
  "key21": "5XDfoCY8N1UFsR1nLw9WpZ2MkmGzB5CxrSg88awdPurM4qAEDFqaTCvjWNCr8Rk3o3HLo6ncaivLMVQ4GUcueM8x",
  "key22": "2C7c9XqhrHaEPnvb14rvuF6Ni6JqTgm9y6PG7Ep6myFwqxTmuYe2PgsWE1CBJBhVNk3Ya7dHbfKKZR2fSrHfGzV2",
  "key23": "5sS2VADGfekDA55gB7d2s1yrHavDWvEGtFttHJvbFpV7qdPCFMn8YHRQLeGAJANYeXX4AGNQLxdpFLJKD3yXX7rn",
  "key24": "5ZXPSeYD5SSBbrDAxKcFvpc4mwGdabxvdQ4BTqR9pDXcioumoqezUqzgH3QCvGyjhXt5aMjByhn7Eo9dZtEq3YTZ",
  "key25": "arZnBQcQKWwdqtVr5cxLCScwjRi6t6XK5dCBaX7evkfuSBvqfvKKHE86PDs5HPXW78oizXqaLiua3wHBWZ4rhb8",
  "key26": "4yNj443aa1tiE9WpH9E5knSsEiFBGoDJY81Send4QvJYKkue1y45DduMYdgQHDGxvHaTL28R89egHYsbj1pami5L",
  "key27": "5axREKM2BUucBwk81MBpAJodgdn93a2B7W2d2AGJiaaUQRjnkuJt6ub1FzBjDvMBpaVgiaqno68pQGAcaVU5GBqs",
  "key28": "5cfAe8K2YX4rHxMcx5RSLVMZ1mMYUhCprZCFqVJxPYfRtEJa7iUyqsXZE8wbXNWHvgf2pdzBMwac8LvaqSZvdaKy",
  "key29": "4a3kzdn8ohCvfCdeHkeNhcH1sikhJaK7DxPGzbfqntPJUMSPAWgXRCwMt8EFNJGaFAFmTEN7aA8q2xSgqzcsPszA",
  "key30": "5iATPYTiPMBTe8W6VWaFAiTxdG7oUSQqUrz3mGpSTXrXRQCzyqxg9VmPJvAc211XWELHoLaR6U3nyR6dRFeYhN11",
  "key31": "pvHKE4eYKj8UEvhKMJGMtuPLqWh2ZTaMt9HNEJdiHmQcvLfxqAe5ZoZoaGECHncENkhAVV1yt4KKfE7DDAbeeht",
  "key32": "35G4YPoCiq6dzy4LzCpBNNFFVucobCgB3Me74CpwY8myCxgSbr1b86nLcxdEWzjps49THyan2aGWEwVToBJKsEwi",
  "key33": "3xKxjFGZmsfH2DgLtf7z7KGNtkDM8t9QFSfiLV7YzXtpkPrwePBRJfJMALDtZENCvz2fCs9qGj28hyx5KGWB1fPt"
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
