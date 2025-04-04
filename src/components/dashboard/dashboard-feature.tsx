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
    "5BCNdQruTFgnxESoETovrXSVf8neEwTTj8iUvvoJzSNebocxb4tXoxF4rbzgwXzoEwV5tFqVZcpyQYVG5JfB2hqx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kz5Y3KYLBSLn2gJp6W6hGs7X5pQk6dhsbBRLYJbUkkWEXPLzbT6fG879h9kkxUYFfH28AY6t2Fs5J9KXgLvdFEM",
  "key1": "3z9EKy9xVH3WQVEf64zAiZTsL3vB3neNP4vMgwMGPyZ1sNs4iEj8ghfe4VdTGt7yc3izuuYF8Xk3Y5kXfP2LBwNo",
  "key2": "7QMaHChuo92HXK9wG14yEJAWe3dNZECVH6jfLK55iDAPLDqF6PL7AtzktEiN8VpiqwJmkoQC2tJsumyjorRjnuQ",
  "key3": "3UCxDDmCXxiAZ7kRM5PUvE7CNg4pDQUHw7aC6KvwHVBnKpwhon7jRRz9tMqPTWvEgtneSD77x4wDADddP89FAscq",
  "key4": "3WggmHkCB4N72ZfZ31H1ePxdeTtj3N3VbQWq6nk4iN21Q5tBGJ45qxcSVUqS5WmQpnCNTr97XPEHFKJMHxQHRtiK",
  "key5": "4MRczw6WSZbHoxKbVJmRvv1sVPYsikmurDqYayBouLhoKgSxLaeiMSaGdKWN8UtJ9cTGyRBqrrersyhwjH9oF8a7",
  "key6": "2PvXjivwtrYR6PAhRCvyYtXuQ5VV1ZndUNNF9wG7wW2M1KLBFUBTszd25kt2uxsxtRa2pSdj4jqhDxdhQh7XuwNw",
  "key7": "4XsGsqExY7MGFcCZFZ77oBdHxCTT1DyNyVnfPxAnAkDsmV6pWRimNi4Mx7HZrnmQ4a3aF5ocSUSdjwFtGW8rn16a",
  "key8": "2s2H6c9soBsn22N1hR38YosoBMCo4EK6heMw998jFg5hd1GRtc5tQ9yqgzh947NAk41ChjNyfWHbL4z9WgtWb7Xn",
  "key9": "2oqQi8jwDWrnzGWkNr7BGR3KZQAXo3Qs6ZZGkuQytw3F7ZqMA5BDc9h96sJdc6qvtTiVgqR5orxYJh3edEsNyzUr",
  "key10": "8MygE6Zh3Sh5M3LYWWx5DT9ExJFqaRY66gjuKYBpkefBaTVpprZuPCg6z46cyqCuYXdWVa2rwL1vgBBgxrLLi1f",
  "key11": "5tAnZ5ahXWwtMafKv3Pxs32merdF4gxY5kDfRBuC6HhH8ZrScpbM7zK4CqTfKCeVvHZD9aCZbCFCnvqMieF6ctBH",
  "key12": "27dupQUNdkaNzkRiEyerdHrVon4ppYDm1kNqJ4Dhm7wxpyMiMj13So3ChvZ84h7r7Kz5ppXzzof12T1eC5smKMSL",
  "key13": "3jJXNnJ82JtBs5bgL5ZemcB79rdeDHBzAuahXiANLVdz135eNdtABbg24M3J57MkJNDSBmnzoRJf5Y58mRzrumR7",
  "key14": "3UsCLmBZx9Uta5gExTzZZHj1fbwChcf3bqvVs9SUezrmSqjUVpAyn3ba1EUdNF1ukaAvh1XCJKXiEb63fpmxAyHC",
  "key15": "5USK7j3CwCYBb3LkbnsaPonwz8wX3wwbHqLZ4uHVy9PR7Laz5ZFbhW4YrAxrSKDqV7FiUMMZ1dSA8y4n5HxyYNCz",
  "key16": "5QoCzThXvbowjVzJbxnaKgQb74dvBppPJmVXiUB2SvRRMUXUHAuw2u5WXFAX7YzNQ2HEwFwYyJ7du4exWZ7gNMZ8",
  "key17": "5Gc2CfCP2tMNm9ALDpjhLcv1kQqgbWFWcZS8AqouzG97rYLzbVNnbWzhowokbzXEDucE3SUkNX7ssUQNkzJ2vSh3",
  "key18": "5bCQQzRH45K9mqCfAYkgnGB8A2bBBmB1vwrvMagmLUyCHJe99y7EtHcaih6pXCQnYjBnvnf4foXuptEdMJcda4nK",
  "key19": "59kn32PPksYJCdYhrfSmkabFmFFA9ym1GYFGb19Ki76U66P9nZ5J2aJ8dc3XU55CGy75jgTTKxLbda9yEq81QwFQ",
  "key20": "2mWL2RpW2FqVX3DreSxnG6BQyH85N6MkJYQoK4yj6cPHew6wW6xtM37m4dRE2fBX6a3kPXnQPg5CRNpjkWoQ6UAD",
  "key21": "4QxgopwgY24NZRmr5QR3Ds2P33KGMCkFspsuRBYLu2ExzqdRnbLadhgUqaQ33TKmZCfF4GC8JSX1cRmFYjap1CTo",
  "key22": "3kyq5K4Y9bAbQV5DNcfztTqCUzUJkKjnkh6QJDSVRqPho9JvVXcvvLoDvB6dzsXzvpy78ezsjcZYQymg8tWLmY9d",
  "key23": "5XfBJRRwRvKT77KRa2Es5CPsL5UABhSAukNN7Yt7EUWmFWTdt3jWuzW1PoPN4BcRRYAQVjG4wVkxD7QjSEkEme96",
  "key24": "ywCcKT5QfL7hTLjKJU5pXDV5pMsHtmuvujV26sjGcHDPggbRQ78vgN2gKVEyebfhzEa8LUgQwbtj7FUrp7ednPM",
  "key25": "652pRgnvLxxaHSwUB6QE6XBrU2fyprWgHhHmV1UQKXBA57YXhDn4BGUVYyD8fx2P7bZUrgJdvAx2AEs8zTjR9aFi",
  "key26": "5GshxE8RvrkK9L7hEqdWkKPV4YwoN9sgsgkHSmquv8GZKSUhCa8qvVrJM1nirmBqW62Dbnek3RudGZgWTgMERpft",
  "key27": "5H8NnVKgjRTGA9EeWCYwCkJR3VieTvBgkYfbGsapAhNDYJuTgGDmcHDYvFXnXHkc2LAdYZ1ia3hSbFjzxFGP84bH",
  "key28": "53osuoFpC3Mg8TmG9aKmdaRvUjcEAsDG5s7D7mc4GtSqf9wymTfxsiPmR9RUm3MxoTAoigNQcKyQ4UZCA1frNCKR",
  "key29": "2ntS7u7FgE4LP3ziFTDHih4jcSjQzkhuksRdhAjW1FWSH42U45pu3oR1PWEq74PQdW89HoJa4p7YJbV9p2qeZBLC",
  "key30": "4V6SW43HBVPLhCmZMFLnBwhHKGZ7A1SampKzD4BJ9csDu5fKM2fqDz6e9F6SGYrM6qo8jVpfTPjv8dEnhw1t3xMG",
  "key31": "4yhxSFKBWXQ2xgFcNtHVyDS6WZ5n3VWsLLijuL4oB8NwizZmBMrmkNXZim6uiozqJ3T3Pgt9aQByjpP3SN7tbCu",
  "key32": "3RR4jtyxPUdD14UxZ6LctAXbNicg8JvXewdVWxYZM5T3zCmY3ToRHw5DgkcssT53MACYFqkhtPsw2tHpzqEFiLy7",
  "key33": "3Ypa2KMQUq9tXGjNrsyNyZiDy7apjmYDpdwUrbCh9kVs18sDwTuvngcLU2155tNzgH1KqMwphyXnUxFKGme92eac",
  "key34": "xNcoNcdn7Lfoo5FToo4jMiGr1Jq93ShW9P44WQsQtisMARfNioaZiKA9TeYXGo3o1kQNcDVUXEMP57Tt7GKgBqW",
  "key35": "jnsVS4TMWAPewPCrjijpJh68X81SkU3QW93zoiHgmNrbRFrg1vKTHgaGMNjihYrwdcfjFkvnqiSPv7S45Wx7TkV",
  "key36": "2ADTgBhDBkSXD98EHxbwVfv9m4QjdkEwdqJWsMKUM1ZQxtqQr729x1L7Q1B9DtR4tpefaTu94azsvay5u1nr17no"
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
