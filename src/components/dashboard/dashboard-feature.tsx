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
    "JX3WGokD9WpnQ4mQkvKpkh7nk1Wf72RkrsNZCJZCvcPDN7XJnmuVH76s9wPBqCABZANV75VwpeJpEqbhrEfid2J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y3dq9uvKWq7rCBQKrH3JQXkco1vQpMJYFRnBsgtr4H8rA1bBRbTneQFeBy8wizVvNTFxRwsUHbcRqEc7vsGHmbn",
  "key1": "2WQghX1WozdU4DMoXpoQnZMXcxRzAThwFtwUJUQramksbaPjR6m5on975HdHSzPt1Dsavm9hPgoA4ArzHbtuT9rg",
  "key2": "XFPozWYd9yvAs7uYdaz5dwgVbs7tnDCuV7MzQLLD6KbLs2cg6PD2uyQSh76RAXV1dyFjgYpqj388EnLHbfDNLn9",
  "key3": "2ALzja12yssHKYYxaJZ8aZUdGwVkmXd3nxwNHXEeih7xcJtCKz3ZSDtNBK7NXnLuG4hd2yau5S5kz2zHNzPVtxa2",
  "key4": "34nGnCuwfco1G1SFPyNw8fUGjeFSvp7kfo8f28RPkZpr3PCyeU4F4F3YEH9qcLGNDPVRxzF5gCHpAcjBfxn2WouV",
  "key5": "5wf2banLHTuYQkKnFAuSSoruGVAsJTbV8hqYiR6cFrjWUq5Q1izt5Ft6py27K2avkLUWhv5NaAreJfnBaPrDC7Q4",
  "key6": "54AxBdsNJxD6mqNWN4cHCN1SXjuCcMKyviSFtRbEVPHWdysxiwF8NzLCLp1SJwN3mjAg54So98wER8K91yecwhYQ",
  "key7": "3FJn5roNfVwx6uHrkHSpKtmZehqrzupeNJYrwAFbC7mH6H25FkY5nJ8b36jv2LWgA2xBLiRVJ2SxGUXXPo9rL5H3",
  "key8": "4rmqMqkndGxqcyZWCiSfv7ZeVhaVQrz39M9PACEbDTTjEL4gCpSYQTFyUvX4cv9ksP69hDAT2vDGnrWB1FHTVUyZ",
  "key9": "4o1ccYrSxgMjSMdHLTf4DNqsLLNayN1KgVwmQSUweFnt56aCYZpAMD8kbm3NiDuodxFKA98QX9CM4zNUN45NSs84",
  "key10": "3mPgGARg8sQV2Pivy42oLN1aGyZGzsmQ5XeDK47A3UMwDJhKxAj2G8iAC3XRfpeD5Ak6Q6QWNYUYQne4ehZBHyvh",
  "key11": "2g7j3Li4VwQC6epEwFX7h6P3tButtWQx59R3vNi2RzKWpM5hA5VYtRd4voixtYP4gjCUdQVCWPeDzRCVxugDJ6DV",
  "key12": "2z6fKCvGCcakufnQPgwfzHf3n6jXx68TUcwHyGj9bmDqWWkQgsySS38Lf5gtTcTr2aokVABGnLuTeHbMX9cU8mmb",
  "key13": "3JyLLAizi7TA1vg1sM5oVsgczqGNjx9rP8ikYFYT57HBJHLf93NobskrMd91BEUjXYwmjcJAPmciiEr4BV8bHmdZ",
  "key14": "52nhF7RyZdFo8hMpEVt1bZsJgwXhDhMVBRsZ6QCxuHiLY5JfpGra6CbDRptTrSCs7WuGeWWVLcGjecd2mcUhgtDU",
  "key15": "5YTNcLm4ZfVD4A7p6x86on2PVJ156eA3SCnXgQGDQswk6PQrJ17fFQYS6DEeZqzZ3cQhdoBHkJXu8uX5LY1sLuq2",
  "key16": "644rrMs11gYVvpVveK1zwhzn29vJBS9yPMn3NkhztCWkt5pyrEEDUyytRiNbqCJ7DLhnq6EmbQ5N1H5ARNG2W3V6",
  "key17": "RMvUJH4fsQEyrhuZ3pf8ai3UCes8gGjxCjna1NDo1NDVAjcSzn1wU5wZo4SkzCURkReT9X8sx68f7KHcozhBtZy",
  "key18": "4ZJ2GyautdbuSBZxDLnMP32can112LgPLLkZyYq4LsRYhwZRpJpfrAfAhP4mwZqyXMx7a2UTsbXi9iDPTgR8MZot",
  "key19": "WNquWKArBZzkcZnArbYv5jaoDwN1X4fr4X92JoEMBcF3Dc3JFXTC13fsD6K5h1bHc8dVpskMb2cZiMmmAj95oTC",
  "key20": "2mXECJeCkUagBnTJRc2KtjQxo9iRaF8gAeahFXg8isDhwLGWaBSH2DnaocCa9xYo35EFQRj6xi1ZbUfLvJNnj8YV",
  "key21": "4P45k6jfGDhVrvEWZVc4NQ633ig16vMFvhrhxyWbNeQN3vpDYxb6uSQaUVXae1PMBonk6pnMKRERqwnLK2Dvomzq",
  "key22": "W9LfUVUFmY5dNZa5cnPjg22U5GoZunAZchCop7C4VFxFghGnnGEGFHvEerskdwtkVgg2maTkoJfGxZAaoy177b5",
  "key23": "2p16hjhvzQr94U9Fa6dndaZnPKzTjUWBtj97ntF3bapBXKvdk27vtH7vyUF3AobzcqQjCC6Tx7zmMGx1FkGFJX6h",
  "key24": "5NLBMx3jutmvgHCJcVqE1u8bGmg7PSiSdWmFYiNY4oaHB8rLv2X55kESt3esY6dEDFhMXLtggcWavaQAkVQBG57u",
  "key25": "3Xc54Nci44eQ9CyBUoQqKvVcBkQkRghFiN61dYvibSaYtC3jaiXwBBBpmUGmhntN1mV4E2DwjUVABL6uGLfvBkwz",
  "key26": "5uerRTeQTXdwNKTPXt6wkzrEHprxJq3Y1ZpyJ9AZuzJTWBBcHa3mcXZuTEmRD7D6JtJgYFAVQQDwC87F8DQJFHFR",
  "key27": "2XdE4kFqk5LEns6nrQHcdtHNfjq62vrLTAbU1tqMq4zDR1xPkJMb577rHka2AnLid5zsmsxz4gLRxCFTLMTR7y1W",
  "key28": "993qyEJyGNFPRCVyPQoju3VZNXjKZxDHmm8qyD2wi5PToSQ3W6TVUh4SN6TsDHaQrpEhthrYtmFyvGZepWTS89p",
  "key29": "mVSu8XHVesK5uT6BkHFiFarj3HgiBd9abdspRpgCTUpPfZy7B4JsQfe4ABbGixcsCS6XSngRGPN4c3cGYkWzLnT",
  "key30": "492p6jd1tfR6joYyEKMLkagmMD4u7gdaLqcGQcXANyBauDbfdTH29pSoa2gLmCPsaoTExBvFv4MetVbvKG7BM1tu",
  "key31": "2AuLfmG4322FTCKTKXBNMzHCDY78kJtc9YEn4cvxppmAjtc8okGafLhYZjthN7Wbs6ojWZRXMwo6Eodh1AThQ6n1",
  "key32": "218f6zpASoxMgNFFR9qrTnw3iNzNHxNgjr5Q396GiZkEq4jnJsoP7ogPcwi4SGQqLLZUq9LxuZG21CXzqR5C6oxP",
  "key33": "5gqoiTRxgL1KdWuJQJqQgnLybt2j1ggKFG5E2kooU4wMvwcoRCvb9ZUQ4s2uqWwfqKDeh7m321gSd2baEonNPLgz"
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
