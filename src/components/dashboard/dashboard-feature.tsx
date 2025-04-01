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
    "LJkdPci8ViQo2FfL52PKPhEEFekMWB5tQh7XDuiKENNw8CgPTdDRdBhYfer4BwHC4wTaTurhaW8eJgY5X85V58i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Gmw8BjBSDLzQmJ29fFprYKsEs1kSW9pA5Uqja8Ehi1SXY2Ppw3TQTNuLZUTfYS41c8dsZG6qjLYXriLSrK653mZ",
  "key1": "5KKkxeRVhJYW3jLLLetAh9gFCZuTxmZZdrBHsZXc46ckndfxjPDuBgUZupCXJNrp6JZhg6XgzEt2NmsX8vF9WYg2",
  "key2": "Uxcij5WxWU7d2xdwBnEZThppwzC5QdYauBVLCPKvoVkq1Cfr81AMrU3JEVpU9mQdbG58LWnd82Ut3irv2YPiLPb",
  "key3": "3rAnCLyKVrhsRvU5yHUCS1dL4MbSkG6ZKJkhYezsFFAocVxTJW664wmNdbUipdC2EQF1mJ5rjcA1tXgNQnNvbjEU",
  "key4": "4Auau9K1ZNEEE9WdiDJDRVtVqYRQHDReFKskeLTfvD3NVZMEDUNmYowqovwbWxcb19wnYpjrWYH5PVaRWfuZ2yG",
  "key5": "2S6K8b5MGpm8QmYEAHSAy2XzJu95QRC3xDk85qs4vxCY7nz5ycdbqDwVUUSsgnhYycGkLgNsWs9oMAudrJqSwyey",
  "key6": "35du8R4dwiKUySXxUBJwQR7T3YU1Nt6xiwPY7aCs735j1msMP5wQhVkubrQi5LqxUfuuw6jNPfjZkU9tZdB882ZA",
  "key7": "677eC8XFKv1uQ549CxS4F5YHfafFHeLjSyM3QAmpTYpj4fTXcrzm35NqLzk8VeFAw6eCia2Yp5H6XCxM5Xt32swy",
  "key8": "65xc7DNZii3AVRwNdShVCAdfqs25Pg6ZBr8q5NCg3oCRe8x5vcBq8T1AgTBegWUdwULxZQnNepoRKSZetjWytXmp",
  "key9": "5UNP6Z7s45UMknh6AvmEBQDymFPJgM2foGR2es5bgZPN91KcB1sU2bmFaVxC1XDmncFATgssJaDkzj2a8SbAgerq",
  "key10": "5j4bdiJsUBdPjz3L8KMLZQroUV8UkmcfFcZP7zgseSgQbmTWTPCCgBjAarhRDS7zYRM6Df7BCe8Rx7FTMtzGovv2",
  "key11": "2EKW4T25XX2TsJGEUTZdJEC3aWWiSa62Lmo4fsRhg5mvJe46pCccAjV2Q3hcN4eEUcMsvgrri87ZQaYSgaa3whmh",
  "key12": "3QSz9SHninAjLAycsACi7ggXtwS5hSAJCSAbU67h3CzKc97Sw5LP11N4pQvrfHrFy9Aq5ZGjL1BfG44YJAcYTo5w",
  "key13": "59KbRKFVfRMVe7ZpavG1qpe768TJKaeJyJWuMvFS4TF8hGMCyfhCg3yQPJMd9YZpY4tVWSVsVLfCAF2Yqh584UYE",
  "key14": "5QnY9656un7K3kFuQ8ZrSjULmXVpnrQzaxs6SjWsw8qG391je28GAcQWdZPZR1rNeeRwhHX87jNyM22ZgPfkR7xs",
  "key15": "5k7hiSjAdEzRT4ANvMPPCWuQrNy1ku4MS4ntVaGMca3rXFdHgqcJ6f9iosr5LuKfS1ozKzksCaiWCo268SuwLv4z",
  "key16": "4p3Cv31TTZe5nYg1cXVoDgb4nH2igkRaNj9T8tmoe1TW99f3NVC6wuTLeFwMP19tj5YHPUJ6QUqTvA2hadfDzXa2",
  "key17": "24Z33K8A2bPpLMfsVTFZGX5eWUpPzgwevTbS6Z1CNdbia9kCicrkyKnHKSJdftnCsafXRL3m9DQy2MED64axwsKu",
  "key18": "5gBoy8xFrHfCGJpnKtaoj3ECL5JzkVCFDujyS9ZVc2eytAHyQu7J61hHVpZuhTTQbXfS9EP4R8njbzwGqDsn4bbc",
  "key19": "2k7M7ppvqEDcpLhQUNFexJghPSZj3NXiDAcuATQHXUhwcGf26B1MYBnQu5ekXNucRbxD8BPZW8xncvkd236Ae95t",
  "key20": "5a4oHZfmxz2VMVizHeiT6QYjikbLjCE6VSmFYxM3d9HNSGnd5K5LVkr7LSoDqroeuQdPja8spn8DCWnvWgxtiWE6",
  "key21": "5JJudKZ8ADP2KjDdcceTHpz7VUG8rrbpGBMy1eDsPNpczzFpz9smi2Div62W8v5TRyrjXHMgSY81ntXAemAC6qJx",
  "key22": "3BuPd92rYe3pSp4e8H3nFe1EeW4PAS5hrjTf5MchiiN6TQsHPdhhpXTAsyEZp6m9bMr4ejZeMujnEr2QFPDtUVxX",
  "key23": "5VmodH1gxfsNrZmzKfh4yt12jNmiBqct1jtKnw7MiYPHy6rQcTuMCHebXChb34iSjM4HZXqCnF6eUZ7Yyx511hVJ",
  "key24": "41M3bXfzPh1aTvXScmTquKXGC8XiDphWSU2WHg92qAc5KxxTLnieE6TGZeLFxGBRHjxEpMfcXbvwfj5XywJNL23d",
  "key25": "4sCYimP4eHCX9W8SMV4AtCAuzAvkXyRU4sbnTWnZAbsYbo6w2BPTvWxdowFUQ3M9mdC66GwFPpDgSfbruDpRTadJ",
  "key26": "2wwJLmkgXZvrgBUM2SZtX8bg4U6s9QE7N8Ri3QMqrtrryZf8p9YGK4m2N1puQpNrbVXQogPh68NPBa9GxURJGiin",
  "key27": "3geHabqYDeYS8ePWBjPNzP9tAVR9PdK6eY5BrsMKcpZ6SGmkWHbNTxQ9oeGWpTNohiMH3XaE8tEjm2aitxNpg8ob",
  "key28": "YxDCXtGqBoYi9BqZx3RGXoabEF2kkt3Je4u5mF5p1yPT6dsZQEWYCEBnjHUtp1qLrxD56iCTmscHyimTmxizfuJ",
  "key29": "3uB2nVxS6jyPWz3w3wXnWHYrz1p1sxznoDHbzAuMixSTzRWPn57z8Zsm4Ybp7ohe2iKzgSgJiR8vDXDeF4D9yL3h",
  "key30": "3YKTcYjSkvLgUdCNDYRWL3bzG8S6pUeYXfvA7uEfjXaa62ffCbudDWBc8HnfDV8Ci1tecLLBVuVciV84bVxvgCi",
  "key31": "ZrNxwjauVavZtnpYeZNFEHwgxpeGqoJYH7RXsQnUUTEGu8zMx3jSTJEKexSq3XFjnkBC28Mt34rrVGJTkYDm5EU",
  "key32": "1ztCWYo2DJmhKSp6qmSWoWsiBJVw3DtJYmtCP43EYG7i4yJ4GVT4qqEJhTKss2bMuBSgNKBxMSyMZV9dWNYQiKJ",
  "key33": "2pAz9HfwqPyJ5QZaLUxQsbP64gLsPE4YbUNbHwzgASDWE14nwJ9U9CEwVkZBuz2XR54ShvntZ79RZX63pcFVgZs7",
  "key34": "48ivJNcgPV2KGRpxBDADvR8RxNy9idzDgL8zFVyAso1U5gVSYav88iec8Sy7sTsgc7fpow5ckJJvSjgTiBVMx15q",
  "key35": "2MjYBLtFiMR9PhzjuvRwKELrAsj7KmGWt3Jsjtar8uzTDCHpJRD7kokxfLaisn9WFBXcRCpsCUUxDrmGZrTZv4kP",
  "key36": "3c2GKBV7wvNCFoFGT9bNrLCSbxj6cBPChWEsjq14MUUSKkok3tcdScc2477hu55wjdntWvj4kcmMF6qjLqTM73GP",
  "key37": "mDU3UqePZqcrbwnxNSWGvfm5PkH7g39p3RmmgQfEDkhZ4konhuBm4oJzKNeBE3mm19b7xkXnxWxikLa7ZJE98ZX",
  "key38": "4hckPQfkZZTHCuFNaiBJTmppLfKqrMGdTqvJH3GaKRxqEzqqgcqnYBWpAZVBwkRBYEtkWmKSKVNMt3CMMPvjTg5t",
  "key39": "4jKMsk17KFgmS4mSv5Zx7LkQ2iSbE8fwPJNm4JukDKyC2MSZjdcqW9ZQgpEaL3ANMJ14KQc9okeMo4SsN1LPcW8c",
  "key40": "4DbzznktbEqn7h6uNFFBqrhDdeeBmUDndR3NNS91QcvC8dKG6EzGXEByGuk7AUAtHG6eZomxrRxCQDqHzCoqfn2R",
  "key41": "2eHWizmBf8qc677oEX93yVvK2ppUNncqB2hvH45uacWxNWYkjVdRQ4HQnr2f4nJiTNwoQQfmcboQNKPXxM4srvVa",
  "key42": "4tKZp2smNt73fneT2PBqxh1XiXZoVvmUb8R9fzMDGafV7abRjoCu7Q6RkYqVdbLwwHXq1buZ87NdvE3ENDBkmYv8"
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
