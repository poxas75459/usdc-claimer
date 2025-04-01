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
    "5S4NihwfiJN9uC6n15yfdQM1te7fiJwkXtFryNFb7AxZVe81uQpVcE48WKsHuWTSDMvUFuDBWhCJ5zRMDXHKuCx2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hpuBdcm9P5QZNbUiW9oZ3sRfLPvUfajAQNY6UwHqnooPQcJZAcrWZAD7pSWuNpn6sueAJFkBz4QbvVmnB8KzZ8Y",
  "key1": "39iiipMcu8g8FTpBfuBMLWtgyJeK65A1Q21VuHLbXG7sjC4wPxmhLiTL8Y35a3akLyPVc9YdeceZK5QMtHvQiF51",
  "key2": "41ZMYDsYFaEPq9sL2hEDJDunCnaC9bkQk8jCv91vkkQpRry1ZekGjRvq1SMbYTbNeP5TM5ukFDcuhssDkr9tQ9DQ",
  "key3": "26EzGvXdUrAxhrHd67cvXHsDH8H7eVfgrfVjwwo9ophHpRYRrrUVDXfiz6tszj6tqr8SFToZZ3VPorij6TtxMSGH",
  "key4": "36zdAouszWVwxtUu44HXkbrZFunkjwhqQC1SGR2MfipRTko9AqzN25rU2YpFi6Rh9TmXNXt615RvseFwyhoonZzT",
  "key5": "3v91d38Anj7d5xy67H8MUVE6YhqSVEgak74ThYMXGB8zWacEdtM5yXsjeVD3qgEmF7JEMfZDLpEmKnB5o1yoQkmn",
  "key6": "MRyrsedT3EZQ9hmP53hzEZinp7ne7URaasR5iFxVWtZxGQKDjWru6SBgzRaC1BdqPYrsnBj5r5E3SBSqYxbY91x",
  "key7": "4jLNX2Vu5ApwqXitNvivc6pKJcL8L5WgWiSqnwCuebgP3P65Kbo9poTZVyziAnV7PwaJHtXVi7LCsPtHras55wTW",
  "key8": "3Rzi4aAvbFSn58ndDZevnuGVJjh7F6ZbmXQDvXjukrJ7Hy7G3ZGgcdTbBv6LCpqTWmq5vZxWo3LMaEa4fDVLSzhC",
  "key9": "oww2JPRnspvbVSLTSqDqB6NryLjwg7zBTaJ58uDbhXedJfBP4SWa5BDUXboVCMLDEFprHqLa5kqYs9UBgLgbxHC",
  "key10": "2XVmWfXDkiy6RADha8bAPGu6Vdu5vPCCzF9soFT2EfcU8P8cmGrfy6WLogD2Gvzqwdtbnsm6oedYpNWV1A2G82Kq",
  "key11": "2GpEzmcjJXj6RNfKyrVutYNKsPi9yEhYbXxSoUabyBWXtMmY4a7huEeSgUwNiMJXBySH4xEaFCzhVfhDnnizKNkg",
  "key12": "4FtSwwanUmPkyx8DoVpCm47ksiLw3GK54efUPkcq1b6rTAm4RLpoRHVFEwSzT5YgXKixdB56VMfgXV8HFDayXUFg",
  "key13": "4sDD69t7jXtNGmrgugAHiKWTTHZY1rcRPAr5ZtYKMAatBzMGtJ71kf4jfbrJcWMz3WTJAJ7BHZWsGgqGcU343Uyr",
  "key14": "5VT81YmqLUVqZPJx553QPLHMLhQhokWd7wPfTPXb89s4caNEvzP5uCAfb4JmqT3oBKsX8X8SwYP2WV63WNXwY577",
  "key15": "ybjp2AN2QENqwgQzfKQ7GcmDxXPDfUqMtnvCUeamguS7ZiTDNjUPCY5ca1rLvrtsRZ7QzQ1tTE5N4MZE2rnZizi",
  "key16": "5Z7GGYh9HaR42MV5E3kEztDy2gMM5yXockTkLyW9yLsd5J8hJnDPGpys5JBKpDriXWTMVzQnx8nMQJb9rUNcRPty",
  "key17": "4a8Dh8HKGagvem7JwhCcwffsGgXpJmL9SM3QAwAicxiUnMtRiTGtKqcHGZorrJdN1rDZ61Myv7szL1SVKVpR49QD",
  "key18": "2HMd9ZQ1CdcyBazixXgi8u7F14wZCLUGMt2Ccdk4qt97tW7cqZwahY8N47v6LWfGJo9aAoadd1zc9z4XAjGQv7bf",
  "key19": "xYeE7EfLwJpSVfbNza6Yemq36ALZksDCNGW2QaPAaVE9vi1vXThe1MGV7WoZmmPKH7S5FNDf5KxKjVVAxLuPxAP",
  "key20": "4sUtwkb3PZCLEPvRvTE7a37btjq4yQxq5gKjQwDDis9LJYx16ASCjnoRka5s1r7koTz7S73BSL9LDfiC8SgDzdXB",
  "key21": "4q8GA9D3Hn9zzY69aL9vjGzRvWGRVtHLN7f3iahvbf6hK6zrfz2rYpXSdkpoQnkpp778Rk1cyzQFBjsVQHKpQtaB",
  "key22": "555vPGF4Toxh9WCC77yjyBTSqH8KNjvB4MYn8vmruMd5u7t2tzWRnnCsdbZaARnTgT6FDe8NhJAiXwYf4TMzJuDE",
  "key23": "2ZhGyCT98XeTPs3EypPybhZK8xM54srgQo86TznJGXT6bw7LrEJm3sxVgYGCCdEPHdw5uDdcKEnBCzRWRvYpwxfm",
  "key24": "4SeCBSdBq71GAMg47cSydNuXPjkTQeZ1nfbp3amTsE2d5eVnty4CQWbdaWwRh2aC27XdueBeYmbNHoyfsyEWSBgH",
  "key25": "3NmaZNEvMcUQHKrYi1dyEwGPmeQcreitK91ZYE81Saa9vcYkcjnjnC5gcUhEVitwNV4nc3qeH5KaGyimAhPWxKhS",
  "key26": "xEBd7VWtBowQicmbgn5zjtZ35TiKxSjzg2NSSD5wTD5repduQWzGgVFUcrKE8Kef5BUkDcP5YnozsKRcBJhi3SM"
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
