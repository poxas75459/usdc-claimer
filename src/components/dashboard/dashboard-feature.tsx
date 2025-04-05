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
    "29DRPWDYAjrDfweu93qNeukpsGF1d3Hp5bkKSMRpBrxErFH4zDj86EnRPAz3srZxh9BNFEYDUmG93iBApWKERdq2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2U9SXTPYmCYsAx5pgPeNZGTnZcH6vLBWfaWtgymdrArvuSA3gQRMnwf7Ar4zu2YhAqfG1Dox4M5bJrfn8tteoYPZ",
  "key1": "pLKg9AGZhmtyeAhPdK2CiLWHhDiy3xhnAc7P8qWsKkPPBBU5iycbUAxW48wXL366p5xmU7cP8swbWxBCo3ikUHK",
  "key2": "4AieuaQRNox3sDJ239ZXbTAm4gTwPChacDR62PoQTFniG3TvybQ98W9oMFBuEMqaH9iMd59jdunNqkwiUmNBgQE3",
  "key3": "7B8EVhoLFHphGLP2ov5VP8R6XeBAxzHt7uBwjVokfGqzK38Z9qZe141S3sVc5d8bXHm1C8LzPEK8xVv4MZP7XLs",
  "key4": "QQ3sSySamhhAMwy1T4rVLv7AwzVuGUMyRDbTLSe3KNYtzfDudKNDRzpeTM1bYdi2gmDxzzm99FGhq9HefyLqF13",
  "key5": "2fkzDkhRWfVSu9wyvjyMFiKPWtDk61nfonCmEChGBpTVB1PSHq6xq8vdcv7E43uBsNFRDY3XacLkTXtTTE5eaibb",
  "key6": "4kytN5PLUuvyxByHLcJL4XESEidhwjvFkicTcMuqZPfsr6WAdNapTTtZqMhz48vhdj4HA129zwMV2UGSz7trXfpf",
  "key7": "4ZmU99Zw7iVkA4FLEZEK8uH7D91u2H9gJCd8jU1AxDbekY29fUyQcQvhJReiQYfriociurBPWJdgk4juopzin76h",
  "key8": "2um7rrnbzTom9atjJyhGLDBcjRBqzEEhCFz2531YNBtnv59c6koPQ77RcH4uNMTuRtFFHpVKUEk9aQDSQpcPuGZK",
  "key9": "5cZoBrvsqGmKbSt5XPN9yYtA4obme6TiXetgXEmbp2Re1iD1S2hJSFf2BF43DpftxHj8xzXGUp7cNKvGfBMSAqMW",
  "key10": "HqgKWaVPjmPDoq4EUKMqvRjUx3U8jvirh7fKc6BxrhMib9YieV2gN6jHTHXuVbje6bKmMN9gxvKkZ1aQoGBTEgy",
  "key11": "2bYumAtF2usp3LaVzMBYCWsz2dakgjTKvfdwiHDKstQ6JpGycfjTxbftffL8meNwdD7b2a5hGBLyww9ciQUdKsJe",
  "key12": "2ZF1tBQrzXd8qXSuXwYyCUhYvhZpFje8kGbVXFhzTT36GT21xAxEYMMfpWTUkHHHetFuh8x5nVB32we11C7PmVTT",
  "key13": "ReC8dTt1gqa7o4U3i7ANhxcppwe1HuNZKNkZHszk3F6ipMXDcMipjbwoz7bgkdXfr2YuD9aDafE1BqcBZTP5PiL",
  "key14": "2e8mvdt9UQmGgtJaZFyknV6oT6RzKZNMcDmWuX28XhQY6DRZgSdcyvP8MqZV2UWzRxFS6fiQQqSzmovorRNqqvr5",
  "key15": "5AV6UJgPrzutmQxsBfpsMp5qDZ7EXx1jEzHZYyVLEd8VfXm9nqgg1yqksXFSsRaFpiRaq8KZrJu18MPQzKiDpChg",
  "key16": "43tBGWqPp2YitZQWc1bg25QKndarcFAzu5feNsWQxnDQcNiHv5uRLFGs7s1KZ9TszH817AZJM2yY1UotkcD39X9k",
  "key17": "4bPrfpbMZhbKqCha4DAsJx5dT9iYNMNEtfuahyZNCfDT1KJydePVavfqiF76hBnBa2s2ozdAmqySZSpXAWYarsFY",
  "key18": "5UN4Vy5rjBQoxoAvT92GNZGgyqj5DZorJ3veK8VdrmpSVpiLAKx6GnQ6iNK2a5Ng2c2UxPekEQn4B2W9DtHEJoVY",
  "key19": "aiL5TXSLH6B3hXUE2Zt74KYdPmk3mCYieRrVDmc8sBBKo2yWFnZnaykvBnhY92AxCtYG2uG9NmxGkKiXSnkizPv",
  "key20": "4hjtaP3E2qtt96B4HqsHfgoju3EXtNJveSgMYyXUpk4DeKbErE8R42PQXMzNnK1ZzyTS1K8Y4xhk6MgsN1FbcWTK",
  "key21": "2T2VCGEdFTA6po5bepnm6j461ijMYoXnnvdF9eFvWukJxbmSXqtwdnEqzVMbsoAbZJVwdBPtWgfiJkCApo431iZM",
  "key22": "4esNrZVJXnQQEF8cEk8LSN8dBJKsyBRfhcFAwFGKHcFi42NuqPG5cGGQHQVrDYU7zLMgP3TkrxxPpnswsL2oYQrv",
  "key23": "2r9aAkPqLjhv6sEYynfNLFW5JrU7vMM5opePfxoVNMSQMEt53Z3dBVdfom34fwH5s1esyDAdsjqSiC5jJoahPtDz",
  "key24": "3pXpev1TTqBw73SK8C1UDvRsrWqkKYRvaCUtF93RG5kFA6UA3VCvz9w2WdsuqmXMhDvzjPwuwZWvY8q85KbFypxS",
  "key25": "vLfmvgL9NSqYKQxLsby4RdMZ4G1UJqHCEf5hev8swdU63wpTykj8zYDRAyKYXVxYp7PePZ9e6djop1Qjh77K45R",
  "key26": "5WHgNq8q5fLRR2sVRuPU5JLWXD4p6SQ5617wc2mo5QivnSKxYDyhgTKV4ymYgqFGsvz8r6QWPgnK8WkKHLnqScML",
  "key27": "2L99ZdkB51p6b6ikj3GH8VupkYB4pEWUdKZmYSh4K8xt6vQmLDkHfE4W6qK6EzgPEzLfgAqVPcjWth9uK44vtxQv",
  "key28": "3YrQgdwPLDnw8NCXVNj5dpyQX2ZpXix6sbz2wdgXDkMqhY6LzNX8JkWxEkZuj3Ay5V9xyafrXwvziXRZDUQXCLMZ",
  "key29": "4GQUQns8GycXey5LyP7AyxXFh1g7Zr6JhhGS6cLpUbzt2Lh1YseYaGBe4BozPXNQy75grMzk2gw3CciTeubML4ZD",
  "key30": "316B1vSNjzZDrkPFuHxetbEpc7LuRRtbtrnbshFKYxgHAJW2MqnTaJBcEtPh284D9iWEWVqz4Xxx4b999BiFvZfT",
  "key31": "DeNy2ZqxZt6Atd1cFi9uKEywAepHQgR9zg2H1AADwkNHVkyRQAK5nU4ydA5hAzEPnCqxP6JYx6WyopwjoqPxEB6",
  "key32": "42xQ8KkNTQCnFTpcXAJ94rWS5evbniBYfBrcJP69STAq871sTxmhPLeiRh18pptLitCfRM4GpL1Amrzgk59S7u7K",
  "key33": "5Zc1qRTX97UXivyeKHGRo5rhzvCoWodv6Zug8Av8aBmPBmJgwJKNMR7GxiVapiqBViAjz3Rt4ecEHwvaXz1NbMUP",
  "key34": "3JajVFWyagrgT3n8nMcCDNg6KyPixBj9kyKo41UYVj1TC9x6UXz4kAa1oVcuewsd4Axm8xTQLMe7acxHm96QbC8d",
  "key35": "3UnDpSD86SHJpbwVpxpezTZMY6GBVuDnxQGUfsqFWZkbWXaSnQMCHNajs2AiQKn3GTTLAamvYv8x4wYpGUnupFox",
  "key36": "28DhrduZJBLQgwRopyvX2ocG9E9YRee6ZFP5xk1vPSSKV5fLQvEw1uwqFW1pXRe75vveQcDEiMGNUCis5w4T2upN"
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
