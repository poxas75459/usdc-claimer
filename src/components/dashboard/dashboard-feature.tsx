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
    "Lmv5KF1oZf6MSokM42CA5txWVowW1XoVMzah91HgfXmUemZ7hR91E16G5mD3VPx6u2SS9iSfsWbZtfnLwzhuJR5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Y36G96pBgcb5YbAcvvMcBd8WYcxjdcaL4rM4CmU5WrSDV6XnRnjGZfL6zz5HUXh6wKp7uWRZUinWFUgJsk1cY5s",
  "key1": "33pg5qzfX6XKLNyi6LyUndKnZSG871GwMhedodPhUVS8mTeUmS2XJ3yrxiykHkqM7JuhKMP5inTGABo92H7MLAeW",
  "key2": "29pbqp9BvGPeoyaPZi1ht6Jnw5b4ZY6ao931VvaZA9MNqVp9QeyoPTC8y7etBrTS5BRwi1KTfc2yzZpAxTXVT7G9",
  "key3": "o7LpevzoQB2MTgKFT1ynqWeC6zgoMAiuBvHvqsnTevQihPcSFycimPsNVJg7qDDQG5eSgTFcTJfnTHZXpfbDRKx",
  "key4": "5Dz3hr4uDV3WwMWHzd85tTYpaFFnpcFLdVK4Tf3GEXm98Fq2y8NwV9sMnvPjvWuCidWDDVcSeo9Dj7aJxAQ7zdyg",
  "key5": "xTchA1TXAQdLLXxbiKxrMj3VqQbBhbPFhYJa7NHsA67SHaj4GEyJdDuQnmWeFddcapAbHCpLLscHhVPNSaDnnYz",
  "key6": "4brJRMBkhv4WWJN8zMkr1fQjqX88AAj9MbSHR3zPHHZA7PP2BFXKMWaSRHrXCVs8CKoBeZJDac3jFXfibgwYxXtf",
  "key7": "4zMZ1hDei5adwZTMqeUqgozMp4WTBaWUrc7MWaYeWkDahZmvRGj8NBePRCqdCVTcjBSnd89rwGQj4Jys5tJVEHMy",
  "key8": "4CEGbZz41Y1TVvKHXd3VpDLJ4ZT2qLFtuHqE6SVngBmEefHu2WmPKL4ibRgstLQWCEtESoZ55GPuyJDFrQwFJ72o",
  "key9": "8QvqX7pmGx3B2Rakn1hFN9sJHDRdKXPuQdtT8DmJX3DP8aGYEoNX9XSkZdJWGLZqN9VJH77KaoZAoJZdj1HivNM",
  "key10": "56xhSiQhiJSFSZLdURmTPpNQHvXumBjAUpwvw4DuYLxsCXih8yk8isyk9zotFs5EoaMCkuuKkeN1nkj4SxNLjGmT",
  "key11": "gKnjg1ruuRw926Ym73Mxx4gPgJeFvTH7c2eCbAz8HprJHyDqyHPVdnLqvZq1ZT6mJB5fJCbaMQwoqBL2knA87ja",
  "key12": "4exj7wzw6C17EiFbeq5jcEHYjx8Yo8q65uW4XR2GsayYrgeCZsubmfZuDxZi32gDCnXd7i9hFbR4PqDUecKXgpAf",
  "key13": "45E8ZD1gCzvyGrSLLrHej16jHcjgyRwcSTVhDDM2KYwtMwVZEkJZhuABvZsjpedFdmQKya6w1kgTmA6Nz3LAZfky",
  "key14": "5ri3EZTAMpZVbpLjF1aEQKvMG4Mfkt73zCGKiKaqjvcwNCATG28KfWLeU5QcAnbgVSmkVPEXbsVcpiZtoSMT7E5R",
  "key15": "5e1XkhdSGjhyz4RX7XFjxYxZM2etzikbcaRXaQG8QuE5iCoKAf2kjscUdSrQKwFZ264fu77E3mhgagDFMBt9CwBk",
  "key16": "3dtSTPKmMH6hHMTimmMTWT7FiuWrDn4h7tHnr2GgNmfu6MiuewLy6mBA7W7GRMt33BtkdsnJu9GrBA4hmyhtSqtp",
  "key17": "3B553Zc1Aut7955pgTWpgds6VQoNSgzQaZSsjmVJUC1S4kiAvTrxhysG7WANS54p89oVqAmUNKascWf9iLgGpwDS",
  "key18": "2UKkU27FBDQvvzNgJZUugN31VXkPz9hLx9mA8DwDJ8vm6WkgDxjwEjJStgkGdsF32yrPyfPbkbixPKvoTsmb9RpD",
  "key19": "4mmuhoQJVRFXLJSag1R17zhNiSknyQ96Ki9zawX5oZdZzmbnpHs698osmJ31u9ggyMmcZkCzSGRKGYUhtFuaHR7c",
  "key20": "4s5YmSE3d8ahg7i3XHoJVQF3N94CnQnbrhZThss7neHwyV62BdGccCW8XPU8ZAuAyWjN8WR3vEkWDBY2WUMRjSqP",
  "key21": "4QdL3inPotd7MM16o97yBbjGUbkSVfX6MSSE5LWYB8cEawLYgDH6cT7ftwJBKbb925AbzWaj1obDfCSFDHb15uB",
  "key22": "5dwAxjepoAmQByYfUPfAuNeHdFGCKy1rcM1BnTKb94Ye6JZhtTRxUT4nUMwMMAW4fiexuu2BQsivf6LwqgCM7iQS",
  "key23": "57xTR2jdYw33tFF8QdU2CMB17AVjPYWFvRWzyKx8Dn9Buu6BfnQs4xrV4iH5LMY6jXdjgcsLutiJ92cZxW2XSiBe",
  "key24": "Dn3zgJK8sqqM82FApERu5Uv9Umr5ZyN3h4zDBwrG5j6frEnjfzZGP8NsTgsCEiSF85bY3PiS4tuYDcmyTL5rGQq",
  "key25": "22a8a8cygGqS8Dv676SaohrdhCqQzvfdRGesd3QsnDf8zyanSM9RVLWTwYTtcbM8dVWt3ePEj9uyoTaUmGTi1qC4",
  "key26": "39LA29b1Bdp3DXsQrpS6JEfLB5T1bNLnCAXctPxLVxh2NddvWiiFtARV34sBpM48DteAwUDrPQ3gX2E3VrjKnWdH",
  "key27": "3c9BTbSPrW97qJ5sU2ArzPbYSiA439gcED3GjxK6vWnEcdhArNRKq6tHGYWxUSThAJhSrQUKLRUAmrbLSGs5Bxec",
  "key28": "5Ur1nvyVUEkWS8aR497bA7QXk4iMWMMY9LcYiizGN8bk6pZkpYpFYKf79K3yFHG6U8Hpy3TTz1Xd9FVNqdGcyBCa",
  "key29": "TXn9L35CvdLzpc2TCDVWWDRRjbYSBqS8p2epvRj2B3Rdo356svE3QurHnDm2QSCbxo54e6XM81CXBqpyPhj4LzG",
  "key30": "391GhEAFTVxeXPBV1LSzvUuVMerE1kbHx3vwPP5uvt186o7EjDkCd42wv5tCvPmSGKEPfFBGL3maXcrLX1PoGGdH",
  "key31": "5Zwxfp3aCdJnLNGFLWjo4pDPQtm2RacGMhv1LjM9Xse6R7se9FK17gskfqCtowNp99sL2pHu9t9BLdpJMvvRDRft",
  "key32": "2qyfQUCa4qMqtxbLrN7oug8tqZgqDuKF15qAw29rGGKAbc6gZk4fVUNsHpReZP1GaykkDDgna2gKGkmmUt8K3mSk",
  "key33": "iuQGQXvSczhN5U4WQyniQmrAo6W9KrsneWX1B8svWL6afDhd6ydDZAhtLcHuD86q9CpFWCdaRyJsYM7Zjvv4juU",
  "key34": "2PevVn7mWPPwpB9b33JAguhAzyDrb7qMKVu53khJq3RZn1nmrP3suCYuSBvx5LHeqoDjo45Gaf799tF8yfZK9xQA",
  "key35": "fdYSaoZkt1EVCTdqPgMfGnoS5phUkE5SEsn7S76qFCpoj8XcQ9HyAKtBSbbPsroGHMKzyMPBRPN8tiUHCrjBjaR",
  "key36": "5M34hErGzXvMByNoweSuuEd3hqgoCdKTYx2Djj4zRmWkxVHx5QpfkXuPakNZ7Lf25q6q2uNZPtncX597EYc3WUZK",
  "key37": "4ctiQv6GekW3d2XMkZy5LevjjRY4oQ3rVaF92eBbCXVodtB7LrARdf2sSJTcxRNFQFghvioMMuG2UuL56qNMnv34",
  "key38": "2vNPuNE6jvBdczfu125YM3EHESpoWWS9oxUqAVDBW7J7NKAfgodWVotfSTK3z1L6E8HF9c5y3iQvMeKQRMTDtxsH",
  "key39": "4KubYC859T3KZF5QQzkvE59996sq7sA1k2ZeiK8AkjuxhDPsx3c3ThScQjX6sScd3BSzdokPm2K6cg1PYF3VKhut",
  "key40": "4AsHTsHWj9trvUzFBpguUz57hERHGnTosD9MshVnuMQVKqBCqkfC2gEWwZ4H5Bwgt73G156Z5fqQZr4Qdtz93Lyi",
  "key41": "4PSgEAycCwkNLMzRPE23a8NRPyRH7y1XVSDDBRJdofdr4RBxvwRemcfKfoQfguXJREmRgnH3JxAgTQSPMmGKAEY8",
  "key42": "4C1ELYYwQig9fg3uL33bUjHP7Nf11VrgZUFj8A7SSAPkAAQ6nJmyR569z9eZyPPXpvTQ4uK3mBPEEWCR3gXkSDzx",
  "key43": "V4Pbk1ZELEpsJYjynd1cVpsR3XsgmdDTg9pL31WLbwEQnUkkvhfz5T6Y9vQwDbeW4RZNKj2xvi8Yu1hP2KwLpWH",
  "key44": "KLK1d8EepvWsfeuGkZZ6qsikYkDgUsHYcKZAe7zDnCVvdK97mYVVeuGiC8qMCsjAxaD5r1ZRFNw5N8aEPao4WRg",
  "key45": "2eGVEzbn5yRHo3tQ8TAWsLvC8JuByU8Ttxt85eDv9UmYC2ooETkgj4zrSCayLYGZ9xGRFKYYR4qtxuR4ys62SUfh",
  "key46": "4hidhGw7efygofJQ7DWfNbYqSXF89P4exRbin7u7UZp8sEcLWhhMSQi73UivcnY4XkTHT76fjLFaJ4CZUV1WEXcs",
  "key47": "5auNbmfkRfdhRX2UNBs95exn5gR9gJWTfwgijMXBkx5i33A294jMHbZs5VGBYNDrPp3T6P3JPVU5nG4JVxtffAz7",
  "key48": "66aqWqCg1sQfefbf19zPdsUdWy9ECr4C9xs5kQWqZNEdkABK9sME7e8NnqUfS8nmWMAKzfKUuDADDLhZGjJczVpp"
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
