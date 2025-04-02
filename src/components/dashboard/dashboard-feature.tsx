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
    "3sa486s92saTqvweDGUaxAacxjfEiFqZLXX7Y1YiRoVnXhsRvYFNMwjeSeLuPsWQcBYjaNwvZRdbQ8YtSKkTeepc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qteStmtrGCw6wLnv9fSVKvp9K3wtPgXYNF5W74W1pFQ6imppVhqoALLVPufsH9diE5inq9asNJmwz66nXgBczf8",
  "key1": "5Tu6W4o6RJbUUyCzDUYVaGLDXuwL3orH9epcMkJFmDzBgR9A9td7ry86CBaRqSj14jooV274WmZNWdhqDSPrDitH",
  "key2": "UK8QsZMBJ3T8t48FCNJBkjktoFTfTxht9oin2nAW5NFn1RWtJsGqjnz6a2ggpqcVEXPipBvzW2ogz5Yeem7U6uH",
  "key3": "4fn3kiDezWs9yJ1tKzRcjrmpW1ysjb35w193QmB3nnu7mdnN1gD92Qq3NCqhTYh62UkeqgtF96KqSGzPuwfGKbq2",
  "key4": "5cjRrCNd6Ry9HvC5xktKhJng9tLFFFPf8YwrGf3RpjWET1Vwo7vL6xNagKgWsVKjTo5Te7GPWNEWQBHZaHbGWsQs",
  "key5": "22oWzZW5JsAXYTmkxvLJzB4DH2nNn7zZwfzvQR8UmK9KM3ZTZh9F7gXbAZKgP5GEB1EBgyGbc9yTW2yDE6PpWkLM",
  "key6": "5siApWEn3THa3pSeRSdzA8RSoNmPyD8QcGAb89XyxCXacTdgm2VvuaQxCnWD4JCNYfgtL2GwCkFzWezwvLBnaAnH",
  "key7": "4kfE5CEmDgsejZAtVYzEKcTN7uaeR3QyqBaqFVuH47eEBYKzFzxSb1TcNqNQqcHe85nrcYi29ZWV1ttJaCLgdnhW",
  "key8": "ajBVUugJj17nLXpDhBoMooQFTuFsCoXgQyxT7GBvnR7mubVDmB1jDy7yHmbsKeE6HWhbome6rB9kWL2Gsfyodxq",
  "key9": "9wWrHacYHBtftKbEwnLjtZ9JKCsKzewnwLZxwpvn49AoniTWLba5U6X9yQuXmeDujKDycXbpWAFPMR32JKsHLjK",
  "key10": "2QtiZXjBnjZVNhH8DojADXZJvxPRR45w3hhEcfUVi3GL3kbB5L628GWUMYGSvbt5m4CPt64cZcRLBMbMeWYQKjEd",
  "key11": "43ymYcHu4q9U6x4h9b61Ra1penCLBUsvnqjyzvEdvvxHyGZyjuXsdx2ENeMn2S6Z62gE74F7ECP8hF1suetRNJBs",
  "key12": "LKyC6oxibWZT6VAY3jGTxwSCQKPgZJEGndGMHtA2Zxo9G5AyRmdiTd9PrVQm2nzACeP6AkBL64FLVjXGodsQWvL",
  "key13": "4zfNau85o1NW9VS7VQC7JzQazNoK871qdCzvm43iAzA7iPKg7E18Pwxuq6R1k8osiBRRXWm5vFSuT58zPegjjjJJ",
  "key14": "2rTfQu2qYkYBU38FEE76Krp7e2dzBeUNXN8uufkdrZR5AWvACcjeCx7Lzj4WtBaedQFPSe5LxTJdqi7kkQEh1KwU",
  "key15": "2JjE1EEcYYFqdmy2FwC6bw1RKECcZaeyLUgLEwRV3enw6yNsYmzYYmhYj6vgMCvE9wKf3GoyFZQBJuD4fjHZtfo8",
  "key16": "3HisShTYUrKDUoz3KKhKPcKtsx9DkQQgB5YXbYJjRSEmR6hFPHsi4btxtck2nuVBEdcxjFFCTbYVtn3umxuFH9Ni",
  "key17": "7nTVfm7sn8W2Dhmoqt7UB8MKAuzdPyoxnbSiGKsa3kb2CRFeDtSZ4H4nxtdVEHXqXdYnrtwrTQbupNyigTd14Dw",
  "key18": "67rkTWw8YFjbPiVZk5RUdECDgRY2K1hMK7BhRt78Yxxz8cvm13T4UkWx7jVqQCdEb3jndFfLuWnyGchqb5egiZcW",
  "key19": "5xgZujRqUsiaRK4bsMpDnp9aXpJyBrhF5YduEpVi6ArFbz3mkypMggywoP5gigdJEivYmLFhg5Tpebsc6GAGkHye",
  "key20": "5xvJ6pkCxnPrz2UfkVLrVsGrirPaUg9gDY3nFvqhsHvvGEZESA5s96UXScEB4qMqoutuwgHcLnVuPuqmFKD2Vbvf",
  "key21": "2v6dsjt3WT9mDfZJrpivWfXk73bQMK8TLSyamFbn9zjboAuPiPVk5bZrNbSNswX8a8EWE9t6F9JsEohTvrSAYWj8",
  "key22": "4P3nbxjeDEaj5bDPt8ZVs4ycffFkMRTcMLyNyrj4HE6MdvwmrwQz4CmvUYjyMSH1GEdQZZy8jRWFBT3SCSN69s1i",
  "key23": "3xk21qsRFTCRWwdLPqsmEGEkQuiL9uSfiGJLubcGAuFuZuLvxTNuoDPkc84YgaULPjEQq38maNruvsRngpsBwtLU",
  "key24": "p5iPH2WnkzEHBGv56oJxJgnUkKhkEkhj64pTQL5fuYueNQDqXE35j8rBsQQasXG8cqpSGyotvypKrQaTGqgKQT5",
  "key25": "2S4ddDjwmZftFgR2hbC2XyeqiJLiPiQqfd3M28EsJ2ZYLMXykiixfkgRUtPYXg4bXRdYS2doeG38RSjCLYGvxRwD",
  "key26": "4iBHMnNvvR8Ga3HrHEZ4wuNttjE25EzdzAKNqzdmCMuDNjF8HV3xEpdk7T8SY79mMRSzHT62kPP24C6cjah3f8nX",
  "key27": "3KXEvx2dtDeB4v44MqsnWxMZoeaaCPyfo3SgbvQhY9fTLjYDLi7oWEhKucEb9Dk3tknkmwVtLwArfMxCf8G8NTLL",
  "key28": "5hWnui79kzH9cCnCQZ9AD86x33LHBVez6DsEhe44yWvPdfKe3kHXZLczt3WLUdhHxs5iybpgSk2o9cpEqgE76wKc",
  "key29": "5n5o7gJCdwX84m3Z4KU96nhUyKQbG2ws67tmhGQ6qzkhNj8FjsXJVgRV4yngM5d2jMuk3rPPpj6yPtoS2mztRXp8",
  "key30": "2AjYhyb8C74fbAygrtwEBbzWxiJSyWGshoYvnzxagCCi4d3x9KV6BzFmWbVE5sjiPds8sGy2FQAMueZezLdKb1hk",
  "key31": "Lb7FRRzHcU4PEKarJXf5oDVH2KwWyaXdHbLeAZgUZH1C3AG799cjPxNgPVzV35bJcxXDpU2f4XqJYZ7PVK2UWZM",
  "key32": "5nVd55M251DP8vBbojbmpy8bCe3knRMXb9rrY4wUdgDC3sh39mujKjTu1G4jcEXHPfXSaznH1MogDWc9PK34YRJ9",
  "key33": "oPoerkxucS7uiPMDjBQv4PzfhphHbjgSGWajDfkhiGnb4WtBM1UQwSs7mkXGG5uuy2SQTKe7zaNVDMAXnxuiTEC",
  "key34": "53rdL8LhZvTRroWPeAWFLBQdFKg1ZccgXVBHSRCw59JsLTwqW2rkEjkhFP4HzzsvySnWPNdfm69pJFJDdn9nVhTM",
  "key35": "hm3Jd9UraRnv2btZ5hia4LVLmvenNT8NswUfRJRt6BT3Nyf2ctAwJRwHkR9JrfMSzq2FWCYq4WBSzPKT7cSC2Vh",
  "key36": "5FKHh9YWP8pg3N58yxpbep8sknoKCBFDjH4HqKsVzmaY7SEkeXVG3bDu4YYSZgZMeq5qjVcVsDFcAGHBQN1MnEw3",
  "key37": "38XAZjyBVj1qyCqdkVYwsoZEMLZYEMHpFja7ZMm1mJ3qD6sQLdNP4cLq4vVsP11zpqLNmQSDHrvMGasmzvafEVDT",
  "key38": "46AsbEFT8WWghETDMfbJATpxBtYv9xPa51wnm4nB2NA67nNDVew1MNijdSrXPyB5oVtMyE1zwAGHqFxYyCfFLSHt",
  "key39": "3brtdzMRcFMpmMFraCRUoJugVQuEexmDpkdzoz1uDcqs6aZikiGggrLwz5VEqypwievq7HyTpYNPXrtP3gKUXAAA",
  "key40": "321DPMVFS5iqEwvtmcgWVUi3GWPeKmcqyiNjxgSwX7VKfDL9LZU6W6hquGmsjuTpRWnnuZbDQJBio521bVDpZoyG",
  "key41": "2qdQiAWRfeKzGfnSEtrCTbDJfhntZESGo27ob4bHe6nTFsS64FYybk1VPWNo9qWjpvrZik7abvw9H1NPXR4h7wCF",
  "key42": "J37RgTjsxsX37PcT5AWxjKDke4CNvMYwRvQhGnKQ22TFE6qQQKSGrV7DbDb8TgTZ29AqBLAcBaSuxTUmTN6ZAa1",
  "key43": "zGYqhPJe8jcbL4CW8ZYMqUtJjQLn1t6aVx5Q2CWZrPbd9EX7aqkSXvaswoLgsJDj9uKxgiQMGyrvBaxToSTnNvm",
  "key44": "2fDxGDzUQMbr8b6zjpuspnN9dwhHxX7Wo16oNY4BHWEEZP6W5m8CkKnUZC4Yasgq1owHe5cSoS8CY8m88vCjs7zH",
  "key45": "JKArLzRCU3axC3pqVFpTUuBzv592ZDg1d8QmfE7jyABVfRBr42cxKE5k1E3kBPfFbK6wzRgfWmoPw4QGYfvcTx5",
  "key46": "4gzgF177vQk3FdUjbBRdEQTev9igeSveQWDdMuKtZYEr1stZqC3T4Rmf4ZvJSVFBCBG2trhfUPbM9RvFb2o79raU",
  "key47": "22Ub7YXomLHRt5YoWdrbHqEnSPpmi7RiTZrkVnDYzrZvY7MuzCA9ioAtUhB2WPzzt1JHRu8g6BqYaznPiHVwqo3D"
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
