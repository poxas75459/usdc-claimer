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
    "4LsMznpUjLD9GfnnSHemE3E9n5UAfDVQ3mQJENku9u4fcrqmGNvsxEQweGnNGM4MRRa7icSiL7spZy2GXrZ6yMHP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A5E1B3j3CvxgvGD367AeMhoUx6Yvf6jawyEQWFZFv7sYj3kGzDauNgLJsnL4i6ZG3xrpnGfdGJ8ucUDfqUCP7tB",
  "key1": "31TuCHy9UX6cwgeW3JHxbatsf4RFeo3jb53vx44QqiyRWWMFnayjJYdLQMb8UxS6PBHnmJFAfi7paQVtGkwop83o",
  "key2": "2BtF4rVbfgV4umTiwZtLm7SZDYBAiFP1RJxqDPc5K5MSmjBTXzPxjYQ4DF2Wc4NKA3Mjo18nPG74eJobyb6JgE6Y",
  "key3": "5a5oXdE7SWjfMs4yGZ8wZyaU11EauWKderCFJtpZDPkfmhp8TkGHXkQ5hunPRwXJJFt4r9UC73aUDS9CXA9L5CbR",
  "key4": "5fyDSnA3KJbUaYQSUkvh7KA78zy98NFF6EtbcPDYaeWkdZYLZz6pBmeU9JboL4Mmekc4fjvZdEbqL1vC2gw52mE1",
  "key5": "5kC8mawBfuEtdM5HG6hvgW135RahK9wTz7SQCB7qDnR732oyBehDcANgoRTj2uqHC2iMPzoE4HARDAnUWoDQvWoE",
  "key6": "Zf2T2xrrhtZ1hyuRoKfRdXm6haab8dUqM35msWSvBdV5TKqT3123tDoMNeVQQcjbouCVahQ7dfqChN66CvwXsPN",
  "key7": "2mkVgtiELieWaxADBRk8ueUrBd7JLZfW17z8BowSQK4wawUomro3BZkXGhsAhyUgiphMpXp4Y3g2R2eoSgHmnaqS",
  "key8": "FZ99xPkbWSmhRwWuWPp7M5V2VXBH4EuraaWyWBQZ6EyPby9nAZ3s3hXnmVieyk7Qb4sqUBUMne4nk6WzoEne7pw",
  "key9": "2U5zr7LyuKhVbkwXHnXqrfaaYw4H2xhei1bXKXNs5tvJTYpRAcej6tFq6tCb3KV4Y5weMyQyPifDL3NohwDgxNxL",
  "key10": "5RqsrYVaEAxANYgzwiyNd3ueuKyXBoNNoN5nedo7B3NtNxh3ku8W5jdvgoohhz5vGyXWHUYRBDNRutmn4AmSPhHM",
  "key11": "4p1nNvgm8AijpA46fGWTiL59VFEaqdt3g4ekjnGkSmsNG3BYSYyk1nwzXqtAxQaJZx6W8VrM8xmx7fd2DA1XvAmf",
  "key12": "3Gt3qF9D6Aw2mhxZJ3Zndu6V185rvvvcB2FJug33SAtviHTZesYncDH3tA2SP2VmuCXhPJ9iTxifAiChh5JyRVW4",
  "key13": "3wsQVWu8KGHD48dkb8TshhmtsQ1AXXDqkfkwTTFPMYGLrJkW7dDtbPEVTLCr4RbPD7Sx6Z3ZzUdxYFZ3vJ1QzEQy",
  "key14": "63mKBkufFhypLGYptR7u7hDYXrdKgvMBaxjbSnwKYBzoPv67XmqoWzdE5LPvvBPgm2auYz8noX2ptXxzJenrZKH",
  "key15": "3kdRm2URxMXEYKQAqC3Jq8yMnwoH4HsEni1WLyfkvkFCXqrqwBP5SFu4uYmHoFJJH5LdgpYnGuwGQZotenh4LZry",
  "key16": "oAQ22qpaeTg77gBqsPTiTMKoQfdxbv6526tJVoAXztZ59U8azDTCtGQ6kfBGro7ETqzDtH82rPCcgGx92MhRjnp",
  "key17": "3ZphpPyWVaKADjBLSyBGojhkmzKRBjJA1k4y6oGqW49sEZJrros8tuUTXRUQ8FmqBLMLWi8z8f8pxKiCsCWU93Zx",
  "key18": "635dTRAiuJNPhVSdUX6kDHFiXyDagXRhbv6QSboVVA73uAmSt4UpjAiJ8Qn6VYyS4KQnkbkaMTw9sAuRE7kKgcJB",
  "key19": "n3Nysd2zfYMdpFthj4AkLrAb3ZDSKYY8YtUZvK3eKrR7nEQed5ebjpkRBUc28ecSxRFQjBoBNVxHoHHSTNjAJhf",
  "key20": "66ctYm96U1zVQVaL2FU5tEkQqPMtmGxSvXu2w4g8m7LwBp9aXAEAnvVVdykgyZNR6U9Gp6TN3eS5vLH9yjj1axgN",
  "key21": "61U7SHPGpJPp9JcHPE776LhAEhkALSmjsDC8yks8KWhqT16gTokvsWZJ6yGibgmGjvKxe4BCKKdcG7fB24PcnKaY",
  "key22": "fp63qV7odr9sY2587gUoTJKkH5tngNxjN4ZgiH39CWrVLcQ5vSszgGyyxVWfEvcdbYvZB3iBjyaEJgk9Bq6ZnLa",
  "key23": "45J2P5GYFY6PQhXiqyLtEL3Z3hDpmtKStKv4U36nUKjMG3wKEhdGZnreTUn1C9PvEHiuNC8Lsb7qdKnBMHXf9R2S",
  "key24": "48aK8wyeqm3DXoxXJpTJh521Wr1TwXrQdBcFkZVYpH6fgYNseyL8AQZj2h4QV5R3TqvCHqq6UCm6p51o7QLaFQDv",
  "key25": "2VtK3Ho7dkNE2P5JPSQi249fptXYrgdFp6pRriUFT3ySmMgwpdQm77JWVLWDZ2DxoFEGMzffSPs9kWQfTEYdL18D",
  "key26": "2ty9YMBSeB9iqdXsWgd4azHS3wpYoJgXzjJYgwtpNhYM9GKfm8m8g7NBiqPvX1tCoxMsbfeTZuMLiCVcFMR81pnH",
  "key27": "45ExKXGsWrAspb6bRqniBfYATSs5Zumej5rp4SLYuidueGPDc7rbs42xmZjJdkQa5c3LhyMUfBWEnivfMTrdQeX3",
  "key28": "5GkXqDZafBg27tbnosRsajMarD3emjv9YMG2P24fbkx4QtHdw5H52sCHeBazfcGCo7eN4RXwdg5imtBwTZQ3JwCk",
  "key29": "gn1nM5zUJrFsCAv6DgrDj9azXrJqm8d1ginLw7s7iP7yQFPtMsT6GAR61dEgd6dujFavuFFBxHxVGxBQG3RTguQ",
  "key30": "3Dks3F7NkeUZ4JAhtWQSfFrVRMvgKK7YQARfVfWic2V6j3pvhjWS6KZzRUVPNesD4MRWYmVx5xsLevuFq2QUqwQL",
  "key31": "3nEiG16FfQBrnzVhXZdWMf8Dd1mTHRJLuTR7Q6cuaUjvqYWPJNU4zTWZC6g3spAjkGi3XGiwzaXGmKRAo9uneE45",
  "key32": "28yxzwPuzsN15uNbqa4pjcLpWtaZ6sb3RLzCD5QRLev9WNemBT4N1FDyiJk1qiXeh4JbYVn9MUDH8Z7zgCcG5oJC",
  "key33": "541i9ppvxdr8tjzdD2DWziNFJq2MhsQ98MKTHnLeA3zE5VR2kwDV7nXeRRQMsKrz11a41gw5TkzmhZmYZPxvjcSY",
  "key34": "4a13b5mEiGw11J3Azn4dtFoo1kgXExpqpPoDTMs6zkp1taBFBZtYufUxUMopKevQgZecVvCThDJJBomp7Jn9L4Yr",
  "key35": "2eRuyGMcpE7oBorZ2RMG5SHwRgZqdveYigQLQ4iW63HaKd4hfVEvShUGKJKW2MFmG5GbybY9oJTgXwbrK4ZVku4L",
  "key36": "42v9qX3h4Qc8PogWdLjydMbye6LiTqyAiSxE84GpVcjCiAtmrtrW2LrdkUz56e4ir55HmrNbdwyxBbuwFoNRcK5K",
  "key37": "5nt3iY4kAxD33p19ffYwwhsF2FnzcKb4oynJ6evM2hLMq2CTiPjJKVg8F4uuX5gZRP5uETgMXnaZfe7cZ7gF7Q18",
  "key38": "323tEdAfsPStMiPePpywup4sh3EnaQERi8xAeKyWr56R5WMD2hZsS9E9jpESGkiSDDVHrhZZwUNeGCPVHrb2Mgwh",
  "key39": "3vcwvStxjHtZ1WspfEmEvgXt3MCExCAbyeufjD7iUzKB7KKVhYS8VyWVeRxtD64jySNoj2b1umsjGNR3fR1eisgq",
  "key40": "z7Aaeuj4u9Y8ujQ1DuWJYL3GiunAuvPYQ6VHa6WXVBzghV7J2TBPVMg4Vn2wHTuNQUCfQPAuaBsHJBfK5UZtskL"
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
