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
    "PGy1cFp84GqYNskKdTFLLh95zDfdohW7wMkNS7UDEzUgWZ81abziB8NGM8Kf8mBoZ8XPnj1SQYFJx1Vepwz6ye9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6uzJa6chg2r5ZdpUXqySgJWsNvRegz3Uuq9JakzkeU48Mk7WyjtSXL6SCH7jf7QbXwwdABT8bQq6tKzTq8VEGAA",
  "key1": "5A15VYbtfim2myVLnrimqsnWiN3N4FYcYVNDyg46J7A8sznBTdeJwwHMQdHZTZbVh5FMYG3eGMWPCdpup82Euva7",
  "key2": "5NL2G7pRofWf8mgDvTT4rtx5ZWCPUg5iQ6DUKo5wMQ55hSaoMhVEqagDt6XXSZhv8kJTtS9cUCNxFpGHw9A8AFn7",
  "key3": "2Du9mjNfFdZ17Anjw58t4yEWQRfKWU55c3Km7ouRaNvJmsC7jAjnX6PQkTV1L7GppSUmAnNXzQ7Vtn2Soq3cLatd",
  "key4": "4wmBjxeVkXcUd73Lu83diNUoD1RwMXz2xDZyJnMeMhmkYB3zvFrdM6zohnAqpw8m6sc5ibcH4hTB3jbhP4QEEJYM",
  "key5": "5ExPYrFjbN8mUUbdCoZswhe8Ch1c7cPTsHEkz8BHw163CuqGJHgYZ7SdsQHzL4w45TVQD8BGzddeihwFoYgZGLmb",
  "key6": "5RCCiMkPCiRndh1ESYiok5we6B5K9TaNiKC6qSCpttJd1effxpXWdwuuNi5z2gJaA6uo3LuTLR2ZmutrANDVheeV",
  "key7": "55NZvJ4xUsoeZLScYJuLKQUn3nvT9H9Np8r5WhmXot8jFUzi3xp6Tbymm9uWYz4HJsjkhZPgKbNrawE5q3LfNu8a",
  "key8": "RwnbZy4p5A4remnykjLbSVjocJSM9A9gte2QFCBaRF9GSRGHbQ6veHrwUL6muWKSHnHQLn3zio7YSapJvBBVK3A",
  "key9": "5jRHHXg4TcTipHk5xAHuQMCBHuHk5TKqYBdvYQRkbVdkni2uzJP5rJdNr5PSQEk9bgu5Ch23QEQMeRfhoLLPmwDQ",
  "key10": "JDN1ZWHo3cqLf48RsMPVSkUFZifZbkxQCVAkrHhGRcgqcpGCm1qc6tef6fpd5ivZAAC4irt547SVjJZGD5V2CqF",
  "key11": "3gAF5SjwS1BNjsnbDZGoQZVStJpuPAszscUhb1MW8m4Lu17pZv9gCFrAyaAjdRdTHDnEdFwzbu6ksoFJunhLLUJi",
  "key12": "5ahe58ZbTKuPqRwk75qHQycQtvZ1qUGQmVfAPnPc6nX3d7BQdZzPrT3FT7UNLUEuDq4RbSUXVEoBodbyHbamr8G2",
  "key13": "tfNBiPCebs5wVhp3fHYz5NtH24uk1ZB2A8V1u1Cygm75N1hEwnEDuaX36rSGXKukVTtdiAzowjMjdNdVyFruiAt",
  "key14": "351s5qPfLQQWoCjsKJHpDqRyMdFo7AExdqefqhyYpPcSWUYQaPFVhP31jeSbEwWfQi11JmvEuvf2zPtYWf4DSVXX",
  "key15": "63tDib9iNGirpNEotobFGyZ1CTGyEtLEgqNkUKdZUs1TyXiCYfsQRhFZVMKGDyPwEnk3cvpjUCNxJ6EVqKJpiyze",
  "key16": "5bCm89yvad2Qjc6hkHPSvDmekYQSUQ8eJ9tQ6HxpZJMnzR1jWgL4MH1HsvUzvV82T6J39gokiT6ZXjDn6ir1pumj",
  "key17": "5RRnrMsJ72rw6K5H9mKUPYZskLHtRxF8K9ANF1TzhRqetpB71HW1x6uHPCeL1eR5oQ8QB4dTZRLE4WFnsznppcx1",
  "key18": "3zuZmrrD2iZyASM6GXS9TNBfkcAzpED7PiNoa5cn57ccWUVqiPxsEnjdUMJMCkKJCpfwUBsYkhWz1Td1GAJXB228",
  "key19": "4jAfcA3EW35F6gqey2cufpDeZcUfohaKzUwe1V2vNi7NQ7DWRyGy4up93fpbo8PQjwjiTsfEiyLf3zxoATk4wFMR",
  "key20": "3wSLLsgHPBd9TCwfgJpCxNGDrXYJqsndxWTHbrN6HmfBEKiuroF321krHsoiZLNyj6CBEHLFSB8gpdpG3p6QgPkZ",
  "key21": "4fPZgiSmVDC2HxArAteWPJvYgSszT2HGaXLaa29sRE8m7KHWmNJVr59NreQXw31pWWnyi8Hy8Un6s5oFeQ6PssnP",
  "key22": "3uPkwJJ3qYLF8Mt119ZjyP5d8unFLrd5AkbGbWTLkudb8CzusT68QHrz4s5M2q3ezyYv9R268854NvcCdqpdhh75",
  "key23": "P69o3B281cXaLSKejtQ78vqaFKd3sNnKXgdzq13aMPRq4dLZY2WyPxYmQSkkNrxywhudHsyg2Nsh43zpf7dt2hX",
  "key24": "2LFqXfoKfA3aTGrnyV7R5eaJZdqgfh9ahXNnsLWVc8dKJREKvfQvmd28LmRkX3ZGxgMp69paNFReSg8ikcEHP78E",
  "key25": "3874MyqzmsC1jKTDQs1fG3Gu7ATKsMCiNvwm8GQ21fRykwaJLQxKy8tRq73vaLZVdpetWLYKGRuhNbHQyYnLMqhf",
  "key26": "236TH1Ex4J2Pt3p8PbNVV8FZ1z5L1qzpdJjEMp9M6EAWLJVQyKTAG5MxH9ah6kfSkrMctCeWUgf4LDVUxdxZb632",
  "key27": "2qDyZscLiexcbxp4bjmt2qNUuSZgieAvtAbBGiA9ibdAfxQdrgXapzAaBEPHpgKhgyZWhFcWJPXgVqicbuK6EBGV",
  "key28": "3azDjTKWZFuxuGsTfCWYHHrUojVUeqMtQXYLDaUkZsPt1BA9KBMopwskuhMGwD85rnXMT1t5VZSLzQnST6dBaVgU"
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
