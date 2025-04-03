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
    "5EjwfjQic6YfTLJkjeohwPcsEZH2moN4eQkB2fKZ78aiJ3V6Z1vbmdMx7VNpbbVSHJWKq1zAUmEMosjHndkWwJFw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QyiAJXp6aTN1wmabseW4TBXe7VaNaJpBS6LMpvKmXN89ifr1ZH6t2qA2gUoNGynmuP1F2GUBHiiGrjYuyBpY8pC",
  "key1": "5yhddpiXpW8i9nK6fWMV6yxQziX7gW3JzQJTpZZGmdgH8DBXVVpwrLEJz9FqeGeCTstibRmpRdtpu8LvgsFg2uQv",
  "key2": "5LzGR2E1EtNcm7FetD66Dqnjf32R3bfGWRJPvyYi2iF4hjfsEzTrqfDK3i6CLvo3M4qD7EVKiHTCGTofzbQnLqxS",
  "key3": "5kZZvdgmiU1948tXqtS2nQ5F91WwbLLwAueqGtkt7hKHvw3rNJSWP2BEMm653mHvKUWtMGPDPjcs23mgY6wwH3QN",
  "key4": "bvr7t2DaQ5gmngYoqJvw5wwpkBLVHtR4D4RHpZFXCzGT8pt13kper61opk9EMudEFPPznpzgWxfxWfQoWzphXB4",
  "key5": "3Vy5XQi6Zb46csbbjeuisfzhHjGq2pvCUGAeLMj4KJBvXGVC1SADis2UNdwuWxDx5s5rXCX1WKNTPWAYpudACUBr",
  "key6": "4UzKkG2aZYqth36ys2cUqWu37PTXFcgs6wu6QJVmjEKB8LNo7Qgb3QDp6ED5cAueayLCW2XFCteuNT1r2SS1GKpV",
  "key7": "CMfdB2a1e6PUrmHnuJip2WWGJyGchffCSB5DzRDUxvUq1QiR9DwLT5wXbWDwzszPVd6mXPkBrRXPhLshhnG6JQp",
  "key8": "27z5ydYaALomSVi7rNsYf7DnAexTF4sV86eDz8CftBNEgJYUPNJjrTyaNzccfLSQp8CUd2HHQC3db5jeCaswgrPR",
  "key9": "4gyByg2EJbwWB349LgVmZu3xR39AF8q26MqMLvDSTE7xFQezFdDwAW2WH6qvFWm3VTVJxzTLBaXYxzKXX4LheCqQ",
  "key10": "3czJJfg6sowvzeigb9ybEPNNceWvT13gWnqtara6eqisEHFKkzQXZ1KJpaVcyikW9eopE7JLFrg746yCtoWLjC1L",
  "key11": "4QkeJe6FmTpk8CX48QsBnfLfP3dDK71B6HC7MzeJkre9UddeN4kgFDvMK9TbgS1d4wx5wymA1tnGTLkrMhLHLe5v",
  "key12": "4BcFSq2QDpGBgPMgr1RDJBbZD6agcsTz9uCtUPp8jVC6TiUB3t2giGgqZDfqcaVUvRRHqkThmqGsAwLzUgW2TU5V",
  "key13": "58b6YxwbvLvxPRDVw9XZX5emMuNqDwsxEpvBBsEqrBxnAjhBd4LDPpdvHa2jnJAKKVyAYoLC8gPjdE41UVSasBfp",
  "key14": "3b7wsRT4Ni6VzspH9wyPnu9LEvVjA97Ytu1Hd6j2GRhxY1DMEZD8rnDBkzwCk9aQGzLDMe1XrYiF6fwvvFNKLPPt",
  "key15": "3Crbvjbm8XPTqpmyxnF1ChX2Y1dcXAGkMh1uk6gFxM74Y5jgq5E9v1MqFsGPNy5iGcP398U3LS1bSK1ThaXZYpn8",
  "key16": "4PrMMByKhc77svCF5VbyVRLDGQg7sq6rcwpUuwPBKg4QCr9tWe3h5Qbvk3AxjYUNM7dTRSaZ6GiPNwj2NHc43MCi",
  "key17": "5ypUL4aisxPHg1E5M7fRQghP7EAjXmh6DibcQmjmqRfj18e8CM8VRmmQ9pFnGxA6gXnnNCnNstVmQu1TWLrhQrhW",
  "key18": "3tEtsxgqukkJeV6p2xjbYUdzX6qgsK3pQjSZEhCcujiMdmuktq7UmjxdFgshTZvaNR1zvBzSPzzGvp7SjcUEMER1",
  "key19": "4uB9owUdkaVckjjUjpcTqAyL7JW2iVaYGxaqQvoSSbyH3piRwYCR3BpJMcnGRcxUxdSAroDQEeVrRFbibUCLLTW1",
  "key20": "526RtqrtrQbzc7t5UQR1V9MyxZFxARXzqfz7cK8ktfZZWJmE9g3AKbJpHY2iHLcoKG86feSPU4YN3y7ekrXvcoPw",
  "key21": "4T79uYXwLU5LC9x8vdtVcE5dqW513QxF9cAG6qqkPmjryBCvKR1WLKQdRYgeLniAMDyhnfo9fdZPj42vXGojGyPp",
  "key22": "zHSsShFHY43DqGPDfVcxKn98zFaVUmG1ZJ1EnRgzY3uRHi1JeKygVWHfaoLMfxDsZ34W34mrnpZ7a62ik6aKvDz",
  "key23": "4j4Cgy1xBriKxe82x8rp9wRDQhnaJogiL2VWRwUDqxquP7hbbQAdHLBSoUu8uSXK6esWxEDNkZ3eSxxFMqgPBaB5",
  "key24": "2g5zttF3pdkyMujrixQUjxHBrpnordKtUH8zGdETVJNv16e3HU6c3XFuNYDgKeDrVms9owonem7XLY3LgrwtjEDd",
  "key25": "5ccodLbeb6qNPrF2HQhq4itAGQPgZriuSKtVbCayb3FqzH3TgDF6yssCbTaJqqDBz8G8q4tDq8kBMJHgoST4TsvJ",
  "key26": "ScmM9RdW365ciCXCo3rhWBrQskcd1LEE8QSVkLLL88DseoZWtooKAgqrfiSVvg6DdiZa2JYjhX5ikbtehNhLKWa",
  "key27": "4JoF9cAbCVDgAgkiv7aBejhohDE6Nk6Y3QAYqat2FY1oZcDfk3QpExSti5L5xAnBym3FbQzBdSLd4hJFVd5VQbLj",
  "key28": "57T6GU8ZjFSJNwy9RinNp9XH5G9rz8WuyDCUWzkhuZNdsm2pgHwBA1hgxNZiYSt14Y4Pgrsdv1B3i4vtkPYQsdKQ",
  "key29": "FpAsvw1WKufU6TdG29xftdDC5EMjHTTnqcXVtd3PnS5mg2wPkph1Q61a3j2bZ2KTfEGbyW2uzYrj15BrJMcLvzK",
  "key30": "67MMaLiromEJGyQuMDhdvKahb9gu17Qw3HN19HryrZDoSHAwjMNuegQ7nbDjtYZdKZyNsxRgmzYhqN79b788Uyzk",
  "key31": "3Bfn8MXRr91pQpxZwb4GVowJXJ8nnwVavFaaEaoHzUjyqmYc5KP9XvxE3nqjXyBysz3J3Z8BdyWQUpizoQxYJWcx",
  "key32": "ELyGeeSJHysW7UhvAsFzWcHiKTXSMTv2TKBtBaiPdtFBVE9zBGUAv8TJMuBD9UBpqj82jz93hFmc3GEbbAQn9Nx",
  "key33": "5dn21doxqUAZiee4gNUUPeSo1Ua4cHkRhuNxuAYxd3XJmnCRZQqbL9q5YjccUgBsZasvewoRoj3cdJ1jDA1W4zAg",
  "key34": "2RQMSn9ocf3BVjR2jGsZcHvLtJ5tjYUzjrrXJHVHWmyB7Jsq8BGghy7jf3FZ5GjhMP74mEcAdGmQRZ7wSiqjmDG3",
  "key35": "5nCs5g1UNTn8dic5JG5cSEUingYkgLXzHnsS8sChc2EX3P6hp1AcRkNSfqkeDzVRsq4p64QL77B3Sk3qQ39W72ko",
  "key36": "4FFHSkWcLDAUQGfNFLmNN3BiTYBNnZgVcaMsVTL6Qut1WpF9RAGNDvQHsoswAsSCCwUyq5F93n8Q2ibLuX1ZKvGs",
  "key37": "5K46bVqru1Ab9TxfYasCKUaUr4BemQRdBuDHP4vQZeVnCJhpwiSEKks6VpCGrET3XgXPp9dd4yQW42F9LUh8XFwW",
  "key38": "4Y3CMAAc96wvwWqYYqaJnrPaqqbx6uw8r8oXWKRXBDeMwte7d5GtKmMQaKxUzoTeCKSmDyQvQJDYSK6adgfGYVf3",
  "key39": "53oxaJPMvcNLzpnJzQxUkN8NeqzxrnRjAU8UqJXSG6WqW3c4ppCvQ5Lc3TT67FwPaYJ9Hm1DbyvTDPfcB7RZNWgK",
  "key40": "652zFLEvbNEVjpZVC1W97YVL42mRt39muVhrmgp2A7umo39msZKXeuuGEj59qgMPcrP9LeFdvJraVn7aQ2kv9xFT",
  "key41": "5QzdfRez618c2Cdx7eZiqUWqqyt3bVoJG4Ff2VixpgMjoFFfwHEwnZmQQbc7gDKsV5VDtvBp8ErRfn6rJHMHQF6C",
  "key42": "AdXy2R72gbNFyCbUf81ynXYJphmKcMzMAZdeW57wweNJQ2uZsArcLpZordNoa4WaLePa7vK3bQywzF9G2uak6KW",
  "key43": "2QvU3ftY7AviPWuVUqLb1eM1tuNi5wTqALrz4UmDxxuu3jWVUQev187JH3aZNjszVaQiatuC1rtWAEnoLtwQ8fBs",
  "key44": "55RksSor365QuDoDpXgwWz8JsJ6sREQn98NYJ26y9denqZK3uv9oWBAhAEHdjsx2NLthF1EyAyZiPEuLFRBtGG22",
  "key45": "3dJ1h7eHKxWyLKHidhHC8a6Eggzh82G9W5U6vKkG7JnLTLA1DJAeQF48XrG1Y81FpN2ZKdeLYvnBj4pAAwZdPgq9",
  "key46": "5LvxUPt4naUAVxukR6wQcpfBgs6GQUDDbtreWWvQKGnKsdp42GKURasmAZwYWtPdfU4QQnJDkmATT5z53zuAH2V2",
  "key47": "xPECfX4BEKZ9dSXukbqBbwehCEzvkMAuMB6UbxUesPkahunCEsBR7zu3XpjQGeXCD18VKQfq1XwoUKcVQXc4ABn",
  "key48": "61FLSEjy3oFWkRLmknUjjr2LHKYC1PcyYYqW2hfXJEgwUVYm8gjbGxdksm3NpmAGgG5td5UWz433uQNv3oLMLy7b"
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
