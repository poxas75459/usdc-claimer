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
    "3EmpKe1BAhmgtMYsLC9X78ffqyKsNRKV8v5Zhem1L8xirGzFsJDb76c5YqXWXUiNZwEucT1vk6ES9RrzR7C1XeXJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b5SVATiEhBLxQXrYGKo9pfqjEWZRNkCa2ZCYnNkuJATHewJHvg4d9vp7VK1ptZjeLBQaugj3hYNYLBpwX7MskDx",
  "key1": "615sw6yQuH6hYYfKkxxZ7xcFxUT1321rEEyvBZkjg3FF45SAoKqrXK995yTdeitH2uKrxZP66qcyoixArKfXWipb",
  "key2": "5L7wAQXazDHd1ZbggjBgN5mLaZZyw81AL8mqtVcdRACeTxY8KDSNuz2SRWSeecep4vpZUwyS6iej6WWDTnaSbzXk",
  "key3": "52zF5tjHMAPCzcdRQQd9jLTWeszuxqhe7dvCazhYDcT6X8L5gNaMpP8722bnAqwXsaaR6hZLE7wKfFiz2dHZaGsC",
  "key4": "3HaHT1RbcxL9dLTnw9LiPkdsbscdypQ3jqt4nDxYLkPM4ubL2PJWByQ23hEDG2Z7eyy7NUMivGJij6fHXAQC4BoP",
  "key5": "is9w4V9ZBap6ZuwwgUXUFr5og5XvUa2ygdEFRLeW6nq5c9S6bwW8s9use1bCy5dKq26hDdywGv64uCq85W8aiwU",
  "key6": "59s1dq14rZVma8ZHZCiy4meGueiGCbiZ7CYzzeP6QrVdRB7TT9mvQXViCmnQY2EiN7BiPaMamDaoNiSr6Q7JFkuY",
  "key7": "3fHTT54FEAKVcvBky1EYzRErFgregVshyqSNUXSnGxwySfuPEr8H3dnaFinPrborFrscMTMUCVpodiZt7VhSaWgF",
  "key8": "33Lzbyr7LjU8KwT6ncLYWedYxn8idDFkhx8YgjVGvDyMXG7P3Jc12cGN9nJMpC9Gza2s5MudCXRedUJLdNjhPN5B",
  "key9": "2yDJV1CpJbS1zWz1zWDp4HNnQcDwRD4gZ7ULZvfW6EG6ur8fLFDy2XD1WfwbsCXihgG5UmgXgKJjSisoafkD4Nig",
  "key10": "5xa7oXuHpFPqmyAteSXCX1x9CKHQfMrFGbvqY9ni1mcos1xJjkkYCeSePgq1N6h5uQMQ4Dje7rZhKzo2JMn6a4sA",
  "key11": "445GGTTftuVyFLy1LatLsXPmdjJZ2AU3WYuVguhvdX8wpQi4Uc879B9966hVKm5FFEqqkQhQpkcYDdCjZoGiojz1",
  "key12": "a3akUYoYQSVifEJqq3if2gxU4WCjMHhGEdaqsxHsGtygzTRfqtFHfCcYi5fGDEEFUzmkHs4vuN3UWXA8vP2ph8e",
  "key13": "21JLGNbqLfMzDFAg97wfagQvqjmvQBLCGrLHXhEPjaJ7DmhLvDwCkWBrwrr1Dqj1FLcscUP1zrSAWR5QovQxFBSe",
  "key14": "2ncvCj3C69Awv2Qj365yHNqLaL1b5CgM6rRaxx4BJxWnpUw7AqSZ2Bx7Y89zibuuWiyRSMjQn6bznicTVAAwxKau",
  "key15": "4Bp1BfBoFG6rNE8jsYDxBssX5GHYpku97ffDzfD6PuinqxtBKrj8sdzoR5HhcQZbPww7AxUJP48vASEPU5JCE3YP",
  "key16": "5d1BSknp6dsnZ2zYanboYFDjq74XCJhNW83fh9DTquaZwvcZguYYZv7mdjRn2iz4tZY8X4WDDjQU6x9snEXN2iaU",
  "key17": "65j6qhDjft4q5E3XAaBJ6rAjq5hgTPrnV2KqWTo6SQbWP4dY6ZT6DnRvhkZxBhYFPNeVnCiCE4wbC2hgs4uyJEuD",
  "key18": "4WZJXwkPqK7LRtor8JQo1L3qqGZkMiQYZd9acT8NouXq8bEHxuYSAmrXH9LURVzKN3FBwREJ8pbLgt66FZRd85A1",
  "key19": "4PK7c3V6yunuBSYGP6EraYVoX55XaFfotUE2BVTaT1dSpCtTdB8euJBSmCoswHjBb5yMCrkCq3uGeenTC9yB1MSL",
  "key20": "5YZLgX69jTDL2P3yw6yFQGUDDn8sYhDvrNrYXfZA3QpEpJLDueEhDmjhkxk3cwoznrZBK3WGtJYcdcTFP3Pqv4H",
  "key21": "3F8Jn3rbbrnj1NA75ghBThUCgQf9FY4Rsn37nxcZ4mV4RVeXKqerSkvFqywBKraBCxvdEgxiC9kiPK6R9y95E9c7",
  "key22": "5fvP4747od1M1eVTvAUxnvPeR5Dhyv5Y3kKvFWy2hxy8v1V8v5bTVtLmoTJrxHcXh8aafnsGev5em7ML4WEoHNnE",
  "key23": "6cXRt67Ca9EBuEJTbaMMRb9zy34gZgE27yqWimRymfeKXPUu2j1z9ARvJJdnbHSGhkBDRafHuAhpSu8XfwynAnb",
  "key24": "kC9UmZ5R4gqfJjCUuRYN9G6cH84eaaG6P38t9ZRkfBXF5EM1gfWGLarQkoQpwdjZN2uL6WQspiueVe8UEDV1HBN",
  "key25": "4jWfAZkj1jZx2kC8y2LjotyyCsN3TPoaixXxfGDZXTuzoH6VacfMkuTYg7yjwVKXcuz9ZbBcRUUibJDaGBrMEN3s",
  "key26": "5HFxUWWrne7qzz5HM6LsoCt3WJb5WmTHFpEWvDqJXg3oniioKbzusV1rGyo5tangyQd1dpLhTutYmprxNGWWbr3F",
  "key27": "2MZrKtnSudyGwC4VaGxMLmAzvF3sMM46jZUuDhXt2TLpBRneYpsr2qpwY76bTJn3EPBTpddtTwdxNizmPZADsMML",
  "key28": "2vqYQHcnvTu2CrgP3M52xCabMs5gAmYKEmamBsHycTLicffdtfSaE5xHnsb6drJ6WbGQ4fQHCnB7muTPqgsoEBR2"
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
