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
    "U15qGXnZm2WqY7wi8fWoxmgBBD5bcwZgBUSNGY7pxyQMdJSpvX56kvggmSzT6HPTF9NCTts6gjGRRPfF96hqzVx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PqYaJfFkPMQ67bFmXpoXLK9VuHkqm14jpmE139V4Eio8meLdjZbxqbWZu1oiSna4UXKisuG1d7pTt1SJZyqZyYQ",
  "key1": "228FTsZ5e3mmVSznMbR9RKxsTSkL25Ygz7CN64wF7TpUpv9E2PLq8KCJFkTwJvP71KtbrkVjCWfUbfxeH2b4xP5H",
  "key2": "5iNdtJU6FZLeCugPZoT4NsQvcUv7WDKT5YYjZkw3eFYYYcFWr526dry8rGKFmvxSsNcF6Mut4zB3BmtUrotuYdLo",
  "key3": "3X2UXS9WdLzCPiF9CrpfG1C1N95Y8jYv8sSeywwMoJXMeL1GrJvg9QuWtFL1KFJrnYLW35Wrn4a9eVrVNXXKvyq7",
  "key4": "LuYYR2jSWWVwyrQXDDVEYVVGjLCV6ybHoBnLLBnzMa6oBHXmWBFsT44UeDNaHuDrv4PYG1LADyjDrGk1sXeVyiP",
  "key5": "HWZM2GVXxU6x8W8Z37gSnqvyxEpoLNesjeeP3rMQF9aRS59YMhdoCb1NYoE6tB96GpHtznBLwbwdvCa5gqXZkQn",
  "key6": "5Sm1RHx6i4VXtEEdstEYV3dUo7Rj4DKyJ9uBFdw9Bu7Z5MkTXB9ayjN9NYC8eVjhskhTPQqPZcMpntYbLfy6E45K",
  "key7": "4GXmXMMT1CRZU7snw6AihVFQQtud6uaJCrapBRGtauXGL5sPfDpNAZr9JdJzZq6qNnVwsGqcPQhbeQyHQkRjZXk5",
  "key8": "5TXaUXsk61NEGE5uT68nQf3a3nMAwdZUFCUzZ2G2P8uWjS2MVna2TPJrt3XNnMoJ1kjNVP48koVfhrqvUt9TpS33",
  "key9": "5HRj6CrFpMYt5uK3KVDWdLdD7YVX8pNoRrodS1xyUK8ibof96s3c3Jx98KMygBHfpxkAA4tRUTDqVxR8cTtkc2sc",
  "key10": "37oGjiimg4Pw6SufTsxAtEptroF8ZPGpo532BP6hYmRjRpqzdHECMHFgm1SJLojFn2x1rYdZM1S7RijiXi27qbvw",
  "key11": "2tLTAjC9apKa6s7HMtQFzB5kEo6QLYF5XZdUYfAAjnVP7FkAnVsafTwGQAYGCF7j3cgBTzEnnVJj4qCtQDh6YRt",
  "key12": "28tgPY4t7sgeNt7wdNuXqntSii9feTmQMfRUTiqqCyMUMBBPCfQEMo8MKM2MJnydj1yGrQKvfknCjQgxS6CZUUo1",
  "key13": "4Qcy8dzbZDVDABGVddzungvaFdvuY8vZQ77RGGBjQ73btRhtFZAvSXwUr8bm7ifEemYM5t6dCtz5aDdngTSqSRFD",
  "key14": "5Y5UGPA9ehvEwiwsbAtjvevC2HeBZdy2oqdyTxaHhJdQWbprVQaNEJ3LCTUsTQ7hnc8qcYi9igTdd4mg848MNq1g",
  "key15": "3VcudWyU7BernhBPUzuJTbPozrpGWe4j3xzp2f2HFABAGK9JJuC14sGF44BBifjG9W1Q6vAj8DZaX9sdw3uM2ukq",
  "key16": "yCKorigzgAvxsY7DWowAnDCNiGnsgoNSSJcvhPZ3QncxBNZST3pMPW7B64ezCE1SSGuBKexRDCnwEdF5L6UfRJb",
  "key17": "2nxPhXw6QEaRYomEpvHP79ZsegbnDRTCgGjiTkiFLkUBkvabogagHATLK7gz8fM2y2XmiLdM6GEXZKph3dP1yJne",
  "key18": "47T9b6qpfLTcnM6TxxsFS5XfJva94fYsE6hHfrEcMAw1jEzcM6XwLNxhG6cXSP3cmefBH6kwNsvZpPdAFTWFqpgd",
  "key19": "2RF1epVf22HX7w8ZM7A3yKdBt1FYLnQUJqqaGbLBGCSUZrPPkL3r1XbPN5NHS8tSSeUNZsG7Stjzx41TBgfSJSUA",
  "key20": "4WV11GXzCbaMPjgLe7ughKdB4LJmT79NhmBkw5X8kmxz663WzPD8HoXpyGiJmMkd8Gckf97cXH7JqorfbduWiHFt",
  "key21": "4rduubKH9QB8zEk4u5TUzVZ42aVDfbjD7z4WZ6EfoWg87FGfvYSpjcWwDVtWCoa2CJSGisTdZkTwgbnJrasFZeam",
  "key22": "33juSuReGEY13wQAm42s4uGGCyJjAAnRjG5e8aNfDYNHas5sX3UZajXLY7FMs1ZuBL85n6ARVUef8dCeY7p8Ugfj",
  "key23": "46uaXagaKrLq3n6smUAsWPN2xmZ7mHZmBbVaUvyevv6nvkhM5caTEnB42vTH75gAGKzNL314fJg5z4QBUhNBm7L4",
  "key24": "3U46cy4w7x4SBpSRSQ7VVCsVhA2fr1ykV6jLLaXJUhWUb6Uj8VZQDghksQNbas87PxEn3ETxrjjPqTbsXRAapbXn"
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
