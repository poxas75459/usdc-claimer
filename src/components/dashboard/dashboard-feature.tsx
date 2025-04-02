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
    "5zkehVuXoWZn1Qv86F91Gu2i2C44ykoRKkDTNhrZftugVW5sV6jonVs8vaC57mCR9qnrGLVnsMW4myLRhYpFjDkq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "675K2xTYtGYKoJhgkFoTubfenDnH8T5mFtq5Boe1vemFbZc3ToGpKBRn6esxRTRCQzHUxnuhZNeKSz6uAJrbqprB",
  "key1": "3CSzV1kDTC8P52E6SL75vuKi663eavRqVyuF3vbA21AaS5YGnDuZXsisSLwtw3QnvJKfXFyUyeA8fRrvHueEFbsR",
  "key2": "eixaLjtnVuyKNQL9wQR74DLMm1pDMAhiLAi1F289v8wbFiGjjJWX3w4eKt6aJDYkwevmWSZs1Un6bvdmWWbgQB2",
  "key3": "46JuLyfnPNzqWp19LtYXSKW1Y8NAiVYn1i41omH8kjrg34Nsr5WZ5BYAM2QwyRDzfzBrNJ2PmUv4DVbhsqd6dWLT",
  "key4": "j5TKnqUxrn5ffdtAehkFzq7YEzoAHwhV3SnqEaXcLzuHbhLnU38akQLXncRSrA4YLiXATpuENbHYjxdkXu5HvxN",
  "key5": "4HBp66L6KMGfNmvFXFEdstcJpPw3Skd5iX9iUp3sSU8ERRCS78nmxpK4UubY9HF2LgJn6ouj1AZMzkwsyxbKfcZP",
  "key6": "5svP9jzyWzqFJ2mPkujFcrF1pHZyJk9fg91bcivikd33ZGyua8frnh7PA8CXMzpy6oCofhaDvjg8hPdYzM6mAiLL",
  "key7": "54iFyakwyRru24bfvwxSEWDYrRoBUCNtGD413oKuPXrMt37dH8jf7CD4JLq9dUX2BiVSyJZSk9mmy8YR7ZYeVWPu",
  "key8": "43toSa4GLoriJLLv7jaM5PnN4sr41VbWzZFgirXaNkGBHTs8gYwD6WSJi3qKjwXHsU21S7fag5narqTUpEmVa4ar",
  "key9": "4CULxBwhvBpt1tgNoeYCao4zVYNvX9y53j6CFTQ78GEdFTRfGpcTHtA66PowztALkjKsc8P4JEU6juQGGQ1Eh1XP",
  "key10": "3Az6EpdTxc6R6wAwCrqqqdoLmHqGpdVNNM7w7bb1mXAi59PysGfQU9yTF9Fav16bxmp5L1fmHYUaAgb1rZU8GiNk",
  "key11": "5TAHXDSgfT1LZVyMsC4fGaTuerP7J8Wi2bAUNP8uDWPZCnBhBDrbjbGHBW2PDD11dCXZcCVroNKwvmzop5NxzFaC",
  "key12": "2ysMGUPFF3k3LKwyjaovzPL4MaJeJJwPWzayxeappVSxPJL2FDfRc6ejLrYPRKsj4oPS72DoL9i6mYUdjD1UjWrh",
  "key13": "3EQzVQ6HcKixUngkYypmJdZtbSPVe6352mMDSR8uPkvVu3fgqExBSsUbgZnmWGWVzGNGxgNNX3Rq9iBXdXDziKXK",
  "key14": "2nqHm8sExFqcQ5QYyGk8QhxXP3gLXyzub2NiL1y1JsSdW4xWoKYSLP8S2T2dpjoUb3xhfL9aSw8vSvF5GbYy6qya",
  "key15": "5pBfzGg2ZiNRq6USwkaiJk4P56EFvQSbW5hr7Q9kkHTm5b6h5ycbHNAXX9wFztt7SqQRMZcRVp1hgMUPVuLDxEhT",
  "key16": "3UbzmnR2aqmD9g8n8hb7s9WbnTEU2EvDEZY8Ujm97obdKLfBPHVx6D6NBTGPJwNYZ3XHGYDYXgKNnePN2FD89dCZ",
  "key17": "5E2HeBxsz7ZietKUDa7g4eoNDyxRWJumgFLBjuYXygbARTEkre7knmrFMBXhp4LbTtDiNYP1J45udaGsoZK7iVsa",
  "key18": "43pu4N1BnS4rehzZFNpdAwQt6LBTNdNA7UgW73jK2vL51cSPFYm2R77oJA8S4W3LCAVXHmNEnZb32nzAKwFe3oFb",
  "key19": "fSREvz5dBMCU2iZrBpXWJQ4Gf6hajTSLQcx61GawJRmkCAN7tPu9eqfog8F55tNK1EojqVNeecpcPUvY89owRV4",
  "key20": "5iBrS9yAweBKcrXUViWNPxYF7KBEjw6hCt1AQ7WCKWRQsHmyGm1f9Y6scLh9Ry7BmRWbqFn8iYgCCwMfsuDZYaW6",
  "key21": "3Y6GVSgyvnDrcdL2Ge6JgTNnVm4wPJQZZw3PEm8t9AeCHZeD5w3tvzEoRDRw7oP6VWpFBW7fhXjtN9fFxsyw3RQM",
  "key22": "3FNZGa6jQqnn8EpaSqFccoMujbhKueMHa3VDzR7EqCskCCPyrWXHQh9STsHL3LuJLHck239vWo5ts4jGb5NT3Lqn",
  "key23": "LNsHUUR7XXQmnRTQ1t95PzGkJoss5PMCiv5vseSXHaVf7B5QcPuyQQrXCACUsoSuSAJm3y6c85Du2Wo8UFjtUNE",
  "key24": "5N1hBqbmjYLwkVEeppFvp42vHzDmcYR4yjfLaSCgfsR3kdJqVcdhvbKuebkK6NWDTHuYh6RKxY5wDcjFVN2BeoXt",
  "key25": "3f27jW1DMKGY11WSDeXZzF1gHNouGdVmTwHK9QoQ5f7zQW8Vm6ueeohb4KHqc6qdMc8gU6ePRCTpdRBfoWBdsyLv",
  "key26": "21PL9Xuk5T9qQ9mJY6qN7rs5nmw2xt5LbKsHHPJPBTfrsbTgyW6WE7BQmZNksTU68QNtsV2nGsMrFH6wqkTVQ3ZE",
  "key27": "5DgsovXaFhWmqBmAjioL9nRGobnZFvLjSXqjf92shfJvp89KAQtEG9JJq1zdp15p4grPn53jcGfHHBMPCxGRg8E9",
  "key28": "5Lc7kzpaWABKnsxbK2BKJcEvWZ1bPs7ZvXqSANXM2aTnV73AqQyaBCi5gjqyaoXECUaUasLyLiGa9xRzHGXyB5Tr",
  "key29": "4DSp3Z3RdVLwUhMmze1nD8UvpSPFNB9RftUZgTyazuXDBqjUGBJf2PU6y2b6U3j8MPNVxVchgRwtteA4Aw4NNnWv",
  "key30": "T1irM5576qhQeL6ZxFZv13YJhRvPuSn3Zx1w9rhmNvTT1t5d9iHH2NcWEDqi4jmTC1naUEb4onZkpzQ4TvQ1Vwt",
  "key31": "38k5GU62tjbFyz3B46s98p6aCQvG4e9xQzbyMGu6jSUtS22rUmXAR1omw2BbwQkzvX6riYw48ptWavGF4JUh3vdE",
  "key32": "2Vr1aa5oqNG4htoHqnuXuvVqUQzUjfyZE2S5LsRa1wGXS587eUgYaVNiQtUMpKos4EjP34ZVjN3cfxZA28v1ePjE",
  "key33": "xuLjcadaqr951zm6zDGZgWV3woPGpJPrmeTbQCWPhiyegm8ymFbDQPBHTJXNFS9Pswapwxt8Csm7V1SYCjJFZwu",
  "key34": "3Cy42dxEa5tkZNg7rq6AbTAopfLVkf9nR7xqkpnkys14TyWVR5gPXZsrGphAnzAie3ti4yBQej9eXnFVUEubpeCw",
  "key35": "4uD1bQ43AMEUTWrariqbnu1CSwzee3T7HhF4PJ6DYR1fruPxhi3FtkZA646Meh5CHod131G9khyTtNQ1RckKQHSy",
  "key36": "3mRnJBMcY61LGVYpRv5aUYVNPesz8B4qsKLmFJqdCV2nzVtsNHpwyarf2Q4HEeuYqtdxx9X9cppnrB6G38zMEXne",
  "key37": "5ZhEbCyzghBeBhKrSLgT1DDHSSJyTAGFfbFEskxgKPd76bo9wXniL3QeLVfV9DNArGMJv5crsfiLAxZeUjUNP7zn",
  "key38": "3oWnrF7eUa3KEcv9wLjNbNS6mB8KjQpa4tvHoA7upvs5wkifr23qcf97bkGoUHKEsiLdFyFuECRdFwmcqLS4CjHc",
  "key39": "2V43kgfMDCBeGkMD6eD9au9sFUVjGYhhNUGiF7auyCEC9ZMz22NEHVu21QTVdPLqrAJbNgrgcXZH2D5D1Yp9bwrR",
  "key40": "48akK18JbwxVfHdGSYdqZN9Kz7udMDJGaCDiSJcNN6UzUw52UCY3Jfm64xj2NvL6Eh3aQFKNDEWnpR5VBH6Pt6sd",
  "key41": "3n95MrzeAGCyXG4TKekNn7n4XDdPEaFgtWF7g9gVzLfcr7QaxhfwFLWtJzL1uTHii2ABZDEdAKFoa9vCQmAuSfxr",
  "key42": "43Mhz9HWiBD32ztaDdiXwaThHyVjHxHnkb2NLk73sypyoHMHpeEKXGJ9CKzbuqzSSRmDrZgox2Xrkn4uNe9HQobD",
  "key43": "4YeJR7TC2PLrSEhiwb1Qa7FLMsmF8qJEwLYXZkkR3R1EfT9YsAf95qvrz28BGJbvH1R2Bx8mrZJDzx2bd7junKZR",
  "key44": "8Zvcq4bB9WMnJg3mykCiPAmMJR9zSLDCoyKzfsUHJ9zgBnGeJNH2KYatJvYE9KJMxRn2QVAm9XoRZnjQtcSwkG3",
  "key45": "3fAGhSFgsTA9ENJZ9WW5ZGqHPmgrJUNGtGExZoxBFdT1jeCZMS7ZsNoRrTmRkn8e1AGSWtPy5eg4UG5TfzXgM2cB",
  "key46": "5ys9Xxasa7M6FQv3L9oRxzxSMDpqgFckgT8cvdMfTLnFmiUA4Lusm6G2jhieTuy6mUucjuwDLBYDRwUAFbozm6Eg",
  "key47": "3a2u5uSZtQnuPrZmER1jFcAjLEbZvgywC5dWKsANPznfQqChgcknXRKxM27wdageGcJScuoZgBnNNfTyvxkNE991",
  "key48": "5Xq8RLt55oegXBq6bDX7xRxiCVzBxDRkgUqA75XnPkJoLgMVYoraU6kwhH2sUtCuoPLvJMSMbHAeB7ryEmrjj9Aw"
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
