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
    "62MKp2m5SL1pWJuhzFE6K3t7STLMa3WXoSAmzyVfqRCEUA4mp52zoPHaug2MtA7iGLEThpFGjefcuD53fKW4CroR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HW6RxvHnxWUumzhY3MxY4RxxEhiSbTf6Y6qe5PRnRbSKRVoSJtJdz42BRjaH4B1rJp229Qf9YW2PMVSZbgRGBy2",
  "key1": "5dZmsRBBb46TLrdeasvtMsJPrmM6Bpke3g1DyBdzhEaUeyxmsdPLxHJQZ3kY98MZ5ASmCBYmfTy6RxY4cSXXP6yW",
  "key2": "5GXPbTeMrPJs3ZNTwf7EZ5JAcn7KBnW4yLHpC3FQ7UcN8jAhkbt4GEy2XoPY3bEcyNCwykkLZ4fDPqhyJturVQB1",
  "key3": "3gbKNKi1UnbNh3cgqyeccBb6Sgpz4uPaztNjvsu3qcVax8uefiz4JmeUrPpPJbeDQnwK6QKhf6ydGbZawy7yr7p9",
  "key4": "5BakC3rLiCwxi6QjdSwSP6xcbbBwDmmDp2pMnQAY9Qd7kQUz11obDMBZU8iPSt8t5VPFY8DG5cjT6NiRghTANVnr",
  "key5": "5K89nPDqjwbMKuPkHPwP4PxmdSV8LZ4B6Ut7RZ9Keo5KdKbNWvxev5u3Kb3DwnSGosvaraJiwtfUbvyG3wa542ck",
  "key6": "3JfyZJ2j4v5CCjmBwwMPAHnBU92CQvsUSmY47XUWQxSJY8gJUaJjMubct5nC82r5T1CVRSZauxnKk5rhLP6wHgvj",
  "key7": "FvjR5rfJij4QJS7zBxj4W9nJgm94WX3XheAMJtRzcYN5XJKeP5hDqktLMfVUAKRdfsc3dnkUNzxCwbcmfmf3cMr",
  "key8": "bPq422dWusg6EzV3UEfqEsHSztzvdPkHiW1jfp8hBu3ukBezi6TBEtB3QEwnJocdsjst7g3q2jnxiPG8fbXjoN2",
  "key9": "5kvkCLJwunZh4U4UPWGzA2a2D6ZUQMAHWFFJ9iNbrVBp5ageXwGypNwCwcYqNT5L6JNd4cAYuvw4siyB74gFCukY",
  "key10": "5sq8yp6fMgmuevcSWLuzy6QfthzsSF1t5jk44Y7rV6Aaxeawc9MM7cVHyWEAMNHzkd5U6i4U5SBPrPEbQAgeXnGB",
  "key11": "2BUY2GnQVFiHfK2RnEF53xiCxtyj78tC7Xcgbf9SKvVzGouts3neHnCVdrnwRfpFbfJYM4cY3LCRttSTFBGGELRj",
  "key12": "39kzZAPrQPMvHRwcdHS4Z9pQxKRWHso71BVvxbBY9D5PsZnMPvkbDYS3QF6pdhAvu8DJyfg7YMSfnH6LDJtmy5XB",
  "key13": "5c2K3tX8ZuB5NJAvwsJqkbe5RG9ezEDinzUGtU4cn6NmYzTGY2rfd6GSmAf6f1DzCwncQ2QwUyJctKMXGQFySZ2d",
  "key14": "33AfbM4qGxM7xDRX44v8hkqjem6Ueb37rdJrZccwrHzfSpJrMG118o8LfWfGQKFsN11cXALL3siByFk6ViJ6e316",
  "key15": "TTXPDyNJfbfQeYcWqs41AfM4FD6wqswXiVE8wLnKQHa1fDNhzQZCG8Rb9Hd4YQuXCszyZEocabP4KY6mw8d7Qjw",
  "key16": "58UHdWrfZAx9BGHBJMoj6M2vHDEUfoMrUEjvNjTySv124SKcrTxyzjeN1F8vEPMaxH53A5udE4KkKS8ZMeFbZ9M2",
  "key17": "vVXZPRiangUkPcqsxAUqcmnVA95EXGfEFkh7cTNRudTjTKogEjQQ9fzFaNSVWFwR91iB51MEyqZGFrpzyNnLR9p",
  "key18": "36TE4qKboJAoWbTHTV6QTRgKXcTTmABEZNV66W9oCQ2AQnYsXGDdxRR5PLT3dXK6gKHigTTiBLzRGUiQtVUVHKET",
  "key19": "5YZCZqiYQU34eKgt7c6PqP3sjEh2v1X3nE7iMXjV772hG2JznaKFMLhgP8KMKtEnRt88eP4fmwQd42LjPFrZKF5E",
  "key20": "4YmX6HUby95SBp2aEaTGwUQ99t95SNN5uZMffgWU4SfoJAmnG1egqEg4cMgzqD51EW5D9Gt9QQNJ1Q5eSa6tCc9L",
  "key21": "zcscxhcHSk4JtGGe34Y7U4NT7Mi1hvmGdTc8qfa1yTJs458BXpuU6sbgCD5feZS1hCEiaif6zwf3g3ZkoKTfgLs",
  "key22": "3yYUafbuCjHC5dqZdkf78nNvE8kFk3qcKYJChbdKvThHpNxjg7YYGniQgC5pat45E8fGTk8t8M81wAn9LrvmDwUP",
  "key23": "4TgLQZ55Srh7DnFBQa74E1Z7vHaqUYMruaYs3RWQWacWewgEPjtS6ynPKm7KQpzoijbt81HMeoSVch5hFxMjNguE",
  "key24": "49ZzHjfBkysnyGyryXwGm1ak4q2GNXtcKNL2Aw64JgbYisSbYrJ3WChG78bg4YjGFVwThQPx3Ff8QZmackFc1Qcr",
  "key25": "5Ez3LScYMCUX6Y48jgTKUTpN15PChxGucz9Svrt5LaBsAK7wPpMwmTQUxiajWit6QTTXuTsjJWvLbG3HMN6mci2K",
  "key26": "5BhhJK4C1iydc7qhG38qDUcbohRMUvbWJsVaXNF6WCbtmKemXLxEtYNBP5aFAyDWm9V8QDmFRqh3nyvUHeAe2uzK",
  "key27": "rhyeQwTSRNZna4C4FTBNPuchcSxQ3pjSXeenzFZAp5S8eitMZ7aGmkH3MitnijhPu3oMt87saj2Xc6swcG2H4ku",
  "key28": "61hWwd55tEhVAm3AVcPzGUSuTY1zcJ6WTMaLxN7ukwYUNzUPfkz1cy9u2bwAraBGDuy66bg2iifhmC3bRLhf8fXt",
  "key29": "5VMCniXUMqVEvtK7955bvU9tpinELH1MVX6JKvvCYHdmVAikz8FFzg7sm9mvdfQdqRAHpLYVW59E664UpW3k4hnf",
  "key30": "3Rq6QsPK8CSdnFGAbXtqFxhWLS5TrchKKsG8Z674qUNkdELDAxAoa3oS4Ph9xcyY6FACBZcqhuXUeRqGaUYa8zLw",
  "key31": "4T1LhN5fEPwrAkJuCiPXzquvxY8NWcuv4niWXvYvSvwQLeQwLkPCy7J15qiwaxy9q3xCMQpHtEfYvLZEkDJ1gQAH",
  "key32": "4B9Bk5dg2jguZYHBjPmCESqsX17aTu5gzzBWMCxYFhT558maLCUGh3WnxSbMKHU5qiLpEMfJrZJnfdun1tyyFFxJ",
  "key33": "5cSVKKMfUoRAB1PPU4Vt6VJ1J4Gr1j6G5ygPDiEzQeNHi5NdQVmcPZLc8fuaAq9Hk9VSDg6ebn4FAKEiQYfw9odR",
  "key34": "62kb1BMVKKh6Vr69UpVFbCsW4KVARk9KG9x7rXtw7voS9uhPsRytV2NXtMEDFauzX99rSNDVGw33WYAUxbCLz7HH",
  "key35": "5MGXPyZy1cnLKhvDCwtt5LhZgsD98WfJzRnH7gjVHtyPQAuUjDeMz6S3Crw3UD5FvrPv11FPo28osCZYqWwhSmtb",
  "key36": "4PXFESHeF84n436mgvpNwb71EqndQ6SWkLUAXQAUHsCu5ZT3Uiq2jP9VcpNN2LMCxHMbQx5LwQ5LD8Rj4trikxz2",
  "key37": "2eyXS7XCQ1kiyFqAwr7ftTz5yPiKUjoYwz3mQTCHrbtegRWWgSEMhpwy7Lzi94FbYygs8NPjV3ix16bync6FB3BX",
  "key38": "5fVYKe1Y6v6UPGVw3hTvbabRwADPznV5UgBHkPcKY5yVLh7BZiGFo9ecexTBAiR2mCwRYYsAPQ2aQ6wFtFLRz29C",
  "key39": "4JyDZGKEZfkwgMXGazvsfdFLXsSQPDRZ7mkUCJZ8faAb8KhDrpug3XiQ8wjFJfQnoCsiQXin7k3Fkcfj5tM8LXLH",
  "key40": "f4xjejCegyVErgeYSMDVXwP28DRKtPBZRsqCSAd2gKZ34Ff86UpBeag3LCv899VhngvQmSgq7foowXEKqyEez74",
  "key41": "2C2fKM7MUQQ6Djjv5Xz3ufCkTbpHhdZiK7o4BXBAbjEvQiVFD5a6QxMY2uKfdVNcUQ3jH9wEqjDoNLLzMP6dKmRW",
  "key42": "2MMvAYWyWPpm5j9Tdki3UsyZTzH6WgdmQF9tP8Hg5s6Qqg1UE9hQPPysK74pjqMW47BcwA8ymEopxSoqGv1XLoXJ",
  "key43": "2BbLroCPonuHtSuTwSZehG89hGKH3tNvswvByeHQ1ZLEYbSy6p3VEVRD3HXEKWHKhiJYGzN2VbSTQAeGQaC2acTP",
  "key44": "4pUB3puvCj8cCqiy23jG8nVaSDRtXkvUbkg5a8e7kR8e6zb8hGx9zEvQ6R3VvQXj4r1BpbrG1D26vNGeTpy41wRX",
  "key45": "4RZ912Xt1aM3ZdvwztaSFdbLQffxzei8hyvSMXYk2V6QYz8P6MyAanmNSvwcbmGg9ZKuTCAgoK3QV2p2FJiUJVCJ",
  "key46": "5cYWgp3WfvwKzdXamULV4wQKmhT9WCbfxzjBSPooNJJwJHZHxatjEEKr6tHzMxBTWTiUk8usvgCZYm2V9ZvaXog4",
  "key47": "CVdEodJJhKCAAmmVNHmXxhPWEcubjJtL7XhcDDJ31SFYy6khwoTErHWtDF6S6Kjgv9oya7ZzMSN6gDEkKN4gg4e",
  "key48": "5FeRY9YEDoyUb9yMLdd9U7t5grQXjs7feetox8oyr1Pu6H5n6m5YSMSvS62VwbzSHtHKcQi1QpN8xeCg74tR2TmE"
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
