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
    "62qPaPkgg5KSKB66kcwVy66q2LqVQZt9WccbUXhhr1w89hWxZKCmSH1H1tB4HspjEeWyExgRWVqyUTM1q3Qg1xUF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jYngB1BKywV4aaSWNQkKMCXbdJfcFkjQidsvveK5ve4fZkncLwaMc81tTyRtRGWsBqHdcsNCimb7pr8Gsj9o1Tm",
  "key1": "57JdSZB3NniNK6aN5RPsia2UFdnoVUMBwnHtwuuabH8Mti9eHhCgCU8Qjn6R996Aat9rZy3C9s461fPiZy8bKvuf",
  "key2": "2gY5Zr59GcGVH6zgtw95i7BBuNBv9tc5ZSHra2B8u37ya8MkRarnuXjdSgA3ZpQVochzfAAZjyBzGRQRrbgLuzLs",
  "key3": "unFQh6V4qhFJ3W6Vu5DRfu3Vud7eBtep3fkG4mbjwgdiFiHmRM6gZNQpQemSbDpnFY2eqTQZwPGNs9T8hgKKpGw",
  "key4": "543B1ESA9VkdKCw3EUbm6PJcTWwWkQdYnFiTtArnvJq8ucDK1RabvanPtyDAik7YhjBUwonq8BD5enq732JSR5pB",
  "key5": "ghHEHVxbjpxPpbWH1abYw2AHbLGFn6R3VAz452qPkyp2kqWMbtN3feTaDxZYJhjmLV5MS3H3zKVjM6SfCGEoScp",
  "key6": "cADvypSSmkUdcZYNE3e9RaUb3ms9DJEc876JnR6BD4kTf7qjzVH5sRiJoRkBRiJVo36U7zJXEP3ApbPPZVACSt4",
  "key7": "WHQ7xzHa4may4Egi5Bat6zYU7ojsoeQerwiPJrJktDgbJAZrJYPjC4Cr9eMp9SZZwFnK6iLpoVGxo2p7JxdF7NX",
  "key8": "4zc6SCoGCdR7v7Ldd4R4zwGCywXq5z76AcjJxxpinfCHKFj272qaxkQuMTCJMxC5J5JH72dsusr22Rgsv8yc1GjK",
  "key9": "5TH9Kgu6t1UVLd8NiZDDpD5UfbNAcHv7pXQ1hctDRggdPANoPWDYunhLjgBH9iJcjMgW7enseNFvJ58mPDpdrS1W",
  "key10": "62YrfbZjSELwhdJK4YrWhZSzvu9Ee2GaXeqDEdLaR9Lo5V7XR7o3kkGCvJ8hgU6W5WgjhWynaYkBnnRRTtQqwHAe",
  "key11": "2edknkbsGZ9K7BnnQ8H2EUQtzkfFQFpQWcLQwjLC1gHmUHcYx8ovkD6bQy4Q4qPHMCMPB2ubcDUvHaRf2UJzJKnT",
  "key12": "5tmsREp98eqZciQDvniTQAu9r1RHTJJqyRWTc3wecBCA7b29Ug8vQQnxUi9Q3N5bg6wYp9mJGoEgG3JFrKqdTWKV",
  "key13": "C1gLWfnbyP8Tk4cH2gr7hbuVWjw9iUiNQ83HUxxfC9skitfvXp8FLBDwcnf7BUNF3xzoam9SDAJMyDmhCNgKqLB",
  "key14": "4XGJAtXjfn1nEeaksQENDLtafbWNrSyEJyzRmm1SuEU3rF5mHFmrBqyBXCb5VVWu3ToYw6UCCyMprqmTf4L5uRMf",
  "key15": "26H4BKbaDXPtG8Czqod4FwcYcxB5rQ8WxGSeomNZuhzbFDdy464n4hAEFAz9RfE1aGY4WUBTsjd4NUGkWe6j2Vrr",
  "key16": "TXwHJ8czgaHmZ8DhzJNihPfMmQ2KsJax7rrZy1FDvveKWSqdCg7xbZ9jbQLcAh3h62nJFgtABWcSTZaUWESFwPb",
  "key17": "2zz6kd7NAo6dQGX1BdS4bCr3bgCFHrx4A5EpVB2DrjXymXyVQugMeUKeUwFt1v6ihuceKtok9XZr5iUZr2oMs8dn",
  "key18": "8avYa6ZABURHBD5BYCRVWstC8d4yXfFPfLtV5pEpL3dfYgKjdhzRc7os2kPmUC54X34uhR4strydf8tBCgGJb7i",
  "key19": "2gDtpNyNEFHJNiHCv77XtHBGzQmqZuXpiknescRMRVgHzioC9RU5962bTXPACbZ6Ur91rUzJbvoxC55jRJURS4k9",
  "key20": "4Wh1H5gwrTN8ZWC3F13Gt5S9i7TZMUvk38xB2nYf5z1RQNR6vxa1TW6zVn219eGmqur4ZVhY4q1gDygSZdjjKtts",
  "key21": "476aRsEJpjuHrJNMuyMg7fZ693NdThCRYFZCZLNACXP86Zic3NV2Ted3DKWNQxV6Rr28ucYHEEMCb3Ba5qgMaquw",
  "key22": "5NoiKo1Sda8nFDjC6fyZBxqTQkKzbhXHaxF9pnEEVBhspFKVFQiFWwrdixFuzgujJr2h5wM9QGjfiahGi9TL4eR9",
  "key23": "5K7eQakLnaLFDD5MpEKftiJVVKHREZvfopvwKmqNymnC5oyWHJ6RWGrE38ypv74PhMXeqLqCDTZ6iy5qpYQLcAYz",
  "key24": "25GFEuX7PjgHUgLQ2ctxtgfWihc779q9qp55JDFawCsf5W9BfJcKd7vRYWWhmzq25WPbBfF2UKA6SxW5qsxgCNcL",
  "key25": "VVtnWU6Uc96B4b65En6rzXuqxFpiMCChtw2kNzVmv2kmLS3TvpUR9wMqW5A9X2fpui2d4jGDpauunheQRRosn8d",
  "key26": "4AJxxMiSE143qVoc9qA1DZ4pHjP5JkgkSkwVTRgsR4zXyLNGfksyZaT3vkyaRrHxJSFm2Qo3EJ7vDaFk6ofnWgCQ",
  "key27": "67JMo86RwP1mRegzsVcwGehDUffXkTum7mVRBr2QkFnJCugfXo4oWFvJHSmg2CXXvYnRnF7c796oR1EF6fTMbqJr",
  "key28": "2aytaKJ4LfG72Cbq3vs9tQZno5KRXX2qaUNb5QRmSQ7bgtnXrtV6x855tor9VPqZQjvsTFwJJBrZUxHbTeZutgS1",
  "key29": "26MUybuvnrcLRX2caZCRUcCQh8nexsJZf7rapRwaj8pYX71DJ6cmoH8hgwbi4iugDWtqRS3xb5mjemneo5iAUULb",
  "key30": "5PFqWDEte1Uysa5aQg9LMVpWQr8qg1WrKcgRwqEgTy9pwJ2UM9nRwenziv5R5Hy1ZqFRRFyZMw1pJRuUEs84kd1W",
  "key31": "57ZS6DvxtWsKYQJuoEpvTtL5NMsr3ecuJ3hfuPTan64xtwBg49pPxvfiTG5hi7vkNDAtk7s3Q9ehHSHD9qQ7wNkf",
  "key32": "41CE674osECqNbTPZNTdgpLC6CcEHknEqyCDfGPZLJidfjwuthj71KgYuUMCYBsSEhf4wSSSHo3fjtcWxSeWXUrp",
  "key33": "5vC5sih1WwEtNrGY1a8vtdBwgnUmdi4432agXGQMNE9oDwSkABjYzgHPWWRPNHGfE5yC5uC84kHRkzfpdRvgvvRt",
  "key34": "3KVUiDeJUVmE5vUzi2bXZNHUZSKyLXcbdH3iX8KCYfabFWmoMarMZpyrkHDuxjNJjoYb1WThJagr9HMtArKAXcU6",
  "key35": "5mdhc3EUoNxW2QX9TN8rH1fLdSWMifQtXSXhiNBjZ9ZVEo57jhjQcrmuvsuvUqZoMGboh4njLKJSBKEkjGNJyvGE",
  "key36": "3GUfdB2EAqYPiTt9XRMtyo5iUfHW4SDYJV1fNREHA25Y4PSUogog7XSYEKLQdUdLNCJQMdE8mWLyaD6L41BaSYCp",
  "key37": "4Tj7FhkxWRq7pPhwLmZdjCLMWxQtfCCqBpoRZ8HiMihDXi8ZsncaBnjYY7T17Wv6frjBYq3TxS9Li991sbLFCCu1",
  "key38": "3jVrDoRG62NfoW4q9ERwhBGV68i84DpdpPbLRVk3sfH6WBxyQabSHt3iiYtYjti7oZ1qapApXuKeEwXCk6aZWhyR",
  "key39": "KxdLGxQT9PjRPpNVBL1hMZhdvy93kdrFySznf7uVCezkdBGFx3zoKFwrmQCZYpjSNfs4aTRckvkRzdNnuXWj2X8",
  "key40": "3iiUydyZihppxtipD8KJ9h2pKa21bi6z9Mz9xJ9MJpzVFcyiFsfMdvjDgDCVB4ahZydWXzTG3BQvHKFmmUDDsH19",
  "key41": "3nppuKGwXYUabeFLwYe5FSKEFivj6RUcJHKUiDFYUXA58WKvgzQZQG9Ykpq7vShb3f5uLrXyyqQNdbx5Sj1MxW23",
  "key42": "eauEcKmqVhDEUjyK8QzPBvznRYmNdULmFzxpTK2ogQYWP5q3rqbJgAYNLyLBMtVUp1QQ41M41feEX1AGWf1iMa3",
  "key43": "2LctzBJs6bKAM8eaDzwMkAyifNJRCzZGHy4dPgeDjAjewBm3jyDSfQAvEMevBQshiaPvdu2QK9hMY6P7dLfedbFg",
  "key44": "37GhKmUCJCEWWaMvQfHp2jovXUCg4JZ8ArXcMnVZf8U2y7ZocJ4qEZQXrQK65YyNC7N8hGz2C3RPpmcRgXcDjDmq",
  "key45": "5ynrUMhWCSvuoN11juN3j5DLecTWSCt6R9ty5Q7mxZnPiNPryZAffjNWwrsg7NoES4nFKGicW4cGhbAt8bznn7Zg",
  "key46": "4jtqP7wZRjohKLCt9G8bbqnixf25QBLxri2pWJT8kG7nNDzqsrQMzziUvx7EqiK7MJVm2qge9GiqrPDjh4yG4afo",
  "key47": "4xVDsgEmZBom9zfDcMn8MKQZTwkE3J28N5oxBWutNYC9n2vL5kmpiLJUUMGN6rJTakM5HHMhTu9kTUy458yYajGZ",
  "key48": "4jgPkZdwnVPsCCYcdJig2uPeo5SxyUP7WeeNSj8CR9MzvE6B2cKR7Q255Vofv6ivBJpbBvLTpgB7HfZM3vzLWbs8"
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
