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
    "3u3cH21miZttY2meyCR9JxVWr6QLzbPVDJXpxSjZ7ivtZDSfmXB2JpcR6WnkfzWbfAgLCrEEuSbYnxc5rqPGbwuu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eVXXEXkw1rLjnDBmktQwU4vC9ijCprURL5nbaceKHkfkJmedFRv5Gg2yvuWTUpbdAYiBFwn7HN8PKZY77HMLATH",
  "key1": "3M1qiSBpAKsrgTa3A2r24Jm5YUHQgVpAmk8m7wVx7yzn9G5rfu9C7aX9BwWKbYTy9xc9CiHpE5cUu5bGXESaLWtq",
  "key2": "5GpwtNZxCdWFHE6WkssJLu2TqAtgUGPqu2Zr62CKNdVWELQznhERdBhojd86jupAg7hh65y4R2gHWmqFZaZcvu2J",
  "key3": "4VWe3o4Cud4YqxSGG5Qo5zv6SSdpMfFGV8jTjEj68vv2jbzhvy9vobMoCMFvmsiQ2ebeRjzBcBgwz5pfDboQy9rh",
  "key4": "5hLEpxz9MYf8XeTESPeHtiG9sEpBtG8oMTgSBHLmWN4TM2316pPxXVGETqZgexJhMMBVSe4gQSNwbCnZ6FDvb5Yv",
  "key5": "2q4HgRkiq8Gq7ePHshx44mnaf1DzUZc31ZzFz4JbSS4gkHVedCF4HQrdTVpq1u8WhiGCvHzfRjRiqs765BrEnwrB",
  "key6": "2ykJCtFJQgtEr9uBNUx5nX18aCuq4XMN8TDtHRiUxfhwwHy8i3aFFKMkdXPQ3neE1TBYTdGSjZN66jXMNdVdZ8mL",
  "key7": "3PgdYDaKKrp1z7dcJvqgVtBdpQDMQquCFesmHhzduDdSAyEzFkG2WCrv5RL3ikcwCU951EY1aP5FSkbaWbFYpN8h",
  "key8": "sZwvEDDc96xS2moNrV1w8NaV3onQtXbaLXym2g4gWGVtxqm38brkh73HXJ7AyDCBTEdn3YAQDsvebVJGote4AVU",
  "key9": "3nEwLmgjWmHTZAMWhGyLXWpabCNWvSoFENpvF2PqyJ9MSDe91RxcDRbMWo4FebrawBYc3Gma6pgLsiuH4iN9kPz1",
  "key10": "4NJKsk3nHuyrpoZLx9QSrNJDYrhRS3VAcruAz8377pZFFsVTmqzgWWsHnFsef7z7jGh1WiHe1f495HBGZQaCnwAN",
  "key11": "58ysJp4uCge6bK33U8tErDmWB4rNH4A2nPxu96HdSUvEwV7bf8ZYfeVNVuBp5cW7ELRWyeBn2x99fhePFGJhJzY9",
  "key12": "5SK5i54RuLhjc1UQ9KyVx3xpipP8F5HJkryWYHrEeKNxwKbMjq7ovMKNd2fX8JWLrW9FW8CukGPTYogKx7639FSj",
  "key13": "2cG5MtBbBYNHPxjjeXCL73DNrW1egwbUZMMvKH6XpkEDXe4x9VzRbpWNriCGmHjZo2b7hiAY2ZrSUYcUiKb3Jws3",
  "key14": "2dE47twcZHrjxXuVeRWHKyvFS8BhNiutvYggPSv2vdbkGbfQBPNfCuZqeLcTbQWqdfDStEhdmCjkP1Amrrc4kN5p",
  "key15": "2RyaXJA1o1CT6CiWG6acv1pnU6nhrcUW9GJQiqU6BzxxUR8WBmVZZEn5577Fs6dExoCLXeKr9RKwiA6aMFsh9NGU",
  "key16": "4ikVa3MQNFhziaQkQfgyEeLPMgQt8MUaXD1keGSUeDEYGu7nqy3xP1LSYeUFRRiszTm8hQpRrFHcfiAhMwhqPg2J",
  "key17": "5b45VsCnWn4gzeSvkPRr1ptEyMM5ARddBoh9owQpMrjmsZx5Vskr7vHaRLzbp2nhQ5LjThFcnjjSNJhL1YecHiFo",
  "key18": "2pqj1g8ztVRAHb6KSGe2iZkAqKB8a1fsx6kNFkkkfLZNAzXp7XaxBWscAr1oygZzwhpZ9tHhgXQNALu7uxzEkHf9",
  "key19": "5AdDvMw6TB1qSnZKcBxiwx8i4T3tTURVQQ5ttLc2jRJDyPu9EZTWHZWVbeJ3cfPBF1Ec6Y5GjhCQf6k3sewdybVs",
  "key20": "4fj2y6MApAmFa6xfn97V4ULWWq1naHRa6QPcoC5ZLzyDqySp6XkYZH69r2YD8SfD7F3TWQFiFxjbMRp5MPpgRU35",
  "key21": "9Q3uBmn1pBKLdJGApJaZuZSfDALJDqWbQkWQ7umKQJ9o6rD8sWUti6WkjYVNuHdGoEUeNKjLnHGGbZFoxqemz5V",
  "key22": "2eTck33gkS2sC5b1rYqh55wjXuewkctfK5Ad6VhkJBuii3EKptwDw8zME4K9WeW36XNQ1w4NVFK5M3aozwKF9BYP",
  "key23": "4NQupbTmz2SU3Pqf2J95nSbfukKPrBCo7pGyGBnVPKevUd6N9eonZQwLrv2qeVnRveY2Re2xiVjyyYvtzupPjJYE",
  "key24": "DftPLhLvyrj4rhpksgcXEeHWQFSvphF7SGztYepshbpPtAhtaq7uBmVYvCZ8XDEmCKuymwbeMmEYESdUsuJjt9w",
  "key25": "43D9GeXdRdMCpZHmuvuC3LhWry672QzkxduQSiyBpLYkhpT42XNzX4AhmYs25PjfqZUuDcn35NEtLbdXsczjhhZN",
  "key26": "5MVUTyXxfAvcFK3FpecKogj86UCmYd3bhcm7JzDCj8cMHm5ExKkgLYte8UjrJJWxRPLdpCKH1gSBY8vHjLsBE3TR",
  "key27": "4anKtdfSkm4FieGfh3P2jdtwqjkBN9UePhx1tCy2F4rMeUfnKzKdTG5QTqEZc5bsCY68Wb1DDiWmruHPJS3fXb6P",
  "key28": "4ErpPKJRPdUEoEq5jjqbGnyTMmVsXkny2vpdHgk5LX7mYR8T6UPGsPkLU9bkscJWPUNxyes6ng6Qvrqd7EBvPVZB",
  "key29": "5STggizgxLgnSHWjtdFd5BvNyJvrKNXzQdp9xjJtGzXiBadGdz2TRpV5CuJJtv3srmeUq4P4o2jo1icPi3ZyfoAc",
  "key30": "4FD33tf6raptGKYubQNxjP5QR1soogJxyDk9TcWNKKqVk8RNPNmLit4wbwTPBkYMucewnf4yPVE4PsprcMEtmNEf",
  "key31": "4JibY6v3JGbPfkvqRUQQSiuJhLZy6DZTMr537gLqXZabq4G1mcnfBvTRrZWHG8dPL2UadkuTBRkxe74ExgfAyXGe"
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
