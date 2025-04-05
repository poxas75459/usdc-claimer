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
    "2DmSNxQ1EKTTQKAG3Pbbnue8iRsgTGidKN9rgzRTikEmLPGEZpL4vretmokBpnSPQspL8ceAH5JeUuAg1LfJfL4m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3W6hcTgSAYHGgZrS5Y5xEJgp7eHxGgg62gJ1yqJFoPYTrAYBif2ka1kKczkKpMfctj1mfzds44io7TLLrmauNiiF",
  "key1": "4jzuXNvuT5114LHwyunLvi5M75JjDHjCf3VEuygdpqAdwPsuciEXSbAQdEN43YryWDxN5VQUWei1FgnevLLvRy4a",
  "key2": "5ZRzXLuZ1zqhhn3U9bYzY6qh4TmUFEbEM6tQuweiLToTr7ES5Sc11xmc4VKk7GBW3f1wexYNSZwukq467SeYDamx",
  "key3": "5gNhQaaaxQZFVcFhFHfX9uMSBiKZjPP1k5a5z693wc2dkutqi8atkxXKRZ4jzKA57yBvbWDk6j4opXdBjf9Gm62d",
  "key4": "EXBkPK72n2USPnsWVxaEqmrrZ78KCSAhyMYx2eBnpvG1e8uexuUL8qbpibCaLikPCwCAATSxctbVxErS3JTNQ3u",
  "key5": "4cVYzAfuZ3dkimrWa12iDfibvzzDZes9GMc3jeTKCNV4MvDNMpbHEHNHFQJgTMAGNLWUypy7YuFvty3bTD8iRss1",
  "key6": "4W6yg2DRieyBKC8aPU44dQYgD46tDXREchqcwB1N8AuAYTixWp6D4Di8k83XDGewFyf6NoZyWDZ4EyuFGqT4ciXA",
  "key7": "4TijnyB63Z3u5eNrfGhd5dDLCU76R5ioMuE3TJZjvcTCZvtPbakB3XNs5S9W9HX5RL3QUaryvAtuZThEa5Q17V2a",
  "key8": "4bKRoY54eTG4iMpRV26b3qfWW9c7Qcc3yyLcZB4Zm6c7i9WwY47Ht6dnt2X8NytHkeGw2osc8RytigELWkaHydpb",
  "key9": "4ZbJvE8ojzw8LEvNow9DsMzTfnQbSzwxxf4iMNTwjTgjcbqEjNSWDEw242CGnMvWVRXiFW3dToVQV3BLS8csgxDh",
  "key10": "55QDXBgQTPHDhJgEVsXRcgebevCPWBWDE7FcsMV5C4VxBsRL8NdB79Sw327zqwhVvncKHm7rZvJy7xjUM7ByYeDC",
  "key11": "2GjUEXNMqTwzk1GiBPsk223YiJwUM5dMqUD8zbC7sUJRCCUVunbq22XsF3FMAH5qiwfpx2yWBXfuQUZ3tTWzc58C",
  "key12": "2zXPgCQv7WWM6F3QhapB5T2Hb56LHb7wjtd4HiMPdyz1CFyfKu5kqEB3DhBySGNngJKWbn6ALwzw2GPYDUiXr86c",
  "key13": "MCrdGz6mop1XytwKyTBsea3rY9VCHWheASAig1nQt4qMi2ycqgTrpZ5kmF2c1L3BGGDALpYWSCCU6MjuKxFyc3Y",
  "key14": "3NCcgfqAdYWktsBodd3rWcarGzc2tPedFZdjXLa3g2kw5N3bntWt6o5nrjg6aRnTxXCjnWPR1ChPvjEm1J4Ah7F8",
  "key15": "5XZxMVFKeWt246moGp2pn2RKxG1G3pdUxuamjcZeMNAW17QNJiZsvh8pAyueE93CuumVw5Uj6W5CSZkyft1mPreu",
  "key16": "4sPydvRwjfqzeymNsGwcN5TJy2zRFm13qkAbNAkSX8j6aoLzXRX2FCsz3ACNdUndQpfRd8C5g3jnw4Nth8m9LM9S",
  "key17": "7LFaHKyyLTqG4p14mWyHpwKc1pyKsA2YznUP2994bU4raykA32unx3eAmKh7p6ALi8VaCtd7tR7MqZgttEukVFu",
  "key18": "3aZEqa3DJuv8boJbraebvGQcUdTuFiGJrSgndFyc9ShGiVHHJYbNuw9xUg5AfrUQBAueFovgqqnbRFZ2K1yWnPL1",
  "key19": "3TVoAP92ukgK9MnZr7rnExidn9Q96eRW99Mb4B1F5zhK6ent9RRuaqNTYzUDkEpgcF179386yHwNoYQFZADNYFPg",
  "key20": "2yGuAjVS5kUbkLk33N22iw63f5tRRifFcUXe2Cxv4yeDhaxSi8HLnAYtausjscJc2uXtxR4W19wvrFtTfGus4NT4",
  "key21": "XZnfzqxJEYYrBx5J9PzNJqk3Umd4TxhRnXNXc94La2SF6N2ZwzqqzqmyemtikVj7Yq7tC3t5eTbDFBiguRYtW93",
  "key22": "61wAuZSW2NmvnmZRsiETy64BhAGKtDpgEcKoxEqqDENapN7wNeNnRpKGqcaj5oN2zRThYcmRa3zXVVpD8RJrbPDc",
  "key23": "2UjXLoAtgzSxvE3TENHwPhShFHdrwYxTFBqxmvtr7PjAq4BZVftmMvPZhS659xFdXoWB9EkcjZJVfzPeD2suhGof",
  "key24": "2qyZSiVkVJE9phhhLPwpurMunmfB6LA2hbQ9ZtwieCcXJbEXK6NoDuNjyJintELpxeW3JrzdKaPcWhsya1NtEtCG",
  "key25": "3HHBoHAytt5Cvg2GPaX4hxAX3UDqE8DojzsqzDTzMi7KYvTQGn71UQDwp58TBNTpzmFyUVNVJ74Xa9yVhuWPA8L6",
  "key26": "Riu31xFvte6hqWCMBgfGNAMzXX3Zs6JEgi8z8X1EkJCCxXjSQnuq6xNzjc6vJyRuG5ArULhx2issNNXbZv39Yoz",
  "key27": "4fcXzob6nw19EFZt4GDMK58mXTasRspnQ154EJnfdWiPZAHuuPcDRWoZA5omreqQp27hNVkzYxhzgAeif9xPPUYx",
  "key28": "2EEadd3ZmK7Qab1miNhfQNjTe1foWzKAza41qYWsv493sEitFwz4m5sbdoSunHp9PTj14xKnnRRdqztLqxgVYw4h",
  "key29": "4cgwmupk99B8cjwDasVujCLZBSa4BQgVC5DqZckaqh691fgzwgP7FNx6VBoc384u2NFBVrCxbbUdMCUTFe6c1ewm",
  "key30": "4HKR6v7iMWuVQooiUJqUjijXJ71jZxVeYvQWXN1S6WnNbeUtcozvXTt4L19m91NtBthzEMCgjfmPyrKjucBf4w7C",
  "key31": "SDDVHs1aWKPVio3t3hv1E8wx56jRstKwtEP1sdk89ZKGDkgZMkoJPhpDDFcbthKb4M6gaJytW3BY1iytsKwBqNa",
  "key32": "2exz9QeH9dfx3ZVEZd8WPQTE1SvkTqBZuTRvbtG7X4GA4vogHXT5GNDtYu2shCffRHMMUaemg8qMzZPZcrfwQWAd",
  "key33": "4xdc1GgmrETo8WFHkk3ZS27AqRL9qwetbJmrbVhWu95KyHf7jjedyzsZHMvmdz55na3mfV5wx9CauisfTCknKQBh",
  "key34": "3a8h6F78dqATH9CPkQ5YJ176Cvn3U84rBdrZ5SfzrFyFkdr2j8q6GYuKjY8vYgEr8XNSaCnSJUxZap8Q7JPuujG6"
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
