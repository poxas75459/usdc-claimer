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
    "2C2RJ4qnBbe1krZBQ2iK6eRzyAgbx3z4pyVxsKoU5PK36LVRpQhZNCBrrysEFNiawUNZ2QbGsTBgSEqK5gGnWvj2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ozZKASJSR6gEVBTHLPoK3Qk9EkviGisEfssJZhwnDe7SFTeCp7Agnj4XhhgQhoTZrgvjs7v5eX8nRTrsyRhd88S",
  "key1": "uxAPLZPKZYvcGdEWHtuHfzaiMQQNsLfio7XX6QFXP38EJGvbfyAt8Unk3ZFMEHGi8CMBG7E7kBscGXLcjAzeaHz",
  "key2": "3MJiTdRqU8FuAx4PdK5VpoRr5AfLFsr2RvLEg11fi7fLymZ5oMcqZYkWfE5bEjL1szMuSLeCPKLayk11kUYaokJh",
  "key3": "531EaxpEv3k47KQF8AvWMKbftwvs1iS528TqjwBksVdjSfFHiarkWsaxzvhQKM1NizCFJBWZJu5TBiWq9gGpqThT",
  "key4": "5f2C1opyS3r6F4mepTJ6RTsUPpEkStjP7vjxeKggm63A5CVjMNpdw9nwZg4qtfVX37BiPBJedpWsUwjncCD1iYfW",
  "key5": "28VSCUNGnVHNoCLghtekosZ7EbmqyVEqG7vdKyz72nmT2rPnFjqUKMVAHXHi69ZXkBPnvbtSxNNUUW3p3PxtZ6Ub",
  "key6": "5epGyeUEm9kg9B2TyZZEtMxgtiEQJirRfjT1e8uZ5pTPZHB77JZSTdAXGRZd63LNWcLXiop4kYYcq1EHeX79vAd8",
  "key7": "4nypSjJFuyqThGQujRnmcBkCnqvwQDHtGEwoEb2UGXmA1dRwkVw4GRyf9gyMfubyEzaqpG14TtZWzi8PmkK8hP2v",
  "key8": "4uQNznYpPiTfXKYUx73qkfDgNp64kpHuQ1DH4Mx2DSTtnRtfaErDPQfTSNdPJK1xPLXeQUmk7nBvVTdT8qiVixuR",
  "key9": "3RMc1NJMJwU5xGF7ub8Wbbk3985ebEs4RdeucMn4iJhDCtFWcj4CunetCjspjVzAd4CVxyNGJJYrxP2Ku8adpRTp",
  "key10": "62JV9cG97FM2kTRjSkwdqs8iWmLsEwDUUrwFcg7Lu75zZENjgaXXKVwQeA6QKFpc8aqkZ4k2Nf8iks8D1HixKmB8",
  "key11": "3ZSdFcpphioDzhsj47U48ynSBDuDLEH9ibSRtfipZfsBjAJu4je3WCbBqDRwUXrLroXyXaJG4i9F33uf3YKnuDhC",
  "key12": "4vMZr3xsv96hW798rjkV3NyAWcQ3yk2U95maogBGb6BKVJFuLLzpCfiDH5R9Q8FsnCPThLQW6NdWFhfa7bybyQuQ",
  "key13": "FoRCP2SQk12YrQ3txXTGYe6Ud7KbszqLThFjhoDSnqrSBRBA8mEc4Ub9ZHdUgBQbK58c8ecULwDzJtUqLXAAaVy",
  "key14": "2GsEMBNQ4pZiYQc1eCNzpv5FuKz8nmAxD4DvsmuMEAYywf1AfBAfwjcayE25trquqpGm6iRp7WFDKcSCM2p21wr3",
  "key15": "3WWqfmhw4V53LzsREn4STRGH4yecJveaEF2QCaqMSpUZ9r6tUKWch23zfd6cUANUAR9T6i8P4UxqGBPf7F2FRP6w",
  "key16": "33AWjyspDwp4b4veYArVXiNmC8vk8c2X4Ce51zdemN2QgqLBxY2yyvpqSJSQcmb1neuTxkrSg3X4LcJSnL4cqDg",
  "key17": "5SUKkuKs19RWUiGTQucBxqqvhXBmCaLzpyaJBN6VyerVE7eECUYERyxQiRyRgixExXK1haJhBUg7pUVuSne1Gf6z",
  "key18": "4ywm566srgzoxYhqhBC1qiYsw3fDiGyC7Bn5M3vw4echzhEeCfxEgwHBcWbHms4rbo5SV4m5mP1SfN4Qh68u1J5u",
  "key19": "5koQY5L1sH4fHgMYzNLshTAS9vKE5tB49n2Rdug7pURtnGASwRRHiNEuVSFtPSo8TJJHWVJdWkn5hqVtH7w1iAtK",
  "key20": "2BzCWQxBgaMSZRQfynqqPFenPTpyRCRjHxF7EDtah3wsWp7NgVLdFgpvrpDr2pWPV1UqVDUcPT289zqrNcxo9dzy",
  "key21": "3mAe4L59AyX1HqtUWEJ69zh7bVKBpDrtYAxeEZTwTvDLStVotusyy1vRwJ6ZKJg6p5ZFuVwDrj71ABBMrMLQGmA",
  "key22": "3Jw8btGebcnFHtPMsxuc7CP245rhEchg932jgcVo3DjapMHi5xWhjxi26yqAqAzvaHy7uE6pzATMQE5sv4ZYc9eW",
  "key23": "3MPEpM5wrfqRf2scyUtovMqNhmdBJXiBgQHA47JEf3uTp5JMmxqrnJHyX6D2ojLyEeJYRuYwtV6WJqJKuiPwPyQe",
  "key24": "8tw7tkfoJM6uQWLke5pEBKZXQvjFLHAr47FsRML424i8xHp59w3VnkR5MooqvSDB1MXuYAZXuzwbtZ2vVMC4bT1",
  "key25": "3otwxaeah2UViM8Xv6a3RwzVsCTYURG11brgMmJJpPL6BsgaUmVVfJ1XYYZei4kdnwJ8QxgJ2iesg4upN8hBEKv3",
  "key26": "4TVVfRsiZdmmR8KPj4TFG5yT9Eie3QPWdnrbp3YLZ6G749oZ3NyFjR5F1Tu3Kw2WjojW2YrAHugXQxBURFkefGht",
  "key27": "2g6RCNPURUCCo33qRobi5ZJFr6u6Uj1QtvgtzXxYkczsWCa5EgbZZi3AeJKPxfkxQhMbgV4BPk15cFPUfZsskvX4",
  "key28": "4W7czhvegeXky3EdAkbNgPtDFj856k6bZB1ALkt1LKZoD7WFw7r8n8qyKmDxQbFbcVxAZKZMb7NX2uvCmcQaR7uF",
  "key29": "5nmgFWt31VCprGamdtUyWMwjms9ydS6X3wo8snpxpjJyfXif78iXHwu18FdLfj6YfLp2rfqmj7WZodmj7g2QeryE",
  "key30": "4NK4JDcoYMh1B7kkRTgDaAeFq1rPa8yfZG9svN3VQCSjA5x4Zo34at8q5GSrDku3T5jmBXHkRh1BTs2xae9Uyjsg",
  "key31": "3i3bS5E6ciR3R1j6Mer87eyCC6rgVtusJhV5vhfg6FMDLFdU61adNSMk9CmFNWEna5CajU2WmPkQJviucFH4bhLh"
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
