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
    "4sN4wLy2zwxJc2UU8hqHhC3cGcsctcSc9P9dMRXe34w64VqcZwvkMomUdG1pNGj6ehU686ZeNMdZ2qoyLeBwURjJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bFqGwqSR2iaUCNCQoPtxvPE2nsgKDAV9WRsTRtuoPSx67s3nFKqAUqV6CLD1kim192VW2XvJvRwoEacDgn2kyF9",
  "key1": "4B9xk6bduXnhYzmCyLTiTJ7CXhhNZzaTws1oFg1qEMCN6jm2j8VJQpcbomM5KnKhCWjxVmnnSWDxCtku7MqyAWBy",
  "key2": "3fVjTq58QDK4qnyNYEzrgJoNFjJyHTWyZVGs6MuFGHamHTcd3svi9RKuiayTdpuJbsmkCgGyP4QME75UJHdoC2fd",
  "key3": "2U2SyZgEwTejpdxpB1XDzaNVqhUsShhs3zNXcEgoW9cZfyywiu4rTvYCvCcJiPyrLmjA4ro1YvHi57kqK5PixvdG",
  "key4": "2BPW27ftBHuZQQxnTgioTKArHHh7mo67wwRXTnvdxb6u28kfmggQJ4tmkfLdwZdeWycuv7GBU1RVVMNbXNSn2RNH",
  "key5": "DLqZqEZAbmtXgbojsyvvYmY5Z8WMrQJgUEC6ULDxhRmMSzMJREdSaPiZm3Wt6k9ne6ig3oen8Wu1BQgBqeYtc5Q",
  "key6": "4pLuGeq5P49HwJ78c8z4uArreTJh4LvsJRYXVqbf6EguZ1jR2VxzTkrJRCeEt2MTLbxZUQFdciEHoSCrcUXZHUCB",
  "key7": "39wghyBxmP47iJyVDfGJgpJwcQB2pGkAm6aQxp8VodBrYoSXbaPaj2TYQVFCYbvDFhdyeVVzEznpb2YZ9xjZnv7Q",
  "key8": "3sVeCYLNWvjGijH6p6nN5EXXB7U5yasMsthCeE9b1bz8gXFMdXRHTwHsW2YkhijcVsdMqVnmbh886mKmcpVaHnVA",
  "key9": "53wE1oy4hnoKgtSxeP78RjzRC5FfcSyCo8KxV8nAJr2E3XEhdvvyqTzA9HGqTnDibm4HciASjmQcKBFwCaHgGWvL",
  "key10": "2SouznpPxgjh1AVTDpjrYarsaVFkYnfmgFtqZT9RUvmrh3tBwBk6iH2obYJf8Yy9dgDcrBhiNdfmBSM4QeBLQbe",
  "key11": "4JbkprBZdxa72hGKnTMDQBCGB2Loykk1qBvdkpYXknVLJcSdxp5yizhKimJYhuTvFnGFhuwttq1T2k8xcN56RyHw",
  "key12": "5zaS5Z7kNmdWkfsbidnvijmemDe6WuvQFkuDmuVZLpLx9PNnFQSfDMsarw4Y34DHCu934AGRcT9fb4xEa86sEFVP",
  "key13": "2H48Bhs1HeW5hzDkyyQL9MVkvQDK1Sg2nBoUbfebQ9JBb2dp7ozfz7LN8t2S6adtrKqoNMirRTXYabAxEd44rrP5",
  "key14": "3tdVQSZfEvZ9JXJe6xqM6TMgaj9xubT77G21EJsi195yQa3RXj4PuH61DB1fs7wYi9RWpFz5jGF4o93Lm4Lqmd8x",
  "key15": "2R72NR7CMeTZHDnherZySMv1sBAHFNLJbu4qqcoWVXoMP63x3BUuCbfcqx9BGrTwKzRGNjjAUVg5VZacc1RpG5MW",
  "key16": "5VRn2eRrxKdxKJYQeRjSbZVbUAebxHNqWqd7ajrCt7ubYdHMAJBJ2ctpfYb7S6c8pbn7SQxmj2EiXVUnb6szkdVE",
  "key17": "4jY4dhDyeQCfv6KMNnMG2939X96TfSCBb58nrrW5v2UTSJeAbZ2FeUAtpYerA7NqCuZ4n1utjbQ5v4K2AMAp5tk4",
  "key18": "PkfLWUXzhEdLXfbs5UBanvXA8jfX51biXrj3xQ2oGeGVthjKN2XNxP58qHg6eYDQkMpEQnU22suEC5GGfAV2dQX",
  "key19": "2MHAuRdEgWeutaZjhPpQ2jJEJoKRegrmE4eAzD6fb7hfqThZDL7RGQJ8z4QWaeTDqSwVDZSH31odsk9rbDroLZCG",
  "key20": "4DyzCV7rHN9EjjfriBgu5SxQXQB5iU7mZmGuGKun39EMuVW41Ws896ynywqY69ez1TZSrnUXFnFMfQNkdHwyBjYv",
  "key21": "45rbmeo3eyy9GsXAr4SaW8schyb5SuaiMawQnDJJh4zCTXv7RU2SboxpqzYn5ksoyZ6ANQLsG3wxLHFEi4wJUKwF",
  "key22": "4MkJEipVJgky9TT6nNMZn7D4xNAsaznARg2m2CvAPc8Yury7d3guxqY1SXfJL766iykcWev3vicb7Mrn1gqvEin2",
  "key23": "5dC9XimGQufGUQJywuBded3qyxUEhnPvx78sEc1gfgpeDTL7JChUa9VFp7yBc9y1PieQXs9dCPaNDR1sDUMash9d",
  "key24": "3S7LgJMfAvq53iiuU8ZLJznUWfTK5grGxhKTLywbcYqc2EzSFxrr6NxPtb6FmTxqtZaYY72q4owHfTYVavuo2h7x",
  "key25": "ri94W3PUTfoReZoRT9n2s14oYF4uCKvuJsKeo5s9umU4TokzcxCjZ4WS5JsSVPN6wV7EjGi3hsHg4TXTSmkx7x8",
  "key26": "4BJQ3SbckiTj23tnYNNPJQe4d29kTddTfrNqNnFdnJyVvxjZDGJ7Y5qDuXpJGCvLE19zwc4Eyn2GH7yFGwyKcQQs",
  "key27": "2hsAwWYzhA7yMQ94h8HXmikHZyToqpWiJJVWgVD2FU7GDTZ1wjhh5NhB4mTsuWp73UF7GARM3vKBEndJZrQ1EPo4",
  "key28": "35kDbVC5Rq98pw7vSdxL7CJAnxYZE4CX1nxp6Hv4144NHEtHAfpMHgd8wsQpnjNiyvo9adnz2994kQg5UNykLver",
  "key29": "25u2TCCSoBs3LT4TDWt7yTeq4pJqqwc4cW4EVpSQsXtEtutBgEDfbbLMZjvPP2CydD2ZLrYofhgJCpNfoYWLsiZH",
  "key30": "2fgkLb2RMuEA3aaW28DKGVTUVUw7DB3WvbeugLgzk9s1r5j96ZDZ6kC7f2JFKMWyeSesM9kxNj6fEmPA2wFZ43ud",
  "key31": "4S6DfieLLfooBVAdHNVK69jEWt1wyQEpxTxh82gJFuuqKSajjgUnSpBWyRv9amwabh7Q6gJGYu4txTZC3E3GYHt8",
  "key32": "2qEHkn8dri7AKpLwaYTzEeyL4jyVxzQHKveiDMWLcC6jXmXHjTQhHUDm6r67uZRkXov7mhP8a3u1pYBGE92RzPGs",
  "key33": "3S3RarmhukmsmoNZCMP4qEr3ZU1BALuy5adAcFc8ohRD5f3dDWZfGkrjD15n1Y2c3cSNx9bbeskDutQ7ygRFjnia",
  "key34": "4X7rEiVbfacK9m7ReaNTN2FrZfkLBk4gdVSzo74ox7j1Cg8jcr5aKXLk5WiqLDGPLarH7z6dnp9uh6FCEfCtTXbu",
  "key35": "37bqYZdyVSBb9yqdVNo6vsVJ4WVfU9pvPMXKpMgeSYVhApqStWyNDMrXXx92zifqyjQuGp68f1paTcQrMtBcBNBq"
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
