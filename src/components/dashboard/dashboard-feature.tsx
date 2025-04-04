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
    "2zMhXSu42VQE8NQgAZKPNrrGrkvscd8JA8rZoGELWTVasJVYi2aPjPso969UJEGJ29h3AEmAskDJq47cmmiLXjmP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44ELuuoDFa3UkP42jaNNXokRQEGShZ2UnqedPr7diHsAcbwfyyjB8SC44SveMyx8EzSq54NNUyWXfaYsiUztNMa9",
  "key1": "kqGbbFLBb9wGgNw4UL6hgWSGHassbR1CR415uBVr6iXvVwY9j9nxhRhWww8nkkZeBeHQmAHgnAGZNnZZTuyQ37w",
  "key2": "5JsjoB6hZ4uLCFnkTUfPVTsiwWWFqXmQvdVxBsBiFc8aoetHgRWHmWSiCWUgPpZSex7xPozicqYDs2smH1pVkfPn",
  "key3": "DbZM4ARcnH7n6jCp8cqcYkCHR6yj74T1n2pra73mHKzQdUMAG53FFyfroGM4pdt4ro7RrdT3q9LhxHRifL7TthJ",
  "key4": "3329n4NA42fskSMjQJaqztd2tUgYgL758r6Bi4GotQdFxY38UyWom2HQspbs23zGNJ95SUfbMUjsDBQJVZ9zo96S",
  "key5": "64vSdYg8E3vwv5exVQC1yqfW2Ktwymssd96Vpuy1GjY5my78H7iZjLLXzSPxVsYTVrtdjyHMKcXsSP4oKTGyQ42T",
  "key6": "DwY57XYzJmJbJCMvoGtbBTEcgcMjt3z6wC6DejvtRcDHLJDo1Ub8AQcjBNPrkm3heDc6knV3MD3pRYMyUbuFi9A",
  "key7": "5SrfyU6BhSfgCVHhxgMYBo4qUCbvDqVv1K4WSw3Ky8Yq2CP8azXkSuLZC21d4rpvdudYNdpe1GwhWqanSw7WzNKC",
  "key8": "2XH34PVNBjKcps7sfkvWZKkVshX8HfScMhuL3VwJrVDp9pHRjVeL16VWQZ9LUQbk89BM9QsXJjarBvBtE4FN4bzc",
  "key9": "4jTkXdnVvFEZJttZWeCSneih8swCuwEnbFrkgwXrsijGaNV2XLm9hcBrxifAkFfHDxAhV57bJ6cmaLQHpUq2nPVQ",
  "key10": "4JuLU4rjbiuw3EaDpPsoJyWU2aAC55qTkrjGcPA1NcyGBhrtynfLhutzrnaEicgRrfg5egAiSwUnv3tfVX1DPzd4",
  "key11": "41Smi8tk2BmMmYdMu4ABkgTWVaFjQtVe7njDnD5jcpteaopDi5WNJ6Hee6zSm7s4X6TToX71xugHYjprJNYfrETd",
  "key12": "4L6WAZeXNfbYSdiLPAUszbYPCzvL7FgEhEVyY7s7GRq6EfLqaf68naoKyNjiUxCkx8bNLkp94U17xWNEUuyMbvrp",
  "key13": "4KGfhgSeHddRZUvhjgPBi1PUZVe8ci32bmfr6hXqz24w5GGYT8f4wM7YK8MDJa5Tke2mKhErsGY9xUw5GoWTrbDJ",
  "key14": "4hQ8Bd9uzsZSyCEyd5AtkRfnNtvDj6xLnfkvzj71HJUB1Wj8TvCJvnTVayu89kLwRziVz4QtHDUH4a4LH9hccjva",
  "key15": "4wAQnpgBFeYXhPnzzAzqjgcX6mCCWjnNfZNBpSN2ZXzg9NdCZaJosXpk1rgNiWmtEC6RHtJuotjV8WrbDCq5BmJa",
  "key16": "32mXJdfDoeyBhAkVu6EcUqB2wEyw2ywRi79sVa9uNWGFabsnkVbM4z4piAyRj4LTY3my7hvw52gu4s45cvdLNcBs",
  "key17": "ty4EgKkSdV5uYLG9sqGP7CXiWFhJ9Fz9cDjNybQ7iMVN9AeZwKEAXUJydR4whKLQbCiF48X2nNzxMf3NQpufHp6",
  "key18": "5VkJ2dzDzDPf4VU2AJnntvWLS7LbeZsARR9jy99E6ifvKczdDwFyxtj3sQe9ph73gADQHdro8LsZR8ynyrkTt9UD",
  "key19": "5LyTUexpyyfd45LLZT8XpwTJZpBSJXbuXYpWaHXMJ8zCxvnND92oa4wfa758PUNEJkvbni5C2btjxpvVdSieeSbs",
  "key20": "5XM8U2cetDcxVGFyir42AwofLNALQWHSsJ5nyKabtZWTbok2Snpiz6jt3hXZy9DyvKEw645YdXVvDpywZ6ieJ1xM",
  "key21": "5R8Ly3PFMCucdf11uc3D6AEUZj5JNK6rGCfSsBUfD6PWefXm2i4zZGsowiuVg14f8veGgXc8ifyLZeooLferhc21",
  "key22": "4n2wrswt5VF8PAfNWyeNfycsHQLN88GU9NQRcSDD86W3oAcybjZ2Fy2fwhAMtYXr3WEavQ5svHCceVF9dornBZPh",
  "key23": "2zzHq3ehs4fC5AEzwudWWiSkD6ayvXTWZnLThFoRyJGvo12BVdN1svT1jRNmZ2M6aAFJDZEfDh3kZ7TGRkhrVdsV",
  "key24": "2risueZffxNzrnE8D9wJRbADzFzgELusXjjZepJMVzjMQZDjgVZV5zKVNzzvX68HodrZzwHMdFiVKisKLufa253M",
  "key25": "3PThac1aVyTahyUX2dWv8bF5xUFPzQxE4Pn9d8ympF62FjXN45uSz8FtWZ9H85rB6KqRmkZvUzbYhsTmmwSfFLNj",
  "key26": "TDyqXhkxZXju9P7cT22A74qkny4Pmx7tFgzJdHcrfYgGeKPSmNHPBf14PRm5sfAce1T3ZTCPsvS5QfFC5r885hg",
  "key27": "56WHcdzSN4T2NCoR8e9udxEe1PyHjmjvQZQtNEDiNrEpGYNeZugriYzauXPKHc1CEWPers61jokevzSR9pUKcGSZ",
  "key28": "3jTPdb4tWyBh5XnEDBvjxPKZnTwxhZLnABj7ZmnzzkncUCokZiEHjujGgyoJ7tGVUmrTNzB8Bb31d3Q4gpwibzGT",
  "key29": "4cw4XYgACWqwCFCTj7qEFUsoxDY7vjj6s2EtXLu9gYgaLGobPf9xwpaYfTTJ4pAiD9gMYHuu9Ez6mZEe7Bb1wvod",
  "key30": "2iZhh9mecDUYPx92CV8SfHHXeG6CNiM9JtcAqpivBDLUnGtLXbRAbuuViwtwh8a2FADwx3r1dumTXKQM2NghV6KM",
  "key31": "JVenzK9zZXso5JdzXDiMZo5s8HAc7VQvHc75LzvUxqkncE1EoKBXQibwgGkpm6LE1aRz2SMmaKXssALRhBBFKio",
  "key32": "2gVgSNnLJGrTpuhT2H7XnbRQ9pPd1AdR6t1Lz1VdzgtbBa3Eu6GNjwyscHuXQcea4xPFR6zgpXKbUkjwSYwNXo3o",
  "key33": "4iAew5YuBngn2y1FNxqp9i3KHE7YPRc2Mf4EGYkNEguNRv4CX2pheTEuRKyYhfSwpAv4Y749MwehKvKo6LfdQ8vq",
  "key34": "6QNaHfespGdReK2oVg3EWShEJzeKSDqF8oYp1t7DdJv2mV3Bu7g5AGgtSjsY6mbxJPLHKpm84MAH7HNeewz6cQX",
  "key35": "64U3ezsmqJ5SisDe3yg4VYNWDruKmt1E8NHQi6JiodaVZoWvA423ztyfaHNjmvdPUZw9CDTYAPRxPyh3LG7D1grE",
  "key36": "3nxtMs9DFpBYBFKPmtB61c7bNrZrrHEAF4jeGNju9VdME9pnaSrXCrYawFvaFko9AFRuPNsmP6JoM1hTZzn8jLKV",
  "key37": "5dKhgxBHHDMQMWt4wfU35ETuPuuiQ1Gz1ni3wAWWTdYpLeAY4dxBe2r8ToDF1dndZo2Prbc4mPoi7t3rf3P3ZS1N",
  "key38": "3hgYKQCSXZKxyZScT6R1KCgnUaYXj2ev6yTYhT83GbPtHWaX3f1JhfEVFLsXTJXyubwYs62h9X1mTaAiPoRyCM1G",
  "key39": "5qH5m3EuJMh6QxYxsUHuqUDaYHv9iDB7D2cd5uDcVKNR5XYkVQAPiu3GZef9sSm51K5rmV4wC94j4xdqxE9M7jv2"
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
