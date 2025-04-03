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
    "U8ktghXkH6QrSbpxj5iu8VQPHdVhFW9XmybpAuNbEXYZpXn3ffYQvchqZJKBBAS4fzngjjQVteBcU5cbgiTWSZv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fEME24SAWGWdyh4y4GVr1m95AVeaeXGXCM7MVn7D8bzGm3vG2DfCdaTWyvNG2ak3vqnwPg452oFEcUnC5VNGMN5",
  "key1": "3gbpQDbbNVtiy7EWZw4kDzy2UGjGfbWAiv2seM7s2Gc4ALErhsTggNtEPeA2KTHbFCnP8NiTz4YG3LAU8mAsTdr8",
  "key2": "47mszqtFztXLeojeyQLNi8EXx1V3RGDqPDe8Lw33RBKjGTtf88bhJRTSTFV7PFz3BGXLfQWsrZ63kRZTm7moboHc",
  "key3": "2Azedrp8x6F7TLkfE8QifudbLscPY2t2367Xm8nJvWPF51VidaPQAzC1JthCzVyF6oGTtvumgB954EBTdozBJASE",
  "key4": "3WaajpExB7PfR2qhRH9C9d8W4NdtqryZLGWaCsrZw4BJYKXgvdNTa4SchJsoBsUeszMVM4ghGoFD9KLwr4QSwBtf",
  "key5": "4CmXEnxpL1XrXRcPReicsoA5sXMQVAFkMKwG9VZBjFCSkyotdKt24jURGoBzQ8QVmW6Z1VRsk9roqrRBYtd9icqH",
  "key6": "9xxsMFmnhBpUYsZ8ejjcHnBALctHjyGe7QruLXUwka6DNmVedV6MLQMN6CMehviZBmhq9NrCvXDRoAtxGGim7bF",
  "key7": "pUkjhSwoyNa3upvvTzLCHrrmVWnVWkstrGgKuo5LCTGjSVk4j4DLSyzakwKoCd9a1HbY726dJzMZ24e1CZ8eTSA",
  "key8": "3QEkHCzU9MyhSJJSJTJGHfWzeDUQtUGeYPh5zzqPLv7aZGk7aqMjPkYa7YPe427RfcKHrMvjMztc9Qji1CLVQ3Cg",
  "key9": "3REBQt5k3LMsGYAtMxf5DjM7yctWw57UU6tzkefgcBhXpDJy1gBidojVmoVNScjcpWaYYxtvghncGUeFnNRaxSh9",
  "key10": "5KWKE6UCLpnRT9wmH5rAe2wMBPuLyB4TdXZFrM3AxsWMgnZwPQJjhfxpuLP8Xrze65p3gAZJi6daGnTuryuK8zw",
  "key11": "3u2RZHaoDWaFf5kDsr5qbyH9gg9jgSWLoFG6637Gz5CsAzZd4rKepR7d7Cn1TKEsLGhZxDs6opoVyVgJHsYbkh84",
  "key12": "V6oPmwGWD9CVqfLqPnUPL5jUPsUP6fBe3nzVw7zQfz6tcHT1zJiC6Hbuizvz8U3ca8uhdeNqRoh3Wk9LHJJabGX",
  "key13": "45nwS6jW8dv1AtverC5NVKJoXQEpRhdWU4VeYLGu2sEi9EcgoxbpEKPEGXGYV5MyxFGcp4AdkDLKGaEMhrYJBUqw",
  "key14": "9o8FWAgTLrNbwb2L9jFfDhoFo6n8qXbC2CV3ahALjvt8zwfQd5L6Zw9jVQM5oshmHiJ19tARZBV6oaH3MUXDdAH",
  "key15": "5Uax76NRp6x85aT7DgycAeukNh8Wkw2xtktjmqeQxPBN85yJU9yTSkTmEG51DBGJY5gCF1vhXohp4APaBpNYZ7nR",
  "key16": "xS6sjs6U15BNubB3ukyFkphDiQaARBN5ravjKSvMCQJA2YGTMgZdmDV7VvmSsn4TeNt8DyzhrdS8st5JV8JyP3L",
  "key17": "3tGZJzdHVVBmV3VwDGnsmhkCbfXBWQTsdBKyZAgca1jqv8jjwbqipo4wDA6tGzhbbBEMHPeAUHtJgppMEEZKu9wn",
  "key18": "2C7k9LgAuohVL1E2qgy88TCAWdBqfNXyNWtxdYVkjQQKZcsqEw4CieKoKrSUYaXYmWVsx7UqHCeKDtkQq4HUYhLC",
  "key19": "2YYVwCvB3DZtupNP3dcJP3QCz5a7HWFYf5kRzQT2kS529bVDsUJkoTZwznuG4SqUDzz9jSnG13mTLSPuukdGfYpH",
  "key20": "61xAgysW6ZwECDGexJYwjEe3hwLKavNNrhZaQe7P4mnZqMpzg6JY7P1VynL7jB7jhhWBLn7kw7PUVR75NabDTuZY",
  "key21": "22EUW9DsepAfi6aDy5RoA9tByHf1FAstwV7T3mhp56VDBZNeYVsaCFj8YUTYVcGr6rwycsQZ4y5SxivVQzXVFh9c",
  "key22": "2Q2jbBsRiMtmh8UC9MwgaQH74A4C1totBX7CNKP71ujHG34Nr7cVLqGi5tHno9SQKfW7cD2AjTkNtXngeCGGVAB4",
  "key23": "24q11a47yd9ub9ivAdHa1PAt6u2nUpvXGmFeSgSaDHZ3vzjDc4nXrG7sZjfNMmCYu8wfQotPaTnH5B56LwEss3AV",
  "key24": "3QfE6f2Xebbf7yLkvyk8YcCaRW4yVkkN35VaZEgcXXKddAdpZEbM3Qv2CGKtgeSLHeJpx16HYt3AbPJc8evWKiQs",
  "key25": "4yKb2JXnAEQMMQReoaYEQq1NvNTT1GsEvzXLcfcpDdNQEeNev7mVmwFAhZikA4UQX8VLduQaLGRkCHnA7LTd5Lzo",
  "key26": "31eVfEmJZ224wfr6tASikxAGRSJcccPGRFHGyzii1nsKVx7uSS53xrQwrss1wU889eu3xYSjCxrbe1T64AMRLEYd",
  "key27": "5iDwv83HCfne3bkcyVXwtrSWHSfF7S5hwvmcGNig64nBLrr4ciuueuXVkBvoHvFXwybwA48Pu3eNhmSEpXsaVXV",
  "key28": "3FRrYzinUrCCbG6opGtUGJqR3jDvpMdDyzDXYp7bGQkgkUc3nFLCxRxt6fVqBZ8EfcAnGJaniAqruEf2zwkRsFvb",
  "key29": "4M9WQR3fXFt9PvmZJTWVuqRWMacqARHkPM7z8FMdfa34rqNGgJqv8hFtgyWDnDqsmPDoVVf6RX8BpQj4t5cXEWF7",
  "key30": "66sCGNv3FKV54SFhh8ErAoRQwbxC8ssxx2fgZ18XKrnP76owV4c7X9JBzR1VxBgfcq62orsTVPgNjhhhrdVAnL5f",
  "key31": "5JADiWrFTVRBsMvdNiZs7bnp16bcipDLPYZYR4jWMFXd78vUoSnjXvZmSRuvSdbsT7j6yQcC6Lg5YR6WJHT3AWwC",
  "key32": "4jLPVkJMNuurZkHFoDN5zaCACsSAnmUGAZgye9CzagAG8FuxS85nPyMeP6usDVwKYSg5DS5nkwyCbyeh77dhhyx8",
  "key33": "4v1Y2w7hUvqg1ePCLY98SSFr15LuuH28aajhP7K12A3AHbAEW3Af8AvwkAqkcaSsdSYXSGGkh9spweYRPGE17TM",
  "key34": "3Zsn1NMMgBgjDqVx72Bjn1PAKxZoyJbVoigjDMMy3AeaY8WQ3Do9fD78g7zQxaHEejj6Thz4r1XPa4MN9grtfWZL",
  "key35": "4A8obqYir2ottHjuHC2FqTYCdpzuFJkTPU9C19v3CyNqq34rDLtwz4gGD4m7pdGhv3NXCj3XAcPmpxpKw7zAymsA",
  "key36": "4tttnciiCj1ef4BdrfLcaeab8QgdatmNP4dxHFUMQXDcvmDJFURox951sPuSooZ45d538V7tkyNrZpk4rmSD26gW",
  "key37": "4rX5RAKkC16ib1S6QJhuyhn8DDHhF8sPm3iipXesKEgydBvehTavGxuAc6JCHRQjsYnZ616ZyWn9oiuF4qokHgGz",
  "key38": "4tzgHwhwetH98CsRHoN3R2LFydPQtHVWteMUMBSpwCfGmRP3YikXLUeRePTJXBx3fq4jS66DA7q3ZfN1PcQ75FYh",
  "key39": "2irXuptDZryHv9tUQwhFbziu9cijyRVM9cbxeQVhcKw522kQSBjN9Yg6EhbF8n2fnd7S4FgbLAaAwUPXPh6Etu7o",
  "key40": "4FQXorRgYoAW5TV2UKu7EfmhYJ7x7GEFB8R72ScYYAZPHi8J8GfPrHjiu8LKfSQynfGMbYm8s1LSZY3GiHiQodT3",
  "key41": "cnpdCpgpFxiPmtvxUf19XLDhLLzEoWk76zGLy6VqwJf4ctNq74XdvtmsJBJtxxY1zUo9tBizsbXJ2t9rRfY4w3A",
  "key42": "3EaodfAYpmCWeGaWSfoNKPHB47rEFrmh2dUHUAR8BaQT7fr5gkBSQCtwKLQsGrofnDVbD5upQgFXZYH1LN5Vg3st"
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
