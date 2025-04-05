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
    "23VqYYNGoqSrQp3voPxhqDLTAvc3RdasCq2PeewwXaXmGzUJPcqssM89qMV1g6EKW4XbDfUs2mks4qxBniqXstXh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a32uSbJVVJrf8bnLCytpPGGP7puWS838Qkydfx6BfLAUV2Te1jAAT3ZHjXyaEZHdKDrG6kh5kAWcT513RJ72hUH",
  "key1": "2Qpu4VTUYeUpeejf1uva2yrg225PQxiFTGx8uUexzBmsGCC32FVPdYPEUTaQfeov8hgR43aziENZ2Y52qp5uoj8F",
  "key2": "5Hnt8ARZ1zDmdbFXJG4P1k7A8d716vL8aYm76YiAzrfEcX4Jyzo5YgpfqKyPSveniByMN4qQqL9mMNb8aRZVMQ1L",
  "key3": "JrhDtKqkbizJwVmeTZRMEqG3AUbZkjQTiRGQYvyV4ygCtUKhbdUi9yfqQ3s8kGuc62v4X1mrbvfuRSc2o3SyYoD",
  "key4": "3U74gRLBPtWeWaCBdmy4tfEspKpgWQQfR9RsGLYJhZd27G1FrkExngssBSNgdjdwPpqGp5rSPeqLD9SP3yR4xby1",
  "key5": "5xUgXXpmx3BGBJ18bF8XXZ1f4T3TxfnYnETqv39YmD1FeqvYKeBRH1T7JkLV1DnUgQ9eZgJTqXdgd6bBnvdG3cMx",
  "key6": "3hQW3CMX6y1MJtjhNiRSjm7is2PzSVYi8yKVSHwu9ZmWu1AGdyU7PF7GPG3JRrfpkx53nyuaibMb6TE8M2PvxeZC",
  "key7": "5adkyt8Ezq7yYbqmiNcGbVGSwZMwgwyWyV5uMekwffWsQzFiJxQ39HafNjxUu3DWDBHooe1TWLfohBe8gTwbMM16",
  "key8": "3C2CLpdJkBiWqkyj6vypERrRVzcdmHBjXnpUTYnwndiVkXbdRoa8UHf8czySYsJQccV3MvWSm4q1u7csYm1U8NTt",
  "key9": "4foYnyUMwhxv7SeYWuhEdfK6xDPX2Fa4dbtQidf2wa1XqXUc7GC7phH6b6wFSrTh8K1AiwUrp5ri8untV9jS9gTX",
  "key10": "5UtzBHNkTTEe9HEc5pGqBnNieNDaiZo5uggbuCr8oQgTtVbUhrHqYQXmcjvt8kX6ux3tP5T2cx994jcviYh2auux",
  "key11": "2hRkyPPrqND7UrDSE8rDWrXWrSAa5vHvrW9qut5ewSY8RMziFX6ZytB38Pcyj8SbQQPmuB1HjygJoqAxBKUedxi8",
  "key12": "2MVCjiPZyNSFqnq6gwGpPUx92YtrEX3EcoJBitDmMTxdN4QKSTXkuRq3uwUqeuBzTrkNb2hear93hRjijE6EEUny",
  "key13": "3TH5yPMZLnQ57b4ak3JEqKhmCGziVdCFpHqsEe2VG85Xz5ahR6NpPuEvGuFZfK3g12fUiiHG6WmiJjDswvpuozW7",
  "key14": "2UMyhxT9dAjtGHW7KBCGKqXpUEbskbafc2zWL6KL9UW9KuohEdj2h6WsDPYeysu2etS6rjfmYnmomxerURro7gVe",
  "key15": "2sZcQi2jjdeMbSAhMPKgit2EnCuCdSvF8jgDEv1gvpKrecbVD5FNPcoEmrR2V9v6E8Yh8tTQgd2JAfURuZYB9JwD",
  "key16": "35z7DuiWTrurt2k51CiTsLzuvBGcPDrEpqXPxNXLmo5fYxkcne6rRUTo4SRGSgktyNXMGGEUhZZ92Uijz1KiS6Tg",
  "key17": "4vktmx5B3PxhnfuJP9byit4R151ZfirGvCLQWVcPVU3oQfE4hV9JpjPtbGgeGGvd5kDq51TUJF7Vuy6RzrjCFEmw",
  "key18": "22f5QqdiYxb947qYTRdvfbAXDuR6suWnASqh3rm3EHEZPEpVxkMmMoEV9wEUAsyHArxWyWgTzARuEs5P6aDrAq6x",
  "key19": "5s1VphJF99oCsrb41ScvNpvrgEQEGjRuQM1WxVu4vrHt8dpuSp5D977LvM9kFo7Vgjt9BbU49Bo5CABhFDUPNPbC",
  "key20": "4S7LUDLeLK1vz5PgQqFFeHLRQ7ox7kquvfLm4oWUFNHREG6QikMXWBVDbosZ8QCLTUeb869m7wX2ebwfnyBf4GdM",
  "key21": "tHjPUyRL6n4FYzZzmUBi8c2BRC5usZVXh4HSVRpA2AoVBqey5AbMpe1LhuYDh29Uay8gEVQmeW8cp9At3hjpKo6",
  "key22": "3vLXnYZ81qA42jNZjADGMhQygff3YTzCj1KtJ57q3W2e6ctBKXY4MNDxh27gh2Sei6AerrAnc1ecDjgXjVjH2cfQ",
  "key23": "46iqjjyHgaJy9ZHCc4qnLK4EY2iRNn9HfenBXfwrT9qqHry37dctZm35N8r1xjry8ut5mafBqjDUAXW66yErMxKc",
  "key24": "4uhEaCnNTp6eSMfomGU81VyTXzp2MXQQrcF2YDBnHz7qgbkppaqQ2UNzJ2AUH2cWTWyDyCXVdoJ1GJm9oKT9hw4W",
  "key25": "43fuksPscKQa6eyGN6EtDLbu9a3hH6atomqhu2C447e6r2U1rxiTaraoA3VUeQTfvt8m7UdhrBaVP6BBSBo9pZ7s",
  "key26": "3Ta3UDLne7Vzo5t1sDyDm3bcwdML74rf4XhpJ6P9MK27uxssQMMxLeBgaEr7rM5rhjZNQ4L9YdKGYV55FUbvMLof",
  "key27": "4M7CcU2gvwvqwD2ewdUYS6ACStab13FVgzoJiAm1oNoTbw4svvvtL46cQFqL9JxBF3AVFGjkouGMjzje3pW3Seav",
  "key28": "2DWAoFZ5tEJkYsTGVbRNwkvVjkjmBqMyAru3WnMsT4fQZ3na2AMBC7qjMZtShXhaCjYr2Uz71rp4oyQgMfQv1uoM",
  "key29": "43QrySV5ANrzCm6JCku4by3tYRXRQouQ42Rwu4rcsjCWGXLpHpJAwXZUt4bGwy6vq5rRyBMyAH54yvEpuNtkkhF9",
  "key30": "5XBtF2JUKydRxioRM8rRsBJnr7K8W4fXpZCqXRoL14tsJh63VdDfStfNLd7jE8tTCDyDra7YSCQrTDaXttPuN7qF",
  "key31": "4CLGAFEvctEr3ytD57QU5KrWHPUm51sgaL61xC3ZfW2DCjF9b3SP2gNjWd61CaExhjX3xAWomsHm8zfnb9dWEfpX",
  "key32": "34X3Eue8bbwsWjLSfZx3yACTzToiPeezqihcCmV8Vz2wC7HBp4aP3tKCSra3XijWePQYgT9zFeFTDUA393A7cSZb",
  "key33": "5oMnkjAQGvUkJgFTHG5FbHKfiq1GuDAtAmqeDwpXbfDiwySzFwnvTG4AKinPtcRoKJE6kx6Dhc75hpiwU51P5APA",
  "key34": "2XJv3B67z9UZZZeRCxSKDDxGcVtEDnbTA93UMXuxkBAmMH7gGru1UHEusgEucMT1dc8fw3s9SFVSAGfBxLdKKt9U",
  "key35": "5hERYoV3fK4SPQL2EbKangt777ibMaSPvEZj9Z1XV6FJmVCtKAsfiUGeEjNjtE9xwZZ2FncTDVLzNbaApV8W9pA7",
  "key36": "52mHZknhjohorptk4vPsTE3C2Mx5FP1TQHQywqbCKCRyNUgCa3UBZA2eMMFA1ipHw27JsaiYjsq1AddgtKT7ctcx",
  "key37": "5QZ8inQAZ8AWCjw82FApEGKm8ebNN4gfREHm5XsZbF95N2fJaCWu3U3wCivjJoKp6o3TmE82VKsFVGELrvg6N1BG",
  "key38": "2xyEUNPp14rmmeVvgRYuHu2RBvqTbR9fiJVq29wAxFArLnnj5gg9EwzQWQ7DnPyY4yePJLgW7QsVqkEWe2jhC33Q",
  "key39": "5QpvNN99eF7eJJkw8VyMPkKgo8X5GVse8Uke6JZB1V6z5cVRPYCRwt7F9x6NJUG3wJ4cbnYAv8zMWJVkyvCB1368"
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
