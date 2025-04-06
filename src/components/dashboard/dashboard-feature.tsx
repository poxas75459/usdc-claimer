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
    "4mXBQ8KUaqj6y88eM1i5U3EBk6YRkUfKANbixkmn8DjZka2na7gtSCEQtQMesooFi6D57hkT6dyfcBdAPzSde3V5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UQKRjCkoF7yUHLr5JrjZ4buM9BG7ZCRU7VKEfoCzeL19gojgPtTcUQn6BVP3mgaiSL9g3AxRqxucEcv6HYFwsCk",
  "key1": "562FWHaXPdi96MbFnoGV99oVSypRF69FfPuXnfvPSeoHnnYhP8JGZxEWWigNGLTeFDaYGEEuZwVgeEueEHGsJuxD",
  "key2": "5Td5G9kA8d2tFYevQyThviNDTYDWF6buDMEbRpMBLSV1fa8p4cypSn3tuiTypgNMqRRmLBnGGQ7EAn9kQ1oF6G1c",
  "key3": "3GCDTp9Ajvsv1v7Pa2RkdE5xfq4NWdPca4Zz1tPya12t9CxxeWnJFJKiJpbanbQHsMNSguf6xicPaQ24FMnpgLkJ",
  "key4": "231qipxeKQ13WmRQMkU3inShsmRVtyX4rZwTd9zMBBQbThFEMrDAQZWsXL7eDtevu3MNxBQo7CxNnCmQdhQr33GC",
  "key5": "4BPVaPb7QmJi3DmN7aYQcdQPTr735hF5RrgBrpjLDN66SWuG68nNtRcPwAyBi7afWRrgMpRfXnMK44PfGFNzXRnJ",
  "key6": "4Cdc7CJ8RHypGwDMQdqnA8W83dgLyZtC3sfRiqbu67uennkPSJcUwCzM7yJdzcrVa5EfFNZMfzoGXDZET5CprTCM",
  "key7": "4dp5iAi6faH5N3EvxsNoLZxy5CLKBUkqUwq9uqJn1Z7jqSu1CbFjxwHqVAyFUSnPZGkLhxLtqSiFBdCSmQ23tGZq",
  "key8": "ACQDf6dqz2J9Uvj6vCtiYEMAFR8KrdureVridp4CNW5aJ2vdKUboBfamAmFhWVxQgKModF1uWWWA9ByrHmaCRZB",
  "key9": "2f6QtVbKjYgmxFZ3eXhpTde1TxiEKpJHZUPKuXn7XnkcJ8EYpRyM8i2cixbX6WtFetZi3LornsVhdCMWX2tGv5pr",
  "key10": "3nt5jrLo8nk74CLMMiBqApW7GFUf437cwxn7EyKu9GDbGYEzY2DYCUVcDHX6bb7wc3p7ykhc26EcGhhT3hVFo9XC",
  "key11": "54r8osrqVKfd5HBbmy1ZeExXmyGQQcmASaagAYPX7BU4syhp94Cq2JQXMGYUhPu3kP6vJGhtGqsEM6sCLTgHL6zJ",
  "key12": "2kwdLJnjBGZqUmVD5vVhenZ8mTbGPERkvjmcF39WjmWU5hKi7Z2pvk8dKXAtFkRWzixsrboXy4qnbKR6vCbDrxYn",
  "key13": "Je7zCBNZLNgbFjYrMQP37NJkbe4M2F64BLK7FF7vuNCAxjVf51m4nU5GjiNXivLJU8gtpc2x2U2ZjoUAbnN39uQ",
  "key14": "67Aab7MmtQHPiXA5qZyyTTDNYJti7PeAN5HgumxThbt9MJLsoQyNPpBPUcFYAdkHaXFHGDrCdXiSFnyZExrtR7nZ",
  "key15": "2qiySuF4zueScPcBnPVDvDV9aATNU6uNnv1EJxaHFHuZXx29DduBLnfLUaeCfU1ALpc1JTvHXEqdoptZEBJaqcBi",
  "key16": "Qfv7bi8fxpKxRzJr9QSpWDn1trNZ6cpEgSKmfnMiMzmwoAKcB5zHhXxTkcZVnpgnGEdk1Pnnm17txibzuamCcU9",
  "key17": "P43LW8XbWmPBMikuU3zwpH21n33fBkPP9goE7fENEgLs7kbEttNnbrs66kqPqjnQeJatVnygdcKEARHwcPWXgkW",
  "key18": "5DFh2zC3Nnk1Jf46apc2YSvGHSBHWprF9VgRquAYa48HsspUxiptsWHXwjohBSUzWartaKdD7J2ZufChXoStzNiP",
  "key19": "5DrwxNcR4FGpVNLdqsZtAHKgHRwVo4po6NccdWjZR4g5nBw9pRfHmLd2v33DfxdqyY3HiCuu2dXj7N1rt2NJR67c",
  "key20": "R3G9JoWu96zSXBvBobZbJNu6KYr8Yxf3xeURWxJTSSo8imRZn3h2C9You1aG2khFkGURSPJbNerPYiQE5hpHuq1",
  "key21": "5azhX5TuVko9Se5AHdXDJevAQjqppDvx1oUudgsU2WTqbYucCmKorx9JfurXmCqWTGcZ9W2h6mr2vwrX2FC2TmHE",
  "key22": "4n1x73YKat6L4fCRdve7McTAxzrtthhARZZBra1nP172Y8YuP5Va64vgjV59vjKfQWNN2RBwEd7XeychicNdTLWt",
  "key23": "2ZQen27GSKeiEK5T9tFevGxvyvLKp69VGNfanpLxAt4v7h6RBeyRkL8cHudiD3KRE7fK4bNFKWXAunoavmM4rvNK",
  "key24": "3SfQrSmx7NTj686BcLZTXY4p4zUnnCvXZuo1UagDnLWKSZQEogZ7qLCStoQTLAzGqAxjQFEjLFTNJinKAjp4onvk",
  "key25": "5Uj3dNBFYWo7pA9MxHA7i85ZxRRV5e7awvteVAFfYQoee4poHoRM7bVSVycz8Lp5swmnwyKAtkDFn1FdKsxg4kZZ",
  "key26": "67Sz4VdmhE1hb17CXsoYvdippb7CsSh6qbssn2bX78fqJFrXX5MwnH9EWhELSoYQhMZBbsUhnQ3fiRTt65BjsRLn",
  "key27": "XpHV52uJHweztndXxnzaFAi5r9GSbJdVKhMrCzabnhRTcoEF1DZZUK4LB3b533eNRmJU4ns6AUdTggDGBY6upxG",
  "key28": "5dH7qju6LAmrsWfEwBFAmWmhdMftK9r4tR52YHjhZMHkYSj4uRpL9voSLTXLcqbWZaMSbVxxPoZBjF7BtNgxiZtg",
  "key29": "5HinnztLW3gaPADL4HogHbU46p3H8xa4i5XFTu961QMLcB7tfJ8z9gaP3WhayYJ21913eHVDgxmys8G6sQtPQ82M",
  "key30": "3HXZoCZhixj42Ch55UWJUwi3GN6b75kpnnPG3SUBTbNhGsppvz2vo9B8FgAwtpmoXvr88UYjcKHn2Vjjyrn4sBbE",
  "key31": "5UnKqVbnReaLBG3S9dhaFy8S7R5vpd9ttXiKauwG8LQrn1UQk2npcpsFqsfNfPocXAc6AuAd31AX7UXVimEMyRjP",
  "key32": "3Ux2MGRRZd7fRhiaZE67yGRC3zzbVysfpGaJ8V41GJApLG3FjhDmhKdRx9SsyiXPUEdjJydHPjLqsJqArwqrnBU5",
  "key33": "4iXxfLCagomguw1HrCvQTEmhFyQbwgTyL93nvzdWJ7qt5PQMhSAGsBxX8D8jHm7UXA6DMJqE9np9i5wxEyUrZc7K",
  "key34": "3cKKa6hwkY5TbQi8mnuuY9GVngY4nngknhu3mNNaDu371KLLpT83u3k8jW1ryAiCmAfZtBcqrtgrTcma51pob9F5",
  "key35": "2SLvyvTKM22yRnAVAZqQiBzLDs2RCcT4W5LH8UyTwuaBjGpTEhT2HhGMyE7JQnN7927Bi9BUTwfD55cYYm8zAScF",
  "key36": "5p3Jypj41td9fGobFdQSgRd9fuhx7CsWifahtug9nPBfLGfvvd2Em8b4e38hZZaZjXMksnCjkCZjnJtt5NYm6R5e",
  "key37": "TLjMp7pD9M2LBtRrMMfXGPqfyvS7fs2f8kGA9JrvJM1h2naahxMHeS69ppjSnDek7De1gy1BQ2EeEDArdiqwnDK",
  "key38": "i8aEMeoYLW11vq9nJCbg91zikvJN38KiYExSeMgdYftrwNmuuBWvUgFMxhhZYK15wTN2fS6kdmvk9H3ymVhN5y3",
  "key39": "3MAbSnEcUG68w1yRyj3y7fdvQyW3vdQwNy8Qz6C6NBr3fnxoevGWqp9aJ2HSwtiJiXM6RBacDMqX6g81aaMMwexQ",
  "key40": "2Bdw4BAyXf8uyKBvkzmbB12b6r4qdQ8qeGVxWzemv4SV6eiFW2zQDisMJV7QWz2JbARWp9kXEUe2pabfcABq3Gf3",
  "key41": "5WShkGcG6fpimkvrUPa5FpDuZqczZFuH7YZzD9qA9myiAbppa6NvZtmYDphZqV3bibLhpZ1NPkt7zw2QxSh8dNNN"
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
