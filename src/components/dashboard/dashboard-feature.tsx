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
    "Kqo7Ugh4LnubguGVjiwz8Nc34csoKC9wkD9RARJvw4LD1HDbn8vnWLmG9YWmrLq6AfvbXG4KNmjjAELiWMAYHSF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41BoEYWRMUqALfHChLMoWyuFHiqvP99dugiPP8g74e6iSfkaLekiQytxfphStkzbotxp8JYUujaPfK6gBW1YqVS",
  "key1": "ibnXMUhymmD1iP7ze5batQyG6dcCf3b6fdy8dpN54HuQxx2TnJRDZ974NC6AAKyE4XS3dvNB4sv49tBvcai1tsH",
  "key2": "3TZibLxbioomjsXAheP6TSy1gLsKmH1Cxz66Tcy6NitV1vFcFGbKYp9ZXUeF1qMoLKy77T59zgHtxttv6NQoXtD8",
  "key3": "5KhfmXr1ETgBXqrrjsRpXAVYmFPLUnabNmzjAgDHDahHXAfkRYUwzsYLm6SzaNMUGHGVwfgbKMDbnj62oLa6TMjR",
  "key4": "63nk9KM4TQtmGeuBi1JSoWeAiDx5kAM3YommvSKpRovLtryQ2VwvMmHwW7jz5tcbRYbxLAMvtsSwReUMyDeSntgc",
  "key5": "4VXPTX4WCkvY4RVeRxBqiqepyugMgMZrXhHFq6DXjs6ffZupmSpWteW312qt7hhSYgZwZ9MZZp9w1yUtBfD3XzPB",
  "key6": "4qNZbnAJ3v2ZHxiMN2e5fiC5b5Zex4YedkLxPCo9hvraBy1tUhc2C5uvawiYuzok5wUCTG8KougvWM2E7KDiad4y",
  "key7": "dtxjKnVUh23urhay6L3WPi9E66zvZkpan2B8Z3YN3m7kEaAubXfjdAjPT8K5JWb4r8Zersfqu8bTRMyfmDL3h9Y",
  "key8": "2GzgtWDvYJ1EkvMGuPRHnLBCxbh87yxVJ4NPW8NJgM8VoD2CGLts5kQndaGHEkkSJzZddNWFuhP5Ke6isiVkrmT9",
  "key9": "3wcYFdFpTMkEyYh6Q3c4qBf3QoTLGkyrwQKceBTATSF6UGyDinGaPDjnLPiFKpBPMsbNF7STLbAbmdXRSsbm5X2h",
  "key10": "46FozaypiudUYqMMe3VxPCPa28swbDDVsaEtT2GtPeE9pz9S11QhvjFMV1mQhBwDp9812iNaBzJ8QucGTfSxuwwx",
  "key11": "hL29vGtSdP1qZQobNu1WVn3RfmymkNRuV9CDZMa11hwMFffiDK9vbrqTUhNKqMPqzrq56xaTPJUr7UZJYJ4DSog",
  "key12": "ZK9jLXTzyTtqCe56ygRRkhxcvZ3DRyqDVaFYTqanQa3aFS62V3BMRWfAXDs8Yq9ogxbB57Yrc9Pg44inRd55DV1",
  "key13": "3FKv2WYvCiXEqXEqzbDTdpnndeDEpVZBgu2Fc9F7pWY7cwRaHQ7kBCuo2mGEcB8nXPmgRRvhNF8sCFL35aj64rb3",
  "key14": "2DphWAG4uU8UHw3NXULH17ZUYrSMgxgBcfWzp88gMkFYxwPJXYiJLvzaVoNuSf3ev89fHwP4p1hhenFYyKbQPSXc",
  "key15": "5vm39oGT6JZStKcWRBcXok2gsdbmqBMQ2wqTSnwwmH6D92hMroRZ6oxMyDWPJwVz8m11Y4aZzJPNTHqM7HtYDgSy",
  "key16": "2WhfYGTvNQHFCWs8yQnMweXfJH3WM2aLFoCDw5UyxPmETC2mggoU4DADSqihhDrvaXt2HmFhWDnLe71gKD4brzQ5",
  "key17": "2tsSUhMDmZHgRfmA83SUxiriyGeWXA2AUZFjJ1nNn3jeXG16GHkP2werZgn57degt3DdrpT2fjSEKpPT7Nw8g7BT",
  "key18": "4t6u7XnEcFCTYTxQhvKwRHmwhdGmqWwrJYdVduvt5eU8AKZnDY1ehb6Pwisa5WjHzrGco84Qw9gdHKTNcswdUcgZ",
  "key19": "5RBXw98uV3ufmuUzRNrTmKuJcRSqowuNhcLiKzM6nDkqe6pLhKDecd3N8QWQA92bJEZCsTJ9q3jqE9jrSReo7DGn",
  "key20": "3m2Aez7FUa2i8hSu2m4t36wN6wYoZa5SztALcs6yomm1wxNLuca5iMLFwyc1UBmM2mQGjxjbfiUa1HctbeLLEGn",
  "key21": "54jUyv5LUwNt2fKHEfAcxAwnPNm6dCPD8GrzcciNdufhsRXa9E8TxoySCEw33PCWG5bDVQBRE1itybRMBfprik6Y",
  "key22": "4YCfACqb5ER4ZRYkAsGQmPaBpJKkAqezHpMcyg88W6nfttmhmuPcXHRKBQuatg3wXEnRXk2q9143MVHzmzBYBDS3",
  "key23": "zgE1UMTrFRs2sNM533ugLB5ac9TrQGngE3DkVAummtLDS9BmbsWoEhyZ11UbfLdwwp6h8bGkRDj9JgMyJ64YiRS",
  "key24": "44w6xYhDe7cxDwvsLCeGc1CCYj8X5Kj6ub3SNNJke3dyG5vsBZQH6pQgQCyEs3aajK85BSwx8x8VaF6TStcg1E5X",
  "key25": "3pWr8JNu1gCYVawz5PGTw4gV94MtqPZHAeQsN53fPSD4vdCwVBihg7bpRDqix8GBJdvCGVyo6pvhkdRf4rTpaXxC",
  "key26": "T8Lg97jytwWWdvdLS1SdTvXRXYo73zAwY8crAVygogWh64zw5tQsHS5YprWike3Dt61VEmfHKcnatK9eTVSejgK",
  "key27": "2RDhoRNvutAX72MUHwXsGdgyuE8ncsiK15kMWp2THbLX6eoqsaqeN2JYj75b53nfLyiaEZmgjNy7C4RsxF3kTfDu",
  "key28": "y51hWH8xZjJxBbYzW42rF99DEdxig3vwcfPZQcsEJUnadpuXjxPVJLDxmG3FZ9adV4JPccHBQntCT1g9BWzqvQc",
  "key29": "WgHDtWwkSPVg2JMEEMyph541MXpMERfCS4g21hYvYCuxki8ERBCkozmKp5Q5HP182CVTVWPApH89jfGH6M3V2RS",
  "key30": "pNESoqppiPrFGhpGM9kJZsgfqHKBsBUjfs2U3SaZ7tse3mh8gVGM6bUZAqiLjjY1to2sYJyERTfVcxoAP3p6Tf4",
  "key31": "5MRgUsFzoxm4989YTdHWF2JyBc516iqTxrZmZ78FquEzKoDRyUhG9LMj5stQgFE5NncHT1ehPQoPgSLvfiBiBCN5",
  "key32": "4dX5bkPvAdiF12AEZmAJHd6dWqyWh8mpamDuXdis21fCXgcQ4rzFqHAoGJ5kafmF2nDcjHD454wG1TT1ZJvyGmUf",
  "key33": "QyiZPfZMHXKZaHhNnoqjUc9ZzYDoMCMgeV5RKh9uor8vxaJhdiaDmVBZfyow6XiaiKF8UdCctjrNK5WTz8AiXU1",
  "key34": "3fEmUTEh44y1GLtuaLrJjHaHfRzCVcfQUcgYdYYQq58756AbiHC7V4UvZEkK6SqtDP456tMpYos3LEJAZPyxazvb",
  "key35": "276L1fzvDJS9j1mzrhWuKhVth82D2MsJDvCi6A2C6GzFU9aNCM8MekDGVmRNLBj7ZAEWEUe2vPXjfjeJMo8k8qgs",
  "key36": "ToP4wyzMuWTrfdiu7APNc6wE1T1nLYX1Qsma4eyHfxNxQdc7a5qC1phgFZ4M442GJwFosPHYZRYiQ4orS8bKUHc",
  "key37": "45VNQnAPRDqbyDBZFFzbdQdCwJLf6h4zzLXAabv8gyKjHu1iLN2tBmgiPxFKxaZhP2K88q5cGjnaYLmhPYQLM1Dy",
  "key38": "2eShmHgUCeVpXfba9ZouHPhqGi2Y5vviHZhL6SYMxy5cgEvVRdPKx2QUpEHfsyeVci53YkGMYuBFha3bgFiDqZTw",
  "key39": "2By1UVzYdzxDSZchXKbhjT1LtH3LLKp1GdeCTKhcennVd8nX1q6RjoZCz8aj5dCRs4sMS7ci9nzy4sgfpb6pGZV6",
  "key40": "2BovqMsq8zGudqFuhKYePsFbXsc4rEiURV6PmQYLi5v74qq1HPcWDpzJ4BLiWNVm9AjebsnjXsRintMFnyR8YoW",
  "key41": "2MRBG4ocC6J7Np5QVXk5pnkdZR1Wv1PULhRH2j1xgf3hxTWwUo2v3MZHVsckrTiDFhKgB7YgQdeUMS1tN7wWAiKg",
  "key42": "5TtXF2ugAAZFKEHtrC29oH6smEgiK8DQV94qxLAWt58HVHXTvUCdNFjwNNS3LtvMD3LcSfKWYv4sV3UTU3pFZRdE",
  "key43": "3bj4JVCn6w5dugzMqZNNHn3d8dByGTt2YPgJTjcFmLBwXLbpfAJGj5m7tP3K8T8aeDqBqi7XkT866Aa4p8g1TYKS",
  "key44": "2GCSz988hd8oaPZUF7nKSyoQdtLw2mZHhk31HMbjMFPy6Dry28fD3kCfzoZaKgRzbT3hiAkiCoxAEF19unXM18iu",
  "key45": "3xwoAzzBe4ZrE8F65YHW3xuk6cCykHLvx15SJtGJG1am9Wn6x3EjAkoXGWaz3xpocNFtt62dMixgPWSW3AihSfj1",
  "key46": "42fJVqsxMCzb2HVD6bKJ5dbkeKkcYy83K2LwrcN7ffovL7EMYv87WGrRLaWGdz4aAMNr1KhqYa78Q2P1VVSkZowL",
  "key47": "3EXvbvDbmq1mXpJnDYFaPYGU3qw9i5ZqeXL7tj5yb4a2wKXPxDCEqMNX469WAxJEkUmmT9BStpBTei8Yo4Um5F7g",
  "key48": "47RA2kysqSktRwTFwC1ZbsD3RXgAo9aJjYmYnnZBsECCdvfjcASDjNm4CBYFCq2kPpyaaLna2EJbrGcTx3Wq1pXV",
  "key49": "2A4Q5aLTHuUYKXKWPLVWauxDYXE28BVa3pKUjMKSuViWmbZjtyn1qAHGooLtwRm6fTrcTJTiCvUtM9o9KexpT9sa"
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
