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
    "4oa3AoJ9sAtk4jsdfF1uSfFSE8JA9BamUhfRwFUWLtn2HM7etPxf9NhrKsphgRmE2iqgnevzPVBWTH5zuTDZmpiF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UMecXRMMKXDfUbnsyy8ZrD4DTUZ8fD3vHJHKZ6C5DvZR4Ex8hbmVtRy1YbhhYEfxDH38XfQg7vdBKtrngVQyxGu",
  "key1": "4M3AK6wo4S4g4wVGthbYY6b8PPrEudVgvWEraRqC6Mxnr7hwYrvGusQqRTLmWAJ9wGNTmBN9RDpukKTWU1hhxHwo",
  "key2": "kMVFhtvJXieMbLhTnA4QDD4ktyYhQWa2qaxo7LMMojse6M8ReUqNeiZB67UHkVSd3B4A6r26R4jrMTPjZNF4mEv",
  "key3": "4HxQ2trmPU5T8makeKfzzzs4UWC4cA3GKor5UPc4x4kd6TZoSNNBtC5S4EMzUp6JnizGFnKrQWLmKzZtrkoW8azV",
  "key4": "3qVxbv9FkhruGhLjA6ThVzRq5hZJAjnuLEM7LqfeBcgqSGpTJUWCLJ3RdtF1eMa4cPnXtsiLwA3JEc4gCqh3eB6h",
  "key5": "3LSBEWykWnGqkJei7tQnN49JqeAsaJi5yVZWyFL3v93sWE4X6BeHJP8cfe4jHjxz4Ht6XwjcHub1wZ65azoWHxmH",
  "key6": "5T8K8L8SqCCc4pgNCr5niUSm7xKJnkfMzodP9oCcm1yBxDwJACcBkCwbRDs5CBNNs8EoELxegqyEGSAMPiMdMM4h",
  "key7": "5bSNuVJR33ufr3437qPiMVjhMHf7qFodRgQFaCrRF18QvrcXUXoLvKFS1haUx56TFs6GBeJ2Uk573Ze4aoGecogu",
  "key8": "rRBcdQ3H3RuH87VJCGPHnKNVGoTz6yshv7hwPqU7TuXkqFMBxSUZ7LpViTdW9nwS7D82WKJ4esaG7kKKiX6CAgP",
  "key9": "hPGZ6c3VmKPnBnneyzPdfh9uveT4BKHAgUspajyQzvY1orUb5C8RPf6B5y3qmmY1mDcoY5whFpR3Nx2b3zndVsZ",
  "key10": "ez2uXXwJNQQvxoWe1SzRmq4qW7nKBfncTjUhvmtzWaHogMPd3KF7tAonYvCuzS5JNxTJ5A7wCCgw1e4oDL9QNK8",
  "key11": "3JcBpRisXzzFPAT8TMR15jM4yjH2nFc31S9FnYLPnXgWX3F8UNKZcPJrhJzALUDzuBJPmAVZLFeKnmb4RuEwLTJU",
  "key12": "28pAJagG5JSxDNnGbvaQsVH3X8Aq1ZAHxcuQp86pJKuY2zLdeKaX7JzeusMaNTHuZKrWg3Y37GzQQDFep8mAXGPK",
  "key13": "9NYYK3naZqMKjy6qDTiZzhBtgbjH2WMEBsvYYw7GNHeCNJTEWspjcwoKD9s7sQ72TQLZhLetd9Jmv7TCU6GfRpn",
  "key14": "2UyfQS3oaQvFssUBbHzRh5ZHaL8pQg7Uw8jk2xsfQjhfb4KBAehrQajWpYDEMZWEhwwKgPrp1qLbnrqAmx9Xx6t6",
  "key15": "4GFn1EJnyehiZznu6mEktXvzmkeq9XJT9R9zbqyepbFJago47FohBbJJ3rag3dve1F47p9G4qBbyydHfNnCdgaXX",
  "key16": "65NAyBhdsECJRQg7MTMTAx7GhhGBdVSRvprh15jHYsYCnPrU2s6egWzxK78yARJqvGn3qFY8rG1UKWCnz4pCGXz5",
  "key17": "yxtGv2WA5LkE2wkipEvfEnBn4ubwmcke4WtRdKWALJHBL5NetqLJdUBTDaEWearQb4MHr2xZBT1BgqWLpH6crh5",
  "key18": "64op266mAtvKbJkKde5voVasY3PwpcDzF4LRW1hNayn616L9EoZJ5JtKUdE1qzEsQgTzsDuwAGw4uxdn8ZVy4Ej1",
  "key19": "3FgPZMwD43ZM3iNtkfEdFsep51Hay5nTDqEgKLHuN43BCafgjA8sdrQ4Hr9HNwH1XTH5NbVdXQmgjfrs5ek9msYH",
  "key20": "5BQ34Nx3dHawWuvRrmwwjMiryTroCgRPb9KXPDtWpod7rmSzeEhnSujRpcZRpc5BjKhsghm4dGRfiug9syvGM7uv",
  "key21": "4zMfZHEkE7YrU2muXPRGbRSQKkNzyMMuL62Ms9NG6XsEYC5rmTnsy7GpNbHWNK2zEEU7qdDZYTiK95LruHZAb92S",
  "key22": "25PawYDbu4DT2TqCR3EsesnTg31sTNh2UQh6q3BbBod9ZWQSn7Zk1JZP3L34f5em4nYt1kgUw33ECNUpmWhZ5QJK",
  "key23": "66FUj7v31h2XmRD6omsW9yP8crHqXD8a4yYJAoCNBqm9AtDGZFspgRUHAcJNdbLboLEhZ4nS8tyEPeiKDaYwambK",
  "key24": "56qFPspMSuWR1TrkRZNFpBj82PHg4E6SuqQZJpBywUFSgT29T1nqVVPYnwZhNXzKKfnJrNjNrXNe4ojnERnkNZCM",
  "key25": "4UqNGt4gSuoRr36vvhTf768dx3AiMaxRv7URwQkLTFS4paKKUZNr1KEntQRJoLKxVFJC7dFF9eQQ9Y2vTd7Dh6zq",
  "key26": "33mrL5QhkHy5QzYCGKZxwDjPVbTihMx6mHjRctjXxdQqEXjYshCMEN2jSn4XwXii7Z2iCG8eV64j2FtouioHUyx5",
  "key27": "2eRv1teuXuEmG8W5HMhg9Q7cKauJUjUCCpy1RfGQnWePpsLz6XeagVJ8cod21xM7RzoeK52XmEHd8DzfsAUr4dxj",
  "key28": "3Ro41q5xtHh3JJ9i4RLs9gwcD5oaYa8z6toS9T9WZud5dZLjpEt4ngLTqvSR2zDg8tSdn5MbgbsM6vQrVC2RYfDu",
  "key29": "D3JDWxKCHXnt8EUkEW9j2VezzKvt9x3R6EfYKdcuewwHSj3N4UTfz1SKXDSVsUswixHuarG5tDzkwWvKcNPhvt2",
  "key30": "3iobWFg4tg7Wv1w4y6fyU2dhyJoaJfs7cz7h67bYviSsJFGMEY7g6hLygBLzfcmtp4WaJXACXXtCz682DDmUeC81",
  "key31": "59zV428cbr1rJ1KGzwNQmyRP9Tfwyy6zfYvXQiCnfthV2V6hDwVnpKN2ERxRWnCYtE8xDg1HNENzQghEoa29Bxy4",
  "key32": "3VQLktaVNAQzE5zCwCBV6YkjXhGkWbQFCZUDSdTvAedNbqDRY58cCu3vBcvA6yF1rcDcdVuSyRanLyqvVmTvMGix",
  "key33": "5QrW5JJ4CLBzjn29JDD7JRd78FdZUL9uu356EgHkvXwbh9FTWdWSSgeWc9TfwM6vytjc2mHDaP1i9ooPnuourjT3",
  "key34": "ZrYi6rJ9GYmA5oh1Df2eKqLSHtxRcX3jQsMfYW7qeseXc2LMNGW5QbTdFaw4NcP8pu4DSAbVTjVLytXXudRaChV",
  "key35": "mxejkhZTkuKKGy6NQHwE7UcpW2wYht6SsPPeZ7yD3s9xg2WQGAwWrES2cjhgA2LaGKqJvEkoEsj6ZF3MjGsBReb",
  "key36": "4EzujBF3Day4ramz2GzEpE4SGKLd15RDrKMg4nMmXi8BUEwLZ5VfrGJkTbt351rmivRExZGzb3Kmux66GfajMC8n",
  "key37": "3w7oMFq4Js814goTVWtSPJsAV1c6Lss7Py3vJe2HhJ2on9MFNNgGNQ7MQCboSvTv6cBEhyjAzNrKUki2UpaJRPts",
  "key38": "5J3NB1enpF5beEHDbH62foCbJqvE2GLdFLsr4XRSmgEb1GLKcfTqX6Z329xmFjwX2zn6kXmiWETanco6xAu2JDSs",
  "key39": "37KF2iwpvgGjztDrYScij9iPhAwkeooUAYENVoG5MDd9Qvt6FWQibY8uPz81SzYZfeYCByzanUxC3yaSm3DkDHcx",
  "key40": "5oKqcx8qbgXZQNsmjSUWffiRz4ZxUGnmJADbUACcYYzaDxqLcucwYp7EXE6FvwFggkZKVKUXitLXCZtAMhX29WDT",
  "key41": "5P2KPAqJdfQ3phwW52BTQ8QKMkjoHm3jDfS8DPuGgURwGLHArWJit1T9pQH2eZgxxfYWdbKjkxGbcThm7Lo4NEyC",
  "key42": "J2dnw9P1qN1UJCmi56EdXDV4jsuBpG6TtmrAgaMVzFgPpjLKWC2WeGqC53QM8mu2bFTV7xJFkkW81iWBcLTnW29",
  "key43": "3c7K5WKuQbLSqomHgi1UmsYK7dJZJrVfUj3THf6VPLo6sw5SckhQGqHbRrPzVvZwRD6Cm48V1zjEiZgiAd2MVKX4",
  "key44": "3Mcc5jcpRLP7F5GLnpcZefcyLst3dN3uaRPgfq9zjh6AKhYQUMf1yjpY8kqswaXV6A2noH9Kaaxn6rfUj8MBUrdn",
  "key45": "sgvygZN8Se78ecXLZyDxxEgnU8yP38zY5XJoWSnJ3J91mTRKYtXPGd91i3oBLPcMFFMpKFApkG5cZv3yd7pFcJe",
  "key46": "5eQoQnG2pgaoguSpXBAQ1bRCRfGHr3uqyfS6hqN59ypUS2dqsP5yDvVPM5RJUgJFVF6QiG2to8nbphfBaiqNSqdF",
  "key47": "4CfejMJSF2pBzvoJFAKNaVpfqLGEwYsbULc4cLFukz85LMHbQ8XRL24GL14Mett8b4dmqZ5J3QwxydNNqug4gk3a",
  "key48": "3FHn33QZDpMbWq5vYWrzXwwkjDhwKRTT2ysxLjfgZJXQXiFTCC8Ga7RXsYGpX8S8Yc9pmNFGpKDfhTyyaWCmQyAz",
  "key49": "4qUEj5uCYLjDeY3mc3EKhFo8oDRPCYoZJfFqXNP1B2AqeyZ186qbfcVBR5acu6k7qYV4ACQiwAPGBoymqWdmBh6v"
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
