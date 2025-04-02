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
    "5fM9gyYkp8PNVyM5DvcDoYsZSqJsiDfMXsNkRZWANvhTiCVe5rRDyvUxwM4bhYb45r3wLYtLQTSpVYfGYtKS9yHC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DiUjdKP3UQ6i1idbZMZjuXEyHxf3LC9cjfGa4LFXTrJpa7PBwr5gFoir1qpaBvNK5CY4eeozhDePJw9gQGVUTLs",
  "key1": "3LM4pmpRcRxXgbTABaccuMjw7kz7LeESZD6e6KHnVSojZ2mtaNGsQtrRmjnFgWqGsfUa6GxWt1JDnscdjuhGEpZE",
  "key2": "2VYBSJEmhQxWTR7hJB1aoCkjfaum6cyxPDkJRw8Cxis3dy2eTH6Ukb6KH8vmX7vSWgLc7EdgVLR6e8MkSKWqa9qp",
  "key3": "5PaNPTMzrYxCLywRCB16GQwZf7T7bjcBYji8DrHABqPr5XaYeerDSfEktGqWqtnKK6nPpXRMvkXeF94MLh2VbUci",
  "key4": "5hDfXWDPmzD2xELXGnSBidAZ8bZk7cZEZZ9chA32ojwfDQrWPwhySEHqFeYCMoGXwVBT39M6oVcTiLovrmwFdTkb",
  "key5": "4DHmmLHduVPhG4L7J1gu6rocwr2d5TWaacSqyYTmB8vARxya5m2YeW2r7ywjnfADJ8YLftvZMTfkNbAES9Xp29zL",
  "key6": "2NQtWYn3gqBUPSgmPQ2tDpFGN1ju8Et5v7LUDjpa3dSkt57iWJwbBS6ujZ6pUMvKded5LL3EMa12ACFNfnex75X8",
  "key7": "2V9GHZjuGwU4d1rGPwpJNozTN2RX6veaaNEix3RBYUXNUYCC5exP4AZeDGW9P3cmRs9ZVP3LNAVMm1HRhsTmPLXh",
  "key8": "4HwGQjzURZBnWJuzkMqTsUgtnMQStHzjhUaSrkffizwDRShnHEyruvXHsPmXxq8Sq3CTMHiiVScGbJ91qJGbB5Ah",
  "key9": "JAfobVhrtoWZWoRrvhHVbRxJ4nHntomCSfZB5Z5yRC5mcabNe3AoZPCYYmtfBoA6bSP9Qng8iQJqYs16THxp4rM",
  "key10": "2LXRMQTepYF4PzvPsydSU9ZtNaCmApJZhjD6QAhmbTK8pmxVcGqJ5HrW4BqDzRY1hibfUQdx7WZ32y5FXfME7TkH",
  "key11": "KCiiwYpagxXvaSWcDZQrcXVabxcmX2Sk484MZ3aEePkRkhkbzTtECkbtHHpexFXku8FkEsRYpp5heH5EyVCFBPj",
  "key12": "43ciHa8iuT4bkehZn4GyauNSawYCy8HmoZueyK5nfC47xZ48bfzLn2dSXz7VE6UA8Azdch6De5uNqjk7mWXHtG4N",
  "key13": "41KMG31tn4RnXYmJDK3aEfQ43FWYicfD25F6bifGGEgFQpoTBkznc6ZWkmBd1KbC5EKJzPpdZLAdNq7uQRgbKmNH",
  "key14": "29ZxNRB9o65ETqwpVvzNT3DhjDS64UTzECrwdskwY7JKyrJiZLQAen5LkKsXXDpNi6eknqe2o4T76uVETBsMFjSg",
  "key15": "3jxjQi5VxUBBRqhwiUhLtTDbK2rVDk3SKQC3xaKkzRDeNdB9b7Wxa3BWFWvyDLjnUMCGokSm87KyyhymVEMuAkm9",
  "key16": "U8gU2EncBd7PQMFxnjgRemY91Hguz6eBJjAbEX44hRGxL7EBjB7WgipcWEatshnfeF2fNzoYXRYdDAsmMVgZriU",
  "key17": "d78euaTK3S1k2D4g5ZSvKLxWM42GiB6NqqUg3sqAEnWSLfSr8E3bc8kd9VgJXw4roAwRLdt8QdrcTc6cr2PSAj9",
  "key18": "2tG5QZjG5DnxoUVDmrxgBAKfV9CJni6ZmanvMhpf1wuE4YUJf62wUGt429oVytube2Hgt8AbKDFkthQnkYdWY7tJ",
  "key19": "4xSm473YuAFFSsxThXhjv9McBAu2EmBhfpByMw7mYonfWZubLNRbUCX5Saeg7i4nvKPbZBVwcbx82XbPkGQVZ7z3",
  "key20": "4sT6kosMAQLupmXxm3JZsjmpRAxZmBkz54rMbSyvduv9kQGwGHqxNY6rnebkrPmfxk7oknbqAFiJ8EJiNmVzjvJd",
  "key21": "5mQ2dXZ1mtB7huAcaKk3kqd7mANygsnKMXkkGzrKpxaJNVh6cUMB5XHFUcYLUmpR3YPa42SE5X917bwKQeRRox14",
  "key22": "2Div3g76Y1GezW4kh7cpMoW7EF5umL5MVUe45TwbxGBs9psMTvH7aTT2jtYzS3eRXF3po65iAikP97tKXqBPLH6R",
  "key23": "4XWkAcZHwitdTJvYK5ami91Ko9GRcLGwUFFui3gH4cdEFCuMUxa4c3Dk9uKcpCgVyE2jMYfFQCEhYnWXEB2L1NpH",
  "key24": "4MBvEwaHg9L1YEhXvMksmdArbhY4vrgxgQdxVPKxJnVcBRHsaWwkqkbk2MrNoZPAzsB5YmgDCWitY3Q5RAymFhzH",
  "key25": "4qta7Xf9APW9WrwvbfdWmccGkajZpW3dfQp2FhNWAtXx7es1EYkuopDDA9u9CenPDQidN12b9omzrsCfrnrFfj8v",
  "key26": "4h3p3orUCtHsdvZHoSn2Tngbk9WLntZ8M666ie9TJYikfr8cPc7gfVmv6pWDm5ejZBj2BUVBfnq2fFxHQrG1AEwg",
  "key27": "5eybrGcKSCw22yf5wcfGXbyryPw8dPub7XL4UHAcLyeq6A3zE6PGN7WX8ZBodnjLPQJXVP5ZKsbTBzQgBWDsjxdp",
  "key28": "2h9rUaQUNFsWqUWLLjicQVbFuZxaxhDZFsYpsJB5ZjLSBESk1jKuVmV5Rdx1LviXCtGyZF2zzphB5wizzrVhv4di",
  "key29": "4Xp7eUxVzZxwWcaiAvkcW8EQNoszQa3brCtWJh5YSQQnzTuii6iCN1vUtsPGRQgvFjGyRqKpzPz9C5qLHTAq7qzB",
  "key30": "59b5wtSRZPkRiZErp5atLZd9VL1vdd3ueG6kpHPwRb3mvWQrt5shN8N2zNeV5rWzWv4KHLAmTXPKVVGqQf19xAK1",
  "key31": "3SKRTPQosLpU2oDfDXJhG96Fa1Dc2Gh1X8cDWnoxvBRwpeBvAy5r5xUQddodoKy6T13bF4p4c9DWC2caR4jm6Kre",
  "key32": "378qgowx226eRPMKPSGoA3pDsUfoZp5YbiA83m7MLyPQhcjULf8eeCUe6tyZhYRfztu755i9XB8FUrGHSYMoEHdD",
  "key33": "JcLwA7RWZ9LocLzeZUyFXnsR3Xv4AT4hc3W5oK9mmjrUytcBqtv4wa1yrufs1VTLv5LgDq2ErmFyPEWQNRkDTKh",
  "key34": "45kogxAn8DnbJpfqnhGLjkWqXPtJ9qdP7bCXMzQKXgBTVHUmLHCPwwzyyTJHwVf1mqAwb2rULLThyq6XucsEnh3d",
  "key35": "3J8oTuzGwBBfLUevdzxcMBVt2Fw5KZYiJtdb75hPnWfZh9ncjiCB1n6AtoVm7PCnr429u93B17hy5zdPAiTCVzag",
  "key36": "3XgGk1mPnevWkXF6VY9zUo2E3eh7hb7ZQHTc1UuZQksZmZGtiDhGDBo4JDRqopfs7HRyQPqWv4vtXphn1DDSRTQ3",
  "key37": "2QpX1kpKSHCqZW9uHSs9ispWnv7emJhFHSFH31uv2bmiRA7y7ihg1zGejD5kE6ofemqvyGu96tGT726hDFnb74DH",
  "key38": "3z8F418CXPvtq9YLMWFHRMCGezfXASp7ERG9RJPaAf9KcHuyeUoRu6NuZCXdPh7FPTB1XP3shY6zcWv6xB7gjyNL"
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
