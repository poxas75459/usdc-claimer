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
    "4CfyLzTdEx7N5Uyu2T3RsnADh6dx8UZmtzD4PHh1brGVdnxZdLmH4NhvX4mMvRtn8EY1BZQVW2Rmfi5Qm5Z3dczo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nzYiPQspFKVzz9WdgSjdENCzDMiB9rN3GuGZ9eewMn8kQ4gN8GzjYcgpZJttEa89C6eo8avxWQSaVcgq4MX68sA",
  "key1": "reST75een4pvFAdj6QvZUHCRM5qhgo77ju9yM7gJNLVp5X6zfvtu2sQR25bGsMJkBgt1wXYFH4vkLBBbDmvVsNA",
  "key2": "5LgdszhpSWHmkSfDaRTKtzz6g6kuh6ibS2o66KUdpNC2T5PcugAUmqZu57RHjVYszGANQfNKGmTF9hQSkzopfQi2",
  "key3": "27xSvTgZcSUzU5ZDCtuaEm5Wb5x1fLd4TUvNi6ezaKQCmuaFdo6XtwJPRMTib75Nkq5WjDTA46JTcoAJb8i1vsFf",
  "key4": "3F467KkrTUsysbYGPc4XTsSU2E8woBGiVQpU8XsxrozoRWDxc53e11SeqHMqU5PB9bMxy4dSBjbzCRuXzaRXDPzR",
  "key5": "5xyZmSoWC2YVYgp9fsxRycST41fz9jVDuX6ThxApANm3dNn69XtkfZno91iFxAWi9QsHxmR55fk2pFc6kVk4JVhv",
  "key6": "63CPfWCxYjwT1pfpY3W8CzGWvD3qbucG1pSFUcoFir5XxWDd16HY8oPJMyvYScRDx8WVjE93JwHTu2DyiuzM3wAJ",
  "key7": "5h4AGZfFeTNaD5HYcDHaPiZqFvV6uWWsHdJNQU4EpRAumS4ZmTcjBcAek44yu1U69sQPSqHN14KdgqHHgVVgvhC8",
  "key8": "2UpLf8YpEga1K7DDi9AQXLmnLuazvcSydqCoy6HFu9DwBdUTo2R6SfH8QpVQVsEwkZsCQwTJb8tZWk7XZxdmhxYB",
  "key9": "2yzohPEJwzy6bi3z7Wgyr75PDdVDdHovURZ1yzAmE1gEmXavpcwgFBebhdGSTRKofFzrJPc27aoBTbohyHGmUCXU",
  "key10": "2D4b2nmyawf8tnyrAzhwtXvTzRPPTZ3c4aaxH3PLhLNkaVx92c4fEszJxNCyUo5wknzMWK6Bkukkore8p8L7Jyab",
  "key11": "2xDTtGCqQyLVbBkJAiGdnro3u8HVNDtHimFuT4WzioTbvd9qnxLgRgBe9m7rUtUXamDjX6GQT4aRPGaPL8T9eyz3",
  "key12": "3MCA38tAFTobqJzvaYfGWQAWtzHqfBGf6XkTsZa1GQRAjwxLDaPSdEFE83DadNGXxESTXb1KF7ax6KmnzvqSsVGL",
  "key13": "2rwA4dxWEx1rX4qG8wH9mor6XwRxwFbfzokrGmFt8h2Jvfc9aDLohnCFRbJXsfLQfN5ZQdvqe4h1BbuyRMgQ7DT1",
  "key14": "bcHWecMiPiJiWNHXLHeChigFwGjzLcfanQJ2GRmenVw6JcyxBzCcWzpmrYhkbLUxanuEcSjx7fyfSHHCqFH3DgL",
  "key15": "3iAC38ivYYpg1CjoG4xzTdujdFd2ASw6eMsvZuefMNVJTfLfBgDzcwPZoiqThdiVUt4AuMr1A4PAN7QtiKEEF5U7",
  "key16": "5BCsDg9u4PhNsWHP1Yo5de3bUeJ7mnuqNjBJjEMGfDC21x1DX3PFEEhxAQHBd1Y5NRk4acR8YjnmbsxjurznLus",
  "key17": "5XhbiMb5QEabbvPXUFBFV3eWUMQqpZvP3yyukMq38Z6LGRk7YcWmXpDeGXyExn7Y9Uk72hCMHPm13duRvgUBThxb",
  "key18": "5SP4Yhpi7HWj4bQrQ56UsWfBwwhJoBNot2XeED6QBfihQzQ36SkguNoZB6iHnCQEuqq1g8SR67P9Q87YJpZridpB",
  "key19": "4ngZQfgMcjtGSy4Y2CBgqYHLAZ4CN4UnFCstSwJSD5aKfi3bSWomoCsdDiBhRKtt9FiqwfCwzivMJD3w1yf7L9zm",
  "key20": "3f96HiEpbPjBLksYPvubmBadYH8V7RPcCFehSmDT4TmAy2X3H5HiXMbU7FKYnef7i3W3hWQoRBmGGWNFe3qkr9hP",
  "key21": "4ExDuvbm6wYtycrfz5A4E5jB1TbL5HwPtMyaMuWm766qFY9VYZNETQV5KmLN9ohxMQdo5MaeQyhuQuY1FmCPmBoN",
  "key22": "Re7Uki5Joskk5qnyuzZX78xztaB1unSdnGeG9bDBF78RP7JiT97mztXRJLPSW8VFWRvX2mgm7TjRnwgtLUbAcDD",
  "key23": "5V71XdY8WRjM7EwRfjfjz1KTM4rT6dpTpCa6QeDAq8dKMFKcKKUh5wbv2tk5n52Fu5tBzctEvk1ZYfQzHupnqMjx",
  "key24": "2LR1gpaCwfoYX6j6vzTLKvqKNNk7Xgb4cLakADo6K6no1jJspkbWdVwfL5UTCnRH1LjeJ6kVp3kQs9FdhXZ1cdS5",
  "key25": "3RsqTpoJN5mKzJ1eakNNPSG673JGwB3rXGjbQo2SSoeudMEzNzJktxpXi77nTfLK2GgU99KuJRoPiuzzpL7ccf5d",
  "key26": "58yMjqhoPeShFtJufP1WNqXZkZWRgkhrygdnXnP4oPsA7enrVV5CxbZrftQnFyT3n5Gf1WU6B4cYvkhJ3cFtggkU",
  "key27": "4tSN9spuKjisZK7tCTVBk2H5ruiVfXMwdKx5eg2wRyzMQzuS4J5ioPwEpqi4x5SkxBNgXqSWHYtg9a1hFAyj9YCv",
  "key28": "pKYBBonYhUrvq2PTCaecqXge1Hqb6ccFjGfxMrMUE4C2FU5Z6AxP9VPTS11GkWh9bYnkDLP7Ti9zEFvaL9epPS3",
  "key29": "24wiV3GU35wvyNq2GuDSxZwo5EcXHinjRg74yuKKs9pCeKBeW6cEg6wiT1fbngFvSDqSP4kA65xGYVwCbZpP7wmg",
  "key30": "5mZqZLkZG5a7bk3D5qPLrzvCodCwggDMHoFis1NhPzWntLkAKqXThHwmV8hCkp7SQ3CQxdUPsesoHzGYue4aqkrv"
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
