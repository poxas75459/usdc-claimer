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
    "44NryYmdUriXkMf5Wa8LUZr3nMMDNgKDeHGYBfiExgfwxPCxXYwLdnEXoc8yHQJpq6bthkSJ3XFQ8RyP1a7U4cRK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hcyZBPTvcC2d4hRDGaAfe28RF19wEC454TSmRm6P3gYPVyVM5e1nqhyucVLhWQa9MyGSMuMv889NPSeGUEfNDBz",
  "key1": "27yMdtvXh7DnpTKvqzLZWXwgEUXYjbFK6QNkg4GDaqhoonYKJhQPGiTc9Lo99diqj1wEsQTpiWhCYac1msQhdYUA",
  "key2": "3F6Bj1oUnfhPiDpNT1xVUwq6jj5j8AemDoCpvf9Q2X3stpLixtq9Q2Vee81YwWohK3VfT5k3BUKuV3zrupeF7hTk",
  "key3": "3XLDFqpwu2CYtDNrWQ4ajTP9XDtA3fx8aQEgJgAh6qcxRD9cbYZcNDv3MHzFSLTuGFtyYaL5kPFara5rMikaXJWZ",
  "key4": "5d6wux4scswMhvxKJdLPpHxvSYHswjNP5SEzxKZ4YiGjJpR5WDAu7KLu2JcgUkWZXeCuXwLQ7tZkAQpTuAQiXVPt",
  "key5": "2RrwurFobpfizVXUHSNKqsxRnmzHnxwz8cGhxP2xs6Jqy3RybAond2cg4mNvxJZPKZDwdPDzxFo5NN2czZYWQz9s",
  "key6": "4J4yR9e1FrbqEfk2BHvhzfmY9sdM9ZTZQoQyAwPw8ibsRbjANMMRWXsav6Ubna1JHHVjKcvDqVaYk3ggLkfCbTr",
  "key7": "4ynzUsH18gzb8tfQm5iFPwtB4T5dx6RBvUJ1oD4NMWgbWw2YQ6dJiv1fRVQNUv9QX4dksyhf6TiAwPJwMqwAdN16",
  "key8": "2xXL7YB4NJdjXJyF3ndL4YeWv2RUDb3QsnCQmCwSLQFtnymRbKJw9SwFbs5h8mX9Sw89NrsTjyHqwTzoJJQ3N9bU",
  "key9": "2FUSRnJutZUYjYVCXnnRiW9MwGXtKS1pyfhex37Yvz8nFKF2Ro5Mv9xWuv5HU9Kj2J4fhqfceUTA5GqVbcZna963",
  "key10": "3WFfBfR7KTCZk8kFh57QGrXH4jcUEA8LsYVpm3VVR7wTDu3BsxdyHgc3r4t2wLjEbc5NTFw6pZj33nqPKjb4Siqp",
  "key11": "3mGZizeU3trrSN9sMB8gtvFZsPdZeeZuBfwPRLv2USxokYcCDv72FhaXaqwntYUHhy1eQLg2VHmiFY9SnDTWp7d6",
  "key12": "4J1xGtM5p4tQFWGrpvoMmqFqWt35SANkaE1eWean4hTJMjPMqPb8NDui9hR4dNsxK4t3jP5u4peZhVfoJnf6Kdyn",
  "key13": "42aonhh2s1TSZMSiih8AU1ZWA14syYQjGT67EVG1We1xkPNrFBwY65RnANPsMpj3bpBv24t7rYzCkiv27GF2hEoq",
  "key14": "4TgHrhpLZUxryEN2Kg6Nm1gSh1nRTq7SHPixSi5ahsBMqD2a7JoLQMXJuKgKmPx53HjnSURH8B8YMom2fGvrSoNL",
  "key15": "44rDvYzr7FaoE2ZgdCYLxgRuk2oLfkqJW9acWSA73iQJZ3eWSaqinGLQZfFCHXGpzW2VvwCtZ3qMNuJ7zLJkR68M",
  "key16": "2KieJPRNzpGBkQBtUKwRP29BLjL6unUHweR23hv3dNZjEexyogkhVUfh5drkHcfoksgL2vGnxhdtdufgrSExQNBj",
  "key17": "3cuwJk533FbuMpZxoZGUCbGP5NiMFZc6q2yb8p1A3ZT8G9X5d5cHHruMffAxHUSSios7RTN7yvryVLDjyBFTaHA9",
  "key18": "2A3xPHxz3t2WQqsLChVDGomm8v1xn26bUdvwscq8EjRepzVuYxLCCBiYhBnt8dtBQLs9jQVMc4VYfSRtwXV4FLKx",
  "key19": "29sEo4kYGmS7H4s3E1aRutSnqt48ezsakM9YJ7STV4pfzZhGHQM7B9zQv2obcRp99HwyWGrednFTyvdLNdaNFh68",
  "key20": "B9kpfYpCoExk7FzEb9T5NndxjW9Ea9i3B9fKKVNdhdTErJw2c6oeHzfU4EqFjxquzhQWDKGqMFCCCm3FUnuqAf3",
  "key21": "5QWuuTDbLgMfbaWnHF3hRJiZdQxetqKBvcpiWrc4yxcmgWLGuPMLiTsXZVPsgFTyPFoYV2GjZ9VCnkDXBD8THELi",
  "key22": "3LpZsP4ibXcU6aiCA9eHrt12wErz8yBwUJxX5ZQUrqDSpJtZ43N9muhafFQpufowRVJZ1Qevm5HwKRd6wN8hkrgL",
  "key23": "5ramwFQdM3iktyivQvF8SaYidQtRMY45xu1pXbZvBbqQiEjYiNjXY77cB3BGJ4YgcquCnCTvpF6c7v8jvWYxFY4j",
  "key24": "5R9z9jrvMEse977UGuEJwZ69qsqazpHKe1fGS2UEGwFxVwH6U7tLaNx76wksh2NoZTCAZp1Spuu3FrFSjgTkCnMi",
  "key25": "2M6bqYPVN1YitvJuiRnddQeDHzXede5DHe7GPmqG49vALTte66eqU8yJzaw52Z1j9QUKNWfHPJBEXgDeTZPSK2xy",
  "key26": "MbkR3yKQ6nev6ssbswYuX57L6Sx5K9Gn9dhNFgRyKkFAfjmDRimLp6vbtp67ruWPyGZVoBGMQb1BP1gPBxtxapH",
  "key27": "2kmoTrQJLmEZXW71GtqosrJj9r41uqMWxYriM2SqQkQkQVtMYN795u5NZzCymqJkPZ42yxcxcsUGDjBpoX5jJCiK",
  "key28": "n6TQKEM4ujvf2zyhvGQPEgJWK6RiS4aGsakg6D2ovnhghEppBNqjWp5boxeG6PhPxqwNh4SQtyH8oYp4iChcng6"
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
