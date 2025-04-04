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
    "3AfozL62ue1FK8ejyxavn7owSZViRT15WZa8WAXrfne2z4ZefkNP2JiC6u3DhcWrUVckTerwF5nR99HBduwou14a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VngcVdcwjVaPpgLFyTZ278Vi5EPXirMUxPizKQwCfQgsx8D1ZYCHRev6ejVNSSkPP75siVE4iAAxo9wNjSVtHaH",
  "key1": "5CsQUH4SDMb2XjRUWECUCwrM61rY5UnuQchSv5Y7FTd3s16g9NuU6E3rUT3wD492fcBKCDx7sqstfEV6pvcELpHP",
  "key2": "5p6ADUMnCvsD78oUtXyGQNsD2GicaE5Yb3oZmxEZkLpcyG3anUMidLHsahXmi3ekzHarF23GMmu1L1e8ohgdspKr",
  "key3": "35jvAMsz7DqGgTJoQ4Q2JQRT7JatyYPNYK4Zjzc1LPnPJaBXy8wq6MKtsQkVKFmKBSYvzYKJkkxY9vQ1NiYSKxpo",
  "key4": "2U5X2ecmPGfpGPPrtRTyJKXy9SuinHLc6bGCKCUe2zvPmcoGKv7qCHQP2A9YN2hy7LkG2VgRJsu4SYdKnEQuoMVs",
  "key5": "28KB77C8Kka98wCciccPumgyswfdtaWjYdPjJ9DVYKPAjpxQvzXTrWX8EyqnT9obcY149u34HT9Brm985on2Q1ji",
  "key6": "5tuECiaDhiKs7kHQXv3a9SQ7dCVmXbaQWUDrSRJEpmM1VsmEFDcStLenVzzCeDi9r5TyJiLbZc7QWnNi5SFPBU4R",
  "key7": "4QNDEYT1R9efySkSJjPUEKrsBd3VkSLJhjz5ZbWcLTBT54gR8deDex7CSz5R93yW9HQeMdsccHvNxS4SLrHaZNhg",
  "key8": "5dCBgBDjiS1pLUfkyLeEJ4XuhzdEGERScvw3S5R87DMYyvbAM7shZ7wTYXn91LDoS3yuMhMbMRogXrztexwux7as",
  "key9": "4mQfVUxuizzWPNxeBLdb79m8APnQRbFWfRccAjceD9FAn4bDY7K33psRyZwgoU9umFaL22HAURNwNcAAwjkMNVxr",
  "key10": "2Xzn4Xcv7raXRisJb9HBpK2yrt8aPSGRzWmegrDrpaeMBTgebAcYP9Srp2KnA3cr7x8SNhNik8vvEyQdatEh7DnB",
  "key11": "26X3dtcxWikh95yKpUTkUxW6n5fuYFKh9jGW4VMWSyrkLzX2Vy2f9rGHwE2QhHu8c6p4DVAYhHo6CCCdujRbJv9U",
  "key12": "2XgeUg2NeR577w4tCgsvC2sVqYdYN7xWFSepkbTTNPr9eBzZcc8ZXGXZiDoj1Z4hheHQu6ECCQ3QDPZs2YGNqtg4",
  "key13": "2digduSgsaqEBwtFJn54AVxyVpG7rtYaH4r4vPVqPQLsXzQVeQNjg3Q6fXu7Z8kxcQzDQQ9BvVyeMwv63fBn2x38",
  "key14": "5C57fjY27KPzVuHCDFsXTs3DaG88NBsw3Ey6vP1wCbQwSJxnrPqhyCpwfPbfBfkd9LJcwfAXGUV65BHHQhrpUgYe",
  "key15": "5fqurYnvMAuCqopZwy2qE4BbseYqkCnZyCaiuoRDgm8HUoKhJZLiXYBwbMfjvwRMpVdNVizF9fVwjZcGGhW6bRAV",
  "key16": "4XoNjuY7gioQxu4s8r7cSWxTJ9BMqN38okeipmzS3btGpQYFEmHxir38EGRRGCSvyjsQpq2M2vFwLSdzsCXGLxKo",
  "key17": "4dLMrX6jJmYLfEeyj3UHNJPPywfcqcD8mF8KdUjn3gpbxQqPQRajWnr59rpCn4tKqMXWG94zULzbapU3TDwKZHUo",
  "key18": "2Yx5Sd44uqBUUtvieU2gAxizK4nJysJrde2dA6LAuLcYa2imQBqbXWBw1mZ2uudaWTDEhNRSb3hHxeCLYfP3AszH",
  "key19": "2uRjXpvSSWjgoBSDoM6GfKupYxKvMGUm5zK1xULXx21xsJNuhf15TADiEPZGHMxJNqcGKkxCJcYa9N76xaVSaPxN",
  "key20": "33wmYeiLDr9XZQqE2DZUaY2YoVvwsaXCoo234upWpHbvUrCotVpQLVMy9V7WZmskqqaFz2bvGhq2UMNWPH4xGqmt",
  "key21": "3VDDvFcxYrJZDaY6awdZX778Wp8QxixJLy1PRqS2AWFj9hdb4Ue1r7W4DfovZYJjhrkhaYkTLbKvtd8Tjtt6QMq1",
  "key22": "5MJSm6KrpWES36Wx8rMvY6qUHYbH2hoGL5B1qFniqvjAXCSmQn8Xdv6tqGQ9VucBVetp5nBfKg2Y3XvjffmJyWxL",
  "key23": "22RRj7XUfNMHYCuwpdV1azCBpypFYHEhsgmSwHnPUtxAmkV2kUywvsDZXnfWscGw55VpnDxiyeooYMe67yST1pxE",
  "key24": "2AezMiizN7MMaYBLW5ExD1soqqGz5uxeTEQ3tabso2wJPunuYY6j6LKuRqmaYPVY988kkfb15STXjHY5tinbQrih",
  "key25": "FDMPiCx8peGcUZra42vCLvBu2dCaah5AfPbjjyRiR7kXPg7GETWDNsi8PYgve7Dh54hNqCnBKiYfNnTeMULzjYm",
  "key26": "syk4NR9NE9K8WPKaYnq1VBXtt2gF3tmbPQ8j3NbkUz4oSrxAM8PBP7guAvPrWVSHcPYALYvwegD9oUgkXr7xDsV",
  "key27": "5HZJn3fxVNHZhvip4e4mtUkgGHj1WDwqm8eG85Kr9JjUNz3XQEVzNCrMmAWQQFVbVJb5z2Rj1YtpJjkxXZfNkKA5",
  "key28": "5qnfQxayTw2Cnsp6UdRw7mXwacoC7PbFTKiDhaYJi6krQSCAtRFz41apRVsgoHGMX6G25ExfDpgUiXqCjXVhMX99",
  "key29": "4smvrzhydeoBonSvHxS6GkYJv4fyzr9Mx6k4rPyXNz8in6pzBHKZVbBmJGEji13HdKQkhk4qpVRWpHbtS1eV2hWs",
  "key30": "2uNxL7DvGVie4EWNgMRkdouszG6sCyimp5ms4GcUnPQppWVLeaUu1aMns3MSBzvpMfoBFtG6hLczmwkkVNoTi1Sr",
  "key31": "3htugh5G6HShihNxeUaw963j3M5E5u8DtyjCRuAg92ZasSWJf3udPAfdxp5PTvPbVFMEECimeX66NPsr9V3yRoLS",
  "key32": "5F4YQqwbHZP7opaxpFDyfatF6zmXin7YLzd1yXHBzzYHe7LGioeQvT3nTMm1EcLqB4TohB8X1pmMSCCuhhgoCWFb",
  "key33": "285i7HMCabangUWamvuj8aFEEK63ZWApfeQMogCcLvmWnk1d42cXLHhfzYDL2zppjmUWDLzmQ9viPCdYxKsrxdDx",
  "key34": "3uv97hjxoJMWWQ79Hestk8KCYY5Xu1m1jfs5xHx5Ybr6MFZ7aRg8sz69tmsFvpzwQ1JWyGKEmRvcJuye7H1g94Mj",
  "key35": "4ymV9oG7rU96GMjQrE1x4SoH858gFy6nSY2GFB2Twx3Hx7RQWqKa6f8dx83fP9ecZmuUwWvxChLuo7rfKJJnccw7"
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
