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
    "3ijPj3bS4ro8EE4tpbmyKTZHXwydhoixCwNZ1vrFZhnX8JfekT2aChHfRoNuCRXDbJ4LRPYcU9eRYEqqZNasHZfS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28CjUNfvrbE5KUwgrtJjJygozVigHZFKwJbnSRAco9ortgsvz1YSPArSg8RHMv5KSezsr8TpyojkRtp9WvNxSnV6",
  "key1": "s8AycaZvzSB3vWSZy4MmkmUCPSz5mgcKudc8fU6WhnuZ9UKpqG8rrEjJPpkAhA52tKHU7SfKvEwbUaPEgvtfz7c",
  "key2": "5iS5riWW6YDdQZ5FDUYLDZS2yiEd7HitTm9eUy4JhdDXaMhddXJkEepGsMFvSehh8Z5xr21Umd63GavvinbkbAJE",
  "key3": "4WgZNzXQawYfFwfjzMJEEF3T1Ki2F5QXxM95n8ZdjecQwRdnehm5SFYY5V2WBNNQ8iFQPNmmmuL69X48CNppJmCK",
  "key4": "4jnRkX4QVNY29wgUDbVqw62GiYrmzG3zeTNg1vtQrtctoTz3mkaQaTT8PJYmkAw7ApAiFgpFVwzFYEG6q4Q3tm9v",
  "key5": "3X5VtW19tXZSKZAyNNhe1aVybtwMszzGjUGcnWuHAKR514it3YVutGnqLzUituvY8pcwdPEJkKSCxzRH6MJtdm1",
  "key6": "5QeBVSVvLxm8LhnGf9jKjU3K5hSzeaFEXPCVBTdbjVnCoHBR9gWShkUBDt2ZHNViCfGjWi7PzVPeK59c7cVDonko",
  "key7": "iheMmBjKLaghprALmpifyv8uctgYGGknGi6sgi1vbhWovqyhTgEMi8VtYA18keFBxHhBYAm43M1voJp9QhbkJrb",
  "key8": "su9keZ1zBRUWhdMThAmaZc7gZGmUfQHUnkNupwDS7N7GkvtEmiwxszUJ8AH44bAJnJWcR6JqZYHbnSC3miENvdH",
  "key9": "PXQyx8EUtk4DRkaLpSDLS4E4e1zWfw588Nt4dvTUbU5Fcja9Hkh83MVNjAgnu4GQ1AETdxH4sPkzVwRUYMQJeZR",
  "key10": "4Ty7eFMcDrpN9PG5Y2kW2iXvzUccg7Pc7j7ywkB4KfQyNxiCmXhwyFyCu78fBxD6naBYQRx4HfeTPWP3Af6AeDbM",
  "key11": "5xL1HgTPwXTGMbdLReANwKPqjGKWprJCANELYNY53LHP9qA4fTHvjx47wXQBBFMF9zR3dufsd37eA16SmSoxDzZa",
  "key12": "3ZrrhQic3QB4HZoJm3h9NviDG158YSTkrZqxD1Du2hUt7N18vDJcKWZ1v2ytQuQohuUniSxep2g6x7TS8a1vid6m",
  "key13": "3Ntu3AiVr8tuDSZzdQfmQz8XTQ8gXnUSsJxs9Pjdtpyh6rzFijNNMkoLmuJ5UrRJhaofKybnTWokdbyMTRLqgxCx",
  "key14": "3fiYZVidFhbDmSu7cLkhWQhGiMfvR9Afn7egdqjwLeVai8TD8Gegxfvpoyzj2Wu5Qb4HrzvqDqoLmBczGjnzNR8Q",
  "key15": "3G6p8ujEztDwRXXUMaDDyzDCs4hakhCNEAXgG5nYvYrKUAa4wwFGigKTPvfxSyeTFu5JQSvdBA1EbDNUn66rEaq7",
  "key16": "242kqo9y151pZ9k2KztJM4VeC1KHZvDE5unHGDniuzKQB7v65nnmmtMGccNDp2WsTAWjDwTW6h8VUQGa9nWicXw2",
  "key17": "2k93Bch6DgeQYrR2Qxz8dguG72AWUjbhd7ZNTRtVNWJA9Az2DNW7uQqHTDdv5fQtWwCQqENGi66HvoNC6kWrk2op",
  "key18": "29tXPSQ3mcuR6JHgwwBzzMYMdNj7mY8cdmJiHJRoMsmAKWUoaLm22NnUvaVqaqcme4aPb3Yuv6QDAtKsG4gKhTE8",
  "key19": "293biHaXo9rPgmzyeEmFXKbes6S57PFeoWtrSV89V264DJm6EQ4KKopvc5bYFrRU945RpMj1XDXcRVxijSnyD6wn",
  "key20": "4oYijLiW1fReK6DLregyjGtRk2KsG1cUQZpii5vu1iFJ46ZSokQSfUS5UiZGsbRXuUSdCnYNen7y7K1UY3sP2eUw",
  "key21": "2zwjsuqZKe2ysRHndbdxwWw8w8kRGhJZFEk75Q87zYfqpL3mMjGTaPqHoax6gKZEeaQDo2Jjxhvg1xB5FgK4dPgt",
  "key22": "3vsbbe3uqg9up2gaMfuE3TB95PZH8Fzv87iC3SbFKfNnK8TmoPyy9ezXQBTPW2iftEG4frdtWihtFRQuxQbNKWrZ",
  "key23": "4CFKzXG7fWYNcXf9yE7EH7Ymn4QK9vXr5kSqWC6zXJB795Z7sz79SmL69ARbB8PEBwcibnzJQx8DSmFehnv1SPTr",
  "key24": "2wWVpxTdd8mw4vBwvFMyHDFpHDEFRpExVGs4uC61ZWpTfbWpAuekNeqKe1bjuYRtShQBsj3ggSyFmLjdqRLd5CQF",
  "key25": "4jcFxxNZmSwHzw5u5GZvUpJQwgQ1x3rx9ctYp2oW5WEoYpXFgLFhcA54A9NxCLiw3bDevn47kZ5676ZKx7zq9pyA",
  "key26": "giqnWAiezZX9JgFANALgRvrwTaoJ84WTppCqD7NFAdsTmDCkxHccZgkPnhCVQpe1rKmVLA6jqQHsCm1DyqVTM7T",
  "key27": "LpnwRMK7bHuRds55YUcR6dtguTNE7xAhGD1exppKE4ZFGckqkpQY7mGgEYBuKUZT42KTHpzVbaYYZibohFos6Bg",
  "key28": "4TrERJgE3faNoDLXR3UyxEwY6U2dJbf7b9ek8JhQY76XARDMjhVaLTXqrAJTgDutN3bpmaBPQDgkNNa81nKybye8",
  "key29": "6uJdwUw5BCFFhEMZM5iC8UHC5kPK3BwPqE8JciEiKsuANk3vKpmEGiTL2C1g7KHKD6EgcMEQLNkg555CHEN5jqi",
  "key30": "3mUQbReG8P1FQki3cFG8zMstvin3Xj4xUAGbqLBCQNw7CEdKhB4XZxVaYJ4BWYiintEQuXbLrS9HEZCoRmTk1svh",
  "key31": "5sTubVunwbzAZyjACzLNPvKRJzVU4MvZLU9XLJn6u6wwbUNrgZm7AR9hmUELE9kxomgHDWNc7TEAE1h48hYKjLqK",
  "key32": "4KtNsfYhCxdCpsLn7vypzLgxxYv1WjyjKwXPe541cbXSBboKRPy8d7zwBCLCrf8VWUE1HU8SAKEnd1aZeHfWosVH",
  "key33": "4cmH7oMS2suCr1KTGdFdDf1xGXmtjuxUVcAuUZmSuKSGmRom913Va92fEX9TWJEvjhGdWFdHQGK5RWpbcGae67Nj",
  "key34": "5KEt4B2omu2DeEfGh5iqDsNruieLfppCBcbFzx4H4ZHMscjmnGJBcY3Yz9zry3RGFHE1Xi4NhBryErnDgZMM6XX9",
  "key35": "2924Ch1Gyvu3AiQFFzuuL8yr25UpzxaKUDhWe99cj51oQQTW5mkoWMf51hydFp36ej9HjttLbtm1ZXu7SqzQPGrx",
  "key36": "3xFLrFuNfvUHpbGguPqnmofLgkPwQoDGHsBaCp3Hh6Kk9Es39j8WNKqM1LsCBbmjphCwkECMfdgtusKYXCRhS3wA",
  "key37": "xS7PL454wqMneTNSGsCss3dNQBDGpoQPjWfpyRBDdaJH49VPVUt1kxiAKrU76dedU6Lyzq4fUWANdEEHSjUbjAC",
  "key38": "2XhJh95r569ZRBRedjZfab4LZm1pdLSG1NpXKSGgq52VkoCut8mSULyCMPyTjFeYA521yYd9SeJTvjUBycCLisQ9",
  "key39": "3qKFWAS655KzELqPkBqb73R73phJw2tJLPiRxF2p4HUCLCwXmSDY4M3YJMq9r63zasDifCv88Uy8bYvQsKjGjXrv",
  "key40": "4GeMtiCPAjxm7KghgwLmd2FammtqPxA7k4Kzzf3YbbVp4AysvB261kje91poteumK18i7aVC3sy9o2VLwxLVu9NJ",
  "key41": "ieeCUEJiPqJ2DEXtveb7QJpoqPjct4bfcy487MPGfBC41d7Y8ESzZY4ssdPwW5YUZ5gq77RnyHZ8CLQeyLLNdwe"
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
