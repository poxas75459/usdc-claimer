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
    "47d2vawJCBBsceg3mSH1afPyocBkqomoeAe48vqNji3aJu83UGeyVEKmd891yExTd3gDnMiwsXKuuuLR3kxN6RQc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58EqFVrGkFcwc97wBByTMTkuVMAxra4VYfgMx4PKQnmTsnrsm1HrmP8gHqBbLztti5G2SRouGkeVPiMaej9Cm498",
  "key1": "4kEt9RPxgWbbWqb2PP7VPHg7NPEoxX6Ytr7cWoqqJjixhkdMgXG6nJr6T1qpZRKNus2avjkkC4CWxkmJPVQzMcV",
  "key2": "4r6ovfjootb9QBrYYGqGCLwsHKtDetd5ZmsfVoxxfGpvSSkHnmTYzrDTewx19YUs79XH45aJHrpbkaqQvs595UB7",
  "key3": "5iBuJpjiHancvZpbERyMpqud9p8g7ZPPMC7YRy58fkxgbm8ihHMYLKNw9L1aEStcpuvowdhoqkKra5sYbubCTpHX",
  "key4": "4fyjhn3gPw6T1wsaKm16ZHBhyvBorNo9g1n5Pb1tW2xG368Q9pc4jwRqvYfb5FdwTyJq6XaYcT2CirsYVZsGEzk8",
  "key5": "4DSoKY3h2rRLs7nTmAavRzzvw2khx5Dke8Dwkw5ja64gizQ6yxqHoPVbJQRVRRYNo1HA213vSNCyXQVAmktRmRjh",
  "key6": "2MmnC27etnZMb1KqM5CbtbCYctyYdGKpNacGez8aprZrPRJw7AvPta6Rn5qbBfJ1EhY16MXDQ5uSTsCNGyTaPdKV",
  "key7": "JZa6C9DaZbhWgWRupasdfcZ2TqdDwxBqaiVejDFL9WVJV7z45p38Cea8HTkfwcY6AmWHMt7CbcPTXfTRZ8etsyx",
  "key8": "XYhenyY4pPZhWaKtWfwGTe6Njg5DU9Bqx6inFomz5hX3cX8E2AnARx7SaHgQVfaGGKfewxZXo2ECG8GWZ6r4xb7",
  "key9": "5CcBpQ1rYyF6FAjJ448isvfxJrRdAsXWZySj5EgHv4w6dVmN4cM8LY4bzWGUnkBwzjawoquMjzuxqVEL7xnRnXiN",
  "key10": "4iL2hKwwfh5sYN2FF6A185diEcEd7CueVuQYxjWzfQoKnX1KD3xoQS4WFknJRQBY6XRryj7iWNsVZy2q5WjFUn9i",
  "key11": "GEF7NMEysNqTmqjhyPC8f59SikhuTpoED9RPh1ULB9qfcUMGo5JXZMzBPeTNfUDij5bhytyvqtEvNU7cHwkU412",
  "key12": "4D53xewb4WAhATcRcVZ12cDNpcQpeq4Ga4NyNJ9G6x6p3rL2gJbR7zSFxx9x2oxLY9yw7ZywX7BwqVrP3o1FWErv",
  "key13": "37iMmXe868nCvCnjK1C7vpwq3viXaJsDmpBSKt6AYTkaEkZb1UmWLJy65wz7D84nnbXwbsaLbW2aThWmoYPyqMUy",
  "key14": "2ocNotsYQ1t9sEBFBp7pDspVVp9bhHjD7nEzYZsMMmSSGKTvAXNf6eaE2qYiMG2tQohFGDttbAykVU7p7L2vFqvK",
  "key15": "2cqFEpf95xBrhJ3w7G2Cm4Jpy8FbUJa69hyADP7xicUP3973shDyUiWew16M3vT3NcHuRykKhGqFQHyvS7wcJhMo",
  "key16": "2FzL6gJYCh8CzXVo5Ni7HF8ki7HN9Bf1RxEvEzbgQhCwqjQzVYsYGoioLUWwCoPJxe7RYK4Y8Rjs7wQ7SubTwUan",
  "key17": "5GsKeRrgMgHQrL7UgU5vmXA3qZzykiETewjFrwMAuXMNHzyf5Wf7e2mtYhzgHF5F13ZpB9S9ufa9WUhM61Jprkc7",
  "key18": "4v6ixqENemR8p8BzodUVJWM8HA3Ppj9zfJf5iTLXSt2K5qcEJf3X7YjrTpZHRACf5u7aYHph4zeoZUyYt4cyeCu6",
  "key19": "4F9cL2ayMuvXzy8mRknQioiKvVCKoA4r4fpRwmuaExwNoyRRPBLGMJgZoaVkqswpP2u5ZLSAmxGEF4vpPq5ULJMx",
  "key20": "3m5kbMiSDPXA2XVg7eb6zbm3Y4wb5R9nwX1h6yenAyMbRxyKyYKWRZU1yE4etacZqkkBLaPv5tUv7mvxFQ8Rvgvq",
  "key21": "23iRKnTeRyXDypQaAnZah8uooZBcKju2gSMnJAnBCpXysTq9ecgeYUkwSS9TTKdXgavTEw7YZmnRun9zDGbUA6YW",
  "key22": "2GHLtYVgNqDfhoY5W62hzG2GCNX9fHmzAGSs2mWtLetGu2kHQpJUUMr59AumJQyJRH1iidiSDGro4939ni64KdnU",
  "key23": "Pd7f3kDeF2qUhMvvCPFiMzSuAnwWaXhAVEeXmVAGcStovYt4i7CRADFkj2Miz7ZWcBk2rXCfyUauMv998YcjfpG",
  "key24": "2zWwfgsVacHfVBJaFXKPXSn5P557ktry1YwpLsa61q1FfQQRbtAVAEfPRzrKWZaGF5NnPUuK4TvCGrCVHLDfrMrk"
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
