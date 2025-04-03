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
    "28XdtPSiubP82qE1nhzY6ttdsXJxs1HeRF2TSAcdvLatPFXNzyhsoXbg7L8DBPB37VfS1qGBDFFWBznQpxxVp3k6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xUwUpLnWVreFcZRpP7fFocNNYoLCpTWpCfjRczBFFA21dic8wDnALxeJMpnvaja4b7RGaVhD4c1CsKP1TfrxNzk",
  "key1": "coe6T25dhhgXjKw8AVqve2hkTRSdD3DpG9qQrypqoQDQsirJapC5VkHrVdSYFmpCSGXnKEe5S2FwgZ4hn8Wjgda",
  "key2": "4NN3wGhmgmH4HSdN5zqbnjjZga9pB85hbweznhqJoFYGgEWzdf2UUjKSZQ2JQ7Q4ZSM5askZ6cQEc2QU5jk8v8vo",
  "key3": "3SB4os6jhZGhzPH7kwdBdRW17YNkAhCWeHCoaxfd2un68YztngVeC1ebE8qM431Tt9njLbCqoj9JzHGM186QbFBu",
  "key4": "QRue4hMc9HaQyg2zbb4ao7xEWo4XgPcemKj7NwmAjGPHx1CkJzB6s3fTogGWeBRVMdxNu73qzQdhHFFvmPntMND",
  "key5": "2LDDMzPqfpByuWF5BKgB2mcfSbztHmbryPQT4GT73Kayqvz568DRT1pTndVuxg2tJay3YZiGWbhRW5c917snWZjR",
  "key6": "62yYvcsuAamnkLDmf1AZp15nYxBmz1Rfmnq44pCbZd2uB6xLu9YUraD7Ja24jsP6BHaZyf55s4EzTYejaRYQrgXi",
  "key7": "3uzLrkkMT4EDRuU7xZZpUnQgB5FWjMy54rxncBzm1XdPcUBzGi52FJSLyNidZLp6JBa2t9siQd3v4etrCyxNBcsf",
  "key8": "2TjVht6dnXPb9u3QcBphWf5eZQLcCNZYLARthkS19QoR8rdj5ii1YTE1M26uN6cxxTc2f7xFB3nPvD1Sfmv3VVs6",
  "key9": "3thWQvYaq4eX3xGhyrRUot4SsmjAb6mQNG3J1T6wReADNbRBA7t1erdzuPzQR88CueYaBLxPURQ9nGMmD9UEbMjb",
  "key10": "23HUSLsAh4d7CTjcYyKE2uDNroLq1UQGsNeeXpsuAUE1fYVqrhSsxr4THwBW1a8QvwJukTUeejfz23U13PSqZNEi",
  "key11": "2MhKraQLzRPr2xQroLHhR2yvXvomYFRHQRGQybCj4PPHAw8a8FuBHV4Vo77epQoLsS4RF9y7RhUgD1gMZ1bNhGrB",
  "key12": "2sjbpbcep6dG89apkEdUg8B7beNrptvr12PUiLATHyTTBUrxPqXtgdKYPBPsnTe7yr42fFB7j7666dvdaXzNSF7u",
  "key13": "g6kUhRwedTKwCQxUAqtPifEaDEBbd2ZXRek57RUdRbCSnTgG8hfBwdSCxLUv8WFmz8EipSEKQzZnPLLY2K3pf4y",
  "key14": "3va7fZHvUnFSRhNJzT5mQ3hsA4g6yPrBQsRhf6rm6LHiuLfSEYLnpvQYvLRewxXr8L8oLmGocm3YxzybR5Fd7kUK",
  "key15": "2wuCwnqERNFdFhuehwJPuqBEuPBFTMvQ7GHNbccMvzgVkRSgREPgBhV8WgWiqbQzAbEkBXu2wqxw3esKbYAhkNMv",
  "key16": "bBQaCMgdEru7kqRFdjUBaCEcqDbuVYNJbmUUjSsgt2UnNLnz2FWBnqGuxu6f1E6YyjQMudRUG7eHt966CxFoaFz",
  "key17": "38PRRzxMSW7euK45X6iafkud6Wjen26RTtkkvFLFx1EMoLbyVmwWs1VUX8v2Ltkn6zSrmQpDBD55x1nG5f9w9u5Y",
  "key18": "CcrgWhNasNo8o2VBxp5GQHMnmCHvzyPZaDchzS6sN1pWwpM1mnr6XUt9FXzrHhDofenjs37FfghxRyL2wvghoVN",
  "key19": "4FjsGNSDggHhK5EPuJhEGsn4tTUHro3PSsMzniUuu2sYdb631zYEfGTgnfhMVDHeJbmR8AmxoWk1rg5EWNsshan2",
  "key20": "34vrCyZ2ci7tHCJoViTLLHvc5c8xFCJm3rqz4d7qDDE68WfmwAGw82AkQ5VKfmaAjHp6gmAY1WW1NqxXnKfFVDdX",
  "key21": "2SQLfKNBeh3tijpWmvLuJgqcPCKQdSuC4wjxCd13Bj9x1Z6oEr6eCibd3x5RNTpWTLzPi6XGoPTPCiN4B1R2hew8",
  "key22": "5yGAV4DWspKSzStKmLA4ibGQ1yuQXL7dFiAK72XKPSyCAPhzcAMmfHuhjvR5tycpXXcn8R5tGMGBT2BT98u8HqET",
  "key23": "2SpZT17rVRps1KHCtVFu5vcd1147r7sXtHesq84H87DqkuwMPsRZJfzXnJ3qvifwVSSyj9UuGbvftVh5zx2iYU6P",
  "key24": "27FyiCW4HzDxMekw9zzwKSKigt3CtAAcv2eQN7N9Kyd186zeUk6ChymkAF4uocxMZn8e8r8iGxsMtyAmbPtSdK4z",
  "key25": "jRYonSwWSR3Hs8NuQD14t8wHNnv7uteWCUNVfUsjSqeKB1F1XmVtUnkkc2amUNQywB9HzxXMgSRGESNTzjaCTtE",
  "key26": "qDBY16XKzRLg2jRaprh71GXpjocBbjbKajwLKfnhcLWcUTPh7f3UGjUQ3cHYUBDuATpy3bq9f9o5MvE7ik7DsN5",
  "key27": "42fYQatGoYfNayxqdjrBmCY7BHQTsKcdGT8caHy7e2bEQkSwXqg3bTcjJnPExmYT4jH9HoPJfE9rr64JxAFe6Pqh",
  "key28": "5dZCAmkt7aVR11dyC4j3k9fWuUWMqDNEZfrTFS8LhWQZ85LMwYXegAsTSetUf29nhFRLTTMAFCqC5EqZSwmHWAvk",
  "key29": "24y1LwGcLkezT6WxSKP1PVqJ9S5Bs9evL6YfQryAsfn2fezgjWwEoVsfL7e6qG1gLeb8zGnWkHmNJftRpYkVLb1X",
  "key30": "b2HCJDeuMxXPkR1wUd4zpbvcJGjMRMwvr5PsAksBkhxqyFw3YS1M9ucFoJqTANHR5XdKdxHN4bMWXSS1fAKE88Y",
  "key31": "52jRq6CmWfCvQWdajXUauGT32KegCNXPkK3vFcQLtiJEGmWuHJ45c68CVUp6oxa9gbd1exuBvBWuGWK7GZqY8raP",
  "key32": "2ZCgzKrrFazkH7gy8kK9Df5xE252htDcRxtRKE4nhYzmy7PSoEGf9v7jg73zAvnkmQHYgxs5NwrXJvuH5xfsfdki",
  "key33": "VFTsiaBCEiCbKLyGvxEF2BfJtmW9L9E48PVH8B7tbFmUnNqeVzxSbkuCGZ5CJYTi3E3TDrsxNHAT3rz4ijt4iZM",
  "key34": "3RMiwdDz1D9GzBBkHGXz4rzs7UFUxRaHZnzzYrtWEWudSLmeum75Gu1j46MDsEvH83kGZ2FcspaCh5cucmu48kYA",
  "key35": "2Q9ubNgYL3ojKLYNHS2rhuXcVr3DoEDVtDfq4vprWNJLAKTVR3DmVT9U1TSA2rSopcgvbQRbuBewKokp3UEC84T5",
  "key36": "44sKye2dgzeJQi7piYNf73Ffw2GqVXyb2JvjK3mdXS9za3uE8cesGknVu4EDdhV9V1Gp83pcZfhGaKxzGpwLHxBa"
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
