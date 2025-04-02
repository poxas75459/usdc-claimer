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
    "4QAJ8QbmeWRzmv8KJEWWj5X8CyvQTEXdBdDpdjdYcTVZzXyKaSDjPBdi3LfRV1gtXpVWzN6ja9wRKjXjd7WNaXpt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "346rGskpDKvJ4FLVnDKZBsg2LAgzU67K5pjUkVtkHDNFrgSiC1W9CR4MqwEiqtw2KBkN9eZwJyXN98jewvfiPC3v",
  "key1": "vPWQrcob2eYEQy7pTyt93rVbnuU58L3iwqpyiVik1F7VNi6UEVLepqWXhoVQbcJAsJNxL6wEmZnN9ZMZziUy6Vs",
  "key2": "5WkimnfcThR3erjU7xHzCCRyfLkSkPpZCTv43Q16vADd2ZKkjwkiNeawoSjvH2ocwN8sMVUmQxtSaTpbipAHbCzC",
  "key3": "4T6WbaHVoKQmHe1pu7zm8wShFuqidE6fkBdUZunmpKxC6FaMTQFJKNrqpo6mBET1pj6jYdgFfWTxqFMHEvi911oA",
  "key4": "5EbJq9Gbp8nb6VfXJbwKFoBeKUY5XGEvAiexD3yVY8EVgm4VhU1w52LUGT9fuTgZU91UPfeewVtwgRRhNoCWj715",
  "key5": "4oP7ResiJx4T2MbdrxUFewMvuSyFGwd6uUHLV4s8i9gCQHgdSyf2PSwAzARdQhtvfw7Aj8E9ZqWPz8Pak3gWWnGK",
  "key6": "5XtoBp9vw8GZMv2HfimxMhKiNEiycmb5EHu2obkNQPG3wS7XN7mG4vEHuh6BHhxmKoW6Ar8omVH7SMxNGscfkkgk",
  "key7": "67FEjK9K2DiNxkMRqzZtEu2EVdvWfe3ext2zZkwz8j8znKVprNJdqxjeCmutEujFxKcpDzAkug4o68cAreg3Db7f",
  "key8": "2AsLeKWZ8KHSYukfqDNryzq8FM9VcqX1fv1i3m9kZLCKs8JS41g6c4sp5AwKyG8b23n5u5TgStgQUi727SjaEUPC",
  "key9": "5mWCcs12SXpAcfDkMGGfyRCBiZRVwd8mfak5SQRSMfbA5Cm5ELdV5ZeumV1JyNPmWJyy3416vBDfmud4uFF9NnK7",
  "key10": "qpYpjPzxpUByXvbQVPSCd2ZFcnUopbA4RRd6p8hyU5uWFkEZq8UJAfEm8sm3aKv2TyFTFjced8vyEL34BnGHEF6",
  "key11": "43j7oz3xMLewi3QBAuQBpuzVfZVJUjNCqwPFsNEXsrZUNL5khvZUaoLMeqHyH6mb66cLDgHEmLFgc1JhZrbBXbXz",
  "key12": "2oiiT1XuSczXN12RPhLmXWHtXcRxpyf2cvJBAfq6kgvjrkeQjR1ZVbLYp2hEJWYmMbUQRYcSkcy6KoeaK4Zhe4KX",
  "key13": "2Wq4u2UThvJpQTygn3bswuiZJkgGj492Q3NiXvNwcRPowN1bRTU7pcjZvnZpuFWoy7PJHezQDinXizF4eBiTMWvh",
  "key14": "3DxteHTRfTxDXvir5DJLFCKjSQ1JGUcPc4H3vh8Pad5cRqsawKVSkBCMLpuhsS3FzpDRvZJ34raz85VggL3zMvkw",
  "key15": "38tqsvcEx4AMvKSYSJuqkpwwKwSyfFHdFJtT7E6tXkv1duycN8UN74RdoUW29Srwz39KAryWw7dhC4iN9kNaY1dM",
  "key16": "3kKLUyiWQoVHxyP5hpnM5pRzKMtC2ijhbF47Ef2NyScVqumajqHZvduNLjaQSeRBb3rs8SvqeSpHfZwWGxLa7FRZ",
  "key17": "63zpRBtttDUnDW7a7H46iDBetuT9BJs8stiPcyLgDXHP6GnQnE46mmGvQQ6tv6CVXVCMXhYxhNMXX7UdM7Mabq7N",
  "key18": "4eVE684CfdZWFNodMWe4dzny78GiGkx5RYqtA7jHSzn8wVjZCaqdc3JKBSPBj2j8kVS9eTZQxFBA6d7JRDkzmztJ",
  "key19": "5HRMZ912Znzh4HabmUiRcYeWnXU8o7xT8VYyeFdNMuMZz64aiCKizgGLzPwHykDLZSxbyLLio9cYpHzxryQ9DYEq",
  "key20": "RmzUo9YyWy3L19GijAEwKstXmYgEkgMGu5KBioDwYjctn48GNmegHViRiB5zesK82AuZEAyHZMFbGrBKa6Z3qy7",
  "key21": "4QiANhQQfcjWXBwMv9A6c2BRvnFx1UHWdCH8CqPyKtbpdHdJ21uAqyJdbM9MVq2dn62xQ8nXhLKTfbYWGBXKxWmU",
  "key22": "2bouPVKyTh96pLqrTQsudqW5PyQgDcuLueehDkVH6VtzX9NZ6EywcifpMpdsMmKRB5T3LpcZPT1JA6kh4gwEpRr3",
  "key23": "KAhDriR5DKonxpAevvh2aNyswAgNzP2A7jXyLZjccvCouKpb6mzFFymP8HxTDmVYddR9pJzthFBFMkkBCCYy9ur",
  "key24": "47tEXyajJ2auc6JMyqvfajL7eNGtn1yBEU3tBcaAXAavhvYU4M92ycVPjjk3tYnXGiFtJj5w47G27LTvkGMuV6gG",
  "key25": "S9iNtech3CjrPNvim5SUueVq2yc5tzC5fBjwth3uxU4m2HJWDbVXe7w7U2J49sPY5LFuoQZLgB28UgyihbHt9a5",
  "key26": "3Ykc4iLWKpgYnmkNHgHMeJyZNSfDohanv81DuiedLQZxGd2BoypSbcxSdncM8poX4pcYRMRyWFaBeFFPXZhu92kd",
  "key27": "3DmqNufjDHxp8oihR77wTWhcM4HcBWZjNRwA9jzTjZv2Ctchz5qaTLRWQpogELiD2a77uiFzkioazPASzK5KmwY4",
  "key28": "5R2nhYCFKx3BxZtaL7W8SeRRNwoqLUKbxeDvPWQv1wLZDECBH8CpMNktR8HrXq94GAVD7nfxC8BTsWYNhA929m6S",
  "key29": "4qH6McmmJ68vrHjkGAjffLNHsmKqUyZRCyZzkRu5mx4CkJoxR2KwcFPmvShRBGnCC2u83rYqkHMDzmusiyNjox8q",
  "key30": "2dwHfLJVyTsULTns9hNJYYMzSArkw2VwM75Y9rB2VFJURYi1C7hEn7a6fPKwUpnSXCTAU4qSYJokeoW3kbcKMoLo",
  "key31": "oDVjF2nDbynra33NemAEevpqdtcWVdthBPoV4Gq4SaGER7iKJNpb9s8s4HPd7zanbN5Buow8a7vBc4Fhgt88zJj",
  "key32": "5S4q5P2wkdwmZoHwBxYZzSBVYh7v7614jz4ZKitfFXT2p5APRj6gyFQV5muRAFD53pqfbpYWaFtmih1TKDdHrFFf",
  "key33": "zGWcm1Vy8mMKZY9xRcpn8eHCqXgo4kRjj78iD1e1w6ox45ezMDuNNa7GZoa7mWQJ6bdZyFYGNkF5JkczxHVhc8L",
  "key34": "xF94znuBCAdyPzAnq6hKerSQ4NuExQajyAkRmxQMmbsLoXqsfC4uw4bUFsYJfBtALaNkJR5khCKvyYKEU4KQuXA",
  "key35": "4k5f9YsWNt1u9MVfEKuzsN5ANqQbiVa3PvSs4XJynXDUtHK3hUsR5pouy3WRFtHdyb2k2RrZtHkRBoqpbkwre2UN",
  "key36": "2mPUNGx2myy7m26E1FGTypMUjFeASTzsVfRnLR81cSd7aa15of7Z717Jy51VSd7GH2YrtzUpjUTRMuLXEhNEMUSw",
  "key37": "57rrpkQS8d1eG6srweTBWb46xZX7P3uqEwepUKQUpBfVkNnN1rJy4ow41iMpLtCS5f8NX5drNeBNoPsM4Gnmux25",
  "key38": "5uovkfZA61q2E1GMX6WsVUBJ5obXxYu91pgPLtWUQmoLuAYhHTk24HKpVnvxqdK6QryAHwUwkwaMqS4Vfk7M3uFJ",
  "key39": "4yjKwpLE1TXsqJoWsD33UWngybzb1iS6FuN53xtg4jiodTwKD1r25d7Fzm1JPHmcHSoEuhCCbbar6bEKVUszpYUW",
  "key40": "51QRFDq3yfkDX9qrzjhTLvPrPpEHpWgtSupotzJWbx3sapfcVyVKgcEaMsz9QTsY8Gd9L62SCfj98tPoFYWpMyWD",
  "key41": "5icSSUfRjduWtgErVQQn6nDaJ1CSHNkc5mGQKxb2vju6Tw7Rg4oayJ2CjEVknCpkQEpZRvEWzKUFK8BUfXcbiZQz",
  "key42": "3Hyf4dV4Eu4ocxGDzaB5w8CBAmHhk67UwSVhnxBZxtHvSzMar5Lsb2UyDFFFmr6G2mW2XpWbaV5UsUwrwYK11f1c",
  "key43": "64qWrJkweAh2pVHhwJtEkp6F4Tz4967Qe8R9dNVJRFEkthDJtB3qeDhbq9dV5qwBkPXXyUYd7bDUaApzM6aYfo2A",
  "key44": "2FxMbaYGkP83odJogWLYkXAVyYbdT9VcbbZiRCHY7AFVtqyFgFqGDLkKhPcwoDKVfnJL1SqdjJkg7gvhcnmoDQfX",
  "key45": "QqtKqkK2zEGk14bfpQCZuVGL28Ejd5SAFJhHH9uEDWAoKZzT7WuqHaDxKDb5EW5bMtgvku421qhLRKbPC2mEfsR",
  "key46": "5GUrZ7QWoKBRKozMLeHDKFzNZ6Zt1TNma2Dzc23zDoyYiQhzHKtChEK6YnKmXuUS4gj5jBks11tPsx4ED718QdKo",
  "key47": "41Ad1dckZ9yqShrMfEHByxAyGK35P1NzJT39RW1dYFbQTnJFibhhd577e6EroWEb5UvYUwfnpbhn12j8UCx6mm9N"
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
