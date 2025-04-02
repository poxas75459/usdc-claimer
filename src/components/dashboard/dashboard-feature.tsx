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
    "2tShj3j3YSaSp35k6g4sMAm69xk32Dw2M1FbnthNLSauWS8EgovU5nmKLPcWn4tj1GueAHf8Y8NNExTfA9nhGaYQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RzHHJYAv1XSd3wruBBwU5cdj7LhwwWXaouG1k272U3iht52NmYv9Q2eZ4c8hrQoajaxXQLNJ8C5Aw2bQ9Bc4GhC",
  "key1": "5DqQbyceicwSpWVFSuXZNGyQgtPhwtsgo6iwRzH6DfHp732TaQsShS47WWGP8EU4FrxoFUBVkXFr3WFrpQvvgdAm",
  "key2": "3eomRbKt5v8qpeAP9efJ6J4Yv7JDGEytffpWgs4Usk1yQmEQ1Azjkf86RKkFF1YfewAYnu8UDpDSaFXjbzDiDUNs",
  "key3": "61oQiSSGKgKumE6ydKYPzYn6AuLV4auCmU6fyP37QY4N8xznzCsj87aye84co5QsNfULaC2cRXiQo9rgbWtD7gCi",
  "key4": "5mmshSWkj1QzdqS2vN1b6UduKUZJTavAx7k2RFFWyLPHpAZBFJrLVDP9EHRPeoLeiMu4o6wRa8GwAC1NcSaHaXSP",
  "key5": "4vwMfkbECL8Z91A9L9wgwCQUD99hHBwEEKNBAspS2rV6fYajiVEs3H7oewXz1ExntLvHHRjbtooj3yCSVR7PSjwu",
  "key6": "2DE4mR6GqzHUc9pwsk5ym6ZopouqC4Zppt3Y5ZN3rdZbzhvqNBjZeZJctVDZ4LpN5vKFVq9u6jTZZ8NWB6DbY9mP",
  "key7": "q3zbUvBFdmjmdx4NnumscPv3aZYXrykJxoNLaGywxPjT5uuH9hr6TK6FSwxA6M8szRVBmKVdCr6JUk3Eb3whx3c",
  "key8": "3G93qBx3WqVhxdvpo5hjaDtyqipFWHaLDK3QzVJ4iELHpyG2HSGdMUGtLkabVTFArdBHBpDuQ76pVVo7dWUCoRRv",
  "key9": "2Eevsx3RsK4h3cdtgMgGKNmAFNpDkd1rzDDVadvjDuu6MJcuCZQLyHRwetyyd5GiFCt8cmBbyuRi5M447xXPo3Qz",
  "key10": "53eFXREB8YoFrvwxMLxvV5TuYV4ZRfrTtL6i59WhgRqgc7H5oPhQ2PCxebhwvxtAvt2Pq3EcticV3w6ZEKdrn44p",
  "key11": "2FsasQ5uoxnv3DSawVNfBExsdAiSeanzQ5BUu6REbd7BN5vgE1GbRerUsx2K3LRx8pfCawG55rmEuybjKETCtD8m",
  "key12": "42qJNeL3yfZYzEJTJpx9r95eRwuCgey6QwWRc8rdKXkKqxWLi4VirMwcirxPM71VrzeMvihSjY4CUPVTjTfjNjqy",
  "key13": "4fa9vu4SfpXJLUCC3LAykwQs23nEVVxT42ceASV1iEgo6Y5tgx64TtjQn6NDkLDbpJ25Bte9mutYdU7f9m95BWjo",
  "key14": "53M4Ue23AvyUdfebsJHX3srjxEaJmyTu1KXZ2ZU7tz1geDDF9Nh5mi1Zwm7BSJp9Da38UKimfTeUqNPAyL37x9tP",
  "key15": "23TCRJ1tTSbkEG6Jh3FY4gGZyWhWEd7BgpYfPZysxvtBHKnRkGRzTEZB1UjhskExtt7vkU9TPx2oCTf484LGmts7",
  "key16": "4298n3Vh7SgLXBcKaPUgbDBRYozLWDaHFxChVCWkttM3cFMc1NyHabiASaXXLdd2xe2csKtFMUZZcH8ffZbsbXZ",
  "key17": "421TUm3eADK1hwS73yEDYnti7QwNyTJ749pVqBVyvw3yhUrVXtqhpu6MHkFKDc2KyoVMaaB7sma5Rs6Tz8HMcT3W",
  "key18": "DE9MwS844VeMzQDagFmSKoTgoytyAAYgvvSQrhP7kK6WuaH5QXm7JHEcN99WDuMeEpxFB66qJozhVnrcfcjRVv5",
  "key19": "3UnmUeo9syUMv9cnZ5fjigqeKJCG6HRAPy2rZmdEiDuPjD9Xb3aPe42i8Y5dmCWW8RHo8bgHTyn4FMcJrhtEY9ym",
  "key20": "3YuGADnkkLjfX4dxkmtYhAdBGbGJDY2goEfmRUVMYdxHwySUMPMdjFbw6wNQUqFRpmAH8RiCPbU97fW7zjwZR2fb",
  "key21": "2C2hWkAMcwqcPatZbRdnatogwxLoQUmnGdyEVUnh91qd3Uv9CbiszFNw16iDMdESWjzcTM5iVVEFEgdQiY7pWtEJ",
  "key22": "3swyEDcXDpVnKUJPQPtMz48GwPncrdHLcJgpMwjK8yFsCaREftqbEZJh2mdgTKZsBevfhM5agropgc5Qj5KcmkAM",
  "key23": "KfN323tpL5b3uJRWUQKFW2Ka8n1gfQVMqujkHGTVFDGiSgc2jaiKHCUJJiqRD8iHbDvZMCihtDjYFcGY4UzJb9D",
  "key24": "4hLY8Rhk5jou8UdqbY4cXRAS3cpiyounxwSrBHAYsEzN1raAwDx3dC4muDaQGUutzDg4yaAeMoJyD27UTKeWdyF6",
  "key25": "5bkWHWMo7sJDDZpT7URfjhZfQtwajfoZdts1UhGdtzvtDsM7wWBhvVq45kvb1arfbWzqQXeeK2yfW3rS6eTJRfPL",
  "key26": "467BT6JR5AoctpSLqvVtDShpXVmvtxgHaCTT22YHrEmEQQxvJ2XTbRxTMoPQ8hGGQSjKpTgEjyKC7eCfWj8wQjSG",
  "key27": "2YVXgp2cbwFtp6X4cn2qWDtGf2ngbBFHzbrUnSNHFQJCCvGPEkKtZujBstf5JtfnJmjvAQKwc8LTo9tpjLX1NxsF",
  "key28": "4znVMWEmHcNU8CWcog24mGL1jqLPoJLb36RRWXW9GKuqQYzYzyXNfCBUGC1cZ9joJzrCzDDYxjCxdfUj9ehQEhWe",
  "key29": "2XF51H27nmLdvrvvndmhWyF311grPY8dVKwNXMHcQzMUeNzN1w5ZCyDgkbxHKiWuiaJaW1zwUGxPox4n7cvotzCQ",
  "key30": "5d2jrGUFrpSAwjyLq1f9zg3KjD19equX9QZWxAhWMMxjquoeFz4u7K16q45WqiZYVCr8vzH8TUAW9Bauo8THPZNa"
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
