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
    "42KnrggTYjYdoMt8hQQZSrSE7ZTRZ3zttH95hJh7xA54XYcLxUpZgDcKybZagxy9RXBQqQMtBasNVYmJxen3GAM3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VS4ax5uojmuzDxkry1CQxoKHuYozfR8DENuWd9w1SwzdXRrd4VCXvgZ6QbUj4YewiatajU1cagdudftkYfHU2yn",
  "key1": "qviPXnrwE6byhkgRu5t7Hp2hZGsyAFpienGg4HDRA2Tw1Z3k6TemRZZeQs66g164m7Kv69ZkAW3eKhqJ4y2j8z4",
  "key2": "39pfPkaz8gk4saHmzNXCnqBUfPrdRJHfhqNGhTsPvAYUfdZfvPFjVmtAeVf9tGUwSXFQg2gFJyyjEPSbhQbdWJX9",
  "key3": "2YTEuiDoZ2Bkm6Uco7LzLcuFp1RnwW4taWRnLFNzBzpodtvrxpAN56qUw6rUayKUE4Pe5HB4BKNcCiKaSEg8u6M5",
  "key4": "64ewQSX8z1RkPc14mqwLAGj7JkzU5kpoNM6D9tHtNtzsMkDa6n1BU6CqZsi359FtPX2eLfuUSCuZKb53cAY6nqBK",
  "key5": "3d8Lzg1LkEVThA7fVpPNF5nkixcUdXo2gN7XAmP7rXHDfZp71FbjEfqGm4sT8J9cNVm3P5phANFBxmETGxMjk1sB",
  "key6": "RVhfkzNsrgnAnykrbMoXqZF1Dak4DviUkXqJHtj4PpX2pW4Qw1q1URC4p24kyorbyQoe9okQP1JJ5Wi5zsjaPdQ",
  "key7": "129y6BXEd3oMquX24HUAXdFmDFfRogGpCxabao7wHEaQZ4JDmuQaMKoArVqjfqWVBWqx1SZEZzrXytAzWEzXv5LZ",
  "key8": "5Q1TNDpsuo3def27exsHVfXvTwscmGnz7kwcr9D9ZDviCwk88Y4CSEXwba9N1772HfukfvsJz59NMJ5csDosifAH",
  "key9": "n24zmkwXiU8rjTNeuJzoWRRAjxRBjkzdstf3KZGZy7BUU2L3geEt8KswxUd4rnm6b1TcyzheUefCVBBrZqPPdTH",
  "key10": "oMvZkXaruXs5yukYvHhcg7v31JcERMbLRfJ1SJNukHaphV8gVGfpcCJoHWcoPQBvzMFVi9DALmzsAWomeVRB7az",
  "key11": "Uexjz7ReqmmcHEt3TyjPtbqv5E1v4uhD9WvLraUvSeLNoSTiNThy7PbYy7UahzYPDs5JwwpaZZNrtUfdD7jsp3L",
  "key12": "2NgHdtKJJCSuNfzfkRWkqwMANdLhqFy6sGoFyYFE4TzP1j6aN645WcZrZnFD1r2bjDNbzcpDV5z9LskpqzMRZAha",
  "key13": "a3vQQhKLEiJokcdXKYc5bcX2a8DcqtUWHL9xzAXWChxQLHiDUc9JchEHDDoZahvaggiuHxrvUs41wvSL5yoPp8G",
  "key14": "5At6ehkEYAHzhd8aUz77XRXrDshQUdw8sbZjGTbdfdsNXg6oUAyqi84we8skp1MgQ3CNpbR21NLiLeq1usMG6Z9w",
  "key15": "5p8oWs9W8HmtiPtf9MiQWJpzQQTyUmH1LkdoTmXJZB7YFyeYkNVMxJ68xSKUFDMeAeEaQ8RB8M2j2LJ41S57zKvC",
  "key16": "4NnfjAfh7sP3omCYbhgE1iRLyQRMGNnp6nyfLUpmx9o3YTdMde2zoYSVqiRnrZaZsC6fv5oumk9sz6hzHWMQ9JSo",
  "key17": "5trUJFb9JRPsdF11ECi8jbnvQUSSSdvMpnXqRjEZnTYR25jUdm1RTV8NL2ncX51JTM9JfkCTshRXfzi1SHkGw5iC",
  "key18": "235S1uE7zwtmGBbJD7RjzN9pFmDh5GQFo6deJ9vCZJ6gme9mbJZY7WqXwv1qCFi1Xm2WQ2gn7vcUPK4MHbV5kibu",
  "key19": "5QS1AEKpC6mZX6H4Bxx7dMSGGkQFqoNn9DqmPZdJDU6ESk5xvcUJFu4YjZieUaP6Dqgn6uFBWTy5PwqGCMyXRYTy",
  "key20": "5HyMD1ukZygTG49zHKPU9peKcjMwNvyZgHFu84vWFoN3EVUNAQZuMsRcTmTsB88LXKRtNHiWoGEQjMzMsibUBSDx",
  "key21": "5yiC9nQVq8mha15GRq5hqWYhHoWuygNE1F26eDW9WFBZt4Ai7tcuvkzpeXz9dx6M9YFUYA2pRTQn919UZdBXJWQV",
  "key22": "3DAJxtkCwfpYNKLVtSsjXAP8q8p1qEknyMUrWx5F9sjmfpuF7kgnzVgTAogii5h866qNwLzhdeVNPwDogYeWn7iQ",
  "key23": "35oDXbDppeicZg9T3dRfofrTfjZLhmzpcUAjELyt8wxU9Dj9mgsXHNH3cZKBHaS9GWRWCz76QsVpgUJJ3RFWpaQr",
  "key24": "5Zc49MXGHB3ZtBDYKhp7MeAW7jyuyJS1gQxj2kvpMbzwbF8yMs67veCXdKAMpFPjszpLSmQR8UYWQ6YWyKN4TxKQ",
  "key25": "42aeQptovgSGxV1GMWUQvrUiaAoz6q7fVM1RbsX3JR4Ycd17Dj1cRqGJSgAjE8ieBEk6ckSvDXac19K8tJVsZ54N",
  "key26": "21ae7DqGrEsdfxN3jbsEq6SWH6pZ9Aun99gS1t3SWAh7P7jTSdkSDha6MJz1oXx7ymfEizAMu7gitEaA2EJr6KUo",
  "key27": "2LGsnd2N6VcUTKHgesy2LjVUabzjz1y42VGuA1rCgngusV1feQgaXp4cVU9dAW9M3asmDz5d9VaerCVqp5U6Kcdn",
  "key28": "5dPNmQqKUS4BRPPXBHev4tViVnDvzJpmKKttyvFDqBAUNva8W3KFFRJyFxvPKJvGM2rx1sWYdXkoxA16cJqbANFT",
  "key29": "nWfPma2q4iySuUhnAoH2AKu8zqnQ7X7b5iRshmkqqAPKT1bT45FZSBF9VrvV2v2zQsPt5QYtneV8VXtoiW74AAn",
  "key30": "43m1F8yjvCn9iECZtYqPJt21hzUmNd7rDHmZRnoGDVQddBhMPaY4ykMtzXWuyYbFVfxo7QMdqMsKEvkuPzWVMno1",
  "key31": "45rxcq16LTHYWE1TpNvH3hkSqWE11wZxmN7BD8DZeG8G9z38KGv5nD2wSJj5a8zaD5B5kuuNudC68a96yc36uPoS",
  "key32": "DMnBymcNpVQuP9dbU87gDooPVgvNnWtYcC5w5f1GcVpkrfZntZW1jzwp1rEaMZxfofKxNoab4vT7Kz1YBRejYwR",
  "key33": "2pXzum61YobLrqUCqMd38Efns3MofhUgQbPKmFLTyC5STd3sRfYKVMXeofgUzNv1odpvnzuUXEEcxPE5m5Ua1w9G",
  "key34": "3mLszibNhBLBSWdwVxQfatNyqbke1EmAAreinmJvNQk6AupJFArhCBGi5UTto2QYzGTwJxP8QicvooASx2P7qCpj",
  "key35": "dMcxKXc6Dbvww9uERW25jCM4d2KD9VN8f1o5BKMuc1ZHppnqWFg2KgLYPk251sHjCowDkaGas7PTwXuUgh3aB9p",
  "key36": "3VeJWQR9RaQYQZ5k2p2wjuJd7GiTtMHNbGSVws2tp16toGg4yZY6ZMo71LBhSdq7Wk7FwMyH3AAMnd85apWnUd9r",
  "key37": "2beYskDrPakT8vdM7dBXTdWZPZpPBFMT2cccoupvBmPtDPSWHgpuxxpwVLq96c4zLTSAFaKkpuBMQdKxr3sAKGJv",
  "key38": "dDoLnwU4T69eBUW4Wbv5NC5sqYXj3iWQqjJcXsWiR8QqYKWi1zs4srKmX941Tx8Sg2hY1mxCoPcf2ku39oji2m8",
  "key39": "5UEkCW7Z9SUdbe8P53poVRdPxez3YE5PHUPUfyPqzLWgRMk4YFCCXR3g6RGnPJTsD1broS9ArowqUFBFkvDyuZAT",
  "key40": "ro61Lj8AKhVgwH4bv6Bk3svknKocTat4JUcTGYZup1s23yuXvHUc4fjpajjU6qHvVG3Qk6krZseoUGwsvPjnUeH",
  "key41": "5Qdh9qgv1TBaX5ddKyrjcQQMnBeiTrRDa2rfdSgCoVwRdaYk73LUGUAFCKEFBjcmjWKjYtMiVaxdZBGDmSDHSyzX",
  "key42": "4agxvZ5HTFUWp21c8CbGUmc1EP7uAs7USBRgMcBjr6cD2i6TCW7qVqPfvfMRuSHWykEoahQ1nVTBrWB1pnjUPK5S",
  "key43": "VqDbA9N8VJ4RehC6ihVtuZg9axZpw5dzkiHcpagEDSaRPdjoHXp9PEdaJcce42gNjGXptsr5UAXKXES4QXq1W5o",
  "key44": "4PyrmvGQoTnJKtoY4Q1QX4M2nAdiSa4ngQkusXmZEYS7o3JrgKHNCj5XX19gMS6yCqwgLhtv259dYQRSfm9vf3Zt",
  "key45": "3wpKVQsYKvHKBanas1gSR7QznqPuyt4LrqC3L8ak3owQjfwLpD3imXX3yFBZYngsaUVaiirpXQn1RUxHZQed9PUn",
  "key46": "ZWto752aw5xd2BHosBo9Rj1agiBP8aqzQzyLmdU3gV4mCbNqMXbk3ygiL7Fm8gRhfUoC7vUuFNpsDFQtFy4pj3z",
  "key47": "jiHfGxKKUiN6ZDBSi9GhNs55u24Gd5XUDCf1MBFKz3VdED8WMcUEwSdZjNJk4hBzdFCYGXCMKZaKiD2yVYaBFgp"
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
