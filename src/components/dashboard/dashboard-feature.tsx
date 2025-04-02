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
    "5TSmWLQ3gerZ9eRpn8jnAKQabw4ZTDmsxu9Z8gV5fhbZajXDTqgL9LUWUCiSk5PQ6L1mmiMqKvmCNiXFEvZ9VrJS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MUqxAJRnCnuW7c6o5FvuGgWJ18R1ExcbwbhBDXbCQ5VAv8PBcRwY9SNbd2GxQZiowLhmQtZ5wV6CmbtHAiWVMJb",
  "key1": "591th72aAWdqASeyBNmrav4rLCKdX1goZFkkjQyxPpi4X6h8i5aPtbnkwVQxkWSff9Kk9XWDPM57t2m5BRGBTeyK",
  "key2": "5k1TKyDu8B6Mo5fyvxxasTPJDwZ13CBxfyNFfC6rfEuHgetw8kaVH3KMYRuTcnF5dh2cj4jQBcWbhNsoCrcmEzXU",
  "key3": "3TbUa6BNC9eeZGD1H7bHUALkJm9srhPZWsuPiAj8tRXS5JJp7FRZnmwodaJV44emjPJoz2ZGrGD9fth5oAnsZXVT",
  "key4": "4QcaHCMSq4HD37ekYBcXdQUEP684xJtL5Y967zRuCoo9A1ii2WEe3qeKpVTmtkVWzYR39hP1a6Z54BSA647ukoV6",
  "key5": "5Yk5AS7y4GfnMhmzoGqSyrRLkydCbL7QmZVA3pXe4NV1wZ2ANdk6EmHgPSGgGEz5Y3mhsYzgFjcdTbGSFfN3CTcp",
  "key6": "5QvxJzPRjnRPGsf5673LiPqx2JJVdZzH5ZCKzuCkb8WzPrPYeQRGr48eTtfa9p19LVFd1pkL5ZgMxVg8aamfBoMv",
  "key7": "4rPYSEzbFwfQjMLgPwH94QYfowHpZjQwq2TAQDWRuqBNUtW5wEPDoHv2zEYfqoipjEkGgBJ6d254QjvzKuCB3EZ9",
  "key8": "57uam8Pig9e7ofQHtU323dA3oGeX2GH7tbHTWbfUKusxjoUyFDHuZiMC66P635WvoTSYVW1ruECysvVaec1oSWjF",
  "key9": "4f9SZ43D4zvMAsFH13MzpLF9vkpWjn15hPtL4huhT58v1kAhMAVDRBsjzon7xUhirB37SktsNJMDJdXUXhvPXuWH",
  "key10": "3zaK4KDsxuDX72w2Qz7nWWRa13v6fXpSYeXq6QiWcnxWx9JWz8jZD86GM4Y5QifuUewY6nr7pQo2KgQw4ZEe3hKg",
  "key11": "5kLLbtkkeGnGsJ6xceL9srF4C2XGqz4GBJcTiSxwQmLqYuKkzpC1J5E2DK7xQhuS4z7TNe2BShf3yQ4D71XzyYSM",
  "key12": "axeZoPJVBh1X1wM1jBRQAmCjsG1SGNP9Z4zihUiYXkmYRKZYqRtoaGDKFJWUyLiZqaiBPp5bWwLRLkuMWpvwcd2",
  "key13": "3EYn6pLH14qAQCCGiXkKvnH6GEhauwrQBbGcKvd1MhzUXNTsyZ6AUrc99c74iFM7Xm1ZXDr2p8QoWwhZ8Y3SvnfQ",
  "key14": "68daSa4xVFvBvY9rEwutJDDT8Qmsa6QKYhHm59VfZDeUcpsPJFho1KPipSniMZXMSxe4e2A51JUr8SVKoBxJBma",
  "key15": "3CUfhvcUgui57EB4kQcaiYNBu14dyDSfn8zJxwP2JV2ECiExZgyiYdU3PCRfkgk8VdWk3XSy1vmgs3dEDU6dEKBV",
  "key16": "2k17dngarv1r8iqcYFt3fJfhmXWtUKkqL9xRGvdZzYXup1xDVmhBs8gahgMvjEiKm83z1w1RRmi1j27WuoscHYMa",
  "key17": "tJ73ThnY7fMZoD7tH9ZNms1pVW7XkoTNBG3XbiXL1XwM6x3BP2Qy1MBYxiR9PMVRzJr3W3GCUBXmAPYUYzAhi7b",
  "key18": "4byENorsjGjZZWWcfpfygtGDxMr8yD5rrSFG9et9gVezEcg37NA9jqT5HqygPiXfVByvb8noZp6oT5fe13ktWD95",
  "key19": "2zNDmEqueGnuP8qnhnTCWWFXWDkLZf4XzKdcFhZaYHRci4NGh9vZNevsDp1zUXP8VgQaa8KSZHqU8rzBdaCSMVjc",
  "key20": "322Bcx8KZwvZG5zFaT8KsMUGCTgUuo6djGDzoyHkjd8oaqu2AywwZMFxkkenzG5rLtmCh9adrokwBcRVzT2yVERe",
  "key21": "DM46h1H4WuMWGxqTFjE8ascrJERrHr8WQ1NTq9rZpXFs2dVrQXpoZPE17gtUQZPCmyh7FBuchNHnV4dkJjjuXKE",
  "key22": "2ZyBooVsrxgZW468A8uJw25MKpncqehRxurYiQm61C3kbHMR1qKTGVy4THiwacH3woF9HXQcT5xCbJgNswv19TD4",
  "key23": "33acQ3vg2Rv9hEjzSAS7bLf7fEV63KzjiRbYkWAYFtLKZw98VzMo1wrDtxsgprsXwYz4Jp1hNiK6WExFgaD6Hc5g",
  "key24": "2yUETGgtHDq7KCUPveyHs1Ghkwxo91fMexeDYtKEAkE94yXgxrpfntv2ysUnn5wA74QckWKRnNtdgBG9aWHwpfYY",
  "key25": "4AkcKFhctsxtQRgzEbFqpPWnukripG2VAxqy3uMv3YEeonGxRfdtSG9Kc7VXVpKmVdhhQHfKZ4e7Bz9jBaRrBDYw",
  "key26": "2di917nBNnNVChtw4jx4br6Km5aVBwHTS4Hb1McTvqXpthMyPNm73VqvLudG9kRHTYfb4DBM3fG2Ww7dvvjpy1Vb",
  "key27": "4masEcdHzohD9iu2Haj3MvDqAfLNtpfr7QKhaQSu5RrJ9JRokS21Giku1mMiYHExTN3aFa1Dt3bhxh9oXpxj7cMF",
  "key28": "4soGWYcCgeptbd96ZPVynJ58WcYAsUstjLeChSsscgx4nFYACTQMipAbhB5aBE6cjquAhiBMP1ow538bjYiQDRqJ",
  "key29": "yudQ1c4ZE3rE3GZCwZgAYyWnxsE3ZvpTMLPkZxUsAxhcQjufhmtDDRLpcnysYovvNrLzv561UQv1coNLVxJ4Z4u",
  "key30": "5MsqFM1jP19uEKqbdK8dA1HibdATQTZLnmBdZuDoTuyHQ4R8axUrR2R798CRGPmhoxvuvNSccxxZMd4B3o9FcrEk",
  "key31": "24BE69aDpknYmrVa2YJaBxKiP3uirvU2jCWU5iA5FwKHPLuCKS2AN1J7WqJeMfgWLET8eVtigN9c6F5WUXLFAUXx",
  "key32": "4y8ZgqCJyZ2Nq9uMaNxZ7PAYqKLtR2A5DgLM7HNSciqFLUCjQfpGiLc1BsPaMCN5CmXGaghGo9xC2R3ipgCxjxdJ"
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
