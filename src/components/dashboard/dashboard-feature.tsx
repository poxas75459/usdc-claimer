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
    "vHn6tX9D2WuatDcwsP3Uf4GD8BeLjQXDXriCgBtVCj2mK8obNdNMwHuqV1rXbvDY8SoDgA1CBCgvuJ96MPkPB2M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UgoAK1DtWZmJ2Zfj4ZCUxLMaddPgjtPtQXWjP9BC4iLHCWQQU2v8bKf8kytKLLitFdgbwsDnonGHhzsXGoecEYG",
  "key1": "uZHQrwheQkEcqpp6sk6QjasWuT7Ub9G9HXrziQ5mkNY177vMsQMjnC2QocoQokAM9g7EwGewdNLezXoWwDr85Qn",
  "key2": "5bq7oD47VaTwGijvnTJji9ifo6tW5Jh2PQS21rLUUc2jm7PHT2cNnGt5RS7kZQdoAfW1UqgZ9Vu78y3e54FCQF3e",
  "key3": "dwXmuYLW3irK44wjqmP6PvYR4pWmNeo6nyqWXnb8foAcequuSXYiyBq8XLKYrsJbS3x6E8GL82j4UoVxyvwMi55",
  "key4": "pWUmJ4c4hxrgynAdkCtDo1zDobTj2VXojpuaYJqBq7YDtW9QhM6aXR9CeFTPzrzd2AjgUcom1tDiQPEYv36Rkfo",
  "key5": "38BEGaGfizj7N67n2nTRBzg8fgqoUqWAx8muzghBHCUCXdTisPhuxykJzKVBxa7J5B1zkqS7MWLy7XURTbHz4jpK",
  "key6": "4e84GSTWWoDXSxPcii5jJHzxybi1swx1W5yhaMtr9CJtV5dPrapww3UhhEbXof5MEb9tbhHmaPZZSaz2A3cd8UYL",
  "key7": "4oQ76cAGwXFDB8g9gqYrUqUSgKiqL1Njd3yyZySag44mNM1ghThG6NTRhZeM8KJx5BcHJUiDmc9fyJAsCb8K9DAp",
  "key8": "4mHUkARQpYptcoLvX8wSLLGfWvRXatnMkzGvbxTCZn5rxscHN3gNWxmHZzAUpo3o52JizuzhMHhymJJixT4DRrmH",
  "key9": "581xHi4SJ973DbRrESVePyfMbBqNHicoDTDJdAzYy3sT3n8yMhPwjzXa1c64GVXmTL9MmzRLJiDfEpVmhKYdCRmz",
  "key10": "5cjSRGrtEgWAszrfozsMVsQp4NhmuNoC4brZ72PB79CwaXyMg1WbuM2qCLuGzkA84eUbqtxBZeAWhjMukN3dkmvM",
  "key11": "Ky3okigzeY8Mb7ycjhihEb8wLa68FejwTVsgi2he3BHqTLvSLk6ATmHK9vxxwPHmP3FnmxaS2hEcxBfefFGP42i",
  "key12": "5hUstNNrJK564aWiVSkGimo9HyaHvaqafTgmVSX4RdzesvmH4Gr1uygPhYAFQJ5XppRkMJL8zeRj1L7yfos6xgV6",
  "key13": "5KUR4BTTCyoXMmYR2uSo4C2qk2xaXAYZAJPndK3wPJ2nRAAa11RaBdEKhcwEKTk2KfPmbLJdQREzFwcFuEzkb7o3",
  "key14": "61yw12rQMmDHs8TMiJvZoiu2RLph5fw4AKodpdia6B1Hjz8m2bXW8FShEg1JeF7o2y81YjhvQWYC7gUyDBEEv5ea",
  "key15": "4LGDcqFSUeUnoNksxxZVM6DGUa2KtHmg1yqSqYayykmBxdDX4huNZatytfVxKF3eRnMoPFuhndcrwbeB83KjVMt4",
  "key16": "3v1mXZm27XxT62MH822W55Bzipz1vX6Myus2od1dDgmMvKgy3jEXAVcr6wpY1VkZaDP3uYsRYYX4v9EiFCCT94Gr",
  "key17": "1VsEJuFeaGQWt6mLtSREFmijb1R6F8X7DhSn1WXxxfD8KPrHVMgDuTBFXYUZhsJ75F62J1Z4brXJuD3wEe8FESV",
  "key18": "4DJcbSgzKJBH3xj4XkTTTTotsUU1iXZW8eZ5PvYHhLtmhv7zc3Ubj2teHFfScAYC1wJ8a8USi1NY7WeQMzaZ6SYT",
  "key19": "3aGw78icHZj7fENr32yGbfWKtaVki9Ng4bfACCnHuyv1KVhEY9q6bNtuwzAj19Gx2prGgd8McggCpii24aUMiZrg",
  "key20": "nLDBhtdB7gxsRX3fDbS7m9VQh9ZK76aYfK3fKHUnnXcLbjKCJz4JHeMtfoxa8ywifvMTC3RZjBfGpbWvxRhhyyy",
  "key21": "5KYHhfYEXNxxigrRTjMUnBLwrxnswfeHzZm2rvVLUgJbgTQPjT3W6n9pAkeWZbHFvvCtcbcsPsqk6M1Hd15hGCyr",
  "key22": "4LCQr1mdTxRJEGAFd8CKDVAWmAm4MAAWoY7TzhsQQunW4T6CWcWYEVUp3U4nTKCh4UHD2LHPhGsmdDtccvzn96Vp",
  "key23": "ZzmaFq3R8PuxP17BDX4fATc8JqULLAGTBPt91gEcv4Mn9xFfyKNMoGz79RLYestZj3SoxqaC9f7BK1Hohuq6Mnf",
  "key24": "2EVCS1GcMCfhbdLWZ6tokXTUJmESrpikVpoBwHea7JYEoD8dMT7TxXYFbsffdP8nZtwvNXkqnPqjbYMmfStiGF9z",
  "key25": "5h7tVmzLxrwJvyYHY3EiCwLDi7mz5iNv4KYCTNkYYvP5TvdMc8ZT17r8q8bzx9gB6xnDNm1TVT8zHVv5W4bej1hV",
  "key26": "5JCa1hRGXW1qLPkH9odzk48dqvC7YNW2BLiYZxnwhkxJ9PafUg5kZJRv5TKs1kvhVcoWR8GreTDKZzEYvPm5c62",
  "key27": "4nKgVEj5aHJQZfUa9yEcVUfwzEQMfFJkNm7p54cVtVMev2SaKjeeeKNkEkua6JyuhYBzFw7rHcc5RC3WSeKcRYcT",
  "key28": "4mYqWh4gtSZtpo34md4MVh4uGNr16KkasKUTU55DD5pPPUk72ykCh9jzHxuHUzuYMjZdtdVrrGGkZx3M7dwRLH4R",
  "key29": "4TePaDmAd4fWMJ5Yvs2q4NKLLu3JhPPqnSV6iKVkHcZfytU3bUYC5WLCCDkA5RQ7nYTrSr2urZnZo582Go3wvfuH",
  "key30": "btrdMZ9aR6Sqfs5JoEqBb1voqyo7JKK8JxzFgLhQ1vjwNpFniQDZoaEpvcxonQUEAtRKe6UHoeXSbJyjbiq5Abq",
  "key31": "3Mve6HG8oQPgjQGZJmJfaGDhFnQTEQeDZCDsekc8RPb16VZZhgGAf9FmJMtfgkLUeBEfYzPpC5K96XK1Lc55jx2b",
  "key32": "4Kr3rCx1jmc87gGmuBXcZs1ackH7Pn21fC6VehEKNvMmiyW9v7e7qdSpuZXzdUvyMiwiUBRDVLfHw6mVa2EqjGhz",
  "key33": "2WrKywoPRiqbScSsZQYqNc9y3KwhjhCyjc5ViKwsdrxFxEQTD94QHeK8nPyRRH1r6iHnM6aZRskAk8L2aQRUyQiZ",
  "key34": "4BwfR2VMXBDupHbLUTKBeUyyLTjsX9vEyvgkYmWgzUixQMhWpXZrA8cU1Hkzfiw34jJz8yXerF4WBwh2WRLTt6jJ",
  "key35": "4b2kgmcGzWdCe2wKtpCHQcnrNJZEdSX1uTC4ZN5xEEeLJdt48bN47ko1AVX4St6ySHD43FeegKvB9ozCGYAogDm9",
  "key36": "3ggHCdNZbfm7bowAfcpwMmYyzjLYs6ZypHWspxvtpXBjWmxHHttajaPpAEegutfy91s4uxKkHh1QGHywEQU7PLDP",
  "key37": "5KabNaW3oFwrD4WN8GVV35owpSoxbWnUwPfYNvSwQqXHZ9hwnWMztPjJqEUi4gs1UkPZApx2TAgUxiQZBwxdrSHR",
  "key38": "4Byk7k4rxoa3GSMHuPHB5eywnkvWSfKmkqXm4XY9Dpt4EbHch6PHhH6bAXBi5Q9MMimyZu4WfBK3do6hSbtQkycd"
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
