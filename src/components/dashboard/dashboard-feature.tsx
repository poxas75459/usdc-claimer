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
    "2qhjQTt5hdfFJErsZLy1jiMiHwy8v8xidq8QDFF3UQHihyidwZMweFmLpz6zAELwmYWSwaKwFoEa4dfyAFHYLwaZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SYA4yPBYsNNQKGe3LZk1gAzW1yS7mhdNm6fTguH9a7iiy3x1JfdvznK1D5tnrwSvXNNHWHKV9Ta5ud1hyKr9if3",
  "key1": "5Tt8YKNaMqCyrREuKZS8NgQJ8vnw3Y4pANhouaTRpiAv1X6dLzjytGnFQwSeckqBXB6nnFq28347sPTy8skr5Kxr",
  "key2": "36vahci1oExQ1NHt26s191xYocnz4UVce67Sncymzf6HK6wLVcEmFyj3dDCEiAn46Kg3UsbiWhMNLNQXE5U3WXCF",
  "key3": "2XfkkrcXmZptRpcaeK42swwR5raqGQHkDakUhyfqZ973Fn2AsGz4Gzwin3rfRrid5EQpXnsTEh9HG3eoNvY676qC",
  "key4": "4yb9Du1Te2X7PvBCvSvjJmbk5riMiYTnVpxeL3VSE458WUggPtswLn5JDtgA8CfeJJQb2qwvbjTsqMNTxgY1cJe9",
  "key5": "2FefQKMUSmSEQRGPYyN5Y5hrPqoW2oUPaazxZtzDrwBxwC4yzea9xMmXLWe767sM8vjYibYNydzTQAHprr71PZnW",
  "key6": "JAFKG4LXhWhGDz3ToEUMN7LhFumvRNM1sYqeGqEi94fn2grXTQE7HfGKijVkJokekz5uk3gKiQ3QF25SpodwSj2",
  "key7": "5FqwfRbb41TdkvGgTmroxLfE5Eb6GRV1BpC3zjwhaPnQsfozD6jXf96sNR9jcUoWhUX2RYdy1L4Vc5USDaYfioHd",
  "key8": "nkdppCtMoXzn3eQ38qnjqZiEP1p6xBHRvHTzx3drv3GALEki8NrfdUJRSdnurdpycfPUUW4gNc6zm5tCJW5JV8N",
  "key9": "5r2vQH7Ptbz44cYQ3ArhiR6cVYy1DDZx5pTvexW4FiybXrsXQC1M3hmZMuQgbdVXjUyY6UR4FbJBqCxiT3N9Shjt",
  "key10": "3LwcF4kiqaSZMnMWnqdn7WBubANApLxxmTprEQthsds2Qstk9JVcakybTUpU5WQQqjM4jeNKBJtaKbTffr5gJaLs",
  "key11": "3SDGwcLqA5d6nUevPP8dqWZ2UZSXRALjN2dfcQ6Suwoga52uAYcJnxzCpu3GJise1rxGjFiaC7hupVVUN79jNPcF",
  "key12": "tUKTgrXNfTrEhBsejPtCiPp14A9K3HptK5owusXyydqQSz87bzvfucwe4i6r6NZRE9d5RwJUxGfQE2t5aRyk17M",
  "key13": "46JrRzPbjdGKjGhLCL3bBC94e82Xw7dLS99VgeGQprrsQUxnsAZfKNG3T5L1ggz9eDAjEmNQX8ErpXid5f8sRETA",
  "key14": "5dfyqCBSB9F3MoEBdTq8iTuoEpMdzFTDTCBfqH4xPNiQNZQ7v9istCxnScZkwWZFr7JrdqZUMDjo8y2d9hwyn11s",
  "key15": "5cjYn6fyJZiihvwiETs7NK68B4qbEUoaHbtwP5m4ttEjjkqq8TkVCJV1NxUih1EPXQnYuiiKQeQ9uvV6dQqCJLCr",
  "key16": "3qdfeePcmAvZJX2V8uYSM2XA4nXLj4GCsGXAkVWd6PosLoiSCMZXQLsmV5o3pZhwWT7qi2Fjy6PWsPRsCJBYtiXV",
  "key17": "5Zg7KERgFNAYQaRYks6j1yCFtmTZKy9rrndbJDLf7VzKvAESZtRcTj6j3W8EQumKiJBztaytEiZ3GsVWet5e2cb4",
  "key18": "2KhTMQ8brFNefME2M6uPWQdYKdE3knQLmnPa3TJFeQE5kKhG1VwYBi15ydP5yKRWvyPVPTmxPyNeEJf4iLgnEqJd",
  "key19": "RJiUdPTRrH5uK5QZU7ANpTeCjLehSCffankGCgorY4Jnw6sFkyRt5uByerF9CLYN4HRiR2xTUuUzWrDTkCKfhD7",
  "key20": "3jBe971fPHyqD4EPfMnZ3aLJSDTod6mF8gSHjurL8VSUN9gsm3R3GD7hN69BZsz6CYo2answFq773Yjpjai2Q7h1",
  "key21": "3skz34tXrDyBqjdGYULJwxaJu7895HBn4tQmvZ5RaBHSdRNPRFGpeUkaCAjRVbanvMmvg8RmyZ2UnKquBHYcF6GP",
  "key22": "4p3ABfGguZn1QQhiQvKdEFAHDXbqDrpwo49NajbCW3SAQC4tvh7Sfuv1CyP3MAzD1QK5iGo92SRgLcw44jkUJHqD",
  "key23": "ANSpdpVtRdy1c9X4GNAt4PoUpzQ4BZ8gbHoukFFCrvPKmW4UJCsHBTGa1ACy4vPZhu7Q4k3YbXAouMz3qkRnUwM",
  "key24": "4Z9oysSkK4iRVmrjVspXDQghaKfX2AkpkhbqykZTmqbeYYsWMtVxee328giVsHqdDi9dVTuB2S75Pws44efoMLJ7",
  "key25": "4ZBit9pzQRFd7Pcu9bh8H2CULACLACELvUkdKZbyusHPJ9HGdGcmtKwBe7CFnzFiK2icWHdnGhrnoCWLaGm8uyfE",
  "key26": "mdwAMs2MP3YmgjqQ9gEQBZwy3J3FvUegE86Qo96Emni7oczvu1iNybZtFUPgz7Lo2pj9fMjwKcgPHVTBTTFB5MV",
  "key27": "3VpemLwidBpAbv2HpP3NTqAFeUZxEEhR855GsNzLjp8vkwdeEZfpKRoudtHbTTHhEReQEEc3uJBDvT9cvLp9Vkrp",
  "key28": "2aJT1bWFXcBm8uk39CW1xJRkK2VrNwEYXRFH928Y1QQXkiVGw1JzjF28YsTethwrzpFA9MzNjCnWzrEbBT8Kb7Xb",
  "key29": "Df2eWeAoRxUEknQxksm8vYy5K5mc5QcvHvTAms7BAD2wXqegyagFA4v139qPVgbYUGAPVaeLpYwNcBhdFSXjsGy",
  "key30": "4tsp3o3BdmmpgM7XGKx75osYxegpx9FwrMrWoRgMtRvG92ARGBJtDg3PQE6c2sn9Gev4TD2D3bjpzVWhpHnjY2vo",
  "key31": "4mZDv5KxoPusnpYBvrgDxQAR3ZG2M9KXoUAJ9DfMGNpwesCKWFKJb8Nsse6mKwdDwQCgNg6WLoEp7G8KuipoPMVG",
  "key32": "4phM69QiQcx6suc5MAwB5sD64GfbsRxw8C9RZkx2KuDQUwXaFnGyocCvSrHcTtzfnh7VDffSLNtQDkPHUuBbhR4Q",
  "key33": "5yydZJukQmwdukSWUj1UkTfvjHViR8ofBp9tUgTV42ngZpyo4AKGTU6Ajrz1VxBBYKyPis3vgdzJ317pDyaXKkQ",
  "key34": "45VEExUqcGWS4dfcZfh5EE1gVBPZV7FtY7jRqoQdFqzpNQFpM7jsCP79BF2FHrDvkU8oC4mzYRKuEpapwvW4gyLN",
  "key35": "2LhwZtubTxoGtNaGE7xjjaRZKKfHFKNa8x441piP717bEYKJzeEjzesUFTJ7SdXUimRsPBLp8UBFxr6gAsdBtMoJ",
  "key36": "3AFvMkTxZvg55TYMwnqq5XcAvfEFCTjX4uVnG7wb6yCWYsUXFkeBUu2HTogs8XCfKc1H7X42MgvScs7YwFvbE72b",
  "key37": "4nQ3S3NA8SFMVpAXWuHTxB69QT73UR9Knhyz58PPu8tHG83XJ3Nok1kWzACGQD9f25gYbAr94GKX6KZfcwwitLXN",
  "key38": "m2CKGbsA2aEbdr7NqxdGxjKKjPZ1ZQnpAC6c5862Z6eXk5YwCJLwKdi7hVCSLNftD3ML5kK5vBBSpPd18r2Zabp",
  "key39": "3VNNKgxARpy1nYG5Cc4QKL3SuUUscToDpKW62Q8GqXW7uczd7fN97zXsQ8mgjsGwCSANtsdFVvtFuXa7nBiEynsY",
  "key40": "Ypwiwx3wqhzuUSEXiYx7y8wtQDk8min4JhhuTSKRsGUzcoKYZhM6nroNF1YnhHTmGu5WRgAiv9xAhzepdXe4Heo",
  "key41": "2ytN25JdYAsa75FmVktGSHesPDybmbPYFr3iyMM2PxardtxpPnrefAF1GnmnEVLQNKzyJ4eH93acDkHyY3uHngRV",
  "key42": "F2D6qWPs9X6j8jBMoTcLyFKwbYBMDJpuBLyTJXj3QndLWxL9MS115yYksZiRLRC5q14L9P7B1eZWFq3wfWkN4ZS"
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
