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
    "2hVGCEUT1gzgUMQ7Td2BBiF11qPNUbzZNSbGP8T5NPbP9qW5CzPhirF6tur1ceXW5hLuSqRnveY1Xc81DDNVcxy6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q68evYPGigRQecpjQ8rK2taC9tNjsSb5mDMCF8cPkjzQQQFzB85U89FcdgnDuzNC4UTrFEW3AkMkP83P9mZJyzY",
  "key1": "43a35jEY9RiKw2sNTPVCvTHEwBeLUfgUAAbsJgr8TTSsdDhRo2s1BhQZZNc4TetSyFTKd2zZB2oKmtdre5zFtEYj",
  "key2": "YYqhJaiGDuaCn69cLp3jVWC2nYvkXnAzbMU1G9aFVqxjFGwC5DAizbtmpjdAwSuxZwy4Cm49TiVfJRyrdQpYd3y",
  "key3": "39ZfFF1rcn1SCvVQRXpnuj8nNiwZNnpJ7DfhNuxdHiFJJbRBvK5TpFeVhSvatLi9ZeM9FTE76HknMZc1h1GhbwMv",
  "key4": "4TYJRf9BtdCm94DAg4sRdrk2wgT5gJRv1xdhdSwzdAbzHqTYCXwHQaawRzdWZpoDjCG5WJzmcFtsBe8igKHScLDU",
  "key5": "41414MVUxTAUk3cxNm63dmXUBS5nBYUHbYBkntnc8LAzubWs5Vmq4T4Khw21VH64n9aNeHhS7RBH43erTC6ndC1F",
  "key6": "46t6rhZBnNXaFqWU4wzNBaTMw5qyQRXW9R328YNgVcMtkKfZkSs5NY9kL6opyGoS7WrfLQvaAsXvqFrh9w5ARQfn",
  "key7": "frGDbFC8di8snaVX6DZioBu937f4wEKNct9EsnPDtoWAZFbrnyicZjvDJU3spCJrRyjoUcvd71YQrFBfuDre48E",
  "key8": "3KNq2miHb6TTD4kBdv5BnZHFjNUfxvpXSHgYud6h3g94KGXbdC7e8Haoodqefir6YRjg5ZS5AiJNpfbj1zsuyxQB",
  "key9": "3wkZndbK2TjKhqsVALt9fyoAsxmsm4k3ds9HamnMAQdvU2crYb9KSqeUhzmgKYHWdCsJ9x6nCghAqre3cH7B6gu9",
  "key10": "4H131DpzMU4trixv7GTJ7SMDT2oiAFFdkzP7WeXSFn3mvHbKMVEeokGrSkAbSXEqu5NtJeoJGYUF3c9acuTfVYEw",
  "key11": "5YgWZTvWUGRWvvTe6ewKUgLLucL52RQoyPepcPRaCFcjFMroJq64CKMqPDVmy4U12w3bepxJLdiCNoN6tLohNw3M",
  "key12": "2t9r2FtWowxzSThGrssdDvLmmfz5PXJaD2sZnAuBFH18gnXUmJqZn7pfY6TJhkpkqEVhCdQBCL3buZHGUarw7SNc",
  "key13": "kPfTEPvwVGG3yFGL9gpboNHPq11Yx6o8a78A65ifJKAfU55aBzyghjoX7r6ahnqSuZ8RB8Jb5AkSsuPkTuAovXc",
  "key14": "3aLiNmDpQrxs99vmLu54iZpvfB2oXVRYVgMXXyzbpcKw73EXXEUguoJ93TNH8S9LXFxkZ4VfhLaDntF5NJmaUTvd",
  "key15": "5xkfc686xDurbUKF9dD9i7TfMKt9kPHXDupMmZMbKEvvseBzLn32A5Ndfmzk8wc41gppqYUgD9oV5wtCcJWas5Xc",
  "key16": "pHBkxeR2jEod2smvn7ZAzdHumfwKZ3HSDSwRoB5SJuJ8cVAKQu1dzeP33A1axk4TS6zVWboKy76zC6GUUTDkSvb",
  "key17": "U4LE35LTVJSfd2yXju6aQcLfRv37bbqWVDeLtb2DiqTXFVtrsKDkmiuykMTeKqg3prkGrbeJFpGhFCedk1RjE8G",
  "key18": "2X2rUUU8zBhdKuKZa93pXuPFsghWLWNUzJdhyoW7puVcWLeQFYfPVm7oVgfZgT21L25jwyAVqG4DNrj5DXih6Qkv",
  "key19": "3uWKVooB7CabLjHWdoGSb8UCy2n75tFWZmrTF8qdrhnBrDrheqGK7QMEe4argmcmALME7eXHVS78Wwu3CACzbQs7",
  "key20": "rxBLvZ5UVhQDfz9DduWyXxSna7atftuNsmHqsV84RggEKceDZ7rB51LRRifAwkdC14cok1es6KhpX3EjFPFNiYw",
  "key21": "E1dUUijZzrhuKpsFwtYqvc3HMKA67FWt96CNtKrwQRgWKpvynsdMjZf5v6faozJh5cuiH8NzAfjc11SdTQBrNTn",
  "key22": "x55Jzz6qjvAZ8rWVNiEgDqjnRYVojJ7RTz8UnWi6EruGgpWcJSFAiE8vvwKa9H25SEqiyjjbgaSRULko3z1fEHp",
  "key23": "sNhwtSZRnKGwaRqN7XeKZBgyBhFRGJTW2o9EijVEvkXKJnSVo4jcL4LZ7ppRsjcnQZeW8btpFChRXi5itekS8kb",
  "key24": "2MZUjXZp2ySCm2dMfbZvXMb4zSiNGb1oVYGd7Nb6rkgyhM7dRpaFoSjf9CRjtJGKgxcdv4qaLjMGU9BVykxigdTD",
  "key25": "2joEVg7XUQUoE4seeAdBA3PNWwDf8KjswDGxkoRqzYwHCdix8sCynmaFv8mwA2jAdhUSm5Qk6NsUN36F4Rb3KjTn",
  "key26": "2sxhZr4zfAwHZtFbKMNxV2HjQVEMfQyiPMBvhZ78AMZP1r7u2vG9bYKgK4XjUQQUyswNTA3S8LMTpxSMibBRtXaf",
  "key27": "4EySLoZPuBfUohcfEFjyyXKj41NMp1AUfWUqraJW9PKsambWdvMbVkN8pCuz6UbqdmZm5TVYdX8YyTg2fr8adjrg",
  "key28": "2gqmT18RSvQLK1zixSNKwppuw5eYPf3WtkkoyBMb58QjZTrjMkV1iuuCMiUPg6biEwgG2HnadaHTG14AGV1n1r4a",
  "key29": "2d3FtAFihxGiSiT7n6RUfWTTWiLeh5SCeap2cUDhSNJQaire6BMRe5saaEKLDmkJ4ERU4gHf13915PtNivTnzQPC",
  "key30": "3RMovPEWctr5fxmRKpgy6CkuwzbUs3PcFqkKJxVhQLenVzN6vjzmpXbw6F15BZ2dKsjzb3VwcWybXuMNU356Uz2G",
  "key31": "59AF5XozQmWKfVhxcrHCngMSQMBEpHVJ4sv6E7X1CB3WJAVMzW2t9wu7W5BBH6LqeibjPcnrWnVihUt438aCi8oa",
  "key32": "2KK6rLXdkkCeM7jeX7sEry7EDswCcD3Qeh6fbSiFEzgLeP3SDe81ix2nqvniVFozZXN6uD1GSv9CK3QN7jLLvXDw",
  "key33": "35HgF7iMdpwJv7T7j5qbGeoyc6ufv4qKHNCsKttzYxTizRp1f3hkozYnjGcqcuyQZ6fUdVCgX2HgKbirxigeY4PA",
  "key34": "24jUq6FX44fqYUeCUVFd1uNXn2D1qgzeQwvPRFarKjJjCJcttNzNescncw4WqhSQfBeQcTV2QjBxhpYuK9wavt4y",
  "key35": "bpWyAmYaRLobDiyCnfNcSvuroe4ZWPpEt1kxGFvq9WsCGgUZAmfXhiwtHpUyWugDZn3SKU3RjxJ71LN5WH1imTz",
  "key36": "5eZyxGVGp4qhBy2vnhEPun1nh4AbwAqFJp7PvJRnXQ6P9bTctphL1wWdT3YXHwDiZhvXMNZ7pdkKys6CH77ZWM3E",
  "key37": "21KvkG8xxU6PsnwHPdvHVKhf54mHCbebsnWJojMvXguRmJ71LZmzCb3ELMXhnUEfFpviNfemE6AJxsVaKSzg968b",
  "key38": "5tgo1SdN2xV4hqMszT932MGuFjhUxYKWFbX5CRigyTxhvL8pqtC2U9UKrQx6L31EkiSo15sDgxNrf2ABD3cYqaps",
  "key39": "2yKsNhUTWzsWvXF33NNQZdhfPGgx1e6m8s2zkd4cvcxkv6MeX2Qx7LSJroj8kw8T3PdsoBxNL7JbTYFrTx9NzzF4",
  "key40": "3mfgKvexV1sighmwR6jKThYpVG1Kzx14gNvSVPtyZqyT2QBZrYKpC7dReqzSGrE1AD1LtdV724JggSeHuf8EyGx",
  "key41": "voYe9Pzcf5eHPTc5gGhHB46W9ZsXXw7JjHeaBMm9XA8UWVUt27aK553Jzx1Pyp6hz1DsBThdNqZzRMjjz61e6Sf",
  "key42": "4ujtpr58jgt4VauXp5ANv6h8vJbSZ2h8aY4MsRUjtp6ubEJxGgU8HntJ86qn4W7e8oWtd7Z7ZWiA99dPwzEBXLrH",
  "key43": "FBhaY4vPvZiwQyDhAhPH49wj6emZ9PyGVPmXzHSs8DQ7wDLXMnQZ4HRYmh6bC5aG8FAn95ZamCVf7mH9A5NdebW",
  "key44": "nQxX3DvPV1Xq117YTjtcpN9AiwB82XkhDvXm2zB54wNKiQ4yCQyS8M1wDQvGW1513qhcz3LVXCXw155kbiBE9wW",
  "key45": "5N7X36jjt2B19sZjoP6SDhixdqq1aRHp7xLpaEQFddismPg1wSZSRmYnpcmvCnTPCRk2qYHpjag7jLUtQMXsAjGf",
  "key46": "7f9BcsfK6SCQy6KZG2mjMJK2YsDkTuo5XJ6uLXmBrY37n5QNpt5bgkMvLVEaGpAPnH21a9uH3n52Cvcj6Rvuok7"
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
