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
    "Yx29LKA9xwW1JycqcYEaHkZpDjjDQVFnhwoTg972Q89SWEGNLZwn2adZFXZc5UD2CcV5buuEZTBsk5NuEKmYwCv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C2ppDj1aAG1ZZX4dWgCGUJuGZzrXxN9H8fTmbbbfQvjyrg9fiBoT3tbmRjaXCTnRWGJXJjxF5DHCdGKHunavMNZ",
  "key1": "2yNEJiuWhauHF1M1Wn6U8n84Lf4ryZvkwrMEtNMdMurBmnkLm9zsxdn133idEPpDpkCxadeNrBG6w5tHR6Uh3ntv",
  "key2": "4CSbsFwTPtNTiX5QK5aBm4EDTPAZmgVgDo6oPS8conCfZBPcgGzwbw14snaFSt81hTbMyRAESZCWYtCq5MWiQQ2u",
  "key3": "3EJ1jLw6rPhCaDn5xSzA5iut2jGkC5pspCJEMohge565wvBhsZYZk1ZJMgVQc3nxAXgrEBi3zKFUtJqNBEYaLpe9",
  "key4": "5P6jkU5abhwKu37o19bUZmBcNqKpg2se4KZJVuFZCT3DVDrnnueAGUdPNZskFXkcmDakZfEeSvnyNFFqjCnFyv7s",
  "key5": "5eYzaa6kJG7SK6sosPyqQrZy4zeFXftCsvKEzTrk1MtU1vd4mRrp32Rk2MJNSQurZChS7Hur3hh4iuKGsKVdj5Wj",
  "key6": "28s2L6BLH1bcDxVjAQXxrpmWhAMSnWNtzyxHCRnXFjdqJ2NrogpCfQuhFp5Dxv2nUTeRNZoUG2iXeFMa3aF3eJSt",
  "key7": "5ZaCFyseXsNyVYso5hEddas18Qs3brZBiX3ZKg7gRSrrBDfZk27MuUsnNXhgRi8iXNFTfnz6KUfbZtmvNAhNneFF",
  "key8": "xL5bZJ854z9FSgxdLd3chmk5ZVEcXvfmAK3PGPwFqrYBu2FkxshZdn39tudJT6wcWBtcFtNLJCmUMiRCZE3zBzU",
  "key9": "81kj8QKKsizkh8U9Z8uRaTznbNsTCdHuRZ9iT54p7NeKzRMToeShECHYfYaNhZK8St9RgaNCZcwPgDEvNPydBRd",
  "key10": "3sz822X9mjC27cj7Zyg9PFXyxrSHFLK8Hv5q8ijGWWUgW6wcDrxZWUMLW9UfxEi8WpRe6ZJYrtCajJWtfnjUkBAa",
  "key11": "46dbLi6rR5HitpYTZXKKzcyAx1RxaEgu2sgeeCfanpneSsSq7a31zseVfNbwBPnTnrkj6Yq3eX1hUXJqaQQD4Zog",
  "key12": "4RdJbnoHYVE1PHZT3YrFD1bTBRfZdEb3wqZijJ1Urcpn9Ue2qexYbbB8E2o6kKjkSQo8Vp896Nvd8e38ha4wwnmK",
  "key13": "5JcAMvCex2mUfRM7A9Wf4CwBwBmwYbMNfrsbghG82cp6HfQXysck6u8fGGkVw9s3akvgKHZo9ry9wWTa568vgG2t",
  "key14": "3F79t3pBvagVn12aaW4rPY2a4bC7owmmWkY2T5bfFgqZLvguT1tKa5QcNA3he9XfVHZ18pi3RLB4gBm8fEwYAB9U",
  "key15": "5RnxV1hdstxmXvoi6P66RaLCvBfiB553wiZLYAiWJt8LGyQhtNnNt1QvgBnNcbb6954VPsWtEfU4PdcaWW69gr15",
  "key16": "JNSAyW9JMCndf5ojSEmd1EK5FM1QZHhCNR6xgLZhJFZqDENT73Gtv7XLYsquaA8hmgs6fV13MTZBoe5CinYKfFG",
  "key17": "5Sar75ty1RG91CPe9mSyUkbKdahGqnCVC3vaAvuJCgP6FmFQpSgYKphqPHpuVusXMs3qT4DNx8BvyuvRHzB3mD41",
  "key18": "5zgzNmiQJkcww4nYjBcTEqW3mYr8qc3PAQnAokaSn1qhTf8vYvU3nVDZ3GfReeWLk6pJLeEdamM5QEk49wDq8x5Y",
  "key19": "4vWi4QASbLx3YRNN5c9NLm7eFPCQkz6EPL3chdQpmGoLL4eq63ykuoqFeAfRVKM3SC6LCsw34288VeMcv2kJvaET",
  "key20": "4D4fHAj9KSeUhpDE8BphwqGrr5eHfjYP3qkk38borgNdJaevt38YtT84yzFeKb7qEBEjqxEbiZgJJJdhSrSp2wHG",
  "key21": "2dJKiUh8K13GU4idCjRVuNeYmv2Wboy2BhTMY8gyA1CGLGUvYTzZeGjaRZCcAJFoZ1zPS5TyJwgDz95qMYZ2CHg7",
  "key22": "2u6VVaCUaxUUczV9pU9fj1zYQPeEq6J1zf2pDyMiFgQZA7sh5XvBWeunnvckkQNJkQxzELc7k7mEqT6L6ztqvNFm",
  "key23": "29Mx3coQVuXGJNyL4QvH8qcCyJGajAZkAoXhzyU16w28yJ4XXJEaJMaqwP1PzWqty6wvtuhE3cgxyu3E2SEmKBZU",
  "key24": "2b7ekT2DzNFZBYfgGV5K8bihc8xP3ixtj74Piju8go4SLYacGxrz8gHjtjD798CEp4cUVoLumjxVZiTXXuXuqZ1f",
  "key25": "3anToN1ztRGET9TVJ4ZmNsZgpRKequdrPKaiyERgboR89u6GxshexU8rbmhbVJxKD4nP2tFMG1LgbRsEsF22G4Ro",
  "key26": "5rc2M48ec2iR9jZRzLcgF7fRCG82eHBQ65pVL7pg3R7fm9xHQ8sexP3FtFZgJpfrPiP41Z6o5Ns1QJGkABgEWjhR",
  "key27": "5CLbpE5ZUKeF4baSGqhZV8Y2knLTx7q4su9ptV4tXZv7JJVpWq5v1odoDwg1gp2Ap5fhLTF3NxvSEB8V54yDhfbJ",
  "key28": "4hMQ6GCmLfjXyqLbPjyNxFwJ9pAfkY94Uv7NfkcTbxDkH2289EJDxyS27rxcjLQAqrbp9EUWc9JCA1eE6BcdF7zE",
  "key29": "22gDcDnXBsgn3n7KyGAoXLGb3edmMVs2JZf67zxs1xUEJGi8aiMU8Kb6puQX62Kceco1iMSvxssy4MSC3G4dAJzF",
  "key30": "3DMcrQtrsZ2wCxae3KSkNrmzkpaz542iETBkXSy4LCSnraRagLKHuNvDDaR1HVDLviyvyR81fJxTcJp89o2Mx1kb",
  "key31": "56A1j4YJy6EyV8rGNyvEGZYUoEqfRxrG9PVy9kCv81ZzUNDNm2Y8onthSfZKfbnPQsCgy7nhDAeVqW8ThGgfB8av",
  "key32": "3p2PsWHpM5UADxNdEAn115PefU87dME7YU7nTk4U9P4uhFwWWZh8SqvzgCeHFW4VFvY9xwvx9hUFpFyexueQzyVG",
  "key33": "PKsW6uH7uNHkNj5GoGx9J9Hg6RaWfuaT5Wjb5LiwjGmVAK21QPkc6HbaL4voDXwFqo5CQYzKXJsKNuQ9fAEHfdJ",
  "key34": "3w2GaZTNiRQoJWcFC6ZK5DY5P1ET3mZoaUHwUZT6jyQSxZ5RNC7Wm38GiGKnt1WtmjuwXGee3a67qtwXUBnHrAkS",
  "key35": "SMJkCEgekCrEybkfM1sbQDFvwg9mWBRnHUXnaG5xLCS6JzvJa6L6KCtWRCDT2SwHrsrDh95m5xLSm19tkEGABfh",
  "key36": "2ES5EbREUyWp7CZ7qzY9nKH5nbBwzCkszQEg6V882kEpEf2cS4i1z1PdhVi54Sx16rJF5MWts6pT2djE5h9RDDQX",
  "key37": "qtFppu1nFBMy7nbdkxd1HSeP63QqBWCX2HqmJYXDBd6ptGB8GYQNqFGSq8mzvGaDazRq1DipsMeYnwCY22s8oeg",
  "key38": "5zVNc7rLAtQJzKqpyWTqQyX2htgXEMdxTk4KxNYm1B4i6e31AoKwvBEEkJQRMkC1eisqZ2PWSbTGoq5ihXBat9G7",
  "key39": "4oXxY6c2QBRuE5qxu8j8t7nE1NTDvP63nfkFHbMwV7ecU8xgBehaFRLqSVA1t6b5mXWEQHPErg9evoihRUTyeoaK",
  "key40": "3URWpnVhSk7VbcFjVZYUvQXHsTRGsNdyZFcLdGXeNsZGzRiSUswnvMyo7kshGYZgAQQCksW9Sa4Eboem36nUX6U9",
  "key41": "epAFSNo42fVK9n1f1Zi4zr4D3YD7qtcUC9vMSZ5o5vhdHhSHEJq9dQVewmDkYKnqAYvVS4rxCuGZd9FSxTBadx9",
  "key42": "eJ3bV73UJiFfpK9ht1G6tZJnehGnJ5AZLtWKaaSeznoqqoSY9P2XW8rEhTZcghjUaMisqvroUe8xAFqa5ca1Xuc",
  "key43": "qCG9sXAVxLgNUPRvEyZrRpLJgUkEu7PH7oAeCzQAwoVniti4KxRLtDAHrfPhsJLCPkL5aChyQmMQEAwCmp8QNzc",
  "key44": "2RCYw7ryz7AhxspWBnm1mYCPHZMLyq1sH9XaQZNXdrWAdfdCTypEGB7pimzZsDWiFoA59kEUaNM3PTFfcSRPmobu",
  "key45": "46aGTS6RExj9x225nPyv8pPbJo7JWnJL84yB161UXJ2Yz988Bny4woRLSpQFRqQuQfCGvSnkn9zzcPbW8FF5Wxgt"
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
