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
    "ULXUhGBfRwytQu6VixKW4tgb4T3xHJznLktPHR4AYak1svN5FwpXh9USDhE8GwuHLsm8a6v6gfB4CzdZ66uRKJE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qhZy83xLC56iG9U18eCbq8KtPRdnPQBX6XsSS9sg5i2YFPyojH3VBqRrQoJjJjpgHaxPFwnJtL7tiR4eQJfJo1j",
  "key1": "KYBzqHwptnG45fsFDybyCgorAiF5hegKRrcTH2ZLEcaWdcrN4me5QnYY3vtzaMdUQjo2oDRmLahkM76m2h4qHuj",
  "key2": "2R4X5td6hJDFSwezNZGh1R1scYsS6gXu51g3kW2GHShfXtBrrtwSpBVUpaiATzKjeKidf75nRRCpLWcutXDcb6fz",
  "key3": "4m4ZWnbyh4LzqkHpk6GDJBjw3pmdwNSrQYor9j9mwu9JPSBXR6u7m8YbVUiuPAnhJZcAWhqDARaRu5TfVfxE8hLc",
  "key4": "uRFYMPQU7z1m9jiZ5XoCHn5ZvGvojo7fPKFkgsi28jZvzo7Pe9q8nADYFigvHZ3QBXmNeV6cVn6S4ocr9q5kyGF",
  "key5": "2rQDFVkU6pDBZSBhhBhushjsnxG8Xwqv4zv3CfWEuDUvE9KneNUdnw83WfLnpGxtM4yt5P3txr9SZHt7UNvWM6Z5",
  "key6": "5EQ4b8r8jDevXv9PRGMQ5UkYjzNy9jJDRLpQPa8uqoJoegPJcmzAbFWo1gfkuYXp6E924xsM7WfFBYdCxUwdbGi9",
  "key7": "24tVvPr6veghfHXGPbGZg3LUwsqQYw2om1G5asN5co3gDWnEkBK3pCBR48htqs6ybKkAyVSa1buFyboPnppBn6tE",
  "key8": "4AGo1FXQGEHJoWcLHSayvSwswom1BdYKgJZQ1LigNyyRwuMcXzVoo2bkr8EBCzZDMk1syEdH485f8ysHWssuVPpr",
  "key9": "51nstH4ZygiFiuHq75vZNzQdbT6isLwxw2jUiiiL8pQHfKQscGMX5XoycPca5upctQEe1wWmR4vK5sdDdKPstmok",
  "key10": "2tznK2c9KwLQ5CnFcM3PkKohj3cb596i3ZnjPvhyjNoptCTPhPwXbp8md6FQ7Bp4sqphzhrsS2jfncvweYuAMVac",
  "key11": "3hPxzEMvNhHfk82XuAVViTWWbwiMWT8Ejvs6BNMa4EQnSuyBzoY5dstfZsnQLiNa2DtXQqntu8tUEeRd9E5ZgvSX",
  "key12": "3byxKJgJdoooFrWyTAuPyNm4i3KBLFvHr55oJqyxCgdJHThDFdPFNSjCWUK5YM8Jd98uKANRuCCyffXes4ZfTC6Q",
  "key13": "d6HtsRvCAeZcyAi6n5NDTNV76X179T7iD1UD8iuFY5LhBLRXPiYL7bvPKU2wBZfcXoZeJ4KsKPS3zRoVqZ5mtaN",
  "key14": "5dXYxzrS2qqNXnHsKXUGTcdktmfCaVgQ8Y5eDriqCZkLyAHZoggx2niYHZLRsMHD4aZ1iAPHzumaunT3UW8ViECr",
  "key15": "2PWXQiKJTADCTCwhWusL8p74aSCLdgjfGJDwpf89anxPVVKpApeinryZDsGyzNWf2Js7PBWrwMQpdc9A5ea9yhQP",
  "key16": "31wWaJ5MwSmbK8goV4PYf9zZNXNJZZkC39nJgLKJ6E8wFHCktrP5FJfKmfZpe6FgxtHjKqHBhZeQvDYsqfq6XNfr",
  "key17": "GyGLcdzKr47Eo7Qa6K7zvduTwFroAvG3yXzLpXyFC63vAtgF54UekR4YqhqRLg6mEBu96NWGZijugFzTMBBLMHf",
  "key18": "4gPDCpM1JW9iFF7WxyguELMRmxKBBKh4i8Gm1mbeGJ77qQTLR3cZYNHMG61EJWWdNj5XPZgrXQs7sUormJmXjH9G",
  "key19": "3nFLEfgmBNvJKbXS1R22QTM18BzSLmdv6maEDde1i5RECvJ12tGbRBC9EoPFzFokGzLPgkE3VnDzbDqFbUZcYrxf",
  "key20": "2ovNDLpXnj2Q5pzakVYmoRHWD772LDJEKbL6LMw1tpXaS4uxFe5M26spk8gCWJQKjSCqruVHL2MbXNB4RQzEykSg",
  "key21": "DKyrD83oamFYWhHYWfWyrvrjJhBnCSJ1DxN9LtrqG6R6cXCB2P5wE4X2Vw6tdSpai3J732p9E7GKSJFugurQefj",
  "key22": "x78JdN586TVRDiu3yB38ExC6dQbwqqnW9NLiKDi55rWSqPa8XSibb3sitcr8WHywTHfbDJenQKh4pJahhZmxN1Y",
  "key23": "5YEgYrT2uGam6qsutJdsW4hXfVhPCmnLtL39FMvB5sBb3AZC5puh9bv2sTJ1K6MorY8o3n7K1Gc8JCWTXzYWYbNZ",
  "key24": "b2dyiYKint4BXohxvb95Pvyx9XyqZxFNyGeKJgQ6E5gfSMmepYLGTnXquE4R8rrfBFi65nHoZxmWwvFv9L8KcTi",
  "key25": "2CCQbXQQ4PpZx9y7KQyebF4csuQfwpd6kcswTxZymB1aov7rKVHNHUks6q1m5Z2pXEdsE5mc37BgQS73FCebN68y",
  "key26": "4C62uyihsn7x6fBFNyEa4T3FJhvKfruKHk2GCyeaNwUbYrGUpYMRz5ZCHttavzDfpiXNNJcnQyfhYmqF5zNyEE7p"
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
