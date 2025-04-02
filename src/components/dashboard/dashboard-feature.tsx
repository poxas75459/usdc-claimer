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
    "Njy3hiZrF7FfzBxkJeg6eYkairaUbpdYezKJ62b16z3JifXQYRGniSQB7XdqFbLuKDHD1Cz71GnnN9ZKDkovDjR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MiuVv67GCUMTg3XYXkUTKvv5W8aBMtchKAzZTgBPn7bwtvp5DZVU8y9guBVpcaYKeK6B2jgYmuZYjyPGMs86DaU",
  "key1": "seGYk63XWQ2KTnZm4JjAHPaQpekmVyrMMovMnBvzKdsnso4v9SVnWwoKZ8yAEXzMk2yUxwG1GDjTszP64rhhsev",
  "key2": "3yN7g3eFuwdNgT8CtHuRE1MDsmA1eH65fjLwimuoc5163hV4NH7uNsuXw7qACsr3TanJe6adB5S8gqFBG2aDixWQ",
  "key3": "NKQEKHBLPj7pS6bHQpGuP9tCQWpzp3U9edHMVyHwTDhd8T1RfS5aVQwjGSWSTm85pJqSSLMLDJ15eWmL5Ta4GWs",
  "key4": "5iBwBU9E96PiNX9XTjXS4iC6Aqz3oWDUVJhVTLVMpeuutWzbaDzDSy4Hy6zH9UEqr3EA2197rFx71pNqmPpFUXan",
  "key5": "2F2EaSNGyw9sc12GPam4ZRP78mKuMjmSDe63X1iZkeUNw7zMxnn3skSEWMLtz7zVA4jW9VPrw4UWziiBzpzopbCP",
  "key6": "Wy9wNezMx5QX7rZ5spouqtqofGmgBs8BPNw9ipoE2WiHLeuLt1jH3e5T7CFPQh2tqzhQbgpQkp2pd3grRyXMa6X",
  "key7": "2rd2gqNuRg8pAeYZUeFmBcVx9q4JQytsBZAB9MEdpzngqCXuFZ4tah8D5CRTM4GDMZUKgQe9Lb8HAaDTb3uJJmMy",
  "key8": "2guyZeNbzSYrhDEuFmK17LxDhN2zNz8rRcmwg6yQKsaFkmhc7EotRPATRnJRt6wsd1CexoMyNVBay9NmDs3X4xcq",
  "key9": "8C4JMxtYTCvUSVErFiYnYrKPVqeBa4DFq4AwkmUJaRehUhdusjzAFw8RRNeEH7WuJZhUNKn93EttT111hpdffKK",
  "key10": "xt4diDgzFPWsWQZWNzbETF69KpRZPzjTCK2rKhDtUse2HBfaQ1bKV2hbXbn2pzthVhEceDv5VzrpVgHhxiRq46C",
  "key11": "56nBVbvnghRe8uSjWPLStegPxGvZC27nzUyHMuPDFrZhi1VwCkJ15NcKunUXnoV3h7XDrcHhbGfWuSfzt7AhC1oA",
  "key12": "48fpGGhAFCMTu5UgYwQis8Fq4psdEmy3caDDxy7xedasV47DRTtGWQvMd6XKGxhtBXQ4utt21WtNZLmRjBVFvioV",
  "key13": "3dXJCprTgrLsWSZZFDHsiyWCDN65RixYzjKym6TWDrntGwS4id2ZdVRMTYiG1hhamNEYQ9cB7hvpyywmGezWg7WS",
  "key14": "24DjosKUadnx2yv2CT65ZGLa2t3LcUEqA9GdeENLbuVjZmBhbxv6i6CN22yySH2qFtbiGbVffDrFK2EG9KWbrJiP",
  "key15": "4SxpwkB4y3SfQ5d6NW6TVdgBggHAnASxfZH2WnaNnqpBMBbfp1jJh384TkzYJvvbze86H33vTdqptfUdarmjimgw",
  "key16": "4yb1Qe4EDaKWVGVo3MyUasLeRUjtC1pKhVwkJvKRezKVmjWVKvEzHKYhs9dY1qXu3CgADR6mBnoVnfNi7s9ghMjc",
  "key17": "2gso2BL6piYPnxpv7nqQD2ouoR49znVNKqPowhs5EttXtEpfUG9pLV7mHLL4voLL7tQ3Gs74iwEk5Q4y9owh41yq",
  "key18": "6FCa4VRRf7eAk2Z13oth1RifrxfptNKSvyHL3sCEo2X7TKv6HD27YMFnAe97aJWJEpmBt5SZbmDnXm4RqiTU2Y2",
  "key19": "3nua6TNWqHyvntH3SWjHmWD1GKvaN87rQjgMGeDd7LiNwg2tZcdDNanNKxd9fpvL5DuDCtZ38AYnXawhpgYYbCGU",
  "key20": "wsuNUhrPjRmSnHHNgFoZrs4e5TXE8w2kj8uKhyFzkdSFaAXEc4RQLyVgEf3KmoACX44o1oy1HZjQXmtp6Ckn1tE",
  "key21": "4KwMonnNGuWPeh8VihAKEnH6XBtfC5M4H99GHkYRaE4nmNwAJNWB99vwV7GMX4afjNCTofivH3NQEvHiSNChzps9",
  "key22": "22E8fr3tqiSumsizHLwbwBFf41FtxW2aF6VYtdqyLpnmpLEKybikMBhAPopvtjvmnZ5yt9paeKmH67kbXrYiuufN",
  "key23": "2BXZtHFfpuWgwXSRqzD8DHn29EfqT3kGAPh79w2nnSVoZjuzkzRyugFERt7smtCN8Vunp6QHJRPyb46GE4wYS3hq",
  "key24": "2n4FdiLWgB2gD3oBaBJRiCok53Bqd6dLvajim2Yt8rnmh8u5B8Cws2xgHbwEKywUNNE7xANNCByfcGSRyh2KGLip",
  "key25": "4sqSeHJv5Bd1akCAQyPqXizb3Hp21PHbqeCUYG2A5K8PxEZDvXL8xjdCBktzeJZdq8t1WzvAYsMKTm3XDxAfVMqP",
  "key26": "vTKMcaF3xgdh7YHotzTnuxdB18ALgzr29roP6ypuQwBtTJgxV1yhKxAWqY2fwtCK7xMc1QLcqN9hNzUT9YRykpc",
  "key27": "4wcNpLbeSZjDTJANWAGJ3ZNUgqde1yTEPpBs8VJR6gbCq2cbFWU9gd2NdZQJ3FM46kGfvhBJuifeccUbWL7EJrBj",
  "key28": "3MkjMWX1wiXucNHKpB3xC99tWbP3oHK5ZhaFM5AZmd6Za8qWHmwyg7J7nkaULPty9jzUQ9M5JMi5fYnYrmkbvHSx",
  "key29": "5McxTwzixr3TE2vokyFRMzNq3RtAj9y3HuJygthGG5UmqfPH14zEn2hUhpBTq4BWDM643PFxndaHZrXZ5epGSsiv",
  "key30": "66hes9pBYZJ5RRdAtDX8bkjv2hBHhDGdcyPFEqcEy3dMU7qqmsBAkpk6TUnRj7Z1kx36muVnQFgUs9LzBBoHUpHr"
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
