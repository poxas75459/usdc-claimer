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
    "epoc1eHfuzGXfDMGdyhooDwcFyKSYp2dvRViTx777CohRdZaVozPSjZST8WzZimvqpxTKw2NY4pF6T7PEvgL3q9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mNcVb4feGhaJuz8n1BS6nJsNUSjKwVoxzEWXgFZ22ZJTKDjxu1Bkjt3WnH8nhvktoh7RDGQdWqiKyQjpdRyvyHL",
  "key1": "2yRFLnF7TfyzWrsCFys6TNwiNPahjsS79PWm1ufjEkD1CFUkUSXUs1Wk9iEAdYxVhHGFtyYXAsZp2dnSqspcGo3v",
  "key2": "3E6Uw4QJcpCKVcbZLdrBDr1bDU7w78FXbZtYxq3fYvsdfRhu6Y6e5DBvu7G5LpcGKEaKLhL7tWxRSqbuTCqpYM9r",
  "key3": "4rrfvVbmkGyVjdsXrFQDbH9eYuzirRUFta5iGGhzyBtDXWYfi8TCecG5Pgog6PY5JpSE2dmpcWGYdJQgVdJwTfL9",
  "key4": "4USnRinxPkaDE6BGnu8pkcYo7fKQ1rqfmVMyfMugLGFrbcfb7szcvNq4HTc1uWEjjgjzR6FvjWcyAAYyDwr9Ch1R",
  "key5": "4GHvfPBhqM231hXNccVBUAkirerLbL6CMR1vx4azEP1zqfY2cwFhFVouRUPenQVuhaNtUqe9qbGT8z4dGg2gy6mw",
  "key6": "533nfZd1EU5ywPGd3wSzCLc2JtjNc8oTh5sc1rFzEdzKT4QHcRmH7UzERTWUsxQPe5ybt3R3J58f9HA4RnXb7yH",
  "key7": "3zWqT4LD3MkaeJxfP8U3a3mQwJP4WjU1C69c5k6bBzfVTdswiB8ZE9GZCuEa3NmFLdbgGePKxW7x5Jy8CvbYE95S",
  "key8": "5r1aqFhGaBxBTtsbK8XrBGG2pi7ZbKAzZ5JUEKR9T5MqPP6DkzC5zMmumyYgnrWEaJ8yeCwLjZipLN4geLTWJsmH",
  "key9": "23njBW71kQ2AwCJ7Xzsaw5SVwTTfpyc3PFLQKjoxqW5TsKejb6sC5TD58Tm3UcqpeM6VHkyudDzVD4zE3ybztaSN",
  "key10": "2oxJjhc5To3HWVp6vAwE8DCk4nDjtvgGydY4XAGUngxXG8jivS9yakWWjayRVt3caMuiGsxC7zKrPWTdpV2fGyYN",
  "key11": "3vN684eqP4exsTq7dZFZkt8tFNTEFtdefLytKhpChAcKKYF3YCi51pktU9ipZVTFiZeVbJhT9dXwDjo8wPGzgW41",
  "key12": "NLCxWiH8bGkmefk6iEjnqKnsadEVJUcAvceAixE9hRyKAwea3yonJJadMeHgvUfLCUSqe8Q1Bcy8m8zefau1FAE",
  "key13": "67X4WpTD1PxwMd6ci5csHKMjrXS7jeKCEPeD7eYNwjaBErybun8hCSUnmEKWVzK2LLFFCG2jNnQsCAcut67YVt1H",
  "key14": "5Jy4zEiCC48gPavpxdzskE3nihrTBKAc6xy8JdvMA2eS9PykM4PgJWXqxGLiNaK6BMzUquZwgN2VSDRqmDemMESM",
  "key15": "3a6bUsKuALVkfiMYx5uAxYGAqhw83Vp7NxRMP1Pk88VNbyVdVxH78aaeW3LqK7TLMGc4WixEBcLBh2tLf5oJCom1",
  "key16": "27ETrHmJnAqeV8B1h3SLHMU2KMRQFLgj6rRXzPKESi9vxUUkB7H7EAb6Gep5e5GiwBaKVpGevKjwscoquEH3hent",
  "key17": "3XLFN6fLgnBBtRbt3emeCAoWbAzuu5rh8dd9VDscoKk1QAvacVU1ksAp8MvgYQgSQ1mEcdT3hiSWYqeCdixo41yy",
  "key18": "4wcFbmWgA2dSXzez59VW2R58VTxxB6FbELcJmGZnTaxkdkQ9gLT5TyBX8skqpChnP9Va8vZAZgMfBDt3D4NfWPmo",
  "key19": "2hCKXpSP8YXLK5xrHNhbVVwm3LiLJmowYN8uBqmh3oSXJqeDHriJXZa7XegvVBDfVTwBzFSRcojWKs79YB82kbuw",
  "key20": "5cjTe5oRbRcdLPkrDECsaV5gotwYMTihRCe13bbr93ypkvuoE32kfZzV2HFdo2tGqhS5WSdX1wVP8eghbM73Rs2e",
  "key21": "5WhQy7y3CdmDC5uTz49EqobWdDAwrJeNwj9NBFmvBXeNrFQ1No3vAcLBjdACscUD53wGtyd8Urk3VwyCBGuW9WG3",
  "key22": "2Dz85EKrmfcmNYuQXaLKDcwKrYtBWgKzQxWKXhRfbGe2fy9Mou2NeE4eFJuAqJTsahh92jkotNDKNHfCsKishgr1",
  "key23": "2h8oVp3Pn4iQko2bExf2rQWd5foznxiLAij2j5617tp8gSAjm5puDGQvHHgYUwnUu56r64hsgEQHzgBg6bGAke1a",
  "key24": "4wR4t76Utz6VomLWyDkWkzt7XP8DF8YmmvLmiJjYB5SSTkWUvj1s9fFbMjdmQHDEPfCDKAYvcfcEJxJFwYQVisV9",
  "key25": "3RuSacG8QyeJUYPXEVs1jHa9PbC2wxHXp35Wi31JfxvWSEWiZd8szTc8yGKBFKkEottQQZeqBcxHHQc2W2vyhunz",
  "key26": "3EaS1xyBq8PPB9HHAfqRRwjADDEcGhdQ4PZGB1VvkrP1qS6JAKDXyXh3bTH1zWzcNsYiQsWHjspwYs4AkzWZicbi",
  "key27": "51gLCqKkrdUbQLUgBPfaLf3UuDMuKM2zUPrLtVLVzjvpx65Gxgkur4xvkeCoyTrTQDs7KJURvh8Fv8vkkoFcQqbS",
  "key28": "5EK429pqZ1RVXusJ8Tt1XdJz2oPTfHjAPoNLhYZFrZ2wFFxiZdurwoZBhuZJXzUppYAfAtrPkRAdDa91N35vTaK5",
  "key29": "5U6SRwwroDiLaYGHiiNtARKLan8Ci4CJQtVGAChnwLwTEnkH7EmdeYWrL7aZ71VefPFvN5MukaZ3E3jqU53jnx3S",
  "key30": "2Wz9ULGkkW8YHor6fJgkDvHJRFYSy9LFUvcGRyLN377b4vNfmJjPGFgfPRsyC71wDf46sjcFsXLZZbDJUmtJNnfb",
  "key31": "33oQjn5uSNZmy4wrAQdi3hds4DcEj7Kk45zhTjWeA7Hu2oxXpyt23kL1PZh5p1HVqNWKNQ1pwUryJPM25EA96jAa",
  "key32": "9NeTkT7nXf2QKGoxJx2YDi4npWX2p6ctx1WQcsFLmCMdQaWD2dWCpMjv2kUYg5jyJ69899cjRJUVFwG2DhFcSE3",
  "key33": "5xmRDdT4VBg52ge11pX6LbX5NboSbX4dYQ5pX3Mb13J4CpBdzimsuLAR9qZbbvS6baMQK6WMATzbFRo1a19KGYAv",
  "key34": "4bEwo1i1uKeLyiNCpaW8PgjDws54xd2Y5ZN5hJq9jTjFz4ZgkMWfDigEoQGE7ByaTuPrXc5c8Lj1Rgj15znGSgMB",
  "key35": "5wVuWCC3Y8Wd5c94kc1DCmdnh5SRhGcfAYKksthn71LsJUay9ojDjYMv8kYaWGwPMwUBzMMoURQaWutfSSiKRGzR",
  "key36": "5GKm5kJYVFkdApQtMuMxPFE9asTwSNSbLRQ8kxkQu6LQvcwwhAe2b9vxvdoEbHvnJ3K4yp5ZBpDVBsC461zDkZQ6",
  "key37": "3dN5tV9NZPnExTP3mXz97dfRUrPp7KJTGXkhmRJFuP4Ltj1cwkCq5tMEND5vWDsAMQemzrsCPzWdHEiBK2MbUkFr",
  "key38": "22PTdYZzFWkEAgHUvwbhT7tBP9YTFfbC4WzszgcsZ6ruEsUTWVt5iHqubaWfGjhYeJqpKLt8CnUavV1wyAPkUHz5",
  "key39": "3oBrsQxhiBsHBoVZgcjCYVg8gWcpy2gdf7R1F5kQgv9zLFBEQVRwZT7Hqv2no4iEYCuLkizw4B1LY8CFUGysRpxG",
  "key40": "3T1g4YrvGD7jLHSvpioz4r2Yv7Yb9pk71vm1s6qYRAEb6nx5EeoiBdX4ASuMNZrreY2bzXkSbZuLD9b5Hq6ubrW",
  "key41": "5uQ7Xk8rFEUNWPrkBPBfybooNZNU1vHVeVsNCYofcGQNVXEXbffxAqkLy5o2KTJiKYm2FP3dNj4eoyMX5NtsbcRp",
  "key42": "56Jacc6Vgwf9NTYEV7txr7MGED7hjSMJ6vAR4nBn1R1ti3pd2rDgp2g9Hb5XhipccERGvGMWw74ySNGf1oWg5KSs",
  "key43": "6NMLTrjkJp5jPwGvtQqViAbWE1aYUZ4hg9K7QyTh58ETWKAudR6jzF8tTHg9XvQ2onjTennksvxqvr7zvAx6q1c",
  "key44": "3RXS3F5mf2qwDVjQ5367F8jrL7hbPaJL2hYfKmH2c1KED3aw7gA6RNCcEZHUdrmVYBELs2cesqFiVvSU91PfgkpA",
  "key45": "5tWzH53UJ43258gtrLzQQfEZUCM5XeRqjcmSGQDR2y7NXZ71JeqrhKDEowmrcEiyLRyXJSBsvhZPfkBJdYL1gSft",
  "key46": "CnEr8xFHCveoFksKdhjz4pEbfg16HV2NqNizw1U2imXYCFpWCHD9pQ2hLpUbLKUpTzEmX92bDmjYW8MKpXag2RR"
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
