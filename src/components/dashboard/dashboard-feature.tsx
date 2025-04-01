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
    "4Ayc5AiXAjaHZXC6e73WhtoibCu1zYthtHvvDL1xTD11uNYrBmmf9fF6iSHZQFnxspU8wqSsLKQNGkuYZCMJwLcy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Qp4vBnQQ9CzZwgz8Huqmi4QSyR9KxXfzvoJQhQMphSh8Dcd1pnEEkErxUKs8MUBrQanAr9Xs2qRhzRWRbCHFBDq",
  "key1": "4kRDQLacBiaJt2VLDfdiSRAT2j1z9dxCRY5ucPzk4FRvd6yzS2HLZNqfXieUeL4ijrtocQXnAzmL7jWeQB3UBM3D",
  "key2": "29QydN6dwN1NsrKWMuBXVrwcZzQ9QHuza9pDy9jwd3MQ8iccmABxsXgStuq2BvK2EBEj6FfptjFqQ9fa8T78F7X4",
  "key3": "2c3zuvgyrNwVnJj2Kn5wZYA2r6zYxCADVGV7hZmUQs6aCZzB3gTbfyxyCyY53m9RsWtULbTLCfT3FoDi5kxAonSM",
  "key4": "4GxAT4eXEGCszGXj4RssMMxpiUKGQvq3rvpWTGh6dCD2NJEAUQDNyL5zmmTrvCbL3QNWGsQs6HkfwcmKWbkyM68m",
  "key5": "2qPKMjydTdkr8j3Tw5UPCeFDDpEx97e2cbft9EaazaC2ndTH2jZSEHWLjLZezGvbE6kfsvVEPU2V3PQX7mYsd69y",
  "key6": "2kT7BwEYjfJoZ7joouB27g8pwAEWThFjkefLw5ojR1WsoXCXR6zUUTScNpTQi1rxkGrWoFCpUxXSnxiN5iGUkfDG",
  "key7": "VAHB7NmdRe9Gry47Rm8hBLPBoVn1dfwjdRGeiuJdfmMN8C5UmC61U8ZpvJL9fDEqaoWRRhVZfViVCSDJAjC624F",
  "key8": "4WKr4Ju6zxZV7AuvL16NpXWaPivtFz8h6Bao6ugqFqkq2dYA9w7v1qSHFceZSknwJfwxmCN31MwS89RnEqkhVR4p",
  "key9": "4pHNuXbnoubtT3bkJhGyb5cC7Mka8Rn7ZtSR5G4fViSvGdkwckcCzKTcioTrhst6ZsuuvsZUzT1C8bHL2Ribspfs",
  "key10": "4kReukYVpgeWpVvToT2ZYYrJJe3R6X9zwRtyjFtLNazcpyKz7bDdLNgFhrUp9dP4Wv4A86J5JVHv2j9giQXd2xCB",
  "key11": "5pbqU9xYbpKKYeMf6McH33rbHbKMZ2EcXrAKLsdSNd8zz1kJiJ1w92y26S53tM9Ktsz2TdZgistqkrdxYwCJ4x1Z",
  "key12": "4iCTfFE6k6Gyk6VjX3iJDWquwBV1LRiMnszT85LfdJtooezVLKJ2G7hmj54e9652fs9Xscd31AoUc6WHzpbEF3wz",
  "key13": "38dtbZCyk31xR9K3eZFVXNFEpWiW3SSPmYX91qm5a8McXt2ZwWoueFC9HozDP8v2FBGvvrGj6L7eDAcYVvR4pZSB",
  "key14": "4XwxYMrcmiXjSzcHCKEPiNuSNCCp8JVkKCLTUCqC2y5VvApv7in67jF3QhT62ZeEb4mrvCHx7uWF5g3dCbtSXEnV",
  "key15": "4sujDjCLRGwEzNzfQysHBWAztAcH5w9yNZjWtVsa1DsSLpZVyWYp8vES3q9r76V4JxdEoVtfCTZ6zwJU573ajqtB",
  "key16": "5CbRTmvoEGf3wmm45fS6u3d9fQViwPnerH5Ng9mdEfp15SusiEh71Eu5E3DrR2Nj6t1GAv3jSf5kRMdn4S8igrjx",
  "key17": "4uVLTvT4HALrg6mTk3NkMqkD5FCqB2DhEutapTAHfAczi4BoPmUFgpQ65mahkSsrNNpVS1GRhnaun1sD9eVf3Vaw",
  "key18": "5ASLedpVovzZv5gzVbW8S7psstT5fd8JtRTRmc4JuwJLVeKPVUC8Hw8cuBPuoNYBJpz5tBD9b7NQakRTRN99izHL",
  "key19": "58oZwk36mNMmuRcwz3wSjK2BGGPPg8J6KTPTq9M4KRC23DYBrPFHNB8dAiu69Yivk7pb4hNBiEVsnDuoeoQh2Hoe",
  "key20": "2KmAGyHbrJVM1KeTeW6BWHYB4KXM9LfdzgvhyEACanucCJsE9NGPRCcnNu8MjcHu5xp6bG1cKodMSCy6XCuNjxsd",
  "key21": "3Gd5kfBR5DhZAmiCd12zZEJnkFwxUHnzppASTcDYzMki7eV7oRZRhfv4dqD4szMduc26Er18MYCV1t5Z4AuPrhuw",
  "key22": "5WtUCrGMefgzBkmdGsxAK6fKbg3GQBDG6APyR2FcEsNh71M5VLYjvJUkZq4xJU37xF5yDiiS6R4JTR8uXjfccWsc",
  "key23": "2qCnUoywxYHGd6pfiLxryrk6yJriB4zgt6F566K4C9gNQTbCiMaSbW5ispLk1tbcnznYdbq2SZSKzCvLMxZpxLBV",
  "key24": "4p5zPZPxomKoe4fXnbS2eqZMzdiPphMLQRWrH6iBQzV3PAp2t3NpMgLqphL98Ng9anag8qaTU682yB4odAXKzhtL",
  "key25": "5ALpv6DVzFhRDNevqZUGzfAqXuxayryk1GwsyGvonJHB3fM2ahWq22iieyKtFJe6SZwWPJocLAWSGCYsvpV9cBJu",
  "key26": "PcVKR6V6FFaqb4g8DGm3qCyFCenPSjxbWWxTtKErcTtVaAGWNuVbR9i9xnMRPaYH4ZrnfFZ7mNJmaNQ7tctf54r",
  "key27": "4PP2mSsuzed4Yzzt3wZTLPDqiFMXRe7dAUak7SMXVhUUZsvBrMHZ2FQLQMxt2awPbTfUqoYykS2BwUSvgrj7qqPk",
  "key28": "5SRH251kE7FCZBHKjXSDhMxfWyGu3ATgf93YVpp8BSxX2vzAT3PAnyRxQ1HGwe4s1H9wnCFZfsysvJ4jTfxKdZP7",
  "key29": "3tPvYcAkbBpBY4LMC3veUACpEwVgcvNya6GRBF63MDRP5R4eR2bRZ2Kj4wusfBwZ3ioi8Y9vWxF9QrpaYoXWpkGT",
  "key30": "4HZQNVUyuKSER3mBToJMKVVjmJ4juusQsvW5xCdQJkf3FphYJN4Zt1E5kkwkbG9UeAaxhk5Spv8RaJCQqJpfxPYn",
  "key31": "nyqjuPDvijBdiRW7EuNprj1U6871cRL1zqrn5SwWjjXk773CoaTgJQNrAR1rkGArpg5NvABRqNB9nTfVUMU9Nsh",
  "key32": "21XuAg18pvsFumBrsvkAuvVzLeB6nd7TzNeeSuFYqMQ5pEtSC1Wq16DKNTWEX6JS3eseUg532mmPgUNY2QmDZ5eH",
  "key33": "3WiuymTBvQFgytyR5hY4T9JvguQiSCTQQ1xf4Nut765JYzW58vJEHQSBCmwbghmjCUPckwZfGnWGoAQvoUS8VLpa",
  "key34": "3NwkYRMeKVq9jmLo3Kuc7PqkRP73SP9mi38RG2JxAFC2k8KpyCbxYCBJ4eU3a7nz32VxUuPeUwZUEhD4pnsCwhUz",
  "key35": "4CGMC1zCnAfJ6yaJEaVQetFUzvhRqGqJUcBd3HuGvwQ2DnXwp56wFtU5GriZaHjDGM98cTYTc2LRdqe8CStpVaeq",
  "key36": "3321Ndj9wxFoiv151bZ4gVsReAbTAmJyxFujuc9pU4NfVZDCSH1KNmtzr21hZzcqcXoeZuy56mDegBJc65xC6RXE",
  "key37": "4Gm95Yh6MCkBEKrk1S2GGMcSqfNdCv47rrdwbYeVcuQQoyawYLWajLLLZVqVbmKz5avHKBdWMWxmTNtYT2333mQi",
  "key38": "3VHbcqcjtuEeQSvq6mHSgd3PVj7pqXZ2JjVVYfr7d9vtJD3pLyZzuiJy14NfqYkLM6rFgh2TaQX5bqGfQNEQ76Jm",
  "key39": "4vQ6u3VW5zDfUme4qL8N2ZbJksTDgUhqLQiCAgGo7kHBiCjZVwZJEhomTGbiwtW74mv3XyZTtJmWZb17fBxyEqQJ",
  "key40": "2L1extHU9LCkyrwYdVimCSZppUsFkdnPuETnujHc4EhPYZ62CqQQQ4x6gtpoU3hiwYzCUPjrZhWFA17FUR3o2ydS",
  "key41": "a7wBfuPNWyDzD9Le4x6KvUCcC3GNvasuxWsNZP9VCipZCHVhiSWXmY77SM1aMS1NLaWg5sNsUEHbrayuGgxkhkb"
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
