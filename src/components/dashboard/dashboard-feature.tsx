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
    "VtePQqUEW4mccgu1NeK6V6aTqxYxkWoXjWUbomMKtifu1YwkAQchoTV11yvVjSq49b8F2porxcu44Y7syFRBZWH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GXVCWzeiB1ivWNSP7EGxvzHinNw2nHgELByxjnGnDAngejztWoPn9DYDLkrddPDYpgJktXxHmbXjUpGx5eaYwCn",
  "key1": "4EQqBKoJxTk4ixZQJDu2thoP8qDuvGgzxwDaZ2KwSx1gbPPqYit9Aas3wJmW6XzN8hLgrEg9rTbWjgKb6PsazFVt",
  "key2": "Hwafwt5SjKqAFxuJFiiv8LFdxRhXgwoacvhkHYxRKu5HH6jnHe3TEsJHG5KQpuoW8LCH8W8Yrq6CYSVTnqwLLzZ",
  "key3": "5NTMdgcdJPtAcoW1YH6t7WdH2MhGvSRRu4CHPgDVqtLKjMeAEEuhtKz5gLx97k38pKiRFokJS8zCtPhum6ZGkVwb",
  "key4": "4K5pnwCLJ7635G4dzQ442d13jcnhx3y6DSYRgxaCsNAmPg6C4Pj8XTxDsogS5XuTcwe9jSWMjYgdTnibaJQmNUvA",
  "key5": "49Ey8jrJaGQc8Ek48ATiBkkKjn5QHeR72U41D9ksrheCEoAUCTaGiULYBhYVMt5VzWxjHvVHuG4N3819SUaAGP2z",
  "key6": "4gsexbmWfjgCSEkTfbS1gSi5wgxiiqBWbLVD4XDRZdXhBD9Hb3de4JccGDfeJaPAxEAmjgbKY75fseABYRbPQARt",
  "key7": "eFv5YgHoKVc57f6BG7zYWV11nn1sLpSxXzjTDScZpxoz3STggW48MdkDubiLNMtNY9TQ3AAD4LkpvpyAqSxsp9Z",
  "key8": "2enEF4iao6tpTpj6ZKXqXXAsQWrLzAWt6gy3RncrLGX7853N2FsrjRej6euNGN8RPRhLBMHCkTKkDFUipHR1eQUX",
  "key9": "5MsmJm5s7VeWj2vQQ2G7RAC9f9eHJXEdkfzwCPh65WUM2Ai8aUAtcn7u1xekYYHenjeYf4XF1LZAqDMhMezV2xQ2",
  "key10": "5m1WRdRC6KSb8tf2WMrSQzak2nzomRFztHDRGyyud7wH1ww1xccayvWaWSRycNZSUZxk3jTLfugyhv9ZVw1ZNmn",
  "key11": "2ddBGNvcyDSLpoYuAUwGBLYiKENLryYNwRvDR47kfWaxiSGYea9ADjq2wU8abrNdkaDB7aGk824jaV1174RVVeB7",
  "key12": "3NqgbEPvY1NVVsWVG7TCpd5Es8GCnSpiMTLNB5ZzqJQhnGYrnapeXRQ4woHSryPT5ZQoE7RLAejLGpQaJC6gtuA",
  "key13": "4semZ3QDuizMuDVLQ8RgZCVWDxRnT8kYV3rHKsdM9VN3o4xCCNNkXBpPCoK4ACL37jCyjiSu8aVtzANHNe5LY912",
  "key14": "3eoUgR5VbkYWfvfow1oohjKQ8tXik4RTQjpBmfA1E1hD9bF2YSdigwfbCz9YzKjigufFng5AdNkiar7pyAA9Xp1g",
  "key15": "qUG1y22zjnhBoTxcgAveNaA7FXxfYi1csRymn7wCchkt1uxH7e4kKF1ND6SP94qx9XEiqvgnE4aXrXYDbZ1dhUf",
  "key16": "29DC9D6MvReRN3TBBLXW27eJR2T1bxAwHuj6VQsVEUFGUcAawedxw1xre22KHo5tw9VVmDiDkx2JkNpvt3L5Ko4X",
  "key17": "5N8TmRQqZH2nxMmxRmEC4KX5KQq81LFgrZA2irokyVbyCztx7Q3kf75rWnqLTcRVUjuzCTL3camczYu8q4LQAybi",
  "key18": "5KKvGvBCoaq8qBtWLRZySpaFDL8cuQDuotF3figHPgqrBQjZvdFEpcHH5fvpkYKiAkKyJxH3rMEhro2KueAyTe7j",
  "key19": "59sNJdggxQafkres9BgjTDH5aygKTeEK4e7YJvm3HLZB6FscDTWAqykadvDDYY3Qq4CCbdXvSbJpii7RbhjEBVVu",
  "key20": "3s7PbkSkjVbjXytViBDSBHGwp6F9xpXbLQavp9gx8rhzWSznDD9ccTTg9uKecW7jf3LNaA51RqNqxbdjeZzAE4Yj",
  "key21": "5b38K4tRVD9tBLJ7Q2dviP3JT1vsLVd3ezfofBsixLxNgFyxaT3oYeLHgk4x8wqAvqE2a9PALuRSzEqQo8C9NGCG",
  "key22": "c9EUxSbdfWHBXRZLQ1oDxw3nybqBoqQjzD4GVS3p4TJf86FcNs3xYEQaejPVcaAAver6uWkSCLMbH9ZpJUvcjPA",
  "key23": "4SygnUZk33KwZMiREaf4DkfmCtRKrwbNNvU94aZchkcCyA4WZroGUjpdSjHvCbQ1nCwbbVztCiZZ4L2pu5VPXpyg",
  "key24": "5Zpwd3QwpsaqWP5zArPyiPBtsBGeoxc8KTyaVy7jj8DZvSKbMQRbxoUaUs89TeWLPWqaF9XDZDZQuamj3PucXVN2",
  "key25": "4BYnETo3XNHetQnmKm98pJZe4BPHxCbuQZz6rJJeJoqg6akLtDnZCdHJxrtr7CbmNH5zzGYuCmHRnE1XLgox6ZML",
  "key26": "R7j2v7u5UsbGBy46zwo6QJUA2jMQ7X1p5bE9ozWTgcRz8gtCL3rZhQDgLAUrk4f2hdgoWWo9HZbJWNSqBLfWwZK",
  "key27": "2K1c8FnqHhjEUx84h14ngvCpR4SGruAoJxzGk519kYMoae5tWN2Fd14R8FQw8SPLkwAW1g5UDub9hdeuAoMbMfy3",
  "key28": "2Z9kUkEWstz7Lt625oV5AkfeNjUBqfyfkd4Z3YLGeJUM5EXzRArVuUD8XuBjekeeawBRP1mzrGfFj8guw1iGo5GX",
  "key29": "2txVk6JKovukKGC4F2YRsnftxW8xHhj5GjzXJLAWupxEvqbH8yo3diMex5HdmRETA54CTrtbWq2f75iv6Ua6dV8G",
  "key30": "5JoTGMDbYfYskXsh43DEjsduebvFGdENaD87tGYC4Q3svmPTG3yqMdwLasxZLSFP9MdeUnXGMcEni7vjUfohrtWW",
  "key31": "3FyoGq6KkuPeXwHmnA2s4u1iZpazKPR4z8XY2tzjLK3JpEmi773RyyAeMpk23ezH1FUko9HxKZHXT7nr4wQuX9H9",
  "key32": "1fbwRqbYnAvQ4j31a1URbHu2XfNnLeFPFYZ96MPSMYQxPr48kdsKGJxhC5wNkCXYYy5w4PNjNetLFpz3H9wX2iF",
  "key33": "2jd61pKxc55P96cVARP1iS4T5gRPjZmqvAikSGuUPqzsDpopbiE2H6Q5CtvpFJcDnqiYZqAivFniuHvJ1StZ9EWv",
  "key34": "2e5jsfdRFgJvTyGLAL58gs9RYeFtWagoBPkgJinMYH8VSC6pKawwcwtRwCnS4cvZsoDGZv1SVymZPwPLidKKjrSp",
  "key35": "3YUB42USc29ESgMZhpa36A9tiAnDpAPX3dAFwCZjzUMhbqvnNCrCXY2YvvdHPCWHWKrJMsf5fngZqejvWUtgnrk9",
  "key36": "62YAY1Z2VbfeeprUtRJ62Vgo3GFYda6CzZYmNcKcjfibP9DGetiJh4dKvT237qwnXAGtFk6NbwDE5nDqwyYpWMCe",
  "key37": "ekFnhSt5GBY7PCgddt4jbwnpE9fTS3hXAbnrRF7ujfTMWotNiJk5xiQJEkaVN88Xf1nFiZfptcb5D5P5ycsGa7U",
  "key38": "4muELVajX8KMtBBxsJNKuanvrQp1YoDjxtKdxmMUj81NQo5ENQNakQfErjit8wfWhCTbxPti2gsq5pQkDBopw1mh",
  "key39": "5s3j8LTk7ZgZCaFR3CZWHWgy4ppbBqZ4pnDM47FQKxjjpyRhqC8bWz5LJ6MW7Q6zGoznoFA6K7LJkvmgfRXx28uu"
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
