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
    "64XaZusqzpw17BrSVSgb4uez3VeHSp7ZrwpWbu1EXNvVxjuw5dWB4fWR2CPS7LwTUJrk9fyVRcxSG75fo8nVf3Xj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BnYsAwGsYWet2gAh66AD1Nn8qjttFeSBDBfyt4WrRBbeAzYeeLxE3ehQ4wtEcsoS9DhtjM82suqJVWB2LoHRCLD",
  "key1": "5tSULoKbhnQ1r9hPh8VN5FUPbYpeYMqJ7DNKJpvyGkKB1hCnq4htdgpeRvBPFZ1AoRx4gduBT2mUX8vyPvo62TXs",
  "key2": "3f4JbQNCje8jhKZpdVxkTuWYoQEuSfsX4rnnigRv8pr65ebviqySKPqjPTkz9shytPW6YPgi368c29YWqrDe1PHN",
  "key3": "V5Q7sjFYChot757NLjrFpXxQZc7H2AMZEaKhfgw8WJbtGCqnJAALGf4FT24HYDACJj1FbfwuMJJcMTbz8TU11eE",
  "key4": "4my7fQ9jjs8RRbd6NQNA4898PmhLs5ScZpUNgdXhtE3XZa83hk9WBMQK9n5pXqK1AL7tMENTwNgJwazAtXYpXLFw",
  "key5": "6waQUDbUDneV1Mxr9qyKM7HvAiqhJfLWRi3JYXcnJwDkBgjro18inrG9UhBbKXrubDpKpdYjYfZKJnZ8o94c2nP",
  "key6": "3QK45uoQzr31uujrt7WDoMmhpX68PvN4eo4f7pRQKy1J24pkmVGtfDgsUZh8wBweBAQvMmioBZuvZ3H8e7pP87ti",
  "key7": "5nFdndeZXh1sKvbvKBkwNf7MdyVDLfu1T9sWytkMArUVMb6Zk6NV27aZvUiuJXbnkhSoyLBEsgaTbGiq3ZATchRw",
  "key8": "2yGR2M3k1Q2WUMMK1WwFB4Hqp7YH4J7aiAsNz4Xiq256mT8ESjGdNZXTJezBxHDJmMcSNqqEPYcFjHekuYnS7ngn",
  "key9": "5JNShLMeU3Skc8NAZzgJbhgBpwDsJeycb9LCk3QryDeVF24naUo77uHUyR7VcLtkpe8ZEhVYYQVBEsr9y8DDF6cY",
  "key10": "21ZMqpELC5YLT33BiZo9s3yWWXDtrfdBjiN7TCCCa59X5LUQYa7472GKQUmFZPRL1DakYtTCy18NYegwLZUwJ7wU",
  "key11": "5tg5vsDscoYoQ7AxgXjWG3agwrVynwqiD5SWHi496hP4auqJskz6KkZCsj15CFCAwykhNHe4X7KXCSrSdP9gs6no",
  "key12": "5Tt8QRfk9hfF4KFqEcTuUp37J94ebeDRoQZZtvU4ZwF5rR9GvWejVggjxPvginrhgoh25qdKzx346iLvvWEff1ce",
  "key13": "2L7gmidxD9JXUubAxgtG1HAdRS3SmcTBfUqyaHTh7FZ35vPoYZ1VyhcRKE1MaiZX2UfMzmao46uKMVRUNfGoTejA",
  "key14": "34FUR8n1LJHVfhQvZYZWvAKs9cLX9yQ8QqsWdMc5r7VueEcf7k6UoyPoxcJAcJiF5nbKYrUgX9YKAMDb2CFfMBpE",
  "key15": "3yUVXLsye8v7aEpZyDdKNXxBPy8pxqFGV8GA9m2yobw6PeCX17uZs5e3Sk6dxG4rVGNGVsDrPYpvPDn69QoZEmDF",
  "key16": "5BeEF6YYPwd9WLicX7EZ3849D6LWFpgGib7Erg9Guuc7m3NL3d5EXdcNfKAPhZPZbvaneWaqpLAjg2ZY3WYAi1mC",
  "key17": "4JHan9JpLbH8Si3p5HRyRU8MQhth21Z7a1ijTqndLQEGLRMrUqie4JWhkVH98asUFZ8ncRSnLwizpEatP22e1VqR",
  "key18": "5rjREafEuT1rNoricKy7KBvGt9XkB6cWu9BWRw2mvVr48VyKxAYKATTsRVTixo8qC8uuaDhqRvbdyjMbiphTbQAW",
  "key19": "3XCP8XtsS5efBYVRg5TugQns5D6nLkSPgbY5GgcBzekocEZ5nmCmMyoxBfMfRy45CXvYQJeSwJS7bX5ymnSv1ndC",
  "key20": "4o2vLRZ41Bs99t66YxE5NXC1uGNXnu4uMPBpdZJ4YWSpzjtRF5Kg3jVYL3oDu3zAi8p72Lz3bm3yWVd2cZ9KwDZA",
  "key21": "4fgJx1fuv64EQCkF6q6XfTXgmSFWwV67c3YNJEPXdHs5WPtrNDKyurYXj6aMftWFFuJYa3x5veG8VwzLGZpMW6Mx",
  "key22": "AnWTKyXj9odLxs4mF8ejb1ejUUpKhdMq3HU522imBxfsw5iStyPn4DbykxkcPUCPF4U1GMiojY4u1rGgZAknsaj",
  "key23": "5vYroEBZNZUZm1SsiH4ynNjSNcr4PrwfgMsj92bjwUttz963ApSrR1nhhrsECmjHmX2yoUaqQx2JWYzMG4ojyU1n",
  "key24": "3HkJQVyWgJmgEAmgTGNXXL8WR7uzRknir1o4qHKcsRmJjL4D6W9ezsgjotW5GSUNznBxkdBK1AspSshJ3tL8wvU",
  "key25": "2omJFanA76Ma998snPoACF6yvqJQJkAqhfApu3N9dSVpsevguLeLYiRxYcmWGFP1veYhHf4Asp9E8qEQf2pRUJV8",
  "key26": "5JYKFeHBjk7a5jrPqc5WvgHv9c1f9yhsddJs2ZMxRgnBd2MwGCspPe3ideCQ1Sfjm2a1faosrJsuSCJw6YU45NwP",
  "key27": "2z7YcH996WkKysUiANCBLhPhn1FnxAxBJuzc21DLMD65hk9Xsxq4QETkpfY1s7DdjRwE4WKa4u5Pp9ss2Y9isa5f",
  "key28": "5sF2MwvRCX1kZdQezZhJa84d7iFFtoK8RGZomCuusnF9yEh77H8MjzWPi78LCggys5Ys51mHkJE5bbTrbL7ToQgh",
  "key29": "feszzGFJjZyUzgbaSFXQ3rTXNGCkVoxHN61Cj8FK5b5Tn1uGnZyXhonFzEFK93JakmURJZFiLgFdeCHxAVsfzdp",
  "key30": "48zRUxoAShaFCymtGAW4K2DknreG5cdoT83e6oeUkWRDyfBTyjW8ocsiQiJW8zM69ZiieVS2Apuae1W7V2t3X528",
  "key31": "5Rk5dM5LJC61eA3cHc3YUaytZcGui5GVvk5QfM8kVckozmL8azrtExRHzK6E5njV8goBYRf63z2AAoz4whJ8xB2H",
  "key32": "56sJveCk6KzqJwNFBwQD7XDU1XNnm6HkX2Q74LDng6JHZE5kTUbGrgqUpSsgM68wdRXwEZgNT9dEbtdDkk15McSd",
  "key33": "5bKSLMArjstipxrf5y6Y8tZhw2zNcEKfp9hQBoYyB8BDDLkNBpYzKzj2MPXqjoE3jUVMggaiKfaUxdciBhfRvWkv",
  "key34": "BuC6pS7cif16iJUBurcJAy12q1EwZr5gLUQ7hYaVJ2nUVvMK2Ma7j8RwFcwtuM59X7uDcS2Ew2a2MktijfDx2mC",
  "key35": "2p3rc3neoEi9DVjVPg1gnzvLtpgScJmXPboyh5Cs2rQEbdsRwzjDfFzEgYHvfoi625H7qcp112SRiT56Lkgd57zU",
  "key36": "5bfAQH2BUcc3Cy1sQ8ChUvwXZfQZ5XmXPH2nvNohQknaBo8eYW54hv2d2TMEEZR3hwH8WedWKLdDwFQLyXcQdDPP",
  "key37": "493KtR3m1GnNXqbGHu5QjUzrpV4MF5gTjW1cZ1kS4PVEUzv5vgcD1cV2cn4fHuz9NsWLChL3fRmW17pSK7irb8zg",
  "key38": "5QQfsNJXcLUCRSPHv8u5gG6BZMHH27MDpPS4aEv9DKnWPsA5LG3hksjXQQ9MMHhH3EW1pvqJ7CbR1mezon7Ns4mm",
  "key39": "dTBBFF5PXHL9Cw1fgTLjevLdY5CvDHNG4fozXq5rQFYqp6RZjeuv2wzSq9s7tzbxSc2BsHNfm7sSjrDA7dztxXD",
  "key40": "2SpjJo4ttUdnRoJSuN2ipz971qBVhn8pQ5VzXT7ejxMsp33WmK9YMG9YjxUMSgNTa9c7mbBPWiKPmF6vVF6US39e"
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
