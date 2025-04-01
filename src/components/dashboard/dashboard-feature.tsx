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
    "ye5nsHPxFxcfJiq2u6bhnLpBVT9krEpnKxhr9Q4uDVKgXCmHUkbGnhHfc6aboaEhUM2JUUzE7RiZsS1Lvj9xSnJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GevEbx21A33bh6psheQ9ddeWXUnYZL6vYcQDMcRurtMKNtei45v2joJsduEh8x5o2RbqA9b5AkyNZ9Qziuar5us",
  "key1": "5o88iK5WZ5QTe8cmy77ay7Us5e3Dz4E62Ez2qknKeUBQhVJSUT7LzM1e9MDn8J7cevKQHYsgnZMLd2QDimU4zaBi",
  "key2": "5DrwJiSEGx8s2duAFRcWwzSvehSjdCKpwozF1djJQz3MbuDdD43WVoy1v2Kd6RFF5AYo7VMospUk6HhhXweLbY5S",
  "key3": "2GCCxq3jrew2UXZKa2Wq22dsfwNtvN26dcJotKkvo4aPpmq1AFp3M9AQGNeTEhYvKUGPFieVNCUvtA6XKXVFt1n5",
  "key4": "Q5hTTmK61KzcKHsMbotydi4D2LTQyshW4ZRArrKL77dce9vJLBQ2P9k1xpmuTBpDpVHXvG9MEVFhSwAyKCFrvsF",
  "key5": "4rtu4e9VSbxxzvZ2YVFHJWdAwzCYJWTWaWDLm1uvg6WjdBvzARJxLppJjD6EvWQJaDrfZkC6CSNM4dr2yx8PGxg9",
  "key6": "5STWHHWXsX3GkQR1P4xiLuv2kCMZqm595soTpiHypaWJNppAhywHReVQbhkWznbFrSDdGUV5CDq1UktQjWTr9aax",
  "key7": "5DgcbgvYuufozGGavEpRj7oPrR8AdFTtmwt58aWtCRavgTxdt9WP8rnUS6VydfCAWqySA1jRsyd9rHwkrLHWMRqR",
  "key8": "4eSiXFsjk1KQq3C3VKffSTYwsBu2fwcvcvmp3312Vuij6Nj4ZhTubevFfQ7cpv6dQPNVrrJ9KniXTkPtZsv5YX6k",
  "key9": "2cyyCDNy9CjQs9vzXNbibviaV6WQzFvbdnHTUVhSUvEzG1sp35yNDZdyLcVGeBR5HFjsm1RtvsK6onEPTFioaqKA",
  "key10": "5vj2U3diXAR2f7wzKu4xzC7KcohB13ah6kk2YBKrfXZrKXwFR6FGBCzkZZdsNnsyhQigQA6X6rtf5D7jkEKJSdUU",
  "key11": "4apmTuHv6ykP4HrVzdV85fh5HJcSfrMsjXxWV6fkxrSMwzpWL4xQmnBGBw4dfPb7YjvuibrN7nRguikNUaSAqqiH",
  "key12": "4KyFghdF6CtzsTX7Du72qfaqQC6ducN7bSU8Z8gr5SXrRfhA91vb9UeWL5FPRXnGrWcMkH2TiWsWiEXSGaiJASbH",
  "key13": "3hxRBpofZP4eZ1r5bmXWa2zeR6WqyayCZb3gtKD5Ygv1bkx3FvwHG81Az41tDdHkwW29DvHJDqcUaYBDJQSTj8BA",
  "key14": "BxTGm81ovjv6YPLWfiwAh8HkijPbqeinEnn7JT9CTG8Kny6Vet23vCLUprdSygaT6w9TghcaGVipc834HDZrEEJ",
  "key15": "3jPU31qse6qApRK1Ww2LGiT5r9wvwUChPS32BKrmaz2iWDhVU3VtCrbz6ebZ2Mkpho1mt8UvYdMNMTFYEMkzXKUv",
  "key16": "6wA7qzjipzzWQxMbHHBrvHbiLDDHx7LoEHtsaRH47xquFSsSHn6WDRJVv4ePyocXammyZM5ShRZB7Dgw99rWWVe",
  "key17": "zG1mHJqB5WxtxgmMeCeZMcXmNQKXj6BdD2peoahXnrsuiMZjtp1txsSzZcUMRmNkFKbyrPbuW7NYXmwjQgHeygv",
  "key18": "376WMJG9chQF9L3ghVy3DyvLzDC6Y3k1eBrynjkyFTwKSEr8KFepgHG9xzKS6V5xfGHu2fBFSjvDHLhXaG95rZV7",
  "key19": "3igvobL6CzTw9JpcyQDax8tGMrq8GmkanU2r1mxhhGU1jD1GRcDAWunN3jzSSGrhjMq1zyRJxxAgpkGg7iVz35yy",
  "key20": "zufW6LprBucJhCDG5j4yjkXginRXmaa8chdbnWTb3TpGKV38fkP5Xnwgkd4FXaGEEKd27NxUXfGNtFRKdtEVzsJ",
  "key21": "58W4b39QsogSvHEiqnuZYa7otajoAb8r2icYebQSzvYc2JHzMtbYAPo4361dUc43WWBnHops7c3wz1P1cUkt8MVU",
  "key22": "3jaNj1dhmSwHTKEmrHfjhAuMeCvevmJwNbD1Hw1MwbuC6cVRUFMNeYihUJSWPbqHcGYmsau66cn4g29qVABAtQJo",
  "key23": "3QhbHRwoeAmdo2ZNvQYHR6isbRXzat1xtB8dFrfPqQ15kKdLk3DWhR5eK8NUPPtUG1tWmUbqQyjWKTFYMtpiv3Ge",
  "key24": "dnycFK4FAUnirNHSiBFGyCrQztWcNK5ALKYFYMByNsBrnFiHy1idvjW6ZG1QnXBjeHbBdffeanmZLNTaKxkfzmq",
  "key25": "c8Qe5xyCkLhxtgnXMhZ9qe3h7Exm4egsJ25vLiV9UgKbMaCpMQJ5M5kbqwJ2CfSXyNrG3UaSLymEkbYymfm38xW",
  "key26": "3xndjdrYBg9Xis7fHaPHWZZJYFhMz3iHpzfunK1dDTo8P1KLY8VYU2ZQ4PM2LrysTCEPrS2XQdYmMx1e8VT42JND",
  "key27": "2YaZ4cWYq5hnLto7sy2xXSfFTX3PDAcviQ5tFpvzxfbQBBSV5roEqAfra99rD9juMYWV5zJRyp9vY2mAqmzM9sBm",
  "key28": "4awkNnbELZfAiw4CD3D6AjpN85eGtqaHwn5JZDvsR5yFuXSp1j3PE7hAV9v6HxWZqiQwUkroZSpPEQ6VEmrF4Fab",
  "key29": "2iYqfcyhHK2zfJBXK94gFe26GPeTQguSemT6LGAtSYF2oehYqMhh3rtCZsBnV3qQ9kgT3BgHyAREivir5dTVtdPs",
  "key30": "38LX4ahpki32P1iZfm7mc56CRqgZcuMYPe6YpkV1wQqY9meF2bBhBYQ38JMp4HNLfXxuVzKNr1E3JRjiaVCXeMdq",
  "key31": "5WLfgUujxbptkiSJobFqvS3gFrZ3SQpHcqtu2YuPdJxQCwk2muVwDC4AKhMVzHwVLAKx4xKTN9SRsYD6xe7FoPHM",
  "key32": "47zrt5DYqqktgMBMyjrGvjWs3M5HKmVG4s7bRWjCJuFpVai9uzyiw8c3s76Xqg4Z2RFdEqBMkSSfoAMJi9GEiPU9",
  "key33": "2rPMVxeeidkr9zT4wwnaGsWNwKvBnD7fAQ6K9RtTHfB3DNJk1Jjc1cenqoru9kyyXfREfQ5oqFkuWfZ2ESwnvet4",
  "key34": "3GRCQ5vh8dNXTnSXZxrFsVTVSxNyxhW4iFuQCed4KGkfj8tLaLg72j8WQcBWYkfDh3vEhGk3YXpjH7kCQALdk2Za",
  "key35": "4JUdguNnhaLf6krjXd2n2KJUg5HdmGjTR4TUnqeTC1A1DKajxfsQnTXEoASqVgtrXpj17TVu3MTbc8f7gWqLAjVX",
  "key36": "4GsbyKavBciXq9UW4QCNg5CZT6BQAYGNKLHNrBY5QjM7qdxgwsJoXQQhk6gfUGsQH6pkKh2WMVpVYejkAuepS4rp",
  "key37": "3WCVRNNHcUHJsNKRmTC3Sana2otFFwHGS8Ktd4iU1NgtFW3FY7KS5oxqzMtdxJM5WGs7AXBfZejXGtCwrMDqmT3",
  "key38": "5BgNVLb1Jx8prddZkftjd5SWGq8pyGDpuQvdwNTtzfibLjiDfBDBiozBKhk9ETjpomhdaU4uBZtWvEz2HHGmfMgM",
  "key39": "4kJwGXpniRXVrUHvQXaARChtB3jHg6ydL42dEXC9gteTEFwgDP4ypjnK7DrL5EyEp2DxTDsHofkwhVf5jKsuTPgb",
  "key40": "4vuAuPrgphmNwcT86V9ao3B1nN4JmBseNSrJ7Jq3EuZoiLzDimV31AN5YSrmhGmLr6HgJDQRDGyZYRiK1s2266Xh"
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
