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
    "smC2jK9oohipv1r8YWxEFHMN36YLpFY5NGhWGU9dfHB74p2SW3C98uhUrwTbhzg2dQMkNF2oJ4Wx5dfWmb8RLAb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32MGsFStW6hW9jdjJfY4isMhmnDtwLjij6N2KcQA7kUHcVouoE3ej2xYbesHXYnnAittrzbjxxWijdJomupsj9Uu",
  "key1": "5164yYPBRwvVxc6dFeFGr7HqFA1zEGu6a4F3Y81CQhTDpmg4CcQkSZF7in1ZtLEwGfc51PLFDGusCwPiimr6CKPa",
  "key2": "3JULdSRYU7xhM43UGPcM8bhfPNSDd9WDdgpLxzizP5seK69AC2Wp8fkmmCcdLJRM51KRJv7wDNtmEBgZkcbHTejK",
  "key3": "2jnb6shpXxcD2JwFTqQE1EqpDBdUCqyxdUGULx4sdSDj4NC9FjfbPZC8cwSUN9TQLAEH8ZcrkYJbjUky8AQ2nuut",
  "key4": "5MtrfjMJcLC7aKarAQNnthgw88JcVVzTKbWUs45cQd31iFMxCSBvRDEqcbTZAkNapWvB4zhDBkk3tKoXez7kJ2TG",
  "key5": "4WhXMhpMM2WeocVqWYnRME8TXxbc8g4rfDEx3GjFwcnTZGJqHN3LWcp5RgbGKgDHvuKXPqbLkSu21pMXtwBLQauV",
  "key6": "3jHiYDxEcUPfRAw7WbsJv9aitssLKHAHAC2LDeHu15KELa2kiANRzvTiaGUcMUtSnRVrKN6xeKytWf1RgpUhYF6n",
  "key7": "3YEdwdiGDd2Uv6FKVcVzqruFLtSoYjmZuAaED9CLHxHm923kS3M8jLNK4KrG4CiRczmQY9pzfoHeeQH4yHnAm3bB",
  "key8": "4LLMLzqTe3QBqGD8LsfqcaPoWyn4oxr2HxMWXQRyt99ftHZmKMX1KZ81EtUumSRYqBA3Bq3nV5x5w3wM6LUZUf6j",
  "key9": "36BZFx7HBoDgGp4hofm8KxGQJqP4XCXqZRU9KHVseQjuEC8MaznaJUqygmwcug7Pqd3TmqRK9qhyagBquFYvYUKS",
  "key10": "3txGQkCQwUQYr2f8P7AoMQq5fafGiDoH7q8asS3MNSmqn2u81Qx9pq7zws94x2hsQWApPqPVNNGE85CZy8CL446J",
  "key11": "4og6SqPxEef7BzhwAvpqTffN6zxz4uuBjKy3qu2EafdzAeRMEVhsLEojNP98FftY2JfrH7po1JHdVaXfU36e8XFY",
  "key12": "3xBKBVMkBg65h2CczJR1pMsxxAMSYVu3UqPm7Mr73CZyfeNT4fTvFVrtcKyJzaP7psfXrzu5MZkSj1esTDTfMXcA",
  "key13": "3MmGo8268PsCEFCstXLJMv73gSb8WoZ94FqXXkMbwXmUUvcBpGgwczAAw9th8wcGrRENs5Th1tNBH4iXF7pXkW8T",
  "key14": "3ChduUWqGXDoVWG4E1Vf587k9CFe8g61YWhoqCgU6sbh5aCKXD7gf3BN9QV6rWCYqbeH8pG3BbzobB9uADMvfcyH",
  "key15": "2K26khNn57Qw1wpZ9tf1azSvdftU9ttrF2kD2RaLvyqzKUUVRgzeuyFnseDDNfbaZAa8FtRnh7JNfa6zEjcNsGyT",
  "key16": "3hY9mwoF4GJ9a2CbXTxaSaG86r5Fb8nsoFqtvNwgq7GiwxW6imehpTonHMeSPoiAMHb7VeBeyVhkyLhiv3rFdQqm",
  "key17": "2FGzjKhKuF96JArJJc81xDpUKHHZspfz28jZxsNLoGwTuk8ABdEFuHBcRuGqd7eDg13j8u3fJjHuXcxi5ydyZnTQ",
  "key18": "4munC66MNXKTTqGzqo46MSXSBoUhHigbfQsnzT72WkeoiE5Qzu2YJ8hQ8cc81zhVvMWggJVgX1N952G1KJHT8zFc",
  "key19": "5dzVirdL9iheNgr6GxzRoizPa8BTtJgKKzo8k9XEA7sgj7Duta5joyjSBn6KKJvkY4MBbFtrVihfUfhvzGGTRdFt",
  "key20": "4PkK6XiBaTuMVuasvQXbrnSYg4Syrk1nsWhaVsbfg1vC7pLeCnhumvEmRYJmbKJeSMbmq9HuQDZ2coYpLKG2ZGkY",
  "key21": "KkhjCQus4UpgEmM29vEH5sLYshHJa5rm8UhSXotgY76TT295Bqd41vwQbeKLz5LJjJR6QJZwwtAdZNvBE67Bkxd",
  "key22": "JNxQGVKntsvvuthxEqrvdh4cMu2YhBLkL85NNT7rUgxaMJRms6HwF9xSJ1EfYoqpNyZZdMYgE9wSZCCzZh46mxf",
  "key23": "28jvgJXVkQs12kctXBZCfCXgcoBLtW2NpnABkZE1azjzDTLgqK4nFoANptMCK6sRvj7vezBez2sUsYJfBfnhzAQX",
  "key24": "Jo7g4EUFo8MYX743gudPxGFrwg9hJksYCdwqejJnXDerkaaVeYQvNN8Eriw7hVL69RhWECPyrJfg4pcpMbE9nsd",
  "key25": "3J5TmQxwfF9pXU8eJSwsp8xbrVDhqpWQNFBNvLbzT3ybicJnc8bdEE7YgKYgBxufXdcMXhS5Yyi1fUEUcvuwsD9B",
  "key26": "3qrjFejPBVAfTcDW5BLa4ipwPpNoQTsKd9RotgC7PMYAAvSuy1LxrAGvF7Q4cSTWPep58XXkjrjzea8beTWtSF12",
  "key27": "4SLsfy5cd17xHyGiQPgiNUyr6zWyFY8tR5Pu4Jx7venr1aLii1sTmweTGg1j2th4DNsoFq9LJirmdyauf1EKfvwN",
  "key28": "2VPheRYRzQNiRg22yHQQW9k3GJKErWuVZ8kVknXPG9jfqznX3WZkQjaoH4wZxecWMz3qMYnvit5NfQKv7iq58g5F",
  "key29": "44mgik2mCA6a7mHhrA2d4sGvA1i5YoMh9yX34Y81BW49AMCR5XkNwoiffxaxnmNfuu3t1GrFSVxXG8vVDiJKxFjV",
  "key30": "5LUpqePteibgwofBUPAS1UwXBB676RucxZJ9gT1AduWbCprXkKKCePq6AqazrsSqkd9eiDGNQmpDJpNJ9S2RL5Jj",
  "key31": "3hi2XsSEhNXjmpQjAuKsrXa9huCcQVUd9C71BB9WemPttbsjPLRYbYHznjydPZRiHPQin1penWTX3VvVx9GgmdS7",
  "key32": "4L21Zo7R5WsPXkGqDNMURxC47M55W8cP1kmxy8RYfRCK43ehNSiEinvtsnUAQiLgeQtirywA5di9cics9fK7Wcvn",
  "key33": "5Yy1jfgYp1TvMFUMu6VqWzCWpVHt7dyWWue1Zj94a3PZh1K8NjVRH21UN8eD4YuusT5TdfFyuS9ZK2DQ5Vb2ax61",
  "key34": "6445bUbzQGAxfdUHAgUzL5VP6DL2QN9eZD438GT8ebbH3XLDK3n6mWqMuXmBGY78t5ePTdvPFVjPtw9HDB7vftps",
  "key35": "5k5WWnYBYCFU5mjeETFFPh5dm6B1Po4166wtFJgWZQBk6PWnVxkxS7CpwsGs3th6ygTaLAQnigPPazKjkFzgC64K",
  "key36": "2j9A7mRLUAuXMJqWooy1w5zqDktfxCvT4Rd25P57fk4PFap9Nc7xTKqjtscfFPeXjRttEXLX6z2NerL5YQi2NnUY",
  "key37": "5tnM5Y1NUvhZZLLW1Mx1ESizD8JPkZ3hC7UxkujRH4CLWrCvv5ZVUU37Ubf65unvfH5CnmGxrcwUJmMSRZ4LJ6Mf",
  "key38": "2qYG5e2Wfi8QF45XWcs3AZP6VqgrHoGZ8jwoqasmigviAaAXRuuS5DRoFLoh9jJeEvboULdqpYbivpuN1H7BDWxp",
  "key39": "5N5TRVLxcQJy9xW3K3aPhkK4TEbwfh7pmBx5tLUdg9aBrocBVZuUL8yuqM7BQBiECHwKGwL6kqJgn31k1cxQS2cH",
  "key40": "2HGcFTxUbM4LqusnuaSZHv3rzsukJM3bM7UV9qzvHNnjU25yJpZZdf5pPQcVPAmyERn3vkynWzADwaoXLf45YTAe",
  "key41": "3epGRHPS3486CmG95tnUt1mCtB6TGeVs1ByyEpDfFPbW4HZ94gWSrPJ43WeAvwhexawr1obJZGjwfxPP6ha2yHBt",
  "key42": "4ZK6JGgkL1wF8bMiGD3e8U2zZdH2uP3uaLbjSEpEJLQqdo6QuiEtMYkvadJK2ddhqxV9ZF6yp8Zmr7qB8gLbFngZ",
  "key43": "VZPvh7xxeEua1NN12aBi5p4HrgDppU465Q5Y7Xb5jWzKwDZ76BcjiPt7vSBFy2hzLFmMsKzaWCy6pwA89m5RF3h",
  "key44": "5cDLVmykXS2r144qxBvFSE7AuxkTqwQ9h3rFh6dnM3GQU3Le3886ADac3TtskZ4syjz3fasnC5q5KdgSWzrLrXgE",
  "key45": "5YTwKdsD557apUr1KvBqg4iD6bHjur4Kfgz624qyQLS4WguDi2FgpoeyrD8Zs1BSPwgjY4vSa1JWT8mNrb2BkRW3",
  "key46": "28v26x63CpPMZFnxXB6THuh7u5ioqvjmS5Kx7eHSUW8zsb16MJPXN4ViQXcbhjnNnfQT8jZBmpQgdHvJeyk1KcMy",
  "key47": "4wAm57Y4yvxPZhatwSWYvrWWUnHugZxfTGD6JAwrFuu8MzXkPekgfBjFTZXqNU3LbxD4e1b44zoLya5XGx7v5DGE"
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
