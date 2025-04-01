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
    "WB6aiE3oQLkQSuySJYAqceZbwj1FxP8KmHUpfX8XvzBkpRSvxhaXXuqWCUgLRE5PnreFmhnRVixFh2LDxXeGVjT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i2SpHwgJNbkaqrD33a3PtMEVGio3Zw1GxCTCRUW9zWyXS7WBTKbGj347oJ4YAkDY13Z3RvyYxNUjZdshSHHoqvN",
  "key1": "5HqzxmsW4EEFnWB2JQoxw9UoSbE9qrwCz5JydYfLEpjet2Kzx1idWzsQcJnYFghmoAY5tHeQJc8ddZ8gFDGC8Vu4",
  "key2": "38prjDh45yE1hNdB6FKahxGWExhaR2ZSh6pzTakSgANs4VpFUqpUCu1FYYsdDg5fXJR63VANasToCvKt62HpRYEf",
  "key3": "FhdLmmKoAecQRBdVuS6jgfaALo7tokLdoTegV49ud2xFbGEGgob2Q1s7hB67b3K1GPQaGVrEGvnLhpck1su48AR",
  "key4": "5JnQMmuEMxm8bpDDXK1wyTTuZzHNYzjom3YQ5GPvvLaPkt8qrfVt8Jt9vuiBzuL2s8iDijrwz1gjr7Y8J4vxr9eW",
  "key5": "5SsKjeMBYsZY3A7Wg3eES595zGyScAFFeD9LBqRnxKfs2CF1z2QgYByo7uvzMHMTduVUN9zxuZTK21ysABoEzZgY",
  "key6": "2ux426AVwsqEaSPNrr9nqSgNLzQxRdq1ssWnWErV4CKiunghTM3fmWt3cmnQda774E1qQUp7m6TViXEhrTgjUKW9",
  "key7": "2XMenwLvjwqXLftTyNm56QcsY6W3hpkKyBaYecvwygEgB1GE8996c2tneDLDuzgiAHcUD3CoRve7ZjUAFyz4xfz5",
  "key8": "3oATatAspmvC3caikXbfgNaFHboykzLtiPw4LfohnMaB5rsjJpdpVZJa6AUke77X35nbLmNbGsSKAEDf4DnBbzen",
  "key9": "3L93qXuCEP9GGSixBEaaYMFxrQdZGKAdyXqKwVvmsJib1zvmkqmX8j7scPBhWtC4wZP1ECRpiXJ5i1aPFLY36HMu",
  "key10": "55YEXWPvJhDQAWvP5Z7Do8VfFCKrZc1mCzvxiQxAShqAkCKBQJrjCFcWbGEH4KCQbC5tjY6LxBcPX8xeEdjVKW9F",
  "key11": "4UswVkhbP1zp4t2taiHvamhn2thLtLwcJU4UJt4Nmw41quFgT2ZsdHVFCyzHTTtx7o7NYx1YdbzE6zHWbde9qHdg",
  "key12": "4sfesaAZaSkHHr7P1k5W8mVEULBbDZ2xBqzcbQ8xRs7QDMBVrmKuy4askVPHmcRoTBQs1gukxDirLGVrre2auXDB",
  "key13": "YfBnq19dUv5NuDgaZYqmkRRaNZAT88rGRKwkxR4UobEMwv1x9e7mR5K4n6NpCiATV8FkPGSn2oHHu7EuSLZkx3a",
  "key14": "2Zx1bxJhaHV5AZDniuPdhGd7qxzq8GYFhRJxw4xthGctLPebtLLsGsxf1pzjs7FwNxm4MZehpC4PxQy21WL1Dfu",
  "key15": "62oeUKfggijkMpuvguBVtqGocFMKUQYM3jaL6y8xWYguWemRsWuexyVwTxA2RBsLDLxuJ4BqM2QBnvFMcSLb7YTB",
  "key16": "5B4bksG2cz7TUVbuS8tYwWA4Hbu8WNg273QBBwSg1jT5AwR92KeEkVLtr3uGCAXh6AV7ar9SyeoUUxrSR62Zojp9",
  "key17": "5pPgwFFFxEcTeGpwg5YyqUmqjuXKBa6i2n85KXpU3rZNja3fJkzmwWDm3Z5bggWdDbqmYXn5K7CMeXxz9Dz9rRsD",
  "key18": "54VWvLCAZQLjKXfF3hEKK8WUAenGqPTfec471prahkMn5KnngQzVHjMDWPo5MEm1KXuR9Eew5UD4DmzqBhNEoW6y",
  "key19": "2jnTLL95keM8UjzSoQtH7euxw1LCQ9cpW5ZChjzsHBWvySZUkvdd665YC7jXYqapTGSTD8Y9S5rPmwwuzzBpgLU2",
  "key20": "zccTka7Vnk8Crw1RKgAkWA7y8KAr4JV5Cr6twfzkW27i9GVuQ4DJ3ecmYDwmCiwA9DtpTSMszaVNncoq7udga8D",
  "key21": "4kNz3pm7BhDUfztcqn4sfYtZeexEuz1DQ5QmWYDAVZfeiqDJBAvxMpzVRtUZM1on55CSLTbhQ7N3ePcqhY9hPmmj",
  "key22": "41ZVQsJ8mgxp3tnNbLXya8r7rstvyB4FgMmC8AMGjHwL55MoCrmMtSmLX5HvaRtdCC1nwWmkLCWFhatMSJhByNr1",
  "key23": "4UWoLroSjgBc46DxET3dJdPTX52q7QnXktAYyuNFmmkAcAMqUjtdDQGMPuMnr6Ae4NS7AMyguFqjMwTkZPCj77bm",
  "key24": "3F8w1WrdfDfPmVsgozM9kzM9g3Q2k9cVDar92xUbXp6gMEH8cnDmQ3C1fC5u77qp2AmeoMv3X6SqkxCwJRstfV9u",
  "key25": "4Ta3NoHirpPW2fBjkBSX92gzf9uadAkrdzFLnrGsJ2Esn4px32TZ8fCUVJ5fjgtyBL2vJyq1gEsVEZQrxyGtmD2N",
  "key26": "2PPAhTogy5fbU47Z5idVRruruBn5zpwNwXi36mpT9RUzfDBvUNyXWnJPu5YWUKPZP355BTDxzMaZLizifaiBsXP7",
  "key27": "KodygaCivxJVJR2K5ikSD52vgxtycx2o5PQxS8EkPSTGuWRRTYvzCM93JJxME9QESUH9LB3vGnGEenR6Gu5RGFw",
  "key28": "NidijyfSFAmn8CQLWCSewkoxBd1DaBLf8Bt1fp9Yxoz5UjGuz1Bq233X8ka8HAJpxVCP1aarqBDawNXzPe2UYUx",
  "key29": "2i1G97x9BbyUqR1JcXXXK6E3XGPkrKeXTNyZgsCJXeV4yjuVkRo8A3YVdFiBgsDTRCC7iZqVizaGrdeqgarAm5Wj",
  "key30": "45QDFacZ93YwzgQrDSp1bd9z1AxgrN2rcFX79uPpEhDK4ayaRvo1SSg4Rf7cUnbVUiQY5vJHLJyYtV3RwgCqXbhy",
  "key31": "672Riew2RQDcKUDUGFLS17ut2q7rrR7dNozANsjHo4YktMdTtPKKjXjGRnW3zZU48hwtktSQsYYnpv4EcoBUfU3",
  "key32": "5p3SK2UpcQVmfBGYEA9WFsLfZPnksNnAdUHG1ZAJLsuFYiaKWVW1wQHrVmk1meozfoVQ5VvxnTHCM5TtHM6SZRrD",
  "key33": "51CTuJfXrbRKfeMP2xHkfTMRyP16KwPeeikbnFeHSkxS3a44H3F2Khj5HGkRXqH1cXjfMcJBvg7sEZSYFvqutkWJ",
  "key34": "55ZeAB38z1wR97jKYsjC5V5xmJDGD7rDVzKshAzMjx4dTpuAwBdi6hJQAkUxF87B8EYjX6uNN8Zk3Ygnj1B6KY7A",
  "key35": "jVv5QdJj763WxsHuiFsSoKfyTktuLcXZwM6B1wnc1mNToewS41iz7W95dbNZk854yJZNEECD8fkz66RxJcTczS5",
  "key36": "2h9XXUR9FYHAvVz8u1zxnund22mpVQv73ve4U7RA9kjeoZBcMNQ5c7JWQ6rspPyHuafwJoXfCKdb5zbvzWbQAwCD",
  "key37": "22KZUZH9FHpjYbd1uYupH6w579CFdimSuzjDMA3kvsbPvridzckCA7JQWjPAo5xeHHEwMRKXxjroJKYunYFBpjmZ",
  "key38": "39y1H7SJycSNVxdNMeWB7yGnj5h798NB2uQ4uFLmdZiF4D2ziq7DRzTwxjoR794mJm1NtpjnsA59FfM14XevBrfQ",
  "key39": "w2vUNH8MCzZyEx9qDcsYtKgC7jMMbqXqgwrtFNAuRnQnZ4hph9ns6w4WE9LpWY4P6wWcuYNTWCRBDgqqsmSgn8n",
  "key40": "2oHscCYqg8tTFfHKKPutu3c9u8PU3iCvUSQRBxERk5ShLbT7jao2QbVjHJCcXjT9pBmmVvtHEZbWaeMyYKpzJaAD",
  "key41": "4iPZ15Z7tFa8Wo1PCdAvmjGR1DiAHt9QJG7ohbgqoP9kNUDPiCnuHQWNfbvUZ5PMdsuw3Tbs1VyH1rF4qzmjtP94",
  "key42": "3dhahoLRCPN2rfLYWHXij2U48HmCZDEnKkXfBE5mmgsfR9g7sKZWafWxtXWGSh2qyng7mUbMEuSPxzWKzWvS37jJ",
  "key43": "3kSXWWebXZMWVLGrNJhSAuSUP9aeyQgQMhVJCkDhNQ68Pswfk8RXPz2ZRWbYxB5uS418tJZ8mT4rzNb3yL1MYqzU",
  "key44": "5LWzc6u7EmgohfHXP91R7DftrWhxasRQ7mxBaSHWU8DG4ACBTv8p5o6H8fTHz6CqwnEC8AThoS73dEtPtGvsCopa",
  "key45": "5KrASzz4iYjhVzLyJrcvcspGw37Bq7GgsjSj2ReZSBzQVDyqKUoyGNsuwfpyHWZbAHQJw53evg7z349xFcxFYEdF"
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
