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
    "5Uc3rFnJfx8zDToHyTPHHv5tpKWtyfBB7bDB7rqkeZR8MBH9LqiPxMbAwBeJG86nsGAQ9foU2d7wtUE1yYqVxDFK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HbaHmN84Qg6aqbaJ6DNSg4LwbbnxNxJFZkDg7LP5opAufNGmTstLxxBFzn1Ttb8B2rzGhs5TzJKde9PfLvvhqQY",
  "key1": "5jQhe7ikyzimX9CywAGdC6g6K3sNDFL8gkJ213SRE5QmyLg8WEsReGhHK5pmBDoCzSvh7K35FHytGamaCxnUF3kh",
  "key2": "5Xc6PGDTVWXQ7tZgAbZoJQZ5wRVr5rFG4Aj3f1qjS6xdfDikhcyA26ixjjDQitr3w7pw4HcJfMSE19AV2NQpeCTw",
  "key3": "2Lbqe7iQz4FzUCSjbmhVZukXXT6MgHcqhYE5h863nTEvYGjze5nTYSoxTchuEL4JmLtiYEGvejYYpKQr5Hypx9xx",
  "key4": "Z7e6ufHyaSRcECAEX3AUBEV5YGRuaqp7mk5EnU8HyW31zatEfsj8QLDaHJxYKAaY2fkLtJByGkQFFDhn2YoMqQb",
  "key5": "o3hxj8YSoDDTSF5WPWJRFiYWd6Sh4wDXmkpLGYE6MBLfwqjMXgUXG2nYxHkzFXtCm7JYjAe5fJ3yKJAU5fn8CPx",
  "key6": "kyrmDBBs297ybGrPEKjSYa4XXsF4fVbYvf7NSS4Hiyq982DtgKCvPReAPF8jVNqdHTz39gK3y4HASxXrpBZBiC8",
  "key7": "5tkRgzDYRCc8F1255BEQA33djjYmipPNacXvRmQCTWd17GrqPty6QkiNpTkNRD8C7ETC6UKSxnVAnL7y8jFgZqVs",
  "key8": "5dEQNoFYBrcEmcysccegXc5HiKxKw5pFaywSRxRFfCowKQGTucfgW4ByKs7m8JDwbjro8mmbd48W8hSkthDxRHGa",
  "key9": "57PMS9sqoEu2yHKvmFcWi6CzX4sAhutKwABQPwf9fGSk8NPHFZPrK6mGRgKus8zvwLWZpbdMJMgFgCw2kCA8LWzV",
  "key10": "ewppzc71BhQgBYWaG4hVpjwMrGTUjgXivfGEoybBdmwRB6ioc3NsxSvxGAiKRJNTQiMBojDojro1GcuCv7w7kpg",
  "key11": "NMgMgpSabvn8j3ofY3jXG9qMxDAf8wZZKmW2nf4eJ9qZ16xG8KhTnTmQ5HrHXp9xT1EkVy2tDyzJ3kZyDxLMpPs",
  "key12": "3LwnFsZaiYvjNLGp6nmtZzRHpWdEbA3QcduEinzj1uqgx7GwLkbMJhoEGvQWjbvVQ9qqVtxW5uuqerUgVepzwB9B",
  "key13": "31ZayJDgzpQ1oWW4Cpc4VUC7i722vtyAJMMVtXeEoeUrrUvRYzvRbzWqd3sxsNaLoiTXAnY1FDgjL4Y5QYQxQLpZ",
  "key14": "2ck1SctVvyxJwJ6p9f4WYSzhMxpbjjUJsqd6vdkRYvJ9t9hugtfSHFxnh8q62zDUsC7QSbvMtqH3Ewh8SnXdsivD",
  "key15": "3NRCiYQskazQ2U589rwg42U5zQnCbni6geDQdE36WNoF64ELiybPZMiuUuKbnqShANogSaFCFSRXjHGD3SnB11aF",
  "key16": "9CxGDE8bNZ3n6qay6MQPpMnKUWc8D7PLcrjAX5fY1FEyhzpRF1fPRuUKJjQzAXyf75jJTKR6bAXZv8ti9fzk6mq",
  "key17": "qVHB9QjcCbUHkppuFV9FE2VRX8GcxoRAqs1ZhMDkxYCUxBGh6Xd7BZ9Guuv7uYandkeNKVmxP591LZrSmdnuhq4",
  "key18": "53KCrMyNDwkurZbXgfjGzHCxYmrAAK9a6Q9jg7x2B7BuzcmxX5j4tiD9TmL8of7BRHzWE7PwcDbEvEBDaJSq9XuX",
  "key19": "23z2Xe3Li7YCGgSWnGB4xMGLVHyymYEE9kGPBCuSxdZYmJPiWiCSJnCChCXweDGNEqXKgU7xjjQVAfhYja3aYUWP",
  "key20": "3cndaiHpGvT5q6q6c1daSPfoWuwSiCabMa1hCLgp8H3hrcAU4NzktbNDdbTShkHWEkEitPYsfr7zsSTB9r2B5eX1",
  "key21": "Hoi3Yr5LuNPpTm3YkuAy5M7HbiZyaDVkt1ZkcJaD6XwzpE7EvPb9tN6syghe2G265z54Pq6ygwmsuyN9QgFqUnr",
  "key22": "3TTwwNnXBpkrgVsdocVDdRUxUzT3oypNBsaxxAjFsCMRLKeYcXZE3Zrh8v91YNLcwJ2eMiXXps3pDuK7rwGG689v",
  "key23": "5xRjfDmdcs71fpuNbb31io2KAk3TPfXp7Y6Xej49dSdP3EM1BBmVbujYkAnsqcAcFi5cBxy3HiqCEwUeHYXPqfwY",
  "key24": "k22hjBdDP2AjP58nehhHUmp59Fsj3CY4y7XhgUUJtN6h3eu2FjXPdEpJwtiHWfLduJrYDyN96ZcJFQAiWYVUQW6",
  "key25": "sfwWGdE4WrtrqBmQgDuLbmhkzeEaViFtxTroHSZp1bmfWLRfH1c962mmrdYNFKMggag4n9vAP2zpv5NEqLGMCgL",
  "key26": "4P3csSpUPjkmbF57MR4VY25cKFCZdvNbTbrX9A4ktAhF1zSyGEHpP7QpPBkFAFyzNHmmoztgUg5KKCaqZ6KTkWfT",
  "key27": "46GZ8tbLZyPqdN9eSbLZDwKRQFgURACyNKAtKKg437zaPewksRUbWThyd7get5ykBnuaVv7tJxnz6ZhCiz1TLnMA",
  "key28": "2D2dBYYpZE7E2TXLbXBMCYBBxsMbHA7E3APcF2p1HnVypk3oManpAmSVfFCaQcTKUiMxsoh8zXYFfcXPJJQ3FYxx",
  "key29": "2eY9ZTQnLYfshvRUnSXRGwuNSYDNjQveaeW1zEfpKcQ7kmMxDJzP4ian6NsF8aB7Sf3ujniKi3oxeQwFsQYyjQLP",
  "key30": "2p8Q251bHdsjussGsHeYfWEcJVp2hgoNdyNVop6AYyW9uzqXpndFSWRbTT1VyyWR9nY8eq4b2ywMQdNat13hwKPZ",
  "key31": "4kLe1TRZ5SYZJYeJhRsSP8St8raL1SvQKfD1uGg3CbsyuaV9ufa1N9qUVs5R2BENGWMFYkMvv3MpFsbzPPvCgipw",
  "key32": "32y2fD9Ns1ruWZwx8iBjJZrW7esKS9HW8MK3Mj3Bgv5RJSssccfUHhn2Xja6TvBW82F8xAJnrG1eRZEHkY5zigz6",
  "key33": "4iYTpWf9MNBFEWoEKGv4LCmEinYCuSedAa2F1DqKnCpc3PuCCJ4AuahwNQyEj61xN7T51G1ajG1pFt6nTeahGcuY",
  "key34": "5c4XLNTQZ58xvvnck4qc3j4FiiT5gNwcBoQ7Fap3XUqXUdt1zKu6P9oUeuG9dGzDG3tcdXSGgqUpFauoFf4bH7EC",
  "key35": "Gvt6Ps6UAoiNhvpK5ZUQXYn1NDRM1iUmsFTjRSZemo7ExNSUScktoAH1Phrs2wKtNUi7T9QvJyNwUHKn1hRxDCi",
  "key36": "2gCFiXt8DwshKXEbnzftkZawdMqVwvqf5Z6fs4tkBc78Bm2UNcnPEzpa1ggpeTZAHkAWTwr7zpbxu7ToNL6FK5rv",
  "key37": "3BRyqKmXaPuLTL2SRzNZNjZzqEC91y8osBg18cokgje5wxYKrEW9APdquDgpSBxhK2u1jdrqFhGb4CUpT4WXTYNB",
  "key38": "2crRVk9rieTMVGepMgUnduaRkEyi3MREieQejjQ28k6gySesH7npwwbA99oHKXEebUcYnNaYQtTuZ6KBqDFJhosd",
  "key39": "3H9wuzgMGCRiLki1M7mKQQbKZ8C1CbzpR6RXxN8FvbkDv8pUJgdk19tsKCUMWtEo95XmKufWfxG1wXj8gv5YhL5m",
  "key40": "31ZVLfKLEZ2YJ1851N79xfydhdoCZG8MR3L5ddoWNwSpHSz2NLQWQK4gYptBxPFaRDHsgDsmKg3QwEk47hB2SQ9C",
  "key41": "xsZM89KykKxZNjkiDpbWdfdtNA7C7cda4QUUi8jDDNackNMseBca9XL6vKMPkTYYtyiWg3u3iWZA2EXCT8baVqg",
  "key42": "CQMPSbQSv63KtjddS4umg2i7pa3ixkWePfzvYmEZJ6XVnu37yhD3KUHYTkUdfv3paJezH1BJauMg8kdsxN7xbyS",
  "key43": "2jym2dJqosATd7wAMwrq13namqE4B8gLq8ojGER3RSNkYbYX5VmXZDHfUftvxkCYqfpZSWAsQ1isuaBnGZTDYXo6"
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
