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
    "5ta97SxXrb9PVFGZeyxG3AyVXkMEYXCV5UncyotPX6Y6KXqvyNzY55G2AJn6uQZqGzLbtt76k8KWh2Kr1xqMHw4f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dzNBtBnDPviinMosJSba3GQ9xZJg2D3TkY6iEam6CjCM1UWda2XjjyPeXmE9RbRYPgteEzWYmAYZCas73p6Uc1h",
  "key1": "5pFpr4rvnnXeveqawJvU2e5tv1WTGZEQjsHqodghP9qpZuj5di6tW2D88c3732LfBT3fiwd3YGEonkdGfdWAVRrQ",
  "key2": "fh5ferpNfuHqTaqqtrFPLBUsUPTWVvrPx3msMjKL483iHuynetNCgs3wZUxyt8VU6qFq9AfMmCdF1rah8Ko2iDv",
  "key3": "2ht9V8r4ncWDz1vTBCQvnd5szLADeEuTinZnpMaQT8oDGVHATSZYdR6J8jUath7dtoJrxck54EgpuVw9CpNeMrK4",
  "key4": "Nt9vEcoUn8f3dP5oaqpXJ5Ab7KKXoAs1fk9fsiBwY4JERCp4fLX2BPzrAFhmgt6M6nVbCCNUVbGRHoL9fjJKr2P",
  "key5": "2zFcUN6gXbND67Nap5pRSyNzVEZkqVkxm79uGeNwD1FST3zK2Xf27XH5wLrWBxyJ7ZAPDB3QncECWyGWkbHw1DfQ",
  "key6": "3jYWoTG44UsVk9WyeKTYHAxU3vqE88pteBVTsKVkGy1KXVExTip9B1XSWTCf5qwXwYJviy648sH1C7f9G8VVSC7a",
  "key7": "i3WscEK5wfHdinbGaSirV7qPNHKkjir64w6UzRqrV1Da9iX5RjEQpFT4GhJhz8Gsfp4QLPa5XHFn6g2EgFujS4P",
  "key8": "5q3tP49TKcrxzp2bDLv5sYGGf8x7Wkq7zivDEW2L8X6wNzkoBMEWsc96qo69TVrdxt6PLGvZ3FJreDCrta4TxDXR",
  "key9": "fx4xuC6TprawMTbYcbBjHZABcfyyDvUsuMWXy2uqfapesj4ZBeyCtkwWrEzVqnJZPd9PQxBRuLQ5ZyxhvRJTPYp",
  "key10": "5Cuxen4bqjppVrPV7XwwxK1AK3ateVyxsSNQqBmvjDz8NHMwvpzjP1pL1yWV6S33DM4vLwsFPNkxFt1WnGNgQ4HB",
  "key11": "3H8zThka83PqCswKThrdbT9MbnJaVL7HBXYTpM5k16bK9eZZefggGNRXD7SuJbUpp4UzrW6Dz2eQE9zCqwwurrU3",
  "key12": "3xMTxGx94CDhPLP1AB53J61YE8vTrCwFkbfiFyH9gNqjkbrKSic5RzJfJELopXXgLnmsRiGWWjSJns9hAsUGtEf3",
  "key13": "3YDSPQYz7aq47rkVCLgDdffR2du8vbN1KZZjJpNPLv6JhTUsdVfGGEmirTWvwg6uUYt4gphNKYcZvNqnQX94pdB6",
  "key14": "45ogjnuABVR8F56sr5SqReTCaW2xtaq5iCyUxbrwX4vgckLpcM8daw46fkELgEwCnWjUnhETFGdBNvV5ACTnqjF4",
  "key15": "41YnEWDsfVttdVqecFrDaPDFSusfYMTBfDUrcqkJmw8qgoqL9suqA2YWWhXNFjTEFkxz7LHWbZtbcwZdh2iCaBvn",
  "key16": "4mugDBwmUcunxECGngoMdbMxbDN3SfFFaYdvsUJ34wxprFCN3j4m5seMXdw83pJLayGH11V2zx2njd712nvRxiaZ",
  "key17": "4KPqawUJDDHncnbNMfStso8VaTVfHjmY4NTTTjKwRmFaeHNqqVNTKSa31xS9GqaGjFZQzXJYoXBBi4MJcN7zVinE",
  "key18": "3dNjy89NytWjaVLeEXTm7t8r1Fk6L21JuPodDtALmCvVPfCkmrrmR84V461FHUtCNG8d7wSBScoiWMQZ9P9T7GMQ",
  "key19": "3o1VvTRf8kamFdxstRzYyrR4E1kax8fXBsmGdFJMe4hGBYj8BwT4smeWBmbMt9RKtS94NLqyPA5ZiCsePN1Fs3XN",
  "key20": "4TDqxV9qwVAzi6MPjjXPhvoSpwNW8T1TdMYL7RR4VHqMDWBvBt2t6gUBLoubPfxfK7EAnq5MB6mSQdLMuezmgZEV",
  "key21": "3CBEEKGxvnpbJ2ktA6AqyL7JnUVjo1FA5exEkDvnmP5LZWbZDdjQ1xvwH4pzeRSaxshtzynXh7TEjKPPQPYamQ4W",
  "key22": "5qvFcQNNqw4MnqdqU8cqzGjD2JzsUe2qgsR3JKma3canETq55g8Er3S2LgUwHxEzRwegDUqS5Hr8Rkwb6B7opMzk",
  "key23": "2g3EhGtHJkTnJV7DM4tKgoBqnNWaLkm2AqviRBU5QgQfwa6VDyw9V1GiSeovSWKQSeCLrDs942t7CYxYea9vsXV",
  "key24": "54WgtEjLyEF96yxcK5unTMSfWHgFRkGZeA5evfgW6us1JXMhaVF9uZsPAC9aHvCLwpbdkbs7Le4684izWNhJG9rB",
  "key25": "3napfqVnB5QgJdCyU4DTG6v1M4C2hxXUbsJXLaRyBeFPUP9Y3RRvhEhQgxCT2UbHQvwuhewLkfM6DpnUpRxxV5Xb",
  "key26": "4oQKvJHiHexZBEyXWw1P8x77f3hyXBqBoWm64Ctxf5KPJJT9RFVEchSJ4zrFoxDAx8aYVjrY8PtG53kJMwvt44YJ",
  "key27": "3J2t6SfNi8a5dLEoApZ1hMwzbMn8tesrDQbGhzwEt1qbAmQnvBucu95zwsx4ZiRf65P9q1RSGUM1gHToV5QEq344",
  "key28": "VmKYyGAQivTi3udixFt7PWauDykTS4WqvG3ihmX4jXfjsVKX638APTbzPKSt2h9cSZdnQdYsSVnL6qrvCAdsUEd",
  "key29": "4xXhHhXqPNoKE8ZcJszYCe2cmk54pB4QyWs4Gv63zUvj7ZyxesHWWKZScg96NMfWwfgAjiXecmBqj8bRf7t5GczD",
  "key30": "2iob2uFPxfqBfAurukWadShN4dBmkoL4jxD7V7tWj2q6YdEDa6UHdeffXvtm1n1vt3SBVBCYfFDS7SGNhw6zxyaC",
  "key31": "4Rk3JZJaUzV7ccvdAHVQ34UYGmpRAhiBjPNjfsb95KX5Ti7x4Bwt8MRhFo791bhPiM2c46oEBzm1XMMeGxUtuJzc",
  "key32": "2ueM9m5sAYdh2SNzeiEDbZTXgXFaK6KsFvfUvdT1gseLm6cSbriqdmnqqD7hMyMbsKMyir1Q8EC67DC52Hu26f4b",
  "key33": "5VjvWZouGu2XFYWwGpkxjVFNGSvp1DkZi62qMWfgF4Pn47MFrgaYqVBFN1f5LABbgwWEdueat5583iASYQjXs4d2",
  "key34": "75vHRAKWCyK47VFUSLXRpsS7ZXoFwod9iFT8CD3i9iWqCWjUVKHsnfay5WVTMucj3JSs8gWx8oYyFbEZ8rQYemR",
  "key35": "4HFzcii6FMytb6yBT9BYTrGaWaGGGWSe8Fhw26grq65JJyiGQj7pgRd5kDe1tZank3H7CBUZTQeZbVvHuEyJzUef",
  "key36": "4YTgzYnApoKnnmxJgSawdAADvsJG8afj4Mnjd8PiizVdxvEuihMHyhQB3a3RMp5cfyNERn4oZgjYM5bECQbjriPp",
  "key37": "5uzksuG3xGphEmyEXYBStHnRwUWHuCTuyZgineyc2sA3wC5iwFnz5JDefW8CtDkqtwSff4BKKGgqFRDcGHDx8ahW",
  "key38": "2eQqrFUUdkYerHKLDWAcaYmLzG21fVsxyxkXBZBbmGPQZpoBR3ScZhrutB1dj6AYFMKNNye2UCN3B8i68N3YeBD7",
  "key39": "4mdJB3WdKENE8VTK1pU96NBqH44bvN2YZPuwA2ZTp9YEDx3N9WV8k1wH4Kry7uXtEdwwEQ1x9FRRw7G28w7k94VC",
  "key40": "3CTJoEMRGdjrzPYLnvX9QWrEn1S4mt127pV46UzfeZLqqDoTZH8GzDGi3yweKMcgpmxMBuceEYEnqGGoZZKKnvWn",
  "key41": "5U2ywp8Q854Jx8Vy4VfRsBe4wCTwkEBGCXf4Um1uHuKsk1J9qXXd9Kxx6q1VUZpmdjxZLsEhs5gMWE5qicevSVSo",
  "key42": "2eV2QtSxMMhki3Gy73cMPcWGGMB6nD4bs7HWijRz9pk2pMcaJNsY9ffr8ZTryxf2TfupxkzdMeKEbswZCiYJ4xTa"
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
