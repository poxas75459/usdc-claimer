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
    "5kjuYsz629x7NActmXB6fafPfD5QcSTRASibNvk11Lg1TwgTJ7tGW4wZtTMUuXvk6w5gUatfwrZ9HHE9rV2uEEFp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PT3G3upSg8u4BFjCLKMzPTGPdaAVnRwP9RpFdJ7oor1GUC4683aTX8T9sBcZbPavWwTM3zSsd8xz74aoSVQuky4",
  "key1": "zk2pYvyvjdeqHe33h1VveHQWv2YCBAugk5KmsKbmVvhSCM9fevpsWRSKjwrejpWBySDUJELXXuCtVSD4ZP2P9Jt",
  "key2": "GH6jbFbKj2Yd5WdDjKSXjALKAgQARz6Uri6YreRyG2HQMhqeyy139dRKuYLN7zwnotJuJrBjXZ555Lxw1CAUJA3",
  "key3": "4yUdawJ9o8zJhMQnrhm1Zz9tV87DzE7WgxXqDpqJ6bJfuMu2ujc4LR27q5wCGqDVRcAArTxXoZX2Jm7MNgQEPWTa",
  "key4": "2uf31SZuya7FyV1krTEp4iEB9tfejRx3nZ5b9nZv4LhLMEQXU3CzUvbnamT4xRkEe8qjJSaxG4Hhf7iwXeeKLMft",
  "key5": "4qHN17pAVN9WNCMsXRx3grWHVjPa9X1pYd2E4GcEEaSYohhVgJndYWEfChnARDyvckSHAQTx6qMqc7vTQexFVJv",
  "key6": "5KP99dBh6438v6AJ4gfca1FEwfkQn8sDFLZBPb52A8LQGT8gW8F563rtSiQFeC5MQcBEmH8ZjGhDaAGYyrdDmGe3",
  "key7": "5BRRtR8c8HunVyMAS4WUPiUvRsvsh1t1DPDS7wbtTsn3kenBPfFQ8gY8aupt6QpbEnzWGGUSy9NCN5ue78LokCHz",
  "key8": "N3RWNDz3LkQGs4MVaA3JU7GGwnyWDDLBad1VjMycyzfWUYdEVP7iHfF965ycVbgADKeAGixPmNqS824jkPUyq1H",
  "key9": "3J5tbTyKzNvQGaY353NxDsvLFtjaeSSTFj4ThYPBTCncegsxTWqBXJEFuP8RkTX9M4RWPcUdPhjrPMe2M758tSyf",
  "key10": "5C5ABtuvm84KWy8EYdVEFSSuy6BmrfGgC14EYASnsfaDYtSi6Lu2xiqKBfEfuJCJo3BwidwfBYKQT6XqWrhbmY8r",
  "key11": "3WUKUvZ4dF1N2V5eJTjgKP1388gZekAFnTHDo9oGGEpdensRgEM6URxjL354aa3wj9o2xFqpt2BEnsx6cjdFtq7z",
  "key12": "4oYsd7oebazT16fX7FeG3NAYPZewv3GV8mKNPK233QVeEFwkP6kjzKr7Ydanw3J5xhbCDGkuPjNfYsHe3EDHr83N",
  "key13": "3nz7bKkcVwGNpyyefyNG7LwJqPEkwn9smUrgc8bfxdvCXsjzX6wVmajysDysUu6bZDSZiMbfPtAXEpa85XEkUH1m",
  "key14": "2ACqGwRoZkekLAFg64fyojtTCATHMYvMxLfihe53uRBHZBJXgJxaUE8XLXMETywjGG4gGQFVBR8iBnLx7YovdquX",
  "key15": "2rq48dKXophMG3Hq76kuzjHELsgmxUkmxfvnyMiPNa11qrrmJBe3pCXABCRqSJVmXGpzdacK6w7icaRaDKLPDEN2",
  "key16": "4aQKD9GpdeHKF3XUWVL95P5cJr8YvNNcNa6HNA5EXxUP1UYsA4TELKprnaPF9zEEw1o4WnDkPGetPTKnLC1GGn1N",
  "key17": "623tgiNMNYVLceyXTYccKKrwwbP1jY65pMcfA1PHjKZb1KNDYunisiHjhTHB6nynfMvWSR5kVYpn6c8dyNfEZfp",
  "key18": "4HkSBtYwzVwLzatfgwBE86ZpUfwvesXYGitABFYzemNQ6LgjZWkikJKixrx3jEJbrTYvzTyAVDDrHKiTGPJoQLVz",
  "key19": "5xYF15KsXEYk9yTmZ8XUHf4njhBTgFyq6JEEWe9CK3YVoCDUu1VA49YEzypp7taYfAsCF77C7ZLF9oqVFz47UjPZ",
  "key20": "2J7e8AVmU3SDXnABdqRRGiwjJaSGXiPRkJiPbtFwhqbvfhtKNJGrgTecLFdBS66ue5kNNex2BmVr4iexMhSmM9H2",
  "key21": "4uEcS343GcJo6rnV264jpyLk8fe9mT5FY2BxQ3S3vzdS4eg2ZfScRRpuKj2E8nYadD82NVLMzamvSXcjBNXZcGox",
  "key22": "2eS5i9JwP4cJAZFNcnVYtCaaHfeDZwa187EQ2z62Zazz4C7iMxoidmnd4mvkbwmJBBDMMCfXNEPnrB6bhbob54ve",
  "key23": "31TvcMr57VxXCkA6TiWE3nbvoGVpBMU5bhx2AXSwRfyx3A5oTcyeCpwbX6riQVHk9ET9tuXg2BTkzCyNp7njV5KU",
  "key24": "4TWvHEnSwRVtK85S24G21gqC9yjvzyGkCMeu8nGUuz7ybK7Y7vWxndBdb5LjXUP6YoD2j95UsH25TY1mM2iyT5pU",
  "key25": "3jjZHGcTFaBn7hTnhACVCEP44kjsfrgvTZt2HBg5HCSU15cXJqgj7qbhMhtLnFMqWpTWdX9HZ9Qezecn3vCwoNMF",
  "key26": "2w7FEMam4jGY6NrqJqGTX266Aue9ZxKm3pdcfLL7cGWzuUoditgR2qeo19E2oFRd2kmCFTm3dWsNSNdSbaV45x62",
  "key27": "5h9hfJiVGzBfGJACLtz9jj1thVT6cam6FbPV2dRBw3GDLYNDJkznKoPcAvVcE4tkY6qfdAvikvoNEDJfYSFL6TGb",
  "key28": "3jtKbFueo9Zb1SNpgaJJX84huSWFvxjqxAhJK9a861ZuosYh23TYri6qTjStvYGijnNhj3JCAuU9xsuLZsPhL1zk",
  "key29": "WspGYJaKcBymfbEpgwvnzNKEc5ocJQpbpoJ8zhQQCnBUC4ioHj1iWxsivdHr22A6VN4KA2FczEeSDKUyQjEgRmQ",
  "key30": "3etUa7PhG9GhogbskgGT2wSsEdWFgRZ3MWcQQVkMgV7ZGCJxPaXTQBFJ4JTuawYyBcEfzcUCBHThprLhxMRAS1qm",
  "key31": "CnzVpn4UcJuQaUHo4krDi5rRUBye6KViR6VFTB1A1svsTBSexHkTAiRW4XYaXkX3U1yKckefwzsgVjvbLjdXk3y",
  "key32": "3NWT4efeQ9SURr19CB8ggeJizu2YdBv2ByoyCsdNsJhQ2PwgyLZSt4wQXMJvnwYpuXshtGAzwkgg8Bg5sV3BY9Ye",
  "key33": "54JNS834yHaD4jW3wCMJqyYVNVHKVPGneARM1YxsKvUyy7NYEPRosqYCEhBe4TbrxXj12BVCLHRMSEdowPgpgHVs"
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
