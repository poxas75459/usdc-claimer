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
    "254Qu2rVDSG4H4VHMwnn6YWJUEvzQY87298qv8WTwrpq2KtdyfV6wxxxTfyYpa77uuXXttwE8eo6u9iKxu4hCz9H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MADCc7ZRshL9vV3Qng9sgxZyRS8Mzuu8pNCghzHrQJFTjw8NXxKaQNMsvPxg1W9iXzfa1TMypRTp6HBD9nwk2Tr",
  "key1": "3suQQVqGg4hUCoRsqishKG4n25Q9XGEeDUTwJ265q82yDdvDadaTjCy9onTpgUhAGt5DMeTjskawwEhsLFDTVAyq",
  "key2": "3G5nTCMMFMfRiEcax5tmgLs5MuyRjgYic46XxDimYefK9ub82QJpQmHNooZXPSP4aVwshzFJyULvDQa3GgGXvndu",
  "key3": "4ki5ZxLKY5oeBqshqAGbzKKB1YaDNKt72XHCP7bMe4juJZbZG5UqwpYc7TRvSFft5GXH8HXd8kx9Wo24GBK49oYH",
  "key4": "4udjesErGXCGh5eC56numfiTUB6DQKgXUE2ZmGLZV2ysGnoGoayTxUc89mCWEHhpZ6ZLZz2bintcDFADpxgfAvEF",
  "key5": "5vKYaG5xAvjiapWtJKaq2c5YZaHRjimmgr9BoYG6kLVEQkDeySgS7gmjJLU2G5VTN3CycqGR4uzZ9NtJKVxdefEA",
  "key6": "2AUtcXLyCsXTgkoza9Mr6daTYNFrV5obMfGpHMUYiLozuw81dXXZsFWc3JzEQTZWLEA5djBwCSQo5wyLx56bj7GT",
  "key7": "53yUWrKUZTjR6ioCPafyAErzMsR3tXMwdsHnXAbGjUwBs4Qd6XfUa2Kqr1LDQpJBuKnMug4rebXorJ6FdTzT5H4E",
  "key8": "5uhjAsAr8aREenWUyUxAvKPdgkyYbqQJia1rxNNi1BkprQDiqoq4o5boiqPqRQyy7tgDLW7Fwt23uZN6GxDXkykX",
  "key9": "t8zLQHm1S4QLLJh3jbStm3Trh4RpF4sKtK6sbm9vEMPMohV41GXjkE37oZMoxk18BHk7ZKoHQYbwefRECRu31EC",
  "key10": "3eAy3t4FCVMr5XF4TJjBwbvjKBzNaGWUFapQKcss8KMGsp1Jjzuba9sr6Aum6XdyQdbSeztZMc1JuiwFtcT7WduZ",
  "key11": "4Rjg7GPuJVrc1T8kQdbgtG5jctAXMaHX3VWwA5wk8uC6WpbVbDf84HDdfjHMCCpBaAFXFr8DyTgzPYXPmw1hNQky",
  "key12": "5PsCkE3yA5EnT8TiHCbK7qTyphSP6VshmStibozkJiPkHt7fME8zHxkENPoyoWaUJY5k917G14LRqGBmKk1vopgn",
  "key13": "4r8Hk1JKtxwdG2zj48pfttTSFvTVbX2tyrcyn6DUzZYXnaLE9BDWa3SDqpeSWE1XDW8vbvRj647ZW5FSyFf9zu6N",
  "key14": "4H51cfZUTdQHmZrTWWZfCjJVbCELPzJSfCNc6q4Zo3wgVBbMjYXpJt78nZPwxyjJtknFmsMbrvtepAYhcHfxjEPu",
  "key15": "4Hm3GDQLhqZPGRaobMSWzUvaWaAskyi38XRZzdBNsH4pAPt5TEfUFM9FvnkHafxqXkQTnYCY4gNcFM27miWx6D52",
  "key16": "2fYzH6TXi9i5SuAmG26GRpYbndnQSqjCqjLCry299emNpP3N4KeHpRxToLsyZRtGVKwtAgtDkcUYSv3HvYPtx43h",
  "key17": "3ZAuMbo9ni6MJTXBatwnGJbq4papEBe8FAiWyxXENFUEVNiVNWTEpyrF1r2hAkHAKAnsfeJSBNbbX4672GJQp4Qm",
  "key18": "3hppTdZYV52dcJktSUU24Sv4BWcPy6UG5rUcWKeURoh4sGV9uuzrrQGZcZU3neyJ2dbpWVqXx8UTHqhGrhXkqJPe",
  "key19": "5hH8frLRgteLmzK93akuAWXHXKakHEy9YoQLFFr7Kq6pfLT1eAuhvizqNptE8yxpCFUVr1QrmX1FyamgkS6aaDAT",
  "key20": "3619LnBE3VpdBXqqmpWJFdhfgpb3RUvH1tW7RuXAXry89WqKCweQ4qbawVqeUk7Y39Bup4PS6TvqgMRnw7Avv5m2",
  "key21": "VRSxaD2dhH7T3uh9b4KbFxD3wvkVjsSFjVdWCCz1ArjXX4H1NKDws6nqZ8grTkJcKKKYw1Mum4MZ7RumxGKxkGY",
  "key22": "3XJXL2mfdtzTQbL6Acou8sQbFj8ac8MGavY5VMWW4WXJiSCWXrLkdrBzRS2YPYzjeNQXENQsykNS9KYP5j1DDVer",
  "key23": "dh1gzoQJbsZ2ifPMnZCKfp27Yo42rTE4ZQKn3r8qVWP1vC8sYy8dc6ia8X7EG3GZGY9uEDShrvzKZknXsWccbfg",
  "key24": "57Qk7m6qj8toFvGDHgB58rwZh7eekXH6mpbp3f3iRLwjbZrE21JLaDisEiSmntAfLZnJLgnPhbsgL7DyPpbEffyd",
  "key25": "2CtKWQris65tM5QNGpPmCqVvkSukRkpo8Z83mMUXTn2ZsTspnZ94MWAHxE75zJcN8nxUqt2UzD6sSGGM6CnDNHK3",
  "key26": "4bcvT5WWxZNcMhfv6BbMJPdtjMQu3zqMxTRQsgPxajMY23PQo6tEsQrdio6pMcrrhKJV7u72jy8dSAHaVrqAJBDT",
  "key27": "2xzSFPSaKQ9H2Vf7ex63zNpAmnJDDcM6W4ToURWgoqkKpbA3qY7wFoAiuDkQPsHX7hvqcTxV6VtmPKqE5PZPP6Qe",
  "key28": "465Mmv9YTZt1FDmY2pG9k6ZhMouSBsJng5ae9DmoVJkq9XhKiTbFsD6x33kjFHmwNRTqzx8ri2dM8LSZLnDTb8f2",
  "key29": "2Nx8HWLH66Q52pKr2YvNtb1fAGa9s2R33ATeRD8vJkn6KuSzSTPu35scfKvCTK3Pa3wCaxJSUpHe6CorGHqa8u5f",
  "key30": "r1KA9wiVGXNEKX7YqHEKjANuZDFxq5gzBs4T6ZK2NiLhV6YiHzErLvi6ChbXGf6okSikUYT3dmBZ7YWqUoYJMwn",
  "key31": "3yBLgfeQuHiqWLEagCrE3x8qTGyzfxGUxSWWa4RXpPKs84qvQywMXEJna5HKSRci2C9o5zTyTk9vBz3z5g5sdKfL",
  "key32": "5wDuZdMHo8NTk2iTH24FyoV4KZAABNhUHNBEdfp8hMDMhdLjHcXHgbTcXvQLVTviBcQFqcc7iVjNQZHdFyddQDaq",
  "key33": "41TAmFvMP5Yu8XoW5yJmF2JKb4Qr7Yr16ANrgtyvcA3u6TxbP4KwEJjGkXrKVx1fXEQQZ5wLTcetAdsxYxBFNv3d",
  "key34": "bfRfd8NSSmgPyJS8JnK55mpphSovtQJkBqErwojeaGQxoVQzDJvjAtJX96j2cMj1yPGjf4pD7HVoqpabRRUEK6a",
  "key35": "2UFRKibGKjDGfGhL1TRG2kwBqZcfujZEuVEQM6uTQYrghScteTzgLbzckU7BgdoDegqcVaSPziRzb7sMDH7SijwR",
  "key36": "5vyoEGnpjgyGbNXZHXqDFXLwQvsASPdYcgEZ7APnQRWMtfsD7UrK6N6vMb4chn99kFWwHCE6gUepm5zy7sXErk1g"
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
