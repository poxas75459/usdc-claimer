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
    "U63ypu7o5Hfbqp16THhoTuV1H2Sz7iW2WbnrSBqmMxSZapCsCScNsa96YbnmWgvgyqZ8P9GCfSewJ8d9MekPcaw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GreRJiKmRek28qUmRzoEwuqZbPKD7ECaYnU6bZqU8Txr1wDJuHJyDXCftsTWaUbjGtcwDhXL8DhSFr2svPAXY2v",
  "key1": "RC2fhGZ1PRxQBvwYiRi5bU6tan6bX2xf5pKA8qZiBEk7iu56c7LYAmZTHx3kPTruo4q7bv6k46PZRS7e8U4i3Az",
  "key2": "4N33GTQmLDhgfE1UvDVrDGMy52priW4ccVgwFAGt2zysZQwJjWDrbf6JBFYNkuqmZuPk63UwabisZFCNRKg9tSDy",
  "key3": "2Rry1vp8ipKMhDmdRLEhNzRTmBDgwxuVvZM1e1UjcRxH4CU9U1r9bXgUUNsERUWdGZfi7E7cTtEs99q9YMj6G17e",
  "key4": "3H9QiBkHAXeeoaD7CyEcoEBKiduUccdk5mWCXPYChLbReTT7SSMaNa2oURydaTJ2R7a3zH3dEDrsdH56X68aG7jc",
  "key5": "2MJVk9QQMd1JSUb289sh7AJe5gp5WufHqXGZKjUkisGt7116TK9zMaZ1aYk9PnJmuvD6bhtTpbnoc2qdim3LspT2",
  "key6": "5LiGVecuro6EPXp2gGwEw6Fiiq6LzmCwFqjR4MudZcmyKVMmTMCreoVN8LY5JbgCcdqRCHuUePdVphDYBZa2CjQE",
  "key7": "5Tq8sVzJmFmkMYwaQvidH143aRqtEq5usanoLt7qrtPmEve5Gh3K912dDyfTCdTepJVUPT8d1furPpk1FUix867m",
  "key8": "26AbqxquC27iokvFSyRyTKTE8jTApPjmzKNgvnHhLXFPcENdDzphZPdTUdhYYAeuxutfgrxkytuS5GddGwMaByim",
  "key9": "eRNf7Ba9631tQvxVUb9dQeqWTZp9MiLyhCHjvjN2bsVRjh4hQ3sfrBYA26LayeZkRYBKnn9G8nHr2UMmGp7HVZL",
  "key10": "25zqdcATV5JB37BQfXNkwEVzHEW6r4MSjaVqhj3GVQeEstnXSShU5RDRWQMCvJgaWhaQkYRfJdN3FqqsWXgQZgxE",
  "key11": "5J3n4gCrHUHXsw8fEwZ2p2cK7aE6npiULjTJP1TfRymkdeJixrqPdDhCNwV9BZ6jYAUVVoX1CPeQThMKo1b3AYWW",
  "key12": "2QLSaQ2QGcFfdM2vpW2anNHP1Pp3KpQEFqFppUGXe7aSkAVTimjYsvASb6VdT9bfvkdvbj61zeqdmq42osLt4e7o",
  "key13": "UzdtYXAVXZxTDzmdLNN8eS4v4fS9E6AwDs5WsTfJtnDUq3qDbmdxGtmc4LUPPB4fiGZFEHzwBzxZPTR2QXEoGbq",
  "key14": "5NPDWdTPM3i1p1Q4TmxRj2DZRfFP8NHdmbnWv8PevLySRU7f7tjTUyEVhMYQLe8WuB3sAE8rAZQkvss3PAFUNsSe",
  "key15": "269svFtFg6ksZv7tHdoboJ97xzgDFwL3BbA64dMZr4H7evF9AVHVDfYGbNHj9p6AbcgdEV8dkiVcGRDYgrqaYRaV",
  "key16": "2eemEqZdGxv1Hg9ZEFpjFFPpUB5UUrndSa9MYGm8LtNV16GrntQBo1gyGWbEczGAFZuNc5kFrCmZEjLWiDRGAw1L",
  "key17": "5x2AZJW7H8cmuDjSUnVcgB6k69KcuaTRtg3Wxt5tmjKw6B4TYLbRQnzVxnsBzdZekZNKqEF6PvxXyVEfKuRP6qyS",
  "key18": "5z8FV1K1jE8u2Hxgn4XQBaBEffvcbUJQFjjWvd9y3Q5qcRehBXeNbhTm6SMjN2YEeWKgdG4ge5rh6G7jfNTBWzqW",
  "key19": "2nAC2mZLfkYprhJxZxvvVpT93a2ZMv26bmEfKgvsS3DcH5eJCnaJixAFYdF82fUnGDC7jgjApHQZkxKZcFbmBBcn",
  "key20": "k8ybmRWcTB9W8fRtKNymGu7NuUAmm4kYsZBbM8GWQfVCQjYzKxE6SqSGvWya35CC5wpMKcz7Mb1B5ihGdVAGkEw",
  "key21": "2Vd1Fs6tBhTXUfdPqVAVMd3bi4qbUmLNC6jxG2Zk3ZHW1a39skG45Mox3mhzJzJszUe3QSoAdo5tk5gBMaJR7fP9",
  "key22": "2L6CLD1cx6vkYKsK9mhyYi5Zzbh5bHeHHVdDiuefRyuyisF2QUu2RistS2buMqH83REopXDhdHR4m7nVpXSavMpo",
  "key23": "38ke5gCMWLoECThJzfLW2A5bMMt1u6gC4CbEkH34VCVy9sFXhB97duJ9Weub6B3i4zSkQDFqWFCR9yH5E3XHsi5M",
  "key24": "iMrcx8nTfVQmENWyTUAybjDBUda3KENmvLWvFGmdDHyaJZXSpyt1jUSaEb2RgaR28byYF1GXZgryhnM8mejsBwA",
  "key25": "HvvXR2jfZ5u2X874Ksk5AYeLKsbeYAx7xqdpfQHrkyo61Vk8JTuH9YfWSZ5HVR4wiq4PTiJKSNHTR9tnUNvSjBA",
  "key26": "3jwqUS55ERy9X84za9ucjAuqLBHHr4bHPGDji4GpQoNVqExU8NM5MgNRog68Z5AA26QLKd9z5Dp98zC3FJK6XDGs",
  "key27": "2UXVvBAqGo6GE3Kuy9VZdYjBARY3gphK5dLHzkMC2fv2bBFajgjuvAYUc3MdyS1Km4EWQcmieXk9aFLkxAdtCXz8",
  "key28": "3x19CJDMjTsXwhT8vc8vGUbRfy5iq77PJ43vFpcKdJQHviri8FNXKBzDry8nMgHn2YW59StrJyAAm7jfVz89fSKn",
  "key29": "3abTc5gkZTRhcHbYkZbyYQBkTLUJVT2nKFkUESEhcgddqSQofiViUSvyGhH6C7CY8ZgXqut5SEcFBzHSuKtYQGZE",
  "key30": "5nZz2wbnKcsVRG1om3LuxoDtdHYG4U262bmCSPMhPMjdiPKdYLT5zPaqrc1VqhBFtwYg9Kh1d7iJJdKr5UGyK4nX",
  "key31": "ySwET7Mrm1kJL2WBiq6X5G8nyDrJ3pqXCcZNBWZdErEMU5dMb1aYwhfaChhFXVtzMCxgDGG7V8egjEgJUnSGqPa",
  "key32": "3TVjvSEoZrKGUYzEUSapNJPmpqSvrDMjNqrEyAuDXh7srj5sc5XuoKWz3t6XQbUNvJwxGHZv5XRP5P9gfYVmu2XG",
  "key33": "4hWqjY75kdZi3FTcrktZrsjW7NeNTvpxRFGReWV3F83Ayxvc17BdWXSTx5BUGU55iMJDiKUnXSkbzRn6Za4owBxJ",
  "key34": "5kgoNcvEpGqEcCziuaK9A1JFuso4idXXT4X8dcZ1DTCabGetZN8FGfmD7CWQEtqCnmf83aeUeVaa4vn7N6m24DXs",
  "key35": "sTKwWuUDQZdePniHuYcL8Zb55QobfDEHMsuLyJVRGfkowAUab9qfcwXbvHizFzxhCbDhKYc2dtmRso8CD99iHe9",
  "key36": "5F54sRmo3U1tCiFZhYtRoqv2bAxj3i6vMwxpDHBZx5hcNxLv7KvSU3u4LRQPCHoDowRN6fWVXh5VUr8FtGYL8oy5"
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
