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
    "3MkGKgGGihdr5t7ibuoFtCr9sfb7CGRWC2MD9TqUDnQEPgxK3Azh2iXdDzqxY1UymoBNe1Nwrz6vuReowgQyzgC7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uo964ziAUfhJKGEF2NpaYBcj1rf1DjPMPsasHJqVusGGh11shCdR1dgi1MiSTKrzQwJ24PqPRJnhk1ADuDMWyCe",
  "key1": "4QrxL7odKMPfAMpShe8H1UaskL6yqdHLvb2BS9tCr6q7hTkuC3hnPiTyA8ExC2bai5XVjmUvr7eBY5w1h5PrMn1e",
  "key2": "sJJQjLMDewbCMM2B6PrdgS5NPSSdjaPZ8ZcoH49oJnfY9AB5orcUdcZZdBjczYvRY55vHuMxsXTKD8YU4aibGYE",
  "key3": "5fJBE8i6Gmcs3bFQV4HxbvqWb8Krud7wvbfsaLbXUi4uSKnxPv8oCFNYRcdkejYo9uMbgJcUvrrJV6MwiMqoBpuK",
  "key4": "3jhVPXN8dS9kYRorpp4vPhfQJf7i1K4jBKVrrSt6fbFB4D9AHG2jGFFX8EPgqm1Z4KT9t9odS7uC8WtNbgBcJvBu",
  "key5": "25hfT5dfdJzNnRX2L9LhM2ALW1wmB5FJwcjPCQH8RWYype9VQwcqfrYunJKA26nqPUqfFJLobJMq82VoPZvHoKNn",
  "key6": "47zqcGL3Jnfht1MAGim7xT5nH7KBBzv7MugQwQx1pRLbcUbkxjz2dfN85McC5BqzueHRrraPA7ra4zfqpHkRoWPB",
  "key7": "55somZqGeM1rdt1j4E9PWoUVqeEet9HZniwX5KoFtdBvFrpFjzZskV1yMsTtjJMxTjZWxvCaCFVEUq1xUVtsq1xo",
  "key8": "2TuBZKm2DBq5Gnm5YncUCwCSuSAMgqNF71DP9ZyktQu1PqanVAYatF4XLoVpgfebrqJeD1yWReFnYpudMAzrytkH",
  "key9": "4fnJaks3xZRCZxNwqySwGnxLs6csrr8VQWHrvLuqVPVzpJaf9LMWwhMX5rYDbCkHVsHZqRpESNdvo8JYk2JjzgkG",
  "key10": "3NjkAKdCAahTPMAs6oWFUqzzjdB5iHsUvMqd8hEPCG7V7p1nPKfrE4q4T3CQTGHavCJm3NuBYZnxAia1CJGod3fG",
  "key11": "29tGmnphXMvV9XFVzFs7EXR9i9b7DuwcvdJUasCLDdieKdk2Aq6Jzi8xg4HXGKL6Pw1Hm6Yym7q1vgY1eA6sTG8Z",
  "key12": "2XjWxD8PbcPBJjPF59A4BPvSgZZ6PEkCZmvdLL8p6HXTJiN2FWUzTmWPLbqXev4zwVokijzmWJZVHDjUpre73SRM",
  "key13": "2B3DrSJnMXx2mEAxYm1yLsacex3yC3bPwd7xx84XFX66YZnDj5cYBzmL2ndmHrzYZCZ2rvzqiGyTFeh8xKmwNam4",
  "key14": "5p2NzbgzNpqHZDeY6TyU2XhUgBaiYTKzyTdoW7U6bpdTomcQpscEtpHzxycmHXEbAKN12F6f1hX7NYBigNJH7HuZ",
  "key15": "WqPrUubxkcAYMiVB2jfXJhn91g8sRjMWooSpBrVydV1pizgsZWQ22fiWHoyN81tAc6xkEDSPbPiaFJk6gE6KKVw",
  "key16": "3f43sjeoSCuGoWoUT5irSnZ4sxpDyRGBrGwpJjq1djXYPCg9fUDhCQJRQ5qRNn8iWDTm4EVB6iQLNx1bjxTJEEnA",
  "key17": "2psaNuaWofNqAWtCcjfd9MDAtw9WNRNLhbTFLYH5oVfu2oarqXfbaWq3DXPP8iUTEfSYhHkhsQwBbAuja4wcE3bT",
  "key18": "5623QX6qCkfdg26Qncp5naJJVhPjLW7zNXxCEiQSs8dbACkcSHJhMNcanVyhLkKZp7NuSomnYXvDFfYTefH8offp",
  "key19": "3c7ubzPcZiN8yvCYdSXFF4ab78UPsb2qmWvAu2dfU5kRKcvSq72tw2CKWktGsnMoMh79HZcELhusP8rkJjdwLUdt",
  "key20": "46HYvnDHGj8i7mkYDNx4D9Zv7ZefupDVox4Z1xfBzMCZrZXeEs71dRTTECXyENZCwmFrzQLj3q9Gngioqs1sWY5a",
  "key21": "MXCA5yQmGPHC746TQNnFPvv5hYimEJoqVNKN8Y9MVCJgDKkBJ4G7hCYqNGqbpXXbhfg5czM45J8yqmRoHpmFSzs",
  "key22": "3MYU9yJLbgEo4TFytERB8Qb2dJRFidp7XJ2pA7WPPZ7qh6hAWaS3RhHgH8am6mPiojLhwR7HFobkt5TPYC8AY4h3",
  "key23": "vC9d9j7nfRssedVxWwTmyW1rpRjjbNestwo8hN3x59cWe1UdYzrHYPkQmSju6LBouZHeRokNsTsGfRMA2Eqb2Ah",
  "key24": "3xY4QAy29CaNsVriNKieW6xdQmRPZNRzWr1uMe64akcNbQF7pkEYcqqJWkzSbpchzg1QdNdwQZNV8y7ccYAJkwHB",
  "key25": "LQFihypRKztpjxVvgoeaqSUEnKadF48E3j1j3vaCxiaY7FZqUKWSxsoFiJuncek4t22ckwevfGJQ5Zub4TM58Xu",
  "key26": "3cLrzxAk6r9p7u9hSqwirLCBETCmTQQtcCYiii24C2SRnJpRVpbbhmRa4YqcxD99hUkJ9fMbtM9sPmp3ruSqgqDF",
  "key27": "4SwkN2aPZ31f29NeCATmVGZ2fwmhBLFrWGHB8qMcgTX4KAWX2QtbD1mQboS5VQbr9ErXKogYJkTbge6iNAciiBfv",
  "key28": "2EQbzHNPLscFSbg9GJj6zG2QVfK59EYuDCYhDXpyHf6ccfFgSi2i9yF4mYsg6tytFMPaRwevmhJ4R7aYkJRwfKJi",
  "key29": "4w1pHBrvuxx88CN2pe81DonLBSewRjK1M2s94aC4qAFX4zgh1sLCBxK7wykjC4Aitp7sYc4KVu7G4SZXWiYNvAUc",
  "key30": "2ryvvyq9cSEUof7NYoeo4yYRgHYhJ4mVdu3WBGpScCtzQonJCTcKU5HQpFVf3UHFqBUSgRbFrKPAAToc3cDJRp5v",
  "key31": "B7wkujwKvTQC3gHUB4RkkAPiVfXbK9dC52M9dSEF1ee84Ccn86HBwDoSHc76DC4UiEwsWMnG4rFWhsCK8VZYs5x",
  "key32": "3y69Ed9h9rMAVgk3b61u1VJDzvbD1ncLVkD1P4XJxejYqF95Pvh2GnZGNKM1AtJ5NqFvxNQnkXiCFsJegk5N13Wx",
  "key33": "2e5cXBsjYEeTNLQAwq3quE1Qj6feUWDdo8SyfdVwV5zGTbMV4hugZHZiqQPzGDhs59Caf3cUyX653QkGhK6X1eCX",
  "key34": "1Hr8Mqz2u2agKYJGHTYF8SvvgDr98Ys2PzvBADZD3kwZ3Xk8hCE4GkpZLrU3oTKozNtQvuPDnNb2M6K4wzA5cxD",
  "key35": "2Las4Ax7UyVjbfKmgK9n4NXXWYPa6xc3YHSqigTQFcDnktZB8UgvteahCn69fmKAiSypP5nU2myhMyUqAasbBmaz",
  "key36": "4vYWUntNELVjBDKbXGg9DViAVMcQoCyJjMKpjRXiWQi4nvKsdsUY9pfDw7V4uM2Y8rnQ1ncxZThpDPBaBxzsRtD",
  "key37": "FSSABAc6GYdAqfLuXm3qbwrTbwKXHPEFZE6FAXotQEKnQL2bPiVoB4qStVwqfbHPJNF8MfF8BjbvMUBgBy4mZKM",
  "key38": "3hfbSQoJrxMJMfkC6DxmKzNH2RgpJ5onHqYF324x7A8fUXpL7Ay8qDu1fLoDLJijXetjzAt8YqScMX78Urpa3miN",
  "key39": "3zWs4egs2Mm1YQWnA4RrKAFhGD2H1dk2bWEp9utZVtZJMkVQTcamwRH5bsL2Xd4GDgQnptxjHxFRJ2A85BJzSjpt",
  "key40": "kVqM9c6gsobhYTXm7478xoetRYhwrnKd6kBki1zc8py8aMJnLjvpBFQRjbnMKLRjqxnESKyqnY8zur2fnAuCCfh",
  "key41": "ywLSnBfCv9Rwwb2jfyt1tYNChm4oEVS2jt4b7u85etzU7Koos3tXdQ11U3CuQLd1ZXgmTWNQH8GGdK2MwDjSYwC"
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
