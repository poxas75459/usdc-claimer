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
    "SQukbZjW1gHHD4qaQSv4nDZmFzmAzjJBobttt8wuaUQczUmDSWJ9BLdTTZVUWhnwvi8uF6TRCY17jbrkmQhqqkp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36cHJdPWJTkFzVihQXVz2etc976d4JkwjFBthv8pMHGYEajjkBziva7N8ee2u4vUdANHhZeNH3HVZ5FaF74829eF",
  "key1": "5B2qyx4JVKDxCijegm5Lg8ED1YrVwS1BhuCAjfmcANqyd86p1s2t1wpZRhkLirW6oCYWAc81C6fGbUgEz5cui3vz",
  "key2": "4W5d3kAwba3wBTAuCEmucautntgU6B3aL5CCynTdRLByYrvrQdaYB7veAWgc8LmnWmHrWvvdb4bDZkLcDZeVYCuS",
  "key3": "2ZKssP6DZ3Mm3xwcztZQiu4mxupaZcLWCZqfbrpCieW3yd2U4M3sRy8JNXdG8rZmbAycj6G8fTcTi3mZEnxCR4B3",
  "key4": "5Zi3oDH8JbseVLBMheQ5UQ3apkCmyu9ARFx2FxyUo5LMcXB7Rm8qw7DdLXYdgfBLc47efTsUpiimFKUJuRDDWUCy",
  "key5": "3SzRE5gkbA3JneuXTMRz6x6v86ZVgXENJYYs3gDdHHZY5DbC92ymF8CStEGEzAUQs3t5eWy3PusYdjwWwheRJiXg",
  "key6": "2ahuv7v4PreF5vdPGcDNo4mWEuMWg2tGbZVB5Hauqduxx1FZA7VHQwWp3YKNsSbAQM5nLRp8bqoht6eBLaKSKvJ3",
  "key7": "4bAz3zhKGyDBdUom1yxPsS8vzLzNZWyf6y8T4X4KakckLJzHVwC6AYjhYTg1JZMNLTqd5ouXtJGXkm5DPPcGBXtb",
  "key8": "nJn9NSAEeP5L2rieb3v66dky6jxB1Kiw22RbrMw3e1QuGJLKwkUik5ART3m7YVFZyuvkxze8m21FSgwAaMuugkE",
  "key9": "KHBsR461R1tR9JrBDp9nAPvWZdWWT348hnmDHygkDQkEusnZkDputgxPz51gFWWpCPAz6LbVwiV4nPjpvzmkdyY",
  "key10": "2dGod9eLq5h9cKiPSratFUNbU9t3RGXGeXiosFNZobS5X5RdRZbHoCbAcAAWeMiJcdbVcCM6jqvpn96G5wGKTmgj",
  "key11": "ZfGtCM5CfUtu5Pmfmo5e7d7KmWkCRDbNRebtaKopM3sjVpr7kG3eWuRnz6EXNypvR9UXcCnxRSMxvPu9xwBvcNN",
  "key12": "48zDVccGz8nNN9aN9kGHuyFm8M3osMVRHctBWXvKoUFzpUTEFKkUQ456mdniv8k4KyhHV8AiSM2it6xWU9cuUFTm",
  "key13": "MRHLEEvL75972XioPd1DbUhKZghJBuNaSGznyyAxBygQ5jKCaB9LSjL2EHK8GZLqmPW1Gm9j8soo9jKpkeS7NNo",
  "key14": "41AJQLYEpoxKcWDVFaBTJMedHV9Fv8CC5TZXeRhi6vzXAA8N8cCuWkLjPw1qoWasFK174WfEikZ6PniQeYcYonza",
  "key15": "2UHyogfmNXFTefG6idVAntfMSCejK9n4RTFSQnbeaCcZoooeUAGBMSvUhvfDEMotV37Spx3w8RFN2pKSkDkZ7YJ2",
  "key16": "o4qaBGFPeu4S6RVb6S2mY73rS4crHBNaZwpLZcnEfxoCQnbBBkJjE53uuTHMqahYny6AhZvnYCPHzsRf7aDvvgY",
  "key17": "2hP5BS8QZDGGdMq4hrhwLAtRLe6fQWoKfasKCqV9NAyUWSzag3vH8n1cZ9d1y3gbddrmisQP1R9rqf7QZFBV74SS",
  "key18": "2Fd84sqwLVLkrcFhBziwWFyFkqjS4tMqtXgixnpGp8uigf2wVrHf52djZWwDbcRsfKbzaWfw4oAWcz9kz6jZbU3Z",
  "key19": "4N9xRHUxhqrbC48nyYeicrpmmxC4YHAFic4imiHrpKCkmH6ZvJA8ebTWhJdxRQ99XRyabyftER2vntmpoZEkT9up",
  "key20": "51UKu8Ts5RZuzkbjhikmiekGBRu6kenMjnJxsMdnqjQHjxkyiS3Jn95rY8mn2Yznq3Jj8w3arDA7YiZku43g9EMA",
  "key21": "3rhycxzu6Qce2XTp36nPHudQKnVGebPm9RqwSzDoQMvg1wjpWmzivyExtYcSuWgHggdPnVnfyBVugm6JjTFBGicC",
  "key22": "4ev5QaJKcR6MApGif4hoDeGKWkgGNLmLYg1n8mjfbFx4ZkDV1LyQEcBV3tw8JF8tDWc9ZMWF1JYvfZTTJkwrgfkV",
  "key23": "5dhH2B2uiiTeHtBc4ocf1apY9DfP3YyCm1oV13cT2G6TMSxqEftuEosScmTVDEW8X5Qv74WnjBjNcsdLripw9mGP",
  "key24": "66syvFWGEvQBo4e75KTWtFgbS5nut8WtA4b9m9TjouxpZRC5G5KsLXm6PsKbuwudsoUEKJyLSsSA9Em9YTHD5bsu",
  "key25": "2tk4YCBGvzxj63EDtwk2gqepsVeUzBsJJhJuEgcgyxsbjZVmaFkK8jNdebq3BRkehjrU9MFTjorzgf4U1womXU6X",
  "key26": "3j4voDbFdsFiALQQaxrCFmHF4oLpQpjs5xG2qAP7ST9VFQyAoRbhcEQqroAb6Nar24JeiG441j7QdoL5MFaaC1RK",
  "key27": "3baAKym8BgrTqQc36w8N1KgGe25wXs6umxGW5BiKKzEXXRv6iQgU1cWDaDNUpUJigLaPq8LFWCkuRQAsYGbkENVN",
  "key28": "5zrwhebAAY355QxnCXp6bJ5W5enR4ff9BkAVwvnKeGVpxUm8uWZXzwybByiXAhYDFBupzssTQnm3ApZmXGVz3jEw",
  "key29": "2bT9mrADiVdSwBhzfcmfKbsrrAXyawYG1PCTRgRgHpQ9yVd8eWzqAqYVaNY9d45iTVJ15W6uGCEYcyAPBdtXV5tE",
  "key30": "4veMrKiz64ZGABqitP3CD1kv67M3c7nEZLn5TdocxmK61Thxg6svrYsa4NBoWTHB3Mz4GvtZieBqqhcxXThogPcg"
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
