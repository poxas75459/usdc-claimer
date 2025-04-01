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
    "2TMbgXnEfwvQCSajZQ29YJKuWRzQtub9MjHqR22Tz7SiZ2WBK6LsttUfjPeWqD1ymuaBR8dUT1G1zduiNySTScGj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Bp8zdkHthhxmbMAzjAattwBWT9hLm1CaR9de7Pje86gud2TmkmT1KePHuA5i8cd8SiPd4VozwXMGkAwy1MeaQ4T",
  "key1": "4TGYGp6AE7gum8gqzPw7Bff8veC2bweWNh42VPLSubRN3AcN7rL1ZcbCy6KxtoF9BQkcmbnR4h26Y17mKo3E5g5c",
  "key2": "3pHHFi6DEbvTt6oXwnXPugMWsXNnQkQDhLhqfA9DSXQnXJBWSchUn4LoCwdVQhp6s32EbCjdkfr75uQ7FEQzUZkC",
  "key3": "3GLSNhTDY3PbHfmvP19aq2K9Cau6H4QtaAYyTG9vjdn4yabzb5Ak6hCkBMVNCzqrHTsfaVaGqxAsccW8DwJGthuz",
  "key4": "kjDSTrT3cxC4FWffoiTK2q72NMRbXLtbroe8rRzXAmcBKFSWM62CzrPf5dSgKK8hNSNdjx18LGFFRt4YDZ7WzGj",
  "key5": "3uCjTNAP6VvsPt88XWXhDga6gtzz8uFuTXBCVLTUPXvoSmtvssz4KXMGHCR3W5oTKNghYBaAt5WxvxwP3VhNkoEs",
  "key6": "5xzWjEHh2MfnpDMiGnUWCCYjkpg4Xj2wwsyAQDHdcBCqrojsBAnYrsgHkVyA96vhNnErGh1DD9HBsPjBWwCthB26",
  "key7": "4FNs1Qm7VobW219ULsdWvJNTfhmjXYB3eoB4U4fjeCqwCaxgNRRz3z7EGnZkoRLZcW8kS9V2GowrpffaLdbQ7qjg",
  "key8": "4mB9knAKxKp3ckPEisDiwtbrQAvznHuqyp46hBnK96jjBqqwFbBjSM7cKyPk7urpxP3Wuuh7zhow9v32Hb6BNYc1",
  "key9": "3bvpC6YyGFx4vFAb8CU9XbK2GsuBa2K6dRnuo52fUBA1H7Vgw1Z3gu7zXRuXLLGpSU3KpW52GokKjwvsCoLGzZiu",
  "key10": "5EXeALF6jUm1wYKBgGBpDEhrqqASMqWcegBdHi4jXADuc2r8iN7iYJ5EqKtwMDQbQXQKMjY2jnFeCWEMqeZECFtQ",
  "key11": "2yc1BEdUt3LeCStL8jDehqNKTxNShZo9oJLYzSewbQCRNk5Xr37Q9cSgUyPxKuv22bLzFLFFBojTz1WUNMrfMEdr",
  "key12": "42R3VgyvVAaixozRtPndbvU6JedZTvrBrAx2aPBMJ3jau2Nv9DbWRHJxcRGJ8mxVgD12BatbHyhxwdLhsDBBCKs4",
  "key13": "4g6E9YGpEnjV44Zx92shWsChKq5EZ5mY5zX9L7tiu6jgJizHieHTigYddmi6AyNfbVZFHJUZBp9HwX9LkQBZtx7X",
  "key14": "5ZLmuh8hey9ScCoWdyYSJQHHFQyhGLuZXtrkyqtRLpHWnTeWaxTnfrrFSzydvpvvAepQmos3RJLsGgUAgUU6KxzJ",
  "key15": "5jUGprW9aSiTx6cotn6J1nTmDg4TL5nUntJ5aboDdF3kQVYQRHfy3ARKj5KhAXaA9uqR4GutcaYAxGVwk1YZHvrU",
  "key16": "5mkGjm3E8vd9qmkg5ej3FjyysGL6648HRmAEkRDYGoZU6ZcExu848VcEM9GRif9HqPm76ExhMp5uPhxZo5AjM3JR",
  "key17": "2pq8jEpA6CubauPzL38vJy5uq75a8FFmNhdzMWEqjfWna1f5fN8jg9Y9brYgeaVKcEsbLQj4FA1UWDzq4FaSWXJi",
  "key18": "hea6wyWGqWnadeU89Qm6mMbB4tideZdjPuZ73qAtdWHDKgeBtmTZMr8PFxGMfk1GYcAGWPdYRv7Lvg1meLgrwWR",
  "key19": "Ww9RZi1qehgYfFPGEixjQ82zmFeLzCHLYzyRjSKrnvKPHLJNFgcN4UpxXPKF3XinQY42FxzYqS6vJTKGWtav9Hw",
  "key20": "4T5g8hUDCK6MxrkcAcRSh2BH2ztdADTfXrvgpLVkfKhyzpeDoEqqMw1ucjaAEdt1bpVBJPxM3upz96GBhNWDQC24",
  "key21": "wrw5GgsfhyPi7ijSjXMLvKRLcw5YPLfZy8wLFAkH1yQaWfhQFuoHFT4cDcEBLcNm4oLpAbcyMd2cayGK3h4RDKA",
  "key22": "5rZGsga9mtqw2xqRqurLx8e6hEQ69Ym2RXH7asMXmCdVJPaiDsHysmnuJPseTHxpy6Dfrx6udJmiS43YEo2sFfm7",
  "key23": "MbS11pYdvxgBrL5ysCRSqzzPW9VdJG66WRH4UJuSuJ5hQQWTpTWjBAwb6L56ip8bwaE2Q3rz6Ea1x8nfiSXxK6Q",
  "key24": "5eYVnZ87f4pUbdxJzAUd1fokBDwUTkkHzgmwBnpDCFLkHf7bhXEyxGBrCY2Mk9DjUejJx2fXyV5MhU5uWdwKcMNx",
  "key25": "3Wnv1W7s5u5sT9seaLiE9tFQUNVuG5nKNFmpEPWPZaBvRJ9Pjapgngy5ohPw8otoKvPvtC1PHz8NP1455u4iNK5i",
  "key26": "4bnPth8W4XJShZnUrU9uhKWkZQSjUZjGtax6SVWmLqt7PjNntmQnHydFv7jQu12xS7aEqao8EvxwUcA8uwJKDstK",
  "key27": "43ufXr7sM7onve9q8zo7QBSSDdoGHh3UNAUFUqyzw6Ax2Vv6MqyN9u4RCQEXLTrB8pbqT7bE8udCQTfKeMUPkYqs",
  "key28": "4QK8a1qYpAVxydVqbprbN3rV4ezdtPkiWooJAZ3oeyT6MsPbDXEPFarpKS2AL6RrvZ5VCXnwMRc6bpxZQjt4aqZy",
  "key29": "44FQB4yMB9emfHytTWE936cf1wiigqTxZftNBKsTAPitmHS7X9rqmv8a2AqpqyopuMwJWUfmRJTi4HQj8h6VffwP",
  "key30": "2r5YMi8xzx87y8v9AhathZbxuFKxTwXTajPc925yZQUj1rd7QGjaZz3beF2chFZGECPBwvDQPdeHhDgtPA4RWVt2",
  "key31": "44ia1gSESTu6HiWe8HveTj7UVEPNy5mUavvzGwFABo4Ecw69eJ2vhfhnodMPQVheo3cM1hLjXSxKi4A5KuU2qr8C",
  "key32": "5hppyAu8pyUSXuCxgEAJm48FDynLoHhwh8NDEftQwwPTxoMocCCFnGASFyASiGGewdfr9k9oSRdMJDQTHhxxdvig",
  "key33": "318EuVZmGWguxtA2f7BqdiYTV4pyV2zFLiPD6GRKYV9FjH5QRY27cjYFWoVMppqLoDA5kG8XSHAVGciYY7uQWQ7E"
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
