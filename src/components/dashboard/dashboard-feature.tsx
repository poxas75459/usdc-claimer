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
    "5T5bkaKyqCbDVzHPSziN9jSXtE7rC4NPuAJhWTyLSdH5SBKQHdApht4VHFEZ3oMs2DWLN7akp5zRHkSZDNwmF8N1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FGcD5ffEX7qRKsnVUC7TCQVwD2qX9JXzs1NgdN4zoDX75HEsJnd7gFEPuoQ2wJuUFw924zo5wRUggroANXww4ur",
  "key1": "3THvFncQkvp4NnKBWkf5x852MModUFhcqdVcApZ3CTSMgoxaijtpYPYfcayLzTqwLid6ntk9MjRKtUzNjp2W6EvT",
  "key2": "2HigD7wKxHT5K5TysHo6pqb57c8NBBRMm18bnHNXD13MTV2vBuWHpCD3Z1yxoW3vVaxtdaN29DqSZUFJwA8Q18YH",
  "key3": "5Tf4WiSpFj3j1rh7jdtYDcK5vxSffKaTEyeMUCpKdddJt6kpiYPXov2hiDCMyAGVk7ZGbceWuhe8hr7XnWryAAHh",
  "key4": "2xb2HCkTbZAwiK8WzWWVqvu3j8rw9fGgusTrGXt9hcA9Aae881jCJLUkXgi2yT2jChmMRzsLfjsLkymhzDe1GrhH",
  "key5": "53faJNovAx4VwUpN7zDFsKhZt8rHXJ3i9WsvGpPPcjriq2yhnusNRS7ZWx28kmT1xGACqn33mGCKnoM6iLoD6Wn1",
  "key6": "3C71xUjxDodSJmNNwewNLSZgiQ43HZP73ZEMb8p3wLwfQcF2QRupQPd4qjU17Td44wNGqG82iAef6KrGU7j3ptoZ",
  "key7": "4QC3tjv9BDra2z9nEEs4KJ7Rb3AzQuPmPSHQBLoZ2dwNzfNKDiyoQGELTpfDrR5NFdMWz7MUuWyuj4gtU5iZN2A1",
  "key8": "3gaVrSKnRCBp3sfjaLb6YBKw1jYrzBpgRVudu1HsAT9KbXNvRotUWiVuyzuAUNqHUYCoW6pWArE81HMvVuKeoN2h",
  "key9": "5VujnSnAVJoQQVBJjidvohkec2AzZcxhDDyHj8puin5AUvqqGeqJad7BW8sMXGAPCxNcz9VygfzBUsT4WmAf2qyL",
  "key10": "3BxtKiXBkxMNRqv6Wmcr8Sta724BD7hWHyPxYFg562o9ubqS8R2JALxKAaQvbxs8kxjGuRnYw5qGWd9Gou3u4eqv",
  "key11": "552Y1FKAnBmqG6wmPnf9EkKQkRWkyT3N5RCLYU4fiZES9unvgZL79kRwVnTrcUFePniMpxrcgqdzoaCbXrHj49sw",
  "key12": "wurtSBAR6g2fjRv5TbEhrNzQfLTdjxvQXCAbpgmBN1icmCFPw3YyizDVZq4bdEDtoZKCMeo522JNozqCrstaHLV",
  "key13": "4jNWyCLK4rrb7gzSVseAzFyp3wxKvZ3FQaGqtjNhD7BYRkLSxag6YF3WcaE9Pd6pQ9D2NbkGH1ury4x2FStyFUn2",
  "key14": "nHmW5XAVBE8xHTWEuZnLfx8UKQkMpqpGCrSqTxu1GYQ1nSXtBYiq5n7gHwUQ9yrK26grASPE7mB3L2yPJFap7VQ",
  "key15": "4HCfuK5MMgPaxzBf3pNhcqCj9HZ9CThR38KqjYfb1Fp7viUB8hb7j1DZfpaii3oAjYuFrVLAVAkYtMn8RXqPLEJL",
  "key16": "NY2NrkgdLNRWoXZLQxQ2YvhTTnsp1DdmVjirMturQ8ddgMPApyqHwJ6jNam9Vca1PuJHtY1mrmBEaAjbCrZGfyi",
  "key17": "3fmsfMANgxi6cbq1W7wR3N8YkYQ6jDwSpmowHJqQVoeyMjZmteHtfnNhsBRp69jJnSQbXC1BHuDrppe871yp1jZw",
  "key18": "2cYinvqfgEz2hZQNvfraM6gZ3RJiiyvL3VBTjDHZ2hverZknvT5jDQ3yLLoYtiYLnQaRjrg1CkBWhMrxnEwBx96a",
  "key19": "xdV3d6e1o8vHEfYhksEwYEef4NhPQBMTSaaSKLYDuMmz4ixWNKQMdM3xFWtLMJBMSauVL5d3i6eng7XD9BDf8q5",
  "key20": "37WW73eUQLk4NAG8iaTJ8eLZxXnovZwuZBXhPZzvDoaYzzVyZTX55K9eodDQprPqoG5aYKNaK724mZyhTgRDH24h",
  "key21": "491MvoG5LGF6TWRNtVMykDP2SX8rKT49TfGwmybBySSNkWoYHZ7zCdEDbEKmKhuwPvkHGrYzoZSWgKdEQvRNK3S6",
  "key22": "36GbtY1xtQwTFqQwQm1XK3hkmbaAkCGZ6kjDYhUshcvhXabXuXi4E6dsVaUqQh3FeaMhhZJWJYx9UMq4j3WRiX7H",
  "key23": "5cwST8o9Eav6jkJEL83pWkoAtGCQoBg3ejB5K9wX2Jz3X861iBqCGzVdbrrceFB8hotSnASwr5acSpmq4cStMjoS",
  "key24": "2zJxUGw6RBmS1WTWCXumfcN9gFnuXFYzHjgJ61WhMfH3PWXcPydVVx7jt4ijWgqhYqZPTUTQrwtGdqvKtmT8LtB3",
  "key25": "dUitXya6iSdGSNHHvbwPxMY6sYSdf9dqL7qAMnGmMHyoSimU66iroLmRq66n1aWjXWVtoxYdWTRo84WtMEdrwj8",
  "key26": "5T1CPfrxm261GjD5qCKGeadcBp8C8tqvRu3JCiMqvueC4RCAMgWY4B75bDqjyQPFnNUT4ppFTQuUWz97xe2GaK1u",
  "key27": "53RtoxDFk1uCNMneZfbaPEe5urrdtERKhat8QWgoSnbGu6LiimQs7yr9Q9v63aoFA9eeV8aJkENijnCnTDbpsz76",
  "key28": "3Qvu8asGqaTMkG9L3y4Y48Ucjaim5aHRsBgzc1JhUzHtv6zm1BgpfNC8z26w9EfCeGnJ6gEgvGx44yiUVzJT5HRo",
  "key29": "2UT8bTg6dTVdxwfSdaoSye2E153Y9JUnUd21oJNRaUL4G9e1HEkZRBeCvYfyYZmiLJbD3uAkZR99rhyq7o7cf5e5",
  "key30": "4DejxpxxxDrBbUNXdK2cmW2dJC1D6Yxuf9M3Mk4DBRu7p8DX7dnVSpCxu1Vhp9yF2EvRSdF4DbdrjutmLxr72ZGg",
  "key31": "5zi5DJUAp5k4rtxQQB9DMxXEgz246pXrsh6MHTcEgnXZ3Ao8c188njKZGYykKfP8UEew8ac7Qqj4aaku7oERrPVx",
  "key32": "3MdVvERbHQpiDTTRHACAZhVjLxLcjhqS4Bg2DBkXeqx2ekgyJt7BYQmr1LEKzSEBEWjdE6B7kjNGo8KkLu4tZ2k1",
  "key33": "2zivvnk1dNM8snjUUHhuUHh9X5QNQN2RsKeLLghqDgeUwKWXBPfsN5bkxkLz3rEKcBd5J8oK44Q9woGUZNVN8wzd",
  "key34": "3A9PzWmTbwQrwXBjxky7vkgs4QvUQ7wNC6bhNaGFdC6AqkyjoSTZ8YjnHg1J3aSCwVVzzTwk6UUbkA6QNDd2wVhe",
  "key35": "5svfFdSgvYGhk7dxK4TmK6nxm8LaSJdmBjMEhw4SCDuabQVGyGRkN9Nby1bhCLaDdvWyBrxVYWYTXhPgbqicwKwZ"
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
