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
    "5cntRqEpdwzUKJot5n5gnUbTGSBMD26oKd8LvdN2aYzMuKPAkkcutJDsxXxD1SG5XXdHntapgUFWWHgV3Yb1byXS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BKXznay8sFRx36rgTfCbdYoUigJ5BBooceTuoSppm1T6KVX8Uc3AHavrTNfvUdDRA51Z4tVQk7UoLY4DmPs94g7",
  "key1": "U3PBhAnPAWTNxqnMCprhd7cf83UkXvFwLaS9DZWjvcjqdQh61CCxdUaCRgvaY5PJiFJAFkTQuRtM3K7v56KxDkE",
  "key2": "2NcDf6wsa3hvdcwemYosDXVc4hp1FBUzLnccz2rCNYzPFwjXzYpSfDWEPADiszftJUF73GcEQGzYLHTXYj2r8L4X",
  "key3": "62akc9aUF9sAj9MVYeYV27SikfRJMhQFeUH9Tgbd2dMXZV62Us32nXNtv8xAjtbhy5iqU62mm1cwhbi4duwvLzmk",
  "key4": "4YME5Quw5aHzYiEXf7mb5uxHdqSwVmGiusEZX7p6xW52W3pU8QXDxyYT1Wuvixpewe9EhtCSb2HFpmkFL1YA26mF",
  "key5": "z9QG18wbUpGtV2Anoj3GwHnd3iUqrirvcpg2J28WKknnEvgQDKtDjQQi536Gtm8WvaQ9Tiad8zbddbXwm7VDhXW",
  "key6": "2VFM4Cdf2UoXSykreURq5QK7g9LFcLgPporMwftVsZy12cVrpgvpm2KW357cgqTHNmnDrGi4DN55DeDCqtR4937E",
  "key7": "49wR973teSvYRZ4SdE4dYMT3bkD73Ps6mpFz8MFviHABXMci72CbyJSi3E7vwLXFYv4LewJUYKAVMRMqMeFVRjmR",
  "key8": "5rkjksEZP2qL98oFvXinrWrBTggLBPUyeMZw9PG2uTBkwu7SLnVuFQQPX8pfbB34kaJx51AUAJKSbwVLFmJ8eXJB",
  "key9": "5aSGXB7M14qbcQLN4Dm6k2vnHLh9HLbYsEvyMZcw21uCuD2oXmWDDN5U2KADWXKAuFDa29BLX1X6V5XSbA3Qvg6n",
  "key10": "2J12isKBY4Hfn9QToUtJBoRhn2sAWCWVCaPTTqsTQC24ydG4cUcmJEDZB2Ear1c246i5DiR7hBoziXWCutqg76Qb",
  "key11": "63cMjTChvYvLiR2mTnHPdX92JqP4YMgVfGx3VGZVjXV8bHaS9KJY3Gwfn4QRGrh2gH9ycXWyaBncB42V6xt93vVH",
  "key12": "3erKAygzYrrz4tjS8kRoHxYiKXmLCBR5nHLVkcwptoLBSdSuZwKpMMsng6xsPAJpBbReZMGEMC87YnwbhHRT7HHf",
  "key13": "5GToFsnd3aoVVHARTj3ndgxg4R57CPtJdLKX6ZjhsRr1yTnD8uzgBa916HtNGm9AU2haAW2aRjStMBGpuTqYRt5x",
  "key14": "2CyisY5gssDZuCrFpyE4YoXFfcjTaWiPg6vPkjeR5WKFpxPcgdWXZ3CKp2sQa8MX9TeSLqJfawmX4y26Yrdod5ZG",
  "key15": "2tedWaD4nekR2s7cjGp3uQ7tnm7TKrWLSPkwVPMkzbhtNCJdAuFRSZ7BQH84etH1aexirqgMg7dBe2ZPhrfBqWmh",
  "key16": "4d9kzDC88SuuFKjAQCHoVHsyjTqf9ERAhrhikzT2xnfjJbstiTtDhqe6boLWzhwfa7HzYz5RpVerT8j16mntd5mc",
  "key17": "5xkH6FyBMmKzZnMciXsZx8csY1JMn7uepV2e89yyoFuGu1qZnr3mGfpAidrkJMyNxQLyGyp5X3eevVLfuvtDZuC7",
  "key18": "3X4aWZ4KyCxPGDupSqC6y7EHtKKAaqUitsUWBoqqC5iVjVghvd6kCGqhxL6ZpSrhTH9hB1tieg9jPBBNrwkdfBeM",
  "key19": "41S9ExdjJxgr4h9RhSrz3to9PCdfVtxGvnTNpWyaLUWUHwoPjstimhErJ2WBDN2bt2B2msEdRGpBCRGNtbkGNXBJ",
  "key20": "3QTvoJaKBicysN7kWq48P67MD44Av4DPnFPne4vf8xGwG84uqM6kxJpRZBUPy2kjQUkCD981CvKhxkvrAaxmcWXp",
  "key21": "4ghpYn4vBiP2shmSRQ8M5tsNR8hXket3Y8Bzww7brSPEbxYh3movu7m1x216sYzTrF34eE1VCeeemCeKi67hy7W3",
  "key22": "4mPqGTCZzEG9e1svZnojy3HFyuy1WjGkhsZomqxWajF41TZVZqkdiqmzaggkknUhDzF5Vr5Pyv87WSf5TjhAAaMB",
  "key23": "4f7dAh6cD1JProx1Ncc97eW8tq6dE9HoJwpTecVBoNmPx5UWrYDdR7MkWdZBdez6dR7rKqDaQqZLRHmSvh6FHRbk",
  "key24": "2ZJMfzNvbMQJiLg7vqdCm8asbgK1rc8UqmXtaqe7hnU68yBeKox4vSQdLqD3UhxwrCpvEn2HUG2XAvQnxBLLWw2y",
  "key25": "5uG6BWfNkv44ep5WvgZqpGSUxzDS4c7dhjWtYJPunQ613c4LoHVRpSydEFjpUGr3GwY4Y6tcVLindnCNhU9awv3k",
  "key26": "3PEGwZWYLSnVAyvvqa9Qd8ps2uBKhc2jjPLL7X1X33wGAtjDJAFMHvB6v5g3EQo7EsSDXuK9miKACGLg33qdxQ4n",
  "key27": "3V54nu37V5ZKxTgf56XmBow4swwbWyYdBvxM2TnxsxksKuaRPri3utvGqiw9YTZgbnNhRJNj8HCDSFYv3nspmNfF",
  "key28": "zmh5WrXe3ngg2s5i4iRZhdFKdTeq1K8V92VTzBe7kk2eFz2y3St9SxTECMVhHgzp56AUfYSFxPYFGSTJNyL2G29",
  "key29": "k2oWHjQEr5WZaDVnqPdmgE7vx9J7TCPHG92VzrSHBMqxUvdb7kNqQCTP5qM4A7b81DR6jjbCvkpEwDV7qqT5fxF",
  "key30": "5AJpkYrqkrh8sxtS631t9PUvJfbDRJzCNKA9RBzpusBjdvZ7sYzop5bnCGekyT3VY72PzcGTfvfDkP1bocy5yLPV",
  "key31": "65R1vjCjLsK9ZxwFEgL8hPAWF9cwWoCULxMnFNvqxXfUi5fMnUCTUWz5dWcQFjdHR1hubeawMKvxLK9jeTSfimEB",
  "key32": "62SfjPnCM7rrRik7NDjF91ur5o9D6U1TYdP8m8vusNYBaEwNgLqMbVu3SxeE5Gi4jK1zyUeRtoPasDnvrCx1rX7n",
  "key33": "2jtMjTvRbTkubS5FXSmyuCrtxpa491mZ1UWbnKqYp24xm5ekfnkQoY43xYTcoGyeuAHasZMc3Cwes5pEy7dQP3oQ",
  "key34": "79gBPdBwgMYNphJWaaRAkj1nf2k5mxggERTBAoCMMUiPTJ1MVUM5fJ5GtuYwrSwNrtC6gciMzJ5Y5L5hh8LHAVN",
  "key35": "wzSE75QbSHGjVoFN2i57qD8YX6osN7Na241b59RcBjmQkSXrS1iWe6fH1Kg9wqFK1bBLLworGGgMtmzLZZbJwm9",
  "key36": "33D5K8F4jiSZVBZftdUKn3QfzWxBBtJw4a9a9CZgZErvo9CeTQksc4u6U5SDNvLL3vJZ5wsGV6ktcuZwZxWiCPZi",
  "key37": "3S4H9N3h3eVVeuHW8vSkJfNmAazPxjhDmG9NEYpUNCDsXQJhxgKS61FPoMNk4uNfZSG4FXW4FBwjsHH2QR6ZCPkT",
  "key38": "41cvKxSvUsDxYkaS6YoDZnVLbaujgq8n2PXHLXkoNirUo1m7oyRiZ39AMZyE6GEHNwR4E6z1Wq6LkNCxWYWbNULt",
  "key39": "3jtnh8WvGfKYg4GvvmzHhskCZbvQetYL2LBcDdN95jFUfJhAq5iyroYA1rGKjyX8DZUjvmr1nDJ3BgAS8LGoWUGU",
  "key40": "2jE7DweS7aN1Voc3tKUjXPAmAfi5gXyaJNRGM2cPGybkaDdcNFYyNqTVrZMu1LKcuEn6Ubo6G68GnJTdMdXhshJ4"
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
