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
    "b7LT8cWGPdrmgHGRqnAzfwQMCWQqZCisQGVqLrq8Z4gmKM8obe7tVuryy48sJ3z48JwHNdLPEwDuoqmXqRdRpGa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3u3bS3U2Db6RnvLBdY38S5YozaSvaimK5tMJnpvD4kt783TgzJFgUUWY44QigxR9qymvVGDPqVSJwRwNNDEKcFqP",
  "key1": "35QsWVs1bruCwxBU8VkMVfpXUo97mcZDeDRhsj54YLnuyKo6kKUoU5PCZDsR1kBwKW4Zb6m86weptP5E2VNzG8tr",
  "key2": "rVmKXikGv9FYSjRBNcVR6z1cfCg7zT57gAMfwAUcWcXEU7kxpZsAM4JuJQJC3wTbrwQsRFkRhJ1yeJougvfVhV7",
  "key3": "3ZHhmsDMXNVwY5M7EPbwWGUX4j3soYpTAfvCJKC5VBiZD5z8iFnZNbt6WrFqfobLAPv9mtdWgnP6GeVnQHvVsYTz",
  "key4": "mYwkizijNifw73LQFcDckAEvrk1N6SBAtbKtLsfwSUb4NBbBiCF1QACxj5hXxVtsz5UNfcFpyxDMdxmo4pdAwy1",
  "key5": "ffmcq9AzU15UzEnPFBhpWeKNxBFYJXKRojnypBkTuuDE92zaP3M1ujEBp32NsQt2jxBmqDP2KxQd5vAfep7JJuA",
  "key6": "jntLxaZPVibmHu8iNVECZSqrGYa4dkczzYydR5UwkwsixoXnnYLgWNwDc3fHGJWKuWBrRCSBTkwvu4c99qiAbtT",
  "key7": "inGHB4GpE1swXN4Bu1MA5cpwaYMJugoZjbnKJNzMKd42tVcPywz4NeqrZLAHvAP23fHPjdJEc63ve8ecsUqgpJq",
  "key8": "29HzZDQSiZtoEMswzwwAs8EzBGLt23Gq7kJ122EyAukC9ASxast5bbKs8GpeiiiwtNgk47h2uWC57gx16Pa59b72",
  "key9": "4BoHqdcWYD24uDLUPEekJBUnpvbX9mB5HRSk8UrvZj986jU1Juyfo3MwoaYXEhXQynZuwK2kJNeuxU3e4qeyD51G",
  "key10": "5L81P1yLYYsUqMfydWTHB9aN3hpAFJvBMvi9rLRihQeSPGPpobZUEkuRf413da5oC9vtiBdTrgG86fBb8FRBojot",
  "key11": "5TLNXxXfbQEigMW458tgmvXWAxxSQpJdERt4yfmzNxmNikVqQKKKeckuXLpQkrFrK7AUHpV3qDUuVbaryeQVE4T5",
  "key12": "4k3n9FZ4Y3zQgQDXAP7932bykLbYHhpwhKEd2TGPgSDGfKuzXws2XkrXmPdeex3JVgvGihaRrUKqzToGnSqzTrSN",
  "key13": "4RouPaHzWdbtLgNMwJRzAATxTuabgVxo3QnV2A46oe6bcYutctiMG8t83nP8Nc2NFFeMP7jaZvNYNfQX1XKYeHSZ",
  "key14": "3HpiypD2RTM32zfiHrwqjuSfcX7P3gcu6Yka62gW5E5EWbz85NrT6pJw3fPtkFgUa7vD55FVqFJ92rYL1Zwrh7LN",
  "key15": "2ZAYiQRhHv5sbLdZbQA5zoWArizaXXzbbAKqiwkCtvhQQLu2howzgqXhpaisXN4RHbHjzAt1znzrHiJ25F6AkgjH",
  "key16": "65GiAtRC5CHBxjXMc5Ld8zZoBj9fJJ91BhQHa9EbFqz9kY53Y7fBLpYJ96dr9pMenoSXmhZP7wG8jZJRXbLcEhne",
  "key17": "5bqZsgiLKgpG1oVpZ61amfLLaGJyrgp2fAHiLdzEdXTbMJ3oggHA1jA5R1WDkEj7Jr3wLWzgMHnjaQQHBKsjuziQ",
  "key18": "3bePE4FUzYNrbtt967ZwT67aLqdPdhdZY8K1nUPXKxL2vHTay6fQ12nGTH1GmMpFRpkrYZ7TkbKoVZEGKzQH6XHC",
  "key19": "aydixTk1eAfVNamSvRWJtygPixhWYnp7pHdHPuE6igKP4cQJ9cTP3DhCaH8jhxKBYi1M84Zk9gYNSFfmMo7pfKh",
  "key20": "3PVQtvFaMAsYmL4oxyg9KRZgW3Sd1fMesx1kmio3785vXdmU67fJCuA78PjDwDwU9awNSXFbmSPYceVzSJ68ysXy",
  "key21": "tHpsFRFd94j8ByYmqsWL9sMcsH5BuzazL1un5vW6V6SSQyHsfvk2HJXYTPPjbC3YaJtwV6XpGJUb1Ef8wBaByMa",
  "key22": "3KHDMoxhCmwzPq1FHUsUB8GpGfBFNpPBBWYoGiEpCULBmmQuHyDHyPWFWx4GTAbsV142LEWiGNkd1bwxhf1v4DZA",
  "key23": "5CtUxBQoFDrpCAvWkeLCZ4JGfaWm79hCVjYWGk64zebXrB1Ya1owSKroWQC2rG7ZXJ7N5r2oxCejtZ2AsopmxmUk",
  "key24": "3D5KU3cJTr8nE8ZbSEN5KJbP7S9tNSW6MpjLVB3TBZFHnGJoFqrnjkjLNBn79wWMY2xRMuLjFvMcELbjWuiAGmKB",
  "key25": "3G5iEJXFVqdzCVAXH75KrRskvtEZxKmgfqTQZfL57cJYPByaa4KSzMz97ZK9dgTNcqgbXvWQEiq3f2GHkamnHJMf",
  "key26": "3AZ6hKUE8kUGx2hpkhJuMndsXydCqcd5gfxmTHLtCA3hwzirkdLFnvcyKfQvUiwbD5eVbDrCZh8owvqmxDWq9PsC",
  "key27": "3tUPYyTQ5F8M9Wthf4HYvrtPo3hT6j1XVVNJNwDsUKH6CFniuMrvkYPCok8QyCctZhbaTVnkYiSZ3SPzJuy9Ciga",
  "key28": "2ffq2GkPi6x6ZGnrbcexf1FxwwwpykJn3sZfCBZWgK1z6gDQ5Xx39pE3NMp6B4z2q1Nkrb86p7U98VHnrhqyAkWt",
  "key29": "5b7KjtojEEmMTNVva36nxRa5id7qTCTpVFLuVPdzYAJqfjwQ8bY6c95appvNqPT8NEGUPD9E6YMcRzn4Dq2ybTU2",
  "key30": "4Ui6KPLSUrH6RDWgvTHWBEq46STM7paf6ZREELxsUNRR8YMhDw3he3qemjWYQVd2tAmUv8EAAFnXZ3WYnaJgtFAt",
  "key31": "5roewjVktgcxxq8UBzkjC9WX27B9pECEkE6SdfQGyLntr8Rr8NTGyEDfck85WTTNNa47BRsFQcxDvBTGMZUCAkoD",
  "key32": "EuiqfJUhqaepsLfNYoBhPWzghJMd7tFNjPjeC7iU978jFpDzLugvMS66WjjpoX6R8szk6hwb2qBPaeMQSm6V2Zs",
  "key33": "zoBK3L9fi1RnL1UPYAUkNZbcvB397jdP6vwDESZsbh7zUx4CzhXaY16LQkn5f82epD6DRe5Ki1f7yXk6QiGziES",
  "key34": "4r7NiGhtdHjyKYpBZk5arQv3EvP5yNXtnSTZUYJ4jsRRAPv1yTJo5MYxCkEvdPuE83WEfAwv2FHFwhjMaHXbdVSn",
  "key35": "4osUz8N8rTCQfnqk6bh56yNDXPYbGDY7dUuQrbM4tqjHQhefQR146fA3ChcbSX8xrNqkNhdEobGPhN8AE37vp3Ct",
  "key36": "3AbqC9pDWKN5g4UrJo4Q9fi8vwbs6V5U33PaQBDsv8agNyhXb4dcURmisSC1NcVFnjidNJVSGd9t9VTZ4sLaCNYt"
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
