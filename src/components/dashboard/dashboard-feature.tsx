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
    "3DDCNXxbZKbzB2paYncsNPHvHq56R6HbMJ8BZ8nAsZAVzPMMtD811SSiZD1SaDxEyVLYBuZLL4zgXBoapCP5q9jT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SXiBBQrZCYnxt6GZXSSfH7QXzmK6rDBTr7yXZe81Tq8HaCMrEubdxb5x6KNBPJzvKqcsLhRWbWrvaVPSigCFsPA",
  "key1": "4uy4jjerLScEHd9PcTwjh4znW7gboiS54qKt8rZyKXjp17oF9KP8r5XXZXnDoYCDQ13gqFf6Jd5J8T3EuL25ojft",
  "key2": "jEM7y6gJWCEUnp2H2aRr41ZkbanVqngKPQ1ghYbuTS2rZc238VpqdUzhje3vCBi5ZLFUjGKqJAP1cJybaxqxvVi",
  "key3": "3xNMUbGsHJyrNDTRxgGm4VHNSbShX5jjCCwcXAB55SRxsc7iNMdHbd1uB5f4ayxU86o8VP7KVk5gmi241H2Nr81E",
  "key4": "2UxKzPpQ69ikcKNREqWh9hCGcF4XyWSSGsHS2SmT47NbFphTFTWv4TQ51z48UmRp6sxWTP1mta9FPgTnChVzXbLJ",
  "key5": "2p7ik8C8ppAeQYLjjhzF4818ZpPJH6GxrUiAxjNMQTFgmBLmEjRRWTYDgVmynJQ8DmSoNB8V3aFwm4DZGqhuU4YB",
  "key6": "5fMWBctBgdGikYoQqkg29VW3sWjBHNqtvdq6A6s3s3R3qLjoT7hfvXYWGoY17BmB6WxGuNjHJhfh564msZHCM2BR",
  "key7": "34FudnSEcqCEn4wjudNusHWf2mud3TMgccE7eyfHY2Ggxy4aKNUgw3u4hw4ir3z3Sw4tFkVE2FzAvCp41FVhoe9A",
  "key8": "3rc9QiZp49GQis2FVUxQGCJwzCgcvLWAiDfUdG6EPiqEV6nhUBxytJy4w1JWPAW8PipxJgB3CQi1gUrKb2StN812",
  "key9": "3AFxPDBXSFgW7aPZiQBihwpBHfvJivWAivL4Eqmo4nupTKCQdsDhNAYagDaf8hBfhjGbDkcja2Jov6vnnEBfU25J",
  "key10": "3ZXZjfCGNWckjaifptVWmkRhFsd353epSz1RzmzeDGdfHNerBhxh3VQx3GiYZ19xeCyBwYv5RLB7PzL4zduN8NSj",
  "key11": "564DtD8HvXyDjfT4KtaZoPr9Vxi7PJpEF3inGbGyY65sh6HzVgyNWwSK65cyu9xdZmTZtpzZLXZ63PAaQhhfjUW",
  "key12": "3VoSTYiGvKWETuLXfg1VRVDgqMFEybYzdL7ag56sPtMYFBvN7Rg3ioSYtaJtybsspJtWAC73bgUQKBbqTbrvpAbg",
  "key13": "5JNnH7oMDzRCAc5UpCa6CdXWGGLGYkVvzgzsBBBYgPbo3Y2Pg9rGbHUXqFP1rNY6LXqEBoF75CTo3XaXk8xnhwva",
  "key14": "PAfiTWAfUTMN4tgYroy72k9qLUahToeFtfN1acLLXX9bGNDq9sD8MvU7xTXmEGgBHkVWYayo3Hy5GhuRWF6MpVG",
  "key15": "5yctGZczVy9RQNL9bL4f43F8oxq2fgZNbFVYidXSCPQXzXqkCNxqkNjgme32qEsmrHzXye2sHE9i8LrYbueLdtgn",
  "key16": "2UqxGw37xjfFFEb4wjxeNob4eM4FfX9mpNMi87TvpR9QuEd28i3jBxQabVWQokRipRxa66iCtmwe8PA7oxP8BTgv",
  "key17": "3RrrfwEhLxcDayzsHiPTmjhL4red4iLX9GM9MiFVF4CBBsaiPnyithDLXQjrJ6QXuhaGERaWuk3nWrevfm1tkww5",
  "key18": "2qpYDKtAv9gZd4sPSPE2KZKHxXbZxf7KhqEgt1gobUo2BFhhAkh8iZfTcpKuoZGNBSrN3q7QwZYYjoaB54ekWpeC",
  "key19": "5ZAcesm2dQ88QjgufRia6fdFcP7KHm92XB9g3JrYENUBL9MrjHTwnEkbZ3o3DsbUjJgH3kuU9ek8TKiKFgQuyLtJ",
  "key20": "3tXLAWoys8qGPgUWyv7BCZejAmNTxjnvFsLzbgtPV5XFXbHkBPZSXZPvqCMLEjaQxvJ1GMn6GwhzAA9uWm3ki8b2",
  "key21": "4E7zs38cDtvRBLYksGg61zNR2mgD9kX6PU7R53F7D3p8R74TamckjAywdMV4qVWLpQp3tZWSZ8UScXtjobsL5qdd",
  "key22": "5bsbwB4nfZwQHeypW8azLjj27CiQbxS2HLHw3k4h4WuN2nYf7KY4LCMB46Nih6DGeZ8K9rgABjSrJ8GCTvuJSBUJ",
  "key23": "4P7C16ZrGW7YSJN4DB2GVCrTfQLVsh3JvBVtNYPp95k8TSnr7v9z5xbaTWt2Gc6NSETYmddNjTCbvdEM1kgcp4o2",
  "key24": "4Tnruy6dYAoqW8KYvGK1DP6vPotMXma9r36nymGNCzRg8YCSj8zLtjKQLuiAjy9LhSjw5n1eJyAaoCuXL42ShueZ",
  "key25": "2a1doi32mZoaAww61uGu7udjMWFRKsiox8yWVCqNx68mvuGwKryr9Q1M5fvWx6FQh8JSNxLWdLFNKskvMAarzraw",
  "key26": "mWfZmFDFq7uyXQUSjz4G23PmhPaTo2UcBc8SVFXcMj9ceP6gpvLZf8ArBEsvBBoLpxdtzmMp8jBFMmMhW2wSgaY",
  "key27": "D91g2sX1NpxjRfqrUf2e4fmmuNakFqAniiT7z41D9mkfTpyrGsVPEumU9mxsoq8kV6uGC4NhD2AkvxccFizntMa",
  "key28": "xHqTLaQShNzTfhAgMFv6YeBwYMZi6frQJFj8qhqkdVgyk6vyhMJGqvXkQLcqaR3AAie5jVG1M4JsqqDZ7nUAbTG",
  "key29": "T6MmjHbtN5cnj5PN9S4KDQNLXsrMaZsq1cBCRMXUXFPrRL2gZ2NK6z8jkZqrzs7HrsBjHADaRe33KkAhAbMvuwG",
  "key30": "4ZWBGfRtCBTfraKMjCAALZKhK62yEykVWuTSysctUEjifXRescr1zrRv14JRB2xac81Tag9o1XxN3q7a8eBJd9e1",
  "key31": "5hzE2XWyACNJ83TKkNhZhH1QzLbw8k7bYoHgSU2LsSR9777zszUtNoYjXEd7iK6DhC1tkfjdrNDPyRhiP7zZZTWv"
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
