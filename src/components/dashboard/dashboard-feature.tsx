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
    "4Mkaa4k4Qhkv1Ez8WZ3LVsKk2khNfakBMwRg8xShiJcaRYcafysQnaQWmRG9XRGWEeBLareD7RsDoywUrSzAA19h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c366wkBbMVKm7DUpQyNJ7pDufGqVFrNTu1p5PR4jgc4DMnTh6Lo7R7FuT9jtHuptaXGq1S8uT4cubmPLFct4yjR",
  "key1": "4jVzUqs19WudcHkxY6Z27V43g2yNCKoWyoC9tNeSant8J6TGRXRoJZiN7eUuQqXfnMzEYf1roHRNwYBYHNKXjXQk",
  "key2": "5riRCb67dX58RcYVTq2HXibHZ6yUqrTxjTboHj5dKo15nFYycxcEWEKdiwWyZFohpYUNoY5YudhNqE1kV6rByuhA",
  "key3": "4aRcATMWrPRYT2ykjrKFJ5snCrDs4B8fMrjZQwNhWPK4qFw8tV1vkp9kGSHrEuqcW1Aw8deszdqpDTCve3n8xEs1",
  "key4": "47JDSNaykodFb5ah3ikNdCxwgCg5D2PviGctmtknRihg3zfLeWJsbC3jqBcXPyvN9LTPVjvg3iXdiVaMAx6dg9wb",
  "key5": "5td9u7Q5urRC27FVfnD2yc7c6gJim6adrN6h9jKjnbfSeh8wPqA81WEc9mQWqNbcH2mXW5dZkEmswKMto4mvNxbn",
  "key6": "34LEd1ossoiQWXB6JQHwBHBgBDYHGS63pZqvuzdDi1H6DMcLAr7bcxKzRuW3T1xQ9Xk221psGCxSHdub7E8hp7LW",
  "key7": "DfsWCiKA812XDWj1DvpHTpxHytqw6pJ3jsH5AyuvzM1URRQQTrF3YMrs8FfYQ9mibwaeJ2a984odCL6Dra8pi9V",
  "key8": "4n3YeWbfe4QJfb2R3LSUr5cHbqzXpfCGSaJwvEtrgiqUTVmmPnsdF7oSjKgdR5VEM4j7on3nkQQk4mfmZPftqaiT",
  "key9": "66LkezpXrHu8NFwgRuCUAPEg5aQVmynDCsP6uGtzMSQrJb5a36SRpzHtPbKEUWM8eUV9LAsRpYeM33yX9nKgyXYT",
  "key10": "4D9xZtb6sdimAiVEeutZS4Tw1u7ERh7mgzQxvYoDFkUDxPwwtHxw8F5MfctiA2bMBA3MxW2ajP9c2H3i2gVwqAeL",
  "key11": "446NFWtAYEQTCuwXue88pC8i9PrwfuJXLU6TvD6dNE1soa9erLggsUhPeSAEdEWNSCbmkszGAtt2WcTfe5fwHCbr",
  "key12": "2j7iiWvizwJhgR1CBe6QpY1XFDiwVE1E5Stz1vQdCZpJk3CQqMZgXZhrJXNT59PK1kB3dAxiwTThT2KUyKqPudPq",
  "key13": "51YoUDnRNXyubQTyLnquATkAuKB9MGYL6DbLYU2Uh9m3qVtkrt6E8gG7QVtgQcU6Vogf1u5nr8b84M8GepetRXcz",
  "key14": "3c5UDmS6pmGThB8eEgtPNnDjPfvHZn1WCg8JfXq2msPPeJui3SThnWKX8Fqr5EyrdvRT4donmzJJbuYr5jqSj9ky",
  "key15": "5oQwtvD9Yrwu31Y4jyxahT3pQUtREjuuwLeRq6qxvVhq8EJRSMnDKJZZ4VhpBVNtQRNNEkByzYSXFCn8orpjV7wG",
  "key16": "3w2YmcK9ShfLoZv5pDwM3Pbsr25fmDjnD1rtRAfmtPCvcESbwahKWU6UjyhAAZqbZ2r9qD63i8AFES33mYQkNTzF",
  "key17": "X5UMDNNpmCyLD3RU3daaH55yZkPKub9i5eTo3mPmBytaLeDmidhY5ZydrtNVbWAHTocUFpk46im3RTpdcqRVJ4h",
  "key18": "3VWA1aGYHZe7uMLERwLCtY6mjp5zExBwZvBB3e5H8xEagwCugYzev3q5SfUkN9PDBKMaxQhCdQCp5sVrWRQgDuxv",
  "key19": "Y4aBdJp1YbhKauvDP1FP6jWmv3HzVW1nEBeLDxxsbmJRStqbiyGjCtHuaG5po73VbjroCfwmPmFhNndy2rTyB4T",
  "key20": "4wZqbxKmFBxLSKpxbZ1idqz7gypotVnVBrZAhiw7XSqQXAjb2xLJCTE8iRzunYNU86CXFP4Dema9kruMXkjxgaz9",
  "key21": "3ZX6k5XEMxKwMdZdf3PHbtEgZRAqdm4sWk9YufwnRREo4puJtU28NeXiR8q7NCuM7dRnEkUDMUjHAohFL5Pdgydo",
  "key22": "N8nz4qNc5nmYEx8a9iFunZVw6vphxqAp8FQomHhRC9z5Upvb2adxdhntEGVxAipP3meJM2SMTfkJFDzVLxh5Etm",
  "key23": "hW7iRvjgeGPrdVqPnf7aPM45vQ7Zau9R38cxirgm7BgNABheFLSi4DVz7DfCKPZHfjYLY1MV7y9Q9kz46S1Uk2Q",
  "key24": "2mP1vGdahDjHuQXBwRHWBJr66B8Tw2mxtB1BpUq2VrhjUTnVanx9ezzk4Y9PmkM8wCTxt6koBmjGeAB8LtsVQFKu",
  "key25": "2AxjMUJHeKsAF2arj26XP1zGzHeumYgxnttpeApmYGUyveTtZT5F1MCYk8orKj4vdyTPZ2txYqwm9ELFToAiXZRr",
  "key26": "4V5Kjb6CGEFtK872QXuCrfEiLqdMCBdz46G4moVUmg15hYkVsh5XZFyddjTC6XG6JxktNfU7a3fPN8MiWLHVaVjR",
  "key27": "5XvWmFEsdxwQUupeHun1wJRGfqwJw41aGUNhuY8iaafWMkNcMfD8wZ36cKQJopeUzUA2Qpm6u8P8GmVV1EJx7ibk",
  "key28": "4Lj5dVtsNaMXBn28h5HxxzWBYxu2ET8xBz7BpF5JrZDujgc8gxF9YnVSpZxoffCF35S6zbMq2YfTEp8ieCzj71Pi",
  "key29": "5oBoCUdewDSW5E63DrRKfRuy4CisnBb9DBvWpGT6niSGxpHTyk4APbpfZH1pep2W6Tvri8zobi4iuUsHzBxkQnGz",
  "key30": "odMSd6DCEnJ9VkJZyNx6txpLg4fJPwkNbxt6PWvvJefaK6xMEMwxGaqQ6636TrDgwhxfKwYQ48ZECzqpEDtUfhZ",
  "key31": "5H5kYioy16c3dZMjuzMcfA2QaUeZzqdrewjPWy23X4tB9RicbCiG9eTgDABKb8TiEkSrVdgjNjeqRvfrviMds1Bx",
  "key32": "5aHvuyhRFxESfNbLryno5UGkDwdrzW4VEf1T4krFsiacm4zgwtXrbeu3PhUmrm1zZyCiPyVQBgerd6dAuY6hxazn",
  "key33": "2Hw2zhMRnf79VHxAR9UioKjxzWJg2Upv1obbszP2BbQxa5ui1ef3J4QYCfVKqZHJ7shes5YSkiCin3Qei4fZDkM1",
  "key34": "WctgXXvtnU7dHtwMHXxDdhzyEfenw3wBUmZTbHDZwRjV5QQ6vZKVdw8ZCf1YhY82JYVceLMFM6mwmwFSG6GxTNQ"
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
