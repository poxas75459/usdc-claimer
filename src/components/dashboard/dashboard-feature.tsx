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
    "2ucfiE8v959DKWeAC1AccsZ3hWtB2mD3awPNrefNfmcH1QaiZVBGtos4wRCt8zeHx1PDRyWqhtxRCLue7gfNHRMy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22Gqy9rqQuFU9nVXTf25yxg4iBJj1Bxjir2dRjc1MhMGchvPDGPacC6asC3yRJ1ZFLcXBf5BeXfnSGpDZq4VrfzW",
  "key1": "5CUTqPH1Xr41qYYfmeSkRqgENdxK18TSRnGXFDdidwYxmqrKrW53CfgEV4JD9FWRp1sAh7j1BwEPhRMkomWP4XKs",
  "key2": "3qMTCZEFbFoRit6LENBd3RceJD6YGosgLq5RDKvXgk4RCWR5MSAd655ZzDofnWCMVX9dwgcdxTTFW2ebGhFX3jqN",
  "key3": "2ZaFKAyiu4eowCfERExSBY4abQS2V5X23SbGXbBMxFXd5gQeGQ6t1sn7zi1EJz4jP4gZiRJPoTLAZ5bJGBdSPRxf",
  "key4": "42UuJY5sNPjJRKjftvU78smBJWxffYx5CFRaF2DPNWnoDVtSxqXwG3o3caW3Z1e9WzTSm1nPG4DGZZ3M3ihsWi7k",
  "key5": "3BhKhakrQVwc7ZY8VH2o5WQMsmhAYd6afk7YkYpMvCuYa5NewrttZA82YAqrRtLZvwyjtMqu1EVxvqHnKQtAePhi",
  "key6": "2fpn4cTjQXxYXbEyb12h1w4RUsb8zxMsASsmRHHRQJWhsJRmabYyeGDWhK3Mvp4L698HQZaMLLk1QfPDYM6M5p5E",
  "key7": "2oBoXQKLkSouwimxmLeXeraxyf3u7F9HaJqh2vRVbGvd8BQVEq9ZHF7pVKBSXuEy66aSfymqVrkiY7qR8Rb56DGk",
  "key8": "3M9eJqZmaJCjXrrCJDMfGiVNoh6Gp36cV3sFbqccEdjq3DcwVzneGoxFqCX3jXRy2vLV1cFVcp8LjpihSaeyTMjB",
  "key9": "4LAmv9ocPt9g6zWMFN8vegJewTT96GEDonc15sLi4N9R6TzFR69dNxfjVVU1Sv7ZNv8nZgGW3kbKgES9ebt6qtfc",
  "key10": "deWMFVDfQ7x9DuUSevvSnWWgocgii15us6DEcw8tYR5SLiBkcES4XrFjzoPEymawRfowzHsVC5wEhwCe8n8xth3",
  "key11": "42p3SXqV5p9e9nTF5kNnV2EGxrRENVHdcbugFqLkAs51kFEUCYFweWQW8LDFRrPQk2nNg6814KjChzxDmz6dJCFr",
  "key12": "5osnLkr146d3AL6tFnB12ja662V5mEX7Y3V3pGHXYWeMKyhjiiNA7KVZ6PRk18qg2t4cXhBcT1dmaC8oJyCT2Mu3",
  "key13": "67neFMaKbG8qYcunUS622xHhm8QYgeAsMbESVspYQdDwPLZdo1awQmELUF4BQU5C5r9wrPe3cg9hAQVmTvrZgc1b",
  "key14": "2pS7WAcQBYhuF5rVRt4AtiNHQN73Qur2kxN8h5y7e7jbqGdsKyEvKj4KZ1takKAtnMeq8Qvnbvw1kig2MWcNbz23",
  "key15": "215dgp44q7qEjsCsmqA8mHAkEw4czVaBdhRoggzAqpzUFvcd9EqoXnVHpzmhEcSdRjNsw4LVcf8FskwiwwuuKnZG",
  "key16": "25HbgJzgBLgYBEXQqEwm3ayQ3vTYVtzg8UA27oYSLwg2RrZucDsSgAtw693mtspm4b7J3z1TJWxWx3gjdYdBVsFu",
  "key17": "4b1fPR8TXF7dHZ26gfe2QK53EXCfVr6juAbjTRsZYaAAVZ5QAw8yTCF3aS9Stqd8GbfnFCUVGtM9cQZzDyEaPQgj",
  "key18": "5seziTpDs4oF15QYQq5hBd4Q9WnMCTHo9c7HNBpByo5CpPxiYyFXGrUJ9bhuzFR4FakGqt8z1R6VBPT2Q4ShzMwS",
  "key19": "2LgtEEred7JMpqYfw4YxeEXVzjhDL8xk4CXxJyiMWx7Qo5SnVhMgQ82hXTtRsYDoh4okTreGmYYZq9cYsvCzbvWM",
  "key20": "wJ5nSjPCAq4VDVF6H6HJf1ysxpps7URtvbb8M2wx7ifYWrixUB8zL9c8nEbP2FNo6DFWQB4RTXWxZ9EvoqpoL82",
  "key21": "5vj1fRmFF9T65fLjBM9RgwFvTrFEPe3uAg1bfLSut453s1uAguP2tarJV6nF9edUZtZXMka7xaAA56xP2m1aC1bK",
  "key22": "5cPK46SVcaPoANg2MbWpNmQBYi5mC1qbNpMqbAW5JqjLUh5G7xY4eWMgFmCefKKSffmujV5bqbubLxfQhXqP62SD",
  "key23": "45xCeinxApdteMNNiomuF47UkrroH9gK8bJLBb7fku6pgc75odyRGmCCAWeo4RWZgVePbi7bkz4zV6R4k2kxceZB",
  "key24": "c81QWyWVrw8Fks2ercfFH6srrjm9RnXq3D7CKL2qDELZpYVuVa8e3iuycoKUnLgvPapWD96PD9fvHEygDTbgP5p",
  "key25": "Bc1u6BeDfsZWHGcWmsnYCK4HNTyeq2TwP1i2huGvB6SEYJJaLp5wX8jWSion5EPua7ubgLwJZSnHBoTn1RNT3r6",
  "key26": "2Kw17Yo9v8og77P6QCHnURHT7boUbuZJVSTkb4UXajUUB7ApuPHYDz5P4r368e9vacwEZECeDorMSrn6p7E3mJkr",
  "key27": "nqRoZszg9pYR6PgRjkpu6FYCj8kGZQgwq168bFemLu2j9S7xfkG6uu1ZPvXoDhgF8btKkHK4q9JX7uyBwuPSBmy",
  "key28": "4UZzk6aK7KZU57p6GWMRs1t8dhV86Wq8MaFR8hACJjsLNH33aiamwkpx7MgJ15DCAXNBJT4pZjrA8QnJjnYghMmo",
  "key29": "2GHPGFdC64q6va1LNip2Q7qkNawSNzcmuxxnXh8XhNCUPbo6EXE9d8Aj6346FjwRFbySx4MKw5mEuJ6ZuVC3Feh",
  "key30": "3tYgPAFxEg8NgTCvtf7NKvMCgHQ7uSrS6hHGCmYEmzMXbZTsvQCdMpisWQQojqgScQU9ooSGNXdApDGNbrrQmfXv",
  "key31": "3RSt98ELG95S6FR4fi6ynEmH74btNdRRbSidSADBPiJwk9sAPuYcbFB25C9PU29YztH9sJNSxQFLKKd5VPqxuCbg",
  "key32": "488ij7Jx6NeKw9Hwwqx6BvgF6hBUGEmFqSywfXNewkoySuwy1jWH9Eoi178LL3hf6HtWMagDAyBFM2ErD2rov7Wg",
  "key33": "4wdMeFEqtBe8dWbJ9uH2hGD8Hi4uDG9fzYz4jWaWAR1Ej5zviVz2s3dn1RXqsVMKvsNjRDTWrbT5pfdX6e7LgqLj",
  "key34": "4HXh7sjqpkBcrXmAUjy3Nq7J1Dpv2KsTkTHAzgGAHUVZpFsVbnGxth1A4GTTzFBckfAfdU4MfPLdmysdkhFrgdjG",
  "key35": "4i3iYj5ETDj3q2XtfcVdbgytHiNvB1ifSbLgKK6tyJGc6u1BYVMXqHAcTSqk4Wqpsvn6GNZrVcN4eS8fdsuheNXW",
  "key36": "3w4Y1amK6Rng6G8jPofdPtjkNYQnfCvwd9WXjMVQL6tLFfdfed2taixGyopj4tttXUTTwfrxbjcHzsCTmH42viJP",
  "key37": "nCMBkBdHouJ8ZFj2m5Znj5sP4F4Zx1o5DXjh64xGwhb5raeYayuZiZMhj68Tnok9AjFAdDpqYFjjiZSQaS66MMr",
  "key38": "5Utm9R91VY83s9G6w76iSXkxSgq32qZr2XBK7g9KTkpW6VNC5U3U8QnUHugWLx6Hj1hPN1F3uTVbBke5pYJSwzVV",
  "key39": "64Eu3XWbdb53Z8r9mfumek7fWKjDwMkvxxUyDCpqHfcANrXqGHxDrvn75Vcj64gkwGiErfBPgJ4kB1eW8SSkCp1S",
  "key40": "62b4ooAPkKducEVzCq9zXRP2xgTM5QwUydRcTZoHJ2wam8UhDJRYBUviNUxJfBhYmd6V444L5GPYhGXLWEimWUHX",
  "key41": "32ethcHXfK7bExVNY52PDMmo76BZe2ihoaY73ZNJUGzZEgUxeWYrYrDCnCme8kQN8ZK5PSpj5gdTyngqY7dRS1Jd",
  "key42": "4mfe7Fe2DALRRde624qJ4jU2hk9fZpyPR3quAFTu1obLDoMEDeh5DNFiUmJtb1qGX4xa4Ak6wEegRf8NWcFSxZxT",
  "key43": "4tTmcHKGevzWXY4YcTCEPe9RKdumm3VZAhgaTJC7PvtAGbXSXpREbGR4vt9cTB3HoDadfJJsuLFYzqDX6pgwkPTt",
  "key44": "2H5Dh9S3DwnE6CT3944w4uCSeiG3MAVNe1Sqapc2HXip1wveACqWdzCNsSvJULMwKXxzzr9fnYusM2WuCDMd2ptc",
  "key45": "65oVpR9ZzpTXJptfpTU3q1bhahhgmzmvDEEo8CuWwgrjfJ9FFPCwsk288b9ckg3sHhL2aYYsavYFF2wLQi3XBLwz",
  "key46": "3yQXxaznLm899Nhjo59Uq7hL25mUAS5fmbEystRr4qsLrE7fVtyvNG3tNRjkkSbhV7Qk6tRKhVSaB7uvQawUoJXR"
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
