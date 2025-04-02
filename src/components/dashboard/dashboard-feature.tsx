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
    "5DVjshw3vjWkx7FCFUJSTwDtmQy55k2cfLSzUsFn51LzbTc5dzd8CFUgC91veS3PBZp6xCwq3pQE33fZtushQred"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L7EaRMZMHzNH3Jch5h4iFnPqwjfAiXJSsWm8c3T2yAQZaXqfUNstCYHERLZnsEi75T5ibBHFdAK2M6TUDuGgJrR",
  "key1": "4Y5dAL5wxs4G7bgFDn2gc2ntpwstDwgErBLqZxfzb9xtA9WePj7fDcBBw33WoF3A1EBHQp8PdUmKc5hrxt6fv5y5",
  "key2": "ZQQtPsGoKQap9hJkW1KrDyJMEyDYNjsdtBwpNcgBB24sokRH9hgkUf5JrYoSM6TsQhZMNiR9NX63oqBQ3LvjXwP",
  "key3": "33X2z3ykBsCyEnbeBW3zaocUpyzBaCGdVVVwLQjxWcLN5MAkmPixFwzeQpkssFvqvnB38Ahq7s932VpRm2Eaj27S",
  "key4": "ybTXsdkTSEF3jVjUbMy7UhdM7rdTteKbd4DguQm34iwrnP6NmGjUL56fmNSw4rKkSbT1niog3U6QQD7zDz4EuSN",
  "key5": "4w14vKNwx3UznDMe2PdmxQMujg3A6P221QGAp11gRt8PvsCypDivHPsVan9yzoV7r9cTNb4ZjKfw3djMabo1eh6K",
  "key6": "5acrmwUswFhkYTv9TPjP6UwcMyt1iBXgCqNS7chEFBZycPzwAdyBDz8rdnHUoFqsmKTFMNKMebHeDo5fAFy2JQS8",
  "key7": "2mAsAmdYZ1VcV1K4eiDQbduDQ6NWXxAnSga3dJWP4epMwtxegvfZyzCGJpnMdUiGmjXBViZo9qocMyXKy2Drsv2M",
  "key8": "4HrVTXLiw2E8M74inc5f2RyzDikYSRJop65gRBbrWPMsVWAete9NRc9XRRUPWpGoYiHEeG5CXyq9a3p9Uf6nQwJZ",
  "key9": "4y67XLJc7Xehb9vjBf6wq8EGEQyVG9Kthks4EdrWwovf6jvHcL6Wrk7SaEeqbAiPEbXkKdukALtSAfRd9LgChqFs",
  "key10": "RgYkmw8Qo2F1rVymQXq8YiPqtDYkTMgCKsmhHUrWKGW7xyzV2g3u8dEipvcszSBSv8D1vcBbqsyssHPPKV41x93",
  "key11": "3QeA6ScWvN43kBDpdaQkY27YKeeACX9867USUCafK6hUE2rXZFvyjhzZZctv6M8NK5a1hMrJvc1L3dqjGnHWG8XL",
  "key12": "5bHp9wVfFFdQeVH6mtiLu5UfkDap2wwPswhfMwzyAz6ZBsLM59hfQFm6kXCz1eRZoxpCmVpgZVK3PJ1xMf4dqyFe",
  "key13": "tmwaTSs5wHkeb9gXHRfMW5vKq7MTTJx9GXtehwLeZjDiuugEMnMd4UimLkauKBejjT6YGfo8nkNRpcym17DSEUE",
  "key14": "4wyCeqxbTEnMy4U1HACtcgoGzffFKewsCZZdM2NthwfuFCkSuhew6HKjAwXafyMkJ6duQdM1yKEtvA5kadfSszCA",
  "key15": "g9RmvZtwhFhqNoWPfXbbkCbheY1aS84HfGEFocCo4ogDzpwYwdWFTBNYorFudTzrYnpY3Aiws3YreB75iZmVcsq",
  "key16": "5C2HWbDukKaj16c4m2ZUtePUpoUwrEy3nx6Kf3w2U77zwfTt8Zc7NKYjgcpehDi7TSiBSJz198iUYpMcVB9QhYq7",
  "key17": "4GzeEfXc5hS6ShJDUknjsbASoigrUttwT15twGXCwQFq6kCVwHQzjhfT7EEvtKvXumNLJWASMGm2pkiZL9jvXdY1",
  "key18": "N7bVdB1XcAa9paNW8fu6hWySAKMjR9SubjQVZHFnLvDpNTqhFHTuswNAsBqWd5g2rAnf8zqkwqD2brNZ78Ei2HE",
  "key19": "pZJFP6KXEihwtmiyBSA7rP2vTLXGH3brAYFBsyNs5NSS7Li4SqpVyZ9Zdn9M6EKH9EczpAQM6uJ6n4Q1ThgG6sT",
  "key20": "3URAPYPZzjQPFodStXstmbt3dRQ3k2t7uV1mNbtosbcd5vuJTXuZn6g1dVnEcdefS7dK3SnrudPzpYDGg5LWBePR",
  "key21": "bpf4yFj1K8perS3u2AqRED4TVvDHrG7njX4DBmdzhD1bGd7HPtn3ke1BzHpW8vMoQ5EiK2iEfYyQBXDLhC1Rt5b",
  "key22": "4gFqfLK59wcn8Xsm7GevN92PLUcgKiX7kfddFYkeVft3Dvg3abXXEBgcNfbsyrU9BkS9xBhNudiZc4PrSDxhKSRy",
  "key23": "4rddhcQq8dKKQ6XtZ3FTbnATUdp498ZA8ysF5u1UUMPkFBTsDvy1vKYF2FqKTFxU4mJTvQ7Y5jmNkugBs9Jg8HSu",
  "key24": "nHb8NtPusqrVRbxdmRvTQjaWuDP54dqZpPU2mUhaKCqPL3gGHsgvKw5iL3dqgZ1jDkkTDq2jvZYMzaiWpCnwYza",
  "key25": "3cYFg8aRr3paFMyXtaz2vxsCbVVnkZM2gaqX81Ns3YTQ3ddyodV127xp8w9nxouFxe66jNwQLrLjBahCSmfPQq1Q",
  "key26": "4Gk4bGRLqr76VT3J9NorVWbUiuaPZVAHwNUT2xPQ1d4gTSr7uDzcwzch1RQK9CKGPa4gHoGv85fF6NyMzARGFbCE",
  "key27": "4aih1rsJsRwDFvsgLyrgwganLzp4jXzNE4RfhDM6L3Lm5AaUwiwdjrNPJfRTWLtw3ZiyFmKDz7N1KBRLPDA29gh1",
  "key28": "2T7d4qD8Qjs2FdekfxYinBnzkMGKLvUWcRoVnm36H6RSfeKxkp6fyL6MXY56GsCZjo3ZiEwv5AvAZ7pffVnjcqWa",
  "key29": "4yvncXAJEzMm68YMTLeMFMCZGcAhmMviNrqqAM3ZVkqUSZhqvgG9GF8YCDat3px8RuyzoFLgfiHciibRsCGGneZi",
  "key30": "7j6qXK5EHsswfqu6xuxb1XwGMEpMxjnmnUfbSf2yYisDsnmM9MzMSG2YyRcevm4BhxZkyd9DmJ4j1pZxpC5k3r2",
  "key31": "3prVfUVGaqG8eyjWMaiEwD3dS8VLwnc9LbHUv4Rbj2Q7wua9zc9wCVhg4Vgtfh8X3LkpwoVsnhMXiVGnNJg2P4NH",
  "key32": "5JFTYTfeZEzjacc91UYNytEBe9UyHaoj8ynt9JEWWhcaALPTGiaoJJvsKX4tbEayTbEGwQfWhmZpEk5L1HVvVrzg",
  "key33": "3UjZYrktABd5YUFQ991HHPfTkVEuyW7RyeA4b6uypuMDbsqK7jB9yd8c1oEAEfvy4Spw2YVXYvV5wZQDEqhHSCkS",
  "key34": "513xZHD6JW5WACK6Vf31P9EXbkEiZGD4PpaQgcQxKXKBq2fSbZS57ZNXppSod3uj1Lkg8HrqqkabHPKy4akzPVBc",
  "key35": "3z9Az6fqtpRbyFQjVjgVSb9TbQ721azorUZRvKTPZ9artbGA1cJQM61eFaQL1qfQ5RrYMVe94bbu2dnNHzAQvJJg",
  "key36": "4yRM1reqZDNWp11B8kJBDCgugpKxEoitjrEdc1qU54nSWLV8rKNZDaExir3u9EWAau3HjUr1MAx5XSQdNmDagn9Y",
  "key37": "3xzGxg5R8dxU17D9wJkLsgE4rquBjgQgYyEZ9dtyNw6j365iA2SeBSpjGcB1zZHHrFZJbvr2pA5UTGkvG3HFmfvP",
  "key38": "4Bq6niyotwEH99dTCLoA4LKPsAJLVKhmJUBQZ4YLTdKW4KQgATubMZwWUJZLuQboPdHzDwXvDpxGjz3iKTVxWs3g",
  "key39": "371D1JCbwybPqMunN6xjG3SRFjGg4fPvTKb2UhS1uBXD8smyowAxAvPyRoUEL6A57kx7NFzqiLRDLLm9PZXQ4DRx",
  "key40": "5rLHQozErciznyrXkzVNzA4RVPDut6GXuPYowsUzBH7cHC1fspYPJ8FURKUKUSN7NeBrZZGKJzGY5r2DSKHXjHAN",
  "key41": "YXKox4Jd5bupFJg5EZo4WU6c7wwvFaxJcthWanQhQ2mPtbhpChxEZKcrw6ve8mF4abknQ3qA4TuyczTbVtr11P1",
  "key42": "NNTNRJwZqDLbcwbcWGiMHChsSW69RwtcwGA37ezFpNgUH7oDtW7jyn3wFfn31R9dY2zGPKKgM6rhQkofVDJUSN4",
  "key43": "A8KCgbapPWHCjamJLBKTb4Zas5zza5SZTEDWymXKR5GmueAByvG2sTHKfhCRXkBoxp88Jsw9u1XmiaK2iT8RGeS",
  "key44": "3R56wYScyAkEcu8iN81AVoUYxmiuPkgGn7Zbo29yG8L1rie26ohLmM8t6NDCrVnom9iwm6c7A28Qd4vb6e3nv5M",
  "key45": "51CG9rLS3tn9VJwzmQzRpBncWMc26rcsDJc51wrXFWADGzUfjVzk2aLNVfKAwjTPPYZQdqgjsAw6PLu6s9UgVr1k",
  "key46": "3nep6UtT5DY7hsu6avUDVq1CXMMS29E5EhnY6iZvwGgeUmmb2CCTRvp8CRvdT714Ntdf7BViehKNqkBZg7ZoDyuw",
  "key47": "4NJYmF6hLzqodqb53rxfqD7PAqeynfn9TbNoRfNVKfdjSico6gxtTUeb4xJq5ojTS7JRJZrJPn4w7D3ft1Hxq88J"
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
