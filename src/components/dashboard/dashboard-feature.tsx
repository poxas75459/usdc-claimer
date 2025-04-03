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
    "3gsP3TTud8JnanaxdiW1so2fnJKFyqExkouBDU2CHp3FdY5JWwJkywqw2xK47jP2RWrBfMCsNK3vfcRLY23L8Wf5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42CBxfjbZ3RSjYewNm9aJb6LP6nLnsqwY1y2BuK2amufAdx7rt8ZkragTANoY8pP9T3sGnxxarAnXXm88K7zkEYn",
  "key1": "3gdXAmavBAdajZMP1HbeF62uUt3QiqRAVUy4ZCp9TJc9Q4BTUkJ27cWc2nBPuM8xsK9cxn7E9A9gKKkPHJHEoXfJ",
  "key2": "JK2n1on3BwsgjTPkneoxAExvcmReY9gzaYebpdv2hE6Es9SB9Eyq6UJJ45EMMUwJ3yXg9RyKVNMDis9ZV5Gyb6g",
  "key3": "58J6Q6fnqs4WrKsZzVKagSHpXUPQDdamZNcYVXdH546qqi63xzQQcEt7fV82a23cTwUAcL4gAnWB2UGNh4i6GAcd",
  "key4": "3Z8SMixHCQhoHrZVqoY7VobgafzSgXKFBP1mqgA8UfDy3Pbbk9CU7Ri2s5SCFpbK9as2P9n1rAxGv3M2MHTdJqss",
  "key5": "AWoGfsZ4fS5Xh4aSrJjbpED91uJ2wJT5up9d83JSUbL859ZWBgmZu4NeH8kCUpK1TdzQ2PnpmaJAWwTiSvcTNft",
  "key6": "4xhQgdSKg4AaYP8ikQE7DDNqYvbtA1w33ViX95A15UHM3jMzVv3A5Azd6oej4FHR5pVXhTVDPiHGxvTqDyMV3yc4",
  "key7": "1gAseeoTU9AR98Rjy5hJ3Zu1Hk26Ebr7apWULxd6PxGSzqLWL79x6HAY4Bj18udZp5htU7BiJCSqD2gSNPMXuM1",
  "key8": "4A9Mbc8mEYs5RXMBjQswqM7XZMj6XL6cMx67tsHi5taPfS6BkLVZ3oihS2bXksiMPQ3wawWUqg3EJGZRDDaJHgE",
  "key9": "5YRtVhaiknZmBmmRWTXWudcXVFPLH9Q3VZx4xB2h5PyDsKqAXh5cyd2nKGG7ghgrvTM1ZX4EtB3T9YvipJswTdEV",
  "key10": "2HF4tm1WxNAG1ZEpVxzbLWAG1sYGwgMAbbgZ6uoWi1AQCZpqUdyLSJGiUxgYzJvCGHSLPg2yqVBg3pSAqZBmRQsE",
  "key11": "5XB7ApaLeUZJNu3KbNAX6XykqcUBF6a4rGa6k3SobGSdX5VCUynSMJ8ybCxW3tLgnRteCjigw4UfJgocghMQ2hT9",
  "key12": "63p28QzhHJCjsVs81weKB2dj5iUpqMYhwmMQjgXYijZrc6auYjirfTFUgSKGTyHR7U57Hv7BdZovF166B1BLjv9H",
  "key13": "5RudyYu4Qao7PHx1kzQhxPQCmck7QNUCvSN9XYGwNFK8tCNo8osSTU4Dfo3Q67wN8EimBVJ2WJtRrjJA7KcbXwig",
  "key14": "5Rdvdisy8hmccbuvovCZN65yQNofXR6BaAXYmDonGoDx9a7RP6DjLMNgFhHJruyBUC62CJnKzrp5nkHSsSz5Sw6g",
  "key15": "Ywt1gwjrqXJudiQAody4RyukmvM71imfXFmt2nFZbbQGbNdg5Bf4LScvzomPpN3i7ZQHXTb6ruGoypcG1sgtwcc",
  "key16": "3osx8wBEg7umD4ToNBY8ddYmTpqkhiCrwUZnWm7XKevG5YhZ6xirnfWiajtk1StqD3PR7phmhvPmETnvuV9DPtmb",
  "key17": "4iXgZTGvcGEMsJZ3y5qERR5F8NszBP9ejMHmpeJ95R7U5KG44tiwNCJ1rDPg3AKL9KJG34NyeQDmLCdoQAyA7voP",
  "key18": "4zvV7bpV38zArwDrM2Tjxf9DaKp1vajSLMDdo3z8za2rEBma8mF8MZXJZVC7UZ1H2s3FzMasuzmKCWzas5qohzXC",
  "key19": "UXFJDXy6U7fnvixQgiVyhgUrpUmLWNnRV6pd7mSjriEuPcTNZYRcp3K2r9RLY71sPLY5xCYwAjk6UTUmcYmeD5N",
  "key20": "4bgCT3uaNQsKfLYidU1Pazh9z7QJkiDa9JNWTXKRfZbTGgHhu91T1LzJaZfbKKRFEtuiKYdGprRbikHgGZu5suCX",
  "key21": "5H3hxkVGF6RZvfXFdEaCZ3FuKHSEoP58bdqsT5BsbJoE77YWDKsnVwJHH54RkYuLot2FfHpYhRWjGsXqfS1ZqGkD",
  "key22": "5xfcEEoRCudoFmsXWpj6EJbx6ABRBkwbaM5muJDwyzFoVeDfwU3na2N5MuWkqEmVzUnb31duJq7yNXqM1PETYKcw",
  "key23": "5tQnGNei5s9dPyxzLG4xJds8AzhfUdXepqAHENwmNSPrz2zKntPscDXm41gjw69azbvhAdahzmU5Ka6Vr78wgkRz",
  "key24": "5Aoo13TkmBtv8HCrhta4iXERvBVBk8VTmGh728cS3P63rj3qtxehkVoFJ6erwnC9YBoswwGEG4jpqW8KGBMbiein",
  "key25": "3GFAmeFMwtDCeSKkwhEbSMmb2vM9TM2SvyRCsTJZ45FmH5ydPRbtBW4r8LqtgMerLknfc2LMHK2eWY184ma4xbsb",
  "key26": "4cutVeo25tBRscowWbhX3YeX2afB5PE9aabc4rs176HL5KRwZYNe9223hwhrwED34VMmeccABxPmySN1zGMtD9c8",
  "key27": "2BFB14NBtv8LR2DL6nfMsTt3S2ndLUgNBHQLUaYmKCGN8UVr9KBM3wP1TB1NMKMFJmhFhB6nNwstBiWxMXcKV1dr",
  "key28": "3QDdeVsP3H4ejsCYaF7uZjgPVpWTaYiX3EQzpnkpoai5t59xJWKBLn79h1trD7bErAdLFoAR3WPvvBsJ93Bm9z3q",
  "key29": "2jd94TmV97sL8X5J4qaQrzk84qhFGTdrDj4ePQFKCpw4jqcWr5XzovGKtRuLdk6P9fkfXNad2nT7A2LtXXTtFqm2"
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
