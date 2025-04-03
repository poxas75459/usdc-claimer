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
    "5p9RyGnMo36TAC3CormuaKSW9t87xShFNBWJP59V9YBoWc5Pqidw1QXLcWchzUqQQwWXSQAZ5pPfbebUfWd94KoB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UuUtFYKEtAX81qD1fYKoVFbthE2W2GyABEGRAhst6X5upKzjgJwmaKafFtW8o11urZ5nTGjWa6nRVzPidqM5xZj",
  "key1": "9rfaUbLhvV1YrWXukfH9mVRUfwAt3kHTcZcLibgrQxi3tzuT3FQassh7CCQcJV8i4UfWd6nLWKrTJdjL37myyT6",
  "key2": "4bSfYJb3GHUoj5sRSPSC6eFh21JmjjX32rNW7moPvpauaxGP95FRhw6D6VG2CZFNyyyrEEPEQ1ayhsTbhySpwHgk",
  "key3": "cp46Xx3G8G7n5NBwAvkEykDsNcTREeBzpbixfbQcECsWWDeQeGBsdY7LpXMTuPQtg9NaSzyUUYU5URFwzBXK8U7",
  "key4": "2sZPjftqWDCigcBkoyjozDBeNagViW4YiUbAfamByZYikbytzdHZ3ykxiQ5PeGyVyJFWiJijBu1eMEizNK1PLwyn",
  "key5": "2z3MzUkamDftYqF8L4teB2PreSmmuGw5nTerGzfVqhP3qXrumYkEAGqLGwrw9kiGPTm5oiiMctATnQt5U4miA3AQ",
  "key6": "2AfUp3NSzCJ7raYwUyBz5JzchnDHNYZjAycWmHm4JanJdKR7atKTRJpszZL94RuKmGs8mJvZgMtacTWjh4hzCn3L",
  "key7": "5fTsLR2xQbVhnJrhohLCBkNakFSDDJyMCbKyGkj4w6M695SSZwBioggUVhvthftoQHw3EiH4cporBDvxWtEXtV8Z",
  "key8": "4R16jYm4h574N8N25uhwdhv3pXGSGk3q9CMc6cuC79kJT92onyft9xTjk11VcRGrM96LhjYDhAjKByUwgep7FZ7z",
  "key9": "mQS5oT5uWqhF21uBmFp2kxUFNW5fT4AksMCHpHiLMKZNfyMe2M8LanUNSsLJEuxPEz4HNkHTqewrxbkgPQAPBNr",
  "key10": "3M3ttr97mwcpFrXouzT7nPXgoDwnCyHmHpioT4U8mE1EEKFLTK2cXKNKod3s7DLnwC7EVA2yZ9fGa7DRR9Bph6wY",
  "key11": "5w7qZhjUXsS3oAVbgd8DhYKKevp5r6B8ufkKRrE9dG1MhnGNnXt3G4NfXWzN3CjMkDPpS4GUYcr8H1u8wy4Bota4",
  "key12": "4U12wwpFn4VUkHvUoGZVgb3iDCQz6UxcrdGBXGiYxFkfWCfRPgJhYNTtYZf7u8GcpgdbS8MwUpcqR3uS9TrBwV2P",
  "key13": "7LHSZweTqmLisfQpq48tQJ6vSNmnCwibw4imsfib8Wn8K5hEWQMg2SuXfjLvUjzXAmfENzSqe3RX84wGMVqMmnG",
  "key14": "m5AJceDwGhfEicPWb96fy3mYouKno4FVxnEcySQ8m84EKfyFu9x99Z9HvP3Ch5Uekzum35d8mwEmXFZ8veF3A1P",
  "key15": "4KAA4FiULSSJX8GrbYAfByusFaRyPEdx4FcZSxp6HGUFvsXewALSuVmGeTsfSvMJFS1BFnV5wBELeH7ag3zVUpPe",
  "key16": "eZ7e5UntRAMJbLkw1JEhuWMwXAZ1fPKgPUeNzCFuegAuHQaB4Sy7KL8udt7nBvRhcHU88dgfC5isMhmQpMucjBG",
  "key17": "5xdhpYWHJtsTyeTSYz86AULcF6jrDZKWSNdF1toRmLQEXq3gLHtLKUDnJaGGwrRG2BQ3HAcHqA4E4SdfEFYcNjv6",
  "key18": "3j9iYGyEVqzYXmgwJr7xJsQJbQFFjmMaWhc33SBWTXjDxwE9WeEpmfwXtzzVU4NbG5qwDeu4UWBmJEpuV42sfp1B",
  "key19": "2cEpCzNrX9XAdmxKit57PfdhLoVGkDVq6h8U5ZNaKSeABNLPwLDKXGq6QPYzEEfKD532mACasFCWKRCenYCCfDsS",
  "key20": "2Rgzran4vRyN86q6uqW5Hai5kVoj3RjY5UKhzt1wDDcApKNU99LBCTFaR5jJkTPyH5ZKNSkJ54CZZkPmdanFVQtx",
  "key21": "5BeyszkP5r8ALTp5yhARUL8k6Qz83S7oASntMd71U9DPVMz8QXLqzJmR9gnwTpAAJswnse9BytPy3gd6Cidz5kf1",
  "key22": "T1GbBuxxPN9b6EmvjBqM2cX894HWs4swhxyDDYnSZHuTqWpGbhoryhQRgasCcyvkkafppkgsCCY3sMWkmtLQbhZ",
  "key23": "5SHvtKP41NP8V92PwATyTp3eseiusgSQRmnE6kSeMCfFnzfudmf6cSzZh6BTGzh26RfLuQgmMvP32Z8WRAxwSBPU",
  "key24": "uSZBgqHo9hR8PVdSokqJfLnihPjLUNNGdNbT1vwujMaAD6MREN2jXFtp8tRs7i2SVz1hjCbfB7kMcnfXnsVpiBZ",
  "key25": "jtYJJuhPdDEHFxvVu3WiXGErMDq4n4xcE98EA1B8vpeqAkd1DZekSHfVEmzWTKmNdfp1bZ1AQZwtBveCdbFeaoK",
  "key26": "a29joPboeCmmdQE5hdmSsMAsWzQ2QPoMGQ2sQ5kwXY6BYDhbbuxBYpQ3D7yRi5CGGGiMdF1q7dKqEQj7dZji1jr",
  "key27": "3mGbhxGg6eXhu8u74cEuZfNJ7DitUuo2vRLmvi1A4ozmoSuLHPJM6QoWKFQQSHCDymuRBTPQi7hEuYHsiPViy9gx",
  "key28": "hgih27tMc5dQ5UhDyjbKZrpMfmKBw5ZGPP7bGx1inFkHrjCeNUEvTMDwgvkJQbAfeCgRZUiw7wDYvHkA9FGuJVQ",
  "key29": "TQGrwMzPvqLvHM9tRq6q6Q4X4pDR423ztfzAx4rXkziDryKbVxFdCG1qnoa7frpfSKVWhnbhyCn8ffzA4owR7rq",
  "key30": "3z3yzqDsMzeCHU4vrWrEvsNQftSoax27gVV35VeZMnf2adrXCnLNCb9CYZf9DE5fFSn6BFw747nWo7oPZ638vZHH",
  "key31": "5oYfSYAisB94WnU4SecDCmnyFaHsAxCb5FLan3UqiEy6sCBzrXzQdYuoAV1bxkCpxr6H4AsMj5NwuSMyd9ZA5rny",
  "key32": "2CytmqYwXZwxGGUW1dYX22YSJ67aHqDHVnQDtdXA7mMny15aJJRc4Z8jKsQqA6oXBREEdwrf5CLoMWgUPFHhMeyp",
  "key33": "24n5LyK8JsMY1dRxm3Vn27K6SKe6Xr8tLLGbBz9HCr4iQ6fHYqY9E4A9ZEP3rMHMpvRGJvykjm6v1jgpsDGT1E19",
  "key34": "HJGQBXHa2GLKRHqWsiCK1B5UrN8mtCS23dnHVfxJzgNursCPcXGEbZW4bwJ4kuGifm4yF1nhBTrKemwAF9NSyh1",
  "key35": "3LLJYHWh9YKxRoyYnYsQRXJSfRBgpfN84zMzfrfWXrJ1JMffGL4GCzRtDN6EyFrqSMqhZLmwaLsi1FP8TZb5SxBL",
  "key36": "4jxJMjhPQvdM4eCULFL2pjS2TeJ352GqauQtXuC5us6BfLMkLMPKBv24xtnc2KdqtxuzAHAq5L7gwn1ZGco1BLBC",
  "key37": "28ijhgAutDWZN9XaYXaLkJW8h7B9q7L6s93r8T6hQAHa6G55xvwukVcLvawPHZis7J483r3rjjckEwgL2G8eKH9m",
  "key38": "2PmfX9BsdwAmSEygbvSVmZYmNcYvFVwkzpwEvkxueLy799bVVTdRXLPhAgzwyG3aKGzX3YCu3QVxpuDCXA9Yxqic",
  "key39": "4qtsGhoRtGM3nvQFSJFpqsbhRERXpqSAZQKjMkKihCWPUcNzNF58xYr4JZHF7BrPTLqyHEzjZhD7mWUh7PdEzquy"
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
