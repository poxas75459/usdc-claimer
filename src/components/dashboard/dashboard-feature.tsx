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
    "4Eg3n65Ug2o164t23sBiggUe9pJA73yJHsWnnxtFTdnEKQ2aGSryuRGAfQH2TcsnbBV6REqUFzSa2AcwmHutMMtx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Sk8YEybpa9UaGkAn5MrsammaqXmykttDVMGMFoULAcsjVAvgvY8qvr3DJmXw4Uu5Zw8zxMvAC6G6GW82nFAe4vA",
  "key1": "5JdK8KmRME6i9kYuyTmUXxxgHR77K6ZF2YmpADnEexUXCWyxK85yPKKA8TwT17TCdAD5ZeE19WkChGpxuBXZEXYy",
  "key2": "5ySkccjn8qMj2JiUVByXz65Mnb2n5wmKA2UHBVW6cYAhYhD2cZR3HRNso8d2kyymwuv8uxdK2R59zZX4pBpgDSQt",
  "key3": "3VNiVhvPUmM1WadbgLTnGvuSemtNMdoxexmr72XcNWv2G3YHwb1wyxzfeFwPePUn7kDshi4aGFGnE5Jn1t641UDj",
  "key4": "3U96WYW5UJhvb9aZMe7zTzUnHpHW8xmesVp7jddap7ziomugnwgXeEm3nqr3oz2iXN3MfSYQbFEvZczF6SA4289e",
  "key5": "2QE15iKAF2nvYNLCi1n7dnRAodV8MUKAdYkm1R5KW9JAuQe2hGsGtGXKhxziF9FXxtUAGrz5qbQvFDenDoTZ1hWy",
  "key6": "3QTJYiiwZkkk7jkEFBoCnmrSjPCrSfH5r6hczKZSZeTyzADDBhbkbfJZe73YjnZGLAb7SeLZ3cwbFqBvgFvs6Lgp",
  "key7": "LReoKu64q6c15n3n9drs7RY8LN24LUKDXPHSqEKaAYj8FWFmwdryhPyfiBDikMmDkTHA3ACwghn7gQW3tME8UAx",
  "key8": "48MoL15E3Mz7XDAYytRZX6BtEV8rzw1e83kJbzhhhMA51pHn3QVXpX9MnkeivTFynp6bXNpaWUuy5kymY4NXSS3P",
  "key9": "4hZ1Fw5mvqwxrDXfW36WfGUyxAgcWMha8PsEHDCPjfBEz2T1bUdAhQ5g8GkmHhCApqMpVTy8n4dKKxa3nR4G26Yx",
  "key10": "ByW3JSF323nA34cK37M2aaADakE9JKqSActGPngYQ9AUbeFrY1hMB7fA52scnR4zkq3xtn1NbAT5iqV88JC5nUj",
  "key11": "8wxmLUV9hyVcanB2xtnZZ1SW697wnNjWn2pLfHJUqSe5sEwBZhcXPPm81gnYUAXu85zuXHcAB2HCzrZUUqXLjpD",
  "key12": "66GChsLd7vWzwtTPVxC8gUg2TJVF8CV4XWxHoWRuWGmJhDqSmX44DNNyj2YKDn4ujZsUJMkzLgj8PjPWJM25JWg6",
  "key13": "35WHP1VjgHjQVjRfsn3pVvjLL1GhAj9VL7C9owk1HEmU7keJowVEvhM8oHuGNKaYZenqU5Vtjc3LAuxK86gK62VD",
  "key14": "3DY2MRzwfM2gKsbdi26E9Bc1L6KxgkTzJ3HV2XUmgKijnrRi41dKkAVZyVfYj2fEaJZ98k1h4MaW3mxG925nkyRF",
  "key15": "5jMNpMriMSB2Mh52qyNWz1pkRetXUasCSNaA4SGmg3roNERtuvSkA3B51TeGCkHQn1ukPrSvu5HFPFmbpCVx3M4J",
  "key16": "58X3DtwiFDRPjxjwRnJ77xSAtLx4fpkEQB3TiDbqwMdAHbEb2TBrEjB8W8QWsj7NfBuqZoca6ZnxKX6Z8ycPkCjS",
  "key17": "3hRXvgvuaUo7X6yX1UYNAVDsQER6WcRjJjA7tCHmwUXipm7CmC4vneFaeMYb7AVkERf4Qpno8qtG6wLHPXaHizW3",
  "key18": "5rGVLzRrjyzZofmotw7JzaRZXjk9WKZ9tHy629JkP7NyR1Es57mgsdn1TjMsu7vguTWDCte4Ntg1NtvGACLSHsrZ",
  "key19": "3FXVPcjTV2jYkCFEHGFZbwLMU8CGX1uhuVYybVBR1dP2QrEfw95BgF1KgCKPQyAAZeikGnPtwCj9krw51Pq2hoQF",
  "key20": "3uxzXqwboxUWqbqiQem4dLmLLQAGYagdv3gtuMpHoyJ5NN15WacHkXhMQhFPbCXuXNNEQvrHuyTYRbPtLxrtutte",
  "key21": "5VRuroFM6pChCWtUSTwyAu18p885cx24sBoHqk9EtY4x43WSj31XPDJutofbLA1QBQQhuPp4AhPS6uQuurd2WcsE",
  "key22": "5Lz3178txpRFDC5FSGGWC1GBpY6DfdNYRoiDouo2YZZvZqzttPkNZcoAH6JqAMzZqWGEBH5Ew3RvbSYDywmv653r",
  "key23": "3p1hv2nxqk9xyL91aEYtjMUo5kSG5pWicEtGs4ub2A43cme3X8hri2rrJGPENtvxQPULphz1MxXVtMwEcCpsix4z",
  "key24": "2Jw696M5PgLn4WQ34MFm8QVBdC9tLHCbTd9wPADFMAKA3GVEbY4uwv7fjmE6pKDRSa4fAa8MGqC9yw9NZZgB1Hfi",
  "key25": "3niTjhmGFse82GYvyk9H6R84h4mLMiLM64hucRZjsvmKMcfNSB4XThL3f85yGUXrtu5Rs5WPhRQzK2xmtivb5rvk",
  "key26": "4sSJuZTkHK3PW7CAdFQi5VWQGKF46e9vh7KvmbPZFBc5dCsMBdWJP5p1GQNiZApyLG7xc2BWzMi2cUPp3bRobL5X",
  "key27": "3RbNDEA9hcsx4SF367xifFLP2qWaiFJ4PU3CXGpAT6DixMUeCVahnYzE47s3GwCGuR8K9AwbxoqZrYYfmTWJAgfV",
  "key28": "4V3MKc2dSygd7HS7pGtdPppnULCX8YwabH1cwWjLS1u86bBX68unMD2bDqyecj6R9AEa4MJs2HavcM2zN4BE31UY",
  "key29": "4HXtWXymQYL13UfkWGqcxd5M74864aT7cM6WwpHsfkwtgnZfpCuoSLgemWZq1twWdQhJsJ1trbayrEc9qSF95HEp",
  "key30": "5YWFGXWZgfGNxbhsL269Ed9bczr9sFPZPoPHBkofS8DQamk4X2uXX2ktbrmkoGn4soukRwNXuJq6WL3yByMVkbh9",
  "key31": "2vjut9LpJYg7seouqTR5BMpP7FuYxDdReTLcddGWNsWXiSvMYLpo6k496HqVGmv6eUdc9kJugrijHUSNCgbWj9hL",
  "key32": "3mW2bfe4n6YExrbTHusWrJtVR5QcLnjDvtETqc5bLA3N56RLWGbUQmFziAvJN7TgEcHkSCHkKfmaFG7V5aUBw6bf",
  "key33": "5o9cQCjRdZEpde7CCv16fi3zsUQ7y1Kjxcjazyn2DWfECfaab9NtrZ5vx6ohbP1qvmbjwC8nidHAdadc87E4ftHA",
  "key34": "5BbRBcsRDqCeqmNhYN4bUQbormgBHZjNvWFFysHTSsrCRZMVvt9mFeMQHaqWbLWF51H4biN7CGc2USg4YK3XsMMD",
  "key35": "4in3Wy7y2e961D7SXeHwyvVmkdTTCdGSetgda6xu8VAS5BtsBqhGrndFYQHPYddofNvNN1j4NMv3veMabDkkZwri",
  "key36": "5C3VAxUAVAZUuvqgmdAzCrKCLR3fyPmAj5ZFQukJ1iJCootzJrQ8cvZVsVwJGtka32rJsxMKHMzfaqmgsuaxz53S",
  "key37": "5xMQ8vumYUULKebcRyUWVDqQFfwprJQ66RDfZEgMUvHtgdcGBPSwSJM8rDuXov1NTE785L6JxRY2spJKNdB9teX7",
  "key38": "2v9tVHG8wkjRU27Kgx8RSpWnkK549Truj7wPTH8v7yWZCeF1eTUKZRvD3Tu8eQ7gC3FPC4PvxRyt3zxMESC2kVP5",
  "key39": "39fYWQkSKc1MUbJi5gbFD7ayPmYpywwtafLDxksotDXacPYE562wVY8Gt3ycHnJxKUC31QSZ9J8MYArGHHta7yZx",
  "key40": "4SHTm1MWwTHGQnLkrTH8aqARwx8yCYNp5ALpnyYMGsg5bvEQXbWm7dTQKLFtiRDEDEuiSp1d6QFNEee9rQ3RtsGx",
  "key41": "NY5fUmtrggSLwpuBcizzFtwD2ZEX2KjNCaXbWNa1RRUHp26HFnpDGFnVe5Gb6w3R4byvBiCednyptsHsQMXWMiu",
  "key42": "4xLzwnfFj4AqjJeLyqQfvfei91CtaEyYZ83Gf2ydkmHKjJcp9sHbUd3P1Zo2hbMLG6vFQvKHtp62yW8vk2d8WVaj",
  "key43": "go1LnCHk164KEesaZrh1VGJUSE6534QA6p3PmVvUV31DwdBbp6uWwzkHUjsUuMqvxvREmUcUzfhb2HgDmhx4dyN",
  "key44": "3gEhVbkvxtoeELuemuAF9SmNnbec7gzb7ysJoWEtFiNkZsWoYT8BWgK2UFVHFkSw1A7x4UkmHW5hg5K3oXRxyhfb",
  "key45": "4jMMutHP1NMYQ6K2YrXcP1VC5PJZ3dVrr8e1xAVSXSfFaTJYErqxCbUHXmWrMejZAoQEzZ2Xhh58fwXYjgR1MsM7"
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
