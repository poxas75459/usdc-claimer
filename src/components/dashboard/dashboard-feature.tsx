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
    "25QNFMHemi5dyJ8fC3KqNENASXmxhwYrkzKdCcwF9puTkEwKNBJn5peYjTBXPtPebrHzkaoveinXgzngAmcbCT7h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sXXcVzaTAJ2vANFk3qXLWMd3cjJJ42FVPPKkRqfJphtgUDdWCXyPk6Dn3ff5JZc7snnwPRV9a2gL51uCNQpVD7D",
  "key1": "3Hb8M5zR9HK6bW3MQdcDRuYqwbQtVmBNWwzpQ4nmcx1YTCoTDrX9rztyEWTxGG2A2zJjL2mqsKsAGALkkuhibeWA",
  "key2": "3AnuGYTAPVGy2LtuMeKEdfWdR6WzyHWYKrgNYKwLsHVFDUdjF6QXNqiwx9Zkm8P3jxib51xqJ8MZ6LRrD8TQUvoo",
  "key3": "22Zcna8iZAZFvBi5m9VNUxP1rAtKeXnehWDZGrnd4MzmrUg6fAnj6i1Y7r6jZRw9JGqAU2ePW1ShECx6CrtjL1TF",
  "key4": "4GdMN6aPAVBceKkXYJRtW6ENvGASMsYwWHCQE35jD2Y7D2FtRSu7VyCHTfkZ15TijYJF3PZU8XqSfFD1JjRXkkB",
  "key5": "5Xwd7N5TEW4iYA2JJoFJvXX5xg53QtGbp9wbqz1PQLvZzoXw2BVCBFnuzYYsZBvzWyMWdaMHWvJ2KnFqFRNTFp9C",
  "key6": "3WWMjhJnbQZk8skirSoYJtWfFS1XwgWYTGiJDAUVQRG4cTVLAg93vjD2YnaKtpqDYzWZWv7UQaGrhubqQZvdGTay",
  "key7": "3C9N7BQu1DPHJpYRPwF4a4eqzvgzM8wZ7XBz7C9bQb4LG3URXvtRfTkqehum94p9nDK2Y8ihMoJcW66qAn3vBu5C",
  "key8": "3qAj4QuAFMF253CSTRjvw2qiWrFmtZyTp9jzhd1rd4NtuRx7vqwGaR8QoFdno1hoy4DVF9UiqQ832bJ6f5reXAdB",
  "key9": "2hAEyuVqN631ZNrkcN8ypA5SRta4gk6hyEbaCHyuuATQGC931d3WKDwQT8UknQKyTbsD6nnCbXuQBhMkFXjxt1BW",
  "key10": "RJY2ZJtgNvd5h5J18KgTV5qNjZP6e8HoVpwDjk4aMY2NwXtyieDjC9d7sa11BB6wHqymAbSScYn2uJSJFFaVVq1",
  "key11": "5Q6s5fcqgcoxPZRF7z1MiP1Zi9ByDnCYxjKAorSQQTzMNWgTcMPzFXaZLNfyXqP6fyx2n7xZCSvkJEABZ4iS98LY",
  "key12": "219tqZa3doJBaYUeCee5xJj3rh5ydFjDs5Rg2kPrmtFZdD7XauUj3ZsNQ21Fz93WW8Dzs1acpTKaja5Kx3qWhraB",
  "key13": "2e5b1bEFX9v5rq2Yh6pEuJYvj4mSaPcoeZzXBkDgwomgX2CMJtTGta5PZTDWNKiSN6VZjiTrGgfBctA7Y9Y5N3by",
  "key14": "MMcc2FDFmzd8HQhN4TM3oxLQm3NiHo6dcZUY9obYkfrEv5BTkQTgzHb4ZRrrzWzCWyvHLEgKM4wCuCwuyjvGWmJ",
  "key15": "2qWG5soNvs9szBxUdKtjJU7WwqokZquyFkQHrzaSxnuhjjdSBcKX4srKHtNxMEEpkSFte7SsE4v3uo63a3mXZiYf",
  "key16": "3T3duzXa3ZLgLHCuhKzU4VLiUKBgZDyGtsVdCTrhNfsA6mkHkfGLKLwu1VyRREsCqBxogz8SFZ3Rxc99wdCazLbo",
  "key17": "3Xw7UDwRH5ZMzmPuZXxfGGkX13JH6xv4gf4JxnHdaaH5Zk7gbqf1kGdiPf5U8cPGicKTLXDRJwQPJVFhfNjCcNAK",
  "key18": "4nrfMvekNKVb5N9MyWNnrCSrVAc64UEjBM8aqoE7Vv2wUYooTXhRxAZw1ZPaWz8rHKMKtY9bBYiittfgYK5QLQde",
  "key19": "MeBeRFVLrXoakbFUjkcrSwRin5cJ11hLVoRwVEuDGD3oAoxMkrBfqmTtNtpxVVXe86RFmWWegNSNg98KfffXr3M",
  "key20": "4T7p8Ws2xirUZRYmA8YKiQJCuaKrD2q4Kid914nKZdQF2Hjnf9MYRNDCNFY3mrLtsQjUAb71B9rACzBPT2CTN14n",
  "key21": "33f4AW13HnGi5uVVgtSLNyy836g2dEobNLwWXejHmVeTFF27v2PtnPGnnc6sZwmKhD2TTtNgY5md3ZV1Dy3f3aUg",
  "key22": "3saxPcxw6n75RgnrJXfYbYqMN6fpDbGeJBbJ6DBA2UtNDPSLgqrVbmdYnxpyK4ekroRFpzBEVfVewwSBFqBbkMCU",
  "key23": "yTHT6VJLYeQ1Az1yjYWqEETohM2pYMwTYUwK9WaD1qXcA21feaoD2B4MCLqATbKqceUwyWZrwSD7GF56BZnv3M2",
  "key24": "3i1PuWjz1krPVYfaBuA1YxAdet8D1rrNvSirrB7rqffbVeHT532Mh2i5hh2RJNMSH8mfRknn8QBUzuTWt8sbnqg8",
  "key25": "LDnrkg4hcBdcuTNj7NtvDeypBZdQpNTctFSKpX7EANSbotgHmWJHXYuv3VNf1DJ7NKkLiC68mbRQDCEf4U7MaKj",
  "key26": "3MLfyYEES12rUSTAJVTfWAjuKvQPYKHRvGqVaGrvPc8MoQk3K7zYYoxCKGo8eP3mbjY8eTe67Egq8cmJhKGKMH2b",
  "key27": "3nnsbsgPqcag84mCfsFSChLC2iEnym1kZyWfEBDXpwBSJNwQEg8g71i2iyvH44CLfjEHqXTufL78URUt1nHxeyF5",
  "key28": "sgCqYAEDZVkxQCR8WQLN7tFAAYGXmEkZktHtVU5ZQ2uFpbsXnun1d1MeAsGB2vaNAZsXAQTJV9FK3KMTssRuNy2",
  "key29": "5gGmkVyyDiZUHkpUsjhagAKHWT8a3EQUutAJ8zih28cQ9mTRwQoMmK6mLdXdxkKtDmMMdXCsCzQTLKUy7yc4Uqn",
  "key30": "23RBZmSjC1iAYBC9Nzaf1rQ8X4oL6CzY2pFRjA35B7LSUTswgSt25m55FVwAeZ4L4cnXq4gStDABi6Ue8dnxwi1f",
  "key31": "2JFK3x7HMLCoqKV6uWS9ZjfrnaZ4Pikx2PkkEpcprgXePFZjESQoXHNjUpwUeuY8xotkLoTBqYYWdjKALzR3sHR6",
  "key32": "4GZnQjNEDWNhYKjHjfRZTEFHuMNRfgiw9MtUWEAGmDU8CCiHAwPe81pf1sYJ2Y69tkfHLxyWWdVmU75U35v6drRR",
  "key33": "9nDCbokaCBnjU65eWVLJgLiRPkDcKL7XWZsHUbPQticxsQmtQpY92kxMvU6JZZdfF67GQE5yX6ojtLfLGgbubzZ",
  "key34": "3JcWo4hyHUE3Fv3NDSmAuQiDx738wfzGb9PWvAMhRq5muR2N7iLPqfA2LmJBg5eanpR6Wq4VoiNJQXqhPNuZtbyM",
  "key35": "51MinMdFKMzaJhHPnZTU58toFn8xYi7GtKaL4TTnw2SXxWwMGzoq4b36HwjaU73ZoiH6Zv2hpkjNsomk8Mx1Jjib",
  "key36": "5iBneEm4CWGWQV7asszZbDRYb9jHzniHLFHFvJPB9AMeH8yJFRJeHVNJcvxJC2B5Ej88i1xmPaTSr2K1ANvZMXbD",
  "key37": "2UnXwFR7hf5S6VRPzwsfT7cWPjw7BijpEkBgNCYuTDR43S4v5Wn1iufR4G3rxgm62BsEXiNB8EshPS2JcJavi4Vi",
  "key38": "3X4rTdN4rywYRUok6zqZfo1vG78o5LQD1mRdb4F7U8EqW7yQ8W8gKgkK3AA7jFXLQQfRj1njmr4i5zAdddDMy7yc",
  "key39": "3C8dKNNpfWYrzrds4p3ZFPER7QgkoRVPAfchnzC2h6Cgoijwzkyjwx8zvZPjxLA1CiJtfkwGCQCpejKVvVZpUDV",
  "key40": "3ua2cckBewoSqhhHmFcH7iV8ZTfTmDEAfVSRCY86t967NhPrrAUxxee5XiuT8iwjM3wHgqMtTujSTb2FxnDwtQ9u",
  "key41": "5nGpDu61XwwASRDPLvxPdUEdy57DQTqjpLBkn1y9onD6NrCgHrLGAoeb3oiVK6aEuj9fsSU8i2n3KPDcrzA33SCQ",
  "key42": "3s6nqQfdsuUzQdq82G5kkx5t1VSqT6mHpERQhvG2dWVdpNG88YWNLuu2HDq6sLrKqh9tPeFoFfJtxdowBb3N3MYB",
  "key43": "2BFoGvQqAihwmRFN11p4ZVrTW4EdVEzgan2yZFUKpx8SYbkDfLi8oV9GoLYi1SYT3kTheoKGFBTiPLrKeDMXd7Ew",
  "key44": "4qVCCsCCS6afFtuQeR9wLcYwpRpocBLDFLmPangRZmgL9861jb5W3ErQ6KarPtm7pYBzbDefrzzvwiHuzpBLq5xc",
  "key45": "5BQbrVhvpbtPBYsQ8fzJ8BqkjA2mV9jozsFNY2RiU5enfHbDBfSxFZEQy8NPNngP22iWSuv55DuwZjeuPYeNxK88",
  "key46": "32Mta5VVZysQDS4h4GBTD8cxYU91WoyZJfsqwK71CJJKj1frUPH9pknRDdMGmivQfuQ5M2YeWz4t11FPB6BsbTcP"
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
