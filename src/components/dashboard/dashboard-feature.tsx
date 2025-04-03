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
    "2MqW6zLgXeDWCt5Hv8sSo5qBuGAK33RTKRAJY3V5ixEPwqCGs2sk5MsoUSLeiBb9AT9eHPX99JftrgdzS7gsvDBF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Jfgw3QTL4QWxt67PG1yS3WzCwaYDtPjPHsUhFH6VojJ5v3G8ugyGPdkrKYdFP9DXzb6KBrKox2WApyS48VmdoFC",
  "key1": "2VYvjjxWotdd7io1iYQhkxuaYAtp37VFz9VRsBd9iQLt7BFRfnMKAxpf64PTyTAkPmMQfHx2661HnrSYFCFMQgyb",
  "key2": "3B2mXRjdXH3EMApWZXF44pfbYhyZnebkNmswTmvvBkAFLGDCjqWjbiEg1dVrpSQCgrveo4gpFgQfWZ7kj6sbUhrc",
  "key3": "2tjwbseP9Z6PFdiCKEQV8Mg5ZFTAXBTLwCTUZWMEVKS98AoLSMWQdMjqtrYntNzd1fPyzqaFs8pRxqcZnPhwKgLi",
  "key4": "4qaZc1P9NrADxeRjrXeAUDKFJbp7B2pYHuNoMHdYGaPhA65vHVGUYHTwzhgVrU8jRo8qXLQXyiLb14smBW8ssWHE",
  "key5": "3nH1CkWKdawyV5dMGZ8QbVC7JmK465qx5asbebW2MDZcmEke7LcZSVM4fAjxfxuZ3hRxUjeTRVzuokCKuLQjLUqR",
  "key6": "23C9Voh9xF8o2uGkbQckCMvG9GGdfy6cwXyrn6Ba1SnzLnKTeqLpSwKa1yt8CDqvBGA9o68uhZSC3G48r8USUzrF",
  "key7": "5PEvzVy3Zis7Ngg2XPJJUh2THJm5kng3X9vxxHJXV112onSJZG4nH8aSSUKrUWyLQSofn8gMceeNSorLSmEzMQBr",
  "key8": "2oe8gmeSe3r5Ka75nq924XgsbEKCQRMTMH7xM7nAXPzF76w22CVesQ7EG1oSrMvnmsfa5DHomDyPshKkivtAznZJ",
  "key9": "Xg2uZrLEfzShkB2eRgctusA6ZR33iXmrAbgmX1C4weSDdjrc8ftqwLqpJR7kREfav8GSQqnV3WivmaCykcoM2PX",
  "key10": "5pq5MYK1ZCMxdcuaMhDQopCFKFwL5jwDid7yVbsA9hmkwwnZULErHpF75p5UWV7n7H6B7HogjGZbmTsFckkYxs2Z",
  "key11": "2qvVJh5eeJpST4Ey8JYdbapV7GDoKvp287PWWZ7cLEGELjo1Jxeb8xRkWwmgLW58MLkvk8364CjaTMKtPLuADyJe",
  "key12": "4NwCEtFvmKxnCK2FwyoD2btNvxxWiGBrURxXu8t4yZYFmSDkJDyZoDaFwVtoCARAwsSVmB3CKgYHpnYdBgESYG84",
  "key13": "b78RZGHn3sDnPbz6vLvdZiWDv5fT7HSNzjZ3adsFNt54dHx428h3ukvCD5Pi71kuFkqtFsxYbzC2cQ6fybTVikS",
  "key14": "4pQ6m4Y1zz76VahfezaB28xhXB2Vu7iANaSLYGFrznsGHVRqWLqiuvB5rxXbTxCYkBejBvs7mB1xcowuW2bYPTw4",
  "key15": "3XtZx4at5vdtAXJ4oSasZdVzRGKp8b5bLec6AmRSnbWXb7mSoTmrv7YWBD8wmbU8kgoDbp5pghJ3KcNGQtysCKNn",
  "key16": "4pALUVi1XK3MmHQ18hDSJWCroStcT6b7C3yzzEjGZPQAUnAMSxNxeZyVCgUFjmyDMZYoRdkymo6EwaZcZboCmYF5",
  "key17": "4r9d5zfzZtazuAdk1eL3GCnL8UkXdCBU6ywgEKEnP1Cr2pPqiTvkPtTbxCg5sZ5CNGd1yFf6ZsiYw6TfDNjno8Fe",
  "key18": "5zQJxinrK3Ntse3CRBQgioArmZJYNqCuYLiVSNEJQApS8SXH4dBirXriYRwCCi8AEabu35dYNqKfE6VfZAZZkz53",
  "key19": "4AAeionmvQe7obN6mBAUjHfntMwFDMUJACxq2UovfKnj3apQ5dnDzzodNn49yGcKwkUSkxWePyp9GfU8bkdym9ox",
  "key20": "2Cr6oaDPAaHwQB9k2p9NQ9yezbP8B8QfzTw2cYqf5unnk5ybyZQyCphKvjKdYLp6W89mw6onNoyEzu7sKWTQUHh6",
  "key21": "51NAc47TuFKNH8JkTT9u2pLL4oBhzbiAM8hCf2pgof66pkJY9etkwjvgP94W4zCosHwoHFmDDzaqyyRPMxAS7GCd",
  "key22": "5t2WLghNybmrH63RDdcxgTDgp4VSjaR4g3rmpXcpDaehcTNT2w9jHtzf3Mid85g7c5wVyfS65pqsHGUi1TL7DRiZ",
  "key23": "5uNAF8XjMoDi5faAMbfiUxEPRsWQHYgsv9Q9LSCc6oPuUntHgzBg27WuZ6btM4dMdDfatGhfWB6J89orv14BUSPn",
  "key24": "4kgTWy4j1ZWcP9N8bvF3ZAVLSeXbGEpWq679fy2F8v1FnwViULwmJ79Sk4yxzUE7qjZPXhUQJMGRBWUsSyAxDdEG",
  "key25": "Uth9iuwsmDiARbczeV19di5pRYR1GBBQqtT9vHTC86GHxqJVZq8yhoYNMcuvdY9SJ5zouULgEp4hoeC4FNzFG1n",
  "key26": "5BayWyYwMBzkdunBsVowZfCzhuo6AY6d8j97FJgb4FhhTwNbXgNzDgot38eive3832iwBWHP6ojJ3u8kEpFD46KG",
  "key27": "4zShnypYTyqubHGZrLB1yVJvhwwUfFiTW2oEdJMMXUaH92Jsk49XZgyz9FzwxWD2o4KoHdTgUhvMe5RKDR7UeE3e",
  "key28": "ScKdqtmu9RWAEuatKm5Q1oAz9WKVrMdJCHZXQkAvnwhRK3htQovmPaKokhM1rPK5DXgpauiHc75eQPSDx2pkpyf",
  "key29": "2rS3d6WpFdLei9GpQpXn4HVZrodpzK8DpXdF2f3ihAdzeSPpqTtoYctHXRbtfUCNoc7wxyhDrsEoLpt9z4HfW7BV",
  "key30": "2cAmDk1shTGadF1yApuHRUJSSEP4m667zX69LJxohSLmRTZknaYJVtAPgJLmRjKvbuovAxpdcR5824pq8MH1zUkF",
  "key31": "2ZpZGVp1n9ABF4aPmU2znWrczkUUChvHrmxjWGpLkNLbZN4Pw1Latzcna8oQTM1kTeDvCJxigbb6t9CdfPJq9ZcQ",
  "key32": "3YpqtvCgo2wp3TUrL8DKNAi4SV2caFJGPuSKCBe1isE78gK1HuH6TDir2ANwKtQNF6smhv7ANpUB3BynQWXKqnsS",
  "key33": "2eYmPmZccokDgYoDqsEgvUAY5zFrww532HeiWyWKZGpXYBq8MVab4qwSMZUqdsdai9y9pbjED7mycequZ6HWxqaH",
  "key34": "4eBkFR8DC7BACP3ifGpoieBQzxosV9yvutU8uomxbXUutMGDd5djee8sNDSjJLMUD5xmDqX1m1gH1KSHPErJLRbf",
  "key35": "54c3x9dRFjymjDKVVVujUMM4h16DNJqemqraq2dHqhE1BYij1cjoB7cQJHMEnxxX8kkbF32SztX8xo56ymJu6oNg",
  "key36": "2quj2jEFSbnM2oMogxdKsMTYJW3Y9zH4ro1a8xvEqyEKB9qUPHqmmEgz2NuPvjVGPMpwrSyM6Yus4fy1UgyPYeg5",
  "key37": "G7vrCXJ8nBEEvzHwk58SbaYn84bUgYkVWbu6pcgYWCuceEbNtAptWCgt9f8o6Wi5WwuGtLCdNPxA11LpWoTjwX6"
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
