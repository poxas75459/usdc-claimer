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
    "QcxS63DwRn59nimfzHiwK4yJqqvQp2iemZKKndZtfKTBSUvSTmZdHfkcrRyQeK7E5AsL4F6LXjvm5NZbDRZRHeb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S3qGWRV4rMdqZqovzNsXMeQ6zLmqvx3Q5Pb8U8SnHAukiBiauZGrXeHxUhBvs5jYdL7Tz5HnkH1C9q2UHBgqoSc",
  "key1": "3JcDHxPuuXqxP53FYYaWzHWu3CcdtEcMqWWd1vRoFDR1JDjuS1AuaUL9xKNah9ueTuAu5W7CxP63Avt2jxtJHA1",
  "key2": "2ReLw15YsircusBzDDBAd1NDEJQzi5pkSRXKq2LrmgAShaVpusdhMJffQmpcVJeD6C4oLMgySW1C3v1LNdFqLA1H",
  "key3": "3hxGZfuRJyWG4o8Uqxav5WgvuiHdXfQPT1jc2kHe3BFLnfP7pBxVtM6gKGpfBdpvS2uHTzRvpfjdS565EKnRqi5d",
  "key4": "5XVZjvr7aLQpSHWhzC4Y9QoJPohPoAJAWsWfuZtX6hAccCsULx9rjhqD7csBKZEz4TNbU4Z7uqagV6jnhWG1Jg4",
  "key5": "44E1xDZW1DWr9286c4ukm5Vp2Fc9wfAmmPkrkVUDP5RHyeKYD1tiZ37mijrXoFtTMixoMDBdet62jUhoUfZxYvwv",
  "key6": "QToE1ZyuARncbFjSJ3MNZLZvJW8EeknLbnSAENTTLRJq8E9fpbVvGU12ohwG1ddjdv1nr2AvuW72TBwndHaRbcU",
  "key7": "4nXfdcGpnB7mJ4yjT2njJcaEEr7BSEEbUATRA8YAQQTP1DXYXrpxpCZfV2jLNWme1QmMx8yy3fnriMqS6o2UXtJJ",
  "key8": "4j7pmvN89gm51gYbCZZh4sbj7WzDuRcjank1uemCFDK3LdrMquppL4T2yD5yhoMUcPejcZnMeS3jWpouU6mFChxF",
  "key9": "4U9pcT77JECw1RUDKjz2Z8UYz4onJbEQw9CS4TPY29gUMaQxhbsDkQ6J5AzMWcKMyE4FLAqm21WCNnnjXcKyiFeB",
  "key10": "ir2gwsc1oV2XK6pbexrFPdUeE7cvtMtqkVzuVNeqWnfD9LXCyDMQjAr6BTxYN2jW1VLW9odwutHtzo96U6jdfve",
  "key11": "3M7M6Zg3ib1JdxGT6pugF1iguwWSri7Rggzubiw3cNg9QMFyUJf4ywJ7tqfFSYAakUberPewmoWgW1T3ZhLjUuy8",
  "key12": "4YHiyAEZ3iwGext1xBWs1NiXoQeRRkddCufqErNppAZqSaeg6DLtfZiHQkmHu93U3TiCzpMXe8vdye6NicirQ4X8",
  "key13": "4ogUPHArxJe99fY7kfCs5Dgmxz6Fqz91aQd2VrZtf1jSYTckJ9wwanW33izA9FHkZCt3a8LatdpJoGSTYMBpDPw7",
  "key14": "ByAUT77DPfWGBQJ2r9T73AXgJiV6ArFDX1fJ7TMrvH9rD8tRrK8ba2NuazJULvQDKu5Gazf1gyyYu5Wy7dS9hhB",
  "key15": "4vhuABRMvqvwgc4DMvg6RHsyzs9tnHKdQNVo3NYneLqrFDmpwveJqMxmnSqUdW76xmw7BoEs1JhuorNj8sy4AP3p",
  "key16": "3ggiL8PWrBKu6MbSXRx2j1HXV37593pGFoTC95hMATR7F4VQoNcMhBj9wG2iwLenabsYq38dzb1sohFePnFdQNXU",
  "key17": "65GRe1wufrDpMksKeexbnjSyRXhxdknxamvMD8TG4WNK4QNiEfcvuQkq16t7h4zyShmDF1uEiEVonxGsKRpMGnH5",
  "key18": "5XWgkJ2tqVag3opCrieSZSwP7z7Vdo9rmqiCRCRhEHmAtbXGtbh2xGA8szZv4HjYx1ZgFCHoQFDw35RaqmqEnu6y",
  "key19": "5hm9xu1KoRjZRn2kibuSKbxBJJ3RKGWwRoG8UVjS7AHv43Dvs4mgoGGBign3YmUHbVJEAs8yvr2DiBMVhhMiaGeN",
  "key20": "2TYYVGBaHBvGvzTAohFmBDLFgdQdn3VHhGGtFgB1QvzWwXwDzwviL6suQ1iSh295ioVwrjhbz7VibSnCwNzhDphK",
  "key21": "572QrpEkezAPwq99SqEZvahXT5JuB6133zvgNnxKq8xhZbbjTDQEYA9xmort4s8hLQVDu3fXoFsFjAyXi83tXWMA",
  "key22": "3n37T2d3u892cfjbabPbPsuxuvTZmzhHSUm8oLGozXh6VmB4D6ezB3ksC3SSfq9MjYxfTd7UgzTUjo1QRA18nUtS",
  "key23": "2V2nHFobRx6CAewA7oW8NaszArdvHPjGSdfTdajCamW2jZ4D61XyYv2F9BgCxJJDKBUvPmLbjktZLYPQzwEqnszk",
  "key24": "3QqxAnCy46WcdqLa5gUyVYGRmxF5vGPBDnG7iLpUG3Mjx9Nd6K5gaYoEDbsveq9LUXEPgjJjJSNpRAZsK6wEzEtf",
  "key25": "2hLdS9gzr5UCXq6i5qbAjHkewrSZjqP6zrib8CCkFTiu4kfYynwBiKFW6m2pTf6amKa5CL75RHQ6nw4apULn6Kq1",
  "key26": "7V5ndow5qtzmGxDoAj5cwkT694vkryKKQVZQ9nhAgGYSyvsivd8zaLDKJnTYRhtfH83TuWDwXuW7jboQg9AAqiy",
  "key27": "2n2YMCxRpEwZkLtS9svbPFJGEGfoKmCUSEujqZuYFZ6SzGc7FiC2ePNV7gDkiZyaJ9FYwF2N3KEfRTytArBBr4R",
  "key28": "59TUaHUErK7RpH5knsRbDntwhc7MFBo4Dne89tf7xr22CtTpDzFfjzFqXKMcNiBbVqRytcDtWRS6RQKwXcWzDJZJ",
  "key29": "34vbhj4WxyuCvrBwxL39vLL99YBSd9oG8CKPaxfK8mBNNr5KCjWuZ3ZBJ4DrtiRvsKcrrvApDcNNLruNURFA7HtW",
  "key30": "5oryinkEwqCRS5MmCaQHquyH65Uiwi4YfGqGGov5yfT8bH3wo3qzvCHzZgAaCPd5PTmSkbgg5cy7MuMkVCeQfLQL",
  "key31": "3kmN6WZASMrQhykCe9JAQMBchWFxAo2uTykPjpehJDooPKujtr6BN4aNS4cJxbes63bKYrjPX5r7Sjbe3nKKZzNr",
  "key32": "2h3VtDCfLzX8cSt8pyzucf7TwxisCZQvn919GFyTP3piMMZ56rHcuWtcWAZV4ZyH3rqSvWqS9qY4S8EE8PmRTRLa",
  "key33": "5SBxfxhg9irNenRFKmRn9EnQB2wT8n3vxukXdAR9Ndd62SY4ov735pNmQksnp2ZX6jdCGZNDbrhkiJhjEaF8o6UL",
  "key34": "2VWDp8EH6huCXANonUZrGF2ZmMCW8GnoQHWW9VQwhxmPCMs34Ey59Rws6krD1TxaxcAR4egBGMzPmq77oZi1MFNb"
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
