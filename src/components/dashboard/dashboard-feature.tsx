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
    "4C5QzDTz5hyjveES63mNQBxFYQAhYWCXjDeHqah5vBzeUVyJzJoSJYSKeeeMHD8bbwaqEV9SVxX5pw4xVSssXnwp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ae5SYe1LDKXw3d2Mp246FCRa8um77GKqWzsX77Ce951hzz5BUDnV2TfVdNdiY7DWxU3cWym24LanTBcntFccpNP",
  "key1": "4e82bciG67NZmJJ8Ui6J9eeLTRGAGhoArDWLDpULe71j2nzkuRqPrBBc3HBAJVH1DHPs8dvH68WsX7KXPX59Fsx",
  "key2": "FDE8riU6ctCW3mwgVQ2VPmKaUSZxyENaPRX64dgTTVTrogaUftY9sfgGFdvcKYiEsVxpqRd4KLXsi5R18PSxXAP",
  "key3": "3H6QQDr5n27g7rz4JjgKLQZJDd7XupoWXE6hGuxYLA3x22JLRhzXgrqEXWhwHPNveCYhGSYsz82C7usX9gHCavJF",
  "key4": "2mDNjBqpkhSdBZGiaXwwaQgwSWhQRKiy81iqAphSgMPwQ6ZBafEdcXudnZNimqZ6NMADhxJDp8xSQFYhMsq9dwkH",
  "key5": "4KdziN1JVVza1r71LnWjga72PcZg9Aqg5SwMYiBFnSJ8nJKqrefKThr84fbLcV87qoYmWgpnfRA8oArP7LsvrRoQ",
  "key6": "2vtesemTV5HomwW1BePPWG9bstnxzkcEWjoeKZ8HeyoALy4uDBUB67x2jLJfixjdRSKnswvsdBy3eV7cTYVQzMSQ",
  "key7": "2QPAmu3FqfaGGrEbx8Z5kMmzdU81jFgX84TWTxzv5KEv9Yv2Lqva1UKFyfxdYroqpTAkDrxjn8bDy2GYXGfkhECd",
  "key8": "4F566W4kj6EPAHNcuf32JNB6AVESaL1j2Fp7e5E2XMk2EXjhvnoy67JXJjCnrN7WGu9BxaXT8LsY1KA9yZ4HwiQj",
  "key9": "3rDPhCZWyrUXTCvKNcM3GpxTM5MNsnmWhexBkLnb8oy8KUbqVLfRBGP5FqjQi9JFXb8FLcUznT5hMzGWYKi2xYxt",
  "key10": "48znGfQEVK1AJ2fGfRvL691ec9G5ip9di8GGVwzeHadS5JjVk85rS1scBLcwbmJtxGXKfXca7F8Tdd9cjb7euARU",
  "key11": "NrXpLESHX7QU8BKwycX9zQfToqQbFMqir2hrKgU96aoy8WmkVFjhUobR62eJ4bTiHFM3V75gN5X4P2fh9RzjUFf",
  "key12": "4BF3SALvkPSSJ3fCBDd1oKnNqoBvVwHHKQTbu2S7LpEjHjG7Vv475ubTUiv3Ljz9EGsth8muxCHo1JW63LbGWSHa",
  "key13": "Zvcn5SFwjijsoAU3eNzfHLoYGaM7NfJXrKAfxKWuz7vCmp9P2n73gotKNCAtnLK2BtatL9FuHq5f9FL1dC5JqTD",
  "key14": "4snyRvSrqBQcCgUmVr1UFmm3rCLvT2rAJZfvekVCW356vHWhj9pZjMPY8uKReKNNtFoeDgji3ZfPiWmPtZkuJeNM",
  "key15": "4uyW2mweg1sqcuNLovhreGQxfyVpDXiSJbHfKH6XmWasTKmCVHSN8TkvNHbrKgZ1XWLN3Up2NtYjkaZvrtT4RfXC",
  "key16": "2JsH6h3JJzp6rBpnESe8uGjQKUNS39rrc2dKutvJE1p6Z4iRg5nz3CENBDmGi9J9n1cq9MoDNfNja6ystMLnXewx",
  "key17": "4ZCnSD9JHg7ExVso4HiWf7T9bfKt73wL1sZgkqPeWBb8dTwcURzXKDALPx3JFzyX8DWenUCdwhR94SStfK1sAbQ3",
  "key18": "5SQiXffd2MRWAWYR2J2d9xR8BDSVGkocd5fjvWHQYMzTDPMesusA5LNqFakS1jwccW6aJZi3qwXZawoSZskAdQrU",
  "key19": "64RFGRgxHeoYKwcoAfekshcJKmGUEsqcynnM4ABMrmXgJWfHNDAfVmUr4bdEj4w4PDVZcJtKjGW2BJ3zqJQmR7Ud",
  "key20": "pX2ZRN5MhChJaQ4tcgYtsvVWXuEH1haXgNLtob9iXRhs362CXaNXjTk47rxxuPmtJafUJAaGerByJJ25yB1ob3v",
  "key21": "2bESyUooz4XRnhgS8EzZuVvaL1MpFMJ7miZrfQVXRA7EF7j8id9d2eH75vTQPVQRMrYnhK5KKimHjjGJJwQJK9Jn",
  "key22": "3oDwh35VP6J3XKLjFe3RXQPmZ2BFDhKf82mBc1yLPuaMF8gJ9CsYSt1WYSCvdkBPDFuDpcuBZHyPkqMRvmG9ebky",
  "key23": "4tGgKQPq9XhZDrTgArtvGuWCFPQwrqGEnEF7oDAgU5RNPfELzqQE8WKdR3q1kJ8pTKCUD1Qtrxf9e12HbCz8MS1i",
  "key24": "PXMwTLF4j7aw8znn6VkPTUYJGUZUc5Qe8C1nB6u3TKowBeF6MEKDKLUMLZ1ZFPdMhqEWgxjy7stHZfJYTnMZfAr",
  "key25": "4UUfugG5iDqGMqQiS53F1JazGAPXgBxC8yprw41JwUmUeFfDpY5HEeBCH9E4B7MB9tTa9ynnvUZcU9j2vY8YNQk7",
  "key26": "2iTBTmRQkpWENhZQDzEShZKp6zVLVCHj4csoMBuVrXRixctiP3BizD8NajMnhFoMxVAbCnQer2uGVfSF3x5P3F1Z",
  "key27": "3wa41AfwvFNndphvN8nhc432wrprwQNmjt4fSvLFxpXxZdzXb9CSFLvBdGMHYghLYMH5bxdcD3JGhPgjbCvwnQbm",
  "key28": "4wY1BtYE5SKb4wHTfiVsQGqtCEzQDmsUW4LABFBLjsDBiXVMpPwrdcA5P6G5vTmAjkV4rd58VmZJoYrMs2Pd2j8v",
  "key29": "4QTCCVt9a4kzG95wtvp14kcEG8H2AqbXZcqDhE4r1sDyeDsG3vedhEiq4anzC3up58DKRTJkzLno9tbC7HCuwcDZ",
  "key30": "3BMB7rJgWSq2Sadv6w8Vkw5VR8i1qQbyJhTK8hZsnfaK8kAD56BCrofqoLvwrUpiW9MgPotXuaQHmmjqsKYuXXgz",
  "key31": "37G1xpGsT1JWUvvLRXLcJ9yYj8DCmXrcTkYFeDLYyPTVNXdjhAiomL27CyvgL15NCTThQzVQzWRRHHXwEPkKmmeK",
  "key32": "Cjka1wgb7g5obSSj8is6FaGMvvnAiuEJzotJAUdAetD4XQgr32GwS5Nu1cRARrWqKBNMPwR3mszAeMtBgvmfFfE",
  "key33": "2vDuhboPySuCADAeBRRWvu1qXMPfQ3siDKwzrs7K77iRS1FXvzvjC3itG9ENxr3XpnGz8o2m4ZMzF6bttGQqZER6",
  "key34": "FucbwyWzNV9nPPRszWXsiTDaEYxuMx6iJX3x8GCUKVFycE9HW2icav392GpNDcJ7pxj69kNsdvwaf4wSForXZhR",
  "key35": "vmRA3g5GybQmVXA4EUz7ugo1CGxQfC8bSAicbqNahq4VfSNmGTfBBMx8mRZx4xCQQF6zS6WG9jzvwGMNshTRjMV",
  "key36": "5Ex4nv3DbWqbY5vYCkY4xMCQP7zcAabmvY8LQsCUf59HQ9zU5t8dbia7phUwoHH6pnH5iTn9siRAnTh4vFF7ksfr",
  "key37": "4dFPH6XkGY4St13dDAnDE17znGD6mqHFW9BXoyxcqzpPFvvj2BPrmQgXnnmsjfsXK63m4reD7DWUtJUWcHkEozbm",
  "key38": "2WGyi6vBA5g4TTUugiZpnM7A3tSekKqxKkWsUtPdmESiPUTNswdQRXLqoYZGMqi3oDYpwStKBVCmymgAq6KDdJhn",
  "key39": "3Hqpd86N9RW5ZoLUoKp2kn94k3AmhKQcvaRQedfDsxTguu6zcbvasebE1o8k658auqFJGuRjyFDqLt5cwbZoccRe",
  "key40": "3tod57qy4marWkEw9vQ5QyykexgruhHkGuMcRgZskvUWb2fETdnpAgvJDy6ut4abhtJMyfUAmoLZsyNVQrQU2J4T",
  "key41": "3SCiMdonFQgwgrGwVm9w1gsWSYZUhptwP92XtgKBS3eqAU2DH97wt7qacTJBMEg7TowBR3ChJ8L1bpwdJzDUHRXG"
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
