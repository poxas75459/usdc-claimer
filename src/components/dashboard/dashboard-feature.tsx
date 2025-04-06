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
    "PD5qJyLfoFUQND3HDmyxdg7zwY5NJP7FTvBUk4PiT8Ui9ABLZokR6xdDLmv2bo7RvNNjVDhRWYSc7CePCiiJ511"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KK4DsYto4mfLCQEQqrHdwi4TAiSiryZM5Q4uo5jwN3UfFxgY7fxdqYHBzCMN3sThxHp3kzui53RTpCfhz6tkxWF",
  "key1": "5J73YpToUWf3aHB2AvvBMwfr8tzDBpe7cq1T1aX1QZTxiPReCFqA39ehL53LExMF7Gvo43SNg2grXfLfYxRAY5db",
  "key2": "4VYgv5c97t6UkxdF3s2CLaKfFJJxr9rUzwFgdnpYYq8TbQW9E8958d4wepi7V2GTFGxNu9HZtb5mLE5ArMaywyBz",
  "key3": "15oXjcMXKmQJAHXYrb26aah27ZJtsBXXQ5Rth2dfh6uKyg9B6U3khrg9C1pVxvk56GkyrPN9tnZ2GTyZSsRkXjA",
  "key4": "22PrveUVCzdA9p6rB3KQEJm5gu8oWWx2zhMUjpsexsfa8THyrymc7mX82q5zUVPyvwyKhkoyGsRtf16ZGdG5JsiV",
  "key5": "4s9p71a6nf6DqFZ5s9gzyQG3vgRYvuqK8mBNfAJ7oSrh6w83anhyuqN1ToHZ7GN4KQxBip9j7sXRF7FWh6W35Qh6",
  "key6": "2sirEJMdgDw9SvTq4dhkVgHcwhSsKzAZ2MFeBFA26xZUEUpNbH6jNFehzE78kjPMGBN72EMbWWs26z2YYhAQGd9P",
  "key7": "2z7KKYSap7DLDvqn2n2LduHcXEfij7FsewVQAp9BnLAuq8Bf51AqHDs66uxSisYRHQcaSY4wQo2b3areWqwNJ6Ta",
  "key8": "3BPxhoDBgNmNexbekwryvNvDtBwCfw6jRbk2UzY8Y63GyjgWQiLYKBTPYBc94aqjqeeBMvFpdQLnaLRxrpeUxE7p",
  "key9": "36cGLYD2q8w47fb9b3g2jJvGghA8ZKCTfg4CfZGkNd2CeNrsJyHfzKyTfVEFVbAFGF246q67SdUMkHFSSNvcjqo1",
  "key10": "3s9A7BGCpjKJZVioANN3UWDvSMBxi7HQyR3MEngGDegkC6Zy4mWsLNV6efhve34Ffpi52ubghWTFimrCJRAfDu6D",
  "key11": "4VW5VyMtGkbRXnZ3tHZh8Ybr8qBVomAi2ssD7ztLhvDChJ7vtdaSPy7Rx7j9vrxnd3EKxAZgNSJ3WC1CnhUyKxM6",
  "key12": "4GvS5AfMVQkqA2p2ELTQGeNU9WUk91MWoZN3CQcuFguKXGaujEHcDrb7LEzfkpn4dCJ5TLqzqMN3A4iQDoB2uZYQ",
  "key13": "3sT7J3TZPpX4VDvMsX4QfiuP5Nmv1NJJCaXVjjHUq3X9eRA8QuKt6ASaSikfZys9FDpe3QgTKXKMFKiNioTt7m8a",
  "key14": "4DAGPVQnhBiPjdCrEzohovmjCBrmw5FLJ71a1u3w3CeXMXdd1HDGeFVJ1dYUWeAceaBWrgNT83GhmfJLzVQH9Nzw",
  "key15": "2zJPbM31LyUxgSzoQiYqRg26dPiDmhZwHJ2Ke5hmKY5NFXp56xKBWrHdKQ2PcESDkfmnosNMUg5mUYssZK2o8QWX",
  "key16": "2WgdbnJmh9vktdG5MtL3Piw7FTkQuRJxUerLgCpaUPy8brxUAq4Wh1EqfLZPkjUPYJpMrkSpMVD4TrqLkgE9QBxs",
  "key17": "3H5WVwN2o8grWse47AoH2J2ZzkBFKXW8Aw1ANB1kTj76u7vZRvNNNdNNeWKH5DBGwKk7pdzL4zuv1XeCKivQXkj8",
  "key18": "4ugkYziy3GiEiBnqNwiKSYxZhAu1YMv7cQghnQnuxJr6mVN2A5CSUtYPqQvkt2zAY2dXKt8hnaBoEfK4zST3y4mr",
  "key19": "5WqSKaozQoNjs7XiWd9a3toNeLQrPxHXczrGTbjdiRNR6pJX7DiaWjP71JhqrfuMxNFZPWHkUCda7yjRPSBVAqed",
  "key20": "5D66yYSN42pNX9LaNUu6q4eq8nexXLu4ShysSaEgmCeJvY9D4FGJY3djcbNEbPfQT8bXezogbsABTbzR4xnZtQpS",
  "key21": "2snXtsBvxvbxbLvyNDvbCGDgSnNV9y5kUnXr661G6YWjkQmfji6u2SHat2DfF7YHCQCiMp47meTPzMoBiTiZZtQa",
  "key22": "66nAYmRnnyUi3eeEM1nmdqD7PhLFWQvsePBQWGSignk67Moo6HKRRYz3dA3Vebo5nD6je5aEJQ6eAXsuYmkYkJLT",
  "key23": "4UWfkXTe3erK3adg4Pf9FYimTaYQWWDfktCQsdDHBCUcNF8oTCGrkWmB2scQNBDRA6dTSfkDBF2LmnHAqNocWbxw",
  "key24": "3H77ZsM3vsLCRC8w6c3kAcyQgAAYPafVcFyZ6yFhgbqpofmCY9Ht4WfFy2vN7GAJxszEBqCp6TjKSh1pJdays8oq",
  "key25": "3ganWUFZcUjZgL4kyqRuF52TABfeKv85sRqczayGj46qHr1dYjPurEmdu3HdX1e1EVF6AJLUKx1NoLth2pPvNmED",
  "key26": "4zJge5yWMF5oDRbBmE21tPLMH2C1ihT7gH7kqNQoStH12XDKceSPgug4MiuB2f56yymeqbMfP9QbYvgcnDj6Vsas",
  "key27": "UpSWpWXQ9wdDugvXwhXHKqfsNHiHqXVktjgLsY3LhTRFiFykTBscXePno9ZbyrW49gDfekg8aHS7gr31duTmeGx",
  "key28": "2WKCSKKbYdBnuvfbVXqgbwew8gMmycaSwUjjPK3g71w4gDd2nMwaE5uE5CsTiXfqbHTrH1wQHvTKgT15wkntrjm",
  "key29": "3KsHuwpxCXeKkv8q31nJb6ZSzHxC5odprG7yz6atR4XqGrXvoBnHfQNMVSVGYm2Hs4dP8FWRbFhV5hXiri1kXq9B",
  "key30": "4zqbAkT3xCFNbK3pDkHaHH1a6RMHnxp2dp2NPHwVBNo9puFMLnMkdLDvuVhJaWjxsN588rAq3n2JNtq18nVcYkRd",
  "key31": "5KghXA1L7uJWfhmxnmWNuChhLEyHFBA2JoMnB1MEV4GaUQyuWUCrK3xuDAJhyqjAxsKMEVwwaJBEmwhAUyXVy4L",
  "key32": "bT56irvx2UXzMrPfZw7UZWBzGLywidngVrggb14WeHmV2eXjznA9BHRYNExDqvhaezWZdDzHgvJq2ZCQMfPJsZ8",
  "key33": "upCw4TR1jBz23wuanb5tkiQ6QB28T8nju6afxARu3YX8c1og8Y8Vd3hdFRw29LUx2VBrJbnVsFPDwWc2HvY8Z8T",
  "key34": "2QbXGXN24tpCX3k9P5kBhTpTbRa4BuD4PfZFCKf3pT5Thfu1KmvBX73NRu9vKFyWFeMstJ3aUei2jTiT2Sku58Dg",
  "key35": "23RC6BLQg7FjTeB9SiU1z79g4rqFTTPHQqXbrSfgRKB3uuPGXsHqKMswKDziYQCoWTkKhih74qTm9FuJyrDTVoaU",
  "key36": "3mVsrUXGJUMkUYDYVTsGTAopUUj6pG6GrqTLMA6Zaim3d6LXRpmciRqNSLspzK6LZWYkc7eR54K5H2AeRR9UKPhG",
  "key37": "4CPMzDAvVR63ZLV3NZ7bNogdzXh8MDo8yEW7eE6UoBFCrUM8x1iRApWg6M3AHMkoAYAidyD3BB26mTeQZ6GM7ady",
  "key38": "2rN8yuw1Jvo3H8e5NJdUQt6qH33ayRFmeDFASq6xEo8dbZaMHqmuGjmjoiD14aTAYWLGzWsorhSHj1Prak52PXUb",
  "key39": "4WS8hfVnmuzSktqwcz56AD5oXYYgzFQreVUdvdrLpoYH7amXLL522q7xVkUFtQXd8WPjbuUbgiXfBQeYnCjvs34y",
  "key40": "2tA4RZ9nwuMsC1WUoMHxhGoz13NMgJfjJ5ixLkNrSnsmJd7LEMVKycgRyeoCUnYNwJ7P5dfLgF913xPqhKCM3VGV",
  "key41": "9iW5t6wX72cGh7P4ZJS2XtajdumdRwHhbmGYrhNwztpJDaRKUVYApjGbm12ZxxUsN3BLkAc9dkbH3DinhqM6Sqv",
  "key42": "4pR2CUfpkuMxU87gBryQ4zLDm2Ln55mUYgQRNtsBGhr1a3aLqBFNQidzB1kD2qtfbJSaTrqmrhvhaY1VPJmxegoY",
  "key43": "3u75Jf5VqUauBEaMeD2Nw1X8kQHriMT41heYgeeVyVGxXoZwCQufTW2oNsr6cYMJkkzHW1huefCVFsAHJVGsARxh",
  "key44": "5cuqijSAWKuHvjqrsFxJrDtPXEkfWVZTih5F7LRgfWJQsF1dDFn13xh4RYYhJoNL73AEcjz7An3J5JvAyyagFFu6",
  "key45": "58o8tqbnQd49MWKurycLxGnctoNhLJLbcPyHzjAyWX3vhGmnFBkV9upbiduz1yQpvtK8cjeLGVoC52rS8UsLMaDW",
  "key46": "5VsnoZMHVp838SHyxPPtHcULxbzwRZiW9rH4RBvhe3XZKuTTpKJv6uwvv2CwovBof3qJciL2bmSCmvRcQTX2oQK8"
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
