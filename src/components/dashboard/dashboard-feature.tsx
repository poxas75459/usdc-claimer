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
    "4tJBhVCAtr51bWwEQNNgQUsNSxW4h4Cc2x39SUmmeRwXrdah8Pg6gtKU42dKnzdNR36f9tX4UTKErbL5aM3uL5Yr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45deghZ8McdtcZNyRcf3NrHr2AMneqVfmaB4cAkiP9Ymv9Suwdu2cC4dYrs33yxA5yitrkZpKRMiXAGpJ2jKSQRq",
  "key1": "2VfDhqXh8JTYxVBgq6ywaJbf9KQ4XWyEn7zY9YfepDg6aLZJ6oRL4x9o5NzdXDGFSAhCjgaxA5sCt36UQmEQVJpV",
  "key2": "28ZPeJfVzPz6Co6pK8kXLUcVVN7oHKM4mMotUtEwBnDX6oXF7ChwjxyAx5o7tHKZcgser5VG2nxWi4qjmDKTZCXL",
  "key3": "3jGhMZTYGCm65BTdugjZxDXTMHwVbxyHohDnxJfHdbM5GALWGXWVLAs6VZTDi7RzrbvKMhMxPBgf82dL4Ps61MMJ",
  "key4": "5GaE5oARiNfvHyK8Vy4HmLG98Q67jSkMFSX26JpmPeyFvSHtQ3ThCgCgcB18yad9769wnhTuHnyXaP8XWUdifbAi",
  "key5": "37vhezLpF1udJwMvQVdD1PuDxno1x65oGrtAdnps5TztdJdNmmVSmzJ8CHpPp49EpmEyRaNb2AYxu3g8pY9DwQTG",
  "key6": "66LxwxbsWa4xhd2543yMrrP2Fo4ZUTeByMSL9nb3L9JUeBShiGbPijm2mkD9ppuVNjbWkvBjgaintDr6UMzyjKnK",
  "key7": "2SxW453uM3TZQBJXYVLE3vostAp85ZWcpspazEJMeFAhZWoxTHUWgU3iVyzRgjQ3L3hGDbXLY38uJ5eAStf2vRKM",
  "key8": "3LxhEXLCk6oMgyPrKDiYS8qj2ucFRbFrGgNEW3x6BTzBEW6Ct1KNgMzjnekyQBHGXF7m2cTHNybqQBsQ5KdGhoDt",
  "key9": "3YFtmGmb7UwRJf94qR9tvPjaHTd7AomtMF5YedDEz1hU9WGf8keo4WQpxTxhbJXparLVaXjVcLDCFYL2nsUprqjM",
  "key10": "51QnbWuKEMGrTxAmqcMWguK14D54RiCCMAJCT443he84poLmdESgt6jW6FKvyooAA2sJjm3fRvgRNPFSsijq8Cqo",
  "key11": "4hdxMNdMGiSSKtcxKiKZFmbRPa2kjFfdm61EDhTjENPx6nREnZpwUdm2zRk6uJ15pYDyxseTkbxXEqD2YaaPcWhF",
  "key12": "39G2NigvJVw3SQPJZVhSTCKtjbsaMrRN2CQxKFE9tYhzs4kQLyRELgyT522536BLoWJLbNLQMAbivC66iYurEegu",
  "key13": "2WVHujrUE6J7AeSHn3jbDmcEDNH2Q9fjxaFYhAQseCvVheUS88Qu93zSG8YaKzyBzRTocNMsD9pQBH379qgofHSr",
  "key14": "2sZANvNQrcpShEbBL55ZpApkXouzQEPBt9KfCLfcosvXnTg3g8vdvyRma8jW8QVpDd19FVc4SXH7ZBjz56PT2e6Z",
  "key15": "2CQ2jLDV1p7YpgeD3FayzMC7smSKgz4vcySAsAFiCNCAcc8E6jEPM6R5gxDSutkAqyCu8dAT2LBzgptNmzzHSDzY",
  "key16": "Xvt6ZqrU9WpQxuE16o2vXoqBu82tYthVxugvVPvPSVmk68Wp6gGaD5fpe1p4qe3qVSRtagcyVceCpgqpZ3pitho",
  "key17": "3yfZDY1RcuWJMd3rjsD5tFNvd9W27CgCXHC1jZ1CZiJWbTn3EWdoRUyRUgd6pnsNWwoYxN6YJuuxntdaq7gukbpc",
  "key18": "3PXT4czSSUTq6JA3kYTd8rT8fdMokvDQiL9MHsgErUXygcpvsrkB6U1ap7PHaZfxQLVHFFmbA9uZT56JdLASqNKy",
  "key19": "4fqiywTXwVsoBLMkyVgDfAkQPZpVAWMZZPhLQpu7eQ36vKaJSnWF7N466zbWTKJi4kpsD5JmSm42CiRDVPQoCLZL",
  "key20": "5xDVkknFJwShXL47MUtdKNYJ8NvyLF2hYvByaCGkhgi6AFpYoyzbyqCxFaocc7KDfMNugQahtVW8H5Xpbg5bsQq1",
  "key21": "46j7zAfBngmgstxiGdGs7gDriChSpZ8NnAuLtghoFhPZNPxtYD9oJBVJdBRpsbpHtKa9TGdvHPJJEMuCxRkf2wtf",
  "key22": "5CzaPhrucNjcZFv5VCqCSdssMabJaKoHbt4F6ymbYKdHmrWJMGUvvST5aP3CFJGBVJ25dpFJUMNSvD1KynaP4nmy",
  "key23": "2iuNQUCEAs1KtEB2bCksZ9tDzihdrFVEr1Ehi8RUcP3YTZ7pU7q91eU31aFfcpT8kfDRyoqkm4v7XHaixTDYRYHA",
  "key24": "2emKN9vdLa9FKCGcuCTNqUVWCeLeNE74iRxAUEERauh4FytFidkzFZRaMLnmWrwj73gVQ4pyW6RivGPxuArwWujR",
  "key25": "r4rkhWfg2zFa9nXdBsQ9RRoiNnqmNCU4MLHsc6QDoLZhdEUgnrRTXuTxSQ66jjGeBnRpPNcjmNd69272ZPLQxTb",
  "key26": "3iXg91mw9sZyU2U1AXq4sCNvzbqFx4b8XxvPk6QeYQQ8cxV5CnfvF1bBEUYMaNw4HTqidicxtUGjTt5ZDnVcnHbJ",
  "key27": "3tX2vsY63vtU5HFVgZ9yCU32hEMEMTrmv7GnhmTtg58joy9uWQfmrxhKJFZeykMYJPHa3XMQCdMY3YtC3JTeUoF3",
  "key28": "5DM9zLuZj6LhviL7bTqmKWPnQJRcvBNVJnv8BuWoV778Fy1VKXeUwJX7a1cZy8rBWxXq9mt7Q1h2yRhbdNuuM9kz",
  "key29": "5kxJHiB9MDVgBqQwF4wPapyVjLPgcCiY6XCXdmA6kQaQW3o98ikwSdLZbV8eYthYLbbhtjVL1qqxhQJw2UEKPmnF",
  "key30": "4qYwHmnsLZHwUSio9NK5QcAcuPBHAZrf7uw1yFV581cMUc8v6eHvw1rRNGVA1HMTYnDihLJr7kezpNdbyshqJkwh",
  "key31": "621YRAXutMjKbQM63wVL3wtj9r1CBTNHMywDQ8JpPsppRR5htfrCXcbxTVJLUEoLKCpaKLoFekRont2rPFg7nmp8",
  "key32": "5Y4zT6MhkHq2Y1wk2KHEmxLXCiWLy15R7JYLxHpqX8sfytZKc882d5aX8z771v6jNiAnD5CQvwHB4kvdubEB1ews",
  "key33": "F36HuhSG4iKTGYqdefAZY79oFrHAhFRP7DoRKCKY2HEfYCqf546GtrffKpLEKV1AXnQrCSnc9J7LiNZHLMv5GbY",
  "key34": "3gmVve83aN4KzY98W4U1W5hH6Q9ZEZwPTBomCQBZCa51fLmQLYGhD4j7ofoBo54UcwX96aHtS6AUrfmANaaC53D1",
  "key35": "5WEQiMb2cfQfNmNjprxeUeuCQLBMg2h79MmjP9FaDrx4TTxNPmYaASeyt41qEU88KBfoS1wRADew57Co1KW6dkX9",
  "key36": "5SdLQLLRmfRksxkG5znjGPB9VwXNp2UCf64w8sCZtv7Gt5derUtRFnLh2AHD2ehASx8gnHPthk96sjTVSF5HvEnE",
  "key37": "3NAXDoDPhrQjiEMaaFHzL1YYe3ntzucwM7Gsmz59NEFgboEpD56ku5Woi9NYwVV1t2ueMWzuCDbM3LGSbqNMHxZj",
  "key38": "jCZcdjaBHjWYBKq1REMxzAanNE2Hqdf7YhmcAHJ1m2op2fGNJyZBetmNMgLTw1fbizwhmMVpKnkYA5bTEaUCyVg",
  "key39": "42pUbDgbjNe1W9tA9Qv64LGVuoQGfkD8nFxBrPTBJb9wBezs3ouPRFiHMe6jqo4GbbdcnCn2WURtaCFc4Zw3JN6U"
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
