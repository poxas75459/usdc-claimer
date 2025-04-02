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
    "53DBuJa2tEHvcatDv6Fmspwz7MzCeEMSym7VV1vTdiRzyKASoKK5Y17Neq8UkrMsSmCkGucfYkDJSsKzQ3FWNn1x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rytKFkVmezveLVM8TKNgWPwHN2oSV2zcBHTxiEPuQuVBtSUyLqZg5iVUSZvdcKHzJyUHRp4Fv4MXG9KffLExET9",
  "key1": "3SxyyUseASpzyXFusqBWuSuddgBPhFftkj6d1a7Djh3aN7HcjK2t5Kjvj9pjtVcAmdfdNPMbTbmbSoRx9HwVVMzq",
  "key2": "7iUJSoyCokEKsTiM5nqHcY7h3cUxc4jQ15bchY8peYs7p8UN9712PsokDK9weZNAiZf9FDrFps1cEugiQnu74u9",
  "key3": "3qNKpfytTALY3fvbPL9FGMerp3F5MRPDJubx6P3f5UCNVPoUWx3qGqdpRcJtBzMEqCvS5eUDTLvXwU5bCvmzaM4i",
  "key4": "5uwEz7ys2sBaPCDVuriiQSazBxS1BWg27JmTcSFEaciYaAbMZqKsptRjzLx6FXYKtRhqYtEtdugsUkndsYreRbEJ",
  "key5": "5bs8xaMb7RCcshZ8Ymr2xYJEckGMAJEU5AFvNAGoFj7F8xq2RqWM1TV5VmqViyVEvybV9U4PRaFsWMWCyehbfBEs",
  "key6": "3AWwDxjQEHcwZdiDYt166BKFuy48zRLqSE9KmFXmMRQmS9v4DDfbpxL4q8RtjpKdQGymSE7PC3T2VJqzAU8ydcFF",
  "key7": "gbVRrnxhw8ayc9QCtN3WK3EisjvksXmsw2ajdfYY2uSYQunXqXTrFDSG87BeZNHdkep519nxtdgfn8246LrjyCi",
  "key8": "2FDvfWzxiN9kiMahCsFgfS867oerwqgRxo2DHW7b9vjL1S8ijFUMHmSwnqLCSst8Tbsdnnm6LsQjT5rEiKDXMyng",
  "key9": "2fuSmMQrSdPJSMXzi5MZQSSiLhRxCv1nF9SiKYib7xHpYT6d2vVftx8PTpyAHQWC6d8mCnrVyURJJkz9fShRNrdP",
  "key10": "4BXbYVTJS35u9qZooqCcyaomkGGmRtJaGjNdciRW9QtZsGTWx6vwwFQPbAkb5mCFnHEEjPrBGZ8F1NuhT8L9p7ew",
  "key11": "2AsPPRGzGJGoHKozJ8nBoPd4oRX9gV5WQw4FJiH9nhqPAHTqsbTsryyRV81YbCCc7zU8fRntYgcYxUgtMMtnjutR",
  "key12": "4sCWsq7bukDXwzbM3Tt8sgFF1HVWBwPdUtHbnGWRrcJh4kcbzhnwHSG874E49ueQMmgH94F9oi93kg1dbfJTrBdg",
  "key13": "5W1CBxkHWYxrScmwVVRnUvuJLALpo6uhVa27jxjiPJfzRJHPJgX8gdfHwWEYuZV3DhkSkwCYN2GX6M7cVezqU8fx",
  "key14": "nTVTJwG3kzmwNhYuVVp9ymZb2ucmF65aQkPKo2TJWdKi1Fzkd3PkQpabKxSa5wgW2mbTb1kEU6fescjv4Wq6RY1",
  "key15": "4WtcQvt5EZJs7cTfMoaT54jGXnuUVUjGiUkZPLcoWxEkfmx59EbmWaGVUMhKtiEwRqctNEco2qPbSdZkbeD5bsk",
  "key16": "4BFWM9auZoHr5kU5pZntQpQb8avHWHUaTRxg2UudY9Zbz9Fuw695ykZGS5vrMnKk3JQGPSLc7jJQBYCAoxke3Ubz",
  "key17": "uHmtDHcyeypby6j82z72p9rqmk3CZ4GisJq63fPgGK7nM7nfh4tjesCSJojrd5Pc4auXMEe1Dpw2H88qdnxiVCK",
  "key18": "5G54WoRdb4DSErypUrgFDXL5G1kKyy93QvjpDZCPrRXduxHFYRubZYa8rmkmfduCZ2sVb2JiEoFCPzjEU9nX1Cff",
  "key19": "3WbHxMCgsDR2SsLDURyh9Qf8maKyDugfLtGNigscpcUiHP1UbvUnxy6nq6TwKiV7aeqdkV5uMrETWSC5QC2TtRqC",
  "key20": "HveSH7buW33h6XHaJw4wj2ccNRLchhKLE9rmuQq1s6U9ci74bQtMK17QgbYPCtNnmZ2G7RtBAuCB8nDp3RGoAGD",
  "key21": "554hggcv8Zs28NxmZgaAbTRCT3XKyZMSt6y3d61z1k6Q3gokP9M6RVejLjK865GLSYVcfzS1mAkoQEHnEJUAJQvU",
  "key22": "5jnTVmBDReKAhEBcWiusTTQtePG5uaLfcj4T3inVP3D1h72qaTypfFUTEExfi1drFoq1Yjp2B2S3VuHwkHBCkDgS",
  "key23": "3yYTRsgqPMnpt9XNW7piJQfKbxhuTJnZ6wpZ2FACPxhAjAHZDA9bESKJWnq8gmBV9ikeveyTYz48C6vxdoG3z4eb",
  "key24": "3gThAqaXV8qASxHygtXD4n77kBSfwQTzmvUtRxRYcb9Jk8J1zg3MGedj6ctBmFY1sTSgMS2tpUF1s8vRJg2gZRC7",
  "key25": "5tE3yUB26CQiSC9QuYztACYRnH7ivZZmq4vC2Kw2rj2ws7HYhqEL67nfkPMV8csx6FAFjvG7Ds8GYaoPuEd5uXKJ",
  "key26": "3HP5XVrboa43Zn9GtTUrt7ZAqqyaoC6tdsnWaBW7RVLBSu9SjmgUtunpAGEjkp4es3Ssx1Sjd1NkQVH9SvReRgMs",
  "key27": "veFtUc6oPkzKCCwoUkFCBZNFUaiLFUHgNtdvSK5X5asj6cKv7JkrU4TAVXRbsiwCPEhoZrqfPEdwRci3VAFP88v",
  "key28": "4JC2DqwvmSGjBqJCmFWEaWM5RJX8VGGp9F7zw8iehhyb9fzYBgUYaavEn8QHrkfmzhbb1rPnkeZ6MWUdkLJeoicQ",
  "key29": "3YhsbfDCuUHZJLu3cUBH6aFaZ4MNU6sZgrgkSoqWfZD4nd8ENwdSXvDmiRSfo9RuirVqtnG1a9doZaifiNiGcnUe",
  "key30": "4NaNwxLUoNhScnhWodqyXeaVUXJdJcFhDyzu7kEmcASYcv6EL1J6T2V7Yzgw1s9mUCFKiVoSGE1AtAKdrYiGFAu",
  "key31": "5bXtuPJyvvo8AGtLGck5T9W5dVTc4p9EqZ4ybSoHtjRDeV6XVCN6fUnjo8rMpNUJvLKcrz7kR1EWr4LeuNdxBEAv",
  "key32": "4dcVjRUuizzyTRepJzwAuzyq87931BX5CvLcXRvD6Zk1aqrtfdd6mUg7ib1iuG54whztAhE5kCTtkXdNkRqfgiKo",
  "key33": "4VxkETyu3QeWMRjZuakUMKJVdmLRf2nPeZQ8Vg29y3xoKwFxwwo9JhBmZioQy7k57CvBYuPbTCt7BWj6FXzo6bS7",
  "key34": "3HouJ5Uf9e1YwqvjJayRzo28znsEEbFWKrsXXrEGFiAdDCE4pMhHJFqSuU4bdJGSBXjMXm7Yy3FVhxStdSn3DwiZ",
  "key35": "3dnmMorJhuZep31SqCcVmhNtGGuY4kmYsse7Ze4kGmnC9fCskBamAPHdn3Tf3rVFQgUtEyntRH3K3cVzt8si1K9h",
  "key36": "343Dy589o5QfaHS1j2Ubanct7xPN2FbGSVrf2JwuKwM6LzkbL8uSjsQnY2csGEkVH7vxFdhgdNHMhAEWGxqADqdW",
  "key37": "4iQeqxYMxTM5PzPR9s6w9jBeHUT3jcyFYHKaQkqPm9YivwTraGy3cb183dQ3sxxUPiPgjA4TJuw4n1aEJhohFQ13",
  "key38": "5hyqkZqpkXeZExX3hg3gV3ra2HZHy5dQStYcLH9aHZUb9U9yx2w33PgLUuSKrtzL9qGsF375uCVLnsoyDuUpNU2W",
  "key39": "3bkDoVgCsa8hRzNuQ66SP8bSAQhw57tWaLPFR8D2jgRfWgc9VHyJZT4VLcSpdDpv3osu1KjkEp4M6zuW242yGynW",
  "key40": "py2NnvgmsnXRR7yqzKe3Nv8X9uJrWMZcdEvt5BWxeP1yn2RABfPQ9wb4nyQ2F7vxqvcC3aikme5CoaMk47RHseM",
  "key41": "4bvgT7Lt1csfKmH7YtJqVkmDXjw4RWVZEtSmZcRGLaLJTdzGSjBqpyTrZ3YQpEK62iCkdyXoJHeRzkJ9SZtM84F7",
  "key42": "yFjNRYXLc9Dm3N1UHKuRimGPaSXT6V1ipT429Kr8cViYDTkz49Lwd8LpAgFd2pfVxG7r9viwAfeSKtuuxd7x2bh",
  "key43": "5qw6nyTU687a3yjkbnfcwCtiUnzhJBLesHC1c6TRtidWuLeL27HtAiqBEkjWw7YDFcwuRtQ1p7rHJRwkBfUx4En1"
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
