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
    "Urx235yUXBohSfwxQck4aACy2LRNCyvM3UxY9gNdeF3A3P88NPYtWVUhA23vqebCLDLA8UJVxecvabnDYWYzh2g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WWCciyHHNywVJDBkVoyTYwZcg6DKYdyXTtRCxMo6bExVz9NHEgTxpgGxb3jtQCNgsoz95f1HmW6auB7zJSKjbBM",
  "key1": "3Eeaep7R7qShwv4LdbdTKHFva2t2MD4HsHukJcxLKdbnzrPAXmosqAQ7JH9Htxn6TBJSrJwmCscWDGCAYK7znWw5",
  "key2": "FeoGhNeAxmNJSsSffQ5czX2UxnHUKq8ixGeaqQpTdjSximdHjV1HmwHcw8m1XnzTiM79CifNFSiWTaz1RVCGPct",
  "key3": "zdMCXNs95u711uaZNVR3g5VmMUw4tthcLZHTyLQhgP8qD9SP5K2borQuNcdrJSCLEoa1FPNHbEobw44n5SmgTnK",
  "key4": "3Y1gHkThi8i1FhrWAW9ZSKhqovqiRco4s4fBao5FKW7LQSjmHhWrMWxZV2Yc5yk1EbyQph4UBtK4c1ZTz6ihcrEM",
  "key5": "tKaFxfo95ZrY8qyUyVAdceMwmoS6dhvc9ADMBGAjvLmNadMsBP28FBy13e6acR6DfLdyWqwtYMEGS8zdAbSvQ9e",
  "key6": "FwgVAikshnLmEyQEup5H4BUtA2qekBBtbQY6RckP76mddvZzYRfgJfXaR39bGqzh1oWdmBZNdH2ajohQByADTXR",
  "key7": "zPFQNYc3RrMHzRU9YVFs2LG3hbxpAAwZL3hcQ9mH6ZcaPMDjUVkc9LxEjA2pxDKynH8GTsgFAszsnwBTXX9ngaF",
  "key8": "2tMqkYycgeHGYvVNW2NuiqhS1jHhb7Gkmj7r3AYQ6DNuKZEruYxXLRLTmEU5DotPD1WfLshhrsJhYJgjPifVnaoP",
  "key9": "3rpw4b2uTaHzXRcLph2VNCLwcYAxkJdU6cDokQajffSwH6iKYP3gBcZXVKcwWZcuUJPtz6jkzFKBXKFGXWF2nkFg",
  "key10": "3Dmi6JwZsF5PAX8ygXNnk7Xj5jTCuaBcvnv4cqZxg6PSgfydCeXU1MXHJcVTAYyKPoYjGmf8e5rryiYDZEdPJAUR",
  "key11": "4hf5mtyi6daZ4oevaJinhzkLC4Ds5515az7XJBUVrNNLbU4xpFhtYVCavx3RfTXhtGBHWG3hH8c1q71UhWM4zQYT",
  "key12": "62AV3nYdhvC6zcEoxQ5ZdR6MqFNerUhYvGQvq4wkShvhC9tMTsTbqpBxZoyhNKinpwAJEUKh5MKNu6bybwfvcLwV",
  "key13": "4wYixAmySzSGwpVtF978q5vM7FqLAk4oFqPy3SuNSYhTZUFogvT6c76PJzAU3FETQd9R3rSZ945MVnRcAff7F6oo",
  "key14": "4RkujwKLiQzDb4Guw3YJoxv17bUbGG2BTB26dsyrjpikmKTW72cWXQa9YE5arwxG3QiqWiQ2aEK1sQzQFgTs9t2R",
  "key15": "4Q9HUQLBUeXw5N3Xoh6cF8yQFmPgae13XmZ6iqY5KFhjMVPQ11Z7tVsEoKeoKAQCaZGKSb9tRJD6Xjna2CszjiVU",
  "key16": "5ooDUfydP471G4DaHNYPZKET3vowbPdcm2VfRQDArAkEfwms8fPZJ65WvLpGRjuiZiaSQzTUQ9JnscQH2VycHZDS",
  "key17": "2rzFJfbR9vGsBoaUz3cxTgueYRXnqeuTeM5HuHQuKtr1xPkqGo4bw4pe94Gi4n7NjMcXa3NLdqKLDG5EhQNa1wUa",
  "key18": "5K6zJRHFJnEeAsfr8EYrc1eVXnwhy1DTLYJffbHSaBHSoMfudaLPUPRGh7tUhJEuzqRjRSQTvM28WJQ8uBv2b65B",
  "key19": "2AQxaiQteGs3g8DCaNJ6jgj6FakfwUmcyrhH3MYR4uG5ssNK6fCN5HMMmQVCzVGYD1xYYyMenUKc1Es9TiiC7JKz",
  "key20": "4wwvvhgkS3haTh7cNz3cvH94ACeiVokiRrHacnn76tZvvcE6rhA2Et6a3trh92W2ZPptWF8sxzG97ihiEaQ4RMRS",
  "key21": "4PjxqrY5wL23zKY3NiCj6Zkd2CJsQRMw6NXggFQaFFDs4HWrTBQ36ToGtsFuZZVNBJC1d7dBYUdADkdKiUkARKTP",
  "key22": "3CJybxNUjJhEFzL2jFJ4gMoqwaDfwkLhn5xMnJwG8ZAj5Wi1NwoxHFznMh67iBiXSB5VyxYUMVsYQvmetSJdDvHa",
  "key23": "wBFYQsKoYTs4YvSs14rE7HELsZ5v6h6Jpz434p6hqqDQd4UjtLZKZ75zPREeE3XgELAys2xjdabfDzTHHEH8yp6",
  "key24": "iC3WuoFnJbdccQQosDjmuiRTstmBw14hsbFAkr7cdKPtZEm5KUdPvE6yqkD7BkuZPuKzj8BeGBZ5MMvGDuaPXb2",
  "key25": "3hUvCTF5FYi8gQ8w6HBEx9EUQmkSVJeSjenPhAkNk6swBRXRPcEN85hbZUjgufLzUcHxqqcYKJBL1KTy4LxQ1AxL",
  "key26": "5bYbGT9S6rgVbodKnh8BPQqZHsXgkyNv3oW9gfASCGit31vBJZ8jE1dhtqcrJZArdJFKVq4k4ZmeoWG2ggngj3d7",
  "key27": "QTcqEsMLihicVZyvWAwD5x1BDW1VBasv69613inZ6HaTLRvQJGejjxXvyGq952TB4GwdXnm2aYb9p186oh1fPNz",
  "key28": "23QJrSttaaEM6n444moHbJpJwDtJnNU4DzqocdwFD8gMqqWF6bKhd5uBbJwT4DBAeNs44DKGxTU4aEJqQYAfZhoo",
  "key29": "3ZCr9HDL6fD2b6cxsGdDcQhAWNnz4miiU6xxRWfeoDcrTkVoEbiynQrBWbDXBeYyhVTMuubJgKFtEaHLfBnn85kP",
  "key30": "3SNQB8Gq5kyA4FrM92HijuDqdpfsLm9bHN9VuMFKNWYp4qRYQRi4JTgeLx5paLiLgcSfxMYs2KFvUF2nS5Kg5wcf",
  "key31": "YGJDAmAtHsDKzQ9LtjfUZ1xPfP9pLU53VPthG78kV87YAb85L6FwByE5kDorjBvvjB63smPVABTuHibPWkd9npb",
  "key32": "2NoEHfASvY42zyDLgrWWZ6w4huvHSRN86NqtDW3Qbxui3xYQGgfLjgq2axF93QPyvw2ukQbmtbBm9VdfUMvxzhVo",
  "key33": "3jPqGJcMc6XBfDyCUaYEFXow2jGEE8x1mJ3DC6kLF5897DdJEiEX3zF37nYShDAVcwiUrnDtxEWFtsB99BLR14G2",
  "key34": "4LHABSNG3Yi9bM3JMFV1Lt35wFGrxm3pFk97UrZ65LBbmjhqeRwFNcpDxpaVYFKHtosxLFHL6q8YzTWfGZJqQkgP",
  "key35": "4qHo7R9bjn7kwDZUkp3397uJ83mTe1CvmBLHXYw2m2BWdcgNzujpcnkwiA5N9Mapqmk4XsEUKr3ecUpJR3HKciSB",
  "key36": "PvgddQZVd6Je55yQPi8YSNriMNn5NJkUpy6WPPZm2sbXFR2YAbqa1VtAoNxYVBki96VdG1M6pXfqwan2wjGT9Gb",
  "key37": "2FrvNc9ATpDtZowxgCw5EyZ971qm17xz7zA7shbNrLG8PsL5jvRjsQsb4cvMXekN3UVMch7BAGLiWbJQBQY9EfbL",
  "key38": "3HVJghtPNFvLWoFgqZgW8APLPCGvjPiHy3nw8p4EEzBPv7CWLScLUfQLWgWzxVrSLu5na5uGv6vFiDR1ZLRdvkA4",
  "key39": "4PTJL8G7GmM4eSw2CgoT6LGcyHAzDGcc4vgUnB9tTCPKkDxk3D7CJPqkxLRpr34i3WMwSxnyJWg9DF7Dc4qyHQZE",
  "key40": "4EJQVeQwx214MrtT58WLND5najCj9oDcTyUzWkD5wT6z3pBYiJMafNEYBcsmbsBLGrpHep9jd1VTzwL1avEsTGMM",
  "key41": "5ZBgPV3R4K15xrqDJzqiTUwktuujydkshRjofYJEwVi7fNJJtYUcqVxTNUV5jS1XdbC8tuNDTLScD6qpgxneCpQR",
  "key42": "3hSGdn4aNBaZBLuBvrQXC95tTyLiRC8tkG148c2C43AzoDf9s6eZFjWnd1xqcZudrzmCLBkTHoVfkL3SnSjHcm4H",
  "key43": "4vXncYfPVzst6SCegHKq78zHWwjv7SVKgme671gfMkVrkbdt9rRXUUuaVc3Eijkz6eatZp9DTxywjsqMpDpTC1K6",
  "key44": "26HVqJXvhqF1DGgCeEyk42JzzijecYTQZpWSQw8zkv4QnvUXrnx4Z3HB3Phztv5HL9krUNDJL2nWh9D4PTGurYYq",
  "key45": "6D5NwMyGKMZk2e8f3CWz7ZAqWAcbaMH5AMZPcJ1FPGkGqrUf14YEzjAu6Udc2HQQ6hQaJNu54KPYGZ8znijFMLd",
  "key46": "4UgGiH1h3ZkwETH6jgFeqDGz4axNUr3ufyPyrf3EJg3ZNtXTEMwVzQgE4bkQ4RVWtjBfhVpGVQSk8QKUKJ45Zitb",
  "key47": "2Yma6b7FM4JoiXw465LQp4uwzPmzdy2xTsVuY9jEnEjxZ7Y6ghBVEivw6jh5Sjr5Fvfsda8oxc1d5bVr5kudbZhD"
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
