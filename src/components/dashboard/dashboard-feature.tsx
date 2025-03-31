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
    "2vgZwNtcojECQ2GdmTyFWeGmG8DYPb29MWaqebWcKHxpbBS5tnyvXF7xLuwPHW2p7WcvvrzC4eHhzULW3oVvRiww"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZZMGgChX3jB35oSChFcgdjh8mpMGxmHdNHbqentvirXvAXgKy7iksiPq2k9MQsFWVHhABPNhmbNyfcX3zFsYaE1",
  "key1": "3WPHJBcPQmpaRbdwbJSmHGmiDhhHVpoT6HbphdJR8qpf7aj4X6QkLE1r1ceEBFYZkQCVgeMbzKYyxrjY915o363g",
  "key2": "5wdFvwtn1p7PDEhgjbUXhEUHvFUW3NTgsuKELu273zGfubsn7EbbcSBmm3s6WMY2sQu88PNiUN4GQYTjVzkzj8AR",
  "key3": "3anHLfhvMESXLmcfJMftSymG5TM9ExAKhbb8AUbkBfpW9vWQmM9Fr5F5yk2z53vhLCMq17WwhpmHwaniK1ESQRy2",
  "key4": "38jzUHJEPTYeuttVY9GpmwEDeehewPyWi5EZDr44rWZLZtGQQsHUJ2vzPMLBoysvUuYV2NyGXaur8KsnFD9TMgf8",
  "key5": "4aQwURXX6Jz9MHH81jd26GP4GLPcM9hEN8JDaQ6m29JAYRaAMNhtkV8Mq8YF5vYQUvc5TYTKMBBn7X3Z4RQEjQVE",
  "key6": "2aYAzU2aP2d2K4t9oX2gTKXZHzNm1G7tjzBTyHFKE4zHvYCj6PGNnxjKNBCiT2NR3itUMArPgMXaCzFPfdR283GG",
  "key7": "5DRzFSXzRHnEH4M9bHqM4Sh1SHEYLWnBy8zbEjn7ttoACapubbFsyxMX46tTwpTqErLKjeaiMdnQJCZfTvt8SBN7",
  "key8": "4XkjHcjeMYktbXNAsrDPu2Mxs2b7kALQRRvUe8qdmFSUuadyQPASHhcfGYabZi8e5SXCmtEhbpagrFCksnn3XJrY",
  "key9": "4k97ugupwMH1xqS6T4p3Qgcq1mzz6xvhq2NYRVPMiMv1Z4d1KzUg7Xt5Ryo5Gim7tPhhna7jF5faf5jdenFbAuHb",
  "key10": "4bbjrThMn14K56AcQZ1CgiaV6QzWVFYca9TaoUQEQo8wZdCD46sMA6nEaLYQ6sRSZLZUuju2rcPSRYVuYC9zGQiv",
  "key11": "2ge5SCJYtXJa1yhqkTyWU9f5hLUSDYG3thnEBqyZHLn5tGgZaYGAxFSunJe3D89L7pXCaQJ6vE9caijwmezVDD8H",
  "key12": "5hJFSgsHvFyJvx8rFVmtRxjoJeWgw7x8eG7eyNTwVESUtoxQQj2N9xpV7gDDDq1ZKVH4rmghfcJZkbxhYKddtYsz",
  "key13": "2XXKzV9qnpwUksmLR9beWaHTA3d6mREPPiVHHK6XWmtEKVaw5kpgNq61YxJqT5tSVCVou92f7pxFMahtuTvYRemy",
  "key14": "42u2b99J9ADuRRFKsG5Edwg7fHk3NFekL8QLU5dwUxd8qQZ43Myhvta7obpxi8Ymn1cBuNV9byf2s96tMApGE5SN",
  "key15": "5TrJxyJXURpaHrVLE37V7bzFEmkfPgSpTWSCemHxp11jUZZRvBxT2rhJcZXEA5QPfk6WMXNorQR6UXHFkoD7Sv7d",
  "key16": "2MSd1VEAnqA2hmvNLyyhWLcVMhnHsAaWJjQ79SPG4XLEvWVYoRcA58L5UXgL1Qtmvo2UfjjE4vs4bfcDx92dikks",
  "key17": "5MGS36swSKVbcpMFatzX7MfpC7UkrKRJKH3jfcDfey9uLXbKsZyRSXfrdfhcZBj1FATUsr1292V2sw2oVYDH6Mnm",
  "key18": "333PJx64CDvBnrrdXDCit5zwgWJzB6iJuYQmQvMQF4gw5wUtUjsUmPzp9zUYRGcCaARpmDD4qdVWHcBaqVopNUR7",
  "key19": "4qdS8vxtEY4NH6Unqz9ikr5ShpYeViiLFShBuKJHqfCnczKG4KpSUnztPD1LzzZbxN9Qd6Yw5SEKms2a4uKC3dXM",
  "key20": "4W2b6oKyfLGDCGmVDdUV8HP88uhojjY7fksM1xvUep3Jb7U3PvMDN2YLmaNyY3YCYj2v7DW2x7P7vvMrpj15BLfs",
  "key21": "4Nrt93R6Wz7t88s4egotMaYWQQXbWr1hUkAW5TtD9J3PUT8xBGCkGUXPcF3VmPNWK5wXFxNCrgqJchHvQqjJZZFx",
  "key22": "2NfuHWME6sBae6WN9qFJCYMKUzVGbaEpfJSHvDwFRpRSMg8pYdzaQKttqJYP2ah6Abhi4YiwquUXjSDQvneYcH6t",
  "key23": "3yXhynux6i3RxSLpgxNxnxLMWwPE1vcRZrvBgtByFLivR2Q2E4yxfrfo32aucCTSuvovWk3vj9Rbo5W2j176aCYe",
  "key24": "3U63bCLUSdxXS6WzPCwHfDkw2AnMrX9LnDFyLe7iJHpS83ekU4b6UBePmJjv2dNkRnVSU6Rxs2jSRpC4ziLRjQsX",
  "key25": "Nz5vk8M9DtdJhe3UVhc2PeJuEkiiyepKySpM4wsgZto2d3LgUaYEGBTAQLWrPz9Uu16zK5LUc4JZDATrP7HH3o7",
  "key26": "4h9RDHdcNe4ujWdKxVouAH3mq1pY3CyEXdCxH3DU8n5NTdMMAWspnicuJucnNTrisUC698kkJ6SwGnYEzn35BoP5",
  "key27": "3AbyWEzAY5JwW7v5ypauvtEPatstYotKv2rbkzoRrRXyrQgdLimds1xu3pBcadkm3SaJP4H4n77PA2Y5caK1bU4B",
  "key28": "xk4qjDVmYWoCRtN5RXAmDSK6khxCvDYM6s76ihE8EgrAQxcBtbfbbtER1miUMSozqk85ZjfKepnLqhVzsWSdqD5",
  "key29": "59CCn3PxkTAJzw5qw2pgMbc8xMfRBYFmJRMy1URFLscz36vrwWHcaYXUqBjAL1U2awLBW3WRZXFfjhJBcJqDKaDm",
  "key30": "5qMTVFoA3WjfstbHeFLEcEXUjRVUxutEBofdGNPuwgmVeZekWMiDf2XTebazE5jEkwsv3P7x6dT6cVUk5bor5ALD",
  "key31": "2ugLPXHf4yAomX54ZwhtyG3SChcbgahbMq2ftCBQeeRbdN19DfkHJiyfL19Xq6PyShgk4JgrsDgFg77mVfzhZ1jD",
  "key32": "5ZbYhNd1NuSwKqCevkUwqTHFxoReZWuESy3f2HbdeQk4tUeFfdtm6Tsa8oBkRuTkUK18hik4taAHXkE1BZDbXAN9",
  "key33": "GWnYTTpxMJ5nJfYVJ4vyb1PDTFh1fBxWRrFXx4kKPke6NfYBVxWpp7Zy3vKurWotdFjmPRAJTH6YoBqJfNae5jJ",
  "key34": "3KHD51RF6cAF8zcNdHmTftzLjRo88jgPHXHTDEhNfJ97pKg5N5Znb2pwmWPxDugQ6n8UivK6EzvEp7e2dcFKSJB7",
  "key35": "ethVZWFyvcgn6iKcrhxDi9ZvoxUc4ATTFnaX3JLN8bge1uh6KyqNKk72joXxopPaEPM6STzn2rSMDfnmYGXTQA3",
  "key36": "4441JCVt99YN53CUMA3AkQtvvJwUywZcD8wYR9cMCk83ncpSrE76iefLuTFvoT1cCTbEgLuH8zetzS7xnLRyYuUd",
  "key37": "wPVEWM65SuEm79ZbijS7U76ikpVocYX7aDHbWpgGMBMQ179fUsXyk8KLVJdD3P4TA2mhUTRA6cUB3Nq4zhTqzFf",
  "key38": "2uFtqm4nM6urQPU1Y4iZLZfXaGVNMusiEUKEbvKMV2JPeiGBf9qpcHNjaovXyYK2GDSCGbSBqryfDiY2RSuQHvdu",
  "key39": "3cY7WPdEG5h95oXweh5PXXnvmG7cRZ6dpC5n9sEBBBcBXyxz64UN7amQztwdSnEjg2X5JV6fZ6dPkvh2Qz4ej9kS",
  "key40": "5xRgty7dEdmXN1ig6Szby3pgbshs6F95kbnCeF4fnneqsz9334uY6uz2RVhLoFFn257ovXqiXrkuU9g4YSn54Th2",
  "key41": "3khi2vXSG3CUxHt4SiBqR7sbapYxapQYmrS7es57CD98VKFuaWBiFD6t1GUnAUqvwe1jYY2LtZgy5wP9fj6GPKSa",
  "key42": "MRKaprc3mqP6MC7cQmRuhzQjYFjKF614bYxDdFZbpnFSPkN37TKsPPTJFKPHcStgvCMMxBHnXWXZzf1FwAkZRS8",
  "key43": "2xpqamuMjYUDFXjDDiowVakQwGr1RWKtJZJ2Y95Nvpd8pm1gFA5EFUPN7mddUispSccwELybqrtZEsJkH91LaH9M",
  "key44": "5CZkPbyYTyijzkMqtjQfvpmoWSeTXwFEqor8nrRTKv5e8zVq8kYxQnCGJsZpBHhjhPiZJ5hJrSekbryU9hwPyPCB",
  "key45": "4HVzeSJJnngMvFTLGC9EBKVtBr3xAAX1Mmq5hu8rN57dB88CKGhXz91iSWkCNNN2AeYZT9ST4uytdw5JMoo2MUdp",
  "key46": "PTAbJ1UntxkpKe7QJdE8nCQBzbCLVL79mHumsc6SU14stytHyGVeapiBUZybgNEqi3e41MQdQthBMsEc72mA1ut"
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
