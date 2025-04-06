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
    "5ueEao1KGNYLtHYuWuZMqjVLzyPgT5EYhECBjxADuecJPhSZsEUq1F8YHxd5C69krnp7f4UTbzLejuM63n1vhiZF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3a2eX4NG3W7ZnFPdcjM7VixHL7oBDVdNdQfaRwo9bX3jWEEUmwAZy76CAtNSSHxftcbpcP5uRvRvSQ2Lp7jRmuRG",
  "key1": "5yWh5WmafthuLrFpxUQPQyuBUGCWakgsV7Wu9mFEMfwuPsofefyKASojGtvR6aA9UiBMYeYZrmZjrJfJ87xzC5NM",
  "key2": "4xo6HwNH6uyb7X1BZFrEDvg1Dq3TKiF3PVtMWT2Sn4nSJJT4h2RryVDahYmRfwmK7dJ6m5RcNxL1HQ693tE96NZq",
  "key3": "3mu69vziBrCv95VcHb6pw9wzvLnQMtSUbPv6ZTkLhBb3tB5FfGhdPsP4nFPEi1BiA7mJFDcKZsK2eZZfqBZoE2Fn",
  "key4": "sMj39Hjw1ocdViBnHs3BQov5X44pEX7RajDbrx4n1ib8rijDMxTu16eWJPvGDufbGNb92XuMDsv4sE3rwXcYqgn",
  "key5": "2JZmqUfsUThPb4u6KLhDs4d6aYmHeUg96Z2biY6BX1grdVL4y9CnkJ9zToo9ZVDk5vj7BXw69RAzqj7hWts6Xq5t",
  "key6": "43GL6Eo9rdp1u2CHbuNDWY2LU5v7BJLjgzXMfFGKum6fQENBqHczQSAj1dEun46x1SVw93WDd6mmMeQSaMGWy6KN",
  "key7": "2moKPxyTcJjwPZ9i1Cjodb6tfU1keruRMbCUk915XkQbxxZsmNXHfFS5y1L5WRXKY4NV2D527XF8334UPsB9v6Ax",
  "key8": "62vzwFyqtZ6nGwm8RTGismc4rfiBRJiucxPSmKYBgYtgZs94FFPLdcTndyJeUJy84CRfZswkKm3XyJ5RK2o5pHSg",
  "key9": "559rJaj2k4BuYTGiJVYUhdkFJGApdXjsAX1JWhqLZ3tk9Kvn9LS4LKvPi5LnNDssjfKawnqdrKKk2N8iByPSL3Da",
  "key10": "5T3gB5FoqUS59w4miHxY3tK1gM3e6Sz9YMP5pB47oocAJcr2ZcqQLm2RpdtQpQVCsf8KzqsbjbAAAnCJx7M7vvNC",
  "key11": "5By4CTuB3c37CkZ2TwznhcCjQdJgEaZrsfSrgRucR8Y1GMXvPR7GJboKymHLuoZDcmwCQkNFHLXfqkzoA8oAeevR",
  "key12": "3mP28paQWYdZwfF2VBR94hkEJFGNrzmov6e9Yfnep4VhG7JkUAoRPUZe7HwzRtkzjv4bCeW1cmEJZWUfAgueZxPA",
  "key13": "2KCqjTKzZHxZsb4v2WLa2CX8TGB6Njp6WfFtKR8Am1Q519rBToPs8nEEvHJCe5a5vBcUgcwcQyWf2EppzFs6Te29",
  "key14": "4g95iPze6KfkCgJKxKot629syF1Fe9KYAk6Q1d7xpon4weMtfzYvf7i574Zp3SasnsehknXha2UBXSHrfifiauyK",
  "key15": "1nZYNHZqmD67UJ8Ht3ujYeP3MTkUbGNkWT1wmSfgSMYCxQokUKmqiYvdV5AmqYFgghnvE8LaNGFnNAQH2b8KYeD",
  "key16": "5hJAXiBvXiX6HsKKUhwoLZBq8irMp5Pv3gJAM9G79fLauqsYn3fSKWDc2tUdfXxtfXmcf1NPgrH7L13hzyNitUHt",
  "key17": "3hhZ9zHPn8FTxoDBNnR3W1MbCTSaCUtXc1cx5HqnnNRwgsvjqJraY9hkgyPQYnizkz81ftKfpbDyUwytV1A1YWbm",
  "key18": "5ufCwVMHmh9bBeGvy8jUcJipYdXYa98aDxeTeW3xwHFwoVeH8uJdtJ9ZwRr6Nku35aW3RYVtHvUfvHsoDNb8cVhy",
  "key19": "3jwFMjR4Q3XT9AKTm7qRYc19iAdkwFfR34yG9kh7R48rCEjuEiFFvFuhGKtfeUm1sUoSdXvVhdbCqYJyiz5Qiwo1",
  "key20": "5gptYJreefgL4tZQ5ht2nwawRBGy6sZaSvionTuWpXee1ezocUHDTJD1nvMEbQ46nvDzT76BnKEz2swFB82oqdZr",
  "key21": "39hGmDKwFRvJLQ7C8km5sVh3kju5YrHJB9ruvK3bDrYF2zJhQ6xfg1a52pXUH4BdsszCnbHxRpnYZNhspq2sHw4v",
  "key22": "5dmVSWGKQV3KkpevtxpWZJ9ikDKag45G5Wrxh1cQPj2QB9A8Dv2V11HoiKBHBbw6guBWbr2nas4KM3E25A4e1Vth",
  "key23": "42M8B27BhJtxYL83V1DZjX4Eyesw8s4ebEyVsVvQ4C6tcyNjh5Fkq46NMg9opAtHNc2QoxGo6Uvp9qarTSqmsQ9H",
  "key24": "MY7skiVnVebq6u6wHnLWcHozk6Hwi62FbEg7ug3vYxnJxP6PAFt8rcztkQ6X7wQmgvNWPW98fwa4BcEhHMMqPe6",
  "key25": "3tDHunWN8LqAadDq8QKGTeAPzt6isZBLWEJ8v6q2rYgNy3e6hccAEtZBgid4LCWHUigiyABusFT113NbjsWzStqJ",
  "key26": "38kW4s25vU3FFaT9kpYEtSriSYDN6ReKNDgibBSpudraQfKfi6LsgY4i4ayokbNvSb59JzjboEmAfjTA74sQqhUG",
  "key27": "2EzREyZ8RoCnveJkcptXb1dBaoB9wyoC5F5EYgg8U2RMf7vxzrFHRjbfHdM7a3T1k4WJ9TNmQBQ6bDAS9YZCnnWj",
  "key28": "2pEz37oCiohMBm152UL9232XrxRgDoioGLyLeDCyzxN2EU9CvJfFCSRcs7joNJQzbA4dN4J3VP2hjFYf2PNuqeoE",
  "key29": "BLHwvN6tXFt6RvWMLKHcXZn1zCz4hGuJTE8yK3GpE2s9HALXqmQgNkvsKDLtBBdnTikLCj2mpSYjcdRvVNg16qg",
  "key30": "2XjNv7cv46bJGnbqHY62DqEBWrzrMRrqZ1HyHdPiW71o1FLMXQu6yG96PAXgDS81jcCdw8QavNvxCimB9xjjWMLY",
  "key31": "98rjE4smcnfLcCzuDHqKnza1X4KiTY2daH96MXCxU5RgrsHVYDxrqhuoi34FPieukJrSxgNgxiQpQ4JztZPc27W",
  "key32": "4QNNNBkNqRYar1an3BqfbfRNgVFgUWTZgHT2QMQb3HBU8ADeP8UUxCv5rH8csdrtNmuDmDzDwjhP7sy9PFbiQdbf",
  "key33": "52bMTALZdnaFDqjNbCjBuDmuvWrcjwPdULENakqBmp5fumCFsrAHFkVUD62hS53G5p62Nf9J49iG2aaK4es8THQK",
  "key34": "4jRzeSF4uMnVkPYKg8sNkykWug464Ur5VU9g5zrKmaJ3Y5Tkcxg7aN4a3tkFcy8EYiVXqspjaeyZLjSbXHcgAhfb",
  "key35": "2vJ9srRTy9miJwYy5mvoSGdz8ZoSKyH8LarJpJ4A9hRZfYPa5ygfqszSrsSuk9x9w3Ww88Y9Xqa8Mb2otsjpit1y",
  "key36": "2kxcYgC8Muo1o5G5TuZDsqcHWCQZqmjgrtN73yBasCXuGoeAfDd6ACKghgivDugE8GqKDEhdTmeV55QVjVben7R3",
  "key37": "3i3JhyYuwCkyuR8ACjA4tyLYPCZRt3KtktYHVud5pyymwdpiSem8SeE48zcFhfaeTZLU75iGUJsgDiQv4qsMGoX5",
  "key38": "5nnUcNWjcTxU31Er7SJ5KXfe7ThuUr9NnB4prkcsvxJMftmH4RkAGkCPwzf2wYRajaFiZQo78xu8BaCJnpGoHcCU",
  "key39": "2TbRNokdb8Ds5f3Ufs6Nzc5R7xjEqo8a7fi2SwRjTVw4b7iTQLTn5zt6kXHBMna5m5JNF11tt3chDR69ZvjKcJ5x",
  "key40": "26Y6bJe9xAEnNxTTzrvVTdfgBUa6erRpNPSuNddF7jnpZjKB4BKE5qmgWkALR5bBuA6fXa4KTPu2xMitN8xeLUPe",
  "key41": "2baH5bu1UgZ1F9n6Cs3f87av8DSbaWVKD4bzfjePNTpvDfbzgau6anahqs4kj46bgAUZbHstJEXK9NFR7xhn5qst"
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
