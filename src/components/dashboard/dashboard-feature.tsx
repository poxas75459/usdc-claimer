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
    "7SwkwrehfMDVsHmQ6rp48sZjEzMGmZahxtrzDmyjdooyuYpBsshPDhVFjsivo8o3j5GG7BdytiWEejBfk435zu7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Un4i5SpB1v4Kjdrm9H39PdQGJN4N4m2wEWqBCi5RqffBXdeQUGQFse9neuvRRVCR4SdLhgULLs33DdgADzWAnF9",
  "key1": "4Ef4MEiimhU79okSYFqtNVGgFTdugdmoovjDK91d69bHecEHpSCQHN2pHLJAW2Wy1TmWTG797bo7uvWHCxMurs6v",
  "key2": "2MeHeFtdYNDgkQkA5Q5LtNbcNm8Nzo4BZMFaDVJTLzXV9oLLxex5QxVdCwnxgtHLhAHV3Acy1pFhup1GkeJP5iq1",
  "key3": "2LMGJaGTHkfiwFDcX9iRD68y9HEx4MTYM2hSZPens4EksaghNvvwkA1MGELoagJ6e5y4xsceLAXagEcvVVaNNNiV",
  "key4": "5Kx62VXRUQEiSqUsnCt4YxeN1De1cgE6m5oukeKcqgbc73pSfvNYZcBGDzJtmLAeqyj7CjnpRgXkjwTgxA8EWsGP",
  "key5": "8brMqhJzBnSJLi5xDLHukCEw7ngnCQS2oZo5qYJXoZRVAbnoRSnLcTgKqGEtvCygt7MiW97ihyrwQ44Sje6SDaq",
  "key6": "3qeoi8X7GBHpChJrXawLiBiPcBJL1V14P2snxiMHrkNkFfJkhKFor9kf3TPZvdoqWT1d3ugecqdfy9cyax4WbBH5",
  "key7": "49LfeCm4oNk185sZjcZDCUS4EkWpdoxa4JwNQ3j78CAyyGMmxdZqkdQVVQJ3Q2T8NkDrgKJGX8EeWEAMp41T2S5W",
  "key8": "3dJ73ensKU8D2bpgGDbkkugYTvhUUFS3TXguhWrRh8TC5aVDoMEezVs6tX5bGs1ohf373BGjCsQ7yYwLn6sQDpbi",
  "key9": "4YTJzUFzvkhxnchho6WKmfnZRwKeXnQZn7oiDuCj7CTTXiJk52oPpr96wMvQPFZMrWLPfXyqQ3ggr2h5x7Gbrodq",
  "key10": "4fBabLntdmQ3XjmdevqTmNyCnmyLoRBCvvbFrRG2QNjq1i4AyrMCAFEXSWDst2SPLHi2uCd6z2wJ5KBkBCYrqzaR",
  "key11": "4PLf8o6KbCKA38SXQ78LqWFhoKzxntdJBf2ompcom2jZrw7grpr4ZnLHVdyynXuVwoXnRMTMT9C8MoCZ9vn9T2y7",
  "key12": "4qLQh5ZdBkMsAwm4pabUPBrtwefQrncFwXo3XPJgubwcsjBNNXEnnBS8BPTCR8Kb3xrU9rNLfAQhqKXUjDDHPMbC",
  "key13": "3wkR1Tkh6ZBALbHGxGbkB8vn54zxo6hrh6zQGxsDCVaEFoA12UmsAmR7tpF6J8zUm3B56ET5Yb5xg2o4h9BycASq",
  "key14": "5u7KkjCcopqR6J9j1c9EKArPxaQLk2Mb9vxyneCHNJTbPHKv6CzRX4zwFiix2GubypsvtUyVtvAntcBGr2y49a8k",
  "key15": "e9xxm7boF2d7mFatczjeYUpiPdDH82auiLr9x2y5MqtvZDTmKe4yeEXAx8fHhG3kYY9KShCzWLKsSJuR2CLSmAY",
  "key16": "2KNXyF6bi1rdzQKTJRt2EsstBKf73v9U3PVKoffApy6U7GxBvVUCkpY5gm9e9eMtmCm4zdYpD2pSHG4R412Sn9Fd",
  "key17": "4QMgwoSwgEg5QtvA4ZmYUNn8CvHbc6iv63ENSwxzzc74ZBUL2EdKMSagMexTFcsCmepa9qJBGqkL17UmzuURXtn4",
  "key18": "z2UnkDr3z9qaF2p9RZMHgSzVAMav6oJVYum85aRmmyWkDq8iceo1RGp15TEnidStfapeWhSRAb9ftkhNGDwQZ4D",
  "key19": "4mESDBBdxFSvVEGWFpso8pf4kV8RRqM4PGAoFF8CcBACfMw7pZ2fnishh5xwoso83Csq4pDZKWVqhj4S45X64Qf1",
  "key20": "2Ku5nfdwwhAKWF6xCqhdrxBkJ9rFwGtQQekAohiUF6kruLBvG4ESAnffTyh69EpRvnMYy2Fyzoy1qZx6WqWTQTVS",
  "key21": "CShzbJ6xdz3rr4WfESX3HBrKk9XQg5XYuHyZE3iiyY8FeJodFmdBWe5nJGRKT17WGqqMyUmUeeb3KUatQjmrfg6",
  "key22": "39X7piSYUtjMLQmk6ijJBH2TN5DFvuVTyQ8y7xn3PqR56dyFQBZ7Wfyv6Ak24YW93ttJyS1xiU19PuJYqrgEetTB",
  "key23": "3PFNdjgyrGeKw4e7oBB2vQ6H7tnhRRQtCkznBBvtNodP7JAUzwqAkvSb5KapdzSZYia85E1zdLkViEYLSMzRoTCc",
  "key24": "2i5Z7NS7zJABuyyDgBp5PShmCb4egjz2Ns48YcHYtVWMmFQJTUmhT67MJS5pJ1C6xRZCtEBU5o7QVV9k469AvkhA",
  "key25": "4EhQ7ii3Lg5ExFhWpd1NiMtQshWb3Js3SLL33mzc4y5xdP4VXcmwr2YKcqoMvWE7DdG8G2aA2MN4NxJKL8rWyAiR",
  "key26": "uwADaMiU1eJrU4zY6cRe1hBHNCMbdtK4RC9mc6rFx3Bunbs4H2NYCTpLFCimXZ72iCii71xLuwrS6Z2Sn96mhgq",
  "key27": "4fXvwqLxgHtnRGGCq9EMfwjKaseXehRxZUBdgePvHeYCogn1yGPibJjXMsa9iPtxDvdNLCMmVNJwdBB88fDvSgb",
  "key28": "5btPcjqEByo2ZRyZe1PpFbv6sRHJm9MewS75qzyRP7qd4jn6anT4jHCfYQWNxct4aHJyQ81isNzC28xgDV3eSRAB",
  "key29": "55y38631hqHr1mwa1AcPT3XqNoAgg3iwKuMCQMbXrFCKbZZXbr3n5acR8S4SoxqrUK6SxkqxUUuWLQKUmejRUZK",
  "key30": "456rRjE6xn78CDvkHdPHRmfW5bbWtZcizorMR5Q8VmjcLdXrPxc7qsuS4GoCNvrEte7P55jFfVvqu86rziWfsmWz",
  "key31": "4Rg2q7H1MzChirrPt3HjTZbCZwUdcUi1vrRxFthctNyYENKhtSsv7dHRBF972XmMar8trSYLjaNcJ3C9HxREHAHi",
  "key32": "5BAFacb3xkgjtBJXUndzuGe9wVMVMPhWpxudFt4mdEhGbD3HnF3E5EhkMMyC47K4naqEDgAN5fLPeLPjXtiL2e9C",
  "key33": "65EMijpRhykW3zRpQ8oKgo31MXeyaCQ26jvyuSsRpgkyhFvkroaDg6oa2GEohMGSyPudHyGtGcGKKJXJ9iHBfg1s",
  "key34": "2yNbAP6rqUmy7RqehPSnprfKbCNTLXivXth5fnB1Hx8bEcrUCLUTL6d37xGwJhuewdNE4p5DyJS3tEno58iwL6xh",
  "key35": "7HCxsJ2swpeGqkRsdBjNW8yat17DRdqLFxcVg7gUKqJN23eaa9pGuV5waWGAa8hV19owDmRqvQ6Uazw4pUePmru"
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
