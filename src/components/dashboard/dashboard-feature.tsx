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
    "5wKZf856i1Gaz9GwnkFzvazE3vyeKjimX9VEjW4trS2DoWqorQXBTbpBnQwdYoGPUwaqFJox2SVxjCSccKoU5V1m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "w1Bbbd6FdnrGhHyHrdzGBQn7KK4AbgbQwMdEkuGpWu7vewuaVno4QYy6WzyV6Ess7XEgRuWQi9qYcrHvg9fBmae",
  "key1": "3y1n1zrPqz6AtVRJrEiPjxiqLUTFnfMmSSSKQpnYjjMh5GYMQSDG4eURwQwuCjHBx1NmQXgcia5vcnBGsYANsFAd",
  "key2": "5hqL12eSbouWVJebtcCCcZ1T6nakifeiZgqcfkYDdLLMtQCkhZHC9rG17xDRyJvNy4oJyVhCbvHkQKVu2TKARes3",
  "key3": "641jE79uQAXSFJsv7UeCSn1g88smH64JehyHRzijVuyaedMwUwabq2XpRCxoawztG8tmoz7Q7TKHJJqcEUpguahq",
  "key4": "3Zfzd3K5qieSmfMup8N18xxQAhu6ZDeutU4JUKcNHnfb1A3jNVRC6fCZVFX35FKU788NkPbKnCfxVnzA6tNZT2Ec",
  "key5": "3bAMcLu4ZusyKErcPF9ogsu1JmEhgk4sS998XxpwHnv792CTWDqVDw3Nt1UCumvhdS3NaPAMFt15ZiYPs7UWPcjF",
  "key6": "2bA8vAuDvZAxNvAsSmm43taumyVVqFXBVG82tiAvfJLaq8DdP5DE18QTNu1bXi6n5kWkuYtN2TTXEwy14Fz4zTE",
  "key7": "3Y6dyRVXJyQ1X6UspXGhGmhNom3bhTbrh9b67XGHsrYjpcfqXatZP9H5EvbxskNRqJHrrxcGtrZ4TxwMtWLdU6YW",
  "key8": "5Y3RR3BGnEQG5nSLr34Ezeysr3kpJ3TZsSmcty9gjp2XEZyWjQRsdMaio2obhy3Hqi34Yi8qRFxPqQicRwq2XHmV",
  "key9": "4LQNetNAPqUPbY1Neq7GXAbfqFi3n5qRJVSyF4vCNWBMJggA6wJCsC2LgwSo4Aw2trjxjvFtrKHTGCQb6U8QQXw7",
  "key10": "5M2AyCfSFyZ73atUCWRJHX2chow72tTPmMY7814MMdv2kCAJiVgcd4s4rN61NNUuPCKpLtddSu7NMyi5fwc5EPap",
  "key11": "2nusTa2eWF7MBc59KmuYwvvRw8Zv3EzLrKC4ahrtNYm13vYEieTRSYsxr3Dyavk4MFtoUYgCiBfYc7c5hgAJnL8Q",
  "key12": "56zfLnFAK1MJ9LyfDcbzaJqxM4EwBhd4ABiDxJeaDTuFwrGyQ7LiUUuhq6dypBfm2U2kvqNLxC4UycG5KtfBkrv7",
  "key13": "4ttj4uSgHBGi53cjbVxNjo4QJZQZZto2QcsffVdFgx8PHFKEEJFEQb4yefF2CgD9btzhLqfWmCPYf9xWe5riqj36",
  "key14": "4GvXS57P4PAM2AkAfymjT6WbVJ9QG7u8hEMFQcdrtC7VjgbgYDb2HFiLzEfYrtxa61wQaCdu9TX4u29BokFHVx9S",
  "key15": "48Vj7MhqMMT2q3muWvX8UivS3GncHJve76mN9psHm1RePcErKRAqsRznXB8GeawGPXxXvWvnwy2UCAhZ56WVqbj4",
  "key16": "5AU3X6Bij2nRcCdYpHkAPU6DfLsrqeyKqxeyhszyUALSUT2uXLRR5wyZhMvrcz4dt1Wrgy7AQ1ngQbvtEjakvLbh",
  "key17": "28Z7CqXf7R2tXShV3Ld9fiCa9fAkxhH5q2At7zMVhzJERV7W9FfUd4AzQw27RySQJNB2BhgLktpG6i74PLVqSuHf",
  "key18": "2yTLsuSU9VhGb57WPJF5YiUgLvTu3bzZdkEhtJQcEpJ2eZp8EUvekvVqK2MiGcW4FoBYcFfH9gyUMWPGqiJipAFV",
  "key19": "w4HFYKzJnCQArue945LvNz6dD3eYNZaNVG38adXHK4bGM5C8GmMdQ5GLrzLMX8FmiYAQKUdpD6NeaNdtMjyFai1",
  "key20": "57ozn67VCiVKAeczCoHfQ2s6Xfq8nxRDGT69Fmzd3VgrgAQHp2HpqxRbXZZ86qmVzZeBnNZPjtgS5aX116oJLrwb",
  "key21": "4vMx2HeiWysmevScUbLTdFA23S8pd5zr4GM5ohzSqGJDuCWiK12N6kGt3JGcavyXbwSMPAQDbN7qYGK2wxKTMhfM",
  "key22": "3YNBX8quLpfBeV8saYbkuCokUZtVxeS5anMHPpF8CCDScEK8QZxXeF482ST8wE3sGxhwMyxx9kHfbJbqJEWQ7nZL",
  "key23": "5HWwhsRY3kpt4CijSsuvm7To9Rxmh2E4AUn6d3nHytQRLz5DGh4hx8JCda1MaB4c6JPn1MaawzW3AWH9uUTz3oto",
  "key24": "2RLKYGKWBQQxTM6BFX9KVfGW8QScFmNYS48SnHzXyakQVzrfKewnkQ8TniiwcFzkpCuSkJpBx5eCq1R8cUjGueqA",
  "key25": "3bedTT33xRYGp25S3otUC6t28nyuvZJkGPoUyx6DsWyKjBCqp6exodVrcovpnuS3P19dDVqvbMqkwKG7Kw9PQy5w",
  "key26": "4MsyWQEaubUso1rRBrbY3jNgU8hYnRVQbNH2yM4tVDNuqQUroQ1hv38TguUhqE8jqGqTzFzXsKdHKL9RnoT4aPxK",
  "key27": "31tHo57BXMHRqgd62fYbduE3YDTGB5saFzH7tB54eo2WrTtbFTXERkKPCjn8Fdg9pAL7SLvvXCNAEnkpTXfXcZCk",
  "key28": "345iBoHU99R9KcFmywpnNmndoEvczC6mJBoh3EviQrjLBU9qFhyaswbR2N7AHTPP5oUsiUuWJVnKz1F87bSwZjev",
  "key29": "5ovxdGjVUBm9mRDfMtSHrba9mtjVsx788HErJhZCqcaPeZZiWjWb5EX5B5bVRze4bm4MwxHZbnx62RUg3dsg55Hd",
  "key30": "5NAtoCeU9da5NHHbQ4qgwoEBiqgkikWCUYvc1YDvvrAuTHj9nfuRNSwh2kkg7X84c9wAVcgAk8d9gNZUNshns9wq",
  "key31": "4kpaF8ygQQZqWXYAKLiPyDnU8E6Y8wToWSEP6AoGqb9NDZsvgy8RoVS9TSPvBofL5hjakszM1EecjvSzHH4DqyJV",
  "key32": "3M6vKrKnWsCMcD2DzcrBNGMNffy1njiwGGP2NJWNsJSmgDLHFpUqVu2fXy5tH1E6TrvBK4jjyar5XmrgV1ZhZg4d",
  "key33": "3KtM1wKKXwXw1HENNfxWLFSRaaYxq3w2iq96QSk9fwFhZ6x6DmSNFNZ6DyfPEcw545t2LnhM7qTEhrEQ2jKTDZo",
  "key34": "2z3hrAhyja9aFR5UeoSd35xSdEfq2BAUPisTXtAg5svwaT3EC72Mat4aBLxn1jphsokPxAkFEaN9LrAat3mwLqmR",
  "key35": "2MKCeYR8PjmV6k2crw3vS134apqM4egQPeQ6fkuxv9N9Tk7bh1uMVjQeZvjXe7TgEwb3PxF8Hxb26Rqiha5f6hid",
  "key36": "51UnBkGArrgi6gv89nn4hMoQPXu6LuRYqEU4NKeoebf7s3CQ8Q27camQLBo53AL1kjzcCoHRaMRw9Zou92K27B8c",
  "key37": "59uJFsfcBvbBiDNa7sYdEGRLSSjUB81p9LpBBbrnY8FLqokJVoU6BFrQpS1RiEtZ6FRdgfGntsKD5PWs9uRjrZri",
  "key38": "eGeDfguv8vu6kwGxZJzeYeZKJ58WLFyYWJmxRgE42T2YDoxdPGxRstoVSWpMmFu4j4sCgY5ZtqSu7sXFMRhPYKu",
  "key39": "3BCfxfcpGbx8nuwN2Zfq6XuVpfzofvCZP1phFvLvWyiCuRdrE5Pz2Ym7ARWmmDrU9aPqXD1uWbdwKK8YCBoMoP8a",
  "key40": "4Qt5sbCh4qHyLvASTVKHgRq1L6sFk8iBMWdnBoPMc1LxpwVSYxsT9NRxp4kHLiPpJCzvES12CfKtUhhj65iLbrKg",
  "key41": "sYYz2uhmDggEEftXwZJgFpfh2cCPr5YcBUYP75XNxovWXoXNRhdvUCpNPQEiszaPnCQJER52gQiVwEpcTDrzkbh"
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
