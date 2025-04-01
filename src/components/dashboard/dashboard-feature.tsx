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
    "3M4JSJwmq9szY7ZJCK218GK8qCVjeqowZyZYmUdho33XsiJUDT73rVnwVkTaxDdPi2yrgYBxVRknHvjyJgx1Li6p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xbsPnmendGyRm2GqtFL5Gt4LLfRcKq9oi9fQqa85aJx3KZLMqS6BEb8GzRLms7gxpD1gWLGLEvRvpfiLaCnfEcJ",
  "key1": "5pd7D7gcvDjEFpjVAj71W2kwCL9deZkmpkCz6usiYAJxPdrDXLPtXrKbMJk9ytFryw4TkEsPKAFxZ1d8zyeMgnx1",
  "key2": "2Y2dDQWbVMEqDZ31Qgf7FDwCaihH3KiRpmXPk9UHUQZCiXbWgjD8wUoqPd2MAfpiUsbJ1YaafUFffCEhtrcArPGo",
  "key3": "2WNdf8BMWhXjiVsN1MPxUiAPPT3UVeUtVoiKA5Wu6hzVHiFXaQA3crDyYrrSAApy9ZwvgGEwu8qCdxtMKxc9xGmD",
  "key4": "3MeiQx52Dba8yH2Zb9gRuBsQ59rFwkSupxCsvQKwnhUs1tBZ2dEsqpMj3oQiyAfKCVpffMtQRbi67Qt6DPFPzCaW",
  "key5": "4MXwahZXZH7Bph4HkuPqa8TzfjTxvhLNa3rjqfkGLxWJLhK3XNTrXETUZhDfvhAJQURMcWEDZVp59PQ9qTRF8Y7y",
  "key6": "3in14i2AgYmhyunrZHVvb3eCsBqbjWiMdEd2JqgVbDmfwCiN4FdpzwzENvwKdUa9fKUkp9jQuHxvMhvUxaLhzLNe",
  "key7": "3kQ9LU3Xb5834kMViJL7CXRZ4Pf3j98cEfA2PAzmQYvPkkAwLKpAh1rTDHgqD8pjfq8Ld7umVpxd9wn8gmgWMsZD",
  "key8": "ETd3eMhkA48tRq1g6hn2VGRPqEHsqyWDM3D8nxdcsxLptDtqzJuiBRVqejFbFg5iri57taM6WkxuX8w5JHHAEpN",
  "key9": "4vVHGebqQWiLhreZKAMqehts9V6pJkG6fRnG4o6CHW7D7uxRnCDyEUyySyvMD4CJ55yAnW3rRWaGMkvu5D3Qbd27",
  "key10": "3xSHcMGJYMqtsReCiGQUqqGvDBKbzPysTqkytkZfEYs5JnTtTrv2ZsysjwhWTD8KUvz9k4pcz832n5rycJKYLTJe",
  "key11": "5kokkW29CEHKik5EgrZSVvXChJsS6mPU9LzujBMdGfEL3wXAw2pmb4dJ34FjVy3gpHxR5z8XztHWLhPhbuvFiocC",
  "key12": "3kp6nCYW2TmvReewrGcwZ6m1ZazHmVyVPyo6XaYiTPNdbAJsVqYsBdqdupU5VrjZnggLmyAyeJ8rdncuESYpgQdz",
  "key13": "4fnhLF3LBHn48Lct8zjTJvKFgNZX1ChrjJHas6VPkysh7aeV7cdEimZHPkm4w6sdXR1DYTW9bh8AbZaG8danBCVk",
  "key14": "4GgX59FndG2xaMf4bk6Lp8t8tVxYjRLXsEBn4XZL3ZZ6PM27AXg6i58q5wPdeNReF6owqdy9azttECUBhFJSHkUM",
  "key15": "4m6qK9ECmBLuG8ZrwhpaH4kdL9wjtiZSDVCBzHm5AYX6Vm8vEYmEWp4A4vgTy49h8oEpFEZmK6YbJYtWq7qtHYGN",
  "key16": "531k6K1kCW6nxrauSAqgRy3P4Hh1YQyXKbptzwPKoUfaMAQR7bpoPj8q3pjKg9Yv7Hhyu23EWR9iyhTAVdwwdXWG",
  "key17": "5gwcsdd3VGjHqGgPuuunQwWxZFdNrDJRxZvheMRJiop3upY93WoQEZG2Gxt9sEYnxchi2AsFW8B2oWK3SaLic7RA",
  "key18": "47MfKkb8Z4dpBCtjM1d3Y19dUhdwg7F9aaUQKvC3SmeXE7b7jZsyUJRriJ4DBoaDXAYDijrnpchBhLiMhaWqBceg",
  "key19": "4xUFfD9qK9tFEXfNS5gnfSGqBPhMBHv1egMDxnoBV916zHGUM7MdKmMd59UzSJ5bpKsmL2rxS2xXSdiYpTPAnLM2",
  "key20": "25C51ytKdzv4E8vNMGpag5UedfNVSmhnxCmcT9VDd9kMR3pTcSaxQZVfmG5hXyoYzah9iTqGfR1vfXpmx8pYLSrr",
  "key21": "dgR5eqEPuvG5itkxEKruM4dgu9V6FUUEkfpxiycueBiDV4SYSaYwyVrsn6orvjbMBGE21rxM9dTzUW8Ntq8Wtrx",
  "key22": "CceabKaKRpuu7tYR3JF4VpodyJmsAxoE5BAc3GtbRKB8Di3hSrjeUqT3cZyeryr1nHLicDAPn8CN2GuC4Y7QfC6",
  "key23": "4FqPsTu4LSB2uxVSGFJuE2G6bX1apqKzTgYTqXVpTnMbTHrKBZzKimg9fSygYRB5HxhAVXGyKR1wWvyZrjsHaPSs",
  "key24": "4iJtPusopeB8jZJfPeNWkqGKHjoZh6jdmBHhd1SfW2jEYYoyWFSwVU9AHzsayAXeMQGoc1N93M4Fp2ipnBwh1Fj7",
  "key25": "3DJe4gHMNEv8yHRxftHbc3b29AhGdL81jcNpxz2kYFGn5E8sYs97SbNH1w396wZRa3ydVi2BqwXsToL5z1GUPuW4",
  "key26": "5j5gzhWUWSDSrsAtGaD7JHWTHcRRWqbrCLssN5fKc8vqtHpL49g2YBXYJiceWYn8BFrp5NuMKkPRmsmKjRMn3Lv5",
  "key27": "5WhWeJ2TF4uR2WcgbYci3TbMAewe1Jf3gJnMsnoG4n8DtXi7sGqyyrLFMdTi7ypgRDepu9yNAx7ARymqGvbdgrQz",
  "key28": "3Jf3JFVTcCw1VwMH2hBBm7VyAmZcywSiPATrkLu52kkcjNGDFqMWtssKubUQjvQNBRjNQsqLLLPoBwz2aDwHguKV",
  "key29": "4gytQok8CbjqUk5RzqBvz8F5CjTpcGn71TxNyWTHgGUhnQnmdEZqotuk5CVWHy8pHzRqNzAhw8NXNz4Sq5tnCeuW",
  "key30": "3NpS2YVmW3xYgpshpJtFuBHwQx4qdJrUKy5zNRo2Caxxww7s2M7o6SHotrHrbtPmedzgM9qj39ZvXqvDqPRjro8M",
  "key31": "5Nge4yvwQwv8rbKT3dkVK5MVgtkMYWvRZPQnw4T9siUhed4qkv9fLVLogbZEVKj2nGG4DQ8WXvZiXeH7QSrKr5ah",
  "key32": "Ad4cTzdNowpwvR7J5z9M4ZaD675PfhqAKyLNbhCNxz6wezAYNJ4xuXXFSEmvZqAnQX4t1sLso5c8UCTiN1RohC6",
  "key33": "jSYdH12HAixgK7uywv69piAQenYq1MLRsWAQDFrhnyhmkEbPVuMo6KUQTdFpqp4WdywBuw9HsAD9JZpwwmX4zZm",
  "key34": "5Cx8haKu5LXwiS37fTnPY7XNrzt2b2NQQdBa297ggRqS18gwcaTZ39HNVmxKJ4uiw1Z8rjUzjj3vguExKZ4iRUMn",
  "key35": "4Uc3MAcQhhAQKXMG2RwGXxKe9bbXdx2M32bPh7GqS25tiygC4BSiPCb9h3NbAwPWrjXvuXHqv4adCE8QXFv9C33J",
  "key36": "5w27Bxhqh8rpDttvLP9aBC2PGtETZquHevPu97FFiry7N12J4WTcGjyWx88RLHokCufqGDXEaPozHq9Hw1rzNmsd",
  "key37": "wx99e8cbsPkqHpmqttbPTVc247faWbaQs8xXoixmx8K5AaWpXmRcRWgxDNkikmr81XPHLNynP9qpHF3bCMGjwHX",
  "key38": "4vfNsYaZdd9pf6Y7Woi5pphspiSh9ePZx71b6ZCpqKgfnki4J4WEuaYZ8gQm4zdwxqDPwDt3Kk1wKhSDkKiMQEQd",
  "key39": "uxPaujgrHJ5mjnC6ngrAbUgkm8SVS1HUvdMB2BoUWDLT3NPUXyS4UHcdKoUcomrbhA2Y1Diex6H5gnBc4dZhVXs",
  "key40": "3XG4JhYfJL19CeTmNx9wox1vb9CRnC5WYTUnGMYUUMundzyibuiDeQCXrqP4t83fp69W6TS6BL4GYw8tDpiPougJ",
  "key41": "5LCRZgxKvSM7s194xwZfPzRcWT7Q2WRgi4gFkTsHoftjj7rmBjVFvw6jaLJ6Xp7iMR3vjq95vHZqNEWJgpxob5vL",
  "key42": "LXJV3qNidRq51oLEpuoz6CpdguzCprJZuJ2BjGUijsicgHm8eSYoGZoXEujfyPtxF1Vg5FPEhmQtbhiFkjimxVa"
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
