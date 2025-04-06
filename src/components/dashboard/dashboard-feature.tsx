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
    "5zNsQjaYbFdwJzPqpuE47QgpqtcFUMdUKaqYRrYARF9FCpwRHmyEBuAtk3BnWRhTSrSy8xTqcWLRM9M3WAN2jgtJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2N3mTHKPS8HLKAWJuX5HW5oSwjXeZx86EsKERYKfxmnYkQng2diJCnGMLjW43dCVJ3vQ75dMjMrMVqk1U1g1ThNs",
  "key1": "3qLskvcBXCVJNGd6MWM21wVNwNpBW5SAyfRGdhgWFqHKjZ6KSbLK69cgXa8m96aKRkqYt3GWp6kvUqHzR9qoqExB",
  "key2": "4qMZLapm1nbNDWe7sx6qNysgQJbQfXVfkyjeLd4WvZvYPSrZNZ4QBbS8VAgpt8J1xaAsLWvdKXXNfmovCA6YmKML",
  "key3": "31StAuYwJbgcKk4mam3LrJHVLtDmdkFbNgMzi9VbGrZCdj8b11UZayB3Xen7WAM3biJsRRUp95SqLM8BU5jHuvfX",
  "key4": "3Q6KYVSLi1RUkwPo1GMPrEAoFTqTTHAWqJ5CNsK9imPMn9CTS3zQrCgwn3ECWm8WuMoFCQ4FcmW3475eNCcQXMrv",
  "key5": "3bpkk3wcg7YLWQAfg87FYVdJnYNRvMK9SCkSV1mqBDsCbxhkkWon9scCQtL6w81KnDhhDdKpSTCUytQo1DvaGQGZ",
  "key6": "28684TXnNVrBMCXShdMMWZkdsmKhX7kGdWuvW8t9kgwvwUDbarGkQyyqRC69aK6A2xRzCDRykGCSCirZhpW1m9n6",
  "key7": "4hCQcVDf75E7tWa7oubJNwm43QBzzDsvKCTd3XWDUAaed6tSzNfTCp37EQZbuQMKv31SxA7j8E9h1AFdoQDdGR9d",
  "key8": "2hdXyWK3vGt5ZeCdHEVzudxkKjnYp9wtdvN36Zt7dyLvPVU4hes5MhDhAUz132XF3XipweuVtzwYJ6CGBDfMHMYr",
  "key9": "2exWgJhWkaxredF8qPZ5CqsbPjQtPtLPoikqRxxCppUcUai7SP6PjnFtrVdREMNmmHN28WkpRdKpKDiBj8DyUMA9",
  "key10": "2r7DXTQzsKCX79aqudyDR1gGt25zQJdSL5vp6q9zy4MiRYBhwADinabRhSUebLR4HFG7jKCXzmjYKHzz7ZyHBFKX",
  "key11": "5wHa7BGk2rtWEgAZSgi6r6WLGv6rFeKrYZ497Sg2HHdREK3Xg6RhDvf5fqe3EpMe5r95eL1HthT6WWkwUwCoDkVz",
  "key12": "3TUGQeZFSYeKTMD8qDGYbr399RHyaDf5qfekAAEpyosf4WNQEdkAjEbHCfxv7FAokfWbThhrxMfYMTbEYbeEQwr3",
  "key13": "4mG9sbckPrkGEBqVsgR11DEGcUKVi9AWkLcdSLfV23WErxqqR3XK219boEdiciDpVZMG7P2HWBcWFb5UxxUi8S16",
  "key14": "4VEF6he3vZvHzXtuuoThQ3pLDw57Dd1rxFR12PZkpv1tLLvjeZAA4th36AiYvddKMRYZj5J5MAVS9oCWLyCFdgtJ",
  "key15": "3BBw3xoWYYWX2CAkxffZYzeRNqNxi6Jq9SSN9pARjuvruExkvv8vHMSLjTVEgtDQvXP5SgCZsV9wBXEGmpE4rVZd",
  "key16": "2jDSMFS7s5HmveMHCiFYrSH3KHTGto8XBaSwU1aPJKSUZKDiscnWMPzhB8Dz89ofcMKnWiaJxfGzhQ3yqNu8mTaT",
  "key17": "4LVkZH6JfQZwnPmAYTX1TJShJiYAZy9B6eGpfwowtEaCpKz5Rfht2WjeBKTysFYcp3R7QvCDPNAUMrfz3JmkRgCa",
  "key18": "3MchGQB2ax3MzsUH6fvhaGWs1xn51SJc9xdyxQT8EWK6v6drziAvKuWQKXorDefeiptzUuAkZXcEvgcE3Vssky5L",
  "key19": "2o9MjgoQ6r8DujKyZiUbeKxNwqzpF4oGQVSTmrM4TbdXxLu4oCUTNYtKEFAqd1wdzFhHNpKm1TYxt2iLEuFs6182",
  "key20": "aQD8GY6HNQjE8kdNXL5vCZiJy3YR6o1rAEhGtM4xsxKg1gyZMu4b9BJMaiR8svE72iQPcVG4Jzi35pYmaR8FM1o",
  "key21": "3CzumpCZL5kkzMhLbNSFgJdekEQ5wpjdv135WpfEiBXMrXYzt5GGpKMVbsZvnJjKktkRJGbSNvwJkY6g33Lhx62P",
  "key22": "3Vm5NeZAU6wmLXEgsRBkf6j5p3GXjWydKi4tqPqCtLBsFapBaWVxpDnQUUSypHftN9H8rfm9J2hyQzWgzfzUni9h",
  "key23": "28RaPJ26xFjjenq5msLrX5JxMsyKsvizFEPaSiYPJ3rz8AmfCaDbWjVkyABNBSGECydCRSszoFvZ8rCewjzKBYp9",
  "key24": "4hSRDLCtBWwMWE9teaNyXjk3bWvAe4pYC22W3tUUxyWTXauRUV4GXvXPYJqDpWAgQUMYLQMwjNS8Squ1pRryvPsv",
  "key25": "3FCQn5MSf51EaMDSeED21J9wQRxzDJapTri3oVEfERVH8MLC9pM8T6E2nUR8mDXF7KGgRUUPTyga4v62fV67HvYA",
  "key26": "5SVRpoR6rUTRrb6mW8WkWFaWVjhjUe3M3GFCxN8HJfJtsXQoay9TMofFJZt7eaurs7aJvgyLsU56onorChUvRVKx",
  "key27": "5JXn9wf95RMbvNeYF3fYWTkKzK5TRLbZfm1dbXpAvtyxKYgwnzDhqaCAtEiSfXNbT4tYtu4SBNnz4XYHpJ5WdzwD",
  "key28": "5hNUgCL2qWVosayCp6XzuCUroN2C8n9wo4KFZ61LyJZ8mKYxhgNsw4GJUm3jKiwc4UJn6fwVRZS6kniZmaXiGZjD",
  "key29": "MoYLaJ4hWbs4AdD54HRZuW1KkV9gqCrGFwTCcjYJDAZwewmMDbwaEy4kLvifoU6pfvmfSWNhjkhJYmd6GcY6Q4N"
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
