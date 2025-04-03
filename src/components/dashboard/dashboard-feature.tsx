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
    "3WfPzo9SRju6nqNxmQiDPC47N45ZFu6gdZJiCMMVSNorQ8jV1HaBWFqSoXLfTi1uADcXGRDcst4EQh2TsdwprFUM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KpknuzyGJFmuKSpDGjCfVFThUm81hbjoZL15nUNt9XJhCXxiX7THhatPBk6HQefJVvojqt8DgT37Arh3XTtKUT6",
  "key1": "62VfqyGBeP2vwNaHThmzsGWyT8Zm7PcjBUawb2fjqTqySczHRZGCk8d3fp9mkeosxhZr9iFeNdbWUEJHrE4rGSVg",
  "key2": "4kLwjxi16ZfmQ7LofSdL6KmAJSsKt9US4Uyv7dbsC3bg2Xx1LXyzScNG8WP3zUnUvoNB6bFjEPvMPBRwwL1bEN7A",
  "key3": "55BPXS68Zic8gk3SxAgZYscS9m4MQifLUyKYCXRzfjX93By6cqphiiMYdotJQc5sgY7wQ6Z2Umph1DjT7VELRUNk",
  "key4": "4GugAkCZc8kUv3zPUxMwHPQYo68SStWESw453NMjNjj7YjUVTQ2FrfosDJ4j5RKVnzHwXTyYrPsk1dgXVWdF4f4N",
  "key5": "59iS9XXtQC6SbzUXHPBzFnJ5d3Nryw4K4A3f25c1SsjxEKrFWF5Ra7vnRPz4ucQJQnMvpq9C7UHZJqGQwX6RNdFt",
  "key6": "3dxxuak4ruZ4sYJ1wHNQUjQ7JeRqhouqJWaWzeKiqmS6FjRbYykJfcLXyZjxMPT6JZvZxErVNFP8GVxrtsW14JEN",
  "key7": "581Ss7tdtHind2obarU5764ZLP9K6E8j7RxLZjP6NZjjnj3S1gtfKTa2NAw2dbVGysWw8xHpWXYuHtVbK1g41fby",
  "key8": "2RupTwe9v8gKFKv25Wu7SZnj9ADYpnXFv8W7bZosRGZzjvuKV93NTr74RC8BfEF2adtdXTwyY9bzjXFKXK79eKdR",
  "key9": "4ChcKNJz3g3DW8pxBGVr2w2XRuF3sBLtZvsG52EHRzsh2ywPmDfqEwuNWBC4UNjzUN6ZMBhsVjEnv5BV3DYdKvmq",
  "key10": "4wBLHLDnoGdbVs2LoJovfPwUosRjLWGEZwhhmKrYQw4jMi94DyMEPkaoDfm4b2w5cwjcpZQZAGDyYmKQKh1ENbJo",
  "key11": "1X15Y5Kdkj8T1guGBE86eekYvdo2L7Mpt3SEngJ5YkFW8VkPog2MM7ifb2QCNqvf8Bd2jJauVB6n4fABCuFTKpa",
  "key12": "5Q9EJfeZk4KP5JsjNJC73H7ABmUDWy6YJcGxwQn8zndq2QSZXphmBExNNYhTFqw16xn8zHrrvSoEL668GthjtbPV",
  "key13": "2Z6yoWB7LAYMSwdVinYywcidryZEay2AWgPHc4djscUKvj7AkBZHtTj2Ti3SJw28aPwS6xMnVUCiwnvNw1oX1emu",
  "key14": "4jobfFyyLn64wDM8TXESyBxN5gbwreq8xaktwUgxba9B8xGpJvQMBN6tqhRe8yAAd6LcYoXnQzWhuXMWVdi4rNNj",
  "key15": "2NUAZ9MHizLhMqGexYYN3zH4bGpRwbCt5BxeEhXncGrTXiGE9oirznF9SksnZBPvVzKZSERZjfqnN812MXeJmYMW",
  "key16": "2R6fKMzw5DZNAzauRq1jhzBWBprwHEvSoFJXUp3PpTQoZs1rsnGFzrym2T1tsKAdwEe47v4dXn8AtR84M9yKWCYz",
  "key17": "3eCMfm1Tc3jeDmcM22uvE1wxngzu29qdTjf93rdpq9aRiE9PMSx1KJHxXzsRdN3m3NL6q8ZmNEhx5s4a7c3gDsTt",
  "key18": "3AjpMEPdG1JE2LkEC6GbAQ97E8iCV3orHZ1EJGj5CknsXjqaS4jeDnxRw9UChQf8xpj1jj4ZbMJ48koUdjHKyfup",
  "key19": "4MsvgpMrw8c3bAetoV3VbPAKxNs7eAHUgFz83w59v3K6DBZZYLdgwHVxaRcj2rWoG1ZzYcGFN1WGankuNmmKPER4",
  "key20": "61sDt9uFY5HsMsQVZHRy21av8uRpjeNXMXtoQNHCYtACre39fpd2EoHewbgfyCcyhJeXHyVCE1cHqzDyRvynGbZg",
  "key21": "4xYAB9BQPG9FMVjCJV4QJ4mX2YBe6f2UBkQRk4m3vLTFP8bfJF9eTtyYRSUwEbcGXxkLEjRyrEMW9kbLS9TG5BT8",
  "key22": "3CXtMG4ysHbwhFb3ndaJAn4NCNmZAdWvsTWErSnMgCz46pL2fzsDTXUwTVnmp3yWCDrDjNmiKcFUJrfEgS9Nm4A7",
  "key23": "5EhxjX4hUZUzK2Cma9mQXeZVYTX4LH4XYc9o9785mW3L24Rh4DCnUYctuRoqfQ9TE341VNehnECHoTeuhRaGfZcZ",
  "key24": "knPRmAiGfNAKe4up82MaZjiPRw31PT8ALYFxn5WJbWm54QD5oQkYquDEWKDJHHg2RtRsSGrhNvZrxrJNRoF6LFP",
  "key25": "xgt4VL8QHghrTbp34T3vxDckafXv1ZQz1QuhMtVCDNZLMTDMBjaCzoyjZdnJ2wctE7PXTK5KyGNyjCtLBCPpR19",
  "key26": "39PCoLVXPJznXeM6r2NQnzFtWDvAzk8naaB9Mm8zgujR9uS7MHGUppJ1QP6M3ynkCNfbWsvFhj2bK4eJc1Mv4a5r",
  "key27": "2rkbJ9Jie2oftLutr7FmJhohTw1qEhHEudHpRqsweuKKeNreeg42SimCy8HkKBR1JtyRuZsnBuYjYjrLPprkLQv",
  "key28": "2XsFw7riLsWuVwonEWULMWkfnGnwFZq9XuGTwhze43No5NUVx7GRUFh8yT9UT8bc4CBREYQDC7SiV2yxyHvQaxdr",
  "key29": "3Vr9Rp78JRYdwZNNMCDDT9phNTrgf15vvevKB4ALoDHamwtxr6WC6b5TKrWQbBNvxrBbiGmRHt4HPzFtgHfRLJJ2",
  "key30": "5Xbvrn47jBTkkjjZJz9sEik69hcVf2tkwGEPNG8ahVEQK4Yxd7rtxh5PVrFEUmrwDsasqtyhDwMnGCGMaAATaEUZ",
  "key31": "3PrhgxoXiMN7Nxn76KkoC1DamhnvuosWoJziaSpHthsgbWQPs9LGW3pcQbVp5i7mC92S1p3sy1dSmaX1oNPNiQRF",
  "key32": "3TaLaa77Nh5fEyj6mUps7Dd2Ft3npk1udHMo7tAhBQkpVozm6Cu7vRLdNQCAThVfcPCbBCSPfSfaQMisHjqz9Sij",
  "key33": "3ZJJjnCwt2wsqEHEct5T9KiuFZyataEepDernED4nC1ATwj3cz44q1S9jPqo2wmpmu2ZKVNFu4KigemsaZuZ1dHd",
  "key34": "2G5tbjwH9AQia5cYJ1o2ShDSX7BsTNUsHZcvyp53PEJeFoGN31WnKmM88ifkyNUt1AnHK6Mtj9Auxa6gW1DmFQu9",
  "key35": "9d8rEwzHQsssuK41kFhN5nvAE6Yzh3FBu5MDmiv7B26Wj5RWhwa14y4EWwBjmuZp6HKv4nvbFv87WSstows9nAP",
  "key36": "4rycTBC4crfftCaz6ARfyKZ2yTBcko3Ak8BvsJvRSmYavvyxNFFRU3UmLZNtcezB5N7A1oSWVAE5aSjGzcSPLeAq",
  "key37": "4XBFYanwjEzaS85YrE13EmFAqXsdnRdU2o1d7vLmF5eDdZxMJ9Fv5uwPbv5EdbZJpS6BJNjJKfPx6VyUz16Dwwva",
  "key38": "67PqVRromnMjawemUgCqQixCBCks3bm9yTTekEKHV4hCcfDGnLLTLu8jpjzdHChDQEa4JSbkKjvz9peboeb5wFvc"
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
