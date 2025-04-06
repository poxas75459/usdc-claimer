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
    "5AE4udhDfQ7NaYxn3A4d75YyouGdP6N5APt7xFKW3upiHgLvkaSv8KcUUQegxfwo6DvKrjc4ezGyQ6WGspGcArTc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41ZH5KfWc7qgr8rGzc5YVjmA7VfwwkA8ZCusqcuj52Qm7vswmbnZG2NSCNp5bCC26T5Hf1u1QNHsfGkagcSc35ZS",
  "key1": "39HuG87FTpx69ZJQofSPa4dZoCCQiJ6Xd2qSzSawyz5wfMBB3x9fhZ9p8bE1LhcSDoscE5FSY54PgdfoEmDr3268",
  "key2": "2u3TsxM5Jw6tagEQdVFBFvK678BWggHUxTmDLAzoYnsTe9zUocdffMzbZRiZSP3DMQQog7WBP8yVbxbftMZRZzPB",
  "key3": "3KrVnS1YGcptjLmeSwvwxYfrJL4o34SQKj6o4BgtLXpxqaKV2CpN5VRVsx13Mrjhg7JKKdDU7CgSKgf8ud3Mivuk",
  "key4": "3Ez1ZV7DKH8jQXYfHySCkL1wUcMHQkmuNi97Pw5d4gEokuoUZRvtC64atuZiJ1c3Y1ykToDLLkSKcX9zpG2svKkq",
  "key5": "3CaCpM9ejHgnLUDRKcUxqR2grTZj4fKQ5q3gK6ABDk8eM2GDBRNco4exw6qZ5HwA5wwYfgpb3gbsySJMZPAJtzFh",
  "key6": "228FVLiUcnrRoapGGdquTZYqH4EJJTzf419tzgyvXouNuf7vxehdnwH6bQvDWRuPTiM3fyZULq9t7y5qrab7zvH4",
  "key7": "5sobyPh1V7oGqUV7bmY4AQqNo4e1SH6DiLyyepRQbTAxi8sMS7RDuft65B5C7aje67rv64RC5qpzmVqVQ2EEn92V",
  "key8": "3t3TXHB1EWry6KChtsUa7dVJfgEuiXUnnoFQyycQ4uEpFi9AMxCuTdBDGVrHBoqzsXh2i752GCSwZogDtP3WQkyQ",
  "key9": "62uUTNizBpPKFWqnBe5Zhnc3JpyYXFsVStner3A1iT2YqjTL2gG5GNSvUBcnvGc2x43XJdQb8EEvurigp9EEgrR7",
  "key10": "65hHi1zGYkyc22zVPJ4pSxbBM1ouhDG6iPChpW1VZmvDihMN4ZNJBFaM6Jhvxo1ddKgKaP7jNkDmJ3oFqg7hP48y",
  "key11": "5q2VK2f5WK3n11ZWNUqLwPpXmuPMvS8RhvWnmkAhVefZJP1VeKsHHZShhhwmnqShvYuPDy6oA2zuQsPMRNrHCzRz",
  "key12": "3DnFr7mC9HxehRuX5aRYV1gDdxvkqepJo1DNbFTQ8QAvhv2NadkteLsA23yMSAQKAqBujHFeD4oxMxV9S3GJWDm3",
  "key13": "7kfSkrK2a8DvqvscSa1qeKGNjVWguq1WJKyWSNNf9Q3rV6xSrRdn5tbtAjCiuQqBM47F3vSrxerP2Do72yGdRHU",
  "key14": "5pCjNCM6QuEYMrSwerqjwQxXpzDkHtEyUhokFi1hXmfvQgwtNr5FmDPkSrWeFq83CGVCaf7rKAo3ASsXxqMTh5Fd",
  "key15": "VJE9d8zzhotQyhPxMAGFtkgmx8hQuZHHSBjSNybbLvG8AiofzDDi6edq2NwBkJyaJ6QovCT8GsoRaLQgcN2TDtC",
  "key16": "4qdf6x2dg8tmftJqzNFunkXxt6eLXK5Zgk29NY6zCtSK8HrTV3PH7mRwEvR46w1U8zBvtwJNMe2YhMNkpUqxy6yR",
  "key17": "4SVa6XTH9WuLvQRC78wGT8J7DKa6bMviwRQagw18RhojatCVjriCVtkN3fJts4R9CCcM3Wtzgo1dZutwbw52J3cD",
  "key18": "5acNNPGYoNWhNb27QQTqjpHzooYCky9NJK8kfzbpGU2P9NNZDkrShcqrtdZ8MgUuufk3mUxP6jXPuf9nvUMAaTNJ",
  "key19": "57B6LQaoB8cpbtW2Rr8V5umspnxYFmWG4tFQhFDuiYRocJtttXfqGpfhK1nn2st1jA7FmHHkgzqWqDNCQiGJsTwW",
  "key20": "2gXwF7VS44uZF7PyC9STfMFuufVUX5EEpGrmzeU6X64sqcH7v9w8SKC4SpR2F27EWk9QWvhKzwGkKYsZLKHcMrC6",
  "key21": "2DstA36PKV2RWofXvcjkbTL8hxDArpXSD71HsBoTavBwSugYEM1CzggL4cNsjSHFU2hFPHkX5s7vzP8vegQb4kH6",
  "key22": "4joUAEgipP9c3aC5DvcPTp2GAuYx3NRtz9gqrn3SJPKfTZAdyxmHL97m9bDGF2u5c3yv3hfjths4gwPXS8nHzPkr",
  "key23": "2NSqPAWgqJVhaKNwZ4ut3xjcdo7G31LMcV39kTS8bzSnm2SGenZVhp6cs2fBzuSpTNEKWX8S27ab2cknWCZyAmVg",
  "key24": "3GDTLU88guidBUzCzqRe5HkobbuxAJrUFEacp5cbaycRk622HSTQtcGzx9aNhNxHsAiTvVwaeCgqAU8Rnc8T7pYr",
  "key25": "618r2VEL6nchvTE2gTA6FAvLPZWpMKPHTPq6Ckf4ANz4MbRRC14z8C8HeLJKjCcy8KmR3gjeYkfUHW99oMnLGRBC",
  "key26": "3WJWViZ7YzdmTu8K8ERvFTw3TbyFuEVMjRDSDddCuwqJkU6L29Hu83RaMyqF72d868a6L8mA2KcN85wmxGd8kTb4",
  "key27": "9n37dJSZe6UCafxQA37tMa6urU6vcMumdWanK2vFtoheoSYFhTpA5Rj8tjiPik4zdUnTtDHt3ijzT7ENwj2TzuF",
  "key28": "4TVkVgmKr3Za3ssqeSAkUDJGD5bSwbstSxHFRPFSuCGetxzqA45mCXD4J262YeTdc8oRCZnLvMHFz5YL5MpqEKTW",
  "key29": "WvJTbEJF4CpwZtKbjLsqz39xEG3n2mjcJQSXGF347sEv4jz59RdbQ44Cnx5XpRUN25BXJUhiFCDoMkFpjNbZF2T",
  "key30": "4x3Wtt1AxkfvGHEgBSivBuiRjQea1woQc2tDDdyQpoSttf6Qw9Ugw92eahjmUgSD2MDsteaeem6Zzgf198KumuqG",
  "key31": "3WbCycDQwgYrQ6687ZH6ZpRk3Rvm13AqSBNbKnHGsbfXcPyrDCWqXUZZ7EijiUxikEV2xuGLGYPZ1HmDP2VJhzmt",
  "key32": "KLeVYVyeFBnm4PHgKbcpWon9WsyU9jawuftudGCHeQUnq8ozxFBooVbmCvr7yY27kqCzLeM5UPk98XW9qS4hhb7",
  "key33": "35tvR81UYQmipcpCUdBZNKFZ2s9UCRGi2cWvH9p2PNStiNmJsRAFHTvvoZPk6AD1VPh95qgwqQ2xA5vWjxeYbdPp",
  "key34": "r8D1XFgExU32HG2nw32T8USejbkiwzL8ho7P9Tmb1EdVubXcZC6cSLRfFi65GhhvYtrGC1VMtq6Fu45URQgiCPp",
  "key35": "2L4XVEN5LMgNsMa9eACTCXLxir7dtxH7SNeYEoJTwZAPYyeKeVM3mQSAX7d8vrm1bmT3ybkbBJycGaooSrqgPpAA",
  "key36": "3vGj8r5J5s7jzvJED7Q8mZNiHrtiY8ZcUkwjv7weLVBUJi4uVFfDqm66eV355yLjStVBdXbEWheFcmT2oJF5XeuV",
  "key37": "xj59kZQ5YPN2XLAnmg2AYw4jNhqyjaeryG7J2QCKVUb48VUuktf9FHKGviXqwowiezKA66HKWN4hUu2pxrBUV8c",
  "key38": "4gz12j713C8aXJ1md7vCP3BnBN3ZDkfVA5Vw3CiufZ3rMKY3Um6MhRShYAXAundbDpoo9hGq4ot1rRXbJr1CDQs6",
  "key39": "7yrTxxdtwWW4HJpcuuq65pGpD9dEEZtGoaFEqfc9ee9Dks4muCKyHmJLEqY5iUHgaxExYMMtyZUcQZYtvaw9iLd",
  "key40": "64GngrsT5NxyCPpVxw5dDoikbrLmjXxaV8PabsxmU8SFHTFLQDFtB791qsHbvpUzStreBiBfgQBd8KRAU4SU28Wt",
  "key41": "66nngtGXD1LhF1KjeQL9S1FmMTiw6meqTcDkmJrK9Jg7G27updEKf3TMGF7UpA93RhvcEMsKRo1jmWRJxH7fWdax",
  "key42": "665pppda5URcKorGakP4fUz1DFr2omZezvMoMiHsphKzfvzqf1Txn1KHcrdgkPRJ9auoN6tMVeu8F3TB2GewgQrg",
  "key43": "5EBgygVRB8L1VfoUuKVJBfpUqz2jptosJcSQqHBPBbm8yyoWTmdJ1THN9WtVTxUoy1wLWptcg8YZkXczq1M4dAMR",
  "key44": "rYhSNRaDgduavYHKAUMMLpGtpeFbCyzzM4hbf9qgAdz4jiw1T19d1RPfo3yvsoNpAr8tHgCXUHkd2zGZ34Ji3ZG",
  "key45": "3XeMc29k1eJvFrPNtcye9WvyX1LYzYULKr4hECf4eB1ND9ttLkA29vChx8ByQriRwmAihEyaTePrtDizLQTvKer1"
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
