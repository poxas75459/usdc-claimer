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
    "3YcC6TxG8J3m5bgE2KxYZAMZZnWoA7KVyTm2Xe2KUWzYvtkdwLBXhx4271GLFc5iJeUwWbpWC2dnESvcJUQT2v5i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uTukkPaxA8Z58dH6JWXGbbLCd5AZr7een5Kgm76BFRpmZRgVRnjfvJXEVRbrpG5FKfBWCyMXhh9MF1wBdeBBWEs",
  "key1": "276Vd6LSpQFg2B49pnZKqwsKenGF9WogEXZrbH3DQVLktn9mCc6AGeqsqmJYEXL8R7KUs4VNF22zjAQWPFakNx8m",
  "key2": "5cwYJLV1v6KGMJsEAFxkTMVmpTEYZiryu4TbUsUHRrx7vr7Nx6eUcVtFqUnAbChejy9EdShsoqHHxWqXF4P5QG7T",
  "key3": "3qGMMha5RNHJkj1e5BmoSedNQVDMDDestBLAfKkoFHS4m5c787BphUyn1VMQnzPG89xsVY74Ujs1NZv1hXrv3N1m",
  "key4": "5uTCUriuoShZ4J9kV4oK3FmzXxK82Rm3vz8KT1B9DHBtgwLgk4McEjkFPie8uSatD4XjTfBWQhwgMGn3d4ETutng",
  "key5": "2t5qNiijcS7uygLFdP1uXYxd4rt7h24UW1mCu8P5WmcrfwX8t2PZUPKcu7mKEVNrcuNF6ezApJg8RJZdJr1r3KXQ",
  "key6": "45AkKhq5Qfehhcimzz9U8EFtBcb8nrH32d3HH5tMPTSb2DCybXXTfSePPk3vvSYeZxSqg5GfP55Ad7pq4gp5u4ku",
  "key7": "5aRUU5Bi9d2ocPCV7WCz4pq1gjdqZe1rRLSSobKaxsBwdh9DDu1sGvuum79u8tC4xF98UrgMrH2zk4p2rC88878n",
  "key8": "XPCnnhFE6vHsNTpSCqphua6oiznVjt7df5JXYi2joF5SJXLSU22opY3aLJ9YUnLok5Z9UGRrSxbQZSN5ZPAgGLe",
  "key9": "46Gu4BX9EcRQajxJtqJbKatKNak7An1oqZEmeVLTVwduWVjMmVLHvCVAuKeHDaNzHJ4kF7vQRWQpjU4f9meWAsus",
  "key10": "hmJD81gSpuMEK3URAyd91fjet3d7ZTuJdvYZMrztPDMxV3HTBR5h3fbVyNpeMXkxbQMa8S5kMuGh9ErHZwYnvt2",
  "key11": "57bzWXGA9NiHk7vmZu3CZYpeYCMCTZfPXyxkRtDmGSGmjKF1zkXs7mhdrZ8CRpGfs9hjB2hMujd222DNAu7WssMD",
  "key12": "5M2x41Q6SJa5ftUThRFgHkQY16shG62XehJZWGnhJEPzXmKuiax8ErKnB33S9Rxd3hD31RKszE49zgBA9WYYTPmF",
  "key13": "412b675KkEm3tp12EUiGRrKrKUNLqw7ae2eogzm6Y9f2Rn6ro4aeHqpyvFr6xFAzDQq6W5AdetC3bsGxYpDoUQX1",
  "key14": "4Tb1xyCPQduytLrtTQm2JYqbHpwXAShBXhEX59vyRnVnHMkk6dw5hxmLLoe3J2ARbw3tZBaLbWoj4qXvkPHKvUFT",
  "key15": "3UVjxzZBKXpv4p7UPjG4zKLYHwuHBcHojtsJ582BFHhiQhKotuV28b2J3hE49J1nW8Ugp1TbjaqqBHqVvadtKxxM",
  "key16": "4EuwoWGwq7PGH2729Nku1vA3avHaUUqAqqHunPPqypoWNazQ6sXB3AxadoYxprHVpwm3eQZUuiuKf8nm7sFCcByn",
  "key17": "eowe9YzhaHXGx4K6MVP9QhRkBZ2uS7VZ2kxQjsA62mjnppVrbr5Pyjbigd1NQiNzscGoQ3sgbTv4GYFdFVkZnYw",
  "key18": "4tMu3xD3HEZHhVUpdkHRfWQVbDD6LBfjZmcVQA1QUk7DCdrWRtJWmKcZqBdAxwxtUv9HdNGnxp4ngFSp2U9aRL4V",
  "key19": "3W9PXo22LSG4tpqbuLSQpZ8kB8xkPrsgdoDbzz74meXXFv31oL6ZzwUdsrMaewYboitpxcKECN5FwuzP5WWP3G1x",
  "key20": "5kxH346gpnEKJY8qXGtsPLTea44daqYPpgEkfuqvy44TiBuBBmJ6x4YahMb7rk1u8DUyJfau8QPks5zXZcwh3kzo",
  "key21": "56LRtkyzsKRJz31JECmdHgCQSKvkCQbbFw2dAasbDY3JticqAkhUp4TiC9B3LxP5164aZd4VN7QZRYGCsS1oFjTE",
  "key22": "5fSQc4upFQQEzv8zV4Q485PxtBooUuZ6zd9cD9Ngrxf1mXto1AF5i6UoMd86dJDTAzgbe8wZPHqyUeVyVK2Kd54k",
  "key23": "2N2h4yPwpDx3PbJCm4V5DUQpkUNs4b8SJEioNia7HZhJ5UCW4Zvf6pUcxVvpNP4H7XzzsbKkLQPqMqpCdctggTEj",
  "key24": "2F1bV1KSjvDwSVcDtRQYADgzA6iNN1Yhcx3KeZD6BJpcTJfWLkqJe2s5SjrECy32pAFWd8V2i8HKkWCn9DgqF1h4",
  "key25": "37i2hBFtp6phDPUuCXjq5dpSLr4sapEzRw5mHsDybqiFbm6e16AUBwNEpxdtrmV3QeE2fGJUK1zybPRxnoCZsEqm",
  "key26": "56kAvuvuS2D9jvRcCidfvTwMHVU1rNBKzUyhZ272maGEpiGqgNTdasEtGyxUyEC6jq42xJTe2FheCW1Akxc4wvJe",
  "key27": "8ffGfspbvKRKKmwLzvZWnQ7PfLJf44TJHmR9o2ZWoSioKi7bcqteixhoqrTxQBq2pWW45eTj2jz3D64GS2rvfp9",
  "key28": "5RvH4fewHpVpBTmADDs8F66WssiwgjerJDdExAoXAcrfVtf5BUF32pgDdz8vu1ZFMAZFYYwbtHRZGQ9BQ52PfUvp",
  "key29": "3mTn2PDhWPcFmPLjPp2R3qpTam1P3kSLr2P571a2aDGaZMcFA4MFt7VRF2oiJcb2EJnuHrv7LYD4yd3cFCMCAWsB",
  "key30": "dfTkb6VDCPwnxZTiZbQeUoQt1A8Cb3bwTFKvncnGLcsUcVNjxMiBQyZoA8E2ZiB7dcnpK6YvdPpevDtq1FNh2xC",
  "key31": "3bL2bsBxF88WTHW2nDxoNTbXKprziqRyQJNh6dZb17pp4jFNMZYGuXyjkcS2DZgNd1BBjPboR82R6pAjVqJGF22a",
  "key32": "42bPemreGEf6rNbWedHMb7PDGd19G3ctLScboCSVZzbsQYqGWRffHBfMTZpheZRvLCwC74A64LhHjAyvtGtAUPd4",
  "key33": "2EYTDhUmrkQiby9gAbkxiTLg8KVfvRpVjoXzpCJjiz95jKwGcF38vHkRGTFzgzo1JAUaprkQr9ZxFyyHimSCxUeS",
  "key34": "4WNDBGCfopnFknh2TWWBaDUJwPmLPdMejCDNQtRqUiRwhH7nzMi4eK9VEYTz8VAhnHNhV9WTSaNRP4NhHvQwbaBz",
  "key35": "AxBjTJ7TameUAYF4kk7jhYsHqPbntFL3CYoVvbKbFWn63Jb877uzG5hNLHexWF5juUWcqK8pLzvDHg7ezeYYvEE",
  "key36": "X8n9PYByZk8vYBG8YtM3YsiNgA3FdGQ4WqjoN8PDkXJT7qipWaLbymiDraNKjtf7w5hY49GRN9bXoiveofWhcY9",
  "key37": "24vVZWJ2qtyK5iycvsHyyuiFg6WEjphyXdWmf4co3ptWmHPYmcQDcEFFGVNKZqaayPktvauXEkuqbQh2K2vWSRyN",
  "key38": "3ibaUjUrS1TFgYDrzGKKFKvUD6mpQYSe34LBiiSKReQHBD8M4rxkqM1Rc1YG6FbYEab8yfXHmW8DmCtRenLr78uX",
  "key39": "2W6KLrQTNaWWHamKhZACQMvaAzaBh1S8pETkntaScPRmdJEG1KXEY5QQrZskacr3ei3EDnDBgrCMyjq8zNuYgNh6",
  "key40": "3C8xpEGtJZK11XZT76bM8hssLrL2qeZMBV4TGpR6X6PatgVyfch8AcDauPjR191hwgUbMZNjoBqjG1dNE5SXrmoP",
  "key41": "4V5GEFXihSUEyXXKMjfYzjAm2mFXp6AUy1L4XbYM72SS169HRveQZBYi9d5w7g3yVCRfVfNegVtM9jm4ZkandvUg",
  "key42": "eP5u6mEQA1XRZYqL57JcFF8RhZL89bMjLkffRrtgipmfpMMwEVZhKFFGaswTdPBchV7PuEky4CU5whge1RtFMon",
  "key43": "2kbYjA5F7jHZZkK8o5TuwQeqBoUbQ7UXRG4VwTuJ9HJi8ZtbA1rkJwSw5ekvo5GPvCig2UcDBHwfyPgbmqcFD8t7",
  "key44": "3hVGra8QC9JqiKoz5TDtsTq4GvSwX6PsGy3VuKcKdeu8b6N6ukAT654Y3LEPcxBjNzU4S24zGzPQY78XMmLX1hwD",
  "key45": "5JFrGX1EuzFtrobGs1egizZU5Y3AEZBmah9SPw1xPDmLixMvVQbc4RYriv5VTyRFWsFKjKcBr67MovRwQALgGJsn",
  "key46": "4tPVwv8GNvtEPTXRdY1GgSozjQJSqfnAnoRefuBHch3APgzL3kaY8GYM5Lanm7Bouj9tNAdoidv6ce76Krp3NXqX",
  "key47": "3Uvax9U7vr3WZhUwaEA535MXhH1oapuxGMrtnLuRRwHvWdXPCnnKmfNSpg421EFzRUAXmuowuTGBN3LGwtz6svts",
  "key48": "4yZsS9ZP7XaycHM9sS2xgA5egidpUn1xq2tJZQmcjHFdz9JdiEectL6TTtb1isc1Vzo8bGYacyGQSuvDnb8NA7b8"
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
