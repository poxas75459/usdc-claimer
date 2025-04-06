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
    "2Lk8RDdJydMEiy2kpRNE1FKvDAoN8pphVb3emxzmZjeGeRzCPbGUcUfvUV9w6LL5A9HXKWhp7KYDbC2EKbbKacvL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MnqeH7C9Y5jycJwybDK3XUxJQvcFdMGsK7jaTS7g7j1HV87R3bRyh9ora4wMn5h5naP4dE8y3mi1H5bvuFqrriv",
  "key1": "2ikzqse2jGVpkQSVWMsLT9PjSj9or7U9jLUYGPgSeZ4KQ1babZ7yHEppCZEiTxT3dKpsCSZLME6HH9GwwpkRjgw5",
  "key2": "2TrvBPVgsGFaC91k4nAtnqfRx2UU3Y9qcuAkgbHrCD3PUbN54JQSF51KmBTnr52pcSyUs4RGrXs2yFpCMWkrbZ4b",
  "key3": "MiTzuJJVevPinRtk5ZB6Viz6v6LgMe2HxtXVDzAw1Yo6aGZuUsSwJ8NKB4S3eqGdrgfqQRLUHcVEYPeVVpztB8H",
  "key4": "5bcwTVq3jfcPSzMEtr81RukuWF1F8X2hYNU1BNqjFcyfJAAFY2azSkbNgqnAb7sdRtGbdHqbM3Qx6YmzFGMQq4nh",
  "key5": "4cUnZXWtjy7w33dRYXNu4uEkEKiP8EjQzj4VXWdv9QpRRYp8VRHdbvp7zzy8hjkpSgF9cS3L8ZEA57UXjfUpSA2n",
  "key6": "3fy9Q572Nk6QVtjfjfLnCQcAsbmFxAJqpXN1x5mr1WiJgTPiJJL5QhEfHUTPFZdRghYRytAaWJ9nUYxPyAkAieN9",
  "key7": "Aa6iwKzhmdkazSSy6HABUTPQoZiTUzaPNQMrNcqt5PpGRRFTVX3ZCp5zvZy6ZGWePo6FtJLy8d8sDPJWNjP99yU",
  "key8": "MUJRK6pEz4Pf4emoQJAFGH3iRC6JJy8irLB1aNDyPXXes5D7wdPt4VevVeFiDuAbkYbR3NNbGmKWmFsC5ciurzv",
  "key9": "pfca7YSBaHHqFW5PwGfAruYKJreXkNFrngkHM6pL72U1ARfAvqYx2nf7PTXvgjmS7JbbUgtf3kwY92vBHeSjGV8",
  "key10": "4HB9xqRTooT48dc2EqdZZXa4UwEWdzW3CXCSGGNyGjARZQusKZGhFhWx2eZW5rZy5V7iET9BeQWwKLjf8HpaDZNG",
  "key11": "KkBJkAKnHPt8twfdMEez963zSN9jjgvEiy5NwW9qduyd68CPLENfwHBaK5bvTGau1adLrFYcFH3tYzZkhwc6dCs",
  "key12": "QZGeY58i6pCkLhrhzfQKUPznCSp7pLHSPwZjnTWwTrBMZJXWbVvLyaD4erTvYZSUPt1i9N4X71c7a2d3EF3QCye",
  "key13": "1nFzz4KmBukUm5kNpiRR1HXRphWUwTn8KnLjeEDDbSKTyz1e71Br6o7Nazk4nNDTfXkk4TrFpWU5rz5k7biX7tm",
  "key14": "4kTh6TyearQx4ZPC75dKuqAnKH4BhwXvc3NssMuUP2h4AURB12KkkypkvocChPptZxXXCMrPgCrjBHQRWKadP2gQ",
  "key15": "4K3zQDtaYVSrz7MSCXwW7unYSAHFpbUVnzWExauTNwdyLttwYsa9dzFo4gm9kSP8oTi8egSNei8RYkv4QQvXMhsc",
  "key16": "3rx3BVMgjV6w25EQRp4nuf7S1nUAYupFsrxRY6vUZPwBZBKdiNkmTWnxVSAifGDW4zXdczrLYcYjy5A8GAt21dDU",
  "key17": "fcZZ3t91hGULikaji2MB58yBCiAFoVUtiRXA9VyXKMQZz2MDoNS1U9aDYvjjCvVjaKvHvsPzCjw8kQaY5957ruT",
  "key18": "QyCVCyvbiwTzXgWq5mA8kDz9rJjYtHRUTeiFwXT2vnVJetnEk9ZqeKXejJrWmG1zgAyoZDYh2ctQFXtZHFPAEL2",
  "key19": "Sa1Ej93vyoeo1LtSTtR7wJPQCxmteAC3sTYXH3qSWAVptT27acvwSiHjNyuoq1iuv1di4LJS6fDTqA5c1Vrmh8i",
  "key20": "8KkgDgbhcQ6dLtUwJGHmFodHqoCfWMJ9dApoZQTkgefS7GdvNxz9KdN6e1ijuquGXXCpDquCQQWcYPrJtyKfF3N",
  "key21": "3UUo1gqk7UrR5YGjX65M6c6ezNAiLunjgHbsYgXWsiW1wHQGCYVkNPgJREcjqvyqoHp3XuCAbaXF3ML5qM2Kpw1u",
  "key22": "2dWVXDaH6oFnsWY6NwZQKLQ3xG7tPjVXAqhjhVrHBcTR9f5M6cz9jExeaBKFY25mjTrbgkAidDhmEc64s1zFVpui",
  "key23": "5xU6PFBMsuA2SYLYm8jJZLsp2xxFTtZPhNVb1sbkBuNMhVD4ibHPKDfBNAGGHZy9mnxfftq8JbzisVhKXpBBewag",
  "key24": "5qqnx22bp7MMzkTWjo995ZmP1bmYdm16hu1E5CWcetmA9SBJ5i9FomJp5zXuZwh7tj2hzYzLmG8osokY41e5AzzA",
  "key25": "4ZpYB5ZpfjKmy6QPEnQpihYS1ybsQBc1LCLXQtDAeaVSzuqYKf6Soo9y9722x8V3b2qC5Gwpr88fSsYUnJ5CaeED",
  "key26": "5BvBBHeXXiv7y8T4nx3Mkkbb6gG4hcPLHmPTFA38Z4QiVxxSx5jHvp8MoWMvbfVDcNZacvn2NSqSNSYxcVhB4oFd",
  "key27": "5CnGfU3MbWsAus5KKRfrYpeScggWDEz85Ck2GGMFK1fe32KA9mh13v7dPzfAPQGdeZte2PpyhUaNFMsb3kxf3BYa",
  "key28": "wg5jxbBk9Yu4WKkAh3298refh7361yiBNk73AmNmk2J5ZViZdJBFg76a42KVXFUuPCb5yp4j7mcxTAyjoBa7ZkZ",
  "key29": "2k9wGm2dnXF2JFa5GsM6anzpehWz1Y14WYjkzBDJfs2RxwxhgkcTu8XTAK5SGX1LBwLtq2q1QpbhCo5LtPdUK1T8",
  "key30": "4aTitWb7Zo8XVtGxkoqw3yhzXSdMrytD5tJjzSurjkj55XrRd9RjCFXBc8nen2NBpFohUo6eDKKFvWNYrad5TMeh",
  "key31": "Qx5bTkVrHYgZhoehzPuAUHWxPASBca4eJe7wPHMUZeB5kzNxQAU5F9Eujo1v11a1rthoJToCGaKAJFb4QcQscxM",
  "key32": "4nMnw7HgxRwoS2KquKbU8cibDnidRtSKvyeWV1uwCZRjDi34XKmbw4yeB3ApxMDP5WTVCpj5kUXDiUVTJQKrYEFe",
  "key33": "4CZSP9gyGjS9q2qHE9JUxmpma9L5CUw6BwJi1kghyu1UNrNvMHo9zZa4SetKWwXuLhUtVLiyrFH14AMejCGpD657",
  "key34": "3HBGC1RXmP5XPGTbudqqoB1xbzdGEU8uBVUHRYxCNKBX4ZSUVGFQXsBUkLkNNL5AwupaRwwTnfcgv98rSLzC2MAG"
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
