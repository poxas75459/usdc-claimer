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
    "5SVu8P7AJAMtCJp8yd2XFmqMouEQShzo2hn7f88fnkMAiJ4VvPQnabbG3YozHBkFA4YXp2w63NaiFKmL9AU7gM8U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SufZSKYWX9GLqUKPnvMsTYMSdeainXpAMrGEBoRyztZL9XRXWc7MnGiAV32sLLsYS5GwkWgNkdLQcHvyasjXamk",
  "key1": "34ASxMZUL6F8SfrjxXC9nHDaUJx4zTbxRVDAWRkEecQCGCyYYrnKHJ5pdG7p4VwWXcZRRLvYy6i6KnCuopAjiH2C",
  "key2": "61v4CsMCsqeHY6cVybWBysAmiLJd1v7X8rbEypAUQtSqrxZJstm7Mprk5wMH94vsLZ4NwPvfKKT5LhMk2PBJnvwQ",
  "key3": "3qfabpRmBconwskAGp6878B9mspuPpn6hUNf98iLof6QD7LhyDV55yvySVvg31n3qqS3VGwGZahS7EivhM6dVc9D",
  "key4": "5x5hjiT844pdZFRzfJCxqnQw4N7WNRLzAWG8cneo3XBaveqCEm6Qa6XGQnSHoT8ZKXWofC4jbmg73s7ECxSamJ8R",
  "key5": "5Cr5BQJjAXLM9FGXxZ3b9ppeikAXSv1pgQJk8G93YSv1kc843L7sVjquCLRiNaQSJWQ6TKpHtjj9ZeuEYENLokFL",
  "key6": "5CHnr7G74U3ubguB3t8RMmKf8y6S3fbuRToFzPZok81GnLhMrBHJqf8XU2E4puWySLfmXmPYW1KdUrQmDLmF7NTp",
  "key7": "krF74owVYYVTk8E2vu86FceU5eYMCmxB621ZU3Akt3SS6j21yxLpmRpyvTJA4dVCuQeJABg9nAP4JjiXTGQ6Qp1",
  "key8": "2wrNVGCePeCHBN3rQCF1kiv6NVJc7tKzmATAPn5yMfARAHA9gwd7jx3WtRsSJp1ARtu34EL4iwE9TMxyBoL4PViK",
  "key9": "3Goe2fzoBFVopAekZUrJUQUVFwNZqgCPxV2SyDANEva1mD3NZ7iEvgsTZpxsmBdYUWXGTAfSy3meH6TiGQqpECdN",
  "key10": "3HVVmEHfzdTUVRF5Lc1UZKGBtsYFPTJpAZouuXezC8X7ybSjyfGD76gnHAvhkyVuFn6zDCDzEC28QdEoNCna7cBU",
  "key11": "3LoXZ3SR5dgcotSEf65H9gQLE4WFhttZZR6XXYADHX8sbAArhB2nDL1uEB89P1YqGDhc1RuooRCLRg7qLyZCtkiB",
  "key12": "31t6wyVVxgyGQqebqHr2KucPU4GyMzCqm1q3SWFZ2qYu2Pgo4hqV36xGsTYNghr2Ua1xM15XMC6eDmtYaZjwQom7",
  "key13": "4VxkHsDT6XZQCf6h4f3w8gPJnVmEpvu5yq4S7XWv4aDFfq3YV9fhzpfkDGBaBGPHSDYuirPTBZm6Qj8VvnY4yeHo",
  "key14": "55y9EqgwzzjzmD17FJDjmY7Ka419EYqtC8LweVV2VvSJDzLmBN6qnpyHWthUbTdrDuMJrx7ffWsByPVip5DxzvdE",
  "key15": "57fDx1fb8rZe2mgT6WQZRSvF86CSrAupGQY3JiLGYURNdSFUTjtU93vNR6uKSuyH6nGFCzpfpwCCjB5M4NoPH6Sv",
  "key16": "nmf6UzBYNYCrAjbwV46akSwhHS85gexg2Dn634VDV2unRiNwXtJHN4QhXHtpwEmydsmeji3mgSCzdqCjZTVzBRe",
  "key17": "2gDRMzzVWLn7FYGc2VxQH4uHMzHjsnwMFfhrLE5UNMrLF7wCo11ecUTn62Whyu2MGb6Gp9CGuE2vbDm4RopWhdRM",
  "key18": "c5ra1bCUN97Vo51GVTiKnc6cBKAzbnKoCF75hwvgwQ84UGDaKF179ouT9DhbF9TypMHB35sQACgFhdwKAAMcFax",
  "key19": "5G7k7VhUyFEg2nxiogWPC13TvP4cALH3tGzQboPkttzu9KtHdduMQTFAiPF49w3Yrsjn687SV58BLQ9KinmWwxLa",
  "key20": "3genA1jKcd3QFBYdvzjp3ryeGqEHWYT7b6vRgduX4Atcp4ZuScoCmnaSgGcFw8UHMeCfRiuVCZpeh7wPvix4Me4t",
  "key21": "pMvX5PKSLqqQQV6rYCEmDfjiwJyLvjT8cwxua3CqnLsX3ZKDkQh7bKQrKjrxjHRSyJScbj6hwk9XqME8ydhDcU9",
  "key22": "2NZuKkooAYJTFfh5g8Lgm8ZwP3wHRWAbPUuWoyu8rp8kpnhPkYxrPWF7t6qxKkDPPzSuVgR9Bkx2yadDRXTWerhj",
  "key23": "JjvNkBCsgCx3Vicf41A9e6daUG6DmqmwVxqaUD4Emcj7ecv2A1s3pnEnKReu32YjFvwMiFN7EMUx1FLh1X6ff6W",
  "key24": "67TuHauMUafmNnCs1szgzmSwXfzQ7ZHH2E5bYKX5M9hb8cg2CNWbBDBRkz5sALsdMcoELCBvLccWUoByu5JpT8Zu",
  "key25": "4yJ9DSqrVHNqGr69wRDLJwUD23zniLJr5rYEWWtWfHTZgSoTQevNPYUSbN7RQ1cgQXK53Y3npfgLyfruuxMGrFii",
  "key26": "5UbXa8syhcEVKgUNWaWTyKSPdg5TFT4JYyJnWKivUwhkpQj5S2fvTdLJQcDsQtz28AifdLEW1y7fAJmogGsjPBUy",
  "key27": "3fGtN8ypPPcE8XGZWJBN6C5AQpoL5o88AkHWkWBtWUL1mYp8WmvADXHHcMWtUMUcXD7725XLi1TRaEEB9eLn8sxf",
  "key28": "3CH9g1RyP3RxT31XugFLYRzEtPCDxJHRvHrLBtR3nv14hSeYbN6uC7b4QrqFw7JxCFYRkyKoGank6FpH51wXWvgp",
  "key29": "2XinvFJStwoAkPCgs3LsNd5ZKcKnghVoKDTSyGmzssRCjLCkEmSRjpQxwSNYYBYU4usSJkjBYbh7i8an4h5qFFf5",
  "key30": "4G4aMxHedCcc13SLsn5pg7pBo9hLPuBeY75ZU85A4MpqZR5dFQJTACkN9DW4KR3udvuiPpWcmfjEYtkzgoLsRZW",
  "key31": "5VmVhmZZKWp83kPJyfss5DVpHy8v2LEbjcC2h5ZvZ7ahEToShCWFrpwwHoNShseXSbsHHfLUSx35E1mTm4s7NkTB",
  "key32": "z4HrNRJBJ145CREbpDEABkMdkLqMFsUJpTqsozFTkeibcyU6AN8cvAxHafjD9sN47rmG1mChe9kgPWFWqmbKwfh",
  "key33": "3UmQefnCTHv7nzp42m9FCzt2rvfimrzFkEdS3YNHQKB3EFfqwpge5pPtsDSgzRh3zwa3WC8CvWMKgLVLTcvRRqEP",
  "key34": "dXpGTbo3hyUaHqazrU2d8uopmUAMexmzAQ8dML519F17VWnFxArEoBjabBgxEBFf4U56od8DVAGWaBT2Qx1bm45",
  "key35": "4UN9YZmbNrWa8rx81PvCc8Lmg63nSiAgepZHpAcZPbJNwb3Jji6MnG2o5by6kLbJ4pa53QGbQBHG9KALvN1DrgQ5",
  "key36": "2bxQYGxQCaf25b6JsMWxvGwpytgCU35q2XRHq7TemP8cPbYFURiaQe2HhB9KrGTasDD4eSznWfCS9YS4MPo2p3Uy",
  "key37": "56i82t8kbymoMacSX8DuxUQUWPvtda2EAzxejoaGNNCdFyU3ZprTwpJc1kc6jyWW7nSTa22Jsn6aE1yBN4wQeEMq",
  "key38": "4M8WCP5CXq7aPA3vQ8ru9PqCs1wctF4EfPAcTawYiGqBBxX7mPKf5SiL2AR9LUS7rMNEzxiHm48NPzp9LoKdjLpm",
  "key39": "2qYhTSHi3QZxuVrniEvMAxTD4xYz8THQZYQnVuzWrUnqkQFBDoSZCh5q5kHAYwFMmnPvP439Vv9XpTMBYFMCYjKn",
  "key40": "2zUKpvdZzibRZP937T2AxZT6GEMAVv7EP3S6syETk6sKPa6vYUPt7GvMYLDYdmyhCG1aW9CTSATrje6fmRAtgaK4",
  "key41": "5ZuWr6oPiw1Tn7Ac5rRzDU5bbA1mArwgkafAeqRndPGM83j1rBZAfA9d1zonA6VAkhPba8qU44q1ar1xwajDcb16"
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
