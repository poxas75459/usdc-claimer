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
    "4VVJ7pwMPgFBVZTVUc4LgwJVviGug8AFXGW9BNTxqqAtkzo1PNv4MeehTcn5heGV78qs5h6jikKuaRKUMMfb1Efh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZgBjQATr4zcxvi1Kib2tP6iWc4f6a3JY573nXDuc5UVkeD2qSd4sRrkAwsrQAxcC5xCuRPk6w8mJ8ZdBDThFEeA",
  "key1": "eggHz7fDjRE4shvYDANYkowVvUhMX1Kgwsb3UQCxJtUQwDh7JcfDHtFPVQMfSSZSb2NXS7q5gwFQEgEogxGoYg4",
  "key2": "2u2RvNqvQPRkDZHxkQL8PLjHnsxDyXhydQHiw1DWBWLjaMuGAZxbisTrNPd9WT5RYiA5rcBqvohwJJCR4T1DDEwu",
  "key3": "59MqAy4kktMkEZbX25soCTf64Q1pv3fTtY5F2ddsd6rGrPwowxLFWwam6PELgQ5zvqTeiUNQTVtZ81Wznphn8MZV",
  "key4": "4xHnoL61DCjsRUEHhYdXxB5xpfUvg9oATWoxgDztGUMWZmNAp9fiidRNuQjob9GyJT9Fct3kjHds8v9NT1tveJiG",
  "key5": "62mC8BvFHzxrEaxutwvn3zAfvugTAYVVGYDYN1Zvx2tvGcSVM6KGteCSNtKD4jpCL1Le46CHPwFoPzjQEKfnqhDF",
  "key6": "37AsspMM4yMaK7d1dRuwNkfiv2GuuWFmLm5WFz9CfhLrvrGksGon1J7bmX1hmqjCZHicMqZ9CinbP4aZY8iK9rUJ",
  "key7": "5TYsJ7UH4AvuAXuZuhAEvRKuPFCtjvupb6xVoqiU3VbvKBvmDja58H4wvez6Xp9SzeGpuu9weUuhN6ordTawSpnc",
  "key8": "2Nxe1EwbFurVXiErqp4ZHeNMkknQbGdXj1MQi2GKKKvq4JnYd1MZK6e5ke1nQLqH5NdkQQbJ9ntNU7xbbRyDLMyy",
  "key9": "4oEAsQbYRdnJY7R8FyhjiJPzrcX1mipPTNJnKCpeQWHQ7YmHnsWe8QmUWKriysPh586hJwZKZTkEpDEVnsopqSR4",
  "key10": "59nLK1tuBR8DtSY3g4r5R8rNj36YrbFGtLFtkLNNnwSKj42Knhd5UsyeSagThNZK9pbMnwF1ttbs27pwAoHyNnSC",
  "key11": "4i8CBWreJ3yDvawW5KPG1D7QpcKbbzCkVUHCM27VxyUv7xCoMF6aWRNWH9qfDxqHMw7nvjcm64QPcvTnGxCi2hxx",
  "key12": "Mz7xzcx5Qyk6QYoVqaSnonMJZKxLyiHdAkxtBJ55rhmRByB47QyV4JK4Wjik5chNt2tx8LHoqkobqLZpZGNeZsC",
  "key13": "3v1rTA6imAMXggRR6nWaAFH8o2mMSqM5vvcsSzDbgjvTFgkms9v3feFsBHqQ2AcucrSvWexkhQLLvtzmNgVVMdE6",
  "key14": "4hux4zXvq6kPDR7jNEcE6djgQxgP6ahG6nzyUYMLLqRNx6LKgemjzdsae46W6oCH2tdTqdWjg7mcdhpWNjEZEadY",
  "key15": "4jS8ByM9Sefyi7Q5wgz7bNDGcJSnauNrNYqRDD8citw2r8Y9cqGaTBt1wYkYfyQ83MEJZnoJX4L6yQ3Uj92aujwW",
  "key16": "4aDcqWXbKssgx44g46boDQ8c5rK9F9omPo8tRu9Tqm3twZCjT8bjKV6MTNkPoJBNYVEMDpPv8Mr4RpS7ymVjBng5",
  "key17": "iX3kkD1XyU8M1n8d9z6nxCcSKBBSUmgFtkbbSA34xEhroy9Y2sGiKJshGX8A5LxLT6m3swNiwqPitZF6fCBZFhD",
  "key18": "2ZnGGx3EorTutZMmG6pd2aL2ujSJogh1RS5iAuGmDd1Q6X83KfGJ11wvKiXMMq1tRaU8gQHEJXXYV2JcASiqJ5PW",
  "key19": "5ZHENMxwexzCCfJtDr3hxKAxPQHJdGeJCramX6kqx6ecxJYsNFTWq46gPRGwF1nSB6aKrwaTB4TeawpP4ADmbJEt",
  "key20": "5DQHw94fq5DDbftEhVYR8qNXVYoQq4Bc8VbKj6iWxveaooreK8DzCQiLoXC3oaHTuFqNVTAdsMppaThUwpQx4xkF",
  "key21": "5p9rtdwzxLAaDYjHHnEs6ELVESAyTXQp2EdrQ8dmezVw8PQLKo2grSPk3tsNgH8FdAQnMZiQZ1XomakshWa5Awua",
  "key22": "5oXLsYoobifkYNGvuhCvcSZJxJfjABtQTvr4qosDX9dKNt7YQjXin22VzqzgvML4pgZ8TxxyofyGUJooXKfFsBut",
  "key23": "4P9sxtCELJazUyGxWZyHkbCCzvuucMTcjJLhoDqnRzYephu8CZwaFaLj2xhkCJsehVRtF5LuPemeK4ukTgL8HjNi",
  "key24": "4MG9DZirezcKFocccLT2Ds5h4h5M2A4ZumHjrXtgad51Rdeo1iRasXQcyT3oVL7A8PyEopSneXpBQybFhQ4FKCDJ",
  "key25": "2TJunfRzhYXMErxyxXWyZ57wygR8wqMyMWBoovwsFunwNrjUmHtzuuLL4ZX89Z8dUKZkTCXFDB4Wq7gVJL4iwngQ",
  "key26": "4bSg2Tc9pef4jwKeeZjz5vyPXnFBvQXD6qX4Bpx8qB5v1P5go4EanEiDbYuWQZQGWsg6zvZtB3o7zYmEzMryoxP2",
  "key27": "hcaCQwL7xkL5WhWzcfLNjQ3eZJhfvofdgt8hhHQef6PNifZBZ8B45ANcSvJKt1mYxCs3CtGraBRphK9qymRT1rg",
  "key28": "3cDWdwJaPzGffijeokeVyuqudLiiYithN3X1LeSRvea5C3kv1KqUrnGixvGKKMRursC2SoejGjbwkstK4P8PeYND",
  "key29": "3F46A8HD91rgxL4Jwh9fyW6AWD1cneh9m4GrqaRXZsKnb1UNDt1vhWenemy9TpCE6YtPj49WhGFZxNVxojJjEL2G",
  "key30": "2VRaeFcpe5SYewobiT93wUJ6gJ69Cfyixyc2eYhk7mhjoeKQ24h1BYLtXYNBjLsiwYG3QbeFo9xMiREPBzkxNqMp",
  "key31": "3pvbHPJtPNM4W3B6qhbyznxySCsgzGDbsDoTDADd37hrYToZfKPKJ1wrADYbUghWA5642qhxtCAqECQ9mmDmAtQw"
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
