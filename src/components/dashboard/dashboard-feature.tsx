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
    "58KKeiDjiWt5k9etEmy7MfWZogZqR2umJ3XunXbgGLUP6LwfvjU2AogrpmdGBbvsu1HoSL3RjyHNo3dGe9GKj8z2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GFcSD611tH3m4BmxoAGjkNDULdzRAwPhu6AxETYPs5sVhD3fmyVjgQbyPxYndAz4DR39mTMxmsK3zBu8n8du5Lf",
  "key1": "39LXj5tnmbrZpbu5nnnhh47ffua4NceU6JRairp7JQsq1FhBWoAFaQwMH4HTb7XJ6qrYpHmqLk2oywoUs5Sy6byG",
  "key2": "5NUPMtkwCUQ8eR4AgDijqzinBCfUkpBTpe9jCamWzHPPRbByhPTH3mZWdzZoiezaDHYhybNe5h7VSB5bfdQ9oqfV",
  "key3": "584XJYctuzgBarmUCetJKqP5rfMXn4xG45aVT53qPbLNviJtGtAaLQuiDco7PrucCxyRuriG1X9t9hsZ3j4j1Qzt",
  "key4": "5vnYkX2fQARA1JfJQNTwHqyzDf68KT4p46zS8iqoK3sLybFKg6y6FSMcSh2Dz2VgACrpLnaCPJ1W4QSm2Jn9QbRv",
  "key5": "xpzh3h1NFp7uKRWWcYk1eLdTGEHo8wscJ6SqonYyR8kN1Z1Rr9SVDGoefSY8LVMLC2PtzrgWuqAPTEiq1kvzY3h",
  "key6": "5U6Nc4HNun5ZSw2Y7HeschbPBYRHBHPucwRE6HX3vJQAUsAccJ72bcoh6FFvNEPDpE1EHrK8gY2iyiVB2BuqDanR",
  "key7": "3Xoqh5agfkTKLuYFmyX7PTNZVczjaJrewApNVRsruFwPsLCoHrrRTYV1DticWPDZhXSDebUtVH178g9LKkwviR7b",
  "key8": "RqbqxGDR4WP73zqUpft4z1H9Ct9XBuSXU4FFMB3gpYqvmpcLD3HPS39XbPBrN4VLXVwQzW6jm2z5gninPVGtbdf",
  "key9": "29EeJ9hDMxT53KgZT9E9Rs2u9saYd7PMjqZgaPVkmSzKZMt6SSn2ARVHj4hZd5195J4UxschK3hpBMrWnH8B3LfT",
  "key10": "24JVbEAmVrHg6Yhrijijeuj4hf8C9FNL33QCkp3Ghe7aK9zrf3r9wQH6QGB5Dkz1ueDqdVkFVFcKndMKfrrPDpaU",
  "key11": "5e2VqK73uMJwNBrD4MSEUSWmnC1MSw7BkSNYPZrCbQ4rnpAxv9vxErdjKSmjnCL9634zCPdvZ6vNYNj86hZTZL1k",
  "key12": "5h1SW2PgeifJEGGMC9VyZYqBuS5ZqsGVimKR39D1btX1eA4vueXQUdCnyuDe3ckLWiQA27yk29Tj25c3kMbR9bgN",
  "key13": "44jbH4ZRPiP7xaL254qXshZY7GA4e2ZMs2hCnUX9xF1WmMpYamsNx3UW4f719uxmuVq67nMUgcfp9Pn8eXHZV4U",
  "key14": "3mb6rXPXyj1NaVaQcusRsb8Xws1V11tNBhAEMcUmcxt8pmw2dV3XvBkzT2j4535DxRQdZDBbw8DSoEmxGd7LqUSz",
  "key15": "51KEtoyrjGV9Zegw1wXf6kFubv1tYcgTdnxuEqYgmYm5KCKpj358keSWPaG7D3UpncPPpD3GMpavMRhsJCPTo45p",
  "key16": "uxFCVQYMxuUFVpw3rdMKCgCPjsae2G4j9t7zw8SYq8Jo1eE93xURgQbsNv8ugRFY4JkknjKuz1qYRTsxYDehFdf",
  "key17": "e3gBBSBLFzKymGj47gvnyxSny1ouVfsaem56vvUREtztkozJ6ZNN4HL37Jdruxyp96pmR9QmSJsurXjq5p3XDt4",
  "key18": "632hoZ1zW3qDRM635C8ZiC7PgSVxkw2TbEvAnsAUGYaW7tX9RsjDrnusMts22uehdWiPDXSHEmLWxWxhv8An9NPY",
  "key19": "3zw6JVAA8gBj3eJjX8tzLNtLSf4m7uq6aKJQNEtDHDg8SWB7Nrkjp63yj8vepW3S7XLmdD2tdtobAhcAEoBWGCXx",
  "key20": "5h8zXYRG62BwGdLhthFjFUTiiW4wGQ2KxNfCmTB2F7SAQByDMCPz1RfrkrgyE282WornKwiMGQVt8vh49uXvubrs",
  "key21": "5U1gzEB3zruq6P2nE8AtCdHA6AfxbVaoT6SJVw4W8M7GDSVVs3k61ZZMtdR8qMwjuA4FimZfR2KnY9JoceVZ1H9L",
  "key22": "422KXhnPb44HAJ1wmMYSeSUvHcK9jS2H2UHCuRtvS5HRM9zTnh2mojhfTEvWgVUrB9QFp9rJwyGiWGbQLXmj9tTR",
  "key23": "3rNp9cNzB3jBd8JiDJ1JAbSP7KxSjoQWB2MoAxtYtdhZYqhDT1rKTku34HygWdpLbfL1GyoQwYC8zbyZoAumY6Qg",
  "key24": "qrW7Bw5BkpQT87Q1XwHQhovEpw7v6eUBb5Q78b3zikccVor9PTytFqZHz218JTuP57xbusP8C4ydZ5yjsKwUkeX",
  "key25": "4dQgHBWRWxmR4Wv4mkyovxLFVuJK6JPvnAtogY14Wy3s6Gm4eR8RNUzWkndFBY8TN9QoiQgTB33q9NmtRejYrcj4",
  "key26": "2RMhodv2pZcp8fsEqGARf48qpCr13xPJXhS8rqPA82aGRUJKxrttjDhH4fuLSP4vr7VMB4xFvaVVb7ZAFwXjroQq",
  "key27": "5Vy5EccUWPM9b44mw1HaDKw7jVcYfbUDfCASst391PDogCgyEVPEGW5cc4UdTTriZdEpKF2NPk96wT57YA2KF2Vv",
  "key28": "UxVURo5r5GZ7zLKyzo7mEsNCkgTSFFPmHmKSFXPvXSZezQ4EFqFQqScE8qxZ5BkzTM9WmQF7q5wRpNR9yftpnxk",
  "key29": "XKR2e1BfLApumRHSrBhYXFdeybBSYUnsfB3Ex6cF2qCjAscYAQvZoej4aS6L6f5KzDFvJ41R7FBKUMbJMGZN9Lw",
  "key30": "3NTz6NncdAjScPsm5zxZ9Ct2jezWXHBesF1kemXGUseaHETjQeUovcmtHH9u1vj5BGE9CVW8MR86Tp7UP7KT9Zws",
  "key31": "31TRscFFUzGukr8je7MBE8gkLsUXKwBTtQXdEnaTczMWKCq9AbbBZoKPM4mAsSCLJ2SEHVkRCqGS8HRFea7N27Yr",
  "key32": "5n17rZCMC7iy6sNkajWWq57LFtbQ9a11spi89ZFidN17V7xMdgT3JJVTNDLqhsqJuBNqzS2ZqvFMuUY2KMWv6WGn",
  "key33": "2mMKF8ZEta5VwvWitaVW4m4ghyJ2Gq2VfNcSyvPQEe9myRYtidx5Bo4LoEmnWd8Ff4wxVex9mEEv7yBNXbLX4sE5",
  "key34": "8FQfRxWjiqJBYgtHvVipwZbD2mdPR8rvo2Sv4s1gLGForMLsoNpFxwD1mnaayXk7evwxHRSosD4kwhJCwZKjPbX",
  "key35": "LZPfqLj47AG2f4Xgm2g54NpPB1k7cmLqdMQ3eQYfLgo27zS3hGd6KJKuaUvJ5SSUZ5zWhexmv6rQdXVNfJbdsrk"
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
