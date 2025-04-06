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
    "3BLxSdGDLtYKgqiBzWdiHRXCe1pV4ezmudgU1E2sWfnc7uBHfPnLH4NwaT9YbrECmUfuLFxgbsGFFvhL3FrCqCuc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nA1WDM8GMVYCX3QAPWQq5MdKpUKDbkc6ogAE8qyzhvD3NjUEB4bNbd8GjcJSpHhfJt9qAYuhoAK5dac8f9yLg2g",
  "key1": "4QYj6gUsdBWVKWxYMc2UvbaXXevaPHe74h4pNginEhhKkQYAtpPEFmNp4hooTrNfAFA3g7hGVim3WhMnLFUYsRDh",
  "key2": "63iX7WNd5br42JRn7Aj5PiXYR7vax1mjdWoUJYuKBTSAAXpctbP6YqTVz8cAALdUVnhFAhRgjTejaDUSX9DNopuw",
  "key3": "EDc4iWAv1xQZEyPH8FnAdSmXY5RCSqAPeiqpx7tBu3vDWosfkz5Z33K4Cu82snS2nBuduseuqEUkagDQHNLXWsc",
  "key4": "3LAXnnHvRXe5vg6GJJDH4MwhLzivuTLSYBTmGeJLoExHYj8qaWndEQ19SMioSqdJS7jmS6w1C5Zi36qBaJZyYfPZ",
  "key5": "4AgHeU1Z8s3y2PPDFSsQvLnVgvSXFyLW6DnYRE17QVSm33t4GPnmgRZDvrxrMmLRX97ySeP9rkegpB9RrB8oQVQw",
  "key6": "5ZX3xy7bWukoiaJ35sfW6ZdP3usPScqTq7KVZLjxuJqiKnUfb1bA7pTvgVLa3NM5t9zhM44v4rRf1YcpKfKXEjbz",
  "key7": "3SL5V8CPRUXE3e7t7gKRev9ZQ47WGtRmoftgoopFr57XNm3D67sdjFHnWjXaWkREyQV5e4rktajThwCPYuMcj8qe",
  "key8": "5QPgM7titYh2dpiLFqVSQXycsKjKHHxBzvW7ijueSydQJEqtaa9dKjtabTqXoTtxuAu9PW2Es82Mm29o2SC8atWv",
  "key9": "2augRkXJuMLbZbrDYNkwrcSs7CfsjJfaJc4MSY32UGgyu4MxB4rFqDvr4xSRBGAbeCypsx6urZPLx4SjsynezDMA",
  "key10": "4137MTSpYaAkR7HXvLXzNfWJGZo4UhEqAPpsXgZ1wi6VBpWSpTtvNbjuGL6U5PeknU5HwA3TLACX6GftX1CmTBVv",
  "key11": "4psLaQvVBcjyxjDVistEDtKtnQpqBR5rTUNDUfoA65FqiZwrR8qSCFeMoUEsXo9mWhW5FG4ZoeyADWoX2xYZv5iC",
  "key12": "26NMUdkx9SwkCKi8SMoiWxuXS7UTtCfsSYPYjnFgS78XzLQKfBSU7qb4M7H6z31qA4eCvSFRFVNRWmZ9j83XNtqz",
  "key13": "61Cuj8R9Xy2cU9MZYGfG2ZM8QLT6M6mywMyPoGvJTSKg4qkGQh6mmFwm2VZ31dvwYYz8noipUevC4jw1Bb93Fvgz",
  "key14": "4H7s8BZq9mmerUBDm4VVvLD3Wau8AVmb9NMoRyXtiFbu44wHxyH8tqC81nTN1NMgzfJt4txweesYNy4ZZ5FMsNVA",
  "key15": "5KVwFicXJexJ1Rf7P1r4F4aqb1AUVkZMoTTFMoZhJ7u4GiqEe1Wka5dDhZkSkmDJURg7CaVApgkYFTAyuHRVXe5G",
  "key16": "2x9yRSDXLM1xcjCGUeQj65SVQ8nxqPRsq7YK5y2qaovuziYu1VZXDe8saPRqxdQqEBecsQHK6RZV8qhQvZg4ubQ5",
  "key17": "5vJk4kZG6nzSpV3RGAFNiRiqoAtUNauuvBwocRwmRrhJs3HwpTBuNXtEFYMQs6s1yFJe7WDhLwVbMbwXYPduGD5W",
  "key18": "aEE5ESDRvfTPjwzC1X4RH5nWQwv4TZeeVRB2ZsJFyic16HmVcW3MSb6ppdaGSAtvjR3fapnnAfUyS1taesiAYjv",
  "key19": "5XCU4Ub5bcDNxLWArMePMiSUz5o6R4kmXS9BJC7m9MU39e8YrtbM8zRKqpbhUdmSfDM2XBhkNSC41N1epkMAkYfm",
  "key20": "2DBCLvt4YkSgfB5DkeBU5CqkGcR65bficg2gtQ83aDN1QDbY9V8yGH8DutqHcJetwW4Z1rxiyLTwqX24wd6i4dik",
  "key21": "4c3px4sH38gnSf2KGN9MrVKaiQ3JBZZtvNf7TAQj4P5S8p5ixidBMBV9qQLT4xHhKcFV4TqYFPQLh6WGRbyB5GBr",
  "key22": "4tkkBemksfgYDdCUHgncv7wamueZnDUPgKiBjr7vgEmtKty2DAkKyKptT8aqBX79yTVjU9pMSCCQ9yAvns9CuFQn",
  "key23": "66zqXfnQGwnypNPAbtiFgfkNM3YUuRmqRNqZSPcw72KFYZJ5gaybgJf17GAEYSutBmmBfvKjCXxaL8Uz1aTmZPiC",
  "key24": "5abGpNzV5ed7e3rkFwLVcbfRG4UsnRhsB9cqBRevCJ3KocW2sywdDsWoZE6asyF7WPLpEd2yxLkWhuUfvByLv72K",
  "key25": "zAzQwiApbCxzVtZtJV1PjpSWADrJpNadBFzWuzs4gtPpnaxR2G9wja3prj1LWRnYqyrWdBPC9NGRL4K5SGGzzid"
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
