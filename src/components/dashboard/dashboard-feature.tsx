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
    "z5KbBLhATSTG18F5Tp7i2JLZKKUuoscujzH1M7Q497EUmAKQJqoa2HQe1FT3zVqY5ci9jU2ycoUapg4LsvvUHVs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pNyeYcBVUev1MmY3jyv3fHXnwh8uN7FNWnzKNN31HTazVvXqUEG8WN2bT1dtM9683emyMThiAdvzkQFoBzXVeNC",
  "key1": "yMQoEmsKeK3BqMwnL4kvMDhDXLD2ePDPkyG71yiZaa9pa89FmfuFUvJjSH7hxq3n9npRkqg5eU7kmPobDRMaoX3",
  "key2": "3YWPahsAqSUW4iPQXBfREZoAnEkUx4b7wwRAsmrxQLmKpYZLsMAcgYLC9LTpYVkURz7346qNEWSqMYkAd6GC7oYg",
  "key3": "i62AftJmSEdCengtHfi8YgVWnbKz5LQmHfGzVWbU72tFde5W41DBTf7mNEnHXR5wgiYDGxTNrF6QrS56DdNZPJ4",
  "key4": "5Pv7D8JMoKyd4mfLaiN5rjvxgDfkoj7gBGGn7w91qCZboKHba4pKrzvviWhFNa27D111X9PPqBjertsHT2qgwxCt",
  "key5": "5yeEga9Bmb5Bn6DdqyfkBygpTweEzfZ7GVZw6YwRD94DKM9F8ZokxRqFQUQHhvNJw88j4Ej9Ba9JwQ5mMfsYcq4B",
  "key6": "4F8HucqhjChiG7SzK5tSdmUNBiPXWaNVnPhEvLw79ygVGo3kBV3bsefBRpTELos9aicauQ9CAjR26pMMhwnf6yxC",
  "key7": "2oUfdgdkiZa43cxrfhXb3cfsQwL533KK7jCk2BM2KCYvWkVyeC9WP7xeNuFDtkinrkohZbsRb81ctwCU9oUKUrbh",
  "key8": "eRRr6fLhxTANQwLbxJ9FtNVhkw3gjrQfhib4fdSEXnAZud3kxN97B7jRKR7tUX8aMR6B63cqL6k8iJ3GTR2wj8S",
  "key9": "247RqW6pzJaqKH6RpcVKhTMVz7cJgwX6NmxduL8uEC9NzPdZxX6bGUBtnCRaQKC6zQpB9ScwSSc4E85LR9iK9kQF",
  "key10": "3SrkUpR9nfseyC7hXCUX29uAC5ePCKyoB6vWn9Gc75h6Q9rL8fRZWpw8JCnawTncrtnGSSNxRPV4HJcoJom8ZXex",
  "key11": "wnbdNLqUAraJEQZATSozvHXankzgwbXaYrRn5Dr58aZjcXfEq1jwJv8anmT7VHgfgM9qmsV1n8SvK31qRwYie1t",
  "key12": "4FpfREgevX9KsgGZgr4Sy8HPh6L8BZEJkWy7mVknLjxz1yq79TPPJ8WbAkLTU13TKLXnVRmTG7SD8LCnv4aCKfXW",
  "key13": "mrSkKP5R62m5hVEygkGDfZWTEd5Df55CUEkiygSN9DMoiyB1ddxLUJbxFMhCtwE8cq4TcwcJeSJCSQixhFMKRnB",
  "key14": "3ikyEq3Ye1vi3e27GvfoWimdKF8JTVftrEe1qgqj7JeiJ4yAZQ3PgMWiwQzo3BmabMmEg8Gw9uCkXVxhbfneBALh",
  "key15": "2tcSe9DXyDnt22bTh6HMGEQhXXBWR67JCZkyZwbMnfxK9iZejozjgp2rJiY8KRptWNYyHVjaxHXKeh8YUQCd9zNG",
  "key16": "4Z89j3QeTfuWeC5xMMfuESY5wfqVbCx8CcZ6mKvKFDevhaYYkezttWRFixjEnGrjh9MqScXp79wLJARmkkTMsf8o",
  "key17": "4hyXg1pba7rynLerUsHzCFP6mhETzd4L6iuzQxjBMzB9S6pGAsKYtBUU9JfDqf9yWSaWXaEwGCNJsREohBh2fuxh",
  "key18": "tDD69yxwmSQVnPoGBWJgrzJxbXpTcMX1pEcV1t3pzwTAWWvSqwxfsShFa7wqeTxrVasPdmSwpjmgkhR6HaStWnF",
  "key19": "4EHnK7Uwigpr8Bn8zu7dh1fHF3dRbVAZQd4GH9AQcnXPAq6uPTzDfmDrVrnxkTHXPtcqNb4zoQg9TpDimmfN35HD",
  "key20": "2f8cHzuR9cQABhzgG82YyWiW9BjfffHVzwHJEj1vGS2CZEFnfwycBAYahQsEf8pmb2Tzh2dWahmmCMzMRP5QbRyT",
  "key21": "V8GTDgadCcqkiSb3nMsTpfZiuHLZLuYjh27DB6zshtTQN2NB8cBTMr1HMFpQ7Hw6WwPqNDGyVfYWiRowRkcGBsq",
  "key22": "26KMHKpu3axEfq1LMgaRKon1etT4j5KpWtCeXHKbLdPGByjGcasrQcXEETh4uR9Bkyg4iioZULAsMfx6EFrRd7oS",
  "key23": "56xWdGuxdh69ZNvvZnJBt3tQ8o4pVuTrLCUH1r1H11gDYdeE4B4cjd2Pv9UibVkB55xRpfkHeRw4MNF5uzR2euG6",
  "key24": "4Lnc8TxmAXp6UkbW5B56yT9PuJq3HH6VW8fxsZueFhRm6mNnS34kmyRqMnZscXEVJT8rVTkGDo1mJsjhfTgU3Pcg",
  "key25": "63yikkV7soBLVMUCd1Ji3G9NTrx8uQBkYYY4QrpSM2UGWwBKvQCBem51YSxYwLJu54P9rUVwU9Bn6SbfVmvuuTDA",
  "key26": "vDUndqcizgjjeaYnMiaXKa4j9o3GdT1DMexzBjn55rzq68PtPfJnqpuTQsqMNeHWiYbrQmbMRYvK2kKo7LCqstJ",
  "key27": "26Tzn35ZUJ1foSFdFE6Un4ooNUapijMdhqzQZLiisTk3nGVDVzhHKUfcpjoMi76aU67PVhnsLW3YxszCH2MjXadA",
  "key28": "3RJWGYnYeGcKsFD6PLmqpTZ77zoV4Zaz6z2P3DHV298voGGJaUJeThWdt5ftgWmAf9Ebcqun1W4vKxvZTT2C6CEC",
  "key29": "2vDbikKQ2GRnsUpT5sGuBMBBkkSeKSyNALXQXUgKMLq85p7cmD3ymHT7PJuDyJekgRNGZmVyuLwz9R698WXG4XQv"
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
