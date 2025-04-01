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
    "45zqcWnZYmX8ko8ArnfdriMAmRY2HDqSNQa8sy96Tth377WvstTZCg8EoRqLSoaNgT4KV6ANMVrfY2TJbGcBZx4s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jCZwgoVv9EwiLKZAVEvr2nTF4MYKHvVtCet1eoBXRZrFuyvkosxKZKrQdTG9maNeeLejHWVXCf6XurAkrPk7MK1",
  "key1": "2nRUACB7dfNtFBgAy7SFQPijWm65C3G8N5TzuLrEmz559gNKqTn2SLRib2PTuqcCanbYEzx7jtdUR6QK2Z4kkBsc",
  "key2": "2G6X1B7A9WygnVWcfFcgWeAtwvrXFRc3p1EVbEU3HdeJ3T93YScRyEVpMiqJAWxD2MsAiFN5TnuCBuNyb499wc79",
  "key3": "5BUeNQV7p4j9A5p58MtT1KkSGR8brbM5VzT8wgZeKQEK8bztkmmgFL5Xqy1rtToxt9K2h53UQQysVby7BmkjDY2Q",
  "key4": "42uxYepPrQfUHrj4snsX7S6N6eCBnZx6uUmFz4vkNcn8stAbfy5ue46xxZZDmzDe8doeaSLiTMioYPVWyPcLsNGE",
  "key5": "3doZoyB2xf6qyYhnGUBDu5RMP2QZ8cgiXf7jkoYZhWLU7DLkD8Cn3teZT1JoQf7W13wiyDYchmZK9qBbZMggzdYZ",
  "key6": "4BDmo9CWEsgNW3rrQudhB3UxW3YvKNoF9teEDgUWKSpCnK9HqWSajTsR8Vskef3XBXGg8xMXzk6SNwt8YbwroviL",
  "key7": "3nGx6Q5mHiQQWBPME45YwMVSmWHcZqQXo9K2uLv2BW8ZjNwcSaRU9q5taUigDV8vdRN4yNUJdmbBckFrETZbZVLG",
  "key8": "3nMfw4My5KAE5K6djjrwz7K3wSwyNUmSaviv4kj7va9CGxsMVzxPhtL1cn8Mz9TeRDVQ42EjdtbM9cTJk4pEVBt3",
  "key9": "4fziYArst7cQeFudpAyFGc7P86zSUQG4hNVC1GKApEFxJuBM5DPQfebUAfiDbmg4mY3Kuhgntpn1b6HWqMUsdnCo",
  "key10": "3nmae4KJJDQUCPDgmt7Lm7ZQcB97xZE3YCxj6TTdMUafxjztemugLTB22pmewPBZA3CPpmmadkRp8N2h951YJjM4",
  "key11": "5eePukvAtqv4cnPqXxpEkdBfVRAWJNm2mNGNbY4h9u7DTTagEXSp9xij9Wr5dBWpUp4tzmLqKbLa33yVypi6bz5p",
  "key12": "REdmZ2p2M5eA4pRPXy78WJ9H9ExB3AtigJt3dYwK65o7xgK91wjzUhenDFpptBKMSSkJ7x1eXgY7Y3WmAJmapC6",
  "key13": "4LR8xB4Y2XmWgMTa7mfFb7zWhHoKWrsornpnTFt2zCnFoEj3x5Fdezw5nkVeck8cJRSb1yjj5hor6nmx4BYFXVAV",
  "key14": "346PTKKtTF8UoybfvkKDpwfDtMdVmfLesCDa41FYtiuKqFoghsQtVRdhZxyXCTVSuXbUY1nW1nCCpiU41BDX3T5z",
  "key15": "2Krm3mMFNrkdtQdNt7kH3KiWqzfkiCwzpN3hqtmL3uY63CQCvbM7gQ6iz4KvXNFUK8aSC4WkTGe3wSJ433z6BKLN",
  "key16": "5NY9zeWqGLRgfhgswMTCiYLxnvESViroXaaN6M3XabqpgGAcNXUb8LKEqFL5zJaRWYknwcRh98jdv7qwRq45vPX4",
  "key17": "46rRtw8TEikhhqDdHdR87nCKcdYhBxr28mwSL6LELfsxmDKeYzRF1w5KppVJg3QwGNbt4tzpJSzf5LerW8Z1FwbU",
  "key18": "4yzkrbzLHWWJhQqH5A52WMQdjmdZVLSNftnJu3eAiaPsN4rFQcXQc1AiQizsZcE6homnpHFXgfsCBXMWbJdZsgsb",
  "key19": "5diM741QiorQtXzYzEw4ZDR4XL8TVL3gGPpBREoqR3jPjVgCuRjUng5m91Xj9vb6FbZrxP6a86RWhUErXr8s8uQH",
  "key20": "nNagkFpTpSik7T7TFwb5dBhucuJFWyqAzjQo2BxAYm6eyERVJucsp77or2boi6WbjLB7Kftu34UtLffh7Xy6sSi",
  "key21": "3xkYKCEUQAj8F9W5VAU2wj1wmFLVMUseZPRWfpF1tc3o7JXt1wb4LUvrRzyzBJawD8EsfbSiR7hcXrPmRtTAzmRJ",
  "key22": "4csC4Tri5f8amWHxiRgqkSzNDEKG4pyrVZyoYEWzMn1NtC5UEqB5fwyQu5xiGP3cZqjVeHgw2h9N6VhKxmuuEFup",
  "key23": "382rxLXviWepN2jAmSwib47mEC3dLjfgT4iRzjPR6hSVz3SaioeCAKW9qZcrZY5ByJxsiwLuxiPB8RxXLDb21kwL",
  "key24": "2GFgHq5rbLjQwEinCFpbK9VYrT38cMkmhMV3DpBTDJRCoTjTfRiV1jnpqhSg9UpCUeB1PLq3CQnzAaeXHH8YtoSa",
  "key25": "4wfJnmTPr2YxY3KAUv3cv2vjGJkHi1pS9XZXbnWgW7hUyDnqHAoBN2x6xCvdVvNBGW4jN7Qh9WQ4fiSZV1MhJnfL",
  "key26": "2h4pF83LYuYk2vdytG9vvhjUkaoQNg75Law51fzx4nvUEp3L8hE6k3AieQLsniE2E4UZKTFG8ZJ4M7eZS1qm7cLu",
  "key27": "5ywFUrLvNe7p2VZ9anKyyoGfKrUS9gdoNby8b3jRTcwV8eKxVcT9TGv4uyVsiP7DFtBUBAssyJMJfkp9x2TfW3k7",
  "key28": "QvXj3TvjfFKhFPbd3Fh1oDygGfxj9vRZZXjANn9BkUZsqWLZgMY9SXD1hmWP2FYgpoQHWCnFizsQvJshJH2qPLx",
  "key29": "4Dz4C9rgv36wW5fKQWTJE1218dr71G8MtRJyynrpjKR93mpcVYuH5XjEhVoe3yKGKLzTowLu8KzihV8TK8onWsrC",
  "key30": "KPMrT9va4xLcW3qPmymLw6DjfhPV3SkSWDszdCjG95kcup2Ztp1jK6Wjc5xjxp8kLW83x9vEbER9am78UdhU6As",
  "key31": "3Dmhtsk7Vqa86p7U3WKJhK8ckCDmVLbNXvoBrLcjjBSRM6vV2hxEK4y2W3bpqZ2RdorGrDDtGSoEyvs24mHYNBES",
  "key32": "ZkWUnyrGyxSKSuEjk738Ktc6W4tm21pyt1oUvy5J2QUT2DvLjAy3VXY1266WehZ4pvWwAzpWnLFfpZS1Uj7wwBu",
  "key33": "AxR6g8UgPqG9M2gm9qeviQoTkumtvvqNyt5T2t6xvFaJBYdKQmsDMSKjjFn2zksmYDA45Xd7hF2zHA191vnWCk5",
  "key34": "2PVjsic3dySQarVZegV8WHvHPdkjVnUFeLfLqueiaGgo973Cegz8wxKcoBQw6soX8TB7rjj4UVpKEfwVgJt67GQb",
  "key35": "2RKb3FqV4mMZjxSbwGg7XRTWGnEa8JqPduZCJawX1A4qnWZX1kNeAiCkJ2E4JPA8CQFw5wyrSb33W6viNxpNcDSW",
  "key36": "5AjaPFs6uhowg1XYaFaZvHtL9y5sMXVhkdtmTpngWH7URo8HSHVZUx1eLL81MvhU8ma2k9pZwgH4CXnCNcRHzhua",
  "key37": "56tfhM2CrqktGKjccFj1QYH28hDrzBhJJc8iefeiufKkXFzRW7M1VxHveXonPCLot6ir7c66JrQNtyXcuYGYMD2N",
  "key38": "5qXPiJdZFzzrPfQrbJdw4FAxsHPbwqUt4jio4zqhVJgu7MuB2P1c3JgntdJjXisza4UKqP83vsPDjcYLMuihjGiC",
  "key39": "5QDeFQUoN9DAbhXWAy4gaC4ZSVaNBH2BssEJeiNxGSCeXKe76XaxWXraMoL7fBKBPcj7BopHSxs8uuBrzdBCW9Ln",
  "key40": "96xF6UTVnmFxBd1njo8uJnkTtfwimC5bqWzHeVhs2GckLSMETUx5GB896mby1fPyXQPBuPH863KXSy9ZF4ynSFQ",
  "key41": "5q6dyYDWVd2fGBs5ufoJ3XtD9ackUQ6pmtU4stVrLUHUBm3C7gykPcG4CZYDVS9YCHyoLaCd5EBbM92LAfHaS7RW"
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
