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
    "2qERcQWE4MGeMwfxet57ygxrBUGuwiHgsdXSecgBfRz1gagWauaJdARrhA9zPchB4ebCxBVprVQAQu7gsY8xf4sA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rDEQWf7a6uDLxQaS1HEAbx93Ppo7yoztGGsec3fAJLbaTF7M1TkebdAm3kU1HdjCaVNJ1YKQckf8zxEn5noEtyy",
  "key1": "53h2G9jExcu4pw9Nv8Whsq3Xf6zDPzpdpLbs9bnY4enyHhYoUFnVM7eNrJhDDrSNBP6KKqbdYs8EK7Zsbjqb9Qxr",
  "key2": "2aeNUVcpvBD9X5zcBRUFYdzGqY6UQ4KuBHmw9GzVC131qH9HdPsmsgnKX75ckJJ17Pnu6WPPECELJ4K2JnnDyTrm",
  "key3": "2VbR6Z3DMzp7zA2LpQn5MXdfzr75GU87ybvBRENjzRfkWxRfWpRcEvggH7zdb12ZFWwsYiHtb36PrVwd1KfngkdY",
  "key4": "4n5meEFtq9PEty8mK9RSoFpXijkq5WNnbmQjStkCiPMNedqGgRd8Ln3BUqmuSwWXgRn8S1wuU1poSPcioV441cr8",
  "key5": "64Y1KPpd66wxTJyQ383prPf35qugG6sw1dwRGirPoeR9Z77Ap5SSBwKXYAKSNw89a6pkfBKmh6QGinazUvg1N9Ht",
  "key6": "TWRRAPprzrYJNj5WuBZnKkRinBEaa7LfN6HcmRhe2Tfc4mep6mpheoKtLpJ4LHfdN6DcuEB1NVBQpg5ULsBiUKs",
  "key7": "qDss9qgYFVb37J1EPbiU3GeporohTeoW9UoGMmR1vG4op3uxeESSweDTWYfJR3XNnsHKsjWSbkTjoho1ckLVZnN",
  "key8": "2mBN3MwFpuggtkepWCLtyUgjLch563mNPkx4QasaSiMifJpCwqGH84nEnvUMmu6SzpDcPsCmiLS92v4wRboJ65yi",
  "key9": "2U326BU9H8VgzeiQEfSGpfGYvf8EjTNAUHJojjC8ET8vRYaRyEDTw2QYyRMH364PUfjp4dC9iy4EWbinUi36eLhX",
  "key10": "2UWe4YfYUUKNzuRPFfVyQMA632RYCeezPsVHaZLKqsD17MLJ4qHW1WyFxnZCc85BPV8wsJP1SPZ3eUtf4LhLVpGq",
  "key11": "V7DXnkqwhuxQv5akqydusVTKDe5BBJn3LL839L9PiQMGg4bYeQMjMcEDDKZji4BMizcbAScn28kGNkXPvAjpQLw",
  "key12": "5tmNB5hXpTEdLcM6o9xZjBkorcXrDFsDDbji3iaqxn6xbjVKg8KPdvmMmuDcLfHMtMCnobxptFyn2szmS7vDrW2E",
  "key13": "bL11faquLgT52D5F6jDgpaAfV4Rb6x9ijrbt1xwnNgStR9ocZ8rW3oZvYAC687AVAghw2neNnmSQN29WiFo8d18",
  "key14": "2TRMtSzSA411wd8iPohCohcDTbz4aXJw4n58gk4jNf2LjfNQWNaG2azrt8Af7Rrp3FZ4ytLRmyh52gCb4XC5zj6h",
  "key15": "3Lqm5dSjtMKEnQMJKm9paYzKe5b3kTucxm9mzexWfUqFkmfAvQ455A15XuqEzLPBBHgFDitLmaPyh6P8VXokNc4L",
  "key16": "37hdY7J7umc7wuUyMEmptUNMXYEx6PMDP3Sy3s7LmM7wJSjsxgS3qmZdrMohG3XURePF9jU5uUmmiC8dzmkwWkr6",
  "key17": "2oj8AkWgZg8K7oCUyHZV4v5nwVySW4mHzBruJkpbanN51ddjQTefpondoRgNiY5L9HrVfqttgmusURWNMUFkfM1L",
  "key18": "i3QeeJKGtWyUkn58nw1EhcVFLLHL3KCCq1mxsVkB6bXWLHvydWZvWARy9XeHJ3fGDDWDKB5wRWaUg45hAgQQ6Wg",
  "key19": "nnAjpg1Fgp2hHyUU9Fjrf5mJuHdVsw3ZJt5tW7X8dPvq6bEggUHH2NjxppKgDAg1sxmh2TyHk86Nhks8EB8gNzQ",
  "key20": "5FMhXKDzTJouuntYN1EUnyHh2Givq9CmiwKd32DoX7y3eQaUE1iYpTCG4pmr4GYgzHQErKPsXG5vj9TRHFEcBwri",
  "key21": "25LuDsPHmWR67Z5REramrxrh2S82XyUofVYTCEFpeiUfpyJawstv77WD6VT6pbh92Pz7nvoGUKCWNER6efShWxsy",
  "key22": "5eFvCk5QafT2fzDX5KDoKbDTXEVrz7DMqVBsVfpcxTua2hKwB8Ch2J8BEdJppCyXUD9C9rtfCFA2gdB786ZEGB95",
  "key23": "43jz7tDJY6shWHi5m1pbXZcHugPwY5nTCCwvJ3ESozzQa7jC28ASwKhSrgrX8ygrWVHMsmvn2neFQaC9HKB6YQj7",
  "key24": "THGBtxj3DwTHZhaKgxsJeQnFBR531ckx31cYKb2mNmvxZmPJWRqghjbBUbC8TjYwL15mVkMnEjhourFTxdXUyq9",
  "key25": "3XFTcYUNCY3Y5mfhoxxpDQz97FZaeWNYp7RVejk9PZTcQqLkx6PG5Zyuja9AtWwR37oZoY7HVVxgou1DvSgwsXXA",
  "key26": "7afnem7uFN9j18Y3fFMp2M9vvWqY3P6p4ZrGMTkMwJzu34CymfVANKDqEDmhS19eWVXKKAqbURhzw4YZ549nN8u",
  "key27": "2mPxh5DgTaAz1xxL146Wfaspig32V526Yi8fC9Z54sJMS7vAhny5U4sMdaGcUA4oHDJE17uWdyfXHWRJJAdvmMWx",
  "key28": "5Qdtf38n4WSjD9AqK7HsdfWqG9Mie5GSuaD48EWTXMELo1YfPjdhevKSFs9iHjJYoPYzYv3WUKya5QV2dtdnfuE8",
  "key29": "4S3BP5BK4kWFMgT8GtnM1S9NR8xhh9AbQE6zknRvw175kNHNF34zKcDAf4dKrKXHJ8ghvF3Ns2WxtN87CPR9ViUv",
  "key30": "5YsVvYu3ge8nUD2VriPfqb7BryS3eKLssze37UxYtZL9bqix8ARXR7Efcu3apo3EwJmAuYWisddjGA8HmwmcKj7o",
  "key31": "21ppAtAjuQpMowwrVogSSPF98j978mQFU4MK9N8zeCzNHraEnyQH5GVqEbbUxFkHkm7ZdXhDfKUbpfSRVjx5QvNF",
  "key32": "34G6FaVFne7PWraGeoLduN9MAFSk8L8mKiGgaCWfQpxtaCBsPZDh2STenXQt13XdujRTA4HCi8znJPn5znMaednY",
  "key33": "5Sa2pbyhkCiD2ssEBBrk9smX8HG76HaPb5EWt2YtgWFZ6wAku1yjCiFxEgswZw6JKwHbneeC8NfeXxttkDJHUTiv",
  "key34": "5LYqw3Ly1RzHmWzdq1hdkJMyAcU9qnT1XUMjjL6PmhySQqL5Vs3zxcFetbjf2Zk8x1habdykkW1CM14osF4Kq7Ln",
  "key35": "533qsu1fe5xaPYC4AYLKVV21qh41Re4TSEVZq3FGyPKaM8xjgFfu1KfMD169FZq7VLCJo1CCZ5z7ZS2gBiaV758m",
  "key36": "2K7jNQL6w1YH568cL6ijiaF6SMREyr1t4mTvCLuEDAmFaSj3sMZptTTARMW3jXmmTX2CkAodQ27MuEm2UBqfEzi4",
  "key37": "37VAyomjmeWV1hg3CYk2mCv24VhAyM97CfASnypRQRBBYdr3YvpLbwZ8tqMq7d232Zj4RdMywzDcKViTkzcPfvyH",
  "key38": "4bBYBmjsbMiGyaFBbdVM24Ubc5R8gwLqfZYSmwkwWnHawQyyc9MVhKpUxEBiCn9t1Nc2RMQhGUR43s3MfFvNekQ9",
  "key39": "5BAtApFxKPUFhS7PkiZQNg6MHVfX2uS6KYDFYVVJPXKBsnnbqRpXqMpotEapHaXTbFRVERudjtJab5BJr337Yg5T",
  "key40": "4ZERDYpxRhzkDtSja7ss1LixePqwpbdq1AmyCH2C7D4SboScwXj3gQ29bLEbicoXpRBwCrySoPY4yuFDHcRA4PXD",
  "key41": "UBhBVaF4us8E3nRHZJKuoFdqzLdvD3WDUoZxZcDD4qSk4PSzhidoVjxXybTM2YAyhKEGdVaYyX4BDP6nVNFr3co",
  "key42": "2V2R6yi6NK2hrQQ1VmfPQCvVFqQdGQa9jtA1JU8vfBPBtzWtUJTZghpFwooS9EgmVbbCKnLEPtHnbsSto7FQLkQt",
  "key43": "631618pXp3TQUs6fiL2xeapue5nbBc3Uwczu1YYXMinuvjMdjThRWsGye9Pv5orwHcFSsTECugz434Pwa4cM8QYJ",
  "key44": "27zreGE6xMHkzssVAEy5S8yVLKqK6R482K1LkbjgZLKuXK5pMmTpcrXa8VYLLwuz3dxgUanS99SkJKv3aSKpNUeG",
  "key45": "VXriVgsDrVFt7Y5kRKB1VjCi9CRNHJLfXk9SZe9t1gD25cVAi7dLHMM1np6LZTTbG4ikBSZVJWVfvnmXzuuRCtT",
  "key46": "3Ep5zxNxDz6PUAtZRyrLr7t7VYkyWVERz7KQ8RPGpg2fmhPEU3quMkLq8anv4KWYBRwDCeXJzQZbUP3QT2dPt8zZ",
  "key47": "2X6q2B71dxqcg6nF6R7XCnrgRNwbRRP6abHqQS2qfoJtUiftFfMsTrvvAx7PmAe5FiBUnMiFYL5s9rWKDf4EKUEe"
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
