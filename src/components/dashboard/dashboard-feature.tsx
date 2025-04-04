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
    "3uxjuv2Rvk6J1Ke3MQvN5DyxKfFmr7YYiySRsjvVvpJ71gew3epXri1Y2JZVyCNbKgBUGqVr8ZpeiiapgBkPDd2n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iYPXPvb34xc5ApZDiYEwsRqrrDBP6eBzPM8YS8CP9x7pxSegpgNERrwn3bfbB4RDpj8C9noHCYNTirtMcFyXamk",
  "key1": "5CpYPDV9FDp5Jp7KqgXNkuj4A7PjXfyg5HCg7KKXusSMA5w5YxDWuo1PWYxejTZ7A32svkFqbQBL28oHetm3tssQ",
  "key2": "549u3UHyJrg9HtX9HA1mbGbcguU5gBdCPHJFHJzcZrxXUFxMkHBvcAcyFF62sapC3DiBawWe98C6j2BWuxQvr5Wp",
  "key3": "jAFGuCjs1NNmjePRK4AQw8jsLea9RYL68xhkFiDkc5tEZ6W6MriaXQahBmVzbdxCzjZSeJdd5RLd2xXEXErPqgr",
  "key4": "4WrTiEha2qKZ5yx7CzNFkrjmC5nrFQFDVbvsTjKiPaKSjKq3m93ZUMfXT12BmzSko89rGFgjWwoNwNwd4rVEt1jC",
  "key5": "3EvGbwezaUfxd5eG8y2Uz46q8FjvWDnUXSBodE5zzFnZUKBxwq1tXS5ZYvvP8QfusnYcWusVdU1ZVrQRdgQuFyNa",
  "key6": "3sqFNErWdr9EKswq26KrhXc7qacvd4uxsnyXA85BqVSVbrT7DHN9L5GYGxDwpmaRFN9R2ST5QQKEQcaMufzB3761",
  "key7": "2aTTyHi8Kf6EdCLps2UQdnrZhatPtiR9C84DPj186jbQJe8sB7nPhk3ea5xoqNhdJNKLXBy4KHLuNTcBCuixFUuD",
  "key8": "zE2T1W9riqvj7yxMUC3JLC7GB868ujNUnCyg7BQMzurMVzqURQtj6b25iQzKGBs5q6NdWfV6PLuhE8Kmtuzxu62",
  "key9": "Fu5PXfS3fQnJXh392JMkWUfzRkG44aSEDSfUw5WpJdJhiqsfDsJxBc9eqDgG5EXqDgvgeRzzoneDmJ3dpKRn18A",
  "key10": "2HAdHXBeQGiiCdvTcPgtwCRQYcVykuT1K5M6EUjiF3xNYeE4hKxjnPP2J3pGVxvNvb2KdbN2XLHqS8RT3EyQZRSt",
  "key11": "49A8xjWGtSVepx9DmNNDAHp6DpCA6jLtyGWPzMLA2sWFFfCFVWxTuuYk9G5dk1CpYCdTZVGSXmdeRo7uf7vcCtib",
  "key12": "3MLELDZk7paQDvnwHD49PQXVWBZaMpb9JiBd4P1itQMgWkku2BMi9tUG72pD62p43adG85fnTDDet7ZNCLQoKZhu",
  "key13": "K1fbKP8gwPF5Cp9VqecEg6zr8UsmHDN4bjfq9L1bmnW5HPnmWHN1CpbC9STquUUrKqdJYnbpX8L6EqZCoCiJ7dX",
  "key14": "5y2PvyUQXMcBKhd75gSZHPmG9ge11HAbNRJyMNKphiXsijMvrEi2VnEPuZKNr9i6qRsMKaHgpKtg8fYGWti32Yud",
  "key15": "4nAgx3bYtbKdNKzD9WbWJJfJEqRPw1uXid4ec6bgenTdAvtogTDfhWP3yD4LZePZkHfWurqdcfPgXGQkm46rRQJM",
  "key16": "48o3Z9SjDy5F4uWrM2q9YNGHx1MFpoWtksGLamfxzKxGHdNwXVDghssUftZcv2KGMqiUu9KgyT5iFh7Jdyhey5gQ",
  "key17": "2fbYAACTwNrUYGBJFbbeht9yPDtvc2sSLeHKUyxWkpeKwWFbNjRrDQ3LxYoAnQB76jsF8Mw8daoGi7NRG1DVZvDP",
  "key18": "3cMG5w3sqPaqLvdRoBCDEjPsMXZQgVaLSMrpFGch1AoBH6AivV8aWcnjemnKAXfAB4dDJqw4ef5o5nnmHLnY26jU",
  "key19": "5L6kvbRLQf1sEcKXQySvWyaVSPozjtqU3TxKL5sbjGjaZ9GJnK2a4d6bXGNcXnwA9oNK3p7fgrPdVM2xqSBbpsX2",
  "key20": "5nmu3AHus4yeaRRrzaY2gdnVvk82VfcgKundo79usA2Y4b9FdEvLH8vz9qtAFvGGbnHusCuVaRLv9rAofjs6bK7s",
  "key21": "5tGA935M5fY5kPMqQpEuiSuhX7kDvVndMUhVE1Fw3s23YJPwmiwSqTXzamKnJMALpqZnvZi3dd6Y6cUFnz6hEJoV",
  "key22": "4zTJF56Ly7eg2D42M5ZutFs2X1ukUN6k1t1kf3x6wZ6JAodY1Ea2Mu2dQ9vGNYrbVztn19Yk1g5CTHdeqx48c6sc",
  "key23": "nASVbXVsHUsWGyf6cztxhxk3GJc1uBCVMM37ZVo4zbmeVQNEyBVKtJD4JRuUznokuA8135twtezhR1kixg24Nvc",
  "key24": "5rPbP9zqaQ2pbsiS15oDN2gMXQPNCMXsTcUPZL16xS42zETnGqTmGV8FAV2Hj6BebJYoLGSMkdS7g4oApuakyyGP",
  "key25": "59vUuxUsUxT9g6tEJkVRXEnaK1b1JAta8T7Hsf3UGpbWwYFDs4KN1ofpLfiCT7rvp9tk473aYx2rHhwFyz6r6L1D",
  "key26": "5NmtZw4jomgiShrnonE5pynqoaU4QgXVJRfgj7zw6JtG7jKeUaWDNTnNn8u9EFj4ir1dY8ixqLMGVFUYyC7tek1U",
  "key27": "3zm9n5J6MK44jXxvN1JceX8pQb4c4DK4J2otPqTqmJtVXfChauYJ5S19kNMqwMnLZKK6y6LEvponk8FJX38LSTst",
  "key28": "3gQMpHpYrZXUyNa5oJSy38dPMTsjEwpoSo3QsQkTor2Hf29paH7eTqxcceDJ61J7173UPbBRv5uwggcv8NQGvoa4",
  "key29": "3iiFSwHDPxt9ehiidspVfEmFzNx9EMMnL9ZMtM4e6y2hW9iTvRi9xtoitsxvArax3WqWnKnk8sj5DZNBKRuro4ii",
  "key30": "2CVm6gvD7iDj4fJaHvr7dAfYiPMYZPVFTPbJ5iSrMZAb49t88j3B5zYzzPvy4v2bV1NVe7zANc5Q6f7JAgNqkJVX",
  "key31": "3tMycAWvkduMjqPdWpkwX3UqLnZqUo3TUCds8kcoh2N69RuZct1VLNgXKmTrFx9dNE2tw9ne3JTWq6HvJUqK4CKA",
  "key32": "5MDeERHc38B2KQXeQbotW3sDsHUpEJLstErcefFcV5ofRv57VF3y3xwquGRPzVDQ5YBfceKYoAzFec1T3kcRhGXg",
  "key33": "33XPh72aDGiPX5wSDAAuvUCVmnHQknoyhwiHXhddgPxey3aLGKZgfebar45St9xcVcGUgb3Xirs92Rng7rPdnWmj",
  "key34": "3eyL3CJtK9m29MbEbvSAEhmg3KbnzuamS1iQ844JuGK7QJxDyokef5BhVNCDHTP7i7M8hbZ5zRzsomJTkGWrXQr9",
  "key35": "3yJAXaGQRQBUgxPVNxEc5E6FqqUf2jZdPgFodYmRcKjSGpNEoNYZRMWsdEAzutpVpqX3zvaThQGdMFVCXJDnrm5H"
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
