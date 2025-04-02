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
    "2xEpPkEgTZJLXTNwM3ZBur35Q1KaMUXFjyQBkpvJrqj9zg5Ys5WQsTcHdtRDz3t6BAFMpif4iksWA8BBzy2R9V2u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36HX83tai9QjsYR4a6bwmULaXBzByWkmeZ7f459ZwRvFA6MgCxLShN11zzPmFRkWNuPfjyLZJXJEFNT3NdwSV4MJ",
  "key1": "P5v8V812mo2kYNmNy3VZKBGmyzNT1gYtMUAHGkjxbs7p7Htu2t6iuzZcg54thJaipK9a1W5VD8QGh95fMLS4mp2",
  "key2": "vU8EBtoyVCVzBJy7xbG2Ljpt5BZ9EVrC7A5NafkALkysLzQfMfQ4Q36kuHCRhSPnVTWUGkx6gnWxDK2XgFWYPpG",
  "key3": "2b4pN4MNo2NwqNbteSHBP1CZ8MHqEchGzDApGw4GYQWd7ekEzckH6SvmY6qRDbRBWWBNGdKsw7eMGuDvfPENHoWt",
  "key4": "5Fbm4g3cVS1542aeKF8cUYPwDyz3G3SvshPnfCcrKrY5ec6qBGGcnRywvqvTFngw1cFeeZTNEp1DYHbtqAoEEKji",
  "key5": "tK6rnxsq9w1kx3ZJLBLs1uV9XzRs9h3DxiXAcBPPWfdXfycFAp1Fyb2czCMEp7wVFD3W88DwAwCJ3JQTsLQvLpk",
  "key6": "4VU7MsnA5nuiKoCe5Af2eThxcCHo3krMs1ZutWv95dAV8u1zv3DBZH3AihkqcEMRTYb6KPu5NqpiFfZTRPpozwXM",
  "key7": "3Govz3ZBHToyTNZnPpDay8uXgqzAMXq4TTBTjYsKYr9FivCxyesQiKC4LPo6K6UevqTQJf4fJgXX6mE5JpmwzF2C",
  "key8": "EansZ1RGobyKVC6DUbtWYw5EzC6vH35XBmRwyvncQoGoKa5iGVNgEFhfJozoNshUABLdwkJs65LJJhVrjmLBx1f",
  "key9": "4So8y7QEZDoXdSAkRzG9X5CcA6iATZMUVpgiHJQVRZT8AxeckdHgqAQyPResp8gq9LGYiux3QsSaz3tZE1BLnCCa",
  "key10": "5piW4yHaTyeDXc7DVMaQAgXXGwb7a6KmafKDrQ2QYFFsHuJCTJ3ftJ77R3oeZsLg1ZoMxcLFdSBiGeesSAtryZvf",
  "key11": "2Jxj9Tv5gz14LjRMPdL4yYT1jA6qY8PbifzTbds5FvB4mtcxt6epjsvmR3Z4Yd9xxBNNvi8Pxejev9xXYVzJCFkf",
  "key12": "4xz2LEBs8ktAvHjdEdq3KZe7zqP9Vo8sJ7LrTcLsmBkwzZccnKjmZQmGS7BYnH5jsM5Jx7wHx4DThqn7T6HduU3E",
  "key13": "4wquamqLSVWPaCBCg981MuYgqPqCubaKetgU7qeKQH5W9qmFYntkjH6GfWhTPnCQJJ9omKduwyFX4bMdQDEAg8ms",
  "key14": "64zEmHtUic69WxpALvLHL87HK742AJszsceENWBzkHrXcQZ4AX19dub3UzDY9phZ6TgVFPg44VuVfHwfGbfurpDA",
  "key15": "2orNvYPezG3Eu7TqZGsMPUBLzRE74kXDDoSAF7gyH35vvxjojED9rASa4js4e2KWv2LeVSNQpzrLKFXLsHF4SL16",
  "key16": "65KDmY9NUxfntoEKQLYy4JFkEzHrA1WGnBzADzku1rPrX2nZ19jPiWZzhHG5p1y8xoiY3MZEqXA2gcQzpVJ7YEvm",
  "key17": "2XMupCSNjViRVpYMPZxFzrL2494JLVZBw6MFCoStSP7KHQBxNsfqBYKt9xssuzuTMAjkPsQ7Z8eJhPjLxyYzTzvw",
  "key18": "2gzxyMXbr9392xBzRsZRK3Exf4UtqYpZqPyeLou47cYWjeivhWFRGMeQJTysPLJiZohb8PZp3AWDLty9yhoQhKnE",
  "key19": "8CfV8BafdUXaaTFvZ9h2bSzuF4mgni9URhhjCZPT3o8dDujuGfvZEK56F1fk4yMkx8r2kpUwrVfrA4yJdNFEFP8",
  "key20": "2EHeXQhtVFdoq3gpsrEjhPof2QDcPKJSU9feDq88KJLkDGY4NGEgFNxh2AJdUVVSnosW8Q3yMHcBS21YLj8vZQtF",
  "key21": "2JBzJDKkwX4hkMCw7on2cWBALRCzvzTPUYpedS2Gke9CY4oFPwrPVvgk6an3A7LcmbQoRgKWLCmSDZTsRpEvj5Fo",
  "key22": "2166qazNzqMtVdkfjqB9w6a2M6TdjouF7wyPGDroNUWSzpVnJUjWg2tF9JJTUvNsJmTidSHvXLwbrzTMxrKqwshK",
  "key23": "KcvJBJ42HsiAZDPjG2HDu4jCQKMM5XCie41dtTdJSPJtkXuEhJ82p4LMyG6RhCbv91p6hYGjwH73hg3rPCE1EHT",
  "key24": "2du8ga7Aj8oaosFK5o7zsnup1gjv5QeGJTzFaFCEzwNoYXLpDEsXKz2zkYyFUmfYFTNAvAWwYCN3T99CNtdeGKzY",
  "key25": "3zQPrZivLyig2uLuG7pf5dfYSsMntzgz2bmzV3FjrXkD6vg2szDMc1fUG4cVCN83qJAbJUGwRmYvfbqrpyarWkyd",
  "key26": "3bxyiKyKf8UoKkt8d8CTTxm3zGVQ7TmbNq427uRm7hHLoqKzSxnZKiUtERH6Mrot8KduEdmXR4FSY7SGnrHXpxDq",
  "key27": "3UXqNXwK7CSQVkdJVLEpSEKFhE4yCdAte1aFktNbnBBczQNCLFuU3NJw3enm867ZfdHXnDgL1aVrUrVfGw9N21XP",
  "key28": "2jxakYWrPdsBk9iLzuz9pYYY6d45VSpRGWUb7L5YgYx3n1AG6ep6YmfE3vpUQsDX9bXmio9q9sEiApTThfkpQrzJ",
  "key29": "LENWgaWVsugJVTuQtQhP5LPohLwobPTJa2jAbXhm7w8UHfDvT8MGRP4GWxLwnGHhD4e5LVtyNDggbmq1DvLpptg",
  "key30": "126J39qp9Pv9CtUoEpsZJBjuoPTEvxfA9rQryzxqjvT4w9RQQT18XcLCmH24TeFa1RheBJDxugyRgTb5B7Fnviaa",
  "key31": "4JKr4dUcMr7hMcqdckoGDHMQC8PNMvQTpfNVfH9k9ePjRhPoiVmynvwQMa5J9ijgaYKJi1Jkf5qW88x337ZYxEoc",
  "key32": "PqPQFe18tozujmBXNPrfQQFrYanNEMV3A3VWjPQCgKLaDZ6C8zu775ksujCb8V6zzkqj9w1wpA4STkReGbJNA7a",
  "key33": "2xy2SkpHKmqHJLQ36LoBKrRQJkZs8B9dZRgmDCtrbuiaW9QqsAsB8C5KqnoMhRzQZ2Z1oxEG1xBxqxFjgTBh4t9h",
  "key34": "X6vzRXPHe3kTrHFPpr1Zzzomcfj6t3zjB6JbPzAx9PBu38k2niLiEr5hckMhfgmstSbeb6CQ4ntQZpgx7mEJryd",
  "key35": "3KMivLygrjEeCYNbAiS9CFriV1ks1DyrBEumZxAioMMP1RV7zH2TZBf2JKKTfQsXTqz38h2VVqutBowbgcnue22Y",
  "key36": "4CNiLUjBCBTiFg6XGo57aZpoFswrDWYNGs2VA6AJfANWxMjTAerRqZeQSbiognB1rEe79h4dD9Nhv2ZzCUEPAZR6",
  "key37": "4xRfNxeRjp4oSK1vNk25TGDd9hH3bBfPkmHt5MZLCfeBEL3Ha2RaztCwoPRaERDBpaNcSSHbZG2GFE1ymjW4EBd7",
  "key38": "4a7NT8MVctvf7kDwN7qearhWg5b5SfbPdsp96Ryy4hTkP3xNNt8RpTvLNLWMDsndqxEjwD3DJdVYVmbGQtmCe5CZ",
  "key39": "65E2JZy8rTuKocdtPLX4ZgJ9iKmu4dmScUEtav7dWXB5X793qDFkwsuNtRqxV8ME3jefchUc7kmeWcWWJZsXGW96",
  "key40": "3dyq7i2FmEF5yYL5C8E1vFCCwGdCfdhKJ7WrfPBnQ2fGQWQDCqv9BtYHwyukMbdGNXwmy9bpKX9XHNnsEiVb7KeX",
  "key41": "5UuzHEdAJBZj4R9cUe8VmGNcDd2xfqpuhx3P7YSPVNYozaSKixwqiej466QhqzdPff19nC1yGmALVU7fjwiVLrho"
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
