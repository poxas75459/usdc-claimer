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
    "5Ct7DMQWunCz8vhJHacVJTakHsK5rsU3MriMJMvS8uQ5utBvEFVFkcNUQxEEisum7dVsDhkxENWBQ7DUiK7AU7DD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ztbwd6zWbFxEULLoKjPGjDJSvCKRsyCWQXkNMnES3WYxnYtL2nkXaS1Lo9JCYM38sGRPRifrha8D979x7w97Nmu",
  "key1": "29AUhezU9BE1BfkP98CKW8mfAhDMw1UHPRbvVRE5rMEkZCsuFxPVzjfqTZKEbnqi35K5xSqd4gPxGSZTkUt9GRrG",
  "key2": "2eAuezc7oPEUoEec25TBqCVTM9XTg4mNxT3BYEwhtaxPJg5Z5snmKmApgsUZ5xRZLn4e5QAN8Tf6Y3DCHV9FMMm4",
  "key3": "5eEXG6PLD2Hh4NrXyXVhEny6MrbPmfACyCyHXj156GWWYLy7pUdDYKn8tUeTBVzPbQhpGHXRP1ZPNVSqD4woU6DJ",
  "key4": "5jW2zJpEC6mU9dPKwG39GBXSwzMFufJuDhWiM5UE3n2hgnE5YSCCfZjpbWmM2LV8rEcxq935WuuL1Z9WFwy3TpyF",
  "key5": "UJe64dNAgjZsgr9dumGFE9AMsMrurfpX54eDGqMABx7Wo4bFcbVuzjAQx35HbQ4uQMKKQNa7HhbBbB6NwCDCRDZ",
  "key6": "5tHoLEqtNv46zMG72RN42s8fNreJkhLvVQ9sEHZJt6EwuGYESaXP354ym1tuq6it9HPVEKbSYaMQdkNJrEGMyiNE",
  "key7": "2KUrQ2Kb8rkjXhpLnnJqUYsceHvQR4WrgGUd6XvsQpYQjdtCPqCuoRvJqQF1z7YVvwjcXbSk4W9URyu12otDtWTj",
  "key8": "hp5zXeHhj2xHyrJfG1RtFK3maEJxpMQy2r6A27JdiEjWTki1K7thPq9Ks34KLjgrbq8v7N7EMsiarP6BP2WB11j",
  "key9": "3R23rtYyyCE8wkgTsSSGEeW6ntHnoG1sXmb8GVWtuz5QWAJARbBFhWCipb4odZgUFmi3Ase8CRay81wswvYRjaUw",
  "key10": "2pC6UkHL8LjJHJYVhT9gZVorfKDnHasZY64UpFDExZyFtZejtZA7NtBrDpZNgRw1yWogB6zQgHJbd2d1NemY9F31",
  "key11": "3ynxUhdbr7C5gtu8yxmhUXhSB5qeSuoV2ewiTucK4woKBssiYtpHToAVHNVj4YdeVkgQgNXvzUC6GfTh524EX29D",
  "key12": "2dfgsgKXBkkSHDTQ57G4n3gyNRVoTfHxibApAqthT6XTV1L1kk1hJLTtZvQWYVkUnJo4UAG2UgYpvvuiw26uhWyu",
  "key13": "9FbbCNHYdDP4bpZdVjjx1GEbkupeSrag4dRi8T1Ve77UMDMn7LWJSeqvtSdZzBqCckZ2P8haHkHt1mfhSM29K67",
  "key14": "4TD88b3LLiqLpcGVSbrtCc23VNC1VavwtRoLiHwhbs5NydAF3S78AeFx944QhaDBoHZMv4cSMeiioNw2DfdPK6Nf",
  "key15": "3vUbcPebkhMNz3281RpUZs5DaCq5FnyWvxkzrWJo98bLLsq13EHjejSJQHmAfxcMVLng27JMV5ZXLawdfh6Vr6cC",
  "key16": "4Dqe6RQwgfREY4wiomfiAqSXjZuieaF3ENvV3YFu1ttVYvzMXFvs4UF7Uh4knoDDQ8m9BbyCXBx6jsKrq6jcnfFq",
  "key17": "3CWA1PUm4ZArxwccqmdHs4mLS5jDPBwaBNpcBE66KnANnLBeQxddsCp8ZYzPyJLPEh6ZnMNR2SLnDdryA9LVk1wi",
  "key18": "4e5MfdnLzuNkXXCrLjcqX2ai35NaPiK8WggNwc27cJAZsMv8fD7mAcVog3nQonVJ1xcedwL2xzAMgyT6SenXjRuS",
  "key19": "Ctn8auTnTXViCtAnFWsHYBHuZ2pkaVTEqTAZH1hFc6AaCNjGCYPx4ogrPNjXkC9GjPZBJcUWHMeQTLnZHM6V39W",
  "key20": "4DCXzuXFRcAsjfjVBtDsfE4iqSjK6R9G7mPePJ5B3Av3thZ6hfS2tG2Snmr84ck67XjrLQCQsWaDDWMMnqKU63sv",
  "key21": "2PU6uKtMi1MVWxCw5n6co39rYDVSocueyCJoKFe3o2r19aq1JfZgW5R47uZL5wd8iMNZUgKcjYKJsouHWi1eQs6F",
  "key22": "8AyLjVhL5gGfreZorzbw4tw7pwLLtVxubHU8XQ7xsY4oTBQ79xYS8baUdW3nzcUux7W7esTpXmLqAG3r5P2jp1t",
  "key23": "2EovTGNSxaQZN89bC5jWjCVigJJaG2VkUVC79YXKqEJETSXuq7Fc8i48fNn88hKEvKwBs2uGgGwECyoGrZKqWtxJ",
  "key24": "3fKy9qQ8oGwCNrjLGX4G7GhGzvsr4KUAfBoGpd4W9AgDHxfMRh8vzNFjmNd5Mdt3Ef7vScDyAfD2SnqcNXTpvXx3",
  "key25": "5HvLTPT3X6NDYXrdb83MoKSaKwxKNT3XfTw2TYC6xMLPXvdfTN72kqWmgdkLviCAymvyJtsAMERkvKbch4aJYUNA",
  "key26": "3wpHyWRb6ndtzhUML7ptRmpcKy25S8bkYYibA9DhfSveEcyuWJ1ojyr49xgsufiYjyf1aKXk9U5e5E85n2bKVyNK",
  "key27": "2dobxV9bNcUAJNTsVEwQfttnJk43Sit2JkBggvxqEPUSFykvA1vBKUukXniuLhB2YS7dp8u1HGS3v24f5BUDgQLb",
  "key28": "2QhPqiK8ws6fJjq1WBzDkBwWeBUjYcBFQYw8FAqrp8spd1H3D8R5vM6VPYC9PXBucdaeK84jqKqbAksiqYan6197",
  "key29": "5iUBk7YSVEKBSnj6gxDWw7zM74sa4D63pumyQfHz1AiWD1d5yvXnVaD8oWphuec8848NEV5BavEBhS2WdTESWiyU",
  "key30": "4zqhi3bX5wMAHGbvZJs1r5RFeQm2cv2PvpMnPHke2jAszVkuRUGWE7CUgPU5QumRd3v5TMAqhwZqfNXVJxnSbEnJ",
  "key31": "2JjDDRK9GCuvWV7YEmsfSZQcy7u2vz8o7fhdMDHSrVKTDuZUM4gQLGSHoA8vxvHnsAb5eGHZ63mmVKAHBQLGtYQH",
  "key32": "vS6B4AZAqQbbRQ1k9qKHH4j8rYY5V2A5zpbxRFTRbJkhV6Xn3n33SEZe5CNiH2UdmQ2pX2Ng8RHDQ5G7g74ebFN",
  "key33": "5GYA9vy8U5EfD1stEKSjKZshRCWhBPEptuTVYahtYHoUmiqtvw9nwag3HNza6QUdXT46Zek8igm9CQwpx5TQZUd8",
  "key34": "5WdyZXYvm8P31R1McLsmwjYC8LnGEmhszktMdTJiAdYk4J28jq6ZPutLNgEpVkAB92DZNYdicfQ9R2nfQ7SQDgys",
  "key35": "oqCmiTJXJjtLj7o9gQvvKRX74Sd4xS1fnMkcgTG8dr7Y8BptMihFzA42hcHfxd8faN8raS2AuyynGNJd6wq8xW9",
  "key36": "ZLUN9L2Ycrzxd5APPhdMBiJRmYPnhfbneJzXrSUdki8m69e3Rb1NRVSTjW5G4Laj98imBfYszNHeU8rHCihuLYz",
  "key37": "3ae1iHc74CpFX22zQYPNNHhFg3qxMFBm2jdm9NSwNyexG8L2KUpNjPAokZ7idKwC9YeG3ED4MDm2jQTcowZbmWFW",
  "key38": "Phk25V3D3b1iXhWMMmp2jWvJD8q1V4KLuAchYoqT5QoNwXrrmGHXDscWKmhbNaDXmG1KpgymiLRByM9k4oZ1U9K",
  "key39": "47XzWuDRw9QpqkCVjCRNnBkz5GvsjS4TYHnFBDLzjDeBPvbR8yXGVmfZatTm8uSsGXxpujqckqnj21pjzm4TQpvM",
  "key40": "4LTCLYWHPNizZcKvfSP4jxFXtVKTfa3VUSAhMA3oN2S4BbT8dXKUasm7aDAhcnuxUinxg9szm5sfU1jJND3L6u2R",
  "key41": "5bwLf28GDjJaEgyqnHAvByz6bRp8io3pb3dZcKiUxrMAde7X4yCNkdTbC8HzuAQHjjj1GBMEBjpYmsJXEyWe5mPV",
  "key42": "4EM1RmXJGkN6Q3SvGBqw2nWArgnK8Q6NxzXBaNrDvP94feSdzjxGN8po49pUQduGa9kvErj8mGVukP4J1RBmRiKU",
  "key43": "3wWWuQzEFrWCS4sKtWZZHRnZCeyVtiWpdV2dS1qUkuS9j6ZvF8YZGu7DN1KVbkgHfNfK9kr4NYYekz8q6DQxm2et",
  "key44": "5sZY7ah7ncbzBfSPdBjSw3xQ6KQYsYaHScvBdLdKkqFtF22W4z8K8DHAxMyRjiAuDVjPn2GQNYFSZzxrXWkmfdk7",
  "key45": "ssNLEgnJe93yCUy6noUfAnyuRdcrsaK81ZJ8QPP7FaYFHw31GhqDY1jEQs1x3oqHU9nP2y6norEbRUzPL7pJjCF"
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
