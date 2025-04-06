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
    "5nt6v6DzbQUCJWU88p6HckkQjo5zwjzYRkB74MQpw86DWBsKmf2NA2rdypGevWcwmmNx22BEmT5DKdRzUAeiMZE6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F9BpnM87yMzTAETfNKb3N6Xe8EpyjiDqxp7GW67yjvjgyzGzCtcrYFT3LCkz8G5aGZaABp9WvEQjQRsEnG1BABD",
  "key1": "48TaJ6iohuj9Ay8yNF5M4QeG8weaLRcgWb1eUHYbEbM9WFHjCMSiQQdKWAqhXbAvcnVvtcMvg4drk3tKzqZoHfkG",
  "key2": "5dEL1tL648aeaT4eFaHvTExpU4vNqKxqjBsxdRHBfXg3udbn7jjdunTZmx8Zs1nmgyjvDxxSoZBdnRV582ScVskn",
  "key3": "5UU3wR1aTt2qtnrbkL3CmLaL2i1ve134ijQb87CvCYuJ4sr7ox7B19zf1doeJo7sbEwEHjVa9BXb2a5qyHoUE4FD",
  "key4": "4FpdDy8WCS1sXkHfNRvPps82a2k6vEjS6kvZovbm4usMcABzbGefdazQbWsRjrC7uCY67bu2VQ6wwggAFqmoahQU",
  "key5": "FsuhqVNAjSt5U9fiTRt27DZnCqJ7VJFNE4JipUFQxk2rf3D7iYxxU4hGsXRcJ927ydGArBNkc7HP3DnJxAPiu8e",
  "key6": "2RW9UrtBKd6xDQEpf5AjmVZhowLhzGSXHfJnaVPUTYvnxAupYm1CorJj1NnVnqmFVUQdX88KuEY5Xu1qQjFyF45r",
  "key7": "5YiE7UqN5j3cv2oXGbiM7aJFKM5yDvf1aBagkmkhGeKoq7aDZWT3behchqPaK7Qkf2qph2v7Sm5WG6mWbbvGepS",
  "key8": "4mzJ69AEbmXWSR1DixXLrafrErQ8DTBX8WMLLy2R4FCjL7Ja42fHK2E5gSUwVtUW3tWs4N4W4Wejqr21WeTN1UmP",
  "key9": "5g8HH7aFjaoRFDNWFFRLqTUmVXN9Pr44Aw13BxKc2E67ukCNpRjiRDy3rz79WiD4s4Wc8ruNTWtbcpzuCShLdo9u",
  "key10": "5zQkEjQJGobLmVUbFR26j7v7d25MaQ9NyHSoP2AwC65WkAanQ92t3tN4DMQ3pvuiQ9ZoLdoWp7wvkF6cv6ErHGzK",
  "key11": "5RjmRdLpEV9KWBNAhpZWWouttu6V7jXnzTYsZUAzXNz8bb6Hk3mFq3NXqGVEP6qVjGrEYA3QqBDMZm8Y8vseDQqE",
  "key12": "2zSU8vaoCL8Aq2d97hH15aSRFDzgPR9QBBajkXwQG9XXjcBa2XsQenbYBvpUYdbE8QVYKubukCZU91aG1kdTg1Wr",
  "key13": "4pmsUFUUh1DzpvBiaDTCbKs4MkJ3eGTVDieqNZpbQDJKja7CmEY4TB1Qd3fGvgZAmtAhVDjuaS8BsnG65QDAisVC",
  "key14": "5TRUvESUXv6UEi6m6azuQwvunwjsLE1ydFx8tR43P2mB3jTpxSFNsm4qC51EvibePWbG1VJuUrbGGJ1NLVvbmho6",
  "key15": "zz7MobjECHvD1wXbmfpeyTVZ9UjovvARs76qmZPuKhHQp6GXvgLuNCRGyPwEYdiVrkkg2VPb3ePG7J6xZ9X5NWz",
  "key16": "5wvGRqjVHknragodzGKn1qZAbX69TEYLudA2V5wvJGLLxNfESuHJYFZ8uwXXGtNth77mwZJF7dVMzSZ9WzTcsRFa",
  "key17": "4i9os9RCJCSUXuxyYFPrKtwSTf76NUNo7g6tyn2YFJ4XcqSGzRUY1x3fYkPeMuuXjPGAr1y7TCeRn9smjViGSRoB",
  "key18": "2bAmj7Mbi8DDNCRQ6cCzKHPBZWptVwuNDA84mR1FSk49B8DiecRxiUNbf4i5Ks4QXGMnARopcaK6qXSmydezAJCP",
  "key19": "YRfoCd9HWmjuWJY74uS4XDTuQWje69xmXGSz3D29LcyWmHcKVrV2AnXSKfWjciWTQJNZpnKz68fdaMPs9HhwzDD",
  "key20": "3TxdJQL7qvWejJ9BLdYgoN1wkj6qdcyZkbzy2iutYik8vTnPSj8mXfsEwZh17fBeNhQzUyGBGXqBHYj4PN4xNgG8",
  "key21": "4myQxGAF9HgBcjRSupdZr5szwxvfswYmeH15gzjhJ48s2MQpJ77TGQ4YUvJkEnFgn57WuYN9LirCxZx3JvPiSxRj",
  "key22": "129pxQDZysef7HNZ3qdxsKrh5gDetPsQeZwYjP3gWPoUEoJHtcePwSz5xitpVc4phEc62t8XRSJ7Z34HVn3s1dYn",
  "key23": "2bmoE5LXqiR6DntRBHdK8hJ6BKdeuNCMMd6RuYojgNuFRW73nkcd7YgXKRAETNeUVVERHNeKokoA6o3DUsHAJqmQ",
  "key24": "55w9WA8kYcHmUiCLfAEPBB6qYdV4ZFSacSpQBTpLduUxHSmmeB2AD3RwqgzRjSn1W8wviGgU8G6dwTk2JY54dkeR",
  "key25": "2FCDv6H5Uc1cQxEtzDwZbLdW52tqoxrvWf6J8MzDeqD2bLDTzZgtXiUsSGwbgwrrWnTGPXrhkxmyP68x1iWZMHLi",
  "key26": "2mWETzLVSigCFP76w8SLketVK9RYcaDzaFnmNaiDGEWyLMyzN71ET1mN2ipBQGCyzBzHA5mqrWmnTdAvBhAsTKKm",
  "key27": "ygHLBm7YFvKhqVvVpdmKh7UW9Z3xq6vQmQXqLridv2Wmk5b6G8FpXbYwC9EmrQbXwuvFY4oJAJJ1nGR73vHEvGp",
  "key28": "3FFhNfhZeLmxD9pbuDD4xK3QZKsvXpUVNFXykncYR9BHdQwR69VaSdcceFBqWWXbWEZyYXCbG7Sq3CaSjqEkDMV6",
  "key29": "3yj4uNTp4irpE9kUn9AdVVgUWfD9RK8YR1mNBJ4poqytSAKdwcS8uNgFGbpBw1DFSm1F7F7jhkjT3QRd5ofd7kcu",
  "key30": "22SuPhvzwcweDACHwbXbM9jbfyRA9a5mHM7d6ej3bQ2zEThm9HCMYAmUuRSEPnEkbzGcWYNjEMyJf9dGf66yNqoM",
  "key31": "39aqfPFDTFinKRAKRrjmFzxFFNaSy2kQ1KyGejeGvgoU5m2qXDonFU22JNhZ7TtpRNNAmachkFs9Nygjv3u7VQFo",
  "key32": "351T7RcipFKpBBbxbLMTUgjaqjxArfXaP3exPGWwUi6bfNxbKTrhmNNrqcmE4ZjMxbBbgAPPeWGLnFWVxdYZ8bkf",
  "key33": "62nUW7w5obzT3dJQZXVFaMvHn4F95QtKpYRkVrkPFf1dDux35KQyXtiyQNmGFUwuZarZTMXvZcTXy1DHKiVVEaqF",
  "key34": "YWX9fpLXDokVQSKR5JMSp5EZAEq8KEUJFHj61HL4asqtzVBEQruKqYvRzGLzUZknWCHAuCnwAC3pF9Kv1Q9Xiar",
  "key35": "NWfL7uiPnpBMXQyDExGaWMKYWhLZNdfP6AaVJ2teHrSTBndgcVDcobjKhf2NExkxqoLZUMsbVQWCyJuXt6WmrZH",
  "key36": "3PvkRTdUvMSZGXiqN7w2WoeDPEpyD5hbTqeU75V3GXxjX3kv7v2J6Uj4TzgVPHZdkHQrgmWj7K6en8x4PJvZKnj8"
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
