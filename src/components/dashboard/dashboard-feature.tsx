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
    "3qHeEc6mUL8W1RkBDd7vAxBnUmxeNc3Xfnsdfy3rkyWC1jaWAcdFutWjaf5krYaBFdk1CGabpGLgFE5FwHxHjAdr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z2DVn2dgy2xMEE46hmE9gAtZyXRp9xXcJEedbgx8Ne5ZxYNA9m4C9r8enKhZ8p7oSjERKYUbC68wmAysFiriFmv",
  "key1": "c6DRUCE9pNQ46YNMXxJgqxNX3z53N4vmxsyca68mnBNicnFwJsUFKn71BEbTDGyVe5TJarog83Ad5yR7c5tUpGM",
  "key2": "3HN5HNHZQwQQonTLrpt69bWiHUb1v5EWhR5VpWKxZfiAdWAoEkSFWVmqK6ebQUa5G1vENxPugTDb1fMVG8XCjLgQ",
  "key3": "365VWcSxbVJi5gYqX2fsBj9kXhhJ8PqeBiYJEYdnhZqztmtdCox64ykdvUCA3jRqS1k5ghKR7n1GRjDPZCXAu1v2",
  "key4": "BYKS4oRXXzv9vPFufjJ96vxH81yQFuc69YeUojQhkkQ1CHNDA4mRYnxQG8nQRAJsQowe9F6bkvXe8E4xAXLsmWT",
  "key5": "2tZSEgT9aeXHUsUsc2DARV7VK5K76UpsM3bJvCvdE7Bru8mzUpXtQ4CmCqdisUBzt8PpYmr67m8ce1TUZHNwChYA",
  "key6": "iQs4P4pYJYoNdP6jGV2oK51ypL6rfScZbKzgZ35yzMgtGHFqw9hXot7W8Y55EHs8Qm9BPopcjqpaMEUwE14KVPF",
  "key7": "Z5yjdFCKLFQXBNJKvhLMwphAdk6nd8sk5xcFoFs2g545XCrJfSYmpPhUXyoEZ4z5X1dyu63q2h5v4Mh4rrVxqg7",
  "key8": "399Pr1j5gZcR77oNkit4kQSc4NAPTTE7DbSsce6Kv5MFykvAWBWpEVrynBiVcm1ppuQAqji8msWNDWnZMFFDkLCz",
  "key9": "5bFppGbrgXadxS6eV3f7gaHBVmcn4FmtzhdNKm8MzVPdS8n6oeZJ8xVKhjWQT9erZQvshuAeEh46PMnDy4Q98qYv",
  "key10": "4VWtxTrCdZxwy1Bh8kDbep6LSeoWfZvy3eyHvuR9pPc4Wy78nmhcqsAykJBkPY1Po6DqjGaJdqyem4D1kmLn8UM9",
  "key11": "MBDSDHWgTKEJ8hqjZYdkT2FwDFEqwmi4M3BeH4SRTYCiBFTFApSpoBW7dbTFYykViGd48oXigiNDCyXRe5HzqEF",
  "key12": "2X47ceoZ1fRvxa6Qho7mVFLS8fqWZr8JZvzhmT9a2EutPfVHigXGJ2eHzSDXi8aCiFzBjdbMNuZjcErzR9fX7eaq",
  "key13": "bDnvmNSuK9XPMEDhbHXXE3iNVyyNM5EnsQ33XGvVXh8inSNZRFo34XMZqD83CrZtE8ZqkwH9XpzHemBzRVqZXz5",
  "key14": "2n3e9xJPtTVVc6Wgfj5aYTr18T4Pgez1e4BYdBTaj8mTthtn7gKJGzsRyAt3gd7ZsXkd5FutJBoTmzvz54KYoAyD",
  "key15": "5itveaG2hk94Qwy5kN4Q9VptT37jW8gniaXzemX7yKy6JXBrxDKKp5YPLHwZuDqCyn8ZR6DnRE8jo5uv2yyjUdtJ",
  "key16": "4Q1CxobYkdhwKu6oL5Gkt7CW8WpwmBaPbhfM5K2TzVt89GS4Ni2jYpPCvNNuAGJZepCxWH4zYYf65Qk1MNLvtDb4",
  "key17": "4sDzuk3x9inZ4oY4b28cig82W2KqDHLMVA7aFMbDs368J5cdGg5gxHuxsJzShTadMCUzRaqQRdyrkinMuNpTZjLC",
  "key18": "5u2hHxydrMWJ5fz7aZHoi1Qq4JYZJJKkvnSY4LSeHQE1BjpLZxBubzL18BxtUAPeBHX5WVrX7Mju2ZE65kwBJifS",
  "key19": "4zC4fNwu2UVY2iwqPTMY1oEtyk1RDAk5MvMcyigoFuZq3VjUcunXm9CvHgiimz6TG5anxzewXqiYUeJHc5QVzuY2",
  "key20": "17JkRD19CqW49k7PGcCzVxme5oRzXqH9puTfBt2Y7FBFLrr7LJonN8yXDDUjTsCFgtsEdCgUq5S9rZaGa1SEu4t",
  "key21": "SQbgRXWY5Xz3qxMeeJ6a5RLRohKokzeJLbJr6pU2bqvJsGBPFQKFfVEoUiwoEu3hLFxTYDRq1RdNHKNTm7PJtQt",
  "key22": "4P6BEyXhegzpeRjYT9e2GiJWs3FLquhQ1uGwv6KArJqsZLwNEh3zjHJH8KTfce8qqxeU9MrpHCs6jAKEJyw4g4qF",
  "key23": "38EWRhLYqC8a8gpwWT6TopKyXKFcu7ZjLFk9rML5Y6BEHrhGT3i24B394esgK1V8t5kzmkMeU1TL1oKnXrAP7dAL",
  "key24": "3YLkiHqa6UdyDtcZY1RP2nBBo8Sg6adbbhVPMmeAfbW8Q8j1GZ2NnxUv7rkyzzNpTr6RyGme1GLx5pmERvMpmnAY",
  "key25": "35ZKBnTZAuLYeX8m2UsTw9KF12NVFiT1qiPHX3cTwJfsXPSdwGfo356JQ5ZmEQwnkgKy7eMK1DNv8g2Df88jPoY3",
  "key26": "38fD1MdMHhT4L7AqWFUANFDeCPRSwkLmv3Vo2vvp5j5iaBgZxfwd2s6RnPEREWUFHNLzwfpgBnyCeKfR322qbGiN",
  "key27": "5cPiRajPkD94M9B9oSfHMqWK2w4HZBZprGjSYhyWa39ZgARYDP3LS4nG8VM6imtqRAmrjvDCrQNxBmpF9iyFX8BY",
  "key28": "vxbi7TthkXinUuWa734zQrFXHrpJYZojjzMdiqw6XTWKKLWMvBt9oVFqJhKVkaB26VRx7LKyxeA9BupbQ8VHWBA",
  "key29": "3daxqURYMTM54khCWxrZotNYenqXrpjzc6D4WfhGqtvhMGHAWHabobRxdMpVnrfEGbruA3Tis8xUJZcwRHtHTKBL",
  "key30": "3PxssfC3omaydkdiM38SqyQ9At7Q8ANMTPCQ2eq8f9CJQtsoPyW1Hkioz8RetAxkHKrRjqAYrb6Jn4BLhvJccWL4",
  "key31": "5ZLgsjj4gC4QjqxiAnnKtXmqTwr9eYFnut9yfWB4ygeiKxBg83T68emMYQQ4cFukXRA42C8QkXsKVExRirFHt9Uc",
  "key32": "33VjMSjSyuhTyHxLFFr6pqwdFyyKHA9NvZJDVmjiJGwjmsJGRiX7e9N4ecVMSbK8Ri55GFWDRaWRyuCvUDUzWgvx",
  "key33": "5edFAbsCiGjHjfi94Rtm7reXiEvfr1ZP7GThtrtQeS6biZtggwvsnvYmGxiKGeUgkAYS38zc3oJMCvmFqxEA1Vsr",
  "key34": "syDgC2hhTqWwDc4k9PFn3nfW7d9LQEbBdYo9c7S8VgFZTSMUMrPaockSjHt4RsFCaMNCHqjwpDTQaywJdsTpK3w",
  "key35": "32akke5VuP1RgYz6ovTf7rAVB5b5YvxVDQNEx99gAcDCeyK4CRMU9Gf9KtizB4uGJEbzNC37SRrigVbiYSqum46b",
  "key36": "4sFL14DtkMcfTWbBZD5KgFkNySJNT8Mu1FHn6swVyw9GtzceqmesT2dp5C34Y7P6sQnswKbpRe3bK5B5diCnz6wu",
  "key37": "52ujtUqc2UmVjGxdgJuJwGf24hiMeNWdpVT8B3ws6Gqs16rnT49E54CV4m4bWpdir7mPdTcxeJMe2rH3ad7t6Bmp",
  "key38": "3P4mudvFxZU64vr9GYj8T31KFPrWZxkcZESdcnmCo8tFDzYqhVYdMtber6PvyoV3RwGoLivGb7uzQSFyjVrMpU6L",
  "key39": "2p136QzHj3XVm2D23Mm9S1Fve61uFqEF48aGCBaxz7tWwtXfsa9GV6S3m6nR849epeqzrrw4hDVmfy4CGUkymNYa",
  "key40": "PfhjCbAwwWk6vEmHc7A7ms7rQGsjC7j3ToqRJJt9MUvwNBaSe41K1UEVeLVY8UuN4khGscHA6ksfMCsfHMGTcTA",
  "key41": "5aXziFz52Nxeb9CN8x55nPDMN3oVtSjsRgHThbAtgDHho3KPjdZFVfdMrdu75SPN9oRB2Kd7YqLYqX9uwJHxG2cJ",
  "key42": "3MUQjBsmDaRneCEeDJTW3MUfQM3kt5FKCzdb74MX6dfmy23jAt68Bcd8AfcahYaS6ZCtrbvaJyfQFH371PCY7dBE",
  "key43": "4JWcdoSfZQ7mfii7ApqXC2pkqkNf8G5VWjAuBoNCqfL4woZJdPzf6wokWgduyfdRTwR1bMdp1sQbC8wG5TL9vsPx",
  "key44": "AB3bs88ukczxN9eo5ivaJtnt877Srze1Z4exR9rscXX8jhdTAugybHPg6i6GBT9Lyr7hskBiYvw3YPtH66BELkf"
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
