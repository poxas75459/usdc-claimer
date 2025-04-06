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
    "56kZqUbS1ZmuBjgMk17tUAnUUVNCJxbpKdWBvGgzKFZKMBBJaKD11zaarhwBpBeGAbmqVaYdfHa5WfHSFBY2LrCg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61sY7p6dHXdB1QSjjKyZVmpKaWadQ7twze5vc7xt7cqznZsWPW8DnGpQKbzr3BZ3Zf6ngCWmjTAcD9vVPi7UcY95",
  "key1": "2vL3P4Si2tBXaXzSpUrUtWEH6TXhK9S4dsyrCj7C3gvjFFGUnMQPag5uRPQ3dK9ANMkwHH8jg5vxDmEHy4zMVGhR",
  "key2": "3kRoDANXtHrK8SmU5ohd674BTxHuDfoLAoFFubYW3KUD83fx4Bjser7w9gmLnJQpbV4VSVoXZkZv681KHTbK96b4",
  "key3": "3gd9eNsdEXBxJWufaBbAFs2YxUap3s6f7RyLMaUUFhYi8rrbMLDDZemjrZj1FNKKquiA63o8jGH7r2zWbVZ6GE9K",
  "key4": "3Fz8yVu1ov9GWsoCk2JLMLRRhpBFmFv7avGCmSVj3pGxSWbSQLL3rxsTqtyygqhMv7TUm5KfBh9jDKpcgurNgWp8",
  "key5": "4ikBk4pmxJZTo1av3prY2VFsC1mxrMt1WfeHtHAkZuGE5nFSMqpzn7ZjVydoDToMxVPezmCcmqWCxMTvT3n4XABv",
  "key6": "2kWJ1u5DSpmzW65s6FxdAMZkxhf3CbShwirNvMcUfnP4zHF57TQUyCxaDTr7UqRoayBkYSZAsNiGjUc1hddzDN81",
  "key7": "4bVLrd14aHzboNKgpoB4UdFQAwzDG6L8ttJQKhBeGGQ48FrtnXH6MotFW8sFTkkj6pxEkWH5ZmMfLoJrnH12ZMDw",
  "key8": "4yvRcxvpPpZo2VLcYcmUGamEhXGQvJt6tmg3797XMaHD8VTr7iNj5bMy6npuKYqgjsELnbkG53XM8795x8skoZ5A",
  "key9": "3nZTFmr34eyPcsUYtP5vmSELW6L1W6CnAvABz5GrxSowp3CczBUwcpaXAmWUdZroxuMDiiYkXajP3iHLLTP1dFzm",
  "key10": "5MjvuN34PBc29ra73p223NqrwZVQTD7Y35xayrbXgMVTQwKNX2k2VeUpsorq4kS2aBZtNSywnBaVEWHcMrqn1swR",
  "key11": "5uUWAVQnPs41Zr45eVFSe31TmAzpgUmFqvPU9TXfNS6hL6QaktKbjRpJCT7hYv6uVMtupHaU1uCUt33dnFjTqmnf",
  "key12": "8ZbMWwzmT9kVDvQf4QN22KerARgPXRoDbsvZuVnR6HhA2ZyHuTkuxoY89fXd5zQ5HSp5FEHjCF2HTEZk4SdUqbN",
  "key13": "5rkvjtkmZmcatos8HWQLBEv9WRjZCAFkkbtdjdtDFYiimiMbb5v3vMftaQHCY6EKU8YbbxnqCiyRqJvfeNsyzXWe",
  "key14": "pkWGM5A7n4J6cLWsBW3jYDd4E9NB9mfxsSJV5piuLDF43oXNGHngXRkRojcoGtcJjPt1C4BtMoexKocFyVHKLaJ",
  "key15": "4mjuyBtU1JHy7kyU3wnHe1pGEZw6TYPQPuGqY46DCq8WvqnGF2fLVTCGrZ32JeyQGrXwd2JmCx2e8bYxmzPsCdih",
  "key16": "5197iiueU8KmdUQVtMkh6dC99aaXGu97z6A8x6aMjArd8kCZvxZR6FNoJVU7BRNWaVpjtLDExznnZq1EwUrNkwwW",
  "key17": "4zdU4xVYewPVhaG8sbpVdZNSVvtSvCHRY7955f9kQFkdwzabYqEqnSEKp48ugKpHoWQywKogg6cAMEXC5s4xtJ7X",
  "key18": "2DthCDhUPYwHPQfWwHEVcQBzvp1uCD5bdroucMfAFruwtmnyc9iC9e5QykEAfps5c7saEjQVgYjj2dKsAp73H8tw",
  "key19": "5qiapiAeQvSATwW6CscTjA49cRYyv4LBo19sKEWgXRzQLiM8MUk7sWXh2MjaUaizZaqC37FmhGX8Lerd721Aq8T3",
  "key20": "4EnQprZrzmPLaJp311vQTJcgjFJU8QD29RoZyPqtwZiSvf5nB4uqQZLUkm6kqBqR7NioX5iqVAdCVstSUztBBgXU",
  "key21": "3j5zBDqri6w4qrTLKzVwhPE2tuX6HdHEMCpThpL8i3A4o9TxB1HmYK6P6QSJptUnG9GaUUyTnnnSFbQP8Q5vEpTd",
  "key22": "2ohzKtAR8TNCWVNR2PP6qTo7h7zBB7ePf4tdyPgMSQXCDpuC3ZwVZUWVa88EffKtYkFcsF7643Rudyw7wfF6vooy",
  "key23": "23BD5wXGE1HNPVdPpHWzpmuxqoCdziJZqzSc2GhmoDUz4xDojPicBquKqfiKknCeMgfhBCEkqNKvXa34mwWv1f7o",
  "key24": "2gTRBxYh9RQ8cubBUQyBNvJQC2jrUVxfJ8FgBtwHjyxo4wMJKarKP9ShH9QtxD8PtfFfK5XnyX4UVbKizGUEcKi3",
  "key25": "48CvA8gaVm9DjKQP1F7276bppHjKGmPyEtWLL4g5wgN5hhL9xohCggQQQPpY3CZENTcNj3tkn72M4CE5Na1kPXy6",
  "key26": "22aJZmH7Pc4bGSpJVgkUVhWia883nAPFV1QGv66GLUcCyqKYfPe2GzrhrGEX9EN7w5b8oQrPGSY6JBkSx2d1mDcx",
  "key27": "62ac6qAeoDG89bxcBzV8MympeywUKRBbeQwDjxSUzNyNpN4nruqwhHSa1QKXKeov62FEZt22wPXqVRUXDbm5s6mX",
  "key28": "3ScdRgs2MpomaxzzmG1sRzDCKppyDaLPTydrRMdYD5rM4TfUDWDFKp2tTsRLtvMDky1BypePqgrCmn61b7BVZf9F",
  "key29": "G8iUdvYnjDGi1xxySm2BFRmKjyA9p8CZ9zDtcDFbn6iEbLSJuGpDtYd5ggxysssAEtdjEvLEZpCyRBeEbkKFf9G",
  "key30": "3yWSqHXAthfZJzveuemUY9bSRT8Mqd2xRwaPfuhVzuU6KMyu8euaBGCjajgjpfMgNDoVKBkMimRDhz237SVHDhye",
  "key31": "2fXAPCUAdcdgZMFK5daXJvyhoC386eU5AVauy65KKrp1RZH5jvf1orzEyfKe9B35HAu6ookK2ryL94DTCXcZLsvs",
  "key32": "67QgGQQKXp6BCKEZ7MioUqQZhww6hwCdUrBbkZqcVTpDNrBMFYXaiiDKkLJkDChm9hhEika6fb2nFYMvskpDyBw8",
  "key33": "x3XnWSBT8D5MZcBuKDFH8kNfQWwCoHF1Ljs5efTB5uRiVrEVmdUxKKaLRM4ZS3CzznBmeSb27W41aJ67Ffem2QQ",
  "key34": "4C7e3wCN6pfUWDV7QeAhaZPkNmYv37WTuFKrVt666KxvXh2RrBYFssEobuZ4g6uz6vXsJgYmMQ7KoBES3u1BUAP",
  "key35": "3AofdjQ9fiMGuEvT7mo9yRRJnwHNMxac5EC1qtTv8FV4P5dq5HfEEyiP4LJe5R4FpkiWgn2ivhdZi6QGUnQ3uBim",
  "key36": "2yhLxhFk5tEhWi3sGS75HMtf85M3MgWYj26oDmgNLSpTf2XbNZ1ipjRkVsYQWDmJueF6CiZybWEGXGFoZwh3VZDH",
  "key37": "2tYp5jbu8YZC6GNoYxctRp8BEGx759gZZywK8Djz63ZvKaMp7N3SQdy8TvPvB1qzNuMkaYAQ7oTDn5MqVPb5bWbM",
  "key38": "2GA3RADJz6aeCz4Nt8hjheU4u812ZxWNLUhv6vVo4viiCQK53pVB9q2VHCi4jCfnBXDN8ixep5s3khciuyxD58kM",
  "key39": "xzBpFJjBmEird4nF7DFyk4EW5DuJWXE22cburzhYTRuApmppyKe3CrYSXEXeD7t6t87Pidz8va9MJbNDwbTpV3o",
  "key40": "2u6FCbgxs9DeTvGq8cgaLYDDHhjBMv9KDscMkQiSk7WptU7ateH9AGfFLbYcmDvzzvy5kk7EZ5s3JkZyjon53PS4"
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
