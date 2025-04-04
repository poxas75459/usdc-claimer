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
    "21Teog1bZhtY4PgpJn12hAxy2q4S9hpwYcepyWSmv9GrjRWYBiKrLM7zX3ozepPUKnjXgo5hymNhktw6gvDmBPk8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kwbouxc424Av7FiJYY3waf2WAwn1ZKyWLgXLXbTVqhgTQhimvHv2NJe92ZiKFjpqqa4eGcMzzCvAkC2xZaWEmfd",
  "key1": "57WD6U6z3jv5te6KpwEdvEX6gtFFY9zZTcUp72Pbk5kCb4XTJmyNGHcX1DwfGYgTgvQP9hzZh6B7yY5oDaQW98SP",
  "key2": "3e8zQ7qVBatuvzgiTrDoZ4pYWLbGoYcCUvaL1LodyfQSVKEYvXAKbiLjeQb89ueYkNBZSiYoaeJVYF3KAM7uH61Q",
  "key3": "bi4f2FJFp1twnXNyMLzR2o7cDmoFUJ9iWqCzKB18s6YDKbALdLkjEH2M4ke8YEA8gi9oRccjgSubSgdSPEZWh1s",
  "key4": "3RFBYKg9za8yQgQh36Lx22xow64qK3TdWai5jzofbBSNcsq8ssHiGnYC1aPWXLpnCLELH9xTzn1q2bzNgATh7Yus",
  "key5": "4M7ixjk4WUgLAKoF8pcATXKhyfSaNf9A39FKfAsFerzessDpHqbf5FLbyDsNHniVHT2EXMZaHwFJEhFGcX5jNMKx",
  "key6": "zfi3ZfxzYvZFE1QhmXr54vVGTYLWUafCyLhHeoxbdmt7WoKiGjvqqDjRLAP4umPh3rnb4yhi3gonYMif4cdsXhJ",
  "key7": "31LrsL4CCeUhVDB2y3KvgfJBTBYmGW2wpfPtpJAkwdBUZcJrbUU4HiDiSFuSXJMhwrEUeDtJA5HBYY62T2wGuaV1",
  "key8": "4o6nsRHnGgsPhaF2UfuCP3peeSwZG4Zdh7UpvADrtpAJ8Ui73iEtfkHYC8Ppu198wz6UidLZD3Y1gb91E4sXv2ku",
  "key9": "3srHGTq1rBzQ9zckfxwSheeKDi8TEsH5enw27vFBzTEkNnZZWR9QaKRYWozVbfLzz9kF1cKSWVixSzVHWt8J73mr",
  "key10": "2mrtg58pJZWoShXTA8Rnbet4fqHXDh1Qv6eTotvXxoAup7LExCnniNg7roVPaZu2tHFH1yyWf7mzbTG7FhQW9M95",
  "key11": "5a6KfJur5KWniCHUawMws9VL86qzzPeCzYT5HEz6qTiocErQEb3TTHZYESwkN3NvoudzFSV2ji8N1VdeYAec8YCm",
  "key12": "3m4HBUrTvkEh1B9eN5i5Z43rqSkCuVarCipcGr7AuEYfPjdzktmczziCcf88Kd76AUv5ibh7t4hmrrprPJL5S3pu",
  "key13": "4ZpXBQimLK1yYQ2WbokyKkxkqyLFik4HJnorMFnAe5HURwrs7xrG5zD6QXYxxoyQzV5a9CXtVCV3Uvd89uvWXufC",
  "key14": "uPzMuuZzWbX15BqdbFMFconeHR1PCLULbxkhvao7onaGjR3DPgU4wEoG8sAma467U6CtUKTC1wKmUC3WWY5XCsq",
  "key15": "2CJxjxJyfjM4PshkkxX9XzJ4SdFvhPuxi76Rk6aYTw7Z49iUyWVEfHJyeNFuSMBdAioNu4ZqPQSuCmvFkMBXHJkx",
  "key16": "3XK3fU9VU8jg4r1m7VjUNWUypJtAqmJU9HhmLVH6HMiVdh4maBUyizyCGxSG3n89xW3ntmTk4EUkAYufj3MffkEr",
  "key17": "5P1PzpMzJiX8fYaK4qoemUWWpbg23RSnj6r1t6YQc36tDTabTifD2QY2XqPJmR3qGBz34JomMKU8YkfrxFzQyYuC",
  "key18": "5enWTCEZFoV2aPs5hqCjK163pQRKE9RsFms8SQW5gfGb1Y2V9ea3s8JasprPz1Aw3bkREGU6joaNRFxqjfYhEJ9B",
  "key19": "5Rz9ArVcsttqteoCCixhCB12DVw6qy7hLaGmXuSCKRz9PLyM6ZunrSCJYDC6oEM8qytf51DBkbsTAXT329c7h4Cz",
  "key20": "5ZqUPaBMXo9KUGpt8WF6sLDFGkPnLtE9oMmAVkPgWFZqWXTDKYKvJiXqbZnqYdAL6XqjLT82EDiJAt5S3deyxQR1",
  "key21": "4XkM2M7XwGDjLXXFtpAbiVUCwzMwZnEmP1JrSJ491idEXoh9Pd1UumqdgpivmKvP4cvmVeLVF4cr2geLLCaBocFd",
  "key22": "49HS9MyGhTJ9sQGdjXjbXEoCb1qFA9YPp3qeG1eJntuQ3tnYfx7zKi7girT6rXCkEHtzFT4FaFtpAZMKg2vuDwXB",
  "key23": "3ouqFzKjiBAK6YTT1n6R3S4pU6pMmNpxBAJwm5aQZ4DSFwTdHD8FXCKz3L5WWyFBM8qApev8YF3ppT5pkoXW9VG3",
  "key24": "5HjXRZt2G72E5qCWR4pFQ255Juq4eNmMLEAZRwmvnFxGuQhnUJE9wt2EQApeU75m1PVFNf5nbFXpf7FR6BUAQpdL",
  "key25": "3ZD9bzXTEsAZrs56K1hmDKaPzQLcFNms9oAhHxP6dRaoYfT6rvnQa4tByE5y6Zg31BXcPP7Udfhv4vvrft7J3C4E",
  "key26": "3VTTtyrZx4PSZHEyEicWaGncKX9jmnm3v4S5dnyvQaFuSUJ8nNQ2fuoVSf3kaPxPgxb2MxZnyi7nhvyuGVa8WUSK",
  "key27": "5Ep8NpKrVUY54tBA3XypJmChNZkANMyTc6hhJoX5T4XoMpYBajrUsHroczpvczSPhvbMTGF9XZ4mVtUH7yjmCwxY",
  "key28": "53Ze6Jzo4Zj2AXLGz6HMgbKRAtcYcHVsirfDcfzoTWQPcACR4CZ3oFtKcQF3eU1Tw7AtAGiGZ8LKBwYZpGqVZsse",
  "key29": "5pNo9WnSbCH5DwSkY5SwEbijAkndSQdgZcSYjwteVvrMVBwvkupkPqkCPgZ9ustm2zxkG2YfgUoog9dzurZwCYhp",
  "key30": "yhS4AoqXJoMtXeezYfRWA1TDVz7JZVwNZkhC72n66WF2qfYHcgTphn5FEPtyGG4KcjCtcYh6rsj8MSob2jvvoaH"
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
