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
    "67B8pTiQ3PRocApJikWRrfpRdhdt5x9pz3VYFovviQA2YLbHiwjNfaZuMcy5WKBAPJdJ1ff8UoNsneZxrd8ZpVZP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TXqqmJPvgK7PuFwyAAFmT8ans5fTrKC23TYR2QQuzKgADcusQ9oNpxvVSiWVcugybcN5EYNjoM6fAMhg8GKy4H4",
  "key1": "67QTfBbsrZkPMqTzaPnCmzr8NYMDrfHTzATCiaWFiSYqddQrS6vVTrFH6imtjDfVmSXMQuTJXkVCxiqvNB4sPGCC",
  "key2": "qCSfAVdUcGwmTCRvbANhYiymgdfvXhtzRswSyuM8vbfC3BrXhn4JK4hXjs9HSwU9pvs9zFZqkeC17zmjSqQqxJL",
  "key3": "4tLLtK337KGNqfQLpbWgpGPmHK2y8gtwC7XjFojC9dbRaA19rJ13U4rpHVekaiXqfuDwNK8w7Jap2sYPVsPsbHLq",
  "key4": "3VB8DYGHatKddZYSJg5cy6T3zrjrW9fPD4ryx3Re2PoqSyugJaUJYHFLR8sYTqGHeDQ6sW3MSphF8eMcvZtr9mWG",
  "key5": "4uJSYa3E1i1aXY6d2Z2doaUfUWUVmTyAGNSpV36GzhT9qLkB8Dy51z6k79HAT925cPoWE9oYEAq5kF4JGfXnACDA",
  "key6": "23Lh9xBPPFDZ842iaHVax7qVXYQ2jGK7s9tQ9EFhhr2p5116Z7D4PR6sY9HVvHKaNKXQv1rjYSTH3TVedo4ayMuV",
  "key7": "22aKT9xSUdXaZgHGCWZMg9HjSiVpN68FYgY4bqSVcgh3hGexxXB7FL23R9iFzxLzZRuf32XQFFtXWBojVDirsQ9J",
  "key8": "2deYz4EsUvqJMRsnpDxznwkLEoRWJH8H4VXc6KFsjVXLSBYVfeRM7MzwsgYkCi1UTtNquyzBru8guo3gSHzsgSKJ",
  "key9": "24Dv5ZPpacu1SGecPwA5n8LYnA4bDe199hMUNFn16hK1Rs5BmvedqHEkuQTmpjBfxVhKxKK477jmgUT9w8vcGmBn",
  "key10": "2BVgs1ErjrPPZ8jXFCV63EP324bMGTBUkGk4rJ3HCaFTS6Ud79oQZLGB931T7Qs7weWskPpiHibu4CcPMwkZf9Xk",
  "key11": "HSVQgEeRYuR2mApVCzW1NtNCQeYrSho7oJbqcY26yquBUGfBoPFBBig563Pv8HVaGUfS4RnJt4jPeaBZpLSUvTw",
  "key12": "6ZNZBbDmh72sd5DN4Zy6uUtnX2KPuMP6d3NjEwBBBxutSsj6fr4LUjnUYVPqRhoxz9uvTUDPrYvfajHMbcv7GV9",
  "key13": "2cae8KyxV6PaGPdP7MCmpKANeZouVobqCV69dUsiSUgo8ogwv1Ec8H3qcUmt71t2M3ZRP6rQfVzHVCTUS4uxuGaC",
  "key14": "36ngJRZQrKfLVAzac1s4XwXzXwuM14u6G9sVUhdR9tEiLrj4MLubdVzATin5nDUfWju4mAsd6XQrm9W2jUkeMxAn",
  "key15": "3Fe1b5rHNVncZgLT2d8QkDrdzEYSTuMMDzaZEGKbihpWdKQQj8sJhfuHpuF7RcitqaHBVp78iXZzWt4MRnDmM95a",
  "key16": "ukvwEfdzyUXuEGmnFuho386s9FqmFrSCSfa2Y8su1EwThiDmCoN8c1fV9Txk7EW1tWWUztjdHHKqorQScnPTof7",
  "key17": "4bSuLRr2iLSfZZLnyLamVvDTS9xDeLV2HWy5w7amr8bkwjbDZ364WeYdk49rGwapvq72ZXqh9BuM6mNVUJSDynxb",
  "key18": "4DSseoczkyAWVaBXLkPwdfrA8XTZfrpiguxETxkWK1Fx2br6L2BPEcbyvxZnSkKagNpmDUXFPTCpJcRiTUzMsdo4",
  "key19": "sVB2Tdh7FeqfKpLiptdh5wXxZvEKbBZEUpHBKJw7bpd3Zcziv57ScbtZnE2mNLRKoc8VEoab2UkBwPjv2P2EC5y",
  "key20": "35EM8iRes1875KsFHMXDBgepAMHqm2zQQgErS5FVxRoizo6u3bnesRJubdFczq6iJ9zHSm9VKoNNUd8yofFAtC7V",
  "key21": "5suf6r7GQu8AhZVx4TJjshzT2vBPfr4f64nZKvjZuSUvoCgAcgWoqN3qsFjwguGaCHubfGNNfuGcfh2FqjB38XUD",
  "key22": "4RzxHN3fE2ekHTBQ2kijDZyK4rBV7W4fpm2UdYAdKJy7DvdkLQhCEoFLybXUxkR6pAsLWv6GxQg8PuAiQUWN7CeR",
  "key23": "546hpqCafX13UHYSEgBwV3hYV8vD144Fdm8Wi77mtUZHfoHFbNu2QwK4Q46u8rbbE6YaZKdATBwCivWqwbEDcCJU",
  "key24": "2GzU8N8VqMmAzmMbKhapCUFEXvALs3ZA7YiF7ab57XBYvL3csV7dHFuh76qtnYtqDRW6C4tEf76Pz4dzHMVkvUy2",
  "key25": "53LRBSRjSfBmTGSf6FZ2LEByvV946MfaAacVKj2PbUX5roKyJuc5ifcLVg6wayZZVSGrZiy5wLSTTh39kmQndSDk",
  "key26": "jDJjziXXo2moKmfqvregctVmWp1XqYSk3WPi5TfJ7aN1RXGwdZgCxr3A2k6n8bokFr93tpSFP2eqDFMvhLNfTjm",
  "key27": "ir1PjUv5fR5Uj1pyyTp8wJgiqMxfvcxbwpxTJU3Y63E91edejugoq7tEDepnb5dkS32CX7aw4yeqwMs2i1YAf3S",
  "key28": "SuVVUtA6PgExGQ8Ec5Y5rweF6WkPk31uh2s8xfE3426v7PERUodn2oDdqkVXXU476S7BDpbW9mRBCqkbrg99wJQ",
  "key29": "4N6rd2eHZLZPaZburtTZ7EBgk3ZXf6qeYmqgwPEzivZXXxSZjuwY7hPpEXpA2XAVWsaQzgfM9wsP1e32fqZ1ss44",
  "key30": "3EaZEGiPW2ncRP9AcZPcVLCaUhwGRTbcVtNUZt59x6pZbfVxDJKWdd3RbgDdjUCRR5dqJpbsmYkyB66x3o62ohbJ",
  "key31": "4XytDFpEdieZk2AAcDzM68rvrKofx2Ty43qg34nPj84HXEBjuDSY7dhUCUiUGYB68TQZfeF1Xw8N4VyzWsY1z73y",
  "key32": "2PX1A5aBkj2yaSERX5YNQsD5vg2xqvcTQXsefX4xCnGuzgvH6YDdu83VvGKp97BPjAs23T7Pdx1zMyyAMgrQKZkK",
  "key33": "c5irik8MxYQuLa4baMY5FDRKfepfGLUihVZswkvbnvT6rRW26E63q1vDL1tpqh9BdyV7upiRy4Jvbwsuerefdr9",
  "key34": "5mj2nE88NBTPHjpbTn1Hk1FrhC3ThiXpNiLRSJquChBC583GSzeiQkHh1uBKbzUZN2VnvxEwDJMpYCa6Z4wE5nYt",
  "key35": "4F7Se2sH3zTSDGyTK16hBcm1NrpqaiS31fnDpiyWGdSEKx6xeDjh4wAqH85heySJakC1P3emDuaFyjMGYmrXDH9v",
  "key36": "2fiVPjjYbn672iZGyRy9GCCC383bqDWQQUCqcgKHtDJozixyrSvcz7TG63qnFA6ghjowWrZvEazXvTfrckv1qRko",
  "key37": "N1suoRFgqxjnVa3VaDLaqKayKQ3dJDbFQcCYyrv2e2s2jPQwEu875LgtfBmcakVrwbHTa3AWpXuNGTDhytNQUYw",
  "key38": "2uMtp48XGP3DW84NRpE2fVAZ86RHD3dAgi2PQMStDXVEpjdpSE9o5nLZK1ZjdwZNtqgnSvysnR6XspNJnuYBAMzR",
  "key39": "5S6BJ1bU8Mhfv71G62LK8ewXyrgNNpvfJKpEXu2D455Mw66jRPCLYX5qHpSvdqvGUMNBWNY5LNKSA6m3fQzBmkwz",
  "key40": "3nQUMfWPPErm6BJP9d1F44oNtsv9X2oHxRfAKpACUGCsgSjKgq8LzYhnQBdgvXzWhohramwkEVnqj4cpqC33DRs8",
  "key41": "xFb7HMuMNCtYQM43eQDHeUp5t1ndr6hSoaA3K54ry16Trw6oRJ4q1x531empVQUEAS42SLzDA8hNCYuBYFbCmGB",
  "key42": "GNxwsTGVKiVBFWotUGhbmpocmYyB3QWetv3z3Px4c1wzQGfMF77tVAjvNGj9hQZRa9zEuDRZNAHz6ZhD3fy6MTk",
  "key43": "61RERsd7yK9EfPcD4T6SJPvuKTCaFBfZWUZq7KYJCPcLXDEThybErzcoVHv7n6PnfPaTrFZpiBYuhAyUjJggibae",
  "key44": "svFYYnDDmkGVRW3aknJjJ6v95b8YknxmjMRGT4rFWdjEh4vHvyCz5c92SY9wE2v9aPR3y4HCGWgo5KsLDYd4hYL",
  "key45": "2z5D3dcLetMBJv8eXYUHj6XU5hsdsUXXcVuURb9n1PCQHJnkJfC4155nov4ovYmzemDgNnFDNqr7NMhdX2CL5HtW",
  "key46": "2wFrxjMkfz1XrvsPBDbYszWpKN1uLqCAhMfod6yhcGnjpzmJAnjrnW54spdKJPHhD5nujvjccjFPHXg9aDeSf6GB",
  "key47": "3CrogSX6JT2Yxg56mvMxpCGgaoAJzUH8qSudn157VDA5iKWVTriey6gjeeNSiu5wTpgNdrUPEoAY7TkXrKJZKKeQ"
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
