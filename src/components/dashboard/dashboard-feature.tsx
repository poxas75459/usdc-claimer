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
    "4KhtUdoK8FgH7WLMsznShtfrFaei8oc1FMQCZBai941uf5DcmtMQzeYXobq35JgDa6EksRjZEZE1CmHJTSyHsh5o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s4tuaJi9ZoQrHhrT1YRg7kxAfr8YDRuSFDPT6P9ZN6FN2jMvUgLnvGwQBSzfRvC87dZmK5CHTxWWh4bkQM2NF15",
  "key1": "2fcFiwpjCZU2xhMDkHgkFufg6RqvdYzAebjTamiFYq9BoRp7tEr4sTLxKQUkh511ethYzUTzTx9PZMp2pvcRsjxs",
  "key2": "3oRKeZqsTbYxVaK1c3rq6kv1JG53Agg4rZAJMsud81RPA61Z1pF3Hd7tm4jqg2BM7AbtM7MiNnWwicfCWqQGmAuN",
  "key3": "5Wa2QBFzD51Y6gWhKWPWdp1PtgpFMNaFwjRKF84G3snAjik8pDtNwq34n37BsmMR92PPNSjo9msdtkm2GWzHdmTM",
  "key4": "unKKpGwto42mhPs54Hb2iENLpQY6KmJc7C41Ko3Vu2J6HB38PcNVtRSLkT4ZUBm16NTF7mdFHdRi5LcnWcBHgv9",
  "key5": "5yktpYRKj1Dh2NeY3h9MNWjmrJttXaWZfowQPv9RxyuV3SmGangvG62S3nV1qQGgJgemk1qUuAXV9FXHZGfoDWy3",
  "key6": "2hkhwqJg56JFnbStdH7wLFVd1AfhTjQFvb3XHik8bQEDp9zWnD4w9jXdnGX6bGPWJcc6N8XZCVwnqWzU8hwiTpDq",
  "key7": "21aiP166Rq5PtBBro4yTpAnqwBqXvZFbUwSiSzEAcaZVrLmEBQJqhAzyb3UY7oV4jRNGpmsXFaP1TACGXVXeD1fM",
  "key8": "4cZ4BAUBB2Y4VoX29AAB3sNaAQsvcTSo5tS57dPqu3g7RpJ2BhPWwZzC68vFThr5XyVMhQJYV9N9x67fmkGikg7g",
  "key9": "yZoJ6wKtUfcdqD8m7TdrxtDvqoCRK3o92LEU9JZoNBv1xE97VGrePAJTRndGEGQzyEoThVhpXsB76CvHkeSXRyg",
  "key10": "3XVQ8ePLwkTThCHXe4Hms48bJpeQk64bRet1AWD3odDRpsqnpeJnTvujsijKBtwCqBKYVDHSPGBcUiqU9PtaT8pQ",
  "key11": "4HRmdRhvr1uffd18co8sLJdmRHfREKszi6b8DbCFRTfpVB9thwMnAA78FdAArPmxR2D2XhDMeDung4nZSrPHNcNV",
  "key12": "3qKreprBN8QQELRgDNEzJSWvmmxrKi7WXa3CpyuKwiGyxvGvLBq7JzW2UaHadY4SPEMXaJtuEY1sadvEQVXCgxse",
  "key13": "3H3r6Kv66rQifLUwtyN5f1wiexAH2cyD3jDCzzUSKqTuLSJD25Bmx1zWBETFrx2iGt4JuoyPeSLeVNgeJGaRM6cM",
  "key14": "426oefQ1u1bp7xDTDHzsaoZpc3oiSpivwQU1URt8TS5BngCVSP3gog4V6551Sgq1k2PZoryys4u4UhWaU79Nngny",
  "key15": "4E3nXvxRw87C3ScEfmAVhVLYnCpLUKxcSvKUW9urYrjjWBsVsE78CPsEgpZ7UQZ1BQ8DxPU5g3y6BJZDZM9mnhPR",
  "key16": "5F7jUPn2pyLLnaSBWPoSV6jmF6aJKdZQkaFyxfYQs1YnWLVe8DGdavGW28KDxVxKDt93StMXAfEjpNwsgN6WaVRp",
  "key17": "3METDJqeVy1VwWF1n4oYZ8CzyHmhSpFrBviYBA4ZPC1U4YzUnChYWAawY9g4rQH43nrcnP7Pv1s2Tq1kiiVVEcg8",
  "key18": "5yZco8G49HomgAK4rtwix6veyQ9CpoJ3nRez3nhVc224mk1vYppTA5fgqx1X452PZfaLwx3AmgFVEEarHwvU8gBc",
  "key19": "5r7Zje6wF9v3Yejm2cawPZGLU4Jr96M1BzVWa4chEAUtg3ce4KfABSnHtAvYbpZNvUNGDgBjGznCTNSPEUprMQPv",
  "key20": "52Jjbykff2i9AR5pSUWsbHkbTTr8mSGEUXQnFgs9Wub1Q1UVkKxZR4T1WU16vBKTTBmNLmREeHjVMPEnEpyWmfRM",
  "key21": "qXDaQXryns4wMNVJn86fzH6rqdVjjRFw43UNfpkVEZthSnK5SrqKDakBLgGxjdQjF8manQamrbkgwE3Xi8uQdga",
  "key22": "4rxipkYvsr4SyWX8CaWDLsL5USpeofsG68GMHvwcpFKE5HyQus83iJccQmhnS5YVqrYf8LXvw1xEJyZNqWjFAash",
  "key23": "4mPV3V9VbWCqdRzmSoAmAuHzV1Da1TbYXN3fTEM88dVwhRY4cjFkyN8JunwbCRBEyESNXaQLP74jj1mHBaNsVtk8",
  "key24": "2HVnG8PiNS6ZxBkNjbAQ5qZgk9HqLiBvQ4x4Uifh5J32Vh21wmmjH5FB4rSDEh6x8uSTUA1gEkMMZkd2dUqw18cm",
  "key25": "3D3bnppCh9yJZE3A8FohuEtkkFJkYhwN7SDvngdavpTE3gin9ZnwRMBswVUGYxQ8ggo7rp2xZq7VpMnosf8bngFz",
  "key26": "7mvTUNyFXrSFB1pebZsvXaSrmRV4csw5Kz5w9zVgy7aQQb7V9Njk9wRsrDdGVU86t4TNmTwRGN7QMf4t4q8TCDc",
  "key27": "3SDwKTPDcmxieV5FuoXJYw9StJJc4yZ9HcxFoPsRwwUZufEV1FhZmdYibodmSaoCiUeuXhrkHrYqZsk7iWi86WPC",
  "key28": "2PcsBTR3p5qnCECSRqZxmWMSr2rGbmCbtHbbmPsFdjJHVx9GjUobRJTw4mToibsgjv7DSxRQYUNrbJFSd9bqYW5V",
  "key29": "M2k2YgUDfTc7BAbAJ4uLJnHWdybLtzZQ3pYfyiZUdVeBL9SZoHbvcjMVMxx2WgGSh9Z913ZywwtcXYsfAWniYm1",
  "key30": "4a4JEegj9eqdtN3QBgu4XThDARN8xnCombDCCGz9WijigJFkRAunNi829LYyrSEcPJXprEjYyH2aCdxPhiAY7gKR",
  "key31": "3796bqRPqm8ufQQduHcq68SYFGo7mjNMLsypsQwppA51in4qKuhVqmCsW1dYc6sisaerUZ1GYHELMEEL62Y95cLC",
  "key32": "31Yppn8HJf28c7eb8MYcUZyn2MippeC4xgQhXSXjcqchkP27uS6UbmKY1maVA76uDM9UAVGHRqAu9qjHWoPEJRzM",
  "key33": "42wrKLYkjJy6dKvCktLjaCWMhiUBTGT6BC51tWx5VVqnzEuvvxykUDgxzSKHafJusFbd7GL9Kv2VhGPiLhsjK1Cq",
  "key34": "YxLGG3NAe1kVN7fZ2BrUvVCixADcMcuZcn2Baz4EZYSXwnCJ5s3c8HRa3BJMZW1AdXdVDv7vufYhoN9yx49fQhP",
  "key35": "3NEJ9a7ssDugXwdqmUoEBHH16GUx5GNTFJSpK12RP9LZ6XTuatfFn12MyhNnhKsDHdoiQnYX16M4BVUzQHs2x2EY",
  "key36": "3PbM36S9jMNoDWJXjsAhM6Yv9pou28D3KzmFgR6dAkMfV6fBJhL33oHC7Z5QaKd1VnH3PFJV5gcof3VpmeyR8eeg",
  "key37": "3hQDrSX8fQrL9pdtTMLaDL4bYqpMXwv4P7VQ9tmkSUSfvGoWukUVRebKXWRNhZMUoHjSgfE56cNYaEbjxWKRN68V",
  "key38": "27XGE5L2srnL2rBWFyHP23pugYKmc9TB8x6gc8QPK5QdYAWD3MG5bScmMUjkpNhU1sXEMMAy9hCGV12BKVhiPadC",
  "key39": "648Tc4EwZfGmMZuSUJFnc7FQKNrvcPbVDSvtyYdnybkabb1dqdSWMqiDtVXP2G1yPNxvbKd4hyLct3Y3QAZoR6JG",
  "key40": "SUYF9zrmtE9DDXpxk7y1FRW6KWVeFDFHVXS6Ui67KEo81mWCtXJBJBg1qUpzApQT5NNPm7MBeiygYzCbEyPZXDK",
  "key41": "4rBon1y7DuSoPk7S9Y31TBY1nibDCzqJsxarrih32dT4pmzPTLXYvexyiznHLFBLVqJTFr9tVdid7VtutKeWszLX",
  "key42": "5AWcbMo6vggAwcuLrtpqe6hL3vdVSCGsr3chfr27aaPcyhtV3kgBS8xCxJg6u7H9jyKnRrzBFKQZQ2TSx7mN9b9H"
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
