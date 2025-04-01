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
    "4ubDujJEwYAcswE89rPJRqqTk2eWxQ5kNsE4kdjfW6rYXs3DRiyfAyDFCXMYfkcjpDjoBK3UB9ochQTN1m3WPbz3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tHr6wDxcpDyuhRXA29S57NkZ3wugepjwiMavGa9hro73NLrxxWkjhnKyThVjY5wZ6nU4fLE9WN4RBfMSVxawnu8",
  "key1": "4SyTAvzerYpEHs2nWT7JbdrWFusH29nfnyx3JhmwzqbmYLUGvaxSxNawDnmjBXVgGKKY1EuGbgC1Hu1oQeWgQDNq",
  "key2": "57Bft5URZsCgkaMz7HPVSkSGjHZexMm1nDXr6kXzdGSz4wgtE8G9k2MJozDkQG8Mj3Tn9JYAnHmEw2de47Kx2MqZ",
  "key3": "EWEDe7Ht76Uo1G7mNtUvGuPtMqBmfp3nAFvyjQMYmtAmonmfnPY7LNnebPtWvex8bkbgzWvVxafiaZgtepcBQ8z",
  "key4": "NSLFbzYhm994AVadyadqUvEHVV4B9HPTAcGKQQeBK5FvZqtkUvCz8WNiVDWgH9Yb9Dhxs2WpseiFYWESvKFi6BK",
  "key5": "5nQrJHSEvXBV4gcu5XssCm8T2CytJrMxEeSv7hhRQq53YdrVSAwrAfAUYuraWRzdUS93YS98pwhFisNrQsRpkTUZ",
  "key6": "5nXbR7aBeNY57H6KdFfwGyGqCVdb97mLrydthVg6cpc9XnbmRnuCwXTSaDJfApfPi2Xxfx8oa6bPubPRajj27D82",
  "key7": "52Ee5UyjCNRwFWTnV71aMeNUN1FzwXXkE3rau7RLKsuJ2ui7rE6Dhsc7hEmnY9stnjfa1TbLFbDtUDU9KcYifQch",
  "key8": "3ZEv969BZwVT8fWfaPz8MjH7idofJVxjUBL3dMFy6Lm1RzMFLbMjPx2UTeM7rVafetna4ahSQ7DMkgSHw9pMPmbD",
  "key9": "4Ccd9AGWpd5MtTwS5u5dQahBcWoPagGRgwg8MkK6Ew1WwHFTAUZ8eqoGKtkd5Ci1N7GEbkKEDdzsHgdSDLELpgW6",
  "key10": "2Q7p7XAmNqEuYDCQDpg5Rg4MyxgXZnK1DHS62XJgdjACFbdBmjJ6FKFHhaExJBn7tZvMjN6jFqa4RJ17gCeY1aXR",
  "key11": "2ExyJmoN6rsmZQCFYokcJp87UQzVXKrrBZ2GVkX6AAwEWzLpDA3zDtrw5pzDVokpPpsFvzKR4QgTx6xmt1pFXHud",
  "key12": "2DJiFQhZ6zUx6NPnTYkwZRW7wm54oBeNcTKCvXLtZkCnMMGnHkAKDtKk5vWDYgYFXQ9hbMqKowHXJ9xq7p32qSeD",
  "key13": "5gMUc1TJ4q4Bu3XtBMJuTdTdtxqheXgb2VXj1T5GkRzoTaQPhgx8qBcvmbHMCZifj5N3chJyVmxvvRFfAhYyFn1n",
  "key14": "648iAhXvzzgtmHPtsoSBKJNbthmUpUnq2zrjWFAn4YLJ7UAXvWSqXeALPQeo6hWhpD5ydFhc2GuuSr7bsAqVrdwT",
  "key15": "3SePoUrtW2Hr5xTjqeLifDTBuNjJbuHak3kkTDLj8t8c2XzPoybb5KKYRaJpXeCKwB8wTF6ZL8oXTL77dGZV4vmW",
  "key16": "4wufQSjt3M8vEwxrj212zUZYudnffqVmzJ2UvUHY87qaV3P7iqCzoo3zEUT9VjidCgvsZU8avsLQhunE3gedyTxW",
  "key17": "VmQCK6ZBL255L8PCGp4xTxbGQadM9fcg8H1hw7jCY8NUaRmfCJJR3ue7bKjFDBG88tHndmyNek7EQzfgbmPUVGB",
  "key18": "48sK2QUrMBiXottYCDFHAy9JuqtX2ZTRY9YL1JRsZ1tkC9wJqWDBwzhSW9iMpBFDrenZt4iJAAvSC9kvVHmFJhZY",
  "key19": "4n7TdVEgNorb8Joof9QUviDpgD5iYRyrqPckfgbQppRyGUg8y8fz1hxvizdryfRmcek3WoP75bbjCHoLs6hmBwAw",
  "key20": "4bzuixCRYRUPsk2J6LyHWLwFQP6My8EkvYcUsXXbADJigoZarDnanFvQwDYSYPXrcGHN63sFmataxrfsqc7PtkyL",
  "key21": "2Xp1oYqLqvz7Zn9ntYphUPnUXg3wo1AoyE3irHQZcsk7diNAkZiroitNCetErbvZWghc9Qs63JmvKwKJrMVkE4jS",
  "key22": "d5vA84wu8xALZc8W93HwP8jAAECdgc4aPZ2eX9KrzdHdXybao9ZRjdSosgkXA714yDwghDw62YgqNjfPhRkcBiV",
  "key23": "5vBCnHuRvmKrkXdEwLCr53Ef3qYdJi3uMommh4Tr3AAYJmB7iQgquzgAtSSCcnnv2xuLvGsAhPu2jVsystL5snBq",
  "key24": "4NbyFU5UdK78EJYr9Mj3BV997DddBuz8ZyiinDJJg7ERTd329acd4Zu6yktTLf2BeGy9kkBAFYdTPdGBZtVurNDs",
  "key25": "4rJkEm9zqRkVZw1Uo8QcQigYEkPvJDUMgwH3xJ1jQQvhzVPRDsiPtXSr7YKWdCRU3FNhHwe88HXiQZoigcyB7wWU",
  "key26": "4ZM8vCcKL9wCiymzzTxnBgweTgd8MMhFFVc2xiKgau81HXA7yBhJgUCjY3cEG8C4wrcSMyGPScyEQodrC11KTuov",
  "key27": "5K3bXHiRYvHGJWL71u26rfwufJGPBjHZ2z2V2X6drsgUJ2qV39DmkmVFuog4Nsqouaq6wBYoyv2sCQY468eKC85c",
  "key28": "5TFkrWF3Mbtrdgydr1CgS8aGeqbVjXFZk7NMak77Eynhy1QpqtAEZd19sTcRfQLvqjffKXBuwyNbngoubs5y8qtj",
  "key29": "aQVcj2CUzJ9HLnCeLRPtnfkSAEf9c7KTooqeSJWVeY4bbVQF3qC9kTpNKdovEadmxRLJZmj1nD3vZdyPhnQEh1H",
  "key30": "HMR7szp8W4gVXkZkP9hHHubXZxs5BQ1pwFNEANjkwpQGGgYUiUgoAGxJ36co3MG2BxhYrNHFZRZeZfJDbc3L2UE",
  "key31": "5HfiFQShK6BvAuxrVRJH2wTXLWhmqTcsjp2E8r6U2BvttG6L9yHaaaB5rX65Quy8cd4GD5vDSnKE6cb32ohYCxKE",
  "key32": "3W2djHy7zrfdKMP9dD9jWQox9GEMfUi8FtguVecunLfnLiQduguX6chF8tNAgehP8Vr8wdGxf2kPbFwggMDkH9ZA",
  "key33": "W1PTMxUiKbhn2jYHs5uqcB1abEH7p1uQye536e9dAFrAdrrs8vSei4fF76wa1FeconHcwfzfLA22jfDBfXmDMbs",
  "key34": "n2tE6iQoK7QweBBG1Z2QLacgEYV8jwojkDQXrHpxRWtrQjT2MizuYp7GXRF3Dy3VsDTn7TvpX9um6AtBgxdmPqb",
  "key35": "2oMwTztk4knxb7PK3Gzh5xT3e2GAcWrZ8RSomMZ5LEySHPAp1QgaqVdUM4uW486M8TzzWk7j9JE6fPoUREbPbaqj",
  "key36": "5o8h1CEkyqHsCR8PX2uzi4X6kWVPSSjjVkef5C5iJZG6K7f63oJ1sjXRmz2V78tBQEBeXdY6AyfMPttGjz7oNi8Q",
  "key37": "4MuU2hncd1tKXwRYM6MZHCtXc45y5Y1trcSZ1TykaiLHyKdBssKtbJkx4BFYvUGNzqXHLoRYdS117evTmUXcMFNZ",
  "key38": "hwRtAtokZBGRFbnEmLvfMPRWxuDewHbatgkt89eG11WJ1PvFiGxjR8mciq4XhYrFcDksdrxuDtEhzhCzEtm6BuQ",
  "key39": "3sqEWo8K5DvMRfsoksHxBuyoiv7MTwNTVsSuSRhd6dr6hz7UrJchkgdyDYU9Yf19LS3oakgx8KeTtxhUBnNJe3VQ",
  "key40": "4RQYGW1cVfAsHGhfxkZqRdsKdCrLivYDhuz1d7G4asPhTptVTohbNZMDCwdjjfL87EGgDTkLLLREFovPpetyx2V2",
  "key41": "34mgDUP3sFA6SryHvtKmph8ud39XG7L8gMUCjPvJ2dSxnkLZADt7S4SM4Q9JagyAYMk84Cdy391WRNnoNkfkLm52"
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
