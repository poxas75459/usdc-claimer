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
    "4anmKyxioq68ojnT6LemU6CoDEyYGsvWztjJnCRNjaj3R6dBuvRWTJBponUuAXAoQGR9kncEWqvpBXBRtHcWgLcy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2udSK4gJV89TAbeRxNZNRr29rhuv7tox7fkaKoC4mjaJDyN9ubsZ2d7BgoBhy2ix6hmtcmkKxeFHQiRQc6kTPeiV",
  "key1": "2JRZ4UngrW5SxiCkw78QsSrUujRux34rvusnDCtgErGvyRXeSoL4Ah99KU3zBEqwnBoEf5tWbGz47sv4WkmEesRt",
  "key2": "Zg3NM8ScYHNCEMbiauR9iYmtSLaPZcsLtSKXBoB1GHiRHVYFxbDjSkbAa4P1m87NYqwimuykRNrUjG5pM2r9HN9",
  "key3": "2AkRN1FdDpwoWsyoUQs2wPGRMZodxE7Hse9PWvXFnKgvDZkvqXkmPYH6ff5t6hW9muQihKqX8ncA5Enoey2dMzdV",
  "key4": "65LGrNxWc8KcC5jvDserrm9zM6ZsbT3S5CD8bmSf8LTBbX19qbfNawMU8LGJscXevftxSc9zmGJ6eoA4jPW8me5w",
  "key5": "26Ue2WYwGC71Nj3t2kzbe7SzngxeM4P1nneZbxg2xQahwZeQwQm8THgsuYUA3LMzugcfkeTyvT2JXJdJQzx8QCRY",
  "key6": "3tTcxmM5gWNQny9ZS89kN9dg5XBehpeEFFsDTJ68YG2g34CuKNUyMmUNAUjBp2274Mfy3RHL5FXxuzM5ZXefZAkM",
  "key7": "3FQNvRzHyCik4TbRFrRWDx1p6NzBQajTHAbVFZJci8JQfemMHJNpRUdUJ6z43NqNJag41o8zNrf8ddVqqQEMEmqT",
  "key8": "VJE9uhrDvKkKreU7DJLfsKFHW2VUcfdtio4QFN5SmZKQ48Gv5aTgbGPD1Rj1j2Qh6ZLmKNCgXCF2hJHyYRoyEyG",
  "key9": "2YjrgJHqHeaqXwEJ5UG9FRk7eJKfxceZVmHDS6yKzbtvZLVNvsV96eAoA3BGBCn9KhzDgxxUrsUB36b3FdnrDNDd",
  "key10": "KFcLQTCXfwcybnWRvLv92oNEkyTq8cCzJRTFzeuaVRqGn8k35h5u1wJaZBQPxSQrBFVGfjknGfuKNokLJe33Wqc",
  "key11": "4NvqRH3MkXSgcXPVhCG9iD1etMuD2RJsrDXnaAEPYcBbESMSpzUq4c6bnNyP8D9jRZ4gx7SvpfWS7dov4rzGs4Pq",
  "key12": "WWX9BReWX3g13mjWHCJEXtKHaX87bRXx1nav7nLqQfng4JF5wXuhBVTeqRKGjh1ECR4CXZ4Z2NiGX2DSxhmQbiq",
  "key13": "5fgPnaDGPVQyiKpwQZM42NnRjvXdwCAGLYPefY99aP3ZHQyZ2chFv9oGJXYBdFKYEzvUA7Y3o5gbjYzUN6ZfiRPp",
  "key14": "MyPbyTXcf1qNny197WJqoquBmrWev8C28W9cVBeDWDzaFMHgNmh8LfCKN5JNYEbFn7e6a9KqVPoQK2DcJwYJYNB",
  "key15": "3Eh81wuVFUfgfFQLaHQHq4hCK3ihF7qHN8uruHYNDR8iYnt8qzXe5F72nfmWnxHE6d5aHS8ivNwP5bo3UbSzEVMF",
  "key16": "5GeDYfxksACfKLT3VJwyfd5zQsXEquhvYrVb5RXeo9bBufuPWybSZjB5ubfLhgmRkJyCHkUspQBWbQob4sQrTuLv",
  "key17": "gUQhoVPc8au52BEW5smNrif4Fzs343w9HxSrMnxES2637kit8rcPZeK5UM3d8nzS3LQNk8rJgVuG6sQTagQqLVW",
  "key18": "2dTRZK1mw4Y2PpCBgNk2x9ickJUQCTbU9Mw1fgXFLGj9f8H65Po91cxn542bfc713qTEBfKQPg2wBda8DZQkc9Kt",
  "key19": "2GGtaieD5tRWqKtSTmJaywRtswiH18MQLd3P4QRddjyCwX8GV4Ayw5yZttua8w1xi7wfhoVpFF7kJhrXCxpajb1a",
  "key20": "suTSQhf7Gu5Bi5brTP5YpfsdhK3qoE3ms9FyAEm8p9xFdKe7y7ukNmKKeYQ3s2ypYmagZEkGBq4vqgrRHaTPLrD",
  "key21": "5ZjrkQgecwZnpayqTnwQ59JK6h81B4mCBLUbzmjsuvwtN4V2qYX9eWWWRWEzzhsqWtqfCaM15Znj8PZp8MPQgsHJ",
  "key22": "3GpiHszZYgSCFJvq4nGyjzHuyu6GA6iEdtadPuxwVzpzVeDKnMxuTtivVi5CZSvkmypHe5kZ5RikehEmXXyy2DFP",
  "key23": "RWwaPnxgar9a3Z2cQZwAYbndWiLvWwTVVFTeE8ZGz4eh3tkSrEcmhnmRpB7dqxY2NC27SsmZAJFXAUUMCAZYWuM",
  "key24": "2TZLKAk9ZqLSEauAjH9kZkjCqACjLxavZiirc5MQkDDJBDFXKe3CaV1qKH7S5S3Tq7CNrYMUhsZX9C2owNXjdNzN",
  "key25": "5iM4DAQhVpK5bCDTm1xS4BJjBjiJg1uffFBKvXJWj5r22iVFmo21oFCpZ9ktsjyDHBhcrmp5UhY1y7VZGnQZPAAH",
  "key26": "31DqMYRmoJrWuZBSgLszopwrMMoJNEs5V9rzVMrwhUAwdaM1re2k6GNP2Divvf9frsizGTexSD5EvhzJ9mzBq4Yq",
  "key27": "3FuvGPQEfkz8FesEVmjSaJCgEEJXt1FmmgbWn7jidDhXzHiHA8FLq8bizoviygpCH38z3rUkNDYHrx5EnJ5QZtS7",
  "key28": "VqmbzFZvNhUQJAPcTLceYXmVTa7SXxDrnaCUd53xdFXhmRd4itLu5i7VPxwED2iSkFTYMnCjSETAWFb2M2Srgem",
  "key29": "3SJMjbrvYznVybs17xPeLwPHA597sCCs5jRJeDPQ2ssJDbob2ks7kc45eBwkdL3KTSh7tWyQSwRTSB1QXGV3Devj",
  "key30": "hjkLy2NX8Co6QWLABKb9Au9Pg9GTAFZWLYX4phbCRwiZbrydKqDYoLLeE81NvrSvYtBzK2kcP3SQh3TGw91jYuT",
  "key31": "HKA9fixZVNheaCpYXtNbzZgpWe8GWw9eVCX8EtVrike75U9JppzYL2cKJ3Mo8ZqvVECMWmaCjDz9d59BxKgXTYi",
  "key32": "65E4Ke4izbZPGtgKzw6S4uneyHrZ3wQf7RoJNG7mkkvEpFcBrgQwojmhaixZUB2YdmGRwho1zzra69WAJ6u772WF",
  "key33": "4YhXJFPDKGMP4mvjUeDDZDT8pj6aLdf6qD9AFaBnMjfQVyNThbNxwJD1Gpf1KFNbRi7kc1CyQ616CQ7UkUEU9SHL",
  "key34": "2jRqpwTJXXTKzj3VUc1ghpyt2ypKwj83Y3XwnP7BUySsb6FigFjLtkvB4UYdAvu1EeQRizGnjjZNA7GWdjuynEa7",
  "key35": "58uLx27jUrLjTw2dPH7oeYaLB7eSwk72GtQ8SXW23tHzY5vs1oZvU4RNk267G7axdk2MsbXyVsRth4Jj1Sk4Rhev",
  "key36": "C51Df7uzt53FLpmjBq79dLQxq1WVx483TKnkYausxDQHEiar6xBMs9KFK3rF8gU1jaJizcVhJcSFSKrNRnMKpFu",
  "key37": "4CQmstnXRuHgtfyxY7mViFSdRh4Kr823SKR3KHgiGTuZTnAS7wreEiwB1ACsDJJrPXRazfGYE9QkkykFQvGbhTw6",
  "key38": "MQFqo81F8fpKGLPXPuWXQi8unUFtZH5i3F9ePhGbr6tLeodDMSsQzxHnKycaPU14gv2MbMZRvMQ5qscpmbBJ51M"
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
