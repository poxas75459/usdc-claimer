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
    "51UHCSnFTaR1ixtpMYWZxNwydfRGf6hjorWtBZL9UFQV5eau96gjfnEQrrSabg2QhxnXDAXCY5z4Ay8V5xe3aLMn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dGWdchZsaNrw4dMeMxGqS8H6K7B4QuWGZxJLWQST42d2UA85CgtpEzcS1YwMVaQykB6V53U55LoqfsBDVYicFn5",
  "key1": "4nH6PtuJpwH6fTM7zNqiXzDmrmvzTqrudFZYgneMUs3utdajSWb9Ajim3fLhzgaMX5fcjCx8nWq8qWDdCZbWH4T1",
  "key2": "mscRwnmDc6dStZSThd6owgMMDvs3gzrMcG1XN7BzkvkkRsf1JmyeKTLiZEqActMNyyExNmxwF8xQKu6zR5nggHH",
  "key3": "4LejJUEeDKYxM1s5T4WUSdcH9rbfQrHk3ptmjeZvKXgeTYKrihNSunD5UJBTidByvSrTnAaUeNR7ec67RuUm42jX",
  "key4": "51oGK5aP4NJ4XkjHzXW5siZGVzzpvvapZQUVhxs9MC48RTZRcoWVD5EMah6MxmQSHyZcZcVrBSdKSuk1Fe2uvmqM",
  "key5": "54UpjingdtEMjkESfp6TEz5F8pyHp8NEKwcEe68urF6ipewqoS7GDApHHaortDAURsLSShekPdoUmYq8Pv1vyphr",
  "key6": "2SuKirtVvhmKxi3iCeuYXAmrcb3n1usU5ip6e5bwwNS2B84QtUMc3hD5SQqMMtGGN6N6dgyuGbpZ5UgaJQP84RmQ",
  "key7": "58fy5pzVpKMUg3T1Aom69s54uFpC6foi5HG6sXXvRQnz3w9GhimuJNBJjJzcWjZxAGDQiUW95PnQi4hoowJHot2N",
  "key8": "4JuYRoykVZiM2XXwyn5UKsgsGhvMJEoswSdiHc5YZdcnEkuru44mXmjAEatQ27a4ixB9qZBfCFP2p5gohfTbGMmE",
  "key9": "y5R7YqRuoyiHfksvk6t1XoNfY8BftZ3v8dCwmqPoJKvPTbzDu4zsY7QAWM5FSwGYsPgqKV9NMt4szh34z4SHqpy",
  "key10": "3vBBF6JzYPo5TBEhK8rgMuehQa2dsDSvRraBDXn1WcagwZaBePBUL8Bqt66odpaBiYMEiAhjzpwRK82qeU2EAh8c",
  "key11": "uw8h73nFMxYs9RqJSqhAJWpKXtAk8R6cSfUFpyfe4CNYq783DtANJ71UB2xfQn174iepRfnQEN7Uffq8mPvLpgL",
  "key12": "5Gjy8hWhn69MFUbya852QPYr5rT5dxZcKG3jdoXGV9GLWZKekfD4o1JDtVuwbPHk7GWaS5W5r1QU4ofsw8LRxNwb",
  "key13": "2xNJNkT3eea5PTDZcqJzRH6TPgkrQ7tJuWZ8Yhn9Vhmo5Svd1c5rqoxFf5Duw7ERdQ2oBFbXjfuRVi2FXUJpMnhg",
  "key14": "Lonkp85bowtS19TKnY41AnudxXwcg1XyhigTS7iaNYpGgwqeP4fegQQy5sX1pVijXP7xWcFwayPnSopNZiBSAwc",
  "key15": "4qFsXHGw9vW6EBnpgTsLbRBqKe3PEFTvfQ1cVL3qMfG8U3r1TZj5mwPjZmYw5CfxaHg8nbYPW9bzyrJTDwuuJUNi",
  "key16": "2od8dXrvBAixzNNyWfWotP3qk1sTYkYKUhvjxaAdis7XX99q7DQZZRWLh9Z1mYPfWvhikYM3ud8n4jFCs4GGGBY3",
  "key17": "4hMF3RgLqcJU2mhYv9pSRyCJwwWb5iwCMj3ucQKzPupjZQWH5kzwuTAafotfWmuEh9f7Thv4RWmEg2wEvDYmJTTV",
  "key18": "5vdneG4QEkgrVLCEzUddHrSinTQB7XkmCbneujpDE7P5VfdVWkWY3fL9kGf9LB8wDBRRnXhYFdPbmtdqhR7Zqv8c",
  "key19": "5YPBccJNrwQtY2nF6zWPQoDYw4cTPref1yY1QkD6qQBrSMSoKS5XRJSe4GSMx4UuYfWwC5AgVsLTR5Qgvrf88kLK",
  "key20": "3vNxDR7eWsPEsrxkURAaES7YbHMhd5iMkuEt6GzSt8nh3nqWq7jMZyd6Th2HuPfdiLVjbf7f1yiaPJaBTiaS2SMb",
  "key21": "281EKGK4Ao54J1n7QbbneP8r64j62bEJpRVxoNemZgHa6bt9M6Xq47LqSSMd3s5sN9kbJNDFJEUfbSqE8pnkEmrA",
  "key22": "4tiTeWNnm6avP37t5VL1NZMrexwwKy6Avej5kkRrw8yYq5rLGFDr4wJ4gWiD21wDwBZM7Jt5nKbZC1AxsWUSurNr",
  "key23": "51H5g8wcDsRKM1pzRNfm8W1uzRfaWnWAaLSzwMqGBwYRuWpzYbXrgBeETJweezA77iM9Se8WjjSzzL3c17VvinBd",
  "key24": "3K5enCsscMeR69Dt8artZwVduJUAJAYgqRakkUhJo51edzbs2JDYzHbdFfbmnjDBx63ps7AnvTvc7kHHmJLiqd5b",
  "key25": "4xJ7FPNP3q1V4UtwizTXWpLhfwLVMnycYEiQGDfy6SBnTBDZJgQgK1D87X3Kb9xtqbXAkCh2KSA1uHHLVBQBz9ET",
  "key26": "2RyXpQHoLbELJAzATMeUQu36qjwgY44H1sjtDsHoJMn6TPv9BeDYsJXh6qZkc2ru95JPhvW67m6N6wwJ7ZDhovYP",
  "key27": "3A45ZDreyKamrXxNQdo9KvL7vhqxHdyzSTaw5PMdA92sPSTVo77JANFWWnBmEdY4AHahmjVox3hqiWUhizJcem95",
  "key28": "43UQUTgpBqSSuueo24dkpB7M2C49h1TaLvuidkoy49ybYxVKPEYMR1vpchMWkjdG9Scs18TWoTVZwQJ8JpDBao7W",
  "key29": "WRuFemEp9nwgYsGUG5R6FeefCg17oM45XPwheMrq9gdJAeMPqHMf55a5h469q326pQpNZF7Ksb7aFttyoWxwVko",
  "key30": "zEgN522jdwGdiENifHAAyr1iqTGcn1BkqRb2hrVe6o5H7FLXGAch3c1GnMLTmSQ45Gdr924LYfi4oAtV8PhTvnK",
  "key31": "63WRdMjKeAL9pnQqyf8w5vxoD4tiHnkg3MeBdFxKmvm61J8sC8CsEGQywkKbqRVTq8xJobowrdKmzkDYt5mrpwR6",
  "key32": "dL423ETw5H612LZ5nwHuzWngc6KG5D5NyuKc18t5jut4X7SGBkT9scKFiWqQbH6DuV6gDU7yWc78rrwePqAdWNg",
  "key33": "xHDRsuUC77pRQ5FAsEJcsvRTbkTuzbAxAcDtrkzeqphJdCLuaJowHB8aGtdoFSQ4aJB24vbgCws4qYuGzMkorMV",
  "key34": "4qMqDCiPDbzC41jTXn24did9Gn9ukSe91LxBvZmF2G3D46eZcZfcnPmB9nbtZ44KQVWBouWHTAExxrPVTmYzwuL9",
  "key35": "7hA2j5C81qtoJBgq5oiXPH8BaGKU8LN7qiqMfVMKvZtSpuap5VhZTZZJzjynbaTEX6cQtyzt8PXfvyFxQXXQfvz",
  "key36": "aHDw1Kg6iNxNSHdWN2vETYKrR6pb3JHR9qabC4XKbKxDcViEDWCHXXoiwfRz3xd13EKyrKtv9ALTRXNqjB5KPG6",
  "key37": "3V6ZT9Da9viDRaiHpmJkcTuhUmECb5Cj2HHTuSussiNowpywHU9raCmMhZGidA4j56ac3BsFFeVLt2RunoPLU4iq",
  "key38": "3oTixz9FcfcRkjHGaCoLtppjHKQw1AEZJJi2wmTNtcMHbyemwa913V9ZSRmijNg8McvLwwDPuRqyUX8o5g7V2i9J",
  "key39": "2g3XPzSJDRctCHddEFEtxCJNEWj34wyiNzJJMAzRi8Y8ayEf5J8jQE1ubMpNsSxfRPjcTTZJRijpmG2jTxvS2hnw",
  "key40": "4qkSnv87AqyKa1ZHB4oo79uyMoRZeabtPdyJARzbuydC8zq6DgiwWsj3izJ635GsqfKPGM61kF37LRAQWP21Yr9L",
  "key41": "CeWJoURtZMQSpRnmcaqH6SL6rZpmELYyMCifncwzvRekg6yXk97H8GjCjCtWbGmmNbrpYZYjkJ39gszvQngCU4c"
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
