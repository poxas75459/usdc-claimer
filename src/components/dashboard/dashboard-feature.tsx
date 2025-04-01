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
    "2XiD8EXqaxdo1rsbH9AvW44ANvahuA8zD5FRA98SoLrMmazvaEq12KQAqKUWvf4TswSRVYtH5yoqDkLvyuGXvUtw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ACRfTknNdhADwtbMT8p4F1XLjZkfX4tT6nhF8n96KpWSN83JUABtugrNcGeHn3sBB8WZkuhMBXri63BsfW1rtNu",
  "key1": "26SRicjAYjGDNrRi7DoCyhuCkpBUi7Z1nFDwnYEuCatUDjLKCReFsKNJ2UU2M7qWgs6M29XhBLj7z7EVQQxrmsyC",
  "key2": "78NSymUPHRKwNoSUMFhFWCXLsfJ54xaqWwXDBBgwnopvbiQ7oKRC8WagV5s1EXVWLGe4sSj6rtWMMD3ZytekMDZ",
  "key3": "3CMFxsYU5G1jUXiYsygNEv73BoACLVXNPG7HESMeknBH4vVSGQYjGj5SAr2U9aAL9mqKUwuNXopHAbsLsEFzPeXX",
  "key4": "hJTx1mEmic8NkjjPHQLRcE3iXZ5RuiBHz1njgvydbiKtwjLZJLcMCg59TrgVCqUYZ79FZavSyL1FdKQGfCtzxtf",
  "key5": "3YZpXysCgq11LGEtx1siZKYsn1ZuTsrfrKPUYMT5z31kjkXXwg7UZKmL32JutVyH7SFo7rixM5o1yYEFuVcnGrcn",
  "key6": "3RLoaJnwhV3iXWPdvASVsWrF8woaFz7gfvfRo2xu4vUjkRLYAVQ31tXRN9RAFdXSPmn4tamcQ8uTiw4ZyUoqgzwU",
  "key7": "4LcgTiteuGmSCNQDBSHMX2hKvu2vstZHeLsLwBM39JVvmeUifMYe9tBnn7dibDuy5WXDz7fmyUuwzGjprjqXZaGM",
  "key8": "CL1wWa4ixt165duq1f2g9Mner2Gak48ybdYWhptMW4TpoTNWJf9oBKvQbz2JxCBuN4FSw5sx4fyfZJEPnHJYnhg",
  "key9": "4JC1rN6st6nJaRw17BVN38ZuSEpLJBDzCgef5UrUZ5ShJYcPExi1s6UYRZ69k2qK8u2Qdhd8CgP7jYhVTm4HyaPA",
  "key10": "4iBAh9mS7HxTXP1KbWAMCWppzNUiXKFQ9RCL4XeEcL8jNfXu5uAJi3Ac8tCsCF1DcKZNMd8dSn2MuYQpuBtk29nH",
  "key11": "2Tu3v7LeFTmsKYMbpJeZk5XQgAebQmcGtSZwigsPJ6QQFohAS9BtpvqhgiM7xHoS8zjGPxAUfzdgDf7c5oRDE1Nk",
  "key12": "4uMpoQLDWTxY35X6YMjdSaAb83dNQEHNhN8jL5Y4EtvmybnyZ34pKMtWTUmNyHdpBozFut63AQCznBUmfTr3Nzi6",
  "key13": "4pQWJnsUBePHbW3Hu7bCVrTp9syYCwFKNo9Nm6MhJCxPH9PGWdjPgh1nh9JQZMbgybH5V4mMHJRN13zTHdUpjhEM",
  "key14": "5UMPiCiAJ2MLsLRikkSM4hzq33vpwHKfHJV9vDx9poi8VVGFHeUyiXiu4AXKGvd8gtTL61MiBZuv3rPpAU8FY6rq",
  "key15": "63UoivCLW4Z5R7aoZHjynYWSEnw3MbLHpRZbu9D3aXFBx68UKJRwvMxw3LfcKNEbaMd79YKxt3JBr7mxntb9yzpe",
  "key16": "66tEZ7DkoF38Fai9EVvUXPhRz1SMuqosVwzzsPiWcQBComwvq274ekd9MQs8YH7LLPjUNknxowjhXKGS38id2PE3",
  "key17": "FYB9MCQCuMyFgt1diSnCdLog2U1Lqsz4LRGvHbmUrBNRrRJBzgZvw8ZJvTqEYJZonerjhZ57AhtpyVPvB3MFq8V",
  "key18": "2dEmEQJQitLX89CRCW49BDbuAJwDLJx5e6nSxBJo9n1RiXaXJRs7baFag4xXyjb6fkQL5tk1azhN3n6MSmk3mPh6",
  "key19": "NQJHtksRzBWiE3w16R4Xn8mZx4n8mn5P8ftSV6ii7RCsiX6TA1U5AScwReVhHiSshV66DxQvqVAFJXcXgPPDFHm",
  "key20": "3Hwkh4fPDRk7B8QVXki9TqFpZGSoPTumK2e23cseiTjKpvn67AGon21Tp5StqvBU7UL39BcT6gSvk2opXCcC84cB",
  "key21": "5NsMzCo6saAmpFi8h5JbHFxJCsXHcMfezXcfMTfrTxS2367pppmqqJf1QC4PE6inT19K74M7kpvigfptP2cCkSEp",
  "key22": "3hqoMcEK1XVuhwMzwn9zFwQZxZ9GEpMc8C6XfBC8BQ7dtAvgQ41gzNBoiQHd2PRbDNdNiXha5WJRKMrB1dvMeXd8",
  "key23": "55ENa178YVDzWs1S112bSZDGSi3j5sXcuT1AZx5gugCecCb3SrMD164C42xtHQvdMidzLDHKP2S1BWaomN9pbzgR",
  "key24": "5aNVwLswN7T24Aaeevao6DmuCpMgmP2yoTRLHWXLyWMZ7EWqTqqNgW6NDWPx8XPCCxvDv1Ja6by9xcwmvd3AZdNC",
  "key25": "3VTWarcEcXrhfCEc5LTZoeBtqQGndUPsVoFijY1JET6wp21h2gdazXrXhvALdKZwaTLgusroMFUfVGUDVsiURRGy",
  "key26": "2eMtq1SnpQXnpGVPGbppq3e7paEsdAzF7RMpYrhtGLaqfGsu5u8SR3dtLeJ3Rjzo6s5GcVWvBbaoFGLC6rnJZgrq",
  "key27": "5dp5YoVQDKv7jkCeRVNeBtEjPvv7pnMbXXUw7YXYdaF1piSKGRXRxZFUavZoMwQesXYEXEuCcubn4AJDy377qM4A",
  "key28": "3F872UWVXpBfEnggpkrMg3WoHjXq6eqmRWgwSX3yjvqWysjMUddz3yT2G9BKyvrmK8riLrpPeMaSaVWy9d6Wyt8R",
  "key29": "4RZgrPUuxwi1VmDN9g16EtSPs7FjBU6k2Tr6tLdbx7Br3o4mChdCRtU8a4R9Lify4RRPxf3WdBsAAUSjnERrA9x7",
  "key30": "3bLW4BbdME6VQ6RfhF1keYgBVfTTFgCieDvGA4rFVD5LYVXxb7Y9TaJDHexSaQSLsEz6uC4EgMM5umQ2txpPZa23",
  "key31": "5ZmGB9wZk33EeQ9B7di2NtXaCEP8iE7W2ogqfT2fQdGH8qMQCuCdcnbFjCvEJu27gT4FmpfMafYC4AHGPABay6E3",
  "key32": "2dYRCRUyefBfN161PrSv4Y6vGZWq926MHn5Fox91uofUze9DVkFaWYDC7hcj8ZUWXsfcPq6iip516uRTnAoCS9NW",
  "key33": "4Yi9ZJquNXfm87xpuhiHXJF4CCbNe7kR6Bc1QZ4en81zAt9fRxg2PdQ8vHGKBeuTRqs9ypYtChMJWjfeYQXgTmNt",
  "key34": "3K83p4op3bv5pCY7SGefxwaxehxGyenWVvgARpWVEzBWUWD6CTM7phZwfETZEi16nSispTLmLT4MAfW1BH94hxqs",
  "key35": "61QWofKThNd3LDJvfz2rXbtMcTrNCxMhNMBjuxbHTJh5pmvyRAjg9pAZo6Z3BsgGsA7XFn58ntg35VK7tXQ4a5K1"
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
