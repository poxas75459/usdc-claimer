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
    "64VDGUyCvnJQ5Tth7sPtUUiu9ps35MXVWBdCoMCyTSDgkA3ndidgQG3DZYvmw9nyR8kpi9JYW8QeM2bti9REXRLV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57QwzBxECYngyy87yebGmY5djPJW67Nktv3rQSHq99DHJ9K2X3LtocF2WwAGs46vuiPcsVFMf38QbWB8emxti7k6",
  "key1": "gavjUezymhyzsf9snLwGLFPWFNNV5uwCMfUhvUzDELfYnSeLvPQxss1G7qme7FkCMKhofsGxm5Hb5kz2xj21CQu",
  "key2": "caeNnRExPiP1B2mczr4LcwmYkBwWPiLMvwvyzELXZ7fqWnqseuvQ4LmhDeHgWHAJeA4oNx5rpJviVWyKdqgLVbi",
  "key3": "3qaBoWisyW6JeYvaycrMeYUH8JF31HYPeeXWfi5VLDCx7GAsQNZbLg2teuf2CZkucaWgAAqHN3b9o3wKUoo6C4N6",
  "key4": "2KaqENR8cdetiptNSv2tStmnaYC7VbYFx2ibMWrUWZAxgz2UWqiHEUWn5U2qUqVwNDeHtnzT72qydJJNbvVRWd78",
  "key5": "3PqrhEAYnAfmPJ1qLsvYwu6pHToBvBf4kRdFUrQXkQXbCibdqxJmqCJjmAn4k3pDdKaDskDWrPYzqGbxTjsZ3mCa",
  "key6": "2qhgA1Bp7bhdtBLg42ynNXzTi3bN2bjCk6myc7khpRqnnb9DtnUyWqQRVKtZaw9PVWBwdzvkpuDsAjXcYs8ZBAAd",
  "key7": "5TPji9NTxC3sWq46nosZnKLikCMN77gqvtcgxLLtuAA32XJoYonu459JbyxhgD1i4oUcDvKzcumbNJQdEkZEfXyR",
  "key8": "EaJQq5XCP6ntexLXJ9Z1HWh566DGbE35vifqCC5yTJnEfPEEzR4TfmN4TiHxiu97DZNXENtt2SD67QQoChEMEve",
  "key9": "36YYjFqCsZxzCVxWWXjDCo1EfgLZ8g1PNqXKwJqDHiymTwCxf9BNLUomAASzuK8mqBUs5aSLDWkBm9VSbovaKnHx",
  "key10": "12ouyEBihKudk9n7xTMo3HxC3ja5svyyjeaNELEgmdhCeo2HVutjMwrGq8BAuqfdMPKYTcMhcQg5tgN2hsCNN5U",
  "key11": "5PWzSbvowVmkZWrfQDZcYRJcEXEZNP7roQ8WGXvXsvhrzYVtBDuoeN6imsazvG66UK7pq6BeUm1rqyhUvjLCpftd",
  "key12": "4PqFMNgxCSkh2GjFxaKZ9XyShjq1moYLLsPKb8URezAszCb1BfVsmyNKQykGK5Z1yZp4n6RKzWnpHiPVGykWdYpN",
  "key13": "4QrT5aRchGGhRx2jGWrRM2APsexkzDWRLyssYeyvgC7JFVzMspR68eiCjDhKzF53ysHD939VSb342vQT1UuMHxqj",
  "key14": "2knTHPkvAKBMuadm64A4QuXYJiGWexwWR5HDietkt99ZjWSRV96bPx8YKdedRceH27jKTHweS51WoS74cCZ5gNRU",
  "key15": "3RcnMrQZT8EcT4PVd4bJshnycfoS3ttbY5sPntu6yp7wcpRXc2uZWM77VdTZH9SZnDPrQnV4r5X6DTQmTERxCFGA",
  "key16": "5FA1VGzTNJx3Knx3Sp3L1v4YH5HhMFHCBFy74tWmL6uYRMwWoNqVxc1ijKLxSxC7K3q6FbptgQCinKsZNV618GQp",
  "key17": "4KBoqXGdF1r76GbuB7cuqVKkiVNz2ofZDgfv59GVdPSPJsVq1tqL32HsawFs9Ez8837AfXbgP5T95gw8xab7DV1J",
  "key18": "43x2naj9Y1JXaHxe22xKRHCkWeshNCkNN96ESFXEHNJnoLMTByDZcXjZHU3M94daBbi5h1Xwj8MNHV8mN3mD1NA4",
  "key19": "3kfoxAhk958yrB6pJE5fxxuG5RddAEyzzHy2r45DvumTu96yjhNZibWdv7V9KYQZZrxhqA1FcQkroHsYj8gnwvT",
  "key20": "37zdT3aZBU4ccVe8umFyyr4mz2urkYoHPjJ26i9VgeQvZSYbouR4QKe6Doj8wQcbbkYx1HMJFnm8TerJkLnSnKmt",
  "key21": "LmRADE5FbmyujCLZ2MXYtGicgDiEMoBzk1cE27BrAcpCndrpAUmCrAenxtNZFhuXrPzcinRsfqNfuMkf8PodRmb",
  "key22": "5Rw6dWqa6sdjJR7nH8eB5qqYUhWudtXfcn99sAmxyqfC8Uz54CM6UAULU8HAuys4zUgTJKKWryMur5ms61btYRb5",
  "key23": "2k9soEZhQPrprUF1ejHSEqxrNALWmovR3rXocwADS4L6sN4eHSwBgP32ULQcK9jnroNiVfarKs2c9zE63iybvhHf",
  "key24": "2CC2keUq2BgMdnUuDqAT1FdASnELmiTTwmwh4psrei9jfr6DkxCPoWX9gqEs7LS57zWRKZZEv6jwZohuJRrLvDFX",
  "key25": "3vvVPwhensqJVAmPcxWeukagJeYFqzsVXcL5nR2Le4Ujbyj3mjNxhDLMQdoarJ5CXbzSEpckmeUQWLs2oCeZ8Zxr",
  "key26": "5GisKvFNFKmwSyt4BpEPTqH7R4v4G9DEjG6ksgugFa4YcrBCgzMb27cgLA2Y5g9MDHxZQJhEeTbvbRhg55bf1iw5",
  "key27": "bx4HA14rQMBpQjHdPuBiR3tR3wX18J2PBxaJgi1X2qg2Ti4sBhwnvWK6e2DvKwkQEUkZa36NM6Czwwqq6D2YNvt",
  "key28": "4skYWCWAE4TSqq2wdDDNjKm7Lk3vcRr3SbVYJ7CSZMDu4152ziVaW6WYBYLx5RiTjWmchDmvyC7Zryqg4XJ6XkHw",
  "key29": "5CXQ1skqEe3YN4h3V1KZ3w8zA2wcc4YJr6QtfCDSNMtWB5EfJuTaMXF1G97QCG9vzDYpt8X1Txi28AvAfE6cCMBw",
  "key30": "HZKthP5DQVecsjWCocMccYexL3HeqZABZpxCGWXDuFa7xBb88uzec7XYagWhVNruaADhKvx6FxDwqr4RAf2B1BL",
  "key31": "3UkNe7ZBHhRuUUXxEGvLLg9pGPHbf4cTFFGFbrvqrH9NGgKajvRbC8kZT7LGoskayXhGZzVCxV8FyRjEEMhR4BaT",
  "key32": "4R2L6uvc5SSCRWMMjovnnoz4UVC5A5hdk1rcp1gv2z6gg1VAfvhzh5QVQeBt9LLCtFhX7QuW8h3ckqrxbzfCvyCL",
  "key33": "3AUyT9EsjZggibnH17Y6p7FgzXsJTVytvmaN8VHGNuDKxqBaGaVTi8vmWnYG1AyWFCKUcs5HoznxCJ1rduwe886P",
  "key34": "3oaTiSbX23fr9WVX5bcx6vpWHhZCPdzUvihSL3qFN5xm53HoP53h84aVait5yBXvewym3Ga2sLHmo1cdAmsnxE3r",
  "key35": "2cmCNmqK75RKrWR2yEhiuPtEZKwhjggUFhSiRtYwGxxkEVeA3jh5bRxXkTQGfjeZHEWkGkkp5xcmaXMH4ftP5p73",
  "key36": "GWj3jWdvhsg2iMGmjLSxzrDBmzM7irCzczKHiH4KLte399zUR12w6gKKPq8HrAuQBptKVYEu4u726h7oVkpRfa8",
  "key37": "5cvyrTUzGrf5pMnWyKK3HiSpiDQnx5rL8s9LhYvT1ZBzVSkfJFKVkt7c7yf8jjYf6Mv64rvFnwGvecjQ3T254gew",
  "key38": "bHVGJCc6vWkQhX7AZDiSgqZGJE4D6gxTjVujbqUYbTHhD5xLo1hzXGqC8f8EaZiGGcB8qHSHyXpMKdza7JfV3PZ",
  "key39": "3Jc25T8AoZH1gK5UxrVTipf26q4z6aXXCmqHtYLVzt4ou142TtuC32nNaWFuvb8WLATGqLzaH29DkeZ5RjWQoHSa",
  "key40": "43yM4ZfQ2vf1kn4r9KUF8JC38EiZackLXebRbQYq7XmCv9tQRxPpzTLaANvsJvEWHwnVDiL7SzrCAasMpLWHkJpH"
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
