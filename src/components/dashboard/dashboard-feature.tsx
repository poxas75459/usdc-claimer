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
    "3druRR3WnASgqFmKCNBSBnpZHYg1xwPVxvFzqXxEEzEoeKep2PVV6p3Mi2kRBk7yADDGhZ9pv6uP7Dsv16u6ooG3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67Wj6G4bhm5YLraQYJRa5XSQBq7HgfHzWFwYjuxQYJw2WeH1EQyKfLfmQ48mEH6UTZUykQXJMmWkW16sWtCKU6d6",
  "key1": "Zhv8sWjKSxHRj3zPovCiTRPb9X2kaSiyLpoy3xxYcqBsGoqkK752JSEiBKx1N7yrVhofdHkGaq8gmXt4vTYoJ4Z",
  "key2": "2J2A1X7Sxv7ikdfPCvSZiEcRr5Z9XLKo7FS9cg5vx7M7n48moM1JfYwPzrJhMCWYdhHGHtxC8rGjwxzJqXHPPzM2",
  "key3": "4kMn5aTTCK9qC2ai714d4pdozvjKAyGAG55rkVxJmQ2jqvEejzUZ716KNJzc6CA7nH4aCMFJT3Qoe8NqhvYcpjNF",
  "key4": "2DGXkFy4nhezxeHbFAAfcBfrVmfUHge6Tj2Aiv7ou95SxTiuMyk5ofLvVffn5oEv2UCLtmVxbqYsrFdXXx2Jz6FH",
  "key5": "4dAAPimbmiVsm2EV8Fo5LoPKNaQWNETLnUWuNC5nRaJcsXRKEZv2gYQ1RQCU26jsTAAh2eNtWugxuCS13Dp5QAhT",
  "key6": "5Xz5uqdKd83Sm7VswnEpvGk85KANFTBvCbzj7d67SSjSrHKydtRDAuA9GzyhHQKy1sCDjFCT4ac4ayepwoS9wqqi",
  "key7": "4MEfeeGAEVQB1UfGYVTDuq2CExSaXfmFTpc8mTaoSc3yS3Cdo9CSxMNy6bUKXjChJ8PnyQzzdjLz579QKUwMLqB4",
  "key8": "4HcDmHRyy378YbRe3gzFEp86oeWGQwf2HyA4woNTAb5PEU8AL4LNCAYRvjZarqggc6pvZJJyFvSEfTmeGPaWbwy7",
  "key9": "5WWN3PGWstqCXNnfTN6CU4rsT4fchRYgNPRm2K9Ea6zLveA8wBLvQ4Ba8ve2h6yzby5w2Tc5C6LUCpGnewZk1qyX",
  "key10": "2BqZea2QwmnmWZ3ZmHKYbK2WzdXSmsCn9F1E4L92n3RQ3WgbeYM2yj3y7HgaWmMhgReNN3v79rK39uVfqD5SAPxh",
  "key11": "3prvNHdf4xvwKLgXXBtq4KoSiDVgag5JBAcesFCrm4gsEiCq5s8zR8DkbPB7KrXmiBTP8EFyQzofJTrDcicLqfP5",
  "key12": "2ekjdhrU3YZsP1w4X29JHKppYmKZB6k2vUHe798HpW41u5PUnoXaTKynKz69sQDAGGvpqzv6qto8ZdXfBMWjmRoF",
  "key13": "4maG1if5EspyC41P8TVr4qYQyQsTjibMhQ4buzzArnfTCnJk7HvzyRxUbivZEJhA9XDnXiDL7AKVkUibaQ7y1jC7",
  "key14": "VNmwdEP8PYFfH8Fq1JtkWEWGQcdSGc1Bkij1Ao5wF6q7C5yvKFYPnQ1vzCSZgvM5c4NawgNRkQFiDqcYmyZEx6g",
  "key15": "3NcMkwpyCC45njdX8ativLcWWRq4vYaSY7Ss2u2a7iUcKj7utvnrLUipdiGkMnqyxx9w5GFtSsHWYSNZ4mJaYU7W",
  "key16": "2ANMQTbKbgHb7Xe1YdeX4uKn4DV1CJ5YrrZrVL4ds3YMhUetxRzBKYiBWP6foa97JQnH5oQWvpzwebxKyF5Dvxe2",
  "key17": "2rgJX7GaNs4qSZuftTHtmyrmQEN33q76FUk3PjRbtotPAL6GRDHB9mWNHgeHfnKZ1oaWnrNQ7P2pwf8APAZvejTE",
  "key18": "3ENzdRZ2jT4hWZf2E7xigG1Fj3J7ULu9s6vwYskYVJbw43keBMLuX4MbL1LBxsCbAxAZLDvGtqtdV2AAY2zp8eKT",
  "key19": "2tpwZF6crstzZJ2jkMXGiJ1F64MqD7nzUf1p9uGCp9p1FMJ69Q9d516BFyL4su9YWrZM43pwpvPtmYqVckFRrDZj",
  "key20": "3bGT37KSh6FxaZFkj2eZ4tZkbrf1NA4o9xydDJy9Y3RNH57U2QC5wiUjYN1dY5qRBqS5kUKx69vGXP1Hcef1fSBY",
  "key21": "5Kr7g5sjPUCZmwhzGj5cXqktKcerve3YtBzJiUJnRT4pH45vHBxSx4F2ZTGuiWfJepWrE9PhLSfYVYJXgMkyZH4R",
  "key22": "2Xc2L4bnnYLRCztk45SDwxZkyGEn6rt6HHXMmmySX2uPvSHrPrQrN7tfShTELGfBa1iR6wxpspmGJAcvjigyobjE",
  "key23": "44fG2QLWBcYVeiB1E2Zqkq1cq7tr6MtaqQqeq1T5PPyiES5zzUqVbGpJ8RtYrdgLYvHnSye4Qufjhs1zH8gtVdfp",
  "key24": "2HZZiWcb7zCJiD5QszCZbUcAhTF6MoYa1vUUZq78492TeLpmxedn4KbMj3oytAa4E97gkTPt11feeas6d7qgzx7p",
  "key25": "5128BSMuKeN3YSsypDCbkwmgoEV3ZC7owNxGLim9sMyrQ35jP16S2Aeg4XZVwLUY9zFPfRiN29dYyvM245WFmDPP",
  "key26": "4fd7WVr9rNMiYaQMZo62CdZ6AVsy5viRjrRLo15L1A1kZj41G8jeSDozTnvJTjRxCEySt8YCzYLXfFVs15BeTHrh",
  "key27": "2HEQXA58fhfoqP7JwKSWdFzr6uBJJqib4eoue9ztjo7z8fjfopFtiYvUXzcdMNGQxzZiNwQCADePSy1z4U29c5aJ",
  "key28": "2yULHjM94o2j1eYYAsmqMQGUVbUtM8v6ow5WB3W6DFKf652iaybWcuMochwwzuqCk2mx9MqAs2nKmP86Tpzx3rcn"
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
