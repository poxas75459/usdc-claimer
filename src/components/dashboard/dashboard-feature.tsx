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
    "5hAsYTnFfWVQyZYHtPfEBRqC188NoDC9z2vBW2Nw3zk3jPcx6MTZtMPxgqieDf2yB2gYJYEPLiRyzSYZLyewTer4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NRf8jFsmEYMuayyC2rg84ThRwv9a9auZXyzjBRuGaCd2R2Gc6EJHiNgV4LgiePz6NdzRGsirgNkGF6RmyULeJis",
  "key1": "4KX9TVRws3XHDfEvNsLsAxH8B7NKGA3PF1mrCahfibyjK1T3SwKJE1YKK6DA3FB1Lc5NERt84EVg4XKxpvtsZPsS",
  "key2": "4M4rJCiVb6UDfGfzGbDL4SZnu9F7UaMpptgS6bNrddjXUoup3GhTFLtk3wWtWDA9FA8TZrJAsHqGZm7YGEhigBmr",
  "key3": "4WERGg3V4DRHpkykYd7mZMFChi5BGqioYXkyshUspkmv4Mwug7EAYkJaAqusJzoNtHoEhXRXQHCB7391Q1N9dqny",
  "key4": "2xPhBX8p3cU6VcPVNPftTuHKBmAmHGGunXP3uFP6RijhE167Vv6r1QU3PcgKDopNbqkokEWQ8uq3vj9yo8YjbsPF",
  "key5": "32hTGud1KVpWVCWcZWyh6rujibweu4wWrQL81nKmK8xies7PzfmjGFB7CodcfC6KQ8ws84vCuQZm9VRb2gvJNpA6",
  "key6": "4CGAWuwMSuhFqEXPcpWNB63yS4FxH9Ptt7wGmsGHMTLH9kFEqDmYqUjdyWfkdmufzgGGgmp9r2pRCfviot9ED3wW",
  "key7": "5qDW3kroMdUZ231QW5NnpBvXxKfDzRz3JJnHzN6uZxT8WH3Qjrx6fJWPGa52tz7H2abPvKsrcKQnTqUUPAaqBgYY",
  "key8": "2b8FvnVSGMtYWStZjJrLvJFArhUDZ5hLCQErZ45N7D16BKHFHPxMfRYJuuKNtEskyaF8qnxVLtjdwfvkNK7znbue",
  "key9": "3wftQvBwk66e3BYjG65TvWEKq5kjut5n9mw7VZvtYQAusVURu48UPorjGuMjXBHAcAUQugbi8MN48csRusU1d5rA",
  "key10": "3vdxJQQvMedgwx3W6qsSnFKNbhU6EE7toy3FwLSRn6KhY5yDfKaHBaL4sZBBo2q8jJ9J7uBjfofdd2TKGPrtGqQT",
  "key11": "5qAVQbaDsoPe5Y78XBrasA3DsroNw4RrXyMwGYSjbaMxPRt2VpJQbDvGSVd5kzxvKFfCSGvzNppFocG3Tz8E5bun",
  "key12": "uc6VgecjFQmZCc3HbCcrZVc4ZNGHMreB1DyE4DHJh4QLQmGwYR4NpHTAZsh2xYjcsXB3mAUNuv6DLDkE5Xzvvy9",
  "key13": "tKe59He8L4HK2H9DxCNafSPysuPLy73oiHQi2HFRn9AWXQfJgbN1CYy4kguN21ZGxeaZghYBB7gvKhzyJfXPx29",
  "key14": "Q8BsUqSYeQWDJMjoLU7GJyYKtQPuY6mts6Sxb8UhBD4YSHAj7aUkZ5cjWVyEwwcceH3gGdV3aQojvG56rdvSA3y",
  "key15": "3TRFU3eHydQfk2xvcMkfi8gLX8LuNJbFAB6GvSJbQSaV9gNAAeofgGPJaUXCYGPeHK3Ax9jHDpcYH3HMuebLUHQg",
  "key16": "4eGT9zE6LyjBCrUovHL979WCu6fdeUgsKaBTcNN2GsGDSGA3z5YPNhHrRSvFfYYXj7rV5mvZG7MSf8x1qsMVqCeK",
  "key17": "pf8E37ypjFTdvfggHoQpsGn6N7kohAayGx8XUpYmu8eiyqvZKQ4bsJVsfhKQT3nGg3XeUq9bR45GFnmsGDixpnC",
  "key18": "4jT5aFyFrPeUWGsKTwLUPxLN4XYyyMsiFKddjXJqPA5yEbejaDKzbRL1CCGoYGbKdWGC1VYyQQFtLT2HgEv9d5LP",
  "key19": "59QLppcpGg5dSjGKwggHZaTguT6vgu8o912PToAwv5N8pNiAd4e8CATZFZtiiF4nVYBb3FGh6HoN1CH4HNNfdmBa",
  "key20": "YAQBhdJEMysREaBNok4qkGsV3zSnfyk79NsJBQNWZeoDMTixk1rQ3W7mNQemJyPE6HStgBFwJm8bPNtBNPxmJU5",
  "key21": "288sfbsiFX735asJSzKdGCr5AvbwvTymeqedXhnqjboFG68h32xQRDXEXVfPZQTFnNNYcDnujNHH6u9sU8A5Gdaq",
  "key22": "YCo61FUSym9h7mjvR7hYdSKhXjYoqzrv2657wkG2RmzGSKyohyZmeqj3qBkneVWduLnsYb5Vj9ZXHWQQZVDh7Lm",
  "key23": "3DH6tyquccVaurpgP4DgFcBSrT9a7Xmc8R7u7EGKRC8CRR8KgBLZmnyxaWesB7GiCraqxk9DmJhP96vNSE3jEJX8",
  "key24": "58f342Lk3fXP968bZrAAMJiiKjG3Fa1SndjKnAmrsVKw34xQBXPmui9EBuGypkDNjKWRMSuQCjs4uovCYgzzHXUu",
  "key25": "631CogmbHwZn21rgD8qSgrMp1zJuGKNZkafx51LXVTCWXuD9NEub5gNWsjWvmcKuSBQ9AnFBiP8EeJgQRfjQMwMo",
  "key26": "4AsukuSbH7CUjteddgimq4Lza99JLdGiWaL3a4jKX4e9XhfBE8msV4HtihRRq8FM6HUzSbpQwVfeh2r6x93ziZCS",
  "key27": "32fj9tMH1TMXRpsm5iLFrsN6drbHK77pmAs9S1Jm7Tb1WUkwaG9P9qnCxqWtKUyWXw5FqY8nUgY6K27pgUYwsQXR",
  "key28": "usEbk4ZUvAH2thkBUvcqFdu64Vt5z8Bkkpu9f2utaGB83jijVeZEi2kc1tCjT8GDxUYFwuXEvfPH8Y131HTLPQH",
  "key29": "4gtozuDdS4gvGavVXA3Vw8APjoXYn9xDoKM8wmxHGtpvppHesWfAZ3TLDHjHZ9NVJkC1w4we76cgwmxjcCeXaj5Y",
  "key30": "43kvVknrWoTKARTctTiQYx91s534XJoYEnuJQF4bEfjdySEB1zbUWWxcz3cZRkud9y8hdMd9jNcvYwbfriAP1FJi",
  "key31": "5kCa3SGjEJwQXRehT3AiQubvfj2cPSTNLgfhwujSFjCtkHry1MVtSyVMrSRQ89Ckb8BwUUmFhMwm5iw873qPbJas",
  "key32": "xHQJGiWzuWd6o1Kkyh622fyTytubT8FaYxCLQ3fifZM19wXXUAs7xfkdSMenvvCNqPZAgLUQpMAK29m44cANTfG",
  "key33": "3BjKhiYaTUXVH3iQbhLneDMSVEk9ktFBKto2wxRuEniESQr6tPb3voSAmd6cgK6tTpMZa5i772Q9bQejGy7Z13eV",
  "key34": "4n5vdESjmxWkJeXQt6v7sqNhTC2Uf9XWzYGApWMdwbaSeVz7sjTEETSi6FznG1V7KoSUcVqGMfYNbX9zbCATiVEw",
  "key35": "4Mw7Jjaqhtxod9XkQ4j7687R2Ej4fGmHJ8gR5vNkwhBrNgsGUXtWVyKLhXqPiEwRGhBneB5JGHRMoKJw5e7C68JW",
  "key36": "4F3kVRjBoURuLDjE3DPRaxWWc5A4v54mYbZGU1CRifScSvCHmKJzMVLX9pUB43MBhgUEJ3xe5b6eirRndZnWofi3",
  "key37": "DHBhVGy7m3MAjYgg9jSp1YWzsoWtWKMkru7HbAaNUdTyRDj7ozU51L2tVsWzsJabzgds1E2fpuAHyKbHYBQxAW5"
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
