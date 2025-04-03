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
    "31xjZ1mTzHbVMueUenAtAs83mWu4gTf4STErRPdZYz7aeQQThRWjuAPvyoUi2MhCVeH68nhh3AHBPawkJ5eTpm8C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pR82yifRh4MLEXWhdj77VgtJpDhHYJ97Q4gptZ46CBqLU9eVhFuthjw4cfVjmQgse6vgGxTtpnmZELTQskqATFQ",
  "key1": "31hABVnpRdV9t7VEhZoPf3WPLoU2rSJ1yCFR9SkE2mRdc8aNBt8UheXuutCekFuoQBmH6mhVrZipT4feLuvGzW9n",
  "key2": "2CpaX6ka8WSFiQQTn3poTpdfsufcMsqMLmhhZdprsd1BKgD5W78CSZYyT98q9NmNuQXAjjGv96XqJ28LaGeRS8hH",
  "key3": "4P3uup96QMB5cRiDd6nNdAvUj2JkeBcGCChQC5NDVhsyJPYKJto8uFfM3JDYgo5odiVwd4KANjMiy2xkV3RsmoFo",
  "key4": "64snCtJQPYrTJfFyPH9aexjBovQg92TCMjM2Uqrq2qebZoPx4fVMrf7j2jyRLipWV83fNQEScQMhUvnFzSToepK8",
  "key5": "qKFdxaznfosm8tRjUK6jmfMeASLkk4PzK65qmNNJ5eRpyB6Ay1pJ4rXNr9JYAwfguwJDMKXPw4SoB1YW5pZ7V5w",
  "key6": "tmgzCGxZbwR2aUuTPEn66PZoXbbUu3KsEMkbfZf7HryzMy1MRpbYtcUxna6vFx6ShH1ZWoxMDm5fKhjUXUocFov",
  "key7": "51zPHawyiWn7brdQTqsMLWnuPSWZBbhVLh7JqQmZhvrcxMtnW7o4c4QRbfoX9jfC98A7Z5pRPq8urDgxK98X19YG",
  "key8": "5G3ox51fKXgnKNdJ5ctSeQ3EMSCURXrRypiBDUaHQiEtvFSxakV8thRZBxVeYXBagvLhW8w9Bpqz2QVmrjh2UPSQ",
  "key9": "54dE7BuzXi7WPTix4Co6M42kWZWcoP65rBwpo8cPZAU5Z7WFXt9WnhcptJTKz5KsDbfjawR7rQqjkVHEN5CT8Auy",
  "key10": "2s5NJ1Pec38MLyKmr2VWgSXRvNZ9v5SUgQFtpkGynC4xB44bLMDLRdcSqhetgoXQaQmJmxzWKG94H8JgBf5Fq9x7",
  "key11": "3yB43pkx1NqRdkanNEEUAXvqVK2frR9wRV5nJDyDwWgzeRcPQvcZ15ZYFJcspyqzKCioRpLh9c9wXErbEniPfaKC",
  "key12": "3NKBiqdw3PoKB4oFeXjmqFCYk8E7kfg1cEtTXQBGHxedtjfrAHUEiSVkMmZjqQ29jg9Zenjyu4tmZEai3Kuf5kEL",
  "key13": "4DKE2LG1b4yszZnT7EdnVPKRtboR1ZwwKVFagiJDWjReKQ2BLAWQm5Cgx74pLjuwsD6QM5EJc4RAz6grRhoWoQbX",
  "key14": "3PSnvsXjQtm6zC1gx3bEcrMm1TQf1N8hBgYEEqBddu9s2n7sFpwz6jn9MNMFVEgqesEthA6wCMzyu4PDWTr6M67a",
  "key15": "3caKDpA6q6Hxk8313EPu5JXwjH2F6hTcgdFKHhyBeHwH8Qa5F2r659DsXQ3MZA3JqJuVd96hPFQ7FPsK8kYvD3Lt",
  "key16": "4fxXjgkxsBNNVanbgZaqkBvrRYTc86CuCrGm4GvXshAzHxFJz6qWWzYKLFi4N1sThRtCnPsxArw9SMo6NXfURXNx",
  "key17": "5KwWvKySWsbP7ZitM2gfijobD8xEB5A16zKG57gi9Tc5LzcBTrB1w3J7QjYJYwLYgqMiL7Ua5rRRKkRNYtJyv3FQ",
  "key18": "21NBB3sYZ4KNJ2BzfTe8ha97qYVpwKgYQvSs93KzsYsT7hGqg95RQDDCqCvGTY57heUHMJUFngmNMfTwaejvEL6D",
  "key19": "4Z1w25pNVEdrKqDGr8VqK87YihGfTyQcVm8CBDCSitt6EYYjzGvqrR7bucjoXWiBQRqS2sJsG9BHv937WCc6rtUA",
  "key20": "5WfroFLttUiPVzVBQZsHsr99tgEBQdxp4P5KmQpjbAVGg6kbFj2xFR1CJKEsAubZ9YKoGuhuEXwbUPZwBHN1N2Qa",
  "key21": "36HtEEdV3vP3zz4WChw8QXjNWk6uPFisVDH54MrZej8MQhtZyLsZKWu2vxftPCzfDWoxCv2wu1SBrgAvRCf3fNqW",
  "key22": "5BS2oaQPqFrvjKfdm5Vk2qJcaaYfEAjrJnXnmxMAzUwZobtL7Y5wuuhVyT1nS9ez9V9qwo4osDYGJxMWHTJ3Byqe",
  "key23": "5J7eBmoKK4B5NxyuUTNBrhjrmhwyk3FJMv7Vzw4hvcUHU1QUKBC1NKGjG9z8xgxkRFq9Mv7EcvG849H6iaYPGa5",
  "key24": "5iyPFZrrGcxt1hnsTU6ZQRYXLeRkEWqma4mzkus5hVc998xBSgeWcsVyknwghoBYS2RFLbmJGYTNc9qPuaLFHquP",
  "key25": "5AnCBWg9srUTbUE3MNzLZtQi8bXmFcxQW2PzZdtnpyVGY16afnB6XjUhZBPPtPHb5CYPf4VHCLq4Zd9dFtB6nEeZ",
  "key26": "3tHknWWRwqS8rHevamwnxTy7SP8cRZtPikd6Qsj8QkBbAwVHCaPCudSfMtfVnyFHHygT7JeLnijLRvJwRrULVAim",
  "key27": "sybNzTv4AoE5hbJKRfR36VWYWW8PZJvEyF7981W5GTz7K5d9ZJicap59ov6vhJq9u7F2KtczmM2zYuv7X9jWFQg",
  "key28": "5Z3nw4sBbsACmJY6LeNM7hXSEw2TLveNX23VYGA4mvoT2aRokKuqeaaVof76eeKadf5nppjuvzvgC6ARRWXySbt6",
  "key29": "o1sSTk7gbiNueNZmpbtu5PFegAgchzDnA5RkaPfhogu7gcwF7UrzkwsTHzZGEzjHFdj2s3VzuU6ePKzbhbGRfvf",
  "key30": "5MnNLuwkJWnLNaZ3uwP4voy5nhGD4uwAWvKpmuyQatgEak8KNyAaQimxmveSC44Naq7hMF6aEdMksAS79owcXwoJ",
  "key31": "Q4GAYhLnqprqj8t2WRgVJQW4KmuRHFmNcZ9KT4QFRKrrvzd4ZuUK9sDK2vuH31wtjUVeNdL7rxMUDmPgqK3KRQU",
  "key32": "RqQPNnZTmit8DDTTCpb2NHaoAw8dnConV1MiYNXusGMEULaN7sHDdCJBpRAyVQj1SBDUAKDKfYoLWPKFDuNKGyU",
  "key33": "3zAQ7zibAs3RCnCSZ1V8UKM9x9vX596bWydkWtQLB57jY5kgRpXamJV713pNvDC6zYukwr17fBR697dwvFtK4YGP",
  "key34": "3JS6dvoUmtUGoyD9K6GVdo3vKLc5P9p4Cs9DU7vq7wUyf4VnUKFxV3c8zEvAZYdHr3cjASV46daLevfforu1mWuW",
  "key35": "2ZiEDuNVgNcgcDxz1TW4ZXWvQ6siTF8wc59yBxr2idkhS4d7RVqfK8idf4gLg77zRUnSTmvpc1HzMMwFLqYYsqDL",
  "key36": "4KUtVVdjgENSQK1xmipyp2ATNhXL28dNMeBMY7zcZMegNBcjawFj6Yuo7TgMUKzCDsue83pok8wMtmF1maJVBdvk"
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
