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
    "5e2EgNrM43vxZnYzcG53ZuCPcDRyLdUie4hxdUStUxySaVQKWRdrhDvfw2z6FUm9fLZF2wPvHN8k1oYCSVv32rvH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zRXdyenvXhRYQT7fwLsRJWNdmQxbxKqYiTcKXcnBhLk17HjvER5T9WFtLbERPebwpv2nwphYnSwJX5RmjKUBJP7",
  "key1": "jhtzzSEbJxA1ZDfaYaeHLJEFNFur6W2rKrTnSudmb8cNqPkQTNS2wnxcrm3PDJy8bXKkdqGeSH7aL76qdNkSH7b",
  "key2": "3g8fUQRqCwSdGYuH78xWZAHUY3J3erLnArHoe8EMWQe5mj6ghsTdEz6LW2zfCJsidjpBJo2RQ4mLP3ruDk9T9TgL",
  "key3": "tCPnj5SXJ9mKzYDg2T3zFxvGFcVevsBBcJPZvnqmxcR7mpK86jQqkwZobv4isBfeTA3zkdbhd5pyA1NTK3ibtoi",
  "key4": "4jiGnaAfGacEVFAHN4KxHNisxfR5aLqbK4XbMFZwRs5DvMQ1s9wJQgUNPkSpwv6jHQrn1u8zHhtCBHVkeia1E3Ts",
  "key5": "pTsjf8sn3pTbN1bggWskkgLQxDLoLdsze4VzH5ggBTKZaV41299siYty1ggw7GD18N4kJWyH3D1DBTzB86UBX1V",
  "key6": "3Vr4fqvRii2fyjuizdBsTgd4Bgv5iqoHHrDKYjzy8ZRYt2yimurNNaoxiX5YukbXt3R3ffM21jPXFgHdi2aYFyDw",
  "key7": "2qD8NpVU5X7Yb1x8mHzSNWXXxcHMjD47eAygj8JsgRh5dztSWffM2UAPxAK4QCS9L74ZeAWqyDCuNevhizQUcogW",
  "key8": "2YkeBtu3NTYhtLLm5yDSXLVq18AVdiaDwiQBE1p1VXgBD99G6g48arvFHHi87ADfRyzXKswy4UfC1oDriiWG9oiJ",
  "key9": "E8gJY7XLige2MnfS9n2GPjdzxjJY4QaHR4W5AE2diKEZUhmHk3Jkp3cdXYUPACyJ4FCGYTqVcLQTztfngPtHN3C",
  "key10": "2zp1wS8i5p2kRnmNT1GhRNgx7KANeqNCLenZXhxBxrF2PPMBjhEkCA3RY4eKSPM6Ku56fqdawTejMkHGTRVJkcDb",
  "key11": "57WdJEeA76k4YVnLecbfqpKxXycPPozQ85JRGP9f9ZcVqBy5YJ67qTw2XhMTbQhkYRiLY49zvyR6oXPSiBacmFFa",
  "key12": "y7EgJFvx8pLwq2XdiGvX3UEpQqEHq1f8KLRfr7NcFafQ2JYagJaefCmmWSRjDx86PMsKYj3aBwLXYsJRyP7LPd1",
  "key13": "4ALeKQh2EYmJwA4wgmj9LxKkAyA4watTuaMDwuxHJdhnrtEQ8WUEKsm4f2ViyiyBUGX3bxGfb866bdTYYnsuBs9R",
  "key14": "33ppkr8nWZxNwHmDfoNMqMLo5dbBr5w3RwEviS2NBoTe64FFedhYUGttCWMJcLUUoSmVJVyxhBUdW6kk2yVD5zjQ",
  "key15": "3fTKPfxnrmnhTYoQ2davV9iscy1VvbMW5iYXvKjkwLBzHxfSgJxXpe1EFaNwmkVSiwqe3otw43qX7fFrj5oJwuZ3",
  "key16": "Ds3N6iNcrAEzxErUj1Dy3WkqqXp5rUcEwvaJsd2VvwRZUBGvNtq3AjxuiyTXeujxBmZYfw1NLccX8QaLM6Ldkfx",
  "key17": "4SmKJ4PEfrnAxbECCBsxx46Pasp1ZQhbKPPDqHqJqdsCoKHgAZczSZbmiVpf9bbCE24LcKWUzVTQbMfTsNSeXHHp",
  "key18": "4PSTZ7NjuWRLaoasrL6Kd7JJv1oNgppagk4q2BGV5VkjzZFU6joWdDUXqSRxzE98GTbdKDCXC83Ns7J36wjCvk7",
  "key19": "3vT8MEkXXKFYcBoLCkKC7mig82jqx1e1GU5cALtft4e4KCmhypr61MgHaXwd8SZ5LsivLgHHH1kNDQorYwdXpk7F",
  "key20": "3ido6r5qWsBzoEyLHuqWMz6aPa6ELA9haabs2dY5DCfdu2qswqAhLQGwXnMYvgE6aXB2XcmyLcye3Xa13KZAGtRY",
  "key21": "Djn9JgP4TcuPoGiJUNoKuTw3H2c5Fjn4TSuPxcyRUtdwapAaniFmqfDzCfZW27RGbQ5mJgbJUM7WxCZ81RhrxEB",
  "key22": "58TsWssroMNjZxYNugv4w4fXYh4sb4toaXF41nwvhjG1Vm2xTxXpihtshQCS55PZxcmaYeqv6wbweRQa6ZwyatCX",
  "key23": "4CxyJHmRXbyf797q5sR5WEaudVL7FZx1nmfZZ2rHgtRwM5m1Z7RY35rGQZpHi1zs7UXpN2q3qvzqTtZYLhscKqb7",
  "key24": "5EwrgjtRHJYUsQ42qmnaYk4WFWFBLNisXeaWaVTDgKjiJadvDwjjmXwFiDQCa9QXBamsQnjJdCwCkK5XbbXWCWce",
  "key25": "3tAkUYxYPPABvFFqucrV9FRe29nXX5sckXSf8juZ2NZkNKir4zSa7ucfTBJVUPD9CqehMwqaqctKeVe9oP6aDj9T",
  "key26": "5wwR9cjUy1p7qMgqud2NCB4rqgSwDMGyTWTBwjehCcpCoX7QwQPfP2wkhNEHSXhrpAxfvUa6LG3y1oJZhMYExPj7",
  "key27": "3NYdMbyBH6rLGYye4aaYgknNVv9mRq9yu4B451LeDNRZzXKLzJGtS4n2nsGuhqEcb1nnite7NdTpNjQb1bdAzaog",
  "key28": "3h3E5PZ9Cwfnzw45TDG9vPfyxd4ocAreKScYFAGvX9ijbJ16cp6ptH5e5HjZmABHMjpPwrR8c12yN8wpET8FZDXJ",
  "key29": "TNFoivkh8LqXEPBAFrgPeGaFx2DqbWYmSoutqhFr8epapJKq2GSSGoMzRorDfmGZvi2dXM7ENHwXGBR6rGwYYMm",
  "key30": "4ngFut4AHCmfsmmvJr746PU64oncEQRJG255RhtgkR7aNZKFc7PNo1qGDXUuV68fYE7mJUHZTQ1xL2YBZWxM5ktL",
  "key31": "wMCngWTeHzRiqAVjtUMafVF1Xhuj4aMTiaua1gnahQwfZKQV7sSTRMRZc6Cei1jQvGXuEEFzZ1BZ3tihUiiAzmY",
  "key32": "5Z5coFcLchjhTKwxM3N8hHyYhaSE9qvMa6YUJX1hjwgTHxFGkf7Psw256RjSqvjkPaWe3tC4oJNCU7edZx1RqhRT",
  "key33": "3DRg3Kxa6NgzgeMx2WJ7jtR8stz6CLhVAJcA1wFDn6SX4jC29ZpvetJVB5w21CRBCkHVVZxcG4wzZcNrDfbVwQ3B",
  "key34": "3taDmAcWKnmRKgKMbjTUTpMADkLKjeF12eYysTMJ5MkjnwVNjgm4YcJDtQHV1HxjtH1ZhAfcat1rDU1yitjraBmW",
  "key35": "FEYjKV5UYDGvVkbmnvz24G8NVHKdpmeo6anTvJfRxDmrNmyZ5fqLtJJxQBSBwAAvFWAAnnfmCdMF32vnEiEGhNo",
  "key36": "5EYN4ETgdd4sXb3MX6rekcvvkyEyANtwdxsqk5Aw2yrKw7UnK9qExviiVTu6orYpVmXHsVtp6NFV5BJY3ng161og",
  "key37": "2FWFnkStMT6pC1B2c9Npsz7ZmNYUw5Yat7NpW8EzyqMU3UYCUj1joMrBBq4WF7K1pN14m2bjX8ZTFc8YkUYC5hCe",
  "key38": "3h3LvLZLVVoSQsWmxvK2Xj33rq2JpL1LvAayUXYfCKewHf3Jw8x2JmXpwkgRAAciNqS89fLEu86dLynQSzkVynmy",
  "key39": "2pdr8QbJmBjZumw55dcupNDDMEbwX8hQTtsySFxGN3CdraB1RHqZepjjvXuBUyZH9zXawmE3VhGa1yhLuTHocCc3",
  "key40": "5cmYBF3hVQTkQRAmdEfNbht8w1zQW9CAYte2vG32Cy1VNHXLsZmL92EtMjMgCiJieiDZeNEeqXfSQtR7SudSTNyJ",
  "key41": "T3sFhbH7DMn3LbZJepTH8aGMKs696Qj9gowURQudXMkuYoFrKWafyhajSe1F8aSZ9pGmcD65rET3st14jVtBpyy",
  "key42": "3RH96qXeqebgH4zQUKuj2GP8gfJ6pxBcbsWG7P15heQYzBQVVVH3vR2zGr7z4HRWZZEJ8JJ2YmAkrFjCfBgbNdBz",
  "key43": "4aXzeQAd3fhfWTfmrAba9defQvxe8npYqMZXAt3SwQ4jNpgbqJNkY9wNXmNwM17FAY8oB3LYgA4VjcKhWpZoV634",
  "key44": "3KKiXNxDSqkm4NEbpc6nmBqAa2Pz6pt9PqNt5zPEhLyWQqLK45Gt5SDaNmMp8jmN1vZXuMSgrMRHrqyU4qfYg8fz",
  "key45": "3V7wvSTy7iFNzt7t7V9qAGvVAnjByFWak5dQqs4bM359DGgw5HKnPtpgBwkYRzczD8AXhU4pnZpDNH1fJ4zoFro4",
  "key46": "4nXvu8TmgpdbyDtQBbAFpoQvZu265WcD7WymJoB7sYG7FCPTE6SFmN6m6L2AqgSp7CKt8rdXhV5F8Bwrim9UNMoe",
  "key47": "2XUu1KjFi3WcANni5RRSC945Lgy2m83wU3NRztzb6QnpKsK2ui57SukjTdVAgauyNXfZHwq4moWbmCSuutaeFWie",
  "key48": "rSQ62Cm8bczXKXtQ9RHsU52n5xMqJhKV1yH3frY6arGwv3iR7eNTMg5WchjucxHLgCZQ8KMiz3ezQkBQm3pkQ1T"
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
