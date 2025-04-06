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
    "fSFTXSnz2jEHWaerk68ejCmzbUCJuuBpyZicjdD8LBLnPjtHdjzSTVZPPi4XmySjEYoG2KUo2jTD7FCmCJ22Mx6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sMNLyHw29ZS7QSMWc37bStnkmCEytrxTeP8NgQ1NReG6JPkGaGXwfR5cWZeW2fwtZjf3h3BgwBe6UiC83Gzudch",
  "key1": "5V323opqHzFqKkC8YmL5D4R1aoBQWsPN4uXogXwLpgj4bdNgXJYMVhhsz4uz5dcJ4eJwvkA1CwSc7GGLvqMeR8pv",
  "key2": "39xGKQTY7N5CRbbPuzs4yypesVpxPjkEGbt1DGX3YFiSoMemxYZjmkesYqx6vEieW9tMFyrNsVJ3CcfeeqYN5paG",
  "key3": "4yhmZtuwAVZaFqLVUYBP3fMrtfWmbN9nWsBooWL2K6H4RCGWF2Zm7Q6McXpPun5pJHcRvMVMB7BGbqE4uSwTYreu",
  "key4": "5w66YSM2DQJxtUv4Jh3Gi2acutNXcts6HUXiJogyGYYqCo5xFrTLLyD7BPBaGwTtcep73rjmgzhTKfYjfEmUkrbD",
  "key5": "3eQZDBFgK3UZgSJ6sM5JmKEYERymanBrJAaA3Hzw6ga556YaqiPDDdkK9n9MzJbgPG756W3KMXq9LLqmHQujoQXu",
  "key6": "2LbnRmiyDdTFETxhQkqkEjAPJGbA3kV59pfMRwsQrvYoiYeP43YtUdNsjHApikrHP7Gns3iMj7cfcyHFGrfYYjyV",
  "key7": "3bvE1zqtABka2e9TsueSFuswBfRFjAubQFD7sEGDvfidiZzQjczmm45EyyRYPP7apeHTLTw8s72nzbaasborBNgA",
  "key8": "4S4wWcMyb9q6UJSn3qPmrrTi829fWb64HMmSCzwEgaTSNEVhXqXhRBDwriH1Q5r5XEL6WgrMPitT8rjZHPr77UV9",
  "key9": "49cqFufdLYGiNqpmNtd4u3jMPd5DUgMdnDGJyWEjrWNyBUaxLvLjCfUhkCeejCFju7RqdELkJAZVUcxrT6imjWE1",
  "key10": "FJURFACJbn6GyxE2DahhLfMu6A6LgVVbpWJdyvd4m1ar2vEoNJiSvcEpZ83EbX2QCZqUJbBpW2VhApctWhwhGoz",
  "key11": "fnoixzBeeA4FXQtpY9kUHTbBVcGFDgqbx31hMN7e3xHYSvzarW1aQnx574jbyTWmbP3XDKrhnkRxji2Svp8bkZi",
  "key12": "5eqTXuvrNfmNSneMt8AbNEPnBKo8uXEpnFrJtBQGL1x15AhgsxzuZ6TuHky5MFMPk2LqiqJpjBCdAH3nTvS57J9m",
  "key13": "qNMfDkGWf679SEYLPPMYzCRQLnPo75FXUQNXP9JTqrrJuvzi4Vb96shbciDbj3zp5AdnRD3wNpyWcrcWftSifux",
  "key14": "5YZepu7tCPnSiCqwRRXPRAe4U4XDrvJthf8mWsykoM1aFsv1c92PbAw9yeAJtQK9dSvAFxVcdsJDEevwQHuktbz8",
  "key15": "Vr9adyCsikZqbSsGryYh4eWbWozqJqTSVAfbWrRbUAzH31CjeCfBhAcKB8rsoh56d4jPcb18XFDcgSXUE5zmkRM",
  "key16": "3qEXncXhHXqkZAkCDVAY1QoBSPxDyrVZd2YVMfNrzYoJr21hkKWVuRePCmbyjxg4NrXun4mcJRpbXWHkwf35uMbu",
  "key17": "bZ8MjYxzPooS4LhmUWRktYmfepM7syBsmsbRS751zjyeLVYw8bKoHZmSV3MLABJtsj2jmwrwREJ4kWkbiKdaSZs",
  "key18": "54m1DvkEJu8vQHTTzX43eSSCEaz5GTd81yPr2UbANDWpfhhnLSnZZS5kTanDR3iypfYJ3hc4Ff4QXx4TxqN8e46d",
  "key19": "2K6psw78SJwz2d7yeiVfwFDxM7Eyxb9KyMo5trcVRVa8ER8B5aRUh26Mu9vzCuDQxX52KDjxEPmLfAUoNVZnvPc",
  "key20": "2umAf3d3PWq9PSKo1LzNhcBH3ss6n8AFsFsZEW5PP7R4gokrJgnHTz2SnzYwj8urDLFHafuT7drgCv7heyBd3B3D",
  "key21": "LtKA6BEAmZzHPi6x25wp3ytvUtjPVYUHjnMVRBSNGSRw76oSkaMeZenSrQQpR3XcGQXojvcEpzDoz4n7MtwpgYo",
  "key22": "4dToDLK7sC5HEyYKdEkVKzrZUCJYJ5diANyrB3EFyk98qGT2PxSkVPL5rrSe1kNJ8qYHkR2j1V4YvohNvDRsN7nF",
  "key23": "4P6DYBNPB36Gej3Mup4BbrYnTjgKzqeMmNKUo8KQS3miNJ2sr82ZdewCu8Ch52Yxwo2z858EcokbMkBSgnMHGd8E",
  "key24": "5pES8UqmcFf2VXDYrCuCNHVKiR1Ufe9TcDhJ85dxt6YYRPVqpsYj9aSwFLXz7pfrdvAZuqPCppHVPTSzuSdi4Xtv",
  "key25": "66Tnpq32CaFwNBRFzQv3eAAxi5rzcQqqwPrLgSKScTe3YYVAMnCES1MqCvuUojYjvuXEL1snitKiEtZ9FqjhzXGD",
  "key26": "4L2aV9x7Nvx8EJfXtcsyqZbst4QRGLNhZZ7jmWjrXWi8GK4Bvkg5kPojnMy6d8h24AjFeY5LMCthoBZLprH1aRsD",
  "key27": "5X34Lb2mYd2R5kCrVBYATJfWdQ6oD8ZEVKHYiXHFbQ5h18JApmMNYDbGmHsBWPr5wnh8Q3sikgd4SfSf4GR2m9qg",
  "key28": "4CLrpHFnwJzYbPrqEa8fJQ5MyEZtAuYxTzSjaG4jdaQfcPv2zVDr5TKtKDp72ukFHHJSAbMJwjKy6sdwE77f95qp",
  "key29": "5CHthKRNM2PHg5tG8LbXChCYfAG2sXEKAYy2phyYdC3CXaBZGbK2YZM2bTqnErMoNXi5TvqoMLruFtVKjdjd8uED",
  "key30": "3JEWNSy8fsePvtGSEX9N7oeGCwsyxGUgk5uTbGfRuqZCqY1qyoYigxYM6kUkr9cK48jgF4kwpewT1axn2ZHi2M5j",
  "key31": "2v4MQUFKKyVbqVXSKwPbUxBsLK6S7uTt71FRrSPbnofpR2aaGV7amQLVVqxaYqqhnYwb24TWCqDQFzvjcDPZA6NX",
  "key32": "4aSqrHVMithiLzJTEkoh4CcDZj8qectaT6nMnJijTQrPCKdHuJydoLj46cJeiw5bjtp3mSbYxaJKb8Sxpnpcy2XW",
  "key33": "3VxhRZMd2MBJRtozpBz8pno6Vwf81De1uCqnvkdwD12S3TuQkwnScDuGSBYJYfucutr3tcdisVj4m5SBcBfof2Hn",
  "key34": "5Xj9faJ7S5Qq2cXy1nT3qvp3Mj6vcfwbMBysqxF6bLGuUpGonEvWKGC33nDDStRMo2QBJGc8DLomECuB77aea1Qu",
  "key35": "2XWabbcMQ66VJCd8h2eqzw9VqkdHwGzXxvgUFzob99xpsGz9Ly2LjQ9Bo8yBfyjZw3L1RGyLe2PM7N4cLpg5vg4T",
  "key36": "LH9TGT8NjQLnTGYAuWXvuFWFuGYndWz1S5W2FeeNo3Qj62wt5TsdeFDjWhtydLdqAmtbuJrXpHyM5FQuN5DSZKC",
  "key37": "2D5KtUur4j5VuD4ET8VkvMkqVtXBmv2cvSW9PaZ4ANFDi8DXcHTZokGrT8K45EWznAkAiGYe84W7XC17b3bWUyyR",
  "key38": "2PhbC7hPK5BBU34cdpzNzEBAbzmevuJUQdmr9HCF3uFDGU2N6Mg6oQu5PPfFGbnuPp4r4BeEYF19gwLYAqVTx3d9",
  "key39": "5npsAAGyjpQYAs5M775T65ke3nGYXvBtbLsWaYo5PQEXtETNUbYPitDFezs9rbPFAqUDqotsTFBMsW2aRrUhvrQA",
  "key40": "2w9otvz2WUiBLLKthrNCuLnhHf8fGBpwB6RpgKkrZmL7ws5NzQVbWBKwnVo6JitwP2QxSqGtrcnQn2tL1YQBVTkS",
  "key41": "3KsfB9ABmW2KmxBVrr9MV3MiTgHJjayQmW9xXhMBfVp37eSSjTpxi4yc5u2giXSVVCCSkFhGDUgWuP4oRfRfTnBx",
  "key42": "a47CH8QbRVy12wJJdH9XzJa1v8YSMoSkCsF3LYnTTZpFWsNqpGm9csuaAdwu2QQGVNiSyK6RS28wUiHaEjHBDiL",
  "key43": "8PvJSjckvQhrw2PNHqYX6PXEumNZR63sjtFpafbNq9yqZQBF61GA6VsZXk7mGcNhBsNw5QKkZS91bkH3jyeRqAg",
  "key44": "3SwscKqq8XNogfmmxVVSYvNPUZjPsfiwwg4sGo9QiFYjCSo9Xii54UHLx77CmyEcpBVSSSGUJA5ouupTWwEsxPrU",
  "key45": "5LCSyfwDyx2ABf4aSydZXdaDpT7r9omv5gzwThKSeUERYHLfhbPhqdM4RiGXhc8GbPGBntienjWzhJ4WfRfwhwH7",
  "key46": "2kn4LUtzimwjzt4FnrrkZPvgNxLu3ajFEXTBKTteNLquWFU4hPe4HcfHkPEvEh8odqp6Nczq41WctxnwMVps5ct9"
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
