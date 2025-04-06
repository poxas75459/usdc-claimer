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
    "24nZ5t7GsFeQPLVoupkQGzbkNMej9bro5nah3bUN6FfNZY9RTZh6uBsfUgjHVmHAJpcxNUdQ543fQXcPzirx16Po"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27Pn6nMGGF7NMa5HPiV1fPZzQyybrCqtLoi7295HpEwEP5nLHnQ2fMu1cPcumDAtawcZTghwGnfmh1D2zzkxRxZA",
  "key1": "4czqzo5hFTzfVPpnUnJifgLbyXPgE8zeL1xBUy3jk4vgts7bXwSNVFA592v84iPEXyKkR2hWnSwme4Sb69k5LJ3K",
  "key2": "5SPXbCdGiujj8t5LhrPFBdp9FYHjoG4ESu4HuVVR3LwW9u45WwSdySR6z2ytevfUB2DFFERmku9nwy7zj7iYb6M8",
  "key3": "2TFCvVskWigSumzDn1d7qu94yebxYbkCntS6DUajtcFQGBhTkieKcdCeLisNSk88v8H22KFzoN82BToHrGhYBg8o",
  "key4": "2oZxXhbru7EcjV37ETBBRJUGDsp9KnoDm2W7L4YVWhxLzaYKnEdw7vwTvSm2XozW6mXo7pWfqL83upBpdCsXBncq",
  "key5": "5teutdFjbkET4jwH7Njy2DGdNPFz2askTLzUgwrtDNhnTsdaAMDaj3ovisGZkCLFJ9dYUQdDrH3H2uMEq9hDxcB7",
  "key6": "5qftQqZVMzzP8AMMsCTteykud3UWdm1qVpsyVvwHLC4ET8bKY9RMs1VoDHiQGhh5aKe2KX9PcAdP73rGGUe7PjU7",
  "key7": "28VDUujci8C2sxeEkVcmNGgnzXt4UFDS5LBBZ7g15Hd3h4iUDdV7VvnefpJeDTec6xNC7YiS7UPZpyzDbuSk48KP",
  "key8": "3M1RRvw3waYkXxAGAjEQkRqNYeFakBPTchnnN4KSaSSMwV8gJrdhKoRRMzVukSx3bmFH9Zk1xn4cB8feunXhGJpb",
  "key9": "2jWPYLZqwmugwBFHVCjhLqJ4MmyRXsNbUwu5yzrzPgZYK88bdeXQbmnFrWT5Vm6t3RuupAECvCvq8ZBS9Ecv47C9",
  "key10": "2Mu25nzpdNGcNBRaSXhxbc4iHLZFYaKSAiT4VmzGKfKBZ7H1uXtS5pEV4KRYXncRvHhGGR4D6wdggtL82te2PwZU",
  "key11": "2iC3vg8Pp14ksogTbQXyBszYtqsanKqoVuFZR29yWAEQ5tE6o9xRxPSmyvaLXceGNR29Qjn271BS9HD3qzM5DXcp",
  "key12": "3wNtwR121eXQq17xwPBq6wrf7FXXCw3M2Niso2jBDM8HWCvdnH5Tp4Dk7xoRiehvQCosKj8m6p58tNDD2zeJePZh",
  "key13": "3Hc6QE6EUux9MKDUmjtNyG3UNJDwrRQRY8aPPNNo1ajth79skWHyZ3Upees8rt8a6JQKy122LtKXpxYrD4BRiVfk",
  "key14": "2pY33dbJMWGcPF1t1JQNrW7u3c2yNZzYW3uK9ws79x2B4v7PgHrUMGuDf6UrGhUj8xWJBKRqcoS4YHrKvqPQCPD1",
  "key15": "3HyeYYHjCcx1YXKrioSeTbQTWGX3RuNhYnUAgY9KEHs1T3TQmwzLspHDxu8YjNnuysMGS3iccjMUmVqTwXmzUeDB",
  "key16": "5o7jzQRwS5pdJD2o3auhiSz4dqWWvwRu84EWjPjEMxg9XhvYc39pdEMdvTASVSMRib94KUDSF1g5rZ3ehtYJZBe6",
  "key17": "uwoB5oyz2MEfakyMd31A3hfXc5UeYxFDMAMUGeC6TsdEayTxB76HCd8W7gNUmM6Tz8pg9ohtw2GgApVB83Sty5n",
  "key18": "HXVaUquo3VEJAQJzf1ERVUaxV2jsFmYyXqnSwCQUFuVqSob1KRAihVaWTwSH592jBaGX9jKZYc8z9rrPB2pue4B",
  "key19": "23wM1MEYt5tv12QunnoGqfm5JesDRuM8YWguFXjmpxsi8bYan9i6mHDKi1tNkQv4WX7Kyk5UXRVfCGJz55byrUyp",
  "key20": "4pvbMghJyeA16GNwXvWAxLoTCmyjD7jCspkTiRH5ugoJtwkdbn9d7DTvfpVJ69qcBFtFqfCXvBZ5th5598sVbjDH",
  "key21": "2w5iSXxsxFai4PbZzbLxeGVhUS89LL3vNWgTfDNm1xT4mtiVyC1WvGSqXyDCAZzfBxmbCnxDUsn8kucyPvByuWbs",
  "key22": "2NuevuVZLHfCNvVaJpQb6UFWvXrWPyv3Ejk7znLh1qZmPxnVfha5dmH5JKKVPusb968ibXUdfnY4VePQqMxqVD9i",
  "key23": "6FqDrjTd3PmNNnSJoQwy8yKY5HiRrAhmhB1JFfGEdpzByZcEjTDc9ayoDtzBR6CqPvRCvtyDWEZJpdas7aAEUWa",
  "key24": "3JK1x7JnzTbhUk6BgFnnFpu38rn6TA5qEQ4q6oFcY2LuDqJQm8EWoUZzEXjDayd994bNXpjCcrCTREZmdmanzAZf",
  "key25": "53xamKceUBK2zVk5mBU9uLEECQYUiszRNiMaPykRMb6tVEepXRRUES3MrY1SiSBipXzvD6Y46Bc9XHSrLtcZ2ETn",
  "key26": "4ihxqfcfhrhmLz6BgZXH4ULezsd7zBwiMyH9TZetp9jNmZGQm7Q29Zs5cdiBkHAQniDmFyUufiec2EqFfzMdYQaY",
  "key27": "2X4SD9ASi6xrQ4NURdwzFeU17hSq79wFWamZDV2C2Et1L7WiwipBKLx8tCGDX2AX87BVxxiunVxSvCEonHZnBMai",
  "key28": "5SJVwvAnTA4Phh6Z8heBVgLi4YMAFHcgR8qiYov3NJNvo9L6kDKSpbos38a1czJWyjK5BdaTogjWMRVXvixtBAmk",
  "key29": "365sedu9wF6gF33PhxYEYVHspUL2v91ueW72chuVwrTnCqKpb8YikNxwpa1taMDDaHhEP9yyxCWLcykBVuy2sU8N",
  "key30": "5rScuMxVCFPYDrS9fQkCnB6KK2jSCu3SiTAWGZ3MtzuPRbUoddQyuC8JmnSUSg9qiyeeqHwjLdSFZVzLpaJQEQMk",
  "key31": "2TYaFHa4pvUFqmNmjoFGk2Bphz7xmgFHKhDh9kD6qaCcKsC6dn94g1Cnx3Ly4HkR83zMu2Jsir11Tbyco5LSJbNY",
  "key32": "U8QehQ2QYEDvNSJzehwNCDa2jGNsXW4SL5R5uDpUhAVuDkvFXsiPb1ykGDfjA1x8wqND2AY4akhy5bAPZz4FMT1",
  "key33": "Tz5eWEL3yRvsYRT135uWzuT2CgdYBZsidcQC5ok7LiVMgYsyEJ69afd8gx7TzfDqz11ZAzTn4jsoow2oEZgEU6j",
  "key34": "2LNJvd5jEkuGvAXKUbaZnxwYWB5krS1CaXPCo1EG2yRgWct1G7PzdLezZ8jJz4hk1z13kqoLQ6Qe2mji31b3LpaW",
  "key35": "fqaCHQEQ5ZQgERUvhvgYPkGPxGNtpsS3Nbq5GEuXBwrbmsvxN5Wnq36qiL2nzLJikUcH7Z5uRNN83bE4rKTwtzf",
  "key36": "2fCYUgdJ9orW4WLcEaRyeVAQ4pRxDrZ5TFtXzoJ6umh9d1rJpnEDVFica1e4q4szmVx7VFvQNGXUohFfhBYjppCH",
  "key37": "25cLGxz7PLqR1GrbvkUmRGpbN5QhgEVLz2NcpvYTL7S8bdqdxFUcVKDZtSKLWKEaPtUpd9TYxhmwKp2WKwGT1Ceg",
  "key38": "4QM9LVAMjYtVyuWndGa6FbF3fmMvtM76abaRhH7qLLoy54JRPuy92xadQt1YrNxi8VAW8DMVfpqyvtiBjHN5TG2P",
  "key39": "3NvNYZUU1CqP2ueGLFuBv6sMUnPsC7CuJWd8PzQRUh8SaK8pdpULpKuXQF7GXjrydY4poGnYwfJJXtr48HVDLN1h",
  "key40": "5tbybbZtdmTKZQi48r5YW8CxwCN3aTbyuPse2xuXv2vVzkYUv9ed3PotRcTX9oNwa1JBV38tj124XwRoQ1QiZCBM",
  "key41": "67Yh1GGPyNsV5tTVXXfZf55PRhXc19TdCsT4ptPXWMNMQW8v5jWHXyemUUsE1RpFJB5o3i2YuyBGakbZjJf8FV4q",
  "key42": "3y5KURmGkt1EBvHRPpXrWu5WNyo7qUAmyghk8zMJVFXHnogrku1EKfvbPfKYMoYTKy6xU8zo1WT3TE4Pk3kv8eaf",
  "key43": "XsSy13wtHUToV2R4Y4x3kWhWMiDhuVzvhj8w4s53b5ijaKpqfcLi4tV17zuh2uBB5mx1JxhHn4Z9FrVdhsxZBAk"
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
