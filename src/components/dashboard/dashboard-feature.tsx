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
    "tPwaA6YxDGTDcCQJJnTd3X3UNAaqAWCV7RwgUasdjPS3ZEtYrA4Ah1WM38dJ2UdUWPRSNCEyabzbgEf6ohQGCGg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sAo2F2wRGfN9Nm2iJ88HBTRDqWofkZ4GthSWWKVxu8S4C38Q1Uo4VkgG1NZGS5vZoKHnKd3Q9zwwuhsxgvWVAiW",
  "key1": "4YEKrRCkCqvQwonyNqUW4gxo3fFJYwVXKJMbFhe8G3CS5qQ6htcNY9VEY814NpQ8Pu6B2pvfySjSb4HHWTmnHaGW",
  "key2": "5yddDHQCa7QU47E5Rn8zAKfz3pEurFANPu9bJgGXnLcdZjdw1KXc57hbjuLpXtXSsZSb6wjEaTGd1PgJax8cxXMS",
  "key3": "ctUoTEniMxLU3VP2FRdCRYfHMU724RT8k1qGKTdzW6t5P7CvDaYMb6zanp4G3k3yuD5NUEfb2zVCbFm9DC4FS8c",
  "key4": "57u5iUn6EhZotzYiCWJePWnLvQP1EHZ49xDGf5uVjnHU7HEZ8NWrXt9ZSLLd6LVw8LhkVJhwYNa96bHvvjbzkVrA",
  "key5": "25yAmNSDB4QjrFPns35r4pFvWbVz6aKaKwtK5gZnWWrf7LXBPAfgvFGu1Ftq8D1G1UaMdA1kDBmMJybmDj8QtpPe",
  "key6": "5MeYy8xPAZWX4nyWXHaBm3QFND8Fd9dNXPPhCgkE66bahjBCZMD9dqD89sshTKV2xS45eVtecS3qZeK2aggWxMA2",
  "key7": "5upd9TfiVJkbL1RpUy19hZruPNcaVqTYpy3EAtqrUxjWKarRRBCGZd9iMdgu7C8GjbKfugdTPUPw2CujKsTPdLM",
  "key8": "4LDtTHA2VduYHEnunRUhDTHwzLtWnZ9oP8EYvTpQ8u7RFKs6ZLRKxeC56BjerZz8yh4c5n1qJXyTM6SJbvFiFZ5n",
  "key9": "4bXjGUgqrKnz6UbZM3hvXRWvRwhXfeVR2tyz6c1soJ5UJ9VcgmsYJM2sJP1xzRXKhNLWnwxpWghxhnhREsqQoPcy",
  "key10": "3cvX7ZS9qQTKqk7R11c2boaEkF2GjGsCWvtbtdN9NpRmka5iFgjJVkRJVr3nyGAdasWEtrcHAaoc6ww3TcxHJGAN",
  "key11": "2Fyeg8PoxtbXpPeCv4uk62XvGoN5B94E72fSNmNAVMijE9XmwuZMw95EYjGshBHEdzknCLsRmrk1L22m72orog5u",
  "key12": "5xUohV9qWQsTFguTiuevd4uf6VtxmWBGEJxgGpbvC7SGPQKw93mUTMJpHVrcPen5Zn7vSc1EnQVFQqLkghiqAfuJ",
  "key13": "3ARF9sxhcCpqye96cTcadnEK6yQXwBkoECa8QrwVcrMwWv5iBQCfkg6LnMkb7MmhuRFq2H1gHnt3Y9aj31gAiMML",
  "key14": "3iLRGRxoMcuSpiFDSYv9TQdH1yoc4xULvKjGXxPGitSswXr1muZzdbwbub44WL2BJUfDjXP8GtnE56eS2vbpzqkr",
  "key15": "TqDhz8TidYuSaqUYrXes5xeWxjVDeYLJQWHCxPxthdh4xEQeUF1mLt76o8Pva1ycCx7SHkLFhC2a4WLhYUAwX6p",
  "key16": "3C2Z4EWXP8S7BcZcdBRNnPbrQUfax1imwscPUT9fUUfS2dXQ4n56WExxaN3GfzbbDA6x5PuuK8NAQLhQWw6AMZhp",
  "key17": "3J2zKeUvFW2SYVLQAL9L7ytXAdNByyYPi6rULnkK25DcNXNzNgmjxAKNzHX1KcDznhUzGMcc2RWjuVr5YC1zenet",
  "key18": "3pE1hnth9r2uwaFUtBTxgRvFMGQjCFJaorRYdZ6F1aHJ9yNhb1bWgA2SfafnxLzJqVnyP3sh9Bo7nBsppthonF97",
  "key19": "53jbwnFKSLmAUoV1ZotnvFkeySNqbmoSi4hJRSgiah4qCSgNPGH9h672c7JwktEsUyoteq4YTub54nbDViPYjp2U",
  "key20": "3b6iDpk6ZZ3LZzA8WpQJiz8Up3wA5Ddtb1cimPawADdHLumjPhf83g9V7HvnzZ8bN23tzhH9TarPoWB1JwUbbS3A",
  "key21": "ns9kZiAXGxeGpdbbYHc3dWWXdaYPNtP1LbDMwG8LHZcYFJZ65NWsXtxyUFqr8c78JrVXchHk1FM5Ty8KqteVQ7c",
  "key22": "55rU3JSB1hekLw3Mu74QKF9HCgMXB7T3FsAyrGwWjTAzgVQFDcS2qCHJF87KBMcXdXu9gjo7AsJhyxFaQnRyJzV7",
  "key23": "3hWqf4rFT4oYzTiRGha5zhRFDdhBXDQbJ9zbufGaA4UwTbwUCeeRex5DDPHc3Gc8YS4jn5MyYfDWcqVTC7dNbwb6",
  "key24": "5S9R7BjodJ8HSUy5ojKhxDiZdZcQ8GSxBcRyFKQyqMzpC4U77BbSgYHMSoJhLB984f1Yd1iBCaD6LDYwWhqKDLxG",
  "key25": "4Q1tE6gvXqDT6Pv6y1JuQxCZHTL87tGvrr7AEhRVSjxvPzLqHj8sTW8jxdxM751oHw1caqXcPHpUxT62miN2mLzp",
  "key26": "2EWrn1mbWz38cvXdKfSYaJmTLJPmRExYndMsK4aTiShcB3DjcSxwdRE5cgfaf92dkMp2VbecMNM5muajxNENH4a5",
  "key27": "5MezbT45LRTqpWMBPrVU6osBhbAZPwFUey3HdrL4HmkSff6A3QxcPvwx1okuNhvCQGXDvqRXvE2dFZowdcvBZBUb",
  "key28": "4vZPhyv51htDzPE2Hvm9y8oNnw4rdAkWKPWE44QQr3gvm79WeTx5fviHEU4TWUoiumiDg7re5u81PKoy5ZmUqMvp",
  "key29": "499FdgdJbE9eyWxdYUFZWwkUpNaVL8p2qZu6p86mF8kvRbQ8eccnWeEvKxrbsd3ZhyRmctXX5gqX35S2Jkc3Y1pw",
  "key30": "2XHzFcfa2uaySq4jhiykDGXGnoi4A6fhryuwC6LLePezRa58gGWgUf1Zq6T1DkGntLtdkhs6U8K79BMH8MoQkmTR",
  "key31": "5oJ9qpgrChyyy4LMCcqo2JrP357aorsuz5boQS4rv3oo4H8a59RkZs43TsJ4ma3QDEU52ZVraPkF5jR9sqX4mfCR",
  "key32": "8H6d7qsx9Ef5Q5ZUYnc1FfWCzfM9zXiHc5FihKCnRYvC7gdJ9cGCQtBDGvr1kXLLj9inhdC3QS9MHAs75E5UaWh",
  "key33": "27ADNKC87V5LGFHqFUduMg4tFNAqE4kgBsYVfNTRLU9Eq8zCbrZiDaPxukjdsXRzeFvznYC3N9AAVUb1KTxMXTBn",
  "key34": "5rKkC5B1YDBtTTCLUhasSZfRBaWncCEdaK14PB51jynD9ePWRki8D5zAxhsHYv3exCcPQTUWeHc2jTWCbPGRV5iS",
  "key35": "6pNxWUDmCZBtqnmgs5FDX5zyWsrwwnShsKHXiLHCbA8Rf1isKy1KipC5KumcTGih95NkTfey6qm3LRgCUV4iFmM",
  "key36": "2bb3TNGXRZvffeLNyjG2ZfW7nHCMFDRz4G3zZL8fuuCgJi5Kraoi3Ti4raBWmLGV2M4o6TUm3q2oSenje3SMHisq",
  "key37": "cupCFAK7ftQ3fMERpHc7a279fxfBJCFEYjQivTtrQwfNGFfYYY59D4gLJ95EYTDsSUi6a3AfkbtCjd9CKeNxgti",
  "key38": "5aRZsJfESphwrWctPernTNrjgY48TgbSDDYqyF3T6vRyoLT2zkdtkyEsHHLd5n9oWdtHBKkqCeorxrPcLyot7HnF"
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
