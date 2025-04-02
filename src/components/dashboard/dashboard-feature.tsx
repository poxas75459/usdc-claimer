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
    "4Px7zqjTFaEGbcJTchM5kvKWTLzYnbLJkMM4V1HqCEuidijrko8UFAqu2stNjv3Etgy7nQQmAn1E1zKpN94LABGK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sL4XaAfJ9wWfZ7gwzLsXdS3y7XLivnDaKhwDu8CK1Wz9DXsogBjRLwyZ9WoGmTKocyM86iNVKRtF9fD5hijkHuy",
  "key1": "676fY2w5HwULVvsxkGRL4Wh9eNYi8HJjmazWMN8US7oaoex763pLPnvVs1S6tX5oUn3tgkkegTyNQMgxsctzfWPC",
  "key2": "3VLJMTsccy6WvDzDqB3SFZsnU6U22k2ZHfjDKffipj1Qq8goHSQgMy79DKSbUQezVfXaJtmoLTwUqKY94cgzaKkb",
  "key3": "3Mr4MEF7KqAGiqBr6ct8DqviKF4t2XErBv8Ngo7mYvbAYF462hBAbPCXuAvuhXpMMMbgJWaA5e3PcdNS7SEoevLN",
  "key4": "22ELWKAqrRnZKSsDZZmD3scx28BDoDXhVvf1XTBzVgQqaxTQcPGoe7KCMCxw5UyR9YQqjsbKRFfNnquuX8o5MvgD",
  "key5": "4VsXU3pnAX4qasDS5CKVXaHVpyqodbHQwuxszj2yVqcmQDLdn6UE8Dv2LLCzfbZA4dzUyFvSovqdUhjErm3pQ7Tv",
  "key6": "2nMnZwyXSJ4TY8hmapCjxhSTiHHA3qJXXBYK5U1ScJ19SeovP2GSAbVEjHFJyD9N5vGQsH18WYJcChP8QfLn86rd",
  "key7": "2qPCQGxsSDpQhZft8dhNq6qFPtxbz3Ej1htSJ2DKjgUsXnQCZNYczgr3tdXxaJ6HQwrANDDfaXLR9N31dE8uy9Vu",
  "key8": "3UTCKQBpvafQADNTWtbVZpHpPZvuNoDiFoEzSCXGWxui83gkJThf63wGia4rNPGB9XenAiRwSVu5u4sa3mj86kDV",
  "key9": "3MdVqCHK3a9ry2cnqyJ6CpkaZnjySj3CHSN7Rp72DWYdzamrzPTy2id7rqbGUwq4kUQ3BhHWL8iR3GEdnm7xgdfU",
  "key10": "3yMi4wzxbbqbDRPEHh9ibBn8TYHAAvNzgKc1t57ZgEdckmV5e4rrextvrQpMkCVQSHagdkDHndH1q6A75tEShq5N",
  "key11": "kvU7PkofpAscmUnUbNYxdP1DUx4kA1ZvTWfRPYgQsSon92b58e43cCGZeVbhkn8GPuMoUqvPWyPALbLDNCutPdL",
  "key12": "3niVeKTsXek7sMtKq5NwMzQaTDrLZRDTVguKGcK3RkJVHKJXVk8XFNEFmAvUac9MSGUzP49hjshYwWMRj5rSS3MU",
  "key13": "5mQyRpt5dchnZWxJVh1WSovS689qxzehy2Tnd7ckJvgLYrS38d3T8qpmUqQtRynZyuQbtBfJWKkkxBk5UyeBhmPY",
  "key14": "2DuPGrRm31LqefzUVmn9PvjyxzEryGPjakfS8jAEiJ2onBoKxSAvCSAPTGQhTEKtKJtgVuWrhCr5dRFUGocgbcra",
  "key15": "WoQiZsHJyB9yHQ5GRjvLNDEsMMhvmUTGrgo8dobAJvy3FEQNXGQpv2kY5p4SW4FgAkUREeWZWa1JvrYvzu1sJkd",
  "key16": "4PiWd8Z1uX6FMWYcS6uKeLhNJegw3E96HAqhMdD7Ckj7aVMy77saFSFnFMSx6hmphFjM8pWoUo3jmVRnTgdT2c3Y",
  "key17": "3U8hKygUeYCGfdyAB5FeXAEMJuXE4DJi5BBXM4s6ZJuHn6TCBzDzxH8yi7K196DJctJsHQ46LVS1m73HiPCVxDPG",
  "key18": "5PWkFaCBw81QAqsmW9pgroD19C3bUSc8pTuoZZEoH2j9utzsatw6Lvqjb6v2xs4G2GkZso4zUR4T8bxopiiyqvdU",
  "key19": "2mtSR5huwMgt7NF1xfwRa6Q9kk54HiaE9is3dtzSU6ZnXQoW27G1r3UPttdnsTVR9WDW2Zx1HiFep1xa9RUtiCWK",
  "key20": "5zvcejrkN7h9TUqJ5VENjMYzNsDcpUsonuGKv7P7yqt4fW522wcVzzChgxCnwAB5bziC6x547mFhrZMEvSHACQNB",
  "key21": "4xmBgyxrJHkhejNXBrd6PkqM9scytxeSdwYod4XQ8Hjby6g3EgXN9nZ4GQFjb8dnVFFS61dQ5FP6DSzuQmqYDyTd",
  "key22": "4RK2LNJbBPgPjCEyxZBW4Z1zyuZQwHSBfksmE8LegyybTHg1qoTCYKSVDYeaUwXoeRPb4XyEBJKFRjzhgzKuTBPr",
  "key23": "2MvwWgLbKYPi7Nwd5b6NCWFCrQEXvqGtd7UERB3FaxSJ1ymKTgupvoTcAeDm2Kvw7cs5oqMhFkECpGmviePnMRip",
  "key24": "5vhLN43rZQzdieyAcMKdteGxAB9ihxd2FjPezSFYmx1WUn63M3Xzx14eJtaYjGYd1Eiiuw6TnU4ytjQsuZoURtTg",
  "key25": "4BRAi6GCHbMKeosUpLDZEVSMhwtFmg4PTdvQa2XeCZeCB9TPx65Yp2GhvcZLc83z1VLLSpEMy7ztqs4tFqq4nSyN",
  "key26": "51kq65XJJaRhy8nzLJSQzZdWYc792y2dLW9iEVjkBcVuHDXGZ3fKRvXMZAHr7ebNg6jh9P13JRpNdZxYFXD8dvq6",
  "key27": "2ZVwPem4K565FeYF7PZCnuuqRn18rYYw7feV6xZceAYE9m12WoH7PLuTrJS4UKu5iUn4gCUdn9FFiK8B6bLAjNJz",
  "key28": "3KaEykkweDW7QrUu98Ut4iHLZdWxUZrHVSdMkcfgFRfKmYmvNdu2qetDVu13v2xZQUzgKyEV6r1C9MxHUyDiZz9S",
  "key29": "5iz5VSrY12zUJymT1TXuEDfG1JxzJGstsuVD3UJ3sE5RFXaVs1tYTjiMzL5zbQKsbr5v51eNNCXHevJWyE47tHk3",
  "key30": "s35j6BABk2tS7pd1854KHH351s2QvF3R4T6hgBRgf45ekFs1EWoe8upwDUB2FpTFE4eHWdjHfnnEQUAXAudUc9s",
  "key31": "58wpffzm6LTwxRtuKrG3zZATQHirnAURPvcTxkY9n4xv3xx4CW4jwEchxsjVwpPLivr2p4zKvnhpKxqzhsbsvv1h",
  "key32": "5bfXhmVTGmzR6mAEZ3T5stqvbQrNHj397Bf1GaH6DbV4HCZfRcdce2KiMj2MwEtvUooc9utCGevpR9gb5CqeNivp",
  "key33": "UJaqDUP1c65MotnrrAdm2GRNgE7bViDxsv7NHWrie4NKWx1seiktbyikNHNXqvsEKBAHzx4YnTvMGP9n2D3tbj2",
  "key34": "3hUfjEg9xp3WFrdvzeyEgRhb8fMZJcoB1VA4bM49tUNjty8LxaBsztfF6S2GTpyysoooYkhUoigh4XVoKZN4DSGe",
  "key35": "WHByF8WrZkGSzdbZ6MyN51d4QtLsvxYWpDGCNgDJHT9V4cVwehQopEyCtdLe7vJPof1ibSrfx9oLWnbXLmsN6j7",
  "key36": "3LC2QdDeFsUxnyJPrasSK7RRyxFuFJs53DjsTY2TEs8zVsC8QXLgriGbqM84JPBUuwh1QxMGuqQhMJCmvNrpVBSv",
  "key37": "2rVScxcB5cKWNCmrqRzS1qY6vsrc8JfpewPynpXrWDDuVvE7QihP8rVNeXF8oC6aeLhvpHNUqV1WoWqMS1VEY1Nd",
  "key38": "3xkjxsU3B5dDaNUdzB7Jpx6DDwhSJa1J4YWrVQMcAdYRRsDTKavqRgjVQ8y96BDMNX7ABiKh99pRgJZqayLxxChW",
  "key39": "5yBPS8pjRG7cJfT5u8VWUoKRpAi7TN1u9BHv2Rq3maZPFimQ6jAdSC42biXrpTaKvm3m3RtNDZFioj4KWQJtVes4"
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
