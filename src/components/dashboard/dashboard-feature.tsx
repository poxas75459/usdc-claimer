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
    "5g9b93b5D6L6NBxecHi3CWPscrurkLEhwWR6drFbXmns9M6BrZJfNh6QnoCaTYVAgH1TJfMcuR6oezGdq98TCEpt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27rfdRTN81a4L6Bf2VGaYpKNtFV74f16ud92YYD8RS7KtQ7wcjcGY7GBCCofJpaUrrTjrDtS36NPyRnLCNUotX5E",
  "key1": "ABM1MEXFcgYKGbzEdx4HRWU44js8t8WEEsvS5cV9T6USn24ALnAhvwY31dNBq9Nh16Lh1w3xhzpuNPcxuA51a1m",
  "key2": "44CqCiyw3qNpbtHDuYJjhRz1wn8ZYDTvfuhUEt6BA27Dc8WpBSD5NpKkEZ8eWhQwjvVcuCNptogLjsjMxsAPiomL",
  "key3": "v2YwuU8eMPyh2EAMPyXntnsooTjYLFvdiCdo3LJQXuMH3iNkzEDjhcmQHLg4WWQADFBB5ARcSecgYf1wLqAqjDC",
  "key4": "3hzv7XPJS4jBj1smuK15Nh2gi1jRyhxrcjznXQFiGwE6wD21oqVsQiVQo5eWw5icKy58TjWafnRBpkZswVtoV1XV",
  "key5": "275tqhSU6bcbY9PJwMjeh76UCxxfVYumDPGmX8w4QR6wi8vByfxiyRhdT3huyYv4bZVrzgdsouRRbxtrPDSncRL5",
  "key6": "39CEZArR1yXMSLp6ZqKU5yboEu8iTKV24zrAtn47aWwym21dzxmXzekr9cSzVFk9Qf6uxa1bUsAK8bVfa5Sb2nxD",
  "key7": "hWeUXKR4gz1V96EzBpku6Rkjz19x9ksenRdF4HM2S55qqxcBoGkj1hhfykgGGbfEh7WqhxuevfBsQfHHFAcXwK7",
  "key8": "4E9hCeqJmkitZqKZCZot2pnxeVaQ5bb6JLkoHxbSQtJoCdumMdVhgx85Kisw592Ue5zhNmGiw5wTus6g5bmmKzKP",
  "key9": "61CScwyjNboXsL9zBRzBKjVudnpo5M3EvUjSZfhdM8uRkruWrnn5HiKtBxEvRnRZtHjFjiKod8iYZ8cJvM36VwM6",
  "key10": "5w9gN19oBGNmviKLrfLSTycq6HvC1ScYirf5tujRTfYofr9e9FrEC1XDhyywdqiJF9sLszZBr6cQ5yVeiz1aBgh9",
  "key11": "5zZXeuu6SJ2ttqaT7ocnwwvNfPGb1Z4evRG8a88usViHxc8wG8UeGr9Rb32LgGGpaVRyCQnxa49u5qoPWBpaJtDm",
  "key12": "6142bq8scxkYcGbBc5nvVHQi6rwQgVYrMxtjspRNifYAgcC4HRL4cx73Si3hPbjPFLFXkXpZY3g3SNscMxccVJ2L",
  "key13": "3WhZdtXpRnc6th8dPEcxBDVccZT4p3jLCZJPDYL3wX1ejpeVxHcBqsKaJzLoSZFYTv5ucLgcVb9ND314SEwt8iDs",
  "key14": "4yMHFSrJgJcRaQTZjvKBfjcyVYzm28e2bvUuza5PMKwWLhKGbfwVXW5c9wCnuYStyu7rS8hfjTDUxVd91sSDSTAD",
  "key15": "YRSFA6ics5kkLipjaCd5QuhqFtTsqFmGcbctAWK8CckbZszKopEwUuBGp55SzqjnTa7nuyCyw6KEV1N3CyPs4wT",
  "key16": "2xrTLR4ncnHrF88B3H3y2kmiccVzUtrmsib5s3CGgqPN8cLc19MMNn1pHDmYbqAYLu87QN8MaUA9vBijNnxu59bm",
  "key17": "4MC7TQ3hB3awKvhn9apFVi1YFyM97grLRSAWC84jE5KBGJnTCnaE3Sr15GpYM6BhKAqaayZzJH3KiFuWboRZo3mL",
  "key18": "4P3g1CfAGD3mBEsbhBUx1NzxB4rCtiYCCLirMJrU4xwojM9WQDyHbpUEbnYWS6UbbcG4oaxJSLb1aCwzckoRrEMp",
  "key19": "2328bBamvJ6BEj6nTaKvBcBk5Gvn5Bd3g3XyqUXaFjpjf2hgXhJyMNLM3331pe4aw5tRUmBoS9LBxBcRDn9pHbRN",
  "key20": "21WMRQKLT9uxU3kV5ypP7PCtmqgGkvDkeTZgL5ms3GNNFnBF1CY3zBWVHpvP4KBzEDJhNdgwf8wbpwBG2nGSPeDG",
  "key21": "27JHmYgGKS3Zt7Wcn1K7eU3nPJvTg2jHxrXp17qRAfcgpgz4VDyNkAvBFQoYQVnnc8TWrwvGcjRkZCWrkXjTDtnT",
  "key22": "5ZZHUf1CKY16PvD9SYvvm5ssPxUii2rndePFqFoYsNR8R3gYz2LY3KqeMFAd4YahRytdU7SfivXDfnpRgM4UzQHg",
  "key23": "5sxnPCQygnQJw7wM9HriPuMLU1JfLZQkqzwBvDyVGnH2LR97pa3XK7SjnJCysowjQ72R8wXEgSZo8Agkv3wpkkuQ",
  "key24": "DvZAsSTCywJvC2X3d1ZxtrLSgUS817G2iNHQMb4Nt9WQN5SgnESxh9xHs8MgHf4ESga6MckjssR9kCoH25wJdQW",
  "key25": "5a7eYfgqSV1MatZD1eHMNe53vtx1U6M7bixxJXUFugXzCoi39evf9pq4pW9JGZZdbRKNesG6bTNeq36CCVq8pk1P",
  "key26": "5BimwU8z1CEo19XVJPVDNSMaQiGBveC4FZbFAKqfRQ7CQmtitNQ2qqFc3BNVQuFAUNFcN9dDgK5RLZUcQ5n1fXV5",
  "key27": "3D2EHp2KFey7M5YuRSK8U1K4wwxuE63WFAmRnZmRgD3BXVm6eQzvarrV1uzzH5vZ2wWAUtgHjmeXvZYhnJweZVuK",
  "key28": "53LN6SprthgoNEchDkoqp2fL4e4U29bAsiPxf12ZvVKg2waKZ7xTrucd9JjbsJgFYFKFsQrpEh6FwpMo4jF6YbCJ",
  "key29": "mKTKmwQxsQvnf9P6qSCjqu3ZmwaNznrH2tqM4u6TXUb6hhftRsDcoyHxuLk5gdBdqD64PTT4CKrCbjd2NUTsu7F",
  "key30": "MX5b2knEjDN1tj21rd1c4xnZkWT3hpyY1sENi8zPu6xKn2i7y2Vh6Sjw2VVWzS3eEtN5qAwv3fyumPc7deGUcvD",
  "key31": "3D514Koxkq8LSk94b9ecxf7ZSZv9XLH1uAj9UaQ9pKdV9JochJged1Ct1uDYz3t21vmhhVcbpV1HTpXqZqQxZEBo",
  "key32": "4vPk9VKrVH92nMygjW8GNcuAtEASS3rpVs6rUmKqi5GW6XcmCY8DMNXBgqe5N2abWNs6Gvo4rLeCJ5gnnSNdVpnq",
  "key33": "548eYcz4VNQVxNaEkU6qCB2bVncnS9tzaAJyVsd96hG32PNWeBgLcftQX1AAE2HJd28nrJxN5SgHdP66Bdob9J3Z",
  "key34": "4TdqA3KysQyfJGLCL24RxcoTEK7kPkn83zBGndoi3jkK2jzCTdGDCWCi887pdnmhgLpKSoihfM7meYW6nu8Qoczh"
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
