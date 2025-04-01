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
    "64XKCNkLHEhDRSm6rY46RjsiV7iCeZdi7DPB3rCttL41D6jmhHHNmARm6LnYZqUAzWKfdWhhf2JRzSVu7UM4n8pk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Aha3Vq491MN71XMkPHUrNLU9xQ18fSGT7jLe1ctdgAEBdLAVGkrrsz3fFex7BiyYTM5LeRmtXsLGy4VAeLR2EBB",
  "key1": "UuTZnY2RqUbj8YKPozhjNKDyWedJszpK59tPUMyAp5S7Xzx4AJvdmdMuU7VXdRMgM5mzXiVudHrvsfqERqp1x4Q",
  "key2": "5KKhzmanawyLRN2FHHVpEBzJ77Dnp4c2jy1hqfa6ruccSXRsGGSrm4hSxtrsMoLJCiHAuUCtRKtcMcs4U8hXKsc7",
  "key3": "2tVxzSAFh5NZea5QfXMoCKLbi6X2miGWS65VsNJ865FjfctC4Zj5bUW4tnNjzLesKbpr1ARnXxKvEjtNPA8fMcwg",
  "key4": "478FgY6X2FHecRYd4SCwokoihQRZprksvtoW4vGoYF2Cv9SRMuk8Z2ZVdQzjzqzoCxLAToo9vbYjZTSKAi26Qrw5",
  "key5": "5Gq1UKgs5iG9n4BXBh1jryrRNauq5m67FJ5MGamEfmre7bGJM3rJSuZjZnoEDKAn2RwWrwSzVHJ4zjyDh5x17UE3",
  "key6": "2JmLeE2eHTHVCesJRTzB8BDuhUmqWvaeSRHhhLvnV1CWGRitidHMyqWyyk1sbGyHn4t51yEfpxbSamoWeWEthYvF",
  "key7": "2vzTHcq9mRWMidydFDNckAYgRkdsPfP47zzxQDfy4LoNiWvPJH3HjgJuRBmuepLmweqLCyyFW7W1b8PX6gLya2kn",
  "key8": "4ZrUx9JW2451YviUXz96obRT936R4HkvhfBPQZk1tX6ntovPaeQTk7HMQ9AoMck2FsibZFfuyjurMMNmzCZHYXnb",
  "key9": "4ChtBpgPGkfZtVfBHM8zK3JPHTcyDUbUngSi2zeCDJQXoFC1F29n1Wa5iCYeqxL5Gkfh8rnBUEC6XztCk7SwtAs9",
  "key10": "fRaXbwyrHVWh3osjJiyFZJKXzctBZ8Ldu5tV2FzM3tVNtuiW85G942P2LbUXjiQ5osGQ6DsbPk4dePXoCSB7nzC",
  "key11": "517GtGTRhTzQgqeeV7HWPq6bhjCh5hrWRJ6BdXzTZ1Drn3dyK1Ps9mDofTWHikeU9RbXgT2hcHQMf2AfetPG1uxk",
  "key12": "4q2uSii4uvxAgWAjh1VGpxRKZCUkYhkJUptEGtu6DXE5wUAJt81Ff5JaWTdWNeEt6oCpQVTBmWmeE2oMsAYU8V9f",
  "key13": "3VwqLToThQr5oxdwigj8AMHZUjoLLCHpgkuTUeKTYuPhyM2sZtukxdBSmiqaoSadbMnQDQvEmo3Zm1eUhsDQAYkG",
  "key14": "zfCvrpx6F9mXBKBzugTPhXExK4brZGYkN42JLU7E2QDMmLo53Yd2MjYZgn9oPdKWNSgHBAneyiZyX8ZXWKykqEa",
  "key15": "4uCD7KfyFk9WGZDPbstttMdpnVjDg3usj5MqXXw7JXxdg932KJwRcjEHvrBRCvWdiqmo6RS5mvPpoYUVbg48ayLp",
  "key16": "Zw559LZXKUSArsVnKawAdRoPJaQU5Rqhj9qdNZbWoobJGAsVSASRDuHaQLcSe5HzkLk3DoHfLivTFps1TyJ9c22",
  "key17": "Eihvoi7tYkdUHoCFkdPRJ16CwQUJ4e3XxSeQkoDoQVFHfqQ8RNg6kH1Rsbcug48GR9SGfBGhEJYkzuvNxgZ8vQH",
  "key18": "5AA8XRc4htUG9PqNsq4TwZLXTUCAPKUAVxQsd34nA56F2YwjiCgHXa6cre1jTDq4irvUSWFyjxjm1fsNfRRDcc1Y",
  "key19": "2JigQnBbd35keii93SQpka4gciTJ1t9L7j2V5oc3b4mbeAuqSMbY97S9vKvv8aYRzVYFenc5mpLtFPZYTJyyFHZ6",
  "key20": "3WzffRYnFMMwMJoSpMNVTDTdhZtpe1EYwcGvsJkoyjZkLp8ZQyTjwC9Lz37QCZTEaBiTDty7cQ5P5eTXGx86ywLR",
  "key21": "267u6UMA3cHbFejuNrmjy7jFCLrLViBixLiZbWoZUdg5S9YssMZ6CrJavRbzmSCADAA1vzaCKS5zJt5H4dLGYDpp",
  "key22": "2thrZ8UiWzPfnHQSW3gfgNWqYRBcAGaVC61RKhrMAojELW3hBsCGEyBrSiwMUC1oboeX2YooxVrDSKrorr8AmGVP",
  "key23": "3FjB7MbzDnoAe4HKGhCZvj2C4hypWX8p8HC2NE2hFvFAefGYaKMPHNXz72BmHndmHvk2rj8usaujhyuUnH8hGGHU",
  "key24": "4jQ7QfxE7goDhoQChDKnz1kvBMFB1vEYPFYXSfQNX4PRA1AXRuKvQJBbSKHyZ4XJgYXq9k6CAGec9hURGJ3iN2XE",
  "key25": "5x36FSzq4k9R8zCQczTyPJ4F5mdcjauMqiZzibDTaHMeQxe4HHyFy14GeP233CEhgMc8hTqKFPb1vr5VZHBbjUEw",
  "key26": "4kF3emFXwQGzdsPofPHhXY9Aw7E884AzQD2SmY9cyz7GmYvdD8hRNgfuB613roCThJiBkfUhyoSrqumVSq4kyEE8",
  "key27": "2K6dV1pwGzAf86m3ZsXyYfE4AHKrnH5SwoGqZwgFMLte7Z9oMvkGiGyj3h68UiVijHtZ6P2cNTCRj9Yecbvsc5tY",
  "key28": "3LSSdZH7tydTbHvKbSuFWBWRSH6f8LTToUZ5WXDYvwU47967A47jHE1Wnxfic5dERi1VWAS8kE5c6uJErg6UU3MP",
  "key29": "4cm39TndGjSGgx1kaBjEzHT8GNrJMcmx4WYiUZo13wRJfaAe699gZHjMSzxpF4g4SZsnc4AzfSpeMBDZDuGksYwR",
  "key30": "4jgDBCgAbsYf4cV3mM2WRXDNPE9aP3B1ASgjjywcz8QrSX1zyk7nbThWwE5V6dxUFSkY32H5SiUtMr8FSeujsSbv",
  "key31": "4T4CR13TcDrWdLGjpQv7FMBBENBaAdb1hNKfuPRhyp5JdCVPwA1r3LD3U34DJpqcCU9pWVVDNWmcqQNnhCczmcPw",
  "key32": "3DtpGbyNAQhM69sSzSzZ5TRjDyXGyCvTmdpnfW1FknWYm3MjCHfnj3UqSRfMkT8XbjsoepEzmZ3gJ5PUgAqRy2if",
  "key33": "2MtAd7mVWoBJhYiXwLunCT3Rg5tzwh8jwuuBgszc6n3R95pvkU6dZtrNv3YmhiHYxDrrxA134J8Qgdr1Fy9qnvT4",
  "key34": "yLuDXcgYodJiptBFLxm6Xm15REtLW1DwvsKF4qDQNbteLBZ5bmbkgCSHb8LxTTE66QWzT8epSYRXinJPaoKjqzz",
  "key35": "66H6dLWtdR7fNoY7CMzGrdkHbpnHkVCicGHXbKcuWCB2HH2uLmBcJtibNKBbYWDc8Q2mrhNuHmvcZdcqHrFDJnU9",
  "key36": "QdtQsHwae8KjjcVndJG4K6UyPy4DgGtDGGcJcmy58HSJMWWeJdQy6J3f7pQLgv6dSc3eFbjcZCdUYdhuwiugKsq",
  "key37": "2oC5hcM6125d4xGZCW9m7BLTPRprqFuFr8gLA6yuiBJz7pyzzUFyqrRSpimu4gM9L36kPY98cX6QkqqLddTbX3qW",
  "key38": "YYH1UUJ58R5ueUK9andbu89AhsZVdoa9BYX7WoFEkCQXuuddZBJ5CZrn9ZskMpzCpDXmcLYPTDWSHgXAh32ZH6g",
  "key39": "2dAvmb1nBEWJoEoYENRD51xFZ3fLvCLjJbUNf2N1TyNQSuYEosv5HyXswnQRJ36iiY5Ru8P1EafDEbEh13bSVZ7d",
  "key40": "5N5QxuQBUrMTKgnZ1EJWPtsnY59DLqsvGgcJVNYJzW7EPr5ERYBE6w2rCMchp87baRHTsxFQt1gCaU17dHFyaXgt",
  "key41": "2QpSSvB8R6F7mmqp272BMgpLRb8Wom8e9m5FPixy4StKPPvQUG4WZ1fwUjBjz57fNSBj5yaBABs9F1qCHJmU6es9",
  "key42": "341spm35XNfDyBZazSFUaPNMVwPMCRZjHVtTXk6wPY1WrGV8NHUTQ3ZZFnzE6X37Ds5RxdbQee5rqL42d1dQccg8",
  "key43": "4vgZ8JGMRb3qb1uZ1zNsETudXCW2wf615YgviLGx8dRuqJiUQFBMt14cTQGNsmJptpk4k5tqvWSUrVN8nqAZ2Msf",
  "key44": "2xY4KZMKz3zyEaqbRqt91dspTmsdxNw7qStfNLdxqXyfp8DCLyYzVKJTXpQ4HkGyfnbAtXi5nwzpounyUmanfDBT",
  "key45": "ZQbWet59BKeiyxjxPZyvGD8h5ySnq2TfKqutBN43GneGZ5bK3jmxomXWYWd6r8kP9DmQQpm4Xo6ZTzp3Zbo1KzB",
  "key46": "5BUokpq7bYu3N4dCknkPieikGfoiXNu3r3yeZuffFViaSqdF7TnRLDGjREnaNfuDfhaQBLJfgFhVb2gxmhckEwM6",
  "key47": "23r5uaAFY4TTPncWMqpeLqZxBMDHQzd24y4ZnTNMwMorTNEQjKZY3GME9Whn52TfcjzkLYwUfeNMtUaKtkZiKYC1"
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
