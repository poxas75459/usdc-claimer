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
    "tL9HYnFHyhYQMBkZhrGdF1tZoheDoFFfwsJv36iFu3oCLxF99LexZ83TrhJ2gUe9iXmtWxzotMDLUMpKLQdZQro"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v1FfEGfwAzb8h4gjtUjpkfNn4qF2t1QWYzpjAfGkyzU8erA6Cf3V7AmuM7VgEgSgXTWBDLt8LNGeoRdQMkRNNyC",
  "key1": "54JeLoeQustPT7CB564CN9oCjJ45PBNgFgbdJRpFH7N3CFpPWd6wiAJne5QSCk58U3SfBaxrdV5XJe4qmWxT8fNS",
  "key2": "5ycsd48jGTkVvFUohqep2bQZ2v9y1qcDPQ27RzndXJuEnfj3aJZc2VxYpVkKTwoETaHWzVszTffCDSPzkCwfXByb",
  "key3": "zkvLcimJLthaLGrr36QRH9ih6C1hLKauFhjXTuurqBNXgCzJY2evLFHVTkNED4LzpRLEZ9n36xzzR1VVBq7JBkJ",
  "key4": "3S6Qspm1ZS7arqE1FyPhBoi8juUP7UoejH6YgxrWuUpc6gvdC44XSvTtjeJgva1Qus9Xf8j7FKS2BvYhBLxH3g7A",
  "key5": "3bShiBtaHiX5EfhApsMEgbtdR5AvkW2K5gRzKuuBGJK84c7jTMHKUtSggESvptA1mqqGezf57nEvSZyzkEvW1cYX",
  "key6": "3gJpZuQPKUF1KCLk9Zh6B387wMgcpC8M4g8Wyt2nimJzBDS1bdSR2NC3hfXuUAtXQpVex38FuQF1ZXK28Ak1UZxG",
  "key7": "4F8T3NNkkZotwy2NbS3SnTyWmeUe6JJ1kRKm4FSksGrGxhhEpbNsbZteVAGJnVrMTWQ3DRjhGYoJwX3RVGhWGf1",
  "key8": "52JYARC4vRWhT8wA99UU4pYtutMUqhmY9V6mGDuHUXHViNmZ91oHgCg4a17eWFWKXoTczwGb9PnemswpDwKnXp1K",
  "key9": "4E1ktSy23cGacCcVdkzwcnYaiLjj2tGP2mxZtgdJNSeRyHjS8hAxfBb4dHN3TUSnwyNkcawjpkHDhP6qtUu8gh7y",
  "key10": "4WCHj4d6qUd51XPdvi4vb7NTo5KuF2FgnUe5WagVK36Ht8Wx7S32cEPRoJRuYFoJ9WQ5KtZ4XnsBEY2VRGaFGkPw",
  "key11": "4e6f65s3tZw88AJiNo4JSRap2UbdDGknbWELWP8344RvS9LxLi716Et4Q7biNT167xdoEtwyZ4NsbqzdkhiU3d9g",
  "key12": "2rgFN8zDZaZEy7R33WKJX17A68Pq94cj9GXvAJQxxnuLspPpTFiEAqhZe9pxZenAQ7jJrjmcvLRz6uwaWAsLbpAa",
  "key13": "4HJCyzj3hgByTRBZpjHFq8ptBecbdam4V9s1q9q8jWArzAPR6u7gprTtUux2Mmc2dHxumfjVBPzEyh5gFJyoZoAD",
  "key14": "3V4g1eEjWqdNEZEB1HrT3WxyNwuDafyGrXDr6gYogLykTtrgmi6pD4zFFDgucfCtfHeYHY5y7Crm3SdB92cG35JJ",
  "key15": "4Cj3ck7PJxt3ioTFYh8HKWrjW7AFnmKwjSPkTy4HnW1hCy3ahJjaq8rQTXi9ux1CKycYW67qVzd1JEVyWk5AJu2g",
  "key16": "3h5GaVw3X7eWLoJfZ3STVJvbEXD5M2soEcuK7pjsvsGyAUPmCygY6te1soZqbtpUtVrA5T5S8hmS1fJ7v5U85MyX",
  "key17": "Aso2hiVaSWfLmEmpECdG5hgpKmZaYfAsP36rHtGQD6W7JAar61pZa2QoPk72tiEKjVr6NYQswHPpzzyGTCeMVyx",
  "key18": "4NiBLsEhWCMMuCevELBCnwZLp647s7HrvoNesRvHxjNpFHRfybc5YDkFPMY69eewAj5aLJHhUhU2PEEK8x36oqhr",
  "key19": "VemMkfW2HpygCBsJrcW1MktrUfiDaTPK7xGZsRt8D1aqwrZFNy1xjFpJwUwgYd7BEeYBrQ2rAszAAV5y2GoXLZR",
  "key20": "38KDWCHYPPTHGivetUhMq4zHx1GaoxkQacHnxWpUYbVjbswLXqjC5FhNrHCP9GNnmfgigxSQfgTbpkgQFtmAQaJd",
  "key21": "5sBrVXp1y6pqj43pXqxf1peGh8YiX6qfvTjGh1wUW4uDJsFESR18tFZMHzZPMom1CWvVLmhoXQjpF6NAcJDrY2o4",
  "key22": "4Pu3vq7E2upJaYPeTidBdBYfbyaED3y2FrGczNAsf6mGcD3kq2TUCpqL9WiDA2vHDwFFMgstNMNKbyvvq6in2UQi",
  "key23": "5LrnhxJmxn6rRgpYqxBudKcS5Mu4UFzte2FCp22jmuWj83w1D6qXpWCEFKTWb4Niwx2Eggz78jLyYH7M2RnDuefq",
  "key24": "5aRdUarjPeH1tJwkfiE9CWKDZP8LF4NtBBQLTF66wT2Aa8mrw5P8fbuAUwh3WA3mABQdcxGYMCSEWxNm7rRuo2YP",
  "key25": "2EcnbezPiY9BMqMeh3oqFf9A27h53Etdf68eLNMT7YXZBgWNdphiaxmuFEzxWY3ypPCzp6zJYCR3EKigouAo6oYV",
  "key26": "4GWgFbSe3ej3sL7X4oKmjSPsj1HArqry2Jqd1By3JWASTZjaK1JUcYVh67c1M7VvdUxZgdncNG3gCutnW1PXGKj5",
  "key27": "3YX8qKwoyf7nXX59tRnxQKgMUFUaE3qXRrHLHsnKk3Ff67dKxHmfZUgZYBtJCRDp81fhK27MFFYHJAALndHcXBBd",
  "key28": "43kee2WMFAuEJ5fN7UzFEQhwCYfFSWbUpFwg7YqeeZPsYPSx85XqYywwmYiM8VigGJaDGZRybvXrXB8SAXWWu4AF",
  "key29": "5URpdpbi2sTToLUgy7CUHe9iZERBGSrpRcsGADdgi6KW1CcuZhpXXkxmwZ2r3DnNu6ceE6cFAVr5RiBME5p5YvKK",
  "key30": "5j5fgr1u9XEc63JmDd52khVaXn8NkwTHVLzu2EoHSgbq6RaVaDKMUKMhvGrJitfTGEytdRDswBwRR7kFanUfeGWc",
  "key31": "5ybv1QYspvGusHaV5ySw24TEMv1nFwor5hXpifqn2uRanXnRUyUgLcuXBXN7JJ7eifBEULMx82vRcnvN8cf6N8b2",
  "key32": "36UBw6FqsLL8ucvxNC1DVgRT6nE4R2uXLDTg4Dw5xYGm6EseKahp39BJogSrCraAvyhSb1nXGKhrPWnVRTVQ5m4K",
  "key33": "4AFXwdM5so7VYtC8iVvb17jLeyKZ76nWWrcNBS7hiiYqkzidiWTqgGd6qjWGm9xL5GV2LhPQMfBT8vakHsXBSUvU",
  "key34": "4FX63yscNEhN3fwYLrmaS3dCrFT1frpceC1hL6w3eE1vyS3K8m3827eEdmcNY6JvAvRSvYufXnDE3LQAcieTNhWA",
  "key35": "VeHSvcu2hdXpN9tYFeEMxEFRdNxNBtReGjkGAJALwAHAJfnJ4cXJ6c4jmbQSYts8Dnugjdr9mZYq7SLNLbaauku",
  "key36": "4LgKQwYQmcwku4FY3msWz47Knw1pZ6sFqNiQ9LNxXz2gqN9RYVgFvzBoFDBtggVCYkuejFeRGhcYXZ4RU3CTbvmZ",
  "key37": "57cGjGfEDASsDfwcRfJ2u3V4iAb4etyjwAUP5KyWZ33NfS2tEEMW2mbsKec56J9cHiSbfiW7ScqBfjv2ssjTMQxu",
  "key38": "4tVVgdyepuB9szRyHQtMJYRVj5SiQqYwikusBqDeEXr9wvWZBDP9XTYDbQmjT7UAvqsTHFcRPxbiTHnnUMHVMVUZ",
  "key39": "24ns1hL6G87PLmnwqiDAQKSWC9iH1Crp4c184D4SSdeYAZ2bUURUtCztLnFsS3yuTNhFcNFyYaaxi5Hcs8Q23cis",
  "key40": "ra42XyMhfuwarZD6SxGfhctFv9TjUrzYvkaKiFM3gqnz22pm8yLvZobGdfRLBtiBPpRcLEBcLDopjyiMVRtU76u",
  "key41": "3k8ZvTN7Qy4Ua2LasN3Jk2Sb8BZrcQfzKA9RojJR4913415dfJZQ73ieEgxhUM5mQbxEU9Pd1KMnUuUriqwJ466D",
  "key42": "45zYMNmQTfoefkBHLCDkwkMLt1NZQuFM2vvXaavREGgftkBYZnnuSEgHNsDJT4W68Ayk5VL6XEDV4jJJ6sW9D5HG"
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
